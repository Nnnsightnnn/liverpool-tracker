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
    // 4-2-3-1 below. Reviewed Tue Sep 8, XI unchanged from Friday's win, after Ipswich Town 0-2 Liverpool at
    // Portman Road (Isak 6', 9', both from Gakpo; Araujo a first start at right-back,
    // Frimpong unused; Barcola's debut from the bench at 64) and pointed at Atletico
    // Madrid at Anfield on Wednesday 9 September, 8pm, the Champions League opener.
    // The XI below is the confirmed Ipswich side in a 4-3-3 shape, the strongest signal
    // available: Araujo keeps right-back after a 7.7 and SI's 'could become his regular
    // position'; the pivot Iraola actually picked was Mac Allister and Szoboszlai, with
    // Gravenberch on at 64, so Gravenberch is drawn here in the three and Mac Allister
    // is the alternative. Out: Ekitike (Achilles, no date), Bradley (knee, no date),
    // Leoni (ACL, group training during the break), Chiesa (muscle, group training during
    // the break, not in the UCL squad), Gomez (team training this week, likely to miss
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
    // Newcastle drawn 2-2 away on Aug 23). Reviewed Tue Sep 8, XI unchanged from Friday's win off the confirmed
    // Ipswich XI rather than a preview: Alisson behind Araujo, Jacquet, Van Dijk and Kerkez;
    // Szoboszlai and Mac Allister in the pivot as picked; Munoz right, Wirtz central, Gakpo
    // left; Isak alone up top. Frimpong, Gravenberch, Barcola, Nyoni and Koumas are the live
    // alternatives after Friday's bench and substitutions.
    // Out: Ekitike (Achilles) and Bradley (knee) with no date, Leoni (ACL) and Chiesa (muscle)
    // back in group training during the September break, Gomez in team training this week
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
    // Reviewed Tue Sep 8, XI unchanged from Friday's win: Araujo is now PLAYERS-keyed (29), so the back three
    // finally has three natural centre-backs in it, Araujo, Van Dijk and Jacquet, with Endo
    // no longer needed as the makeshift third (and not in the UCL squad anyway). Ndukwe is
    // at Levante; Gomez trains this week; Leoni not with the group until the break. Kerkez
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
// Hand-curated from RESULTS + injuryNote context, reviewed Tue Sep 8, after Ipswich
// Town 0-2 Liverpool at Portman Road and the day before Atletico Madrid at Anfield on
// Wednesday 9 September, 8pm, the Champions League opener. From the Ipswich win: Isak
// scored in the 6th and 9th minutes, both from Gakpo; Araujo made a first start, at
// right-back, with Frimpong unused; Mac Allister kept the pivot with Szoboszlai;
// Gravenberch (for Isak) and Barcola (for Munoz, a debut) came on at 64, Nyoni at 84,
// Koumas at 90+1; Alisson kept a first clean sheet. No new injuries. Out: Ekitike
// (Achilles, no date), Bradley (knee, no date), Leoni (ACL) and Chiesa (muscle), both back
// in group training during the break, and Gomez, in team training this week and likely to
// miss Wednesday. Araujo (29) and Barcola (30) are now PLAYERS-keyed and drawable. Endo
// and Chiesa are not in the Champions League squad.
export const PLAYER_EVIDENCE = {
  1:  "138th clean sheet · 4th all-time",             // Alisson
  2:  "Unused sub · Brughmans bought as successor",   // Mamardashvili
  3:  "Captain · started the pass for 2-0",          // Van Dijk
  5:  "Muscle doubt, in team training · Fulham",     // Gomez
  7:  "Won the ball for 1-0 · first-pick LB",         // Kerkez
  8:  "Knee · no return date yet",                   // Bradley
  9:  "Dropped for Araujo · pace his case for Lookman", // Frimpong
  10: "ACL · rejoins group during the break",         // Leoni
  11: "Started vs Ipswich · booked, kept the sheet",  // Jacquet
  12: "Loaned to Levante for the season",             // Ndukwe
  13: "Kept the pivot vs Ipswich · off at 84",        // Mac Allister
  14: "Previews restore him to the pivot for Europe", // Gravenberch
  15: "Tells Gerrard: 'it has to change'",           // Szoboszlai
  17: "Not in the UCL squad · PL depth only",         // Endo
  18: "Most ground covered · still no G/A",           // Wirtz
  20: "On at 84 vs Ipswich · new deal due",           // Nyoni
  22: "0.45 xA/90, doubled · nobody drops him",       // Gakpo
  23: "3 in 3, 0 in 13 UCL for LFC · faces Hancko",  // Isak
  24: "Achilles · no date, December earliest",        // Ekitike
  25: "Unused sub vs Ipswich · cup tie next",         // Ngumoha
  26: "Out until the break · off the UCL list",       // Chiesa
  27: "New deal · 3rd-choice GK",                     // Woodman
  28: "Dropped by the previews · holds here",        // Munoz
  29: "Kept RB, 9 duels from 10 · Lookman Wed",       // Araujo
  30: "£123m debut tipped · 'not fully fit'",        // Barcola
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
// (Reviewed Tue Sep 8, XI unchanged from Friday's win. The XI is the confirmed Ipswich side, the first Liverpool
// win of the season, carried to Atletico Madrid at Anfield on Wednesday 9 September. The
// one genuine change from the fortnight's assumptions is right-back: Araujo started there
// and Frimpong sat, so the department has two available bodies and a live choice. Araujo
// (29) and Barcola (30) are now PLAYERS-keyed. Gomez rejoins team training this week and is
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
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Tue Sep 8 (morning):
// quiet eve-of-match pass, no match or injury since Friday, but Tuesday's previews (Sports Mole, Yahoo,
// Yardbarker) still break up two slots, RAM (Barcola for Munoz) and LDM (Gravenberch for Mac Allister), so
// those two, plus LAM, ST, RB and RDM (the Szoboszlai interview), rotate to a Tue Sep 8 dateline; LB/LCB/RCB
// carry the weekend build-up datelines and CAM Friday's match evidence, because no lineup-relevant fact about
// those slots has changed since Portman Road.
export const SLOT_RATIONALE = {
  LB:  "Sun Sep 6, evening — the left-back gave the week its sentence and his own game its shape. 'Now games come every three days and it's onto the next,' Kerkez told the club website on Sunday, adding that the press Liverpool ran at Portman Road can be held 'for the first 30 to 35 minutes' before it becomes about staying compact, and that the understanding with Gakpo in front of him is 'a lot better' this year. On Friday he won the ball in the sixth minute that led to Isak's opener, SI crediting the aggressive defending, and kept a first clean sheet in a back four marked 6.7. First choice by a distance with Robertson gone and Tsimikas unused. Wednesday brings Grimaldo overlapping if Simeone keeps a four, or Grimaldo as a wing-back if he does not.",
  LCB: "Sun Sep 6, evening — the teacher, in the manager's word. 'For any centre-back to play alongside Virgil is a lesson and a masterclass,' Iraola said on Saturday, explaining why he let Jacquet suffer through a second-half doubt at Ipswich rather than change him. Van Dijk's own Friday began the second goal, his pass to Gakpo in the ninth minute, then eighty-one minutes organising a lead his side had never held this season; FotMob 7.7, SI 'more comfortable than in weeks'. A first clean sheet since April, beside Jacquet with Araujo at right-back rather than behind them, which thins the cover here even as it thickens it there. Deal to 2027, the Milan interest knocked back without a bid, and at 35 the fixed point across three home games in seven days.",
  RCB: "Sun Sep 6, evening — the manager admitted the doubt and explained why he ignored it. 'There was a moment in the second half when I had a doubt, but I think he has to suffer and go through those periods,' Iraola said of Jacquet, who completed a first full ninety of the season at Ipswich after 69 and 76 minutes in August, booked on 52 and fortunate not to see a second yellow soon after; 'for any centre-back to play alongside Virgil is a lesson and a masterclass.' FotMob 7.4, SI 'not thoroughly convincing', a first clean sheet all the same. With Araujo at right-back the cover behind him is Endo in the league and nobody senior in Europe until Gomez, aimed at Fulham, is back. Baena dropping between the lines is Wednesday's examination.",
  RB:  "Tue Sep 8 — the eve, and the shirt reads as Araujo's for Europe. His first Liverpool start came at right-back on Friday, FotMob's 7.7, nine duels won from ten and the most aerials on the pitch, Frimpong dropped, and FourFourTwo frames it as Iraola settling his Champions League right-back rather than rotating one. The Dani Carvajal free-agent line stays a pundit's aside, unadvanced by any transfer reporter, a January theory at most. Frimpong's case for Wednesday is his recovery pace against Lookman if Simeone keeps a four; it weakens if the reported back three sends Lookman to the bench. Araujo is drawn here, with Iraola's press conference this afternoon the confirmation. Bradley has no date, Gomez is back in team training this week but a doubt for the opener.",
  LDM: "Tue Sep 8 — the previews have broken the pivot up again on the eve, and the manager kept it together once already. Sports Mole and Yahoo name Gravenberch beside Szoboszlai for Wednesday, Mac Allister the man they move; the same case was made before Ipswich and Iraola ignored it, Mac Allister playing 84 minutes at Portman Road, passing at 85 per cent, heading a corner straight at Scherpen, FotMob's 7.5, Gravenberch on at 64 to hold the 2-0. The graphic keeps the man who started and won, because a preview is not team news; Baena dropping between the lines is the case for Gravenberch's reach, and the 1pm press conference this afternoon is where it gets an answer.",
  RDM: "Tue Sep 8 — the vice-captain gave the build-up its voice, opposite Steven Gerrard for TNT Sports. Szoboszlai called last season's lost title a failure of intensity that 'has to change' and said that if Liverpool want it more than the others 'no one can stop us'; Iraola, he added, made clear he would not be asked to fill in at right-back again, which meant a lot. On the grass it was a 150th appearance at Ipswich, FotMob's 7.6, three shots on target and a penalty VAR took back for an offside. Barrios and Hjulmand are Wednesday's opposite numbers. Contracted to 2031.",
  LAM: "Tue Sep 8 — the attacker every preview keeps, whichever side they hand Barcola. Tuesday's elevens leave Gakpo on one flank and start Barcola on the other; either way he plays, and VAVEL's figures explain the unanimity: 0.45 expected assists per 90 this season against 0.22 last, Iraola handing him more creative licence and fewer shots, all three of Isak's league goals from his passes. Two assists and FotMob's 8.9 at Portman Road, a goal at Newcastle, an assist against Forest. The Manchester City move died on deadline day. Contracted to 2030, and drawn here on the left, where the evidence is.",
  CAM: "Fri Sep 4 — the pass for a hat-trick that did not stand, and the most ground covered by anyone on the pitch. Wirtz's 33rd-minute cross was turned in by Isak and flagged; it would have been his first goal involvement of the season. FotMob's 7.2 was for the work rate SI singled out rather than the creation, which came from Gakpo on the left. Off for Koumas in stoppage time. Three league games without a goal or an assist, in a team that has now found other ways to score while it waits for him; Atletico's low block on Wednesday is exactly the kind of game his final ball is bought for.",
  RAM: "Tue Sep 8 — the one slot every preview changes, and the one the graphic holds until a team sheet says otherwise. Tuesday's elevens start Barcola here for Munoz, a £123m two-time Champions League winner pointed at his full debut, and Rousing The Kop argues a European night is where a player of that pedigree is eased in rather than saved for Fulham. Against that: Iraola's line that Barcola is not yet fully fit after twelve touches at Portman Road, and Munoz's two league starts, FotMob's 6.8 on Friday, the debut goal against Forest and the penalty won at Newcastle. Munoz holds on the evidence of a confirmed sheet; Barcola is the alternative one press conference away, and the lease on this flank is the shortest on the pitch.",
  ST:  "Tue Sep 8 — the number that shadows him into the European night is one in thirteen, his Champions League goals against appearances per Sports Mole, and the one beside it is three in three. Isak scored a near-post drive and a left-footed finish inside nine minutes at Ipswich, had a third flagged offside, came off at 64 with nothing wrong; VAVEL's analysis has him at 0.89 expected goals per 90 this season against 0.41 last, the movement and the runs in behind restored. Every preview starts him because there is nobody else: Ekitike has no date and Gakpo is the false-nine fallback. Atletico, whose Alvarez scored in Tuesday's session and stayed to run, carry two nines to his one. Hancko, per The Hard Tackle, is the man who steps out to meet him.",
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
  LDM: [{ playerId: 14, reason: "Gravenberch · named beside Szoboszlai by Sports Mole and Yahoo for Wednesday, as he was before Ipswich, when Iraola kept Mac Allister" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · the other senior pivot option, benched for a second successive league game" }],
  LAM: [{ playerId: 30, reason: "Barcola · debuted on the right at Ipswich but was bought for this flank; Gakpo's two assists keep him waiting" }, { playerId: 25, reason: "Ngumoha · unused at Ipswich; rotation option on either flank" }],
  CAM: [{ playerId: 13, reason: "Mac Allister · kept the pivot vs Ipswich and can push forward into the ten" }, { playerId: 15, reason: "Szoboszlai · vice-captain, has played the ten before" }],
  RAM: [{ playerId: 30, reason: "Barcola · started here by Tuesday's Sports Mole, Yahoo and Yardbarker previews for a first Liverpool start; Iraola says not yet fully fit" }, { playerId: 25, reason: "Ngumoha · the teenager Munoz was preferred to, unused on Friday and unnamed by any preview" }],
  ST:  [{ playerId: 22, reason: "Gakpo · finished Friday's game at centre-forward once Isak came off; the false-nine fallback with Ekitike out until December" }, { playerId: 25, reason: "Ngumoha · led the line in Isak's absences late last season" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-09-08T09:00:00Z",
  reason: "Tue Sep 8, the eve of Atletico Madrid at Anfield on Wednesday 9 September, 8pm, the Champions League opener, and the day Iraola names his side to a 1pm press conference. No match and no injury since Friday, so the XI drawn is still the confirmed Ipswich side: Alisson behind Araujo, Jacquet, Van Dijk and Kerkez; Mac Allister and Szoboszlai in the pivot; Munoz right, Wirtz the ten, Gakpo left; Isak alone up top. Confidence stays medium because the team news is still open on two slots: Tuesday's previews from Sports Mole, Yahoo and Yardbarker all start the £123m Barcola for a first Liverpool appearance and restore Gravenberch for Mac Allister. Nine of eleven are undisputed. Iraola has said Barcola is not yet fully fit, which is why Munoz holds the graphic until the press conference this afternoon or the team sheet says otherwise. On the other side, Atletico lose Sorloth and the suspended Ortiz, while Alvarez scored in Tuesday's session and stayed to run and Jonathan David is back in the group. The absentee list is unchanged: Ekitike and Bradley with no date, Leoni and Chiesa back with the group during the break, Gomez in team training this week and a doubt in every list. Endo and Chiesa are not in the Champions League squad."
};
