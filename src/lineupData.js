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
    // 4-2-3-1 below. Reviewed Wed Sep 23 (evening), after Bournemouth 0-1 Liverpool at the
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
    // Sep 4; Forest drawn 2-2 on Aug 29; Newcastle drawn 2-2 away on Aug 23). Reviewed Wed Sep 23
    // (evening). The XI below is no longer a prediction assembled from previews: it is the eleven
    // that started at Bournemouth, confirmed by ESPN and the BBC. The one thing every preview got
    // wrong was the front three, where Gakpo played the right and Barcola the left. Substitutions:
    // Munoz for Barcola and Nyoni for Wirtz on 72; Gravenberch for Szoboszlai and Koumas for Isak
    // on 81. Unused: Mamardashvili, Gomez, Tsimikas, Frimpong, Ngumoha. Three weeks of international
    // football now separate this sheet from the fixture it points at, so treat it as a baseline. One
    // slot stays contested: Carragher argued Wirtz should not start at CAM against City, but Iraola
    // has since defended him on Sky Sports and the player replied on Instagram, so the slot holds the
    // incumbent pending October team news rather than flipping on a pundit's call.
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
    // Reviewed Wed Sep 23 (evening), pointed at Manchester City at Anfield on 11 October. The
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
// Hand-curated from RESULTS + injuryNote context, reviewed Wed Sep 23 (evening), after
// Bournemouth 0-1 Liverpool: Isak on 57 from a blocked Gakpo cross, a third consecutive clean
// sheet, and a climb from tenth to sixth. Bradley, Chiesa, Ekitike and Leoni remain the four out.
// Pointed at Manchester City at home, Sunday 11 October, after the international break.
export const PLAYER_EVIDENCE = {
  1:  "Kirkby · Save of the Month nominee",   // Alisson
  2:  "Georgia · Ukraine in Tbilisi Mon",     // Mamardashvili
  3:  "NED · at Serbia today",       // Van Dijk
  5:  "Kirkby · 300th appearance next",        // Gomez
  7:  "Booked in Hungary brawl · Belfast Mon",         // Kerkez
  32: "Greece · assisted 95th-min winner",   // Tsimikas
  8:  "Knee · FotMob: early Jan 2027",      // Bradley
  9:  "NED · at Serbia today",     // Frimpong
  10: "ACL · group work this break",       // Leoni
  11: "On Sept POTM shortlist · France",    // Jacquet
  12: "On loan at Levante",           // Ndukwe
  13: "ARG · renewal still unoffered",          // Mac Allister
  14: "NED · at Serbia today · 9 mins last",         // Gravenberch
  15: "Booked in Hungary brawl · Belfast Mon",   // Szoboszlai
  17: "Kirkby · January exit sanctioned",       // Endo
  18: "GER · Serbia 1 Oct · debate runs",          // Wirtz
  20: "Sees himself as a six · LFC feature",               // Nyoni
  22: "Rescued NED v GER · at Serbia today",       // Gakpo
  23: "POTM vote closes Mon · Poland",       // Isak
  24: "Achilles · January at earliest",      // Ekitike
  25: "Cut from England's Wembley 23",         // Ngumoha
  26: "Group training by month's end",         // Chiesa
  27: "Third choice · Chelsea cup 28 Oct",       // Woodman
  28: "Cut from Spain's Wembley 23",    // Munoz
  29: "URU · Seoul Mon · 67 mins v Japan",   // Araujo
  30: "France · Brussels on Monday",          // Barcola
  31: "Wales · Denmark at home today",         // Koumas
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
// Anfield on Sunday 11 October. (Reviewed Sat Sep 26, morning.) The basis has changed in kind: this
// is no longer a preview consensus, it is the eleven that started and won at Bournemouth
// last time out. That raises confidence in the spine and lowers it nowhere except the front three,
// because a three-week international break sits in between, Chiesa is due back inside it, and the
// one thing today proved about the wide positions is that the previews could not call which flank
// Gakpo would take. Nothing here is a fitness doubt: every one of the eleven came through ninety
// minutes or was withdrawn tactically.
export const SLOT_CONFIDENCE = {
  GK:  "High",      // Alisson · first choice in the league all season, three clean sheets running
  LB:  "Sun Sep 27, morning - booked in Friday's Hungary brawl, Belfast on Monday still expected. The full ninety at Bournemouth, credited for effort over quality; Tsimikas is rated no higher.",    // Kerkez · started and struggled; Tsimikas is the only alternative and is rated no higher
  LCB: "High",      // Van Dijk · every league minute this season,      // Van Dijk · every league minute this season
  RCB: "Sun Sep 27, morning - shortlisted for September's Player of the Month and unused as France won in Turkiye, which is a fair summary of where a twenty-one-year-old stands: established at his club, queueing for his country. Jacquet won possession six times at Bournemouth per Opta and three of his four duels, was ever-present in a September back line that did not concede in the league, and is the obvious long-term answer beside whoever succeeds Van Dijk.",      // Jacquet · every league minute, and the best player on the pitch today,      // Jacquet · every league minute, and the best player on the pitch today
  RB:  "High",      // Araujo · five consecutive league starts there, and Bradley is not close,      // Araujo · five consecutive league starts there, and Bradley is not close
  LDM: "Sun Sep 27, morning - booked in the Hungary brawl, unrepentant, and still the settled half of the pivot; his deal is signed and his place is not in question.",    // Szoboszlai · started and was booked; Gravenberch came on for him,    // Szoboszlai · started and was booked; Gravenberch came on for him
  RDM: "Medium",    // Mac Allister · the settled partner, but the pivot has rotated once already,    // Mac Allister · the settled partner, but the pivot has rotated once already
  LAM: "Sun Sep 27, morning - a quarter-hour off the bench in France's 1-0 win in Turkiye, and the quiet around him holds. Barcola took the left at the Vitality against every preview, forced one save from Petrovic with a deflected curler, and was otherwise handled by a thirty-five-year-old on his 431st appearance for the club. A six. Early days, and a 106m-pound forward without a league goal.",       // Barcola · took the left today against every preview; Munoz replaced him on 72
  CAM: "Low",       // Wirtz · a 5, six games without a contribution, and Gakpo's evidence behind him
  RAM: "Medium",    // Gakpo · made the goal from the right, but he has now played three positions in five games
  ST:  "Sun Sep 27, morning - the only senior nine at the club scored for Sweden on Friday, a twentieth-minute opener in a 2-1 win over Romania, in the week the Premier League shortlisted him for September. He is past the three he managed in fourteen Premier League appearances across all of last season, and only Haaland, also on four, has as many this year. Koumas is the entire cover.",      // Isak · the only senior centre-forward, and four goals in five
};


// ─── Per-slot rationale ────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Wed Sep 23
// (evening), against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB:   "Sun Sep 27, morning - Belfast on Monday, a booking heavier after Friday's brawl, in which Kerkez threw Matviyenko to the floor per Football Insider; Keith Hackett expects federation charges rather than individual bans, so he is still expected to play. At the Vitality he went the full ninety at the club that sold him, credited by the BBC for effort rather than quality. Tsimikas, with Greece and a stoppage-time assist, is rated no higher. No market until January, and Semenyo attacks this flank at Anfield.",
  LCB:  "Sun Sep 27, morning - the captain takes the Netherlands to Belgrade today, the Klopp reunion behind him after Gakpo rescued a 1-1 draw in Amsterdam. His Liverpool deal runs to 2027 with talks not due until next year, the Netherlands commitment to Euro 2028. On the pitch nothing is in doubt: every league minute bar the cup night, a seven at Bournemouth, three clean sheets running. Haaland is the first name back on 11 October.",
  RCB:  "Sun Sep 27, morning - a year on from Leoni's knee, the man who arrived in his absence is on September's Player of the Month shortlist. Jacquet, twenty-one, won possession six times at Bournemouth per Opta and three of his four duels, held a September back line that did not concede a league goal, and is the obvious long-term answer beside whoever succeeds Van Dijk. The least complicated thing Liverpool bought in the summer.",
  RB:   "Sun Sep 27, morning - with Uruguay in Seoul on Monday, and the slot the first brief any new recruitment chief reads. AnfieldWatch reports the club is weighing a permanent deal for Araujo, on loan from Barcelona, while Benfica's Banjaqui and Feyenoord's Read sit on the January list. Five straight league starts out of position and three clean sheets say he keeps it for City, with Semenyo the winger he must handle.",
  LDM:  "Sun Sep 27, morning - Belfast on Monday, and unrepentant after Friday: football, he said, is all about fighting. Booked with Kerkez as Hungary lost 1-0 to Ukraine, with federation charges rather than bans expected. At the Vitality it was purpose without payoff, two free-kicks narrowly wide, a booking and a withdrawal on eighty-one. Nyoni, whom the club's own site calls a match for Iraola's style, is the young alternative.",
  RDM:  "Sun Sep 27, morning - with Argentina, and the midfield file gained a name on Saturday: TEAMtalk has Liverpool exploring Atletico's Marcos Llorente, out of contract next summer. Mac Allister has said he was very sad not to be offered what Szoboszlai signed and that two more years would be perfect; the renewal waits on the sporting director's office. Seven possession wins at the Vitality, and undroppable on current evidence.",
  LAM:  "Sun Sep 27, morning - France in Brussels on Monday, and the two men who might have pushed him spent Saturday out of the Wembley squads. Barcola took the left at the Vitality against every preview, forced one save from Petrovic, and was otherwise handled by a thirty-five-year-old on his 431st appearance. A six. Munoz and Ngumoha are the alternatives, and a 106m-pound forward still without a league goal is the caveat that travels with him.",
  CAM:  "Sun Sep 27, morning - the drop-him debate runs on while the player waits on his country. Carragher called Wirtz's Bournemouth afternoon the poorest he has seen from him in a Liverpool shirt and said he cannot start against City, citing Opta's team-low 70.3 per cent passing accuracy and three chances created; Iraola disagreed on Sky Sports and Wirtz answered on Instagram. He reports late to Klopp's Germany, in line for Serbia on 1 October.",
  RAM:  "Sun Sep 27, morning - the Netherlands he scored for in midweek go to Belgrade today. For the club he passed a warm-up on two sore adductors at Bournemouth, switched to the right, and delivered the ball that became Isak's winner, three chances created per Opta. He has played three positions in five games, which is why this slot is not higher than Medium.",
  ST:   "Sun Sep 27, morning - the only senior nine is Sweden's until Monday, when they play Poland and his Player of the Month vote closes. Isak was close to anonymous for an hour at the Vitality and then did the one thing the position exists for, arriving where the blocked ball fell. Four in five leaves him level with Haaland at the top of the division. Koumas is the entire cover.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili \u00b7 unused at the Vitality; the Chelsea cup tie on 28 October is his likely next start" }, { playerId: 27, reason: "Woodman \u00b7 third-choice, not in at Bournemouth's squad" }],
  LB:  [{ playerId: 32, reason: "Tsimikas \u00b7 unused at the Vitality; set up Greece's late winner in Belgrade this week" }],
  LCB: [{ playerId: 5, reason: "Gomez \u00b7 unused at Bournemouth; his next appearance in any shape is his 300th for the club" }, { playerId: 29, reason: "Araujo \u00b7 a centre-half by trade, currently occupying right-back instead" }],
  RCB: [{ playerId: 5, reason: "Gomez \u00b7 the fourth senior centre-back, on the bench for a third straight clean sheet" }, { playerId: 10, reason: "Leoni \u00b7 rejoining group training during the break; Sports Mole pencils mid-October" }],
  RB:  [{ playerId: 9, reason: "Frimpong \u00b7 played right-back in the cup, unused at the Vitality; the attacking alternative" }, { playerId: 5, reason: "Gomez \u00b7 the only specialist right-back available while Bradley's knee has no club date" }],
  LDM: [{ playerId: 14, reason: "Gravenberch \u00b7 nine minutes off the bench on 81, which is the clearest read on the order" }, { playerId: 20, reason: "Nyoni \u00b7 19 \u00b7 sees himself as a six; ninety minutes for England U20s on Friday" }],
  RDM: [{ playerId: 14, reason: "Gravenberch \u00b7 the man Mac Allister displaced at Fulham, now a closing substitute" }, { playerId: 17, reason: "Endo \u00b7 unused, available, and leaving in January" }],
  LAM: [{ playerId: 28, reason: "Munoz \u00b7 on for Barcola on 72 at the Vitality; cut from Spain's Wembley squad, still waiting on a start" }, { playerId: 25, reason: "Ngumoha \u00b7 18 \u00b7 left out of England's 23 against Spain; three Nations League games left" }],
  CAM: [{ playerId: 22, reason: "Gakpo \u00b7 three chances created from the right; the better evidence than the incumbent" }, { playerId: 15, reason: "Szoboszlai \u00b7 has played the ten before; drawn deeper in this shape" }],
  RAM: [{ playerId: 30, reason: "Barcola \u00b7 the flanks swapped at Bournemouth and could swap back" }, { playerId: 26, reason: "Chiesa \u00b7 aiming to resume training by the end of September; Sports Mole pencils 11 October" }],
  ST:  [{ playerId: 22, reason: "Gakpo \u00b7 led the line and scored in the cup; the first cover while Ekitike is out" }, { playerId: 31, reason: "Koumas \u00b7 on for Isak on 81; the false-nine option and the whole depth chart" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-09-27T08:30:00Z",
  reason: "Sun Sep 27, morning. The eleven holds: the side that started at Bournemouth remains the baseline for Manchester City at Anfield on Sunday 11 October at 4.30pm, a 4-2-3-1 of Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Mac Allister, Szoboszlai; Gakpo, Wirtz, Barcola; Isak. No injury or selection news changed a name on it this weekend; September's shortlists, which named Iraola, Isak and Jacquet, reward the eleven rather than alter it. Monday, when most of them play abroad, is the risk day. Confidence stays Medium: fourteen days out and most of the side away. Bradley and Ekitike remain out.",
};
