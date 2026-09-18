// ─── Liverpool FC Player Data (2026-27 Season · Updated 12 September 2026 (evening)) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Fri Sep 18, morning - two days out, and the goal is his again by Sunday. Alisson trained through Thursday's session in a twenty-five-man group with no new injuries reported, and Iraola's team news at half past one this afternoon is expected to restore him after Mamardashvili took the cup tie. Five competitive starts, every minute, one clean sheet, the goalless afternoon against Fulham. The Vitality sends a side that has scored first in all four league games and closed out none of them.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Fri Sep 18, morning - a night that has already done its work, and a queue that has not changed. Mamardashvili's late save held the cup tie at 2-1 and his reward is the bench again, Alisson restored for the league. Thursday's session at the AXA carried no new injuries and a twenty-five-man group, so the order is what it was. The gap between the two keepers is now evidenced rather than assumed, which is the only thing a deputy can bank.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Fri Sep 18, morning - back among the group in the week, and expected back in the side on Sunday. This Is Anfield's training pictures placed Van Dijk alongside Wirtz and Tsimikas after the night Iraola gave the three of them for the cup, and Empire of the Kop pencil him beside Jacquet at the Vitality. He has played every league minute at thirty-five, because for seven weeks there was no fourth centre-back. The contract question is unchanged: no talks before 2027, no decision before April.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Fri Sep 18, morning - a bench seat, by every reading of the team news to come. Gomez came through Thursday's session with no fresh problem, and the previews put him among the substitutes at the Vitality rather than in the XI, a controlled step on from forty-five planned minutes and the armband against Tottenham. He is a fourth senior centre-back and a third right-back in one body, cover the squad values while Bradley's knee keeps him out to late November.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Fri Sep 18, morning - still second in a two-man argument nobody has won. Squawka's preview keeps Tsimikas at left-back for Sunday; Kerkez, who replaced him at half-time against Fulham and drew a 5 from Rousing The Kop, remains the alternative. Both trained on Thursday in a group of twenty-five with no new injuries reported. Bournemouth's danger runs at the opposite flank, which buys the position a week rather than settling it.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Fri Sep 18, morning - the ball work goes on, and the date does not come forward for it. Bradley is training individually eight months on from the knee injury at Arsenal, per Lewis Steele, with Sports Mole still pencilling Manchester United on 21 November as the earliest. He was outside Thursday's twenty-five. Until he is back, Sunday's right-back is Araujo out of position, and Bournemouth's clearest route to goal runs straight at that seam.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Fri Sep 18, morning - three imperfect answers at right-back, and the previews keep choosing one of the others. Frimpong trained on Thursday and played the position in the cup, but Empire of the Kop expect Araujo restored at the Vitality. The Dutchman is the alternative in a department with no specialist starter until Bradley returns. A back three would use him properly, and Iraola has not played one this season.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Fri Sep 18, morning - the next marker is the international break, not a matchday. Leoni is stepping up his ACL rehabilitation per Lewis Steele, with Iraola's plan to have him training with the group over the fortnight ahead and Sports Mole pencilling availability around 14 October. He was not among Thursday's twenty-five. His is the return that turns a two-man centre-back rota back into a selection, and the one the January sale of Endo quietly leans on.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Fri Sep 18, morning - the least debated name on Sunday's team sheet. Jacquet trained with the group on Thursday and is expected beside Van Dijk at the Vitality, three days after replacing Gomez at the interval and snuffing out the break that followed a Gravenberch giveaway. Before that, the goal-line clearance at Fulham that both ratings cards made the act of the afternoon. Against runners rather than a target man, his recovery pace is the whole point.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Fri Sep 18, morning - Spain, and nothing here reaches him. Ndukwe is on loan at Levante for the season, outside the Champions League squad and outside Thursday's twenty-five at the AXA. Neither Sunday's preview nor the day's reporting on who Liverpool intend to sell in January involves him.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 32, name: "Kostas Tsimikas", number: 21, position: "DEF", nationality: "🇬🇷 Greece", age: 30, appearances: 6, goals: 0, assists: 1, cleanSheets: 1, xG: 0.2, tacklesPer90: 1.7, passCompletion: 79, progressiveCarries: 3.1, form: 5.8, status: "fit", injuryNote: "Fri Sep 18, morning - back in the group, and still the preview's pick over the ratings' objection. This Is Anfield place Tsimikas among the twenty-five who trained on Thursday after his night off, and Squawka predict him at left-back on Sunday. The Fulham evidence is unhelpful: 11 of 31 passes misplaced and a half-time withdrawal. Two senior left-backs, neither yet at Iraola's standard, and a market shut until January.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png",
    physical: { height: 178, weight: 76, pace: 79, acceleration: 80, sprintSpeed: 78 },
    career: [
      { years: "2017-2020", club: "Olympiacos", fee: null, type: "senior" },
      { years: "2020-", club: "Liverpool", fee: "€13M", type: "senior" },
      { years: "2025-26", club: "Roma", fee: null, type: "loan" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Fri Sep 18, morning - named by his own manager as one of the reasons another midfielder is being sold. Explaining Endo's position on Thursday, Iraola listed the players taking the minutes: Nyoni, Gravenberch, Mac Allister, Szoboszlai. The Argentine has two goals in three competitive games, both struck first time from around the edge of the box after arriving beyond the midfield line. He is the one senior midfielder nobody is arguing about.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Fri Sep 18, morning - in the manager's list of those getting minutes, which is its own verdict on the hour he had. Iraola named Gravenberch among the four ahead of Endo on Thursday, three days after a cup cameo the Transfer Hub's passing networks marked down for loose touches and a declined one-two that became a Tottenham counter. His duels and interceptions were better. Bournemouth force turnovers in midfield by design, which makes Sunday the more literal test.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Fri Sep 18, morning - a starter on Sunday, and the man whose thirty-five-yard volley settled the cup. Szoboszlai trained on Thursday and is undisputed in the XI Squawka publish for the Vitality. His own read of Tuesday looked past himself, naming Lewis Koumas and James McConnell as two who deserve to play; the Transfer Hub's shot map valued his stoppage-time strike at 0.03 expected goals, which is another way of saying he made something out of nothing.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Fri Sep 18, morning - available at the Vitality, and gone by the winter. The reporting that FSG will sanction a January exit hardened through Thursday and stands into Friday: the last window a fee is recoverable on a 2027 deal, with Ben Jacobs's reading that 'Iraola clearly doesn't fancy him'. Iraola's own account is that four midfielders sit in front of him, Nyoni, Gravenberch, Mac Allister and Szoboszlai, though 'Wata is definitely a player that I like'. One appearance this season, in the cup, none in the league, and a role as emergency fifth centre-back that expires with him.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Fri Sep 18, morning - Bournemouth first, then a fortnight with the manager who used to pick him. Wirtz trained on Thursday and starts on Sunday still chasing a first goal or assist of the season in five competitive games; over the break Jurgen Klopp's first Germany squads, forty-four names split in two, have him among the midfielders and likely limited to two of four Nations League fixtures. The defence behind him has conceded seven in four, which is the number Sunday is really about.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 19, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Fri Sep 18, morning - nineteen, and named by his own manager ahead of a national-team captain. Explaining Endo's exit, Iraola listed Nyoni first among the midfielders taking minutes, days on from a cup start with 95 per cent passing, three of four ground duels and ten defensive actions attempted. The contract is still unsigned, a summer Nottingham Forest bid rejected, and This Is Anfield report a new deal in prospect.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Fri Sep 18, morning - the versatility that has become the plan, back on the flank for Sunday. Gakpo trained among the twenty-five and can fill left, centre or right, which in a front line with one senior nine has stopped being a luxury. Two goals and three assists in five, the most recent lashed in against Tottenham with Isak rested; Isak returns at the Vitality and the middle goes back to him, with Gakpo shifting wide.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Fri Sep 18, morning - restored through the middle for the league, with the service still the argument rather than the finishing. Isak trained on Thursday and returns at the Vitality after a cup rest, three league goals in four and Squawka's likeliest scorer on Sunday. The figure that frames the autumn is sixteen touches against Fulham, the second fewest for a Liverpool outfielder on record per the BBC. Bournemouth have shipped seven in four and defend higher than Fulham did, which ought to give him more of the ball.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Fri Sep 18, morning - absent from the one department Thursday did not describe as crowded. Iraola spent the day listing four midfielders ahead of Endo; the forward line has no such queue. Ekitike's Achilles rupture and surgery leave January the earliest realistic return, the club's own hope being the last two Champions League league-phase games, Inter on 19 January and Lens on 27 January per This Is Anfield. Until then Isak is the only senior nine, with Gakpo and Koumas the cover.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Fri Sep 18, morning - the signature the club wants finished before October. Liverpool regard the eighteen-year-old as a future world-beater, intend to have a new long-term deal agreed inside a month and will hear no offers, though David Ornstein's line stays the careful one: nothing is signed as things stand, and Arsenal and Bayern Munich are admirers. He is the keep on the day the sell was decided, and, in the phrase doing the rounds, there is no suggestion the boy is anything but happy at Anfield.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 31, name: "Lewis Koumas", number: 67, position: "FWD", nationality: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.3, passCompletion: 77, progressiveCarries: 1.8, form: 6.3, status: "fit", injuryNote: "Fri Sep 18, morning - praised by a senior international, which is a better week than most twenty-year-olds get. Szoboszlai named Koumas and James McConnell as the two who deserve to play after Tuesday, singling out the Welshman's timing and saying both had made the choice 'hard' for Iraola. Koumas took a first competitive start through the middle in that tie, was given the official player-of-the-match award and was denied by Dubravka. In a squad with one senior centre-forward, the claim carries further than it would elsewhere.", image: "",
    physical: { height: 180, weight: 73, pace: 80, acceleration: 81, sprintSpeed: 79 },
    career: [
      { years: "2013-", club: "Liverpool", fee: null, type: "youth" },
      { years: "2024-25", club: "Stoke City", fee: null, type: "loan" },
      { years: "2025", club: "Birmingham City", fee: null, type: "loan" },
      { years: "2025-26", club: "Hull City", fee: null, type: "loan" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Fri Sep 18, morning - the training pitch is a fortnight away, and Sunday is not. Chiesa is aiming to resume work towards the end of this month, in the first week of the extended international window, per Lewis Steele, having not played since the Como friendly a month ago. Sports Mole pencils 11 October for availability. Left off the Champions League squad, he was never in reach this autumn; a fifth forward in mid-October would ease a front line stretched across two flanks.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Fri Sep 18, morning - third of three, and the order survived the one night it might not have. Woodman was not required for the cup tie that went to Mamardashvili, which is the fixture a third goalkeeper is usually handed, and he trained on Thursday with both senior keepers fit and no new injuries reported. A bench season at most.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
  {
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Fri Sep 18, morning - Squawka's right winger for Sunday, and nobody else's. Munoz trained on Thursday among the twenty-five and is the preview's pick on the right, though none of the post-match accounts of the cup tie mention him, which in a 3-1 is its own kind of verdict. Four appearances into a Liverpool career, in a rotation that is four wide forwards for two places with both flanks interchangeable.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Fri Sep 18, morning - a fourth straight start out of position, if the team news reads as expected. Araujo trained on Thursday and Empire of the Kop have him restored at right-back at the Vitality, because Bradley is out to late November and the alternatives are Frimpong and a Gomez the previews want benched. Bournemouth's sharpest pattern is Kluivert drifting infield and a runner attacking the space behind him, which is precisely the ground Araujo has to guard. The 55m-euro buy option on his loan, confirmed by Romano, is a spring question.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Fri Sep 18, morning - still being built through games, with the fixture that suits him next. Barcola trained on Thursday and is Squawka's pick on the left for Sunday, having featured in the cup tie without a pre-season behind him. Iraola's framing has been consistent: the condition comes through minutes, and all four wide forwards will play both flanks this season. A Bournemouth defence that concedes in transition rewards a runner more than a holder.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
    physical: { height: 182, weight: 72, pace: 91, acceleration: 92, sprintSpeed: 90 },
    career: [
      { years: "2010-2020", club: "Lyon Academy", fee: null, type: "youth" },
      { years: "2021-2023", club: "Lyon", fee: null, type: "senior" },
      { years: "2023-2026", club: "Paris Saint-Germain", fee: "€50M", type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£106m (+£17m)", type: "senior" },
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
  // Added Aug 12 2026 — broaden the wire beyond the original seven.
  // NOTE: Transfermarkt is deliberately NOT here. Its /rss/news/verein/31 path
  // returns a consent-wall HTML page, not a feed, so it would render as a dead
  // source. Transfermarkt is used as a RESEARCH + VERIFICATION source by the
  // update skill (target-board status sweep) rather than as a live feed.
  { name: "Liverpool Echo", url: "https://www.liverpoolecho.co.uk/all-about/liverpool-fc?service=rss", category: "major", color: "#E03A3E" },
  { name: "Liverpool.com", url: "https://www.liverpool.com/?service=rss", category: "fan", color: "#9B1B30" },
  { name: "talkSPORT - Liverpool", url: "https://talksport.com/football/teams/liverpool/feed/", category: "major", color: "#E4002B" },
];

// ─── Team Logos ────────────────────────────────────────────────────────────
// PL crests via premierleague.com CDN, UCL teams via img.uefa.com
export const TEAM_LOGOS = {
  "Liverpool":      "https://resources.premierleague.com/premierleague/badges/50/t14.png",
  "Galatasaray":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50137.png",
  "Al-Hilal":       "https://commons.wikimedia.org/wiki/Special:FilePath/Al%20Hilal%20SFC%20Logo.svg?width=50",
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
  "Paris Saint-Germain": "https://img.uefa.com/imgml/TP/teams/logos/50x50/52747.png",
  "Brighton & Hove Albion": "https://resources.premierleague.com/premierleague/badges/50/t36.png",
  "Fulham":         "https://resources.premierleague.com/premierleague/badges/50/t54.png",
  "Everton":        "https://resources.premierleague.com/premierleague/badges/50/t11.png",
  "Crystal Palace":  "https://resources.premierleague.com/premierleague/badges/50/t31.png",
  "Hull":           "https://a.espncdn.com/i/teamlogos/soccer/500/306.png",
  "Ipswich":        "https://a.espncdn.com/i/teamlogos/soccer/500/373.png",
  "Ipswich Town":   "https://a.espncdn.com/i/teamlogos/soccer/500/373.png",
  "Coventry":       "https://a.espncdn.com/i/teamlogos/soccer/500/388.png",
  "Tijuana":         "https://r2.thesportsdb.com/images/media/team/badge/b0mky81779772352.png",
  "Manchester City": "https://resources.premierleague.com/premierleague/badges/50/t43.png",
  "Manchester United": "https://resources.premierleague.com/premierleague/badges/50/t1.png",
  "Chelsea":         "https://resources.premierleague.com/premierleague/badges/50/t8.png",
  "Aston Villa":     "https://resources.premierleague.com/premierleague/badges/50/t7.png",
  "Brentford":       "https://resources.premierleague.com/premierleague/badges/50/t94.png",
  // Transfer-target clubs
  "Bayer Leverkusen": "https://r2.thesportsdb.com/images/media/team/badge/3x9k851726760113.png",
  "RB Leipzig":       "https://img.uefa.com/imgml/TP/teams/logos/50x50/2603790.png",
  "Real Sociedad":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50080.png",
  "Porto":            "https://upload.wikimedia.org/wikipedia/en/f/f1/FC_Porto.svg",
  "Bayern Munich":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50037.png",
  "Real Madrid":      "https://img.uefa.com/imgml/TP/teams/logos/50x50/50051.png",
  "Inter Milan":      "https://img.uefa.com/imgml/TP/teams/logos/50x50/50138.png",
  "Juventus":         "https://img.uefa.com/imgml/TP/teams/logos/50x50/50139.png",
  "Atlético Madrid":  "https://img.uefa.com/imgml/TP/teams/logos/50x50/50124.png",
  "Mainz":            "https://img.uefa.com/imgml/TP/teams/logos/50x50/50106.png",
  "Barcelona":        "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
  "Rennes":           "https://img.uefa.com/imgml/TP/teams/logos/50x50/50097.png",
  "Rennes (loan)":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50097.png",
  "Club Brugge":      "https://upload.wikimedia.org/wikipedia/en/d/d0/Club_Brugge_KV_logo.svg",
  "Sporting CP":      "https://img.uefa.com/imgml/TP/teams/logos/50x50/50149.png",
  "Lille":            "https://img.uefa.com/imgml/TP/teams/logos/50x50/50064.png",
  "Monaco":           "https://img.uefa.com/imgml/TP/teams/logos/50x50/50023.png",
  "Osasuna":          "https://upload.wikimedia.org/wikipedia/en/d/db/Osasuna_logo.svg",
  "Real Oviedo": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Real_Oviedo_logo.svg/120px-Real_Oviedo_logo.svg.png",
  "Besiktas": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Be%C5%9Fikta%C5%9F_JK_logo.svg/120px-Be%C5%9Fikta%C5%9F_JK_logo.svg.png",
  "Almeria":          "https://upload.wikimedia.org/wikipedia/en/e/e4/UD_Almeria_logo.svg",
  "Borussia Dortmund":"https://img.uefa.com/imgml/TP/teams/logos/50x50/52758.png",
  "Atalanta":         "https://img.uefa.com/imgml/TP/teams/logos/50x50/52816.png",
  "Roma":             "https://img.uefa.com/imgml/TP/teams/logos/50x50/50043.png",
  "AC Milan":         "https://img.uefa.com/imgml/TP/teams/logos/50x50/50058.png",
  "Ajax":             "https://img.uefa.com/imgml/TP/teams/logos/50x50/50094.png",
  "Celtic":           "https://img.uefa.com/imgml/TP/teams/logos/50x50/50050.png",
  "Celta Vigo":       "https://img.uefa.com/imgml/TP/teams/logos/50x50/50127.png",
  "Deportivo Cali":   "https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Deportivo_Cali_logo.svg/120px-Deportivo_Cali_logo.svg.png",
  "Saint-Etienne":    "https://img.uefa.com/imgml/TP/teams/logos/50x50/50076.png",
  "Genk":             "https://img.uefa.com/imgml/TP/teams/logos/50x50/50120.png",
};

// ─── Cover Image (edition hero — tied to the lead story) ────────────────────
// The cover renders `src` full-bleed behind the masthead with a legibility
// scrim; if `src` is null or the file fails to load, the cover falls back to
// the pure-type masthead. `generatedAt` doubles as a cache-buster (?v=).
//
// TWO-TRACK PIPELINE (see docs/COVER-IMAGE-PIPELINE.md):
//   • The daily liverpool-tracker-update run regenerates a deterministic SVG
//     "editorial plate" (public/assets/cover/*.svg) from the lead story, so the
//     cover always has a visual, and writes `brief` below.
//   • Antigravity ("agy") reads `brief`, generates a premium photographic image
//     when the lead is genuinely visual, drops the JPG in public/assets/cover/,
//     and repoints `src` + `credit` + `generatedAt` at it.
// `focus` is the one-line "most important focus of the latest edition."
export const COVER_IMAGE = {
  src: "/assets/cover/2026-09-15-szoboszlai-volley.svg",
  alt: "Editorial plate: a floodlit night at Anfield, a midfielder in red striking a volley from thirty yards, the ball leaving his boot in a blur, a goalkeeper in the distance beginning to move the wrong way, a wall of supporters rising behind the goal.",
  focus: "Carried plate, not this edition's lead: Liverpool 3-1 Tottenham, Carabao Cup third round, 15 September, in which Dominik Szoboszlai came off the bench with Spurs pressing at 2-1, met the ball around thirty yards out and volleyed it past Martin Dubravka in stoppage time. It stands as the season's most recent photographable moment while the front page leads on a squad decision that has no single still",
  credit: "Plate · carried from 15 September",
  generatedAt: "2026-09-18T08:30:00Z",
  // Morning pass (Fri 18 September, ~4am ET): no match since Tuesday's cup tie, so the Szoboszlai volley plate is
  // carried and generatedAt re-stamped only. The lead rotated off Thursday's Endo sale onto Sunday: Iraola's homecoming
  // to Bournemouth, previewed on the day of his 1.30pm press conference and the last fixture before the international
  // break, with the Endo/Ngumoha business the backdrop. A homecoming preview is not a single photographable still, so
  // NO new image was queued under STEP 7.5. Table byte-identical from ESPN, Liverpool eighth. All eight generatedAt stamps 08:30Z.
  // Evening pass (Thu 17 September, 6pm ET / 11pm BST): no match since Tuesday's cup tie, so the Szoboszlai
  // volley plate is carried and generatedAt re-stamped only. The lead rotated off the cup draw onto Thursday's
  // squad decision: Liverpool have put Wataru Endo up for sale for January, six competitive games into Iraola's
  // first season, with Ben Jacobs the source under CaughtOffside, Football365, TeamTalk, SportBible and
  // Sportskeeda; the counterweight is the push to tie Rio Ngumoha to a new long-term deal inside a month.
  // A transfer-list decision and a contract negotiation are not single photographable stills, so NO new image
  // was queued under STEP 7.5. All eight generatedAt stamps 22:30Z.
  // Evening/overnight pass (started Wed 16 September 6pm ET, published Thu 17 September): no match since
  // Tuesday's cup tie, so the Szoboszlai volley plate is carried and generatedAt re-stamped only. The lead
  // rotated onto the Carabao Cup fourth-round draw, made at Old Trafford on Wednesday night: Liverpool host
  // Chelsea in the week commencing 26 October, Xabi Alonso back at Anfield a third autumn running with a
  // third club. A cup draw is not a single photographable still, so NO new image was queued under STEP 7.5.
  // Morning pass (Wed 16 September, ~4am ET): no match since Tuesday's cup tie, so the Szoboszlai volley plate is carried
  // and generatedAt re-stamped only. The lead rotated off the raw 3-1 result onto Sunday: Iraola's homecoming to Bournemouth,
  // read through the scrutiny around him (unbeaten yet 'under serious pressure' per Yahoo/LiveScore, Hughes gone to Al-Hilal),
  // with tonight's Carabao Cup fourth-round draw the day's other fixed point. A homecoming preview and a cup draw are not
  // single photographable stills, so NO new image was queued under STEP 7.5; the Szoboszlai plate stands as the carried hero.
  // Table byte-identical from ESPN, Liverpool eighth. All eight generatedAt stamps 08:30Z.
  // Evening pass (Tue 15 September, 6pm ET / 11pm BST): a match was played, and it leads every surface.
  // Liverpool 3-1 Tottenham at Anfield, Carabao Cup third round, with TEN changes and Joe Gomez captaining
  // on a first appearance since a July muscle injury. Mac Allister into the top corner on 21; Gakpo the
  // second shortly after the interval; Gallagher headed Spurs back into it from a corner before the 70th;
  // Mamardashvili, in his first appearance of the season, made a significant late save; Szoboszlai, off the
  // bench, volleyed the third from around thirty yards in stoppage time. Andy Robertson came on for Udogie
  // on 57 and was given a standing ovation from all four stands on his first Anfield return. Fans also spotted
  // Iraola passing his own match notes down the bench to the academy players. First win since Ipswich and the
  // first time this season Liverpool have scored three. NO expected-goals figures had been published at the
  // time of writing, so the FORM_TRENDS card for this tie carries nulls with pending: true rather than an
  // estimate. NEXT_MATCH rolled to Bournemouth away, Sunday 20 September, 2pm at the Vitality, Sky Sports
  // Main Event, Andoni Iraola's first return to the club he managed until the summer; the OPPOSITION dossier
  // was rebuilt from scratch for Marco Rose's side, the first team in Premier League history to lead in each
  // of its opening four fixtures and win none of them. Fourth-round draw Wednesday night after Man Utd vs
  // Brighton, ties in the week beginning 26 October. STANDINGS byte-identical from ESPN, Liverpool eighth.
  // A thirty-yard volley IS a photographable moment under STEP 7.5, so a Track 1 plate was generated (the
  // strike, no text) and the Track 2 brief below is the open request for Antigravity. All eight generatedAt
  // stamps 22:45Z.
  // Morning pass (Tue 15 September, ~4am ET): MATCHDAY, but the match is tonight and has not been played, so there is no
  // new photographable moment yet. The Jacquet plate is carried again and generatedAt re-stamped; the `focus`/`brief`
  // below still describe the Fulham clearance, now the edition's background rather than its lead. The lead rotated off
  // Monday's press conference onto the tie itself: Tottenham at Anfield, 8pm, the Carabao Cup third round and Iraola's
  // first domestic cup tie, a heavily rotated XI (Koumas through the middle behind a returning Gakpo, Ngumoha and Munoz
  // wide, Nyoni and Mac Allister screening, Isak/Van Dijk/Szoboszlai/Wirtz rested), with Andy Robertson's first return to
  // Anfield in Tottenham colours the night's sub-plot. No new image queued under STEP 7.5 (a pre-match preview is not a
  // single still); Antigravity may generate a post-match hero image tonight if the tie produces one. Table unchanged from
  // ESPN, Liverpool eighth. All eight generatedAt stamps 08:30Z.
  // Evening pass (Mon 14 September, 6pm ET / 11pm BST): no match since Saturday, so the Jacquet plate is carried and
  // generatedAt re-stamped only. The `focus` line and `brief` below still describe the Fulham clearance, which is now the
  // third story on the page. The lead rotated to Iraola's Monday press conference at the AXA: Mamardashvili confirmed to
  // start (a first appearance of the season, the manager volunteering that he tried to sign him for Bournemouth), Gomez
  // upgraded from doubt to 'available for tomorrow', and the manager's own account of a schedule he called the worst
  // scenario. A press conference has no single still photograph in it, so NO new image was queued under STEP 7.5 and the
  // brief below is intentionally left at the last genuinely photographable moment; Antigravity should treat it as served.
  // Also this pass: Tottenham's team news reversed the weekend's reading (Tonali out with a knock, Porro and Kulusevski
  // out, Richarlison excluded from the squad entirely, Udogie back, Van de Ven in fact fit and a starter at Everton), and
  // the table moved without Liverpool playing, Leeds beating Newcastle 4-1 at Elland Road to go third and Liverpool
  // slipping from seventh to eighth on the same six points.
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Evening pass (Sat 12 September, 6pm ET / 11pm BST): a match was played. Liverpool 0-0 Fulham at Anfield,
  // the first blank under Iraola and a fourth straight Anfield league draw, the first such run since November
  // 2011 per Opta. Jacquet cleared Garcia's shot off the line on 12 after Alisson's short pass to a marked
  // Gravenberch (King's penalty appeal waved away); Munoz headed a corner against the bar on 22; Leno saved
  // from Isak and Mac Allister; Alisson tipped King's curler wide on 76; Muniz missed on 79. Opta: 1.13 xG from
  // 14 shots to 0.71 from 10. Three changes (Tsimikas, Gravenberch, Munoz) all withdrawn by the hour; Gakpo back
  // from the bench; Gomez not in the squad. Iraola: 'a lack of freshness, definitely, we cannot hide it'.
  // The result leads every surface. Next: Tottenham, Carabao Cup third round, Anfield, Tuesday 8pm, ITV and
  // Sky; NEXT_MATCH rolled forward and the OPPOSITION dossier rebuilt for De Zerbi's goalless side. A goal-line
  // clearance IS a photographable moment under STEP 7.5, so a Track 1 plate was generated (the clearance, no
  // text) and the Track 2 brief below is the open request for Antigravity (COVER-00001). The limn-editor-enhance
  // skill was not present on this mount, so the request is recorded here and in cover-brief.json only.
  // Morning pass (Sat 12 September): MATCHDAY. Fulham at Anfield today at 3pm; no match or ruling-out
  // since Wednesday's Atletico win, table byte-identical from ESPN. Lead rotated off Friday evening's
  // Ekitike-January anchor onto the fixture itself; Gakpo the lone doubt into matchday, Barcola and Kerkez
  // cleared, Gomez in line for a first bench. Mac Allister strike plate carried and re-stamped.
  // Morning pass (Sun 13 September, ~4am ET): no match since Saturday; table byte-identical from ESPN (the
  // Manchester derby is this afternoon, unplayed). Lead rotated off the Fulham result onto the Sunday-morning
  // reckoning on Iraola: 'officially under serious pressure' (AnfieldWatch/LiveScore/Yahoo) after one win in
  // four, with no sporting director (Hughes long gone to Al-Hilal, Gordon/FSG hunting a fifth since 2022), his
  // fuller 'what was lacking was quite clear' post-mortem, and Pablo Barrios (Atletico) the one new January/
  // summer midfield thread. NOT a sacking; contradiction sweep clean. A manager-pressure lead is not
  // photographable, so no new image queued; Jacquet clearance plate carried and generatedAt re-stamped.
  // Evening pass (Sun 13 September, 6pm ET / 11pm BST): no match since Saturday, so the Jacquet plate is carried
  // and generatedAt re-stamped only. NOTE: the `focus` line above and the `brief` below still describe the Fulham
  // clearance, which is now the SECOND story on the page, not the lead. The lead rotated to the captain's contract:
  // Liverpool will not open Van Dijk talks until 2027, no decision before April, the deal expiring that summer
  // (Football Insider, carried by Yahoo / CaughtOffside / Sports Mole). A contract that is deliberately not being
  // discussed has no single still photograph in it, so NO new image was queued under STEP 7.5 and the brief below
  // is intentionally left at the last genuinely photographable moment. Antigravity should treat it as already served.
  // The table moved without Liverpool playing: City won the derby with ten men, Brighton won 5-0 at Coventry,
  // Liverpool slip to seventh on the same six points.
  // Evening pass (Fri 11 September, 6pm ET / 11pm BST): no match since Wednesday. The lead moved to the one
  // new fact from Friday's briefing: Iraola put a January date, of sorts, on Ekitike's Achilles. Plate carried.
  // Evening pass (Wed 9 September): a match was played. Liverpool 2-1 Atletico Madrid at Anfield, the Champions
  // League opener: Llorente 17, Szoboszlai 40, Mac Allister 50. Opta: 1.68 xG from 14 shots to 0.81 from 9.
  // Track 1 plate 2026-09-09-mac-allister-strike.svg.
  // Evening pass (Sat 5 September): Richard Hughes stepped down as sporting director. Track 1 plate 2026-09-05-hughes-exit.svg.
  // Evening pass (Fri 4 September): Ipswich 0-2 Liverpool, Isak 6' and 9', Track 1 plate 2026-09-04-isak-brace.svg.
  brief: {
    leadStory:
      "Liverpool beat Tottenham 3-1 at Anfield on Tuesday night to reach the Carabao Cup fourth round, with Andoni Iraola making ten changes and handing the captaincy to Joe Gomez on his first appearance since a muscle injury in July. Alexis Mac Allister moved beyond the midfield line and struck the opener into the top corner after twenty-one minutes; Cody Gakpo lashed in the second shortly after the interval; Conor Gallagher headed Spurs back into the tie from a corner before the seventieth minute, after which Tottenham pushed a young Liverpool back four deep for a quarter of an hour; Giorgi Mamardashvili, in his first appearance of the season, made a significant late save; and Dominik Szoboszlai, on from the bench, met the ball around thirty yards out and volleyed it past Martin Dubravka in stoppage time. Andy Robertson, who left Liverpool on a free transfer in the summer after nine years and eight major honours, came on for Destiny Udogie in the fifty-seventh minute and was given a standing ovation from all four stands. Liverpool remain unbeaten under Iraola. Bournemouth away follows on Sunday, the manager's first return to the club he left in the summer.",
    subject: "Dominik Szoboszlai striking a volley from thirty yards under the Anfield floodlights in stoppage time, the ball a blur leaving his boot, the goalkeeper in the far distance already committed the wrong way, the Kop rising behind the goal",
    prompt: "Cinematic wide still, 16:9, 1600x900, no text, no logos, no legible lettering. A midfielder in an all-red kit caught mid-volley from long range under stadium floodlights at night, body leaning back over the ball, one boot through the strike, turf spraying at his standing foot, the football streaking away as a motion-blurred blur toward a distant goal where a keeper in a dark kit has begun to move the wrong way, a packed bank of supporters in red behind the goal lit from above, deep navy night sky over the stand roof, shallow depth of field, photojournalistic, Getty-style sports photography, hard floodlit highlights and cool blue shadows with Liverpool red as the only warm colour.",
    aspectRatio: "landscape",
    slug: "szoboszlai-volley",
  },
};


// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Bournemouth",
  shortName: "BOU",
  home: false,
  date: "2026-09-20T14:00:00",
  competition: "PL",
  venue: "Vitality Stadium",
  broadcast: "Sky Sports Main Event (2pm)",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
  { date: "2026-09-15", opponent: "Tottenham",           home: true,  score: "3-1", competition: "EFL", result: "W", scorers: "Mac Allister 21', Gakpo 54', Szoboszlai 90+1'" },
  { date: "2026-09-12", opponent: "Fulham",              home: true,  score: "0-0", competition: "PL",  result: "D", scorers: "" },
  { date: "2026-09-09", opponent: "Atlético Madrid",     home: true,  score: "2-1", competition: "UCL", result: "W", scorers: "Szoboszlai 40', Mac Allister 50'" },
  { date: "2026-09-04", opponent: "Ipswich Town",        home: false, score: "2-0", competition: "PL",  result: "W", scorers: "Isak 6', 9'" },
  { date: "2026-08-29", opponent: "Nott'm Forest",       home: true,  score: "2-2", competition: "PL",  result: "D", scorers: "Isak 60', Munoz 82'" },
  { date: "2026-08-23", opponent: "Newcastle",           home: false, score: "2-2", competition: "PL",  result: "D", scorers: "Gakpo 55', Szoboszlai 90+9' pen" },
  { date: "2026-08-16", opponent: "Como",               home: true,  score: "2-0", competition: "PSF", result: "W", scorers: "Gakpo, Jacquet" },
  { date: "2026-08-09", opponent: "Monaco",             home: true,  score: "2-3", competition: "PSF", result: "L", scorers: "Isak 16', Wirtz 29'" },
  { date: "2026-08-02", opponent: "Leeds United",       home: false, score: "2-4", competition: "PSF", result: "L", scorers: "Chambers, Wirtz" },
  { date: "2026-07-29", opponent: "Wrexham",            home: false, score: "1-0", competition: "PSF", result: "W", scorers: "Ngumoha 75'" },
  { date: "2026-07-25", opponent: "Sunderland",         home: false, score: "4-2", competition: "PSF", result: "W", scorers: "Morrison 13', Szoboszlai, Chiesa, Koumas 85'" },
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
// Last refresh: 2026-09-18 (Friday morning, ~4am ET). Re-fetched from ESPN and byte-identical to the previous pull: no
// league match has been played since Saturday (Tuesday was the Carabao Cup), so the table has not moved. History below.
// 2026-09-14 (Monday evening) re-fetched from ESPN's endpoint AFTER Monday night's game, and it
// moved without Liverpool kicking a ball. LEEDS BEAT NEWCASTLE 4-1 at Elland Road (Miley own goal 32, Bogle 34,
// Calvert-Lewin 45+1, Okafor 59, per NBC Sports), the last two sides with a game in hand, which lifts Daniel Farke's
// promoted team to THIRD on eight and drops Newcastle to twelfth. LIVERPOOL FALL TO EIGHTH on the same six points from
// four (1W 3D), level on points with Brentford and Everton but behind Brentford on goal difference and ahead of Everton on goals scored, and the Champions League stripe now sits
// two places further away than it did this morning. Arsenal and Manchester City remain clear on twelve, both perfect from
// four; the qualification stripes shift with the table, Leeds and Hull now inside the Champions League four, Brighton
// alone on the Europa line and Chelsea outside a stripe. Tottenham (Anfield, Carabao Cup, Tuesday 8pm) stay seventeenth on
// two and still without a league goal; Fulham eighteenth on one, in the relegation stripe with Villa and Coventry, who are
// bottom on nothing, no goal scored, minus ten.
export const STANDINGS = [
  { pos: 1, team: "Arsenal", p: 4, w: 4, d: 0, l: 0, gd: 7, pts: 12, qualification: "UCL" },
  { pos: 2, team: "Manchester City", p: 4, w: 4, d: 0, l: 0, gd: 6, pts: 12, qualification: "UCL" },
  { pos: 3, team: "Leeds", p: 4, w: 2, d: 2, l: 0, gd: 4, pts: 8, qualification: "UCL" },
  { pos: 4, team: "Hull", p: 4, w: 2, d: 2, l: 0, gd: 3, pts: 8, qualification: "UCL" },
  { pos: 5, team: "Brighton", p: 4, w: 2, d: 1, l: 1, gd: 8, pts: 7, qualification: "UEL" },
  { pos: 6, team: "Chelsea", p: 4, w: 2, d: 1, l: 1, gd: 1, pts: 7 },
  { pos: 7, team: "Brentford", p: 4, w: 1, d: 3, l: 0, gd: 3, pts: 6 },
  { pos: 8, team: "Liverpool", p: 4, w: 1, d: 3, l: 0, gd: 2, pts: 6, highlight: true },
  { pos: 9, team: "Everton", p: 4, w: 1, d: 3, l: 0, gd: 2, pts: 6 },
  { pos: 10, team: "Ipswich", p: 4, w: 2, d: 0, l: 2, gd: -3, pts: 6 },
  { pos: 11, team: "Nott'm Forest", p: 4, w: 1, d: 2, l: 1, gd: 0, pts: 5 },
  { pos: 12, team: "Newcastle", p: 4, w: 1, d: 2, l: 1, gd: -1, pts: 5 },
  { pos: 13, team: "Manchester United", p: 4, w: 1, d: 1, l: 2, gd: 0, pts: 4 },
  { pos: 14, team: "Sunderland", p: 4, w: 1, d: 1, l: 2, gd: -2, pts: 4 },
  { pos: 15, team: "Bournemouth", p: 4, w: 0, d: 3, l: 1, gd: -1, pts: 3 },
  { pos: 16, team: "Crystal Palace", p: 4, w: 1, d: 0, l: 3, gd: -5, pts: 3 },
  { pos: 17, team: "Tottenham", p: 4, w: 0, d: 2, l: 2, gd: -5, pts: 2 },
  { pos: 18, team: "Fulham", p: 4, w: 0, d: 1, l: 3, gd: -3, pts: 1, qualification: "REL" },
  { pos: 19, team: "Aston Villa", p: 4, w: 0, d: 1, l: 3, gd: -6, pts: 1, qualification: "REL" },
  { pos: 20, team: "Coventry", p: 4, w: 0, d: 0, l: 4, gd: -10, pts: 0, qualification: "REL" },
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
  matchweek: 4,
  generatedAt: "2026-09-18T08:30:00Z",
  overview:
    "The wait ends this weekend, and it also ends September: four league fixtures, then a fortnight of international football, and everybody's autumn begins properly on the other side. Nothing has moved since Saturday, six days of stillness that leave Arsenal and Manchester City perfect on twelve and the two promoted sides, Leeds and Hull, still holding the Champions League places behind them, an arrangement that looks more temporary by the day. Liverpool sit eighth on six, unbeaten, two points and four positions short of that line and separated from Brentford above and Everton below by nothing more than goals scored. The relegation stripe does its own strange work, Fulham and Aston Villa on a point apiece and Coventry still without a goal, never mind a point. Sunday at the Vitality is the last of the round and the last bottom-half opponent Liverpool will face until November.",
  teams: {
    "Liverpool": "Eighth on six, unbeaten, and six days without a league fixture to change it. The autumn's first genuine road test comes at fifteenth-placed Bournemouth on Sunday, Iraola back at his old club, after which the fixture list stops being generous entirely.",
    "Arsenal": "Top on twelve, perfect from four, ahead of City only on goals. The cheapest fourth-round tie in the competition awaits at League Two Fleetwood. They come to Anfield on 1 November, by which point Liverpool will have played City, Brentford and Brighton.",
    "Manchester City": "Second on twelve, and the last side into the cup's fourth round after beating Norwich 5-0 at the Etihad on Thursday night, a rout built on academy goals. Brighton away is their reward. Anfield on 11 October is the fixture that opens Liverpool's month.",
    "Leeds": "Third on eight and unbeaten, a promoted side holding a Champions League place four games in. The question is not whether it lasts but how long it takes to stop being funny.",
    "Hull": "Fourth on eight, also promoted, also unbeaten, and the reason the top five currently reads like a misprint. Two wins and two draws, no defeats, no fuss.",
    "Brighton": "Fifth on seven and alone on the Europa line, with a home tie against Manchester City in the fourth round earned by knocking United out at Old Trafford. They visit Anfield on 25 October.",
    "Chelsea": "Sixth on seven and outside a European place on goal difference alone, which is not where a summer of that size expected to be in mid-September. Anfield in the cup in late October is the fixture everyone has already circled.",
    "Brentford": "Seventh on six, unbeaten, and above Liverpool on goals scored alone. They host them on 17 October, three days after City come to Anfield, which is the kind of week that decides how a season is described.",
    "Everton": "Ninth on six, level with Liverpool on points and goal difference and behind on goals scored, which is as narrow as a league table gets. Newcastle at home in the cup next.",
    "Newcastle": "Twelfth on five, four games without a win since the opening draw with Liverpool, and away at Everton in the fourth round of the cup.",
    "Manchester United": "Thirteenth on four and out of the cup, beaten at home by Brighton from a winning position on Wednesday. Four points from four is a worse return than the fixture list suggested.",
    "Bournemouth": "Fifteenth on three, and the only side in the competition's history to have led all four of its opening fixtures and won none of them. Sunday brings Andoni Iraola back to the club he took into Europe and left in June, with four of his old players injured.",
    "Tottenham": "Seventeenth on two and out of the cup, still without a league goal in four attempts. Anfield has now beaten them twice this month in two competitions without their scoring in open play.",
    "Fulham": "Eighteenth on one, the point taken at Anfield on Saturday still their only one, and inside the relegation stripe on goal difference.",
    "Coventry": "Bottom on nothing from four: no points, no goals, minus ten, and out of the cup. The worst start of any promoted side since the division expanded.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Back To The South Coast, Where The Job Used To Be His.",
    byline: "Liverpool FC / Empire of the Kop",
    dateline: "AXA Training Centre · 18 September",
    category: "Manager",
    body:
      "At half past one this afternoon Andoni Iraola will preview a fixture he has previewed before from the other dugout. Bournemouth is the club he managed for three years and took into Europe, and Sunday is the first time he goes back. He arrives having just made the coldest call of his short Liverpool tenure, and the reporters will want him on that as much as on the game. What he can offer in return is a team sheet the previews have half-written for him: Araujo at right-back, Isak restored, Gomez on the bench. A homecoming, then, with the guest list already leaked.",
  },
  {
    n: "02",
    headline: "The Seam They Will Aim At, And The Centre-Half Guarding It.",
    byline: "Squawka / Sky Sports",
    dateline: "Liverpool · 18 September",
    category: "Tactics",
    body:
      "Every Bournemouth goal this season has started the same way, Justin Kluivert peeling in off the left and a runner attacking the grass behind the full-back. The full-back Liverpool will put there is Ronald Araujo, a centre-half playing his fourth league game out of position, because Conor Bradley is not fit until late November and the specialists ran out in January. Frimpong played the slot in the cup and Gomez can fill it from the bench, but neither is the first answer. It is the one clear structural weakness on the team sheet, and the opponent is built precisely to find it.",
  },
  {
    n: "03",
    headline: "Three Long Absences Take A Step, And Still None Names A Day.",
    byline: "Daily Mail / This Is Anfield",
    dateline: "AXA Training Centre · 18 September",
    category: "Injuries",
    body:
      "Lewis Steele's midweek round-up moved the injury board without opening the door on it. Federico Chiesa is aiming to resume training at the end of this month, Giovanni Leoni is stepping up an ACL recovery and should rejoin the group over the international break, and Conor Bradley has begun individual ball work eight months after his knee. All three are progress; none is a return date. Hugo Ekitike's Achilles keeps January as the earliest realistic mark. For a squad the club has decided to shrink in January rather than grow, a fortnight of recovery over the break is the nearest thing to reinforcement available.",
  },
  {
    n: "04",
    headline: "One Player Told To Pack, Another They Are Trying To Anchor.",
    byline: "CaughtOffside / The Athletic",
    dateline: "Liverpool · 18 September",
    category: "Transfers",
    body:
      "The week delivered its two verdicts at opposite ends of the age range. Wataru Endo, thirty-three and one of Klopp's last signings, is on the market for January, the last window a fee is recoverable on his deal, with Ben Jacobs's blunt gloss that the manager does not fancy him. Rio Ngumoha, eighteen, is the one the club will not sell at any price and want tied down inside a month, though Ornstein cautions that nothing is signed and that Arsenal and Bayern are watching. The same building, on the same day, decided who to move on and who to build around.",
  },
  {
    n: "05",
    headline: "A Return Wrapped In A Word The League Table Will Not Back.",
    byline: "This Is Anfield / LiveScore",
    dateline: "Liverpool · 18 September",
    category: "Football News",
    body:
      "There is a version of Iraola's homecoming written in a harsher key. One win in four, a sporting director gone and the man who hired him with him, and a handful of columns reaching a fortnight in for the word pressure. It is a reach, and worth saying so plainly: this is a side unbeaten, conceding the fewest expected goals in the division, sitting eighth on a quiet start rather than a bad one. But a former club away is where a slow beginning either dissolves or hardens into a story. Win at the Vitality and the word goes away. Draw a fourth and it stays.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-18T08:30:00Z",
  summary:
    "Friday, and the week narrows to a homecoming. Andoni Iraola previews Sunday's visit to Bournemouth at half past one this afternoon, his first game back at the club he took into Europe and left in the summer, and the last fixture before the international break. The team news is the immediate question: Empire of the Kop expect Ronald Araujo restored at right-back with Joe Gomez on the bench, Squawka keep Kostas Tsimikas at left-back, and Alexander Isak returns through the middle after his cup rest. Behind the fixture sit the two decisions that shaped the week. Liverpool have put Wataru Endo up for sale for January, the last window in which a fee is recoverable on a contract expiring in 2027, and are pushing to tie the eighteen-year-old Rio Ngumoha to a new long-term deal inside a month, though David Ornstein reports nothing is signed. Thursday's session brought no new injuries and a twenty-five-man group, with Van Dijk, Wirtz and Tsimikas back among it. Liverpool go to the Vitality eighth and unbeaten, two points off the Champions League places, against a side that has led in all four of its league games and won none.",
  keyTopics: [
    {
      title:
        "Iraola Previews A Homecoming At Half One, And The Team Sheet Is The First Question (Liverpool FC / Empire of the Kop, today)",
      detail:
        "The head coach faces the cameras at 1.30pm on Friday to preview his first game back at Bournemouth, the club he managed for three years, took into Europe and left in the summer. The reporting expects continuity in selection: Empire of the Kop have Ronald Araujo restored at right-back with Joe Gomez on the bench, Squawka keep Kostas Tsimikas at left-back, and Alexander Isak returns through the middle after being rested for the cup. It is the last fixture before the international break, and the first chance to ask Iraola directly about the Endo sale, the Ngumoha contract and a right-back department with no specialist fit until November.",
      category: "matches",
    },
    {
      title:
        "The Last Soft Fixture Before The Break, And What Nine Points From Five Would Mean (BBC Sport / ESPN, today)",
      detail:
        "Sunday is the one gentle entry on a hardening list. Win at the Vitality and Liverpool go into the fortnight off on nine points from five, a 1.80 pace that puts the projection back inside the Europa band; draw a fourth and the pace stays in the mid-fifties with City at home, Brentford away, Brighton and Arsenal all inside the four weeks that follow. Eighth, unbeaten and two points off a Champions League place currently held by two promoted clubs, this is the fixture the table says they should win and the season so far says they should not assume.",
      category: "matches",
    },
    {
      title:
        "Endo On The Market For January, With The Window The Only One That Recovers A Fee (CaughtOffside / Football365, today)",
      detail:
        "The decision that framed Thursday still frames Friday. Liverpool will allow Wataru Endo to leave in January, the last window in which a fee can be recovered on a contract running to 2027, with Ben Jacobs the source underneath the reporting: 'Iraola clearly doesn't fancy him, and the best outcome for all parties looks to be an exit.' The thirty-three-year-old has one appearance this season, in Tuesday's cup tie, none in the league, and was left out of the Champions League squad. Iraola's own framing is that four midfielders, Nyoni, Gravenberch, Mac Allister and Szoboszlai, are ahead of him.",
      category: "transfers",
    },
    {
      title:
        "Ngumoha The One They Hurry To Keep, And Ornstein Urges Caution (The Athletic / Empire of the Kop, today)",
      detail:
        "The counterweight to the Endo story rather than a coincidence beside it. Liverpool view the eighteen-year-old winger as a future world-beater, will entertain no offers and intend to have a new long-term deal agreed within the month. David Ornstein's version is the careful one: a contract expected around his birthday at the end of August did not materialise, nothing is agreed as things stand, and Arsenal, still without a like-for-like left winger since Martinelli, and Bayern Munich are both admirers. Ornstein adds the line that matters most: there is no suggestion the boy is unhappy.",
      category: "general",
    },
    {
      title:
        "A Clean Training Week, And Three Return Dates Inching Towards October (This Is Anfield / Sports Mole, today)",
      detail:
        "Thursday's AXA session produced the most welcome sentence available before a fixture, no new injuries, and twenty-five in the group with Van Dijk, Wirtz and Tsimikas back after their cup rest. The four long-term absences are unchanged but the recoverable ones moved this week per Lewis Steele: Chiesa aiming to resume training at the end of September, Leoni stepping up his ACL rehabilitation and due back with the group over the break, Bradley into individual ball work eight months on from the knee. Ekitike's Achilles keeps January as the earliest realistic return.",
      category: "injuries",
    },
    {
      title:
        "The Right-Back Nobody Wants Is The Space Bournemouth Aim For (Squawka / Sky Sports, today)",
      detail:
        "The tactical knot of the weekend, and it sits at Liverpool's right. Bournemouth's most repeatable pattern is Justin Kluivert drifting infield from the left and a runner attacking the space behind the full-back, and that full-back has been Ronald Araujo, a converted centre-back, for three straight league games. Conor Bradley is out until late November, Jeremie Frimpong is the alternative who played there in the cup, and Joe Gomez, back and match-fit, is the third body and the only specialist. SQUAD_LOAD carries the position at high, above centre-back, for exactly this fixture.",
      category: "tactics",
    },
    {
      title:
        "Six Goals From Six Expected: The Shortage Is Conversion, Not Chances Given Up (Squawka / BBC Sport, today)",
      detail:
        "A number worth setting beside eighth place. Liverpool concede the fewest expected goals per game in the Premier League, 1.29, which is exactly the 5.16 across four games the tracker's own Opta column arrives at independently. The problem is the other end: six goals from 6.00 expected, three draws, and a centre-forward increasingly isolated, Isak taking sixteen touches against Fulham, the second fewest for a Liverpool outfielder on record per the BBC. The defence is not leaking. The team is failing to convert what it makes and to close out what it leads.",
      category: "general",
    },
    {
      title:
        "Wirtz Away With Klopp's Germany Over The Break, On A Managed Workload (beIN Sports / Associated Press, today)",
      detail:
        "Announced Thursday and relevant to Liverpool in a way a national-team squad usually is not. Jurgen Klopp named forty-four players across two groups for Germany's four Nations League fixtures, sixteen uncapped, and Wirtz is among the midfielders, expected to feature in no more than two as Klopp spreads the load. The German has five competitive games for Liverpool without a goal or assist. The break is also when Chiesa is due to resume training and Leoni to rejoin the group, so the fortnight is a recovery window as much as an international one.",
      category: "general",
    },
    {
      title:
        "Rose's Bournemouth Have Led Every Game And Won None, With Five Now Absent (NBC Sports / Sports Mole, 1d ago)",
      detail:
        "The hosts are the first side in Premier League history to lead in each of their opening four fixtures and win none of them, a record that is the whole explanation for fifteenth place. Marco Rose collected a first win of any kind on Tuesday, 4-0 against Lincoln in the cup on a Ryan Christie hat-trick, though a rotated side settles little about Sunday. The casualty list has hardened to five: Julian Araujo out to late November, Eli Kroupi to early November, Amine Adli around a month away, Veljko Milosavljevic the nearest back, and Tyler Adams now on it too.",
      category: "matches",
    },
    {
      title:
        "Iraola Goes Back Under A Little Scrutiny, One Win In Four And No Sporting Director (This Is Anfield / LiveScore, 1d ago)",
      detail:
        "The framing the homecoming carries, and it is media narrative rather than club briefing. One win in four league games, Richard Hughes gone as sporting director and the man who hired him no longer in the building, and columns at This Is Anfield, Yahoo and LiveScore reaching for the word pressure a fortnight into a first season. It is worth keeping the qualifier: Liverpool are unbeaten, concede the fewest expected goals in the league and have not lost under Iraola. A return to a former club is where a slow start either eases or gets a label, and Sunday decides which.",
      category: "general",
    },
  ],
  sources: [
    "Liverpool FC",
    "Empire of the Kop",
    "CaughtOffside",
    "Football365",
    "The Athletic",
    "This Is Anfield",
    "Sports Mole",
    "Squawka",
    "Sky Sports",
    "BBC Sport",
    "ESPN",
    "beIN Sports",
    "Associated Press",
    "NBC Sports",
    "LiveScore",
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// IN-SEASON ANALYSIS
// ─────────────────────────────────────────────────────────────────────────────
// Added 1 Sep 2026, the night the summer window shut, when the page stopped being
// a transfer tracker and became a season one. Four exports, each refreshed by the
// daily skill:
//   OPPOSITION        — a scouting dossier on the NEXT_MATCH opponent
//   FORM_TRENDS       — per-match underlying numbers and what they add up to
//   SQUAD_LOAD        — availability, returns and rotation, now the squad is closed
//   SEASON_PROJECTION — points pace against the places that matter
//
// HOUSE RULE, and the reason this file has a `confidence` field on nearly
// everything: NEVER invent a number. xG, shots and minutes come from a named
// source or they are marked `null` with `pending: true`. An empty cell renders as
// "awaiting data" and is honest. A fabricated one is a lie that survives to the
// next edition and then into the auditor's blind spot.

export const OPPOSITION = {
  generatedAt: "2026-09-18T08:30:00Z",
  opponent: "Bournemouth",
  shortName: "BOU",
  fixture: {
    date: "2026-09-20T14:00:00",
    venue: "Vitality Stadium",
    home: false,
    competition: "PL",
    broadcast: "Sky Sports Main Event (2pm)",
  },
  manager: "Marco Rose",
  formation: "4-2-3-1",
  leaguePosition: 15,
  summary:
    "Two days out, and the hosts' problem is not the shape of their football but the last twenty minutes of it. Bournemouth are the first side in Premier League history to lead in each of their opening four fixtures and win none of them, a record that reads like a statistical curio until you notice it is the entire explanation for fifteenth place. Three draws and a defeat is three points, and every one of those results was a lead handed back. The most recent, a 2-2 with Brentford at the Vitality on 13 September, contained the whole pattern: Kevin Schade scored first, Justin Kluivert levelled, Marcus Tavernier turned it round after the interval, and a Djordje Petrovic error gave Schade his second, with Ben Gannon-Doak striking the woodwork in stoppage time. Marco Rose did collect a first win of any kind on Tuesday, 4-0 against Lincoln in the cup on a Ryan Christie hat-trick, though a rotated side against a lower-division opponent settles nothing about Sunday. The casualty list has hardened this week and it is long: Julian Araujo out to late November, Eli Kroupi to early November, Amine Adli around a month away, Veljko Milosavljevic the nearest to returning, and Tyler Adams now appearing on it too. Andoni Iraola, meanwhile, goes back for the first time to the club he managed for three years and took into Europe.",
  shape:
    "Rose has kept the high-tempo, heavy-pressing identity the Vitality inherited from Iraola rather than rebuilding it, and Squawka's preview reads the hosts as a 4-2-3-1 with a screening pair in front of the back four and Tavernier floating off the front. The complication this week is that Tyler Adams, half of that pair in the preview, has since appeared among the injured, which would leave Lewis Cook alongside Alex Scott. The threat comes through the inside-left and the transition after a turnover in Bournemouth's own half, Kluivert drifting infield and Evanilson running the channel, which is how they have manufactured a first goal in every match this season. The problem is the other end: seven conceded in four, and the late collapses at Newcastle and against Brentford both arrived from set-piece scrambles and goalkeeping error rather than from being outplayed. A side that scores first and then retreats is exactly the game Liverpool's season has not yet learned how to close out from either direction.",
  keyPlayers: [
    {
      name: "Marcus Tavernier",
      role: "Attacking midfielder",
      threat: "Three goals and eight chances created from thirteen shots in four league games, which Squawka call Bournemouth's most direct route to goal. Scored against Newcastle, his fourth in five against a club whose youth system he came through, and turned the Brentford game round after the interval. He operates in the space between a holding pair and a centre-back line, which is the space a Liverpool midfield rebuilt around Gravenberch and Szoboszlai has repeatedly failed to close.",
      source: "Squawka (Opta) / Sky Sports",
    },
    {
      name: "Justin Kluivert",
      role: "Forward",
      threat: "Scored the equaliser against Brentford and rattled the post at St James' Park in the move that led to Bournemouth's second, per Sky Sports. Drifts in off the left into the half-space rather than holding width, which pulls a right-back inside and opens the channel behind him. With Conor Bradley out until late November, that right-back has been Ronald Araujo, a converted centre-back, for three straight league games.",
      source: "Sky Sports / Squawka",
    },
    {
      name: "Evanilson",
      role: "Centre-forward",
      threat: "Named by Squawka among the three Bournemouth players who define how the hosts attack, and led the line at Newcastle where he had chances and fired over. A runner rather than a target man, which suits a side whose best work is in transition, and a direct test of whether Liverpool restore Van Dijk alongside Jacquet, who played the second half of the cup tie after Gomez was withdrawn as planned.",
      source: "Squawka / Yahoo Sports",
    },
    {
      name: "Djordje Petrovic",
      role: "Goalkeeper",
      threat: "The reason the Brentford lead did not hold: his error let Schade in for the equaliser that set the unwanted record. Squawka still name him in the predicted XI, which makes this the most exploitable single point on the team sheet for a Liverpool side that has struggled to make chances count, six goals from 6.00 expected across four league games.",
      source: "Goal / Squawka",
    },
  ],
  predictedXI: [
    "Petrovic", "Truffert", "Antonio Silva", "Hill", "Smith",
    "Scott", "Cook", "Tavernier", "Kluivert", "Rayan", "Evanilson",
  ],
  absentees: [
    { name: "Julian Araujo", issue: "Hamstring; Sports Mole and NBC Sports both have him out until late November", status: "Out" },
    { name: "Eli Kroupi", issue: "Ankle and foot; not expected back until early November", status: "Out" },
    { name: "Amine Adli", issue: "Calf; closer than the other two but still around a month away", status: "Out" },
    { name: "Veljko Milosavljevic", issue: "Knee; Rose says 'the plan is that Veljko is the first one who's coming back'", status: "Out" },
    { name: "Tyler Adams", issue: "Listed among the injured this week, having been named in Squawka's 14 September preview XI; Lewis Cook is the replacement carried here", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-15", opponent: "Lincoln City", home: true, score: "4-0", result: "W", note: "Carabao Cup third round, and Marco Rose's first win in charge. Ryan Christie scored a hat-trick, on seven, sixty-nine and eighty-eight minutes, with Rayan adding a fourth from the bench in stoppage time. A rotated side and a lower-division opponent, so it proves little about Sunday beyond the fact that this group can finally see a lead out. They meet Aston Villa in the fourth round." },
    { date: "2026-09-13", opponent: "Brentford", home: true, score: "2-2", result: "D", note: "Schade opened, Kluivert levelled, Tavernier turned it round after the break, and a Petrovic error let Schade equalise. Gannon-Doak hit the woodwork in stoppage time. The result made Bournemouth the first side to lead in each of their opening four Premier League fixtures without winning any of them." },
    { date: "2026-09-05", opponent: "Newcastle", home: false, score: "2-2", result: "D", note: "Two goals ahead at St James' Park through Tavernier and a Thiaw own goal after Kluivert struck the post, then pegged back by Barnes and a Jacob Ramsey finish on 88. A third lead surrendered in three games." },
    { date: "2026-08-29", opponent: "Everton", home: true, score: "1-1", result: "D", note: "A home draw played in front of 11,135, the lowest attendance recorded in the division this season." },
    { date: "2026-08-23", opponent: "Manchester City", home: false, score: "1-2", result: "L", note: "Beaten on the opening day at the Etihad, having led there as well, per Squawka's form guide. Their only defeat of the season." },
  ],
  liverpoolAngle:
    "The sharpest way to frame this fixture is that both teams are bad at the same thing, and only one of them is being punished for it. Bournemouth have led in all four league games and taken three points; Liverpool have drawn three and taken six. The shared failure is the twenty minutes after a lead is established, and Tuesday's cup tie showed Liverpool have not fixed it either: two goals clear at Anfield, then Gallagher's header from a corner, then an hour Mamardashvili had to rescue. FORM_TRENDS keeps fast-break concession as the highest-severity pattern on the board, nine such goals since the start of last season per Opta, the most in the league, and Tavernier off the front with Kluivert cutting in from the left is exactly the profile that punishes it. The full-back behind Kluivert is the second concern and the more acute one. Bradley is out until late November, Araujo has started three straight league games there out of position, and SQUAD_LOAD now carries right-back at high while centre-back has eased to medium. Two counterweights are worth stating. Bournemouth's own list of unavailables reached five names this week, and Liverpool concede the fewest expected goals per game in the division at 1.29, a number that agrees exactly with the Opta column in this tracker's own form table. The problem has never been the chances they give up. It is the chances they take, six goals from 6.00 expected across four matches, and Squawka's model still makes them the likelier winner at 41 per cent.",
  modelLine: { source: "Squawka Signal", liverpool: 41, draw: 25, opponent: 34, note: "Squawka's own model, published 14 September, makes Liverpool the pick at 41 per cent while flagging the market as soft on Bournemouth. Reported here as a model output, not a prediction." },
  sources: ["Squawka", "Goal", "Sky Sports", "Yahoo Sports", "This Is Anfield", "Liverpool Echo", "Premier League", "ESPN", "Opta Analyst"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-18T08:30:00Z",
  competition: "PL",
  played: 4,
  headline:
    "Begin with the flattering half. This is the meanest defence in the country: Liverpool concede the fewest expected goals per game in the Premier League, 1.29, and the arithmetic in the column below arrives at the identical figure from Opta's own match data without being asked to: 5.16 against across four games. Turn it over, and the same four games have produced six goals from 6.00 expected, three draws, and a team sitting eighth. The thing this side is bad at is not preventing chances. It is converting its own and protecting a lead once it has one, and Tuesday's cup tie restated both while the scoreline said otherwise: a 3-1 win in which Tottenham created 2.30 expected goals to Liverpool's 1.53, and in which all three Liverpool goals were finishes rather than chances. That is now three matches running in which this team has been out-created and come away content, which is a pattern rather than a run of luck. The league columns themselves are untouched since 12 September, because the only football since has been a cup tie. Bournemouth on Sunday is the first fixture that will move any of it.",
  diagnosis: [
    {
      label: "Closing out a lead",
      detail: "The pattern the cup tie promoted to the top of this list. Two goals ahead at Anfield with half an hour left, Liverpool conceded a header from a corner and then spent a quarter of an hour being pushed deep by a side seventeenth in the division, with Mamardashvili required to make a significant late save before Szoboszlai settled it. EPL Index's reading is that the lead should have been managed with more authority. Sunday's opponents have led in all four of their league games and won none, which makes this the shared weakness of the fixture rather than a private one.",
      severity: "high",
      source: "EPL Index (Yahoo Sports) / Goal",
    },
    {
      label: "Fast-break concession",
      detail: "Unchanged as the season's standing structural risk, and the reason Bournemouth are an awkward opponent rather than a soft one. Both Newcastle goals came from fast breaks, Opta count nine such goals conceded since the start of last season, most in the league, and the Vitality side manufacture their chances in transition through Tavernier off the front and Kluivert cutting in from the left. Tuesday's changed back four was not tested by a counter-attacking team, so the question stays open.",
      severity: "high",
      source: "Opta Analyst / Squawka",
    },
    {
      label: "The home draw, now a pattern",
      detail: "Four consecutive Premier League draws at Anfield, the first such run since November 2011 per Opta, and the first time in the club's history it has drawn both opening home league games of a season. The cup win does not touch the record, because it is a league record, but it is the first competitive fixture at Anfield this season to produce a winner. The next three home league games are City, Brighton and Arsenal, which is an unhelpful sequence in which to still be looking for a first one.",
      severity: "high",
      source: "Opta Analyst / Liverpool FC",
    },
    {
      label: "Mac Allister arriving beyond the midfield",
      detail: "Two goals in three competitive games now, both struck from around the edge of the box after moving into an advanced position, against Atletico on 9 September and Tottenham on Tuesday. EPL Index argue the club is increasingly willing to let him go beyond midfield and that his ball-striking punishes sides that drop off. In a season where the recurring complaint has been an isolated centre-forward, a midfielder who arrives late is the cheapest available answer.",
      severity: "positive",
      source: "EPL Index (Yahoo Sports)",
    },
    {
      label: "The depth is thinner than it is bad",
      detail: "The distinction the cup night drew. Ten changes produced three goals and a win against Premier League opposition, with a nineteen-year-old in midfield and a twenty-year-old through the middle, which is not the performance of a squad without players. What it is is a squad without cover in specific places: no natural right-back until late November, one senior centre-forward, and two left-backs neither of whom convinced anyone last weekend. Breadth is not the problem. Particular holes are.",
      severity: "medium",
      source: "EPL Index (Yahoo Sports) / Sports Mole",
    },
  ],
  matches: [
    {
      date: "2026-09-15",
      opponent: "Tottenham",
      home: true,
      score: "3-1",
      result: "W",
      competition: "EFL",
      xgFor: 1.53,
      xgAgainst: 2.30,
      xgFirstHalfFor: 0.70,
      xgFirstHalfAgainst: null,
      shotsFor: 12,
      pending: false,
      verdict: "Carabao Cup third round, not counted in the league totals, and now carried at published figures rather than nulls. Ten changes, Gomez captain, and a first win since Ipswich. Mac Allister struck the opener into the top corner on 21 after moving beyond the midfield line; Gakpo lashed in the second shortly after the interval; Gallagher headed Spurs back into it from a corner before the 70th; Mamardashvili, in his first appearance of the season, made a significant late save; Szoboszlai, off the bench, volleyed the third from around thirty yards in stoppage time. Bergvall had tested Mamardashvili early and Koumas was denied by Dubravka. The data, published since: 1.53 expected goals to Tottenham's 2.30, twelve shots to seventeen, five on target to six, two big chances to three, 44 per cent of the ball, with Liverpool's first-half figure 0.70. The Transfer Hub's shot map values Szoboszlai's volley at 0.03 and Gallagher's header at 0.9. The second-half split is not published and stays null.",
      source: "This Is Anfield / The Transfer Hub (shot map and xG timeline) / Goal",
    },
    {
      date: "2026-09-12",
      opponent: "Fulham",
      home: true,
      score: "0-0",
      result: "D",
      xgFor: 1.13,
      xgAgainst: 0.71,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 14,
      pending: false,
      verdict: "Goalless, and the first blank under Iraola. Opta: 1.13 expected goals from 14 shots to 0.71 from 10, three on target to four, Fulham 24 touches in the box to 18. Jacquet cleared Garcia's shot off the line on 12 after Alisson's short pass; Munoz headed a corner against the bar on 22; Leno saved from Isak and Mac Allister; Alisson tipped King's curler wide on 76 and Muniz missed on 79. Tsimikas withdrawn at half-time, Gravenberch and Munoz on the hour. First-half splits not published.",
      source: "Opta Analyst",
    },
    {
      date: "2026-09-09",
      opponent: "Atlético Madrid",
      home: true,
      score: "2-1",
      result: "W",
      competition: "UCL",
      xgFor: 1.68,
      xgAgainst: 0.81,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 14,
      pending: false,
      verdict: "Champions League, not counted in the league totals. Behind to Llorente on 17, level through Szoboszlai on 40 from Araujo's flick, ahead through Mac Allister's twenty-yard drive on 50. Opta: 1.68 expected goals from 14 shots to 0.81 from nine, Liverpool the deserved winners by their reading; Barcola missed two clear chances, Frimpong had a late third disallowed. First-half splits not published.",
      source: "Opta Analyst",
    },
    {
      date: "2026-09-04",
      opponent: "Ipswich Town",
      home: false,
      score: "2-0",
      result: "W",
      xgFor: 0.53,
      xgAgainst: 0.72,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 10,
      pending: false,
      verdict: "Now carried at Opta's figures. Squawka's Opta-fed gameweek-three table, published 11 September, gives Ipswich 0.72 against Liverpool's 0.53, replacing the FotMob pre-shot numbers this card previously held (0.73 to 0.66). The reading does not change, it hardens: two Isak shots in the sixth and ninth minutes, both from Gakpo through-balls, then ninety minutes of holding on against a side that created more. Liverpool had seven shots on target to five, and Sofascore's post-shot model still reverses the picture at 1.70 expected goals on target to 0.47, which is the gap between the chances made and the chances taken. A first lead and a first clean sheet of the season. First-half splits are not available.",
      source: "Squawka (Opta) / Sofascore",
    },
    {
      date: "2026-08-29",
      opponent: "Nott'm Forest",
      home: true,
      score: "2-2",
      result: "D",
      xgFor: 1.61,
      xgAgainst: 2.30,
      xgFirstHalfFor: 0.25,
      xgFirstHalfAgainst: 1.29,
      shotsFor: null,
      pending: false,
      verdict: "Out-created at Anfield. Forest led twice, through Ndoye and a Gibbs-White penalty, and Liverpool needed Isak on the hour and Munoz at 82 to rescue it. Wirtz had a goal ruled out for an offside against Frimpong in the build-up. The Premier League's panel ruled on Wednesday that the penalty should not have been given, while backing the VAR's decision not to intervene.",
      source: "Opta Analyst / Premier League KMI panel via This Is Anfield",
    },
    {
      date: "2026-08-23",
      opponent: "Newcastle",
      home: false,
      score: "2-2",
      result: "D",
      xgFor: 2.73,
      xgAgainst: 1.43,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 27,
      pending: false,
      verdict: "27 shots and 2.73 xG at St James' Park against Newcastle's 1.43, most of theirs from the counter: both goals, Elanga's and Willock's, came from fast breaks. Rescued by a Szoboszlai penalty nine minutes into stoppage time after Gakpo had scored. First-half splits are not published for this match and stay blank.",
      source: "Opta Analyst",
    },
  ],
  totals: {
    xgFor: 6.00,
    xgAgainst: 5.16,
    goalsFor: 6,
    goalsAgainst: 4,
    points: 6,
    note: "Premier League only, four games, and now Opta throughout. xG for is 2.73 (Newcastle) plus 1.61 (Forest) plus 0.53 (Ipswich) plus 1.13 (Fulham); xG against is 1.43 plus 2.30 plus 0.72 plus 0.71. The Ipswich figures were carried at FotMob's pre-shot numbers until 13 September, when Squawka published Opta's, moving the season totals from 6.13 and 5.17 to 6.00 and 5.16. Wednesday's Champions League figures (1.68 for, 0.81 against, Opta) are shown on their own card and not aggregated. First-half splits exist only for the Forest match and are not aggregated.",
  },
  optaFacts: [
    "Liverpool concede the fewest expected goals per game of any side in the Premier League this season, 1.29, per Squawka's xG table. The figure is corroborated internally: the Opta match-by-match column below totals 5.16 across four games, which is 1.29 a game exactly.",
    "Six goals from 6.00 expected goals is, to two decimal places, a side scoring precisely what its chances are worth. The problem this season is not finishing above or below the model. It is that 1.50 expected goals a game is a mid-table number.",
    "Sunday's opponents are the first side in Premier League history to lead in each of their opening four fixtures of a season and win none of them, per Sky Sports. Liverpool are the side that has drawn three of four. Two different routes to the same shortage of points.",
    "Alexander Isak took sixteen touches against Fulham on 12 September, the second fewest by a Liverpool outfield player on record per the BBC, behind only his own fourteen against Nottingham Forest a fortnight earlier. The centre-forward's isolation is the season's most repeatable number.",
  ],
  sources: ["Opta Analyst", "Squawka", "Goal", "EPL Index", "Liverpool FC", "BBC Sport", "Sofascore", "Premier League", "Sky Sports", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-18T08:30:00Z",
  headline:
    "Two days out, the most important line on this board is still a negative one, carried over from Thursday: no new injuries. This Is Anfield's report of the AXA session counts twenty-five in the group, with Van Dijk, Wirtz and Tsimikas back among them after their night off and Gomez through a first session since his forty-five planned minutes. The four long-term absences are unchanged, though all three of the recoverable ones moved forward this week. The second story is a subtraction of a different kind. Liverpool have decided to sell Wataru Endo in January, which matters to this board specifically, because Endo is the emergency fifth centre-back it has been quietly counting on all autumn. A squad closed until January that is also planning to shrink in January is a squad betting on Giovanni Leoni's knee.",
  minutesNote:
    "Premier League minutes are not published here yet. Four league games and one Champions League game have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "January at the earliest: 'a reasonable chance' of the last two Champions League league-phase games (Inter 19 Jan, Lens 27 Jan per This Is Anfield); Iraola confirms 'Hugo will go later' than the international break", note: "The absence Saturday underlined and Monday's round-up did not shorten. Sports Mole carries no timeline beyond the club's, and the January framing from Friday's press conference stands: 'a hope and a realistic chance that he could help us in January', with 'a big part of the rehab still to meet'. Isak remains the only fit senior nine until then, and Koumas the false-nine cover the cup actually used, denied by Dubravka on his first competitive start through the middle.", source: "Liverpool FC / This Is Anfield / Sports Mole" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training in the September international break; Sports Mole pencils 14 October as an availability target", note: "Lewis Steele reported on Thursday that Leoni is stepping up his rehabilitation, which Steele himself frames as a small step but a positive one a year on from the ACL rupture on debut. Sports Mole tips a mid-October return; Iraola's own line is more cautious, that the plan is to start training with the group during the break. Named in the Champions League squad, unused, and not part of Tuesday's calculation. His return is the one that would end the two-man centre-back rota for good.", source: "Daily Mail / Liverpool FC / Sports Mole" },
    { name: "Conor Bradley", issue: "Knee", expected: "Sports Mole pencils Manchester United on 21 November as the earliest", note: "The first genuinely forward step in months: Lewis Steele reported on Thursday that Bradley has begun individual training and is doing ball work, eight months after the knee injury against Arsenal in January. There is still no club date beyond Iraola's 'probably Conor will go later', and Sports Mole's 21 November stands. Araujo has started there three straight league games and Empire of the Kop expect a fourth; Frimpong played it in the cup; Gomez is the third body and the only specialist.", source: "Daily Mail / Liverpool FC / Sports Mole" },
    { name: "Federico Chiesa", issue: "Lower back (originally muscle, Como friendly, August)", expected: "Back in training over the international break; Sports Mole pencils 11 October as an availability target", note: "Now the one with an actual date. Lewis Steele reported on Thursday that Chiesa is aiming to resume training towards the end of September, in the first week of the extended international window, having not played since a muscle problem in the Como friendly a month ago. Empire of the Kop note he would almost certainly have played in the cup had he been fit. Left off the Champions League squad, so Europe was never in reach this autumn, but a fifth forward in mid-October would ease a front line covering two flanks with four players.", source: "Daily Mail / Empire of the Kop / Sports Mole" },
  ],
  returning: [
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "Back as captain for forty-five planned minutes of the cup tie, withdrawn at the interval by design", note: "Seven weeks became a controlled half. Iraola handed Gomez the armband for the Tottenham tie, his first appearance since the July muscle injury, and took him off at half-time for Jacquet in a change he confirmed afterwards had been planned: the intention was no more than 45. Four clearances, two blocks and an interception in that time per Sofascore, and a 6 from the Echo. He is a fourth senior centre-back and a third right-back in one body, and Empire of the Kop expect him on the bench at the Vitality rather than in the XI.", source: "Liverpool FC / Empire of the Kop / Sofascore" },
    { name: "Giorgi Mamardashvili", issue: "No injury; behind Alisson all season", status: "First appearance of the season in the cup, and the late save that protected a 3-1", note: "The deputy's evening, and he took it. Confirmed by Iraola on Monday as the only certain starter, Mamardashvili was tested early by Bergvall and then, after Gallagher's header had made it 2-1, produced what EPL Index called an excellent late intervention to stop Spurs levelling. Alisson resumes on Sunday; the point of nights like this is that the gap between the two is now something other than theoretical.", source: "EPL Index (Yahoo Sports) / Liverpool FC" },
    { name: "Cody Gakpo", issue: "Niggles in both adductors, no defined injury", status: "Fit, scoring, and the most productive Liverpool forward of the autumn", note: "The adductor scare that kept him out of the Atletico game is fully behind him. Gakpo led the line against Tottenham with Isak rested and lashed in the second goal shortly after the interval, taking him to two goals and three assists in five appearances per EPL Index. He can play three positions, which in a squad with one senior centre-forward has stopped being a nice-to-have and become the plan.", source: "EPL Index (Yahoo Sports) / Goal" },
    { name: "Wataru Endo", issue: "No injury; available and on the transfer list from January", status: "Put up for sale on Thursday, with FSG to sanction a January exit", note: "The board's assumptions change with this entry. Endo is available for Sunday and will not be here beyond the winter: multiple outlets reported on Thursday that Liverpool will let him go in January, the last window in which a fee is recoverable on a 2027 contract, with Ben Jacobs's line that 'Iraola clearly doesn't fancy him'. Iraola's own account is that four midfielders are ahead of him. The consequence for this page is narrower than the headline: Endo has been the emergency fifth centre-back all autumn, and from February that role has no occupant unless Leoni's knee has held.", source: "CaughtOffside / Football365 / Liverpool FC" },
    { name: "Milos Kerkez", issue: "No injury; competing with Tsimikas at left-back", status: "Two senior left-backs and, per SI, neither currently at the manager's standard", note: "Unchanged by a cup tie and unresolved going into Sunday. Tsimikas misplaced 11 of 31 passes against Fulham and was withdrawn at half-time for Kerkez, who drew a 5 from Rousing The Kop and 'yet more dreadful crossing' from SI. Bournemouth attack through Kluivert cutting inside from the left, which puts the Liverpool right-back under the more obvious pressure, but a left-back who cannot cross is a problem at the other end of the same move.", source: "SI / Rousing The Kop / Squawka" },
  ],
  startersLastMatch: {
    match: "Liverpool 3-1 Tottenham, 15 September (Carabao Cup third round) · confirmed starters only",
    xi: ["Mamardashvili", "Gomez (c)", "Mac Allister", "Nyoni", "Koumas", "Gakpo", "Barcola"],
    changes: "Ten changes from the side that drew with Fulham on 12 September. Seven starters are now confirmed rather than five: the Transfer Hub's passing networks place Trey Nyoni and Bradley Barcola in the side alongside Mamardashvili, Gomez, Mac Allister, Koumas and Gakpo. Gomez was replaced by Jacquet at half-time in a pre-planned change; Nyoni and James McConnell came off on 62 for Gravenberch and Szoboszlai, who scored the third. The remaining four names are still omitted rather than carried over from the pre-match previews.",
    source: "The Transfer Hub / Liverpool FC / Goal",
  },
  depthRisk: [
    { position: "Right-back", level: "high", detail: "Promoted to the top of this list by the fixture rather than by an injury. Bournemouth's most dangerous pattern is Justin Kluivert drifting infield from the left and a runner attacking the space behind the Liverpool right-back, and that right-back has been Ronald Araujo, a natural centre-back, for three straight league games. Conor Bradley is out until late November at the earliest per Sports Mole. Jeremie Frimpong is the alternative and played there in the cup; Joe Gomez, back and now match-fit, is the third body and the only one of the three who is a specialist." },
    { position: "Centre-forward", level: "high", detail: "Still Isak alone in the senior sense, though Tuesday clarified the cover. Cody Gakpo led the line in the cup and scored, his second goal of a season in which he also has three assists, and Lewis Koumas took a first competitive start through the middle and forced a save from Dubravka. Neither is a replacement for a No 9 over a season. Hugo Ekitike is out until January at the earliest, so the position remains one hamstring from a genuine crisis." },
    { position: "Centre-back", level: "medium", detail: "Held at medium for Sunday, with a dated caveat attached to it. Gomez is fit and trained on Thursday, which gives Iraola a genuine fourth body behind Van Dijk and Jacquet rather than a theoretical one, and Leoni is pencilled by Sports Mole for a mid-October return. The caveat is January: Wataru Endo, who has been the emergency fifth centre-half on this board since August, has now been put up for sale, so the department's insurance policy expires with the winter window. If Leoni's recovery slips, this rating goes back up rather than down." },
    { position: "Left-back", level: "high", detail: "Unchanged, and the cup tie did nothing to settle it. Tsimikas misplaced 11 of 31 passes against Fulham and was withdrawn at half-time; Kerkez replaced him and drew a 5 from Rousing The Kop with, per SI, 'yet more dreadful crossing'. Two senior options and a reporting consensus that neither is currently at the manager's standard, in a season where the market is shut until January." },
    { position: "Wide forward", level: "medium", detail: "Eased by the evidence of the cup rather than by any new arrival. Gakpo, Barcola, Munoz and Ngumoha are four for two flanks, Chiesa is now aiming to resume training at the end of September per the Daily Mail, and Tuesday gave the academy forwards a competitive night against Premier League opposition without the team suffering for it. The reporting still says the position the club most wants to buy in January is a right winger who scores." },
    { position: "Central midfield", level: "medium", detail: "Held at medium, and now carrying a deliberate thinning rather than an accidental one. Iraola justified Endo's non-selection by naming the four ahead of him, Nyoni, Gravenberch, Mac Allister and Szoboszlai, and the club has acted on that judgement by listing Endo for January. Szoboszlai's own read of the cup tie went further still, naming Koumas and James McConnell as two who deserve to play. The standing concern is unaltered by any of it: Gravenberch and Szoboszlai won two of ten first-half ground duels between them against Fulham, and the midfield the window did not rebuild is the one the league table is still testing." },
  ],
  sources: ["Sports Mole", "Liverpool FC", "This Is Anfield", "EPL Index", "Goal", "SI", "Rousing The Kop", "Squawka", "Opta Analyst"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-18T08:30:00Z",
  played: 4,
  points: 6,
  pointsPerGame: 1.50,
  projectedPoints: 57,
  projectedFinish: "Conference League places on current pace",
  headline:
    "Sunday is the last fixture before the season takes its fortnight off, and the only soft entry left on the sheet. Six points from four is 1.50 a game and a projected 57, which lands in the Conference League band, though four matches is far too small a sample to forecast from and the next four could move that number by ten in either direction. What the pace does describe accurately is the shape of the risk: Liverpool are eighth, unbeaten, and two points and four places short of a Champions League stripe currently held by two promoted clubs. Win at the Vitality on Sunday and they go into the break on nine from five. Draw a fourth and the pace stays in the mid-fifties, with City, Brentford, Brighton and Arsenal the four league fixtures that follow it.",
  thresholds: [
    { label: "Champions League (top 4)", points: 68, gap: 11, note: "Historical par for the last Champions League place in recent seasons. The live ESPN table this tracker rebuilds each run draws that stripe at fourth, not fifth, so the label follows the table rather than the coefficient arithmetic. Requires roughly 1.82 points per game from here." },
    { label: "Europa League (5th)", points: 60, gap: 3, note: "Fifth-place par, which is where the live table currently draws the Europa stripe, and three points above where the present pace lands. Requires about 1.59 points per game from here." },
    { label: "Conference League (6th-7th)", points: 55, gap: 0, note: "Sixth to seventh place par, often decided by cup outcomes as much as by league finish, and where the pace now sits. The live table carries no Conference stripe this early, because the place is usually settled by a domestic cup." },
    { label: "Safety", points: 38, gap: 0, note: "The conventional survival line, and where the pace sat before the Ipswich win. Nineteen points of projection now separate it from the pace, the size of the sample talking." },
  ],
  thresholdNote:
    "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  runIn: [
    { date: "2026-09-20", opponent: "Bournemouth", home: false, competition: "PL", oppPosition: 15, difficulty: "medium" },
    { date: "2026-10-11", opponent: "Manchester City", home: true, competition: "PL", oppPosition: 2, difficulty: "hard" },
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 7, difficulty: "medium" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 5, difficulty: "hard" },
    { date: "2026-11-01", opponent: "Arsenal", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-11-08", opponent: "Crystal Palace", home: false, competition: "PL", oppPosition: 16, difficulty: "easy" },
  ],
  runInVerdict:
    "The interesting thing about this list is that it has exactly one soft entry and it comes first. After Sunday the sequence reads City at home, Brentford away, Brighton at home, Arsenal at home: three current top-five sides and a Brentford team that is seventh, unbeaten and no kinder for it, all inside four weeks, with a cup tie against Chelsea wedged in beside them. Win at the Vitality and Liverpool enter that block on nine points from five, a 1.80 pace and a projection back inside the Europa band. Draw a fourth and the pace sits in the mid-fifties with the hardest sequence of the season immediately after it, which is how a slow start becomes a settled one. Sunday also carries a complication the table does not show: Bournemouth have led in all four of their league games, so Liverpool are likelier to spend part of the afternoon chasing than fifteenth place implies.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "This Is Anfield", "BBC Sport"],
};
