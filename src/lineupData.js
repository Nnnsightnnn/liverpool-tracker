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
    // look. Refreshed Mon Jul 13: Iraola takes his first press conference at
    // 11am today as the summer break ends, roughly fifteen seniors reporting
    // back and the first session tomorrow; Salah has closed the door on Europe,
    // a Saudi deal in principle in place with MLS still arguing; Curtis Jones
    // answers the "agreed" Forest deal with a raised-eyebrow emoji; Frimpong is
    // named among the day-one defenders, correcting last week's audits.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (natural RB · Jones close to a Forest exit)
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
    // Mon Jul 13: Iraola's first press conference is at 11am today, the break
    // ending beneath him with only fifteen seniors back and the World Cup
    // contingent away until the American tour; Salah has ruled Europe out;
    // Barcola drifts as Arsenal go top of the race and PSG hold at £128m;
    // Jacquet is the only senior centre-back currently available.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (natural RB · Jones close to a Forest exit)
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
      RWB: 9,   // Frimpong (natural RB · Jones close to a Forest exit)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 25,   // Ngumoha (the post-Salah slot until a winger signs)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-07-12
// (Sun: Michael Edwards resigns as FSG's chief executive of football and will
// not be replaced; Richard Hughes expected at Al-Hilal once the window shuts;
// Mac Allister heads Argentina past Switzerland 3-1 into an England semi-final;
// Forest reported to have agreed a deal for Curtis Jones; Palace price Wharton
// out of Anfield at £103m; Iraola's first press conference is 11am Monday.)
export const PLAYER_EVIDENCE = {
  1:  "Brazil's No. 1 · staying at Anfield",       // Alisson
  2:  "Back day one · club prefer a loan",         // Mamardashvili
  3:  "Captain, 35 · back for the US tour",        // Van Dijk
  4:  "Madrid-bound · France meet Spain",          // Konaté
  5:  "Back day one · now tilting to stay",        // Gomez
  6:  "Tottenham · left free June 30",             // Robertson
  7:  "First-pick LB · back day one",              // Kerkez
  8:  "Long-term knee · misses day one",           // Bradley
  9:  "Back day one · only natural RB left",       // Frimpong
  10: "ACL · nearing a return, misses day one",    // Leoni
  11: "Only senior CB fit · 'will be 100%'",       // Jacquet
  12: "Academy depth · 2 senior apps",             // Ndukwe
  13: "Holders v England · Atlanta Wednesday",     // Mac Allister
  14: "WC exit · back for the US tour",            // Gravenberch
  15: "No Hungary WC · walks in day one",          // Szoboszlai
  16: "Raised an eyebrow at the Forest deal",      // Jones
  17: "Reported early · still misses day one",     // Endo
  18: "Germany out · back for the tour",           // Wirtz
  19: "Hamstring year · misses day one",           // Bajcetic
  20: "Academy prospect · back day one",           // Nyoni
  21: "Free agent · Europe ruled out",             // Salah
  22: "Stays · back for the US tour",              // Gakpo
  23: "Fit again · rejoins for the US tour",       // Isak
  24: "Achilles · aiming at Boxing Day",           // Ekitike
  25: "Only senior forward back day one",          // Ngumoha
  26: "Back day one · staying to fight for it",    // Chiesa
  27: "3rd-choice GK · back day one",              // Woodman
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
// has left (Salah, Robertson, Konate) or whose future is open (Mac Allister,
// Jones). (Refreshed Mon Jul 13: Iraola's first press conference is at 11am
// today as the break ends with fifteen seniors back; Salah has closed the door
// on Europe, a Saudi deal in principle in place; Jones has answered the
// "agreed" Forest move with a raised-eyebrow emoji; Frimpong is named among the
// day-one defenders; Jacquet is the only senior centre-back available.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · not back until the US tour
  RCB: "Low",    // Konate gone free to Madrid · Jacquet the only senior CB available · Inacio heads the list
  RB:  "Low",    // Frimpong the only natural RB left · Bradley's knee still indoors · Jones may be sold
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "Medium", // Szoboszlai · mainstay, extension still pending · in day one
  LAM: "Medium", // Wirtz · injury-hit debut season · back for the tour
  CAM: "Low",    // Mac Allister · in a World Cup semi-final · no extension talks open
  RAM: "Low",    // Salah gone (Europe ruled out, Saudi deal in principle) · Barcola drifting at £128m · no winger signed
  ST:  "Medium", // Isak · £100m striker · injury-wrecked first season · back for the tour
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains the season-closing pick for each slot of the 4-2-3-1. The 2025-26
// season is complete; these read as a retrospective on the first-choice XI
// rather than a prediction for a coming fixture. (RAM and RB refreshed Sun Jul
// 12; LCB Fri Jul 10; CAM Wed Jun 17; RCB Tue Jun 9; rest Tue Jun 2.)
export const SLOT_RATIONALE = {
  GK:  "Tue Jun 2 — Alisson is now widely expected to remain. Juventus had agreed personal terms near €5m a year, but the Italians missing out on Champions League football drained the move of momentum, and the Brazilian was never the one pushing it. Mamardashvili waits, likeliest to go out on loan.",
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Fri Jul 10 — a fresh voice for the defence: John Barnes has urged Liverpool to extend Van Dijk beyond his 2027 deal even at 35, as the AC Milan interest driven by Ibrahimović, Fenerbahce lurking, keeps being knocked back at Anfield, no bid received and none expected to move him. The captain is central to Iraola's plans and the slot a thinning back line is being rebuilt around, Jacquet, cleared by his surgeon to rejoin group training, the in-house cover behind him.",
  RCB: "Tue Jun 9 — the succession finally has names: with Konaté's free move to Madrid sealed (the extension collapsed over wage and agent-fee demands, not football), Hughes and Iraola have drawn up a four-man shortlist, Sporting's left-footed Gonçalo Inácio (~£52m clause) the marquee fit, with Tottenham's Vuskovic, Forest's Murillo and Napoli's Beukema alongside and Club Brugge's Ordóñez (~£40m) the standing bid. Jacquet is the in-house cover until one lands.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Tue Jun 2 — Szoboszlai closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Wed Jun 17 — the denial gets louder: Mac Allister's father and agent Carlos has again branded the exit talk 'false,' insisting no approaches were declined because none were made, even as Liverpool stay quietly open to a sale near €120m if funds are needed. Real Madrid hold the warmest interest in a midfielder with two years left and no extension talks open, a fork pointed against Gravenberch's fresh terms.",
  RAM: "Mon Jul 13 — the ghost of the slot picks a hemisphere. Mohamed Salah, a free agent since July 1, is now reported to have ruled Europe out altogether: the Fenerbahce briefing that reopened the continent at the weekend has not survived the week, and a deal in principle is described as in place in the Saudi Pro League, with the Jeddah pair favoured for the two-hour flight to Cairo. Only MLS still argues, Kansas City leading and San Diego pushing. The replacement file, meanwhile, is getting thinner rather than fuller: PSG have settled at a British-record £128m for Bradley Barcola and Arsenal are now top of that race, Yan Diomande chose Paris over Anfield, and the cheaper board now holds Almeria's Sergio Arribas at around £21m. Rio Ngumoha, seventeen, keeps the shirt by default, and is one of only two senior forwards reporting for day one.",

  RB:  "Mon Jul 13 — a correction, and a thin one. Last week's pre-season audits had Jeremie Frimpong listed among the absentees; this morning's reporting places him among the defenders on the grass for Iraola's first session, which settles the slot in his favour by elimination rather than by form. He is the only natural right back in the building. Conor Bradley's knee rehab is still confined to the gym twenty-four matches on from the injury at Arsenal in January, with no return date offered and a place among the day-one absentees confirmed. Curtis Jones, the emergency cover here last season, has just answered reports of an agreed £40m Forest move with a raised-eyebrow emoji, so he is neither sold nor settled. Frimpong's own debut year was broken up repeatedly by muscle trouble; an uninterrupted run is the entire ask. The marquee search has not gone away, a bid near £80m for Barcelona's Jules Kounde still the reported ambition.",

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
  LAM: [{ playerId: 22, reason: "Gakpo · a wide-left option · exit now called unlikely" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · can push forward into the No. 10 with another midfielder in the pivot" }, { playerId: 16, reason: "Curtis Jones · alternative No. 10 if not used at right-back" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · teenage wide option · part of the post-Salah picture" }, { playerId: 26, reason: "Chiesa · travelling on the US tour, then talks with Iraola" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Mon Jul 13 — the shape still waits on a squad that does not exist yet. Andoni Iraola takes his first Liverpool press conference at 11am today as the summer break formally ends, with the first full session tomorrow and roughly fifteen senior players back: Mamardashvili, Woodman and Pecsi in goal, Jacquet, Gomez, Kerkez, Frimpong and a returning Tsimikas behind, Szoboszlai, Jones, Nyoni, McConnell and a returning Harvey Elliott in midfield, and only Chiesa and Ngumoha up front. Bradley, Leoni, Endo, Bajcetic and Ekitike miss the opening day injured, and the World Cup contingent (Van Dijk, Gravenberch, Gakpo, Wirtz, Isak, with Mac Allister and Munoz still playing) will not appear until the American tour. He does it with no chief executive of football above him and a sporting director bound for Al-Hilal. The XI below therefore remains the closing 2025-26 side adjusted for the summer exits, Kerkez for Robertson, Jacquet for Konate, Ngumoha in the Salah slot, with Frimpong holding right back. Confidence Low until the squad is whole. Next fixture: pre-season vs Sunderland in Nashville, July 25; the league opens at Newcastle on August 23.",
  pundit_sources: ["Liverpool FC", "This Is Anfield", "Sky Sports", "ESPN", "The Athletic", "TeamTalk", "Football365", "Liverpool.com", "Fabrizio Romano", "Anfield Index"],
  agreement_rate: 0.51,
  generated_at: "2026-07-13T09:00:00Z",
};
