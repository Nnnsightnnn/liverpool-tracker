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
    // 4-2-3-1 below. Reviewed Fri Sep 18 (evening), after Andoni Iraola's 1.30pm press
    // conference: no new injuries ("everyone is ready to go"), the same four unavailable, and
    // a rest advantage he believes Liverpool hold because Bournemouth played in the Europa
    // League on Thursday night. Pointed at Bournemouth away, Sunday 20 September, 2pm,
    // Vitality Stadium, Sky Sports Main Event. The XI below follows the two previews published
    // AFTER Iraola spoke, at Sports Illustrated and Yahoo, which agree on all eleven names:
    // Alisson; Araujo, Van Dijk, Jacquet, Kerkez; Szoboszlai, Mac Allister; Barcola, Wirtz,
    // Gakpo; Isak. That is three changes from this morning's Squawka-based draw, at left-back
    // (Kerkez in for Tsimikas), in the pivot (Mac Allister in for Gravenberch) and on the right
    // (Barcola in for Munoz). Out: Ekitike (Achilles, January a hope), Bradley (knee, ~21 Nov),
    // Leoni (ACL, group work in the break) and Chiesa (back, aiming to train late September).
    defaultXI: {
      GK: 1,    // Alisson (rested for the cup, restored for the league)
      LB: 7,    // Kerkez (restored by both post-press-conference previews; Tsimikas the alternative)
      LCB: 3,   // Van Dijk (rested Tuesday, back for the league)
      RCB: 11,  // Jacquet (on at half-time in the cup; the goal-line clearance at Fulham before that)
      RB: 29,   // Araujo (a fourth straight league start out of position, Bradley out to Nov)
      LCM: 13,  // Mac Allister (a goal and an assist in the cup; the midfielder nobody now drops)
      CM: 15,   // Szoboszlai (the thirty-five-yard volley off the bench earns the start back)
      RCM: 18,  // Wirtz (kept in the side by both previews; five games without a contribution)
      LW: 22,   // Gakpo (left, per Sports Illustrated's post-presser XI)
      ST: 23,   // Isak (four goal contributions in six; restored after a cup rest)
      RW: 30,   // Barcola (right, where he has played for Paris Saint-Germain)
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
    // Aug 29; Newcastle drawn 2-2 away on Aug 23). Reviewed Fri Sep 18 (evening), after the
    // manager's press conference. Liverpool's own team-news page also published the full cup XI
    // on Friday, correcting what the passing networks had implied: Mamardashvili; Frimpong,
    // Araujo, Gomez, Kerkez; Nyoni, Mac Allister, Ngumoha, McConnell; Gakpo, Koumas. Frimpong
    // played right-back and Araujo the whole ninety at centre-back; Barcola did not start.
    // The league XI here follows Sports Illustrated and Yahoo, published post-presser and in
    // agreement on all eleven. The live questions left are whether Gakpo displaces Wirtz at the
    // ten and whether Gravenberch forces his way back into the pivot.
    defaultXI: {
      GK: 1,    // Alisson (back for the league after Mamardashvili took the cup)
      LB: 7,    // Kerkez (restored by the evening previews; faces the club he was bought from)
      LCB: 3,   // Van Dijk (rested Tuesday, restored here)
      RCB: 11,  // Jacquet (SI: "ridiculously composed for a 21-year-old")
      RB: 29,   // Araujo (out of position, and facing Kluivert cutting in from that side)
      LDM: 15,  // Szoboszlai (rested Tuesday, then volleyed the third from thirty-five yards)
      RDM: 13,  // Mac Allister (a goal and an assist midweek; SI say he "simply must start")
      LAM: 22,  // Gakpo (left, per the post-press-conference previews)
      CAM: 18,  // Wirtz (kept at the ten; Iraola "rates him very highly", still no contribution)
      RAM: 30,  // Barcola (right, the flank he played at Paris Saint-Germain)
      ST: 23,   // Isak (the only senior nine; four goal contributions in six)
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
    // Reviewed Fri Sep 18 (evening), pointed at Bournemouth away on Sunday. This remains the
    // shape that most directly answers the fixture's problem, because it removes the need for a
    // specialist right-back and lets Frimpong, who actually played the position in Tuesday's
    // cup tie per the club's published XI, attack the flank as a wing-back with a recognised
    // centre-half inside him. Gomez takes the third centre-back slot beside Van Dijk and
    // Jacquet; his next appearance in any shape will be his 300th for the club.
    // Default is the 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (restored for the league)
      LCB: 3,   // Van Dijk (rested Tuesday, back here)
      CCB: 11,  // Jacquet (central in a three, the recovery pace the shape wants)
      RCB: 5,   // Gomez (one appearance from 300 for the club; captained the cup tie)
      LWB: 7,   // Kerkez (the evening previews' left-back, and the attacking option here)
      LCM: 13,  // Mac Allister (a goal and an assist in the cup · the midfielder nobody drops)
      RCM: 15,  // Szoboszlai (the other half of the previews' pivot)
      RWB: 9,   // Frimpong (RWB · the shape that uses him properly against Kluivert)
      LW: 22,   // Gakpo (left, per the post-press-conference previews)
      ST: 23,   // Isak (the senior nine, restored after a cup rest)
      RW: 30,   // Barcola (right · the flank SI give him at the Vitality)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Fri Sep 18 (evening), after Iraola's
// press conference ("everyone is ready to go") and the club's publication of the full Tottenham
// cup XI. Bradley, Chiesa, Ekitike and Leoni remain the four out. Pointed at Bournemouth away,
// Sunday 20 September.
export const PLAYER_EVIDENCE = {
  1:  "Restored in goal for the league",      // Alisson
  2:  "Took the cup · back to the bench",     // Mamardashvili
  3:  "One night off, then straight back",    // Van Dijk
  5:  "Next game is his 300th for the club",  // Gomez
  7:  "Reinstated at his old club",           // Kerkez
  32: "Lost the shirt between previews",      // Tsimikas
  8:  "Ball work · ~21 Nov the earliest",     // Bradley
  9:  "Started the cup at right-back",        // Frimpong
  10: "ACL · group work in the break",        // Leoni
  11: "SI: composed beyond twenty-one",       // Jacquet
  12: "Levante · outside every squad",        // Ndukwe
  13: "SI: 'simply must start'",              // Mac Allister
  14: "Named by Iraola, dropped by SI",       // Gravenberch
  15: "0.03 xG, thirty-five yards, in",       // Szoboszlai
  17: "Available Sunday · sold in January",   // Endo
  18: "Iraola 'rates him very highly'",       // Wirtz
  20: "Confirmed cup starter at nineteen",    // Nyoni
  22: "Three positions · left on Sunday",     // Gakpo
  23: "'No, never' · four in six",            // Isak
  24: "Achilles · January at the earliest",   // Ekitike
  25: "Called up by Tuchel for England",      // Ngumoha
  26: "Aiming to train late September",       // Chiesa
  27: "Third of three · order unchanged",     // Woodman
  28: "Picked this morning, dropped tonight", // Munoz
  29: "Booked his own English lessons",       // Araujo
  30: "Did not start the cup · right Sunday", // Barcola
  31: "Confirmed starter · cup player of the match", // Koumas
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in every league game,
// now pointed at Bournemouth away on Sunday 20 September, 2pm at the Vitality Stadium. The cup
// XI has been retired; this is a league selection with the rested seniors restored, drawn on the
// two previews published after Friday's press conference (Sports Illustrated and Yahoo), which
// agree on all eleven: Alisson in goal, Van Dijk and Jacquet at centre-back, Araujo out of
// position at right-back with Bradley out until late November, Kerkez restored at left-back,
// Szoboszlai and Mac Allister the pivot, Wirtz at the ten, Isak through the middle.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS AT BOURNEMOUTH on
// Sunday 20 September. Confidence rose across Friday, because the manager has now spoken and
// two independent previews published afterwards name the same eleven. It is held short of
// uniform High because three of those eleven changed between the morning and evening previews.
// (Reviewed Fri Sep 18, evening, after the 1.30pm press conference.)
export const SLOT_CONFIDENCE = {
  GK:  "High",      // Alisson · rested for the cup, first choice in the league all season
  LB:  "Medium",    // Kerkez · restored post-presser, but this slot flipped once already today
  LCB: "High",      // Van Dijk · every league minute this season, rested only for the cup
  RCB: "High",      // Jacquet · every league minute this season, on at half-time in the cup
  RB:  "Medium",    // Araujo · out of position, but Iraola talked about him as the incumbent
  LDM: "Medium",    // Szoboszlai · in both post-presser XIs; the pivot remains under review
  RDM: "Medium",    // Mac Allister · both previews start him ahead of Gravenberch
  LAM: "Medium",    // Gakpo · moved to the left in the evening XIs; four wingers for two flanks
  CAM: "Low",       // Wirtz · five games without a contribution, and Gakpo carries the evidence
  RAM: "Low",       // Barcola · picked over Munoz tonight, having not started the cup at all
  ST:  "High",      // Isak · rested in the cup, the only senior centre-forward available
};


// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Fri Sep 18
// (evening): every rationale carried against Andoni Iraola's 1.30pm press conference, the club's
// publication of the full cup XI, and the two predicted XIs that followed. Sunday's league
// fixture at Bournemouth remains the target.
export const SLOT_RATIONALE = {
  LB:   "Fri Sep 18, evening - the one slot on this pitch that changed sides during the day. Squawka's preview, written before the manager spoke, kept Tsimikas here; Sports Illustrated and Yahoo, published afterwards, restore Milos Kerkez and justify it in terms nobody would frame on a wall, that he is the only realistic starter at left-back this season regardless of form. The club's published cup XI confirms Kerkez started on Tuesday. Sunday returns him to the Vitality, and to the club Liverpool bought him from, which is its own small pressure on a player short of confidence.",
  LCB:  "Fri Sep 18, evening - one night off in an entire season, and it is already over. Van Dijk was rested for the cup, where Araujo and Gomez took the middle between them, and both post-press-conference previews return him beside Jacquet at the Vitality. He is thirty-five and had played every league minute before Tuesday, a workload the reporting treats as squad arithmetic rather than a fitness question. Bournemouth attack with runners off the shoulder, Rayan and Evanilson, which asks more of his positioning than of his pace.",
  RCB:  "Fri Sep 18, evening - still the least argued-about name on the sheet, and Friday added a compliment to the file. Sports Illustrated call Jeremy Jacquet ridiculously composed for a twenty-one-year-old in a new country. He came on at half-time for Gomez in a pre-planned change on Tuesday and starts again on Sunday, five days after the goal-line clearance from Gonzalo Garcia that Opta's own match report named as one of two things keeping Liverpool level at Fulham. Behind him the fourth and fifth centre-backs are a right-back and a man for sale in January.",
  RB:   "Fri Sep 18, evening - the emergency is quietly becoming an arrangement, and the manager gave it away by talking about language. Iraola said on Friday he has been surprised by how quickly Ronald Araujo has absorbed the physical demands of full-back, and that his next target is English, so a back four can actually use the experience he brought from Barcelona. Read plainly, the slot is now his rather than a weekly improvisation. It is also the slot Bournemouth aim at: Kluivert scored on Thursday by arriving inside from exactly that flank. Frimpong played here in the cup; Bradley is out to late November.",
  LDM:  "Fri Sep 18, evening - a volley from thirty-five yards is buying him a fortnight of selections. Szoboszlai came off the bench on Tuesday to settle the cup tie with a strike the Transfer Hub's shot map values at 0.03 expected goals, which is the numerical way of saying nobody else in the stadium was attempting it. Both evening previews put him in the pivot, Iraola named him among the four midfielders ahead of Wataru Endo, and Sports Illustrated want more of the same on the south coast. The Fulham criticism of this midfield has been drowned out rather than answered.",
  RDM:  "Fri Sep 18, evening - the previews have stopped hedging about him, which took a month. Sports Illustrated's line is that Alexis Mac Allister simply must start after a goal and an assist in the cup, and that Liverpool had no control in midfield when Gravenberch was picked ahead of him at Fulham. He struck the opener against Tottenham from the edge of the box, the second such finish in three competitive games, and his manager named him among the four keeping Endo out of the side. Bournemouth force turnovers by design, which is the specific test of a passer in that position.",
  LAM:  "Fri Sep 18, evening - the most productive forward of the autumn, moved back to the flank he started on. Cody Gakpo led the line in the cup with Isak rested and lashed in the second from a tight angle, taking him to two goals and three assists across five appearances, and the club's published XI confirms he began that night through the middle beside Koumas. Both post-presser previews return him to the left. He can play three positions in a squad with one senior centre-forward, which stopped being a convenience some weeks ago and became the plan.",
  CAM:  "Fri Sep 18, evening - his manager was invited to rate him on Friday and declined to turn it into a verdict. Iraola said he rates Florian Wirtz very highly and judges him exactly as he judges every other player, which reads as reassurance or its absence depending on the week you are having. Five competitive games have produced no goal and no assist, and Opta's Fulham report has him putting two shots the wrong side of the near post. Both previews keep him here anyway, with Gakpo's evidence sitting on the bench behind him. Klopp's Germany squad awaits after the break.",
  RAM:  "Fri Sep 18, evening - the flank changed hands twice in twelve hours. Squawka had Victor Munoz here this morning; Sports Illustrated and Yahoo, published after the press conference, give the right to Bradley Barcola and leave Munoz out. The club's own cup team sheet, also published Friday, shows Barcola did not start that night at all, correcting three days of reconstruction from passing maps. Iraola's framing on all of it was cheerful: most weeks all four wide forwards play, and he called having them 'a luxury'.",
  ST:   "Fri Sep 18, evening - he spent the week explaining himself and then got his place back. Alexander Isak told BBC Sport he has no regrets about the British-record move despite three league goals and a leg break that took December to April, and that promises made to him at Newcastle had been broken. He returns through the middle after one night off, with four goal contributions in six matches this season. The recurring number remains sixteen touches against Fulham, the second fewest by a Liverpool outfielder on record per the BBC, which describes the service rather than the finishing.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · took the cup tie and made the save that held it, but Alisson is the league keeper" }, { playerId: 27, reason: "Woodman · third-choice, bench at most" }],
  LB:  [{ playerId: 32, reason: "Tsimikas · this morning's predicted starter, displaced by the post-press-conference previews" }],
  LCB: [{ playerId: 5, reason: "Gomez · captained the cup tie at centre-back; his next appearance is his 300th for the club" }, { playerId: 29, reason: "Araujo · played the full ninety here on Tuesday, and covers right-back instead on Sunday" }],
  RCB: [{ playerId: 5, reason: "Gomez · the fourth senior centre-back, whose return is what allowed Tuesday's rotation" }, { playerId: 17, reason: "Endo · the emergency fifth centre-half, and on the market from January" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the club's published cup XI has him starting at right-back on Tuesday" }, { playerId: 5, reason: "Gomez · the only specialist right-back available with Bradley out until late November" }],
  LDM: [{ playerId: 14, reason: "Gravenberch · named by Iraola among the four he picks, but left out of both evening XIs" }, { playerId: 20, reason: "Nyoni · 19 · a confirmed cup starter, 95 per cent passing, named first in the manager's list" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · the incumbent at Fulham, and the man Mac Allister displaces here" }, { playerId: 17, reason: "Endo · a holding midfielder by trade, available Sunday and for sale in January" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · 18 · started the cup tie and was called up by England on Friday morning" }, { playerId: 30, reason: "Barcola · the wide rotation swaps flanks; he takes the right in this draw" }],
  CAM: [{ playerId: 22, reason: "Gakpo · two goals and three assists in five; the better evidence than the incumbent" }, { playerId: 15, reason: "Szoboszlai · has played the ten before; drawn deeper here" }],
  RAM: [{ playerId: 28, reason: "Munoz · Squawka's pick this morning, dropped from both post-press-conference XIs" }, { playerId: 25, reason: "Ngumoha · four wingers for two places, and both flanks swap" }],
  ST:  [{ playerId: 22, reason: "Gakpo · led the line and scored in the cup; the first cover while Ekitike is out" }, { playerId: 31, reason: "Koumas · the club's XI confirms he started through the middle; the false-nine option" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-09-18T22:30:00Z",
  reason: "Fri Sep 18, evening, two days before the league and a few hours after the manager finally spoke. This draw looks forward to Bournemouth away on Sunday 20 September, 2pm at the Vitality Stadium, live on Sky Sports Main Event, and to Andoni Iraola's first return to the club he managed for three years and left in June. Confidence holds at Medium, but for a different reason than this morning. The team news is now as clear as it gets: asked whether he had any fresh issues, Iraola said 'No, everyone is ready to go. We are in the same place we were, with the three long-term injuries plus Federico, and the others, nothing.' Two previews published after the press conference, at Sports Illustrated and Yahoo, name the same eleven: Alisson; Araujo, Van Dijk, Jacquet, Kerkez; Szoboszlai, Mac Allister; Barcola, Wirtz, Gakpo; Isak. What holds this short of High is that three of those eleven changed between the morning previews and the evening ones, at left-back, in the pivot and on the right wing, which is a lot of movement inside one news cycle. Liverpool also published Tuesday's full cup XI on Friday, correcting the record this file carried: Mamardashvili; Frimpong, Araujo, Gomez, Kerkez; Nyoni, Mac Allister, Ngumoha, McConnell; Gakpo, Koumas. Frimpong played right-back, Araujo the whole ninety inside, and Barcola did not start at all. Out: Bradley (knee, ~21 Nov, now doing individual ball work), Ekitike (Achilles, January at the earliest), Leoni (ACL, due to rejoin group training in the break) and Chiesa (aiming to resume training at the end of September). Rio Ngumoha was named in Thomas Tuchel's England squad on Friday morning, the only Liverpool player selected, and is available on Sunday before he travels. Bournemouth are fifteenth and winless in the league under Marco Rose, the first side in Premier League history to lead each of its opening four fixtures without winning any, but they beat Real Sociedad 2-1 away on Thursday in the first European tie in the club's history, with a full-strength side, which is why Iraola believes the fresher team on Sunday is his.",
};
