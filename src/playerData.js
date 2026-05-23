// ─── Liverpool FC Player Data (2025-26 Season · Updated May 23, 2026) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "doubtful", outSince: "2026-03-19", injuryNote: "Sat May 23 — in line to start his Anfield farewell against Brentford on Sun May 24: back in full training after roughly three months out with a muscle injury, and Liverpool.com says he 'will likely go straight back into the starting XI' if cleared. Pundit predicted XIs (Yahoo Sports, The 4th Official) tip the Brazilian to start; Sports Illustrated keeps Mamardashvili in. Named in Brazil's World Cup squad as Ancelotti's No. 1, with the lingering Schira report of an agreed €15m Juventus move — Sunday could be his Liverpool send-off", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sat May 23 — keeps the gloves for the Brentford finale only if Alisson isn't cleared: Sports Illustrated's predicted XI still starts the Georgian, but the consensus (Yahoo Sports, The 4th Official) tips a returning Alisson for an Anfield send-off. Conceded four at Villa Park on May 15 (three from set pieces) in a 4-2 defeat; 5/10 ratings. Likely back to deputising from Sunday with Alisson fit again", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Sat May 16 — Liverpool's lone bright spot in last night's 4-2 Villa Park defeat: a BRACE of headers, 52' to level (from a deep free-kick that beat Martínez) and a 90+ consolation. 7.5-8/10 ratings across Sky Sports, Goal.com and ESPN. Couldn't stop the set-piece avalanche (three of four Villa goals from dead balls). Liverpool.com Thursday: Galatasaray exit RULED OUT, captain expected to see out current deal to 2026-27", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 40, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 6.4, status: "fit", injuryNote: "Mon May 18 — added to Caught Offside's expanded 17-player list of past/present Reds who have liked Salah's anti-Slot Instagram post — a reversal of the weekend's first take that the Frenchman had abstained. Off-pitch, Liverpool.com's 'STALEMATE' contract lead unchanged (signing-on package + agent commissions the sticking points, Real Madrid still in the background). On Friday, was exposed at Villa Park as 3 of 4 Villa goals came from set pieces (5/10 ratings)", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
    physical: { height: 194, weight: 95, pace: 78, acceleration: 76, sprintSpeed: 80 },
    career: [
      { years: "2014-2017", club: "Sochaux", fee: null, type: "youth" },
      { years: "2017-2021", club: "RB Leipzig", fee: "€15M", type: "senior" },
      { years: "2021-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Sat May 23 — in contention to start at right-back for the Brentford finale with Frimpong only a doubt: Sports Illustrated's predicted XI picks the Englishman 'to combat the speedy Kevin Schade' despite a 5/10 display at Villa Park, where he was overrun by Digne and Rogers. Turns 29 this weekend; Sunday's farewell occasion may be his last in red after the 'anything can happen' exit-interview cycle", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 29, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 6.7, status: "fit", injuryNote: "Sat May 23 — set to START his Anfield farewell against Brentford on Sun May 24, his 378th and final Liverpool appearance: predicted XIs (Yahoo Sports, The 4th Official, This Is Anfield) tip the Scot to begin a send-off the club will mark with a mosaic in the lower Sir Kenny Dalglish Stand, and an LFC Original film 'Robbo: My Liverpool' lands May 28. Tottenham agreement still summer-conditional on their PL fate", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
    physical: { height: 178, weight: 70, pace: 79, acceleration: 81, sprintSpeed: 77 },
    career: [
      { years: "2010-2013", club: "Queen's Park", fee: null, type: "senior" },
      { years: "2013-2014", club: "Dundee United", fee: "Free", type: "senior" },
      { years: "2014-2017", club: "Hull City", fee: "€3.4M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€9.3M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Sat May 23 — first-pick LB through the run-in but expected to drop to the bench for the Brentford finale as Slot lines up an Anfield farewell start for Andy Robertson. Started the 4-2 Villa Park defeat (6/10 ratings) as Liverpool's left side was repeatedly overloaded; remains the club's long-term left-back, with Dortmund's Daniel Svensson linked as further competition", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "doubtful", injuryNote: "Sat May 23 — a DOUBT for the Sun May 24 Brentford finale: back in training after the suspected muscular injury that kept him out at Villa Park, but facing a late fitness test. If he isn't cleared, Joe Gomez is the cover at right-back — Sports Illustrated's predicted XI already picks Gomez to handle Brentford's Kevin Schade", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat May 23 — set to anchor the double-pivot alongside Gravenberch for the Brentford finale after a full 90 at Villa Park. Reports this week say talks over a new contract have 'slowed', with no resolution expected before the season ends and Real Madrid credited with interest", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Sat May 16 — anchored a creaking midfield in last night's 4-2 Villa Park defeat; 6.5/10 ratings (Sky Sports, SI) as Mac Allister's partner in the double-pivot was overrun by Tielemans-McGinn. Couldn't generate the chance volume seen in last Sat's 1-1 Chelsea draw where he opened the scoring. Still Liverpool's most reliable midfield outlet", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 48, goals: 12, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.3, status: "fit", injuryNote: "Sat May 23 — in line to shift into the No. 10 role for the Brentford finale if Florian Wirtz (doubtful) misses out. Played 90 at Villa Park and assisted Van Dijk's 52' equaliser from a deep free-kick; contract extension still expected 'in the near future' per Liverpool.com. Was among the Reds who liked Salah's anti-Slot Instagram post last weekend", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 27, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 6.9, status: "fit", injuryNote: "Sat May 23 — 'very likely' to leave this summer per Sky Sports, with Inter Milan keen since January and talks over a new deal stalled for months. Started the attacking three at Villa Park (5.5/10) and features in some predicted XIs as a makeshift right-back for the Brentford finale; Sunday could be the academy graduate's final Liverpool appearance", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "doubtful", injuryNote: "Sat May 23 — DOUBTFUL for the Brentford finale: Friday's match previews (Sports Mole, Football365) report Wirtz is still shaking off the after-effects of the stomach infection that limited him to a substitute cameo at Villa Park, with Liverpool.com listing the German among up to seven players the Reds 'could be without' on Sunday. If he misses out, Dominik Szoboszlai is tipped to shift into the No. 10 role. An awkward, injury-disrupted first season at Liverpool ends on the fitness desk", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 38, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.0, status: "fit", injuryNote: "Sat May 23 — his Anfield farewell against Brentford is Sun May 24, ending nine years, 441 appearances, 257 goals, 122 assists and nine trophies: the Kop will lift a mosaic and the 'Salah: Farewell to the King' tribute film is out. But Slot has NOT committed to starting him after last weekend's anti-Slot statement — pundit XIs are split, though most (Yahoo Sports, The 4th Official) still tip a send-off start. Juventus now reported to be looking at the free agent", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 39, goals: 9, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 6.8, status: "fit", injuryNote: "Sat May 23 — expected to keep the left flank for the Brentford finale after 90 minutes at Villa Park; Sports Illustrated's predicted XI even pushes the Dutchman to a false-9. A quiet end to the season (5.5/10 at Villa) with FSG reportedly willing to sanction a summer sale still hanging over his Anfield appearance", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 18, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "doubtful", outSince: "2026-05-15", injuryNote: "Sat May 23 — trained on Friday and 'likely to start up front' for the Brentford finale per Yahoo Sports's team news, after the minor groin/hip issue that ruled him out at Villa Park. Slot is managing the Swede carefully and a late fitness test is expected; if he isn't cleared, 17-year-old Rio Ngumoha leads the line again", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Sat May 23 — led the line at 17 in the 4-2 Villa Park defeat and is in line for the Brentford matchday squad, though Isak's expected return pushes the teenager toward the bench or a wide rotation role. One of Slot's bright young finds in a difficult season — This Is Anfield's predicted XI has him among the substitutes", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Sat May 16 — unused sub in last night's 4-2 Villa Park defeat; Slot turned to Wirtz and Salah from the bench instead. Rotation winger option only — Anfield Watch's 8-man summer clear-out list still has the Italian likely to exit; one last Anfield outing possible against Brentford May 24", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Sat May 16 — third-choice back-up to Mamardashvili at Villa Park last night (4-2 defeat); Alisson left out of the squad for an 11th straight game. Two PL starts this season (Crystal Palace and Old Trafford); serviceable cover for the Brentford finale May 24 if Alisson still isn't ready", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
  opponent: "Brentford",
  shortName: "BRE",
  home: true,
  date: "2026-05-24T16:00:00",
  competition: "PL",
  venue: "Anfield",
  broadcast: "Sky Sports+",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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
// Last refresh: 2026-05-20 — full 20-team table after MW37.
export const STANDINGS = [
  { pos: 1, team: "Arsenal", p: 37, w: 25, d: 7, l: 5, gd: 43, pts: 82, qualification: "UCL" },
  { pos: 2, team: "Manchester City", p: 37, w: 23, d: 9, l: 5, gd: 43, pts: 78, qualification: "UCL" },
  { pos: 3, team: "Manchester United", p: 37, w: 19, d: 11, l: 7, gd: 16, pts: 68, qualification: "UCL" },
  { pos: 4, team: "Aston Villa", p: 37, w: 18, d: 8, l: 11, gd: 6, pts: 62, qualification: "UCL" },
  { pos: 5, team: "Liverpool", p: 37, w: 17, d: 8, l: 12, gd: 10, pts: 59, qualification: "UCL", highlight: true },
  { pos: 6, team: "Bournemouth", p: 37, w: 13, d: 17, l: 7, gd: 4, pts: 56, qualification: "UEL" },
  { pos: 7, team: "Brighton", p: 37, w: 14, d: 11, l: 12, gd: 9, pts: 53, qualification: "UECL" },
  { pos: 8, team: "Chelsea", p: 37, w: 14, d: 10, l: 13, gd: 7, pts: 52 },
  { pos: 9, team: "Brentford", p: 37, w: 14, d: 10, l: 13, gd: 3, pts: 52 },
  { pos: 10, team: "Sunderland", p: 37, w: 13, d: 12, l: 12, gd: -7, pts: 51 },
  { pos: 11, team: "Newcastle", p: 37, w: 14, d: 7, l: 16, gd: 0, pts: 49 },
  { pos: 12, team: "Everton", p: 37, w: 13, d: 10, l: 14, gd: -2, pts: 49 },
  { pos: 13, team: "Fulham", p: 37, w: 14, d: 7, l: 16, gd: -6, pts: 49 },
  { pos: 14, team: "Leeds", p: 37, w: 11, d: 14, l: 12, gd: -4, pts: 47 },
  { pos: 15, team: "Crystal Palace", p: 37, w: 11, d: 12, l: 14, gd: -9, pts: 45 },
  { pos: 16, team: "Nott'm Forest", p: 37, w: 11, d: 10, l: 16, gd: -3, pts: 43 },
  { pos: 17, team: "Tottenham", p: 37, w: 9, d: 11, l: 17, gd: -10, pts: 38 },
  { pos: 18, team: "West Ham", p: 37, w: 9, d: 9, l: 19, gd: -22, pts: 36, qualification: "REL" },
  { pos: 19, team: "Burnley", p: 37, w: 4, d: 9, l: 24, gd: -37, pts: 21, qualification: "REL" },
  { pos: 20, team: "Wolves", p: 37, w: 3, d: 10, l: 24, gd: -41, pts: 19, qualification: "REL" },
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
  matchweek: 37,
  generatedAt: "2026-05-20T10:30:00Z",
  overview:
    "Arsenal lift the title for the first time in 22 years — Tuesday night's 1-1 draw with Bournemouth at the Vitality was the result that confirmed it, with second-placed Manchester City unable to close a four-point gap with one match to play. Liverpool sit fifth on 59 points, three clear of Bournemouth and effectively safe in the top five (and the UCL spot that comes with it) before Sunday's Brentford finale. Aston Villa's 4-2 win over the Reds five days back is what put Unai Emery's side fourth on 62, with the European-football line now drawn between sixth (Bournemouth, Europa League) and seventh (Brighton, Conference League). Sunderland's promotion-debut campaign is in tenth, ahead of Newcastle and Everton on goal difference. Burnley and Wolves are already down; West Ham's final-day fixture decides the third relegation place.",
  teams: {
    "Arsenal": "Champions for the first time since 2003-04 — confirmed Tue night by Bournemouth's 1-1 draw with Man City.",
    "Manchester City": "Pep's gap to Arsenal stayed at four with one to play; Haaland's 90+5 against Bournemouth a consolation, not a rescue.",
    "Manchester United": "Quietly the season's third-best team — 68 points and a +16 GD secures UCL football and pressure off Amorim.",
    "Aston Villa": "Friday's 4-2 win over Liverpool at Villa Park was the result that confirmed top four — Watkins's brace effectively booked Champions League.",
    "Liverpool": "Fifth on 59 pts with one to play — top five (and the UCL spot) essentially sealed by Bournemouth's draw last night. Brentford finale Sunday is the farewell occasion, not a survival fixture.",
    "Bournemouth": "Sixth and Europa-League-bound after Iraola's overachieving season; the Vitality 1-1 also confirmed Arsenal as champions.",
    "Brighton": "Conference League play-off via seventh — De Zerbi's successor (Hürzeler) keeps Brighton in Europe for a third straight year.",
    "Chelsea": "Eighth and out of Europe — Maresca's first season ends below pre-season expectations; Xabi Alonso arrives July 1.",
    "Brentford": "Trip to Anfield Sunday is mid-table dead-rubber for them; Salah-and-Robertson farewell for the hosts.",
    "Tottenham": "Seventeenth — Spurs's worst Premier League finish since 2003-04 and the structural reason Postecoglou won't see year three.",
    "West Ham": "Eighteenth and one defeat from the drop — final-day at home to Forest now a relegation play-off in everything but name.",
    "Burnley": "Relegated weeks ago; only Wolves stop them being the league's worst team.",
    "Wolves": "Bottom on 19 points — the worst Premier League season any side has had since Derby's 2007-08.",
  },
};

// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Four-Two At Villa Park. The Standing Slipped.",
    byline: "Sky Sports / NBC Sports / Goal.com",
    dateline: "Birmingham · 15 May",
    category: "Match",
    body: "Aston Villa scored four times at Villa Park on Friday night and Liverpool, on the back of a brace of Virgil van Dijk headers, lost 4-2 and watched a Champions League place leave the building with the home supporters. Morgan Rogers, a curling 43rd-minute opener; Ollie Watkins, twice, the 57th and the 73rd; John McGinn, from outside the box, the fourth. Three of the four arrived from set-pieces. Slot, post-match: 'we conceded far too many goals.' Van Dijk's 52nd-minute equaliser, off a Szoboszlai free-kick, was the only spell of the night when the Anfield away end could believe. By the final whistle Villa were fourth, certified, and Liverpool were fifth on 59 points, only goal-difference and the calendar separating the Reds from a Bournemouth and a Chelsea still chasing the top five. The Brentford home finale is now a game, and it is now a final.",
  },
  {
    n: "02",
    headline: "Slot, on Friday night, said: under full pressure.",
    byline: "NBC Sports / Liverpool FC / Yahoo Sports",
    dateline: "Villa Park · 15 May",
    category: "Manager",
    body: "He came into the post-match room with his fourth defeat in five and the boos travelling up the M6 from Anfield in his ears. 'Damaging,' Arne Slot called it. 'We needed a win, or maybe two draws.' Asked, again, about his future: 'I have every reason to believe I will be the Liverpool manager next season.' Asked, again, about the goals: 'three out of four from set pieces.' Asked, lastly, about the supporters: 'they have every right.' Carragher, on television, used the word he had been using for a fortnight — poor — and added that Slot was 'showing signs of a man buckling.' Murphy, on television, said: 'his time is up.' Romano, on social media, repeated his Wednesday line: Liverpool 'absolutely in the direction' of continuing with the Dutchman. The Anfield Sunday papers will arrive in the morning with the same fight all over their front pages.",
  },
  {
    n: "03",
    headline: "Van Dijk, headed twice, headed alone.",
    byline: "ESPN / SI / Goal.com",
    dateline: "Villa Park · 15 May",
    category: "Player",
    body: "He scored two goals on Friday night and he could have scored three. The first, in the 52nd, off a deep free-kick from Szoboszlai, drifting between Mings and Konsa as if there were no Mings or Konsa, beating Martínez at his near post. The second, in the 90+, from a corner, by then a consolation, by then the kind of moment that gets a paragraph in the ratings and not a sentence on the league page. Eight-out-of-ten across SI and Goal.com; the only Liverpool player to come out of Birmingham with a number higher than seven. He turns thirty-five in the summer. Liverpool.com this week ruled out his Galatasaray exit. The Athletic still has him under contract through the end of 26-27. The captain, on a night the captaincy didn't reach the rest of the team, did the captaincy on his own.",
  },
  {
    n: "04",
    headline: "Set Pieces. Three Of The Four.",
    byline: "Sky Sports / This Is Anfield",
    dateline: "Villa Park · 15 May",
    category: "Tactics",
    body: "In the post-match presser Slot said the line everyone had already counted: 'three out of four from set pieces.' Rogers, off a short-corner routine with Digne. Watkins's second, reacting to a Pau Torres header from a corner. McGinn, from outside the box, the only goal that wasn't dead-ball-shaped. Watkins's first, the 57th, came from a Szoboszlai turnover in midfield — the lone open-play goal Villa scored. The set-piece file has been growing since Christmas; Liverpool now have conceded fifteen-plus from dead balls in the Premier League this season. Hughes will be asked, in the summer review, about a set-piece coach. The away end, on Friday night, asked first.",
  },
  {
    n: "05",
    headline: "Bournemouth, Brighton, Brentford. The Final Day.",
    byline: "Liverpool.com / ESPN / Empire of the Kop",
    dateline: "Liverpool · 16 May",
    category: "Race",
    body: "Liverpool, on Saturday morning, are fifth, on 59 points, with one game to play, against Brentford at home on Sunday week. Bournemouth, three points back, have two: Manchester City this weekend and a final-day fixture that nobody can yet remember the date of without checking. Chelsea, further adrift, have two left of their own. The math, as ever, condenses fast: a Liverpool win against Brentford guarantees top five regardless. A Liverpool draw or loss opens the door to either south-coast side overtaking the Reds. The Brentford trip, which used to be the warm afterword of Salah and Robertson's Anfield farewells, is now the only game on the schedule that matters. Henderson will return in away kit. Klopp may sit in the directors' box. And the season, for the third time in May, will go to the last ninety minutes.",
  },
];

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-05-23T10:00:00Z",
  summary:
    "Saturday morning, a day out from the Salah and Robertson farewell against Brentford: the clearest sign yet that Arne Slot survives the season. Liverpool are closing in on appointing Etienne Reijnen — Slot's former Feyenoord set-piece specialist — to the coaching staff, a move the Irish Times and This Is Anfield read as a 'strong show of support' for the manager, while reliable reporter Lewis Steel now rates Slot '96%' certain to be in the dugout next season. That counter-narrative has overtaken the unverified Football365/TeamTalk 'sack saga' from Thursday, which no tier-one outlet has stood up and which the Athletic's James Pearce has flatly denied. On the pitch the picture is still cloudy: Slot has not committed to starting Salah in his Anfield farewell, Florian Wirtz is doubtful with the after-effects of illness, and Alisson, Isak and Frimpong all trained Friday and are in contention — leaving pundit predicted XIs split. A single point against Brentford on Sunday secures the Champions League place Opta already rates a near-certainty.",
  keyTopics: [
    {
      title: "Liverpool Closing In On Etienne Reijnen Appointment — 'Strong Show Of Support' For Arne Slot (Irish Times / This Is Anfield / Liverpool.com, reported Fri May 22, leads Sat)",
      detail:
        "The clearest signal yet on the manager's future, reported Friday and carried into Saturday: Liverpool are closing in on appointing Etienne Reijnen — the 39-year-old former Feyenoord assistant and set-piece specialist who worked under Slot in the Netherlands — to the Anfield coaching staff. The Irish Times framed it as a 'strong show of support' for the embattled boss, and This Is Anfield reported Slot has effectively 'confirmed' the plan to strengthen his backroom team. The club has had no designated set-piece coach since Aaron Briggs left in December — a glaring gap after conceding three set-piece goals at Villa Park.",
      category: "tactics",
    },
    {
      title: "Matchday Eve: Anfield Mosaics Prepared For Salah And Robertson, Farewell Films Rolling Out (Liverpool FC, matchday-eve Sat May 23)",
      detail:
        "With the finale 24 hours away, volunteers prepare the Anfield mosaics on Saturday — the Kop will lift one for Mohamed Salah, the lower Sir Kenny Dalglish Stand one for Andy Robertson. Salah ends a nine-year stint of 441 appearances, 257 goals, 122 assists and nine trophies; Robertson is set for his 378th and final Liverpool appearance. The LFC Original tribute film 'Salah: Farewell to the King' was released at 5pm Friday, with 'Robbo: My Liverpool' to follow on May 28.",
      category: "general",
    },
    {
      title: "Team News Split: Slot Still Won't Commit To Starting Salah, Pundit XIs Diverge (Sports Mole / Football365 / Sports Illustrated / Washington Post, reported Fri May 22, holds Sat)",
      detail:
        "Reported across Friday's pre-match coverage and unresolved into Saturday: Arne Slot would not commit to starting Mohamed Salah in his Anfield farewell after the Egyptian's social-media outburst. Pundit predicted XIs diverge sharply as a result — Yahoo Sports and The 4th Official tip Salah, Robertson and Alisson all to start a 4-2-3-1, while Sports Illustrated keeps Mamardashvili in goal and Joe Gomez at right-back to handle Kevin Schade. The confirmed XI will not land until roughly an hour before the 4pm BST kick-off.",
      category: "matches",
    },
    {
      title: "Florian Wirtz Doubtful For The Finale With Illness After-Effects (Sports Mole / Football365, reported Fri May 22)",
      detail:
        "Confirmed in Friday's match previews and carried into Saturday: Florian Wirtz 'remains doubtful' for the Brentford finale, still shaking off the stomach infection that limited him to a substitute cameo at Villa Park. Liverpool.com framed the German as one of up to seven players the Reds 'could be without' on Sunday. If he misses out, Dominik Szoboszlai is the most likely man to shift into the No. 10 role.",
      category: "injuries",
    },
    {
      title: "Fitness: Alisson, Isak And Frimpong All Trained Friday, In Contention For Sunday (Liverpool FC / Liverpool.com / Yahoo Sports, updated Fri May 22)",
      detail:
        "The club's injury picture firmed up at Friday's session: Alisson Becker, back after roughly three months out with a muscle injury, trained and 'will likely go straight back into the starting XI' if cleared; Alexander Isak trained and is 'likely to start up front'; Jeremie Frimpong returned after a suspected muscular injury and is in contention. Late fitness tests are expected. Ekitike, Bradley, Leoni, Endo and Bajcetic all remain out for the season.",
      category: "injuries",
    },
    {
      title: "Sack Saga Unverified: FSG 'Decision' Claims Persist, Pearce Denies, Iraola Stays Bookies' Favourite (Football365 / TeamTalk vs The Athletic, broke Thu May 21)",
      detail:
        "Still circulating but still unconfirmed: the Thursday reports from Football365 and TeamTalk that FSG have 'decided' to move on from Slot — with Richard Hughes said to have 'activated' a move for out-of-contract Bournemouth boss Andoni Iraola — have not been backed by any tier-one outlet. The Athletic's James Pearce maintains Liverpool's position on Slot is 'unchanged'. Iraola nonetheless remains the bookmakers' favourite to be Anfield manager for the 2026-27 opener, ahead of Sebastian Hoeness.",
      category: "general",
    },
    {
      title: "Transfer: Liverpool Eye West Ham's Jarrod Bowen As A Salah Replacement (CrunchSports / Anfield Watch / Liverpool.com, reported this week)",
      detail:
        "Moving through this week's transfer wires: with Salah's exit confirmed, Liverpool are credited with interest in West Ham captain Jarrod Bowen as a replacement, reportedly in a three-way battle with Newcastle and Everton, with the 29-year-old potentially available for under £60m if West Ham are relegated. RB Leipzig's Yan Diomande, PSG's Bradley Barcola and Bayern's Michael Olise are also named on the wide-rebuild shortlist.",
      category: "transfers",
    },
    {
      title: "Transfer: Curtis Jones 'Very Likely' To Leave — Inter Keen As New-Deal Talks Stall (Sky Sports / Caught Offside, reported Thu May 21)",
      detail:
        "Reported Thursday: Curtis Jones is now 'very likely' to leave Liverpool this summer, with Inter Milan interested since January and contract talks stalled for months. The academy graduate started the attacking three at Villa Park and could play his final Liverpool game in Sunday's farewell fixture — some predicted XIs even float him as a makeshift right-back.",
      category: "transfers",
    },
    {
      title: "Transfer: Camavinga Commits To Real Madrid; Monaco Open To £40m Camara Sale (Liverpool.com / This Is Anfield / Sky Sports, reported Wed-Thu May 20-21)",
      detail:
        "Two midfield threads from midweek: Real Madrid's Eduardo Camavinga has indicated he will not leave the Bernabéu, cooling a long-running Liverpool link, while AS Monaco are reportedly willing to accept around £40m for Lamine Camara — a target who fits Richard Hughes's stated plan to prioritise the engine room. Bournemouth's Marcos Senesi is also being weighed as a low-cost free-transfer defensive option.",
      category: "transfers",
    },
    {
      title: "Alisson Named In Brazil's 26-Man World Cup Squad (Goal.com, reported this week)",
      detail:
        "Confirmed earlier in the week: Alisson Becker is in Carlo Ancelotti's 26-man Brazil squad for the 2026 World Cup and is expected to be the Seleção's first-choice goalkeeper. The call-up coincides with his return to full Liverpool training and a possible Anfield send-off — and sits against the lingering Schira report of an agreed €15m move to Juventus.",
      category: "general",
    },
    {
      title: "Champions League Math: A Point Against Brentford Seals Top Five (Liverpool.com / Opta Analyst, carried into Sat May 23)",
      detail:
        "The bottom line a day out: Liverpool sit fifth on 59 points, three clear of Bournemouth with one match to play, and a draw or win at home to Brentford on Sunday guarantees the Champions League place. Bournemouth would need to win at Nottingham Forest and overturn a six-goal swing for the equation to change — Opta still rates Liverpool a near-certainty for the top five.",
      category: "matches",
    },
    {
      title: "Aston Villa 4-2 Liverpool — The Set-Piece Collapse Behind The Week (Sky Sports / ESPN / NBC Sports, broke Fri May 15)",
      detail:
        "The defeat that frames the whole week: at Villa Park on May 15, Morgan Rogers (43'), Ollie Watkins (57', 73') and John McGinn struck, three of the four from set pieces. Van Dijk's two headers (52', 90+) were the only reply as Liverpool's 12th league loss dropped Slot's side from fourth to fifth and turned the Brentford home finale into the season's defining 90 minutes.",
      category: "tactics",
    },
  ],
  sources: [
    "Liverpool FC",
    "Liverpool.com",
    "This Is Anfield",
    "Irish Times",
    "Sky Sports",
    "ESPN",
    "NBC Sports",
    "Football365",
    "TeamTalk",
    "The Athletic",
    "Yahoo Sports",
    "The 4th Official",
    "Sports Mole",
    "Sports Illustrated",
    "Washington Post",
    "Caught Offside",
    "Anfield Watch",
    "CrunchSports",
    "Goal.com",
    "Opta Analyst",
  ],
};

