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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Fri Sep 11, afternoon — fined, dropped by his country, and still Saturday's goalkeeper. The FA confirmed on Thursday an £8,000 penalty for misconduct in the tunnel after the Forest draw, the numbers board that had jammed mid-match taking the brunt after a penalty the KMI panel has since called wrong; he accepted the charge and there is no ban. The same day Ancelotti left him out of Brazil's squad for the break to 'prioritise the younger ones', so he stays on Merseyside. Beaten once by Llorente on Wednesday, the Alvarez save the one that mattered. Fulham at 3pm, Tottenham in the cup on Tuesday where Mamardashvili is the likelier keeper", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Fri Sep 11, afternoon — the deputy's week improved without him touching a ball: Alisson was fined £8,000 by the FA on Thursday and left out of Brazil's squad, so the No. 1 is rested through the break rather than flown to Australia. Mamardashvili has not played since the tour; the Carabao Cup tie against Tottenham at Anfield on Tuesday, 8pm, three days after Fulham, is his likeliest start of the month, as it was before Iraola's noon briefing said nothing to change it", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Fri Sep 11, evening — the partnership got its number on Friday: Opta has Jacquet, beside him for all four games, winning 18 of 25 duels, second in the league only to Tarkowski, which is the young man's stat and the captain's reassurance. Van Dijk played ninety minutes in Wednesday's 2-1 over Atletico, a 5 from Rousing The Kop for a couple of loose first-half passes, a 6.5 from The 4th Official, beaten once as a pair by Llorente's run behind Kerkez. Football Insider's Thursday rumour that he is 'tempted' by offers for 2027 remains unconfirmed by the club or any tier-one outlet; the April 2025 contract is the only settled fact. Three home games in seven days from Saturday, with Gomez now nearing a first bench behind him", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Fri Sep 11, evening — the eve of what the reporting expects to be a first matchday squad of the season. 3 Added Minutes has Gomez, in full training since Wednesday after the muscle injury in the Sunderland friendly in July, in line for the bench against Fulham at 3pm on Saturday, seven weeks on, though Sports Mole's 3pm list still files him under out; the Tottenham cup tie on Tuesday is the likelier first minutes. He was not in Wednesday's European squad. Iraola's Friday answer on Araujo, that right-back 'probably is not his main position', is the reminder of why a fit Gomez matters: a fourth senior centre-back and a third right-back option in one body", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Fri Sep 11, afternoon — cleared, and the only question left is whether Iraola rests him anyway. Sports Mole's Friday XI puts Tsimikas in for Kerkez with the Tottenham cup tie three days later, though Iraola's noon briefing did not raise it and Thursday's update had him fatigued rather than hurt after coming off on 88 against Atletico, the left-back tying the cramp to the pressing. On the night he was beaten by Llorente for the opener, a 3 from Rousing The Kop, then won the ball for the equaliser. With no senior deputy, Bobb or Berge and Robinson are Saturday's assignment", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Fri Sep 11, evening — the manager described the man in his shirt on Friday as a centre-back playing out of his main position and doing very well, which is both a compliment to Araujo and the reason nobody is hurrying Bradley. He remains out with the left knee ligament damage from January, no date, still in the Champions League squad; Sports Mole pencils Manchester United on 21 November as the earliest return, and Iraola, asked about long-term injuries on Friday, spoke only of Ekitike. Two starts, a clean sheet and a backheel assist for Araujo, whose move Warnock now calls permanent, mean the department can wait", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Fri Sep 11, evening — an impact option again on Saturday unless Sports Mole's rotation call is right: their 3pm listing rests Barcola, whom it files as doubtful, for Munoz rather than Frimpong, and 3 Added Minutes starts Barcola on the right. Iraola said on Friday the players with less preparation, Barcola among them, are not yet at their best, and that Araujo, in a position that 'probably is not his main position', has done very well, so both roads to a start run through other men. Frimpong came on for Barcola at 59 on Wednesday, played on the right, and had the ball in the net at 89 before the offside flag; Rousing The Kop's 5 said he looked better than recently. The Tottenham cup tie on Tuesday is his likelier route to ninety", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Fri Sep 11, evening — the eve of a match he will watch, with the plan unchanged and the pair ahead of him settling. Leoni stays on Iraola's timetable, group training during the September international break with no matchday attached, in the Champions League squad but not needed on Wednesday when Van Dijk and Jacquet played the full ninety; Opta's Friday notes give Jacquet 18 of 25 duels won, the department's best number since Leoni's own injury a year ago. Iraola, asked about long-term injuries on Friday, spoke of Ekitike and January; Leoni's own reporting still has Manchester City on 11 October as the earliest guess", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Fri Sep 11, evening — Opta's pre-match notes gave him the number of the week: 18 of 25 Premier League duels won, 72 per cent, a rate only Tarkowski betters among players with twenty or more, and fifth in the league for line-breaking passes into the final third. Jacquet has started all four competitive games beside Van Dijk and was the better of the two on his Champions League debut by Rousing The Kop's reckoning, a 7 from both fan sites, beaten once as a pair by Llorente's run behind Kerkez. Gomez is in line for a first bench per 3 Added Minutes, the first fit senior centre-back behind the pair since August; Garcia and King, and possibly Affengruber at the other end, are Saturday's test", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Tue Sep 1 — out on loan, as the club always meant him to be. Ndukwe joined Levante on a season-long loan agreed on deadline day, the Spanish club covering his wage. Six foot six and nineteen, he was Liverpool's standout defender beside Van Dijk against Monaco in pre-season, but born in Austria and short of the points a post-Brexit work permit demands, he could not play a competitive fixture for Liverpool this season. A year in La Liga is the plan", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Wed Sep 9, evening — twenty yards, left foot, top of the net, a day after 'very, very sad'. Mac Allister won Iraola's first Champions League night 2-1 with a drive from outside the box in the 50th minute, his name chorused when he came off; Rousing The Kop's man of the match on an 8, a 9 from Liverpool.com, a 7.5 from The 4th Official. Booked early and, Iraola said, provoked into a second for the rest of the game, which he survived. Opta: five of his 20 Liverpool goals from outside the area, and no player on the pitch won more duels than his five. The contract has not moved; the argument for one has", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Fri Sep 11, afternoon — three games on the bench, and now the subject of a feature asking why. Sports Mole's Thursday piece argues Iraola trusts Mac Allister's positioning without the ball over Gravenberch's physical tools after a 2025-26 the site calls his worst at the club, and that the six-year deal signed in March makes him an awkward player to leave out for long; a 4 from Rousing The Kop off the bench on Wednesday, sloppy in possession, did not help the case. SI had him pencilled to start against Fulham; the pivot that scored both goals against Atletico makes that a rotation call at best, with Tuesday's cup tie likelier", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Fri Sep 11, evening — the pivot Iraola wants to see impose itself earlier: 'we are not starting the games too well,' he said on Friday, three comebacks in four, and the second halves the better ones. Szoboszlai rolled past Oblak five minutes before half-time on Wednesday after Kerkez won it from Lee and Araujo, whom the manager described on Friday as a centre-back excelling out of position, flicked it through his own legs; an 8.5 at the top of The 4th Official's ratings. Opta counts ten Champions League goal involvements for him since the start of last season, double any other Liverpool player. Signed to 2031. Fulham at 3pm on Saturday, a fourth straight two-goal game the club-first Opta is watching for", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Wed Sep 9, evening — ineligible for the European night, and the bench that replaced him carried Chambers, McConnell and Danns. Endo was left off the 25-man Champions League list with McConnell preferred, so the 2-1 over Atletico was watched, not played; he remains the league-only emergency centre-half and a Carabao Cup starter on Tuesday against Tottenham if Iraola rotates. Fulham on Saturday is a squad place at most", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Fri Sep 11, evening — the man he played through on Wednesday is cleared and, per Isak's Friday interview, 'a big signing for us', so the pass has the same recipient on Saturday and still no assist against it. Wirtz ran the game for a spell in the 2-1, pressed and won the ball high in a way Rousing The Kop called underrated, and sent Barcola clean through early in the second half for a finish rolled wide; a 7 from both fan sites, his own shot saved by Oblak. Still without a goal or assist in four, and Iraola's reading of Fulham, sixty-something per cent of the ball and a block that has conceded its way out of games, is the kind of afternoon he was signed for", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Fri Sep 11, afternoon — the case for him got a paragraph in Sports Mole's Gravenberch feature, which names Nyoni as a possible claimant on the starting XI while the Dutchman sits for a third game. He was unused on the European bench on Wednesday with McConnell and Danns beside him; his new contract remains unsigned per the weekend reporting. The Carabao Cup tie against Tottenham on Tuesday is his likeliest minutes of the week", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "doubtful", injuryNote: "Fri Sep 11, evening — the session that was to decide it has produced no published verdict. Iraola said at noon that Gakpo, who did not train on Thursday, would be tried in Friday afternoon's session to see whether he is ready for Saturday or waits for Tuesday's cup tie; by the evening neither the club nor the team-news round-ups had an answer, Sports Mole's 3pm listing keeping him doubtful with the adductor niggles. A goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes, so the front three's shape hangs on him; Ngumoha (3 Added Minutes) or Munoz (Sports Mole) starts on the left if he waits", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Fri Sep 11, evening — 332 minutes in four starts, and a striker talking like a man who has learned not to tempt anything. 'It's just about keeping this rhythm,' he told the club on Friday; the Ipswich brace 'is how I want to play and that's how I want to score goals', but it is early days. The fibula he broke scoring at Tottenham last December held him to thirteen starts in 2025-26; Iraola said on Friday he 'looks free, he moves with confidence' and is understanding the No. 9 role better, and that he will not judge him on goals alone. Opta: a goal on Saturday makes three league games running for the first time since a run of eight in January 2025. With Ekitike now a January hope and Gakpo unresolved, he starts against Fulham and probably Tottenham", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Fri Sep 11, evening — a month, at last, if not a date. Iraola said at Friday's press conference that there is 'a reasonable chance' Ekitike can help in the last two Champions League league-phase games, Inter on 19 January and Lens on 27 January by This Is Anfield's reading, and that he was registered in Europe 'because there is a hope and there is a realistic chance that he could help us in January'; a big part of the Achilles rehab is still to come and it is very early, he added. It is the first time the club has attached any month to April's rupture, Sports Mole's late-November pencilling now reading optimistic. Until then Isak is the only fit senior nine across Fulham and Tuesday's cup tie", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Fri Sep 11, evening — the left is still his to lose, because the verdict that would take it away has not been published. Gakpo's Friday afternoon session was to settle Saturday or Tuesday and nothing had emerged by the evening; 3 Added Minutes' XI starts Ngumoha on the left, Sports Mole's starts him too with Munoz on the right. His first European start on Wednesday, in which he worked Llorente out over time and went outside him in the build-up to the winner per Rousing The Kop, ended in cramp on the hour; his Thursday club interview on the Anfield noise and Iraola's demand that he defend as well as attack stands. Fulham at 3pm, then the cup tie on Tuesday", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Wed Sep 9, evening — off the Champions League list, he watched the 2-1 over Atletico from outside, and the wingers who played in his absence both cramped. Chiesa's back problem keeps him out until the September international break, when he rejoins group training per Iraola, which closes Fulham on Saturday, the Tottenham cup tie and Bournemouth too; Rush The Kop guesses Manchester City on 11 October as the earliest return", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Fri Sep 11, afternoon — third keeper, and the week's goalkeeping news happened to the first: Alisson fined £8,000 by the FA and omitted by Brazil, which keeps him at the club through the break. Woodman was on the European bench with Mamardashvili on Wednesday and unused; the Carabao Cup tie against Tottenham on Tuesday is the one fixture this month that might use either deputy", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Fri Sep 11, evening — one of two team-news round-ups starts him, and the manager's afternoon answers made the case for the other. Sports Mole's 3pm listing puts Munoz on the right and rests Barcola, whom it files as doubtful with cramp; 3 Added Minutes keeps Barcola and leaves Munoz on the bench. Iraola's full Q&A said the players with less preparation, Barcola among them, are not yet at their best, which reads either way. Gakpo's afternoon test went unreported, so Munoz remains a decision away from the left or the right. Off the bench on Wednesday he tested Oblak after dancing through a challenge; a 5 from Rousing The Kop, a 6 from The 4th Official. Fulham at 3pm on Saturday, the cup tie on Tuesday likelier for a start", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Fri Sep 11, evening — the adjustment, in Iraola's telling on Friday, was the language before it was the position. 'Probably the biggest challenge was first the language, he doesn't speak English,' the manager said, adding that the move itself has helped 'a little bit mentally' after so many years at Barcelona, that the substitute appearances against Forest and Newcastle built confidence, and that right-back 'probably is not his main position' but he has done very well in it. Warnock told TEAMtalk on Friday morning the switch is permanent, Jacquet inside beside Van Dijk; FootballTransfers has the loan's €55m option and Araujo happy to stay. Two starts there, a clean sheet at Ipswich, an 8 and the backheel assist against Atletico; Bobb or Berge on Saturday", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Fri Sep 11, evening — cleared, and now vouched for by the man he will play beside. Isak told the club on Friday that Barcola is 'a big signing for us', a great player who will make the team much better, 'we're really excited'; Iraola, in the same afternoon's Q&A, tied Wednesday's cramp to a player who 'hasn't had a proper pre-season' and said the ones with less preparation are not yet at their best. Sports Mole still lists him doubtful and rests him for Munoz; 3 Added Minutes starts him on the right. First start against Atletico, two clear chances missed against Oblak, off at 59; Fulham on Saturday would be a third involvement in nine days", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  generatedAt: "2026-09-11T22:20:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
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
  generatedAt: "2026-09-11T22:20:00Z",
  overview:
    "Friday evening on the eve of matchweek four, and the table has been the same document for five days: every side on three games, Liverpool sixth on five, unbeaten, inside a knot of five sides on five points that goal difference and goals scored have to separate. What Saturday can do to it is the only live question. Beat Fulham, nineteenth and pointless, and Liverpool go to eight, past Chelsea's six and Hull's seven into third for an afternoon, at least until Hull play at Chelsea and Brentford, Newcastle, Everton and Leeds play their own games over the weekend and Sunday night settles the order. Iraola's own reading, offered on Friday, is that Fulham have lost all three by a single goal and would have four or five points on the eye test, which is the kind of thing managers say about pointless opponents and also, on the possession numbers, true. Above the knot City and Arsenal are perfect on nine and Hull, promoted, sit third on seven with Chelsea away on Saturday. Below it Tottenham, eighteenth, come to Anfield in the cup on Tuesday, and Bournemouth, fifteenth and winless, host on the 20th.",
  teams: {
    "Liverpool": "Sixth on five, unbeaten, level with three others. Fulham at 3pm on Saturday is the first chance to leave the five-point knot; a fourth straight Anfield league draw would be the first since November 2011, per Opta.",
    "Manchester City": "Top on nine, ahead of Arsenal on goals scored only, after riding their luck against Coventry by Opta's reading. At Anfield on 11 October.",
    "Arsenal": "Second on nine, and the only side to have beaten Chelsea; won at Napoli on Wednesday in Europe. At Anfield on 1 November.",
    "Hull": "Third on seven, unbeaten and promoted, the row nobody predicted. Chelsea away this weekend is the first real test of it.",
    "Chelsea": "Fourth on six, the total Liverpool would pass by beating Fulham. Host Hull on Saturday.",
    "Brentford": "Fifth on five, above Liverpool by a goal of difference and wearing ESPN's Europa stripe for it. Host Liverpool on 17 October.",
    "Newcastle": "Seventh on five, level with Liverpool on points and goal difference, behind on goals scored.",
    "Everton": "Eighth on five, a point rescued at the death against Manchester United by Maitland-Niles; Opta calls their squad too thin.",
    "Bournemouth": "Fifteenth on two and winless; Liverpool visit the Vitality on Sunday 20 September, 2pm.",
    "Tottenham": "Eighteenth on one, in the relegation stripe. At Anfield on Tuesday 15 September in the Carabao Cup, 8pm, three days after Fulham.",
    "Fulham": "Nineteenth, pointless, three defeats by a goal apiece. Arbeloa told the Evening Standard on Friday that Saturday is where a message gets sent, and named deadline signing Affengruber fit to start; Cairney and De Fougerolles out. One away win in eleven league trips in 2026.",
    "Coventry": "Bottom, pointless, the only side yet to score, and by Opta's account unlucky not to take something from the Etihad.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "A Date, At Last, For The Man Who Is Not Here.",
    byline: "Liverpool FC / This Is Anfield",
    dateline: "AXA Training Centre · 11 September",
    category: "Injuries",
    body:
      "The most durable thing Iraola said on Friday concerned a striker who will not be at Anfield on Saturday. Asked about Hugo Ekitike, five months into an Achilles rehabilitation nobody had dated, he allowed that there is 'a reasonable chance' he could help in the last two Champions League league-phase games, which This Is Anfield reads as Inter on 19 January and Lens on the 27th. The European registration, he explained, was not sentiment: 'there is a hope and there is a realistic chance that he could help us in January.' A big part of the rehab is still to come, he said, and it is very early. It is also the first time the word January has been attached to the name by the club, and on a front line with one fit senior nine that is a date worth writing down."
  },
  {
    n: "02",
    headline: "Send A Message.",
    byline: "Evening Standard / BBC Sport",
    dateline: "Motspur Park · 11 September",
    category: "Football News",
    body:
      "Arbeloa spent his lunchtime briefing on Instagram and his evening one on intent. 'Tomorrow is where we have to send a message for us,' he told the Evening Standard, three defeats and no points into his first Premier League job, 'we need to win games and that has to be our message.' He named David Affengruber, the deadline-day centre-back, fit to start, and set out the plan without disguise: a low block sometimes, a medium block sometimes, and above all a thought for what happens when the ball is lost, which is where Chelsea, Sunderland and Palace all found them. He told the BBC that Kenny Tete, without a league minute this season, must keep being patient, and that returning to Anfield as a coach will be so special. It will also be a first Premier League game against the club he played 66 league matches for. Ex-Reds in that seat are nought from five."
  },
  {
    n: "03",
    headline: "Three Defeats By A Goal, And A Manager Who Rates Them.",
    byline: "Liverpool FC",
    dateline: "AXA Training Centre · 11 September",
    category: "Tactics",
    body:
      "Iraola's Friday Q&A was generous about Fulham in a way that read as a warning to his own side. They have 'lost their three games by one goal', he said; watch the matches without knowing the points and 'you will think they will have four, five points at least', sixty-something per cent of the ball, technically lovely players who are hard to press. What has cost them is goals conceded, and he expects that to have been worked on. The other half of his answer was about Liverpool's own bad habit. Two goals in every game so far, chances to score more, but 'we are not starting the games too well', and the second halves have been the better ones. He would like to score first, he said, because everything looks easier. Three of four this season he has had to come from behind to find out."
  },
  {
    n: "04",
    headline: "Three Hundred And Thirty-Two Minutes.",
    byline: "Liverpool FC",
    dateline: "AXA Training Centre · 11 September",
    category: "Football News",
    body:
      "Alexander Isak has started all four matches this season and played 332 minutes of them, which is a sentence that could not have been written about any four-game stretch of his first Liverpool year. He said as much to the club on Friday, in the register of a man who has learned not to tempt anything: 'really good that the season has started again', feeling good, scoring a couple, 'it's just about keeping this rhythm'. The fibula he broke scoring at Tottenham last December limited him to thirteen starts. He called the year challenging, took the learning from it, and thanked the Kop for backing him through it. On Barcola, beside whom he started for the first time on Wednesday, he was plain: a big signing, a great player, 'we're really excited'. Opta adds the footnote: a goal on Saturday would be three league games running, a sequence he last managed in January 2025, when it ran to eight."
  },
  {
    n: "05",
    headline: "Exactly Two.",
    byline: "Liverpool FC / Opta",
    dateline: "Anfield · 11 September",
    category: "Football News",
    body:
      "The club's pre-match statistics, compiled with Opta and Ged Rea, contain one line that reads like a dare. If Liverpool score exactly twice on Saturday it will be the first time in their history they have done so in each of the opening four league games of a season, and they have already done it in Europe too. Beside it sit the quieter numbers of a defence finding itself: Jeremy Jacquet has won 18 of 25 Premier League duels, 72 per cent, a rate bettered only by James Tarkowski among players with twenty or more, and he is fifth in the league for line-breaking passes into the final third, at twenty. The awkward line is the home one. Three straight league draws at Anfield, the longest winless run there since the empty spring of 2021, and a fourth would be a first since November 2011. Fulham have won one of eleven away league games in 2026. Something has to give at three."
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-11T22:20:00Z",
  summary:
    "Friday evening, and the firmest piece of news from the AXA concerns a player who will not be at Anfield tomorrow: Andoni Iraola said there is 'a reasonable chance' Hugo Ekitike can help in the last two Champions League league-phase games, Inter on 19 January and Lens on 27 January per This Is Anfield, and that his European registration was made 'because there is a hope and there is a realistic chance that he could help us in January', the first date of any kind attached to April's Achilles rupture. The same briefing left Cody Gakpo's Fulham availability to the afternoon session, and no verdict had been published by the evening. Beneath it the day filled with the fixture: Iraola's full Q&A, in which he said Fulham 'have lost their three games by one goal' and would have four or five points on the eye test; Alexander Isak telling the club he wants 'to keep this rhythm' after 332 minutes in four starts; and Alvaro Arbeloa, via the Evening Standard, promising 'we need to send a message tomorrow' with deadline signing David Affengruber fit to start. Opta's pre-match notes give Jacquet 18 of 25 duels won and note that a fourth straight league game with exactly two goals would be a club first, and the Premier League moved three festive fixtures, Hull on Boxing Day at 5.30. Liverpool, sixth on five and unbeaten, kick off at three on Saturday against a pointless Fulham; Tottenham follow in the Carabao Cup on Tuesday.",
  keyTopics: [
    {
      title: "Ekitike Gets A Month, If Not A Date: Iraola Sees 'A Reasonable Chance' Of The January Champions League Games, 'A Hope And A Realistic Chance' (Liverpool FC / This Is Anfield, today)",
      detail:
        "The one new fact from Friday's press conference, published by the club in the afternoon and picked up by This Is Anfield, SI and Hayters within the hour. Asked about Ekitike, Iraola said long-term injuries are difficult and he is 'still far', but that a meeting with the medical department before the European list was filed produced 'a reasonable chance that he could help us in the last two games of the group stages', Inter at Anfield on 19 January and Lens on 27 January by This Is Anfield's reading. 'It is because there is a hope and there is a realistic chance that he could help us in January,' he said of the registration, while stressing a big part of the rehab is still to come. Until Friday the only framing was 'no timeframe'; Sports Mole and 3 Added Minutes had pencilled late November. SQUAD_LOAD now carries January as the earliest.",
      category: "injuries",
    },
    {
      title: "Arbeloa's Evening Line: 'Tomorrow Is Where We Have To Send A Message', And Deadline Signing Affengruber Is Fit To Start (Evening Standard, today)",
      detail:
        "The Evening Standard's Friday-evening piece, filed after the lunchtime PA round, has the Fulham manager moving from mood to instruction: 'We need to win games and that has to be our message,' he said, adding that zero points is 'not well enough' whatever they have done well. David Affengruber, signed from Sturm Graz on deadline day, is fit to start, the one selection change of substance from the Palace defeat. Arbeloa described the work of the week as balance, a low or medium block at times and a first thought for losing the ball rather than scoring, and repeated that he did not come 'for three games or a month'. Cairney and De Fougerolles remain the absentees.",
      category: "matches",
    },
    {
      title: "Iraola's Full Q&A: Fulham 'Have Lost Their Three Games By One Goal', Would Have 'Four, Five Points' On The Eye Test, And Liverpool 'Are Not Starting The Games Too Well' (Liverpool FC, today)",
      detail:
        "The club published the full press-conference transcript on Friday evening, and the manager's reading of Saturday's opponent is the most generous anyone has offered them this week: sixty-something per cent of possession, 'technically lovely players' who are hard to press, three defeats by a single goal, a side he says has controlled its games and been undone by goals conceded. His own team's fault, in the same answer, is the first twenty minutes: two goals in every game, chances for more, but 'I would like, obviously, to score the first goal', because three of four have needed a comeback. He also said the second halves have been the better ones and that he wants to impose the side from the start. Of Arbeloa: rivals for a Spain place once, and the more successful of the two in caps.",
      category: "tactics",
    },
    {
      title: "Isak, 332 Minutes In: 'It's Just About Keeping This Rhythm', A Fibula Remembered, And Barcola 'A Big Signing For Us' (Liverpool FC, today)",
      detail:
        "The club's Friday interview with the striker, who has started all four matches this season for 332 minutes after a first Liverpool year of thirteen starts and a fibula fracture sustained scoring at Tottenham last December. 'I'm feeling good with the pre-season and the start of the season as well, scoring a couple of goals,' he said; the Ipswich display 'is how I want to play and that's how I want to score goals', but it is early days. He called the past twelve months challenging, with beautiful moments and learning in them, and said the fans' backing 'means a lot'. On Barcola, beside whom he started for the first time on Wednesday: a great player, someone to make the team much better, 'we're really excited'. Iraola separately said Isak 'looks free, he moves with confidence' and is understanding the No. 9 role better.",
      category: "general",
    },
    {
      title: "Opta's Pre-Match Notes: Exactly Two Goals Four Times Running Would Be A Club First, Jacquet Has Won 18 Of 25 Duels, And Ex-Reds Managers Are Nought From Five (Liverpool FC / Opta, today)",
      detail:
        "The club's Friday statistics page, compiled with Opta and Ged Rea. If Liverpool score exactly twice on Saturday it will be the first time in their history they have done so in each of the opening four league games. Jacquet has won 18 of his 25 Premier League duels, 72 per cent, a rate only Tarkowski betters among players with twenty or more, and is fifth for line-breaking passes into the final third. Isak scoring would make three league games in succession for the first time since a run of eight in January 2025. Former Liverpool players managing against them in the Premier League have lost all five meetings: Ince once, Pellegrino and Gerrard twice each, with Arbeloa's first on Saturday. And the home line: three straight Anfield league draws, the longest winless run there since spring 2021, with a fourth a first since November 2011; Fulham have won one of eleven away league games in 2026.",
      category: "matches",
    },
    {
      title: "Koumas Was Never Going Anywhere: 'The First Week I Was Here, I Already Told The Club He Was Staying All The Season' (Liverpool FC, today)",
      detail:
        "A press-conference answer from Friday that settles a summer question retrospectively. Asked about Lewis Koumas, who made his European debut off the bench on Wednesday, Iraola said he decided within his first week that the 20-year-old stays for the season because 'he covers us on the seven, on the nine, on the 10, on the 11', trains well, scores goals and has Championship experience at a high level from his loan. He praised the mentality: sometimes on the ball, sometimes attacking space for someone else, 'he understands this'. With Ekitike months away and Chiesa out until the break, Koumas is the only other forward who has been on a bench this season, which is what the answer was really about.",
      category: "general",
    },
    {
      title: "Araujo's Real Adjustment Was The Language: Iraola Says The Uruguayan 'Needed This Kind Of Change' After Years At Barcelona, And Right-Back 'Is Not His Main Position' (Liverpool FC, today)",
      detail:
        "The manager's Friday answer on the loanee, a day after Warnock's reading that the right-back move is permanent. Iraola said Araujo is used to big games, the Champions League and fighting for titles, and that 'probably the biggest challenge was first the language, he doesn't speak English', with help arriving from inside the dressing room. He thinks the move itself has helped 'a little bit mentally' after so many years at Barcelona, credited the two substitute appearances against Forest and Newcastle for confidence, and said that when the chance to start came, 'in a position where he has played before but probably is not his main position', he did very well. Two starts, a clean sheet, an 8 and the backheel assist; Bobb or Berge on Saturday.",
      category: "tactics",
    },
    {
      title: "Two Predicted XIs, One Disagreement: Sports Mole Rests Kerkez And Barcola For Tsimikas And Munoz, 3 Added Minutes Starts Barcola, Wirtz And Ngumoha; Eight Out Or Doubtful (Sports Mole / 3 Added Minutes, today)",
      detail:
        "Friday's team-news round-ups agree on the spine and split on the flanks. Sports Mole's 3pm listing has Gakpo, Barcola and Kerkez all doubtful, cramp for the second two, and names Alisson; Araujo, Jacquet, Van Dijk, Tsimikas; Mac Allister, Szoboszlai; Munoz, Wirtz, Ngumoha; Isak, with Bradley, Leoni, Ekitike, Gomez and Chiesa out. 3 Added Minutes, filed at 9.56am, counts eight first-team players out or doubtful, calls Gakpo the real concern as he had not returned to training by Friday morning, and goes Alisson; Kerkez, Van Dijk, Jacquet, Araujo; Mac Allister, Szoboszlai; Barcola, Wirtz, Ngumoha; Isak, with Gomez possibly on the bench and Bradley and Ekitike earmarked for late November, a date Friday's press conference has since pushed back. Neither had the Gakpo verdict by the evening.",
      category: "matches",
    },
    {
      title: "Arbeloa To The BBC: Tete 'So Important' Despite No League Minutes, The Fix Is 'Control The Transition', And Anfield Will Be 'So Special' (BBC Sport, today)",
      detail:
        "The BBC's Millie Sian filed the lunchtime briefing from a different angle to the PA round: Kenny Tete, without a Premier League minute this season, remains 'so important' in the dressing room and was urged to keep working and being patient; the week's training has been about the first thought after losing the ball, 'we need to control the transition, that's very clear to me'; and Liverpool are 'so aggressive', high-pressing, quick in attack, with quality throughout. Tom Cairney, recovering from minor knee surgery, should be nearing training after the break. On the Anfield return, two and a half years there as a player: so special, and a first time back as a coach.",
      category: "matches",
    },
    {
      title: "Festive Fixtures Moved: Hull Away On Boxing Day At 5.30, Villa Away On 30 December, Sunderland Away On 5 January, All On Sky; Coventry At Anfield Stays 3pm On 2 January (Liverpool FC / This Is Anfield, yesterday)",
      detail:
        "Thursday's announcement, carried by the club and This Is Anfield, brought forward three festive changes to help supporters plan travel: Hull City v Liverpool moves to 5.30pm on Saturday 26 December, Aston Villa v Liverpool to 8.15pm on Wednesday 30 December, and Sunderland v Liverpool to 8.15pm on Tuesday 5 January, all three live on Sky Sports. Coventry City at Anfield remains a 3pm kick-off on Saturday 2 January. Three away trips in ten days across Christmas, one of them to the promoted side currently third; further selections for November and December are still to come.",
      category: "general",
    },
  ],
  sources: [
    "Liverpool FC",
    "This Is Anfield",
    "Evening Standard",
    "BBC Sport",
    "Sports Mole",
    "3 Added Minutes",
    "SI",
    "Hayters",
    "PA",
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
  generatedAt: "2026-09-11T22:20:00Z",
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
    "By Friday evening Arbeloa had turned the week's question, whether his dressing room is with him, into an instruction. 'Tomorrow is where we have to send a message for us,' he told the Evening Standard, 'we need to win games and that has to be our message,' and he named David Affengruber, the deadline-day centre-back from Sturm Graz, fit to start; earlier, via PA and the BBC, he had answered Kevin's Instagram story and the wiped feeds of Iwobi and Smith Rowe with the line that you learn more about a group after a defeat, and said Kenny Tete, minute-less this season, must keep being patient. The record underneath is unchanged and, by Iraola's reading on Friday, kinder than it looks: three defeats by a single goal each, sixty-something per cent of the ball, 'technically lovely players', a side that has controlled games and conceded its way out of them. Pointless after three, nineteenth on goal difference, booed off Craven Cottage after leading Palace twice and losing 3-2; only twice before, in 1951-52 and 2020-21, have Fulham opened a top-flight season with three defeats, and both ended in relegation. This is a new project rather than an old one failing: Marco Silva left in the summer, Arbeloa arrived from Real Madrid's coaching ranks on a three-year deal, the board spent on his Madrid connections, Gonzalo Garcia for a record-equalling £34m, Cesar Palacios alongside him, Shea Charles from Southampton for £26m, Jonah Kusi-Asare made permanent, with Diop and Lukic sold to Ipswich and Wilson and Jimenez gone free. Chelsea scored after 31 seconds on the opening Monday and won 3-2; Sunderland beat them 1-0 with a 75th-minute Isidor goal; Palace turned two Fulham leads into a Mitchell double and a Chilwell winner despite an expected-goals total Sky recorded at 3.13. Cairney and De Fougerolles, both knees, are out. A 3-0 Carabao Cup win over AFC Wimbledon is the only victory of the tenure; the club's stats page adds that Fulham have won one of eleven away league games in 2026, and that ex-Liverpool players managing against them in the Premier League are nought from five.",
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
    "Iraola's own scouting report, delivered at Friday's press conference, is the frame: Fulham have lost all three by a goal, kept sixty-something per cent of the ball and been beaten by what happens when they lose it, and he expects Arbeloa to have spent the week on that, which Arbeloa, in the same afternoon, confirmed ('control the transition, that's very clear to me'). The collision is with Liverpool's own two highest-severity patterns in FORM_TRENDS.diagnosis, conceding first and the fast-break concession: Iraola said on Friday that 'we are not starting the games too well' and that he would like to score first for once, and a Fulham side told to sit in a medium block and break is built to punish exactly the slow start and the pass through the seam that Llorente exploited on Wednesday. Their threat runs at the left, Bobb or Berge wide right, King dropping off Garcia between the lines, Robinson overlapping, into Kerkez, who was beaten for the Llorente goal and is one of three Sports Mole lists as doubtful with cramp; SQUAD_LOAD.depthRisk still marks the wide-forward department high, with Gakpo's afternoon test unreported by the evening and Barcola asked for a third involvement in nine days. The other reading is the numbers': no clean sheet, two leads thrown away, one away win in eleven this calendar year, against a Liverpool side that has scored exactly twice in every game, has Isak on three in three with a rising xG per shot, and has Jacquet winning 18 of 25 duels behind it. The predicted XI is Sports Mole's Friday listing, Bassey and Berge into the Palace side; Affengruber, now fit, is the alternative at centre-back and 3 Added Minutes' Fulham view keeps Ughelumba and Bobb. Tom Bramall referees. Three o'clock, no television, and a fourth straight Anfield league draw would be the first since 2011.",
  modelLine: null,
  sources: ["Evening Standard", "BBC Sport", "PA", "Sports Mole", "3 Added Minutes", "Sky Sports", "Squawka", "ESPN", "Liverpool FC", "Opta Analyst"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-11T22:20:00Z",
  competition: "PL",
  played: 3,
  headline:
    "Friday's pre-match Opta notes put a name on a pattern the results column shows only as a row of twos: Liverpool have scored exactly twice in every game this season, league and Europe, and a fourth straight league two on Saturday would be a first in the club's history. Iraola's own diagnosis at the press conference was about the other end of the pitch and the first twenty minutes, 'we are not starting the games too well', three comebacks in four, second halves better than firsts, and a wish to score first for once. The league sample is still three games, 5.00 expected goals for and 4.46 against on mixed sources, conceding first in three of four, both Newcastle goals and Wednesday's opener from runs behind a full-back; against that, Opta's 1.68 to 0.81 against Atletico was the first win earned on chances rather than in spite of them, and the same notes have Jacquet winning 18 of 25 duels, second only to Tarkowski. Isak's rising xG per shot, 0.16 to 0.25, is unchanged and still the individual number of the week. Fulham on Saturday made 3.13 expected goals in losing to Palace and have kept no clean sheet; Iraola rates them the unluckiest pointless side in the league, which is an invitation and a warning at once.",
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
    "If Liverpool score exactly twice against Fulham it will be the first time in their history they have done so in each of the opening four league games of a season, per the club's Opta and Ged Rea notes; they have scored exactly two in all four competitive matches so far, Europe included.",
    "Jeremy Jacquet has won 18 of his 25 Premier League duels this season, 72 per cent, a success rate bettered only by James Tarkowski among players with at least 20 duels, per Opta via Liverpool FC; he is also fifth in the league for line-breaking passes into the final third.",
    "Alexander Isak would score in a third consecutive league match for the first time since January 2025, when the sequence ran to eight, per Opta; his three league goals already equal his 2025-26 total and the average expected-goals value of his shots is up from 0.16 to 0.25.",
    "Ex-Liverpool players managing against them in the Premier League have lost all five meetings, per Opta: Paul Ince with Blackburn in December 2008, Mauricio Pellegrino twice with Southampton in 2017-18 and Steven Gerrard twice with Aston Villa in 2021-22. Alvaro Arbeloa, 66 Premier League games for the club, makes it six on Saturday.",
    "Liverpool have drawn each of their last three top-flight games at Anfield, per Opta, their longest home winless run in the league since December 2020 to March 2021; four home league draws in a row would be the first since November 2011. Fulham have lost two of 33 previous league visits, 1-0 in May 2012 and March 2021.",
  ],
  sources: ["Opta Analyst", "Liverpool FC", "The Independent", "Hayters TV", "Rousing The Kop", "FotMob", "Sofascore", "SI", "This Is Anfield", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-11T22:20:00Z",
  headline:
    "The board's longest line moved on Friday, and it was the one nobody expected to: Ekitike, no timeframe for five months, now has 'a reasonable chance' of the last two Champions League league-phase games in January in Iraola's words, 'a hope and a realistic chance', which is why he was registered. The shortest line did not move at all: Gakpo's afternoon session was to decide Saturday or Tuesday, and no verdict had been published by the evening, so he stays a doubt on this board and in the predicted XI. Barcola and Kerkez remain cleared as tired rather than hurt, though Sports Mole lists all three as doubtful; Gomez, in full training since Wednesday, is in line for a first bench per 3 Added Minutes. Koumas, Iraola confirmed, was always staying, and is the only other forward to have sat on a bench this season. Leoni and Chiesa rejoin group work in the break; Bradley has no date.",
  minutesNote:
    "Premier League minutes are not published here yet. Three league games and one Champions League game have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "January at the earliest: 'a reasonable chance' of the last two Champions League league-phase games (Inter 19 Jan, Lens 27 Jan per This Is Anfield); no league date", note: "Friday's press conference was the first time the club attached a month to the name. 'It's still very early,' Iraola said, 'a big part of the rehab is still to meet,' but the medical department's assessment before the European list was filed gave 'a hope and a realistic chance that he could help us in January'. Sports Mole and 3 Added Minutes had pencilled late November; that now reads optimistic. Isak remains the only fit senior nine across Fulham and Tuesday's cup tie.", source: "Liverpool FC / This Is Anfield / Hayters" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training during the September international break", note: "Iraola's plan has him back with the squad during the break after nearly a year out; no matchday date. Named in the Champions League squad. Not needed on Wednesday, when Jacquet and Van Dijk played the ninety.", source: "Liverpool FC" },
    { name: "Conor Bradley", issue: "Knee", expected: "No timeframe", note: "'Probably Conor will go later,' Iraola said last Thursday. Araujo's second start at right-back on Wednesday, an 8 from Rousing The Kop and the assist for Szoboszlai, has made his absence a smaller story than it was.", source: "Liverpool FC / Rousing The Kop" },
    { name: "Federico Chiesa", issue: "Back (originally muscle, Como friendly, August)", expected: "Rejoins group training during the September international break", note: "Left off the Champions League list, so Wednesday was never in reach; Fulham, Tottenham and Bournemouth are all before the break he is due to train in.", source: "Liverpool FC / Liverpool Offside" },
  ],
  returning: [
    { name: "Cody Gakpo", issue: "Niggles in both adductors, no defined injury", status: "Tested in Friday afternoon's session; no verdict published by Friday evening, so still a doubt for Saturday with Tuesday's cup tie the fallback", note: "The session Iraola said would settle it came and went without a club update by the evening; Sports Mole's 3pm listing keeps him doubtful and 3 Added Minutes had him not yet back in training as of Friday morning. He did not train on Thursday. A goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes, so the answer decides the shape of the front three as much as one place in it; Ngumoha (3 Added Minutes) or Munoz (Sports Mole) starts on the left if he waits.", source: "Liverpool FC / Sports Mole / 3 Added Minutes / Opta Analyst" },
    { name: "Bradley Barcola", issue: "Cramp on his first start; tired rather than injured, per Iraola", status: "Cleared again on Friday: 'no injury', 'should be available if everything goes normal'", note: "Withdrawn at 59 against Atletico looking at his calf. Iraola on Thursday put him and Kerkez together as tired rather than hurt, an issue he ties to a player being rushed through with no pre-season and to the pressing load. Two clear chances missed against Oblak; the manager wants him in the side regardless.", source: "Liverpool FC / Yahoo Sports" },
    { name: "Milos Kerkez", issue: "Cramp against Atletico, withdrawn on 88", status: "Cleared as tired, not injured; expected to face Fulham", note: "New to this list after Thursday's update. Kerkez came off late on Wednesday and tied the tightness to Iraola's pressing, saying it is hard to keep the intensity up for a full ninety, an issue the club flagged in pre-season. The only senior left-back, so his availability is not a rotation question but a necessity.", source: "Sports Illustrated / Liverpool FC" },
    { name: "Rio Ngumoha", issue: "Cramp against Atletico, around the hour (first European start)", status: "Not an injury, per Iraola; a left-sided option if Gakpo does not make it", note: "Started on the left with Gakpo out and Barcola on the right, worked Llorente out over time per Rousing The Kop (a 6), and was replaced by Munoz. With Munoz, the fallback on the left for Saturday should Gakpo's adductor keep him out.", source: "Hayters TV / Rousing The Kop" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "In full training; 3 Added Minutes has him in line for a first bench of the season against Fulham", note: "The European bench carried Chambers, McConnell and Danns rather than Gomez, which reads as a return managed for the league rather than a setback. His availability gives a fourth senior centre-back and a third right-back option.", source: "WhoScored / Liverpool Echo / Liverpool FC" },
  ],
  startersLastMatch: {
    match: "Liverpool 2-1 Atletico Madrid, 9 September (Champions League)",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Szoboszlai", "Mac Allister", "Barcola", "Wirtz", "Ngumoha", "Isak"],
    changes: "Two changes from the Ipswich side: Barcola in for Munoz, on the right, and Ngumoha in for Gakpo, who was left out of the squad as a precaution. Frimpong replaced Barcola at 59, Munoz replaced Ngumoha around the hour, Gravenberch, Koumas (a European debut) and Tsimikas (for Kerkez) followed. Unused: Mamardashvili, Woodman, Chambers, McConnell, Danns, Nyoni.",
    source: "WhoScored / Rousing The Kop / The 4th Official",
  },
  depthRisk: [
    { position: "Wide forward", level: "high", detail: "Friday evening and the Gakpo verdict from the afternoon session has not been published, so the department goes into matchday with one first-choice winger unconfirmed, Barcola cleared but on his third involvement in nine days, and Chiesa off the European list and out until the break. If Gakpo makes it the department is stretched but functional; if not, it is Munoz, Ngumoha and an advanced Frimpong across Fulham and the Tottenham cup tie three days apart, with Barcola asked for a third start in nine days on no pre-season." },
    { position: "Centre-forward", level: "high", detail: "Isak alone, 332 minutes in four starts, three league goals and none in Europe, with Ekitike now given January as the earliest, 'a reasonable chance' of the last two Champions League league-phase games in Iraola's words on Friday. The fallback is Gakpo as a false nine, and Gakpo is a doubt; Koumas, whom Iraola said on Friday he decided to keep in his first week, is the only other forward to have sat on a bench. Three games in seven days is the first stretch that tests whether Isak starts all of them." },
    { position: "Right-back", level: "medium", detail: "Down from high. Araujo has now started there twice, an 8 and an assist on Wednesday after a 7.7 at Ipswich, and Frimpong came on and scored a disallowed goal; Gomez, in full training, is the third body once passed fit. Bradley has no date. One injury still puts Szoboszlai in-game cover in play, and Endo is not in the European squad." },
    { position: "Centre-back", level: "high", detail: "Gomez's likely return to the bench on Saturday, per 3 Added Minutes, is the first easing here since August. Van Dijk and Jacquet played the ninety again, the captain loose with a couple of first-half passes by Rousing The Kop's reading (a 5) and Jacquet the better of the two (a 7). Araujo is needed at right-back, Gomez is training but was not in Wednesday's squad, Leoni not with the group until the break. Until Gomez is passed fit, one injury and Endo plays centre-half in the league and nobody senior does in Europe." },
    { position: "Central midfield", level: "low", detail: "Down from medium on the evidence of the night: Mac Allister and Szoboszlai scored both goals from the pivot, Gravenberch came on (a 4 from Rousing The Kop, sloppy in possession), Nyoni and McConnell were unused. The contract question has not moved; the football answered it for one night." },
  ],
  sources: ["Liverpool FC", "This Is Anfield", "Hayters", "Sports Mole", "3 Added Minutes", "BBC Sport", "TEAMtalk", "WhoScored", "Rousing The Kop", "The 4th Official", "Yahoo Sports", "Opta Analyst", "Liverpool Echo", "SI", "FotMob"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-11T22:20:00Z",
  played: 3,
  points: 5,
  pointsPerGame: 1.67,
  projectedPoints: 63,
  projectedFinish: "Europa League places on current pace",
  headline:
    "On the eve of matchweek four the pace is a three-game sample and reads Europa League: five points, 1.67 a game, a projected 63. Nothing Friday produced changes the arithmetic; it changed the calendar, with Ekitike's return now framed as January rather than never and three festive fixtures moved to Sky, and it changed the tone, with Iraola calling Fulham a side that would have four or five points on the eye test. Three points on Saturday and the projection is 76 for a day; one point and it is 57; the sample is small enough that a single afternoon rewrites it, which is the honest reading until Bournemouth on the 20th and Manchester City on 11 October give it a spine.",
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
    "Six points are available before the hardest stretch of the autumn, Fulham at home on Saturday and Bournemouth away on the 20th, a pointless side its own manager says must send a message and a winless one. Take both and Liverpool host Manchester City on eleven from five, a pace above 2.00, with Ekitike's January now on the horizon rather than off it; take two and the projection sits in the fifties on the eve of City, Brentford and Arsenal, the three hardest fixtures of the six. The Tottenham cup tie on Tuesday is the risk between the two league games, three matches in seven days for a front line with one fit senior nine and a winger whose fitness test went unreported. Iraola's reading of Fulham, three defeats by a goal and the possession of a mid-table side, is the reason not to count Saturday early.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "This Is Anfield", "NBC Sports"],
};
