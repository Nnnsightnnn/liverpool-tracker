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
    // IDs from playerData.js — Slot's likely XI for Chelsea (H), Sat May 9 12:30 BST.
    // Updated Sat May 9 (matchday morning): Slot's Friday presser flipped the
    // injury picture decisively. Mamardashvili is back a week early and Romano
    // (EOTK Sat morning) reports Liverpool 'confident' he STARTS — Woodman
    // drops to the bench. Konaté absent Wed for 'a personal reason' (NOT
    // injured) — back in the XI alongside VVD. Wirtz had a 'minor illness' —
    // also fit, returns to the front three. Salah and Alisson confirmed out by
    // Slot. Isak rejoined training Thursday but bench is best-case (Goal.com).
    // TIA / Sports Mole / OneFootball predicted XI: Mamardashvili; Jones,
    // Konate, Van Dijk, Robertson; Szoboszlai, Gravenberch, Mac Allister;
    // Frimpong, Gakpo, Wirtz.
    defaultXI: {
      GK: 2,    // Mamardashvili (surprise early return · Romano: 'confident he starts')
      LB: 6,    // Robertson (TIA/Sports Mole back the experienced LB; Kerkez bench rotation)
      LCB: 3,   // Van Dijk (captain · anchors the line)
      RCB: 4,   // Konaté (false alarm Wed · Slot: 'personal reason, not injury')
      RB: 16,   // Curtis Jones (Trent-redux RB · 8/10 vs MUN · still nailed on)
      LCM: 13,  // Mac Allister (head-cap warrior at MUN · contract talks 'have not taken place')
      CM: 14,   // Gravenberch (returned to start MUN · 7/10 · ball-winning anchor)
      RCM: 15,  // Szoboszlai (8.5/10 vs MUN · pulled goal back · engine of run-in)
      LW: 18,   // Wirtz (false-alarm illness · TIA puts him on the LEFT of the front three)
      ST: 22,   // Gakpo (scored 56' vs MUN · false-9 with Salah out, Isak only bench-fit)
      RW: 9,    // Frimpong (TIA's predicted XI puts him on the right; Ngumoha bench)
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
    // Slot's likely XI for Chelsea (H) Sat May 9 12:30 BST in his preferred 4-2-3-1.
    // Updated Sat May 9 (matchday): mirrors the 4-3-3 changes — Mamardashvili
    // back in goal, Konaté and Wirtz cleared (false alarms), Salah/Alisson out.
    // Robertson reinstated at LB per TIA/Sports Mole previews. Wirtz at the
    // No.10 (his natural creative role) with Salah out; Frimpong RAM as wide
    // option and Gakpo as the only senior No.9 standing.
    defaultXI: {
      GK: 2,    // Mamardashvili (surprise early return · Romano: 'confident he starts')
      LB: 6,    // Robertson (TIA/Sports Mole back the experienced LB)
      LCB: 3,   // Van Dijk (captain · anchors the line)
      RCB: 4,   // Konaté (false alarm Wed · Slot: 'personal reason, not injury')
      RB: 16,   // Curtis Jones (8/10 vs MUN · 100+ touches · Trent-redux RB)
      LDM: 14,  // Gravenberch (returned to start MUN · 7/10 · ball-winner)
      RDM: 13,  // Mac Allister (head-cap warrior · contract talks 'have not taken place')
      LAM: 25,  // Ngumoha (came on 75' vs MUN · live wide option with Salah out)
      CAM: 18,  // Wirtz (false-alarm illness · top creator with Salah out)
      RAM: 15,  // Szoboszlai (pulled the goal back at MUN 8.5/10 · drives right)
      ST: 22,   // Gakpo (scored 56' vs MUN · false-9 only senior No.9 starting)
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
      GK: 2,    // Mamardashvili (surprise early return · Romano confident he starts)
      LCB: 7,   // Kerkez tucking in (came on for Robbo at MUN · niggle clear)
      CCB: 3,   // Van Dijk (captain · anchors the line)
      RCB: 4,   // Konaté (false alarm Wed · 'personal reason, not injury')
      LWB: 6,   // Robertson (back as wing-back in this shape)
      LCM: 14,  // Gravenberch (returned to start MUN · 7/10)
      RCM: 13,  // Mac Allister (head-cap warrior at MUN · expected fit)
      RWB: 16,  // Curtis Jones at RWB (8/10 RB at MUN · 100+ touches)
      LW: 25,   // Ngumoha (came on 75' vs MUN · live for wide start)
      ST: 22,   // Gakpo as false-9 (scored 56' vs MUN · only senior No.9 starting)
      RW: 18,   // Wirtz (false-alarm illness cleared)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-09.
export const PLAYER_EVIDENCE = {
  1:  "Slot: 'Won't play Saturday' · still hamstring",   // Alisson
  2:  "Surprise early return · 'confident' starts",      // Mamardashvili
  3:  "Captain · anchors the line",                      // Van Dijk
  4:  "False alarm — 'personal reason' Wed · cleared",   // Konaté
  5:  "Unused MUN bench · likely summer exit",           // Gomez
  6:  "TIA/Sports Mole back him at LB vs Chelsea",       // Robertson
  7:  "Came on 59' MUN · bench rotation likely",         // Kerkez
  8:  "Knee surgery · out for season",                   // Bradley
  9:  "TIA predicted XI puts him at RW vs Chelsea",      // Frimpong
  10: "Torn ACL · out for season",                       // Leoni
  11: "Deputy CB · live if Konaté ruled out",            // Jacquet
  12: "Academy depth · 2 senior apps",                   // Ndukwe
  13: "'No contract talks' per father Carlos · MUN 7/10", // Mac Allister
  14: "Returned to start MUN · 7/10 · ball-winner",      // Gravenberch
  15: "8.5/10 vs MUN · pulled goal back",                // Szoboszlai
  16: "Talks 'effectively ceased' · Inter exit likely",  // Jones
  17: "Ankle surgery · out for season",                  // Endo
  18: "False alarm illness · cleared to start",          // Wirtz
  19: "Hamstring · yet to play this season",             // Bajcetic
  20: "Academy prospect · 5 senior apps",                // Nyoni
  21: "Slot: 'Won't play Saturday' · Brentford target",  // Salah
  22: "Scored 56' vs MUN · false-9 lead",                // Gakpo
  23: "Back in training Thurs · bench best-case",        // Isak
  24: "Ruptured Achilles · out 9-12 months",             // Ekitike
  25: "Came on 75' MUN · LAM option with Salah out",     // Ngumoha
  26: "Unused MUN bench · likely summer exit",           // Chiesa
  27: "Drops to bench · Mamardashvili back early",       // Woodman
};

// Default formation when entering the view — TIA/Sports Mole/OneFootball
// previews all centre on a 4-3-3 for Chelsea today, so we lead with that
export const DEFAULT_FORMATION = "4-3-3";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-3-3).
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Mamardashvili surprise early return · Romano 'confident' he starts
  LB:  "High",   // Robertson · TIA/Sports Mole/OneFootball predicted XI all back him
  LCB: "High",   // Van Dijk captain · anchors line
  RCB: "High",   // Konaté · 'personal reason' Wed not injury · Slot confirmed back
  RB:  "High",   // Curtis Jones · 8/10 at MUN · Trent-redux RB · still nailed on
  LCM: "High",   // Mac Allister · head-cap warrior · 7/10 vs MUN
  CM:  "High",   // Gravenberch · returned to start MUN · 7/10 · ball-winner
  RCM: "High",   // Szoboszlai · 8.5/10 vs MUN · engine of run-in
  LW:  "Medium", // Wirtz on the left per TIA · could rotate centrally instead
  ST:  "Medium", // Gakpo as false-9 · Isak bench return could swing it
  RW:  "Medium", // Frimpong (TIA pick) · could be Ngumoha if Slot rests him
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-3-3).
export const SLOT_RATIONALE = {
  GK:  "Sat May 9 — surprise early return: Slot confirmed Friday Mamardashvili is back from the Apr 19 derby knee wound a week ahead of schedule, and Romano (EOTK Sat morning) reports Liverpool 'confident' he STARTS vs Chelsea. Liverpool.com lead: 'Mamardashvili surprise.' Woodman drops to the bench after two consecutive PL starts.",
  LB:  "TIA, Sports Mole and OneFootball previewed Sat May 9: Robertson back at LB with Kerkez rotated to the bench. The Scotland captain still has the experience edge for the home Champions League sealer; April reporting (Goal.com) had him at 5-6.5 'flop' at MUN but Slot leans on the senior body for Anfield occasions.",
  LCB: "Captain · 19th defeat skipper · anchors the line · The Athletic (Apr 30) reports VVD now expected to leave end of 2026-27",
  RCB: "Sat May 9 — Slot in Friday's presser confirmed: 'Ibou had a personal reason for not training on Wednesday but was yesterday and today again.' Sports Mole/Liverpool.com headline: 'Slot calms Konaté and Wirtz injury fears.' Back in the XI alongside VVD; the Wed scare was a false alarm.",
  RB:  "TIA/Sports Mole both pencil him in at RB for Chelsea today. Off the pitch EOTK/Yahoo Sports stand: contract talks 'effectively ceased,' Inter Milan exit 'now seems likely' after Romano's 'full approval' line. On the pitch he's still nailed on for the run-in: Goal.com 8/10 at Old Trafford with over 100 touches.",
  LCM: "Caught by VVD's elbow at MUN, played through with head cap for a 7/10 (Goal.com 'pretty epic midfield battle'). Off the pitch his father Carlos broke cover Thu May 7: 'No contract talks have taken place — and won't until the season ends.' Real Madrid credited with interest. Holds the LCM slot for now.",
  CM:  "Returned to start MUN — 7/10, nine passes into the final third (TIA) · ball-winning anchor · plays through the run-in despite NBC Sports flagging him for a rest",
  RCM: "Pulled the goal back at MUN (47', 8.5/10 Goal.com) · drives the right channel · engine of the run-in",
  LW:  "Sat May 9 — Slot confirmed Wirtz missed Wednesday 'feeling unwell' (a minor illness, not an injury). Sports Mole/Liverpool.com: 'Slot calms injury fears.' TIA's predicted XI puts him on the LEFT of the front three (with Frimpong on the right and Gakpo central) — a slight tweak from his MUN role on the right.",
  ST:  "Scored 56' at Old Trafford to make it 2-2 · false-9 only senior No.9 starting with Salah hamstrung and Isak limited to a bench return · Goal.com Fri: Isak bench role 'the best possible outcome.'",
  RW:  "TIA's Sat May 9 predicted XI puts Frimpong on the right of the front three · the 5.5 rating from MUN held against him in the LW spot but he's the natural RW with Salah out and Wirtz pushed to the LEFT.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to 4-3-3.
export const ALTERNATIVES = {
  GK:  [{ playerId: 27, reason: "Woodman · two consecutive PL starts but drops to the bench with Mamardashvili back" }, { playerId: 1, reason: "Alisson · Slot confirmed 'won't play Saturday' — Aston Villa Fri May 15 the firmer return" }],
  LB:  [{ playerId: 7, reason: "Kerkez · came on at 59' for Robbo at MUN · could rotate back in if Slot wants legs over experience" }],
  LCB: [{ playerId: 5, reason: "Gomez · unused MUN bench · likely summer exit per Beukema link" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB · live starter only if Konaté has a setback in the warm-up" }, { playerId: 5, reason: "Gomez · senior alternative · likely summer exit per Beukema link" }],
  RB:  [{ playerId: 9, reason: "Frimpong · natural RB if Slot pulls Curtis Jones inside again" }],
  LCM: [{ playerId: 14, reason: "Gravenberch · could swap to LCM in a deeper pivot" }],
  CM:  [{ playerId: 13, reason: "Mac Allister · could drop deeper if Slot wants Gravenberch higher" }],
  RCM: [{ playerId: 13, reason: "Mac Allister · could shift right if Szoboszlai is rested" }],
  LW:  [{ playerId: 25, reason: "Ngumoha · came on 75' MUN · still in matchday squad and live for the LW with Wirtz fluid" }, { playerId: 26, reason: "Chiesa · senior winger option if Slot rests Wirtz" }],
  ST:  [{ playerId: 23, reason: "Isak · rejoined training Thursday — bench role likely but could come on as a sub for the run-in cameo" }, { playerId: 25, reason: "Ngumoha · youngest-ever PL Anfield scorer · could play centrally" }],
  RW:  [{ playerId: 18, reason: "Wirtz · could shift to the right if Slot prefers Ngumoha on the LW" }, { playerId: 25, reason: "Ngumoha · live wide option if Frimpong drops back to RB cover" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "High",
  reason: "Sat May 9 (matchday) — kick-off vs Chelsea (H) at 12:30 BST. Slot's Friday presser flipped the picture decisively: Konaté (personal reason Wed, NOT injured) and Wirtz (minor illness) BOTH cleared; Mamardashvili surprise early return — Romano (EOTK) reports Liverpool 'confident' he STARTS in goal. Salah and Alisson confirmed OUT by Slot ('won't play Saturday'). Isak rejoined training Thursday but bench is best-case (Goal.com). TIA, Sports Mole and OneFootball previewed XI: Mamardashvili; Jones, Konate, Van Dijk, Robertson; Szoboszlai, Gravenberch, Mac Allister; Frimpong, Gakpo, Wirtz. Confidence HIGH because 9-10 of the 11 are settled — only the final attacking shape (Wirtz LW vs CAM, Frimpong vs Ngumoha on the right) carries any rotation risk.",
  pundit_sources: ["This Is Anfield", "Sports Mole", "OneFootball", "Liverpool.com", "Goal.com", "Empire of the Kop", "Tribuna / Romano", "Sky Sports", "FOX Sports", "Yahoo Sports", "TNT Sports", "Anfield Index", "Liverpool FC", "SI", "Last Word On Sports", "FootballTransfers"],
  agreement_rate: 0.85,
  generated_at: "2026-05-09T08:00:00Z",
};
