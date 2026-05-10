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
    // IDs from playerData.js — Slot's likely XI for Aston Villa (A), Fri May 15
    // 8pm BST (Sky Sports). Updated Sun May 10 morning, post-Chelsea (1-1 H).
    // Mamardashvili kept the gloves yesterday and is set to retain (Alisson
    // 'close' to a return per Liverpool.com but not yet matchday-fit). Konaté
    // and VVD start; Jones still at RB (Trent-redux); Robertson at LB. Wirtz
    // was OUT yesterday with a stomach infection — listed doubtful, so Frimpong
    // holds the right of the front three (Saturday's starter). Isak played 30+
    // minutes off the bench yesterday — first XI start expected. Salah 'close
    // to coming back' but Brentford May 24 is the firmer target — Ngumoha
    // continues on the LW after his Anfield assist + 75' boos cameo.
    defaultXI: {
      GK: 2,    // Mamardashvili (started Chelsea · keeps the gloves while Alisson builds back)
      LB: 6,    // Robertson (started Chelsea · LB anchor for the away trip)
      LCB: 3,   // Van Dijk (captain · 90 mins vs Chelsea)
      RCB: 4,   // Konaté (90 mins vs Chelsea · CB pairing settled)
      RB: 16,   // Curtis Jones (Trent-redux RB · started Chelsea · still nailed on)
      LCM: 13,  // Mac Allister (90 mins vs Chelsea · midfield three)
      CM: 14,   // Gravenberch (SCORED 6' vs Chelsea · curled finish off Ngumoha assist)
      RCM: 15,  // Szoboszlai (90 mins vs Chelsea · engine of run-in)
      LW: 25,   // Ngumoha (started + assisted Gravenberch's opener · hooked at 75' to boos)
      ST: 23,   // Isak (off the bench Saturday for first minutes since Apr 25 · expected start)
      RW: 9,    // Frimpong (started Chelsea on the right · safer pick than doubtful Wirtz)
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
    // Slot's likely XI for Aston Villa (A) Fri May 15 in his secondary 4-2-3-1.
    // Updated Sun May 10 — mirrors the 4-3-3 picks with Wirtz dropped back into
    // the No. 10 pocket (his natural creative role) if Slot reverts; Ngumoha
    // and Szoboszlai widening into LAM/RAM, Isak as the lone striker.
    defaultXI: {
      GK: 2,    // Mamardashvili (started Chelsea · keeps the gloves)
      LB: 6,    // Robertson (started Chelsea)
      LCB: 3,   // Van Dijk (captain)
      RCB: 4,   // Konaté (CB pairing settled)
      RB: 16,   // Curtis Jones (Trent-redux RB)
      LDM: 14,  // Gravenberch (scored 6' vs Chelsea · ball-winner)
      RDM: 13,  // Mac Allister (90 mins Chelsea · contract noise but starts)
      LAM: 25,  // Ngumoha (started + assisted Chelsea opener)
      CAM: 15,  // Szoboszlai pulled centrally (Wirtz doubtful with stomach infection)
      RAM: 9,   // Frimpong (started Chelsea right · cover for Wirtz absence)
      ST: 23,   // Isak (cameo Sat · first start back vs Villa)
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
    // Hypothetical 3-4-3 alternative for Villa Park if Slot wants extra cover
    // away from home: Kerkez tucks in as LCB, Robertson and Jones as wing-backs.
    defaultXI: {
      GK: 2,    // Mamardashvili (started Chelsea · keeps the gloves)
      LCB: 7,   // Kerkez tucking in (bench Sat but available for LCB rotation)
      CCB: 3,   // Van Dijk (captain · anchors the back three)
      RCB: 4,   // Konaté
      LWB: 6,   // Robertson (LB Sat · slides up as LWB)
      LCM: 14,  // Gravenberch (scored 6' Chelsea · 7/10)
      RCM: 13,  // Mac Allister (90 mins Chelsea · contract noise)
      RWB: 16,  // Curtis Jones at RWB (RB Sat · still in role)
      LW: 25,   // Ngumoha (started + assisted Sat)
      ST: 23,   // Isak (first start back from Apr 25 muscle issue)
      RW: 9,    // Frimpong (started Chelsea right · cover for doubtful Wirtz)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-10.
export const PLAYER_EVIDENCE = {
  1:  "'Close' return · chance for Villa Park",          // Alisson
  2:  "Started Chelsea (1-1) · keeps gloves",            // Mamardashvili
  3:  "90 mins Chelsea · captain",                       // Van Dijk
  4:  "90 mins Chelsea · CB pair settled",               // Konaté
  5:  "Unused Chelsea bench · likely summer exit",       // Gomez
  6:  "Started Chelsea at LB · retains for Villa",       // Robertson
  7:  "Bench Chelsea · rotation option",                 // Kerkez
  8:  "Knee surgery · out for season",                   // Bradley
  9:  "Started Chelsea · RW makeshift attacker",         // Frimpong
  10: "Torn ACL · out for season",                       // Leoni
  11: "Deputy CB · cover only",                          // Jacquet
  12: "Academy depth · 2 senior apps",                   // Ndukwe
  13: "90 mins Chelsea · contract talks declined",       // Mac Allister
  14: "SCORED 6' vs Chelsea · 7/10",                     // Gravenberch
  15: "90 mins Chelsea · engine of run-in",              // Szoboszlai
  16: "Started Chelsea at RB · 'hung out to dry'",       // Jones
  17: "Ankle surgery · out for season",                  // Endo
  18: "Stomach infection Sat · Slot 'hopeful' Villa",    // Wirtz
  19: "Hamstring · yet to play this season",             // Bajcetic
  20: "Academy prospect · 5 senior apps",                // Nyoni
  21: "'Close to coming back' · chance for Villa",       // Salah
  22: "Started Chelsea · 'goes missing' (Goal.com)",     // Gakpo
  23: "Bench cameo Sat · first start back vs Villa",     // Isak
  24: "Ruptured Achilles · out 9-12 months",             // Ekitike
  25: "Started + assisted Chelsea · stars (LFC.com)",    // Ngumoha
  26: "Bench Chelsea · likely summer exit",              // Chiesa
  27: "Bench Chelsea · Mamard ahead of him",             // Woodman
};

// Default formation when entering the view — Slot has run a 4-3-3 through the
// run-in and Villa Park looks no different given the squeeze on attackers.
export const DEFAULT_FORMATION = "4-3-3";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-3-3).
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Mamardashvili settled · started Chelsea · Alisson 'close' but not back
  LB:  "High",   // Robertson · started Chelsea · LB anchor
  LCB: "High",   // Van Dijk captain · 90 mins Chelsea
  RCB: "High",   // Konaté · 90 mins Chelsea · CB pair settled
  RB:  "High",   // Curtis Jones · Trent-redux RB · started Chelsea
  LCM: "High",   // Mac Allister · 90 mins Chelsea
  CM:  "High",   // Gravenberch · scored 6' Chelsea
  RCM: "High",   // Szoboszlai · 90 mins · engine of run-in
  LW:  "Medium", // Ngumoha after his Anfield boos cameo · could yield to Salah/Wirtz
  ST:  "Medium", // Isak first start back · could be Gakpo if Slot wants safer pick
  RW:  "Medium", // Frimpong settled · Wirtz return from stomach infection still doubtful
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-3-3).
export const SLOT_RATIONALE = {
  GK:  "Sun May 10 — Mamardashvili kept the gloves in yesterday's 1-1 Chelsea Anfield draw, beaten only by Wes Fofana's deflection of Enzo Fernandez's 35' free-kick. Alisson 'close to coming back' per Liverpool.com's morning round-up — Slot acknowledged a chance for Villa Park, but the Brazilian has yet to resume team training. Mamard retains.",
  LB:  "Sun May 10 — Robertson restored at LB for yesterday's 1-1 Chelsea draw after the Old Trafford reshuffle and is set to keep the shirt for the away trip. Kerkez stayed on the bench Saturday and remains the rotation option. Tottenham agreement still summer-conditional on their PL fate.",
  LCB: "Captain · 90 mins in yesterday's 1-1 Chelsea Anfield draw alongside Konaté · The Athletic (Apr 30) reports VVD now expected to leave end of 2026-27",
  RCB: "Sun May 10 — Konaté played all 90 in the 1-1 Chelsea draw after the false-alarm 'personal reason' scare last week. CB pair with VVD settled for the run-in.",
  RB:  "Sun May 10 — Curtis Jones again at RB in yesterday's 1-1 Chelsea draw and Goal.com's player ratings flagged him 'hung out to dry' as Cucurella found space. Off-pitch the contract talks remain 'effectively ceased' (EOTK/Sky Sports) — but on-pitch Slot has no realistic alternative for the run-in.",
  LCM: "Sun May 10 — Mac Allister completed 90 minutes in yesterday's 1-1 Chelsea draw, anchoring the midfield three. Father Carlos confirmed Thu May 7: 'No contract talks have taken place' — Real Madrid credited with interest, but the Argentine starts at Villa Park.",
  CM:  "Sun May 10 — SCORED yesterday's 6th-minute opener vs Chelsea (curled finish off Rio Ngumoha's left-wing assist) · 7/10 across This Is Anfield, Liverpool.com and Sky Sports' player-rating tables. Locks midfield for Villa Park.",
  RCM: "Sun May 10 — completed 90 minutes in yesterday's 1-1 Chelsea Anfield draw, drifting between right-mid and the No. 10 pocket as Wirtz absented with a stomach infection. Engine of the run-in.",
  LW:  "Sun May 10 — STARTED yesterday's 1-1 Chelsea Anfield draw and supplied the assist for Gravenberch's 6' opener. Liverpool.com headline: 'Rio Ngumoha stars.' Hooked at 75' with cramp; the substitution drew loud boos from the Anfield crowd. Slot post-match: 'He said it was enough.' Pushes for another start at Villa Park if Salah isn't ready.",
  ST:  "Sun May 10 — came off the bench in the second half of yesterday's 1-1 Chelsea Anfield draw, his first minutes since the Apr 25 Crystal Palace muscle issue. Liverpool.com expects Isak to start at Villa Park as the confidence-builder cashes in.",
  RW:  "Sun May 10 — Frimpong started yesterday's 1-1 Chelsea Anfield draw on the right side of the front three and is the safer pick for Villa Park. Wirtz remains doubtful with the stomach infection; Slot was 'hopeful' but until he clears, Frimpong holds the slot.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-3-3.
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · 'close to coming back' (Liverpool.com Sun) — chance for Villa Park if he resumes full training this week" }, { playerId: 27, reason: "Woodman · stayed on the bench Sat with Mamard back" }],
  LB:  [{ playerId: 7, reason: "Kerkez · bench Sat · could rotate back in if Slot manages Robertson's legs through the run-in" }],
  LCB: [{ playerId: 5, reason: "Gomez · unused Chelsea bench · likely summer exit per Beukema link" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB · live starter only if Konaté has a setback" }, { playerId: 5, reason: "Gomez · senior alternative" }],
  RB:  [{ playerId: 9, reason: "Frimpong · natural RB if Slot wants Wirtz back centrally and Curtis Jones inside" }],
  LCM: [{ playerId: 14, reason: "Gravenberch · could swap to LCM if Slot wants Mac Allister deeper" }],
  CM:  [{ playerId: 13, reason: "Mac Allister · could drop deeper if Slot wants Gravenberch higher" }],
  RCM: [{ playerId: 13, reason: "Mac Allister · could shift right if Szoboszlai is rested" }],
  LW:  [{ playerId: 21, reason: "Salah · 'close to coming back' — chance for Villa Park return on his preferred side" }, { playerId: 26, reason: "Chiesa · senior winger option if Slot rests Ngumoha" }],
  ST:  [{ playerId: 22, reason: "Gakpo · played as false-9 vs Chelsea but 'goes missing' per Goal.com" }, { playerId: 25, reason: "Ngumoha · youngest-ever PL Anfield scorer · could play centrally" }],
  RW:  [{ playerId: 18, reason: "Wirtz · Slot 'hopeful' he returns from the stomach infection — would push Frimpong out if cleared" }, { playerId: 21, reason: "Salah · 'close' return · but more likely on the left if/when he plays" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "Sun May 10 — Liverpool drew 1-1 with Chelsea at Anfield yesterday and the Champions League wait goes on. Aston Villa (A) Fri May 15 8pm BST on Sky Sports is the next test, with Slot 'hopeful' Wirtz returns from his stomach infection and Isak set to start his first match since Apr 25 after a confidence-building bench cameo Saturday. Confidence MEDIUM because 8 of the 11 are settled (back four, GK, midfield three, Ngumoha) but the front three has rotation risk: Wirtz's return is contingent on the stomach infection clearing, and Salah may force his way back on the left if cleared.",
  pundit_sources: ["Liverpool.com", "This Is Anfield", "Sky Sports", "Goal.com", "AP / Washington Post", "Empire of the Kop", "ESPN", "Premier League"],
  agreement_rate: 0.78,
  generated_at: "2026-05-10T08:00:00Z",
};
