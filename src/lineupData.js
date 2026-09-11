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
    // 4-2-3-1 below. Reviewed Fri Sep 11 (matchday-eve, Friday evening, after the full press conference and Isak's interview), after Liverpool 2-1 Atletico Madrid at
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
    // Aug 29; Newcastle drawn 2-2 away on Aug 23). Reviewed Fri Sep 11 (matchday-eve, Friday evening, after the full press conference and Isak's interview): the XI is
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
    // Reviewed Fri Sep 11 (matchday-eve, Friday evening, after the full press conference and Isak's interview): Araujo moves inside to make a back three of natural
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
// Hand-curated from RESULTS + injuryNote context, reviewed Fri Sep 11 (matchday-eve, after the noon press conference), after
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
  1:  "Starts Sat · fined, and at home for the break", // Alisson
  2:  "Unused vs Atletico · Spurs cup tie his shot",    // Mamardashvili
  3:  "90 mins vs Atletico · a 5, loose early",         // Van Dijk
  5:  "Full training · first bench likely vs Fulham",     // Gomez
  7:  "Cleared · Sports Mole would rest him for Spurs",   // Kerkez
  8:  "Knee · no date · in UCL squad",                  // Bradley
  9:  "On at 59 · goal disallowed at 89",               // Frimpong
  10: "ACL · group training at the break",              // Leoni
  11: "UCL debut, a 7 · better of the two CBs",         // Jacquet
  12: "Loaned to Levante for the season",               // Ndukwe
  13: "Winner from 20 yards · man of the match",        // Mac Allister
  14: "Benched 3 games · Sports Mole feature · a 4",     // Gravenberch
  15: "Scored the equaliser · 8.5 · deal to 2031",      // Szoboszlai
  17: "Not in the UCL squad · PL depth only",           // Endo
  18: "Ran the game · still 0 G/A in four",             // Wirtz
  20: "Unused vs Atletico · deal still pending",        // Nyoni
  22: "Fri pm test · no verdict published",          // Gakpo
  23: "332 mins in 4 · 'keep this rhythm'",         // Isak
  24: "Achilles · January UCL games 'a hope'",     // Ekitike
  25: "Both Friday XIs start him · Gakpo unresolved", // Ngumoha
  26: "Back problem · off the UCL list",                // Chiesa
  27: "On the UCL bench as third GK · unused",          // Woodman
  28: "Sports Mole starts him · Ngumoha the rival",     // Munoz
  29: "Language the hurdle, says Iraola · RB",      // Araujo
  30: "Isak: 'a big signing' · cleared, 3rd in 9 days", // Barcola
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
// (Reviewed Fri Sep 11, matchday-eve, Friday evening: after Liverpool 2-1 Atletico Madrid. The back four and the pivot
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
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Fri Sep 11 (matchday-eve, Friday evening, after the full press conference and Isak's interview):
// every rationale rewritten after Liverpool 2-1 Atletico Madrid and pointed at Fulham on Saturday.
export const SLOT_RATIONALE = {
  LB:  "Fri Sep 11, evening — cleared, and the only wrinkle is Sports Mole's Friday XI resting him for Tsimikas with the cup tie three days later, which nothing Iraola said at midday supports. Iraola's fitness update grouped Kerkez with Barcola as tired rather than hurt after Wednesday, when he came off on 88 and afterwards tied the cramp to the pressing. On the night he was beaten by Llorente for the opener, Rousing The Kop's 3, then won the ball from Lee for the move Szoboszlai finished on 40. With Robertson gone there is no alternative, so he starts against Fulham with Bobb and King running at him; the question is form and legs, not selection.",
  LCB: "Fri Sep 11, evening — the rest he cannot yet have gets closer: Gomez is in line for a first bench per 3 Added Minutes. Ninety minutes again on Wednesday, a win, and a 5 from Rousing The Kop for a couple of loose first-half passes that are not like him. Van Dijk and Jacquet were beaten once as a pair, by Llorente's run behind Kerkez, and otherwise held a side that made 0.81 expected goals per Opta. Three games in seven days now, Fulham on Saturday and Tottenham in the cup on Tuesday, and at 35 he is the one centre-back the club would rather rest and cannot until Gomez is passed fit.",
  RCB: "Fri Sep 11, evening — Gomez is now in line for a first bench per 3 Added Minutes, so the competition arrives on Saturday rather than next week. On Wednesday Jacquet was the better of the two centre-backs by Rousing The Kop's reading, a 7 for one read of a cut-back in the box during a dangerous second-half move. Jacquet has started all four competitive games beside Van Dijk. Gomez has trained fully since Wednesday but was not in the European squad, so Saturday's bench is the first step and the Tottenham cup tie on Tuesday the likelier first minutes; Fulham's Garcia and King are Saturday's examination.",
  RB:  "Fri Sep 11, evening — the shirt is settled, and Warnock told TEAMtalk on Friday the move is permanent, Jacquet inside beside Van Dijk in something close to a back three. Araujo's second start at right-back brought an 8 from Rousing The Kop, a full-length press that had Anfield on its feet and the through-the-legs flick that made Szoboszlai's equaliser; The 4th Official gave a 7 for the defensive work. Frimpong came on for Barcola at 59 in an advanced role and had a goal disallowed at 89, which is his role for now. Gomez is the third body once passed fit; Bradley has no date.",
  LDM: "Fri Sep 11, evening — Sports Mole's Thursday feature makes him the reason Gravenberch has been benched three games running, positioning without the ball the argument. He said the club will not renew him on Tuesday and won the game from twenty yards on Wednesday, with his left foot, his name chorused as he came off. Mac Allister was Rousing The Kop's man of the match on an 8, a 9 from Liverpool.com, booked early and provoked for a second he did not give them; Opta counted no player winning more duels than his five. Every preview will start him against Fulham. SI's earlier pencilling of Gravenberch for this fixture now reads as rotation with the cup tie on Tuesday.",
  RDM: "Fri Sep 11, evening — the man Sports Mole's feature says keeps Gravenberch on the bench, with Mac Allister. The equaliser on 40, rolled past Oblak after the backheel of Araujo, whose right-back move Warnock now calls permanent, and an 8.5 at the top of The 4th Official's ratings. Szoboszlai has ten Champions League goal involvements since the start of last season per Opta, double any other Liverpool player; Rousing The Kop's 6 marked the wrong options on the break. Signed to 2031 and started every game. Gravenberch, a 4 off the bench, is the alternative and the likelier starter in the cup.",
  LAM: "Fri Sep 11, evening — drawn here on a verdict that has not been published. The afternoon session Iraola said would decide Saturday or Tuesday came and went without a club update by the evening; Sports Mole's 3pm listing keeps Gakpo doubtful with the adductor niggles, and 3 Added Minutes had him not yet back in a full session as of Friday morning. A goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes, which is why the whole front line hangs on his fitness. If he is passed fit he starts here; if not, Ngumoha or a rested Munoz does, with Tottenham in the cup three days later.",
  CAM: "Fri Sep 11, evening — Barcola, whom he played through on Wednesday, was cleared again at midday, so the pass of the night has the same target on Saturday and still no assist to show for it. Wirtz sent Barcola clean through four minutes into the second half and watched the finish roll wide, pressed and won the ball high in a way Rousing The Kop called underrated, ran the game for a spell and had his own shot saved by Oblak; a 7 from both fan sites. Four games without a goal or assist now. Fulham's mid-block on Saturday is the kind he was signed to unlock.",
  RAM: "Fri Sep 11, evening — cleared at noon and vouched for by Isak in the afternoon, 'a big signing for us', though Sports Mole's 3pm listing still files him doubtful with cramp. Iraola's full Q&A tied Wednesday's tightness to a player who has not had a proper pre-season and said those with less preparation are not yet at their best. On his first start against Atletico, on the right, he missed two clear chances against Oblak and went off at 59. Munoz, who came on and tested Oblak, is the rested alternative if a third involvement in nine days is judged too many with the cup tie Tuesday.",
  ST:  "Fri Sep 11, evening — 332 minutes in four starts and, per the club's Friday interview, a striker asking only to keep the rhythm; Ekitike is now a January hope rather than a blank, so Isak remains the only fit senior nine, a first Anfield goal in red still owed and a third straight league game with a goal, per Opta, a first since January 2025. Isak led the line for the ninety against Atletico's back five, had an effort blocked by Le Normand and supplied Wirtz for a saved shot while offside himself; a 5 from Rousing The Kop, a 7 from The 4th Official. Three in three in the league, none yet in Europe. With Ekitike out and the false-nine fallback, Gakpo, a doubt, he starts against Fulham and probably Tottenham too.",
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
  generated_at: "2026-09-11T22:20:00Z",
  reason: "Fri Sep 11, evening, on the eve of Fulham at Anfield on Saturday 12 September, 3pm, with the Gakpo verdict from the afternoon session unpublished. Ten of the eleven drawn here (Alisson, Araujo, Jacquet, Van Dijk, Kerkez, Szoboszlai, Mac Allister, Wirtz, Barcola and Isak) started Wednesday's win over Atletico and are available, Barcola cleared a second time at midday ('no injury'). The one open slot is the left, where Gakpo is drawn as a doubt: his afternoon session was to settle Saturday or Tuesday and nothing had been published by the evening, so Ngumoha (3 Added Minutes' pick) or a rested Munoz (Sports Mole's) starts if he waits. Sports Mole's Friday XI goes further and rests Kerkez and Barcola for Tsimikas and Munoz with the cup tie on Tuesday, which nothing the manager said supports. Gomez is in line for a first bench; Ekitike now has January as a hope per Iraola, Bradley and Leoni have no date; Chiesa is out until the break.",
};
