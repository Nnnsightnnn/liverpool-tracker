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
    // prediction but a SNAPSHOT of the XI that closed the campaign, adjusted for
    // the June 30 free-agent exits (Kerkez, Jacquet, Ngumoha step in). 4-3-3 is the
    // backup look — Slot favoured 4-2-3-1. Refreshed Sat Jul 11: Salah's exit
    // narrows to Saudi Arabia or MLS with Europe all but ruled out; PSG's floor
    // for Barcola drops to £116m; the Wharton swap is live again with Elliott as
    // makeweight; Iraola's first press conference is 11am Monday July 13.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (natural RB · Jones close to a Forest exit)
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
    // The 2025-26 season is COMPLETE. This 4-2-3-1 — the shape Slot favoured
    // through the run-in — is shown as the first-choice XI Liverpool finished
    // the campaign with (adjusted for the June 30 exits), NOT as a prediction
    // for a coming fixture (the next match is a pre-season friendly on July
    // 25). Refreshed Sat Jul 11: Salah has all but ruled out Europe, a Saudi
    // deal in principle in place; PSG's Barcola floor falls to £116m as Arsenal
    // turn to Rogers; the Wharton swap revives with Elliott as makeweight;
    // Muñoz reaches the World Cup semis; Iraola faces the media 11am Monday.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (unveiled Jul 1 · steps in for Madrid-bound Konaté)
      RB: 9,    // Frimpong (natural RB · Jones close to a Forest exit)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (the season's heaviest-minutes midfielder)
      LAM: 18,  // Wirtz (wide-left · injury-hit debut season)
      CAM: 13,  // Mac Allister (No. 10 · contract talks stalled)
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
    // Hypothetical 3-4-3 alternative — a shape Slot rarely used in 2025-26.
    // Shown for completeness alongside the season-closing baseline: Gomez,
    // VVD and Jacquet across a back three, Kerkez and Jones as wing-backs,
    // Gravenberch and Mac Allister in midfield, a Gakpo-Isak-Ngumoha front
    // three. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the Brentford finale)
      LCB: 5,   // Gomez (slots into the back three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (unveiled Jul 1 · right of the back three)
      LWB: 7,   // Kerkez (LWB with Robertson gone to Spurs)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 9,   // Frimpong (natural RB · Jones close to a Forest exit)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 when fit)
      RW: 25,   // Ngumoha (the post-Salah slot until a winger signs)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-07-12
// (Sun: Michael Edwards resigns as FSG's chief executive of football and will
// not be replaced; Richard Hughes expected at Al-Hilal once the window shuts;
// Mac Allister heads Argentina past Switzerland 3-1 into an England semi-final;
// Forest reported to have agreed a deal for Curtis Jones; Palace price Wharton
// out of Anfield at £103m; Iraola's first press conference is 11am Monday.)
export const PLAYER_EVIDENCE = {
  1:  "Brazil's No. 1 · staying at Anfield",   // Alisson
  2:  "Weighing future · club prefer loan",    // Mamardashvili
  3:  "35 · Barnes says extend him",           // Van Dijk
  4:  "Madrid-bound · France meet Spain",     // Konaté
  5:  "Now tilting toward staying",            // Gomez
  6:  "Tottenham · left free June 30",          // Robertson
  7:  "First-pick LB · back day one",       // Kerkez
  8:  "Long-term knee · still indoors",    // Bradley
  9:  "Natural RB · in for the exiting Jones",   // Frimpong
  10: "ACL · nearing a comeback at last",       // Leoni
  11: "Training at the AXA · in for Konaté",      // Jacquet
  12: "Academy depth · 2 senior apps",         // Ndukwe
  13: "Headed Messi's corner · England next",   // Mac Allister
  14: "NED out on pens · back for tour",       // Gravenberch
  15: "No Hungary WC · walks in day one",        // Szoboszlai
  16: "Forest 'agree' deal · said to resist",    // Jones
  17: "In the building · not yet outdoors",  // Endo
  18: "Germany out · back for the tour",       // Wirtz
  19: "Outdoors at the AXA · lost year to reclaim", // Bajcetic
  20: "Academy prospect · 5 senior apps",      // Nyoni
  21: "Egypt out · Fenerbahce reopen Europe",  // Salah
  22: "NED exit · stays, Iraola's plans",      // Gakpo
  23: "Fit again · rejoins for the US tour",       // Isak
  24: "Ruptured Achilles · still indoors",   // Ekitike
  25: "Holds the RW slot · new deal prepared",           // Ngumoha
  26: "US tour first, then talks with Iraola", // Chiesa
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
// (Mac Allister). (Refreshed Sun Jul 12: Michael Edwards resigns as FSG's
// chief executive of football and will not be replaced, Richard Hughes expected
// at Al-Hilal after the window; Forest reported to have agreed a deal for Curtis
// Jones, so Frimpong takes RB; Palace price Wharton out at £103m; Salah's
// decision imminent with Fenerbahce reopening Europe; Iraola's first press
// conference is 11am Monday July 13.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · snubs Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone (free to Spurs, done) · Kerkez inherits
  LCB: "Medium", // Van Dijk · 35 · Barnes says keep him, Milan interest dismissed
  RCB: "Low",    // Konaté · Madrid move confirmed to 2030 · Inácio heads the list
  RB:  "Low",    // Jones reported agreed to Forest · Frimpong the only fit natural RB · Bradley still indoors
  LDM: "High",   // Gravenberch · the season's most reliable midfielder
  RDM: "Medium", // Szoboszlai · mainstay, extension still pending
  LAM: "Medium", // Wirtz · injury-hit debut season · 'untouchable' per club
  CAM: "Low",    // Mac Allister · still between the two Madrids · Camavinga eyed too
  RAM: "Low",    // Salah gone (decision imminent · Fenerbahce reopen Europe) · Barcola ~£116m, Minteh ~£80m, no winger signed yet
  ST:  "Medium", // Isak · £100m striker · injury-wrecked first season
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains the season-closing pick for each slot of the 4-2-3-1. The 2025-26
// season is complete; these read as a retrospective on the first-choice XI
// rather than a prediction for a coming fixture. (RAM and RB refreshed Sun Jul
// 12; LCB Fri Jul 10; CAM Wed Jun 17; RCB Tue Jun 9; rest Tue Jun 2.)
export const SLOT_RATIONALE = {
  GK:  "Tue Jun 2 — Alisson is now widely expected to remain. Juventus had agreed personal terms near €5m a year, but the Italians missing out on Champions League football drained the move of momentum, and the Brazilian was never the one pushing it. Mamardashvili waits, likeliest to go out on loan.",
  LB:  "Tue Jun 2 — with Andy Robertson's free transfer to De Zerbi's Tottenham now done, the Liverpool left-back slot is unambiguously Milos Kerkez's after a tough first season at £45m. Nine years of cover at the position have walked out the door in a single window.",
  LCB: "Fri Jul 10 — a fresh voice for the defence: John Barnes has urged Liverpool to extend Van Dijk beyond his 2027 deal even at 35, as the AC Milan interest driven by Ibrahimović, Fenerbahce lurking, keeps being knocked back at Anfield, no bid received and none expected to move him. The captain is central to Iraola's plans and the slot a thinning back line is being rebuilt around, Jacquet, cleared by his surgeon to rejoin group training, the in-house cover behind him.",
  RCB: "Tue Jun 9 — the succession finally has names: with Konaté's free move to Madrid sealed (the extension collapsed over wage and agent-fee demands, not football), Hughes and Iraola have drawn up a four-man shortlist, Sporting's left-footed Gonçalo Inácio (~£52m clause) the marquee fit, with Tottenham's Vuskovic, Forest's Murillo and Napoli's Beukema alongside and Club Brugge's Ordóñez (~£40m) the standing bid. Jacquet is the in-house cover until one lands.",
  LDM: "Tue Jun 2 — Gravenberch finished the season as the most consistent midfielder Liverpool had and is in the Dutch World Cup squad; the obvious building block at the base of the 4-2-3-1 going into 2026-27.",
  RDM: "Tue Jun 2 — Szoboszlai closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer.",
  LAM: "Tue Jun 2 — Florian Wirtz ends an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. The club is holding firm on keeping him; a clean pre-season is everything now.",
  CAM: "Wed Jun 17 — the denial gets louder: Mac Allister's father and agent Carlos has again branded the exit talk 'false,' insisting no approaches were declined because none were made, even as Liverpool stay quietly open to a sale near €120m if funds are needed. Real Madrid hold the warmest interest in a midfielder with two years left and no extension talks open, a fork pointed against Gravenberch's fresh terms.",
  RAM: "Sun Jul 12 — the slot's ghost gets his deadline, and a door back to Europe. Egypt's World Cup ended against the Argentina side Mac Allister has just carried into a semi-final, so Salah has nothing left to wait behind and the decision is called imminent; the continent he was reported to have ruled out a week ago is open again, with Fenerbahce able to match Gulf wages while still offering UEFA football. The replacement file holds its shape without him. Fabrizio Romano calls a Barcola exit a serious possibility at around £116m, the player having declined fresh PSG terms, though Paris insist he is not for sale; Arsenal, prioritising Rogers, have stepped back. Brighton hold Minteh nearer £80m. Ngumoha keeps the shirt until one of them lands, and the executives who were sourcing them have resigned.",

  RB:  "Sun Jul 12 — the slot changes hands by subtraction. Curtis Jones, who had been the emergency cover here, is now reported to have had a move to Nottingham Forest agreed at around £40m, Glasner spending the £116m Manchester City paid for Elliot Anderson; the English press has not corroborated it and Jones is said to resist the move, but he can no longer be the pick. Conor Bradley's long-term knee rehab is still indoors with no return date and Hugo Ekitike is alongside him, which leaves Jeremie Frimpong, fit and a natural right back, as the only real answer until the market provides one. The marquee search has not gone away: a bid near £80m for Barcelona's Jules Kounde, a right back raised as a centre-back, remains the reported ambition.",

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
  LAM: [{ playerId: 22, reason: "Gakpo · a wide-left option · exit now called unlikely" }, { playerId: 25, reason: "Ngumoha · breakout teenager · rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · can push forward into the No. 10 with another midfielder in the pivot" }, { playerId: 16, reason: "Curtis Jones · alternative No. 10 if not used at right-back" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · teenage wide option · part of the post-Salah picture" }, { playerId: 26, reason: "Chiesa · travelling on the US tour, then talks with Iraola" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line in Isak's absences late in the season" }, { playerId: 22, reason: "Gakpo · false-9 option used by Slot earlier in the year" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Sun Jul 12 — the shape waits on a squad that does not exist yet, and now on a boardroom that does not either. Michael Edwards has resigned as FSG's chief executive of football and will not be replaced, with Richard Hughes expected at Al-Hilal once the window shuts, so the men who were meant to finish this rebuild have both left before a senior session has been taken. Iraola gives his first press conference at 11am on Monday July 13, testing begins the day after, and the World Cup contingent will not be back until the American tour. The XI below stays the closing 2025-26 side adjusted for the free-agent exits (Kerkez for Robertson, Jacquet for Konate, Ngumoha in the Salah slot), with one change this week: Frimpong takes the right back slot from Curtis Jones, who is reported to have had a move to Nottingham Forest agreed. Confidence Low until the squad is whole. Next fixture: pre-season vs Sunderland in Nashville, July 25; the league opener is Newcastle away, August 23.",
  pundit_sources: ["Sky Sports", "ESPN", "The Athletic", "TeamTalk", "Football365", "Liverpool.com", "This Is Anfield", "Fabrizio Romano", "Anfield Watch"],
  agreement_rate: 0.54,
  generated_at: "2026-07-12T09:00:00Z",
};
