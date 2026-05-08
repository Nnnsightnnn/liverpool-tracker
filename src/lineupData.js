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
    // IDs from playerData.js — Slot's likely XI for Chelsea (H), Sat May 9 11:30.
    // Updated Fri May 8: Alisson MISSED Wednesday training again per Tribuna/Sky
    // Sports — Liverpoolworld now has him as NOT expected for Chelsea, so
    // Woodman gets a third consecutive PL start. Konaté and Wirtz also trained
    // separately Wed (Sky Sports: 'severity still unclear') — both kept in the
    // XI per Sports Mole/Yahoo/SI Thursday previews but flagged Medium-Low
    // confidence pending Slot's 1:15pm BST presser. Curtis Jones at RB despite
    // the Romano 'full approval' to Inter (8/10 MUN). Frimpong (5.5) returns to
    // RW after Wirtz's doubt, Ngumoha LW. Mac Allister fit (head cap). Gakpo
    // false-9 with Isak (groin) still doubtful, Salah (hamstring) won't make it.
    defaultXI: {
      GK: 27,   // Woodman (Alisson missed Wed training · Liverpoolworld: NOT expected for Chelsea)
      LB: 7,    // Kerkez (came on for Robertson 59' at MUN · niggle clear)
      LCB: 3,   // Van Dijk (captain · 19th defeat skipper · still anchors line)
      RCB: 4,   // Konaté (trained separately Wed · still expected to start per previews)
      RB: 16,   // Curtis Jones (8/10 vs MUN · 100+ touches · Trent-redux RB)
      LCM: 14,  // Gravenberch (returned to start MUN · 7/10)
      CM: 13,   // Mac Allister (head-cap warrior at MUN · expected fit)
      RCM: 15,  // Szoboszlai (8.5/10 vs MUN · pulled goal back · engine of run-in)
      LW: 25,   // Ngumoha (came on 75' vs MUN · ahead of Frimpong after 5.5 display)
      ST: 22,   // Gakpo (scored 56' vs MUN · false-9 with Isak/Salah out)
      RW: 18,   // Wirtz (trained separately Wed · doubt but expected to start per previews)
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
    // Slot's likely XI for Chelsea (H) Sat May 9 11:30 in his preferred 4-2-3-1.
    // Updated Fri May 8 (1 day out): Alisson MISSED Wed training again per
    // Tribuna/Sky Sports — Liverpoolworld now has him as NOT expected for
    // Chelsea, so Woodman gets a third consecutive PL start. Konaté and Wirtz
    // also trained separately Wed — kept in the XI per Sports Mole/Yahoo/SI
    // previews but flagged Medium-Low confidence pending Slot's 1:15pm BST
    // presser. Kerkez at LB after Robertson's 5-6.5 'flop' rating. Curtis Jones
    // at RB despite the Romano/Tribuna 'full approval' to Inter (8/10 MUN
    // secures the slot). Gravenberch + Mac Allister double pivot (head cap
    // fit). Wirtz at the 10 — top creator with Salah AND Isak both out (Anfield
    // Index Wed: 'genuine belief' Isak could feature changes the calculus).
    // Szoboszlai right, Ngumoha left after Frimpong's 5.5 vs MUN.
    defaultXI: {
      GK: 27,   // Woodman (Alisson missed Wed training · Liverpoolworld: NOT expected for Chelsea)
      LB: 7,    // Kerkez (came on at 59' vs MUN · gets LB nod over Robertson)
      LCB: 3,   // Van Dijk (captain · 19th defeat skipper · still anchors line)
      RCB: 4,   // Konaté (trained separately Wed · doubt but expected to start per previews)
      RB: 16,   // Curtis Jones (8/10 vs MUN, 100+ touches · Trent-redux RB)
      LDM: 14,  // Gravenberch (returned to start MUN · 7/10)
      RDM: 13,  // Mac Allister (head-cap warrior at MUN · expected fit)
      LAM: 25,  // Ngumoha (came on 75' vs MUN · ahead of Frimpong after 5.5 outing)
      CAM: 18,  // Wirtz (trained separately Wed · doubt but expected to start per previews)
      RAM: 15,  // Szoboszlai (pulled the goal back at MUN 8.5/10 · drives right)
      ST: 22,   // Gakpo (scored 56' vs MUN · false-9 only senior No.9 standing)
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
      GK: 27,   // Woodman (Alisson missed Wed training · Liverpoolworld: NOT expected for Chelsea)
      LCB: 7,   // Kerkez tucking in (came on for Robbo at MUN · niggle clear)
      CCB: 3,   // Van Dijk (captain · 19th defeat skipper · anchor)
      RCB: 4,   // Konaté (trained separately Wed · doubt but expected to start per previews)
      LWB: 6,   // Robertson rotation as wing-back (after MUN 5-6.5 dip)
      LCM: 14,  // Gravenberch (returned to start MUN · 7/10)
      RCM: 13,  // Mac Allister (head-cap warrior at MUN · expected fit)
      RWB: 16,  // Curtis Jones at RWB (8/10 RB at MUN · 100+ touches)
      LW: 25,   // Ngumoha (came on 75' vs MUN · ahead of Frimpong after 5.5)
      ST: 22,   // Gakpo as false-9 (scored 56' vs MUN · only senior No.9)
      RW: 18,   // Wirtz (trained separately Wed · doubt but expected to start per previews)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-08.
export const PLAYER_EVIDENCE = {
  1:  "Missed Wed training · NOT expected vs Chelsea",  // Alisson
  2:  "Knee · target return Aston Villa Fri May 15",    // Mamardashvili
  3:  "'We are not kids' · defends Slot Tue",           // Van Dijk
  4:  "Trained separately Wed · fitness test Fri",      // Konaté
  5:  "Unused MUN bench · likely summer exit",          // Gomez
  6:  "Hooked 59' MUN · Goal.com 'flop' rating",        // Robertson
  7:  "Came on 59' MUN · LB nod for Chelsea",           // Kerkez
  8:  "Knee surgery · out for season",                  // Bradley
  9:  "Hooked 75' MUN · could return if Wirtz misses",  // Frimpong
  10: "Torn ACL · out for season",                      // Leoni
  11: "Deputy CB · live if Konaté ruled out",           // Jacquet
  12: "Academy depth · 2 senior apps",                  // Ndukwe
  13: "Head-cap warrior at MUN · 7/10",                 // Mac Allister
  14: "Returned to start MUN · 7/10",                   // Gravenberch
  15: "8.5/10 vs MUN · pulled goal back",               // Szoboszlai
  16: "Talks 'effectively ceased' · Inter exit likely", // Jones
  17: "Ankle surgery · out for season",                 // Endo
  18: "Trained separately Wed · fitness test Fri",      // Wirtz
  19: "Hamstring · yet to play this season",            // Bajcetic
  20: "Academy prospect · 5 senior apps",               // Nyoni
  21: "Missed Wed training · Aston Villa target",       // Salah
  22: "Scored 56' vs MUN · false-9 lead",               // Gakpo
  23: "Late fitness test · 'genuine belief'",           // Isak
  24: "Ruptured Achilles · out 9-12 months",            // Ekitike
  25: "Came on 75' MUN · live for Chelsea start",       // Ngumoha
  26: "Unused MUN bench · likely summer exit",          // Chiesa
  27: "3rd consecutive PL start vs Chelsea",            // Woodman
};

// Default formation when entering the view — matched Slot's derby-winning shape
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1).
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Woodman gets a third consecutive PL start · Alisson missed Wed training, NOT expected
  LB:  "High",   // Kerkez came on at 59' for Robertson at MUN · gets the LB nod
  LCB: "High",   // Van Dijk captain · 19th defeat skipper · anchor
  RCB: "Medium", // Konaté trained separately Wed · expected to start per Sports Mole/Yahoo but doubt live
  RB:  "High",   // Curtis Jones 8/10 at MUN despite Inter approval · still nailed on
  LDM: "High",   // Gravenberch returned to start MUN · 7/10 · plays through
  RDM: "Medium", // Mac Allister fit (head cap) but VVD elbow caution · pivot pairing fluid
  LAM: "Medium", // Ngumoha came on 75' MUN · ahead of Frimpong but Chiesa option live
  CAM: "Medium", // Wirtz trained separately Wed · expected to start per previews but doubt live
  RAM: "High",   // Szoboszlai 8.5/10 vs MUN · engine of run-in · drives right channel
  ST:  "Medium", // Gakpo as false-9 · scored 56' MUN · Isak return chase keeps it open
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
export const SLOT_RATIONALE = {
  GK:  "Fri May 8 — Alisson missed Wednesday training again per Tribuna/Sky Sports; Liverpoolworld now lists him as NOT expected for Chelsea, eight consecutive league matches missed with the hamstring. Off the pitch, Liverpool.com (Schira) reports the Brazilian has 'agreed personal terms with Juventus' on a €5m-a-year deal. Woodman gets a third consecutive PL start; Aston Villa (A) Fri May 15 the more realistic Alisson return target",
  LB:  "Came on at 59' for Robertson at Old Trafford (Sun May 3) — niggle clear, gets the LB start back after Robertson's 5-6.5 'flop' rating per Goal.com",
  LCB: "Captain · 19th defeat skipper · still anchors the line · The Athletic (Apr 30) reports VVD now expected to leave end of 2026-27",
  RCB: "Fri May 8 — fresh fitness scare: Sky Sports/Tribuna and This Is Anfield report Konaté trained AWAY from the main group on Wednesday after being substituted late at Old Trafford; 'severity still unclear.' Sports Mole/Yahoo/SI Thursday previews still pencilled him in to start vs Chelsea but Slot's 1:15pm presser is the firm call. Jacquet the natural deputy if ruled out",
  RB:  "Fri May 8 — EOTK/Yahoo Sports report contract talks 'effectively ceased' and Inter Milan exit 'now seems likely' (built on Tue May 5 Romano 'full approval' line). On the pitch though he's nailed on for the run-in: Goal.com 8/10 at Old Trafford with over 100 touches; Slot Apr 27 'comfort on the ball, like Trent had at right-back'",
  LDM: "Returned to start MUN — 7/10, nine passes into the final third (TIA) · ball-winning anchor · plays through the run-in despite NBC Sports flagging him for a rest",
  RDM: "Played through head wound after VVD elbow at MUN (head cap second half) · Goal.com 7/10 'pretty epic midfield battle' · expected fit for Chelsea (May 9)",
  LAM: "Came on at 75' for Frimpong at MUN — first attacking change as the comeback fizzled. Ahead of Frimpong (5.5) and Chiesa for the LW start with Isak still doubt",
  CAM: "Fri May 8 — fresh fitness doubt: This Is Anfield/Sky Sports/Liverpool.com confirmed Wirtz trained AWAY from the main group Wednesday — 'severity still unclear.' Sports Mole/Yahoo/SI Thursday previews kept him pencilled in for the No.10 role given Salah and Isak both still doubts. Slot's 1:15pm presser is the firm call",
  RAM: "Pulled the goal back at MUN (47', 8.5/10 Goal.com) · drives the right channel · engine of the run-in",
  ST:  "Scored 56' at Old Trafford to make it 2-2 · false-9 only senior No.9 standing with Isak (groin) and Salah (hamstring) both out · Anfield Index Wed: 'genuine belief' Isak could feature, so Gakpo's lock weakens if Slot greenlights the Swede in his Friday presser",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-2-3-1.
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · NOT expected vs Chelsea per Liverpoolworld but Slot's Friday presser could yet flip it · Aston Villa Fri May 15 the firmer return" }, { playerId: 2, reason: "Mamardashvili · stitched knee · Aston Villa Fri May 15 target" }],
  LB:  [{ playerId: 6, reason: "Robertson · could rotate back in if Slot wants experience for the home run-in" }],
  LCB: [{ playerId: 5, reason: "Gomez · unused MUN bench · back in the squad · likely summer exit per Beukema link" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB · live starter if Konaté ruled out after Wed's separate-training scare" }, { playerId: 5, reason: "Gomez · senior alternative · likely summer exit per Beukema link" }],
  RB:  [{ playerId: 9, reason: "Frimpong · natural RB if Slot pulls Curtis Jones inside again" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap to LDM if Gravenberch needs a rest" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could be paired LDM with Mac Allister at RDM" }],
  LAM: [{ playerId: 26, reason: "Chiesa · senior winger option if Slot avoids back-to-back Ngumoha starts" }, { playerId: 9, reason: "Frimpong · pace option wide if 5.5 vs MUN was a one-off" }],
  CAM: [{ playerId: 22, reason: "Gakpo · could shift back to LW if Slot moves Wirtz central as a No.9" }, { playerId: 16, reason: "Curtis Jones · could push forward if Wirtz ruled out after Wed's separate-training scare" }],
  RAM: [{ playerId: 9, reason: "Frimpong · pace option wide if Wirtz also ruled out · likely back to RB cameo though" }],
  ST:  [{ playerId: 23, reason: "Isak · 'genuine belief' he features per Anfield Index Wed — late fitness test for Slot's Friday presser" }, { playerId: 25, reason: "Ngumoha · youngest-ever PL Anfield scorer · could play centrally" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Fri May 8 — One day out from Chelsea (H) Sat May 9 11:30 BST. Today's leads are FRESH: This Is Anfield/Sky Sports/Liverpool.com confirmed Wed evening that Konaté and Wirtz BOTH trained AWAY from the main group on Wednesday — adding two new fitness tests to the Salah/Isak/Alisson/Mamardashvili four who missed training altogether. Sky Sports' Tribuna line: 'severity still unclear.' Slot's Friday 1:15pm BST AXA presser is the moment of truth. Liverpoolworld now lists Alisson as NOT expected for Chelsea — Woodman gets a third consecutive PL start. Sports Mole/Yahoo/SI all kept Konaté and Wirtz pencilled in for Saturday's XI but with the doubt live. Off the pitch the Curtis Jones (Inter), Alisson (Juve €5m PA per Schira), Wharton (£80m Palace) and Slot's-agent-Pimenta 'many changes' threads all hold from Wed-Thu coverage. Confidence LOW because four slots — GK (Woodman vs Alisson if late call), RCB (Konaté vs Jacquet), CAM (Wirtz vs Jones/Gakpo), ST (Gakpo vs Isak's return) — are all live calls until Slot's Friday presser. Aston Villa fixture officially moved to Friday May 15 8pm BST (from Sun May 17).",
  pundit_sources: ["Tribuna / Romano", "Nicolo Schira", "Sky Sports", "Goal.com", "ESPN", "Yahoo Sports", "TNT Sports", "The Athletic", "This Is Anfield", "Liverpool.com", "Empire of the Kop", "Read Liverpool", "Anfield Index", "Sports Mole", "Liverpool FC", "Liverpoolworld", "SI"],
  agreement_rate: 0.65,
  generated_at: "2026-05-08T11:00:00Z",
};
