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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Sun Sep 13, morning - a clean sheet, and the pass that nearly gave it away. Alisson's short ball to a marked Gravenberch in the twelfth minute was dispossessed, he escaped a penalty for the challenge on King and Jacquet cleared Garcia's shot off the line; he held his hand up. Later the good part: King's curler tipped wide on 76, a Bassey header gathered. A 5 from Rousing The Kop, 7.9 on FotMob. Told Sky afterwards that a draw is 'not something to celebrate too much with this shirt'. Mamardashvili is the likelier keeper for Tuesday's cup tie", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sun Sep 13, morning - two days from his night. The Carabao Cup tie against Tottenham at Anfield on Tuesday, 8pm, is the deputy's competition and Mamardashvili's likeliest start of the month, with Alisson having played every minute of the 60-hour week; he has not featured since the summer tour. The Bournemouth trip on the 20th belongs to the No. 1", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Sun Sep 13, morning - still no rest in sight, and by Sunday the load has become a talking point of its own. Ninety minutes for a fifth straight match at 35, a 7.4 on FotMob and the better half of Saturday's clean sheet; the break Iraola would give him waits on Gomez being named in a squad, which has not happened. Three games in seven days, the cup tie on Tuesday the logical place to hold him back, if the manager dares after Saturday's rotation unravelled. Football Insider's Saudi 'tempted' rumour stays unconfirmed", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Sun Sep 13, morning - still waiting, and Tuesday the likeliest end to it. Left out of Saturday's nine-man bench despite 3 Added Minutes tipping a first inclusion; in full training since Wednesday, seven weeks on from July's Sunderland friendly injury, so the Carabao Cup tie is the obvious first involvement. A fourth senior centre-back and third right-back in one body is exactly what Saturday's tired, unrested defence most needed", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Sun Sep 13, morning - rested to the bench and back on at half-time, because the man who replaced him could not finish the half. Tsimikas misplaced 11 of 31 passes and was withdrawn; Kerkez came on to a 5 from Rousing The Kop, 'an improvement' without offering much, and 'yet more dreadful crossing' on the SI card. SI's verdict is that neither left-back is currently up to Iraola's standard. The only senior option still, and the cup tie is 72 hours away", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Sun Sep 13, morning - a spectator for a goalless afternoon, and the department he would return to held up: Araujo started at right-back for a third straight match, a 6 from Rousing The Kop, and Frimpong replaced him on 72. The left knee ligament damage from January still carries no date; he stays in the Champions League squad, and Sports Mole pencils Manchester United on 21 November as the earliest", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Sun Sep 13, morning - the better of the late changes, on for Araujo at 72 at right-back. A 6 from Rousing The Kop, 'offered a decent amount and was solid enough defensively', 6.9 on FotMob; his late ball across the box was the one Ngumoha fired wide. A start in Tuesday's cup tie is the likelier reward now than a league one, with Araujo having played three in seven days", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Sun Sep 13, morning - another match watched, the pair ahead of him playing the ninety for a fifth straight game and Jacquet clearing off the line. Leoni stays on Iraola's timetable, group training during the international break with no matchday attached, in the European squad but unused. His own reporting still guesses Manchester City on 11 October as the earliest", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sun Sep 13, morning - the reason there was a point. Read Garcia's twelfth-minute shot after Alisson's error and cleared it off the line, then was 'immaculate in just about everything he did': an 8 and man of the match from Rousing The Kop, 8.1 to top the FotMob card, SI calling him the steady partner Van Dijk needed after Konate's decline. Five starts in five beside the captain. Opta had him at 18 of 25 league duels before this one", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Sun Sep 13, morning - out on loan, as the club always meant him to be. Ndukwe joined Levante on a season-long loan on deadline day, the Spanish club covering his wage. Six foot six and nineteen, Liverpool's standout defender against Monaco in pre-season, but born in Austria and short of the points a post-Brexit permit demands, he could not play a competitive fixture here this season. A year in La Liga is the plan", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sun Sep 13, morning - the player the pivot cannot do without, and the one the club have not moved to keep. On for Gravenberch at 60 on Saturday and the midfield settled, a 7 and 'undroppable' by Rousing The Kop; he said last week Liverpool will not renew him, and the recruitment staff are already scouting Atletico's Pablo Barrios for a 2027 midfield he may not be part of. Starts Tuesday, on that evidence, whatever the rotation", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Sun Sep 13, morning - the start he had waited three games for, and it lasted an hour. Dispossessed by Alisson's short pass for the Garcia chance, 'all at sea far too often' by Rousing The Kop's reading, a 3, and replaced by Mac Allister at 60 with the side better for it; SI called it 'yet another undercooked performance'. The pivot with Szoboszlai won two of ten first-half ground duels. Tuesday's cup tie is now a harder case to make than it was on Friday", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Sun Sep 13, morning - 'arguably worse' than Gravenberch by Rousing The Kop's account, a 3: loose passes early, pressed hard by Fulham, none of six first-half ground duels won, a swipe at King that nearly gave a penalty, and set-pieces that did not land until the corner Munoz headed onto the bar. SI's 6.8 was kinder. Signed to 2031 and started every game; the first bad one of the season came on the afternoon nobody could create", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Sun Sep 13, morning - unused on Saturday, and given his answer by the manager afterwards. 'Wata lost quite a lot of the pre-season,' Iraola said, 'he's still not at his best but he's training very well'; the problem is the queue, Gravenberch, Mac Allister and Szoboszlai ahead of him, 'but for sure he will have his moments'. Not in the European squad, so Tuesday's cup tie is the likeliest of them", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Sun Sep 13, morning - the ten who did not unlock it. Two shots the wrong side of the right post and a scuffed third, a 4 from Rousing The Kop ('undercooked everything he touched'), a 7.4 on FotMob that noted fatigue after Wednesday and 'uncharacteristic technical errors'. Five competitive games without a goal or assist; Fulham's block was the kind he was signed to open. Tuesday is a chance to rest him or to fix it", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Sun Sep 13, morning - unused on a league bench for the first time this season, beside Endo, Koumas and Mamardashvili. With the pivot rated 3 and 3 and Iraola talking about a queue in midfield, the Carabao Cup tie against Tottenham on Tuesday is his likeliest minutes; the new contract is still unsigned per the weekend reporting", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Sun Sep 13, morning - fit now, and a selection question rather than a fitness one. Back from the week's adductor doubt with thirty minutes off the bench against Fulham, a 5 and a 6.1; a goal and three assists in three league games per Opta are back in the pool. Whether Iraola starts him in Tuesday's cup tie or holds him for Bournemouth is the open call, with the front line tired and thin", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Sun Sep 13, morning - the number followed him into Sunday, and so did his manager's defence of it. Sixteen touches in ninety minutes against Fulham, the second fewest for a Liverpool outfielder on record per the BBC, behind his own fourteen against Forest; Iraola's public line is patience, 'my fights with him are more about other stuff', not the goals. Dragged the game's first chance wide from Barcola's pass, twice denied by Leno. The run of three straight league games with a goal ends at two. Still the only fit senior nine, and the cup tie on Tuesday is the one he could sit", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Sun Sep 13, morning - the afternoon his absence was felt most: Isak touched the ball sixteen times and the fallback, Gakpo, came on as a right winger. Friday's press conference attached a month for the first time, 'a hope and a realistic chance that he could help us in January', the last two Champions League league-phase games the target per This Is Anfield, with 'a big part of the rehab still to meet'. Late November, pencilled by Sports Mole and 3 Added Minutes, now reads optimistic", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Sun Sep 13, morning - rested to the bench and on for Barcola at 72, a cameo Rousing The Kop called poor, a 4: an overhit cross, a counter conceded, a shot fired wide from Frimpong's late ball across the box. The special day against the side he scored against last April did not come. Still a left-sided starting option for Tuesday if Barcola and Gakpo are managed", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Sun Sep 13, morning - out until the break, and Saturday was the afternoon a fourth winger would have been used: Ngumoha and Munoz both drew a 4 in their outings, Barcola a 4 and a 6.6. Left off the Champions League list; Tottenham on Tuesday and Bournemouth on the 20th are the two before the group training he is due to rejoin", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Sun Sep 13, morning - third keeper, not on Saturday's bench, which carried Mamardashvili alone. With the deputy likelier to start Tuesday's cup tie, Woodman's next involvement is a bench place there at most", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Sun Sep 13, morning - the closest anyone came, and off on the hour. Started on the right with Barcola moved left, headed a corner against the bar on 22 with Leno getting a hand to it, and was otherwise 'a little headless' by Rousing The Kop's reading, a 4; SI's 6.7 called him the most natural of Iraola's right-wing options. Replaced by Gakpo at 60. The cup tie on Tuesday is his likelier start than Bournemouth", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Sun Sep 13, morning - a third straight start at right-back, 'solid, if unspectacular' for a 6 from Rousing The Kop, 6.9 on FotMob, at times isolated by Fulham's overloads through Robinson on his side. Replaced by Frimpong on 72. Iraola calls it a position probably not his main, done very well; Warnock told TEAMtalk on Friday the move is permanent. Three games in seven days, so Tuesday may be Frimpong's", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Sun Sep 13, morning - a first Premier League start, on the left this time, and a game that faded after the first minute. Set Isak up for the chance dragged wide, arrived well at the far post for a blocked shot, and was otherwise 'very much on the periphery': a 4 from Rousing The Kop, 6.6 on FotMob. Iraola said he played 'a little bit more even than three days ago', that the club is building his condition with games, and that all four wingers will play both sides all season", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  generatedAt: "2026-09-13T08:30:00Z",
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
// Last refresh: 2026-09-13 (Sunday morning, ~4am ET) — re-fetched from ESPN's endpoint; no match since Saturday, so the
// table is byte-identical (the Manchester derby is this afternoon, unplayed). Liverpool sixth on six from four (1W 3D),
// level with Everton and a goal ahead of Ipswich, a goal of difference behind Brentford's Europa stripe. Arsenal perfect
// on twelve; City second on nine with a game in hand, at Old Trafford this afternoon; Hull third on eight after a draw at
// Chelsea. Tottenham (Anfield, Carabao Cup, Tuesday 8pm) seventeenth on two and still goalless; Fulham eighteenth on one,
// still in the stripe with Villa and pointless Coventry.
export const STANDINGS = [
  { pos: 1, team: "Arsenal", p: 4, w: 4, d: 0, l: 0, gd: 7, pts: 12, qualification: "UCL" },
  { pos: 2, team: "Manchester City", p: 3, w: 3, d: 0, l: 0, gd: 5, pts: 9, qualification: "UCL" },
  { pos: 3, team: "Hull", p: 4, w: 2, d: 2, l: 0, gd: 3, pts: 8, qualification: "UCL" },
  { pos: 4, team: "Chelsea", p: 4, w: 2, d: 1, l: 1, gd: 1, pts: 7, qualification: "UCL" },
  { pos: 5, team: "Brentford", p: 4, w: 1, d: 3, l: 0, gd: 3, pts: 6, qualification: "UEL" },
  { pos: 6, team: "Liverpool", p: 4, w: 1, d: 3, l: 0, gd: 2, pts: 6, highlight: true },
  { pos: 7, team: "Everton", p: 4, w: 1, d: 3, l: 0, gd: 2, pts: 6 },
  { pos: 8, team: "Ipswich", p: 4, w: 2, d: 0, l: 2, gd: -3, pts: 6 },
  { pos: 9, team: "Newcastle", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5 },
  { pos: 10, team: "Leeds", p: 3, w: 1, d: 2, l: 0, gd: 1, pts: 5 },
  { pos: 11, team: "Nott'm Forest", p: 4, w: 1, d: 2, l: 1, gd: 0, pts: 5 },
  { pos: 12, team: "Brighton", p: 3, w: 1, d: 1, l: 1, gd: 3, pts: 4 },
  { pos: 13, team: "Manchester United", p: 3, w: 1, d: 1, l: 1, gd: 1, pts: 4 },
  { pos: 14, team: "Sunderland", p: 4, w: 1, d: 1, l: 2, gd: -2, pts: 4 },
  { pos: 15, team: "Bournemouth", p: 4, w: 0, d: 3, l: 1, gd: -1, pts: 3 },
  { pos: 16, team: "Crystal Palace", p: 4, w: 1, d: 0, l: 3, gd: -5, pts: 3 },
  { pos: 17, team: "Tottenham", p: 4, w: 0, d: 2, l: 2, gd: -5, pts: 2 },
  { pos: 18, team: "Fulham", p: 4, w: 0, d: 1, l: 3, gd: -3, pts: 1, qualification: "REL" },
  { pos: 19, team: "Aston Villa", p: 4, w: 0, d: 1, l: 3, gd: -6, pts: 1, qualification: "REL" },
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
  matchweek: 4,
  generatedAt: "2026-09-13T08:30:00Z",
  overview:
    "The table's next shove comes this afternoon at Old Trafford, where Manchester City, second on nine with a game in hand on everyone near the top, can close on or pass Arsenal in the Manchester derby. Arsenal stand top on twelve, perfect after four and the only side yet to drop a point; Liverpool are sixth on six from four, one win and three draws, level on points and goal difference with Everton and a goal ahead of Ipswich, a goal of difference behind Brentford's Europa stripe and a clear tier below Chelsea's seven on the Champions League line. Hull, promoted and unbeaten, hold third on eight. Below the middle, Tottenham's 0-0 with Everton leaves them seventeenth on two and still without a league goal, two days before their Carabao Cup visit to Anfield, while Fulham's first point lifts them off the bottom to eighteenth, still in the relegation stripe with Aston Villa and a Coventry side yet to score or play a fourth game.",
  teams: {
    "Liverpool": "Sixth on six, one win in four, the scrutiny now on the manager as much as the table. Level with Everton on goal difference; the Europa stripe is a goal away, the Champions League line Chelsea's seven.",
    "Arsenal": "Top on twelve, the only perfect record left after four. At Anfield on 1 November.",
    "Manchester City": "Second on nine from three, a game in hand on everyone around the top, played in this afternoon's derby at Old Trafford. Visit Anfield on 11 October.",
    "Hull": "Third on eight, promoted and unbeaten, a point taken at Stamford Bridge on Saturday to keep the row nobody forecast.",
    "Chelsea": "Fourth on seven after a home draw with Hull; the total Liverpool would have passed with a win over Fulham.",
    "Brentford": "Fifth on six, above Liverpool on goal difference alone and wearing the Europa stripe for it. Host Liverpool on 17 October.",
    "Everton": "Seventh on six, level with Liverpool on points and goal difference after their 0-0 at Tottenham.",
    "Ipswich": "Eighth on six, a second win of the season a week after losing 2-0 at home to Liverpool.",
    "Bournemouth": "Fifteenth on three, still winless after three draws and a defeat; Liverpool visit the Vitality on Sunday 20 September.",
    "Tottenham": "Seventeenth on two and still without a league goal after four games, a club first. At Anfield in the Carabao Cup on Tuesday at 8pm, two days out.",
    "Fulham": "Eighteenth on one, the point taken at Anfield on Saturday their first under Arbeloa; off the bottom, still in the relegation stripe.",
    "Coventry": "Bottom, pointless and goalless from three games, the only side in the division yet to play a fourth.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Pressure Arrives Early.",
    byline: "AnfieldWatch / LiveScore",
    dateline: "Anfield · 13 September",
    category: "Manager",
    body:
      "Five games is no time at all to judge a manager, and the judging has started anyway. The Sunday columns, AnfieldWatch's the loudest, make the case that Andoni Iraola is already under a weight Arne Slot never carried: one win in four, a first home blank, and, decisively, no sporting director to stand behind the appointment. Richard Hughes, the man who chose him, has gone to Al-Hilal, and the successor FSG are hunting owes Iraola nothing. None of it is a sacking, and nobody at the club has briefed against him. But a head coach hired by an absent patron is a head coach on his own results, and the results say half his last forty-two league games have ended level. Tuesday is the first answer he is allowed to give.",
  },
  {
    n: "02",
    headline: "A Name For January.",
    byline: "LFC Live / live4liverpool",
    dateline: "Anfield · 13 September",
    category: "Transfers",
    body:
      "The window is shut until winter, so this is a note for later rather than now. Pablo Barrios spent Wednesday evening passing through Liverpool's press with the ease of a man auditioning, ninety-one per cent completion, two key passes, three dribbles, and by Saturday the reports had him on the list: initial contact made, midfield the priority, a January move a hope and a summer one the likelier truth. He is twenty-three, tied to Atletico until 2030, and wears a release clause near a hundred million euros, which is the sort of figure that keeps a rumour honest. Chelsea are said to be weighing the same player; Tottenham have watched him too. Iraola, the coverage agrees, was the one most taken.",
  },
  {
    n: "03",
    headline: "Robertson Comes Home In White.",
    byline: "This Is Anfield / Liverpool.com",
    dateline: "Anfield · 13 September",
    category: "Football News",
    body:
      "There will be a moment on Tuesday night, somewhere in the warm-up, when the Kop works out which of the visitors it still loves. Andy Robertson left in the summer for Tottenham and returns to Anfield for the first time in another club's shirt, a Carabao Cup third round at eight, the competition Liverpool treat as the deputy's. Expect rotation: Mamardashvili for the gloves, a first bench or better for Joe Gomez, the spine rested where the fixtures allow. The strange part is the opponent. De Zerbi's Spurs have not scored in four league games, a club first, and arrive at a ground where the hosts have just failed to score themselves. Two droughts, one night, and a returning full-back caught between them.",
  },
  {
    n: "04",
    headline: "In Defence Of The Striker.",
    byline: "Sky Sports / SI",
    dateline: "Anfield · 12 September",
    category: "Tactics",
    body:
      "Sixteen touches in ninety minutes is the kind of number that writes its own headline, and the headline is wrong, or at least early. Alexander Isak saw less of the ball against Fulham than all but one Liverpool outfielder on record, the other occasion also his, and the temptation is to read a problem into it. His manager reads service. Iraola has been careful, since Ipswich, to take the weight off the scoresheet: his demands, he says, are not about the goals, which will come, but about the other work, the pressing and the helping, the parts a forward is judged on only by coaches. Three in four is the return. Saturday was not a striker failing to finish. It was a team failing to supply.",
  },
  {
    n: "05",
    headline: "The Chair Nobody Is Sitting In.",
    byline: "Yahoo Sport / This Is Anfield",
    dateline: "Anfield · 13 September",
    category: "Football News",
    body:
      "Behind the result and beneath the manager sits the vacancy that explains both. Liverpool are looking for a sporting director for the fifth time since 2022, Hughes having followed the money to Saudi Arabia, and Mike Gordon of Fenway is running the search himself, internal names and outside ones on the same list. The inheritance is not small: a squad built past six hundred million pounds in sixteen months, a midfield already being scouted for the next rebuild, a head coach hired by the departed. Iraola says the day-to-day is untouched, that recruitment carries on without a figurehead, and perhaps it does. But the person who takes the chair will decide, in January and beyond, whose plan the club is following. For now, nobody's.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-13T08:30:00Z",
  summary:
    "Sunday morning, and the noise around Andoni Iraola has grown louder than the football: one win in four, a first Anfield blank under him on Saturday, and a weekend column from AnfieldWatch arguing he is already under more serious pressure than Arne Slot ever faced, with the sporting director who hired him, Richard Hughes, long gone to Al-Hilal and Mike Gordon now running FSG's search for a fifth since 2022. The manager's own post-mortem had sharpened by the morning papers: 'what was lacking was quite clear,' he said of a side that could not create, blaming the 60-hour turnaround and Fulham's stoppages while insisting 'this is going to happen more times' and the team must adapt. Beneath the scrutiny the squad ticks over unchanged: Liverpool stay sixth on six from four, level with Everton and Ipswich, and Tottenham's goalless visit in the Carabao Cup on Tuesday at 8pm is the first chance to answer it. The week's one genuinely new thread is in midfield, where Pablo Barrios, impressive for Atletico at Anfield on Wednesday, has been the subject of initial Liverpool contact for a January or summer move, Chelsea also circling. Alexander Isak, sixteen touches on Saturday, drew a defence from his manager rather than a demand, 'my fights with him are more about other stuff', and Andy Robertson returns to Anfield in white on Tuesday before Bournemouth away on the 20th and the international break.",
  keyTopics: [
    {
      title: "Iraola Under 'Serious Pressure' Already: One Win In Four, A First Anfield Blank, And No Sporting Director To Protect Him (AnfieldWatch / LiveScore / Yahoo Sport, today)",
      detail:
        "The Sunday framing, emerging overnight. AnfieldWatch's piece, carried by LiveScore and Yahoo on Sunday morning, argues Iraola is 'officially under serious pressure' barely five games in, the weight heavier than anything Arne Slot carried, because the man who hired him is gone: Richard Hughes left for Al-Hilal, and a sporting director who backed the appointment would have offered cover a successor will not. One win in four, a goalless home draw with a pointless side, and half of his last 42 league games drawn across Bournemouth and Liverpool per The Independent are the numbers under the column. Nobody at the club has briefed against him, and the table still reads sixth; the point is structural, not a sacking, and Tuesday's cup tie is the first reply available.",
      category: "general",
    },
    {
      title: "'What Was Lacking Was Quite Clear': Iraola's Sharper Post-Mortem, Fulham's Stoppages, And A Warning That 'This Is Going To Happen More Times' (Liverpool FC / ESPN / VAVEL, today)",
      detail:
        "The manager's fuller account, printed in the Sunday write-ups. 'I think what was lacking was quite clear,' Iraola said: 'it is the first game since I've been here we've had problems creating chances to score goals, to make the difference offensively.' He named the 60-hour turnaround from the Atletico win as the root, said a congested schedule means 'this is going to happen more times' and the squad must learn to carry it, and let a rare flash of frustration show at Fulham's deliberate slowing of throw-ins and goal-kicks, which broke Liverpool's rhythm. ESPN and VAVEL both led on the creativity line rather than the fatigue; the reading is a manager diagnosing a problem, not excusing it.",
      category: "tactics",
    },
    {
      title: "The January Midfield Thread: Liverpool Make Initial Contact For Atletico's Pablo Barrios After He Impressed At Anfield, Chelsea Also Circling (LFC Live / live4liverpool / Sportskeeda, today)",
      detail:
        "The week's one genuinely new transfer strand, and an in-season one with the window shut. Pablo Barrios, 23, caught Iraola and the hierarchy's eye in Atletico's 2-1 defeat at Anfield on Wednesday, 91 per cent passing, two key passes, three dribbles and 25 carries by the match data, and LFC Live and live4liverpool report initial contact was made within days for a January or, more realistically, summer move, midfield flagged as the priority area. Barrios renewed at Atletico to 2030 and carries a release clause reported around 100m euros; Chelsea are weighing a January bid of their own, and Tottenham have monitored him too. Nothing is imminent with no window open, but the name is now a standing one.",
      category: "transfers",
    },
    {
      title: "FSG's Fifth Sporting-Director Search Since 2022: Mike Gordon Leads The Hunt, And Iraola Insists The Hughes Exit 'Will Not Affect' The Squad (This Is Anfield / Yahoo Sport, today)",
      detail:
        "The structural story beneath the manager's. With Hughes departed for Al-Hilal, Liverpool are looking for a sporting director for the fifth time since 2022, Mike Gordon of FSG overseeing a process the club want resolved quickly, internal candidates considered alongside outside names. Iraola, asked about the vacuum, told reporters he is 'confident' the day-to-day is unaffected and that his staff and the recruitment team carry on, but Yahoo's survey of the job lays out the inheritance: a squad assembled at more than 600m pounds in 16 months, a midfield rebuild to plan, and a head coach hired by a man no longer in the building. The appointment will shape January.",
      category: "general",
    },
    {
      title: "Iraola Defends Isak Rather Than Demands From Him: 'My Fights With Him Are More About Other Stuff', Not The Goals (Sky Sports / SI / BBC Sport, today)",
      detail:
        "The striker took only sixteen touches against Fulham, the second fewest for a Liverpool outfielder on record per BBC Sport, and the Sunday reading of his start is kinder than the number. Iraola, revisited in SI's 'good problems' piece, has framed his demands away from the scoresheet: 'My demands will not be about the goals: he's fit, in a good shape and he will produce the numbers,' he said after Ipswich, adding 'my fights with him are more about other stuff, how to help the team in other situations.' Three league goals in four is the return; the service, not the finishing, is what Saturday starved, and the manager's public line is patience rather than pressure.",
      category: "general",
    },
    {
      title: "Carabao Cup, Tuesday: Rotation Expected, Mamardashvili And Gomez In Line For First Minutes, And Robertson Back At Anfield In White (Liverpool.com / This Is Anfield, today)",
      detail:
        "The fixture ahead, and the one the manager can use. The third-round tie with Tottenham on Tuesday at 8pm falls 72 hours after Fulham and five days before Bournemouth, and the reporting expects Iraola to rotate, with Mac Allister and Szoboszlai tipped to stay in midfield. Giorgi Mamardashvili is the likeliest to take Alisson's gloves in what is the deputy's competition, and Joe Gomez, in full training but left out of Saturday's nine, is the obvious candidate for a first involvement seven weeks on. Andy Robertson, who left for Spurs in the summer, returns to Anfield for the first time in white. ITV and Sky Sports have the tie.",
      category: "matches",
    },
    {
      title: "Two Goal Droughts Meet: Tottenham Bring Four League Games Without A Goal To Anfield, A Club First (CBS Sports / Tottenham Hotspur, today)",
      detail:
        "The opponent's form is the tie's strange symmetry. De Zerbi's Tottenham, 17th on two points after roughly four hundred million dollars of summer spending, have failed to score in each of their first four league games for the first time in the club's history per CBS, the latest a 0-0 with Everton on 0.64 expected goals from 14 shots, Pickford untested until Bergvall's 89th-minute effort. Their exception is this competition, a 5-1 win over Charlton in the second round. Liverpool drew their own blank on Saturday, so Tuesday pits a side that cannot score at home against one that has just failed to; De Zerbi says two straight clean sheets are the improvement he will build on.",
      category: "matches",
    },
    {
      title: "The Table, And A Manchester Derby That Moves It: Liverpool Sixth On Six, City At Old Trafford This Afternoon With A Game In Hand (ESPN / Opta Analyst, today)",
      detail:
        "Saturday's results left Liverpool sixth on six from four, level on points and goal difference with Everton and a goal ahead of Ipswich, one behind Brentford's Europa stripe. Arsenal sit top on twelve, perfect after four and the visitors to Anfield on 1 November; Hull, promoted and unbeaten, are third on eight. The day's mover is the Manchester derby at Old Trafford this afternoon, Maresca's City on nine from three with a game in hand on everyone around the top, a win lifting them level with or past Arsenal on the reckoning. Liverpool visit City on 11 October.",
      category: "matches",
    },
    {
      title: "Mac Allister The Pivot's Pulse: Undroppable After An Hour Without Him, And The Contract The Club Have Not Moved To Extend (Rousing The Kop / The Independent, 1d ago)",
      detail:
        "Carried over from Saturday's ratings and still the squad's sharpest question. The Gravenberch-Szoboszlai pivot won two of ten first-half ground duels before Mac Allister came on at 60 and steadied it, a 7 the best mark on a poor card; Rousing The Kop's line that Iraola 'can not afford to drop' him again has aged into Sunday as the obvious truth. The subplot is the contract: the Argentine said last week the club will not renew him, and a midfield the recruitment team are scouting Barrios for is one he may not be part of by 2027. The most important player in the team is also the one with the least certain future in it.",
      category: "general",
    },
    {
      title: "Van Dijk Plays On Without A Rest: A Fifth Straight Ninety, And The Break That Waits On Gomez Being Named (Liverpool FC / FotMob, 1d ago)",
      detail:
        "The captain has played every minute of all five competitive games at 35, a 7.4 and the better half of Saturday's clean sheet, and the rest Iraola would like to give him is hostage to a thin centre-back department. Gomez, in full training, has not made a bench; until he does, one injury leaves Endo playing centre-half in the league, Leoni not back with the group until the international break, and Araujo needed at right-back. Tuesday's cup tie is the logical place to hold Van Dijk back, if Iraola dares after Saturday's rotation unravelled inside an hour. Football Insider's 'tempted by a Saudi offer' line on the captain stays unconfirmed.",
      category: "injuries",
    },
  ],
  sources: [
    "Liverpool FC",
    "This Is Anfield",
    "AnfieldWatch",
    "LiveScore",
    "Yahoo Sport",
    "ESPN",
    "VAVEL",
    "Sky Sports",
    "SI",
    "LFC Live",
    "live4liverpool",
    "Sportskeeda",
    "CBS Sports",
    "The Independent",
    "Rousing The Kop",
    "BBC Sport",
    "FotMob",
    "Opta Analyst",
    "Tottenham Hotspur",
    "Liverpool.com",
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
  generatedAt: "2026-09-13T08:30:00Z",
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
    "Two days out, and the dossier holds: a cup tie between two teams that spent the weekend failing to score. Tottenham arrive at Anfield on Tuesday, Carabao Cup third round, seventeenth in the league on two points and without a Premier League goal after four games, a first in the club's history per CBS Sports, after a 0-0 with Everton in which they took 14 shots worth 0.64 expected goals and did not test Pickford until Lucas Bergvall's 89th-minute effort. Roberto De Zerbi, appointed in the summer to a squad rebuilt for around four hundred million dollars, Savio from Manchester City for 75m pounds, Omar Marmoush, Jan Paul van Hecke, Mateus Fernandes, Andy Robertson on a free from Liverpool, says he began working with the group 'two Thursdays ago' and that 'if we unblock ourselves, I think the team is extremely strong'. The league sequence reads Brentford 0-3 away, Newcastle 0-2 at home, Forest 0-0 away, Everton 0-0 at home; the exception is this competition, where they beat Charlton 5-1 in the second round with Moore, Solanke, Danso, Savio and Davies scoring. Two clean sheets in a row are the improvement De Zerbi points to; the placard in the stands on Saturday read 'please score a goal'.",
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
    { name: "Xavi Simons", issue: "ACL (April)", status: "Out" },
    { name: "Wilson Odobert", issue: "ACL", status: "Out" },
    { name: "Dejan Kulusevski", issue: "Knee (patella), back in training", status: "Doubt" },
    { name: "James Maddison", issue: "Shoulder fracture, on the bench against Everton", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-12", opponent: "Everton", home: true, score: "0-0", result: "D", note: "0.64 expected goals from 14 shots per CBS; Pickford not tested until Bergvall on 89. A fourth league game without a goal, a club first. Booed off." },
    { date: "2026-09-05", opponent: "Nott'm Forest", home: false, score: "0-0", result: "D", note: "A first point and a first clean sheet of the season at the City Ground." },
    { date: "2026-08-30", opponent: "Newcastle", home: true, score: "0-2", result: "L", note: "Beaten in the home opener; Savio left out with muscular fatigue after his cup debut." },
    { date: "2026-08-26", opponent: "Charlton", home: true, score: "5-1", result: "W", note: "Carabao Cup second round. Moore, Solanke, Danso, Savio and Davies; Savio scored and assisted within eleven minutes of coming on." },
  ],
  liverpoolAngle:
    "The reading is still two goal droughts meeting, and by Sunday the sharper question is the manager's own standing, not the scoreline. Liverpool have one win in four, failed to score for the first time under a head coach now being written about as under pressure, and face 72 hours on exactly the three-in-seven load Iraola said would bite more than once. SQUAD_LOAD.depthRisk marks centre-forward and wide forward high, and Saturday showed why: the one attempt at resting Kerkez, Mac Allister and Ngumoha ended with all three replacements withdrawn by the hour, so the bench for the cup is the same bench that did not work. Against that, Tottenham have not scored in the league, took 0.64 expected goals from 14 shots on Saturday, and by CBS's count got fewer shots from their front three than their back four; FORM_TRENDS.diagnosis still lists the fast-break concession as Liverpool's highest-severity pattern, and a De Zerbi side that builds slowly and breaks quickly once the press is beaten is the shape that finds it, with Savio the one Tottenham player who has produced a goal and an assist in a game this season, in this competition. The other reading is that both managers have a bigger fixture on the weekend, Bournemouth away and, for De Zerbi, a home game he cannot afford to lose, so Tuesday may be decided by whichever XI is furthest from the one that drew on Saturday. The predicted XI is the side that started against Everton, from the club's confirmed team sheet; no cup-specific preview had been published by Saturday night, and De Zerbi rotated four for Charlton. Robertson returns to Anfield for the first time since leaving in July.",
  modelLine: null,
  sources: ["CBS Sports", "Tottenham Hotspur", "Sky Sports", "Evening Standard", "This Is Anfield", "Liverpool FC", "ESPN", "Opta Analyst"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-13T08:30:00Z",
  competition: "PL",
  played: 4,
  headline:
    "Nothing has been played since Saturday, so the numbers have not moved, but a day's distance makes the Fulham reading starker rather than softer: 1.13 expected goals from 14 shots against Fulham's 0.71 from 10, per Opta, the lowest Liverpool total of the season in either competition apart from the Ipswich win, with three shots on target to the visitors' four and 18 touches in the box to their 24. The league sample now reads 6.13 expected goals for and 5.17 against on mixed sources across four games, six scored and four conceded, and the pattern that the results column hides has changed shape: three of Iraola's four league games have been draws, four straight at Anfield across two managers, and Opta's note that Liverpool had spent only 21 per cent of the season in a drawing game state before kick-off is the measure of how much of Saturday was spent in one. The manager's own diagnosis was freshness and late presses; the ratings' diagnosis was the pivot, two of ten first-half ground duels won by Gravenberch and Szoboszlai per Rousing The Kop. Tottenham on Tuesday have scored no league goals at all.",
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
    xgFor: 6.13,
    xgAgainst: 5.17,
    goalsFor: 6,
    goalsAgainst: 4,
    points: 6,
    note: "Premier League only, four games. Mixed-source totals: xG for is 2.73 (Newcastle, Opta) plus 1.61 (Forest, Opta) plus 0.66 (Ipswich, FotMob) plus 1.13 (Fulham, Opta); xG against is 1.43 plus 2.30 (Opta) plus 0.73 (FotMob) plus 0.71 (Opta). Wednesday's Champions League figures (1.68 for, 0.81 against, Opta) are shown on their own card and not aggregated. The Ipswich figures will be swapped for Opta Analyst's when published. First-half splits exist only for the Forest match and are not aggregated.",
  },
  optaFacts: [
    "Liverpool have drawn four consecutive Premier League games at Anfield for the first time since November 2011 under Kenny Dalglish, per Opta; Saturday was also the first time in the club's history they have drawn both of their first two home league games of a season, and only the third time in 63 seasons they have failed to win both, after 2003-04 and 2012-13.",
    "Before matchday four only Brighton (16.8 per cent) and Chelsea (18 per cent) had spent a lower share of the season in a drawing game state than Liverpool's 21 per cent, per Opta, a measure of how chaotic the Newcastle and Forest draws were; Saturday's was the opposite kind, ninety minutes level.",
    "Alexander Isak had 16 touches in 90 minutes against Fulham, the second fewest for a Liverpool outfielder on record per the BBC; the fewest, 14, was also his, against Forest a fortnight earlier. He has three league goals in four games regardless.",
    "Fulham's point was their first of the season and their first under Arbeloa, but they have still won only one of their last twelve away Premier League games (D5 L6), per Opta; they had lost their first four top-flight matches of a season only twice before, in 1951-52 and 2020-21, both ending in relegation.",
    "Iraola has drawn half of his last 42 league matches across Bournemouth and Liverpool, per The Independent's Richard Jolly, and the last three, Newcastle, Forest and Fulham, all came against sides that finished in the bottom half last season.",
  ],
  sources: ["Opta Analyst", "Liverpool FC", "The Independent", "BBC Sport", "Rousing The Kop", "FotMob", "Sofascore", "SI", "This Is Anfield", "Sky Sports", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-13T08:30:00Z",
  headline:
    "Sunday, and the board reads exactly as it did at Saturday's final whistle, which this week is the concern rather than the relief: the one attempt to use the squad's depth failed inside an hour, and the cup tie 48 hours away asks the manager to try again with the same pieces. Tsimikas, Gravenberch and Munoz came in for Kerkez, Mac Allister and Ngumoha and all three had been replaced by the sixtieth minute, Tsimikas at half-time, so the cup tie against Tottenham on Tuesday, 72 hours on, arrives with the same eleven tired starters and the same bench that did not work. Gakpo is back, thirty minutes from the bench closing the adductor question; Gomez was again left out of a nine-man bench, so his first squad of the season waits for Tuesday at the earliest. Isak, sixteen touches, leads the line alone with Ekitike a January hope and Chiesa out until the break; Iraola said Endo 'will have his moments' but is fourth in a queue of pivots. The strain is now the thing Alisson named on Sky: Wednesday, Saturday, Tuesday, and a squad that has to cope.",
  minutesNote:
    "Premier League minutes are not published here yet. Four league games and one Champions League game have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "January at the earliest: 'a reasonable chance' of the last two Champions League league-phase games (Inter 19 Jan, Lens 27 Jan per This Is Anfield); no league date", note: "Saturday evening, and the afternoon Liverpool could not score in was the afternoon his absence was felt most: Isak touched the ball 16 times and the fallback, Gakpo as a false nine, came on as a right winger instead. Friday's press conference was the first time the club attached a month: 'a hope and a realistic chance that he could help us in January', with 'a big part of the rehab still to meet'. Sports Mole and 3 Added Minutes had pencilled late November; that reads optimistic.", source: "Liverpool FC / This Is Anfield / Hayters" },
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
    { position: "Wide forward", level: "high", detail: "Saturday night, and the department is whole again but tired: Gakpo back with thirty minutes, Barcola on a third involvement in nine days with no pre-season, Ngumoha and Munoz both rated 4 by Rousing The Kop in their outings, and Chiesa still out until the break. Tuesday's cup tie is 72 hours on and Bournemouth follows five days later; the question is not who is fit but who has anything left, and Iraola's answer on Saturday, rotate, lasted an hour." },
    { position: "Centre-forward", level: "high", detail: "Isak alone, and alone in a different sense on Saturday: 16 touches in 90 minutes, the second fewest for a Liverpool outfielder on record per the BBC. Ekitike is January at the earliest, Gakpo, the false-nine fallback, was used on the right, and Koumas sat on a bench for a fifth time. A third match in seven days made him start all three; the cup tie on Tuesday is where a rest would have to come, if it comes." },
    { position: "Left-back", level: "high", detail: "New to the list, and up from unrated on the evidence of the afternoon: Tsimikas, a first start of the season, misplaced 11 of 31 passes and was withdrawn at half-time, a 3 from Rousing The Kop, and Kerkez came on to 'yet more dreadful crossing' by SI's account. Two senior left-backs and, per SI, neither currently up to the manager's standard; the rotation the position was supposed to allow has just been shown not to work." },
    { position: "Central midfield", level: "medium", detail: "Up from low after one hour of Gravenberch and Szoboszlai together: two of ten first-half ground duels won, Szoboszlai none of six per Rousing The Kop, both rated 3, and the game settled only when Mac Allister came on. The Argentine, unrenewed by the club's own account, is now the one the site calls undroppable; Endo, Iraola said, 'will have his moments' but is fourth in the queue; Nyoni unused again." },
    { position: "Centre-back", level: "high", detail: "Van Dijk and Jacquet played the ninety for a fifth straight match, Jacquet the best player on the pitch by both ratings cards and the reason there was a point. Gomez, in full training, was left out of the squad again, so the fourth senior body has still not been on a bench; Araujo is needed at right-back, Leoni not with the group until the break. Until Gomez is named, one injury and Endo plays centre-half in the league." },
    { position: "Right-back", level: "medium", detail: "Araujo's third straight start, solid if isolated by Fulham's overloads through Robinson, a 6 and a 6.9; Frimpong came on at 72 and was 'solid enough defensively' with a 6 and a 6.9, the better of the late changes. Gomez remains the third body once he is finally named in a squad. Bradley has no date." },
  ],
  sources: ["Liverpool FC", "This Is Anfield", "Hayters", "Sports Mole", "3 Added Minutes", "BBC Sport", "SI", "FotMob", "Rousing The Kop", "The Independent", "Sky Sports", "Opta Analyst", "Liverpool Offside"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-13T08:30:00Z",
  played: 4,
  points: 6,
  pointsPerGame: 1.50,
  projectedPoints: 57,
  projectedFinish: "Conference League places on current pace",
  headline:
    "The pace has not moved since Saturday because nothing has been played, and it still sits a tier lower than the unbeaten record flatters: six points from four, 1.50 a game, a projected 57, between the historical Conference League and Europa League lines rather than on the latter. One draw at home to a side that arrived pointless moved the projection by six points, which is still the sample talking, but the shape is now less flattering than the unbeaten record: one win in four, and three of the six points taken from stoppage-time and second-half comebacks. The honest reading remains that Bournemouth on the 20th and Manchester City on 11 October give the season its first real spine; the less comfortable one is that the fixtures the pace was supposed to be built on, Forest and Fulham at home, have already gone.",
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
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 5, difficulty: "hard" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 12, difficulty: "medium" },
    { date: "2026-11-01", opponent: "Arsenal", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-11-07", opponent: "Crystal Palace", home: false, competition: "PL", oppPosition: 16, difficulty: "easy" },
  ],
  runInVerdict:
    "One of the two soft fixtures is gone and it returned a point, so Bournemouth away on the 20th, winless and fifteenth after three draws and a defeat, is now the last easy-looking league game before Manchester City, Brentford and Arsenal arrive in a five-week block. Win at the Vitality and Liverpool go into the City game on nine from five, a pace of 1.80 and a projection back in the Europa band; draw again and the projection sits in the mid-fifties on the eve of the three hardest games of the autumn, with the unbeaten record the only thing the table would still say kindly. The Tottenham cup tie on Tuesday is the risk wedged in front of it, 72 hours after a match Iraola said his players were too tired for, with a front line one senior nine deep and a bench that has just been shown not to hold.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "This Is Anfield", "BBC Sport"],
};
