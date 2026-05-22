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
    // but sealed — Opta 99.65%, a single point confirms it. This is a farewell
    // occasion: Andy Robertson is tipped to start his Anfield send-off at LB
    // ahead of the fit Kerkez, Salah starts in front of the Kop, Alisson is in
    // line for a send-off, Isak back in if cleared at Friday's presser.
    // 4-3-3 is a backup look — Slot has favoured 4-2-3-1 of late.
    defaultXI: {
      GK: 1,    // Alisson (in line for finale send-off · in Brazil's WC squad)
      LB: 6,    // Robertson (Anfield FAREWELL start expected at LB)
      LCB: 3,   // Van Dijk (captain · brace at Villa Park)
      RCB: 4,   // Konaté (locked in alongside VVD)
      RB: 9,    // Frimpong (back in training · finale return in contention)
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
    // (and the Champions League place) is all but sealed — Opta 99.65% after
    // Bournemouth 1-1 Man City — so a single point confirms it. Slot has
    // favoured 4-2-3-1 in recent matches. This is a farewell occasion: Andy
    // Robertson is tipped to START his Anfield send-off at left-back ahead of
    // the fit Kerkez (Yahoo Sports / The 4th Official predicted XIs), Salah
    // starts in front of the Kop, Wirtz is recovered from illness, and Isak,
    // Frimpong and Alisson all hinge on Slot's Friday pre-match presser.
    defaultXI: {
      GK: 1,    // Alisson (in line for finale send-off · named in Brazil's WC squad)
      LB: 6,    // Robertson (Anfield FAREWELL start expected at LB)
      LCB: 3,   // Van Dijk (captain · scored 2 vs Villa)
      RCB: 4,   // Konaté (locked in alongside VVD)
      RB: 9,    // Frimpong (back in training · finale return in contention)
      LDM: 14,  // Gravenberch (double-pivot · most reliable midfielder)
      RDM: 13,  // Mac Allister (double-pivot · 90 mins Villa)
      LAM: 22,  // Gakpo (LW · likely keeps slot)
      CAM: 18,  // Wirtz (recovered from illness · finale starter)
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
    // this is the shape that fits: VVD/Konaté/Gomez at the back, Robertson
    // (farewell start) and Frimpong as wing-backs, Gravenberch + Mac Allister
    // in midfield, Gakpo-Isak-Salah up top. Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (in line for finale send-off)
      LCB: 5,   // Gomez (slots into the back three)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 4,   // Konaté (locked in alongside VVD)
      LWB: 6,   // Robertson (farewell start · slides up as LWB)
      LCM: 14,  // Gravenberch (most reliable midfielder)
      RCM: 13,  // Mac Allister (anchors double pivot)
      RWB: 9,   // Frimpong (back in training · ideal wing-back)
      LW: 22,   // Gakpo (LW · likely keeps slot)
      ST: 23,   // Isak (No. 9 if fit · Slot 'hopeful')
      RW: 21,   // Salah (Anfield farewell start expected)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-22
// (Fri: the Slot/Iraola sack saga has exploded — FSG reportedly weighing the
// Dutchman's future against Andoni Iraola, who has overtaken Slot as the
// bookies' favourite, while James Pearce insists the club's position is
// 'unchanged'; Alisson named in Brazil's World Cup squad; farewell programme
// for Salah and Robertson rolling out ahead of Sunday's finale).
export const PLAYER_EVIDENCE = {
  1:  "In Brazil's WC squad · finale send-off",       // Alisson
  2:  "Conceded 4 at Villa · backup to Ali",          // Mamardashvili
  3:  "Brace at Villa · captain · Form 7.4",          // Van Dijk
  4:  "Locked in at RCB · contract stalemate",        // Konaté
  5:  "RB/CB cover · 5/10 at Villa · Form 5.9",       // Gomez
  6:  "Farewell START expected at LB Sun",            // Robertson
  7:  "First-pick LB · bench for Robbo farewell",     // Kerkez
  8:  "Knee surgery · out for season",                // Bradley
  9:  "Back training · finale return in doubt",       // Frimpong
  10: "Torn ACL · out for season",                    // Leoni
  11: "Deputy centre-back · cover only",              // Jacquet
  12: "Academy depth · 2 senior apps",                // Ndukwe
  13: "Double-pivot · 90 mins Villa · Form 6.7",      // Mac Allister
  14: "Midfield anchor at Villa · Form 7.2",          // Gravenberch
  15: "Assisted VVD vs Villa · Form 7.3",             // Szoboszlai
  16: "Inter keen · likely summer exit",              // Jones
  17: "Ankle surgery · out for season",               // Endo
  18: "Recovered from illness · finale starter",      // Wirtz
  19: "Hamstring · yet to play this season",          // Bajcetic
  20: "Academy prospect · 5 senior apps",             // Nyoni
  21: "Anfield FAREWELL start · tribute Sun",         // Salah
  22: "LW starter · 90 mins at Villa · Form 6.8",     // Gakpo
  23: "Back training · 'a chance' for finale",        // Isak
  24: "Ruptured Achilles · out 9-12 months",          // Ekitike
  25: "Led line at Villa at 17 · Form 7.3",           // Ngumoha
  26: "Rotation winger · summer exit list",           // Chiesa
  27: "3rd-choice GK · Mamard ahead",                 // Woodman
};

// Default formation when entering the view — projecting the Brentford home
// finale on Sun May 24. Top-five (and the Champions League place) is all but
// sealed (Opta 99.65%) after the Bournemouth 1-1 Man City draw, so the match
// is a farewell + manager-vs-talisman tableau more than a survival fixture.
// Slot has favoured 4-2-3-1 of late; expect Salah and Robertson to start their
// Anfield farewells, Isak back if fit, Wirtz recovered from illness, Alisson
// and Frimpong both hinging on Friday's pre-match presser.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1). Confidence eases because the finale
// is a farewell occasion with the Champions League place all but secured —
// sentiment selection and rotation are in play, and the GK/RB/ST slots all
// hinge on Slot's Friday presser. (Refreshed Fri May 22.)
export const SLOT_CONFIDENCE = {
  GK:  "Medium", // Alisson farewell start in line · Mamardashvili if not cleared
  LB:  "Medium", // Robertson farewell start tipped · Kerkez could keep it
  LCB: "High",   // Van Dijk · captain · scored 2 vs Villa
  RCB: "High",   // Konaté · locked in alongside VVD
  RB:  "Medium", // Frimpong back in training · Gomez / Jones cover
  LDM: "High",   // Gravenberch · most reliable midfielder
  RDM: "High",   // Mac Allister · double-pivot
  LAM: "Medium", // Gakpo · LW likely · could rotate
  CAM: "Medium", // Wirtz return projected · Szobo could shift central
  RAM: "High",   // Salah · Anfield FAREWELL start expected
  ST:  "Medium", // Isak hinges on Friday presser · else Ngumoha
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
// Brentford home finale on Sun May 24 is the projected fixture. Top-five (and
// the Champions League place) is all but secured — Opta has Liverpool at 99.65%
// after Tuesday's Bournemouth 1-1 Manchester City draw. Salah's weekend
// statement and the escalating Slot/Iraola sack saga add a manager-vs-talisman
// layer to selection for the farewell.
export const SLOT_RATIONALE = {
  GK:  "Fri May 22 — Alisson back in full training and in line for an Anfield send-off against Brentford after roughly three months out; he has also been named in Brazil's World Cup squad. Slot's line is 'let's see where he is.' Mamardashvili conceded four at Villa Park and keeps the shirt only if Alisson isn't cleared at the Friday presser.",
  LB:  "Fri May 22 — Andy Robertson is tipped to START his Anfield farewell at left-back, with predicted XIs (Yahoo Sports, The 4th Official) sending the Scot off as a starter on a day the club will honour him with a mosaic in the lower Sir Kenny Dalglish Stand. The fit Milos Kerkez, first-pick LB through the run-in, is expected to drop to the bench.",
  LCB: "Fri May 22 — Van Dijk indisputable after his two headers in the 4-2 Villa Park defeat (52' equaliser, 90+ consolation). The captain remains the rock and is expected to see out his current deal.",
  RCB: "Fri May 22 — Konaté locks in alongside Van Dijk despite a 5/10 at Villa where set-piece tracking failed repeatedly. Contract talks remain a stalemate with Real Madrid in the background, but he starts the finale.",
  RB:  "Fri May 22 — Frimpong back in training after the minor injury that kept him out at Villa Park and in contention to return; Slot's pre-match presser will firm it up. Gomez, who deputised at RB at Villa, is the cover, with Curtis Jones floated as a makeshift option in some predicted XIs.",
  LDM: "Fri May 22 — Gravenberch continues as the most reliable midfielder Liverpool have after anchoring the double-pivot at Villa Park. Partners Mac Allister at the base of the 4-2-3-1.",
  RDM: "Fri May 22 — Mac Allister completed 90 minutes at Villa and partners Gravenberch in the double-pivot. Contract talks have reportedly slowed, with no resolution expected before the season ends.",
  LAM: "Fri May 22 — Gakpo expected to keep the left after 90 minutes at Villa Park. He starts the finale ahead of Chiesa despite reported FSG willingness to sanction a summer sale to fund the wide rebuild.",
  CAM: "Fri May 22 — Wirtz projected to start the Brentford finale, recovered from the illness that limited him to a Villa Park cameo. Slot is likely to want the German's creativity for the farewell; Szoboszlai could shift central if Slot rotates.",
  RAM: "Fri May 22 — Mohamed Salah's Anfield farewell start is expected, with the club's 'Salah: Farewell to the King' tribute film out today and a Kop mosaic planned for matchday. The Egyptian has vowed to 'give everything' for Champions League qualification; a handful of pundit XIs still float a bench role, but a send-off start in front of the Kop is the strong expectation.",
  ST:  "Fri May 22 — Alexander Isak back in training after the minor injury that ruled him out at Villa Park; Slot says he 'definitely has a chance' for the finale but offers no guarantees. If not cleared at Friday's presser, 17-year-old Rio Ngumoha — who led the line at Villa — starts again.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the projected shape for the Brentford home finale May 24).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · started 3 in a row including Villa Park · keeps the shirt if Alisson isn't cleared" }, { playerId: 27, reason: "Woodman · third-choice cover" }],
  LB:  [{ playerId: 7, reason: "Kerkez · fit first-pick LB · starts if Slot opts against a Robertson send-off start" }],
  LCB: [{ playerId: 5, reason: "Gomez · deputised at RB vs Villa · could shuffle to LCB in extremis" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB · live starter only if Konaté has a setback" }],
  RB:  [{ playerId: 5, reason: "Gomez · backup if Frimpong isn't fit · started at RB at Villa" }, { playerId: 16, reason: "Curtis Jones · floated as a makeshift right-back in some predicted XIs" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap with Gravenberch in the double-pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could swap depths with Mac Allister" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · led the line at Villa · could shift wide if Isak starts" }, { playerId: 26, reason: "Chiesa · senior winger option · possible Anfield farewell" }],
  CAM: [{ playerId: 15, reason: "Szoboszlai · could shift centrally if Slot rotates · 9 league assists this term" }, { playerId: 16, reason: "Curtis Jones · started the attacking three at Villa · alternative #10" }],
  RAM: [{ playerId: 16, reason: "Curtis Jones · started attacking three at Villa · alternative wide option" }, { playerId: 26, reason: "Chiesa · possible Anfield farewell winger option" }],
  ST:  [{ playerId: 25, reason: "Ngumoha · led the line at Villa · plug-and-play replacement if Isak isn't fit" }, { playerId: 22, reason: "Gakpo · false-9 option · used by Slot in earlier matches" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Fri May 22 (Friday-morning refresh) — projected Liverpool XI for the Brentford home finale on Sun May 24, the season's last match. The XI carries over from the side beaten 4-2 at Villa Park on May 15, but confidence is LOW: this is a farewell occasion with the Champions League place all but secured (Opta 99.65%), so sentiment selection and rotation are in play. Andy Robertson is tipped to start his Anfield send-off at left-back ahead of the fit Milos Kerkez; the GK, RB and ST slots all hinge on Slot's Friday pre-match presser, with Alisson (back in training, named in Brazil's World Cup squad), Frimpong (minor injury) and Isak ('definitely has a chance') all still to be confirmed. Pundit predicted XIs diverge — some bench Salah, some deploy Curtis Jones as a makeshift right-back — and the manager-vs-talisman backdrop, with FSG reportedly weighing Slot's future against Andoni Iraola, adds further uncertainty.",
  pundit_sources: ["Liverpool FC", "Liverpool.com", "This Is Anfield", "Sky Sports", "ESPN", "Football365", "TeamTalk", "The Athletic", "Yahoo Sports", "The 4th Official", "OneFootball", "Tribuna", "Caught Offside", "Anfield Watch", "Empire of the Kop", "Goal.com", "NBC Sports", "Opta Analyst"],
  agreement_rate: 0.6,
  generated_at: "2026-05-22T09:00:00Z",
};
