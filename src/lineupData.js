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
    // 4-2-3-1 below. Reviewed Tue Sep 15 (MATCHDAY, ~4am ET), the morning of Tottenham's
    // visit to Anfield in the Carabao Cup third round, 8pm, Andrew Madley refereeing.
    // NO VAR in this round and no extra time: level after ninety goes straight to penalties.
    // Rebuilt on the overnight consensus (This Is Anfield, SI, Read Liverpool), which lands
    // close to the same heavily rotated eleven: Mamardashvili in goal (the only starter Iraola
    // confirmed), Frimpong at right-back, Araujo and Endo at centre-back, Mac Allister and Nyoni
    // screening, Lewis Koumas through the middle behind Cody Gakpo, Ngumoha and Munoz wide.
    // Tsimikas and Koumas are not in the tracker's 26, so this draws Kerkez and Gravenberch in
    // their places. Out: Ekitike (Achilles, January a hope), Bradley (knee, ~21 Nov), Leoni
    // (ACL, ~14 Oct target) and Chiesa (back, ~11 Oct target), the four Iraola named on Monday.
    defaultXI: {
      GK: 2,    // Mamardashvili (confirmed by Iraola: 'he's going to start tomorrow, yes')
      LB: 7,    // Kerkez (drawn for Tsimikas, who is not in the tracker squad)
      LCB: 29,  // Araujo (his natural position; drawn back into the middle for the cup)
      RCB: 17,  // Endo (a holding midfielder as the fourth centre-half)
      RB: 9,    // Frimpong (the reported right-back, Araujo shifting inside)
      LCM: 13,  // Mac Allister (the senior head the morning reads keep in the pivot)
      CM: 20,   // Nyoni (19 · the near-lock of the changed midfield)
      RCM: 14,  // Gravenberch (drawn as the advanced mid for Koumas, outside the 26)
      LW: 25,   // Ngumoha (left, per the morning previews)
      ST: 22,   // Gakpo (restored to lead the line after his adductor scare)
      RW: 28,   // Munoz (right, the most natural wide option per SI)
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
    // The default shape, the 4-2-3-1 Iraola has used in all five competitive games, now
    // pointed at Tottenham at Anfield in the Carabao Cup on Tuesday 15 September, 8pm
    // (Fulham drawn 0-0 at Anfield on Sep 12; Atletico beaten 2-1 on Sep 9; Ipswich beaten
    // 2-0 away on Sep 4; Forest drawn 2-2 on Aug 29; Newcastle drawn 2-2 away on Aug 23).
    // Reviewed Tue Sep 15 (MATCHDAY morning). Iraola confirmed exactly one starter,
    // Mamardashvili, and cleared Gomez to feature ('available for tomorrow'), leaving the rest
    // open. This XI follows the overnight consensus of eight-to-nine changes (This Is Anfield,
    // SI, Read Liverpool), with the two reported names outside the tracker's 26 (Tsimikas,
    // Koumas) replaced by the nearest valid picks (Kerkez, Gravenberch). Note the back line:
    // a converted right-back beside a 33-year-old holding midfielder, Gomez eased in from the
    // bench, and the 18-year-old Mor Talla Ndiaye floated as cover behind them.
    defaultXI: {
      GK: 2,    // Mamardashvili (the one name Iraola gave · first appearance of the season)
      LB: 7,    // Kerkez (Tsimikas is the reported pick but is not in the tracker squad)
      LCB: 29,  // Araujo (drawn back to his natural centre-back for the cup)
      RCB: 17,  // Endo (a holding midfielder as the fourth centre-half · first minutes of the season)
      RB: 9,    // Frimpong (the reported right-back, Araujo shifting inside)
      LDM: 13,  // Mac Allister (the senior head the morning reads keep in the pivot)
      RDM: 20,  // Nyoni (19 · the closest thing to a certainty outfield)
      LAM: 25,  // Ngumoha (left, per the morning previews)
      CAM: 14,  // Gravenberch (drawn at the ten for Koumas, outside the tracker squad)
      RAM: 28,  // Munoz (right · hit the bar against Fulham)
      ST: 22,   // Gakpo (restored to lead the line · Isak rested)
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
    // Reviewed Tue Sep 15 (MATCHDAY morning), the morning of Tottenham in the cup. A back three
    // uses the extra centre-half the flat four does not, so the returning Joe Gomez comes in
    // beside Araujo and the makeshift Endo, with Van Dijk and Jacquet rested in every preview.
    // Kerkez and Frimpong as wing-backs, Mac Allister and Nyoni in midfield, Gakpo, Munoz and
    // Ngumoha across the front, Mamardashvili in goal. Default is the 4-2-3-1 above.
    defaultXI: {
      GK: 2,    // Mamardashvili (confirmed starter)
      LCB: 5,   // Gomez (available · the extra centre-half a back three needs)
      CCB: 29,  // Araujo (a natural centre-back, central in a three)
      RCB: 17,  // Endo (makeshift centre-half, as in the reported flat back four)
      LWB: 7,   // Kerkez (the only senior left-back in the tracker squad)
      LCM: 13,  // Mac Allister (the midfielder every read keeps in)
      RCM: 20,  // Nyoni (19 · tipped to start the cup)
      RWB: 9,   // Frimpong (RWB · the reported right-back)
      LW: 25,   // Ngumoha (left, per the previews)
      ST: 22,   // Gakpo (restored to lead the line · Isak rested)
      RW: 28,   // Munoz (right, per the previews)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Tue Sep 15 (MATCHDAY morning),
// the morning of Tottenham at Anfield in the Carabao Cup, 8pm, no VAR and no extra time.
// Iraola confirmed Mamardashvili starts and Gomez is available; Bradley, Chiesa, Ekitike and
// Leoni were named as the four still out. Endo and Chiesa are not in the UCL squad; both are
// cup-eligible.
export const PLAYER_EVIDENCE = {
  1:  "Rested · night off, deputy in",          // Alisson
  2:  "Confirmed starter · first of season",     // Mamardashvili
  3:  "Rested in every matchday preview",        // Van Dijk
  5:  "Available · eased in, minutes managed",   // Gomez
  7:  "Drawn for Tsimikas, outside the 26",      // Kerkez
  8:  "Knee · named out · ~21 Nov",              // Bradley
  9:  "Starts at right-back · Araujo inside",    // Frimpong
  10: "ACL · named out · ~14 Oct target",        // Leoni
  11: "Rested · five starts in five",            // Jacquet
  12: "On loan at Levante for the season",       // Ndukwe
  13: "Kept in the pivot · the senior head",     // Mac Allister
  14: "Drawn at ten for Koumas · outside 26",    // Gravenberch
  15: "Rested · the pivot's tired half sits",    // Szoboszlai
  17: "Fourth centre-half · first minutes",      // Endo
  18: "Rested · the ten left to the academy",    // Wirtz
  20: "19 · the one near-lock outfield",         // Nyoni
  22: "Restored to lead the line · Isak rested", // Gakpo
  23: "Rested · first start missed all season",  // Isak
  24: "Achilles · named out · January hope",     // Ekitike
  25: "Starts left · the wing is his",           // Ngumoha
  26: "Back · named out · ~11 Oct target",       // Chiesa
  27: "Third keeper · bench at most",            // Woodman
  28: "Starts right · hit the bar Sat",          // Munoz
  29: "Drawn back to centre-back · £47m option", // Araujo
  30: "No pre-season · not for starting",        // Barcola
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in all five
// competitive games, now pointed at Tottenham at Anfield in the Carabao Cup on Tuesday
// 15 September, 8pm. The XI is a cup selection, drawn LOW, following the overnight consensus
// of eight-to-nine changes: Mamardashvili in goal, Araujo and Endo at centre-back, Frimpong
// and Kerkez the full-backs, Mac Allister and Nyoni the pivot, Koumas at the ten (drawn as
// Gravenberch) and Gakpo restored to lead the line with Isak rested.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS TONIGHT'S CUP TIE,
// which is a lower bar than the league: Iraola confirmed one name and left the rest open,
// and the previews, while broadly agreed, still disagree on individual slots.
// (Reviewed Tue Sep 15, matchday morning. Tottenham at Anfield, Carabao Cup third round,
// 8pm, Andrew Madley, no VAR, penalties if level.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Mamardashvili · confirmed by the manager at Monday's press conference
  LB:  "Low",    // Kerkez · Tsimikas is the reported pick but sits outside the tracker squad
  LCB: "Medium", // Araujo · the morning reads pair him with Endo rather than resting him
  RCB: "Low",    // Endo · a midfielder as fourth centre-half; Ndiaye and Gomez both possible
  RB:  "Medium", // Frimpong · the reported right-back with Araujo drawn inside
  LDM: "Medium", // Mac Allister · the senior body the morning reads keep in the pivot
  RDM: "Medium", // Nyoni · 19 · called the one near-certainty outfield
  LAM: "Medium", // Ngumoha · left in the reported front line
  CAM: "Low",    // Gravenberch drawn for Koumas, the reported ten, who is outside the 26
  RAM: "Medium", // Munoz · right in the reported front line
  ST:  "Medium", // Gakpo · restored to lead the line in the morning consensus
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Tue Sep 15
// (matchday morning): every rationale set against the overnight consensus XI rather than the
// previous evening's read.
export const SLOT_RATIONALE = {
  LB:  "Tue Sep 15, matchday - the one position the previews and the tracker cannot agree on. The morning reads expect Kostas Tsimikas to start, three days after he misplaced 11 of 31 passes against Fulham and was withdrawn at half-time; he is not in the tracker's 26, so Kerkez, the man who replaced him, is drawn instead. SI's verdict on the pair is that neither is currently up to Iraola's standard. Andy Robertson, nine years of this parish, is expected to line up on the other flank in white.",
  LCB: "Tue Sep 15, matchday - Araujo drawn back to his natural position. The overnight previews (This Is Anfield, SI) pair the Uruguayan with Endo at centre-back rather than resting him, three straight games at right-back behind him and a 55m-euro buy option now confirmed on his loan. Gomez, cleared to feature after seven weeks out, is eased in from the bench with his minutes managed; Van Dijk, rested in every read, is the fallback if the manager blinks.",
  RCB: "Tue Sep 15, matchday - a holding midfielder as the fourth centre-half, which is the depth chart stated in one slot. Endo has not played a minute this season and is drawn here because the morning consensus starts him beside Araujo, with Van Dijk and Jacquet rested. The same previews float an 18-year-old debut for Mor Talla Ndiaye behind them, and Gomez is the senior alternative if Iraola wants match experience rather than none.",
  RB:  "Tue Sep 15, matchday - Frimpong in, Araujo shifted inside, and both for the same reason. The Uruguayan has started three games in seven days at a position that is not his, and moving him to centre-back both rests the flank and uses him where he belongs. Frimpong was the better of Saturday's late changes, on for Araujo at 72, a 6 and a 6.9, and the morning reads make the cup his chance at ninety minutes.",
  LDM: "Tue Sep 15, matchday - the adult in a young midfield. The overnight previews keep Mac Allister in the pivot alongside Nyoni on the straightforward logic that a changed middle needs one senior passer, and after a Saturday cameo in which the game settled the moment he came on, a 7 and 'undroppable' by Rousing The Kop. The Argentine who says the club will not renew him remains the midfielder it cannot plan without. Gravenberch and Szoboszlai, both rested, are the alternatives.",
  RDM: "Tue Sep 15, matchday - Nyoni, nineteen, called the closest thing to a certainty outfield by the morning previews. He has waited all season, including an unused bench place on Saturday, and the Carabao Cup is where this club has always found out who comes next. His new contract is still unsigned per the weekend reporting, which gives tonight a second kind of significance.",
  LAM: "Tue Sep 15, matchday - Ngumoha on the left, with Munoz opposite, arrived at largely by elimination. Barcola is short of a pre-season, Isak is rested, and the wide roles fall to the youngest options. Saturday's cameo, on for Barcola at 72, was poor enough for a 4: an overhit cross, a counter conceded, a shot wide. Tonight is the chance to answer it over ninety rather than repeat it in twenty.",
  CAM: "Tue Sep 15, matchday - the slot the reporting fills with a name this tracker cannot draw. The morning consensus puts Lewis Koumas at the ten, playing off Gakpo, the forward Iraola was said to be 'so desperate to keep'; Koumas is outside the 26, so Gravenberch is drawn as the advanced mid instead. Wirtz, five competitive games without a goal or assist, is the natural ten being spared.",
  RAM: "Tue Sep 15, matchday - Munoz on the right, the same side he hit the bar from against Fulham before being withdrawn on the hour, a 4 from Rousing The Kop and a 6.7 from SI, who still call him the most natural of the wide options. Three appearances into a Liverpool career and about to make the fourth in a competition designed for exactly that.",
  ST:  "Tue Sep 15, matchday - Gakpo restored to the front. The morning reads (This Is Anfield, SI, Read Liverpool) lead the line with him, his adductor niggle judged clear enough to start after thirty minutes off the bench at Fulham, with Koumas playing off him. Isak, who has started everything and touched the ball sixteen times on Saturday, sits for the first time; Ekitike is a January hope.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · 'little doubts with Ali', but the manager has confirmed the other one" }, { playerId: 27, reason: "Woodman · third-choice, not on Saturday's bench" }],
  LB:  [{ playerId: 7, reason: "Kerkez · drawn here because Tsimikas, the reported starter, is outside the tracker squad" }],
  LCB: [{ playerId: 5, reason: "Gomez · available and could start rather than be eased in, if Iraola wants the experience" }, { playerId: 3, reason: "Van Dijk · rested in every matchday preview, but a starter if the manager blinks" }],
  RCB: [{ playerId: 11, reason: "Jacquet · the senior fallback if Iraola will not start a midfielder at centre-half" }, { playerId: 5, reason: "Gomez · a natural centre-back returning, could partner Araujo if used from the start" }],
  RB:  [{ playerId: 29, reason: "Araujo · three straight starts there, drawn inside to centre-back in this XI" }, { playerId: 5, reason: "Gomez · has played right-back and could cover it" }],
  LDM: [{ playerId: 14, reason: "Gravenberch · drawn at the ten here, a natural deeper option, rested in the morning read" }, { playerId: 15, reason: "Szoboszlai · a 3 on Saturday and rested, but an ever-present until now" }],
  RDM: [{ playerId: 13, reason: "Mac Allister · partners the pivot; drops deeper if a natural ten is used ahead" }, { playerId: 17, reason: "Endo · a midfielder by trade, drawn at centre-half in this XI" }],
  LAM: [{ playerId: 30, reason: "Barcola · short of a pre-season; a bench role is likelier than a start" }, { playerId: 22, reason: "Gakpo · starts wide if a recognised centre-forward is used through the middle" }],
  CAM: [{ playerId: 18, reason: "Wirtz · the natural ten, rested after five games without a goal contribution" }, { playerId: 15, reason: "Szoboszlai · has played the ten before; rested in this draw" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · drawn on the left, can swap flanks; both wingers rotate" }, { playerId: 9, reason: "Frimpong · played the right wing after coming on against Atletico; drawn at right-back here" }],
  ST:  [{ playerId: 23, reason: "Isak · rested in every published XI after starting all five competitive games" }, { playerId: 25, reason: "Ngumoha · has led the line in Isak's absences" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  generated_at: "2026-09-15T08:30:00Z",
  reason: "Tue Sep 15, matchday, the morning of Tottenham's visit to Anfield in the Carabao Cup at 8pm, Andrew Madley refereeing. There is no VAR in this round and no extra time: level after ninety minutes and the tie goes straight to penalties. The confidence stays Low because Iraola confirmed only one name, Giorgi Mamardashvili ('he's going to start tomorrow, yes'), and cleared Joe Gomez to feature while leaving how much he plays undecided; the rest is prediction. This draw follows the overnight consensus (This Is Anfield, SI, Read Liverpool) of eight-to-nine changes: Mamardashvili; Frimpong, Araujo, Endo, Tsimikas; Mac Allister, Nyoni; Ngumoha, Koumas, Munoz; Gakpo, with Tsimikas and Koumas outside the tracker's 26 and replaced by Kerkez and Gravenberch. The same previews raise an 18-year-old debut for the centre-back Mor Talla Ndiaye. Bradley, Chiesa, Ekitike and Leoni were named by Iraola as the four still out. Tottenham arrive seventeenth and without a league goal all season, nil from 2.94 expected goals per Squawka, and without Sandro Tonali (knock), Pedro Porro and Dejan Kulusevski, with Richarlison fit but out of De Zerbi's plans; Andy Robertson is expected to start at left-back on his first return to Anfield.",
};
