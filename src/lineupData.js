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
      RAM: 22,  // Gakpo (DOUBT: left ankle, forced off v Serbia 27 Sep, scan Monday; holds the slot pending it)
      ST: 23,   // Isak (DOUBT: minor thigh problem, sent home from Sweden 27 Sep; expected back for City)
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
  1:  "Kirkby · rested · SotM nominee",   // Alisson
  2:  "Georgia · Tbilisi on Monday",     // Mamardashvili
  3:  "NED · a 5.5 in the Serbia win",       // Van Dijk
  5:  "Kirkby · fit · 300th app next",        // Gomez
  7:  "Hungary · Belfast tomorrow",         // Kerkez
  32: "Greece · Kerkez's understudy",   // Tsimikas
  8:  "Knee · FotMob: early Jan 2027",      // Bradley
  9:  "Cut from NED's 23 for Serbia",     // Frimpong
  10: "ACL · group work this break",       // Leoni
  11: "France · Brussels Mon · POTM list",    // Jacquet
  12: "On loan at Levante",           // Ndukwe
  13: "ARG · renewal now Ward's call",          // Mac Allister
  14: "NED · started, off for Taylor",         // Gravenberch
  15: "Hungary · Belfast tomorrow",   // Szoboszlai
  17: "Kirkby · January exit sanctioned",       // Endo
  18: "GER · Serbia on Thursday",          // Wirtz
  20: "U20s · the six in the cup",               // Nyoni
  22: "Ankle · off 17' v Serbia · scan Mon",       // Gakpo
  23: "Thigh · home from Sweden · doubt",       // Isak
  24: "Achilles · months, not weeks",      // Ekitike
  25: "England · 3 NL games left",         // Ngumoha
  26: "Back · group training by 30 Sep",         // Chiesa
  27: "Third choice · Chelsea cup 28 Oct",       // Woodman
  28: "Spain · cut at Wembley, fresh",    // Munoz
  29: "URU · Seoul on Monday",   // Araujo
  30: "France · Brussels on Monday",          // Barcola
  31: "Wales · sub in Copenhagen loss",         // Koumas
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
  GK: "High",
  LB: "Medium",
  LCB: "High",
  RCB: "High",
  RB: "High",
  LDM: "High",
  RDM: "Medium",
  LAM: "Medium",
  CAM: "Low",
  RAM: "Low",
  ST: "Low",
};


// ─── Per-slot rationale ────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Wed Sep 23
// (evening), against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB: "Sun Sep 27, evening - Belfast tomorrow, the Friday booking carried rather than punished, with Keith Hackett expecting federation charges rather than individual bans. On a day that cost Liverpool two forwards, the hope for Kerkez is simply that he comes home in one piece. The club verdict from the Vitality stands, effort over quality, and Tsimikas is rated no higher. Semenyo attacks this flank at Anfield.",
  LCB: "Sun Sep 27, evening - a 2-1 win in Belgrade for the captain's Netherlands and a 5.5 from Goal's reviewer, uneasy against Serbia's counters. He watched Gakpo go off inside twenty minutes. For Liverpool nothing is in doubt: every league minute bar the cup night, three clean sheets running, a deal to 2027. Haaland, who scored in Oslo on Sunday, is the first name back on 11 October.",
  RCB: "Sun Sep 27, evening - Brussels on Monday with France, and a Player of the Month vote that closes the same day with his club-mate on the list and off the pitch. Jacquet, twenty-one, was ever-present in a September back line that did not concede a league goal. The least complicated thing Liverpool bought in the summer.",
  RB: "Sun Sep 27, evening - Seoul on Monday with Uruguay, and a permanent deal for the loanee is now Julian Ward's decision. Frimpong, the cup alternative, watched the Dutch win from the stands after being cut from the 23. Five straight league starts out of position and three clean sheets say Araujo keeps it for City, with Semenyo the winger to handle.",
  LDM: "Sun Sep 27, evening - Belfast tomorrow and unrepentant about Friday. Booked with Kerkez in the Hungary brawl, with charges rather than bans expected. His contract is signed and his place is not in question; the midfield has none of the forward line's injury problems this week.",
  RDM: "Sun Sep 27, evening - with Argentina, and the renewal he has asked for now has a named decision-maker in Julian Ward, confirmed as sporting director on Saturday. Seven possession wins at the Vitality and undroppable on current evidence.",
  LAM: "Sun Sep 27, evening - Brussels on Monday with France and fit, which on this Sunday counts for more than it did. If Gakpo's scan is bad, the flanks may need Munoz or Ngumoha, both cut from the Wembley squads, beside him. Still without a league goal.",
  CAM: "Sun Sep 27, evening - Germany play Serbia on Thursday. The Carragher case against Wirtz starting against City rests on a team-low 70.3 per cent passing at Bournemouth; Iraola defended him. With two forwards being assessed, the case for dropping the most expensive creator weakens by the day.",
  RAM: "Sun Sep 27, evening - Low now, not for form. Gakpo was forced off after seventeen minutes in Belgrade with a left-ankle injury from a late Sasa Lukic tackle, and Liverpool.com reports a scan on Monday; Xavi hopes it is not serious. He holds the slot pending that scan. Barcola, Munoz and Chiesa, if his back holds, are the alternatives.",
  ST: "Sun Sep 27, evening - Low for fitness, not form. Isak is home from Sweden with a minor thigh problem, per Graham Potter, and will be assessed at the AXA; the club calls it minor and Sports Mole expects him back for City. He holds the slot on that reading. Koumas, a substitute in Copenhagen on Sunday, is the only other fit recognised striker.",
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
  RAM: [{ playerId: 30, reason: "Barcola \u00b7 fit with France; the flanks swapped at Bournemouth and could swap back if Gakpo misses out" }, { playerId: 26, reason: "Chiesa \u00b7 aiming to resume training by the end of September; Sports Mole pencils 11 October" }],
  ST:  [{ playerId: 31, reason: "Koumas \u00b7 on for Isak on 81 at Bournemouth; the only other fit recognised striker while Isak is assessed" }, { playerId: 22, reason: "Gakpo \u00b7 led the line in the cup, but now an ankle doubt himself" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  generated_at: "2026-09-27T22:30:00Z",
  reason: "Sun Sep 27, evening. Two names on the baseline eleven are now doubts: Isak, home from Sweden with a minor thigh problem, and Gakpo, forced off in Belgrade with an ankle injury and due a scan on Monday. Both hold their slots on the sheet for Manchester City at Anfield on Sunday 11 October because both injuries are described as minor, but the confidence drops to Low until the assessments are known. The 4-2-3-1 is otherwise the side that started at Bournemouth: Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Mac Allister, Szoboszlai; Gakpo, Wirtz, Barcola; Isak. Koumas is the fallback at nine. Bradley and Ekitike remain out.",
};
