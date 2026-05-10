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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "recovering", outSince: "2026-03-22", injuryNote: "Sun May 10 — Slot's post-Chelsea (1-1) line repeated overnight by Liverpool.com: Alisson is 'close' to a return and 'there is a chance' he and Salah feature for Aston Villa (A) Fri May 15. Missed his ninth consecutive PL match yesterday; not in the matchday squad. Off the pitch, Liverpool.com (Schira) and FootballTransfers still report 'agreed personal terms with Juventus' on a €5m-a-year deal; €15m fee mooted. Reds drawing up a five-keeper shortlist headed by Chevalier (PSG)", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 18, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.7, status: "fit", returningFromInjury: { matchesBackIncludingThis: 2 }, injuryNote: "Sun May 10 — started in goal vs Chelsea yesterday in the surprise early return Slot trailed Friday: beaten by Wes Fofana's deflection on Enzo Fernandez's 35' free-kick. 1-1 draw, no clean sheet but otherwise composed in his second senior PL outing of the run-in, displacing Woodman. Set to keep the gloves at Villa Park Fri May 15 with Alisson still building back up", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 42, goals: 4, assists: 1, cleanSheets: 11, xG: 2.8, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.1, status: "fit", injuryNote: "Sun May 10 — captained Liverpool through the 1-1 Chelsea draw at Anfield yesterday, pairing with Konaté for 90 minutes with no clean sheet to add. Booed at full-time alongside Slot per Sky Sports. Earlier-week ‘we are not kids — it's a city trip’ Slot defence still hangs over the captain. The Athletic (Apr 30) still reports him expected to leave end of 2026-27. Liverpool 4th on 65 pts, four clear of Bournemouth", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 39, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 6.9, status: "fit", injuryNote: "Sun May 10 — started alongside VVD in yesterday's 1-1 with Chelsea after the false-alarm scare (Slot confirmed Wednesday absence was 'a personal reason'). Solid 90 minutes; couldn't keep out Fofana's deflection of the Enzo Fernandez free-kick at 35'. Off the pitch the contract is still '50/50' per Crook (Apr 25) — Real Madrid in chase, Liverpool tracking Bastoni/Schlotterbeck/van Hecke shortlist", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
    physical: { height: 194, weight: 95, pace: 78, acceleration: 76, sprintSpeed: 80 },
    career: [
      { years: "2014-2017", club: "Sochaux", fee: null, type: "youth" },
      { years: "2017-2021", club: "RB Leipzig", fee: "€15M", type: "senior" },
      { years: "2021-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 18, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 6.2, status: "fit", injuryNote: "Sun May 10 — unused bench again in yesterday's 1-1 Chelsea Anfield draw, Slot riding the Konaté/VVD pairing through 90 minutes. Beukema's £24m link from TeamTalk Sat May 2 still a hint Hughes views Gomez as a likely summer departure", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 29, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 6.7, status: "fit", injuryNote: "Sun May 10 — restored to LB for yesterday's 1-1 Chelsea Anfield draw after the Kerkez Old Trafford reshuffle, but the back four leaked the Fofana-deflected equaliser at 35'. Tottenham agreement still summer-conditional on their PL fate — Liverpool linked with Dortmund's Daniel Svensson as the long-term LB heir", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
    physical: { height: 178, weight: 70, pace: 79, acceleration: 81, sprintSpeed: 77 },
    career: [
      { years: "2010-2013", club: "Queen's Park", fee: null, type: "senior" },
      { years: "2013-2014", club: "Dundee United", fee: "Free", type: "senior" },
      { years: "2014-2017", club: "Hull City", fee: "€3.4M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€9.3M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 37, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 7.0, status: "fit", injuryNote: "Sun May 10 — bench role yesterday vs Chelsea (1-1) with Robertson restored at LB; available off the pine if needed. Should be back in the rotation mix at Villa Park Fri May 15 as Slot manages legs through the final two PL games. Liverpool linked with Dortmund's Daniel Svensson long-term but Kerkez stays first-pick for now", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Sun May 10 — started yesterday's 1-1 Chelsea Anfield draw on the right side of the front three as Wirtz cover, with Curtis Jones again at RB. Modest outing; Slot's substitution carousel went elsewhere (Ngumoha hooked at 75' to Anfield boos). Should be retained at Villa Park Fri May 15 as makeshift attacker if Salah's recovery isn't complete", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 40, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 7.1, status: "fit", injuryNote: "Sun May 10 — completed 90 minutes in yesterday's 1-1 Chelsea Anfield draw, anchoring the midfield three with Gravenberch and Szoboszlai. Off-pitch the contract noise is louder: father/agent Carlos confirmed Thu May 7 'no contract talks have taken place — and won't until the season is over.' Real Madrid credited with interest. Set to start at Villa Park Fri May 15", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 40, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Sun May 10 — SCORED yesterday's 6th-minute opener vs Chelsea (1-1 Anfield draw): a curled finish off Rio Ngumoha's left-wing assist — 7/10 across This Is Anfield, Liverpool.com and Sky Sports' player-rating tables. Couldn't conjure a winner as the game faded. Locks midfield for Villa Park Fri May 15", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 47, goals: 12, assists: 8, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.7, status: "fit", injuryNote: "Sun May 10 — full 90 in yesterday's 1-1 Chelsea Anfield draw, drifting between right-mid and the No. 10 pocket as Wirtz absented with a stomach infection. Engine of the run-in; nailed-on for the Villa Park trip Fri May 15. Liverpool.com expects his contract extension 'in the near future'", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 26, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 7.4, status: "fit", injuryNote: "Sun May 10 — started at RB again in yesterday's 1-1 Chelsea Anfield draw and was 'hung out to dry' per Goal.com's player ratings as Cucurella found space down his side. Off-pitch the contract talks remain 'effectively ceased' (EOTK/Sky Sports Live) — Inter Milan, Aston Villa and Newcastle still in; Wharton (£80m Palace ask) the named replacement target", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 32, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.3, status: "doubtful", outSince: "2026-05-09", injuryNote: "Sun May 10 — ruled out of yesterday's 1-1 Chelsea Anfield draw with a stomach infection (AP/Washington Post/Yahoo Sports). Slot: 'He tried everything to be in it ... in the end things got worse and he wasn't able to train.' Ngumoha came in. Slot 'hopeful' Wirtz returns at Villa Park Fri May 15", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 37, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.2, status: "recovering", outSince: "2026-04-26", injuryNote: "Sun May 10 — Liverpool.com's morning round-up: Salah is 'close to coming back' and 'there is a chance' he features for Aston Villa (A) Fri May 15. Missed yesterday's 1-1 Chelsea draw — third consecutive game out with the Apr 25 Palace hamstring. The Brentford home finale May 24 still set as his Anfield farewell with Henderson returning in the away kit. TNT Sports Gerrard sit-down still circulating", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 38, goals: 9, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.2, status: "fit", injuryNote: "Sun May 10 — led the line as false 9 in yesterday's 1-1 Chelsea Anfield draw with Isak only fit for a bench cameo and Salah still hamstrung; Goal.com's verdict: 'Cody Gakpo goes missing.' 5-6/10 ratings; struggled to influence after Gravenberch's 6' opener. Should retain his shirt at Villa Park Fri May 15", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 18, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", returningFromInjury: { matchesBackIncludingThis: 1 }, injuryNote: "Sun May 10 — came off the bench in the second half of yesterday's 1-1 Chelsea Anfield draw, his first minutes since the Apr 25 Crystal Palace muscle issue. Couldn't find the winner, but confidence-builder ahead of Villa Park Fri May 15 where he's expected to start with Gakpo dropping back to the wing", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 12, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09"], injuryNote: "Sun May 10 — STARTED yesterday's 1-1 Chelsea Anfield draw and supplied the assist for Gravenberch's 6' opener. Liverpool.com headline: 'Rio Ngumoha stars.' Hooked at 75' with cramp; the substitution drew loud boos from the Anfield crowd. Slot post-match: 'He said it was enough.' Pushes for another start at Villa Park Fri May 15 if Salah isn't ready", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Sun May 10 — bench role yesterday in the 1-1 Chelsea Anfield draw and Slot turned to Isak and Kerkez first off the pine. Rotation winger option for Villa Park Fri May 15; April reporting still has the Italian likely to exit this summer", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Sun May 10 — back-up to Mamardashvili in yesterday's 1-1 Chelsea draw; unused. Two PL starts this season (Crystal Palace and Old Trafford), ratings 6-7. Serviceable cover for the run-in with Alisson 'close' to a return for Villa Park Fri May 15", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
  generatedAt: "2026-05-10T08:00:00Z",
  summary:
    "Sunday May 10 — MORNING AFTER. Liverpool DREW 1-1 with Chelsea at Anfield yesterday (Sat May 9) and the Champions League wait goes on, with boos ringing out at full-time as Slot's Reds dropped points at home for the EIGHTH time this season. Ryan Gravenberch's curled 6th-minute opener (assist Ngumoha) was cancelled out by Enzo Fernandez's 35' free-kick, deflected in via Wes Fofana. Slot — booed when he subbed Rio Ngumoha (cramp at 75') — admitted post-match he 'won't win Liverpool fans back this season' but is '100% convinced' the side will be different next year after 'the summer we're planning.' Florian Wirtz missed the squad entirely with a stomach infection (AP/Washington Post); Alexander Isak made it back from the bench in the second half. Liverpool now four points clear of 6th-place Bournemouth with two games left — Aston Villa (A) Friday May 15 8pm BST on Sky Sports, then Brentford (H) Sun May 24 (Salah farewell). A win at Villa Park OR a Bournemouth slip seals top-five. Anthony Gordon (£73m) emerged Fri-Sat as the headline summer attack target alongside Yan Diomande, with Newcastle confirmed open to talks (Liverpool, Bayern, Arsenal all in).",
  keyTopics: [
    {
      title: "Liverpool 1-1 Chelsea — Boos at Anfield as CL wait goes on (Sat May 9, full-time yesterday)",
      detail:
        "Played yesterday Sat May 9 12:30 BST at Anfield, reported across Sky Sports, ESPN, This Is Anfield and Liverpool.com last night: Gravenberch curled in inside six minutes with Rio Ngumoha's assist, but Wes Fofana deflected Enzo Fernandez's 35' free-kick past Mamardashvili to level it. Chelsea ended a six-match losing run; Liverpool dropped home points for the eighth time this season — a record-equalling tally per Empire of the Kop. Boos at full-time and at Slot's Ngumoha substitution. Liverpool's Champions League qualification still not mathematically sealed.",
      category: "matches",
    },
    {
      title: "Slot Admits He Won't Win Fans Back This Season — '100% Convinced' Next Year Will Be Different (Sky Sports, late Sat May 9)",
      detail:
        "Sky Sports / This Is Anfield post-match yesterday: Slot conceded he can't get fans onside this season after the Anfield boos, but is 'confident he'll win back trust after the summer transfer window.' On the Ngumoha substitution he explained 'he said it was enough' — the teenager had cramp three minutes earlier. Slot pushed his 'I am 100% convinced Liverpool will be a different team next year if we have the summer we're planning' line to multiple outlets late Saturday.",
      category: "general",
    },
    {
      title: "Wirtz Out With Stomach Infection — Misses Chelsea Squad Entirely (AP / Washington Post, Sat May 9)",
      detail:
        "Confirmed yesterday Sat May 9 by AP/Washington Post, This Is Anfield, Yahoo Sports, SI and Liverpool.com: Florian Wirtz missed the Chelsea matchday squad with what Slot described as 'an infection in the stomach.' 'He tried everything to be in it ... in the end things got worse,' Slot said. Rio Ngumoha came in as the third change of three. Wirtz will be reassessed for Aston Villa (A) Fri May 15 — Slot 'hopeful' he'll be back at Villa Park.",
      category: "injuries",
    },
    {
      title: "Isak Off the Bench, Mamardashvili Started — Slot's Confirmed XI vs Chelsea (Sat May 9)",
      detail:
        "Liverpool.com / This Is Anfield post-match yesterday: Mamardashvili kept his place after the surprise early return, with Konaté and Van Dijk in the centre — Slot's confirmed XI was Mamardashvili; Bradley/Jones, Konate, Van Dijk, Kerkez; Szoboszlai, Gravenberch, Mac Allister; Ngumoha, Gakpo, Frimpong (line per This Is Anfield/Liverpool.com player-rating tables). Alexander Isak was 'only fit enough to come off the bench in the second half' per Liverpool.com's injury round-up, his first minutes since the muscle issue.",
      category: "matches",
    },
    {
      title: "Champions League Maths After the Draw — Reds Need 1 Win From 2 (Liverpool.com, Sun May 10)",
      detail:
        "The National / Liverpool.com lead this morning Sun May 10: 'Liverpool's wait for Champions League spot continues after Chelsea draw.' Liverpool sit 4th on 65 pts after 36 games, four clear of 6th-place Bournemouth with two to play (Villa A May 15, Brentford H May 24). A win at Villa Park OR a Bournemouth slip vs Fulham seals top-five. Premier League's own race-for-Europe explainer this morning: Liverpool need 'a maximum of three more points' to qualify.",
      category: "matches",
    },
    {
      title: "Anthony Gordon Talks Open — Liverpool, Bayern, Arsenal All In (Liverpool.com / Caught Offside, Fri-Sat May 8-9)",
      detail:
        "Liverpool.com headline Fri May 8: 'Anthony Gordon contact made amid £73m boost.' Caught Offside Fri: 'Anthony Gordon transfer talks with Liverpool, Arsenal and Bayern.' Newcastle now expect Gordon will 'want to explore his options' and will listen to bids — initial ask is £73m+, possibly $88-100m with bonuses. Liverpool's stance, per Liverpool.com Sat: Gordon may favour a move abroad, putting Bayern in pole. Reds' interest dates back to a 2024 deal that fell through.",
      category: "transfers",
    },
    {
      title: "Salah and Alisson 'Close' for Villa Park — Possible Return Fri May 15 (Liverpool.com, Sun May 10)",
      detail:
        "Liverpool.com injury round-up published Sun May 10 morning: both Mohamed Salah and Alisson Becker are 'close to coming back' and 'there is a chance the pair could return for Aston Villa' on Fri May 15. Slot reiterated post-Chelsea that the duo were not risked as a precaution. Salah's hamstring (suffered vs Crystal Palace Apr 25) and Alisson's hamstring (out since Mar 22) both targeting the Villa Park trip ahead of Salah's projected Brentford home farewell May 24.",
      category: "injuries",
    },
    {
      title: "Aston Villa (A) Friday May 15 8pm BST — Sky Sports (Read Aston Villa, Fri May 8)",
      detail:
        "Read Aston Villa / This Is Anfield Fri May 8: the Premier League officially moved the Villa Park trip to Friday May 15, 8pm BST (Sky Sports), off Sunday May 17 — Villa face Freiburg in the Europa League final on Wed May 20 in Istanbul. With United comfortably 3rd, Slot's side and Emery's are 'in a straight shootout for fourth' per the same piece. Three points seals Champions League and provides the perfect platform heading into the Brentford finale.",
      category: "matches",
    },
    {
      title: "Yan Diomande (€100m Leipzig) Still Top Summer Attack Priority (Sports Mole, Fri May 8)",
      detail:
        "Sports Mole headline Fri May 8 still standing on Sun May 10: 'Five signings Liverpool could make as £85m winger becomes top summer priority.' The 19-year-old Ivorian RB Leipzig winger sits alongside Anthony Gordon and Bradley Barcola on Hughes's named wide-attack shortlist following Salah's confirmed exit. TeamTalk Fri also flagged Porto's Victor Froholdt as the new £85m midfield target.",
      category: "transfers",
    },
    {
      title: "Mac Allister's Father Declines Liverpool Talks — Real Madrid Lurking (This Is Anfield, Thu May 7)",
      detail:
        "This Is Anfield headline Thu May 7, still in circulation Sat May 9: Carlos Mac Allister (Alexis's father and agent) confirmed no contract talks have taken place — 'No talks will take place during the season, the fans deserve commitment.' The midfielder enters the final two years of his deal this summer. Real Madrid credited with interest; Gravenberch already signed long-term, Szoboszlai's extension 'expected in the near future.'",
      category: "transfers",
    },
    {
      title: "Curtis Jones Contract Talks 'Stalling' — Summer Exit Looms (TIA / Sky Sports, Wed-Sat May 6-9)",
      detail:
        "This Is Anfield's homegrown-targets piece this morning Sun May 10 still flags Curtis Jones as a likely summer departure 'as talks over new deal have been stalling for months.' Sky Sports' Liverpool transfer live blog has Inter Milan, Aston Villa and Newcastle all monitoring. Adam Wharton (Crystal Palace, £80m ask) remains the named midfield-rebuild target — Liverpool 'in advanced talks' per Liverpool.com.",
      category: "transfers",
    },
    {
      title: "Salah's Anfield Farewell — Brentford (H) Sun May 24 (Sky Sports, Apr 25)",
      detail:
        "Reaffirmed in this morning's Liverpool.com round-up Sun May 10: Mohamed Salah 'is expected to make his final appearance at Anfield' on the last day of the Premier League season vs Brentford on May 24. The 33-year-old leaves with 255 goals in 435 appearances, third only to Rush and Hunt on the Anfield scoring list. Salah's TNT Sports interview last week confirmed he'll 'return to the pitch before the farewell match.'",
      category: "general",
    },
  ],
  sources: [
    "Sky Sports",
    "Liverpool FC",
    "Liverpool.com",
    "This Is Anfield",
    "Empire of the Kop",
    "Goal.com",
    "ESPN",
    "AP / Washington Post",
    "Yahoo Sports",
    "SI",
    "The National",
    "Sports Mole",
    "Caught Offside",
    "Read Aston Villa",
    "Premier League",
    "TeamTalk",
    "TNT Sports",
    "FOX Sports",
    "Football365",
    "Anfield Watch",
  ],
};

