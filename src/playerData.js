// ─── Liverpool FC Player Data (2025-26 Season · Updated May 24, 2026) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Sat May 30 — heading to a World Cup as Brazil's No. 1, and now expected to stay at Anfield too: Juventus had agreed personal terms near €5m a year, but the Italians missing out on the Champions League drained the move of momentum, and he was never the one pushing it. The line has held", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sat May 30 — with Alisson now expected to remain, a loan looks the likeliest route for the £29m Valencia signing in 2026-27 rather than the understudy minutes a season at Anfield would deny him. The club's longer-term thinking is still drawn around a future move for Porto's Diogo Costa, the €60m release clause kept in mind", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Mon May 25 — season over: the captain closes a hard campaign with his own standards intact, under contract to June 2027. He will be central both to the end-of-season review and to whatever shape the summer rebuild takes around him", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 40, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 6.4, status: "fit", injuryNote: "Sat May 30 — the free exit hardens: This Is Anfield's explainer this week pins the breakdown on a wage-and-bonus impasse, and with twelve months left a cut-price sale is now the only route to any fee. The first-choice centre-back all season may simply walk; Hughes is canvassing Lacroix and van Hecke, and Caught Offside floats a '£43.2m bargain' as an instant fix", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
    physical: { height: 194, weight: 95, pace: 78, acceleration: 76, sprintSpeed: 80 },
    career: [
      { years: "2014-2017", club: "Sochaux", fee: null, type: "youth" },
      { years: "2017-2021", club: "RB Leipzig", fee: "€15M", type: "senior" },
      { years: "2021-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Sat May 30 — caught between two truths: with Hughes hunting two centre-backs the academy product is depth Liverpool may suddenly need, yet at twelve months left and with a Serie A move openly canvassed he is also among the likeliest sell-to-buy departures. A hard call — keep the cover or bank the fee", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 30, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 6.7, status: "fit", injuryNote: "Sat May 30 — the Tottenham move is done bar the unveiling: a free transfer to De Zerbi's side, a late Juventus hijack rebuffed. Nine years, two title runs and one of the great value signings of the modern era walk out of Anfield; the left-back slot passes unarguably to Milos Kerkez after his tough first season", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
    physical: { height: 178, weight: 70, pace: 79, acceleration: 81, sprintSpeed: 77 },
    career: [
      { years: "2010-2013", club: "Queen's Park", fee: null, type: "senior" },
      { years: "2013-2014", club: "Dundee United", fee: "Free", type: "senior" },
      { years: "2014-2017", club: "Hull City", fee: "€3.4M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€9.3M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Mon May 25 — season over: a difficult first season after his £45m move, the Hungarian drawing criticism for an uneasy adaptation at left-back. With Robertson gone, the left-back job is now unambiguously his to hold", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Thu May 28 — a pre-season doubt now: four and a half months after the knee gave way at Arsenal, he is back on load-bearing gym work at the AXA centre, but Slot has called the case 'complicated' and there is 'no timeline.' Northern Ireland's Michael O'Neill says he is 'doing well' while keeping the detail confidential", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Fri May 29 — left out of the Netherlands' World Cup squad, Koeman citing 'the pattern of this season that he has been injured regularly.' A stop-start debut campaign disrupted by muscular problems cost him 35-cap rhythm and now a summer tournament; an uninterrupted pre-season is everything before the 2026-27 push", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 33, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Mon May 25 — torn ACL last September; the long rehabilitation continues, with a return targeted for the 2026-27 season", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 6, goals: 0, assists: 0, cleanSheets: 2, xG: 0.1, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.6, status: "fit", injuryNote: null, image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Lyon Academy", fee: null, type: "youth" },
      { years: "2024-2025", club: "Lyon", fee: null, type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€8M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: null, image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat May 30 — the stand-off carries into June untouched: no talks opened, the midfielder into the final two years of his deal and his camp content to let the summer breathe. Real Madrid's interest stays live; Football365 puts Liverpool's internal sale valuation at €120m if July passes without movement — a number the hierarchy will eventually act on or abandon", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Mon May 25 — season over: Liverpool's most consistent midfielder across a turbulent campaign, and an obvious building block for whatever the summer's decisions construct next", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 48, goals: 12, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.3, status: "fit", injuryNote: "Mon May 25 — season over: closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 28, goals: 2, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 6.9, status: "fit", injuryNote: "Sat May 30 — still the cleanest sale on the board as the bigger stories swirl: Inter Milan keen around €20m against Liverpool's €30m valuation of the Anfield-born midfielder. Hughes and Piero Ausilio have met; Jones is willing to go, and the fee is one of the surer sell-to-buy levers to help fund the new centre-backs", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
    physical: { height: 182, weight: 74, pace: 72, acceleration: 74, sprintSpeed: 70 },
    career: [
      { years: "2010-2019", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2019-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "injured", outSince: "2026-02-12", injuryNote: "Mon May 25 — ankle surgery in February ended his season; now focused on proving his fitness for Japan's 2026 World Cup squad", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Mon May 25 — season over: an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. A clean pre-season is everything now", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 19, name: "Stefan Bajcetic", number: 43, position: "MID", nationality: "🇪🇸 Spain", age: 21, appearances: 0, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-08-01", injuryNote: "Mon May 25 — recurring hamstring trouble cost him the entire 2025-26 season; a make-or-break summer lies ahead", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p535928.png",
    physical: { height: 185, weight: 75, pace: 68, acceleration: 66, sprintSpeed: 70 },
    career: [
      { years: "2017-2020", club: "Celta Vigo Academy", fee: null, type: "youth" },
      { years: "2020-2022", club: "Liverpool Academy", fee: "€250K", type: "youth" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: null, image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 39, goals: 10, assists: 10, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.0, status: "fit", injuryNote: "Sat May 30 — the destination stays open by his own choosing: 'I am still assessing things,' he told beIN after the Anfield farewell, 'I'm going to the World Cup and then everything will become clear.' Al-Ittihad lead the betting though a Saudi briefing says they want a younger squad; Al-Hilal have now joined, MLS appeals to his family, and Fenerbahce linger", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
    physical: { height: 175, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 85 },
    career: [
      { years: "2010-2012", club: "El Mokawloon", fee: null, type: "senior" },
      { years: "2012-2016", club: "Basel", fee: "€2.5M", type: "senior" },
      { years: "2014-2015", club: "Chelsea", fee: "€16M", type: "senior" },
      { years: "2015-2016", club: "Fiorentina (loan)", fee: null, type: "senior" },
      { years: "2016-2017", club: "Roma (loan/permanent)", fee: "€17M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 39, goals: 9, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 6.8, status: "fit", injuryNote: "Mon May 25 — season over: a quiet, muted end to the campaign, and reports suggest FSG would consider a sale if the right offer arrives in a summer of attacking reconstruction", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 18, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Mon May 25 — season over: an injury-wrecked debut season — a string of setbacks limited the £100m striker to a handful of starts and never let Slot's intended front three settle. A full summer to reset", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Mon May 25 — ruptured Achilles (April 14 vs PSG): the scan confirmed a 9-12 month absence, ruling him out of the rest of 2025-26 and France's 2026 World Cup", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Mon May 25 — season over: one of the few bright notes of a hard campaign, the 17-year-old emerging as a genuine first-team option and central to Liverpool's thinking as the attack is rebuilt", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Mon May 25 — season over: a bit-part year for the Italian, who features prominently on summer clear-out lists — an exit looks the likeliest outcome", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Mon May 25 — season over: third-choice goalkeeper across the campaign, with two Premier League starts. A dependable squad option as the goalkeeping picture is reviewed", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
];

// ─── Team Logos ────────────────────────────────────────────────────────────
// PL crests via premierleague.com CDN, UCL teams via img.uefa.com
export const TEAM_LOGOS = {
  "Liverpool":      "https://resources.premierleague.com/premierleague/badges/50/t14.png",
  "Galatasaray":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50137.png",
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
  "Brighton & Hove Albion": "https://resources.premierleague.com/premierleague/badges/50/t36.png",
  "Fulham":         "https://resources.premierleague.com/premierleague/badges/50/t54.png",
  "Everton":        "https://resources.premierleague.com/premierleague/badges/50/t11.png",
  "Crystal Palace":  "https://resources.premierleague.com/premierleague/badges/50/t31.png",
  "Manchester City": "https://resources.premierleague.com/premierleague/badges/50/t43.png",
  "Manchester United": "https://resources.premierleague.com/premierleague/badges/50/t1.png",
  "Chelsea":         "https://resources.premierleague.com/premierleague/badges/50/t8.png",
  "Aston Villa":     "https://resources.premierleague.com/premierleague/badges/50/t7.png",
  "Brentford":       "https://resources.premierleague.com/premierleague/badges/50/t94.png",
  // Transfer-target clubs
  "Bayer Leverkusen": "https://img.uefa.com/imgml/TP/teams/logos/50x50/52867.png",
  "RB Leipzig":       "https://img.uefa.com/imgml/TP/teams/logos/50x50/2603790.png",
  "Real Sociedad":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50080.png",
  "Porto":            "https://img.uefa.com/imgml/TP/teams/logos/50x50/50037.png",
  "Bayern Munich":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50037.png",
  "Real Madrid":      "https://img.uefa.com/imgml/TP/teams/logos/50x50/50051.png",
  "Inter Milan":      "https://img.uefa.com/imgml/TP/teams/logos/50x50/50138.png",
  "Juventus":         "https://img.uefa.com/imgml/TP/teams/logos/50x50/50139.png",
  "Atlético Madrid":  "https://img.uefa.com/imgml/TP/teams/logos/50x50/50124.png",
};

// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Sunderland",
  shortName: "SUN",
  home: false,
  date: "2026-07-25T23:00:00",
  competition: "PSF",
  venue: "Geodis Park, Nashville",
  broadcast: "LFCTV GO",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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
// Last refresh: 2026-05-28 — FINAL 20-team table, 2025-26 season complete (MW38).
export const STANDINGS = [
  { pos: 1, team: "Arsenal", p: 38, w: 26, d: 7, l: 5, gd: 44, pts: 85, qualification: "UCL" },
  { pos: 2, team: "Manchester City", p: 38, w: 23, d: 9, l: 6, gd: 42, pts: 78, qualification: "UCL" },
  { pos: 3, team: "Manchester United", p: 38, w: 20, d: 11, l: 7, gd: 19, pts: 71, qualification: "UCL" },
  { pos: 4, team: "Aston Villa", p: 38, w: 19, d: 8, l: 11, gd: 7, pts: 65, qualification: "UCL" },
  { pos: 5, team: "Liverpool", p: 38, w: 17, d: 9, l: 12, gd: 10, pts: 60, qualification: "UCL", highlight: true },
  { pos: 6, team: "Bournemouth", p: 38, w: 13, d: 18, l: 7, gd: 4, pts: 57, qualification: "UEL" },
  { pos: 7, team: "Sunderland", p: 38, w: 14, d: 12, l: 12, gd: -6, pts: 54, qualification: "UEL" },
  { pos: 8, team: "Brighton", p: 38, w: 14, d: 11, l: 13, gd: 6, pts: 53, qualification: "UECL" },
  { pos: 9, team: "Brentford", p: 38, w: 14, d: 11, l: 13, gd: 3, pts: 53 },
  { pos: 10, team: "Chelsea", p: 38, w: 14, d: 10, l: 14, gd: 6, pts: 52 },
  { pos: 11, team: "Fulham", p: 38, w: 15, d: 7, l: 16, gd: -4, pts: 52 },
  { pos: 12, team: "Newcastle", p: 38, w: 14, d: 7, l: 17, gd: -2, pts: 49 },
  { pos: 13, team: "Everton", p: 38, w: 13, d: 10, l: 15, gd: -3, pts: 49 },
  { pos: 14, team: "Leeds", p: 38, w: 11, d: 14, l: 13, gd: -7, pts: 47 },
  { pos: 15, team: "Crystal Palace", p: 38, w: 11, d: 12, l: 15, gd: -10, pts: 45, qualification: "UEL" },
  { pos: 16, team: "Nott'm Forest", p: 38, w: 11, d: 11, l: 16, gd: -3, pts: 44 },
  { pos: 17, team: "Tottenham", p: 38, w: 10, d: 11, l: 17, gd: -9, pts: 41 },
  { pos: 18, team: "West Ham", p: 38, w: 10, d: 9, l: 19, gd: -19, pts: 39, qualification: "REL" },
  { pos: 19, team: "Burnley", p: 38, w: 4, d: 10, l: 24, gd: -37, pts: 22, qualification: "REL" },
  { pos: 20, team: "Wolves", p: 38, w: 3, d: 11, l: 24, gd: -41, pts: 20, qualification: "REL" },
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
  matchweek: 38,
  generatedAt: "2026-05-30T08:00:00Z",
  overview:
    "Almost a week past the final whistle, the table has stopped being a record and become a backdrop — the fixed frame against which the summer's moves are read. Arsenal's 85 points head a Champions League quartet — City 78, United 71, Villa 65 — above a Liverpool fifth on 60, the European place banked and a heavy rebuild now underway beneath it. The fault lines run through the European rows: Newcastle, twelfth and out of the top flight's continental places, have just sold Anthony Gordon to Barcelona for around £70m; Tottenham, survivors in seventeenth under Roberto De Zerbi, have landed Andy Robertson on a free. Bournemouth's sixth-place Europa League finish stands as the season's best story, Crystal Palace ride the FA Cup into Europe from fifteenth, and Brighton hold the Conference League play-off in eighth. West Ham, Burnley and Wolves are down.",
  teams: {
    "Arsenal": "Champions — 85 points, the first English title-winner since 2017 to do it without lifting a domestic cup.",
    "Manchester City": "Second on 78 — Pep restored to the Champions League, never within reach of Arsenal across the run-in.",
    "Manchester United": "Third on 71 — Amorim's first full season delivers a quiet return to Europe's top table.",
    "Aston Villa": "Fourth on 65 — Emery takes the last automatic UCL berth; the 4-2 over Liverpool on May 15 the night that sealed it.",
    "Liverpool": "Fifth on 60 — twenty-five points behind Arsenal; the Champions League place was the floor FSG set, and a sell-to-buy summer now defined by a likely Konaté free exit and the hunt for a Salah heir.",
    "Bournemouth": "Sixth and Europa League — the season's overachievers, the standout campaign in the bottom half of the table.",
    "Sunderland": "Seventh and into Europe in their promotion season — first up at Nashville for Liverpool's pre-season opener on July 25.",
    "Brighton": "Eighth — a Conference League play-off place keeps Brighton in Europe for a third straight summer.",
    "Brentford": "Ninth on 53 — level with Brighton on points but out of Europe for the first time in their top-flight history.",
    "Chelsea": "Tenth on 52 — Champions League absent for a third successive year; the close-season repair work continues.",
    "Newcastle": "Twelfth on 49 — outside Europe, and now cashing in: Anthony Gordon sold to Barcelona for around £70m this week.",
    "Crystal Palace": "Fifteenth on points, but the FA Cup carries them into Europe — Glasner takes Palace to the Europa League group stage for the first time.",
    "Tottenham": "Survived in 17th — De Zerbi installed as head coach, Andy Robertson signed on a free; the squad reshapes fast.",
    "West Ham": "Relegated in 18th — a 3-0 win at Leeds on the final day not enough; down to the Championship for the first time since 2012.",
    "Burnley": "Relegated — 22 points and an immediate return to the Championship.",
    "Wolves": "Bottom on 20 — comfortably the season's worst side, relegated by a distance.",
  },
};

// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "A World Cup Squad, And The Name That Isn't On It.",
    byline: "ESPN / Liverpool.com / This Is Anfield",
    dateline: "Zeist · 29 May",
    category: "Farewells",
    body: "Ronald Koeman read out twenty-six names and Jeremie Frimpong's was not among them, and so a season of small injuries acquired a final, public verdict. 'It is the pattern of this season that he has been injured regularly,' the Netherlands manager said, plainly, of a wing-back who had answered every fit call-up since 2023. Van Dijk, Gravenberch and Gakpo will go to North America; Frimpong will watch. His reply came not in a press room but on Instagram, in the register of a man trying to be gracious: it wasn't meant to be this time. A hamstring took thirty-five appearances. It has now taken a summer too.",
  },
  {
    n: "02",
    headline: "The Winger Liverpool Could Have Had Goes To Barcelona.",
    byline: "Sky Sports / RTÉ / ESPN",
    dateline: "Barcelona · 28 May",
    category: "Transfers",
    body: "For two windows Anthony Gordon was the homegrown answer Liverpool kept in their back pocket — the Scouser who fancied the move, the safe fallback if the exotic target slipped. This week the pocket emptied. Gordon completed a Barcelona medical after the Catalans agreed roughly £70m with Newcastle, fending off Bayern, and Hansi Flick is said to be picturing him as a striker now Lewandowski has gone. Liverpool, the reporting agrees, simply chose not to re-enter the room. It is a clarifying kind of loss: the fallback is gone, and the whole attacking summer now leans, undisguised, on a teenager in Leipzig.",
  },
  {
    n: "03",
    headline: "Two Scarves, Knotted In Marble.",
    byline: "Liverpool FC / ESPN / The Guide Liverpool",
    dateline: "Anfield · 29 May",
    category: "Football News",
    body: "Forty-one years on, the club gave Heysel a more honest home. By the Anfield Road Stand, where more people will pass it, stands 'Forever Bound' — two scarves carved from Carrara marble and knotted together, the thirty-nine names cut into the stone. Representatives of Juventus came to see it, because the bond the sculpture describes is between two clubs that grief made permanent. It replaces the small plaque on the Dalglish Stand wall, the one you had to know was there. Some memorials are built to be found. This one was built to be unavoidable, which is the point.",
  },
  {
    n: "04",
    headline: "Bradley, The Gym, And A Date Nobody Will Name.",
    byline: "This Is Anfield / Liverpool.com / Empire Of The Kop",
    dateline: "Liverpool · 28 May",
    category: "Injuries",
    body: "Four and a half months after his knee gave way in the goalless afternoon at the Emirates, Conor Bradley is doing the unglamorous work — load-bearing reps in the AXA gym, the early architecture of a return. Michael O'Neill, his country's manager, called him 'doing well' on Thursday and then declined to say more, the detail 'confidential.' Arne Slot had been blunter weeks earlier: complicated, the player still 'quite far away of already going outside.' Jacquet and Leoni are spoken of with more confidence for pre-season. Bradley, the right-back the season was supposed to belong to, is spoken of with hope and a shrug.",
  },
  {
    n: "05",
    headline: "Salah Will Tell Us After The World Cup.",
    byline: "beIN Sports / The National / OLBG",
    dateline: "Liverpool · 27 May",
    category: "Farewells",
    body: "He has played his last match in red and he is in no hurry to say what comes next. 'I am still assessing things,' Salah told beIN after the Brentford afternoon. 'I have time now. I am going to the World Cup and then everything will become clear.' The market, less patient, has already drawn its map: Al-Ittihad favourites, though a Saudi briefing says they want a younger room; Al-Hilal newly interested; MLS holding a quiet appeal to his family; Fenerbahçe lingering at the edges. For a fortnight at least, the most decorated player of the Anfield era belongs to no one but Egypt, and to a tournament an ocean away.",
  },
];

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-05-30T08:00:00Z",
  summary:
    "Saturday, and the cruellest blow of the week landed on a player, not a contract. Ronald Koeman has left Jeremie Frimpong out of the Netherlands' World Cup squad, the manager blunt about why — 'it is the pattern of this season that he has been injured regularly' — even as Virgil van Dijk, Ryan Gravenberch and Cody Gakpo all made the cut; Frimpong's reply, posted to Instagram, was a quiet 'it wasn't meant to be this time.' The transfer board moved hard too: Anthony Gordon, floated only days ago as Liverpool's homegrown wing fallback, has completed a medical at Barcelona on a deal worth around £70m, the Reds having stepped aside to keep their resources aimed at RB Leipzig's Yan Diomandé. Off the pitch, the club unveiled 'Forever Bound,' a new Carrara-marble memorial to the thirty-nine who died at Heysel, on the disaster's forty-first anniversary, with Juventus present. Ibrahima Konaté's drift toward a free exit and Conor Bradley's uncertain pre-season fitness round out a heavy week; Mohamed Salah, gone from Anfield, says only that he will decide his next club 'after the World Cup.'",
  keyTopics: [
    {
      title: "Frimpong Axed From Netherlands' World Cup Squad — Koeman Cites 'The Pattern Of This Season' (ESPN / Liverpool.com / This Is Anfield, reported Thu-Fri May 28-29)",
      detail:
        "The week's most human blow: Ronald Koeman left Jeremie Frimpong out of the Dutch World Cup 26, ending a run of call-ups stretching back to October 2023. Koeman was blunt overnight — 'it is the pattern of this season that he has been injured regularly' — a recurring hamstring having held the wing-back to 35 appearances. Frimpong answered on Instagram: 'it wasn't meant to be this time, but I'll be supporting the boys.' Van Dijk, Gravenberch and Gakpo all travel; Crysencio Summerville and Justin Kluivert were preferred wide.",
      category: "general",
    },
    {
      title: "Gordon Gone To Barcelona: Medical Done At ~£70m As Liverpool Step Aside (Sky Sports / RTÉ / ESPN, reported Wed-Fri May 27-29)",
      detail:
        "The first big winger domino fell away from Anfield this week. Anthony Gordon — named only days ago as Liverpool's homegrown fallback should the Diomandé pursuit founder — completed a Barcelona medical after the Catalans agreed a fee around £70m with Newcastle, paid in instalments to 2031, fighting off Bayern Munich. Hansi Flick is said to be weighing Gordon as a striker after Lewandowski's exit. Liverpool, Liverpool.com reports, chose not to resume their interest, prioritising other targets and opening the door for Barça.",
      category: "transfers",
    },
    {
      title: "'Forever Bound': Liverpool Unveil New Heysel Memorial On The 41st Anniversary (Liverpool FC / ESPN / The Guide Liverpool, reported Fri May 29)",
      detail:
        "On the forty-first anniversary of the Heysel disaster, Liverpool unveiled a new memorial by the Anfield Road Stand. Titled 'Forever Bound,' the sculpture — two scarves knotted together, carved from Carrara marble and inscribed with the names of all thirty-nine supporters who died on May 29, 1985 — symbolises the enduring bond between Liverpool and Juventus. Representatives of the Serie A club attended; the piece replaces the older plaque on the Sir Kenny Dalglish Stand and gives the dead a more visible place of reflection.",
      category: "general",
    },
    {
      title: "Bradley A Pre-Season Doubt: 'No Timeline' On The Knee, O'Neill 'Encouraged' (This Is Anfield / Liverpool.com / Empire Of The Kop, reported Wed-Thu May 27-28)",
      detail:
        "Four and a half months after damaging his knee in the goalless draw at Arsenal, Conor Bradley's return is firming up only slowly. Northern Ireland boss Michael O'Neill said on Thursday the right-back is 'doing well' and back doing load-bearing gym work at the AXA centre, but kept the detail 'confidential.' Slot had already called the case 'complicated' — Bradley 'quite far away of already going outside' — and there is now less confidence he is ready for the start of pre-season than there is around Jacquet or Leoni.",
      category: "injuries",
    },
    {
      title: "Slot Stays — But Under Pressure: FSG Satisfied, Speculation Won't Die (Liverpool.com / NewsNow, reported this week)",
      detail:
        "The manager question reframed itself this week, away from outside candidates and toward the incumbent. FSG are reported satisfied to keep Arne Slot, who won the title in year one before a defence-of-the-crown that brought twenty defeats, a fifth-place finish and roughly $600m of spending. The caveat in every briefing is the same: a poor start to 2026-27 would bring the pressure early. The vote of confidence is real, and conditional.",
      category: "general",
    },
    {
      title: "Salah Will Decide 'After The World Cup' — Al-Ittihad Lead, Al-Hilal Now In It (The National / beIN Sports / OLBG, reported this week)",
      detail:
        "The destination question hardens but stays open. Salah told beIN Sports after his Anfield farewell: 'I am still assessing things. I have time now. I am going to the World Cup and then everything will become clear.' Al-Ittihad remain bookmakers' favourites at around 11/4, though Saudi journalist Majed Hood briefs they want a younger squad; rivals Al-Hilal have entered the picture, MLS holds family appeal, and Fenerbahçe linger. Egypt's North American summer comes first.",
      category: "transfers",
    },
    {
      title: "Konaté Drifts To A Free Exit — And A Cut-Price Replacement Floated (This Is Anfield / Caught Offside, reported Thu-Fri May 28-29)",
      detail:
        "The defensive headache from earlier in the week still sits open. This Is Anfield's explainer this week sets out why Liverpool walked away from Konaté's renewal — an impasse over wages and bonus structure — with the Frenchman now expected to leave for nothing and the saved resource redirected toward replacing Salah. Caught Offside floats a '£43.2m bargain' as an instant fix at centre-back. Twelve months remain on the deal; a cut-price sale this summer is the alternative to losing him for free.",
      category: "transfers",
    },
    {
      title: "Diomandé The Priority — And 'More Than One' Attacker May Follow (This Is Anfield / Liverpool.com, reported this week)",
      detail:
        "RB Leipzig's 19-year-old Yan Diomandé remains the chosen heir to Salah, but Leipzig — Champions League-bound — have set a €100m (£86.4m) valuation and have no need to sell, and an agency dispute clouds the file. This Is Anfield reports a growing sense that Liverpool will sign more than one versatile attacker this summer given the size of the hole Salah leaves. With Gordon gone to Barça, PSG's Bradley Barcola — gettable only if Diomandé lands first — firms up as the principal alternative.",
      category: "transfers",
    },
    {
      title: "Liverpool Enquire On Zaïre-Emery — But PSG And Player Cool (Liverpool.com / This Is Anfield, reported this week)",
      detail:
        "A new midfield name surfaced this week: reporting has Liverpool making enquiries about PSG's Warren Zaïre-Emery, the 20-year-old France international. The interest looks speculative rather than advanced — the youngster is highly rated in Paris and neither he nor the club appears minded to do business. It reads as due diligence on the next generation rather than a live pursuit, with the Curtis Jones sale to Inter the more concrete midfield movement.",
      category: "transfers",
    },
    {
      title: "Pre-Season Opens In Nashville: Sunderland, July 25 (Liverpool FC / NBC Sports, confirmed this week)",
      detail:
        "Eight competition-free weeks stretch ahead before the first whistle. Liverpool's US tour opens against newly promoted Sunderland at Nashville's Geodis Park on July 25 — a first visit to the city — with Wrexham at Yankee Stadium on July 29 and Leeds at Soldier Field on August 2. World Cup returnees will be eased in late, academy minutes heavy throughout. It is the first proper look at whatever shape the rebuilt squad takes.",
      category: "matches",
    },
  ],
  sources: [
    "ESPN",
    "Liverpool.com",
    "This Is Anfield",
    "Sky Sports",
    "RTÉ",
    "beIN Sports",
    "OLBG",
    "The National",
    "Empire Of The Kop",
    "Caught Offside",
    "Goal",
    "Liverpool FC",
    "The Guide Liverpool",
    "Yahoo Sports",
    "SportBible",
    "NewsNow",
    "NBC Sports",
    "TEAMtalk",
    "Fabrizio Romano",
  ],
};

// ─── Transfer Targets (2026 summer window) ─────────────────────────────────
// Hand-curated; refresh via Perplexity the same way NEWS_DIGEST is refreshed.
// heatTier: "hot" (≥65%) | "warm" (40-64%) | "cool" (<40%) | "done" | "dead"
// sources[].tier: "S" (Romano-class) | "A" (major outlet) | "B" (beat) | "C" (aggregator)
export const TRANSFER_TARGETS = {
  generatedAt: "2026-05-30T08:00:00Z",
  summary:
    "Saturday, and the first winger domino has fallen — away from Anfield. Anthony Gordon, floated only days ago as Liverpool's homegrown fallback, has completed a Barcelona medical on a deal worth around £70m, the Reds having declined to resume their interest and chosen instead to keep their resources aimed at RB Leipzig's Yan Diomandé. That narrows the attacking rebuild to the Ivorian — a €100m (£86.4m) valuation, a reluctant Leipzig and an agency dispute all in the way — with PSG's Bradley Barcola now firming up as the principal alternative, gettable only if Diomandé lands first. The defence still aches: Ibrahima Konaté is on course to leave for nothing, with Hughes hunting two centre-backs (Lacroix, van Hecke the names). Out the door, Andy Robertson's free move to De Zerbi's Tottenham is done, Curtis Jones is the cleanest live sale with Inter keen, and Mohamed Salah — gone from Anfield — says he will choose his next club 'after the World Cup.'",
  incoming: [
    {
      id: "diomande-2026",
      name: "Yan Diomandé",
      age: 19,
      position: "FWD",
      role: "Right winger",
      nationality: "🇨🇮 Ivory Coast",
      foot: "Two-footed",
      image: "https://assets.bundesliga.com/contender/2025/11/2526_MD10_TSGRBL_SW_151.jpg?crop=338px,0px,1352px,1080px&fit=540,540",
      currentClub: "RB Leipzig",
      currentLeague: "Bundesliga",
      feeMin: 95, feeMax: 105, feeCurrency: "€m",
      marketValue: 70,
      wageBand: "C",
      contractExpiry: "2029-06-30",
      releaseClause: null,
      contractNote: "Release clause reported near £86m; Leipzig under no pressure to sell after securing the Champions League.",
      probability: 50,
      heatTier: "warm",
      sources: [
        { name: "This Is Anfield",  tier: "A" },
        { name: "Caught Offside",   tier: "B" },
        { name: "Liverpool.com",    tier: "B" },
      ],
      lastUpdated: "2026-05-30",
      rumorNote:
        "Sat May 30 — now the undisputed centre of the attacking rebuild after Gordon's switch to Barcelona removed the homegrown fallback. Leipzig — Champions League-bound — have set a €100m (£86.4m) valuation and feel no need to sell, and the agency dispute between Roc Nation and Maxidel still clouds the file. This Is Anfield reports a growing sense Liverpool will buy more than one versatile attacker this summer given the hole Salah leaves; Barcola is the realistic second move.",
      positionFit: {
        replaces: "Salah (right wing)",
        competesWith: ["Díaz", "Gakpo"],
        depthAfter: "Diomandé · Díaz · Gakpo",
      },
      stats: {
        apps: 31, goals: 13, assists: 10,
        tacklesPer90: 0.8, passCompletion: 78, progressiveCarries: 5.4,
        cleanSheets: 0, xG: 11.2,
      },
    },
    {
      id: "lacroix-2026",
      name: "Maxence Lacroix",
      age: 26,
      position: "DEF",
      role: "Centre-back",
      nationality: "🇫🇷 France",
      foot: "Right",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Lens_-_Sochaux_%2823-11-2019%29_73.jpg/330px-Lens_-_Sochaux_%2823-11-2019%29_73.jpg",
      currentClub: "Crystal Palace",
      currentLeague: "Premier League",
      feeMin: 40, feeMax: 55, feeCurrency: "€m",
      marketValue: 45,
      wageBand: "B",
      contractExpiry: "2028-06-30",
      releaseClause: null,
      contractNote: "Settled in the Premier League since 2024; Palace would demand a premium.",
      probability: 32,
      heatTier: "warm",
      sources: [
        { name: "TeamTalk",        tier: "B" },
        { name: "Liverpool World", tier: "C" },
        { name: "Goal",            tier: "B" },
      ],
      lastUpdated: "2026-05-30",
      rumorNote:
        "Sat May 30 — stays a leading name on Hughes's two-centre-back list as Konaté's free exit hardens. Guehi's former Palace partner, 26 and entering his peak, Premier-League-proven and right-footed — the profile Liverpool value as a Van Dijk successor-in-waiting. Still early-stage; no bid yet, and Palace will not sell cheaply after losing Guehi to Manchester City in January.",
      positionFit: {
        replaces: "Konaté (right centre-back)",
        competesWith: ["Van Dijk", "Jacquet"],
        depthAfter: "Van Dijk · Lacroix · Jacquet",
      },
      stats: {
        apps: 33, goals: 3, assists: 1,
        tacklesPer90: 1.9, passCompletion: 86, progressiveCarries: 1.1,
        cleanSheets: 9, xG: 1.4,
      },
    },
    {
      id: "vanhecke-2026",
      name: "Jan Paul van Hecke",
      age: 25,
      position: "DEF",
      role: "Centre-back",
      nationality: "🇳🇱 Netherlands",
      foot: "Right",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Jan_Paul_van_Hecke_24012026_%282%29_%28cropped%29.jpg/330px-Jan_Paul_van_Hecke_24012026_%282%29_%28cropped%29.jpg",
      currentClub: "Brighton",
      currentLeague: "Premier League",
      feeMin: 35, feeMax: 50, feeCurrency: "€m",
      marketValue: 40,
      wageBand: "B",
      contractExpiry: "2027-06-30",
      releaseClause: null,
      contractNote: "Reportedly refusing a new deal with 18 months left — leverage for any suitor.",
      probability: 26,
      heatTier: "cool",
      sources: [
        { name: "TeamTalk",     tier: "B" },
        { name: "Sky Sports",   tier: "A" },
      ],
      lastUpdated: "2026-05-30",
      rumorNote:
        "Sat May 30 — holds as the value option on the centre-back board. One of the most-improved defenders in the Premier League, comfortable building from the back, and with only eighteen months left on a deal he is said to be in no rush to extend — exactly the contractual softness Liverpool look for. Brighton drive a hard bargain, but the leverage keeps shifting.",
      positionFit: {
        replaces: "Konaté (centre-back depth)",
        competesWith: ["Van Dijk", "Lacroix", "Jacquet"],
        depthAfter: "Van Dijk · Lacroix / van Hecke · Jacquet",
      },
      stats: {
        apps: 30, goals: 1, assists: 1,
        tacklesPer90: 1.6, passCompletion: 88, progressiveCarries: 1.3,
        cleanSheets: 8, xG: 0.5,
      },
    },
    {
      id: "barcola-2026",
      name: "Bradley Barcola",
      age: 23,
      position: "FWD",
      role: "Winger",
      nationality: "🇫🇷 France",
      foot: "Right",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Barcola_asse_psg_2425.png/330px-Barcola_asse_psg_2425.png",
      currentClub: "PSG",
      currentLeague: "Ligue 1",
      feeMin: 70, feeMax: 85, feeCurrency: "€m",
      marketValue: 75,
      wageBand: "B",
      contractExpiry: "2028-06-30",
      releaseClause: null,
      contractNote: "Out of favour under Luis Enrique; gettable only if Liverpool land Diomandé first.",
      probability: 28,
      heatTier: "cool",
      sources: [
        { name: "This Is Anfield",    tier: "A" },
        { name: "Football Transfers", tier: "B" },
        { name: "Liverpool.com",      tier: "B" },
      ],
      lastUpdated: "2026-05-30",
      rumorNote:
        "Sat May 30 — promoted to principal alternative now Gordon has gone to Barcelona. Barcola, 23 and out of Luis Enrique's preferred XI, is realistically available only if Liverpool sign Diomandé first — at which point PSG would likely move for the Ivorian as Barcola's own replacement, freeing him to leave. The same circular market as before, but with one fewer fallback behind it.",
      positionFit: {
        replaces: "Salah (alternative)",
        competesWith: ["Díaz", "Gakpo"],
        depthAfter: "If not Diomandé: Barcola · Díaz · Gakpo",
      },
      stats: {
        apps: 38, goals: 12, assists: 11,
        tacklesPer90: 0.7, passCompletion: 82, progressiveCarries: 5.0,
        cleanSheets: 0, xG: 10.4,
      },
    },
    {
      id: "gordon-2026",
      name: "Anthony Gordon",
      age: 25,
      position: "FWD",
      role: "Left winger",
      nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England",
      foot: "Right",
      image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p232826.png",
      currentClub: "Newcastle",
      currentLeague: "Premier League",
      feeMin: 70, feeMax: 70, feeCurrency: "€m",
      marketValue: 75,
      wageBand: "B",
      contractExpiry: "2028-06-30",
      releaseClause: null,
      contractNote: "Gone — Barcelona medical completed; a five-year deal awaits.",
      probability: 0,
      heatTier: "dead",
      sources: [
        { name: "Sky Sports", tier: "A" },
        { name: "RTÉ",        tier: "A" },
        { name: "ESPN",       tier: "A" },
      ],
      lastUpdated: "2026-05-30",
      rumorNote:
        "Sat May 30 — off the board. Gordon has completed a medical at Barcelona, who agreed a fee around £70m (in instalments to 2031) with Newcastle and saw off Bayern Munich; Hansi Flick is weighing him as a striker after Lewandowski's exit. Liverpool, per Liverpool.com, declined to resume their interest and prioritised other targets — the door swung open for Barça. A tombstone on the ledger now, not a target.",
      positionFit: {
        replaces: "Salah (back-up plan — now closed)",
        competesWith: ["Díaz", "Gakpo"],
        depthAfter: "Joined Barcelona; off Liverpool's list",
      },
      stats: {
        apps: 34, goals: 12, assists: 7,
        tacklesPer90: 1.4, passCompletion: 79, progressiveCarries: 5.2,
        cleanSheets: 0, xG: 10.8,
      },
    },
    {
      id: "jacquet-2026",
      name: "Jérémy Jacquet",
      age: 20,
      position: "DEF",
      role: "Centre-back",
      nationality: "🇫🇷 France",
      foot: "Right",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Jacquet_asse_srfc_2425.png/330px-Jacquet_asse_srfc_2425.png",
      currentClub: "Rennes (loan)",
      currentLeague: "Ligue 1",
      feeMin: 63, feeMax: 70, feeCurrency: "€m",
      marketValue: 35,
      wageBand: "C",
      contractExpiry: "2030-06-30",
      releaseClause: null,
      contractNote: "Signed January 2026; loaned back to Rennes through the spring.",
      probability: 100,
      heatTier: "done",
      sources: [
        { name: "L'Équipe",       tier: "A" },
        { name: "So Foot",         tier: "A" },
        { name: "This Is Anfield", tier: "B" },
      ],
      lastUpdated: "2026-02-15",
      rumorNote:
        "Done — sold by Rennes to Liverpool in the winter window for a club-record €63m (rising to €70m with add-ons) and loaned straight back through May. A February shoulder dislocation ended the loan early; surgery followed. He arrives at Anfield this summer as the 2026-27 centre-back depth signing, twenty years old, the only confirmed name on the incoming sheet.",
      positionFit: {
        replaces: "Quansah (deferred to 2027)",
        competesWith: ["Konaté", "Van Dijk"],
        depthAfter: "Van Dijk · Konaté · Jacquet · academy",
      },
      stats: {
        apps: 22, goals: 0, assists: 1,
        tacklesPer90: 1.6, passCompletion: 85, progressiveCarries: 0.7,
        cleanSheets: 6, xG: 0.2,
      },
    },
  ],
  outgoing: [
    {
      id: "konate-out",
      name: "Ibrahima Konaté",
      position: "DEF",
      destination: "Open — free agent / cut-price sale",
      feeAsk: { min: 0, max: 35, currency: "€m" },
      probability: 70,
      heatTier: "warm",
      sources: [{ name: "Football Today", tier: "B" }, { name: "TeamTalk", tier: "B" }, { name: "Goal", tier: "B" }],
      note: "Sat May 30 — This Is Anfield's explainer this week lays out why Liverpool walked away: an impasse over wages and bonus structure, with the saved money redirected toward replacing Salah. Twelve months left; a cut-price sale this summer is the alternative to losing him for free, and Caught Offside has floated a '£43.2m bargain' as an instant centre-back fix.",
    },
    {
      id: "robertson-out",
      name: "Andy Robertson",
      position: "DEF",
      destination: "Tottenham (free)",
      feeAsk: { min: 0, max: 0, currency: "€" },
      probability: 99,
      heatTier: "done",
      sources: [{ name: "Fabrizio Romano", tier: "S" }, { name: "Empire Of The Kop", tier: "B" }],
      note: "Sat May 30 — done bar the unveiling: a free transfer to De Zerbi's Tottenham, a late Juventus hijack rebuffed. Nine years at Anfield close; the left-back job passes to Kerkez.",
    },
    {
      id: "jones-out",
      name: "Curtis Jones",
      position: "MID",
      destination: "Inter Milan",
      feeAsk: { min: 20, max: 30, currency: "€m" },
      probability: 55,
      heatTier: "warm",
      sources: [{ name: "Sky Sport Italia", tier: "A" }, { name: "Get Italian Football News", tier: "B" }],
      note: "Sat May 30 — still the cleanest live sale: Inter keen around €20m, Liverpool valuing the Anfield-born midfielder at €30m. Hughes and Ausilio have met; Jones is willing, and the fee would help fund the new centre-backs.",
    },
    {
      id: "salah-out",
      name: "Mohamed Salah",
      position: "FWD",
      destination: "Free agent — Al-Ittihad lead",
      feeAsk: { min: 0, max: 0, currency: "€" },
      probability: 100,
      heatTier: "done",
      sources: [{ name: "The National", tier: "B" }, { name: "Goal", tier: "B" }],
      note: "Sat May 30 — the Anfield career is closed; the next club is not. Salah says he will decide 'after the World Cup'; Al-Ittihad lead the betting though they reportedly want a younger squad, Al-Hilal have joined, MLS appeals to his family and Fenerbahçe linger. The right-wing slot is the largest hole on the page.",
    },
    {
      id: "gomez-out",
      name: "Joe Gomez",
      position: "DEF",
      destination: "Serie A (Milan / Roma)",
      feeAsk: { min: 18, max: 22, currency: "€m" },
      probability: 62,
      heatTier: "warm",
      sources: [{ name: "Liverpool.com", tier: "B" }, { name: "Sports Mole", tier: "C" }],
      note: "Twelve months left; named in Slot's sell-to-buy ten.",
    },
    {
      id: "chiesa-out",
      name: "Federico Chiesa",
      position: "FWD",
      destination: "Italy (Napoli / Roma)",
      feeAsk: { min: 10, max: 15, currency: "€m" },
      probability: 70,
      heatTier: "hot",
      sources: [{ name: "Football Italia", tier: "A" }, { name: "DaveOCKOP", tier: "C" }],
      note: "A single-season recoup; the squad spot funds the rebuild.",
    },
    {
      id: "endo-out",
      name: "Wataru Endo",
      position: "MID",
      destination: "Bundesliga / Saudi",
      feeAsk: { min: 8, max: 12, currency: "€m" },
      probability: 58,
      heatTier: "warm",
      sources: [{ name: "Sky Sports", tier: "A" }],
      note: "Squad role reduced post-Mac Allister; modest fee, big wage save.",
    },
    {
      id: "tsimikas-out",
      name: "Konstantinos Tsimikas",
      position: "DEF",
      destination: "Open (Olympiacos / Galatasaray)",
      feeAsk: { min: 12, max: 16, currency: "€m" },
      probability: 52,
      heatTier: "warm",
      sources: [{ name: "Liverpool.com", tier: "B" }],
      note: "Kerkez's understudy slot belongs to academy; Tsimikas is movable.",
    },
    {
      id: "elliott-out",
      name: "Harvey Elliott",
      position: "MID",
      destination: "PL mid-table",
      feeAsk: { min: 30, max: 40, currency: "€m" },
      probability: 44,
      heatTier: "warm",
      sources: [{ name: "Sky Sports", tier: "A" }, { name: "TEAMtalk", tier: "C" }],
      note: "Wirtz's arrival closed the No. 10 ladder behind him.",
    },
    {
      id: "ramsay-out",
      name: "Calvin Ramsay",
      position: "DEF",
      destination: "Loan / sale",
      feeAsk: { min: 4, max: 6, currency: "€m" },
      probability: 36,
      heatTier: "cool",
      sources: [{ name: "Liverpool.com", tier: "B" }],
      note: "Three years on the books, no senior minutes; the inventory clear-out.",
    },
  ],
  sources: [
    "Sky Sports",
    "RTÉ",
    "ESPN",
    "This Is Anfield",
    "Caught Offside",
    "Liverpool.com",
    "Football Transfers",
    "beIN Sports",
    "The National",
    "OLBG",
    "Goal",
    "Sky Sport Italia",
    "Get Italian Football News",
    "Fabrizio Romano",
    "Empire Of The Kop",
    "Liverpool FC",
  ],
};
