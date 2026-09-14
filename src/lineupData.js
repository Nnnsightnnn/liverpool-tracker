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
    // 4-2-3-1 below. Reviewed Mon Sep 14 (evening), the night before Tottenham visit Anfield
    // in the Carabao Cup third round on Tuesday 15 September, 8pm, Andrew Madley refereeing.
    // NO VAR in this round and no extra time: level after ninety goes straight to penalties.
    // Rebuilt on Rousing The Kop's post-press-conference XI (published 7pm Monday, after
    // Iraola spoke), which expects nine changes: Mamardashvili in goal (the only starter the
    // manager confirmed), Frimpong and Tsimikas as full-backs, Joe Gomez starting at
    // centre-back beside Wataru Endo, a midfield of Gravenberch, Nyoni and James McConnell,
    // and a front three of Munoz, Lewis Koumas and Ngumoha. Tsimikas, McConnell and Koumas
    // are not in the tracker's 26, so this draws Kerkez, Mac Allister and Gakpo in their
    // places. Out: Ekitike (Achilles, January a hope), Bradley (knee, ~21 Nov), Leoni (ACL,
    // ~14 Oct target) and Chiesa (back, ~11 Oct target), all four named by Iraola on Monday.
    defaultXI: {
      GK: 2,    // Mamardashvili (confirmed by Iraola: 'he's going to start tomorrow, yes')
      LB: 7,    // Kerkez (drawn for Tsimikas, who is not in the tracker squad)
      LCB: 5,   // Gomez ('available for tomorrow' · first football since July)
      RCB: 17,  // Endo (makeshift centre-half · RTK start him beside Gomez)
      RB: 9,    // Frimpong (RTK: a chance to earn the position back)
      LCM: 14,  // Gravenberch (the senior body in a young midfield)
      CM: 13,   // Mac Allister (drawn for McConnell, who is not in the tracker squad)
      RCM: 20,  // Nyoni (19 · the nearest thing to a lock after the goalkeeper)
      LW: 25,   // Ngumoha (RTK put him left, Munoz right)
      ST: 22,   // Gakpo (drawn for Koumas, who is not in the tracker squad)
      RW: 28,   // Munoz (the most natural right-wing option per SI)
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
    // Reviewed Mon Sep 14 (EVENING), after Iraola's press conference rather than before it.
    // He confirmed exactly one starter, Mamardashvili, and confirmed Gomez available
    // ('Joe is training with the team and is available for tomorrow'), leaving the other ten
    // deliberately open on a schedule he called 'the worst scenario, game, two days, game'.
    // This XI follows Rousing The Kop's post-briefing prediction of nine changes, with the
    // three names outside the tracker's 26 (Tsimikas, McConnell, Koumas) replaced by the
    // nearest valid picks (Kerkez, Mac Allister, Gakpo). Note the back line: a defender
    // playing his first football since July beside a 33-year-old holding midfielder, with
    // RTK raising an 18-year-old debut for Mor Talla Ndiaye as a live alternative behind them.
    defaultXI: {
      GK: 2,    // Mamardashvili (the one name Iraola gave · first appearance of the season)
      LB: 7,    // Kerkez (Tsimikas is the reported pick but is not in the tracker squad)
      LCB: 5,   // Gomez (cleared on Monday · seven weeks out · a new vice-captain)
      RCB: 17,  // Endo (a holding midfielder as the fourth centre-half · first minutes of the season)
      RB: 9,    // Frimpong (Araujo rested after three games in seven days)
      LDM: 14,  // Gravenberch (the senior body RTK keep in a 19-and-22 midfield)
      RDM: 20,  // Nyoni (19 · the closest thing to a certainty outfield)
      LAM: 25,  // Ngumoha (left, per RTK · answering a poor cameo on Saturday)
      CAM: 13,  // Mac Allister (drawn at the ten for McConnell, outside the tracker squad)
      RAM: 28,  // Munoz (right, per RTK · hit the bar against Fulham)
      ST: 22,   // Gakpo (drawn for Koumas, outside the tracker squad · false nine with Isak rested)
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
    // Reviewed Mon Sep 14 (evening), the night before Tottenham in the cup. A back three needs
    // one more centre-half than the reported cup XI contains, so Araujo is drawn into the
    // middle alongside the returning Gomez and the makeshift Endo, with Van Dijk and Jacquet
    // rested in every published preview. Kerkez and Frimpong as wing-backs, Mac Allister and
    // Nyoni in midfield, Gakpo, Munoz and Ngumoha across the front, Mamardashvili in goal.
    // Default is the 4-2-3-1 above.
    defaultXI: {
      GK: 2,    // Mamardashvili (confirmed starter)
      LCB: 5,   // Gomez (available · first football since July)
      CCB: 29,  // Araujo (the natural centre-back a back three needs)
      RCB: 17,  // Endo (makeshift centre-half, as in the reported flat back four)
      LWB: 7,   // Kerkez (the only senior left-back in the tracker squad)
      LCM: 13,  // Mac Allister (the midfielder every other read keeps in)
      RCM: 20,  // Nyoni (19 · tipped to start the cup)
      RWB: 9,   // Frimpong (RWB · the reported right-back)
      LW: 25,   // Ngumoha (left, per RTK)
      ST: 22,   // Gakpo (false nine with Isak rested)
      RW: 28,   // Munoz (right, per RTK)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Mon Sep 14 (EVENING), after
// Iraola's pre-match press conference and the night before Tottenham at Anfield in the
// Carabao Cup, Tuesday 15 September, 8pm, no VAR and no extra time. Iraola confirmed
// Mamardashvili starts and Gomez is available; Bradley, Chiesa, Ekitike and Leoni were named
// as the four still out. Endo and Chiesa are not in the UCL squad; both are cup-eligible.
export const PLAYER_EVIDENCE = {
  1:  "Rested · 'little doubts with Ali'",     // Alisson
  2:  "Confirmed starter · 'yes, tomorrow'",   // Mamardashvili
  3:  "Rested in every post-presser XI",       // Van Dijk
  5:  "'Available for tomorrow' · starts",     // Gomez
  7:  "Drawn for Tsimikas, outside the 26",    // Kerkez
  8:  "Knee · named out · ~21 Nov",            // Bradley
  9:  "Starts at right-back · Araujo rested",  // Frimpong
  10: "ACL · named out · ~14 Oct target",      // Leoni
  11: "Aldridge: 'the real deal' · rested",    // Jacquet
  12: "On loan at Levante for the season",     // Ndukwe
  13: "Drawn at ten for McConnell",            // Mac Allister
  14: "The senior body in a young midfield",   // Gravenberch
  15: "Left out of every cup XI · a 3 Sat",    // Szoboszlai
  17: "Fourth centre-half · first minutes",    // Endo
  18: "Rested · no natural understudy",        // Wirtz
  20: "19 · the one near-lock outfield",       // Nyoni
  22: "Drawn for Koumas · false nine",         // Gakpo
  23: "Rested · first start missed all season",// Isak
  24: "Achilles · named out · January hope",   // Ekitike
  25: "Starts left · answering a 4 on Sat",    // Ngumoha
  26: "Back · named out · ~11 Oct target",     // Chiesa
  27: "Third keeper · bench at most",          // Woodman
  28: "Starts right · hit the bar Sat",        // Munoz
  29: "£47m buy option confirmed · rested",    // Araujo
  30: "'Certainly won't be starting' · RTK",   // Barcola
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in all five
// competitive games, now pointed at Tottenham at Anfield in the Carabao Cup on Tuesday
// 15 September, 8pm. The XI is a cup selection, drawn LOW, following Rousing The Kop's
// post-press-conference prediction of nine changes: Mamardashvili in goal, Gomez and Endo
// at centre-back, Frimpong and Kerkez the full-backs, Gravenberch and Nyoni the pivot,
// Mac Allister at the ten and Gakpo a false nine with Isak rested.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS TUESDAY'S CUP TIE,
// which is a lower bar than the league: Iraola confirmed one name and explicitly declined
// the other ten, and the previews disagree with each other on most of them.
// (Reviewed Mon Sep 14, evening. Tottenham at Anfield, Carabao Cup third round,
// Tuesday 15 September, 8pm, Andrew Madley, no VAR, penalties if level.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Mamardashvili · confirmed by the manager at Monday's press conference
  LB:  "Low",    // Kerkez · Tsimikas is the reported pick but sits outside the tracker squad
  LCB: "Medium", // Gomez · available per Iraola, though 'how much he can play' is undecided
  RCB: "Low",    // Endo · a midfielder as fourth centre-half; Ndiaye and Jacquet both possible
  RB:  "Medium", // Frimpong · the reported right-back with Araujo rested
  LDM: "Medium", // Gravenberch · the senior body Rousing The Kop keep alongside the teenagers
  RDM: "Medium", // Nyoni · 19 · called the one near-certainty outfield
  LAM: "Medium", // Ngumoha · left in the reported front three
  CAM: "Low",    // Mac Allister drawn for McConnell, the reported ten, who is outside the 26
  RAM: "Medium", // Munoz · right in the reported front three
  ST:  "Low",    // Gakpo drawn for Koumas, the reported centre-forward, who is outside the 26
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Mon Sep 14
// (evening): every rationale rewritten against what Iraola actually said on Monday rather
// than what the weekend previews expected him to say.
export const SLOT_RATIONALE = {
  LB:  "Mon Sep 14, evening - the one position the previews and the tracker cannot agree on. Rousing The Kop expect Tsimikas to start, three days after he misplaced 11 of 31 passes against Fulham and was withdrawn at half-time; he is not in the tracker's 26, so Kerkez, the man who replaced him, is drawn instead. SI's verdict on the pair is that neither is currently up to Iraola's standard. Andy Robertson, nine years of this parish, may be on the other flank in white.",
  LCB: "Mon Sep 14, evening - filled by the sentence of the day. 'Joe is training with the team and is available for tomorrow,' Iraola said, 'it's a matter of deciding how much he can play.' That last clause is why the confidence is Medium rather than High: a defender making his first appearance since a July muscle injury may be given a half rather than a night. Rousing The Kop start him. Van Dijk, rested in every published XI, is the alternative if the manager blinks.",
  RCB: "Mon Sep 14, evening - a holding midfielder as the fourth centre-half, which is the depth chart stated in one slot. Endo has not played a minute this season and is drawn here because Rousing The Kop start him beside Gomez, with Van Dijk, Jacquet and Araujo all rested. The same preview raises an 18-year-old debut for Mor Talla Ndiaye if Iraola declines both senior options. Jacquet, man of the match on Saturday and praised by Aldridge on Monday, is the safe fallback.",
  RB:  "Mon Sep 14, evening - Frimpong in, Araujo out, and both for the same reason. The Uruguayan has started three games in seven days at a position that is not his, and Monday brought the news that Liverpool do after all hold a £47m option to buy him, which is an argument for looking after him. Frimpong was the better of Saturday's late changes, on for Araujo at 72, a 6 and a 6.9, and Rousing The Kop frame Tuesday as his chance to take the shirt back.",
  LDM: "Mon Sep 14, evening - the adult in a young midfield. Rousing The Kop keep Gravenberch on the straightforward logic that a three containing a 19-year-old and a 22-year-old needs one senior passer, and frame it as a chance to play back into form rather than a reward for Saturday, when he and Szoboszlai won two of ten first-half ground duels and he was withdrawn on the hour. Szoboszlai, rested in every read, is the alternative.",
  RDM: "Mon Sep 14, evening - Nyoni, nineteen, called the closest thing to a certainty outfield by the preview published after Iraola spoke. He has waited all season, including an unused bench place on Saturday, and the Carabao Cup is where this club has always found out who comes next. His new contract is still unsigned per the weekend reporting, which gives Tuesday a second kind of significance.",
  LAM: "Mon Sep 14, evening - Ngumoha on the left, with Munoz opposite, arrived at largely by elimination. Barcola 'certainly won't be starting' in Rousing The Kop's words, Isak will not, Gakpo is only just back from an adductor niggle. Saturday's cameo, on for Barcola at 72, was poor enough for a 4: an overhit cross, a counter conceded, a shot wide. This is the chance to answer it.",
  CAM: "Mon Sep 14, evening - the slot the reporting fills with a name this tracker cannot draw. Rousing The Kop put James McConnell at the ten, noting there is no natural understudy for Wirtz in the building and that the 22-year-old was pushed into advanced roles in pre-season; McConnell is outside the 26, so Mac Allister is drawn up from the pivot instead. Wirtz, five competitive games without a goal or assist, is the man being spared.",
  RAM: "Mon Sep 14, evening - Munoz on the right, the same side he hit the bar from against Fulham before being withdrawn on the hour, a 4 from Rousing The Kop and a 6.7 from SI, who still call him the most natural of the wide options. Three appearances into a Liverpool career and about to make the fourth in a competition designed for exactly that.",
  ST:  "Mon Sep 14, evening - the reported answer is Lewis Koumas, who is not in the tracker's 26, so Gakpo is drawn as the false nine. Rousing The Kop argue Gakpo should not start either, only just back from a knock and thirty minutes into his return, and hand Koumas the night to prove he is Isak's understudy. Isak, who has started everything and touched the ball sixteen times on Saturday, sits for the first time; Ekitike is a January hope.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · 'little doubts with Ali', but the manager has confirmed the other one" }, { playerId: 27, reason: "Woodman · third-choice, not on Saturday's bench" }],
  LB:  [{ playerId: 7, reason: "Kerkez · drawn here because Tsimikas, the reported starter, is outside the tracker squad" }],
  LCB: [{ playerId: 3, reason: "Van Dijk · rested in every post-press-conference XI, but a starter if Gomez is only given a half" }, { playerId: 11, reason: "Jacquet · five starts in five and man of the match on Saturday; rested here" }],
  RCB: [{ playerId: 11, reason: "Jacquet · the senior fallback if Iraola will not start a midfielder at centre-half" }, { playerId: 29, reason: "Araujo · a natural centre-back, drawn out entirely in this XI after three games in seven days" }],
  RB:  [{ playerId: 29, reason: "Araujo · three straight starts there, and now with a £47m buy option confirmed behind him" }, { playerId: 5, reason: "Gomez · has played right-back and could cover it if Van Dijk plays after all" }],
  LDM: [{ playerId: 15, reason: "Szoboszlai · a 3 on Saturday and rested in every read, but an ever-present until now" }, { playerId: 13, reason: "Mac Allister · drops into the pivot if a natural ten is used ahead of him" }],
  RDM: [{ playerId: 13, reason: "Mac Allister · the one midfielder most reads keep in; partners the pivot if Nyoni is held back" }, { playerId: 17, reason: "Endo · drawn at centre-half here, but a midfielder by trade if the back line is filled elsewhere" }],
  LAM: [{ playerId: 30, reason: "Barcola · 'certainly won't be starting' per Rousing The Kop; a bench role is likelier" }, { playerId: 22, reason: "Gakpo · starts wide if a recognised centre-forward is used through the middle" }],
  CAM: [{ playerId: 18, reason: "Wirtz · the natural ten, rested after five games without a goal contribution" }, { playerId: 15, reason: "Szoboszlai · has played the ten before; rested in this draw" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · drawn on the left, can swap flanks; both wingers rotate" }, { playerId: 9, reason: "Frimpong · played the right wing after coming on against Atletico; drawn at right-back here" }],
  ST:  [{ playerId: 23, reason: "Isak · rested in every published XI after starting all five competitive games" }, { playerId: 25, reason: "Ngumoha · has led the line in Isak's absences" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  generated_at: "2026-09-14T22:30:00Z",
  reason: "Mon Sep 14, evening, the night before Tottenham visit Anfield in the Carabao Cup at 8pm, Andrew Madley refereeing. There is no VAR in this round and no extra time: level after ninety minutes and the tie goes straight to penalties. The confidence stays Low even though the manager has now spoken, because what he gave was one name and a principle. Iraola confirmed Giorgi Mamardashvili starts ('he's going to start tomorrow, yes') and confirmed Joe Gomez is available ('Joe is training with the team and is available for tomorrow, it's a matter of deciding how much he can play'), then declined to go further, explaining only that the schedule is 'the worst scenario, game, two days, game, two days, game' and that he is still learning which players withstand it. This draw follows Rousing The Kop's post-briefing XI of nine changes: Mamardashvili; Frimpong, Gomez, Endo, Tsimikas; Gravenberch, Nyoni, McConnell; Munoz, Koumas, Ngumoha, with Tsimikas, McConnell and Koumas outside the tracker's 26 and replaced by Kerkez, Mac Allister and Gakpo. The same preview raises an 18-year-old debut for the centre-back Mor Talla Ndiaye. Bradley, Chiesa, Ekitike and Leoni were named by Iraola as the four still out. Tottenham arrive without a league goal all season, nil from 2.94 expected goals per Squawka, and without Sandro Tonali (knock), Pedro Porro, Dejan Kulusevski and Richarlison, who is fit but out of De Zerbi's plans; Destiny Udogie returns and Micky van de Ven, fit and a starter at Everton, is available.",
};
