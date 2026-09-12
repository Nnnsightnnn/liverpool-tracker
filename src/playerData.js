// ─── Liverpool FC Player Data (2026-27 Season · Updated 7 September 2026 (evening)) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Sat Sep 12, matchday morning - Saturday's goalkeeper, and at home for the international break rather than on a plane. The FA's 8,000-pound fine for the tunnel misconduct after the Forest draw is settled with no ban, and Ancelotti left him out of Brazil's squad to 'prioritise the younger ones', so he stays on Merseyside through the window. Beaten once by Llorente on Wednesday, the Alvarez save the one that mattered. He starts against Fulham at three; Mamardashvili is the likelier keeper for Tuesday's cup tie", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sat Sep 12, matchday morning - the deputy waits for Tuesday. With Alisson fined, dropped by Brazil and kept in England through the break, the No. 1 is rested at the cup rather than the league, so Mamardashvili does not expect Fulham. The Carabao Cup tie against Tottenham at Anfield on Tuesday, 8pm, is his likeliest start of the month; he has not played since the summer tour", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Sat Sep 12, matchday morning - the captain starts a run of three home games in seven days, with the rest he cannot yet take getting nearer as Gomez nears a first bench. Opta gave the partnership its number on Friday: Jacquet, beside him all four games, has won 18 of 25 duels, second in the league only to Tarkowski. Ninety minutes again in Wednesday's 2-1 over Atletico, a 5 from Rousing The Kop for loose early passes, beaten once as a pair by Llorente. Football Insider's rumour that he is 'tempted' by 2027 offers stays unconfirmed; the April 2025 contract is the settled fact", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Sat Sep 12, matchday morning - matchday, and the reporting expects him on the bench at last. 3 Added Minutes has Gomez, in full training since Wednesday after July's Sunderland friendly injury, in line for a first squad of the season against Fulham, seven weeks on, though Sports Mole's list still files him out; Tuesday's cup tie is the likelier first minutes. He was not in Wednesday's European squad. A fit Gomez means a fourth senior centre-back and a third right-back option in one body, which is why the return matters more than one bench place", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Sat Sep 12, matchday morning - cleared and starting, the cramp of Wednesday now three days behind him. He came off on 88 against Atletico and tied the tightness to Iraola's pressing, an issue flagged in pre-season; Sports Mole's XI would rest him for Tsimikas with Tuesday's cup tie in mind, which nothing the manager said supports. Beaten by Llorente for the opener, a 3 from Rousing The Kop, then won the ball for the equaliser. With no senior deputy, Bobb and Robinson are his afternoon", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Sat Sep 12, matchday morning - a spectator again, and in no hurry to be rushed while Araujo excels in his shirt. The left knee ligament damage from January still carries no date; he stays in the Champions League squad, and Sports Mole pencils Manchester United on 21 November as the earliest. Two starts, a clean sheet and a backheel assist from the man deputising mean the department can wait", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Sat Sep 12, matchday morning - an impact option off the bench once more, with the starting right-back berth settled on Araujo. Iraola said on Friday the loanee has done very well in a position that is 'probably not his main', so Frimpong's route is the second half or the cup. He came on for Barcola at 59 on Wednesday, played the right, and had the ball in the net at 89 before the flag; a 5 from Rousing The Kop, better than of late. Tuesday's tie is his likelier ninety", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Sat Sep 12, matchday morning - another match to watch, the plan unchanged and the pair ahead of him settled. Leoni stays on Iraola's timetable, group training during the international break with no matchday attached, in the European squad but unused on Wednesday when Van Dijk and Jacquet went the ninety. His own reporting still guesses Manchester City on 11 October as the earliest", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat Sep 12, matchday morning - the number of the week is his: Opta's 18 of 25 Premier League duels won, 72 per cent, bettered only by Tarkowski among players with twenty or more, and fifth in the league for line-breaking passes. Jacquet has started all four competitive games beside Van Dijk and was the better of the two on his Champions League debut, a 7 from both fan sites. Gomez nears a first bench behind him; Garcia and King are Saturday's test", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Sat Sep 12, matchday morning - out on loan, as the club always meant him to be. Ndukwe joined Levante on a season-long loan on deadline day, the Spanish club covering his wage. Six foot six and nineteen, Liverpool's standout defender against Monaco in pre-season, but born in Austria and short of the points a post-Brexit permit demands, he could not play a competitive fixture here this season. A year in La Liga is the plan", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat Sep 12, matchday morning - the man Sports Mole says keeps Gravenberch on the bench, and the scorer of Wednesday's winner from twenty yards. Iraola's first Champions League night was won on his left foot in the 50th, his name chorused as he came off; Rousing The Kop's man of the match on an 8, no player winning more duels than his five per Opta. He said on Tuesday the club will not renew him; the argument for a deal has not stopped since. Starts against Fulham", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Sat Sep 12, matchday morning - three games benched, and the subject of a Sports Mole feature asking why. It argues Iraola trusts Mac Allister's positioning over the Dutchman's physical tools after a 2025-26 the site calls his worst at the club, and that the six-year March deal makes him awkward to leave out for long; a 4 off the bench on Wednesday did not help. SI had pencilled him to start Fulham, but the pivot that scored both goals against Atletico makes that a rotation call, with Tuesday's cup tie likelier", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Sat Sep 12, matchday morning - half the pivot Sports Mole says keeps Gravenberch out, and the scorer of Wednesday's equaliser, rolled past Oblak on 40 after Araujo's flick through his own legs. An 8.5 at the top of The 4th Official's ratings; Opta counts ten Champions League goal involvements since the start of last season, double any Liverpool team-mate. Signed to 2031, started every game. Fulham at three, a fourth straight two-goal game the club-first Opta is watching for", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Sat Sep 12, matchday morning - a league-only squad option, ineligible for Europe and behind the fit pivot at home. Left off the 25-man Champions League list with McConnell preferred, Endo remains the emergency centre-half in the league and a candidate to start Tuesday's cup tie against Tottenham if Iraola rotates. Fulham on Saturday is a squad place at most", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Sat Sep 12, matchday morning - the creator Fulham's mid-block is built to frustrate and he was signed to unpick. Isak vouched for Barcola, the man Wirtz set clean through on Wednesday for a finish rolled wide, so the pass has the same target and still no assist against it. He ran the 2-1 for a spell, pressed and won the ball high in a way Rousing The Kop called underrated; a 7 from both sites, his own shot saved by Oblak. Four games now without a goal or assist", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Sat Sep 12, matchday morning - a name in Sports Mole's Gravenberch feature as a possible claimant on a midfield place while the Dutchman sits, but not for a 3pm league game. Unused on the European bench on Wednesday beside McConnell and Danns, his new contract still unsigned per the weekend reporting. The Carabao Cup tie against Tottenham on Tuesday is his likeliest minutes", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "doubtful", injuryNote: "Sat Sep 12, matchday morning - the one selection question into kick-off, and the verdict is still not public. Friday afternoon's session was to decide Saturday or Tuesday; no club update had emerged by Saturday morning, and Sports Mole keeps him doubtful with the adductor niggles while SI's matchday XI simply starts Munoz. A goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes, so the front three's shape hangs on him; Munoz or Ngumoha starts on the left if he waits for the cup tie", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Sat Sep 12, matchday morning - the striker who can make a small piece of history at three o'clock. A goal against Fulham would be three straight league games scoring for the first time since January 2025, per Opta, when the run reached eight, and the Ipswich brace already equalled his injury-hit 2025-26 tally. Iraola said he 'looks free' and will not judge him on goals alone; 332 minutes into a season begun whole, with Ekitike a January hope and no other senior nine fit, the line is his. A first Anfield goal in red is still owed", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Sat Sep 12, matchday morning - the man who is not here, with a month now attached at last. Iraola said on Friday there is 'a reasonable chance' Ekitike can help in the last two Champions League league-phase games, Inter on 19 January and Lens on 27 January by This Is Anfield's reading, the reason he was registered in Europe; a big part of the Achilles rehab is still to come. It is the first month the club has named for April's rupture, Sports Mole's late-November pencilling now optimistic. Until then Isak is the only fit senior nine", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Sat Sep 12, matchday morning - the youngest man to score at Anfield, and he did it here against Fulham last April; he told the club this week he wants 'another special day'. Whether it comes from the start depends on Gakpo's unresolved adductor: 3 Added Minutes' XI starts Ngumoha on the left, Sports Mole starts him too. He spoke of the squad's togetherness, of Iraola wanting him direct, and called Isak and Barcola two of the best in the world. His first European start on Wednesday ended in cramp on the hour", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Sat Sep 12, matchday morning - out until the break, and watching a third game from outside the squad. The back problem left him off the Champions League list and keeps him out of Fulham, Tuesday's cup tie and Bournemouth; Iraola has him rejoining group training during the September international break. Rush The Kop guesses Manchester City on 11 October as the earliest return", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Sat Sep 12, matchday morning - third keeper, and the goalkeeping news of the week happened to the first: Alisson fined 8,000 pounds and left out by Brazil, which keeps the No. 1 at home through the break. Woodman was an unused European substitute on Wednesday; Tuesday's cup tie against Tottenham is the one fixture this month that might use a deputy", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Sat Sep 12, matchday morning - a matchday XI candidate for the first time, with SI's Saturday lineup starting him if Gakpo does not make it. Sports Mole would use him on the right and rest Barcola; 3 Added Minutes keeps Barcola and leaves Munoz among the options for the left. Off the bench on Wednesday he tested Oblak after dancing through a challenge, a 6 from The 4th Official. The left flank, or the cup tie on Tuesday, is his most likely route to minutes", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Sat Sep 12, matchday morning - the shirt is his, and Warnock told TEAMtalk on Friday the right-back move is permanent, Jacquet inside beside Van Dijk. Iraola said the real adjustment was the language before the position, that the move has helped 'a little bit mentally' after years at Barcelona, and that right-back 'probably is not his main position' though he has done very well in it. Two starts there, a clean sheet at Ipswich, an 8 and the backheel assist against Atletico; Bobb or Berge is Saturday's assignment", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Sat Sep 12, matchday morning - cleared, and vouched for by the man he plays beside: Isak called him 'a big signing for us' this week, a great player who will make the team better. Iraola tied Wednesday's cramp to a player who 'hasn't had a proper pre-season' and said those with less preparation are not yet at their best. Sports Mole would rest him for Munoz; 3 Added Minutes starts him on the right. First start against Atletico, two clear chances missed, off at 59; Fulham would be a third involvement in nine days", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  src: "/assets/cover/2026-09-09-mac-allister-strike.svg",
  alt: "Editorial plate: a floodlit Anfield night, a lone midfielder in red mid-strike twenty yards out, the ball a streak toward the top corner, the Kop a wall of red and light behind the goal.",
  focus: "Liverpool 2-1 Atletico Madrid: Mac Allister's left-footed drive from twenty yards wins Iraola's first Champions League night a day after he said the club will not renew him, Szoboszlai having levelled Llorente's opener",
  credit: "Plate · Daily edition",
  generatedAt: "2026-09-12T08:30:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Morning pass (Sat 12 September): MATCHDAY. Fulham at Anfield today at 3pm; no match or ruling-out
  // since Wednesday's Atletico win, table byte-identical from ESPN. Lead rotated off Friday evening's
  // Ekitike-January anchor onto the fixture itself: Liverpool sixth and unbeaten chasing a first home
  // league win of Iraola's tenure and a third win in eight days against pointless, nineteenth Fulham,
  // Iraola wanting a fast start ('the team has goals in it'), Isak eyeing a third straight league game,
  // Ngumoha's 'another special day' interview, the Anfield three-draw run and Arbeloa's homecoming
  // beneath. Gakpo the lone doubt into matchday, Barcola and Kerkez cleared, Gomez in line for a first
  // bench. A matchday preview is not a photographable moment under STEP 7.5, so no Track 2 request; the
  // Mac Allister strike plate is carried and generatedAt re-stamped (COVER-00001).
  // Evening pass (Fri 11 September, 6pm ET / 11pm BST): no match since Wednesday, table byte-identical from ESPN.
  // The lead moved to the one new fact from Friday's briefing: Iraola put a January date, of sorts, on Ekitike's
  // Achilles ('a reasonable chance' of the last two Champions League league-phase games, Inter 19 Jan and Lens
  // 27 Jan per This Is Anfield; 'a hope and a realistic chance that he could help us in January'). Gakpo's
  // afternoon session produced no published verdict by the evening. Beneath it: Arbeloa's 'send a message'
  // (Evening Standard) with Affengruber fit to start, Iraola's full Q&A (Fulham 'lost their three games by one
  // goal'), Isak's club interview (332 minutes, 'keep this rhythm'), Opta's pre-match notes (exactly two goals
  // four times running would be a club first; Jacquet 18 of 25 duels) and the festive fixture changes. A press
  // conference is not a photographable moment under STEP 7.5, so no Track 2 request; the Mac Allister strike
  // plate is carried and generatedAt re-stamped (COVER-00001).
  // Evening pass (Fri 11 September): no match since Wednesday, table byte-identical from ESPN. The lead
  // moved at the noon press conference: Iraola pushed the Gakpo call to Friday afternoon's session ('we will
  // try today and see if he is ready for tomorrow or if we need to wait until the next one') and cleared
  // Barcola ('no injury'); beneath it Arbeloa reported no fresh Fulham injuries amid unrest reports (Kevin's
  // 'no speak, no hear, no see'), Alisson was fined £8,000 by the FA and left out by Brazil, Warnock tipped
  // Araujo for a permanent right-back role, and Gravenberch's third straight benching drew a Sports Mole
  // feature. A deferred fitness test is not a photographable moment under STEP 7.5, so no Track 2 request;
  // the Mac Allister strike plate is carried and generatedAt re-stamped (COVER-00001).
  // Morning pass (Fri 11 September): matchday-eve, Fulham at Anfield tomorrow at 3pm. No match and no
  // Liverpool ruling-out since Wednesday's Atletico win, table byte-identical from ESPN. Lead rotated off
  // Thursday's fitness-update anchor onto the fixture itself: Liverpool one win from eighth to third-straight
  // territory against pointless, nineteenth Fulham, with Gakpo the lone team-news doubt ('I don't know. I hope
  // so, but I don't know', Iraola) and Barcola and Kerkez cleared. A matchday-eve build-up is not a
  // photographable moment under STEP 7.5, so no Track 2 request; the Mac Allister strike plate is carried
  // and generatedAt re-stamped (COVER-00001).
  // Morning pass (Thu 10 September): no match and no Liverpool ruling-out since Wednesday, table
  // byte-identical from ESPN. Lead rotated off the evening's Mac Allister-winner anchor onto the
  // freshest confirmed item, Iraola's Thursday fitness update (Barcola and Kerkez cleared as tired,
  // Gakpo an adductor doubt) ahead of Fulham, with the pressing-behind-the-cramps angle (Kerkez),
  // January links (Ait-Nouri, Wharton) and the Mac Allister-comments follow-on beneath. A fitness
  // update is not a photographable moment under STEP 7.5, so no Track 2 request; the Mac Allister
  // strike plate is carried and generatedAt re-stamped (COVER-00001).
  // Evening pass (Wed 9 September): a match was played. Liverpool 2-1 Atletico Madrid at Anfield, the Champions
  // League opener and Iraola's first match in the competition as a manager: Llorente 17 (Alvarez the assist,
  // Kerkez beaten), Szoboszlai 40 (Araujo's backheel flick), Mac Allister 50 (left foot, twenty yards, a day
  // after saying the club will not renew him). Opta: 1.68 xG from 14 shots to 0.81 from 9. Barcola, a first
  // start on the right, off at 59 with cramp ('we are kind of rushing him', Iraola); Ngumoha started on the
  // left and cramped too; Gakpo left out of the squad as a precaution; Frimpong had a late third disallowed.
  // Simeone started Alvarez after saying he would not and played a five, which Iraola said surprised him.
  // The result leads every surface. Next: Fulham, Anfield, Saturday 3pm, not televised in the UK; NEXT_MATCH
  // rolled forward and the OPPOSITION dossier rebuilt for Arbeloa's pointless side. A thunderbolt at the Kop
  // end IS a photographable moment under STEP 7.5, so a Track 1 plate was generated (the strike, no text)
  // and the Track 2 brief below is the open request for Antigravity (COVER-00001).
  // Morning pass (Wed 9 September): matchday. Atletico at Anfield tonight, 8pm, Iraola's first Champions League
  // match. No game and no Liverpool ruling-out since Friday, table byte-identical from ESPN. Lead rotated off
  // the evening's Mac Allister-contract anchor onto the matchday itself: the Opta and SI previews landing the
  // team news (Barcola tipped for a first start, Gakpo in form and shifted right), and the two live splits,
  // right-back (Opta prefers Frimpong, SI keeps Araujo) and Atletico's nine (Simeone says Alvarez will not
  // start; SI's matchday XI recalls him, Opta keeps Lee). A matchday preview is not a photographable moment
  // under STEP 7.5, so no Track 2 request; plate carried and generatedAt re-stamped (COVER-00001).
  // Evening pass (Tue 8 September): no match, no Liverpool ruling-out, table byte-identical from ESPN. The lead
  // moved at the 1pm press conference: Mac Allister said the club is 'not in a position' to renew him, that he is
  // 'very, very sad', that 'there were options to leave this summer' and that he has not spoken to Iraola about it;
  // Iraola said there is 'still a lot of time'. Beneath it, Gakpo missed the afternoon session with muscle
  // tightness (a precaution, per Joyce) while Gomez trained fully for the first time in a month; Iraola said
  // Barcola is 'ready to play more minutes'; Simeone said Alvarez will not start; Opta's model gives Liverpool 53%;
  // the club announced a £300m Turkish Airlines shirt deal from 2027-28. A press-conference admission is not a
  // photographable moment under STEP 7.5, so no Track 2 request; the Hughes plate carries over, generatedAt re-stamped.
  // Evening pass (Sat 5 September): Liverpool confirmed on Saturday afternoon that Richard Hughes has stepped
  // down as sporting director, Al-Hilal his expected destination. Track 1 plate 2026-09-05-hughes-exit.svg.
  // Evening pass (Fri 4 September): Ipswich 0-2 Liverpool, Isak 6' and 9', Track 1 plate 2026-09-04-isak-brace.svg.
  brief: {
    leadStory:
      "Liverpool beat Atletico Madrid 2-1 at Anfield on Wednesday night in the Champions League opener, Andoni Iraola's first match in the competition as a manager and his first win over Diego Simeone at the fifth attempt. Marcos Llorente put Atletico ahead in the 17th minute, a fifth goal at Anfield in three visits, after Julian Alvarez, whom Simeone had said would not start, split the defence; Dominik Szoboszlai levelled five minutes before half-time from Ronald Araujo's backheeled flick, and Alexis Mac Allister won it in the 50th with a left-footed drive from twenty yards, a day after saying he was 'very, very sad' that the club will not offer him a new contract. Opta had Liverpool 1.68 expected goals from 14 shots to Atletico's 0.81 from nine. Bradley Barcola, a first start on the right, missed two clear chances and went off at 59 with cramp; Rio Ngumoha started on the left; Cody Gakpo was left out as a precaution. Iraola said Atletico's back five surprised him and that he takes the blame for the start. Fulham, pointless and nineteenth, visit Anfield at 3pm on Saturday.",
    subject: "Alexis Mac Allister, twenty yards out at the Kop end, body coiled through a left-footed strike, the ball a blur toward the top corner, Jan Oblak diving, the Kop rising behind the goal under floodlights",
    prompt: "Cinematic wide still, 16:9, 1600x900, no text, no logos, no legible lettering. A midfielder in an all-red kit caught at the instant of a left-footed strike from outside the penalty area, body twisted through the shot, the ball a streak toward the top corner, a goalkeeper in dark colours at full stretch, a steep bank of red-clad supporters rising behind the goal under white floodlights, September night sky above the stand roof, shallow depth of field, photojournalistic, Getty-style sports photography, motion blur in the crowd, restrained colour grade with deep navy shadows and Liverpool red highlights.",
    aspectRatio: "landscape",
    slug: "mac-allister-strike",
  },
};


// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Fulham",
  shortName: "FUL",
  home: true,
  date: "2026-09-12T15:00:00",
  competition: "PL",
  venue: "Anfield",
  broadcast: "Not televised in the UK (3pm)",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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
// Last refresh: 2026-09-11 (Friday evening, 6pm ET) — re-fetched from ESPN's endpoint on the eve of Fulham and
// byte-identical to every table since Wednesday's Atletico win: the Champions League does not touch it and no Premier League
// game has been played since Sunday. Manchester City and Arsenal perfect on nine; Hull third on seven; Chelsea
// fourth on six; Brentford, Liverpool, Newcastle, Everton and Leeds all on five, Liverpool sixth on plus two.
// Fulham (Anfield, Saturday 3pm) still pointless with Coventry and Tottenham in the relegation stripe;
// Bournemouth (away, the 20th) fifteenth on two.
export const STANDINGS = [
  { pos: 1, team: "Manchester City", p: 3, w: 3, d: 0, l: 0, gd: 5, pts: 9, qualification: "UCL" },
  { pos: 2, team: "Arsenal", p: 3, w: 3, d: 0, l: 0, gd: 5, pts: 9, qualification: "UCL" },
  { pos: 3, team: "Hull", p: 3, w: 2, d: 1, l: 0, gd: 3, pts: 7, qualification: "UCL" },
  { pos: 4, team: "Chelsea", p: 3, w: 2, d: 0, l: 1, gd: 1, pts: 6, qualification: "UCL" },
  { pos: 5, team: "Brentford", p: 3, w: 1, d: 2, l: 0, gd: 3, pts: 5, qualification: "UEL" },
  { pos: 6, team: "Liverpool", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5, highlight: true },
  { pos: 7, team: "Newcastle", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5 },
  { pos: 8, team: "Everton", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5 },
  { pos: 9, team: "Leeds", p: 3, w: 1, d: 2, l: 0, gd: 1, pts: 5 },
  { pos: 10, team: "Brighton", p: 3, w: 1, d: 1, l: 1, gd: 3, pts: 4 },
  { pos: 11, team: "Manchester United", p: 3, w: 1, d: 1, l: 1, gd: 1, pts: 4 },
  { pos: 12, team: "Sunderland", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4 },
  { pos: 13, team: "Crystal Palace", p: 3, w: 1, d: 0, l: 2, gd: -4, pts: 3 },
  { pos: 14, team: "Ipswich", p: 3, w: 1, d: 0, l: 2, gd: -4, pts: 3 },
  { pos: 15, team: "Bournemouth", p: 3, w: 0, d: 2, l: 1, gd: -1, pts: 2 },
  { pos: 16, team: "Nott'm Forest", p: 3, w: 0, d: 2, l: 1, gd: -1, pts: 2 },
  { pos: 17, team: "Aston Villa", p: 3, w: 0, d: 1, l: 2, gd: -5, pts: 1 },
  { pos: 18, team: "Tottenham", p: 3, w: 0, d: 1, l: 2, gd: -5, pts: 1, qualification: "REL" },
  { pos: 19, team: "Fulham", p: 3, w: 0, d: 0, l: 3, gd: -3, pts: 0, qualification: "REL" },
  { pos: 20, team: "Coventry", p: 3, w: 0, d: 0, l: 3, gd: -5, pts: 0, qualification: "REL" },
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
  matchweek: 3,
  generatedAt: "2026-09-12T08:30:00Z",
  overview:
    "Matchweek four begins with the table exactly as the last round of fixtures left it, every side on three games and a knot of five clubs level on five points that goals scored and goal difference are left to separate. Liverpool sit sixth inside it, unbeaten, and three o'clock at Anfield is the first chance to break out: beat Fulham, nineteenth and pointless, and the Reds go provisionally third on eight, above Chelsea and Hull, before Chelsea host Hull and Newcastle, Everton, Leeds and Brentford play out the weekend and reset the order. Above the knot Manchester City and Arsenal are perfect on nine, and promoted Hull are the story of the month at third on seven with a first real test at Stamford Bridge on Saturday. Below it Tottenham, eighteenth, visit Anfield in the Carabao Cup on Tuesday, and Bournemouth, fifteenth and winless, host on the 20th. At the foot Fulham and Coventry are the two pointless sides, Fulham beaten three times by a single goal apiece and yet to leave the relegation stripe under Alvaro Arbeloa.",
  teams: {
    "Liverpool": "Sixth on five, unbeaten, level with three others on points. Fulham at 3pm is the first chance to leave the five-point knot; a win lifts the Reds provisionally to third, and a fourth straight Anfield league draw would be a first since November 2011 per Opta.",
    "Manchester City": "Top on nine, ahead of Arsenal on goals scored alone. Visit Anfield on 11 October.",
    "Arsenal": "Second on nine, unbeaten and the only side to have beaten Chelsea. At Anfield on 1 November.",
    "Hull": "Third on seven, promoted and unbeaten, the row nobody forecast. Chelsea away on Saturday is the first hard examination of it.",
    "Chelsea": "Fourth on six, the total Liverpool would pass by beating Fulham. Host Hull at 3pm on Saturday.",
    "Brentford": "Fifth on five, a goal of difference above Liverpool and wearing ESPN's Europa stripe for it. Host Liverpool on 17 October.",
    "Newcastle": "Seventh on five, level with Liverpool on points and goal difference, behind on goals scored.",
    "Bournemouth": "Fifteenth on two and winless; Liverpool visit the Vitality on Sunday 20 September.",
    "Tottenham": "Eighteenth on one, in the relegation stripe, and at Anfield in the Carabao Cup on Tuesday, three days after Fulham leave it.",
    "Fulham": "Nineteenth, pointless, three defeats by a single goal. Alvaro Arbeloa returns to Anfield, where he played 66 league games, for a first time back as a coach; one away league win in eleven in 2026.",
    "Coventry": "Bottom, pointless, the only side yet to score, and by Opta's account unlucky to leave the Etihad with nothing.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "One Win From The Knot.",
    byline: "This Is Anfield / Yahoo Sports",
    dateline: "Anfield · 12 September",
    category: "Football News",
    body:
      "Everything about Saturday is arithmetic waiting to be settled. Liverpool are sixth, unbeaten, one of five clubs on five points, and have not yet won a league game at their own ground this season, three draws into a home run older than the manager. Beat a Fulham side pointless after three and they go provisionally third, a third win inside eight days after Ipswich and Atletico. Iraola spent Friday insisting the goals are there. 'In all the games we've been dangerous, we've created chances,' he said, 'we scored two goals, we could have scored more.' The visitors are nineteenth and have lost three by a single goal. Three o'clock, no cameras, and a home win that has started to feel owed.",
  },
  {
    n: "02",
    headline: "Another Special Day.",
    byline: "Liverpool FC / Rousing The Kop",
    dateline: "AXA Training Centre · 12 September",
    category: "Football News",
    body:
      "Rio Ngumoha is eighteen and already has a sentence to his name: the youngest player ever to score at Anfield, which he did last April, in a 2-0 win over the side that visits again on Saturday. He would like, he told the club this week, another special day. He talked about a togetherness the coaching staff work to instal, about wanting to do something different this season, about learning to play minutes away from his natural side of the pitch. He called Isak and Barcola two of the best players in the world. Iraola wants him direct, at a defender quicker, a ball into the box, a shot away. The teenager sounded like a man in no hurry and in a great one at once.",
  },
  {
    n: "03",
    headline: "Twenty Months, And Counting.",
    byline: "SI / CBS Sports",
    dateline: "Anfield · 12 September",
    category: "Football News",
    body:
      "Alexander Isak arrives at the one fixture on the calendar most likely to keep a striker's run alive. He has scored in his last two league games, the Ipswich brace enough to equal a whole injury-wrecked season, and a goal on Saturday would make it three in a row for the first time since January 2025, when it ran to eight. Fulham have conceded in every match and kept no clean sheet, which is the sort of defence a No. 9 remembers. With Ekitike a January hope and no other senior centre-forward fit, the load is his alone, 332 minutes in and no complaint offered. A first Anfield goal in red is the smaller record still outstanding.",
  },
  {
    n: "04",
    headline: "The Old Boy, Back As The Enemy.",
    byline: "Liverpool FC / BBC Sport",
    dateline: "Anfield · 12 September",
    category: "Manager",
    body:
      "Alvaro Arbeloa played 66 league games in this stadium and won a fair few of them; on Saturday he walks back in as a head coach for the first time, in charge of the team everyone expects to lose. His reunion is with Iraola, a countryman who once chased the same Spain shirt. 'We were fighting more or less for the same position,' Iraola said, generously, 'but he was more successful in that he played more games than me.' The colder number belongs to Opta: former Liverpool players who have managed against the club in the Premier League are nought from five, Ince, Pellegrino, Gerrard. Arbeloa, pointless, makes six. Homecomings are rarely kind here.",
  },
  {
    n: "05",
    headline: "The Draw Anfield Cannot Shake.",
    byline: "Opta / Dimers",
    dateline: "Anfield · 12 September",
    category: "Tactics",
    body:
      "There is one statistic the home crowd would like buried by five o'clock. Liverpool have drawn each of their last three league games at Anfield, the longest home winless run in the competition since the shut-gate spring of 2021, and a fourth would be a first since November 2011. Everything else argues against it: one prediction model makes Saturday about 62 per cent Liverpool, another closer to seventy, and Fulham have won a single away league game all calendar year. The reading of the afternoon is the collision between a number that says the draw is due and a gulf that says it cannot be. Iraola's answer, offered all week, is to start faster and settle it early.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-12T08:30:00Z",
  summary:
    "Saturday, and for once the day's biggest story is the fixture itself: Liverpool, sixth and unbeaten on five points, host a pointless Fulham at three o'clock, with Andoni Iraola chasing a first home league win of his tenure and a third victory in eight days. The manager, whose side have come from behind in three of four, has asked for a faster start and insists the team 'has goals in it', having scored exactly twice in every game so far. Alexander Isak, leading the line with Hugo Ekitike a January hope, can score in a third straight league game for the first time in twenty months against the division's leakiest defence, while Rio Ngumoha, the youngest man to score at Anfield, did it here against Fulham last April and wants 'another special day'. Cody Gakpo is the one team-news doubt, an adductor niggle unresolved into matchday, with Barcola and Kerkez cleared and Joe Gomez in line for a first bench of the season. Fulham, nineteenth and beaten three times by a single goal, bring Alvaro Arbeloa back to the club he played 66 league games for; the prediction models make Liverpool heavy favourites, and a fourth successive Anfield league draw would be a first since November 2011. Tottenham follow in the Carabao Cup on Tuesday.",
  keyTopics: [
    {
      title: "Matchday At Anfield: Iraola Chases A First Home League Win, And A Third In Eight Days, Against Pointless Fulham (This Is Anfield / Yahoo Sports, today)",
      detail:
        "Three o'clock on Saturday, and the frame is simple. Liverpool are sixth and unbeaten, one win from breaking the five-point knot, and have not won a league game at Anfield yet this season, three draws deep in a home run that predates Iraola. He has made an unbeaten start and beaten Atletico in midweek; a Fulham side pointless after three would be a third win in eight days. 'I think the team has goals in it,' he said on Friday. 'In all the games we've been dangerous, we've created chances, we scored two goals, we could have scored more.' Fulham are nineteenth, beaten three times by a single goal.",
      category: "matches",
    },
    {
      title: "Twenty Months: Isak Can Score In Three Straight League Games For The First Time Since January 2025, Against The League's Leakiest Defence (This Is Anfield / SI / CBS Sports, today)",
      detail:
        "The individual story of the afternoon. Isak, who scored twice at Ipswich to equal his entire injury-hit 2025-26 league tally, can score in a third consecutive Premier League match for the first time since January 2025, when the run reached eight, per Opta. Fulham have kept no clean sheet and conceded in every game; This Is Anfield, SI and CBS all frame the visitors' defence as the encouragement. With Ekitike now a January hope and no other senior nine fit, Isak leads the line again; a first Anfield goal in a Liverpool shirt is still owed. Iraola said on Friday he will not judge him on goals alone.",
      category: "general",
    },
    {
      title: "Ngumoha Wants 'Another Special Day': The Youngest To Score At Anfield, Here Against Fulham Last April, On Togetherness And 'Two Of The Best In The World' (Liverpool FC / Rousing The Kop, today)",
      detail:
        "The club's Saturday-morning interview with the 18-year-old, who became the youngest player to score at Anfield in a 2-0 win over Fulham last April and is 'targeting another key contribution' against the same visitors. He spoke about a squad togetherness the staff, Iraola, Elphick, Cooper and De la Torre, work to instal, about wanting to do 'something special' this season, and about navigating minutes outside his natural position. Rousing The Kop pulled his line that Liverpool have two new players 'among the best in the world', Isak and Barcola. Iraola, he said, wants him direct: get at a man quicker, put a ball in the box, get a shot off.",
      category: "general",
    },
    {
      title: "Team News: Gakpo's Adductor Still Unresolved Into Matchday, Barcola And Kerkez Cleared, Munoz The Fallback (Sports Mole / SI, today)",
      detail:
        "The one open question at kick-off is the left. Gakpo, who did not train on Thursday and was tested in Friday afternoon's session, remains a doubt with an adductor niggle, and no verdict had emerged by Saturday morning; SI's matchday XI simply starts Victor Munoz, with Ngumoha the other option if Gakpo waits for Tuesday's cup tie. Barcola, withdrawn with cramp against Atletico, and Kerkez, off on 88 with the same, are both cleared as tired rather than hurt. Four are confirmed out, Ekitike, Bradley, Leoni and Chiesa, with up to eight first-teamers out or doubtful across the two team-news rounds.",
      category: "matches",
    },
    {
      title: "The Anfield Question: Three League Draws Running At Home, And The Models Still Make Liverpool Heavy Favourites (Opta / Dimers, today)",
      detail:
        "Liverpool have drawn their last three top-flight games at Anfield, per Opta, the longest home league winless run since the empty spring of 2021; a fourth in a row would be the first since November 2011. Set against that is the gulf in form and quality: one prediction model quoted on Saturday makes it about 62 per cent Liverpool, 21 per cent draw, 17 per cent Fulham, another goes nearer 70-17-13, and Fulham have won one of eleven away league games in 2026. Reported, not predicted; but the numbers say the draw run should end at three.",
      category: "matches",
    },
    {
      title: "Arbeloa Comes Home: A First Return To Anfield As A Coach, To The Club He Played 66 League Games For, And Ex-Reds Are Nought From Five In The Seat (Liverpool FC / BBC Sport, today)",
      detail:
        "Alvaro Arbeloa, two and a half years an Anfield player, returns on Saturday for a first time back as a head coach, a reunion with Iraola, against whom he once competed for the same Spain place. 'We were fighting more or less for the same position,' Iraola said, 'but I think he was more successful in that he played more games than me.' Opta's line is less sentimental: former Liverpool players managing against the club in the Premier League have lost all five meetings, Ince once, Pellegrino and Gerrard twice each, and Arbeloa, pointless after three, makes it a sixth attempt.",
      category: "matches",
    },
    {
      title: "'I Want To Impose Ourselves From The Beginning': Iraola On Ending The Slow Starts After Three Comebacks In Four (Yahoo Sports / LiveScore, today)",
      detail:
        "The tactical thread from Friday's briefing, carried into matchday. Iraola wants a fast start on Saturday to avoid a fourth game spent chasing, after his side conceded first in three of his opening four and came from behind against Newcastle, Forest and Atletico. 'I want to impose ourselves from the beginning,' he said, arguing games 'look much more comfortable' with an early goal and that the second halves have been the better ones. Against a Fulham mid-block built to sit and break, the first twenty minutes are the ones his own reading of the season keeps returning to.",
      category: "tactics",
    },
    {
      title: "Fulham's Threat Runs Down The Flanks: Bobb, King And Robinson The Danger For A Side That Made 3.13 xG In Defeat To Palace (Squawka / Sky Sports, today)",
      detail:
        "Arbeloa's Fulham are not toothless, only leaky. Sky recorded 3.13 expected goals in the 3-2 home loss to Crystal Palace that sent them into this game, and the danger is wide: Oscar Bobb, 22 dribbles and 18 key passes since his January move from City per Squawka, cuts in from the right, Antonee Robinson overlaps hard from the left, and Josh King, two goals in three, drops off Gonzalo Garcia between the lines. Kerkez, beaten for Llorente's opener on Wednesday, is the man in Bobb's path; the collision is with Liverpool's own slow starts.",
      category: "tactics",
    },
    {
      title: "Gomez Nears A First Bench Seven Weeks On, Easing A Centre-Back And Right-Back Load That Was A Crisis A Fortnight Ago (3 Added Minutes / Liverpool Echo, today)",
      detail:
        "The quieter squad story. Joe Gomez, in full training since Wednesday after the muscle injury in July's Sunderland friendly, is in line for a first matchday squad of the season against Fulham, seven weeks on, per 3 Added Minutes, with the Tottenham cup tie on Tuesday the likelier first minutes. He gives Iraola a fourth senior centre-back behind Van Dijk and Jacquet, who have played every minute, and a third right-back option behind Araujo, whom the manager called a centre-back excelling out of position. Two months ago the right of the defence had one fit body.",
      category: "injuries",
    },
    {
      title: "Anfield, 3pm: Not Televised In The UK, Peacock In The US, And A Walton Breck Road Closure For Supporters (Liverpool FC, today)",
      detail:
        "The practical notes for matchday. Liverpool against Fulham kicks off at three o'clock and falls inside the traditional Saturday 3pm blackout, so it is not broadcast live on television in the United Kingdom; in the United States it is on Peacock and NBCSN. The club repeated its Walton Breck Road closure advice for supporters heading to the ground. Tom Bramall referees. It is the first of three matches in seven days, Fulham on Saturday, Tottenham in the Carabao Cup on Tuesday and Bournemouth away the following Sunday.",
      category: "general",
    },
  ],
  sources: [
    "Liverpool FC",
    "This Is Anfield",
    "SI",
    "CBS Sports",
    "Yahoo Sports",
    "Sports Mole",
    "BBC Sport",
    "Rousing The Kop",
    "Squawka",
    "Opta",
    "Dimers",
    "3 Added Minutes",
    "Liverpool Echo",
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
  generatedAt: "2026-09-12T08:30:00Z",
  opponent: "Fulham",
  shortName: "FUL",
  fixture: {
    date: "2026-09-12T15:00:00",
    venue: "Anfield",
    home: true,
    competition: "PL",
    broadcast: "Not televised in the UK (3pm)",
  },
  manager: "Álvaro Arbeloa",
  formation: "4-2-3-1",
  leaguePosition: 19,
  summary:
    "Matchday, and the week's question about Alvaro Arbeloa's dressing room gives way to the simpler one of whether his pointless side can hold out at Anfield. Fulham arrive nineteenth, beaten three times by a single goal each, booed off Craven Cottage after leading Crystal Palace twice and losing 3-2, and yet, by Iraola's Friday reading and their own underlying numbers, better than a bottom-two team: sixty-something per cent of the ball across the three defeats, 3.13 expected goals in the Palace loss on Sky's count, technically able players undone by what they concede. Arbeloa told the Evening Standard on Friday that Saturday is where a message gets sent and named deadline-day centre-back David Affengruber fit to start; his own homecoming, 66 league games an Anfield player, is a first return as a coach. This is a new project rather than an old one failing: Marco Silva left in the summer, Arbeloa arrived from Real Madrid's coaching ranks on a three-year deal, the board spending on his Madrid connections, Gonzalo Garcia for a record-equalling 34m pounds, Cesar Palacios alongside him, Shea Charles from Southampton for 26m, with Diop and Lukic sold to Ipswich. Chelsea scored after 31 seconds on the opening Monday and won 3-2; Sunderland took it 1-0 through a 75th-minute Isidor goal; Palace turned two Fulham leads into a Mitchell double and a Chilwell winner. Only twice before, in 1951-52 and 2020-21, have Fulham opened a top-flight season with three defeats, and both ended in relegation. Cairney and De Fougerolles, both knees, are out; the club's stats page adds that Fulham have won one of eleven away league games in 2026 and that ex-Liverpool managers are nought from five against the Reds.",
  shape:
    "Where Fulham hurt you is on the flanks, not through the middle: Arbeloa's side build patiently from the back in a 4-2-3-1 with Shea Charles and Alex Iwobi screening, and come alive when the flanks break, Oscar Bobb's burst to the byline made King's opener against Palace, and Antonee Robinson, 47 tackles in the league last season per Squawka, overlaps hard from left-back. Josh King plays as the ten and drops off Garcia to link. Out of possession it is a mid-block that presses when the ball enters central areas, and the problem, three games in, is what happens once it is breached: two leads thrown away against Palace, a goal conceded inside a minute against Chelsea, and a defence that has kept no clean sheet.",
  keyPlayers: [
    {
      name: "Josh King",
      role: "No. 10",
      threat: "Two goals in three league games, one against Chelsea on the opening night and the 11th-minute opener against Palace, per Sky Sports and ESPN; Sky called him outstanding once again at Craven Cottage and his dummy on the left made the Palacios goal. The one Fulham player Liverpool's pivot must track between the lines.",
      source: "Sky Sports / ESPN",
    },
    {
      name: "Gonzalo García",
      role: "Centre-forward",
      threat: "The £34m record-equalling signing from Real Madrid, eight goals for Madrid in all competitions last season per Squawka, scored against Chelsea on his league debut. Denied by Henderson before the Palacios goal on Saturday, then failed to clear the ball for Mitchell's second.",
      source: "Squawka / Sky Sports",
    },
    {
      name: "Oscar Bobb",
      role: "Right winger",
      threat: "22 successful dribbles and 18 key passes after his January move from Manchester City, per Squawka, who name him Fulham's primary creator; his run to the byline produced King's opener against Palace. Kerkez, marked down for the Llorente goal on Wednesday, is the man in his path.",
      source: "Squawka / Sky Sports",
    },
    {
      name: "César Palacios",
      role: "Attacking midfielder",
      threat: "Followed Arbeloa from Real Madrid this summer and scored his first Fulham goal, the 42nd-minute restoring of the lead against Palace, per Sky Sports, before being replaced on 62.",
      source: "Sky Sports / Squawka",
    },
  ],
  predictedXI: [
    "Leno", "Castagne", "Andersen", "Bassey", "Robinson",
    "Berge", "Charles", "Iwobi", "King", "Palacios", "García",
  ],
  absentees: [
    { name: "Tom Cairney", issue: "Knee", status: "Out" },
    { name: "Luc De Fougerolles", issue: "Knee", status: "Out" },
  ],
  recentForm: [
    { date: "2026-09-05", opponent: "Crystal Palace", home: true, score: "2-3", result: "L", note: "King (11) and Palacios (42) gave Fulham the lead twice; Mitchell (35, 54) and Chilwell (77) turned it. Sky recorded Fulham's expected goals at 3.13. Booed off." },
    { date: "2026-08-30", opponent: "Sunderland", home: false, score: "0-1", result: "L", note: "Beaten by Wilson Isidor's 75th-minute goal from the bench at the Stadium of Light." },
    { date: "2026-08-24", opponent: "Chelsea", home: true, score: "2-3", result: "L", note: "Pedro after 31 seconds, then Palmer and Rogers; King and Garcia replied. Arbeloa's first match, the opening Monday night of the season." },
  ],
  liverpoolAngle:
    "The reading of the afternoon is a collision between form and a Liverpool habit. Fulham have lost all three by a single goal, kept sixty-something per cent of the ball and been beaten by what happens when they lose it; Arbeloa has spent the week, by his own account, on controlling the transition. That is aimed squarely at Liverpool's two highest-severity patterns in FORM_TRENDS.diagnosis, conceding first and the fast-break concession: Iraola conceded on Friday that his side are 'not starting the games too well' and that he wants to impose them from the beginning, and a side told to sit in a medium block and break is built to punish the slow start and the pass through the seam that Llorente exploited on Wednesday. Their threat runs wide, Bobb cutting in from the right, Robinson overlapping from the left, King dropping off Garcia between the lines, into Kerkez, who was beaten for the Llorente goal but is cleared and starts; SQUAD_LOAD.depthRisk still marks the wide-forward department high, with Gakpo's adductor unresolved into matchday and Munoz the fallback. The other reading is the gulf: no Fulham clean sheet, one away win in eleven this year, prediction models at roughly 62 to 70 per cent Liverpool, against a Reds side that has scored exactly twice in every game, has Isak on three in three chasing a fourth, and has Jacquet winning 18 of 25 duels behind it. The predicted XI is the Friday-into-Saturday consensus, Bassey and Berge into the Palace side, Affengruber the fit alternative at centre-back. Tom Bramall referees. Three o'clock, no television, and a fourth straight Anfield league draw would be the first since 2011.",
  modelLine: { source: "Dimers / prediction models", liverpool: 62, draw: 21, opponent: 17, note: "A prediction model quoted on Saturday makes it about 62 per cent Liverpool, 21 per cent draw, 17 per cent Fulham; a second model cited by Topend Sports goes nearer 70-17-13. Reported, not a betting market presented as a forecast." },
  sources: ["Evening Standard", "BBC Sport", "PA", "Sports Mole", "3 Added Minutes", "Sky Sports", "Squawka", "ESPN", "Liverpool FC", "Opta Analyst"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-12T08:30:00Z",
  competition: "PL",
  played: 3,
  headline:
    "Three games in, the pattern the results column hides is a row of twos: Liverpool have scored exactly twice in every match this season, league and Europe, and a fourth straight league two against Fulham on Saturday would be a club first per Opta. The other end is where Iraola keeps looking. His side have conceded first in three of four and come from behind three times; 'we are not starting the games too well,' he said, and he wants to impose the team from the beginning rather than chase a fourth game. The league sample is small, 5.00 expected goals for and 4.46 against on mixed sources, both Newcastle goals and Wednesday's opener from runs in behind; against that, Opta's 1.68 to 0.81 over Atletico was the first win earned on chances rather than in spite of them, and Isak's xG per shot has climbed from 0.16 to 0.25. Fulham made 3.13 expected goals in losing to Palace and have kept no clean sheet, which is the invitation; the models make Liverpool heavy favourites, which is the expectation.",
  diagnosis: [
    {
      label: "Conceding first, again",
      detail: "Four games, three times behind, and Iraola said it himself on Wednesday: three comebacks in four. Newcastle scored first, Forest scored first, Atletico scored first through Llorente on 17. The cause on Wednesday was a shape Liverpool had not prepared for, by the manager's admission, and a runner beating Kerkez in behind; the comebacks are a virtue the side would rather not need.",
      severity: "high",
      source: "Hayters TV / Opta Analyst",
    },
    {
      label: "Fast-break concession",
      detail: "Both Newcastle goals came from fast breaks, Opta count nine conceded from such situations since the start of last season, most in the league, and Wednesday's opener was a pass through the seam behind a high line. The ninety minutes after it were the cleanest of the season, one Alvarez shot from 25 yards forced a save and little else, but the pattern has not gone.",
      severity: "high",
      source: "Opta Analyst / The Independent",
    },
    {
      label: "Chances, at last, from open play",
      detail: "1.68 expected goals from 14 shots per Opta, with Barcola twice through on Oblak, Isak shooting inside 16 seconds, Wirtz forcing a save and Frimpong scoring a disallowed third. Against Ipswich the total was 0.66. One European night does not fix a league problem, but it is the first match in which the chance creation matched the possession.",
      severity: "positive",
      source: "Opta Analyst",
    },
    {
      label: "Midfield goals from distance",
      detail: "Both Wednesday goals were scored by the double pivot, Szoboszlai from inside the box and Mac Allister from twenty yards; Opta notes five of the Argentine's 20 Liverpool goals have come from outside the area, second only to Szoboszlai's 12 since 2023. With Wirtz still without a league goal contribution, the pivot is carrying the scoring load the ten was signed for.",
      severity: "medium",
      source: "Opta Analyst",
    },
    {
      label: "The right side holds",
      detail: "Araujo's second start at right-back drew an 8 from Rousing The Kop and produced the assist for Szoboszlai; against Ipswich he won nine duels from ten. The department that had one fit body a fortnight ago now has a first choice playing well, with Frimpong an impact substitute who scored a disallowed goal on Wednesday.",
      severity: "positive",
      source: "Rousing The Kop / FotMob via SI",
    },
  ],
  matches: [
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
      xgFor: 0.66,
      xgAgainst: 0.73,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 10,
      pending: true,
      verdict: "Won on two Isak shots in the sixth and ninth minutes, both from Gakpo through-balls, then held. Out-created across the ninety on FotMob's pre-shot figures, 0.73 to 0.66, 14 shots to 10, though Liverpool had seven on target to five; Sofascore's post-shot model reverses it, 1.70 expected goals on target to 0.47, with 59 per cent possession, Isak at 0.21 xG and 0.33 xGOT for his two goals and Gakpo at 0.40 expected assists. A first lead and a first clean sheet of the season. Opta's match tools are published on the club site but give no single expected-goals figure to quote, so the FotMob and Sofascore numbers stand; first-half splits are not available.",
      source: "FotMob via SI / Sofascore / Liverpool FC (Opta tools)",
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
    xgFor: 5.00,
    xgAgainst: 4.46,
    goalsFor: 6,
    goalsAgainst: 4,
    points: 5,
    note: "Premier League only, three games. Mixed-source totals: xG for is 2.73 (Newcastle, Opta) plus 1.61 (Forest, Opta) plus 0.66 (Ipswich, FotMob); xG against is 1.43 plus 2.30 (Opta) plus 0.73 (FotMob). Wednesday's Champions League figures (1.68 for, 0.81 against, Opta) are shown on their own card and not aggregated. The Ipswich figures will be swapped for Opta Analyst's when published. First-half splits exist only for the Forest match and are not aggregated.",
  },
  optaFacts: [
    "If Liverpool score exactly twice against Fulham it will be the first time in their history they have done so in each of the opening four league games of a season, per the club's Opta notes; they have scored exactly two in all four competitive matches so far, Europe included.",
    "Alexander Isak can score in a third consecutive Premier League game for the first time since January 2025, when the run reached eight, per Opta; his two goals at Ipswich already equalled his injury-hit 2025-26 league tally, and his average shot value is up from 0.16 to 0.25 xG.",
    "Liverpool have drawn each of their last three top-flight games at Anfield, per Opta, their longest home league winless run since December 2020 to March 2021; a fourth in a row would be a first since November 2011. Fulham have lost two of 33 previous league visits.",
    "Former Liverpool players managing against the club in the Premier League have lost all five meetings, per Opta: Paul Ince once, Mauricio Pellegrino twice and Steven Gerrard twice. Alvaro Arbeloa, 66 league games an Anfield player, makes it a sixth attempt on Saturday.",
    "Fulham made 3.13 expected goals on Sky's count in their 3-2 home defeat to Crystal Palace and have kept no clean sheet in three games; they have won one of eleven away league matches in 2026, the context behind prediction models that make Liverpool roughly 62 to 70 per cent favourites.",
  ],
  sources: ["Opta Analyst", "Liverpool FC", "The Independent", "Hayters TV", "Rousing The Kop", "FotMob", "Sofascore", "SI", "This Is Anfield", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-12T08:30:00Z",
  headline:
    "Matchday, and the board is quieter than the fixture: no ruling-out since Wednesday, and the only live selection question is Gakpo, whose adductor niggle was tested on Friday afternoon without a published verdict and remains a doubt into kick-off, Munoz or Ngumoha the fallback on the left. Barcola and Kerkez, both withdrawn with cramp against Atletico, are cleared as tired rather than hurt and start; Gomez, in full training since Wednesday, is in line for a first bench of the season, easing a defence that had one fit right-sided body a fortnight ago. Isak leads the line alone with Ekitike a January hope and Chiesa out until the break. Leoni rejoins group work in the international break; Bradley has no date. The real strain is calendar, not treatment room: three matches in seven days from three o'clock, with a front line one senior nine deep.",
  minutesNote:
    "Premier League minutes are not published here yet. Three league games and one Champions League game have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "January at the earliest: 'a reasonable chance' of the last two Champions League league-phase games (Inter 19 Jan, Lens 27 Jan per This Is Anfield); no league date", note: "Matchday, and the man who is not here now has a month attached. Friday's press conference was the first time the club named one. 'It's still very early,' Iraola said, 'a big part of the rehab is still to meet,' but the medical department's assessment before the European list was filed gave 'a hope and a realistic chance that he could help us in January'. Sports Mole and 3 Added Minutes had pencilled late November; that now reads optimistic. Isak remains the only fit senior nine across Fulham and Tuesday's cup tie.", source: "Liverpool FC / This Is Anfield / Hayters" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training during the September international break", note: "Iraola's plan has him back with the squad during the break after nearly a year out; no matchday date. Named in the Champions League squad. Not needed on Wednesday, when Jacquet and Van Dijk played the ninety.", source: "Liverpool FC" },
    { name: "Conor Bradley", issue: "Knee", expected: "No timeframe", note: "'Probably Conor will go later,' Iraola said last Thursday. Araujo's second start at right-back on Wednesday, an 8 from Rousing The Kop and the assist for Szoboszlai, has made his absence a smaller story than it was.", source: "Liverpool FC / Rousing The Kop" },
    { name: "Federico Chiesa", issue: "Back (originally muscle, Como friendly, August)", expected: "Rejoins group training during the September international break", note: "Left off the Champions League list, so Wednesday was never in reach; Fulham, Tottenham and Bournemouth are all before the break he is due to train in.", source: "Liverpool FC / Liverpool Offside" },
  ],
  returning: [
    { name: "Cody Gakpo", issue: "Niggles in both adductors, no defined injury", status: "Still a doubt into matchday morning: Friday afternoon's session produced no published verdict, and none had emerged by Saturday, so the left is unresolved with Tuesday's cup tie the fallback", note: "Matchday, and the verdict is still not public: the session that was to decide Saturday or Tuesday passed without a club update, and none had come by Saturday morning. Sports Mole keeps him doubtful and SI's matchday XI simply starts Munoz. A goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes, so the answer decides the shape of the front three as much as one place in it; Ngumoha (3 Added Minutes) or Munoz (Sports Mole) starts on the left if he waits.", source: "Liverpool FC / Sports Mole / 3 Added Minutes / Opta Analyst" },
    { name: "Bradley Barcola", issue: "Cramp on his first start; tired rather than injured, per Iraola", status: "Cleared again on Friday: 'no injury', 'should be available if everything goes normal'", note: "Withdrawn at 59 against Atletico looking at his calf. Iraola on Thursday put him and Kerkez together as tired rather than hurt, an issue he ties to a player being rushed through with no pre-season and to the pressing load. Two clear chances missed against Oblak; the manager wants him in the side regardless.", source: "Liverpool FC / Yahoo Sports" },
    { name: "Milos Kerkez", issue: "Cramp against Atletico, withdrawn on 88", status: "Cleared as tired, not injured; expected to face Fulham", note: "New to this list after Thursday's update. Kerkez came off late on Wednesday and tied the tightness to Iraola's pressing, saying it is hard to keep the intensity up for a full ninety, an issue the club flagged in pre-season. The only senior left-back, so his availability is not a rotation question but a necessity.", source: "Sports Illustrated / Liverpool FC" },
    { name: "Rio Ngumoha", issue: "Cramp against Atletico, around the hour (first European start)", status: "Not an injury, per Iraola; a left-sided option if Gakpo does not make it", note: "Started on the left with Gakpo out and Barcola on the right, worked Llorente out over time per Rousing The Kop (a 6), and was replaced by Munoz. With Munoz, the fallback on the left for Saturday should Gakpo's adductor keep him out.", source: "Hayters TV / Rousing The Kop" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "In full training; on matchday 3 Added Minutes has him in line for a first bench of the season against Fulham", note: "The European bench carried Chambers, McConnell and Danns rather than Gomez, which reads as a return managed for the league rather than a setback. His availability gives a fourth senior centre-back and a third right-back option.", source: "WhoScored / Liverpool Echo / Liverpool FC" },
  ],
  startersLastMatch: {
    match: "Liverpool 2-1 Atletico Madrid, 9 September (Champions League)",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Szoboszlai", "Mac Allister", "Barcola", "Wirtz", "Ngumoha", "Isak"],
    changes: "Two changes from the Ipswich side: Barcola in for Munoz, on the right, and Ngumoha in for Gakpo, who was left out of the squad as a precaution. Frimpong replaced Barcola at 59, Munoz replaced Ngumoha around the hour, Gravenberch, Koumas (a European debut) and Tsimikas (for Kerkez) followed. Unused: Mamardashvili, Woodman, Chambers, McConnell, Danns, Nyoni.",
    source: "WhoScored / Rousing The Kop / The 4th Official",
  },
  depthRisk: [
    { position: "Wide forward", level: "high", detail: "Matchday, and the Gakpo verdict is still unpublished, so the department goes into kick-off with one first-choice winger unconfirmed, Barcola cleared but on his third involvement in nine days, and Chiesa off the European list and out until the break. If Gakpo makes it the department is stretched but functional; if not, it is Munoz, Ngumoha and an advanced Frimpong across Fulham and the Tottenham cup tie three days apart, with Barcola asked for a third start in nine days on no pre-season." },
    { position: "Centre-forward", level: "high", detail: "Isak alone on matchday, 332 minutes in four starts and chasing a third straight league game with a goal, none yet in Europe, with Ekitike now given January as the earliest, 'a reasonable chance' of the last two Champions League league-phase games in Iraola's words on Friday. The fallback is Gakpo as a false nine, and Gakpo is a doubt; Koumas, whom Iraola said on Friday he decided to keep in his first week, is the only other forward to have sat on a bench. Three games in seven days is the first stretch that tests whether Isak starts all of them." },
    { position: "Right-back", level: "medium", detail: "Down from high. Araujo has now started there twice, an 8 and an assist on Wednesday after a 7.7 at Ipswich, and Frimpong came on and scored a disallowed goal; Gomez, in full training, is the third body once passed fit. Bradley has no date. One injury still puts Szoboszlai in-game cover in play, and Endo is not in the European squad." },
    { position: "Centre-back", level: "high", detail: "Gomez's likely return to the bench on Saturday, per 3 Added Minutes, is the first easing here since August. Van Dijk and Jacquet played the ninety again, the captain loose with a couple of first-half passes by Rousing The Kop's reading (a 5) and Jacquet the better of the two (a 7). Araujo is needed at right-back, Gomez is training but was not in Wednesday's squad, Leoni not with the group until the break. Until Gomez is passed fit, one injury and Endo plays centre-half in the league and nobody senior does in Europe." },
    { position: "Central midfield", level: "low", detail: "Down from medium on the evidence of the night: Mac Allister and Szoboszlai scored both goals from the pivot, Gravenberch came on (a 4 from Rousing The Kop, sloppy in possession), Nyoni and McConnell were unused. The contract question has not moved; the football answered it for one night." },
  ],
  sources: ["Liverpool FC", "This Is Anfield", "Hayters", "Sports Mole", "3 Added Minutes", "BBC Sport", "TEAMtalk", "WhoScored", "Rousing The Kop", "The 4th Official", "Yahoo Sports", "Opta Analyst", "Liverpool Echo", "SI", "FotMob"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-12T08:30:00Z",
  played: 3,
  points: 5,
  pointsPerGame: 1.67,
  projectedPoints: 63,
  projectedFinish: "Europa League places on current pace",
  headline:
    "Matchweek four, and the pace is still a three-game sample reading Europa League: five points, 1.67 a game, a projected 63. Saturday is the afternoon that can move it. Beat Fulham and the projection jumps to 76 for a day and Liverpool climb out of the five-point knot; draw and it slips to 57, a fourth straight Anfield stalemate the kind of result the underlying numbers say should not happen against a pointless side. The honest reading stays the same until Bournemouth on the 20th and Manchester City on 11 October give the season a spine: at three games, one result rewrites the whole line.",
  thresholds: [
    { label: "Champions League (top 5)", points: 68, gap: 5, note: "Historical par for fifth place in recent seasons. Requires roughly 1.80 points per game from here." },
    { label: "Europa League", points: 60, gap: 0, note: "Roughly sixth place par, and where the current pace lands. Requires about 1.57 points per game from here." },
    { label: "Conference League", points: 55, gap: 0, note: "Seventh place par, often decided by cup outcomes as much as league finish." },
    { label: "Safety", points: 38, gap: 0, note: "The conventional survival line, and where the pace sat before the Ipswich win. Twenty-five points of projection moved on one result, which is the size of the sample talking." },
  ],
  thresholdNote:
    "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  runIn: [
    { date: "2026-09-12", opponent: "Fulham", home: true, competition: "PL", oppPosition: 19, difficulty: "easy" },
    { date: "2026-09-20", opponent: "Bournemouth", home: false, competition: "PL", oppPosition: 15, difficulty: "medium" },
    { date: "2026-10-11", opponent: "Manchester City", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 5, difficulty: "hard" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 10, difficulty: "medium" },
    { date: "2026-11-01", opponent: "Arsenal", home: true, competition: "PL", oppPosition: 2, difficulty: "hard" },
  ],
  runInVerdict:
    "Six points sit there before the autumn hardens, Fulham at home on Saturday and Bournemouth away on the 20th, a pointless side and a winless one. Take both and Liverpool host Manchester City on eleven from five, a pace above 2.00, with Ekitike's January return on the horizon; take two and the projection sits in the fifties on the eve of City, Brentford and Arsenal, the three hardest of the next six. The Tottenham cup tie on Tuesday is the risk wedged between the league games, three matches in seven days for a front line with one fit senior nine and a winger, Gakpo, whose fitness is unresolved. The prediction models making Liverpool heavy favourites on Saturday are the reason to expect the six, and Iraola's own warning about slow starts is the reason not to count it early.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "This Is Anfield", "NBC Sports"],
};
