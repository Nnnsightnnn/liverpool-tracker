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
      GK: 1,    // Alisson (started both games since the break)
      LB: 7,    // Kerkez (Wed 14 Oct evening: rested in Linz with Brentford in mind, per beIN Sports; Tsimikas made two goals there)
      LCB: 3,   // Van Dijk (rested at the start in Linz, then sixty-two onwards; the calf is no bar)
      RCB: 11,  // Jacquet (started v City and in Linz; Iraola regretted changing both centre-backs at once)
      RB: 9,    // Frimpong (a goal and two assists in Linz, rated 9.0)
      LCM: 13,  // Mac Allister (rested in Linz until 85; anchors with Gravenberch banned)
      CM: 17,   // Endo (Wed 14 Oct evening: in for the suspended Gravenberch; PL-registered)
      RCM: 18,  // Wirtz (rated 8.7 in Linz, an assist)
      LW: 30,   // Barcola (hat-trick in Linz, from the left)
      ST: 31,   // Koumas (scored in Linz; the only fit senior nine)
      RW: 28,   // Munoz (rested in Linz; started on the right v City)
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
      GK: 1,    // Alisson (started both games since the break)
      LB: 7,    // Kerkez (Wed 14 Oct evening: rested in Linz for Saturday, per beIN Sports; Tsimikas the alternative after two assists)
      LCB: 3,   // Van Dijk (rested at the start in Linz, on at sixty-two; calf no bar)
      RCB: 11,  // Jacquet (started v City and in Linz)
      RB: 9,    // Frimpong (a goal and two assists in Linz, 9.0 from FotMob)
      LDM: 17,  // Endo (Wed 14 Oct evening: in for the suspended Gravenberch; Nyoni the alternative)
      RDM: 13,  // Mac Allister (rested in Linz until 85)
      LAM: 30,  // Barcola (Wed 14 Oct evening: hat-trick in Linz from the left)
      CAM: 18,  // Wirtz (8.7 in Linz, an assist)
      RAM: 28,  // Munoz (Wed 14 Oct evening: rested in Linz; on the right v City)
      ST: 31,   // Koumas (scored in Linz; Isak still a doubt)
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
      GK: 1,    // Alisson
      LCB: 3,   // Van Dijk (back after a half-hour in Linz)
      CCB: 11,  // Jacquet
      RCB: 29,  // Araujo (headed his first Liverpool goal at centre-back in Linz)
      LWB: 7,   // Kerkez (rested in Linz)
      LCM: 13,  // Mac Allister
      RCM: 17,  // Endo (Gravenberch suspended for Brentford)
      RWB: 9,   // Frimpong (the shape that uses him properly; a goal and two assists in Linz)
      LW: 30,   // Barcola (hat-trick in Linz)
      ST: 31,   // Koumas
      RW: 28,   // Munoz (rested in Linz)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context, reviewed Sat Oct 10 (morning: every preview checked starts Barcola at ST; Ngumoha into the XI, Koumas to the bench; Van Dijk's Sky Sports interview; no status change). Earlier, Fri Oct 9 (evening: Iraola rules Isak and Gakpo out of City, both now injured; Jacquet fit; Koumas 'has our trust'). Earlier, Fri Oct 9 (morning: Opta Analyst preview, Rousing The Kop on Isak and Gakpo in kit, Araujo interview; no status change). Earlier, Thu Oct 8 (morning: club stats preview and Squawka figures; no status change). Earlier, Tue Oct 6 (evening: Zidane calls Jacquet slightly injured and reports lean towards Sunday, no club word; Araujo unused in Uruguay 6-1 India; Mac Allister with Argentina for Messi's farewell; Mamardashvili's penalty save in Belfast; Gakpo still ungraded, Isak still without a bulletin), after
// Bournemouth 0-1 Liverpool: Isak on 57 from a blocked Gakpo cross, a third consecutive clean
// sheet, and a climb from tenth to sixth. Bradley, Chiesa, Ekitike and Leoni are out; Gakpo (ankle) moved from out to doubt on Wed Oct 7 evening after Iraola did not rule him out.
// Sun Oct 11 (evening): rewritten after Liverpool 0-3 Manchester City; now pointed at LASK Linz away, Wednesday 14 October.
// Mon Oct 12 (evening): all 27 refreshed against UEFA.com's Linz preview and the Liverpool Echo's fifteen-outfielder count.
// Tue Oct 13 (morning): all 27 refreshed for Van Dijk's calf knock, Sports Mole's Tuesday XI and injury list, and the Echo's Nyoni call.
// Tue Oct 13 (evening): all 27 refreshed for the 23-man travelling squad, Iraola's Linz presser and the Evening Standard's XI.
// Wed Oct 14 (morning, matchday): all 27 refreshed for Sports Mole's and The 4th Official's XIs (Ngumoha left, Barcola right, Jacquet in).
// Wed Oct 14 (evening): all 27 refreshed after LASK 3-6 Liverpool (SI; FotMob; Sky Sports); re-pointed at Brentford away, Sat 17 Oct.
export const PLAYER_EVIDENCE = {
  1:   "Started v City and in Linz",   // Alisson
  2:   "Unused in Linz",   // Mamardashvili
  3:   "On at 62 in Linz · calf OK",   // Van Dijk
  5:   "On at 62 in Linz · 6.1 (SI)",   // Gomez
  7:   "Rested in Linz for Saturday",   // Kerkez
  32:  "Two assists in Linz · 8.8",   // Tsimikas
  8:   "Knee · rehab, no date",   // Bradley
  9:   "Goal + 2 assists · 9.0",   // Frimpong
  10:  "ACL · 1 Nov possible",   // Leoni
  11:  "Started in Linz · off 62",   // Jacquet
  12:  "Levante loan",   // Ndukwe
  13:  "Rested in Linz · off bench 85",   // Mac Allister
  14:  "Banned for Brentford",   // Gravenberch
  15:  "Hamstring · Brentford doubt",   // Szoboszlai
  17:  "In for banned Gravenberch",   // Endo
  18:  "Assist in Linz · 8.7 (SI)",   // Wirtz
  20:  "First UCL start · 7.3",   // Nyoni
  22:  "Ankle · Brentford doubt",   // Gakpo
  23:  "Thigh · Brentford doubt",   // Isak
  24:  "Achilles · Boxing Day?",   // Ekitike
  25:  "Started in Linz · 7.4 (SI)",   // Ngumoha
  26:  "Available for Brentford",   // Chiesa
  27:  "Third keeper",   // Woodman
  28:  "Rested in Linz · on at 73",   // Munoz
  29:  "First LFC goal in Linz",   // Araujo
  30:  "Hat-trick in Linz · 9.7",   // Barcola
  31:  "UCL goal in Linz · only nine",   // Koumas
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
// Mon Oct 12 (evening): FOUR personnel changes in all three shapes, following UEFA.com's Matchday 2 predicted line-ups
//   (published Mon 12 Oct): Frimpong for Araujo at RB, Gomez for Jacquet at RCB, Tsimikas for Kerkez at LB, Ngumoha for Barcola
//   on the left. UEFA.com also names Chiesa on the right, but Chiesa (with Endo) was left off the league-phase list (SI, 4 Sep),
//   so Munoz is kept there. Overall level stays Low: one preview, no Liverpool team news.
// Tue Oct 13 (morning): no personnel change. Van Dijk reported a 'pretty painful' calf knock after City and went home for
//   treatment (The Independent via DaveOCKOP); kept at LCB, confidence High to Medium. Sports Mole's Tuesday XI keeps Sunday's back
//   four and moves Barcola right with Ngumoha left; the Echo expects Munoz to keep his place, so RAM holds. LAM up to Medium, RAM down to Low.
// Tue Oct 13 (evening): ONE personnel change in all three shapes, Kerkez for Tsimikas at LB/LWB. Kerkez spoke for the players at
//   the Linz presser and starts in both the Evening Standard's and Sports Mole's Tuesday XIs; Tsimikas travelled as cover. Iraola:
//   'difficult to put exactly the same starting XI tomorrow'. LB Low to Medium, LAM Medium to Low (Standard has Barcola left), ST
//   Medium to High (Koumas the only senior nine in the 23). Overall Low to Medium: eight of City's starters in this XI.
// Wed Oct 14 (morning, matchday): TWO personnel changes in all three shapes, following the two latest previews (Sports Mole,
//   updated 9.13pm Tue; The 4th Official, Tue evening), which agree on one XI: Jacquet for Gomez at RCB and Barcola for Munoz on
//   the right (3-4-3: Araujo for Gomez at RCB, Barcola at RW). Frimpong held at RB against both (they pick Araujo), on the Evening
//   Standard's and The False 9's XIs. RCB, RAM and LAM Low to Medium; LB, LDM and CAM Medium to High. Overall stays Medium: nine of City's starters.
// Wed Oct 14 (evening): LASK played, Liverpool won 6-3 (Sky Sports). Re-pointed at Brentford away, Premier League, Sat 17 Oct, 3pm.
//   Versus the morning sheet: Endo for Gravenberch (suspended, two bookings v City) at LDM, Barcola back to LAM where he scored
//   his hat-trick, Munoz in at RAM after being rested; Van Dijk, Kerkez and Mac Allister, rested in Linz with Saturday in mind
//   (beIN Sports), stay in. 3-4-3 brings Araujo back at RCB. No Liverpool preview for Brentford published yet; overall Medium.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS AGAINST BRENTFORD AWAY (Sat 17 Oct; re-pointed Wed 14 Oct evening after LASK 3-6 Liverpool; previously LASK Linz, and before that Manchester City at
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
  RB: "Medium",
  LDM: "Low",
  RDM: "High",
  LAM: "High",
  CAM: "High",
  RAM: "Medium",
  ST: "Medium",
};


// ─── Per-slot rationale ────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Tue Oct 13 (morning) against Van Dijk's calf knock and Sports Mole's Tuesday XI.
// Originally set Wed Sep 23 (evening) against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB: "Wed Oct 14, evening - Kerkez, rested in Linz with Brentford in mind (beIN Sports); Tsimikas made two goals there and pushes him. Medium, down from High.",
  LCB: "Wed Oct 14, evening - Van Dijk, rested at the start in Linz and on for the last half-hour, so the calf is no bar. High, up from Medium.",
  RCB: "Wed Oct 14, evening - Jacquet, beside Van Dijk against City; Iraola's regret at changing both centre-backs at once argues for continuity. Medium.",
  RB: "Wed Oct 14, evening - Frimpong, a goal and two assists in Linz and 9.0 from FotMob; Araujo, who started there against City, is the alternative. Medium, up from Low.",
  LDM: "Wed Oct 14, evening - Endo, with Gravenberch suspended; Nyoni started in Linz and played eighty-five minutes. Low until a preview names one.",
  RDM: "Wed Oct 14, evening - Mac Allister, rested in Linz until the eighty-fifth minute. High.",
  LAM: "Wed Oct 14, evening - Barcola, a hat-trick from the left in Linz and UEFA's player of the match (Goal). High, up from Medium.",
  CAM: "Wed Oct 14, evening - Wirtz, an assist and 8.7 from SI in Linz; Iraola: 'amazing in possession' (Sky Sports). High.",
  RAM: "Wed Oct 14, evening - Munoz, rested in Linz and on the right against City; Ngumoha, who started in Linz, is the alternative. Medium.",
  ST: "Wed Oct 14, evening - Koumas, scorer in Linz and the only fit senior nine; Isak a doubt (DaveOCKOP). Medium, down from High while Isak's status is open.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · the Chelsea cup tie on 28 October is likelier" }, { playerId: 27, reason: "Woodman · third-choice" }],
  LB:  [{ playerId: 32, reason: "Tsimikas · two assists in Linz" }],
  LCB: [{ playerId: 29, reason: "Araujo · scored at centre-back in Linz" }, { playerId: 5, reason: "Gomez · on at 62 in Linz" }],
  RCB: [{ playerId: 29, reason: "Araujo · started there in Linz" }, { playerId: 5, reason: "Gomez · a specialist right-back too" }],
  RB:  [{ playerId: 29, reason: "Araujo · started at right-back v City" }, { playerId: 5, reason: "Gomez · cover while Bradley is out" }],
  LDM: [{ playerId: 20, reason: "Nyoni · 19 · started in Linz, 7.3 (SI)" }],
  RDM: [{ playerId: 20, reason: "Nyoni · 19 · pivot depth" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · started in Linz, 7.4 (SI)" }, { playerId: 26, reason: "Chiesa · available in the league" }],
  CAM: [{ playerId: 20, reason: "Nyoni · replaced Wirtz v City" }, { playerId: 30, reason: "Barcola · could move inside" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · either flank" }, { playerId: 26, reason: "Chiesa · eligible in the league" }],
  ST:  [{ playerId: 23, reason: "Isak · a doubt with the thigh" }, { playerId: 30, reason: "Barcola · the alternative nine" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-10-14T22:30:00Z",
  reason: "Wed Oct 14, evening. LASK played: Liverpool won 6-3 in Linz (Sky Sports). Now for Brentford away (Premier League, Sat 17 Oct, 3pm). Endo for the suspended Gravenberch; Van Dijk, Kerkez, Mac Allister and Munoz, rested in Linz for this game (beIN Sports), return; Barcola back on the left after his hat-trick. Alisson; Frimpong, Jacquet, Van Dijk, Kerkez; Endo, Mac Allister; Munoz, Wirtz, Barcola; Koumas. Six of Wednesday's starters; no Liverpool preview for Brentford yet.",
};
