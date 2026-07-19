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
    // look. Refreshed Sat Jul 18: Szoboszlai has signed to 2031; Ekitike and
    // Leoni remain long-term absentees while Bradley is now reported to be
    // targeting a return shortly after matchday one; Frimpong is still the only
    // recognised right back and Jacquet the only senior centre-back; Curtis
    // Jones shut down a reported Forest agreement himself and looks a stay;
    // Salah is a free agent with no confirmed club (Besiktas reported Jul 17,
    // denied by his agent hours later).
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley targets an early return)
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
    // Sun Jul 19: World Cup final tonight (Mac Allister v Munoz's Spain), the
    // rest of the squad flying to Chicago tomorrow; Ekitike, Leoni and Bradley
    // named by Iraola as long-term absences taking no part in pre-season; the
    // winger board now leads on Haissem Hassan at a relegated Real Oviedo
    // on El Mala, leaving Minteh at £70m; Jacquet the only senior CB fit.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley targets an early return)
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
      RWB: 9,   // Frimpong (only recognised RB · Bradley targets an early return)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 25,   // Ngumoha (the post-Salah slot until a winger signs)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-07-19
// (Sun: the World Cup final is tonight at MetLife, Mac Allister expected in
// Argentina's midfield three against Munoz's Spain; the squad flies to Chicago
// tomorrow; Salah's destination has moved from Istanbul to MLS, Sporting Kansas
// City tabling a two-year offer as Besiktas call the Turkish reports fabricated;
// Liverpool have accelerated for Haissem Hassan below his €12m clause and
// restated they will not sell Gakpo; Thuram is committing to Juventus, leaving
// Sano the live midfield deal; Ekitike, Leoni and Bradley take no part in
// pre-season, though Bradley's return is targeted soon after matchday one.)
export const PLAYER_EVIDENCE = {
  1:  "Post-WC break · due for the tour",        // Alisson
  2:  "Leads the GK group to Chicago",           // Mamardashvili
  3:  "Captain · joins up for the tour",         // Van Dijk
  4:  "Real Madrid's · left free June 30",       // Konaté
  5:  "Staying · versatile cover, flies Mon",    // Gomez
  6:  "Tottenham · left free June 30",           // Robertson
  7:  "First-pick LB · flies Monday",            // Kerkez
  8:  "Knee · out of pre-season entirely",       // Bradley
  9:  "Only fit RB on the plane",                // Frimpong
  10: "ACL · hinted further away still",         // Leoni
  11: "Only senior CB until VVD returns",        // Jacquet
  12: "Academy depth · 2 senior apps",           // Ndukwe
  13: "Starts tonight's final vs Spain",         // Mac Allister
  14: "WC exit · joins up for the tour",         // Gravenberch
  15: "Signed to 2031 · leads the tour squad",   // Szoboszlai
  16: "Staying · reports back for the tour",     // Jones
  17: "Foot · back early, still not training",   // Endo
  18: "Germany out · joins up for the tour",     // Wirtz
  19: "Hamstring · a third lost pre-season",     // Bajcetic
  20: "Academy prospect · trained day one",      // Nyoni
  21: "Free agent · Sporting KC table an offer", // Salah
  22: "Not for sale · club restate it",          // Gakpo
  23: "Fit again · home early from the WC",      // Isak
  24: "Achilles · aiming at Boxing Day",         // Ekitike
  25: "Salah slot · holds it by default",        // Ngumoha
  26: "Staying to fight · trained day one",      // Chiesa
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
// (Refreshed Sat Jul 18: Szoboszlai has signed a new five-year deal to 2031;
// Salah remains a free agent with no confirmed club, Besiktas reported at
// verbal terms on Jul 17 and his agent denying it hours later; Curtis Jones
// publicly shut down a reported Nottingham Forest agreement and looks likelier
// to sign new terms than to leave; Conor Bradley is targeting a return shortly
// after the season starts; Frimpong is still the only recognised right back
// and Jacquet the only senior centre-back available.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · not back until the US tour
  RCB: "Low",    // Konate gone free to Madrid · Jacquet the only senior CB available · Inacio heads the list
  RB:  "Low",    // Frimpong the only recognised RB · Bradley now targets a return soon after matchday one · Jones staying in midfield
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "Medium", // Wirtz · injury-hit debut season · back for the tour
  CAM: "Low",    // Mac Allister · starts tonight's World Cup final · reports back late on tour
  RAM: "Low",    // Salah gone (Sporting KC offer, decision close) · Barcola priced at a British record · Hassan at Oviedo now the live name
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
  RDM: "Sat Jul 18 — settled, and expensively so. Szoboszlai has signed a new five-year contract running to 2031, three years on from arriving from Leipzig on a deal that ran only to 2028, with reported terms in the £200,000-£250,000 band. He was voted supporters' player of the season after a campaign spent filling in at right-back, at the eight and on the right wing. With Salah, Konate and Robertson all gone for nothing, this is the club choosing to keep rather than to replace.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Wed Jun 17 — the denial gets louder: Mac Allister's father and agent Carlos has again branded the exit talk 'false,' insisting no approaches were declined because none were made, even as Liverpool stay quietly open to a sale near €120m if funds are needed. Real Madrid hold the warmest interest in a midfielder with two years left and no extension talks open, a fork pointed against Gravenberch's fresh terms.",
  RAM: "Sat Jul 18 — the slot that defines the summer, and this week it got harder. Salah is gone and, as of Friday night, still without a confirmed club: Turkish reports had Besiktas at verbal terms, his agent Ramy Abbas denied any agreement, and Istanbul replaced Jeddah as the live thread. The replacements moved the wrong way. PSG publicly called Bradley Barcola 'off limits' and priced any reversal at a British-record £127.5m, with Arsenal now framed as top of that race and reporting that the player himself has cooled on Anfield; Koln are increasingly confident of keeping Said El Mala at around 50m euros; Bournemouth will not be moved on Rayan while his clause sleeps until 2027. Brighton's Yankuba Minteh at £70m is the one deliverable name left. Rio Ngumoha, seventeen, keeps the shirt by default, and is one of only two senior forwards available to the head coach.",

  RB:  "Sat Jul 18 — still a one-man department, but the horizon moved. Jeremie Frimpong remains the only recognised right back on the grass, and yet the most encouraging injury line of the summer landed this week: David Lynch reports that Conor Bradley, whose knee went at Arsenal in January and whose absence had been discussed as a 2027 problem, is targeting a return shortly after the new campaign begins and is 'not a million miles away.' Liverpool will not lean on him and are planning without him. Curtis Jones, the emergency cover of last season, stays in midfield and answered a reported Forest agreement with a raised eyebrow. Frimpong plays by elimination until then, with Marco Palestra and Lutsharel Geertruida the deputies on the board.",

  ST:  "Tue Jun 2 — Alexander Isak ends an injury-wrecked debut season — a string of setbacks limited the £100m striker to a handful of starts and never let Slot's intended front three settle. A full summer to reset before 2026-27.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · leads the goalkeeping group to Chicago with Alisson still on a post-World Cup break" }, { playerId: 27, reason: "Woodman · third-choice cover, trained day one" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the first-choice left-back going forward now Robertson has left" }],
  LCB: [{ playerId: 5, reason: "Gomez · can shuffle infield to centre-back in extremis" }],
  RCB: [{ playerId: 11, reason: "Jacquet · the only senior centre-back Iraola can pick until Van Dijk is back; Leoni is long-term out" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the only fit recognised right-back; Bradley takes no part in pre-season but targets a return soon after matchday one" }, { playerId: 5, reason: "Gomez · the emergency right-back cover with Jones staying in midfield" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · a wide-left option · club restate he is not for sale" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · signed to 2031, can push into the No. 10 with another midfielder in the pivot" }, { playerId: 16, reason: "Curtis Jones · staying, on current evidence: Inter bids rejected and new terms likelier than a sale" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · holds the post-Salah right-sided berth until a winger signs" }, { playerId: 26, reason: "Chiesa · trained day one and staying to fight for a starting role" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Sun Jul 19 — the XI below is a squad baseline, not a matchday prediction, because on the day this was written the two most relevant Liverpool players are in New Jersey playing each other. Alexis Mac Allister is expected to start the World Cup final in Argentina's midfield three with Paredes and Enzo Fernandez; Victor Munoz is in the Spain squad. Both report to Iraola last of anyone, well into the American tour. The rest fly to Chicago on Monday, with Van Dijk, Isak, Wirtz, Gravenberch and Gakpo reported to join up around the Wrexham fixture rather than the Sunderland opener, so the team that actually starts in Nashville on Saturday will be younger and thinner than this. The winger slot is still unfilled and still decides the shape: Barcola is priced at a British record and called not for sale, El Mala is staying at Koln, and the live name is now Haissem Hassan at a relegated Real Oviedo, where Liverpool are reported confident of paying under his €12m release clause. Until somebody signs, Rio Ngumoha holds the right-sided berth by default, and the club have restated they do not plan to sell Gakpo. In midfield the field has thinned toward Mainz: Khephren Thuram is committing to Juventus and Adam Wharton is priced at £100m, leaving Kaishu Sano, with talks held and up to £51m readied, as the one deal with momentum. Ekitike (Achilles), Leoni (ACL) and Bradley (knee) were all named by Iraola as long-term absences taking no part in pre-season, though Bradley's return is now targeted soon after matchday one; Endo, Bajcetic and Jaros are also out. Frimpong remains the only fit recognised right back and Jacquet the only senior centre-back until Van Dijk lands. Confidence Low until the squad is whole. Next fixture: pre-season vs Sunderland in Nashville, July 25; the league opens at Newcastle on August 23.",
};
