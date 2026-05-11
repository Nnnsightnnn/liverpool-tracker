// ─── Liverpool FC Player Data (2025-26 Season · Updated May 10, 2026) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "recovering", outSince: "2026-03-22", injuryNote: "Mon May 11 — Liverpool.com Sun: Slot post-Chelsea (1-1 Sat) said 'Ali is close to returning' but 'doesn't train with us yet, very close to' — Alisson has NOT yet resumed full team sessions. Touch-and-go for Aston Villa (A) Fri May 15; Mon-Wed training will decide it. Missed his ninth consecutive PL match Sat. Off the pitch, Liverpool.com transfer LIVE Mon: Juventus 'advances' — agreed personal terms on a €5m-a-year deal, €15m fee mooted (Schira). Chevalier (PSG) heads the Reds' five-keeper shortlist", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 18, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.7, status: "fit", returningFromInjury: { matchesBackIncludingThis: 2 }, injuryNote: "Mon May 11 — started Sat's 1-1 Chelsea draw at Anfield in the surprise early return, beaten by Wes Fofana's deflection on Enzo Fernandez's 35' free-kick. Composed otherwise; Sky Sports / This Is Anfield 6.5-7/10 ratings. Locked in to keep the gloves at Villa Park Fri May 15 with Alisson still not in full training. Liverpool.com Mon: 'Reds could hand Mamardashvili his chances as the No.1 next term' as Juventus close on Alisson", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 42, goals: 4, assists: 1, cleanSheets: 11, xG: 2.8, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.1, status: "doubtful", outSince: "2026-05-09", injuryNote: "Mon May 11 — CRAMP SCARE: limped off in the second half of Sat's 1-1 Chelsea Anfield draw. Slot post-match (Liverpool.com / Sky Sports): 'The way he limped off, he told me it was cramp. Let's hope he is right in his assessment, but we have to wait and see tomorrow how he feels.' Doubt for Villa Park Fri May 15 pending Mon-Wed assessment. Booed at full-time alongside Slot. The Athletic still reports him expected to leave end of 2026-27", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 39, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 6.9, status: "fit", injuryNote: "Mon May 11 — started alongside VVD in Sat's 1-1 Chelsea Anfield draw, solid 90 minutes; couldn't keep out Fofana's deflection of the Enzo Fernandez free-kick at 35'. With VVD now a cramp doubt for Villa Park, Konaté's leadership of the back four becomes crucial. Off the pitch the contract is still '50/50' per Crook (Apr 25) — Real Madrid in chase, Liverpool tracking Bastoni/Schlotterbeck/van Hecke shortlist", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
    physical: { height: 194, weight: 95, pace: 78, acceleration: 76, sprintSpeed: 80 },
    career: [
      { years: "2014-2017", club: "Sochaux", fee: null, type: "youth" },
      { years: "2017-2021", club: "RB Leipzig", fee: "€15M", type: "senior" },
      { years: "2021-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 18, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 6.2, status: "fit", injuryNote: "Mon May 11 — LEAD VOICE: today's Liverpool.com / ESPN / This Is Anfield headline — Gomez admits Anfield boos 'hurt' but accepts fans 'entitled' to voice frustration. 'For us older boys who have experienced so many good times here it does hurt.' Defended Slot's Ngumoha cramp sub: 'Rio's young, physically he was tired.' Unused bench in Sat's 1-1 vs Chelsea. With VVD now a cramp doubt could be promoted into the XI for Villa Park", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 29, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 6.7, status: "fit", injuryNote: "Mon May 11 — LOST the LB shirt to Kerkez for Sat's 1-1 Chelsea Anfield draw (confirmed XI per This Is Anfield / LFC.com / Empire of the Kop) and watched the back four leak the Fofana-deflected equaliser at 35' from the bench. Rotation option for Villa Park Fri May 15. Tottenham agreement still summer-conditional on their PL fate — Liverpool linked with Dortmund's Daniel Svensson as the long-term LB heir", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
    physical: { height: 178, weight: 70, pace: 79, acceleration: 81, sprintSpeed: 77 },
    career: [
      { years: "2010-2013", club: "Queen's Park", fee: null, type: "senior" },
      { years: "2013-2014", club: "Dundee United", fee: "Free", type: "senior" },
      { years: "2014-2017", club: "Hull City", fee: "€3.4M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€9.3M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 37, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 7.0, status: "fit", injuryNote: "Mon May 11 — STARTED at LB for Sat's 1-1 Chelsea Anfield draw, replacing Robertson per the confirmed XI (This Is Anfield / Empire of the Kop / LFC.com). Solid 90 minutes; locked in for Villa Park Fri May 15. Liverpool linked with Dortmund's Daniel Svensson as long-term cover but Kerkez stays the first-pick LB", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Mon May 11 — started Sat's 1-1 Chelsea Anfield draw on the right side of the front three as Wirtz cover, with Curtis Jones again at RB. Modest outing 6/10 ratings. Should be retained at Villa Park Fri May 15 as makeshift attacker if Salah's recovery isn't complete, or revert to RB if Jones drops out", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 40, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 7.1, status: "fit", injuryNote: "Mon May 11 — completed 90 minutes in Sat's 1-1 Chelsea Anfield draw, anchoring the midfield three with Gravenberch and Szoboszlai. Off-pitch the contract noise still loud: father/agent Carlos confirmed Thu May 7 'no contract talks have taken place — and won't until the season is over.' Real Madrid credited with interest. Set to start at Villa Park Fri May 15", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 40, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Mon May 11 — SCORED Sat's 6th-minute opener vs Chelsea (1-1 Anfield draw): a curled finish off Rio Ngumoha's left-wing assist — 7/10 across This Is Anfield, Liverpool.com and Sky Sports' player-rating tables. Couldn't conjure a winner as the game faded. Locks midfield for Villa Park Fri May 15", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 47, goals: 12, assists: 8, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.7, status: "fit", injuryNote: "Mon May 11 — full 90 in Sat's 1-1 Chelsea Anfield draw, drifting between right-mid and the No. 10 pocket as Wirtz absented with a stomach infection. Engine of the run-in; nailed-on for the Villa Park trip Fri May 15. Liverpool.com still expects his contract extension 'in the near future'", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 26, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 7.4, status: "fit", injuryNote: "Mon May 11 — started at RB again in Sat's 1-1 Chelsea Anfield draw and was 'hung out to dry' per Goal.com's player ratings as Cucurella found space down his side. Liverpool.com Mon: GiveMeSport reports Reds in 'advanced talks' for Adam Wharton (£80m Palace ask) — Wharton 'understood to favour' Anfield. Inter, Newcastle and Villa still monitor Jones", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 32, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.3, status: "doubtful", outSince: "2026-05-09", injuryNote: "Mon May 11 — ruled out of Sat's 1-1 Chelsea Anfield draw with a stomach infection (AP/Washington Post/Yahoo Sports). Slot: 'He tried everything to be in it ... in the end things got worse and he wasn't able to train.' Reds will 'wait and see how he feels' Mon-Wed. Slot 'hopeful' Wirtz returns at Villa Park Fri May 15", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 37, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.2, status: "recovering", outSince: "2026-04-26", injuryNote: "Mon May 11 — Liverpool.com / LiverpoolWorld: Slot post-Chelsea (Sat) said 'Mo is close to returning' but Salah has NOT yet resumed full team training — touch-and-go for Aston Villa (A) Fri May 15. Missed Sat's 1-1 Chelsea draw, third consecutive game out with the Apr 25 Palace hamstring. The Brentford home finale May 24 remains his projected Anfield farewell with Henderson returning in the away kit", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 38, goals: 9, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.2, status: "fit", injuryNote: "Mon May 11 — led the line as false 9 in Sat's 1-1 Chelsea Anfield draw with Isak only fit for a bench cameo and Salah still hamstrung; Liverpool.com's verdict 'Cody Gakpo goes missing.' 5-6/10 ratings; struggled to influence after Gravenberch's 6' opener. Likely drops back to LW at Villa Park Fri May 15 if Isak starts up top", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 18, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", returningFromInjury: { matchesBackIncludingThis: 1 }, injuryNote: "Mon May 11 — came off the bench in the second half of Sat's 1-1 Chelsea Anfield draw, his first minutes since the Apr 25 Crystal Palace muscle issue. Couldn't find the winner, but confidence-builder ahead of Villa Park Fri May 15 where he's expected to start with Gakpo dropping back to the wing", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 12, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09"], injuryNote: "Mon May 11 — STARTED Sat's 1-1 Chelsea Anfield draw and supplied the assist for Gravenberch's 6' opener. Liverpool.com headline: 'Rio Ngumoha stars.' Hooked at 75' with cramp; the substitution drew loud boos from the Anfield crowd. Slot post-match: 'He said it was enough.' Gomez (today, Liverpool.com): 'Rio's young ... physically he was tired.' Pushes for another start at Villa Park Fri May 15 if Salah isn't ready", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Mon May 11 — bench role Sat in the 1-1 Chelsea Anfield draw and Slot turned to Isak and Kerkez first off the pine. Rotation winger option for Villa Park Fri May 15; April reporting still has the Italian likely to exit this summer", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Mon May 11 — back-up to Mamardashvili in Sat's 1-1 Chelsea draw; unused. Two PL starts this season (Crystal Palace and Old Trafford), ratings 6-7. Serviceable cover for the run-in with Alisson still not in full training ahead of Villa Park Fri May 15", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    headline: "Gravenberch, six minutes in, and a draw that wasn't enough.",
    byline: "Sky Sports",
    dateline: "Anfield · 9 May",
    category: "Match Report",
    body: "Six minutes. Rio Ngumoha, on the left, finds the channel. The cutback meets Ryan Gravenberch arriving, and the curl is clean — top corner, gone. For half an hour, the title sliding away, the Champions League sliding back, Liverpool look like a team that might still want to go anywhere. Then, on thirty-five, Enzo Fernández bends a free-kick that catches Wes Fofana's toe and screams past Mamardashvili. From there: nothing. A wandering second half. Boos, audible, when Slot took Ngumoha off at seventy-five with cramp. Boos, audible, at full-time. One-one, eighth set of dropped home points, and the Champions League sealer postponed to Villa Park.",
  },
  {
    n: "02",
    headline: "Slot, after the boos: 'I won't win them back this season.'",
    byline: "Sky Sports",
    dateline: "Anfield · 9 May",
    category: "Manager",
    body: "He didn't argue with the noise. He didn't blame the players, the schedule, the officials. He didn't, this time, reach for the VAR list. He simply admitted what the half-empty Kop and the boo at Ngumoha's exit had already said for him: 'I won't win the fans back this season.' Then, almost in the same breath, the line he must believe or sink trying: '100 percent, I am convinced — if we have the summer we are planning, this team will be different next year.' The next-year framing has become the manager's defence and, increasingly, the supporters' bill of complaint. There are two games left — Villa, Brentford — to make either case stick.",
  },
  {
    n: "03",
    headline: "Wirtz, a stomach infection, and Slot's running tab.",
    byline: "Associated Press",
    dateline: "Anfield · 9 May",
    category: "Injuries",
    body: "He tried, the manager said. Florian Wirtz tried earlier in the week to train, then things got worse, and by Friday he wasn't in the squad. 'An infection in the stomach.' Rio Ngumoha came in. The seventeen-year-old, who has been running the bench warm and the wing hot, finally got the start — and supplied the assist for the only Liverpool goal of the afternoon. Wirtz is now the latest entry on a running tab that includes Salah, Alisson, Isak (who came off the bench for thirty minutes — first minutes since 25 April), Bradley, Endo, Ekitike, Leoni, Bajcetic. Slot is 'hopeful' Wirtz makes Villa Park. The hope is doing a lot of work, by now.",
  },
  {
    n: "04",
    headline: "Gordon, opening talks, and a £73m question Liverpool can't yet answer.",
    byline: "Liverpool.com",
    dateline: "Liverpool · 8 May",
    category: "Transfers",
    body: "Anthony Gordon: twenty-five, Newcastle, England. He nearly came in 2024 — the £75m deal agreed, then collapsed; Joe Gomez was on the phone, the directions of two careers nearly traded. Now, three years later, the transfer talks are open again. Bayern Munich met him this week. Arsenal made contact. Caught Offside reported the Liverpool side of the conversation Friday. Newcastle have stopped pretending the player will stay; the asking price floats around £73m, with bonuses pushing toward £100m. The complication, per the Liverpool.com Saturday read, is that Gordon may now prefer a move abroad. Yan Diomande (£85m, RB Leipzig) is the other lever; both are wide-attack permutations of the post-Salah question. Hughes has the fortnight, and the bank account, to answer.",
  },
  {
    n: "05",
    headline: "Two games left. The Champions League maths, post-Chelsea.",
    byline: "Liverpool.com",
    dateline: "Liverpool · 10 May",
    category: "Race for Europe",
    body: "Sixty-five points, four games clear of sixth, two games to play. A win at Villa Park on Friday — eight o'clock kick-off, Sky Sports, the Friday slot Villa wanted because they have a Europa League final five days later in Istanbul — and the Champions League is done. So is, equally, any Bournemouth slip at Fulham, with Liverpool's superior goal difference doing the rest. The Premier League's own race-for-Europe page Sunday morning: Liverpool need 'a maximum of three more points.' The Brentford finale on the twenty-fourth has, accordingly, slid back into what it was always going to be: a Salah farewell, a Henderson return, a sentimental coda. Provided Friday goes the way Friday usually goes.",
  },
];

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-05-11T12:00:00Z",
  summary:
    "Monday May 11 — Two days on from Saturday's frustrating 1-1 Chelsea draw at Anfield, the dressing-room reaction has arrived: Joe Gomez told Liverpool.com and ESPN today that the players are 'hurt' by the Anfield boos but accept fans are 'entitled' to voice their frustration, defending Slot's substitution of Rio Ngumoha as a cramp-driven call. Slot still needs to assess Virgil van Dijk, who limped off in the second half with what the captain told him was cramp — Liverpool.com reports the manager will 'wait and see how he feels' before Villa Park. Off the pitch, FootballTransfers and the Telegraph reported overnight that Slot's job is safe with FSG and that Liverpool have NOT contacted Xabi Alonso or his agents in May, even as This Is Anfield names Andoni Iraola 'among candidates' should the picture change. Mohamed Salah and Alisson Becker remain 'close' but neither has returned to full training; both are touch-and-go for Aston Villa (A) Friday May 15, 8pm BST on Sky Sports. Reds sit 4th on 65 pts, four clear of 6th-place Bournemouth — a win at Villa Park OR a Bournemouth slip vs Man City seals top-five.",
  keyTopics: [
    {
      title: "Joe Gomez Breaks Dressing-Room Silence — 'Hurt' By Anfield Boos But Accepts Fan Frustration (Liverpool.com / ESPN / This Is Anfield, today Mon May 11)",
      detail:
        "Confirmed overnight Sun May 10 / Mon May 11 across Liverpool.com, ESPN, This Is Anfield, Yahoo Sports and Goal.com: Joe Gomez has become the first senior player to address Saturday's full-time boos. 'We feel it. It's the last thing we want. For us older boys who have experienced so many good times here it does hurt,' Gomez said. He defended Slot's Ngumoha cramp substitution: 'Rio's young, played in a high-intense game ... physically, he was tired.' The Sky Sports / Liverpool.com framing this morning: 'Hurt' Gomez accepts fans entitled to voice frustration after football 'no one wants to see'.",
      category: "general",
    },
    {
      title: "Van Dijk Cramp Scare — Slot Has To 'Wait And See' Before Villa Park (Liverpool.com, reported Sun May 10)",
      detail:
        "Liverpool.com referee-decision recap published Sun May 10: 'Liverpool gets referee verdict on Virgil van Dijk incident during Chelsea draw' — but the bigger story is the captain limped off in the second half. Slot post-match: 'The way he limped off, he told me it was cramp. Let's hope he is right in his assessment, but we have to wait and see tomorrow how he feels and how that will work out.' VVD a major doubt monitoring through Mon-Wed before Villa Park Fri May 15.",
      category: "injuries",
    },
    {
      title: "Slot Job Safe — Telegraph Confirms FSG Faith, Reds Have NOT Contacted Alonso In May (FootballTransfers, today Mon May 11)",
      detail:
        "FootballTransfers and Telegraph round-up early Mon May 11: 'Liverpool news: Arne Slot set to stay after rejecting move to European giants.' The clearest message from the latest FSG discussions: Liverpool are NOT preparing another managerial reset and have made NO contact with Xabi Alonso or his agents in May. Slot is understood to retain the faith of Liverpool's hierarchy ahead of 2026-27, despite the Anfield boos. Anfield Index also confirms the stance.",
      category: "general",
    },
    {
      title: "Iraola 'Among Candidates' If Liverpool Pivot — Bournemouth Boss Free This Summer (This Is Anfield, Sat May 9)",
      detail:
        "This Is Anfield headline Sat May 9: 'Andoni Iraola among candidates to replace Arne Slot at Liverpool.' Iraola's Bournemouth contract expires this summer after three years at the Vitality. Caveat baked into the same piece: it remains the contingency, not the active plan — FSG's preferred path is still Slot + a transformative window. Lineker on Caught Offside Tue: 'I wouldn't be surprised' to see Alonso at Liverpool next season.",
      category: "general",
    },
    {
      title: "Salah and Alisson Not Yet In Training — Villa Park Friday Still Touch-And-Go (Liverpool.com, Sun May 10)",
      detail:
        "Liverpool.com injury round-up Sun May 10 morning: Slot's post-Chelsea line — 'Mo is close to returning, Ali is close to returning' — but Alisson 'doesn't train with us yet, very close to.' Same for Salah's hamstring (suffered vs Crystal Palace Apr 25) — third PL match missed Saturday. Both target Aston Villa (A) Fri May 15, but with neither in full team sessions Mon-Wed look critical. Salah's projected Anfield farewell remains Brentford (H) Sun May 24.",
      category: "injuries",
    },
    {
      title: "Wirtz Stomach Infection Update — Slot 'Hopeful' For Villa Park (AP / This Is Anfield, Sat May 9)",
      detail:
        "Confirmed Sat May 9 by AP/Washington Post and This Is Anfield: Florian Wirtz missed the Chelsea matchday squad with what Slot described as 'an infection in the stomach.' 'He tried everything to be in it ... in the end things got worse,' Slot said. Liverpool will 'wait and see how he feels' through the early week. Ngumoha started in his place and supplied the Gravenberch opener.",
      category: "injuries",
    },
    {
      title: "Liverpool's Set-Piece Crisis Hits Top-Five-Leagues Worst — Slot 'Annoyed' (Opta Analyst / Empire of the Kop, weekend May 9-10)",
      detail:
        "Opta Analyst piece doing the rounds across Empire of the Kop and ESPN over the weekend: Liverpool's non-penalty set-piece difference of -9 is the worst in Europe's top five leagues this season. The Reds have conceded 11 set-piece goals — seven from corners (only West Ham worse) and three from throw-ins (joint-most). Slot 'annoyed' by the record; Fofana's deflection of Enzo Fernandez's free-kick Saturday extended the run.",
      category: "tactics",
    },
    {
      title: "Champions League Maths — Reds Need One Win From Two After Sat Draw (Liverpool.com / The National, Sun May 10)",
      detail:
        "Liverpool.com / The National lead Sun May 10: 'Liverpool's wait for Champions League spot continues after Chelsea draw.' Reds 4th on 65 pts after 36 games, four clear of 6th-place Bournemouth (Bournemouth beat Fulham Sat to keep the hunt alive). Two PL games left: Villa (A) Fri May 15 and Brentford (H) Sun May 24. A win at Villa Park OR a Bournemouth slip at Man City (Mon May 19) seals top-five.",
      category: "matches",
    },
    {
      title: "Alisson to Juventus Edges Closer — €15m Fee, €5m-Per-Year Terms Reported (Liverpool.com transfer live, today Mon May 11)",
      detail:
        "Liverpool.com transfer-news LIVE blog Mon May 11: 'Juventus advances on Alisson' — the Brazilian goalkeeper has 'agreed personal terms with Juventus' on a €5m-a-year deal, with a €15m fee mooted (Schira / FootballTransfers). Mamardashvili expected to inherit the No. 1 shirt next season; Reds drawing up a five-keeper shortlist headed by PSG's Lucas Chevalier as long-term cover/competition.",
      category: "transfers",
    },
    {
      title: "Aston Villa (A) Friday May 15, 8pm BST — Sky Sports (avfc.co.uk / Premier League)",
      detail:
        "Confirmed Premier League / avfc.co.uk fixture entry: Aston Villa vs Liverpool, Fri May 15, 8pm BST kickoff, Villa Park, Sky Sports. Match moved off Sun May 17 to accommodate Villa's Europa League final vs Freiburg in Istanbul Wed May 20. Liverpool unbeaten in last 11 vs Villa (8W, 3D). Slot's side and Emery's in 'a straight shootout for fourth' per This Is Anfield Friday preview.",
      category: "matches",
    },
    {
      title: "Diomande 'Concrete Talks' — Reds' Top Salah-Successor Target At €86-100m (This Is Anfield, Apr / Liverpool.com, May 11)",
      detail:
        "This Is Anfield April piece still circulating Mon May 11: 'Diomande to Liverpool — Concrete talks for €100m Salah successor.' The 19-year-old Ivorian Leipzig winger has 22 goal contributions this season and Roc Nation agency contacted by Liverpool. Leipzig valuation ~£86m / $116m. Diomande remains the named priority over Anthony Gordon (Liverpool.com Sat reframe: Bayern now in pole on £73m+ Gordon as Reds may have cooled).",
      category: "transfers",
    },
    {
      title: "Adam Wharton 'Favours' Anfield Move — Liverpool in Advanced Talks at £80m (GiveMeSport / Liverpool.com, week of May 6)",
      detail:
        "GiveMeSport mid-week: 'Liverpool in advanced talks to sign Crystal Palace star Adam Wharton.' Liverpool.com follow-up: Wharton 'understood to favour a move to Liverpool over other interested clubs' (Man United, Real Madrid, Arsenal, City, Chelsea also tracking). Palace ask £80m. Curtis Jones' stalled contract talks (Inter, Newcastle, Villa monitoring) leave the midfield-rebuild slot open.",
      category: "transfers",
    },
  ],
  sources: [
    "Liverpool.com",
    "ESPN",
    "This Is Anfield",
    "Sky Sports",
    "Liverpool FC",
    "Empire of the Kop",
    "Goal.com",
    "FootballTransfers",
    "Anfield Index",
    "Caught Offside",
    "Opta Analyst",
    "AP / Washington Post",
    "Yahoo Sports",
    "GiveMeSport",
    "The National",
    "Premier League",
    "avfc.co.uk",
    "TNT Sports",
  ],
};

