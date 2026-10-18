// ─── Liverpool FC Player Data (2026-27 Season · Updated 18 October 2026 (morning)) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Sun Oct 18, evening - Every evening preview starts him, and Eurosport counts Villarreal without a win in sixteen Champions League games against English clubs; no fitness question.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sun Oct 18, evening - On the bench again for Tuesday; the Carabao Cup tie with Chelsea on 28 October remains his likeliest start.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Sun Oct 18, evening - Eurosport's and Sports Mole's evening XIs both put him beside Jacquet against Villarreal, three days after his 200th game as captain.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Sun Oct 18, evening - Sports Mole's Sunday-evening XI starts him at right-back ahead of Araujo; Eurosport's keeps him on the bench, so Tuesday's call is open.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Sun Oct 18, evening - Eurosport's XI starts him at left-back; Sports Mole's evening preview prefers Tsimikas, so the rotation question is still live.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Sun Oct 18, evening - Knee; Sports Mole's December projection stands, and Goal's six absentees for Villarreal still include him.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 2, assists: 6, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "injured", outSince: "2026-10-17", injuryNote: "Sun Oct 18, evening - Hamstring, the new one of the two; Iraola said Liverpool would lose him and Szoboszlai 'for some time' (PA via Irish News), with no scan result published by Sunday evening.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 19, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-23", injuryNote: "Sun Oct 18, evening - ACL; no fresh update on Sunday, with Iraola's month-long delay putting his return to the group around the November break (Liverpool FC).", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 21, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sun Oct 18, evening - Named at centre-back in both Sunday-evening XIs (Eurosport; Sports Mole); no knock reported from the Gtech.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Sun Oct 18, evening - Levante loanee; no part in Tuesday's plans.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 32, name: "Kostas Tsimikas", number: 21, position: "DEF", nationality: "🇬🇷 Greece", age: 30, appearances: 6, goals: 0, assists: 3, cleanSheets: 1, xG: 0.2, tacklesPer90: 1.7, passCompletion: 79, progressiveCarries: 3.1, form: 5.8, status: "fit", injuryNote: "Sun Oct 18, evening - Sports Mole's Sunday-evening XI starts him at left-back against Villarreal; unused at Brentford, so the legs are fresh.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png",
    physical: { height: 178, weight: 76, pace: 79, acceleration: 80, sprintSpeed: 78 },
    career: [
      { years: "2017-2020", club: "Olympiacos", fee: null, type: "senior" },
      { years: "2020-", club: "Liverpool", fee: "€13M", type: "senior" },
      { years: "2025-26", club: "Roma", fee: null, type: "loan" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sun Oct 18, evening - Pencilled in beside Gravenberch in every evening preview (Eurosport; Sports Mole), the senior half of a pivot two players deep.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Sun Oct 18, evening - Back from the domestic ban, and Sports Mole's evening preview has him starting beside Mac Allister for Villarreal.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "injured", outSince: "2026-10-17", injuryNote: "Sun Oct 18, evening - Hamstring; Iraola: 'it's not a new injury and was probably not healed enough, so we will need more time with him' (PA via Irish News). No scan result by Sunday evening.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Sun Oct 18, evening - Misses Villarreal as an unregistered player for Europe (SI, 4 Sep); back in the reckoning for Brighton on 25 October.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 7, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Sun Oct 18, evening - Eurosport counts thirty-seven open-play chances in the Champions League since the start of last season, the most of anyone; starts at ten in every preview.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 19, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Sun Oct 18, evening - Liverpool.com names him among three possible Szoboszlai replacements; first midfield change on Tuesday with Endo unregistered.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 27, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Sun Oct 18, evening - Sports Mole says he could start on the right against Villarreal after an unused afternoon at the Gtech; Eurosport prefers Munoz.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Sun Oct 18, evening - Said 'there's still lots to improve' and that the bench was 'screaming' for control late on (AFP via Flashscore); leads the line in every evening XI.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Sun Oct 18, evening - Achilles; Boxing Day at Hull is still the projection (Liverpool Echo; Sports Mole), and he is on Goal's absentee list for Tuesday.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Sun Oct 18, evening - Credited his mentality for his progress on the right wing (Goal via LiveScore, Sunday); a bench option after finishing the Gtech on that flank.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 31, name: "Lewis Koumas", number: 67, position: "FWD", nationality: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", age: 21, appearances: 7, goals: 2, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.3, passCompletion: 77, progressiveCarries: 1.8, form: 6.3, status: "fit", injuryNote: "Sun Oct 18, evening - Cover behind Isak again for Tuesday after eleven minutes at the Gtech.", image: "",
    physical: { height: 180, weight: 73, pace: 80, acceleration: 81, sprintSpeed: 79 },
    career: [
      { years: "2013-", club: "Liverpool", fee: null, type: "youth" },
      { years: "2024-25", club: "Stoke City", fee: null, type: "loan" },
      { years: "2025", club: "Birmingham City", fee: null, type: "loan" },
      { years: "2025-26", club: "Hull City", fee: null, type: "loan" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Sun Oct 18, evening - Inter, Lazio and Atalanta are monitoring him for January (Sports Mole, 5 Oct); unregistered for Europe, so not involved on Tuesday.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Sun Oct 18, evening - Behind Alisson and Mamardashvili for Tuesday.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Sun Oct 18, evening - Eurosport's evening XI starts him on the right of the three; if Araujo or Gomez struggle, he is also the improvised right-back.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 1, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Sun Oct 18, evening - Eurosport and SI's Spanish edition start him at right-back; Sports Mole picks Gomez, so his place is the closest call on the sheet.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 7, goals: 3, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Sun Oct 18, evening - On the left in every Sunday-evening XI; Eurosport recalls his hat-trick in Linz as the Champions League form line.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
    physical: { height: 182, weight: 72, pace: 91, acceleration: 92, sprintSpeed: 90 },
    career: [
      { years: "2010-2020", club: "Lyon Academy", fee: null, type: "youth" },
      { years: "2021-2023", club: "Lyon", fee: null, type: "senior" },
      { years: "2023-2026", club: "Paris Saint-Germain", fee: "€50M", type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£106m (+£17m)", type: "senior" },
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
  "Villarreal":     "https://a.espncdn.com/i/teamlogos/soccer/500/102.png",
  "LASK Linz":      "https://a.espncdn.com/i/teamlogos/soccer/500/4411.png",
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
  src: "/assets/cover/2026-10-01-anfield-after-dark.svg",
  alt: "Editorial plate: an empty pitch under floodlights seen from the gantry, the white lines drawn in perspective through a low mist, the stand beyond in shadow.",
  focus: "Anfield, after dark",
  credit: "Editorial plate",
  generatedAt: "2026-10-18T22:30:00Z",
  // Evening pass (Sun 18 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH since the morning edition. Lead moves onto the
  // Villarreal XI taking shape around Szoboszlai and Frimpong (Eurosport; Sports Mole), Iraola's 'very delicate situation' (PA),
  // and Brighton 5-0 Palace / Forest 0-1 Arsenal moving the next two league visitors above Liverpool. Plate carried, Track 2
  // request still OPEN; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Sun 18 October, ~4am ET, cloud-scheduled): NO MATCH since the evening edition. Lead moves onto the scans awaited
  // for Szoboszlai and Frimpong and Bradley's knee possibly running to December (Sports Mole; Fantasy Football Scout), with Wirtz's
  // nine open-play chances (Opta Analyst) behind it. Plate carried, Track 2 request still OPEN; only generatedAt refreshed. NO new
  // image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Sat 17 October, ~6pm ET, cloud-scheduled): MATCH PLAYED. Brentford 1-2 Liverpool, Munoz and Isak after
  // Lewis-Potter, Yarmoliuk and Janelt sent off (Sky Sports); Szoboszlai and Frimpong injured, out 'for some time' (This Is Anfield).
  // Plate carried, Track 2 request still OPEN; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud).
  // All generatedAt 22:30Z.
  // Morning pass (Sat 17 October, ~4am ET, cloud-scheduled): MATCHDAY, Brentford away at 3pm BST, unplayed. Lead moves onto the
  // morning's selection picture: Szoboszlai, Isak and Gakpo to late checks, none likely to start (The Football Faithful; Playmakerstats),
  // all four Liverpool Echo XIs starting Ngumoha on the right (Brit Brief) after Iraola's 'not the finished product' (Goal). Plate
  // carried, Track 2 request still OPEN; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Fri 16 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH since the morning edition. Lead moves onto
  // Bradley 'not so far from training with the group' (Anfield Index; SI), with Friday's session passing without a reported verdict
  // on Szoboszlai, Isak and Gakpo ('we have to wait and see', SI) and Andrews' Schade/Schuster 'on the grass' (Liverpool FC). Plate
  // carried, Track 2 request still OPEN; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Fri 16 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH since the evening edition. Lead moves onto
  // Van Dijk's fitness, 'I think I'll be fine for Saturday' despite City's kick to the calf (BBC Sport), and Barcola's Champions
  // League Player of the Week award (Liverpool FC; Goal). Plate carried, Track 2 request still OPEN; only generatedAt refreshed.
  // NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Thu 15 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH since the morning edition. Lead moves onto
  // Iraola's pre-Brentford press conference: Szoboszlai, Isak and Gakpo not ruled out, 'I leave the chance open this time', Friday's
  // training decides; Leoni's return to group training put back to the November break (Liverpool FC). Plate carried, Track 2
  // request still OPEN; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Thu 15 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH since the evening edition. Lead moves onto the
  // Gtech selection question, RotoWire's XI with Nyoni beside Mac Allister, and Iraola's noon press conference (Liverpool FC), with
  // Opta Analyst's overnight records from Linz. Plate carried, Track 2 request still OPEN; only generatedAt refreshed. NO new image
  // queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Wed 14 October, ~6pm ET, cloud-scheduled): MATCH PLAYED. LASK 3-6 Liverpool, Barcola hat-trick (Sky Sports;
  // ESPN). Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not
  // runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Wed 14 October, ~4am ET, cloud-scheduled, MATCHDAY): NO LIVERPOOL MATCH since the evening edition. Lead moves
  // onto the matchday previews' reshuffled front three, Ngumoha left and Barcola right (Sports Mole; The 4th Official), with
  // Kühbauer's possible back five (oe24) and Heute's €538m v €38m. Plate carried, Track 2 request still OPEN; only generatedAt
  // and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Tue 13 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH since the morning edition. Lead moves onto
  // Iraola's Linz press conference: Szoboszlai, Isak and Gakpo left at home, 'difficult to tell you right now any of the three
  // have trained with the group', 'difficult to put exactly the same starting XI tomorrow' (Liverpool FC). Also: Van Dijk in the
  // 23, one game from 200 as captain (Liverpool FC; Anfield Index); Kerkez on Barcola; Kühbauer's 'Sensation' (Sky Sport
  // Austria); Opta 70.7%. Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image
  // queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Tue 13 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH since the evening edition. Lead moves onto
  // Van Dijk's calf: 'a little knock in the end on my calf which is pretty painful', going home for treatment 'to be ready for
  // Wednesday' (DaveOCKOP, quoting The Independent; Rush The Kop). Also: Sports Mole's Tuesday XI (Ngumoha in, Barcola right);
  // Nyoni in line for a first UCL start (Liverpool Echo); Iraola's Linz presser at 3.30pm BST (Liverpool FC); Carragher on the
  // Nyoni delay (Sky Sports). Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image
  // queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Mon 12 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH since the morning edition. Lead moves onto the
  // headcount for Linz: fifteen senior outfield players available, by the Liverpool Echo's count, with Szoboszlai, Isak and Gakpo
  // expected to miss out. Also: UEFA.com's preview lists Usor and Bello OUT for LASK; Coventry 4-1 Newcastle keeps Liverpool ninth;
  // ten arrests and an officer injured after City (The Independent). Plate carried, Track 2 request still OPEN; only generatedAt
  // and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Mon 12 October, ~4am ET, cloud-scheduled): NO MATCH since the evening edition. Lead moves onto the Monday
  // verdicts on Wirtz: Carragher 'He shouldn't be in the Liverpool team right now' (TEAMtalk), Neville 'looked like a little boy'
  // (Gary Neville Podcast via FotMob). Also: Hackett on the red card (Football Insider); Bello OUT for LASK (Laola1); Kühbauer
  // 'meilenweit vor Rapid' (abseits.at). Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed.
  // NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Sun 11 October, ~6pm ET, cloud-scheduled): MATCH PLAYED. Liverpool 0-3 Manchester City at Anfield, the first
  // league defeat of Iraola's season: Gravenberch sent off on 62 (second booking), Haaland 65, Doku 68, Cherki 78 (ESPN; Opta
  // Analyst). Liverpool ninth on nine (ESPN). Szoboszlai out with a tight hamstring; Gravenberch banned for Brentford. NEXT_MATCH
  // rolled to LASK Linz away (UCL, Wed 14 Oct) and the dossier rebuilt. Plate carried, Track 2 request still OPEN; only
  // generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Sun 11 October, ~4am ET, cloud-scheduled): MATCHDAY, City at Anfield 4.30pm BST, unplayed. Lead moves onto the
  // morning's verdicts: Sutton 'going for City', 'there will be this siege mentality now' (Empire of the Kop / BBC Sport); Sky's Lewis
  // Jones 1-2; Kavanagh referees, Howard VAR (The Football Faithful via Yahoo). Also: four straight Anfield league draws, LFC press
  // 48.9% v City 83% under pressure (Liverpool FC stats preview). Plate carried, Track 2 request still OPEN; only generatedAt and
  // leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Sat 10 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH; City at Anfield tomorrow. Lead moves onto
  // Barcola's Saturday interview, 'It's true that I prefer to play on the left' (Rousing The Kop; CaughtOffside), the night before
  // the previews play him at nine. Also: Arsenal 2-1 Leeds, level with City on fifteen (Sky Sports); Liverpool slip to seventh
  // (ESPN); Opta's subplots (three City wins in 29 at Anfield, Iraola unbeaten in 26). Plate carried, Track 2 request still OPEN;
  // only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Sat 10 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH; City at Anfield tomorrow. Lead moves onto Van Dijk's
  // Sky Sports interview: 'Before you know it, it's gone', 'an incredible journey', in the final year of his contract (TEAMtalk via
  // LiveScore; This Is Anfield). Also: every preview checked (Sports Mole, This Is Anfield, Opta Analyst) starts Barcola at nine;
  // Iraola calls him 'super-valuable' (Liverpool FC); Opta's 1953/1937 history; Arsenal v Leeds today. Plate carried, Track 2
  // request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Fri 9 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH. Lead moves onto Iraola's 1.30pm press conference:
  // Isak (thigh) and Gakpo (ankle) RULED OUT of City, neither long-term; Koumas 'has our trust', the only natural nine; Jacquet
  // 'fit and ready to go' (Roundtable Sports, Anfield Index via Yahoo Sports). Also: Maresca on Haaland (golf in Marbella, ready),
  // titles 'absolutely not' tainted, 'we are going to win this appeal' (Evening Standard, Rush The Kop). Plate carried, Track 2
  // request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Fri 9 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH, nothing confirmed overnight on Isak or Gakpo.
  // Lead moves onto Opta Analyst's preview: City 40.7 / Liverpool 34.6 / draw 24.7, the first league meeting since March 2015
  // without Klopp or Guardiola, Maresca chasing six from six. Also: Isak and Gakpo in kit in the Inside Training video (Rousing
  // The Kop); Maresca 'we trust completely the club'; Araujo 'very, very comfortable'; Dyche on voiding titles. Plate carried,
  // Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud).
  // All generatedAt 08:30Z.
  // Evening pass (Thu 8 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH. Lead moves onto the first full session after the
  // break: Isak and Gakpo missed it and are major doubts for City (Paul Gorst, Liverpool Echo, via CaughtOffside); Jacquet and
  // Chiesa trained (CaughtOffside; Liverpool Echo via RotoWire). Also: Haaland and Semenyo back in City training (DaveOCKOP);
  // Maresca on the noise (101 Great Goals). Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image
  // queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Thu 8 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH, nothing new overnight on Isak, Gakpo or
  // Jacquet. Lead moves onto the club's stats preview: an unbeaten Sunday makes Iraola the third permanent Liverpool manager,
  // after Paisley and Fagan, unbeaten in his first six top-flight games (Liverpool FC). Plate carried, Track 2 request still
  // OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Wed 7 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH. Lead moves onto Iraola's first club word of
  // City week: Isak and Gakpo injured, 'a matter of if they are going to recover in time' (Liverpool FC, beIN Sports); Jacquet
  // unmentioned. Also: Sky Sports on rivals expecting City out of the league if the appeal fails; Danns stood down (Rush The
  // Kop); TUDN's Mora bid report (Empire of the Kop). Plate carried, Track 2 request still OPEN; only generatedAt and
  // leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Wed 7 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH, window over. Lead moves onto Mac Allister,
  // the last Liverpool international home, who started Messi's farewell (Argentina 3-0 Benin; off on 79, VAVEL / NBC
  // Sports). Also: City appeal verdict due by 23 January 2027 (SI); UEFA watching 2012-13 payment evidence (Sports Mole);
  // Solbakken: Haaland "thoroughly spent" (Hayters); Squawka Signal City 40%. Plate carried, Track 2 request still OPEN;
  // only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Tue 6 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH, last night of the international window.
  // Lead moves onto the Jacquet doubt easing in print: Zidane 'slightly injured', positive indications per the Liverpool
  // Echo (via Yahoo Sports), expected fit per Rush The Kop, no club word. Also: Araujo unused in Uruguay 6-1 India in
  // Kolkata after a lightning stoppage (Outlook India, Olympics.com); Mac Allister with Argentina for Messi's farewell;
  // Mamardashvili's 84th-minute penalty save in NI 0-0 Georgia (Sky Sports); Romano: no Alisson talks. Plate carried,
  // Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in
  // cloud). All generatedAt 22:30Z.
  // Morning pass (Tue 6 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH, last day of the international break.
  // Lead moves onto the opponent's striker: Haaland was tired, not injured, when he came off in Portugal (The Times via City
  // Xtra; Solbakken via Sports Mole). Also: the FFF sent Jacquet back to Liverpool with a left hamstring strain for
  // assessment (Get French Football News, Brit Brief); Sky Sports reports rival clubs expect City out of the league if the
  // appeal fails; Maresca to address his squad on Thursday (The Times via Read Man City); Merseyside Police policing plan.
  // Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not
  // runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Mon 5 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH, international break. Lead moves onto a
  // Liverpool injury: Jacquet rested by France before the 4-1 win over Belgium with a left hamstring strain (Foot Mercato,
  // RMC Sport via CaughtOffside), a doubt for City. Also: Barcola off after 72 minutes, before all four goals (TEAMtalk);
  // Szoboszlai in Hungary's 2-1 win over Ukraine (VAVEL); Cherki scores for France; still no City word on Haaland (Heavy).
  // Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not
  // runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Mon 5 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH, international break, quiet club cycle.
  // Lead moves onto the next opponent: Haaland substituted limping on 67 minutes of Portugal 2-1 Norway on Sunday night
  // (Goal, portugoal.net), put down to fatigue by Solbakken (Read Man City), no City update. Also: Van Dijk extension
  // reported open (Football Insider); Klopp calls Wirtz outstanding (Goal); Araujo in Kolkata with Uruguay; Juventus on
  // Leoni. Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP
  // 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Sun 4 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH, international break, quiet club cycle.
  // Lead moves onto Sunday night's internationals: Van Dijk's 100th Netherlands cap, captaining a 2-1 win over Serbia in
  // Eindhoven at right centre-back (Liverpool FC, Goal), Gravenberch 60 minutes, Frimpong unused; Wirtz captains Klopp's
  // Germany to 0-0 in Greece, Tsimikas 90 (Goal, Bulinews, Greek City Times); Kerkez released early by Hungary (Sports
  // Mole); Koumas 56 minutes in Wales 0-1 Denmark; O'Reilly back at City for assessment (Yardbarker). Plate carried, Track 2
  // request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in cloud).
  // All generatedAt 22:30Z.
  // Morning pass (Sun 4 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH, international break, quiet cycle.
  // Lead moves onto the overnight international: Mac Allister started Argentina 7-0 Burkina Faso and was replaced on 69
  // (All Football, ESPN). Also: Gravenberch expected for the Netherlands v Serbia tonight with Gakpo sidelined (Sports
  // Mole); Wirtz and Tsimikas on opposite sides in Greece v Germany (The Hard Tackle); Collymore wants City expelled
  // (Anfield Index); Neville's "brutal day" (The Overlap); U18s 3-0 Fowler Academy, Jikiemi debut goal (Liverpool FC).
  // Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5
  // not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Sat 3 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MEN'S MATCH, international break, quiet cycle
  // for the first team. Lead moves off City's appeal onto Saturday's football: Liverpool Women beaten 1-0 at Manchester
  // United (Zigiotti Olme 6', Liverpool FC, ESPN); England 7-0 Croatia in Rijeka with City's Anderson (assist) and Guehi
  // starting and Ngumoha on the bench (Sky Sports, England Football). Also: City players reported exploring legal action
  // over bonuses (Football Insider via The Hard Tackle); Owen on not replacing Jones (TEAMtalk); Mitoma link. Plate carried,
  // Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image queued (STEP 7.5 not runnable in
  // cloud). All generatedAt 22:30Z.
  // Morning pass (Sat 3 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH, international break. Lead moves onto
  // Manchester City, the next opponent: found guilty by the independent commission of serious financial breaches
  // (2009-10 to 2017-18) earlier this week, appeal lodged before Friday's deadline calling the ruling 'unsafe' (AP, CBS
  // Sports); sanctions wait on the appeal, target end of January (Guardian via City Xtra). Previous editions had not
  // carried the verdict at all. Also: Klopp and Guardiola reactions; Zidane on Jacquet; Chiesa's Serie A suitors; Henry on
  // Barcola; Ngumoha's CIES valuation. Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed.
  // NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Fri 2 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH, international break. Lead moves off the
  // morning's previews onto the night's results: Kerkez headed his first Hungary goal past club-mate Mamardashvili in a 1-0
  // win over Georgia, then a booking that suspends him for Ukraine on Monday (Liverpool FC, Origo); Jacquet played ninety in
  // France 1-1 Italy, Barcola off the bench (Football Italia, Liverpool FC). Also: Leoni back later this month (The Athletic
  // via CaughtOffside). Plate carried, Track 2 request still OPEN; only generatedAt and leadStory refreshed. NO new image
  // queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Fri 2 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH, international break, quiet cycle. Lead
  // moves off Wirtz's goal onto tonight's internationals: Szoboszlai and Kerkez v Mamardashvili in Budapest (Sports Mole);
  // Jacquet and Barcola in the predicted France XI v Italy, Mbappe out, City's Donnarumma in Italy's goal (Al Jazeera).
  // Also: Klopp's 'everyone in Liverpool is very happy today' (Bulinews); Reuters settles Greece's second scorer (Masouras);
  // Schade and Summerville transfer notes. Plate carried, Track 2 request still OPEN; only generatedAt and leadStory
  // refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Thu 1 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH, international break. Lead moves off the
  // morning's Van Dijk-on-the-right preview onto the night's results: Wirtz hit the post for Bischof's opener and scored
  // the second in Germany 2-0 Serbia, Klopp's first win (Bulinews, beIN); Van Dijk played the LEFT after all and headed in
  // on his 99th cap in Greece 2-2 Netherlands (AP, Goal), Gravenberch on at half-time, Tsimikas in Greece's defence;
  // Koumas started Wales 2-1 Norway (7/10, Y Clwb Pel-droed), Haaland quiet. Also: Ekitike's December target (L'Equipe via
  // CaughtOffside). Plate carried (evergreen; Track 2 request still OPEN), only generatedAt re-stamped and leadStory
  // refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Cover fix (Thu 1 October, midday, at Kenny's request): the hand-drawn figure plates (stick-figure keeper and striker)
  // are retired. New Track 1 plate 2026-10-01-anfield-after-dark.svg: an empty floodlit pitch in perspective, no people.
  // The caption is now a short title, not a note about which story the plate is not about. A real Track 2 request is
  // open for Antigravity (brief below, cover-brief.json action: generate).
  // Morning pass (Thu 1 October, ~4am ET, cloud-scheduled): NO MATCH, international break, quiet cycle. Lead moves off the
  // Dutch verdict on Gravenberch onto tonight's internationals: Xavi may play Van Dijk on the right in Thessaloniki after
  // Van Hecke's foot injury (Goal), Tsimikas expected opposite; Wirtz expected to start in Munich, Koumas may face Haaland in
  // Cardiff (Sports Mole). Also: the club's Opta review (first for high pressures, 1.22 xGA a game); Hysen on Isak; Wyness on
  // Maresca's clauses; Csillag stretchered off for LFC Women. NO new image queued (STEP 7.5 not runnable in cloud). 08:30Z.
  // Evening pass (Wed 30 September, ~6pm ET, cloud-scheduled): NO MATCH, international break, quiet cycle. Lead moves
  // off Ngumoha's record onto the Dutch verdict on Gravenberch (Gullit, Voetbalzone 5/10, via TEAMtalk). Also new: BBC
  // interest in Alex Scott (Empire of the Kop); City's O'Reilly out of England's Prague trip (Goal / Yahoo Sports), added
  // to the dossier; LFC Women 4-3 at Birmingham; Figueroa's Honduras winner. NO new image queued (STEP 7.5 not runnable
  // in cloud). All 8 generatedAt 22:30Z.
  // Morning pass (Wed 30 September, ~4am ET, cloud-scheduled): NO MATCH, international break, quiet cycle. Lead moves off
  // Van Dijk's January timetable onto Tuesday night's internationals: Ngumoha on for Saka in England's 2-0 win in Prague,
  // third-youngest competitive England player (Sports Mole); Munoz off the bench in Spain 4-1 Croatia; Nyoni assist for the
  // U20s. Also: Chiesa's Sept target falls due, Inter weighing January; Rummenigge surprised by Wirtz; Semenyo's swollen leg
  // added to the City dossier. NO new image queued (STEP 7.5 not runnable in cloud). All 8 generatedAt 08:30Z.
  // Late evening pass (Tue 29 September, ~7.45pm ET, first cloud-scheduled run): NO MATCH, international break, quiet
  // cycle. Lead held on Van Dijk's contract (still the day's biggest story) but re-framed onto its new January timetable:
  // Galatasaray ready to approach (AnfieldWatch via LiveScore), Madrid Universal via Yahoo, Bastoni tracked as successor.
  // Also: Wirtz 4/10 (Sport1) in Klopp's first defeat; Tsimikas 90 mins in Greece's win; Chiesa's Sept target ends, Inter
  // watching; Chelsea cup tickets on sale. NO new image queued (STEP 7.5 not runnable in cloud). All 8 generatedAt 23:45Z.
  // Evening pass (Tue 29 September, ~6pm ET): NO MATCH, international break. The lead rotates off the morning's Gakpo scan
  // onto Tuesday's contract story: Mundo Deportivo (via Goal) and Sports Mole report Real Madrid weighing a free transfer for
  // Van Dijk, deal to summer 2027, no renewal offered. Also: Rummenigge on Wirtz ('I don't know'); Gakpo still ungraded,
  // CaughtOffside's three-week reading (City, LASK out; Brentford earliest); Isak's injury reported as a stamp and bloodied
  // toe (Yahoo Sports); Jacquet's line-breaking numbers (Empire of the Kop). NO new image queued. All 8 generatedAt 22:30Z.
  // Morning pass (Tue 29 September, ~4am ET): NO MATCH, international break. The lead moves from Monday's confirmation to
  // Tuesday's scan: Gakpo's ankle has gone for imaging with no club grade, the range spanning a fortnight for a mild sprain
  // (Sports Mole) to a possible high ankle sprain and surgery, eight to ten weeks (Physio Scout via CaughtOffside), with
  // Rik Elfrink's several weeks from the Eindhoven examination in between; City on 11 October beyond him either way. Also:
  // the attack-without-Gakpo previews sharpen (GiveMeSport expects Ngumoha unleashed on the right; AnfieldWatch has Koumas
  // ready for a first league start). No Tuesday internationals for LFC players. NO new image queued (a scan is not a still).
  // Plate carried, all 8 generatedAt 08:30Z.
  // Evening pass (Mon 28 September, ~6pm ET): NO MATCH, international break. The lead moves from scan day to its answer:
  // Liverpool confirmed Gakpo has withdrawn from the Netherlands squad (ankle, Serbia 27 Sep) and returns to the AXA for
  // assessment; Dutch journalist Rik Elfrink reports several weeks out (Inside Futbol, Yahoo Sports), likely including City
  // on 11 October. Also: Jacquet's first France cap and a clean sheet in Brussels; Monday's other internationals came through.
  // NO new image queued (a withdrawal is not a still). Plate carried, all 8 generatedAt 22:30Z.
  // Evening pass (Sun 27 September, ~6pm ET): NO MATCH, international break. The lead is injury news for the City week:
  // Isak sent home from Sweden (club: minor injury; Potter: minor thigh problem) and Gakpo forced off after 17 minutes of
  // Serbia 1-2 Netherlands with a left-ankle injury, scan Monday (Goal, Liverpool.com). Also: Liverpool Women 2-0 Everton at
  // Anfield with Iraola watching; Frimpong cut from the Dutch 23; Denmark 2-0 Wales in Copenhagen (CORRECTION: not a Wales
  // home game); Julian Ward's confirmation as sporting director (Sat) added, previously missed. NO new image queued.
  // Morning pass (Sun 27 September, ~4am ET): NO MATCH, international break. The lead rotates off Saturday evening's Wembley
  // frame onto September's Premier League award shortlists: Iraola up for Manager of the Month (his first as head coach), Isak
  // and Jacquet among the eight for Player of the Month, Alisson for Save of the Month (Liverpool FC, Yahoo Sports), off an
  // unbeaten September with three straight clean sheets, first since Sept 2024 (AllFootball). Sunday slate: four Reds with the
  // Netherlands at Serbia, Koumas v Denmark, Iraola at the women's Anfield derby; Monday sends most of the squad out and closes
  // Isak's vote. NO new image queued (an award shortlist is not a Liverpool still). Plate carried, all 8 generatedAt 08:30Z.
  // Evening pass (Sat 26 September, ~6pm ET): NO MATCH, international break. The lead rotates off the morning's City-verdict
  // frame onto Wembley: Ngumoha and Munoz, billed as opponents, were both cut from the England and Spain matchday squads under
  // UEFA's 23-man cap (Sports Mole, Liverpool.com); Spain won 3-2 with City's Guehi and O'Reilly at fault (Sky Sports).
  // CORRECTION: the morning called it an Under-20 fixture; it was the senior Nations League game. Also fresh: Khaldoon's
  // 'nothing has changed'; Szoboszlai and Kerkez booked in the Hungary brawl (Hackett expects federation charges); Iraola at
  // the Women's derby Sunday; Llorente link (TEAMtalk). NO new image queued (an absence is not a still). Plate carried, 22:30Z.
  // Morning pass (Sat 26 September, ~4am ET): NO MATCH, international break. The lead rotates off Friday's Isak-in-Sweden
  // frame onto the story that broke overnight: multiple outlets (CNN, Yahoo Sports, CBS) report an independent commission has
  // found Manchester City guilty of 114 of 115 Premier League financial charges (2009-2018), no sanction set, appeal to come,
  // table untouched. City are Liverpool's next opponents (Anfield, 11 October) and title pace-setters; ex-captain Andy Robertson
  // (now Tottenham) defended City's players from the Scotland camp. Also fresh: Alisson contract talks parked until later in 2026
  // (TeamTalk); Leoni into group work, Chiesa near the grass; Ngumoha and Munoz in England v Spain (later found to be the senior Wembley game, both left out). NO new image queued
  // (a courtroom verdict is not a Liverpool still). Szoboszlai plate carried, all 8 generatedAt 08:30Z.
  // Evening pass (Fri 25 September, ~6pm ET): NO MATCH, international break. The lead rotates off the morning's
  // Amsterdam fallout onto Friday night's internationals: Isak's 20th-minute opener in Sweden 2-1 Romania, in the week he and
  // Jacquet were shortlisted for September's Player of the Month (with City's Semenyo). CORRECTION: Alisson was left out by
  // Brazil and is at Kirkby; Mamardashvili is the goalkeeper away (Georgia, beaten by a 99th-minute NI winner). New: Konde to
  // Man Utd, Mabaya groin (Zimbabwe withdrawal), Nyoni on the six. NO new image queued (an away international goal is not a
  // Liverpool still). Szoboszlai plate carried, all 8 generatedAt 22:30Z.
  // Morning pass (Fri 25 September, ~4am ET): NO MATCH, international break. The lead rotates off Thursday's internationals
  // preview onto the fallout: Gakpo's stoppage-time volley (90+2) rescued Netherlands 1-1 Germany and denied Klopp a
  // winning debut, Van Dijk called Germany's goal-while-Brobbey-down a 'disgrace', Klopp answered 'no guilty conscience',
  // Kimmich backed Klopp. New: Iraola nominated Sept Manager of the Month (with Maresca, Hurzeler); Klopp held Wirtz out
  // of Germany's opening games (Serbia 1 Oct, Greece 4 Oct); Iraola working a skeleton group at the AXA. NO new image
  // queued (an away international goal is not a Liverpool still). Szoboszlai plate carried, all 8 generatedAt 08:30Z.
  // ---- prior ----
  // Morning pass (Thu 24 September, ~4am ET): NO MATCH, international break. The lead rotates off the evening's Ward
  // frame onto tonight's internationals opening: Van Dijk's Netherlands v Klopp's Germany in Amsterdam (7.45pm), four
  // Reds in the Dutch squad (Van Dijk, Gravenberch, Gakpo, recalled Frimpong), Van Dijk committed to play on until
  // 'at least' 37 after Xavi's Merseyside visit. Ward reappointment firms with Paul Joyce (The Times) now alongside
  // Ornstein; Bayern won't move for Wirtz in January; Turkish Airlines main partner from June 2027; City still 5.8
  // above Opta's model; Leoni a year and a day on. NO new image queued (tonight's fixture unplayed, no still). Szoboszlai
  // plate carried. Table byte-identical from ESPN, Liverpool sixth. All eight generatedAt stamps 08:30Z.
  // Evening pass (Wed 23 September, 6pm ET): NO MATCH, international break. The lead rotates off the morning's Leoni
  // training-pitch frame onto the sporting-director story firming: James Pearce (The Athletic) calling Julian Ward's expected
  // appointment 'a lot of sense', with Sky's Lyall Thomas naming Brentford's Lee Dykes as a possible partner. Reported,
  // not announced. Behind it: Opta's expected-points model rating City 5.8 points above their chances, Leoni's first ACL
  // anniversary, the BBC's Koumas profile, Robertson on Stick to Football, the November TV moves. NO new image queued under
  // STEP 7.5: a boardroom appointment is not a still. Szoboszlai plate carried, generatedAt re-stamped, cover-brief.json
  // re-mirrored. All eight generatedAt stamps 22:30Z.
  // Evening pass (Tue 22 September, 6pm ET): NO MATCH, international break. The lead rotates to The Athletic's
  // report that Julian Ward is set to return as sporting director (reported, not announced), with Mac Allister's
  // fuller 'very sad'/'that's perfect' interview, Van Dijk's Netherlands commitment to Euro 2028, Foden's ban
  // running out at Anfield and the U21s' 7-6 shootout win at Rochdale behind it. NO new image queued under
  // STEP 7.5: an executive appointment and a set of interviews are not stills. The U21 Will Wright solo goal is
  // photographable but is a youth-team moment and not the edition's lead. Szoboszlai plate carried, generatedAt
  // re-stamped, cover-brief.json re-mirrored. All eight generatedAt stamps 22:30Z.
  // Morning pass (Tue 22 September, ~4am ET): NO MATCH, international break. The lead is the Florian Wirtz row:
  // Andoni Iraola defending him to Sky Sports ('much happier with his second half than his first') and calling
  // Klopp's split-squad decision 'very smart', with Wirtz answering the criticism on Instagram ('Into the
  // international break with a win'). Second surface is the right-back file gaining two fresh January-shaped names,
  // Benfica's Banjaqui (50m euros) and Feyenoord's Read. NO new image queued under STEP 7.5: a social-media reply
  // and a manager's defence are not single stills, and the skill caps queueing at one genuinely visual moment per
  // edition. The standing candidate for a future plate remains Jeremy Jacquet. Szoboszlai plate carried, generatedAt
  // re-stamped, cover-brief.json re-mirrored to this morning's lead. All eight generatedAt stamps 08:30Z.
  // Evening pass (Mon 21 September, 6pm ET): NO MATCH, international break. The lead is Alexis Mac Allister
  // telling ESPN there is "no firm decision" on a Liverpool contract the club has declined to open talks about,
  // with Jamie Carragher's call to drop Florian Wirtz for Manchester City the evening's second surface. Both are
  // interviews. NO new image queued under STEP 7.5: neither a contract stand-off nor a podcast verdict resolves
  // into a single still, and the skill caps queueing at one genuinely visual moment per edition. The standing
  // candidate for a future plate remains Jeremy Jacquet. Szoboszlai plate carried, generatedAt re-stamped only.
  // Previous evening pass (Sun 20 September, 6pm ET / 11pm BST): MATCH PLAYED. Bournemouth 0-1 Liverpool at the Vitality,
  // Isak turning in a blocked Gakpo cross on 57 for a third consecutive Premier League clean sheet, a rise from
  // tenth to sixth, and Iraola the first Liverpool manager unbeaten in his opening five league games since Joe
  // Fagan in 1983 (Opta). The Szoboszlai plate is carried one more edition and generatedAt re-stamped only.
  // NO new image queued under STEP 7.5: the goal was a six-yard tap-in from a deflected block, which is decisive
  // without being a single photographable still, and the skill caps queueing at one genuinely visual moment per
  // edition. If Antigravity wants a plate for the next edition, the candidate is Jacquet, twenty-one, taking the
  // highest rating on the field on the afternoon France called him up. STANDINGS rebuilt from ESPN (Liverpool
  // sixth on nine). OPPOSITION rebuilt from scratch for Manchester City at Anfield, 11 October. All eight
  // generatedAt stamps 22:30Z.
  // Morning pass (Sun 20 September, ~4am ET): MATCHDAY. Bournemouth away at 2pm at the Vitality, unplayed at the time of
  // writing, so the Szoboszlai plate is carried and generatedAt re-stamped only. The lead rotated off Saturday's table
  // movement onto the game itself: Iraola's first return to the club he managed for three years, the game in hand finally
  // paid, and the one live team-news question being Cody Gakpo's adductor doubt ('I cannot guarantee it', per This Is
  // Anfield). A matchday preview is not a single photographable still, so NO new image was queued under STEP 7.5;
  // Antigravity may generate a post-match hero image later if the game produces one. Table byte-identical from ESPN,
  // Liverpool tenth. All eight generatedAt stamps 08:30Z.
  // Evening pass (Sat 19 September, 6pm ET / 11pm BST): still no Liverpool match since Tuesday's cup tie, so the
  // Szoboszlai plate is carried and generatedAt re-stamped only. The lead rotated off the morning's homecoming-eve
  // preview onto Saturday's five Premier League results, which dropped Liverpool from eighth to tenth without them
  // playing: Brighton 3-0 Arsenal ended the champions' perfect start, Everton and Newcastle won, Coventry took a
  // first points and first goal at Forest, and Tottenham scored for the first time and lost 3-2 to Villa anyway.
  // The club also confirmed Chelsea at Anfield in the Carabao Cup fourth round on 28 October and the Champions
  // League trip to LASK on 14 October. A league table rearranging itself is not a single photographable still, so
  // NO new image was queued under STEP 7.5. All eight generatedAt stamps 22:30Z.
  // Morning pass (Sat 19 September, ~4am ET): no match since Tuesday's cup tie and the international break now open, so
  // the Szoboszlai volley plate is carried and generatedAt re-stamped only. The lead rotated off Friday evening's Ngumoha
  // call-up onto the eve of Sunday's fixture: Iraola's homecoming to Bournemouth, team news locked and the predicted league
  // XI settled, the last soft game before City, Brentford, Brighton and Arsenal. A matchday-eve build-up is not a single
  // photographable still, so NO new image was queued under STEP 7.5. Table byte-identical from ESPN, Liverpool eighth. All
  // eight generatedAt stamps 08:30Z.
  // Evening pass (Fri 18 September, 6pm ET / 11pm BST): no match since Tuesday's cup tie, so the Szoboszlai plate is
  // carried and generatedAt re-stamped only. The lead rotated off the morning's homecoming preview onto Rio Ngumoha's
  // call-up to Thomas Tuchel's England squad, announced Friday morning, plus Iraola's 1.30pm press conference. A squad
  // list read out in London is not a single photographable still, so NO new image was queued under STEP 7.5.
  // Morning pass (Fri 18 September, ~4am ET): no match since Tuesday's cup tie, so the Szoboszlai volley plate is
  // carried and generatedAt re-stamped only. The lead rotated off Thursday's Endo sale onto Sunday: Iraola's homecoming
  // to Bournemouth, previewed on the day of his 1.30pm press conference and the last fixture before the international
  // break, with the Endo/Ngumoha business the backdrop. A homecoming preview is not a single photographable still, so
  // NO new image was queued under STEP 7.5. Table byte-identical from ESPN, Liverpool eighth. All eight generatedAt stamps 08:30Z.
  // Evening pass (Thu 17 September, 6pm ET / 11pm BST): no match since Tuesday's cup tie, so the Szoboszlai
  // volley plate is carried and generatedAt re-stamped only. The lead rotated off the cup draw onto Thursday's
  // squad decision: Liverpool have put Wataru Endo up for sale for January, six competitive games into Iraola's
  // first season, with Ben Jacobs the source under CaughtOffside, Football365, TeamTalk, SportBible and
  // Sportskeeda; the counterweight is the push to tie Rio Ngumoha to a new long-term deal inside a month.
  // A transfer-list decision and a contract negotiation are not single photographable stills, so NO new image
  // was queued under STEP 7.5. All eight generatedAt stamps 22:30Z.
  // Evening/overnight pass (started Wed 16 September 6pm ET, published Thu 17 September): no match since
  // Tuesday's cup tie, so the Szoboszlai volley plate is carried and generatedAt re-stamped only. The lead
  // rotated onto the Carabao Cup fourth-round draw, made at Old Trafford on Wednesday night: Liverpool host
  // Chelsea in the week commencing 26 October, Xabi Alonso back at Anfield a third autumn running with a
  // third club. A cup draw is not a single photographable still, so NO new image was queued under STEP 7.5.
  // Morning pass (Wed 16 September, ~4am ET): no match since Tuesday's cup tie, so the Szoboszlai volley plate is carried
  // and generatedAt re-stamped only. The lead rotated off the raw 3-1 result onto Sunday: Iraola's homecoming to Bournemouth,
  // read through the scrutiny around him (unbeaten yet 'under serious pressure' per Yahoo/LiveScore, Hughes gone to Al-Hilal),
  // with tonight's Carabao Cup fourth-round draw the day's other fixed point. A homecoming preview and a cup draw are not
  // single photographable stills, so NO new image was queued under STEP 7.5; the Szoboszlai plate stands as the carried hero.
  // Table byte-identical from ESPN, Liverpool eighth. All eight generatedAt stamps 08:30Z.
  // Evening pass (Tue 15 September, 6pm ET / 11pm BST): a match was played, and it leads every surface.
  // Liverpool 3-1 Tottenham at Anfield, Carabao Cup third round, with TEN changes and Joe Gomez captaining
  // on a first appearance since a July muscle injury. Mac Allister into the top corner on 21; Gakpo the
  // second shortly after the interval; Gallagher headed Spurs back into it from a corner before the 70th;
  // Mamardashvili, in his first appearance of the season, made a significant late save; Szoboszlai, off the
  // bench, volleyed the third from around thirty yards in stoppage time. Andy Robertson came on for Udogie
  // on 57 and was given a standing ovation from all four stands on his first Anfield return. Fans also spotted
  // Iraola passing his own match notes down the bench to the academy players. First win since Ipswich and the
  // first time this season Liverpool have scored three. NO expected-goals figures had been published at the
  // time of writing, so the FORM_TRENDS card for this tie carries nulls with pending: true rather than an
  // estimate. NEXT_MATCH rolled to Bournemouth away, Sunday 20 September, 2pm at the Vitality, Sky Sports
  // Main Event, Andoni Iraola's first return to the club he managed until the summer; the OPPOSITION dossier
  // was rebuilt from scratch for Marco Rose's side, the first team in Premier League history to lead in each
  // of its opening four fixtures and win none of them. Fourth-round draw Wednesday night after Man Utd vs
  // Brighton, ties in the week beginning 26 October. STANDINGS byte-identical from ESPN, Liverpool eighth.
  // A thirty-yard volley IS a photographable moment under STEP 7.5, so a Track 1 plate was generated (the
  // strike, no text) and the Track 2 brief below is the open request for Antigravity. All eight generatedAt
  // stamps 22:45Z.
  // Morning pass (Tue 15 September, ~4am ET): MATCHDAY, but the match is tonight and has not been played, so there is no
  // new photographable moment yet. The Jacquet plate is carried again and generatedAt re-stamped; the `focus`/`brief`
  // below still describe the Fulham clearance, now the edition's background rather than its lead. The lead rotated off
  // Monday's press conference onto the tie itself: Tottenham at Anfield, 8pm, the Carabao Cup third round and Iraola's
  // first domestic cup tie, a heavily rotated XI (Koumas through the middle behind a returning Gakpo, Ngumoha and Munoz
  // wide, Nyoni and Mac Allister screening, Isak/Van Dijk/Szoboszlai/Wirtz rested), with Andy Robertson's first return to
  // Anfield in Tottenham colours the night's sub-plot. No new image queued under STEP 7.5 (a pre-match preview is not a
  // single still); Antigravity may generate a post-match hero image tonight if the tie produces one. Table unchanged from
  // ESPN, Liverpool eighth. All eight generatedAt stamps 08:30Z.
  // Evening pass (Mon 14 September, 6pm ET / 11pm BST): no match since Saturday, so the Jacquet plate is carried and
  // generatedAt re-stamped only. The `focus` line and `brief` below still describe the Fulham clearance, which is now the
  // third story on the page. The lead rotated to Iraola's Monday press conference at the AXA: Mamardashvili confirmed to
  // start (a first appearance of the season, the manager volunteering that he tried to sign him for Bournemouth), Gomez
  // upgraded from doubt to 'available for tomorrow', and the manager's own account of a schedule he called the worst
  // scenario. A press conference has no single still photograph in it, so NO new image was queued under STEP 7.5 and the
  // brief below is intentionally left at the last genuinely photographable moment; Antigravity should treat it as served.
  // Also this pass: Tottenham's team news reversed the weekend's reading (Tonali out with a knock, Porro and Kulusevski
  // out, Richarlison excluded from the squad entirely, Udogie back, Van de Ven in fact fit and a starter at Everton), and
  // the table moved without Liverpool playing, Leeds beating Newcastle 4-1 at Elland Road to go third and Liverpool
  // slipping from seventh to eighth on the same six points.
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Evening pass (Sat 12 September, 6pm ET / 11pm BST): a match was played. Liverpool 0-0 Fulham at Anfield,
  // the first blank under Iraola and a fourth straight Anfield league draw, the first such run since November
  // 2011 per Opta. Jacquet cleared Garcia's shot off the line on 12 after Alisson's short pass to a marked
  // Gravenberch (King's penalty appeal waved away); Munoz headed a corner against the bar on 22; Leno saved
  // from Isak and Mac Allister; Alisson tipped King's curler wide on 76; Muniz missed on 79. Opta: 1.13 xG from
  // 14 shots to 0.71 from 10. Three changes (Tsimikas, Gravenberch, Munoz) all withdrawn by the hour; Gakpo back
  // from the bench; Gomez not in the squad. Iraola: 'a lack of freshness, definitely, we cannot hide it'.
  // The result leads every surface. Next: Tottenham, Carabao Cup third round, Anfield, Tuesday 8pm, ITV and
  // Sky; NEXT_MATCH rolled forward and the OPPOSITION dossier rebuilt for De Zerbi's goalless side. A goal-line
  // clearance IS a photographable moment under STEP 7.5, so a Track 1 plate was generated (the clearance, no
  // text) and the Track 2 brief below is the open request for Antigravity (COVER-00001). The limn-editor-enhance
  // skill was not present on this mount, so the request is recorded here and in cover-brief.json only.
  // Morning pass (Sat 12 September): MATCHDAY. Fulham at Anfield today at 3pm; no match or ruling-out
  // since Wednesday's Atletico win, table byte-identical from ESPN. Lead rotated off Friday evening's
  // Ekitike-January anchor onto the fixture itself; Gakpo the lone doubt into matchday, Barcola and Kerkez
  // cleared, Gomez in line for a first bench. Mac Allister strike plate carried and re-stamped.
  // Morning pass (Sun 13 September, ~4am ET): no match since Saturday; table byte-identical from ESPN (the
  // Manchester derby is this afternoon, unplayed). Lead rotated off the Fulham result onto the Sunday-morning
  // reckoning on Iraola: 'officially under serious pressure' (AnfieldWatch/LiveScore/Yahoo) after one win in
  // four, with no sporting director (Hughes long gone to Al-Hilal, Gordon/FSG hunting a fifth since 2022), his
  // fuller 'what was lacking was quite clear' post-mortem, and Pablo Barrios (Atletico) the one new January/
  // summer midfield thread. NOT a sacking; contradiction sweep clean. A manager-pressure lead is not
  // photographable, so no new image queued; Jacquet clearance plate carried and generatedAt re-stamped.
  // Evening pass (Sun 13 September, 6pm ET / 11pm BST): no match since Saturday, so the Jacquet plate is carried
  // and generatedAt re-stamped only. NOTE: the `focus` line above and the `brief` below still describe the Fulham
  // clearance, which is now the SECOND story on the page, not the lead. The lead rotated to the captain's contract:
  // Liverpool will not open Van Dijk talks until 2027, no decision before April, the deal expiring that summer
  // (Football Insider, carried by Yahoo / CaughtOffside / Sports Mole). A contract that is deliberately not being
  // discussed has no single still photograph in it, so NO new image was queued under STEP 7.5 and the brief below
  // is intentionally left at the last genuinely photographable moment. Antigravity should treat it as already served.
  // The table moved without Liverpool playing: City won the derby with ten men, Brighton won 5-0 at Coventry,
  // Liverpool slip to seventh on the same six points.
  // Evening pass (Fri 11 September, 6pm ET / 11pm BST): no match since Wednesday. The lead moved to the one
  // new fact from Friday's briefing: Iraola put a January date, of sorts, on Ekitike's Achilles. Plate carried.
  // Evening pass (Wed 9 September): a match was played. Liverpool 2-1 Atletico Madrid at Anfield, the Champions
  // League opener: Llorente 17, Szoboszlai 40, Mac Allister 50. Opta: 1.68 xG from 14 shots to 0.81 from 9.
  // Track 1 plate 2026-09-09-mac-allister-strike.svg.
  // Evening pass (Sat 5 September): Richard Hughes stepped down as sporting director. Track 1 plate 2026-09-05-hughes-exit.svg.
  // Evening pass (Fri 4 September): Ipswich 0-2 Liverpool, Isak 6' and 9', Track 1 plate 2026-09-04-isak-brace.svg.
  brief: {
    leadStory:
      "Liverpool won 6-3 at LASK on Wednesday night, Bradley Barcola scoring his first three goals for the club (Sky Sports; ESPN).",
    subject: "Anfield at dusk, empty, floodlights on, mist over the pitch: an evergreen City-week cover to replace the hand-drawn plates.",
    prompt: "Wide cinematic photograph, 1600x900 landscape, of Anfield at dusk with nobody in it: the stands empty, the floodlights just switched on, a thin mist lying over a freshly mown, striped pitch, deep red seats falling away into shadow. Low camera on the touchline near the halfway line, looking across toward the Kop. Moody and editorial, fine film grain, muted palette of ink black, deep red (#C8102E) and warm ivory (#F4EBD0) highlights. Keep the LEFT third dark, quiet negative space (night sky or a shadowed stand) because the masthead type sits there. NO text, NO legible logos, crests or sponsor boards, NO players, people or faces.",
    aspectRatio: "landscape",
    slug: "anfield-dusk-city-week",
  },
};


// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Villarreal",
  shortName: "Villarreal",
  home: true,
  date: "2026-10-20T20:00:00",
  competition: "UCL",
  venue: "Anfield, Liverpool",
  broadcast: "Champions League league phase, matchday three (8pm BST, 3pm ET; Paramount+ in the US)",
};
// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
  { date: "2026-10-17", opponent: "Brentford",           home: false, score: "2-1", competition: "PL",  result: "W", scorers: "Munoz 62', Isak 70'" },
  { date: "2026-10-14", opponent: "LASK Linz",           home: false, score: "6-3", competition: "UCL", result: "W", scorers: "Araujo 22', Barcola 24', 37', 66', Frimpong 51', Koumas 72'" },
  { date: "2026-10-11", opponent: "Manchester City",     home: true,  score: "0-3", competition: "PL",  result: "L", scorers: "" },
  { date: "2026-09-20", opponent: "Bournemouth",         home: false, score: "1-0", competition: "PL",  result: "W", scorers: "Isak 57'" },
  { date: "2026-09-15", opponent: "Tottenham",           home: true,  score: "3-1", competition: "EFL", result: "W", scorers: "Mac Allister 21', Gakpo 54', Szoboszlai 90+1'" },
  { date: "2026-09-12", opponent: "Fulham",              home: true,  score: "0-0", competition: "PL",  result: "D", scorers: "" },
  { date: "2026-09-09", opponent: "Atlético Madrid",     home: true,  score: "2-1", competition: "UCL", result: "W", scorers: "Szoboszlai 40', Mac Allister 50'" },
  { date: "2026-09-04", opponent: "Ipswich Town",        home: false, score: "2-0", competition: "PL",  result: "W", scorers: "Isak 6', 9'" },
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
// Last refresh: 2026-10-18 (Sunday morning, ~4am ET). Byte-identical to Saturday evening; ten sides still have a seventh game to play.
// Prior refresh: 2026-10-17 (Saturday evening, ~6pm ET). Re-fetched from ESPN after Brentford 1-2 Liverpool, City 3-2 Ipswich, Everton 0-2 Chelsea,
// Newcastle 0-1 Villa, Fulham 1-0 Hull. LIVERPOOL FIFTH (highlighted) on twelve, on the Europa stripe; Chelsea fourth; Brentford sixth.
// Prior refresh: 2026-10-17 (Saturday morning, ~4am ET, matchday). Byte-identical; Brentford v Liverpool kicked off at 3pm.
// Prior refresh: 2026-10-16 (Friday morning, ~4am ET). Byte-identical; matchweek seven starts on Saturday.
// Prior refresh: 2026-10-15 (Thursday evening, ~6pm ET). Byte-identical again; no league games until Saturday.
// Prior refresh: 2026-10-15 (Thursday morning, ~4am ET). Byte-identical; no league games until Saturday.
// Prior refresh: 2026-10-14 (Wednesday evening, ~6pm ET). Byte-identical; Liverpool's 6-3 in Linz is a Champions League result and moves nothing here.
// Prior refresh: 2026-10-13 (Tuesday evening, ~6pm ET). Byte-identical again; no league games until Saturday.
// Prior refresh: 2026-10-13 (Tuesday morning, ~4am ET). Byte-identical to Monday evening; no league games until Saturday.
// Prior refresh: 2026-10-12 (Monday evening, ~6pm ET). Re-fetched from ESPN after Coventry 4-1 Newcastle closed matchweek six
// (Newcastle United; ESPN). Liverpool stay NINTH (highlighted) on nine; Newcastle eleventh on eight from six; Coventry up to
// fourteenth on six; Bournemouth drop into the relegation stripe with Tottenham and Fulham.
// Prior refresh: 2026-10-12 (Monday morning, ~4am ET). Byte-identical to Sunday evening; no games since. Coventry v Newcastle
// tonight at 8pm closes matchweek six (Football Web Pages).
// Prior refresh: 2026-10-11 (Sunday evening, ~6pm ET). Re-fetched from ESPN after Sunday's three games: Liverpool 0-3 Man City,
// Hull 2-2 Everton, Crystal Palace 3-1 Nott'm Forest. City first on eighteen from six, three clear of Arsenal; Brighton third;
// Brentford, Everton and Chelsea on ten; LIVERPOOL ninth (highlighted) on nine, goal difference zero. Relegation stripe unchanged.
// Prior refresh: 2026-10-11 (Sunday morning, ~4am ET). Byte-identical to Saturday evening, no games since.
// Prior refresh: 2026-10-10 (Saturday evening, ~6pm ET). Re-fetched from ESPN after six Saturday games: Arsenal 2-1 Leeds,
// Villa 2-2 Brentford, Chelsea 5-1 Bournemouth, Ipswich 2-1 Fulham, Sunderland 0-2 Brighton, Man United 1-1 Spurs. City first on
// fifteen from five; Arsenal level on fifteen from six; Brighton third on thirteen; Brentford fourth and Chelsea fifth on ten; Leeds sixth
// and LIVERPOOL seventh (highlighted) on nine, level on goal difference. Relegation stripe: Tottenham, Coventry, Fulham.
// Prior state, 2026-10-10 morning: unchanged since 20 September, Liverpool sixth.
// Refresh 2026-10-18 (Sunday evening, ~6pm ET). Re-fetched from ESPN after Sunday's games: Brighton 5-0 Crystal Palace
// (theScore), Nott'm Forest 0-1 Arsenal (NBC Sports), plus wins for Bournemouth and a Leeds draw per ESPN's rows. City first on
// twenty-one; Arsenal second on eighteen; Brighton third on sixteen; Chelsea fourth on thirteen; LIVERPOOL fifth (highlighted) on twelve.
// Relegation stripe: Forest, Sunderland, Tottenham. Coventry and Tottenham on six played.
export const STANDINGS = [
  { pos: 1, team: "Manchester City", p: 7, w: 7, d: 0, l: 0, gd: 12, pts: 21, qualification: "UCL" },
  { pos: 2, team: "Arsenal", p: 7, w: 6, d: 0, l: 1, gd: 6, pts: 18, qualification: "UCL" },
  { pos: 3, team: "Brighton", p: 7, w: 5, d: 1, l: 1, gd: 18, pts: 16, qualification: "UCL" },
  { pos: 4, team: "Chelsea", p: 7, w: 4, d: 1, l: 2, gd: 4, pts: 13, qualification: "UCL" },
  { pos: 5, team: "Liverpool", p: 7, w: 3, d: 3, l: 1, gd: 1, pts: 12, qualification: "UEL", highlight: true },
  { pos: 6, team: "Brentford", p: 7, w: 2, d: 4, l: 1, gd: 5, pts: 10 },
  { pos: 7, team: "Leeds", p: 7, w: 2, d: 4, l: 1, gd: 3, pts: 10 },
  { pos: 8, team: "Everton", p: 7, w: 2, d: 4, l: 1, gd: 1, pts: 10 },
  { pos: 9, team: "Hull", p: 7, w: 2, d: 3, l: 2, gd: 1, pts: 9 },
  { pos: 10, team: "Ipswich", p: 7, w: 3, d: 0, l: 4, gd: -4, pts: 9 },
  { pos: 11, team: "Newcastle", p: 7, w: 2, d: 2, l: 3, gd: -4, pts: 8 },
  { pos: 12, team: "Aston Villa", p: 7, w: 2, d: 2, l: 3, gd: -4, pts: 8 },
  { pos: 13, team: "Manchester United", p: 7, w: 1, d: 4, l: 2, gd: 0, pts: 7 },
  { pos: 14, team: "Crystal Palace", p: 7, w: 2, d: 1, l: 4, gd: -8, pts: 7 },
  { pos: 15, team: "Bournemouth", p: 7, w: 1, d: 3, l: 3, gd: -4, pts: 6 },
  { pos: 16, team: "Coventry", p: 6, w: 2, d: 0, l: 4, gd: -6, pts: 6 },
  { pos: 17, team: "Fulham", p: 7, w: 1, d: 2, l: 4, gd: -3, pts: 5 },
  { pos: 18, team: "Nott'm Forest", p: 7, w: 1, d: 2, l: 4, gd: -4, pts: 5, qualification: "REL" },
  { pos: 19, team: "Sunderland", p: 7, w: 1, d: 1, l: 5, gd: -8, pts: 4, qualification: "REL" },
  { pos: 20, team: "Tottenham", p: 6, w: 0, d: 3, l: 3, gd: -6, pts: 3, qualification: "REL" },
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
  matchweek: 7,
  generatedAt: "2026-10-18T22:30:00Z",
  overview: "Sunday rearranged the places directly above Liverpool without touching their own row. Brighton beat Crystal Palace 5-0 at the Amex (theScore) to go third on sixteen with the division's best goal difference, and Arsenal won 1-0 at the City Ground through Madueke's deflected shot on eighty (NBC Sports) to move back to second on eighteen, three behind Manchester City. Liverpool stay fifth on twelve, a point below Chelsea in fourth, which is still where the Champions League line falls on ESPN's table. The two sides who moved are Liverpool's next two league visitors, Brighton next Sunday and Arsenal on 1 November. Coventry and Tottenham still have a seventh game to play.",
  teams: {
    Liverpool: "Fifth on twelve, one point off fourth and four off Brighton in third; the next two league games at Anfield are against the sides now second and third.",
    "Manchester City": "Twenty-one from seven, still perfect and three clear after Arsenal's win at Forest.",
    Arsenal: "Second on eighteen after Madueke's eightieth-minute winner at Forest, a game with about 75 per cent of the ball and 1.07 expected goals (NBC Sports).",
    Brighton: "Third on sixteen after 5-0 against Palace (theScore), goal difference plus eighteen; at Anfield next Sunday.",
    Chelsea: "Fourth on thirteen and holding the last Champions League place; Carabao Cup visitors to Anfield on 28 October.",
    Brentford: "Sixth on ten, a day after losing at home to Liverpool with nine men.",
    Everton: "Eighth on ten after Leeds moved above them on goal difference; the derby is 29 November.",
    "Crystal Palace": "Fourteenth after the 5-0 at Brighton (theScore), goal difference now minus eight; Liverpool visit on 8 November.",
    "Manchester United": "Thirteenth on seven from seven; at Anfield on 22 November.",
    Bournemouth: "Fifteenth after a first league win of the season took them out of the bottom three (ESPN), which changes the arithmetic of any January bid for Alex Scott.",
    "Nott'm Forest": "Into the bottom three after Sunday's 1-0 defeat by Arsenal (NBC Sports).",
    Sunderland: "Nineteenth on four; at Anfield on 2 December.",
    Tottenham: "Bottom on three with a game in hand, still without a league win.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Eleven Drawn Around Two Gaps.",
    byline: "Eurosport / Sports Mole",
    dateline: "Anfield · 18 October",
    category: "Injuries",
    body: "By Sunday evening the previews had stopped asking whether Szoboszlai and Frimpong would play and started arguing about who fills the space. Eurosport's Spanish desk keeps it simple: Araujo at right-back, Gravenberch beside Mac Allister, Muñoz on the right. Sports Mole, publishing later, moves three pieces: Gomez for Araujo, Tsimikas for Kerkez, Gakpo for Muñoz, and still predicts a 2-0. Both agree on the spine, Alisson, Van Dijk, Jacquet, Wirtz, Isak. No scan result had been published by nightfall, so the sheet is written in pencil. Iraola speaks on Monday.",
  },
  {
    n: "02",
    headline: "His Word Was Delicate.",
    byline: "PA / Tribuna",
    dateline: "Kirkby · 18 October",
    category: "Manager",
    body: "Iraola chose his adjective with care after the Gtech, and by Sunday it was the one everybody quoted. 'I think we have a very delicate situation,' he said (PA via Irish News), and he gave the reasons in order: a Champions League game two days earlier, a flight that landed late at night, no proper recovery. Szoboszlai's was 'not a new injury', and Liverpool 'will need more time with him'; Frimpong's was new, after he had finished Wednesday in Linz cramping. Tribuna read it as a manager blaming the calendar. It sounded more like one reading it aloud.",
  },
  {
    n: "03",
    headline: "Five At The Amex.",
    byline: "theScore / NBC Sports",
    dateline: "Brighton · 18 October",
    category: "Race for Europe",
    body: "Liverpool did not play on Sunday and still lost ground. Brighton were three up inside ten minutes against Crystal Palace, an own goal from Canvot, then Diego Gómez and Ayari, and finished 5-0 (theScore), which takes them third on sixteen and their goal difference to plus eighteen. At the City Ground, Arsenal had three-quarters of the ball and needed a Madueke shot that deflected off Cunha on eighty to win 1-0 (NBC Sports). Liverpool are fifth, four points below one of them and six below the other. Both are coming to Anfield in the next fortnight.",
  },
  {
    n: "04",
    headline: "Sixteen Without A Win.",
    byline: "Eurosport España / FútbolFantasy",
    dateline: "Vila-real · 18 October",
    category: "Football News",
    body: "Villarreal pack for Merseyside with a statistic that no squad rotation can fix. In sixteen Champions League matches against English clubs they have never won, six draws and ten defeats, and the last nine have all been lost (Eurosport). They have met Liverpool twice in European semi-finals and gone out both times. Pérez rested half his side for Elche with Anfield in mind (FútbolFantasy), drew 0-0, and will be without Buchanan and Pépé, who had eye surgery. Szymon Marciniak referees. The win over Napoli ended seven straight European defeats; this is the harder record.",
  },
  {
    n: "05",
    headline: "The Depth Question, Asked Again.",
    byline: "Football Insider / Sports Mole",
    dateline: "Merseyside · 18 October",
    category: "Transfers",
    body: "Mick Brown, the former Manchester United scout who talks to Football Insider most weeks, put the weekend in a sentence on Sunday: he is 'very worried', and a club that wants major silverware needs 'a much deeper squad than they do at the moment'. The window does not open until January. When it does, the list is already forming: a midfielder, with Alex Scott the name linked since Szoboszlai's setback, and a door out for Chiesa, whom Inter, Lazio and Atalanta are monitoring (Sports Mole, 5 October); he is not on the Champions League list. Depth is a January word. Tuesday is not January.",
  },
];
export const NEWS_DIGEST = {
  generatedAt: "2026-10-18T22:30:00Z",
  summary: "As of Sunday evening the Villarreal team sheet is being drawn around two absences: the evening previews start Gravenberch beside Mac Allister and split on right-back, Araujo for Eurosport and Gomez for Sports Mole, after Iraola called it 'a very delicate situation' and said Szoboszlai's hamstring had 'probably not healed enough' (PA via Irish News; Sports Mole). No scan result for Szoboszlai or Frimpong had been published by nightfall, and Iraola faces the press on Monday. The table moved above Liverpool without them: Brighton beat Crystal Palace 5-0 to go third on sixteen and Arsenal won 1-0 at Nottingham Forest through Madueke to go second on eighteen (theScore; NBC Sports), so Liverpool's next two league visitors now sit four and six points above them. Villarreal arrive having never won in sixteen Champions League games against English clubs, nine straight defeats among them (Eurosport), with Pépé and Buchanan out. Behind the headlines, Isak said there is 'still lots to improve' (AFP via Flashscore) and Mick Brown told Football Insider he is 'very worried' about the depth of the squad.",
  keyTopics: [
    {
      title: "The Villarreal XI Takes Shape Without Two Starters (Eurosport / Sports Mole, tonight)",
      category: "tactics",
      detail: "Published on Sunday evening: Eurosport's predicted XI has Araujo at right-back, Kerkez on the left, Gravenberch and Mac Allister in the pivot and Muñoz, Wirtz and Barcola behind Isak. Sports Mole's preview, published later, changes three places (Gomez, Tsimikas and Gakpo) and predicts 2-0, while expecting a harder game than the score suggests.",
    },
    {
      title: "Iraola: 'A Very Delicate Situation' (PA via Irish News / Sports Mole, today)",
      category: "injuries",
      detail: "Carried by PA on Sunday morning: Iraola said Szoboszlai 'felt the same injury, it's not a new injury and was probably not healed enough, so we will need more time with him', and that Frimpong's problem was new, after cramp in Linz. He tied both to a Champions League trip, a late-night return and no proper recovery. By Sunday evening no scan result had been published.",
    },
    {
      title: "Brighton Five, Arsenal One: The Table Moves Above Liverpool (theScore / NBC Sports, today)",
      category: "matches",
      detail: "Sunday's results: Brighton 5-0 Crystal Palace, three goals inside ten minutes (theScore), and Nottingham Forest 0-1 Arsenal, Madueke's shot deflecting in off Cunha on eighty (NBC Sports). Brighton are third on sixteen and Arsenal second on eighteen on ESPN's table; Liverpool stay fifth on twelve and host both of them in the next fortnight.",
    },
    {
      title: "Villarreal's English Record: Sixteen Games, No Win (Eurosport, today)",
      category: "matches",
      detail: "From Eurosport's Sunday-evening preview: Villarreal have never won any of their sixteen Champions League matches against English clubs (six draws, ten defeats) and have lost the last nine. Liverpool have won fifteen of their last sixteen league-phase games at home, the exception the 4-1 defeat by PSV in November 2025, and five straight Champions League matches against Spanish clubs.",
    },
    {
      title: "Gulácsi Back, Pépé And Buchanan Out For Villarreal (Eurosport / FútbolFantasy, today)",
      category: "general",
      detail: "Eurosport's evening XI restores Gulácsi in goal and lists Buchanan (muscle) and Pépé (eye) as out; FútbolFantasy, before the Elche game, reported that Pépé had eye surgery and that Pérez rested six players with Anfield in mind. Eurosport also names Szymon Marciniak as Tuesday's referee.",
    },
    {
      title: "Isak: 'Still Lots To Improve' (AFP via Flashscore, today)",
      category: "general",
      detail: "The winner at the Gtech, reported over the weekend: 'I think there's still lots to improve. We're taking steps, and we're grabbing points on the way.' Watching the end from the bench after going off on seventy-nine, he said the substitutes were 'screaming for the team to keep the ball and just play out the game' (AFP via Flashscore).",
    },
    {
      title: "Mick Brown: 'Very Worried' About The Squad (Football Insider, today)",
      category: "general",
      detail: "Published on Sunday afternoon: the former Manchester United chief scout told Football Insider he is 'very worried' about Liverpool's weaknesses and that to compete for major silverware they need 'a much deeper squad than they do at the moment', with Frimpong joining Bradley on the treatment table and Ekitike out long-term.",
    },
    {
      title: "Ngumoha Credits His Mentality On The Right (Goal via LiveScore, today)",
      category: "general",
      detail: "In LiveScore's Sunday round-up, from Goal: Ngumoha said his mentality is behind his progress and that he is improving on the right wing, the flank he took at the Gtech when Muñoz dropped to right-back. Eighteen and with thirteen appearances this season, he is a bench option for Tuesday.",
    },
    {
      title: "Will Wright's Nine In Eight (FootballTransfers via LiveScore, today)",
      category: "general",
      detail: "Also in Sunday's round-up: Wright has nine goals in eight youth games this season, including a UEFA Youth League hat-trick against LASK, and says he wants to break into the first team (FootballTransfers via LiveScore).",
    },
    {
      title: "Chiesa's January Door (Sports Mole, 5 October)",
      category: "transfers",
      detail: "First reported by Sports Mole on 5 October, citing Italian reports, and repeated in Sunday's round-up by AnfieldWatch: Inter, Lazio and Atalanta are monitoring Chiesa ahead of January, though none has opened talks. He had not played under Iraola by early October and is not on the Champions League list.",
    },
  ],
  sources: ["Eurosport", "Sports Mole", "PA", "Irish News", "theScore", "NBC Sports", "ESPN", "AFP", "Flashscore", "Football Insider", "Goal", "LiveScore", "FootballTransfers", "FútbolFantasy", "AnfieldWatch"],
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
  generatedAt: "2026-10-18T22:30:00Z",
  opponent: "Villarreal",
  shortName: "Villarreal",
  fixture: {
    date: "2026-10-20T20:00:00",
    venue: "Anfield, Liverpool",
    home: true,
    competition: "UCL",
    broadcast: "Champions League league phase, matchday three (8pm BST, 3pm ET; Paramount+ in the US)",
  },
  manager: "Iñigo Pérez",
  formation: "4-4-2",
  leaguePosition: 12,
  summary: "Villarreal come to Anfield with a record against English clubs that their recent revival has not touched: no win in sixteen Champions League matches against Premier League sides, six draws and ten defeats, the last nine in a row (Eurosport). The 3-1 over Napoli on 13 October ended a run of seven straight Champions League defeats (Eurosport) and was their first win in the competition in thirteen attempts (Sports Mole). Domestically they have stalled: Saturday's 0-0 with Elche, twenty shots and 2.15 expected goals without a goal (Sofascore), left them twelfth in La Liga on nine points after Sunday's games (ESPN). Iñigo Pérez, Iraola's former teammate at Athletic Club and later his assistant at Rayo (UEFA.com), rested six players for Elche with this trip in mind (FútbolFantasy). This leaguePosition is their La Liga place, not a Premier League one.",
  shape: "The two Sunday-evening previews disagree on the shape more than on the names. Sports Mole has a 4-4-2 with Gerard Moreno beside Mikautadze and Moleiro wide on the left; Eurosport has a 4-2-3-1, Mikautadze alone up front, Gueye and Comesaña screening, Oluwaseyi, Saliba and Moleiro behind, and Moreno on the bench. Either way the width comes from Romero and Mouriño pushing on, and the volume, twenty shots against Elche and seventeen against Napoli (Sofascore; Football Italia), comes from runners arriving into the box rather than a single target.",
  keyPlayers: [
    {
      name: "Georges Mikautadze",
      role: "Centre-forward",
      threat: "Thirteen La Liga goals last season, the club's top scorer (UEFA.com); scored against Napoli on 13 October (Football Italia), and Sports Mole calls him certain to start.",
      source: "UEFA.com / Football Italia / Sports Mole",
    },
    {
      name: "Gerard Moreno",
      role: "Second striker",
      threat: "Involved in seven goals in 639 Champions League minutes (Eurosport); assisted Mouriño against Napoli (Football Italia), though Eurosport has him on the bench.",
      source: "Eurosport / Football Italia",
    },
    {
      name: "Alberto Moleiro",
      role: "Wide midfielder",
      threat: "A career-high ten league goals last season (UEFA.com); on the left in both Sunday-evening XIs (Eurosport; Sports Mole).",
      source: "UEFA.com / Eurosport / Sports Mole",
    },
    {
      name: "Pape Gueye",
      role: "Central midfielder",
      threat: "Three La Liga goals before the Napoli game, the club's leading league scorer this season (Sports Mole).",
      source: "Sports Mole",
    },
  ],
  predictedXI: ["Luiz Júnior", "Romero", "Veiga", "Navarro", "Mouriño", "Moleiro", "Gueye", "Comesaña", "Saliba", "Mikautadze", "Moreno"],
  absentees: [
    {
      name: "Tajon Buchanan",
      issue: "Muscle injury; out (Eurosport, 18 October; FútbolFantasy).",
      status: "Out",
    },
    {
      name: "Nicolas Pépé",
      issue: "Out after eye surgery (FútbolFantasy, 16 October; Eurosport).",
      status: "Out",
    },
    {
      name: "Peter Gulácsi",
      issue: "Back from a difficult spell; Eurosport's evening XI starts him, Sports Mole's starts Luiz Júnior.",
      status: "Doubt",
    },
  ],
  recentForm: [
    {
      date: "2026-10-17",
      opponent: "Elche",
      home: true,
      score: "0-0",
      result: "D",
      note: "Twenty shots to seven, seven on target, 2.15 expected goals to 0.26, and Dituro's six saves (Sofascore). Pérez: frustrated by a draw in a match they should have won comfortably (Actualidad Castellón).",
    },
    {
      date: "2026-10-13",
      opponent: "Napoli",
      home: true,
      score: "3-1",
      result: "W",
      note: "Champions League matchday two. Behind to Rrahmani on eight, ahead through Mikautadze on twenty-three and Mouriño on twenty-six, Oluwaseyi sealing it on eighty-six; seventeen shots to eleven (Football Italia).",
    },
    {
      date: "2026-10-10",
      opponent: "Real Madrid",
      home: false,
      score: "0-1",
      result: "L",
      note: "Beaten by a ten-man Madrid at the Bernabéu straight after the international break (ESPN; Sports Mole).",
    },
    {
      date: "2026-09-20",
      opponent: "Levante",
      home: true,
      score: "3-1",
      result: "W",
      note: "The second of two league wins before the break, after 3-1 at Málaga three days earlier (ESPN).",
    },
  ],
  liverpoolAngle: "Villarreal's full-backs are the threat, and Liverpool's right side is where they will find the least resistance. With Frimpong and Szoboszlai out 'for some time' (PA via Irish News) and Bradley possibly to December (Sports Mole), SQUAD_LOAD's two critical departments meet Romero's overlaps directly: the right-back will be Araujo, Eurosport's pick, or Gomez, Sports Mole's. In midfield, Endo is not on the UEFA list (SI), so Gravenberch and Mac Allister have only Nyoni behind them over three games in eight days. The counterweight is Villarreal's own history in England, nine straight defeats (Eurosport), and an attack that made 2.15 expected goals against Elche and scored none (Sofascore).",
  modelLine: null,
  sources: ["Eurosport", "Sports Mole", "FútbolFantasy", "ESPN", "Football Italia", "UEFA.com", "Sofascore", "PA", "SI", "Actualidad Castellón"],
};
export const FORM_TRENDS = {
  generatedAt: "2026-10-18T22:30:00Z",
  competition: "PL",
  played: 7,
  headline: "Liverpool did not play on Sunday, so the useful number is the one the table hides: Liverpool's seven-game sum of 9.94 expected goals for and 8.07 against, from nine scored and eight conceded, says they are roughly the side their results describe and no better. Saturday's 1.51 to 0.85 at the Gtech, on FotMob's model via SI, was built largely against ten men. The two sides that moved above them on Sunday, Brighton with five against Palace (theScore) and Arsenal with 1.07 expected goals at Forest (NBC Sports), are the next two league visitors. The Brentford card stays on FotMob's figures until Opta Analyst publishes its own.",
  diagnosis: [
    {
      label: "Creation through the ten, finally",
      severity: "positive",
      source: "Opta Analyst / Eurosport / Sky Sports",
      detail: "The nine open-play chances at the Gtech (Opta Analyst) were not a one-off in context: Eurosport counts thirty-seven open-play chances for Wirtz in the Champions League since the start of last season, the most of any player. In the league he is now producing at the rate the fee implied; the question is whether the finishers around him keep converting it.",
    },
    {
      label: "Better against ten than against eleven",
      severity: "medium",
      source: "Opta Analyst / AFP via Flashscore / BBC Sport via LiveScore",
      detail: "Both goals at the Gtech came after Yarmoliuk's red card, and the first-half deficit was Brentford's seventh lead in seven league games (Opta Analyst). Isak's own reading was 'still lots to improve' (AFP via Flashscore), close to Murphy's charge that the side is too easy to play against (BBC Sport via LiveScore). The underlying numbers before the red card are not published, so the split stays unquantified.",
    },
    {
      label: "The pivot, one senior player short",
      severity: "high",
      source: "PA via Irish News / Sports Mole / SI",
      detail: "Iraola says Szoboszlai's hamstring 'was probably not healed enough' and Liverpool 'will need more time with him' (PA via Irish News). Every evening preview pairs Gravenberch with Mac Allister, and Endo cannot play in Europe (SI), so Nyoni, nineteen, is the only change available. It is the same two senior midfielders for three games in eight days.",
    },
    {
      label: "Right-back, a different answer in every preview",
      severity: "high",
      source: "Eurosport / Sports Mole / Goal",
      detail: "Eurosport starts Araujo, replaced at half-time on Saturday (Goal); Sports Mole starts Gomez; Muñoz finished the Gtech there. Frimpong is out for an unspecified spell and Bradley could be out to December (Sports Mole). Three candidates and none of them a first choice is the definition of a department under strain.",
    },
  ],
  matches: [
    {
      date: "2026-10-17",
      opponent: "Brentford",
      home: false,
      score: "2-1",
      result: "W",
      xgFor: 1.51,
      xgAgainst: 0.85,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 21,
      pending: false,
      verdict: "A comeback against ten and then nine men. Brentford led through Lewis-Potter's header on forty-four; Yarmoliuk was sent off in first-half stoppage time (45+8); Muñoz equalised on sixty-two and Isak won it on seventy (Sky Sports). Twenty-one shots to ten, five on target to two, 60 per cent of the ball and nine corners to three (ESPN), and 1.51 expected goals to 0.85 on FotMob's model as reported by SI. Opta Analyst's match page, published on Saturday, carries Opta facts but no expected-goals figures, so FotMob's stand until Opta's are published; first-half splits are not available and stay null.",
      source: "SI (FotMob) / ESPN / Sky Sports / Opta Analyst",
    },
    {
      date: "2026-10-14",
      opponent: "LASK Linz",
      home: false,
      score: "6-3",
      result: "W",
      competition: "UCL",
      xgFor: 3.34,
      xgAgainst: 2.02,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 26,
      pending: false,
      verdict: "Champions League, not counted in the league totals. Twenty-six shots to twelve and 3.34 expected goals to 2.02 on FotMob's model, 64 per cent of the ball (FotMob), nineteen of the shots in the first half, which Sky Sports calls a Champions League record for an away side. Six goals from four headers and close-range finishes, Barcola three of them; two more Koumas goals ruled offside and a Gravenberch shot against the post (Sky Sports). The two goals LASK's model would not have predicted came after sixty-two minutes, when both centre-backs were changed at once. Opta Analyst's page confirms the 3.34 from 26 and LASK's 2.02; Sofascore gives a 1.69-each second half, but no first-half figures are published directly and they stay null.",
      source: "Opta Analyst / FotMob / Sofascore / Sky Sports",
    },
    {
      date: "2026-10-11",
      opponent: "Manchester City",
      home: true,
      score: "0-3",
      result: "L",
      xgFor: 0.86,
      xgAgainst: 1.3,
      xgFirstHalfFor: 0.42,
      xgFirstHalfAgainst: 0.07,
      shotsFor: 13,
      pending: false,
      verdict: "The first league defeat of the season, and a game of two halves in the literal sense of a red card. Before Gravenberch's second booking on sixty-two Liverpool led twelve shots to four and 0.79 expected goals to 0.17 (Sports Mole), and Donnarumma made six saves across the afternoon (ESPN). After it City scored three in sixteen minutes: Haaland 2:37 after the dismissal, Doku off the bench, Cherki at the end of a 41-pass move (Opta Analyst). Liverpool finished on 0.86 expected goals, only 0.38 from open play (Opta Analyst), to City's 1.30, with first-half figures of 0.42 to 0.07 (Sofascore); thirteen shots to fifteen and 35 per cent of the ball (ESPN).",
      source: "Opta Analyst / Sofascore / ESPN / Sports Mole",
    },
    {
      date: "2026-09-20",
      opponent: "Bournemouth",
      home: false,
      score: "1-0",
      result: "W",
      xgFor: 1.57,
      xgAgainst: 0.76,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 12,
      pending: false,
      verdict: "A first away league win of the season, and the shape of it was a slow burn rather than a control job. Squawka's Opta-fed post-match page gives Liverpool 1.57 expected goals to Bournemouth's 0.76, twelve shots to nine, three on target to two, one big chance each, and 54 per cent of the ball. Isak turned in a blocked cross on fifty-seven after Gakpo had beaten Truffert on the right and Wirtz had missed the delivery under pressure from James Hill. Alisson had denied Evanilson an improvised backheel flick on eighteen; Szoboszlai put one free-kick inches wide on ten and another wide before the break; Barcola's deflected curler was saved by Petrovic's legs; Hill blocked a second Isak shot after Gakpo released him. Gakpo created a joint-team-high three chances and won nine of sixteen duels. First-half splits are not published and stay null.",
      source: "Squawka (Opta) / Opta Analyst / FotMob",
    },
    {
      date: "2026-09-15",
      opponent: "Tottenham",
      home: true,
      score: "3-1",
      result: "W",
      competition: "EFL",
      xgFor: 1.53,
      xgAgainst: 2.30,
      xgFirstHalfFor: 0.70,
      xgFirstHalfAgainst: null,
      shotsFor: 12,
      pending: false,
      verdict: "Carabao Cup third round, not counted in the league totals, and now carried at published figures rather than nulls. Ten changes, Gomez captain, and a first domestic win since Ipswich. Mac Allister struck the opener into the top corner on 21 after moving beyond the midfield line; Gakpo lashed in the second shortly after the interval; Gallagher headed Spurs back into it from a corner before the 70th; Mamardashvili, in his first appearance of the season, made a significant late save; Szoboszlai, off the bench, volleyed the third from around thirty yards in stoppage time. Bergvall had tested Mamardashvili early and Koumas was denied by Dubravka. The data, published since: 1.53 expected goals to Tottenham's 2.30, twelve shots to seventeen, five on target to six, two big chances to three, 44 per cent of the ball, with Liverpool's first-half figure 0.70. The Transfer Hub's shot map values Szoboszlai's volley at 0.03 and Gallagher's header at 0.9. The second-half split is not published and stays null.",
      source: "This Is Anfield / The Transfer Hub (shot map and xG timeline) / Goal",
    },
    {
      date: "2026-09-12",
      opponent: "Fulham",
      home: true,
      score: "0-0",
      result: "D",
      xgFor: 1.13,
      xgAgainst: 0.71,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 14,
      pending: false,
      verdict: "Goalless, and the first blank under Iraola. Opta: 1.13 expected goals from 14 shots to 0.71 from 10, three on target to four, Fulham 24 touches in the box to 18. Jacquet cleared Garcia's shot off the line on 12 after Alisson's short pass; Munoz headed a corner against the bar on 22; Leno saved from Isak and Mac Allister; Alisson tipped King's curler wide on 76 and Muniz missed on 79. Tsimikas withdrawn at half-time, Gravenberch and Munoz on the hour. First-half splits not published.",
      source: "Opta Analyst",
    },
    {
      date: "2026-09-09",
      opponent: "Atlético Madrid",
      home: true,
      score: "2-1",
      result: "W",
      competition: "UCL",
      xgFor: 1.68,
      xgAgainst: 0.81,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 14,
      pending: false,
      verdict: "Champions League, not counted in the league totals. Behind to Llorente on 17, level through Szoboszlai on 40 from Araujo's flick, ahead through Mac Allister's twenty-yard drive on 50. Opta: 1.68 expected goals from 14 shots to 0.81 from nine, Liverpool the deserved winners by their reading; Barcola missed two clear chances, Frimpong had a late third disallowed. First-half splits not published.",
      source: "Opta Analyst",
    },
    {
      date: "2026-09-04",
      opponent: "Ipswich Town",
      home: false,
      score: "2-0",
      result: "W",
      xgFor: 0.53,
      xgAgainst: 0.72,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 10,
      pending: false,
      verdict: "Now carried at Opta's figures. Squawka's Opta-fed gameweek-three table, published 11 September, gives Ipswich 0.72 against Liverpool's 0.53, replacing the FotMob pre-shot numbers this card previously held (0.73 to 0.66). The reading does not change, it hardens: two Isak shots in the sixth and ninth minutes, both from Gakpo through-balls, then ninety minutes of holding on against a side that created more. Liverpool had seven shots on target to five, and Sofascore's post-shot model still reverses the picture at 1.70 expected goals on target to 0.47, which is the gap between the chances made and the chances taken. A first lead and a first clean sheet of the season. First-half splits are not available.",
      source: "Squawka (Opta) / Sofascore",
    },
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
      verdict: "Out-created at Anfield. Forest led twice, through Ndoye and a Gibbs-White penalty, and Liverpool needed Isak on the hour and Munoz at 82 to rescue it. Wirtz had a goal ruled out for an offside against Frimpong in the build-up. The Premier League's panel ruled on Wednesday that the penalty should not have been given, while backing the VAR's decision not to intervene.",
      source: "Opta Analyst / Premier League KMI panel via This Is Anfield",
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
    }
  ],
  totals: {
    xgFor: 9.94,
    xgAgainst: 8.07,
    goalsFor: 9,
    goalsAgainst: 8,
    points: 12,
    note: "Premier League only, seven games. xG for is 2.73 (Newcastle) plus 1.61 (Forest) plus 0.53 (Ipswich) plus 1.13 (Fulham) plus 1.57 (Bournemouth) plus 0.86 (City) plus 1.51 (Brentford); xG against is 1.43 plus 2.30 plus 0.72 plus 0.71 plus 0.76 plus 1.30 plus 0.85. The Brentford figures are FotMob's, reported by SI, and the City card's 1.30 is Sofascore's; Opta's own figures replace them when published. Provenance caveat from 21 September stands: Opta's published season expected-goals-against figure through five games was 6.12 rather than the 5.92 those per-match cards summed to. Champions League and Carabao Cup cards are shown but not aggregated. First-half splits exist only for Forest, Tottenham and City and are not aggregated.",
  },
  optaFacts: [
    "Villarreal have not won any of their sixteen Champions League matches against English clubs, six draws and ten defeats, and have lost the last nine (Eurosport).",
    "Liverpool have won fifteen of their last sixteen home league-phase games in the Champions League; the exception was a 4-1 defeat by PSV in November 2025 (Eurosport).",
    "Since the start of last season Wirtz has created more open-play chances in the Champions League than anyone, thirty-seven (Eurosport).",
    "Van Dijk's 200th game as Liverpool captain at the Gtech made him only the eighth player in the club's history to reach the mark (Rush The Kop via LiveScore).",
  ],
  sources: ["Opta Analyst", "Sofascore", "ESPN", "Sports Mole", "Sky Sports", "Goal", "Liverpool FC", "Squawka", "FotMob", "This Is Anfield", "Premier League", "SI", "The Transfer Hub", "BBC Sport", "Anfield Index", "Fantasy Football Scout", "LiveScore", "Eurosport", "PA", "Irish News", "AFP", "Flashscore", "theScore", "NBC Sports", "Rush The Kop"],
};
export const SQUAD_LOAD = {
  generatedAt: "2026-10-18T22:30:00Z",
  headline: "Sunday brought words but no scan results. Iraola's account, carried by PA, is that Szoboszlai's hamstring had not healed and Frimpong's is new, and that Liverpool face 'a very delicate situation' after a Champions League trip with no proper recovery. So the two departments this board marks critical meet Villarreal with Mac Allister and Gravenberch in midfield and a choice between Araujo and Gomez at right-back, depending on which evening preview you read (Eurosport; Sports Mole). Endo and Chiesa are not registered for Europe (SI).",
  minutesNote: "Premier League minutes are not published here yet. Seven league games, two Champions League games and one Carabao Cup tie have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts, substitution times and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    {
      name: "Dominik Szoboszlai",
      issue: "Hamstring, a recurrence of the problem he brought back from Hungary duty",
      expected: "No scan result published by Sunday evening; Iraola: 'we will need more time with him' (PA via Irish News). Out of Villarreal in every preview, and Football Insider lists Brighton, Chelsea and Arsenal among the games at risk",
      note: "Went off on thirty-two at the Gtech. Iraola: 'it's not a new injury and was probably not healed enough' (PA via Irish News). Football Insider's reading is weeks rather than months, still unconfirmed.",
      source: "PA via Irish News / Sports Mole / Football Insider",
    },
    {
      name: "Jeremie Frimpong",
      issue: "Hamstring, new, seven minutes after coming on at half-time",
      expected: "Out 'for some time' (PA via Irish News); scan result not yet published, no timescale",
      note: "Iraola said the problem was new and that Frimpong had finished Wednesday in Linz with cramp (PA via Irish News; Sports Mole). He missed twenty-six matches with four hamstring problems last season (Rush The Kop). Araujo, Gomez and Muñoz are the right-back options left.",
      source: "PA via Irish News / Sports Mole / Rush The Kop",
    },
    {
      name: "Hugo Ekitike",
      issue: "Achilles rupture (April, surgery)",
      expected: "Boxing Day at Hull is the Liverpool Echo's and Sports Mole's projection; club framing is January (This Is Anfield)",
      note: "Iraola said on Thursday that Ekitike is 'a little bit behind' Bradley, 'but that was always the plan' (Anfield Index). Isak's return to fitness at the Gtech eases the centre-forward position for the first time since September.",
      source: "Liverpool Echo / Sports Mole / This Is Anfield / Anfield Index",
    },
    {
      name: "Giovanni Leoni",
      issue: "ACL (September 2025)",
      expected: "Back in group training during the November international break, a month later than planned (Liverpool FC)",
      note: "Iraola, Thursday: 'It's taking more time than we wanted, we've lost one month in the process' (Liverpool FC). Not a factor before November.",
      source: "Liverpool FC / This Is Anfield",
    },
    {
      name: "Conor Bradley",
      issue: "Knee",
      expected: "Could be out until December (Sports Mole, 18 October); SI had pointed to after the November break",
      note: "Iraola said last week he was 'not so far from training with the group' (Anfield Index), but Sunday's report is the more pessimistic one. With Frimpong also awaiting a scan, his is the return that matters most at right-back.",
      source: "Sports Mole / Anfield Index / SI",
    },
  ],
  returning: [
    {
      name: "Alexander Isak",
      issue: "Thigh, brought back from Sweden duty",
      status: "Started at the Gtech, scored the winner on seventy, replaced by Koumas on seventy-nine (Liverpool FC; ESPN)",
      note: "Sixteen touches and a goal (Sky Sports), and he has now scored in all five of his league appearances against Brentford (Opta Analyst). Maximum bonus points for the third time this season (Fantasy Football Scout).",
      source: "Liverpool FC / ESPN / Sky Sports / Opta Analyst / Fantasy Football Scout",
    },
    {
      name: "Cody Gakpo",
      issue: "Left ankle, the Lukic tackle in Serbia (27 September)",
      status: "Named on the bench at the Gtech, unused (Liverpool FC); Sports Mole says he could start on the right against Villarreal",
      note: "Fit for a squad for the first time since the ankle; the evening previews split between him and Muñoz on the right (Sports Mole; Eurosport).",
      source: "Liverpool FC / Sports Mole / Eurosport",
    },
    {
      name: "Ryan Gravenberch",
      issue: "Suspension served at the Gtech",
      status: "Available for Villarreal; the ban was domestic only",
      note: "His return is the one piece of good news in midfield, coming straight back into a pivot without Szoboszlai.",
      source: "Liverpool FC / DaveOCKOP",
    },
    {
      name: "Trey Nyoni",
      issue: "No injury",
      status: "On for Szoboszlai on thirty-two at the Gtech, rated 6.9 (SI)",
      note: "An hour of league football at nineteen. With Endo ineligible in Europe, he is the first midfield replacement against Villarreal.",
      source: "SI / ESPN",
    },
    {
      name: "Joe Gomez",
      issue: "No injury",
      status: "On for Muñoz on seventy-nine at the Gtech (Liverpool FC)",
      note: "With Frimpong and Bradley out, the only specialist cover for Araujo at right-back.",
      source: "Liverpool FC / ESPN",
    },
    {
      name: "Wataru Endo",
      issue: "No injury; not registered for the Champions League",
      status: "Unused substitute at the Gtech (Liverpool FC)",
      note: "Left off the league-phase list with Chiesa on 4 September (SI), so he cannot cover the midfield against Villarreal. Available again for Brighton on 25 October.",
      source: "SI / Liverpool FC",
    },
  ],
  startersLastMatch: {
    match: "Brentford 1-2 Liverpool, 17 October (Premier League, matchweek seven) · the confirmed XI, per Liverpool FC and ESPN",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Mac Allister", "Szoboszlai", "Munoz", "Wirtz", "Barcola", "Isak"],
    changes: "Three changes from City in the league: Szoboszlai and Isak back from injury, Jacquet kept, Gravenberch (suspended) out; Mac Allister and Szoboszlai the pivot. Substitutions: Nyoni for Szoboszlai (injured) on 32, Frimpong for Araujo at half-time, Ngumoha for Frimpong (injured) on 52, Koumas for Isak and Gomez for Muñoz on 79. Unused: Mamardashvili, Endo, Gakpo, Tsimikas (Liverpool FC; ESPN).",
    source: "Liverpool FC / ESPN",
  },
  depthRisk: [
    {
      position: "Central midfield",
      level: "critical",
      detail: "Critical. Szoboszlai's hamstring 'was probably not healed enough' (PA via Irish News) and Endo is not registered for Europe (SI), so every Villarreal preview pairs Mac Allister with Gravenberch, with Nyoni, nineteen, the only change. Three games in eight days. No market until January, when Alex Scott is the name linked (TEAMtalk).",
    },
    {
      position: "Right-back",
      level: "critical",
      detail: "Critical. Frimpong is out for an unspecified spell and Bradley could be out to December (Sports Mole). Eurosport starts Araujo, Sports Mole starts Gomez, and Muñoz finished Saturday there. No market until January.",
    },
    {
      position: "Centre-forward",
      level: "high",
      detail: "High. Isak starts in every evening XI with Koumas behind him; Ekitike's target is Boxing Day. A knock to Isak returns this to critical. No market until January.",
    },
    {
      position: "Centre-back",
      level: "high",
      detail: "High. Van Dijk and Jacquet are the pair in both Sunday-evening previews; Leoni is not due in group training before the November break (Liverpool FC), and Gomez, the cover, may be needed at right-back. No market until January.",
    },
    {
      position: "Wide forward",
      level: "medium",
      detail: "Medium. Barcola, Muñoz, Gakpo and Ngumoha for two places; Sports Mole picks Gakpo on the right, Eurosport Muñoz. Chiesa is not registered for Europe (SI). No market until January.",
    },
    {
      position: "Left-back",
      level: "medium",
      detail: "Medium. Kerkez (Eurosport's pick) and Tsimikas (Sports Mole's) for three games in eight days. No market until January.",
    },
  ],
  sources: ["Liverpool FC", "ESPN", "This Is Anfield", "Sports Mole", "Fantasy Football Scout", "Football Insider", "Rush The Kop", "Goal", "SI", "Sky Sports", "Opta Analyst", "Liverpool Echo", "Anfield Index", "DaveOCKOP", "TEAMtalk", "PA", "Irish News", "Eurosport"],
};
export const SEASON_PROJECTION = {
  generatedAt: "2026-10-18T22:30:00Z",
  played: 7,
  points: 12,
  pointsPerGame: 1.71,
  projectedPoints: 65,
  projectedFinish: "Europa League places on current pace",
  headline: "Liverpool did not play on Sunday, so the pace is unchanged: twelve points from seven games, 1.71 a game, sixty-five over a season on ESPN's table. What changed is the company. Brighton and Arsenal won and now sit four and six points ahead, and they are the next two league opponents. Seven games remain a small sample, and this is a pace, not a forecast.",
  thresholds: [
    {
      label: "Champions League (top 4)",
      points: 68,
      gap: 3,
      note: "Historical par for the last Champions League place in recent seasons. The pace is now three points short of it, and closing that over thirty-one games means about 1.81 points a game from here. Chelsea hold fourth on the live table, a point above Liverpool.",
    },
    {
      label: "Europa League (5th)",
      points: 60,
      gap: 0,
      note: "Fifth-place par, and where the live ESPN table draws Liverpool's own stripe after Saturday. The present pace clears it by five points.",
    },
    {
      label: "Conference League (6th-7th)",
      points: 55,
      gap: 0,
      note: "Sixth to seventh place par, often decided by cup outcomes as much as by league finish. Cleared by ten points on current pace.",
    },
    {
      label: "Safety",
      points: 38,
      gap: 0,
      note: "The conventional survival line, twenty-seven points below the current pace. It is on the board only to give the other numbers a floor.",
    },
  ],
  thresholdNote: "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  runIn: [
    {
      date: "2026-10-25",
      opponent: "Brighton",
      home: true,
      competition: "PL",
      oppPosition: 3,
      difficulty: "hard",
    },
    {
      date: "2026-11-01",
      opponent: "Arsenal",
      home: true,
      competition: "PL",
      oppPosition: 2,
      difficulty: "hard",
    },
    {
      date: "2026-11-08",
      opponent: "Crystal Palace",
      home: false,
      competition: "PL",
      oppPosition: 14,
      difficulty: "medium",
    },
    {
      date: "2026-11-22",
      opponent: "Manchester United",
      home: true,
      competition: "PL",
      oppPosition: 13,
      difficulty: "medium",
    },
    {
      date: "2026-11-29",
      opponent: "Everton",
      home: false,
      competition: "PL",
      oppPosition: 8,
      difficulty: "medium",
    },
    {
      date: "2026-12-02",
      opponent: "Sunderland",
      home: true,
      competition: "PL",
      oppPosition: 19,
      difficulty: "easy",
    },
  ],
  runInVerdict: "Brighton and Arsenal at Anfield, then Palace away, now reads as third, second and fourteenth on the live table. Six points or more from those three would lift the pace to 1.80 a game or better, the rate the fourth-place par asks for; one or none would leave it under 1.40. Both home games fall inside a run of three matches in eight days with Szoboszlai and Frimpong out and Bradley possibly to December (Sports Mole).",
  sources: ["ESPN", "Sports Mole"],
};