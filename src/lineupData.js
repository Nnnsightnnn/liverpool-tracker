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
    // 4-2-3-1 below. Reviewed Thu Sep 17 (morning), after the 3-1 Carabao Cup win over
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
    // Aug 29; Newcastle drawn 2-2 away on Aug 23). Reviewed Thu Sep 17 (morning), after the cup
    // tie. The seniors rested on Tuesday return: Squawka's fixture preview predicts Alisson;
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
    // Reviewed Thu Sep 17 (morning), pointed at Bournemouth away on Sunday. A back three is the
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
// Hand-curated from RESULTS + injuryNote context, reviewed Thu Sep 17 (morning), after the
// 3-1 Carabao Cup win over Tottenham and pointed at Bournemouth away on Sunday 20 September.
// Bradley, Chiesa, Ekitike and Leoni remain out; Gomez is fit, having started and captained
// the cup tie on his first appearance since a July muscle injury.
export const PLAYER_EVIDENCE = {
  1:  "Rested for the cup · back Sunday",       // Alisson
  2:  "Held a 2.30-xG tie at 2-1",              // Mamardashvili
  3:  "Restored beside Jacquet on Sunday",      // Van Dijk
  5:  "45 planned mins + armband · bench Sun",  // Gomez
  7:  "The alternative left-back",              // Kerkez
  32: "Squawka's pick despite the reviews",      // Tsimikas
  8:  "Ball work started · still ~21 Nov",      // Bradley
  9:  "Cup RB · likely bench at the Vitality",  // Frimpong
  10: "ACL · stepping up · ~14 Oct",            // Leoni
  11: "On at half-time · starts Sunday",        // Jacquet
  12: "On loan at Levante all season",           // Ndukwe
  13: "Cup opener on 21 · the exception",       // Mac Allister
  14: "Loose in his cup hour · starts anyway",   // Gravenberch
  15: "0.03 xG volley · rested, then decisive", // Szoboszlai
  17: "Emergency fifth CB · receding need",     // Endo
  18: "5 games, no goal · Bayern talk denied",  // Wirtz
  20: "19 · 95% passing · contract unsigned",   // Nyoni
  22: "2 goals, 3 assists · covers three roles",// Gakpo
  23: "Only senior 9 · rested, now restored",   // Isak
  24: "Achilles · January at the earliest",     // Ekitike
  25: "18 · Arsenal interest reported",         // Ngumoha
  26: "Trains late Sept · back ~11 Oct",        // Chiesa
  27: "Third keeper · bench at most",            // Woodman
  28: "Squawka's right winger for Sunday",      // Munoz
  29: "A fourth league start at RB expected",   // Araujo
  30: "Played the cup · built through games",   // Barcola
  31: "20 · staking a backup-striker claim",    // Koumas
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
// (Reviewed Thu Sep 17, morning, after the 3-1 Carabao Cup win over Tottenham.)
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
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Thu Sep 17
// (morning): every rationale reset against Sunday's league fixture at Bournemouth rather than
// against the cup tie that has now been played.
export const SLOT_RATIONALE = {
  LB:   "Thu Sep 17, morning - the preview says Tsimikas and the ratings say otherwise, and nothing has broken the tie. The Greek returned from a season on loan at Roma over the summer and is Squawka's pick at left-back on Sunday, five days after he misplaced 11 of 31 passes against Fulham and was withdrawn at half-time for Kerkez, who is the alternative here. SI's verdict on the pair is that neither is currently at Iraola's standard, and January is the earliest the market can offer an opinion of its own.",
  LCB:  "Thu Sep 17, morning - Empire of the Kop expect the captain back alongside Jacquet, with Gomez on the bench. Van Dijk sat out the cup tie among ten changes, the first competitive minutes he has missed all season, because Gomez's return finally gave the department a fourth senior body. He faces a Bournemouth attack built on runners rather than a target man, which is the version of the fixture his positioning suits most and his recovery pace least.",
  RCB:  "Thu Sep 17, morning - Jacquet played forty-five of the cup after all, and looks certain for Sunday. He came on for Gomez at the interval in a change Iraola had planned before kick-off, and dealt with Marmoush on the break after a Gravenberch giveaway, three days after the goal-line clearance at Fulham that both ratings cards made the act of the afternoon, an 8 from Rousing The Kop and 8.1 on FotMob. Endo remains the emergency fifth rather than a rival.",
  RB:   "Thu Sep 17, morning - the reporting has hardened around Araujo, which settles the slot without solving it. Empire of the Kop now expect the Uruguayan restored to the right flank at the Vitality, a fourth straight league start in a position that is not his, because Bradley's knee keeps him out until late November even after this week's news that he has begun ball work. The complication is Justin Kluivert drifting inside from Bournemouth's left and leaving a runner in the space behind. Frimpong played there in the cup; Gomez is the only specialist of the three.",
  LDM:  "Thu Sep 17, morning - an hour of cup football did the pivot no favours at all. Gravenberch came on with Szoboszlai on 62 minutes and the Transfer Hub's passing networks record loose touches and wayward passing from both, including a one-two he declined with Barcola in order to carry, lost, and turned into a Tottenham counter. Duels and interceptions were better. Bournemouth force turnovers in midfield by design, which makes Sunday a harder examination of the same question. Mac Allister is the obvious alternative.",
  RDM:  "Thu Sep 17, morning - the volley was worth 0.03 expected goals and rather more than that in argument. Rested for the cup after starting every competitive game, Szoboszlai entered with Tottenham pressing at 2-1 and volleyed the third from around thirty-five yards, a strike the Transfer Hub's shot map values at 0.03 and its author calls generous. The Fulham criticism, a 3 and no ground duels won from six, has not been answered so much as drowned out.",
  LAM:  "Thu Sep 17, morning - Barcola played on Tuesday, which is itself the point of the selection. Iraola has been consistent that the club is building his physical condition through games after he arrived without a pre-season, and that all four wide forwards will play both flanks this season. Squawka's preview keeps him on the left. A Bournemouth defence that has conceded seven in four, several of them in transition, is the fixture that rewards a runner.",
  CAM:  "Thu Sep 17, morning - five competitive games without a goal contribution, and now a transfer rumour to swat away as well. Christian Falk addressed reports of a shock Bayern Munich move for Wirtz on Wednesday, which is the kind of noise that finds a marquee signing in a quiet spell. Squawka keep him at the ten; Gakpo, two goals and three assists in five, is the alternative with the better evidence. Whichever starts, this is the position Mac Allister scored from on Tuesday by arriving late instead.",
  RAM:  "Thu Sep 17, morning - none of the post-match accounts mention Munoz, which in a 3-1 is its own verdict. Squawka's preview keeps him on the right regardless, the same flank from which he headed a corner against the Fulham bar before being withdrawn on the hour, a 4 from Rousing The Kop against a 6.7 from SI. Rio Ngumoha, eighteen and the subject of reported Arsenal interest this week, is the alternative in a rotation that is four players for two places.",
  ST:   "Thu Sep 17, morning - one rest, and straight back in, because there is nobody else. Gakpo led the line in the cup and scored, which is the depth working as intended, and Koumas took a first competitive start through the middle behind him. Neither changes the arithmetic while Ekitike is out until January: Isak is the only senior centre-forward, three league goals in four, sixteen touches against Fulham, and Squawka's likeliest scorer at the Vitality. The service, not the finishing, is the standing concern.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · took the cup tie and made the save that held it, but Alisson is the league keeper" }, { playerId: 27, reason: "Woodman · third-choice, bench at most" }],
  LB:  [{ playerId: 7, reason: "Kerkez · replaced Tsimikas at half-time against Fulham; the alternative to Squawka's pick" }],
  LCB: [{ playerId: 5, reason: "Gomez · fit again and captained the cup tie; a natural centre-back if Iraola rotates the middle" }, { playerId: 29, reason: "Araujo · a centre-back by trade, currently covering right-back instead" }],
  RCB: [{ playerId: 5, reason: "Gomez · the fourth senior centre-back, whose return is what allowed Tuesday's rest" }, { playerId: 17, reason: "Endo · took the cup minutes at centre-half; the emergency fifth" }],
  RB:  [{ playerId: 9, reason: "Frimpong · played right-back in the cup and is the natural alternative against Kluivert" }, { playerId: 5, reason: "Gomez · the only specialist right-back available with Bradley out until late November" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · scored the cup opener from the edge of the box; the midfielder nobody drops" }, { playerId: 17, reason: "Endo · a holding midfielder by trade, fourth in the queue" }],
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
  generated_at: "2026-09-17T12:30:00Z",
  reason: "Thu Sep 17, morning, three days before the league and the morning after the fourth-round draw. This draw looks forward to Bournemouth away on Sunday 20 September, 2pm at the Vitality Stadium, live on Sky Sports Main Event, and to Andoni Iraola's first return to the club he managed until the summer. Confidence holds at Medium: a league fixture following a rotated midweek is among the most predictable selections a manager makes, with the rested seniors, Alisson, Van Dijk, Jacquet, Szoboszlai, Wirtz and Isak, all due back, but Iraola has not yet given his team news and the right-back slot is genuinely unsettled. The XI follows Squawka's published fixture preview: Alisson; Araujo, Van Dijk, Jacquet, Tsimikas; Gravenberch, Szoboszlai; Barcola, Wirtz, Munoz; Isak. Empire of the Kop's post-cup read agrees on the back line, expecting Van Dijk and Jacquet at centre-back with Araujo restored to the right and Joe Gomez on the bench. Gomez played forty-five planned minutes of the cup tie and wore the armband, withdrawn at half-time by design rather than through any setback, which is why he is treated here as cover rather than a starter. Bradley (knee, ~21 Nov, now doing individual ball work per the Daily Mail) and Ekitike (Achilles, January) stay out, with Chiesa aiming to resume training at the end of this month and Leoni stepping up his ACL recovery. Bournemouth are fifteenth and winless in the league under Marco Rose, the first side in Premier League history to lead in each of their opening four fixtures without winning any, though they took a first win of any kind on Tuesday, 4-0 against Lincoln in the cup. They remain without Julian Araujo, Eli Kroupi, Amine Adli and Veljko Milosavljevic.",
};
