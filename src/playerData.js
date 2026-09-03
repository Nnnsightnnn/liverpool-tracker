// ─── Liverpool FC Player Data (2026-27 Season · Updated 2 September 2026) ──────
// Extracted from App.jsx — single source of truth for player, news, and RSS data

// Statuses: "fit" | "injured" | "doubtful" | "recovering"
// injuryNote: short description shown on card when not fit
// Optional: returningFromInjury: { matchesBackIncludingThis: 1|2 }
//   — added by skill when a player returns from 3+ week absence, removed after 2 matches back
// Optional: outSince: "YYYY-MM-DD"
//   — earliest date the player has been unavailable; used by buildPlayerLast5
//     to flag missed matches as "-" instead of inheriting the team's W/D/L
// Optional: recentPlayedDates: ["YYYY-MM-DD", ...]
//   — for fringe/academy players (≤6 senior apps) who DID start a recent match
//     and should show that result instead of a blanket "-"
export const PLAYERS = [
  // ── Goalkeepers ───────────────────────────────────────────────────────────
  {
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Wed Aug 12 — back from his break and settled as the No. 1 for the season start. Alisson returned from his post-World Cup rest during the American tour and is Iraola's first-choice keeper who kept goal in both 2-2 draws to open the season. The Brazil captain remains the undisputed starter, and Mamardashvili, shopped for a loan all summer without a taker on terms, stays as his deputy after the deadline passed. Nothing here is in question", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Wed Aug 12 — back in the No. 2 role with the season upon us. The tour spell as senior keeper while Alisson rested is over, and with the Brazilian settled back in, the Georgian is back as deputy with the season underway. Liverpool still prefer to protect the asset with a loan rather than sell, and the longer-horizon thinking has not moved off him as a genuine number one somewhere", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
    physical: { height: 197, weight: 93, pace: 42, acceleration: 40, sprintSpeed: 44 },
    career: [
      { years: "2017-2021", club: "Dinamo Tbilisi", fee: null, type: "youth" },
      { years: "2021-2022", club: "Dinamo Tbilisi", fee: null, type: "senior" },
      { years: "2022-2025", club: "Valencia", fee: "€800K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€30M", type: "senior" },
    ],
  },

  // ── Defenders ─────────────────────────────────────────────────────────────
  {
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Tue Sep 1 — the window closed on a captain whose own future is still the open question. Van Dijk spent Saturday lobbying publicly to keep Cody Gakpo, and by deadline night Gakpo had sat down with the ownership, cleared the air and stayed; the captain got the outcome he asked for, though the collapse of City's bid did the work rather than the speech. His own deal still runs only to 2027 and he repeats that there is no deadline on it, his focus the pitch. At 35 he remains the fixed point Iraola builds around, and with no defender bought before the market shut he is also, more than ever, the one the back four cannot do without", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "injured", outSince: "2026-07-25", injuryNote: "Thu Sep 3 — 'the closest one is Joe,' and the date is now the manager's, not the previews'. Iraola said on Thursday that Gomez's muscle recovery from the 26 July Sunderland friendly 'has gone normally', that he will 'start training with us next week', and that he hopes to have him back 'before the break', which covers Fulham and Bournemouth but rules out Portman Road. It is a later, firmer timetable than the Fulham target the previews had pencilled, and it means the right side goes to Ipswich covered by Frimpong, then Szoboszlai or Araujo, both named by the manager. When he is back he restores a fourth senior centre-back and the only internal right-back cover in one body", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Tue Jul 21 — a first pre-season to reset. A difficult debut year after the £45m move drew criticism, but with Robertson gone to Tottenham the left-back job is unambiguously his, and a clean summer under a new coach is the reset he needs. He landed in Chicago with the group", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
    physical: { height: 185, weight: 78, pace: 82, acceleration: 84, sprintSpeed: 80 },
    career: [
      { years: "2018-2021", club: "Györ", fee: null, type: "youth" },
      { years: "2021-2022", club: "AC Milan Primavera", fee: "€400K", type: "youth" },
      { years: "2022-2023", club: "AZ Alkmaar", fee: "€2M", type: "senior" },
      { years: "2023-2025", club: "Bournemouth", fee: "€16M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€45M", type: "senior" },
    ],
  },
  {
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Thu Sep 3 — behind Gomez, Leoni and Chiesa in the queue, and given no date at all. Iraola's Thursday injury round-up worked from the nearest return outward and reached Bradley last but one: 'probably Conor, and especially Hugo, will go later.' He is rehabilitating the knee he suffered against Arsenal in January, took no part in pre-season, and was still registered in Thursday's Champions League squad because only three changes are allowed after the league phase. Until he returns, Frimpong is the only fit senior right-back, the manager has said aloud that the position 'looks thin', and Szoboszlai and Araujo are the cover", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Thu Sep 3 — 'definitely we look thin,' the manager said, and then named the men behind him. Frimpong goes to Portman Road as the only fit senior right-back for a third league game: Bradley has no date, Gomez does not train with the group until next week, and the deadline-day Gusto loan was refused. Iraola's Thursday answer was to point at versatility, Szoboszlai, who took the position for the final twenty minutes against Forest when Frimpong was withdrawn, and Araujo, and the squad list submitted the same day registers Isaac Mabaya, 21, from the academy. Ipswich's Abdul Fatawu, Opta's leader for chances created and duels won in their two games, is the first winger to test all of it", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Thu Sep 3 — a date at last, and it is a training date, not a matchday. Iraola said on Thursday that Leoni, nearly a year on from the ACL tear on his September 2025 debut, is planned 'to start training during the break, with the group', the international window later this month, making him the second of the returns after Gomez. He is not in contention for Ipswich and was named in the Champions League squad regardless, alongside Bradley and Ekitike, because changes after the league phase are capped at three. With Gomez also out, the senior centre-back cover on Friday is Van Dijk, Jacquet and the loanee Araujo, which is why an eighteen-year-old's first session back is being counted", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Thu Sep 3 — the partner for Friday, registered for Europe, and still without a reserve. Jacquet starts beside Van Dijk at Portman Road for a third league game, the Evening Standard having noted he was substituted twice in two matches for Ronald Araujo as he builds fitness after the shoulder problem managed since January surgery. Thursday's squad lists told his age: exempt from the Premier League 25 as an under-21, but named in the Champions League squad, where UEFA's exemption is stricter. With Gomez not back in team training until next week, per Iraola, and Leoni not with the group until the break, the loanee Araujo is the whole of the cover behind the pair and Endo the emergency centre-half after that. A £60m twenty-year-old carrying the department the window left bare", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Tue Sep 1 — out on loan, as the club always meant him to be. Ndukwe joined Levante on a season-long loan agreed on deadline day, the Spanish club covering his wage. Six foot six and nineteen, he was Liverpool's standout defender beside Van Dijk against Monaco in pre-season, but born in Austria and short of the points a post-Brexit work permit demands, he could not play a competitive fixture for Liverpool until at least January. A season abroad is the development the situation always called for: he goes to play now, rather than to wait", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Thu Sep 3 — the pivot is still the open question, and Thursday did not close it. Mac Allister started the 2-2 with Forest beside Szoboszlai, one of Iraola's two changes, and the previews now split on him: Sports Mole keeps him in the pivot for Ipswich, Opta's predicted XI pairs him with Gravenberch, Yahoo and The 4th Official send him to the bench. Iraola's own Thursday line was that 'in midfield we have good numbers' and the job is 'getting the right calls from my side', with the next fortnight's fixtures the chance to test combinations. A runner-up who played the length of the World Cup final at MetLife and lost it in extra time, he remains a starter by pedigree and a selection by the week", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Thu Sep 3 — restored by most of the previews, and the manager says the combinations are still being learned. Gravenberch was dropped for the Forest game, Mac Allister taking his place beside Szoboszlai, and a side that has never held a lead this season conceded twice on the break without him; Opta's predicted XI for Ipswich puts him back in the middle beside Mac Allister, Yahoo and The 4th Official beside Szoboszlai, Sports Mole alone keeps him out. Iraola said on Thursday that the next two weeks of games are where he will 'see all the options we have, the combinations, who plays well with the other'. Liverpool's most consistent player across a turbulent 2025-26 is the likeliest name at the base of Friday's side", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Thu Sep 3 — a 150th appearance in line, and a second position spoken aloud. Szoboszlai moved to right-back for the final twenty minutes against Forest when Frimpong was withdrawn, and Iraola was asked on Thursday whether he is happy to play there: 'if we have to play him as a right winger, as a right-back, as a left-back, I think he's ready to do it. I think he wants to help the team first.' The 98th-minute penalty at Newcastle that rescued the opener is still the season's defining Liverpool moment. A vice-captain under the new coach after his extension to 2031, he starts Friday in the pivot and is, by the manager's own account, the in-game answer at right-back if the one-man department needs relief", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Thu Sep 3 — still here, still the depth, and now not registered for Europe. Endo was left out of Liverpool's 25-man Champions League squad on Thursday evening, James McConnell preferred, after two league games as an unused substitute; Chiesa was the other omission, while three injured players kept their places. Wolves, Fulham and West Ham all looked at the 33-year-old in the window and none moved, and with Jones sold to Inter he remains a senior midfield body for the Premier League and the Carabao Cup, and the emergency centre-half if the back four loses one more. The non-homegrown slot he occupies was cited all deadline day as the reason no further arrival could be squeezed in. Fit, available for Friday, and now with a European season he will watch", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
    physical: { height: 178, weight: 76, pace: 60, acceleration: 58, sprintSpeed: 62 },
    career: [
      { years: "2010-2012", club: "Yokohama F. Marinos", fee: null, type: "youth" },
      { years: "2012-2015", club: "Shonan Bellmare", fee: null, type: "senior" },
      { years: "2015-2018", club: "Urawa Red Diamonds", fee: null, type: "senior" },
      { years: "2018-2019", club: "Sint-Truiden", fee: "€300K", type: "senior" },
      { years: "2019-2023", club: "VfB Stuttgart", fee: "€1.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€19.2M", type: "senior" },
    ],
  },
  {
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Mon Aug 10 — the best player on the pitch, again. Wirtz scored Liverpool's second in Sunday's 2-3 defeat to Monaco and ran most of the side's attacks through him, the clearest evidence yet of why Iraola sees the £115m playmaker behind the striker as a No. 10. He shared barely 117 minutes with Isak and Ekitike across an injury-disrupted first year; a clean block of work, in his best position, is the reset, and its first month has been its brightest", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Tue Sep 1 — valued at thirty million pounds, and not for sale at any price. Nottingham Forest, hunting a midfielder since Elliot Anderson joined Manchester City, tabled £25m plus £5m in add-ons late on deadline day and were turned down flat. Paul Joyce reported Liverpool telling them the teenager is going nowhere at this stage of the window, the reasoning being that Curtis Jones's sale to Inter opened real minutes in front of him and Iraola trusted him repeatedly through pre-season. Talks over improved terms are now expected. Fit and available at Portman Road", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 41, goals: 10, assists: 7, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Thu Sep 3 — 'I'm very happy to keep Cody,' the manager said, and the chapter closed in public. Three days after Gakpo's clear-the-air meeting with Fenway Sports Group, Iraola gave his account on Thursday: the forward 'was always aware of the situations in the market, we were constantly talking with each other', and 'he's now in a good place physically, mentally'. The £80m Manchester City move died on deadline day when Liverpool could not land a replacement; he is contracted to 2030 and a Liverpool player until at least January. A goal at Newcastle and the assist for Isak against Forest, and he keeps the left on Friday with Barcola, cleared to debut, the competition rather than the replacement", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 19, goals: 10, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Thu Sep 3 — four goals in two games against Friday's hosts, and a manager who wants him with a lead to protect. Opta's Thursday preview notes Isak scored four against Ipswich for Newcastle in 2024-25, three of them in a hat-trick at Portman Road, and he is off the mark for Liverpool with the equaliser on the hour against Forest. His £125m still stands as the club record, Barcola's guaranteed £106m rising to £123m second, and on Thursday Iraola cleared the Frenchman to make his debut behind or beside him, start or bench undecided. With Ekitike given no timeframe at all by the manager and nobody bought behind him, the goals have nowhere else to come from, and the instruction for Friday is to score first", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
    physical: { height: 192, weight: 80, pace: 82, acceleration: 80, sprintSpeed: 84 },
    career: [
      { years: "2014-2017", club: "AIK", fee: null, type: "youth" },
      { years: "2017-2019", club: "Borussia Dortmund", fee: "€9M", type: "senior" },
      { years: "2019-2022", club: "Real Sociedad", fee: "€6.5M", type: "senior" },
      { years: "2022-2025", club: "Newcastle United", fee: "€70M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€100M", type: "senior" },
    ],
  },
  {
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Thu Sep 3 — 'especially Hugo will go later,' the last name in the manager's Thursday order of returns. Iraola put no timeframe on Ekitike, the Achilles ruptured against PSG in April keeping him out with December the earliest anyone has mentioned, and named him after Gomez, Leoni, Chiesa and Bradley in the queue. He was still registered in the Champions League squad the same evening, Liverpool Offside noting that only three changes are permitted after the league phase, so a name kept now is a name available in the spring. He continues his rehabilitation away from the group. The front line carries on with Isak alone and Gakpo the false-nine fallback", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
    physical: { height: 190, weight: 78, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Reims Academy", fee: null, type: "youth" },
      { years: "2020-2022", club: "Reims", fee: null, type: "senior" },
      { years: "2022-2023", club: "PSG (loan)", fee: null, type: "senior" },
      { years: "2023-2025", club: "Eintracht Frankfurt", fee: "€16.5M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€55M", type: "senior" },
    ],
  },
  {
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Thu Sep 3 — no news on the contract, and a manager who called him settled at eighteen. Asked on Thursday about the five-year deal that has been waiting on Ngumoha's birthday, Iraola said there was nothing to report, then spent longer defending the winger's use on the right: 'because he hasn't been incredible in the first game we put him on the right, we cannot say he cannot play on the right anymore.' He wants both flanks developed, called him 'incredible' for looking 'already like a settled football player in the Premier League', and did not need to register him for either squad list as an under-21. Benched for Munoz against Forest, and likely benched again on Friday with Barcola cleared and ahead of him in the queue", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Thu Sep 3 — out until the break, and off the European list, in the space of a day. The morning previews had Chiesa edging into contention for Ipswich; Iraola's Thursday injury round-up put his return to group training 'around those dates' of the September international break, with Leoni, which rules him out of Ipswich, Atletico, Fulham, the Tottenham cup tie and Bournemouth. By the evening the 25-man Champions League squad had been submitted without him, Endo the other omission, the club preferring to register the injured Ekitike, Bradley and Leoni for the spring. The muscle problem dates from the Como friendly. His father closed off the Serie A talk on deadline night, so he stays, and waits", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Tue Jul 21 — third-choice, and dependable with it. Two Premier League starts across 2025-26 and a steady squad option, he is part of the goalkeeping group in America while Alisson takes his post-World Cup break. No drama, which at his position is the point", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
    physical: { height: 188, weight: 82, pace: 47, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2009-2013", club: "Crystal Palace Academy", fee: null, type: "youth" },
      { years: "2013-2015", club: "Newcastle Academy", fee: null, type: "youth" },
      { years: "2015-2022", club: "Newcastle United", fee: null, type: "senior" },
      { years: "2015-2016", club: "Hartlepool (loan)", fee: null, type: "senior" },
      { years: "2016", club: "Crawley Town (loan)", fee: null, type: "senior" },
      { years: "2017", club: "Kilmarnock (loan)", fee: null, type: "senior" },
      { years: "2017-2018", club: "Aberdeen (loan)", fee: null, type: "senior" },
      { years: "2018-2021", club: "Swansea City (loan)", fee: null, type: "senior" },
      { years: "2021-2022", club: "AFC Bournemouth (loan)", fee: null, type: "senior" },
      { years: "2022-2025", club: "Preston North End", fee: null, type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "Free", type: "senior" },
    ],
  },
  {
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 2, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Sat Aug 29 — a first Premier League start, and a goal that will be replayed for years. Preferred to the eighteen-year-old Ngumoha on the right against Forest, Munoz took one touch eight minutes from time, spun through a hundred and eighty degrees and hit a rising drive off the underside of the crossbar past Matz Sels to make it 2-2. It was the second decisive contribution of his fortnight after he won the stoppage-time penalty at Newcastle as a substitute. In since June on a six-year deal to 2032, the £34.7m release clause met at Osasuna, a World Cup winner with Spain at twenty-two, and now the answer to a right flank that has spent the summer being solved by other means", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
];

// ─── RSS Feed Sources ───────────────────────────────────────────────────────
export const RSS_FEEDS = [
  { name: "Rousing The Kop", url: "https://www.rousingthekop.com/feed/", category: "fan", color: "#C8102E" },
  { name: "BBC Sport - Liverpool", url: "http://feeds.bbci.co.uk/sport/football/teams/liverpool/rss.xml", category: "major", color: "#BB1919" },
  { name: "Sky Sports - Liverpool", url: "https://www.skysports.com/rss/12040", category: "major", color: "#E10600" },
  { name: "This Is Anfield", url: "https://www.thisisanfield.com/feed/", category: "fan", color: "#D4213D" },
  { name: "Empire of the Kop", url: "https://www.empireofthekop.com/feed/", category: "fan", color: "#8B0000" },
  { name: "The Anfield Wrap", url: "https://www.theanfieldwrap.com/feed/", category: "fan", color: "#B22222" },
  { name: "ESPN FC - Liverpool", url: "https://www.espn.com/espn/rss/soccer/news", category: "major", color: "#CC0000" },
  // Added Aug 12 2026 — broaden the wire beyond the original seven.
  // NOTE: Transfermarkt is deliberately NOT here. Its /rss/news/verein/31 path
  // returns a consent-wall HTML page, not a feed, so it would render as a dead
  // source. Transfermarkt is used as a RESEARCH + VERIFICATION source by the
  // update skill (target-board status sweep) rather than as a live feed.
  { name: "Liverpool Echo", url: "https://www.liverpoolecho.co.uk/all-about/liverpool-fc?service=rss", category: "major", color: "#E03A3E" },
  { name: "Liverpool.com", url: "https://www.liverpool.com/?service=rss", category: "fan", color: "#9B1B30" },
  { name: "talkSPORT - Liverpool", url: "https://talksport.com/football/teams/liverpool/feed/", category: "major", color: "#E4002B" },
];

// ─── Team Logos ────────────────────────────────────────────────────────────
// PL crests via premierleague.com CDN, UCL teams via img.uefa.com
export const TEAM_LOGOS = {
  "Liverpool":      "https://resources.premierleague.com/premierleague/badges/50/t14.png",
  "Galatasaray":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50137.png",
  "Al-Hilal":       "https://commons.wikimedia.org/wiki/Special:FilePath/Al%20Hilal%20SFC%20Logo.svg?width=50",
  "Tottenham":      "https://resources.premierleague.com/premierleague/badges/50/t6.png",
  "Wolves":         "https://resources.premierleague.com/premierleague/badges/50/t39.png",
  "West Ham":       "https://resources.premierleague.com/premierleague/badges/50/t21.png",
  "Nott'm Forest":  "https://resources.premierleague.com/premierleague/badges/50/t17.png",
  "Brighton":       "https://resources.premierleague.com/premierleague/badges/50/t36.png",
  "Sunderland":     "https://resources.premierleague.com/premierleague/badges/50/t56.png",
  "Man City":       "https://resources.premierleague.com/premierleague/badges/50/t43.png",
  "Newcastle":      "https://resources.premierleague.com/premierleague/badges/50/t4.png",
  "Bournemouth":    "https://resources.premierleague.com/premierleague/badges/50/t91.png",
  "Burnley":        "https://resources.premierleague.com/premierleague/badges/50/t90.png",
  "Leeds":          "https://resources.premierleague.com/premierleague/badges/50/t2.png",
  "Barnsley":       "https://upload.wikimedia.org/wikipedia/en/c/c9/Barnsley_FC.svg",
  "Arsenal":        "https://resources.premierleague.com/premierleague/badges/50/t3.png",
  "PSG":            "https://img.uefa.com/imgml/TP/teams/logos/50x50/52747.png",
  "Paris Saint-Germain": "https://img.uefa.com/imgml/TP/teams/logos/50x50/52747.png",
  "Brighton & Hove Albion": "https://resources.premierleague.com/premierleague/badges/50/t36.png",
  "Fulham":         "https://resources.premierleague.com/premierleague/badges/50/t54.png",
  "Everton":        "https://resources.premierleague.com/premierleague/badges/50/t11.png",
  "Crystal Palace":  "https://resources.premierleague.com/premierleague/badges/50/t31.png",
  "Hull":           "https://a.espncdn.com/i/teamlogos/soccer/500/306.png",
  "Ipswich":        "https://a.espncdn.com/i/teamlogos/soccer/500/373.png",
  "Ipswich Town":   "https://a.espncdn.com/i/teamlogos/soccer/500/373.png",
  "Coventry":       "https://a.espncdn.com/i/teamlogos/soccer/500/388.png",
  "Tijuana":         "https://r2.thesportsdb.com/images/media/team/badge/b0mky81779772352.png",
  "Manchester City": "https://resources.premierleague.com/premierleague/badges/50/t43.png",
  "Manchester United": "https://resources.premierleague.com/premierleague/badges/50/t1.png",
  "Chelsea":         "https://resources.premierleague.com/premierleague/badges/50/t8.png",
  "Aston Villa":     "https://resources.premierleague.com/premierleague/badges/50/t7.png",
  "Brentford":       "https://resources.premierleague.com/premierleague/badges/50/t94.png",
  // Transfer-target clubs
  "Bayer Leverkusen": "https://r2.thesportsdb.com/images/media/team/badge/3x9k851726760113.png",
  "RB Leipzig":       "https://img.uefa.com/imgml/TP/teams/logos/50x50/2603790.png",
  "Real Sociedad":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50080.png",
  "Porto":            "https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg",
  "Bayern Munich":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50037.png",
  "Real Madrid":      "https://img.uefa.com/imgml/TP/teams/logos/50x50/50051.png",
  "Inter Milan":      "https://img.uefa.com/imgml/TP/teams/logos/50x50/50138.png",
  "Juventus":         "https://img.uefa.com/imgml/TP/teams/logos/50x50/50139.png",
  "Atlético Madrid":  "https://img.uefa.com/imgml/TP/teams/logos/50x50/50124.png",
  "Mainz":            "https://img.uefa.com/imgml/TP/teams/logos/50x50/50106.png",
  "Barcelona":        "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
  "Rennes":           "https://img.uefa.com/imgml/TP/teams/logos/50x50/50097.png",
  "Rennes (loan)":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50097.png",
  "Club Brugge":      "https://upload.wikimedia.org/wikipedia/en/d/d0/Club_Brugge_KV_logo.svg",
  "Sporting CP":      "https://img.uefa.com/imgml/TP/teams/logos/50x50/50149.png",
  "Lille":            "https://img.uefa.com/imgml/TP/teams/logos/50x50/50064.png",
  "Monaco":           "https://img.uefa.com/imgml/TP/teams/logos/50x50/50023.png",
  "Osasuna":          "https://upload.wikimedia.org/wikipedia/en/d/db/Osasuna_logo.svg",
  "Real Oviedo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Real_Oviedo_logo.svg/120px-Real_Oviedo_logo.svg.png",
  "Besiktas": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Be%C5%9Fikta%C5%9F_JK_logo.svg/120px-Be%C5%9Fikta%C5%9F_JK_logo.svg.png",
  "Almeria":          "https://upload.wikimedia.org/wikipedia/en/e/e4/UD_Almeria_logo.svg",
  "Borussia Dortmund":"https://img.uefa.com/imgml/TP/teams/logos/50x50/52758.png",
  "Atalanta":         "https://img.uefa.com/imgml/TP/teams/logos/50x50/52816.png",
  "Roma":             "https://img.uefa.com/imgml/TP/teams/logos/50x50/50043.png",
  "AC Milan":         "https://img.uefa.com/imgml/TP/teams/logos/50x50/50058.png",
  "Ajax":             "https://img.uefa.com/imgml/TP/teams/logos/50x50/50094.png",
  "Celtic":           "https://img.uefa.com/imgml/TP/teams/logos/50x50/50050.png",
  "Celta Vigo":       "https://img.uefa.com/imgml/TP/teams/logos/50x50/50127.png",
  "Deportivo Cali":   "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Deportivo_Cali_logo.svg/120px-Deportivo_Cali_logo.svg.png",
  "Saint-Etienne":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50076.png",
  "Genk":             "https://img.uefa.com/imgml/TP/teams/logos/50x50/50120.png",
};

// ─── Cover Image (edition hero — tied to the lead story) ────────────────────
// The cover renders `src` full-bleed behind the masthead with a legibility
// scrim; if `src` is null or the file fails to load, the cover falls back to
// the pure-type masthead. `generatedAt` doubles as a cache-buster (?v=).
//
// TWO-TRACK PIPELINE (see docs/COVER-IMAGE-PIPELINE.md):
//   • The daily liverpool-tracker-update run regenerates a deterministic SVG
//     "editorial plate" (public/assets/cover/*.svg) from the lead story, so the
//     cover always has a visual, and writes `brief` below.
//   • Antigravity ("agy") reads `brief`, generates a premium photographic image
//     when the lead is genuinely visual, drops the JPG in public/assets/cover/,
//     and repoints `src` + `credit` + `generatedAt` at it.
// `focus` is the one-line "most important focus of the latest edition."
export const COVER_IMAGE = {
  src: null,
  alt: "Pure-type edition cover.",
  focus: null,
  credit: null,
  generatedAt: "2026-09-03T22:10:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Evening pass (Thu 3 September): no match played since Saturday's Forest draw. Lead is what
  // Thursday's press conference and squad lists actually settled: Chiesa, in contention by the
  // morning previews, is back to the international break on Iraola's own timetable and left out of
  // the Champions League squad with Endo; Barcola is cleared to debut at Ipswich, start or bench
  // an open call; Gomez trains next week and is hoped for before the break. Emersonn is fit for
  // Ipswich. Under STEP 7.5 none of this is photographable: a press conference is not a moment,
  // Barcola has yet to play, and the next kick-off is tomorrow. NO cover image is requested and the
  // render stays on the pure-type fallback (src null). generatedAt is re-stamped as the cache-buster (COVER-00001).
  brief: {
    leadStory:
      "Federico Chiesa will not be back with the group until the international break, Andoni Iraola said on Thursday morning, and by the evening he and Wataru Endo had been left out of Liverpool's Champions League squad altogether, the two hardest lines of a press-conference day that otherwise cleared Bradley Barcola to make his GBP123m debut at Ipswich on Friday night. Joe Gomez is the nearest return, back on the grass next week and hoped for before the break; Leoni rejoins the group during it; Bradley and Ekitike have no date. Iraola said his side has been losing ninety per cent of the minutes this season and must start stronger, and named Szoboszlai and Araujo as the right-back cover behind Frimpong. Emersonn is fit for Ipswich and Gary O'Neil fully expects a result. Opta gives Liverpool 59.3 per cent. Thirteenth on two points, the table frozen until eight o'clock on Friday.",
    subject: null,
    prompt: null,
    aspectRatio: "portrait",
    slug: null,
  },
};


// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Ipswich Town",
  shortName: "IPS",
  home: false,
  date: "2026-09-04T20:00:00",
  competition: "PL",
  venue: "Portman Road",
  broadcast: "Sky Sports",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
  { date: "2026-08-29", opponent: "Nott'm Forest",       home: true,  score: "2-2", competition: "PL",  result: "D", scorers: "Isak 60', Munoz 82'" },
  { date: "2026-08-23", opponent: "Newcastle",           home: false, score: "2-2", competition: "PL",  result: "D", scorers: "Gakpo 55', Szoboszlai 90+9' pen" },
  { date: "2026-08-16", opponent: "Como",               home: true,  score: "2-0", competition: "PSF", result: "W", scorers: "Gakpo, Jacquet" },
  { date: "2026-08-09", opponent: "Monaco",             home: true,  score: "2-3", competition: "PSF", result: "L", scorers: "Isak 16', Wirtz 29'" },
  { date: "2026-08-02", opponent: "Leeds United",       home: false, score: "2-4", competition: "PSF", result: "L", scorers: "Chambers, Wirtz" },
  { date: "2026-07-29", opponent: "Wrexham",            home: false, score: "1-0", competition: "PSF", result: "W", scorers: "Ngumoha 75'" },
  { date: "2026-07-25", opponent: "Sunderland",         home: false, score: "4-2", competition: "PSF", result: "W", scorers: "Morrison 13', Szoboszlai, Chiesa, Koumas 85'" },
  { date: "2026-05-24", opponent: "Brentford",          home: true,  score: "1-1", competition: "PL", result: "D", scorers: "Jones 58'" },
  { date: "2026-05-15", opponent: "Aston Villa",        home: false, score: "2-4", competition: "PL", result: "L", scorers: "Van Dijk 52', 90+" },
  { date: "2026-05-09", opponent: "Chelsea",            home: true,  score: "1-1", competition: "PL", result: "D", scorers: "Gravenberch 6'" },
  { date: "2026-05-03", opponent: "Manchester United", home: false, score: "2-3", competition: "PL", result: "L", scorers: "Szoboszlai 47', Gakpo 56'" },
  { date: "2026-04-25", opponent: "Crystal Palace",home: true,  score: "3-1", competition: "PL",   result: "W", scorers: "Isak, Robertson, Wirtz 90+" },
  { date: "2026-04-19", opponent: "Everton",       home: false, score: "2-1", competition: "PL",   result: "W", scorers: "Salah, Van Dijk 90+10'" },
  { date: "2026-04-14", opponent: "PSG",           home: true,  score: "0-2", competition: "UCL",  result: "L", scorers: "" },
  { date: "2026-04-11", opponent: "Fulham",        home: true,  score: "2-0", competition: "PL",   result: "W", scorers: "Ngumoha, Salah" },
  { date: "2026-04-08", opponent: "PSG",          home: false, score: "0-2", competition: "UCL",  result: "L", scorers: "" },
  { date: "2026-04-04", opponent: "Man City",     home: false, score: "0-4", competition: "FA",   result: "L", scorers: "" },
  { date: "2026-03-21", opponent: "Brighton",     home: false, score: "1-2", competition: "PL",   result: "L", scorers: "Kerkez" },
  { date: "2026-03-18", opponent: "Galatasaray", home: true,  score: "4-0", competition: "UCL",  result: "W", scorers: "Szoboszlai, Ekitike, Gravenberch, Salah" },
  { date: "2026-03-15", opponent: "Tottenham",   home: true,  score: "1-1", competition: "PL",   result: "D", scorers: "Gakpo" },
  { date: "2026-03-10", opponent: "Galatasaray", home: false, score: "0-1", competition: "UCL",  result: "L", scorers: "" },
  { date: "2026-03-06", opponent: "Wolves",      home: false, score: "3-1", competition: "FA",   result: "W", scorers: "Ekitike 2, Wirtz" },
  { date: "2026-03-03", opponent: "Wolves",      home: false, score: "1-2", competition: "PL",   result: "L", scorers: "Szoboszlai" },
  { date: "2026-02-28", opponent: "West Ham",     home: true,  score: "5-2", competition: "PL",   result: "W", scorers: "Ekitike 2, Salah, Gakpo, Szoboszlai" },
  { date: "2026-02-22", opponent: "Nott'm Forest",home: false, score: "1-0", competition: "PL",   result: "W", scorers: "Mac Allister" },
  { date: "2026-02-14", opponent: "Brighton",     home: true,  score: "3-0", competition: "FA",   result: "W", scorers: "Ekitike 2, Gakpo" },
  { date: "2026-02-11", opponent: "Sunderland",   home: false, score: "1-0", competition: "PL",   result: "W", scorers: "Gravenberch" },
  { date: "2026-02-08", opponent: "Man City",     home: false, score: "1-2", competition: "PL",   result: "L", scorers: "Salah" },
  { date: "2026-01-31", opponent: "Newcastle",    home: true,  score: "4-1", competition: "PL",   result: "W", scorers: "Ekitike 2, Wirtz, Salah" },
  { date: "2026-01-24", opponent: "Bournemouth",  home: false, score: "2-3", competition: "PL",   result: "L", scorers: "Gakpo, Szoboszlai" },
  { date: "2026-01-17", opponent: "Burnley",      home: true,  score: "1-1", competition: "PL",   result: "D", scorers: "Van Dijk" },
  { date: "2026-01-12", opponent: "Barnsley",     home: true,  score: "4-1", competition: "FA",   result: "W", scorers: "Ngumoha, Gakpo, Jones, Wirtz" },
  { date: "2026-01-08", opponent: "Arsenal",      home: false, score: "0-0", competition: "PL",   result: "D", scorers: "" },
];

// ─── Premier League Standings (LIVE — sourced from ESPN site.api) ──────────
// Fetched daily by the liverpool-tracker-update skill from:
//   http://site.api.espn.com/apis/v2/sports/soccer/eng.1/standings
// `qualification` is derived from ESPN's note.description field:
//   "UCL" = Champions League, "UEL" = Europa League, "UECL" = Conference League,
//   "REL" = Relegation. Liverpool's row is flagged with `highlight: true`.
// Last refresh: 2026-09-03 (evening) — live 2026-27 table, matchweek 2. Matches ESPN's feed.
// Liverpool 13th on 2 points from two draws. Nobody has played since the weekend, so the table is
// frozen until Friday night at Portman Road, where a win takes Liverpool to five and above their
// hosts. Regenerated from ESPN's endpoint on Thursday evening and byte-identical to the morning pull.
export const STANDINGS = [
  { pos: 1, team: "Manchester City", p: 2, w: 2, d: 0, l: 0, gd: 4, pts: 6, qualification: "UCL" },
  { pos: 2, team: "Arsenal", p: 2, w: 2, d: 0, l: 0, gd: 4, pts: 6, qualification: "UCL" },
  { pos: 3, team: "Hull", p: 2, w: 2, d: 0, l: 0, gd: 3, pts: 6, qualification: "UCL" },
  { pos: 4, team: "Chelsea", p: 2, w: 2, d: 0, l: 0, gd: 2, pts: 6, qualification: "UCL" },
  { pos: 5, team: "Brentford", p: 2, w: 1, d: 1, l: 0, gd: 3, pts: 4, qualification: "UEL" },
  { pos: 6, team: "Newcastle", p: 2, w: 1, d: 1, l: 0, gd: 2, pts: 4 },
  { pos: 7, team: "Everton", p: 2, w: 1, d: 1, l: 0, gd: 2, pts: 4 },
  { pos: 8, team: "Leeds", p: 2, w: 1, d: 1, l: 0, gd: 1, pts: 4 },
  { pos: 9, team: "Brighton", p: 2, w: 1, d: 0, l: 1, gd: 3, pts: 3 },
  { pos: 10, team: "Manchester United", p: 2, w: 1, d: 0, l: 1, gd: 1, pts: 3 },
  { pos: 11, team: "Sunderland", p: 2, w: 1, d: 0, l: 1, gd: 0, pts: 3 },
  { pos: 12, team: "Ipswich", p: 2, w: 1, d: 0, l: 1, gd: -2, pts: 3 },
  { pos: 13, team: "Liverpool", p: 2, w: 0, d: 2, l: 0, gd: 0, pts: 2, highlight: true },
  { pos: 14, team: "Bournemouth", p: 2, w: 0, d: 1, l: 1, gd: -1, pts: 1 },
  { pos: 15, team: "Nott'm Forest", p: 2, w: 0, d: 1, l: 1, gd: -1, pts: 1 },
  { pos: 16, team: "Fulham", p: 2, w: 0, d: 0, l: 2, gd: -2, pts: 0 },
  { pos: 17, team: "Coventry", p: 2, w: 0, d: 0, l: 2, gd: -4, pts: 0 },
  { pos: 18, team: "Crystal Palace", p: 2, w: 0, d: 0, l: 2, gd: -5, pts: 0, qualification: "REL" },
  { pos: 19, team: "Aston Villa", p: 2, w: 0, d: 0, l: 2, gd: -5, pts: 0, qualification: "REL" },
  { pos: 20, team: "Tottenham", p: 2, w: 0, d: 0, l: 2, gd: -5, pts: 0, qualification: "REL" },
];

// ─── Standings Commentary (refreshed alongside STANDINGS by the skill) ─────
// Hand-written by the skill on each daily run. `overview` is a 3-5 sentence
// paragraph that frames the table as a whole; `teams` is keyed by team name
// (matching STANDINGS[].team) and holds an optional one-line note per row.
// Only Liverpool + the most newsworthy rows need a note — empty teams render
// nothing beneath their row.
export const STANDINGS_COMMENTARY = {
  source: "ESPN",
  sourceUrl: "https://www.espn.com/soccer/table/_/league/eng.1",
  matchweek: 2,
  generatedAt: "2026-09-03T22:10:00Z",
  overview:
    "The table is still exactly as the weekend left it, and by Thursday evening the only thing that has changed is what Liverpool will bring to the first match that can move it. Thirteenth on two points from two 2-2 draws, a place and a point below Friday's hosts, they go to Ipswich without Chiesa, whom the manager has now put back to the international break, and with Barcola available for a debut, bench or start. A win takes them to five and above the Tractor Boys, their first three points since April; a third draw would be a seventh league game without a win, something Liverpool have managed only once before. Above them, Manchester City, Arsenal, promoted Hull and Chelsea share the maximum on six, Brentford lead the chasing pack on four. At the foot, Fulham, Coventry, Crystal Palace, Aston Villa and Tottenham are still without a point, the last three in the drop zone on goals scored.",
  teams: {
    "Liverpool": "Thirteenth on two points, unbeaten, winless, and yet to lead for a minute. Chiesa is out until the break, Gomez trains next week, Barcola is cleared for Friday. Opta gives the trip to Ipswich a 59.3 per cent chance of the first win.",
    "Manchester City": "Top on six and plus-four, level with Arsenal, and the league's biggest gross spenders at £440.3m, with Enzo Fernandez's £125m the summer's last marquee deal.",
    "Arsenal": "Second on six, tied with City on points and goal difference after two wins from two, and fourth in the net-spend table on £136.6m.",
    "Hull": "Third on six, two from two on their return to the top flight, still the opening fortnight's outlier.",
    "Chelsea": "Fourth on six and perfect under Xabi Alonso, a 4-3 over Brighton the latest, though deadline night ended with Monaco pulling Lamine Camara out of a £47m deal and Fernandez gone to City.",
    "Brentford": "Fifth on four and unbeaten, the best of the sides yet to drop a point through anything but a draw.",
    "Ipswich": "Twelfth on three, a place and a point above Liverpool and hosting them on Friday with Emersonn fit again. Gary O'Neil says he fully expects a result; Matusiwa, Taylor and Philogene stay out. Unbeaten in eighteen home league games.",
    "Bournemouth": "Fourteenth on one. Liverpool's opponents on 20 September, and the last promoted side to beat Liverpool, under O'Neil, in March 2023.",
    "Nott'm Forest": "Fifteenth on one after the 2-2 at Anfield, where Opta had them out-creating Liverpool 2.30 to 1.61 on expected goals.",
    "Crystal Palace": "Eighteenth and pointless after two defeats. Held Ismaila Sarr at £50m-plus all window, and on Wednesday his agent published an angry statement about it.",
    "Brighton": "Ninth on three. Their Conference League trip to Jablonec has moved the Anfield fixture to Sunday 25 October, 2pm.",
    "Tottenham": "Bottom on goals scored with two defeats from two, and third in net spend at £176m for the privilege.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Winger Who Was Edging Back Is Out Until The Break, And Off The European List.",
    byline: "Liverpool FC / Liverpool Offside",
    dateline: "Kirkby · 3 September",
    category: "Injuries",
    body:
      "Thursday morning's previews had Federico Chiesa in contention. Thursday morning's manager did not. Asked for the injury picture, Andoni Iraola worked outward from the nearest return: Joe Gomez on the grass next week and hoped for before the international break, Giovanni Leoni rejoining the group during it, and 'even Fede should be around those dates.' That is five fixtures without him, Atletico Madrid among them. By the evening the Champions League list had gone to UEFA without his name, or Wataru Endo's, while three injured players kept theirs. A squad closed until January just got one body shorter on the right, and the club has said so twice in a day.",
  },
  {
    n: "02",
    headline: "Available, Definitely. Starting, A Good Question.",
    byline: "Liverpool FC / Sports Mole",
    dateline: "Kirkby · 3 September",
    category: "Manager",
    body:
      "Bradley Barcola has now trained three times with the players he cost £123m to join, and on Thursday his manager confirmed the first half of the sentence everyone wanted. 'If everything goes well in today's training also, he will definitely be available for tomorrow.' The second half he would not give. 'It's a good question, it's a good question,' Iraola said twice, before laying out the case against: no minutes since France's third-place match on 18 July, no pre-season, a decision still to make. He was happier on the man than the minutes: a player who 'wanted Liverpool a lot' and arrives 'with the willingness to help'. Sports Mole has him on the bench beside Ngumoha. The team sheet at seven on Friday will settle it.",
  },
  {
    n: "03",
    headline: "Ninety Per Cent Of The Minutes Behind.",
    byline: "Liverpool FC / Opta Analyst",
    dateline: "Kirkby · 3 September",
    category: "Tactics",
    body:
      "The most honest line of the week came when Iraola was asked about four equalisers in two games. 'That's the positive side of the reaction,' he said, 'but I want to focus on trying to score first, because everything looks better.' Then the number: Liverpool have been 'basically losing 90 per cent of the minutes this season' because of the early goals conceded. When you are losing, he said, the same pattern that would look like control looks like nothing. Opta framed it from the other side on Thursday: six league games without a win, D4 L2, and two conceded in each of the first two, a start matched only by Rodgers in 2012. The instruction for Portman Road is short. Do not wait for the first goal to be aggressive.",
  },
  {
    n: "04",
    headline: "The Striker Who Jarred His Knee Is Fine, And His Manager Expects A Result.",
    byline: "East Anglian Daily Times / Liverpool FC",
    dateline: "Portman Road · 3 September",
    category: "Football News",
    body:
      "Gary O'Neil's Thursday was easier than his opposite number's. Emersonn, taken off at half-time at Old Trafford, is 'fine, he's back, he's trained this week', the knee an 'extreme landing' that 'settled very, very quickly'. No fresh concerns; Matusiwa, Taylor and Philogene stay out. The former Liverpool academy coach then did something Iraola did not, which was describe his own game plan out loud: Enciso as a false nine to pull Van Dijk and Jacquet out of their duels, or 'two up against them' with Flemming and Emersonn and go direct. 'I'm sure they're thinking they've got a chance to add to their points tally,' he said, 'but so do we.' Ipswich are unbeaten in eighteen at home. Liverpool have never lost a Premier League game here.",
  },
  {
    n: "05",
    headline: "Two Lists, Twenty-Five Names Each, And What They Say About January.",
    byline: "This Is Anfield / Liverpool.com",
    dateline: "Anfield · 3 September",
    category: "Transfers",
    body:
      "Squad-list day is usually a formality. This one read like a memo. The Premier League 25 went in with room to spare, Barcola in, Tsimikas back from Roma as the second left-back, and Isaac Mabaya, twenty-one, registered as an academy right-back where Owen Beck used to be, a paper answer to a position Iraola conceded 'looks thin'. Jacquet, Ngumoha, Leoni and Nyoni did not need naming. The Champions League list was tighter and told more: McConnell over Endo, Chiesa out, and Ekitike, Bradley and Leoni kept despite their rehab because only three changes are allowed after the league phase. Elliott, loaned to Valencia with no option to buy, is on neither. The window shut on Tuesday; the sorting did not.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-03T22:10:00Z",
  summary:
    "Federico Chiesa will not be back with the group until the international break, Andoni Iraola said on Thursday morning, and by the evening he and Wataru Endo had been left out of Liverpool's Champions League squad altogether: the two hardest lines of a press-conference day that otherwise cleared Bradley Barcola to make his £123m debut at Ipswich on Friday night. The morning's previews had Chiesa edging into contention; the manager's own timetable now has him rejoining training during the break alongside Giovanni Leoni, with Joe Gomez the nearest return, due back on the grass next week and hoped for before the break rather than for Portman Road. Barcola trained for a third day and 'will definitely be available' if Thursday's session passed, though Iraola would not say whether he starts, calling it 'a good question' for a player without a minute since 18 July. Across Suffolk, Gary O'Neil has Emersonn fit after the knee scare at Old Trafford and says he fully expects a result. Two squad lists, one press conference, a Szoboszlai-at-right-back contingency spoken aloud, and the table still frozen at thirteenth until eight o'clock on Friday.",
  keyTopics: [
    {
      title: "Chiesa Out Until The Break, And Left Off The Champions League List With Endo (Liverpool FC / Liverpool Offside, today)",
      detail:
        "The morning's team-news softening was reversed inside a day. Asked for an injury update at Thursday's press conference, Iraola put Chiesa's return to group training 'around those dates' of the September international break, alongside Leoni, which rules him out of Ipswich, Atletico, Fulham, Tottenham and Bournemouth. By Thursday evening the 25-man Champions League list had been submitted without him and without Wataru Endo, an unused substitute in both league games, while the injured Ekitike, Bradley and Leoni were all registered. Liverpool Offside notes only three changes are allowed after the league phase, which is why the long-term absentees kept their places and the fit midfielder lost his.",
      category: "injuries",
    },
    {
      title: "Barcola Cleared To Debut At Portman Road; Bench Or Start Is, In Iraola's Words, 'A Good Question' (Liverpool FC, today)",
      detail:
        "The £123m winger has trained three times with the group since Monday's announcement and, Iraola said on Thursday morning, 'will definitely be available' for Friday if the afternoon session went to plan. Whether he starts is a decision the manager would not make in public: Barcola 'is in a good place' but 'hasn't had the minutes in the pre-season games', his last appearance France's World Cup third-place match on 18 July. The club's own team news frames the choice as start or substitute; Sports Mole's Thursday XI has him on the bench beside Ngumoha, with Munoz keeping the right.",
      category: "matches",
    },
    {
      title: "Gomez Back On The Grass Next Week, Hoped For Before The Break; Bradley And Ekitike 'Will Go Later' (Liverpool FC / BBC Sport, today)",
      detail:
        "The clearest injury timetable Iraola has given. 'The closest one is Joe,' he said on Thursday, with Gomez, out since the Sunderland friendly in July, to 'start training with us next week' and hoped back 'before the break'. That is a fortnight, not a Friday, and it moves the target off the Fulham date the previews had pencilled. Leoni's plan is to rejoin the group during the break after nearly a year on ACL rehabilitation; Chiesa is put on the same dates; Bradley and 'especially Hugo' Ekitike have no timeframe at all. Until Gomez is back, the right-back cover remains Araujo and, as Iraola said aloud, Szoboszlai.",
      category: "injuries",
    },
    {
      title: "'We Have To Start Stronger': Iraola Says His Side Has Been Losing 90 Per Cent Of The Minutes (Liverpool FC / BBC Sport, today)",
      detail:
        "The tactical line of the presser was about the first quarter of an hour. 'We've been basically losing 90 per cent of the minutes this season because we conceded very early goals,' Iraola said on Thursday, and the instruction for Friday is not to 'wait until the first goal to be more aggressive'. He admitted the frustration of two draws plainly, 'I want to win, I need to win', and said the fortnight with the market open had felt 'virtual'; with it shut, 'we know who we are'. Opta's preview puts the number behind it: winless in six league games (D4 L2), the longest run since Houllier's eleven in 2002-03 if it reaches seven.",
      category: "tactics",
    },
    {
      title: "Szoboszlai At Right-Back Spoken Aloud, And Mabaya Registered As The Academy Cover (Liverpool FC / This Is Anfield, today)",
      detail:
        "Iraola did not pretend the right side is fine. 'We don't have Conor Bradley right now, we don't have Joe Gomez right now. Definitely we look thin,' he said on Thursday, before naming Szoboszlai and Araujo as the players who can cover it. The Hungarian, in line for his 150th Liverpool appearance, moved to right-back for the final twenty minutes against Forest when Frimpong was withdrawn, and Iraola said he is 'ready to do it'. The squad list submitted the same day adds a third option on paper: Isaac Mabaya, the 21-year-old academy right-back, registered as a homegrown senior for the first time, replacing the injured Owen Beck.",
      category: "tactics",
    },
    {
      title: "Two Lists Of Twenty-Five: Tsimikas And Chambers In, Jacquet, Ngumoha And Leoni Exempt Domestically (This Is Anfield / Liverpool.com, today)",
      detail:
        "Liverpool submitted their Premier League squad on Thursday, a full 25 with eight homegrown players, valid until the January window closes on 1 February. Barcola is in; so are Kostas Tsimikas, back from his Roma loan as Kerkez's cover, Luke Chambers, Vitezslav Jaros and James McConnell. Jacquet, Ngumoha, Leoni, Nyoni, Koumas and Danns did not need registering as under-21s. The Champions League list is stricter: Jacquet and Leoni had to be named there, McConnell was preferred to Endo, and Chiesa missed out. Liverpool.com reads the two lists together as a hint about who the club expects to move in January.",
      category: "general",
    },
    {
      title: "Emersonn Fit, Flemming In Reserve, And O'Neil 'Fully Expects' A Result (East Anglian Daily Times / Liverpool FC, today)",
      detail:
        "The doubt on the other side cleared. Gary O'Neil confirmed on Thursday that Emersonn, off at half-time at Old Trafford, is 'fine, he's back, he's trained this week', the knee an 'extreme landing' that 'settled very, very quickly', and that there are 'no fresh injury concerns' beyond Matusiwa, Taylor and Philogene. He talked through the options openly: Enciso as a false nine 'to take the physicality away' from Van Dijk and Jacquet, or 'two up against them' with Flemming and Emersonn. 'I'm sure they're thinking they've got a chance to add to their points tally, but so do we.' Fatawu, with 5 chances created and 14 duels won, is the threat Opta singles out.",
      category: "matches",
    },
    {
      title: "Opta Gives Liverpool 59.3 Per Cent, And Isak Four Goals In Two Games Against Ipswich (Opta Analyst, today)",
      detail:
        "The supercomputer published on Thursday makes Liverpool clear favourites at 59.3 per cent to Ipswich's 19.7, the draw at 21.0, the likeliest scoreline a 1-2. The surrounding numbers cut both ways: Liverpool are unbeaten in twenty league games against promoted sides (W15 D5), unbeaten in six visits to Portman Road, and Isak scored four against Ipswich for Newcastle in 2024-25, three of them in a hat-trick at this ground. Against that, two goals conceded in each of the first two games has happened only once before, under Rodgers in 2012-13, and Wirtz has created just two chances all season, though only Bruno Fernandes has made more line-breaking passes.",
      category: "tactics",
    },
    {
      title: "'Very Happy To Keep Cody': Iraola Closes The Gakpo Chapter In Public (Liverpool FC, today)",
      detail:
        "Three days after the FSG meeting, the manager gave his version. Gakpo 'was always aware of the situations in the market, we were constantly talking with each other', Iraola said on Thursday, 'he's now in a good place physically, mentally, and I'm very happy to keep Cody because for me he's a very valuable player.' He also addressed the shape of the attack the window left him: no specialist right winger, but four wingers he expects to play both sides, Barcola included, who 'started actually more on the right side' at Lyon. Gakpo, who scored at Newcastle and assisted against Forest, keeps the left on Friday.",
      category: "transfers",
    },
    {
      title: "No News On A Ngumoha Contract, But A Manager Who Calls Him 'A Settled Football Player' At Eighteen (BBC Sport / Liverpool FC, today)",
      detail:
        "Asked on Thursday about the five-year deal that has been waiting for Ngumoha's eighteenth birthday, Iraola said there was no news. What he offered instead was a defence of the winger's use on the right against Newcastle: 'because he hasn't been incredible in the first game we put him on the right, we cannot say he cannot play on the right anymore.' He wants the teenager to develop both flanks, called him 'incredible' for looking 'already like a settled football player in the Premier League', and expects him on the bench again on Friday with Barcola ahead of him in the queue.",
      category: "general",
    },
    {
      title: "Nolan: 'Haven't Had A Great Window', But Barcola Will Be 'A Huge Success' (Empire of the Kop, today)",
      detail:
        "The pundit verdicts kept arriving on Thursday. Kevin Nolan told Empire of the Kop he does not expect Liverpool to contend for the title and was underwhelmed by the window as a whole, while calling the £106m-rising-to-£123m Barcola a 'great signing' who will be a 'huge success'. It follows the Telegraph's fourteenth-of-twenty ranking and BBC Sport's note on the missing defensive midfielder, and it lands the same day the manager, asked whether he wanted more signings, answered that 'the club has decided those signings we've done are the ones that improved our team'.",
      category: "general",
    },
    {
      title: "Elliott's Valencia Loan Confirmed, No Option To Buy, Contract To 2028 (Liverpool FC / ESPN, 1d ago)",
      detail:
        "The one piece of outgoing business still live after the English window shut on Tuesday night. Harvey Elliott has joined Valencia on loan for the rest of 2026-27, the Spanish window having stayed open past England's, with no purchase option in the deal; he remains contracted to Liverpool until 2028 and is expected back next summer. The 23-year-old arrived in Valencia on Monday evening to train under Carlos Corberán after a difficult two years, the last of them on loan at Aston Villa. He is not in either of Liverpool's 25-man lists.",
      category: "transfers",
    },
  ],
  sources: [
    "Liverpool FC",
    "Liverpool Offside",
    "BBC Sport",
    "This Is Anfield",
    "Liverpool.com",
    "Sports Mole",
    "East Anglian Daily Times",
    "Opta Analyst",
    "ESPN",
    "Empire of the Kop",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// IN-SEASON ANALYSIS
// ─────────────────────────────────────────────────────────────────────────────
// Added 1 Sep 2026, the night the summer window shut, when the page stopped being
// a transfer tracker and became a season one. Four exports, each refreshed by the
// daily skill:
//   OPPOSITION        — a scouting dossier on the NEXT_MATCH opponent
//   FORM_TRENDS       — per-match underlying numbers and what they add up to
//   SQUAD_LOAD        — availability, returns and rotation, now the squad is closed
//   SEASON_PROJECTION — points pace against the places that matter
//
// HOUSE RULE, and the reason this file has a `confidence` field on nearly
// everything: NEVER invent a number. xG, shots and minutes come from a named
// source or they are marked `null` with `pending: true`. An empty cell renders as
// "awaiting data" and is honest. A fabricated one is a lie that survives to the
// next edition and then into the auditor's blind spot.

export const OPPOSITION = {
  generatedAt: "2026-09-03T22:10:00Z",
  opponent: "Ipswich Town",
  shortName: "IPS",
  fixture: {
    date: "2026-09-04T20:00:00",
    venue: "Portman Road",
    home: false,
    competition: "PL",
    broadcast: "Sky Sports",
  },
  manager: "Gary O'Neil",
  formation: "4-2-3-1",
  leaguePosition: 12,
  summary:
    "Emersonn is fit, and that single Thursday sentence from Gary O'Neil reorganises the dossier: the opening-day scorer who went off at half-time at Old Trafford has 'trained this week' with 'no concerns', so Ipswich go into Friday twelfth, a place and a point above Liverpool, with their first-choice eleven minus three long-term absentees. O'Neil, the former Liverpool academy coach who replaced Kieran McKenna in the summer, made fourteen signings, Zian Flemming from Burnley the last of them, and Sky's figures put Ipswich second in the league for net spend at £190.7m. Two league games have produced ten goals: a 2-1 over Sunderland won by Jack Clarke's late goal, then a 5-2 at Old Trafford in which they led late in the first half through Leif Davis before Bruno Fernandes's hat-trick. Opta's numbers to hold are these: unbeaten in eighteen home league games, seventeen of them in the Championship, but one clean sheet in their last 36 Premier League matches and none in the last 21, and O'Neil himself has two in his last 35 as a manager. He said on Thursday he 'fully expects' a result.",
  shape:
    "4-2-3-1 with Lukic and Núñez as the double pivot, Fatawu and Maeda wide of Enciso, and Emersonn alone up top now he is fit, Flemming the alternative. O'Neil described two variations on Thursday: Enciso dropping in as a false nine 'to take the physicality and duels away' from Van Dijk and Jacquet, or Flemming and Emersonn together and 'really direct'. The full-backs push high, Davis on the left especially, and it was Fatawu's run past Luke Shaw that made Davis's goal at United. The six-foot-nine Scherpen goes long early, the pattern that undid Liverpool inside twenty-four minutes against Forest.",
  keyPlayers: [
    {
      name: "Abdul Fatawu",
      role: "Right winger",
      threat: "Across Ipswich's two league games he has created more chances (5), played more passes into the box (9) and won more duels (14) than any team-mate, per Opta, and he beat Luke Shaw to set up Leif Davis's goal at Old Trafford. Runs at full-backs, which is Liverpool's thinnest position.",
      source: "Opta Analyst / Squawka",
    },
    {
      name: "Emersonn",
      role: "Centre-forward (fit)",
      threat: "Scored the opener against Sunderland with 3 shots and 2 chances created in 66 minutes. Off at half-time at Old Trafford with a jarred knee, but O'Neil confirmed on Thursday he has trained all week and is available.",
      source: "Squawka / East Anglian Daily Times",
    },
    {
      name: "Julio Enciso",
      role: "No. 10 / false nine option",
      threat: "Has applied 178 pressures in two league games, more than any Ipswich player, per Opta, and O'Neil named him on Thursday as the false-nine option against Liverpool's two centre-backs.",
      source: "Opta Analyst / Liverpool FC",
    },
    {
      name: "Zian Flemming",
      role: "Centre-forward (option)",
      threat: "Ipswich's 14th signing of the window, from Burnley on deadline day. With Emersonn fit he is O'Neil's named option to 'put two up against them' and go direct. No Ipswich minutes yet, so no Ipswich numbers.",
      source: "Liverpool FC / Racing Post",
    },
    {
      name: "Kjell Scherpen",
      role: "Goalkeeper",
      threat: "Six foot nine, the tallest player in Premier League history. Dominates his box on set pieces and launches the long ball that starts Ipswich's most direct attacks.",
      source: "Fantasy Football Hub",
    },
  ],
  predictedXI: [
    "Scherpen", "O'Shea", "Diop", "Greaves", "Davis",
    "Lukic", "Núñez", "Fatawu", "Enciso", "Maeda", "Emersonn",
  ],
  absentees: [
    { name: "Jaden Philogene", issue: "Ankle ('a little too early this weekend')", status: "Out" },
    { name: "Jack Taylor", issue: "Knee", status: "Out" },
    { name: "Azor Matusiwa", issue: "Thigh", status: "Out" },
    { name: "Florentino Luis", issue: "Calf", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-08-30", opponent: "Manchester United", home: false, score: "2-5", result: "L", note: "Led late in the first half through Leif Davis, set up by Fatawu; Bruno Fernandes hat-trick turned it. Emersonn off at half-time with a jarred knee, since cleared." },
    { date: "2026-08-22", opponent: "Sunderland", home: true, score: "2-1", result: "W", note: "Emersonn and Jack Clarke scored on the opening weekend." },
  ],
  liverpoolAngle:
    "The mismatch is still on Liverpool's right, and Thursday made it official from both dugouts. Iraola conceded the department 'looks thin' with Bradley and Gomez out and named Szoboszlai and Araujo as the cover behind Frimpong; O'Neil, meanwhile, has his best creator, Fatawu, five chances and fourteen duels won in two games per Opta, aimed at exactly that flank. The second angle is the one O'Neil described himself: Enciso as a false nine to drag Van Dijk and Jacquet out of the duels they win, with the runners behind him, which is the transition pattern that has already cost Liverpool nine fast-break goals since last August, more than any Premier League side. Against it, the counterweight is real and sourced: 2.73 expected goals at Newcastle, unbeaten in twenty league games against promoted sides, unbeaten in six visits to Portman Road, and a striker in Isak who scored a hat-trick here for Newcastle. Opta makes it 59.3 per cent Liverpool. The manager's own condition for it is simpler, and harder: do not concede first.",
  modelLine: {
    source: "Opta supercomputer",
    liverpool: 59,
    draw: 21,
    opponent: 20,
    note: "Opta's Thursday preview gives Liverpool 59.3%, the draw 21.0% and Ipswich 19.7%, the likeliest Liverpool win a 1-2 (7.65%) and the likeliest draw 1-1 (11.66%). Squawka's Signal makes it 59% and tips 1-3. Both are models, not predictions of intent, and the bookmakers' 11-20 is a market price.",
  },
  sources: ["Opta Analyst", "Liverpool FC", "East Anglian Daily Times", "Squawka", "Racing Post", "Sports Mole", "Fantasy Football Hub"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-03T22:10:00Z",
  competition: "PL",
  played: 2,
  headline:
    "The manager put his own number on it on Thursday: Liverpool have been 'basically losing 90 per cent of the minutes this season', and the underlying figures say that is the whole diagnosis, not a symptom. On Tyneside they out-created Newcastle 2.73 to 1.43 from 27 shots and lost the game's two moments to fast breaks; at Anfield they were out-created 2.30 to 1.61 by Forest and chased it from the twenty-fourth minute. Season xG stands at 4.34 for and 3.73 against, a real if modest edge that has produced four goals each way and not a second in front. Opta's Thursday preview adds the historical shape: winless in six league games (D4 L2) back into last spring, two conceded in each of the first two, and yet twenty games unbeaten against promoted sides. A squad closed until January cannot buy a different first quarter of an hour. It has to play one.",
  diagnosis: [
    {
      label: "Slow starts",
      detail: "Liverpool generated 0.25 xG in the first half against Forest to Forest's 1.29, and went behind inside 24 minutes to a goalkeeper's long ball. Both league games have been chased rather than led; Iraola's instruction for Ipswich is not to wait for the first goal to be aggressive.",
      severity: "high",
      source: "Opta Analyst / Liverpool FC",
    },
    {
      label: "Chance quality, not chance volume",
      detail: "27 shots at Newcastle for 2.73 xG is roughly a tenth of a goal per attempt. Wirtz has created only two chances in two league games, though his 11 line-breaking passes are second only to Bruno Fernandes's 13, which says the ball is getting through the lines and dying in the final action.",
      severity: "medium",
      source: "Opta Analyst",
    },
    {
      label: "Fast-break concession",
      detail: "Both Newcastle goals came from fast breaks, and Opta count nine goals conceded from such situations since the start of last season, more than any Premier League team. Add a penalty given away by Alisson and a goal from a direct long ball against Forest, and four of four conceded have come from transition or disorder rather than sustained pressure. O'Neil said on Thursday he may play Enciso as a false nine specifically to pull the centre-backs out.",
      severity: "high",
      source: "Opta Analyst / Liverpool FC",
    },
    {
      label: "Munoz is the one clear positive",
      detail: "The £34m arrival from Osasuna scored his first Liverpool goal against Forest and led the team in shots (4), attempted dribbles (6) and duels contested (17), having also won the stoppage-time penalty at Newcastle as a substitute.",
      severity: "positive",
      source: "Opta Analyst",
    },
  ],
  matches: [
    {
      date: "2026-08-29",
      opponent: "Nott'm Forest",
      home: true,
      score: "2-2",
      result: "D",
      xgFor: 1.61,
      xgAgainst: 2.30,
      xgFirstHalfFor: 0.25,
      xgFirstHalfAgainst: 1.29,
      shotsFor: null,
      pending: false,
      verdict: "Out-created at Anfield. Forest led twice, through Ndoye and a Gibbs-White penalty, and Liverpool needed Isak on the hour and Munoz at 82 to rescue it. Wirtz had a goal ruled out for an offside against Frimpong in the build-up.",
      source: "Opta Analyst",
    },
    {
      date: "2026-08-23",
      opponent: "Newcastle",
      home: false,
      score: "2-2",
      result: "D",
      xgFor: 2.73,
      xgAgainst: 1.43,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 27,
      pending: false,
      verdict: "27 shots and 2.73 xG at St James' Park against Newcastle's 1.43, most of theirs from the counter: both goals, Elanga's and Willock's, came from fast breaks. Rescued by a Szoboszlai penalty nine minutes into stoppage time after Gakpo had scored. First-half splits are not published for this match and stay blank.",
      source: "Opta Analyst",
    },
  ],
  totals: {
    xgFor: 4.34,
    xgAgainst: 3.73,
    goalsFor: 4,
    goalsAgainst: 4,
    points: 2,
    note: "Both totals are complete: xG for is 2.73 (Newcastle) plus 1.61 (Forest); xG against is 1.43 (Newcastle) plus 2.30 (Forest), all Opta Analyst. First-half splits exist only for the Forest match and are not aggregated.",
  },
  optaFacts: [
    "Liverpool are winless in their last six Premier League games (D4 L2), reaching back into last season under Slot. Only once before have they gone seven without a win in the competition: eleven matches from November 2002 to January 2003 under Houllier.",
    "Two goals conceded in each of the first two league games of a season has happened to Liverpool only once before in the Premier League era, in Brendan Rodgers's first three matches in 2012-13.",
    "Liverpool are unbeaten in their last 20 Premier League games against newly promoted sides (W15 D5). The last promoted team to beat them was Gary O'Neil's Bournemouth, in March 2023.",
    "Alexander Isak has four Premier League goals in two games against Ipswich, all for Newcastle in 2024-25, three of them in a hat-trick at Portman Road; Liverpool are unbeaten in all six of their away league games there, their longest unbeaten record at any ground.",
  ],
  sources: ["Opta Analyst", "Liverpool FC", "Squawka", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-03T22:10:00Z",
  headline:
    "Thursday's press conference redrew the board in one direction. Chiesa, written into contention by the morning previews, is now on the manager's own timetable for the international break and off the Champions League list; Gomez is the nearest return, on the grass next week and hoped for before the break; Leoni joins the group during it; Bradley and 'especially' Ekitike have no date. The one addition is Barcola, available if Thursday's session passed, start or bench still open. That leaves the back four one injury from Endo, the right side covered by Frimpong and then Szoboszlai or Araujo, both named by Iraola on Thursday, and Isak alone up front. Five games in seventeen days start at Portman Road with this and nothing else.",
  minutesNote:
    "Premier League minutes are not published here yet. Only two league games have been played and no reliable per-player league minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "No timeframe; December at the earliest", note: "'Especially Hugo will go later,' Iraola said on Thursday. Registered in the Champions League squad regardless, because only three changes are allowed after the league phase. With no forward signed, there is no alternative centre-forward behind Isak.", source: "Liverpool FC / Liverpool Offside" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training during the September international break", note: "Iraola's Thursday plan has him back with the squad during the break after nearly a year out; no matchday date yet. Named in the Champions League squad.", source: "Liverpool FC" },
    { name: "Conor Bradley", issue: "Knee", expected: "No timeframe", note: "'Probably Conor will go later,' Iraola said on Thursday, behind Gomez, Leoni and Chiesa in the order of returns. His absence is what leaves Frimpong as the only fit senior right-back.", source: "Liverpool FC" },
    { name: "Federico Chiesa", issue: "Muscle (Como friendly, August)", expected: "Rejoins group training during the September international break", note: "Ruled out of Ipswich on Thursday, contrary to the morning previews: 'even Fede should be around those dates' of the break, Iraola said. Left out of the Champions League squad the same evening. Stays at the club after his father closed off the Serie A talk on deadline night.", source: "Liverpool FC / Liverpool Offside" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 26 July)", expected: "Team training next week; hoped for before the September break", note: "'The closest one is Joe,' Iraola said on Thursday. The recovery 'has gone normally', he starts with the group next week, and the manager hopes to have him 'before the break', which covers Fulham and Bournemouth but not Friday. His return gives a fourth senior centre-back and cover at right-back in one body.", source: "Liverpool FC / BBC Sport" },
  ],
  returning: [],
  startersLastMatch: {
    match: "Liverpool 2-2 Nott'm Forest, 29 August",
    xi: ["Alisson", "Frimpong", "Jacquet", "Van Dijk", "Kerkez", "Mac Allister", "Szoboszlai", "Munoz", "Wirtz", "Gakpo", "Isak"],
    changes: "Mac Allister recalled to the pivot; Gravenberch left out of a Premier League XI for the first time under Iraola. Szoboszlai moved to right-back for the final twenty minutes when Frimpong was withdrawn.",
    source: "Liverpool FC / Opta Analyst",
  },
  depthRisk: [
    { position: "Right-back", level: "critical", detail: "Frimpong alone. 'Definitely we look thin,' Iraola said on Thursday, naming Szoboszlai (who finished the Forest game there) and Araujo as the cover; Gomez trains next week, Bradley has no date, the Gusto loan was refused. Mabaya, 21, was registered on Thursday as the academy option. Fatawu is the first winger to test it." },
    { position: "Centre-back", level: "high", detail: "Van Dijk, Jacquet and the loanee Araujo, with Gomez out until at least next week's return to training and Leoni not back with the group until the break. Konate left for Real Madrid on a free, no defender was bought. One injury here and Endo plays centre-half." },
    { position: "Centre-forward", level: "high", detail: "Isak alone with Ekitike given no timeframe on Thursday. Gakpo is the false-nine fallback." },
    { position: "Central midfield", level: "medium", detail: "Jones sold to Inter for £30m and not replaced. Mac Allister, Gravenberch, Szoboszlai and Endo, with Nyoni pushing; Endo was left out of the Champions League squad on Thursday, McConnell preferred." },
  ],
  sources: ["Liverpool FC", "BBC Sport", "Liverpool Offside", "Opta Analyst", "Sports Mole"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-03T22:10:00Z",
  played: 2,
  points: 2,
  pointsPerGame: 1.0,
  projectedPoints: 38,
  projectedFinish: "Lower mid-table on current pace",
  headline:
    "Opta's Thursday preview puts the pace in its longest frame: winless in six league games back into last season, and one more without a win would be only the second such run in Liverpool's Premier League history. A point a game still projects to 38, the survival line, and two games is too small a sample to call that anything but a warning. What gives it weight is that the manager has now said in public that his side has been losing ninety per cent of the minutes, and that the squad he has to fix it with lost Chiesa to the break on Thursday and cannot add a body until January. Friday opens three league games against sides currently between twelfth and sixteenth, as gentle as the calendar gets before Manchester City in October.",
  thresholds: [
    { label: "Champions League (top 5)", points: 68, gap: 30, note: "Historical par for fifth place in recent seasons. Requires roughly 1.83 points per game from here." },
    { label: "Europa League", points: 60, gap: 22, note: "Roughly sixth place par. Requires about 1.61 points per game from here." },
    { label: "Conference League", points: 55, gap: 17, note: "Seventh place par, often decided by cup outcomes as much as league finish." },
    { label: "Safety", points: 38, gap: 0, note: "The conventional survival line, and precisely where the current pace projects. This is the number that should not be within touching distance of a projection in September." },
  ],
  thresholdNote:
    "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  runIn: [
    { date: "2026-09-04", opponent: "Ipswich Town", home: false, competition: "PL", oppPosition: 12, difficulty: "medium" },
    { date: "2026-09-12", opponent: "Fulham", home: true, competition: "PL", oppPosition: 16, difficulty: "easy" },
    { date: "2026-09-20", opponent: "Bournemouth", home: false, competition: "PL", oppPosition: 14, difficulty: "medium" },
    { date: "2026-10-11", opponent: "Manchester City", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 5, difficulty: "hard" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 9, difficulty: "medium" },
  ],
  runInVerdict:
    "Ipswich away on Friday, Fulham at home on the 12th, Bournemouth away on the 20th: three league games against sides currently twelfth, sixteenth and fourteenth, played with Gomez back in training but not necessarily back in the side, and with Chiesa now out of all three. Nine points from them and the City visit on 11 October is a test; four and it is an inquest. Atletico Madrid arrive at Anfield next Wednesday for a Champions League opener Chiesa and Endo are not registered for, Tottenham come on Tuesday 15 September in the Carabao Cup, and Brighton's visit has moved to Sunday 25 October. Win the cup tie and it is nine games in twenty-nine days after the break, played by the squad on this page and no other.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "Empire of the Kop"],
};
