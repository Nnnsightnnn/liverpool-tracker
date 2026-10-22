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
    // Tue 20 Oct (morning, matchday): ONE personnel change in all three shapes, Araujo back for Gomez at RB (3-4-3: Araujo RWB, Gomez RCB):
    //   every overnight preview found (SI 1am Tue; Rush The Kop; EFE via Infobae; Liverpool Offside; FutbolFantasy) starts Araujo there. Munoz (knee brace, Sports Mole) held out.
    // Mon 19 Oct (morning): ONE personnel change in all three shapes, Gakpo for Munoz on the right, following Sports Mole (Mon 4.34am) and The Stats Zone (Sun 5.22pm).
    // Sat 17 Oct (evening): all three shapes now point at VILLARREAL AT HOME (UCL, Tue 20 Oct, 8pm) after Brentford 1-2 Liverpool.
    //   Gravenberch in for the injured Szoboszlai, Isak in for Koumas; Frimpong injured. Endo and Chiesa are not UEFA-registered (SI, 4 Sep).
    // Sat 17 Oct (morning): all three shapes pointed at BRENTFORD AWAY (PL, 3pm); the notes below are history.
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
    // lists early January 2027), Leoni (ACL; Iraola, 15 Oct: group training now in the November break) and
    // Chiesa is no longer out: back with the group on Thu 8 Oct (Liverpool Echo via RotoWire), status doubtful, no minutes yet.
    // Fri 9 Oct (evening): Iraola ruled Isak (thigh) and Gakpo (ankle) OUT of City; both now status injured. Jacquet fit.
    // Sat 10 Oct (morning): Barcola moves to ST and Ngumoha comes in at LW, following Sports Mole, This Is Anfield and Opta Analyst; Koumas to the bench.
    // Sun 11 Oct (evening): City played, lost 0-3. Re-pointed at LASK Linz away (UCL, Wed 14 Oct). Baseline is the XI that started v City:
    //   Koumas ST, Barcola LW, Gravenberch in for Szoboszlai (tight hamstring, out). Rotation likely: four games in ten days (Iraola).
    // Tue 20 Oct (evening): Villarreal played, Liverpool won 4-3 (Sky Sports). Re-pointed at BRIGHTON AT HOME (PL, Sun 25 Oct, 2pm GMT),
    //   following Squawka's Brighton XI (Mon 19 Oct) with Ngumoha for Munoz (not in Tuesday's squad, RotoWire) on the right.
    defaultXI: {
      GK: 1,   // Alisson (ninety minutes v Villarreal)
      LB: 7,   // Kerkez (rested Tuesday; Squawka's pick)
      LCB: 3,  // Van Dijk (ninety minutes Tuesday)
      RCB: 11, // Jacquet (off on 74 Tuesday)
      RB: 29,  // Araujo (45 minutes Tuesday, fresh; Squawka's pick)
      LCM: 13, // Mac Allister (two goals v Villarreal)
      CM: 14,  // Gravenberch (back in midfield after his half at right-back)
      RCM: 18, // Wirtz (half-time sub, scored the fourth)
      LW: 30,  // Barcola (benched Tuesday, Squawka's pick)
      ST: 23,  // Isak (held back Tuesday after a muscle injury)
      RW: 25,  // Ngumoha (two assists v Villarreal; Munoz a doubt)
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
    // Tue 20 Oct (evening): re-pointed at Brighton at home after Liverpool 4-3 Villarreal. Squawka's Brighton XI (Mon 19 Oct) with two
    //   forced changes: Gravenberch for Szoboszlai (hamstring, could miss two more games, Evening Standard), Ngumoha for Munoz (not in squad).
    defaultXI: {
      GK: 1,   // Alisson (ninety minutes v Villarreal)
      LB: 7,   // Kerkez (rested Tuesday; Squawka's pick)
      LCB: 3,  // Van Dijk (Squawka's pick)
      RCB: 11, // Jacquet (Squawka's pick)
      RB: 29,  // Araujo (45 minutes Tuesday; Squawka's pick)
      LDM: 14, // Gravenberch (Szoboszlai, Squawka's pick, is injured)
      RDM: 13, // Mac Allister (two goals v Villarreal)
      LAM: 30, // Barcola (Squawka's pick)
      CAM: 18, // Wirtz (Squawka's pick; scored off the bench Tuesday)
      RAM: 25, // Ngumoha (two assists Tuesday; Squawka's pick Munoz missed the squad)
      ST: 23,  // Isak (held back Tuesday after a muscle injury)
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
    // Tue 20 Oct (evening): re-pointed at Brighton at home; Gomez inside, Araujo at wing-back, Ngumoha right.
    defaultXI: {
      GK: 1,   // Alisson
      LCB: 3,  // Van Dijk
      CCB: 11, // Jacquet
      RCB: 5,  // Gomez (sixteen minutes Tuesday, fresh)
      LWB: 7,  // Kerkez
      LCM: 13, // Mac Allister
      RCM: 14, // Gravenberch
      RWB: 29, // Araujo (the fresh right-sided defender)
      LW: 30,  // Barcola
      ST: 23,  // Isak
      RW: 25,  // Ngumoha (two assists v Villarreal)
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
// Thu Oct 15 (evening): all 27 refreshed for Iraola's pre-Brentford presser (trio not ruled out, Leoni to November) and Sports Mole's XI;
//   Araujo replaces Frimpong at RB in the 4-3-3 and 4-2-3-1, since RotoWire and Sports Mole both pick him.
// Mon Oct 19 (morning): all 27 refreshed for Sports Mole's Monday XI, The Stats Zone's preview, Brit Brief's injury round-up and Monday's contract stories.
// Sun Oct 18 (evening): all 27 refreshed for the Sunday-evening previews (Eurosport; Sports Mole) and Iraola's 'very delicate situation' (PA).
// Sun Oct 18 (morning): all 27 refreshed for the scans awaited on Szoboszlai and Frimpong, Bradley's December projection (Sports Mole) and Wirtz's Opta mark.
// Sat Oct 17 (evening): all 27 refreshed after Brentford 1-2 Liverpool (Sky Sports; SI/FotMob ratings; Liverpool FC); re-pointed at Villarreal, UCL, Tue 20 Oct.
// Tue Oct 20 (evening): all 27 refreshed after Liverpool 4-3 Villarreal (Sky Sports; SI/FotMob; Goal; Opta Analyst); re-pointed at Brighton, PL, Sun 25 Oct.
// Tue Oct 20 (morning, matchday): all 27 refreshed for Munoz's knee brace (Sports Mole), Brit Brief's absentee list and the overnight XIs (SI; FutbolFantasy).
// Thu Oct 22 (morning): all 27 refreshed for The False 9's FPL percentages, Brit Brief's Gravenberch/Wirtz call and the Daily Mail's Ngumoha contract report.
// Wed Oct 21 (evening): all 27 refreshed for Rush The Kop's injury list, the Fan Team of the Week and the Mac Allister contract report (Telegraph via Football365).
// Fri Oct 16 (morning): all 27 refreshed for Van Dijk's calf update (BBC Sport), Barcola's Player of the Week award and The Hard Tackle's XI.
export const PLAYER_EVIDENCE = {
  1:   "Starts · first choice in goal",
  2:   "Bench · Chelsea cup tie 28 Oct",
  3:   "Starts · no senior rotation",
  5:   "RB/CB cover · fresh",
  7:   "Back at LB · in both XIs",
  8:   "Knee · 0% FPL · early Dec",
  9:   "Hamstring · 0% FPL · late Nov",
  10:  "ACL · training in Nov, plays Jan",
  11:  "'Has everything' · RCB",
  12:  "On loan at Levante",
  13:  "Pivot · midfield's fixed point",
  14:  "Back to the pivot · Brit Brief",
  15:  "Hamstring · aiming at Arsenal",
  17:  "League cover · not UEFA-listed",
  18:  "Back at ten · Brit Brief",
  20:  "First midfield sub",
  22:  "Left in False 9 XI · else bench",
  23:  "Leads the line · every XI",
  24:  "Achilles · 0% FPL",
  25:  "New deal 'when, not if' · right",
  26:  "Outside recent squads",
  27:  "Third keeper",
  28:  "Knee · 75% FPL · held out",
  29:  "Starts at RB · default",
  30:  "Squawka's left · fresh",
  31:  "Cover behind Isak",
  32:  "LB cover",
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
// Thu Oct 15 (morning): ONE personnel change in all three shapes, Nyoni for Endo at LDM/CM/RCM, following RotoWire's Brentford XI
//   (published Wed 14 Oct), the first preview to name Liverpool's eleven. Frimpong held at RB against it (RotoWire picks Araujo).
//   LDM Low to Medium. Overall stays Medium: Iraola's press conference is at noon on Thursday.
// Fri Oct 16 (morning): no personnel change. The Evening Standard (Thu evening) and The Hard Tackle (Fri morning) name the same XI
//   as RotoWire and Sports Mole. Van Dijk: 'I think I'll be fine for Saturday' (BBC Sport), LCB stays High. No level change.
// Sat Oct 17 (evening): Brentford played, Liverpool won 2-1 (Sky Sports). Re-pointed at Villarreal at Anfield, Champions League,
//   Tue 20 Oct, 8pm. ONE personnel change from the eleven that started at the Gtech: Gravenberch (ban served) for Szoboszlai
//   (hamstring, out 'for some time'); Isak keeps ST after scoring. Frimpong (injured) out of the 3-4-3,
//   Araujo to RWB and Gomez to RCB there. Endo and Chiesa not UEFA-registered. No Liverpool preview published yet; overall Medium.
// Sun Oct 18 (morning): no personnel change. Sports Mole (Sunday) expects Araujo to keep RB and Mac Allister to partner Gravenberch;
//   Munoz finished Saturday at RB (Fantasy Football Scout) and is added as an RB alternative. Szoboszlai and Frimpong await scans. Overall Medium.
// Sun Oct 18 (evening): no personnel change. Eurosport's Sunday-evening XI is identical to this sheet; Sports Mole's (later) picks
//   Gomez at RB, Tsimikas at LB and Gakpo on the right, added as first alternatives. No scan result published. Overall Medium.
// Mon Oct 19 (morning): ONE personnel change, Gakpo for Munoz at RAM in all three shapes. Sports Mole's Monday XI (4.34am) and The Stats
//   Zone's (Sun 5.22pm) both start Gakpo; they split on the full-backs (Sports Mole: Gomez and Tsimikas, rested for Brighton; The Stats
//   Zone: Araujo and Kerkez), held here at Araujo and Kerkez. No scan result for Szoboszlai or Frimpong. Overall Medium.
// Mon Oct 19 (evening): ONE personnel change, Gomez for Araujo at RB (3-4-3: Gomez to RWB, Araujo to RCB). Iraola: best XI 'maybe it is
//   not the one you think because some are not fresh enough' (Rush The Kop); Araujo started Linz and the Gtech, Gomez neither, and Sports
//   Mole's Monday XI starts Gomez. Europa Press still expects Araujo. Munoz missed Monday's training (Express via AOL). Overall Medium to Low.
// Tue Oct 20 (morning, matchday): ONE personnel change, Araujo back for Gomez at RB (3-4-3: Araujo RWB, Gomez RCB). Every overnight
//   preview found starts Araujo at right-back (SI, 1am Tue; Rush The Kop; EFE via Infobae; Liverpool Offside via Yahoo; FutbolFantasy);
//   none starts Gomez. Munoz seen in a knee brace (Sports Mole, 7.23am), held out. LB and LW split 2-2, held. Overall Low to Medium.
// Tue Oct 20 (evening): Villarreal played, Liverpool won 4-3 (Sky Sports). Re-pointed at Brighton at Anfield, Premier League, Sun 25 Oct,
//   2pm GMT. Baseline is Squawka's Brighton XI (Mon 19 Oct), which predates Tuesday: Gravenberch for Szoboszlai (injured), Ngumoha for
//   Munoz (not in Tuesday's squad, RotoWire). Isak, Wirtz, Barcola and Kerkez were benched or rested on Tuesday with Sunday in mind. Overall Medium.
// Wed Oct 21 (morning): no personnel change. No new Brighton preview. Iraola's press conference confirmed Araujo was taken off for
//   tactical reasons, not injury, and that Isak (muscle), Wirtz and Barcola (fatigue) were rested (Liverpool FC); Munoz being
//   assessed, 50 per cent (Premier Injuries). Levels unchanged; overall Medium.
// Wed Oct 21 (evening): no personnel change. Still no new Brighton preview; Rush The Kop says Munoz's knee is 'not understood to be
//   serious' with Sunday possible, held out pending Iraola's Friday presser. No knock reported from Tuesday. Levels unchanged; overall Medium.
// Thu Oct 22 (morning): no personnel change. Brit Brief (Wed 11.36pm) expects Wirtz back at ten and Gravenberch out of it, as here;
//   The False 9 (Wed) rates Munoz 75 per cent on the official FPL site, still held out. Gakpo/Barcola on the left stays split. Overall Medium.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. These read as confidence that the slot's occupant STARTS AGAINST BRIGHTON AT HOME (PL, Sun 25 Oct; reviewed Thu Oct 22 morning, no level change; reviewed Wed Oct 21 evening, no level change; reviewed Wed Oct 21 morning, no level change; re-pointed Tue Oct 20 evening after Liverpool 4-3 Villarreal. Previously Villarreal at home (UCL, Tue 20 Oct; re-pointed Sat Oct 17 evening after Brentford 1-2 Liverpool: LDM Gravenberch High, CAM Wirtz High, RCB High, ST Isak Medium, RAM Medium. Previously Brentford away; Sat Oct 17 morning: CAM High to Medium, three Echo writers pick Szoboszlai there; RAM Medium to Low, all four Echo writers pick Ngumoha; re-pointed Wed 14 Oct evening after LASK 3-6 Liverpool; previously LASK Linz, and before that Manchester City at
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
  RCB: "High",
  RB: "Medium",
  LDM: "Medium",
  RDM: "High",
  LAM: "Medium",
  CAM: "High",
  RAM: "Medium",
  ST: "High",
};


// ─── Per-slot rationale ────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run. Reviewed Thu Oct 22 (morning) for Brighton against Brit Brief's preview and The False 9's FPL figures. Previously reviewed Wed Oct 21 (evening) for Brighton against Rush The Kop's injury list; no new preview. Previously reviewed Wed Oct 21 (morning) for Brighton after Iraola's explanations of Tuesday's selection; no new preview. Previously reviewed Tue Oct 20 (evening) for Brighton at home, after Liverpool 4-3 Villarreal, against Squawka's Brighton XI. Previously reviewed Mon Oct 19 (morning) for Villarreal against Sports Mole's Monday XI and The Stats Zone's preview. Previously reviewed Sun Oct 18 (evening) for Villarreal against Eurosport's and Sports Mole's evening XIs. Previously reviewed Sun Oct 18 (morning) for Villarreal. Previously reviewed Sat Oct 17 (evening), after Brentford 1-2 Liverpool, for Villarreal. Previously reviewed Sat Oct 17 (morning, matchday) against the Liverpool Echo's four XIs (Brit Brief) and The Football Faithful's preview.
// Originally set Wed Sep 23 (evening) against the confirmed XI and player ratings from Bournemouth 0-1 Liverpool. The next
// fixture, Manchester City at Anfield on Sunday 11 October at 4.30pm, is the target.
export const SLOT_RATIONALE = {
  LB: "Thu Oct 22, morning - Kerkez, in both The False 9's XI and Squawka's after his Tuesday rest. Medium.",
  LCB: "Thu Oct 22, morning - Van Dijk, with Gomez the only fresh senior centre-back behind him. High.",
  RCB: "Thu Oct 22, morning - Jacquet, praised on Thursday as a player who 'has everything' (Liverpool.com). High.",
  RB: "Thu Oct 22, morning - Araujo in The False 9's XI; Munoz is 75 per cent on the official FPL site (The False 9), Gomez the other option. Medium.",
  LDM: "Thu Oct 22, morning - Gravenberch, back in the pivot as Brit Brief expects him to give the ten to Wirtz. Medium.",
  RDM: "Thu Oct 22, morning - Mac Allister, beside Gravenberch in every preview XI. High.",
  LAM: "Thu Oct 22, morning - Barcola (Squawka); The False 9 picks Gakpo. The open call of the eleven. Medium.",
  CAM: "Thu Oct 22, morning - Wirtz, expected back at ten after scoring off the bench on Tuesday (Brit Brief). High.",
  RAM: "Thu Oct 22, morning - Ngumoha, on the right in The False 9's XI; the Daily Mail says a new deal is 'a matter of when, not if'. Medium.",
  ST: "Thu Oct 22, morning - Isak, in every Brighton XI published so far. High.",
};


// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · Chelsea cup tie on 28 October" }, { playerId: 27, reason: "Woodman · third-choice" }],
  LB:  [{ playerId: 32, reason: "Tsimikas · corner assist v Villarreal" }],
  LCB: [{ playerId: 5, reason: "Gomez · senior centre-back cover" }],
  RCB: [{ playerId: 5, reason: "Gomez · on for Jacquet on 74 Tuesday" }],
  RB:  [{ playerId: 5, reason: "Gomez · the only other senior right-back" }, { playerId: 14, reason: "Gravenberch · played the second half there Tuesday" }],
  LDM: [{ playerId: 20, reason: "Nyoni · started Tuesday" }, { playerId: 17, reason: "Endo · eligible again in the league" }],
  RDM: [{ playerId: 20, reason: "Nyoni · first midfield cover" }],
  LAM: [{ playerId: 22, reason: "Gakpo · ninety minutes on the left Tuesday" }],
  CAM: [{ playerId: 14, reason: "Gravenberch · started at ten Tuesday" }],
  RAM: [{ playerId: 28, reason: "Munoz · if fit; missed Tuesday's squad" }, { playerId: 22, reason: "Gakpo · can play right" }],
  ST:  [{ playerId: 31, reason: "Koumas · started Tuesday" }, { playerId: 30, reason: "Barcola · the alternative nine" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-10-22T08:30:00Z",
  reason: "Thu Oct 22, morning. No personnel change for Brighton at Anfield, Sunday 25 October, 2pm. Brit Brief's late-Wednesday preview expects Wirtz back at ten with Gravenberch in the pivot, as here; Munoz is 75 per cent on the official FPL site (The False 9) and stays out until Iraola's Friday press conference. Medium: three previews now, split on Barcola or Gakpo on the left (Squawka; The False 9).",
};
