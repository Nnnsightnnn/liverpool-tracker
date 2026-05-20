// ─── Liverpool FC Player Data (2025-26 Season · Updated May 20, 2026) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "recovering", outSince: "2026-03-19", injuryNote: "Wed May 20 — Liverpool FC official Wed-morning fitness tracker has the Brazilian back in FULL training at Kirkby after stepping up Tuesday; Slot 'hopeful' for the Sun May 24 finale after 11 straight games out. Schira's Thursday line — 'agreed €15m deal' to Juventus on €5m-a-year personal terms — holds into Wed alongside Sky Sports' fresh Lucas Chevalier scouting line. Brentford could be his Anfield send-off if he passes Friday's fitness check", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sat May 16 — beaten FOUR times at Villa Park last night (Rogers 43', Watkins 57' & 73', McGinn 90+). Three of the four came from set pieces in a 4-2 capitulation that left Liverpool needing to beat Brentford May 24 for a top-five finish (Liverpool.com / Sky Sports). Player ratings averaged 5/10 across This Is Anfield, Liverpool.com and Goal.com despite limited blame on the goals. Stays No. 1 with Alisson still out and the Juventus deal firming", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Sat May 16 — started at RB in last night's 4-2 Villa Park defeat (covering for Frimpong's late minor injury) but was overrun by Digne/Rogers on Villa's left side. 5/10 ratings across Goal.com and SI; Watkins's 57' opener stemmed from a Szoboszlai turnover but Gomez's positioning queried. Turns 29 next weekend; Brentford finale May 24 may be his last in red after Wed's 'anything can happen' exit-interview cycle", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 29, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 6.7, status: "fit", injuryNote: "Sat May 16 — unused sub in last night's 4-2 Villa Park loss; Brentford home finale Sun May 24 is the projected Anfield farewell. Tottenham agreement still summer-conditional on their PL fate (Sky Sports); Liverpool still linked with Dortmund's Daniel Svensson as long-term LB heir alongside Kerkez", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
    physical: { height: 178, weight: 70, pace: 79, acceleration: 81, sprintSpeed: 77 },
    career: [
      { years: "2010-2013", club: "Queen's Park", fee: null, type: "senior" },
      { years: "2013-2014", club: "Dundee United", fee: "Free", type: "senior" },
      { years: "2014-2017", club: "Hull City", fee: "€3.4M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€9.3M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Sat May 16 — started LB in last night's 4-2 Villa Park defeat; 6/10 ratings as Liverpool's left side was repeatedly overloaded by Cash and McGinn. The Hungarian's surge forward in the 80th minute drew an applause from the away end before Villa's fourth killed the contest. Still first-pick LB ahead of Robertson's farewell", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "doubtful", injuryNote: "Wed May 20 — Liverpool FC's Wed-morning fitness tracker has the Dutchman back in FULL training at Kirkby; 'minor injury' from Villa Park absence considered cleared in time for the Sun May 24 finale. Liked Salah's anti-Slot post Saturday — among the original SportBible nine, expanded to 17 endorsers Monday and unchanged into Wed", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat May 16 — full 90 in last night's 4-2 Villa Park defeat in the double-pivot alongside Gravenberch; couldn't stem the midfield haemorrhage as Villa cut through too easily after the break. 6/10 ratings across SI and Goal.com. Father/agent Carlos's 'no talks until the season is over' line still alive in the background; Real Madrid credited with interest", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
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
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 48, goals: 12, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.3, status: "fit", injuryNote: "Mon May 18 — among the original SportBible nine who liked Salah's Saturday anti-Slot Instagram post; tally has since grown to 17 past/present Reds per Caught Offside Monday. The Hungarian remains the most senior outfield endorser of the bombshell statement. On Friday: 90 mins at Villa Park, ASSISTED Van Dijk's 52' equaliser from a deep free-kick, but his midfield turnover led directly to Watkins's 57' restorer. 6/10 ratings; contract extension still expected 'in the near future' per Liverpool.com", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 27, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 6.9, status: "fit", injuryNote: "Mon May 18 — Saturday's 🙌 emoji on Salah's post + own 'way off standards' statement still dominating Monday's wire: 'Thank you for your continued support in a disappointing season. It's way off the standards expected at this football club.' Most senior English voice in the 17-strong dressing-room rebellion per Caught Offside Monday. On Friday: started attacking three at Villa Park, 5.5/10, withdrawn mid-second-half. Inter Milan still circling per Sky Sports", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Mon May 18 — added to Caught Offside's expanded 17-player list of Reds who have liked Salah's anti-Slot Instagram post. Came off the bench in Friday's 4-2 Villa Park defeat once the game was effectively gone, recovering from antibiotics after the stomach infection. Expected to start at home against Brentford May 24 as Liverpool need a win for Champions League", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 38, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.0, status: "fit", injuryNote: "Wed May 20 — Football365/TeamTalk lead Wed AM with confirmation FSG have performed a U-turn and are 'discussing' four Slot replacements, with Graeme Bailey reporting Salah's outburst 'triggered' the rethink. Rooney's Sun 'I'd bench him' line still echoes; Caught Offside's 17-endorser tally from Mon holds. With top-five all but secured by last night's Bournemouth-City draw, Brentford May 24 farewell becomes tribute + manager-vs-talisman tableau", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 39, goals: 9, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 6.8, status: "fit", injuryNote: "Mon May 18 — added to Caught Offside's expanded 17-player list of past/present Reds who have liked Salah's anti-Slot Instagram post — the Dutchman is among the new names joining the original SportBible nine. On Friday, 90 mins on the left at Villa Park; quiet output (5.5/10 SI / Goal.com). FSG's 'green-lit' a potential summer sale (Liverpool.com) still hangs over his Brentford finale appearance", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 18, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "doubtful", outSince: "2026-05-15", injuryNote: "Wed May 20 — Liverpool FC official Wed-morning tracker has the Swede back in FULL training at Kirkby after stepping up Tue; Slot 'hopeful' for the Sun May 24 home finale after Friday's late 'minor injury' (cited missed pre-season + broken-leg recovery). If not cleared at Slot's Friday presser, 17-year-old Rio Ngumoha — who led the line at Villa — starts again", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Sat May 16 — led the line in last night's 4-2 Villa Park defeat at 17 after Isak's late withdrawal; one of the few bright spots in a wretched team display per Goal.com's player ratings ('despite the best efforts of teenager Rio Ngumoha'). Couldn't conjure a goal but ran channels and drew fouls. The teen remains Slot's bright young find — start expected at Brentford May 24 with Isak's fitness uncertain", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
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
  date: "2026-05-24T15:00:00",
  competition: "PL",
  venue: "Anfield",
  broadcast: "Sky Sports",
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

// ─── Premier League Standings (after MW37 — Fri May 15 Villa 4-2 Liverpool) ──
// Liverpool drop to 5th after last night's 4-2 defeat at Villa Park; Villa
// clinch a Champions League spot and leapfrog the Reds. Other rows held at
// their pre-MW37 positions pending the rest of the round.
export const STANDINGS = [
  { pos: 1, team: "Arsenal",         p: 36, w: 25, d: 6, l: 5,  gd: 47, pts: 81 },
  { pos: 2, team: "Manchester City", p: 36, w: 22, d: 8, l: 6,  gd: 38, pts: 74 },
  { pos: 3, team: "Newcastle",       p: 36, w: 20, d: 7, l: 9,  gd: 23, pts: 67 },
  { pos: 4, team: "Aston Villa",     p: 37, w: 20, d: 8, l: 9,  gd: 20, pts: 68 },
  { pos: 5, team: "Liverpool",       p: 37, w: 19, d: 8, l: 10, gd: 19, pts: 65, highlight: true },
  { pos: 6, team: "Chelsea",         p: 36, w: 17, d: 10, l: 9, gd: 11, pts: 61 },
  { pos: 7, team: "Bournemouth",     p: 36, w: 17, d: 10, l: 9, gd: 9,  pts: 61 },
  { pos: 8, team: "Tottenham",       p: 36, w: 17, d: 7, l: 12, gd: 7,  pts: 58 },
];

// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Four-Two At Villa Park. The Standing Slipped.",
    byline: "Sky Sports / NBC Sports / Goal.com",
    dateline: "Birmingham · 15 May",
    category: "Match",
    body: "Aston Villa scored four times at Villa Park on Friday night and Liverpool, on the back of a brace of Virgil van Dijk headers, lost 4-2 and watched a Champions League place leave the building with the home supporters. Morgan Rogers, a curling 43rd-minute opener; Ollie Watkins, twice, the 57th and the 73rd; John McGinn, from outside the box, the fourth. Three of the four arrived from set-pieces. Slot, post-match: 'we conceded far too many goals.' Van Dijk's 52nd-minute equaliser, off a Szoboszlai free-kick, was the only spell of the night when the Anfield away end could believe. By the final whistle Villa were fourth, certified, and Liverpool were fifth on the same 65 points, only goal-difference and the calendar separating the Reds from a Bournemouth and a Chelsea who play this weekend. The Brentford home finale is now a game, and it is now a final.",
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
    body: "Liverpool, on Saturday morning, are fifth, on 65 points, with one game to play, against Brentford at home on Sunday week. Bournemouth, also on 61, have two: Manchester City this weekend and a final-day fixture that nobody can yet remember the date of without checking. Chelsea, also on 61, have two left of their own. The math, as ever, condenses fast: a Liverpool win against Brentford guarantees top five regardless. A Liverpool draw or loss opens the door to either south-coast side overtaking the Reds. The Brentford trip, which used to be the warm afterword of Salah and Robertson's Anfield farewells, is now the only game on the schedule that matters. Henderson will return in away kit. Klopp may sit in the directors' box. And the season, for the third time in May, will go to the last ninety minutes.",
  },
];

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-05-20T10:30:00Z",
  summary:
    "Wednesday morning, Anfield: the overnight news is overwhelmingly positive — Bournemouth could only draw 1-1 with Manchester City at the Vitality on Tuesday night (Kroupi 39', Haaland 90+5'), leaving the Cherries on 62 points with one to play and Liverpool's 65 essentially locked into the top five before a ball is kicked Sunday. Arsenal were confirmed champions by the same result. Underneath that breath of relief sits the harder Wed-AM story: Football365 and TeamTalk lead with a confirmed FSG 'U-turn' — the owners are now 'discussing' four Slot replacements (Iraola, Nagelsmann, Hoeness, Jaissle), with Antonio Conte's abrupt Napoli exit overnight Tuesday adding a fifth name. Fabrizio Romano holds the line: no sack before the Brentford finale, but a review thereafter. Slot remains 'hopeful' on Alisson, Isak and Frimpong, all back in full training at Kirkby this morning; team news firms at Friday's presser. Yesterday's Tuesday adidas 2026-27 kit launch has receded; Mark Schwarzer on Match of the Day overnight — 'things are not right at the club' — leads Wed's punditry stack.",
  keyTopics: [
    {
      title: "OVERNIGHT: Bournemouth 1-1 Man City At The Vitality — Liverpool's Top Five Essentially Sealed (ESPN / Sky Sports / VAVEL, broke late Tue May 19 / leads Wed AM)",
      detail:
        "Reported overnight Tuesday into Wednesday: Junior Kroupi's 39th-minute opener for Bournemouth was matched only in the 90+5 by Erling Haaland — the 1-1 draw confirms Arsenal as Premier League champions for the first time in 22 years AND, critically for Liverpool, leaves Bournemouth on 62 points with one game remaining. Liverpool sit on 65 with their own match to come; the Cherries can match but not pass that total, and Liverpool's far superior goal difference is the only other lever. Sky Sports' Wed AM line: 'top five is essentially Liverpool's to lose now.'",
      category: "matches",
    },
    {
      title: "BREAKING WED AM: FSG 'U-Turn' Confirmed — Liverpool Now 'Discussing' Four Slot Replacements (Football365 / TeamTalk / Yahoo Sports, broke Tue PM, leads Wed)",
      detail:
        "Reported overnight by Graeme Bailey and amplified across TeamTalk and Yahoo Wed morning: Fenway Sports Group have performed a U-turn on Slot's future and are 'discussing' four potential replacements (Iraola, Nagelsmann, Hoeness, Jaissle). Salah's weekend outburst is described as having 'triggered' the rethink; FSG executives Michael Edwards and Richard Hughes are reportedly 'divided.' Fabrizio Romano's Wed AM line holds: no sack before the Brentford finale on Sunday, but a 'review thereafter, which will be important.'",
      category: "tactics",
    },
    {
      title: "Conte Enters Slot-Replacement Frame After Abrupt Napoli Exit (Liverpool.com / This Is Anfield, broke overnight Tue, leads Wed AM)",
      detail:
        "Reported overnight Tuesday: Antonio Conte will leave Napoli at the end of the campaign, cutting short his contract. Wed AM Liverpool.com adds him to FSG's discussed shortlist as a fifth name alongside Iraola, Nagelsmann, Hoeness and Jaissle. Conte has previously been linked with the Anfield job and brings serial Italian title-winning credentials, though his squad-management style runs against the FSG profile.",
      category: "general",
    },
    {
      title: "Pre-Brentford Fitness Tracker (Wed): Alisson, Isak And Frimpong All Back In Full Training (Liverpool FC / Liverpool.com, today Wed May 20)",
      detail:
        "The club's official Wednesday-morning tracker has Slot 'hopeful' on all three Villa Park absentees: Alisson Becker (11 straight games out, in full training from Wed morning), Alexander Isak (Friday's 'minor injury' considered cleared) and Jeremie Frimpong (also a 'minor issue'). All three were spotted at Kirkby this morning per the club. Team news firms at Slot's Friday presser; Ngumoha leads the line again if Isak doesn't clear, Mamardashvili keeps the gloves until Alisson is signed off.",
      category: "injuries",
    },
    {
      title: "Schwarzer On Match Of The Day: 'Things Are Not Right At The Club' (BBC MOTD / Liverpool.com / Per Second News, broke late Tue, leads Wed AM)",
      detail:
        "Overnight from BBC Match of the Day: former Premier League keeper Mark Schwarzer added to the pundit chorus questioning the dressing room. 'It just shows you things are not right at the club,' Schwarzer said of the Salah ultimatum. Wed AM Liverpool.com adds it to a stack that already includes Gerrard ('damning … identity's gone'), Carragher ('signs of a man buckling') and Murphy ('his time is up') — the most coherent pundit-class verdict on Slot since the Villa Park defeat.",
      category: "tactics",
    },
    {
      title: "Liverpool 'Most Interested' In PSG's Lucas Chevalier As Alisson Heir (Sky Sports / The Athletic, broke Tue PM, holds Wed)",
      detail:
        "Sky Sports Tuesday evening, carried into Wed AM transfer round-ups: Liverpool are 'most interested' in PSG's 24-year-old keeper Lucas Chevalier, described as 'long monitored' by Liverpool scouts. The story sits alongside Schira's still-active Juventus-Alisson €15m / €5m-a-year personal-terms line and reinforces that the Mamardashvili era is set to formalise this summer regardless.",
      category: "transfers",
    },
    {
      title: "YESTERDAY: adidas 2026-27 Home Kit Dropped 9am BST — 1989-90 Tribute, Green Heritage Keeper Set (Liverpool FC / This Is Anfield / Liverpool.com, dropped Tue May 19)",
      detail:
        "Tuesday morning's release, already receding from Wed's news stack: adidas's 2026-27 home kit, an explicit homage to the 1989-90 title-winning strip with the geometric pattern restored, deep-red shorts and socks, and a green goalkeeper kit. On sale via the LFC Store app, online and in stores. Liverpool FC official: 'inspired by an iconic title-winning season.' For one news cycle it was the most-shared Liverpool story; by Wed AM it sits beneath the FSG and finale headlines.",
      category: "general",
    },
    {
      title: "Rooney's Sunday Verdict Still Echoing: 'I'd Bench Salah' For The Anfield Farewell (SportBible / This Is Anfield, broke Sun May 17, runs through Wed)",
      detail:
        "Wayne Rooney's Stick To Football line told Slot to drop Mohamed Salah for Sunday's Anfield farewell — 'I'd be putting him on the bench.' SportBible carries the full quotes; This Is Anfield treats it as an outside intervention adding pressure to the manager-vs-talisman tableau. Wednesday's selection-debate columns still lean on the line. Selection still expected to favour Salah starting in front of the Kop.",
      category: "tactics",
    },
    {
      title: "Caught Offside: 17 Past And Present Liverpool Players Have Liked Salah's Anti-Slot Post (Caught Offside / SI / beIN Sports, expanded Mon May 18, holds Wed)",
      detail:
        "Monday's Caught Offside tally — 17 past and present Liverpool players liking Salah's Saturday-evening anti-Slot Instagram post — is still unchanged on Wednesday. The original SportBible nine (Szoboszlai, Robertson, Kerkez, Ekitike, Endo, Leoni, Frimpong, Ramsay, Elliott) joined Monday by Konaté, Wirtz and Gakpo, plus ex-Reds including Trent Alexander-Arnold. SI's framing — 'a brutal swipe that pits players, fans, and legends against each other' — still leads social-media chatter.",
      category: "general",
    },
    {
      title: "Gerrard On TNT: Salah Statement Is 'Damning' For Slot — 'Identity's Gone' (TNT Sports / Tribuna / This Is Anfield, broke Sun May 17, holds Wed)",
      detail:
        "Steven Gerrard's TNT Sports verdict still leads the punditry stack into Wed: 'that's quite damning to the manager' (Tribuna's Sunday-night carry); 'identity's gone' (This Is Anfield). Wednesday morning columnists across UK and US wires lean on the Gerrard line to frame Slot's predicament. Unlike his Saturday 'this isn't the way' caveat about Salah, Sunday-night Gerrard pivoted from criticising the player to backing the player's diagnosis of the team.",
      category: "tactics",
    },
    {
      title: "Chelsea Confirm Xabi Alonso As New Manager On Four-Year Deal — Liverpool's Plan B Gone (Al Jazeera / ITV / Euronews / Liverpool.com, confirmed Sun May 17)",
      detail:
        "Sunday's announcement still rippling: Chelsea have appointed Xabi Alonso as their new manager on a four-year contract starting July 1. Liverpool.com Monday read — 'Why Xabi Alonso turned down Liverpool' — explained the call: Alonso's camp wanted certainty NOW, FSG would not move on Slot in-season, and BlueCo offered four years plus full footballing control. The most-named Slot Plan B is off the board four days from the Brentford finale.",
      category: "general",
    },
    {
      title: "Salah's Anti-Slot Instagram BOMBSHELL — Calls For Return To Klopp's 'Heavy Metal Football' (Liverpool.com / This Is Anfield / Goal.com, broke Sat May 16)",
      detail:
        "Posted Saturday evening after the 4-2 Villa Park defeat: a lengthy statement from Mohamed Salah, days from his Anfield farewell, declaring 'I want to see Liverpool go back to being the heavy metal attacking team that opponents fear and back to being a team that wins trophies.' The phrase 'heavy metal football' is synonymous with Jürgen Klopp; the post takes direct aim at Slot's style. beIN Sports Sunday: Salah doubled down with a second post. The manager-vs-talisman frame for Sunday's farewell continues to harden.",
      category: "general",
    },
    {
      title: "Aston Villa 4-2 Liverpool — Watkins Brace Drops Reds To 5th (Sky Sports / ESPN / NBC Sports, broke Fri May 15)",
      detail:
        "Friday's defeat at Villa Park, five days back and still the structural cause of every Wed headline: Morgan Rogers 43' off a Digne short-corner, Watkins 57' (open play, off a Szoboszlai turnover) and 73' (reacting to a Pau Torres header), John McGinn from outside the box for the fourth. Three of four came from set pieces. Van Dijk replied with TWO headers (52', 90+) but Liverpool's 12th PL loss of the season dropped Slot's side from 4th to 5th. Brentford home finale Sun May 24 is the season's last 90 minutes.",
      category: "matches",
    },
    {
      title: "Anfield Mosaics Confirmed For Sunday — Kop For Salah, Lower Kenny Dalglish Stand For Robertson (Liverpool FC / Empire of the Kop, broke Mon May 18)",
      detail:
        "The club confirmed Monday that mosaics will be displayed at Anfield before kick-off Sunday for the departing Mohamed Salah and Andy Robertson. The Kop leads the Salah tribute; the lower Sir Kenny Dalglish Stand honours Robertson. Volunteers were invited Saturday to help prepare the displays. With FSG's Wed AM 'U-turn' framing the build-up, the dual farewell now carries a heavier weight than the original tribute.",
      category: "general",
    },
  ],
  sources: [
    "Liverpool FC",
    "Liverpool.com",
    "This Is Anfield",
    "Empire of the Kop",
    "Tribuna",
    "Al Jazeera",
    "ITV News",
    "Euronews",
    "Sky Sports",
    "NBC Sports",
    "ESPN",
    "Goal.com",
    "GiveMeSport",
    "Per Second News",
    "Sports Illustrated",
    "FootballTransfers",
    "Anfield Watch",
    "Football FanCast",
    "Caught Offside",
    "SportBible",
    "TeamTalk",
    "TNT Sports",
    "beIN Sports",
    "Football365",
    "Yahoo Sports",
    "The Athletic",
    "VAVEL",
    "BBC Match of the Day",
  ],
};

