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
    // IDs from playerData.js — Slot's likely XI for Merseyside Derby (Apr 19)
    defaultXI: {
      GK: 2,    // Mamardashvili (Alisson injured)
      LB: 7,    // Kerkez
      LCB: 3,   // Van Dijk
      RCB: 4,   // Konaté
      RB: 9,    // Frimpong (managed but expected to start)
      LCM: 14,  // Gravenberch
      CM: 13,   // Mac Allister
      RCM: 15,  // Szoboszlai
      LW: 22,   // Gakpo
      ST: 23,   // Isak (back from injury, Ekitike out)
      RW: 21,   // Salah
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
    defaultXI: {
      GK: 2,
      LB: 7,    // Kerkez
      LCB: 3,   // Van Dijk
      RCB: 4,   // Konaté
      RB: 9,    // Frimpong
      LDM: 14,  // Gravenberch
      RDM: 13,  // Mac Allister
      LAM: 22,  // Gakpo
      CAM: 18,  // Wirtz (the #10 role suits him perfectly)
      RAM: 21,  // Salah
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
      GK: 2,
      LCB: 7,   // Kerkez tucking in
      CCB: 3,   // Van Dijk
      RCB: 4,   // Konaté
      LWB: 6,   // Robertson as left wing-back
      LCM: 14,  // Gravenberch
      RCM: 13,  // Mac Allister
      RWB: 9,   // Frimpong as right wing-back (his recent role)
      LW: 22,   // Gakpo
      ST: 23,   // Isak
      RW: 21,   // Salah
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-04-18.
export const PLAYER_EVIDENCE = {
  1:  "Hamstring · returns end of season",          // Alisson
  2:  "#1 since Alisson injury · Form 7.0",         // Mamardashvili
  3:  "Captain · Started vs PSG · Form 7.1",        // Van Dijk
  4:  "Started vs PSG · Form 7.1",                  // Konaté
  5:  "Muscle injury (Apr 14) · out vs Everton",    // Gomez
  6:  "Backup LB to Kerkez · Form 6.5",             // Robertson
  7:  "First-choice LB · Form 7.0",                 // Kerkez
  8:  "Knee surgery · out for season",              // Bradley
  9:  "Scan cleared · to start, managed",           // Frimpong
  10: "Torn ACL · out for season",                  // Leoni
  11: "Deputy CB with Gomez out · Form 6.6",        // Jacquet
  12: "Academy depth · 2 senior apps",              // Ndukwe
  13: "Started vs PSG · Form 7.0",                  // Mac Allister
  14: "Started vs PSG · Form 7.4",                  // Gravenberch
  15: "Started vs PSG · Form 7.5",                  // Szoboszlai
  16: "Back in training (Apr 13) · in contention",  // Jones
  17: "Ankle surgery · out for season",             // Endo
  18: "5g/6a · 50 PL chances created · Form 7.0",   // Wirtz
  19: "Hamstring · yet to play this season",        // Bajcetic
  20: "Academy prospect · 5 senior apps",           // Nyoni
  21: "Scored vs Fulham · final LFC weeks",         // Salah
  22: "Started vs PSG · Form 7.2",                  // Gakpo
  23: "Back from ankle · not yet 90min fit",        // Isak
  24: "Ruptured Achilles · out 9-12 months",        // Ekitike
  25: "Youngest PL Anfield scorer (Apr 11)",        // Ngumoha
  26: "Available · rotation winger",                // Chiesa
};

// Default formation when entering the view
export const DEFAULT_FORMATION = "4-3-3";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Mamardashvili undisputed while Alisson is out
  LB:  "High",   // Kerkez first-choice
  LCB: "High",   // Van Dijk nailed on
  RCB: "High",   // Konaté nailed on
  RB:  "Medium", // Frimpong expected but managed
  LCM: "High",   // Gravenberch locked in
  CM:  "High",   // Mac Allister locked in
  RCM: "Medium", // Szoboszlai vs Jones
  LW:  "Medium", // Gakpo vs Ngumoha
  ST:  "Medium", // Isak back but minutes-managed
  RW:  "High",   // Salah nailed on
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation).
export const SLOT_RATIONALE = {
  GK:  "Only fit senior GK · Started last 16",
  LB:  "First-choice since January · Started vs PSG",
  LCB: "Captain · Every PL start this season",
  RCB: "Preferred partner · Started vs PSG",
  RB:  "Scan cleared · Expected to start but will be managed",
  LCM: "Started vs PSG · Highest-rated midfielder (7.4)",
  CM:  "Started vs PSG · Anchor of the midfield",
  RCM: "Started vs PSG · Form 7.5 · Jones only just back in training",
  LW:  "Started vs PSG · Form 7.2 · Ngumoha still a rotation option",
  ST:  "Back from ankle · Slot: 'not ready for 90' · Only fit senior striker",
  RW:  "Final weeks at LFC · Started every PL match since January",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered".
export const ALTERNATIVES = {
  GK:  [],  // No realistic alternative
  LB:  [{ playerId: 6, reason: "Backup LB · Form 6.5" }],
  LCB: [],
  RCB: [{ playerId: 11, reason: "Deputy CB with Gomez out" }],
  RB:  [],  // Bradley out for season, no other natural RB
  LCM: [],
  CM:  [],
  RCM: [{ playerId: 16, reason: "Back in training Apr 13 · match fitness uncertain" }],
  LW:  [{ playerId: 25, reason: "Youngest PL Anfield scorer · rotation option" }, { playerId: 26, reason: "Available but limited minutes" }],
  ST:  [{ playerId: 22, reason: "Can play false 9 if Isak can't start" }],
  RW:  [{ playerId: 26, reason: "Chiesa available for rotation" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "High",
  reason: "10 of 11 started vs PSG (Apr 14) · Isak to start vs Everton with minutes managed (Slot Fri: 'not ready for 90'), Gomez ruled out",
  pundit_sources: ["This Is Anfield", "Empire of the Kop"],
  agreement_rate: 0.82,
  generated_at: "2026-04-18T22:00:00Z",
};
