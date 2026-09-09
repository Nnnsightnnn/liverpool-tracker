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
    // 4-2-3-1 below. Reviewed Wed Sep 9 (matchday), Barcola in for Munoz and Gakpo restored to the right, after Ipswich Town 0-2 Liverpool at
    // Portman Road (Isak 6', 9', both from Gakpo; Araujo a first start at right-back,
    // Frimpong unused; Barcola's debut from the bench at 64) and pointed at Atletico
    // Madrid at Anfield on Wednesday 9 September, 8pm, the Champions League opener.
    // The XI below is the confirmed Ipswich side in a 4-3-3 shape, the strongest signal
    // available: Araujo keeps right-back after a 7.7 and SI's 'could become his regular
    // position'; the pivot Iraola actually picked was Mac Allister and Szoboszlai, with
    // Gravenberch on at 64, so Gravenberch is drawn here in the three and Mac Allister
    // is the alternative. Out: Ekitike (Achilles, no date), Bradley (knee, no date),
    // Leoni (ACL, group training during the break), Chiesa (muscle, group training during
    // the break, not in the UCL squad); Gomez trained fully on Tuesday and is a doubt for
    // Atletico; Gakpo missed Tuesday's session with muscle tightness, a precaution. Araujo (29) and Barcola (30) are now PLAYERS-keyed and drawable; Endo is
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
      LW: 30,   // Barcola (first start tipped · Iraola: ready for more minutes)
      ST: 23,   // Isak (two goals in nine minutes · three in three)
      RW: 22,   // Gakpo (moved right · a muscle doubt, Munoz the alternative)
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
    // Newcastle drawn 2-2 away on Aug 23). Reviewed Wed Sep 9 (matchday), XI as the matchday previews have it off the confirmed
    // Ipswich XI rather than a preview: Alisson behind Araujo, Jacquet, Van Dijk and Kerkez;
    // Szoboszlai and Mac Allister in the pivot as picked; Munoz right, Wirtz central, Gakpo
    // left; Isak alone up top. Frimpong, Gravenberch, Barcola, Nyoni and Koumas are the live
    // alternatives after Friday's bench and substitutions.
    // Out: Ekitike (Achilles) and Bradley (knee) with no date, Leoni (ACL) and Chiesa (muscle)
    // back in group training during the September break, Gomez back in full training on Tuesday
    // and a doubt for Wednesday, Gakpo a muscle doubt after missing Tuesday's session. Araujo (29) and Barcola (30) are now PLAYERS-keyed.
    // Endo is not in the Champions League squad.
    defaultXI: {
      GK: 1,    // Alisson (first clean sheet of the season at Ipswich · No. 1)
      LB: 7,    // Kerkez (first-pick LB · started the move for 1-0)
      LCB: 3,   // Van Dijk (captain · started vs Ipswich)
      RCB: 11,  // Jacquet (started vs Ipswich · booked, kept the sheet)
      RB: 29,   // Araujo (first start, at right-back · Frimpong the alternative)
      LDM: 13,  // Mac Allister (kept the pivot vs Ipswich · off at 84)
      RDM: 15,  // Szoboszlai (double-pivot · 150th appearance)
      LAM: 30,  // Barcola ('ready to play more minutes' · SI and Opta Analyst start him here)
      CAM: 18,  // Wirtz (the No. 10 · most ground covered vs Ipswich)
      RAM: 22,  // Gakpo (moved right by the previews · muscle doubt after missing Tuesday's session · Munoz the alternative)
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
    // Reviewed Wed Sep 9 (matchday), XI as the matchday previews have it: Araujo is now PLAYERS-keyed (29), so the back three
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
      LW: 30,   // Barcola (LW · first start tipped)
      ST: 23,   // Isak (No. 9 · two goals vs Ipswich)
      RW: 22,   // Gakpo (right of the front three · muscle doubt, Munoz the alternative)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Wed Sep 9 (matchday), after Ipswich
// Town 0-2 Liverpool at Portman Road and the day before Atletico Madrid at Anfield on
// Wednesday 9 September, 8pm, the Champions League opener. From the Ipswich win: Isak
// scored in the 6th and 9th minutes, both from Gakpo; Araujo made a first start, at
// right-back, with Frimpong unused; Mac Allister kept the pivot with Szoboszlai;
// Gravenberch (for Isak) and Barcola (for Munoz, a debut) came on at 64, Nyoni at 84,
// Koumas at 90+1; Alisson kept a first clean sheet. No new injuries. Out: Ekitike
// (Achilles, no date), Bradley (knee, no date), Leoni (ACL) and Chiesa (muscle), both back
// in group training during the break, and Gomez, back in full training on Tuesday and a doubt
// for Wednesday; Gakpo missed Tuesday's session with muscle tightness. Araujo (29) and Barcola (30) are now PLAYERS-keyed and drawable. Endo
// and Chiesa are not in the Champions League squad.
export const PLAYER_EVIDENCE = {
  1:  "First clean sheet since April · No. 1",         // Alisson
  2:  "Unused sub · deputy after summer loan offers",  // Mamardashvili
  3:  "Beat Atletico here with a 92nd-min header '25", // Van Dijk
  5:  "Back in full training · Fulham the likelier return", // Gomez
  7:  "First-choice LB · faces G. Simeone tonight",    // Kerkez
  8:  "Knee · no date · in UCL squad",                 // Bradley
  9:  "Opta's XI restores him · pace vs Lookman",      // Frimpong
  10: "ACL · group training at the break",             // Leoni
  11: "Champions League debut tonight beside VVD",     // Jacquet
  12: "Loaned to Levante for the season",              // Ndukwe
  13: "No new deal offered · keeps the pivot",         // Mac Allister
  14: "SI pencils him for Fulham, not tonight",        // Gravenberch
  15: "New deal to 2031 · screens Baena",              // Szoboszlai
  17: "Not in the UCL squad · PL depth only",          // Endo
  18: "0 G/A in 3 · keeps the ten in Europe",          // Wirtz
  20: "New deal pending · 20 mins vs Ipswich",         // Nyoni
  22: "Restored to the right · 1G 3A already",         // Gakpo
  23: "3 in 3, 0 in 13 UCL for LFC · faces Hancko",    // Isak
  24: "Achilles · no date · in UCL squad regardless",  // Ekitike
  25: "Unused sub vs Ipswich · cup tie next",          // Ngumoha
  26: "Back problem · off the UCL list",               // Chiesa
  27: "New deal · 3rd-choice GK",                      // Woodman
  28: "Keeps the right if Gakpo is held back",         // Munoz
  29: "Kept RB, 9 duels from 10 · SI keeps him",       // Araujo
  30: "Tipped for a first Liverpool start, left",      // Barcola
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
// (Reviewed Wed Sep 9, matchday: Barcola drawn in at LAM after Iraola's 'ready to play more minutes' and Gakpo, a muscle doubt after missing training, moved to RAM. The XI is the confirmed Ipswich side, the first Liverpool
// win of the season, carried to Atletico Madrid at Anfield on Wednesday 9 September. The
// one genuine change from the fortnight's assumptions is right-back: Araujo started there
// and Frimpong sat, so the department has two available bodies and a live choice. Araujo
// (29) and Barcola (30) are now PLAYERS-keyed. Gomez trained fully on Tuesday and is a doubt
// for Wednesday; Gakpo is a muscle doubt.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · eased back, first minutes vs Monaco Aug 9
  RCB: "Medium", // Konate gone free to Madrid · Jacquet has started all three league games, Araujo now needed at RB
  RB:  "Medium", // Araujo started there vs Ipswich (7.7) with Frimpong fit and unused · two bodies now, and a real choice for Wednesday
  LDM: "Medium", // Mac Allister · SI keeps him for Atletico with Gravenberch pencilled for Fulham · told Tuesday's presser the club will not renew him
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "Medium", // Barcola · SI and Opta Analyst start him here after Iraola said he is 'ready to play more minutes'; Gakpo, the man he displaces, is a muscle doubt
  CAM: "Medium", // Wirtz · started centrally in all three, covered the most ground at Ipswich, still without a goal contribution this season
  RAM: "Low",    // Gakpo, restored to the right by the matchday previews after Tuesday's tightness eased · Munoz the alternative if he is held back
  ST:  "High",   // Isak · three in three after the brace at Ipswich, and with Ekitike out to December there is no alternative nine
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Wed Sep 9 (matchday):
// the press conference and the training report moved four slots. Barcola is drawn at LAM (Iraola: 'ready to
// play more minutes'; SI and Opta Analyst both start him there), Gakpo moves to RAM as a muscle doubt after
// missing the afternoon session, Mac Allister holds LDM on the day he said the club will not renew him, and
// Gomez's full return to training touches RCB and RB. Every rationale that names one of those four rotates to
// an evening dateline; GK/LB/CAM/ST carry their earlier evidence with an evening lead where a fact changed.
export const SLOT_RATIONALE = {
  LB:  "Wed Sep 9 — first choice at left-back for the European night, and SI's reading sends Giuliano Simeone down his flank rather than Grimaldo. Kerkez won the ball around halfway in the sixth minute for the move that became Isak's opener at Ipswich, SI's 6.7 in a back four that kept a first clean sheet since April. With Robertson gone and Tsimikas unused there is no competition for the shirt. If Gakpo is not risked, the winger in front of him becomes Barcola, and the understanding starts again from nothing.",
  LCB: "Wed Sep 9 — the captain, against the opponent he beat at the death a year ago. Van Dijk's 92nd-minute header settled last September's 3-2 with these visitors, and Opta notes his own goal has yet to arrive this season; eighty-one minutes and a FotMob 7.7 protecting a first lead at Ipswich, a first clean sheet since April behind him. Simeone says the striker he would marshal, Alvarez, will not start, leaving David or Lee. Deal to 2027, the Milan interest knocked back, and at 35 the fixed point across three home games in seven days.",
  RCB: "Wed Sep 9 — a Champions League debut beside Van Dijk, and for the first time since August a senior name back behind him. Jacquet completed a first full ninety at Ipswich after 69 and 76 minutes in August, booked on 52, FotMob's 7.4, Iraola riding out a doubt he admitted; Gomez trained fully on Tuesday, so the European cover is no longer nobody, only not yet passed fit. Baena dropping between the lines is the examination he and Van Dijk have to read all night.",
  RB:  "Wed Sep 9 — the one slot the previews cannot agree on. SI keeps Araujo, whose first Liverpool start brought FotMob's 7.7, nine duels won from ten and the most aerials on the pitch; Opta Analyst restores Frimpong, whose recovery pace is the specific answer to Lookman cutting in from the left. Iraola gave the room nothing. Gomez, back in full training, is the third body once passed fit; Bradley has no date, and the Carvajal line stays a pundit's aside. Araujo is drawn here.",
  LDM: "Wed Sep 9 — he kept the pivot at Ipswich against the previews, and he keeps it in SI's matchday eleven while playing for a contract the club has not offered. Told through his agent that Liverpool will not extend his 2023 deal, two years still to run, Mac Allister has been called important by a manager who says there is time yet; 84 minutes at Portman Road, FotMob's 7.5, passing at 85 per cent. SI keeps him for Atletico and pencils Gravenberch for Fulham; the graphic holds the man who started and won.",
  RDM: "Wed Sep 9 — the renewal that stung his midfield partner is his, signed to 2031, and tonight he screens the ball Baena drops onto. A 150th appearance at Ipswich, FotMob's 7.6, three shots on target and a penalty VAR took back for an offside; Barrios and Hjulmand are the opposite numbers in the double pivot. Gravenberch, benched for a second league game running, is the alternative. Every preview starts him.",
  LAM: "Wed Sep 9 — tipped for a first Liverpool start, on the left, at Anfield on a Champions League night. SI and Opta Analyst both begin him there, in a competition he has won twice with PSG; the £106m rising to £123m signing had only a debut off the bench at Ipswich, and Iraola has said the sole caveat is the pre-season minutes he never had after a World Cup summer. Rush The Kop still expects the bench. Drawn here, and the team sheet confirms it at seven.",
  CAM: "Wed Sep 9 — his first Champions League game under Iraola, and the contribution column still reads nought. No goal and no assist in three league games, the Forest display between forgettable ones at Newcastle and Ipswich, where his cross was turned in by Isak and flagged. With Gakpo's flank duty pulling wide at times, Wirtz is the senior creator against a low block Mac Allister called hard to break down. Every preview keeps him at the ten.",
  RAM: "Wed Sep 9 — the tightness has eased, and the previews put him back on the right to make room for Barcola. Gakpo missed Tuesday's session as a precaution, per Joyce and the Echo, but SI and Opta Analyst both restore him: a goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes, VAVEL's 0.45 expected assists per 90. If he is held back, Munoz, two league starts and a debut goal, keeps the flank. Contracted to 2030, the City move dead since deadline day.",
  ST:  "Wed Sep 9 — three in three, one in thirteen in this competition, leading a Liverpool European line without Salah for the first time since 2014-15. Isak scored a near-post drive and a left-footed finish inside nine minutes at Ipswich, both from Gakpo, a third flagged; VAVEL has him at 0.89 expected goals per 90 this season against 0.41 last. There is no other senior nine with Ekitike out. His opposite number, per Simeone, is David or Lee, not Alvarez; Hancko, per The Hard Tackle, steps out to meet him.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · unused at Ipswich, stays as deputy after a summer of loan offers nobody met on terms" }, { playerId: 27, reason: "Woodman · third-choice cover on a new deal" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the only senior left-back at the club now Robertson has gone; Tsimikas unused on Friday" }],
  LCB: [{ playerId: 11, reason: "Jacquet · started beside Van Dijk in all three league games" }, { playerId: 29, reason: "Araujo · a natural centre-back if Iraola moves him back inside" }],
  RCB: [{ playerId: 29, reason: "Araujo · the loanee's natural position, though Friday's evidence has him at right-back" }, { playerId: 5, reason: "Gomez · trained fully on Tuesday for the first time in a month; a doubt for Wednesday, Fulham the likelier first matchday" }],
  RB:  [{ playerId: 9, reason: "Frimpong · fit and unused at Ipswich after Araujo was preferred; his pace is the argument against Lookman" }, { playerId: 15, reason: "Szoboszlai · finished the Forest game at right-back and named by Iraola as in-game cover" }],
  LDM: [{ playerId: 14, reason: "Gravenberch · SI pencils him for Fulham rather than Wednesday; the morning previews had him in for Mac Allister, who told Tuesday's presser the club will not renew him" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · the other senior pivot option, benched for a second successive league game" }],
  LAM: [{ playerId: 22, reason: "Gakpo · the man Barcola displaces on the left, moved right by SI and Opta Analyst and a muscle doubt after missing Tuesday's session" }, { playerId: 25, reason: "Ngumoha · unused at Ipswich; rotation option on either flank" }],
  CAM: [{ playerId: 13, reason: "Mac Allister · kept the pivot vs Ipswich and can push forward into the ten" }, { playerId: 15, reason: "Szoboszlai · new deal to 2031, has played the ten before" }],
  RAM: [{ playerId: 28, reason: "Munoz · two league starts on this flank and the obvious replacement if Gakpo's tightness keeps him out; Rush The Kop still expects Barcola on the bench" }, { playerId: 25, reason: "Ngumoha · the teenager Munoz was preferred to, unused on Friday and unnamed by any preview" }],
  ST:  [{ playerId: 22, reason: "Gakpo · finished Friday's game at centre-forward once Isak came off; the false-nine fallback, and himself a muscle doubt after missing Tuesday's training" }, { playerId: 25, reason: "Ngumoha · led the line in Isak's absences late last season" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-09-09T09:00:00Z",
  reason: "Wed Sep 9, matchday, Atletico Madrid at Anfield at 8pm in the Champions League opener. The graphic is the 4-2-3-1 the matchday previews converge on: Barcola in for a first Liverpool start on the left, where SI and Opta Analyst both place him, and Gakpo, whose Tuesday tightness those previews read as eased, restored to the right. Mac Allister keeps the pivot beside Szoboszlai. Alisson, Jacquet, Van Dijk, Kerkez, Wirtz and Isak are undisputed; the one slot the previews split on is right-back, where SI keeps Araujo and Opta prefers Frimpong. Confidence is medium rather than high because Iraola would not confirm a line-up his players did not yet know and one first-choice forward carried a midweek doubt. Gomez trained fully on Tuesday and is a doubt rather than an absentee; Ekitike, Bradley and Leoni have no date; Chiesa (back) and Endo are outside the Champions League squad. Simeone says Alvarez will not start; SI's matchday XI recalls him.",
};
