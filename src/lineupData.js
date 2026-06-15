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
    // IDs from playerData.js. The 2025-26 season is OVER — Liverpool finished
    // fifth after Sunday's 1-1 with Brentford. This is no longer a matchday
    // prediction but a SNAPSHOT of the first-choice XI Liverpool closed the
    // campaign with, the baseline a summer rebuild will reshape. 4-3-3 is the
    // backup look — Slot favoured 4-2-3-1. Refreshed Mon Jun 15: window open,
    // Liverpool's opening bid lodged for Leipzig's Diomandé (Leipzig holding
    // ~€130m), Barcola the later-window fallback; Jones edging to Inter near
    // €25m; World Cup Sunday saw Van Dijk and Summerville score in the
    // Netherlands' 2-2 with Endo's Japan and Wirtz assist in Germany's 7-1.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 6,    // Robertson (final LFC appearance · Spurs-bound)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 4,   // Konaté (first-choice · now Real Madrid-bound)
      RB: 16,   // Jones (deputised at RB late in the season)
      LCM: 13,  // Mac Allister (midfield three)
      CM: 14,   // Gravenberch (control of midfield · most reliable MID)
      RCM: 15,  // Szoboszlai (engine · 48 apps)
      LW: 18,   // Wirtz (front-line option)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 21,   // Salah (final LFC season · now departing)
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
    // The 2025-26 season is COMPLETE. This 4-2-3-1 — the shape Slot favoured
    // through the run-in — is shown as the first-choice XI Liverpool finished
    // the campaign with after Sunday's 1-1 with Brentford, NOT as a prediction
    // for a coming fixture (the next match is a pre-season friendly on July
    // 25). Refreshed Mon Jun 15: window open, Liverpool's opening bid lodged
    // for Leipzig's Diomandé (Leipzig holding ~€130m, no release clause), with
    // Barcola the later-window fallback; Jones edging to Inter near €25m; World
    // Cup Sunday saw Van Dijk and Summerville score in the Netherlands' 2-2
    // with Endo's Japan and Wirtz assist in Germany's 7-1 over Curaçao.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 6,    // Robertson (final LFC appearance · Spurs-bound)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 4,   // Konaté (first-choice · now Real Madrid-bound)
      RB: 16,   // Jones (deputised at RB · Inter Milan keen)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (the season's heaviest-minutes midfielder)
      LAM: 18,  // Wirtz (wide-left · injury-hit debut season)
      CAM: 13,  // Mac Allister (No. 10 · contract talks stalled)
      RAM: 21,  // Salah (final LFC season · now departing)
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
    // Hypothetical 3-4-3 alternative — a shape Slot rarely used in 2025-26.
    // Shown for completeness alongside the season-closing baseline: VVD,
    // Konaté and Gomez across a back three, Robertson and Jones as
    // wing-backs, Gravenberch and Mac Allister in midfield, a Gakpo-Isak-
    // Salah front three. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LCB: 5,   // Gomez (slots into the back three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 4,   // Konaté (first-choice alongside VVD)
      LWB: 6,   // Robertson (final LFC season · slides up as LWB)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 16,  // Jones (wing-back cover)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 21,   // Salah (final LFC season · now departing)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-06-15
// (Mon, post-season, window open: Liverpool's opening bid lodged for Leipzig's
// Diomandé, Leipzig holding ~€130m, Barcola the later-window fallback; Jones
// edging to Inter near €25m; World Cup Sunday saw Van Dijk and Summerville
// score in NL's 2-2 with Endo's Japan and Wirtz assist in Germany's 7-1.)
export const PLAYER_EVIDENCE = {
  1:  "Brazil's No. 1 · staying at Anfield",   // Alisson
  2:  "Loan likely now Alisson stays",         // Mamardashvili
  3:  "Scored in NL's 2-2 with Japan",         // Van Dijk
  4:  "Gone to Real Madrid on a free",         // Konaté
  5:  "Now tilting toward staying",            // Gomez
  6:  "Gone to Spurs on a free",               // Robertson
  7:  "Tough debut · now first-pick LB",       // Kerkez
  8:  "Knee · rehab still indoors at AXA",     // Bradley
  9:  "Axed from NL World Cup squad",          // Frimpong
  10: "Torn ACL · out into 2026-27",           // Leoni
  11: "Deputy CB · behind new CB target",      // Jacquet
  12: "Academy depth · 2 senior apps",         // Ndukwe
  13: "No talks · two Madrids circle",         // Mac Allister
  14: "Assisted VVD in NL 2-2 Japan",          // Gravenberch
  15: "48 apps · extension still pending",     // Szoboszlai
  16: "Inter talks ongoing · ~€25m",           // Jones
  17: "Captained Japan to 2-2 with NL",        // Endo
  18: "Assist in Germany 7-1 · £115m",         // Wirtz
  19: "Hamstring · missed all season",         // Bajcetic
  20: "Academy prospect · 5 senior apps",      // Nyoni
  21: "Free Jun 30 · Juve, Miami, Saudi",      // Salah
  22: "Wants out · makeweight in Diomandé deal", // Gakpo
  23: "Injury-wrecked £100m debut year",       // Isak
  24: "Ruptured Achilles · out 9-12 months",   // Ekitike
  25: "Untouchable · Bayern rebuffed",         // Ngumoha
  26: "Exit parked for pre-season tour",       // Chiesa
  27: "3rd-choice GK · 2 PL starts",           // Woodman
};

// Default formation when entering the view — the 4-2-3-1 Slot favoured through
// the run-in, shown as the first-choice XI Liverpool finished the 2025-26
// season with (the campaign is over; next up is a pre-season friendly on July
// 25). It is a squad baseline, not a matchday prediction.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys (4-2-3-1). With the season over these now read as confidence that
// the slot's occupant remains a first-choice starter into 2026-27 — LOW where
// the player is leaving (Salah, Robertson, now Konaté) or whose future is open
// (Jones, Mac Allister). (Refreshed Mon Jun 15 — window open, Liverpool's
// opening bid lodged for Leipzig's Diomandé, Leipzig holding ~€130m, Barcola
// the later-window fallback; Jones edging to Inter near €25m.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · snubs Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone (free to Spurs, done) · Kerkez inherits
  LCB: "High",   // Van Dijk · captain · contracted to 2027
  RCB: "Low",    // Konaté · Madrid move sealed · awaiting unveiling · Ordóñez heads the list
  RB:  "Low",    // Jones · Inter push fresh meeting near €25m
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "Medium", // Szoboszlai · mainstay, extension still pending
  LAM: "Medium", // Wirtz · injury-hit debut season · 'untouchable' per club
  CAM: "Low",    // Mac Allister · still between the two Madrids
  RAM: "Low",    // Salah departing (Egypt captain) · Barcola/Diomandé the winger leads
  ST:  "Medium", // Isak · £100m striker · injury-wrecked first season
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains the season-closing pick for each slot of the 4-2-3-1. The 2025-26
// season is complete; these read as a retrospective on the first-choice XI
// rather than a prediction for a coming fixture. (Partially refreshed Sun
// Jun 14 — RAM/RB rotated; RCB/CAM Tue Jun 9; remaining slots Tue Jun 2.)
export const SLOT_RATIONALE = {
  GK:  "Tue Jun 2 — Alisson is now widely expected to remain. Juventus had agreed personal terms near €5m a year, but the Italians missing out on Champions League football drained the move of momentum, and the Brazilian was never the one pushing it. Mamardashvili waits, likeliest to go out on loan.",
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Tue Jun 2 — Van Dijk closes a hard campaign as captain with his standards intact, named in Koeman's World Cup squad and contracted to June 2027 — the one fixed point as the back line is rebuilt around him, and the senior leader of a suddenly thin centre-back group.",
  RCB: "Tue Jun 9 — the succession finally has names: with Konaté's free move to Madrid sealed (the extension collapsed over wage and agent-fee demands, not football), Hughes and Iraola have drawn up a four-man shortlist, Sporting's left-footed Gonçalo Inácio (~£52m clause) the marquee fit, with Tottenham's Vuskovic, Forest's Murillo and Napoli's Beukema alongside and Club Brugge's Ordóñez (~£40m) the standing bid. Jacquet is the in-house cover until one lands.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Tue Jun 2 — Szoboszlai closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Tue Jun 9 — the Mac Allister question has not eased: Real Madrid and Atlético both remain linked, no new-contract talks open, the midfielder into the final two years of his deal. His father Carlos again denies a formal approach while allowing he views La Liga warmly; Football365 keeps Liverpool's internal sale valuation near €120m.",
  RAM: "Mon Jun 15 — the winger search is live but not won: with the window open, Liverpool's opening bid sits with Leipzig for Yan Diomandé, the 19-year-old rated a 'top priority' and promised the right flank, but Leipzig do not want to sell below ~€130m, there is no release clause on a deal to 2030, and PSG and City stay in the chase. Bradley Barcola is the later-window fallback. The incumbent, Salah, plays on as Egypt's captain, a free agent on June 30 whose market now tilts to Turkey ahead of the Saudi money, an Inter Miami reunion and Juventus.",
  RB:  "Mon Jun 15 — the slot's exit grinds on: Inter and Liverpool edge toward a ~€25m deal for Jones with a sell-on clause and a fresh meeting lined up to bridge the gap, while talks have been held over Leipzig right-back Lutsharel Geertruida (~£26m), the natural specialist cover for a position where Bradley's rehab is still indoors and Frimpong's first season never settled.",
  ST:  "Tue Jun 2 — Alexander Isak ends an injury-wrecked debut season — a string of setbacks limited the £100m striker to a handful of starts and never let Slot's intended front three settle. A full summer to reset before 2026-27.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · likeliest out on loan now Alisson is set to stay" }, { playerId: 27, reason: "Woodman · third-choice cover" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the first-choice left-back going forward now Robertson has left" }],
  LCB: [{ playerId: 5, reason: "Gomez · can shuffle infield to centre-back in extremis" }],
  RCB: [{ playerId: 11, reason: "Jacquet · in line to inherit the slot with Konaté agreeing a Real Madrid move" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the natural first-choice right-back once fully fit" }, { playerId: 5, reason: "Gomez · the other right-back cover option" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · a wide-left option · has handed in a transfer request" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · can push forward into the No. 10 with another midfielder in the pivot" }, { playerId: 16, reason: "Curtis Jones · alternative No. 10 if not used at right-back" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · teenage wide option · part of the post-Salah picture" }, { playerId: 26, reason: "Chiesa · rotation winger · summer exit likely" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Mon Jun 15 (window-open refresh) — the window opens today, but the XI is still the side that closed 2025-26 after the May 24 1-1 with Brentford, held as the baseline while Andoni Iraola's rebuild trades around it. Confidence stays Low and will until bodies arrive: Liverpool's opening bid for Leipzig's Yan Diomandé sits against a club holding near €130m, the right flank still a vacancy in waiting, while the centre-back search has narrowed to a four-man shortlist (Vuskovic, Beukema, Inácio, Murillo) after Konaté's free exit. Curtis Jones edges toward Inter near €25m. Eight current Reds are at the World Cup, where on Sunday Van Dijk and Summerville scored in the Netherlands' 2-2 with Endo's Japan and Wirtz assisted in Germany's 7-1 rout of Curaçao; reintegration will be staggered. Next fixture: pre-season vs Sunderland in Nashville, July 25, the first of five friendlies ending with Monaco and Como at Anfield.",
  pundit_sources: ["Sky Sports", "ESPN", "Premier League", "This Is Anfield", "Empire of the Kop", "Anfield Watch", "Yahoo Sports", "TeamTalk", "Football365", "Liverpool.com", "The National", "Goal", "FIFA", "Fabrizio Romano"],
  agreement_rate: 0.63,
  generated_at: "2026-06-15T09:10:00Z",
};
