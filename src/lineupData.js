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
    // 4-2-3-1 below. Reviewed Sun Sep 13 (morning), after Liverpool 0-0 Fulham at Anfield
    // (Jacquet cleared off the line on 12; Munoz hit the bar on 22; three changes all withdrawn
    // by the hour) and pointed at Tottenham at Anfield in the Carabao Cup on Tuesday 15 September,
    // 8pm. Saturday's XI was Alisson; Araujo, Jacquet, Van Dijk, Tsimikas; Szoboszlai, Gravenberch;
    // Munoz, Wirtz, Barcola (left); Isak. This shape is the cup variant with a three-man midfield:
    // Mac Allister, Szoboszlai and Wirtz, Frimpong at right-back for Araujo, Mamardashvili in goal,
    // Gakpo and Ngumoha wide of Isak. Out: Ekitike (Achilles, January a hope), Bradley (knee, no
    // date), Leoni (ACL) and Chiesa (back), both group training during the break; Gomez in full
    // training but left out of Saturday's squad.
    defaultXI: {
      GK: 2,    // Mamardashvili (the cup is the deputy's competition · unused on Saturday)
      LB: 7,    // Kerkez (on at half-time for Tsimikas · the only senior option)
      LCB: 3,   // Van Dijk (captain · fifth straight ninety · 7.4)
      RCB: 11,  // Jacquet (man of the match · cleared off the line)
      RB: 9,    // Frimpong (the better late change on Saturday · Araujo rested)
      LCM: 18,  // Wirtz (deeper in this shape · still 0 G/A in five)
      CM: 13,   // Mac Allister ('undroppable' after an hour without him)
      RCM: 15,  // Szoboszlai (a 3 on Saturday · Gravenberch the alternative)
      LW: 22,   // Gakpo (back · thirty minutes on Saturday · freshest winger)
      ST: 23,   // Isak (16 touches · no other senior nine)
      RW: 25,   // Ngumoha (a 4 in his cameo · Munoz and Barcola tired)
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
    // Reviewed Sun Sep 13 (morning): the XI is a CUP selection drawn at low confidence.
    // Iraola rotated three for Fulham and withdrew all three by the hour, so the shape of
    // Tuesday's rotation is unknowable; this draws Mamardashvili in goal, Frimpong for
    // Araujo, Mac Allister restored to the pivot beside Szoboszlai, Gakpo (back, thirty
    // minutes) and Ngumoha on the flanks, and keeps Van Dijk, Jacquet, Wirtz and Isak
    // because the alternatives are thinner than the fatigue. Out: Ekitike (Achilles,
    // January the earliest per Iraola), Bradley (knee, no date), Leoni (ACL) and Chiesa
    // (back), both back in group training during the September break; Gomez training
    // fully but not in Saturday's squad.
    defaultXI: {
      GK: 2,    // Mamardashvili (unused on Saturday · the cup is his competition)
      LB: 7,    // Kerkez (Tsimikas withdrawn at half-time · no other senior option)
      LCB: 3,   // Van Dijk (captain · fifth straight ninety · would rest if Gomez is named)
      RCB: 11,  // Jacquet (8, man of the match · cleared off the line on 12)
      RB: 9,    // Frimpong (on at 72, the better late change · Araujo three in seven days)
      LDM: 13,  // Mac Allister (on at 60, a 7 · 'undroppable' per Rousing The Kop)
      RDM: 15,  // Szoboszlai (a 3 on Saturday · Gravenberch a 3 too · someone must play)
      LAM: 22,  // Gakpo (back · thirty minutes on the right · the freshest winger)
      CAM: 18,  // Wirtz (two wide of the post · no natural alternative at ten)
      RAM: 25,  // Ngumoha (a 4 in his cameo · Munoz hit the bar, off at 60)
      ST: 23,   // Isak (16 touches · the only senior nine · could sit the cup)
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
    // Reviewed Sun Sep 13 (morning, after Liverpool 0-0 Fulham, before Tottenham in the cup on
    // Tuesday): Araujo moves inside to make a back three with Van Dijk and Jacquet; Kerkez and
    // Frimpong as wing-backs; Mac Allister and Szoboszlai in midfield; Gakpo, Isak and Ngumoha
    // across the front, Mamardashvili in goal. Gomez not yet in a squad; Leoni not with the
    // group until the break. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 2,    // Mamardashvili (cup selection)
      LCB: 29,  // Araujo (natural CB, moved inside · rested from right-back)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (right of the back three · man of the match on Saturday)
      LWB: 7,   // Kerkez (LWB · the only senior left-back)
      LCM: 13,  // Mac Allister (restored · 'undroppable')
      RCM: 15,  // Szoboszlai (a 3 on Saturday · started every game)
      RWB: 9,   // Frimpong (RWB · on at 72 on Saturday)
      LW: 22,   // Gakpo (LW · back from the adductor doubt)
      ST: 23,   // Isak (No. 9 · 16 touches on Saturday)
      RW: 25,   // Ngumoha (RW · Munoz and Barcola the tired alternatives)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Sun Sep 13 (morning), after
// Liverpool 0-0 Fulham at Anfield and three days before Tottenham at Anfield in the Carabao
// Cup, Tuesday 15 September, 8pm. From the Fulham draw: Alisson's short pass on 12 was
// dispossessed and Jacquet cleared Garcia's shot off the line; Munoz headed a corner against
// the bar on 22; Leno saved from Isak and Mac Allister; Alisson tipped King's curler wide on
// 76. Iraola's three changes (Tsimikas, Gravenberch, Munoz for Kerkez, Mac Allister, Ngumoha)
// were all withdrawn by the hour; Gakpo came on at 60, Ngumoha and Frimpong at 72. Gomez was
// not in the squad. Out: Ekitike (Achilles, January a hope per Iraola), Bradley (knee, no
// date), Leoni (ACL) and Chiesa (back), both back in group training during the break. Endo
// and Chiesa are not in the UCL squad; both are eligible for the cup.
export const PLAYER_EVIDENCE = {
  1:  "Clean sheet · the pass on 12 · cup rest?", // Alisson
  2:  "Unused Sat · Tue his likeliest start",     // Mamardashvili
  3:  "7.4 · fifth straight ninety",               // Van Dijk
  5:  "Left out of the squad again",               // Gomez
  7:  "Rested, on at HT · 'dreadful crossing'",    // Kerkez
  8:  "Knee · no date · Nov earliest",             // Bradley
  9:  "On at 72 · the better late change",         // Frimpong
  10: "ACL · group training at the break",         // Leoni
  11: "8 · MOTM · cleared off the line",           // Jacquet
  12: "On loan at Levante for the season",         // Ndukwe
  13: "On at 60 · 'undroppable' (RTK)",            // Mac Allister
  14: "Started · a 3 · off at 60",                  // Gravenberch
  15: "0 of 6 duels · a 3 · deal to 2031",         // Szoboszlai
  17: "'He will have his moments' · cup?",         // Endo
  18: "Two wide of the post · still 0 G/A",        // Wirtz
  20: "Unused · cup tie for minutes",              // Nyoni
  22: "Back · 30 mins on the right",               // Gakpo
  23: "16 touches · run ends at two",              // Isak
  24: "Achilles · January UCL 'a hope'",           // Ekitike
  25: "On at 72 · a 4 · shot wide late",           // Ngumoha
  26: "Back · out until the break",                // Chiesa
  27: "Third keeper · not on Sat bench",           // Woodman
  28: "Hit the bar · off at 60",                    // Munoz
  29: "Third straight RB start · a 6",             // Araujo
  30: "First PL start, on the left · a 4",         // Barcola
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in all five
// competitive games, now pointed at Tottenham at Anfield in the Carabao Cup on Tuesday
// 15 September, 8pm (Fulham drawn 0-0 at Anfield on Sep 12). The XI is a cup selection,
// drawn LOW: Mamardashvili in goal, Frimpong at right-back, Mac Allister restored to the
// pivot and Gakpo and Ngumoha on the flanks, with Isak kept because there is no other nine.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. Five games into the season these read as confidence that the slot's
// occupant STARTS TUESDAY'S CUP TIE, which is a lower bar of certainty than the league:
// Iraola rotated three for Fulham and pulled all three by the hour, so nobody knows how
// hard he rotates 72 hours later with Bournemouth five days after that.
// (Reviewed Sun Sep 13, morning: after Liverpool 0-0 Fulham. Tottenham at Anfield,
// Carabao Cup third round, Tuesday 15 September, 8pm.)
export const SLOT_CONFIDENCE = {
  GK:  "Medium", // Mamardashvili · the cup is the deputy's competition · Alisson has played every minute
  LB:  "Medium", // Kerkez · Tsimikas could not finish a half on Saturday · the only other senior option
  LCB: "Medium", // Van Dijk · 35 · five straight ninety minutes · the one Iraola would rest if Gomez is named
  RCB: "High",   // Jacquet · man of the match on Saturday · the one starter nobody would drop
  RB:  "Medium", // Frimpong · the better late change on Saturday · Araujo has played three in seven days
  LDM: "High",   // Mac Allister · 'undroppable' after an hour without him · the pivot did not work
  RDM: "Medium", // Szoboszlai · a 3 on Saturday · Gravenberch a 3 too · someone has to play
  LAM: "Medium", // Gakpo · thirty minutes back · fresh legs on the left, or held for Bournemouth
  CAM: "Low",    // Wirtz · five games without a goal contribution · no natural alternative
  RAM: "Low",    // Ngumoha · a 4 in his cameo · Munoz and Barcola the alternatives, both tired
  ST:  "Medium", // Isak · 16 touches · no other senior nine, but three matches in seven days
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Sun Sep 13 (morning):
// every rationale rewritten after Liverpool 0-0 Fulham and pointed at Tottenham in the Carabao Cup on Tuesday.
export const SLOT_RATIONALE = {
  LB:  "Sun Sep 13, morning - drawn here because the alternative was tried on Saturday and taken off at half-time. Tsimikas misplaced 11 of 31 passes in his first start of the season, a 3 from Rousing The Kop; Kerkez came on and was 'an improvement' with 'yet more dreadful crossing' by SI's account. Neither, SI says, is currently up to Iraola's standard, and there is nobody else senior. Bobb was Saturday's afternoon; Savio is Tuesday's.",
  LCB: "Sun Sep 13, morning - a fifth straight ninety minutes, a 7.4 on FotMob and the better half of a clean sheet, with the rest he cannot yet take still waiting on Gomez being named in a squad. He was not on Saturday's bench. If Gomez is named on Tuesday, the captain is the centre-back Iraola would rest; until then he plays, at 35, a third match in seven days.",
  RCB: "Sun Sep 13, morning - the one starter nobody would leave out. Cleared Garcia's shot off the line on 12 after Alisson's error, was 'immaculate in just about everything he did', an 8 and man of the match from Rousing The Kop, 8.1 to top the FotMob card. Five starts in five beside Van Dijk. Solanke and Marmoush are Tuesday's examination, if they start.",
  RB:  "Sun Sep 13, morning - drawn ahead of Araujo on the cup logic: the loanee has started three in seven days, a 6 and a 6.9 on Saturday, isolated at times by Robinson's overloads, while Frimpong came on at 72 and was the better of the late changes, 'solid enough defensively'. Iraola calls the position probably not Araujo's main, done very well; Tuesday is the night to give him a rest and Frimpong a ninety.",
  LDM: "Sun Sep 13, morning - rested for an hour on Saturday and the hour was the argument: Gravenberch and Szoboszlai won two of ten first-half ground duels, the side settled only when he came on at 60, a 7 from Rousing The Kop and the site's verdict that he is now undroppable. Four days after he said the club will not renew him. Starts Tuesday, on that evidence, whatever the rotation.",
  RDM: "Sun Sep 13, morning - kept in on the thin logic that someone must partner Mac Allister: a 3 from Rousing The Kop on Saturday, none of six first-half duels won, pressed hard by Fulham, a swipe at King that nearly gave a penalty. Gravenberch, also a 3, is the alternative and the likelier if Iraola rotates the pivot for the cup; Endo, the manager said, 'will have his moments'.",
  LAM: "Sun Sep 13, morning - back, with thirty minutes on the right from the bench, a 5 and a 6.1 without influencing the game; the adductor question is closed. Drawn on the left for the cup as the freshest of the four wingers, a goal and three assists in three league games per Opta, and the one the manager might prefer to hold for Bournemouth. Barcola, tired after three in nine days, is the alternative.",
  CAM: "Sun Sep 13, morning - five games without a goal or assist, two shots wide of the right post and a scuffed third on Saturday, a 4 from Rousing The Kop and a 7.4 from FotMob that noted fatigue. Drawn here because there is no natural alternative at ten short of pushing Mac Allister forward; the cup tie is either a rest or the night the drought ends, and Iraola's rotation record says he will not rest the whole spine.",
  RAM: "Sun Sep 13, morning - the lowest-confidence slot on the pitch. Ngumoha's cameo on Saturday drew a 4, an overhit cross, a counter conceded and a shot fired wide; Munoz hit the bar and was a 4 too; Barcola, a first Premier League start on the left, was 'very much on the periphery'. All four wingers will play both sides all season, Iraola said. Whoever is freshest starts; Ngumoha is the guess.",
  ST:  "Sun Sep 13, morning - sixteen touches in ninety minutes on Saturday, the second fewest for a Liverpool outfielder on record, and the run of three straight league games with a goal ended at two. Ekitike is January at the earliest, so the only rest available is Gakpo as a false nine, which was not tried on Saturday. Three matches in seven days; Isak has started all of them, and the cup tie is the one he could sit.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · a clean sheet on Saturday, the short pass aside; would start if Iraola treats the cup as a league game" }, { playerId: 27, reason: "Woodman · third-choice, not on Saturday's bench" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the only senior left-back after Tsimikas was withdrawn at half-time on Saturday" }],
  LCB: [{ playerId: 11, reason: "Jacquet · started beside Van Dijk in all five competitive games; man of the match on Saturday" }, { playerId: 5, reason: "Gomez · in full training, not in Saturday's squad; the cup tie is the obvious first involvement if named" }],
  RCB: [{ playerId: 29, reason: "Araujo · the loanee's natural position if Frimpong takes right-back for the cup" }, { playerId: 5, reason: "Gomez · a fourth senior centre-back once he is finally named in a squad" }],
  RB:  [{ playerId: 29, reason: "Araujo · three straight starts at right-back, a 6 and a 6.9 on Saturday; keeps the shirt if Iraola does not rotate" }, { playerId: 15, reason: "Szoboszlai · finished the Forest game at right-back and named by Iraola as in-game cover" }],
  LDM: [{ playerId: 14, reason: "Gravenberch · started on Saturday and was replaced by Mac Allister at 60, a 3; the rotation option if the pivot is changed for the cup" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · the other senior pivot option; a 3 on Saturday, likelier for the cup than the league" }, { playerId: 17, reason: "Endo · unused on Saturday; 'for sure he will have his moments', Iraola said, and the cup is where they come" }],
  LAM: [{ playerId: 30, reason: "Barcola · a first Premier League start on the left on Saturday, a 4; Iraola is building his minutes but he has played three in nine days" }, { playerId: 25, reason: "Ngumoha · drawn on the right here; can swap flanks" }],
  CAM: [{ playerId: 13, reason: "Mac Allister · can push into the ten if Wirtz is rested, with Gravenberch and Szoboszlai behind" }, { playerId: 15, reason: "Szoboszlai · has played the ten before; a 3 in the pivot on Saturday" }],
  RAM: [{ playerId: 28, reason: "Munoz · started on the right on Saturday and headed against the bar, off at 60; SI calls him the most natural of the right-wing options" }, { playerId: 9, reason: "Frimpong · played the right wing after coming on against Atletico; drawn at right-back here" }],
  ST:  [{ playerId: 22, reason: "Gakpo · the false-nine fallback if Isak is finally rested after three matches in seven days" }, { playerId: 25, reason: "Ngumoha · led the line in Isak's absences late last season" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  generated_at: "2026-09-13T08:30:00Z",
  reason: "Sun Sep 13, morning, two days before Tottenham visit Anfield in the Carabao Cup on Tuesday at 8pm, a tie that falls 72 hours after a goalless Fulham draw and on a weekend the coverage has turned to whether Iraola is already under pressure. Rotation is expected, the reporting tipping Mac Allister and Szoboszlai to stay in midfield, but its full shape is unknowable: the three changes he made on Saturday (Tsimikas, Gravenberch, Munoz) were all withdrawn by the hour, so the bench for the cup is the same bench that did not work. This XI is drawn as a cup selection, Mamardashvili in goal, Frimpong for Araujo at right-back, Mac Allister restored after an hour that made him 'undroppable', Gakpo and Ngumoha on the flanks, with the spine (Van Dijk, Jacquet, Szoboszlai, Wirtz, Isak) kept because the alternatives are thinner than the fatigue. Six of the eleven started on Saturday. Gomez was not in Saturday's squad and is not drawn; Ekitike is a January hope, Bradley and Leoni have no date, Chiesa is out until the break. Tottenham have not scored in four league games.",
};
