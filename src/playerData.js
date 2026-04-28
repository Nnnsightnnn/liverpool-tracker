// ─── Liverpool FC Player Data (2025-26 Season · Updated Apr 27, 2026) ────────
// Extracted from App.jsx — single source of truth for player, news, and RSS data

// Statuses: "fit" | "injured" | "doubtful" | "recovering"
// injuryNote: short description shown on card when not fit
// Optional: returningFromInjury: { matchesBackIncludingThis: 1|2 }
//   — added by skill when a player returns from 3+ week absence, removed after 2 matches back
export const PLAYERS = [
  // ── Goalkeepers ───────────────────────────────────────────────────────────
  {
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "recovering", injuryNote: "Missed Palace 3-1 (Apr 25) — Slot post-match: 'close to returning to play but not close enough to start.' Targeting Old Trafford (May 3) for return. Juventus swap-deal links resurfaced (Rousing The Kop Apr 26) but Slot dismissed", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 17, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.8, status: "injured", injuryNote: "Out ~3 weeks with the stitched knee wound from Beto collision (Apr 19) — missed Palace 3-1 with Woodman starring on debut. Earliest realistic return is the Aston Villa trip on May 17, with Alisson set to reclaim the gloves first", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 36, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 7.0, status: "fit", injuryNote: "Bench vs Palace (Apr 25) as Robertson started despite presser predictions of a recall. Rotation option for Old Trafford May 3", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", injuryNote: "Knee surgery (Jan) — out for season, aiming for pre-season return", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 33, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 7.0, status: "fit", injuryNote: "Came off bench in 59' for the injured Salah vs Palace 3-1 (Apr 25) — Slot kept Curtis Jones at RB. With Salah ruled out 4 weeks, Frimpong now leading candidate for the RW vacancy at Old Trafford May 3", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 33, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", injuryNote: "Torn ACL (Sep) — out for season, targeting 2026-27 return", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
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
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 24, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 7.5, status: "fit", injuryNote: "Started at RB vs Palace 3-1 (Apr 25) for the second straight game — TIA & Liverpool.com 8/10. Assisted Robertson's 44' goal. Slot (Apr 27): 'comfort on the ball, like Trent had at right-back' — earned trust ahead of Old Trafford May 3, Villa exit talk parked", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
    physical: { height: 182, weight: 74, pace: 72, acceleration: 74, sprintSpeed: 70 },
    career: [
      { years: "2010-2019", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2019-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "injured", injuryNote: "Ankle surgery (Feb 11 vs Sunderland) — out for season, targeting World Cup", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 19, name: "Stefan Bajcetic", number: 43, position: "MID", nationality: "🇪🇸 Spain", age: 21, appearances: 0, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", injuryNote: "Recurring hamstring issues — yet to play this season", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p535928.png",
    physical: { height: 185, weight: 75, pace: 68, acceleration: 66, sprintSpeed: 70 },
    career: [
      { years: "2017-2020", club: "Celta Vigo Academy", fee: null, type: "youth" },
      { years: "2020-2022", club: "Liverpool Academy", fee: "€250K", type: "youth" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: null, image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p591386.png",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 37, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.2, status: "injured", injuryNote: "Hamstring tear vs Palace (Apr 25, 59') — limped off clutching left hamstring, applauded by Anfield. Van Dijk (Apr 27): 'doing everything possible to partake in Anfield farewell' for Brentford May 24. Egypt FA director (Apr 26): 4-week absence, 'has played his last game for Liverpool.' Fit for World Cup", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", injuryNote: "Ruptured Achilles tendon (April 14 vs PSG) — scan confirmed 9-12 month absence; misses remainder of 2025-26 season and 2026 World Cup with France per Deschamps", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 10, goals: 2, assists: 1, cleanSheets: null, xG: 1.2, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.0, status: "fit", injuryNote: "On the derby bench (Apr 19) — primary rotation option with Isak's minutes managed; youngest-ever PL Anfield scorer (17y 225d)", image: "https://www.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
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

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-04-28T08:30:00Z",
  summary:
    "Tuesday Apr 28 — Old Trafford week's quieter morning is Liverpool's loudest transfer signal yet: ESPN's wire (Apr 28) puts the Reds 'eyeing Adam Wharton' against Man Utd & Real Madrid competition for the £80m Palace midfielder, and TEAMtalk reports Hughes pairing the Wharton swoop with Caleb Yirenkyi as a 'dream' double-deal as the Mac Allister succession plan. Caoimhin Kelleher told Liverpool.com today he 'wants to apologize' to Mohamed Salah at the Brentford farewell, the latest sign the May 24 send-off is being scripted regardless of whether Salah's hamstring (4-week timeline, Egypt FA) lets him take the field. This Is Anfield's Apr 28 piece on Konaté calls the 'big chance I'm here next season' line a 'massive relief' for the squad backbone before the run-in. Liverpool.com also published a season-in-review take this morning — battered and bruised, but with reason for optimism — and Empire of the Kop reports Steven Gerrard has been offered an 'enticing' Bristol City project to replace Roy Hodgson. Yesterday's Van Dijk Salah-farewell briefing, Bayern's Olise block and Slot's 'Curtis Jones like Trent at RB' praise still frame the Old Trafford selection backdrop. Six points from four secures UCL; Opta still has Liverpool 97.9% to qualify.",
  keyTopics: [
    {
      title: "BREAKING — Liverpool 'Eye' Adam Wharton vs Man Utd & Real Madrid for £80m Mac Allister Successor",
      detail:
        "Reported this morning (Apr 28) by ESPN's transfer wire and Liverpool.com: the Reds lead the early race for the England midfielder, with TEAMtalk pairing the Wharton swoop with Caleb Yirenkyi from Nordsjaelland as Hughes' 'dream' £92m double-deal. Wharton was Palace's standout in Saturday's 3-1 defeat (3 chances created); Real Madrid and Man Utd are the named challengers, contract runs to 2029.",
      category: "transfers",
    },
    {
      title: "Kelleher Wants to Apologize to Salah at Liverpool Farewell",
      detail:
        "Reported today (Apr 28) by Liverpool.com and Read Liverpool FC: ex-Reds keeper Caoimhin Kelleher has 'broken silence' on the Salah exit ahead of the Brentford May 24 finale, telling reporters he 'wants to apologize' to the Egyptian for his role in the toxic dressing-room speculation last winter. Confirms again the Brentford goodbye is being scripted whether or not Salah's hamstring lets him take the field.",
      category: "general",
    },
    {
      title: "Konaté 'Big Chance I'm Here Next Season' — TIA Calls Latest Update a 'Massive Relief'",
      detail:
        "Reported today (Apr 28) by This Is Anfield in a fresh analysis piece: Konaté himself confirmed he is 'close to an agreement' with the line 'we are close — it's what I always wanted', with Romano-flagged 'main salary structure' aligned. TIA frame this as the single biggest squad-retention win before Robertson's free-agent exit and the Salah departure. Real Madrid U-turn sealed.",
      category: "transfers",
    },
    {
      title: "Liverpool.com: 'Battered and Bruised — But With Reason for Optimism'",
      detail:
        "Liverpool.com's morning op-ed today (Apr 28) frames the season-in-review for the run-in: a 'battered and bruised' Liverpool that nevertheless heads to Old Trafford 8 points clear of fifth, with the Wirtz era only just beginning, Konaté locked in, Diomande talks 'concrete' and Slot publicly backed by FSG. Optimistic framing pushed despite the Salah/Ekitike attacking crisis.",
      category: "general",
    },
    {
      title: "Steven Gerrard Offered 'Enticing' Bristol City Project — Plus Burnley Link",
      detail:
        "Reported today (Apr 28) by Liverpool.com, Empire of the Kop, Yahoo Sports and CaughtOffside: Bristol City have 'laid out an enticing project' to land Gerrard once Roy Hodgson departs at season's end, with Burnley flagged as a parallel suitor. Gerrard's parallel TNT Sports comments — that Guehi & Semenyo 'should be playing for Liverpool' — keep him tied to the Reds news cycle.",
      category: "general",
    },
    {
      title: "Van Dijk on Salah Farewell: 'Doing Everything Possible to Partake' in Anfield Send-Off",
      detail:
        "Reported yesterday (Apr 27) by beIN Sports, Liverpool.com and Soccernews: captain Virgil van Dijk told the pre-Man Utd presser that even with the hamstring tear, Salah is racing to be fit for the Brentford Anfield finale May 24. Van Dijk: 'whatever happens with Mo, he'll get the goodbye his time at the club deserves' — the club lining up a post-match address regardless of whether he plays.",
      category: "general",
    },
    {
      title: "Bayern Chief Rummenigge Rules Out Any Olise Sale to Liverpool",
      detail:
        "Confirmed yesterday (Apr 27) by CaughtOffside, Liverpool FC, Empire of the Kop and Yahoo Sports: Bayern Munich chairman Karl-Heinz Rummenigge publicly ruled out the Michael Olise transfer 'for any price' — citing the club's unwritten policy and a 2009 precedent. SD Max Eberl: 'Olise is absolutely untouchable.' Liverpool reportedly ready to offer up to €200m; Bayern wouldn't 'even discuss' it. Closes a key Salah-replacement avenue and pushes Diomande further up the list.",
      category: "transfers",
    },
    {
      title: "Slot Praises Curtis Jones' RB Form: 'Comfort on the Ball, Like Trent'",
      detail:
        "Reported yesterday (Apr 27) by Liverpool.com, Empire of the Kop and Yahoo Sports: Arne Slot's pre-Man Utd remarks compared Jones' two-game inverted RB stint (Everton + Palace, both Liverpool wins) to Trent Alexander-Arnold's signature trait. EOTK headline: 'criminally underused ace deserves start' — Jones rated 8/10 by TIA & Liverpool.com on Saturday after assisting Robertson. Villa exit talk has gone quiet; he's earned the Old Trafford selection.",
      category: "tactics",
    },
    {
      title: "Salah 4 Weeks Out, 'Has Played Last Game' — Egypt FA Verdict Stands",
      detail:
        "Confirmed Sunday (Apr 26) by Egypt FA director Ibrahim Hassan via Sky Sports, Al Jazeera, FOX Sports and Goal.com: Salah suffered a hamstring tear at 59' on Saturday and faces 4 weeks of treatment — ruling him out of Man Utd (A), Chelsea (H), Villa (A) and the Brentford finale before his free-agent exit. He'll be fit for Egypt at the World Cup. Salah hugged Slot before walking down the tunnel; agent Ramy Abbas still says 'no one knows' the next destination.",
      category: "injuries",
    },
    {
      title: "Slot's Striker Crisis: Isak Now Liverpool's Lone Senior No.9",
      detail:
        "Confirmed Apr 26-28: with Ekitike (Achilles, 9-12 months) out and Salah hamstrung, Isak is the only fit recognised forward of senior pedigree. Gakpo can deputise centrally — he started LW Saturday — but the four-game run-in (Man Utd, Chelsea, Villa, Brentford) hangs on the Swedish striker staying healthy. Chiesa, Frimpong (likely shifted to RW) and 17-year-old Ngumoha the only other attacking options.",
      category: "tactics",
    },
    {
      title: "Alisson Targeting Old Trafford Return — Slot: 'Close But Not Close Enough' for Saturday",
      detail:
        "Reported Apr 25-27 by Empire of the Kop, OneFootball, DaveOCKOP and Liverpool.com: Alisson missed Saturday for caution but is on track to face Man Utd (A) May 3 — exactly the timeline Slot laid out Apr 24. Mamardashvili remains out 2-4 weeks with the stitched knee wound from the Beto collision. Woodman set to keep gloves only if Alisson fails the late fitness test.",
      category: "injuries",
    },
    {
      title: "MATCH REPORT — Liverpool 3-1 Crystal Palace: Up to 4th, 6 Points From UCL",
      detail:
        "Played Saturday Apr 25 at Anfield: Isak (29') controlled Mac Allister's skewed long shot for his first Anfield league goal; Robertson (44') finished a Curtis Jones counter; Munoz (71') pulled one back; Wirtz drove home in added time to seal it. Curtis Jones at RB and Mac Allister in the pivot (Gravenberch rested). Liverpool jumped above Aston Villa into 4th — Opta now has them 97.9% to qualify for the UCL.",
      category: "matches",
    },
    {
      title: "Diomande Talks 'Concrete' — £87m Leipzig Winger Liverpool's Summer No.1",
      detail:
        "Updated Apr 24-28 across This Is Anfield, Football Transfers, Empire of the Kop and Liverpool.com: Liverpool 'hold a clear lead' over PSG and Arsenal for the 19-year-old (10 G/7 A this Bundesliga season); £87m / €100m+ from RB Leipzig. Talks held with reps; Szoboszlai is the in-house influence. With Bayern blocking Olise, Diomande is the firm summer No.1 — though Leipzig may still try to insert a 2027 release clause to delay.",
      category: "transfers",
    },
    {
      title: "Run-In: Man Utd (A) May 3, Chelsea (H) May 9, Villa (A) May 17, Brentford (H) May 24",
      detail:
        "Per the Premier League fixture list confirmed Apr 25-28: Liverpool's four remaining games are Man Utd at Old Trafford Sun May 3 (14:30 UTC, Sky), then Chelsea, Villa and the Brentford home finale where Salah is targeting his Anfield farewell. Six points from any combination secures top-five UCL — Slot will need it from a Salah-less, Ekitike-less attack with Isak the lone senior No.9.",
      category: "matches",
    },
  ],
  sources: [
    "Liverpool FC",
    "Liverpool.com",
    "This Is Anfield",
    "ESPN",
    "Sky Sports",
    "beIN Sports",
    "Al Jazeera",
    "FOX Sports",
    "Goal.com",
    "Empire of the Kop",
    "Rousing The Kop",
    "CaughtOffside",
    "TEAMtalk",
    "Tribuna",
    "Football Transfers",
    "Football365",
    "Yahoo Sports",
    "OneFootball",
    "DaveOCKOP",
    "Read Liverpool FC",
    "Anfield Watch",
    "Anfield Index",
    "NBC Sports",
    "Sports Mole",
    "Soccernews",
    "The Hard Tackle",
    "SI Soccer",
    "Premier League",
    "Opta",
  ],
};

