// ─── Liverpool FC Player Data (2026-27 Season · Updated 26 November 2026 (evening)) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 34, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Sat Nov 28, morning - A derby start in all four previews read (RotoWire; The False 9; FotMob; Playmakerstats); AnfieldWatch, citing L'Equipe, links Lens's Robin Risser to the summer succession.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 26, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sat Nov 28, morning - AnfieldWatch calls his future unresolved while Alisson's deal runs to the summer; on the bench on Sunday.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Sat Nov 28, morning - Starts in every derby XI read; Barry, six league goals from 7.40 expected (FotMob), is the assignment.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Sat Nov 28, morning - Bench again in every Saturday-morning XI, the lone senior centre-back cover with Araujo wide.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Sat Nov 28, morning - Left-back in RotoWire's, The False 9's and FotMob's XIs, likely facing Röhl's side of Everton.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 23, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Sat Nov 28, morning - Knee: back in training, Brit Brief reported on Friday evening, but not available on Sunday; 16 December at Bournemouth is the earliest named return (Liverpool Echo).", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 25, appearances: 35, goals: 2, assists: 6, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Sat Nov 28, morning - Every preview read starts Araujo, so Frimpong is the specialist on the bench if Grealish gets at Liverpool's right.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 19, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-23", injuryNote: "Sat Nov 28, morning - Knee: training again after the ACL, Brit Brief reported on Friday, but not part of the derby picture.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 21, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat Nov 28, morning - Van Dijk's partner in all four previews read; Everton have twelve league goals in eleven games (The False 9).", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Sat Nov 28, morning - Levante loan; nothing new on Saturday morning.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 32, name: "Kostas Tsimikas", number: 21, position: "DEF", nationality: "🇬🇷 Greece", age: 30, appearances: 6, goals: 0, assists: 3, cleanSheets: 1, xG: 0.2, tacklesPer90: 1.7, passCompletion: 79, progressiveCarries: 3.1, form: 5.8, status: "fit", injuryNote: "Sat Nov 28, morning - Kerkez's cover; none of the four previews read starts him.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png",
    physical: { height: 178, weight: 76, pace: 79, acceleration: 80, sprintSpeed: 78 },
    career: [
      { years: "2017-2020", club: "Olympiacos", fee: null, type: "senior" },
      { years: "2020-", club: "Liverpool", fee: "€13M", type: "senior" },
      { years: "2025-26", club: "Roma", fee: null, type: "loan" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat Nov 28, morning - In the pivot in RotoWire's, The False 9's and FotMob's derby XIs, beside Szoboszlai.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 24, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "injured", outSince: "2026-11-03", injuryNote: "Sat Nov 28, morning - Heel: in a race against the clock, the Mirror says (via AOL); 101 Great Goals lists him a doubt and Brit Brief likely to miss out. Kept out here.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Sat Nov 28, morning - Beside Mac Allister in every derby XI read; the set-piece taker against a box Keane, not Tarkowski, will organise.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Sat Nov 28, morning - Midfield depth while Gravenberch's heel stays undecided; Anfield Index links Lamine Camara for January.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 7, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Sat Nov 28, morning - At the ten in all four previews read; RotoWire tips Liverpool to win 2-1.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 19, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", recentPlayedDates: ["2026-11-22", "2026-09-15"], injuryNote: "Sat Nov 28, morning - On the bench in every Saturday-morning XI, the first alternative in the pivot.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 27, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "injured", outSince: "2026-11-22", injuryNote: "Sat Nov 28, morning - Calf: out of the derby with the problem from Netherlands duty, normally two or three weeks (Brit Brief; 101 Great Goals).", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 27, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Sat Nov 28, morning - Seven league goals from 6.17 expected goals (FotMob); The False 9 tips him to score on Sunday.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Sat Nov 28, morning - Achilles: the return is still aimed at January, Brit Brief reported on Friday.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-11-22", "2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Sat Nov 28, morning - On the right in all four previews read, the starter if Munoz's late fitness test goes against him (RotoWire).", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 31, name: "Lewis Koumas", number: 67, position: "FWD", nationality: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", age: 21, appearances: 7, goals: 2, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.3, passCompletion: 77, progressiveCarries: 1.8, form: 6.3, status: "fit", injuryNote: "Sat Nov 28, morning - Isak's only senior understudy; no preview starts him.", image: "",
    physical: { height: 180, weight: 73, pace: 80, acceleration: 81, sprintSpeed: 79 },
    career: [
      { years: "2013-", club: "Liverpool", fee: null, type: "youth" },
      { years: "2024-25", club: "Stoke City", fee: null, type: "loan" },
      { years: "2025", club: "Birmingham City", fee: null, type: "loan" },
      { years: "2025-26", club: "Hull City", fee: null, type: "loan" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Sat Nov 28, morning - The senior wide forward on the bench with Gakpo out and Munoz a late call.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Sat Nov 28, morning - Third goalkeeper; nothing new on Saturday morning.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "doubtful", injuryNote: "Sat Nov 28, morning - Knee: a late fitness decision after missing Friday's session, his second knee problem of the season (RotoWire); no structural damage, Particle's Saturday summary says.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 1, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", recentPlayedDates: ["2026-11-22", "2026-09-15"], injuryNote: "Sat Nov 28, morning - Right-back in all four previews read, a centre-back by trade who may face Grealish (The False 9).", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 7, goals: 3, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Sat Nov 28, morning - On the left in every derby XI read, opposite O'Brien and Röhl on Everton's right (The False 9).", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  "Fenerbahçe":     "https://a.espncdn.com/i/teamlogos/soccer/500/436.png",
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
  // Evening pass (Sun 22 November, cloud): MATCH PLAYED, Liverpool 4-0 Manchester United (ESPN; Liverpool FC), Tier 2; Yoro sent off on eight, Ngumoha scored and assisted.
  // A photographable moment, but STEP 7.5 cannot run in the cloud, so the evergreen plate is carried and only generatedAt is re-stamped.
  // Morning pass (Sun 22 November, cloud): matchday, NO MATCH since the evening edition, Tier 3; lead is Rashford ruled out of Pochettino's first squad (Evening Standard; CaughtOffside).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Sat 21 November, cloud): NO MATCH, Tier 3; lead is Saturday's results, Bournemouth's ninth straight win pushing Liverpool to fifth while Arsenal and City drew (101 Great Goals; ESPN; Reuters via TimesLIVE).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Sat 21 November, cloud): NO MATCH, Tier 3; lead is every Saturday preview naming the Selhurst eleven while United's XI and Pochettino's travelling squad stay unsettled (Afrik-Foot; SI; RotoWire; K24).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Fri 20 November, cloud): NO MATCH, Tier 3; lead is Iraola's press conference, Van Dijk, Gravenberch and Frimpong 'should all be available' (DaveOCKOP; beIN Sports).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Fri 20 November, cloud): NO MATCH, Tier 3; lead is James Pearce doubting Gravenberch will be ready for United (Anfield Index).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Thu 19 November, cloud): NO MATCH, Tier 3; lead is Van Dijk, Gravenberch, Szoboszlai and Isak training on Thursday
  // (Read Liverpool citing Sky Sports; Anfield Index via Yahoo Sports; Empire of the Kop). Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Thu 19 November, cloud): NO MATCH, Tier 3; lead is Frimpong pictured back in training (Brit Brief; Premier League News Now), Gravenberch absent from the photographs.
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Sun 8 November, cloud): MATCH PLAYED, Crystal Palace 1-3 Liverpool (ESPN), Tier 2; Liverpool fourth going into the break.
  // A visual moment, but STEP 7.5 cannot run in the cloud, so the evergreen plate is carried and only generatedAt is re-stamped.
  // Morning pass (Sun 8 November, cloud): matchday at Selhurst, no match since the evening edition. Plate carried;
  // STEP 7.5 cannot run in the cloud, so src is unchanged and only generatedAt is re-stamped.
  // Morning pass (Mon 9 November, cloud): NO MATCH since the evening edition, Tier 3; lead is Szoboszlai's Hungary decision (Read Liverpool; Brit Brief).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Wed 25 November, cloud): a match was played. Club Brugge 0-3 Liverpool, Isak 13' and 82', Wirtz 79' (ESPN; Opta Analyst); Munoz off
  // injured on 42 (Liverpool FC). A photographable moment, but STEP 7.5 cannot run in the cloud: plate carried, generatedAt re-stamped.
  src: "/assets/cover/2026-10-01-anfield-after-dark.svg",
  alt: "Editorial plate: an empty pitch under floodlights seen from the gantry, the white lines drawn in perspective through a low mist, the stand beyond in shadow.",
  focus: "Anfield, after dark",
  credit: "Editorial plate",
  generatedAt: "2026-11-28T09:15:00Z",
  // Morning pass (Sat 28 November, cloud): NO MATCH since the evening edition, Tier 3; lead is derby eve, four previews agreeing on one Liverpool XI with Munoz a late
  // fitness call (RotoWire; The False 9; FotMob; Particle). Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Fri 27 November, cloud): NO MATCH since the morning edition, Tier 3; lead is Iraola's press conference: no disruption in Munoz's knee, a big knock,
  // Gakpo out, Gravenberch difficult (Liverpool FC). Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Fri 27 November, cloud): NO MATCH since the evening edition, Tier 3; lead is Marca's report (via CaughtOffside) that Munoz's first tests show no
  // structural ligament damage, before Iraola's 1.30pm presser. Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Thu 26 November, cloud): NO MATCH since the morning edition, Tier 3; lead is Munoz's pain subsiding but a major doubt (Sports Mole), with Iraola's
  // press conference at 1.30pm on Friday (Liverpool FC). Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Thu 26 November, cloud): NO MATCH since the evening edition, Tier 3; lead is Munoz's knee assessed today with no verdict published
  // (Read Everton; Read Liverpool), Ngumoha tipped for the right (The False 9). Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Wed 25 November, cloud): matchday in Bruges, NO MATCH since the evening edition, Tier 3; lead is Brugge v Liverpool tonight, level on nine
  // points (Football Faithful; Dave.sport), with Gakpo ruled out of Sunday's derby by Iraola (All Out Soccer via Yahoo Sports). Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Tue 24 November, cloud): NO MATCH since the morning edition, Tier 3; lead is Gravenberch and Gakpo left out of the 22-man Brugge squad
  // (Liverpool FC; RotoWire), with Wirtz's 'best form since I arrived' (Liverpool FC) second. Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Tue 24 November, cloud): NO MATCH since the evening edition, Tier 3; lead is Liverpool opening contract talks with Alisson, who reportedly wants a deal
  // to 2029 (Schira via Sports Mole; BBC Sport gossip via Yahoo Sports). Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Mon 23 November, cloud): NO LIVERPOOL MATCH, Tier 3; lead is Brentford 4-0 Everton and Tarkowski's red card, which bans him for Sunday's derby
  // (Goal; AFP via Yahoo Sports), with UEFA.com's Brugge XI second. Not a Liverpool still; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Mon 23 November, cloud): NO MATCH since the evening edition, Tier 3; lead is the Brugge team news (Gakpo out, Gravenberch a major doubt,
  // no suspensions, Sports Mole via LiveScore; Virgili out for Brugge, SoccerNews). Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Wed 18 November, cloud): NO MATCH, Tier 3; lead is Bradley and Leoni back in first-team training (The Times; The Athletic) and Pochettino at Carrington.
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Wed 18 November, cloud): NO MATCH, Tier 3; lead is Araujo off the bench in Uruguay 5-0 Dominican Republic (Gulf News) and Pochettino arriving at Carrington.
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Tue 17 November, cloud): NO LIVERPOOL MATCH, Tier 3; lead is Szoboszlai hitting the post and coming through Hungary 1-1 Northern Ireland (Sky Sports; Liverpool.com),
  // Mac Allister talks reported opened (Merlo via Anfield Index) second. Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Tue 17 November, cloud): NO MATCH, Tier 3; lead is Mac Allister's contract talks, expected to open this week (Anfield Index).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Mon 16 November, cloud): NO LIVERPOOL MATCH, Tier 3; lead is Wirtz's two goals in Germany 5-0 Netherlands in Berlin (Liverpool FC; ESPN). Plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Mon 16 November, cloud): NO MATCH, Tier 3; lead is Wirtz v Gakpo in Klopp's Germany v Xavi's Netherlands, Berlin tonight (Al Jazeera; Sports Mole), Romano's Araujo line second (Football365 via LiveScore).
  // Not a Liverpool still; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Sun 15 November, cloud): NO LIVERPOOL MATCH, Tier 3; lead is Sunday night's internationals, Jacquet ninety minutes in France 2-1 Turkiye (Gioscore; FotMob), Ngumoha unused in Spain 2-3 England (The Telegraph via Yahoo Sports).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Sun 15 November, cloud): NO MATCH, Tier 3; lead (after auditor fix) is Szoboszlai's warm-up admission and restarted treatment (DaveOCKOP; Empire of the Kop; Sports Mole), Ngumoha's possible England start second.
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Sat 14 November, cloud): NO MATCH, Tier 3; lead is Szoboszlai's full ninety and assist in Hungary's 2-0 win in Tbilisi (Liverpool FC; RotoWire), with Araujo's Buenos Aires scare (Anfield Index) second.
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Sat 14 November, cloud): NO MATCH, Tier 3; lead is a clean Friday night for the internationals, Wirtz scoring for Germany (Liverpool FC), with Dorgu sent home by Denmark (Anfield Index).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Fri 13 November, cloud): NO MATCH, Tier 1 for the opponent; lead is United confirming Pochettino as head coach (Goal; SB Nation via Yahoo Sports).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Fri 13 November, cloud): NO MATCH, Tier 3; lead is Pochettino agreeing a deal to 2029 with United, announcement expected today (ESPN; Sky Sports); not yet official.
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Thu 12 November, cloud): NO MATCH, Tier 1 for the opponent; lead is United confirming Carrick's departure (ESPN; Sky Sports). Plate carried (STEP 7.5 not runnable in cloud).
  // Morning pass (Thu 12 November, cloud): NO MATCH, Tier 3; lead is Carrick arriving at Carrington to be sacked, confirmation expected today (Brit Brief); not yet official.
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Wed 11 November, cloud): NO MATCH, Tier 3; lead is United deciding to sack Carrick, to be told Thursday (Ben Jacobs via CaughtOffside), with a verbal agreement for Pochettino (Sky Sports); not official.
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Wed 11 November, cloud): NO MATCH, Tier 3; lead is United finalising a Pochettino deal if Carrick is replaced (The Athletic via CaughtOffside).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Tue 10 November, cloud): NO MATCH, Tier 3; lead is Manchester United, the next opponent, undecided on Carrick (The Mag via Yahoo; Goal).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Mon 9 November, cloud): NO MATCH, Tier 2/3; lead is Van Dijk withdrawn from the Netherlands squad with an undiagnosed fitness issue (Liverpool FC).
  // Not a photograph; plate carried, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Sat 7 November, cloud): NO LIVERPOOL MATCH, Tier 3; lead is Forest 3-1 City and Arsenal twelve clear, with Iraola's 'sometimes too honest'. Not a photograph; plate kept, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Morning pass (Sat 7 November, cloud): NO MATCH since the evening edition, Tier 3; lead is the settled Saturday XI (Szoboszlai beside Mac Allister). Not a photograph; plate kept, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Fri 6 November, cloud): NO LIVERPOOL MATCH, Tier 3; lead is Iraola's press conference (Gravenberch "the only doubt", Frimpong out) and Everton going fifth. Not a photograph; plate kept, generatedAt re-stamped (STEP 7.5 not runnable in cloud).
  // Evening pass (Thu 5 November, cloud): NO LIVERPOOL MATCH, Tier 3; lead is Van Dijk's "not sustainable" plus Palace 1-1 Hoffenheim. Plate kept (STEP 7.5 not runnable in cloud).
  // Morning pass (Thu 5 November, cloud-scheduled): NO LIVERPOOL MATCH since the evening edition, Tier 3. Lead is the Istanbul inquest
  // narrowing to Muriqi's header over three Liverpool players (Express via AOL) and the first Palace preview (The False 9). Not a
  // photograph Liverpool would want; plate carried; Track 2 request untouched; NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Wed 4 November, cloud-scheduled, run after midnight UTC on Thu 5): MATCH PLAYED, Fenerbahçe 3-2 Liverpool (ESPN), Tier 2.
  // A defeat decided by three set pieces, with the heroes in the other shirt, is not a Liverpool cover photograph; plate carried; Track 2
  // request untouched; NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Tue 3 November, cloud-scheduled, run after midnight UTC on Wed 4): NO LIVERPOOL MATCH since the morning edition, Tier 3.
  // Lead is matchday itself, Fenerbahçe away tonight, framed by Iraola's 'good in our press' and Kuyt's 'good plan' (Liverpool FC). Plate
  // carried; Track 2 request untouched; NO image queued (STEP 7.5 not runnable in cloud).
  // Morning pass (Tue 3 November, cloud-scheduled, run late in the day): NO LIVERPOOL MATCH since the evening edition, Tier 3. Lead is
  // Gravenberch's heel fracture, confirmed by Iraola at the pre-Fenerbahçe press conference (Liverpool FC). A medical bulletin, not a
  // photograph. Plate carried; Track 2 request untouched; NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Mon 2 November, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH since the morning edition, Tier 3. Lead is Szoboszlai's
  // 'It stays secret' on whether he returned too soon (Read Liverpool) and Greenwood back in Fenerbahçe training (A Spor; NTV). A quote, not a
  // photograph. Plate carried; Track 2 request untouched; NO image queued (STEP 7.5 not runnable in cloud).
  // Morning pass (Mon 2 November, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH since the last edition, Tier 3. Lead is the morning-after
  // VAR row over Timber's hold on Isak (Telegraph via Yahoo Sports; Empire of the Kop; Anfield Index) and Oppong ruled out for Fenerbahçe (Fanatik).
  // A replay argument, not a photograph. Plate carried; Track 2 request untouched; NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Sun 1 November, ~6pm ET, cloud-scheduled): MATCH PLAYED, Liverpool 0-1 Arsenal (Havertz 16', AP), Tier 2. A defeat
  // with the hero in the other shirt is not a Liverpool cover photograph; plate carried; Track 2 request untouched; NO image queued
  // (STEP 7.5 not runnable in cloud).
  // Morning pass (Sun 1 November, ~4am ET, cloud-scheduled, matchday): NO LIVERPOOL MATCH since the last edition, Tier 3. Lead is Arsenal's
  // overnight team news (Rice, Madueke, Calafiori, Tzolis due back, Evening Standard) and Arteta's Isak line (Football Muse). Team news, not a
  // photograph. Plate carried; Track 2 request untouched; NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Sat 31 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH since the last edition, Tier 3. Lead is the table:
  // Chelsea 2-0 Man Utd and Man City 0-1 Brighton push Liverpool to fifth before Arsenal (ESPN; dave.sport). A league table, not a
  // photograph. Plate carried; Track 2 request untouched; NO image queued (STEP 7.5 not runnable in cloud).
  // Morning pass (Sat 31 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH since the last edition, Tier 3. Lead is the overnight
  // preview consensus (Premier League News Now: 'experience over form', Gravenberch in) and Madueke's Saturday session. A team sheet, not a
  // photograph. Plate carried; Track 2 request untouched apart from leadStory; NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Fri 30 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH since the last edition, Tier 3. Lead is Iraola's
  // afternoon presser: Szoboszlai and Munoz 'have a chance' for Arsenal, Gravenberch 'we trust him' (Liverpool FC). A press-room line,
  // not a photograph. Plate carried; Track 2 request untouched apart from leadStory; NO image queued (STEP 7.5 not runnable in cloud).
  // Morning pass (Fri 30 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH since the last edition, Tier 3. Lead is Brit Brief's
  // overnight Gravenberch call (Nyoni pressing) ahead of Iraola's 1.30pm presser. A selection question, not a photograph. Plate carried;
  // NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Thu 29 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH since the last edition, Tier 3. Lead is Dowman's ban
  // upheld (ESPN; Football365) with Van Dijk's exit explained as managed minutes. An FA statement, not a photograph. Plate carried;
  // NO image queued (STEP 7.5 not runnable in cloud).
  // Morning pass (Thu 29 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH since the last edition. Lead is the quarter-final draw,
  // Bournemouth at Anfield, Iraola's "the only team that I don't want" (ESPN). A press-room line, not a photograph. Plate carried;
  // NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Wed 28 October, ~6pm ET, cloud-scheduled): MATCH PLAYED. Liverpool 1-1 Chelsea, 6-5 on penalties (ESPN), Gomez the
  // winning kick after Mamardashvili saved from Emegha; leads every surface. Re-pointed at Arsenal at home, Sun 1 Nov. Plate carried;
  // NO image queued (STEP 7.5 not runnable in cloud).
  // Morning pass (Wed 28 October, ~4am ET, cloud-scheduled): MATCHDAY, NO LIVERPOOL MATCH since the last edition. Lead is the Chelsea cup tie
  // tonight, twelve possible absentees between the sides (Brit Brief) and Opta's 52.6 per cent; Arsenal out at Fleetwood overnight. A preview,
  // not a photograph. Plate carried, Track 2 request untouched apart from leadStory; NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Tue 27 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH. Lead moves to Iraola's 12.30pm presser: Wirtz
  // "quite optimistic" for Chelsea, Szoboszlai and Munoz "more difficult", "definitely" changes. A press-room line, not a photograph.
  // Plate carried; NO image queued (STEP 7.5 not runnable in cloud).
  // Morning pass (Tue 27 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH. Lead moves to Football Insider's claim (via AnfieldWatch) that Van Dijk
  // and Gomez are expected to leave for free next summer. A contract report, not a photographable moment. Plate carried, Track 2 request untouched
  // apart from leadStory; NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Mon 26 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH. Lead moves on: Wirtz says he has been twisting the ankle
  // for weeks and had not been tested (Sky Deutschland/Sport1 via Sport Witness); 3 Added Minutes calls him very unlikely for Chelsea. Fitness
  // news, not a photographable moment. Plate carried, Track 2 request untouched apart from leadStory; NO image queued (STEP 7.5 not runnable in cloud).
  // Morning pass (Mon 26 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH since the evening edition. Lead: Wirtz day to day before
  // Chelsea, 'not too bad' in his own words (BBC via Dave.sport), assessed daily (Liverpool Echo via Azat TV). Fitness news, not a
  // photographable moment. Plate carried, Track 2 request untouched apart from leadStory; NO image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Sun 25 October, ~6pm ET, cloud-scheduled): A MATCH WAS PLAYED. Liverpool 2-0 Brighton at Anfield, Gross og 17' and Isak 21'
  // (ESPN); Wirtz off with an ankle twist on 65 (DAZN). Photographable, but STEP 7.5 cannot run in the cloud, so NO image was queued; the
  // evergreen plate is carried, the Track 2 request is untouched apart from its leadStory, and only generatedAt is refreshed. All generatedAt 22:30Z.
  // Morning pass (Sun 25 October, ~4am ET, matchday, cloud-scheduled): NO LIVERPOOL MATCH YET. Lead: Brighton still on at 2pm as Storm
  // Boelo starts to clear (Brit Brief 5.27am; DaveOCKOP 7.35am). Weather and selection, not a photographable moment. Plate carried, Track 2
  // request untouched; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Sat 24 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH. Lead moves onto Storm Boelo: a Met Office yellow
  // warning over Merseyside until 9pm Sunday puts Brighton in doubt, the game on as things stand and the call with the Safety Advisory
  // Group (DaveOCKOP; Empire of the Kop via Yahoo Sports). Weather, not a photographable moment. Plate carried, Track 2 request
  // untouched; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Sat 24 October, ~4am ET, cloud-scheduled): NO LIVERPOOL MATCH. Lead moves onto Opta Analyst's preview: a defeat
  // would be only the fourth winless start to a home league season in club history, against a home record of one defeat in thirteen
  // against Brighton. A statistic, not a visual moment. Plate carried, Track 2 request untouched; only generatedAt refreshed.
  // NO new image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Fri 23 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH. Lead moves onto Iraola's Friday press conference:
  // Barcola passed fit, Szoboszlai out, Munoz 'difficult', Gravenberch 'can do a job' at right-back. A press conference is not a visual
  // moment. Plate carried, Track 2 request untouched; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud).
  // Evening pass (Thu 22 October, ~6pm ET, cloud-scheduled): NO LIVERPOOL MATCH. Lead moves onto Thursday's training: Munoz absent again
  // (knee knock), Barcola on an individual recovery session ('only a precaution'), Sky's Szoboszlai timeline. Brighton drew 0-0 in Jablonec.
  // Not a visual moment. Plate carried, Track 2 request still OPEN; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:15Z.
  // Morning pass (Thu 22 October, ~4am ET, cloud-scheduled): NO MATCH since the evening edition. Lead moves onto the Daily Mail's
  // Lewis Steele: a new Ngumoha contract is 'a matter of when, not if' (Empire of the Kop). Contract news, not a visual moment.
  // Plate carried, Track 2 request still OPEN; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Morning pass (Wed 21 October, ~4am ET, cloud-scheduled): NO MATCH since the evening edition. Lead moves onto Romano's report of
  // 'active conversations' over a new long-term Ngumoha contract (Empire of the Kop; TEAMtalk; FootballTransfers). Plate carried,
  // Wed 21 Oct evening (cloud): lead is Mac Allister's contract (Telegraph) and his 'this manager changed it' line; not a visual moment.
  // Plate carried, Track 2 request still OPEN; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Track 2 request still OPEN; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Tue 20 October, ~6pm ET, cloud-scheduled): MATCH PLAYED, Liverpool 4-3 Villarreal (UCL), from two down; Mac Allister
  // twice, Araujo, Wirtz; Ngumoha two assists (Sky Sports; Opta Analyst). A photographable moment, but STEP 7.5 cannot run in the cloud,
  // so NO image queued; plate carried, Track 2 request still OPEN; only generatedAt refreshed. NEXT_MATCH rolled to Brighton (H), Sun 25 Oct 2pm. All generatedAt 22:30Z.
  // Morning pass (Tue 20 October, ~4am ET, cloud-scheduled, matchday): NO MATCH since the evening edition. Lead moves onto Munoz
  // seen in a knee brace with no verdict on Villarreal (Sports Mole, 7.23am) and the overnight previews agreeing on Araujo at right-back.
  // Plate carried, Track 2 request still OPEN; only generatedAt refreshed. NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
  // Evening pass (Mon 19 October, ~6pm ET, cloud-scheduled): NO MATCH since the morning edition. Lead moves onto Iraola's
  // pre-Villarreal press conference (Frimpong unlikely back before the November break; Szoboszlai 'not a new injury') and Munoz
  // missing Monday's training (Express via AOL; Brit Brief). Plate carried, Track 2 request still OPEN; only generatedAt refreshed.
  // NO new image queued (STEP 7.5 not runnable in cloud). All generatedAt 22:30Z.
  // Morning pass (Mon 19 October, ~4am ET, cloud-scheduled): NO MATCH since the evening edition. Lead moves onto the overnight
  // previews putting Gakpo back in the front three for Villarreal and splitting on full-back rotation with Brighton in mind
  // (Sports Mole; The Stats Zone). Plate carried, Track 2 request still OPEN; only generatedAt refreshed. NO new image queued
  // (STEP 7.5 not runnable in cloud). All generatedAt 08:30Z.
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
  opponent: "Everton",
  shortName: "Everton",
  home: false,
  date: "2026-11-29T12:00:00",
  competition: "PL",
  venue: "Hill Dickinson Stadium, Liverpool",
  broadcast: "Premier League matchweek twelve, Sunday 29 November, 12pm GMT (7am ET), Hill Dickinson Stadium; TNT Sports in the UK (Read Everton)",
};
// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
  { date: "2026-11-25", opponent: "Club Brugge",         home: false, score: "3-0", competition: "UCL", result: "W", scorers: "Isak 13', 82', Wirtz 79'" },
  { date: "2026-11-22", opponent: "Manchester United",   home: true,  score: "4-0", competition: "PL",  result: "W", scorers: "Szoboszlai 10', Wirtz 13', Ngumoha 66', Munoz 82'" },
  { date: "2026-11-08", opponent: "Crystal Palace",      home: false, score: "3-1", competition: "PL",  result: "W", scorers: "Mac Allister 40', Wirtz 54', Isak 89'" },
  { date: "2026-11-04", opponent: "Fenerbahçe",          home: false, score: "2-3", competition: "UCL", result: "L", scorers: "Nyoni 25', Isak 69'" },
  { date: "2026-11-01", opponent: "Arsenal",             home: true,  score: "0-1", competition: "PL",  result: "L", scorers: "" },
  { date: "2026-10-28", opponent: "Chelsea",             home: true,  score: "1-1", competition: "EFL", result: "W", scorers: "Gakpo 43' pen (won 6-5 on penalties)" },
  { date: "2026-10-25", opponent: "Brighton",            home: true,  score: "2-0", competition: "PL",  result: "W", scorers: "Gross 17' og, Isak 21'" },
  { date: "2026-10-20", opponent: "Villarreal",          home: true,  score: "4-3", competition: "UCL", result: "W", scorers: "Mac Allister 36', 65', Araujo 45+2', Wirtz 68'" },
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
// Last refresh: 2026-11-06 (Friday evening, ~6pm ET): Everton 3-1 Coventry, Everton fifth, Liverpool sixth; see the dated log below. Earlier: 2026-11-02 (Monday evening, ~6pm ET): Everton won at Newcastle on Monday night, Everton 14th to 7th, Newcastle 12th to 13th; see the dated log below. Earlier: 2026-10-28 (Wednesday morning, ~4am ET). Re-fetched from ESPN, byte-identical to Tuesday evening; no league game until Sunday.
// Prior refresh: 2026-10-27 (Tuesday morning, ~4am ET). Re-fetched from ESPN, byte-identical to Monday evening; no league game until Sunday.
// Prior refresh: 2026-10-26 (Monday evening, ~6pm ET). Re-fetched from ESPN, byte-identical to Sunday evening; no league game on Monday.
// Prior refresh: 2026-10-25 (Sunday evening, ~6pm ET). Re-fetched from ESPN after Sunday's five games: LIVERPOOL 2-0 Brighton, Man Utd 0-3
// Bournemouth, Palace 0-2 Newcastle, Hull 1-1 Brentford, Sunderland 0-0 Leeds. LIVERPOOL FOURTH (highlighted) on fifteen, on the Champions
// League stripe, a point behind Brighton; Chelsea fifth. ESPN now abbreviates 'Man Utd', mapped back to 'Manchester United'.
// Prior refresh: 2026-10-25 (Sunday morning, ~4am ET, matchday). Byte-identical to Saturday evening; Sunday's five games not yet played.
// Prior refresh: 2026-10-24 (Saturday evening, ~6pm ET). Re-fetched from ESPN after Villa 2-1 Man City, Arsenal 2-0 Everton, Coventry 0-1 Fulham and
// Chelsea 0-2 Tottenham: City and Arsenal level on twenty-one from eight (City ahead on goal difference); Villa up to sixth; LIVERPOOL fifth
// (highlighted) on twelve from seven; Forest, Coventry and Sunderland in the relegation stripe, Fulham out of it.
// Prior refresh: 2026-10-23 (Friday evening, ~6pm ET). Ipswich 1-1 Nott'm Forest (ESPN scoreboard) opened matchweek eight: Forest 19th to 16th, Coventry 17th to 18th (REL), Ipswich 10th to 9th.
// Prior refresh: 2026-10-23 (Friday morning, ~4am ET). Byte-identical to Thursday evening; matchweek eight is still to start.
// Prior refresh: 2026-10-22 (Thursday evening, ~6pm ET). Byte-identical to Thursday morning; Brighton's 0-0 in Jablonec was a Conference League game.
// Prior refresh: 2026-10-22 (Thursday morning, ~4am ET). Byte-identical to Wednesday evening; matchweek eight starts on Saturday.
// Prior refresh: 2026-10-21 (Wednesday evening, ~6pm ET). Byte-identical to Wednesday morning; matchweek eight starts on Saturday.
// Prior refresh: 2026-10-21 (Wednesday morning, ~4am ET). Byte-identical to Tuesday evening; no league games until matchweek eight this weekend.
// Prior refresh: 2026-10-20 (Tuesday evening, ~6pm ET). Byte-identical to Tuesday morning; Villarreal was a Champions League game.
// Prior refresh: 2026-10-20 (Tuesday morning, ~4am ET). Byte-identical to Monday evening; no league games until Saturday.
// Prior refresh: 2026-10-19 (Monday morning, ~4am ET). Byte-identical to Sunday evening; Tottenham v Coventry closes matchweek seven tonight.
// Prior refresh: 2026-10-18 (Sunday morning, ~4am ET). Byte-identical to Saturday evening; ten sides still have a seventh game to play.
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
// Refresh 2026-10-24 (Saturday morning, ~4am ET). Re-fetched from ESPN, byte-identical to Friday evening; Saturday's games not yet played.
// Refresh 2026-10-19 (Monday evening, ~6pm ET). Re-fetched from ESPN after Tottenham v Coventry, the last game of matchweek seven:
// Tottenham up to sixteenth on six (first league win, goal difference -6 to -4), Coventry seventeenth. Every side on seven played.
// Relegation stripe: Fulham, Forest, Sunderland. Top five unchanged; LIVERPOOL fifth (highlighted) on twelve.
// Refresh 2026-10-28 (Wednesday evening, ~6pm ET). Re-fetched from ESPN after the Carabao Cup ties, unchanged; no league games played.
// Refresh 2026-10-29 (Thursday morning, ~4am ET). Re-fetched from ESPN, byte-identical to Wednesday evening; matchweek nine starts on Saturday.
// Refresh 2026-10-30 (Friday morning, ~4am ET). Re-fetched from ESPN, byte-identical to Thursday; matchweek nine starts on Saturday.
// Refresh 2026-10-30 (Friday evening, ~6pm ET). Re-fetched from ESPN, unchanged.
// Refresh 2026-10-31 (Saturday morning, ~4am ET). Re-fetched from ESPN, byte-identical to Friday evening; Chelsea v Manchester United later today.
// Refresh 2026-10-31 (Saturday evening, ~6pm ET). Re-fetched from ESPN after eight Saturday games: Chelsea 2-0 Man Utd, Man City 0-1
// Brighton, Spurs 2-0 Palace, Coventry 3-1 Sunderland (ESPN scoreboard). City first on twenty-one (nine played), Arsenal second on
// twenty-one (eight), Brighton third on nineteen, Chelsea fourth on sixteen, LIVERPOOL fifth (highlighted) on fifteen. Relegation stripe:
// Palace, Forest, Sunderland.
// Refresh 2026-11-01 (Sunday morning, ~4am ET). Re-fetched from ESPN, unchanged from Saturday evening; Liverpool v Arsenal at 4.30pm GMT.
// Refresh 2026-11-01 (Sunday evening, ~6pm ET). Re-fetched from ESPN after LIVERPOOL 0-1 Arsenal: Arsenal first on twenty-four, City second
// on twenty-one, Brighton third, Chelsea fourth, LIVERPOOL fifth (highlighted) on fifteen, goal difference down to two. Relegation stripe unchanged.
// Refresh 2026-11-04 (Wednesday evening pass, run after midnight UTC on Thu 5). Re-fetched from ESPN, unchanged: Fenerbahçe 3-2 Liverpool was
// Champions League only. Liverpool fifth on fifteen; Palace eighteenth on seven before Sunday's game at Selhurst Park.
// Refresh 2026-11-05 (Thursday evening, ~6pm ET). Re-fetched from ESPN, byte-identical; Palace 1-1 Hoffenheim was Europa League only.
// Refresh 2026-11-06 (Friday morning pass, cloud). Re-fetched from ESPN, byte-identical; matchweek ten starts on Saturday.
// Refresh 2026-11-06 (Friday evening pass, cloud). Re-fetched from ESPN after Everton 3-1 Coventry on Friday night: Everton seventh to fifth on
// sixteen (UEL stripe), LIVERPOOL sixth (highlighted) on fifteen, Brentford seventh; Coventry sixteenth on nine from ten.
// Refresh 2026-11-07 (Saturday evening pass, cloud). Re-fetched from ESPN after Arsenal 1-0 Hull (Opta Analyst), Nottm Forest 3-1 Man City (VAVEL),
// Leeds 1-0 Tottenham (Sky Sports) and Fulham v Newcastle drawn: Arsenal twenty-seven, City twenty-one, LIVERPOOL sixth (highlighted) on fifteen, Leeds eighth,
// Forest sixteenth. Relegation stripe: Manchester United, Palace, Sunderland.
// Refresh 2026-11-08 (Sunday evening pass, cloud). Re-fetched from ESPN after Sunday's five games: Crystal Palace 1-3 LIVERPOOL, Sunderland 1-0 Chelsea,
// Brighton 2-0 Brentford, Ipswich 1-2 Bournemouth, Man Utd 4-4 Aston Villa (ESPN scoreboard). Every side on ten. Arsenal twenty-seven, Brighton second on
// twenty-two, City third, LIVERPOOL FOURTH (highlighted, UCL stripe) on eighteen, Chelsea fifth. Relegation stripe: Manchester United, Sunderland, Palace (bottom).
// Refresh 2026-11-09 (Monday morning pass, cloud). Re-fetched from ESPN: no league games since Sunday, table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen.
// Refresh 2026-11-09 (Monday evening pass, cloud). Re-fetched from ESPN: no league games since Sunday, table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen.
// Refresh 2026-11-10 (Tuesday morning pass, cloud). Re-fetched from ESPN: no league games since Sunday, table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen.
// Refresh 2026-11-10 (Tuesday evening pass, cloud). Re-fetched from ESPN: no league games since Sunday, table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen.
// Refresh 2026-11-11 (Wednesday morning pass, cloud). Re-fetched from ESPN: no league games since Sunday, table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen.
// Refresh 2026-11-11 (Wednesday evening pass, cloud). Re-fetched from ESPN: no league games since Sunday, table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen.
// Refresh 2026-11-12 (Thursday morning pass, cloud). Re-fetched from ESPN: no league games since Sunday, table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen.
// Refresh 2026-11-12 (Thursday evening pass, cloud). Re-fetched from ESPN: no league games since Sunday, table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; Manchester United eighteenth, Carrick's departure confirmed Thursday.
// Refresh 2026-11-13 (Friday morning pass, cloud). Re-fetched from ESPN: no league games since Sunday, table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; Pochettino agreed terms with United overnight, announcement expected Friday.
// Refresh 2026-11-13 (Friday evening pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; United confirmed Pochettino as head coach on Friday.
// Refresh 2026-11-14 (Saturday morning pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; Denmark sent United's Dorgu home on Saturday.
// Refresh 2026-11-15 (Sunday morning pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; United at Anfield in a week.
// Refresh 2026-11-15 (Sunday evening pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; internationals only on Sunday.
// Refresh 2026-11-16 (Monday morning pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; United at Anfield in six days.
// Refresh 2026-11-16 (Monday evening pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; internationals only on Monday.
// Refresh 2026-11-17 (Tuesday evening pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; the break ends tonight, United at Anfield on Sunday.
// Refresh 2026-11-18 (Wednesday evening pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; United at Anfield on Sunday.
// Refresh 2026-11-19 (Thursday morning pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; Pochettino's first United session today.
// Refresh 2026-11-19 (Thursday evening pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; United at Anfield on Sunday.
// Refresh 2026-11-20 (Friday evening pass, cloud). Re-fetched from ESPN: table unchanged, every side on ten,
// LIVERPOOL fourth (highlighted, UCL stripe) on eighteen; both managers spoke on Friday afternoon.
// Refresh 2026-11-21 (Saturday evening pass, cloud). Re-fetched from ESPN after Saturday's seven games: Arsenal 2-2 at
// Newcastle, City 1-1 Fulham, Bournemouth 2-0 Forest; LIVERPOOL fifth (highlighted, UEL stripe) on eighteen, a game in hand.
// Refresh 2026-11-22 (Sunday morning pass, cloud). Re-fetched from ESPN: byte-identical to Saturday evening; Hull v Brighton
// and LIVERPOOL v Manchester United are still to play. LIVERPOOL fifth (highlighted, UEL stripe) on eighteen.
// Refresh 2026-11-22 (Sunday evening pass, cloud). Re-fetched from ESPN after Liverpool 4-0 United and Brighton's defeat at Hull:
// LIVERPOOL fourth (highlighted, UCL stripe) on twenty-one, a point behind Brighton and City; United nineteenth on eight.
// Refresh 2026-11-23 (Monday morning pass, cloud). Re-fetched from ESPN: byte-identical to Sunday evening; Brentford v Everton tonight
// closes matchweek eleven. LIVERPOOL fourth (highlighted, UCL stripe) on twenty-one.
// Refresh 2026-11-23 (Monday evening pass, cloud). Re-fetched from ESPN after Brentford 4-0 Everton closed matchweek eleven:
// Brentford tenth to sixth on seventeen, Everton seventh to ninth on sixteen; every side on eleven. LIVERPOOL fourth (highlighted, UCL stripe) on twenty-one.
// Refresh 2026-11-24 (Tuesday morning pass, cloud). Re-fetched from ESPN: byte-identical to Monday evening; European week, nothing moves before Saturday.
// LIVERPOOL fourth (highlighted, UCL stripe) on twenty-one.
// Refresh 2026-11-24 (Tuesday evening pass, cloud). Re-fetched from ESPN: byte-identical to the morning; nothing moves before Saturday.
// Refresh 2026-11-25 (Wednesday morning pass, cloud). Re-fetched from ESPN: byte-identical; matchday in Bruges, LIVERPOOL fourth on twenty-one.
// Refresh 2026-11-25 (Wednesday evening pass, cloud). Re-fetched from ESPN: byte-identical; Club Brugge 0-3 Liverpool was Champions League only. LIVERPOOL fourth on twenty-one.
// Refresh 2026-11-26 (Thursday morning pass, cloud). Re-fetched from ESPN: byte-identical; nothing moves before Sunday. LIVERPOOL fourth on twenty-one.
// Refresh 2026-11-26 (Thursday evening pass, cloud). Re-fetched from ESPN: byte-identical; no league football until Sunday's derby. LIVERPOOL fourth on twenty-one.
// Refresh 2026-11-27 (Friday morning pass, cloud). Re-fetched from ESPN: byte-identical; the derby on Sunday is the next league game. LIVERPOOL fourth on twenty-one.
// Refresh 2026-11-27 (Friday evening pass, cloud). Re-fetched from ESPN: Nottingham Forest 3-2 Chelsea tonight moves Forest to fourteenth on twelve and Sunderland to eighteenth. LIVERPOOL fourth on twenty-one.
// Refresh 2026-11-28 (Saturday morning pass, cloud). Re-fetched from ESPN: byte-identical; Brighton v Newcastle, United v Brentford and Leeds v Coventry at 3pm, Ipswich v Villa at 5.30pm today. LIVERPOOL fourth on twenty-one.
export const STANDINGS = [
  { pos: 1, team: "Arsenal", p: 11, w: 9, d: 1, l: 1, gd: 10, pts: 28, qualification: "UCL" },
  { pos: 2, team: "Brighton", p: 11, w: 7, d: 1, l: 3, gd: 17, pts: 22, qualification: "UCL" },
  { pos: 3, team: "Manchester City", p: 11, w: 7, d: 1, l: 3, gd: 8, pts: 22, qualification: "UCL" },
  { pos: 4, team: "Liverpool", p: 11, w: 6, d: 3, l: 2, gd: 8, pts: 21, qualification: "UCL", highlight: true },
  { pos: 5, team: "Bournemouth", p: 11, w: 5, d: 3, l: 3, gd: 4, pts: 18, qualification: "UEL" },
  { pos: 6, team: "Brentford", p: 11, w: 4, d: 5, l: 2, gd: 9, pts: 17 },
  { pos: 7, team: "Leeds", p: 11, w: 4, d: 5, l: 2, gd: 5, pts: 17 },
  { pos: 8, team: "Chelsea", p: 12, w: 5, d: 1, l: 6, gd: -1, pts: 16 },
  { pos: 9, team: "Everton", p: 11, w: 4, d: 4, l: 3, gd: -2, pts: 16 },
  { pos: 10, team: "Tottenham", p: 11, w: 4, d: 3, l: 4, gd: 1, pts: 15 },
  { pos: 11, team: "Hull", p: 11, w: 3, d: 5, l: 3, gd: 2, pts: 14 },
  { pos: 12, team: "Aston Villa", p: 11, w: 3, d: 5, l: 3, gd: -3, pts: 14 },
  { pos: 13, team: "Newcastle", p: 11, w: 3, d: 4, l: 4, gd: -3, pts: 13 },
  { pos: 14, team: "Nott'm Forest", p: 12, w: 3, d: 3, l: 6, gd: -5, pts: 12 },
  { pos: 15, team: "Coventry", p: 11, w: 4, d: 0, l: 7, gd: -8, pts: 12 },
  { pos: 16, team: "Fulham", p: 11, w: 2, d: 5, l: 4, gd: -2, pts: 11 },
  { pos: 17, team: "Ipswich", p: 11, w: 3, d: 2, l: 6, gd: -7, pts: 11 },
  { pos: 18, team: "Sunderland", p: 11, w: 2, d: 3, l: 6, gd: -9, pts: 9, qualification: "REL" },
  { pos: 19, team: "Manchester United", p: 11, w: 1, d: 5, l: 5, gd: -9, pts: 8, qualification: "REL" },
  { pos: 20, team: "Crystal Palace", p: 11, w: 2, d: 1, l: 8, gd: -15, pts: 7, qualification: "REL" },
];
// ─── Standings Commentary (refreshed alongside STANDINGS by the skill) ─────
// Hand-written by the skill on each daily run. `overview` is a 3-5 sentence
// paragraph that frames the table as a whole; `teams` is keyed by team name
// (matching STANDINGS[].team) and holds an optional one-line note per row.
// Only Liverpool + the most newsworthy rows need a note — empty teams render
// nothing beneath their row.
export const STANDINGS_COMMENTARY = {
  "source": "ESPN",
  "sourceUrl": "https://www.espn.com/soccer/table/_/league/eng.1",
  "matchweek": 11,
  "generatedAt": "2026-11-28T09:15:00Z",
  "overview": "Nothing has moved since Friday night, but Saturday afternoon can move it. Brighton, second on twenty-two with the league's best goal difference, host Newcastle at three o'clock and would go four points clear of Liverpool with a win before the derby (Newcastle United; ESPN). Brentford and Leeds, sixth and seventh on seventeen, play at Old Trafford and at home to Coventry at the same hour, and neither can pass Liverpool today. Arsenal remain six clear on twenty-eight and City third on twenty-two, while Liverpool, fourth on twenty-one, go to ninth-placed Everton at noon on Sunday.",
  "teams": {
    "Liverpool": "Fourth on twenty-one; Everton away at noon on Sunday, by which time Brighton will have played.",
    "Arsenal": "Top on twenty-eight, six clear of Brighton and City.",
    "Brighton": "Second on twenty-two; home to Newcastle at 3pm on Saturday, where a win puts them four clear of Liverpool.",
    "Manchester City": "Third on twenty-two, behind Brighton only on goal difference.",
    "Bournemouth": "Fifth on eighteen, three behind Liverpool.",
    "Brentford": "Sixth on seventeen; at Old Trafford on Saturday afternoon.",
    "Leeds": "Seventh on seventeen; home to Coventry on Saturday, and at Anfield on 12 December.",
    "Chelsea": "Eighth on sixteen from twelve games; Liverpool's hosts next Saturday.",
    "Everton": "Ninth on sixteen, five behind Liverpool; without the suspended Tarkowski for Sunday's noon derby.",
    "Newcastle": "Thirteenth on thirteen; at Brighton on Saturday afternoon.",
    "Sunderland": "Eighteenth on nine; at Anfield on Wednesday.",
    "Manchester United": "Nineteenth on eight; home to Brentford on Saturday.",
    "Crystal Palace": "Bottom on seven."
  }
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    "n": "01",
    "headline": "The Last Training Session.",
    "byline": "Particle / RotoWire",
    "dateline": "Kirkby · 28 November",
    "category": "Injuries",
    "body": "Saturday is the day the question gets answered, and by breakfast nobody had answered it. Victor Munoz missed Friday's session with the knee he hurt colliding with Spileers in Bruges, and Iraola's words were that he wanted to try today. RotoWire calls it a late fitness decision and notes it is his second knee problem of the season, after a knock at Brentford in October. Particle's early-morning summary says the club found no structural damage. If he cannot go, every preview already has the answer: Rio Ngumoha on the right, where he finished the night in Belgium."
  },
  {
    "n": "02",
    "headline": "Grealish, After All.",
    "byline": "The False 9 / Read Liverpool",
    "dateline": "Finch Farm · 27 November",
    "category": "Football News",
    "body": "Late on Friday the Everton team sheets in the previews changed by one name. The False 9, RotoWire and FotMob now start Jack Grealish on the left, behind Thierno Barry, with Tyrique George dropping out; only Playmakerstats still has George. Keane comes in beside Branthwaite for the banned Tarkowski, and Moyes did not pretend that is nothing: Tarky will be a miss, he said, because of his leadership. Chris Sutton, in his BBC column, thinks that same absence decides the game. It is his absence that swings it for me, he wrote, and he has Liverpool winning 2-1."
  },
  {
    "n": "03",
    "headline": "A Phone Call On Deadline Day.",
    "byline": "Anfield Index / Give Me Sport",
    "dateline": "Liverpool · 28 November",
    "category": "Transfers",
    "body": "The window has been shut for three months and the most persistent Liverpool link of the autumn has not gone away. Ben Jacobs, via Anfield Index on Saturday morning, reports that Liverpool remain keen on Monaco's Lamine Camara for January; they called him on deadline day, and Chelsea's own late attempt failed. His manager, Filipe Luis, has already made the case: we are probably talking about one of the best midfielders in the world, he said. With Gravenberch's heel undecided and Endo and Nyoni the cover, the interest is not hard to explain. It is interest, though, not a bid."
  },
  {
    "n": "04",
    "headline": "Five Away, None Lost.",
    "byline": "The False 9 / FotMob",
    "dateline": "Hill Dickinson Stadium · 27 November",
    "category": "Tactics",
    "body": "Away from Anfield this season Liverpool have been the harder side to beat. The False 9 counts five league away games unbeaten, four of them won, and notes that Everton have scored twelve league goals in eleven matches. FotMob's match page sets the two centre-forwards side by side: Isak on seven league goals from 6.17 expected, Barry on six from 7.40. One is converting a little more than his chances suggest, the other a little less. Sunday at noon will say which of those numbers is the honest one, and whether a home crowd at an early kick-off can make up the difference."
  },
  {
    "n": "05",
    "headline": "Three O'Clock At The Amex.",
    "byline": "Newcastle United / ESPN",
    "dateline": "Brighton · 28 November",
    "category": "Race for Europe",
    "body": "Liverpool will start Sunday knowing exactly where they stand, because the sides around them go first. Brighton, second on twenty-two with the best goal difference in the league, plus seventeen, host Newcastle at three o'clock this afternoon (Newcastle United; ESPN). A win would put them four clear of Liverpool before the derby. Brentford and Leeds, sixth and seventh on seventeen, are also out at three, at Old Trafford and at home to Coventry, and Ipswich host Villa at half past five. None of them can pass Liverpool today; Brighton can only stretch the gap."
  }
];
export const NEWS_DIGEST = {
  "generatedAt": "2026-11-28T09:15:00Z",
  "summary": "Derby eve, and the overnight previews have settled on one Liverpool eleven: The False 9, RotoWire and FotMob all start Ngumoha on the right of a 4-2-3-1, with Victor Munoz a late fitness decision after missing Friday's session with his knee knock (RotoWire). As of Saturday morning no outlet has reported whether Munoz trained today; Gakpo is out and Gravenberch's heel is still a doubt (101 Great Goals; Mirror via AOL). The same previews now put Grealish, not George, on Everton's left, with Keane in for the suspended Tarkowski (The False 9). Away from Sunday, Anfield Index reports, citing Ben Jacobs, that Liverpool remain keen on Monaco's Lamine Camara for January. Liverpool are fourth on twenty-one, and Brighton, second, host Newcastle this afternoon (ESPN; Newcastle United).",
  "keyTopics": [
    {
      "title": "Derby Eve: A Late Call On Munoz (Particle, today)",
      "category": "injuries",
      "detail": "Summarised early on Saturday: Liverpool will make a late call on Victor Munoz, whose knee showed no structural damage, while Gakpo misses out for two to three weeks. RotoWire, updated on Friday, notes it is his second knee problem of the season after a knock at Brentford in October; no Saturday session had been reported by this edition."
    },
    {
      "title": "Camara Still Wanted For January (Anfield Index, today)",
      "category": "transfers",
      "detail": "Reported on Saturday morning, citing Ben Jacobs of Give Me Sport: Liverpool remain keen on Monaco midfielder Lamine Camara, having called him on deadline day, and Chelsea's late attempt failed. Monaco's Filipe Luis: 'We are probably talking about one of the best midfielders in the world.'"
    },
    {
      "title": "Risser Named In Alisson Succession (AnfieldWatch, today)",
      "category": "transfers",
      "detail": "Published on Saturday, citing L'Equipe: Liverpool are in the running for Lens goalkeeper Robin Risser, 21, named Ligue 1's best goalkeeper last season, with PSG, Bayern, Inter and City also interested. Alisson's deal runs to the end of the season and Mamardashvili's future is unresolved."
    },
    {
      "title": "Mohya On The Radar (Anfield Index, today)",
      "category": "transfers",
      "detail": "Reported on Saturday, citing talkSPORT: Liverpool are among the clubs tracking Borussia Mönchengladbach's 17-year-old playmaker Wael Mohya, alongside Bayern, Brighton and Barcelona. talkSPORT's Andy Brassell: 'Straight away it's clear that he's a pretty special talent.' Monitoring, not a move."
    },
    {
      "title": "Brighton Can Go Four Clear Today (Newcastle United, today)",
      "category": "matches",
      "detail": "Scheduled for 3pm on Saturday: Brighton, second on twenty-two, host Newcastle before Liverpool play; United v Brentford and Leeds v Coventry are also at 3pm and Ipswich v Villa at 5.30pm (Newcastle United; sport-flash). No side below Liverpool can pass them today (ESPN)."
    },
    {
      "title": "Grealish Back In The Everton XI (The False 9, 1d ago)",
      "category": "matches",
      "detail": "Published late on Friday: The False 9, RotoWire and FotMob all start Grealish on the left of Everton's 4-2-3-1 behind Barry, with Keane beside Branthwaite; Playmakerstats (via Yahoo Sports) still has Tyrique George. Moyes: 'Tarky will be a miss because of his leadership.'"
    },
    {
      "title": "One Liverpool XI Across Four Previews (RotoWire; FotMob, 1d ago)",
      "category": "tactics",
      "detail": "Published between Thursday and Friday night: RotoWire, The False 9, FotMob and Playmakerstats name the same eleven, Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Mac Allister, Szoboszlai; Barcola, Wirtz, Ngumoha; Isak."
    },
    {
      "title": "Sutton: Tarkowski's Absence 'Swings It' (Read Liverpool, 1d ago)",
      "category": "matches",
      "detail": "Reported on Friday evening from his BBC column: Chris Sutton predicts a 2-1 Liverpool win, saying of the banned Everton captain: 'It is his absence that swings it for me because he is a real leader for Everton.' RotoWire also goes 2-1."
    },
    {
      "title": "Unbeaten In Five League Away Games (The False 9, 1d ago)",
      "category": "tactics",
      "detail": "From Friday night's preview: Liverpool are unbeaten in five away league games, four of them wins, and Everton have twelve league goals in eleven games. Playmakerstats (via Yahoo Sports) counts 248 meetings in all, 102 won by Liverpool and 68 by Everton."
    },
    {
      "title": "Isak And Barry, Goal For Goal (FotMob, 1d ago)",
      "category": "tactics",
      "detail": "Listed on FotMob's derby match page this week: Isak has seven league goals from 6.17 expected goals in ten appearances, Barry six from 7.40 in eleven, the visitor slightly ahead of his chances and the home striker slightly behind."
    },
    {
      "title": "Gravenberch 'In A Race Against The Clock' (Mirror via AOL, 1d ago)",
      "category": "injuries",
      "detail": "Published on Friday afternoon: the Mirror says Gravenberch's heel leaves him in a race against the clock for Sunday; 101 Great Goals calls him a doubt and Brit Brief says he is likely to miss out. The club lists him likely unavailable."
    },
    {
      "title": "Leoni And Bradley Training Again (Brit Brief, 1d ago)",
      "category": "injuries",
      "detail": "Reported on Friday evening: Leoni, out since an ACL injury in September 2025, and Bradley, out since a January knee injury, are both back in training but not available on Sunday; Ekitike's Achilles return is still aimed at January."
    }
  ],
  "sources": [
    "Particle",
    "RotoWire",
    "Anfield Index",
    "Give Me Sport",
    "AnfieldWatch",
    "L'Equipe",
    "talkSPORT",
    "Newcastle United",
    "sport-flash",
    "The False 9",
    "FotMob",
    "Playmakerstats",
    "Yahoo Sports",
    "Read Liverpool",
    "BBC",
    "Mirror",
    "AOL",
    "101 Great Goals",
    "Brit Brief",
    "ESPN"
  ]
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
  "generatedAt": "2026-11-28T09:15:00Z",
  "opponent": "Everton",
  "shortName": "Everton",
  "fixture": {
    "date": "2026-11-29T12:00:00",
    "venue": "Hill Dickinson Stadium, Liverpool",
    "home": false,
    "competition": "PL",
    "broadcast": "Premier League matchweek twelve, Sunday 29 November, 12pm GMT (7am ET), Hill Dickinson Stadium; TNT Sports in the UK (Read Everton)"
  },
  "manager": "David Moyes (ToffeeWeb; Wikipedia)",
  "formation": "4-2-3-1",
  "leaguePosition": 9,
  "summary": "Everton's Saturday is about the man they cannot pick: Moyes says Tarkowski 'will be a miss because of his leadership', and Keane is his replacement in The False 9's, RotoWire's and FotMob's XIs (The False 9). They are ninth on sixteen, five behind Liverpool (ESPN), five days on from a 4-0 at Brentford that The Stats Zone calls the heaviest defeat of Moyes's second spell. Twelve league goals in eleven games (The False 9) is a thin return for a side whose centre-forward, Barry, FotMob credits with 7.40 expected goals. Opta's supercomputer still gives them a thirty-two per cent chance (Opta Analyst). Off the pitch, The Athletic reports via Read Everton that Branthwaite's exit clause applies only in a summer window.",
  "shape": "The overnight previews have converged on a 4-2-3-1 with Grealish restored on the left: O'Brien at right-back, Keane and Branthwaite inside, Armstrong and Garner as the pivot, Röhl, Dewsbury-Hall and Grealish behind Barry (The False 9; RotoWire; FotMob). Playmakerstats, via Yahoo Sports, is the outlier with Tyrique George instead of Grealish. Barry remains the reference point, involved in six of Everton's last seven league goals (SI).",
  "keyPlayers": [
    {
      "name": "Thierno Barry",
      "role": "Centre-forward",
      "threat": "Six league goals from 7.40 expected goals (FotMob), ten in all competitions (Opta Analyst), and involved in six of Everton's last seven league goals (SI).",
      "source": "FotMob / Opta Analyst / SI"
    },
    {
      "name": "Kiernan Dewsbury-Hall",
      "role": "Attacking midfielder",
      "threat": "Two league goals and an assist by 18 October (Read Everton); named behind Barry in every Friday XI (Opta Analyst; SI; Khel Now).",
      "source": "Read Everton / Opta Analyst"
    },
    {
      "name": "Jack Grealish",
      "role": "Left winger",
      "threat": "Restored to the left in The False 9's, RotoWire's and FotMob's XIs after a forty-five-minute cameo at Brentford; Moyes has asked his wide players for more goals and assists (Read Everton).",
      "source": "The False 9 / Read Everton"
    },
    {
      "name": "Jarrad Branthwaite",
      "role": "Centre-back",
      "threat": "The senior centre-back with Tarkowski banned; valued above seventy million pounds (TEAMtalk via LiveScore), with an exit clause that applies only in summer (The Athletic via Read Everton).",
      "source": "TEAMtalk via LiveScore / Read Everton"
    }
  ],
  "predictedXI": [
    "Pickford",
    "O'Brien",
    "Keane",
    "Branthwaite",
    "Mykolenko",
    "Armstrong",
    "Garner",
    "Röhl",
    "Dewsbury-Hall",
    "Grealish",
    "Barry"
  ],
  "absentees": [
    {
      "name": "James Tarkowski",
      "issue": "Suspended: sent off at Brentford, the first game of a three-match ban (SI; The False 9)",
      "status": "Out"
    }
  ],
  "recentForm": [
    {
      "date": "2026-11-23",
      "opponent": "Brentford",
      "home": false,
      "score": "0-4",
      "result": "L",
      "note": "Lewis-Potter twice, then Janelt and Carvalho; Tarkowski sent off on forty (The False 9; ToffeeWeb)."
    },
    {
      "date": "2026-11-06",
      "opponent": "Coventry",
      "home": true,
      "score": "3-1",
      "result": "W",
      "note": "Barry scored twice and set up Dewsbury-Hall for the third (The False 9; Opta Analyst)."
    },
    {
      "date": "2026-11-02",
      "opponent": "Newcastle",
      "home": false,
      "score": "1-0",
      "result": "W",
      "note": "A Monday-night win at St James' Park (Read Everton; ESPN)."
    },
    {
      "date": "2026-10-24",
      "opponent": "Arsenal",
      "home": false,
      "score": "0-2",
      "result": "L",
      "note": "Premier League (ESPN)."
    }
  ],
  "liverpoolAngle": "If Grealish starts, Everton's craft comes down their left, straight at Araujo, a centre-back by trade who is the right-back in every Liverpool XI read (RotoWire; The False 9; FotMob). Frimpong is the only specialist behind him, and SQUAD_LOAD rates right-back high with Bradley training but not competitive. At the other end Keane for Tarkowski removes Everton's organiser, which is the absence Chris Sutton says swings it (Read Liverpool). Barry against Van Dijk and Jacquet is the duel that matters, with Gomez the only senior centre-back cover, and Liverpool's set pieces, where Szoboszlai has created thirteen chances (Opta Analyst), are the obvious lever.",
  "modelLine": {
    "source": "Opta supercomputer (Opta Analyst)",
    "liverpool": 42.7,
    "draw": 25.4,
    "opponent": 32,
    "note": "Published by Opta Analyst on 27 November. RotoWire and Chris Sutton (BBC, via Read Liverpool) both predict 2-1 to Liverpool, as Khel Now did."
  },
  "sources": [
    "The False 9",
    "RotoWire",
    "FotMob",
    "Playmakerstats via Yahoo Sports",
    "Read Liverpool",
    "Opta Analyst",
    "SI",
    "Read Everton",
    "The Athletic via Read Everton",
    "ESPN",
    "The Stats Zone",
    "ToffeeWeb",
    "Khel Now"
  ]
};
export const FORM_TRENDS = {
  "generatedAt": "2026-11-28T09:15:00Z",
  "competition": "PL",
  "played": 11,
  "headline": "Saturday adds no match, but it adds a cross-check. Planet Football's FotMob-sourced tables, published on 23 November, put Liverpool fourth in the league for expected-goal difference at plus 6.4, against plus 5.58 from the composite here across eleven games (18.99 for, 13.41 against). Isak's seven league goals from 6.17 expected (FotMob) say the finishing is in line with the chances, not running hot. Away from home the record is kinder still: five league away games unbeaten, four won (The False 9).",
  "diagnosis": [
    {
      "label": "Clean sheets, back to back",
      "severity": "positive",
      "source": "Opta Analyst / Liverpool FC",
      "detail": "United kept out on Sunday, Brugge on Wednesday: the first consecutive clean sheets in Iraola's eighteen games (Opta Analyst). Iraola: 'I don't think we conceded clear chances' (Liverpool FC)."
    },
    {
      "label": "Isak is finishing again",
      "severity": "positive",
      "source": "ESPN",
      "detail": "Two in Bruges take him to ten for the season (ESPN), and he has scored in each of his last three league away games, at Bournemouth, Brentford and Palace (ESPN)."
    },
    {
      "label": "The supply line runs Ngumoha to Wirtz",
      "severity": "positive",
      "source": "Opta Analyst / Sky Sports",
      "detail": "Ngumoha set up Wirtz's goal, his third Champions League assist of the season, and Wirtz has scored in three straight appearances (Opta Analyst), six times for club and country in November (Sky Sports)."
    },
    {
      "label": "Two creators lead the league",
      "severity": "positive",
      "source": "Opta Analyst",
      "detail": "Szoboszlai's thirteen chances from set pieces and Wirtz's twenty-nine from open play are both Premier League highs (Opta Analyst, 27 November): two different routes to goal, each led by one player."
    },
    {
      "label": "Open games, not yet a closed case",
      "severity": "medium",
      "source": "ESPN / Opta Analyst",
      "detail": "Ten conceded in the first four Champions League games (ESPN), nineteen shots allowed at Palace in the last eleven-a-side league game (ESPN), then none in Bruges against 1.15 expected goals (Opta Analyst). One controlled night against a side that had scored 2.75 a game in Europe this year (Opta Analyst) is a start, not a trend."
    },
    {
      "label": "The wings keep losing players",
      "severity": "high",
      "source": "RotoWire / Liverpool Echo via Yahoo Sports",
      "detail": "Munoz missed Friday's session and is a late fitness decision (RotoWire); Gakpo is out for 'normally two or three weeks' (Liverpool Echo via Yahoo Sports). Every derby XI read starts Barcola and Ngumoha, with Chiesa the senior cover."
    }
  ],
  "matches": [
    {
      "date": "2026-11-25",
      "opponent": "Club Brugge",
      "home": false,
      "score": "3-0",
      "result": "W",
      "competition": "UCL",
      "xgFor": 1.97,
      "xgAgainst": 1.15,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 13,
      "pending": false,
      "verdict": "Champions League, not counted in the league totals. Isak finished from close range on thirteen after Szoboszlai squared, Wirtz scored on seventy-nine from Ngumoha's pass and Isak chipped the third on eighty-two after shrugging off Mechele (Opta Analyst; ESPN). Opta Analyst gives Liverpool 1.97 expected goals from thirteen attempts and Brugge 1.15, with seventeen shots and five on target in its wording; that sentence is ambiguous about which side took the seventeen, so only Liverpool's thirteen is entered. A first clean sheet in five league-phase games. First-half splits are not published and stay null.",
      "source": "Opta Analyst / ESPN"
    },
    {
      "date": "2026-11-22",
      "opponent": "Manchester United",
      "home": true,
      "score": "4-0",
      "result": "W",
      "xgFor": 4.38,
      "xgAgainst": 0.64,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 28,
      "pending": false,
      "verdict": "Settled by the eighth minute, when Yoro brought Isak down as the last man and was sent off (ESPN). Szoboszlai scored the free kick on ten, Wirtz volleyed Ngumoha's cross on thirteen, Ngumoha finished Barcola's pass on sixty-six and Munoz Wirtz's return ball on eighty-two (ESPN). Opta Analyst gives 4.38 expected goals from twenty-eight shots and eleven on target, nine big chances to none, and United 0.64; ESPN has 0.63, ten United shots and three on target, and 64 per cent of the ball for Liverpool. The card keeps Opta's figures. First-half splits are not published and stay null.",
      "source": "Opta Analyst / ESPN (team stats) / Liverpool FC"
    },
    {
      "date": "2026-11-08",
      "opponent": "Crystal Palace",
      "home": false,
      "score": "3-1",
      "result": "W",
      "xgFor": 2.65,
      "xgAgainst": 2.39,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 20,
      "pending": true,
      "verdict": "A fourth league away win, and the most expected goals since Newcastle. Mac Allister headed in Szoboszlai's free kick on forty, Wirtz scored on a counter on fifty-four and Isak's deflected shot made it three on eighty-nine; Nketiah's penalty came with the last kick (ESPN; Sky Sports). The Transfer Hub's data piece gives Liverpool 2.65 expected goals, eighteen shots from inside the box, and Palace 1.60 before a penalty it values at 0.79; the card's 2.39 against is those two published figures added together, and Opta Analyst's numbers replace them when readable. ESPN's match stats: twenty shots to nineteen, eight on target to seven, 46.9 per cent of the ball. First-half splits are not published and stay null.",
      "source": "The Transfer Hub / ESPN (match stats) / Sky Sports"
    },
    {
      "date": "2026-11-04",
      "opponent": "Fenerbahçe",
      "home": false,
      "score": "2-3",
      "result": "L",
      "competition": "UCL",
      "xgFor": 1.55,
      "xgAgainst": 1.7,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 22,
      "pending": false,
      "verdict": "Champions League, not counted in the league totals. Ahead through Nyoni on twenty-five and Isak on sixty-nine, beaten by Greenwood's deflected free kick, Brown after a corner and Muriqi's header (ESPN; Opta Analyst). ESPN's team-stats page gives 1.55 expected goals to 1.70, of which set plays were 0.45 to 0.71, twenty-two shots to seventeen, six on target each and 68 per cent of the ball; FotMob, via SI, has 1.57 to 1.70 and twelve corners to four. The card keeps ESPN's figures so the parts add up. First-half splits are not published and stay null.",
      "source": "ESPN (team stats) / SI (FotMob) / Opta Analyst"
    },
    {
      "date": "2026-11-01",
      "opponent": "Arsenal",
      "home": true,
      "score": "0-1",
      "result": "L",
      "xgFor": 1.15,
      "xgAgainst": 0.96,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 18,
      "pending": true,
      "verdict": "The first league defeat since City on 11 October, and the third home league game without a goal after Fulham and City (Sports Mole). LiveScore's match stats give 1.15 expected goals to 0.96, 56 per cent of the ball and no Liverpool shot on target to Arsenal's three; Goal has 1.31 for Liverpool, and xGscore's model 1.05 to 1.00, with Arsenal's 0.82 to 0.45 in the first half. The card keeps LiveScore's full-match pair until Opta Analyst's figures are readable, and leaves the first-half cells null rather than mix models. Havertz scored on sixteen from Rice's cross after Alisson's short pass was intercepted (AP).",
      "source": "LiveScore / Goal / xGscore / AP / Sports Mole"
    },
    {
      "date": "2026-10-28",
      "opponent": "Chelsea",
      "home": true,
      "score": "1-1",
      "result": "W",
      "competition": "EFL",
      "xgFor": 1.52,
      "xgAgainst": 1.21,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 8,
      "pending": false,
      "verdict": "Carabao Cup, not counted in the league totals; won 6-5 on penalties. ESPN's team-stats page, read on Thursday, gives 1.52 expected goals to 1.21, of which Liverpool's open play was 0.16 and set pieces 0.57, Chelsea's 0.34 and 0.08; the balance of each total is the penalty, Gakpo's on forty-three and Rogers's on forty. Eight shots to nine, four on target to three, one big chance to none and 49 per cent of the ball on that page. ESPN's live commentary and Anfield Index counted ten shots to eleven, and 101 Great Goals carried a different model, 2.19 to 1.88; the card uses ESPN's team-stats figures throughout so the parts add up. First-half splits are not published and stay null.",
      "source": "ESPN (team stats) / 101 Great Goals / Anfield Index"
    },
    {
      "date": "2026-10-25",
      "opponent": "Brighton",
      "home": true,
      "score": "2-0",
      "result": "W",
      "xgFor": 0.87,
      "xgAgainst": 1.35,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 13,
      "pending": false,
      "verdict": "A first home league win since April (Football Muse via LiveScore), and a result the model did not predict: 0.87 expected goals to Brighton's 1.35 on FotMob's numbers, reported by SI and ESPN, from thirteen shots to seventeen, four on target to one, and 35.6 per cent of the ball (ESPN). Gross turned in Wirtz's low strike on seventeen and Isak finished Barcola's cross on twenty-one after Barcola charged down Boscagli's clearance (ESPN); Ayari hit the post. Opta Analyst's match page has been published but could not be read here, so FotMob's figures stand until Opta's replace them; first-half splits are not available and stay null.",
      "source": "SI (FotMob) / ESPN / Football Muse via LiveScore"
    },
    {
      "date": "2026-10-20",
      "opponent": "Villarreal",
      "home": true,
      "score": "4-3",
      "result": "W",
      "competition": "UCL",
      "xgFor": 2.37,
      "xgAgainst": 1.58,
      "xgFirstHalfFor": 0.83,
      "xgFirstHalfAgainst": 1.12,
      "shotsFor": 22,
      "pending": false,
      "verdict": "Champions League, not counted in the league totals. Two down by 28:08 to Mikautadze, after Van Dijk's header, and Cardona; level by half-time through Mac Allister's header from a Tsimikas corner and Araujo's from Ngumoha's cross; ahead through Mac Allister and the half-time substitute Wirtz on sixty-five and sixty-eight; Oluwaseyi scored on eighty-seven (Sky Sports). Opta Analyst gives 2.37 expected goals from twenty-two shots to 1.58 from fourteen; Sofascore has the first half 0.83 to 1.12, seven shots on target to five and 53 per cent of the ball.",
      "source": "Opta Analyst / Sofascore / Sky Sports"
    },
    {
      "date": "2026-10-17",
      "opponent": "Brentford",
      "home": false,
      "score": "2-1",
      "result": "W",
      "xgFor": 1.51,
      "xgAgainst": 0.85,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 21,
      "pending": false,
      "verdict": "A comeback against ten and then nine men. Brentford led through Lewis-Potter's header on forty-four; Yarmoliuk was sent off in first-half stoppage time (45+8); Muñoz equalised on sixty-two and Isak won it on seventy (Sky Sports). Twenty-one shots to ten, five on target to two, 60 per cent of the ball and nine corners to three (ESPN), and 1.51 expected goals to 0.85 on FotMob's model as reported by SI. Opta Analyst's match page, published on Saturday, carries Opta facts but no expected-goals figures, so FotMob's stand until Opta's are published; first-half splits are not available and stay null.",
      "source": "SI (FotMob) / ESPN / Sky Sports / Opta Analyst"
    },
    {
      "date": "2026-10-14",
      "opponent": "LASK Linz",
      "home": false,
      "score": "6-3",
      "result": "W",
      "competition": "UCL",
      "xgFor": 3.34,
      "xgAgainst": 2.02,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 26,
      "pending": false,
      "verdict": "Champions League, not counted in the league totals. Twenty-six shots to twelve and 3.34 expected goals to 2.02 on FotMob's model, 64 per cent of the ball (FotMob), nineteen of the shots in the first half, which Sky Sports calls a Champions League record for an away side. Six goals from four headers and close-range finishes, Barcola three of them; two more Koumas goals ruled offside and a Gravenberch shot against the post (Sky Sports). The two goals LASK's model would not have predicted came after sixty-two minutes, when both centre-backs were changed at once. Opta Analyst's page confirms the 3.34 from 26 and LASK's 2.02; Sofascore gives a 1.69-each second half, but no first-half figures are published directly and they stay null.",
      "source": "Opta Analyst / FotMob / Sofascore / Sky Sports"
    },
    {
      "date": "2026-10-11",
      "opponent": "Manchester City",
      "home": true,
      "score": "0-3",
      "result": "L",
      "xgFor": 0.86,
      "xgAgainst": 1.3,
      "xgFirstHalfFor": 0.42,
      "xgFirstHalfAgainst": 0.07,
      "shotsFor": 13,
      "pending": false,
      "verdict": "The first league defeat of the season, and a game of two halves in the literal sense of a red card. Before Gravenberch's second booking on sixty-two Liverpool led twelve shots to four and 0.79 expected goals to 0.17 (Sports Mole), and Donnarumma made six saves across the afternoon (ESPN). After it City scored three in sixteen minutes: Haaland 2:37 after the dismissal, Doku off the bench, Cherki at the end of a 41-pass move (Opta Analyst). Liverpool finished on 0.86 expected goals, only 0.38 from open play (Opta Analyst), to City's 1.30, with first-half figures of 0.42 to 0.07 (Sofascore); thirteen shots to fifteen and 35 per cent of the ball (ESPN).",
      "source": "Opta Analyst / Sofascore / ESPN / Sports Mole"
    },
    {
      "date": "2026-09-20",
      "opponent": "Bournemouth",
      "home": false,
      "score": "1-0",
      "result": "W",
      "xgFor": 1.57,
      "xgAgainst": 0.76,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 12,
      "pending": false,
      "verdict": "A first away league win of the season, and the shape of it was a slow burn rather than a control job. Squawka's Opta-fed post-match page gives Liverpool 1.57 expected goals to Bournemouth's 0.76, twelve shots to nine, three on target to two, one big chance each, and 54 per cent of the ball. Isak turned in a blocked cross on fifty-seven after Gakpo had beaten Truffert on the right and Wirtz had missed the delivery under pressure from James Hill. Alisson had denied Evanilson an improvised backheel flick on eighteen; Szoboszlai put one free-kick inches wide on ten and another wide before the break; Barcola's deflected curler was saved by Petrovic's legs; Hill blocked a second Isak shot after Gakpo released him. Gakpo created a joint-team-high three chances and won nine of sixteen duels. First-half splits are not published and stay null.",
      "source": "Squawka (Opta) / Opta Analyst / FotMob"
    },
    {
      "date": "2026-09-15",
      "opponent": "Tottenham",
      "home": true,
      "score": "3-1",
      "result": "W",
      "competition": "EFL",
      "xgFor": 1.53,
      "xgAgainst": 2.3,
      "xgFirstHalfFor": 0.7,
      "xgFirstHalfAgainst": null,
      "shotsFor": 12,
      "pending": false,
      "verdict": "Carabao Cup third round, not counted in the league totals, and now carried at published figures rather than nulls. Ten changes, Gomez captain, and a first domestic win since Ipswich. Mac Allister struck the opener into the top corner on 21 after moving beyond the midfield line; Gakpo lashed in the second shortly after the interval; Gallagher headed Spurs back into it from a corner before the 70th; Mamardashvili, in his first appearance of the season, made a significant late save; Szoboszlai, off the bench, volleyed the third from around thirty yards in stoppage time. Bergvall had tested Mamardashvili early and Koumas was denied by Dubravka. The data, published since: 1.53 expected goals to Tottenham's 2.30, twelve shots to seventeen, five on target to six, two big chances to three, 44 per cent of the ball, with Liverpool's first-half figure 0.70. The Transfer Hub's shot map values Szoboszlai's volley at 0.03 and Gallagher's header at 0.9. The second-half split is not published and stays null.",
      "source": "This Is Anfield / The Transfer Hub (shot map and xG timeline) / Goal"
    },
    {
      "date": "2026-09-12",
      "opponent": "Fulham",
      "home": true,
      "score": "0-0",
      "result": "D",
      "xgFor": 1.13,
      "xgAgainst": 0.71,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 14,
      "pending": false,
      "verdict": "Goalless, and the first blank under Iraola. Opta: 1.13 expected goals from 14 shots to 0.71 from 10, three on target to four, Fulham 24 touches in the box to 18. Jacquet cleared Garcia's shot off the line on 12 after Alisson's short pass; Munoz headed a corner against the bar on 22; Leno saved from Isak and Mac Allister; Alisson tipped King's curler wide on 76 and Muniz missed on 79. Tsimikas withdrawn at half-time, Gravenberch and Munoz on the hour. First-half splits not published.",
      "source": "Opta Analyst"
    },
    {
      "date": "2026-09-09",
      "opponent": "Atlético Madrid",
      "home": true,
      "score": "2-1",
      "result": "W",
      "competition": "UCL",
      "xgFor": 1.68,
      "xgAgainst": 0.81,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 14,
      "pending": false,
      "verdict": "Champions League, not counted in the league totals. Behind to Llorente on 17, level through Szoboszlai on 40 from Araujo's flick, ahead through Mac Allister's twenty-yard drive on 50. Opta: 1.68 expected goals from 14 shots to 0.81 from nine, Liverpool the deserved winners by their reading; Barcola missed two clear chances, Frimpong had a late third disallowed. First-half splits not published.",
      "source": "Opta Analyst"
    },
    {
      "date": "2026-09-04",
      "opponent": "Ipswich Town",
      "home": false,
      "score": "2-0",
      "result": "W",
      "xgFor": 0.53,
      "xgAgainst": 0.72,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 10,
      "pending": false,
      "verdict": "Now carried at Opta's figures. Squawka's Opta-fed gameweek-three table, published 11 September, gives Ipswich 0.72 against Liverpool's 0.53, replacing the FotMob pre-shot numbers this card previously held (0.73 to 0.66). The reading does not change, it hardens: two Isak shots in the sixth and ninth minutes, both from Gakpo through-balls, then ninety minutes of holding on against a side that created more. Liverpool had seven shots on target to five, and Sofascore's post-shot model still reverses the picture at 1.70 expected goals on target to 0.47, which is the gap between the chances made and the chances taken. A first lead and a first clean sheet of the season. First-half splits are not available.",
      "source": "Squawka (Opta) / Sofascore"
    },
    {
      "date": "2026-08-29",
      "opponent": "Nott'm Forest",
      "home": true,
      "score": "2-2",
      "result": "D",
      "xgFor": 1.61,
      "xgAgainst": 2.3,
      "xgFirstHalfFor": 0.25,
      "xgFirstHalfAgainst": 1.29,
      "shotsFor": null,
      "pending": false,
      "verdict": "Out-created at Anfield. Forest led twice, through Ndoye and a Gibbs-White penalty, and Liverpool needed Isak on the hour and Munoz at 82 to rescue it. Wirtz had a goal ruled out for an offside against Frimpong in the build-up. The Premier League's panel ruled on Wednesday that the penalty should not have been given, while backing the VAR's decision not to intervene.",
      "source": "Opta Analyst / Premier League KMI panel via This Is Anfield"
    },
    {
      "date": "2026-08-23",
      "opponent": "Newcastle",
      "home": false,
      "score": "2-2",
      "result": "D",
      "xgFor": 2.73,
      "xgAgainst": 1.43,
      "xgFirstHalfFor": null,
      "xgFirstHalfAgainst": null,
      "shotsFor": 27,
      "pending": false,
      "verdict": "27 shots and 2.73 xG at St James' Park against Newcastle's 1.43, most of theirs from the counter: both goals, Elanga's and Willock's, came from fast breaks. Rescued by a Szoboszlai penalty nine minutes into stoppage time after Gakpo had scored. First-half splits are not published for this match and stay blank.",
      "source": "Opta Analyst"
    }
  ],
  "totals": {
    "xgFor": 18.99,
    "xgAgainst": 13.41,
    "goalsFor": 18,
    "goalsAgainst": 10,
    "points": 21,
    "note": "Premier League only, eleven games. xG for is 4.38 (United, Opta Analyst) plus 2.73 (Newcastle) plus 1.61 (Forest) plus 0.53 (Ipswich) plus 1.13 (Fulham) plus 1.57 (Bournemouth) plus 0.86 (City) plus 1.51 (Brentford) plus 0.87 (Brighton) plus 1.15 (Arsenal) plus 2.65 (Palace); xG against is 0.64 plus 1.43 plus 2.30 plus 0.72 plus 0.71 plus 0.76 plus 1.30 plus 0.85 plus 1.35 plus 0.96 plus 2.39. The Palace figures are The Transfer Hub's (2.39 being its 1.60 non-penalty figure plus its 0.79 for the penalty), the Brentford and Brighton figures are FotMob's, reported by SI, the City card's 1.30 is Sofascore's and the Arsenal card is LiveScore's; Opta's own figures replace them when published. Provenance caveat from 21 September stands: Opta's published season expected-goals-against figure through five games was 6.12 rather than the 5.92 those per-match cards summed to. Champions League and Carabao Cup cards are shown but not aggregated. First-half splits exist only for Forest and City among the league cards (and for the Tottenham Carabao Cup card) and are not aggregated."
  },
  "optaFacts": [
    "Isak has seven Premier League goals from 6.17 expected goals this season; Barry has six from 7.40 (FotMob).",
    "Liverpool are unbeaten in their last five Premier League away games, winning four (The False 9).",
    "Everton have scored 12 Premier League goals in 11 games this season (The False 9).",
    "Liverpool have won 102 of 248 meetings with Everton in all competitions, Everton 68 (Playmakerstats via Yahoo Sports)."
  ],
  "sources": [
    "The Stats Zone",
    "Marca via CaughtOffside",
    "RotoWire",
    "AnfieldWatch via LiveScore",
    "Liverpool Echo via Yahoo Sports",
    "beIN Sports",
    "Legit.ng",
    "Opta via SI",
    "The Independent via LiveScore",
    "The Athletic via SI",
    "UEFA.com",
    "Read Liverpool",
    "Yahoo Sports",
    "Playmakerstats",
    "Opta Analyst",
    "Sofascore",
    "ESPN",
    "Sports Mole",
    "Sky Sports",
    "Goal",
    "Liverpool FC",
    "Squawka",
    "FotMob",
    "This Is Anfield",
    "Premier League",
    "SI",
    "The Transfer Hub",
    "BBC Sport",
    "Anfield Index",
    "Fantasy Football Scout",
    "LiveScore",
    "Eurosport",
    "PA",
    "Irish News",
    "AFP",
    "Flashscore",
    "theScore",
    "NBC Sports",
    "Rush The Kop",
    "AnfieldWatch",
    "The Stats Zone",
    "Brit Brief",
    "Roundtable via Yahoo Sports",
    "Express via AOL",
    "Football365",
    "TEAMtalk via LiveScore",
    "RotoWire",
    "Evening Standard",
    "YSscores",
    "Empire of the Kop",
    "FootballTransfers",
    "Yardbarker",
    "Premier Injuries",
    "DaveOCKOP",
    "Transfermarkt",
    "The False 9",
    "VAVEL",
    "Liverpool.com",
    "DAZN",
    "Football Muse via LiveScore",
    "BBC Sport via MyJoyOnline",
    "Dave.sport",
    "Liverpool Echo via Azat TV",
    "Sport Witness",
    "3 Added Minutes",
    "Sky Sports via The False 9",
    "Transfermarkt via Empire of the Kop",
    "Planet Football",
    "The Liverpool Offside via Yahoo Sports",
    "101 Great Goals",
    "Goal via Yahoo Sports",
    "ArsenalCore",
    "Premier League News Now",
    "AP",
    "OptaJoe via Sports Mole",
    "Telegraph via Yahoo Sports",
    "BBC Sport via Yahoo Sports",
    "xGscore",
    "Goal via Yardbarker",
    "BBC via Yahoo",
    "SportsView",
    "The Mag",
    "Liverpool Echo via Yahoo Sports",
    "BBC via Yahoo Sports",
    "Seoul Economic Daily",
    "AFP via Yahoo Sports",
    "All Out Soccer via Yahoo Sports",
    "Daily Mail via Anfield Index",
    "AFP via The Citizen",
    "RotoWire via theScore",
    "AP via ABC",
    "The L Files",
    "Stretty News",
    "SportzCraazy",
    "Anfield Index via Yahoo Sports",
    "Al Jazeera",
    "Man Utd News",
    "Statz",
    "Opta Analyst via Sports Mole",
    "The National",
    "Transfer News Live",
    "AfricaSoccer",
    "Lente Desportiva",
    "Evening Standard via AOL",
    "Heavy",
    "Read Man Utd",
    "Fox Sports",
    "SoccerNews",
    "Liverpool.com via Yahoo Sports",
    "Racing Post",
    "The Hard Tackle",
    "VoetbalFocus",
    "Last Word On Sports",
    "Read Everton",
    "Playmakerstats via Yahoo Sports",
    "Particle"
  ]
};
export const SQUAD_LOAD = {
  "generatedAt": "2026-11-28T09:15:00Z",
  "headline": "Saturday morning's only open question is the one Iraola left on Friday: whether Munoz's knee lets him train today. RotoWire calls him a late fitness decision, and no Saturday session had been reported by this edition. Gakpo is out and Gravenberch's heel is a race against the clock (Mirror via AOL), so the four previews read all start the same eleven, with Frimpong, Gomez, Nyoni, Endo and Chiesa among the senior bench.",
  "minutesNote": "Premier League minutes are not published here yet. Eleven league games, five Champions League games and two Carabao Cup ties have been played and no reliable per-player season minutes have been sourced, so this board tracks availability, starts, substitution times and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  "unavailable": [
    {
      "name": "Victor Munoz",
      "issue": "Knee: a big knock from a collision with Spileers in Bruges, off on forty-two (Liverpool FC; Opta Analyst)",
      "expected": "A late fitness decision for Everton (RotoWire); missed Friday's session and was due to try on Saturday (Liverpool FC)",
      "note": "No structural damage, Particle's Saturday summary says; RotoWire notes his second knee problem of the season after an October knock at Brentford. PLAYERS status doubtful.",
      "source": "RotoWire / Particle / Liverpool FC"
    },
    {
      "name": "Ryan Gravenberch",
      "issue": "Heel problem (early November), described as pain in the fascia (Sports News Blitz)",
      "expected": "Likely unavailable for Everton (Liverpool FC); Iraola: 'It's going to be difficult. I cannot say no'",
      "note": "The Mirror (via AOL) calls it a race against the clock; 101 Great Goals lists him a doubt, Brit Brief likely to miss out.",
      "source": "Liverpool FC / Mirror via AOL / 101 Great Goals / Brit Brief"
    },
    {
      "name": "Cody Gakpo",
      "issue": "Soleus (calf) injury on Netherlands duty",
      "expected": "Out of Everton away; 'this kind of injury is normally two or three weeks' (Iraola, Liverpool Echo via Yahoo Sports)",
      "note": "Iraola on Friday: 'Cody definitely not.' Picked up against Germany on Netherlands duty.",
      "source": "Liverpool Echo via Yahoo Sports / Liverpool FC"
    },
    {
      "name": "Hugo Ekitike",
      "issue": "Achilles rupture (April, surgery)",
      "expected": "'The plan has always been January' (Iraola); Sports Mole's possible return is 2 January at Coventry, the Echo names Lens on 27 January",
      "note": "Achilles ruptured against PSG in April.",
      "source": "Liverpool Echo via Yahoo Sports"
    },
    {
      "name": "Giovanni Leoni",
      "issue": "ACL (September 2025)",
      "expected": "Bournemouth in the Carabao Cup on 16 December named as a potential return (Liverpool Echo via Yahoo Sports); Sports Mole's possible return is 2 January at Coventry",
      "note": "Back in team training, 'two weeks on and off the group' (Iraola, via the Liverpool Echo); not available for the derby.",
      "source": "Liverpool Echo via Yahoo Sports"
    },
    {
      "name": "Conor Bradley",
      "issue": "Knee (surgery on bone and ligament damage, January)",
      "expected": "Bournemouth in the Carabao Cup on 16 December named as a potential return (Liverpool Echo via Yahoo Sports); the Evening Standard had earlier mentioned Sunderland on 2 December",
      "note": "Back in training but 'a few more weeks' from selection (Sports Mole); not available for the derby.",
      "source": "Liverpool Echo via Yahoo Sports / Evening Standard via AOL"
    }
  ],
  "returning": [
    {
      "name": "Jeremie Frimpong",
      "issue": "Muscle injury at Brentford on 17 October",
      "status": "Started at right-back in Bruges (Liverpool FC)",
      "note": "Part of the clean sheet in Bruges; Opta Analyst, SI and Khel Now all start Araujo ahead of him on Sunday.",
      "source": "Liverpool FC / Opta Analyst / SI"
    },
    {
      "name": "Ronald Araujo",
      "issue": "Knock in Uruguay's win in Buenos Aires, 13 November",
      "status": "Started at centre-back in Bruges (Read Liverpool)",
      "note": "Moved inside with Van Dijk rested.",
      "source": "Read Liverpool"
    },
    {
      "name": "Dominik Szoboszlai",
      "issue": "Knee sprain after Selhurst",
      "status": "Captained the side in Bruges (Read Liverpool)",
      "note": "Squared for Isak's opener (Opta Analyst).",
      "source": "Read Liverpool / Opta Analyst"
    },
    {
      "name": "Virgil van Dijk",
      "issue": "Unspecified fitness issue in the international break",
      "status": "Rested to the bench in Bruges (Liverpool FC)",
      "note": "Back in every derby XI read; no formal contract talks yet (Daily Mail via Anfield Index).",
      "source": "Liverpool FC / Read Everton"
    },
    {
      "name": "Trey Nyoni",
      "issue": "No injury",
      "status": "Started in Bruges (Liverpool FC)",
      "note": "One of Iraola's three changes.",
      "source": "Liverpool FC"
    },
    {
      "name": "Rio Ngumoha",
      "issue": "No injury",
      "status": "Took over on the right in Bruges after Munoz went off (Read Liverpool)",
      "note": "All four previews read start him on the right at Everton (RotoWire; The False 9; FotMob; Playmakerstats).",
      "source": "Read Liverpool / RotoWire / The False 9 / FotMob"
    }
  ],
  "startersLastMatch": {
    "match": "Club Brugge 0-3 Liverpool, 25 November (Champions League) · the confirmed XI, per Liverpool FC and Read Liverpool",
    "xi": [
      "Alisson",
      "Frimpong",
      "Araújo",
      "Jacquet",
      "Kerkez",
      "Nyoni",
      "Szoboszlai",
      "Munoz",
      "Wirtz",
      "Barcola",
      "Isak"
    ],
    "changes": "Three changes from United (Liverpool FC): Frimpong, Munoz and Nyoni in for Mac Allister, Ngumoha and Van Dijk, with Araujo moving to centre-back and Szoboszlai captain for the first time in a competitive match (Read Liverpool). Ngumoha came on for the injured Munoz (Opta Analyst); other substitution times not yet sourced. Bench: Mamardashvili, Woodman, Gomez, Van Dijk, Mac Allister, Tsimikas, Chambers, McConnell, Koumas, Ngumoha, Danns (Liverpool FC).",
    "source": "Liverpool FC / Read Liverpool / Opta Analyst"
  },
  "depthRisk": [
    {
      "position": "Centre-back",
      "level": "critical",
      "detail": "Critical. Van Dijk and Jacquet in all four previews read; with Araujo at right-back Gomez is the lone senior centre-back on the bench, and Leoni is training but not available (Brit Brief)."
    },
    {
      "position": "Wide forward",
      "level": "high",
      "detail": "High. Gakpo out and Munoz a late fitness decision (RotoWire): Barcola and Ngumoha start in all four previews read (RotoWire; The False 9; FotMob; Playmakerstats), Chiesa the senior cover."
    },
    {
      "position": "Right-back",
      "level": "high",
      "detail": "High. Araujo, a centre-back by trade, starts at right-back in all four previews, likely against Grealish; Frimpong the alternative, Bradley training but not competitive (Brit Brief)."
    },
    {
      "position": "Central midfield",
      "level": "high",
      "detail": "High. Gravenberch's heel a race against the clock (Mirror via AOL); Mac Allister and Szoboszlai the pivot in every preview, Nyoni and Endo behind them."
    },
    {
      "position": "Centre-forward",
      "level": "high",
      "detail": "High. Isak and Koumas the only senior nines; Ekitike's plan 'has always been January' (Liverpool Echo via Yahoo Sports)."
    },
    {
      "position": "Left-back",
      "level": "low",
      "detail": "Low. Kerkez in every derby XI read, Tsimikas the cover."
    }
  ],
  "sources": [
    "Live4Liverpool",
    "Marca via CaughtOffside",
    "Sports News Blitz",
    "RotoWire",
    "The Stats Zone",
    "Daily Mail via Anfield Index",
    "101 Great Goals",
    "3 Added Minutes",
    "Anfield Index",
    "AnfieldWatch",
    "AnfieldWatch via LiveScore",
    "AnfieldWatch via Yahoo Sports",
    "ArsenalCore",
    "Barça Universal",
    "Brit Brief",
    "CaughtOffside",
    "CaughtOffside via Yardbarker",
    "Daily Cannon via Yahoo Sports",
    "Dave.sport",
    "DaveOCKOP",
    "DAZN",
    "Empire of the Kop",
    "EPL Index via Yahoo Sports",
    "ESPN",
    "Evening Standard",
    "Evening Standard via AOL",
    "Express via AOL",
    "Fanatik",
    "Football Insider via AnfieldWatch",
    "Football Muse via LiveScore",
    "Football365",
    "FootballTransfers via LiveScore",
    "FotMob",
    "Get Spanish Football News via LiveScore",
    "Goal",
    "Goal via Yahoo Sports",
    "Hayters via Yahoo Sports",
    "Liverpool Echo via Azat TV",
    "Liverpool FC",
    "Liverpool FC via The False 9",
    "Liverpool.com",
    "LiveScore",
    "NBC Sports",
    "News Wires via Egyptian Gazette",
    "OG",
    "OneFPL",
    "Opta Analyst",
    "Premier Injuries",
    "Premier League News Now",
    "Read Liverpool",
    "RotoWire",
    "Roundtable via Yahoo Sports",
    "Rush The Kop",
    "SI",
    "Sky Sports",
    "Sky Sports via Goal",
    "Sofascore",
    "Sport Witness",
    "Sports Mole",
    "Squawka",
    "SSBCrack",
    "Sussex Express",
    "TEAMtalk via AnfieldWatch",
    "Telegraph via Yahoo Sports",
    "The Argus",
    "The Daily Briefing",
    "The False 9",
    "The Football Faithful",
    "The Hard Tackle",
    "The Liverpool Offside via Yahoo Sports",
    "VAVEL",
    "Yahoo Sports",
    "YSscores",
    "Evening Standard via Yahoo",
    "Daily Mail via DaveOCKOP",
    "Liverpool Echo via Yahoo",
    "Anfield Index via Yahoo",
    "The FA",
    "South London News",
    "AfricaSoccer",
    "The L Files",
    "LFC Globe",
    "Liverpool Echo via Yahoo Sports",
    "BBC via Yahoo Sports",
    "Evening Standard via Yahoo Sports",
    "SB Nation via Yahoo Sports",
    "The Independent via Yahoo Sports",
    "All Out Soccer via Yahoo Sports",
    "AFP via Yahoo Sports",
    "theScore",
    "GiveMeSport via LiveScore",
    "Football360",
    "AP via ABC",
    "Stretty News",
    "SportzCraazy",
    "Flashscore",
    "The Football Faithful via Yahoo Sports",
    "Empire of the Kop via Yahoo Sports",
    "Nemzeti Sport via Empire of the Kop",
    "M4 Sport via DaveOCKOP",
    "Football365 via LiveScore",
    "Khel Now",
    "Football Italia via LiveScore",
    "Hungarian Conservative",
    "Gulf News",
    "The Times via Anfield Index",
    "The Athletic via SI",
    "Rush The Kop via LiveScore",
    "TEAMtalk via LiveScore",
    "Heavy via Yahoo Sports",
    "beIN Sports",
    "BBC Sport via Yahoo Sports",
    "NewsBeep",
    "Sports Mole via LiveScore",
    "K24",
    "Afrik-Foot",
    "Al Jazeera",
    "Last Word On Sports",
    "Heavy",
    "The Independent",
    "SoccerNews",
    "UEFA.com",
    "The Sports Bank",
    "Read Everton",
    "TuFutbolero",
    "Particle",
    "Mirror via AOL",
    "Playmakerstats via Yahoo Sports"
  ]
};
export const SEASON_PROJECTION = {
  "generatedAt": "2026-11-28T09:15:00Z",
  "played": 11,
  "points": 21,
  "pointsPerGame": 1.91,
  "projectedPoints": 73,
  "projectedFinish": "Above Champions League par on current pace, and fourth in the table as of Saturday morning",
  "headline": "The pace is unchanged on Saturday morning: twenty-one points from eleven games is 1.91 a game, seventy-three over a season (ESPN). Brighton can stretch the gap above Liverpool to four this afternoon without touching that arithmetic. Eleven games is still a small sample; this is a pace, not a forecast.",
  "thresholds": [
    {
      "label": "Champions League (top 4)",
      "points": 68,
      "gap": 0,
      "note": "Historical par for the last Champions League place in recent seasons. Cleared by five on current pace; Liverpool are fourth as of Saturday morning, before Brighton host Newcastle (ESPN; Newcastle United)."
    },
    {
      "label": "Europa League (5th)",
      "points": 60,
      "gap": 0,
      "note": "Fifth-place par, where Bournemouth sit on eighteen. Cleared by thirteen on current pace."
    },
    {
      "label": "Conference League (6th-7th)",
      "points": 55,
      "gap": 0,
      "note": "Sixth to seventh place par, often decided by cup outcomes as much as league finish. Cleared by eighteen on current pace."
    },
    {
      "label": "Safety",
      "points": 38,
      "gap": 0,
      "note": "The conventional survival line, thirty-five below the current pace; on the board only to give the other numbers a floor."
    }
  ],
  "thresholdNote": "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  "runIn": [
    {
      "date": "2026-11-29",
      "opponent": "Everton",
      "home": false,
      "competition": "PL",
      "oppPosition": 9,
      "difficulty": "medium"
    },
    {
      "date": "2026-12-02",
      "opponent": "Sunderland",
      "home": true,
      "competition": "PL",
      "oppPosition": 18,
      "difficulty": "easy"
    },
    {
      "date": "2026-12-05",
      "opponent": "Chelsea",
      "home": false,
      "competition": "PL",
      "oppPosition": 8,
      "difficulty": "medium"
    },
    {
      "date": "2026-12-12",
      "opponent": "Leeds",
      "home": true,
      "competition": "PL",
      "oppPosition": 7,
      "difficulty": "medium"
    },
    {
      "date": "2026-12-19",
      "opponent": "Tottenham",
      "home": true,
      "competition": "PL",
      "oppPosition": 10,
      "difficulty": "medium"
    },
    {
      "date": "2026-12-26",
      "opponent": "Hull",
      "home": false,
      "competition": "PL",
      "oppPosition": 11,
      "difficulty": "medium"
    }
  ],
  "runInVerdict": "Everton tomorrow, Sunderland on Wednesday and Chelsea next Saturday make a week that could shape December. Seven points from the three would mean twenty-eight from fourteen, a pace of seventy-six; two points would leave Liverpool on twenty-three and exposed to Bournemouth, Brentford and Leeds behind them. Sunderland, eighteenth, are the one fixture of the three the table calls easy.",
  "sources": [
    "ESPN",
    "SI",
    "Empire of the Kop",
    "BBC Sport via MyJoyOnline",
    "Brit Brief",
    "The Athletic",
    "The False 9",
    "Sport Witness",
    "Sky Sports via The False 9",
    "Yahoo Sports",
    "Planet Football",
    "Opta Analyst",
    "DaveOCKOP",
    "dave.sport",
    "LiveScore",
    "Sports Mole",
    "VAVEL",
    "Sky Sports",
    "Goal",
    "Liverpool FC",
    "BBC via Yahoo Sports",
    "AP via ABC",
    "Anfield Index",
    "Stretty News",
    "Football Insider",
    "All Out Soccer via Yahoo Sports",
    "Dave.sport",
    "AfricaSoccer",
    "beIN Sports",
    "Liverpool Echo via Yahoo Sports",
    "Statz",
    "Brentford FC",
    "AFP via Yahoo Sports",
    "Last Word On Sports",
    "Read Everton",
    "Newcastle United"
  ]
};