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
      GK: 1,    // Alisson (the one place UEFA.com's Linz preview does not rotate)
      LB: 7,    // Kerkez (back in, Tue 13 Oct evening: spoke for the players in Linz; in the Standard's and Sports Mole's XIs)
      LCB: 3,   // Van Dijk (captain; calf knock v City, 'pretty painful', a doubt; Jacquet next)
      RCB: 11,  // Jacquet (Wed 14 Oct morning: beside Van Dijk in Sports Mole's and The 4th Official's XIs)
      RB: 9,    // Frimpong (in for Araujo per UEFA.com)
      LCM: 13,  // Mac Allister (ninety minutes v City; no cover but Nyoni, Endo not in UCL squad)
      CM: 14,   // Gravenberch (league ban only; available in Linz)
      RCM: 18,  // Wirtz (kept at the ten by UEFA.com despite Carragher)
      LW: 25,   // Ngumoha (left in UEFA.com's and Wednesday's previews; Barcola moves to RW)
      ST: 31,   // Koumas (the only natural nine available)
      RW: 30,   // Barcola (Wed 14 Oct morning: moved to the right in the latest previews)
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
      GK: 1,    // Alisson (unchanged in UEFA.com's Linz preview)
      LB: 7,    // Kerkez (Tue 13 Oct evening: Evening Standard and Sports Mole both start him; Tsimikas travelled as cover)
      LCB: 3,   // Van Dijk (captain v City)
      RCB: 11,  // Jacquet (Wed 14 Oct morning: Sports Mole and The 4th Official both keep him beside Van Dijk)
      RB: 9,    // Frimpong (UEFA.com: in for Araujo)
      LDM: 14,  // Gravenberch (league ban only, so available in Linz; out for Brentford)
      RDM: 13,  // Mac Allister (no injury, no ban)
      LAM: 25,  // Ngumoha (on the left in UEFA.com's and Wednesday's previews; Barcola moves to RAM)
      CAM: 18,  // Wirtz (UEFA.com keeps him at the ten)
      RAM: 30,  // Barcola (Wed 14 Oct morning: switched to the right in Sports Mole's and The 4th Official's XIs)
      ST: 31,   // Koumas (Isak a doubt per UEFA.com, expected to miss out per the Liverpool Echo)
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
      LCB: 3,   // Van Dijk (captain)
      CCB: 11,  // Jacquet (back beside Van Dijk in Wednesday's previews; the middle of a three here)
      RCB: 29,  // Araujo (Wed 14 Oct morning: Sports Mole's and The 4th Official's right-back, a centre-half by trade)
      LWB: 7,   // Kerkez (back in on Tue 13 Oct evening; Tsimikas the cover)
      LCM: 13,  // Mac Allister (the midfielder nobody drops)
      RCM: 14,  // Gravenberch (league ban does not apply in Europe)
      RWB: 9,   // Frimpong (UEFA.com's right-back; the shape that uses him properly)
      LW: 25,   // Ngumoha (UEFA.com's left-sided pick)
      ST: 31,   // Koumas (the only natural nine)
      RW: 30,   // Barcola (moved to the right in Wednesday's previews)
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
export const PLAYER_EVIDENCE = {
  1:   "In goal in every Linz XI",   // Alisson
  2:   "Pushing for a start (SM)",   // Mamardashvili
  3:   "Calf · 'If I'm fit, I play'",   // Van Dijk
  5:   "Bench in latest XIs",   // Gomez
  7:   "LB in three Linz XIs",   // Kerkez
  32:  "Kerkez cover · RTK's LB",   // Tsimikas
  8:   "Knee · no club date",   // Bradley
  9:   "RB in Standard/False 9 XIs",   // Frimpong
  10:  "ACL · 1 Nov possible",   // Leoni
  11:  "Back beside Van Dijk",   // Jacquet
  12:  "Levante loan",   // Ndukwe
  13:  "In every Linz XI",   // Mac Allister
  14:  "Plays Linz · banned Sat",   // Gravenberch
  15:  "Hamstring · in England",   // Szoboszlai
  17:  "UCL-ineligible · Sat next",   // Endo
  18:  "At ten · Madrid watched",   // Wirtz
  20:  "Bench in two XIs",   // Nyoni
  22:  "Ankle · no date",   // Gakpo
  23:  "Thigh · no date",   // Isak
  24:  "Achilles · Boxing Day?",   // Ekitike
  25:  "Left flank · key change",   // Ngumoha
  26:  "UCL-ineligible",   // Chiesa
  27:  "Third keeper",   // Woodman
  28:  "Bench as Barcola moves",   // Munoz
  29:  "RB in SM/4th Official XIs",   // Araujo
  30:  "Switched to the right",   // Barcola
  31:  "Only senior nine",   // Koumas
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
  LB: "High",
  LCB: "Medium",
  RCB: "Medium",
  RB: "Low",
  LDM: "High",
  RDM: "High",
  LAM: "Medium",
  CAM: "High",
  RAM: "Medium",
  ST: "High",
};


// ─── Per-slot rationale ────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Tue Oct 13 (morning) against Van Dijk's calf knock and Sports Mole's Tuesday XI.
// Originally set Wed Sep 23 (evening) against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB: "Wed Oct 14, morning - Kerkez, at left-back in Sports Mole's, The 4th Official's and The False 9's XIs; only Rush The Kop prefers Tsimikas. High, up from Medium.",
  LCB: "Wed Oct 14, morning - Van Dijk, in every XI, with no club word on the calf on the morning of the game; Jacquet next. Medium.",
  RCB: "Wed Oct 14, morning - Jacquet, beside the captain in the two latest XIs (Sports Mole; The 4th Official); Gomez to the bench. Medium, up from Low.",
  RB: "Wed Oct 14, morning - Frimpong held on the Evening Standard's and The False 9's XIs, but Sports Mole and The 4th Official both pick Araujo. Low.",
  LDM: "Wed Oct 14, morning - Gravenberch, in every XI; the ban is domestic and falls on Saturday. High, up from Medium.",
  RDM: "Wed Oct 14, morning - Mac Allister, in every Linz XI. High.",
  LAM: "Wed Oct 14, morning - Ngumoha, on the left in Sports Mole's, The 4th Official's and The False 9's XIs; Sports Mole calls it the key change. Medium, up from Low.",
  CAM: "Wed Oct 14, morning - Wirtz, at the ten in every XI; Real Madrid's scouts watched him on Sunday (The Hard Tackle, via TEAMtalk). High, up from Medium.",
  RAM: "Wed Oct 14, morning - Barcola, switched to the right by Sports Mole and The 4th Official; Munoz keeps it in The False 9's XI. Medium, up from Low.",
  ST: "Wed Oct 14, morning - Koumas, the only senior centre-forward in the squad and up front in every XI. High.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · on the bench in UEFA.com's Linz preview; the Chelsea cup tie on 28 October is likelier" }, { playerId: 27, reason: "Woodman · third-choice" }],
  LB:  [{ playerId: 32, reason: "Tsimikas · travelled as cover; UEFA.com's Monday pick" }],
  LCB: [{ playerId: 11, reason: "Jacquet · first in line if Van Dijk's calf rules him out" }, { playerId: 29, reason: "Araujo · a centre-half by trade" }],
  RCB: [{ playerId: 5, reason: "Gomez · UEFA.com's and the Evening Standard's pick" }, { playerId: 29, reason: "Araujo · would move inside, as in The False 9's XI" }],
  RB:  [{ playerId: 29, reason: "Araujo · started v City, booked on 8" }, { playerId: 5, reason: "Gomez · a specialist right-back while Bradley is out" }],
  LDM: [{ playerId: 20, reason: "Nyoni · 19 · one of two spare midfielders in Linz, with McConnell; Endo is outside the UCL squad" }],
  RDM: [{ playerId: 20, reason: "Nyoni · 19 · pivot depth in Europe" }],
  LAM: [{ playerId: 30, reason: "Barcola · the left in the Evening Standard's XI" }, { playerId: 28, reason: "Munoz · either flank" }],
  CAM: [{ playerId: 20, reason: "Nyoni · replaced Wirtz v City" }, { playerId: 30, reason: "Barcola · could move inside" }],
  RAM: [{ playerId: 28, reason: "Munoz · on the right in The False 9's XI; benched by Sports Mole" }, { playerId: 25, reason: "Ngumoha · either flank" }],
  ST:  [{ playerId: 30, reason: "Barcola · the alternative nine" }, { playerId: 18, reason: "Wirtz · the false-nine option with Isak out" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-10-14T08:30:00Z",
  reason: "Wed Oct 14, morning (matchday). For LASK Linz away (Champions League, tonight, 5.45pm BST). Two changes, following the two latest previews (Sports Mole; The 4th Official): Jacquet for Gomez at right centre-back and Barcola switched to the right for Munoz. Alisson; Frimpong, Jacquet, Van Dijk, Kerkez; Gravenberch, Mac Allister; Ngumoha, Wirtz, Barcola; Koumas, nine of City's starters. Both previews pick Araujo at right-back; Frimpong held on the Evening Standard's and The False 9's. Van Dijk's calf still unconfirmed.",
};
