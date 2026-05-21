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
    // finale on Sun May 24. Top-five is essentially sealed (Opta 99.65%) after
    // Bournemouth's 1-1 draw with Man City — the Cherries sit on 56 to
    // Liverpool's 59 with one game each to play. Salah expected to start his
    // Anfield farewell, Isak back in if fit (back in training Thu May 21).
    // 4-3-3 is a backup look — Slot's been preferring 4-2-3-1 of late, but a
    // return to 4-3-3 for a home farewell occasion is plausible.
    defaultXI: {
      GK: 1,    // Alisson (projected return for the finale per Liverpool.com)
      LB: 7,    // Kerkez (first-pick LB · Robertson farewell on bench)
      LCB: 3,   // Van Dijk (captain · brace at Villa Park)
      RCB: 4,   // Konaté (locked in alongside VVD)
      RB: 9,    // Frimpong (projected return from 'minor injury')
      LCM: 13,  // Mac Allister (90 mins Villa · double-pivot)
      CM: 14,   // Gravenberch (control of midfield · 6.5/10 vs Villa)
      RCM: 15,  // Szoboszlai (assist for VVD 52' · engine)
      LW: 22,   // Gakpo (kept slot at Villa Park)
      ST: 23,   // Isak (projected return if fit · Slot 'hopeful')
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
    // PREDICTED 4-2-3-1 for the Brentford home finale on Sun May 24. Top-five
    // is essentially sealed (Opta 99.65%) after Bournemouth 1-1 Man City —
    // Bournemouth 56 to Liverpool's 59 with one game each to play. Slot has
    // favoured 4-2-3-1 in recent matches and is likely to stick with it for
    // the home farewell. Salah expected to start his Anfield farewell, Wirtz
    // recovered from illness, Isak and Frimpong back in training, Alisson back
    // in full training and in line for an Anfield send-off (Thu May 21).
    defaultXI: {
      GK: 1,    // Alisson (back in training · finale send-off in line)
      LB: 7,    // Kerkez (first-pick LB · Robertson on bench for farewell)
      LCB: 3,   // Van Dijk (captain · scored 2 vs Villa)
      RCB: 4,   // Konaté (locked in alongside VVD)
      RB: 9,    // Frimpong (projected return from 'minor injury')
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 13,  // Mac Allister (double-pivot · 90 mins Villa)
      LAM: 22,  // Gakpo (LW · likely keeps slot)
      CAM: 18,  // Wirtz (returns after antibiotics + Villa cameo)
      RAM: 21,  // Salah (Anfield farewell start expected)
      ST: 23,   // Isak (projected return if fit · Slot 'hopeful')
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
    // this is the shape that fits: VVD/Konaté/Gomez at the back, Kerkez and
    // Frimpong as wing-backs, Gravenberch + Mac Allister in midfield,
    // Gakpo-Isak-Salah up top. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (projected return)
      LCB: 5,   // Gomez (slots into the back three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 4,   // Konaté (locked in alongside VVD)
      LWB: 7,   // Kerkez (slides up as LWB)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 9,   // Frimpong (projected return · ideal wing-back)
      LW: 22,   // Gakpo (LW · likely keeps slot)
      ST: 23,   // Isak (No. 9 if fit · Slot 'hopeful')
      RW: 21,   // Salah (Anfield farewell start expected)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-21
// (Thu: Champions League all but secured — Opta 99.65% — after the Bournemouth-
// City draw; FSG linked with a 'world-class' Slot replacement, Luis Enrique the
// bookies' favourite; Alisson and Isak back in training ahead of the finale).
export const PLAYER_EVIDENCE = {
  1:  "Back training · in line for finale",               // Alisson
  2:  "Conceded 4 at Villa · backup if Ali fit",          // Mamardashvili
  3:  "Brace at Villa · captain · Form 7.4",              // Van Dijk
  4:  "Locked in at RCB · contract stalemate",            // Konaté
  5:  "RB/CB cover · 5/10 at Villa · Form 5.9",           // Gomez
  6:  "Anfield farewell Sun · bench role likely",         // Robertson
  7:  "First-pick LB · 90 mins Villa · Form 6.8",         // Kerkez
  8:  "Knee surgery · out for season",                    // Bradley
  9:  "Back in training · finale return likely",          // Frimpong
  10: "Torn ACL · out for season",                        // Leoni
  11: "Deputy CB · cover only",                           // Jacquet
  12: "Academy depth · 2 senior apps",                    // Ndukwe
  13: "Double-pivot · 90 mins Villa · Form 6.7",          // Mac Allister
  14: "Midfield anchor at Villa · Form 7.2",              // Gravenberch
  15: "Assisted VVD vs Villa · Form 7.3",                 // Szoboszlai
  16: "'Way off standards' statement · Form 6.9",         // Jones
  17: "Ankle surgery · out for season",                   // Endo
  18: "Recovered from illness · finale starter",          // Wirtz
  19: "Hamstring · yet to play this season",              // Bajcetic
  20: "Academy prospect · 5 senior apps",                 // Nyoni
  21: "Anfield farewell start expected",                  // Salah
  22: "LW starter · 90 mins at Villa · Form 6.8",         // Gakpo
  23: "Back in training · 'a chance' for finale",         // Isak
  24: "Ruptured Achilles · out 9-12 months",              // Ekitike
  25: "Led line at Villa at 17 · Form 7.3",               // Ngumoha
  26: "Rotation winger · summer exit list",               // Chiesa
  27: "3rd-choice GK · Mamard ahead",                     // Woodman
};

// Default formation when entering the view — projecting the Brentford home
// finale on Sun May 24. Top-five essentially sealed (Opta 99.65%) after the
// Bournemouth 1-1 Man City draw, so the match is now a farewell + manager-vs-
// talisman tableau more than a survival fixture. Slot has favoured 4-2-3-1 of
// late; expect Salah to start his Anfield farewell, Isak back if fit, Wirtz
// recovered from illness, Alisson and Frimpong both back in training (Thu).
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1). Confidence holds steady with Alisson,
// Isak and Frimpong all back in training; team news firms at Slot's Friday
// presser. (Refreshed Thu May 21: Champions League all but secured at Opta
// 99.65%; FSG linked with a 'world-class' Slot replacement, Luis Enrique the
// bookies' favourite.)
export const SLOT_CONFIDENCE = {
  GK:  "Medium", // Alisson projected return · Mamard alternative
  LB:  "High",   // Kerkez · first-pick LB · Robertson farewell on bench
  LCB: "High",   // Van Dijk · captain · scored 2 vs Villa
  RCB: "High",   // Konaté · locked in alongside VVD
  RB:  "High",   // Frimpong full training Wed · Gomez backup
  LDM: "High",   // Gravenberch · most reliable midfielder
  RDM: "High",   // Mac Allister · double-pivot
  LAM: "Medium", // Gakpo · LW likely · could rotate
  CAM: "Medium", // Wirtz return projected · Szobo could shift
  RAM: "High",   // Salah · Anfield FAREWELL start expected
  ST:  "Medium", // Isak full training Wed · else Ngumoha
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
// Brentford home finale on Sun May 24 is the projected fixture. Top-five (and
// the Champions League place) is all but secured — Opta has Liverpool at 99.65%
// after Tuesday's Bournemouth 1-1 Manchester City draw left the Reds three
// points clear with one game each to play. Salah's weekend statement and FSG's
// lined-up 'world-class' Slot replacement add a manager-vs-talisman layer to
// selection for the farewell.
export const SLOT_RATIONALE = {
  GK:  "Thu May 21 — Alisson back in full training at Kirkby and in line for an Anfield send-off against Brentford after roughly three months out; Slot's line is 'let's see where he is tomorrow.' Mamardashvili conceded four at Villa Park and keeps the shirt only if Alisson isn't cleared at Friday's presser.",
  LB:  "Thu May 21 — Kerkez locks the LB shirt for the Brentford finale after a 6/10 90-minute display at Villa Park. Still first-pick ahead of Robertson, who is in line for a bench role on his own Anfield farewell.",
  LCB: "Thu May 21 — Van Dijk indisputable after his two headers in the 4-2 Villa Park defeat (52' equaliser, 90+ consolation). The captain remains the rock; Liverpool.com has ruled out a Galatasaray exit and he is expected to see out his current deal.",
  RCB: "Thu May 21 — Konaté locks in alongside Van Dijk despite a 5/10 at Villa where set-piece tracking failed repeatedly. Contract talks remain a 'stalemate' with Real Madrid in the background, but he starts the finale.",
  RB:  "Thu May 21 — Frimpong back in training after the 'minor injury' that kept him out at Villa Park; in line to return for the finale. Gomez, who deputised at RB at Villa and struggled, is the backup if Frimpong isn't cleared at Friday's presser.",
  LDM: "Thu May 21 — Gravenberch continues as the most reliable midfielder Liverpool have after anchoring the double-pivot at Villa Park. Partners Mac Allister at the base of the 4-2-3-1.",
  RDM: "Thu May 21 — Mac Allister completed 90 minutes at Villa and partners Gravenberch in the double-pivot. Father/agent Carlos's 'no talks until the season is over' line still rumbles in the background.",
  LAM: "Thu May 21 — Gakpo expected to keep the left after 90 minutes at Villa Park. He starts the finale ahead of Chiesa despite reported FSG willingness to sanction a summer sale to fund the wide rebuild.",
  CAM: "Thu May 21 — Wirtz projected to start the Brentford finale, recovered from the illness that limited him to a Villa Park cameo. Slot is likely to want the German's creativity for the farewell occasion; Szoboszlai could shift central if Wirtz isn't ready.",
  RAM: "Thu May 21 — Mohamed Salah's Anfield farewell start is expected. The Egyptian has issued a fresh statement vowing to 'give everything' for Champions League qualification, and the club has confirmed pre-match tributes. Selection-debate columns still cite Rooney's 'I'd bench him' line, but Slot is expected to start him in front of the Kop.",
  ST:  "Thu May 21 — Alexander Isak back in training after the 'minor injury' that ruled him out at Villa Park; Slot says he 'definitely has a chance' for the finale but offers no guarantees. If not cleared at Friday's presser, 17-year-old Rio Ngumoha — who led the line at Villa — starts again.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the projected shape for the Brentford home finale May 24).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · 3 straight starts including Villa Park · in line if Alisson isn't ready" }, { playerId: 27, reason: "Woodman · third-choice cover" }],
  LB:  [{ playerId: 6, reason: "Robertson · projected farewell · could start on the day if Slot wants to send him off as a starter" }],
  LCB: [{ playerId: 5, reason: "Gomez · deputised at RB vs Villa · could shuffle to LCB in extremis" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB · live starter only if Konaté has a setback" }],
  RB:  [{ playerId: 5, reason: "Gomez · backup if Frimpong isn't fit · started at RB at Villa" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Mac Allister" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · led the line at Villa · could shift wide if Isak starts" }, { playerId: 26, reason: "Chiesa · senior winger option · possible Anfield farewell" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · could shift centrally if Wirtz isn't ready · 9 league assists this term" }, { playerId: 16, reason: "Curtis Jones · started attacking three at Villa · alternative #10" }],
  RAM: [{ playerId: 16, reason: "Curtis Jones · started attacking three at Villa · could keep the spot if Salah isn't deemed match-fit" }, { playerId: 26, reason: "Chiesa · possible Anfield farewell winger option" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line at Villa · plug-and-play replacement if Isak isn't fit" }, { playerId: 22, reason: "Gakpo · false-9 option · used by Slot in earlier matches" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "Thu May 21 (Thursday-morning refresh) — projected Liverpool XI for the Brentford home finale on Sun May 24, the season's last match. Context: top five and the Champions League place are all but secured — Opta has Liverpool at 99.65% after Tuesday's Bournemouth 1-1 Man City draw left the Reds three points clear with one game each to play, so a single point on Sunday confirms it. The XI carries over from the side beaten 4-2 at Villa Park on May 15 with three projected returns: Alisson back in full training and in line for an Anfield send-off, Frimpong back from a minor injury, and Isak — who Slot says 'definitely has a chance' — back in training but not guaranteed. Confidence stays MEDIUM because the GK, RB and ST slots all still hinge on Friday's pre-match presser, and the manager-vs-talisman backdrop (Salah's statement, FSG's lined-up 'world-class' replacement) keeps farewell-day rotation in play.",
  pundit_sources: ["Liverpool FC", "Liverpool.com", "This Is Anfield", "Sky Sports", "ESPN", "Heavy Sport", "Football365", "Anfield Watch", "Yahoo Sports", "Caught Offside", "Empire of the Kop", "Read Liverpool FC", "Goal.com", "Sports Illustrated", "TNT Sports", "NBC Sports", "Opta Analyst", "VAVEL"],
  agreement_rate: 0.7,
  generated_at: "2026-05-21T08:30:00Z",
};
