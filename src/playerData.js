// ─── Liverpool FC Player Data (2025-26 Season · Updated May 4, 2026) ────────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "injured", outSince: "2026-03-22", injuryNote: "Fri May 8 — This Is Anfield/Liverpool.com confirmed Wed May 6 that Alisson missed training again, and Liverpoolworld now lists him as NOT expected back for Chelsea (May 9) — eight consecutive league matches missed with the hamstring. Off the pitch, Liverpool.com (Schira) reports the Brazilian has 'agreed personal terms with Juventus' on a €5m-a-year deal; Reds still need convincing to sell. Slot's Friday 1:15pm presser will give the firm call but Aston Villa (A) Fri May 15 the more realistic return", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 17, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.8, status: "injured", outSince: "2026-04-20", injuryNote: "Missed Wednesday training again per Tribuna/Sky Sports — knee stitches from Beto collision (Apr 19) still keeping him out. Aston Villa trip Fri May 15 (rescheduled from May 17 after Villa's Europa League final booking) the earliest realistic return per LFC's run-in injury rundown. With Alisson also missing Wed training Woodman set for a third consecutive PL start vs Chelsea Saturday", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 41, goals: 4, assists: 1, cleanSheets: 11, xG: 2.8, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.2, status: "fit", injuryNote: "Tue May 5 — defended Slot publicly across Yahoo Sports, This Is Anfield, Goal.com, theScore and Rousing The Kop after Mon's 'mini-break' criticism: 'We are not kids — it's a city trip.' Simultaneously called the season 'unacceptable.' Caught Mac Allister with an elbow in the build-up to Cunha's 6' at Old Trafford Sun May 3; The Athletic (Apr 30) still reports him expected to leave end of 2026-27. Liverpool 4th, 6 pts clear of Bournemouth (Opta 97.14% top-five)", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 38, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 7.0, status: "doubtful", injuryNote: "Fri May 8 — fresh fitness scare: Sky Sports/Tribuna and This Is Anfield report Konaté trained AWAY from the main group on Wednesday after being substituted late at Old Trafford (Sun May 3, L 3-2); 'severity still unclear.' Liverpool.com headline: 'Five Liverpool stars miss training as Slot faces injury worry.' Slot's Friday 1:15pm presser will give the firm call. Off the pitch the contract is still '50/50' per Crook (Apr 25) — Real Madrid in chase, Liverpool tracking Bremer/Bastoni/Schlotterbeck shortlist", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
    physical: { height: 194, weight: 95, pace: 78, acceleration: 76, sprintSpeed: 80 },
    career: [
      { years: "2014-2017", club: "Sochaux", fee: null, type: "youth" },
      { years: "2017-2021", club: "RB Leipzig", fee: "€15M", type: "senior" },
      { years: "2021-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 18, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 6.2, status: "fit", injuryNote: "Unused Old Trafford bench (Sun May 3, L 3-2) — Slot stuck with the Konaté/VVD pairing throughout. Beukema's £24m link from TeamTalk Sat May 2 a clear hint Hughes views Gomez as a likely summer departure", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 28, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 6.8, status: "fit", injuryNote: "Hooked at 59' for Kerkez at Old Trafford (Sun May 3, L 3-2) — 5-6.5 ratings as 'beaten too easily by Mbeumo'. Goal.com listed him among the Reds 'flops'. Tottenham agreement still summer-conditional on their PL fate — Liverpool linked with Dortmund's Daniel Svensson as the long-term LB heir", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
    physical: { height: 178, weight: 70, pace: 79, acceleration: 81, sprintSpeed: 77 },
    career: [
      { years: "2010-2013", club: "Queen's Park", fee: null, type: "senior" },
      { years: "2013-2014", club: "Dundee United", fee: "Free", type: "senior" },
      { years: "2014-2017", club: "Hull City", fee: "€3.4M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€9.3M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 37, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 7.0, status: "fit", injuryNote: "Came on at 59' for Robertson at Old Trafford (Sun May 3, L 3-2) — niggle managed and back-up to deputise immediately. Likely starts at LB vs Chelsea (H) May 9 with Robertson having flopped per Goal.com ratings, freeing the Scotland captain for a controlled May rotation through the run-in", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 34, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Started Old Trafford (Sun May 3, L 3-2) on the right wing as Salah/Isak cover — pulled at 75' for Ngumoha after a 5.5 outing per This Is Anfield: 'no end product, lost 8 of 10 duels with Luke Shaw'. Liverpool.com (Mon May 4) listed him among the city-trip group; VVD's Tue May 5 'we are not kids' rebuttal applied. Likely loses the LW spot to Ngumoha for Chelsea (H) May 9; Curtis Jones nailed-on at RB", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 39, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 7.2, status: "fit", injuryNote: "Caught by VVD's elbow in the build-up to Cunha's 6' opener at Old Trafford (Sun May 3, L 3-2) — bandaged, played through 'epic midfield battle' for a 7/10. Premier League's social channels showed him in the protective head cap for the second half. Expected fit for Chelsea (H) May 9", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 39, goals: 5, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.4, status: "fit", injuryNote: "Returned to start at Old Trafford (Sun May 3, L 3-2) — 7/10 with 'nine passes into the final third' per This Is Anfield. NBC Sports flagged him as one of the few Liverpool 'players who could use a rest' but he plays through the run-in regardless. Locks midfield for Chelsea (H) May 9", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 46, goals: 12, assists: 8, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.8, status: "fit", injuryNote: "Pulled the goal back to start the comeback at Old Trafford (Sun May 3, L 3-2) — 8.5/10 from Goal.com: 'what a read to take the ball off Amad Diallo and drive for the goal'. The 47' strike sparked Liverpool's response but Mainoo had the final word. Engine of the run-in", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 25, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 7.6, status: "fit", injuryNote: "Thu May 7 escalation — Empire of the Kop and Yahoo Sports report Wed May 6 that contract talks at Liverpool have 'effectively ceased' and an Inter Milan exit 'now seems likely.' Builds on Tue May 5 Romano (Tribuna) line that Jones has given his 'full approval' to the Inter switch. Aston Villa, Newcastle and Inter all in. On the pitch he's still locking down RB — Goal.com 8/10 at Old Trafford (Sun May 3) with 100+ touches; Slot's Trent-redux RB experiment continues to thrive. Sports Mole Wed: Liverpool 'preparing £34m bid' for the Wharton replacement", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 32, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.3, status: "doubtful", injuryNote: "Fri May 8 — fresh fitness doubt: This Is Anfield/Sky Sports/Liverpool.com confirmed Wed May 6 that Wirtz trained AWAY from the main group on Wednesday — 'severity still unclear' per Sky's Tribuna roundup. Liverpool.com 'Five Liverpool stars miss training' lead. Started Old Trafford (Sun May 3, L 3-2) on the right of the front three. Awaiting Slot's Friday 1:15pm BST presser for the firm Chelsea (H) call — uncapped Tommy Pilling drafted into training in his absence per TIA", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 37, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.2, status: "injured", outSince: "2026-04-26", injuryNote: "Fri May 8 — Salah missed Wednesday training again per Tribuna/Sky Sports. Probably won't feature vs Chelsea Saturday — back in the gym but not full team training. Slot Apr 30: Salah will return 'in the final part of the season, but not Manchester United.' Aston Villa (A) Fri May 15 the more realistic comeback target; Salah's own line via TNT — 'for sure I will be back for the final game' (Brentford May 24) — still holds. Sat May 2 publicly asked Anfield to give Henderson 'the farewell he deserved'", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 37, goals: 9, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.4, status: "fit", injuryNote: "Levelled it at 2-2 in the 56' at Old Trafford (Sun May 3, L 3-2) — second-half goal that briefly looked like rescuing a draw before Mainoo's 77' winner. Carried the front line as a false 9 with Isak and Salah out; nailed-on to lead again vs Chelsea (H) May 9", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 17, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.7, status: "doubtful", outSince: "2026-05-02", injuryNote: "Fri May 8 — late fitness test for Chelsea (H) per Liverpool.com/Yahoo Sports. Slot Mon May 4 described the groin strain as 'really small' but Isak missed Wednesday training along with Salah/Alisson/Mama. Anfield Index Wed: 'genuine belief' he could feature; SI's Thursday lead — 'Isak Decision Made.' Slot's Friday 1:15pm presser is the firm call. Aston Villa (A) Fri May 15 the firmer secondary target after the rescheduling", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 11, goals: 2, assists: 1, cleanSheets: null, xG: 1.2, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.0, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Came on at 75' for Frimpong at Old Trafford (Sun May 3, L 3-2) — Slot's first attacking change as the comeback fizzled. Now firmly on the matchday squad list as Isak's groin keeps the senior striker pool thin; live in contention to start vs Chelsea (H) May 9", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Unused substitute at Old Trafford (Sun May 3, L 3-2) — Slot turned to Ngumoha and Kerkez instead. Rotation winger option for Chelsea (H) May 9; April reporting still has the Italian likely to exit this summer", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Second consecutive league start at Old Trafford (Sun May 3, L 3-2) with Alisson and Mama still out — beaten by Cunha 6', Sesko 14' and Mainoo 77' but ratings 6-7 across TIA & Liverpool.com on a tough afternoon. Drops back to the bench once Alisson is cleared for Chelsea (H) May 9", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
  opponent: "Chelsea",
  shortName: "CHE",
  home: true,
  date: "2026-05-09T11:30:00",
  competition: "PL",
  venue: "Anfield",
  broadcast: "TNT Sports",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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

// ─── Premier League Standings (after Round 35) ─────────────────────────────
// Liverpool fixed after the Sun May 3 Old Trafford defeat — other rows held
// at their pre-MW35 positions (full league round still rolling).
export const STANDINGS = [
  { pos: 1, team: "Arsenal",         p: 34, w: 24, d: 6, l: 4,  gd: 46, pts: 78 },
  { pos: 2, team: "Manchester City", p: 34, w: 22, d: 7, l: 5,  gd: 39, pts: 73 },
  { pos: 3, team: "Newcastle",       p: 34, w: 20, d: 6, l: 8,  gd: 24, pts: 66 },
  { pos: 4, team: "Liverpool",       p: 35, w: 19, d: 7, l: 9,  gd: 21, pts: 64, highlight: true },
  { pos: 5, team: "Aston Villa",     p: 34, w: 18, d: 8, l: 8,  gd: 14, pts: 62 },
  { pos: 6, team: "Chelsea",         p: 34, w: 17, d: 9, l: 8,  gd: 12, pts: 60 },
  { pos: 7, team: "Tottenham",       p: 34, w: 17, d: 7, l: 10, gd: 8,  pts: 58 },
  { pos: 8, team: "Brighton",        p: 34, w: 15, d: 9, l: 10, gd: 5,  pts: 54 },
];

// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Mainoo, at the death, and a 19th defeat.",
    byline: "Sky Sports",
    dateline: "Old Trafford · 3 May",
    category: "Match Report",
    body: "Two down inside fourteen minutes — Cunha, then Sesko, the second one waved through by a VAR shrug Slot would later spend forty minutes denouncing. Two-all by the hour through Szoboszlai and Gakpo, the comeback pulled together in the kind of second-half stretch that flatters a season. Then, on seventy-seven, Kobbie Mainoo finds the corner. The win secures United's place in next season's Champions League. Liverpool's nineteenth defeat is the kind of number that sits, unmoved, on the page.",
  },
  {
    n: "02",
    headline: "Slot's VAR rant, three months too late.",
    byline: "Goal.com",
    dateline: "Old Trafford · 3 May",
    category: "Manager",
    body: "'I remember PSG at home — a soft touch on Mac Allister, VAR intervenes, no penalty. The other week, PSG gets one. This time, the referee stops play when a United player is injured off the pitch. Last week, play continues when our goalkeeper is on the floor needing treatment.' The list went on. The pattern, the manager said, was complete. So too, by this point, was the season's reservoir of grievance — against officials, against luck, against, finally, fate. He acknowledged that United were the better side. The two thoughts, in a Slot post-match, do not contradict each other.",
  },
  {
    n: "03",
    headline: "Salah's gesture: 'The farewell Henderson deserves.'",
    byline: "TNT Sports",
    dateline: "Anfield · 2 May",
    category: "Farewells",
    body: "On May 24, Brentford visit Anfield. Mohamed Salah may be fit to play; he may not. Either way, he is the headline. But on the eve of his own departure, the Egyptian asked the club, the supporters, the room, to do something for the man returning in the away kit: Jordan Henderson, returning to the Anfield turf for the first time since the summer of 2023. 'He didn't get the send-off he deserved,' Salah said. The gesture — generous, unprompted, the captain's instinct surfacing in the No. 11 — was reported on Saturday. The response was immediate.",
  },
  {
    n: "04",
    headline: "Sir Alex, taken to hospital, and a ground that paused.",
    byline: "BBC Sport",
    dateline: "Old Trafford · 3 May",
    category: "Football News",
    body: "He had been in the directors' box, as he always is. Then, in the tunnel area shortly before kick-off, the eighty-four-year-old felt unwell, was helped from the building, and was taken to hospital. The Athletic, citing the club, was at pains to call it not an emergency. BBC Sport relayed an optimism around his quick return home. Sky Sports's coverage broke from the match itself to deliver the update at half-time. It was, in the end, the second story to come out of Old Trafford — but for an hour, before the second half began, it was the first.",
  },
  {
    n: "05",
    headline: "Wharton, advanced, and the Real Madrid pre-empt.",
    byline: "Caught Offside",
    dateline: "Liverpool · 2 May",
    category: "Transfers",
    body: "Adam Wharton: twenty-two, Crystal Palace, England, Real Madrid's reported summer target. Liverpool, per Matteo Moretto on Saturday, are now in advanced talks. Anfield Index, Football365, GiveMeSport, FootballTransfers all picked up the line within hours. The asking price floats around seventy million; the deal, if it lands, would be the second-most expensive midfield acquisition in the club's history after Wirtz. The midfielder himself is reportedly keen on a Champions League club. Liverpool's qualification — Opta has it at 97.14 percent — is the second contractual lever after the move itself.",
  },
];

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-05-08T11:00:00Z",
  summary:
    "Friday May 8 — One day out from Chelsea (H) Sat May 9 11:30 BST. Today's lead is the FRESH injury scare: This Is Anfield, Sky Sports and Liverpool.com confirmed overnight Wed-Thu that Ibrahima Konaté and Florian Wirtz BOTH trained separately from the main group on Wednesday — adding two new doubts to a Salah/Isak/Alisson/Mamardashvili trio that was already absent altogether. Slot's pre-Chelsea presser at the AXA at 1:15pm BST today is the moment of truth: Liverpool.com's 'Five Liverpool stars miss training' headline and the Sky Sports 'severity still unclear' line both put Konaté and Wirtz as live fitness tests. Second escalation: Premier League officially rescheduled the Aston Villa trip from Sun May 17 to FRIDAY May 15 8pm BST after Villa booked the Europa League final — Liverpool now have an eight-day break between Villa and the Brentford home finale May 24. Champions League maths held overnight: This Is Anfield this morning — 'Only 3 Clubs Can Now Catch Liverpool' (Bournemouth, Brentford, Brighton). A win or a Bournemouth slip at Fulham seals top-five at Anfield Saturday; Opta has it at 98.35%. Yesterday's Alisson-to-Juventus story (Schira, Liverpool.com) and the Curtis Jones 'contract talks effectively ceased' (EOTK/Yahoo Sports) both still threading through coverage; Slot's agent Pimenta gave ESPN 'many changes' tea-leaves Wed evening. Wirtz/Konaté being the fresh worry tilts the predicted XI from earlier in the week — Jacquet and Frimpong now back in live contention.",
  keyTopics: [
    {
      title: "Konaté & Wirtz Train Separately — New Injury Doubts Emerge for Chelsea (Reported Wed May 6, leading Fri May 8)",
      detail:
        "Confirmed by This Is Anfield, Sky Sports and Liverpool.com Wed May 6 evening, leading Fri May 8 coverage: Ibrahima Konaté and Florian Wirtz BOTH worked away from the main group on Wednesday — neither completely absent but neither training fully — adding two new fitness tests to the Salah/Isak/Alisson/Mamardashvili group that missed Wednesday altogether. Sky Sports' Tribuna line: 'severity still unclear.' Slot's Friday May 8 1:15pm BST AXA presser is the moment of truth — Liverpool.com's headline: 'Five Liverpool stars miss training as Slot faces injury worry.' Konaté was substituted late at Old Trafford and never trained fully since.",
      category: "injuries",
    },
    {
      title: "Aston Villa vs Liverpool Officially Moved AGAIN to Friday May 15, 8pm BST (Reported Thu May 7)",
      detail:
        "Confirmed Thu May 7 by This Is Anfield, Liverpool.com, Empire of the Kop and Sky Sports: the Premier League has officially rescheduled the Aston Villa (A) trip from Sun May 17 to FRIDAY May 15, 8pm BST after Villa booked the Europa League final in Istanbul on Wed May 20 by overturning their first-leg defeat to Nottingham Forest. The reshuffle gives Liverpool eight clear days between Villa and the Brentford home finale May 24, and Sky Sports take the broadcast.",
      category: "matches",
    },
    {
      title: "Slot's Pre-Chelsea Press Conference TODAY — 1:15pm BST AXA Stream (Fri May 8)",
      detail:
        "Liverpool FC and Sky Sports confirmed Fri May 8 1:15pm BST: Arne Slot speaks ahead of Saturday's Premier League match vs Chelsea, with Konaté/Wirtz fitness tests, Alisson/Isak update and Salah's hamstring all on the agenda. Reported by Read Liverpool yesterday that Slot expects 'small margins' on Alisson and Isak; Liverpool.com still tracking '16 players face missing' the Anfield game. Stream live via the official YouTube channel.",
      category: "general",
    },
    {
      title: "Champions League Race: 'Only 3 Clubs Can Now Catch Liverpool' — Top-Five Available Saturday (Fri May 8)",
      detail:
        "This Is Anfield this morning Fri May 8: 'Only 3 Clubs Can Now Catch Liverpool' — Bournemouth, Brentford and Brighton are the last challengers for the fifth spot. Liverpool sit 4th on 64 pts after 35 games with three to play; a win vs Chelsea Saturday OR any Bournemouth slip at Fulham seals top-five. Opta probability now 98.35% per the Premier League site. Empire of the Kop's Wed May 6 piece — 'Liverpool can clinch Champions League place on Saturday even without winning' — still threads through Friday previews.",
      category: "matches",
    },
    {
      title: "Slot's Agent Pimenta Hints at 'Many Changes' This Summer — ESPN (Thu May 7)",
      detail:
        "Reported Thu May 7 by ESPN, picked up by Empire of the Kop and This Is Anfield: Rafaela Pimenta — Slot's agent — gave an interview signalling that Liverpool 'will have many changes' this summer. The line lands directly into Liverpool.com's Thursday 'scale of rebuild emerges' framing and reinforces Wednesday's individual transfer escalations (Jones to Inter, Alisson to Juve, Wharton in advance talks). Sky Sports News reiterated overnight that Slot himself is expected to remain in charge for 2026-27.",
      category: "transfers",
    },
    {
      title: "James Pearce: FSG Standing Behind Slot Despite Xabi Alonso Links (Thu May 7)",
      detail:
        "Anfield Index lead Thu May 7 citing The Athletic's James Pearce: FSG continue to back Arne Slot despite mounting fan pressure and Xabi Alonso media speculation. David Ornstein has Alonso 'not on the agenda' for FSG, and Sky Sports News reports Slot is expected to continue as head coach next season. This Is Anfield Thu May 7 also flagged Andoni Iraola as 'among candidates' should the situation change — Iraola's Bournemouth project a recurring reference point.",
      category: "general",
    },
    {
      title: "Alisson 'Agrees Personal Terms with Juventus' — Schira Reports €5m-a-Year Deal (Thu May 7)",
      detail:
        "Reported overnight Wed-Thu May 7 by Liverpool.com citing Italian journalist Nicolo Schira: Alisson Becker has agreed a contract worth €5m ($5.9m) per year with Juventus ahead of a possible summer move. Juve still face the task of convincing Liverpool to sell and the Brazilian is NOT agitating for the exit. Sky Sports' rumours blog leads with the development; Calciomercato24 and Sportmediaset frame it alongside the Inter approach for Curtis Jones as a 'Serie A double knock' on Anfield's door. Alisson missed Wednesday training again — Chelsea return now in real doubt.",
      category: "transfers",
    },
    {
      title: "Curtis Jones Contract Talks 'Effectively Ceased' — Inter Exit 'Now Seems Likely' (Wed May 6)",
      detail:
        "Confirmed Wed May 6 by Empire of the Kop and Yahoo Sports, still leading Fri May 8 previews: Curtis Jones contract talks with Liverpool have 'effectively ceased,' and the Inter Milan exit 'now seems likely' after Tuesday's Romano 'full approval' report (via Tribuna). EOTK headline Wed: 'Liverpool exit now seems likely — contract talks effectively ceased.' Aston Villa, Newcastle and Inter all in; Liverpool.com flag the situation as a 'transfer problem it cannot ignore.' Sports Mole's £34m Wharton bid remains the named replacement plan; the actual Palace ask is £80m per FootballTransfers and ESPN.",
      category: "transfers",
    },
    {
      title: "Liverpool.com: 'Liverpool Has 3 Players Who Could Be Sold This Summer' — Scale of Rebuild Emerges (Thu May 7)",
      detail:
        "Published Thu May 7 by Liverpool.com under the headline 'Liverpool has 3 players who could be sold this summer as scale of rebuild emerges': Slot's mid-tier names — Curtis Jones, Alexis Mac Allister and Joe Gomez — face the door alongside the already-confirmed Salah and Robertson exits. The piece reframes Wednesday's individual stories (Jones to Inter, Alisson to Juve, Wharton in advance talks) as a single coordinated summer overhaul rather than isolated departures. Liverpool also linked with Bremer (Juventus, $68m clause) and Bastoni/Schlotterbeck for the VVD-replacement shortlist.",
      category: "transfers",
    },
    {
      title: "FSG Break Silence: 'Don't Settle for Mediocrity, You Have to Win' (Wed May 6)",
      detail:
        "Reported Wed May 6 by This Is Anfield and Liverpool.com via the Sports Business Journal: owner John W. Henry broke a near six-year media silence to address dual Red Sox and Liverpool fan unrest. 'I remember a plane flying overhead when we were beating Manchester United 7-0 that read FSG OUT! It doesn't mean you ignore them — it means you work harder. You don't settle for mediocrity. You have to win.' Front Office Sports flagged 'mounting pressure on FSG' across both clubs after the Cora sacking and the 19th-defeat campaign at Anfield.",
      category: "general",
    },
    {
      title: "Adam Wharton — Liverpool 'In Advanced Talks' as Replacement Plan Hardens (Wed-Thu May 6-7)",
      detail:
        "Reported across the week — Wed May 6 Sports Mole '£34m bid' headline, Thu May 7 Liverpool.com transfer-news live: Liverpool 'in advanced talks' for Crystal Palace's Adam Wharton, with Palace demanding £80m. Manchester United and Real Madrid in the chase, but the player is reportedly keen on a Champions League club. Ben Jacobs (EOTK Wed): the deal 'could get advanced very quickly.' The 22-year-old England midfielder is contracted to Selhurst Park until June 2029 — Palace 'determined' to keep him, but with an understanding he can leave for the right offer.",
      category: "transfers",
    },
    {
      title: "Senesi Free-Transfer Race: Spurs Lead, Liverpool 'Could Hijack' If Konaté Leaves (Wed-Thu May 6-7)",
      detail:
        "Liverpool.com's Thu May 7 'Senesi agreement, Wharton interest, Jones latest' transfer-news live: Liverpool could hijack Tottenham's move for Bournemouth's Marcos Senesi if Konaté departs as a free agent. Senesi already verbally agreed to Spurs but Liverpool now considering an offer; Slot's Feyenoord-era familiarity is the lever. Beukema (€28m Napoli bid) parallel paid track. Konaté's '50/50' contract picture (Crook Apr 25) remains the trigger.",
      category: "transfers",
    },
    {
      title: "2026/27 Adidas Home Kit Already 'On Sale' After Foot Locker Leak (Wed May 6)",
      detail:
        "Reported Wed May 6 by Liverpool.com and SportBible: the Candy 1989-91 throwback Adidas home kit for 2026/27 — Active Maroon body with white sponsor blocks — has already been spotted hanging on rails at a Foot Locker store before its official May/June launch. Footy Headlines and TeamTalk had previewed the leak Sun May 3; Wed's escalation is the first 'in-store' photo. Reaction split: nostalgia for the Candy era, complaints about the all-over pattern obscuring the crest.",
      category: "general",
    },
    {
      title: "Van Dijk: 'We Are Not Kids — It's a City Trip,' Defends Slot's Pre-MUN Days Off (Tue May 5)",
      detail:
        "Lead Tue May 5 across This Is Anfield, Yahoo Sports, Goal.com, Rousing The Kop and DaveOCKOP: VVD pushed back firmly on reports — sharpened Mon May 4 by Liverpool.com — that Liverpool players' family 'mini-breaks' to European cities the week before Old Trafford contributed to the 2-0 hole inside 14 minutes. 'We are not kids,' VVD said, 'it's a city trip.' He branded the season 'unacceptable' and explicitly defended Slot. Rousing The Kop follow-up: 'What Liverpool staff now think about players going on holiday after Van Dijk comments.'",
      category: "general",
    },
    {
      title: "Match Recap — Manchester United 3-2 Liverpool: Mainoo Winner, 19th Defeat (Sun May 3)",
      detail:
        "Played Sun May 3 14:30 UK at Old Trafford. Cunha 6' and Sesko 14' had United two up inside 15 minutes; Szoboszlai 47' and Gakpo 56' levelled it after the break; Kobbie Mainoo's 77' strike won it. Slot's confirmed XI: Woodman; Jones, Konate, Van Dijk, Robertson; Szoboszlai, Gravenberch, Mac Allister; Frimpong, Gakpo, Wirtz. Subs: Kerkez 59' (Robertson), Ngumoha 75' (Frimpong). The defeat was Liverpool's 19th of the season — and the win confirmed United's return to the Champions League for 2026-27.",
      category: "matches",
    },
    {
      title: "Run-In: Chelsea (H) May 9, Aston Villa (A) May 15, Brentford (H) May 24",
      detail:
        "Confirmed by the Premier League fixture list as of Thu May 7: Liverpool's three remaining games are Chelsea at Anfield Sat May 9 (11:30 UK, TNT Sports), Aston Villa at Villa Park FRIDAY May 15 8pm BST (rescheduled from Sun May 17 due to Villa's Europa League final on May 20), and the Brentford home finale Sun May 24 — Salah's projected Anfield farewell and Henderson's first return to the Anfield turf since summer 2023.",
      category: "matches",
    },
  ],
  sources: [
    "Liverpool FC",
    "Tribuna / Fabrizio Romano",
    "Nicolo Schira",
    "Liverpool.com",
    "Empire of the Kop",
    "Read Liverpool",
    "This Is Anfield",
    "Sky Sports",
    "TeamTalk",
    "Yahoo Sports",
    "Goal.com",
    "ESPN",
    "TNT Sports",
    "Sports Mole",
    "FootballTransfers",
    "Anfield Index",
    "Rousing The Kop",
    "Sports Business Journal",
    "Footy Headlines",
    "Football365",
    "Premier League",
    "DaveOCKOP",
    "Calciomercato24",
    "Sportmediaset",
    "SportBible",
    "Front Office Sports",
    "The Athletic",
    "Opta",
  ],
};

