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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Sat Oct 10, morning - The last line behind a captain now talking openly about the end (Sky Sports via TEAMtalk); Haaland, five league goals and top of the chart, is the man he faces tomorrow (Opta Analyst).", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sat Oct 10, morning - On the bench tomorrow; the goalkeeping order was untouched by the week's team news, and the Chelsea cup tie on 28 October remains his likeliest start.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Sat Oct 10, morning - 'Before you know it, it's gone,' he told Sky Sports (via TEAMtalk), calling his Liverpool years 'an incredible journey'. Leads the side out against City in the final year of his contract.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Sat Oct 10, morning - Bench and first cover at centre-back and right-back; none of the eve-of-match previews moves him into the XI.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Sat Oct 10, morning - Left-back in all three published XIs this tracker checked (Sports Mole, This Is Anfield, Opta Analyst); Tsimikas the cover.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Sat Oct 10, morning - The knee keeps him out of City and still has no club date; Araujo holds the right-back shirt.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Sat Oct 10, morning - Opta Analyst's preview, written before Jacquet was cleared, had him at right-back with Araujo inside; with Jacquet fit, the bench is likelier.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 19, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-23", injuryNote: "Sat Oct 10, morning - Not part of tomorrow's plans; the ACL comeback is still aimed at late October, with the Chelsea cup tie on the 28th the horizon.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 21, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat Oct 10, morning - Keeps his place in This Is Anfield's predicted backline after what it calls a minor injury scare; partners Van Dijk against Haaland tomorrow.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Sat Oct 10, morning - On loan at Levante; no part of the City weekend.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 32, name: "Kostas Tsimikas", number: 21, position: "DEF", nationality: "🇬🇷 Greece", age: 30, appearances: 6, goals: 0, assists: 1, cleanSheets: 1, xG: 0.2, tacklesPer90: 1.7, passCompletion: 79, progressiveCarries: 3.1, form: 5.8, status: "fit", injuryNote: "Sat Oct 10, morning - Left-back cover behind Kerkez, who starts in every preview checked this morning.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png",
    physical: { height: 178, weight: 76, pace: 79, acceleration: 80, sprintSpeed: 78 },
    career: [
      { years: "2017-2020", club: "Olympiacos", fee: null, type: "senior" },
      { years: "2020-", club: "Liverpool", fee: "€13M", type: "senior" },
      { years: "2025-26", club: "Roma", fee: null, type: "loan" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat Oct 10, morning - Half of the pivot every preview keeps from Bournemouth; Elliot Anderson, Opta's leader among midfielders for line-breaking passes, is the player to stop.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Sat Oct 10, morning - Out of sorts, in This Is Anfield's reading, so the Szoboszlai and Mac Allister pivot is expected to continue; the bench tomorrow.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Sat Oct 10, morning - In the pivot beside Mac Allister in all three previews checked; with two forwards missing, his set pieces carry more of the scoring burden.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Sat Oct 10, morning - Emergency depth only for City; a January exit is still where his season points.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Sat Oct 10, morning - The ten in Sports Mole's and Opta's XIs, while This Is Anfield asks whether he could go up front instead; 0.39 expected assists in 403 league minutes (Opta Analyst).", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 19, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Sat Oct 10, morning - Pivot depth at nineteen; with four games in ten days from tomorrow, his minutes are likelier midweek than against City.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 27, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "injured", outSince: "2026-09-27", injuryNote: "Sat Oct 10, morning - Will watch City from the stand: the ankle hurt with the Netherlands is 'a matter of him dealing with the pain' (Iraola, via Brit Brief). Not thought long-term.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "injured", outSince: "2026-09-25", injuryNote: "Sat Oct 10, morning - Out of City; 'they are not going to arrive on Sunday,' Iraola said (Sports Mole). The thigh is 'a small injury but a muscle injury', not long-term.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Sat Oct 10, morning - The third striker missing, and the long-term one; Boxing Day at Hull is still the Liverpool Echo's target.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Sat Oct 10, morning - On the left in Sports Mole's and This Is Anfield's front three, with Barcola moved inside; now in this tracker's XI too.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 31, name: "Lewis Koumas", number: 67, position: "FWD", nationality: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", age: 21, appearances: 7, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.3, passCompletion: 77, progressiveCarries: 1.8, form: 6.3, status: "fit", injuryNote: "Sat Oct 10, morning - The only recognised nine, but the previews have moved past him: Sports Mole, This Is Anfield and Opta Analyst all start Barcola. Iraola's trust still stands; the bench is likelier.", image: "",
    physical: { height: 180, weight: 73, pace: 80, acceleration: 81, sprintSpeed: 79 },
    career: [
      { years: "2013-", club: "Liverpool", fee: null, type: "youth" },
      { years: "2024-25", club: "Stoke City", fee: null, type: "loan" },
      { years: "2025", club: "Birmingham City", fee: null, type: "loan" },
      { years: "2025-26", club: "Hull City", fee: null, type: "loan" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "doubtful", injuryNote: "Sat Oct 10, morning - Back in training, and 'maybe' recovered for the squad, Iraola said (BBC Sport); no competitive minute yet this season.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Sat Oct 10, morning - Third goalkeeper; nothing in the eve-of-match news reaches him.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Sat Oct 10, morning - On the right in every preview checked this morning, in Gakpo's place; one goal from three appearances so far.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Sat Oct 10, morning - Right-back again in Sports Mole's and This Is Anfield's XIs; Doku or Semenyo, whichever City play wide, will test a centre-half on the flank.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 3, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Sat Oct 10, morning - The previews' nine: Sports Mole, This Is Anfield and Opta Analyst all pick him through the middle. 'He's a super-valuable player for us. I think he can cover the three positions up front' (Iraola, Liverpool FC).", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  generatedAt: "2026-10-10T08:30:00Z",
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
      "As of Friday evening, two days before Manchester City visit Anfield on 11 October, Andoni Iraola has ruled Alexander Isak and Cody Gakpo out of the game, leaving Lewis Koumas as the only natural nine, while Jeremy Jacquet is fit and Enzo Maresca says Haaland is ready.",
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
// Last refresh: 2026-10-10 (Saturday morning, ~4am ET). Re-fetched from ESPN and byte-identical to the 6-9 October pulls (Arsenal v Leeds is today, unplayed): no league match since Sunday 20 September. Manchester City first on fifteen, five from five; Arsenal second
// on twelve (Leeds on Saturday); Brighton third on ten; then four on nine, Brentford (fourth), Leeds (fifth), LIVERPOOL (sixth,
// highlighted) and Everton (seventh), split by goal difference and goals scored. Relegation stripe: Coventry, Fulham, Tottenham.
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
  generatedAt: "2026-10-10T08:30:00Z",
  overview:
    "Saturday is the table's last still morning before City come to Anfield: Arsenal host Leeds today and, with a win, draw level with Manchester City on fifteen before Sunday's game. Liverpool are sixth on nine and unbeaten in five, one of four sides on nine with Brentford, Leeds and Everton, separated by goal difference and goals scored; Brighton sit third on ten with the league's best goal difference. City, perfect from five, would stretch the gap to Liverpool to nine with a win at Anfield, where Opta note they have not won successive league games since 1953; a Liverpool win cuts it to three. Coventry, Fulham and Tottenham hold the relegation places, and ESPN's table has not changed since 20 September.",
  teams: {
    "Liverpool": "Sixth on nine and unbeaten in five league games; the previews send Barcola, a winger, out as the nine against City.",
    "Manchester City": "Top on fifteen and perfect; chasing successive league wins at Anfield for the first time since 1953 (Opta Analyst).",
    "Arsenal": "Second on twelve; host Leeds today and go level with City on fifteen if they win. At Anfield on 1 November.",
    "Brighton": "Third on ten, and plus eleven is the best goal difference in the league; at Anfield on 25 October.",
    "Brentford": "Fourth and unbeaten on nine; Liverpool visit on 17 October, six days after City.",
    "Leeds": "Fifth on nine, unbeaten and holding the Europa stripe; at Arsenal today.",
    "Everton": "Seventh on nine, level with Liverpool on points and goal difference, behind on goals scored.",
    "Hull": "Eighth on eight, the highest of the promoted sides.",
    "Chelsea": "Tenth on seven; at Anfield in the Carabao Cup fourth round on 28 October.",
    "Bournemouth": "Seventeenth and winless in five; Iraola's old club, beaten 1-0 by Liverpool on 20 September.",
    "Fulham": "Nineteenth on two; one of those points was taken at Anfield on 12 September.",
    "Tottenham": "Bottom on two, winless in five and level on points with Fulham."
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Before You Know It.",
    byline: "Sky Sports / TEAMtalk",
    dateline: "Kirkby · 10 October",
    category: "Farewells",
    body:
      "Virgil van Dijk has spent ten seasons not saying goodbye, and on the eve of Manchester City he came closer than he ever has. In a Sky Sports interview due to air before the game, he talked about a shirt that millions around the world love to wear, about showing up every three or four days, and then about the end: when he has to walk out of the club, it will be a very emotional day. 'Before you know it, it's gone,' he said. He is thirty-five and in the final year of his contract. Tomorrow he lines up beside Jacquet, with Haaland at his shoulder.",
  },
  {
    n: "02",
    headline: "The Winger At Nine.",
    byline: "Liverpool FC / Sports Mole",
    dateline: "Kirkby · 9 October",
    category: "Tactics",
    body:
      "Iraola never said Bradley Barcola would lead the line. He said enough. 'He's a super-valuable player for us,' he told the club's website. 'I think he can cover the three positions up front.' Within hours the previews had made the move for him: Sports Mole, This Is Anfield and Opta Analyst all start the Frenchman through the middle, Ngumoha and Munoz either side, Wirtz behind. Lewis Koumas, the only natural nine, keeps the manager's trust and loses the argument. Barcola has no league goal this season. What he has is speed, and City defend high.",
  },
  {
    n: "03",
    headline: "Baying For Blood.",
    byline: "Evening Standard / The Overlap",
    dateline: "London · 7 October",
    category: "Football News",
    body:
      "The pundits had settled the weather at Anfield before either manager spoke. On The Overlap, in comments the Evening Standard carried on Wednesday, Jamie Carragher said City would get a very hot reception, the same as always, and then sharpened it: everyone is baying for blood, so it will be very difficult for their players and manager to achieve anything. Gary Neville expected banners and was certain of chanting. The verdict behind it, a commission's guilty finding on City's financial charges, now under appeal, will not be on the pitch tomorrow. It will be in the stands, for ninety minutes, at full volume.",
  },
  {
    n: "04",
    headline: "Not Arriving On Sunday.",
    byline: "BBC Sport / Sports Mole",
    dateline: "Kirkby · 9 October",
    category: "Injuries",
    body:
      "Iraola's phrasing on Friday was exact. Alexander Isak and Cody Gakpo are not going to arrive on Sunday; the thigh is a small injury but a muscle injury, and neither looks long-term. The BBC's Aadam Patel drew the consequence: with Ekitike also out, the manager must decide who leads the attack, and Iraola said he hopes the absences will not be felt too much in the coming weeks, which depends on others stepping up. Behind the senior options the next striker in the building is Will Wright of the under-21s, who hit the crossbar from long range at Doncaster on Tuesday night.",
  },
  {
    n: "05",
    headline: "Since 1953.",
    byline: "Opta Analyst / ESPN",
    dateline: "Anfield · 10 October",
    category: "Race for Europe",
    body:
      "Opta's history for tomorrow reads like a list of things that have not happened in a long time. City have not won successive league games at Liverpool since 1953. Liverpool lost both league meetings last season, their first back-to-back league defeats to City since March 1937. And Liverpool have failed to win their first three home league games of a season only twice since the First World War, in 1963-64 and 2012-13; Iraola's first two at Anfield were draws. The ESPN table supplies the present tense: sixth on nine against fifteen, with Arsenal hosting Leeds today and able to draw level at the top.",
  }
];

export const NEWS_DIGEST = {
  generatedAt: "2026-10-10T08:30:00Z",
  summary:
    "Saturday morning, the eve of Manchester City at Anfield, and it is the captain who is talking about endings: in a Sky Sports interview due to air before the game, Virgil van Dijk said that when he has to walk out of the club 'it will be a very emotional day. It's been an incredible journey', and added, 'Before you know it, it's gone!' (TEAMtalk via LiveScore; This Is Anfield). He is thirty-five and in the final year of his contract, and tomorrow he leads a side without Alexander Isak or Cody Gakpo, both ruled out by Andoni Iraola on Friday. The previews have settled the nine in their absence: Sports Mole, This Is Anfield and Opta Analyst all start Bradley Barcola through the middle with Ngumoha and Munoz wide, and Iraola calls Barcola 'a super-valuable player' who 'can cover the three positions up front' (Liverpool FC), while the BBC frames it as a striker dilemma with Lewis Koumas the only natural nine. Opta's history is not kind to anyone: City have not won successive league games at Liverpool since 1953, and Liverpool have not failed to win their first three home league games of a season since 2012-13. Arsenal host Leeds today and can draw level with City on fifteen before a ball is kicked at Anfield.",
  keyTopics: [
    {
      title: "Van Dijk: 'Before You Know It, It's Gone' (TEAMtalk / This Is Anfield, today)",
      detail: "Reported on Saturday morning from a Sky Sports interview due to air before the City game: 'Eventually, when I have to walk out of the club, it will be a very emotional day. It's been an incredible journey.' TEAMtalk calls it his biggest hint yet; he is thirty-five, in his tenth season, and his contract runs out at the end of this one. The same interview gave his 'bare minimum' for team-mates: 'hard work, never give up and be a good human being'.",
      category: "general",
    },
    {
      title: "Arsenal Can Go Level With City Today (ESPN / theScore, today)",
      detail: "Arsenal, second on twelve, host Leeds, fifth on nine and unbeaten, this afternoon. A home win puts them level with City on fifteen before Liverpool and City meet at Anfield on Sunday; the ESPN table has not moved since 20 September.",
      category: "matches",
    },
    {
      title: "The BBC's Striker Dilemma (BBC Sport via Yahoo Sports, Friday)",
      detail: "Aadam Patel's report, published at 5.46pm on Friday, frames Sunday as a choice between Barcola centrally and a rare Koumas start. Iraola told him he hopes the absences of Isak and Gakpo will not be felt too much in the coming weeks, which depends on how others step up, and that Chiesa will 'maybe' be recovered without having played any minutes.",
      category: "tactics",
    },
    {
      title: "Three Previews Pick Barcola At Nine (Sports Mole, Friday evening)",
      detail: "Published at 4.59pm on Friday: Alisson; Araujo, Jacquet, Van Dijk, Kerkez; Mac Allister, Szoboszlai; Ngumoha, Wirtz, Munoz; Barcola. This Is Anfield's predicted XI has the same shape and asks whether Wirtz could go up front instead; Opta Analyst's preview also leads with Barcola. This Is Anfield calls Gravenberch out of sorts, so the pivot from Bournemouth stays.",
      category: "tactics",
    },
    {
      title: "'A Super-Valuable Player': Iraola On Barcola (Liverpool FC, Friday)",
      detail: "Said at Friday's press conference and published by the club: 'He's a super-valuable player for us. I think he can cover the three positions up front.' On the nine, he pointed to wingers who have played up front for other teams.",
      category: "tactics",
    },
    {
      title: "Isak And Gakpo 'Not Going To Arrive' (Sports Mole, Friday)",
      detail: "Iraola's fuller wording on Friday, carried by Sports Mole: 'they are not going to arrive on Sunday', with Isak's thigh 'a small injury but it's a muscle injury'. Brit Brief counts all three natural centre-forwards missing, Ekitike included, with Koumas not on the injury list.",
      category: "injuries",
    },
    {
      title: "Opta: City Chase A First Anfield Double Since 1953 (Opta Analyst, Friday)",
      detail: "From Opta's Friday preview: City are seeking successive league wins at Liverpool for the first time since 1953, after Liverpool lost both league meetings last season, their first back-to-back league defeats to City since March 1937. The away side has won two of the last three Premier League meetings, as many as in the previous thirty-two.",
      category: "matches",
    },
    {
      title: "The Home Record, A 1963-64 Problem (Opta Analyst, Friday)",
      detail: "Also from Friday's preview: Iraola has not yet won a home league game, after draws with Forest and Fulham, and Liverpool have failed to win any of their first three home games of a season only seven times, twice since the First World War (1963-64 and 2012-13).",
      category: "matches",
    },
    {
      title: "Carragher: 'Everyone Is Baying For Blood' (Evening Standard via Yahoo Sports, Wednesday)",
      detail: "Carried by the Evening Standard on Wednesday from The Overlap: 'They will get a very hot reception, but that is always the same when Man City come to Anfield. Everyone is baying for blood.' Gary Neville expected banners and 'certainly' chanting.",
      category: "general",
    },
    {
      title: "Will Wright Hits The Bar At Doncaster (Liverpool FC, Tuesday)",
      detail: "The under-21s lost 1-0 at Doncaster in the Jersey Mike's Trophy on Tuesday night, Tommi O'Reilly scoring in first-half stoppage time. Wright, the academy striker behind Koumas, started up front, hit the crossbar from long range and curled another just wide (Liverpool FC). Football Insider counted five goals in his first four PL2 games of the season.",
      category: "general",
    }
  ],
  sources: ["TEAMtalk", "LiveScore", "This Is Anfield", "Sky Sports", "Sports Mole", "Liverpool FC", "BBC Sport", "Yahoo Sports", "Brit Brief", "Opta Analyst", "Evening Standard", "The Overlap", "Football Insider", "ESPN", "theScore"],
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
  generatedAt: "2026-10-10T08:30:00Z",
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
    "Manchester City arrive at Anfield chasing something they have not done since 1953, successive league wins at Liverpool, having won both league meetings last season, Liverpool's first back-to-back league defeats to City since March 1937 (Opta Analyst). They lead on fifteen from five, the only perfect record in the league, and Maresca can become the fourth manager to win his first six Premier League games at a club. Off the pitch they were found guilty by an independent commission on the financial-breaches charges and have appealed, and Jamie Carragher expects 'everyone is baying for blood' at Anfield (Evening Standard). Their last game was a 5-3 against Sunderland on 20 September, Paris Saint-Germain come to the Etihad on Wednesday, Foden serves the last game of his ban, and Semenyo, Doku and O'Reilly are doubts. Opta's pre-team-news simulations make City 40.7 per cent favourites.",
  shape:
    "Maresca has kept the possession spine and loosened everything in front of it, which is why City look like a scoring machine and a defensive argument at the same time. The back four sits high with Gvardiol at left-back stepping into midfield and Matheus Nunes giving width on the right; Enzo Fernandez and Elliot Anderson screen in a double pivot that is more about ball progression than protection. Rayan Cherki plays between the lines and carries, with Antoine Semenyo and Iliman Ndiaye on the flanks and Haaland pinning the centre-backs. The pattern that beat Sunderland twice over and nearly cost them the afternoon is the same one: when the ball turns over in City's half, the space between that high line and Donnarumma is enormous, and Sunderland needed very little invitation to run into it three times on 20 September.",
  keyPlayers: [
    {
      name: "Erling Haaland",
      role: "Centre-forward",
      threat: "Five league goals, top of the scoring chart, and he has scored against all twenty-five Premier League clubs he has faced (Opta Analyst). Maresca on Friday: after leaving Norway's defeat by Portugal with a minor knock he 'went to Marbella, had two or three days off, played golf' and is ready for Anfield (Evening Standard; Rush The Kop). Liverpool's stats preview puts his 4.4 expected goals first in the league.",
      source: "Opta Analyst / Evening Standard / Rush The Kop / Liverpool FC",
    },
    {
      name: "Rayan Cherki",
      role: "Attacking midfielder",
      threat: "Three league goals from 0.72 expected, the biggest overperformance in the Premier League at plus 2.28 (Opta Analyst), and twelve chances created per Squawka. City Xtra has him at the ten. Scored the winner off the bench for France against Belgium on 5 October (beIN Sports). He works the seam between Liverpool's pivot and centre-backs, the grass FORM_TRENDS flags as least well covered.",
      source: "Opta Analyst / Squawka / City Xtra / beIN Sports",
    },
    {
      name: "Antoine Semenyo",
      role: "Wide forward",
      threat: "Two goals from 0.34 expected, second only to Cherki for overperformance, and both came in the 5-3 against Sunderland before the break (Opta Analyst). The problem that sent him home from Ghana's squad is an ankle injury City Xtra on Friday called not thought to be serious; RotoWire still lists ankle inflammation and a doubt. All three of his Premier League goals against Liverpool came at Anfield (Liverpool FC), and Iraola managed him at Bournemouth.",
      source: "Opta Analyst / City Xtra / RotoWire / Liverpool FC",
    },
    {
      name: "Elliot Anderson",
      role: "Central midfielder",
      threat: "Leads every Premier League midfielder with 105 line-breaking passes and 64 progressive carries, and wins 60.7 per cent of his duels (Opta Analyst). He has won both his away starts at Anfield, with Nottingham Forest in 2024-25 (1-0) and 2025-26 (3-0); a third would make him the seventh player to win his first three Premier League away starts against Liverpool. Back in City training on Thursday (Yahoo Sports via All Out Soccer).",
      source: "Opta Analyst / Yahoo Sports",
    },
    {
      name: "Gianluigi Donnarumma",
      role: "Goalkeeper",
      threat: "Made what Football Italia called a fantastic double save, first from Doue's curler and then from Dembele at point-blank range, to hold France to 1-1 on 2 October, with Liverpool's Barcola among the substitutes he faced. At club level he conceded three at home to Sunderland on 20 September, the only blemish on a five-win start and the reason City's goal difference is plus eight rather than something more intimidating. Liverpool's problem this season has been converting what they create rather than creating it: seven goals from 7.57 expected across the first five league games, per Opta. A goalkeeper in this form behind a defence that shipped three last time out, on 20 September, is the matchup the City game turns on.",
      source: "Football Italia / ESPN / Opta Analyst",
    },
  ],
  predictedXI: [
    "Donnarumma", "Nunes", "Dias", "Guehi", "Gvardiol",
    "Fernandez", "Anderson", "Ndiaye", "Cherki", "Semenyo", "Haaland",
  ],
  absentees: [
    { name: "Phil Foden", issue: "Suspended: third game of a three-match domestic ban for violent conduct (red card, Manchester derby, 13 September)", status: "Out" },
    { name: "Antoine Semenyo", issue: "Ankle; trained on Thursday after missing Ghana duty, listed as a doubt by the Evening Standard on 9 October, and not believed serious (Sports Mole)", status: "Doubt" },
    { name: "Jeremy Doku", issue: "Calf, from the Community Shield; fifteen minutes since (City Xtra), though both the Evening Standard and Sports Mole put him in their 9 October XIs", status: "Doubt" },
    { name: "Nico O'Reilly", issue: "Withdrew from England's squad and was not seen in Thursday's training (Evening Standard, 9 October); Sports Mole had no update", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-20", opponent: "Sunderland", home: true, score: "5-3", result: "W", note: "Eight goals at the Etihad and a manager who refused to enjoy it. Enzo Fernandez opened with his first City goal and Rayan Cherki restored the lead on twenty-nine minutes, with Brian Brobbey equalising almost immediately on both occasions. Antoine Semenyo struck either side of the interval before Brobbey completed a hat-trick, and Haaland turned in a Gvardiol cross on eighty-one after a VAR check. Maresca afterwards: too many goals, too many goals, he would prefer to win 1-0." },
    { date: "2026-09-13", opponent: "Manchester United", home: false, score: "0-1", result: "W", note: "The Manchester derby at Old Trafford, settled by a single goal that was originally ruled out and awarded after a VAR review, per Opta's account of the sequence. A fourth straight win and the result that established City as the division's pacesetter." },
    { date: "2026-09-05", opponent: "Coventry City", home: true, score: "1-0", result: "W", note: "A narrow home win over the promoted side, and the only occasion this season on which Maresca's team has both kept a clean sheet and scored once. It is the scoreline he said on 20 September he would prefer." },
    { date: "2026-08-28", opponent: "Crystal Palace", home: false, score: "4-1", result: "W", note: "Four scored away from home at Selhurst Park, the clearest evidence of the attacking ceiling of this side, and the game that established the pattern of the season: plenty at one end, not always enough attention at the other." },
    { date: "2026-08-23", opponent: "Bournemouth", home: true, score: "2-1", result: "W", note: "Maresca's first league game in charge and the start of the perfect run, against the club Liverpool beat on 20 September. Bournemouth led, which was the first instalment of the record they carried into September." },
  ],
  liverpoolAngle:
    "The previews' answer to Isak's absence turns Liverpool's attack into a test of City's high line rather than of their centre-backs. Barcola, the pick at nine for Sports Mole, This Is Anfield and Opta Analyst, is a winger who runs into space, and the space behind City is the weakness this dossier's shape note describes: Sunderland scored three at the Etihad on 20 September by running into it. The collision in midfield is unchanged, the league's most intense press, high-intensity pressure on 48.9 per cent of opposition-half touches, against the league's best passers under it, City at 83.0 per cent (Opta Analyst). At the other end Liverpool have conceded the most fast-break goals in the division since the start of last season (Opta), and Cherki and Semenyo are the league's two biggest overperformers of expected goals, against a back four with three straight league clean sheets.",
  modelLine: { source: "Opta supercomputer", liverpool: 34.6, draw: 24.7, opponent: 40.7, note: "Opta Analyst's 10,000 pre-match simulations, published 9 October; Squawka's Signal model had it 35-25-40 on 7 October. Reported, not endorsed." },
  sources: ["Evening Standard", "TEAMtalk", "Opta Analyst", "Sky Sports", "ESPN", "BBC Sport", "Liverpool FC", "Premier League", "beIN Sports", "Express & Star", "Read Man City", "Goal", "CaughtOffside", "Yahoo Sports", "Empire of the Kop", "Sports Mole", "Liverpool Echo", "LiveScore", "FourFourTwo", "Live4Liverpool", "Football365", "Football Insider", "Sport Witness", "Y Clwb Pel-droed", "Al Jazeera", "Bulinews", "Football Italia", "AP", "CBS Sports", "City Xtra", "The Guardian", "Rousing The Kop", "England Football", "The Hard Tackle", "Anfield Index", "The Overlap", "Man City News", "Manchester City", "Yardbarker", "Esteemed Kompany", "portugoal.net", "SportsDunia", "Heavy", "beIN Sports", "101 Great Goals", "Foot Mercato", "RMC Sport", "Sportsview", "The Times", "Squawka", "Get French Football News", "Archyde", "Football365", "LiveScore", "Liverpool Echo", "Outlook India", "Hayters", "SI", "Man City Square", "VAVEL", "The False 9", "DaveOCKOP", "Daily Mail", "101 Great Goals", "Al Jazeera", "Liverpool Echo", "Roundtable Sports", "City Xtra", "RotoWire", "Rousing The Kop", "All Out Soccer", "Rush The Kop", "This Is Anfield", "BBC Sport", "The Overlap"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-10-10T08:30:00Z",
  competition: "PL",
  played: 5,
  headline:
    "Saturday's previews answer the question this board ended on, who makes the chances, with a winger. Sports Mole, This Is Anfield and Opta Analyst all start Bradley Barcola through the middle, a forward with no league goal this season, with Wirtz behind him on 0.39 expected assists in 403 league minutes (Opta Analyst). Seven goals from 7.57 expected says Liverpool have scored roughly what they create, so the risk is volume rather than finishing. Against a City line that conceded three at home to Sunderland on 20 September, pace in behind may matter more than a natural nine's touch.",
  diagnosis: [
    {
      label: "Closing out a lead",
      detail: "Promoted from a warning to a piece of evidence, in Liverpool's favour for once. This entry has spent the season noting that Liverpool draw games they lead, and at the Vitality they took a lead on fifty-seven minutes at a ground where the hosts had scored first in every league game they had played, and then kept it for thirty-three minutes plus stoppage time against late pressure. Iraola's own description of the second half was that his side controlled the game much better and had chances to finish it. It is one instance against three drawn games, but it is the first instance.",
      severity: "positive",
      source: "Opta Analyst / Goal",
    },
    {
      label: "Fast-break concession, still unanswered",
      detail: "The warning stays at high because the fixture that was supposed to test it did not. Bournemouth made 0.76 expected goals and two shots on target, and their one genuine chance, Evanilson's backheel flick on eighteen, came from a cross rather than a counter. Opta still count nine fast-break goals conceded by Liverpool since the start of last season, the most in the league, and Sunday's opponents complete 83 per cent of passes under high-intensity pressure (Liverpool FC), so the press that usually protects Liverpool from transitions is the thing most likely to be bypassed. Haaland and Semenyo, the two City forwards most suited to running into that space, both trained on Thursday (DaveOCKOP), and Maresca on Friday called Haaland ready for Anfield (Evening Standard). City's own high line let Sunderland score three at the Etihad on 20 September. Two teams with the same fault, one fixture, tomorrow.",
      severity: "high",
      source: "Opta Analyst / Squawka / Liverpool FC / DaveOCKOP / Evening Standard",
    },
    {
      label: "The attack works, but only through one man",
      detail: "Liverpool's stats preview gives the concentration a number: Isak's 3.5 expected goals is second in the league only to Haaland, and on Friday Iraola ruled him and Gakpo, credited by beIN with the side's leading returns in all competitions, four goals and six goal involvements respectively, out of the City game (Anfield Index via Yahoo Sports; Roundtable Sports). Seven goals from 7.57 expected is a side scoring roughly what it makes, and four of those seven belong to Isak, against three in fourteen Premier League appearances across the whole of last season. The concentration is the pattern, not the total. The number-ten position behind him has produced no league goal and no league assist in six competitive games, and Opta's Bournemouth card is the clearest illustration: Florian Wirtz created a joint-game-high three chances and returned a team-low 70.3 per cent passing accuracy from twenty-six of thirty-seven passes, with sixteen possessions lost; Opta's 9 October preview puts his season at 0.39 expected assists from nine chances in 403 minutes. The replacement the previews have settled on is Barcola, picked at nine by Sports Mole, This Is Anfield and Opta Analyst, with Koumas, whom Iraola calls the only natural nine, the alternative; neither has a Premier League goal this season, per the scorers in this tracker's results.",
      severity: "high",
      source: "Opta Analyst / beIN Sports / Liverpool FC / Anfield Index / Roundtable Sports / Sports Mole",
    },
    {
      label: "The home draw, still the unresolved record",
      detail: "The Bournemouth win came away, which does not touch it. Liverpool have drawn four consecutive Premier League games at Anfield, the first such run since November 2011 per Opta, and Iraola has yet to win a home league game. Opta add that Liverpool have failed to win any of their first three home games of a season only seven times, and only twice since the First World War, in 1963-64 and 2012-13. The next three home league fixtures are Manchester City, Brighton and Arsenal, in that order, which is an unhelpful sequence in which to still be looking for a first home league win.",
      severity: "high",
      source: "Opta Analyst / Liverpool FC",
    },
    {
      label: "A defence assembled from the wrong parts, working anyway",
      detail: "Three clean sheets in a row, the longest run since 2024, kept by a back four in which the right-back is a centre-half on loan and one centre-back is twenty-one and three months into English football. Jeremy Jacquet took the BBC's highest rating on the field at the Vitality, eight. The caveat is the opposition: Ipswich, Fulham and a winless Bournemouth. City on 11 October is the first real examination of it, and on Thursday Jacquet returned to group training after the left hamstring strain that kept him out of France's win over Belgium (CaughtOffside; Roundtable Sports via Yahoo Sports), and on Friday Iraola declared him 'fit and ready to go' (Roundtable Sports), so the four who kept those clean sheets will be the four who face Haaland. Iraola's own description of the back line is good defensive improvements lately (Goal).",
      severity: "medium",
      source: "BBC Sport / Opta Analyst / CaughtOffside / Yahoo Sports / Goal / Roundtable Sports",
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
    "City are seeking successive league wins at Liverpool for the first time since 1953 (Opta Analyst).",
    "Liverpool lost both league meetings with City last season, their first back-to-back league defeats to City since March 1937 (Opta Analyst).",
    "Liverpool have failed to win any of their first three home league games of a season only seven times, and only twice since the First World War, in 1963-64 and 2012-13 (Opta Analyst).",
    "The away side has won two of the last three Premier League meetings, as many as in the previous thirty-two (Opta Analyst)."
  ],
  sources: ["Opta Analyst", "beIN Sports", "Squawka", "Goal", "This Is Anfield", "FotMob", "The Transfer Hub", "EPL Index", "Liverpool FC", "BBC Sport", "Sofascore", "Premier League", "Sky Sports", "ESPN", "Inside Futbol", "Sports Mole", "Bulinews", "Al Jazeera", "The Football Faithful", "portugoal.net", "Foot Mercato", "DaveOCKOP", "TEAMtalk", "101 Great Goals", "Get French Football News", "Archyde", "Yahoo Sports", "Liverpool Echo", "The Football Faithful", "Rush The Kop", "Fantasy Football Scout", "Liverpool FC stats preview", "Liverpool Echo", "CaughtOffside", "Roundtable Sports", "Rousing The Kop", "Anfield Index", "Evening Standard"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-10-10T08:30:00Z",
  headline:
    "Saturday morning, and the closed squad's answer to two absences is positional: the published previews (Sports Mole, This Is Anfield, Opta Analyst) move Barcola from the left wing to centre-forward and bring Ngumoha in, rather than start Koumas, the only natural nine. Iraola calls Barcola 'super-valuable' because he can cover all three forward positions (Liverpool FC). Behind them the cupboard is bare: Ekitike's target is Boxing Day, and the next striker in the building is the under-21s' Will Wright, who hit the bar at Doncaster on Tuesday (Liverpool FC). The market is shut until January.",
  minutesNote:
    "Premier League minutes are not published here yet. Five league games, one Champions League game and one Carabao Cup tie have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "The Liverpool Echo now pencils in Hull away on 26 December, with L'Equipe reporting team training next month; club framing is January, with 'a reasonable chance' of the last two Champions League league-phase games (This Is Anfield)", note: "A Blood Red newsletter last week repeats the French timeline, and it is still a French timeline rather than the club's. L'Equipe reports, via CaughtOffside, that Ekitike travelled to the United States to see a specialist who confirmed his rehabilitation is on track, that he has reached light trotting on the pitch, and that November team training and December matchday squads are the targets. Iraola's public line has been 'a hope and a realistic chance that he could help us in January'. Until either date arrives, and with Isak ruled out of City on 9 October, Koumas, who started for Wales on 1 October, is the only natural nine Iraola has (Roundtable Sports).", source: "Liverpool FC / This Is Anfield / CaughtOffside / L'Equipe" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "The Liverpool Echo hopes for a return to the main group by mid-October, with Chelsea at home on 28 October the potential comeback; The Athletic, via CaughtOffside, said the end of October. The club has not confirmed group training", note: "Not spotted at Thursday's session, the first after the break (Roundtable Sports via Yahoo Sports), so the mid-October target for group work has not yet been met in public. Juventus have made several loan approaches and plan to scout him once he trains, per Standard Sport and La Gazzetta dello Sport via DaveOCKOP on 4 October, and Liverpool will not let him go a year into a six-year contract; Liverpool.com on 5 October adds Chelsea to the race. The Athletic's end-of-October return points at the Chelsea cup tie on 28 October, not City.", source: "The Athletic / CaughtOffside / Standard Sport / La Gazzetta dello Sport / DaveOCKOP / Liverpool.com" },
    { name: "Conor Bradley", issue: "Knee", expected: "No club date. Iraola last month: 'I think he is not close to training with the team' (Liverpool Echo); Michael O'Neill does not expect him for November's internationals, and FotMob carries early January 2027", note: "Not spotted at Thursday's session (Roundtable Sports via Yahoo Sports), and the timeline has not shortened. A fifth consecutive league game has gone by without him and Araujo has made right-back his own, so Bradley returns to no obvious vacancy. Lewis Steele reported individual training and ball work resuming, eight months on from the January knee injury against Arsenal; FotMob lists early January 2027 and the club has said nothing beyond Iraola's 'probably Conor will go later'.", source: "Daily Mail / Liverpool FC / FotMob / Sports Mole" },
    { name: "Alexander Isak", issue: "Thigh, a minor problem brought back from Sweden duty", expected: "Out of Manchester City on 11 October (Iraola, 9 October); 'they don't look like long-term injuries', but no return date was given", note: "Ruled out by Iraola on Friday: 'a small injury, but still an injury'. Four of Liverpool's seven league goals are his, and Liverpool's stats preview puts his 3.5 expected goals second in the league to Haaland. Koumas, whom Iraola called the only natural nine, is the cover; Sports Mole prefers Barcola through the middle.", source: "Anfield Index via Yahoo Sports / Roundtable Sports / Liverpool FC / Sports Mole" },
    { name: "Cody Gakpo", issue: "Left ankle, scissor-tackle by Sasa Lukic, Serbia 1-2 Netherlands (27 September)", expected: "Out of Manchester City on 11 October (Iraola, 9 October); training, and 'about dealing with the pain'; no return date given", note: "Iraola called the tackle 'really bad' and said the ankle has troubled him before in his career. Dutch reporting had put it at several weeks (Inside Futbol); the manager's view is that it is not long-term. Opta's preview credits him with six goal involvements in all competitions, the most at the club. Munoz has the right in this tracker's XI and Sports Mole's.", source: "Anfield Index via Yahoo Sports / Roundtable Sports / Opta Analyst / Inside Futbol / Sports Mole" },
  ],
  returning: [
    { name: "Federico Chiesa", issue: "Lower back (originally muscle, Como friendly, August)", status: "Back in training since 8 October; Iraola on 9 October: 'Maybe we will recover Chiesa, but he hasn't played any minutes'", note: "Took part in Thursday's session, per the Liverpool Echo (via RotoWire), and was pictured in the gym with the group (DaveOCKOP), roughly the date Iraola had given last month when he said Chiesa should be back working with the group around the international break. He has not played since the Como friendly in mid-August and is outside the Champions League squad, so City comes too early for anything more than the bench. Sports Mole's 3 October report of interest from Inter, Atalanta and Lazio, and of Liverpool considering a January exit, still stands.", source: "Liverpool Echo / RotoWire / DaveOCKOP / Sports Mole" },
    { name: "Jeremy Jacquet", issue: "Left hamstring strain, felt in the France camp in the hours before France 4-1 Belgium (5 October)", status: "Declared fit by Iraola on 9 October: 'He is fit and ready to go' (Roundtable Sports)", note: "Iraola settled it at Friday's press conference, praising his France debut and adding that he has a long way to go. Rousing The Kop's reading of Thursday is that he was 'seemingly taking part in the full session' and will be fine, four days after the French federation sent him back with a minor left hamstring strain. TEAMtalk expects him to start beside Van Dijk; RotoWire alone still picks Gomez. Whether there is any lasting damage, the same writer added, remains to be seen, and the club has said nothing before Friday's press conference.", source: "Rousing The Kop / RotoWire / TEAMtalk / Get French Football News" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "Fully fit; first cover at centre-back and right-back now Jacquet is declared fit", note: "Three weeks of internal football is exactly what a player eleven seasons and too many injuries into a career needs. Gomez is back in full training after the hamstring problem that cost him a month, a fourth senior centre-back and a specialist right-back, alongside Frimpong, in one body, and his next appearance in any competition will be his three hundredth for the club. Unused at Bournemouth, where the first-choice pair kept a third clean sheet without him; the fortnight of internal football is where a squad this thin at the back keeps him sharp.", source: "ESPN / BBC Sport / Liverpool FC" },
    { name: "Giorgi Mamardashvili", issue: "No injury; behind Alisson all season", status: "Back from Georgia after saving a penalty in the 0-0 in Belfast on 5 October", note: "The window ended on a high on 5 October: in Northern Ireland 0-0 Georgia he guessed right against Isaac Price's eighty-fourth-minute penalty after McConville had hit the bar, and also denied Donley and Magennis (Sky Sports). Before that, 2 October at the Puskas Arena had been the most Liverpool of his internationals: five saves by Rush The Kop's count, including Toth on 4, Szoboszlai on 23 and Barany on 62, a tip-over from Szoboszlai's twenty-five-metre shot on 59 that ended in a high-five between the two (Origo), and the only goal a header from Kerkez. It follows a goalless draw with Ukraine and a ninety-ninth-minute defeat by Northern Ireland. At the club he has one appearance this season, the cup tie against Tottenham and the late save that protected it, and the Chelsea tie at Anfield on 28 October is the realistic next start behind Alisson.", source: "Sky Sports / Origo / Rush The Kop / Liverpool FC / This Is Anfield" },
    { name: "Wataru Endo", issue: "No injury; available and on the transfer list from January", status: "Not on international duty; working at the AXA; a January exit expected", note: "A thirty-three-year-old working normally at a training ground that has already decided to sell him. Endo is among the senior group Iraola keeps through the break, and Liverpool closed out the Bournemouth lead without ever calling on an extra holding midfielder. The reporting stands: FSG will sanction a January exit, the last window in which a fee is recoverable on a 2027 contract, with Ben Jacobs's line that 'Iraola clearly doesn't fancy him'. The consequence for this page is dated rather than dramatic: from February the emergency fifth centre-back has no occupant unless Leoni's knee has held.", source: "CaughtOffside / Football365 / ESPN" },
    { name: "Milos Kerkez", issue: "No injury; competing with Tsimikas at left-back", status: "Trained with the group on 8 October after his early release by Hungary, which won 2-1 in Ukraine without him on 5 October", note: "The night of 2 October gave him his first goal in thirty-five caps, a header past his club-mate Mamardashvili in a 1-0 win over Georgia (Liverpool FC, Origo), and a booking on seventy-four, his second of the competition, that suspended him for the Ukraine game. Hungary have released him rather than carry a player who cannot play, so he is home early (Sports Mole), with a full week under Iraola before City. At club level the BBC's Bournemouth verdict stands, targeted over the top and credited for effort, and Tsimikas, his understudy, played ninety minutes against Germany on 4 October. No market until January.", source: "Liverpool FC / Origo / BBC Sport / Sports Mole" },
  ],
  startersLastMatch: {
    match: "Bournemouth 0-1 Liverpool, 20 September (Premier League matchday five) · the confirmed XI, per ESPN and BBC Sport",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Mac Allister", "Szoboszlai", "Gakpo", "Wirtz", "Barcola", "Isak"],
    changes: "Three changes from the goalless draw at Fulham on 12 September, per the BBC, and a full reversal of the ten changes made for the cup tie against Tottenham. The 4-2-3-1 that every Sunday preview named was the shape used, with one deviation nobody predicted: Gakpo started on the right rather than the left, with Barcola on the left, where Adam Smith largely nullified him. Szoboszlai was booked shortly after half-time. Munoz replaced Barcola and Nyoni replaced Wirtz on seventy-two; Gravenberch replaced Szoboszlai and Koumas replaced Isak on eighty-one. Unused: Mamardashvili, Gomez, Tsimikas, Frimpong and Ngumoha.",
    source: "ESPN / BBC Sport / Opta Analyst",
  },
  depthRisk: [
    { position: "Right-back", level: "high", detail: "High. Ronald Araujo, a centre-half on loan from Barcelona, is set for a sixth straight league start at right-back in Sports Mole's Friday XI. Bradley's knee has no club date; Frimpong and Gomez are the cover. Semenyo or Doku, both in Friday's City previews, will run at that side. No market until January." },
    { position: "Centre-forward", level: "critical", detail: "Critical. Isak (thigh) and Gakpo (ankle) miss City and Ekitike's target is Boxing Day (Liverpool Echo). The previews pick Barcola, a winger, at nine, with Koumas, in Iraola's words probably the only full No.9 (Liverpool FC), the alternative; behind them is the under-21s' Will Wright. No market until January." },
    { position: "Centre-back", level: "medium", detail: "Medium. Jacquet was declared 'fit and ready to go' by Iraola on Friday (Roundtable Sports), so Van Dijk has his usual partner. Gomez is first cover, Araujo second; Leoni has not trained with the group and Endo, the emergency fifth, is listed for January. No market until January." },
    { position: "Left-back", level: "high", detail: "High in level, quiet in news. Kerkez is in Sports Mole's Friday XI and nowhere in Iraola's injury list; Tsimikas, ninety minutes against Germany on 4 October, is the understudy. Two senior options and no market until January." },
    { position: "Wide forward", level: "critical", detail: "Critical. With Gakpo out and Barcola moved inside in every preview checked, the wide berths fall to Ngumoha, eighteen, and Munoz, twenty-two, with Chiesa at most a bench option after no competitive minutes this season. No market until January." },
    { position: "Central midfield", level: "medium", detail: "Medium. Mac Allister and Szoboszlai are the pivot in Sports Mole's Friday XI, with Gravenberch the cover. Elliot Anderson, with 105 line-breaking passes (Opta Analyst), is the City midfielder they have to stop. Endo and Nyoni, nineteen, are the depth." }
  ],
  sources: ["Sports Mole", "Liverpool FC", "Liverpool Echo", "Rush The Kop", "This Is Anfield", "Liverpool.com", "Football Insider", "Nehanda Radio", "EPL Index", "Goal", "SI", "Rousing The Kop", "Squawka", "Opta Analyst", "Daily Mail", "Inside Futbol", "Yahoo Sports", "CaughtOffside", "FotMob", "LiveScore", "AnfieldWatch", "Sports Witness", "TEAMtalk", "Empire of the Kop", "Sport Witness", "The Hard Tackle", "101 Great Goals", "AP", "Y Clwb Pel-droed", "L'Equipe", "Al Jazeera", "Blood Red", "Origo", "The Athletic", "Sportsview", "BBC Sport", "Brit Brief", "Eurosport France", "World Today News", "England Football", "All Football", "Greek City Times", "Foot Mercato", "RMC Sport", "Get French Football News", "Sportsview", "Olympics.com", "ESPN", "The Times", "Outlook India", "Football Muse", "AnfieldWatch via LiveScore", "VAVEL", "The False 9", "Man City Square", "beIN Sports", "dave.sport", "DaveOCKOP", "All Football", "Liverpool FC stats preview", "Roundtable Sports", "RotoWire", "Brit Brief", "Rousing The Kop", "Anfield Index", "City Xtra", "Anfield Index via Yahoo Sports", "Evening Standard", "This Is Anfield", "BBC Sport"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-10-10T08:30:00Z",
  played: 5,
  points: 9,
  pointsPerGame: 1.80,
  projectedPoints: 68,
  projectedFinish: "Champions League places on current pace",
  headline:
    "Still nine points from five, 1.80 a game and a sixty-eight-point pace, and still too small a sample to forecast from. The number that frames tomorrow is historical: Liverpool have failed to win their first three home league games of a season only twice since the First World War (Opta Analyst), and anything but a win against City would make it a third. A win makes twelve from six, two a game; a defeat, nine from six and 1.50.",
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
    "Arsenal host Leeds today and can draw level with City on fifteen before Liverpool kick off, and the next four league fixtures, City, Brentford, Brighton and Arsenal, are all against the current top four. Four points from those four would leave thirteen from nine, about 1.44 a game and below the Europa par; seven would make sixteen from nine, 1.78, close to the Champions League pace. Van Dijk, in the final year of his contract, will lead the side into all of them.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "BBC Sport", "Squawka", "This Is Anfield", "City Xtra", "The Guardian", "Manchester City", "The Times", "VAVEL", "Empire of the Kop", "Liverpool Echo", "DaveOCKOP", "Al Jazeera", "Opta supercomputer", "Roundtable Sports"],
};
