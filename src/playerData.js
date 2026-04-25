// ─── Liverpool FC Player Data (2025-26 Season · Updated Apr 25, 2026) ────────
// Extracted from App.jsx — single source of truth for player, news, and RSS data

// Statuses: "fit" | "injured" | "doubtful" | "recovering"
// injuryNote: short description shown on card when not fit
// Optional: returningFromInjury: { matchesBackIncludingThis: 1|2 }
//   — added by skill when a player returns from 3+ week absence, removed after 2 matches back
export const PLAYERS = [
  // ── Goalkeepers ───────────────────────────────────────────────────────────
  {
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "injured", injuryNote: "Slot's pre-Palace presser (Apr 24): Alisson is a 'late fitness test' but more likely Man Utd (A, May 3) is the return — NOT Palace today. Slot dismissed Juventus chatter saying Alisson is 'only focused on recovery'; Reds had triggered 1-yr extension to 2027", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 17, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.8, status: "injured", injuryNote: "Deep wound below left knee (Beto collision, 59' vs Everton Apr 19) needed stitches — confirmed ~3-week absence per Liverpool.com. Out for Palace today (Apr 25) AND Man Utd (A, May 3); Woodman to make full PL debut", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 39, goals: 4, assists: 1, cleanSheets: 11, xG: 2.8, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Scored 100th-minute header from Szoboszlai corner vs Everton (Apr 19) in first-ever Hill Dickinson derby — 7.8 match rating, captain's goal moved Liverpool 7 clear of 6th", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 36, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 7.1, status: "fit", injuryNote: "Romano (Apr 20): new Liverpool deal 'nears completion' — only contract length & bonus structure left. Konaté to BBC: 'we are close to an agreement'. Massive U-turn on Real Madrid free-transfer chatter", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
    physical: { height: 194, weight: 95, pace: 78, acceleration: 76, sprintSpeed: 80 },
    career: [
      { years: "2014-2017", club: "Sochaux", fee: null, type: "youth" },
      { years: "2017-2021", club: "RB Leipzig", fee: "€15M", type: "senior" },
      { years: "2021-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 18, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 6.2, status: "fit", injuryNote: "Returned to outdoor training Thu Apr 23 — Slot confirmed in Apr 24 presser: 'available for selection' vs Palace today. Back in the squad after the PSG-cameo muscle issue but unlikely to start with Konaté/VVD/Frimpong all fit", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 26, goals: 0, assists: 3, cleanSheets: 8, xG: 0.5, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.2, form: 6.8, status: "fit", injuryNote: "Sports Mole headline 'Robbo Out' (Apr 24) — Kerkez expected to come back in at LB after derby 90'. Scotland captain still set for a free-agent summer move (Tottenham leading)", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
    physical: { height: 178, weight: 70, pace: 79, acceleration: 81, sprintSpeed: 77 },
    career: [
      { years: "2010-2013", club: "Queen's Park", fee: null, type: "senior" },
      { years: "2013-2014", club: "Dundee United", fee: "Free", type: "senior" },
      { years: "2014-2017", club: "Hull City", fee: "€3.4M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€9.3M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 36, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 7.0, status: "fit", injuryNote: null, image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 32, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.9, status: "fit", injuryNote: "Liverpool.com (Apr 24) say Slot has a Frimpong call to make at RB — TIA & Sports Mole predict him recalled for the Palace home game over Jones' inverted-RB experiment from the derby", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 37, goals: 2, assists: 3, cleanSheets: null, xG: 1.8, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 7.0, status: "fit", injuryNote: "Benched for derby (Apr 19); Slot went with a Gravenberch-Szoboszlai double pivot in a 4-2-3-1 shape", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 37, goals: 5, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: null, image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 44, goals: 11, assists: 8, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Delivered the 100th-minute corner Van Dijk headed home vs Everton (Apr 19) — 93% pass completion on derby day, 7.1 rating", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 22, goals: 1, assists: 2, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.8, form: 7.2, status: "fit", injuryNote: "TIA/Tribuna (Apr 22-23): 'strongly considering' a summer exit — Aston Villa now leading with Tottenham still keen, after Inter's Jan approach. Only 23 starts in 44 apps; final year of contract. 8.4 derby rating but rotation talk dominant", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 30, goals: 5, assists: 6, cleanSheets: null, xG: 4.5, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.0, status: "fit", injuryNote: null, image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 36, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.4, status: "fit", injuryNote: "Slot's pre-Palace presser (Apr 24): said Salah is 'back to normal' — chances both falling to him and being created. Equalled Gerrard's PL Merseyside Derby record (9 goals) last time out. Free-agent exit confirmed Mar 24; agent says 'no one knows' next club", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 35, goals: 8, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.3, status: "fit", injuryNote: "TIA's predicted XI (Apr 24) puts Gakpo at ST vs Palace — Slot's 'big striker decision' as Isak's minutes are managed. Derby assist & 7.9 rating on Apr 19 keeps him a sure starter", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 14, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 16, goals: 8, assists: 2, cleanSheets: null, xG: 9.2, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.4, status: "recovering", injuryNote: "Slot's pre-Palace presser (Apr 24): 'big striker decision' vs Palace today — Isak still on a managed-minutes plan ahead of summer World Cup with Sweden. Started derby but subbed at HT; TIA predict Gakpo gets ST nod", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Available — Slot confirmed fit for upcoming fixtures including Fulham (Apr 11)", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
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
};

// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Crystal Palace",
  shortName: "CRY",
  home: true,
  date: "2026-04-25T14:00:00",
  competition: "PL",
  venue: "Anfield",
  broadcast: "Sky Sports",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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
  generatedAt: "2026-04-25T09:00:00Z",
  summary:
    "Saturday Apr 25 — MATCHDAY at Anfield, 14:00 vs Crystal Palace, and Slot's pre-match presser (Apr 24) was the lightest he's been all season. Mohamed Salah is 'back to normal,' Joe Gomez has returned to outdoor training and is available, and Freddie Woodman is poised to make his full PL debut against his boyhood club because Mamardashvili is out ~3 weeks with a stitched knee wound and Alisson — who Slot called a late fitness test but more likely an Old Trafford May 3 return — is staying focused on recovery, NOT on the Juventus chatter. Spirit of Shankly will run a 13th-minute yellow-card protest inside Anfield over a 13% three-year ticket-price rise. Off-pitch the headline overnight is Curtis Jones — TIA, Tribuna and Rousing The Kop all reporting he is 'strongly considering' a summer exit with Aston Villa now leading Tottenham (and Inter still circling) for the 25-year-old. Yan Diomande is reportedly nearing agreement and is set to be Liverpool's first summer buy per Yahoo Sports, while Caught Offside add Rafael Leao to the £60m forward shortlist alongside Man Utd. Konaté's new deal is still 'close,' Wharton (Liverpool's £80m midfield target) is fit and lining up for an 'Anfield audition' for Palace, and Liverpool sit 7 clear of 6th with three more wins likely sealing the top-five spot.",
  keyTopics: [
    {
      title: "MATCHDAY — Crystal Palace (H), 14:00 · Slot's Most Relaxed Presser of the Season",
      detail:
        "Reported Apr 24 across Liverpool FC, lfcglobe and theredmentv: Arne Slot was 'laughing and joking' with reporters in his pre-Palace presser — the lightest he's been all year — with UCL qualification effectively a done deal. He praised Palace's 'discipline' and Glasner directly; Palace have beaten Liverpool three times already this season. Liverpool are 1/2 favourites; Opta still has Reds top-five at ~69%.",
      category: "matches",
    },
    {
      title: "Slot Confirms: Salah 'Back to Normal,' Gomez Available, Woodman to Start vs Palace",
      detail:
        "From Slot's Apr 24 pre-match presser (Liverpool FC, Liverpool.com): Mohamed Salah is 'back to normal' — chances both falling to him and being created by him; Joe Gomez has returned to outdoor training and is available for selection; Freddie Woodman is poised for his full PL debut against his boyhood club because Mamardashvili is out ~3 weeks and Alisson — a 'late fitness test' — more realistically returns at Old Trafford on May 3.",
      category: "tactics",
    },
    {
      title: "Spirit of Shankly Yellow-Card Protest Inside Anfield in 13th Minute Today",
      detail:
        "Confirmed Apr 22-23 by Empire of the Kop, This Is Anfield, Liverpool.com and Tribuna: ~75,000 yellow cards will be handed out before kickoff and held aloft in the 13th minute as a coordinated protest against a 13% ticket-price rise across the next three seasons. First Kop-stand price hike since FSG bought the club in 2010; campaign extends across home AND away fixtures, starting today vs Palace.",
      category: "general",
    },
    {
      title: "Curtis Jones 'Strongly Considering' Liverpool Exit — Aston Villa Leading Tottenham",
      detail:
        "Reported Apr 22-23 by This Is Anfield, Tribuna, Caught Offside, Yahoo Sports and Rousing The Kop: Aston Villa have moved ahead of Tottenham (and Inter, who tried in January) for the 25-year-old, who has started just 23 of 44 apps and 'just six in the last three months.' Final year of his deal in 2026-27 — Liverpool now face the buy-or-cash-in call. Empire of the Kop today (Apr 24) adds Liverpool 'open to' the move.",
      category: "transfers",
    },
    {
      title: "Yahoo: Yan Diomande Set to be Liverpool's First Summer Buy — Agreement 'Nearing'",
      detail:
        "Yahoo Sports (Apr 24) and Anfield Watch say Liverpool have a 'green light' for the £87m+ Leipzig winger, with talks at advanced stage. Caught Offside (Apr 24) caution that Leipzig may push the deal to summer 2027, which Rousing The Kop (Apr 23) flagged as a 'slight worry.' This Is Anfield calls Diomande the 'unicorn Salah successor' from Florida-via-Leipzig.",
      category: "transfers",
    },
    {
      title: "BREAKING — Liverpool Now Linked With £60m Rafael Leao Alongside Man Utd",
      detail:
        "Reported Apr 24 by Caught Offside (with Anfield Index amplifying): Milan are reportedly willing to let Leao go for as low as £60m, and the 26-year-old has 12 goals/assists for Milan. Liverpool and Man Utd both placed on alert. 'A bargain' tag attaches given his ability profile, with Liverpool seeking a Salah successor on the right wing.",
      category: "transfers",
    },
    {
      title: "Slot Dismisses Alisson-to-Juventus Chatter: 'Only Focused on His Recovery'",
      detail:
        "Reported Apr 24 (Liverpool.com, Tribuna): in his pre-Palace presser Slot deflected the Romano bombshell from Apr 23 ('Alisson likes the idea' of a Juve return) — saying the keeper is 'concentrating solely on his recovery,' not transfer rumours. Liverpool triggered a 1-yr extension to 2027 last week, putting any move firmly on Reds' terms. Trafford 5-club race remains live as long-term plan.",
      category: "transfers",
    },
    {
      title: "Wharton Fit for 'Anfield Audition' — £80m Liverpool Target Starts for Palace",
      detail:
        "Confirmed Apr 22-24 across This Is Anfield, GiveMeSport and Anfield Watch: Crystal Palace midfielder Adam Wharton is fit to start vs Liverpool today after Glasner welcomed him back from injury. Liverpool 'registered formal interest' — £80m is the price tag with Man Utd and Real Madrid also in the mix. Comfortable as a No.6, Wharton's profile lines up with Curtis Jones's exit talk.",
      category: "transfers",
    },
    {
      title: "Romano: Konaté's New Liverpool Deal 'Nears Completion' — Only Length & Bonuses Left",
      detail:
        "Reported Apr 20 by Tribuna (Fabrizio Romano), reinforced Apr 22-24 by ESPN, TeamTalk, Sports Illustrated and Yahoo Sports: 'Both sides already aligned on the main salary structure' — only contract duration and performance-related bonuses remain. Konaté himself confirmed to BBC: 'we are close to an agreement.' Critical relief after months of Real Madrid free-transfer chatter; locks Liverpool's 26-year-old CB beyond June 2026.",
      category: "transfers",
    },
    {
      title: "Liverpool Aware of Denzel Dumfries' €25m Inter Release Clause",
      detail:
        "Reported Apr 24 by Anfield Watch: Liverpool's recruitment team are aware that the Netherlands RB has a €25m release clause well below market value at Inter. Comes alongside the Frimpong-Bradley RB depth question and a likely summer-window first-team RB target.",
      category: "transfers",
    },
    {
      title: "Anthony Gordon — Newcastle Set $100M Price; Bayern Munich Now No.1 Suitor",
      detail:
        "Reported Apr 20-22 across Liverpool.com, GeordieBootBoys and Football365: Newcastle have set Gordon's fee at ~£75m ($100M), matching the figure Liverpool agreed in the failed 2024 deal. Bayern have made him their No.1 left-wing target and Liverpool/Arsenal also tracking. Newcastle PSR may yet force a sale.",
      category: "transfers",
    },
    {
      title: "Senesi Free Transfer Still in Play — TIA: Liverpool 'Perfect' Bournemouth CB Move",
      detail:
        "Reported Apr 22-24 by This Is Anfield, Goal and TEAMtalk: Marcos Senesi (28, Argentina) will leave Bournemouth on a free in the summer and Liverpool remain the clear frontrunners. Played 49 times under Slot at Feyenoord; Hughes drove his original Cherries move. Left-footed CB to partner Van Dijk while Konaté's deal completes.",
      category: "transfers",
    },
    {
      title: "Van Dijk 100' Header Wins Historic Hill Dickinson Derby — Salah Equals Gerrard's PL Derby Record",
      detail:
        "Played Sunday Apr 19 — Van Dijk headed home Szoboszlai's corner in the 10th minute of stoppage time for a 2-1 win at Everton's new Hill Dickinson Stadium. Salah's 29th-minute opener was his 9th PL Merseyside Derby goal, equalling Gerrard's all-time record in his final-ever derby. Liverpool 7 clear of 6th-placed Chelsea heading into today's Palace match.",
      category: "matches",
    },
    {
      title: "Liverpool Injury List Trimmed: Gomez Returns, 7 Still Out",
      detail:
        "Per Liverpool.com (Apr 24) and TribalFootball: Joe Gomez returns to availability today, but Mamardashvili (3 wks · knee), Alisson (Man Utd target), Bradley (knee · season), Leoni (ACL · season), Bajcetic (hamstring · season), Endo (ankle · season) and Ekitike (ruptured Achilles · 9-12 months · misses World Cup) remain sidelined. Quansah's ACL is also confirmed long-term.",
      category: "injuries",
    },
    {
      title: "Robertson & Salah Exits Still Confirmed — Summer Rebuild Scope Keeps Growing",
      detail:
        "Both starting Apr 19's derby win: Andy Robertson (9 seasons) will leave as a free agent with Tottenham leading the Scotland-captain race; Salah's free-agent departure was officially confirmed Mar 24 — agent Ramy Abbas now says 'no one knows' next club, with MLS, Saudi Pro League and even staying-in-Europe options all live. Federico Chiesa likely to follow.",
      category: "transfers",
    },
  ],
  sources: [
    "Liverpool FC",
    "Liverpool.com",
    "This Is Anfield",
    "Empire of the Kop",
    "Goal.com",
    "Sports Mole",
    "Tribuna",
    "Sky Sports",
    "Rousing The Kop",
    "Sports Illustrated",
    "TEAMtalk",
    "Caught Offside",
    "Yahoo Sports",
    "Fotmob",
    "ESPN",
    "Anfield Watch",
    "Anfield Index",
    "GiveMeSport",
    "TribalFootball",
    "lfcglobe",
    "The Redmen TV",
    "BeIN Sports",
    "VAVEL",
    "Al Jazeera",
  ],
};

