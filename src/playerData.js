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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "recovering", outSince: "2026-03-22", injuryNote: "Watched the 3-2 Old Trafford defeat (Sun May 3) from the bench as Woodman started for the second straight match — eight-week hamstring still active but back in training Mon May 4. Tue May 5 ReadLiverpool roundup of Slot's run-in injury notes still flags Chelsea (H) May 9 as the realistic return target. Likely back in goal for Salah's projected Anfield farewell vs Brentford May 24 if not before", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
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
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 38, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 7.0, status: "fit", injuryNote: "Started Old Trafford defeat (Sun May 3, L 3-2) alongside VVD — caught out by United's quick start (Cunha 6', Sesko 14'). Wed May 6 frame more cautious than last week: Apr 21 he himself said 'we are close to an agreement,' but Apr 25 Alex Crook reported insiders see it as '50/50' — could still leave on a free. Liverpool.com (Mon May 4) flagged him among the players who took post-Palace family city-trips; VVD's Tue May 5 'we are not kids' rebuttal applied. Contract expires 30 June 2026; decision expected before the World Cup", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
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
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 25, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 7.6, status: "fit", injuryNote: "Headline story Wed May 6: Romano via Tribuna confirmed Tue May 5 that Jones has given his 'full approval' to Inter Milan ahead of a summer move — only Liverpool's valuation remains. EOTK/Sky (May 1): contract extension talks 'stalled' with one year left. Aston Villa, Newcastle and Inter all in. On the pitch he's still locking down RB — Goal.com 8/10 at Old Trafford (Sun May 3) with 100+ touches; Slot's Trent-redux RB experiment continues to thrive. Sports Mole Wed: Liverpool 'preparing £34m bid' for the Wharton replacement", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 32, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.3, status: "fit", injuryNote: "Started Old Trafford (Sun May 3, L 3-2) on the right of the front three — couldn't repeat his Palace winner, but linked play around the comeback. Liverpool.com (Mon May 4) named him among the city-trip group; VVD took the Tue May 5 lead defending the breaks. Slot's most reliable creator with Salah and Isak both out; central No.10 role expected vs Chelsea (H) May 9", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 37, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.2, status: "injured", outSince: "2026-04-26", injuryNote: "Wed May 6 Anfield Index/Liverpool.com roundup: Salah told TNT Sports the hamstring 'is fine' and is also targeting Chelsea (May 9), though 'for sure I will be back for the final game' (Brentford May 24) remains the firm public commitment. Made headlines Sat May 2 by urging fans to give Jordan Henderson 'the farewell he deserved' when Brentford visit Anfield — Salah's own Liverpool exit also on for that day. The National (May 2): Salah 'has a lot of good options' with Saudi pressure cooling", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 17, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.7, status: "injured", outSince: "2026-05-02", injuryNote: "Wed May 6 Anfield Index roundup: 'genuine belief' he could feature vs Chelsea after Slot insisted the groin issue is minor and Liverpool 'will be cautious' but won't lose him for the season. Missed the 3-2 Old Trafford defeat (Sun May 3) with the strain picked up in Friday's training. Aston Villa (A) May 17 still the firmer comeback target", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
  generatedAt: "2026-05-06T09:00:00Z",
  summary:
    "Wednesday May 6 — Three days out from Chelsea (H), the lead story has shifted to Curtis Jones. Fabrizio Romano confirmed Tue May 5 (via Tribuna) that the 25-year-old has given his 'full approval' to Inter Milan ahead of a summer move; Liverpool's contract talks have stalled with one year left on his deal, and the Wharton chase from Crystal Palace is now openly being framed as Jones' replacement. Sports Mole this morning has Liverpool 'preparing a £34m bid' for an 'unbelievable' alternative midfielder. Off the pitch, FSG owner John Henry broke a rare silence Wed responding to dual Red Sox and Liverpool fan unrest: 'Don't settle for mediocrity. You have to win' — picked up across This Is Anfield and Liverpool.com. Liverpool.com also report that the Adidas 2026/27 'Candy throwback' home kit is already on sale at a Foot Locker after a leak. Yesterday's storylines hold: VVD's 'we are not kids — it's a city trip' rebuttal of the post-Palace mini-break criticism, Carragher's identity worry on MNF, the Reijnen summer reunion, and the Wharton/Senesi/Beukema transfer tracks. Chelsea visit Anfield Sat May 9 (11:30 UK, TNT) — Salah (hamstring), Isak (groin), Bradley, Ekitike, Endo, Mama all out; Alisson 'very close' to returning to training per Slot's Friday presser; Opta still has Liverpool top-five at 97.14%.",
  keyTopics: [
    {
      title: "Curtis Jones Gives 'Full Approval' to Inter Move — Liverpool Valuation Now the Only Obstacle (Tue May 5 / refreshed Wed May 6)",
      detail:
        "Reported Tue May 5 by Fabrizio Romano via Tribuna, headlining Wed May 6 across TeamTalk, Liverpool.com and The Hard Tackle: Curtis Jones has given his 'total openness' / full approval to Inter Milan, opening the door to a summer departure. Contract talks at Liverpool have officially 'stalled' (Sky Sports/EOTK May 1) with one year left on his deal. Aston Villa, Newcastle and Inter all in. Liverpool.com Wed: 'transfer problem it cannot ignore.' Sports Mole Wed: Liverpool now 'preparing £34m bid for unbelievable Curtis Jones replacement' — Wharton openly framed as the heir.",
      category: "transfers",
    },
    {
      title: "FSG Break Silence: 'Don't Settle for Mediocrity, You Have to Win' (Wed May 6)",
      detail:
        "Reported Wed May 6 by This Is Anfield and Liverpool.com: in an email shared by the Sports Business Journal, owner John W. Henry broke a near six-year media silence to address dual Red Sox and Liverpool fan unrest. 'It doesn't mean you ignore them — it means you work harder. You don't settle for mediocrity. You have to win.' The message landed as Front Office Sports flagged 'mounting pressure on FSG' across both clubs after the Cora sacking and the 19th-defeat campaign at Anfield.",
      category: "general",
    },
    {
      title: "2026/27 Adidas Home Kit Already 'On Sale' After Foot Locker Leak (Wed May 6)",
      detail:
        "Reported Wed May 6 by Liverpool.com and SportBible: the Candy 1989-91 throwback Adidas home kit for 2026/27 — Active Maroon body with white sponsor blocks on the player-issue version — has already been spotted hanging on rails at a Foot Locker store before its official May/June launch. Footy Headlines and TeamTalk had previewed the leak Sun May 3; Wed's escalation is the first 'in-store' photo. Reaction split: nostalgia for the Candy era, complaints about the all-over pattern obscuring the crest.",
      category: "general",
    },
    {
      title: "Adam Wharton — Liverpool Now 'Preparing £34m Bid' as Replacement Plan Hardens (Wed May 6)",
      detail:
        "Reported Wed May 6 by Sports Mole: Liverpool 'preparing £34m bid for unbelievable Curtis Jones replacement' — though that figure undersells Crystal Palace's actual £80m demand confirmed by FootballTransfers and ESPN over the weekend. Matteo Moretto (Sat May 2): Liverpool 'in advanced talks,' preempting Real Madrid. Empire of the Kop Wed: Ben Jacobs hearing the deal 'could get advanced very quickly.' The 22-year-old England midfielder reportedly keen on a Champions League club — Opta 97.14%.",
      category: "transfers",
    },
    {
      title: "Senesi Free-Transfer Race: Spurs Now 'Have Agreement in Principle' (Tue May 5)",
      detail:
        "Reported Tue May 5 across This Is Anfield, Goal.com and TheHardTackle: Liverpool 'lead the race' for Bournemouth's Marcos Senesi on a free transfer, with Slot's Feyenoord-era admiration the lever. But Tottenham have now reportedly struck an 'agreement in principle' to sign the Argentina international ahead of the rest of the field — a Wed May 6 escalation that complicates Liverpool's pursuit. Beukema (€28m Napoli bid) remains the parallel paid track for the post-Robertson/Salah defensive rebuild.",
      category: "transfers",
    },
    {
      title: "Van Dijk: 'We Are Not Kids — It's a City Trip,' Defends Slot's Pre-Man Utd Days Off (Tue May 5)",
      detail:
        "Lead Tue May 5 across This Is Anfield, Yahoo Sports, Goal.com, Rousing The Kop, theScore and DaveOCKOP, still echoing Wed: VVD pushed back firmly on reports — sharpened Mon May 4 by Liverpool.com — that Liverpool players' family 'mini-breaks' to European cities the week before Old Trafford contributed to the 2-0 hole inside 14 minutes. 'We are not kids,' VVD said, 'it's a city trip.' He also branded the season 'unacceptable' and explicitly defended Slot. Rousing The Kop follow-up: 'What Liverpool staff now think about players going on holiday after Van Dijk comments.'",
      category: "general",
    },
    {
      title: "Carragher: 'It's on the Manager' — Liverpool's Style Is a Choice, Not a Mistake (Tue May 5)",
      detail:
        "Published Tue May 5 by This Is Anfield citing Sky Sports' Monday Night Football: Jamie Carragher widened his post-MUN critique into a full identity worry — 'Slot's slow, technical, possession-based style will make Liverpool worse in the long run' versus the Klopp identity. TeamTalk: 'Slot loses the plot over Man Utd defeat as Carragher cites massive identity concern.' SportsMole picked up an Xabi Alonso 'question emerging' angle. The pundit-class Wed consensus: it's not just personnel — it's a stylistic crossroads.",
      category: "tactics",
    },
    {
      title: "Slot 'Confirms' Reijnen Reunion — Set-Piece Coach Finally Cleared After Work-Permit Hurdle (Tue May 5)",
      detail:
        "Reported Tue May 5 by This Is Anfield, Liverpool.com, Anfield Watch and Anfield Index: Slot has 'all but confirmed' Etienne Reijnen will join the backroom this summer after the 39-year-old former CB completed the qualification path that had blocked his UK work permit. Reijnen oversees set-pieces — Liverpool conceded 16 such goals this season vs Feyenoord's 4. Slot Tue: 'We lost a member of staff during the season. We always look around to see how we can strengthen.' Sets up speculation about Heitinga's possible return alongside.",
      category: "general",
    },
    {
      title: "0 Wins in 8 — Liverpool's Damning Away Record vs PL Top 10 (Tue May 5)",
      detail:
        "Published Tue May 5 by This Is Anfield citing FotMob, still resurfacing Wed: Liverpool have failed to win a single one of their 8 league away trips to PL top-10 opposition this season — two draws, six defeats, conceding 2.25 goals per game. The Old Trafford 3-2 loss was the eighth such fixture. Liverpool's last three remaining games include only one such test — Aston Villa (A) May 17.",
      category: "matches",
    },
    {
      title: "Konaté Contract 'Mixed Messages' — Could Still Leave Per Crook (Apr 25 / refreshed)",
      detail:
        "Apr 21: Konaté himself said 'we are close to an agreement.' But Apr 25 Rousing The Kop and Liverpool.com surfaced Alex Crook reporting from Anfield insiders that the situation is 'a bit more 50/50' — could still leave on a free in the summer. ESPN/Romano Wed Apr 30 line ('never been closer') still in play but the Wed May 6 frame is more cautious: contract expires 30 June 2026, decision expected before the World Cup. The Real Madrid U-turn isn't yet definitive.",
      category: "transfers",
    },
    {
      title: "Salah's Gesture: 'The Farewell Henderson Deserves' on May 24 (Sat May 2)",
      detail:
        "Reported Sat May 2 by TNT Sports, This Is Anfield and Rousing The Kop, still threading through this week's previews: ahead of his own Anfield exit Mohamed Salah publicly urged Liverpool fans to give Jordan Henderson 'the farewell he deserved' when Brentford visit on May 24. Henderson — who left Anfield in summer 2023 — will return for the first time in red-and-white away kit; the Brentford home finale is now also expected to be Salah's Liverpool send-off. Salah on the 'minor' hamstring: 'For sure I will be back for the final game.'",
      category: "general",
    },
    {
      title: "Match Recap — Manchester United 3-2 Liverpool: Mainoo Winner, 19th Defeat (Sun May 3)",
      detail:
        "Played Sun May 3, 14:30 UK at Old Trafford. Cunha 6' and Sesko 14' had United two up by quarter hour; Szoboszlai 47' and Gakpo 56' levelled it after the break; Kobbie Mainoo's 77' strike won it. Slot's confirmed XI: Woodman; Jones, Konate, Van Dijk, Robertson; Szoboszlai, Gravenberch, Mac Allister; Frimpong, Gakpo, Wirtz. Subs: Kerkez 59' (Robertson), Ngumoha 75' (Frimpong). The defeat was Liverpool's 19th of the season — and the win confirmed United's return to the Champions League for 2026-27.",
      category: "matches",
    },
    {
      title: "Injury Roundup Wed May 6: Alisson 'Very Close' to Training, Salah/Isak Targeting Chelsea Return",
      detail:
        "Latest from Slot's Friday presser (echoed Wed May 6 across Liverpool.com, AnfieldIndex, NewsBreak): Alisson 'very close' to returning to training but hasn't trained yet — Chelsea (May 9) the realistic target if cleared this week. Isak's groin 'minor' — 'genuine belief he could feature' vs Chelsea per Anfield Index. Salah told TNT Sports the hamstring 'is fine' and is also targeting Chelsea, though Brentford remains the 'for sure' return. Mama (knee), Bradley (knee), Ekitike (Achilles), Endo (ankle) all out for the season.",
      category: "injuries",
    },
    {
      title: "Champions League Race: Opta 97.14%, Liverpool 6 Pts Clear of Bournemouth (Mon May 4)",
      detail:
        "Held Mon May 4 across Football365, Al Jazeera, This Is Anfield and the Premier League site: Liverpool sit 4th with 64 points after 35 games, six clear of Bournemouth in 6th with three to play. Top-five secures the 2026-27 Champions League slot. Opta supercomputer: Liverpool 97.14% to qualify; a single point at home to Chelsea or Brentford may clinch it depending on Bournemouth's run.",
      category: "matches",
    },
    {
      title: "Run-In: Chelsea (H) May 9, Aston Villa (A) May 17, Brentford (H) May 24",
      detail:
        "Confirmed by the Premier League fixture list as of Wed May 6: Liverpool's three remaining games are Chelsea at Anfield Sat May 9 (11:30 UK, TNT Sports), Aston Villa at Villa Park Sun May 17, and the Brentford home finale Sun May 24 — Salah's projected Anfield farewell and Henderson's first return to the Anfield turf since summer 2023. Six points (or two with Bournemouth slips) secures top-five UCL.",
      category: "matches",
    },
  ],
  sources: [
    "Tribuna / Fabrizio Romano",
    "This Is Anfield",
    "Liverpool.com",
    "Sky Sports",
    "TeamTalk",
    "Yahoo Sports",
    "Goal.com",
    "ESPN",
    "TNT Sports",
    "Sports Mole",
    "FootballTransfers",
    "Empire of the Kop",
    "Anfield Index",
    "Rousing The Kop",
    "The Hard Tackle",
    "OneFootball",
    "BetMGM",
    "Front Office Sports",
    "SportBible",
    "Footy Headlines",
    "FotMob",
    "Football365",
    "CaughtOffside",
    "GiveMeSport",
    "Premier League",
    "Sports Business Journal",
    "Anfield Watch",
    "DaveOCKOP",
    "TheScore",
    "Opta",
  ],
};

