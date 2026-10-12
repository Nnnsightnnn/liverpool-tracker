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
      GK: 1,    // Alisson (started v City; beaten three times after the red card)
      LB: 7,    // Kerkez (ninety minutes, targeted repeatedly over the top, a 6 from the BBC)
      LCB: 3,   // Van Dijk (captain v City; booked in stoppage time)
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
    // Hypothetical 3-4-3 alternative, a shape rarely used, shown for completeness. Rewritten Sun Oct 11 (evening)
    // after the 0-3 v City: Araujo was booked early and replaced by Frimpong, so a back three with Frimpong at
    // right wing-back and Gomez inside is the obvious rotation look for a run of four games in ten days.
    // Default is the 4-2-3-1 above.
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
  1:   "Goal 5 v City · starts in Linz",   // Alisson
  2:   "Bench · second start possible",   // Mamardashvili
  3:   "Captain · Goal 5.5 v City",   // Van Dijk
  5:   "CB/RB cover · 2 mins v City",   // Gomez
  7:   "LB · Goal's top-rated 6.5 v City",   // Kerkez
  32:  "LB cover · two trips in 4 days",   // Tsimikas
  8:   "Knee · still no club date",   // Bradley
  9:   "RB option · Goal 3 v City",   // Frimpong
  10:  "ACL · Brighton the earliest",   // Leoni
  11:  "RCB · Goal 5 v City",   // Jacquet
  12:  "Levante loan · not involved",   // Ndukwe
  13:  "Pivot · Goal 6 v City",   // Mac Allister
  14:  "PL ban only · free for Linz",   // Gravenberch
  15:  "Hamstring · 'highly unlikely'",   // Szoboszlai
  17:  "Brentford pivot partner",   // Endo
  18:  "CAM · Carragher: drop him",   // Wirtz
  20:  "Wirtz alternative · 19",   // Nyoni
  22:  "Ankle · 'highly unlikely'",   // Gakpo
  23:  "Thigh · 'highly unlikely'",   // Isak
  24:  "Achilles · 26 Dec target",   // Ekitike
  25:  "Wide option · Goal 5 v City",   // Ngumoha
  26:  "Not in UCL squad",   // Chiesa
  27:  "Third-choice keeper",   // Woodman
  28:  "RAM · LASK lack Bello",   // Munoz
  29:  "RB · Goal 4.5 v City",   // Araujo
  30:  "LAM · or nine if Koumas rests",   // Barcola
  31:  "ST · Goal 6 for his pressing",   // Koumas
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
// Mon Oct 12 (morning): no personnel change. No Liverpool XI published for Linz; Sports Mole call Szoboszlai, Isak and Gakpo 'highly
//   unlikely'. Wirtz kept at CAM despite Carragher's call to drop him (TEAMtalk); LASK lose Bello (Laola1). No level change.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS AGAINST LASK LINZ (Wed 14 Oct; previously Manchester City at
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
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Mon Oct 12 (morning) against LASK Linz.
// Originally set Wed Sep 23 (evening) against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB: "Mon Oct 12, morning - Kerkez, Goal's top-rated player v City at 6.5 for a key intervention on Semenyo; Tsimikas the rotation option. Medium.",
  LCB: "Mon Oct 12, morning - Van Dijk, a 5.5 from Goal, excellent before the red card; the fixed point of any rotation in Linz. High.",
  RCB: "Mon Oct 12, morning - Jacquet, a 5 from Goal; Gomez, fully fit, is the obvious change with four games in ten days. Medium.",
  RB: "Mon Oct 12, morning - Araujo, a 4.5 from Goal after his early booking; Frimpong, rated 3, is the alternative against a LASK side without Bello. Low.",
  LDM: "Mon Oct 12, morning - Gravenberch, banned for Brentford but free for Linz; Hackett says of the first booking 'I did not see this as a foul' (Football Insider). Medium.",
  RDM: "Mon Oct 12, morning - Mac Allister, a 6 from Goal; the one pivot player with no ban and no injury. High.",
  LAM: "Mon Oct 12, morning - Barcola, a 5 from Goal and faded late; Ngumoha the alternative. Medium.",
  CAM: "Mon Oct 12, morning - Wirtz, the morning's target: Carragher says he 'shouldn't be in the Liverpool team right now' (TEAMtalk); Nyoni, 19, is the alternative. Medium.",
  RAM: "Mon Oct 12, morning - Munoz, a 4 from Goal but promising early; LASK are without their left wing-back, Bello (Laola1). Medium.",
  ST: "Mon Oct 12, morning - Koumas, a 6 from Goal for his pressing on a first league start; Isak 'highly unlikely' (Sports Mole). Medium.",
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
  generated_at: "2026-10-12T08:30:00Z",
  reason: "Mon Oct 12, morning. For LASK Linz away (Champions League, Wed 14 Oct, 5.45pm BST). Unchanged from the XI that started against City (ESPN): Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Gravenberch, Mac Allister; Barcola, Wirtz, Munoz; Koumas. Gravenberch's ban is league-only; Szoboszlai, Isak and Gakpo are all 'highly unlikely' (Sports Mole). Carragher wants Wirtz dropped (TEAMtalk), and with four games in ten days rotation is likely, but no Liverpool XI has been published.",
};
