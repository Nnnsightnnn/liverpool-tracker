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
    // IDs from playerData.js — 4-3-3 ALTERNATIVE read of Slot's confirmed XI
    // for Aston Villa (A), Fri May 15 8pm BST. Slot has gone 4-2-3-1 (see
    // below) but the same eleven also reads as a 4-3-3 with Curtis Jones as
    // an inverted RW and Szoboszlai as the central No. 8: Mamardashvili;
    // Gomez, Konate, Van Dijk, Kerkez; Mac Allister, Gravenberch, Szoboszlai;
    // Gakpo, Ngumoha, Jones (Liverpool FC official / Liverpool.com confirmed
    // teamsheet). Joe Gomez starts at RB after Frimpong joined Isak on the
    // late injury list; Curtis Jones pushed forward; Ngumoha promoted to the
    // No. 9 role. Salah, Wirtz, Chiesa all on the bench. Alisson still out.
    defaultXI: {
      GK: 2,    // Mamardashvili (3rd straight start · Alisson out of squad)
      LB: 7,    // Kerkez (confirmed XI · LB)
      LCB: 3,   // Van Dijk (captain · CONFIRMED start)
      RCB: 4,   // Konaté (Slot Thu: 'Ibou is OK' · CONFIRMED start)
      RB: 5,    // Gomez (CONFIRMED at RB · Frimpong's minor injury opens the door)
      LCM: 13,  // Mac Allister (90 mins Chelsea · CONFIRMED start)
      CM: 14,   // Gravenberch (SCORED 6' vs Chelsea · double-pivot partner)
      RCM: 15,  // Szoboszlai (engine of run-in · CONFIRMED start)
      LW: 22,   // Gakpo (CONFIRMED LW · keeps slot with Isak out)
      ST: 25,   // Ngumoha (PROMOTED to No. 9 · 17yo · 'starts again, NO Isak')
      RW: 16,   // Curtis Jones (pushed UP from RB · LFC: 'further forward')
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
    // Slot's CONFIRMED 4-2-3-1 for Villa Park, Fri May 15 (match day) per
    // Liverpool FC official teamsheet and Liverpool.com:
    // Mamardashvili; Gomez, Konate, Van Dijk, Kerkez; Gravenberch, Mac
    // Allister; Jones, Szoboszlai, Gakpo; Ngumoha. Double pivot of
    // Gravenberch + Mac Allister; Jones-Szoboszlai-Gakpo behind the
    // 17-year-old Ngumoha. Gomez at RB after Frimpong joined Isak on the
    // late injury list. Salah, Wirtz, Chiesa on the bench. Alisson still out.
    defaultXI: {
      GK: 2,    // Mamardashvili (3rd straight start · Alisson still out)
      LB: 7,    // Kerkez (CONFIRMED LB)
      LCB: 3,   // Van Dijk (captain · CONFIRMED start)
      RCB: 4,   // Konaté (Slot Thu: 'Ibou is OK' · CONFIRMED)
      RB: 5,    // Gomez (CONFIRMED at RB · Frimpong out, Gomez in)
      LDM: 14,  // Gravenberch (double pivot · scored 6' vs Chelsea)
      RDM: 13,  // Mac Allister (double pivot · 90 mins Chelsea)
      LAM: 22,  // Gakpo (CONFIRMED LW · keeps slot with Isak out)
      CAM: 15,  // Szoboszlai (CONFIRMED No. 10 · Wirtz benched)
      RAM: 16,  // Curtis Jones (CONFIRMED · pushed UP from RB into attacking three)
      ST: 25,   // Ngumoha (PROMOTED to No. 9 · 17yo · Isak ruled out late)
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
    // Hypothetical 3-4-3 alternative if Slot had wanted extra cover away from
    // home (he didn't — confirmed 4-2-3-1 above). Built from the same
    // available pool: VVD/Konaté/Gomez as the back three, Kerkez and Jones as
    // wing-backs, Gravenberch + Mac Allister in midfield, Gakpo-Ngumoha-Szobo
    // as the front three. Both Isak AND Frimpong ruled out late (minor
    // injuries); Alisson and the long-term outs (Ekitike, Bradley, Leoni,
    // Endo, Bajcetic) unchanged.
    defaultXI: {
      GK: 2,    // Mamardashvili (3rd straight start · Alisson still out)
      LCB: 5,   // Gomez (CONFIRMED start in real XI · slots into back three here)
      CCB: 3,   // Van Dijk (captain · anchors the back three)
      RCB: 4,   // Konaté (Slot Thu: 'Ibou is OK')
      LWB: 7,   // Kerkez (slides up as LWB from confirmed LB)
      LCM: 14,  // Gravenberch (scored 6' Chelsea · 7/10)
      RCM: 13,  // Mac Allister (90 mins Chelsea)
      RWB: 16,  // Curtis Jones at RWB (RB-cum-RW in real XI · wing-back fit)
      LW: 22,   // Gakpo (CONFIRMED LW · keeps slot)
      ST: 25,   // Ngumoha (PROMOTED No. 9 · 17yo · Isak ruled out late)
      RW: 15,   // Szoboszlai (slides right in 3-4-3 with Jones at RWB)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS array + injuryNote context as of 2026-05-15.
export const PLAYER_EVIDENCE = {
  1:  "Still out of squad · Brentford the realistic return", // Alisson
  2:  "CONFIRMED · 3rd straight start at Villa Park",     // Mamardashvili
  3:  "CONFIRMED · captain in back four · 4-2-3-1",       // Van Dijk
  4:  "CONFIRMED · Slot: 'Ibou is OK' · alongside VVD",   // Konaté
  5:  "CONFIRMED at RB · Frimpong out, Gomez in",         // Gomez
  6:  "Bench at Villa · Brentford farewell looms",        // Robertson
  7:  "CONFIRMED LB · 90 mins Sat · locked in",           // Kerkez
  8:  "Knee surgery · out for season",                    // Bradley
  9:  "Out · 'minor injury' · hopeful for Brentford",     // Frimpong
  10: "Torn ACL · out for season",                        // Leoni
  11: "Deputy CB · cover only",                           // Jacquet
  12: "Academy depth · 2 senior apps",                    // Ndukwe
  13: "CONFIRMED · double-pivot · 90 mins Chelsea",       // Mac Allister
  14: "CONFIRMED · double-pivot · scored 6' vs Chelsea",  // Gravenberch
  15: "CONFIRMED No. 10 · engine of run-in",              // Szoboszlai
  16: "CONFIRMED · pushed UP from RB · LFC: 'further forward'", // Jones
  17: "Ankle surgery · out for season",                   // Endo
  18: "Bench at Villa · recovered from antibiotics",      // Wirtz
  19: "Hamstring · yet to play this season",              // Bajcetic
  20: "Academy prospect · 5 senior apps",                 // Nyoni
  21: "BENCH · Slot: 'available for a few minutes'",      // Salah
  22: "CONFIRMED LW · keeps slot with Isak out",          // Gakpo
  23: "Out · 'minor injury' · hopeful for Brentford",     // Isak
  24: "Ruptured Achilles · out 9-12 months",              // Ekitike
  25: "CONFIRMED No. 9 · 17yo promoted with Isak out",    // Ngumoha
  26: "Bench at Villa · summer exit list",                // Chiesa
  27: "Bench at Villa · Mamard ahead of him",             // Woodman
};

// Default formation when entering the view — Slot has CONFIRMED a 4-2-3-1 at
// Villa Park (Fri May 15) with Gomez at RB, Curtis Jones pushed forward into
// the attacking three and 17-year-old Rio Ngumoha leading the line after
// Isak's late minor-injury withdrawal.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by formation's
// slot keys. The UI renders these as colored dots on each pitch token.
// Keys match DEFAULT_FORMATION (4-2-3-1) — all High because the XI is
// CONFIRMED by Liverpool FC's official teamsheet, not predicted.
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Mamardashvili · CONFIRMED · Alisson still out
  LB:  "High",   // Kerkez · CONFIRMED · 90 mins Chelsea
  LCB: "High",   // Van Dijk · CONFIRMED captain
  RCB: "High",   // Konaté · CONFIRMED · Slot Thu: 'Ibou is OK'
  RB:  "High",   // Gomez · CONFIRMED · Frimpong out late
  LDM: "High",   // Gravenberch · CONFIRMED double-pivot
  RDM: "High",   // Mac Allister · CONFIRMED double-pivot
  LAM: "High",   // Gakpo · CONFIRMED LW
  CAM: "High",   // Szoboszlai · CONFIRMED No. 10
  RAM: "High",   // Curtis Jones · CONFIRMED · pushed UP from RB
  ST:  "High",   // Ngumoha · CONFIRMED No. 9 · Isak out late
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// Explains why the predicted starter won their slot. Populated by the predictor;
// hand-set initially. Keyed by slot key (for the active formation — 4-2-3-1).
export const SLOT_RATIONALE = {
  GK:  "Fri May 15 (match day) — CONFIRMED · Mamardashvili keeps the gloves at Villa Park for a third straight start. Alisson again left out of the matchday squad despite returning to training Thursday; Slot at the presser warned the Brazilian may need 'one more week' before the Brentford finale.",
  LB:  "Fri May 15 (match day) — CONFIRMED · Kerkez retains the LB shirt at Villa Park after a 90-minute display in Sat's 1-1 Chelsea Anfield draw. Robertson on the bench, summer exit still looming.",
  LCB: "Fri May 15 (match day) — CONFIRMED · Van Dijk through full Wed and Thu sessions with Saturday's cramp episode behind him. Liverpool.com Thursday: VVD's Galatasaray exit RULED OUT under a new rule — captain locked in alongside Konaté.",
  RCB: "Fri May 15 (match day) — CONFIRMED · Slot at Thursday's presser, picked up by Liverpool FC's official readout: 'Ibou is OK, [he] trained with us.' Konaté came off Sat's Chelsea draw with a thigh complaint but cleared. Off-pitch contract 'stalemate' hovers but doesn't move the XI.",
  RB:  "Fri May 15 (match day) — CONFIRMED · Joe Gomez starts at RB after Frimpong joined Isak on the late injury list (RotoWire / This Is Anfield). First start since Wednesday's 'anything can happen … we'll see' exit-interview cycle and the most consequential 90 of his run-in.",
  LDM: "Fri May 15 (match day) — CONFIRMED · Gravenberch in the double-pivot at Villa Park after SCORING Sat's 6th-minute opener vs Chelsea (curled finish off Ngumoha's left-wing assist · 7/10 across This Is Anfield / Liverpool.com / Sky Sports).",
  RDM: "Fri May 15 (match day) — CONFIRMED · Mac Allister completed 90 minutes in Sat's 1-1 Chelsea draw and partners Gravenberch in the double-pivot. Father Carlos last week: 'No contract talks have taken place.' Argentine locks the No. 6 berth.",
  LAM: "Fri May 15 (match day) — CONFIRMED · Gakpo keeps his LW slot in the 4-2-3-1 after leading the line as a false 9 vs Chelsea ('goes missing' per Liverpool.com, 5-6/10 ratings). With Ngumoha promoted centrally, the natural shift wide may suit him better.",
  CAM: "Fri May 15 (match day) — CONFIRMED · Szoboszlai takes the No. 10 berth at Villa Park, drifting between attacking-mid and right after a 90-minute Chelsea display. Wirtz on the bench (recovered from antibiotics for the stomach infection but not deemed fit to start).",
  RAM: "Fri May 15 (match day) — CONFIRMED · Curtis Jones pushed FORWARD into the attacking three from his previous RB berth (Liverpool FC / Liverpool.com: 'moves further forward after a stint at full-back'). Gomez takes RB; Jones drops into right-attacking mid alongside Szoboszlai and Gakpo.",
  ST:  "Fri May 15 (match day) — CONFIRMED · 17-year-old Rio Ngumoha PROMOTED to the No. 9 role after Slot ruled Isak out at kickoff with a 'minor injury' (ESPN / Sports Mole). This Is Anfield's headline: 'Rio Ngumoha starts again, NO Isak.' The teen who assisted Gravenberch's opener vs Chelsea now asked to lead the line in a Champions-League-shaping fixture.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the confirmed shape at Villa Park).
export const ALTERNATIVES = {
  GK:  [{ playerId: 1, reason: "Alisson · still out of the matchday squad · Slot Thu: 'may have to wait one more week' before the Brentford finale" }, { playerId: 27, reason: "Woodman · bench cover" }],
  LB:  [{ playerId: 6, reason: "Robertson · bench at Villa · projected Brentford farewell · summer exit looms" }],
  LCB: [{ playerId: 5, reason: "Gomez · CONFIRMED at RB, could shuffle to LCB in extremis" }],
  RCB: [{ playerId: 11, reason: "Jacquet · deputy CB · live starter only if Konaté has a setback" }],
  RB:  [{ playerId: 9, reason: "Frimpong · OUT at Villa with a 'minor issue' · hopeful for Brentford May 24" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · CONFIRMED RDM in the double-pivot · could swap with Gravenberch" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · CONFIRMED LDM · could swap depths with Mac Allister" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · CONFIRMED ST in real XI · natural LW alternative if Slot shifts" }, { playerId: 26, reason: "Chiesa · senior winger option · on the bench" }],
  CAM: [{ playerId: 18, reason: "Wirtz · BENCH at Villa · recovered from the antibiotics course but not fit to start" }, { playerId: 13, reason: "Mac Allister · could push up to CAM if Slot wants extra creativity" }],
  RAM: [{ playerId: 18, reason: "Wirtz · BENCH · natural No. 10/right-attacking-mid if introduced as a sub" }, { playerId: 21, reason: "Salah · BENCH · Slot: 'available for a few minutes' before Brentford farewell" }],
  ST:  [{ playerId: 22, reason: "Gakpo · CONFIRMED LW · false-9 option from Chelsea but 'goes missing' per LFC.com" }, { playerId: 21, reason: "Salah · BENCH · short cameo if game is settled · Brentford the farewell" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall prediction confidence chip shown above the pitch. Enriched with
// predictor metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "High",
  reason: "Fri May 15 (match day) — CONFIRMED Liverpool XI vs Aston Villa (Liverpool FC official teamsheet, Liverpool.com): Mamardashvili; Gomez, Konate, Van Dijk, Kerkez; Gravenberch, Mac Allister; Jones, Szoboszlai, Gakpo; Ngumoha. Slot has gone 4-2-3-1. Two late minor-injury withdrawals — Isak ('Indeed, Alex is out — minor injury' per Slot at kickoff, ESPN / Sports Mole) and Frimpong (RotoWire / This Is Anfield kickoff cycle) — forced Gomez into RB and Ngumoha to the No. 9 role with Curtis Jones pushed forward from his previous full-back berth. Salah, Wirtz and Chiesa on the bench; Alisson still out of the squad. Confidence HIGH because every slot is now CONFIRMED rather than predicted.",
  pundit_sources: ["Liverpool FC", "Liverpool.com", "This Is Anfield", "Sportsmole", "Sports Illustrated", "Sky Sports", "FOX Sports", "Goal.com", "RotoWire", "Per Second News", "beIN Sports", "Caught Offside", "ESPN", "FootballTransfers", "Anfield Watch", "Inside World Football", "Football FanCast", "Anfield Index", "Yahoo Sports", "RTÉ", "TeamTalk", "GiveMeSport", "Premier League", "DaveOCKOP", "Sports Mole"],
  agreement_rate: 1.0,
  generated_at: "2026-05-15T18:30:00Z",
};
