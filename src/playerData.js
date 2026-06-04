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
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 40, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 6.4, status: "fit", injuryNote: "Thu Jun 4 — formal now on both ends: Liverpool have officially confirmed his exit when the contract lapses June 30, and Madrid have closed the four-year deal — the unveiling parked until after Sunday's presidential election at the Bernabéu. The right-sided centre-back slot is an opening on paper as well as in fact; Club Brugge's Ordóñez has re-emerged at the head of the list to fill it", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
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
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 28, goals: 2, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 6.9, status: "fit", injuryNote: "Thu Jun 4 — he has picked his lane: Jones is now 'prioritising' Inter, talks formally opened in Monte Carlo between Hughes and Ausilio. The gap is wide — a £17m opener against a £35m ask — and Dumfries has been floated as a makeweight coming the other way; missing England's World Cup squad has only hardened his case for guaranteed minutes", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
    physical: { height: 182, weight: 74, pace: 72, acceleration: 74, sprintSpeed: 70 },
    career: [
      { years: "2010-2019", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2019-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", outSince: "2026-02-12", injuryNote: "Thu Jun 4 — the rehab race is won: named in Japan's World Cup squad and set to captain them in America, four months after rupturing ankle ligaments at Sunderland. He returns to Anfield pre-season as a likely summer sale, his squad role reduced — but the comeback itself is complete", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 39, goals: 10, assists: 10, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.0, status: "fit", injuryNote: "Thu Jun 4 — his agent slows the clock: Ramy Abbas Issa insists 'no one knows' where Salah plays next, pushing back on the Egypt staffer who had a decision days away. The choice is parked until after the World Cup unless an irresistible offer lands sooner; Juventus, Turkey, Saudi Arabia and MLS all remain in the race", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
  "Rennes":           "https://img.uefa.com/imgml/TP/teams/logos/50x50/50097.png",
  "Rennes (loan)":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50097.png",
  "Club Brugge":      "https://upload.wikimedia.org/wikipedia/en/d/d0/Club_Brugge_KV_logo.svg",
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
// Last refresh: 2026-06-04 — FINAL 20-team table re-verified against ESPN, 2025-26 season complete (MW38).
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
  generatedAt: "2026-06-04T08:10:00Z",
  overview:
    "The table is finished but, as of Thursday, it finally has a custodian: Andoni Iraola signs his Liverpool contract today, and the fifth-place row he inherits — 60 points, twenty-five off Arsenal's 85, a Champions League place banked almost apologetically — is the precise measure of the job. Above him the order reads Arsenal, City on 78, United on 71, Villa on 65; below him sits the sixth-place Bournemouth side he built, the best season in their history now serving as his audition tape. The rows keep trading with each other: Konaté's exit from the fifth-place side to the Spanish champions is now formal, Curtis Jones is prioritising a move to Inter, and the relegated bottom three keep seeding Liverpool's shopping lists. The foot of the table is settled; everything above Liverpool's row is a target, and everything in it is under review.",
  teams: {
    "Arsenal": "Champions on 85 — the gap to Liverpool's row, twenty-five points, is the number Iraola was hired to erase.",
    "Manchester City": "Second on 78 — back in the Champions League; an early Diomandé suitor, though that race has since narrowed to Liverpool and PSG.",
    "Manchester United": "Third on 71 — Amorim's quiet return to the top table; beaten by Kirkby for 15-year-old Josh Abe, who turned down their £50k-a-week terms.",
    "Aston Villa": "Fourth on 65 — Emery takes the last automatic UCL berth; the 4-2 over Liverpool on May 15 the night that sealed it.",
    "Liverpool": "Fifth on 60 — Champions League secured, and as of today a head coach signed: Iraola puts pen to paper on a two-year deal, with a £170m double of Diomandé and Ordóñez reportedly approved to start the rebuild.",
    "Bournemouth": "Sixth and Europa League — a club-best season, now being asset-stripped by Anfield: Iraola signs today, Elphick and Cooper likely follow, and Romano hints Kroupi could be next.",
    "Sunderland": "Seventh and into Europe in their promotion season — first up at Nashville for Liverpool's pre-season opener on July 25.",
    "Brighton": "Eighth — a Conference League play-off place keeps Brighton in Europe for a third straight summer; van Hecke still a Liverpool defensive file.",
    "Brentford": "Ninth on 53 — level with Brighton on points but out of Europe for the first time in their top-flight history.",
    "Chelsea": "Tenth on 52 — Champions League absent for a third successive year; lost the race for Liverpool academy winger Josh Abe this week.",
    "Newcastle": "Twelfth on 49 — outside Europe after cashing in on Anthony Gordon's ~£70m move to Barcelona.",
    "Crystal Palace": "Fifteenth on points, but a Conference League win carries them into Europe — Wharton stays guarded at Selhurst, and their rejected £34.6m bid for Ordóñez set the floor Liverpool must now clear.",
    "Tottenham": "Survived in 17th — De Zerbi installed and Andy Robertson signed on a free from Liverpool, the left-back closing nine years at Anfield.",
    "West Ham": "Relegated in 18th — a 3-0 win at Leeds on the final day not enough; Jarrod Bowen still the budget name on Liverpool's winger list.",
    "Burnley": "Relegated — 22 points and an immediate return to the Championship.",
    "Wolves": "Bottom on 20 — comfortably the season's worst side, relegated by a distance.",
  },
};

// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Pen, Meet Paper.",
    byline: "Sky Sports / Caught Offside",
    dateline: "Merseyside · 4 June",
    category: "Manager",
    body: "Thursday is the day the interregnum ends. Andoni Iraola travels to Merseyside to sign a contract through June 2028 — two years, no more, because the Basque has never signed longer and did not start now. Fabrizio Romano, watching the paperwork, calls the announcement 'soon.' There is a confession buried in the timing: FSG, Romano reports, had second thoughts about sacking Arne Slot at all, hesitating even as Bournemouth's coach waited. The doubt has passed. By the weekend Liverpool will have a head coach whose unbeaten spring embarrassed richer sides, a four-man staff trailing him up the M6, and seven weeks to turn a fifth-place squad into an argument.",
  },
  {
    n: "02",
    headline: "Yes, And Yes.",
    byline: "Foot Mercato / Sky Germany",
    dateline: "Leipzig · 3 June",
    category: "Transfers",
    body: "Yan Diomandé has solved his half of the transfer and left the hard part to the clubs. Sky Germany declared a verbal green light for PSG; within hours Foot Mercato's Santi Aouna had the fuller picture — the 19-year-old has said yes to Paris and to Liverpool, and will pull on whichever shirt arrives with a club-to-club agreement attached. Leipzig, Champions League secured and under no obligation, hold the door and name the toll, upwards from £85m. Romano adds the detail that matters: the Ivorian wants resolution before the World Cup kicks off June 11. The first signing of the Iraola era may be decided by a fax machine in Saxony.",
  },
  {
    n: "03",
    headline: "An Election, A Defender.",
    byline: "This Is Anfield / Managing Madrid",
    dateline: "Madrid · 3 June",
    category: "Farewells",
    body: "The exit is no longer reported; it is filed. Liverpool have formally confirmed Ibrahima Konaté leaves when his contract lapses on June 30, and at the other end of the corridor Real Madrid have closed a four-year deal that waits, of all things, on democracy — the unveiling parked until after Sunday's presidential election, the signing folded into Florentino Pérez's campaign literature. Five seasons, two managers, one Champions League final. The centre-back who arrived from Leipzig at 22 departs at 27 as a manifesto bullet point, and the right side of Liverpool's defence is now, formally, an opening.",
  },
  {
    n: "04",
    headline: "The One Who Stayed.",
    byline: "TeamTalk / SportBible",
    dateline: "Kirkby · 3 June",
    category: "Football News",
    body: "In a week of leavings, the academy supplied the counter-narrative. Josh Abe is fifteen, left-footed, a winger who has worn Liverpool kit since he was four, and — by the reckoning of the scouts who follow such things — among the most coveted footballers of his age anywhere. Chelsea, Manchester United and Manchester City came with offers reported at £50,000 a week. He signed scholarship terms at Kirkby instead, a pre-contract binding him to a three-year professional deal from July 2027, after months of patient work by Julian Ward. Konaté walks for free; a boy who could have done the same chose to stay. Somewhere in that is the whole summer.",
  },
  {
    n: "05",
    headline: "Eleven Go, One Stays Home.",
    byline: "This Is Anfield",
    dateline: "Prague · 2 June",
    category: "Injuries",
    body: "The World Cup squads are in, and they read like an audit of Liverpool's season. Eleven Reds go to America — Van Dijk, Gravenberch and Gakpo with the Dutch, and Wataru Endo, who ruptured ankle ligaments in February and willed himself back in time to captain Japan anyway, the rehab race of the spring won at the wire. Sixteen stay behind: Frimpong axed by Koeman for the injury pattern that shadowed his debut year, Ekitike's Achilles long since ruling him out of France's plans. The cruellest line belongs to Vítězslav Jaroš, the loanee goalkeeper whose serious knee injury cost him the Czech squad days before it was named.",
  },
];

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-06-04T08:10:00Z",
  summary:
    "Thursday is signing day: Andoni Iraola is travelling to Merseyside to put pen to paper on a two-year contract running to June 2028, Fabrizio Romano calling the official announcement 'soon' — Liverpool will have their new head coach confirmed before the World Cup opens on June 11. The first deal of his era is already contested: RB Leipzig's Yan Diomandé has, per Foot Mercato, said yes to BOTH Liverpool and PSG and will join whichever club strikes an agreement with Leipzig, Romano suggesting the winger wants his future settled before the tournament and that the deal could even land next week. Behind it the in-tray thickens — Football365 reports the first two Iraola signings, Diomandé plus Club Brugge centre-back Joël Ordóñez, could cost a combined £170m, while Romano drops a hint at a reunion with Bournemouth's £100m-rated striker Eli Junior Kroupi. The out-tray moves too: Konaté's Anfield exit is now formally confirmed with Madrid finalising his four-year deal, and Curtis Jones is 'prioritising' Inter after Richard Hughes met Piero Ausilio in Monte Carlo. Salah's camp, meanwhile, pushes back on the 'days away' talk — agent Ramy Abbas insists 'no one knows' where he plays next.",
  keyTopics: [
    {
      title: "Signing Day: Iraola Travels To Merseyside To Sign A Two-Year Deal (Sky Sports / Caught Offside, reported Thu Jun 4)",
      detail:
        "The appointment becomes ink today. Sky Sports reports Andoni Iraola is travelling to Liverpool on Thursday to sign a contract running to June 2028, with Fabrizio Romano confirming the deal is being signed today and the official announcement is 'soon.' The two-year length was Iraola's own request — he has never signed longer — and Romano adds FSG even had second thoughts about the Slot sacking before committing to the Basque. His staff list now runs four deep: Pablo de la Torre, Tommy Elphick, Shaun Cooper and Tom Webber.",
      category: "general",
    },
    {
      title: "Diomandé Says Yes To Both: Liverpool And PSG Now Race For Leipzig's Winger (Foot Mercato / Sky Germany / Goal, reported Wed Jun 3-Thu Jun 4)",
      detail:
        "The first transfer of the Iraola era turns into a two-club sprint. Sky Germany reported overnight that Yan Diomandé has given PSG a verbal green light — but Foot Mercato's Santi Aouna clarifies the 19-year-old has said yes to BOTH Paris and Liverpool and will join whichever strikes a club-to-club deal with Leipzig. Romano says the Ivorian wants his future settled before the World Cup starts on June 11 and that a deal could be completed next week; Leipzig, with no need to sell, sit back and let the price climb from a £85m floor.",
      category: "transfers",
    },
    {
      title: "£170m Double: Ordóñez Re-Emerges As The Centre-Back Beside The Diomandé File (Football365 / Sky Sports, reported Wed Jun 3)",
      detail:
        "A name from January returns to the top of the defensive list. Football365 reports the first two signings of the Iraola era have been 'approved' — Diomandé plus Club Brugge's 21-year-old centre-back Joël Ordóñez, at a combined cost up to £170m. Sky Sports has previously put the Ecuadorian at around £43m, though Belgian reporting cautions no formal offer has yet landed. With Konaté's exit formal and only Van Dijk, Gomez and the returning Jacquet left standing, the right-sided centre-back is the window's most urgent buy.",
      category: "transfers",
    },
    {
      title: "Romano Hints At A £100m Kroupi Reunion As Iraola's Striker Plan Forms (TeamTalk / GiveMeSport, reported Wed Jun 3)",
      detail:
        "The 'world-class' tease has a name. Confirming Iraola's contract length on Wednesday, Romano dropped a heavy hint that Liverpool could move for Bournemouth's Eli Junior Kroupi — 13 Premier League goals for Iraola's sixth-placed Cherries last season. Bournemouth have slapped a deterrent £80m-£100m valuation on the teenager and plan to resist a second straight summer of departures to Anfield, having already lost their manager and likely two assistants there.",
      category: "transfers",
    },
    {
      title: "Konaté's Exit Goes Formal; Madrid Finalise And Wait On An Election (This Is Anfield / Managing Madrid, reported Wed Jun 3)",
      detail:
        "The verbal agreement of Wednesday hardens into paperwork. Liverpool have now formally confirmed Konaté departs when his deal lapses June 30, and Madrid-side reporting says the four-year contract is fully closed by Florentino Pérez — with the official unveiling parked until after Sunday's presidential election at the Bernabéu. A move that began as a rumour ends, fittingly for this Madrid, as an administrative footnote to a campaign event.",
      category: "transfers",
    },
    {
      title: "Jones 'Prioritising' Inter After Monte Carlo Talks — And A Dumfries Twist (This Is Anfield / Liverpool.com, reported Tue Jun 2-Wed Jun 3)",
      detail:
        "The midfielder has picked his preference. Curtis Jones is now described as prioritising Inter Milan, who opened talks when Richard Hughes met Piero Ausilio in Monte Carlo on Tuesday — though Inter's £17m opener is less than half Liverpool's £35m ask. Missing England's World Cup squad has sharpened his appetite for guaranteed minutes, and one creative wrinkle is in the air: Denzel Dumfries, available for around £21.7m via release clause, could come the other way as a makeweight right-back.",
      category: "transfers",
    },
    {
      title: "Salah's Agent Pushes Back: 'No One Knows' Where He Plays Next (This Is Anfield / Africa Soccer, reported Wed Jun 3)",
      detail:
        "A brake on the breathless countdown. After an Egypt staffer claimed a decision was days away, Salah's agent Ramy Abbas Issa insisted 'no one knows' where the forward will play next season — the decision parked until after the World Cup unless a compelling offer lands sooner. Juventus, the Turkish pair, Saudi Arabia and MLS all remain in a race whose only fixed point is that it no longer runs through Anfield.",
      category: "transfers",
    },
    {
      title: "Josh Abe, 15, Rejects £50k-A-Week Offers From Rivals To Stay At Kirkby (TeamTalk / SportBible, reported Wed Jun 3)",
      detail:
        "A win that cost nothing and might be worth the most. Josh Abe — a 15-year-old left-footed winger on Liverpool's books since the age of four and rated among the hottest prospects in world football for his age group — has signed scholarship terms with a pre-contract for a three-year professional deal from July 2027, turning down offers reported at up to £50,000 a week from Chelsea, Manchester United and Manchester City. Julian Ward led months of talks to keep him.",
      category: "general",
    },
    {
      title: "World Cup Ledger: 11 Reds Called Up, Endo Wins His Fitness Race, Jaros Loses His (This Is Anfield, reported late May-Jun 1)",
      detail:
        "The tournament that frames Liverpool's summer now has its squad lists. Eleven Liverpool players go — Van Dijk, Gravenberch and Gakpo with the Dutch, Endo captaining Japan after winning an intense rehab race on the ankle ligaments he ruptured in February — while sixteen stay home, Frimpong axed by Koeman over his stop-start injury record. Cruellest of all is loanee goalkeeper Vítězslav Jaroš, ruled out of the Czech squad by a serious knee injury.",
      category: "injuries",
    },
    {
      title: "Pre-Season In America: The First Iraola Teamsheet Lands July 25 (Liverpool FC / NBC Sports, confirmed this week)",
      detail:
        "The new man's first XI is seven weeks out. The US tour opens against Sunderland at Nashville's Geodis Park on July 25, then Wrexham at Yankee Stadium on July 29 and Leeds at Soldier Field on August 2 — with World Cup returnees staggered, expect academy names alongside whichever signings the early-moving window has delivered by then.",
      category: "matches",
    },
  ],
  sources: [
    "Fabrizio Romano",
    "Sky Sports",
    "Caught Offside",
    "Foot Mercato",
    "Sky Germany",
    "Goal",
    "Football365",
    "TeamTalk",
    "GiveMeSport",
    "This Is Anfield",
    "Managing Madrid",
    "Liverpool.com",
    "SportBible",
    "Africa Soccer",
    "NBC Sports",
    "Liverpool FC",
  ],
};

// ─── Transfer Targets (2026 summer window) ─────────────────────────────────
// Hand-curated; refresh via Perplexity the same way NEWS_DIGEST is refreshed.
// heatTier: "hot" (≥65%) | "warm" (40-64%) | "cool" (<40%) | "done" | "dead"
// sources[].tier: "S" (Romano-class) | "A" (major outlet) | "B" (beat) | "C" (aggregator)
export const TRANSFER_TARGETS = {
  generatedAt: "2026-06-04T08:10:00Z",
  summary:
    "Thursday, and the marquee file splits two ways at once: Yan Diomandé has, per Foot Mercato, said yes to BOTH Liverpool and PSG — Sky Germany framing the momentum as Parisian — leaving Leipzig to sell to whichever club meets their price, upwards from £85m, with Romano reporting the winger wants it settled before the World Cup opens June 11. The in-tray firms up around him: Football365 says the first two signings of the Iraola era have been approved at a combined cost up to £170m, Club Brugge centre-back Joël Ordóñez re-emerging beside Diomandé as the Konaté replacement, while Romano hints at a £100m Bournemouth reunion with striker Eli Junior Kroupi. The No. 6 question still waits on the manager — who signs his contract today — with Varela and Wharton holding their positions. Out the door, Konaté's exit is now formally confirmed with Madrid finalising and waiting only on Sunday's presidential election; Curtis Jones is prioritising Inter after Hughes met Ausilio in Monte Carlo, a £17m offer against a £35m ask with Dumfries floated as a makeweight; and Salah's agent insists, against the 'days away' chatter, that 'no one knows' where he plays next.",
  incoming: [
    {
      id: "varela-2026",
      name: "Alan Varela",
      age: 24,
      position: "MID",
      role: "Deep-lying midfielder (No. 6)",
      nationality: "🇦🇷 Argentina",
      foot: "Right",
      image: "https://img.a.transfermarkt.technology/portrait/header/655488-1700castle.jpg",
      currentClub: "Porto",
      currentLeague: "Primeira Liga",
      feeMin: 60, feeMax: 75, feeCurrency: "€m",
      marketValue: 50,
      wageBand: "B",
      contractExpiry: "2028-06-30",
      releaseClause: "€75m",
      contractNote: "André Villas-Boas inserted a €75m release clause; talks could bring the price down.",
      probability: 40,
      heatTier: "warm",
      sources: [
        { name: "Anfield Watch",  tier: "B" },
        { name: "Liverpool.com",  tier: "B" },
        { name: "Caught Offside", tier: "C" },
      ],
      lastUpdated: "2026-06-03",
      rumorNote:
        "Wed 3 Jun — coy, but still near the front of the queue. Asked by La Nación about the Liverpool links, Varela said only that he is 'calm and 100% focused here in Porto' and leaving his future to his agent. The 24-year-old Argentine title-winner, a Boca Juniors product drawing Mascherano comparisons for his ball-recovery and crisp vertical passing, carries a €75m clause and remains the on-the-ball No. 6 the side has lacked — though United, who see a Casemiro heir, and City, eyeing a Rodri successor, are in the same race, and Liverpool may wait for Iraola to make the call.",
      positionFit: {
        replaces: "Endo (defensive midfield)",
        competesWith: ["Gravenberch", "Mac Allister"],
        depthAfter: "Gravenberch · Varela · Mac Allister",
      },
      stats: {
        apps: 41, goals: 2, assists: 3,
        tacklesPer90: 2.6, passCompletion: 89, progressiveCarries: 2.4,
        cleanSheets: 0, xG: 0.9,
      },
    },
    {
      id: "wharton-2026",
      name: "Adam Wharton",
      age: 22,
      position: "MID",
      role: "Deep-lying midfielder (No. 6)",
      nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England",
      foot: "Right",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Adam_Wharton_2024.jpg/330px-Adam_Wharton_2024.jpg",
      currentClub: "Crystal Palace",
      currentLeague: "Premier League",
      feeMin: 70, feeMax: 90, feeCurrency: "£m",
      marketValue: 70,
      wageBand: "B",
      contractExpiry: "2029-06-30",
      releaseClause: null,
      contractNote: "Palace, fresh from a Conference League win, intend to offer a new contract rather than sell.",
      probability: 22,
      heatTier: "cool",
      sources: [
        { name: "TeamTalk",        tier: "B" },
        { name: "This Is Anfield",  tier: "A" },
        { name: "Rousing The Kop",  tier: "C" },
      ],
      lastUpdated: "2026-06-02",
      rumorNote:
        "Tue 2 Jun — still on Iraola's list, but no longer at the front of it. Wharton remains named among the five signings the new manager has requested, yet Palace — buoyed by a Conference League triumph — are minded to offer a new deal rather than sell, and Liverpool's energy has shifted to Porto's Alan Varela. The £80m England man stays the romantic option for the base of midfield; the realistic one now wears Porto blue.",
      positionFit: {
        replaces: "Endo (defensive midfield)",
        competesWith: ["Gravenberch", "Mac Allister"],
        depthAfter: "Gravenberch · Wharton · Mac Allister",
      },
      stats: {
        apps: 32, goals: 1, assists: 4,
        tacklesPer90: 2.3, passCompletion: 88, progressiveCarries: 3.1,
        cleanSheets: 0, xG: 0.8,
      },
    },
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
      feeMin: 85, feeMax: 150, feeCurrency: "£m",
      marketValue: 75,
      wageBand: "C",
      contractExpiry: "2030-06-30",
      releaseClause: null,
      contractNote: "Contract to 2030, no release clause; Leipzig under no pressure to sell and naming a price from £85m up.",
      probability: 45,
      heatTier: "warm",
      sources: [
        { name: "Fabrizio Romano", tier: "S" },
        { name: "Foot Mercato",    tier: "A" },
        { name: "Sky Germany",     tier: "A" },
      ],
      lastUpdated: "2026-06-04",
      rumorNote:
        "Thu 4 Jun — a two-club sprint now, and the player has scratched himself from the deciding vote: Foot Mercato's Santi Aouna reports Diomandé has said yes to BOTH Liverpool and PSG, content to join whichever strikes a club-to-club agreement with Leipzig — though Sky Germany reads the momentum as Parisian. Romano counters that the deal could land next week and that the Bundesliga's young player of the season (13 goals, 9 assists) wants his future fixed before the World Cup starts June 11. Leipzig, with a 2030 contract and Champions League football, simply hold the door and name the toll.",
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
      id: "ordonez-2026",
      name: "Joël Ordóñez",
      age: 21,
      position: "DEF",
      role: "Centre-back (right-sided)",
      nationality: "🇪🇨 Ecuador",
      foot: "Right",
      image: "https://img.a.transfermarkt.technology/portrait/header/916885-1727439139.jpg",
      currentClub: "Club Brugge",
      currentLeague: "Belgian Pro League",
      feeMin: 35, feeMax: 43, feeCurrency: "£m",
      marketValue: 32,
      wageBand: "C",
      contractExpiry: "2028-06-30",
      releaseClause: null,
      contractNote: "105 Brugge appearances at 21; Palace had a £34.6m bid rejected, setting the floor.",
      probability: 48,
      heatTier: "warm",
      sources: [
        { name: "Football365",     tier: "B" },
        { name: "Sky Sports",      tier: "A" },
        { name: "This Is Anfield", tier: "A" },
      ],
      lastUpdated: "2026-06-04",
      rumorNote:
        "Thu 4 Jun — January's near-miss is back at the head of the centre-back queue. Football365 reports Ordóñez and Diomandé form an 'approved' £170m double to open the Iraola era, the Ecuadorian filling the right-sided vacancy Konaté's formal exit has opened; Sky Sports has long priced him near £43m, and a rejected £34.6m Palace bid marks the floor. Belgian reporting urges caution — no formal Liverpool offer has yet landed — but with main terms said to have been agreed once before, this is the most actionable name on the defensive list.",
      positionFit: {
        replaces: "Konaté (right centre-back)",
        competesWith: ["Van Dijk", "Jacquet"],
        depthAfter: "Van Dijk · Ordóñez · Jacquet",
      },
      stats: {
        apps: 36, goals: 2, assists: 1,
        tacklesPer90: 2.1, passCompletion: 89, progressiveCarries: 1.3,
        cleanSheets: 14, xG: 1.1,
      },
    },
    {
      id: "kroupi-2026",
      name: "Eli Junior Kroupi",
      age: 19,
      position: "FWD",
      role: "Striker / second forward",
      nationality: "🇫🇷 France",
      foot: "Left",
      image: "https://img.a.transfermarkt.technology/portrait/header/745826-1718805756.jpg",
      currentClub: "Bournemouth",
      currentLeague: "Premier League",
      feeMin: 80, feeMax: 100, feeCurrency: "£m",
      marketValue: 55,
      wageBand: "C",
      contractExpiry: "2029-06-30",
      releaseClause: null,
      contractNote: "Bournemouth's £80m-£100m valuation is set as a deterrent; they intend to keep him.",
      probability: 25,
      heatTier: "cool",
      sources: [
        { name: "Fabrizio Romano", tier: "S" },
        { name: "TeamTalk",        tier: "B" },
        { name: "GiveMeSport",     tier: "C" },
      ],
      lastUpdated: "2026-06-04",
      rumorNote:
        "Thu 4 Jun — the name behind Romano's 'world-class striker' tease. Kroupi scored 13 Premier League goals in Iraola's sixth-placed Bournemouth side and the new Liverpool boss knows exactly what he is buying — but the Cherries, already stripped of their manager and likely two assistants by Anfield, have set a £80m-£100m wall around the teenager and intend to hold it. One to watch if Isak's reset stalls or the Diomandé money goes elsewhere; a cool file for now, with a warm personal connection running through it.",
      positionFit: {
        replaces: "Ekitike (during 9-12 month rehab)",
        competesWith: ["Isak", "Gakpo"],
        depthAfter: "Isak · Kroupi · Gakpo",
      },
      stats: {
        apps: 33, goals: 13, assists: 4,
        tacklesPer90: 0.6, passCompletion: 79, progressiveCarries: 2.9,
        cleanSheets: 0, xG: 11.8,
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
      lastUpdated: "2026-06-04",
      rumorNote:
        "Thu 4 Jun — the queue in front of him has re-ordered: with Konaté's exit now formally confirmed, the right centre-back slot is open, but Football365's reporting puts Club Brugge's Ordóñez at the head of an 'approved' double rather than Lacroix. A Jarell Quansah buy-back — the ~€80m clause on the Leverkusen man drops next summer — Koulierakis and Schlotterbeck round out the list. Lacroix stays a live, Premier-League-proven name entering his peak, but the momentum this week is Belgian.",
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
      lastUpdated: "2026-05-31",
      rumorNote:
        "Sun 31 May — remains the value alternative to Lacroix as the back line thins. One of the most-improved defenders in the Premier League, comfortable building from the back, with eighteen months left on a deal he is in no rush to extend — exactly the contractual softness Liverpool look for. Brighton drive a hard bargain, but each month that passes shifts the leverage.",
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
      lastUpdated: "2026-06-04",
      rumorNote:
        "Thu 4 Jun — the circular market has begun to turn: PSG now hold a verbal yes from Diomandé themselves, and if Paris land the Ivorian it is Barcola's wing they will hand him — at which point the Frenchman, already outside Luis Enrique's preferred XI, becomes the most gettable elite winger in Europe. Liverpool's fallback file thus improves on the very news that complicates their first choice. A waiting game, but no longer an idle one.",
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
      destination: "Real Madrid (free)",
      feeAsk: { min: 0, max: 0, currency: "€" },
      probability: 96,
      heatTier: "hot",
      sources: [{ name: "This Is Anfield", tier: "A" }, { name: "Managing Madrid", tier: "B" }, { name: "Fabrizio Romano", tier: "S" }],
      note: "Thu 4 Jun — formal on one end, finalising on the other. Liverpool have now officially confirmed Konaté departs when his contract lapses June 30, and Madrid-side reporting says Florentino Pérez has fully closed a four-year deal (option for a fifth) — the unveiling parked, remarkably, until after Sunday's presidential election at the Bernabéu. The right side of the defence is now formally an opening; Ordóñez, a Quansah buy-back and Lacroix populate the list to fill it.",
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
      note: "Sun 31 May — done bar the unveiling: a free transfer to De Zerbi's Tottenham, a late Juventus hijack seen off. Nine years at Anfield close as the old title-winning core thins; the left-back job passes to Kerkez.",
    },
    {
      id: "jones-out",
      name: "Curtis Jones",
      position: "MID",
      destination: "Inter Milan",
      feeAsk: { min: 20, max: 30, currency: "€m" },
      probability: 60,
      heatTier: "warm",
      sources: [{ name: "This Is Anfield", tier: "A" }, { name: "Liverpool.com", tier: "B" }, { name: "Sky Sport Italia", tier: "A" }],
      note: "Thu 4 Jun — the player has picked a lane: Jones is now 'prioritising' Inter, talks formally opened when Hughes met Ausilio in Monte Carlo on Tuesday. The gap is the story — Inter's £17m opener against Liverpool's £35m ask — and so is the wrinkle: Denzel Dumfries, clause-available at ~£21.7m, floated as a makeweight right-back coming the other way. Missing England's World Cup squad has hardened Jones's appetite for guaranteed minutes.",
    },
    {
      id: "salah-out",
      name: "Mohamed Salah",
      position: "FWD",
      destination: "Free agent — agent: 'no one knows'",
      feeAsk: { min: 0, max: 0, currency: "€" },
      probability: 100,
      heatTier: "done",
      sources: [{ name: "This Is Anfield", tier: "A" }, { name: "Africa Soccer", tier: "C" }],
      note: "Thu 4 Jun — the brakes come on. A day after an Egypt staffer claimed an announcement was imminent, agent Ramy Abbas Issa insisted 'no one knows' where Salah plays next — the decision deliberately parked until after the World Cup unless an irresistible offer arrives first. Juventus, the Turkish pair, Saudi Arabia and MLS all remain in a race whose only fixed point is that it no longer runs through Anfield.",
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
      note: "Twelve months left; among the four further exits flagged in Iraola's squad reset.",
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
    "Fabrizio Romano",
    "Foot Mercato",
    "Sky Germany",
    "Football365",
    "Sky Sports",
    "This Is Anfield",
    "Managing Madrid",
    "Liverpool.com",
    "TeamTalk",
    "GiveMeSport",
    "Sky Sport Italia",
    "Goal",
    "Caught Offside",
    "Anfield Watch",
    "Africa Soccer",
  ],
};
