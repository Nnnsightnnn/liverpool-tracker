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
    // backup look — Slot favoured 4-2-3-1. Refreshed Wed May 27: Liverpool have
    // told Alisson 'we want you to stay'; the Eichhorn move has hit a Brexit
    // block (pre-contract only until 2027); Samuel Martinez is 'here we go';
    // Froholdt is the sharpening midfield target.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 6,    // Robertson (final LFC appearance · Spurs-bound)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 4,   // Konaté (first-choice · contract unresolved)
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
    // 25). Refreshed Wed May 27: Liverpool's stance on Alisson has hardened
    // into a quoted sentence; Juventus's late move for Robertson was rebuffed;
    // Curtis Jones is now described as Inter Milan-bound in pole-position
    // language. The Berlin file is paused by Brexit; Samuel Martinez is signed
    // for 2027.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 6,    // Robertson (final LFC appearance · Spurs-bound)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 4,   // Konaté (first-choice · contract unresolved)
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
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-27
// (Wed, post-season: Liverpool have told Alisson 'we want you to stay';
// Mamardashvili tracking toward a loan; Konaté contract close; Robertson's
// Spurs deal survived a late Juventus tilt; Jones now in pole-position
// language toward Inter; Salah replacement domino has Barcola rising as
// Diomande resists. End-of-season review formally opens this week.)
export const PLAYER_EVIDENCE = {
  1:  "'We want you to stay' · told by club",  // Alisson
  2:  "Loan likely · backup again",            // Mamardashvili
  3:  "Captain · contracted to 2027",          // Van Dijk
  4:  "Contract close · Real cooled",          // Konaté
  5:  "Injury-hit year · depth option",        // Gomez
  6:  "Spurs paperwork · Juve rebuffed",       // Robertson
  7:  "Tough debut · now first-pick LB",       // Kerkez
  8:  "Knee surgery · pre-season return",      // Bradley
  9:  "Stop-start year · muscular knocks",     // Frimpong
  10: "Torn ACL · out into 2026-27",           // Leoni
  11: "Deputy centre-back · 6 senior apps",    // Jacquet
  12: "Academy depth · 2 senior apps",         // Ndukwe
  13: "Key MID · talks stalled · Real eye",    // Mac Allister
  14: "Most consistent midfielder · 7.2",      // Gravenberch
  15: "48 apps · extension expected",          // Szoboszlai
  16: "Inter Milan pole · £35m mooted",        // Jones
  17: "Ankle surgery · World Cup race",        // Endo
  18: "Injury-hit £115m debut · 'untouchable'",// Wirtz
  19: "Hamstring · missed all season",         // Bajcetic
  20: "Academy prospect · 5 senior apps",      // Nyoni
  21: "LFC career closed · next club soon",    // Salah
  22: "Quiet end · sale considered",           // Gakpo
  23: "Injury-wrecked £100m debut year",       // Isak
  24: "Ruptured Achilles · out 9-12 months",   // Ekitike
  25: "Breakout teen · first pro contract",    // Ngumoha
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
// the player is leaving (Salah, Robertson) or whose future is open (Jones at
// a makeshift RB). (Refreshed Wed May 27 — Alisson stance hardened.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · club has said directly 'we want you to stay'
  LB:  "Low",    // Robertson gone (Spurs paperwork only) · Kerkez inherits
  LCB: "High",   // Van Dijk · captain · contracted to 2027
  RCB: "High",   // Konaté · contract close · Real Madrid cooled
  RB:  "Low",    // Jones now in pole position to leave for Inter Milan
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "Medium", // Szoboszlai · mainstay, extension still to be signed
  LAM: "Medium", // Wirtz · injury-hit debut season · 'untouchable' per club
  CAM: "Medium", // Mac Allister · key, but contract talks have stalled
  RAM: "Low",    // Salah has left · Barcola is the new lead replacement
  ST:  "Medium", // Isak · £100m striker · injury-wrecked first season
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains the season-closing pick for each slot of the 4-2-3-1. The 2025-26
// season is complete; these read as a retrospective on the first-choice XI
// rather than a prediction for a coming fixture. (Refreshed Wed May 27.)
export const SLOT_RATIONALE = {
  GK:  "Wed May 27 — Liverpool's stance has hardened into a quoted sentence. Per Liverpool.com, the club has told Alisson 'we want you to stay, we want you to be our goalkeeper, we believe in you.' Comolli's €5m Juventus offer came in well short of the €20m asking; the Brazilian is also named Brazil's No. 1 for the 2026 World Cup.",
  LB:  "Wed May 27 — Andy Robertson to Tottenham is paperwork only after a brief Juventus intervention was rebuffed. Roberto De Zerbi's appointment as Spurs head coach sealed the move; the Liverpool left-back slot is now unambiguously Milos Kerkez's after a tough first season at £45m.",
  LCB: "Wed May 27 — Van Dijk closes a hard campaign as captain with his standards intact, contracted to June 2027. He will anchor the back line through whatever shape the summer rebuild constructs around him.",
  RCB: "Wed May 27 — Konaté's contract talks are now described as one of the few easy decisions of the summer. Real Madrid's two-year pursuit has cooled; the Frenchman wants the question settled before the World Cup.",
  LDM: "Wed May 27 — Gravenberch finished the season as the most consistent midfielder Liverpool had, the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Wed May 27 — Szoboszlai closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer.",
  LAM: "Wed May 27 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. Club insiders describe him as 'untouchable' in the window.",
  CAM: "Wed May 27 — Alexis Mac Allister finished the season as a key No. 10, but contract talks have reportedly stalled with Real Madrid credited with interest — a negotiation the end-of-season review must resolve.",
  RAM: "Wed May 27 — Mohamed Salah has played his last Liverpool match. The replacement file has hardened around PSG's Bradley Barcola after Yan Diomande told Kicker he intends to stay at Leipzig; Romano flags Arsenal's 'genuine interest' alongside.",
  RB:  "Wed May 27 — Curtis Jones is now described as Inter Milan-bound in pole-position language (£35m switch mooted, contract talks shelved). Jeremie Frimpong is the natural first-choice once fit; Conor Bradley returns from knee surgery in pre-season.",
  ST:  "Wed May 27 — Alexander Isak ends an injury-wrecked debut season — a string of setbacks limited the £100m striker to a handful of starts and never let Slot's intended front three settle. A full summer to reset before 2026-27.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · in line to inherit the No. 1 shirt if Alisson joins Juventus" }, { playerId: 27, reason: "Woodman · third-choice cover" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the first-choice left-back going forward now Robertson has left" }],
  LCB: [{ playerId: 5, reason: "Gomez · can shuffle infield to centre-back in extremis" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy centre-back · cover behind Konaté" }],
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
  level: "Medium",
  reason: "Wed May 27 (post-season refresh) — the 2025-26 season is over (Liverpool 5th, 60 pts, Champions League secured by Sunday's 1-1 with Brentford). This is a snapshot of the first-choice XI Liverpool closed the campaign with, not a matchday prediction. Today's reporting hardens the Alisson stance into a quoted club sentence ('we want you to stay, we want you to be our goalkeeper, we believe in you') with Mamardashvili now expected to be loaned. The Eichhorn move has hit a Brexit wall — pre-contract only until July 2027 — but Samuel Martinez (Atletico Nacional, 17) is 'here we go' on a five-year deal that also waits a year. The summer's headline midfield target sharpens around Porto's Victor Froholdt (£73.5m). The end-of-season review formally opens this week, with Edwards and Hughes reported split on Slot. Next competitive fixture: not until 2026-27 (a pre-season friendly against Sunderland in Nashville on July 25 comes first).",
  pundit_sources: ["Fabrizio Romano", "Liverpool.com", "Sportbible", "Rousing The Kop", "TEAMtalk", "This Is Anfield", "Live4Liverpool", "OneFootball", "Goal.com", "Yahoo Sports", "Goal", "Football365", "Anfield Index", "Anfield Watch", "Liverpool FC", "SI", "DaveOCKOP", "Sky Sports", "The Hard Tackle", "Footy Headlines"],
  agreement_rate: 0.7,
  generated_at: "2026-05-27T09:00:00Z",
};
