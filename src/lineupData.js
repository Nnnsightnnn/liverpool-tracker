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
    // 4-2-3-1 below. Reviewed Mon Sep 21 (morning), after Bournemouth 0-1 Liverpool at the
    // Vitality, a third consecutive Premier League clean sheet and a rise from tenth to sixth.
    // Now pointed at Manchester City at home, Sunday 11 October, 4.30pm, Anfield, Sky Sports
    // Main Event, the first fixture after a three-week international break. The XI below is the
    // side that actually started at Bournemouth, per ESPN and the BBC: Alisson; Araujo, Jacquet,
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
      ST: 23,   // Isak (scored the winner on 57; four league goals in five, past all of last league season)
      RW: 22,   // Gakpo (took the RIGHT at Bournemouth and made the goal from it)
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
    // Sep 4; Forest drawn 2-2 on Aug 29; Newcastle drawn 2-2 away on Aug 23). Reviewed Mon Sep 21
    // (evening). The XI below is no longer a prediction assembled from previews: it is the eleven
    // that started at Bournemouth, confirmed by ESPN and the BBC. The one thing every preview got
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
      ST: 23,   // Isak (scored on 57; four league goals in five, past all of last league season)
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
    // Reviewed Mon Sep 21 (morning), pointed at Manchester City at Anfield on 11 October. The
    // argument for it has weakened rather than strengthened: Araujo has played a fifth consecutive
    // league game at right-back and Liverpool kept a third clean sheet in a row,
    // so the improvisation is now producing results rather than anxiety. It still removes the
    // need for a specialist right-back and lets Frimpong, who played the position in the cup,
    // attack the flank with a recognised centre-half inside him, which is the answer to Antoine
    // Semenyo, who attacks that side for Manchester City, if one is wanted. Gomez takes the third centre-back slot; his next appearance in
    // any shape is his 300th for the club. Default is the 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (restored for the league)
      LCB: 3,   // Van Dijk (rested Tuesday, back here)
      CCB: 11,  // Jacquet (central in a three, the recovery pace the shape wants)
      RCB: 5,   // Gomez (one appearance from 300 for the club; captained the cup tie)
      LWB: 7,   // Kerkez (the evening previews' left-back, and the attacking option here)
      LCM: 13,  // Mac Allister (a goal and an assist in the cup · the midfielder nobody drops)
      RCM: 15,  // Szoboszlai (the other half of the previews' pivot)
      RWB: 9,   // Frimpong (RWB · the shape that uses him properly against Semenyo)
      LW: 30,   // Barcola (left · the flank he actually took at the Vitality)
      ST: 23,   // Isak (the senior nine, and the only scorer at Bournemouth)
      RW: 22,   // Gakpo (right · where he created the goal)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Mon Sep 21 (morning), after
// Bournemouth 0-1 Liverpool: Isak on 57 from a blocked Gakpo cross, a third consecutive clean
// sheet, and a climb from tenth to sixth. Bradley, Chiesa, Ekitike and Leoni remain the four out.
// Pointed at Manchester City at home, Sunday 11 October, after the international break.
export const PLAYER_EVIDENCE = {
  1:  "Away with Brazil \u00b7 the save from 18",   // Alisson
  2:  "No.1 at the AXA while Alisson's away",     // Mamardashvili
  3:  "Netherlands \u00b7 three clean sheets",       // Van Dijk
  5:  "At the AXA \u00b7 next game his 300th",        // Gomez
  7:  "Hungary \u00b7 targeted over the top",         // Kerkez
  32: "Behind Kerkez \u00b7 no start since Fulham",   // Tsimikas
  8:  "Knee \u00b7 FotMob lists early Jan 2027",      // Bradley
  9:  "Netherlands \u00b7 Araujo kept the shirt",     // Frimpong
  10: "ACL \u00b7 group training in the break",       // Leoni
  11: "France call-up \u00b7 an 8 at Bournemouth",    // Jacquet
  12: "Levante \u00b7 outside every squad",           // Ndukwe
  13: "Argentina \u00b7 opened the game up",          // Mac Allister
  14: "Netherlands \u00b7 closing sub on 81",         // Gravenberch
  15: "Hungary \u00b7 two free-kicks wide, booked",   // Szoboszlai
  17: "At the AXA \u00b7 January exit reported",       // Endo
  18: "Germany \u00b7 six games, no return",          // Wirtz
  20: "18 minutes at Bournemouth",               // Nyoni
  22: "Netherlands \u00b7 made the winner",           // Gakpo
  23: "26 today \u00b7 four in five \u00b7 Sweden",       // Isak
  24: "Achilles \u00b7 January at the earliest",      // Ekitike
  25: "England \u00b7 Tuchel's senior squad",         // Ngumoha
  26: "Back to training by month's end",         // Chiesa
  27: "Third of three \u00b7 not in the squad",       // Woodman
  28: "On for Barcola on 72 \u00b7 fourth option",    // Munoz
  29: "Intl duty \u00b7 fifth start at right-back",   // Araujo
  30: "France \u00b7 contained on the left",          // Barcola
  31: "The only cover for Isak \u00b7 on 81",         // Koumas
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
// Anfield on Sunday 11 October. (Reviewed Mon Sep 21, evening.) The basis has changed in kind: this
// is no longer a preview consensus, it is the eleven that started and won at Bournemouth
// last time out. That raises confidence in the spine and lowers it nowhere except the front three,
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
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Mon Sep 21
// (evening), against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB:   "Mon Sep 21, morning - away with Hungary, the left-back shirt his for now. Kerkez came through a hard ninety at the club that sold him, a six the BBC put down to effort more than quality after he was targeted repeatedly with the ball over the top. Tsimikas is the only alternative and rated no higher; no market until January, and Antoine Semenyo attacks this flank when the season resumes.",
  LCB:  "Mon Sep 21, morning - reports to the Netherlands with a third clean sheet behind him and the quieter share of the credit for it. A seven at Bournemouth, where the BBC felt he ensured Liverpool were not punished for a poor first hour in attack. He has played every league minute bar the cup night off; Erling Haaland is the first name back on the other side of the break.",
  RCB:  "Mon Sep 21, morning - the reward for the best month of any Liverpool defender is a first France camp. Jeremy Jacquet took a man-of-the-match eight at Bournemouth and a third straight clean sheet into the break, and Iraola's line on him was about composure and confidence. The least complicated thing Liverpool bought in the summer, off to join the world champions.",
  RB:   "Mon Sep 21, morning - away on international duty, the makeshift right-back who has quietly made the slot his own. Five straight league starts there and three clean sheets out of them; the BBC's read is comfortable defensively, limited going forward, the trade this back four keeps making. No reinforcement arrives before January, whatever month the reporting settles on for Bradley's knee.",
  LDM:  "Mon Sep 21, morning - Hungary duty after an afternoon of purpose without a payoff, two free-kicks narrowly wide and a booking. A six the BBC called typical of Szoboszlai bar a goal from outside the box, and he was withdrawn on eighty-one for Gravenberch. The pivot stays his and Mac Allister's on current evidence.",
  RDM:  "Mon Sep 21, morning - back to Argentina, the pivot partner every preview insisted on. The BBC had Mac Allister finding space to open the game up after a slow start, a six, and a positive beginning to life under Iraola. Liverpool's control arrived in the second half, roughly when his influence did.",
  LAM:  "Mon Sep 21, morning - off with France, the marquee signing still waiting to convince. Barcola took the left at Bournemouth against every preview, forced one save from Petrovic with a deflected curler and was otherwise contained by a thirty-five-year-old. A six, with the standing caveat: it is still early days, and Liverpool want more from a 106m-pound forward.",
  CAM:  "Mon Sep 21, morning - away with Germany, the Anfield question unresolved. A five at Bournemouth, the lowest Liverpool rating, and a hand in the goal Wirtz did not quite touch cleanly; six competitive games now without a goal or an assist. The break is a chance to arrive somewhere before Manchester City do.",
  RAM:  "Mon Sep 21, morning - the doubt of the last matchday is a fortnight behind him, and he is away with the Netherlands. Gakpo passed a warm-up on two sore adductors, switched to the right, and made the winner, three chances created per Opta and 57 per cent of Isak's Liverpool league goals now from his deliveries. He returns as the man who decided the last game before the break.",
  ST:   "Mon Sep 21, morning - twenty-six today, away with Sweden, four league goals in five. Isak was close to anonymous for an hour at Bournemouth and then did the one thing the position exists for, arriving where the blocked ball fell. Already past the three he managed in fourteen Premier League appearances across all of last season; only Erling Haaland has more in the division this year.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili \u00b7 unused at the Vitality; the Chelsea cup tie on 28 October is his likely next start" }, { playerId: 27, reason: "Woodman \u00b7 third-choice, not in at Bournemouth's squad" }],
  LB:  [{ playerId: 32, reason: "Tsimikas \u00b7 an unused substitute again; has not started a league game since Fulham" }],
  LCB: [{ playerId: 5, reason: "Gomez \u00b7 unused at Bournemouth; his next appearance in any shape is his 300th for the club" }, { playerId: 29, reason: "Araujo \u00b7 a centre-half by trade, currently occupying right-back instead" }],
  RCB: [{ playerId: 5, reason: "Gomez \u00b7 the fourth senior centre-back, on the bench for a third straight clean sheet" }, { playerId: 10, reason: "Leoni \u00b7 rejoining group training during the break; Sports Mole pencils mid-October" }],
  RB:  [{ playerId: 9, reason: "Frimpong \u00b7 played right-back in the cup, unused today; the attacking alternative" }, { playerId: 5, reason: "Gomez \u00b7 the only specialist right-back available while Bradley's knee has no club date" }],
  LDM: [{ playerId: 14, reason: "Gravenberch \u00b7 nine minutes off the bench on 81, which is the clearest read on the order" }, { playerId: 20, reason: "Nyoni \u00b7 19 \u00b7 eighteen minutes at the Vitality after starting the cup tie" }],
  RDM: [{ playerId: 14, reason: "Gravenberch \u00b7 the man Mac Allister displaced at Fulham, now a closing substitute" }, { playerId: 17, reason: "Endo \u00b7 unused, available, and leaving in January" }],
  LAM: [{ playerId: 28, reason: "Munoz \u00b7 came on for Barcola on 72; a 5, and still waiting on a start" }, { playerId: 25, reason: "Ngumoha \u00b7 18 \u00b7 unused today, and away with England for four Nations League fixtures" }],
  CAM: [{ playerId: 22, reason: "Gakpo \u00b7 three chances created from the right; the better evidence than the incumbent" }, { playerId: 15, reason: "Szoboszlai \u00b7 has played the ten before; drawn deeper in this shape" }],
  RAM: [{ playerId: 30, reason: "Barcola \u00b7 the flanks swapped at Bournemouth and could swap back" }, { playerId: 26, reason: "Chiesa \u00b7 aiming to resume training by the end of September; Sports Mole pencils 11 October" }],
  ST:  [{ playerId: 22, reason: "Gakpo \u00b7 led the line and scored in the cup; the first cover while Ekitike is out" }, { playerId: 31, reason: "Koumas \u00b7 on for Isak on 81; the false-nine option and the whole depth chart" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-09-21T08:30:00Z",
  reason: "Mon Sep 21, morning. The board sits idle for three weeks: the Premier League has paused and most of this XI is away on international duty, so the eleven below is the side that started the last game, Bournemouth 0-1 Liverpool, held as the baseline for Manchester City at Anfield on Sunday 11 October at 4.30pm. It is a confirmed XI rather than a prediction, a 4-2-3-1: Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Mac Allister, Szoboszlai; Gakpo, Wirtz, Barcola; Isak. The one thing every preview got wrong last time was the front three, where Gakpo took the right and Barcola the left rather than the reverse, which is why those slots keep the lowest confidence. Confidence holds at Medium rather than higher, because three weeks and up to four international fixtures per player sit between this sheet and kickoff, and two absentees are due back into it: Giovanni Leoni rejoins group training during the break and Federico Chiesa is aiming to resume work by the end of the month. Conor Bradley and Hugo Ekitike remain out, Bradley now listed by FotMob for early January 2027 and Ekitike not expected before January.",
};
