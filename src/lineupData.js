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
    // Updated Apr 23: Fotmob/OneFootball predict natural FBs RECALLED (Kerkez/Frimpong)
    // with Mac Allister back in midfield — Jones drops out vs his inverted-RB derby role.
    defaultXI: {
      GK: 2,    // Woodman IRL (PL debut start) · id 2 placeholder · Mama 2-4w, Ali May 3 target
      LB: 7,    // Kerkez (Fotmob/OneFootball predict LB recall over Robertson)
      LCB: 3,   // Van Dijk (100' winner vs Everton)
      RCB: 4,   // Konaté (Romano: new deal nears completion)
      RB: 9,    // Frimpong (Fotmob/OneFootball predict RB recall — natural fit at home)
      LCM: 14,  // Gravenberch
      CM: 13,   // Mac Allister (predicted home-rotation return after derby bench)
      RCM: 15,  // Szoboszlai (assisted Van Dijk winner)
      LW: 18,   // Wirtz (LAM/LW per Fotmob predicted XI)
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
    // The 4-2-3-1 Slot used to win the Hill Dickinson Derby 2-1 (Apr 19) — Palace
    // predicted XI per Fotmob/OneFootball (Apr 23) RECALLS natural FBs and Mac Allister.
    defaultXI: {
      GK: 2,    // Woodman IRL · id 2 placeholder · Mama 2-4w, Ali May 3 target
      LB: 7,    // Kerkez (Fotmob/OneFootball predict LB recall vs Palace)
      LCB: 3,   // Van Dijk (100' winner)
      RCB: 4,   // Konaté (Romano: new deal nears completion)
      RB: 9,    // Frimpong (Fotmob/OneFootball predict RB recall vs Palace)
      LDM: 14,  // Gravenberch (derby double-pivot)
      RDM: 13,  // Mac Allister (predicted return after derby bench)
      LAM: 18,  // Wirtz (LAM per Fotmob predicted XI)
      CAM: 15,  // Szoboszlai (10/false-10 — corner-delivery assist vs Everton)
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
// Hand-curated from RESULTS array + injuryNote context as of 2026-04-23.
export const PLAYER_EVIDENCE = {
  1:  "Romano (Apr 23): Juventus eyeing return", // Alisson
  2:  "Knee wound 59' vs Everton · 2-4 wks out",   // Mamardashvili
  3:  "Captain · 100' header won the derby",       // Van Dijk
  4:  "Romano (Apr 20): new deal nears completion", // Konaté
  5:  "Muscle injury (Apr 14) · out for Palace",  // Gomez
  6:  "Derby LB starter · benched vs Palace (predicted)", // Robertson
  7:  "Fotmob predict LB recall vs Palace",        // Kerkez
  8:  "Knee surgery · out for season",             // Bradley
  9:  "Fotmob predict RB recall vs Palace",        // Frimpong
  10: "Torn ACL · out for season",                 // Leoni
  11: "Deputy CB with Gomez doubt · Form 6.6",     // Jacquet
  12: "Academy depth · 2 senior apps",             // Ndukwe
  13: "Predicted home-rotation return vs Palace",  // Mac Allister
  14: "Derby double-pivot shift · form 7.5",       // Gravenberch
  15: "Corner assist for VVD winner · form 7.6",   // Szoboszlai
  16: "8.4 derby RB · likely bench vs Palace",    // Jones
  17: "Ankle surgery · out for season",            // Endo
  18: "Derby #10 · LAM/LW vs Palace (predicted)", // Wirtz
  19: "Hamstring · yet to play this season",       // Bajcetic
  20: "Academy prospect · 5 senior apps",          // Nyoni
  21: "Equalled Gerrard's 9 PL derby goals",       // Salah
  22: "Derby assist + 7.9 · LW rotation vs Palace", // Gakpo
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
  GK:  "High",   // Mama 2-4w, Alisson Man Utd target → Woodman locked in
  LB:  "Medium", // Fotmob/OneFootball Apr 23 predict Kerkez recall over Robertson
  LCB: "High",   // Van Dijk captain & derby match-winner
  RCB: "High",   // Konaté nailed on · Romano: deal nears completion
  RB:  "Medium", // Fotmob/OneFootball Apr 23 predict Frimpong recall over Jones-RB
  LDM: "High",   // Gravenberch anchor
  RDM: "Medium", // Mac Allister predicted return for home rotation
  LAM: "High",   // Wirtz as the LAM (Fotmob predicted XI)
  CAM: "High",   // Szoboszlai (10/false-10 — derby corner assist)
  RAM: "High",   // Salah's final weeks
  ST:  "High",   // Isak subbed ~HT vs Everton, starts again
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
export const SLOT_RATIONALE = {
  GK:  "Woodman PL debut vs boyhood Palace · Mama 2-4 wks, Ali targets Man Utd May 3 · BREAKING Apr 23: Trafford interest declared, Alisson 'likes idea' of Juventus",
  LB:  "Fotmob/OneFootball Apr 23 predicted XI: Kerkez recalled at home for natural shape · Robertson rests after derby 90'",
  LCB: "Captain · 100' header won the derby 2-1 · 7.4 form",
  RCB: "Romano (Apr 20): new deal nears completion · BBC: 'we are close to an agreement'",
  RB:  "Fotmob/OneFootball Apr 23 predicted XI: Frimpong recalled · home shape favours natural FBs over derby's inverted-Jones experiment",
  LDM: "Derby double-pivot · progressive passer · form 7.5",
  RDM: "Mac Allister predicted return after derby bench · controls midfield tempo at home",
  LAM: "Wirtz LAM per Fotmob predicted XI · derby #10 form continues",
  CAM: "Szoboszlai · corner-delivery assist for VVD winner · form 7.6 · steps into central #10",
  RAM: "Equalled Gerrard's 9 PL derby goals · final LFC weeks",
  ST:  "Played 45 mins vs Everton · minutes managed · starts again vs Palace",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-2-3-1.
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson's targeted return: Man Utd (A) May 3 — NOT Palace" }],
  LB:  [{ playerId: 6, reason: "Robertson kept the derby spot · still live for selection" }],
  LCB: [],
  RCB: [{ playerId: 11, reason: "Jacquet — deputy CB with Gomez out" }],
  RB:  [{ playerId: 16, reason: "Jones inverted-RB if Slot reverts to derby shape (8.4 rating)" }],
  LDM: [{ playerId: 16, reason: "Jones can shuttle to LDM in a 4-2-3-1" }],
  RDM: [{ playerId: 16, reason: "Jones rotation option · derby starter" }],
  LAM: [{ playerId: 22, reason: "Gakpo · derby assist + 7.9 rating" }, { playerId: 25, reason: "Ngumoha · youngest PL Anfield scorer" }],
  CAM: [{ playerId: 13, reason: "Mac Allister as a slightly deeper #10" }],
  RAM: [{ playerId: 26, reason: "Chiesa rotation option" }],
  ST:  [{ playerId: 22, reason: "Gakpo can play false 9 if Isak rests" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "Apr 23: shifted from the derby XI to the consensus Fotmob/OneFootball predicted XI vs Palace. Woodman locked in for his PL debut after Mama's 2-4 wk knee wound — Alisson back in training but Man Utd May 3 is the firm target, with Romano dropping a Juventus bombshell today. Predicted recalls: Kerkez at LB, Frimpong at RB (natural FBs at home), Mac Allister back in central midfield. 4-2-3-1 retained with Wirtz LAM, Szoboszlai CAM, Salah RAM, Isak up top. 8 players on the injury list (incl. Trafford/Senesi linked summer arrivals).",
  pundit_sources: ["Fotmob", "OneFootball", "Sports Mole", "This Is Anfield", "Liverpool.com", "Liverpool FC"],
  agreement_rate: 0.72,
  generated_at: "2026-04-23T14:00:00Z",
};
