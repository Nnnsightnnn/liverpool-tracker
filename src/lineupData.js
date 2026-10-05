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
    // lists early January 2027), Leoni (ACL, The Athletic reports a return later in October; group training unconfirmed) and
    // Chiesa (back, his end-of-September training target lapsed unconfirmed, Sports Mole pencils 11 Oct).
    defaultXI: {
      GK: 1,    // Alisson (the save from Evanilson on 18 that made the clean sheet possible)
      LB: 7,    // Kerkez (ninety minutes, targeted repeatedly over the top, a 6 from the BBC)
      LCB: 3,   // Van Dijk (a 7; third clean sheet in a row alongside Jacquet)
      RCB: 11,  // Jacquet (an 8, the best rating on the field; now a France international)
      RB: 29,   // Araujo (a fifth straight league start out of position; Bradley has no club date)
      LCM: 13,  // Mac Allister (found the space that opened the game up after a slow start)
      CM: 15,   // Szoboszlai (two free-kicks narrowly wide, booked after the interval)
      RCM: 18,  // Wirtz (a 5, the lowest Liverpool rating; part of the goal without touching it cleanly)
      LW: 30,   // Barcola (played the left at the Vitality; Adam Smith largely contained him)
      ST: 23,   // Isak (scored the winner on 57; four league goals in five, past all of last league season)
      RW: 28,   // Munoz (in for Gakpo, withdrawn by the Netherlands and reported out for several weeks)
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
      RCB: 11,  // Jacquet (an 8 and the best on the field; capped by France since)
      RB: 29,   // Araujo (a fifth consecutive league start there; Semenyo attacks that side next)
      LDM: 15,  // Szoboszlai (booked after half-time, two free-kicks narrowly wide)
      RDM: 13,  // Mac Allister (the pivot partner the previews insisted on, and rightly)
      LAM: 30,  // Barcola (played the LEFT at the Vitality, against every preview)
      CAM: 18,  // Wirtz (a 5; no club goal or assist this season; scored for Germany earlier in this window)
      RAM: 28,  // Munoz (in for Gakpo: ankle, withdrawn from the Dutch squad 28 Sep, reported out for several weeks)
      ST: 23,   // Isak (DOUBT: 'a small problem with his thigh' per Potter; holds the slot, Koumas the fallback)
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
      GK: 1,    // Alisson (first choice, rested through the break)
      LCB: 3,   // Van Dijk (fit after the Netherlands' 2-2 in Greece)
      CCB: 11,  // Jacquet (central in a three, the recovery pace the shape wants)
      RCB: 5,   // Gomez (one appearance from 300 for the club; captained the cup tie)
      LWB: 7,   // Kerkez (headed his first Hungary goal on Friday; the attacking option here)
      LCM: 13,  // Mac Allister (a goal and an assist in the cup · the midfielder nobody drops)
      RCM: 15,  // Szoboszlai (the other half of the previews' pivot)
      RWB: 9,   // Frimpong (RWB · the shape that uses him properly against Semenyo)
      LW: 30,   // Barcola (left · the flank he actually took at the Vitality)
      ST: 23,   // Isak (the senior nine, and the only scorer at Bournemouth)
      RW: 28,   // Munoz (right · Gakpo out for several weeks, reported)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Sun Oct 4 (evening: Van Dijk's 100th cap in Netherlands 2-1 Serbia, Gravenberch 60 minutes, Frimpong unused; Wirtz captains Germany 0-0 Greece, Tsimikas 90; Kerkez released by Hungary; Koumas 56 minutes v Denmark; Gakpo still ungraded, Isak still without a bulletin), after
// Bournemouth 0-1 Liverpool: Isak on 57 from a blocked Gakpo cross, a third consecutive clean
// sheet, and a climb from tenth to sixth. Bradley, Chiesa, Ekitike, Leoni and now Gakpo (ankle) are the five out.
// Pointed at Manchester City at home, Sunday 11 October, after the international break.
export const PLAYER_EVIDENCE = {
  1:  "Starts v City · 3 clean sheets",   // Alisson
  2:  "Back from Georgia · cup next",   // Mamardashvili
  3:  "Extension 'open' · LCB v City",   // Van Dijk
  5:  "Fit · 300th app next",   // Gomez
  7:  "Home a week · LB for City",   // Kerkez
  32: "Back from Greece · LB cover",   // Tsimikas
  8:  "Knee · no club date yet",   // Bradley
  9:  "Home · RB cover",   // Frimpong
  10: "ACL · Juve loan asks · late Oct",   // Leoni
  11: "FRA v BEL tonight · RCB",   // Jacquet
  12: "On loan at Levante",   // Ndukwe
  13: "ARG release 6 Oct · RDM",   // Mac Allister
  14: "Home from NED · pivot cover",   // Gravenberch
  15: "HUN v UKR tonight · LDM",   // Szoboszlai
  17: "Fit · Jan exit expected",   // Endo
  18: "Klopp: 'outstanding' · the ten",   // Wirtz
  20: "Back from U21s · pivot depth",   // Nyoni
  22: "Ankle · still no club grade",   // Gakpo
  23: "Doubt · no update since 27 Sep",   // Isak
  24: "Achilles · Jan (club)",   // Ekitike
  25: "Back from ENG · wide cover",   // Ngumoha
  26: "Back · no group training",   // Chiesa
  27: "Third choice · no change",   // Woodman
  28: "RAM v City · for Gakpo",   // Munoz
  29: "Uruguay v India Tue · RB",   // Araujo
  30: "FRA v BEL tonight · LAM",   // Barcola
  31: "Home from Wales · ST fallback",   // Koumas
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in every league game,
// now pointed at Manchester City at home on Sunday 11 October, 4.30pm at Anfield. This is no
// longer a predicted XI assembled from previews. It is the eleven that beat Bournemouth 1-0 on 20 September, confirmed by ESPN and the BBC: Alisson in goal, Van Dijk and Jacquet at centre-back,
// Araujo out of position at right-back, Kerkez at left-back, Szoboszlai and Mac Allister the pivot,
// Gakpo right, Wirtz at the ten, Barcola left, Isak through the middle. Three weeks of international
// football sit between this sheet and the fixture, so it is a baseline rather than a forecast.
// Mon Sep 28 (evening): one forced change from that eleven, Munoz for Gakpo (ankle, reported several weeks).
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS AGAINST MANCHESTER CITY at
// Anfield on Sunday 11 October. (Reviewed Sun Oct 4, evening; levels unchanged since Sat Sep 26.) The basis has changed in kind: this
// is no longer a preview consensus, it is the eleven that started and won at Bournemouth
// last time out. That raises confidence in the spine and lowers it nowhere except the front three,
// because a three-week international break sits in between, Chiesa's return target has lapsed inside it, and the
// one thing the Bournemouth game proved about the wide positions is that the previews could not call which flank
// Gakpo would take. Updated Mon Sep 28 (evening): Gakpo, withdrawn from the Dutch squad and reported out for
// several weeks, is replaced at RAM by Munoz; Isak (thigh, 'a small problem' per Potter) remains a fitness doubt at ST.
export const SLOT_CONFIDENCE = {
  GK: "High",
  LB: "Medium",
  LCB: "High",
  RCB: "High",
  RB: "High",
  LDM: "High",
  RDM: "Medium",
  LAM: "Medium",
  CAM: "Medium",
  RAM: "Low",
  ST: "Low",
};


// ─── Per-slot rationale ────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Sun Oct 4
// (evening); originally set Wed Sep 23 (evening) against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB: "Mon Oct 5, morning - Kerkez has been home since Sunday and gets the whole week with Iraola; Tsimikas is back from Greece. Medium.",
  LCB: "Mon Oct 5, morning - Van Dijk returns to the left with a hundredth cap and, per Football Insider, a contract the club is now open to extending. High.",
  RCB: "Mon Oct 5, morning - Jacquet is predicted to start for France against Belgium tonight, then faces City's nine, whoever that is. High.",
  RB: "Mon Oct 5, morning - Araujo plays India in Kolkata on Tuesday and has the longest journey home; on this sheet he still makes a sixth straight league start. High.",
  LDM: "Mon Oct 5, morning - Szoboszlai finishes his window with Hungary against Ukraine tonight, then anchors the press. High.",
  RDM: "Mon Oct 5, morning - Mac Allister is with Argentina until 6 October; Gravenberch, home from the Dutch camp, is the alternative. Medium.",
  LAM: "Mon Oct 5, morning - Barcola plays Belgium tonight, his last France game of the window; the left is his while Gakpo is out. Medium.",
  CAM: "Mon Oct 5, morning - Wirtz comes back with Klopp's 'outstanding' from Greece; the ten is his. Medium.",
  RAM: "Mon Oct 5, morning - Munoz covers while Gakpo's ankle is still ungraded; Ngumoha the alternative. Low.",
  ST: "Mon Oct 5, morning - Isak has had no club update since 27 September; Koumas, home from Wales, is the fallback. Low.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili \u00b7 five saves for Georgia on Friday, beaten only by Kerkez; the Chelsea cup tie on 28 October is his likely next start" }, { playerId: 27, reason: "Woodman \u00b7 third-choice, not in the squad at Bournemouth" }],
  LB:  [{ playerId: 32, reason: "Tsimikas \u00b7 back from Greece after ninety minutes against Germany" }],
  LCB: [{ playerId: 5, reason: "Gomez \u00b7 unused at Bournemouth; his next appearance in any shape is his 300th for the club" }, { playerId: 29, reason: "Araujo \u00b7 a centre-half by trade, at right-back for Liverpool and in Kolkata with Uruguay until Tuesday" }],
  RCB: [{ playerId: 5, reason: "Gomez \u00b7 the fourth senior centre-back, on the bench for a third straight clean sheet" }, { playerId: 10, reason: "Leoni \u00b7 The Athletic (via CaughtOffside) expects him back later in October; Juventus asking about a loan; group training unconfirmed" }],
  RB:  [{ playerId: 9, reason: "Frimpong \u00b7 played right-back in the cup; an unused substitute for the Netherlands on Sunday" }, { playerId: 5, reason: "Gomez \u00b7 a specialist right-back alongside Frimpong while Bradley's knee has no club date" }],
  LDM: [{ playerId: 14, reason: "Gravenberch \u00b7 nine minutes at Bournemouth; a half-time substitute in Greece on Thursday, a 6 from Goal" }, { playerId: 20, reason: "Nyoni \u00b7 19 \u00b7 sees himself as a six; promoted to England U21s after an U20 assist against France" }],
  RDM: [{ playerId: 14, reason: "Gravenberch \u00b7 displaced at Fulham, a closing substitute since; started and played an hour of the Dutch 2-1 over Serbia on Sunday" }, { playerId: 17, reason: "Endo \u00b7 unused, available, and leaving in January" }],
  LAM: [{ playerId: 25, reason: "Ngumoha \u00b7 18 \u00b7 either flank; made his England debut in Prague" }, { playerId: 18, reason: "Wirtz \u00b7 Rousing The Kop's bold option moves him to the left of the attack" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai \u00b7 has played the ten before; drawn deeper in this shape" }, { playerId: 14, reason: "Gravenberch \u00b7 would free Szoboszlai to push on if Iraola reshuffles" }],
  RAM: [{ playerId: 25, reason: "Ngumoha \u00b7 18 \u00b7 on for Saka on the right in Prague; among the substitutes for the 7-0 in Rijeka on Saturday" }, { playerId: 26, reason: "Chiesa \u00b7 his end-of-September training target lapsed without confirmation; Sports Mole pencils 11 October" }],
  ST:  [{ playerId: 31, reason: "Koumas \u00b7 the only other recognised striker; a 7/10 against Norway, then 56 minutes of a 1-0 defeat by Denmark on Sunday" }, { playerId: 28, reason: "Munoz \u00b7 Rousing The Kop's option to play him centrally" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  generated_at: "2026-10-05T08:30:00Z",
  reason: "Mon Oct 5, morning. No personnel change for Manchester City at Anfield on Sunday 11 October: Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Mac Allister, Szoboszlai; Munoz, Wirtz, Barcola; Isak. Ten of the eleven started at Bournemouth; Gakpo ungraded, Isak without an update since 27 September and Araujo's trip home from India keep it Low.",
};
