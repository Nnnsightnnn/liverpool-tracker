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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Thu Sep 10, morning — the No. 1 goes into Fulham unbeaten in the league and off a Champions League win. On Wednesday Alisson was beaten once, Llorente stealing in behind Kerkez on 17 after Alvarez's pass, but saved Alvarez's 25-yarder at full stretch and gathered a tame second-half effort from the same man; Rousing The Kop's 7 called the save important. No clean sheet to add to the 138. Fulham at 3pm on Saturday, then the Tottenham cup tie on Tuesday, where Mamardashvili is the likelier keeper", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Wed Sep 9, evening — on the bench again for the European night, with Woodman alongside him as third keeper, while Alisson made the save that mattered from Alvarez. Mamardashvili has not played since the tour; the Carabao Cup tie against Tottenham at Anfield on Tuesday, 8pm, three days after Fulham, is his likeliest start of the month", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Wed Sep 9, evening — the captain's first European night under Iraola ended in a 2-1 win and a rating he will not frame. Van Dijk played the ninety beside Jacquet as Liverpool came from behind against Atletico, and Rousing The Kop marked him a 5, loose with a couple of first-half passes, not much else wrong; The 4th Official gave a 6.5 and said he should have done better on Llorente's goal before a solid second half. He is the fixed point across three home games in seven days: Fulham on Saturday at 3pm, Tottenham in the cup on Tuesday", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Wed Sep 9, evening — not in the matchday squad for Atletico, and the bench told the story: Chambers, McConnell and Danns sat where a fit Gomez would have. He has trained fully with the group since Tuesday, six weeks on from the muscle injury in the Sunderland friendly, and the club's note still has him nearing the end of his recovery; Fulham at 3pm on Saturday is the first realistic return, more likely the Tottenham cup tie on Tuesday. When passed fit he gives a fourth senior centre-back and a third right-back option behind Araujo, who excelled again on Wednesday", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Thu Sep 10, morning — cleared as tired, not hurt, before Fulham. Iraola's Thursday update grouped Kerkez with Barcola as cramping and fatigued rather than injured after Wednesday, when he was withdrawn on 88, and the left-back tied it to the pressing, saying it is hard to keep the intensity up for a whole ninety. Against Atletico he was beaten by Llorente for the opener, a 3 from Rousing The Kop, then won the ball from Lee for the move Szoboszlai finished on 40. With no senior deputy since Robertson left, his fitness is a necessity, not a choice; Bobb and King run at his side on Saturday", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Wed Sep 9, evening — the absence got smaller on Wednesday without him doing anything. Bradley remains out with the left knee ligament damage from January, no date, still in the Champions League squad, while Araujo made a second excellent start at right-back against Atletico, an 8 from Rousing The Kop and the backheel that set up Szoboszlai; Frimpong came on and had a late goal disallowed. 'Probably Conor will go later,' Iraola said last week, and the department can wait now", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Thu Sep 10, morning — an advanced substitute for now, with Araujo's right-back shirt settled. On Wednesday Frimpong came on for Barcola at 59, played on the right, and had the ball in the net at 89 before the offside flag, tucking in Oblak's save from Munoz; Rousing The Kop's 5 said he looked better than recently. Unless the Tottenham cup tie on Tuesday rotates the back four, his route in at Fulham is as a winger or an impact option", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Wed Sep 9, evening — a European night watched from outside, nearly a year on from the ACL. Leoni stays on the plan Iraola set out last Thursday, group training during the September international break with no matchday attached; he is in the Champions League squad and was not needed on Wednesday, when Van Dijk and Jacquet played the full ninety of the 2-1 over Atletico. Rush The Kop guesses at Manchester City on 11 October as the earliest he features", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Thu Sep 10, morning — four starts in four, and the shirt still his going into Fulham. Jacquet was the better of the two centre-backs on his Champions League debut on Wednesday by Rousing The Kop's reckoning, a 7 from both fan sites for the ninety beside Van Dijk, beaten only once as a pair by Llorente's run behind Kerkez. Gomez back in full training is the first real competition he will face; Fulham's Garcia and King are Saturday's test", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
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
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Wed Sep 9, evening — on from the bench and, by Rousing The Kop's reading, made Liverpool worse. Gravenberch came on in the second half of the 2-1 over Atletico and was marked a 4, sloppy in possession, giving the ball away in dangerous areas; the site says he has work to do to get back into the eleven. The pivot he wants back scored both goals. SI had pencilled him to start against Fulham on Saturday, which now reads as a rotation call rather than a form one", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Thu Sep 10, morning — the equaliser two days back, and a pivot carrying the goals into Fulham. Szoboszlai rolled past Oblak five minutes before half-time on Wednesday after Kerkez won it from Lee and Araujo flicked it through his own legs, an 8.5 at the top of The 4th Official's ratings. Opta counts ten Champions League goal involvements for him since the start of last season, double any other Liverpool player. Rousing The Kop was cooler, a 6 for the wrong options on the break. Signed to 2031", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Thu Sep 10, morning — still without a goal or assist in four, and Fulham's mid-block is the invitation. Wirtz ran the game for a spell in Wednesday's 2-1, pressed and won the ball high in a way Rousing The Kop called underrated, and sent Barcola clean through early in the second half for a finish rolled wide; a 7 from both fan sites, his own shot saved by Oblak from an Isak pass with Isak offside. The contribution column the ten was signed for still reads nought going into Saturday", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Wed Sep 9, evening — unused on the European bench, with McConnell and Danns beside him. Nyoni watched the 2-1 over Atletico from the dugout while Gravenberch, Koumas and Tsimikas were the late changes; his new contract remains unsigned per the weekend reporting. The Carabao Cup tie against Tottenham on Tuesday is his likeliest minutes of the week", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "doubtful", injuryNote: "Thu Sep 10, morning — a doubt Iraola will not guarantee. The manager said on Thursday he hopes to have Gakpo for Fulham but cannot promise it, the winger carrying niggles in both adductors rather than a defined injury after being left out of the Atletico squad as a precaution. A goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes, which is why his availability shapes the whole front line; if he does not make Saturday's 3pm, Ngumoha or Munoz starts wide, with Tottenham in the cup three days later", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Thu Sep 10, morning — the only fit senior nine, and a European goal still owed, going into Fulham. Isak led the line in Wednesday's 2-1, fired wide inside 16 seconds after Szoboszlai's win from kick-off, later had an effort blocked by Le Normand and set up a saved Wirtz shot while offside; a 5 from Rousing The Kop, a 7 from The 4th Official. Three league goals in three, none yet in the Champions League for Liverpool. With Ekitike out and Gakpo a doubt as the false-nine fallback, he starts Saturday and probably Tuesday too", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Thu Sep 10, morning — no timeframe, and a Fulham week that leans on Isak to carry the line. Ekitike continues rehabilitation from the April Achilles rupture, December the earliest anyone has named; with Isak the only fit senior nine and Gakpo a doubt as the fallback, the forward line's margin is thin across Fulham and the Tuesday cup tie. Registered in the Champions League squad regardless, which Rousing The Kop reads as optimism for a return before the January cutoff", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Thu Sep 10, morning — a left-sided option for Fulham if Gakpo's adductor keeps him out. On his first European start on Wednesday, with Gakpo left out and Barcola on the right, Ngumoha could not pass Llorente early, then worked him out, going outside him in the build-up to Mac Allister's winner per Rousing The Kop's 6, before cramping on the hour and giving way to Munoz. Iraola has since cleared the cramps as fatigue; whether he starts Saturday hangs on Gakpo as much as himself", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
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
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Wed Sep 9, evening — named on the European bench as third keeper, with Mamardashvili, and unused as Alisson kept Liverpool in it. Woodman's inclusion in the Champions League squad is depth rather than intent; the Carabao Cup tie against Tottenham on Tuesday is the one fixture this month that might use either deputy", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Thu Sep 10, morning — the one rested senior winger, and the likeliest beneficiary if Gakpo does not make it. Munoz came off the bench in Wednesday's 2-1, having been dropped for Barcola on the right after two league starts, and tested Oblak after dancing through a challenge; a 5 from Rousing The Kop, a 6 from The 4th Official. With Gakpo a doubt and Barcola and Kerkez only just cleared of cramp, he is the freshest wide body for Fulham at 3pm", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Wed Sep 9, evening — a second start at right-back, an 8, and the assist of the night. Araujo flicked Szoboszlai's equaliser through his own legs inside the box on 40, 'you have to ask him if he meant it' per the scorer, after a full-length press earlier that had Anfield on its feet; Rousing The Kop says he looks reborn at Liverpool, The 4th Official a 7 for the defensive work. Two starts, two good ones, a clean sheet at Ipswich and a goal made against Atletico: the shirt is his, with Frimpong an advanced substitute and Gomez the third body once passed fit", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Thu Sep 10, morning — cleared for Fulham, tired rather than injured. Iraola's Thursday update put Barcola and Kerkez together as cramping and fatigued, not hurt, and expected him available, the manager tying it to a player rushed through with no pre-season and to the pressing load. On his first start against Atletico, on the right, he missed two clear chances against Oblak, one played through by Wirtz, and went off at 59 looking at his calf. Fulham on Saturday would be a third involvement in nine days", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  generatedAt: "2026-09-10T09:00:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
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
// Last refresh: 2026-09-09 (Wednesday evening) — re-fetched from ESPN's endpoint after Liverpool 2-1 Atletico
// Madrid and byte-identical to the morning table: the Champions League does not touch it and no Premier League
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
  generatedAt: "2026-09-10T09:00:00Z",
  overview:
    "Two days after a Champions League win that the Premier League table does not record, the standings sit exactly where Sunday left them and stay there until Saturday's kick-offs: Liverpool are sixth on five, unbeaten, and the fixture that matters is the one at the bottom of it. The shape of the top is unchanged: Manchester City and Arsenal perfect on nine, split only by goals scored, Hull third on seven, Chelsea fourth on six, and then the five-point knot of Brentford, Liverpool, Newcastle, Everton and Leeds, Liverpool sixth on plus two behind Brentford's plus three. The relevant row now is the nineteenth: Fulham, pointless after three defeats under Alvaro Arbeloa and booed off at Craven Cottage on Saturday, are the visitors to Anfield at 3pm on the 12th, and a win there would take Liverpool to eight, two clear of Chelsea's current six, though the sides above and around them all play the same weekend. Tottenham, eighteenth, follow on Tuesday in the Carabao Cup, and Bournemouth, fifteenth, host on the 20th. Every side has played three; the European line runs through the five-point group until the weekend moves it.",
  teams: {
    "Liverpool": "Sixth on five, unbeaten, level with Newcastle, Everton and Leeds and a goal behind Brentford. Fulham at 3pm on Saturday is the chance to make it eight and jump above Chelsea's current six, though most of the group around them plays the same afternoon, so the position is as likely to hold as to climb.",
    "Manchester City": "Top on nine, ahead of Arsenal on goals scored alone. At Anfield on 11 October, the Sunday after the international break.",
    "Arsenal": "Second on nine, and a 1-0 winner at Napoli on Wednesday night, Odegaard the scorer, to open their own European campaign. At Anfield on 1 November.",
    "Hull": "Third on seven and unbeaten on their return to the top flight, the early surprise, a point clear of Chelsea.",
    "Chelsea": "Fourth on six after the Emirates defeat, a point above Liverpool, and the total the Reds would pass with a win over Fulham.",
    "Brentford": "Fifth on five, ahead of Liverpool by a single goal of difference. Host Liverpool on 17 October.",
    "Newcastle": "Seventh on five, level with Liverpool on points and goal difference and behind on goals scored.",
    "Everton": "Eighth on five, level with Liverpool and one goal worse off after the 2-2 with Manchester United.",
    "Bournemouth": "Fifteenth on two and winless; Liverpool's opponents at the Vitality on Sunday 20 September, 2pm.",
    "Tottenham": "Eighteenth on one, in the relegation stripe on goals scored. At Anfield on Tuesday 15 September in the Carabao Cup third round, 8pm.",
    "Fulham": "Nineteenth and pointless, three defeats from three under Alvaro Arbeloa, booed off after throwing away two leads against Palace on Saturday; only twice before have they lost their first three, and both seasons ended in relegation. At Anfield on Saturday, 3pm.",
    "Coventry": "Bottom, pointless, minus five, the only side to match Fulham's three defeats from three.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Front Line, Counted Again.",
    byline: "Liverpool FC / This Is Anfield",
    dateline: "Anfield · 10 September",
    category: "Injuries",
    body:
      "Thursday's team news came in the shape it has come all week, as a headcount. Andoni Iraola grouped Bradley Barcola and Milos Kerkez, both of whom cramped against Atletico, as tired rather than injured and expected to be available for Fulham; Kerkez had gone off on 88, Barcola at 59 on his first start. Cody Gakpo, kept out of the European squad as a precaution, has niggles in both adductors and no clean diagnosis, and the manager would say only that he hopes to have him but cannot promise it. With Tottenham in the cup on Tuesday, a fit Gakpo is the difference between rotating a front three and rebuilding one."
  },
  {
    n: "02",
    headline: "A Manager Without A Net.",
    byline: "Yahoo Sports / AnfieldWatch",
    dateline: "Anfield · 10 September",
    category: "Manager",
    body:
      "Three games in, and the pressure on Iraola is structural rather than sporting. The sporting director who hired him, Richard Hughes, has gone to Al-Hilal, and until a successor is named the Spaniard is a manager nobody at boardroom level is invested in protecting. Whoever arrives will not have chosen him, and a director who wants his own coach has little standing in his way. Nobody is talking about a sacking; an unbeaten side sixth in the table and fresh from beating Simeone does not sack its manager. But a new appointment carries a cushion, and Iraola's has been quietly removed while he works."
  },
  {
    n: "03",
    headline: "The Window Is Shut, The Names Are Not.",
    byline: "Football365 / Fabrizio Romano",
    dateline: "Anfield · 10 September",
    category: "Transfers",
    body:
      "Nothing can be bought until January, which has never stopped the reporting. Football365 has Liverpool in talks with Manchester City over Rayan Ait-Nouri, the kind of left-back cover the squad has lacked since Robertson left and Kerkez became the only senior option there, and reaffirms a long interest in Crystal Palace's Adam Wharton, 22, expected to move in one of the next two windows. The only completed business is at the other end of the age scale and going the wrong way: Manchester United have signed the 16-year-old academy midfielder Isaac Konde, per Fabrizio Romano, formal steps done over the past few days."
  },
  {
    n: "04",
    headline: "The Price Of The Press.",
    byline: "Sports Illustrated / Liverpool FC",
    dateline: "AXA Training Centre · 10 September",
    category: "Tactics",
    body:
      "There is a reason the substitutions keep coming in the second half, and Milos Kerkez named it this week. Pressing the way Liverpool now do under Iraola, he said, is hard to keep up for a full ninety minutes, which is why he and Barcola were cramping and tired against Atletico rather than injured. It is not a confession so much as a status report: the club watched its players run out of legs after half an hour in pre-season friendlies at Leeds and Monaco, and the manager said so at the time. The cramps are the system installing itself, three games into a second season of learning to breathe in it."
  },
  {
    n: "05",
    headline: "Booed, Pointless, And Bound For Anfield.",
    byline: "Goal / VAVEL",
    dateline: "Craven Cottage · 5 September",
    category: "Football News",
    body:
      "Saturday's opponents arrive in a state Anfield rarely sees at 3pm: bottom but for goal difference, pointless, and jeered by their own. Fulham led Crystal Palace twice through Josh King and Cesar Palacios and lost 3-2, a Tyrick Mitchell double and a Ben Chilwell winner turning it, and Alvaro Arbeloa met the boos with defiance, telling Match of the Day his side did not deserve to lose and had been brave, while admitting they conceded very easy goals. With Coventry, they are one of two sides yet to take a point. They have won twice in 32 league visits to Anfield. Arbeloa insists the month will not define the season; Anfield, then Manchester United, will test the claim."
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-10T09:00:00Z",
  summary:
    "Thursday morning at the AXA and the week's question is the front line, not Wednesday's result: Andoni Iraola's fitness update before Fulham has Bradley Barcola and Milos Kerkez, both of whom cramped against Atletico, described only as tired and expected to be available, while Cody Gakpo, left out of the Champions League squad with niggles in both adductors, is a genuine doubt the manager says he hopes for but cannot guarantee. Kerkez tied the tightness to the work Iraola asks of his players, that pressing the way Liverpool now do is hard to keep up for a whole ninety minutes, an admission the club made no secret of after pre-season collapses at Leeds and Monaco. Beneath the team news the market never quite sleeps: reports put Liverpool in January talks with Manchester City for Rayan Ait-Nouri and long keen on Crystal Palace's Adam Wharton, while Football365 says the club is unhappy with Alexis Mac Allister's public doubt over a new deal, two days after his left-footed winner beat Atletico 2-1. The table has not moved and cannot until the weekend: Liverpool stay sixth on five, with pointless, nineteenth Fulham at Anfield at 3pm on Saturday, then Tottenham in the Carabao Cup on Tuesday.",
  keyTopics: [
    {
      title: "Iraola's Three-Man Fitness Update: Barcola And Kerkez 'Just Tired', Gakpo A Doubt For Fulham (Liverpool FC / This Is Anfield, today)",
      detail:
        "Reported on Thursday morning at the AXA. Iraola's update before Saturday grouped Bradley Barcola and Milos Kerkez, both of whom cramped against Atletico, as tired rather than injured and expected to be fit, Kerkez having been withdrawn on 88 minutes on Wednesday. Cody Gakpo, kept out of the European squad as a precaution, has niggles in both adductors rather than a defined injury, and Iraola said he hopes to have him back but cannot guarantee it. With Tottenham in the cup on Tuesday, the wide department is the week's whole planning problem.",
      category: "injuries",
    },
    {
      title: "Kerkez Ties The Cramp To The Press: 'It's A Bit Tough To Do It For All The 90 Minutes' (Sports Illustrated / Liverpool FC, today)",
      detail:
        "Emerged around the fitness update on Thursday. Milos Kerkez explained the run of second-half cramps as the cost of Iraola's high pressing, saying that when a side presses the way Liverpool now do it is hard to sustain for the full ninety, a point the club has not hidden since pre-season friendlies at Leeds and Monaco where Iraola admitted his players were fit to run for only half an hour. It reframes Wednesday's substitutions as a fitness project mid-build rather than a fresh injury worry.",
      category: "tactics",
    },
    {
      title: "January Watch: Liverpool In Talks With Man City Over Ait-Nouri, Long Keen On Palace's Wharton (Football365 / ESPN, today)",
      detail:
        "The window is shut until January, but the links do not wait: Football365 reported on Thursday that Liverpool are in discussions with Manchester City over the £31m-rated Rayan Ait-Nouri for the winter window, cover at left-back where Kerkez has no senior deputy since Robertson left, while the Reds retain a long-standing admiration for Crystal Palace's Adam Wharton, 22, who is expected to leave in one of the next two windows. Neither can be bought before January; both are standing storylines now.",
      category: "transfers",
    },
    {
      title: "Club Said To Be Unhappy With Mac Allister's Contract Comments, Two Days After His Winner (Football365, today)",
      detail:
        "A follow-on to Tuesday's admission: Football365 reported that Liverpool officials are not happy with Alexis Mac Allister publicly airing doubt over his future, having said the club was not in a position to renew him. The timing is awkward, coming two days after the Argentine settled the Atletico match from twenty yards and had his name chorused off the pitch. The football and the paperwork are, for now, telling different stories.",
      category: "transfers",
    },
    {
      title: "Fulham Arrive Booed And Winless: 'We Didn't Deserve To Lose', Arbeloa Insists (Goal / VAVEL, today)",
      detail:
        "Saturday's visitors are, with Coventry, the only pointless side in the division. After the 3-2 home loss to Crystal Palace that had Craven Cottage booing, Alvaro Arbeloa told Match of the Day his side did not deserve to lose and had shown a good, brave attitude, while conceding they gave up very easy goals. Fulham have won only twice in 32 league visits to Anfield. Arbeloa's Friday press conference will set his team news; none is confirmed as of Thursday.",
      category: "matches",
    },
    {
      title: "Iraola 'Under Serious Pressure' With Hughes Gone And No Sporting Director In Place (Yahoo Sports / AnfieldWatch, today)",
      detail:
        "A standing storyline sharpened this week: three games in, the man who hired Iraola, sporting director Richard Hughes, has left for Al-Hilal, leaving the Spaniard without the institutional protection a new manager usually carries. Whoever is appointed next will not be the coach's own hire, and if they want things done differently there is little stopping a change. No suggestion he has been sacked; the point is exposure, not an axe.",
      category: "general",
    },
    {
      title: "Training-Ground Notebook: Barcola's Rondo Forfeit And A Record £300m Shirt Deal (This Is Anfield, today)",
      detail:
        "From the week's sessions: reporters watching training noted Barcola made to do push-ups with a couple of teammates as a rondo forfeit for not winning the ball back quickly enough, a small window on Iraola's demands, while the club's record £300m Turkish Airlines shirt sponsorship from 2027-28 remains the off-field headline. Ngumoha and Victor Munoz are the other left-sided options if Gakpo does not make it.",
      category: "general",
    },
    {
      title: "Confirmed: Manchester United Complete Signing Of Liverpool Academy Midfielder Isaac Konde (Fabrizio Romano / Yardbarker, today)",
      detail:
        "Confirmed this week and settled: Manchester United completed the signing of 16-year-old Liverpool academy midfielder Isaac Konde, per Fabrizio Romano, after formal steps over recent days. The teenager, who can play either side of midfield and made six Under-18 Premier League appearances last season, is the rare bit of transfer business the shut senior window still permits, at youth level.",
      category: "transfers",
    },
    {
      title: "Two Days On: What The Atletico Win Actually Changed, And What It Did Not (Opta Analyst / The Independent, today)",
      detail:
        "Receding but not gone: Wednesday's 2-1 was the first Liverpool win this season earned on chances rather than in spite of them, Opta's 1.68 expected goals from 14 shots to 0.81 the reading, and Iraola's first victory over Diego Simeone at the fifth attempt. What it changed was the mood, not the table, which stays exactly where Sunday left it; what it left unresolved is a front three that cramped and a striker still without a European goal for the club.",
      category: "matches",
    },
    {
      title: "Ornstein Holds The Ownership Line: A Change At Anfield 'In The Next Year Or Two' (Empire of the Kop / Yahoo, today)",
      detail:
        "Still live beneath the football: David Ornstein reiterated this week that a change of ownership at Liverpool could come within the next year or two, a timeline he said the industry backs. Fenway Sports Group's August agreement to sell 38 per cent to Amit Bhatia's 1892 Holdings, the Bezos-and-Saverin-backed consortium, carries an option on a controlling stake within a year. With Hughes gone and no sporting director named, the boardroom is the unsettled part of the club, not the dugout.",
      category: "general",
    },
  ],
  sources: [
    "Liverpool FC",
    "This Is Anfield",
    "Sports Illustrated",
    "Football365",
    "ESPN",
    "Goal",
    "VAVEL",
    "Yahoo Sports",
    "AnfieldWatch",
    "Fabrizio Romano",
    "Yardbarker",
    "Opta Analyst",
    "The Independent",
    "Empire of the Kop",
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
  generatedAt: "2026-09-10T09:00:00Z",
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
    "We didn't deserve to lose, Alvaro Arbeloa told Match of the Day after Saturday's home defeat to Crystal Palace, and the sentence travels to Anfield with him: Fulham are pointless after three games, one of only two sides in the division without a point, and were booed off Craven Cottage having led twice and conceded, in the manager's own words, very easy goals. The statistic Sky Sports keep raising is the one he cannot answer, that only twice before, in 1951-52 and 2020-21, have Fulham opened a top-flight season with three straight defeats, and both years ended in relegation. This is a new project, not an old one failing. Marco Silva left in the summer and the board hired Alvaro Arbeloa, the former Real Madrid full-back promoted through the Bernabeu's coaching ranks, on a three-year deal, then spent on his Madrid connections: Gonzalo Garcia for a record-equalling £34m, Cesar Palacios alongside him, Shea Charles from Southampton for £26m, Jonah Kusi-Asare made permanent from Bayern, with Issa Diop and Sasa Lukic sold to Ipswich and Harry Wilson and Raul Jimenez gone free. The results have not followed. Chelsea scored after 31 seconds at Craven Cottage on the opening Monday and won 3-2; Sunderland beat them 1-0 with a 75th-minute Isidor goal; on Saturday they led Crystal Palace twice, through Josh King and Palacios, and lost 3-2 to a Tyrick Mitchell double and a Ben Chilwell winner, booed off despite an expected-goals total Sky recorded at 3.13. Arbeloa's response was that three games and three losses is difficult, that Anfield and then Manchester United are two very difficult games, and that this month will not define the season. A Carabao Cup win is the only one his side has managed, and West Ham away is the next round of that competition.",
  shape:
    "The threat is in the wide runners, not the build: Arbeloa's Fulham work patiently from the back in a 4-2-3-1 with Shea Charles and Alex Iwobi screening, and come alive when the flanks break, Oscar Bobb's burst to the byline made King's opener against Palace, and Antonee Robinson, 47 tackles in the league last season per Squawka, overlaps hard from left-back. Josh King plays as the ten and drops off Garcia to link. Out of possession it is a mid-block that presses when the ball enters central areas, and the problem, three games in, is what happens once it is breached: two leads thrown away against Palace, a goal conceded inside a minute against Chelsea, and a defence that has kept no clean sheet.",
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
    "Leno", "Castagne", "Andersen", "Ughelumba", "Robinson",
    "Charles", "Iwobi", "Bobb", "King", "Palacios", "García",
  ],
  absentees: [],
  recentForm: [
    { date: "2026-09-05", opponent: "Crystal Palace", home: true, score: "2-3", result: "L", note: "King (11) and Palacios (42) gave Fulham the lead twice; Mitchell (35, 54) and Chilwell (77) turned it. Sky recorded Fulham's expected goals at 3.13. Booed off." },
    { date: "2026-08-30", opponent: "Sunderland", home: false, score: "0-1", result: "L", note: "Beaten by Wilson Isidor's 75th-minute goal from the bench at the Stadium of Light." },
    { date: "2026-08-24", opponent: "Chelsea", home: true, score: "2-3", result: "L", note: "Pedro after 31 seconds, then Palmer and Rogers; King and Garcia replied. Arbeloa's first match, the opening Monday night of the season." },
  ],
  liverpoolAngle:
    "Thursday's fitness update sets the terms of this game, and it favours Liverpool without settling it. Barcola and Kerkez, both of whom cramped against Atletico, are cleared as tired rather than hurt, but Gakpo, the supplier of every Isak goal this season, is a genuine adductor doubt Iraola will not guarantee, so the wide department SQUAD_LOAD.depthRisk still marks high has one first-choice unavailable and a cup tie on Tuesday pulling at the rest. Fulham's threat runs through Bobb and King on the left side of Liverpool's defence, which is where Llorente scored on Wednesday and where Kerkez was marked a three; FORM_TRENDS.diagnosis still carries the fast-break concession as its highest-severity pattern, and a side that generated 3.13 expected goals against Palace can break. The other reading is the one the numbers prefer: Fulham have led twice in three games, both times against Palace, and taken nothing, have kept no clean sheet, and are booed at home; Liverpool have come from behind three times in four and have a striker with three in three. A 3pm Saturday, no television, a Champions League hangover: it is the kind of afternoon that decides whether the depth chart is a problem or a footnote. The predicted XI is the side that started against Palace, in Sky Sports' listing; Arbeloa's Friday press conference will set the absentees, and none is confirmed as of Thursday.",
  modelLine: null,
  sources: ["Sky Sports", "Squawka", "ESPN", "Yahoo Sports", "Liverpool FC", "Opta Analyst"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-10T09:00:00Z",
  competition: "PL",
  played: 3,
  headline:
    "Two patterns are running at once, and the week has not resolved which is the true one. The bad habit is durable: Liverpool have conceded first in three of four, Llorente the latest to run in behind a full-back, and the league sample stays at three games, 5.00 expected goals for and 4.46 against on mixed sources. The encouraging one is newer: Opta gave Liverpool 1.68 expected goals from 14 shots against Atletico's 0.81 from nine, the first win this season earned on chances rather than in spite of them, though that European figure sits outside the league totals below. The subplot the fitness updates keep surfacing is that the second-half substitutions are a pressing side still building its lungs, cramp rather than injury, which is a tactical fact as much as a medical one. Fulham on Saturday made 3.13 expected goals against Palace and lost, which is either a warning or a mirror.",
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
    "Andoni Iraola's first win over Diego Simeone, per Opta Analyst, after four winless meetings in La Liga with Rayo Vallecano (D1 L3); Liverpool have now won each of their last four Champions League games against Atletico after winning one of the first six.",
    "Dominik Szoboszlai has 10 goal involvements in the Champions League since the start of last season, six goals and four assists, double any other Liverpool player, per Opta Analyst; three goals and three assists in his last six home games in Europe.",
    "Five of Alexis Mac Allister's 20 Liverpool goals in all competitions have come from outside the penalty area, per Opta Analyst, and only Szoboszlai (12) has more for the club since August 2023; no player on Wednesday won more duels than his five.",
    "Marcos Llorente is the only player with 10 or more Champions League goals to have scored at least half of them against one opponent, five of ten against Liverpool, all at Anfield in three appearances, per Opta Analyst; only Karim Benzema (7) has scored more against Liverpool in the competition.",
  ],
  sources: ["Opta Analyst", "The Independent", "Hayters TV", "Rousing The Kop", "FotMob", "Sofascore", "SI", "Liverpool FC", "This Is Anfield", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-10T09:00:00Z",
  headline:
    "Thursday's update softened the forward-line alarm without clearing it. Iraola cleared Barcola and Kerkez, the two who cramped against Atletico, as tired rather than hurt and expected for Fulham, and moved Kerkez onto the returning list here; Gakpo, out of the European squad as a precaution, has niggles in both adductors and stays a doubt the manager will not guarantee. If Gakpo makes it the wide department is merely stretched; if he does not, it is Munoz, Ngumoha and an advanced Frimpong across two games in four days with the Tottenham cup tie on Tuesday. The rest held: Araujo has the right-back shirt, the pivot is scoring, Isak is the only fit nine, and Gomez is in full training and edging toward a first matchday squad. Ekitike and Bradley have no date; Leoni and Chiesa rejoin group work in the break.",
  minutesNote:
    "Premier League minutes are not published here yet. Three league games and one Champions League game have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "No timeframe; December at the earliest", note: "Isak played most of Wednesday's Champions League opener alone up front, shooting inside 16 seconds and going without a goal; Gakpo, the false-nine fallback, was not in the squad. 'Especially Hugo will go later,' Iraola said last Thursday, and nothing since has changed it. Registered in the Champions League squad regardless.", source: "Liverpool FC / Liverpool Offside" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training during the September international break", note: "Iraola's plan has him back with the squad during the break after nearly a year out; no matchday date. Named in the Champions League squad. Not needed on Wednesday, when Jacquet and Van Dijk played the ninety.", source: "Liverpool FC" },
    { name: "Conor Bradley", issue: "Knee", expected: "No timeframe", note: "'Probably Conor will go later,' Iraola said last Thursday. Araujo's second start at right-back on Wednesday, an 8 from Rousing The Kop and the assist for Szoboszlai, has made his absence a smaller story than it was.", source: "Liverpool FC / Rousing The Kop" },
    { name: "Federico Chiesa", issue: "Back (originally muscle, Como friendly, August)", expected: "Rejoins group training during the September international break", note: "Left off the Champions League list, so Wednesday was never in reach; Fulham, Tottenham and Bournemouth are all before the break he is due to train in.", source: "Liverpool FC / Liverpool Offside" },
  ],
  returning: [
    { name: "Cody Gakpo", issue: "Niggles in both adductors, no defined injury", status: "A doubt for Fulham; Iraola on Thursday said he hopes to have him but cannot guarantee it", note: "Left out of the Champions League squad as a precaution after tightness before Tuesday's session, and the front line missed him. A goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes; whether he trains and is passed fit before 3pm on Saturday shapes the whole week, with Tottenham in the cup three days later.", source: "Liverpool FC / This Is Anfield / Opta Analyst" },
    { name: "Bradley Barcola", issue: "Cramp on his first start; tired rather than injured, per Iraola", status: "Expected to be available for Fulham after Thursday's update", note: "Withdrawn at 59 against Atletico looking at his calf. Iraola on Thursday put him and Kerkez together as tired rather than hurt, an issue he ties to a player being rushed through with no pre-season and to the pressing load. Two clear chances missed against Oblak; the manager wants him in the side regardless.", source: "Liverpool FC / Yahoo Sports" },
    { name: "Milos Kerkez", issue: "Cramp against Atletico, withdrawn on 88", status: "Cleared as tired, not injured; expected to face Fulham", note: "New to this list after Thursday's update. Kerkez came off late on Wednesday and tied the tightness to Iraola's pressing, saying it is hard to keep the intensity up for a full ninety, an issue the club flagged in pre-season. The only senior left-back, so his availability is not a rotation question but a necessity.", source: "Sports Illustrated / Liverpool FC" },
    { name: "Rio Ngumoha", issue: "Cramp against Atletico, around the hour (first European start)", status: "Not an injury, per Iraola; a left-sided option if Gakpo does not make it", note: "Started on the left with Gakpo out and Barcola on the right, worked Llorente out over time per Rousing The Kop (a 6), and was replaced by Munoz. With Munoz, the fallback on the left for Saturday should Gakpo's adductor keep him out.", source: "Hayters TV / Rousing The Kop" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "In full training since Tuesday; not in Wednesday's matchday squad, Fulham on Saturday the first realistic return", note: "The European bench carried Chambers, McConnell and Danns rather than Gomez, which reads as a return managed for the league rather than a setback. His availability gives a fourth senior centre-back and a third right-back option.", source: "WhoScored / Liverpool Echo / Liverpool FC" },
  ],
  startersLastMatch: {
    match: "Liverpool 2-1 Atletico Madrid, 9 September (Champions League)",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Szoboszlai", "Mac Allister", "Barcola", "Wirtz", "Ngumoha", "Isak"],
    changes: "Two changes from the Ipswich side: Barcola in for Munoz, on the right, and Ngumoha in for Gakpo, who was left out of the squad as a precaution. Frimpong replaced Barcola at 59, Munoz replaced Ngumoha around the hour, Gravenberch, Koumas (a European debut) and Tsimikas (for Kerkez) followed. Unused: Mamardashvili, Woodman, Chambers, McConnell, Danns, Nyoni.",
    source: "WhoScored / Rousing The Kop / The 4th Official",
  },
  depthRisk: [
    { position: "Wide forward", level: "high", detail: "Thursday cleared Barcola (tired, not hurt) but left Gakpo an adductor doubt Iraola will not guarantee, with Chiesa off the European list and out until the break. If Gakpo makes it the department is stretched but functional; if not, it is Munoz, Ngumoha and an advanced Frimpong across Fulham and the Tottenham cup tie four days apart, with Barcola asked for a third start in nine days on no pre-season." },
    { position: "Centre-forward", level: "high", detail: "Isak alone, three league goals in three and none in Europe on Wednesday, with Ekitike given no timeframe. The fallback was Gakpo as a false nine, and Gakpo was not in the squad; Koumas came on late as the only other forward on the bench. Three games in seven days is the first stretch that tests whether Isak starts all of them." },
    { position: "Right-back", level: "medium", detail: "Down from high. Araujo has now started there twice, an 8 and an assist on Wednesday after a 7.7 at Ipswich, and Frimpong came on and scored a disallowed goal; Gomez, in full training, is the third body once passed fit. Bradley has no date. One injury still puts Szoboszlai in-game cover in play, and Endo is not in the European squad." },
    { position: "Centre-back", level: "high", detail: "Van Dijk and Jacquet played the ninety again, the captain loose with a couple of first-half passes by Rousing The Kop's reading (a 5) and Jacquet the better of the two (a 7). Araujo is needed at right-back, Gomez is training but was not in Wednesday's squad, Leoni not with the group until the break. Until Gomez is passed fit, one injury and Endo plays centre-half in the league and nobody senior does in Europe." },
    { position: "Central midfield", level: "low", detail: "Down from medium on the evidence of the night: Mac Allister and Szoboszlai scored both goals from the pivot, Gravenberch came on (a 4 from Rousing The Kop, sloppy in possession), Nyoni and McConnell were unused. The contract question has not moved; the football answered it for one night." },
  ],
  sources: ["Hayters TV", "WhoScored", "Rousing The Kop", "The 4th Official", "Empire of the Kop", "Yahoo Sports", "Opta Analyst", "Liverpool FC", "Liverpool Echo", "Liverpool Offside", "SI", "FotMob"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-10T09:00:00Z",
  played: 3,
  points: 5,
  pointsPerGame: 1.67,
  projectedPoints: 63,
  projectedFinish: "Europa League places on current pace",
  headline:
    "The pace is still a three-game sample and still reads as Europa League: five points, 1.67 a game, a projected 63. The arithmetic will not move until Saturday, because midweek was Europe, and what carries into it is the schedule rather than the numbers, Fulham then a cup tie then Bournemouth inside nine days with a front line only now clearing its cramp. Beat pointless Fulham and winless Bournemouth and the pace climbs to 1.83 and a projection near 70 before Manchester City visit on 11 October; a fortnight ago this same line read as a relegation pace, which is the size of the sample talking.",
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
    "Two games decide what September was: Fulham on Saturday, a side that has lost three from three and been booed off, and Bournemouth on the 20th, winless on two. Six points and the projection climbs toward 70 with Manchester City, one of two perfect sides, next; two points and it falls back into the fifties on the eve of the hardest fortnight of the autumn. The Champions League win in between them counts for nothing here and for a great deal in how the squad rotates through the Tottenham cup tie on Tuesday, which is the real risk to the Fulham and Bournemouth returns. Arsenal, the last of the six, are the other perfect record and won at Napoli on Wednesday.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "This Is Anfield", "NBC Sports"],
};
