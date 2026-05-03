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
    // Updated Sun May 3 (matchday): BREAKING — Isak ruled OUT with a groin strain
    // picked up in Friday training (Sky Sports, Goal.com, Daily Mail Sun May 3).
    // Liverpool now travel WITHOUT a fit recognised senior No.9. Sports Mole &
    // Rousing The Kop's revised Sun XI puts Gakpo at false-9 with Ngumoha drafted
    // in on the left, Wirtz at the 10 and Szoboszlai pushed right. Alisson is
    // still sidelined per Liverpool.com Sun update — Woodman keeps the gloves.
    // Curtis Jones holds RB after Slot's 'comfort on the ball, like Trent' line.
    defaultXI: {
      GK: 27,   // Woodman (Alisson still sidelined Sun · 8/10 LFC debut vs Palace)
      LB: 6,    // Robertson (started Palace 8/10 · Tottenham agreement live)
      LCB: 3,   // Van Dijk (captain · derby winner · Salah farewell briefer)
      RCB: 4,   // Konaté (Romano: new deal nears completion)
      RB: 16,   // Curtis Jones (Slot: 'comfort on the ball, like Trent had at RB')
      LCM: 14,  // Gravenberch (rested vs Palace · expected back at MUN)
      CM: 13,   // Mac Allister (started Palace · stays in pivot)
      RCM: 15,  // Szoboszlai (drives right with Salah AND Isak out)
      LW: 25,   // Ngumoha (Sports Mole's revised Sun XI · biggest start of career)
      ST: 22,   // Gakpo (false-9 · Liverpool's senior forward without Isak/Salah)
      RW: 18,   // Wirtz (drifts wide-right · top creator with Salah out)
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
    // Sun May 3 (matchday) update: BREAKING — Isak ruled OUT with groin strain
    // (Sky Sports, Goal.com, Daily Mail). Liverpool's matchday XI re-shaped:
    // Gakpo as the false-9, Wirtz at the 10, Szoboszlai pushed right, and
    // Ngumoha drafted in on the left for the biggest senior start of his career
    // (Sports Mole's revised XI). Alisson still sidelined — Woodman keeps the
    // gloves. Curtis Jones holds RB after Slot's 'comfort on the ball, like
    // Trent had at RB' line.
    defaultXI: {
      GK: 27,   // Woodman (Alisson still sidelined · 8/10 LFC debut vs Palace)
      LB: 6,    // Robertson (started Palace 8/10 · Tottenham agreement live)
      LCB: 3,   // Van Dijk (captain · led Salah farewell briefing Apr 27)
      RCB: 4,   // Konaté (Romano: new deal nears completion)
      RB: 16,   // Curtis Jones (Slot: Trent-like 'comfort on the ball' at RB)
      LDM: 14,  // Gravenberch (rested Saturday · expected back vs MUN)
      RDM: 13,  // Mac Allister (started Palace · steadier double-pivot for away day)
      LAM: 25,  // Ngumoha (Sports Mole's revised Sun XI · biggest start of career)
      CAM: 18,  // Wirtz (sealed 3-1 vs Palace late · top creator with Salah AND Isak out)
      RAM: 15,  // Szoboszlai (push wider with Salah out · drives the right channel)
      ST: 22,   // Gakpo (false-9 · only senior forward standing with Isak/Salah out)
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
      GK: 27,   // Woodman (Alisson still sidelined Sun May 3)
      LCB: 7,   // Kerkez tucking in (back-three left-sided)
      CCB: 3,   // Van Dijk (captain · Salah farewell organiser)
      RCB: 4,   // Konaté (new deal close)
      LWB: 6,   // Robertson as left wing-back (push higher)
      LCM: 14,  // Gravenberch
      RCM: 13,  // Mac Allister
      RWB: 16,  // Curtis Jones at RWB (Slot Apr 27: Trent-like at RB)
      LW: 25,   // Ngumoha (drafted in after Isak's Sun groin injury)
      ST: 22,   // Gakpo as false-9 (Isak out · only senior No.9 option)
      RW: 18,   // Wirtz (creator wide right with Salah out)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-03.
export const PLAYER_EVIDENCE = {
  1:  "Hamstring · still sidelined Sun May 3",      // Alisson
  2:  "Stitched knee wound · ~3 wks out",            // Mamardashvili
  3:  "Captain · 7.5 form · nailed-on at MUN",       // Van Dijk
  4:  "Romano: new deal nears completion",           // Konaté
  5:  "Back in PL squad · cover at Old Trafford",    // Gomez
  6:  "8/10 vs Palace · Slot: 'leaving' summer",     // Robertson
  7:  "Back from niggle Fri · bench cover at MUN",   // Kerkez
  8:  "Knee surgery · out for season",               // Bradley
  9:  "On for Salah at 59' · bench RW option",       // Frimpong
  10: "Torn ACL · out for season",                   // Leoni
  11: "Deputy CB · Form 6.6",                        // Jacquet
  12: "Academy depth · 2 senior apps",               // Ndukwe
  13: "Started Palace · stays in pivot at MUN",      // Mac Allister
  14: "Rested Palace · returns at Old Trafford",     // Gravenberch
  15: "Pushed wider with Salah AND Isak out",        // Szoboszlai
  16: "8/10 RB · Romano: Inter Milan eye exit",      // Jones
  17: "Ankle surgery · out for season",              // Endo
  18: "Sealed 3-1 vs Palace · top creator now",      // Wirtz
  19: "Hamstring · yet to play this season",         // Bajcetic
  20: "Academy prospect · 5 senior apps",            // Nyoni
  21: "Out vs MUN · Brentford May 24 farewell on",   // Salah
  22: "False-9 vs MUN · Isak/Salah/Ekitike all out", // Gakpo
  23: "BREAKING: Sun groin strain · OUT of MUN",     // Isak
  24: "Ruptured Achilles · out 9-12 months",         // Ekitike
  25: "Drafted in on LW · biggest start of career",  // Ngumoha
  26: "Palace bench · rotation winger · likely exit",// Chiesa
  27: "8/10 LFC debut · keeps gloves at Old Trafford",// Woodman
};

// Default formation when entering the view — matched Slot's derby-winning shape
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1).
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson still sidelined Sun May 3 · Woodman keeps the gloves
  LB:  "High",   // Robertson started Palace 8/10 · expected to keep place
  LCB: "High",   // Van Dijk captain · led Salah farewell briefing Apr 27
  RCB: "High",   // Konaté nailed on · Romano: new deal nears completion
  RB:  "High",   // Slot Apr 27: Curtis Jones 'comfort on the ball, like Trent had at RB'
  LDM: "High",   // Gravenberch returns after Saturday rest
  RDM: "Medium", // Mac Allister or Gravenberch swap is plausible · pivot pairing fluid
  LAM: "Low",    // Ngumoha drafted in after Isak's groin · Chiesa/Frimpong fluid alternates
  CAM: "High",   // Wirtz · sealed 3-1 vs Palace late · most reliable creator with Salah out
  RAM: "Medium", // Szoboszlai pushed wider · Frimpong an alternative if Slot prefers pace
  ST:  "Low",    // Gakpo as false-9 · Isak ruled out Sun · Wirtz central also possible
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
export const SLOT_RATIONALE = {
  GK:  "Alisson still sidelined Sun May 3 (Liverpool.com injury rundown) — Slot's Fri May 1 'very close to' training did not become Sun fitness · Woodman keeps the gloves after his 8/10 LFC debut vs Palace · Mama still out ~3 wks",
  LB:  "Robertson started Palace 3-1 (8.0/10 sportsdunia) and assisted on the counter · Spurs verbal agreement is summer-conditional only",
  LCB: "Captain · led Salah farewell presser Apr 27 · controlled the Palace win · 7.5 form",
  RCB: "Romano (Apr 20): new Liverpool deal nears completion · Konaté: 'It's Liverpool' · started Palace 3-1",
  RB:  "Slot Apr 27: Curtis Jones offers 'comfort on the ball, like Trent had at right-back' · 8/10 in back-to-back wins (Everton, Palace) · assisted Robertson",
  LDM: "Returns after Saturday's rest · ball-winning anchor · form 7.5 among Europe's best",
  RDM: "Mac Allister started Palace pivot vs Palace · provided the lay-off Isak finished for the opener",
  LAM: "Drafted in on LW after Isak's Sun groin injury (Sports Mole's revised XI) · youngest-ever PL Anfield scorer in line for the biggest start of his career",
  CAM: "Wirtz drove home the 3-1 vs Palace late · Liverpool's most reliable creator with Salah AND Isak out · £100m signing form ticking up",
  RAM: "Pushed wider with Salah out · creates from right channel · drives the Diomande pursuit context",
  ST:  "Gakpo as false-9 (Sports Mole/Rousing The Kop Sun XI consensus) · Isak ruled out Sun morning · Liverpool WITHOUT a fit recognised senior No.9",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-2-3-1.
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · still sidelined Sun May 3 · earliest realistic return Chelsea (H) May 9" }, { playerId: 2, reason: "Mamardashvili · stitched knee wound · ~3 wks out" }],
  LB:  [{ playerId: 7, reason: "Kerkez · rotation option if Robertson's minutes managed" }],
  LCB: [{ playerId: 5, reason: "Gomez back in PL squad · Palace bench · cover after PSG-cameo lay-off" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB with Konaté/VVD nailed on" }],
  RB:  [{ playerId: 9, reason: "Frimpong · natural RB option if Slot reverts to traditional shape" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · started Palace pivot · pairing is fluid" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could be paired LDM with Mac Allister at RDM" }],
  LAM: [{ playerId: 26, reason: "Chiesa · senior winger if Slot avoids 17-yr-old start" }, { playerId: 9, reason: "Frimpong · pace option wide left in Salah-less attack" }],
  CAM: [{ playerId: 13, reason: "Mac Allister · could push higher if pivot pairing changes" }],
  RAM: [{ playerId: 9, reason: "Frimpong · came on for Salah Apr 25 · pace option" }, { playerId: 26, reason: "Chiesa · rotation winger · likely summer exit" }],
  ST:  [{ playerId: 18, reason: "Wirtz · false-9 alternative if Slot prefers Ngumoha-Gakpo wide pair" }, { playerId: 25, reason: "Ngumoha · youngest PL Anfield scorer · could play centrally too" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Low",
  reason: "Sun May 3 (matchday) — BREAKING: Alexander Isak ruled OUT of Old Trafford with a suspected groin strain picked up in Friday training (Sky Sports, Goal.com, Daily Mail Sun May 3). Liverpool now travel WITHOUT a fit recognised senior No.9 (Ekitike out for the season, Salah hamstring). Sports Mole's revised Sun XI and Rousing The Kop both lean toward Gakpo at false-9 with 17-year-old Rio Ngumoha drafted in on the left, Wirtz at the 10 and Szoboszlai pushed right. Alisson is still sidelined per Liverpool.com's Sun update so Woodman keeps the gloves (8/10 LFC debut vs Palace). Curtis Jones holds RB after Slot's 'comfort on the ball, like Trent' line, Robertson at LB ahead of managed Kerkez, Mac Allister + Gravenberch pivot. Confidence Low because both attacking flanks and the No.9 are open: Slot could equally start Wirtz centrally with Gakpo wide-left, or use Chiesa/Frimpong instead of Ngumoha — the team-sheet drop is the first reliable read.",
  pundit_sources: ["Sky Sports", "Goal.com", "Daily Mail", "Sports Mole", "Rousing The Kop", "Sports Illustrated", "Liverpool.com", "This Is Anfield", "Empire of the Kop", "Foxsports", "Tribuna"],
  agreement_rate: 0.55,
  generated_at: "2026-05-03T11:30:00Z",
};
