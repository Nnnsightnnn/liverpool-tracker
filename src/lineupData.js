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
    // IDs from playerData.js — PREDICTED 4-3-3 read for the Brentford home
    // finale on Sun May 24. Top-five (and the Champions League place) is all
    // but sealed — Opta near-certain, a single point confirms it. This is a
    // farewell occasion: Andy Robertson is tipped to start his Anfield send-off
    // at LB ahead of the fit Kerkez, Salah starts in front of the Kop, Alisson
    // is in line for a send-off, Isak back in if cleared at a late fitness
    // test. 4-3-3 is a backup look — Slot has favoured 4-2-3-1 of late.
    defaultXI: {
      GK: 1,    // Alisson (farewell start tipped · in Brazil's WC squad)
      LB: 6,    // Robertson (Anfield FAREWELL start expected at LB)
      LCB: 3,   // Van Dijk (captain · brace at Villa Park)
      RCB: 4,   // Konaté (locked in alongside VVD)
      RB: 9,    // Frimpong (doubt · late fitness test · kept as first-choice)
      LCM: 13,  // Mac Allister (90 mins Villa · double-pivot)
      CM: 14,   // Gravenberch (control of midfield · most reliable MID)
      RCM: 15,  // Szoboszlai (assist for VVD 52' · engine)
      LW: 22,   // Gakpo (kept slot at Villa Park)
      ST: 23,   // Isak ('likely to start' up front · late fitness test)
      RW: 21,   // Salah (ANFIELD FAREWELL start expected)
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
    // PREDICTED 4-2-3-1 for the Brentford home finale on Sun May 24 — the
    // default shape. Top-five (and the Champions League place) is all but
    // sealed — Opta near-certain, a single point confirms it. Slot has
    // favoured 4-2-3-1 in recent matches. This is a farewell occasion: Andy
    // Robertson is tipped to START his Anfield send-off at left-back ahead of
    // the fit Kerkez (Yahoo Sports, The 4th Official, This Is Anfield, SI),
    // Salah starts in front of the Kop. KEY CHANGE Sat May 23 — Florian Wirtz
    // is now doubtful with the after-effects of illness, so Szoboszlai is
    // projected to shift into the No. 10 role. The GK, RB and ST slots all
    // hinge on late fitness tests for Alisson, Frimpong and Isak.
    defaultXI: {
      GK: 1,    // Alisson (farewell start tipped · named in Brazil's WC squad)
      LB: 6,    // Robertson (Anfield FAREWELL start expected at LB)
      LCB: 3,   // Van Dijk (captain · scored 2 vs Villa)
      RCB: 4,   // Konaté (locked in alongside VVD)
      RB: 9,    // Frimpong (doubt · late fitness test · kept as first-choice)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 13,  // Mac Allister (double-pivot · 90 mins Villa)
      LAM: 22,  // Gakpo (LW · likely keeps slot)
      CAM: 15,  // Szoboszlai (shifts to No. 10 with Wirtz doubtful)
      RAM: 21,  // Salah (Anfield farewell start expected)
      ST: 23,   // Isak ('likely to start' up front · late fitness test)
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
    // Hypothetical 3-4-3 alternative for the Brentford home finale. Slot is
    // unlikely to deploy a three at the back for a home farewell occasion,
    // but if he wants extra defensive cover behind a Salah-led front three
    // this is the shape that fits: VVD/Konaté/Gomez at the back, Robertson
    // (farewell start) and Frimpong as wing-backs, Gravenberch + Mac Allister
    // in midfield, Gakpo-Isak-Salah up top. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (farewell start tipped)
      LCB: 5,   // Gomez (slots into the back three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 4,   // Konaté (locked in alongside VVD)
      LWB: 6,   // Robertson (farewell start · slides up as LWB)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 9,   // Frimpong (doubt · late fitness test · ideal wing-back)
      LW: 22,   // Gakpo (LW · likely keeps slot)
      ST: 23,   // Isak (No. 9 if fit · 'likely to start')
      RW: 21,   // Salah (Anfield farewell start expected)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-23
// (Sat, matchday eve: the club is closing in on the Reijnen coaching
// appointment — the clearest sign yet that Slot stays — while the unverified
// Football365/TeamTalk sack saga remains unconfirmed; Florian Wirtz is now
// doubtful with illness, and Alisson, Isak and Frimpong all face late fitness
// tests after training Friday).
export const PLAYER_EVIDENCE = {
  1:  "Farewell start tipped Sun · back fit",     // Alisson
  2:  "Deputy to Alisson · SI's pick if not",     // Mamardashvili
  3:  "Brace at Villa · captain · Form 7.4",      // Van Dijk
  4:  "Locked in at RCB · contract stalemate",    // Konaté
  5:  "RB cover for Frimpong · SI's pick",        // Gomez
  6:  "Farewell START tipped · 378th & final",    // Robertson
  7:  "Bench for Robbo farewell · Form 6.8",      // Kerkez
  8:  "Knee surgery · out for season",            // Bradley
  9:  "Doubt · late fitness test on knock",       // Frimpong
  10: "Torn ACL · out for season",                // Leoni
  11: "Deputy centre-back · cover only",          // Jacquet
  12: "Academy depth · 2 senior apps",            // Ndukwe
  13: "Double-pivot starter · Form 6.7",          // Mac Allister
  14: "Midfield anchor at Villa · Form 7.2",      // Gravenberch
  15: "Shifts to No.10 if Wirtz out · Form 7.3",  // Szoboszlai
  16: "Inter keen · likely summer exit",          // Jones
  17: "Ankle surgery · out for season",           // Endo
  18: "Doubtful · illness after-effects",         // Wirtz
  19: "Hamstring · yet to play this season",      // Bajcetic
  20: "Academy prospect · 5 senior apps",         // Nyoni
  21: "Anfield FAREWELL · start tipped Sun",      // Salah
  22: "LW starter · 90 mins at Villa · 6.8",      // Gakpo
  23: "'Likely to start' up front · Form 7.5",    // Isak
  24: "Ruptured Achilles · out 9-12 months",      // Ekitike
  25: "Bench role if Isak starts · Form 7.3",     // Ngumoha
  26: "Rotation winger · summer exit list",       // Chiesa
  27: "3rd-choice GK · Mamard ahead",             // Woodman
};

// Default formation when entering the view — projecting the Brentford home
// finale on Sun May 24. Top-five (and the Champions League place) is all but
// sealed (Opta near-certain) after the Bournemouth 1-1 Man City draw, so the
// match is a farewell + manager-vs-talisman tableau more than a survival
// fixture. Slot has favoured 4-2-3-1 of late; expect Salah and Robertson to
// start their Anfield farewells, Isak in if cleared, Szoboszlai shifting to
// No. 10 with Wirtz doubtful, Alisson and Frimpong hinging on late tests.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1). Confidence eases because the finale
// is a farewell occasion with the Champions League place all but secured —
// sentiment selection and rotation are in play, Wirtz is doubtful, and the
// GK/RB/ST slots all hinge on late fitness tests. (Refreshed Sat May 23.)
export const SLOT_CONFIDENCE = {
  GK:  "Medium", // Alisson farewell start tipped · SI keeps Mamardashvili in
  LB:  "Medium", // Robertson farewell start tipped · Kerkez could keep it
  LCB: "High",   // Van Dijk · captain · scored 2 vs Villa
  RCB: "High",   // Konaté · locked in alongside VVD
  RB:  "Low",    // Frimpong a doubt · pundits split between Gomez and Jones
  LDM: "High",   // Gravenberch · most reliable midfielder
  RDM: "High",   // Mac Allister · double-pivot
  LAM: "Medium", // Gakpo · LW likely · SI floats him at ST
  CAM: "Low",    // Wirtz doubtful · Szoboszlai projected to shift central
  RAM: "Medium", // Salah · farewell start tipped · Slot won't commit
  ST:  "Medium", // Isak 'likely to start' · hinges on a late fitness test
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
// Brentford home finale on Sun May 24 is the projected fixture. Top-five (and
// the Champions League place) is all but secured — Opta has Liverpool a
// near-certainty after the Bournemouth 1-1 Manchester City draw. Slot's refusal
// to commit to starting Salah and the Slot/Iraola backdrop — softened by the
// club closing in on the Reijnen coaching appointment — add a manager-vs-
// talisman layer to selection for the farewell.
export const SLOT_RATIONALE = {
  GK:  "Sat May 23 — Alisson is tipped to start his Anfield farewell after returning to full training; Liverpool.com says he 'will likely go straight back into the starting XI' if cleared, and Yahoo Sports / The 4th Official back him in. Sports Illustrated's XI keeps Mamardashvili, who conceded four at Villa Park — a genuine split decided by a late fitness check.",
  LB:  "Sat May 23 — Andy Robertson is tipped to START his Anfield farewell at left-back for his 378th and final appearance, with predicted XIs from Yahoo Sports, The 4th Official, This Is Anfield and Sports Illustrated sending the Scot off as a starter. The fit Milos Kerkez, first-pick LB through the run-in, is expected to drop to the bench.",
  LCB: "Sat May 23 — Van Dijk indisputable after his two headers in the 4-2 Villa Park defeat (52' equaliser, 90+ consolation). The captain anchors the back line for the finale and is expected to see out his current deal.",
  RCB: "Sat May 23 — Konaté locks in alongside Van Dijk despite a 5/10 at Villa where set-piece tracking failed repeatedly. Contract talks remain a stalemate with Real Madrid in the background, but he starts the finale.",
  LDM: "Sat May 23 — Gravenberch continues as the most reliable midfielder Liverpool have after anchoring the double-pivot at Villa Park. Partners Mac Allister at the base of the 4-2-3-1.",
  RDM: "Sat May 23 — Mac Allister completed 90 minutes at Villa and partners Gravenberch in the double-pivot. Talks over a new contract have reportedly slowed, with no resolution expected before the season ends.",
  LAM: "Sat May 23 — Gakpo expected to keep the left after 90 minutes at Villa Park, starting ahead of Rio Ngumoha and Federico Chiesa. Sports Illustrated's XI instead pushes the Dutchman to a false-9, a sign of how open Slot's front-line selection is.",
  CAM: "Sat May 23 — with Florian Wirtz doubtful from the after-effects of illness, Dominik Szoboszlai is projected to shift into the No. 10 role for the finale. If Wirtz is passed fit he comes straight back into the slot, as Sports Illustrated's XI assumes.",
  RAM: "Sat May 23 — Mohamed Salah's Anfield farewell start is the strong expectation, with the Kop mosaic and the 'Salah: Farewell to the King' film rolling out, but Arne Slot has pointedly NOT committed to starting him after the Egyptian's anti-Slot statement. Most pundit XIs (Yahoo Sports, The 4th Official) still tip a send-off start.",
  RB:  "Sat May 23 — Jeremie Frimpong is a doubt with a suspected muscular injury and faces a late fitness test; he is kept as the projected starter as the established first-choice when fit. If he isn't cleared, Joe Gomez — Sports Illustrated's pick 'to combat the speedy Kevin Schade' — or Curtis Jones as a makeshift option deputise.",
  ST:  "Sat May 23 — Alexander Isak trained on Friday and is 'likely to start up front' per Yahoo Sports's team news, after the minor groin/hip issue that ruled him out at Villa Park. He faces a late fitness test; if he isn't cleared, 17-year-old Rio Ngumoha leads the line again.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the projected shape for the Brentford home finale May 24).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · Sports Illustrated's predicted starter · keeps the shirt if Alisson isn't cleared" }, { playerId: 27, reason: "Woodman · third-choice cover" }],
  LB:  [{ playerId: 7, reason: "Kerkez · fit first-pick LB · starts if Slot opts against a Robertson send-off start" }],
  LCB: [{ playerId: 5, reason: "Gomez · can shuffle infield to centre-back in extremis" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB · live starter only if Konaté has a setback" }],
  RB:  [{ playerId: 5, reason: "Gomez · Sports Illustrated's pick to handle Kevin Schade if Frimpong fails his fitness test" }, { playerId: 16, reason: "Curtis Jones · floated as a makeshift right-back in some predicted XIs" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Mac Allister" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · in This Is Anfield's predicted XI on the left · teenage rotation option" }, { playerId: 26, reason: "Chiesa · senior winger option · possible Anfield farewell" }],
  CAM: [{ playerId: 18, reason: "Wirtz · reclaims the No. 10 if passed fit · Sports Illustrated still starts him" }, { playerId: 16, reason: "Curtis Jones · started the attacking three at Villa · alternative No. 10" }],
  RAM: [{ playerId: 16, reason: "Curtis Jones · started the attacking three at Villa · alternative wide option" }, { playerId: 26, reason: "Chiesa · possible Anfield farewell winger option" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line at Villa · starts up top if Isak isn't cleared" }, { playerId: 22, reason: "Gakpo · false-9 option · used by Slot earlier and in SI's predicted XI" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Sat May 23 (matchday-eve refresh) — projected Liverpool XI for the Brentford home finale on Sun May 24, the season's last match. Confidence is LOW: the Champions League place is all but secured (Opta a near-certainty), so this is a farewell occasion with sentiment selection and rotation in play, and pundit predicted XIs diverge sharply. Florian Wirtz is doubtful with the after-effects of illness, so Dominik Szoboszlai is projected to shift into the No. 10 role; the GK, RB and ST slots hinge on late fitness tests for Alisson, Frimpong and Isak, all of whom trained Friday. Arne Slot has still not committed to starting Mohamed Salah in his Anfield farewell, and the Slot/Iraola backdrop — softened by the club closing in on the Etienne Reijnen coaching appointment — adds further uncertainty.",
  pundit_sources: ["Liverpool FC", "Liverpool.com", "This Is Anfield", "Irish Times", "Sky Sports", "ESPN", "Football365", "TeamTalk", "The Athletic", "Yahoo Sports", "The 4th Official", "Sports Mole", "Sports Illustrated", "Yardbarker", "Caught Offside", "Anfield Watch", "Goal.com", "NBC Sports", "Opta Analyst", "Washington Post"],
  agreement_rate: 0.5,
  generated_at: "2026-05-23T10:00:00Z",
};
