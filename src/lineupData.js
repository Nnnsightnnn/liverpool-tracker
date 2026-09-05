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
    // 4-2-3-1 below. Reviewed Sat Sep 5 (evening), XI unchanged from Friday's win, after Ipswich Town 0-2 Liverpool at
    // Portman Road (Isak 6', 9', both from Gakpo; Araujo a first start at right-back,
    // Frimpong unused; Barcola's debut from the bench at 64) and pointed at Atletico
    // Madrid at Anfield on Wednesday 9 September, 8pm, the Champions League opener.
    // The XI below is the confirmed Ipswich side in a 4-3-3 shape, the strongest signal
    // available: Araujo keeps right-back after a 7.7 and SI's 'could become his regular
    // position'; the pivot Iraola actually picked was Mac Allister and Szoboszlai, with
    // Gravenberch on at 64, so Gravenberch is drawn here in the three and Mac Allister
    // is the alternative. Out: Ekitike (Achilles, no date), Bradley (knee, no date),
    // Leoni (ACL, group training during the break), Chiesa (muscle, group training during
    // the break, not in the UCL squad), Gomez (team training next week, likely to miss
    // Atletico). Araujo (29) and Barcola (30) are now PLAYERS-keyed and drawable; Endo is
    // not in the Champions League squad, so he cannot be a European option.
    defaultXI: {
      GK: 1,    // Alisson (five saves and a first clean sheet at Ipswich)
      LB: 7,    // Kerkez (won the ball for the first goal · first-pick LB)
      LCB: 3,   // Van Dijk (captain · started the pass for the second goal)
      RCB: 11,  // Jacquet (third league start beside Van Dijk · booked)
      RB: 29,   // Araujo (first start, at right-back · 7.7 · Frimpong unused)
      LCM: 18,  // Wirtz (advanced eight · the No. 10 in the default shape)
      CM: 14,   // Gravenberch (on at 64 vs Ipswich · likeliest recall for Europe)
      RCM: 15,  // Szoboszlai (150th app · three shots on target)
      LW: 22,   // Gakpo (two assists at Ipswich · 8.9)
      ST: 23,   // Isak (two goals in nine minutes · three in three)
      RW: 28,   // Munoz (second successive start · off for Barcola at 64)
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
    // The default shape, the 4-2-3-1 Iraola has used in all three league games, now
    // pointed at Atletico Madrid at Anfield on Wednesday 9 September, 8pm, the Champions
    // League opener (Ipswich beaten 2-0 away on Sep 4; Forest drawn 2-2 at Anfield on Aug 29;
    // Newcastle drawn 2-2 away on Aug 23). Reviewed Sat Sep 5 (evening), XI unchanged from Friday's win off the confirmed
    // Ipswich XI rather than a preview: Alisson behind Araujo, Jacquet, Van Dijk and Kerkez;
    // Szoboszlai and Mac Allister in the pivot as picked; Munoz right, Wirtz central, Gakpo
    // left; Isak alone up top. Frimpong, Gravenberch, Barcola, Nyoni and Koumas are the live
    // alternatives after Friday's bench and substitutions.
    // Out: Ekitike (Achilles) and Bradley (knee) with no date, Leoni (ACL) and Chiesa (muscle)
    // back in group training during the September break, Gomez in team training next week
    // and likely to miss Wednesday. Araujo (29) and Barcola (30) are now PLAYERS-keyed.
    // Endo is not in the Champions League squad.
    defaultXI: {
      GK: 1,    // Alisson (first clean sheet of the season at Ipswich · No. 1)
      LB: 7,    // Kerkez (first-pick LB · started the move for 1-0)
      LCB: 3,   // Van Dijk (captain · started vs Ipswich)
      RCB: 11,  // Jacquet (started vs Ipswich · booked, kept the sheet)
      RB: 29,   // Araujo (first start, at right-back · Frimpong the alternative)
      LDM: 13,  // Mac Allister (kept the pivot vs Ipswich · off at 84)
      RDM: 15,  // Szoboszlai (double-pivot · 150th appearance)
      LAM: 22,  // Gakpo (two assists vs Ipswich · best rating on the pitch)
      CAM: 18,  // Wirtz (the No. 10 · most ground covered vs Ipswich)
      RAM: 28,  // Munoz (started vs Ipswich · Barcola on for him at 64)
      ST: 23,   // Isak (two goals in nine minutes · three in three)
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
    // Reviewed Sat Sep 5 (evening), XI unchanged from Friday's win: Araujo is now PLAYERS-keyed (29), so the back three
    // finally has three natural centre-backs in it, Araujo, Van Dijk and Jacquet, with Endo
    // no longer needed as the makeshift third (and not in the UCL squad anyway). Ndukwe is
    // at Levante; Gomez trains next week; Leoni not with the group until the break. Kerkez
    // and Frimpong as wing-backs, the latter back in because Araujo moves inside; Wirtz and
    // Szoboszlai in midfield; the Ipswich front three of Gakpo, Isak and Munoz ahead of them.
    // Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (first clean sheet of the season · No. 1)
      LCB: 29,  // Araujo (natural CB, moved inside from Friday's right-back berth)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (right of the back three)
      LWB: 7,   // Kerkez (LWB with Robertson gone to Spurs)
      LCM: 18,  // Wirtz (deeper in this shape, the creative axis)
      RCM: 15,  // Szoboszlai (started every league game in the pivot)
      RWB: 9,   // Frimpong (RWB · unused vs Ipswich, back in when Araujo moves inside)
      LW: 22,   // Gakpo (LW · two assists vs Ipswich)
      ST: 23,   // Isak (No. 9 · two goals vs Ipswich)
      RW: 28,   // Munoz (right of the front three · started vs Ipswich)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Sat Sep 5 (evening), after Ipswich
// Town 0-2 Liverpool at Portman Road and four days before Atletico Madrid at Anfield on
// Wednesday 9 September, 8pm, the Champions League opener. From the Ipswich win: Isak
// scored in the 6th and 9th minutes, both from Gakpo; Araujo made a first start, at
// right-back, with Frimpong unused; Mac Allister kept the pivot with Szoboszlai;
// Gravenberch (for Isak) and Barcola (for Munoz, a debut) came on at 64, Nyoni at 84,
// Koumas at 90+1; Alisson kept a first clean sheet. No new injuries. Out: Ekitike
// (Achilles, no date), Bradley (knee, no date), Leoni (ACL) and Chiesa (muscle), both back
// in group training during the break, and Gomez, in team training next week and likely to
// miss Wednesday. Araujo (29) and Barcola (30) are now PLAYERS-keyed and drawable. Endo
// and Chiesa are not in the Champions League squad.
export const PLAYER_EVIDENCE = {
  1:  "138th clean sheet · 4th all-time",             // Alisson
  2:  "Unused sub · Brughmans bought as successor",   // Mamardashvili
  3:  "Captain · started the pass for 2-0",          // Van Dijk
  5:  "Team training next week · likely misses ATM",  // Gomez
  7:  "Won the ball for 1-0 · first-pick LB",         // Kerkez
  8:  "Knee · no date, 'will go later'",             // Bradley
  9:  "Unused vs Ipswich · pace his case for Lookman", // Frimpong
  10: "ACL · rejoins group during the break",         // Leoni
  11: "Started vs Ipswich · booked, kept the sheet",  // Jacquet
  12: "Loaned to Levante for the season",             // Ndukwe
  13: "Kept the pivot vs Ipswich · off at 84",        // Mac Allister
  14: "On at 64 vs Ipswich · UCL recall likely",      // Gravenberch
  15: "150th app · 3 shots on target at Ipswich",     // Szoboszlai
  17: "Not in the UCL squad · PL depth only",         // Endo
  18: "Most ground covered · still no G/A",           // Wirtz
  20: "On at 84 vs Ipswich · new deal due",           // Nyoni
  22: "4 G/A in 3 · only Salah has more",             // Gakpo
  23: "3 in 3 · Player of the Match",                 // Isak
  24: "Achilles · no date, December earliest",        // Ekitike
  25: "Unused sub vs Ipswich · cup tie next",         // Ngumoha
  26: "Out until the break · off the UCL list",       // Chiesa
  27: "New deal · 3rd-choice GK",                     // Woodman
  28: "Started vs Ipswich · off for Barcola at 64",   // Munoz
  29: "Kept RB after 7.7 · Lookman Wednesday",        // Araujo
  30: "12-touch debut · Gakpo ahead of him",          // Barcola
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in all three
// league games, now pointed at Atletico Madrid at Anfield on Wednesday 9 September
// (Ipswich beaten 2-0 away on Sep 4). The XI is the confirmed Ipswich side.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. One match into the season these read as confidence that the slot's
// occupant remains a first-choice starter into 2026-27 — LOW where the player
// has left (Salah, Robertson, Konate) or whose future is open.
// (Reviewed Sat Sep 5, evening, XI unchanged from Friday's win. The XI is the confirmed Ipswich side, the first Liverpool
// win of the season, carried to Atletico Madrid at Anfield on Wednesday 9 September. The
// one genuine change from the fortnight's assumptions is right-back: Araujo started there
// and Frimpong sat, so the department has two available bodies and a live choice. Araujo
// (29) and Barcola (30) are now PLAYERS-keyed. Gomez rejoins team training next week and is
// likely to miss Wednesday.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · eased back, first minutes vs Monaco Aug 9
  RCB: "Medium", // Konate gone free to Madrid · Jacquet has started all three league games, Araujo now needed at RB
  RB:  "Medium", // Araujo started there vs Ipswich (7.7) with Frimpong fit and unused · two bodies now, and a real choice for Wednesday
  LDM: "Medium", // Mac Allister kept the pivot vs Ipswich against most previews · Gravenberch on at 64, the likeliest European recall
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "High",   // Gakpo · two assists at Ipswich, all three of Isak's league goals set up by him · the sale is off and the shirt is his
  CAM: "Medium", // Wirtz · started centrally in all three, covered the most ground at Ipswich, still without a goal contribution this season
  RAM: "Low",    // Munoz has started two in a row, but Barcola debuted for him at 64 and is bought to start · the flank with the shortest lease
  ST:  "High",   // Isak · three in three after the brace at Ipswich, and with Ekitike out to December there is no alternative nine
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Sat Sep 5
// (evening): only RB rotated, the other eight carry Friday's match-evidence datelines because no
// lineup-relevant fact about those slots has changed since Portman Road.
export const SLOT_RATIONALE = {
  LB:  "Fri Sep 4 — the tackle that began the season's first lead, and a fourth start in eighteen days coming. Kerkez won the ball around halfway in the sixth minute at Portman Road, found Gakpo, and Isak scored a moment later; SI credited the aggressive defending for the goal and marked him 6.7, the lowest of a back four that kept a first clean sheet. He is first choice by a distance with Robertson gone to Tottenham and Tsimikas unused on the bench. Wednesday brings Grimaldo overlapping and Giuliano Simeone running at him from Atletico's right.",
  LCB: "Fri Sep 4 — the captain's pass started the second goal, and then he organised eighty-one minutes of holding a lead his side had never had. Van Dijk found Gakpo on the left in the ninth minute; FotMob gave him 7.7 and SI wrote that he looked more comfortable than in weeks. The first clean sheet since April came beside Jacquet with Araujo at right-back rather than behind them, which thins the cover here even as it thickens it there. The deal still runs only to 2027, the Milan interest was knocked back without a bid, and at 35 he is the fixed point, now with a win to build from.",
  RCB: "Fri Sep 4 — a third league start beside Van Dijk, a first clean sheet, and a yellow card that Ipswich felt should have been two. Jacquet blocked Emersonn midway through the first half, was booked for a reckless challenge early in the second and survived a second foul on the same forward; FotMob's 7.4, SI's 'not thoroughly convincing'. With Araujo now starting at right-back, the twenty-year-old's own reserve is thinner than ever: Gomez trains next week and is likely to miss Wednesday, Leoni is not with the group until the break, Endo is not in the Champions League squad. One injury here and the shape changes.",
  RB:  "Sat Sep 5, evening — Bilbao did not settle it, and the office that signs right-backs has just been vacated. Araujo kept a clean sheet on a first Liverpool start at right-back, FotMob's 7.7, with Frimpong unused; SI holds that it 'could become his regular position', FourFourTwo called it a Champions League fix, and the fanbase is split. Atletico's 3-0 defeat at San Mames on Saturday left the question of whether Lookman starts at Anfield open, and Lookman, quick and inside-out, is the case for Frimpong's recovery pace over a converted centre-back's strength. Joleon Lescott's on-air line that 'there's talk of Liverpool' for free agent Carvajal is talk, and Richard Hughes, who would have acted on it, stepped down on Saturday. Araujo is drawn here on one match's evidence; Iraola's Tuesday press conference decides it. Bradley no date, Gomez trains next week, Mabaya the registered academy name.",
  LDM: "Fri Sep 4 — the manager kept the pivot the previews had broken up, and it held. Mac Allister started beside Szoboszlai at Portman Road after Yahoo, The 4th Official and Opta had all restored Gravenberch, played 84 minutes of it, tackled well, passed at 85 per cent, and headed a free chance from a corner straight at Scherpen early in the second half; FotMob's 7.5. Gravenberch came on at 64 as Liverpool went to a three to hold 2-0 and was tidy. The Champions League opener, with Baena dropping between the lines, is the obvious place for a change, and Gravenberch is the alternative drawn beside him.",
  RDM: "Fri Sep 4 — a 150th appearance, three shots all on target, two chances created, and a penalty taken back by VAR. Szoboszlai roamed from the pivot at Portman Road, FotMob's 7.6, twice testing Scherpen from range before the break; midway through the second half he was upended by Davis in the box and the review found him offside before the contact. SI's caveat stands: Ipswich lacked open-play threat and he will not get that freedom every week. He was not needed at right-back this time, Araujo having started there. Barrios and Hjulmand are Wednesday's opposite numbers. Contracted to 2031.",
  LAM: "Fri Sep 4 — two assists, the best rating on the pitch, and four days after the move to Manchester City died. Gakpo threaded Isak through in the sixth minute and found him with the outside of the right boot in the ninth, FotMob's 8.9, and has now set up all three of the striker's league goals. He finished the match at centre-forward when Isak came off, with Barcola, bought for this flank, sent on at the other. The Sporting News called the summer's flirtation with selling him 'all the more puzzling'; Iraola said on Thursday he was 'very happy to keep Cody'. Contracted to 2030, and the shirt is his on Wednesday.",
  CAM: "Fri Sep 4 — the pass for a hat-trick that did not stand, and the most ground covered by anyone on the pitch. Wirtz's 33rd-minute cross was turned in by Isak and flagged; it would have been his first goal involvement of the season. FotMob's 7.2 was for the work rate SI singled out rather than the creation, which came from Gakpo on the left. Off for Koumas in stoppage time. Three league games without a goal or an assist, in a team that has now found other ways to score while it waits for him; Atletico's low block on Wednesday is exactly the kind of game his final ball is bought for.",
  RAM: "Fri Sep 4 — a second successive start on the right, 64 minutes of it, and the shirt handed to Barcola for the last 26. Munoz showed the pace without adding the creativity, FotMob's 6.8, SI noting he is the third different starter on the right in three league games as Iraola sorts his attack. Barcola's debut was twelve touches in a game already won, and the manager's line was patience: 'he hasn't even played in a friendly, you always have to be careful, we want to find him in behind.' Munoz holds the graphic on the evidence of two starts; Barcola (now PLAYERS-keyed) and Ngumoha are the alternatives, and the lease on this flank is the shortest on the pitch.",
  ST:  "Fri Sep 4 — six minutes, nine minutes, and the away end singing his name. Isak scored a near-post drive from Gakpo's threaded pass and then a left-footed finish after stepping inside Greaves, had a third flagged offside in the 33rd, and came off at 64 with the job done and nothing wrong. Three league goals in three games, level with his total for all of 2025-26; two shots on the night, both scored. 'When he's fit, he's going to make the numbers,' Iraola said, 'but most of my demands with him are not about the goals.' Ekitike still has no date behind him and Gakpo is the false-nine fallback, so he starts on Wednesday as a matter of course.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · unused at Ipswich, stays as deputy after a summer of loan offers nobody met on terms" }, { playerId: 27, reason: "Woodman · third-choice cover on a new deal" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the only senior left-back at the club now Robertson has gone; Tsimikas unused on Friday" }],
  LCB: [{ playerId: 11, reason: "Jacquet · started beside Van Dijk in all three league games" }, { playerId: 29, reason: "Araujo · a natural centre-back if Iraola moves him back inside" }],
  RCB: [{ playerId: 29, reason: "Araujo · the loanee's natural position, though Friday's evidence has him at right-back" }, { playerId: 17, reason: "Endo · the emergency centre-half in the league; not in the Champions League squad" }],
  RB:  [{ playerId: 9, reason: "Frimpong · fit and unused at Ipswich after Araujo was preferred; his pace is the argument against Lookman" }, { playerId: 15, reason: "Szoboszlai · finished the Forest game at right-back and named by Iraola as in-game cover" }],
  LDM: [{ playerId: 14, reason: "Gravenberch · on at 64 vs Ipswich after most previews had him starting; the likeliest recall for Atletico" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · the other senior pivot option, benched for a second successive league game" }],
  LAM: [{ playerId: 30, reason: "Barcola · debuted on the right at Ipswich but was bought for this flank; Gakpo's two assists keep him waiting" }, { playerId: 25, reason: "Ngumoha · unused at Ipswich; rotation option on either flank" }],
  CAM: [{ playerId: 13, reason: "Mac Allister · kept the pivot vs Ipswich and can push forward into the ten" }, { playerId: 15, reason: "Szoboszlai · vice-captain, has played the ten before" }],
  RAM: [{ playerId: 30, reason: "Barcola · twelve touches on debut for Munoz at 64; 'we want to find him in behind'" }, { playerId: 25, reason: "Ngumoha · the teenager Munoz was preferred to, unused on Friday" }],
  ST:  [{ playerId: 22, reason: "Gakpo · finished Friday's game at centre-forward once Isak came off; the false-nine fallback with Ekitike out until December" }, { playerId: 25, reason: "Ngumoha · led the line in Isak's absences late last season" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "High",
  generated_at: "2026-09-05T22:30:00Z",
  reason: "Sat Sep 5 evening, a day after Ipswich Town 0-2 Liverpool at Portman Road and four days before Atletico Madrid at Anfield on Wednesday 9 September, 8pm, the Champions League opener. No match and no injury since Friday, so the XI is unchanged, the confirmed Ipswich side that gave Iraola his first win: Alisson behind Araujo, Jacquet, Van Dijk and Kerkez; Mac Allister and Szoboszlai in the pivot as he actually picked them; Munoz right, Wirtz the ten, Gakpo left; Isak, three league goals in three, alone up top. Confidence stays high because all eleven started on Friday and came through fit. What changed on Saturday was around the team rather than in it: Richard Hughes stepped down as sporting director, Atletico lost 3-0 at Athletic Bilbao with Alvarez whistled by his own fans and Jonathan David out with a cervical contracture, and the table dropped Liverpool to sixth on the same five points. Right-back remains the one live selection question, Araujo's first start (7.7) against Frimpong's pace for Lookman, unresolved by Bilbao and due at Tuesday's press conference; the pivot is the second, with Gravenberch the likeliest European recall. The absentee list is unchanged: Ekitike and Bradley with no date, Leoni and Chiesa back with the group during the break, Gomez in team training next week and likely to miss Wednesday. Endo and Chiesa are not in the Champions League squad."
};
