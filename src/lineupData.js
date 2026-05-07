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
    // Updated Wed May 6: Romano via Tribuna confirmed Tue May 5 Curtis Jones
    // has given his 'full approval' to Inter Milan — but he still keeps the RB
    // slot for Sat off his 8/10 MUN display. Frimpong (5.5) and Robertson
    // (5-6.5) flopped per Goal.com & TIA — Kerkez at LB after his 59' cameo
    // cleared the niggle, Ngumoha LW after his 75' sub. Alisson 'very close'
    // to training per Anfield Index Wed but hadn't trained as of Friday — keep
    // him pencilled in but Woodman is the live fallback. Mac Allister fit (head
    // cap from VVD elbow). Gakpo continues as false-9 with Isak still out
    // (groin — but Anfield Index Wed: 'genuine belief' he features), Salah
    // hamstring (TNT 'injury is fine' but Brentford the firm return).
    defaultXI: {
      GK: 1,    // Alisson (returns after eight-week hamstring layoff · 'very close' Apr 30)
      LB: 7,    // Kerkez (came on for Robertson 59' at MUN · niggle clear)
      LCB: 3,   // Van Dijk (captain · 19th defeat skipper · still anchors line)
      RCB: 4,   // Konaté (started Old Trafford · new contract 'never closer')
      RB: 16,   // Curtis Jones (8/10 vs MUN · 100+ touches · Trent-redux RB)
      LCM: 14,  // Gravenberch (returned to start MUN · 7/10)
      CM: 13,   // Mac Allister (head-cap warrior at MUN · expected fit)
      RCM: 15,  // Szoboszlai (8.5/10 vs MUN · pulled goal back · engine of run-in)
      LW: 25,   // Ngumoha (came on 75' vs MUN · ahead of Frimpong after 5.5 display)
      ST: 22,   // Gakpo (scored 56' vs MUN · false-9 with Isak/Salah out)
      RW: 18,   // Wirtz (started right vs MUN · top creator with Salah out)
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
    // Updated Wed May 6 (3 days out): Alisson penciled in with Woodman the
    // live fallback ('very close' to training but hadn't trained as of Friday's
    // presser per Anfield Index). Kerkez at LB after Robertson's 5-6.5 outing,
    // Curtis Jones at RB despite the Romano/Tribuna 'full approval' to Inter
    // story Tue May 5 (8/10 MUN display secures the slot). Gravenberch + Mac
    // Allister double pivot (head cap fit). Wirtz at the 10 — top creator with
    // Salah AND Isak both out (Anfield Index Wed: 'genuine belief' Isak could
    // feature changes the calculus). Szoboszlai right, Ngumoha left after
    // Frimpong's 5.5 vs MUN.
    defaultXI: {
      GK: 1,    // Alisson (returns from eight-week hamstring layoff)
      LB: 7,    // Kerkez (came on at 59' vs MUN · gets LB nod over Robertson)
      LCB: 3,   // Van Dijk (captain · 19th defeat skipper · still anchors line)
      RCB: 4,   // Konaté (started Old Trafford · new contract 'never closer')
      RB: 16,   // Curtis Jones (8/10 vs MUN, 100+ touches · Trent-redux RB)
      LDM: 14,  // Gravenberch (returned to start MUN · 7/10)
      RDM: 13,  // Mac Allister (head-cap warrior at MUN · expected fit)
      LAM: 25,  // Ngumoha (came on 75' vs MUN · ahead of Frimpong after 5.5 outing)
      CAM: 18,  // Wirtz (started right vs MUN · top creator with Salah/Isak out)
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
      GK: 1,    // Alisson (returns from eight-week hamstring layoff)
      LCB: 7,   // Kerkez tucking in (came on for Robbo at MUN · niggle clear)
      CCB: 3,   // Van Dijk (captain · 19th defeat skipper · anchor)
      RCB: 4,   // Konaté (started Old Trafford · new deal nears agreement)
      LWB: 6,   // Robertson rotation as wing-back (after MUN 5-6.5 dip)
      LCM: 14,  // Gravenberch (returned to start MUN · 7/10)
      RCM: 13,  // Mac Allister (head-cap warrior at MUN · expected fit)
      RWB: 16,  // Curtis Jones at RWB (8/10 RB at MUN · 100+ touches)
      LW: 25,   // Ngumoha (came on 75' vs MUN · ahead of Frimpong after 5.5)
      ST: 22,   // Gakpo as false-9 (scored 56' vs MUN · only senior No.9)
      RW: 18,   // Wirtz (top creator with Salah & Isak out)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-07.
export const PLAYER_EVIDENCE = {
  1:  "Schira: Juve personal terms agreed Thu",       // Alisson
  2:  "Stitched knee · Aston Villa target return",    // Mamardashvili
  3:  "'We are not kids' · defends Slot Tue",         // Van Dijk
  4:  "Crook 'mixed messages' · 50/50 contract",      // Konaté
  5:  "Unused MUN bench · likely summer exit",        // Gomez
  6:  "Hooked 59' MUN · Goal.com 'flop' rating",      // Robertson
  7:  "Came on 59' MUN · LB nod for Chelsea",         // Kerkez
  8:  "Knee surgery · out for season",                // Bradley
  9:  "Hooked 75' MUN · 5.5 'no end product'",        // Frimpong
  10: "Torn ACL · out for season",                    // Leoni
  11: "Deputy CB · Form 6.6",                         // Jacquet
  12: "Academy depth · 2 senior apps",                // Ndukwe
  13: "Head-cap warrior at MUN · 7/10",               // Mac Allister
  14: "Returned to start MUN · 7/10",                 // Gravenberch
  15: "8.5/10 vs MUN · pulled goal back",             // Szoboszlai
  16: "Talks 'effectively ceased' · Inter exit likely", // Jones
  17: "Ankle surgery · out for season",               // Endo
  18: "Started right vs MUN · top creator",           // Wirtz
  19: "Hamstring · yet to play this season",          // Bajcetic
  20: "Academy prospect · 5 senior apps",             // Nyoni
  21: "TNT: 'injury is fine' · Chelsea targeted",     // Salah
  22: "Scored 56' vs MUN · false-9 lead",             // Gakpo
  23: "'Genuine belief' he features vs Chelsea",      // Isak
  24: "Ruptured Achilles · out 9-12 months",          // Ekitike
  25: "Came on 75' MUN · live for Chelsea start",     // Ngumoha
  26: "Unused MUN bench · likely summer exit",        // Chiesa
  27: "Two PL starts · drops back when Alisson fit",  // Woodman
};

// Default formation when entering the view — matched Slot's derby-winning shape
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1).
export const SLOT_CONFIDENCE = {
  GK:  "Medium", // Alisson 'very close' but hadn't trained as of Friday presser · Woodman fallback live
  LB:  "High",   // Kerkez came on at 59' for Robertson at MUN · gets the LB nod
  LCB: "High",   // Van Dijk captain · 19th defeat skipper · anchor
  RCB: "High",   // Konaté started MUN · contract '50/50' but he plays through
  RB:  "High",   // Curtis Jones 8/10 at MUN despite Inter approval · still nailed on
  LDM: "High",   // Gravenberch returned to start MUN · 7/10 · plays through
  RDM: "Medium", // Mac Allister fit (head cap) but VVD elbow caution · pivot pairing fluid
  LAM: "Medium", // Ngumoha came on 75' MUN · ahead of Frimpong but Chiesa option live
  CAM: "High",   // Wirtz · top creator with Salah AND Isak out · drives the No.10 channel
  RAM: "High",   // Szoboszlai 8.5/10 vs MUN · engine of run-in · drives right channel
  ST:  "Medium", // Gakpo as false-9 · scored 56' MUN · Isak return chase keeps it open
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
export const SLOT_RATIONALE = {
  GK:  "Thu May 7 — Slot's Read Liverpool/Anfield Index update: Alisson and Isak are being managed with 'small margins' but both training again this week, targeting Chelsea (May 9). Liverpool.com Thu lead reports Schira has Alisson 'agreeing personal terms with Juventus' on a €5m-a-year deal — Juve still need to convince Liverpool to sell. On the pitch he's the keeper Slot wants if cleared after his eight-week hamstring layoff; Woodman drops back to bench. Mama still ~1 week away",
  LB:  "Came on at 59' for Robertson at Old Trafford (Sun May 3) — niggle clear, gets the LB start back after Robertson's 5-6.5 'flop' rating per Goal.com",
  LCB: "Captain · 19th defeat skipper · still anchors the line · The Athletic (Apr 30) reports VVD now expected to leave end of 2026-27",
  RCB: "Started Old Trafford defeat (Sun May 3) · Wed May 6 frame more cautious: Apr 21 he himself said 'we are close' but Apr 25 Crook reported insiders see it as '50/50.' Decision expected before the World Cup",
  RB:  "Thu May 7 — EOTK/Yahoo Sports report contract talks 'effectively ceased' and Inter Milan exit 'now seems likely' (built on Tue May 5 Romano 'full approval' line). On the pitch though he's nailed on for the run-in: Goal.com 8/10 at Old Trafford with over 100 touches; Slot Apr 27 'comfort on the ball, like Trent had at right-back'",
  LDM: "Returned to start MUN — 7/10, nine passes into the final third (TIA) · ball-winning anchor · plays through the run-in despite NBC Sports flagging him for a rest",
  RDM: "Played through head wound after VVD elbow at MUN (head cap second half) · Goal.com 7/10 'pretty epic midfield battle' · expected fit for Chelsea (May 9)",
  LAM: "Came on at 75' for Frimpong at MUN — first attacking change as the comeback fizzled. Ahead of Frimpong (5.5) and Chiesa for the LW start with Isak still out",
  CAM: "Started right vs MUN · top creator with Salah AND Isak both unavailable · could play centrally vs Chelsea with Wirtz the No.10 link",
  RAM: "Pulled the goal back at MUN (47', 8.5/10 Goal.com) · drives the right channel · engine of the run-in",
  ST:  "Scored 56' at Old Trafford to make it 2-2 · false-9 only senior No.9 standing with Isak (groin) and Salah (hamstring) both out · Wed May 6 Anfield Index says there's 'genuine belief' Isak could feature, so Gakpo's lock weakens slightly",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-2-3-1.
export const ALTERNATIVES = {
  GK:  [{ playerId: 27, reason: "Woodman · two consecutive PL starts · stays third-choice depth if Alisson has a setback" }, { playerId: 2, reason: "Mamardashvili · stitched knee · ~1 week away from return" }],
  LB:  [{ playerId: 6, reason: "Robertson · could rotate back in if Slot wants experience for the home run-in" }],
  LCB: [{ playerId: 5, reason: "Gomez · unused MUN bench · back in the squad · likely summer exit per Beukema link" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB with Konaté/VVD nailed on" }],
  RB:  [{ playerId: 9, reason: "Frimpong · natural RB if Slot pulls Curtis Jones inside again" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · could swap to LDM if Gravenberch needs a rest" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · could be paired LDM with Mac Allister at RDM" }],
  LAM: [{ playerId: 26, reason: "Chiesa · senior winger option if Slot avoids back-to-back Ngumoha starts" }, { playerId: 9, reason: "Frimpong · pace option wide if 5.5 vs MUN was a one-off" }],
  CAM: [{ playerId: 22, reason: "Gakpo · could shift back to LW if Slot moves Wirtz central as a No.9" }],
  RAM: [{ playerId: 18, reason: "Wirtz · could swap right with Szoboszlai if Slot prefers central drive" }, { playerId: 9, reason: "Frimpong · pace option · likely back to RB cameo though" }],
  ST:  [{ playerId: 18, reason: "Wirtz · false-9 alternative · top creator with Isak and Salah both out" }, { playerId: 25, reason: "Ngumoha · youngest-ever PL Anfield scorer · could play centrally" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  reason: "Thu May 7 — Two days out from Chelsea (H) Sat May 9. Thu's lead is Alisson: Liverpool.com (citing Nicolo Schira) reports the keeper has 'agreed personal terms with Juventus' on a €5m-a-year deal — Liverpool still need to be convinced and the Brazilian isn't agitating. Slot's Read Liverpool/Anfield Index update Thursday: Alisson and Isak being managed with 'small margins' but both back training this week, targeting Saturday. Wednesday's Curtis Jones escalation holds: EOTK/Yahoo Sports confirmed contract talks 'effectively ceased' and an Inter exit 'now seems likely' off Tuesday's Romano 'full approval' line — but on the pitch nothing about Jones changes for Saturday (8/10, 100+ touches at MUN). Squad picture otherwise unchanged from Monday's read: Robertson (5-6.5 per Goal.com) and Frimpong (5.5 'no end product') likely OUT, Kerkez at LB after his 59' cameo cleared the niggle, Ngumoha the live LW favourite over Chiesa, Mac Allister fit (head cap from VVD elbow). Confidence Medium because GK (Alisson vs Woodman), LAM (Ngumoha vs Chiesa) and ST (Gakpo with possible Isak return) remain the three open calls — all three could flip after Slot's Friday presser.",
  pundit_sources: ["Tribuna / Romano", "Nicolo Schira", "Sky Sports", "Goal.com", "BBC Sport", "ESPN", "Yahoo Sports", "TNT Sports", "The Athletic", "This Is Anfield", "Liverpool.com", "Empire of the Kop", "TeamTalk", "Read Liverpool", "Rousing The Kop", "Anfield Index", "Anfield Watch", "Sports Mole", "DaveOCKOP"],
  agreement_rate: 0.72,
  generated_at: "2026-05-07T09:00:00Z",
};
