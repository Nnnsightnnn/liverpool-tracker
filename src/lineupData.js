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
    // Sat 10 Oct (morning): Barcola moves to ST and Ngumoha comes in at LW, following Sports Mole, This Is Anfield and Opta Analyst; Koumas to the bench.
    // Sun 11 Oct (evening): City played, lost 0-3. Re-pointed at LASK Linz away (UCL, Wed 14 Oct). Baseline is the XI that started v City:
    //   Koumas ST, Barcola LW, Gravenberch in for Szoboszlai (tight hamstring, out). Rotation likely: four games in ten days (Iraola).
    defaultXI: {
      GK: 1,    // Alisson (the save from Evanilson on 18 that made the clean sheet possible)
      LB: 7,    // Kerkez (ninety minutes, targeted repeatedly over the top, a 6 from the BBC)
      LCB: 3,   // Van Dijk (a 7; third clean sheet in a row alongside Jacquet)
      RCB: 11,  // Jacquet (started v City, off on 88 for Gomez)
      RB: 29,   // Araujo (started v City, booked on 8, off on 75 for Frimpong)
      LCM: 13,  // Mac Allister (ninety minutes v City; an early curler narrowly wide)
      CM: 14,   // Gravenberch (sent off v City, but the ban is domestic: available in Linz; Szoboszlai hamstring)
      RCM: 18,  // Wirtz (a 4 from the BBC v City, off on 66)
      LW: 30,   // Barcola (started on the LEFT v City, not at nine)
      ST: 31,   // Koumas (first PL start at nine v City; Isak not expected back for Linz)
      RW: 28,   // Munoz (ninety minutes on the right v City)
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
    // Sun 11 Oct (evening): re-pointed at LASK Linz away (UCL, Wed 14 Oct, 5.45pm BST) after the 0-3 v City. This is now the XI that
    // STARTED v City (ESPN): Gravenberch in the pivot for Szoboszlai (hamstring), Barcola left, Koumas at nine. Gravenberch's ban is
    // domestic (Liverpool FC), so he stays in for Linz; he must come OUT for Brentford on Sat 17 Oct.
    defaultXI: {
      GK: 1,    // Alisson (started v City; one save, beaten three times after the red card)
      LB: 7,    // Kerkez (ninety minutes v City; cleared off the line from Ndiaye)
      LCB: 3,   // Van Dijk (captain v City; booked in stoppage time)
      RCB: 11,  // Jacquet (started v City; Gomez replaced him on 88)
      RB: 29,   // Araujo (started v City, booked on 8; Frimpong on at 75)
      LDM: 14,  // Gravenberch (sent off v City for two bookings; league ban only, so available in Linz)
      RDM: 13,  // Mac Allister (ninety minutes v City; the one pivot player with no doubt over him)
      LAM: 30,  // Barcola (started on the left v City; a 5 from the BBC)
      CAM: 18,  // Wirtz (a 4 v City, off on 66 for Nyoni)
      RAM: 28,  // Munoz (ninety minutes on the right v City; Gakpo not expected back for Linz)
      ST: 31,   // Koumas (first PL start v City, off on 75; Isak not expected back for Linz)
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
    // Sun 11 Oct (evening): re-pointed at LASK Linz away (UCL, Wed 14 Oct), who play a back three themselves.
    defaultXI: {
      GK: 1,    // Alisson (first choice)
      LCB: 3,   // Van Dijk (captain v City)
      CCB: 11,  // Jacquet (eighty-eight minutes v City)
      RCB: 5,   // Gomez (on for Jacquet on 88 v City; rotation candidate for Linz)
      LWB: 7,   // Kerkez (ninety minutes v City; the attacking option here)
      LCM: 13,  // Mac Allister (ninety minutes v City · the midfielder nobody drops)
      RCM: 14,  // Gravenberch (Szoboszlai out, hamstring; the league ban does not apply in Europe)
      RWB: 9,   // Frimpong (on for Araujo on 75 v City · the shape that uses him properly)
      LW: 30,   // Barcola (left · where he actually started v City)
      ST: 31,   // Koumas (first PL start v City)
      RW: 28,   // Munoz (right · ninety minutes v City)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Sat Oct 10 (morning: every preview checked starts Barcola at ST; Ngumoha into the XI, Koumas to the bench; Van Dijk's Sky Sports interview; no status change). Earlier, Fri Oct 9 (evening: Iraola rules Isak and Gakpo out of City, both now injured; Jacquet fit; Koumas 'has our trust'). Earlier, Fri Oct 9 (morning: Opta Analyst preview, Rousing The Kop on Isak and Gakpo in kit, Araujo interview; no status change). Earlier, Thu Oct 8 (morning: club stats preview and Squawka figures; no status change). Earlier, Tue Oct 6 (evening: Zidane calls Jacquet slightly injured and reports lean towards Sunday, no club word; Araujo unused in Uruguay 6-1 India; Mac Allister with Argentina for Messi's farewell; Mamardashvili's penalty save in Belfast; Gakpo still ungraded, Isak still without a bulletin), after
// Bournemouth 0-1 Liverpool: Isak on 57 from a blocked Gakpo cross, a third consecutive clean
// sheet, and a climb from tenth to sixth. Bradley, Chiesa, Ekitike and Leoni are out; Gakpo (ankle) moved from out to doubt on Wed Oct 7 evening after Iraola did not rule him out.
// Sun Oct 11 (evening): rewritten after Liverpool 0-3 Manchester City; now pointed at LASK Linz away, Wednesday 14 October.
export const PLAYER_EVIDENCE = {
  1:  "Started v City · beaten 3 after red",   // Alisson
  2:  "Bench · rotation in Linz?",   // Mamardashvili
  3:  "LCB · captain v City, booked",   // Van Dijk
  5:  "Sub v City · CB/RB cover",   // Gomez
  7:  "LB · line clearance v City",   // Kerkez
  32: "LB cover · unused v City",   // Tsimikas
  8:  "Knee · no club date yet",   // Bradley
  9:  "Sub v City · RB rotation option",   // Frimpong
  10: "ACL · Brighton date earliest",   // Leoni
  11: "RCB · 88 mins v City",   // Jacquet
  12: "Levante loan · not involved",   // Ndukwe
  13: "Pivot · 90 mins v City",   // Mac Allister
  14: "Red v City · PL ban, UCL OK",   // Gravenberch
  15: "Tight hamstring · no date",   // Szoboszlai
  17: "Depth · Brentford pivot cover",   // Endo
  18: "CAM · a 4 v City, off 66",   // Wirtz
  20: "Sub v City · pivot depth",   // Nyoni
  22: "Ankle · not back for Linz",   // Gakpo
  23: "Thigh · not back for Linz",   // Isak
  24: "Achilles · 26 Dec target",   // Ekitike
  25: "Sub v City · LAM option",   // Ngumoha
  26: "First minutes v City · 88'",   // Chiesa
  27: "Third-choice keeper",   // Woodman
  28: "RAM · 90 mins v City",   // Munoz
  29: "RB · booked 8' v City",   // Araujo
  30: "LAM · started left v City",   // Barcola
  31: "ST · first PL start v City",   // Koumas
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
// Sat Oct 10 (morning): ONE personnel change in all three shapes. Barcola moves from LAM to ST and Ngumoha comes in at LAM, as in Sports
//   Mole's, This Is Anfield's and Opta Analyst's XIs; Iraola calls Barcola 'super-valuable', able to 'cover the three positions up front'. Koumas to the bench. No level change.
// Fri Oct 9 (evening): no personnel change. Iraola ruled Isak and Gakpo OUT of City at his 1.30pm presser and called Koumas the only
//   natural nine ('has our trust'); Jacquet 'fit and ready to go'. RCB raised Medium to High, ST raised Low to Medium. Sports Mole picks Barcola at ST.
// Fri Oct 9 (morning): no personnel change. Isak and Gakpo in kit in the Inside Training video (Rousing The Kop) but still major doubts;
//   RotoWire picks Isak and Gomez, held here pending Iraola's 1.30pm presser; RCB lowered High to Medium.
// Thu Oct 8 (evening): ONE personnel change, Koumas for Isak at ST in all three shapes. Isak and Gakpo missed the first session after
//   the break and are major doubts (Liverpool Echo); Jacquet trained (CaughtOffside), RCB raised to High; Chiesa back with the group.
// Thu Oct 8 (morning): no personnel change. No overnight club word on Isak, Gakpo or Jacquet; Squawka picks Gakpo over Munoz, held here.
// Wed Oct 7 (evening): no personnel change. Iraola: Isak and Gakpo injured, 'a matter of if they are going to recover in time'; Gakpo now a doubt, not out; Jacquet unmentioned.
// Wed Oct 7 (morning): no personnel change. Window over, Mac Allister last home (79 minutes of Messi's farewell, VAVEL); still no club word on Jacquet, Isak or Gakpo.
// Sun Oct 11 (morning, matchday): no personnel change. Both Sunday-morning previews (The Football Faithful; WithinNigeria) name this XI;
//   101 Great Goals alone starts Koumas at nine with Barcola left. Kavanagh referees. No level change.
// Sun Oct 11 (evening): City played, Liverpool lost 0-3. THREE personnel changes, all to match the XI that actually started (ESPN):
//   Gravenberch for Szoboszlai (tight hamstring, now injured), Barcola back to LAM, Koumas to ST; Ngumoha to the bench. Re-pointed at
//   LASK Linz away, Champions League, Wed 14 Oct. Gravenberch's ban is league-only. Overall level Medium to Low: rotation expected.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS AGAINST MANCHESTER CITY at
// Anfield on Sunday 11 October, RE-POINTED Sun Oct 11 (evening) at LASK Linz away on Wed 14 October: RB lowered to Low (Frimpong rotation), RCB to Medium (Gomez), LDM now Gravenberch at Medium, RDM Mac Allister High. (Reviewed Sun Oct 11, morning: no level change, matchday previews agree. Sat Oct 10, morning: no level change; ST now Barcola and LAM Ngumoha, both Medium. Fri Oct 9, evening: RCB raised Medium to High after Iraola declared Jacquet 'fit and ready to go'; ST raised Low to Medium after Iraola ruled Isak out and named Koumas the only natural nine. Fri Oct 9, morning: RCB lowered from High to Medium because RotoWire still lists Jacquet's hamstring tightness and picks Gomez, against Rousing The Kop's report that he took the full session; other levels unchanged. Thu Oct 8, evening: RCB raised to High after Jacquet trained; RAM raised to Medium with Gakpo absent from training; ST stays Low with Koumas in. Thu Oct 8, morning: levels unchanged, no new bulletin. Wed Oct 7, evening: levels unchanged after Iraola's update on Isak and Gakpo. Wed Oct 7, morning: levels unchanged, no club bulletin on Jacquet, Isak or Gakpo. Tue Oct 6, evening: RCB raised from Low to Medium on reports that Jacquet's strain is slight, unconfirmed by the club. Tue Oct 6, morning: levels unchanged. Mon Oct 5, evening: RCB cut from High to Low after Jacquet's left hamstring strain in the France camp; other levels unchanged since Sat Sep 26.) The basis has changed in kind: this
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
  RCB: "Medium",
  RB: "Low",
  LDM: "Medium",
  RDM: "High",
  LAM: "Medium",
  CAM: "Medium",
  RAM: "Medium",
  ST: "Medium",
};


// ─── Per-slot rationale ────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Sun Oct 11 (evening), re-pointed at LASK Linz.
// Originally set Wed Sep 23 (evening) against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB: "Sun Oct 11, evening - Kerkez, ninety minutes v City and a clearance off his own line (NBC Sports); Tsimikas the rotation option. Medium.",
  LCB: "Sun Oct 11, evening - Van Dijk, captain at Anfield and booked in stoppage time; the fixed point of any rotation. High.",
  RCB: "Sun Oct 11, evening - Jacquet, eighty-eight minutes v City; Gomez, who replaced him, is the obvious rotation with four games in ten days. Medium.",
  RB: "Sun Oct 11, evening - Araujo, booked in the eighth minute and replaced by Frimpong on seventy-five (ESPN); Frimpong may well start in Linz. Low.",
  LDM: "Sun Oct 11, evening - Gravenberch, sent off v City, but the ban is league-only (Liverpool FC); Szoboszlai's tight hamstring has no date. Medium.",
  RDM: "Sun Oct 11, evening - Mac Allister, the only pivot player without a ban or an injury after Sunday. High.",
  LAM: "Sun Oct 11, evening - Barcola, who started on the left v City rather than at nine; Ngumoha the alternative. Medium.",
  CAM: "Sun Oct 11, evening - Wirtz, a 4 from the BBC v City and off on sixty-six; Nyoni or a reshuffle possible. Medium.",
  RAM: "Sun Oct 11, evening - Munoz, ninety minutes on the right v City; Gakpo not expected back for Linz (Hayters). Medium.",
  ST: "Sun Oct 11, evening - Koumas, a first Premier League start v City, off on seventy-five; Isak not expected back for Linz. Medium.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · unused v City; four games in ten days could bring a start in Linz or v Chelsea on 28 October" }, { playerId: 27, reason: "Woodman · third-choice, outside the City squad" }],
  LB:  [{ playerId: 32, reason: "Tsimikas · unused v City; the rotation option" }],
  LCB: [{ playerId: 5, reason: "Gomez · on for the last minutes v City" }, { playerId: 29, reason: "Araujo · a centre-half by trade if Frimpong plays right-back" }],
  RCB: [{ playerId: 5, reason: "Gomez · replaced Jacquet on 88 v City; the likeliest rotation" }, { playerId: 29, reason: "Araujo · would move inside with Frimpong at right-back" }],
  RB:  [{ playerId: 9, reason: "Frimpong · replaced the booked Araujo on 75 v City" }, { playerId: 5, reason: "Gomez · a specialist right-back while Bradley's knee has no date" }],
  LDM: [{ playerId: 17, reason: "Endo · unused v City; the senior cover with Szoboszlai hurt" }, { playerId: 20, reason: "Nyoni · 19 · on for Wirtz on 66 v City" }],
  RDM: [{ playerId: 17, reason: "Endo · the partner for Mac Allister at Brentford, where Gravenberch is banned" }, { playerId: 20, reason: "Nyoni · 19 · pivot depth" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · benched v City despite the previews; on at 75" }, { playerId: 26, reason: "Chiesa · first minutes of the season v City, outside the UCL squad" }],
  CAM: [{ playerId: 20, reason: "Nyoni · replaced Wirtz v City" }, { playerId: 30, reason: "Barcola · could move inside with Ngumoha left" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · either flank" }, { playerId: 26, reason: "Chiesa · back on the pitch for the first time, but not in the Champions League squad" }],
  ST:  [{ playerId: 30, reason: "Barcola · the previews' nine for City, played left instead" }, { playerId: 18, reason: "Wirtz · the false-nine question with Isak and Gakpo out" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  generated_at: "2026-10-11T22:30:00Z",
  reason: "Sun Oct 11, evening. Re-pointed at LASK Linz away (Champions League, Wed 14 Oct, 5.45pm BST) after the 0-3 v City. Baseline is the XI that started on Sunday (ESPN): Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Gravenberch, Mac Allister; Barcola, Wirtz, Munoz; Koumas. Szoboszlai (hamstring) is out and Gravenberch's ban is league-only (Liverpool FC), but with four games in ten days and no returns expected (Hayters), rotation is likely and no reliable Liverpool XI has been published yet.",
};
