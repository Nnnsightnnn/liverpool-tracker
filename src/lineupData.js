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
    // backup look — Slot favoured 4-2-3-1. Refreshed Sun Jun 21: Munoz is in
    // (Spain winger from Osasuna, €40m clause); Ornstein has Liverpool 'firmly
    // in the driving seat' for Diomandé with a €115m second bid loading; Salah's
    // Fenerbahce move framed as settled before the Istanbul vote; Jones has
    // agreed Inter terms.
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
    // 25). Refreshed Sun Jun 21: Munoz is in (Spain winger from Osasuna, €40m
    // clause, hijacked from Newcastle); Ornstein has Liverpool 'firmly in the
    // driving seat' for Diomandé with a €115m second bid loading; Salah's
    // Fenerbahce move framed as settled before the Istanbul vote; Jones has
    // agreed Inter terms; Inácio still the cleanest CB fit.
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
// Hand-curated from RESULTS array + injuryNote context as of 2026-06-21
// (Sun, post-season: Ornstein has Liverpool 'firmly in the driving seat' for
// Diomandé with a €115m second bid loading; Salah's Fenerbahce move is framed
// as agreed before the Istanbul vote; Jones has agreed Inter terms; and in
// Houston on Saturday Gakpo scored twice as Van Dijk's NL routed Isak's Sweden
// 5-1, with Endo home injured and Szoboszlai absent from the finals.)
export const PLAYER_EVIDENCE = {
  1:  "Brazil's No. 1 · staying at Anfield",   // Alisson
  2:  "Loan likely now Alisson stays",         // Mamardashvili
  3:  "Led NL's 5-1 of Sweden · wants deal",   // Van Dijk
  4:  "Gone to Real Madrid on a free",         // Konaté
  5:  "Now tilting toward staying",            // Gomez
  6:  "Gone to Spurs on a free",               // Robertson
  7:  "Tough debut · now first-pick LB",       // Kerkez
  8:  "Knee · out until next season",          // Bradley
  9:  "Axed from NL World Cup squad",          // Frimpong
  10: "Torn ACL · out into 2026-27",           // Leoni
  11: "Deputy CB · behind new CB target",      // Jacquet
  12: "Academy depth · 2 senior apps",         // Ndukwe
  13: "Camp denies exit talk · ~€120m tag",    // Mac Allister
  14: "Ran NL's 5-1 of Sweden from deep",      // Gravenberch
  15: "Left out of Hungary's WC squad",        // Szoboszlai
  16: "Agreed Inter terms · clubs apart on fee",// Jones
  17: "Out of the WC injured · Japan",         // Endo
  18: "£115m playmaker · Germany at the WC",   // Wirtz
  19: "Hamstring · missed all season",         // Bajcetic
  20: "Academy prospect · 5 senior apps",      // Nyoni
  21: "Fenerbahce framework · free Jun 30",    // Salah
  22: "Scored twice in NL's 5-1 of Sweden",    // Gakpo
  23: "Sweden routed 5-1 by NL · 1 assist",    // Isak
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
// (Jones, Mac Allister). (Refreshed Sun Jun 21: Ornstein has Liverpool 'firmly in
// the driving seat' for Diomandé with a €115m second bid loading; Salah's Fenerbahce
// move framed as settled before the Istanbul vote; Jones has agreed Inter terms.)
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
  RAM: "Low",    // Salah's exit firms (Fenerbahce) · Diomandé €115m bid loading, LFC in driving seat
  ST:  "Medium", // Isak · £100m striker · injury-wrecked first season
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains the season-closing pick for each slot of the 4-2-3-1. The 2025-26
// season is complete; these read as a retrospective on the first-choice XI
// rather than a prediction for a coming fixture. (Partially refreshed Wed
// Jun 17 — RAM/RB/CAM rotated; RCB Tue Jun 9; remaining slots Tue Jun 2.)
export const SLOT_RATIONALE = {
  GK:  "Tue Jun 2 — Alisson is now widely expected to remain. Juventus had agreed personal terms near €5m a year, but the Italians missing out on Champions League football drained the move of momentum, and the Brazilian was never the one pushing it. Mamardashvili waits, likeliest to go out on loan.",
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Tue Jun 2 — Van Dijk closes a hard campaign as captain with his standards intact, named in Koeman's World Cup squad and contracted to June 2027 — the one fixed point as the back line is rebuilt around him, and the senior leader of a suddenly thin centre-back group.",
  RCB: "Tue Jun 9 — the succession finally has names: with Konaté's free move to Madrid sealed (the extension collapsed over wage and agent-fee demands, not football), Hughes and Iraola have drawn up a four-man shortlist, Sporting's left-footed Gonçalo Inácio (~£52m clause) the marquee fit, with Tottenham's Vuskovic, Forest's Murillo and Napoli's Beukema alongside and Club Brugge's Ordóñez (~£40m) the standing bid. Jacquet is the in-house cover until one lands.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Tue Jun 2 — Szoboszlai closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Wed Jun 17 — the denial gets louder: Mac Allister's father and agent Carlos has again branded the exit talk 'false,' insisting no approaches were declined because none were made, even as Liverpool stay quietly open to a sale near €120m if funds are needed. Real Madrid hold the warmest interest in a midfielder with two years left and no extension talks open, a fork pointed against Gravenberch's fresh terms.",
  RAM: "Sun Jun 21 — the marquee chase has tipped Liverpool's way. With Munoz already in from Osasuna to cover the wide areas, the specialist right-wing brief is Diomandé: Ornstein calls Liverpool 'firmly in the driving seat,' a second bid near €115m loading after the €100m rejection, personal terms (~£180k/week) no obstacle and PSG drifting behind. The incumbent, Salah, a free agent on June 30, edges nearer the door, his Fenerbahce switch framed as settled before the Istanbul vote, the signature saved for after the World Cup.",
  RB:  "Sun Jun 21 — the slot's exit has its player half done: Jones has agreed personal terms with Inter on a five-year deal to 2031, leaving only a fee gap, the Italians at ~€25m plus a sell-on against Liverpool's ~€30m ask, a fresh meeting set for next week. Bournemouth's Alex Scott is lined up as the replacement, while Leipzig right-back Lutsharel Geertruida (~£26m) remains specialist cover for a position where Bradley is out until next season and Frimpong's first year never settled.",
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
  reason: "Sun Jun 21 — the XI is still the side that closed 2025-26 after the May 24 1-1 with Brentford, held as the baseline while Andoni Iraola's rebuild trades around it. The first body has already landed (Spain winger Victor Munoz, a €40m Osasuna hijack of Newcastle), and now the marquee chase has tipped Liverpool's way: David Ornstein has the Reds 'firmly in the driving seat' for Diomandé, a second bid near €115m loading after the €100m rejection, personal terms (~£180k/week) no obstacle and PSG drifting behind. Confidence stays Low until more bodies arrive and the World Cup contingent returns. On the way out, Curtis Jones has agreed personal terms with Inter (clubs still apart on a ~€25m-plus-sell-on fee) and Salah's Fenerbahce move is framed as settled before the Istanbul vote, the signature saved for after the tournament. The squad is scattered through the finals: in Houston on Saturday Gakpo scored twice and Summerville once as Van Dijk's Netherlands routed Isak's Sweden 5-1, with Endo home injured and Szoboszlai absent from the squad, so reintegration will be staggered. The opener is a daunting trip to Newcastle on August 23. Next fixture: pre-season vs Sunderland in Nashville, July 25.",
  pundit_sources: ["David Ornstein", "The Athletic", "Fabrizio Romano", "This Is Anfield", "Sky Sports", "ESPN", "Football365", "TeamTalk", "Liverpool.com", "Read Liverpool", "GiveMeSport"],
  agreement_rate: 0.61,
  generated_at: "2026-06-21T08:30:00Z",
};
