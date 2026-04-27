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
    // IDs from playerData.js — Slot's likely XI for Manchester United (A), May 3.
    // Updated Apr 27: Salah out 4 weeks (hamstring), Ekitike out 9-12 months
    // (Achilles), Alisson targeting Old Trafford return. Curtis Jones earned
    // RB minutes per Slot's Apr 27 'comfort on the ball, like Trent' praise after
    // back-to-back 8/10s vs Everton & Palace. Mac Allister returned to pivot
    // alongside Szoboszlai vs Palace; Gravenberch rested but expected to start
    // at MUN. Frimpong shifts to RW to cover Salah; Gakpo stays LW; Isak is
    // Liverpool's only fit senior No.9.
    defaultXI: {
      GK: 1,    // Alisson (targeting Old Trafford return per Slot Apr 24-26)
      LB: 6,    // Robertson (started Palace 8/10 · Tottenham agreement live)
      LCB: 3,   // Van Dijk (captain · derby winner · Salah farewell briefer Apr 27)
      RCB: 4,   // Konaté (Romano: new deal nears completion)
      RB: 16,   // Curtis Jones (Slot Apr 27: 'comfort on the ball, like Trent had at RB')
      LCM: 14,  // Gravenberch (rested Saturday · expected back at MUN)
      CM: 13,   // Mac Allister (started Palace · stays in pivot)
      RCM: 15,  // Szoboszlai (started Palace double pivot · in-house Diomande lobbyist)
      LW: 22,   // Gakpo (started LW vs Palace · primary wide threat with Salah out)
      ST: 23,   // Isak (Anfield league opener vs Palace · Liverpool's lone senior No.9)
      RW: 9,    // Frimpong (came on for Salah at 59' · primary RW deputy)
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
    // Slot's likely XI for Man Utd (A) May 3 in his preferred 4-2-3-1 shape.
    // Apr 27 update: NBC Sports/RotoWire/FotMob predicted XI converges around
    // Alisson back · Robertson LB · Curtis Jones at RB (Slot 'comfort on the
    // ball, like Trent') · Mac Allister + Gravenberch double pivot ·
    // Wirtz/Szoboszlai/Gakpo behind Isak. Salah's 4-week hamstring has flipped
    // selection logic — Frimpong is the natural RW deputy off the bench.
    defaultXI: {
      GK: 1,    // Alisson (targeting Old Trafford May 3 return)
      LB: 6,    // Robertson (started Palace 8/10 · Tottenham agreement live)
      LCB: 3,   // Van Dijk (captain · led Salah farewell briefing Apr 27)
      RCB: 4,   // Konaté (Romano: new deal nears completion)
      RB: 16,   // Curtis Jones (Slot Apr 27: Trent-like 'comfort on the ball' at RB)
      LDM: 14,  // Gravenberch (rested Saturday · expected back vs MUN)
      RDM: 13,  // Mac Allister (started Palace · steadier double-pivot for away day)
      LAM: 22,  // Gakpo (LW vs Palace; shifts inside as a 10 if needed)
      CAM: 18,  // Wirtz (sealed 3-1 vs Palace late · Liverpool's most reliable creator with Salah out)
      RAM: 15,  // Szoboszlai (push wider with Salah out · drives the right channel)
      ST: 23,   // Isak (Liverpool's only fit senior No.9 · first Anfield league goal Apr 25)
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
      GK: 1,    // Alisson (targeting Old Trafford May 3)
      LCB: 7,   // Kerkez tucking in (back-three left-sided)
      CCB: 3,   // Van Dijk (captain · Salah farewell organiser)
      RCB: 4,   // Konaté (new deal close)
      LWB: 6,   // Robertson as left wing-back (push higher)
      LCM: 14,  // Gravenberch
      RCM: 13,  // Mac Allister
      RWB: 16,  // Curtis Jones at RWB (Slot Apr 27: Trent-like at RB)
      LW: 22,   // Gakpo (started LW vs Palace)
      ST: 23,   // Isak (only fit senior No.9)
      RW: 18,   // Wirtz (creator wide right with Salah out)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-04-27.
export const PLAYER_EVIDENCE = {
  1:  "Targeting Old Trafford return · May 3",       // Alisson
  2:  "Stitched knee wound · ~3 wks out",            // Mamardashvili
  3:  "Captain · led Salah farewell briefer",        // Van Dijk
  4:  "Romano: new deal nears completion",           // Konaté
  5:  "Back in PL squad · cover at Old Trafford",    // Gomez
  6:  "8/10 vs Palace · Spurs verbal agreement",     // Robertson
  7:  "Bench vs Palace · rotation option",           // Kerkez
  8:  "Knee surgery · out for season",               // Bradley
  9:  "On for Salah at 59' · primary RW deputy",     // Frimpong
  10: "Torn ACL · out for season",                   // Leoni
  11: "Deputy CB · Form 6.6",                        // Jacquet
  12: "Academy depth · 2 senior apps",               // Ndukwe
  13: "Started Palace · stays in pivot at MUN",      // Mac Allister
  14: "Rested Palace · returns at Old Trafford",     // Gravenberch
  15: "Started Palace pivot · drives right at MUN",  // Szoboszlai
  16: "8/10 RB vs Palace · Slot: 'like Trent'",      // Jones
  17: "Ankle surgery · out for season",              // Endo
  18: "Sealed 3-1 vs Palace · top creator now",      // Wirtz
  19: "Hamstring · yet to play this season",         // Bajcetic
  20: "Academy prospect · 5 senior apps",            // Nyoni
  21: "Hamstring tear · 4 wks · Brentford only?",    // Salah
  22: "Started LW vs Palace · go-to wide threat",    // Gakpo
  23: "First Anfield league goal · lone No.9",       // Isak
  24: "Ruptured Achilles · out 9-12 months",         // Ekitike
  25: "Palace bench · youngest PL Anfield scorer",   // Ngumoha
  26: "Palace bench · rotation winger · likely exit",// Chiesa
};

// Default formation when entering the view — matched Slot's derby-winning shape
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1).
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson on track for Old Trafford return per Slot Apr 24-26
  LB:  "High",   // Robertson started Palace 8/10 · expected to keep place
  LCB: "High",   // Van Dijk captain · led Salah farewell briefing Apr 27
  RCB: "High",   // Konaté nailed on · Romano: new deal nears completion
  RB:  "High",   // Slot Apr 27: Curtis Jones 'comfort on the ball, like Trent had at RB'
  LDM: "High",   // Gravenberch returns after Saturday rest
  RDM: "Medium", // Mac Allister or Gravenberch swap is plausible · pivot pairing fluid
  LAM: "Medium", // Gakpo could shift to a 10 if Frimpong needed wide
  CAM: "High",   // Wirtz · sealed 3-1 vs Palace late · most reliable creator with Salah out
  RAM: "Medium", // Szoboszlai pushed wider · Frimpong an alternative if Slot prefers pace
  ST:  "High",   // Isak · only fit senior No.9
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
export const SLOT_RATIONALE = {
  GK:  "Slot Apr 24-26: Alisson 'close to returning' and targeting Old Trafford May 3 · Woodman drops to bench unless late fitness test fails · Mama still out ~3 wks",
  LB:  "Robertson started Palace 3-1 (8.0/10 sportsdunia) and assisted on the counter · Spurs verbal agreement is summer-conditional only",
  LCB: "Captain · led Salah farewell presser Apr 27 · controlled the Palace win · 7.5 form",
  RCB: "Romano (Apr 20): new Liverpool deal nears completion · Konaté: 'It's Liverpool' · started Palace 3-1",
  RB:  "Slot Apr 27: Curtis Jones offers 'comfort on the ball, like Trent had at right-back' · 8/10 in back-to-back wins (Everton, Palace) · assisted Robertson",
  LDM: "Returns after Saturday's rest · ball-winning anchor · form 7.5 among Europe's best",
  RDM: "Mac Allister started Palace pivot vs Palace · provided the lay-off Isak finished for the opener",
  LAM: "Started LW vs Palace · primary wide threat with Salah out · drives the Diomande pursuit context",
  CAM: "Wirtz drove home the 3-1 vs Palace late · Liverpool's most reliable creator with Salah hamstring · £100m signing form ticking up",
  RAM: "Pushed wider with Salah out · creates from right channel · in-house Diomande lobbyist",
  ST:  "Liverpool's only fit senior No.9 · first Anfield league goal vs Palace (controlled & finished Mac Allister's lay-off)",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-2-3-1.
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Woodman keeps gloves if Alisson fails late fitness test" }],
  LB:  [{ playerId: 7, reason: "Kerkez · rotation option if Robertson's minutes managed" }],
  LCB: [{ playerId: 5, reason: "Gomez back in PL squad · Palace bench · cover after PSG-cameo lay-off" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB with Konaté/VVD nailed on" }],
  RB:  [{ playerId: 9, reason: "Frimpong · natural RB option if Slot reverts to traditional shape" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · started Palace pivot · pairing is fluid" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could be paired LDM with Mac Allister at RDM" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · youngest PL Anfield scorer · cover option" }],
  CAM: [{ playerId: 13, reason: "Mac Allister · could push higher if pivot pairing changes" }],
  RAM: [{ playerId: 9, reason: "Frimpong · came on for Salah Apr 25 · pace option" }, { playerId: 26, reason: "Chiesa · rotation winger · likely summer exit" }],
  ST:  [{ playerId: 22, reason: "Gakpo · centrally if Slot wants Isak managed in away derby" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "Apr 27, ahead of Old Trafford (A) May 3: NBC Sports, RotoWire and FotMob converge on a 4-2-3-1 with Alisson back, Curtis Jones at RB (Slot Apr 27: 'comfort on the ball, like Trent') and Mac Allister + Gravenberch in pivot. The big shake-up: Salah's hamstring tear (4 wks) opens the right channel — Frimpong came on for him at 59' Saturday and is the most natural deputy, but Slot may push Szoboszlai wider with Wirtz at the 10. Isak nailed on as the lone fit senior No.9 (Ekitike Achilles, season). Confidence Medium because the post-Salah right-side configuration is still fluid and Woodman could keep gloves if Alisson's fitness test fails.",
  pundit_sources: ["NBC Sports", "RotoWire", "FotMob", "Liverpool.com", "This Is Anfield", "Empire of the Kop", "Liverpool FC"],
  agreement_rate: 0.7,
  generated_at: "2026-04-27T11:00:00Z",
};
