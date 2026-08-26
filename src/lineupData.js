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
    // IDs from playerData.js. This 4-3-3 is the backup look; the default is the
    // 4-2-3-1 below. Refreshed Sat Aug 22: pre-season over (Como beaten 2-0 on
    // Aug 16, Gakpo and Jacquet), next up is Nottingham Forest at home on Sat Aug 29,
    // Iraola's first competitive HOME match (Newcastle away drawn 2-2 on Aug 23). Mac Allister back in the spine; Ekitike
    // (on a cane), Leoni and Bradley take no part; Gomez out for the opener and
    // racing for Forest on Aug 29, leaving Frimpong the only fit recognised right
    // back with Araujo's loan covering; Jacquet fit again and scored vs Como.
    // Curtis Jones' €35m sale to Inter is confirmed so he leaves the squad;
    // Gakpo, no longer expected to be sold, starts on the right with Ngumoha
    // pushing; the Barcola deal is agreed with PSG (up to €150m,
    // medical next but unsigned); the Minteh deal collapsed on Aug 26 (Brighton want £80m, LFC withdrew).
    // Sarr rejected by Palace the same day; Lille's Fernandez-Pardo enquired about.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (back and fit after scoring vs Como · Araujo loan covers CB/RB)
      RB: 9,    // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LCM: 13,  // Mac Allister (midfield three)
      CM: 14,   // Gravenberch (control of midfield · most reliable MID)
      RCM: 15,  // Szoboszlai (engine · 48 apps)
      LW: 18,   // Wirtz (front-line option)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 22,   // Gakpo (staying, expected to start; Ngumoha drops to the bench)
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
    // campaign with (adjusted for the summer exits), NOW pointed at the coming
    // fixture: Nottingham Forest at home on Sat Aug 29 (Newcastle away drawn 2-2 on Aug 23).
    // Refreshed Sat Aug 22: Como beaten 2-0 on Aug 16 (Gakpo, Jacquet), pre-season closed; next up
    // Newcastle away on Aug 23. Mac Allister is back in the spine after the World Cup final;
    // Ekitike (on a cane) and Bradley take no part (rehab), Gomez out and racing for Forest on Aug 29,
    // Leoni closing on a September return; Jacquet fit again after scoring vs Como.
    // Curtis Jones' €35m sale to Inter is confirmed so he leaves the squad;
    // Liverpool no longer expect to sell Gakpo, now in line to start with Ngumoha to the bench;
    // Barcola deal agreed with PSG (medical next, unsigned); Minteh deal collapsed Aug 26 (£80m ask, LFC out).
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (the season's heaviest-minutes midfielder)
      LAM: 18,  // Wirtz (wide-left · injury-hit debut season)
      CAM: 13,  // Mac Allister (No. 10 · World Cup runner-up · back in the spine)
      RAM: 22,  // Gakpo (staying, expected to start; the post-Salah slot until a winger signs)
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
    // Hypothetical 3-4-3 alternative, a shape rarely used in 2025-26.
    // Shown for completeness alongside the season-closing baseline. Refreshed
    // Sat Aug 22: Joe Gomez, out for the opener and racing for Forest on Aug 29,
    // so the academy's Ndukwe steps into the left of a bare back three alongside
    // VVD and Jacquet; Kerkez and Frimpong as wing-backs, Gravenberch and Mac
    // Allister in midfield, a Gakpo-Isak-Wirtz front three (Jones sold to Inter,
    // Ngumoha to the bench). Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LCB: 12,  // Ndukwe (academy cover · Gomez out for weeks; VVD anchors the middle of the three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (unveiled Jul 1 · right of the back three)
      LWB: 7,   // Kerkez (LWB with Robertson gone to Spurs)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 9,   // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LW: 22,   // Gakpo (LW in the three-man attack · staying and expected to start)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 18,   // Wirtz (right of the front three · Ngumoha to the bench)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-08-26 (evening pass)
// (Sat Aug 22: pre-season over, next up is Nottingham Forest at home on Sat Aug 29 (Newcastle away drawn 2-2 on Aug 23), Iraola's
// first competitive match. Salah is a Trabzonspor player; Curtis Jones' €35m move to Inter is confirmed and
// he has left the squad; Liverpool no longer expect to sell Gakpo, now in line to start;
// the Barcola deal is agreed with PSG (medical next, unsigned); Minteh collapsed Aug 26 (£80m ask, LFC out);
// Frimpong the lone fit senior RB, Araujo's loan covering; Gomez out for the opener (Forest Aug 29);
// Leoni closing on a September return from his ACL; Ekitike (on a cane) and Bradley play no part.)
export const PLAYER_EVIDENCE = {
  1:  "Started the 2-2 at Newcastle · No. 1",     // Alisson
  2: "No. 2 · season loan shopped to Serie A",          // Mamardashvili
  3:  "Captain · led the draw at Newcastle",      // Van Dijk
  5: "Trained but not cleared · doubt vs Forest",  // Gomez
  7:  "Started at Newcastle · first-pick LB",     // Kerkez
  8:  "Knee · missed opener, rehab only",         // Bradley
  9:  "Lone fit senior RB · Araujo spells him",   // Frimpong
  10: "ACL · nearing training, Sept eyed",        // Leoni
  11: "CB cover · Araujo (loan) also in the mix", // Jacquet
  12: "Starred vs Monaco · barred until Jan",     // Ndukwe
  13: "WC finalist · central, City link dead",    // Mac Allister
  14: "The fixed point at the base",              // Gravenberch
  15: "Scored the 99th-min penalty at Newcastle", // Szoboszlai
  17: "Available and pushed toward a PL exit",        // Endo
  18: "The No. 10 · started the opener",          // Wirtz
  19: "Celta Vigo return closing · terms near",   // Bajcetic
  20: "Impressed on tour · Iraola audition",      // Nyoni
  22: "Scored at Newcastle · Spurs + City circling",        // Gakpo
  23: "Hostile return, no goal at St James'",     // Isak
  24: "Achilles · 'still way off,' months out",   // Ekitike
  25: "18 on Saturday · new 5-year deal to follow",     // Ngumoha
  26: "Light training only · doubt vs Forest",   // Chiesa
  27: "New deal · 3rd-choice GK",                 // Woodman
  28: "Won the late penalty as a sub",            // Munoz
};

// Default formation when entering the view: the 4-2-3-1 Slot favoured through
// the run-in, shown as the first-choice XI Liverpool finished the 2025-26
// season with, now pointed at Nottingham Forest at home on Sat Aug 29 (Newcastle away drawn 2-2 on Aug 23). It is a squad baseline, adjusted for team news.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. With the season over these read as confidence that the slot's
// occupant remains a first-choice starter into 2026-27 — LOW where the player
// has left (Salah, Robertson, Konate) or whose future is open (Mac Allister).
// (Refreshed Sat Aug 22: pre-season over (Como beaten 2-0 on Aug 16), next up Nottingham Forest at home on Aug 29 (Newcastle away drawn 2-2 on Aug 23). Curtis Jones' €35m sale to Inter is confirmed and he leaves the squad;
// Liverpool no longer expect to sell Gakpo, now in line to start with Ngumoha to the bench; the
// Barcola deal agreed with PSG (medical next, unsigned); Minteh collapsed Aug 26 (£80m ask, LFC out);
// Araujo in on loan and bowed vs Como; Munoz debuted vs Monaco; Frimpong the lone fit senior RB.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · eased back, first minutes vs Monaco Aug 9
  RCB: "Medium", // Konate gone free to Madrid · Araujo in on loan and bowed vs Como, Jacquet fit again and scored vs Como
  RB:  "Low",    // Frimpong the only recognised RB · Bradley weeks out, rehab only · Jones sold to Inter
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "Medium", // Wirtz · injury-hit debut season · No. 10 role, scored vs Monaco
  CAM: "Medium", // Mac Allister · World Cup runner-up · back training after the tour, City link dead, central again
  RAM: "Medium", // Salah gone (Trabzonspor) · Gakpo scored at Newcastle and holds the right until a senior winger signs
  ST:  "Medium", // Isak · injury-wrecked debut year · blank on his hostile Newcastle return, seeks first goal vs Forest
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run.
export const SLOT_RATIONALE = {
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Fri Jul 10 — a fresh voice for the defence: John Barnes has urged Liverpool to extend Van Dijk beyond his 2027 deal even at 35, as the AC Milan interest driven by Ibrahimović, Fenerbahce lurking, keeps being knocked back at Anfield, no bid received and none expected to move him. The captain is central to Iraola's plans and the slot a thinning back line is being rebuilt around, Jacquet, cleared by his surgeon to rejoin group training, the in-house cover behind him.",
  RCB: "Sun Aug 16 — the slot has cover, and its returnee is fit and scoring. Ronald Araujo took his Anfield bow in the 2-0 win over Como, and Jeremy Jacquet, back from a shoulder problem, marked his return to the same game with a goal, easing a centre-back file that Konate's free exit and injuries had cut to Van Dijk alone against Monaco. Araujo can fill right-back too. With the emergency met and a fit senior partner beside Van Dijk through the Newcastle draw, a permanent centre-back (Milan's Tomori the value route) slides to a longer-term want rather than a must-have.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Sat Jul 18 — settled, and expensively so. Szoboszlai has signed a new five-year contract running to 2031, three years on from arriving from Leipzig on a deal that ran only to 2028, with reported terms in the £200,000-£250,000 band. He was voted supporters' player of the season after a campaign spent filling in at right-back, at the eight and on the right wing. With Salah, Konate and Robertson all gone for nothing, this is the club choosing to keep rather than to replace.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Sun Aug 16 — back in the fold, and central to it. Mac Allister missed the American tour in its entirety after the World Cup final at MetLife, where Argentina lost in extra time reduced to ten after Enzo Fernandez's 93rd-minute red and Ferran Torres finished it on 106, but he is now training again and started the Newcastle draw in Iraola's spine. Iraola has resisted the summer's Madrid whispers and a fleeting City shortlist, keeping him rather than banking him as sell-to-buy fuel. A club season in which he was among the most criticised at Anfield was rewritten by five weeks in America; this slot is a selection again, not a placeholder.",
  RAM: "Wed Aug 26 (evening) — the slot that defined the summer, and the summer keeps failing it. Liverpool withdrew from Minteh at Brighton's £80m, were refused within hours over Palace's Sarr, and by nightfall were enquiring at Lille about Fernandez-Pardo, leaving the agreed-but-unsigned Barcola deal as the only wide business anywhere near completion. Which means Gakpo owns the right, having dragged Liverpool level at Newcastle in the 55th, even as Tottenham move a step closer and Manchester City join in behind them. Rio Ngumoha, 18 on Saturday, is the rotation option and may need to be more than that.",
  RB:  "Wed Aug 26 (evening) — a one-man department, and its reinforcement is still not cleared. Jeremie Frimpong started the 2-2 at Newcastle as the only fit recognised right-back and holds the flank for Saturday: Conor Bradley is still short after January knee surgery, while Joe Gomez has trained with the group without being passed fit, some Forest previews still listing him among the unavailable. Ronald Araujo, in on loan with a competitive debut behind him, spells the position as the in-game cover. Curtis Jones, last season's emergency option there, is an Inter player now, and Calvin Ramsay has gone to St Mirren on loan. Frimpong plays by elimination, and plays on.",
  ST:  "Wed Aug 26 — Alexander Isak walked back into St James' in red and found the loudest, coldest welcome of the weekend, no goal, a difficult afternoon, and the late penalty handed to Szoboszlai rather than him. Lined up again with Wirtz and Gravenberch behind him, the £100m striker's injury-wrecked debut year still shadows a front line yet to settle. A first goal at Anfield against Forest on Saturday, his first for Liverpool at home, is the reset the whole attack, and the striker himself, most needs.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · led the goalkeeping group on the tour with Alisson on a post-World Cup break; Alisson back for the Anfield friendlies" }, { playerId: 27, reason: "Woodman · third-choice cover, trained day one" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the first-choice left-back going forward now Robertson has left" }],
  LCB: [{ playerId: 5, reason: "Gomez · can shuffle infield to centre-back if his muscle injury clears" }],
  RCB: [{ playerId: 11, reason: "Jacquet · returned and scored vs Como, fit again after shoulder caution; Araujo (loan) also covers here" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the only fit recognised right-back; Bradley travelled for rehabilitation only and took no part in the tour" }, { playerId: 5, reason: "Gomez · emergency right-back cover once his muscle injury clears; Araujo (loan) the in-game cover for now" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · can switch to the left · staying and expected to start" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · signed to 2031, named vice-captain, can push into the No. 10 with another midfielder in the pivot" }, { playerId: 20, reason: "Nyoni · impressed on tour, one of the young players Iraola singled out" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · rotation option now Gakpo starts on the right" }, { playerId: 26, reason: "Chiesa · a fitness doubt for Forest, and among the exits Iraola may sanction" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "High",
  reason: "Wed Aug 26 (evening) — the XI below points at Nottingham Forest at home on Saturday, August 29, a 12.30pm kick-off and Iraola's first competitive match at Anfield, and confidence stays high because there is a competitive team sheet to read: ten of the eleven shown here started the 2-2 at Newcastle, Szoboszlai rescuing a debut point from a stoppage-time penalty and Gakpo taking the equaliser. Expect continuity. The defence stays thin: Gomez has trained with the group but is not cleared, some previews still listing him unavailable, while Leoni (ACL, eyeing September), Bradley (knee), Ekitike (Achilles) and Jaros are definitively out, so Frimpong holds the right with Araujo's loan the in-game cover and Jacquet beside Van Dijk. Chiesa returned to light work and remains a doubt. Isak leads the line seeking a first Liverpool goal at Anfield after a hostile, blank afternoon on Tyneside. On the ledger the wing rebuild went backwards on Wednesday: Liverpool withdrew from Minteh at Brighton's £80m, saw a £50m approach for Sarr rejected within hours, and ended the day enquiring at Lille, leaving the agreed-but-unsigned Barcola deal as the only wide business live. Bajcetic is closing on a Celta Vigo return. Araujo, a loan arrival, is not yet in the PLAYERS-keyed XI, so Jacquet fills RCB in the graphic. Next up: Nottingham Forest at home, August 29, 12.30pm."
};
