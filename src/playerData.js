// ─── Liverpool FC Player Data (2025-26 Season · Updated May 14, 2026) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "recovering", outSince: "2026-03-19", injuryNote: "Fri May 15 — Slot at the Thursday presser (Liverpool FC official readout Fri): 'Alisson trains with us again, let's see where he is tomorrow, if he is ready already or has to wait one more week.' Brazilian has missed Liverpool's last 10 games — back on grass at the AXA Thursday but Mamardashvili starts a third straight at Villa Park tonight, and the Brentford home finale May 24 stays the realistic earliest return. Anfield Watch / FootballTransfers Thursday: 'agreed €15m deal' to Juventus, €5m-a-year personal terms per Schira", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 18, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.7, status: "fit", returningFromInjury: { matchesBackIncludingThis: 2 }, injuryNote: "Fri May 15 — match day: keeps the gloves at Villa Park tonight for a third straight start with Alisson only back in training as of Thursday. Beaten only by Fofana's deflection of Enzo Fernandez's 35' free-kick in last Saturday's 1-1 Chelsea Anfield draw (6.5-7/10 ratings). Liverpool.com narrative firming all week: anointed as next season's No. 1 with Juventus closing on Alisson", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 42, goals: 4, assists: 1, cleanSheets: 11, xG: 2.8, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.1, status: "fit", injuryNote: "Fri May 15 — captain locked in alongside Konaté at Villa Park tonight, the May 9 cramp episode fully behind him after full Wed/Thu sessions. Liverpool.com Thursday: Van Dijk's Galatasaray exit RULED OUT under a new rule — Dutchman expected to see out his current deal (end of 2026-27 per The Athletic). Bastoni/Schlotterbeck/van Hecke shortlisted as long-term succession candidates", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 39, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 6.9, status: "fit", injuryNote: "Fri May 15 — Slot at the Thursday presser, picked up by Liverpool FC's official Friday readout: 'Ibou is OK, [he] trained with us.' Came off Sat's 1-1 Chelsea draw with a thigh complaint but cleared, locked in alongside VVD for Villa Park tonight. Off-pitch, Liverpool.com's Wed 'STALEMATE' lead still hovers — sticking points on signing-on package and agent commissions, Real Madrid in the background", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
    physical: { height: 194, weight: 95, pace: 78, acceleration: 76, sprintSpeed: 80 },
    career: [
      { years: "2014-2017", club: "Sochaux", fee: null, type: "youth" },
      { years: "2017-2021", club: "RB Leipzig", fee: "€15M", type: "senior" },
      { years: "2021-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 18, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 6.2, status: "fit", injuryNote: "Fri May 15 — CONFIRMED XI: starts at RB at Villa Park tonight after Frimpong joined Isak on the late injury list (Liverpool.com / This Is Anfield, kickoff teamsheet). First start since Wed's 'we'll see' exit-interview cycle (ESPN, Anfield Index, Yahoo, RTÉ) — turns 29 the final weekend and ends up with the most consequential 90 minutes of his run-in", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 29, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 6.7, status: "fit", injuryNote: "Fri May 15 — rotation option only at Villa Park tonight with Kerkez locked in at LB; the Brentford home finale May 24 is the projected farewell. Bench in last Sat's 1-1 Chelsea Anfield draw. Tottenham agreement still summer-conditional on their PL fate — Liverpool linked with Dortmund's Daniel Svensson as the long-term LB heir", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
    physical: { height: 178, weight: 70, pace: 79, acceleration: 81, sprintSpeed: 77 },
    career: [
      { years: "2010-2013", club: "Queen's Park", fee: null, type: "senior" },
      { years: "2013-2014", club: "Dundee United", fee: "Free", type: "senior" },
      { years: "2014-2017", club: "Hull City", fee: "€3.4M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€9.3M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 37, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 7.0, status: "fit", injuryNote: "Fri May 15 — first-pick LB locked in for Villa Park tonight per Sportsmole's and Sports Illustrated's matchday previews. Started last Sat's 1-1 Chelsea draw replacing Robertson, solid 90 mins. Liverpool still linked with Dortmund's Daniel Svensson as long-term cover but Kerkez clearly the No. 1", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "doubtful", injuryNote: "Fri May 15 — RULED OUT of the Villa Park squad with a 'minor injury' picked up since Sat (This Is Anfield / RotoWire / DaveOCKOP kickoff cycle). Joe Gomez moves into the RB slot; Slot hopeful Frimpong recovers in time for the Brentford home finale May 24. Adds to a Liverpool match-day inventory already light on attacking width with Salah only a sub", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 40, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 7.1, status: "fit", injuryNote: "Fri May 15 — set to anchor the midfield three at Villa Park tonight after a full 90 in last Sat's 1-1 Chelsea Anfield draw. Contract noise still loud heading into match-day: father/agent Carlos confirmed last week 'no contract talks have taken place — and won't until the season is over.' Real Madrid credited with interest", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 40, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Fri May 15 — locks midfield at Villa Park tonight after SCORING last Sat's 6th-minute opener vs Chelsea (1-1 Anfield draw): a curled finish off Rio Ngumoha's left-wing assist — 7/10 across This Is Anfield, Liverpool.com and Sky Sports' player-rating tables. Couldn't conjure a winner as the game faded", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 47, goals: 12, assists: 8, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.7, status: "fit", injuryNote: "Fri May 15 — nailed-on for the Villa Park trip tonight after a full 90 in last Sat's 1-1 Chelsea Anfield draw, drifting between right-mid and the No. 10 pocket as Wirtz absented with the stomach infection. Engine of the run-in. Liverpool.com still expects his contract extension 'in the near future'", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 26, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 7.4, status: "fit", injuryNote: "Fri May 15 — CONFIRMED XI: pushed UP from RB to the right of the attacking three at Villa Park tonight (Liverpool.com / Liverpool FC official: 'Curtis Jones moves further forward in the team after a stint at full-back'). Gomez takes the RB spot now Frimpong is out. Off-pitch: Sky Sports still has Inter Milan keen, contract talks stalled", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 32, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.3, status: "doubtful", injuryNote: "Fri May 15 — CONFIRMED on the BENCH at Villa Park tonight (Liverpool FC official teamsheet). Slot's Thursday presser had him 'on antibiotics' for the stomach infection that ruled him out of the Chelsea draw, but the German playmaker recovered enough to be a sub option. Available for a cameo if the game is settled, but not deemed fit enough to start", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 37, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.2, status: "doubtful", outSince: "2026-04-26", injuryNote: "Fri May 15 — CONFIRMED on the BENCH at Villa Park tonight (Liverpool FC official teamsheet); Slot at the Thursday presser: 'Mo will be available tomorrow for only a few minutes.' First squad inclusion since the Apr 25 Crystal Palace muscle issue, cameo expected. The Brentford home finale May 24 stays the projected Anfield farewell with Henderson back in Brentford kit and Klopp tipped as a guest", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 38, goals: 9, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.2, status: "fit", injuryNote: "Fri May 15 — CONFIRMED XI: starts on the left of the attacking three at Villa Park tonight in Slot's 4-2-3-1 (Liverpool.com / Liverpool FC official). With Isak out late and Ngumoha promoted to the No. 9 role, Gakpo keeps his LW slot. Liverpool.com's transfer-cycle note still hovers: FSG has 'green-lit' a potential summer sale to fund the wide rebuild", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 18, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "doubtful", outSince: "2026-05-15", injuryNote: "Fri May 15 — RULED OUT of the Villa Park squad with a 'minor injury' (ESPN / Sports Mole / SI). Slot at kickoff: 'Indeed, Alex is out — minor injury,' citing his missed pre-season and broken-leg recovery as reasons to be cautious. Fourth injury of a fragmented debut season; Liverpool 'hopeful' he's fit for the Brentford home finale May 24. Ngumoha leads the line in his absence", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 12, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09"], injuryNote: "Fri May 15 — CONFIRMED XI: the 17-year-old PROMOTED to the No. 9 role at Villa Park tonight after Isak was ruled out with a minor injury (This Is Anfield: 'Rio Ngumoha starts again, NO Isak'). Started last Sat's Chelsea draw and assisted Gravenberch's 6' opener; now asked to lead the line in a Champions-League-shaping fixture. The teen's substitution drew loud boos last week — Slot leaning into the fans' favourite", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Fri May 15 — bench role at Villa Park tonight after Slot turned to Isak and Kerkez first off the pine in last Sat's 1-1 Chelsea Anfield draw. Rotation winger option only; Anfield Watch's 8-man summer clear-out list still has the Italian likely to exit", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Fri May 15 — back-up to Mamardashvili at Villa Park tonight with Alisson only back in training Thursday and Slot warning he 'may have to wait one more week.' Two PL starts this season (Crystal Palace and Old Trafford), ratings 6-7. Serviceable cover for the run-in", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
  opponent: "Aston Villa",
  shortName: "AVL",
  home: false,
  date: "2026-05-15T19:00:00",
  competition: "PL",
  venue: "Villa Park",
  broadcast: "Sky Sports",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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

// ─── Premier League Standings (after Round 36) ─────────────────────────────
// Liverpool fixed after the Sat May 9 Anfield draw with Chelsea — other rows
// held at their pre-MW36 positions (full league round still rolling).
export const STANDINGS = [
  { pos: 1, team: "Arsenal",         p: 34, w: 24, d: 6, l: 4,  gd: 46, pts: 78 },
  { pos: 2, team: "Manchester City", p: 34, w: 22, d: 7, l: 5,  gd: 39, pts: 73 },
  { pos: 3, team: "Newcastle",       p: 34, w: 20, d: 6, l: 8,  gd: 24, pts: 66 },
  { pos: 4, team: "Liverpool",       p: 36, w: 19, d: 8, l: 9,  gd: 21, pts: 65, highlight: true },
  { pos: 5, team: "Aston Villa",     p: 34, w: 18, d: 8, l: 8,  gd: 14, pts: 62 },
  { pos: 6, team: "Chelsea",         p: 35, w: 17, d: 10, l: 8, gd: 12, pts: 61 },
  { pos: 7, team: "Tottenham",       p: 34, w: 17, d: 7, l: 10, gd: 8,  pts: 58 },
  { pos: 8, team: "Brighton",        p: 34, w: 15, d: 9, l: 10, gd: 5,  pts: 54 },
];

// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Gomez, on Wednesday, said: we'll see.",
    byline: "ESPN / Anfield Index",
    dateline: "Liverpool · 13 May",
    category: "Farewells",
    body: "It was the answer no one wanted to hear and everyone had expected. Asked Wednesday whether he would still be a Liverpool player next season, Joe Gomez, eleven years inside the building, paused and said: 'No. I think anything can happen. I don't know is the honest answer. I've only got a year left so I don't know, but whatever is meant to be will be, I guess.' He added, twice, that he was grateful. He added, once, the verb everyone has learned to recognise: 'we'll see.' Gomez turns twenty-nine on the final weekend of the season. Fifteen starts in thirty-one. Behind him, Jacquet from Rennes; Leoni and Bradley returning from knee surgeries; the centre-half depth chart drawn in a different hand. The third 11-year goodbye of the summer was, on Wednesday, said out loud.",
  },
  {
    n: "02",
    headline: "Eight, give or take, for Villa Park.",
    byline: "Liverpool.com",
    dateline: "AXA · 13 May",
    category: "Injuries",
    body: "Liverpool.com on Wednesday ran the inventory and the headline did the math for them: eight players, give or take a Wirtz, could be unavailable at Villa Park on Friday. Salah and Alisson still not in full team sessions on the morning before travel. Wirtz, the stomach infection, still managed. Ekitike's Achilles, Bradley's knee, Leoni's ACL, Endo's ankle, Bajcetic's hamstring — the long-term column, frozen in place. Isak, back from a Saturday cameo, and Mamardashvili, three consecutive starts now, were the only confidence-builders inside the rundown. The matchday squad that fills the team-coach to Birmingham on Friday will be the thinnest of Slot's season. The away end and the manager and the Europa-final-bound Villa, in that order, will decide what kind of Friday it becomes.",
  },
  {
    n: "03",
    headline: "Konaté: stalemate.",
    byline: "Liverpool.com",
    dateline: "Liverpool · 13 May",
    category: "Transfers",
    body: "On Wednesday Liverpool.com used the word that had been hanging unspoken over the contract talks for a fortnight: stalemate. The signing-on package was not where the player wanted it. The agent commission was not where the club wanted it. Both sides, the report said, are still working, but the situation 'is not looking particularly positive.' Konaté, who said in the spring 'we are close to an agreement,' is now playing through what may be his last spring at the club. Real Madrid, sticking with the same patience they showed the last time, are still in the background. Bastoni, Schlotterbeck, van Hecke — the names on Hughes's contingency list — are still on the list. The centre-back the Reds need to keep is one summer from telling them he is going.",
  },
  {
    n: "04",
    headline: "Murphy: it's over. The hierarchy: it isn't.",
    byline: "Caught Offside / TeamTalk",
    dateline: "Liverpool · 13 May",
    category: "Manager",
    body: "Two stories landed on the same Wednesday cycle and pointed in opposite directions. Caught Offside led with Danny Murphy, on television: 'Arne Slot's time is up and there is an obvious candidate to replace him' — Xabi Alonso, available since January. Fabrizio Romano answered the same evening on TeamTalk: Liverpool 'never made any direct approach with Alonso or with his agents,' the club is 'absolutely in the direction' of continuing with Slot, the petition is the petition and the boardroom is the boardroom. David Bentley, separately, told a microphone that 'the fans have just disconnected from the manager and that's so hard, specifically at Liverpool.' The pundit case and the executive case have never been further apart, and the Villa Park trip on Friday will be the next time they are asked to argue in front of an audience.",
  },
  {
    n: "05",
    headline: "Howard Webb, two weeks late, said the thing.",
    byline: "Sky Sports",
    dateline: "London · 13 May",
    category: "Officiating",
    body: "On Wednesday afternoon, Howard Webb sat down with Sky Sports and conceded the thing every Liverpool supporter had been saying since the third of May: Benjamin Šeško did handle the ball before scoring Manchester United's third at Old Trafford. VAR, he added, could not disallow it because the available angles were not conclusive enough. The retrospective admission does not change the score, the standings, or the four-point cushion over sixth-placed Chelsea heading into Villa Park. It joins, instead, the file of things the league has acknowledged after they stopped mattering. The Liverpool internet, on Wednesday evening, did not file it gently.",
  },
];

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-05-15T18:30:00Z",
  summary:
    "Match-day Friday, ninety minutes from kickoff — Liverpool's confirmed XI at Villa Park (Liverpool FC / Liverpool.com) reads Mamardashvili; Gomez, Konate, Van Dijk, Kerkez; Gravenberch, Mac Allister; Jones, Szoboszlai, Gakpo; Ngumoha, with Slot shifting to a 4-2-3-1 after late injury blows to BOTH Alexander Isak and Jeremie Frimpong. Slot at the team-news drop: 'Indeed, Alex is out — minor injury' (ESPN / Sports Mole), citing the broken-leg recovery as reason to be cautious; Frimpong joins him with a 'minor issue,' opening the door for Joe Gomez to start at RB days after his 'we'll see' exit-interview cycle. Salah, Wirtz and Chiesa all named on the bench; Alisson still not in the squad, Mamardashvili keeps the gloves for a third straight match. The Champions-League math is unchanged: Liverpool and Villa enter Matchweek 37 level on 59 points, and a win at Villa Park OR a Chelsea slip across the weekend confirms the top-five finish before the Brentford home finale May 24. Off-pitch the next-manager carousel is still spinning (Sky Sports: Alonso 'frontrunner' for Chelsea, Iraola in 'in-person talks' with both clubs) and the Alisson-to-Juventus 'agreed €15m deal' line refuses to die.",
  keyTopics: [
    {
      title: "CONFIRMED Liverpool XI vs Aston Villa — Slot Goes 4-2-3-1 With Gomez At RB, Ngumoha Up Top (Liverpool FC / Liverpool.com, breaking today Fri May 15)",
      detail:
        "Liverpool FC's official teamsheet and Liverpool.com's matchday tracker, Friday May 15: Mamardashvili; Gomez, Konate, Van Dijk, Kerkez; Gravenberch, Mac Allister; Jones, Szoboszlai, Gakpo; Ngumoha. Slot rolls out a 4-2-3-1 — Gomez in at RB after Frimpong's late injury, Curtis Jones pushed FORWARD into the attacking three, and the 17-year-old Rio Ngumoha promoted to the No. 9 role with Isak ruled out. Salah, Wirtz and Chiesa all on the bench. This Is Anfield's tagline: 'Rio Ngumoha starts again, NO Isak.'",
      category: "matches",
    },
    {
      title: "Alexander Isak RULED OUT With 'Minor Injury' — Brentford Finale The Hope (ESPN / Sports Mole / Liverpool.com, breaking today Fri May 15)",
      detail:
        "ESPN, Sports Mole, SI and Liverpool.com all carried Slot's match-day update Friday May 15: 'Indeed, Alex is out — minor injury,' the manager added that Liverpool 'have to be careful because if you miss pre-season, if you then have a broken leg, when you are coming back.' Isak's fourth injury of a fragmented debut season; Liverpool 'hopeful' he's fit for the Brentford home finale May 24. Ngumoha leads the line in his absence.",
      category: "injuries",
    },
    {
      title: "Jeremie Frimpong Added To The Injury List — Gomez Steps In At RB (This Is Anfield / RotoWire / DaveOCKOP, breaking today Fri May 15)",
      detail:
        "This Is Anfield, RotoWire and DaveOCKOP's Friday match-day rollups: Frimpong joins Isak in missing the Villa Park squad with a 'minor issue.' Joe Gomez moves into the RB slot — his first start since Wed's 'anything can happen … we'll see' exit-interview cycle (ESPN / Anfield Index). Slot hopeful Frimpong recovers in time for the Brentford home finale May 24.",
      category: "injuries",
    },
    {
      title: "Match Day — Aston Villa vs Liverpool, 8pm BST At Villa Park (Sky Sports, today Fri May 15)",
      detail:
        "Sky Sports' Friday May 15 build-up: Liverpool travel to Villa Park tonight (8pm BST kickoff, Sky Sports Main Event) for the penultimate game of the campaign. Both clubs enter Matchweek 37 LEVEL on 59 points, Liverpool 4th on goal difference. A win confirms Champions League qualification and all-but secures fourth place before the visit of Brentford May 24; a Chelsea slip on the weekend would do the same job. Villa balance a Europa League final five days later.",
      category: "matches",
    },
    {
      title: "Slot Confirms Mo Salah's Villa Park Cameo — Bench Inclusion Confirmed (FOX Sports / Goal.com / Liverpool FC, breaking today Fri May 15)",
      detail:
        "FOX Sports, Goal.com US and Liverpool FC's official Friday May 15 readout: Slot at Thursday's presser confirmed Salah would feature against Aston Villa, 'available tomorrow for only a few minutes, but hopefully can come in.' The Egyptian was duly named on the bench at kickoff — first squad inclusion since the Apr 25 Crystal Palace muscle issue, a late cameo expected before the Anfield farewell against Brentford May 24.",
      category: "injuries",
    },
    {
      title: "Florian Wirtz On The Bench — Antibiotics-Recovered But Not Fit To Start (Liverpool FC / RotoWire, today Fri May 15)",
      detail:
        "Liverpool FC's official teamsheet and RotoWire, Friday May 15: Wirtz recovered enough from the stomach infection (Slot Thursday: 'on antibiotics') to be a sub option at Villa Park but was not deemed fit enough to start. Available for a cameo if the game is settled; Jones-Szoboszlai-Gakpo behind Ngumoha covers the attacking-mid trio in his absence.",
      category: "injuries",
    },
    {
      title: "'I'm The Liverpool Manager Next Season' — Arne Slot Rules Himself In For 2026-27 (Per Second News / This Is Anfield, today Fri May 15)",
      detail:
        "Per Second News and This Is Anfield carried Slot's Thursday-presser line reverberating into Friday's match-day coverage: 'I don't think I'm deciding that alone, but I have every reason to believe I'm the Liverpool manager next season.' beIN Sports' read framed it as 'Slot feels secure at Liverpool despite his disastrous season,' and GiveMeSport's accompanying line — Liverpool have 'no plans to complete a summer review' — backs the FSG-stick-with-Slot narrative against the petition, the boos and the Alonso/Iraola noise.",
      category: "general",
    },
    {
      title: "Alisson Still Not In The Matchday Squad — Mamardashvili Starts A Third Straight (Liverpool FC / Liverpool.com, today Fri May 15)",
      detail:
        "Liverpool FC's own injury readout, Friday May 15: 'Alisson trains with us again, let's see where he is tomorrow, if he is ready already or has to wait one more week' (Slot, Thursday). Brazilian keeper has missed Liverpool's last 10 games and is again left out of the matchday squad at Villa Park; Mamardashvili keeps the gloves for a third straight match. Liverpool.com treats the Brentford home finale May 24 as the realistic earliest return. Anfield Watch / FootballTransfers' Thursday 'agreed €15m Juventus deal' line still alive.",
      category: "injuries",
    },
    {
      title: "Xabi Alonso 'Frontrunner' For Chelsea Job As Liverpool Stand By Slot (Sky Sports / Inside World Football / FootballTransfers, breaking yesterday Thu May 14)",
      detail:
        "Sky Sports' Thursday May 14 framing — Alonso facing a dilemma between 'moving to Chelsea or waiting for the dream Liverpool job' — firmed up by FootballTransfers Thursday: 'Xabi Alonso frontrunner for next Chelsea manager job as talks progress positively after Liverpool twist.' Inside World Football, same cycle: Chelsea have 'turned attention to Alonso' as their manager search continues. The Liverpool-side line from Liverpool.com Thursday: FSG decided to 'stick with Slot' and 'will not hire Alonso' despite fans' desire. Chelsea want a new manager in place before the World Cup begins next month.",
      category: "general",
    },
    {
      title: "Iraola 'Among Candidates' To Replace Slot — Hughes Relationship The Driver (This Is Anfield / Caught Offside / Football FanCast, breaking yesterday Thu May 14)",
      detail:
        "This Is Anfield and Caught Offside flagged Andoni Iraola Thursday May 14 as 'among the candidates' to replace Slot if Liverpool change tack this summer; Football FanCast on the same day reported Chelsea have already held 'in-person talks' with the Spaniard. The Liverpool angle: Iraola is described as Sporting Director Richard Hughes's top target — the pair worked together at Bournemouth and Iraola's contract on the South Coast expires this summer. Iraola himself (Tribuna): 'I will not talk about my future.'",
      category: "general",
    },
    {
      title: "Alisson 'Agrees €15m Deal' To Leave Liverpool — €5m-A-Year Juventus Contract, Schira Reports (Anfield Watch / FootballTransfers, broke Thu May 14)",
      detail:
        "Anfield Watch and FootballTransfers, Thursday May 14: Alisson Becker has 'agreed a €15m deal' to leave Liverpool for Juventus, with Italian journalist Nicolò Schira putting the personal terms at €5m a year on a two- or three-year contract. Liverpool are said to want £13–17m as a fee, with negotiations between the clubs continuing into the week. The 33-year-old has missed Liverpool's last 10 games; Mamardashvili already being talked about as next season's No. 1.",
      category: "transfers",
    },
    {
      title: "Van Dijk Transfer To Galatasaray RULED OUT — Captain Set To See Out His Deal (Liverpool.com, broke Thu May 14)",
      detail:
        "Liverpool.com, Thursday May 14: 'Virgil van Dijk transfer ruled out as new rule could prevent Liverpool exit.' Recent reports had linked the captain with a sentimental late-career move to Galatasaray; the Dutchman is now expected to see out his current Liverpool deal, which The Athletic still has running to end of 2026-27. Liverpool tracking Alessandro Bastoni and Nico Schlotterbeck (plus van Hecke) as long-term centre-back succession candidates.",
      category: "transfers",
    },
    {
      title: "'Anything Can Happen … We'll See' — Joe Gomez Breaks Silence On Liverpool Exit Talk (ESPN / Anfield Index / Yahoo / RTÉ, broke Wed May 13)",
      detail:
        "Reported across ESPN, Anfield Index, Yahoo Sports and RTÉ on Wed May 13 and still echoing through Friday's coverage: 11-year servant Joe Gomez has admitted he doesn't know if he'll still be a Liverpool player next season. 'No. I think anything can happen. I don't know is the honest answer. I've only got a year left so I don't know, but whatever is meant to be will be, I guess … all I can do is be thankful and we'll see.' Gomez turns 29 on the final weekend; 15 starts in 31 apps this term. Adds to Salah and Robertson on confirmed/likely departures.",
      category: "transfers",
    },
    {
      title: "Howard Webb Concedes Šeško Handball vs Liverpool — VAR Could Not Disallow (Sky Sports, broke Wed May 13)",
      detail:
        "Sky Sports Wed May 13: PGMOL chief Howard Webb publicly conceded Benjamin Šeško did handle the ball before scoring for Manchester United against Liverpool at Old Trafford on May 3 (a 3-2 United win), but VAR could not disallow due to lack of conclusive evidence. Liverpool sit 4th on 65 pts heading into Villa Park, with the file of officiating grievances bigger than ever.",
      category: "matches",
    },
    {
      title: "Race For Top Five — A Win Tonight Or A Chelsea Slip Closes It (Liverpool.com / Premier League race-for-Europe, ongoing)",
      detail:
        "Liverpool sit 4th on 65 pts from 36 after the May 9 Chelsea draw — four clear of 6th-placed Chelsea (61), with 5th-placed Aston Villa (62) themselves in the chase. Two PL games left: Villa (A) tonight and Brentford (H) Sun May 24. A win at Villa Park OR a Chelsea slip on the weekend settles Champions League qualification. Villa play in the Europa League final five days after tonight's fixture and so will be balancing.",
      category: "matches",
    },
  ],
  sources: [
    "Sky Sports",
    "FOX Sports",
    "Goal.com",
    "Liverpool FC",
    "Liverpool.com",
    "This Is Anfield",
    "Per Second News",
    "beIN Sports",
    "Sportsmole",
    "Sports Illustrated",
    "RotoWire",
    "FootballTransfers",
    "Anfield Watch",
    "Inside World Football",
    "Football FanCast",
    "Caught Offside",
    "ESPN",
    "Anfield Index",
    "Yahoo Sports",
    "RTÉ",
    "TeamTalk",
    "GiveMeSport",
    "Premier League",
  ],
};

