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
    // 4-2-3-1 below. Reviewed Sun Sep 20 (evening), after Bournemouth 0-1 Liverpool at the
    // Vitality, a third consecutive Premier League clean sheet and a rise from tenth to sixth.
    // Now pointed at Manchester City at home, Sunday 11 October, 4.30pm, Anfield, Sky Sports
    // Main Event, the first fixture after a three-week international break. The XI below is the
    // side that actually started this afternoon, per ESPN and the BBC: Alisson; Araujo, Jacquet,
    // Van Dijk, Kerkez; Mac Allister, Szoboszlai; Gakpo, Wirtz, Barcola; Isak. One deviation from
    // every published preview: Gakpo took the RIGHT flank and Barcola the left, not the reverse.
    // Out: Ekitike (Achilles, January at the earliest), Bradley (knee, no club date; FotMob now
    // lists early January 2027), Leoni (ACL, rejoining group training during the break) and
    // Chiesa (back, aiming to resume training by the end of September, Sports Mole pencils 11 Oct).
    defaultXI: {
      GK: 1,    // Alisson (the save from Evanilson on 18 that made the clean sheet possible)
      LB: 7,    // Kerkez (ninety minutes, targeted repeatedly over the top, a 6 from the BBC)
      LCB: 3,   // Van Dijk (a 7; third clean sheet in a row alongside Jacquet)
      RCB: 11,  // Jacquet (an 8, the best rating on the field, and a first France call-up)
      RB: 29,   // Araujo (a fifth straight league start out of position; Bradley has no club date)
      LCM: 13,  // Mac Allister (found the space that opened the game up after a slow start)
      CM: 15,   // Szoboszlai (two free-kicks narrowly wide, booked after the interval)
      RCM: 18,  // Wirtz (a 5, the lowest Liverpool rating; part of the goal without touching it cleanly)
      LW: 30,   // Barcola (played the left at the Vitality; Adam Smith largely contained him)
      ST: 23,   // Isak (scored the winner on 57; four in five, more than all of last season)
      RW: 22,   // Gakpo (took the RIGHT this afternoon and made the goal from it)
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
    // Manchester City at home on Sunday 11 October, 4.30pm at Anfield (Bournemouth beaten 1-0 away
    // on Sep 20 through Isak on 57; Tottenham beaten 3-1 in the Carabao Cup on Sep 15 with ten
    // changes; Fulham drawn 0-0 on Sep 12; Atletico beaten 2-1 on Sep 9; Ipswich beaten 2-0 away on
    // Sep 4; Forest drawn 2-2 on Aug 29; Newcastle drawn 2-2 away on Aug 23). Reviewed Sun Sep 20
    // (evening). The XI below is no longer a prediction assembled from previews: it is the eleven
    // that started this afternoon, confirmed by ESPN and the BBC. The one thing every preview got
    // wrong was the front three, where Gakpo played the right and Barcola the left. Substitutions:
    // Munoz for Barcola and Nyoni for Wirtz on 72; Gravenberch for Szoboszlai and Koumas for Isak
    // on 81. Unused: Mamardashvili, Gomez, Tsimikas, Frimpong, Ngumoha. Three weeks of international
    // football now separate this sheet from the fixture it points at, so treat it as a baseline.
    defaultXI: {
      GK: 1,    // Alisson (a 7, and the eighteenth-minute save that kept it goalless)
      LB: 7,    // Kerkez (ninety minutes at the club that sold him; a 6 for effort)
      LCB: 3,   // Van Dijk (a 7; a third clean sheet in a row)
      RCB: 11,  // Jacquet (an 8 and the best on the field; France call-up this week)
      RB: 29,   // Araujo (a fifth consecutive league start there; Semenyo attacks that side next)
      LDM: 15,  // Szoboszlai (booked after half-time, two free-kicks narrowly wide)
      RDM: 13,  // Mac Allister (the pivot partner the previews insisted on, and rightly)
      LAM: 30,  // Barcola (played the LEFT at the Vitality, against every preview)
      CAM: 18,  // Wirtz (a 5; six competitive games without a goal or an assist)
      RAM: 22,  // Gakpo (the RIGHT, three chances created, and the ball that became the goal)
      ST: 23,   // Isak (scored on 57; four in five, already past all of last season)
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
    // Reviewed Sun Sep 20 (evening), pointed at Manchester City at Anfield on 11 October. The
    // argument for it has weakened rather than strengthened: Araujo played a fifth consecutive
    // league game at right-back this afternoon and Liverpool kept a third clean sheet in a row,
    // so the improvisation is now producing results rather than anxiety. It still removes the
    // need for a specialist right-back and lets Frimpong, who played the position in the cup,
    // attack the flank with a recognised centre-half inside him, which is the answer to Antoine
    // Semenyo if one is wanted. Gomez takes the third centre-back slot; his next appearance in
    // any shape is his 300th for the club. Default is the 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (restored for the league)
      LCB: 3,   // Van Dijk (rested Tuesday, back here)
      CCB: 11,  // Jacquet (central in a three, the recovery pace the shape wants)
      RCB: 5,   // Gomez (one appearance from 300 for the club; captained the cup tie)
      LWB: 7,   // Kerkez (the evening previews' left-back, and the attacking option here)
      LCM: 13,  // Mac Allister (a goal and an assist in the cup · the midfielder nobody drops)
      RCM: 15,  // Szoboszlai (the other half of the previews' pivot)
      RWB: 9,   // Frimpong (RWB · the shape that uses him properly against Kluivert)
      LW: 30,   // Barcola (left · the flank he actually took at the Vitality)
      ST: 23,   // Isak (the senior nine, and the only scorer this afternoon)
      RW: 22,   // Gakpo (right · where he created the goal)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Sun Sep 20 (evening), after
// Bournemouth 0-1 Liverpool: Isak on 57 from a blocked Gakpo cross, a third consecutive clean
// sheet, and a climb from tenth to sixth. Bradley, Chiesa, Ekitike and Leoni remain the four out.
// Pointed at Manchester City at home, Sunday 11 October, after the international break.
export const PLAYER_EVIDENCE = {
  1:  "The save from Evanilson on 18",        // Alisson
  2:  "Unused \u00b7 third clean sheet kept",     // Mamardashvili
  3:  "A 7 \u00b7 three clean sheets running",    // Van Dijk
  5:  "Unused \u00b7 next game is his 300th",     // Gomez
  7:  "Targeted over the top all game",       // Kerkez
  32: "Unused \u00b7 the shirt stayed gone",      // Tsimikas
  8:  "FotMob now lists early Jan 2027",      // Bradley
  9:  "Unused \u00b7 Araujo kept the shirt",      // Frimpong
  10: "ACL \u00b7 group work in the break",       // Leoni
  11: "An 8 \u00b7 best on the pitch \u00b7 France",  // Jacquet
  12: "Levante \u00b7 outside every squad",       // Ndukwe
  13: "Opened the game up after a slow start", // Mac Allister
  14: "Nine minutes closing it out",          // Gravenberch
  15: "Two free-kicks wide \u00b7 booked",        // Szoboszlai
  17: "Unused \u00b7 January exit reported",      // Endo
  18: "A 5 \u00b7 six games, no contribution",    // Wirtz
  20: "18 minutes off the bench",             // Nyoni
  22: "Passed a warm-up, made the goal",      // Gakpo
  23: "Scored on 57 \u00b7 four in five",         // Isak
  24: "Achilles \u00b7 January at the earliest",  // Ekitike
  25: "Unused \u00b7 reports to England",         // Ngumoha
  26: "Aiming to train by month's end",       // Chiesa
  27: "Third of three \u00b7 not in the squad",   // Woodman
  28: "On for Barcola on 72",                 // Munoz
  29: "Fifth straight start at right-back",   // Araujo
  30: "Played the left \u00b7 saved by Petrovic", // Barcola
  31: "On for Isak on 81",                    // Koumas
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in every league game,
// now pointed at Manchester City at home on Sunday 11 October, 4.30pm at Anfield. This is no
// longer a predicted XI assembled from previews. It is the eleven that beat Bournemouth 1-0 this
// afternoon, confirmed by ESPN and the BBC: Alisson in goal, Van Dijk and Jacquet at centre-back,
// Araujo out of position at right-back, Kerkez at left-back, Szoboszlai and Mac Allister the pivot,
// Gakpo right, Wirtz at the ten, Barcola left, Isak through the middle. Three weeks of international
// football sit between this sheet and the fixture, so it is a baseline rather than a forecast.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS AGAINST MANCHESTER CITY at
// Anfield on Sunday 11 October. (Reviewed Sun Sep 20, evening.) The basis has changed in kind: this
// is no longer a preview consensus, it is the eleven that actually started and won at Bournemouth
// this afternoon. That raises confidence in the spine and lowers it nowhere except the front three,
// because a three-week international break sits in between, Chiesa is due back inside it, and the
// one thing today proved about the wide positions is that the previews could not call which flank
// Gakpo would take. Nothing here is a fitness doubt: every one of the eleven came through ninety
// minutes or was withdrawn tactically.
export const SLOT_CONFIDENCE = {
  GK:  "High",      // Alisson · first choice in the league all season, three clean sheets running
  LB:  "Medium",    // Kerkez · started and struggled; Tsimikas is the only alternative and is rated no higher
  LCB: "High",      // Van Dijk · every league minute this season
  RCB: "High",      // Jacquet · every league minute, and the best player on the pitch today
  RB:  "High",      // Araujo · five consecutive league starts there, and Bradley is not close
  LDM: "Medium",    // Szoboszlai · started and was booked; Gravenberch came on for him
  RDM: "Medium",    // Mac Allister · the settled partner, but the pivot has rotated once already
  LAM: "Low",       // Barcola · took the left today against every preview; Munoz replaced him on 72
  CAM: "Low",       // Wirtz · a 5, six games without a contribution, and Gakpo's evidence behind him
  RAM: "Medium",    // Gakpo · made the goal from the right, but he has now played three positions in five games
  ST:  "High",      // Isak · the only senior centre-forward, and four goals in five
};


// ─── Per-slot rationale ────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Sun Sep 20
// (evening), against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB:   "Sun Sep 20, evening - ninety minutes at the club that sold him, and the verdict is effort rather than quality. The BBC had Kerkez struggling early and being targeted repeatedly with the crossfield ball over his head, a six, with the note that you cannot fault him for battling through it. He was one of three changes from the Fulham draw. Nothing about the afternoon settles the department: two senior options, neither of whom the reporting believes is at the manager's standard, no market until January, and Antoine Semenyo attacking this flank when football resumes.",
  LCB:  "Sun Sep 20, evening - a third consecutive clean sheet, and the captain's share of it was the unglamorous kind. Van Dijk took a seven from the BBC, whose reading was that he ensured Liverpool were not punished for a poor first hour in attack, and Bournemouth's only clear opening came from a cross rather than through him. He is thirty-five and has played every league minute of the season bar the cup night off. Erling Haaland, who has scored against every Premier League club he has faced, is next at Anfield.",
  RCB:  "Sun Sep 20, evening - the best player on the field and the least complicated thing Liverpool bought. Jeremy Jacquet fouled Evanilson naively inside the opening minutes and then played the rest of the afternoon as though it had happened to someone else, stepping in front of runners and passing cleanly out of the back for a BBC rating of eight. Iraola afterwards: he has helped us in this defensive side with a third clean sheet in a row, and he is showing composure and confidence. France have called him up for the first time.",
  RB:   "Sun Sep 20, evening - a fifth consecutive league start out of position, and the improvisation has started producing clean sheets rather than anxiety. The BBC's summary is the fair one: Ronald Araujo looks comfortable defensively at right-back and has had a solid start to life at Liverpool, but did not do much going forward. A six, and a trade this back four keeps making. Bournemouth's danger came centrally rather than down his side. The department does not deepen before January, whatever month the reporting settles on for Bradley's knee.",
  LDM:  "Sun Sep 20, evening - purpose without a payoff, which is the Szoboszlai template when the shooting misses. He stepped up on ten minutes and bent a free-kick inches past the top-left corner, had a second bounce narrowly wide before the interval, was booked shortly after half-time, and was replaced by Gravenberch on eighty-one as the lead was closed out. A six from the BBC, whose line was that it was a typical Szoboszlai performance bar a goal from outside the box. The pivot remains his and Mac Allister's on current evidence.",
  RDM:  "Sun Sep 20, evening - the previews insisted he must start and the ninety minutes did not embarrass them. The BBC had Mac Allister doing well to find space in midfield to open the game up after a slow start, and credited a positive beginning to life under Iraola; a six. Liverpool's control arrived in the second half, which is roughly when his influence did. Bournemouth force turnovers by design and Liverpool gave up 0.76 expected goals, which is the test of a passer in that position passed quietly.",
  LAM:  "Sun Sep 20, evening - the flank every preview assigned to Gakpo went to Bradley Barcola, and a thirty-five-year-old largely closed it. Barcola cut inside from the left in the first half and forced Djordje Petrovic into a save with his legs from a deflected low curler, and was otherwise contained by Adam Smith on the veteran's 431st Bournemouth appearance. A six, with the standing caveat: it is still early days and Liverpool want more from their marquee summer signing. Munoz replaced him on seventy-two.",
  CAM:  "Sun Sep 20, evening - the lowest Liverpool rating on the sheet, and a hand in the goal he will take regardless. The BBC's verdict on Florian Wirtz was another day when the German struggled, though he deserves credit for playing a part: Gakpo's ball arrived, Wirtz reached for it under pressure from James Hill, and the block looped kindly for Isak. A five, and six competitive games now without a goal or an assist. He was withdrawn for Nyoni on seventy-two and reports to Germany for the break.",
  RAM:  "Sun Sep 20, evening - a doubt at breakfast, on the wrong wing by lunchtime, and decisive by teatime. Cody Gakpo passed a warm-up fitness test on two sore adductors, started on the right rather than the left, and on fifty-seven minutes went past Adrien Truffert and delivered the ball that became the winner. Opta: two shots, a joint-team-high three chances created, nine of sixteen duels won. Squawka: 57 per cent of Isak's Liverpool league goals have now been assisted by him. A seven, and the Netherlands next.",
  ST:   "Sun Sep 20, evening - an hour of nothing, and then the one thing the position exists for. Isak ballooned a long-range effort into the stands and misjudged a cross before arriving where the blocked ball fell and turning it in from close range. Four goals in five league games, already more than the three he managed in fourteen appearances across the whole of last season, and only Erling Haaland has more in the division. The BBC's line is the one a striker would pick: in the right place at the right time, and no mistake with the finish.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili \u00b7 unused at the Vitality; the Chelsea cup tie on 28 October is his likely next start" }, { playerId: 27, reason: "Woodman \u00b7 third-choice, not in this afternoon's squad" }],
  LB:  [{ playerId: 32, reason: "Tsimikas \u00b7 an unused substitute again; has not started a league game since Fulham" }],
  LCB: [{ playerId: 5, reason: "Gomez \u00b7 unused this afternoon; his next appearance in any shape is his 300th for the club" }, { playerId: 29, reason: "Araujo \u00b7 a centre-half by trade, currently occupying right-back instead" }],
  RCB: [{ playerId: 5, reason: "Gomez \u00b7 the fourth senior centre-back, on the bench for a third straight clean sheet" }, { playerId: 10, reason: "Leoni \u00b7 rejoining group training during the break; Sports Mole pencils mid-October" }],
  RB:  [{ playerId: 9, reason: "Frimpong \u00b7 played right-back in the cup, unused today; the attacking alternative" }, { playerId: 5, reason: "Gomez \u00b7 the only specialist right-back available while Bradley's knee has no club date" }],
  LDM: [{ playerId: 14, reason: "Gravenberch \u00b7 nine minutes off the bench on 81, which is the clearest read on the order" }, { playerId: 20, reason: "Nyoni \u00b7 19 \u00b7 eighteen minutes at the Vitality after starting the cup tie" }],
  RDM: [{ playerId: 14, reason: "Gravenberch \u00b7 the man Mac Allister displaced at Fulham, now a closing substitute" }, { playerId: 17, reason: "Endo \u00b7 unused, available, and leaving in January" }],
  LAM: [{ playerId: 28, reason: "Munoz \u00b7 came on for Barcola on 72; a 5, and still waiting on a start" }, { playerId: 25, reason: "Ngumoha \u00b7 18 \u00b7 unused today, and away with England for four Nations League fixtures" }],
  CAM: [{ playerId: 22, reason: "Gakpo \u00b7 three chances created from the right; the better evidence than the incumbent" }, { playerId: 15, reason: "Szoboszlai \u00b7 has played the ten before; drawn deeper in this shape" }],
  RAM: [{ playerId: 30, reason: "Barcola \u00b7 the flanks swapped this afternoon and could swap back" }, { playerId: 26, reason: "Chiesa \u00b7 aiming to resume training by the end of September; Sports Mole pencils 11 October" }],
  ST:  [{ playerId: 22, reason: "Gakpo \u00b7 led the line and scored in the cup; the first cover while Ekitike is out" }, { playerId: 31, reason: "Koumas \u00b7 on for Isak on 81; the false-nine option and the whole depth chart" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-09-20T22:30:00Z",
  reason: "Sun Sep 20, evening. The fixture this board pointed at has been played: Bournemouth 0-1 Liverpool at the Vitality, Alexander Isak turning in a blocked Cody Gakpo cross on fifty-seven minutes for a third consecutive Premier League clean sheet and a climb from tenth to sixth. The eleven below is therefore not a prediction assembled from previews but the side that actually started, confirmed by ESPN and the BBC, a 4-2-3-1: Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Mac Allister, Szoboszlai; Gakpo, Wirtz, Barcola; Isak. The single thing every published preview got wrong was the front three, where Gakpo took the right and Barcola the left rather than the reverse, which is why those slots keep the lowest confidence. Gakpo, a doubt all morning with soreness in both adductors, passed a warm-up test and finished with a joint-team-high three chances created. Jeremy Jacquet took the highest rating on the field, an eight, and has been called up by France for the first time. Substitutions were tactical rather than forced: Munoz for Barcola and Nyoni for Wirtz on seventy-two, Gravenberch for Szoboszlai and Koumas for Isak on eighty-one, with Mamardashvili, Gomez, Tsimikas, Frimpong and Ngumoha unused. Confidence holds at Medium rather than rising, because the next fixture is three weeks away: Manchester City at Anfield on Sunday 11 October at 4.30pm, after an international break in which most of this squad plays elsewhere, Leoni is due to rejoin group training and Chiesa is aiming to resume work. Bradley and Ekitike remain out, with FotMob now listing both for early January 2027.",
};
