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
    // 4-2-3-1 below. Reviewed Mon Sep 14 (morning), the day before Tottenham visit Anfield
    // in the Carabao Cup third round on Tuesday 15 September, 8pm, Andy Madley refereeing.
    // The reporting (This Is Anfield, Sports Mole) has Iraola resting Van Dijk, Isak and
    // Wirtz and rotating hard: this shape draws the expected cup XI in a three-man midfield,
    // Mamardashvili in goal, Araujo shifted to centre-back beside Jacquet to rest the captain,
    // Frimpong at right-back, Mac Allister, Nyoni and Gravenberch in midfield, Gakpo leading
    // the line as a false nine with Barcola and Munoz wide. Out: Ekitike (Achilles, January
    // a hope), Bradley (knee, ~21 Nov), Leoni (ACL, ~14 Oct target) and Chiesa (back, ~11 Oct
    // target). Gomez back in full training, a major doubt but in line for a first appearance.
    defaultXI: {
      GK: 2,    // Mamardashvili (the cup is the deputy's competition · Alisson rested)
      LB: 7,    // Kerkez (the only senior left-back · Tsimikas hooked at HT Sat)
      LCB: 29,  // Araujo (shifted inside to rest Van Dijk · natural centre-back)
      RCB: 11,  // Jacquet (man of the match Sat · keeps his place)
      RB: 9,    // Frimpong (the better late change Sat · likely cup start)
      LCM: 13,  // Mac Allister ('undroppable' · anchors the changed midfield)
      CM: 20,   // Nyoni (17 · tipped to start the cup)
      RCM: 14,  // Gravenberch (rotation pivot · a 3 Sat, likelier for the cup)
      LW: 30,   // Barcola (managed · likely involved on the left)
      ST: 22,   // Gakpo (false nine · Isak rested)
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
    // Reviewed Mon Sep 14 (morning): the XI is a CUP selection drawn at low confidence, and
    // now reflects the reporting that Iraola will rest Van Dijk, Isak and Wirtz (This Is
    // Anfield) and hand starts to fringe and academy names. Koumas, tipped by Sports Mole as
    // the number 10, and Tsimikas at left-back are not in the 26-man tracker squad, so the
    // tool draws the nearest valid picks: Mamardashvili in goal, Araujo shifted to centre-back
    // to rest the captain, Frimpong at right-back, Mac Allister pushed to the ten with a
    // Gravenberch-Nyoni pivot, Gakpo a false nine and Barcola and Munoz wide. Gomez, back in
    // full training and a major doubt, is drawn among the alternatives rather than started.
    // Out: Ekitike (Achilles, January the earliest), Bradley (knee, ~21 Nov), Leoni (ACL,
    // ~14 Oct target) and Chiesa (back, ~11 Oct target), the last two back in group training
    // during the September break.
    defaultXI: {
      GK: 2,    // Mamardashvili (the deputy's competition · Alisson rested)
      LB: 7,    // Kerkez (the only senior left-back · Tsimikas not in the tracker squad)
      LCB: 29,  // Araujo (shifted inside to rest Van Dijk · natural centre-back)
      RCB: 11,  // Jacquet (8, man of the match Sat · keeps his place)
      RB: 9,    // Frimpong (on at 72 Sat, the better late change · likely cup start)
      LDM: 14,  // Gravenberch (rotation pivot · a 3 Sat, likelier for the cup than the league)
      RDM: 20,  // Nyoni (17 · unused Sat · tipped to start the cup)
      LAM: 30,  // Barcola (managed, not rested · Iraola building his minutes)
      CAM: 13,  // Mac Allister (pushed to the ten with Wirtz rested · 'undroppable')
      RAM: 28,  // Munoz (hit the bar Sat · the most natural right-wing option per SI)
      ST: 22,   // Gakpo (false nine · Isak rested · the only listed cover for the nine)
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
    // Reviewed Mon Sep 14 (morning), before Tottenham in the cup on Tuesday: a rested back
    // line with the captain out, Araujo, Jacquet and Endo the makeshift third centre-half Sports Mole expects, Kerkez
    // and Frimpong as wing-backs, Mac Allister and Nyoni in midfield, Gakpo, Munoz and Barcola
    // across the front, Mamardashvili in goal. Gomez is a major doubt; if he cannot start,
    // Endo is the makeshift centre-half Sports Mole expects. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 2,    // Mamardashvili (cup selection)
      LCB: 29,  // Araujo (natural CB, moved inside · rests Van Dijk)
      CCB: 11,  // Jacquet (anchors the back three · man of the match Sat)
      RCB: 17,  // Endo (makeshift centre-half Sports Mole expects if Gomez is not risked)
      LWB: 7,   // Kerkez (LWB · the only senior left-back)
      LCM: 13,  // Mac Allister ('undroppable')
      RCM: 20,  // Nyoni (17 · tipped to start the cup)
      RWB: 9,   // Frimpong (RWB · likely cup start)
      LW: 30,   // Barcola (managed · likely involved)
      ST: 22,   // Gakpo (false nine · Isak rested)
      RW: 28,   // Munoz (the tired alternatives make him a starter)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Mon Sep 14 (morning), the day
// before Tottenham at Anfield in the Carabao Cup, Tuesday 15 September, 8pm. The reporting
// (This Is Anfield, Sports Mole) has Iraola resting Van Dijk, Isak and Wirtz and handing
// starts to the likes of Koumas and Nyoni; Gomez is back in full training and in line for a
// first appearance of the season. Out: Ekitike (Achilles, January a hope), Bradley (knee,
// ~21 Nov), Leoni (ACL, ~14 Oct) and Chiesa (back, ~11 Oct), the last two due back in group
// training over the international break. Endo and Chiesa are not in the UCL squad; both are
// eligible for the cup.
export const PLAYER_EVIDENCE = {
  1:  "Rested for the cup · Mamardashvili in", // Alisson
  2:  "Starts the cup · unused Saturday",       // Mamardashvili
  3:  "Rested for the cup · plays on at 35",    // Van Dijk
  5:  "Back in training · in line Tue",         // Gomez
  7:  "Only senior LB · on at HT Sat",          // Kerkez
  8:  "Knee · out until ~21 Nov",               // Bradley
  9:  "Likely cup start at right-back",         // Frimpong
  10: "ACL · ~14 Oct · trains at the break",    // Leoni
  11: "8 · MOTM · keeps his place",             // Jacquet
  12: "On loan at Levante for the season",      // Ndukwe
  13: "'Undroppable' · pushed to the ten",      // Mac Allister
  14: "Rotation pivot for the cup · a 3 Sat",   // Gravenberch
  15: "A 3 Sat · rested for the cup",           // Szoboszlai
  17: "First minutes of the season?",           // Endo
  18: "Rested for the cup · 0 G/A in 5",        // Wirtz
  20: "17 · tipped to start the cup",           // Nyoni
  22: "Leads the line · Isak rested",           // Gakpo
  23: "Rested · 3 in 4, run ends at two",       // Isak
  24: "Achilles · later than the break",        // Ekitike
  25: "Wide option in the rotation · a 4 Sat",  // Ngumoha
  26: "Back · ~11 Oct return target",           // Chiesa
  27: "Third keeper · bench at most",           // Woodman
  28: "Likely cup start · hit the bar Sat",     // Munoz
  29: "Shifts to CB to rest Van Dijk",          // Araujo
  30: "Managed · likely cup start on the left", // Barcola
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in all five
// competitive games, now pointed at Tottenham at Anfield in the Carabao Cup on Tuesday
// 15 September, 8pm. The XI is a cup selection, drawn LOW, reflecting the expected heavy
// rotation: Mamardashvili in goal, Araujo shifted to centre-back to rest Van Dijk, Frimpong
// at right-back, Mac Allister pushed to the ten with a Gravenberch-Nyoni pivot, Gakpo a false
// nine with Isak rested.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. Five games into the season these read as confidence that the slot's
// occupant STARTS TUESDAY'S CUP TIE, which is a lower bar of certainty than the league:
// Iraola rotated three for Fulham and pulled all three by the hour, so how hard he rotates
// 72 hours later, with Bournemouth five days after that, is still a guess.
// (Reviewed Mon Sep 14, morning. Tottenham at Anfield, Carabao Cup third round,
// Tuesday 15 September, 8pm.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Mamardashvili · the cup is the deputy's competition · Alisson rested
  LB:  "Medium", // Kerkez · the only senior left-back with Tsimikas out of the tracker squad
  LCB: "Low",    // Araujo shifted inside to rest Van Dijk · could stay at right-back instead
  RCB: "High",   // Jacquet · man of the match on Saturday · the one starter nobody drops
  RB:  "Medium", // Frimpong · the better late change on Saturday · Araujo the alternative
  LDM: "Medium", // Gravenberch · the rotation pivot for the cup · a 3 on Saturday
  RDM: "Low",    // Nyoni · 17 · tipped to start but unproven
  LAM: "Medium", // Barcola · managed rather than rested · Iraola building his minutes
  CAM: "Low",    // Mac Allister pushed to the ten with Wirtz rested · Koumas the reported 10
  RAM: "Low",    // Munoz · Ngumoha the alternative, both rotated
  ST:  "Medium", // Gakpo · the false-nine cover with Isak rested · no other listed nine
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Mon Sep 14 (morning):
// every rationale rewritten to reflect the reporting that Iraola will rest Van Dijk, Isak and Wirtz for the cup.
export const SLOT_RATIONALE = {
  LB:  "Mon Sep 14, morning - the position Saturday exposed and Tuesday cannot fix. Tsimikas, tipped by Sports Mole to start the cup, is not in the tracker's 26, so Kerkez is drawn as the only senior left-back here: he came on at half-time on Saturday after Tsimikas misplaced 11 of 31 passes, an 'improvement' with 'yet more dreadful crossing' by SI, whose verdict is that neither is currently up to Iraola's standard. Andy Robertson, once of this parish, is the man on the other flank.",
  LCB: "Mon Sep 14, morning - drawn to Araujo because the reporting says the captain rests. This Is Anfield expect Iraola to leave Van Dijk out of the cup tie, and with Gomez only a major doubt after seven weeks out, the natural cover is Araujo shifting inside from right-back, his position for Barcelona and Uruguay. If Van Dijk plays after all, or Gomez is passed fit to start, this slot changes; the confidence is Low for exactly that reason.",
  RCB: "Mon Sep 14, morning - the one starter the rotation does not reach. Jacquet has started all five competitive games beside Van Dijk, cleared off the line on Saturday after Alisson's short pass went astray, and took an 8 and man of the match from Rousing The Kop with an 8.1 on FotMob. With the captain rested he becomes the senior anchor of a young back line, and Solanke, tipped to start against his former club, is the examination.",
  RB:  "Mon Sep 14, morning - Frimpong drawn ahead of Araujo, who moves inside to cover the rested captain. The Dutchman was the better of Saturday's late changes, on for Araujo at 72, 'solid enough defensively', a 6 and a 6.9 on FotMob, and with Araujo having started three in seven days the cup is the obvious night to give Frimpong a ninety. Gomez, if he features, has also played the position.",
  LDM: "Mon Sep 14, morning - the pivot rotates for the cup. Gravenberch, a 3 on Saturday and hooked at 60, is drawn back in on the logic that the rotation which reaches Van Dijk, Isak and Wirtz will spare Mac Allister the double pivot and push him higher. Sports Mole's preview pairs Mac Allister with Nyoni; this draws Gravenberch alongside the teenager instead, with the Argentine at the ten. Either way the midfield is remade.",
  RDM: "Mon Sep 14, morning - Nyoni, seventeen, tipped by Sports Mole to start his first cup tie of the season. Unused on Saturday's bench for the first time, and with Iraola describing the midfield as a queue, the Carabao Cup is his clearest run at minutes. Endo, promised his moments by the manager and doubted by Carragher, is the other academy-adjacent name in line, likely as a makeshift centre-half if Gomez is not risked.",
  LAM: "Mon Sep 14, morning - Barcola is managed rather than rested, Iraola having said the club is 'building his physical condition' with games and that the four wingers will play both sides all season. A first Premier League start on Saturday faded after he set up Isak's early chance, a 4 from Rousing The Kop and 6.6 on FotMob. Ngumoha, drawn on the right, can swap; both are in the rotation.",
  CAM: "Mon Sep 14, morning - the slot the reporting fills with a name the tracker cannot draw. Sports Mole expects Lewis Koumas, the Firmino-shaped academy forward Iraola has praised, to play as the number 10; Koumas is not in the 26-man squad here, so Mac Allister is pushed up from the pivot, which the alternatives have long noted he can do if Wirtz is rested. Wirtz, five games without a goal or assist and defended by Pennant on Monday, is the man being spared.",
  RAM: "Mon Sep 14, morning - Munoz drawn on the right, the most natural of the wide options per SI after he hit the bar against Fulham and was withdrawn on the hour, a 4 from Rousing The Kop. Ngumoha is the left-or-right alternative; Gakpo, if not used through the middle, could also start wide. All four wingers will rotate, Iraola says, and the cup is where the depth is spent.",
  ST:  "Mon Sep 14, morning - Gakpo as a false nine, because Isak is expected to be rested for the first time this season and Ekitike is out until the new year. This Is Anfield's read on the rotation frees the striker who has managed sixteen touches in a game and three goals in four while starting everything; the cup, 72 hours on and with Bournemouth to follow, is the one place a rest is thinkable. Gakpo has played the role before.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · would start if Iraola treats the cup as a league game; rested here" }, { playerId: 27, reason: "Woodman · third-choice, not on Saturday's bench" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the only senior left-back in the tracker squad after Tsimikas was withdrawn at half-time" }],
  LCB: [{ playerId: 3, reason: "Van Dijk · plays if Iraola does not rest him; the reporting expects him rested" }, { playerId: 5, reason: "Gomez · back in full training, a major doubt, in line for a first appearance" }],
  RCB: [{ playerId: 5, reason: "Gomez · a fourth senior centre-back if passed fit to start" }, { playerId: 3, reason: "Van Dijk · the captain, rested here but a starter if the manager keeps him" }],
  RB:  [{ playerId: 29, reason: "Araujo · three straight starts at right-back, a 6 and a 6.9 on Saturday; drawn inside here to rest Van Dijk" }, { playerId: 5, reason: "Gomez · has played right-back and is a third option once fit" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · drops into the pivot if Iraola keeps a natural ten; drawn at CAM here" }, { playerId: 15, reason: "Szoboszlai · a 3 on Saturday and rested here, but a starter if the spine is kept" }],
  RDM: [{ playerId: 13, reason: "Mac Allister · the one midfielder nobody rotates out; partners the pivot if Nyoni is held back" }, { playerId: 17, reason: "Endo · 'for sure he will have his moments', and likely a makeshift centre-half rather than a midfielder on Tuesday" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · drawn on the right, can swap flanks; both wingers rotate" }, { playerId: 22, reason: "Gakpo · starts wide if a recognised striker is used through the middle" }],
  CAM: [{ playerId: 18, reason: "Wirtz · the natural ten, rested here after five games without a goal contribution" }, { playerId: 15, reason: "Szoboszlai · has played the ten before; rested in this draw" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · a 4 in his cameo on Saturday; the left-or-right alternative" }, { playerId: 9, reason: "Frimpong · played the right wing after coming on against Atletico; drawn at right-back here" }],
  ST:  [{ playerId: 23, reason: "Isak · starts if Iraola does not rest him after three matches in seven days; rested in this draw" }, { playerId: 25, reason: "Ngumoha · has led the line in Isak's absences" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  generated_at: "2026-09-14T08:30:00Z",
  reason: "Mon Sep 14, morning, the day before Tottenham visit Anfield in the Carabao Cup on Tuesday at 8pm, Andy Madley refereeing with VAR in use. The confidence stays Low because the reporting agrees only on the direction of the rotation, not its exact shape: This Is Anfield expect Iraola to rest Van Dijk, Isak and Wirtz and hand starts to fringe and academy names, and Sports Mole's predicted XI has Koumas at the ten, Nyoni in midfield, Endo as a makeshift centre-half and Gakpo leading the line. Koumas and Tsimikas are not in the tracker's 26-man squad, so this draw uses the nearest valid picks: Mamardashvili in goal, Araujo shifted to centre-back beside Jacquet to rest the captain, Frimpong at right-back, a Gravenberch-Nyoni pivot with Mac Allister pushed to the ten, Barcola and Munoz wide and Gakpo a false nine. Gomez, back in full training after seven weeks out, is a major doubt and is drawn among the alternatives rather than started. Ekitike is a January hope, Bradley is out until late November, Leoni and Chiesa are pencilled for October and back in group training over the break. Tottenham arrive without a league goal all season, nil from 2.94 expected goals per Squawka, De Zerbi promising to 'play with all other players' and missing Van de Ven, Mudryk, Simons, Odobert and Kulusevski with Porro and Udogie doubtful.",
};
