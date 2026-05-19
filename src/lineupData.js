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
    // finale on Sun May 24 (must-win for Champions League after last night's
    // 4-2 Villa Park defeat). Salah expected to start (Anfield farewell), Isak
    // back in if fit (fourth absence of the season per Slot Friday). 4-3-3 is
    // a backup look — Slot's been preferring 4-2-3-1 of late but a return to
    // 4-3-3 for a home must-win is plausible.
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
    // PREDICTED 4-2-3-1 for the Brentford home finale on Sun May 24
    // (must-win for Champions League after last night's 4-2 Villa Park
    // defeat). Slot has favored 4-2-3-1 in recent matches and is likely to
    // stick with it for a home must-win. Salah expected to start his Anfield
    // farewell, Wirtz returns from antibiotics, Isak back if fit. Frimpong
    // and Alisson both targeted to return per Slot's Friday-night line.
    defaultXI: {
      GK: 1,    // Alisson (projected return · Slot Fri: 'see if he's ready')
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
    // unlikely to deploy a three at the back for a home must-win, but if he
    // wants extra defensive cover behind a Salah-led front three this is the
    // shape that fits: VVD/Konaté/Gomez at the back, Kerkez and Frimpong as
    // wing-backs, Gravenberch + Mac Allister in midfield, Gakpo-Isak-Salah
    // up top. Default is 4-2-3-1 above.
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
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-19
// (Tue: new adidas 26-27 kit drops 9am; Bournemouth-City tonight; Rooney
// tells Slot to bench Salah for the farewell).
export const PLAYER_EVIDENCE = {
  1:  "Stepped up training Tue · finale targeted",         // Alisson
  2:  "Conceded 4 at Villa Park · Form 6.2",               // Mamardashvili
  3:  "Brace at Villa · 8/10 ratings · Form 7.4",          // Van Dijk
  4:  "On Salah's 17-strong list · contract stalemate",    // Konaté
  5:  "Started RB at Villa · 5/10 · Form 5.9",             // Gomez
  6:  "Liked Salah anti-Slot post · Sun farewell",         // Robertson
  7:  "Liked Salah post · LB starter · Form 6.8",          // Kerkez
  8:  "Knee surgery · out for season",                     // Bradley
  9:  "Training Tue · finale return targeted",             // Frimpong
  10: "Torn ACL · out for season · liked Salah post",      // Leoni
  11: "Deputy CB · cover only",                            // Jacquet
  12: "Academy depth · 2 senior apps",                     // Ndukwe
  13: "90 mins Villa · double-pivot · Form 6.7",           // Mac Allister
  14: "Anchor in midfield at Villa · Form 7.2",            // Gravenberch
  15: "Liked Salah post · senior endorser · Form 7.3",     // Szoboszlai
  16: "'Way off standards' statement · 5.5/10",            // Jones
  17: "Ankle surgery · out · liked Salah post",            // Endo
  18: "On Salah's 17-strong list · Brentford starter",     // Wirtz
  19: "Hamstring · yet to play this season",               // Bajcetic
  20: "Academy prospect · 5 senior apps",                  // Nyoni
  21: "Rooney: 'I'd bench him' · 17 endorsers · farewell", // Salah
  22: "On Salah's 17-strong list · LW at Villa",           // Gakpo
  23: "Stepped up training Tue · finale targeted",         // Isak
  24: "Ruptured Achilles · out 9-12 months · liked Salah", // Ekitike
  25: "Led line at Villa · 'best of a bad night'",         // Ngumoha
  26: "Unused sub at Villa · summer exit list",            // Chiesa
  27: "3rd-choice GK · Mamard ahead",                      // Woodman
};

// Default formation when entering the view — projecting the Brentford home
// finale on Sun May 24, a must-win for Champions League after last night's
// 4-2 Villa Park defeat. Slot has favoured 4-2-3-1 of late; expect Salah to
// start his Anfield farewell, Isak back if fit, Wirtz returning from
// antibiotics, Alisson and Frimpong both targeted to return.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1) — confidence Medium across most
// slots because the Brentford XI is PREDICTED, not confirmed: team news
// won't drop until Slot's Friday/Saturday presser the week of the match.
// (Refreshed Tue May 19: adidas 26-27 kit drops 9am; Bournemouth-City
// tonight is referendum-by-proxy; Rooney tells Slot to bench Salah.)
export const SLOT_CONFIDENCE = {
  GK:  "Medium", // Alisson projected return · Mamard alternative
  LB:  "High",   // Kerkez · first-pick LB · Robertson farewell on bench
  LCB: "High",   // Van Dijk · captain · scored 2 vs Villa
  RCB: "High",   // Konaté · locked in alongside VVD
  RB:  "Medium", // Frimpong projected return · Gomez backup
  LDM: "High",   // Gravenberch · most reliable midfielder
  RDM: "High",   // Mac Allister · double-pivot
  LAM: "Medium", // Gakpo · LW likely · could rotate
  CAM: "Medium", // Wirtz return projected · Szobo could shift
  RAM: "High",   // Salah · Anfield FAREWELL start expected
  ST:  "Medium", // Isak if fit · else Ngumoha
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
// Brentford home finale on Sun May 24 is the projected fixture — a must-win
// for Champions League after Friday's 4-2 Villa Park defeat dropped Liverpool
// to 5th. Salah's Saturday Instagram bombshell adds a manager-vs-talisman layer
// to selection: Slot has to start the publicly critical talisman in front of
// the Kop or face open mutiny.
export const SLOT_RATIONALE = {
  GK:  "Tue May 19 — Alisson projected to return for the Brentford finale; Liverpool.com's Tuesday-morning pre-Brentford tracker has the Brazilian stepping up training after 11 straight games out. Mamardashvili conceded 4 at Villa Park — a backwards step. If Alisson isn't cleared at Slot's Friday presser, Mamard keeps the shirt for a fourth straight.",
  LB:  "Tue May 19 — Kerkez locks the LB shirt for the Brentford finale after a 6/10 90-minute display at Villa Park. Liked Salah's anti-Slot post Saturday but starts again on merit. Robertson lined up for a bench role in his Anfield farewell.",
  LCB: "Tue May 19 — Van Dijk indisputable after his TWO headers in the 4-2 Villa Park defeat (52' equaliser, 90+ consolation · 8/10 ratings). The captain notably has NOT publicly endorsed Salah's Saturday post — still abstaining as the 17-player tally holds — and remains the rock. Liverpool.com has ruled out the Galatasaray exit.",
  RCB: "Tue May 19 — Konaté locks in alongside VVD despite a 5/10 at Villa where set-piece tracking failed three times. Caught Offside's Monday tally added him to the 17-strong list of Salah backers — a reversal of the weekend's 'abstained' read. Contract 'stalemate' rumbles on into Tuesday; Real Madrid still in the background.",
  RB:  "Tue May 19 — Frimpong projected to return for the Brentford finale; Liverpool.com's Tuesday tracker has the Dutchman stepping up training after missing Villa Park with a 'minor injury'. Liked Salah's Saturday post; Gomez deputised at RB at Villa and struggled.",
  LDM: "Tue May 19 — Gravenberch continues as the most reliable midfielder Liverpool have after a 6.5/10 Villa Park display. The Dutchman has anchored midfield through the run-in; partners Mac Allister in the double-pivot.",
  RDM: "Tue May 19 — Mac Allister completed 90 minutes at Villa and partners Gravenberch in the double-pivot. Father Carlos's 'no talks until the season is over' line still alive in the background; reportedly abstained from Salah's Saturday post.",
  LAM: "Tue May 19 — Gakpo expected to keep LW; Caught Offside's Monday tally added the Dutchman to the 17-strong list of Reds liking Salah's anti-Slot post. FSG has reportedly green-lit a summer sale to fund the wide rebuild but he still starts the finale ahead of Chiesa.",
  CAM: "Tue May 19 — Wirtz projected to start the Brentford finale after a Villa Park cameo off the bench, recovered from antibiotics. Also added to the 17-strong list of Salah backers per Caught Offside Monday. Slot likely to want the German's creativity for the must-win.",
  RAM: "Tue May 19 — Mohamed Salah's ANFIELD FAREWELL start STILL EXPECTED, even after Wayne Rooney told SportBible on Sunday (carried into Tuesday's papers) Slot should 'put him on the bench'. beIN Sports' overnight Sun line — Salah's 'another swipe' second post — still echoes; the 17-player tally holds. Manager-vs-talisman frame hardens by the hour.",
  ST:  "Tue May 19 — Alexander Isak's projected return; Liverpool.com's Tuesday tracker has the Swede stepping up training after missing Villa Park with a 'minor injury' (Slot cited missed pre-season + broken-leg recovery). If not cleared at Friday's presser, 17-year-old Rio Ngumoha — Slot's bright young find — would lead the line again.",
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
  reason: "Tue May 19 (Tuesday-morning refresh) — projected Liverpool XI for the Brentford home finale on Sun May 24, a must-win for Champions League after Friday's 4-2 Villa Park defeat dropped Liverpool to 5th. Three Tuesday beats: (1) the adidas 2026-27 home kit dropped at 9am BST — heritage 1989-90 design with a green keeper kit — softening the news cycle for one day; (2) Bournemouth vs Manchester City tonight (18:30 UK) is referendum-by-proxy: a Pep win essentially seals Liverpool top-five before Sunday; (3) Wayne Rooney told SportBible Sunday Slot should bench Salah for the Anfield farewell — a line still echoing through Tuesday's papers. Caught Offside's 17-player anti-Slot tally holds. Isak, Alisson and Frimpong all stepped up training Tue at Kirkby per Liverpool.com; team news firms up at Slot's Friday presser. Confidence stays MEDIUM because GK, RB and ST hinge on fitness — and the manager himself is defending on TWO fronts (FSG above, dressing room beside).",
  pundit_sources: ["Al Jazeera", "ITV News", "Euronews", "Liverpool FC", "Liverpool.com", "This Is Anfield", "DaveOCKOP", "Anfield Index", "Sky Sports", "NBC Sports", "ESPN", "FOX Sports", "Goal.com", "GiveMeSport", "Sports Illustrated", "Per Second News", "RotoWire", "FootballTransfers", "Anfield Watch", "Football FanCast", "Caught Offside", "TeamTalk", "Premier League", "Football365", "Sports Mole", "SportBible", "JOE", "SportsJoe", "TalkSPORT", "TNT Sports", "beIN Sports", "Tribuna"],
  agreement_rate: 0.7,
  generated_at: "2026-05-19T11:00:00Z",
};
