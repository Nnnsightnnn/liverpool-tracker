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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Sat Sep 19, evening - the squad is in Dorset and he has ninety minutes tomorrow to keep a clean sheet against the side that scores first in everything. Alisson is restored for the league after Mamardashvili took the cup tie, and Sports Illustrated's verdict on his autumn is the one doing the rounds: typically excellent saves alongside decision-making that has cost him a little of his old imperiousness. The two clearest interventions of the Fulham afternoon were both his, gathering Bassey's header and tipping King's curler away at full stretch. A Bournemouth side that scores first in every game is a specific test of the version of him that reads danger early.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sat Sep 19, evening - the deputy's season is one appearance long and it was a good one, which is all he can control. Mamardashvili's late save held the cup tie at 2-1 and his reward is the bench again, Alisson restored for the league. Thursday's session at the AXA carried no new injuries and a twenty-five-man group, so the order is what it was. The gap between the two keepers is now evidenced rather than assumed, which is the only thing a deputy can bank.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Sat Sep 19, evening - the captain returns tomorrow to a team two places lower than it was this morning, which is nobody's fault and everybody's problem. Van Dijk was rested for the cup, where Araujo and Gomez took the centre of defence between them, and both Sports Illustrated and Yahoo return him alongside Jacquet at the Vitality. He is thirty-five and had played every league minute before Tuesday, which the reporting treats as a resource-management story rather than a fitness one. Bournemouth attack with runners rather than a target man, Rayan and Evanilson off the shoulder, which asks more of his line than of his legs.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Sat Sep 19, evening - one appearance from three hundred, and the fitness question closed on Saturday. Liverpool noted on Friday that Gomez's next outing will be his three hundredth for the club, a total that has taken eleven seasons and a great many interruptions. The team sheet the club published the same day settles what he actually did on Tuesday: he captained the side at centre-back beside Araujo and came off at the interval for Jacquet in a change Iraola had planned before kick-off. He remains the only specialist right-back in the building, which is why nobody expects him to start there.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Sat Sep 19, evening - tomorrow he goes back to the club that sold him, and the shirt is his by consensus rather than acclaim. Squawka's pre-press-conference preview kept Tsimikas at left-back; Sports Illustrated and Yahoo, published afterwards, restore Kerkez and justify it bleakly, that he is the only realistic starter there this season regardless of form. He started the cup tie, per the club's published XI, and replaced Tsimikas at half-time against Fulham. Tomorrow takes him back to the Vitality, and to the club Liverpool paid to take him from.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Sat Sep 19, evening - Saturday supplied a second right-back injury at the club, three miles from here, which is the sort of coincidence that reads like a comment. Bradley is training individually and has begun working with a ball eight months on from the knee injury against Arsenal, per Lewis Steele, and Sports Mole still pencil Manchester United on 21 November as the earliest realistic return. Iraola's Friday team news did not touch him: three long-term absences plus Chiesa, unchanged. The right-back place has gone to a centre-half for a fourth league game running, which is where this injury is actually felt.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Sat Sep 19, evening - with a right-back down at Kirkby this afternoon, the fourth body in the department is worth counting again. Liverpool's own team-news page, published Friday, lists Frimpong in the cup XI at full-back with Araujo inside him, which is the clearest evidence this season that he remains a genuine option there rather than a theoretical one. The league previews still do not pick him: Sports Illustrated and Yahoo both keep Araujo on the right for the Vitality. He is the second of three imperfect answers in a department with no specialist available until late November.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Sat Sep 19, evening - the next marker is the international break, not a matchday. Leoni is stepping up his ACL rehabilitation per Lewis Steele, with Iraola's plan to have him training with the group over the fortnight ahead and Sports Mole pencilling availability around 14 October. He was not among Thursday's twenty-five. His is the return that turns a two-man centre-back rota back into a selection, and the one the January sale of Endo quietly leans on.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat Sep 19, evening - in the eleven for tomorrow and still the least contested name on the sheet. Jacquet was rested from the start on Tuesday and came on at half-time for Gomez in a pre-planned change, and every preview written since Friday's press conference puts him back beside Van Dijk. The reference point is still the goal-line clearance from Gonzalo Garcia's shot at Fulham, which Opta's own match report singled out as one of two things keeping Liverpool level, and which drew an 8 from Rousing The Kop. Sports Illustrated call him ridiculously composed for twenty-one.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Sat Sep 19, evening - Spain, and nothing here reaches him. Ndukwe is on loan at Levante for the season, outside the Champions League squad and outside Thursday's twenty-five at the AXA. Neither Sunday's preview nor the day's reporting on who Liverpool intend to sell in January involves him.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 32, name: "Kostas Tsimikas", number: 21, position: "DEF", nationality: "🇬🇷 Greece", age: 30, appearances: 6, goals: 0, assists: 1, cleanSheets: 1, xG: 0.2, tacklesPer90: 1.7, passCompletion: 79, progressiveCarries: 3.1, form: 5.8, status: "fit", injuryNote: "Sat Sep 19, evening - he lost the shirt inside a single Friday and has not won it back since. Tsimikas was Squawka's predicted left-back in the preview written before Iraola's press conference; the ones published after it, at Sports Illustrated and Yahoo, replace him with Kerkez. The evidence they cite is a fortnight old and has not improved with keeping: 11 of 31 passes misplaced against Fulham and a half-time withdrawal. He trained through the week and is fit. What he does not have is a preview willing to argue for him.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png",
    physical: { height: 178, weight: 76, pace: 79, acceleration: 80, sprintSpeed: 78 },
    career: [
      { years: "2017-2020", club: "Olympiacos", fee: null, type: "senior" },
      { years: "2020-", club: "Liverpool", fee: "€13M", type: "senior" },
      { years: "2025-26", club: "Roma", fee: null, type: "loan" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat Sep 19, evening - the midfielder the Saturday previews keep naming, and tomorrow he starts. Sports Illustrated's line is that Mac Allister simply must play after a goal and an assist in the cup, and that Liverpool had no control in midfield when Gravenberch was picked ahead of him at Fulham. He scored the opener against Tottenham from the edge of the box, the second such finish in three games, and Iraola named him among the four midfielders keeping Endo out of the side. He is in the pivot at the Vitality in both evening previews.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Sat Sep 19, evening - the manager keeps naming him and the previews keep dropping him, which is an awkward place to spend a Friday. Iraola listed Gravenberch among the four midfielders he is picking when explaining why Endo is for sale, but the post-press-conference XIs at Sports Illustrated and Yahoo leave him out in favour of Mac Allister and Szoboszlai, citing the absence of midfield control when he started against Fulham. Opta's own Fulham report records him showing for a short pass from Alisson and being dispossessed on the edge of trouble. Bournemouth force turnovers by design.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Sat Sep 19, evening - in the pivot in every Saturday preview, and still living off thirty yards of stoppage time. Szoboszlai came off the bench on Tuesday to volley the third from distance, a strike the Transfer Hub's shot map values at 0.03 expected goals, which is the numerical way of saying nobody else was attempting it. Sports Illustrated want more of the same at the Vitality and pair him with Mac Allister. Iraola named him among the four midfielders ahead of Endo. The Fulham criticism of the midfield has been buried rather than answered.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Sat Sep 19, evening - available tomorrow, and the only Liverpool player whose January is already written. The reporting that FSG will sanction a sale in the winter window, the last in which a fee is recoverable on a deal expiring in 2027, still rests on Ben Jacobs and the aggregators who carried him, with no Sky, BBC or Athletic corroboration attached to it. Iraola's own account, gentler and identical in effect, is that Endo lost much of pre-season, is training well and has Nyoni, Gravenberch, Mac Allister and Szoboszlai in front of him. He has one appearance this season and none in the league.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Sat Sep 19, evening - held at the ten for tomorrow, with the better evidence sitting behind him on the bench. His manager was invited to rate him on Friday and declined to make it a referendum, saying he rates Wirtz very highly and judges him as he judges everyone. Five competitive games have produced no goal and no assist; Opta's Fulham report has him putting two shots the wrong side of the near post. Both evening previews keep him at the ten anyway, with Gakpo's two goals and three assists on the bench behind him. Klopp's Germany squad follows the break.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 19, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Sat Sep 19, evening - nineteen, and confirmed as a starter by the club rather than deduced from a passing map. Liverpool's published team sheet for the cup tie has Nyoni in midfield from the first minute, withdrawn on 62 for Gravenberch, and the numbers behind it stand: 95 per cent passing, three of four ground duels, ten defensive actions. Iraola put him first in the list of midfielders ahead of Wataru Endo, which is a sentence about a nineteen-year-old and a Japan captain that would have read as a typing error in August.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Sat Sep 19, evening - starting on the left tomorrow, having led the line in the cup and scored from a tight angle. Gakpo is in both post-press-conference XIs, at Sports Illustrated and Yahoo, on the flank rather than through the middle, with two goals and three assists across the opening five appearances. The club's published cup XI has him starting alongside Koumas in the forward line. He can play three positions in a squad with one senior centre-forward, which has stopped being a useful extra and become structural.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Sat Sep 19, evening - he leads the line tomorrow for a side that spent Saturday sliding down a table it did not play in. Isak told BBC Sport's The Football Interview that he has no regrets about the British-record move despite three league goals and a leg break that cost him December to April: 'No, never. I would never think like that.' He said promises made at Newcastle had been broken. He returns through the middle at the Vitality after a night off, with four goal contributions in six, and with sixteen touches against Fulham still the number that describes the service rather than the finishing.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Sat Sep 19, evening - absent from the one department Thursday did not describe as crowded. Iraola spent the day listing four midfielders ahead of Endo; the forward line has no such queue. Ekitike's Achilles rupture and surgery leave January the earliest realistic return, the club's own hope being the last two Champions League league-phase games, Inter on 19 January and Lens on 27 January per This Is Anfield. Until then Isak is the only senior nine, with Gakpo and Koumas the cover.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Sat Sep 19, evening - available tomorrow, then a plane to England, and still unsigned. Thomas Tuchel named Ngumoha, eighteen, in his squad for four Nations League fixtures, the only Liverpool player selected, and he reports once the Bournemouth game is done, which would bring his first competitive caps after a friendly debut in June. Iraola said he absolutely deserves it and described the attitude behind it: he does not say where he would prefer to play, he asks what the team needs. The club still wants a long-term deal agreed inside a month, and Ornstein still reports that nothing is agreed.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 31, name: "Lewis Koumas", number: 67, position: "FWD", nationality: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.3, passCompletion: 77, progressiveCarries: 1.8, form: 6.3, status: "fit", injuryNote: "Sat Sep 19, evening - twenty, and now confirmed by the club as a starter rather than credited by inference. Liverpool's published team sheet has Koumas beginning the cup tie through the middle alongside Gakpo, where he was denied by Dubravka and took the player-of-the-match award. Szoboszlai named him and James McConnell as two who deserve to play and said they had made the selection hard. He is the false-nine cover behind one senior centre-forward, which is a young man's opportunity and a squad's problem at the same time.", image: "",
    physical: { height: 180, weight: 73, pace: 80, acceleration: 81, sprintSpeed: 79 },
    career: [
      { years: "2013-", club: "Liverpool", fee: null, type: "youth" },
      { years: "2024-25", club: "Stoke City", fee: null, type: "loan" },
      { years: "2025", club: "Birmingham City", fee: null, type: "loan" },
      { years: "2025-26", club: "Hull City", fee: null, type: "loan" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Sat Sep 19, evening - the training pitch is a fortnight away, and Sunday is not. Chiesa is aiming to resume work towards the end of this month, in the first week of the extended international window, per Lewis Steele, having not played since the Como friendly a month ago. Sports Mole pencils 11 October for availability. Left off the Champions League squad, he was never in reach this autumn; a fifth forward in mid-October would ease a front line stretched across two flanks.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Sat Sep 19, evening - third of three, and the order survived the one night it might not have. Woodman was not required for the cup tie that went to Mamardashvili, which is the fixture a third goalkeeper is usually handed, and he trained on Thursday with both senior keepers fit and no new injuries reported. A bench season at most.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Sat Sep 19, evening - Friday picked him and then unpicked him inside a single day. Munoz was Squawka's right winger for Sunday in the preview written before the press conference; Sports Illustrated and Yahoo, published after it, give the flank to Barcola and leave Munoz out entirely. His last meaningful contribution remains the header against the Fulham bar from that same side, a 4 from Rousing The Kop against a 6.7 from SI. Iraola's own framing is that all four wide forwards will play, which is a promise rather than a place.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Sat Sep 19, evening - the longest answer Iraola gave on Friday was about him, which is its own kind of team news. Iraola spent Friday talking about Araujo's vocabulary, which is really a story about permanence: he has been surprised by how quickly the Uruguayan absorbed the physical demands of full-back, and wants him learning English so a back four can use his experience out loud. The loanee has booked lessons beyond the club's. He played the whole cup tie at centre-back per Sports Illustrated, and lines up on the right tomorrow against Kluivert, who scored on Thursday by arriving inside from exactly that flank.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 3, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Sat Sep 19, evening - the corrected record still shows he did not start the cup tie, and the previews now give him the right flank anyway. Liverpool's published XI for Tottenham does not include Barcola, correcting a listing this page carried for three days on the strength of a passing network. What is true is that he made his first Premier League start against Fulham, per Opta, and that Sports Illustrated put him on the right at the Vitality because he has played there for Paris Saint-Germain and because Iraola is still deciding which of four wingers owns which side.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  focus: "Carried plate, not this edition's lead: Liverpool 3-1 Tottenham, Carabao Cup third round, 15 September, in which Dominik Szoboszlai came off the bench with Spurs pressing at 2-1, met the ball around thirty yards out and volleyed it past Martin Dubravka in stoppage time. It stands as the season's most recent photographable moment while the front page leads on a Saturday that moved the table around a club that did not play in it",
  credit: "Plate · carried from 15 September",
  generatedAt: "2026-09-19T22:30:00Z",
  // Evening pass (Sat 19 September, 6pm ET / 11pm BST): still no Liverpool match since Tuesday's cup tie, so the
  // Szoboszlai plate is carried and generatedAt re-stamped only. The lead rotated off the morning's homecoming-eve
  // preview onto Saturday's five Premier League results, which dropped Liverpool from eighth to tenth without them
  // playing: Brighton 3-0 Arsenal ended the champions' perfect start, Everton and Newcastle won, Coventry took a
  // first points and first goal at Forest, and Tottenham scored for the first time and lost 3-2 to Villa anyway.
  // The club also confirmed Chelsea at Anfield in the Carabao Cup fourth round on 28 October and the Champions
  // League trip to LASK on 14 October. A league table rearranging itself is not a single photographable still, so
  // NO new image was queued under STEP 7.5. All eight generatedAt stamps 22:30Z.
  // Morning pass (Sat 19 September, ~4am ET): no match since Tuesday's cup tie and the international break now open, so
  // the Szoboszlai volley plate is carried and generatedAt re-stamped only. The lead rotated off Friday evening's Ngumoha
  // call-up onto the eve of Sunday's fixture: Iraola's homecoming to Bournemouth, team news locked and the predicted league
  // XI settled, the last soft game before City, Brentford, Brighton and Arsenal. A matchday-eve build-up is not a single
  // photographable still, so NO new image was queued under STEP 7.5. Table byte-identical from ESPN, Liverpool eighth. All
  // eight generatedAt stamps 08:30Z.
  // Evening pass (Fri 18 September, 6pm ET / 11pm BST): no match since Tuesday's cup tie, so the Szoboszlai plate is
  // carried and generatedAt re-stamped only. The lead rotated off the morning's homecoming preview onto Rio Ngumoha's
  // call-up to Thomas Tuchel's England squad, announced Friday morning, plus Iraola's 1.30pm press conference. A squad
  // list read out in London is not a single photographable still, so NO new image was queued under STEP 7.5.
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
// Last refresh: 2026-09-19 (Saturday evening, ~6pm ET). THE TABLE MOVED, and Liverpool did not play in it. Five
// matchday-five fixtures were completed on Saturday: BRIGHTON 3-0 ARSENAL (Gross 31, Kostoulas 45, Chema Andres 58),
// ending the champions' perfect start and lifting Brighton to third on ten with the division's best goal difference
// (+11) and most goals (16); Everton 1-0 Ipswich; Newcastle 2-1 Hull, the promoted side's first defeat; Nottingham
// Forest 0-1 Coventry, a first win, first points and first goal of the season in one afternoon; and Tottenham 2-3 Aston Villa,
// in which Spurs scored their first league goals of the campaign and lost anyway. LIVERPOOL FALL FROM EIGHTH TO TENTH
// on the same six points from four, now three points behind both the Champions League line (Brentford, fourth) and the
// Europa line (Everton, fifth), with a game in hand on every club from second to ninth bar Leeds. Manchester City move
// to first on goal difference and Arsenal to second with their first defeat; Coventry climb off the bottom into
// eighteenth and Fulham drop to twentieth. History below.
// Earlier: 2026-09-18 (Friday morning, ~4am ET). Re-fetched from ESPN and byte-identical to the previous pull: no
// league match had been played since Saturday (Tuesday was the Carabao Cup), so the table had not moved.
// Re-fetched 2026-09-19 (Saturday, ~4am ET) and byte-identical again: the Saturday programme had not yet kicked off.
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
  { pos: 1, team: "Manchester City", p: 4, w: 4, d: 0, l: 0, gd: 6, pts: 12, qualification: "UCL" },
  { pos: 2, team: "Arsenal", p: 5, w: 4, d: 0, l: 1, gd: 4, pts: 12, qualification: "UCL" },
  { pos: 3, team: "Brighton", p: 5, w: 3, d: 1, l: 1, gd: 11, pts: 10, qualification: "UCL" },
  { pos: 4, team: "Brentford", p: 5, w: 2, d: 3, l: 0, gd: 6, pts: 9, qualification: "UCL" },
  { pos: 5, team: "Everton", p: 5, w: 2, d: 3, l: 0, gd: 3, pts: 9, qualification: "UEL" },
  { pos: 6, team: "Leeds", p: 4, w: 2, d: 2, l: 0, gd: 4, pts: 8 },
  { pos: 7, team: "Hull", p: 5, w: 2, d: 2, l: 1, gd: 2, pts: 8 },
  { pos: 8, team: "Newcastle", p: 5, w: 2, d: 2, l: 1, gd: 0, pts: 8 },
  { pos: 9, team: "Chelsea", p: 5, w: 2, d: 1, l: 2, gd: -2, pts: 7 },
  { pos: 10, team: "Liverpool", p: 4, w: 1, d: 3, l: 0, gd: 2, pts: 6, highlight: true },
  { pos: 11, team: "Ipswich", p: 5, w: 2, d: 0, l: 3, gd: -4, pts: 6 },
  { pos: 12, team: "Nott'm Forest", p: 5, w: 1, d: 2, l: 2, gd: -1, pts: 5 },
  { pos: 13, team: "Manchester United", p: 4, w: 1, d: 1, l: 2, gd: 0, pts: 4 },
  { pos: 14, team: "Sunderland", p: 4, w: 1, d: 1, l: 2, gd: -2, pts: 4 },
  { pos: 15, team: "Aston Villa", p: 5, w: 1, d: 1, l: 3, gd: -5, pts: 4 },
  { pos: 16, team: "Bournemouth", p: 4, w: 0, d: 3, l: 1, gd: -1, pts: 3 },
  { pos: 17, team: "Crystal Palace", p: 4, w: 1, d: 0, l: 3, gd: -5, pts: 3 },
  { pos: 18, team: "Coventry", p: 5, w: 1, d: 0, l: 4, gd: -9, pts: 3, qualification: "REL" },
  { pos: 19, team: "Tottenham", p: 5, w: 0, d: 2, l: 3, gd: -6, pts: 2, qualification: "REL" },
  { pos: 20, team: "Fulham", p: 4, w: 0, d: 1, l: 3, gd: -3, pts: 1, qualification: "REL" },
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
  generatedAt: "2026-09-19T22:30:00Z",
  overview:
    "Five games were played on Saturday and every one of them moved something, which is how a club that did not kick a ball spent the afternoon falling two places. Brighton beat Arsenal 3-0 at the Amex, Gross from twenty yards, Kostoulas from twenty-five and Chema Andres heading in a corner on his first Premier League start, ending the champions' perfect start and taking the Seagulls to third with the division's best goal difference and its most goals, sixteen. Everton beat Ipswich, Newcastle beat Hull to inflict a promoted side's first defeat, and two records fell together in the evening: Coventry, pointless and goalless through four, won 1-0 at Nottingham Forest to take their first points and score their first goal in the same afternoon, while Tottenham finally scored in the league and lost 3-2 to Aston Villa anyway. Liverpool are tenth on six, unbeaten, three points off both European lines with a game in hand on almost everyone above them. That game is Sunday at the Vitality, the last fixture of the round, and a win would land them level on nine with the clubs drawing the stripes.",
  teams: {
    "Liverpool": "Tenth on six and unbeaten, dropped two places on Saturday without playing, and three points off both the Champions League and Europa lines with a game in hand on every club between second and ninth bar Leeds. Bournemouth away on Sunday closes the round, and a win puts them level on nine with the sides in fourth and fifth.",
    "Manchester City": "Top on twelve, still perfect, and the only club in the division yet to drop a point. They come to Anfield on 11 October in the first fixture after the international break, which is a cruel way to restart a season.",
    "Arsenal": "Second on twelve and beaten for the first time, 3-0 at Brighton, their heaviest league defeat as reigning champions since a 3-0 at Everton in October 1989 per Opta. They are at Anfield on 1 November, by which point Liverpool will have faced City, Brentford and Brighton.",
    "Brighton": "Third on ten with the best goal difference in the division at plus eleven and its most goals at sixteen, after dismantling the champions on their own ground. It is the third season running they have beaten the reigning champions at home, Manchester City in 2024-25 and Liverpool in 2025-26. They visit Anfield on 25 October.",
    "Brentford": "Fourth on nine, unbeaten in five, holding the last Champions League place after Friday's 3-0 over Chelsea. Liverpool visit on 17 October, three days after hosting City, and a fixture that read comfortable in August no longer does.",
    "Everton": "Fifth on nine after a 1-0 over Ipswich, unbeaten, and now the side drawing the Europa League stripe. Three points and one place above Liverpool, having played a game more.",
    "Leeds": "Sixth on eight and still unbeaten, a promoted side a month into the season with two wins and two draws and nothing to apologise for. They host Crystal Palace on Sunday.",
    "Hull": "Seventh on eight, and beaten for the first time, 2-1 at Newcastle, which ends the prospect of a promoted side going five games unbeaten from the start for the first time since Portsmouth in 2003-04.",
    "Newcastle": "Eighth on eight, three points from the Hull game and a first win in a month, having opened the season with a draw against Liverpool that now looks like the best result either side took from August.",
    "Chelsea": "Ninth on seven with a minus goal difference after Friday's 3-0 at Brentford. They are at Anfield on 28 October in the fourth round of the Carabao Cup, confirmed on Saturday for an eight o'clock kick-off on Sky and ITV.",
    "Ipswich": "Eleventh on six after losing at Everton, and the only side in the division with five games played and no draws at all. Liverpool's one league win this season came at Portman Road on 4 September.",
    "Nott'm Forest": "Twelfth on five and beaten at home by a Coventry side that had not scored all season, which is the sort of afternoon that follows a manager around.",
    "Aston Villa": "Fifteenth on four with a first win of the season, 3-2 at Tottenham, ending a start that had them on course for a fourth winless opening five in the club's history.",
    "Bournemouth": "Sixteenth on three, the only side in the competition's history to have led all four of its opening fixtures and won none, and fresh from the first European win in the club's history on Thursday in San Sebastian. Iraola comes back on Sunday.",
    "Coventry": "Eighteenth on three and off the mark at last, a 1-0 win at the City Ground bringing their first points and their first goal of the season in the same afternoon, after four defeats with neither. Still inside the relegation stripe, but no longer setting records in it.",
    "Tottenham": "Nineteenth on two, and they scored, twice, for the first time in the league this season, and lost 3-2 to Villa anyway. Anfield beat them twice this month in two competitions.",
    "Fulham": "Bottom on one, the point earned at Anfield on 12 September still the only one they have, and they travel to Manchester United on Sunday.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Two Places Lost To A Saturday They Spent Watching.",
    byline: "Opta Analyst / ESPN",
    dateline: "Liverpool · 19 September",
    category: "Race for Europe",
    body:
      "There is a particular helplessness in falling down a table on a day off. Liverpool trained, packed and travelled while five games were played without them, and by the evening they were tenth rather than eighth, unbeaten still, three points adrift of both European lines. Brighton took the champions apart at the Amex; Everton and Newcastle won; even Coventry, four games without a point or a goal, won at the City Ground. The consolation is arithmetic rather than emotional: the game in hand is Sunday, at the Vitality, against the only side in the division's history to have led four fixtures and won none of them.",
  },
  {
    n: "02",
    headline: "The Champions Were Beaten By The Side Anfield Hosts In October.",
    byline: "Opta Analyst / Sky Sports",
    dateline: "Amex Stadium · 19 September",
    category: "Football News",
    body:
      "Arsenal arrived on the south coast chasing a club record of eight straight wins to open a season and left having conceded three without reply. Pascal Gross struck from twenty yards off the near post, Charalampos Kostoulas from twenty-five on the stroke of half-time, and Chema Andres headed a Gross corner in on his first Premier League start. Opta logged Brighton turning 40.3 per cent of the ball into seventeen shots and four big chances, and called it Arsenal's heaviest defeat as reigning champions since Everton beat them 3-0 in October 1989. Brighton come to Anfield on 25 October. Liverpool have five weeks to think about it.",
  },
  {
    n: "03",
    headline: "The Autumn Hardened Into Dates While Everyone Watched The League.",
    byline: "Liverpool FC",
    dateline: "Anfield · 19 September",
    category: "Football News",
    body:
      "Two confirmations landed from the club's own channel on Saturday, and between them they finish the shape of October. Chelsea come to Anfield in the fourth round of the Carabao Cup on Wednesday 28 October, an eight o'clock kick-off carried by Sky and ITV, the tie everybody circled the moment the draw was made. And the Champions League takes Liverpool to LASK at the Raiffeisen Arena on Wednesday 14 October, a 5.45 kick-off in Linz, three days after hosting Manchester City and three before Brentford away. A month that already looked unkind now has times attached to it.",
  },
  {
    n: "04",
    headline: "Iraola Talks About Araujo Like A Man Who Found Money In A Coat.",
    byline: "Liverpool FC / Liverpool.com",
    dateline: "AXA Training Centre · 18 September",
    category: "Manager",
    body:
      "Among the homecoming questions, one answer ran longer than the rest. Asked about Ronald Araujo, six appearances into a loan from Barcelona and a Player of the Match award against Atletico already banked, Iraola described a first conversation in which everything felt right immediately. He has played more minutes than anyone expected this early, the manager said, and is finishing games without cramping, which for a centre-half asked to cover the different demands of right-back is the whole argument. Then the only note of work left undone: he is pushing him to learn English, so the experience can be spoken as well as played.",
  },
  {
    n: "05",
    headline: "A Right-Back Goes Down At Kirkby, Ninety Seconds In, Again.",
    byline: "Liverpool FC / This Is Anfield",
    dateline: "Kirkby · 19 September",
    category: "Injuries",
    body:
      "The under-21s won 5-1 and the afternoon still cost them something. Isaac Mabaya drove forward inside two minutes and cut back for Josh Sonni-Lambie to open the scoring, and in delivering the assist he pulled up and could not continue, off after five. It is the latest entry in a file that already holds a season-ending ankle injury and a hamstring that lasted a few minutes against Manchester United. Rob Page's side reshuffled and scored twice more inside twenty-five minutes, Michael Laffey and Will Wright, who added a second after the break. Small mercies, in a club with one fit specialist right-back.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-19T22:30:00Z",
  summary:
    "Liverpool went to bed on Saturday two places lower than they woke up, having played nobody. Five Premier League games were completed while the squad travelled to Dorset, and the round rearranged itself overhead: Brighton took Arsenal apart 3-0 at the Amex to end the champions' perfect start, Everton and Newcastle won, and Coventry, four games without a point or a goal, won 1-0 at Nottingham Forest for their first points and first goal together, on the same evening Tottenham finally scored in the league and lost anyway. Liverpool sit tenth on six, unbeaten, three points off both European lines, with a game in hand that is played at two o'clock on Sunday at the Vitality. The club also filled in its October on Saturday: Chelsea at Anfield in the Carabao Cup fourth round on Wednesday 28 October, and the Champions League trip to LASK in Linz on Wednesday 14 October. Nothing changed medically, Bradley, Chiesa, Ekitike and Leoni still the four out, and the only Liverpool body to go down all day was the under-21 right-back Isaac Mabaya, off inside five minutes at Kirkby in a 5-1 win.",
  keyTopics: [
    {
      title:
        "Tenth By Saturday Night, And They Never Left The Coach (ESPN / Opta Analyst, today)",
      detail:
        "The round moved past Liverpool while the squad travelled. Five games finished on Saturday and every one shifted the table: Brighton 3-0 Arsenal, Everton 1-0 Ipswich, Newcastle 2-1 Hull, Nottingham Forest 0-1 Coventry, Tottenham 2-3 Aston Villa. Liverpool, unbeaten on six points from four, slid from eighth to tenth without kicking a ball and now sit three points behind both the Champions League and Europa lines, drawn at fourth and fifth by Brentford and Everton. The compensation is the game in hand, and it is the last fixture of the round, at two o'clock on Sunday at the Vitality.",
      category: "matches",
    },
    {
      title:
        "Brighton Dismantle The Champions, And Anfield Hosts Them In Five Weeks (Opta Analyst / Sky Sports, today)",
      detail:
        "Arsenal came to the Amex looking to equal a 123-year club record of eight consecutive wins to start a season and were beaten 3-0. Pascal Gross drove in off the near post on 31, Charalampos Kostoulas found the bottom corner from twenty-five yards on 45, and Chema Andres headed in a Gross corner just before the hour on his first Premier League start. Opta recorded Brighton turning 40.3 per cent possession into seventeen shots, 1.33 expected goals and four big chances against Arsenal's eleven shots and 1.58, and logged it as Arsenal's heaviest league defeat as reigning champions since October 1989. It is the third season running Brighton have beaten the holders at home, after Manchester City and Liverpool. They visit Anfield on 25 October.",
      category: "matches",
    },
    {
      title:
        "Chelsea At Anfield On 28 October, LASK Away On The 14th (Liverpool FC, today)",
      detail:
        "The club confirmed two October dates on Saturday and between them they finish the shape of the autumn. The Carabao Cup fourth-round tie with Chelsea will be played at Anfield on Wednesday 28 October at 8pm, live on Sky Sports and ITV. Earlier in the month the Champions League takes Liverpool to LASK at the Raiffeisen Arena in Linz for a 5.45pm kick-off on Wednesday 14 October, with away ticket details published the same day. That slots between hosting Manchester City on the 11th and visiting Brentford on the 17th, which is three matches in six days to open the post-break schedule.",
      category: "general",
    },
    {
      title:
        "Mabaya Off After Five Minutes As The Under-21s Win 5-1 (Liverpool FC / This Is Anfield, today)",
      detail:
        "Rob Page's side beat Brighton 5-1 at the Kirkby Academy on Saturday afternoon, three of the goals inside twenty-five minutes, and still lost a player to the oldest problem at the club. Isaac Mabaya carried the ball forward inside ninety seconds and cut back for Josh Sonni-Lambie to score, then pulled up in the act of delivering it and was replaced on five. Michael Laffey and Will Wright, twice, and an own goal completed the win. Mabaya, a right-back, has already lost one season to an ankle injury and another few months to a hamstring. The under-21s begin their EFL Trophy campaign at Rochdale on Tuesday.",
      category: "injuries",
    },
    {
      title:
        "The Four Out Are Still Four, And Gomez Came Through The Cup Fine (Liverpool FC / Last Word on Football, today)",
      detail:
        "No medical news is the good kind at this point in the calendar. Conor Bradley, Federico Chiesa, Hugo Ekitike and Giovanni Leoni remain the only unavailable names on the club's own team-news page, unchanged since the weekend. The one question the cup tie left has been answered too: Joe Gomez, withdrawn at half-time against Tottenham, is available, the substitution having been planned rather than forced. Marco Rose reported the same on his side, no fresh problems from Thursday in San Sebastian, with Julian Araujo, Eli Kroupi, Amine Adli and Veljko Milosavljevic the four Bournemouth are without.",
      category: "injuries",
    },
    {
      title:
        "Liverpool Scouts At The Stadium Of Light For A £51.5m January Midfielder (TEAMtalk, today)",
      detail:
        "The window is shut until January, but the watching is not. TEAMtalk report that Liverpool were among a group of Premier League clubs who sent scouts to Sunderland on Thursday to see the AZ Alkmaar midfielder Kees Smit, twenty, who started and impressed in a 1-0 defeat settled by an Enzo Le Fee penalty. The figure attached to a winter move is £51.5m. It belongs in the same folder as the club's standing interest in Bournemouth's Rayan, which CaughtOffside report this week comes with a warning from the south coast that Iraola's relationship with the player buys no discount and that a release clause becomes active in 2027.",
      category: "transfers",
    },
    {
      title:
        "'I Like His Spirit': Iraola On What Araujo Has Become In Six Games (Liverpool FC / Liverpool.com, 1d ago)",
      detail:
        "The press conference's longest answer was about the loanee, not the homecoming. Ronald Araujo has made six appearances since arriving from Barcelona last month, including a Player of the Match display and an assist against Atletico Madrid, and Iraola described knowing from a first conversation that it would work: 'sometimes you talk to a player and you can feel straight away that everything was positive.' He has played more minutes than the staff expected this early, the manager said, and is finishing games without cramping despite the different physical demands of covering wide right as a centre-half. The remaining project is linguistic: 'I'm pushing him to learn a little bit the language.'",
      category: "tactics",
    },
    {
      title:
        "Farkas The Younger Signs, And Makes It Two Brothers Under Contract (Liverpool FC, 1d ago)",
      detail:
        "Erik Farkas, seventeen, signed his first professional contract at the AXA Training Centre this week, a few weeks after his elder brother Patrik did the same. The midfielder has been in the academy since under-12 level, is currently with Simon Wiles's under-18s, and has three appearances and two goals this season, one of those outings a substitute appearance in the UEFA Youth League draw with Atletico Madrid. Born in Hungary, he plays for England and has been capped at under-17 level. 'It's a really proud moment for me and my family,' he told the club.",
      category: "general",
    },
    {
      title:
        "The Pressure Story Follows Him South, Unbeaten Or Not (This Is Anfield / Yahoo Sports, 2d ago)",
      detail:
        "Three league games unbeaten and the word attached to the manager is still pressure, which is a verdict on the summer rather than the football. Richard Hughes, the sporting director who hired Iraola, has gone, so the case for the appointment has to be made again to a successor who never staked anything on it. This Is Anfield add a second strand, that Hughes also handed Dominik Szoboszlai and Ryan Gravenberch new contracts before leaving, committing the club to an expensive midfield pair whose form has dipped under the new coach. None of it is an event. All of it is the frame Sunday will be read through.",
      category: "general",
    },
    {
      title:
        "Opta Make It Liverpool At 44.2 Per Cent, And Bournemouth A Record Of Draws (Opta Analyst, 2d ago)",
      detail:
        "The supercomputer's read on Sunday, published with the matchday-five previews on Thursday, gives Liverpool a 44.2 per cent chance, the draw 24.2 and Bournemouth 31.6. The supporting numbers are the interesting part. Bournemouth have lost fourteen of eighteen Premier League meetings with Liverpool, won three and drawn one, and every Liverpool defeat in the fixture has come away from home. They have also drawn thirteen of twenty-three league matches in calendar 2026, a ratio of 56.5 per cent, which Opta call the highest by any side in a single year in the history of the English top flight. The same model gave Arsenal 55.6 per cent at Brighton on Saturday.",
      category: "matches",
    }
  ],
  sources: [
    "Liverpool FC",
    "Opta Analyst",
    "ESPN",
    "Sky Sports",
    "Liverpool.com",
    "This Is Anfield",
    "Last Word on Football",
    "TEAMtalk",
    "CaughtOffside",
    "Yahoo Sports",
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
  generatedAt: "2026-09-19T22:30:00Z",
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
  leaguePosition: 16,
  summary:
    "Hours from kick-off, the hosts are sixteenth, three points from four games, and carrying a statistic that is genuinely without precedent. Bournemouth have drawn thirteen of their twenty-three league matches in calendar 2026, a ratio of 56.5 per cent, which Opta call the highest by any side in a single year in the history of the English top flight. They are also the only side ever to have led in each of their opening four Premier League fixtures and won none of them. Against that sits the week they have just had: a 2-1 win at Real Sociedad on Thursday, the first European tie in the club's history and a victory in it, Justin Kluivert converting Adrien Truffert's cross on eleven after a long VAR review restored the goal and Rayan heading in Alex Scott's lifted pass on twenty. Eighteen years ago this club sat on minus seventeen points in the fourth tier. Marco Rose confirmed on Friday that everyone came through Spain unscathed, 'nothing new, everyone is in a good spot', which removes the rotation questions this dossier carried through the morning. Andoni Iraola, who took the club into Europe and left in June, returns to a ground that still owes him a welcome and intends to spoil the afternoon anyway.",
  shape:
    "Rose inherited a pressing, direct side from Iraola and has not rebuilt it, which is why every preview draws the same 4-2-3-1: a screening pair in front of the back four, Marcus Tavernier or Ryan Christie floating off the front, Kluivert arriving from the left half-space. The European XI, published by Liverpool's own team-news page, read Petrovic; Smith, Silva, Hill, Truffert; Scott, Adams, Rayan, Kluivert, Tavernier, Evanilson, and Rose's Friday line that nobody picked up a knock in San Sebastian means Saturday's previews could stop guessing at a rotation. Last Word on Football, writing at lunchtime, expect only Cooke for Adams in the pivot, with Christie pushed up and Smith restored at right-back. The first goal has come in every league game this season and it has usually come the same way, a turnover in Bournemouth's own half and a runner released behind a full-back. The last twenty minutes are where it falls apart: seven conceded in four, most of them from set-piece scrambles or goalkeeping error rather than from being outplayed. They have not kept a Premier League clean sheet under Rose.",
  keyPlayers: [
    {
      name: "Justin Kluivert",
      role: "Forward",
      threat: "Scored the first goal in Bournemouth's history in Europe on Thursday, converting Truffert's low cross on eleven minutes after VAR overturned the offside flag, per Sky Sports, and he had already scored the equaliser against Brentford and struck the post at St James' Park. He drifts in off the left into the half-space rather than holding width, which drags a right-back inside and opens the channel behind. That right-back is Ronald Araujo, a centre-half by trade, in his fourth straight league start there.",
      source: "Sky Sports / Liverpool FC",
    },
    {
      name: "Marcus Tavernier",
      role: "Attacking midfielder",
      threat: "Three goals and eight chances created from thirteen shots in four league games, which Squawka call Bournemouth's most direct route to goal, and he started the European win as well. He works in the seam between a holding pair and a centre-back line, the exact grass a Liverpool midfield has repeatedly failed to cover, and he turned the Brentford game round from that position after the interval. Saturday's previews leave him out of the eleven with Christie pushed forward instead, which would make him the most dangerous name on the bench rather than the sheet.",
      source: "Squawka (Opta) / Last Word on Football",
    },
    {
      name: "Rayan",
      role: "Wide forward",
      threat: "Headed the winner in San Sebastian on twenty minutes, meeting Alex Scott's lifted pass with a run behind the defence, per Sky Sports, having also come off the bench to score the fourth against Lincoln in the cup. Every Saturday preview starts him wide with Kroupi and Adli both injured, and his goal on Thursday was the second in three appearances. He is also the reason Liverpool keep appearing in Bournemouth's transfer coverage: CaughtOffside report this week that the club will not discount him for Iraola's sake and that a release clause becomes active in 2027.",
      source: "Sky Sports / Last Word on Football / CaughtOffside",
    },
    {
      name: "Djordje Petrovic",
      role: "Goalkeeper",
      threat: "Kept the clean slate at 2-1 in Spain but his error against Brentford, which let Kevin Schade in for the equaliser, is the single moment that set the unwanted Premier League record. He starts in every Saturday preview. For a Liverpool side that has scored six goals from 6.00 expected across four league games, a goalkeeper behind a defence that has yet to keep a league clean sheet under Rose is the most exploitable name on the opposing sheet.",
      source: "Goal / Last Word on Football",
    },
  ],
  predictedXI: [
    "Petrovic", "Smith", "Hill", "Silva", "Truffert",
    "Cooke", "Scott", "Rayan", "Kluivert", "Christie", "Evanilson",
  ],
  absentees: [
    { name: "Julian Araujo", issue: "Hamstring; Last Word on Football and Goal both have him out until November", status: "Out" },
    { name: "Eli Kroupi", issue: "Ankle and foot; the second of the two not expected back before November", status: "Out" },
    { name: "Amine Adli", issue: "Calf; pencilled for an October return. He scored the injury-time winner when these sides last met, on 24 January", status: "Out" },
    { name: "Veljko Milosavljevic", issue: "Knee; also pencilled for October, and Rose has said he is the first of the four due back", status: "Out" },
    { name: "Tyler Adams", issue: "Fit, and the only selection question left. He started at Real Sociedad and came off on the hour; Last Word on Football expect Ben Cooke to take the anchor role on Sunday, with Rose confirming no fresh injuries from the trip", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-17", opponent: "Real Sociedad", home: false, score: "1-2", result: "W", note: "Europa League league phase, and the first European tie the club has ever played. Kluivert converted Truffert's cross on eleven after a lengthy VAR review overturned the offside flag; Rayan headed in Scott's lifted pass on twenty; Sergio Gomez replied with an attempted cross that carried past everyone into the far corner. Rose named a full-strength XI, which is why Iraola thinks the fresher side on Sunday is his." },
    { date: "2026-09-15", opponent: "Lincoln City", home: true, score: "4-0", result: "W", note: "Carabao Cup third round, and Rose's first win in charge. A Ryan Christie hat-trick on seven, sixty-nine and eighty-eight, with Rayan adding a fourth from the bench in stoppage time. A rotated side against a lower-division opponent, so the useful part is only that this group can now see a lead out. They meet Aston Villa in the fourth round." },
    { date: "2026-09-13", opponent: "Brentford", home: true, score: "2-2", result: "D", note: "Schade opened, Kluivert levelled, Tavernier turned it round after the break, and a Petrovic error let Schade equalise. Gannon-Doak hit the woodwork in stoppage time. The result made Bournemouth the first side to lead in each of their opening four Premier League fixtures without winning any of them." },
    { date: "2026-09-05", opponent: "Newcastle", home: false, score: "2-2", result: "D", note: "Two goals ahead at St James' Park through Tavernier and a Thiaw own goal after Kluivert struck the post, then pegged back by Barnes and a Jacob Ramsey finish on 88. A third lead surrendered in three games." },
    { date: "2026-08-29", opponent: "Everton", home: true, score: "1-1", result: "D", note: "A home draw played in front of 11,135, the lowest attendance recorded in the division this season." },
  ],
  liverpoolAngle:
    "Saturday reframed this fixture without either side playing in it. Liverpool arrive tenth rather than eighth, three points behind the European lines instead of two, with the game in hand that was an asset all week now a debt to be paid at two o'clock. The tactical problem underneath is unchanged and it is the one FORM_TRENDS rates highest. Nine goals conceded on fast breaks since the start of last season, the most in the league per Opta, against a side that has manufactured a first goal in every league game this season from a turnover and a runner released behind a full-back. The specific seam is Liverpool's right, where SQUAD_LOAD still carries the department at high: Araujo, a centre-half by trade, starting there again with Kluivert drifting inside him by design and Conor Bradley not fit until late November. Iraola spent Friday arguing that Araujo has taken to the demands better than anyone expected, which is either reassurance or the tell. Two counterweights hold. Bournemouth are without four players and have not kept a league clean sheet under Rose, and Liverpool concede the fewest expected goals per game in the division, 1.29, a figure this tracker's own Opta column reaches independently at 5.16 across four. The shortage has never been chances given up. It is chances taken, six goals from 6.00 expected, and Opta's model still makes Liverpool the pick at 44.2 per cent.",
  modelLine: { source: "Opta Analyst", liverpool: 44, draw: 24, opponent: 32, note: "The Opta supercomputer's matchday-five run, published on 17 September, gives Liverpool 44.2 per cent, the draw 24.2 and Bournemouth 31.6, noting that Bournemouth have lost fourteen of eighteen Premier League meetings and that every Liverpool defeat in the fixture has come away from home. The same run gave Arsenal 55.6 per cent at Brighton, where they lost 3-0, which is the standing caveat on any of it. Reported here as a model output, not a prediction, and not a betting market." },
  sources: ["Liverpool FC", "Opta Analyst", "Last Word on Football", "Sky Sports", "Goal", "Squawka", "BBC Sport", "ESPN"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-19T22:30:00Z",
  competition: "PL",
  played: 4,
  headline:
    "Saturday demonstrated the case these columns have been making all month, and it did it at someone else's ground. Opta gave Arsenal a 55.6 per cent chance at Brighton and the champions lost 3-0; Brighton took 40.3 per cent of the ball, turned it into seventeen shots and 1.33 expected goals, and beat an Arsenal side that had the better underlying figure at 1.58. Four games is not enough to know anything and one game is enough to change everything, which is the sample problem in miniature. What Liverpool's four say remains a contradiction the table now flattens into tenth place. They concede the fewest expected goals per game in the division, 1.29, a figure Squawka publish from Opta and which the match-by-match column here reaches independently at 5.16 across four. They also score six from 6.00 expected, which is a side finishing exactly what it makes and making a mid-table amount. Bournemouth on Sunday are the first opponent since the Fulham draw who can move a number here rather than a mood.",
  diagnosis: [
    {
      label: "Closing out a lead",
      detail: "Sunday is the rare fixture in which both teams arrive carrying the same fault, and only one of them has been punished for it. Bournemouth have led in all four league games and taken three points. Liverpool have drawn three and taken six. Tuesday showed the Liverpool version has not been fixed: two goals clear at Anfield with half an hour left, a Gallagher header from a corner, then a quarter of an hour pinned back by a side seventeenth in the division, with Mamardashvili required to make a significant late save before Szoboszlai settled it. EPL Index read the lead as one that should have been managed with more authority.",
      severity: "high",
      source: "EPL Index (Yahoo Sports) / Goal",
    },
    {
      label: "Fast-break concession",
      detail: "Thursday night in San Sebastian was a live demonstration of the thing this entry has warned about all season. Bournemouth's opening goal came from Truffert breaking beyond a defence and crossing low for Kluivert; the second from Alex Scott lifting a pass behind the line for Rayan to run onto. Opta count nine fast-break goals conceded by Liverpool since the start of last season, the most in the league, and both Newcastle goals were of that kind. Tuesday's rearranged back four never faced a counter-attacking side, so the question arrives at the Vitality unanswered rather than resolved.",
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
      detail: "The distinction the cup night drew, and the club's own published XI sharpened it on Friday. Ten changes produced three goals and a win over Premier League opposition with a nineteen-year-old and a twenty-year-old in the side, and with Frimpong at right-back and Araujo pushed inside beside Gomez, which is not the sheet of a squad without players. What it is is a squad without cover in particular places: no specialist right-back until late November, one senior centre-forward while Ekitike's Achilles keeps January as the earliest mark, and two left-backs neither of whom convinced anyone at Fulham. Breadth is not the problem. Named holes are.",
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
    "Bournemouth have drawn thirteen of their twenty-three league matches in calendar 2026, won eight and lost two. That ratio, 56.5 per cent, is the highest by any side in a single calendar year in the history of the English top flight, per Opta. Liverpool's own problem this season has been draws. They are about to play the record holder.",
    "Bournemouth have lost fourteen of their eighteen Premier League meetings with Liverpool, winning three and drawing one, and every one of Liverpool's defeats in the fixture has come away from home, per Opta. The most recent was 3-2 at the Vitality on 24 January, settled by an Amine Adli goal in stoppage time. Adli is injured on Sunday.",
    "Brighton, who visit Anfield on 25 October, are the Premier League's leading scorers this season with sixteen goals, the most by any side after five games since Manchester City managed nineteen in 2022-23, per Opta. Saturday's 3-0 was also the third season running they have beaten the reigning champions at their own ground, after Manchester City and Liverpool.",
    "Seven of the last eighteen Premier League goals Arsenal have conceded have come from outside the eighteen-yard box, three of the four this season, per Opta. Two of Saturday's three at the Amex were struck from twenty yards and beyond, by Gross and Kostoulas. Liverpool, whose most recent goal was Szoboszlai's stoppage-time volley from around thirty yards in the cup, host Arsenal on 1 November.",
  ],
  sources: ["Opta Analyst", "Squawka", "Goal", "EPL Index", "Liverpool FC", "BBC Sport", "Sofascore", "Premier League", "Sky Sports", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-19T22:30:00Z",
  headline:
    "The senior board did not move on Saturday, and the day's one injury happened three miles away at Kirkby. Isaac Mabaya, an under-21 right-back with an ankle and a hamstring already in his file, went down delivering the assist for the opening goal against Brighton and was off inside five minutes. He has no entry here because he has no senior appearances, but the department he plays in is the one this board rates highest, and the club now has Araujo out of position, Frimpong as the cup alternative and Gomez as the only specialist. Otherwise the four unavailable stand as they have all week, and the last open question from the cup tie closed on Friday: Joe Gomez, withdrawn at half-time against Tottenham in a change the staff had planned, is available at the Vitality.",
  minutesNote:
    "Premier League minutes are not published here yet. Four league games and one Champions League game have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "January at the earliest: 'a reasonable chance' of the last two Champions League league-phase games (Inter 19 Jan, Lens 27 Jan per This Is Anfield); Iraola confirms 'Hugo will go later' than the international break", note: "The absence Saturday underlined and Monday's round-up did not shorten. Sports Mole carries no timeline beyond the club's, and the January framing from Friday's press conference stands: 'a hope and a realistic chance that he could help us in January', with 'a big part of the rehab still to meet'. Isak remains the only fit senior nine until then, and Koumas the false-nine cover the cup actually used, denied by Dubravka on his first competitive start through the middle.", source: "Liverpool FC / This Is Anfield / Sports Mole" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training in the September international break; Sports Mole pencils 14 October as an availability target", note: "Lewis Steele reported on Thursday that Leoni is stepping up his rehabilitation, which Steele himself frames as a small step but a positive one a year on from the ACL rupture on debut. Sports Mole tips a mid-October return; Iraola's own line is more cautious, that the plan is to start training with the group during the break. Named in the Champions League squad, unused, and not part of Tuesday's calculation. His return is the one that would end the two-man centre-back rota for good.", source: "Daily Mail / Liverpool FC / Sports Mole" },
    { name: "Conor Bradley", issue: "Knee", expected: "Sports Mole pencils Manchester United on 21 November as the earliest", note: "The first genuinely forward step in months: Lewis Steele reported on Thursday that Bradley has begun individual training and is doing ball work, eight months after the knee injury against Arsenal in January. There is still no club date beyond Iraola's 'probably Conor will go later', and Sports Mole's 21 November stands. Araujo has started there three straight league games and Empire of the Kop expect a fourth; Frimpong played it in the cup; Gomez is the third body and the only specialist.", source: "Daily Mail / Liverpool FC / Sports Mole" },
    { name: "Federico Chiesa", issue: "Lower back (originally muscle, Como friendly, August)", expected: "Back in training over the international break; Sports Mole pencils 11 October as an availability target", note: "Now the one with an actual date. Lewis Steele reported on Thursday that Chiesa is aiming to resume training towards the end of September, in the first week of the extended international window, having not played since a muscle problem in the Como friendly a month ago. Empire of the Kop note he would almost certainly have played in the cup had he been fit. Left off the Champions League squad, so Europe was never in reach this autumn, but a fifth forward in mid-October would ease a front line covering two flanks with four players.", source: "Daily Mail / Empire of the Kop / Sports Mole" },
  ],
  returning: [
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "Available, and one appearance short of three hundred for the club", note: "Saturday's previews close the only doubt left over from Tuesday. Last Word on Football confirm Gomez is available despite being replaced at half-time against Tottenham, the substitution having been pre-planned rather than forced, and note those were his first minutes of the campaign after a pre-season injury. Whenever he next takes the field it will be his three hundredth appearance for Liverpool, a number eleven seasons and rather too many injuries in the making. He is a fourth senior centre-back and the only specialist right-back in the building in one body, which is why every preview has him on the bench at the Vitality rather than out of the picture.", source: "Last Word on Football / Liverpool FC / Sofascore" },
    { name: "Giorgi Mamardashvili", issue: "No injury; behind Alisson all season", status: "First appearance of the season in the cup, and the late save that protected a 3-1", note: "The deputy's evening, and he took it. Confirmed by Iraola on Monday as the only certain starter, Mamardashvili was tested early by Bergvall and then, after Gallagher's header had made it 2-1, produced what EPL Index called an excellent late intervention to stop Spurs levelling. Alisson resumes on Sunday; the point of nights like this is that the gap between the two is now something other than theoretical.", source: "EPL Index (Yahoo Sports) / Liverpool FC" },
    { name: "Cody Gakpo", issue: "Niggles in both adductors, no defined injury", status: "Fit, scoring, and the most productive Liverpool forward of the autumn", note: "The adductor scare that kept him out of the Atletico game is fully behind him. Gakpo led the line against Tottenham with Isak rested and lashed in the second goal shortly after the interval, taking him to two goals and three assists in five appearances per EPL Index. He can play three positions, which in a squad with one senior centre-forward has stopped being a nice-to-have and become the plan.", source: "EPL Index (Yahoo Sports) / Goal" },
    { name: "Wataru Endo", issue: "No injury; available and on the transfer list from January", status: "Put up for sale on Thursday, with FSG to sanction a January exit", note: "The board's assumptions change with this entry. Endo is available for Sunday and will not be here beyond the winter: multiple outlets reported on Thursday that Liverpool will let him go in January, the last window in which a fee is recoverable on a 2027 contract, with Ben Jacobs's line that 'Iraola clearly doesn't fancy him'. Iraola's own account is that four midfielders are ahead of him. The consequence for this page is narrower than the headline: Endo has been the emergency fifth centre-back all autumn, and from February that role has no occupant unless Leoni's knee has held.", source: "CaughtOffside / Football365 / Liverpool FC" },
    { name: "Milos Kerkez", issue: "No injury; competing with Tsimikas at left-back", status: "Back in the predicted XI after Friday's press conference, and against his old club", note: "The previews flipped on him during the day. Those published before Iraola spoke kept Tsimikas at left-back; Sports Illustrated and Yahoo, writing afterwards, restore Kerkez and put it in terms nobody would want on a birthday card, that he is the only realistic starter there this season regardless of form. He started the cup tie and replaced Tsimikas at half-time against Fulham, where Rousing The Kop gave him a 5 and SI 'yet more dreadful crossing'. Sunday takes him back to the club Liverpool bought him from.", source: "Sports Illustrated / Yahoo Sports / Rousing The Kop" },
  ],
  startersLastMatch: {
    match: "Liverpool 3-1 Tottenham, 15 September (Carabao Cup third round) · the full XI, published by the club",
    xi: ["Mamardashvili", "Frimpong", "Araujo", "Gomez (c)", "Kerkez", "Nyoni", "Mac Allister", "Ngumoha", "McConnell", "Gakpo", "Koumas"],
    changes: "Ten changes from the side that drew with Fulham on 12 September, and the eleven names are now the club's own rather than a reconstruction. Liverpool's team-news page of 18 September lists the XI in full, which corrects two things this board previously carried: Jeremie Frimpong played right-back, not Ronald Araujo, who partnered Gomez in the middle and, per Sports Illustrated, stayed on for the whole ninety while his captain came off at the interval in a pre-planned change for Jacquet; and Bradley Barcola, previously listed here as a starter on the strength of a passing network, did not start. Rio Ngumoha and James McConnell did. Nyoni and McConnell were withdrawn on 62 for Gravenberch and Szoboszlai, who scored the third, and Iraola singled out Ngumoha for recovering from a poor opening twenty minutes to contribute to two of the goals.",
    source: "Liverpool FC / Sports Illustrated / BBC Sport",
  },
  depthRisk: [
    { position: "Right-back", level: "high", detail: "Held at the top of the list, and Saturday supplied an unwelcome footnote: Isaac Mabaya, the under-21 right-back, lasted five minutes at Kirkby before pulling up in the act of assisting the opening goal, which removes the youngest body in the department from consideration for however long it turns out to be. Above him the picture is a decision rather than an emergency. Iraola said on Friday he has been surprised by how well Araujo has absorbed the physical demands of the position, finishing games without cramping, and that the next project is teaching him enough English to organise from it. The slot is his. He is still a centre-half facing Justin Kluivert, who scored on Thursday by arriving inside from exactly that flank. Frimpong played there in the cup, Gomez is the only specialist, and Bradley is out until late November." },
    { position: "Centre-forward", level: "high", detail: "One senior nine, and this week he gave the interview of a man who knows it. Isak told BBC Sport he has no regrets about the British-record move despite a first season of three league goals and a leg break, and he returns on Sunday after a night off, with four goal contributions in six matches this season. The club's published cup XI confirms Koumas started through the middle and Gakpo alongside him, which is the cover rather than the replacement. Ekitike's Achilles keeps January as the earliest realistic return, so the position stays one hamstring from a genuine crisis." },
    { position: "Centre-back", level: "medium", detail: "Held at medium, and the club's published cup XI is the reason it can be. Araujo partnered Gomez in the middle for the full ninety on Tuesday, which is evidence that the fourth and fifth bodies in this department exist in practice rather than on a depth chart, and Van Dijk and Jacquet were rested without consequence. Leoni is pencilled by Sports Mole for a mid-October return and is due to rejoin group training over the international break. The dated caveat is unchanged: Endo, the emergency cover, is listed for sale in January, so the insurance expires with the winter window." },
    { position: "Left-back", level: "high", detail: "The department where the reporting changed its mind inside a single day. Squawka's pre-press-conference preview had Tsimikas starting; Sports Illustrated and Yahoo, published after Iraola spoke, restore Kerkez and justify it in the bleakest available terms, that he is the only realistic starter there this season whatever his form. Tsimikas misplaced 11 of 31 passes against Fulham and came off at half-time; Kerkez replaced him and drew a 5 from Rousing The Kop. Two senior options, a consensus that neither is at the manager's standard, and no market until January." },
    { position: "Wide forward", level: "medium", detail: "The one department where the manager sounds actively pleased, and Friday gave him a reason. Asked whether four wingers for two flanks is a headache, Iraola said most weeks all four play and called it 'a luxury to have these kind of options'. Gakpo, Barcola, Munoz and Ngumoha is that four, and Ngumoha, who started the cup tie and was named in England's senior squad on Friday morning, has just become the hardest of them to leave out. Chiesa is due to resume training at the end of September. The reporting still says a right winger who scores is the January priority." },
    { position: "Central midfield", level: "medium", detail: "Held at medium, and the selection question inside it moved on Friday. The evening previews, at Sports Illustrated and Yahoo, put Mac Allister in the pivot beside Szoboszlai and leave Gravenberch out, on the reasoning that Liverpool had no control in midfield when Gravenberch started ahead of him at Fulham and that Mac Allister has a goal and an assist from Tuesday. Beneath the first team, the thinning is deliberate: Iraola justified Endo's non-selection by naming Nyoni, Gravenberch, Mac Allister and Szoboszlai ahead of him, and the club has since listed the thirty-three-year-old for January. Nyoni and McConnell both started the cup tie." },
  ],
  sources: ["Sports Mole", "Liverpool FC", "This Is Anfield", "EPL Index", "Goal", "SI", "Rousing The Kop", "Squawka", "Opta Analyst"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-19T22:30:00Z",
  played: 4,
  points: 6,
  pointsPerGame: 1.50,
  projectedPoints: 57,
  projectedFinish: "Conference League places on current pace",
  headline:
    "The pace below did not move on Saturday, because Liverpool did not play. Everything it is measured against did. Five results pushed them from eighth to tenth and widened the gap to the Champions League and Europa lines from two points to three, with Brentford and Everton now drawing them. Six points from four is still 1.50 a game and a projected 57, in the Conference band, from a sample far too small to forecast with: four more matches could move that number by ten in either direction. Win at the Vitality on Sunday and Liverpool go to nine from five, a 1.80 pace, and level on points with the clubs holding fourth and fifth. Draw a fourth and the number stays in the mid-fifties with City, LASK, Brentford, Brighton, Chelsea and Arsenal all inside the five weeks that follow the break.",
  thresholds: [
    { label: "Champions League (top 4)", points: 68, gap: 11, note: "Historical par for the last Champions League place in recent seasons. The live ESPN table this tracker rebuilds each run draws that stripe at fourth, not fifth, so the label follows the table rather than the coefficient arithmetic. Requires roughly 1.82 points per game from here." },
    { label: "Europa League (5th)", points: 60, gap: 3, note: "Fifth-place par, which is where the live table currently draws the Europa stripe, and three points above where the present pace lands. Requires about 1.59 points per game from here." },
    { label: "Conference League (6th-7th)", points: 55, gap: 0, note: "Sixth to seventh place par, often decided by cup outcomes as much as by league finish, and where the pace now sits. The live table carries no Conference stripe this early, because the place is usually settled by a domestic cup." },
    { label: "Safety", points: 38, gap: 0, note: "The conventional survival line, and where the pace sat before the Ipswich win. Nineteen points of projection now separate it from the pace, the size of the sample talking." },
  ],
  thresholdNote:
    "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  runIn: [
    { date: "2026-09-20", opponent: "Bournemouth", home: false, competition: "PL", oppPosition: 16, difficulty: "easy" },
    { date: "2026-10-11", opponent: "Manchester City", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 4, difficulty: "hard" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 3, difficulty: "hard" },
    { date: "2026-11-01", opponent: "Arsenal", home: true, competition: "PL", oppPosition: 2, difficulty: "hard" },
    { date: "2026-11-08", opponent: "Crystal Palace", home: false, competition: "PL", oppPosition: 17, difficulty: "easy" },
  ],
  runInVerdict:
    "Saturday made the middle of this list worse and the ends no better. The four opponents between the international break and November now occupy first, fourth, third and second in the table, and one of them, Brighton, spent the afternoon beating the reigning champions 3-0 with sixteen goals scored in five games. Between the league fixtures sit LASK away on 14 October and Chelsea at Anfield on 28 October, both confirmed on Saturday, which makes it six matches in four weeks against opposition that is almost uniformly in form. Win at the Vitality and Liverpool enter that block on nine from five, a 1.80 pace, and a projection back inside the Europa band. Draw a fourth and the pace sits in the mid-fifties with the season's hardest sequence immediately behind it. The complication the table hides is that Bournemouth have led in all four of their league games, so Liverpool are likelier to spend part of Sunday chasing than sixteenth place implies.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "This Is Anfield", "BBC Sport"],
};
