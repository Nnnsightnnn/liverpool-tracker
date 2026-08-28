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
    // 4-2-3-1 below. Refreshed Thu Aug 27: season underway (Newcastle away drawn 2-2 on Aug 23);
    // next up is Nottingham Forest at home on Sat Aug 29, 12.30pm, Iraola's first
    // competitive HOME match. Mac Allister back in the spine; Ekitike (Achilles, out
    // until December), Leoni (ACL) and Bradley (knee) take no part; Gomez ruled out
    // for the opener with a muscle injury Iraola set at ~a month, leaving Frimpong the
    // only fit recognised right back with Araujo's loan covering; Jacquet fit again.
    // Curtis Jones' €35m sale to Inter is confirmed so he leaves the squad. Gakpo starts
    // on the right: his exit stopped being a certainty on Thursday evening (Iraola would
    // guarantee nothing, the club will not sell without a replacement). On the ledger,
    // Romano's here we go landed on Barcola (agreement in principle, reported £120m, still
    // UNSIGNED) and the Minteh route reopened with Brighton pricing above £70m.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 at Newcastle · No. 1)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (back and fit · Araujo loan covers CB/RB)
      RB: 9,    // Frimpong (only fit recognised RB · Bradley on rehab, Gomez out ~a month)
      LCM: 13,  // Mac Allister (midfield three)
      CM: 14,   // Gravenberch (control of midfield · most reliable MID)
      RCM: 15,  // Szoboszlai (engine · 48 apps)
      LW: 18,   // Wirtz (front-line option)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 22,   // Gakpo (sale no longer certain; starts until a winger actually signs)
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
    // The default shape, the 4-2-3-1 Iraola opened the season with, pointed at the
    // coming fixture: Nottingham Forest at home on Sat Aug 29, 12.30pm (Newcastle
    // away drawn 2-2 on Aug 23). Refreshed Thu Aug 27: Mac Allister in the spine;
    // Ekitike (Achilles, out to December) and Bradley (knee) take no part, Gomez ruled
    // out ~a month with a muscle injury, Leoni closing on a September ACL return;
    // Jacquet fit again. Curtis Jones' €35m sale to Inter is confirmed so he leaves the
    // squad. Gakpo is still in line to start, his sale no longer a certainty; the Barcola
    // agreement in principle followed Romano's here we go but remains unsigned.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 at Newcastle · No. 1)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (steps in for Madrid-bound Konaté · Araujo loan also covers)
      RB: 9,    // Frimpong (only fit recognised RB · Gomez out ~a month, Bradley rehab)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (the season's heaviest-minutes midfielder)
      LAM: 18,  // Wirtz (wide-left · injury-hit debut season)
      CAM: 13,  // Mac Allister (No. 10 · World Cup runner-up · back in the spine)
      RAM: 22,  // Gakpo (starts on the right; Iraola would not guarantee he stays or goes)
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
    // Hypothetical 3-4-3 alternative, a shape rarely used, shown for completeness.
    // Refreshed Thu Aug 27: the back three is genuinely bare. Ndukwe is barred by a
    // post-Brexit work permit until at least January; Gomez is ruled out ~a month with
    // a muscle injury; Araujo (loan) is not PLAYERS-keyed. That leaves Van Dijk and
    // Jacquet as the only natural centre-backs, so Wataru Endo, fit and a familiar
    // emergency centre-half, fills the left of the three. Kerkez and Frimpong as
    // wing-backs, Gravenberch and Mac Allister in midfield, a Gakpo-Isak-Wirtz front
    // three (Jones sold to Inter, Ngumoha to the bench). The thinnest of the three
    // shapes. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 at Newcastle · No. 1)
      LCB: 17,  // Endo (makeshift third CB: Gomez out ~a month, Ndukwe work-permit barred, Araujo not PLAYERS-keyed)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (right of the back three · Araujo loan also covers)
      LWB: 7,   // Kerkez (LWB with Robertson gone to Spurs)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 9,   // Frimpong (only fit recognised RB · Bradley on rehab)
      LW: 22,   // Gakpo (LW in the three-man attack · starts until a winger signs)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 18,   // Wirtz (right of the front three · Ngumoha to the bench)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of Thu Aug 27 (evening).
// (Next up is Nottingham Forest at home on Sat Aug 29, 12.30pm; Newcastle away
// drawn 2-2 on Aug 23. Salah is a Trabzonspor player; Curtis Jones' €35m move to
// Inter is confirmed and he has left the squad. Romano's here we go landed on
// Barcola on Thursday afternoon (agreement in principle, reported £120m, still
// UNSIGNED); the Minteh route reopened with Brighton above £70m and a third bid
// weighed; Gakpo is no longer a certain sale (Iraola: "cannot guarantee
// anything") and starts until a winger actually signs.
// Frimpong the lone fit senior RB, Araujo's loan covering; Gomez out ~a month with
// a muscle injury; Leoni closing on a September ACL return; Ekitike (Achilles, to
// December) and Bradley (knee) play no part.)
export const PLAYER_EVIDENCE = {
  1:  "Started the 2-2 at Newcastle · No. 1",       // Alisson
  2: "No. 2 · Besiktas lodge a €2m loan bid",       // Mamardashvili
  3:  "Captain · led the draw at Newcastle",         // Van Dijk
  5: "Muscle injury · out ~a month, misses Forest",  // Gomez
  7:  "Started at Newcastle · first-pick LB",        // Kerkez
  8:  "Knee · missed opener, rehab only",            // Bradley
  9:  "Lone fit senior RB · Araujo spells him",      // Frimpong
  10: "ACL · nearing training, Sept eyed",           // Leoni
  11: "CB cover · Araujo (loan) also in the mix",    // Jacquet
  12: "Starred vs Monaco · barred until Jan",        // Ndukwe
  13: "WC finalist · central, City link dead",       // Mac Allister
  14: "The fixed point at the base",                 // Gravenberch
  15: "Scored the 99th-min penalty at Newcastle",    // Szoboszlai
  17: "Fit · makeshift 3rd CB, PL exit mooted",      // Endo
  18: "The No. 10 · started the opener",             // Wirtz
  19: "Celta Vigo homecoming · done bar signature",  // Bajcetic
  20: "Impressed on tour · Iraola audition",         // Nyoni
  22: "Scored at Newcastle · sale no longer certain", // Gakpo
  23: "Hostile return, no goal at St James'",        // Isak
  24: "Achilles · out until December",               // Ekitike
  25: "Turns 18 on matchday · deal to follow",      // Ngumoha
  26: "Touch and go · presser passed, no update",   // Chiesa
  27: "New deal · 3rd-choice GK",                    // Woodman
  28: "Won the late penalty as a sub",               // Munoz
};

// Default formation when entering the view: the 4-2-3-1 Iraola opened the season
// with, now pointed at Nottingham Forest at home on Sat Aug 29 (Newcastle away
// drawn 2-2 on Aug 23). A squad baseline, adjusted for team news.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. One match into the season these read as confidence that the slot's
// occupant remains a first-choice starter into 2026-27 — LOW where the player
// has left (Salah, Robertson, Konate) or whose future is open.
// (Refreshed Thu Aug 27, evening: season underway (Newcastle away drawn 2-2 on
// Aug 23), next up Nottingham Forest at home on Aug 29, 12.30pm. Jones' €35m sale
// to Inter confirmed; Barcola agreed in principle after Romano's here we go but
// UNSIGNED; Minteh reopened above £70m; Gakpo's exit no longer certain and he is
// in line to start; Araujo in on loan; Frimpong the lone fit senior RB with Gomez
// out around a month.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · eased back, first minutes vs Monaco Aug 9
  RCB: "Medium", // Konate gone free to Madrid · Araujo in on loan and bowed vs Como, Jacquet fit again
  RB:  "Low",    // Frimpong the only fit recognised RB · Gomez out ~a month, Bradley weeks out · Jones sold to Inter
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "Medium", // Wirtz · injury-hit debut season · No. 10 role, scored vs Monaco
  CAM: "Medium", // Mac Allister · World Cup runner-up · back training after the tour, City link dead, central again
  RAM: "Medium", // Salah gone (Trabzonspor) · Gakpo holds the right until a senior winger actually signs
  ST:  "Medium", // Isak · injury-wrecked debut year · blank on his hostile Newcastle return, seeks first goal vs Forest
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run.
export const SLOT_RATIONALE = {
  LB:  "Thu Aug 27 — his, and only his. Robertson left for Tottenham on a free, taking nine years of cover with him, and Kerkez started the 2-2 at Newcastle as the unambiguous first choice after a difficult debut year at £45m. There is no senior left-back behind him and, with the window shutting on Tuesday and the recruitment aimed entirely at the right flank, there will not be one.",
  LCB: "Fri Jul 10 — a fresh voice for the defence: John Barnes has urged Liverpool to extend Van Dijk beyond his 2027 deal even at 35, as the AC Milan interest driven by Ibrahimović, Fenerbahce lurking, keeps being knocked back at Anfield, no bid received and none expected to move him. The captain is central to Iraola's plans and the slot a thinning back line is being rebuilt around, Jacquet, cleared by his surgeon to rejoin group training, the in-house cover behind him.",
  RCB: "Sun Aug 16 — the slot has cover, and its returnee is fit and scoring. Ronald Araujo took his Anfield bow in the 2-0 win over Como, and Jeremy Jacquet, back from a shoulder problem, marked his return to the same game with a goal, easing a centre-back file that Konate's free exit and injuries had cut to Van Dijk alone against Monaco. Araujo can fill right-back too. With the emergency met and a fit senior partner beside Van Dijk through the Newcastle draw, a permanent centre-back (Milan's Tomori the value route) slides to a longer-term want rather than a must-have.",
  LDM: "Thu Aug 27 — the one settled thing in the middle. Gravenberch was Liverpool's most consistent midfielder across a turbulent 2025-26 and started the 2-2 at Newcastle at the base of Iraola's shape. With the club stating this week that no midfielder is on the agenda before Tuesday's deadline, and Alex Scott priced at a reported £90m, this slot is his by design as much as by form.",
  RDM: "Sat Jul 18 — settled, and expensively so. Szoboszlai has signed a new five-year contract running to 2031, three years on from arriving from Leipzig on a deal that ran only to 2028, with reported terms in the £200,000-£250,000 band. He was voted supporters' player of the season after a campaign spent filling in at right-back, at the eight and on the right wing. With Salah, Konate and Robertson all gone for nothing, this is the club choosing to keep rather than to replace.",
  LAM: "Thu Aug 27 — a second season, and finally a settled position. Wirtz shared barely 117 minutes with Isak and Ekitike across an injury-disrupted first year at £115m, but he was the best player on the pitch against Monaco, ran the attacks through him, and starts behind the striker in Iraola's shape. With the wide market finally moving (Barcola agreed in principle, Minteh reopened), the creative burden he has carried alone may soon be shared.",
  CAM: "Sun Aug 16 — back in the fold, and central to it. Mac Allister missed the American tour in its entirety after the World Cup final at MetLife, where Argentina lost in extra time reduced to ten after Enzo Fernandez's 93rd-minute red and Ferran Torres finished it on 106, but he is now training again and started the Newcastle draw in Iraola's spine. Iraola has resisted the summer's Madrid whispers and a fleeting City shortlist, keeping him rather than banking him as sell-to-buy fuel. A club season in which he was among the most criticised at Anfield was rewritten by five weeks in America; this slot is a selection again, not a placeholder.",
  RAM: "Thu Aug 27 (evening) — the slot that defined the summer finally has an answer in principle. Fabrizio Romano posted the here we go on Bradley Barcola in the afternoon, an agreement reported at £120m with more than £100m guaranteed, though the paperwork, medical and signature all remain to come, so the position still has no senior owner on the books. Behind it Brighton reopened the Minteh lane by pricing him above £70m rather than £80m, and Liverpool are weighing a third bid for a winger they would take alongside Barcola. Until someone actually signs, Gakpo holds the right, having dragged Liverpool level at Newcastle in the 55th, and his own exit is no longer certain: Iraola would not guarantee he stays, but the club will not sell without a replacement. Rio Ngumoha, the rotation option, turns eighteen on matchday.",
  RB:  "Thu Aug 27 — a one-man department, and its cover is now a month away. Jeremie Frimpong started the 2-2 at Newcastle as the only fit recognised right-back and holds the flank for Saturday: Conor Bradley is still short after January knee surgery, while Joe Gomez, hurt inside minutes at Sunderland, is ruled out roughly a month with a muscle injury Iraola will not risk for the opener. Ronald Araujo, in on loan with a competitive debut behind him, spells the position as the in-game cover. Curtis Jones, last season's emergency option there, is an Inter player now, and Calvin Ramsay has gone to St Mirren on loan. Frimpong plays by elimination, and plays on.",
  ST:  "Thu Aug 27 — Alexander Isak walked back into St James' in red and found the loudest, coldest welcome of the weekend, no goal, a difficult afternoon, and the late penalty handed to Szoboszlai rather than him. Lined up again with Wirtz and Gravenberch behind him, the £100m striker's injury-wrecked debut year still shadows a front line yet to settle. A first goal at Anfield against Forest on Saturday, his first for Liverpool at home, is the reset the whole attack, and the striker himself, most needs.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · led the goalkeeping group on the tour with Alisson on a post-World Cup break; Alisson back for the Anfield friendlies" }, { playerId: 27, reason: "Woodman · third-choice cover, trained day one" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the first-choice left-back going forward now Robertson has left" }],
  LCB: [{ playerId: 11, reason: "Jacquet · the in-house senior cover beside Van Dijk with Gomez out ~a month; Araujo (loan) can also fill in" }],
  RCB: [{ playerId: 11, reason: "Jacquet · returned and scored vs Como, fit again after shoulder caution; Araujo (loan) also covers here" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the only fit recognised right-back; Bradley travelled for rehabilitation only" }, { playerId: 11, reason: "Jacquet · Araujo (loan) is the in-game right-back cover with Gomez ruled out ~a month" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · can switch to the left · starts until a winger signs" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · signed to 2031, named vice-captain, can push into the No. 10 with another midfielder in the pivot" }, { playerId: 20, reason: "Nyoni · impressed on tour, one of the young players Iraola singled out" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · rotation option while Gakpo starts on the right" }, { playerId: 26, reason: "Chiesa · touch and go for Forest, and among the exits Iraola may sanction" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "High",
  reason: "Thu Aug 27 (evening) — the XI below points at Nottingham Forest at home on Saturday, August 29, a 12.30pm kick-off and Iraola's first competitive match at Anfield, and confidence stays high because there is a competitive team sheet to read: ten of the eleven shown here started the 2-2 at Newcastle, Szoboszlai rescuing a debut point from a stoppage-time penalty and Gakpo taking the equaliser. Expect continuity. The defence stays thin: Iraola set Gomez's muscle problem at around a month, while Leoni (ACL, eyeing September), Bradley (knee), Ekitike (Achilles, out to December) and Jaros are definitively out, so Van Dijk and Jacquet are the fit senior centre-backs, Araujo's loan is the in-game cover and Frimpong holds the right alone. Chiesa stayed touch and go, with no update offered at Thursday's briefing. Isak leads the line seeking a first Liverpool goal at Anfield after a hostile, blank afternoon on Tyneside. The ledger moved late on Thursday: Romano's here we go landed on Barcola, an agreement in principle reported at £120m with the medical and signature still to come, the Minteh route reopened with Brighton pricing above £70m and a third bid weighed, and Gakpo stopped being a certain sale, Iraola saying he cannot guarantee anything while the club refuse to sell without a replacement. So Gakpo starts. Bajcetic is done bar the signature on a Celta Vigo return. Araujo, a loan arrival, is not yet PLAYERS-keyed, so Jacquet fills RCB in the graphic. Next up: Nottingham Forest at home, August 29, 12.30pm."
};
