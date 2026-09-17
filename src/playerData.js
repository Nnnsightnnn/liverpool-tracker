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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Thu Sep 17, morning - the rest is over, and the Vitality is his again. Iraola handed Tuesday's cup tie to Mamardashvili and Alisson watched the 3-1 from the stand, a break built into a run of games the manager has called the hardest a squad can face. Five competitive starts, every minute, one clean sheet at Fulham. Sunday returns him to a Bournemouth side that has scored first in all four of its league games and then won none of them.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Thu Sep 17, morning - the deputy's night holds up on a second viewing, and the numbers say it mattered. Tested early by Bergvall and then beaten by Gallagher's header from a corner, Mamardashvili made the late intervention that kept Tottenham at 2-1 until Szoboszlai settled it, in a tie the published data now shows Liverpool were out-created in: 2.30 expected goals against to 1.53. Iraola had confirmed him on Monday as the only certain starter. Alisson resumes at the Vitality, and the gap between the two is no longer theoretical.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Thu Sep 17, morning - rested, restored, and paired with Jacquet again on Sunday. Van Dijk sat out the Tottenham tie among ten changes and Liverpool won it 3-1 without him, Gomez wearing the armband for forty-five minutes before Jacquet replaced him at the interval. Empire of the Kop expect the two to start at the Vitality with Gomez on the bench. He has played every league minute of the season at 35 because for seven weeks there was no fourth centre-back; there is now. The contract question is untouched: no talks before 2027, no decision before April.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Thu Sep 17, morning - forty-five minutes rather than ninety, and planned that way before kick-off. Iraola confirmed the half-time change was deliberate, telling liverpoolfc.com: 'Joe has been doing the recovery process very well and with him it made sense. It wasn't set but the plan was not a lot more than 45.' Gomez captained the first half on his first appearance since the muscle injury in the Sunderland friendly on 25 July, made four clearances, two blocks and an interception per Sofascore, and drew a 6 from the Echo's Ian Doyle before Jacquet replaced him. Empire of the Kop expect him back on the bench at Bournemouth, which is what a controlled return looks like.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Thu Sep 17, morning - three days out, and the left-back argument has not moved an inch. Neither Kerkez nor Tsimikas has convinced this month: Tsimikas misplaced 11 of 31 passes against Fulham and was withdrawn at half-time for the Hungarian, who drew a 5 from Rousing The Kop and, per SI, 'yet more dreadful crossing'. Bournemouth attack through Kluivert cutting inside from their left, so Sunday tests the Liverpool right first, but a left-back who cannot deliver is the other half of the same move.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Thu Sep 17, morning - individual training and ball work, which is further along than he was a week ago. Lewis Steele's Liverpool Confidential for the Daily Mail reports that Bradley has begun training on his own and is doing ball work as he rehabilitates the knee injury sustained against Arsenal in January, 'small steps' but positive ones. Sports Mole still pencils Manchester United on 21 November as the earliest return. Until then the right-back is Araujo out of position, Frimpong, or Gomez, and Bournemouth's clearest route to goal runs at precisely that space.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Thu Sep 17, morning - one of three imperfect answers, with three days left to choose between them. Frimpong played in the cup win over Tottenham in a back four missing Van Dijk, and was the better of the late changes at Fulham three days before that. Empire of the Kop expect Araujo restored to the right flank at the Vitality, which would leave the Dutchman on the bench again. With Bradley out until late November, the department has three bodies and no specialist starter.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Thu Sep 17, morning - stepping up the recovery, a year on from the debut that ended it. Lewis Steele reported on Thursday that Leoni is stepping up his rehabilitation from the ACL rupture, with Sports Mole pencilling availability around 14 October and Iraola's own framing more cautious: the plan is to start training with the group during the international break. He was not part of Tuesday's calculation. When he returns, the centre-back department stops being a rota and becomes a choice.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Thu Sep 17, morning - forty-five minutes of the cup, and the Sunday shirt looks his. Jacquet replaced Gomez at half-time against Tottenham in a change Iraola had planned before kick-off, and snuffed out Marmoush on the break after a Gravenberch giveaway, three days after the goal-line clearance at Fulham that both ratings cards made the best individual act of the afternoon, an 8 from Rousing The Kop and 8.1 on FotMob. Empire of the Kop expect him alongside Van Dijk at the Vitality against an attack that runs in behind rather than holds the ball up.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Thu Sep 17, morning - a season in Spain, and nothing here touches it. Ndukwe is spending the campaign on loan at Levante, outside the cup squad and outside the rotation the Tottenham tie tested. Neither Tuesday's team sheet, Wednesday night's fourth-round draw nor Sunday's preview involves him.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 32, name: "Kostas Tsimikas", number: 21, position: "DEF", nationality: "🇬🇷 Greece", age: 30, appearances: 6, goals: 0, assists: 1, cleanSheets: 1, xG: 0.2, tacklesPer90: 1.7, passCompletion: 79, progressiveCarries: 3.1, form: 5.8, status: "fit", injuryNote: "Thu Sep 17, morning - Squawka's pick for Sunday, and the reviews still arguing against him. Tsimikas returned from a season on loan at Roma over the summer and is Squawka's predicted starter at Bournemouth, though he misplaced 11 of 31 passes against Fulham on 12 September and was withdrawn at half-time for Kerkez, with SI and Rousing The Kop marking both down. Two senior left-backs, neither yet at Iraola's standard, and a market shut until January.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png",
    physical: { height: 178, weight: 76, pace: 79, acceleration: 80, sprintSpeed: 78 },
    career: [
      { years: "2017-2020", club: "Olympiacos", fee: null, type: "senior" },
      { years: "2020-", club: "Liverpool", fee: "€13M", type: "senior" },
      { years: "2025-26", club: "Roma", fee: null, type: "loan" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Thu Sep 17, morning - the one senior midfielder nobody is arguing about. Mac Allister moved beyond the midfield line and struck the opener first time into the top corner on twenty-one minutes, three days after the Fulham blank and six after his goal against Atletico Madrid, and the Transfer Hub's review of the tie called him the exception among Liverpool's senior midfielders. He also played the pass that sent Szoboszlai clear for a chance the Hungarian scuffed, an hour before the one he did not.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Thu Sep 17, morning - an hour on the bench, then a cameo that revived the Fulham complaint. Gravenberch came on with Szoboszlai on 62 minutes, Liverpool two goals up, and the Transfer Hub's passing networks record loose touches and wayward passing from both, including a one-two with Barcola he declined in order to carry the ball and lost it, sending Spurs away on the counter Jacquet had to snuff out. Duels and interceptions were better. Bournemouth press high and turn the ball over deliberately, which makes Sunday the more literal examination.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Thu Sep 17, morning - a finish worth 0.03 expected goals, and worth the entire evening. With Tottenham pressing at 2-1, Szoboszlai met a loose ball around thirty-five yards out and volleyed it past Dubravka in stoppage time, a strike the Transfer Hub's shot map values at 0.03 xG and its author thinks generous at that. He had been rested from the start for the first time this season, having begun every competitive game until Tuesday, and came on at 62 alongside Gravenberch.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Thu Sep 17, morning - the emergency that keeps receding. Endo had played nothing across the first five competitive games, fourth in the midfield queue and left off the European squad, and the cup tie was the fixture the calendar reserved for him. His standing role is clearer than his position: the emergency fifth centre-half whenever that department thins, which with Gomez back and Leoni stepping up his recovery is less likely than it was a fortnight ago.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Thu Sep 17, morning - a rumour to bat away, and a fixture that ought to help. Christian Falk addressed reports of a 'shock move' to Bayern Munich on Wednesday, the sort of noise that attaches to a marquee signing five competitive games into a season without a goal or an assist. Wirtz sat out the cup tie among ten changes and watched Mac Allister score from the position a ten is meant to attack. Bournemouth away, against a side that concedes in transition and has shipped seven in four, is as accommodating a first contribution as the autumn offers.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Thu Sep 17, morning - the cup performance is confirmed now, and so are the numbers behind the praise. Nyoni, nineteen, started in midfield against Tottenham and played until the 62nd minute, completing 95 per cent of his passes, releasing 25 of his 37 first time or within two seconds, winning three of four ground duels and attempting ten defensive actions, per the Transfer Hub. The Daily Mail's Lewis Steele called him 'a Rolls-Royce in the making'. His contract remains unsigned, with This Is Anfield reporting a new deal in prospect after a Nottingham Forest bid was rejected.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Thu Sep 17, morning - a second goal of the season, and a role that has stopped being a contingency. Gakpo found the space to lash in Liverpool's second shortly after the interval against Tottenham, taking him to two goals and three assists in five appearances per EPL Index. He can play three positions, which in a squad with one senior centre-forward has become the plan rather than a convenience, though Isak returns for Sunday and the middle goes back to him.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Thu Sep 17, morning - rested and restored, with the service still the open question. Isak sat out the cup tie having started all five competitive games, and Gakpo led the line and scored in his place. Sixteen touches against Fulham, the second fewest for a Liverpool outfielder on record per the BBC, behind his own fourteen against Forest, is the number that frames him rather than three league goals in four. Squawka make him the likeliest scorer at the Vitality on Sunday.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Thu Sep 17, morning - the absence Wednesday night's draw quietly lengthened. Ekitike's Achilles rupture and surgery leave January as the earliest realistic return, the club's own framing a hope and a realistic chance of the last two Champions League league-phase games, Inter on 19 January and Lens on 27 January per This Is Anfield. The fourth-round tie with Chelsea adds a tenth fixture to an autumn Empire of the Kop count as nine matches in 29 days from mid-October, every one of them facing Isak as the only senior nine.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Thu Sep 17, morning - eighteen, and already a name other clubs are reported to be watching. Fabrizio Romano and David Ornstein both addressed reported Arsenal interest in Ngumoha on Wednesday, which is a particular kind of compliment and a particular kind of problem. The on-pitch record is thinner: a Fulham cameo that drew a 4 from Rousing The Kop for an overhit cross and a counter conceded, and a cup tie the confirmed accounts do not place him in. A season of evenings like Tuesday's is how the first of those gets answered.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 31, name: "Lewis Koumas", number: 67, position: "FWD", nationality: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.3, passCompletion: 77, progressiveCarries: 1.8, form: 6.3, status: "fit", injuryNote: "Thu Sep 17, morning - a first competitive start through the middle, and a claim staked in the right week. Koumas, twenty, led the line against Tottenham and was denied by Dubravka, with the Transfer Hub reading the night as him further staking his claim to a backup striker role. He made his Premier League debut as a substitute in the 2-2 at Newcastle in August, and three loan spells at Stoke, Birmingham and Hull are behind him. In a squad with one senior centre-forward, that claim is worth more than it would be anywhere else.", image: "",
    physical: { height: 180, weight: 73, pace: 80, acceleration: 81, sprintSpeed: 79 },
    career: [
      { years: "2013-", club: "Liverpool", fee: null, type: "youth" },
      { years: "2024-25", club: "Stoke City", fee: null, type: "loan" },
      { years: "2025", club: "Birmingham City", fee: null, type: "loan" },
      { years: "2025-26", club: "Hull City", fee: null, type: "loan" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Thu Sep 17, morning - a training date at last, and it falls inside the break. Lewis Steele reported on Thursday that Chiesa is aiming to resume training towards the end of this month, in the first week of the extended international window, having not played since the muscle problem picked up in the Como friendly a month ago. Empire of the Kop note he would almost certainly have played against Tottenham had he been fit. Mid-October availability would give a front line covering two flanks with four players a fifth body.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Thu Sep 17, morning - third of three, and the order held through a rotation night. Woodman was not required for the cup tie that went to Mamardashvili, which is the fixture a third goalkeeper is usually given, and with both senior keepers fit his season remains a bench one at most.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Thu Sep 17, morning - four appearances in, and the cup night passed without a headline. Munoz was named in every pre-match XI for the Tottenham tie on the right, three days after heading a corner against the Fulham bar and being withdrawn on the hour, a 4 from Rousing The Kop against a 6.7 from SI. None of the post-match accounts this board uses mention him, which in a 3-1 is its own kind of verdict. Four appearances into a Liverpool career, in the competition designed for exactly this.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Thu Sep 17, morning - back to the right flank on Sunday, by most readings of it. Empire of the Kop expect Araujo restored at right-back at the Vitality, which would be a fourth straight league start in a position that is not his, because Bradley is out until late November. Bournemouth's clearest route to goal is Kluivert drifting infield from the left and a runner attacking the space that leaves behind him. The 55m-euro buy option on his loan, confirmed by Romano, is a question for the spring.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Thu Sep 17, morning - on the pitch on Tuesday, and still being built through games. Barcola featured in the cup tie, on the end of the one-two Gravenberch declined to play in the move that sent Spurs away on the counter, and remains short of a pre-season. Iraola's framing has been consistent: the club is building his physical condition through games, and the four wide forwards will play both flanks all season. Bournemouth away rewards runners, which is the version of him the fee assumed.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  focus: "Liverpool 3-1 Tottenham, Carabao Cup third round: Dominik Szoboszlai, on from the bench with Spurs pressing at 2-1, meets the ball around thirty yards out and volleys it past Martin Dubravka in stoppage time to settle the tie",
  credit: "Plate · Daily edition",
  generatedAt: "2026-09-17T12:30:00Z",
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
// Last refresh: 2026-09-16 (Wednesday morning, ~4am ET). Re-fetched from ESPN and byte-identical to the previous pull: no
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
  generatedAt: "2026-09-17T12:30:00Z",
  overview:
    "Two rounds of cup football have passed over this table without disturbing a single row, which is its own reminder of how little September has settled. Arsenal and Manchester City are still perfect on twelve, separated by a goal, and the two promoted sides, Leeds and Hull, still hold the remaining Champions League places on eight, which is the most interesting fact in English football at the moment and will probably not survive October. Liverpool are eighth on six, two points and four positions off that line, level with Everton and behind Brentford on goal difference. At the bottom, Coventry are still on nothing from four. Sunday takes Liverpool to fifteenth-placed Bournemouth, the last league game before the break and the last bottom-half opponent until November.",
  teams: {
    "Liverpool": "Eighth on six from four and unbeaten, one win and three draws, with nothing since Saturday to move it. Two points and four places off a Champions League stripe, and then nine matches in twenty-nine days from 11 October, three of them at Anfield around Halloween.",
    "Arsenal": "Joint top on twelve and perfect from four, ahead of City only on goal difference. Through the cup tie at Ipswich and handed the lowest-ranked side left, League Two Fleetwood, in Wednesday night's fourth-round draw. At Anfield on 1 November.",
    "Manchester City": "Level on twelve, the derby won with ten men after Foden's dismissal. Their own cup tie, against Norwich, is tonight, the last of the round, with Brighton waiting in the fourth round for whoever survives it. Visit Anfield on 11 October.",
    "Leeds": "Third on eight, unbeaten, the promoted side nobody has beaten yet. Their 4-1 of Newcastle on Monday was the week's statement before a ball was kicked in the cup.",
    "Hull": "Fourth on eight, promoted and unbeaten, holding a Champions League place that looked absurd in August and looks merely surprising now.",
    "Brighton": "Fifth on seven and alone on the Europa line. Came from behind at Old Trafford on Wednesday to put Manchester United out, and face City or Norwich next. At Anfield on 25 October.",
    "Chelsea": "Sixth on seven, outside a European stripe on goal difference alone. Drawn at Anfield in the fourth round of the cup, which brings Xabi Alonso back to L4 a third autumn running with a third different club.",
    "Brentford": "Seventh on six, unbeaten like Liverpool and a place above them on goal difference. Host Liverpool on 17 October.",
    "Everton": "Ninth on six, level with Liverpool on points and goal difference, behind only on goals scored. Through the cup tie with Wolves and drawn at home to Newcastle, a fixture they then reverse in the league the following Monday.",
    "Newcastle": "Twelfth on five, the four conceded at Elland Road still the heaviest bill of that round, and drawn away at Everton in the fourth round of the cup.",
    "Manchester United": "Thirteenth on four, and out of the cup: Brighton came from behind at Old Trafford on Wednesday night, the result that closed the third round before the draw was made.",
    "Bournemouth": "Fifteenth on three, the only side in Premier League history to lead in all four of its openers and win none, though already into the cup's fourth round after 4-0 at Lincoln. Sunday brings Liverpool and Andoni Iraola back to the Vitality, to the club he built and left in June.",
    "Tottenham": "Seventeenth on two, out of the cup after Tuesday's 3-1 at Anfield, and still without a Premier League goal in four attempts. De Zerbi's side carry their own troubles home before Liverpool see them again at Anfield on 19 December.",
    "Fulham": "Eighteenth on one, the Anfield point still their only one; inside the relegation stripe.",
    "Coventry": "Bottom on nothing: four defeats, no goal scored, minus ten, and out of the cup, with Aston Villa going through to a fourth-round trip to Bournemouth.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Alonso, Again, And This Time On A Wednesday In October.",
    byline: "Sky Sports / EFL",
    dateline: "Anfield \u00b7 16 September",
    category: "Football News",
    body:
      "The balls came out at twenty to eleven on Wednesday night, after Brighton had finished off Manchester United at Old Trafford, and they gave Liverpool the tie the competition wanted. Chelsea at Anfield in the fourth round, in the week beginning 26 October, which Empire of the Kop read as most likely Wednesday the 28th, wedged between home league games with Brighton and Arsenal. It brings Xabi Alonso back to L4 for a third successive autumn with a third different club, after Leverkusen and Real Madrid, and it brings him back as the manager Liverpool did not hire. Five of the eight ties are all-Premier League. Bournemouth, Sunday's hosts, drew Aston Villa.",
  },
  {
    n: "02",
    headline: "Forty-Five, And Every Minute Of It Deliberate.",
    byline: "Empire of the Kop / Liverpool FC",
    dateline: "Anfield \u00b7 16 September",
    category: "Injuries",
    body:
      "The one line of Tuesday that needed correcting has been corrected by the manager himself. Joe Gomez did not play ninety minutes on his return; he played forty-five, captained them, and came off at the interval for J\u00e9r\u00e9my Jacquet because that was the plan before kick-off. 'Joe has been doing the recovery process very well,' Iraola said. 'It wasn't set but the plan was not a lot more than 45.' Four clearances, two blocks, an interception, a 6 from the Echo. Seven weeks after a muscle injury in a July friendly, a controlled half is not a disappointment. It is the shape of a return done properly, and it is why he will probably start Sunday on the bench.",
  },
  {
    n: "03",
    headline: "The Numbers Arrive, And They Are Not Flattering.",
    byline: "The Transfer Hub / This Is Anfield",
    dateline: "Anfield \u00b7 17 September",
    category: "Tactics",
    body:
      "Two days on, the data for the cup tie has been published, and it says something the scoreline politely declined to. Tottenham created more: 2.30 expected goals to Liverpool's 1.53, seventeen shots to twelve, three big chances to two, fifty-six per cent of the ball. Liverpool scored three from five on target because all three were finishes rather than chances, most obviously Szoboszlai's volley, valued at 0.03 and generous at that. Conor Gallagher's header, by contrast, was worth 0.9. A combined four expected goals is a proper cup tie. It is also the third match running in which this team has been out-created and come away content.",
  },
  {
    n: "04",
    headline: "The Nineteen-Year-Old Who Made The Case Quietly.",
    byline: "Daily Mail / The Transfer Hub",
    dateline: "AXA Training Centre \u00b7 17 September",
    category: "Manager",
    body:
      "Andoni Iraola made ten changes and trusted the academy with the middle of the pitch, and the return on it was the least dramatic thing about Tuesday and possibly the most useful. Trey Nyoni completed ninety-five per cent of his passes, released twenty-five of thirty-seven inside two seconds or on the first touch, won three of four ground duels and attempted ten defensive actions before coming off on the hour. The Mail's Lewis Steele called him a Rolls-Royce in the making. His contract is still unsigned, a Nottingham Forest bid having been turned down in the summer, which gives the autumn a second meaning.",
  },
  {
    n: "05",
    headline: "Nine Games In Twenty-Nine Days, Starting Sunday.",
    byline: "Empire of the Kop / Premier League",
    dateline: "Liverpool \u00b7 17 September",
    category: "Race for Europe",
    body:
      "Bournemouth on Sunday is the last fixture before the international window, and what waits on the far side of it is the season's real examination. Nine matches in twenty-nine days from 11 October: City at Anfield, LASK away, Brentford away, Villarreal at home, Brighton at home, Chelsea in the cup, Arsenal at home, Fenerbahce away, Palace away. Three home games in a week around Halloween. Liverpool enter it eighth, unbeaten, six points from four, two points and four places off a Champions League stripe currently held by Leeds and Hull. Nothing in that month is a place to start fixing things.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-17T12:30:00Z",
  summary:
    "Liverpool know their October now, and it has Xabi Alonso in it. The Carabao Cup fourth-round draw, made at Old Trafford on Wednesday night once Brighton had knocked Manchester United out, sent Chelsea to Anfield in the week beginning 26 October, most likely on the Wednesday, which brings the former Liverpool midfielder back to L4 for a third straight autumn with a third different club and, this time, as the manager the club considered and did not appoint. Closer to hand, Thursday brought two corrections and one piece of encouragement. Joe Gomez played forty-five minutes on Tuesday rather than ninety, a half-time change Iraola confirmed was planned before kick-off, and is expected to start Sunday on the bench. Federico Chiesa is aiming to resume training at the end of this month, with Giovanni Leoni stepping up his recovery and Conor Bradley now doing individual work with a ball. And the data for the cup tie has finally been published: Liverpool were out-created 2.30 expected goals to 1.53 and won 3-1 anyway. Bournemouth away on Sunday, the last game before the international break, is still the fixture the month turns on.",
  keyTopics: [
    {
      title:
        "Liverpool Drawn At Home To Chelsea In The Carabao Cup Fourth Round (Sky Sports / EFL, today)",
      detail:
        "The reward for Tuesday arrived at about twenty to eleven on Wednesday night, after Brighton had come from behind to win at Old Trafford and eliminate Manchester United. Liverpool host Chelsea in the fourth round, one of five all-Premier League ties in a draw that also gave Arsenal a trip to League Two Fleetwood and paired Sunday's hosts Bournemouth with Aston Villa. The EFL confirmed the ties for the week commencing Monday 26 October; with Liverpool playing Brighton on the 25th and Arsenal on 1 November, Empire of the Kop read Wednesday 28 October as the likeliest slot.",
      category: "matches",
    },
    {
      title:
        "It Brings Xabi Alonso Back To Anfield For A Third Autumn With A Third Club (Empire of the Kop, today)",
      detail:
        "The tie's subplot is the visiting dugout. Alonso has now been drawn to Anfield as an away manager in three consecutive autumns, with Bayer Leverkusen, then Real Madrid, and now Chelsea, whom he joined this summer after turning down the chance to succeed Jurgen Klopp on Merseyside. Liverpool and Chelsea have met in this competition's final twice in five seasons, in 2022 and 2024, and ten times in it since the turn of the century per Transfermarkt. For Andoni Iraola, beating the man FSG passed over would be a particular kind of vindication, and would leave Liverpool two rounds from Wembley.",
      category: "matches",
    },
    {
      title:
        "Gomez Played Forty-Five Minutes, Not Ninety, And The Half-Time Change Was Planned (Liverpool FC / Empire of the Kop, today)",
      detail:
        "A correction worth making plainly, because the first reports of Tuesday implied otherwise. Joe Gomez captained the cup tie on his first appearance since a July muscle injury and was withdrawn at the interval for Jeremy Jacquet, which Iraola confirmed was deliberate: 'Joe has been doing the recovery process very well and with him it made sense. It wasn't set but the plan was not a lot more than 45.' He made four clearances, two blocks and an interception in that half per Sofascore, and drew a 6 from the Echo's Ian Doyle. Empire of the Kop expect Van Dijk and Jacquet to start at Bournemouth with Gomez on the bench.",
      category: "injuries",
    },
    {
      title:
        "The Cup Tie's Data Is Published: Liverpool Out-Created 2.30 To 1.53 And Won It Anyway (This Is Anfield / The Transfer Hub, today)",
      detail:
        "The card that sat blank on the analysis board on Wednesday can be filled in. Tottenham finished the tie with 2.30 expected goals to Liverpool's 1.53, seventeen shots to twelve, six on target to five, three big chances to two and fifty-six per cent of the ball. Liverpool scored three because all three were finishes rather than converted chances: Gallagher's header for Spurs was worth 0.9 on its own, while Szoboszlai's thirty-five-yard volley is valued at 0.03. A combined total near four is a proper cup tie. It is also a third successive match in which this team has been out-created and come away satisfied.",
      category: "tactics",
    },
    {
      title:
        "Chiesa Aiming To Resume Training This Month, Bradley Doing Ball Work (Daily Mail, today)",
      detail:
        "Lewis Steele's Liverpool Confidential on Thursday carried the most encouraging paragraph of the week. Federico Chiesa, who has not played this season after a muscle problem in the Como friendly a month ago, is targeting a return to training towards the end of September, in the first week of the extended international window. Giovanni Leoni is stepping up his recovery a year on from the ACL rupture suffered on debut, and Conor Bradley has begun individual training and ball work after the knee injury sustained against Arsenal in January. Steele's own framing is the right one: small steps on the latter two, but positive to hear.",
      category: "injuries",
    },
    {
      title:
        "Nine Matches In Twenty-Nine Days Await On The Other Side Of The Break (Empire of the Kop / Premier League, today)",
      detail:
        "Sunday at the Vitality is the last fixture before the international window, and the schedule that resumes afterwards is the season's real test of a squad the cup tie showed to be thin in specific rooms rather than short overall. From 11 October: Manchester City at home, LASK away, Brentford away, Villarreal at home, Brighton at home, Chelsea in the cup, Arsenal at home, Fenerbahce away and Crystal Palace away. Three of those are at Anfield inside eight days around Halloween. Liverpool go into it with Isak the only senior centre-forward and no natural right-back.",
      category: "matches",
    },
    {
      title:
        "Nyoni's Confirmed Numbers Make The Academy Case Without Raising Its Voice (The Transfer Hub / Daily Mail, today)",
      detail:
        "The detail of Tuesday that has hardened rather than faded. Trey Nyoni, nineteen, started in midfield and played to the 62nd minute, completing ninety-five per cent of his passes, releasing twenty-five of his thirty-seven either first time or inside two seconds, winning three of four ground duels and attempting ten defensive actions. The Transfer Hub read it as a midfielder who knows where the next pass goes before the ball arrives, with the caveat that the stamina is not there yet. Lewis Steele called him a Rolls-Royce in the making. His contract is unsigned, a Nottingham Forest bid having been rejected in the summer.",
      category: "general",
    },
    {
      title:
        "Gravenberch And Szoboszlai's Hour Revived The Fulham Complaint (The Transfer Hub, today)",
      detail:
        "Not everything from Tuesday reads well. The two senior midfielders came on together on 62 minutes with Liverpool two goals up, and the Transfer Hub's passing networks record loose touches and wayward passing from both, including a one-two Gravenberch declined with Barcola in order to carry the ball, lost it, and sent Tottenham away on the counter that Jacquet had to snuff out. The reviewer's word for it was a reminder of the Fulham game. Gravenberch's duels and interceptions were better. Bournemouth press high and turn the ball over on purpose, which makes Sunday the more literal examination.",
      category: "tactics",
    },
    {
      title:
        "Eighth, Two Points Off Fourth, And Nothing Has Moved Since Saturday (ESPN, today)",
      detail:
        "The table is exactly where the weekend left it, because no league football has been played since. Liverpool are eighth on six points from four, unbeaten on one win and three draws, level with Everton and behind Brentford on goal difference, with Arsenal and Manchester City perfect on twelve and the promoted pair Leeds and Hull holding the remaining Champions League places. The gap from eighth to fourth is two points and four positions. Fulham, Aston Villa and Coventry occupy the relegation stripe, the last of them still on nothing from four.",
      category: "matches",
    },
    {
      title:
        "Bournemouth Arrive At Sunday Off Marco Rose's First Win, 4-0 Against Lincoln (Sky Sports / Goal, 1d ago)",
      detail:
        "The dossier needs amending on one point: Sunday's hosts are no longer winless in everything. Marco Rose collected his first victory as Bournemouth manager on Tuesday, a 4-0 against Lincoln City in the cup built on a Ryan Christie hat-trick, with goals on seven, sixty-nine and eighty-eight minutes and Rayan adding a fourth from the bench in stoppage time. It does not touch the league record, which remains the strangest line of their season: first side in Premier League history to lead in each of their opening four fixtures and win none of them. They are fifteenth on three points.",
      category: "matches",
    },
  ],
  sources: [
    "Sky Sports",
    "EFL",
    "Empire of the Kop",
    "Liverpool FC",
    "Daily Mail",
    "The Transfer Hub",
    "This Is Anfield",
    "Sofascore",
    "Goal",
    "ESPN",
    "Premier League",
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
  generatedAt: "2026-09-17T12:30:00Z",
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
    "Three days out, the dossier needs one line amended and the rest of it stands. Marco Rose has a first win as Bournemouth manager, collected on Tuesday in the cup, 4-0 against Lincoln City with a Ryan Christie hat-trick on seven, sixty-nine and eighty-eight minutes and Rayan off the bench in stoppage time. It does not touch the league record at the centre of this scouting picture, which remains the strangest line of anyone's season: they are the first side in Premier League history to lead in each of their opening four fixtures and win none of them. Three draws and a defeat is three points and fifteenth place, and every one of those results was a lead surrendered. The most recent, a 2-2 with Brentford at the Vitality on 13 September, had the whole pattern in ninety minutes: Kevin Schade scored first, Justin Kluivert levelled, Marcus Tavernier turned it round after the interval, and a Djordje Petrovic error gave Schade his second, with Ben Gannon-Doak striking the woodwork in stoppage time. Marco Rose, in his first season after replacing Andoni Iraola, told Match of the Day he was encouraged by the reaction. They are, in short, a competent side with a closing problem, which is a very particular kind of opponent for a Liverpool team that has drawn three of its four. The fixture's other story needs no numbers: Iraola goes back to the club he managed until the summer, and took into Europe, for the first time.",
  shape:
    "Rose has kept the high-tempo, heavy-pressing identity the Vitality inherited from Iraola rather than rebuilding it, and Squawka's preview reads the hosts as a 4-2-3-1 with Alex Scott and Tyler Adams screening and Tavernier floating off the front. The threat comes through the inside-left and the transition after a turnover in Bournemouth's own half, Kluivert drifting infield and Evanilson running the channel, which is how they have manufactured a first goal in every match this season. The problem is the other end: seven conceded in four, and the late collapses at Newcastle and against Brentford both arrived from set-piece scrambles and goalkeeping error rather than from being outplayed. A side that scores first and then retreats is exactly the kind of game Liverpool's season has not yet learned how to close out from either direction.",
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
    "Scott", "Adams", "Tavernier", "Kluivert", "Rayan", "Evanilson",
  ],
  absentees: [
    { name: "Julian Araujo", issue: "Thigh", status: "Out" },
    { name: "Eli Kroupi", issue: "Ankle and foot", status: "Out" },
    { name: "Amine Adli", issue: "Calf", status: "Out" },
    { name: "Veljko Milosavljevic", issue: "Knee", status: "Out" },
  ],
  recentForm: [
    { date: "2026-09-15", opponent: "Lincoln City", home: true, score: "4-0", result: "W", note: "Carabao Cup third round, and Marco Rose's first win in charge. Ryan Christie scored a hat-trick, on seven, sixty-nine and eighty-eight minutes, with Rayan adding a fourth from the bench in stoppage time. A rotated side and a lower-division opponent, so it proves little about Sunday beyond the fact that this group can finally see a lead out. They meet Aston Villa in the fourth round." },
    { date: "2026-09-13", opponent: "Brentford", home: true, score: "2-2", result: "D", note: "Schade opened, Kluivert levelled, Tavernier turned it round after the break, and a Petrovic error let Schade equalise. Gannon-Doak hit the woodwork in stoppage time. The result made Bournemouth the first side to lead in each of their opening four Premier League fixtures without winning any of them." },
    { date: "2026-09-05", opponent: "Newcastle", home: false, score: "2-2", result: "D", note: "Two goals ahead at St James' Park through Tavernier and a Thiaw own goal after Kluivert struck the post, then pegged back by Barnes and a Jacob Ramsey finish on 88. A third lead surrendered in three games." },
    { date: "2026-08-29", opponent: "Everton", home: true, score: "1-1", result: "D", note: "A home draw played in front of 11,135, the lowest attendance recorded in the division this season." },
    { date: "2026-08-23", opponent: "Manchester City", home: false, score: "1-2", result: "L", note: "Beaten on the opening day at the Etihad, having led there as well, per Squawka's form guide. Their only defeat of the season." },
  ],
  liverpoolAngle:
    "Both sides come off a cup win and neither of them has beaten a Premier League team in the league this month, which is a more precise way of putting the fixture than either table position manages. Bournemouth have led in all four and taken three points; Liverpool have drawn three and taken six. The overlap is the twenty minutes after a lead is established, which is precisely the phase Tuesday's cup tie exposed again, Gallagher's header turning a comfortable 2-0 into an hour of discomfort that Mamardashvili had to save. FORM_TRENDS keeps fast-break concession as the highest-severity pattern on the board, nine such goals since the start of last season per Opta, the most in the league, and Tavernier and Kluivert are exactly the profile that punishes it: a floating ten and an inverted wide forward attacking the space behind a full-back. That full-back is the second concern. With Bradley out until late November, Araujo has started three straight league games at right-back out of position, and SQUAD_LOAD has centre-back down to medium now that fourth body has finally played, with right-back promoted to high in its place. The counterweight is that Bournemouth concede: seven in four, two of them to goalkeeping and set-piece errors in the last two games, and Squawka's own model still has Liverpool as the likelier winner at 41 per cent. This is the last league fixture before the extended international break, and the last bottom-half opponent before a block of City, Brentford, Brighton and Arsenal.",
  modelLine: { source: "Squawka Signal", liverpool: 41, draw: 25, opponent: 34, note: "Squawka's own model, published 14 September, makes Liverpool the pick at 41 per cent while flagging the market as soft on Bournemouth. Reported here as a model output, not a prediction." },
  sources: ["Squawka", "Goal", "Sky Sports", "Yahoo Sports", "This Is Anfield", "Liverpool Echo", "Premier League", "ESPN", "Opta Analyst"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-17T12:30:00Z",
  competition: "PL",
  played: 4,
  headline:
    "The league columns are untouched, because the only football since Saturday was a cup tie, but the cup tie's numbers have now been published and they are worth carrying. Liverpool won 3-1 and were out-created: 2.30 expected goals against to 1.53, seventeen shots to twelve, three big chances to two, fifty-six per cent of the ball to Tottenham. All three goals were finishes rather than converted chances, Szoboszlai's volley worth 0.03 on the shot map against the 0.9 of Gallagher's header at the other end. That makes three matches running in which this team has been out-created and come away content, which is a pattern rather than a run of luck. The league totals stand where the Fulham draw left them: 6.00 expected goals for and 5.16 against across four games, six scored, four conceded, Opta throughout. Bournemouth on Sunday is the first fixture since 12 September that will move any of it.",
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
    "Tottenham out-created Liverpool in a tie they lost 3-1: 2.30 expected goals to 1.53, seventeen shots to twelve, three big chances to two, and 56 per cent of the ball, per the stat block carried by This Is Anfield.",
    "Dominik Szoboszlai's stoppage-time volley is valued at 0.03 expected goals on the Transfer Hub's shot map, whose author argues 0.01 would be fairer for a knee-height strike from thirty-five yards. Conor Gallagher's header at the other end was worth 0.9.",
    "Trey Nyoni completed 95 per cent of his passes on a first start of the season, releasing 25 of his 37 either first time or within two seconds of receiving, and won three of four ground duels, per the Transfer Hub.",
    "Tuesday's 3-1 was the first time Liverpool have scored three in a match this season, in their sixth competitive fixture, and their first win in any competition since Ipswich on 4 September, per Goal.",
  ],
  sources: ["Opta Analyst", "Squawka", "Goal", "EPL Index", "Liverpool FC", "BBC Sport", "Sofascore", "Premier League", "Sky Sports", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-17T12:30:00Z",
  headline:
    "Three days from Bournemouth, and Thursday's reporting moved every name on the treatment table in the same direction. Lewis Steele has Federico Chiesa aiming to resume training at the end of this month, Giovanni Leoni stepping up his recovery from the ACL rupture, and Conor Bradley now doing individual work with a ball eight months after the knee injury against Arsenal. None of that helps on Sunday, and Bradley and Hugo Ekitike remain firmly out. What the cup tie proved is that this squad is not short of players so much as short of cover in particular rooms: still no natural right-back until late November, still one senior centre-forward in Alexander Isak, still two left-backs the reporting is unanimous and unkind about. Joe Gomez is back, but at forty-five controlled minutes rather than ninety, and is expected to start the weekend on the bench.",
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
    { name: "Wataru Endo", issue: "No injury; unused until the cup tie", status: "Involved in the rotation at last, in a back line short of specialists", note: "Nought minutes in the first five competitive games, then a night in the cup, which is precisely the pattern his role now implies: fourth in the midfield queue, left off the European squad, and the emergency fourth centre-half whenever the centre-back department thins. With Gomez back and Leoni pencilled for mid-October, the emergency is less likely than it was a fortnight ago.", source: "This Is Anfield / Sports Mole" },
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
    { position: "Centre-back", level: "medium", detail: "Downgraded from high, for the first time since the opening weeks, because the fourth body finally played. Gomez started the cup tie and captained it, seven weeks after the July muscle injury, which gives Iraola a genuine rotation behind Van Dijk and Jacquet rather than a theoretical one. Wataru Endo remains the emergency fifth. Giovanni Leoni is pencilled by Sports Mole for a mid-October return, at which point this drops again." },
    { position: "Left-back", level: "high", detail: "Unchanged, and the cup tie did nothing to settle it. Tsimikas misplaced 11 of 31 passes against Fulham and was withdrawn at half-time; Kerkez replaced him and drew a 5 from Rousing The Kop with, per SI, 'yet more dreadful crossing'. Two senior options and a reporting consensus that neither is currently at the manager's standard, in a season where the market is shut until January." },
    { position: "Wide forward", level: "medium", detail: "Eased by the evidence of the cup rather than by any new arrival. Gakpo, Barcola, Munoz and Ngumoha are four for two flanks, Chiesa is now aiming to resume training at the end of September per the Daily Mail, and Tuesday gave the academy forwards a competitive night against Premier League opposition without the team suffering for it. The reporting still says the position the club most wants to buy in January is a right winger who scores." },
    { position: "Central midfield", level: "medium", detail: "The department the cup tie flattered. Mac Allister scored from the edge of the box and, per EPL Index, praised the attitude of the academy players around him, with Trey Nyoni getting the minutes he has waited all season for. The standing concern is unaltered: Gravenberch and Szoboszlai won two of ten first-half ground duels between them against Fulham, and Sports Mole's line that the 'problem' midfield was never addressed in the window is still the one the league table is testing." },
  ],
  sources: ["Sports Mole", "Liverpool FC", "This Is Anfield", "EPL Index", "Goal", "SI", "Rousing The Kop", "Squawka", "Opta Analyst"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-17T12:30:00Z",
  played: 4,
  points: 6,
  pointsPerGame: 1.50,
  projectedPoints: 57,
  projectedFinish: "Conference League places on current pace",
  headline:
    "The second route now has a date on it. Wednesday night's draw put Chelsea at Anfield in the fourth round of the Carabao Cup, most likely on 28 October, which keeps alive a path into Europe that does not require winning four points a week for eight months. That matters more than it usually would, because the league pace is modest and the sample is too small to forecast from: six points from four is 1.50 a game and a projected 57, a number the next four matches could move by ten in either direction. Liverpool are eighth, unbeaten, two points and four places from a Champions League stripe held by Leeds and Hull. The league resumes on Sunday at Bournemouth, and then does not stop for a month.",
  thresholds: [
    { label: "Champions League (top 5)", points: 68, gap: 11, note: "Historical par for fifth place in recent seasons. Requires roughly 1.82 points per game from here." },
    { label: "Europa League", points: 60, gap: 3, note: "Roughly sixth place par, and three points above where the current pace lands. Requires about 1.59 points per game from here." },
    { label: "Conference League", points: 55, gap: 0, note: "Seventh place par, often decided by cup outcomes as much as league finish, and where the pace now sits." },
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
    "Six league fixtures, and the shape of the autumn is now fully drawn: Empire of the Kop count nine matches in twenty-nine days from 11 October, with the Chelsea cup tie wedged into the last week of it between Brighton and Arsenal at Anfield. Bournemouth on Sunday remains the only bottom-half opponent before the block, which reads City at home, Brentford away, Brighton at home, Arsenal at home, three of them current top-five sides and Brentford seventh, unbeaten and no softer for it. Win at the Vitality and Liverpool enter that month on nine points from five, a 1.80 pace and a projection back inside the Europa band; draw a fourth and the pace stays in the mid-fifties with the hardest sequence of the season immediately after it. The fixture also carries the added complication of an opponent who has led in all four of their games, which means Liverpool are likelier to be chasing at some point on Sunday than the table suggests.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "This Is Anfield", "BBC Sport"],
};
