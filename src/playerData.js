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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Mon Sep 14, morning - the day before a cup tie he is unlikely to play. This Is Anfield's read on Iraola's rotation has Alisson among those rested, Mamardashvili stepping into the competition he owns, and no wonder: the No. 1 has played every minute of a season now four league games and a European night old. Saturday was a clean sheet built on one error recovered and two saves, a 5 from Rousing The Kop against a 7.9 on FotMob. The Bournemouth trip next Sunday is his again.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Mon Sep 14, morning - his night, if the previews are right. Every Tottenham and Liverpool preview has Mamardashvili starting Tuesday's third round, the deputy's competition and a first appearance since the summer tour with Alisson rested. Andy Madley referees, VAR in use, and the visitors arrive without a league goal all season. A clean sheet against a side that cannot score would be the quiet kind of statement a backup keeper waits for.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Mon Sep 14, morning - the rest, at last, and the contract still parked. This Is Anfield expect Iraola to leave the captain out of the cup tie, the first ninety he will have missed all season, made possible by Joe Gomez returning to training as a fourth senior centre-back. The longer question stands behind it: Liverpool will not open contract talks before 2027, no decision before April, the deal expiring that summer with a free transfer on the table and suitors in Saudi Arabia, Milan, Turkey and MLS. He has played every minute of all five games at 35 because nobody else could.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Mon Sep 14, morning - the name that moved. Sports Mole's dawn injury bulletin has Gomez back in full training and hopeful of a first appearance of the season against Tottenham, a major doubt rather than a certainty but the first time in seven weeks he has been framed as available after July's Sunderland muscle injury. He is a fourth senior centre-back and a third right-back in one body, exactly the reinforcement that lets Iraola rest Van Dijk for the cup. Whether he starts or is eased onto the bench is the selection detail of the day.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Mon Sep 14, morning - the unresolved position going into the cup. Saturday exposed the depth: Tsimikas, a first start of the season, misplaced 11 of 31 passes and was hooked at half-time, and Kerkez came on to 'yet more dreadful crossing' by SI, whose verdict is that neither left-back is currently up to Iraola's standard. Still the only senior option there, so the Tuesday call is a further look rather than a fix. A 5 from Rousing The Kop on Saturday.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Mon Sep 14, morning - out until late November, and quietly replaced. Sports Mole's Monday round-up holds the knee injury from January at no club date, pencilling Manchester United on 21 November as the earliest, while Araujo has taken the right-back slot for three straight games and the reporting now tips the switch to be made permanent. Frimpong is the cup alternative; Gomez, if he features Tuesday, is a third body who has played there.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Mon Sep 14, morning - the likeliest cup starter at right-back. With Iraola set to rotate and Araujo having played three games in seven days, the Dutchman is in line for a start on Tuesday. Saturday: the better of the late changes, on for Araujo at 72, 'solid enough defensively' by Rousing The Kop, a 6 and a 6.9 on FotMob. The reporting tipping Araujo's move inside to be made permanent only clears his route.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Mon Sep 14, morning - a date, finally. Sports Mole pencils 14 October as an availability target for the teenager a year on from the ACL he suffered on debut, with Iraola's own line more cautious, 'the plan is also to start training during the break, with the group'. Named in the Champions League squad, unused, and not part of Tuesday's calculation. His return is the one that would end the two-man centre-back rota for good.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Mon Sep 14, morning - the ever-present who might, for once, sit. Five starts in five beside Van Dijk, and Saturday the goal-line clearance from Garcia that kept the point, an 8 and man of the match from Rousing The Kop, 8.1 to top the FotMob card. If Gomez is fit to start, the cup is a rare chance to rest Jacquet too; if not, he plays again, because the alternatives are a teenager and an converted midfielder. Opta had him at 18 of 25 league duels before Saturday.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Mon Sep 14, morning - out on loan, as the club always meant. Ndukwe joined Levante on a season-long loan on deadline day, the Spanish club covering his wage. Six foot six and nineteen, Liverpool's standout defender against Monaco in pre-season, but born in Austria and short of the points a post-Brexit permit demands, so a competitive fixture here this season was never possible. A year in La Liga is the plan.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Mon Sep 14, morning - the one nobody rotates out. Sports Mole's preview expects Mac Allister to anchor a changed cup midfield alongside seventeen-year-old Trey Nyoni, which is itself the point: the Argentine who says the club will not renew him is the player Iraola cannot leave out even in a rotation. On for Gravenberch at 60 on Saturday and the game settled, a 7 and 'undroppable' by Rousing The Kop. The recruitment staff scout Atletico's Pablo Barrios for a 2027 midfield he may not be in.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Mon Sep 14, morning - named in Monday's post-mortem, not the team sheet. Sports Mole's 'why the problem midfield was not addressed' piece puts the Fulham pivot at the centre of it: Gravenberch and Szoboszlai won two of ten first-half ground duels between them, both rated 3, and control returned only when Mac Allister came on. The start he waited three games for lasted an hour. Tuesday's cup place is a harder case to make than it was on Friday.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Mon Sep 14, morning - the first bad game of a full season, and a thesis built on it. Monday's midfield inquest keeps returning to the hour he and Gravenberch spent as a pair against Fulham: none of six first-half ground duels won, a swipe at King that nearly gave a penalty, set-pieces that did not land until the corner Munoz headed onto the bar. A 3 from Rousing The Kop, SI's 6.8 kinder. Signed to 2031 and an ever-present; the rotation may reach even him for the cup.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Mon Sep 14, morning - the promise about to be kept. Sports Mole's preview expects Endo to make a first appearance of the season on Tuesday, probably as a makeshift centre-half if Gomez is not risked from the start, which is the exact scenario Iraola meant by 'for sure he will have his moments' and Carragher doubted. Nought minutes so far, fourth in the midfield queue and left off the European squad, so the Carabao Cup is the only realistic stage he has.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Mon Sep 14, morning - defended on Monday, rested on Tuesday. Jermaine Pennant used a Sports Mole column to push back on the growing criticism of the German, who This Is Anfield expect Iraola to leave out of the cup tie after a fortnight's patience spent on one goalless afternoon. Fulham: two shots the wrong side of the post and a 4 from Rousing The Kop, a 7.4 on FotMob noting fatigue and 'uncharacteristic technical errors'. Five competitive games without a goal or assist; the reporting says the missing deep passer is not his fault alone.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Mon Sep 14, morning - tipped to start. Sports Mole's preview has the seventeen-year-old coming into midfield for the cup, likely alongside Mac Allister, in the competition where Liverpool have always found their next players. Unused on Saturday's bench for the first time this season, and with Iraola describing the midfield as a queue, Tuesday is his clearest run at minutes. The new contract remains unsigned per the weekend reporting.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Mon Sep 14, morning - a candidate to lead the line. With Isak set to be rested, Sports Mole's preview floats Gakpo as the false-nine against Tottenham, the role Iraola has used him in before and one that suits a night the only senior striker sits out. Fit now after last week's adductor doubt, thirty minutes off the bench against Fulham, and a goal and three assists in three league games per Opta back in the pool. The question is whether he starts the cup or is held for Bournemouth.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Mon Sep 14, morning - the rest that finally becomes possible. This Is Anfield expect Iraola to leave Isak out of the cup tie, the first time resting the only fit senior nine has been thinkable, with Gakpo the false-nine cover. Sixteen touches against Fulham, the second fewest for a Liverpool outfielder on record per the BBC; three league goals in four while starting every game. The counter-argument is that a striker short of touches needs games, not rest.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Mon Sep 14, morning - still the shape of the absence, no shorter. Sports Mole's Monday round-up carries no timeline beyond the club's, Iraola confirming 'Hugo will go later' than the international break and framing January as the hope, 'a reasonable chance he could help us', the last two Champions League league-phase games the target per This Is Anfield. His absence is why resting Isak means playing Gakpo up top; the Achilles rupture from April will cost most of the campaign.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Mon Sep 14, morning - in the cup rotation, and needing a better night. Rested to the bench against Fulham and on for Barcola at 72, a cameo Rousing The Kop called poor, a 4: an overhit cross, a counter conceded, a shot fired wide. Sports Mole's preview has him among the wide options for Tuesday as Iraola changes the front line, which is a chance to answer Saturday rather than repeat it.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Mon Sep 14, morning - a date in view. Sports Mole pencils 11 October as an availability target for the lower-back injury, with Iraola expecting him back in training around the international break. Left off the Champions League squad, so the autumn's European nights were never in reach; a mid-October return would give a stretched front line a fifth forward it has badly missed since a pre-season friendly at Como.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Mon Sep 14, morning - third keeper, and not in the picture. Woodman was not on Saturday's bench, which carried Mamardashvili alone, and with the deputy set to start the cup his next involvement is a bench place there at most. A settled, quiet role behind two senior goalkeepers.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Mon Sep 14, morning - a likelier cup start than a league one. Sports Mole's preview names Munoz among the changed front line for Tuesday, a chance to build on Saturday's near-miss: started on the right, headed a corner against the bar on 22 with Leno getting a hand to it, then withdrawn on the hour, a 4 from Rousing The Kop but SI's 6.7 calling him the most natural of Iraola's right-wing options. One of four wingers for a role the club spent the weekend being told it has not filled.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Mon Sep 14, morning - the loan turning into a plan. CaughtOffside reported over the weekend that Liverpool are encouraged in keeping the Uruguayan, with Barcelona unable to guarantee him a role, and Football365 tipped Iraola to make the right-back switch permanent, a third straight start there against Fulham, a 6 and a 6.9, isolated at times by Robinson's overloads. Three games in seven days makes him the one most likely rested for the cup, with Frimpong and a returning Gomez the cover.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Mon Sep 14, morning - managed, not rested. Iraola said the club is 'building his physical condition' with games and that the four wingers will play both sides all season, so a cup involvement is likelier than a night off despite no pre-season. Saturday was a first Premier League start, on the left, fading after setting up Isak's first-minute chance, a 4 from Rousing The Kop and 6.6 on FotMob.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  src: "/assets/cover/2026-09-12-jacquet-clearance.svg",
  alt: "Editorial plate: a grey Anfield afternoon, a defender in red stretched across the goal-line hooking the ball clear with the net behind him, a striker in white arriving too late, the goalkeeper stranded to one side.",
  focus: "Liverpool 0-0 Fulham: Jacquet clears Garcia's shot off the line in the twelfth minute after Alisson's short pass, the moment that kept a point on an afternoon Liverpool failed to score for the first time under Iraola",
  credit: "Plate · Daily edition",
  generatedAt: "2026-09-14T08:30:00Z",
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
      "Liverpool drew 0-0 with Fulham at Anfield on Saturday afternoon, the first match under Andoni Iraola without a goal and a fourth consecutive Premier League draw at Anfield, the first such run since November 2011 per Opta. Jeremy Jacquet cleared Gonzalo Garcia's shot off the line in the twelfth minute after Alisson's short pass to a marked Ryan Gravenberch was dispossessed and Josh King's penalty appeal waved away; Victor Munoz headed a corner against the bar on 22, Bernd Leno saved from Alexander Isak and Alexis Mac Allister, Alisson tipped King's curler wide on 76 and the substitute Rodrigo Muniz missed on 79. Opta had Liverpool 1.13 expected goals from 14 shots to Fulham's 0.71 from 10. Iraola's three changes, Kostas Tsimikas, Gravenberch and Munoz, were all withdrawn by the hour; Cody Gakpo returned from the bench. 'There is a lack of freshness, definitely, we cannot hide it,' Iraola said of a 60-hour turnaround. Fulham's first point under Alvaro Arbeloa. Tottenham, goalless in four league games, visit Anfield in the Carabao Cup on Tuesday at 8pm.",
    subject: "Jeremy Jacquet, stretched full length across the Anfield goal-line under a grey September sky, hooking the ball clear inches from the net, a Fulham striker in white arriving a step too late, Alisson stranded to one side, the Kop behind the goal frozen mid-gasp",
    prompt: "Cinematic wide still, 16:9, 1600x900, no text, no logos, no legible lettering. A young centre-back in an all-red kit stretched across a goal-line, one boot hooking a football clear a few inches in front of the net, the white net bulging behind him, a striker in an all-white kit arriving a step too late with arms raised in appeal, a goalkeeper in a dark kit stranded to one side of the six-yard box, a steep bank of red-clad supporters behind the goal under flat grey daylight, overcast September sky above the stand roof, shallow depth of field, photojournalistic, Getty-style sports photography, motion blur on the ball, restrained colour grade with cool grey shadows and Liverpool red highlights.",
    aspectRatio: "landscape",
    slug: "jacquet-clearance",
  },
};


// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Tottenham",
  shortName: "TOT",
  home: true,
  date: "2026-09-15T20:00:00",
  competition: "EFL",
  venue: "Anfield",
  broadcast: "ITV and Sky Sports (8pm)",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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
// Last refresh: 2026-09-14 (Monday morning, ~4am ET) — re-fetched from ESPN's endpoint and byte-identical to Sunday's
// programme, no league game since. Manchester City and Arsenal are clear on twelve, both perfect from four, City having
// won the derby 1-0 at Old Trafford with ten men from the 23rd minute (Foden red, Haaland's winner given on review) with
// Manchester United thirteenth. Brighton's 5-0 at Coventry holds them fourth and in the Champions League stripe, Chelsea
// on the Europa line and Brentford outside a stripe. LIVERPOOL SEVENTH on six from four (1W 3D), passed by Brentford on
// goal difference and level with Everton. Coventry are bottom on nothing from four, no goal, minus ten. Tottenham (Anfield,
// Carabao Cup, Tuesday 8pm) stay seventeenth on two and still without a league goal; Fulham eighteenth on one, in the
// stripe with Villa and Coventry.
export const STANDINGS = [
  { pos: 1, team: "Arsenal", p: 4, w: 4, d: 0, l: 0, gd: 7, pts: 12, qualification: "UCL" },
  { pos: 2, team: "Manchester City", p: 4, w: 4, d: 0, l: 0, gd: 6, pts: 12, qualification: "UCL" },
  { pos: 3, team: "Hull", p: 4, w: 2, d: 2, l: 0, gd: 3, pts: 8, qualification: "UCL" },
  { pos: 4, team: "Brighton", p: 4, w: 2, d: 1, l: 1, gd: 8, pts: 7, qualification: "UCL" },
  { pos: 5, team: "Chelsea", p: 4, w: 2, d: 1, l: 1, gd: 1, pts: 7, qualification: "UEL" },
  { pos: 6, team: "Brentford", p: 4, w: 1, d: 3, l: 0, gd: 3, pts: 6 },
  { pos: 7, team: "Liverpool", p: 4, w: 1, d: 3, l: 0, gd: 2, pts: 6, highlight: true },
  { pos: 8, team: "Everton", p: 4, w: 1, d: 3, l: 0, gd: 2, pts: 6 },
  { pos: 9, team: "Ipswich", p: 4, w: 2, d: 0, l: 2, gd: -3, pts: 6 },
  { pos: 10, team: "Newcastle", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5 },
  { pos: 11, team: "Leeds", p: 3, w: 1, d: 2, l: 0, gd: 1, pts: 5 },
  { pos: 12, team: "Nott'm Forest", p: 4, w: 1, d: 2, l: 1, gd: 0, pts: 5 },
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
  generatedAt: "2026-09-14T08:30:00Z",
  overview:
    "The weekend's damage is done and Monday's table is a settled thing, which for Liverpool means seventh on six points with the football this week happening in a cup rather than the league. Arsenal and Manchester City are clear at the top on twelve, both perfect from four, City having won the derby with ten men after Foden's early red; Brighton's 5-0 at Coventry lifted them into the Champions League places and stretched the top five away from the chasing pack. Liverpool sit level with Everton and a place behind Brentford on goal difference, the European line now three points up rather than one, the only side in the top half unbeaten on three draws. Tottenham, Tuesday's cup visitors, are seventeenth on two and still without a league goal in four games. Bournemouth, next Sunday's league opponent, are fifteenth and winless. Nothing in the table moves again until the weekend, so the week's verdict is the one Anfield delivers in the League Cup.",
  teams: {
    "Liverpool": "Seventh on six, one win in four and unbeaten, level with Everton and behind Brentford on goal difference. Three points from Europe; the cup on Tuesday is the week's only football and the most decorated route to it.",
    "Arsenal": "Joint top on twelve, four wins from four, ahead of City on goal difference. At Anfield on 1 November.",
    "Manchester City": "Level on twelve after winning the derby with ten men from the 23rd minute, Foden sent off and Haaland's winner given on review. Visit Anfield on 11 October.",
    "Hull": "Third on eight, promoted and still unbeaten, holding a place nobody forecast in August.",
    "Brighton": "Fourth after a 5-0 at Coventry, five different scorers and Dunk's strike the pick; the weekend's biggest win and a jump into the Champions League stripe.",
    "Chelsea": "Fifth on seven, the Europa stripe theirs by goal difference after Brighton's rout moved the line.",
    "Brentford": "Sixth on six, above Liverpool on goal difference and unbeaten like them. Host Liverpool on 17 October.",
    "Everton": "Eighth on six, level with Liverpool on points and goal difference, separated only by goals scored; goalless with Spurs on Saturday.",
    "Manchester United": "Thirteenth on four after the derby defeat, twice hitting the woodwork against ten men through Rashford and Mainoo.",
    "Bournemouth": "Fifteenth on three, winless from three draws and a defeat under a new manager; Liverpool visit the Vitality next Sunday, 20 September.",
    "Tottenham": "Seventeenth on two, four league games without a goal, a club first. At Anfield in the Carabao Cup on Tuesday at 8pm, De Zerbi set to rotate heavily.",
    "Fulham": "Eighteenth on one, the Anfield point still their only one; inside the relegation stripe.",
    "Coventry": "Bottom on nothing: four defeats, no goal scored, minus ten, and a red card for Awoniyi on Sunday.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Team He Has Not Named.",
    byline: "This Is Anfield",
    dateline: "Anfield · 14 September",
    category: "Tactics",
    body:
      "On the eve of a cup tie the loudest thing at Liverpool is a team sheet still in a drawer. This Is Anfield's weekend read has Andoni Iraola planning wholesale changes for Tuesday's third round, Van Dijk, Isak and Wirtz among the names to be rested, Lewis Koumas among those to come in. It is the rotation he tried against Fulham and could not hold, when three of his changes were back off inside the hour, and the calendar has not softened since: Bournemouth away follows on Sunday. There is a version of this that looks bold and a version that looks forced, and the difference between them is whether the players he trusts less can do what the players he trusts could not, which was create.",
  },
  {
    n: "02",
    headline: "Gomez, Seven Weeks On.",
    byline: "Sports Mole",
    dateline: "Anfield · 14 September",
    category: "Injuries",
    body:
      "The most useful sentence of the morning arrived in a Sports Mole injury bulletin timed just after four o'clock. Joe Gomez, out since a muscle injury in the Sunderland friendly on the twenty-sixth of July, is back in full training and hopeful of an appearance on Tuesday. He is called a major doubt, not a certainty, and the club has learned to underpromise on him. But seven weeks is a long time to defend with two men, and Van Dijk and Jacquet have played every minute of every game because there was nobody else. A fourth senior centre-back, one who can also fill in at right-back, is not a headline signing. It is, this week, worth more than one.",
  },
  {
    n: "03",
    headline: "De Zerbi Empties His Bench Too.",
    byline: "Spurs Web / Football.London",
    dateline: "Hotspur Way · 13 September",
    category: "Football News",
    body:
      "The visitors are in no better temper. Roberto De Zerbi, whose Tottenham have not scored a league goal all season, told Football.London he will 'play on Tuesday in Liverpool with all other players', which is a manager protecting the tired and, perhaps, hiding the out-of-form. Van de Ven and Solanke are hurt, Porro and Udogie are doubts, Maddison is back, and Richarlison, whose deadline move to Vasco da Gama fell through, is fit and available with a point to make. De Zerbi's own hope is that an away day against a side that pushes bodies forward might loosen his forwards. Two managers under a low autumn sky, meeting in the one cup either might still win.",
  },
  {
    n: "04",
    headline: "A Number On The Winger.",
    byline: "Football Insider / Sports Mole",
    dateline: "Anfield · 14 September",
    category: "Transfers",
    body:
      "The search for a right winger has spent a fortnight changing its mind about names; overnight it acquired a price instead. Football Insider report that Liverpool admire Bournemouth's Rayan enough to consider a club-record move once his release clause, a hundred and thirty million pounds, activates in 2027. He is twenty, Brazilian, mostly a right winger, five goals in fifteen league games last season and none yet in four this. It is a summer idea rather than a January one, and the honesty of the reporting is in the caveat: a squad that spent past six hundred million pounds in sixteen months and did not buy a wide forward who scores is now being asked to spend that again to correct it.",
  },
  {
    n: "05",
    headline: "The Academy's Turn.",
    byline: "This Is Anfield / Rousing The Kop",
    dateline: "Kirkby · 14 September",
    category: "Football News",
    body:
      "A rested first eleven is an opened door, and the names behind it have waited all season for one. If the reporting is right that Koumas starts, it is a first meaningful test for the forward Iraola has called willing and Firmino-shaped, a presser rather than a finisher. Trey Nyoni, seventeen and unused on Saturday's bench for the first time, has the quieter claim in a midfield the manager keeps describing as a queue. Even Wataru Endo, promised his moment and doubted by Carragher, has a competition designed for exactly this. The cup has always been where Liverpool find out who the next players are; Tuesday, for once, the manager may have no choice but to look.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-14T08:30:00Z",
  summary:
    "Monday morning, the day before a cup tie, and the story is the team sheet Iraola has not yet named. This Is Anfield reported over the weekend that he intends to make wholesale changes for Tuesday's Carabao Cup third round against Tottenham, with Virgil van Dijk, Alexander Isak and Florian Wirtz among those to be rested and Lewis Koumas in line to start, the rotation Saturday's draw was supposed to allow and did not survive. The change that makes it possible arrived overnight: Sports Mole's Monday bulletin has Joe Gomez, hampered by a muscle injury since July's Sunderland friendly, back in training and hopeful of a first appearance of the season in the backline, which is the fourth senior centre-back the depth chart has waited seven weeks for. Tottenham arrive in the same mood, De Zerbi confirming he will 'play with all other players' after a winless league start, without the injured Van de Ven and Solanke and doubtful over Porro and Udogie. Further out, Football Insider tie Liverpool to a club-record 130m-pound move for Bournemouth's Rayan once his release clause activates in 2027, the forward hunt acquiring a number. Liverpool sit seventh, six points from four games, the European line three points up the table.",
  keyTopics: [
    {
      title: "Iraola To Ring The Changes For The Cup: Van Dijk, Isak And Wirtz Rested, Koumas In Line To Start (This Is Anfield, today)",
      detail:
        "The freshest thread of a quiet Monday, and the one the whole edition turns on. This Is Anfield's weekend debate piece reports that Iraola intends wholesale changes for Tuesday's third-round tie, with Van Dijk, Isak and Wirtz among the senior names expected to drop out and Lewis Koumas handed a start in attack. It is the rotation the manager reached for against Fulham and could not keep, when Tsimikas, Gravenberch and Munoz were all withdrawn inside the hour; the cup, 72 hours on and with Bournemouth away five days later, is where he has to trust the bench that did not hold. Whether he dares rest all three at once is the selection question of the week.",
      category: "tactics",
    },
    {
      title: "Gomez Back In Training And In Line For A First Appearance Of The Season Against Spurs (Sports Mole, today)",
      detail:
        "Reported in Sports Mole's Monday-morning injury round-up, timestamped just after 4am UK. Joe Gomez, out since a muscle injury in the 4-2 friendly win over Sunderland on 26 July, has returned to full training and is 'hopeful of an appearance on Tuesday in the backline'. He is listed a major doubt rather than a certainty, but seven weeks on it is the first time the club has framed him as available, and the timing matters more than the caveat: he is the fourth senior centre-back and a third right-back in one body, exactly the reinforcement that would let Iraola rest Van Dijk without playing a teenager at the back.",
      category: "injuries",
    },
    {
      title: "De Zerbi Will 'Play With All Other Players': Spurs Rotate Too, Without Van De Ven And Solanke, Porro And Udogie Doubtful (Spurs Web / Football.London / Sports Mole, today)",
      detail:
        "The opponent arrives in the same frame of mind. Roberto De Zerbi told Football.London he will 'play on Tuesday in Liverpool with all other players' after a winless league start that has set a club record of four games without a goal, and Monday's team-news picture sharpened: Micky van de Ven and Dominic Solanke are both out with injuries carried since the Australia tour, James Maddison is back after a shoulder problem, and Pedro Porro and Destiny Udogie are major doubts with muscle issues. Mudryk (ankle), Simons, Odobert and Kulusevski (all knee) remain out. Richarlison, whose deadline-day move to Vasco da Gama collapsed, is eligible and available.",
      category: "matches",
    },
    {
      title: "The Forward Hunt Gets A Price: Liverpool Tied To A Club-Record 130m-Pound Move For Bournemouth's Rayan In 2027 (Football Insider / Sports Mole, today)",
      detail:
        "Reconnaissance with the window shut, but now with a figure attached. Football Insider, carried by Sports Mole overnight, report that Liverpool strongly admire Bournemouth's Rayan and would consider breaking their transfer record to sign him once his 130m-pound release clause activates in 2027. The Brazilian is 20, predominantly a right winger, and scored five in fifteen league games last season after a January arrival; he has not yet scored or assisted in four this term under a new manager. The piece reads him as a summer project rather than a January fix, and frames the need in the same terms the reporting has all month: a wide forward who scores, still unsigned.",
      category: "transfers",
    },
    {
      title: "The Midfield Problem Nobody Fixed: Why Szoboszlai And Gravenberch Were Left Exposed (Sports Mole, today)",
      detail:
        "Sunday's post-mortem hardened into a Monday thesis. Sports Mole's read on the Fulham draw is that the pivot Iraola trusted, Szoboszlai and Gravenberch, was exposed because the department behind them was never reinforced: Endo has not played a minute, Nyoni is seventeen, and Mac Allister, the man who steadied the game on his hour-mark entry, is the one player nobody will leave out. The two starters won two of ten first-half ground duels between them per Rousing The Kop and both were withdrawn or bypassed by the time the game settled. It is the argument for another change on Tuesday, and against Iraola's whole idea of who this midfield is.",
      category: "tactics",
    },
    {
      title: "Chiesa And Leoni Get Dates: Back In Training Over The Break, October Returns Pencilled (Sports Mole / Liverpool FC, today)",
      detail:
        "The longer-term corner of the treatment room acquired firmer dates in Monday's round-up. Federico Chiesa (lower back) is pencilled to return around 11 October, with Iraola expecting him back in training during the international break; Giovanni Leoni, a year on from the ACL he suffered on debut, is tipped for 14 October and is due to rejoin group training this month, the manager saying 'the plan is also to start training during the break, with the group'. Neither helps on Tuesday, but both narrow a squad that has spent September down to two fit senior centre-backs and one fit senior nine.",
      category: "injuries",
    },
    {
      title: "The Rest The Captain Is Finally Getting, And The Contract He Is Still Waiting On (Football Insider / This Is Anfield, 1d ago)",
      detail:
        "The weekend's lead becomes Monday's subplot. Van Dijk has played every minute of all five competitive games at 35, and Friday's reporting that the club will not open contract talks until 2027, no decision before April, still stands behind him. What changes on Tuesday is the football: with Gomez in line to return, the cup tie is the first realistic chance to give the captain ninety minutes off since the season began. A rest is not a statement about a contract, but for a squad that could not previously spare him it is the more immediate news, and it is the reporting on the fourth centre-back that has made it possible.",
      category: "general",
    },
    {
      title: "De Zerbi Answers The Sack Talk As Spurs' Goalless Record Grows (Sports Mole / Spurs Web, 1d ago)",
      detail:
        "The pressure that follows Liverpool's manager around also travels north London. De Zerbi responded over the weekend to questions about his job after a start that has produced no league goals in four games, a club first, and only a 5-1 win over Charlton in this competition to point at. Spurs Web's account has fans openly worried about where goals come from; De Zerbi's own framing is that an away trip to a Liverpool side that commits bodies forward might free his players up. The subtext of Tuesday is two managers under scrutiny meeting in the one competition either can realistically win this autumn.",
      category: "general",
    },
    {
      title: "Isak's Quiet Week, And The Rest That May Come In The Cup (BBC Sport / This Is Anfield, 1d ago)",
      detail:
        "The striker who cannot be supplied may finally be spared. Isak touched the ball sixteen times against Fulham, the second fewest for a Liverpool outfielder on record per the BBC, and has three league goals in four while starting every game of a congested opening. With Ekitike out until the new year and Koumas the false-nine option in reserve, resting Isak has been impossible; the cup tie, in This Is Anfield's reading of Iraola's rotation, is the first place it becomes thinkable. The counter-argument is that a striker short of touches needs games, not rest, which is the tension in every one of these calls.",
      category: "tactics",
    },
    {
      title: "Seventh, And The European Line Three Points Away After A Weekend Liverpool Sat Out (ESPN / Premier League, 1d ago)",
      detail:
        "The table Liverpool wake to on Monday is the one Sunday left them: seventh on six points, level with Everton and behind Brentford on goal difference, with Arsenal and Manchester City clear at the top on twelve and Brighton's 5-0 at Coventry having pushed the Champions League line further off. It is a snapshot, not a verdict, four games into a season, but it frames the cup tie usefully: the one route to European football that does not depend on chasing four points a week is the competition Liverpool have won more than anyone, and it starts on Tuesday against a side one place below them.",
      category: "matches",
    },
  ],
  sources: [
    "This Is Anfield",
    "Sports Mole",
    "Football Insider",
    "Spurs Web",
    "Football.London",
    "Liverpool FC",
    "BBC Sport",
    "ESPN",
    "Premier League",
    "Rousing The Kop",
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
  generatedAt: "2026-09-14T08:30:00Z",
  opponent: "Tottenham",
  shortName: "TOT",
  fixture: {
    date: "2026-09-15T20:00:00",
    venue: "Anfield",
    home: true,
    competition: "EFL",
    broadcast: "ITV and Sky Sports (8pm)",
  },
  manager: "Roberto De Zerbi",
  formation: "4-2-3-1",
  leaguePosition: 17,
  summary:
    "A day out, and the dossier's central fact has been joined by a warning about how little of it will be tested. Roberto De Zerbi told Football.London he will travel to Anfield and 'play with all other players', a wholesale rotation from a side that has still not scored a Premier League goal this season, four games, a club record, and sits seventeenth on two points. The unchanged part is the failure to finish: nil from 2.94 expected goals through gameweek three per Squawka's Opta table, the largest shortfall in the division, and a fourth blank against Everton followed. De Zerbi, appointed in the summer to a squad rebuilt for close to 350m pounds, has two league clean sheets to point at and a Carabao Cup second round in which Charlton were beaten 5-1, Moore, Solanke, Danso, Savio and Davies scoring. The cup XI has its shape from the previews: Kinsky behind Gray, Van Hecke, Senesi and Andy Robertson, Fernandes and Tonali screening, Kudus, Gallagher and Savio behind Solanke, with Pedro Porro and Destiny Udogie doubtful and Van de Ven, Mudryk, Simons, Odobert and Kulusevski all out. Robertson returns to Anfield in white for the first time.",
  shape:
    "De Zerbi's Tottenham build slowly from the back and look to release fast once the first line is drawn in, and a rotated side does not change the intent, only the personnel executing it. Against Everton, with a fuller team, Fernandes and Archie Gray took turns crashing the inside-right channel before the tempo fell away; the threat was wide and early rather than central and late, Savio receiving in dangerous areas and doing too little with it by CBS's account, and the front line's problem showing in a single number, three shots from the forwards against five from the back four. Out of possession they were, per CBS, far less porous than in the previous two seasons, and the two clean sheets are real. A cup team drawn from the bench may press less and space more, which is the opening a rested Liverpool side has to take early.",
  keyPlayers: [
    {
      name: "Dominic Solanke",
      role: "Centre-forward",
      threat: "Scored in the 5-1 over Charlton in this competition, per Sky Sports, and is tipped to start against his former club. Started the league game against Everton, where CBS counted no shots and no shot assists in 63 minutes and 11 completed passes worth 0.01 expected assists. The number that explains the drought.",
      source: "Sky Sports / CBS Sports / Sports Mole",
    },
    {
      name: "Savio",
      role: "Winger",
      threat: "The 75m-pound signing from Manchester City scored and assisted within eleven minutes of coming on in the 5-1 over Charlton, per Sky Sports; missed the Newcastle defeat with muscular fatigue and has started at Forest and against Everton since without a league goal contribution. Moved across the front line for the cup.",
      source: "Sky Sports / Evening Standard",
    },
    {
      name: "Andy Robertson",
      role: "Left-back",
      threat: "Delivered the free-kick that produced Van Hecke's flick against Everton, the only Tottenham shot worth more than 0.1 expected goals on Saturday (0.14), per CBS Sports. Left Liverpool in July as a free agent after nine years and 350-plus games; this is his first return to Anfield.",
      source: "CBS Sports / This Is Anfield",
    },
    {
      name: "Lucas Bergvall",
      role: "Midfielder",
      threat: "Produced Tottenham's only real test of Pickford on Saturday, an 89th-minute shot bent toward the bottom corner, per CBS Sports; scored the winner against Liverpool in the 2025 Carabao Cup semi-final first leg. A cup-tie specialist likely from the bench in the rotated side.",
      source: "CBS Sports",
    },
  ],
  predictedXI: [
    "Kinsky", "Gray", "Van Hecke", "Senesi", "Robertson",
    "Fernandes", "Tonali", "Kudus", "Gallagher", "Savio", "Solanke",
  ],
  absentees: [
    { name: "Pedro Porro", issue: "Muscle; left out at Everton, De Zerbi unwilling to risk him", status: "Doubt" },
    { name: "Destiny Udogie", issue: "Muscle; minutes managed, left out of the Everton squad", status: "Doubt" },
    { name: "Micky van de Ven", issue: "Injury carried from the Australia tour; not in the previewed cup XI", status: "Doubt" },
    { name: "Mykhailo Mudryk", issue: "Ankle (training); pencilled to return early November per Sports Mole", status: "Out" },
    { name: "Xavi Simons", issue: "ACL (April); no return anticipated before the new year", status: "Out" },
    { name: "Wilson Odobert", issue: "Knee (cruciate); no firm return timeline", status: "Out" },
    { name: "Dejan Kulusevski", issue: "Knee; missed training in the last week per De Zerbi", status: "Out" },
  ],
  recentForm: [
    { date: "2026-09-12", opponent: "Everton", home: true, score: "0-0", result: "D", note: "0.64 expected goals from 14 shots per CBS; Pickford not tested until Bergvall on 89. A fourth league game without a goal, a club first. Booed off." },
    { date: "2026-09-05", opponent: "Nott'm Forest", home: false, score: "0-0", result: "D", note: "A first point and a first clean sheet of the season at the City Ground; Udogie withdrawn after the hour." },
    { date: "2026-08-30", opponent: "Newcastle", home: true, score: "0-2", result: "L", note: "Beaten in the home opener; Savio left out with muscular fatigue after his cup debut." },
    { date: "2026-08-26", opponent: "Charlton", home: true, score: "5-1", result: "W", note: "Carabao Cup second round. Moore, Solanke, Danso, Savio and Davies; Savio scored and assisted within eleven minutes of coming on." },
  ],
  liverpoolAngle:
    "This is a tie of two second strings, and the question is which manager's fringe can do what his first team could not. Iraola is expected to rest Van Dijk, Isak and Wirtz and hand starts to the likes of Koumas and Nyoni, per This Is Anfield and Sports Mole, which is the rotation the Fulham draw was meant to allow before three of his changes were withdrawn inside an hour. That matters against this opponent specifically: FORM_TRENDS.diagnosis still carries the fast-break concession as the highest-severity pattern on the page, and Savio, who scored and assisted inside eleven minutes of his cup debut, is exactly the runner a reshuffled defence leaves room for, even one strengthened by Joe Gomez's expected return. Against it runs Tottenham's own arithmetic: nil from 2.94 expected goals per Squawka's Opta table, three shots from the front three against Everton to the back four's five, Solanke 63 minutes without an attempt. SQUAD_LOAD.depthRisk marks centre-forward, wide forward and left-back high, so a rested Liverpool XI is not obviously stronger than a rested Spurs one; the edge is Anfield, and a home side that has drawn its last four league games there badly needs a night that ends in a result. Bournemouth away follows on Sunday.",
  modelLine: null,
  sources: ["Sports Mole", "Spurs Web", "Football.London", "CBS Sports", "Squawka", "Opta Analyst", "Sky Sports", "This Is Anfield", "EFL"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-14T08:30:00Z",
  competition: "PL",
  played: 4,
  headline:
    "Monday, and with no league game since Saturday the numbers on this board hold while the argument around them turns to selection. The four-game Premier League sample stays at 6.00 expected goals for and 5.16 against, six scored and four conceded, all on Opta figures now that Squawka's gameweek-three table has replaced the Ipswich estimate, and the reading is unchanged: Liverpool are overperforming their chances rather than underperforming their luck, seventh for expected goals created on 4.97 and finishing 1.03 above it through three rounds. Only the Fulham afternoon, 1.13 from 14 shots to 0.71 from 10 per Opta, produced more chances than goals, and three of Iraola's four league games have ended level, four straight Anfield draws across two managers. The next data point is a cup tie against a Tottenham side that has scored nothing at all from 2.94, with both managers set to rotate, so Tuesday's numbers, when they land, will measure the benches more than the sides.",
  diagnosis: [
    {
      label: "Chance creation collapses without the pivot",
      detail: "Iraola said it was the first game under him in which his side struggled to create; the numbers agree, 1.13 expected goals and four big chances per FotMob, the best of them a header against the bar from a corner. Rousing The Kop counted the Gravenberch-Szoboszlai pivot winning two of ten first-half ground duels, Szoboszlai none of six, and Liverpool's control returned only when Mac Allister came on at 60. The creative supply, not the finishing, was the failure.",
      severity: "high",
      source: "Opta Analyst / FotMob via SI / Rousing The Kop",
    },
    {
      label: "Fast-break concession",
      detail: "Unchanged as the season's standing risk, and Saturday's one clear chance came from a variation on it: a short goal-kick to a marked midfielder, a turnover, a penalty appeal and a shot cleared off the line. Both Newcastle goals came from fast breaks, Opta count nine such goals conceded since the start of last season, most in the league, and Fulham ended with more touches in the Liverpool box, 24 to 18, than the hosts managed at the other end.",
      severity: "high",
      source: "Opta Analyst / The Independent",
    },
    {
      label: "The home draw, now a pattern",
      detail: "Four consecutive Premier League draws at Anfield, the first such run since November 2011 per Opta, and the first time in the club's history it has drawn both opening home league games of a season. The Forest draw a fortnight ago was a twice-from-behind comeback; Saturday was ninety minutes level against a side that arrived pointless, which is the difference between a habit and a problem. Iraola says the reasons are inside the pitch, not the ground.",
      severity: "high",
      source: "Opta Analyst / Liverpool FC",
    },
    {
      label: "The striker's isolation",
      detail: "Isak touched the ball 16 times in 90 minutes, the second-fewest for a Liverpool outfielder on record per the BBC, behind his own 14 against Forest; he dragged the game's first chance wide from Barcola's pass and glanced a stoppage-time header wide. Three goals in four league games is the return, but two of the four matches have left him starved, and Fulham's block was the kind he is supposed to punish.",
      severity: "medium",
      source: "BBC Sport / Rousing The Kop",
    },
    {
      label: "The right centre-back holds",
      detail: "Jacquet's goal-line clearance on 12 was the difference between a point and none; both ratings cards made him the best player on the pitch, an 8 from Rousing The Kop and an 8.1 on FotMob, and Fulham's counters were repeatedly broken by his recovery pace. Opta had him winning 18 of 25 league duels before this game. A clean sheet is the one thing the afternoon produced.",
      severity: "positive",
      source: "Rousing The Kop / FotMob via SI / Opta Analyst",
    },
  ],
  matches: [
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
    "Liverpool have drawn four consecutive Premier League games at Anfield for the first time since November 2011 under Kenny Dalglish, per Opta, and drew both of their first two home league games of a season for the first time in the club's history.",
    "Tottenham arrive at Anfield having scored nothing from 2.94 expected goals, per Squawka's Opta data, the largest shortfall between goals and chances in the Premier League; Coventry, beaten 5-0 by Brighton on Sunday, and Aston Villa were the only other sides yet to score.",
    "Through three gameweeks Liverpool had scored six goals from 4.97 expected, an overperformance of 1.03 and the seventh largest in the division, per Squawka's Opta-fed table; their chances created ranked seventh and the chances they conceded, 4.26, ranked eighth best.",
    "On Squawka's alternative table, where every match is settled by its rounded xG scoreline rather than its real one, Liverpool sat ninth after three rounds on four points, three places below their actual position, with the Ipswich win reading as a 1-1 draw.",
    "Liverpool are the most successful club in the League Cup with ten titles and enter the third round unbeaten in the competition since Tottenham's 2025 semi-final; a win on Tuesday would extend a record haul, per the EFL.",
  ],
  sources: ["Opta Analyst", "Squawka", "Liverpool FC", "BBC Sport", "Rousing The Kop", "Sofascore", "Premier League", "Sky Sports", "ESPN", "Football365"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-14T08:30:00Z",
  headline:
    "The board's numbers do not move on a Monday without a game, but its most important line just did: Joe Gomez is back in full training and, per Sports Mole's dawn bulletin, hopeful of a first appearance of the season on Tuesday, a major doubt rather than a certainty but the first time in seven weeks he has been framed as available. That matters because This Is Anfield expect Iraola to rest Van Dijk, Isak and Wirtz for the cup tie, the rotation Saturday's draw was supposed to allow before three changes were withdrawn inside an hour. A fourth senior centre-back is what makes resting the 35-year-old captain, still without contract talks scheduled before 2027, something other than a gamble. Chiesa and Leoni acquired October return dates in the same round-up. The squad is still closed until January, and the cup is where its thin edges get tested rather than reinforced.",
  minutesNote:
    "Premier League minutes are not published here yet. Four league games and one Champions League game have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "January at the earliest: 'a reasonable chance' of the last two Champions League league-phase games (Inter 19 Jan, Lens 27 Jan per This Is Anfield); Iraola confirms 'Hugo will go later' than the international break", note: "The absence Saturday underlined and Monday's round-up did not shorten. Sports Mole carries no timeline beyond the club's, and the January framing from Friday's press conference stands: 'a hope and a realistic chance that he could help us in January', with 'a big part of the rehab still to meet'. Isak remains the only fit senior nine until then, and Koumas the false-nine cover the cup may finally use.", source: "Liverpool FC / This Is Anfield / Sports Mole" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training in the September international break; Sports Mole pencils 14 October as an availability target", note: "A year on from the injury on debut, and now with a date attached: Sports Mole tips a mid-October return while Iraola's own line is more cautious, 'the plan is also to start training during the break, with the group'. Named in the Champions League squad, unused, and not part of Tuesday's calculation. His return is the one that would end the two-man centre-back rota for good.", source: "Liverpool FC / Sports Mole" },
    { name: "Conor Bradley", issue: "Knee", expected: "Sports Mole pencils Manchester United on 21 November as the earliest", note: "Still no natural right-back, still no club date beyond Iraola's 'probably Conor will go later'. Araujo has started there three straight games and the reporting now tips the switch to be made permanent; Frimpong is the cup alternative. Gomez, if he features Tuesday, is a third body who can cover the flank.", source: "Liverpool FC / Sports Mole" },
    { name: "Federico Chiesa", issue: "Lower back (originally muscle, Como friendly, August)", expected: "Back in training over the international break; Sports Mole pencils 11 October as an availability target", note: "The one on the unavailable list closest to the group. Left off the Champions League squad, so the autumn's European nights were never in reach, but Iraola expects him training around the break and Sports Mole reads a mid-October return, which would give a stretched front line a fifth forward.", source: "Liverpool FC / Sports Mole" },
  ],
  returning: [
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "In full training; a major doubt but hopeful of a first appearance of the season on Tuesday in the backline, per Sports Mole", note: "The morning's real news. Left out of Saturday's nine-man bench despite pre-match tips, Gomez is now framed by Monday's round-up as in contention for the cup tie seven weeks on, listed a major doubt rather than a lock. A fourth senior centre-back and a third right-back in one body is precisely what a tired, unrested defence needed, and precisely what lets Iraola rest Van Dijk if he dares.", source: "Sports Mole / Liverpool FC" },
    { name: "Cody Gakpo", issue: "Niggles in both adductors, no defined injury", status: "Fit: thirty minutes off the bench against Fulham; a candidate to lead the line in the cup", note: "The doubt resolved the quiet way a week ago is now a selection option: Sports Mole's preview floats Gakpo leading the attack on Tuesday with Isak rested. A goal and three assists in three league games per Opta are back in the pool, and the false-nine role Iraola has used him in before suits a night the club's only senior striker sits out.", source: "Liverpool FC / Sports Mole" },
    { name: "Bradley Barcola", issue: "Cramp on his first start; tired rather than injured, per Iraola", status: "Started against Fulham on the left, a first Premier League start; managed since with no pre-season", note: "Iraola said the club is 'building his physical condition' with games and that the four wingers will play both sides all season, so a cup-tie involvement is likely rather than a rest. Set up Isak's first-minute chance against Fulham, then faded; a 4 from Rousing The Kop, 6.6 on FotMob.", source: "Liverpool FC / Rousing The Kop / SI" },
    { name: "Milos Kerkez", issue: "Cramp against Atletico, withdrawn on 88", status: "On for Tsimikas at half-time on Saturday; the only senior left-back", note: "Tsimikas misplaced 11 of 31 passes and was withdrawn at the break; Kerkez came on to a 5 from Rousing The Kop and 'yet more dreadful crossing' by SI, whose verdict is that neither is currently up to Iraola's standard. The rotation the position was supposed to allow was shown on Saturday not to work, which sharpens the left-back call for the cup.", source: "SI / Rousing The Kop" },
    { name: "Wataru Endo", issue: "No injury; unused all season", status: "Set to make a first appearance of the season in the cup, likely at centre-back, per Sports Mole", note: "The promise Iraola made and Carragher doubted may be kept on Tuesday: Sports Mole's preview expects Endo to feature, probably as a makeshift centre-half if Gomez is not risked from the start. Fourth in the midfield queue and left off the European squad, the Carabao Cup is the only realistic stage he has.", source: "Sports Mole / Liverpool FC" },
  ],
  startersLastMatch: {
    match: "Liverpool 0-0 Fulham, 12 September (Premier League)",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Tsimikas", "Szoboszlai", "Gravenberch", "Munoz", "Wirtz", "Barcola", "Isak"],
    changes: "Three changes from the Atletico side: Tsimikas for Kerkez, Gravenberch for Mac Allister and Munoz for Ngumoha, with Barcola moving from the right to the left and Munoz taking the right. Kerkez replaced Tsimikas at half-time; Mac Allister (for Gravenberch) and Gakpo (for Munoz) came on at 60; Ngumoha (for Barcola) and Frimpong (for Araujo) at 72. Unused: Mamardashvili, Endo, Nyoni, Koumas.",
    source: "Liverpool FC / SI",
  },
  depthRisk: [
    { position: "Centre-back", level: "high", detail: "The department the whole edition turns on, and the one Monday improved: Van Dijk and Jacquet have played every minute of five straight games because there was no fourth senior body, and Gomez being framed as available for the cup is the first relief in seven weeks. It does not lower the risk yet, only names a way out of it. Leoni is pencilled for mid-October, Araujo is needed at right-back, and until Gomez actually plays, one injury still means Endo at centre-half in the league, which the cup may now preview." },
    { position: "Centre-forward", level: "high", detail: "Isak alone, and likely to be rested for the first time on Tuesday with Gakpo tipped as the false-nine cover. Sixteen touches against Fulham, the second fewest for a Liverpool outfielder on record per the BBC; three league goals in four while starting every game. Ekitike is out until the new year and Koumas has yet to start, so resting the one fit senior nine is a cup-only luxury the schedule finally allows." },
    { position: "Wide forward", level: "high", detail: "Whole again but worn: Gakpo, Barcola, Munoz and Ngumoha are the four for two flanks, Chiesa is out until October, and Munoz and Ngumoha both drew a 4 from Rousing The Kop in their Fulham outings. The cup is where the rotation lands, which is a test of the depth as much as a rest for it, and the reporting still says the position the club most wants to buy is a right winger who scores." },
    { position: "Left-back", level: "high", detail: "Unchanged and unresolved after Saturday: Tsimikas, a first start of the season, misplaced 11 of 31 passes and was hooked at the break, a 3 from Rousing The Kop; Kerkez replaced him without improving the crossing. Two senior left-backs and, per SI, neither currently up to the manager's standard. The cup tie offers a further look rather than a solution." },
    { position: "Central midfield", level: "medium", detail: "Sports Mole made the standing case on Monday, that the 'problem' midfield was never addressed: Gravenberch and Szoboszlai won two of ten first-half ground duels between them against Fulham, both rated 3, and the game settled only when Mac Allister, the one nobody drops, came on. Nyoni, seventeen, is tipped to start the cup; Endo, fourth in the queue and unused all season, may finally get minutes." },
    { position: "Right-back", level: "medium", detail: "Araujo's third straight start there against Fulham, solid if isolated by Robinson's overloads, a 6 and a 6.9; Frimpong on at 72 and the better of the late changes, a 6 and a 6.9, and the likelier cup starter. Bradley is out until late November; Gomez, if he features, is a third option who has played the position." },
  ],
  sources: ["Sports Mole", "Liverpool FC", "This Is Anfield", "BBC Sport", "SI", "FotMob", "Rousing The Kop", "Squawka", "Opta Analyst"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-14T08:30:00Z",
  played: 4,
  points: 6,
  pointsPerGame: 1.50,
  projectedPoints: 57,
  projectedFinish: "Conference League places on current pace",
  headline:
    "No game since Saturday, so the pace is exactly where it was: six points from four is 1.50 a game and a projected 57, the sort of number four matches can move by ten either way and should not yet be read as a forecast. What has not changed is the composition, and it is worth saying plainly. One win, three draws, and the two home fixtures the pace was meant to be built on, Forest and Fulham, are already spent. Seventh, level with Everton, a place behind Brentford on goal difference, with the European line three points up the table and the run of top-six opponents about to begin. Tuesday's cup tie sits outside all of this arithmetic, which is its own kind of relief: a route to Europe that does not depend on chasing points.",
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
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 6, difficulty: "hard" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 4, difficulty: "hard" },
    { date: "2026-11-01", opponent: "Arsenal", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-11-07", opponent: "Crystal Palace", home: false, competition: "PL", oppPosition: 16, difficulty: "easy" },
  ],
  runInVerdict:
    "The fixtures have not changed, only their menace has settled in. Bournemouth away on Sunday is the last league game outside the top half before the block that reads City, Brentford, Brighton, Arsenal, four top-six sides in four matches after Brighton's 5-0 climb. Win at the Vitality and Liverpool go into the City game on nine from five, a 1.80 pace and a projection back in the Europa band; draw a fourth and the projection sits in the mid-fifties with the autumn's hardest month ahead and only the unbeaten run to show. The cup tie is wedged in first, 72 hours after a game the side could not press in and with a half-changed team likely, so the honest read of Tuesday is that it decides nothing in this column and everything about the mood carried into Bournemouth.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "This Is Anfield", "BBC Sport"],
};
