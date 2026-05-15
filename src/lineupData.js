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
    // 8pm BST (Sky Sports). Updated Fri May 15 (match day). Slot at the Thursday
    // presser kept Wirtz a kickoff call: 'Stomach infection, so let's see how
    // fit he is for tomorrow. He's on antibiotics.' Sportsmole and SI's
    // matchday previews still slot him at RW but headline the doubt; This Is
    // Anfield calls it the 'Frimpong decision & right-wing dilemma.' Salah is
    // 'available for only a few minutes' (FOX / Goal) — a bench cameo, not a
    // start. Mamardashvili keeps the gloves with Alisson only back in training
    // Thursday. Konaté trained Thursday and is fit. Long-term outs unchanged
    // (Ekitike Achilles, Bradley knee, Leoni ACL, Endo ankle, Bajcetic hammy).
    defaultXI: {
      GK: 2,    // Mamardashvili (3rd straight start · Alisson 'may need another week')
      LB: 7,    // Kerkez (Chelsea LB · locked in for Villa)
      LCB: 3,   // Van Dijk (captain · cramp behind him · full sessions Wed-Thu)
      RCB: 4,   // Konaté (Slot Thu: 'Ibou is OK, trained with us')
      RB: 16,   // Curtis Jones (Trent-redux RB · still nailed on per Sportsmole)
      LCM: 13,  // Mac Allister (90 mins vs Chelsea · midfield three)
      CM: 14,   // Gravenberch (SCORED 6' vs Chelsea · curled finish off Ngumoha assist)
      RCM: 15,  // Szoboszlai (90 mins vs Chelsea · engine of run-in)
      LW: 22,   // Gakpo (slides to LW per Sportsmole / SI preview as Isak returns up top)
      ST: 23,   // Isak (only natural No. 9 fit · Salah a brief sub, Ekitike out)
      RW: 18,   // Wirtz (Slot Thu: 'on antibiotics' but matchday previews still start him · Medium)
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
    // Slot's secondary 4-2-3-1 for Villa Park. Updated Fri May 15 (match day) —
    // Wirtz still 'on antibiotics' for the stomach infection so the CAM call
    // is between Wirtz (matchday-preview pick) and Szoboszlai (safer if Wirtz
    // is held back). We keep Wirtz at CAM matching the Sportsmole / SI preview
    // but flag the risk in SLOT_CONFIDENCE. Gakpo on the left, Ngumoha drops
    // to the bench/sub option. Double-pivot of Gravenberch + Mac Allister
    // holds. Back four unchanged.
    defaultXI: {
      GK: 2,    // Mamardashvili (3rd straight start · Alisson 'may need another week')
      LB: 7,    // Kerkez (Chelsea LB · locked in)
      LCB: 3,   // Van Dijk (captain · full sessions Wed-Thu)
      RCB: 4,   // Konaté (Slot Thu: 'Ibou is OK')
      RB: 16,   // Curtis Jones (Trent-redux RB · no alternative)
      LDM: 14,  // Gravenberch (scored 6' vs Chelsea · ball-winner)
      RDM: 13,  // Mac Allister (90 mins Chelsea · Real Madrid noise but starts)
      LAM: 22,  // Gakpo (drops to wide-left in 4-2-3-1 with Isak central)
      CAM: 18,  // Wirtz (doubt — Slot Thu: 'on antibiotics' but previews still start him)
      RAM: 15,  // Szoboszlai widens to RAM with Wirtz central (or moves to CAM if Wirtz out)
      ST: 23,   // Isak (first start back · only natural No. 9 fit)
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
    // away from home. Updated Fri May 15 (match day) — with Wirtz still 'on
    // antibiotics' per Slot's Thursday presser, Frimpong is the safer pick at
    // RW; Wirtz slots into the LW pocket if his fitness clears, otherwise
    // Ngumoha is the live alternative. Gomez tucks in alongside VVD with
    // Konaté at RCB. Kerkez and Jones as wing-backs.
    defaultXI: {
      GK: 2,    // Mamardashvili (3rd straight start · Alisson 'may need another week')
      LCB: 5,   // Gomez (tucks in alongside VVD · Wed exit interview noise)
      CCB: 3,   // Van Dijk (captain · cramp behind him · anchors the back three)
      RCB: 4,   // Konaté (Slot Thu: 'Ibou is OK')
      LWB: 7,   // Kerkez (Chelsea LB · slides up as LWB)
      LCM: 14,  // Gravenberch (scored 6' Chelsea · 7/10)
      RCM: 13,  // Mac Allister (90 mins Chelsea · Real Madrid noise)
      RWB: 16,  // Curtis Jones at RWB (RB Sat · still in role)
      LW: 22,   // Gakpo (slides wide-left with Isak central)
      ST: 23,   // Isak (first start back · only natural No. 9 fit)
      RW: 9,    // Frimpong (safer RW with Wirtz still on antibiotics)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-15.
export const PLAYER_EVIDENCE = {
  1:  "Back in training Thu · 'may need 1 more wk'",      // Alisson
  2:  "3rd straight start at Villa Park tonight",         // Mamardashvili
  3:  "Captain locked · Galatasaray exit ruled out",      // Van Dijk
  4:  "Slot Thu: 'Ibou is OK, trained with us'",          // Konaté
  5:  "Wed: 'anything can happen … we'll see'",           // Gomez
  6:  "Bench at Villa · Brentford farewell looms",        // Robertson
  7:  "Locked in LB at Villa Park · 90 mins Sat",         // Kerkez
  8:  "Knee surgery · out for season",                    // Bradley
  9:  "Safer RW pick with Wirtz on antibiotics",          // Frimpong
  10: "Torn ACL · out for season",                        // Leoni
  11: "Deputy CB · cover only",                           // Jacquet
  12: "Academy depth · 2 senior apps",                    // Ndukwe
  13: "Anchors midfield three at Villa tonight",          // Mac Allister
  14: "SCORED 6' vs Chelsea · curled finish",             // Gravenberch
  15: "Engine of run-in · 90 mins Chelsea",               // Szoboszlai
  16: "Trent-redux RB · no alternative at Villa",         // Jones
  17: "Ankle surgery · out for season",                   // Endo
  18: "Slot Thu: 'on antibiotics' · kickoff call",        // Wirtz
  19: "Hamstring · yet to play this season",              // Bajcetic
  20: "Academy prospect · 5 senior apps",                 // Nyoni
  21: "Slot Thu: 'available for a few minutes'",          // Salah
  22: "Slides to LW with Isak central at Villa",          // Gakpo
  23: "Returns up top after Sat bench cameo",             // Isak
  24: "Ruptured Achilles · out 9-12 months",              // Ekitike
  25: "Bench option after Chelsea boos · keeps fans onside", // Ngumoha
  26: "Bench at Villa · summer exit list",                // Chiesa
  27: "Bench at Villa · Mamard ahead of him",             // Woodman
};

// Default formation when entering the view — Slot has run a 4-3-3 through the
// run-in and Villa Park looks no different even with Wirtz a kickoff call.
export const DEFAULT_FORMATION = "4-3-3";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-3-3).
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Mamardashvili settled · Alisson only just back in training Thu
  LB:  "High",   // Kerkez · started Chelsea (replacing Robertson) · locked in
  LCB: "High",   // Van Dijk · full sessions Wed-Thu · cramp behind him
  RCB: "High",   // Konaté · Slot Thu: 'Ibou is OK, trained with us'
  RB:  "High",   // Curtis Jones · Trent-redux RB · no other natural RB available
  LCM: "High",   // Mac Allister · 90 mins Chelsea
  CM:  "High",   // Gravenberch · scored 6' Chelsea
  RCM: "High",   // Szoboszlai · 90 mins · engine of run-in
  LW:  "Medium", // Gakpo slides wide as Isak returns · Ngumoha the impact-sub
  ST:  "Medium", // Isak first start back · Gakpo could shift if Slot wants safer pick
  RW:  "Low",    // Wirtz still 'on antibiotics' · Frimpong the live alternative
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-3-3).
export const SLOT_RATIONALE = {
  GK:  "Fri May 15 (match day) — Mamardashvili keeps the gloves at Villa Park tonight for a third straight start. Slot at Thursday's presser: 'Alisson trains with us again, let's see where he is tomorrow, if he is ready already or has to wait one more week.' Brazilian back on grass but not yet starting; Mamard the safe pick.",
  LB:  "Fri May 15 (match day) — Kerkez retains the LB shirt for Villa Park tonight. Started Sat's 1-1 Chelsea Anfield draw replacing Robertson. Robertson on the bench Sat, summer exit looming, remains the rotation option only.",
  LCB: "Fri May 15 (match day) — Van Dijk through full Wed and Thu sessions with the Saturday cramp episode fully behind him. Liverpool.com Thursday: VVD's Galatasaray exit RULED OUT under a new rule — captain locked in alongside Konaté for Villa Park.",
  RCB: "Fri May 15 (match day) — Slot at Thursday's presser, picked up by Liverpool FC's official Friday readout: 'Ibou is OK, [he] trained with us.' Konaté came off Sat's Chelsea draw with a thigh complaint but cleared, locked in alongside the captain. Contract 'stalemate' (sticking points on signing-on package + agent commissions) hovers off-pitch but doesn't move the XI.",
  RB:  "Fri May 15 (match day) — Curtis Jones again at RB for Villa Park (Bradley still injured, no other natural RB available). Was 'hung out to dry' per Goal.com's Chelsea ratings as Cucurella found space, but Slot has no realistic alternative for tonight.",
  LCM: "Fri May 15 (match day) — Mac Allister completed 90 minutes in Sat's 1-1 Chelsea draw, anchoring the midfield three. Father Carlos last week: 'No contract talks have taken place' — Real Madrid credited with interest. Argentine starts at Villa Park.",
  CM:  "Fri May 15 (match day) — SCORED Sat's 6th-minute opener vs Chelsea (curled finish off Rio Ngumoha's left-wing assist) · 7/10 across This Is Anfield, Liverpool.com and Sky Sports' player-rating tables. Locks midfield for Villa Park.",
  RCM: "Fri May 15 (match day) — completed 90 minutes in Sat's 1-1 Chelsea Anfield draw, drifting between right-mid and the No. 10 pocket as Wirtz absented with the stomach infection. With Wirtz still on antibiotics, Szoboszlai keeps his right-mid berth as the engine of the run-in.",
  LW:  "Fri May 15 (match day) — Gakpo slides to LW in the Sportsmole / SI predicted XI now Isak returns up top. Led the line as false 9 in Sat's 1-1 Chelsea Anfield draw (5-6/10 ratings, 'goes missing' per Liverpool.com) so the shift wide may suit him better. Ngumoha is the live impact-sub.",
  ST:  "Fri May 15 (match day) — Isak came off the bench in Sat's 1-1 Chelsea Anfield draw, his first minutes since the Apr 25 Crystal Palace muscle issue. With Salah only 'available for a few minutes' (Slot, Thu) and Ekitike still out, Isak is the only natural No. 9 fit and slots into the XI; Gakpo drops to LW.",
  RW:  "Fri May 15 (match day) — Wirtz remains a DOUBT after Slot's Thursday presser confirmed he is still 'on antibiotics' for the stomach infection that ruled him out of Sat's Chelsea draw. Spotted in the AXA gym Thursday with teammates; Sportsmole and SI's matchday previews still slot him at RW but This Is Anfield headlines the 'Frimpong decision & right-wing dilemma.' Frimpong is the live alternative if Wirtz is late-cut.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-3-3.
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · back in training Thu but Slot says he 'may have to wait one more week' — Brentford home finale May 24 the realistic earliest return" }, { playerId: 27, reason: "Woodman · stayed on the bench Sat with Mamard back" }],
  LB:  [{ playerId: 6, reason: "Robertson · bench Sat after losing LB to Kerkez · summer exit looms · rotation option only" }],
  LCB: [{ playerId: 5, reason: "Gomez · 'we'll see' Wed exit interview · bench cover now VVD's cramp has cleared" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB · live starter only if Konaté has a setback" }, { playerId: 5, reason: "Gomez · senior alternative" }],
  RB:  [{ playerId: 9, reason: "Frimpong · natural RB if Slot wants Curtis Jones higher" }],
  LCM: [{ playerId: 14, reason: "Gravenberch · could swap to LCM if Slot wants Mac Allister deeper" }],
  CM:  [{ playerId: 13, reason: "Mac Allister · could drop deeper if Slot wants Gravenberch higher" }],
  RCM: [{ playerId: 13, reason: "Mac Allister · could shift right if Szoboszlai is rested" }],
  LW:  [{ playerId: 25, reason: "Ngumoha · started + assisted Sat · live impact-sub option" }, { playerId: 21, reason: "Salah · Slot Thu: 'available for a few minutes' — bench cameo, not a start" }, { playerId: 26, reason: "Chiesa · senior winger option" }],
  ST:  [{ playerId: 22, reason: "Gakpo · played as false-9 vs Chelsea but 'goes missing' per LFC.com — could re-centralise if Isak fades" }, { playerId: 25, reason: "Ngumoha · youngest-ever PL Anfield scorer · could play centrally" }],
  RW:  [{ playerId: 9, reason: "Frimpong · live alternative if Wirtz is late-cut · started Chelsea on the right" }, { playerId: 21, reason: "Salah · Slot Thu: 'available for a few minutes' — bench cameo only" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "Fri May 15 (match day) — hours before Villa Park kickoff, Slot's Thursday-presser update keeps Wirtz a kickoff call ('on antibiotics' for the stomach infection) — the Sportsmole and SI matchday XIs still slot him at RW but This Is Anfield calls it the 'Frimpong decision & right-wing dilemma.' Salah is 'available for only a few minutes' (FOX / Goal) so he's not in the start. Mamardashvili keeps the gloves with Alisson only back on grass Thursday; back four locked (Jones, Konate, Van Dijk, Kerkez); midfield three settled (Gravenberch, Mac Allister, Szoboszlai); Isak returns up top with Gakpo dropping to LW. 10 of the 11 effectively forced — confidence MEDIUM because Wirtz's fitness genuinely could swing the RW slot to Frimpong at kickoff.",
  pundit_sources: ["Liverpool FC", "Liverpool.com", "This Is Anfield", "Sportsmole", "Sports Illustrated", "Sky Sports", "FOX Sports", "Goal.com", "RotoWire", "Per Second News", "beIN Sports", "Caught Offside", "ESPN", "FootballTransfers", "Anfield Watch", "Inside World Football", "Football FanCast", "Anfield Index", "Yahoo Sports", "RTÉ", "Football365", "TeamTalk", "GiveMeSport", "Premier League"],
  agreement_rate: 0.84,
  generated_at: "2026-05-15T11:00:00Z",
};
