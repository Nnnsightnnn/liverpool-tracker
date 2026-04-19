import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  WEIGHTS,
  PENALTIES,
  CONFIDENCE_THRESHOLDS,
  classifyConfidence,
  isVeteranRotationCandidate,
  isSpicyPick,
  isInjuryReturnee,
  applyPenalties,
  tallySlot,
  computeSlotConfidence,
  computeAgreementRate,
  predictXI,
} from "./lineupPredictor.js";

// ─── Test fixtures ──────────────────────────────────────────────────────────

const mockPlayers = {
  1: { id: 1, name: "Alisson", age: 33, physical: { age: 33 } },
  2: { id: 2, name: "Mamardashvili", age: 25, physical: { age: 25 } },
  3: { id: 3, name: "Van Dijk", age: 34, physical: { age: 34 } },
  4: { id: 4, name: "Konaté", age: 27, physical: { age: 27 } },
  7: { id: 7, name: "Kerkez", age: 22, physical: { age: 22 } },
  9: { id: 9, name: "Frimpong", age: 24, physical: { age: 24 } },
  13: { id: 13, name: "Mac Allister", age: 27, physical: { age: 27 } },
  14: { id: 14, name: "Gravenberch", age: 24, physical: { age: 24 } },
  15: { id: 15, name: "Szoboszlai", age: 25, physical: { age: 25 } },
  21: { id: 21, name: "Salah", age: 33, physical: { age: 33 } },
  22: { id: 22, name: "Gakpo", age: 25, physical: { age: 25 } },
  23: { id: 23, name: "Isak", age: 26, physical: { age: 26 }, returningFromInjury: { matchesBackIncludingThis: 1 } },
  6: { id: 6, name: "Robertson", age: 32, physical: { age: 32 } },
};

const mockFormations = {
  "4-3-3": {
    label: "4-3-3",
    slots: {
      GK: { x: 50, y: 92, role: "GK" },
      LB: { x: 14, y: 72, role: "DEF" },
      LCB: { x: 36, y: 80, role: "DEF" },
      RCB: { x: 64, y: 80, role: "DEF" },
      RB: { x: 86, y: 72, role: "DEF" },
      LCM: { x: 26, y: 54, role: "MID" },
      CM: { x: 50, y: 60, role: "MID" },
      RCM: { x: 74, y: 54, role: "MID" },
      LW: { x: 18, y: 22, role: "FWD" },
      ST: { x: 50, y: 14, role: "FWD" },
      RW: { x: 82, y: 22, role: "FWD" },
    },
    defaultXI: {
      GK: 2, LB: 7, LCB: 3, RCB: 4, RB: 9,
      LCM: 14, CM: 13, RCM: 15,
      LW: 22, ST: 23, RW: 21,
    },
  },
};

const mockLastMatchXI = {
  GK: 2, LB: 7, LCB: 3, RCB: 4, RB: 9,
  LCM: 14, CM: 13, RCM: 15,
  LW: 22, ST: 23, RW: 21,
};

// ─── Tests ──────────────────────────────────────────────────────────────────

describe("classifyConfidence", () => {
  it("returns High for values >= 0.70", () => {
    assert.equal(classifyConfidence(0.70), "High");
    assert.equal(classifyConfidence(0.95), "High");
    assert.equal(classifyConfidence(1.0), "High");
  });

  it("returns Medium for values >= 0.50 and < 0.70", () => {
    assert.equal(classifyConfidence(0.50), "Medium");
    assert.equal(classifyConfidence(0.65), "Medium");
  });

  it("returns Low for values < 0.50", () => {
    assert.equal(classifyConfidence(0.0), "Low");
    assert.equal(classifyConfidence(0.49), "Low");
  });
});

describe("tallySlot", () => {
  it("scores last-match starter with anchor weight", () => {
    const result = tallySlot("GK", {
      lastMatchXI: { GK: 2 },
      punditXIs: [],
      managerQuotes: [],
      injuredIds: new Set(),
      players: mockPlayers,
    });
    assert.equal(result.length, 1);
    assert.equal(result[0].playerId, 2);
    assert.equal(result[0].rawScore, WEIGHTS.LAST_MATCH_STARTER);
  });

  it("accumulates pundit votes", () => {
    const punditXIs = [
      { source: "TIA", xi: { GK: 2 } },
      { source: "Empire", xi: { GK: 2 } },
      { source: "FotMob", xi: { GK: 2 } },
    ];
    const result = tallySlot("GK", {
      lastMatchXI: {},
      punditXIs,
      managerQuotes: [],
      injuredIds: new Set(),
      players: mockPlayers,
    });
    assert.equal(result[0].playerId, 2);
    assert.equal(result[0].rawScore, WEIGHTS.PUNDIT_SOURCE * 3);
  });

  it("returns empty array when no candidates", () => {
    const result = tallySlot("GK", {
      lastMatchXI: {},
      punditXIs: [],
      managerQuotes: [],
      injuredIds: new Set(),
      players: mockPlayers,
    });
    assert.equal(result.length, 0);
  });

  it("excludes injured players", () => {
    const result = tallySlot("GK", {
      lastMatchXI: { GK: 1 },
      punditXIs: [{ source: "TIA", xi: { GK: 1 } }],
      managerQuotes: [],
      injuredIds: new Set([1]),
      players: mockPlayers,
    });
    // Alisson (id 1) is injured, should be excluded
    assert.equal(result.filter(c => c.playerId === 1).length, 0);
  });
});

describe("Penalty: veteran rotation", () => {
  it("penalizes 30+ player who played 80+ min in last 72h", () => {
    const matchDate = "2026-04-19T15:00:00Z";
    const results = [{
      date: "2026-04-17T20:00:00Z", // 43h ago
      startingXI: { RW: 21 },
      minutesPlayed: { 21: 90 },
    }];
    const is = isVeteranRotationCandidate(21, mockPlayers, results, matchDate);
    assert.equal(is, true);
  });

  it("does not penalize young players", () => {
    const matchDate = "2026-04-19T15:00:00Z";
    const results = [{
      date: "2026-04-17T20:00:00Z",
      startingXI: { LCM: 14 },
      minutesPlayed: { 14: 90 },
    }];
    const is = isVeteranRotationCandidate(14, mockPlayers, results, matchDate);
    assert.equal(is, false); // Gravenberch is 24
  });
});

describe("Penalty: spicy pick", () => {
  it("flags lone-source pick without anchor", () => {
    const punditXIs = [
      { source: "TIA", xi: { ST: 22 } },      // only TIA picks Gakpo as ST
      { source: "Empire", xi: { ST: 23 } },
    ];
    const lastMatchXI = { ST: 23 }; // Isak started
    assert.equal(isSpicyPick(22, "ST", punditXIs, lastMatchXI), true);
  });

  it("does not flag picks backed by anchor", () => {
    const punditXIs = [
      { source: "TIA", xi: { ST: 23 } },
    ];
    const lastMatchXI = { ST: 23 }; // Isak started last match too
    assert.equal(isSpicyPick(23, "ST", punditXIs, lastMatchXI), false);
  });
});

describe("Penalty: injury returnee cap", () => {
  it("identifies player returning from injury", () => {
    assert.equal(isInjuryReturnee(23, mockPlayers), true); // Isak has returningFromInjury
  });

  it("does not flag fully fit players", () => {
    assert.equal(isInjuryReturnee(14, mockPlayers), false); // Gravenberch is fully fit
  });

  it("caps score with penalty and absolute cap", () => {
    const { adjustedScore } = applyPenalties(23, 5.0, "ST", {
      punditXIs: [{ source: "TIA", xi: { ST: 23 } }, { source: "Empire", xi: { ST: 23 } }],
      lastMatchXI: { ST: 23 },
      players: mockPlayers,
      results: [],
    });
    // 5.0 * 0.4 = 2.0, which is > abs cap 1.5, so capped at 1.5
    assert.equal(adjustedScore, PENALTIES.INJURY_RETURNEE_ABS_CAP);
  });
});

describe("computeSlotConfidence", () => {
  it("returns high confidence for large gap", () => {
    const conf = computeSlotConfidence(5.0, 1.0, 4);
    assert.ok(conf >= CONFIDENCE_THRESHOLDS.HIGH);
  });

  it("returns low confidence when scores are close", () => {
    const conf = computeSlotConfidence(3.0, 2.8, 2);
    assert.ok(conf < CONFIDENCE_THRESHOLDS.MEDIUM);
  });

  it("returns 0 when top score is 0", () => {
    assert.equal(computeSlotConfidence(0, 0, 0), 0);
  });
});

describe("computeAgreementRate", () => {
  it("returns 1.0 when all pundits agree on all slots", () => {
    const punditXIs = [
      { source: "A", xi: { GK: 2, ST: 23 } },
      { source: "B", xi: { GK: 2, ST: 23 } },
    ];
    assert.equal(computeAgreementRate(["GK", "ST"], punditXIs), 1.0);
  });

  it("returns 0 when pundits disagree on all slots", () => {
    const punditXIs = [
      { source: "A", xi: { GK: 2, ST: 23 } },
      { source: "B", xi: { GK: 1, ST: 22 } },
    ];
    assert.equal(computeAgreementRate(["GK", "ST"], punditXIs), 0);
  });

  it("returns 0.5 when pundits agree on half the slots", () => {
    const punditXIs = [
      { source: "A", xi: { GK: 2, ST: 23 } },
      { source: "B", xi: { GK: 2, ST: 22 } },
    ];
    assert.equal(computeAgreementRate(["GK", "ST"], punditXIs), 0.5);
  });

  it("returns 0 with fewer than 2 sources", () => {
    assert.equal(computeAgreementRate(["GK"], [{ source: "A", xi: { GK: 2 } }]), 0);
    assert.equal(computeAgreementRate(["GK"], []), 0);
  });
});

describe("Manager quotes", () => {
  it("definite quote adds strong weight", () => {
    const result = tallySlot("ST", {
      lastMatchXI: {},
      punditXIs: [],
      managerQuotes: [{ playerId: 23, type: "definite", quote: "Isak will start" }],
      injuredIds: new Set(),
      players: mockPlayers,
    });
    const isak = result.find(c => c.playerId === 23);
    assert.ok(isak);
    // Definite quote weight minus injury returnee penalty
    assert.ok(isak.rawScore === WEIGHTS.SLOT_DEFINITE_QUOTE);
  });

  it("hedged quote adds minimal weight", () => {
    const result = tallySlot("ST", {
      lastMatchXI: {},
      punditXIs: [],
      managerQuotes: [{ playerId: 22, type: "hedged", quote: "Gakpo is in contention" }],
      injuredIds: new Set(),
      players: mockPlayers,
    });
    const gakpo = result.find(c => c.playerId === 22);
    assert.ok(gakpo);
    assert.equal(gakpo.rawScore, WEIGHTS.SLOT_HEDGED_QUOTE);
  });
});

describe("predictXI", () => {
  it("returns correct output shape", () => {
    const result = predictXI({
      formations: mockFormations,
      preferredFormation: "4-3-3",
      lastMatchXI: mockLastMatchXI,
      punditXIs: [
        { source: "TIA", xi: mockLastMatchXI },
        { source: "Empire", xi: mockLastMatchXI },
      ],
      managerQuotes: [],
      injuredIds: [1],
      players: mockPlayers,
      results: [],
    });

    assert.equal(result.formation, "4-3-3");
    assert.ok(["High", "Medium", "Low"].includes(result.formationConfidence));
    assert.ok(result.defaultXI);
    assert.ok(result.slotConfidence);
    assert.ok(result.slotRationale);
    assert.ok(result.alternatives);
    assert.ok(result.predictionNote);
    assert.ok(result.predictionNote.level);
    assert.ok(result.predictionNote.reason);
    assert.ok(Array.isArray(result.predictionNote.pundit_sources));
    assert.equal(typeof result.predictionNote.agreement_rate, "number");
    assert.ok(result.predictionNote.generated_at);
  });

  it("fills all 11 slots", () => {
    const result = predictXI({
      formations: mockFormations,
      preferredFormation: "4-3-3",
      lastMatchXI: mockLastMatchXI,
      punditXIs: [{ source: "TIA", xi: mockLastMatchXI }],
      managerQuotes: [],
      injuredIds: [],
      players: mockPlayers,
      results: [],
    });

    assert.equal(Object.keys(result.defaultXI).length, 11);
  });

  it("caps overall confidence at Medium with <4 sources", () => {
    const result = predictXI({
      formations: mockFormations,
      preferredFormation: "4-3-3",
      lastMatchXI: mockLastMatchXI,
      punditXIs: [
        { source: "TIA", xi: mockLastMatchXI },
        { source: "Empire", xi: mockLastMatchXI },
      ],
      managerQuotes: [],
      injuredIds: [],
      players: mockPlayers,
      results: [],
    });

    assert.ok(result.predictionNote.level !== "High",
      "Should not be High with only 2 sources");
  });

  it("handles empty pundit sources gracefully", () => {
    const result = predictXI({
      formations: mockFormations,
      preferredFormation: "4-3-3",
      lastMatchXI: mockLastMatchXI,
      punditXIs: [],
      managerQuotes: [],
      injuredIds: [],
      players: mockPlayers,
      results: [],
    });

    assert.ok(result.defaultXI);
    assert.equal(result.predictionNote.agreement_rate, 0);
    assert.equal(result.predictionNote.pundit_sources.length, 0);
  });
});
