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
    // IDs from playerData.js. This 4-3-3 is the backup look; the default is the
    // 4-2-3-1 below. Refreshed Tue Sep 1, after the window closed, after Liverpool 2-2 Nottingham
    // Forest at Anfield and pointed at Ipswich Town away on Friday 4 September,
    // 8pm at Portman Road. The XI below is the one Iraola actually picked against
    // Forest, which is the strongest signal available: Munoz took the right flank
    // ahead of Ngumoha and scored the equaliser and Isak his first of the season;
    // for Ipswich, most previews (Opta, Yahoo, The 4th Official) restore Gravenberch
    // to the middle, Sports Mole alone keeps Mac Allister; Gravenberch is drawn here.
    // Out per Iraola's Thursday presser: Ekitike (Achilles, no date), Bradley (knee,
    // no date), Leoni (ACL, group training during the break), Chiesa (muscle, group
    // training during the break, NOT in contention), Gomez (team training next week).
    // Bradley Barcola was ANNOUNCED on Monday (guaranteed GBP106m rising to GBP123m,
    // five years, No. 29); Iraola cleared him on Thursday, start or bench open, but he is
    // not PLAYERS-keyed, so he cannot appear in the graphic. Gakpo STAYS: City's
    // GBP75m+5m was rejected on Monday evening and the pursuit called off.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 vs Forest · No. 1)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (started vs Forest · Araujo loan covers CB/RB)
      RB: 9,    // Frimpong (only fit recognised RB · Gomez trains next week, Bradley no date)
      LCM: 18,  // Wirtz (advanced eight · the No. 10 in the default shape)
      CM: 14,   // Gravenberch (Opta/Yahoo restore him; Sports Mole keeps Mac Allister)
      RCM: 15,  // Szoboszlai (engine · vice-captain)
      LW: 22,   // Gakpo (left flank vs Forest · assisted Isak)
      ST: 23,   // Isak (No. 9 · off the mark on the hour vs Forest)
      RW: 28,   // Munoz (full debut vs Forest · scored the 82nd-minute equaliser)
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
    // The default shape, the 4-2-3-1 Iraola has used in both league games, now
    // pointed at Ipswich Town away on Friday 4 September, 8pm at Portman Road
    // (Nottingham Forest drawn 2-2 at Anfield on Aug 29; Newcastle drawn 2-2 away
    // on Aug 23). Refreshed Tue Sep 1, after the window closed off the confirmed Forest XI rather
    // than a preview: Alisson behind Frimpong, Jacquet, Van Dijk and Kerkez;
    // Szoboszlai and, per most Thursday previews, Gravenberch in the pivot for Ipswich;
    // Munoz right, Wirtz central, Gakpo left; Isak alone up top. Ngumoha and Mac
    // Allister among the substitutes.
    // Per Iraola's Thursday presser: Ekitike (Achilles) and Bradley (knee) have no date,
    // Leoni (ACL) and Chiesa (muscle) rejoin group training during the September break,
    // Gomez trains with the team next week; none is available for Friday. Barcola was
    // ANNOUNCED on Monday (guaranteed GBP106m to GBP123m, five years, No. 29), was cleared
    // on Thursday, start or bench open, and is not PLAYERS-keyed. Gakpo STAYS:
    // City's GBP75m+5m was rejected Monday evening and the pursuit called off.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 vs Forest · No. 1)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · started vs Forest)
      RCB: 11,  // Jacquet (started vs Forest · Araujo loan also covers)
      RB: 9,    // Frimpong (only fit recognised RB · Szoboszlai/Araujo the named cover)
      LDM: 14,  // Gravenberch (Opta/Yahoo restore him; Sports Mole keeps Mac Allister)
      RDM: 15,  // Szoboszlai (double-pivot · vice-captain)
      LAM: 22,  // Gakpo (left flank vs Forest · assisted the Isak equaliser)
      CAM: 18,  // Wirtz (the No. 10 · started centrally vs Forest)
      RAM: 28,  // Munoz (full debut and the 82nd-minute equaliser vs Forest)
      ST: 23,   // Isak (No. 9 · first goal of the season vs Forest)
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
    // Hypothetical 3-4-3 alternative, a shape rarely used, shown for completeness.
    // Refreshed Tue Sep 1, after the window closed: the back three is still genuinely bare. Ndukwe is
    // barred by a post-Brexit work permit until at least January; Gomez does not rejoin
    // team training until next week; Araujo (loan) is not PLAYERS-keyed. That leaves Van Dijk and
    // Jacquet as the only natural centre-backs, so Wataru Endo, fit and a familiar
    // emergency centre-half, fills the left of the three. Kerkez and Frimpong as
    // wing-backs, Wirtz and Gravenberch in midfield (Mac Allister benched per
    // Thursday's previews), and the Forest front three of
    // Gakpo, Isak and Munoz ahead of them. The thinnest of the three shapes.
    // Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 vs Forest · No. 1)
      LCB: 17,  // Endo (makeshift third CB: Gomez trains next week, Ndukwe work-permit barred, Araujo not PLAYERS-keyed)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (right of the back three · Araujo loan also covers)
      LWB: 7,   // Kerkez (LWB with Robertson gone to Spurs)
      LCM: 18,  // Wirtz (deeper in this shape, the creative axis)
      RCM: 14,  // Gravenberch (most Thursday previews restore him to the middle)
      RWB: 9,   // Frimpong (only fit recognised RB · Bradley on rehab)
      LW: 22,   // Gakpo (LW in the three-man attack, as vs Forest)
      ST: 23,   // Isak (No. 9 · scored vs Forest)
      RW: 28,   // Munoz (right of the front three after his debut goal)
    },
  },
};

// One-line evidence string per player, surfaced under the token on hover.
// Hand-curated from RESULTS + injuryNote context as of Tue Sep 1, AFTER the English
// window closed at 23:00 BST, three days before Ipswich Town away on Friday 4
// September, 8pm at Portman Road. The window changed nothing about this XI: the only
// deadline-day arrival was Lucca Brughmans, an 18-year-old Genk goalkeeper loaned
// straight back to Belgium until 2027, and the late loan approach for Chelsea's Malo
// Gusto was refused, so there is no new right-back. No midfielder replaced Curtis
// Jones. Forest's GBP30m for Nyoni was rejected; Gakpo and Chiesa both stay; Endo
// found no mover; Bajcetic has left permanently for Celta and is no longer keyed here.
// From the Forest 2-2: Munoz took the right flank ahead of Ngumoha and scored the
// 82nd-minute equaliser on a full debut, Isak scored from Gakpo's cross, Mac Allister
// was recalled and Gravenberch benched; for Ipswich, most Thursday previews restore
// Gravenberch, Sports Mole keeps Mac Allister. Out per Iraola's Thursday presser: Ekitike
// (Achilles, no date), Bradley (knee, no date), Leoni (ACL) and Chiesa (muscle), both back
// in group training during the break, and Gomez, who rejoins team training next week.
// Chiesa and Endo were left out of the Champions League squad on Thursday evening. Barcola
// is announced, registered and cleared to play, but not PLAYERS-keyed, so he cannot be drawn.
export const PLAYER_EVIDENCE = {
  1:  "Started vs Forest · no fresh setback",       // Alisson
  2:  "Deputy · Brughmans bought as the successor", // Mamardashvili
  3:  "Captain · started the 2-2 vs Forest",        // Van Dijk
  5:  "Team training next week · hoped for pre-break", // Gomez
  7:  "Started vs Forest · first-pick LB",          // Kerkez
  8:  "Knee · no date, 'will go later'",           // Bradley
  9:  "Lone fit RB · Szoboszlai the named cover",   // Frimpong
  10: "ACL · rejoins group during the break",       // Leoni
  11: "Starts beside Van Dijk · subbed twice",     // Jacquet
  12: "Loaned to Levante for the season",           // Ndukwe
  13: "Previews split · Sports Mole keeps him",      // Mac Allister
  14: "Opta and Yahoo restore him to the pivot",     // Gravenberch
  15: "150th app due · RB cover if needed",         // Szoboszlai
  17: "Left out of the UCL squad · PL depth",        // Endo
  18: "The No. 10 · started central vs Forest",     // Wirtz
  20: "Forest's GBP30m refused · new deal due",     // Nyoni
  22: "'Very happy to keep Cody' · starts left",   // Gakpo
  23: "Scored on the hour · first of the season",   // Isak
  24: "Achilles · no date, December earliest",      // Ekitike
  25: "No contract news · bench again likely",      // Ngumoha
  26: "Out until the break · off the UCL list",     // Chiesa
  27: "New deal · 3rd-choice GK",                   // Woodman
  28: "Debut rocket · 82nd-minute equaliser",       // Munoz
};

// Default formation when entering the view: the 4-2-3-1 Iraola has used in both
// league games, now pointed at Ipswich Town away on Friday 4 September (Forest
// drawn 2-2 at Anfield on Aug 29). The XI is the confirmed Forest side.
export const DEFAULT_FORMATION = "4-2-3-1";

// ─── Per-slot confidence levels ─────────────────────────────────────────────
// Populated by the lineup predictor; hand-set initially. Keyed by the 4-2-3-1
// slot keys. One match into the season these read as confidence that the slot's
// occupant remains a first-choice starter into 2026-27 — LOW where the player
// has left (Salah, Robertson, Konate) or whose future is open.
// (Refreshed Mon Aug 31, EVENING. The XI is still the confirmed Forest side carried
// to Ipswich away on Friday 4 September, and the left flank has now SETTLED: the
// Gakpo sale to Manchester City is off, their GBP75m plus GBP5m rejected on Monday
// evening after Palace refused to sell Sarr and Brighton held at GBP70m for Minteh,
// so he is a Liverpool player for Friday and beyond. Barcola was ANNOUNCED on Monday
// and cleared on Thursday but is not PLAYERS-keyed, so he stays undrawable. Frimpong remains
// the lone fit senior right-back; Gomez rejoins team training next week, per Iraola.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · eased back, first minutes vs Monaco Aug 9
  RCB: "Medium", // Konate gone free to Madrid · Araujo in on loan and bowed vs Como, Jacquet fit again
  RB:  "Low",    // Frimpong the only fit recognised RB · Gomez trains next week, Bradley no date · Szoboszlai/Araujo the named cover
  LDM: "Medium", // Most Thursday previews restore Gravenberch, Sports Mole keeps Mac Allister · the one live selection call
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "High",   // Gakpo · the sale is off, City's GBP80m rejected Aug 31 and the pursuit called off · he stays, and starts
  CAM: "Medium", // Wirtz · started centrally vs Forest, the creative axis, still short of a first goal contribution this season
  RAM: "Low",    // Munoz took it on a debut and scored, but Barcola is cleared for Friday and Iraola would not rule out starting him
  ST:  "High",   // Isak · off the mark on the hour vs Forest, and with Ekitike out to December there is no alternative nine
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run.
export const SLOT_RATIONALE = {
  LB:  "Sat Aug 29 — his, and only his, and now with ninety more minutes behind it. Kerkez started the 2-2 with Forest as he started the 2-2 at Newcastle, the unambiguous first choice at left-back after a difficult debut year at £45m. Robertson left for Tottenham on a free, taking nine years of cover with him, and with the window shutting on Tuesday and the recruitment aimed at the right flank there will be no senior body behind him. Portman Road on Friday will be his third start in thirteen days.",
  LCB: "Sat Aug 29 — the captain, and the shape in front of him. Van Dijk started again at Anfield and watched his side concede on the break for the second time in eight days, which is not his indictment so much as the team's: since the start of last season only Sunderland have shipped more Premier League counter-attack goals. The AC Milan interest driven by Ibrahimovic keeps being knocked back with no bid received, the deal still runs only to 2027, and at 35 he is the fixed point of a defence being rebuilt around him rather than replaced.",
  RCB: "Thu Sep 3 — a partner who is fit, and a bench whose return dates now come from the manager. Jacquet starts beside Van Dijk against Ipswich, back from the shoulder problem that cost him the tour, with Araujo's loan behind them able to cover centre-back and right-back both, and he needed registering for Europe on Thursday, the UEFA under-21 exemption being stricter than the Premier League's. The fourth senior body is still Joe Gomez, and Iraola put the date on him himself: team training next week, hoped for before the international break, not Friday. Leoni rejoins the group during the break. Konate left for Madrid on a free, Ndukwe is at Levante, no defender was bought.",
  RB:  "Thu Sep 3 — a one-man department, and the manager said so out loud. 'We don't have Conor Bradley right now, we don't have Joe Gomez right now. Definitely we look thin,' Iraola said on Thursday, before naming the cover: Szoboszlai, who took the position for the final twenty minutes against Forest when Frimpong was withdrawn and is 'ready to do it', and Araujo. Gomez rejoins team training next week; Bradley has no date; the Gusto loan was refused; Isaac Mabaya, 21, was registered from the academy the same day. Frimpong starts by elimination, against Abdul Fatawu, Opta's leader for chances created and duels won in Ipswich's two games.",
  LDM: "Thu Sep 3 — the one selection call still open, and Thursday's previews split it three ways. Against Forest, Mac Allister was recalled and Gravenberch left out of a Premier League XI for the first time under Iraola; for Ipswich, Yahoo and The 4th Official restore Gravenberch beside Szoboszlai, Opta's XI pairs Gravenberch with Mac Allister, and Sports Mole alone keeps Mac Allister and Szoboszlai. Gravenberch is drawn here as the likeliest. The manager's own line was that 'in midfield we have good numbers' and the next fortnight is for finding 'the combinations, who plays well with the other'. Endo, left out of the Champions League squad on Thursday, and Nyoni are the depth.",
  RDM: "Thu Sep 3 — settled in the pivot, a 150th appearance due, and now the named cover for a position he does not play. Szoboszlai has started both league games beside the other pivot and scored the 98th-minute penalty that rescued the opener; on Thursday Iraola was asked about the twenty minutes he spent at right-back against Forest and answered that 'if we have to play him as a right winger, as a right-back, as a left-back, I think he's ready to do it'. The five-year contract to 2031 signed in July, in the £200,000-£250,000 band, is the club choosing to keep rather than replace, and the versatility is why: 'even in-game they allow me to change their positions.'",
  LAM: "Thu Sep 3 — settled in a meeting room on Monday, and settled in a press conference on Thursday. 'I'm very happy to keep Cody because for me he's a very valuable player,' Iraola said, describing a forward who 'was always aware of the situations in the market' and is 'in a good place physically, mentally'. The £80m Manchester City move died on the last day of the window; he is contracted to 2030 and a Liverpool player until at least January. He scored at Newcastle, made Isak's goal against Forest, and keeps the left on Friday; Barcola, cleared to debut, is competition for the right first.",
  CAM: "Sat Aug 29 — the No. 10, in his position and still waiting on his season. Wirtz started centrally behind Isak against Forest, where Iraola wants him and where he was the best player on the pitch against Monaco in pre-season. An injury-hit first year at £115m gave him barely 117 minutes alongside Isak and Ekitike combined. Two league games have brought neither a goal nor an assist, and the creative burden runs through him again on Friday at Portman Road.",
  RAM: "Thu Sep 3 — a debut goal holding the shirt, and a £123m debut now officially cleared to challenge it. Victor Munoz took the flank ahead of Ngumoha against Forest and needed one touch to score, spinning and drilling off the underside of the bar for 2-2 on a first Premier League start. On Thursday Iraola confirmed Barcola 'will definitely be available' if the afternoon session went well, and would not say whether he starts: 'it's a good question', a player 'in a good place' who 'hasn't had the minutes in the pre-season games'. Sports Mole has him on the bench. He is not PLAYERS-keyed and cannot be drawn here even if picked, so Munoz holds the graphic; the team sheet may say otherwise.",
  ST:  "Thu Sep 3 — off the mark, alone up there with no date behind him, and with a record at this ground. Opta's Thursday preview counts four goals in two games against Ipswich for Isak, all for Newcastle in 2024-25, three of them a hat-trick at Portman Road; his first for Liverpool came on the hour against Forest. Iraola put no timeframe on Ekitike on Thursday, 'especially Hugo will go later', and no forward was bought, so Gakpo is the false-nine fallback and Barcola, cleared to debut, is a winger not a nine. The £125m remains the club record, Manchester City having matched it for Enzo Fernandez, with Barcola's guaranteed £106m second on Liverpool's own list.",
};

// ─── Alternatives per slot ──────────────────────────────────────────────────
// Top 1-2 alternatives for each slot. Populated by the predictor; hand-set
// initially. The UI shows these on hover as "Also considered". Keyed to
// 4-2-3-1 (the season-closing baseline shape).
export const ALTERNATIVES = {
  GK:  [{ playerId: 2, reason: "Mamardashvili · stays as deputy after a summer of loan offers nobody met on terms" }, { playerId: 27, reason: "Woodman · third-choice cover on a new deal" }],
  LB:  [{ playerId: 7, reason: "Kerkez · the only senior left-back at the club now Robertson has gone" }],
  LCB: [{ playerId: 11, reason: "Jacquet · started beside Van Dijk vs Forest; Araujo (loan) can also fill in" }],
  RCB: [{ playerId: 17, reason: "Endo · fit, a familiar emergency centre-half, and the third body if either senior CB goes down" }],
  RB:  [{ playerId: 9, reason: "Frimpong · the only fit recognised right-back; Bradley is on rehab and eyed for November" }, { playerId: 15, reason: "Szoboszlai · finished the Forest game at right-back and named by Iraola on Thursday as cover, with Araujo (loan)" }],
  LDM: [{ playerId: 13, reason: "Mac Allister · started the pivot vs Forest; Sports Mole keeps him for Ipswich, Opta pairs him with Gravenberch" }],
  RDM: [{ playerId: 13, reason: "Mac Allister · the other senior pivot option, kept by Sports Mole, benched by Yahoo" }],
  LAM: [{ playerId: 25, reason: "Ngumoha · eighteen and on the bench vs Forest; rotation option on either flank" }],
  CAM: [{ playerId: 13, reason: "Mac Allister · recalled to the pivot vs Forest and can push forward into the ten" }, { playerId: 15, reason: "Szoboszlai · vice-captain, has played the ten before" }],
  RAM: [{ playerId: 25, reason: "Ngumoha · the teenager Munoz was preferred to, still first in line if the debutant is rested" }, { playerId: 22, reason: "Gakpo · can switch across from the left, and the City sale being off makes him certain of it" }],
  ST:  [{ playerId: 22, reason: "Gakpo · false-nine option with Ekitike out until December, and staying after deadline-day talks with the owners" }, { playerId: 25, reason: "Ngumoha · led the line in Isak's absences late last season" }],
};

// ─── Prediction confidence & metadata ───────────────────────────────────────
// Overall confidence chip shown above the pitch. Enriched with predictor
// metadata when generated by lineupPredictor.js.
export const PREDICTION_NOTE = {
  level: "Medium",
  generated_at: "2026-09-03T22:10:00Z",
  reason: "Thu Sep 3, evening, the eve of Ipswich Town away on Friday 4 September, 8pm at Portman Road. The XI below is the Forest side carried forward with one change in the pivot, Gravenberch for Mac Allister, which most of Thursday's previews make (Yahoo, The 4th Official, and Opta, who pairs Gravenberch with Mac Allister) and Sports Mole does not. Alisson starts behind Frimpong, Jacquet, Van Dijk and Kerkez; Munoz keeps the right after his debut equaliser, Wirtz the ten, Gakpo the left, Isak alone up front. The team news hardened at Thursday's press conference: Federico Chiesa, in contention by the morning previews, is now on Iraola's own timetable for the international break and was left out of the Champions League squad in the evening with Endo; Joe Gomez rejoins team training next week and is hoped for before the break, not Friday; Ekitike and Bradley have no date. Bradley Barcola 'will definitely be available' if Thursday's session went well, and whether he starts is, in the manager's words, 'a good question'; he is not PLAYERS-keyed so cannot be drawn here even if picked. Araujo is likewise unkeyed, so Jacquet fills RCB and Endo is the emergency centre-half; Szoboszlai is the named in-game right-back cover. Confidence stays medium: nine of these eleven are near-certain, the pivot is a three-way split in the previews, and Barcola could start without appearing on this pitch. Two league games, two 2-2 draws, not a minute in front, thirteenth a place below Friday's hosts, the squad closed until January. Next up: Ipswich Town away, Friday 4 September, 8pm.",
};
