// ─── Liverpool FC Player Data (2026-27 Season · Updated 5 October 2026 (evening)) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Tue Oct 6, evening - Five days to keep the run going, and the man in front of him may be intact after all: Zidane called Jacquet only slightly injured, and the reporting since leans toward Sunday.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Tue Oct 6, evening - Saved Isaac Price's eighty-fourth-minute penalty to hold Northern Ireland 0-0 in Belfast on Monday (Sky Sports); flies back to second place behind Alisson, with the Chelsea cup tie still his likeliest start.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Tue Oct 6, evening - Given a few days off after his Dutch window before training builds later in the week (Rush The Kop via LiveScore); who stands beside him on Sunday is the question the reporting now answers more hopefully.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Tue Oct 6, evening - Still the like-for-like cover if Jacquet's hamstring does not clear, though the evening's reports point the other way; fit all break and one game from 300 for the club.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Tue Oct 6, evening - Home since Sunday and resting with the returning internationals before the City build-up begins; Semenyo, if fit, is the winger he would face.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Tue Oct 6, evening - Nothing in the window's last day moves the knee; FotMob's early-January listing still stands, so he stays out of every reshuffle.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Tue Oct 6, evening - Given days off with the Dutch returners; his City role still depends on Jacquet's hamstring, now reported as a slighter problem than Monday suggested.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 19, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-23", injuryNote: "Tue Oct 6, evening - The Athletic's timetable has full group training the week after the break and an under-21 run-out before any first-team return; City comes too soon.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 21, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "doubtful", injuryNote: "Tue Oct 6, evening - Zidane called it a slight injury, the Liverpool Echo reports positive indications for Sunday and Rush The Kop expects him fit; the club has still published nothing from its own assessment, so he stays doubtful on this page.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Tue Oct 6, evening - On loan at Levante; the window's end and City week pass him by.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 32, name: "Kostas Tsimikas", number: 21, position: "DEF", nationality: "🇬🇷 Greece", age: 30, appearances: 6, goals: 0, assists: 1, cleanSheets: 1, xG: 0.2, tacklesPer90: 1.7, passCompletion: 79, progressiveCarries: 3.1, form: 5.8, status: "fit", injuryNote: "Tue Oct 6, evening - Back from Greece and given a few days off before training resumes in earnest; cover behind Kerkez on Sunday.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png",
    physical: { height: 178, weight: 76, pace: 79, acceleration: 80, sprintSpeed: 78 },
    career: [
      { years: "2017-2020", club: "Olympiacos", fee: null, type: "senior" },
      { years: "2020-", club: "Liverpool", fee: "€13M", type: "senior" },
      { years: "2025-26", club: "Roma", fee: null, type: "loan" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Tue Oct 6, evening - The last Liverpool player still abroad: with Argentina for Messi's farewell against Benin at the Monumental tonight, then the longest flight home of the squad before City.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Tue Oct 6, evening - Among the seven internationals Rush The Kop reports Iraola has given a few days off; the pivot alternative if Mac Allister's journey tells.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Tue Oct 6, evening - Back from Hungary and, like the rest, eased in before training intensifies; the left of the pivot for City.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Tue Oct 6, evening - Still listed for a January exit; an easing Jacquet doubt moves him a step further from Sunday's bench.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Tue Oct 6, evening - One of the seven given a breather at the AXA (Rush The Kop via LiveScore); the ten for City, and the alternative nine the Echo raises if Isak and Gakpo both miss.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 19, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Tue Oct 6, evening - Back from England's Under-21s; behind Gravenberch for a pivot place and unaffected by the window's last day.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 27, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "injured", outSince: "2026-09-27", injuryNote: "Tue Oct 6, evening - Day nine without a club grade on the ankle; the Echo's round-up still carries Elfrink's several weeks, so City and LASK look gone, Brentford the earliest realistic date.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "doubtful", injuryNote: "Tue Oct 6, evening - The Echo's round-up repeats Potter's line, not a big one, and the club's word minor; still no bulletin, so Koumas remains the named fallback for Sunday.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Tue Oct 6, evening - Unchanged: the Achilles calendar still reads November training in France and January at the club.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Tue Oct 6, evening - Back from England, cover on either flank while Gakpo's ankle stays ungraded.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 31, name: "Lewis Koumas", number: 67, position: "FWD", nationality: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", age: 21, appearances: 7, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.3, passCompletion: 77, progressiveCarries: 1.8, form: 6.3, status: "fit", injuryNote: "Tue Oct 6, evening - AnfieldWatch has him as the nine if Isak misses City, his cup man-of-the-match display against Tottenham the case for it.", image: "",
    physical: { height: 180, weight: 73, pace: 80, acceleration: 81, sprintSpeed: 79 },
    career: [
      { years: "2013-", club: "Liverpool", fee: null, type: "youth" },
      { years: "2024-25", club: "Stoke City", fee: null, type: "loan" },
      { years: "2025", club: "Birmingham City", fee: null, type: "loan" },
      { years: "2025-26", club: "Hull City", fee: null, type: "loan" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Tue Oct 6, evening - The Echo's round-up has him resuming training around the break; nothing from the club confirms it, and City comes too soon.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Tue Oct 6, evening - Third goalkeeper; Mamardashvili's penalty save in Belfast changes nothing about the order.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Tue Oct 6, evening - Back from Spain duty; the right of the attack for City while Gakpo is out.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Tue Oct 6, evening - An unused substitute as Uruguay beat India 6-1 in Kolkata after a lightning stoppage (Outlook India), so he comes home rested from the longest trip of the window; right-back for City, or inside if Jacquet does not make it.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 3, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Tue Oct 6, evening - Home from France; the Echo raises the idea of him playing centrally if Isak and Gakpo both miss, otherwise the left of the attack.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  generatedAt: "2026-10-06T22:30:00Z",
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
      "As of Tuesday evening, five days before Manchester City visit Anfield on 11 October, Zidane has described Jeremy Jacquet as only slightly injured and reports lean towards him facing City, while Ronald Araujo returns rested after sitting unused through Uruguay's 6-1 win in Kolkata.",
    subject: "Anfield at dusk, empty, floodlights on, mist over the pitch: an evergreen City-week cover to replace the hand-drawn plates.",
    prompt: "Wide cinematic photograph, 1600x900 landscape, of Anfield at dusk with nobody in it: the stands empty, the floodlights just switched on, a thin mist lying over a freshly mown, striped pitch, deep red seats falling away into shadow. Low camera on the touchline near the halfway line, looking across toward the Kop. Moody and editorial, fine film grain, muted palette of ink black, deep red (#C8102E) and warm ivory (#F4EBD0) highlights. Keep the LEFT third dark, quiet negative space (night sky or a shadowed stand) because the masthead type sits there. NO text, NO legible logos, crests or sponsor boards, NO players, people or faces.",
    aspectRatio: "landscape",
    slug: "anfield-dusk-city-week",
  },
};


// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Manchester City",
  shortName: "MCI",
  home: true,
  date: "2026-10-11T16:30:00",
  competition: "PL",
  venue: "Anfield",
  broadcast: "Sky Sports Main Event (4.30pm)",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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
// Last refresh: 2026-10-06 (Tuesday evening, ~6pm ET). Re-fetched from ESPN and byte-identical to the morning pull:
// the international break runs until the weekend of 10-11 October and no league match has been played since Sunday 20
// September. Manchester City first on fifteen, five from five; Arsenal second on twelve; Brighton third on ten; then four
// on nine, Brentford (fourth), Leeds (fifth), LIVERPOOL (sixth, highlighted) and Everton (seventh), split by goal
// difference and goals scored. Relegation stripe: Coventry, Fulham, Tottenham.
// Prior state, 2026-09-20 evening, AFTER Bournemouth 0-1 Liverpool: Isak's winner lifted Liverpool from tenth to sixth.
export const STANDINGS = [
  { pos: 1, team: "Manchester City", p: 5, w: 5, d: 0, l: 0, gd: 8, pts: 15, qualification: "UCL" },
  { pos: 2, team: "Arsenal", p: 5, w: 4, d: 0, l: 1, gd: 4, pts: 12, qualification: "UCL" },
  { pos: 3, team: "Brighton", p: 5, w: 3, d: 1, l: 1, gd: 11, pts: 10, qualification: "UCL" },
  { pos: 4, team: "Brentford", p: 5, w: 2, d: 3, l: 0, gd: 6, pts: 9, qualification: "UCL" },
  { pos: 5, team: "Leeds", p: 5, w: 2, d: 3, l: 0, gd: 4, pts: 9, qualification: "UEL" },
  { pos: 6, team: "Liverpool", p: 5, w: 2, d: 3, l: 0, gd: 3, pts: 9, highlight: true },
  { pos: 7, team: "Everton", p: 5, w: 2, d: 3, l: 0, gd: 3, pts: 9 },
  { pos: 8, team: "Hull", p: 5, w: 2, d: 2, l: 1, gd: 2, pts: 8 },
  { pos: 9, team: "Newcastle", p: 5, w: 2, d: 2, l: 1, gd: 0, pts: 8 },
  { pos: 10, team: "Chelsea", p: 5, w: 2, d: 1, l: 2, gd: -2, pts: 7 },
  { pos: 11, team: "Ipswich", p: 5, w: 2, d: 0, l: 3, gd: -4, pts: 6 },
  { pos: 12, team: "Manchester United", p: 5, w: 1, d: 2, l: 2, gd: 0, pts: 5 },
  { pos: 13, team: "Nott'm Forest", p: 5, w: 1, d: 2, l: 2, gd: -1, pts: 5 },
  { pos: 14, team: "Sunderland", p: 5, w: 1, d: 1, l: 3, gd: -4, pts: 4 },
  { pos: 15, team: "Crystal Palace", p: 5, w: 1, d: 1, l: 3, gd: -5, pts: 4 },
  { pos: 16, team: "Aston Villa", p: 5, w: 1, d: 1, l: 3, gd: -5, pts: 4 },
  { pos: 17, team: "Bournemouth", p: 5, w: 0, d: 3, l: 2, gd: -2, pts: 3 },
  { pos: 18, team: "Coventry", p: 5, w: 1, d: 0, l: 4, gd: -9, pts: 3, qualification: "REL" },
  { pos: 19, team: "Fulham", p: 5, w: 0, d: 2, l: 3, gd: -3, pts: 2, qualification: "REL" },
  { pos: 20, team: "Tottenham", p: 5, w: 0, d: 2, l: 3, gd: -6, pts: 2, qualification: "REL" },
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
  matchweek: 5,
  generatedAt: "2026-10-06T22:30:00Z",
  overview:
    "Nothing has moved since 20 September and nothing will until the weekend, which leaves the table as a set of questions about Sunday. Manchester City lead on fifteen from five with their striker reported only tired and their future in the division argued over in the papers; Arsenal are second on twelve and Brighton third on ten with the best goal difference. Brentford, Leeds, Liverpool and Everton share nine, separated by goal difference and goals scored, with Leeds holding the Europa stripe by a single goal. Liverpool, sixth and unbeaten, end the international window with the Jacquet doubt reported as slight, and their next four league opponents are the current top four; Coventry, Fulham and Tottenham fill the relegation places.",
  teams: {
    "Liverpool": "Sixth on nine and unbeaten in five; Jacquet now reported only slightly injured, Isak and Gakpo still ungraded before City.",
    "Manchester City": "Top on fifteen and perfect; Foden serves the last game of his ban at Anfield, O'Reilly and Semenyo still doubts.",
    "Arsenal": "Second on twelve, three behind City and top of Opta's expected-points model; Liverpool's visitors on 1 November.",
    "Brighton": "Third on ten with plus eleven, the division's best goal difference; Liverpool's visitors on 25 October.",
    "Brentford": "Fourth and unbeaten on nine; host Liverpool on 17 October.",
    "Leeds": "Fifth on nine, holding the Europa stripe by one goal of difference over Liverpool.",
    "Everton": "Level with Liverpool on points and goal difference, seventh on goals scored.",
    "Hull": "Eighth on eight, the most successful of the promoted sides so far.",
    "Chelsea": "Tenth on seven; at Anfield in the Carabao Cup on 28 October.",
    "Bournemouth": "Seventeenth and still winless after five, Isak's 1-0 the most recent defeat.",
    "Fulham": "Two points, one of them the goalless draw at Anfield.",
    "Tottenham": "Bottom on two, winless after five, like Fulham and Bournemouth.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Slightly Injured, And Five Days To Prove It.",
    byline: "Liverpool Echo via Yahoo Sports / Rush The Kop",
    dateline: "Kirkby · 6 October",
    category: "Injuries",
    body:
      "By Tuesday evening the language around Jeremy Jacquet had changed register. On Monday it was a strain, no timeline and a player sent home; by the end of the window it was Zidane's phrase, slightly injured, and a Liverpool Echo round-up reporting positive indications for Sunday (via Yahoo Sports), with Rush The Kop expecting him fit for City. None of it comes from Liverpool, which has published nothing from its own assessment. But the drift of the reporting matters: the back four that kept three straight league clean sheets may yet meet the leaders as it was built.",
  },
  {
    n: "02",
    headline: "Unused, In A Thunderstorm, In Kolkata.",
    byline: "Outlook India / Olympics.com / ESPN",
    dateline: "Kolkata · 6 October",
    category: "Football News",
    body:
      "The last international fixture of the window for a Liverpool player was stopped by lightning. Uruguay and India were level at one, Anirudh Thapa having answered Darwin Nunez's penalty, when the storm sent the players in; when they came back Uruguay scored five more, Maxi Araujo twice, to win 6-1 (Olympics.com, ESPN). Ronald Araujo, who has played every league minute at right-back for Liverpool, was named among the substitutes and did not come on, per Outlook India's coverage. He flies home rested, which on a week like this is the best news a long trip can bring.",
  },
  {
    n: "03",
    headline: "A Farewell At The Monumental, A Flight To Anfield.",
    byline: "Pulse Sports / VAVEL",
    dateline: "Buenos Aires · 6 October",
    category: "Farewells",
    body:
      "Lionel Messi's last match for Argentina is tonight at the Monumental against Benin, his two hundred and eighth cap, with every 2022 World Cup winner invited (Prothom Alo). Alexis Mac Allister, one of them, is in the squad and expected in midfield (Pulse Sports), the only Liverpool player still to play in this window. He was a fixture in Argentina's friendlies against Bolivia and Burkina Faso; now he has a ceremony, a kick-off at midnight British time, and the longest journey back to Merseyside of anyone in the squad, five days before he is due in the pivot against City.",
  },
  {
    n: "04",
    headline: "Eighty-Four Minutes In Belfast.",
    byline: "Sky Sports",
    dateline: "Belfast · 5 October",
    category: "Football News",
    body:
      "Georgia have not scored in this Nations League campaign, and on Monday night at Windsor Park they did not need to. Ruairi McConville's header hit the bar, the scramble produced a penalty, and Giorgi Mamardashvili guessed right against Isaac Price on eighty-four minutes to keep it 0-0 (Sky Sports). He had already denied Jamie Donley and Josh Magennis. At Liverpool he has one appearance this season, the cup tie against Tottenham, and Alisson's place is not in question; but a second goalkeeper who saves penalties in Belfast is a quieter kind of squad depth.",
  },
  {
    n: "05",
    headline: "No Talks, And A Year To Run.",
    byline: "Yahoo Sports / Rush The Kop",
    dateline: "Liverpool · 5 October",
    category: "Transfers",
    body:
      "Fabrizio Romano's line was short: there are currently no active negotiations between Liverpool and Alisson over a new contract (via Yahoo Sports). The goalkeeper's deal runs to June 2027 after the club took up its option, Rush The Kop notes Juventus watching, and Saudi clubs looked in the summer. He is thirty-four, vice-captain under Iraola and the keeper behind three straight league clean sheets. Nothing can happen until January, and probably nothing will then. But Van Dijk's deal ends in 2027 too, and the spine of this team is quietly running down its paper.",
  }
];

export const NEWS_DIGEST = {
  generatedAt: "2026-10-06T22:30:00Z",
  summary:
    "Tuesday evening, the last night of the international window, and Liverpool's centre-back doubt has eased in print if not yet in fact: Zinedine Zidane described Jeremy Jacquet as 'slightly injured', the Liverpool Echo reports positive indications for Sunday (via Yahoo Sports) and Rush The Kop expects him to be fit for Manchester City, though the club has still said nothing about its own assessment. Ronald Araujo, Liverpool's every-minute right-back, was an unused substitute as Uruguay beat India 6-1 in Kolkata after a lightning stoppage (Outlook India, Olympics.com), and Alexis Mac Allister, the last Liverpool player still abroad, is with Argentina for Lionel Messi's farewell against Benin at the Monumental tonight (Pulse Sports). Giorgi Mamardashvili saved Isaac Price's eighty-fourth-minute penalty to hold Northern Ireland 0-0 in Belfast on Monday (Sky Sports), and Fabrizio Romano says there are no active talks over a new Alisson contract, his deal running to June 2027 (via Yahoo Sports). Seven returning internationals, Van Dijk and Wirtz among them, have been given a few days off before training intensifies (Rush The Kop via LiveScore); Isak and Gakpo still have no club grade, and City's own list, per Sky Sports, still carries O'Reilly, Semenyo and the suspended Foden.",
  keyTopics: [
    {
      title: "Jacquet 'Slightly Injured', Reports Lean Towards Sunday (Liverpool Echo / Rush The Kop, today)",
      detail: "Reported through Tuesday: Zidane's description of Jacquet as slightly injured has been followed by a Liverpool Echo round-up citing positive indications for the City game (via Yahoo Sports) and Rush The Kop's view that he is expected to be fit. Football Muse (via Yahoo Sports) still has Liverpool awaiting the assessment, and the club has issued no update, so he remains a doubt here.",
      category: "injuries",
    },
    {
      title: "Araujo Unused As Uruguay Hit Six In Kolkata (Outlook India / Olympics.com, today)",
      detail: "Played on Tuesday: Uruguay beat India 6-1 at Eden Gardens after a thunderstorm halted play with the score 1-1; Nunez scored a penalty, Thapa equalised and Maxi Araujo struck twice (Olympics.com, ESPN). Ronald Araujo was among the substitutes and, per Outlook India's coverage, did not come on, so Liverpool's right-back returns from the window's longest trip without minutes in his legs.",
      category: "matches",
    },
    {
      title: "Mac Allister Lines Up For Messi's Farewell (Pulse Sports / Prothom Alo, today)",
      detail: "Tonight in Buenos Aires: Argentina play Benin at the Monumental in Lionel Messi's 208th and final international (Prothom Alo), with Mac Allister expected in midfield (Pulse Sports). He is the last Liverpool player still on international duty and faces the longest journey back before Sunday.",
      category: "matches",
    },
    {
      title: "Seven Internationals Given Days Off (Rush The Kop via LiveScore, today)",
      detail: "Reported on Tuesday: Van Dijk, Gravenberch, Frimpong, Wirtz, Koumas, Tsimikas and Kerkez, finished with their countries, will be given a few days off before intense training resumes later in the week, with the travel of Araujo and Mac Allister flagged as the concern.",
      category: "general",
    },
    {
      title: "Sky's Match Guide Lists City's Doubts Too (Sky Sports, today)",
      detail: "Published on Tuesday: Sky Sports' guide to Sunday's 4.30pm kick-off lists Isak, Gakpo and Jacquet for Liverpool and, for City, O'Reilly and Semenyo back early with injuries, Foden suspended and Haaland still described as needing assessment, a line The Times' fatigue report has since overtaken.",
      category: "matches",
    },
    {
      title: "Mansour Sale Talk If City's Appeal Fails (Football365 via LiveScore, today)",
      detail: "Carried on Tuesday: a UAE specialist quoted by Football365 suggests Sheikh Mansour could sell Manchester City if the appeal against the guilty verdict fails, citing reputational risk to Abu Dhabi; City maintain they have irrefutable evidence.",
      category: "general",
    },
    {
      title: "Mamardashvili Saves A Penalty In Belfast (Sky Sports, 1d ago)",
      detail: "Played on Monday night: Northern Ireland 0-0 Georgia, Mamardashvili guessing right against Isaac Price's eighty-fourth-minute penalty after McConville's header had hit the bar, having also denied Donley and Magennis (Sky Sports).",
      category: "matches",
    },
    {
      title: "Romano: No Active Talks Over Alisson's Deal (Yahoo Sports / Rush The Kop, 1d ago)",
      detail: "Reported on Monday: Fabrizio Romano says there are no active negotiations over a new Alisson contract; his deal runs to June 2027 after Liverpool triggered their option, and Rush The Kop notes Juventus monitoring. No move is possible before January.",
      category: "transfers",
    },
    {
      title: "Koumas The Named Nine If Isak Misses City (AnfieldWatch via LiveScore, this week)",
      detail: "AnfieldWatch's case for Koumas leading the line rests on his man-of-the-match cup display against Tottenham and Iraola's recent substitution patterns; the Echo round-up instead raises Barcola centrally or Wirtz pushed forward if both Isak and Gakpo miss.",
      category: "injuries",
    }
  ],
  sources: ["Liverpool Echo", "Yahoo Sports", "Football Muse", "Rush The Kop", "LiveScore", "Outlook India", "Olympics.com", "ESPN", "Pulse Sports", "Prothom Alo", "Sky Sports", "Fabrizio Romano", "AnfieldWatch", "Football365", "The Times"],
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
  generatedAt: "2026-10-06T22:30:00Z",
  opponent: "Manchester City",
  shortName: "MCI",
  fixture: {
    date: "2026-10-11T16:30:00",
    venue: "Anfield",
    home: true,
    competition: "PL",
    broadcast: "Sky Sports Main Event (4.30pm)",
  },
  manager: "Enzo Maresca",
  formation: "4-2-3-1",
  leaguePosition: 1,
  summary:
    "Manchester City end the international window with most of their worries off the pitch. On it, Haaland's withdrawal in Portugal was fatigue rather than injury according to The Times (via City Xtra), though Sky Sports' match guide on Tuesday still listed him as needing assessment, alongside O'Reilly and Semenyo, who both came home early, and Foden, who serves the last game of his ban at Anfield. Off it, the guilty verdict and the appeal lodged on 1 October hang over everything: Sky Sports reports rival clubs expect City out of the division if the appeal fails, a UAE specialist quoted by Football365 suggests Sheikh Mansour could sell in that case, and Maresca addresses his players together for the first time since the ruling on Thursday (The Times via Read Man City). They arrive first on fifteen, five from five, with PSG at the Etihad three days after Anfield (Goal), and Opta's expected-points table still has them 5.8 points better off than their chances warrant.",
  shape:
    "Maresca has kept the possession spine and loosened everything in front of it, which is why City look like a scoring machine and a defensive argument at the same time. The back four sits high with Gvardiol at left-back stepping into midfield and Matheus Nunes giving width on the right; Enzo Fernandez and Elliot Anderson screen in a double pivot that is more about ball progression than protection. Rayan Cherki plays between the lines and carries, with Antoine Semenyo and Iliman Ndiaye on the flanks and Haaland pinning the centre-backs. The pattern that beat Sunderland twice over and nearly cost them the afternoon is the same one: when the ball turns over in City's half, the space between that high line and Donnarumma is enormous, and Sunderland needed very little invitation to run into it three times on 20 September.",
  keyPlayers: [
    {
      name: "Erling Haaland",
      role: "Centre-forward",
      threat: "Fatigue, not injury: The Times' Paul Hirst reports that his sixty-seven-minute withdrawal in Portugal on Sunday, after he had signalled to the bench, was tiredness (via City Xtra), and Solbakken says he left the Norway camp straight after the game (Sports Mole). He has seven goals this season in all competitions (Goal), Squawka and Sports Mole credit him with five in the league, he scored against Sunderland before the break, and per Opta is the only player besides Harry Kane with more than one Premier League appearance to have scored against every club he has faced, twenty-five out of twenty-five. Against Liverpool he has three in six meetings, one of his leaner records.",
      source: "City Xtra (The Times) / Sports Mole / Squawka / Goal / Opta Analyst",
    },
    {
      name: "Rayan Cherki",
      role: "Attacking midfielder",
      threat: "Came on with thirteen minutes of normal time left in France's 4-1 win over Belgium on Monday and put France ahead on eighty-one minutes, four minutes after Doue's equaliser (beIN Sports, 101 Great Goals). On Friday his free-kick had been flicked on for Olise's deflected goal in France's 1-1 with Italy (Football Italia). Scored on twenty-nine minutes against Sunderland to restore City's lead before Brobbey levelled again (Sky Sports; City's five were Fernandez, Cherki, Semenyo twice and Haaland). He works the seam between a holding pair and the centre-backs, the grass FORM_TRENDS has flagged as Liverpool's least well covered, and a seam that gets wider if Liverpool's centre-back pairing changes on Sunday.",
      source: "beIN Sports / 101 Great Goals / Football Italia / Sky Sports / Opta Analyst",
    },
    {
      name: "Antoine Semenyo",
      role: "Wide forward",
      threat: "Withdrew from Ghana's Africa Cup of Nations qualifiers and the Morocco friendly with a swollen leg sustained in the 5-3 win over Sunderland, in which he scored twice; Sports Mole calls him a minor doubt for Anfield and notes he had played the full ninety in all five league games. Named on the Premier League's September Player of the Month shortlist alongside Liverpool's Isak and Jacquet, he spent his formative Premier League years at Bournemouth under Iraola, and with Omar Marmoush gone to Tottenham he doubles as Maresca's alternative to Haaland. Whichever flank he takes, if fit, is one Liverpool cover with a centre-half at right-back or a left-back the reporting has doubts about.",
      source: "Sports Mole / Yahoo Sports / Sky Sports",
    },
    {
      name: "Enzo Fernandez",
      role: "Central midfielder",
      threat: "Scored his first Manchester City goal against Sunderland on 20 September, per Sky Sports, from the deeper of the two midfield positions. He is half of the pivot that decides whether City's high line is protected or abandoned, and the eight-goal afternoon suggests the balance is not yet settled a week before Anfield.",
      source: "Sky Sports",
    },
    {
      name: "Gianluigi Donnarumma",
      role: "Goalkeeper",
      threat: "Made what Football Italia called a fantastic double save, first from Doue's curler and then from Dembele at point-blank range, to hold France to 1-1 on Friday, with Liverpool's Barcola among the substitutes he faced. At club level he conceded three at home to Sunderland on 20 September, the only blemish on a five-win start and the reason City's goal difference is plus eight rather than something more intimidating. Liverpool's problem this season has been converting what they create rather than creating it: seven goals from 7.57 expected across the first five league games, per Opta. A goalkeeper in this form behind a defence that has just shipped three is the matchup the City game turns on.",
      source: "Football Italia / ESPN / Opta Analyst",
    },
  ],
  predictedXI: [
    "Donnarumma", "Nunes", "Dias", "Guehi", "Gvardiol",
    "Fernandez", "Anderson", "Ndiaye", "Cherki", "Semenyo", "Haaland",
  ],
  absentees: [
    { name: "Phil Foden", issue: "Suspended: third game of a three-match domestic ban for violent conduct (red card, Manchester derby, 13 September)", status: "Out" },
    { name: "Jeremy Doku", issue: "Calf, sustained in the Community Shield; Maresca: 'he needs some more days' (Read Man City, 28 September)", status: "Doubt" },
    { name: "Nico O'Reilly", issue: "Unspecified minor issue: missed England training on 28 September and has since withdrawn from the England squad (Yahoo Sports, 1 October); back at City for assessment of an unspecified injury, no diagnosis given (Esteemed Kompany via Yardbarker, 4 October)", status: "Doubt" },
    { name: "Antoine Semenyo", issue: "Swollen leg from the Sunderland win; withdrew from Ghana's window, a minor doubt per Sports Mole (24 September)", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-20", opponent: "Sunderland", home: true, score: "5-3", result: "W", note: "Eight goals at the Etihad and a manager who refused to enjoy it. Enzo Fernandez opened with his first City goal and Rayan Cherki restored the lead on twenty-nine minutes, with Brian Brobbey equalising almost immediately on both occasions. Antoine Semenyo struck either side of the interval before Brobbey completed a hat-trick, and Haaland turned in a Gvardiol cross on eighty-one after a VAR check. Maresca afterwards: too many goals, too many goals, he would prefer to win 1-0." },
    { date: "2026-09-13", opponent: "Manchester United", home: false, score: "0-1", result: "W", note: "The Manchester derby at Old Trafford, settled by a single goal that was originally ruled out and awarded after a VAR review, per Opta's account of the sequence. A fourth straight win and the result that established City as the division's pacesetter." },
    { date: "2026-09-05", opponent: "Coventry City", home: true, score: "1-0", result: "W", note: "A narrow home win over the promoted side, and the only occasion this season on which Maresca's team has both kept a clean sheet and scored once. It is the scoreline he said on 20 September he would prefer." },
    { date: "2026-08-28", opponent: "Crystal Palace", home: false, score: "4-1", result: "W", note: "Four scored away from home at Selhurst Park, the clearest evidence of the attacking ceiling of this side, and the game that established the pattern of the season: plenty at one end, not always enough attention at the other." },
    { date: "2026-08-23", opponent: "Bournemouth", home: true, score: "2-1", result: "W", note: "Maresca's first league game in charge and the start of the perfect run, against the club Liverpool beat on 20 September. Bournemouth led, which was the first instalment of the record they carried into September." },
  ],
  liverpoolAngle:
    "The evening's reporting makes the matchup Liverpool hoped for more likely: if Jacquet's slight strain clears, as the Liverpool Echo and Rush The Kop now expect, the back four that kept three straight league clean sheets meets Haaland intact, with Araujo, unused in Kolkata, fresher at right-back than a Uruguay trip usually allows. If it does not, both fixes cost something against a centre-forward who pins centre-backs: Gomez beside Van Dijk loses recovery pace, while Araujo inside, as Sportsview suggests, leaves Frimpong or Gomez on the flank Semenyo, if fit, attacks. Liverpool's best weapon is the press: Opta has them allowing 9.1 passes per defensive action, the third-fewest in the league (Sky Sports), and City have led for 52.5 per cent of their minutes, more than anyone (Opta Analyst), so turnovers in City's half are the game's best route to goal. The standing weakness has not moved: nine fast-break goals conceded since the start of last season, the most in the league (Opta), and City won all three meetings last season (Manchester City).",
  modelLine: null,
  sources: ["Opta Analyst", "Sky Sports", "ESPN", "BBC Sport", "Liverpool FC", "Premier League", "beIN Sports", "Express & Star", "Read Man City", "Goal", "CaughtOffside", "Yahoo Sports", "Empire of the Kop", "Sports Mole", "Liverpool Echo", "LiveScore", "FourFourTwo", "Live4Liverpool", "Football365", "Football Insider", "Sport Witness", "Y Clwb Pel-droed", "Al Jazeera", "Bulinews", "Football Italia", "AP", "CBS Sports", "City Xtra", "The Guardian", "Rousing The Kop", "England Football", "The Hard Tackle", "Anfield Index", "The Overlap", "Man City News", "Manchester City", "Yardbarker", "Esteemed Kompany", "portugoal.net", "SportsDunia", "Heavy", "beIN Sports", "101 Great Goals", "Foot Mercato", "RMC Sport", "Sportsview", "The Times", "Squawka", "Get French Football News", "Archyde", "Football365", "LiveScore", "Liverpool Echo", "Outlook India"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-10-06T22:30:00Z",
  competition: "PL",
  played: 5,
  headline:
    "The clean sheets are the number most likely to survive the window intact. Three straight in the league, behind a press that allows 9.1 passes per defensive action, the third-fewest in the division per Opta (via Sky Sports), were built on the Van Dijk and Jacquet pairing, and Tuesday evening's reporting, Zidane's slightly injured and the Echo's positive indications, suggests that pairing may yet face City. The attacking ledger is unchanged and still thin: seven league goals from 7.57 expected, four of them Isak's, with Isak and Gakpo both ungraded. City, who have led for 52.5 per cent of their league minutes (Opta Analyst), are the first opponent able to test whether the defence or the attack is the truer reading of five games.",
  diagnosis: [
    {
      label: "Closing out a lead",
      detail: "Promoted from a warning to a piece of evidence, in Liverpool's favour for once. This entry has spent the season noting that Liverpool draw games they lead, and at the Vitality they took a lead on fifty-seven minutes at a ground where the hosts had scored first in every league game they had played, and then kept it for thirty-three minutes plus stoppage time against late pressure. Iraola's own description of the second half was that his side controlled the game much better and had chances to finish it. It is one instance against three drawn games, but it is the first instance.",
      severity: "positive",
      source: "Opta Analyst / Goal",
    },
    {
      label: "Fast-break concession, still unanswered",
      detail: "The warning stays at high because the fixture that was supposed to test it did not. Bournemouth made 0.76 expected goals and two shots on target, and the one genuine chance they created, Evanilson's backheel flick on eighteen, came from a cross rather than a counter. Opta still count nine fast-break goals conceded by Liverpool since the start of last season, the most in the league, and the next side to attack that space is Manchester City, whose own high line and turnover behaviour let Sunderland score three at the Etihad last time out. Two teams with the same fault, one fixture, a week away.",
      severity: "high",
      source: "Opta Analyst / Squawka",
    },
    {
      label: "The attack works, but only through one man",
      detail: "The still-ungraded ankle makes it acute: Gakpo, the side's most frequent creator at Bournemouth, is with the club's medical staff after the ankle injury Dutch reporting puts at several weeks (Liverpool FC / Inside Futbol), and Isak is still being assessed for a minor thigh problem (Sports Mole). Seven goals from 7.57 expected is a side scoring roughly what it makes, and four of those seven belong to Alexander Isak, against three in fourteen Premier League appearances across the whole of last season. The concentration is the pattern, not the total. The number-ten position behind him has produced no league goal and no league assist in six competitive games, and Opta's Bournemouth card is the clearest illustration: Florian Wirtz created a joint-game-high three chances and simultaneously returned a team-low 70.3 per cent passing accuracy from twenty-six of thirty-seven passes, fifty-three touches, two shots off target, and sixteen possessions lost, more than anyone bar Araujo. Carragher's reading of that spread was that the chances flatter an otherwise absent performance. The counter-reading is that a player creating three chances a game will eventually be on the right end of one.",
      severity: "high",
      source: "Opta Analyst / beIN Sports / Sports Mole / Liverpool FC / Inside Futbol",
    },
    {
      label: "The home draw, still the unresolved record",
      detail: "The Bournemouth win came away, which does not touch it. Liverpool have drawn four consecutive Premier League games at Anfield, the first such run since November 2011 per Opta, and the first time in the club's history they have drawn both opening home league games of a season. The next three home league fixtures are Manchester City, Brighton and Arsenal, in that order, which is an unhelpful sequence in which to still be looking for a first home league win.",
      severity: "high",
      source: "Opta Analyst / Liverpool FC",
    },
    {
      label: "A defence assembled from the wrong parts, working anyway",
      detail: "Three clean sheets in a row, the longest run since 2024, kept by a back four in which the right-back is a centre-half on loan and one centre-back is twenty-one and three months into English football. Jeremy Jacquet took the BBC's highest rating on the field at the Vitality, eight, after an early foul on Evanilson that his own manager described as the sort of thing the player then answered. The caveat is the opposition: Ipswich, Fulham and a winless Bournemouth. City on 11 October is the first real examination of it, and Jacquet may not be part of it: after two France caps, a clean sheet in Brussels and ninety minutes of Friday's 1-1 with Italy (Liverpool FC), he missed Monday's game against Belgium with a left hamstring strain, and the French federation sent him back to Liverpool for evaluation with no timeline (Get French Football News); by Tuesday evening Zidane was calling him slightly injured and the Liverpool Echo reported positive indications for Sunday (via Yahoo Sports), with no club confirmation.",
      severity: "medium",
      source: "BBC Sport / Opta Analyst / Liverpool FC",
    }
  ],
  matches: [
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
    },
  ],
  totals: {
    xgFor: 7.57,
    xgAgainst: 5.92,
    goalsFor: 7,
    goalsAgainst: 4,
    points: 9,
    note: "Premier League only, five games, Opta throughout. xG for is 2.73 (Newcastle) plus 1.61 (Forest) plus 0.53 (Ipswich) plus 1.13 (Fulham) plus 1.57 (Bournemouth); xG against is 1.43 plus 2.30 plus 0.72 plus 0.71 plus 0.76. Provenance caveat added 21 September: Opta's own published season figure for expected goals against, quoted by beIN Sports on 21 September, is 6.12 rather than the 5.92 these five per-match cards sum to. Both are Opta numbers and the tracker reports both rather than reconciling them, because the gap is a matter of which match-centre revision each was drawn from. The Champions League figures against Atletico (1.68 for, 0.81 against) and the Carabao Cup figures against Tottenham (1.53 for, 2.30 against) are shown on their own cards and are not aggregated here. First-half splits exist only for the Forest and Tottenham matches and are not aggregated."
  },
  optaFacts: [
    "Liverpool have kept three consecutive Premier League clean sheets, their longest run since 2024, with Van Dijk and Jacquet starting all three (Opta Analyst / BBC Sport).",
    "Mamardashvili saved Isaac Price's eighty-fourth-minute penalty in Northern Ireland 0-0 Georgia on Monday; Georgia have not scored in this Nations League campaign (Sky Sports).",
    "Liverpool have drawn four consecutive Premier League games at Anfield, the first such run since November 2011, and Manchester City are the next visitors (Opta Analyst)."
  ],
  sources: ["Opta Analyst", "beIN Sports", "Squawka", "Goal", "This Is Anfield", "FotMob", "The Transfer Hub", "EPL Index", "Liverpool FC", "BBC Sport", "Sofascore", "Premier League", "Sky Sports", "ESPN", "Inside Futbol", "Sports Mole", "Bulinews", "Al Jazeera", "The Football Faithful", "portugoal.net", "Foot Mercato", "DaveOCKOP", "TEAMtalk", "101 Great Goals", "Get French Football News", "Archyde", "Yahoo Sports", "Liverpool Echo"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-10-06T22:30:00Z",
  headline:
    "Tuesday evening, the window's last night, and the squad's one fresh question has a softer answer in the press than it had this morning: Zidane called Jeremy Jacquet slightly injured, the Liverpool Echo reports positive indications for City (via Yahoo Sports) and Rush The Kop expects him fit, with nothing yet from the club. Araujo came home from Kolkata without playing, Mamardashvili with a penalty save, and seven returning internationals have a few days off before training builds (Rush The Kop via LiveScore). Only Mac Allister, with Argentina for Messi's farewell tonight, is still away.",
  minutesNote:
    "Premier League minutes are not published here yet. Five league games, one Champions League game and one Carabao Cup tie have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Cody Gakpo", issue: "Left ankle, scissor-tackle by Sasa Lukic, Serbia 1-2 Netherlands (27 September)", expected: "No club grade as of Tuesday evening, nine days after the tackle, and still listed a doubt in Squawka's City preview; absent as the Netherlands beat Serbia 2-1 in Sunday's rematch (Liverpool FC). CaughtOffside's reading of the three-week estimate rules him out of City (11 October) and LASK (14 October), with Brentford (17 October) the earliest realistic return; the worst-case range reported on 28 September ran to eight to ten weeks", note: "The club has examined the ankle and said nothing about its grade, which leaves the Dutch reporting as the working number: Rik Elfrink's several weeks, confirmed as a withdrawal by the Dutch FA and Reuters. CaughtOffside's earlier piece sets out the fixtures a three-week absence would cost and argues there is no reason to rush an ankle. He made the Bournemouth winner from the right and led the line in the cup, so the absence costs a winger and the first cover at nine at once.", source: "CaughtOffside / Inside Futbol / Yahoo Sports / Liverpool FC" },
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "Club framing is January, with 'a reasonable chance' of the last two Champions League league-phase games (This Is Anfield); L'Equipe, via CaughtOffside on Thursday, reports team training targeted for November and matchday squads for December", note: "Friday's Blood Red newsletter repeats the French timeline, and it is still a French timeline rather than the club's. L'Equipe reports, via CaughtOffside, that Ekitike travelled to the United States to see a specialist who confirmed his rehabilitation is on track, that he has reached light trotting on the pitch, and that November team training and December matchday squads are the targets. Iraola's public line has been 'a hope and a realistic chance that he could help us in January'. Until either date arrives Isak, himself a doubt, is the only senior nine, with Koumas, who started for Wales on Thursday, the cover.", source: "Liverpool FC / This Is Anfield / CaughtOffside / L'Equipe" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "The Athletic, via CaughtOffside, expects him back by the end of October; the club has not confirmed group training", note: "The interest outside the club is moving faster than the knee. Standard Sport and La Gazzetta dello Sport report, via DaveOCKOP on Sunday, that Juventus have made several loan approaches and plan to scout him once he trains, and that Liverpool will not let him go a year into a six-year contract; Liverpool.com on Monday adds Chelsea to the race. On the pitch, the date in print is still The Athletic's end of October, a year on from the ACL rupture on his debut, and Iraola's pre-break plan was for him to start training with the group during this window. Nothing has confirmed that he has. A return by the end of the month points at the Chelsea cup tie, not City.", source: "The Athletic / CaughtOffside / Standard Sport / La Gazzetta dello Sport / DaveOCKOP / Liverpool.com" },
    { name: "Conor Bradley", issue: "Knee", expected: "No club date. FotMob's injury listing now carries early January 2027, later than the 21 November Sports Mole previously pencilled", note: "The break arrives and the timeline does not shorten with it. A fifth consecutive league game has gone by without him and Araujo has made right-back his own, so Bradley returns to no obvious vacancy. Lewis Steele reported individual training and ball work resuming, eight months on from the January knee injury against Arsenal, which is the first genuine forward step in months. Against that, FotMob has drifted his listing to early January 2027 and the club has said nothing beyond Iraola's 'probably Conor will go later'.", source: "Daily Mail / Liverpool FC / FotMob / Sports Mole" },
    { name: "Federico Chiesa", issue: "Lower back (originally muscle, Como friendly, August)", expected: "No return to group training confirmed; Sports Mole's 11 October availability target stands in print, unendorsed by the club", note: "Saturday's reporting moves him closer to the door than to the pitch. Sports Mole reports Inter, Atalanta and Lazio interested and Liverpool willing to consider a January exit to free squad space, and the BBC's Saturday gossip column led on him. He has not played since a muscle problem in the Como friendly in mid-August, his own end-of-September target for group training passed unconfirmed, and he is outside the Champions League squad. Iraola's line before the break was 'even Fede should be around those dates'; nothing since has confirmed it.", source: "Sports Mole / BBC Sport / Daily Mail / LiveScore" },
  ],
  returning: [
    { name: "Jeremy Jacquet", issue: "Left hamstring strain, felt in the France camp in the hours before France 4-1 Belgium (5 October)", status: "Doubt: club assessment unpublished; Zidane calls him slightly injured and Tuesday-evening reports lean towards Sunday", note: "By Tuesday evening the reporting had softened: Zidane described him as slightly injured, the Liverpool Echo cites positive indications for City (via Yahoo Sports) and Rush The Kop expects him to be fit, while Football Muse (via Yahoo Sports) still has the club awaiting its assessment. Before that, the French federation confirmed a strain to the left hamstring, set no recovery timeline and returned him to Liverpool for further evaluation (Get French Football News); Brit Brief reports the club assessing him before City. Earlier, Foot Mercato reported 'une tension a l'ischio-jambier gauche' felt in the final hours before kick-off, and RMC's Fabrice Hawkins said he was being rested; L'Equipe, via Get French Football News, called it not serious enough to leave the squad, and Julien Laurens a 'little' injury (Evening Standard via Yahoo Sports). Liverpool have said nothing yet. He has started all three of the straight league clean sheets beside Van Dijk; Sportsview's alternatives for City are Gomez, or Araujo inside with Frimpong at right-back.", source: "Liverpool Echo / Yahoo Sports / Rush The Kop / Get French Football News / Brit Brief / Foot Mercato / RMC Sport / CaughtOffside / Sportsview" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "Fully fit, not on international duty, and central to the break's plans", note: "Three weeks of internal football is exactly what a player eleven seasons and too many injuries into a career needs. Gomez is back in full training after the hamstring problem that cost him a month, a fourth senior centre-back and a specialist right-back, alongside Frimpong, in one body, and his next appearance in any competition will be his three hundredth for the club. Unused at Bournemouth, where the first-choice pair kept a third clean sheet without him; the fortnight of internal football is where a squad this thin at the back keeps him sharp.", source: "ESPN / BBC Sport / Liverpool FC" },
    { name: "Giorgi Mamardashvili", issue: "No injury; behind Alisson all season", status: "Back from Georgia after saving a penalty in Monday's 0-0 in Belfast", note: "Monday night ended the window on a high: in Northern Ireland 0-0 Georgia he guessed right against Isaac Price's eighty-fourth-minute penalty after McConville had hit the bar, and also denied Donley and Magennis (Sky Sports). Before that, Friday at the Puskas Arena had been the most Liverpool of his internationals: five saves by Rush The Kop's count, including Toth on 4, Szoboszlai on 23 and Barany on 62, a tip-over from Szoboszlai's twenty-five-metre shot on 59 that ended in a high-five between the two (Origo), and the only goal a header from Kerkez. It follows a goalless draw with Ukraine and a ninety-ninth-minute defeat by Northern Ireland. At the club he has one appearance this season, the cup tie against Tottenham and the late save that protected it, and the Chelsea tie at Anfield on 28 October is the realistic next start behind Alisson.", source: "Sky Sports / Origo / Rush The Kop / Liverpool FC / This Is Anfield" },
    { name: "Alexander Isak", issue: "Foot and toe (a forceful stamp against Romania, 25 September); a minor thigh problem also mentioned by Sweden's coach", status: "Doubt: home from Sweden, being assessed at the AXA; the club calls it minor", note: "As of Tuesday evening there has still been no club bulletin since the word minor; the Liverpool Echo's round-up repeats Potter's not a big one, and Squawka's City preview lists him a doubt; Friday's Blood Red newsletter had him being assessed for the game. Yahoo Sports describes a stamp on the foot that left a bloodied toe after ninety minutes against Romania; Sweden's coach spoke of a small thigh problem; the club calls it minor and City on 11 October the target. Glenn Hysen's advice from Sweden earlier in the week was not to take a chance. Koumas started for Wales on Thursday and drew a 7/10, so the fallback at least arrives with fresh minutes.", source: "Liverpool FC / Yahoo Sports / Sport Witness / Sports Mole" },
    { name: "Wataru Endo", issue: "No injury; available and on the transfer list from January", status: "Not on international duty; working at the AXA; a January exit expected", note: "A thirty-three-year-old working normally at a training ground that has already decided to sell him. Endo is among the senior group Iraola keeps through the break, and Liverpool closed out the Bournemouth lead without ever calling on an extra holding midfielder. The reporting stands: FSG will sanction a January exit, the last window in which a fee is recoverable on a 2027 contract, with Ben Jacobs's line that 'Iraola clearly doesn't fancy him'. The consequence for this page is dated rather than dramatic: from February the emergency fifth centre-back has no occupant unless Leoni's knee has held.", source: "CaughtOffside / Football365 / ESPN" },
    { name: "Milos Kerkez", issue: "No injury; competing with Tsimikas at left-back", status: "Released by Hungary on Sunday while suspended for Ukraine, which they won 2-1 without him on Monday; training at the AXA through City week", note: "Friday night gave him his first goal in thirty-five caps, a header past his club-mate Mamardashvili in a 1-0 win over Georgia (Liverpool FC, Origo), and a booking on seventy-four, his second of the competition, that suspends him for Monday. Hungary have released him rather than carry a player who cannot play, so he is home early (Sports Mole), with a full week under Iraola before City. At club level the BBC's Bournemouth verdict stands, targeted over the top and credited for effort, and Tsimikas, his understudy, played ninety minutes against Germany on Sunday. No market until January.", source: "Liverpool FC / Origo / BBC Sport / Sports Mole" },
  ],
  startersLastMatch: {
    match: "Bournemouth 0-1 Liverpool, 20 September (Premier League matchday five) · the confirmed XI, per ESPN and BBC Sport",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Mac Allister", "Szoboszlai", "Gakpo", "Wirtz", "Barcola", "Isak"],
    changes: "Three changes from the goalless draw at Fulham on 12 September, per the BBC, and a full reversal of the ten changes made for the cup tie against Tottenham. The 4-2-3-1 that every Sunday preview named was the shape used, with one deviation nobody predicted: Gakpo started on the right rather than the left, with Barcola on the left, where Adam Smith largely nullified him. Szoboszlai was booked shortly after half-time. Munoz replaced Barcola and Nyoni replaced Wirtz on seventy-two; Gravenberch replaced Szoboszlai and Koumas replaced Isak on eighty-one. Unused: Mamardashvili, Gomez, Tsimikas, Frimpong and Ngumoha.",
    source: "ESPN / BBC Sport / Opta Analyst",
  },
  depthRisk: [
    { position: "Right-back", level: "high", detail: "Still one fit senior specialist away from trouble, though the incumbent comes home rested: Ronald Araujo, a centre-half by trade, was an unused substitute as Uruguay beat India 6-1 in Kolkata on Tuesday after a lightning stoppage (Outlook India, Olympics.com), and is also the likeliest answer inside if Jacquet's assessment goes badly. He has started all five league games at right-back, and the BBC's Bournemouth verdict was that he defends it comfortably and offers little going forward. Conor Bradley's knee has no club date and FotMob lists early January 2027; Frimpong, unused by the Netherlands on Sunday, is the cup alternative; Gomez is fit at the AXA. Manchester City attack that flank with Semenyo, a minor doubt with a swollen leg (Sports Mole), and with Haaland, reported only tired rather than injured by The Times, drifting right when he runs the channel. January links to Benfica's Daniel Banjaqui (Anfield Watch via CaughtOffside) and Feyenoord's Givairo Read (TeamTalk) are projects, not September answers." },
    { position: "Centre-forward", level: "critical", detail: "Still critical on the window's last night: no club bulletin on Isak, the Liverpool Echo's round-up repeats Potter's minor-thigh line, AnfieldWatch names Koumas as the nine if he misses, Squawka lists him a doubt for City, and the weekend round-ups still aimed him at the game (World Today News). Lewis Koumas started at nine for Wales in a 2-1 win over Norway on Thursday and drew a 7/10 from Y Clwb Pel-droed, then started again on Sunday and was withdrawn after fifty-six minutes of a 1-0 home defeat by Denmark (Liverpool FC), and L'Equipe, via CaughtOffside, reports Ekitike targeting team training in November and matchday squads in December, unconfirmed by the club. Neither changes City: Isak, scorer of four of seven league goals, has had no bulletin on the foot and thigh the club calls minor, Gakpo, the first cover at nine, is reported out for several weeks, and Chiesa has not played since August. If Isak is not right, Koumas makes a full league debut against the leaders, or Munoz is tried centrally, as Rousing The Kop suggests. No market until January." },
    { position: "Centre-back", level: "high", detail: "High until the club says otherwise, though Tuesday evening's reporting is kinder: Zidane called Jacquet slightly injured, and the Liverpool Echo (via Yahoo Sports) and Rush The Kop lean towards him facing City. Jeremy Jacquet, Van Dijk's partner in three straight league clean sheets, felt a left hamstring strain in the France camp and missed the 4-1 win over Belgium (Foot Mercato, RMC Sport); the French federation gave no timeline and sent him back to Liverpool for further evaluation (Get French Football News), and the club is assessing him this week (Brit Brief). If he misses City, Sportsview's options are Gomez, fit all break and one game from three hundred for the club, or Araujo moved inside with Frimpong or Gomez at right-back. Behind them the cupboard is bare: Leoni is still not in group training after his ACL (The Athletic expects him back by the end of October), with Juventus pushing for a loan (AnfieldWatch via LiveScore), and Endo, the emergency fifth, is listed for January. Van Dijk's contract, which ends in 2027, is reported open to extension (Football Insider). No market until January." },
    { position: "Left-back", level: "high", detail: "Unchanged in level as of Tuesday, improved in preparation. Kerkez headed his first Hungary goal past Mamardashvili on Friday, then took a booking that suspended him for Monday's game against Ukraine, which Hungary won 2-1 without him (SportsDunia); released on Sunday (Liverpool FC, Sports Mole), he has the whole week at the AXA before City. Tsimikas played all ninety of Greece's 0-0 with Germany on Sunday (Liverpool FC), booked per Greek City Times. The last club game is still the evidence: Kerkez started against the club that sold him and the BBC's report says he struggled initially and was targeted over the top, praised for effort rather than quality. Two senior options, neither of whom the reporting rates at the manager's standard, no market until January, and Semenyo attacking that side on 11 October if his leg clears." },
    { position: "Wide forward", level: "critical", detail: "Critical, and the weekend's reporting thins it further on paper: Sports Mole has Inter, Atalanta and Lazio interested in Chiesa and Liverpool open to a January sale, so the one reinforcement in sight may yet be a departure. Gakpo's ankle, still ungraded, takes out the player who started on the right at Bournemouth and created three chances, leaving Barcola, Munoz and Ngumoha to cover both flanks against City, LASK and Brentford. Barcola came off the bench for France on Friday and drew a public defence from Thierry Henry, who said he 'did not choose his price' (Sports Mole); Ngumoha, named among England's substitutes for Saturday's 7-0 in Rijeka (England Football), was valued at £53.6m by the CIES Football Observatory this week (Liverpool Echo). No market until January." },
    { position: "Central midfield", level: "medium", detail: "Medium on availability. Szoboszlai captained Hungary for eighty minutes of Friday's 1-0 win over Georgia, replaced by Szucs (Yahoo Sports), then played most of Monday's 2-1 win over Ukraine in Trnava (VAVEL) after missing a Saturday session (Sport.ua via 112.ua); Gravenberch came on at half-time in Thessaloniki on Thursday, started and played an hour of Sunday's 2-1 over Serbia (Liverpool FC), and has not started any of Liverpool's last three league games, with AnfieldWatch asking whether he suits anything but a midfield three (via LiveScore). Mac Allister and Szoboszlai are the pivot; Mac Allister, with Argentina until 6 October, is running down a deal TEAMtalk reports the club is cooling on extending, and Sports Mole and Goal report interest in Inter's Aleksandar Stankovic, with Bournemouth said to have rebuffed enquiries for Alex Scott (AnfieldWatch via LiveScore). Endo is listed for January and Nyoni, nineteen and just promoted to England's Under-21s, is the other cover." },
  ],
  sources: ["Sports Mole", "Liverpool FC", "Liverpool Echo", "Rush The Kop", "This Is Anfield", "Liverpool.com", "Football Insider", "Nehanda Radio", "EPL Index", "Goal", "SI", "Rousing The Kop", "Squawka", "Opta Analyst", "Daily Mail", "Inside Futbol", "Yahoo Sports", "CaughtOffside", "FotMob", "LiveScore", "AnfieldWatch", "Sports Witness", "TEAMtalk", "Empire of the Kop", "Sport Witness", "The Hard Tackle", "101 Great Goals", "AP", "Y Clwb Pel-droed", "L'Equipe", "Al Jazeera", "Blood Red", "Origo", "The Athletic", "Sportsview", "BBC Sport", "Brit Brief", "Eurosport France", "World Today News", "England Football", "All Football", "Greek City Times", "Foot Mercato", "RMC Sport", "Get French Football News", "Sportsview", "Olympics.com", "ESPN", "The Times", "Outlook India", "Football Muse", "AnfieldWatch via LiveScore"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-10-06T22:30:00Z",
  played: 5,
  points: 9,
  pointsPerGame: 1.80,
  projectedPoints: 68,
  projectedFinish: "Champions League places on current pace",
  headline:
    "Nine points from five, 1.80 a game and sixty-eight over a season: a small sample that flatters a soft opening, four of the five games against sides now in the bottom half. The hard part starts on Sunday with the current top four in succession, and the window closes with the defence that earned seven of the nine points looking more likely to be intact, Jacquet's strain now described as slight.",
  thresholds: [
    { label: "Champions League (top 4)", points: 68, gap: 0, note: "Historical par for the last Champions League place in recent seasons, and exactly where five games of pace now lands. The live ESPN table this tracker rebuilds each run draws that stripe at fourth, so the label follows the table rather than the coefficient arithmetic. Holding it requires maintaining 1.80 points per game against a run of fixtures markedly harder than the one that produced it." },
    { label: "Europa League (5th)", points: 60, gap: 0, note: "Fifth-place par, and where the live table currently draws the Europa stripe, at Leeds, who are level with Liverpool on points and one goal better off. The present pace clears this line by eight points, which is a cushion built on five games and no more than that." },
    { label: "Conference League (6th-7th)", points: 55, gap: 0, note: "Sixth to seventh place par, often decided by cup outcomes as much as by league finish. It is the place Liverpool currently occupy in the table and thirteen points below the pace they are setting, which is the whole distance between where a season is and where it is heading. The live table carries no Conference stripe this early, because the berth is usually settled by a domestic cup, and Liverpool are in the Carabao Cup fourth round." },
    { label: "Safety", points: 38, gap: 0, note: "The conventional survival line, thirty points below the current pace. It is on the board only to give the other numbers a floor to be measured against." },
  ],
  thresholdNote:
    "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  runIn: [
    { date: "2026-10-11", opponent: "Manchester City", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 4, difficulty: "hard" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 3, difficulty: "hard" },
    { date: "2026-11-01", opponent: "Arsenal", home: true, competition: "PL", oppPosition: 2, difficulty: "hard" },
    { date: "2026-11-08", opponent: "Crystal Palace", home: false, competition: "PL", oppPosition: 15, difficulty: "medium" },
    { date: "2026-11-22", opponent: "Manchester United", home: true, competition: "PL", oppPosition: 12, difficulty: "medium" },
  ],
  runInVerdict:
    "Manchester City, Brentford, Brighton and Arsenal, in that order, with City and Brentford six days apart. A point on Sunday and four from the next three leaves fourteen from nine, about 1.56 a game and just under the Europa par; six from the four holds a Europa-band rate, and nine or more would make sixty-eight look earned. Whether Jacquet starts the first of them is the selection question the week is built around.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "BBC Sport", "Squawka", "This Is Anfield", "City Xtra", "The Guardian", "Manchester City", "The Times"],
};
