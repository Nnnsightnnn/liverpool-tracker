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
    // 4-2-3-1 below. Reviewed Wed Sep 23 (evening; re-checked Wed Oct 7 morning), after Bournemouth 0-1 Liverpool at the
    // Vitality, a third consecutive Premier League clean sheet and a rise from tenth to sixth.
    // Now pointed at Manchester City at home, Sunday 11 October, 4.30pm, Anfield, Sky Sports
    // Main Event, the first fixture after a three-week international break. The XI below is the
    // side that actually started at Bournemouth, per ESPN and the BBC: Alisson; Araujo, Jacquet,
    // Van Dijk, Kerkez; Mac Allister, Szoboszlai; Gakpo, Wirtz, Barcola; Isak (Munoz now replaces Gakpo; Jacquet a hamstring
    // doubt since Mon Oct 5 evening, sent back by France for assessment on Tue Oct 6). One deviation from
    // every published preview: Gakpo took the RIGHT flank and Barcola the left, not the reverse.
    // Out: Ekitike (Achilles, January at the earliest), Bradley (knee, no club date; FotMob now
    // lists early January 2027), Leoni (ACL, The Athletic reports a return later in October; group training unconfirmed) and
    // Chiesa is no longer out: back with the group on Thu 8 Oct (Liverpool Echo via RotoWire), status doubtful, no minutes yet.
    // Fri 9 Oct (evening): Iraola ruled Isak (thigh) and Gakpo (ankle) OUT of City; both now status injured. Jacquet fit.
    defaultXI: {
      GK: 1,    // Alisson (the save from Evanilson on 18 that made the clean sheet possible)
      LB: 7,    // Kerkez (ninety minutes, targeted repeatedly over the top, a 6 from the BBC)
      LCB: 3,   // Van Dijk (a 7; third clean sheet in a row alongside Jacquet)
      RCB: 11,  // Jacquet (declared 'fit and ready to go' by Iraola on Fri 9 Oct)
      RB: 29,   // Araujo (a fifth straight league start out of position; Bradley has no club date)
      LCM: 13,  // Mac Allister (found the space that opened the game up after a slow start)
      CM: 15,   // Szoboszlai (two free-kicks narrowly wide, booked after the interval)
      RCM: 18,  // Wirtz (a 5, the lowest Liverpool rating; part of the goal without touching it cleanly)
      LW: 30,   // Barcola (played the left at the Vitality; Adam Smith largely contained him)
      ST: 31,   // Koumas (Isak ruled out by Iraola on Fri 9 Oct; 'a No.9, we only have Koumas right now')
      RW: 28,   // Munoz (Gakpo ruled out of City by Iraola on Fri 9 Oct, ankle)
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
    // Sep 4; Forest drawn 2-2 on Aug 29; Newcastle drawn 2-2 away on Aug 23). Reviewed Wed Sep 23 (re-checked Tue Oct 6 morning: Jacquet hamstring doubt, Haaland reported fit for City)
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
      RCB: 11,  // Jacquet ('fit and ready to go', Iraola, Fri 9 Oct; Gomez the cover)
      RB: 29,   // Araujo (a fifth consecutive league start there; Semenyo attacks that side next)
      LDM: 15,  // Szoboszlai (booked after half-time, two free-kicks narrowly wide)
      RDM: 13,  // Mac Allister (the pivot partner the previews insisted on, and rightly)
      LAM: 30,  // Barcola (played the LEFT at the Vitality, against every preview)
      CAM: 18,  // Wirtz (a 5; no club goal or assist this season; scored for Germany earlier in this window)
      RAM: 28,  // Munoz (Gakpo ruled out of City by Iraola on Fri 9 Oct: ankle, 'about dealing with the pain')
      ST: 31,   // Koumas (Isak ruled out by Iraola on Fri 9 Oct; 'Koumas has our trust'. Sports Mole's alternative is Barcola up front)
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
    // Reviewed Wed Sep 23 (evening; re-checked Tue Oct 6 morning), pointed at Manchester City at Anfield on 11 October. The
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
      CCB: 11,  // Jacquet (declared fit on Fri 9 Oct)
      RCB: 5,   // Gomez (one appearance from 300 for the club; captained the cup tie)
      LWB: 7,   // Kerkez (headed his first Hungary goal on 2 October; the attacking option here)
      LCM: 13,  // Mac Allister (a goal and an assist in the cup · the midfielder nobody drops)
      RCM: 15,  // Szoboszlai (the other half of the previews' pivot)
      RWB: 9,   // Frimpong (RWB · the shape that uses him properly against Semenyo)
      LW: 30,   // Barcola (left · the flank he actually took at the Vitality)
      ST: 31,   // Koumas (Isak ruled out of City, Fri 9 Oct)
      RW: 28,   // Munoz (right · Gakpo ruled out of City, Fri 9 Oct)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Fri Oct 9 (evening: Iraola rules Isak and Gakpo out of City, both now injured; Jacquet fit; Koumas 'has our trust'). Earlier, Fri Oct 9 (morning: Opta Analyst preview, Rousing The Kop on Isak and Gakpo in kit, Araujo interview; no status change). Earlier, Thu Oct 8 (morning: club stats preview and Squawka figures; no status change). Earlier, Tue Oct 6 (evening: Zidane calls Jacquet slightly injured and reports lean towards Sunday, no club word; Araujo unused in Uruguay 6-1 India; Mac Allister with Argentina for Messi's farewell; Mamardashvili's penalty save in Belfast; Gakpo still ungraded, Isak still without a bulletin), after
// Bournemouth 0-1 Liverpool: Isak on 57 from a blocked Gakpo cross, a third consecutive clean
// sheet, and a climb from tenth to sixth. Bradley, Chiesa, Ekitike and Leoni are out; Gakpo (ankle) moved from out to doubt on Wed Oct 7 evening after Iraola did not rule him out.
// Pointed at Manchester City at home, Sunday 11 October, after the international break.
export const PLAYER_EVIDENCE = {
  1:  "Starts · Haaland declared ready",   // Alisson
  2:  "Back-up · Chelsea cup tie likelier",   // Mamardashvili
  3:  "LCB · captain v Haaland",   // Van Dijk
  5:  "First CB cover · Jacquet passed fit",   // Gomez
  7:  "LB · unchanged from Bournemouth",   // Kerkez
  32: "LB cover · ninety v Germany",   // Tsimikas
  8:  "Knee · no club date",   // Bradley
  9:  "RB/RWB option · bench for City",   // Frimpong
  10: "ACL · not yet in group work",   // Leoni
  11: "'Fit and ready to go' · starts",   // Jacquet
  12: "On loan at Levante",   // Ndukwe
  13: "Pivot · fit after late return",   // Mac Allister
  14: "Pivot cover · bench for City",   // Gravenberch
  15: "Pivot · ten if Wirtz goes up",   // Szoboszlai
  17: "Emergency CB · January exit",   // Endo
  18: "CAM · the supply without Isak",   // Wirtz
  20: "Pivot depth · 19",   // Nyoni
  22: "Ankle · ruled out of City",   // Gakpo
  23: "Thigh · ruled out of City",   // Isak
  24: "Achilles · out long-term",   // Ekitike
  25: "Front-three option · Sports Mole XI",   // Ngumoha
  26: "'Maybe we recover' · no minutes",   // Chiesa
  27: "Third choice",   // Woodman
  28: "RAM · right side, Gakpo out",   // Munoz
  29: "RB · 'very, very comfortable'",   // Araujo
  30: "LAM · or ST per Sports Mole",   // Barcola
  31: "ST · 'has our trust' (Iraola)",   // Koumas
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in every league game,
// now pointed at Manchester City at home on Sunday 11 October, 4.30pm at Anfield. This is no
// longer a predicted XI assembled from previews. It is the eleven that beat Bournemouth 1-0 on 20 September, confirmed by ESPN and the BBC: Alisson in goal, Van Dijk and Jacquet at centre-back,
// Araujo out of position at right-back, Kerkez at left-back, Szoboszlai and Mac Allister the pivot,
// Gakpo right, Wirtz at the ten, Barcola left, Isak through the middle. Three weeks of international
// football sit between this sheet and the fixture, so it is a baseline rather than a forecast.
// Mon Sep 28 (evening): one forced change from that eleven, Munoz for Gakpo (ankle, reported several weeks).
// Mon Oct 5 (evening): Jacquet (left hamstring strain with France) becomes a doubt at RCB; held pending assessment.
// Tue Oct 6 (morning): no personnel change. The FFF sent Jacquet back with no timeline; Haaland reported fit for City.
// Tue Oct 6 (evening): no personnel change. Jacquet's strain reported as slight (Zidane; Liverpool Echo via Yahoo), RCB raised Low to Medium.
// Fri Oct 9 (evening): no personnel change. Iraola ruled Isak and Gakpo OUT of City at his 1.30pm presser and called Koumas the only
//   natural nine ('has our trust'); Jacquet 'fit and ready to go'. RCB raised Medium to High, ST raised Low to Medium. Sports Mole picks Barcola at ST.
// Fri Oct 9 (morning): no personnel change. Isak and Gakpo in kit in the Inside Training video (Rousing The Kop) but still major doubts;
//   RotoWire picks Isak and Gomez, held here pending Iraola's 1.30pm presser; RCB lowered High to Medium.
// Thu Oct 8 (evening): ONE personnel change, Koumas for Isak at ST in all three shapes. Isak and Gakpo missed the first session after
//   the break and are major doubts (Liverpool Echo); Jacquet trained (CaughtOffside), RCB raised to High; Chiesa back with the group.
// Thu Oct 8 (morning): no personnel change. No overnight club word on Isak, Gakpo or Jacquet; Squawka picks Gakpo over Munoz, held here.
// Wed Oct 7 (evening): no personnel change. Iraola: Isak and Gakpo injured, 'a matter of if they are going to recover in time'; Gakpo now a doubt, not out; Jacquet unmentioned.
// Wed Oct 7 (morning): no personnel change. Window over, Mac Allister last home (79 minutes of Messi's farewell, VAVEL); still no club word on Jacquet, Isak or Gakpo.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS AGAINST MANCHESTER CITY at
// Anfield on Sunday 11 October. (Reviewed Fri Oct 9, evening: RCB raised Medium to High after Iraola declared Jacquet 'fit and ready to go'; ST raised Low to Medium after Iraola ruled Isak out and named Koumas the only natural nine. Fri Oct 9, morning: RCB lowered from High to Medium because RotoWire still lists Jacquet's hamstring tightness and picks Gomez, against Rousing The Kop's report that he took the full session; other levels unchanged. Thu Oct 8, evening: RCB raised to High after Jacquet trained; RAM raised to Medium with Gakpo absent from training; ST stays Low with Koumas in. Thu Oct 8, morning: levels unchanged, no new bulletin. Wed Oct 7, evening: levels unchanged after Iraola's update on Isak and Gakpo. Wed Oct 7, morning: levels unchanged, no club bulletin on Jacquet, Isak or Gakpo. Tue Oct 6, evening: RCB raised from Low to Medium on reports that Jacquet's strain is slight, unconfirmed by the club. Tue Oct 6, morning: levels unchanged. Mon Oct 5, evening: RCB cut from High to Low after Jacquet's left hamstring strain in the France camp; other levels unchanged since Sat Sep 26.) The basis has changed in kind: this
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
  RAM: "Medium",
  ST: "Medium",
};


// ─── Per-slot rationale ────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Fri Oct 9
// (evening); originally set Wed Sep 23 (evening) against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB: "Fri Oct 9, evening - Kerkez, untouched by Friday's injury news and in Sports Mole's evening XI; Tsimikas the cover. Medium.",
  LCB: "Fri Oct 9, evening - Van Dijk, with his usual partner restored now Jacquet is passed fit. High.",
  RCB: "Fri Oct 9, evening - Jacquet: 'He is fit and ready to go' (Iraola, via Roundtable Sports). Gomez first cover. High.",
  RB: "Fri Oct 9, evening - Araujo, a sixth straight league start at right-back in Sports Mole's XI as in this one. High.",
  LDM: "Fri Oct 9, evening - Szoboszlai, voted LFC Goal of the Month on Friday for his volley against Spurs. High.",
  RDM: "Fri Oct 9, evening - Mac Allister, beside Szoboszlai in every Friday preview; Anderson is his assignment. Medium.",
  LAM: "Fri Oct 9, evening - Barcola on the left here; Sports Mole moves him to striker with Ngumoha wide. Medium.",
  CAM: "Fri Oct 9, evening - Wirtz, the supply line now Isak and Gakpo are out; 0.39 xA in 403 league minutes (Opta Analyst). Medium.",
  RAM: "Fri Oct 9, evening - Munoz, with Gakpo ruled out by Iraola; Ngumoha the alternative. Medium.",
  ST: "Fri Oct 9, evening - Koumas: 'a No.9, we only have Koumas right now' and 'Koumas has our trust' (Iraola). Sports Mole picks Barcola. Medium.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili \u00b7 back from Georgia after an 84th-minute penalty save in Belfast; the Chelsea cup tie on 28 October is his likely next start" }, { playerId: 27, reason: "Woodman \u00b7 third-choice, not in the squad at Bournemouth" }],
  LB:  [{ playerId: 32, reason: "Tsimikas \u00b7 back from Greece after ninety minutes against Germany" }],
  LCB: [{ playerId: 5, reason: "Gomez \u00b7 unused at Bournemouth; his next appearance in any shape is his 300th for the club" }, { playerId: 29, reason: "Araujo \u00b7 a centre-half by trade, at right-back for Liverpool and unused in Uruguay's 6-1 in Kolkata on 6 October" }],
  RCB: [{ playerId: 5, reason: "Gomez \u00b7 first cover now Iraola has declared Jacquet fit and ready to go" }, { playerId: 29, reason: "Araujo \u00b7 a centre-half by trade; would move inside with Frimpong at right-back" }],
  RB:  [{ playerId: 9, reason: "Frimpong \u00b7 played right-back in the cup; an unused substitute for the Netherlands on 4 October" }, { playerId: 5, reason: "Gomez \u00b7 a specialist right-back alongside Frimpong while Bradley's knee has no club date" }],
  LDM: [{ playerId: 14, reason: "Gravenberch \u00b7 nine minutes at Bournemouth; a half-time substitute in Greece on 1 October, a 6 from Goal" }, { playerId: 20, reason: "Nyoni \u00b7 19 \u00b7 sees himself as a six; promoted to England U21s after an U20 assist against France" }],
  RDM: [{ playerId: 14, reason: "Gravenberch \u00b7 displaced at Fulham, a closing substitute since; the natural RDM if Mac Allister's long trip back from Buenos Aires tells" }, { playerId: 17, reason: "Endo \u00b7 unused, available, and leaving in January" }],
  LAM: [{ playerId: 25, reason: "Ngumoha \u00b7 18 \u00b7 either flank; made his England debut in Prague" }, { playerId: 18, reason: "Wirtz \u00b7 Rousing The Kop's bold option moves him to the left of the attack" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai \u00b7 has played the ten before; drawn deeper in this shape" }, { playerId: 14, reason: "Gravenberch \u00b7 would free Szoboszlai to push on if Iraola reshuffles" }],
  RAM: [{ playerId: 25, reason: "Ngumoha \u00b7 18 \u00b7 in Sports Mole's Friday front line and AnfieldWatch's" }, { playerId: 26, reason: "Chiesa \u00b7 back in training, without a competitive minute this season" }],
  ST:  [{ playerId: 30, reason: "Barcola \u00b7 Iraola: has played as a left winger and also as a striker; Sports Mole's Friday pick up front" }, { playerId: 18, reason: "Wirtz \u00b7 TEAMtalk's false-nine option, with Szoboszlai at ten and Gravenberch into the pivot" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-10-09T22:30:00Z",
  reason: "Fri Oct 9, evening. Unchanged for Manchester City at Anfield on Sunday 11 October: Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Mac Allister, Szoboszlai; Munoz, Wirtz, Barcola; Koumas. Iraola ruled out Isak and Gakpo and declared Jacquet fit at Friday's press conference, so nine of the eleven started at Bournemouth and the two changes are forced. The open slot is the nine: Koumas, who 'has our trust', or Barcola, Sports Mole's pick.",
};
