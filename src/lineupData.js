// ─── Lineup & Formation Data ────────────────────────────────────────────────
// Slot coordinates are percentages (0-100) on a vertical pitch where Liverpool
// attacks UP (y=0 = opposition goal, y=100 = own goal). Each formation declares
// its 11 named slots + the default starting XI (player IDs by slot key).

export const FORMATIONS = {
  "4-3-3": {
    label: "4-3-3",
    slots: {
      GK:  { x: 50, y: 92, role: "GK" },
      LB:  { x: 14, y: 72, role: "DEF" },
      LCB: { x: 36, y: 80, role: "DEF" },
      RCB: { x: 64, y: 80, role: "DEF" },
      RB:  { x: 86, y: 72, role: "DEF" },
      LCM: { x: 26, y: 54, role: "MID" },
      CM:  { x: 50, y: 60, role: "MID" },
      RCM: { x: 74, y: 54, role: "MID" },
      LW:  { x: 18, y: 22, role: "FWD" },
      ST:  { x: 50, y: 14, role: "FWD" },
      RW:  { x: 82, y: 22, role: "FWD" },
    },
    // IDs from playerData.js. The 2025-26 season is OVER — Liverpool finished
    // fifth after Sunday's 1-1 with Brentford. This is no longer a matchday
    // prediction but a SNAPSHOT of the first-choice XI Liverpool closed the
    // campaign with, the baseline a summer rebuild will reshape. 4-3-3 is the
    // backup look — Slot favoured 4-2-3-1. Refreshed Sun Jun 7: Konaté's free
    // transfer to Madrid resolves at today's Bernabéu election; Robertson's free
    // move to Spurs is confirmed; the Diomandé chase has cooled (Trincão the
    // likelier route); Salah's exit decision deferred to after the World Cup.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 6,    // Robertson (final LFC appearance · Spurs-bound)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 4,   // Konaté (first-choice · now Real Madrid-bound)
      RB: 16,   // Jones (deputised at RB late in the season)
      LCM: 13,  // Mac Allister (midfield three)
      CM: 14,   // Gravenberch (control of midfield · most reliable MID)
      RCM: 15,  // Szoboszlai (engine · 48 apps)
      LW: 18,   // Wirtz (front-line option)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 21,   // Salah (final LFC season · now departing)
    },
  },

  "4-2-3-1": {
    label: "4-2-3-1",
    slots: {
      GK:  { x: 50, y: 92, role: "GK" },
      LB:  { x: 14, y: 72, role: "DEF" },
      LCB: { x: 36, y: 80, role: "DEF" },
      RCB: { x: 64, y: 80, role: "DEF" },
      RB:  { x: 86, y: 72, role: "DEF" },
      LDM: { x: 38, y: 60, role: "MID" },
      RDM: { x: 62, y: 60, role: "MID" },
      LAM: { x: 22, y: 36, role: "MID" },
      CAM: { x: 50, y: 32, role: "MID" },
      RAM: { x: 78, y: 36, role: "MID" },
      ST:  { x: 50, y: 14, role: "FWD" },
    },
    // The 2025-26 season is COMPLETE. This 4-2-3-1 — the shape Slot favoured
    // through the run-in — is shown as the first-choice XI Liverpool finished
    // the campaign with after Sunday's 1-1 with Brentford, NOT as a prediction
    // for a coming fixture (the next match is a pre-season friendly on July
    // 25). Refreshed Sun Jun 7: Konaté's free transfer to Real Madrid resolves
    // at today's contested Bernabéu election (Ordóñez fronts the succession);
    // Robertson's free move to Spurs is confirmed; the Diomandé chase has cooled,
    // leaving Sporting's Trincão the likelier wide-forward route; Salah defers
    // his call to after the World Cup.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 6,    // Robertson (final LFC appearance · Spurs-bound)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 4,   // Konaté (first-choice · now Real Madrid-bound)
      RB: 16,   // Jones (deputised at RB · Inter Milan keen)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (the season's heaviest-minutes midfielder)
      LAM: 18,  // Wirtz (wide-left · injury-hit debut season)
      CAM: 13,  // Mac Allister (No. 10 · contract talks stalled)
      RAM: 21,  // Salah (final LFC season · now departing)
      ST: 23,   // Isak (No. 9 · injury-wrecked debut year)
    },
  },

  "3-4-3": {
    label: "3-4-3",
    slots: {
      GK:  { x: 50, y: 92, role: "GK" },
      LCB: { x: 26, y: 80, role: "DEF" },
      CCB: { x: 50, y: 82, role: "DEF" },
      RCB: { x: 74, y: 80, role: "DEF" },
      LWB: { x: 10, y: 56, role: "DEF" },
      LCM: { x: 38, y: 58, role: "MID" },
      RCM: { x: 62, y: 58, role: "MID" },
      RWB: { x: 90, y: 56, role: "DEF" },
      LW:  { x: 22, y: 22, role: "FWD" },
      ST:  { x: 50, y: 14, role: "FWD" },
      RW:  { x: 78, y: 22, role: "FWD" },
    },
    // Hypothetical 3-4-3 alternative — a shape Slot rarely used in 2025-26.
    // Shown for completeness alongside the season-closing baseline: VVD,
    // Konaté and Gomez across a back three, Robertson and Jones as
    // wing-backs, Gravenberch and Mac Allister in midfield, a Gakpo-Isak-
    // Salah front three. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LCB: 5,   // Gomez (slots into the back three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 4,   // Konaté (first-choice alongside VVD)
      LWB: 6,   // Robertson (final LFC season · slides up as LWB)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 16,  // Jones (wing-back cover)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 21,   // Salah (final LFC season · now departing)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-06-07
// (Sun, post-season: Konaté's Madrid free transfer resolves at today's Bernabéu
// election; Robertson's free move to Spurs confirmed; Diomandé chase cooled,
// Trincão the likelier route; Mac Allister openly framed as sellable; Salah
// defers to after the World Cup.)
export const PLAYER_EVIDENCE = {
  1:  "Snubs Juventus · staying as No. 1",     // Alisson
  2:  "Loan likely now Alisson stays",         // Mamardashvili
  3:  "Captain · NL World Cup squad",          // Van Dijk
  4:  "Madrid deal agreed · election day",     // Konaté
  5:  "Among 8 possible Iraola exits",         // Gomez
  6:  "Gone to Spurs · free transfer done",    // Robertson
  7:  "Tough debut · now first-pick LB",       // Kerkez
  8:  "Knee · pre-season doubt, no timeline",  // Bradley
  9:  "Axed from NL World Cup squad",          // Frimpong
  10: "Torn ACL · out into 2026-27",           // Leoni
  11: "Deputy CB · may inherit Konaté slot",   // Jacquet
  12: "Academy depth · 2 senior apps",         // Ndukwe
  13: "'Could be moved on' · Real circling",   // Mac Allister
  14: "Dutch WC squad · most consistent MID",  // Gravenberch
  15: "48 apps · extension still pending",     // Szoboszlai
  16: "Among 8 exits · Inter's €20m rejected", // Jones
  17: "Fit · captains Japan at World Cup",     // Endo
  18: "Injury-hit £115m first year",           // Wirtz
  19: "Hamstring · missed all season",         // Bajcetic
  20: "Academy prospect · 5 senior apps",      // Nyoni
  21: "Decision after the World Cup · no regrets", // Salah
  22: "Dutch WC squad · sale still mooted",    // Gakpo
  23: "Injury-wrecked £100m debut year",       // Isak
  24: "Ruptured Achilles · out 9-12 months",   // Ekitike
  25: "Untouchable · Bayern rebuffed",         // Ngumoha
  26: "Bit-part year · summer exit likely",    // Chiesa
  27: "3rd-choice GK · 2 PL starts",           // Woodman
};

// Default formation when entering the view — the 4-2-3-1 Slot favoured through
// the run-in, shown as the first-choice XI Liverpool finished the 2025-26
// season with (the campaign is over; next up is a pre-season friendly on July
// 25). It is a squad baseline, not a matchday prediction.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys (4-2-3-1). With the season over these now read as confidence that
// the slot's occupant remains a first-choice starter into 2026-27 — LOW where
// the player is leaving (Salah, Robertson, now Konaté) or whose future is open
// (Jones, Mac Allister). (Refreshed Sun Jun 7 — Konaté's Madrid free transfer
// resolves at today's Bernabéu election; Robertson's free move to Spurs
// confirmed; Diomandé chase cooled, Trincão the likelier route.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · snubs Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone (free to Spurs, done) · Kerkez inherits
  LCB: "High",   // Van Dijk · captain · contracted to 2027
  RCB: "Low",    // Konaté · Madrid deal agreed, election day · Ordóñez heads the list
  RB:  "Low",    // Jones · among 8 possible exits · Inter's €20m rejected
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "Medium", // Szoboszlai · mainstay, extension still pending
  LAM: "Medium", // Wirtz · injury-hit debut season · 'untouchable' per club
  CAM: "Low",    // Mac Allister · among 8 exits · Real circling
  RAM: "Low",    // Salah departing (call after WC) · Diomandé cooled, Trincão front-runner
  ST:  "Medium", // Isak · £100m striker · injury-wrecked first season
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains the season-closing pick for each slot of the 4-2-3-1. The 2025-26
// season is complete; these read as a retrospective on the first-choice XI
// rather than a prediction for a coming fixture. (Partially refreshed Sun
// Jun 7 — RCB/RAM/RB rotated; remaining slots last touched Tue Jun 2.)
export const SLOT_RATIONALE = {
  GK:  "Tue Jun 2 — Alisson is now widely expected to remain. Juventus had agreed personal terms near €5m a year, but the Italians missing out on Champions League football drained the move of momentum, and the Brazilian was never the one pushing it. Mamardashvili waits, likeliest to go out on loan.",
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Tue Jun 2 — Van Dijk closes a hard campaign as captain with his standards intact, named in Koeman's World Cup squad and contracted to June 2027 — the one fixed point as the back line is rebuilt around him, and the senior leader of a suddenly thin centre-back group.",
  RCB: "Sun Jun 7 — election day for the vacancy: Konaté's four-year free transfer to Real Madrid — reported at ~€24m gross a season — completes once today's contested Bernabéu vote returns Pérez, CaughtOffside framing it as the cost of Liverpool's delay. The succession is one half of a possible £170m double — a £40m bid for Club Brugge's Ordóñez, with Chelsea and City circling and Jacquet the in-house cover.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Tue Jun 2 — Szoboszlai closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Tue Jun 2 — Alexis Mac Allister's contract stand-off holds: no talks have opened, the midfielder now into the final two years of his deal. Real Madrid's interest remains live; Football365 has Liverpool's internal sale valuation at €120m if July passes without movement.",
  RAM: "Sun Jun 7 — the succession has gone quiet: no Liverpool offer has been made for Diomandé, who is focused on his World Cup, and Leipzig want close to €100m, leaving Sporting's €60m-clause Trincão the front-runner Iraola may have preferred all along. The incumbent, Salah, still defers his own decision to after the tournament, leaving the most important attacking slot the least settled.",
  RB:  "Sun Jun 7 — still on the market, still waiting on a second bid: Inter's €20m opener was rejected and hasn't been bettered, Liverpool holding at £30m-plus with the window not open until June 15. Jones is named among the eight Iraola may move on and stays open to Milan, who rate him their top midfield target — a sale that would, incidentally, vacate this very slot.",
  ST:  "Tue Jun 2 — Alexander Isak ends an injury-wrecked debut season — a string of setbacks limited the £100m striker to a handful of starts and never let Slot's intended front three settle. A full summer to reset before 2026-27.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · likeliest out on loan now Alisson is set to stay" }, { playerId: 27, reason: "Woodman · third-choice cover" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the first-choice left-back going forward now Robertson has left" }],
  LCB: [{ playerId: 5, reason: "Gomez · can shuffle infield to centre-back in extremis" }],
  RCB: [{ playerId: 11, reason: "Jacquet · in line to inherit the slot with Konaté agreeing a Real Madrid move" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the natural first-choice right-back once fully fit" }, { playerId: 5, reason: "Gomez · the other right-back cover option" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · a wide-left option · future uncertain amid sale talk" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · can push forward into the No. 10 with another midfielder in the pivot" }, { playerId: 16, reason: "Curtis Jones · alternative No. 10 if not used at right-back" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · teenage wide option · part of the post-Salah picture" }, { playerId: 26, reason: "Chiesa · rotation winger · summer exit likely" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Sun Jun 7 (post-season refresh) — the XI shown here is the side that closed 2025-26 after the May 24 1-1 with Brentford, now in the hands of Andoni Iraola. Confidence stays Low because the back line in particular is dissolving: Ibrahima Konaté's free transfer to Real Madrid is agreed and resolves at today's contested Bernabéu election, with a £40m Club Brugge bid for Ordóñez fronting the succession; Andy Robertson's free move to Tottenham is confirmed, the left-back job passing to Kerkez. Up top the marquee winger chase has cooled — no Liverpool offer for Diomandé, Sporting's Trincão now the likelier route — while Alexis Mac Allister is openly framed as sellable, Alisson has chosen to stay (nudging Mamardashvili toward a loan), and Ngumoha stays 'not for sale.' Salah, asked again, defers to after the World Cup. Next fixture: pre-season vs Sunderland in Nashville, July 25, the first of five friendlies ending with Monaco and Como at Anfield.",
  pundit_sources: ["Liverpool FC", "ESPN", "CaughtOffside", "This Is Anfield", "beIN Sports", "Sky Sports", "Premier League", "Anfield Watch", "Football365", "DaveOCKOP", "Empire of the Kop", "Liverpool.com", "Yahoo Sports", "Fox Sports"],
  agreement_rate: 0.65,
  generated_at: "2026-06-07T08:10:00Z",
};
