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
    // 4-2-3-1 below. Refreshed Sat Aug 29 (matchday): Nottingham Forest at home,
    // 12.30pm, Iraola's first competitive HOME match (Newcastle away drawn 2-2 on
    // Aug 23). Ngumoha, eighteen today, is handed a start and Mac Allister drops to
    // the bench in the sourced previews; Ekitike (Achilles, to December), Leoni (ACL)
    // and Bradley (knee, eyeing November) take no part; Gomez out ~a month with a
    // muscle injury, leaving Frimpong the only fit recognised right back with Araujo's
    // loan covering; Jacquet fit. Curtis Jones sold to Inter. Gakpo starts wide, his
    // exit cooled (the club will not sell without a replacement). On the ledger,
    // Barcola is on a medical table completing a £123m move (£106m + £17m add-ons) and
    // will not feature; the midfield is a late scramble around Camara and Kone.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 at Newcastle · No. 1)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (back and fit · Araujo loan covers CB/RB)
      RB: 9,    // Frimpong (only fit recognised RB · Bradley on rehab, Gomez out ~a month)
      LCM: 18,  // Wirtz (advanced eight · the No. 10 in the default shape)
      CM: 14,   // Gravenberch (control of midfield · most reliable MID)
      RCM: 15,  // Szoboszlai (engine · vice-captain)
      LW: 25,   // Ngumoha (18 today · handed a birthday start)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 22,   // Gakpo (starts wide; sale cooled, Iraola hopes he stays)
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
    // away drawn 2-2 on Aug 23). Refreshed Sat Aug 29 (matchday): the sourced previews
    // (Sports Mole, FotMob, This Is Anfield) put Gravenberch and Szoboszlai in the pivot
    // and Rio Ngumoha, eighteen today, in the front three on the flank, with Wirtz
    // central and Gakpo the other wide man, pushing Mac Allister to the bench. Ekitike
    // (Achilles, to December) and Bradley (knee) take no part, Gomez out ~a month with a
    // muscle injury, Leoni on ACL rehab; Jacquet fit. Jones sold to Inter. Barcola is on
    // a medical table completing his £123m move and will not feature.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 at Newcastle · No. 1)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (steps in for Madrid-bound Konaté · Araujo loan also covers)
      RB: 9,    // Frimpong (only fit recognised RB · Gomez out ~a month, Bradley rehab)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (double-pivot · the season's heaviest-minutes midfielder)
      LAM: 25,  // Ngumoha (18 today · handed a birthday start on the flank)
      CAM: 18,  // Wirtz (the No. 10 · best position, ran the attacks vs Monaco)
      RAM: 22,  // Gakpo (starts wide right; his sale cooled, Iraola hopes he stays)
      ST: 23,   // Isak (No. 9 · seeks a first Liverpool goal at Anfield)
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
    // Refreshed Sat Aug 29 (matchday): the back three is genuinely bare. Ndukwe is barred by a
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
// Hand-curated from RESULTS array + injuryNote context as of Sat Aug 29 (matchday).
// (Next up is Nottingham Forest at home today, 12.30pm; Newcastle away drawn 2-2
// on Aug 23. Salah is a Trabzonspor player; Curtis Jones' €35m move to Inter is
// confirmed and he has left the squad. Barcola is on a medical table completing a
// £123m move (£106m + £17m add-ons) and will not feature; the midfield is a late
// scramble around Camara and Kone. Ngumoha, 18 today, is handed a start and Mac
// Allister drops to the bench in the sourced previews; Gakpo starts wide, his exit
// cooled (the club will not sell without a replacement).
// Frimpong the lone fit senior RB, Araujo's loan covering; Gomez out ~a month with
// a muscle injury; Leoni closing on a September ACL return; Ekitike (Achilles, to
// December) and Bradley (knee) play no part.)
export const PLAYER_EVIDENCE = {
  1:  "No. 1 · in goal for the home opener",         // Alisson
  2: "No. 2 · Besiktas lodge a €2m loan bid",       // Mamardashvili
  3:  "Captain · anchors a thinned back line",       // Van Dijk
  5: "Muscle injury · out ~a month, misses Forest",  // Gomez
  7:  "First-pick LB · started the Newcastle draw",  // Kerkez
  8:  "Knee · rehab only, eyeing November",          // Bradley
  9:  "Lone fit senior RB · Araujo spells him",      // Frimpong
  10: "ACL rehab · long road back",                  // Leoni
  11: "Fit senior CB beside Van Dijk",               // Jacquet
  12: "Starred vs Monaco · barred until Jan",        // Ndukwe
  13: "WC finalist · may drop to the bench",         // Mac Allister
  14: "Double-pivot · the fixed point",              // Gravenberch
  15: "Vice-captain · pivot beside Gravenberch",     // Szoboszlai
  17: "Fit · makeshift CB cover, exit mooted",       // Endo
  18: "The No. 10 · central in the shape",           // Wirtz
  19: "Celta Vigo return · closing on terms",  // Bajcetic
  20: "Academy depth · impressed on tour",           // Nyoni
  22: "Starts wide · sale cooled",                // Gakpo
  23: "Leads the line · seeks a first LFC goal",       // Isak
  24: "Achilles · out until December",               // Ekitike
  25: "Eighteen today · handed a birthday start",    // Ngumoha
  26: "Doubt for the home opener",   // Chiesa
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
// (Refreshed Sat Aug 29 (matchday): Nottingham Forest at home today, 12.30pm
// (Newcastle away drawn 2-2 on Aug 23). Jones' €35m sale to Inter confirmed;
// Barcola on a medical table completing a £123m move, not in today's squad; Gakpo
// starts wide, his exit cooled; Ngumoha, 18 today, handed a start with Mac Allister
// to the bench; Araujo in on loan; Frimpong the lone fit senior RB with Gomez out
// around a month.)
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
  LAM: "Sat Aug 29 — a birthday, and a start. Rio Ngumoha turns eighteen on the day Forest visit, and the sourced previews hand the academy graduate a place on the flank rather than the bench he took at Newcastle. This Is Anfield report a new five-year deal waiting behind the birthday, delayed only by the rule that caps under-eighteens at three years. With Salah gone, the front line unsettled and Barcola arriving only as competition, the teenager is a pick now, not a promise for later.",
  CAM: "Sat Aug 29 — the No. 10, in his best position. Wirtz shared barely 117 minutes with Isak and Ekitike across an injury-hit first year at £115m, but he was the best player on the pitch against Monaco and starts centrally behind the striker in Iraola's shape. With Mac Allister pushed to the bench in the predicted side, the creative burden runs through the German again, exactly where the manager wants him.",
  RAM: "Sat Aug 29 — the winger who almost left, starting instead. Gakpo holds the right for the home opener, his exit cooled from the certain sale of a week ago with no wide reinforcement arriving beyond Barcola, who is on a medical table for a £123m move and will not feature today. He took the equaliser at Newcastle and is contracted to 2030. Manchester City and Tottenham keep an interest, but Liverpool will not sell without a replacement, and none has come.",
  RB:  "Sat Aug 29 — a one-man department, its cover a month away. Jeremie Frimpong started the 2-2 at Newcastle as the only fit recognised right-back and holds the flank today: Conor Bradley is still short after January knee surgery and now eyed for a November return, while Joe Gomez, hurt inside minutes at Sunderland, is out around a month with a muscle injury Iraola will not risk for the opener. Ronald Araujo, in on loan with a competitive debut behind him, is the in-game cover. Curtis Jones is an Inter player now, and Calvin Ramsay has gone to St Mirren on loan. Frimpong plays by elimination, and plays on.",
  ST:  "Sat Aug 29 — a first home crowd, and a first goal still owed. Alexander Isak found the coldest welcome of the opening weekend at St James', no goal, a hard afternoon, and the late penalty handed to Szoboszlai rather than him. Lined up again behind Wirtz, the £125m striker's injury-wrecked debut year still shadows a front line yet to settle, and by Tuesday his club-record fee will be joined at the top by Barcola's £123m. A first goal at Anfield against Forest, his first for Liverpool at home, is the reset the whole attack most needs.",
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
  CAM: [{ playerId: 13, reason: "Mac Allister · World Cup finalist pushed to the bench in the sourced XI, first in line to reclaim the No. 10" }, { playerId: 15, reason: "Szoboszlai · vice-captain, can push into the No. 10 with another midfielder in the pivot" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · rotation option while Gakpo starts on the right" }, { playerId: 26, reason: "Chiesa · touch and go for Forest, and among the exits Iraola may sanction" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "Sat Aug 29 (matchday) — the XI below points at Nottingham Forest at home today, a 12.30pm kick-off and Iraola's first competitive match at Anfield. Confidence eases to medium because the spine is settled but the front three is a call: the sourced previews put Gravenberch and Szoboszlai in the pivot and, on his eighteenth birthday, hand Rio Ngumoha a start on the flank with Wirtz central and Gakpo the other wide man, which would push Mac Allister to the bench for a home opener he could yet reclaim. The defence is not a call, only thin: Gomez's muscle injury is set at around a month, and Leoni (ACL), Bradley (knee) and Ekitike (Achilles, to December) are out, so Van Dijk and Jacquet are the fit senior centre-backs, Araujo's loan the in-game cover, Frimpong alone at right-back. Chiesa remains a doubt. Isak leads the line seeking a first Liverpool goal at Anfield after a blank, hostile afternoon on Tyneside. Off the pitch the lead is Barcola, on a medical table completing a £123m move that will not put him in the squad today, with a debut earmarked for Ipswich next Friday; behind him the right flank stays open and the midfield has become a late scramble around Camara and Kone after Jones left for Inter. Araujo, a loan arrival, is not yet PLAYERS-keyed, so Jacquet fills RCB in the graphic. Next up: Nottingham Forest at home, today, 12.30pm."
};
