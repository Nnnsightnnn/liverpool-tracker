// ─── Liverpool FC Player Data (2025-26 Season · Updated May 1, 2026) ────────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "recovering", outSince: "2026-03-22", injuryNote: "Missed past 8 PL matches with hamstring complaint. Slot's pre-Man Utd presser (Fri May 1): 'close but not certain' for Old Trafford. NOT pictured during Friday's outdoor session (TIA Sat May 2) — Woodman primed to keep gloves; Sports Mole's Saturday predicted XI now reads 'no Mo and no Alisson'", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 17, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.8, status: "injured", outSince: "2026-04-20", injuryNote: "Out ~3 weeks with the stitched knee wound from Beto collision (Apr 19) — missed Palace 3-1 with Woodman starring on debut. Earliest realistic return is the Aston Villa trip on May 17, with Alisson set to reclaim the gloves first", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 40, goals: 4, assists: 1, cleanSheets: 11, xG: 2.8, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.5, status: "fit", injuryNote: "Captained the 3-1 Palace win (Apr 25) that lifted Liverpool to 4th — back-line conceded once (Munoz, 71') but defending was largely controlled. Six points away from sealing top-five UCL with four games left", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 37, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 7.2, status: "fit", injuryNote: "Started 3-1 Palace win (Apr 25) alongside VVD. Romano (Apr 20): new Liverpool deal 'nears completion' — only contract length & bonus structure left; both sides aligned on salary. Konaté himself: 'It's Liverpool' — full Real Madrid U-turn", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
    physical: { height: 194, weight: 95, pace: 78, acceleration: 76, sprintSpeed: 80 },
    career: [
      { years: "2014-2017", club: "Sochaux", fee: null, type: "youth" },
      { years: "2017-2021", club: "RB Leipzig", fee: "€15M", type: "senior" },
      { years: "2021-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 18, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 6.2, status: "fit", injuryNote: "On the bench for Palace 3-1 (Apr 25) — Slot kept Konaté/VVD pairing intact. First squad inclusion since the PSG cameo muscle issue; rotation option for Old Trafford on May 3", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 27, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 7.4, status: "fit", injuryNote: "Standout 8.0/10 vs Palace (Apr 25) — 'composed finishing and energetic display' said sportsdunia. Composed finish off Curtis Jones counter-attack release for 2-0; defied 'Robbo Out' presser predictions to start. Scotland captain still set for free-agent summer move (Tottenham leading)", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
    physical: { height: 178, weight: 70, pace: 79, acceleration: 81, sprintSpeed: 77 },
    career: [
      { years: "2010-2013", club: "Queen's Park", fee: null, type: "senior" },
      { years: "2013-2014", club: "Dundee United", fee: "Free", type: "senior" },
      { years: "2014-2017", club: "Hull City", fee: "€3.4M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€9.3M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 36, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 7.0, status: "fit", injuryNote: "Dropped out of a midweek session managing a niggle but pictured back on the grass at AXA Friday (TIA Sat May 2). Bench vs Palace 3-1 (Apr 25) — Robertson keeps the LB nod for Old Trafford May 3 in the consensus predicted XI", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Knee surgery (Jan) — out for season, aiming for pre-season return", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 33, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 7.0, status: "fit", injuryNote: "Came off bench in 59' for the injured Salah vs Palace 3-1 (Apr 25) — Slot kept Curtis Jones at RB. Leading candidate for the RW vacancy at Old Trafford May 3; today's 'minor' Salah update (Apr 30) means Frimpong may not have to carry the slot for the full run-in", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 33, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Torn ACL (Sep) — out for season, targeting 2026-27 return", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 38, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 7.2, status: "fit", injuryNote: "Started Palace 3-1 (Apr 25) in the double pivot alongside Szoboszlai with Gravenberch rested; his skewed long shot was the lay-off Isak controlled and finished for the opener. Locks the central role for Old Trafford May 3", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 38, goals: 5, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Rested on bench for Palace 3-1 (Apr 25) — Mac Allister returned alongside Szoboszlai in the double pivot. Slot's rotation call ahead of Old Trafford; nailed-on starter at MUN with a Salah-less attack to balance", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 45, goals: 11, assists: 8, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.5, status: "fit", injuryNote: "Started Palace 3-1 (Apr 25) — quieter outing than the derby corner-winner but kept the engine ticking. Liverpool.com flagged him as the potential 'major player' in the Diomande pursuit (RB Leipzig connection)", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 24, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 7.5, status: "fit", injuryNote: "Started at RB vs Palace 3-1 (Apr 25) — TIA & Liverpool.com 8/10, assisted Robertson's 44' goal. Slot (Apr 27): 'comfort on the ball, like Trent had at right-back.' BUT Romano (Apr 28-29 via EOTK & Rousing): could leave this summer — Inter Milan eyeing a McTominay-at-Napoli reset, 14 months left on deal. Aston Villa also monitoring", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
    physical: { height: 182, weight: 74, pace: 72, acceleration: 74, sprintSpeed: 70 },
    career: [
      { years: "2010-2019", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2019-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "injured", outSince: "2026-02-12", injuryNote: "Ankle surgery (Feb 11 vs Sunderland) — out for season, targeting World Cup", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 31, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.4, status: "fit", injuryNote: "Sealed 3-1 vs Palace (Apr 25) with a driven added-time strike — Liverpool.com noted 'linked play excellently' as the £100m signing's form ticks upward. With Salah out, Wirtz now Liverpool's most reliable creator", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 19, name: "Stefan Bajcetic", number: 43, position: "MID", nationality: "🇪🇸 Spain", age: 21, appearances: 0, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-08-01", injuryNote: "Recurring hamstring issues — yet to play this season", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p535928.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 37, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.2, status: "injured", outSince: "2026-04-26", injuryNote: "Officially ruled OUT of Old Trafford trip Sun May 3 (Sky Sports, Goal.com Fri May 1) with hamstring picked up vs Palace (Apr 25, 59'). Slot's Fri May 1 presser confirmed: 'expected back before the season is out'. LFC's Apr 30 'minor' statement keeps the May 24 Brentford home finale on as the Anfield farewell. FourFourTwo (May 1): Egypt staff say Salah will announce his next club 'within days'; Liverpool.com flags Juventus (Spalletti) as the dark-horse over cooling Saudi pressure", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 36, goals: 8, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.2, status: "fit", injuryNote: "Started LW vs Palace 3-1 (Apr 25) with Isak preferred at ST after his recovery — quieter night. With Salah out, Gakpo and Wirtz now Liverpool's go-to wide threats heading to Old Trafford May 3", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 14, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 17, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.7, status: "fit", injuryNote: "First Anfield league goal vs Palace (Apr 25) — controlled Mac Allister's skewed long shot and finished superbly for the opener. Goal.com: Isak is back; first goal since the December broken leg. Now Liverpool's lone senior No.9 with Ekitike out, Salah injured", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Ruptured Achilles tendon (April 14 vs PSG) — scan confirmed 9-12 month absence; misses remainder of 2025-26 season and 2026 World Cup with France per Deschamps", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 10, goals: 2, assists: 1, cleanSheets: null, xG: 1.2, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.0, status: "fit", injuryNote: "On the derby bench (Apr 19) — primary rotation option with Isak's minutes managed; youngest-ever PL Anfield scorer (17y 225d)", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "On Palace bench (Apr 25) — rotation winger option ahead of Old Trafford May 3 with Salah out. Likely summer exit per April reporting", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 8.0, status: "fit", recentPlayedDates: ["2026-04-25"], injuryNote: "Made full Liverpool debut in the 3-1 win vs Crystal Palace (Apr 25) — 8/10 across TIA, Liverpool.com and Goal.com after stepping in for the injured Mama. Drops to the bench when Alisson returns at Old Trafford May 3 but proved Liverpool's third-choice depth ahead of summer rebuild", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
};

// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Manchester United",
  shortName: "MUN",
  home: false,
  date: "2026-05-03T14:30:00",
  competition: "PL",
  venue: "Old Trafford",
  broadcast: "Sky Sports",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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

// ─── Premier League Standings (after Round 34) ─────────────────────────────
export const STANDINGS = [
  { pos: 1, team: "Arsenal",         p: 34, w: 24, d: 6, l: 4,  gd: 46, pts: 78 },
  { pos: 2, team: "Manchester City", p: 34, w: 22, d: 7, l: 5,  gd: 39, pts: 73 },
  { pos: 3, team: "Newcastle",       p: 34, w: 20, d: 6, l: 8,  gd: 24, pts: 66 },
  { pos: 4, team: "Liverpool",       p: 34, w: 19, d: 7, l: 8,  gd: 22, pts: 64, highlight: true },
  { pos: 5, team: "Aston Villa",     p: 34, w: 18, d: 8, l: 8,  gd: 14, pts: 62 },
  { pos: 6, team: "Chelsea",         p: 34, w: 17, d: 9, l: 8,  gd: 12, pts: 60 },
  { pos: 7, team: "Tottenham",       p: 34, w: 17, d: 7, l: 10, gd: 8,  pts: 58 },
  { pos: 8, team: "Brighton",        p: 34, w: 15, d: 9, l: 10, gd: 5,  pts: 54 },
];

// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Egyptian's farewell, written in pencil.",
    byline: "James Pearce",
    dateline: "Anfield · 1 May",
    category: "Transfers",
    body: "Mohamed Salah will not travel to Old Trafford on Sunday. The club, in a statement issued late on Thursday, called the hamstring complaint 'minor' — the kind of language that survives a press cycle but rarely a season. He is expected to return for the Brentford match. He is expected, also, to announce his next club within days. The two facts are not unrelated. They are simply the two halves of the same long goodbye, the second of which is being written by an Egypt FA staffer with the brisk economy of a man who has read the room.",
  },
  {
    n: "02",
    headline: "Konaté, at last, on Liverpool's terms.",
    byline: "Fabrizio Romano",
    dateline: "Liverpool · 30 April",
    category: "Contracts",
    body: "After eighteen months of Real-Madrid-shaped silence, the France international has settled. The salary structure is agreed; only the length of the deal and the architecture of its bonuses remain. Konaté, in his own words: 'It's Liverpool.' Three syllables — an entire summer of negotiation reduced to a verdict.",
  },
  {
    n: "03",
    headline: "Hughes' five names, and the road to a rebuild.",
    byline: "Anfield Watch",
    dateline: "Liverpool · 30 April",
    category: "Transfers",
    body: "Five forwards on Richard Hughes' shortlist. Barcola at the top, Diomande and Doué close behind, Olise effectively closed off after the Bayern double-rejection, Akliouche the speculative final name. The summer rebuild begins where the Salah era ends — and not, the sporting director would surely insist, a moment before.",
  },
  {
    n: "04",
    headline: "A goalkeeper, a debut, and a number on the back.",
    byline: "This Is Anfield",
    dateline: "Anfield · 26 April",
    category: "Squad",
    body: "Freddie Woodman is twenty-nine years old and made his Liverpool debut on Saturday. He kept Crystal Palace to one. He earned eight from three different rating columns. He will, on Sunday, return to the bench. There is a particular kind of footballing dignity in this — a career measured not in caps but in the discipline of being ready, once, and being right.",
  },
  {
    n: "05",
    headline: "Robertson, a captain, a free transfer, a farewell tour.",
    byline: "The Anfield Wrap",
    dateline: "Liverpool · 29 April",
    category: "Departures",
    body: "Slot, in his Tuesday press conference, conceded what the team-sheet had already declared: the Scotland captain has lost his first-choice spot, and 'as a result' is leaving on a free. Tottenham, per the reporting, have 'an agreement on everything' subject to their own Premier League fate. Atletico Madrid linger. Robertson, on Saturday, played as if none of it were so — finished a Curtis Jones counter, took the eight, took the applause.",
  },
];

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-05-02T10:00:00Z",
  summary:
    "Saturday May 2 (matchday-1) — Liverpool's last full session before the Old Trafford trip wound up at the AXA on Friday with Kerkez back on the grass after his midweek niggle but Alisson NOT pictured outdoors, leaving Slot 'sweating' over the Brazilian's return (3 Added Minutes, This Is Anfield). The Saturday predicted-XI consensus (Sports Mole, This Is Anfield, FotMob, NBC Sports) lands on Curtis Jones at RB, Mac Allister + Gravenberch in the pivot, Wirtz at the 10 and Isak the lone No.9 with Gakpo wide — but the GK pick splits: TIA/FotMob have Alisson if fit, Sports Mole goes 'no Mo and no Alisson' with Woodman keeping the gloves. Mohamed Salah is officially ruled out (hamstring); Liverpool's Apr 30 'minor' update keeps the May 24 Brentford home finale on as the Anfield farewell, while FourFourTwo says he'll name his next club within days (Saudi pressure cooling, Juventus a Spalletti-led dark-horse). Off the pitch FSG have publicly backed Slot for a third season and TIA confirmed Friday that Etienne Reijnen — Slot's old Feyenoord set-piece lieutenant — is closing on a backroom move now his coaching qualifications are nearly done. Six points from four still secures top-five UCL (Opta 96.92%).",
  keyTopics: [
    {
      title: "TODAY — Saturday Training Update: Kerkez Back, Alisson NOT Spotted Outdoors at AXA",
      detail:
        "Reported overnight (Sat May 2) by This Is Anfield from Friday's matchday-1 session: Milos Kerkez was pictured back on the grass at the AXA after his midweek niggle, a clear positive ahead of the Old Trafford trip. Alisson, however, was NOT pictured during the outdoor portion of training — TIA: 'in the building, but not on the pitches' — fuelling 3 Added Minutes' line that 'Slot is sweating over the Brazilian's fitness' for Sunday. Woodman accordingly keeps Sports Mole's GK shirt in their predicted XI.",
      category: "injuries",
    },
    {
      title: "TODAY — Saturday Predicted-XI Consensus: Jones at RB, Mac Allister + Gravenberch Pivot, Wirtz at the 10",
      detail:
        "Published today (Sat May 2) across This Is Anfield, Sports Mole, 3 Added Minutes, FotMob and NBC Sports: Slot's likely Old Trafford XI converges on Curtis Jones at RB (Slot's 'comfort on the ball, like Trent' reference earlier this week), Robertson keeping LB ahead of Kerkez (back from niggle but managed), Mac Allister + Gravenberch in the double pivot, and Wirtz at the 10 with Gakpo wide-left and Isak the lone No.9. The split is at GK and RW — Alisson if fit / Woodman if not, Frimpong vs. Szoboszlai-pushed-wide for Salah's vacated channel.",
      category: "tactics",
    },
    {
      title: "TODAY — FSG Publicly Back Arne Slot for 'Third Season' Amid 'Harsh' Criticism",
      detail:
        "Published today (Sat May 2) by This Is Anfield off the back of Friday's Slot quotes: FSG view the Dutchman as having earned 'the opportunity of a third season in charge' after 'unforeseen challenges' (Slot in his Fri May 1 presser called some of the criticism 'harsh'). Sky Sports News reports the same — Slot is 'expected to stay at Anfield next season as the club close in on Champions League qualification'. UCL qualification is the explicit lever; Slot's contract runs to 30 June 2027.",
      category: "general",
    },
    {
      title: "Slot's Pre-Man Utd Presser: Every Word on Salah, Alisson, Isak Form (Fri May 1)",
      detail:
        "Liverpool.com transcribed the full pre-Man Utd press conference yesterday (Fri May 1) at the AXA: Slot confirmed Salah is out, called Alisson 'close but not certain' for Old Trafford, and pushed back on the Isak narrative — 'we will need more from him next season' framed alongside Salah's exit. Slot also defended Wirtz's adaptation period and confirmed Kerkez had returned to training after the midweek niggle.",
      category: "matches",
    },
    {
      title: "Salah Officially Ruled Out of Old Trafford, Liverpool 'Expect Him Back' This Season",
      detail:
        "Confirmed Friday (May 1) by Sky Sports and Goal.com after Slot's presser: Mohamed Salah will miss Sunday's trip to Manchester United with the hamstring issue picked up vs Palace, but Liverpool publicly state they expect him back before season's end for the Anfield farewell vs Brentford May 24. Salah's Liverpool farewell is now firmly tied to the home finale rather than the Old Trafford trip.",
      category: "injuries",
    },
    {
      title: "FourFourTwo: Salah Set to Announce Next Club 'Within Days' — Egypt Staffer Confirms",
      detail:
        "Reported Friday (May 1) by FourFourTwo, beIN Sports and SportBible, original source an Egypt national-team staff member: Salah will reveal his next destination 'in a few days' once the contract decision is locked in. Saudi Pro League pressure cooling per ESPN and Sky Sports — Al-Ittihad still leading the SPL field, with San Diego FC the natural MLS landing spot, and Juventus (Spalletti reunion) the European dark-horse Liverpool.com flagged.",
      category: "transfers",
    },
    {
      title: "Etienne Reijnen Closing on Liverpool Backroom Reunion — Set-Piece Coach for 2026-27",
      detail:
        "Reported Friday (May 1) by This Is Anfield, Empire of the Kop and Anfield Index, with Liverpool.com running the explainer: Slot is 'on the verge' of finally landing Etienne Reijnen, his old Feyenoord set-piece assistant blocked by a UK work permit two years ago. Reijnen, 39 (former PEC Zwolle teammate), will fill the set-piece coach vacancy left by Aaron Briggs' December exit — Feyenoord conceded only four set-piece goals this season, Liverpool 16. Move expected once his coaching qualifications complete this summer.",
      category: "general",
    },
    {
      title: "Liverpool's 'Dream' Transfer Window: $108m PSG Target Arrives, Barcelona Battle, Wharton Secured",
      detail:
        "Published Friday (May 1) by Liverpool.com and TEAMtalk: sporting director Richard Hughes' summer plan, leaked to Sky Sports' Lyall Thomas, has Bradley Barcola (PSG, $108m) as the new Salah-replacement priority after the Diomande race blew up, Aurelien Tchouameni from Real Madrid as the No.6 alternative if Wharton stalls, and Lutsharel Geertruida tracked as a homegrown utility defender. Anfield Watch's Apr 30 forwards shortlist (Barcola/Doué/Olise/Diomande/Akliouche) still in play but Olise considered 'effectively shut' after Bayern double rejection.",
      category: "transfers",
    },
    {
      title: "Liverpool Walk Back Salah 'Last Game' Verdict: 'Minor' Muscle Injury, Back This Season",
      detail:
        "Released Thu Apr 30 via LFC's official channels and amplified by Sky Sports, Liverpool.com, Sports Illustrated and Empire of the Kop: the Palace hamstring complaint is 'minor' and the Egyptian is expected back before the season ends. The statement directly contradicted Egypt FA director Ibrahim Hassan's Apr 26 '4 weeks / played his last game' verdict and put the Brentford home finale May 24 back on the table as the Anfield farewell.",
      category: "injuries",
    },
    {
      title: "Romano: Curtis Jones Could Leave Liverpool, Inter Milan Eyeing 'McTominay-at-Napoli' Reset",
      detail:
        "Reported Wed Apr 29 by Empire of the Kop and Rousing The Kop, original Romano line dropped Apr 28: the academy graduate has just 14 months left on his deal and could be available this summer. Inter Milan are explicitly named as the lead suitor; Aston Villa also monitoring. Slot has Gravenberch, Szoboszlai and Mac Allister ahead in the pivot — Times' Paul Joyce countered with three stats arguing the Reds must fight to keep the No.17.",
      category: "transfers",
    },
    {
      title: "Konaté Contract 'Never Closer to Agreement' — Salary Aligned, Length & Bonuses Outstanding",
      detail:
        "Reported Wed Apr 30 by ESPN and This Is Anfield (echoing Romano Apr 20): the France international and Liverpool have 'never been closer' on a new deal, with main salary structure agreed and only contract length and performance-related bonuses left to settle. Konaté himself: 'we are close to an agreement... it's what I always wanted' — full Real Madrid U-turn. He wants a rise on the current £150k/wk to bring him in line with the top earners.",
      category: "transfers",
    },
    {
      title: "Slot Explains Robertson Exit: 'As a Result, He's Leaving' — Tottenham Have 'Agreement on Everything'",
      detail:
        "Reported Tue Apr 29 by This Is Anfield and Romano (via TEAMtalk): Slot conceded the Scotland captain lost his first-choice spot to Kerkez and 'as a result' is leaving as a free agent. Romano: Tottenham have 'an agreement on everything' subject to Premier League survival; Atletico Madrid still hovering as a hijack option. Robertson started Saturday's 3-1 Palace win (8.0/10 + assist) but the run-in is openly framed as a farewell tour.",
      category: "transfers",
    },
    {
      title: "MATCH REPORT — Liverpool 3-1 Crystal Palace: Up to 4th, 6 Points From UCL",
      detail:
        "Played Sat Apr 25 at Anfield: Isak (29') controlled Mac Allister's skewed long shot for his first Anfield league goal; Robertson (44') finished a Curtis Jones counter; Munoz (71') pulled one back; Wirtz drove home in added time to seal it. Curtis Jones at RB and Mac Allister in the pivot (Gravenberch rested). Liverpool jumped above Aston Villa into 4th — Opta now has them 96.92% to qualify for the UCL.",
      category: "matches",
    },
    {
      title: "Run-In: Man Utd (A) May 3, Chelsea (H) May 10, Villa (A) May 15 or 17, Brentford (H) May 24",
      detail:
        "Per the Premier League fixture list (Villa rescheduled Apr 28): Liverpool's four remaining games are Man Utd at Old Trafford Sun May 3 (14:30 UK, Sky), then Chelsea, Villa (Sun May 17 12:30pm or Fri May 15 8pm if Villa reach Europa final) and the Brentford home finale where Salah is expected to take his Anfield bow following the 'minor' injury update. Six points secures top-five UCL.",
      category: "matches",
    },
  ],
  sources: [
    "Liverpool FC",
    "Sky Sports",
    "Goal.com",
    "FourFourTwo",
    "beIN Sports",
    "ESPN",
    "NBC Sports",
    "Liverpool.com",
    "Sports Mole",
    "FotMob",
    "3 Added Minutes",
    "Sports Illustrated",
    "Empire of the Kop",
    "Anfield Watch",
    "Anfield Index",
    "TEAMtalk",
    "This Is Anfield",
    "Rousing The Kop",
    "TNT Sports",
    "Yardbarker",
    "Premier League",
    "Opta",
  ],
};

