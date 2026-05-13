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
    // 8pm BST (Sky Sports). Updated Wed May 13. Liverpool.com's Wed lead
    // 'Liverpool could be without EIGHT players against Aston Villa' confirms
    // Salah and Alisson STILL not in full team training Wed — both stay on the
    // unavailable list two days from kickoff. VVD's Sat cramp fully behind him.
    // Wirtz still managed back from the stomach infection (late call). Isak's
    // bench cameo Sat trails a first start back. Konaté's contract 'stalemate'
    // (Liverpool.com Wed) does not change his on-pitch availability. Confirmed
    // Chelsea XI Sat was Mamardashvili; Jones (RB), Konaté, VVD, Kerkez;
    // Szoboszlai, Gravenberch, Mac Allister; Ngumoha, Gakpo (false 9), Frimpong
    // (per TIA / EotK / LFC.com).
    defaultXI: {
      GK: 2,    // Mamardashvili (3rd straight start · Alisson still NOT in full training Wed)
      LB: 7,    // Kerkez (replaced Robertson for Chelsea XI · LB locked in for Villa)
      LCB: 3,   // Van Dijk (captain · cramp fully behind him · full session Wed)
      RCB: 4,   // Konaté (90 mins vs Chelsea · contract 'stalemate' but fit & locked in)
      RB: 16,   // Curtis Jones (Trent-redux RB · still nailed on per LFC.com Wed)
      LCM: 13,  // Mac Allister (90 mins vs Chelsea · midfield three)
      CM: 14,   // Gravenberch (SCORED 6' vs Chelsea · curled finish off Ngumoha assist)
      RCM: 15,  // Szoboszlai (90 mins vs Chelsea · engine of run-in)
      LW: 25,   // Ngumoha (started + assisted Gravenberch's opener · pushes again with Salah out)
      ST: 23,   // Isak (only natural No. 9 fit · Salah/Ekitike unavailable)
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
    // Updated Wed May 13 — mirrors the 4-3-3 picks with Wirtz dropped back into
    // the No. 10 pocket if his stomach infection clears (still late call per
    // Liverpool.com's Wed '8 out' read); Ngumoha and Szoboszlai widening into
    // LAM/RAM, Isak as the lone striker. VVD fully cleared and locked in.
    defaultXI: {
      GK: 2,    // Mamardashvili (3rd straight start · Alisson still NOT in training Wed)
      LB: 7,    // Kerkez (Chelsea LB · locked in)
      LCB: 3,   // Van Dijk (captain · cramp fully behind him · full session Wed)
      RCB: 4,   // Konaté (CB pairing settled · contract stalemate noise)
      RB: 16,   // Curtis Jones (Trent-redux RB · no alternative)
      LDM: 14,  // Gravenberch (scored 6' vs Chelsea · ball-winner)
      RDM: 13,  // Mac Allister (90 mins Chelsea · Real Madrid noise but starts)
      LAM: 25,  // Ngumoha (started + assisted Chelsea opener)
      CAM: 15,  // Szoboszlai pulled centrally (Wirtz still doubtful Wed)
      RAM: 9,   // Frimpong (started Chelsea right · cover for Wirtz absence)
      ST: 23,   // Isak (cameo Sat · first start back vs Villa · only natural No. 9 fit)
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
    // away from home. Updated Wed May 13 — VVD's cramp fully behind him, so
    // the captain anchors the back three at CCB with Konaté RCB and Gomez LCB.
    // Kerkez and Jones as wing-backs. Jacquet remains deputy if anything new
    // emerges before kickoff.
    defaultXI: {
      GK: 2,    // Mamardashvili (3rd straight start · Alisson still NOT in training Wed)
      LCB: 5,   // Gomez (tucks in alongside VVD · 'we'll see' Wed exit interview)
      CCB: 3,   // Van Dijk (captain · cramp behind him · anchors the back three)
      RCB: 4,   // Konaté (contract stalemate Wed but fit)
      LWB: 7,   // Kerkez (Chelsea LB · slides up as LWB)
      LCM: 14,  // Gravenberch (scored 6' Chelsea · 7/10)
      RCM: 13,  // Mac Allister (90 mins Chelsea · Real Madrid noise)
      RWB: 16,  // Curtis Jones at RWB (RB Sat · still in role)
      LW: 25,   // Ngumoha (started + assisted Sat)
      ST: 23,   // Isak (first start back · only natural No. 9 fit)
      RW: 9,    // Frimpong (started Chelsea right · cover for doubtful Wirtz)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-13.
export const PLAYER_EVIDENCE = {
  1:  "Still NOT in full training Wed · Juve closing",    // Alisson
  2:  "3rd straight start in goal · locked in Villa",     // Mamardashvili
  3:  "Cramp behind him · full session Wed",              // Van Dijk
  4:  "Wed: contract 'stalemate' · still starts",         // Konaté
  5:  "Wed: 'anything can happen … we'll see'",           // Gomez
  6:  "Confirmed summer exit · bench Sat",                // Robertson
  7:  "Started Chelsea at LB · locked in Villa",          // Kerkez
  8:  "Knee surgery · out for season",                    // Bradley
  9:  "Started Chelsea on RW · holds the slot",           // Frimpong
  10: "Torn ACL · out for season",                        // Leoni
  11: "Deputy CB · cover only",                           // Jacquet
  12: "Academy depth · 2 senior apps",                    // Ndukwe
  13: "90 mins Chelsea · Real Madrid noise",              // Mac Allister
  14: "SCORED 6' vs Chelsea · 7/10",                      // Gravenberch
  15: "90 mins Chelsea · engine of run-in",               // Szoboszlai
  16: "Wed: still nailed-on RB for Villa",                // Jones
  17: "Ankle surgery · out for season",                   // Endo
  18: "Stomach infection · still doubtful Wed",           // Wirtz
  19: "Hamstring · yet to play this season",              // Bajcetic
  20: "Academy prospect · 5 senior apps",                 // Nyoni
  21: "Wed: still out of full team training",             // Salah
  22: "Wed: FSG green-light Gakpo sale talk",             // Gakpo
  23: "Bench cameo Sat · first start back vs Villa",      // Isak
  24: "Ruptured Achilles · out 9-12 months",              // Ekitike
  25: "Started + assisted Chelsea · pushes again",        // Ngumoha
  26: "Bench Chelsea · 8-man clear-out list",             // Chiesa
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
  GK:  "High",   // Mamardashvili settled · started Chelsea · Alisson still NOT in training Wed
  LB:  "High",   // Kerkez · started Chelsea (replacing Robertson) · locked in
  LCB: "High",   // Van Dijk · cramp fully behind him · full session Wed
  RCB: "High",   // Konaté · 90 mins Chelsea · contract stalemate but fit
  RB:  "High",   // Curtis Jones · Trent-redux RB · no other natural RB available
  LCM: "High",   // Mac Allister · 90 mins Chelsea
  CM:  "High",   // Gravenberch · scored 6' Chelsea
  RCM: "High",   // Szoboszlai · 90 mins · engine of run-in
  LW:  "Medium", // Ngumoha after his Anfield boos cameo · could yield to Salah if cleared late
  ST:  "Medium", // Isak first start back · could be Gakpo if Slot wants safer pick
  RW:  "Medium", // Frimpong settled · Wirtz still doubtful Wed
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-3-3).
export const SLOT_RATIONALE = {
  GK:  "Wed May 13 — Mamardashvili kept the gloves in Sat's 1-1 Chelsea Anfield draw (beaten only by Wes Fofana's deflection of Enzo Fernandez's 35' free-kick) and is locked in for a third straight start. Liverpool.com's Wed 'Liverpool could be without 8 players' read confirms Alisson STILL not in full team training Wed. Mamard the safe pick.",
  LB:  "Wed May 13 — Kerkez retains the LB shirt for Villa Park per Liverpool.com's Wed preview. Started Sat's 1-1 Chelsea Anfield draw replacing Robertson (This Is Anfield / Empire of the Kop / LFC.com). Robertson on the bench Sat, summer exit confirmed, and remains the rotation option only.",
  LCB: "Wed May 13 — Van Dijk through a full Wed session with the Saturday cramp episode now fully behind him. Captain locked in alongside Konaté for Villa Park; Gomez stays on bench cover after the Wed 'we'll see' exit interview.",
  RCB: "Wed May 13 — Konaté played all 90 in Sat's 1-1 Chelsea draw. Liverpool.com's Wed lead has the contract 'at stalemate' (sticking points on signing-on package + agent commissions) but the Frenchman is fit and locked in alongside the captain for Villa Park.",
  RB:  "Wed May 13 — Curtis Jones again at RB for Villa Park per Liverpool.com's Wed preview (Bradley still injured, no other natural RB available). Was 'hung out to dry' per Goal.com's Chelsea ratings as Cucurella found space, but Slot has no realistic alternative for Friday.",
  LCM: "Wed May 13 — Mac Allister completed 90 minutes in Sat's 1-1 Chelsea draw, anchoring the midfield three. Father Carlos confirmed Thu May 7: 'No contract talks have taken place' — Real Madrid credited with interest. Argentine starts at Villa Park.",
  CM:  "Wed May 13 — SCORED Sat's 6th-minute opener vs Chelsea (curled finish off Rio Ngumoha's left-wing assist) · 7/10 across This Is Anfield, Liverpool.com and Sky Sports' player-rating tables. Locks midfield for Villa Park.",
  RCM: "Wed May 13 — completed 90 minutes in Sat's 1-1 Chelsea Anfield draw, drifting between right-mid and the No. 10 pocket as Wirtz absented with a stomach infection. Engine of the run-in.",
  LW:  "Wed May 13 — STARTED Sat's 1-1 Chelsea Anfield draw and supplied the assist for Gravenberch's 6' opener (Liverpool.com headline 'Rio Ngumoha stars'). His 75' substitution drew loud boos and is now the cited flashpoint of the fan-Slot disconnect (Bentley quote Wed). Pushes for another start at Villa Park with Salah still not in full team training Wed.",
  ST:  "Wed May 13 — Isak came off the bench in Sat's 1-1 Chelsea Anfield draw, his first minutes since the Apr 25 Crystal Palace muscle issue. Liverpool.com's Wed preview slots him into the XI with Gakpo dropping to the wing — Salah and Ekitike both unavailable, leaving Isak the only natural No. 9 fit.",
  RW:  "Wed May 13 — Frimpong started Sat's 1-1 Chelsea Anfield draw on the right side of the front three and is the safer pick for Villa Park. Wirtz remains a doubt with the stomach infection per Liverpool.com's Wed '8 out' read; until he clears, Frimpong holds the slot.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-3-3.
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · STILL not in full team training Wed per Liverpool.com — Brentford home finale May 24 is realistic earliest return" }, { playerId: 27, reason: "Woodman · stayed on the bench Sat with Mamard back" }],
  LB:  [{ playerId: 6, reason: "Robertson · bench Sat after losing LB to Kerkez · summer exit confirmed · could rotate back in if Slot manages Kerkez" }],
  LCB: [{ playerId: 5, reason: "Gomez · 'we'll see' Wed exit interview · returns to bench cover now VVD's cramp has cleared" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB · live starter only if Konaté has a setback" }, { playerId: 5, reason: "Gomez · senior alternative" }],
  RB:  [{ playerId: 9, reason: "Frimpong · natural RB if Slot wants Wirtz back centrally and Curtis Jones inside" }],
  LCM: [{ playerId: 14, reason: "Gravenberch · could swap to LCM if Slot wants Mac Allister deeper" }],
  CM:  [{ playerId: 13, reason: "Mac Allister · could drop deeper if Slot wants Gravenberch higher" }],
  RCM: [{ playerId: 13, reason: "Mac Allister · could shift right if Szoboszlai is rested" }],
  LW:  [{ playerId: 21, reason: "Salah · still NOT in full team training Wed per Liverpool.com '8 out' read — outside chance for Villa Park" }, { playerId: 26, reason: "Chiesa · senior winger option if Slot rests Ngumoha" }],
  ST:  [{ playerId: 22, reason: "Gakpo · played as false-9 vs Chelsea but 'goes missing' per LFC.com" }, { playerId: 25, reason: "Ngumoha · youngest-ever PL Anfield scorer · could play centrally" }],
  RW:  [{ playerId: 18, reason: "Wirtz · still doubtful per Liverpool.com's Wed '8 out' read — would push Frimpong out if cleared" }, { playerId: 21, reason: "Salah · 'close' return · but more likely on the left if/when he plays" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "High",
  reason: "Wed May 13 — two days from Villa Park kickoff, Liverpool.com's Wed lead 'Liverpool could be without EIGHT players against Aston Villa' confirms the shape of the XI: Salah, Alisson, Wirtz (doubtful) all still NOT in full team training, on top of long-term injuries to Ekitike, Bradley, Endo, Leoni, Bajcetic. With 10 of the 11 effectively forced (back four locked, Mamardashvili the obvious GK, midfield three settled, Isak the only natural No. 9 fit, Ngumoha and Frimpong covering the wings), confidence stays HIGH. Only the RW slot (Wirtz late-call) carries genuine variance.",
  pundit_sources: ["Liverpool FC", "Liverpool.com", "This Is Anfield", "Caught Offside", "Sky Sports", "Goal.com", "AP / Washington Post", "Empire of the Kop", "ESPN", "FootballTransfers", "GiveMeSport", "SportBible", "Anfield Index", "Premier League", "Yahoo Sports", "RTÉ", "Football365", "TeamTalk", "OneFootball"],
  agreement_rate: 0.84,
  generated_at: "2026-05-13T18:00:00Z",
};
