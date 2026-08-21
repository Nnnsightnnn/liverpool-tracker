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
    // 4-2-3-1 below. Refreshed Fri Aug 21: pre-season over (Como beaten 2-0 on
    // Aug 16, Gakpo and Jacquet), next up is Newcastle away on Sunday Aug 23,
    // Iraola's first competitive match. Mac Allister back in the spine; Ekitike
    // (on a cane), Leoni and Bradley take no part; Gomez out for the opener and
    // racing for Forest on Aug 29, leaving Frimpong the only fit recognised right
    // back with Araujo's loan covering; Jacquet fit again and scored vs Como.
    // Curtis Jones has flown to Italy for his Inter medical (~€35m, signs this weekend)
    // so he drops out; Gakpo, no longer expected to be sold, starts on the right
    // with Ngumoha to the bench; the Barcola pursuit continues with PSG reported
    // to be softening on their ask as Liverpool offer near £98m.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (back and fit after scoring vs Como · Araujo loan covers CB/RB)
      RB: 9,    // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LCM: 13,  // Mac Allister (midfield three)
      CM: 14,   // Gravenberch (control of midfield · most reliable MID)
      RCM: 15,  // Szoboszlai (engine · 48 apps)
      LW: 18,   // Wirtz (front-line option)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 22,   // Gakpo (staying, expected to start; Ngumoha drops to the bench)
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
    // campaign with (adjusted for the summer exits), NOW pointed at the coming
    // fixture: Newcastle away on Sunday Aug 23 (pre-season closed, Como beaten 2-0 on Aug 16).
    // Refreshed Fri Aug 21: Como beaten 2-0 on Aug 16 (Gakpo, Jacquet), pre-season closed; next up
    // Newcastle away on Aug 23. Mac Allister is back in the spine after the World Cup final;
    // Ekitike (on a cane) and Bradley take no part (rehab), Gomez out and racing for Forest on Aug 29,
    // Leoni closing on a September return; Jacquet fit again after scoring vs Como.
    // Curtis Jones has flown to Italy for his Inter medical (~€35m, signs this weekend) so he drops out;
    // Liverpool no longer expect to sell Gakpo, now in line to start with Ngumoha to the bench;
    // Barcola pursuit continues, PSG reported to be softening on their ask as Liverpool offer near £98m.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (the season's heaviest-minutes midfielder)
      LAM: 18,  // Wirtz (wide-left · injury-hit debut season)
      CAM: 13,  // Mac Allister (No. 10 · World Cup runner-up · back in the spine)
      RAM: 22,  // Gakpo (staying, expected to start; the post-Salah slot until a winger signs)
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
    // Thu Aug 20: Joe Gomez, out for the opener and racing for Forest on Aug 29,
    // so the academy's Ndukwe steps into the left of a bare back three alongside
    // VVD and Jacquet; Kerkez and Frimpong as wing-backs, Gravenberch and Mac
    // Allister in midfield, a Gakpo-Isak-Wirtz front three (Jones leaving for Inter,
    // Ngumoha to the bench). Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LCB: 12,  // Ndukwe (academy cover · Gomez out for weeks; VVD anchors the middle of the three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (unveiled Jul 1 · right of the back three)
      LWB: 7,   // Kerkez (LWB with Robertson gone to Spurs)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 9,   // Frimpong (only recognised RB · Bradley on tour for rehab only)
      LW: 22,   // Gakpo (LW in the three-man attack · staying and expected to start)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 18,   // Wirtz (right of the front three · Ngumoha to the bench)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-08-09
// (Thu Aug 20: pre-season over, next up is Newcastle away on Sunday Aug 23 (Como beaten 2-0 on Aug 16), Iraola's
// first competitive match. Salah is a Trabzonspor player; Curtis Jones' Inter move is agreed (Romano 'here we go',
// ~€35m, medical planned), so he drops out of the XI; Liverpool no longer expect to sell Gakpo, now in line to start;
// the Barcola pursuit has quickened, PSG cutting their ask toward £110m as Liverpool ready a fresh offer;
// Frimpong the lone fit senior RB, Araujo's loan covering; Gomez out for the opener (Forest Aug 29);
// Leoni closing on a September return from his ACL; Ekitike (on a cane) and Bradley play no part.)
export const PLAYER_EVIDENCE = {
  1:  "No. 1 · pre-season done, Newcastle next",  // Alisson
  2:  "No. 2 · asset to loan, not sell",          // Mamardashvili
  3:  "Captain · leads them out at Newcastle",    // Van Dijk
  5:  "Muscle · out for opener, Forest Aug 29",    // Gomez
  7:  "First-pick LB · Robertson gone to Spurs",  // Kerkez
  8:  "Knee · misses opener, rehab only",         // Bradley
  9:  "Lone fit senior RB · Araujo spells him",   // Frimpong
  10: "ACL · nearing training, Sept eyed",        // Leoni
  11: "Scored vs Como · back and fit",            // Jacquet
  12: "Starred vs Monaco · barred until Jan",     // Ndukwe
  13: "WC finalist · central, City link dead",    // Mac Allister
  14: "The fixed point at the base",              // Gravenberch
  15: "Deal to 2031 · vice-captaincy front-runner", // Szoboszlai
  16: "Flew for Inter medical · signs this weekend", // Jones
  17: "Made available · sell-to-buy exit",        // Endo
  18: "Scored vs Monaco · the No. 10",            // Wirtz
  19: "Building fitness · back with the group",   // Bajcetic
  20: "Impressed on tour · Iraola audition",      // Nyoni
  22: "Staying · in line to start at Newcastle",  // Gakpo
  23: "Returns to St James' in red · Aug 23",     // Isak
  24: "Achilles · on a cane, festive return eyed", // Ekitike
  25: "Rotation option · Gakpo starts ahead",     // Ngumoha
  26: "Back from illness · staying to fight",     // Chiesa
  27: "New deal · 3rd-choice GK",                 // Woodman
  28: "World champion · debuted vs Monaco",       // Munoz
};

// Default formation when entering the view: the 4-2-3-1 Slot favoured through
// the run-in, shown as the first-choice XI Liverpool finished the 2025-26
// season with, now pointed at Newcastle away on Sunday Aug 23 (pre-season closed,
// Como beaten 2-0 on Aug 16). It is a squad baseline, adjusted for team news.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. With the season over these read as confidence that the slot's
// occupant remains a first-choice starter into 2026-27 — LOW where the player
// has left (Salah, Robertson, Konate) or whose future is open (Mac Allister).
// (Refreshed Fri Aug 21: pre-season over (Como beaten 2-0 on Aug 16), next up Newcastle
// away on Aug 23. Curtis Jones has flown to Italy for his Inter medical (~€35m, signs this weekend);
// Liverpool no longer expect to sell Gakpo, now in line to start with Ngumoha to the bench; the
// Barcola pursuit continues with PSG reported to be softening on their ask as Liverpool offer near £98m;
// Araujo in on loan and bowed vs Como; Munoz debuted vs Monaco; Frimpong the lone fit senior RB.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · eased back, first minutes vs Monaco Aug 9
  RCB: "Medium", // Konate gone free to Madrid · Araujo in on loan and bowed vs Como, Jacquet fit again and scored vs Como
  RB:  "Low",    // Frimpong the only recognised RB · Bradley weeks out, rehab only · Jones leaving for Inter
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "Medium", // Wirtz · injury-hit debut season · No. 10 role, scored vs Monaco
  CAM: "Medium", // Mac Allister · World Cup runner-up · back training after the tour, City link dead, central again
  RAM: "Medium", // Salah gone (Trabzonspor) · Gakpo staying and expected to start until a senior winger (Barcola) signs
  ST:  "Medium", // Isak · injury-wrecked debut year · returns to St James' in red on Aug 23
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run.
export const SLOT_RATIONALE = {
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Fri Jul 10 — a fresh voice for the defence: John Barnes has urged Liverpool to extend Van Dijk beyond his 2027 deal even at 35, as the AC Milan interest driven by Ibrahimović, Fenerbahce lurking, keeps being knocked back at Anfield, no bid received and none expected to move him. The captain is central to Iraola's plans and the slot a thinning back line is being rebuilt around, Jacquet, cleared by his surgeon to rejoin group training, the in-house cover behind him.",
  RCB: "Sun Aug 16 — the slot has cover, and its returnee is fit and scoring. Ronald Araujo took his Anfield bow in the 2-0 win over Como, and Jeremy Jacquet, back from a shoulder problem, marked his return to the same game with a goal, easing a centre-back file that Konate's free exit and injuries had cut to Van Dijk alone against Monaco. Araujo can fill right-back too. With the emergency met and a fit senior partner beside Van Dijk again for Newcastle, a permanent centre-back (Milan's Tomori the value route) slides to a longer-term want rather than a must-have.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Sat Jul 18 — settled, and expensively so. Szoboszlai has signed a new five-year contract running to 2031, three years on from arriving from Leipzig on a deal that ran only to 2028, with reported terms in the £200,000-£250,000 band. He was voted supporters' player of the season after a campaign spent filling in at right-back, at the eight and on the right wing. With Salah, Konate and Robertson all gone for nothing, this is the club choosing to keep rather than to replace.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Sun Aug 16 — back in the fold, and central to it. Mac Allister missed the American tour in its entirety after the World Cup final at MetLife, where Argentina lost in extra time reduced to ten after Enzo Fernandez's 93rd-minute red and Ferran Torres finished it on 106, but he is now training again and folded into Iraola's spine for the Newcastle opener. Iraola has resisted the summer's Madrid whispers and a fleeting City shortlist, keeping him rather than banking him as sell-to-buy fuel. A club season in which he was among the most criticised at Anfield was rewritten by five weeks in America; this slot is a selection again, not a placeholder.",
  RAM: "Fri Aug 21 — the slot that defines the summer, held by the man the club chose to keep as the man it wants closes in. Liverpool no longer expect to sell Gakpo, and the forward impressed enough in pre-season to own the post-Salah berth for Newcastle, Rio Ngumoha dropping to the bench. Above it the marquee search has quickened: with Curtis Jones' Inter sale a medical and a signature from done, PSG have cut their Barcola ask from £145m toward £110m, an agreement reported in the talks as Liverpool ready a fresh offer inside the final fortnight. The fallback board stays thin, Rayan's clause dormant to 2027, Everton's Ndiaye a pricey £75m alternative. Until a senior winger signs, Gakpo owns the right and Ngumoha waits.",
  RB:  "Fri Aug 21 — a one-man department, with cover rather than competition. Jeremie Frimpong is the only fit recognised right-back: Conor Bradley is still short after January knee surgery and misses the opener, Joe Gomez out and racing to be fit for Forest on August 29. Ronald Araujo, in on loan and bowed against Como, can spell the flank at Newcastle, softening a need that had Tottenham's Djed Spence floated around £35m before he went elsewhere. Curtis Jones, last season's emergency cover there, has flown to Italy for his Inter medical and is a signature from gone. Frimpong plays by elimination, for now.",
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
  RCB: [{ playerId: 11, reason: "Jacquet · returned and scored vs Como, fit again after shoulder caution; Araujo (loan) also covers here" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the only fit recognised right-back; Bradley travelled for rehabilitation only and took no part in the tour" }, { playerId: 5, reason: "Gomez · emergency right-back cover once his muscle injury clears, Jones kept in midfield not at full-back" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · can switch to the left · staying and expected to start" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · signed to 2031, vice-captaincy front-runner, can push into the No. 10 with another midfielder in the pivot" }, { playerId: 20, reason: "Nyoni · impressed on tour, one of the young players Iraola singled out" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · rotation option now Gakpo starts on the right" }, { playerId: 26, reason: "Chiesa · trained day one and staying to fight for a starting role" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "Fri Aug 21 — two days out, the XI below points at Newcastle away on August 23, Liverpool's league opener and Iraola's first competitive match, with a settling core but a genuine rotation caveat: the manager gave a settled group the full 90 against Como, has hinted at as many as six of them starting, and took his first Premier League press conference on Friday. Jacquet is fit again beside Van Dijk and Araujo's loan cover softens a defence still missing Gomez (out for the opener, racing for Forest on Aug 29), Leoni (ACL, eyeing September) and Bradley (knee). Isak returns to St James' Park in red, the fixture's marquee storyline. On the ledger: Curtis Jones has flown to Italy for his Inter medical and drops out of the XI, while Gakpo stays and starts with Ngumoha to the bench; above it PSG have cut their Barcola ask toward £110m as Liverpool ready a fresh offer. Araujo, a loan arrival, is not yet in the PLAYERS-keyed XI. Next up: Newcastle away, August 23."
};
