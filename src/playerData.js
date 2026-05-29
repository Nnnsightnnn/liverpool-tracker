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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Fri May 29 — the picture firms up around the Brazilian remaining: Juventus had agreed personal terms near €5m a year, but the Italians missing out on Champions League football has drained the move of momentum and Anfield has held its line. He was never the one pushing to leave. Brazil's No. 1 heading into the 2026 World Cup", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Fri May 29 — with Alisson now expected to remain, the £29m Valencia signing is likeliest to go out on loan rather than start in 2026-27, in search of the minutes a season as understudy would deny him. The club's longer-term thinking is still drawn around a future move for Porto's Diogo Costa, the €60m release clause kept in mind", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 40, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 6.4, status: "fit", injuryNote: "Fri May 29 — now expected to leave for nothing: Football Today report the extension talks have collapsed over trophy-linked bonus clauses, and Goal say Real Madrid have abruptly pulled out over an 'alarming dip in form.' The first-choice centre-back all season could walk on a free with twelve months left, and Hughes is already canvassing Lacroix, van Hecke and Diomande as replacements", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
    physical: { height: 194, weight: 95, pace: 78, acceleration: 76, sprintSpeed: 80 },
    career: [
      { years: "2014-2017", club: "Sochaux", fee: null, type: "youth" },
      { years: "2017-2021", club: "RB Leipzig", fee: "€15M", type: "senior" },
      { years: "2021-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Fri May 29 — the Konaté situation only sharpens his own: with two centre-backs now being hunted, the academy product remains among the likeliest sell-to-buy departures, twelve months left on his deal and a Serie A move openly canvassed. A hard call for Hughes — sell the depth he may suddenly need, or bank the fee", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 30, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 6.7, status: "fit", injuryNote: "Fri May 29 — gone in all but signature: Fabrizio Romano's 'here we go' confirms the free transfer to Roberto De Zerbi's Tottenham, a late Juventus attempt to hijack the deal rebuffed. Nine years, two title runs and one of the great value signings of the modern era; with the captain bound for London the left-back slot now passes unarguably to Milos Kerkez", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Mon May 25 — knee surgery in January ended his season early; now targeting a return to full training in pre-season", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Mon May 25 — season over: a stop-start debut campaign disrupted by muscular problems, the latest of which cost him Sunday's finale. A full, uninterrupted pre-season is the priority before the 2026-27 push", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Fri May 29 — the contract stand-off holds: no talks have opened, the midfielder now into the final two years of his deal, his camp content to let the summer breathe. Real Madrid's interest remains live; Football365 puts Liverpool's internal sale valuation at €120m if July passes without movement — a number the hierarchy will eventually have to act on or abandon", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
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
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 28, goals: 2, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 6.9, status: "fit", injuryNote: "Fri May 29 — the cleanest sale on the board: Inter Milan keen around €20m, Liverpool valuing the Anfield-born midfielder at €30m. Hughes and Piero Ausilio have met; Jones is willing to go, and the fee is one of the surer 'sell-to-buy' levers to help fund a defence that suddenly needs two new faces", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 39, goals: 10, assists: 10, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.0, status: "fit", injuryNote: "Fri May 29 — the destination question hardens with the Anfield career closed: The National still has Al-Ittihad likeliest, though Saudi journalist Majed Hood briefs that the SPL champions now want to lower their squad's average age. MLS side San Diego FC are reported to hold genuine appeal to Salah's family, with Fenerbahce lingering at around €13m a year. No decision yet; the 33-year-old is taking his time", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
  generatedAt: "2026-05-29T08:00:00Z",
  overview:
    "A week past the final whistle and the table now reads less as a record of the season than as a map of the summer's intrigue. Arsenal's 85 points crown a Champions League quartet — City 78, United 71, Villa 65 — above a Liverpool fifth on 60, the European place secured and not much else to show for a hard year. The most loaded row is the sixth: Bournemouth's Europa League finish under Andoni Iraola, who has now left the club and let it be known he is interested in the Liverpool job, even as Anfield insists Slot stays. Crystal Palace's FA Cup carries them into Europe from fifteenth, Brighton hold the Conference League play-off in eighth, and Brentford sit a cruel point adrift of them on the same 53. West Ham, Burnley and Wolves go down.",
  teams: {
    "Arsenal": "Champions — 85 points, the first English title-winner since 2017 to do it without lifting a domestic cup.",
    "Manchester City": "Second on 78 — Pep restored to the Champions League, never within reach of Arsenal across the run-in.",
    "Manchester United": "Third on 71 — Amorim's first full season delivers a quiet return to Europe's top table.",
    "Aston Villa": "Fourth on 65 — Emery takes the last automatic UCL berth; the 4-2 over Liverpool on May 15 the night that sealed it.",
    "Liverpool": "Fifth on 60 — twenty-five points behind Arsenal; the Champions League place was the floor FSG set, and a sell-to-buy window now headlined by a possible Konaté free transfer defines the rebuild.",
    "Bournemouth": "Sixth and Europa League — Iraola's overachievement complete; he has since departed, and reporting has him interested in the Liverpool job.",
    "Sunderland": "Seventh and into Europe in their promotion season — first up at Nashville for Liverpool's pre-season opener on July 25.",
    "Brighton": "Eighth — a Conference League play-off place keeps Brighton in Europe for a third straight summer.",
    "Brentford": "Ninth on 53 — level with Brighton on points but out of Europe for the first time in their top-flight history.",
    "Chelsea": "Tenth on 52 — Champions League absent for a third successive year; the close-season repair work continues.",
    "Crystal Palace": "Fifteenth on points, but the FA Cup carries them into Europe — Glasner takes Palace to the Europa League group stage for the first time.",
    "Tottenham": "Survived in 17th — De Zerbi installed as head coach, Andy Robertson's free transfer given its 'here we go'; the squad reshapes fast.",
    "West Ham": "Relegated in 18th — a 3-0 win at Leeds on the final day not enough; down to the Championship for the first time since 2012.",
    "Burnley": "Relegated — 22 points and an immediate return to the Championship.",
    "Wolves": "Bottom on 20 — comfortably the season's worst side, relegated by a distance.",
  },
};

// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Centre-Back Walks Toward The Door.",
    byline: "Football Today / TeamTalk / Goal",
    dateline: "Liverpool · 29 May",
    category: "Transfers",
    body: "In April it read like a formality; by Friday it reads like a loss. Ibrahima Konaté, Liverpool's first-choice centre-back through the whole hard season, is now expected to leave for nothing, his extension foundered on the kind of detail that sinks these things — bonus clauses tied to trophies a fifth-placed side did not win. The crueller note arrives from Madrid, where the club that loomed over the talks for a year have quietly removed him from their list, citing a dip in form. A defender of his standing, leaving on a free, says more about the summer than any incoming fee will.",
  },
  {
    n: "02",
    headline: "Iraola Leaves A Door Ajar.",
    byline: "Sky Sports / The Hard Tackle / This Is Anfield",
    dateline: "Bournemouth · 29 May",
    category: "Manager",
    body: "He has just finished the best work of his managerial life — a sixth-place Bournemouth, a first European campaign in the club's history — and then let it be known he would listen to Liverpool. Sky Sports report Andoni Iraola's talks with AC Milan are not progressing and that Anfield, or Leverkusen, is where his interest sits. The official line holds that Slot stays. But Iraola's bond with Richard Hughes, forged on the south coast, keeps the name in circulation, and the bookmakers have already made him the second name on the list. A subplot, for now. Subplots have a way of growing in a quiet summer.",
  },
  {
    n: "03",
    headline: "Robertson, And Nine Years, Get Their 'Here We Go'.",
    byline: "Fabrizio Romano / Empire Of The Kop / Goal",
    dateline: "London · 28 May",
    category: "Farewells",
    body: "Fabrizio Romano spent the three syllables on Thursday — here we go — and a nine-year Anfield story turned administrative. Andy Robertson will join Tottenham on a free, choosing De Zerbi and the Premier League over a late Juventus push, the move pre-agreed months ago and unlocked only by Spurs surviving on the final day. He arrives in London as the thing De Zerbi keeps demanding: a winner's temperament, a dressing-room voice. He leaves Merseyside as one of the great value signings of the modern era, £8m once, priceless across two title runs. The full-back position he owned now belongs, unarguably, to Milos Kerkez.",
  },
  {
    n: "04",
    headline: "The Whole Front Line Hangs On A Teenager In Leipzig.",
    byline: "This Is Anfield / Caught Offside / Liverpool.com",
    dateline: "Leipzig · 28 May",
    category: "Transfers",
    body: "Replacing Mohamed Salah was always going to be less a signing than a negotiation with reality. Liverpool's chosen answer is Yan Diomande, RB Leipzig's 19-year-old Ivorian, and every obstacle is in place: a release clause near £86m, a Leipzig board with Champions League money and no reason to sell, and an agency dispute between Roc Nation and Maxidel that has somehow reached the Court of Arbitration for Sport. Behind him wait Bradley Barcola, gettable only if Diomande comes first, and Anthony Gordon, the homegrown fallback. The plan is bold. The plan is also, for now, entirely contingent.",
  },
  {
    n: "05",
    headline: "The Only Signings Confirmed Are Sixteen And Seventeen.",
    byline: "Sky Germany / Fabrizio Romano / Liverpool.com",
    dateline: "Liverpool · 28 May",
    category: "Football News",
    body: "While the senior squad empties, the future quietly fills. Sky Germany call the capture of Samuel Martinez — a 17-year-old Colombian from Atletico Nacional — a done deal: a medical, a five-year contract, a season in the academy before first-team training is even discussed. The other name, Hertha's Kennet Eichhorn, is a study in patience: at sixteen he cannot legally sign for an English club until July 2027, the Brexit wall on under-18 moves unbothered by how good he is. Liverpool can only shake hands on a pre-contract and wait. It is a strange portrait of a giant — losing internationals for free, banking teenagers for 2027.",
  },
];

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-05-29T08:00:00Z",
  summary:
    "Friday, and the defence has become the story. Liverpool are now braced to lose Ibrahima Konaté for nothing: Football Today and TeamTalk report this week that extension talks have collapsed over trophy-bonus clauses, and that Real Madrid — long the shadow over the file — have abruptly walked away, spooked by the Frenchman's dip in form. Richard Hughes is consequently said to want two centre-backs, with Crystal Palace's Maxence Lacroix, Brighton's Jan Paul van Hecke and Sporting's Ousmane Diomande among the names canvassed. The manager file reopened too: Sky Sports and The Hard Tackle report Andoni Iraola, freshly out of a Bournemouth side he carried into Europe, is 'interested' in Anfield even as the club insists Arne Slot stays. And the long goodbyes firm up — Fabrizio Romano's 'here we go' lands on Andy Robertson's free transfer to Roberto De Zerbi's Tottenham, while RB Leipzig's Yan Diomande is now framed as the priority to replace Mohamed Salah, an £86m release clause and a Court of Arbitration agency dispute both in the way.",
  keyTopics: [
    {
      title: "Konaté Set To Leave For Nothing As Talks Collapse, Real Madrid Pull Out (Football Today / TeamTalk / Goal, reported Thu-Fri May 28-29)",
      detail:
        "The summer's biggest swing emerged this week: Ibrahima Konaté, whose extension looked all but agreed in April, is now expected to leave Anfield as a free agent. Football Today reports the talks foundered on the small print — trophy-linked bonus clauses — while Goal carries Real Madrid abruptly removing him from their shortlist over an 'alarming dip in form.' The Frenchman has twelve months left and no extension on the table; the player who was Liverpool's first-choice centre-back all season may walk for free.",
      category: "transfers",
    },
    {
      title: "Hughes Wants Two Centre-Backs: Lacroix, Van Hecke, Diomande On The Board (TeamTalk / Sky Sports / Liverpool World, reported Thu-Fri May 28-29)",
      detail:
        "Konaté's drift toward the exit reframes the whole window. TeamTalk reports sporting director Richard Hughes wants at least two new centre-backs this summer, with Crystal Palace's Maxence Lacroix (26, approaching his peak), Brighton's Jan Paul van Hecke (refusing a new deal with 18 months left) and Sporting's Ousmane Diomande (a £70m buyout, tied to Lisbon until 2030) the names most credibly linked. Bastoni, Schlotterbeck and Malick Thiaw also feature. Marc Guehi, last winter's target, is long gone to Manchester City.",
      category: "transfers",
    },
    {
      title: "Iraola 'Interested' In Liverpool As AC Milan Talks Stall (Sky Sports / The Hard Tackle / This Is Anfield, reported Fri May 29)",
      detail:
        "The manager file refuses to close. Sky Sports report this week that talks between Andoni Iraola and AC Milan are 'not progressing,' and that the Spaniard — who has just left a Bournemouth side he carried to a sixth-place Europa League finish — is instead interested in Liverpool or Bayer Leverkusen. The club's line is that Slot stays, but Iraola's strong relationship with Hughes from their Bournemouth years keeps his name warm; bookmakers make him second-favourite should the dugout ever come open.",
      category: "general",
    },
    {
      title: "'Here We Go': Robertson's Free Transfer To De Zerbi's Tottenham (Fabrizio Romano / Empire Of The Kop / Goal, reported Thu May 28)",
      detail:
        "Fabrizio Romano gave it the formula on Thursday — 'here we go' — for Andy Robertson's free transfer to Tottenham. The Scotland captain leaves after nine years and chooses to stay in the Premier League with Roberto De Zerbi, who convinced him after Spurs' late survival; a Juventus attempt to hijack the deal was rebuffed. Robertson and Bournemouth's Marcos Senesi were pre-agreed earlier in the year, both contingent on Tottenham staying up. A nine-year Anfield chapter closes administratively.",
      category: "transfers",
    },
    {
      title: "Diomande The Priority To Replace Salah — £86m Clause, A CAS Agency Row In The Way (This Is Anfield / Caught Offside / Liverpool.com, reported this week)",
      detail:
        "Liverpool have made RB Leipzig's 19-year-old Ivorian Yan Diomande their top target to succeed Mohamed Salah. The complications stack up: a release clause near £86m, a Leipzig side with little appetite to sell after securing Champions League football, and a contractual tug-of-war between Roc Nation and rival agency Maxidel that has reached the Court of Arbitration for Sport. Romano confirms talks are live; PSG, needing a Barcola replacement themselves, lurk as the obvious rival.",
      category: "transfers",
    },
    {
      title: "If Not Diomande: Barcola And Gordon As The Fallbacks (This Is Anfield / AOL / Football Transfers, reported this week)",
      detail:
        "Reporting this week confirms Liverpool's interest in two elite alternatives behind Diomande. PSG's Bradley Barcola, 23 and out of favour under Luis Enrique, becomes gettable only if Liverpool land Diomande first — PSG would then move for the Ivorian as Barcola's own replacement. Newcastle's Anthony Gordon, 25, is the homegrown option, with a bid mooted. Hoffenheim's Bazoumana Toure and Leipzig's Antonio Nusa round out the longer list as the post-Salah wing is rebuilt.",
      category: "transfers",
    },
    {
      title: "Salah's Next Chapter: Al-Ittihad Lead, San Diego And Fenerbahce In The Mix (The National / Liverpool.com / Goal, reported this week)",
      detail:
        "With the Anfield career officially closed, the destination question hardens. The National's round-up still lists Saudi Pro League champions Al-Ittihad as the likeliest landing spot, though Saudi journalist Majed Hood briefs that the club are trying to reduce their squad's average age. MLS side San Diego FC are reported to hold genuine appeal to Salah's family, and Fenerbahce remain in the picture at around €13m a year. No decision yet; the 33-year-old is taking his time.",
      category: "transfers",
    },
    {
      title: "First Of The Intake: Martinez A 'Done Deal', Eichhorn Blocked By Brexit (Sky Germany / Fabrizio Romano / Liverpool.com, reported this week)",
      detail:
        "The academy pipeline is where the only signings are confirmed. Sky Germany call 17-year-old Colombian Samuel Martinez (Atletico Nacional) a 'done deal,' flying in for a medical before a five-year contract; he joins the academy first, first-team training pencilled for next summer. By contrast, Hertha Berlin's 16-year-old Kennet Eichhorn cannot officially sign until July 2027 — the Brexit wall on under-18 moves holds — so Liverpool may only agree a pre-contract this summer.",
      category: "general",
    },
    {
      title: "Jones Still The Live Sale: Inter Keen At €20m, Liverpool Want €30m (Sky Sport Italia / Football Italia / Get Italian Football News, reported this week)",
      detail:
        "The Curtis Jones file rolls on beneath the bigger stories. Inter Milan's interest is concrete — a figure around €20m floated — but Liverpool's valuation sits at €30m for an Anfield-born midfielder entering the final year of his deal. Hughes and Piero Ausilio met earlier in the window; Jones is open to the move. It is one of the cleaner 'sell-to-buy' levers available to fund a defence that suddenly needs two new faces.",
      category: "transfers",
    },
    {
      title: "Pre-Season Opens In Nashville: Sunderland, July 25 (Liverpool FC / NBC Sports / SI, confirmed this week)",
      detail:
        "Eight competitive-free weeks stretch ahead before the first whistle. Liverpool's US tour opens against newly promoted Sunderland at Nashville's Geodis Park on July 25 — a first visit to the city — with Wrexham at Yankee Stadium on July 29 and Leeds at Soldier Field on August 2. World Cup returnees will be eased in late, academy minutes heavy throughout. It is the first proper look at whatever shape the rebuilt squad takes.",
      category: "matches",
    },
  ],
  sources: [
    "Football Today",
    "TEAMtalk",
    "Goal",
    "Sky Sports",
    "The Hard Tackle",
    "This Is Anfield",
    "Fabrizio Romano",
    "Empire Of The Kop",
    "Caught Offside",
    "Liverpool.com",
    "AOL",
    "Football Transfers",
    "The National",
    "Sky Germany",
    "Liverpool World",
    "Sky Sport Italia",
    "Football Italia",
    "Get Italian Football News",
    "Liverpool FC",
    "NBC Sports",
    "SI",
    "Football365",
    "Rousing The Kop",
    "Anfield Index",
  ],
};

// ─── Transfer Targets (2026 summer window) ─────────────────────────────────
// Hand-curated; refresh via Perplexity the same way NEWS_DIGEST is refreshed.
// heatTier: "hot" (≥65%) | "warm" (40-64%) | "cool" (<40%) | "done" | "dead"
// sources[].tier: "S" (Romano-class) | "A" (major outlet) | "B" (beat) | "C" (aggregator)
export const TRANSFER_TARGETS = {
  generatedAt: "2026-05-28T21:30:00Z",
  summary:
    "Thursday morning, the manager has spoken and the window has its shape. Mohamed Salah is gone; Andy Robertson, per Paul Joyce, is hours from Tottenham on a free; Federico Chiesa is expected to follow them out. Edwards's incoming sheet, narrower than the spring rumour mill suggested, now sits on a single first-pick name — Yan Diomandé, the 19-year-old Ivorian winger at RB Leipzig, scouted hard and reported by The Athletic on May 22 as the planned Salah successor — with Anthony Gordon held in reserve as Barcelona take the lead in the £80m race. Jérémy Jacquet, sold by Rennes for €63m in January and loaned back through the spring, is the confirmed centre-back arrival. The outgoing sheet, by contrast, runs long: Gomez, Endo, Tsimikas, Elliott, Ramsay all named in Slot's sell-to-buy ten.",
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
      feeMin: 90, feeMax: 100, feeCurrency: "€m",
      marketValue: 70,
      wageBand: "C",
      contractExpiry: "2029-06-30",
      releaseClause: null,
      contractNote: "Leipzig under no pressure; the demand is structural, not financial.",
      probability: 58,
      heatTier: "warm",
      sources: [
        { name: "The Athletic",  tier: "A" },
        { name: "Goal",          tier: "B" },
        { name: "Fox Sports",    tier: "B" },
      ],
      lastUpdated: "2026-05-22",
      rumorNote:
        "Fri May 22 — The Athletic puts a name to the Salah-replacement file: Yan Diomandé, the 19-year-old Ivorian winger Leipzig signed last summer, two-footed, with the fifth-fastest sprint speed in the Bundesliga. Liverpool's scouts have him as the structural fit; Leipzig want a package exceeding €100m to open formal talks. PSG are tracking. Champions League qualification — secured — sharpens the pitch.",
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
      feeMin: 75, feeMax: 85, feeCurrency: "€m",
      marketValue: 75,
      wageBand: "B",
      contractExpiry: "2028-06-30",
      releaseClause: null,
      contractNote: "Three years left; Newcastle open at the right price.",
      probability: 34,
      heatTier: "cool",
      sources: [
        { name: "Fabrizio Romano", tier: "S" },
        { name: "The Athletic",     tier: "A" },
        { name: "Sky Sports",       tier: "A" },
      ],
      lastUpdated: "2026-05-27",
      rumorNote:
        "Wed May 27 — Romano confirms Barcelona have taken the lead in the £80m race; Gordon, a Liverpudlian, was understood for months to want the move to Anfield, but Newcastle's preferred destination is Catalonia and the player's agents have not closed the door on either path. Liverpool remain one of the two final options. Bayern Munich a third party watching from distance.",
      positionFit: {
        replaces: "Salah (back-up plan)",
        competesWith: ["Díaz", "Gakpo"],
        depthAfter: "If Diomandé fails: Gordon · Díaz · Gakpo",
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
      id: "salah-out",
      name: "Mohamed Salah",
      position: "FWD",
      destination: "Al-Ittihad (done)",
      feeAsk: { min: 60, max: 60, currency: "€m" },
      probability: 100,
      heatTier: "done",
      sources: [{ name: "Liverpool FC", tier: "S" }],
      note: "Deal completed; the right-wing slot is the largest hole on the page.",
    },
    {
      id: "robertson-out",
      name: "Andy Robertson",
      position: "DEF",
      destination: "Tottenham (free)",
      feeAsk: { min: 0, max: 0, currency: "€" },
      probability: 96,
      heatTier: "done",
      sources: [{ name: "Paul Joyce / The Times", tier: "S" }, { name: "Anfield Watch", tier: "B" }],
      note: "Mon May 25 — bidding farewell after Brentford draw. Paul Joyce: 'expected to join Tottenham on a free transfer now their Premier League status is safe.' Was £160k/wk at Anfield.",
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
    "The Athletic",
    "Fabrizio Romano",
    "Sky Sports",
    "Paul Joyce / The Times",
    "L'Équipe",
    "So Foot",
    "This Is Anfield",
    "Anfield Watch",
    "Goal",
    "Fox Sports",
    "Football Italia",
    "Liverpool.com",
    "Sports Mole",
    "TEAMtalk",
    "DaveOCKOP",
    "Liverpool FC",
  ],
};
