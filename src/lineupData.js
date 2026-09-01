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
    // ahead of Ngumoha and scored the equaliser, Mac Allister returned beside
    // Szoboszlai with Gravenberch benched, Isak scored his first of the season.
    // Out: Ekitike (Achilles, to December), Bradley (knee, eyeing November), Leoni
    // (ACL) and Chiesa (small muscle injury) out; Gomez back in full training.
    // Bradley Barcola was ANNOUNCED on Monday afternoon (guaranteed GBP106m rising to
    // GBP123m, five years, No. 29) and a debut is earmarked for Portman Road, but he is
    // not PLAYERS-keyed, so he cannot appear in the graphic. Gakpo STAYS: City's
    // GBP75m+5m was rejected on Monday evening and the pursuit called off.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 vs Forest · No. 1)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · contracted to 2027)
      RCB: 11,  // Jacquet (started vs Forest · Araujo loan covers CB/RB)
      RB: 9,    // Frimpong (only fit recognised RB · Bradley on rehab, Gomez pushing for Friday)
      LCM: 18,  // Wirtz (advanced eight · the No. 10 in the default shape)
      CM: 13,   // Mac Allister (recalled vs Forest, Gravenberch to the bench)
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
    // Szoboszlai and Mac Allister in the pivot; Munoz right, Wirtz central, Gakpo
    // left; Isak alone up top. Ngumoha and Gravenberch started on the bench.
    // Ekitike (Achilles, to December), Bradley (knee), Leoni (ACL) and Chiesa
    // (small muscle injury) are out; Gomez has trained fully and pushes for Friday. Barcola was ANNOUNCED
    // on Monday afternoon (guaranteed GBP106m to GBP123m, five years, No. 29) and his
    // debut is earmarked for this fixture, but he is not PLAYERS-keyed. Gakpo STAYS:
    // City's GBP75m+5m was rejected Monday evening and the pursuit called off.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 vs Forest · No. 1)
      LB: 7,    // Kerkez (first-pick LB with Robertson gone to Spurs)
      LCB: 3,   // Van Dijk (captain · started vs Forest)
      RCB: 11,  // Jacquet (started vs Forest · Araujo loan also covers)
      RB: 9,    // Frimpong (only fit recognised RB · Gomez pushing for Friday, Bradley rehab)
      LDM: 13,  // Mac Allister (recalled to the pivot vs Forest)
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
    // barred by a post-Brexit work permit until at least January; Gomez has only just
    // returned to full training; Araujo (loan) is not PLAYERS-keyed. That leaves Van Dijk and
    // Jacquet as the only natural centre-backs, so Wataru Endo, fit and a familiar
    // emergency centre-half, fills the left of the three. Kerkez and Frimpong as
    // wing-backs, Wirtz and Mac Allister in midfield, and the Forest front three of
    // Gakpo, Isak and Munoz ahead of them. The thinnest of the three shapes.
    // Default is 4-2-3-1 above.
    defaultXI: {
      GK: 1,    // Alisson (started the 2-2 vs Forest · No. 1)
      LCB: 17,  // Endo (makeshift third CB: Gomez only just back in training, Ndukwe work-permit barred, Araujo not PLAYERS-keyed)
      CCB: 3,   // Van Dijk (captain · anchors back three)
      RCB: 11,  // Jacquet (right of the back three · Araujo loan also covers)
      LWB: 7,   // Kerkez (LWB with Robertson gone to Spurs)
      LCM: 18,  // Wirtz (deeper in this shape, the creative axis)
      RCM: 13,  // Mac Allister (recalled to the middle vs Forest)
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
// was recalled and Gravenberch benched. Out: Ekitike (Achilles, to December), Bradley
// (knee, eyeing November), Leoni (ACL), Chiesa (small muscle injury). Gomez has
// trained fully and is pushing for Friday. Barcola is announced and registered but not
// yet PLAYERS-keyed, so he cannot be drawn.
export const PLAYER_EVIDENCE = {
  1:  "Started vs Forest · no fresh setback",       // Alisson
  2:  "Deputy · Brughmans bought as the successor", // Mamardashvili
  3:  "Captain · started the 2-2 vs Forest",        // Van Dijk
  5:  "Trained fully · pushing for Ipswich return", // Gomez
  7:  "Started vs Forest · first-pick LB",          // Kerkez
  8:  "Knee · rehab only, eyeing November",         // Bradley
  9:  "Lone fit senior RB · Gusto loan refused",    // Frimpong
  10: "ACL rehab · long road back",                 // Leoni
  11: "Started vs Forest beside Van Dijk",          // Jacquet
  12: "Loaned to Levante for the season",           // Ndukwe
  13: "Recalled vs Forest · Gravenberch benched",   // Mac Allister
  14: "Left out vs Forest · first time benched",    // Gravenberch
  15: "Started the pivot vs Forest · vice-captain", // Szoboszlai
  17: "No mover · now midfield depth, not surplus", // Endo
  18: "The No. 10 · started central vs Forest",     // Wirtz
  20: "Forest's GBP30m refused · new deal due",     // Nyoni
  22: "Cleared the air with the owners · stays",    // Gakpo
  23: "Scored on the hour · first of the season",   // Isak
  24: "Achilles · out until December",              // Ekitike
  25: "Eighteen, and benched for the debutant",     // Ngumoha
  26: "Injured · father shut down the exit talk",   // Chiesa
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
// afternoon but is not PLAYERS-keyed, so he stays undrawable. Frimpong remains the
// lone fit senior right-back, though Gomez has trained fully and pushes for Friday.)
export const SLOT_CONFIDENCE = {
  GK:  "High",   // Alisson · turned down Juventus · staying as No. 1
  LB:  "Low",    // Robertson gone free to Spurs · Kerkez inherits, back day one
  LCB: "Medium", // Van Dijk · 35 · Milan interest knocked back · eased back, first minutes vs Monaco Aug 9
  RCB: "Medium", // Konate gone free to Madrid · Araujo in on loan and bowed vs Como, Jacquet fit again
  RB:  "Low",    // Frimpong the only fit recognised RB · Gomez has trained fully and pushes for Friday, Bradley eyeing November · Jones sold to Inter
  LDM: "Medium", // Mac Allister recalled here vs Forest, Gravenberch benched for the first time · the slot is now genuinely contested
  RDM: "High",   // Szoboszlai · new five-year deal signed to 2031 · in day one
  LAM: "High",   // Gakpo · the sale is off, City's GBP80m rejected Aug 31 and the pursuit called off · he stays, and starts
  CAM: "Medium", // Wirtz · started centrally vs Forest, the creative axis, still short of a first goal contribution this season
  RAM: "Low",    // Munoz took it on a debut and scored, but Barcola is now SIGNED and announced for this exact slot with a debut earmarked at Portman Road
  ST:  "High",   // Isak · off the mark on the hour vs Forest, and with Ekitike out to December there is no alternative nine
};

// ─── Per-slot rationale ─────────────────────────────────────────────────────
// The editorial note shown beneath each slot. Refreshed by the daily run.
export const SLOT_RATIONALE = {
  LB:  "Sat Aug 29 — his, and only his, and now with ninety more minutes behind it. Kerkez started the 2-2 with Forest as he started the 2-2 at Newcastle, the unambiguous first choice at left-back after a difficult debut year at £45m. Robertson left for Tottenham on a free, taking nine years of cover with him, and with the window shutting on Tuesday and the recruitment aimed at the right flank there will be no senior body behind him. Portman Road on Friday will be his third start in thirteen days.",
  LCB: "Sat Aug 29 — the captain, and the shape in front of him. Van Dijk started again at Anfield and watched his side concede on the break for the second time in eight days, which is not his indictment so much as the team's: since the start of last season only Sunderland have shipped more Premier League counter-attack goals. The AC Milan interest driven by Ibrahimovic keeps being knocked back with no bid received, the deal still runs only to 2027, and at 35 he is the fixed point of a defence being rebuilt around him rather than replaced.",
  RCB: "Tue Sep 1 — a partner who is fit, and a bench that the window left bare. Jacquet started beside Van Dijk against Forest, back from the shoulder problem that cost him the tour, and Araujo's loan sits behind them able to cover centre-back and right-back both. That is the whole of it: Konate left for Madrid on a free, Leoni is on ACL rehab, Ndukwe has gone to Levante on loan, and no defender was bought before the window closed. Dayot Upamecano signed fresh terms at Bayern and the late loan approach for Chelsea's Malo Gusto was refused, so the fourth senior body now rests entirely on Joe Gomez, who has trained fully and pushes for Friday.",
  RB:  "Mon Aug 31 — a one-man department, with help maybe days away. Frimpong started both league games as the only fit recognised right-back: Bradley is still short after January knee surgery and eyed for November, Ramsay has gone to St Mirren on loan and Jones is an Inter player. The relief is Joe Gomez, who has trained fully and is targeting Friday's trip to Ipswich, where he can cover right-back as well as the middle of the defence. Araujo's loan is the other in-game option. For now, Frimpong plays by elimination.",
  LDM: "Tue Sep 1 — the slot Iraola changed, and the reinforcement finally came. Mac Allister was recalled to the pivot beside Szoboszlai against Forest, one of two changes, with Gravenberch left out of a Premier League XI for the first time under the new manager. The side still conceded twice on the counter and Iraola called the first half poor. Supporters spent a fortnight asking for a specialist in the middle and the window shut without one arriving, so this pairing, with Gravenberch and Endo behind it and Nyoni pushing, is the midfield until January.",
  RDM: "Sat Jul 18 — settled, and expensively so. Szoboszlai has signed a new five-year contract running to 2031, three years on from arriving from Leipzig on a deal that ran only to 2028, with reported terms in the £200,000-£250,000 band. He was voted supporters' player of the season after a campaign spent filling in at right-back, at the eight and on the right wing, and he has started both league games in the pivot. With Salah, Konate and Robertson all gone for nothing, this is the club choosing to keep rather than to replace.",
  LAM: "Tue Sep 1 — settled in a meeting room, and settled until January. With City's rejected bid behind him and Tottenham long out of it, Gakpo held clear-the-air talks with the ownership on deadline day and stays, contracted to 2030 and no longer a question the team sheet has to answer. He started the left against Forest and made Isak's goal. Barcola's arrival threatens the right rather than this flank, and with the window shut there is no longer any version of this season in which the slot changes hands to a departure.",
  CAM: "Sat Aug 29 — the No. 10, in his position and still waiting on his season. Wirtz started centrally behind Isak against Forest, where Iraola wants him and where he was the best player on the pitch against Monaco in pre-season. An injury-hit first year at £115m gave him barely 117 minutes alongside Isak and Ekitike combined. Two league games have brought neither a goal nor an assist, and the creative burden runs through him again on Friday at Portman Road.",
  RAM: "Mon Aug 31 — a debut goal still holding the shirt, and the arrival now official. Victor Munoz took the flank ahead of the eighteen-year-old Ngumoha against Forest and needed one touch to score, spinning through a hundred and eighty degrees and drilling off the underside of the bar for 2-2 on a first Premier League start. The complication landed on Monday afternoon: Barcola was announced at a guaranteed £106m rising to £123m on a five-year deal, and has four days on the training ground before Friday. Munoz owns the slot until Iraola decides otherwise, and until the signing is PLAYERS-keyed and drawable.",
  ST:  "Tue Sep 1 — off the mark, and now alone up there until December. Isak scored his first of the season on the hour against Forest, standing where a centre-forward stands when Gakpo turns his man and clips one to the back post. With Ekitike out to the Achilles and no forward bought before the window closed, there is no alternative nine in the building and Gakpo is the false-nine fallback if one is needed. His £125m remains the club record, though Manchester City matched the fee for Enzo Fernandez on deadline day, and Barcola's guaranteed £106m sits second on Liverpool's own list.",
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
  RB:  [{ playerId: 9, reason: "Frimpong · the only fit recognised right-back; Bradley is on rehab and eyed for November" }, { playerId: 11, reason: "Jacquet · Araujo (loan) is the actual in-game right-back cover, with Gomez back in full training and pushing for Friday" }],
  LDM: [{ playerId: 14, reason: "Gravenberch · benched for the first time vs Forest, and the obvious route back into the pivot" }],
  RDM: [{ playerId: 14, reason: "Gravenberch · can take either side of the double-pivot" }],
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
  generated_at: "2026-09-01T22:20:00Z",
  reason: "Tue Sep 1, after the window closed \u2014 the XI below is not a preview but the side Iraola actually named for Saturday's 2-2 with Nottingham Forest at Anfield, carried forward to Ipswich Town away on Friday 4 September, an 8pm kick-off at Portman Road. Alisson started behind Frimpong, Jacquet, Van Dijk and Kerkez; Mac Allister was recalled beside Szoboszlai with Gravenberch left out for the first time; Munoz was preferred to the eighteen-year-old Ngumoha on the right and answered with a spinning drive off the underside of the bar for 2-2; Wirtz played the ten and Gakpo the left, where he made Isak's first goal of the season. The deadline came and went without touching this XI or the depth behind it. Liverpool's only arrival was Lucca Brughmans, an eighteen-year-old Genk goalkeeper announced at up to \u00a330m and loaned straight back to Belgium until 2027, and the last live approach, a loan bid for Chelsea right-back Malo Gusto, was refused, which leaves Frimpong as the only fit senior option there with Bradley still on knee rehab. No midfielder came in behind the pivot. Nottingham Forest's \u00a330m for Trey Nyoni was rejected and new contract talks are expected. Bradley Barcola, the \u00a3106m record announced Monday, is registered and available and puts Munoz's right-hand slot at genuine risk, though he is not PLAYERS-keyed and cannot be drawn in the graphic. Cody Gakpo's left flank is settled after clear-the-air talks with the owners, and Federico Chiesa stays after his father closed off the Serie A talk. Confidence stays medium because Barcola could start without appearing here. The absences are settled: Ekitike (Achilles, to December), Bradley (knee, eyeing November), Leoni (ACL) and Chiesa (a small muscle injury from the Como friendly) are out, while Joe Gomez has trained fully and is pushing to return at Portman Road, which would restore a centre-back and right-back option in one body. Araujo, a loan arrival, is not PLAYERS-keyed, so Jacquet fills RCB in the graphic. Two league games, two 2-2 draws, not a minute spent in front, thirteenth in the table behind Friday's hosts, and no help coming until January. Next up: Ipswich Town away, Friday 4 September, 8pm.",
};
