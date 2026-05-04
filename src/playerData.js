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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "recovering", outSince: "2026-03-22", injuryNote: "Watched the 3-2 Old Trafford defeat (Sun May 3) from the bench as Woodman started for the second match in a row — eight-week hamstring layoff still active. LFC's Mon May 4 outlook now flags the Chelsea home tie May 9 as a realistic return after Slot's pre-Man Utd 'very close to training' line on Apr 30. Could keep his Anfield farewell to Salah arc alive vs Brentford if back this week", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 17, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.8, status: "injured", outSince: "2026-04-20", injuryNote: "Two weeks into the ~3-week stitched-knee layoff (Beto collision Apr 19) — Aston Villa trip May 17 still the earliest realistic return per LFC's run-in injury rundown. Alisson is now ahead of him in the queue for Chelsea (May 9) once cleared", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 41, goals: 4, assists: 1, cleanSheets: 11, xG: 2.8, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.2, status: "fit", injuryNote: "Captained Liverpool to a 19th defeat of the season at Old Trafford (Sun May 3, 3-2) — caught Mac Allister with an elbow in the build-up to Cunha's 6' opener. The Athletic (Apr 30) reports VVD now expected to leave at the end of the 2026-27 season, but Liverpool still 6 pts ahead of Bournemouth with three to play (Opta 97.14% top-five)", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 38, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 7.0, status: "fit", injuryNote: "Started Old Trafford defeat (Sun May 3, L 3-2) alongside VVD — caught out by United's quick start (Cunha 6', Sesko 14') before Liverpool's second-half comeback fell short. Romano (Apr 20) and ESPN (Apr 30): new Liverpool deal 'never been closer' — salary aligned, contract length and bonus structure the only remaining items. 'It's Liverpool'", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
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
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 34, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Started Old Trafford (Sun May 3, L 3-2) on the right wing as Salah/Isak cover — pulled at 75' for Ngumoha after a 5.5 outing per This Is Anfield: 'no end product, lost 8 of 10 duels with Luke Shaw'. Likely back to RB cameo role for Chelsea (H) May 9 with Curtis Jones currently nailed-on at right-back", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
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
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 25, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 7.6, status: "fit", injuryNote: "Started at RB at Old Trafford (Sun May 3, L 3-2) — Goal.com 8/10, led the game in touches with over 100 heading into stoppage time. Slot's Trent-redux RB experiment continues to thrive. Inter Milan still circling per Romano this week — McTominay-style summer reset on the table with 14 months left on deal", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 32, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.3, status: "fit", injuryNote: "Started Old Trafford (Sun May 3, L 3-2) on the right of the front three — couldn't repeat his Palace winner from added time, but linked play around the comeback. Slot's most reliable creator with Salah and Isak both unavailable; central role likely vs Chelsea (H) May 9", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 37, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.2, status: "injured", outSince: "2026-04-26", injuryNote: "Watched the 3-2 Old Trafford defeat from afar (Sun May 3) — hamstring picked up vs Palace still active. Made headlines Sat May 2 by publicly urging fans to give Jordan Henderson 'the farewell he deserved' when Brentford visit Anfield May 24 — Salah's own Liverpool exit also on for that day. The National (May 2): Salah 'has a lot of good options' with Saudi pressure cooling", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 17, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.7, status: "injured", outSince: "2026-05-02", injuryNote: "Missed the 3-2 Old Trafford defeat (Sun May 3) with the groin strain picked up in Friday's training. Yahoo Sports (Sun): Slot confirmed pre-match the £130m forward 'wasn't ready' — even a minor groin tear is typically 1-2 weeks, putting Chelsea (May 9) on the doubt list and Aston Villa (A) May 17 the realistic comeback target", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
  generatedAt: "2026-05-04T09:30:00Z",
  summary:
    "Monday May 4 — Liverpool wake up to a 19th defeat of the season after Kobbie Mainoo's 77' winner sealed Manchester United 3-2 at Old Trafford on Sunday, the result that secured United's own Champions League return for 2026-27. Slot's post-match took a hard turn: an impassioned, on-record VAR rant ('a recurring pattern'), specifically calling out Sesko's allowed second goal that 'should have been disallowed' for handball — Sky Sports, Goal.com, FOX, This Is Anfield and Empire of the Kop all led with it Sun night. Mac Allister bandaged a head wound from a stray Van Dijk elbow in the build-up to Cunha's 6' opener and played through; Szoboszlai (47', 8.5/10) and Gakpo (56') hauled the comeback to 2-2 before Mainoo struck. Off the pitch, the human story of the day: 84-year-old Sir Alex Ferguson was taken to hospital from the directors' box pre-match — BBC Sport and The Athletic confirmed late Sun it was 'not an emergency' and he was expected home soon. With Chelsea (H) Sat May 9 next, Opta still has Liverpool top-five at 97.14% — but Salah, Isak, Alisson, Mama, Bradley, Ekitike and Endo all remain on the absentee list.",
  keyTopics: [
    {
      title: "MATCH REPORT — Manchester United 3-2 Liverpool: Mainoo Winner Ends Comeback (Sun May 3)",
      detail:
        "Played Sun May 3, 14:30 UK at Old Trafford. Cunha 6' and Sesko 14' had United two up by quarter hour; Szoboszlai 47' and Gakpo 56' levelled it after the break; Kobbie Mainoo's 77' strike won it. Slot's confirmed XI: Woodman; Jones, Konate, Van Dijk, Robertson; Szoboszlai, Gravenberch, Mac Allister; Frimpong, Gakpo, Wirtz. Subs: Kerkez 59' (Robertson), Ngumoha 75' (Frimpong). The defeat was Liverpool's 19th of the season — and the win confirmed United's return to the Champions League for 2026-27.",
      category: "matches",
    },
    {
      title: "Slot's VAR Rant: 'A Recurring Pattern' — Calls Out Sesko Goal as Handball (Sun May 3)",
      detail:
        "Issued Sun May 3 post-match and amplified Mon morning across Sky Sports, Goal.com, FOX, This Is Anfield, Empire of the Kop, TeamTalk and Read Liverpool: Slot launched an impassioned VAR critique, claiming Sesko's allowed second goal at Old Trafford 'should have been disallowed' for handball ('if a ball has a certain curve and the curve changes, there must have been contact'). He listed prior decisions ('PSG at home, soft touch on Mac Allister, no penalty', 'last week play continued when our goalkeeper needed treatment') as a 'complete pattern' against Liverpool this season — while still acknowledging United were the better side.",
      category: "tactics",
    },
    {
      title: "Sir Alex Ferguson Taken to Hospital Pre-Match — 'Not an Emergency' (Sun May 3)",
      detail:
        "Reported Sun May 3 first by Sky Sports, BBC Sport, ESPN and The Athletic, then confirmed late evening: the 84-year-old former Manchester United manager felt unwell in the tunnel area pre-kick-off and was escorted by ambulance to hospital. United later said the situation was 'not a medical emergency' and BBC Sport reported officials were 'optimistic' he would soon be 'fit enough' to return home. Sky Sports interrupted half-time coverage for the update.",
      category: "general",
    },
    {
      title: "Mac Allister Plays Through Head Wound After VVD Elbow in Cunha Goal Build-Up (Sun May 3)",
      detail:
        "Captured live on Sun May 3 broadcast: Van Dijk caught Mac Allister with an elbow while contesting a header against Mbeumo seconds before Cunha's opener; the Argentine required bandaging and wore a protective head cap for the second half. Premier League's social channels showed the cap; This Is Anfield and Liverpool.com listed him as a 7/10 for the 'pretty epic midfield battle'. He is expected fit for Chelsea (H) May 9.",
      category: "injuries",
    },
    {
      title: "Salah's Gesture: 'The Farewell Henderson Deserves' on May 24 (Sat May 2)",
      detail:
        "Reported Sat May 2 by TNT Sports, This Is Anfield and Rousing The Kop: ahead of his own Anfield exit Mohamed Salah publicly urged Liverpool fans to give Jordan Henderson 'the farewell he deserved' when Brentford visit on May 24. Henderson — who left Anfield in summer 2023 — will return for the first time in red-and-white away kit; the Brentford home finale is now also expected to be Salah's Liverpool send-off (he is targeting that game after the 'minor' hamstring).",
      category: "general",
    },
    {
      title: "Liverpool Player Ratings vs Man Utd: Szoboszlai 8.5, Frimpong 5.5 (Sun May 3)",
      detail:
        "Published Sun May 3 across Goal.com, This Is Anfield, NBC Sports, Sports Illustrated, Read Liverpool and Rousing The Kop: Szoboszlai 8.5 ('what a read to take the ball off Amad Diallo'), Curtis Jones 8 (over 100 touches), Gravenberch 7, Mac Allister 7, Robertson 5-6.5 ('beaten too easily by Mbeumo'), Frimpong 5.5 ('no end product, lost 8 of 10 duels with Luke Shaw'). Goal.com's headline: 'Robertson and Mac Allister among Reds flops as another standout Szoboszlai display goes to waste.'",
      category: "matches",
    },
    {
      title: "Champions League Race: Opta 97.14%, Liverpool 6 Pts Clear of Bournemouth (Mon May 4)",
      detail:
        "Updated Mon May 4 across Football365, Al Jazeera, This Is Anfield and the Premier League site: Liverpool sit 4th with 64 points after 35 games, six clear of Bournemouth in 6th and three games to play. Top-five secures the 2026-27 Champions League slot (PL keeps the fifth spot for a second straight year). Opta supercomputer: Liverpool 97.14% to qualify; even a single point in any of the three remaining games clinches it depending on Bournemouth's form vs Fulham.",
      category: "matches",
    },
    {
      title: "Adam Wharton — Liverpool 'Advanced Talks' for £70m Crystal Palace Midfielder (Sat May 2)",
      detail:
        "Reported Sat May 2 by Matteo Moretto and amplified by CaughtOffside, FootballTransfers, GiveMeSport, Football365, SportBible and Anfield Index: Liverpool are in 'advanced talks' to sign the 22-year-old England midfielder, accelerating the deal to preempt Real Madrid's interest. Asking price ~£70m; Wharton himself told reporters Sat he 'won't be distracted' by the speculation. Champions League qualification (Opta 97.14%) the second contractual lever.",
      category: "transfers",
    },
    {
      title: "Daniel Svensson Linked — Dortmund LB on Liverpool's Robertson-Replacement List (Sat May 2)",
      detail:
        "Reported Sat May 2 by Liverpool.com (citing Fussball Daten) and picked up across Sky Sports' transfer ticker: Liverpool and Arsenal both keen on Borussia Dortmund's Sweden left-back Daniel Svensson. With Robertson set for a free-agent summer move (Tottenham still leading), the 23-year-old is positioned as the longer-term LB heir alongside Kerkez. A $33m bid is reportedly on the table.",
      category: "transfers",
    },
    {
      title: "Sam Beukema — £24m Offer for Napoli's Dutch CB Confirmed (Sat May 2)",
      detail:
        "Reported Sat May 2 by TeamTalk and Liverpool.com: Liverpool have lodged a £24m approach for Napoli's 27-year-old Dutch centre-back after Slot reportedly 'told Hughes' to push the deal. Cover/competition for Konaté and an early move ahead of Joe Gomez's likely summer exit; the fee at the lower end of Italian valuations.",
      category: "transfers",
    },
    {
      title: "Van Dijk Expected to Leave at End of 2026-27 — The Athletic Report (Wed Apr 30)",
      detail:
        "Reported Wed Apr 30 by The Athletic and amplified across Sky Sports' Liverpool transfer feed Sat May 2: club captain Virgil van Dijk is expected to leave Liverpool at the end of next season, his current contract concluding then. Source on the Bayern, MLS and Saudi tracks; the Anfield era of the 2018-2025 spine continues to wind down after Salah and Robertson's confirmed exits.",
      category: "transfers",
    },
    {
      title: "Konaté Contract 'Never Been Closer' — Salary Aligned, Length the Final Detail (Wed Apr 30)",
      detail:
        "Reported Wed Apr 30 by ESPN and This Is Anfield (echoing Romano Apr 20): the France international and Liverpool 'have never been closer' to agreement on the new deal, with main salary structure aligned and only contract length and bonus mechanics still to settle. Konaté himself: 'It's Liverpool' — full Real Madrid U-turn after eighteen months of speculation.",
      category: "transfers",
    },
    {
      title: "FSG Publicly Back Arne Slot for 'Third Season' Amid Difficult Campaign (Sat May 2)",
      detail:
        "Reported Sat May 2 by FootballTransfers, This Is Anfield and Sky Sports News: FSG retain firm faith in Slot, viewing 'unforeseen challenges' (Diogo Jota's pre-season death cited explicitly) as having warranted the difficult run. Slot's contract runs to 30 June 2027; UCL qualification the explicit lever. He himself called some of the criticism 'harsh' in his Fri May 1 presser.",
      category: "general",
    },
    {
      title: "Run-In: Chelsea (H) May 9, Aston Villa (A) May 17, Brentford (H) May 24",
      detail:
        "Confirmed by the Premier League fixture list as of Mon May 4: Liverpool's three remaining games are Chelsea at Anfield Sat May 9 (11:30 UK, TNT Sports), Aston Villa at Villa Park Sun May 17, and the Brentford home finale Sun May 24 — Salah's projected Anfield farewell and Henderson's first return to the Anfield turf since summer 2023. Six points (or two with Bournemouth slips) secures top-five UCL.",
      category: "matches",
    },
  ],
  sources: [
    "Sky Sports",
    "Goal.com",
    "BBC Sport",
    "ESPN",
    "FOX Sports",
    "The Athletic",
    "TNT Sports",
    "This Is Anfield",
    "Liverpool.com",
    "NBC Sports",
    "Empire of the Kop",
    "TeamTalk",
    "Sports Illustrated",
    "Read Liverpool",
    "Rousing The Kop",
    "CaughtOffside",
    "FootballTransfers",
    "Football365",
    "GiveMeSport",
    "SportBible",
    "Anfield Index",
    "Premier League",
    "Al Jazeera",
    "Opta",
    "FotMob",
  ],
};

