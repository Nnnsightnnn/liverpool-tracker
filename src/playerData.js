// ─── Liverpool FC Player Data (2025-26 Season · Updated May 24, 2026) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Tue May 26 — saga flipped: Fabrizio Romano reports Liverpool have told the Brazilian directly they want him to stay, and the Juventus move (personal terms agreed at €5m/yr on a €15m deal) is now reported to be off the table, the call shifted back to the player. Brazil's No. 1 for the 2026 World Cup", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Tue May 26 — shuffled back in the queue: with Liverpool now actively asking Alisson to stay, the Georgian's path to the No. 1 shirt has lengthened again. Reports say the club's longer-term preference remains Porto's Diogo Costa (€60m release clause), and Liverpool are not yet ready to hand him the gloves outright", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Mon May 25 — season over: the captain closes a hard campaign with his own standards intact, under contract to June 2027. He will be central both to the end-of-season review and to whatever shape the summer rebuild takes around him", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 40, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 6.4, status: "fit", injuryNote: "Tue May 26 — drifting toward yes: the Frenchman, contract running to 2027, told reporters 'there's a good chance I'll still be here next season — I'm just waiting for everything to be completed.' Real Madrid have cooled their pursuit; Konaté wants the question settled before the World Cup", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png",
    physical: { height: 194, weight: 95, pace: 78, acceleration: 76, sprintSpeed: 80 },
    career: [
      { years: "2014-2017", club: "Sochaux", fee: null, type: "youth" },
      { years: "2017-2021", club: "RB Leipzig", fee: "€15M", type: "senior" },
      { years: "2021-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Mon May 25 — season over: an injury-hit, peripheral campaign for the 29-year-old, whose Liverpool future is among the quieter questions of the summer review", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 30, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 6.7, status: "fit", injuryNote: "Tue May 26 — Spurs move 'agreed on everything' (Romano): with Tottenham's survival sealed, Roberto De Zerbi's appointment as head coach has accelerated the free transfer, and Ben Jacobs reports the Scotland captain wanted clarity on the project — and got it. Paperwork only now", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png",
    physical: { height: 178, weight: 70, pace: 79, acceleration: 81, sprintSpeed: 77 },
    career: [
      { years: "2010-2013", club: "Queen's Park", fee: null, type: "senior" },
      { years: "2013-2014", club: "Dundee United", fee: "Free", type: "senior" },
      { years: "2014-2017", club: "Hull City", fee: "€3.4M", type: "senior" },
      { years: "2017-", club: "Liverpool", fee: "€9.3M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Mon May 25 — season over: a difficult first season after his £45m move, the Hungarian drawing criticism for an uneasy adaptation at left-back. With Robertson gone, the left-back job is now unambiguously his to hold", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Mon May 25 — knee surgery in January ended his season early; now targeting a return to full training in pre-season", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Mon May 25 — season over: a stop-start debut campaign disrupted by muscular problems, the latest of which cost him Sunday's finale. A full, uninterrupted pre-season is the priority before the 2026-27 push", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 33, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Mon May 25 — torn ACL last September; the long rehabilitation continues, with a return targeted for the 2026-27 season", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Mon May 25 — season over: ends the year as a key midfielder, but with contract talks reported to have stalled and Real Madrid credited with interest — a negotiation the summer review will need to resolve", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Mon May 25 — season over: Liverpool's most consistent midfielder across a turbulent campaign, and an obvious building block for whatever the summer's decisions construct next", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 48, goals: 12, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.3, status: "fit", injuryNote: "Mon May 25 — season over: closes a heavy-minutes season of 48 appearances as a midfield mainstay; a contract extension is still expected to be agreed over the summer", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 28, goals: 2, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 6.9, status: "fit", injuryNote: "Tue May 26 — two sentences, one player: Inter Milan have returned with concrete intent (a £35m switch mooted, Aston Villa snubbed in favour of Serie A), and contract talks at Anfield are shelved. Yet after Sunday's finale he told All Red Video he's 'excited [for] next season — we can put everything behind us and just go and enjoy it'", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png",
    physical: { height: 182, weight: 74, pace: 72, acceleration: 74, sprintSpeed: 70 },
    career: [
      { years: "2010-2019", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2019-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "injured", outSince: "2026-02-12", injuryNote: "Mon May 25 — ankle surgery in February ended his season; now focused on proving his fitness for Japan's 2026 World Cup squad", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Mon May 25 — season over: an injury-disrupted, awkward first season at Liverpool — the £115m playmaker shared just 117 minutes on the pitch with Isak and Ekitike all year. A clean pre-season is everything now", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 19, name: "Stefan Bajcetic", number: 43, position: "MID", nationality: "🇪🇸 Spain", age: 21, appearances: 0, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-08-01", injuryNote: "Mon May 25 — recurring hamstring trouble cost him the entire 2025-26 season; a make-or-break summer lies ahead", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p535928.png",
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
    id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 39, goals: 10, assists: 10, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.0, status: "fit", injuryNote: "Tue May 26 — the parting speech surfaces: at Kirkby on Sunday morning, Salah told his team-mates 'this is the best club in the world when you win something and the worst when you lose. So you better win next year.' Of his own goodbye: 'I cried more than in my whole life.' His next club — Al-Ittihad cast as favourite, Fenerbahce and a European option still live — expected in days", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 39, goals: 9, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 6.8, status: "fit", injuryNote: "Mon May 25 — season over: a quiet, muted end to the campaign, and reports suggest FSG would consider a sale if the right offer arrives in a summer of attacking reconstruction", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 18, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Mon May 25 — season over: an injury-wrecked debut season — a string of setbacks limited the £100m striker to a handful of starts and never let Slot's intended front three settle. A full summer to reset", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Mon May 25 — ruptured Achilles (April 14 vs PSG): the scan confirmed a 9-12 month absence, ruling him out of the rest of 2025-26 and France's 2026 World Cup", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Mon May 25 — season over: one of the few bright notes of a hard campaign, the 17-year-old emerging as a genuine first-team option and central to Liverpool's thinking as the attack is rebuilt", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Mon May 25 — season over: a bit-part year for the Italian, who features prominently on summer clear-out lists — an exit looks the likeliest outcome", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Mon May 25 — season over: third-choice goalkeeper across the campaign, with two Premier League starts. A dependable squad option as the goalkeeping picture is reviewed", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
  "Leeds":          "https://resources.premierleague.com/premierleague/badges/50/t2.png",
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
  opponent: "Sunderland",
  shortName: "SUN",
  home: false,
  date: "2026-07-25T23:00:00",
  competition: "PSF",
  venue: "Geodis Park, Nashville",
  broadcast: "LFCTV GO",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
  { date: "2026-05-24", opponent: "Brentford",          home: true,  score: "1-1", competition: "PL", result: "D", scorers: "Jones 58'" },
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
// Last refresh: 2026-05-26 — FINAL 20-team table, 2025-26 season complete (MW38).
export const STANDINGS = [
  { pos: 1, team: "Arsenal", p: 38, w: 26, d: 7, l: 5, gd: 44, pts: 85, qualification: "UCL" },
  { pos: 2, team: "Manchester City", p: 38, w: 23, d: 9, l: 6, gd: 42, pts: 78, qualification: "UCL" },
  { pos: 3, team: "Manchester United", p: 38, w: 20, d: 11, l: 7, gd: 19, pts: 71, qualification: "UCL" },
  { pos: 4, team: "Aston Villa", p: 38, w: 19, d: 8, l: 11, gd: 7, pts: 65, qualification: "UCL" },
  { pos: 5, team: "Liverpool", p: 38, w: 17, d: 9, l: 12, gd: 10, pts: 60, qualification: "UCL", highlight: true },
  { pos: 6, team: "Bournemouth", p: 38, w: 13, d: 18, l: 7, gd: 4, pts: 57, qualification: "UEL" },
  { pos: 7, team: "Sunderland", p: 38, w: 14, d: 12, l: 12, gd: -6, pts: 54, qualification: "UEL" },
  { pos: 8, team: "Brighton", p: 38, w: 14, d: 11, l: 13, gd: 6, pts: 53, qualification: "UECL" },
  { pos: 9, team: "Brentford", p: 38, w: 14, d: 11, l: 13, gd: 3, pts: 53 },
  { pos: 10, team: "Chelsea", p: 38, w: 14, d: 10, l: 14, gd: 6, pts: 52 },
  { pos: 11, team: "Fulham", p: 38, w: 15, d: 7, l: 16, gd: -4, pts: 52 },
  { pos: 12, team: "Newcastle", p: 38, w: 14, d: 7, l: 17, gd: -2, pts: 49 },
  { pos: 13, team: "Everton", p: 38, w: 13, d: 10, l: 15, gd: -3, pts: 49 },
  { pos: 14, team: "Leeds", p: 38, w: 11, d: 14, l: 13, gd: -7, pts: 47 },
  { pos: 15, team: "Crystal Palace", p: 38, w: 11, d: 12, l: 15, gd: -10, pts: 45 },
  { pos: 16, team: "Nott'm Forest", p: 38, w: 11, d: 11, l: 16, gd: -3, pts: 44 },
  { pos: 17, team: "Tottenham", p: 38, w: 10, d: 11, l: 17, gd: -9, pts: 41 },
  { pos: 18, team: "West Ham", p: 38, w: 10, d: 9, l: 19, gd: -19, pts: 39, qualification: "REL" },
  { pos: 19, team: "Burnley", p: 38, w: 4, d: 10, l: 24, gd: -37, pts: 22, qualification: "REL" },
  { pos: 20, team: "Wolves", p: 38, w: 3, d: 11, l: 24, gd: -41, pts: 20, qualification: "REL" },
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
  matchweek: 38,
  generatedAt: "2026-05-26T09:00:00Z",
  overview:
    "Two days on, the final table reads as a verdict on what the season actually was. Liverpool's fifth on sixty points stands as the headline: a Champions League place earned by a single point against Brentford, twenty-five points behind the team that took the trophy a year after the Reds themselves did. Arsenal — eighty-five points, a first title since 2003-04 — became the first English champion since 2017 to do it without a domestic cup. Manchester City's drift to a distant second, Manchester United's quiet third under Amorim, and Aston Villa's hold on fourth complete the automatic Champions League quartet. Beneath the line, Bournemouth and a remarkable promotion-season Sunderland take Europa football, Brighton the Conference play-off; at the floor, West Ham's late surge to 3-0 at Leeds came on the same afternoon João Palhinha kept Tottenham up, sending the Hammers down with Burnley and Wolves — and arriving at Spurs is Andy Robertson, on a free.",
  teams: {
    "Arsenal": "Champions — 85 points, the first English title-winner since 2017 to do it without lifting a domestic cup.",
    "Manchester City": "Second on 78 — back in the Champions League, but never within touching distance of Arsenal.",
    "Manchester United": "Third on 71 — the season's quiet success, Amorim's first full year delivering a return to Europe's top tier.",
    "Aston Villa": "Fourth on 65 — Emery secures the last automatic UCL berth; the 4-2 over Liverpool on May 15 the night that sealed it.",
    "Liverpool": "Fifth on 60 — Sunday's 1-1 with Brentford locked in the Champions League. A title defence finishing 25 points adrift; an end-of-season review now in motion.",
    "Bournemouth": "Sixth and Europa League — Iraola's overachievement complete, even as his name is kept warm at Anfield.",
    "Sunderland": "Seventh and into Europe in their promotion season — 54 points and the story of the bottom half.",
    "Brighton": "Eighth — a Conference League play-off place keeps Brighton in Europe for a third straight summer.",
    "Brentford": "Ninth on 53 — the draw at Anfield left the Bees out of Europe for the first time in their history.",
    "Tottenham": "Survived in 17th — Palhinha's goal beat Everton; De Zerbi arrives as head coach, Andy Robertson on a free.",
    "West Ham": "Relegated in 18th — a 3-0 win at Leeds not enough; down to the Championship for the first time since 2012.",
    "Burnley": "Relegated weeks ago — 22 points and an immediate return to the Championship.",
    "Wolves": "Bottom on 20 — comfortably the season's worst side, relegated by a distance.",
  },
};

// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Alisson's Suitcase, Half-Unpacked.",
    byline: "Fabrizio Romano / Liverpool.com / Sky Sports",
    dateline: "Liverpool · 26 May",
    category: "Transfers",
    body: "By Tuesday morning the goalkeeper saga had bent the other way. Liverpool, Fabrizio Romano reports, have told Alisson Becker directly that they would like him to stay — and a Juventus move that had felt structurally agreed (personal terms at five million a year, a fifteen-million fee) is now reported off the table. The Brazilian was only ever leaving with the club's blessing; the blessing has not come. Giorgi Mamardashvili shuffles back into the queue, Porto's Diogo Costa back into the long file. For the first time this summer a star Liverpool feared losing might simply stay.",
  },
  {
    n: "02",
    headline: "A Sixteen-Year-Old, A Release Clause, A Plan.",
    byline: "This Is Anfield / TEAMtalk / Get German Football News",
    dateline: "Berlin → Liverpool · 25 May",
    category: "Transfers",
    body: "Florian Plettenberg broke it Monday and the day did not let go: Liverpool are in 'concrete talks' for Kennet Eichhorn, the sixteen-year-old Hertha Berlin defensive midfielder with a twelve-million-euro release clause and nineteen 2.Bundesliga appearances already in his pocket. The comparisons reach for Toni Kroos. The pitch from Anfield includes a written career plan — sign now, loan out for a season or two, return ready. Manchester City, Bayern and Leverkusen are circling. The Reds, the reporting goes, are the one club Eichhorn has dreamed of joining.",
  },
  {
    n: "03",
    headline: "'The Best Club, And The Worst.'",
    byline: "Goal.com / The National / beIN Sports",
    dateline: "Kirkby · 24 May",
    category: "Farewells",
    body: "He had said his goodbye on the pitch; the speech that surfaced after the weekend was the one he gave inside. At the training ground on Sunday morning, alongside Andy Robertson, Mohamed Salah told his team-mates: 'This is the best club in the world when you win something, and the worst club in the world when you lose. So you better win next year.' Of his own ninety minutes he said simply that he had cried more than in his whole life, and that what marked him most, in the end, was the affection of the fans. He left a sentence in the room for them to carry.",
  },
  {
    n: "04",
    headline: "Konaté, And A Drift Toward Yes.",
    byline: "Goal / FOX Sports / Liverpool.com",
    dateline: "Liverpool · 25 May",
    category: "Football News",
    body: "Tucked inside the louder stories, Ibrahima Konaté has drifted, quietly, toward staying. The Frenchman — contract running to June 2027, Real Madrid waiting for two years — told reporters after the Everton derby that 'there's a good chance I'll still be here next season,' adding that he is just waiting for everything to be completed. Real have cooled their interest in recent months. Konaté wants the question settled before the World Cup. One of the central calls of Liverpool's summer, in the Salah-Robertson aftermath, may now turn out to be the easy one.",
  },
  {
    n: "05",
    headline: "Curtis Jones, Excited And Open.",
    byline: "This Is Anfield / Liverpool.com / TEAMtalk",
    dateline: "Liverpool · 26 May",
    category: "Transfers",
    body: "Two sentences, by two people who happen to be the same person. Inter Milan have returned for Curtis Jones — contract talks at Anfield shelved, a £35m switch mooted, Aston Villa snubbed in favour of San Siro. And yet on Sunday, immediately after the Brentford draw, the academy graduate told All Red Video he is 'excited [for] next season — it should be great, we can put everything behind us and just go and enjoy it.' He scored Liverpool's goal in the finale. He may or may not be its right-back come August. Both lines, for now, are true.",
  },
];

// ─── AI News Digest (generated via Claude + Perplexity) ─────────────────────
export const NEWS_DIGEST = {
  generatedAt: "2026-05-26T09:00:00Z",
  summary:
    "Tuesday, May 26 — and the first big tremor of the post-season is at the back. Fabrizio Romano reports Liverpool have told Alisson Becker directly that they want him to stay, with the Juventus move — personal terms long agreed at €5m a year — now off the table, the call shifted back to the player. The shift puts the No. 1 shirt back on Alisson's foot and leaves Giorgi Mamardashvili and Porto's Diogo Costa in a longer queue. Around it the rebuild keeps moving: Liverpool are in 'concrete talks' for Hertha Berlin's sixteen-year-old defensive midfielder Kennet Eichhorn — €12m release clause, Toni Kroos comparisons; Ibrahima Konaté has hinted he will sign on, telling reporters there is 'a good chance' he stays; and Curtis Jones, contract talks shelved, is open to Inter Milan even as he told All Red Video on Sunday he is 'excited' for next season. Mohamed Salah's farewell speech to the dressing room — 'the best club in the world when you win, the worst when you lose; so you better win next year' — frames the summer the review will now begin.",
  keyTopics: [
    {
      title: "Alisson Stays? Liverpool Tell The Brazilian Directly They Want Him To Remain (Fabrizio Romano / Liverpool.com / Football365, reported Tue May 26)",
      detail:
        "The morning's biggest story: Fabrizio Romano reports Liverpool have told Alisson Becker this week that they would like him to stay for a further season. Juventus had personal terms agreed (€5m/year over two years plus an option) on a €15m deal; the call now sits with the player. Coverage frames Alisson as having only ever considered leaving if Liverpool waved him off, and the club has not.",
      category: "transfers",
    },
    {
      title: "'Concrete Talks' For A Sixteen-Year-Old: Kennet Eichhorn Enters The Picture (This Is Anfield / TEAMtalk / Get German Football News, reported Mon-Tue May 25-26)",
      detail:
        "Florian Plettenberg, the German transfer reporter, broke 'concrete talks' between Liverpool and Hertha Berlin for sixteen-year-old defensive midfielder Kennet Eichhorn — a €12m release clause, nineteen 2.Bundesliga starts already, and comparisons to Toni Kroos. The pitch to the player includes a career plan with a loan-out for one or two years; Manchester City, Bayern Munich and Leverkusen are circling.",
      category: "transfers",
    },
    {
      title: "Salah's Parting Words To The Dressing Room (Goal.com / The National / beIN Sports, surfaced Mon-Tue May 25-26)",
      detail:
        "The line emerging from Sunday's pre-match presentation at the training ground: Mohamed Salah, addressing his team-mates alongside Andy Robertson, told them 'this is the best club in the world when you win something and the worst club in the world when you lose. So you better win next year.' Of the goodbye itself he said: 'I cried a lot — more than in my whole life. The affection of the fans is what matters most to me.'",
      category: "general",
    },
    {
      title: "'A Good Chance I'll Still Be Here Next Season' — Konaté Hints At Staying (Goal / FOX Sports / Liverpool.com, reported this week)",
      detail:
        "Ibrahima Konaté, contract running down to June 2027, has indicated a deal is close. After the Everton derby earlier this month he told reporters 'there's a good chance I'll still be here next season — I'm just waiting for everything to be completed.' Real Madrid have cooled their pursuit; the Frenchman wants the question resolved before the 2026 World Cup.",
      category: "transfers",
    },
    {
      title: "Curtis Jones, Inter Milan And A Sunday Hint (This Is Anfield / Liverpool.com / TEAMtalk, reported Mon-Tue May 25-26)",
      detail:
        "Inter Milan have returned for Curtis Jones, with the academy graduate's contract talks shelved and his current deal running just over a year. Aston Villa have been snubbed; a £35m switch is mooted. Yet on Sunday, the midfielder told All Red Video he is 'excited [for] next season — it should be great, we can put everything behind us.' Both sides of that sentence will need to find each other in June.",
      category: "transfers",
    },
    {
      title: "Robertson To Spurs: De Zerbi's Arrival Accelerates Everything (Sky Sports / Tothelaneandback / Anfield Central, reported Mon-Tue May 25-26)",
      detail:
        "With Tottenham's survival sealed on the final day, Andy Robertson's free transfer to north London is, in Fabrizio Romano's phrase, 'agreed on everything.' Roberto De Zerbi's appointment as Spurs head coach has accelerated the process; Ben Jacobs reports the Scotland captain wanted clarity on the new project before signing, and got it.",
      category: "transfers",
    },
    {
      title: "Diomande's Twist: 'Yes' To Staying At Leipzig (Kicker / Caught Offside / This Is Anfield, reported Mon May 25)",
      detail:
        "A complication for the Salah-replacement search: Yan Diomande, asked by Kicker whether he would stay at RB Leipzig next season, answered 'Yes.' Liverpool are said to have a bid worth around €120m on the table, with PSG monitoring; Bayern are also reported to be preparing a serious offer. The signal from the player himself is the new wrinkle the rebuild must read.",
      category: "transfers",
    },
    {
      title: "Reijnen On The Brink: Slot's Feyenoord Set-Piece Coach To Be Confirmed (This Is Anfield / Football365 / Anfield Watch, reported this week)",
      detail:
        "Etienne Reijnen, the 39-year-old former centre-back who worked with Arne Slot at Feyenoord, is set to be confirmed as Liverpool's new set-piece coach shortly after the season's official close. A UK work permit, the obstacle that blocked an earlier move, has now been resolved; he replaces Aaron Briggs, whose departure in December left the gap.",
      category: "general",
    },
    {
      title: "A Celtic Raid Confirmed: Dara Jikiemi Joins July 1 (This Is Anfield / GiveMeSport / OneFootball, reported through this week)",
      detail:
        "Liverpool's academy-pipeline work continues: sixteen-year-old Dara Jikiemi, a Scotland youth captain and Celtic centre-back, formally joins on July 1 after rejecting a three-year Parkhead deal. Capable in midfield as well as defence, he agrees a scholarship with a professional contract triggered when he turns seventeen in January.",
      category: "general",
    },
    {
      title: "Slot Survives The First Cut — Iraola Held In Reserve (Tribuna / Football365 / TEAMtalk, reported through this week)",
      detail:
        "FSG's posture, per the latest round of reporting, is that Champions League qualification was the line Slot needed to clear, and he cleared it. The end-of-season review proceeds with him in post; Andoni Iraola's name is kept warm in case the meeting reaches a different conclusion. Slot, asked about the noise, says he has no doubt the club will be back on track.",
      category: "general",
    },
  ],
  sources: [
    "Fabrizio Romano",
    "Liverpool.com",
    "Football365",
    "This Is Anfield",
    "TEAMtalk",
    "Get German Football News",
    "Goal.com",
    "The National",
    "beIN Sports",
    "Goal",
    "FOX Sports",
    "Sky Sports",
    "Tothelaneandback",
    "Anfield Central",
    "Kicker",
    "Caught Offside",
    "Anfield Watch",
    "GiveMeSport",
    "OneFootball",
    "Tribuna",
  ],
};

