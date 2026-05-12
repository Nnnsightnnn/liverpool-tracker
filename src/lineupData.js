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
    // 8pm BST (Sky Sports). Updated Tue May 12 morning, post Slot's pre-Villa
    // press conference at the AXA. VVD's Sat cramp has CLEARED (Liverpool.com
    // Tue) and the captain is back in normal training — restored to LCB.
    // Salah and Alisson 'very, very, very close' but neither yet in full team
    // sessions on Tuesday: still listed as recovering. Wirtz still managed back
    // from the stomach infection (late call). Isak's bench cameo Sat trails a
    // first start back. Confirmed Chelsea XI Sat was Mamardashvili; Jones (RB),
    // Konaté, VVD, Kerkez; Szoboszlai, Gravenberch, Mac Allister; Ngumoha,
    // Gakpo (false 9), Frimpong (per TIA / EotK / LFC.com).
    defaultXI: {
      GK: 2,    // Mamardashvili (started Chelsea · keeps the gloves while Alisson still out of training)
      LB: 7,    // Kerkez (replaced Robertson for Chelsea XI · LB locked in for Villa)
      LCB: 3,   // Van Dijk (captain · Sat cramp cleared, back in training Tue · restored to XI)
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
    // Updated Tue May 12 — mirrors the 4-3-3 picks with Wirtz dropped back into
    // the No. 10 pocket if his stomach infection clears (still late call);
    // Ngumoha and Szoboszlai widening into LAM/RAM, Isak as the lone striker.
    // VVD's Sat cramp cleared overnight — restored to LCB.
    defaultXI: {
      GK: 2,    // Mamardashvili (started Chelsea · keeps the gloves)
      LB: 7,    // Kerkez (Chelsea LB · locked in)
      LCB: 3,   // Van Dijk (captain · cramp cleared, back in training Tue)
      RCB: 4,   // Konaté (CB pairing settled)
      RB: 16,   // Curtis Jones (Trent-redux RB)
      LDM: 14,  // Gravenberch (scored 6' vs Chelsea · ball-winner)
      RDM: 13,  // Mac Allister (90 mins Chelsea · contract noise but starts)
      LAM: 25,  // Ngumoha (started + assisted Chelsea opener)
      CAM: 15,  // Szoboszlai pulled centrally (Wirtz doubt with stomach infection)
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
    // away from home. Updated Tue May 12 — VVD's cramp cleared overnight, so
    // the captain anchors the back three at CCB with Konaté RCB and Gomez LCB.
    // Kerkez and Jones as wing-backs. Jacquet remains deputy if anything new
    // emerges this week.
    defaultXI: {
      GK: 2,    // Mamardashvili (started Chelsea · keeps the gloves)
      LCB: 5,   // Gomez (tucks in alongside VVD · senior cover)
      CCB: 3,   // Van Dijk (captain · cramp cleared, anchors the back three)
      RCB: 4,   // Konaté
      LWB: 7,   // Kerkez (Chelsea LB · slides up as LWB)
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
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-12.
export const PLAYER_EVIDENCE = {
  1:  "Not in training Tue · Juventus closing",           // Alisson
  2:  "Started Chelsea · gloves locked in Villa",         // Mamardashvili
  3:  "Cramp cleared · back in training Tue",             // Van Dijk
  4:  "90 mins Chelsea · CB pair restored",               // Konaté
  5:  "Bench cover · 'hurt' by boos quote Mon",           // Gomez
  6:  "Lost LB to Kerkez · bench for Chelsea",            // Robertson
  7:  "Started Chelsea at LB · locked in Villa",          // Kerkez
  8:  "Knee surgery · out for season",                    // Bradley
  9:  "Started Chelsea on RW · 6/10",                     // Frimpong
  10: "Torn ACL · out for season",                        // Leoni
  11: "Deputy CB · cover only",                           // Jacquet
  12: "Academy depth · 2 senior apps",                    // Ndukwe
  13: "90 mins Chelsea · contract talks declined",        // Mac Allister
  14: "SCORED 6' vs Chelsea · 7/10",                      // Gravenberch
  15: "90 mins Chelsea · engine of run-in",               // Szoboszlai
  16: "Started Chelsea at RB · 'hung out to dry'",        // Jones
  17: "Ankle surgery · out for season",                   // Endo
  18: "Stomach infection · late call for Villa",          // Wirtz
  19: "Hamstring · yet to play this season",              // Bajcetic
  20: "Academy prospect · 5 senior apps",                 // Nyoni
  21: "'Very, very close' but not yet training",          // Salah
  22: "Started Chelsea · 'goes missing' (LFC.com)",       // Gakpo
  23: "Bench cameo Sat · first start back vs Villa",      // Isak
  24: "Ruptured Achilles · out 9-12 months",              // Ekitike
  25: "Started + assisted Chelsea · 'stars' (LFC.com)",   // Ngumoha
  26: "Bench Chelsea · likely summer exit",               // Chiesa
  27: "Bench Chelsea · Mamard ahead of him",              // Woodman
};

// Default formation when entering the view — Slot has run a 4-3-3 through the
// run-in and Villa Park looks no different given the squeeze on attackers.
export const DEFAULT_FORMATION = "4-3-3";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-3-3).
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Mamardashvili settled · started Chelsea · Alisson still not in training Tue
  LB:  "High",   // Kerkez · started Chelsea (replacing Robertson) · locked in
  LCB: "High",   // Van Dijk · cramp cleared, back in training Tue · restored
  RCB: "High",   // Konaté · 90 mins Chelsea · CB pair settled
  RB:  "High",   // Curtis Jones · Trent-redux RB · started Chelsea
  LCM: "High",   // Mac Allister · 90 mins Chelsea
  CM:  "High",   // Gravenberch · scored 6' Chelsea
  RCM: "High",   // Szoboszlai · 90 mins · engine of run-in
  LW:  "Medium", // Ngumoha after his Anfield boos cameo · could yield to Salah if cleared
  ST:  "Medium", // Isak first start back · could be Gakpo if Slot wants safer pick
  RW:  "Medium", // Frimpong settled · Wirtz return from stomach infection still doubtful
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-3-3).
export const SLOT_RATIONALE = {
  GK:  "Tue May 12 — Mamardashvili kept the gloves in Sat's 1-1 Chelsea Anfield draw (beaten only by Wes Fofana's deflection of Enzo Fernandez's 35' free-kick) and is set to retain. Slot's pre-Villa press conference Tue confirmed Alisson 'doesn't train with the team yet' — still touch-and-go. Mamard locked in.",
  LB:  "Tue May 12 — Kerkez started at LB for Sat's 1-1 Chelsea Anfield draw, replacing Robertson per the confirmed XI (This Is Anfield / Empire of the Kop / LFC.com). Slot likely retains him for the Villa Park trip. Robertson on the bench Sat and remains the rotation option.",
  LCB: "Tue May 12 — CRAMP CLEARED: Van Dijk's Saturday cramp passed overnight per Liverpool.com's Tuesday injury read. The captain is back in normal training Mon-Tue and restored to the XI for Villa Park; Gomez slides back to bench cover.",
  RCB: "Tue May 12 — Konaté played all 90 in Sat's 1-1 Chelsea draw. With VVD restored to the XI, CB pairing settled. Real Madrid contract noise still in the background but the Frenchman is locked in alongside the captain for the Villa Park trip.",
  RB:  "Tue May 12 — Curtis Jones again at RB in Sat's 1-1 Chelsea draw and Goal.com flagged him 'hung out to dry' as Cucurella found space. Off-pitch FootballTransfers / GiveMeSport reports Reds in 'advanced talks' for Wharton (£80m Palace) — Wharton 'understood to favour' Anfield. On the pitch though, Slot has no realistic alternative for Villa.",
  LCM: "Tue May 12 — Mac Allister completed 90 minutes in Sat's 1-1 Chelsea draw, anchoring the midfield three. Father Carlos confirmed Thu May 7: 'No contract talks have taken place' — Real Madrid credited with interest, but the Argentine starts at Villa Park.",
  CM:  "Tue May 12 — SCORED Sat's 6th-minute opener vs Chelsea (curled finish off Rio Ngumoha's left-wing assist) · 7/10 across This Is Anfield, Liverpool.com and Sky Sports' player-rating tables. Locks midfield for Villa Park.",
  RCM: "Tue May 12 — completed 90 minutes in Sat's 1-1 Chelsea Anfield draw, drifting between right-mid and the No. 10 pocket as Wirtz absented with a stomach infection. Engine of the run-in.",
  LW:  "Tue May 12 — STARTED Sat's 1-1 Chelsea Anfield draw and supplied the assist for Gravenberch's 6' opener. Liverpool.com headline: 'Rio Ngumoha stars.' Hooked at 75' with cramp; the substitution drew loud boos from the Anfield crowd. Pushes for another start at Villa Park if Salah isn't ready (Salah still not in full team training Tue).",
  ST:  "Tue May 12 — Isak came off the bench in the second half of Sat's 1-1 Chelsea Anfield draw, his first minutes since the Apr 25 Crystal Palace muscle issue. Liverpool.com expects Isak to start at Villa Park as the confidence-builder cashes in, with Gakpo dropping to the wing.",
  RW:  "Tue May 12 — Frimpong started Sat's 1-1 Chelsea Anfield draw on the right side of the front three and is the safer pick for Villa Park. Wirtz remains a doubt with the stomach infection per Liverpool.com's Tuesday injury read; until he clears, Frimpong holds the slot.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-3-3.
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · 'very, very close' but still NOT in full team training Tue per Slot's presser — outside chance for Villa Park" }, { playerId: 27, reason: "Woodman · stayed on the bench Sat with Mamard back" }],
  LB:  [{ playerId: 6, reason: "Robertson · bench Sat after losing LB to Kerkez · could rotate back in if Slot manages Kerkez's legs" }],
  LCB: [{ playerId: 5, reason: "Gomez · unused Chelsea bench · LEAD VOICE Mon on Anfield boos · returns to bench cover now VVD's cramp has cleared" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB · live starter only if Konaté has a setback" }, { playerId: 5, reason: "Gomez · senior alternative" }],
  RB:  [{ playerId: 9, reason: "Frimpong · natural RB if Slot wants Wirtz back centrally and Curtis Jones inside" }],
  LCM: [{ playerId: 14, reason: "Gravenberch · could swap to LCM if Slot wants Mac Allister deeper" }],
  CM:  [{ playerId: 13, reason: "Mac Allister · could drop deeper if Slot wants Gravenberch higher" }],
  RCM: [{ playerId: 13, reason: "Mac Allister · could shift right if Szoboszlai is rested" }],
  LW:  [{ playerId: 21, reason: "Salah · 'very, very, very close' but not in training Tue — outside chance for Villa Park on his preferred side" }, { playerId: 26, reason: "Chiesa · senior winger option if Slot rests Ngumoha" }],
  ST:  [{ playerId: 22, reason: "Gakpo · played as false-9 vs Chelsea but 'goes missing' per LFC.com" }, { playerId: 25, reason: "Ngumoha · youngest-ever PL Anfield scorer · could play centrally" }],
  RW:  [{ playerId: 18, reason: "Wirtz · still being managed back from the stomach infection per Tue Liverpool.com — would push Frimpong out if cleared" }, { playerId: 21, reason: "Salah · 'close' return · but more likely on the left if/when he plays" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "High",
  reason: "Tue May 12 — Slot's pre-Villa press conference at the AXA Tue 9am BST cleared the biggest doubt: Van Dijk's Saturday cramp has passed and the captain is back in normal training (Liverpool.com Tue). With 10 of the 11 settled (back four, Mamard, midfield three, Ngumoha, Isak, Frimpong) and only the RW slot soft (Wirtz late-call on stomach infection), confidence rises to HIGH. Salah and Alisson 'very, very, very close' but neither has yet rejoined full team sessions Tue — both stay listed as recovering.",
  pundit_sources: ["Liverpool FC", "Liverpool.com", "This Is Anfield", "Caught Offside", "Sky Sports", "Goal.com", "AP / Washington Post", "Empire of the Kop", "ESPN", "FootballTransfers", "GiveMeSport", "SportBible", "Anfield Index", "Premier League"],
  agreement_rate: 0.82,
  generated_at: "2026-05-12T13:30:00Z",
};
