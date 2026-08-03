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
    // look. Refreshed Sun Aug 2: two from two on the US tour, a 1-0 win over
    // Wrexham (Ngumoha) after the 4-2 over Sunderland, with Munoz and Mac Allister
    // missing the tour entirely after the World Cup final; Ekitike, Leoni and
    // Bradley take no part (rehab only), and Gomez out for weeks and missing the
    // season start, leaving Frimpong the only fit recognised right back and Jacquet
    // the lone senior centre-back until Van Dijk is eased back. Iraola starts Isak,
    // Wirtz, Gravenberch and the debutant Jacquet together for the first time in
    // Sunday's Leeds finale (a 2-4 loss); the centre-back hunt turns to Milan's Tomori; Barcola
    // opening bid (~£103m) was rejected as PSG hold near €170m and close on
    // Akliouche and Godts, a path that could free him; Sano leads the six at ~£51m.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley on tour for rehab only)
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
    // coming fixture (next up is Leeds at Soldier Field, Chicago, today, Aug 2).
    // Refreshed Sun Aug 2: Munoz and Mac Allister miss the tour entirely after
    // the World Cup final; the squad is two from two after a 1-0 win over Wrexham
    // (Ngumoha) and the 4-2 over Sunderland; Ekitike, Leoni and Bradley travelled
    // for rehabilitation only and take no part, and Gomez is out for weeks and
    // misses the season start; the winger board leads with Barcola, whose ~£103m
    // opening bid PSG rejected (they hold near €170m) though by closing on Akliouche
    // and Godts they may free him; Milan's Tomori is the centre-back pursuit; Jacquet
    // the only senior CB fit until Van Dijk is eased back, and Iraola starts the
    // World Cup men together for the first time in Sunday's Leeds finale (a 2-4 loss).
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (the season's heaviest-minutes midfielder)
      LAM: 18,  // Wirtz (wide-left · injury-hit debut season)
      CAM: 13,  // Mac Allister (No. 10 · World Cup runner-up · misses the American tour)
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
    // Hypothetical 3-4-3 alternative, a shape Slot rarely used in 2025-26.
    // Shown for completeness alongside the season-closing baseline. Refreshed
    // Sun Aug 2: Joe Gomez, hurt inside eight minutes of the Sunderland win and
    // out for weeks (missing the opener), has missed both tour games, so the
    // academy's Ndukwe steps into the left of a bare back three alongside VVD and
    // Jacquet; Kerkez and Jones as wing-backs, Gravenberch and Mac Allister in
    // midfield, a Gakpo-Isak-Ngumoha front three. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LCB: 12,  // Ndukwe (academy cover · Gomez injured vs Sunderland, VVD not yet on tour)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (unveiled Jul 1 · right of the back three)
      LWB: 7,   // Kerkez (LWB with Robertson gone to Spurs)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 9,   // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 25,   // Ngumoha (the post-Salah slot until a winger signs)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-08-02
// (Sun: today's tour finale against Leeds at Soldier Field is where Iraola finally
// starts Isak, Wirtz, Gravenberch and the debutant Jacquet together for the first
// time, the squad two from two after a 1-0 win over Wrexham and the 4-2 at
// Sunderland; the centre-back hunt has a name at last, Liverpool in contact with
// AC Milan over Fikayo Tomori; PSG accept Monaco's £42.7m bid for Akliouche and
// open Godts talks, a path that could free Barcola (~£103m bid rejected, PSG want
// ~€170m); Sano leads the midfield race at ~£51m; Salah's exit swings to Turkey, Trabzonspor leading
// with Trabzonspor now ahead of Besiktas; Gomez out for weeks and misses the opener; Ekitike,
// Leoni and Bradley play no part, Leoni furthest advanced.)
export const PLAYER_EVIDENCE = {
  1:  "Back for the Anfield friendlies",          // Alisson
  2:  "Started tour · leads GK group",            // Mamardashvili
  3:  "Back from WC · first minutes Aug 9",       // Van Dijk
  5:  "Muscle · out weeks, misses opener",        // Gomez
  7:  "First-pick LB · on the tour",              // Kerkez
  8:  "Knee · months out, rehab only",            // Bradley
  9:  "Only fit senior RB on the tour",           // Frimpong
  10: "ACL · running outdoors, closest back",     // Leoni
  11: "Started Leeds · £60m CB leaned on",         // Jacquet
  12: "Academy CB cover · 2 senior apps",         // Ndukwe
  13: "WC runner-up · back for Como Aug 16",      // Mac Allister
  14: "Played Leeds · the fixed point",           // Gravenberch
  15: "Deal to 2031 · captaincy shortlist",       // Szoboszlai
  16: "Inter to £30m · ready to push exit",       // Jones
  17: "Nearing full training · sale likely",      // Endo
  18: "Scored vs Leeds · No. 10 role",            // Wirtz
  19: "Building fitness · on the tour",           // Bajcetic
  20: "Impressed on tour · Iraola audition",      // Nyoni
  22: "Not for sale · Spurs told £60m+",          // Gakpo
  23: "First tour minutes vs Leeds",              // Isak
  24: "Achilles · months out, rehab only",        // Ekitike
  25: "Scored vs Wrexham · holds RW slot",        // Ngumoha
  26: "Back from illness · staying to fight",     // Chiesa
  27: "New deal · 3rd-choice GK",                 // Woodman
  28: "World champion · back for Como Aug 16",    // Munoz
};

// Default formation when entering the view: the 4-2-3-1 Slot favoured through
// the run-in, shown as the first-choice XI Liverpool finished the 2025-26
// season with (the campaign is over; next up is Leeds at Soldier Field, Chicago,
// on Aug 2). It is a squad baseline, not a matchday prediction.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. With the season over these read as confidence that the slot's
// occupant remains a first-choice starter into 2026-27 — LOW where the player
// has left (Salah, Robertson, Konate) or whose future is open (Mac Allister).
// (Refreshed Sun Aug 2: Iraola starts Isak, Wirtz, Gravenberch and the debutant
// Jacquet together for the first time in Sunday's Leeds finale (a 2-4 loss). The centre-back hunt
// has a name at last, Liverpool in contact with Milan over Fikayo Tomori; PSG accept
// Monaco's £42.7m Akliouche bid and open Godts talks, a path that could free Barcola
// (~£103m bid rejected, PSG want ~€170m); Sano leads the midfield race at ~£51m;
// Salah's exit swings to Turkey (Trabzonspor lead, Besiktas suspended talks).)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · eased back, first minutes vs Monaco Aug 9
  RCB: "Low",    // Konate gone free to Madrid · Jacquet the only senior CB available · Liverpool open contact with Milan's Tomori
  RB:  "Low",    // Frimpong the only recognised RB · Bradley in the USA for rehab only · Jones staying in midfield
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "Medium", // Wirtz · injury-hit debut season · No. 10 role, played the Leeds finale
  CAM: "Low",    // Mac Allister · World Cup runner-up · misses the entire American tour, back for Como on Aug 16
  RAM: "Low",    // Salah gone · PSG accept Monaco's Akliouche bid + open Godts talks (a path to free Barcola; ~£103m bid rejected, PSG want ~€170m) · Ngumoha holds it by default
  ST:  "Medium", // Isak · injury-wrecked debut year · plays his first minutes vs Leeds today
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run.
export const SLOT_RATIONALE = {
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Fri Jul 10 — a fresh voice for the defence: John Barnes has urged Liverpool to extend Van Dijk beyond his 2027 deal even at 35, as the AC Milan interest driven by Ibrahimović, Fenerbahce lurking, keeps being knocked back at Anfield, no bid received and none expected to move him. The captain is central to Iraola's plans and the slot a thinning back line is being rebuilt around, Jacquet, cleared by his surgeon to rejoin group training, the in-house cover behind him.",
  RCB: "Mon Aug 3 — the Leeds collapse turned a priority into a non-negotiable. Iraola watched his reserves ship four in Chicago and named the cure out loud: an experienced centre-back cannot wait. Milan's Fikayo Tomori, out of contract in 2027 and unlikely to be renewed, is the headline name available, but it is Newcastle who have moved with a first proposal, Liverpool's interest still at the level of a profile match. Jacquet, twenty, is the only senior partner Van Dijk has until the captain is eased back through the Anfield friendlies, so the body has to arrive before Newcastle on the 23rd.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Sat Jul 18 — settled, and expensively so. Szoboszlai has signed a new five-year contract running to 2031, three years on from arriving from Leipzig on a deal that ran only to 2028, with reported terms in the £200,000-£250,000 band. He was voted supporters' player of the season after a campaign spent filling in at right-back, at the eight and on the right wing. With Salah, Konate and Robertson all gone for nothing, this is the club choosing to keep rather than to replace.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Mon Jul 20 — the biggest night of his career, and it ended a man short. Mac Allister played the whole of the World Cup final at MetLife and lost it in extra time, Argentina reduced to ten when Enzo Fernandez was sent off for a second yellow in the 93rd minute and Ferran Torres finished it on 106. Emi Martinez made a final-record eleven saves behind him. A club season in which he was among the most criticised players at Anfield has still been rewritten by five weeks in America. He misses the American tour in its entirety and is not expected in an Iraola side before the Como friendly on August 16, which makes this slot a placeholder rather than a selection.",
  RAM: "Mon Aug 3 — the slot that defines the summer, and the standoff holds. With Salah's exit now bending east to Trabzonspor rather than the Gulf, the left-of-front vacancy is real, and Bradley Barcola remains the marquee target: his ~£103m opening bid was rejected and PSG still price him near €170m, a gap of some £45m, the player asking for England but Paris unmoved on the number. Below him Rio Ngumoha, seventeen, holds the post-Salah berth by default after his Wrexham winner, Minteh (~£70-80m) the first name in reserve. Until a winger lands, the berth belongs to the academy.",
  RB:  "Tue Jul 21 — still a one-man department, though the horizon is less bleak than it read on Monday. Jeremie Frimpong is the only fit senior right back available across the American tour. Conor Bradley did travel, but purely to continue a specialist rehabilitation programme alongside Ekitike and Leoni, and will not appear in any of the three friendlies; today's reporting steps back from the weekend's 2027 framing and returns to the earlier line, that he is targeting availability around the start of the campaign proper. The club still set no date. Curtis Jones, last season's emergency cover, stays in midfield and is needed there with Mac Allister absent until mid-August. Frimpong plays by elimination, with Marco Palestra and Lutsharel Geertruida the deputies on the board.",
  ST:  "Mon Aug 3 — Alexander Isak took his first pre-season minutes in Sunday's 2-4 loss to Leeds, lining up with Wirtz and Gravenberch for the first time. An injury-wrecked debut season limited the £100m striker to a handful of starts and never let the front three settle; a clean run under Iraola is the reset the whole attack needs, and the first-half fluency in Chicago was the early argument for it.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · led the goalkeeping group on the tour with Alisson on a post-World Cup break; Alisson back for the Anfield friendlies" }, { playerId: 27, reason: "Woodman · third-choice cover, trained day one" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the first-choice left-back going forward now Robertson has left" }],
  LCB: [{ playerId: 5, reason: "Gomez · can shuffle infield to centre-back if his muscle injury clears" }],
  RCB: [{ playerId: 11, reason: "Jacquet · the only senior centre-back Iraola can pick until Van Dijk is back; Leoni is long-term out" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the only fit recognised right-back; Bradley travelled for rehabilitation only and took no part in the tour" }, { playerId: 5, reason: "Gomez · emergency right-back cover once his muscle injury clears, Jones kept in midfield not at full-back" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · a wide-left option · club restate he is not for sale" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · signed to 2031, can push into the No. 10 with another midfielder in the pivot" }, { playerId: 16, reason: "Curtis Jones · future now open: Inter up to £30m and the player ready to push for the exit" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · holds the post-Salah right-sided berth until a winger signs" }, { playerId: 26, reason: "Chiesa · trained day one and staying to fight for a starting role" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Mon Aug 3 — the XI below stays a squad baseline rather than a matchday team, and Sunday's tour finale gave it a warning. Liverpool led Leeds 2-0 in Chicago through Luke Chambers and Florian Wirtz, then conceded four unanswered after Andoni Iraola's changes to lose 2-4, the starters a level above and the bench a level short. Iraola has since called a reliable centre-back the non-negotiable of the window: Joe Gomez is out for weeks and misses the Newcastle opener, Leoni (ACL) is still recovering, and only Van Dijk and the 20-year-old Jacquet are fit at the back, with Van Dijk eased in only through the Anfield friendlies (Monaco on Aug 9, Como on the 16th). Off the pitch the sell side has stirred, Inter lifting their Curtis Jones bid to £30m and Salah's exit swinging to Turkey with Trabzonspor, while Milan's Tomori is available but Newcastle lead, and Barcola still waits on a PSG price near €170m. Next up: Monaco at Anfield on August 9."
};
