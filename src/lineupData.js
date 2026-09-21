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
    // 4-2-3-1 below. Reviewed Mon Sep 21 (evening), after Bournemouth 0-1 Liverpool at the
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
    // football now separate this sheet from the fixture it points at, so treat it as a baseline. One
    // slot became contested this evening: Carragher argued publicly that Wirtz should not start at
    // CAM against City, citing Opta's card of a team-low 70.3% passing accuracy and 16 losses of
    // possession. Iraola has said nothing, so the slot holds pending team news in October.
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
    // Reviewed Mon Sep 21 (evening), pointed at Manchester City at Anfield on 11 October. The
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
// Hand-curated from RESULTS + injuryNote context, reviewed Mon Sep 21 (evening), after
// Bournemouth 0-1 Liverpool: Isak on 57 from a blocked Gakpo cross, a third consecutive clean
// sheet, and a climb from tenth to sixth. Bradley, Chiesa, Ekitike and Leoni remain the four out.
// Pointed at Manchester City at home, Sunday 11 October, after the international break.
export const PLAYER_EVIDENCE = {
  1:  "Brazil \u00b7 77.8% saves, 5th in the PL",   // Alisson
  2:  "Senior keeper at Kirkby for 3 weeks",     // Mamardashvili
  3:  "NED \u00b7 'not the hardest job' - Alisson",       // Van Dijk
  5:  "Stays at Kirkby \u00b7 300th next game",        // Gomez
  7:  "Hungary \u00b7 tackled his own winger",         // Kerkez
  32: "Unused sub \u00b7 no start since Fulham",   // Tsimikas
  8:  "Knee \u00b7 club now scouting a RB clause",      // Bradley
  9:  "NED \u00b7 named as the dropped man",     // Frimpong
  10: "ACL \u00b7 back with the group this week",       // Leoni
  11: "France \u00b7 6 recoveries, 3 of 4 duels",    // Jacquet
  12: "On loan at Levante \u00b7 no LFC squad",           // Ndukwe
  13: "ARG \u00b7 'no firm decision' on his deal",          // Mac Allister
  14: "NED \u00b7 new deal, outside the pivot",         // Gravenberch
  15: "Hungary \u00b7 signed, unlike his partner",   // Szoboszlai
  17: "Kirkby \u00b7 sale sanctioned for January",       // Endo
  18: "Carragher: 'can't be in the team'",          // Wirtz
  20: "AXA \u00b7 18 mins off the bench last out",               // Nyoni
  22: "NED \u00b7 57% of Isak's LFC goals",           // Gakpo
  23: "Sweden \u00b7 4 of LFC's 7 league goals",       // Isak
  24: "Achilles \u00b7 Inter or Lens, January",      // Ekitike
  25: "England \u00b7 new deal still unsigned",         // Ngumoha
  26: "On the grass by month's end \u00b7 5th fwd",         // Chiesa
  27: "Third choice \u00b7 Chelsea cup at best",       // Woodman
  28: "Fourth wide forward \u00b7 18 mins last",    // Munoz
  29: "The change that fixed the defence",   // Araujo
  30: "France \u00b7 the quieter \u00a3106m forward",          // Barcola
  31: "Sole cover for Isak until January",         // Koumas
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
  LB:   "Mon Sep 21, evening - the shirt is his by default rather than by acclaim, and it stays that way for three weeks. Kerkez went the full ninety at the club that sold him, credited by the BBC for effort rather than quality after being targeted repeatedly over the top, and produced the one moment Carragher could not explain, a twentieth-minute tackle on his own number seven. Tsimikas did not leave the bench and is rated no higher. No market until January, and Semenyo attacks this flank when the season resumes.",
  LCB:  "Mon Sep 21, evening - the compliment of the day was paid to his partner and belonged to him. Alisson, asked about Jacquet, replied that it is not the hardest job in the world to play alongside Virgil van Dijk, which is both a joke and the most accurate description of this back four available. A seven at Bournemouth, every league minute bar the cup night, three clean sheets running. Netherlands duty now; Haaland is the first name back.",
  RCB:  "Mon Sep 21, evening - the numbers published today are better than the award he won. Opta has Jacquet winning possession six times at Bournemouth, level with Araujo and second only to Mac Allister, and taking three of his four duels, on top of a man-of-the-match performance and a third consecutive clean sheet. He is twenty-one, three months into English football, and away with France for the first time. The least complicated thing Liverpool bought in the summer.",
  RB:   "Mon Sep 21, evening - credited today with fixing the defence, and charged in the same breath with the loosest ball-handling on the pitch. A Rousing The Kop reading of Iraola's first month names Araujo's installation here as one of two decisive calls; Opta has him losing possession twenty-four times at the Vitality, more than anyone in the game. Five consecutive league starts out of position, and Liverpool are now reported to be studying a Real Sociedad release clause rather than waiting on Bradley's knee.",
  LDM:  "Mon Sep 21, evening - he has the contract his partner cannot get, which is the quiet subtext of every midfield line written tonight. On the pitch, purpose without payoff: two free-kicks narrowly wide, a booking after the interval, a withdrawal on eighty-one. Carragher's critique of the number ten included a defence of him, arguing that playing behind Wirtz forces Szoboszlai into a central-midfield role he is not built for. Hungary duty now.",
  RDM:  "Mon Sep 21, evening - the best midfielder at the club and the only one nobody has offered a contract. Speaking to ESPN from the Argentina camp tonight, Mac Allister said there is no firm decision on a future Liverpool declined to open talks about, with two years left, while Szoboszlai and Gravenberch signed. He won possession seven times at the Vitality, more than any Liverpool player, and has started five of seven under Iraola. Undroppable and, apparently, unrenewable.",
  LAM:  "Mon Sep 21, evening - the expensive forward who escaped the evening's criticism, which is not the same as earning the flank. Barcola took the left at the Vitality against every preview, forced one save from Petrovic with a deflected curler, and was otherwise handled by a thirty-five-year-old on his 431st appearance for the club. A six. The standing caveat travels with him to France: early days, and a 106m-pound forward without a league goal.",
  CAM:  "Mon Sep 21, evening - the only slot on this board somebody has publicly demanded be changed. Carragher called Wirtz's afternoon the poorest he has seen from him in a Liverpool shirt and named the consequence, that he could not be in the team against Manchester City. Opta's card: a team-low 70.3 per cent passing accuracy, sixteen possessions lost, and a joint-game-high three chances created, which is the whole argument in one line. He reports late to Klopp's Germany and is in contention for Serbia on 1 October.",
  RAM:  "Mon Sep 21, evening - the most reliable creator at the club, on loan to the Netherlands for three weeks. Gakpo passed a warm-up on two sore adductors, was switched to the right, and delivered the ball that became the goal, with three chances created per Opta and Squawka putting 57 per cent of Isak's Liverpool league goals down to his deliveries. He has played three positions in five games, which is why this slot is not higher than Medium.",
  ST:   "Mon Sep 21, evening - four of Liverpool's seven league goals belong to this slot, which is a strength and an exposure in the same sentence. Isak was close to anonymous for an hour at the Vitality and then did the one thing the position exists for, arriving where the blocked ball fell. He is past the three he managed in fourteen Premier League appearances across all of last season, and only Haaland has more this year. Sweden duty; Koumas is the entire cover.",
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
  generated_at: "2026-09-21T22:30:00Z",
  reason: "Mon Sep 21, evening. One slot on this board is now a public argument. The eleven below remains the side that started the last game, Bournemouth 0-1 Liverpool, held as the baseline for Manchester City at Anfield on Sunday 11 October at 4.30pm: a confirmed XI rather than a prediction, in a 4-2-3-1 of Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Mac Allister, Szoboszlai; Gakpo, Wirtz, Barcola; Isak. What changed this evening is the number ten. Jamie Carragher, reviewing Opta's card on Florian Wirtz (a team-low 70.3 per cent passing accuracy, sixteen possessions lost, three chances created), said flatly that he would not pick him against City, which does not make it Iraola's view but does make the slot contested for the first time. Confidence stays Medium: three weeks and up to four international fixtures per player sit between this sheet and kickoff, Giovanni Leoni rejoins group training during the break and Federico Chiesa is aiming to resume work by the end of the month. Conor Bradley and Hugo Ekitike remain out, Bradley listed by FotMob for early January 2027 and Ekitike not expected before January.",
};
