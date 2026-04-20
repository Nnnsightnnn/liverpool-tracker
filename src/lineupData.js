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
    // IDs from playerData.js — Slot's likely XI for Crystal Palace (H), Apr 25
    defaultXI: {
      GK: 2,    // Mamardashvili/Woodman (Alisson still out, Mamardashvili head wound Apr 19)
      LB: 6,    // Robertson (kept after starting the derby win)
      LCB: 3,   // Van Dijk (100' winner vs Everton)
      RCB: 4,   // Konaté
      RB: 16,   // Jones as inverted RB (stellar 8.4 rating vs Everton — Slot's new wrinkle)
      LCM: 14,  // Gravenberch
      CM: 13,   // Mac Allister (recalled at home after derby rotation)
      RCM: 15,  // Szoboszlai (assisted Van Dijk winner)
      LW: 22,   // Gakpo
      ST: 23,   // Isak
      RW: 21,   // Salah (equalled Gerrard's PL derby record)
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
    // The exact shape Slot used to win the Hill Dickinson Derby 2-1 (Apr 19)
    defaultXI: {
      GK: 2,    // Mamardashvili/Woodman (derby head wound)
      LB: 6,    // Robertson (derby starter over Kerkez)
      LCB: 3,   // Van Dijk (100' winner)
      RCB: 4,   // Konaté
      RB: 16,   // Jones as inverted RB (8.4 match rating vs Everton)
      LDM: 14,  // Gravenberch
      RDM: 15,  // Szoboszlai (corner-delivery assist for VVD winner)
      LAM: 22,  // Gakpo
      CAM: 18,  // Wirtz (derby #10 role)
      RAM: 21,  // Salah (equalled Gerrard's PL derby record)
      ST: 23,   // Isak
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
      GK: 2,    // Mamardashvili/Woodman
      LCB: 6,   // Robertson tucking in
      CCB: 3,   // Van Dijk (captain, derby match-winner)
      RCB: 4,   // Konaté
      LWB: 7,   // Kerkez as left wing-back
      LCM: 14,  // Gravenberch
      RCM: 15,  // Szoboszlai
      RWB: 9,   // Frimpong as right wing-back
      LW: 22,   // Gakpo
      ST: 23,   // Isak
      RW: 21,   // Salah
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-04-20 (post-derby).
export const PLAYER_EVIDENCE = {
  1:  "Targets Man Utd (A, May 2) — NOT Palace",    // Alisson
  2:  "Head wound 59' vs Everton · stretchered off", // Mamardashvili
  3:  "100' header won the derby · 7.8 rating",     // Van Dijk
  4:  "Full 100' in derby win · Form 7.2",          // Konaté
  5:  "Muscle injury (Apr 14) · Palace TBC",        // Gomez
  6:  "Started LB in derby win · kept over Kerkez", // Robertson
  7:  "Benched for derby · rotation LB option",     // Kerkez
  8:  "Knee surgery · out for season",              // Bradley
  9:  "Derby sub for Jones · RB rotation",          // Frimpong
  10: "Torn ACL · out for season",                  // Leoni
  11: "Deputy CB with Gomez out · Form 6.6",        // Jacquet
  12: "Academy depth · 2 senior apps",              // Ndukwe
  13: "Benched for derby · likely returns at home", // Mac Allister
  14: "Full derby shift · double pivot · 7.5 form", // Gravenberch
  15: "Corner assist for VVD winner · 7.6 form",    // Szoboszlai
  16: "Stellar 8.4 rating at inverted RB vs Everton", // Jones
  17: "Ankle surgery · out for season",             // Endo
  18: "Derby #10 · creator-in-chief · 7.3 form",    // Wirtz
  19: "Hamstring · yet to play this season",        // Bajcetic
  20: "Academy prospect · 5 senior apps",           // Nyoni
  21: "Equalled Gerrard's 9 PL derby goals (Apr 19)", // Salah
  22: "Started derby · kept LW ahead of Ngumoha",   // Gakpo
  23: "Full 90 in derby win · fully fit",           // Isak
  24: "Ruptured Achilles · out 9-12 months",        // Ekitike
  25: "Youngest PL Anfield scorer (Apr 11)",        // Ngumoha
  26: "Available · rotation winger",                // Chiesa
};

// Default formation when entering the view — matched Slot's derby-winning shape
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1).
export const SLOT_CONFIDENCE = {
  GK:  "Low",    // Mamardashvili stretchered off Apr 19 · Woodman likely starts
  LB:  "Medium", // Robertson kept derby spot but Kerkez still push
  LCB: "High",   // Van Dijk captain & derby match-winner
  RCB: "High",   // Konaté nailed on
  RB:  "Medium", // Jones inverted-RB gambit worked vs Everton
  LDM: "High",   // Gravenberch anchor
  RDM: "High",   // Szoboszlai (corner assist for VVD winner)
  LAM: "High",   // Gakpo
  CAM: "High",   // Wirtz as the #10 (derby shape)
  RAM: "High",   // Salah's final weeks
  ST:  "High",   // Isak full 90 vs Everton
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
export const SLOT_RATIONALE = {
  GK:  "Head wound vs Everton · Slot 'fears the worst' for next week",
  LB:  "Recalled for derby win · Slot trusted him over Kerkez",
  LCB: "Captain · 100' header won the derby 2-1",
  RCB: "Full 100' in derby win · every PL start this season",
  RB:  "Jones inverted RB · 8.4 rating vs Everton, highest on pitch",
  LDM: "Derby double-pivot · progressive passer",
  RDM: "Corner-delivery assist for VVD winner · form 7.6",
  LAM: "Derby starter · kept LW over Ngumoha",
  CAM: "The derby #10 role — creator-in-chief",
  RAM: "Equalled Gerrard's 9 PL derby goals · final LFC weeks",
  ST:  "Full 90 vs Everton · Ekitike long-term out · fully fit",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-2-3-1.
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson targets Man Utd (A) May 2, NOT Palace" }],
  LB:  [{ playerId: 7, reason: "Kerkez on the bench vs Everton · rotation push" }],
  LCB: [],
  RCB: [{ playerId: 11, reason: "Deputy CB with Gomez out" }],
  RB:  [{ playerId: 9, reason: "Frimpong derby sub · natural RB if Slot reverts" }],
  LDM: [{ playerId: 13, reason: "Mac Allister benched vs Everton · likely returns at home" }],
  RDM: [{ playerId: 13, reason: "Mac Allister can shuttle into any central role" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · youngest PL Anfield scorer" }, { playerId: 26, reason: "Chiesa rotation option" }],
  CAM: [{ playerId: 13, reason: "Mac Allister as a slightly deeper #10" }],
  RAM: [{ playerId: 26, reason: "Chiesa rotation option" }],
  ST:  [{ playerId: 22, reason: "Gakpo can play false 9 if Isak rests" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "10 of 11 started the Hill Dickinson Derby 2-1 win (Apr 19) · Mamardashvili head wound ('we fear the worst — for next week') pushes Woodman toward a PL debut start, Alisson targets Man Utd (May 2). Slot may reward derby winners at home; Mac Allister on call to return for a benched Kerkez or rotation midfielder.",
  pundit_sources: ["This Is Anfield", "Empire of the Kop", "Liverpool.com"],
  agreement_rate: 0.74,
  generated_at: "2026-04-20T09:00:00Z",
};
