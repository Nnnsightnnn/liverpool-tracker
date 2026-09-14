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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Mon Sep 14, evening - confirmed out of the XI by omission. Iraola named only one starter on Monday and it was the other goalkeeper: 'there are little doubts with Ali, he's proven, he's playing very well,' the manager said, before handing Tuesday to Mamardashvili. Five competitive games, every minute, one clean sheet on Saturday built on a recovered error and two saves, a 5 from Rousing The Kop against a 7.9 on FotMob. The Bournemouth trip on Sunday is his again.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Mon Sep 14, evening - named, and not by a preview. Iraola settled it himself at Monday's press conference: 'he's going to start tomorrow, yes.' A first appearance of the 2026-27 season, in the competition a deputy inherits by custom, and with an unusual endorsement attached, the manager volunteering that he had tried to sign the Georgian for Bournemouth before he came here. Andrew Madley referees with no VAR in this round, and the visitors have not scored a league goal all season.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Mon Sep 14, evening - the rest the manager did not have to spell out. Iraola named Mamardashvili and nothing else, but every post-briefing preview leaves the captain out, and with Gomez now confirmed available the case for a night off no longer rests on a hope. He has played every minute of all five competitive games at 35 because nobody else could. Behind it the longer question is untouched: no contract talks before 2027, no decision before April, a deal expiring that summer with a free transfer on the table.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Mon Sep 14, evening - available, in the manager's own word. 'Joe is training with the team and is available for tomorrow,' Iraola told reporters at the AXA on Monday. 'It's a matter of deciding how much he can play and what is the best thing to do.' That is the first indicative sentence about him since a muscle injury in the Sunderland friendly on 25 July. Rousing The Kop's post-briefing XI starts him at centre-back beside Endo; as one of the new vice-captains, he may take the armband if he does.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Mon Sep 14, evening - drawn out of the previews, which is its own verdict. Rousing The Kop's post-press-conference XI puts Tsimikas at left-back on Tuesday rather than Kerkez, three days after Tsimikas misplaced 11 of 31 passes and was withdrawn at half-time for him. SI's reading of the pair is that neither is currently up to Iraola's standard, and the Hungarian's own cameo drew a 5 and 'yet more dreadful crossing'. Two senior left-backs, and the cup offers a further look rather than a fix.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Mon Sep 14, evening - named on the out list again, and in the same breath as a small sign of life. Iraola confirmed on Monday that Bradley, along with Chiesa, Ekitike and Leoni, remains sidelined; the fuller briefing has him not close to training with the group but starting to touch a ball again, and it is still treated as a long-term absence from January's knee surgery. Sports Mole pencil Manchester United on 21 November as the earliest. Araujo has owned the right-back slot for three games in the interval.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Mon Sep 14, evening - restored to the right-back slot by the evening previews. Rousing The Kop expect Frimpong to start Tuesday and describe it as a chance to earn the position back, Araujo having played three games in seven days. Saturday: on for Araujo at 72, the better of the late changes, 'solid enough defensively', a 6 and a 6.9 on FotMob. A full ninety in a cup tie is the most game time he has been offered since the opening weeks.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Mon Sep 14, evening - still on the manager's out list, still the return that would settle the department. Iraola named Leoni among the four sidelined at Monday's briefing, a year on from the ACL he suffered on debut. The plan remains group training during the September international break, with Sports Mole pencilling 14 October as an availability target. Named in the Champions League squad, unused, and no part of Tuesday, which is why a teenage debutant is being discussed instead.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Mon Sep 14, evening - endorsed from an unexpected quarter. John Aldridge used his Liverpool Echo column on Monday to call Jacquet 'the real deal' and argue he is already a better player than Ibrahima Konate, citing the eight duels Sofascore credit him with winning in a game Aldridge otherwise thought largely awful. The goal-line clearance from Garcia kept the point, an 8 and man of the match from Rousing The Kop. Five starts in five, and now a candidate to be rested for the first time.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Mon Sep 14, evening - away in Spain, and the loan is doing its job. Ndukwe joined Levante on deadline day on a season-long loan with the Spanish club covering his wage, the point of the move being eligibility rather than development alone: born in Austria and short of the points a post-Brexit permit demands, he could not have played a competitive game here this season. Six foot six and nineteen, and Liverpool's standout defender against Monaco in pre-season.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Mon Sep 14, evening - the one exception every rotation makes. Rousing The Kop's post-briefing XI leaves Mac Allister out entirely, which would be a first, though most other reads keep him; the honest position is that a manager resting eight or nine names has to spare somebody and nobody agrees who. What is not in dispute is Saturday: on for Gravenberch at 60, the game settled from that moment, a 7 and 'undroppable' by Rousing The Kop. The Argentine who says the club will not renew him remains the midfielder it cannot plan without.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Mon Sep 14, evening - kept in, on the logic that somebody senior has to be. Rousing The Kop's Monday-evening XI puts Gravenberch alongside Nyoni and McConnell precisely because the other two are 19 and 22, and frames it as a chance to play his way back into form rather than a reward. The hour he had against Fulham does not argue for him: two of ten first-half ground duels won between him and Szoboszlai, a 3, and control arriving only when he was withdrawn.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Mon Sep 14, evening - left out of every cup XI published since the press conference. The Hungarian was one half of the pivot that has carried Monday's post-mortems, none of six first-half ground duels won against Fulham, a swipe at King that nearly conceded a penalty, a 3 from Rousing The Kop with SI's 6.8 kinder. Signed to 2031 and an ever-present until now; a rotation that reaches Van Dijk and Isak was always going to reach him, and 72 hours between games is the reason Iraola gave.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Mon Sep 14, evening - the moment, when it comes, will be at centre-back. Rousing The Kop's post-briefing XI starts Endo beside Gomez in defence rather than in midfield, which is the plainest statement yet of where the squad is thin: a 33-year-old holding midfielder is the fourth-choice centre-half, and behind him the alternative is an 18-year-old who has never played. Nought minutes this season, fourth in the midfield queue, left off the European squad. The cup is the only stage he has.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Mon Sep 14, evening - rested, and the vacancy is the interesting part. With Wirtz left out of every published cup XI, Rousing The Kop fill the ten with James McConnell, noting there is no natural understudy for the German in the building. Five competitive games without a goal or an assist, two shots the wrong side of the post against Fulham, a 4 from Rousing The Kop and a 7.4 on FotMob that blamed fatigue. Jermaine Pennant spent Monday arguing the missing deep passer is not his fault alone.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Mon Sep 14, evening - the closest thing to a certainty after the goalkeeper. Rousing The Kop call Nyoni the one near-lock of the changed midfield and frame Tuesday as his chance to cement a place rather than visit one, after a season of waiting that included an unused bench place on Saturday. Nineteen, and in a competition where this club has a long habit of discovering who comes next. The new contract is still unsigned per the weekend reporting.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Mon Sep 14, evening - a rest of his own, on the evening reads. Where the morning previews had Gakpo leading the line as a false nine, Rousing The Kop's post-briefing XI leaves him out altogether, reasoning that a player only just back from an adductor niggle should not be asked to start 72 hours after thirty minutes off the bench. Koumas is given the centre-forward role instead. A goal and three assists in three league games per Opta are in the pool either way.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Mon Sep 14, evening - spared at last, and every preview agrees on it. Isak is absent from all the published cup elevens, which makes Tuesday the first match of the season he does not start. Sixteen touches against Fulham, the second fewest for a Liverpool outfielder on record per the BBC; three league goals in four. Iraola's Monday explanation covers him better than most: a schedule of game, two days, game, and a manager still learning who can take it.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Mon Sep 14, evening - named among the four still out, and no closer. Iraola listed Ekitike with Bradley, Chiesa and Leoni on Monday, which is where the April Achilles rupture has left him all season. January remains the framing rather than a date, 'a reasonable chance he could help us', with the last two Champions League league-phase games the target per This Is Anfield. His absence is the reason the only senior striker has started everything, and the reason Tuesday hands the role to a 20-year-old.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Mon Sep 14, evening - handed the left wing by the evening previews. Rousing The Kop expect Ngumoha to start wide on Tuesday with Munoz on the opposite flank, arrived at largely by elimination: Barcola cannot start, Isak will not, Gakpo is only just back. Saturday's cameo, on for Barcola at 72, was poor enough to draw a 4, an overhit cross and a counter conceded, so this is a chance to answer that rather than repeat it.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Mon Sep 14, evening - confirmed sidelined by the manager, with a date holding. Iraola named Chiesa among the four out on Monday; the lower-back problem carried since the Como friendly is still expected to clear around the international break, with Sports Mole pencilling 11 October. Left off the Champions League squad, so the autumn's European nights were never available to him. A mid-October return would give a stretched front line a fifth forward it has missed since August.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Mon Sep 14, evening - the bench, at best, on a night the bench matters. With Mamardashvili confirmed as Tuesday's starter, the third goalkeeper's involvement is a place among the substitutes rather than anything more; he was not on Saturday's nine-man bench, which carried Mamardashvili alone. A settled and quiet role behind two senior goalkeepers, and one that will not be tested until a cup round somewhere further on.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Mon Sep 14, evening - a start on the right, by consensus. Rousing The Kop's post-briefing XI names Munoz among the front three with Koumas central and Ngumoha left, the second consecutive selection in which he has been the most natural of the wide options per SI. Saturday: a header against the bar on 22 with Leno getting a hand to it, withdrawn on the hour, a 4 from Rousing The Kop but a 6.7 from SI. Three appearances and one goal into a Liverpool career.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Mon Sep 14, evening - the clause, restored. Fabrizio Romano withdrew his podcast claim on Monday and confirmed the season-long loan from Barcelona does carry a purchase option: 55m euros, about 47m pounds, not obligatory and exercisable next summer. It arrives after three straight starts at right-back, a position that is not his, and with Barcelona unable to guarantee him a role. Rested for the cup in most reads, Frimpong taking the flank and Gomez the middle.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Mon Sep 14, evening - ruled out of the XI by the previews rather than by a physio. 'Bradley Barcola certainly won't be starting,' Rousing The Kop wrote on Monday evening, the reasoning being a player with no pre-season behind him who cramped on his first Premier League start. Iraola's own line is that the club is building his condition with games and that the four wingers will play both flanks all season, so a bench role on Tuesday is likelier than a night off entirely.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  generatedAt: "2026-09-14T22:30:00Z",
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
  broadcast: "ITV4 and Sky Sports (8pm)",
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
// Last refresh: 2026-09-14 (Monday evening, ~6pm ET) — re-fetched from ESPN's endpoint AFTER Monday night's game, and it
// moved without Liverpool kicking a ball. LEEDS BEAT NEWCASTLE 4-1 at Elland Road (Miley own goal 32, Bogle 34,
// Calvert-Lewin 45+1, Okafor 59, per NBC Sports), the last two sides with a game in hand, which lifts Daniel Farke's
// promoted team to THIRD on eight and drops Newcastle to twelfth. LIVERPOOL FALL TO EIGHTH on the same six points from
// four (1W 3D), behind Brentford and Everton on goals scored and goal difference, and the Champions League stripe now sits
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
  generatedAt: "2026-09-14T22:30:00Z",
  overview:
    "Monday night rearranged a table Liverpool had no part in, and the club that woke up seventh goes to bed eighth. Leeds beat Newcastle 4-1 at Elland Road in the last fixture of the round, the two sides with a game in hand meeting each other, and Daniel Farke's promoted team climbed into third while the visitors dropped to twelfth. Nothing about Liverpool changed except the company: still six points from four, still unbeaten on a win and three draws, now behind Brentford and Everton on goals and two places further from a Champions League stripe that Leeds and Hull, of all sides, currently occupy. Arsenal and Manchester City remain perfect on twelve and untroubled by any of it. Tottenham, who visit Anfield in the cup on Tuesday, are seventeenth and have still not scored a league goal; Bournemouth, the league fixture on Sunday, are fifteenth and winless. Nothing moves again until the weekend, which makes the week's only verdict a knockout one.",
  teams: {
    "Liverpool": "Eighth on six after Monday night pushed them down a place without a ball kicked, unbeaten on one win and three draws but behind Brentford and Everton on goals. The cup tie is the week's only football.",
    "Arsenal": "Joint top on twelve, four wins from four, ahead of City on goal difference. At Anfield on 1 November.",
    "Manchester City": "Level on twelve after Sunday's derby win with ten men, Foden sent off on 23 and Haaland's winner given on review. Visit Anfield on 11 October.",
    "Leeds": "Third on eight after a 4-1 rout of Newcastle at Elland Road, Miley's own goal and Bogle inside three minutes, Calvert-Lewin before the break and Okafor after it. The promoted side are unbeaten.",
    "Hull": "Fourth on eight, promoted and still unbeaten, holding a Champions League place nobody forecast in August.",
    "Brighton": "Fifth on seven and alone on the Europa line after Monday's reshuffle, the 5-0 at Coventry still the round's biggest win.",
    "Chelsea": "Sixth on seven, outside a European stripe on goal difference, level on points with Brighton above them.",
    "Brentford": "Seventh on six, above Liverpool on goals scored and unbeaten like them. Host Liverpool on 17 October.",
    "Newcastle": "Twelfth on five after conceding four at Elland Road, the game in hand spent and the goal difference turned negative in ninety minutes.",
    "Everton": "Ninth on six, level with Liverpool on points and goal difference and separated only by goals scored; goalless with Spurs on Saturday.",
    "Manchester United": "Thirteenth on four after the derby defeat, twice hitting the woodwork against ten men through Rashford and Mainoo.",
    "Bournemouth": "Fifteenth on three, winless from three draws and a defeat under a new manager; Liverpool visit the Vitality on Sunday, 20 September.",
    "Tottenham": "Seventeenth on two, four league games without a goal, a club first. At Anfield in the Carabao Cup on Tuesday at 8pm, De Zerbi rotating and without Tonali, Porro and Kulusevski.",
    "Fulham": "Eighteenth on one, the Anfield point still their only one; inside the relegation stripe.",
    "Coventry": "Bottom on nothing: four defeats, no goal scored, minus ten, and a red card for Awoniyi on Sunday.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "One Name, Freely Given.",
    byline: "Liverpool FC",
    dateline: "AXA Training Centre · 14 September",
    category: "Manager",
    body:
      "Managers guard team sheets the way card players guard hands, so the interesting thing about Monday lunchtime was how readily Andoni Iraola put one card face up. Giorgi Mamardashvili starts. There were no conditions attached and no hedging afterwards, only a small confession that explained the warmth: 'I told him we tried to sign him for Bournemouth before I came here.' Everything else he left open, which is not evasion so much as honesty about a squad he is fourteen weeks into knowing. He called the fixture list the worst scenario, game and two days and game again, and said he is still learning who withstands it. The rest of Tuesday's eleven is a question he has not finished asking himself.",
  },
  {
    n: "02",
    headline: "The Word Was Available.",
    byline: "Liverpool Echo / Empire of the Kop",
    dateline: "AXA Training Centre · 14 September",
    category: "Injuries",
    body:
      "Seven weeks of conditional tenses ended in a single indicative sentence. 'Joe is training with the team and is available for tomorrow,' Iraola said of Joe Gomez, and then, because nothing at this club is ever entirely settled, 'it's a matter of deciding how much he can play.' Gomez has not played since a muscle injury in a July friendly at Sunderland, and in the interval Virgil van Dijk and Jeremy Jacquet have played every minute of every match because the alternative was a converted midfielder. He is one of the new vice-captains; if he starts, the armband may travel with him. A fourth senior centre-back is not a signing. In a squad locked until January it is the nearest thing available.",
  },
  {
    n: "03",
    headline: "What De Zerbi Left At Home.",
    byline: "Sports Mole / Goal",
    dateline: "Hotspur Way · 14 September",
    category: "Football News",
    body:
      "The visitors' injury list rearranged itself on Monday and mostly got worse. Sandro Tonali, a hundred-million-pound midfielder, took a knock and stays behind; Pedro Porro and Dejan Kulusevski were already gone. Destiny Udogie comes back, which De Zerbi offered as the good news, and Micky van de Ven, written off in the weekend's previews, in fact started against Everton and is fit. The most pointed absence is voluntary: Richarlison, whose deadline-day escape to Vasco da Gama collapsed, is eligible and will not be involved, the manager declining even to elaborate. 'The situation is the same,' he said. A squad rebuilt for close to three hundred and fifty million pounds, and a forward who is simply no longer part of it.",
  },
  {
    n: "04",
    headline: "The Clause He Said Did Not Exist.",
    byline: "Fabrizio Romano via Empire of the Kop",
    dateline: "Anfield · 14 September",
    category: "Transfers",
    body:
      "Transfer reporting rarely files a correction, which is what made Monday's unusual. Fabrizio Romano had told a podcast audience that Liverpool's season-long loan for Ronald Araujo contained no option to buy; on Monday he withdrew it and confirmed the option is there, fifty-five million euros, about forty-seven million pounds, not obligatory, exercisable next summer. Araujo has spent three games at right-back, a position that is not his, and been among the better performers in a side that has drawn four of six. The club that spent past six hundred million pounds in sixteen months and still cannot name a fourth centre-back has, it turns out, already bought the right to fix that. It only has to decide whether to use it.",
  },
  {
    n: "05",
    headline: "Eighth, Without Kicking A Ball.",
    byline: "ESPN / NBC Sports",
    dateline: "Elland Road · 14 September",
    category: "Race for Europe",
    body:
      "There is a particular indignity in losing ground on a night off. Leeds and Newcastle, the two clubs still holding a game in hand, met on Monday and Leeds won 4-1: Lewis Miley turning one into his own net on thirty-two, Jayden Bogle two minutes later, Dominic Calvert-Lewin in stoppage time at the break, Noah Okafor after it. Daniel Farke's promoted side are third. Newcastle are twelfth. Liverpool, who did nothing at all, are eighth, six points from four, unbeaten and steadily overtaken, with Brentford and Everton ahead of them on goals scored. The Champions League places now contain Leeds and Hull. It is September, and none of it is a verdict, but the arithmetic is starting to notice.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-14T22:30:00Z",
  summary:
    "The team sheet nobody would name this morning acquired one certain line on Monday afternoon, and a second piece of good news besides. At the AXA Training Centre Andoni Iraola confirmed that Giorgi Mamardashvili starts in goal against Tottenham, a first appearance of the season for the deputy and a small story in itself given the manager admitted he tried to sign the Georgian for Bournemouth before he came here, and he upgraded Joe Gomez from hope to fact: 'Joe is training with the team and is available for tomorrow. It's a matter of deciding how much he can play.' The rest of the eleven he left deliberately open, but not the reasoning behind it, calling the schedule 'the worst scenario, game, two days, game, two days, game' and conceding he is still learning which of his players can survive it. Tottenham's picture moved the other way and against the weekend's reading: Sandro Tonali is out with a knock, Pedro Porro and Dejan Kulusevski remain unavailable, Richarlison is fit but not in De Zerbi's plans at all, while Destiny Udogie returns and Micky van de Ven, who started at Everton, is available. The table shifted too, without Liverpool playing: Leeds beat Newcastle 4-1 at Elland Road on Monday night to go third, and Liverpool slip to eighth on the same six points. There is no VAR in the third round and no extra time, so a level ninety goes straight to penalties.",
  keyTopics: [
    {
      title: "Iraola Names The One Certainty: Mamardashvili Starts, And The Manager Admits He Tried To Sign Him For Bournemouth (Liverpool FC / This Is Anfield, today)",
      detail:
        "Confirmed at Monday lunchtime's pre-match press conference, and the first hard fact in a week of predicted elevens. Asked about his goalkeepers, Iraola said there are 'little doubts with Ali, he's proven, he's playing very well', then added the line that settles Tuesday: 'I also rate Giorgi very highly. I know him from his years also in Spain. I told him we tried to sign him for Bournemouth before I came here. For me, he's a very good keeper and he's going to start tomorrow, yes.' It is Mamardashvili's first appearance of the 2026-27 season and the only starter the manager was willing to name, the cup being the competition a deputy inherits by custom.",
      category: "tactics",
    },
    {
      title: "'Available For Tomorrow': Gomez Upgraded From Doubt To Fact After Seven Weeks Out (Liverpool FC / Liverpool Echo / Empire of the Kop, today)",
      detail:
        "The morning's most useful bulletin hardened into the afternoon's confirmation. Where Sports Mole's dawn round-up had Gomez as a major doubt, Iraola told reporters at the AXA plainly: 'Joe is training with the team and is available for tomorrow. It's a matter of deciding how much he can play and what is the best thing to do.' It is his first availability since a muscle injury in the Sunderland friendly on 25 July, and it is the single change to the squad's arithmetic that matters, because a fourth senior centre-back is what turns resting the 35-year-old captain from a gamble into a decision. Empire of the Kop note he is one of Iraola's new vice-captains and could wear the armband if he starts.",
      category: "injuries",
    },
    {
      title: "'The Worst Scenario': Iraola On A Schedule Of Game, Two Days, Game, And Learning Who Can Survive It (Liverpool FC, today)",
      detail:
        "The fullest explanation yet of why the eleven will change, given on Monday and notable for how little it hides. 'I think it has to affect, definitely, because it's the third game. It's the worst scenario, it's game, two days, game, two days, game,' Iraola said, before the admission underneath it: 'We are in a process where I have to learn who is ready to play three or four games in a row every two or three days and who needs a rest so the performance level doesn't get affected. I think I have it in my mind quite clear with some of them but with others it's new even for them.' A manager fourteen weeks into the job, saying out loud that he does not yet know his own squad's limits.",
      category: "tactics",
    },
    {
      title: "Spurs Lose Tonali To A Knock And Leave Richarlison Behind Entirely; Udogie Returns, Van De Ven Fit (Liverpool FC / Sports Mole / Goal, today)",
      detail:
        "De Zerbi's own Monday briefing reversed several threads from the weekend's reporting. Sandro Tonali, a 100m-pound signing, picked up a knock and misses out; Pedro Porro is still unavailable with the muscle problem that kept him out at Everton, and Dejan Kulusevski remains sidelined. Destiny Udogie, absent on Saturday, is back. Richarlison, whose deadline-day move to Vasco da Gama collapsed, is eligible for the competition and will not play: 'Nothing has changed for the Carabao Cup or Premier League, the situation is the same. No.' And Micky van de Ven, listed out as recently as this morning, started the goalless draw with Everton and was named by De Zerbi among the centre-backs he is lucky to have.",
      category: "matches",
    },
    {
      title: "Liverpool Drop To Eighth As Leeds Hammer Newcastle 4-1 On Monday Night (ESPN / NBC Sports, today)",
      detail:
        "The one league result of the day involved neither Merseyside nor north London and cost Liverpool a place anyway. Leeds and Newcastle, the two sides still carrying a game in hand, met at Elland Road and Daniel Farke's promoted team won 4-1: a Lewis Miley own goal on 32, Jayden Bogle on 34, Dominic Calvert-Lewin in first-half stoppage time and Noah Okafor on 59. Leeds climb to third and into a Champions League stripe; Newcastle fall to twelfth with a negative goal difference. Liverpool, unbeaten and idle, are eighth on six points, behind Brentford and Everton on goals scored, with the top four now four places and two points away.",
      category: "matches",
    },
    {
      title: "No VAR, No Extra Time: The Third Round Goes Straight To Penalties If It Is Level (ESPN / EFL, today)",
      detail:
        "A detail worth knowing before kick-off and one that changes how a rotated side should play. ESPN's match preview confirms there is no VAR in the Carabao Cup third round, and that a tie level after ninety minutes proceeds directly to a shootout rather than extra time. Andrew Madley referees at Anfield with Wade Smith and Richard West on the lines and Andrew Kitchen as fourth official; kick-off is 8pm, free-to-air on ITV4 and also on Sky Sports Main Event and Sky Sports Football. For a Liverpool side that has drawn four consecutive league games at home, the absence of a safety net is not a neutral fact.",
      category: "matches",
    },
    {
      title: "Romano Corrects Himself: Liverpool Do Hold A 55m-Euro Buy Option On Araujo After All (Fabrizio Romano via Empire of the Kop / Barca Universal, today)",
      detail:
        "A rare public reversal on a clause that matters. Fabrizio Romano had claimed on a podcast that Liverpool's season-long loan for Ronald Araujo carried no purchase option; on Monday he walked it back and confirmed the deal does contain one, worth 55m euros, roughly 47m pounds, non-obligatory and exercisable next summer. Araujo has started the last three games at right-back and taken a 7.7 form rating in the tracker's own numbers, and the reporting reads the early returns as strong enough that Liverpool are already weighing it. For a club that spent past 600m pounds in sixteen months, a 47m centre-back who can play the flank is the cheapest defensive answer on the table.",
      category: "transfers",
    },
    {
      title: "Nine Changes, A Teenager At The Back, And A Possible Debut: How The Previews Read The Cup XI (Rousing The Kop, today)",
      detail:
        "Published at seven on Monday evening, after the press conference rather than before it, which makes it the freshest read on the night. Rousing The Kop expect nine changes: Mamardashvili in goal, Frimpong and Tsimikas as full-backs, Gomez starting at centre-back with Wataru Endo beside him, a midfield of Ryan Gravenberch, Trey Nyoni and James McConnell with McConnell pushed into the ten in Wirtz's absence, and a front three of Victor Munoz, Lewis Koumas and Rio Ngumoha. They also raise the possibility of an 18-year-old debut for the centre-back Mor Talla Ndiaye if Iraola declines both senior alternatives, which is how thin the department still is on the night it finally gets a fourth body back.",
      category: "tactics",
    },
    {
      title: "Aldridge On Jacquet: 'He Looks The Real Deal', And Already Better Than The Man He Replaced (Liverpool Echo / Empire of the Kop, today)",
      detail:
        "The one performance from Saturday that has aged well got its endorsement on Monday. John Aldridge used his Liverpool Echo column to argue that Jeremy Jacquet is already a better player than Ibrahima Konate, pointing at the goal-line clearance from Gonzalo Garcia and the eight duels Sofascore credit him with winning in a game Aldridge otherwise called largely awful. Five starts in five beside Van Dijk, an eight and man of the match from Rousing The Kop, and the awkward corollary: the defender everyone wants rested is also the defender nobody currently wants to leave out.",
      category: "general",
    },
    {
      title: "De Zerbi Spreads His Own Load, And Robertson Waits For A Familiar Ground (Liverpool FC / Spurs Web, today)",
      detail:
        "The visiting manager framed his rotation as abundance rather than necessity. 'The team selection is not difficult because I am lucky to have these players,' De Zerbi said, naming Lucas Bergvall and Mathys Tel as men who need minutes and insisting Ben Davies, Marcos Senesi and Tosin Adarabioyo are 'not less than' Van Hecke and Van de Ven. He would not commit on a senior debut for the academy forward Luca Williams-Barnett, saying only 'I don't know', and asked for the league's attitude in a cup: 'Many players need to play. Maybe not 90 minutes but 30 minutes. It is a real game.' Andy Robertson, nine years and 350-plus games a Liverpool player until the summer, could face them for the first time.",
      category: "general",
    },
  ],
  sources: [
    "Liverpool FC",
    "Liverpool Echo",
    "Empire of the Kop",
    "Rousing The Kop",
    "This Is Anfield",
    "Sports Mole",
    "Spurs Web",
    "ESPN",
    "NBC Sports",
    "Goal",
    "Barca Universal",
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
  generatedAt: "2026-09-14T22:30:00Z",
  opponent: "Tottenham",
  shortName: "TOT",
  fixture: {
    date: "2026-09-15T20:00:00",
    venue: "Anfield",
    home: true,
    competition: "EFL",
    broadcast: "ITV4 and Sky Sports (8pm)",
  },
  manager: "Roberto De Zerbi",
  formation: "4-2-3-1",
  leaguePosition: 17,
  summary:
    "Monday's briefing rewrote this dossier more than any Liverpool news did, and most of it went against the visitors. Sandro Tonali, the 100m-pound midfielder who started Saturday's goalless draw with Everton, took a knock and is out; Pedro Porro and Dejan Kulusevski remain unavailable; Richarlison is eligible for the competition and, by his manager's flat refusal to elaborate, is simply not part of the squad. Against that, Destiny Udogie returns, and Micky van de Ven, whom the weekend previews had written off, in fact played ninety minutes against Everton and was named by De Zerbi among the centre-backs he is 'lucky' to have. The standing fact is unchanged and still the central one: Tottenham have not scored a Premier League goal this season, four games, a club record, nil from 2.94 expected goals through gameweek three per Squawka's Opta table, the division's largest shortfall, and they sit seventeenth on two points. De Zerbi is rotating too, naming Lucas Bergvall and Mathys Tel as men who need minutes and insisting Ben Davies, Marcos Senesi and Tosin Adarabioyo are 'not less than' his first-choice pair, while declining to say whether the academy forward Luca Williams-Barnett gets a senior debut. Andy Robertson, nine years a Liverpool player until the summer, could face them for the first time.",
  shape:
    "De Zerbi builds patiently from the goalkeeper and wants the first line drawn in before the ball goes forward quickly, and a rotated side will attempt the same idea with less practised feet. Against Everton, Mateus Fernandes and Archie Gray took turns attacking the inside-right channel until the tempo died, the danger arriving wide and early rather than centrally and late; CBS counted 0.64 expected goals from fourteen shots, three of them from the forwards against five from the back four, and Jordan Pickford was not properly tested until Bergvall bent one toward the corner on eighty-nine. Out of possession they are markedly less porous than in either of the previous two seasons, and two clean sheets in four is real evidence rather than luck. With Tonali gone the screen in front of the back four is likely Bergvall and Rodrigo Bentancur, which is younger and more adventurous, and a bench-drawn team that presses in bursts rather than continuously is precisely the kind that leaves a transition on for a home side willing to run.",
  keyPlayers: [
    {
      name: "Dominic Solanke",
      role: "Centre-forward",
      threat: "Scored in the 5-1 over Charlton in this competition per Sky Sports and started the Everton draw, where CBS counted no shots and no shot assists in 63 minutes and eleven completed passes worth 0.01 expected assists. Tipped for back-to-back starts against his former club. The number that explains the drought.",
      source: "Sky Sports / CBS Sports / Spurs Web",
    },
    {
      name: "Lucas Bergvall",
      role: "Midfielder",
      threat: "Named by De Zerbi on Monday as one of the players who needs minutes, and the likeliest beneficiary of Tonali's knock. Produced Tottenham's only real test of Pickford on Saturday, an 89th-minute shot bent toward the bottom corner per CBS Sports, and scored the winner against Liverpool in the 2025 Carabao Cup semi-final first leg.",
      source: "CBS Sports / Liverpool FC",
    },
    {
      name: "Mathys Tel",
      role: "Forward",
      threat: "The other name De Zerbi volunteered on Monday. Benched against Everton for Marmoush and expected back in by Spurs Web, who read Marmoush as the one being rested this midweek. A direct left-sided runner at a Liverpool defence likely to feature a teenager, a 33-year-old midfielder or a centre-back playing his first football since July.",
      source: "Liverpool FC / Spurs Web",
    },
    {
      name: "Andy Robertson",
      role: "Left-back",
      threat: "Delivered the free-kick that produced Van Hecke's flick against Everton, the only Tottenham shot worth more than 0.1 expected goals on Saturday at 0.14, per CBS Sports. Left Liverpool in July as a free agent after nine years and 350-plus games; Liverpool's own preview says he could face them for the first time, though Udogie's return may hold him to the bench.",
      source: "CBS Sports / Liverpool FC",
    },
  ],
  predictedXI: [
    "Dubravka", "Adarabioyo", "Senesi", "Davies", "Udogie",
    "Bergvall", "Bentancur", "Gallagher", "Kudus", "Solanke", "Tel",
  ],
  absentees: [
    { name: "Sandro Tonali", issue: "Knock picked up after Saturday's draw with Everton; confirmed out by De Zerbi on Monday", status: "Out" },
    { name: "Pedro Porro", issue: "Muscle; missed the Everton draw and still not available", status: "Out" },
    { name: "Dejan Kulusevski", issue: "Knee; confirmed not available in Monday's briefing", status: "Out" },
    { name: "Richarlison", issue: "Fit and cup-eligible but out of De Zerbi's plans entirely: 'the situation is the same'", status: "Out" },
    { name: "Xavi Simons", issue: "ACL (April); no return anticipated before the new year", status: "Out" },
    { name: "Wilson Odobert", issue: "Knee (cruciate); no firm return timeline", status: "Out" },
    { name: "Mykhailo Mudryk", issue: "Ankle; pencilled to return early November per Sports Mole", status: "Out" },
    { name: "James Maddison", issue: "Back from a shoulder problem but minutes managed; Spurs Web expect Gallagher preferred", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-12", opponent: "Everton", home: true, score: "0-0", result: "D", note: "0.64 expected goals from 14 shots per CBS; Pickford untested until Bergvall on 89. A fourth league game without a goal, a club first. Booed off. Tonali started and finished, and took the knock that rules him out of Anfield." },
    { date: "2026-09-05", opponent: "Nott'm Forest", home: false, score: "0-0", result: "D", note: "A first point and a first clean sheet of the season at the City Ground; Udogie withdrawn after the hour." },
    { date: "2026-08-30", opponent: "Newcastle", home: true, score: "0-2", result: "L", note: "Beaten in the home opener; Savio left out with muscular fatigue after his cup debut." },
    { date: "2026-08-26", opponent: "Charlton", home: true, score: "5-1", result: "W", note: "Carabao Cup second round, and still the only win of their season. Moore, Solanke, Danso, Savio and Davies; Savio scored and assisted within eleven minutes of coming on." },
  ],
  liverpoolAngle:
    "Two half-teams meet, and the sharper question is which manager's fringe can do the thing his first eleven could not. Rousing The Kop's post-press-conference read expects nine Liverpool changes, with Joe Gomez starting his first football since July beside Wataru Endo, who has not played a minute all season, and raises an 18-year-old debut for Mor Talla Ndiaye as a live possibility behind them. That is the department SQUAD_LOAD.depthRisk still marks high, and it meets an opponent whose one convincing night this season was a 5-1 in which the goals came from everywhere. Set against it, FORM_TRENDS.diagnosis keeps fast-break concession as the season's highest-severity pattern, nine such goals conceded since the start of last season per Opta, the most in the league, and a bench-drawn back line pressing in bursts is exactly how those are conceded. The counterweight is Tottenham's own arithmetic: nil from 2.94 expected goals, three shots from the front three against Everton to the back four's five, Solanke sixty-three minutes without an attempt. There is no VAR in this round and no extra time, so a fourth consecutive goalless ninety at Anfield ends in penalties rather than in another point. Bournemouth away follows on Sunday.",
  modelLine: null,
  sources: ["Liverpool FC", "Sports Mole", "Spurs Web", "Goal", "CBS Sports", "Squawka", "Opta Analyst", "Sky Sports", "Rousing The Kop", "ESPN", "EFL"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-14T22:30:00Z",
  competition: "PL",
  played: 4,
  headline:
    "A league position was lost on Monday night without a single new number being added to this board, which is a useful reminder of what it does and does not measure. The four-game Premier League sample is still 6.00 expected goals for and 5.16 against, six scored and four conceded, Opta throughout now that Squawka's gameweek-three table has replaced the Ipswich estimate; Squawka's own figures have not been refreshed past that round, so nothing here moves until Liverpool play again in the league. The reading holds: this is a side overperforming its chances rather than underperforming its luck, six goals from 4.97 expected through three rounds, and only the Fulham afternoon, 1.13 from 14 shots to 0.71 from 10, produced meaningfully more chances than goals. Three of Iraola's four league games have ended level, four straight Anfield draws across two managers. Tuesday's cup tie adds a data point that belongs to neither total: a rotated Liverpool against a Tottenham side that has scored nothing at all from 2.94, with no VAR and penalties waiting if it stays level.",
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
    "There is no VAR in the Carabao Cup third round and no extra time: a tie level after ninety minutes goes directly to penalties, per ESPN's match preview. Liverpool have drawn their last four Premier League games at Anfield, so the competition has removed the outcome this side has become best at.",
  ],
  sources: ["Opta Analyst", "Squawka", "Liverpool FC", "BBC Sport", "Rousing The Kop", "Sofascore", "Premier League", "Sky Sports", "ESPN", "Football365"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-14T22:30:00Z",
  headline:
    "One line on this board changed tense on Monday afternoon and it is the one that governs everything else. Joe Gomez is no longer hopeful or doubtful: 'Joe is training with the team and is available for tomorrow,' Iraola said at the AXA, 'it's a matter of deciding how much he can play.' That is a fourth senior centre-back arriving seven weeks after the department was reduced to two, and it is the permission slip for a rotation the manager described in unusually plain terms, a schedule of game and two days and game that he called the worst scenario while admitting he is still learning which players survive it. Mamardashvili is the one starter he named. Bradley, Chiesa, Ekitike and Leoni remain out, with October targets on the middle two. The squad is closed until January, so Tuesday is a test of the thin edges rather than a reinforcement of them, and a teenage centre-back may yet be part of it.",
  minutesNote:
    "Premier League minutes are not published here yet. Four league games and one Champions League game have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "January at the earliest: 'a reasonable chance' of the last two Champions League league-phase games (Inter 19 Jan, Lens 27 Jan per This Is Anfield); Iraola confirms 'Hugo will go later' than the international break", note: "The absence Saturday underlined and Monday's round-up did not shorten. Sports Mole carries no timeline beyond the club's, and the January framing from Friday's press conference stands: 'a hope and a realistic chance that he could help us in January', with 'a big part of the rehab still to meet'. Isak remains the only fit senior nine until then, and Koumas the false-nine cover the cup may finally use.", source: "Liverpool FC / This Is Anfield / Sports Mole" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training in the September international break; Sports Mole pencils 14 October as an availability target", note: "A year on from the injury on debut, and now with a date attached: Sports Mole tips a mid-October return while Iraola's own line is more cautious, 'the plan is also to start training during the break, with the group'. Named in the Champions League squad, unused, and not part of Tuesday's calculation. His return is the one that would end the two-man centre-back rota for good.", source: "Liverpool FC / Sports Mole" },
    { name: "Conor Bradley", issue: "Knee", expected: "Sports Mole pencils Manchester United on 21 November as the earliest", note: "Still no natural right-back, still no club date beyond Iraola's 'probably Conor will go later'. Araujo has started there three straight games and the reporting now tips the switch to be made permanent; Frimpong is the cup alternative. Gomez, if he features Tuesday, is a third body who can cover the flank.", source: "Liverpool FC / Sports Mole" },
    { name: "Federico Chiesa", issue: "Lower back (originally muscle, Como friendly, August)", expected: "Back in training over the international break; Sports Mole pencils 11 October as an availability target", note: "The one on the unavailable list closest to the group. Left off the Champions League squad, so the autumn's European nights were never in reach, but Iraola expects him training around the break and Sports Mole reads a mid-October return, which would give a stretched front line a fifth forward.", source: "Liverpool FC / Sports Mole" },
  ],
  returning: [
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "Available: confirmed fit by Iraola on Monday, with only the length of his outing undecided", note: "Confirmed rather than hoped for. 'Joe is training with the team and is available for tomorrow,' the manager said at Monday's press conference, 'it's a matter of deciding how much he can play and what is the best thing to do.' Rousing The Kop's post-briefing preview starts him at centre-back alongside Endo. He is a fourth senior centre-back and a third right-back in one body, and one of Iraola's new vice-captains, so the armband may travel with him if he plays.", source: "Liverpool FC / Liverpool Echo / Rousing The Kop" },
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
    { position: "Centre-back", level: "high", detail: "Improved on Monday and still the department the edition turns on. Gomez is confirmed available rather than merely training, which ends seven weeks in which Van Dijk and Jacquet played every minute of every game because there was no fourth senior body. The risk stays high because the relief is one man returning from a July muscle injury with no match sharpness: Rousing The Kop's preview pairs him with Endo, a 33-year-old midfielder, and floats an 18-year-old debut for Mor Talla Ndiaye behind them. Leoni is pencilled for mid-October and Araujo is still needed at right-back." },
    { position: "Centre-forward", level: "high", detail: "Isak alone, and likely to be rested for the first time on Tuesday with Gakpo tipped as the false-nine cover. Sixteen touches against Fulham, the second fewest for a Liverpool outfielder on record per the BBC; three league goals in four while starting every game. Ekitike is out until the new year and Koumas has yet to start, so resting the one fit senior nine is a cup-only luxury the schedule finally allows." },
    { position: "Wide forward", level: "high", detail: "Whole again but worn: Gakpo, Barcola, Munoz and Ngumoha are the four for two flanks, Chiesa is out until October, and Munoz and Ngumoha both drew a 4 from Rousing The Kop in their Fulham outings. The cup is where the rotation lands, which is a test of the depth as much as a rest for it, and the reporting still says the position the club most wants to buy is a right winger who scores." },
    { position: "Left-back", level: "high", detail: "Unchanged and unresolved after Saturday: Tsimikas, a first start of the season, misplaced 11 of 31 passes and was hooked at the break, a 3 from Rousing The Kop; Kerkez replaced him without improving the crossing. Two senior left-backs and, per SI, neither currently up to the manager's standard. The cup tie offers a further look rather than a solution." },
    { position: "Central midfield", level: "medium", detail: "Sports Mole made the standing case on Monday, that the 'problem' midfield was never addressed: Gravenberch and Szoboszlai won two of ten first-half ground duels between them against Fulham, both rated 3, and the game settled only when Mac Allister, the one nobody drops, came on. Nyoni, seventeen, is tipped to start the cup; Endo, fourth in the queue and unused all season, may finally get minutes." },
    { position: "Right-back", level: "medium", detail: "Araujo's third straight start there against Fulham, solid if isolated by Robinson's overloads, a 6 and a 6.9; Frimpong on at 72 and the better of the late changes, a 6 and a 6.9, and the likelier cup starter. Bradley is out until late November; Gomez, if he features, is a third option who has played the position." },
  ],
  sources: ["Sports Mole", "Liverpool FC", "This Is Anfield", "BBC Sport", "SI", "FotMob", "Rousing The Kop", "Squawka", "Opta Analyst"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-14T22:30:00Z",
  played: 4,
  points: 6,
  pointsPerGame: 1.50,
  projectedPoints: 57,
  projectedFinish: "Conference League places on current pace",
  headline:
    "The pace is untouched and the position is not, which is the peculiar arithmetic of a Monday night spent watching. Six points from four remains 1.50 a game and a projected 57, a number four matches can still move by ten in either direction and which nobody should yet read as a forecast. What moved is the company: Leeds beat Newcastle 4-1 and Liverpool are eighth, behind Brentford and Everton on goals scored, with the Champions League stripe now four places up rather than three. The composition of the six points is the part worth saying plainly. One win, three draws, and the two home fixtures the pace was meant to be built on, Forest and Fulham, are already spent. Tuesday's cup tie sits outside this column entirely, which is its own kind of relief: a route to Europe that does not require chasing four points a week.",
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
    { date: "2026-11-07", opponent: "Crystal Palace", home: false, competition: "PL", oppPosition: 16, difficulty: "easy" },
  ],
  runInVerdict:
    "The fixtures are the same six and Monday night reshuffled who they represent. Bournemouth away on Sunday is still the last league game against a bottom-half side before October's block, which now reads City at Anfield, Brentford away, Brighton at home and Arsenal at home, three of them current top-five opponents and Brentford, seventh and unbeaten, no easier for having slipped a place. Win at the Vitality and Liverpool go into the City game on nine from five, a 1.80 pace and a projection back in the Europa band; draw a fourth and the projection sits in the mid-fifties with the season's hardest month ahead and only the unbeaten line to show for September. The cup is wedged in first, with a half-changed team and no extra time if it finishes level, so Tuesday decides nothing in this column and a good deal about the mood carried to the Vitality.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "This Is Anfield", "BBC Sport"],
};
