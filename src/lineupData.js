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
    // IDs from playerData.js — Slot's likely XI for Crystal Palace (H), Apr 25.
    // Actual GK will be Woodman (full PL debut vs his boyhood club); id 2 is the
    // closest-cover placeholder slot because Mama is out ~3 wks and Alisson is
    // 'late fitness test' but more likely returns at Old Trafford on May 3.
    // Updated Apr 25 (matchday): TIA & Sports Mole predict natural FBs RECALLED
    // (Kerkez/Frimpong) and Mac Allister back in midfield. Slot's 'big striker
    // decision' has TIA tipping Gakpo at ST as Isak's minutes are managed.
    defaultXI: {
      GK: 2,    // Woodman IRL (full PL debut vs boyhood Palace) · id 2 placeholder · Mama ~3w, Ali May 3 target
      LB: 7,    // Kerkez (TIA/Sports Mole predict LB recall over Robertson)
      LCB: 3,   // Van Dijk (100' winner vs Everton)
      RCB: 4,   // Konaté (Romano: new deal nears completion)
      RB: 9,    // Frimpong (TIA/Sports Mole predict RB recall — natural fit at home)
      LCM: 14,  // Gravenberch (derby double-pivot anchor)
      CM: 13,   // Mac Allister (TIA Apr 24 predicted XI: returns to central midfield)
      RCM: 15,  // Szoboszlai (assisted Van Dijk derby winner)
      LW: 18,   // Wirtz (TIA Apr 24 predicted XI: LAM/LW)
      ST: 22,   // Gakpo (TIA Apr 24 predicted XI tips him at ST · Isak on managed minutes)
      RW: 21,   // Salah (equalled Gerrard's PL derby record · 'back to normal' per Slot)
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
    // Slot won the Hill Dickinson Derby 2-1 in this 4-2-3-1 (Apr 19). Palace-day
    // predicted XI per This Is Anfield + Sports Mole (Apr 24) RECALLS natural FBs,
    // restores Mac Allister to a deeper #10 spot and tips Gakpo at ST.
    defaultXI: {
      GK: 2,    // Woodman IRL (full PL debut vs boyhood Palace) · id 2 placeholder · Mama ~3w, Ali May 3 target
      LB: 7,    // Kerkez (TIA/Sports Mole predict LB recall over Robertson)
      LCB: 3,   // Van Dijk (100' winner)
      RCB: 4,   // Konaté (Romano: new deal nears completion)
      RB: 9,    // Frimpong (TIA/Sports Mole predict RB recall over Jones-RB experiment)
      LDM: 14,  // Gravenberch (derby double-pivot anchor)
      RDM: 15,  // Szoboszlai (corner-delivery assist for VVD winner)
      LAM: 18,  // Wirtz (LAM per TIA predicted XI)
      CAM: 13,  // Mac Allister (TIA Apr 24 predicted XI: central #10 return)
      RAM: 21,  // Salah ('back to normal' per Slot · final LFC weeks)
      ST: 22,   // Gakpo (TIA Apr 24 predicted XI: 'big striker decision' tips Cody · Isak managed)
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
    defaultXI: {
      GK: 2,    // Woodman IRL (both senior starters out) — id 2 placeholder
      LCB: 6,   // Robertson tucking in
      CCB: 3,   // Van Dijk (captain, derby match-winner)
      RCB: 4,   // Konaté (new deal near)
      LWB: 7,   // Kerkez as left wing-back
      LCM: 14,  // Gravenberch
      RCM: 15,  // Szoboszlai
      RWB: 9,   // Frimpong as right wing-back
      LW: 18,   // Wirtz (or Gakpo — Wirtz favoured wide left after derby start)
      ST: 23,   // Isak (3-4-3 likelier to feature both Isak + Gakpo together)
      RW: 21,   // Salah
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-04-25 matchday.
export const PLAYER_EVIDENCE = {
  1:  "Late fitness test · Man Utd May 3 likelier",  // Alisson
  2:  "Knee wound · ~3 wks out per LFC.com",         // Mamardashvili
  3:  "Captain · 100' header won the derby",         // Van Dijk
  4:  "Romano: new deal 'nears completion'",         // Konaté
  5:  "Back in training · available, likely bench",  // Gomez
  6:  "'Robbo Out' (Sports Mole) vs Palace XI",      // Robertson
  7:  "TIA/Sports Mole predict LB recall today",     // Kerkez
  8:  "Knee surgery · out for season",               // Bradley
  9:  "TIA predict RB recall over Jones-RB",         // Frimpong
  10: "Torn ACL · out for season",                   // Leoni
  11: "Deputy CB · Form 6.6",                        // Jacquet
  12: "Academy depth · 2 senior apps",               // Ndukwe
  13: "TIA Apr 24 XI: central #10 return today",     // Mac Allister
  14: "Double-pivot anchor · form 7.5",              // Gravenberch
  15: "Corner assist for VVD winner · form 7.6",     // Szoboszlai
  16: "Villa/Spurs interest · 'considering exit'",   // Jones
  17: "Ankle surgery · out for season",              // Endo
  18: "TIA Apr 24 XI: LAM today vs Palace",          // Wirtz
  19: "Hamstring · yet to play this season",         // Bajcetic
  20: "Academy prospect · 5 senior apps",            // Nyoni
  21: "Slot: 'back to normal' · final LFC weeks",    // Salah
  22: "TIA Apr 24 XI: tipped at ST today",           // Gakpo
  23: "Managed minutes · 'big striker decision'",    // Isak
  24: "Ruptured Achilles · out 9-12 months",         // Ekitike
  25: "Bench rotation · youngest PL Anfield scorer", // Ngumoha
  26: "Rotation winger · form 6.0 · likely exit",    // Chiesa
};

// Default formation when entering the view — matched Slot's derby-winning shape
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1).
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Woodman locked in — Mama ~3w, Ali 'late fitness test' but Man Utd May 3 target
  LB:  "Medium", // TIA/Sports Mole Apr 24 predict Kerkez recall over Robertson's derby 90'
  LCB: "High",   // Van Dijk captain & derby match-winner
  RCB: "High",   // Konaté nailed on · Romano: deal nears completion
  RB:  "Medium", // TIA/Sports Mole Apr 24 predict Frimpong recall over Jones-RB
  LDM: "High",   // Gravenberch double-pivot anchor
  RDM: "High",   // Szoboszlai · derby corner assist · TIA tip he stays in pivot
  LAM: "High",   // Wirtz as the LAM per TIA Apr 24 XI
  CAM: "Medium", // Mac Allister return after derby bench (TIA prediction)
  RAM: "High",   // Salah · 'back to normal' per Slot · final LFC weeks
  ST:  "Medium", // 'Big striker decision' — TIA tip Gakpo, but Isak started derby
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
export const SLOT_RATIONALE = {
  GK:  "Woodman makes full PL debut vs boyhood Palace · Slot Apr 24: Alisson 'late fitness test' but more likely Man Utd May 3 return · Mama out ~3 wks (LFC.com)",
  LB:  "TIA/Sports Mole Apr 24 XI: Kerkez recalled at home for natural shape · Robertson 'out' headline after his derby 90'",
  LCB: "Captain · 100' header won the derby 2-1 · 7.4 form",
  RCB: "Romano: new deal 'nears completion' (Apr 20) · BBC: 'we are close to an agreement' · Konaté lock-in",
  RB:  "TIA/Sports Mole Apr 24 XI: Frimpong recalled · home shape favours natural FBs over derby's inverted-Jones experiment",
  LDM: "Derby double-pivot · progressive passer · form 7.5",
  RDM: "Szoboszlai stays in the pivot per TIA Apr 24 XI · corner assist for VVD winner · form 7.6",
  LAM: "Wirtz LAM per TIA Apr 24 predicted XI · #10 form continues vs Palace",
  CAM: "Mac Allister return after derby bench (TIA Apr 24 prediction) · controls midfield tempo at Anfield",
  RAM: "Slot Apr 24: Salah 'back to normal' · equalled Gerrard's 9 PL derby goals · final LFC weeks",
  ST:  "TIA Apr 24 'big striker decision' tips Gakpo · Isak's minutes still managed ahead of Sweden's WC summer",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-2-3-1.
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Slot Apr 24: 'late fitness test' for Alisson — Man Utd (A) May 3 likelier" }],
  LB:  [{ playerId: 6, reason: "Robertson kept derby spot · still live for selection" }],
  LCB: [{ playerId: 5, reason: "Gomez back in training · cover option after PSG-cameo lay-off" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB with Konaté/VVD nailed on" }],
  RB:  [{ playerId: 16, reason: "Jones inverted-RB if Slot reverts to derby shape (8.4 rating)" }],
  LDM: [{ playerId: 16, reason: "Jones can shuttle to LDM in a 4-2-3-1" }],
  RDM: [{ playerId: 13, reason: "Mac Allister can drop to RDM if Szoboszlai pushed forward" }],
  LAM: [{ playerId: 22, reason: "Gakpo · derby assist + 7.9 rating · could shift wide if Isak starts" }, { playerId: 25, reason: "Ngumoha · youngest PL Anfield scorer" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai pushed to CAM if Slot retains derby shape" }],
  RAM: [{ playerId: 26, reason: "Chiesa rotation option · likely summer exit" }],
  ST:  [{ playerId: 23, reason: "Isak started derby (45 min) · Slot's call on managed minutes" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "Apr 25 matchday: Slot's pre-Palace presser confirmed Woodman starts (full PL debut vs his boyhood club), Salah is 'back to normal,' and Gomez is available — Alisson a 'late fitness test' but Man Utd May 3 is the realistic return. TIA & Sports Mole Apr 24 predicted XI: natural FBs recalled (Kerkez/Frimpong), Mac Allister back at CAM, Wirtz LAM, Szoboszlai stays in pivot, and the 'big striker decision' tips Gakpo at ST as Isak's minutes are managed. 7 players still injured. Confidence Medium because the ST and CAM calls are coin-flips.",
  pundit_sources: ["This Is Anfield", "Sports Mole", "Liverpool.com", "Liverpool FC", "lfcglobe", "Tribuna"],
  agreement_rate: 0.70,
  generated_at: "2026-04-25T09:00:00Z",
};
