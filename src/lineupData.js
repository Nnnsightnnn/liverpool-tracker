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
    // finale on Sun May 24 (matchday). Top-five (and the Champions League
    // place) is all but sealed — Opta near-certain, a single point confirms
    // it. This is a farewell occasion: Andy Robertson starts his Anfield
    // send-off at LB ahead of the fit Kerkez, Salah starts in front of the
    // Kop, Alisson is back from injury. Curtis Jones deputises at RB with
    // Frimpong a doubt. 4-3-3 is a backup look — Slot has favoured 4-2-3-1.
    defaultXI: {
      GK: 1,    // Alisson (back from injury · farewell start tipped)
      LB: 6,    // Robertson (Anfield FAREWELL start at LB)
      LCB: 3,   // Van Dijk (captain · brace at Villa Park)
      RCB: 4,   // Konaté (locked in alongside VVD)
      RB: 16,   // Jones (makeshift RB · Frimpong a doubt)
      LCM: 13,  // Mac Allister (90 mins Villa · midfield three)
      CM: 14,   // Gravenberch (control of midfield · most reliable MID)
      RCM: 15,  // Szoboszlai (engine · assist for VVD 52')
      LW: 18,   // Wirtz (back from illness · front-line option)
      ST: 23,   // Isak (back from a knock · 'tipped to start' up front)
      RW: 21,   // Salah (ANFIELD FAREWELL start tipped)
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
    // PREDICTED 4-2-3-1 for the Brentford home finale on Sun May 24
    // (matchday) — the default shape, and the one matchday predicted XIs
    // (Yahoo Sports, The Hard Tackle, Liverpool.com) have converged on.
    // Top-five (and the Champions League place) is all but sealed — Opta
    // near-certain, a single point confirms it. This is a farewell
    // occasion: Andy Robertson STARTS his Anfield send-off at left-back
    // ahead of the fit Kerkez, Salah starts in front of the Kop. Alisson
    // and Isak are back after training all week; Florian Wirtz has shaken
    // off illness and comes back in wide-left, pushing Szoboszlai into the
    // double pivot and Mac Allister into the No. 10 role. Curtis Jones
    // deputises at right-back with Jeremie Frimpong a doubt.
    defaultXI: {
      GK: 1,    // Alisson (back from injury · farewell start tipped)
      LB: 6,    // Robertson (Anfield FAREWELL start expected at LB)
      LCB: 3,   // Van Dijk (captain · scored 2 vs Villa)
      RCB: 4,   // Konaté (locked in alongside VVD)
      RB: 16,   // Jones (makeshift RB · Frimpong a doubt)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 15,  // Szoboszlai (drops into the pivot with Wirtz back)
      LAM: 18,  // Wirtz (over illness · returns wide-left)
      CAM: 13,  // Mac Allister (tipped for the No. 10 role)
      RAM: 21,  // Salah (Anfield farewell start expected)
      ST: 23,   // Isak (back from a knock · 'tipped to start' up front)
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
    // Hypothetical 3-4-3 alternative for the Brentford home finale on Sun
    // May 24. Slot is unlikely to deploy a three at the back for a home
    // farewell occasion, but if he wants extra defensive cover behind a
    // Salah-led front three this is the shape that fits: VVD/Konaté/Gomez
    // at the back, Robertson (farewell start) and Jones as wing-backs with
    // Frimpong a doubt, Gravenberch + Mac Allister in midfield,
    // Gakpo-Isak-Salah up top. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (back from injury · farewell start tipped)
      LCB: 5,   // Gomez (slots into the back three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 4,   // Konaté (locked in alongside VVD)
      LWB: 6,   // Robertson (farewell start · slides up as LWB)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 16,  // Jones (wing-back cover · Frimpong a doubt)
      LW: 22,   // Gakpo (LW in the three-man attack)
      ST: 23,   // Isak (No. 9 if fit · 'tipped to start')
      RW: 21,   // Salah (Anfield farewell start expected)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-24
// (Sun, matchday: Liverpool host Brentford in the season finale. Alisson,
// Isak and Wirtz are all back in contention after training through the week;
// Curtis Jones is tipped to deputise at right-back with Frimpong a doubt;
// Salah and Robertson play their Anfield farewells).
export const PLAYER_EVIDENCE = {
  1:  "Back from injury · farewell start tipped", // Alisson
  2:  "Bench as Alisson returns · Form 6.2",      // Mamardashvili
  3:  "Captain · brace at Villa · Form 7.4",      // Van Dijk
  4:  "Starts at RCB · contract stalemate",       // Konaté
  5:  "Defensive depth · bench role · 5.9",       // Gomez
  6:  "Anfield FAREWELL start · 378th & last",    // Robertson
  7:  "Bench for Robbo farewell · Form 6.8",      // Kerkez
  8:  "Knee surgery · out for season",            // Bradley
  9:  "Doubt · muscular knock · late test",       // Frimpong
  10: "Torn ACL · out for season",                // Leoni
  11: "Deputy centre-back · cover only",          // Jacquet
  12: "Academy depth · 2 senior apps",            // Ndukwe
  13: "Tipped at No.10 · Form 6.7",               // Mac Allister
  14: "Double-pivot anchor · Form 7.2",           // Gravenberch
  15: "Drops into the pivot · Form 7.3",          // Szoboszlai
  16: "Makeshift RB · Inter keen · exit talk",    // Jones
  17: "Ankle surgery · out for season",           // Endo
  18: "Over illness · tipped to start LW",        // Wirtz
  19: "Hamstring · yet to play this season",      // Bajcetic
  20: "Academy prospect · 5 senior apps",         // Nyoni
  21: "Anfield FAREWELL · start tipped Sun",      // Salah
  22: "Bench as Wirtz & Isak return · 6.8",       // Gakpo
  23: "Tipped to start up front · Form 7.5",      // Isak
  24: "Ruptured Achilles · out 9-12 months",      // Ekitike
  25: "Bench role if Isak starts · Form 7.3",     // Ngumoha
  26: "Rotation winger · summer exit list",       // Chiesa
  27: "3rd-choice GK · Mamard ahead",             // Woodman
};

// Default formation when entering the view — projecting the Brentford home
// finale on Sun May 24 (matchday). Top-five (and the Champions League place)
// is all but sealed (Opta near-certain), so the match is a farewell +
// manager-vs-talisman tableau more than a survival fixture. Slot has favoured
// 4-2-3-1 of late, and matchday predicted XIs have converged on it: Salah and
// Robertson start their Anfield farewells, Alisson and Isak return, Wirtz is
// back from illness wide-left, and Jones deputises at RB with Frimpong a doubt.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1). Team news has firmed up into
// matchday, but the finale remains a farewell occasion with the Champions
// League place all but secured — sentiment selection and rotation are in
// play, Slot won't commit to Salah, and the RB slot is makeshift. (Refreshed
// Sun May 24, matchday.)
export const SLOT_CONFIDENCE = {
  GK:  "Medium", // Alisson back from injury · tipped to start · SI keeps Mamardashvili
  LB:  "High",   // Robertson · Anfield farewell start near-certain
  LCB: "High",   // Van Dijk · captain · scored 2 vs Villa
  RCB: "High",   // Konaté · locked in alongside VVD
  RB:  "Low",    // Jones a makeshift pick · Frimpong a doubt
  LDM: "High",   // Gravenberch · most reliable midfielder
  RDM: "Medium", // Szoboszlai · drops into the pivot with Wirtz back
  LAM: "Medium", // Wirtz · back from illness · returns wide-left
  CAM: "Medium", // Mac Allister · tipped for the No. 10 role
  RAM: "Medium", // Salah · farewell start tipped · Slot won't commit
  ST:  "Medium", // Isak · 'tipped to start' · hinges on a late fitness check
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
// Brentford home finale on Sun May 24 (matchday) is the projected fixture.
// Top-five (and the Champions League place) is all but secured — Opta has
// Liverpool a near-certainty. Slot's refusal to commit to starting Salah and
// the farewell backdrop add a manager-vs-talisman layer to selection.
export const SLOT_RATIONALE = {
  GK:  "Sun May 24 — Alisson is tipped to start his Anfield farewell after training all week; Liverpool.com says he 'should return between the sticks' having recovered from roughly three months out, and Slot's Friday update was positive. Sports Illustrated's more rotated XI keeps Mamardashvili, who conceded four at Villa Park — a genuine split.",
  LB:  "Sun May 24 — Andy Robertson STARTS his Anfield farewell at left-back for his 378th and final appearance, with every matchday predicted XI sending the Scot off as a starter. The fit Milos Kerkez, first-pick LB through the run-in, drops to the bench for the occasion.",
  LCB: "Sun May 24 — Van Dijk indisputable after his two headers in the 4-2 Villa Park defeat (52' equaliser, 90+ consolation). The captain anchors the back line for the finale and is under contract to June 2027.",
  RCB: "Sun May 24 — Konaté locks in alongside Van Dijk despite a 5/10 at Villa where set-piece tracking failed repeatedly. Contract talks remain a stalemate with Real Madrid in the background, but he starts the finale.",
  LDM: "Sun May 24 — Gravenberch continues as the most reliable midfielder Liverpool have, anchoring the double pivot at the base of the 4-2-3-1. Partners Szoboszlai with Mac Allister pushed ahead into the No. 10 role.",
  RDM: "Sun May 24 — Dominik Szoboszlai is projected to drop into the double pivot alongside Gravenberch now that Florian Wirtz is fit again and returns to the attacking line. Szoboszlai played 90 at Villa and assisted Van Dijk's equaliser.",
  LAM: "Sun May 24 — Florian Wirtz has shaken off the after-effects of the illness that limited him at Villa Park and features in the matchday predicted XIs, tipped to start wide-left in Slot's 4-2-3-1. Cody Gakpo drops to the bench.",
  CAM: "Sun May 24 — Alexis Mac Allister is tipped to play the No. 10 role for the finale after a full 90 at Villa Park, with Szoboszlai behind him in the pivot. Talks over a new contract have reportedly slowed, but he starts.",
  RAM: "Sun May 24 — Mohamed Salah's Anfield farewell start is the strong expectation, with the Kop mosaic and the club's tribute film rolling out, but Arne Slot has pointedly NOT committed to starting him after the Egyptian's social-media outburst. Most matchday pundit XIs still tip a send-off start.",
  RB:  "Sun May 24 — Curtis Jones is projected to start at right-back, a makeshift role floated across the matchday predicted XIs with Jeremie Frimpong a doubt (muscular knock, late fitness check). Joe Gomez is the other cover option; Sunday could be Jones's final Liverpool game amid Inter Milan interest.",
  ST:  "Sun May 24 — Alexander Isak trained through the week and is tipped to start up front for the finale after the minor groin/hip issue that ruled him out at Villa Park. He faces a late fitness check; if he isn't cleared, 17-year-old Rio Ngumoha leads the line.",
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
  RB:  [{ playerId: 5, reason: "Gomez · the other right-back cover option behind Jones" }, { playerId: 9, reason: "Frimpong · reclaims the slot if he passes a late fitness test on the muscular knock" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap depths with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Szoboszlai" }],
  LAM: [{ playerId: 22, reason: "Gakpo · started at Villa Park · drops to the bench if Wirtz starts wide-left" }, { playerId: 25, reason: "Ngumoha · teenage rotation option on the left" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · could push forward into the No. 10 with another midfielder in the pivot" }, { playerId: 16, reason: "Curtis Jones · alternative No. 10 if not used at right-back" }],
  RAM: [{ playerId: 26, reason: "Chiesa · possible Anfield farewell winger option" }, { playerId: 25, reason: "Ngumoha · teenage wide rotation option" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line at Villa · starts up top if Isak isn't cleared" }, { playerId: 22, reason: "Gakpo · false-9 option · used by Slot earlier and in SI's predicted XI" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "Sun May 24 (matchday refresh) — projected Liverpool XI for the Brentford home finale, the season's last match (4pm BST kick-off). Confidence is MEDIUM: matchday predicted XIs have converged on a 4-2-3-1 with Alisson, Isak and Wirtz all back in contention after training through the week, and Curtis Jones tipped to deputise at right-back for the doubtful Jeremie Frimpong. But this is a farewell occasion — the Champions League place is all but secured (Opta a near-certainty), Andy Robertson is set for an Anfield send-off start, and Arne Slot has pointedly NOT committed to starting Mohamed Salah, so sentiment selection and late fitness checks keep several slots open.",
  pundit_sources: ["Liverpool FC", "Liverpool.com", "This Is Anfield", "Irish Times", "Sky Sports", "ESPN", "Yahoo Sports", "The Hard Tackle", "Sports Mole", "Sports Illustrated", "beIN Sports", "Football365", "TeamTalk", "The Athletic", "Goal.com", "Opta Analyst", "Al Jazeera", "Washington Post"],
  agreement_rate: 0.6,
  generated_at: "2026-05-24T08:30:00Z",
};
