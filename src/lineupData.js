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
    // look. Refreshed Mon Jul 20: Spain beat Argentina in the World Cup final
    // last night, so Munoz has a winner's medal and Mac Allister a runner-up
    // one, and both miss the American tour entirely; Ekitike, Leoni and Bradley
    // take no part in pre-season, with Bradley's return now reported as
    // possibly 2027 rather than early season; Frimpong is the only fit
    // recognised right back and Jacquet the only senior centre-back; Jones
    // stays and reports back for the tour; Salah is a free agent with no club,
    // the Besiktas president having called his camp's commission demand
    // astronomical, with Chelsea named as his first choice if he stays in
    // England.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley now reported out into 2027)
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
    // Mon Jul 20: Spain won the final 1-0 after extra time, Munoz a champion
    // and Mac Allister a runner-up, both missing the tour; the rest of the
    // squad landed in Chicago today under a wildfire air quality alert;
    // Ekitike, Leoni and Bradley named by Iraola as long-term absences taking
    // no part in pre-season; the winger board now leads on Minteh at Brighton
    // and Hassan at a relegated Real Oviedo, with Arsenal ahead on Barcola and
    // El Mala parked at Koln until 2027; Jacquet the only
    // senior CB fit until Van Dijk joins up on tour.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley now reported out into 2027)
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
      RWB: 9,   // Frimpong (only recognised RB · Bradley now reported out into 2027)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 25,   // Ngumoha (the post-Salah slot until a winger signs)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-07-20
// (Mon: Spain beat Argentina 1-0 after extra time at MetLife last night, so
// Munoz has a winner's medal and Mac Allister a runner-up one, and both miss
// the American tour entirely; the rest of the squad landed in Chicago today
// under a wildfire air quality alert; Salah is a free agent with no club, the
// Besiktas president calling his camp's commission demand astronomical, with
// Fenerbahce and Galatasaray holding offers and Chelsea named his first choice
// in England; the winger board leads on Minteh at Brighton and Hassan at a
// relegated Real Oviedo, with Arsenal ahead on Barcola and El Mala parked at
// Koln until 2027; Ekitike, Leoni and Bradley take no part in pre-season, and
// Bradley's return is now reported as possibly 2027.)
export const PLAYER_EVIDENCE = {
  1:  "Post-WC break · joins in week two",        // Alisson
  2:  "Leads the GK group to Chicago",           // Mamardashvili
  3:  "Captain · joins up for the tour",         // Van Dijk
  4:  "Real Madrid's · left free June 30",       // Konaté
  5:  "Staying · versatile cover, flew today",    // Gomez
  6:  "Tottenham · left free June 30",           // Robertson
  7:  "First-pick LB · landed in Chicago",            // Kerkez
  8:  "Knee · now reported out into 2027",       // Bradley
  9:  "Only fit senior RB on the tour",                // Frimpong
  10: "ACL · hinted further away still",         // Leoni
  11: "Only senior CB until VVD returns",        // Jacquet
  12: "Academy depth · 2 senior apps",           // Ndukwe
  13: "WC runner-up · misses the tour",         // Mac Allister
  14: "WC exit · joins up for the tour",         // Gravenberch
  15: "Signed to 2031 · leads the tour squad",   // Szoboszlai
  16: "Staying · needed with Macca absent",     // Jones
  17: "Foot · back early, still not training",   // Endo
  18: "Germany out · joins up for the tour",     // Wirtz
  19: "Hamstring · a third lost pre-season",     // Bajcetic
  20: "Academy · tour billed as his audition",      // Nyoni
  21: "Free agent · Besiktas talks turn sour", // Salah
  22: "Not for sale · club restate it",          // Gakpo
  23: "Fit again · home early from the WC",      // Isak
  24: "Achilles · aiming at Boxing Day",         // Ekitike
  25: "Right-sided berth · his by default",        // Ngumoha
  26: "Staying to fight · trained day one",      // Chiesa
  27: "3rd-choice GK · trained day one",         // Woodman
  28: "World Cup winner · not yet at Kirkby", // Munoz
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
// (Refreshed Mon Jul 20: Spain beat Argentina 1-0 after extra time in the World
// Cup final, making Munoz a world champion and Mac Allister a runner-up; both
// miss the American tour and are not expected before the Como friendly on
// August 16. Salah remains a free agent with no club, the Besiktas president
// having said publicly that his representatives' commission demand reached an
// astronomical thirty-five per cent, with Fenerbahce and Galatasaray holding
// offers and Chelsea named as his first choice if he stays in England.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · not back until the US tour
  RCB: "Low",    // Konate gone free to Madrid · Jacquet the only senior CB available · Inacio heads the list
  RB:  "Low",    // Frimpong the only recognised RB · Bradley's return now reported as possibly 2027 · Jones staying in midfield
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "Medium", // Wirtz · injury-hit debut season · back for the tour
  CAM: "Low",    // Mac Allister · World Cup runner-up · misses the entire American tour
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
  RAM: "Mon Jul 20 — the slot that defines the summer, and the file has moved down a rung. Salah is a free agent with no club and the endgame has turned openly hostile, the Besiktas president saying his side agreed with the player on everything before the commission sought by his representatives climbed to an astronomical thirty-five per cent, with Fenerbahce and Galatasaray holding offers of their own and a separate report naming Chelsea as his first choice were he to stay in England. The marquee replacements are out of reach: Arsenal lead for Barcola and PSG insist he is not for sale at any price, El Mala is parked at Koln until 2027, Rayan untouchable at Bournemouth. What is live is Yankuba Minteh at around £70m from Brighton, a deal doable this month, and Haissem Hassan beneath a €12m clause at a relegated Real Oviedo. Rio Ngumoha, seventeen, keeps the shirt until somebody lands.",
  RB:  "Mon Jul 20 — still a one-man department, and the horizon moved back again. Jeremie Frimpong is the only fit senior right back on the plane to Chicago, and the encouraging line from last week has not held: where David Lynch had Conor Bradley targeting a return shortly after the new campaign begins, the reporting this weekend suggests the knee he hurt against Arsenal in January is worse than first thought and that he may not feature until 2027. The club have set no date either way and are planning without him. Curtis Jones, the emergency cover of last season, stays in midfield and is needed there with Mac Allister absent until mid-August. Frimpong plays by elimination, with Marco Palestra and Lutsharel Geertruida the deputies on the board.",
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
  RB:  [{ playerId: 9, reason: "Frimpong · the only fit recognised right-back; Bradley takes no part in pre-season and is now reported out into 2027" }, { playerId: 5, reason: "Gomez · the emergency right-back cover with Jones staying in midfield" }],
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
  reason: "Mon Jul 20 — the XI below is a squad baseline rather than a matchday prediction, and today it is missing the two Liverpool players who were on television last night. Victor Munoz won the World Cup with Spain at MetLife and Alexis Mac Allister lost it with Argentina; both miss the American tour in its entirety and are not expected in an Iraola side before the Como friendly on August 16. The rest of the squad landed in Chicago today, where an air quality alert from Canadian wildfire smoke may push the first session to Tuesday or Wednesday, and Van Dijk, Isak, Wirtz, Gravenberch and Gakpo are reported to join around the Wrexham fixture rather than the Sunderland opener, with Alisson in the second week. The team that starts in Nashville on Saturday will therefore be younger and thinner than this, and Trey Nyoni has publicly framed the trip as his opportunity. The winger slot is still unfilled and still decides the shape: Arsenal lead for Barcola and PSG say he is not for sale at any price, Said El Mala is now parked at Koln until 2027, and the two live names are Yankuba Minteh at around £70m from Brighton and Haissem Hassan beneath a €12m clause at a relegated Real Oviedo. Until one of them signs, Rio Ngumoha holds the right-sided berth by default. In midfield Kaishu Sano at Mainz remains the only deal carrying momentum. Ekitike (Achilles), Leoni (ACL) and Bradley (knee) all take no part in pre-season, and the reporting on Bradley has hardened toward a return in 2027 rather than early in the season; Endo and Bajcetic also missed the opening sessions, which leaves Frimpong the only fit senior right-back on the plane."
};
