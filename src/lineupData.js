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
    // backup look — Slot favoured 4-2-3-1. Refreshed Thu May 28: Slot has
    // publicly said he has 'every reason to believe' he is the Liverpool
    // manager next season. Inter have tabled €20m for Curtis Jones (Liverpool
    // want €30m). Quansah buy-back will be deferred to 2027.
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
    // 25). Refreshed Thu May 28: Slot has publicly framed himself as Liverpool
    // manager next season ('every reason to believe'); Inter's first hard
    // offer for Jones is €20m, Liverpool answer with €30m; Alisson now
    // formally listed by Sky as 'set to stay'; Reijnen close on set-piece
    // coach appointment.
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
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-28
// (Thu, post-season: Slot publicly says 'every reason to believe' he stays;
// Alisson now framed as 'set to stay'; Inter's first hard offer for Jones
// €20m vs Liverpool's €30m; Quansah buy-back deferred to 2027; Mac Allister
// father declines opening talks 'out of respect'; Reijnen closing on
// assistant-coach role.)
export const PLAYER_EVIDENCE = {
  1:  "Sky: 'set to stay' · Juve hand weak",   // Alisson
  2:  "Loan-out scenario · 1st pick still 1",  // Mamardashvili
  3:  "Captain · contracted to 2027",          // Van Dijk
  4:  "Future 'unclear' · Real/PSG/Bayern",    // Konaté
  5:  "12mo left · Italy openly canvassed",    // Gomez
  6:  "Spurs paperwork · LFC career closed",   // Robertson
  7:  "Tough debut · now first-pick LB",       // Kerkez
  8:  "Knee surgery · pre-season return",      // Bradley
  9:  "Stop-start year · muscular knocks",     // Frimpong
  10: "Torn ACL · out into 2026-27",           // Leoni
  11: "Deputy centre-back · 6 senior apps",    // Jacquet
  12: "Academy depth · 2 senior apps",         // Ndukwe
  13: "Father declines talks · Real eyes",     // Mac Allister
  14: "Most consistent midfielder · 7.2",      // Gravenberch
  15: "48 apps · extension still pending",     // Szoboszlai
  16: "Inter €20m · LFC want €30m",            // Jones
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
// the player is leaving (Salah, Robertson) or whose future is open (Jones,
// Konaté, Mac Allister). (Refreshed Thu May 28 — Alisson 'set to stay';
// Konaté future 'unclear' per Sky; Inter €20m in for Jones.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · Sky's Thursday round-up: 'set to stay'
  LB:  "Low",    // Robertson gone (Spurs paperwork) · Kerkez inherits
  LCB: "High",   // Van Dijk · captain · contracted to 2027
  RCB: "Medium", // Konaté · Sky: future 'unclear' · Madrid/PSG/Bayern circle
  RB:  "Low",    // Jones · Inter €20m, LFC want €30m · willing to leave
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "Medium", // Szoboszlai · mainstay, extension still pending
  LAM: "Medium", // Wirtz · injury-hit debut season · 'untouchable' per club
  CAM: "Low",    // Mac Allister · father declines talks · Real circling
  RAM: "Low",    // Salah has left · Barcola is the lead replacement
  ST:  "Medium", // Isak · £100m striker · injury-wrecked first season
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains the season-closing pick for each slot of the 4-2-3-1. The 2025-26
// season is complete; these read as a retrospective on the first-choice XI
// rather than a prediction for a coming fixture. (Refreshed Thu May 28.)
export const SLOT_RATIONALE = {
  GK:  "Thu May 28 — Sky Sports' Thursday transfer round-up now formally lists Alisson under 'set to stay,' three days after Liverpool's direct message landed. Personal terms with Juventus had been agreed at around €5m a year, but the Italians missing UCL qualification has weakened their hand; the Brazilian was never the one driving the move.",
  LB:  "Thu May 28 — Andy Robertson to Tottenham is paperwork only. The Liverpool left-back slot is now unambiguously Milos Kerkez's after a tough first season at £45m; the Hungarian inherits the role he is paid to grow into.",
  LCB: "Thu May 28 — Van Dijk closes a hard campaign as captain with his standards intact, contracted to June 2027. He will anchor the back line through whatever shape the summer rebuild constructs around him.",
  RCB: "Thu May 28 — Sky Sports' Thursday transfer round-up flags Konaté's future as 'unclear': Real Madrid, PSG and Bayern all still credited with interest, the Frenchman entering the final twelve months of his deal without an extension. The Quansah buy-back deferred to 2027 puts more weight on settling this one in June.",
  LDM: "Thu May 28 — Gravenberch finished the season as the most consistent midfielder Liverpool had, the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Thu May 28 — Szoboszlai closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer.",
  LAM: "Thu May 28 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. Club insiders describe him as 'untouchable' in the window; Robertson, on his way out, predicts an 'unbelievable' career.",
  CAM: "Thu May 28 — Alexis Mac Allister's father and agent Carlos has told reporters this week that no contract talks will open yet 'out of respect' for supporters. Real Madrid's interest remains live; Football365 has Liverpool's internal sale valuation at €120m if July passes without movement.",
  RAM: "Thu May 28 — Mohamed Salah has played his last Liverpool match. The replacement file has hardened around PSG's Bradley Barcola after Diomande's coyness at Leipzig; Romano flags Arsenal's 'genuine interest' alongside.",
  RB:  "Thu May 28 — Curtis Jones's file becomes a number: Sky Sport Italia's Gianluca Di Marzio reports Inter Milan have tabled €20m, Liverpool have answered with €30m. Hughes and Ausilio held preliminary talks in Monte Conte; the Anfield-born midfielder is willing to go.",
  ST:  "Thu May 28 — Alexander Isak ends an injury-wrecked debut season — a string of setbacks limited the £100m striker to a handful of starts and never let Slot's intended front three settle. A full summer to reset before 2026-27; Slot insists the improvement will 'only continue.'",
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
  reason: "Thu May 28 (post-season refresh) — the 2025-26 season is over (Liverpool 5th, 60 pts, Champions League secured by Sunday's 1-1 with Brentford). This is a snapshot of the first-choice XI Liverpool closed the campaign with, not a matchday prediction. Today's headlines: Arne Slot, at his end-of-season media availability, said he has 'every reason to believe' he is the Liverpool manager next season — Sky Sports lead with the line, Liverpool.com frame it as the position FSG endorsed by silence. Sky Sport Italia's Gianluca Di Marzio puts the first hard figure on the Curtis Jones file (Inter €20m, Liverpool want €30m); Alisson is now formally listed as 'set to stay' in Sky's Thursday round-up; Liverpool.com warn of up to ten outgoings in a 'sell-to-buy' window; the Quansah buy-back will be deferred to 2027 to take the cheaper €65m route. Etienne Reijnen is closing on a set-piece coach appointment. Next competitive fixture: not until 2026-27 (pre-season friendly vs Sunderland in Nashville, July 25).",
  pundit_sources: ["Sky Sports", "Empire Of The Kop", "Liverpool.com", "Sky Sport Italia", "Football Italia", "Get Italian Football News", "This Is Anfield", "OneFootball", "Yahoo Sports", "Sports Mole", "Football Transfers", "Football365", "Crunch Sports", "Liverpool FC", "NBC Sports", "SI", "DaveOCKOP", "RTE", "Goal", "Rousing The Kop"],
  agreement_rate: 0.7,
  generated_at: "2026-05-28T09:00:00Z",
};
