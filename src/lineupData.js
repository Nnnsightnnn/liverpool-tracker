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
    // Updated Mon May 4 after the 3-2 Old Trafford defeat (Sun May 3): Frimpong
    // (5.5) and Robertson (5-6.5) flopped per Goal.com & TIA ratings — Slot
    // will likely revert to Curtis Jones at RB (8/10, 100+ touches at MUN) and
    // give Kerkez the LB nod after the Hungarian came on at 59' for Robbo.
    // Alisson now expected back from his hamstring per LFC Mon May 4 outlook;
    // Mac Allister played through head wound (VVD elbow) — fit. Gakpo continues
    // as false-9 with Isak still out (groin, 1-2 wks), Salah hamstring keeps
    // him out until Brentford May 24. Ngumoha came on at 75' vs MUN; live in
    // contention to start with Frimpong's display likely costing him.
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
    // Updated Mon May 4 after the 3-2 Old Trafford defeat: Slot will likely
    // restore Alisson (LFC Mon May 4 outlook), bring Kerkez in at LB after
    // Robertson's 5-6.5 outing, keep Curtis Jones at RB (8/10 vs MUN), pair
    // Gravenberch + Mac Allister in the double pivot (Mac Allister played
    // through the head wound), float Wirtz at the 10 (top creator with Salah
    // and Isak out), Szoboszlai right and Ngumoha left after Frimpong's 5.5.
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
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-04.
export const PLAYER_EVIDENCE = {
  1:  "Returning · 8-week hamstring layoff ends",     // Alisson
  2:  "Stitched knee · Aston Villa target return",   // Mamardashvili
  3:  "Captain · 19th defeat skipper · anchor",      // Van Dijk
  4:  "Started MUN · new deal 'never closer'",       // Konaté
  5:  "Unused MUN bench · likely summer exit",       // Gomez
  6:  "Hooked 59' MUN · Goal.com 'flop' rating",     // Robertson
  7:  "Came on 59' MUN · LB nod for Chelsea",        // Kerkez
  8:  "Knee surgery · out for season",               // Bradley
  9:  "Hooked 75' MUN · 5.5 'no end product'",       // Frimpong
  10: "Torn ACL · out for season",                   // Leoni
  11: "Deputy CB · Form 6.6",                        // Jacquet
  12: "Academy depth · 2 senior apps",               // Ndukwe
  13: "Head-cap warrior at MUN · 7/10",              // Mac Allister
  14: "Returned to start MUN · 7/10",                // Gravenberch
  15: "8.5/10 vs MUN · pulled goal back",            // Szoboszlai
  16: "8/10 RB at MUN · 100+ touches",               // Jones
  17: "Ankle surgery · out for season",              // Endo
  18: "Started right vs MUN · top creator",          // Wirtz
  19: "Hamstring · yet to play this season",         // Bajcetic
  20: "Academy prospect · 5 senior apps",            // Nyoni
  21: "Hamstring · Brentford May 24 farewell",       // Salah
  22: "Scored 56' vs MUN · false-9 lead",            // Gakpo
  23: "Groin strain · 1-2 wks · Villa target",       // Isak
  24: "Ruptured Achilles · out 9-12 months",         // Ekitike
  25: "Came on 75' MUN · live for Chelsea start",    // Ngumoha
  26: "Unused MUN bench · likely summer exit",       // Chiesa
  27: "Two PL starts · drops back when Alisson fit", // Woodman
};

// Default formation when entering the view — matched Slot's derby-winning shape
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1).
export const SLOT_CONFIDENCE = {
  GK:  "Medium", // Alisson 'very close' (Apr 30) · could miss again — Woodman fallback
  LB:  "High",   // Kerkez came on at 59' for Robertson at MUN · gets the LB nod
  LCB: "High",   // Van Dijk captain · 19th defeat skipper · anchor
  RCB: "High",   // Konaté started MUN · new deal 'never been closer' (ESPN Apr 30)
  RB:  "High",   // Curtis Jones 8/10, 100+ touches at MUN · Trent-redux RB nailed on
  LDM: "High",   // Gravenberch returned to start MUN · 7/10 · plays through
  RDM: "Medium", // Mac Allister fit (head cap) but VVD elbow caution · pivot pairing fluid
  LAM: "Medium", // Ngumoha came on 75' MUN · ahead of Frimpong but Chiesa option live
  CAM: "High",   // Wirtz · top creator with Salah AND Isak out · drives the No.10 channel
  RAM: "High",   // Szoboszlai 8.5/10 vs MUN · engine of run-in · drives right channel
  ST:  "Medium", // Gakpo as false-9 · scored 56' MUN · Wirtz central also possible
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
export const SLOT_RATIONALE = {
  GK:  "LFC's Mon May 4 outlook flags Alisson as a realistic Chelsea (May 9) return after his Apr 30 'very close to training' line — eight-week hamstring layoff finally ending. Woodman drops back to bench after two consecutive starts; Mama still ~1 week away",
  LB:  "Came on at 59' for Robertson at Old Trafford (Sun May 3) — niggle clear, gets the LB start back after Robertson's 5-6.5 'flop' rating per Goal.com",
  LCB: "Captain · 19th defeat skipper · still anchors the line · The Athletic (Apr 30) reports VVD now expected to leave end of 2026-27",
  RCB: "Started Old Trafford defeat (Sun May 3) · Romano + ESPN (Apr 30): new Liverpool deal 'never been closer' — only length and bonuses left to settle. 'It's Liverpool'",
  RB:  "Goal.com 8/10 at Old Trafford with over 100 touches · Slot Apr 27 'comfort on the ball, like Trent had at right-back' · Trent-redux RB experiment continues to thrive",
  LDM: "Returned to start MUN — 7/10, nine passes into the final third (TIA) · ball-winning anchor · plays through the run-in despite NBC Sports flagging him for a rest",
  RDM: "Played through head wound after VVD elbow at MUN (head cap second half) · Goal.com 7/10 'pretty epic midfield battle' · expected fit for Chelsea (May 9)",
  LAM: "Came on at 75' for Frimpong at MUN — first attacking change as the comeback fizzled. Ahead of Frimpong (5.5) and Chiesa for the LW start with Isak still out",
  CAM: "Started right vs MUN · top creator with Salah AND Isak both unavailable · could play centrally vs Chelsea with Wirtz the No.10 link",
  RAM: "Pulled the goal back at MUN (47', 8.5/10 Goal.com) · drives the right channel · engine of the run-in",
  ST:  "Scored 56' at Old Trafford to make it 2-2 · false-9 only senior No.9 standing with Isak (groin) and Salah (hamstring) both out for Chelsea · nailed-on lead",
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
  reason: "Mon May 4 — Five days out from Chelsea (H) Sat May 9, the post-MUN read: Liverpool lost 3-2 at Old Trafford with Cunha 6', Sesko 14' and Mainoo 77' overcoming Szoboszlai 47' and Gakpo 56' — Slot's confirmed XI was Woodman; Jones, Konate, Van Dijk, Robertson; Szoboszlai, Gravenberch, Mac Allister; Frimpong, Gakpo, Wirtz (subs Kerkez 59', Ngumoha 75'). Two of those starters are likely OUT of the next XI: Robertson got 5-6.5 with Goal.com calling him a 'flop', and Frimpong got 5.5 ('no end product, lost 8 of 10 duels with Luke Shaw' — TIA). Kerkez gets the LB nod after his cameo cleared the niggle, and Ngumoha — who replaced Frimpong on 75' — is the live LW favourite. Alisson is now expected back from his eight-week hamstring layoff per LFC's Mon outlook (Slot's Apr 30 'very close' line). Mac Allister played through a head wound from a VVD elbow (head cap second half) and is expected fit. Curtis Jones (8/10, 100+ touches) keeps RB. Confidence Medium because GK return (Alisson) and the LW slot (Ngumoha vs Chiesa) remain the two open calls — both could flip on Friday.",
  pundit_sources: ["Sky Sports", "Goal.com", "BBC Sport", "ESPN", "FOX Sports", "TNT Sports", "The Athletic", "This Is Anfield", "Liverpool.com", "Empire of the Kop", "TeamTalk", "NBC Sports", "Sports Illustrated", "Rousing The Kop", "Read Liverpool"],
  agreement_rate: 0.72,
  generated_at: "2026-05-04T09:30:00Z",
};
