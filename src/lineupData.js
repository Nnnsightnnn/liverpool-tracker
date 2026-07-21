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
    // look. Refreshed Tue Jul 21: the squad is settled at its Chicago base, 31
    // players including eleven from the academy, with Munoz and Mac Allister
    // missing the tour entirely after the World Cup final; Ekitike, Leoni and
    // Bradley travelled purely for rehabilitation and play no part, leaving
    // Frimpong the only fit recognised right back and Jacquet the only senior
    // centre-back; Inter's third bid for Jones was rejected and Iraola says he
    // hopes to keep him; Salah is still a free agent, an unveiling at Besiktas
    // briefed for next week and denied by Besiktas in the same breath; and
    // Liverpool have lodged an £85m opening bid for Barcola against a PSG
    // valuation of £116m-£128m, with Minteh held in reserve behind it.
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
    // coming fixture (next up is a pre-season friendly on July 25). Refreshed
    // Tue Jul 21: Munoz and Mac Allister miss the tour entirely after the World
    // Cup final; the squad is through its first full day at the Chicago base;
    // Ekitike, Leoni and Bradley travelled for rehabilitation only and take no
    // part; the winger board has swung back to the top of the market, an £85m
    // opening bid lodged for Barcola with PSG holding at £116m-£128m and Minteh
    // at around £70m kept in reserve, El Mala parked at Koln until 2027;
    // Jacquet the only senior CB fit until Van Dijk joins up on tour.
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
      RWB: 9,   // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 25,   // Ngumoha (the post-Salah slot until a winger signs)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-07-21
// (Tue: the squad is through its first full day at the Chicago training base,
// 31 players including eleven from the academy, with Munoz and Mac Allister
// missing the tour entirely after the World Cup final; Liverpool have lodged an
// opening bid reported at £85m for Barcola with PSG holding at £116m-£128m and
// Minteh at around £70m held in reserve; Inter's third bid for Jones was
// rejected; Salah remains a free agent, an unveiling at Besiktas briefed for
// next week and denied by Besiktas in the same breath; Ekitike, Leoni and
// Bradley travelled for rehabilitation only and play no part, Leoni now running
// outdoors and closest of the three to a return.)
export const PLAYER_EVIDENCE = {
  1:  "Post-WC break · joins in week two",        // Alisson
  2:  "Leads the GK group to Chicago",           // Mamardashvili
  3:  "Captain · joins up for the tour",         // Van Dijk
  4:  "Real Madrid's · left free June 30",       // Konaté
  5:  "Staying · versatile cover, flew today",    // Gomez
  6:  "Tottenham · left free June 30",           // Robertson
  7:  "First-pick LB · landed in Chicago",            // Kerkez
  8:  "Knee · in USA for rehab only",            // Bradley
  9:  "Only fit senior RB on the tour",          // Frimpong
  10: "ACL · running outdoors again",            // Leoni
  11: "Only senior CB until VVD returns",        // Jacquet
  12: "Academy depth · 2 senior apps",           // Ndukwe
  13: "WC runner-up · misses the tour",         // Mac Allister
  14: "WC exit · joins up for the tour",         // Gravenberch
  15: "Signed to 2031 · leads the tour squad",   // Szoboszlai
  16: "Inter's 3rd bid rejected · staying",      // Jones
  17: "Foot · back early, still not training",   // Endo
  18: "Germany out · joins up for the tour",     // Wirtz
  19: "Hamstring · a third lost pre-season",     // Bajcetic
  20: "New long-term deal · 11 academy on tour", // Nyoni
  21: "Free agent · Besiktas deny a deal",       // Salah
  22: "Not for sale · club restate it",          // Gakpo
  23: "Fit again · home early from the WC",      // Isak
  24: "Achilles · out to the festive period",    // Ekitike
  25: "Right-sided berth · his by default",        // Ngumoha
  26: "Staying to fight · trained day one",      // Chiesa
  27: "3rd-choice GK · trained day one",         // Woodman
  28: "World champion · joins up this week",     // Munoz
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
// (Refreshed Tue Jul 21: Liverpool have lodged an opening bid reported at £85m
// for Bradley Barcola, reopening a file PSG had declared closed, though Paris
// still want £116m-£128m. Inter's third bid for Curtis Jones, around €32m, was
// rejected. Salah remains a free agent: an unveiling at Besiktas is briefed for
// next week while Besiktas themselves deny any contract is agreed.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · not back until the US tour
  RCB: "Low",    // Konate gone free to Madrid · Jacquet the only senior CB available · Inacio heads the list
  RB:  "Low",    // Frimpong the only recognised RB · Bradley in the USA for rehab only · Jones staying in midfield
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "Medium", // Wirtz · injury-hit debut season · back for the tour
  CAM: "Low",    // Mac Allister · World Cup runner-up · misses the entire American tour, back for Como on Aug 16
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run.
export const SLOT_RATIONALE = {
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Fri Jul 10 — a fresh voice for the defence: John Barnes has urged Liverpool to extend Van Dijk beyond his 2027 deal even at 35, as the AC Milan interest driven by Ibrahimović, Fenerbahce lurking, keeps being knocked back at Anfield, no bid received and none expected to move him. The captain is central to Iraola's plans and the slot a thinning back line is being rebuilt around, Jacquet, cleared by his surgeon to rejoin group training, the in-house cover behind him.",
  RCB: "Tue Jun 9 — the succession finally has names: with Konaté's free move to Madrid sealed (the extension collapsed over wage and agent-fee demands, not football), Hughes and Iraola have drawn up a four-man shortlist, Sporting's left-footed Gonçalo Inácio (~£52m clause) the marquee fit, with Tottenham's Vuskovic, Forest's Murillo and Napoli's Beukema alongside and Club Brugge's Ordóñez (~£40m) the standing bid. Jacquet is the in-house cover until one lands.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Sat Jul 18 — settled, and expensively so. Szoboszlai has signed a new five-year contract running to 2031, three years on from arriving from Leipzig on a deal that ran only to 2028, with reported terms in the £200,000-£250,000 band. He was voted supporters' player of the season after a campaign spent filling in at right-back, at the eight and on the right wing. With Salah, Konate and Robertson all gone for nothing, this is the club choosing to keep rather than to replace.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Mon Jul 20 — the biggest night of his career, and it ended a man short. Mac Allister played the whole of the World Cup final at MetLife and lost it in extra time, Argentina reduced to ten when Enzo Fernandez was sent off for a second yellow in the 93rd minute and Ferran Torres finished it on 106. Emi Martinez made a final-record eleven saves behind him. A club season in which he was among the most criticised players at Anfield has still been rewritten by five weeks in America. He misses the American tour in its entirety and is not expected in an Iraola side before the Como friendly on August 16, which makes this slot a placeholder rather than a selection.",
  RAM: "Tue Jul 21 — the slot that defines the summer, and the marquee option is back on the table. Liverpool have lodged an opening bid reported at £85m for Bradley Barcola, with club-to-club talks escalating since France's World Cup exit, which reverses a fortnight in which PSG called him strictly off limits in public and Arsenal were framed as favourites. Paris still want £116m to £128m, so the gap, not the willingness, is now the obstacle. Behind it Yankuba Minteh at around £70m from Brighton has not been withdrawn, and Haissem Hassan sits beneath a €12m clause at a relegated Real Oviedo: two prices for one shirt. Salah, meanwhile, is still a free agent, an unveiling at Besiktas briefed for next week and denied by Besiktas in the same breath. Rio Ngumoha, seventeen, keeps the berth until somebody lands.",
  RB:  "Tue Jul 21 — still a one-man department, though the horizon is less bleak than it read on Monday. Jeremie Frimpong is the only fit senior right back available across the American tour. Conor Bradley did travel, but purely to continue a specialist rehabilitation programme alongside Ekitike and Leoni, and will not appear in any of the three friendlies; today's reporting steps back from the weekend's 2027 framing and returns to the earlier line, that he is targeting availability around the start of the campaign proper. The club still set no date. Curtis Jones, last season's emergency cover, stays in midfield and is needed there with Mac Allister absent until mid-August. Frimpong plays by elimination, with Marco Palestra and Lutsharel Geertruida the deputies on the board.",
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
  RB:  [{ playerId: 9, reason: "Frimpong · the only fit recognised right-back; Bradley travelled for rehabilitation only and plays no part in the tour" }, { playerId: 5, reason: "Gomez · the emergency right-back cover with Jones staying in midfield" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · a wide-left option · club restate he is not for sale" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · signed to 2031, can push into the No. 10 with another midfielder in the pivot" }, { playerId: 16, reason: "Curtis Jones · staying, on current evidence: a third Inter bid rejected and new terms likelier than a sale" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · holds the post-Salah right-sided berth until a winger signs" }, { playerId: 26, reason: "Chiesa · trained day one and staying to fight for a starting role" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Tue Jul 21 — the XI below is a squad baseline rather than a matchday prediction, and the gap between it and whatever starts in Nashville on Saturday is currently enormous. Liverpool's travelling party is 31 players, eleven of them from the academy, settled now at the Chicago base they will use for the whole trip. Victor Munoz and Alexis Mac Allister, a World Cup winner and a runner-up, miss the tour entirely and are not expected in an Iraola side before the Como friendly on August 16, while Van Dijk, Isak, Wirtz, Gravenberch and Gakpo are reported to join around the Wrexham fixture rather than the Sunderland opener and Alisson in the second week. The team that plays Sunderland will therefore be younger and thinner than this one. The winger slot is still unfilled and still decides the shape, but it moved today: an opening bid reported at £85m has gone in for Bradley Barcola and club-to-club talks with PSG are escalating, against a Paris valuation of £116m to £128m, with Yankuba Minteh at around £70m held in reserve rather than dropped. Until one of them signs, Rio Ngumoha holds the right-sided berth by default. In midfield the board has switched priorities, declining Joao Gomes and installing Adam Wharton at an ask beyond £100m, while Inter's third bid for Curtis Jones was rejected and Iraola said publicly he hopes to keep him. Ekitike (Achilles, now reported to the festive period), Leoni (ACL, running outdoors and closest of the three to returning) and Bradley (knee) all travelled purely for rehabilitation and play no part; Frimpong is the only fit senior right-back on the tour."
};
