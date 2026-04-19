// ─── Consensus-Plus Lineup Predictor ────────────────────────────────────────
// Pure-function engine that ensembles pundit XIs, last-match data, manager
// quotes, and injury info to produce a predicted starting XI with per-slot
// confidence and transparent rationale.
//
// Every function here is pure — no I/O, no side effects, deterministic.
// Two runs with identical inputs produce identical outputs.

// ─── Tunable weights ────────────────────────────────────────────────────────
export const WEIGHTS = {
  LAST_MATCH_STARTER: 2.0,   // how strong the "started last match" anchor is
  PUNDIT_SOURCE: 1.0,        // weight per published pundit XI
  PUNDIT_SOURCE_CAP: 5,      // max pundit sources counted per slot
  SLOT_DEFINITE_QUOTE: 3.0,  // manager says "X will start"
  SLOT_HEDGED_QUOTE: 0.5,    // manager says "X is in contention"
};

// ─── Penalty multipliers (applied to raw score) ─────────────────────────────
export const PENALTIES = {
  VETERAN_ROTATION: 0.4,     // 30+ player who played 80+ min in last 72h
  SPICY_PICK: 0.5,           // lone-source pick with no anchor support
  INJURY_RETURNEE_CAP: 0.4,  // first 2 matches back from 3+ week absence
  INJURY_RETURNEE_ABS_CAP: 1.5, // absolute score ceiling for returnees
};

// ─── Confidence thresholds ──────────────────────────────────────────────────
export const CONFIDENCE_THRESHOLDS = {
  HIGH: 0.70,
  MEDIUM: 0.50,
};

export const MIN_SOURCES_FOR_HIGH_CONFIDENCE = 4;

// ─── Helpers ────────────────────────────────────────────────────────────────

/**
 * Classify a numeric confidence value (0-1) into a human-readable level.
 */
export function classifyConfidence(value) {
  if (value >= CONFIDENCE_THRESHOLDS.HIGH) return "High";
  if (value >= CONFIDENCE_THRESHOLDS.MEDIUM) return "Medium";
  return "Low";
}

/**
 * Check if a player qualifies for veteran rotation penalty.
 * Criteria: age 30+, played 80+ minutes in a match within the last 72 hours.
 */
export function isVeteranRotationCandidate(playerId, players, results, matchDate) {
  const player = players[playerId];
  if (!player) return false;

  const age = player.physical?.age ?? player.age;
  if (!age || age < 30) return false;

  if (!results || results.length === 0) return false;
  if (!matchDate) return false;

  const cutoff = new Date(matchDate);
  cutoff.setHours(cutoff.getHours() - 72);

  for (const result of results) {
    if (!result.date) continue;
    const resultDate = new Date(result.date);
    if (resultDate < cutoff || resultDate >= new Date(matchDate)) continue;

    // Check if player started and played 80+ minutes
    if (result.startingXI) {
      const startedSlot = Object.values(result.startingXI).includes(playerId);
      if (startedSlot) {
        const minutes = result.minutesPlayed?.[playerId] ?? 90;
        if (minutes >= 80) return true;
      }
    }
  }
  return false;
}

/**
 * Check if a player is a "spicy pick" — selected by exactly one source
 * with no last-match anchor support.
 */
export function isSpicyPick(playerId, slotKey, punditXIs, lastMatchXI) {
  // Count how many pundits pick this player for this slot
  let punditCount = 0;
  for (const pundit of punditXIs) {
    if (pundit.xi?.[slotKey] === playerId) punditCount++;
  }
  // Spicy = exactly 1 pundit, not in last-match XI for this slot
  const wasLastMatchStarter = lastMatchXI?.[slotKey] === playerId;
  return punditCount === 1 && !wasLastMatchStarter;
}

/**
 * Check if a player is returning from injury (first 2 matches back from
 * 3+ week absence).
 */
export function isInjuryReturnee(playerId, players) {
  const player = players[playerId];
  if (!player) return false;
  return !!(player.returningFromInjury?.matchesBackIncludingThis &&
    player.returningFromInjury.matchesBackIncludingThis <= 2);
}

/**
 * Apply all applicable penalties to a candidate's raw score.
 * Returns { adjustedScore, penalties: string[] } with the names of penalties applied.
 */
export function applyPenalties(playerId, rawScore, slotKey, context) {
  const { punditXIs, lastMatchXI, players, results, matchDate } = context;
  let score = rawScore;
  const applied = [];

  // Penalty 1: Veteran rotation
  if (isVeteranRotationCandidate(playerId, players, results, matchDate)) {
    score *= PENALTIES.VETERAN_ROTATION;
    applied.push("veteran-rotation");
  }

  // Penalty 2: Spicy pick
  if (isSpicyPick(playerId, slotKey, punditXIs || [], lastMatchXI)) {
    score *= PENALTIES.SPICY_PICK;
    applied.push("spicy-pick");
  }

  // Penalty 3: Injury returnee cap
  if (isInjuryReturnee(playerId, players)) {
    score *= PENALTIES.INJURY_RETURNEE_CAP;
    if (score > PENALTIES.INJURY_RETURNEE_ABS_CAP) {
      score = PENALTIES.INJURY_RETURNEE_ABS_CAP;
    }
    applied.push("injury-returnee");
  }

  return { adjustedScore: score, penalties: applied };
}

// ─── Core tallying ──────────────────────────────────────────────────────────

/**
 * Tally all candidates for a single slot position.
 *
 * Scoring channels:
 *   1. Last-match starter anchor: +WEIGHTS.LAST_MATCH_STARTER
 *   2. Pundit sources (capped at PUNDIT_SOURCE_CAP): +WEIGHTS.PUNDIT_SOURCE each
 *   3. Manager definite quote: +WEIGHTS.SLOT_DEFINITE_QUOTE
 *   4. Manager hedged quote: +WEIGHTS.SLOT_HEDGED_QUOTE
 *
 * After raw scoring, penalties are applied, then candidates are sorted by
 * adjusted score descending.
 *
 * Returns: sorted array of { playerId, rawScore, adjustedScore, rationale, penalties }
 */
export function tallySlot(slotKey, context) {
  const {
    lastMatchXI,
    punditXIs = [],
    managerQuotes = [],
    injuredIds = new Set(),
    players = {},
    results = [],
    matchDate,
  } = context;

  const injured = injuredIds instanceof Set ? injuredIds : new Set(injuredIds);

  // Collect all candidate player IDs for this slot
  const candidateScores = new Map(); // playerId -> { raw, reasons[] }

  const addScore = (pid, weight, reason) => {
    if (injured.has(pid)) return; // skip injured players
    if (!candidateScores.has(pid)) {
      candidateScores.set(pid, { raw: 0, reasons: [] });
    }
    const entry = candidateScores.get(pid);
    entry.raw += weight;
    entry.reasons.push(reason);
  };

  // Channel 1: Last-match starter
  if (lastMatchXI?.[slotKey] != null) {
    addScore(lastMatchXI[slotKey], WEIGHTS.LAST_MATCH_STARTER, "Started last match");
  }

  // Channel 2: Pundit sources (capped)
  let punditCount = 0;
  for (const pundit of punditXIs) {
    if (pundit.xi?.[slotKey] != null && punditCount < WEIGHTS.PUNDIT_SOURCE_CAP) {
      addScore(pundit.xi[slotKey], WEIGHTS.PUNDIT_SOURCE, `Picked by ${pundit.source}`);
      punditCount++;
    }
  }

  // Channel 3: Manager quotes
  for (const quote of managerQuotes) {
    if (quote.playerId == null) continue;
    // Manager quotes apply to any slot the player could fill
    // We add the score regardless of slot — the tally for each slot
    // naturally separates them
    if (quote.type === "definite") {
      addScore(quote.playerId, WEIGHTS.SLOT_DEFINITE_QUOTE, `Manager: "${quote.quote}" (definite)`);
    } else if (quote.type === "hedged") {
      addScore(quote.playerId, WEIGHTS.SLOT_HEDGED_QUOTE, `Manager: "${quote.quote}" (hedged)`);
    }
  }

  // Apply penalties and build sorted result
  const results_arr = [];
  for (const [playerId, { raw, reasons }] of candidateScores) {
    const { adjustedScore, penalties } = applyPenalties(
      playerId, raw, slotKey,
      { punditXIs, lastMatchXI, players, results, matchDate }
    );
    results_arr.push({
      playerId,
      rawScore: raw,
      adjustedScore,
      rationale: reasons.join(" · "),
      penalties,
    });
  }

  results_arr.sort((a, b) => b.adjustedScore - a.adjustedScore);
  return results_arr;
}

// ─── Slot confidence ────────────────────────────────────────────────────────

/**
 * Compute confidence for a single slot based on score gap and source count.
 *
 * confidence = gap / topScore, normalized to 0-1 range
 * If only one candidate, confidence is based on raw score magnitude.
 */
export function computeSlotConfidence(topScore, runnerUpScore, numSources) {
  if (topScore <= 0) return 0;

  // Gap-based confidence: how far ahead is the winner?
  const gap = topScore - (runnerUpScore || 0);
  let confidence = gap / topScore;

  // Boost confidence slightly when more sources agree
  if (numSources >= 3) confidence = Math.min(1, confidence * 1.1);

  // Single candidate with decent score gets decent confidence
  if (runnerUpScore === 0 && topScore >= WEIGHTS.LAST_MATCH_STARTER) {
    confidence = Math.max(confidence, 0.6);
  }

  return Math.min(1, Math.max(0, confidence));
}

// ─── Agreement rate ─────────────────────────────────────────────────────────

/**
 * Calculate what fraction of slots all pundit sources agree on.
 * Agreement = all pundits picked the same player for a given slot.
 */
export function computeAgreementRate(slotKeys, punditXIs) {
  if (!punditXIs || punditXIs.length < 2) return 0;

  let agreedSlots = 0;
  let countedSlots = 0;

  for (const slotKey of slotKeys) {
    const picks = punditXIs
      .map(p => p.xi?.[slotKey])
      .filter(id => id != null);
    if (picks.length < 2) continue;
    countedSlots++;
    if (picks.every(id => id === picks[0])) agreedSlots++;
  }

  return countedSlots > 0 ? agreedSlots / countedSlots : 0;
}

// ─── Build rationale summary ────────────────────────────────────────────────

function buildSlotRationale(tally) {
  if (tally.length === 0) return "No candidates";
  const winner = tally[0];
  const parts = [winner.rationale];
  if (winner.penalties.length > 0) {
    parts.push(`Penalties: ${winner.penalties.join(", ")}`);
  }
  return parts.join(" | ");
}

function buildAlternatives(tally, players) {
  return tally.slice(1, 3).map(c => ({
    playerId: c.playerId,
    score: c.adjustedScore,
    reason: c.rationale + (c.penalties.length > 0 ? ` [${c.penalties.join(", ")}]` : ""),
  }));
}

// ─── Overall prediction note ────────────────────────────────────────────────

function buildPredictionReason(defaultXI, slotConfidences, lastMatchXI, players) {
  const slotKeys = Object.keys(defaultXI);
  const totalSlots = slotKeys.length;

  // Count how many predicted starters also started last match
  let carryover = 0;
  if (lastMatchXI) {
    for (const key of slotKeys) {
      if (defaultXI[key] === lastMatchXI[key]) carryover++;
    }
  }

  // Count confidence levels
  const highCount = Object.values(slotConfidences).filter(c => c === "High").length;
  const lowCount = Object.values(slotConfidences).filter(c => c === "Low").length;

  const parts = [];
  if (lastMatchXI) {
    parts.push(`${carryover} of ${totalSlots} carried over from last match`);
  }
  if (highCount > 0) parts.push(`${highCount} high-confidence picks`);
  if (lowCount > 0) parts.push(`${lowCount} low-confidence picks`);

  return parts.join(" · ") || "Prediction generated";
}

// ─── Main entry point ───────────────────────────────────────────────────────

/**
 * Predict the starting XI for a given match.
 *
 * @param {Object} inputs
 * @param {Object} inputs.formations      - FORMATIONS object from lineupData.js
 * @param {string} inputs.preferredFormation - e.g. "4-3-3"
 * @param {Object} inputs.lastMatchXI     - { slotKey: playerId } from most recent match
 * @param {Array}  inputs.punditXIs       - [{ source, xi: { slotKey: playerId } }]
 * @param {Array}  inputs.managerQuotes   - [{ playerId, type: "definite"|"hedged", quote }]
 * @param {Set|Array} inputs.injuredIds   - player IDs currently injured
 * @param {Object} inputs.players         - { id: playerObject } lookup
 * @param {Array}  inputs.results         - recent RESULTS array
 * @param {string} inputs.matchDate       - ISO date string of the upcoming match
 *
 * @returns {Object} prediction result
 */
export function predictXI(inputs) {
  const {
    formations,
    preferredFormation = "4-3-3",
    lastMatchXI = {},
    punditXIs = [],
    managerQuotes = [],
    injuredIds = [],
    players = {},
    results = [],
    matchDate = new Date().toISOString(),
  } = inputs;

  const formation = formations?.[preferredFormation] || formations?.["4-3-3"];
  if (!formation) {
    throw new Error(`Formation "${preferredFormation}" not found`);
  }

  const slotKeys = Object.keys(formation.slots);
  const numSources = punditXIs.length;

  const context = {
    lastMatchXI,
    punditXIs,
    managerQuotes,
    injuredIds,
    players,
    results,
    matchDate,
  };

  // Tally each slot
  const tallies = {};
  const defaultXI = {};
  const slotConfidence = {};
  const slotRationale = {};
  const alternatives = {};
  const usedPlayerIds = new Set();

  // First pass: tally all slots independently
  for (const slotKey of slotKeys) {
    tallies[slotKey] = tallySlot(slotKey, context);
  }

  // Second pass: assign winners, avoiding duplicate players.
  // Process slots in order of how clear-cut the winner is (largest gap first)
  // so contested slots get resolved last.
  const slotsByClarity = [...slotKeys].sort((a, b) => {
    const gapA = (tallies[a][0]?.adjustedScore || 0) - (tallies[a][1]?.adjustedScore || 0);
    const gapB = (tallies[b][0]?.adjustedScore || 0) - (tallies[b][1]?.adjustedScore || 0);
    return gapB - gapA;
  });

  for (const slotKey of slotsByClarity) {
    const tally = tallies[slotKey];
    let assigned = false;

    for (const candidate of tally) {
      if (!usedPlayerIds.has(candidate.playerId)) {
        defaultXI[slotKey] = candidate.playerId;
        usedPlayerIds.add(candidate.playerId);

        const topScore = candidate.adjustedScore;
        const runnerUp = tally.find(c => c.playerId !== candidate.playerId && !usedPlayerIds.has(c.playerId));
        const runnerUpScore = runnerUp?.adjustedScore || 0;

        const conf = computeSlotConfidence(topScore, runnerUpScore, numSources);
        slotConfidence[slotKey] = classifyConfidence(conf);
        slotRationale[slotKey] = buildSlotRationale([candidate, ...tally.filter(c => c !== candidate)]);
        alternatives[slotKey] = buildAlternatives(
          tally.filter(c => c !== candidate),
          players
        );

        assigned = true;
        break;
      }
    }

    // Fallback: if no candidate from tally, use formation default
    if (!assigned) {
      const fallbackId = formation.defaultXI?.[slotKey];
      if (fallbackId != null) {
        defaultXI[slotKey] = fallbackId;
        slotConfidence[slotKey] = "Low";
        slotRationale[slotKey] = "Fallback to formation default (no tally data)";
        alternatives[slotKey] = [];
      }
    }
  }

  // Overall confidence
  const confValues = Object.values(slotConfidence);
  const highCount = confValues.filter(c => c === "High").length;
  const lowCount = confValues.filter(c => c === "Low").length;
  let overallLevel;
  if (numSources < MIN_SOURCES_FOR_HIGH_CONFIDENCE) {
    // Cap at Medium when we don't have enough sources
    overallLevel = lowCount > 3 ? "Low" : "Medium";
  } else {
    overallLevel = highCount >= 8 ? "High" : lowCount > 3 ? "Low" : "Medium";
  }

  const agreementRate = computeAgreementRate(slotKeys, punditXIs);
  const reason = buildPredictionReason(defaultXI, slotConfidence, lastMatchXI, players);

  return {
    formation: preferredFormation,
    formationConfidence: overallLevel,
    defaultXI,
    slotConfidence,
    slotRationale,
    alternatives,
    predictionNote: {
      level: overallLevel,
      reason,
      pundit_sources: punditXIs.map(p => p.source),
      agreement_rate: Math.round(agreementRate * 100) / 100,
      generated_at: new Date().toISOString(),
    },
  };
}
