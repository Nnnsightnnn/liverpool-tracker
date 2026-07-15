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
    // IDs from playerData.js. The 2025-26 season is OVER: Liverpool finished
    // fifth. This is not a matchday prediction but a SNAPSHOT of the XI that
    // closed the campaign, adjusted for the summer exits (Kerkez, Jacquet and
    // Ngumoha step in for Robertson, Konate and Salah). 4-3-3 is the backup
    // look. Refreshed Tue Jul 14: pre-season opened at the AXA this morning with
    // roughly fifteen seniors plus academy cover; Iraola confirmed Ekitike,
    // Bradley and Leoni as long-term absentees (a "difficult situation"), which
    // leaves Frimpong the only recognised right back and Jacquet the only senior
    // centre-back; Inter's third bid for Curtis Jones was rejected because the
    // head coach wants to keep him; Salah's Saudi deal is reported signed.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley out into 2027)
      LCM: 13,  // Mac Allister (midfield three)
      CM: 14,   // Gravenberch (control of midfield · most reliable MID)
      RCM: 15,  // Szoboszlai (engine · 48 apps)
      LW: 18,   // Wirtz (front-line option)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 25,   // Ngumoha (the post-Salah slot until a winger signs)
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
    // The 2025-26 season is COMPLETE. This 4-2-3-1, the shape Slot favoured
    // through the run-in, is shown as the first-choice XI Liverpool finished the
    // campaign with (adjusted for the summer exits), NOT as a prediction for a
    // coming fixture (next up is a pre-season friendly on July 25). Refreshed
    // Tue Jul 14: the first session of the Iraola era took place this morning,
    // the World Cup contingent away until the American tour; Ekitike, Bradley
    // and Leoni confirmed long-term out; Barcola drifts further off as Arsenal
    // go top and PSG hold at £128m, with Liverpool accelerating instead for a
    // £10.2m winger at Real Oviedo; Jacquet is the only senior centre-back fit.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley out into 2027)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (the season's heaviest-minutes midfielder)
      LAM: 18,  // Wirtz (wide-left · injury-hit debut season)
      CAM: 13,  // Mac Allister (No. 10 · contract talks stalled)
      RAM: 25,  // Ngumoha (the post-Salah slot until a winger signs)
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
    // Shown for completeness alongside the season-closing baseline: Gomez,
    // VVD and Jacquet across a back three, Kerkez and Jones as wing-backs,
    // Gravenberch and Mac Allister in midfield, a Gakpo-Isak-Ngumoha front
    // three. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LCB: 5,   // Gomez (slots into the back three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (unveiled Jul 1 · right of the back three)
      LWB: 7,   // Kerkez (LWB with Robertson gone to Spurs)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 9,   // Frimpong (only recognised RB · Bradley out into 2027)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 25,   // Ngumoha (the post-Salah slot until a winger signs)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-07-15
// (Wed: the summer's story is the winger search, Iraola on the record that
// Liverpool need "one more winger" after Yan Diomande chose PSG; France lost
// 2-0 to Spain overnight, so Konate's tournament is over; Mac Allister plays
// England in the Atlanta semi-final this afternoon; Curtis Jones looks likelier
// to stay, Iraola to hold talks; Salah's Saudi deal reported signed.)
export const PLAYER_EVIDENCE = {
  1:  "Post-WC break · back for the tour",       // Alisson
  2:  "Led the GK group on day one",             // Mamardashvili
  3:  "Captain, 35 · back for the US tour",      // Van Dijk
  4:  "Madrid's now · France out to Spain",      // Konaté
  5:  "Trained day one · tilting to stay",       // Gomez
  6:  "Tottenham · left free June 30",           // Robertson
  7:  "First-pick LB · trained day one",         // Kerkez
  8:  "Knee · now reported out into 2027",       // Bradley
  9:  "Only recognised RB in the building",      // Frimpong
  10: "ACL · Iraola hints at more delay",        // Leoni
  11: "Only senior CB fit · trained day one",    // Jacquet
  12: "Academy depth · 2 senior apps",           // Ndukwe
  13: "England semi today · last Red in the WC", // Mac Allister
  14: "WC exit · back for the US tour",          // Gravenberch
  15: "No Hungary WC · trained day one",         // Szoboszlai
  16: "Iraola to hold talks · likely stays",     // Jones
  17: "Back early · still missed day one",       // Endo
  18: "Germany out · back for the tour",         // Wirtz
  19: "Hamstring · missed day one again",        // Bajcetic
  20: "Academy prospect · trained day one",      // Nyoni
  21: "Free agent · Saudi deal signed",          // Salah
  22: "Stays · back for the US tour",            // Gakpo
  23: "Fit again · rejoins for the US tour",     // Isak
  24: "Achilles · eyes a Boxing Day return",     // Ekitike
  25: "Salah slot until a winger signs",         // Ngumoha
  26: "Trained day one · fighting for a spot",   // Chiesa
  27: "3rd-choice GK · trained day one",         // Woodman
};

// Default formation when entering the view — the 4-2-3-1 Slot favoured through
// the run-in, shown as the first-choice XI Liverpool finished the 2025-26
// season with (the campaign is over; next up is a pre-season friendly on July
// 25). It is a squad baseline, not a matchday prediction.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. With the season over these read as confidence that the slot's
// occupant remains a first-choice starter into 2026-27 — LOW where the player
// has left (Salah, Robertson, Konate) or whose future is open (Mac Allister).
// (Refreshed Tue Jul 14: pre-season opened at the AXA this morning with roughly
// fifteen seniors plus academy cover; Iraola confirmed Ekitike, Bradley and
// Leoni as long-term absentees, a "difficult situation"; Salah's Saudi deal is
// now reported signed with only the announcement outstanding; Inter's third bid
// for Curtis Jones was rejected because Iraola wants to keep him, so his slot
// confidence rises; Frimpong is the only recognised right back in the building
// and Jacquet the only senior centre-back available.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · not back until the US tour
  RCB: "Low",    // Konate gone free to Madrid · Jacquet the only senior CB available · Inacio heads the list
  RB:  "Low",    // Frimpong the only recognised RB · Bradley's knee reported into 2027 · Jones likely staying, Iraola to hold talks
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "Medium", // Szoboszlai · mainstay, extension still pending · in day one
  LAM: "Medium", // Wirtz · injury-hit debut season · back for the tour
  CAM: "Low",    // Mac Allister · in a World Cup semi-final · no extension talks open
  RAM: "Low",    // Salah gone (Saudi deal signed) · Diomande chose PSG · Minteh now the front-runner, El Mala the cheaper fallback
  ST:  "Medium", // Isak · £100m striker · injury-wrecked first season · back for the tour
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains the season-closing pick for each slot of the 4-2-3-1. The 2025-26
// season is complete; these read as a retrospective on the first-choice XI
// rather than a prediction for a coming fixture. (GK, RB and RAM refreshed Tue
// Jul 14; LCB Fri Jul 10; CAM Wed Jun 17; RCB Tue Jun 9; rest Tue Jun 2.)
export const SLOT_RATIONALE = {
  GK:  "Tue Jul 14 — the No. 1 was not on the grass, and it did not matter. Alisson missed the opening session of pre-season on a post-World Cup break after Brazil's campaign, leaving Giorgi Mamardashvili to lead a goalkeeping group of Freddie Woodman and the young Hungarian Armin Pecsi, with Vitezslav Jaros still out after serious knee surgery. Nothing underneath has moved: Alisson's extension is triggered, Juventus were turned down, and he returns as the unarguable starter. The knock-on is Mamardashvili's, and it has hardened rather than softened: a year of understudy minutes has him weighing his future, while Liverpool plan to reject offers and would prefer a loan that protects the asset.",
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Fri Jul 10 — a fresh voice for the defence: John Barnes has urged Liverpool to extend Van Dijk beyond his 2027 deal even at 35, as the AC Milan interest driven by Ibrahimović, Fenerbahce lurking, keeps being knocked back at Anfield, no bid received and none expected to move him. The captain is central to Iraola's plans and the slot a thinning back line is being rebuilt around, Jacquet, cleared by his surgeon to rejoin group training, the in-house cover behind him.",
  RCB: "Tue Jun 9 — the succession finally has names: with Konaté's free move to Madrid sealed (the extension collapsed over wage and agent-fee demands, not football), Hughes and Iraola have drawn up a four-man shortlist, Sporting's left-footed Gonçalo Inácio (~£52m clause) the marquee fit, with Tottenham's Vuskovic, Forest's Murillo and Napoli's Beukema alongside and Club Brugge's Ordóñez (~£40m) the standing bid. Jacquet is the in-house cover until one lands.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Tue Jun 2 — Szoboszlai closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Wed Jun 17 — the denial gets louder: Mac Allister's father and agent Carlos has again branded the exit talk 'false,' insisting no approaches were declined because none were made, even as Liverpool stay quietly open to a sale near €120m if funds are needed. Real Madrid hold the warmest interest in a midfielder with two years left and no extension talks open, a fork pointed against Gravenberch's fresh terms.",
  RAM: "Wed Jul 15 — this slot is the whole summer. With Salah gone (a Saudi move now reported signed, only the announcement left), Iraola has said plainly that Liverpool need 'one more winger,' careful not to hang the word replacement on anyone. The man they wanted most, RB Leipzig's Yan Diomande, has chosen PSG, so the shortlist hardens around Brighton's Yankuba Minteh, whom the manager is said to love at a valuation nearer £80m, Cologne's Said El Mala as the thriftier fallback, and a Bradley Barcola PSG will not sanction below £100m. Rio Ngumoha, seventeen, keeps the shirt by default until one of them arrives; he was one of only two senior forwards on the grass for day one.",

  RB:  "Wed Jul 15 — still a one-man department, two days into pre-season. Jeremie Frimpong remains the only recognised right back on the grass, with Conor Bradley one of Iraola's three long-term absentees and reporting suggesting the knee that went at Arsenal in January may not release him until 2027. The emergency cover of last season is staying put in midfield rather than filling in here: Iraola is set to hold talks with Curtis Jones and is hopeful he stays, Inter twice rebuffed, so nobody is shuttling Jones to full-back. Frimpong plays by elimination rather than by form, and the market is being asked for a deputy, Marco Palestra and Lutsharel Geertruida the names on the board while the winger search swallows the budget.",

  ST:  "Tue Jun 2 — Alexander Isak ends an injury-wrecked debut season — a string of setbacks limited the £100m striker to a handful of starts and never let Slot's intended front three settle. A full summer to reset before 2026-27.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · led the goalkeeping group on day one with Alisson still on a post-World Cup break" }, { playerId: 27, reason: "Woodman · third-choice cover, trained day one" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the first-choice left-back going forward now Robertson has left" }],
  LCB: [{ playerId: 5, reason: "Gomez · can shuffle infield to centre-back in extremis" }],
  RCB: [{ playerId: 11, reason: "Jacquet · the only senior centre-back Iraola can pick until Van Dijk is back; Leoni is long-term out" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the only recognised right-back in the building; Bradley's knee is now reported to run into 2027" }, { playerId: 5, reason: "Gomez · the emergency right-back cover now Jones looks likelier to stay in midfield" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · a wide-left option · exit now called unlikely" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · can push forward into the No. 10 with another midfielder in the pivot" }, { playerId: 16, reason: "Curtis Jones · staying, on current evidence: Inter's third bid rejected because Iraola wants him" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · teenage wide option · part of the post-Salah picture" }, { playerId: 26, reason: "Chiesa · trained day one and staying to fight for a starting role" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Wed Jul 15 — two days into pre-season, the XI below is still a squad baseline rather than a matchday prediction, and the shape of it is dominated by a slot Liverpool have not filled. Iraola has said on the record that the team needs 'one more winger,' and the man they wanted most, Yan Diomande, has chosen PSG, so Rio Ngumoha keeps the right-sided attacking berth by default until Minteh, El Mala or a Barcola nobody can afford arrives. The three long-term absentees, Ekitike, Bradley and Leoni, still leave Frimpong the only recognised right back and Jacquet the only senior centre-back until Van Dijk is back for the American tour. The World Cup contingent thins the grass further: France lost 2-0 to Spain overnight so Konate is done, but Mac Allister plays England in the Atlanta semi-final this afternoon and Munoz is a Spain finalist, both away for a while yet. Curtis Jones looks likelier to stay by the day, with Iraola set to hold talks and Inter twice rebuffed. The XI therefore remains the closing 2025-26 side adjusted for the summer exits: Kerkez for Robertson, Jacquet for Konate, Ngumoha in the Salah slot, Frimpong at right back. Confidence Low until the squad is whole. Next fixture: pre-season vs Sunderland in Nashville, July 25; the league opens at Newcastle on August 23.",
};
