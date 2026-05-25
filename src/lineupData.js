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
    // backup look — Slot favoured 4-2-3-1. Note: Salah and Robertson have
    // played their final Liverpool games and will depart this summer.
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
    // 25). It is the squad baseline before the summer rebuild: Salah and
    // Robertson have departed in all but paperwork, the goalkeeping and
    // forward lines are under review, and Curtis Jones — heavily linked with
    // Inter Milan — may also leave.
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
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-25
// (Mon, post-season: Liverpool's 2025-26 campaign is complete after Sunday's
// 1-1 with Brentford. Salah and Robertson have played their final Liverpool
// games; the summer rebuild and an end-of-season review now follow).
export const PLAYER_EVIDENCE = {
  1:  "Started Brentford finale · WC No.1",   // Alisson
  2:  "Understudy again · future unclear",    // Mamardashvili
  3:  "Captain · contracted to 2027",         // Van Dijk
  4:  "First-choice CB · contract unresolved",// Konaté
  5:  "Injury-hit year · depth option",       // Gomez
  6:  "Final LFC game played · Spurs next",   // Robertson
  7:  "Tough debut year · now first-pick LB", // Kerkez
  8:  "Knee surgery · pre-season return",     // Bradley
  9:  "Stop-start year · muscular knocks",    // Frimpong
  10: "Torn ACL · out into 2026-27",          // Leoni
  11: "Deputy centre-back · 6 senior apps",   // Jacquet
  12: "Academy depth · 2 senior apps",        // Ndukwe
  13: "Key MID · contract talks stalled",     // Mac Allister
  14: "Most consistent midfielder · 7.2",     // Gravenberch
  15: "48 apps · extension expected",         // Szoboszlai
  16: "Scored vs Brentford · Inter keen",     // Jones
  17: "Ankle surgery · World Cup race",       // Endo
  18: "Injury-hit £115m debut season",        // Wirtz
  19: "Hamstring · missed all season",        // Bajcetic
  20: "Academy prospect · 5 senior apps",     // Nyoni
  21: "LFC career over · 257 goals",          // Salah
  22: "Quiet end to season · sale possible",  // Gakpo
  23: "Injury-wrecked £100m debut year",      // Isak
  24: "Ruptured Achilles · out 9-12 months",  // Ekitike
  25: "Breakout teen · 13 apps, 2 goals",     // Ngumoha
  26: "Bit-part year · summer exit likely",   // Chiesa
  27: "3rd-choice GK · 2 PL starts",          // Woodman
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
// the player is departing (Salah, Robertson) or whose future is open (Jones at
// a makeshift RB). (Refreshed Mon May 25, post-season.)
export const SLOT_CONFIDENCE = {
  GK:  "Medium", // Alisson back to fitness, but a Juventus move is live
  LB:  "Low",    // Robertson has left · Kerkez inherits the slot
  LCB: "High",   // Van Dijk · captain · contracted to 2027
  RCB: "High",   // Konaté · first-choice, though contract unresolved
  RB:  "Low",    // Jones a makeshift pick · linked away to Inter Milan
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "Medium", // Szoboszlai · mainstay, extension still to be signed
  LAM: "Medium", // Wirtz · injury-hit debut season · needs a clean summer
  CAM: "Medium", // Mac Allister · key, but contract talks have stalled
  RAM: "Low",    // Salah has left · a replacement is the summer's priority
  ST:  "Medium", // Isak · £100m striker · injury-wrecked first season
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains the season-closing pick for each slot of the 4-2-3-1. The 2025-26
// season is complete; these read as a retrospective on the first-choice XI
// rather than a prediction for a coming fixture. (Refreshed Mon May 25.)
export const SLOT_RATIONALE = {
  GK:  "Mon May 25 — Alisson closed the season in goal, starting Sunday's 1-1 with Brentford after recovering from a long muscle injury. He is Brazil's No. 1 for the World Cup, but a Juventus move is live — Schira reported agreed personal terms — so the shirt may be Mamardashvili's by August.",
  LB:  "Mon May 25 — Andy Robertson played his 378th and final Liverpool game in Sunday's farewell and is bound for Tottenham on a free. The slot, going forward, belongs to Milos Kerkez, the £45m signing who endured a difficult first season but is now the unambiguous first-choice left-back.",
  LCB: "Mon May 25 — Van Dijk closes a hard campaign as captain with his standards intact, under contract to June 2027. He anchors the back line and will be central to whatever the summer rebuild constructs around him.",
  RCB: "Mon May 25 — Konaté ends the season as first-choice alongside Van Dijk, but his contract is unresolved with Real Madrid in the background — one of the defining calls of Liverpool's summer.",
  LDM: "Mon May 25 — Gravenberch finished the season as the most consistent midfielder Liverpool had, the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Mon May 25 — Szoboszlai closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer.",
  LAM: "Mon May 25 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. A clean pre-season is everything.",
  CAM: "Mon May 25 — Alexis Mac Allister finished the season as a key No. 10, but contract talks have reportedly stalled with Real Madrid credited with interest — a negotiation the end-of-season review must resolve.",
  RAM: "Mon May 25 — Mohamed Salah played his final Liverpool game on Sunday, assisting Curtis Jones to pass Steven Gerrard's club record for Premier League assists before kissing the pitch in tears. Replacing him — Yan Diomande the lead target — is the summer's priority.",
  RB:  "Mon May 25 — Curtis Jones deputised at right-back through the run-in and scored in Sunday's finale, but it remained a makeshift role and he is heavily linked with Inter Milan. Jeremie Frimpong is the natural first-choice once fit; Conor Bradley returns from knee surgery in pre-season.",
  ST:  "Mon May 25 — Alexander Isak ends an injury-wrecked debut season — a string of setbacks limited the £100m striker to a handful of starts and never let Slot's intended front three settle. A full summer to reset before 2026-27.",
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
  reason: "Mon May 25 (post-season refresh) — the 2025-26 season is over: Liverpool finished fifth and drew 1-1 with Brentford on Sunday. This is no longer a matchday prediction but a snapshot of the first-choice XI Liverpool closed the campaign with — the 4-2-3-1 baseline before a summer rebuild reshapes it. Confidence is MEDIUM by design: Mohamed Salah and Andy Robertson have played their final Liverpool games and will depart, the goalkeeping and forward lines are both under review, and the next competitive fixture is not until the 2026-27 season (a pre-season friendly against Sunderland in Nashville on July 25 comes first).",
  pundit_sources: ["Sky Sports", "This Is Anfield", "NBC Sports", "Liverpool.com", "ESPN", "BBC Sport", "Fabrizio Romano", "Football365", "Anfield Index", "The Anfield Wrap", "beIN Sports", "TEAMtalk", "Anfield Watch", "Sports Mole"],
  agreement_rate: 0.6,
  generated_at: "2026-05-25T09:00:00Z",
};
