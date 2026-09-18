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
    // 4-2-3-1 below. Reviewed Fri Sep 18 (morning), after a clean Thursday session at the AXA
    // (no new injuries, 25 in the group per This Is Anfield) and the 3-1 Carabao Cup win over
    // Tottenham and pointed forward at Bournemouth away, Sunday 20 September, 2pm, Vitality
    // Stadium, Sky Sports Main Event. The cup XI is spent; this is a league XI, which means
    // the rested seniors return. Squawka's own preview for the fixture (published 14 Sep)
    // predicts Alisson; Araujo, Van Dijk, Jacquet, Tsimikas; Gravenberch, Szoboszlai; Barcola,
    // Wirtz, Munoz; Isak. Tsimikas, back from a loan at Roma, is Squawka's pick at left-back; Kerkez is the alternative.
    // Out: Ekitike (Achilles, January a hope), Bradley (knee, ~21 Nov), Leoni (ACL, ~14 Oct
    // target) and Chiesa (back, ~11 Oct target). Gomez is now fit, having started and captained
    // the cup tie, and is the alternative at both right-back and centre-back.
    defaultXI: {
      GK: 1,    // Alisson (rested for the cup, restored for the league)
      LB: 32,   // Tsimikas (Squawka's predicted starter, back from Roma; Kerkez the alternative)
      LCB: 3,   // Van Dijk (rested Tuesday, back for the league)
      RCB: 11,  // Jacquet (rested Tuesday; the cleared shot off the line at Fulham before that)
      RB: 29,   // Araujo (a fourth straight league start out of position, Bradley out to Nov)
      LCM: 14,  // Gravenberch (the pivot Squawka's preview restores)
      CM: 13,   // Mac Allister (scored in the cup; the midfielder nobody drops)
      RCM: 15,  // Szoboszlai (the thirty-yard volley off the bench earns the start back)
      LW: 30,   // Barcola (left, per Squawka's predicted XI)
      ST: 23,   // Isak (three league goals; Squawka's likeliest scorer at the Vitality)
      RW: 28,   // Munoz (right, per Squawka's predicted XI)
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
    // The default shape, the 4-2-3-1 Iraola has used in every league game, now pointed at
    // Bournemouth away on Sunday 20 September, 2pm, Vitality Stadium (Tottenham beaten 3-1 in
    // the Carabao Cup at Anfield on Sep 15 with ten changes; Fulham drawn 0-0 on Sep 12;
    // Atletico beaten 2-1 on Sep 9; Ipswich beaten 2-0 away on Sep 4; Forest drawn 2-2 on
    // Aug 29; Newcastle drawn 2-2 away on Aug 23). Reviewed Fri Sep 18 (morning), after Thursday's
    // session: no new injuries, 25 trained, and Van Dijk, Wirtz and Tsimikas back in the group
    // after their night off. The seniors rested on Tuesday return: Squawka's fixture preview predicts Alisson;
    // Araujo, Van Dijk, Jacquet, Tsimikas; Gravenberch, Szoboszlai; Barcola, Wirtz, Munoz; Isak,
    // with Tsimikas, back from Roma, now the predicted starter and Kerkez the alternative. The live selection questions
    // are the right-back (Araujo out of position, Frimpong and a now-fit Gomez the alternatives)
    // and whether Gakpo, who scored on Tuesday, displaces Wirtz at the ten.
    defaultXI: {
      GK: 1,    // Alisson (back for the league after Mamardashvili took the cup)
      LB: 32,   // Tsimikas (Squawka's pick at left-back, back from Roma; Kerkez the alternative)
      LCB: 3,   // Van Dijk (rested Tuesday, restored here)
      RCB: 11,  // Jacquet (rested Tuesday, restored here)
      RB: 29,   // Araujo (out of position, and facing Kluivert cutting in from that side)
      LDM: 14,  // Gravenberch (Squawka's predicted pivot)
      RDM: 15,  // Szoboszlai (rested Tuesday, then scored from thirty yards off the bench)
      LAM: 30,  // Barcola (left, per Squawka's predicted XI)
      CAM: 18,  // Wirtz (Squawka keep him at the ten; five games without a goal contribution)
      RAM: 28,  // Munoz (right, per Squawka's predicted XI)
      ST: 23,   // Isak (three league goals · Squawka's likeliest scorer on Sunday)
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
    // Reviewed Fri Sep 18 (morning), pointed at Bournemouth away on Sunday. A back three is the
    // shape that would most directly answer the fixture's problem, because it removes the need
    // for a specialist right-back and lets Frimpong attack the flank as a wing-back with a
    // recognised centre-half inside him. Gomez, fit again after captaining the cup tie, takes
    // the third centre-back slot beside Van Dijk and Jacquet. Alisson in goal, Mac Allister and
    // Gravenberch in midfield, Isak through the middle. Default is the 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (restored for the league)
      LCB: 3,   // Van Dijk (rested Tuesday, back here)
      CCB: 11,  // Jacquet (central in a three, the recovery pace the shape wants)
      RCB: 5,   // Gomez (fit again · captained the cup tie on his first appearance since July)
      LWB: 7,   // Kerkez (preferred as the attacking wing-back here; Tsimikas the alternative)
      LCM: 13,  // Mac Allister (scored the cup opener · the midfielder nobody drops)
      RCM: 14,  // Gravenberch (the deeper half of Squawka's predicted pivot)
      RWB: 9,   // Frimpong (RWB · the shape that uses him properly against Kluivert)
      LW: 30,   // Barcola (left, per Squawka's predicted XI)
      ST: 23,   // Isak (the senior nine, restored after a cup rest)
      RW: 22,   // Gakpo (right · two goals and three assists in five appearances)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Fri Sep 18 (morning), after a clean Thursday
// session at the AXA and the 3-1 Carabao Cup win over Tottenham and pointed at Bournemouth away on Sunday 20 September.
// Bradley, Chiesa, Ekitike and Leoni remain out; Gomez is fit, having started and captained
// the cup tie on his first appearance since a July muscle injury.
export const PLAYER_EVIDENCE = {
  1:  "Trained Thu · restored at the Vitality",  // Alisson
  2:  "Cup keeper · back to the bench",         // Mamardashvili
  3:  "Back in the group Thu · starts Sunday",  // Van Dijk
  5:  "Trained Thu · cover, not a starter",     // Gomez
  7:  "Second in an argument nobody won",       // Kerkez
  32: "Back in the group · preview's pick",      // Tsimikas
  8:  "Individual work · outside the 25",       // Bradley
  9:  "One of three answers at right-back",     // Frimpong
  10: "ACL · group work in the break",          // Leoni
  11: "Least debated name on the sheet",        // Jacquet
  12: "Levante · outside every squad",           // Ndukwe
  13: "Named by Iraola among the picked",      // Mac Allister
  14: "Named among those getting minutes",      // Gravenberch
  15: "Talked up the kids · starts Sunday",     // Szoboszlai
  17: "Up for sale · January exit sanctioned",  // Endo
  18: "In Klopp's first Germany squad",         // Wirtz
  20: "Named first by his manager · unsigned",  // Nyoni
  22: "Three positions · the squad's answer",   // Gakpo
  23: "Restored · 16 touches v Fulham",         // Isak
  24: "Achilles · no queue in his position",    // Ekitike
  25: "New deal wanted inside a month",         // Ngumoha
  26: "Outside the 25 · trains late Sept",      // Chiesa
  27: "Third of three · order unchanged",        // Woodman
  28: "The preview's pick, nobody else's",      // Munoz
  29: "Fourth start out of position expected", // Araujo
  30: "Built through games · left on Sunday",   // Barcola
  31: "Praised by Szoboszlai · POTM in cup",    // Koumas
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in every league game,
// now pointed at Bournemouth away on Sunday 20 September, 2pm at the Vitality Stadium. The cup
// XI has been retired; this is a league selection with the rested seniors restored, drawn on
// Squawka's fixture preview of 14 September: Alisson in goal, Van Dijk and Jacquet at
// centre-back, Araujo out of position at right-back with Bradley out until late November,
// Gravenberch and Szoboszlai the pivot, Wirtz at the ten, Isak through the middle.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS AT BOURNEMOUTH on
// Sunday 20 September. Confidence is higher than it was for the cup tie, because a league
// fixture after a rotated midweek is the most predictable selection a manager makes, but
// Iraola has not yet spoken and the right-back slot is genuinely open.
// (Reviewed Fri Sep 18, morning, after Thursday's injury-free session at the AXA.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · rested for the cup, first choice in the league all season
  LB:  "Low",       // Tsimikas · Squawka's pick, back from Roma; Kerkez the alternative
  LCB: "High",      // Van Dijk · every league minute this season, rested only for the cup
  RCB: "High",      // Jacquet · every league minute this season, on at half-time in the cup
  RB:  "Low",       // Araujo · out of position, with Frimpong and a now-fit Gomez both live
  LDM: "Medium",    // Gravenberch · Squawka's pick, but the pivot is the department under review
  RDM: "Medium",    // Szoboszlai · rested Tuesday, then scored from thirty-five yards off the bench
  LAM: "Medium",    // Barcola · Squawka's pick on the left; four wingers for two flanks
  CAM: "Low",       // Wirtz · five games without a goal contribution, and Gakpo just scored
  RAM: "Medium",    // Munoz · Squawka's pick on the right
  ST:  "High",      // Isak · rested in the cup, the only senior centre-forward available
};


// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Fri Sep 18
// (morning): every rationale carried against Thursday's training report (no new injuries, 25 in
// the group) and the day's squad news, with Sunday's league fixture at Bournemouth still the target.
export const SLOT_RATIONALE = {
  LB:   "Fri Sep 18, morning - he was back on the grass on Thursday, which settles his availability and nothing else. This Is Anfield place Tsimikas among the twenty-five who trained after his night off against Tottenham, and Squawka's preview still predicts him at left-back on Sunday. The Fulham evidence argues the other way: 11 of 31 passes misplaced and a half-time withdrawal for Kerkez, who is the alternative here and drew a 5 of his own. SI's verdict is that neither is currently at Iraola's standard, and the market cannot offer a third opinion until January.",
  LCB:  "Fri Sep 18, morning - back among the group, and back in the side. Van Dijk was one of three seniors returned to training on Thursday after being rested for the cup, and Empire of the Kop expect him alongside Jacquet at the Vitality with Gomez on the bench. He has played every league minute of the season at thirty-five, because for seven weeks the department had no fourth body. Bournemouth attack with runners rather than a target man, which asks more of his positioning than of his pace.",
  RCB:  "Fri Sep 18, morning - the one slot on this pitch nobody is arguing about. Jacquet trained on Thursday and is expected to start, two days after replacing Gomez at the interval by design and snuffing out the break that followed a Gravenberch giveaway, and five days after the goal-line clearance at Fulham that both ratings cards made the act of the afternoon, an 8 from Rousing The Kop and 8.1 on FotMob. The fifth centre-back behind him, Wataru Endo, has now been put up for sale for January.",
  RB:   "Fri Sep 18, morning - three names, no specialist, and a fixture aimed directly at the gap. Empire of the Kop expect Araujo restored on the right at the Vitality, a fourth straight league start out of position, with Frimpong and a now-fit Gomez the alternatives and Bradley out until late November even after this week's report that he has begun individual ball work. Bournemouth's clearest route to goal is Justin Kluivert drifting infield from their left and a runner attacking the space that leaves. Iraola takes his first questions on it at half past one on Friday.",
  LDM:  "Fri Sep 18, morning - his manager named him among the four getting minutes, which is a selection and a defence in one sentence. Explaining why Endo is being sold, Iraola listed Nyoni, Gravenberch, Mac Allister and Szoboszlai as the midfielders he is picking. Gravenberch's own cup hour did not help the case: the Transfer Hub's passing networks record loose touches and a declined one-two with Barcola that became a Tottenham counter, though his duels and interceptions were better. Bournemouth force turnovers by design, which makes Sunday the literal version of the question.",
  RDM:  "Fri Sep 18, morning - he spent Tuesday's aftermath talking about somebody else, which is its own kind of confidence. Szoboszlai named Koumas and James McConnell as two who deserve to play and said they had made the choice 'hard' for Iraola, having himself come off the bench to volley the third from thirty-five yards, a strike the Transfer Hub's shot map values at 0.03 expected goals. He trained on Thursday and is named among the four midfielders the manager is selecting. The Fulham criticism has not been answered so much as drowned out.",
  LAM:  "Fri Sep 18, morning - a runner, and a defence that concedes to runners. Barcola trained on Thursday and is Squawka's pick on the left for Sunday, still being built through games after arriving without a pre-season, a framing Iraola has repeated without variation. All four wide forwards will play both flanks this season. Bournemouth have shipped seven in four, several of them in transition, which is the specific fixture a player in his condition can affect without needing ninety minutes.",
  CAM:  "Fri Sep 18, morning - picked for Germany on Thursday, and still looking for a first contribution here. Jurgen Klopp named Wirtz in his first Germany squad, forty-four players across two groups, with the established names expected to play no more than two of the four Nations League fixtures. Before that he has Bournemouth: five competitive games without a goal or an assist, Squawka keeping him at the ten, and Gakpo, two goals and three assists in five, carrying the better evidence from the bench.",
  RAM:  "Fri Sep 18, morning - the preview picks him and the match reports do not mention him, which is a strange way to hold a place. Munoz trained on Thursday and remains Squawka's choice on the right, the flank from which he headed a corner against the Fulham bar before being withdrawn on the hour, a 4 from Rousing The Kop against a 6.7 from SI. Rio Ngumoha, whom the club are trying to tie to a new long-term deal inside a month, is the alternative in a rotation of four for two places.",
  ST:   "Fri Sep 18, morning - restored after one night off, because the alternative is a twenty-year-old and a winger. Isak trained on Thursday and comes back at the Vitality, three league goals in four and Squawka's likeliest scorer on Sunday. Gakpo led the line in the cup and scored; Koumas started through the middle and took the player-of-the-match award. Neither changes the arithmetic while Ekitike is out until January. The recurring number is sixteen touches against Fulham, the second fewest by a Liverpool outfielder on record per the BBC, and it is a service problem rather than a finishing one.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · took the cup tie and made the save that held it, but Alisson is the league keeper" }, { playerId: 27, reason: "Woodman · third-choice, bench at most" }],
  LB:  [{ playerId: 7, reason: "Kerkez · replaced Tsimikas at half-time against Fulham; the alternative to Squawka's pick" }],
  LCB: [{ playerId: 5, reason: "Gomez · fit again and captained the cup tie; a natural centre-back if Iraola rotates the middle" }, { playerId: 29, reason: "Araujo · a centre-back by trade, currently covering right-back instead" }],
  RCB: [{ playerId: 5, reason: "Gomez · the fourth senior centre-back, whose return is what allowed Tuesday's rest" }, { playerId: 17, reason: "Endo · the emergency fifth centre-half, and on the market from January" }],
  RB:  [{ playerId: 9, reason: "Frimpong · played right-back in the cup and is the natural alternative against Kluivert" }, { playerId: 5, reason: "Gomez · the only specialist right-back available with Bradley out until late November" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · scored the cup opener from the edge of the box; the midfielder nobody drops" }, { playerId: 17, reason: "Endo · a holding midfielder by trade, and put up for sale on Thursday" }],
  RDM: [{ playerId: 13, reason: "Mac Allister · can take either side of the pivot if Iraola wants a senior passer deeper" }, { playerId: 20, reason: "Nyoni · 19 · the previews had him in the cup XI and the contract is still unsigned" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · 18 · the previews had him starting the cup on this flank" }, { playerId: 22, reason: "Gakpo · scored on Tuesday and can play left, centre or right" }],
  CAM: [{ playerId: 22, reason: "Gakpo · two goals and three assists in five; the better evidence than the incumbent" }, { playerId: 15, reason: "Szoboszlai · has played the ten before; drawn deeper here" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · the wide rotation is four players for two places and both flanks swap" }, { playerId: 9, reason: "Frimpong · played the right wing after coming on against Atletico" }],
  ST:  [{ playerId: 22, reason: "Gakpo · led the line and scored in the cup; the first cover while Ekitike is out" }, { playerId: 31, reason: "Koumas · started the cup tie through the middle; the false-nine option" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-09-18T08:30:00Z",
  reason: "Fri Sep 18, morning, two days before the league and hours before the manager speaks. This draw looks forward to Bournemouth away on Sunday 20 September, 2pm at the Vitality Stadium, live on Sky Sports Main Event, and to Andoni Iraola's first return to the club he managed for three years and left in June. Confidence holds at Medium. Thursday's session at the AXA produced the best possible input, a clean bill: This Is Anfield count twenty-five in the group with no new injuries, and place Van Dijk, Wirtz and Tsimikas among them after the night off they were given for the cup. Joe Gomez trained too, two days after forty-five planned minutes and the armband, and every reading of Sunday has him on the bench rather than in the XI. What still holds the confidence short of High is that Iraola has not yet given his team news, he does so at 1.30pm on Friday, and the right-back slot is genuinely open between Araujo out of position, Frimpong and Gomez. The XI follows Squawka's published fixture preview: Alisson; Araujo, Van Dijk, Jacquet, Tsimikas; Gravenberch, Szoboszlai; Barcola, Wirtz, Munoz; Isak, with Empire of the Kop's post-cup read agreeing on the back line. Out: Bradley (knee, ~21 Nov, now doing individual ball work), Ekitike (Achilles, January at the earliest), Leoni (ACL, due to rejoin group training in the break) and Chiesa (aiming to resume training at the end of September). Wataru Endo is available and was named in none of it: the club decided on Thursday to put him up for sale in January, with Iraola explaining that Nyoni, Gravenberch, Mac Allister and Szoboszlai are ahead of him. Bournemouth are fifteenth, winless in the league under Marco Rose and the first side in Premier League history to lead in each of their opening four fixtures without winning any, though they beat Lincoln 4-0 in the cup on Tuesday. They are without Julian Araujo, Eli Kroupi, Amine Adli and Veljko Milosavljevic, with Tyler Adams also appearing on the injury list this week.",
};
