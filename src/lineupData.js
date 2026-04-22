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
    // Actual GK will be Woodman (PL debut start); id 2 is the closest cover slot
    // because Mamardashvili & Alisson are both injured and Woodman isn't in PLAYERS.
    defaultXI: {
      GK: 2,    // Woodman IRL (PL debut start) · id 2 is placeholder: Mama knee 2-4w, Ali May 2/3
      LB: 6,    // Robertson (kept after starting the derby win)
      LCB: 3,   // Van Dijk (100' winner vs Everton)
      RCB: 4,   // Konaté (new deal near, 'big chance I stay')
      RB: 16,   // Jones as inverted RB (stellar 8.4 rating vs Everton — Slot's new wrinkle)
      LCM: 14,  // Gravenberch
      CM: 13,   // Mac Allister (recalled at home after derby rotation)
      RCM: 15,  // Szoboszlai (assisted Van Dijk winner)
      LW: 22,   // Gakpo
      ST: 23,   // Isak (subbed ~HT vs Everton, on track to start again)
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
    // The exact shape Slot used to win the Hill Dickinson Derby 2-1 (Apr 19) — most likely vs Palace too
    defaultXI: {
      GK: 2,    // Woodman IRL (Mama knee 2-4w, Ali May 2/3) — id 2 as placeholder
      LB: 6,    // Robertson (derby starter over Kerkez)
      LCB: 3,   // Van Dijk (100' winner)
      RCB: 4,   // Konaté (new deal close)
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
      GK: 2,    // Woodman IRL (both starters injured) — id 2 as placeholder
      LCB: 6,   // Robertson tucking in
      CCB: 3,   // Van Dijk (captain, derby match-winner)
      RCB: 4,   // Konaté (new deal near)
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
// Hand-curated from RESULTS array + injuryNote context as of 2026-04-22.
export const PLAYER_EVIDENCE = {
  1:  "Back in training (Apr 22) · Man Utd May 3 target", // Alisson
  2:  "Knee wound 59' vs Everton · 2-4 wks out",   // Mamardashvili
  3:  "Captain · 100' header won the derby",       // Van Dijk
  4:  "'Big chance I stay' · new deal close",      // Konaté
  5:  "Muscle injury (Apr 14) · doubt for Palace", // Gomez
  6:  "Derby LB starter · Robertson praises Woodman", // Robertson
  7:  "Fotmob predict LB recall vs Palace",        // Kerkez
  8:  "Knee surgery · out for season",             // Bradley
  9:  "Fotmob predict RB recall vs Palace",        // Frimpong
  10: "Torn ACL · out for season",                 // Leoni
  11: "Deputy CB with Gomez doubt · Form 6.6",     // Jacquet
  12: "Academy depth · 2 senior apps",             // Ndukwe
  13: "Benched for derby · home-rotation recall",  // Mac Allister
  14: "Derby double-pivot shift · form 7.5",       // Gravenberch
  15: "Corner assist for VVD winner · form 7.6",   // Szoboszlai
  16: "8.4 rating at inverted RB vs Everton",      // Jones
  17: "Ankle surgery · out for season",            // Endo
  18: "Derby #10 · creator-in-chief · form 7.0",   // Wirtz
  19: "Hamstring · yet to play this season",       // Bajcetic
  20: "Academy prospect · 5 senior apps",          // Nyoni
  21: "Equalled Gerrard's 9 PL derby goals",       // Salah
  22: "Derby assist + 7.9 rating · locked-in LW",  // Gakpo
  23: "Derby 45 mins · starts again vs Palace",    // Isak
  24: "Ruptured Achilles · out 9-12 months",       // Ekitike
  25: "Youngest PL Anfield scorer (Apr 11)",       // Ngumoha
  26: "Rotation winger · form 6.0",                // Chiesa
};

// Default formation when entering the view — matched Slot's derby-winning shape
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1).
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Mamardashvili confirmed 2-4w, Alisson targets May 2/3 → Woodman locked in
  LB:  "Medium", // Robertson kept derby spot but Kerkez still push
  LCB: "High",   // Van Dijk captain & derby match-winner
  RCB: "High",   // Konaté nailed on · new deal near
  RB:  "Medium", // Jones inverted-RB gambit worked vs Everton
  LDM: "High",   // Gravenberch anchor
  RDM: "High",   // Szoboszlai (corner assist for VVD winner)
  LAM: "High",   // Gakpo
  CAM: "High",   // Wirtz as the #10 (derby shape)
  RAM: "High",   // Salah's final weeks
  ST:  "High",   // Isak subbed ~HT vs Everton, starts again
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
export const SLOT_RATIONALE = {
  GK:  "Woodman PL debut start vs boyhood Palace · Mama 2-4 wks, Ali trains this week but Man Utd is target",
  LB:  "Derby LB starter · Robertson public backing of Woodman · Kerkez push still live per Fotmob",
  LCB: "Captain · 100' header won the derby 2-1",
  RCB: "'Big chance I stay' — new deal close · every PL start",
  RB:  "Jones inverted RB · 8.4 rating vs Everton, highest on pitch",
  LDM: "Derby double-pivot · progressive passer",
  RDM: "Corner-delivery assist for VVD winner · form 7.6",
  LAM: "Derby starter · kept LW over Ngumoha · 7.9 rating",
  CAM: "The derby #10 role — creator-in-chief",
  RAM: "Equalled Gerrard's 9 PL derby goals · final LFC weeks",
  ST:  "Played 45 mins vs Everton · starts again vs Palace",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-2-3-1.
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson's own targeted return: Man Utd (A) May 2/3 — NOT Palace" }],
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
  level: "High",
  reason: "Derby XI (Apr 19) the base; Woodman locked in for his PL debut start vs boyhood club Palace after Mamardashvili's 2-4 wk knee wound — Alisson's hamstring has healed (Slot presser Apr 22) but Man Utd May 3 is the firm target, not this weekend. Fotmob consensus has Kerkez/Frimpong recalled at FBs with Mac Allister back in midfield; we keep Slot's derby-winning 4-2-3-1 with Jones at inverted RB and Robertson LB as the slightly higher-confidence pick.",
  pundit_sources: ["ESPN", "Tribuna", "This Is Anfield", "Liverpool.com", "Fotmob"],
  agreement_rate: 0.78,
  generated_at: "2026-04-22T14:00:00Z",
};
