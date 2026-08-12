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
    // IDs from playerData.js. The 2025-26 season is OVER: Liverpool finished
    // fifth. This is not a matchday prediction but a SNAPSHOT of the XI that
    // closed the campaign, adjusted for the summer exits (Kerkez, Jacquet and
    // Ngumoha step in for Robertson, Konate and Salah). 4-3-3 is the backup
    // look. Refreshed Mon Aug 10: Monaco beaten 2-3 at Anfield on Aug 9 (Iraola's
    // first home dugout, a second blown two-goal lead); next up is Como at Anfield on
    // Sunday Aug 16. Mac Allister back for Como; Ekitike, Leoni and Bradley take no
    // part (rehab only); Gomez out for weeks and missing the season start, leaving
    // Frimpong the only fit recognised right back; Van Dijk is fit and captained Monaco,
    // Jacquet (shoulder) missed it, Ndukwe covered and Araujo's loan is available from Como. Liverpool are
    // chasing a Barcola deal that stalls near €150m (Sky: deal difficult, Rayan and Minteh added to the board), with PSG teenager Mbaye now led;
    // the centre-back file is Milan's Tomori and PSG's Zabarnyi now Guehi is long gone (Man City, Jan 2026)
    // and Spence is agreeing terms with Inter; Sano and a revived Wharton lead the six.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LCM: 13,  // Mac Allister (midfield three)
      CM: 14,   // Gravenberch (control of midfield · most reliable MID)
      RCM: 15,  // Szoboszlai (engine · 48 apps)
      LW: 18,   // Wirtz (front-line option)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 25,   // Ngumoha (the post-Salah slot until a winger signs)
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
    // The 2025-26 season is COMPLETE. This 4-2-3-1, the shape Slot favoured
    // through the run-in, is shown as the first-choice XI Liverpool finished the
    // campaign with (adjusted for the summer exits), NOT as a prediction for a
    // coming fixture (the tour is over; next up is Como at Anfield on Sunday Aug 16 (Monaco beaten 2-3 on Aug 9)).
    // Refreshed Wed Aug 12: Monaco beaten 2-3 on Aug 9 (Munoz debuted), and Mac Allister returns for Como
    // (Aug 16) after the World Cup final; the tour finished on a 2-4 Leeds loss after
    // wins over Wrexham and Sunderland; Ekitike, Leoni and Bradley take no part (rehab),
    // and Gomez is out and racing for Forest on Aug 29; Jacquet is set for his pre-season debut vs Como;
    // the winger board has drawn Arsenal as a rival for Barcola near £145m, so Mbaye is the name
    // Liverpool most realistically land (Rayan and Minteh still on the board);
    // the centre-back file falls to Tomori and Zabarnyi now Araujo's loan is in (Guehi went to Man City in January);
    // Curtis Jones's Inter move has cooled (Romano: far from done).
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (the season's heaviest-minutes midfielder)
      LAM: 18,  // Wirtz (wide-left · injury-hit debut season)
      CAM: 13,  // Mac Allister (No. 10 · World Cup runner-up · misses the American tour)
      RAM: 25,  // Ngumoha (the post-Salah slot until a winger signs)
      ST: 23,   // Isak (No. 9 · injury-wrecked debut year)
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
    // Hypothetical 3-4-3 alternative, a shape rarely used in 2025-26.
    // Shown for completeness alongside the season-closing baseline. Refreshed
    // Wed Aug 12: Joe Gomez, hurt inside eight minutes of the Sunderland win and
    // out for weeks (missing the opener), took no part in any of the three tour
    // games, so the academy's Ndukwe steps into the left of a bare back three
    // alongside a returning VVD and Jacquet; Kerkez and Jones as wing-backs,
    // Gravenberch and Mac Allister in midfield, a Gakpo-Isak-Ngumoha front three.
    // Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LCB: 12,  // Ndukwe (academy cover · Gomez out for weeks; VVD anchors the middle of the three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (unveiled Jul 1 · right of the back three)
      LWB: 7,   // Kerkez (LWB with Robertson gone to Spurs)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 9,   // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 25,   // Ngumoha (the post-Salah slot until a winger signs)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-08-09
// (Sat: the tour is over, next up is Como at Anfield on Sunday Aug 16 (Monaco beaten 2-3 on Aug 9), Iraola's
// first home dugout. Salah was unveiled at Trabzonspor on Thursday;
// the Barcola deal stalls near €150m (Sky: deal difficult, Rayan and Minteh added to the board), Mbaye now led;
// the centre-back board is Zabarnyi and Milan's Tomori (Guehi joined Man City back in January), with Tomori
// (~£25m) the cheaper route; Victor Munoz debuted vs Monaco (Aug 9); Inter come to £30m for
// a Curtis Jones who has set his sights on the move (Chivu eyes him wide); Tottenham ready a fresh push for Gakpo but only a 'huge'
// fee moves the club; Frimpong the lone fit senior RB after his Leeds overload; Gomez given
// about a month and misses the opener; Ekitike, Leoni and Bradley play no part.)
export const PLAYER_EVIDENCE = {
  1:  "Back from WC break · No. 1",               // Alisson
  2:  "Led GK group on tour · No. 2",             // Mamardashvili
  3:  "Captained the 2-3 loss to Monaco",         // Van Dijk
  5:  "Muscle · racing for Forest Aug 29",         // Gomez
  7:  "First-pick LB · on the tour",              // Kerkez
  8:  "Knee · misses opener, rehab only",         // Bradley
  9:  "Lone fit senior RB · played Monaco",       // Frimpong
  10: "ACL · nearing training, Sept eyed",        // Leoni
  11: "Set for Como debut · shoulder eased",       // Jacquet
  12: "Starred vs Monaco · barred until Jan",     // Ndukwe
  13: "WC runner-up · back for Como Aug 16",      // Mac Allister
  14: "The fixed point at the base",              // Gravenberch
  15: "Deal to 2031 · vice-captaincy front-runner", // Szoboszlai
  16: "Inter talks stalled · Romano cools it",     // Jones
  17: "Nearing full training · sale likely",      // Endo
  18: "Scored vs Monaco · best on the pitch",     // Wirtz
  19: "Building fitness · on the tour",           // Bajcetic
  20: "Impressed on tour · Iraola audition",      // Nyoni
  22: "Not for sale · Spurs rebuffed",            // Gakpo
  23: "Opened scoring vs Monaco",                 // Isak
  24: "Achilles · months out, rehab only",        // Ekitike
  25: "Holds RW · Barcola contested, Arsenal in",  // Ngumoha
  26: "Back from illness · staying to fight",     // Chiesa
  27: "New deal · 3rd-choice GK",                 // Woodman
  28: "World champion · debuted vs Monaco",       // Munoz
};

// Default formation when entering the view: the 4-2-3-1 Slot favoured through
// the run-in, shown as the first-choice XI Liverpool finished the 2025-26
// season with (the campaign is over; Monaco beaten 2-3 on Aug 9, next up Como at
// Anfield on Sunday Aug 16). It is a squad baseline, not a matchday prediction.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. With the season over these read as confidence that the slot's
// occupant remains a first-choice starter into 2026-27 — LOW where the player
// has left (Salah, Robertson, Konate) or whose future is open (Mac Allister).
// (Refreshed Mon Aug 10: Monaco beaten 2-3 at Anfield on Aug 9 (Iraola's first
// home dugout, a second blown two-goal lead), next up Como on Aug 16. Salah was unveiled at Trabzonspor on Thursday; the Barcola deal stalls near €150m (Sky: deal difficult, Rayan and Minteh added to the board), Mbaye now led; Sky have cooled the Zabarnyi talk, leaving Palace's Guehi the standing
// centre-back target with Milan's Tomori (~£25m) the cheaper alternative; Munoz debuted vs Monaco (Aug 9); Inter come to £30m for Jones; Frimpong
// the lone fit senior RB after his Leeds overload.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · eased back, first minutes vs Monaco Aug 9
  RCB: "Low",    // Konate gone free to Madrid · Araujo in on loan, Jacquet back for Como · Zabarnyi and Tomori the live targets
  RB:  "Low",    // Frimpong the only recognised RB · Bradley weeks out, rehab only · Jones staying in midfield
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "Medium", // Wirtz · injury-hit debut season · No. 10 role, played the Leeds finale
  CAM: "Low",    // Mac Allister · World Cup runner-up · misses the entire American tour, back for Como on Aug 16
  RAM: "Low",    // Salah gone (Trabzonspor, unveiled) · Barcola deal stalls near €150m (Sky: deal difficult, Rayan and Minteh added to the board), Mbaye now led · Ngumoha holds it by default
  ST:  "Medium", // Isak · injury-wrecked debut year · took first tour minutes vs Leeds
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run.
export const SLOT_RATIONALE = {
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Fri Jul 10 — a fresh voice for the defence: John Barnes has urged Liverpool to extend Van Dijk beyond his 2027 deal even at 35, as the AC Milan interest driven by Ibrahimović, Fenerbahce lurking, keeps being knocked back at Anfield, no bid received and none expected to move him. The captain is central to Iraola's plans and the slot a thinning back line is being rebuilt around, Jacquet, cleared by his surgeon to rejoin group training, the in-house cover behind him.",
  RCB: "Wed Aug 12 — the slot has cover, and now a returnee too. Ronald Araujo's season-long loan gives the back line senior depth from Sunday's Como game, and Jeremy Jacquet is set to make his own pre-season debut in the same match, easing a centre-back file that Konate's free exit and injuries had cut to Van Dijk alone against Monaco. Araujo can fill right-back too. With the emergency met, Palace's Guehi slides to a longer-term want rather than a must-have.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Sat Jul 18 — settled, and expensively so. Szoboszlai has signed a new five-year contract running to 2031, three years on from arriving from Leipzig on a deal that ran only to 2028, with reported terms in the £200,000-£250,000 band. He was voted supporters' player of the season after a campaign spent filling in at right-back, at the eight and on the right wing. With Salah, Konate and Robertson all gone for nothing, this is the club choosing to keep rather than to replace.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Mon Jul 20 — the biggest night of his career, and it ended a man short. Mac Allister played the whole of the World Cup final at MetLife and lost it in extra time, Argentina reduced to ten when Enzo Fernandez was sent off for a second yellow in the 93rd minute and Ferran Torres finished it on 106. Emi Martinez made a final-record eleven saves behind him. A club season in which he was among the most criticised players at Anfield has still been rewritten by five weeks in America. He misses the American tour in its entirety and is not expected in an Iraola side before the Como friendly on August 16, which makes this slot a placeholder rather than a selection.",
  RAM: "Wed Aug 12 — the slot that defines the summer, and now a rival in the room. PSG hold Bradley Barcola near £145m and named him in their Super Cup squad, and on Wednesday Arsenal moved to hijack the deal after losing Vinicius to a new Real Madrid contract, with Liverpool reported to have weighed walking away. So the realistic answer shifts to teammate Ibrahim Mbaye, advised by Jorge Mendes and the Paris winger Liverpool lead for, with Bournemouth's Rayan and Brighton's Minteh still on the board. Below them Rio Ngumoha, seventeen, holds the post-Salah berth by default. Until a winger arrives it belongs to the academy.",
  RB:  "Wed Aug 12 — a one-man department, with cover rather than competition. Jeremie Frimpong is the only fit recognised right-back: Conor Bradley is still short after January knee surgery and misses the opener, Joe Gomez out and racing to be fit for Forest on August 29. Ronald Araujo, in on loan, can spell the flank from Sunday's Como game, softening a need that had Tottenham's Djed Spence floated around £35m. Curtis Jones, last season's emergency cover there, may yet leave, though Romano now calls his Inter move far from done. Frimpong plays by elimination, for now.",
  ST:  "Mon Aug 10 — Alexander Isak opened the scoring in Sunday's 2-3 defeat to Monaco, lining up again with Wirtz and Gravenberch and giving the first half exactly the fluency Iraola's reset promised before a thin bench let the two-goal lead slip. An injury-wrecked debut season limited the £100m striker to a handful of starts and never let the front three settle; a clean run under Iraola is the reset the whole attack needs, and the goals are starting to come.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · led the goalkeeping group on the tour with Alisson on a post-World Cup break; Alisson back for the Anfield friendlies" }, { playerId: 27, reason: "Woodman · third-choice cover, trained day one" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the first-choice left-back going forward now Robertson has left" }],
  LCB: [{ playerId: 5, reason: "Gomez · can shuffle infield to centre-back if his muscle injury clears" }],
  RCB: [{ playerId: 11, reason: "Jacquet · set for his pre-season debut vs Como after shoulder caution; Araujo (loan) also available from that game" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the only fit recognised right-back; Bradley travelled for rehabilitation only and took no part in the tour" }, { playerId: 5, reason: "Gomez · emergency right-back cover once his muscle injury clears, Jones kept in midfield not at full-back" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · a wide-left option · club restate he is not for sale" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · signed to 2031, vice-captaincy front-runner, can push into the No. 10 with another midfielder in the pivot" }, { playerId: 16, reason: "Curtis Jones · future open but the Inter move has cooled, Romano calling it far from done and stuck on the fee" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · holds the post-Salah right-sided berth until a winger signs" }, { playerId: 26, reason: "Chiesa · trained day one and staying to fight for a starting role" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Wed Aug 12 — the XI below stays a squad baseline rather than a matchday side, with Como still to come at Anfield on August 16 before the Newcastle opener. The summer's biggest story remains off the pitch: FSG's agreed sale of about a third of the club to a Bezos-backed consortium near £4.4bn is expected to be announced this week, Fenway retaining control. On the grass, Sunday's 2-3 defeat to Monaco framed the caution, a second blown two-goal lead in a week with a defence missing Jacquet (shoulder, but now set for a Como debut), Gomez (out, racing for Forest on August 29) and Leoni (ACL, nearing training). Ronald Araujo, in on a season-long loan, is available from Como and adds senior cover across centre-back and right-back, though as a loan arrival he is not yet in the PLAYERS-keyed XI. In the market the Barcola chase has drawn Arsenal as a rival near £145m, so Mbaye leads the realistic winger options while Curtis Jones's Inter move has cooled, Romano calling it far from done. Next up: Como at Anfield on August 16."
};
