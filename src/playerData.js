// ─── Liverpool FC Player Data (2026-27 Season · Updated 27 October 2026 (evening)) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 34, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Wed Oct 28, morning - Matchday, and the newest preview found (The Liverpool Offside via Yahoo Sports) also starts Mamardashvili; Alisson the probable keeper for Arsenal on Sunday.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 26, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Wed Oct 28, morning - In goal in every Chelsea preview found, The Liverpool Offside's and The False 9's included; his last cup start was the 3-1 over Spurs in September.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Wed Oct 28, morning - Out of The Liverpool Offside's and The False 9's elevens as well, Jacquet and Gomez the pairing; one of seven first-team players whose deals end in 2027.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Wed Oct 28, morning - The Liverpool Offside plays him at right-back with Araujo moved inside; The False 9 keeps him central. In the side either way.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Wed Oct 28, morning - Rested in every preview found for tonight, Tsimikas at left-back; a cup booking would carry into a quarter-final (The Liverpool Offside via Yahoo Sports).", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 23, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Wed Oct 28, morning - Knee: one of six Liverpool names on Brit Brief's list of twelve who could miss tonight; Sports Mole has 22 November for a return, Rush The Kop December.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 25, appearances: 35, goals: 2, assists: 6, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "injured", outSince: "2026-10-17", injuryNote: "Wed Oct 28, morning - Hamstring from Brentford: not expected back until after the November international break (Brit Brief), and on its list of twelve for tonight.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 19, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-23", injuryNote: "Wed Oct 28, morning - ACL: Brit Brief does not expect him back until mid-November; team training is planned for the coming international break (The False 9).", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 21, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Wed Oct 28, morning - Centre-back in The Liverpool Offside's and The False 9's XIs, beside Araujo or Gomez; kept here.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Wed Oct 28, morning - Spending the season in Spain with Levante; not part of tonight's squad.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 32, name: "Kostas Tsimikas", number: 21, position: "DEF", nationality: "🇬🇷 Greece", age: 30, appearances: 6, goals: 0, assists: 3, cleanSheets: 1, xG: 0.2, tacklesPer90: 1.7, passCompletion: 79, progressiveCarries: 3.1, form: 5.8, status: "fit", injuryNote: "Wed Oct 28, morning - Left-back in every preview found for tonight, The Liverpool Offside's included; another of the 2027 expiries (AnfieldWatch via Yahoo Sports).", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png",
    physical: { height: 178, weight: 76, pace: 79, acceleration: 80, sprintSpeed: 78 },
    career: [
      { years: "2017-2020", club: "Olympiacos", fee: null, type: "senior" },
      { years: "2020-", club: "Liverpool", fee: "€13M", type: "senior" },
      { years: "2025-26", club: "Roma", fee: null, type: "loan" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Wed Oct 28, morning - Rested in The Liverpool Offside's and The False 9's XIs; named Real Madrid's top target for 2027-28 by Get Spanish Football News (via LiveScore), unconfirmed.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 24, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Wed Oct 28, morning - In the pivot with Nyoni (The Liverpool Offside) or Endo (The False 9); every preview found has him starting.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "injured", outSince: "2026-10-17", injuryNote: "Wed Oct 28, morning - Hamstring: on Brit Brief's list of twelve who could miss tonight, having missed the last two games; The Liverpool Offside expects him rested.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Wed Oct 28, morning - Beside Gravenberch in The False 9's pivot, at centre-back in two Tuesday previews; tonight would be a first appearance of the season.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 7, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "doubtful", injuryNote: "Wed Oct 28, morning - Ankle: the one Liverpool doubt Brit Brief expects to be available, so left off its twelve; The Liverpool Offside has him at ten, Empire of the Kop on the bench.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 19, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Wed Oct 28, morning - In the pivot beside Gravenberch in The Liverpool Offside's 4-2-3-1 and at ten in The False 9's; starts in every preview found.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 27, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Wed Oct 28, morning - On the right in The Liverpool Offside's XI; Opta Analyst counts ten EFL Cup goals for him since 2023-24, more than anyone in the competition.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 27, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Wed Oct 28, morning - Rested in every preview found; Opta Analyst has him second only to Haaland's nine in league goals, and scoring in three straight appearances.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Wed Oct 28, morning - Achilles: among Brit Brief's twelve for tonight, with a long road back; Premier Injuries' tracker says 2 January.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Wed Oct 28, morning - On the left in The Liverpool Offside's and The False 9's XIs, against the club that developed him.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 31, name: "Lewis Koumas", number: 67, position: "FWD", nationality: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", age: 21, appearances: 7, goals: 2, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.3, passCompletion: 77, progressiveCarries: 1.8, form: 6.3, status: "fit", injuryNote: "Wed Oct 28, morning - Leads the line in The Liverpool Offside's and The False 9's XIs, Isak rested.", image: "",
    physical: { height: 180, weight: 73, pace: 80, acceleration: 81, sprintSpeed: 79 },
    career: [
      { years: "2013-", club: "Liverpool", fee: null, type: "youth" },
      { years: "2024-25", club: "Stoke City", fee: null, type: "loan" },
      { years: "2025", club: "Birmingham City", fee: null, type: "loan" },
      { years: "2025-26", club: "Hull City", fee: null, type: "loan" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Wed Oct 28, morning - Out of The Liverpool Offside's and The False 9's elevens, which put Gakpo or Barcola on the right; a bench option tonight.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Wed Oct 28, morning - Not involved tonight unless Mamardashvili is hurt; the squad's third goalkeeper.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "doubtful", injuryNote: "Wed Oct 28, morning - Knee: expected to be rested (The Liverpool Offside via Yahoo Sports) after missing the last two games (Brit Brief).", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 1, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Wed Oct 28, morning - The Liverpool Offside moves him to centre-back and Gomez to right-back; The False 9 keeps him wide. A booking would still cost a quarter-final.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 7, goals: 3, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Wed Oct 28, morning - On the right in The False 9's XI, out of The Liverpool Offside's; a rotation option after starting against Brighton.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  generatedAt: "2026-10-28T08:30:00Z",
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
  opponent: "Chelsea",
  shortName: "Chelsea",
  home: true,
  date: "2026-10-28T20:00:00",
  competition: "EFL",
  venue: "Anfield, Liverpool",
  broadcast: "Carabao Cup fourth round (8pm GMT, 4pm ET; Sky Sports and ITV1 in the UK, per The False 9). Chelsea without the suspended Palmer, whose ban covers this tie only (Dave.sport)",
};
// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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
// Last refresh: 2026-10-28 (Wednesday morning, ~4am ET). Re-fetched from ESPN, byte-identical to Tuesday evening; no league game until Sunday.
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
export const STANDINGS = [
  { pos: 1, team: "Manchester City", p: 8, w: 7, d: 0, l: 1, gd: 11, pts: 21, qualification: "UCL" },
  { pos: 2, team: "Arsenal", p: 8, w: 7, d: 0, l: 1, gd: 8, pts: 21, qualification: "UCL" },
  { pos: 3, team: "Brighton", p: 8, w: 5, d: 1, l: 2, gd: 16, pts: 16, qualification: "UCL" },
  { pos: 4, team: "Liverpool", p: 8, w: 4, d: 3, l: 1, gd: 3, pts: 15, qualification: "UCL", highlight: true },
  { pos: 5, team: "Chelsea", p: 8, w: 4, d: 1, l: 3, gd: 2, pts: 13, qualification: "UEL" },
  { pos: 6, team: "Brentford", p: 8, w: 2, d: 5, l: 1, gd: 5, pts: 11 },
  { pos: 7, team: "Leeds", p: 8, w: 2, d: 5, l: 1, gd: 3, pts: 11 },
  { pos: 8, team: "Newcastle", p: 8, w: 3, d: 2, l: 3, gd: -2, pts: 11 },
  { pos: 9, team: "Aston Villa", p: 8, w: 3, d: 2, l: 3, gd: -3, pts: 11 },
  { pos: 10, team: "Hull", p: 8, w: 2, d: 4, l: 2, gd: 1, pts: 10 },
  { pos: 11, team: "Everton", p: 8, w: 2, d: 4, l: 2, gd: -1, pts: 10 },
  { pos: 12, team: "Ipswich", p: 8, w: 3, d: 1, l: 4, gd: -4, pts: 10 },
  { pos: 13, team: "Bournemouth", p: 8, w: 2, d: 3, l: 3, gd: -1, pts: 9 },
  { pos: 14, team: "Tottenham", p: 8, w: 2, d: 3, l: 3, gd: -2, pts: 9 },
  { pos: 15, team: "Fulham", p: 8, w: 2, d: 2, l: 4, gd: -2, pts: 8 },
  { pos: 16, team: "Manchester United", p: 8, w: 1, d: 4, l: 3, gd: -3, pts: 7 },
  { pos: 17, team: "Crystal Palace", p: 8, w: 2, d: 1, l: 5, gd: -10, pts: 7 },
  { pos: 18, team: "Nott'm Forest", p: 8, w: 1, d: 3, l: 4, gd: -4, pts: 6, qualification: "REL" },
  { pos: 19, team: "Coventry", p: 8, w: 2, d: 0, l: 6, gd: -9, pts: 6, qualification: "REL" },
  { pos: 20, team: "Sunderland", p: 8, w: 1, d: 2, l: 5, gd: -8, pts: 5, qualification: "REL" },
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
  "matchweek": 8,
  "generatedAt": "2026-10-28T08:30:00Z",
  "overview": "The league table is where Sunday left it, re-fetched from ESPN on Wednesday morning: Manchester City and Arsenal level on twenty-one, City ahead on goal difference, Brighton third on sixteen and Liverpool fourth on fifteen, two clear of Chelsea. What moved overnight was the cup. Arsenal, the champions, went out at Fleetwood of League Two, 1-1 and 5-3 on penalties (ESPN), and Max Dowman, sent off four minutes from time, is reported to face a three-match ban that begins at Anfield (The False 9). Tonight City host Brighton at half past seven and Liverpool meet Chelsea at eight (SI), before Sunday's game, the one that moves the table: a Liverpool win leaves them three behind Arsenal, a defeat nine. At the foot, Forest, Coventry and Sunderland are separated by a single point.",
  "teams": {
    "Liverpool": "Fourth on fifteen; Opta's supercomputer makes them 52.6 per cent to beat Chelsea in ninety minutes tonight (Opta Analyst), then Arsenal on Sunday.",
    "Manchester City": "Top on goal difference; Brighton at the Etihad in the cup at 7.30 tonight, SI predicting 2-1.",
    "Arsenal": "Level on twenty-one and out of the cup: beaten on penalties at Fleetwood after Guimarães's kick was saved (ESPN). Anfield on Sunday.",
    "Brighton": "Third on sixteen, the league's top scorers, and at City in the cup tonight (SI).",
    "Chelsea": "Fifth on thirteen; at Anfield tonight with Henderson, Liverpool's former captain, in the squad (Brit Brief) and Palmer suspended.",
    "Brentford": "Sixth on eleven; at Sunderland in the cup tonight (SI).",
    "Newcastle": "Eighth on eleven; Everton away in the cup on Thursday (SI).",
    "Crystal Palace": "Seventeenth on seven; Liverpool's next away league opponents, on 8 November.",
    "Manchester United": "Sixteenth on seven; third in FotMob's expected-goals table (Planet Football), and at Anfield on 22 November.",
    "Sunderland": "Bottom on five, a point behind Forest and Coventry; at Anfield on 2 December."
  }
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Twelve Names Short of a Full House.",
    byline: "Brit Brief / Opta Analyst",
    dateline: "Anfield · 28 October",
    category: "Injuries",
    body: "Brit Brief did the arithmetic before dawn on Wednesday: between them, Liverpool and Chelsea could be without twelve players tonight. Liverpool's six are Szoboszlai and Muñoz, who have missed the last two games, Frimpong, Ekitike, Bradley and Leoni; Chelsea's are Palmer, suspended, Martínez, Reece James and João Pedro, with Chavarría and Gittens major doubts. Wirtz is the name left off the list, expected to be available. Opta's supercomputer, running the tie ten thousand times, has Liverpool winning inside ninety minutes in 52.6 per cent of them and a shootout in 24.2 (Opta Analyst). The team sheets arrive at seven.",
  },
  {
    n: "02",
    headline: "The Champions Go Out at Highbury.",
    byline: "ESPN / The National / The False 9",
    dateline: "Fleetwood · 27 October",
    category: "Race for Europe",
    body: "It was the wrong Highbury for Arsenal. At Fleetwood's ground on Tuesday night Aaron Loupalo-Bi scored on twenty-one minutes, Gyökeres levelled five minutes after the break, and Jay Lynch saved Bruno Guimarães's penalty in a shootout Fleetwood won 5-3 (ESPN). Mikel Arteta called it a really sad day. Max Dowman, sixteen, was sent off four minutes from time, his second red card of the month (The National), and The False 9 reports a three-match ban that would start at Anfield. Arsenal arrive on Sunday with one competition fewer and, it seems, one teenager short.",
  },
  {
    n: "03",
    headline: "The Old Captain, in a Visiting Shirt.",
    byline: "Brit Brief",
    dateline: "Anfield · 28 October",
    category: "Farewells",
    body: "Jordan Henderson spent twelve years at Liverpool and eight of them as captain, and when he left in 2023 he wrote: 'I will always be a Red. Until the day I die.' Tonight he returns as a Chelsea player, signed as a free agent in the summer after Al-Ettifaq, Ajax and Brentford, four league starts into the season with two goals and an assist (Brit Brief). He says he is enjoying the challenge and uses the criticism as fuel. Whether he starts is Alonso's call; how Anfield greets him is the evening's other question.",
  },
  {
    n: "04",
    headline: "Alonso, Honest About the Goal Celebration.",
    byline: "Goal / Roundtable via Yahoo Sports / The Liverpool Offside via Yahoo Sports",
    dateline: "Cobham · 27 October",
    category: "Manager",
    body: "Xabi Alonso was asked the question old Liverpool midfielders are always asked before Anfield, and gave the answer they rarely do. 'Of course, I will celebrate, for sure,' he said of a Chelsea goal (Goal). He knew of Liverpool's interest in 2024 and decided to stay at Leverkusen. Emegha is in the squad, and of Welbeck and Estêvão he said every player can be playing (Roundtable via Yahoo Sports). He has not won at Anfield as a manager, beaten 4-0 with Leverkusen and 1-0 with Real Madrid (The Liverpool Offside via Yahoo Sports). Iraola, a close friend by the Liverpool Echo's account (via LiveScore), will be in the other dugout.",
  },
  {
    n: "05",
    headline: "Madrid Is Already Looking at 2027.",
    byline: "LiveScore / Get Spanish Football News / AnfieldWatch",
    dateline: "Liverpool · 28 October",
    category: "Transfers",
    body: "The window is shut and the morning roundups are already writing the next one. Get Spanish Football News, carried in LiveScore's Wednesday digest, says Real Madrid have made Alexis Mac Allister their top target for 2027-28, with Florentino Pérez and José Mourinho said to back it. AnfieldWatch has Liverpool favourites for Monaco's Lamine Camara at seventy million euros and reports a deal for Flamengo's scouting chief, Andriy Fedchenkov, to join in January when his contract ends. None of it is confirmed by Liverpool, and none of it can happen before the new year.",
  },
];
export const NEWS_DIGEST = {
  generatedAt: "2026-10-28T08:30:00Z",
  summary: "Matchday at Anfield: Liverpool host Chelsea in the Carabao Cup fourth round at eight tonight with as many as twelve players missing between the two sides, Szoboszlai, Muñoz, Frimpong, Bradley, Ekitike and Leoni on Liverpool's side of the ledger (Brit Brief, 4.15am), and Opta's supercomputer makes Liverpool 52.6 per cent to win inside ninety minutes, Chelsea 23.2 and a shootout 24.2 (Opta Analyst). Sunday's visitors had a night nobody predicted: Arsenal, the champions, went out at Fleetwood of League Two, 1-1 and 5-3 on penalties after Jay Lynch saved from Bruno Guimarães, and Max Dowman, sent off four minutes from time, is reported to face a three-match ban beginning at Anfield (ESPN; The National; The False 9). Jordan Henderson, Liverpool's captain for eight years, returns with Chelsea saying he will always be a Red (Brit Brief), and Alonso says that if his side score, 'of course, I will celebrate' (Goal). Wirtz is still expected to be available; the team sheets come at seven. Fourth on fifteen, Arsenal at Anfield on Sunday.",
  keyTopics: [
    {
      title: "Matchday: Twelve Players Could Miss Liverpool v Chelsea (Brit Brief, today)",
      category: "injuries",
      detail: "Published at 4.15am on Wednesday: Brit Brief counts six possible absentees on each side. Liverpool: Muñoz and Szoboszlai, who have missed the last two games, Frimpong (not expected back until after the November break), Ekitike, Bradley and Leoni. Chelsea: Palmer (suspended), Martínez, Reece James and João Pedro, with Chavarría and Gittens major doubts. Wirtz is left off the list, expected to be available. Kick-off 8pm, Sky Sports.",
    },
    {
      title: "Arsenal Out At Fleetwood, Dowman Facing A Ban At Anfield (ESPN / The National / The False 9, today)",
      category: "matches",
      detail: "From Tuesday night, reported overnight: League Two Fleetwood beat Arsenal 5-3 on penalties after a 1-1 draw, Loupalo-Bi scoring on twenty-one and Gyökeres on fifty, Jay Lynch saving from Bruno Guimarães (ESPN). Arteta: 'A really sad day for us.' The National, updated at 6.27am on Wednesday, says Arteta confronted Dowman, sent off four minutes from time for his second red card of the month; The False 9 reports a three-match ban that would start at Anfield on Sunday, with Saka out and Rice a doubt.",
    },
    {
      title: "Henderson Returns: 'I Will Always Be A Red' (Brit Brief, today)",
      category: "general",
      detail: "Published at 4.05am on Wednesday: Brit Brief recalls the line Henderson posted when he left in 2023 and his more recent words, 'I'm enjoying the challenge' and 'I just try and use it as fuel'. Twelve years at Liverpool, eight as captain; a free-agent signing for Chelsea this summer after Al-Ettifaq, Ajax and Brentford, with four league starts, two goals and an assist so far.",
    },
    {
      title: "Mac Allister Named Real Madrid's Top 2027-28 Target (Get Spanish Football News via LiveScore, today)",
      category: "transfers",
      detail: "From LiveScore's Wednesday roundup: Get Spanish Football News reports Madrid have made Mac Allister their top target for 2027-28, with Florentino Pérez and José Mourinho said to back a move. The same digest has AnfieldWatch calling Liverpool favourites for Monaco's Lamine Camara at seventy million euros next year. No club comment on either.",
    },
    {
      title: "A Scouting Chief From Flamengo, Due In January (AnfieldWatch via LiveScore, today)",
      category: "general",
      detail: "Also in Wednesday's LiveScore roundup: AnfieldWatch reports Liverpool have agreed a deal for Andriy Fedchenkov, Flamengo's head of scouting, to join in January when his contract expires, and that Crusaders' Michael Mulholland, seven goals at an Under-15 World Cup, is set to sign when he turns sixteen. Neither confirmed by the club.",
    },
    {
      title: "Alonso: 'Of Course, I Will Celebrate' (Goal / Roundtable via Yahoo Sports, 1d ago)",
      category: "matches",
      detail: "From Alonso's Tuesday press conference: asked about scoring at his old club, he said he would celebrate 'for sure', and that he was aware of Liverpool's interest in 2024 but decided to stay at Leverkusen (Goal). Roundtable, published via Yahoo Sports at 9pm on Tuesday, adds that Emegha is in the squad and that of Welbeck and Estêvão he said 'every player in the squad can be playing'.",
    },
    {
      title: "Iraola: 'Every Competition Is An Opportunity' (The Liverpool Offside via Yahoo Sports, 1d ago)",
      category: "tactics",
      detail: "Published at 4.47pm on Tuesday: the full line was 'especially when you are the coach of Liverpool.' The Liverpool Offside's XI is Mamardashvili; Gomez, Araújo, Jacquet, Tsimikas; Gravenberch, Nyoni; Ngumoha, Wirtz, Gakpo; Koumas, which moves Araújo inside and Gomez to right-back. It expects Szoboszlai and Muñoz to be rested, and notes Alonso has lost both his visits to Anfield as a manager.",
    },
    {
      title: "Opta Supercomputer: Liverpool 52.6 Per Cent In Ninety Minutes (Opta Analyst, 1d ago)",
      category: "matches",
      detail: "Opta Analyst's preview, published on Tuesday from ten thousand simulations: Liverpool win in 52.6 per cent, a draw and penalties in 24.2, Chelsea in 23.2. It adds that Gakpo has ten EFL Cup goals since 2023-24, more than anyone in the competition, and that Chelsea's cup ties over two seasons have produced thirty-one goals, the most of any side.",
    },
    {
      title: "SI Predicts 1-1 And A Liverpool Shootout Win (SI, 1d ago)",
      category: "matches",
      detail: "Published on Tuesday: SI's fourth-round predictions call Liverpool v Chelsea 1-1 with Liverpool through on penalties, Darren England refereeing, and note Chelsea have won only once at Anfield since their 2018 League Cup win there. The same piece predicted Arsenal 3-0 at Fleetwood.",
    },
    {
      title: "FotMob's Table: Liverpool Eighth For xG, Fourth For xG Against (Planet Football, 2d ago)",
      category: "tactics",
      detail: "Published on Monday after eight rounds, using FotMob's data: Liverpool 12.1 expected goals, eighth, and 9.6 against, fourth, a difference of 2.5 that ranks sixth. Chelsea are fourteenth for expected goals at 10.3 and tenth against at 11.4.",
    },
  ],
  sources: [
    "Brit Brief",
    "Opta Analyst",
    "ESPN",
    "The National",
    "The False 9",
    "Goal",
    "Get Spanish Football News",
    "LiveScore",
    "AnfieldWatch",
    "Roundtable",
    "Yahoo Sports",
    "The Liverpool Offside",
    "SI",
    "Planet Football",
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
  generatedAt: "2026-10-28T08:30:00Z",
  opponent: "Chelsea",
  shortName: "Chelsea",
  fixture: {
    date: "2026-10-28T20:00:00",
    venue: "Anfield, Liverpool",
    home: true,
    competition: "EFL",
    broadcast: "Carabao Cup fourth round (8pm GMT, 4pm ET; Sky Sports and ITV1 in the UK, per The False 9). Chelsea without the suspended Palmer, whose ban covers this tie only (Dave.sport)",
  },
  manager: "Xabi Alonso",
  formation: "3-4-2-1",
  leaguePosition: 5,
  summary: "Chelsea come to Anfield tonight on the back of a home defeat by Spurs, fifth on thirteen from eight (ESPN) and fourteenth in FotMob's expected-goals table at 10.3 (Planet Football), a side whose results have outrun its chances. Brit Brief's overnight count has six of them possibly missing: Palmer suspended, Martínez, Reece James and João Pedro out, Chavarría and Gittens major doubts. Alonso, who says he will celebrate if they score (Goal), has Welbeck and Estêvão available and Emegha, yet to play for the club, in the squad (Roundtable via Yahoo Sports), and Jordan Henderson, Liverpool's captain for eight years, comes back with two league goals and an assist from four starts (Brit Brief). They have won only once at Anfield since their 2018 League Cup win there (SI), but they are unbeaten in three meetings with Liverpool and their cup ties over two seasons have produced thirty-one goals, the most of any side (Opta Analyst). Darren England referees (SI).",
  shape: "Without Palmer or João Pedro, the Evening Standard expects a 3-4-2-1 built for running rather than holding: Acheampong, Colwill and Fofana in front of Penders, Gusto and Palestra as wing-backs, Lavia and Caicedo screening, Rogers and Estêvão between the lines behind Welbeck. Against Spurs Alonso tried Rogers as a false nine and it did not work, with 32 per cent of the ball (Goal; CaughtOffside), so a fixed nine in Welbeck is the likelier answer. The wing-backs are the outlet: Liverpool's full-backs will spend the night deciding whether to follow them.",
  keyPlayers: [
    {
      name: "Danny Welbeck",
      role: "Centre-forward",
      threat: "Five goals in twenty-eight appearances against Liverpool (Sports Mole) and two in the 6-3 third-round win over Leeds; the obvious starter with João Pedro out (The Chelsea Chronicle via LiveScore).",
      source: "Sports Mole / The False 9 / LiveScore",
    },
    {
      name: "Morgan Rogers",
      role: "Forward",
      threat: "Four league goals and an assist in eight appearances (ESPN); led the line against Spurs in João Pedro's absence (Goal).",
      source: "ESPN / Goal",
    },
    {
      name: "Pedro Neto",
      role: "Wing-back / wide forward",
      threat: "Three league goals and an assist in eight appearances (ESPN); 'arguably Chelsea's standout performer', rated 7 by Goal in the 0-2 against Spurs.",
      source: "ESPN / Goal",
    },
    {
      name: "Moisés Caicedo",
      role: "Defensive midfielder, captain",
      threat: "Captained the side against Spurs and was rated 7 by Goal, 'a tireless shift'; one of only two Chelsea players to reach that mark on Saturday (Goal).",
      source: "Goal",
    },
    {
      name: "Jordan Henderson",
      role: "Central midfielder",
      threat: "Two league goals and an assist from four Premier League starts since joining as a free agent in the summer (Brit Brief); twelve years and eight as captain at Liverpool, back at Anfield for the first time in Chelsea blue.",
      source: "Brit Brief",
    },
  ],
  predictedXI: [
    "Penders",
    "Acheampong",
    "Colwill",
    "Fofana",
    "Gusto",
    "Lavia",
    "Caicedo",
    "Palestra",
    "Rogers",
    "Estevão",
    "Welbeck",
  ],
  absentees: [
    { name: "Cole Palmer", issue: "Suspended: one-match ban for two bookings against Spurs, served in this tie only (Dave.sport).", status: "Out" },
    { name: "Emiliano Martínez", issue: "Fractured jaw, surgery; improving, back in a few weeks, mid-November at the earliest (Brit Brief).", status: "Out" },
    { name: "Reece James", issue: "Knee surgery, described by the club as minor; about three months, mid-January (Brit Brief).", status: "Out" },
    { name: "Jamie Gittens", issue: "Ankle, from England Under-21 duty: out until at least the weekend (Rush The Kop), a major doubt on Brit Brief's Wednesday list.", status: "Out" },
    { name: "João Pedro", issue: "Thigh: out 'for a few weeks' and not ready for the next games, Alonso said on Tuesday (Football London via AOL).", status: "Out" },
    { name: "Pep Chavarria", issue: "A major doubt on Brit Brief's Wednesday-morning list and on the Evening Standard's; Hato the likely left-back cover (Rush The Kop).", status: "Doubt" },
    { name: "Emmanuel Emegha", issue: "'Emmanuel is in the squad,' Alonso confirmed (Roundtable via Yahoo Sports); yet to play since his summer move from Strasbourg (Goal), so a debut from the bench is likelier than a start.", status: "Doubt" },
  ],
  recentForm: [
    {
      date: "2026-10-24",
      opponent: "Tottenham",
      home: true,
      score: "0-2",
      result: "L",
      note: "Penders' own goal from a Mateus Fernandes corner and a second from Tel after Palmer's dismissal for two bookings (LiveScore; Dave.sport). Chelsea had 32 per cent of the ball and 0.46 expected goals (Goal).",
    },
    {
      date: "2026-10-17",
      opponent: "Everton",
      home: false,
      score: "2-0",
      result: "W",
      note: "A clean sheet on Merseyside, but at a price: Martínez's jaw injury, which needed surgery (ESPN; Dave.sport).",
    },
    {
      date: "2026-10-10",
      opponent: "Bournemouth",
      home: true,
      score: "5-1",
      result: "W",
      note: "Their biggest win of the league season so far (ESPN).",
    },
    {
      date: "2026-09-18",
      opponent: "Brentford",
      home: false,
      score: "0-3",
      result: "L",
      note: "The heaviest of their three league defeats (ESPN).",
    },
  ],
  liverpoolAngle: "Chelsea's threat is wide and late, and tonight's Liverpool back four may be improvised on exactly that side. The Liverpool Offside's XI moves Araújo inside and Gomez to right-back, The False 9's keeps Araújo wide (via Yahoo Sports), and either way the right is played by someone covering for Frimpong and Bradley, both out (Brit Brief). Araújo and Kerkez are one cup booking from missing a quarter-final (The Liverpool Offside), which matters more against a side whose wing-backs drag defenders into duels. Going the other way, Gakpo has ten EFL Cup goals since 2023-24, more than anyone in the competition (Opta Analyst), and Penders, whose own goal began the Spurs defeat, will be tested early if he starts.",
  modelLine: {
    source: "Opta Analyst (Opta supercomputer, 10,000 simulations, published 27 October)",
    liverpool: 52.6,
    draw: 24.2,
    opponent: 23.2,
    note: "Probabilities for the result inside ninety minutes; the 24.2 per cent draw is the chance of a penalty shootout, and no separate figure for progressing is published. A model, not a market.",
  },
  sources: [
    "Brit Brief",
    "Opta Analyst",
    "SI",
    "Goal",
    "Roundtable via Yahoo Sports",
    "The Liverpool Offside via Yahoo Sports",
    "The False 9",
    "Planet Football",
    "CaughtOffside",
    "Evening Standard via AOL",
    "Rush The Kop",
    "ESPN",
    "Sports Mole",
    "LiveScore",
    "Dave.sport",
    "Football London via AOL",
    "The Chelsea Chronicle",
  ],
};
export const FORM_TRENDS = {
  generatedAt: "2026-10-28T08:30:00Z",
  competition: "PL",
  played: 8,
  headline: "A second model now reads the season the way this page's match cards do. FotMob's table after eight rounds, published by Planet Football on Monday, gives Liverpool 12.1 expected goals, eighth in the league, and 9.6 against, fourth, a difference of 2.5 that ranks sixth; the per-match cards here, mixing Opta, Squawka, FotMob and Sofascore, sum to 10.81 and 9.42. Both say the same thing: eleven goals to eight is a slightly better return than the chances, and the defence, not the attack, is where the underlying numbers are kindest. Tonight's cup tie does not count towards any of it.",
  diagnosis: [
    {
        "label": "A clean sheet that the model did not give them",
        "severity": "medium",
        "source": "Sports Mole / ESPN / SI (FotMob)",
        "detail": "Brighton was the first clean sheet in five (Sports Mole), earned on 35.6 per cent possession and 35 clearances to eighteen (ESPN; SI) while conceding 1.35 expected goals to 0.87 on FotMob's model (SI). Brighton put one shot on target. Arsenal, next in the league, will not be as generous, and four of the last five games have had three goals or more (Goal)."
    },
    {
        "label": "The fast start, at last",
        "severity": "positive",
        "source": "ESPN / Football Muse via LiveScore",
        "detail": "Both goals came between the seventeenth and twenty-first minutes, Barcola's charge-down of Boscagli's clearance making the second (ESPN). Iraola had asked for a 'strong start' (ESPN); five days earlier Villarreal had led at Anfield 2-0 inside half an hour (Opta Analyst)."
    },
    {
        "label": "Isak in the side, defeats out of it",
        "severity": "positive",
        "source": "Opta Analyst / ESPN",
        "detail": "Opta Analyst counted fifteen games unbeaten with Isak before Sunday; Brighton makes it sixteen, and he has scored in three consecutive league appearances, six in seven (ESPN)."
    },
    {
        "label": "Eighth for chances, fourth for prevention",
        "severity": "medium",
        "source": "Planet Football (FotMob)",
        "detail": "FotMob's season table has Liverpool's 12.1 expected goals eighth in the league and 1.1 above their eleven goals, and their 9.6 expected against fourth and 1.6 above the eight conceded (Planet Football, Monday). The attack is creating less than a top-four side usually does; the finishing gap is small enough to be noise. Chelsea, tonight's opponents, are fourteenth for expected goals at 10.3."
    },
    {
        "label": "Right-back by elimination",
        "severity": "high",
        "source": "SI (FotMob) / Brit Brief / The Liverpool Offside via Yahoo Sports",
        "detail": "Araújo, 7.9 against Brighton on FotMob (SI), is a centre-back at right-back because Frimpong and Bradley are out (Brit Brief). One preview for tonight moves him inside and puts Gomez wide instead (The Liverpool Offside), which changes the occupant but not the improvisation, and Araújo and Kerkez are each one cup booking from a quarter-final ban."
    }
  ],


  matches: [
    {
      date: "2026-10-25",
      opponent: "Brighton",
      home: true,
      score: "2-0",
      result: "W",
      xgFor: 0.87,
      xgAgainst: 1.35,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 13,
      pending: false,
      verdict: "A first home league win since April (Football Muse via LiveScore), and a result the model did not predict: 0.87 expected goals to Brighton's 1.35 on FotMob's numbers, reported by SI and ESPN, from thirteen shots to seventeen, four on target to one, and 35.6 per cent of the ball (ESPN). Gross turned in Wirtz's low strike on seventeen and Isak finished Barcola's cross on twenty-one after Barcola charged down Boscagli's clearance (ESPN); Ayari hit the post. Opta Analyst's match page has been published but could not be read here, so FotMob's figures stand until Opta's replace them; first-half splits are not available and stay null.",
      source: "SI (FotMob) / ESPN / Football Muse via LiveScore",
    },
    {
      date: "2026-10-20",
      opponent: "Villarreal",
      home: true,
      score: "4-3",
      result: "W",
      competition: "UCL",
      xgFor: 2.37,
      xgAgainst: 1.58,
      xgFirstHalfFor: 0.83,
      xgFirstHalfAgainst: 1.12,
      shotsFor: 22,
      pending: false,
      verdict: "Champions League, not counted in the league totals. Two down by 28:08 to Mikautadze, after Van Dijk's header, and Cardona; level by half-time through Mac Allister's header from a Tsimikas corner and Araujo's from Ngumoha's cross; ahead through Mac Allister and the half-time substitute Wirtz on sixty-five and sixty-eight; Oluwaseyi scored on eighty-seven (Sky Sports). Opta Analyst gives 2.37 expected goals from twenty-two shots to 1.58 from fourteen; Sofascore has the first half 0.83 to 1.12, seven shots on target to five and 53 per cent of the ball.",
      source: "Opta Analyst / Sofascore / Sky Sports",
    },
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
      xgAgainst: 2.3,
      xgFirstHalfFor: 0.7,
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
      xgAgainst: 2.3,
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
    xgFor: 10.81,
    xgAgainst: 9.42,
    goalsFor: 11,
    goalsAgainst: 8,
    points: 15,
    note: "Premier League only, eight games. xG for is 2.73 (Newcastle) plus 1.61 (Forest) plus 0.53 (Ipswich) plus 1.13 (Fulham) plus 1.57 (Bournemouth) plus 0.86 (City) plus 1.51 (Brentford) plus 0.87 (Brighton); xG against is 1.43 plus 2.30 plus 0.72 plus 0.71 plus 0.76 plus 1.30 plus 0.85 plus 1.35. The Brentford and Brighton figures are FotMob's, reported by SI, and the City card's 1.30 is Sofascore's; Opta's own figures replace them when published. Provenance caveat from 21 September stands: Opta's published season expected-goals-against figure through five games was 6.12 rather than the 5.92 those per-match cards summed to. Champions League and Carabao Cup cards are shown but not aggregated. First-half splits exist only for Forest, Tottenham and City and are not aggregated. For comparison, FotMob's own season table after eight rounds gives 12.1 for and 9.6 against (Planet Football, 26 October); the gap is the mix of models, and these totals are not adjusted to match it.",
  },
  optaFacts: [
    "Opta's supercomputer gives Liverpool a 52.6 per cent chance of beating Chelsea inside ninety minutes tonight, with a shootout at 24.2 (Opta Analyst).",
    "Gakpo has ten EFL Cup goals since 2023-24, more than any other player in the competition (Opta Analyst).",
    "Isak's six league goals are second only to Haaland's nine, and he has scored in three consecutive appearances for the first time since January 2025 (Opta Analyst).",
    "Alonso has lost both his visits to Anfield as a manager, 4-0 with Leverkusen and 1-0 with Real Madrid (The Liverpool Offside via Yahoo Sports).",
  ],

  sources: [
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
  ],
};
export const SQUAD_LOAD = {
  generatedAt: "2026-10-28T08:30:00Z",
  headline: "Matchday, and the overnight lists have settled into one count: six Liverpool players could miss Chelsea, Szoboszlai, Muñoz, Frimpong, Ekitike, Bradley and Leoni, with Wirtz the doubt expected to make it (Brit Brief). Every preview found starts Mamardashvili, Tsimikas and Koumas and rests Isak and Kerkez, so the squad Iraola is protecting is Sunday's. Arsenal arrive at Anfield after ninety minutes and a shootout at Fleetwood, reportedly without the suspended Dowman (ESPN; The False 9), and Fenerbahçe follow in the Champions League (DAZN).",
  minutesNote: "Premier League minutes are not published here yet. Eight league games, three Champions League games and one Carabao Cup tie have been played and no reliable per-player season minutes have been sourced, so this board tracks availability, starts, substitution times and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    {
      name: "Dominik Szoboszlai",
      issue: "Hamstring, a recurrence of the problem he brought back from Hungary duty",
      expected: "Expected to be rested against Chelsea (The Liverpool Offside via Yahoo Sports) and on Brit Brief's list of twelve possible absentees; Arsenal on 1 November is Sports Mole's possible return date",
      note: "Has missed the last two games after aggravating the earlier hamstring problem (Brit Brief); hurt in the international break and broke down again around thirty minutes into the Brentford win (EPL Index via Yahoo Sports).",
      source: "Brit Brief / Empire of the Kop / Sports Mole / EPL Index via Yahoo Sports / Liverpool FC via The False 9",
    },
    {
      name: "Jeremie Frimpong",
      issue: "Hamstring, a new muscle injury two or three minutes after coming on at the Gtech",
      expected: "Around four weeks, per Sky Sports' Vinny O'Connor on Thursday (Empire of the Kop); 22 November, Manchester United at home, on Premier Injuries' tracker",
      note: "Not expected back until after the November international break (Brit Brief, Wednesday); listed out for Chelsea in the club's team news (Liverpool FC).",
      source: "Sky Sports via Empire of the Kop / Premier Injuries / Liverpool FC / Brit Brief",
    },
    {
      name: "Hugo Ekitike",
      issue: "Achilles rupture (April, surgery)",
      expected: "The New Year, per Sky Sports' Vinny O'Connor (Empire of the Kop); Premier Injuries' tracker says 2 January",
      note: "Iraola says he is 'doing very well' (Brit Brief); the Daily Mail's Lewis Steele had him 'just behind' Bradley (Empire of the Kop). Koumas and Danns remain the cover behind Isak.",
      source: "Sky Sports and Daily Mail via Empire of the Kop / Premier Injuries",
    },
    {
      name: "Giovanni Leoni",
      issue: "ACL (September 2025)",
      expected: "Not expected back until mid-November on Brit Brief's Wednesday list, with team training planned for the international break; Premier Injuries' tracker still says 2 January",
      note: "O'Connor, Thursday: 'We're expecting him to join in with first-team training during the next international break.' Gomez remains the only fresh senior centre-back cover, Araujo occupied at right-back.",
      source: "Brit Brief / Sky Sports via Empire of the Kop / Premier Injuries",
    },
    {
      name: "Conor Bradley",
      issue: "Knee",
      expected: "Early December on Rush The Kop's list; 2 December on Premier Injuries' tracker",
      note: "Brit Brief, Monday: 'not so far from training with the group', but a competitive return is unlikely before the November break. Lewis Steele had him back working on grass last week (Daily Mail via Empire of the Kop). The return that would end the right-back improvisation.",
      source: "Brit Brief / Daily Mail via Empire of the Kop / Premier Injuries",
    },
  ],
  returning: [
    {
      name: "Florian Wirtz",
      issue: "Ankle, twisted in a challenge against Brighton; replaced by Nyoni on sixty-five (SI)",
      status: "Expected to be available for Chelsea, and so left off Brit Brief's list of twelve possible absentees; at ten in The Liverpool Offside's XI (via Yahoo Sports)",
      note: "Empire of the Kop expects him to start on the bench after a heavy run since the international break; held there here, Nyoni at ten, with Arsenal three days later.",
      source: "Brit Brief / The Liverpool Offside via Yahoo Sports / Empire of the Kop",
    },
    {
      name: "Victor Munoz",
      issue: "Knee, a knock from the first half at Brentford",
      status: "Doubtful for Chelsea and expected to be rested (The Liverpool Offside via Yahoo Sports); has missed the last two games (Brit Brief)",
      note: "The knee knock came in the first half at Brentford (EPL Index via Yahoo Sports); Empire of the Kop expects him kept for Arsenal. Held out of the Chelsea XI here.",
      source: "Brit Brief / The Liverpool Offside via Yahoo Sports / EPL Index via Yahoo Sports / Empire of the Kop",
    },
    {
      name: "Trey Nyoni",
      issue: "A knock late on against Brighton, per SI; no club word",
      status: "On for Wirtz on sixty-five, FotMob 6.5 and 'a key defensive contribution before taking a knock' (SI); not on The False 9's Sunday-evening injury list",
      note: "Starts in every preview found, in the pivot for The Liverpool Offside and at ten for The False 9; no further word on Sunday's knock. At ten here.",
      source: "SI / The False 9",
    },
    {
      name: "Alexander Isak",
      issue: "Back from a muscle injury",
      status: "Started and scored against Brighton, replaced by Koumas on seventy-seven (SI)",
      note: "Six league goals in seven, scoring in three consecutive league appearances (ESPN).",
      source: "SI / ESPN",
    },
    {
      name: "Bradley Barcola",
      issue: "No injury; Thursday's session was load management",
      status: "Started on the right against Brighton, assisted Isak, off on seventy-seven; FotMob 7.9 (SI)",
      note: "Five goal contributions in his last four games (ESPN).",
      source: "SI / ESPN",
    },
    {
      name: "Ronald Araujo",
      issue: "No injury",
      status: "Ninety minutes at right-back against Brighton, FotMob 7.9 (SI)",
      note: "Iraola: 'Defensively he's been really, really good' (ESPN).",
      source: "SI / ESPN",
    },
    {
      name: "Ryan Gravenberch",
      issue: "No injury",
      status: "Ninety minutes in the pivot against Brighton, FotMob 7.3, 'disciplined positionally' (SI)",
      note: "Still the named emergency right-back; in Rush The Kop's midfield three for Chelsea, out of The Hard Tackle's, kept in the pivot here.",
      source: "SI",
    },
    {
      name: "Joe Gomez",
      issue: "No injury",
      status: "Unused substitute against Brighton (ESPN); starts in every Chelsea preview found, at right-back in The Liverpool Offside's",
      note: "Centre-back in both Tuesday previews; one of seven first-team players out of contract next summer (AnfieldWatch via Yahoo Sports).",
      source: "ESPN / Brit Brief / AnfieldWatch via Yahoo Sports",
    },
    {
      name: "Wataru Endo",
      issue: "No injury",
      status: "Unused substitute against Brighton (ESPN); beside Gravenberch in The False 9's pivot, at centre-back in two Tuesday previews",
      note: "League- and cup-eligible midfield depth; Chelsea on Wednesday is the likeliest first appearance.",
      source: "ESPN / The False 9 / Rush The Kop / The Hard Tackle",
    },
  ],
  startersLastMatch: {
    match: "Liverpool 2-0 Brighton, 25 October (Premier League, matchweek eight) · the confirmed XI, per ESPN and SI",
    xi: [
      "Alisson",
      "Araujo",
      "Jacquet",
      "Van Dijk",
      "Kerkez",
      "Gravenberch",
      "Mac Allister",
      "Barcola",
      "Wirtz",
      "Gakpo",
      "Isak",
    ],
    changes: "Four changes from Villarreal: Kerkez, Wirtz, Barcola and Isak in for Tsimikas, Nyoni, Ngumoha and Koumas (ESPN). Gakpo started on the left, Barcola on the right. Substitutions: Nyoni for Wirtz (ankle) on sixty-five; Koumas for Isak and Ngumoha for Barcola on seventy-seven; Tsimikas for Kerkez on eighty-seven. Unused: Mamardashvili, Gomez, Endo, Chiesa, McConnell (SI; ESPN).",
    source: "ESPN / SI",
  },
  depthRisk: [
    {
        "position": "Central midfield",
        "level": "critical",
        "detail": "Critical. Szoboszlai has missed two games and is on Brit Brief's list for tonight, so the fit senior midfield is Mac Allister, Gravenberch, Nyoni and Endo, with Wirtz expected available at ten. Real Madrid's reported 2027-28 interest in Mac Allister (Get Spanish Football News via LiveScore) is a summer question, not a January one."
    },
    {
        "position": "Right-back",
        "level": "critical",
        "detail": "Critical. Frimpong is not expected back until after the November break and Bradley is still out (Brit Brief); Muñoz is expected to be rested (The Liverpool Offside). Araújo, a loaned centre-back, holds the position, and one preview swaps him with Gomez for tonight. Either is one injury from Gravenberch, the named emergency option."
    },
    {
        "position": "Centre-back",
        "level": "high",
        "detail": "High. Van Dijk is rested in every preview found, so Jacquet and Gomez, or Jacquet and Araújo, are the pairing tonight; Leoni not before mid-November (Brit Brief). Van Dijk and Gomez are among seven first-team players out of contract in 2027 (AnfieldWatch via Yahoo Sports)."
    },
    {
        "position": "Centre-forward",
        "level": "high",
        "detail": "High. Isak, second only to Haaland in league goals (Opta Analyst), is rested in every preview, Koumas leading the line; Ekitike's return is listed for 2 January (Premier Injuries)."
    },
    {
        "position": "Wide forward",
        "level": "medium",
        "detail": "Medium. Gakpo, Barcola, Ngumoha and Chiesa are all fit; the previews split Gakpo and Barcola on the right, Ngumoha on the left in both (The Liverpool Offside; The False 9). Muñoz expected to be rested."
    },
    {
        "position": "Left-back",
        "level": "low",
        "detail": "Low. Tsimikas starts in every preview found and Kerkez is rested, one cup booking from a quarter-final ban (The Liverpool Offside)."
    }
  ],

  sources: [
    "DaveOCKOP",
    "Sussex Express",
    "The Argus",
    "Barça Universal",
    "Read Liverpool",
    "Evening Standard",
    "The Daily Briefing",
    "LiveScore",
    "Sports Mole",
    "CaughtOffside",
    "Yahoo Sports",
    "Liverpool FC",
    "Rush The Kop",
    "Empire of the Kop",
    "Premier Injuries",
    "Brit Brief",
    "Sky Sports",
    "Opta Analyst",
    "Sofascore",
    "Goal",
    "SI",
    "Roundtable via Yahoo Sports",
    "YSscores",
    "Squawka",
    "The False 9",
    "Daily Cannon via Yahoo Sports",
    "The Hard Tackle",
    "Liverpool.com",
    "DAZN",
    "ESPN",
    "Football Muse via LiveScore",
    "Liverpool Echo via Azat TV",
    "Dave.sport",
    "Sport Witness",
    "3 Added Minutes",
    "News Wires via Egyptian Gazette",
    "TEAMtalk via AnfieldWatch",
    "Football Insider via AnfieldWatch",
    "Hayters via Yahoo Sports",
    "EPL Index via Yahoo Sports",
    "AnfieldWatch via Yahoo Sports",
    "AnfieldWatch via LiveScore",
    "Liverpool FC via The False 9",
    "The Liverpool Offside via Yahoo Sports",
    "Get Spanish Football News via LiveScore",
  ],
};
export const SEASON_PROJECTION = {
  "generatedAt": "2026-10-28T08:30:00Z",
  "played": 8,
  "points": 15,
  "pointsPerGame": 1.88,
  "projectedPoints": 71,
  "projectedFinish": "Champions League places on current pace",
  "headline": "Wednesday morning's arithmetic is unchanged and tonight's cup tie will not change it: fifteen points from eight, 1.88 a game, a seventy-one-point pace that clears the usual Champions League par by three (ESPN). Eight games is still a small sample; FotMob's expected-goals difference of 2.5, sixth in the league (Planet Football), suggests the pace is a little ahead of the performances rather than behind them.",
  "thresholds": [
    {
      "label": "Champions League (top 4)",
      "points": 68,
      "gap": 0,
      "note": "Historical par for the last Champions League place in recent seasons. The pace now clears it by three; holding it means about 1.77 points a game from the remaining thirty. Liverpool hold fourth on the live table, two points above Chelsea."
    },
    {
      "label": "Europa League (5th)",
      "points": 60,
      "gap": 0,
      "note": "Fifth-place par, and the stripe Liverpool occupied on ESPN's table until Sunday. Cleared by eleven on current pace."
    },
    {
      "label": "Conference League (6th-7th)",
      "points": 55,
      "gap": 0,
      "note": "Sixth to seventh place par, often decided by cup outcomes as much as by league finish. Cleared by sixteen on current pace."
    },
    {
      "label": "Safety",
      "points": 38,
      "gap": 0,
      "note": "The conventional survival line, thirty-three points below the current pace. It is on the board only to give the other numbers a floor."
    }
  ],
  "thresholdNote": "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  "runIn": [
    {
      "date": "2026-11-01",
      "opponent": "Arsenal",
      "home": true,
      "competition": "PL",
      "oppPosition": 2,
      "difficulty": "hard"
    },
    {
      "date": "2026-11-08",
      "opponent": "Crystal Palace",
      "home": false,
      "competition": "PL",
      "oppPosition": 17,
      "difficulty": "easy"
    },
    {
      "date": "2026-11-22",
      "opponent": "Manchester United",
      "home": true,
      "competition": "PL",
      "oppPosition": 16,
      "difficulty": "easy"
    },
    {
      "date": "2026-11-29",
      "opponent": "Everton",
      "home": false,
      "competition": "PL",
      "oppPosition": 11,
      "difficulty": "medium"
    },
    {
      "date": "2026-12-02",
      "opponent": "Sunderland",
      "home": true,
      "competition": "PL",
      "oppPosition": 20,
      "difficulty": "easy"
    },
    {
      "date": "2026-12-05",
      "opponent": "Chelsea",
      "home": false,
      "competition": "PL",
      "oppPosition": 5,
      "difficulty": "hard"
    }
  ],
  "runInVerdict": "Sunday carries more weight than any of the five that follow. Arsenal come to Anfield level on twenty-one with City, out of the cup after a shootout at Fleetwood and reportedly without the suspended Dowman (ESPN; The False 9): a Liverpool win cuts the gap to three, a defeat stretches it to nine. Palace away and Manchester United at home follow, both in the bottom five, before Everton away, Sunderland at home and Chelsea away on 5 December.",
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
    "Planet Football"
  ]
};
