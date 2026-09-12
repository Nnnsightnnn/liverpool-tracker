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
    // 4-2-3-1 below. Reviewed Sat Sep 12 (matchday morning, on the day of Fulham at Anfield), after Liverpool 2-1 Atletico Madrid at
    // Anfield (Llorente 17; Szoboszlai 40 from Araujo's flick; Mac Allister 50 from twenty
    // yards) and pointed at Fulham at Anfield on Saturday 12 September, 3pm, Premier League.
    // Wednesday's XI was Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Szoboszlai, Mac Allister;
    // Barcola (right), Wirtz, Ngumoha (left); Isak. Barcola (59) and Ngumoha (around the hour)
    // both came off with cramp; Gakpo was left out of the squad as a precaution. This shape
    // draws Gravenberch in the three because SI pencilled him for Fulham, with Mac Allister the
    // alternative after his winner; Gakpo is drawn left as a doubt with Ngumoha behind him.
    // Out: Ekitike (Achilles, January a hope per Iraola), Bradley (knee, no date), Leoni (ACL) and Chiesa (back),
    // both group training during the break; Gomez in full training but not in Wednesday's squad.
    defaultXI: {
      GK: 1,    // Alisson (the Alvarez save · beaten once, by Llorente)
      LB: 7,    // Kerkez (lost Llorente for the goal, won the ball for the equaliser)
      LCB: 3,   // Van Dijk (captain · ninety minutes again)
      RCB: 11,  // Jacquet (UCL debut · the better centre-back on the night)
      RB: 29,   // Araujo (second start, an 8 and the backheel assist)
      LCM: 18,  // Wirtz (the through-ball Barcola wasted · still 0 G/A)
      CM: 14,   // Gravenberch (SI pencilled him for Fulham · a 4 off the bench on Wednesday)
      RCM: 15,  // Szoboszlai (scored the equaliser · 8.5)
      LW: 22,   // Gakpo (left out of the Atletico squad as a precaution · a doubt)
      ST: 23,   // Isak (shot inside 16 seconds · no goal · only senior nine)
      RW: 30,   // Barcola (first start on the right · two chances missed · cramp at 59)
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
    // The default shape, the 4-2-3-1 Iraola has used in all four competitive games, now
    // pointed at Fulham at Anfield on Saturday 12 September, 3pm (Atletico beaten 2-1 at
    // Anfield on Sep 9; Ipswich beaten 2-0 away on Sep 4; Forest drawn 2-2 at Anfield on
    // Aug 29; Newcastle drawn 2-2 away on Aug 23). Reviewed Sat Sep 12 (matchday morning, on the day of Fulham at Anfield): the XI is
    // Wednesday's confirmed side with one change forced by the squad list, Gakpo back on
    // the left for Ngumoha if the precaution that kept him out of the European squad is
    // lifted. Barcola keeps the right after his first start; Ngumoha and Munoz are the
    // alternatives for either flank. Mac Allister and Szoboszlai, who scored both goals,
    // keep the pivot; Gravenberch is the rotation option SI named for this fixture.
    // Out: Ekitike (Achilles, January the earliest per Iraola) and Bradley (knee, no date), Leoni (ACL) and Chiesa (back)
    // back in group training during the September break, Gomez training fully but not yet in
    // a matchday squad, Gakpo a doubt after being left out as a precaution.
    defaultXI: {
      GK: 1,    // Alisson (full-stretch save from Alvarez · No. 1)
      LB: 7,    // Kerkez (a 3 for the Llorente goal · no senior alternative)
      LCB: 3,   // Van Dijk (captain · started every game)
      RCB: 11,  // Jacquet (four starts in four · a 7 on his UCL debut)
      RB: 29,   // Araujo (an 8 and an assist · the shirt is his)
      LDM: 13,  // Mac Allister (the twenty-yard winner · man of the match)
      RDM: 15,  // Szoboszlai (scored the equaliser · 10 UCL goal involvements since 2025-26)
      LAM: 22,  // Gakpo (a doubt · tested in Friday afternoon's session · Ngumoha the alternative)
      CAM: 18,  // Wirtz (ran the game for a spell · the through-ball for Barcola)
      RAM: 30,  // Barcola ('no injury' at noon · first start on the right · Munoz the alternative)
      ST: 23,   // Isak (no goal vs Atletico · three in three in the league)
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
    // Hypothetical 3-4-3 alternative, a shape rarely used, shown for completeness, and the
    // one Atletico beat Liverpool's preparation with on Wednesday (a 5-3-2 in Iraola's words).
    // Reviewed Sat Sep 12 (matchday morning, on the day of Fulham at Anfield): Araujo moves inside to make a back three of natural
    // centre-backs with Van Dijk and Jacquet; Kerkez and Frimpong, who came on and had a
    // goal disallowed, as wing-backs; Wirtz and Szoboszlai in midfield; Gakpo (a doubt),
    // Isak and Barcola across the front. Gomez trains; Leoni not with the group until the
    // break. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (No. 1)
      LCB: 29,  // Araujo (natural CB, moved inside from Wednesday's right-back berth)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (right of the back three)
      LWB: 7,   // Kerkez (LWB · the only senior left-back)
      LCM: 18,  // Wirtz (deeper in this shape, the creative axis)
      RCM: 15,  // Szoboszlai (started every game in the pivot · scored Wednesday)
      RWB: 9,   // Frimpong (RWB · on at 59, disallowed goal at 89)
      LW: 22,   // Gakpo (LW · a doubt after being left out as a precaution)
      ST: 23,   // Isak (No. 9 · three in three in the league)
      RW: 30,   // Barcola (RW · first start there on Wednesday)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Sat Sep 12 (matchday morning), after
// Liverpool 2-1 Atletico Madrid at Anfield and the day before Fulham at Anfield on
// Saturday 12 September, 3pm. From the Atletico win: Llorente scored on 17 after beating
// Kerkez to Alvarez's pass; Szoboszlai levelled on 40 from Araujo's backheel; Mac Allister
// won it on 50 from twenty yards. Barcola (first start, right) came off at 59 with cramp,
// Ngumoha (first European start, left) around the hour; Frimpong, Munoz, Gravenberch,
// Koumas and Tsimikas came on; Frimpong had a late goal disallowed. Gakpo was left out
// of the squad as a precaution. Out: Ekitike (Achilles, January a hope per Iraola), Bradley (knee, no date),
// Leoni (ACL) and Chiesa (back), both back in group training during the break; Gomez in
// full training but not in Wednesday's squad. Endo and Chiesa are not in the UCL squad.
export const PLAYER_EVIDENCE = {
  1:  "Starts Sat · home for the break",       // Alisson
  2:  "Cup tie Tue his likely start",          // Mamardashvili
  3:  "Captain · 3 home games in 7 days",      // Van Dijk
  5:  "In line for a first bench Sat",         // Gomez
  7:  "Cleared · starts, Bobb his job",        // Kerkez
  8:  "Knee · no date · Nov earliest",         // Bradley
  9:  "Bench option · Araujo has the RB",      // Frimpong
  10: "ACL · group training at the break",     // Leoni
  11: "18/25 duels · started all four",        // Jacquet
  12: "On loan at Levante for the season",     // Ndukwe
  13: "Winner from 20 yds · starts Sat",       // Mac Allister
  14: "Benched 3 games · cup tie likelier",    // Gravenberch
  15: "Scored the equaliser · deal to 2031",   // Szoboszlai
  17: "Not in UCL squad · PL/cup depth",       // Endo
  18: "Still 0 G/A · Fulham's block his kind", // Wirtz
  20: "Deal pending · cup tie for minutes",    // Nyoni
  22: "Doubt into matchday · adductor",        // Gakpo
  23: "3 in 3? · leads the line alone",        // Isak
  24: "Achilles · January UCL 'a hope'",       // Ekitike
  25: "Wants 'another special day' vs FUL",    // Ngumoha
  26: "Back · out until the break",            // Chiesa
  27: "Third keeper · cup tie maybe",          // Woodman
  28: "SI starts him if Gakpo waits",          // Munoz
  29: "RB move permanent, says Warnock",       // Araujo
  30: "Cleared · Isak: 'a big signing'",       // Barcola
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in all four
// competitive games, now pointed at Fulham at Anfield on Saturday 12 September, 3pm
// (Atletico beaten 2-1 at Anfield on Sep 9). The XI is Wednesday's confirmed side with
// Gakpo drawn back in on the left as a doubt.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. Four games into the season these read as confidence that the slot's
// occupant remains a first-choice starter into 2026-27 — LOW where the player
// has left (Salah, Robertson, Konate) or whose availability is open.
// (Reviewed Sat Sep 12, matchday morning: after Liverpool 2-1 Atletico Madrid. The back four and the pivot
// held and scored; the flanks are the open question, Gakpo out of the European squad as a
// precaution and both the wingers who replaced him cramping. Araujo's second start at right-back
// settled that slot upward. Fulham at Anfield on Saturday 12 September, 3pm.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · the Alvarez save · No. 1
  LB:  "Low",    // Kerkez · culpable for the Llorente goal, a 3 · but the only senior left-back, Tsimikas the late change
  LCB: "Medium", // Van Dijk · 35 · ninety minutes again, a 5 for loose early passes
  RCB: "Medium", // Jacquet · four starts in four, the better centre-back on Wednesday · Gomez training but not yet in a squad
  RB:  "High",   // Araujo · two starts, an 8 and an assist · Frimpong an advanced substitute now
  LDM: "High",   // Mac Allister · the winner from twenty yards, man of the match · the contract row has not moved him from the XI
  RDM: "High",   // Szoboszlai · scored the equaliser · signed to 2031 · started every game
  LAM: "Low",    // Gakpo · left out of the Atletico squad as a precaution · Ngumoha started there and cramped
  CAM: "Medium", // Wirtz · ran the game for a spell, set Barcola through · still no goal contribution in four
  RAM: "Medium", // Barcola · first start on the right, two chances missed, cramp at 59 · Munoz the rested alternative
  ST:  "High",   // Isak · no goal on Wednesday, three in three in the league · no other senior nine
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Sat Sep 12 (matchday morning, on the day of Fulham at Anfield):
// every rationale rewritten after Liverpool 2-1 Atletico Madrid and pointed at Fulham on Saturday.
export const SLOT_RATIONALE = {
  LB:  "Sat Sep 12, matchday morning - cleared and starting, the Wednesday cramp three days behind him; Sports Mole's XI would rest him for Tsimikas with Tuesday's cup tie ahead, which nothing Iraola said supports. Beaten by Llorente for the opener, a 3 from Rousing The Kop, then won the ball for the equaliser. No senior deputy, so it is form and legs, not selection; Bobb and Robinson are the afternoon.",
  LCB: "Sat Sep 12, matchday morning - the rest he cannot yet take gets nearer as Gomez comes into first-bench contention. Ninety minutes again on Wednesday, a 5 from Rousing The Kop for loose early passes not like him, beaten once as a pair by Llorente behind an otherwise-held Atletico. Three home games in seven days from three o'clock, and at 35 he is the centre-back the club would rest first once Gomez is passed fit.",
  RCB: "Sat Sep 12, matchday morning - the number of the week is his, 18 of 25 duels won per Opta, and he was the better centre-back on his Champions League debut, a 7 from both fan sites. Four starts in four beside Van Dijk. Gomez is in line for a first bench, so competition arrives Saturday rather than next week; Garcia and King are the examination.",
  RB:  "Sat Sep 12, matchday morning - the shirt is his, and Warnock told TEAMtalk the move is permanent, Jacquet inside. Two starts there, a clean sheet at Ipswich, an 8 and the backheel assist against Atletico; Iraola calls it a position that is probably not his main, done very well. Frimpong is the advanced substitute, Gomez the third body once fit; Bobb or Berge is the assignment.",
  LDM: "Sat Sep 12, matchday morning - the man Sports Mole says keeps Gravenberch out, and Wednesday's match-winner from twenty yards, his name chorused as he left. He said on Tuesday the club will not renew him and answered on the pitch; no player won more duels than his five per Opta. Every preview starts him against Fulham, with SI's earlier Gravenberch call now reading as cup rotation.",
  RDM: "Sat Sep 12, matchday morning - the other half of the pivot that scored both goals, the equaliser rolled past Oblak after Araujo's flick. Ten Champions League goal involvements since last season's start, double any team-mate per Opta; signed to 2031, started every game. Gravenberch, a 4 off the bench, is the alternative and the likelier cup starter.",
  LAM: "Sat Sep 12, matchday morning - drawn here on a verdict that never came. Friday afternoon's session was to settle Saturday or Tuesday and no club update had emerged by matchday morning; Sports Mole keeps him doubtful and SI's matchday XI starts Munoz. A goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes, so the front line hangs on him; if he waits, Ngumoha or Munoz starts, with the cup tie Tuesday.",
  CAM: "Sat Sep 12, matchday morning - the creator Fulham's mid-block is built to frustrate and he was signed to unlock. He set Barcola clean through on Wednesday for a finish rolled wide, pressed and won the ball high, ran the game for a spell; a 7 from both sites, his own shot saved by Oblak. Four games now without a goal or assist; this is the kind of afternoon that ends that.",
  RAM: "Sat Sep 12, matchday morning - cleared and vouched for by Isak, 'a big signing for us', though Sports Mole would rest him for Munoz. Iraola tied Wednesday's cramp to a player without a proper pre-season and said the less-prepared are not yet at their best. First start against Atletico, two chances missed, off at 59; Fulham is a third involvement in nine days, Munoz the rested alternative.",
  ST:  "Sat Sep 12, matchday morning - 332 minutes in and chasing history: a goal makes it three straight league games for the first time since January 2025 per Opta, against the league's leakiest defence. Ekitike is now a January hope, so Isak is the only fit senior nine and the false-nine fallback is Gakpo, himself a doubt. Three in three in the league, none yet in Europe, a first Anfield goal in red still owed.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · unused against Atletico; the Tottenham cup tie on Tuesday is his likeliest start" }, { playerId: 27, reason: "Woodman · third-choice, on the European bench on Wednesday" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the only senior left-back at the club; Tsimikas came on late against Atletico" }],
  LCB: [{ playerId: 11, reason: "Jacquet · started beside Van Dijk in all four competitive games" }, { playerId: 29, reason: "Araujo · a natural centre-back if Iraola moves him back inside" }],
  RCB: [{ playerId: 29, reason: "Araujo · the loanee's natural position, though Warnock now calls the right-back move permanent" }, { playerId: 5, reason: "Gomez · in full training and in line for a first bench against Fulham per 3 Added Minutes" }],
  RB:  [{ playerId: 9, reason: "Frimpong · on at 59 as a winger and scored a disallowed goal; the alternative if Araujo is rested for the cup" }, { playerId: 15, reason: "Szoboszlai · finished the Forest game at right-back and named by Iraola as in-game cover" }],
  LDM: [{ playerId: 14, reason: "Gravenberch · SI pencilled him for Fulham; a 4 off the bench against Atletico, sloppy in possession by Rousing The Kop's reading" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · the other senior pivot option, likelier to start the Tottenham cup tie than Saturday" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · 3 Added Minutes' Friday XI starts him; took the left against Atletico with Gakpo out and worked Llorente out over time" }, { playerId: 28, reason: "Munoz · on for Ngumoha, tested Oblak; the one rested senior winger" }],
  CAM: [{ playerId: 13, reason: "Mac Allister · the pivot's scorer on Wednesday, can push forward into the ten" }, { playerId: 15, reason: "Szoboszlai · new deal to 2031, has played the ten before" }],
  RAM: [{ playerId: 28, reason: "Munoz · dropped for Barcola on Wednesday, came on and forced a save from Oblak; the obvious replacement if Barcola's cramp is managed" }, { playerId: 9, reason: "Frimpong · played the right wing after coming on at 59 and had a goal disallowed" }],
  ST:  [{ playerId: 22, reason: "Gakpo · the false-nine fallback, and himself a doubt after being left out of the European squad" }, { playerId: 25, reason: "Ngumoha · led the line in Isak's absences late last season" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-09-12T08:30:00Z",
  reason: "Sat Sep 12, matchday morning, before Fulham at Anfield at 3pm, with the Gakpo verdict still unpublished into kick-off. Ten of the eleven drawn here (Alisson, Araujo, Jacquet, Van Dijk, Kerkez, Szoboszlai, Mac Allister, Wirtz, Barcola and Isak) started Wednesday's win over Atletico and are available, Barcola and Kerkez both cleared as tired rather than hurt. The one open slot is the left, where Gakpo is drawn as a doubt: his Friday session settled nothing public, so Ngumoha (3 Added Minutes' pick) or a rested Munoz (SI's matchday XI) starts if he waits for the cup tie. Sports Mole goes further and rests Kerkez and Barcola too, which nothing the manager said supports. Gomez is in line for a first bench; Ekitike is a January hope, Bradley and Leoni have no date, Chiesa is out until the break.",
};
