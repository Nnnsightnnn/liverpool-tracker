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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Sun Sep 13, evening - his words became the story, not his afternoon. 'It was a poor performance, in some moments even from myself, but from the team,' he said of the Fulham draw. 'Collectively, we didn't play well. We couldn't press them well.' On the schedule: 'It can take some time for us to adapt to that, but we need to do that as quick as we can because we don't have time to waste.' Football365 built a Sunday piece on it, arguing an Iraola side that cannot press is an Iraola side without its argument. The performance itself was a clean sheet built on one error and two saves, a 5 from Rousing The Kop against a 7.9 on FotMob. Mamardashvili is the likelier keeper on Tuesday", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sun Sep 13, evening - forty-eight hours out, and the tie has acquired its officials. Andy Madley referees Tuesday's third round at Anfield, 8pm, VAR in use, and the deputy's competition is where Mamardashvili's first appearance since the summer tour is expected, Alisson having played every minute of a season now four league games and a European night old. Tottenham arrive without a league goal all season. The Bournemouth trip next Sunday belongs to the No. 1", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Sun Sep 13, evening - the club has decided not to decide. Football Insider's Pete O'Rourke reported on Friday, and Yahoo, CaughtOffside and Sports Mole carried it across the weekend, that Liverpool will not open contract talks until 2027 and expect no decision before April at the earliest; the deal expires that summer and a free transfer is on the table. 'There's no decision made either way,' O'Rourke said, with the 2025 template, a late-April signature after a winter of noise, the plan again. Meanwhile he plays: every minute of all five competitive games at 35, a 7.4 and the better half of Saturday's clean sheet, with the rest still waiting on Gomez making a bench. Suitors are reported in Saudi Arabia, Milan, Turkey and MLS", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Sun Sep 13, evening - still waiting, and Tuesday the likeliest end to it. Left out of Saturday's nine-man bench despite 3 Added Minutes tipping a first inclusion; in full training since Wednesday, seven weeks on from July's Sunderland friendly injury, so the Carabao Cup tie is the obvious first involvement. A fourth senior centre-back and third right-back in one body is exactly what Saturday's tired, unrested defence most needed", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Sun Sep 13, evening - forty-eight hours from the cup tie and still the only left-back the manager trusts for ninety minutes, which is not the same as trusting him. Saturday: rested to the bench, back on at half-time because the man who replaced him could not finish it. Tsimikas misplaced 11 of 31 passes and was withdrawn; Kerkez came on to a 5 from Rousing The Kop, 'an improvement' without offering much, and 'yet more dreadful crossing' on the SI card. SI's verdict is that neither left-back is currently up to Iraola's standard. The only senior option still, and the cup tie is 72 hours away", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Sun Sep 13, evening - a spectator for a goalless afternoon, and the department he would return to held up: Araujo started at right-back for a third straight match, a 6 from Rousing The Kop, and Frimpong replaced him on 72. The left knee ligament damage from January still carries no date; he stays in the Champions League squad, and Sports Mole pencils Manchester United on 21 November as the earliest", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Sun Sep 13, evening - the beneficiary, if the reporting on Araujo is right. With CaughtOffside saying Liverpool hope to keep the Uruguayan and Football365 tipping his right-back switch to be made permanent, the Dutchman's route is the cup. Saturday: the better of the late changes, on for Araujo at 72. A 6 from Rousing The Kop, 'offered a decent amount and was solid enough defensively', 6.9 on FotMob; his late ball across the box was the one Ngumoha fired wide. A start in Tuesday's cup tie is the likelier reward now than a league one, with Araujo having played three in seven days", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Sun Sep 13, evening - another match watched, the pair ahead of him playing the ninety for a fifth straight game and Jacquet clearing off the line. Leoni stays on Iraola's timetable, group training during the international break with no matchday attached, in the European squad but unused. His own reporting still guesses Manchester City on 11 October as the earliest", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sun Sep 13, evening - the settled half of a department with an unsettled future. While the weekend's reporting was about whether his partner will be offered a contract at all, Jacquet just kept starting: five in five beside the captain, and on Saturday the goal-line clearance from Garcia's twelfth-minute shot that kept the point, 'immaculate in just about everything he did': an 8 and man of the match from Rousing The Kop, 8.1 to top the FotMob card, SI calling him the steady partner Van Dijk needed after Konate's decline. Five starts in five beside the captain. Opta had him at 18 of 25 league duels before this one", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Sun Sep 13, evening - out on loan, as the club always meant him to be. Ndukwe joined Levante on a season-long loan on deadline day, the Spanish club covering his wage. Six foot six and nineteen, Liverpool's standout defender against Monaco in pre-season, but born in Austria and short of the points a post-Brexit permit demands, he could not play a competitive fixture here this season. A year in La Liga is the plan", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sun Sep 13, evening - the second contract nobody is discussing, and by Sunday it has company. With the club reported to be deferring Van Dijk's talks to 2027, the midfielder who says Liverpool will not renew him is no longer the outlier he looked last week. On for Gravenberch at 60 on Saturday and the midfield settled, a 7 and 'undroppable' by Rousing The Kop; he said last week Liverpool will not renew him, and the recruitment staff are already scouting Atletico's Pablo Barrios for a 2027 midfield he may not be part of. Starts Tuesday, on that evidence, whatever the rotation", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Sun Sep 13, evening - a Sunday spent being named in other people's diagnoses. Alisson's account of a press that could not function and Rousing The Kop's duel count both point at the hour he and Szoboszlai spent as a pair, and the start he had waited three games for lasted exactly that long. Dispossessed by Alisson's short pass for the Garcia chance, 'all at sea far too often' by Rousing The Kop's reading, a 3, and replaced by Mac Allister at 60 with the side better for it; SI called it 'yet another undercooked performance'. The pivot with Szoboszlai won two of ten first-half ground duels. Tuesday's cup tie is now a harder case to make than it was on Friday", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Sun Sep 13, evening - the first genuinely poor afternoon of a season he has started in full, and it came in the game the goalkeeper says the team could not press. 'Arguably worse' than Gravenberch by Rousing The Kop's account, a 3: loose passes early, pressed hard by Fulham, none of six first-half ground duels won, a swipe at King that nearly gave a penalty, and set-pieces that did not land until the corner Munoz headed onto the bar. SI's 6.8 was kinder. Signed to 2031 and started every game; the first bad one of the season came on the afternoon nobody could create", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Sun Sep 13, evening - a promise from the manager, and a pundit who does not believe it. Iraola's line that 'for sure he will have his moments' was set against Jamie Carragher's blunter reading over the weekend, that the midfielder is never going to play for this Liverpool side, in a Football365 write-up of the exchange. Nought minutes this season, fourth in a queue behind Gravenberch, Mac Allister and Szoboszlai, and left out of the European squad, which makes Tuesday's cup tie the only realistic place for the promise to be kept", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Sun Sep 13, evening - the pundits found him on Sunday. Jason Cundy told Football365 he is 'not convinced' the German will come off at Liverpool and Jamie O'Hara went at his decision-making in the final third, a fortnight's worth of patience spent on one goalless afternoon. The football underneath: the ten who did not unlock it. Two shots the wrong side of the right post and a scuffed third, a 4 from Rousing The Kop ('undercooked everything he touched'), a 7.4 on FotMob that noted fatigue after Wednesday and 'uncharacteristic technical errors'. Five competitive games without a goal or assist; Fulham's block was the kind he was signed to open. Tuesday is a chance to rest him or to fix it", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Sun Sep 13, evening - one of the two young midfielders whose case the manager made this weekend without picking either. Iraola's 'he will have his moments' was aimed at Endo and drew Carragher's scorn; the teenager beside him on an unused bench for the first time this season has the quieter claim. With the pivot rated 3 and 3 and Iraola talking about a queue in midfield, the Carabao Cup tie against Tottenham on Tuesday is his likeliest minutes; the new contract is still unsigned per the weekend reporting", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Sun Sep 13, evening - out of the injury list in practice if not yet on paper, where the club's 11 September update still carries him as a doubt. Thirty minutes off the bench against Fulham settled it, and the question now is only who he is saved for. Back from the week's adductor doubt with thirty minutes off the bench against Fulham, a 5 and a 6.1; a goal and three assists in three league games per Opta are back in the pool. Whether Iraola starts him in Tuesday's cup tie or holds him for Bournemouth is the open call, with the front line tired and thin", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Sun Sep 13, evening - three league goals from four games and a weekend spent being discussed as a problem, which is the strange arithmetic of a striker in a side that cannot supply him. Sixteen touches in ninety minutes against Fulham, the second fewest for a Liverpool outfielder on record per the BBC, behind his own fourteen against Forest; Iraola's public line is patience, 'my fights with him are more about other stuff', not the goals. Dragged the game's first chance wide from Barcola's pass, twice denied by Leno. The run of three straight league games with a goal ends at two. Still the only fit senior nine, and the cup tie on Tuesday is the one he could sit", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Sun Sep 13, evening - the afternoon his absence was felt most: Isak touched the ball sixteen times and the fallback, Gakpo, came on as a right winger. Friday's press conference attached a month for the first time, 'a hope and a realistic chance that he could help us in January', the last two Champions League league-phase games the target per This Is Anfield, with 'a big part of the rehab still to meet'. Late November, pencilled by Sports Mole and 3 Added Minutes, now reads optimistic", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Sun Sep 13, evening - rested to the bench and on for Barcola at 72, a cameo Rousing The Kop called poor, a 4: an overhit cross, a counter conceded, a shot fired wide from Frimpong's late ball across the box. The special day against the side he scored against last April did not come. Still a left-sided starting option for Tuesday if Barcola and Gakpo are managed", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Sun Sep 13, evening - out until the break, and Saturday was the afternoon a fourth winger would have been used: Ngumoha and Munoz both drew a 4 in their outings, Barcola a 4 and a 6.6. Left off the Champions League list; Tottenham on Tuesday and Bournemouth on the 20th are the two before the group training he is due to rejoin", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Sun Sep 13, evening - third keeper, not on Saturday's bench, which carried Mamardashvili alone. With the deputy likelier to start Tuesday's cup tie, Woodman's next involvement is a bench place there at most", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Sun Sep 13, evening - one of four wingers competing for a role the club spent the weekend being told it has not filled. Saturday was his best case and his worst: the closest anyone came, and off on the hour. Started on the right with Barcola moved left, headed a corner against the bar on 22 with Leno getting a hand to it, and was otherwise 'a little headless' by Rousing The Kop's reading, a 4; SI's 6.7 called him the most natural of Iraola's right-wing options. Replaced by Gakpo at 60. The cup tie on Tuesday is his likelier start than Bournemouth", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Sun Sep 13, evening - the loan is starting to look like a transfer. CaughtOffside reported over the weekend that Liverpool are encouraged in their hope of keeping him, with Barcelona unable to guarantee him a defined role on his return, and Football365 carried a line on Friday that Iraola has been tipped to make the switch to right-back permanent. That is three straight starts there now, a 6 from Rousing The Kop and 6.9 on FotMob against Fulham, isolated at times by Robinson's overloads, Frimpong on for him at 72. With Bradley having no return date, the cover has quietly become the solution", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Sun Sep 13, evening - the summer's answer on the flank, in a week when the reporting went hunting for another one. Saturday was a first Premier League start, on the left this time, and a game that faded after the first minute. Set Isak up for the chance dragged wide, arrived well at the far post for a blocked shot, and was otherwise 'very much on the periphery': a 4 from Rousing The Kop, 6.6 on FotMob. Iraola said he played 'a little bit more even than three days ago', that the club is building his condition with games, and that all four wingers will play both sides all season", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  generatedAt: "2026-09-13T22:20:00Z",
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
// Last refresh: 2026-09-13 (Sunday evening, 6pm ET) — re-fetched from ESPN's endpoint after a full Sunday programme, and
// the table moved without Liverpool playing. Manchester City won the derby 1-0 at Old Trafford with ten men from the 23rd
// minute (Foden red, Haaland's winner given on review) to reach four wins from four and go level with Arsenal on twelve;
// Manchester United fall to thirteenth. Brighton's 5-0 at Coventry lifts them to fourth and into the Champions League
// stripe, pushing Chelsea onto the Europa line and Brentford out of a stripe altogether. LIVERPOOL DROP TO SEVENTH on the
// same six from four (1W 3D), passed by Brentford on goal difference and still level with Everton. Coventry are bottom on
// nothing from four, no goal scored, minus ten. Tottenham (Anfield, Carabao Cup, Tuesday 8pm) stay seventeenth on two and
// still without a league goal; Fulham eighteenth on one, in the stripe with Villa and Coventry.
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
  generatedAt: "2026-09-13T22:20:00Z",
  overview:
    "Sunday emptied the top of the table of its last bit of daylight, and pushed Liverpool down a place without them kicking a ball. Manchester City went to Old Trafford, lost Phil Foden to a 23rd-minute red for violent conduct, and won anyway through Haaland's contested hour-mark goal, which VAR allowed after a long look at an offside runner in the build-up; that leaves City level with Arsenal on twelve, both perfect from four, and drops Manchester United to thirteenth. Earlier, Brighton won 5-0 at Coventry, Lewis Dunk among the scorers, to climb into the Champions League places and leave Frank Lampard's side bottom, still without a point or a goal and now on a goal difference of minus ten. Liverpool slip to seventh on six, unchanged in every other respect, passed by Brentford on goal difference and level with Everton, with the European line now three points away rather than one. Two days from Anfield, Tottenham stay seventeenth on two and still without a league goal.",
  teams: {
    "Liverpool": "Seventh on six, one win in four, passed by Brentford without playing. Three points from the European places now, and the only side in the top half with three draws and no defeat.",
    "Arsenal": "Joint top on twelve, four wins from four, only on goal difference above City. At Anfield on 1 November.",
    "Manchester City": "Level on twelve after winning the derby with ten men from the 23rd minute, Foden sent off and Haaland's winner given on review. Visit Anfield on 11 October.",
    "Hull": "Third on eight, promoted and still unbeaten, holding a place nobody forecast for them in August.",
    "Brighton": "Fourth after a 5-0 at Coventry, five different scorers and Dunk's strike the pick; the biggest win of the weekend and a jump into the Champions League stripe.",
    "Chelsea": "Fifth on seven, the Europa stripe theirs by goal difference alone after Brighton's rout moved the line.",
    "Brentford": "Sixth on six, above Liverpool on goal difference and unbeaten like them. Host Liverpool on 17 October.",
    "Everton": "Eighth on six, still level with Liverpool on points and goal difference, separated only by goals scored.",
    "Manchester United": "Thirteenth on four after the derby defeat, twice hitting the woodwork against ten men through Rashford and Mainoo.",
    "Bournemouth": "Fifteenth on three, winless from three draws and a defeat; Liverpool visit the Vitality next Sunday, 20 September.",
    "Tottenham": "Seventeenth on two, four league games without a goal, a club first. At Anfield in the Carabao Cup on Tuesday at 8pm.",
    "Fulham": "Eighteenth on one, the Anfield point still their only one; off the bottom, inside the relegation stripe.",
    "Coventry": "Bottom on nothing at all: four defeats, no goal scored, minus ten, and a red card for Awoniyi on Sunday.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Captain Is Asked To Wait.",
    byline: "Football Insider / Yahoo Sport",
    dateline: "Anfield · 13 September",
    category: "Football News",
    body:
      "Virgil van Dijk has played every minute of every competitive game this season, at thirty-five, and the club he captains is in no hurry to tell him what happens next. Football Insider's Pete O'Rourke reported on Friday, and the Sunday papers carried it on, that Liverpool will not open contract talks until 2027, with no decision expected before April at the earliest. His deal expires that summer. The precedent is their own: in 2025 both Van Dijk and Salah signed extensions in late April after a winter of speculation, and the plan, such as it is, is to repeat it. Saudi clubs missed him once and have not stopped looking, and there are suitors in Milan, in Turkey, in Major League Soccer. Nothing has been refused. Nothing has been offered either.",
  },
  {
    n: "02",
    headline: "\"We Couldn't Press Them Well.\"",
    byline: "Football365",
    dateline: "Anfield · 13 September",
    category: "Tactics",
    body:
      "Goalkeepers rarely indict a whole performance, and Alisson Becker did it twice on Saturday evening, which is why the line travelled all Sunday. \"In the first half we spent too much energy trying to press them in a good way, but we couldn't,\" he said, and then, of the schedule, \"we don't have time to waste.\" Will Ford's reading at Football365 is that an Iraola side unable to press is an Iraola side without its argument, and that the adaptation has historically been long. It took the manager ten games to win in the Premier League at Bournemouth, with no European football to carry. Whether Saturday was mentality or legs is the question the staff will answer on the training ground, and the calendar keeps not waiting.",
  },
  {
    n: "03",
    headline: "The Cyprus Precedent.",
    byline: "Football365 / Planet Sport",
    dateline: "Larnaca · 13 September",
    category: "Manager",
    body:
      "There is one season in Andoni Iraola's career that looks like this one, and it ended badly. In 2018-19, in his first job, he took AEK Larnaca through the Europa League qualifiers and into the group stage, a genuine overachievement, and then the fixtures compressed, one win in nine followed, and he was sacked in January. Vincent Laban, who played in that midfield, has since said it was only a matter of time before the manager found the right way, which is the kindest and most damning thing anyone can say about a coach on a clock. Liverpool are not Larnaca, and five games is not nine. But the pattern he is fighting is one he has fought before, and lost once, on the only other occasion he had Europe midweek.",
  },
  {
    n: "04",
    headline: "Two Droughts, One Night.",
    byline: "Khel Now / Sky Sports",
    dateline: "Anfield · 13 September",
    category: "Football News",
    body:
      "Tuesday's third-round tie has acquired a strange symmetry. Liverpool, the competition's most decorated club with ten League Cups, failed to score at home on Saturday; Tottenham have failed to score in the league since the season began, four games, a club first. De Zerbi's answer to the last round was to put five past Charlton, so the goals exist somewhere. Andy Robertson returns to Anfield in white for the first time since leaving, opposite the corner he crossed from for a decade. Andy Madley referees, VAR is in use, and Spurs arrive without Kulusevski, Xavi Simons, Odobert and Mudryk. The previews are drawn to the obvious joke, which is that somebody has to score eventually, and nobody wants to bet on which.",
  },
  {
    n: "05",
    headline: "The Forward Hunt Keeps Moving.",
    byline: "Football365 / AnfieldWatch",
    dateline: "Anfield · 13 September",
    category: "Transfers",
    body:
      "The window is shut, so this is reconnaissance rather than business, and the reconnaissance keeps having to start again. Pedro Neto's new contract at Chelsea closed one route to a long-term replacement for Mohamed Salah on the right; AnfieldWatch's Sunday piece moved on to Yankuba Minteh and Ismaila Sarr as likelier names, while Football365 reported on Friday that both are already considered dead ends and that the club have turned instead to Bournemouth's Rayan, at a fee that would break their record. The reports contradict each other on who is reachable, which is what September reporting on a January market is for. What they agree on is the shape of the need: a wide forward who scores, and a squad that did not buy one.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-13T22:20:00Z",
  summary:
    "Sunday evening, and the biggest Liverpool story of the day is one the club has chosen not to have yet: Virgil van Dijk's contract, which expires in 2027, will not be discussed until next year, with Football Insider reporting on Friday and the Sunday coverage carrying on that no decision is expected before April at the earliest. The captain has played every minute of every competitive game this season at 35, and the club are content to let the deal run while they watch him do it, exactly as they did before the late-April extensions of 2025. Behind that, the reckoning on Andoni Iraola kept moving through the day, sharpened by Alisson's admission that Liverpool 'couldn't press them well' against Fulham and by Football365's excavation of the manager's one previous season of midweek European football, at AEK Larnaca, which ended in a January sacking after one win in nine. The table shifted without Liverpool kicking a ball: Manchester City won the derby at Old Trafford with ten men after Phil Foden's red card, going level with Arsenal on twelve, and Brighton's 5-0 at Coventry pushed Liverpool down to seventh. Tottenham, still without a league goal in four games, arrive at Anfield on Tuesday at 8pm for the Carabao Cup third round, Andy Robertson among them.",
  keyTopics: [
    {
      title: "Liverpool Postpone Van Dijk Contract Talks Until 2027: No Decision Before April, And A Free Transfer Left On The Table (Football Insider / Yahoo Sport / CaughtOffside, today)",
      detail:
        "The freshest and most consequential thread of the weekend, reported by Pete O'Rourke for Football Insider on Friday evening and picked up across Saturday and Sunday by Yahoo Sport, CaughtOffside, Sports Mole and The Hard Tackle. Liverpool are not planning to open talks over Van Dijk's contract until next year; the deal expires in 2027, and as things stand he could leave Anfield on a free. O'Rourke's line on the Transfer Insider podcast was that there is 'no decision made either way', that the club will assess how the captain performs across this season, and that the 2025 template, when Van Dijk and Salah both signed in late April after months of noise, is the one being followed again. The club had previously been reported as willing to let him go as part of a defensive overhaul, a plan his form under Iraola may already have complicated.",
      category: "transfers",
    },
    {
      title: "Alisson's Admission, And The Press That Was Not There: 'We Spent Too Much Energy Trying To Press Them, But We Couldn't' (Football365, today)",
      detail:
        "The goalkeeper's post-match words travelled all Sunday because they indicted the method rather than the result. 'It was a poor performance, in some moments even from myself, but from the team,' Alisson said of the Fulham draw. 'Collectively, we didn't play well. Many things we tried to do, we couldn't do it well. We couldn't press them well.' On the schedule he was blunter still: 'It can take some time for us to adapt to that, but we need to do that as quick as we can because we don't have time to waste.' Will Ford's reading at Football365, published Sunday lunchtime, is that a side unable to press is a side without Iraola's central argument, and that whether the cause is mentality or fitness decides how long the adaptation takes.",
      category: "tactics",
    },
    {
      title: "The Larnaca Precedent: Iraola's Only Other Season Of Midweek Europe Ended With One Win In Nine And A January Sacking (Football365 / Planet Sport, today)",
      detail:
        "The uncomfortable historical note, surfaced on Sunday and new to the coverage. In 2018-19, his first job in management, Iraola took AEK Larnaca through the Europa League qualifiers into the group stage, then watched the fixture load compress: one win in nine followed and he was dismissed in January 2019. Vincent Laban, a midfielder in that side, has said 'it was only a matter of time before he found the right way.' The piece also notes that at Bournemouth his first Premier League win did not arrive until his tenth game, with no European commitments to carry. Liverpool are four league games and one Champions League night into the same shape of season, and the manager has never had less time to make it work.",
      category: "general",
    },
    {
      title: "Manchester City Win The Derby With Ten Men: Foden Sent Off On 23, Haaland's Winner Given On Review, And Liverpool Slip To Seventh (Premier League / Sky Sports / ESPN, today)",
      detail:
        "The afternoon's result reshaped the table above Liverpool without them playing. Phil Foden was sent off for violent conduct in the 23rd minute after kicking out at Bruno Fernandes, a decision VAR checked and confirmed, and City won anyway: Haaland scored on the hour, initially flagged offside, the goal allowed after a long review of a deflected cross. Manchester United hit the woodwork twice through Rashford and Mainoo against ten men and finished thirteenth on four points. City now sit level with Arsenal on twelve, both perfect from four. Earlier, Brighton won 5-0 at Coventry, five different scorers including Lewis Dunk, and moved into the Champions League places; Liverpool, unchanged on six, drop to seventh behind Brentford on goal difference.",
      category: "matches",
    },
    {
      title: "Two Days Out: Madley Referees, Spurs Arrive Without Kulusevski, Simons, Odobert And Mudryk, And Robertson Returns In White (Khel Now / EFL / Sky Sports, today)",
      detail:
        "Tuesday's third-round tie at Anfield, 8pm on ITV and Sky Sports, has its shape by Sunday night. Andy Madley referees with VAR in use. Tottenham are without Dejan Kulusevski, Xavi Simons, Wilson Odobert and Mykhailo Mudryk; the previews line them up as Kinsky behind Gray, Van Hecke, Van de Ven and Robertson, Tonali and Bentancur screening, Savio, Fernandes and Marmoush behind Solanke. For Liverpool, Gakpo remains the doubt, with Ekitike, Chiesa, Bradley and Gomez still on the official list from 11 September. Liverpool are the competition's most successful club with ten League Cups; Robertson makes his first Anfield appearance in another shirt after nearly a decade and 350-plus games.",
      category: "matches",
    },
    {
      title: "The Right-Wing Search Keeps Restarting: Neto Signs At Chelsea, Minteh And Sarr Called Both Targets And Dead Ends, Bournemouth's Rayan Now Mooted (AnfieldWatch / Football365, today)",
      detail:
        "Reconnaissance rather than business with the window shut, and the reporting does not agree with itself. AnfieldWatch's Sunday piece has Pedro Neto's new Chelsea contract closing one avenue to a long-term successor for Mohamed Salah on the right, with Yankuba Minteh and Ismaila Sarr the likelier alternatives. Football365, on 11 September, reported the opposite, that Minteh and Sarr are January dead ends and that Liverpool have turned to Bournemouth's Rayan at a fee that would break the club record. What both agree on is the need: a wide forward who scores, in a squad that spent past 600m pounds in sixteen months and did not sign one.",
      category: "transfers",
    },
    {
      title: "Iraola Promises Endo A Chance Carragher Says Will Never Come, And Calls Koumas A Firmino-Shaped Option (Football365 / AnfieldWatch, 1d ago)",
      detail:
        "Two squad notes from the weekend's briefings. Iraola told reporters that Wataru Endo, who has not played a minute this season, will get his chance, a promise Jamie Carragher has publicly doubted, saying the midfielder is 'never going to play'. Separately, the manager praised Lewis Koumas for his attitude and willingness to work for the team, and AnfieldWatch's Sunday framing casts the academy forward as a Roberto Firmino-shaped option in the front line, a false nine who presses rather than a scorer. With Ekitike out until January at the earliest and Isak the only senior centre-forward, the second point is more than a compliment.",
      category: "general",
    },
    {
      title: "Araujo's Loan Turns Into A Question: Barcelona Cannot Guarantee A Role, And Liverpool Are Encouraged (CaughtOffside / Football365, 1d ago)",
      detail:
        "The Uruguayan arrived on loan from Barcelona and has become a fixture, playing right-back against Fulham and starring in the 2-1 win over Atletico. CaughtOffside reported over the weekend that Liverpool are encouraged in their hope of keeping him, with Barcelona unable to promise him a defined role on his return. Football365 carried a related line on 11 September, that Iraola has been tipped to make the positional switch permanent, moving a centre-back into the right-back slot the squad cannot otherwise fill while Conor Bradley recovers from knee surgery. A loan that looked like cover has become the answer to the thinnest department on the teamsheet.",
      category: "general",
    },
    {
      title: "Van Dijk's Fifth Straight Ninety, And The Rest That Still Waits On Gomez Being Named (Liverpool FC / FotMob, 1d ago)",
      detail:
        "The football underneath the contract story. The captain has played every minute of all five competitive games, was the better half of Saturday's clean sheet on a 7.4, and is 35. The rest Iraola would like to give him depends on a fourth senior centre-back appearing on a bench: Joe Gomez is in full training but has not been named in a squad, Giovanni Leoni does not rejoin the group until the international break, and Ronald Araujo is needed at right-back. Tuesday's cup tie is the obvious place to hold him back. Whether the manager dares, after Saturday's three rotations were all withdrawn inside an hour, is the selection question of the week.",
      category: "injuries",
    },
    {
      title: "Tottenham Bring The League's Worst Finishing To Anfield: Nil From 2.94 Expected Goals, The Biggest Underperformance In The Division (Squawka / Opta, 2d ago)",
      detail:
        "The opponent's problem has a number, and Squawka's Opta-fed xG table, updated on 11 September after gameweek three, puts it starkly: Tottenham had scored nothing from 2.94 expected goals, a gap of minus 2.94 and the largest in the Premier League, with Coventry and Aston Villa the only other sides yet to score. They sat 16th for expected goals created and had conceded chances worth 5.60. A fourth blank against Everton has since followed. Liverpool sat seventh for expected goals created on 4.97 and were overperforming by a little over a goal, six scored from 4.97. Both figures predate Saturday, when neither side scored again.",
      category: "tactics",
    },
  ],
  sources: [
    "Football Insider",
    "Yahoo Sport",
    "CaughtOffside",
    "Sports Mole",
    "The Hard Tackle",
    "Football365",
    "Planet Sport",
    "AnfieldWatch",
    "Premier League",
    "Sky Sports",
    "ESPN",
    "Squawka",
    "Khel Now",
    "EFL",
    "Liverpool FC",
    "FotMob",
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
  generatedAt: "2026-09-13T22:20:00Z",
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
    "Forty-eight hours out, the dossier acquires its officials and its absentees, and the central fact is unchanged: Tottenham have not scored a Premier League goal this season. Four games, no goal, a first in the club's history per CBS Sports, and Squawka's Opta-fed table put a number on the failure through gameweek three, nil scored from 2.94 expected goals, the worst underperformance in the division by nearly a full goal. They sit seventeenth on two points. Roberto De Zerbi, appointed in the summer to a squad rebuilt for around four hundred million dollars, Savio from Manchester City for 75m pounds, Omar Marmoush, Jan Paul van Hecke, Mateus Fernandes and Andy Robertson on a free from Liverpool, has two straight clean sheets to point at and a front line that cannot finish what it makes. The league sequence reads Brentford 0-3 away, Newcastle 0-2 at home, Forest 0-0 away, Everton 0-0 at home; the exception is this competition, where Charlton were beaten 5-1 in the second round, Moore, Solanke, Danso, Savio and Davies scoring. Andy Madley referees on Tuesday with VAR in use, and Kulusevski, Xavi Simons, Odobert and Mudryk are all ruled out of the trip.",
  shape:
    "De Zerbi's Tottenham build slowly from the back through Van Hecke and Van de Ven, Kinsky in goal, and look to move the ball quickly once the opponent commits; with Tonali and Bentancur screening, Fernandes and Archie Gray took turns crashing the inside-right channel against Everton before the tempo fell away. The threat is wide and early rather than central and late: Savio receives in dangerous areas and, by CBS's account, too often does too little with it, Marmoush drifts in from the left, and Solanke went 63 minutes without a shot. Out of possession they were, per CBS, far less vulnerable than for most of the last two seasons, and the two straight clean sheets are real; the problem is a front line whose combined shots on Saturday, three, were fewer than the back four's five.",
  keyPlayers: [
    {
      name: "Savio",
      role: "Right winger",
      threat: "The 75m-pound signing from Manchester City scored and assisted on his debut in the 5-1 over Charlton in this competition, per Sky Sports, eleven minutes after coming on; missed the Newcastle defeat with muscular fatigue and has since started at Forest and against Everton without a league goal contribution.",
      source: "Sky Sports / Evening Standard",
    },
    {
      name: "Lucas Bergvall",
      role: "Midfielder / substitute",
      threat: "Produced Tottenham's only real test of Pickford on Saturday, an 89th-minute shot bent toward the bottom corner, per CBS Sports; scored the winner against Liverpool in the 2025 Carabao Cup semi-final first leg. A likely starter in a rotated cup side.",
      source: "CBS Sports",
    },
    {
      name: "Dominic Solanke",
      role: "Centre-forward",
      threat: "Scored in the 5-1 over Charlton, per Sky Sports, and started his first league game of the season against Everton, where CBS counted no shots and no shot assists in 63 minutes and 11 completed passes worth 0.01 expected assists. The number that explains the goal drought.",
      source: "Sky Sports / CBS Sports",
    },
    {
      name: "Andy Robertson",
      role: "Left-back",
      threat: "Started against Everton and delivered the free-kick that produced Van Hecke's flick, the only Tottenham shot worth more than 0.1 expected goals on Saturday (0.14), per CBS Sports. Left Liverpool in July as a free agent; this is his first return to Anfield.",
      source: "CBS Sports / This Is Anfield",
    },
  ],
  predictedXI: [
    "Kinsky", "Gray", "Van Hecke", "Van de Ven", "Robertson",
    "Tonali", "Bentancur", "Savio", "Fernandes", "Marmoush", "Solanke",
  ],
  absentees: [
    { name: "Xavi Simons", issue: "ACL (April); ruled out of the Anfield trip per Khel Now", status: "Out" },
    { name: "Wilson Odobert", issue: "ACL; ruled out of the Anfield trip per Khel Now", status: "Out" },
    { name: "Dejan Kulusevski", issue: "Knee (patella); named among the absentees for Tuesday", status: "Out" },
    { name: "Mykhailo Mudryk", issue: "Listed unavailable for the Anfield trip per Khel Now", status: "Out" },
    { name: "James Maddison", issue: "Shoulder fracture, on the bench against Everton", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-12", opponent: "Everton", home: true, score: "0-0", result: "D", note: "0.64 expected goals from 14 shots per CBS; Pickford not tested until Bergvall on 89. A fourth league game without a goal, a club first. Booed off." },
    { date: "2026-09-05", opponent: "Nott'm Forest", home: false, score: "0-0", result: "D", note: "A first point and a first clean sheet of the season at the City Ground." },
    { date: "2026-08-30", opponent: "Newcastle", home: true, score: "0-2", result: "L", note: "Beaten in the home opener; Savio left out with muscular fatigue after his cup debut." },
    { date: "2026-08-26", opponent: "Charlton", home: true, score: "5-1", result: "W", note: "Carabao Cup second round. Moore, Solanke, Danso, Savio and Davies; Savio scored and assisted within eleven minutes of coming on." },
  ],
  liverpoolAngle:
    "The tie's real subject by Sunday night is the press, not the drought. Alisson said plainly after Fulham that Liverpool 'spent too much energy trying to press them in a good way, but we couldn't', which is the mechanism De Zerbi's side is built to exploit: slow construction through Van Hecke and Van de Ven designed to draw the first line in, then a fast release once it commits. FORM_TRENDS.diagnosis still carries the fast-break concession as the highest-severity pattern on the page, and Savio, who scored and assisted inside eleven minutes of his cup debut, is the player who punishes it. Against that runs Tottenham's own arithmetic: nil from 2.94 expected goals through three gameweeks per Squawka's Opta table, fewer shots from the front three than the back four against Everton, and Solanke 63 minutes without an attempt. The selection problem is Liverpool's. SQUAD_LOAD.depthRisk marks centre-forward and wide forward high, and Saturday's one attempt at rotation, Tsimikas, Gravenberch and Munoz in for Kerkez, Mac Allister and Ngumoha, ended with all three withdrawn by the hour, so the bench available for the cup is the bench that did not hold. Bournemouth away follows on Sunday. The predicted XI is the Khel Now preview's, which matches the side that started against Everton with Robertson at left-back; De Zerbi rotated four for Charlton, so a cup-weighted variation is likelier than not.",
  modelLine: null,
  sources: ["CBS Sports", "Squawka", "Opta Analyst", "Khel Now", "Sky Sports", "EFL", "This Is Anfield", "Liverpool FC", "Football365"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-13T22:20:00Z",
  competition: "PL",
  played: 4,
  headline:
    "A quiet Sunday allowed one number on this board to get better provenance rather than move: Squawka's Opta-fed gameweek-three table, updated on 11 September, publishes the Ipswich figure the club's own tools would not give, 0.53 expected goals for Liverpool against Ipswich's 0.72, which is a win taken from a game they were outcreated in. That revises the four-game league sample to 6.00 expected goals for and 5.16 against, six scored, four conceded, and it sharpens the season's actual story: Liverpool are overperforming their chances, not underperforming their luck. Through three gameweeks Squawka had them seventh for expected goals created on 4.97 and finishing 1.03 goals above it, and only the Fulham afternoon, 1.13 from 14 shots to 0.71 from 10 per Opta, has produced more chances than goals. Three of Iraola's four league games have ended level, four straight draws at Anfield across two managers, and the underlying numbers say the draws are earned rather than stolen. Tottenham arrive on Tuesday having scored nothing at all from 2.94.",
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
    "Through three gameweeks Liverpool had scored six goals from 4.97 expected, an overperformance of 1.03 and the seventh largest in the division, per Squawka's Opta-fed table; on the same table their chances created ranked seventh and the chances they conceded, 4.26, ranked eighth best.",
    "On Squawka's alternative table, where every match is settled by its rounded xG scoreline rather than its real one, Liverpool sat ninth after three rounds on four points, three places below their actual position at the time, with the Ipswich win reading as a 1-1 draw.",
    "Tottenham arrive at Anfield having scored nothing from 2.94 expected goals, per Squawka's Opta data, the largest shortfall between goals and chances in the Premier League; Coventry, who lost 5-0 to Brighton on Sunday, and Aston Villa were the only other sides yet to score.",
    "Liverpool have drawn four consecutive Premier League games at Anfield for the first time since November 2011 under Kenny Dalglish, per Opta, and drew both of their first two home league games of a season for the first time in the club's history.",
    "Manchester City played 67 minutes with ten men at Old Trafford on Sunday, Phil Foden dismissed for violent conduct on 23 and the red confirmed by VAR, and still won 1-0 through Haaland's reviewed goal on the hour; United hit the woodwork twice, through Rashford and Mainoo, per Sky Sports and the Premier League's own VAR explainer.",
  ],
  sources: ["Opta Analyst", "Squawka", "Liverpool FC", "BBC Sport", "Rousing The Kop", "Sofascore", "Premier League", "Sky Sports", "ESPN", "Football365"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-13T22:20:00Z",
  headline:
    "The goalkeeper has now said out loud what this board has been measuring: 'we spent too much energy trying to press them,' Alisson told reporters after Fulham, 'but we couldn't,' and then, of Wednesday-Saturday-Tuesday, 'we don't have time to waste.' That is a load problem described from inside it. The official list has not moved since 11 September, which on a quiet Sunday is the good news: Ekitike, Bradley, Chiesa and Leoni out, Gakpo listed a doubt there but back on the pitch for half an hour on Saturday, nobody added. What has moved is the arithmetic around the captain. Van Dijk has played every minute of all five competitive games at 35, and Sunday's reporting that the club will not discuss his contract until 2027 makes his availability a longer question than a weekly one. Tuesday's cup tie is where the rest would come, except that Saturday's three rotations were all withdrawn inside an hour, and Gomez still has not been named in a squad.",
  minutesNote:
    "Premier League minutes are not published here yet. Four league games and one Champions League game have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "January at the earliest: 'a reasonable chance' of the last two Champions League league-phase games (Inter 19 Jan, Lens 27 Jan per This Is Anfield); no league date", note: "Sunday evening, and the January date the club attached to him on Friday is the only thing on this card that has moved this month: Isak touched the ball 16 times and the fallback, Gakpo as a false nine, came on as a right winger instead. Friday's press conference was the first time the club attached a month: 'a hope and a realistic chance that he could help us in January', with 'a big part of the rehab still to meet'. Sports Mole and 3 Added Minutes had pencilled late November; that reads optimistic.", source: "Liverpool FC / This Is Anfield / Hayters" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training during the September international break", note: "Not needed on Saturday, when Jacquet and Van Dijk played the ninety again and Jacquet cleared off the line; Iraola's plan has him back with the squad during the break after nearly a year out, with no matchday date. Named in the Champions League squad.", source: "Liverpool FC" },
    { name: "Conor Bradley", issue: "Knee", expected: "No club date; Sports Mole pencils Manchester United on 21 November as the earliest", note: "'Probably Conor will go later,' Iraola said last Thursday. Araujo started at right-back for a third straight match on Saturday, a 6 from Rousing The Kop and a 6.9 on FotMob, isolated at times by Robinson's overloads, and Frimpong replaced him on 72.", source: "Liverpool FC / Rousing The Kop / SI" },
    { name: "Federico Chiesa", issue: "Back (originally muscle, Como friendly, August)", expected: "Rejoins group training during the September international break", note: "Left off the Champions League list, so Wednesday was never in reach; Fulham has passed without him, Tottenham and Bournemouth are the two before the break he is due to train in.", source: "Liverpool FC / Liverpool Offside" },
  ],
  returning: [
    { name: "Cody Gakpo", issue: "Niggles in both adductors, no defined injury", status: "Back: named on the bench against Fulham and on for Munoz at 60, thirty minutes on the right", note: "The week's doubt is resolved the quiet way, a substitute appearance rather than a statement. Rousing The Kop gave him a 5 and FotMob a 6.1, 'unable to influence proceedings', but the point is that he played, and a goal and three assists in three league games per Opta are back in the pool for Tuesday. Whether he starts the cup tie or is kept for Bournemouth is the open question.", source: "Liverpool FC / Rousing The Kop / SI" },
    { name: "Bradley Barcola", issue: "Cramp on his first start; tired rather than injured, per Iraola", status: "Started against Fulham, on the left, a first Premier League start; replaced by Ngumoha on 72", note: "A third involvement in nine days with no pre-season, and Iraola said afterwards he 'played a little bit more even than three days ago', that the club is 'building his physical condition' and that the four wingers will play both sides all season. Set up Isak's first-minute chance, then faded; a 4 from Rousing The Kop, 6.6 on FotMob.", source: "Liverpool FC / Rousing The Kop / SI" },
    { name: "Milos Kerkez", issue: "Cramp against Atletico, withdrawn on 88", status: "Rested to the bench on Saturday, on for Tsimikas at half-time", note: "Rested by design and back by necessity: Tsimikas misplaced 11 of 31 passes and was withdrawn at the break, Kerkez took over and was 'an improvement' without offering much, a 5 from Rousing The Kop, 'yet more dreadful crossing' on the SI card. The only senior left-back still, and SI's verdict is that neither is currently up to Iraola's standards.", source: "SI / Rousing The Kop" },
    { name: "Rio Ngumoha", issue: "Cramp against Atletico, around the hour (first European start)", status: "Rested to the bench on Saturday, on for Barcola at 72", note: "A poor cameo by Rousing The Kop's reading, a 4: an overhit cross, a counter conceded, and a shot fired wide from Frimpong's late ball across the box. Still the left-sided alternative for Tuesday if Barcola and Gakpo are managed.", source: "Rousing The Kop / SI" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "In full training; left out of Saturday's nine-man bench, so a first squad of the season waits for Tuesday at the earliest", note: "3 Added Minutes had him in line for a first bench against Fulham; the confirmed bench read Mamardashvili, Endo, Kerkez, Mac Allister, Gakpo, Frimpong, Nyoni, Koumas and Ngumoha, and he was not on it. The cup tie is the obvious place for a first involvement seven weeks on, and a fourth senior centre-back and third right-back in one body is what the board most needs.", source: "Liverpool FC / 3 Added Minutes" },
  ],
  startersLastMatch: {
    match: "Liverpool 0-0 Fulham, 12 September (Premier League)",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Tsimikas", "Szoboszlai", "Gravenberch", "Munoz", "Wirtz", "Barcola", "Isak"],
    changes: "Three changes from the Atletico side: Tsimikas for Kerkez, Gravenberch for Mac Allister and Munoz for Ngumoha, with Barcola moving from the right to the left and Munoz taking the right. Kerkez replaced Tsimikas at half-time; Mac Allister (for Gravenberch) and Gakpo (for Munoz) came on at 60; Ngumoha (for Barcola) and Frimpong (for Araujo) at 72. Unused: Mamardashvili, Endo, Nyoni, Koumas.",
    source: "Liverpool FC / SI",
  },
  depthRisk: [
    { position: "Wide forward", level: "high", detail: "Sunday night, and the department is whole again but tired: Gakpo back with thirty minutes, Barcola on a third involvement in nine days with no pre-season, Ngumoha and Munoz both rated 4 by Rousing The Kop in their outings, and Chiesa still out until the break. Tuesday's cup tie is 72 hours on and Bournemouth follows five days later; the question is not who is fit but who has anything left, and Iraola's answer on Saturday, rotate, lasted an hour." },
    { position: "Centre-forward", level: "high", detail: "Isak alone, and alone in a different sense on Saturday: 16 touches in 90 minutes, the second fewest for a Liverpool outfielder on record per the BBC. Ekitike is January at the earliest, Gakpo, the false-nine fallback, was used on the right, and Koumas sat on a bench for a fifth time. A third match in seven days made him start all three; the cup tie on Tuesday is where a rest would have to come, if it comes." },
    { position: "Left-back", level: "high", detail: "New to the list, and up from unrated on the evidence of the afternoon: Tsimikas, a first start of the season, misplaced 11 of 31 passes and was withdrawn at half-time, a 3 from Rousing The Kop, and Kerkez came on to 'yet more dreadful crossing' by SI's account. Two senior left-backs and, per SI, neither currently up to the manager's standard; the rotation the position was supposed to allow has just been shown not to work." },
    { position: "Central midfield", level: "medium", detail: "Up from low after one hour of Gravenberch and Szoboszlai together: two of ten first-half ground duels won, Szoboszlai none of six per Rousing The Kop, both rated 3, and the game settled only when Mac Allister came on. The Argentine, unrenewed by the club's own account, is now the one the site calls undroppable; Endo, Iraola said, 'will have his moments' but is fourth in the queue; Nyoni unused again." },
    { position: "Centre-back", level: "high", detail: "Two senior bodies doing all of it. Van Dijk and Jacquet have played every minute of five straight matches, and Sunday added a longer-range complication: Football Insider report the club will not open contract talks with the 35-year-old captain until 2027, so the department that cannot rest him is also the department with no plan published beyond this season. Gomez, in full training, has still not made a bench; Araujo is needed at right-back; Leoni does not rejoin the group until the break. Until Gomez is named, one injury and Endo plays centre-half in the league." },
    { position: "Right-back", level: "medium", detail: "Araujo's third straight start, solid if isolated by Fulham's overloads through Robinson, a 6 and a 6.9; Frimpong came on at 72 and was 'solid enough defensively' with a 6 and a 6.9, the better of the late changes. Gomez remains the third body once he is finally named in a squad. Bradley has no date." },
  ],
  sources: ["Liverpool FC", "This Is Anfield", "Hayters", "Sports Mole", "3 Added Minutes", "BBC Sport", "SI", "FotMob", "Rousing The Kop", "The Independent", "Sky Sports", "Opta Analyst", "Liverpool Offside"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-13T22:20:00Z",
  played: 4,
  points: 6,
  pointsPerGame: 1.50,
  projectedPoints: 57,
  projectedFinish: "Conference League places on current pace",
  headline:
    "Liverpool did not play on Sunday and lost a place anyway, which is the clearest thing this early sample has said yet: six points from four is 1.50 a game and a projected 57, unchanged, but Brentford's identical record with a better goal difference now sits above it and Brighton's 5-0 at Coventry has pulled the Champions League line further off. The pace lands between the historical Conference League and Europa League bars rather than on either. Four games is still four games, and the arithmetic here is arithmetic rather than forecast. But the composition is worth saying plainly: one win, three draws, and the two home fixtures the pace was meant to be built on, Forest and Fulham, have already been spent.",
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
    "Sunday made the run-in harder without changing a single fixture. Brighton's 5-0 win moved them from twelfth to fourth, so the block that used to read City, Brentford, Brighton, Arsenal now has four top-six opponents in it rather than three, and Bournemouth away next Sunday is the last league game before it against a side outside the top half. Win at the Vitality and Liverpool enter the City game on nine from five, a pace of 1.80 and a projection back in the Europa band; take a fourth draw and the projection sits in the mid-fifties with the autumn's hardest month in front of it and nothing in the column but the unbeaten run. Tuesday's cup tie is wedged in ahead of all of it, 72 hours after a match the goalkeeper said the team could not press in.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "This Is Anfield", "BBC Sport"],
};
