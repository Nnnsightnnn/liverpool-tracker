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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Mon Sep 21, morning - away with Brazil for the international break, and leaving behind the save the weekend turned on. His low stop from Evanilson's backheel flick on eighteen minutes at the Vitality kept the game goalless until Isak settled it, a third consecutive Premier League clean sheet and the first such run since September 2024. Mamardashvili stays at the AXA as the senior goalkeeper in the building; the next club football is Manchester City at Anfield on 11 October.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Mon Sep 21, morning - one of the small senior group Iraola keeps at Kirkby while the internationals scatter, and the deputy's most useful fortnight of the season. With Alisson away, Mamardashvili is the first-choice goalkeeper in training, which is the closest he has come to the front of the queue since arriving. His only appearance remains the cup tie against Tottenham; the Carabao Cup fourth round against Chelsea on 28 October is the realistic next one.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Mon Sep 21, morning - the captain reports to the Netherlands with the quieter half of a clean-sheet run behind him. Van Dijk has played every league minute of the season bar the cup night and anchored a back four that has now gone three games without conceding, the platform the whole autumn is built on. At thirty-five he spends the break on international duty rather than resting; Erling Haaland is the first name back on the other side of it.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Mon Sep 21, morning - not on international duty, and therefore central to the fortnight's plans. Gomez is among the senior players who stay at the AXA to work while the rest of the squad disperses, a fourth centre-back and the only specialist right-back in the building in one body. His next appearance in any competition will be his three hundredth for the club, eleven seasons and rather too many injuries in the making.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Mon Sep 21, morning - off to Hungary, the left-back question left exactly where the weekend found it. Kerkez came through ninety hard minutes at the club that sold him, targeted repeatedly over the top and credited by the BBC for effort more than quality, a six. Tsimikas remains the only alternative and is rated no higher; the position gets no reinforcement until January, and Antoine Semenyo attacks that flank when football resumes.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Mon Sep 21, morning - the break arrives and the timeline does not shorten with it. Araujo has made right-back his own across five straight league starts, so Bradley returns to no obvious vacancy, and FotMob's own listing has drifted to early January 2027, later than anything the club has said out loud. Lewis Steele reported individual training and ball work resuming, eight months on from the January knee injury, the first forward step in months even as the month keeps moving back.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Mon Sep 21, morning - away with the Netherlands, the cup right-back still waiting on the league version of the job. Frimpong started there against Tottenham but Iraola went back to Araujo for Bournemouth and got a clean sheet from it. His case remains the attacking one, best made in a back three the team has not used; the three-week break changes none of that.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Mon Sep 21, morning - this is the fortnight he has been counting toward for a year. Iraola has confirmed the plan is for Leoni to start training with the group during the international break, the clearest step yet in a recovery from the ACL rupture on his September 2025 debut, with Sports Mole still pencilling mid-October for availability. If the knee holds through group work, the two-man centre-back rota finally gets a third body.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 21, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Mon Sep 21, morning - a first senior France camp, and the reward for the best individual month of any Liverpool defender. Jacquet joins up with the world champions after three consecutive clean sheets in his first English autumn and a man-of-the-match eight at the Vitality, where Iraola praised his composure and confidence. The twenty-one-year-old signed from Rennes has become the least complicated thing Liverpool bought in the summer.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Mon Sep 21, morning - still at Levante, still outside every squad sheet the first team publishes. The senior back line kept a third clean sheet without needing a fifth or sixth body, and the loan continues on its own timetable, which is the point of a loan. Nothing in the international break changes his position.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 32, name: "Kostas Tsimikas", number: 21, position: "DEF", nationality: "🇬🇷 Greece", age: 30, appearances: 6, goals: 0, assists: 1, cleanSheets: 1, xG: 0.2, tacklesPer90: 1.7, passCompletion: 79, progressiveCarries: 3.1, form: 5.8, status: "fit", injuryNote: "Mon Sep 21, morning - an unused substitute at the Vitality, and the flank went to Kerkez for the whole ninety. Tsimikas has not started a league game since Fulham, where he misplaced eleven of thirty-one passes and was withdrawn at half-time, and Sunday's team sheet confirmed the manager has picked his left-back and it is not him. Two senior options, neither rated highly, and no market until January.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png",
    physical: { height: 178, weight: 76, pace: 79, acceleration: 80, sprintSpeed: 78 },
    career: [
      { years: "2017-2020", club: "Olympiacos", fee: null, type: "senior" },
      { years: "2020-", club: "Liverpool", fee: "€13M", type: "senior" },
      { years: "2025-26", club: "Roma", fee: null, type: "loan" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Mon Sep 21, morning - back to Argentina, the pivot beside Szoboszlai his to keep. The BBC's reading of Bournemouth was that he found space to open the game up after a slow start, a six, and a positive beginning to life under Iraola. Liverpool's control arrived in the second half, roughly when his influence did; the partnership survived its first away test.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Mon Sep 21, morning - away with the Netherlands, and the international stage offering what the domestic one has not. Nine minutes off the bench at Bournemouth, on for Szoboszlai as the lead was closed out, is the clearest read yet on where he sits behind the first-choice pivot. Iraola names him among the four midfielders ahead of Endo, which is a floor rather than a ceiling.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Mon Sep 21, morning - Hungary duty, on the back of an afternoon of purpose without a payoff. Two free-kicks narrowly wide, a booking after the interval, and a withdrawal on eighty-one; a six the BBC called typical bar a goal from outside the box. After the thirty-yard volley that settled the cup tie, this was the week the shooting missed and the side won regardless.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Mon Sep 21, morning - not on international duty, working at the AXA, and still leaving in January. Endo is one of the senior group Iraola keeps through the break, useful in training even as the reporting has FSG sanctioning a winter exit, the last window a fee is recoverable on a 2027 deal. The dated consequence for this page is unchanged: from February the emergency centre-back cover has no occupant unless Leoni's knee has held.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Mon Sep 21, morning - off to Germany with the Anfield question unresolved. A five at the Vitality, the lowest Liverpool rating, and a hand in the goal he did not quite touch cleanly; six competitive games have now produced no goal and no assist. The international fortnight is a chance to arrive somewhere before Manchester City arrive at Anfield.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 19, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Mon Sep 21, morning - eighteen minutes at the Vitality, and the sort of fortnight a nineteen-year-old uses to press a case. On for Wirtz on seventy-two in a game being protected, a five for a cameo in a closed match. He started the cup tie and Szoboszlai named him among those who deserve to play; the senior midfield ahead of him is four deep and settled.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Mon Sep 21, morning - away with the Netherlands, the doubt of Saturday now a fortnight behind him. Gakpo passed a warm-up test on two sore adductors, switched to the right, and made the winner, Opta crediting three chances created and Squawka noting 57 per cent of Isak's Liverpool league goals have come from his deliveries. He leaves as the player who decided the last game before the break.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Mon Sep 21, morning - twenty-six today, and away with Sweden as the leading man in the argument he was signed to settle. Isak turned twenty-six the day after settling the homecoming at the Vitality, his fourth goal in five league games, already past the three he managed in fourteen Premier League appearances across all of last season. Only Haaland has scored more in the division; the birthday is the quiet marker of a striker who has begun to justify the fee.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Mon Sep 21, morning - the break offers him nothing but more time, which for an Achilles is the whole treatment. Liverpool won the last game before it with the only senior nine at the club and Koumas as the nine-minute cover, the arrangement that holds until January. The club's framing is unchanged: a realistic chance of January, a big part of the rehab still to meet, with the Inter and Lens fixtures the first plausible dates; FotMob lists early January 2027.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Mon Sep 21, morning - the only Liverpool player in Thomas Tuchel's senior England squad, and away for the international window. Ngumoha was an unused substitute at Bournemouth once Gakpo passed his warm-up, and is in line for a first competitive cap after a friendly debut in June. The contract David Ornstein reported the club wants signed inside the month is, as far as the reporting goes, still unsigned.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 31, name: "Lewis Koumas", number: 67, position: "FWD", nationality: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.3, passCompletion: 77, progressiveCarries: 1.8, form: 6.3, status: "fit", injuryNote: "Mon Sep 21, morning - the nine-minute cameo at Bournemouth aside, still the entire depth chart behind Isak. Koumas came on for the last stretch with the game won, having started the cup tie through the middle and taken its player-of-the-match award. Until Ekitike's Achilles allows otherwise, he is the only cover for the one senior centre-forward at the club.", image: "",
    physical: { height: 180, weight: 73, pace: 80, acceleration: 81, sprintSpeed: 79 },
    career: [
      { years: "2013-", club: "Liverpool", fee: null, type: "youth" },
      { years: "2024-25", club: "Stoke City", fee: null, type: "loan" },
      { years: "2025", club: "Birmingham City", fee: null, type: "loan" },
      { years: "2025-26", club: "Hull City", fee: null, type: "loan" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Mon Sep 21, morning - the date he has worked toward is now inside this fortnight. Chiesa aims to resume training with the group by the end of the month, per Lewis Steele, having not played since the Como friendly in mid-August, with Sports Mole pencilling 11 October for availability, the Manchester City fixture. Left off the Champions League squad, so Europe was never in reach this autumn, but a fifth forward by mid-October would ease a front line that covered two flanks with four players all September.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Mon Sep 21, morning - third of three, and the three-week break removes club football entirely. Woodman was not in the Bournemouth squad, where Mamardashvili took the bench behind Alisson. A bench season at most; the cup tie with Chelsea on 28 October is the only realistic opening.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Mon Sep 21, morning - eighteen minutes at the Vitality, and the wide-forward queue still ahead of him. Munoz came on for Barcola on seventy-two as Liverpool saw out the lead, a five; his last meaningful moment remains the header against the Fulham bar. Iraola's framing is consistent and unhelpful to anyone wanting a start: he calls four wide forwards a luxury and plays most of them most weeks.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Mon Sep 21, morning - away on international duty, the makeshift right-back who has quietly made the position his own. Five consecutive league starts there and three clean sheets out of them; the BBC's line is that he looks comfortable defensively but does not offer much going forward, the trade this back four keeps making. He returns to face Semenyo and Manchester City with Bradley no closer.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 3, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Mon Sep 21, morning - off with France, the marquee signing still waiting to convince. Barcola took the left at Bournemouth against every preview, forced one save from Petrovic and was otherwise contained by a thirty-five-year-old on his 431st appearance for the club, a six. The caveat travels with him: it is still early days, and Liverpool want more from a £106m forward.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  focus: "Carried plate, not this edition's lead: Liverpool 3-1 Tottenham, Carabao Cup third round, 15 September, in which Dominik Szoboszlai came off the bench with Spurs pressing at 2-1, met the ball around thirty yards out and volleyed it past Martin Dubravka in stoppage time. It is carried again this edition, whose lead is Iraola's hands-on international break and the returns of Leoni and Chiesa, a training-ground story with no single photographable still",
  credit: "Plate · carried from 15 September",
  generatedAt: "2026-09-21T08:30:00Z",
  // Evening pass (Sun 20 September, 6pm ET / 11pm BST): MATCH PLAYED. Bournemouth 0-1 Liverpool at the Vitality,
  // Isak turning in a blocked Gakpo cross on 57 for a third consecutive Premier League clean sheet, a rise from
  // tenth to sixth, and Iraola the first Liverpool manager unbeaten in his opening five league games since Joe
  // Fagan in 1983 (Opta). The Szoboszlai plate is carried one more edition and generatedAt re-stamped only.
  // NO new image queued under STEP 7.5: the goal was a six-yard tap-in from a deflected block, which is decisive
  // without being a single photographable still, and the skill caps queueing at one genuinely visual moment per
  // edition. If Antigravity wants a plate for the next edition, the candidate is Jacquet, twenty-one, taking the
  // highest rating on the field on the afternoon France called him up. STANDINGS rebuilt from ESPN (Liverpool
  // sixth on nine). OPPOSITION rebuilt from scratch for Manchester City at Anfield, 11 October. All eight
  // generatedAt stamps 22:30Z.
  // Morning pass (Sun 20 September, ~4am ET): MATCHDAY. Bournemouth away at 2pm at the Vitality, unplayed at the time of
  // writing, so the Szoboszlai plate is carried and generatedAt re-stamped only. The lead rotated off Saturday's table
  // movement onto the game itself: Iraola's first return to the club he managed for three years, the game in hand finally
  // paid, and the one live team-news question being Cody Gakpo's adductor doubt ('I cannot guarantee it', per This Is
  // Anfield). A matchday preview is not a single photographable still, so NO new image was queued under STEP 7.5;
  // Antigravity may generate a post-match hero image later if the game produces one. Table byte-identical from ESPN,
  // Liverpool tenth. All eight generatedAt stamps 08:30Z.
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
      "Bournemouth 0-1 Liverpool, Premier League matchday five at the Vitality Stadium on Sunday 20 September. Alexander Isak turned in a blocked cross on fifty-seven minutes after Cody Gakpo beat Adrien Truffert on the right and Florian Wirtz, under pressure from James Hill, could not reach the delivery. It is a third consecutive Premier League clean sheet, the first such run since September 2024, and it makes Andoni Iraola the first manager to remain unbeaten in his opening five league games in charge of Liverpool, two won and three drawn, since Joe Fagan in September 1983. Liverpool rise from tenth to sixth on nine points.",
    subject: "No new plate requested this edition. The decisive moment was a six-yard tap-in from a deflected block, which does not resolve into a single strong still, and the skill caps queueing at one genuinely visual moment per edition.",
    prompt: "NO ACTION. Antigravity should not generate an image for this edition. The standing candidate for a future edition is Jeremy Jacquet, twenty-one, taking the highest rating on the field on the afternoon France called him up for the first time.",
    aspectRatio: "landscape",
    slug: "none-this-edition",
  },
};


// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Manchester City",
  shortName: "MCI",
  home: true,
  date: "2026-10-11T16:30:00",
  competition: "PL",
  venue: "Anfield",
  broadcast: "Sky Sports Main Event (4.30pm)",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
  { date: "2026-09-20", opponent: "Bournemouth",         home: false, score: "1-0", competition: "PL",  result: "W", scorers: "Isak 57'" },
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
  { pos: 1, team: "Manchester City", p: 5, w: 5, d: 0, l: 0, gd: 8, pts: 15, qualification: "UCL" },
  { pos: 2, team: "Arsenal", p: 5, w: 4, d: 0, l: 1, gd: 4, pts: 12, qualification: "UCL" },
  { pos: 3, team: "Brighton", p: 5, w: 3, d: 1, l: 1, gd: 11, pts: 10, qualification: "UCL" },
  { pos: 4, team: "Brentford", p: 5, w: 2, d: 3, l: 0, gd: 6, pts: 9, qualification: "UCL" },
  { pos: 5, team: "Leeds", p: 5, w: 2, d: 3, l: 0, gd: 4, pts: 9, qualification: "UEL" },
  { pos: 6, team: "Liverpool", p: 5, w: 2, d: 3, l: 0, gd: 3, pts: 9, highlight: true },
  { pos: 7, team: "Everton", p: 5, w: 2, d: 3, l: 0, gd: 3, pts: 9 },
  { pos: 8, team: "Hull", p: 5, w: 2, d: 2, l: 1, gd: 2, pts: 8 },
  { pos: 9, team: "Newcastle", p: 5, w: 2, d: 2, l: 1, gd: 0, pts: 8 },
  { pos: 10, team: "Chelsea", p: 5, w: 2, d: 1, l: 2, gd: -2, pts: 7 },
  { pos: 11, team: "Ipswich", p: 5, w: 2, d: 0, l: 3, gd: -4, pts: 6 },
  { pos: 12, team: "Manchester United", p: 5, w: 1, d: 2, l: 2, gd: 0, pts: 5 },
  { pos: 13, team: "Nott'm Forest", p: 5, w: 1, d: 2, l: 2, gd: -1, pts: 5 },
  { pos: 14, team: "Sunderland", p: 5, w: 1, d: 1, l: 3, gd: -4, pts: 4 },
  { pos: 15, team: "Crystal Palace", p: 5, w: 1, d: 1, l: 3, gd: -5, pts: 4 },
  { pos: 16, team: "Aston Villa", p: 5, w: 1, d: 1, l: 3, gd: -5, pts: 4 },
  { pos: 17, team: "Bournemouth", p: 5, w: 0, d: 3, l: 2, gd: -2, pts: 3 },
  { pos: 18, team: "Coventry", p: 5, w: 1, d: 0, l: 4, gd: -9, pts: 3, qualification: "REL" },
  { pos: 19, team: "Fulham", p: 5, w: 0, d: 2, l: 3, gd: -3, pts: 2, qualification: "REL" },
  { pos: 20, team: "Tottenham", p: 5, w: 0, d: 2, l: 3, gd: -6, pts: 2, qualification: "REL" },
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
  matchweek: 5,
  generatedAt: "2026-09-21T08:30:00Z",
  overview:
    "The international break arrives with the table settled on one perfect side and a compressed chase behind it. Manchester City lead on fifteen, five wins from five and three clear of Arsenal, who have not played since losing at Brighton; below them a queue of four clubs sits on nine, with Brentford, Leeds, Liverpool and Everton separated by goal difference alone. Liverpool are sixth of that group, unbeaten and with three clean sheets in a row, outside the Europa place only on goal difference, and the fixture that resumes their season is the leader at Anfield on 11 October. Bournemouth stay seventeenth on three, still without a league win under Marco Rose, while the relegation stripe reads Coventry, Fulham and Tottenham. Nothing moves now until the football comes back.",
  teams: {
    "Liverpool": "Sixth on nine, unbeaten, and up four places on an afternoon that finally paid the game in hand. Level on points with fourth, fifth and seventh, outside the Europa stripe on goal difference alone, and hosting Manchester City on 11 October in the first fixture back.",
    "Manchester City": "Top on fifteen, five wins from five, and three clear after a 5-3 over Sunderland that Maresca called too many goals. Haaland's late finish there made him the first player since Harry Kane to have scored against every Premier League opponent he has faced. Anfield next, on 11 October.",
    "Arsenal": "Second on twelve, idle this weekend, and now three behind having led the division a week ago. They visit Anfield on 1 November, after Liverpool have played City, Brentford and Brighton.",
    "Brighton": "Third on ten with the division's best goal difference and its most goals, sixteen, still on the back of a 3-0 over the champions at the Amex. They come to Anfield on 25 October.",
    "Brentford": "Fourth on nine and the last club inside the Champions League stripe, unbeaten in five and level on points with Liverpool on goal difference. Liverpool visit on 17 October, three days after hosting City.",
    "Leeds": "Fifth on nine and drawing the Europa stripe, a promoted side five games unbeaten with two wins and three draws. They hold the place ahead of Liverpool on a goal difference of plus four to plus three.",
    "Everton": "Seventh on nine, also unbeaten, also level with Liverpool, and separated from them by nothing except the order the table puts them in.",
    "Chelsea": "Tenth on seven. They are at Anfield on 28 October in the fourth round of the Carabao Cup, an eight o'clock kick-off on Sky and ITV.",
    "Sunderland": "Fourteenth on four after scoring three at the Etihad and losing anyway, Brian Brobbey taking a hat-trick out of a defeat.",
    "Bournemouth": "Seventeenth on three, and beaten at home by Liverpool without scoring. It is the ninth time in the club's history they have failed to win any of their opening five league games, and only under Iraola in 2023-24 have they endured a longer winless start in the Premier League.",
    "Fulham": "Nineteenth on two after a draw with Manchester United, still inside the relegation stripe, and still carrying the point taken at Anfield on 12 September as a third of their season's return.",
    "Tottenham": "Bottom on two, beaten at Anfield twice this month in two competitions, and now at the foot of the division with a game played against everyone.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Manager Who Will Not Take The Three Weeks Off.",
    byline: "This Is Anfield / Liverpool FC",
    dateline: "AXA Training Centre · 21 September",
    category: "Manager",
    body:
      "There is a version of an international break in which a manager unbeaten in his first five league games books a warm-weather week and lets the physios do the work. Andoni Iraola is not running that version. With most of his squad on aeroplanes, he has kept a small senior group at the AXA and turned the fortnight into the coaching runway the fixture list otherwise denies him, pitch sessions in the morning and the meeting rooms in the afternoon, spent picking apart a start he keeps calling unconvincing even as it stays unbeaten. The internationals get a short break first. Then the work he cannot do between games gets done here.",
  },
  {
    n: "02",
    headline: "A Year After The Knee, Leoni Walks Back Toward The Group.",
    byline: "Sports Mole / Daily Mail",
    dateline: "AXA Training Centre · 20 September",
    category: "Injuries",
    body:
      "It is almost exactly twelve months since Giovanni Leoni tore his ACL on his Liverpool debut, and the plan for the coming fortnight is the one the whole recovery has been pointed at. 'The next one probably should be Giovanni Leoni,' Iraola said this week. 'I think the plan is also to start training during the break, with the group.' Sports Mole pencils mid-October for real availability, and the manager is careful to call the group work a plan rather than a promise. Alongside him, Federico Chiesa is aiming to be back on the grass by month's end. Two returns, quietly, in a fortnight with no games to lose them in.",
  },
  {
    n: "03",
    headline: "Twenty-Six, And Beginning To Look Like The Fee.",
    byline: "Opta Analyst / ESPN",
    dateline: "Anfield · 21 September",
    category: "Football News",
    body:
      "Alexander Isak turns twenty-six today, on international duty with Sweden, the morning after a scruffy six-yard finish settled the homecoming at Bournemouth. It was not a good performance and it did not need to be. Four league goals in five games is already more than the three he managed in fourteen Premier League appearances across all of last season, and only Erling Haaland has scored more in the division this year. A British-record signing spends most of a first season being measured against the number beside his name. This one has begun, quietly and a little unconvincingly, to answer it, and he does the rest of his growing up away from Anfield for three weeks.",
  },
  {
    n: "04",
    headline: "The Squad Scatters, And A Frenchman Leaves For The Champions.",
    byline: "Liverpool FC / L'Equipe",
    dateline: "AXA Training Centre · 19 September",
    category: "Football News",
    body:
      "The clearest verdict on Liverpool's September is not a result but a phone call. Jeremy Jacquet, twenty-one and three months into English football, has been called up to a first senior France camp, the reward for three clean sheets and the best individual month of any defender at the club. He goes with most of the first team: Isak to Sweden, Wirtz to Germany, Gakpo and the Dutch contingent home, and Rio Ngumoha to England as the only Liverpool player in Thomas Tuchel's senior squad. The ones left behind, Endo, Gomez and the academy, will do the work nobody watches. The best of the ones who leave will do it in front of the cameras.",
  },
  {
    n: "05",
    headline: "The Fixture List Is Waiting, And It Is Not Kind.",
    byline: "Sky Sports / Opta Analyst",
    dateline: "Anfield · 20 September",
    category: "Race for Europe",
    body:
      "This is the pause before the hard part. Liverpool go into the break sixth, unbeaten, three clean sheets in a row, and level with the clubs in fourth, fifth and seventh, which is a compressed European race a month into a season rather than a title race. What waits on the far side is four of the top four inside five weeks: Manchester City at Anfield on the eleventh, perfect from five and three clear, then LASK away, Brentford away, Brighton and Arsenal, with Chelsea in the cup folded in. City conceded three to Sunderland last time out; the space behind their high line is the one thing Liverpool can plan for while everyone else is away.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-21T08:30:00Z",
  summary:
    "The Premier League stops for three weeks and Andoni Iraola does not: the manager has confirmed he will keep a small senior group working at the AXA through the international break rather than treat it as a holiday, and the plan is built around two returns, with Giovanni Leoni and Federico Chiesa both due to resume full training with the group during the fortnight. Leoni's is the one the season has been waiting on, a year to the week since the ACL rupture on his debut; Chiesa is aiming to be back on the grass by the end of the month. Most of the first team has scattered to national sides, Jeremy Jacquet to a first France camp and Rio Ngumoha as the only Liverpool player in Thomas Tuchel's senior England squad, while Alexander Isak spends his twenty-sixth birthday, today, away with Sweden as the leading scorer in the case he was signed to make. Liverpool go into the break sixth on nine points, unbeaten, three clean sheets in a row, and level with the clubs in fourth, fifth and seventh. It ends on 11 October with Manchester City at Anfield, five wins from five and three points clear of everyone.",
  keyTopics: [
    {
      title:
        "Iraola Keeps The Lights On At The AXA, And Builds The Break Around Two Returns (This Is Anfield / Liverpool FC, today)",
      detail:
        "The freshest line of a quiet Monday: with the league paused for three weeks, Iraola has said he will give the non-internationals a short break and then resume intensive work at the training ground rather than let the fortnight drift, using the pitches and the meeting rooms to analyse a start he is not yet satisfied with. The senior group that stays is small, Wataru Endo, Joe Gomez and James McConnell among the few not away, padded out by the under-21s and under-18s. The plan he described this week is built around two men returning to full training, Giovanni Leoni and Federico Chiesa, which is the part that matters most to a squad that has covered a whole autumn with two fit centre-forwards and a two-man centre-back rota.",
      category: "general",
    },
    {
      title:
        "Isak Turns Twenty-Six Today, Away With Sweden As The Argument Turns His Way (Opta Analyst, today)",
      detail:
        "Alexander Isak spends his twenty-sixth birthday on international duty, the day after settling the homecoming at the Vitality with his fourth league goal in five games. That is already more than the three he managed in fourteen Premier League appearances across the whole of last season, per Opta, though across all competitions the four only equals last term, the honest qualifier. Only Erling Haaland has scored more in the division this year, and his goals alone have taken five of Liverpool's nine points. The birthday is a small marker of a British-record signing who has begun to look worth it.",
      category: "general",
    },
    {
      title:
        "The Few Who Stay: Gomez, Endo And A Squad Built From Academies (Liverpool FC, today)",
      detail:
        "While the internationals disperse, the senior names left at Kirkby are Endo, Gomez and McConnell, with the sessions filled out by under-21s and under-18s. Gomez, back in full training after a hamstring problem, is a fourth centre-back and the only specialist right-back in the building in one body, and his next appearance in any competition will be his three hundredth for the club. Endo is available, useful in training, and still expected to be sold in January, the last window a fee is recoverable on his 2027 deal.",
      category: "general",
    },
    {
      title:
        "Unbeaten Into The Break: Sixth, Three Clean Sheets, And The Numbers Behind It (ESPN / Opta Analyst, today)",
      detail:
        "The pause catches Liverpool sixth on nine points from five, unbeaten under Iraola, level with Brentford in fourth, Leeds in fifth and Everton in seventh, and outside the Europa place only on goal difference. The defensive run is the honest part: three consecutive clean sheets, the first such sequence since September 2024, kept by a back four containing a twenty-one-year-old and a centre-half at right-back. The pace of 1.80 points a game projects to sixty-eight, historically about the cost of the last Champions League place, though five games is not a season.",
      category: "general",
    },
    {
      title:
        "What Waits On The Other Side: City Perfect, Haaland With The Full Set (Sky Sports / Opta Analyst, today)",
      detail:
        "The reunion is not gentle. Manchester City come to Anfield on 11 October having won all five and beaten Sunderland 5-3 last time out, three points clear of the field, and Erling Haaland arrives having now scored against every one of the twenty-five Premier League clubs he has faced, the only player besides Harry Kane with more than one appearance to hold the record. The reading Liverpool will take is the other half of that Sunderland afternoon: Maresca's side conceded three at home and leave space behind a high line when the ball turns over. LASK away, Brentford away and Brighton follow inside a fortnight.",
      category: "matches",
    },
    {
      title:
        "Leoni Set To Rejoin Group Training During The Break, A Year On From The ACL (Sports Mole / Daily Mail, this week)",
      detail:
        "Iraola's clearest update of the international window was on the teenager: 'The next one probably should be Giovanni Leoni. I think the plan is also to start training during the break, with the group.' It arrives almost exactly twelve months after the ACL rupture on his debut in September 2025, and Lewis Steele reported the step was approaching. Sports Mole pencils mid-October for actual availability; the manager frames the group work as the plan rather than a promise. His return is the thing that would finally end the rota of Van Dijk and Jacquet with Araujo covering right-back.",
      category: "injuries",
    },
    {
      title:
        "Chiesa Aiming To Be Back On The Grass By Month's End (This Is Anfield / Empire of the Kop, this week)",
      detail:
        "The other return Iraola named for the break: 'I think even Fede should be around those dates.' Chiesa has not played since a muscle problem in the Como friendly in mid-August and is targeting a resumption of training with the group by the end of September, with Sports Mole pencilling 11 October, the Manchester City fixture, for availability. He was left off the Champions League squad, so Europe was never in reach this autumn, but a fifth forward by mid-October would ease a front line that spent September covering two flanks with four players.",
      category: "injuries",
    },
    {
      title:
        "Jacquet Called Up By France For The First Time, The Month's Standout Defender (Liverpool FC / L'Equipe, this week)",
      detail:
        "The clearest individual endorsement of Liverpool's start is a call-up rather than a result: Jeremy Jacquet, twenty-one and three months into English football, joins a first senior France camp after three consecutive clean sheets and a man-of-the-match eight at Bournemouth. Iraola's line on him this week was about composure and confidence, and about being happy for a summer signing to be rewarded so quickly. The initial fee was 55m pounds, rising to as much as 60m; on the evidence of September it looks like the least complicated thing Liverpool bought.",
      category: "general",
    },
    {
      title:
        "'Get Used To Not Being Able To Train': Iraola On The Cost Of A Long Autumn (This Is Anfield, this week)",
      detail:
        "The manager's other theme of the week was the calendar itself. With the merged September and October window taking three weeks and the block that follows it running City, Brentford, Brighton and Arsenal inside five, Iraola has said the group must get used to not being able to train between fixtures once the season resumes, which is why the break becomes the one genuine coaching runway he gets before December. It is the tactical reason the AXA sessions matter more than a normal international fortnight.",
      category: "tactics",
    }
  ],
  sources: [
    "This Is Anfield",
    "Liverpool FC",
    "Sports Mole",
    "Daily Mail",
    "Empire of the Kop",
    "L'Equipe",
    "Opta Analyst",
    "ESPN",
    "Sky Sports",
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
  generatedAt: "2026-09-21T08:30:00Z",
  opponent: "Manchester City",
  shortName: "MCI",
  fixture: {
    date: "2026-10-11T16:30:00",
    venue: "Anfield",
    home: true,
    competition: "PL",
    broadcast: "Sky Sports Main Event (4.30pm)",
  },
  manager: "Enzo Maresca",
  formation: "4-2-3-1",
  leaguePosition: 1,
  summary:
    "Three weeks out from the fixture, and with the international break now open, the dossier stays pointed at the only side in England with a perfect record. Manchester City are first on fifteen points, five wins from five, three clear of Arsenal, and they are doing it in their first season since 2015-16 without Pep Guardiola, who resigned in the summer and was replaced on 29 June by Enzo Maresca. The record flatters a team that is not yet under control. Last weekend they beat Sunderland 5-3 at the Etihad, having been pegged back twice inside the opening half-hour, and Maresca's own verdict afterwards was that there were too many goals and that he would much prefer to win 1-0. Before that came a 1-0 at home to Coventry, a 4-1 at Crystal Palace, a 2-1 over Bournemouth, and a 1-0 at Old Trafford in the Manchester derby, where the winner also needed a VAR review to stand. Anfield on 11 October is the first fixture after the international break for both clubs, and it is the hardest name on Liverpool's autumn list arriving at the moment Liverpool are least likely to be sharp.",
  shape:
    "Maresca has kept the possession spine and loosened everything in front of it, which is why City look like a scoring machine and a defensive argument at the same time. The back four sits high with Gvardiol at left-back stepping into midfield and Matheus Nunes giving width on the right; Enzo Fernandez and Elliot Anderson screen in a double pivot that is more about ball progression than protection. Rayan Cherki plays between the lines and carries, with Antoine Semenyo and Iliman Ndiaye on the flanks and Haaland pinning the centre-backs. The pattern that beat Sunderland twice over and nearly cost them the afternoon is the same one: when the ball turns over in City's half, the space between that high line and Donnarumma is enormous, and Sunderland needed very little invitation to run into it three times last weekend.",
  keyPlayers: [
    {
      name: "Erling Haaland",
      role: "Centre-forward",
      threat: "Scored his fourth of the league season against Sunderland last weekend, turning in a Gvardiol cross on eighty-one minutes after a VAR review, and in doing so became the only player besides Harry Kane with more than one Premier League appearance to have scored against every club he has faced, twenty-five out of twenty-five, per Opta. Against Liverpool specifically he has three goals in six meetings, one of his leaner records, but the division's leading scorer arriving at a back line that has kept three clean sheets is the single clearest question of the fixture.",
      source: "Opta Analyst",
    },
    {
      name: "Rayan Cherki",
      role: "Attacking midfielder",
      threat: "Scored twice inside the opening half-hour against Sunderland, putting City in front on both occasions, per Sky Sports. He operates in the seam between a holding pair and the centre-backs, which is the grass FORM_TRENDS has flagged as Liverpool's least well covered all season, and he is the player Maresca's system trusts to carry the ball through the middle rather than round the outside.",
      source: "Sky Sports / Opta Analyst",
    },
    {
      name: "Antoine Semenyo",
      role: "Wide forward",
      threat: "Struck either side of half-time against Sunderland to put City two goals clear, per Sky Sports, and he arrives at this fixture with the additional detail that he spent his formative Premier League years at Bournemouth under Iraola. He plays off the left, attacking the flank Liverpool defend with Milos Kerkez, who was targeted repeatedly with the crossfield ball at the Vitality on the final weekend before the break.",
      source: "Sky Sports / BBC Sport",
    },
    {
      name: "Enzo Fernandez",
      role: "Central midfielder",
      threat: "Scored his first Manchester City goal against Sunderland last weekend, per Sky Sports, from the deeper of the two midfield positions. He is half of the pivot that decides whether City's high line is protected or abandoned, and the eight-goal afternoon suggests the balance is not yet settled three weeks before Anfield.",
      source: "Sky Sports",
    },
    {
      name: "Gianluigi Donnarumma",
      role: "Goalkeeper",
      threat: "Conceded three at home to a promoted side last weekend, which is the only blemish on a five-win start and the reason City's goal difference is plus eight rather than something more intimidating. Liverpool's problem this season has been converting what they create rather than creating it: six goals from 6.00 expected across the first four league games before today. A goalkeeper behind a defence that has just shipped three is the most exploitable name on the sheet.",
      source: "ESPN / Opta Analyst",
    },
  ],
  predictedXI: [
    "Donnarumma", "Nunes", "Dias", "Guehi", "Gvardiol",
    "Fernandez", "Anderson", "Ndiaye", "Cherki", "Semenyo", "Haaland",
  ],
  absentees: [],
  recentForm: [
    { date: "2026-09-20", opponent: "Sunderland", home: true, score: "5-3", result: "W", note: "Eight goals at the Etihad and a manager who refused to enjoy it. Enzo Fernandez opened with his first City goal and Rayan Cherki twice put them in front inside the opening half-hour, with Brian Brobbey equalising almost immediately on both occasions. Antoine Semenyo struck either side of the interval before Brobbey completed a hat-trick, and Haaland turned in a Gvardiol cross on eighty-one after a VAR check. Maresca afterwards: too many goals, too many goals, he would prefer to win 1-0." },
    { date: "2026-09-13", opponent: "Manchester United", home: false, score: "0-1", result: "W", note: "The Manchester derby at Old Trafford, settled by a single goal that was originally ruled out and awarded after a VAR review, per Opta's account of the sequence. A fourth straight win and the result that established City as the division's pacesetter." },
    { date: "2026-09-05", opponent: "Coventry City", home: true, score: "1-0", result: "W", note: "A narrow home win over the promoted side, and the only occasion this season on which Maresca's team has both kept a clean sheet and scored once. It is the scoreline he said last weekend he would prefer." },
    { date: "2026-08-28", opponent: "Crystal Palace", home: false, score: "4-1", result: "W", note: "Four scored away from home at Selhurst Park, the clearest evidence of the attacking ceiling of this side, and the game that established the pattern of the season: plenty at one end, not always enough attention at the other." },
    { date: "2026-08-23", opponent: "Bournemouth", home: true, score: "2-1", result: "W", note: "Maresca's first league game in charge and the start of the perfect run, against the club Liverpool beat last weekend. Bournemouth led, which was the first instalment of the record they carried into September." },
  ],
  liverpoolAngle:
    "This is the fixture the whole autumn has been organised around, and the international break is the last clear runway before it. Liverpool arrive unbeaten with three clean sheets in a row and the division's most miserly expected-goals-against figure; City arrive having scored five at home and conceded three to a promoted side on the same afternoon. The meeting point is the one weakness each has failed to fix. Liverpool have conceded nine fast-break goals since the start of last season, the most in the league per Opta, and the department that gives them up is still the right, where Ronald Araujo, a centre-half by trade, has now started five consecutive league games out of position with Conor Bradley not due back before late November. Semenyo attacks that side. City, for their part, leave an enormous gap between a high line and Donnarumma whenever the ball turns over, and Sunderland ran into it three times last weekend. Liverpool's recurring failure is finishing, not creating, which is the one thing Isak's four goals in five games have begun to answer. The honest reading is that the side with the better underlying defensive numbers is the one that has spent a month drawing games, and the side with the perfect record is the one Maresca himself says is conceding too much. Three weeks of international football sit in between, and neither manager will see most of his players until the week of the game.",
  modelLine: null,
  sources: ["Opta Analyst", "Sky Sports", "ESPN", "BBC Sport", "Liverpool FC"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-21T08:30:00Z",
  competition: "PL",
  played: 5,
  headline:
    "With the league paused for three weeks, the five-game picture holds its shape rather than settling anything. Liverpool have made 7.57 expected goals and conceded 5.92 across the opening month, seven scored and four conceded, a side scoring and conceding a little under what the model says it should. The number that travels into the break is the defensive one: three consecutive clean sheets, the longest run without conceding since a four-game sequence between May and September 2024, per Opta, kept by a back four with a centre-half at right-back and a twenty-one-year-old alongside the captain. What the sample cannot yet tell you is whether a line that has shut out Ipswich, Fulham and a winless Bournemouth will do the same to a Manchester City side that scored five last time out. Five games is a larger sample than four and still not a sample.",
  diagnosis: [
    {
      label: "Closing out a lead",
      detail: "Promoted from a warning to a piece of evidence, in Liverpool's favour for once. This entry has spent the season noting that Liverpool draw games they lead, and at the Vitality they took a lead on fifty-seven minutes at a ground where the hosts had scored first in every league game they had played, and then kept it for thirty-three minutes plus stoppage time against late pressure. Iraola's own description of the second half was that his side controlled the game much better and had chances to finish it. It is one instance against three drawn games, but it is the first instance.",
      severity: "positive",
      source: "Opta Analyst / Goal",
    },
    {
      label: "Fast-break concession, still unanswered",
      detail: "The warning stays at high because the fixture that was supposed to test it did not. Bournemouth made 0.76 expected goals and two shots on target, and the one genuine chance they created, Evanilson's backheel flick on eighteen, came from a cross rather than a counter. Opta still count nine fast-break goals conceded by Liverpool since the start of last season, the most in the league, and the next side to attack that space is Manchester City, whose own high line and turnover behaviour let Sunderland score three at the Etihad last time out. Two teams with the same fault, one fixture, three weeks away.",
      severity: "high",
      source: "Opta Analyst / Squawka",
    },
    {
      label: "The finishing gap has started to close",
      detail: "Seven goals from 7.57 expected across five league games is a side scoring roughly what it makes, which sounds unremarkable until you set it beside the first four games, where six goals came from 6.00 expected while the team drew three of them. The difference at Bournemouth was not volume, twelve shots is ordinary, but that the one clear chance fell to the only senior centre-forward at the club and he took it. Four league goals in five for Isak against three in fourteen Premier League appearances across the whole of last season is the single largest improvement on the page.",
      severity: "positive",
      source: "Opta Analyst / Squawka",
    },
    {
      label: "The home draw, still the unresolved record",
      detail: "Today's win came away, which does not touch it. Liverpool have drawn four consecutive Premier League games at Anfield, the first such run since November 2011 per Opta, and the first time in the club's history they have drawn both opening home league games of a season. The next three home league fixtures are Manchester City, Brighton and Arsenal, in that order, which is an unhelpful sequence in which to still be looking for a first home league win.",
      severity: "high",
      source: "Opta Analyst / Liverpool FC",
    },
    {
      label: "A defence assembled from the wrong parts, working anyway",
      detail: "Three clean sheets in a row, the longest run since 2024, kept by a back four in which the right-back is a centre-half on loan and one centre-back is twenty-one and three months into English football. Jeremy Jeremy Jacquet took the BBC's highest rating on the field at the Vitality, eight, after an early foul on Evanilson that his own manager described as the sort of thing the player then answered. The caveat is the opposition: Ipswich, Fulham and a winless Bournemouth. City on 11 October is the first real examination of it.",
      severity: "medium",
      source: "BBC Sport / Opta Analyst",
    }
  ],
  matches: [
    {
      date: "2026-09-20",
      opponent: "Bournemouth",
      home: false,
      score: "1-0",
      result: "W",
      xgFor: 1.57,
      xgAgainst: 0.76,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 12,
      pending: false,
      verdict: "A first away league win of the season, and the shape of it was a slow burn rather than a control job. Squawka's Opta-fed post-match page gives Liverpool 1.57 expected goals to Bournemouth's 0.76, twelve shots to nine, three on target to two, one big chance each, and 54 per cent of the ball. Isak turned in a blocked cross on fifty-seven after Gakpo had beaten Truffert on the right and Wirtz had missed the delivery under pressure from James Hill. Alisson had denied Evanilson an improvised backheel flick on eighteen; Szoboszlai put one free-kick inches wide on ten and another wide before the break; Barcola's deflected curler was saved by Petrovic's legs; Hill blocked a second Isak shot after Gakpo released him. Gakpo created a joint-team-high three chances and won nine of sixteen duels. First-half splits are not published and stay null.",
      source: "Squawka (Opta) / Opta Analyst / FotMob",
    },
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
    xgFor: 7.57,
    xgAgainst: 5.92,
    goalsFor: 7,
    goalsAgainst: 4,
    points: 9,
    note: "Premier League only, five games, Opta throughout. xG for is 2.73 (Newcastle) plus 1.61 (Forest) plus 0.53 (Ipswich) plus 1.13 (Fulham) plus 1.57 (Bournemouth); xG against is 1.43 plus 2.30 plus 0.72 plus 0.71 plus 0.76. The Champions League figures against Atletico (1.68 for, 0.81 against) and the Carabao Cup figures against Tottenham (1.53 for, 2.30 against) are shown on their own cards and are not aggregated here. First-half splits exist only for the Forest and Tottenham matches and are not aggregated."
  },
  optaFacts: [
    "Alexander Isak, twenty-six today, has four Premier League goals in five games, already more than the three he managed in fourteen appearances across the whole of last season, per Opta. Only Erling Haaland has scored more in the division this year, and Squawka calculate that 57 per cent of Isak's Liverpool league goals have been assisted by Cody Gakpo.",
    "Liverpool carry three consecutive Premier League clean sheets into the break, their first such run since September 2024, when it reached four, per Opta. It is their longest spell without conceding in the league since that sequence, assembled by a back four containing a summer signing at twenty-one and a centre-half playing right-back.",
    "Erling Haaland, who comes to Anfield on 11 October, has now scored against all twenty-five clubs he has faced in the Premier League, per Opta, the only player with more than one appearance in the competition besides Harry Kane to hold that record. Liverpool are among his leaner returns at three goals in six meetings.",
    "Andoni Iraola is the first manager to remain unbeaten in his first five league games in charge of Liverpool, two won and three drawn, since Joe Fagan in September 1983, per Opta. Fagan won the league, the European Cup and the League Cup that season. The comparison is arithmetic rather than prophecy, and the run has one more win than draw.",
  ],
  sources: ["Opta Analyst", "Squawka", "Goal", "EPL Index", "Liverpool FC", "BBC Sport", "Sofascore", "Premier League", "Sky Sports", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-21T08:30:00Z",
  headline:
    "The board thins out for three weeks, and the two names that matter are the ones walking back onto it. Iraola has kept a small senior group at the AXA through the international break, Endo, Gomez and McConnell among the few not away, and framed the fortnight around Giovanni Leoni and Federico Chiesa both resuming full training with the group. Leoni's is the return the season has waited on, a year on from the ACL; Chiesa is aiming to be back on the grass by month's end. No new injury emerged from the Bournemouth win, Gakpo having passed a warm-up on his adductors and come through ninety minutes. Right-back remains the department to watch, Araujo now five straight league starts out of position with no reinforcement available until January.",
  minutesNote:
    "Premier League minutes are not published here yet. Five league games, one Champions League game and one Carabao Cup tie have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "January at the earliest: 'a reasonable chance' of the last two Champions League league-phase games (Inter 19 Jan, Lens 27 Jan per This Is Anfield); Iraola confirms 'Hugo will go later' than the international break", note: "The absence the break does nothing to shorten, because for an Achilles time is the whole treatment. Liverpool won the last game before the pause with the only senior nine at the club and Koumas as the nine-minute cover, the arrangement that holds until the new year. The January framing from Iraola's recent press conference stands: 'a hope and a realistic chance that he could help us in January', with 'a big part of the rehab still to meet'. Isak remains the only fit senior nine until then, Koumas the false-nine cover the cup used.", source: "Liverpool FC / This Is Anfield / Sports Mole" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training in the September/October international break; Sports Mole pencils mid-October as an availability target", note: "The board's headline return. Iraola confirmed the plan this week: 'The next one probably should be Giovanni Leoni. I think the plan is also to start training during the break, with the group.' It lands almost exactly a year after the ACL rupture on his debut, a step Lewis Steele had reported was approaching. Sports Mole pencils mid-October for actual availability; the manager calls the group work a plan rather than a promise. His return is the one that would end the two-man centre-back rota for good.", source: "Daily Mail / Liverpool FC / Sports Mole" },
    { name: "Conor Bradley", issue: "Knee", expected: "No club date. FotMob's injury listing now carries early January 2027, later than the 21 November Sports Mole previously pencilled", note: "The break arrives and the timeline does not shorten with it. A fifth consecutive league game has gone by without him and Araujo has made right-back his own, so Bradley returns to no obvious vacancy. Lewis Steele reported individual training and ball work resuming, eight months on from the January knee injury against Arsenal, which is the first genuine forward step in months. Against that, FotMob has drifted his listing to early January 2027 and the club has said nothing beyond Iraola's 'probably Conor will go later'.", source: "Daily Mail / Liverpool FC / FotMob / Sports Mole" },
    { name: "Federico Chiesa", issue: "Lower back (originally muscle, Como friendly, August)", expected: "Back in training over the international break; Sports Mole pencils 11 October as an availability target", note: "The one with an actual date, now inside the fortnight. Lewis Steele reported Chiesa is aiming to resume training with the group by the end of September, having not played since a muscle problem in the Como friendly in mid-August, and Iraola named him alongside Leoni for the break: 'even Fede should be around those dates.' Empire of the Kop note he would almost certainly have played in the cup had he been fit. Left off the Champions League squad, so Europe was never in reach this autumn, but a fifth forward by mid-October would ease a front line covering two flanks with four players.", source: "Daily Mail / Empire of the Kop / Sports Mole / This Is Anfield" },
  ],
  returning: [
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "Fully fit, not on international duty, and central to the break's plans", note: "One of the senior names Iraola keeps at the AXA while the internationals scatter, and the more useful for it. Gomez is back in full training after the hamstring problem that cost him a month, a fourth senior centre-back and the only specialist right-back in the building in one body, and his next appearance in any competition will be his three hundredth for the club. Unused at Bournemouth, where the first-choice pair kept a third clean sheet without him; the fortnight of internal football is where a squad this thin at the back keeps him sharp.", source: "ESPN / BBC Sport / Liverpool FC" },
    { name: "Giorgi Mamardashvili", issue: "No injury; behind Alisson all season", status: "The senior goalkeeper at the AXA while Alisson is with Brazil", note: "The deputy gets his best fortnight of the season by default. With Alisson away on international duty, Mamardashvili is the first-choice goalkeeper in training, the closest he has been to the front of the queue since arriving. His one appearance remains the cup tie and the late save that protected it, which EPL Index rated highly. The next realistic start is the Carabao Cup fourth round against Chelsea at Anfield on 28 October.", source: "ESPN / BBC Sport / EPL Index (Yahoo Sports)" },
    { name: "Cody Gakpo", issue: "Soreness in both adductors, resolved by a matchday warm-up", status: "Passed fit, made the winner, now away with the Netherlands", note: "The doubt that dominated the last matchday closed twice over and is now a fortnight behind him. Gakpo, who missed a session with adductor soreness and whom Iraola would not promise, came through a warm-up test, was moved to the right, and produced the ball that Wirtz missed and Isak turned in, finishing with a joint-team-high three chances created per Opta. He now joins the Netherlands, which is the part a club with one senior centre-forward and a forward who covers three positions would rather not dwell on for three weeks.", source: "Opta Analyst / BBC Sport / Squawka" },
    { name: "Wataru Endo", issue: "No injury; available and on the transfer list from January", status: "Not on international duty; working at the AXA; a January exit expected", note: "Available, useful in training, and still leaving in the winter, which is the shape of his season. Endo is among the senior group Iraola keeps through the break, and Liverpool closed out the Bournemouth lead without ever calling on an extra holding midfielder. The reporting stands: FSG will sanction a January exit, the last window in which a fee is recoverable on a 2027 contract, with Ben Jacobs's line that 'Iraola clearly doesn't fancy him'. The consequence for this page is dated rather than dramatic: from February the emergency fifth centre-back has no occupant unless Leoni's knee has held.", source: "CaughtOffside / Football365 / ESPN" },
    { name: "Milos Kerkez", issue: "No injury; competing with Tsimikas at left-back", status: "Away with Hungary; the settled starter at left-back for now", note: "He came through a hard ninety at the club that sold him and then joined up with Hungary. The BBC's reading of Kerkez at the Vitality was that he struggled initially and was regularly targeted with the crossfield ball over his head, and that the credit was for effort rather than quality: a six. Tsimikas was an unused substitute, which settles the week's selection without settling the department. Two senior options, a consensus that neither is at the manager's standard, and no market until January.", source: "BBC Sport / ESPN / Rousing The Kop" },
  ],
  startersLastMatch: {
    match: "Bournemouth 0-1 Liverpool, 20 September (Premier League matchday five) · the confirmed XI, per ESPN and BBC Sport",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Mac Allister", "Szoboszlai", "Gakpo", "Wirtz", "Barcola", "Isak"],
    changes: "Three changes from the goalless draw at Fulham on 12 September, per the BBC, and a full reversal of the ten changes made for the cup tie against Tottenham. The 4-2-3-1 that every Sunday preview named was the shape used, with one deviation nobody predicted: Gakpo started on the right rather than the left, with Barcola on the left, where Adam Smith largely nullified him. Szoboszlai was booked shortly after half-time. Munoz replaced Barcola and Nyoni replaced Wirtz on seventy-two; Gravenberch replaced Szoboszlai and Koumas replaced Isak on eighty-one. Unused: Mamardashvili, Gomez, Tsimikas, Frimpong and Ngumoha.",
    source: "ESPN / BBC Sport / Opta Analyst",
  },
  depthRisk: [
    { position: "Right-back", level: "high", detail: "Held at the top of the list, and the break does nothing to ease it. Ronald Araujo, a centre-half by trade, has started five consecutive league games at right-back and the BBC's verdict at Bournemouth was that he looks comfortable defensively there but did not do much going forward, the accurate summary of a compromise working. The department does not get deeper for three months: Conor Bradley's knee has no club date and FotMob's listing now pushes him to early January, Frimpong is the cup alternative, Gomez is the only specialist and stays at the AXA through the break. Manchester City attack that flank with Antoine Semenyo." },
    { position: "Centre-forward", level: "high", detail: "One senior nine, and the last game before the break justified the arrangement rather than fixing it. Isak scored his fourth in five league games and Liverpool's other routes to a goal at the Vitality were a deflected Barcola shot and two Szoboszlai free-kicks. Koumas is the false-nine cover the cup used. Ekitike's Achilles keeps January as the earliest realistic return, so a single hamstring still separates this squad from a genuine crisis, and the international break is three weeks of that hamstring being used by Sweden. Chiesa resuming training in the fortnight is the one bit of relief in view." },
    { position: "Centre-back", level: "medium", detail: "Held at medium, and the reason has strengthened. Van Dijk and Jacquet kept a third consecutive clean sheet together and Jacquet took the highest rating on the field, which makes the first-choice pair the least pressing question on this board. Behind them Gomez is fit and stays at the AXA over the break, Araujo covers at a pinch, and Leoni is due to rejoin group training during the international window with Sports Mole pencilling mid-October. The dated caveat is unchanged: Endo, the emergency fifth centre-half, is listed for sale in January." },
    { position: "Left-back", level: "high", detail: "The last matchday did nothing to lower it. Milos Kerkez started against the club that sold him and the BBC's report is that he struggled initially and was regularly targeted with the crossfield ball over his head, with effort rather than quality the thing worth praising. Tsimikas was an unused substitute. Two senior options, neither of whom the reporting believes is at the manager's standard, no market until January, and Semenyo attacking that side on 11 October." },
    { position: "Wide forward", level: "medium", detail: "The department that won the last game, from an unexpected arrangement. Gakpo, a fitness doubt until the warm-up, played the right rather than the left and created the joint-most chances on the field; Barcola played the left and was largely contained. Munoz is the fourth option and away for none of the acclaim. Ngumoha is with England. Chiesa is due to resume training by the end of the month, which would make five wide forwards for two flanks by mid-October." },
    { position: "Central midfield", level: "medium", detail: "Held at medium, the pivot question open rather than settled. Mac Allister and Szoboszlai started together and the BBC's reading was that Mac Allister found space to open the game up after a slow start while Szoboszlai played with purpose, was booked after half-time, and put two free-kicks narrowly wide. Gravenberch came on for the last nine minutes, the clearest signal yet of the order. Endo, available all season as the emergency fifth centre-back, is listed for a January exit." },
  ],
  sources: ["Sports Mole", "Liverpool FC", "This Is Anfield", "EPL Index", "Goal", "SI", "Rousing The Kop", "Squawka", "Opta Analyst", "Daily Mail"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-21T08:30:00Z",
  played: 5,
  points: 9,
  pointsPerGame: 1.80,
  projectedPoints: 68,
  projectedFinish: "Champions League places on current pace",
  headline:
    "Nothing moves the arithmetic during an international break, which is the point of reading it now, at rest. Nine points from five is 1.80 a game and projects to sixty-eight across thirty-eight, historically about the price of the last Champions League place, and the number will not change again until 11 October. Treat it as a description of five games rather than a forecast of thirty-eight. What is more durable is the position it comes with: sixth, unbeaten, level on points with fourth, fifth and seventh, and separated from the Europa place by one goal of goal difference. The fixtures that resume the season will move it back down as easily as the Bournemouth win moved it up: Manchester City, Brentford, Brighton and Arsenal all arrive inside the five weeks after the break, and three of the four currently sit above Liverpool.",
  thresholds: [
    { label: "Champions League (top 4)", points: 68, gap: 0, note: "Historical par for the last Champions League place in recent seasons, and exactly where five games of pace now lands. The live ESPN table this tracker rebuilds each run draws that stripe at fourth, so the label follows the table rather than the coefficient arithmetic. Holding it requires maintaining 1.80 points per game against a run of fixtures markedly harder than the one that produced it." },
    { label: "Europa League (5th)", points: 60, gap: 0, note: "Fifth-place par, and where the live table currently draws the Europa stripe, at Leeds, who are level with Liverpool on points and one goal better off. The present pace clears this line by eight points, which is a cushion built on five games and no more than that." },
    { label: "Conference League (6th-7th)", points: 55, gap: 0, note: "Sixth to seventh place par, often decided by cup outcomes as much as by league finish. The pace sat here this morning and no longer does. The live table carries no Conference stripe this early, because the place is usually settled by a domestic cup, and Liverpool are in the Carabao Cup fourth round." },
    { label: "Safety", points: 38, gap: 0, note: "The conventional survival line, thirty points below the current pace. It is on the board only to give the other numbers a floor to be measured against." },
  ],
  thresholdNote:
    "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  runIn: [
    { date: "2026-10-11", opponent: "Manchester City", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 4, difficulty: "hard" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 3, difficulty: "hard" },
    { date: "2026-11-01", opponent: "Arsenal", home: true, competition: "PL", oppPosition: 2, difficulty: "hard" },
    { date: "2026-11-08", opponent: "Crystal Palace", home: false, competition: "PL", oppPosition: 15, difficulty: "medium" },
    { date: "2026-11-21", opponent: "Manchester United", home: true, competition: "PL", oppPosition: 12, difficulty: "medium" },
  ],
  runInVerdict:
    "The soft fixture has been played and banked, and what waits on the far side of the break is four of the top four inside five weeks. Manchester City come to Anfield on 11 October with a perfect record and a three-point lead; Brentford away, Brighton at home and Arsenal at home follow, and between them sit LASK in Linz on 14 October and Chelsea in the Carabao Cup on 28 October. Six points from those four league games would be a good return and would hold the pace near 1.60, a Europa-band season. Nine or more and the sixty-eight-point projection stops looking like an artefact of one afternoon at the Vitality. Three or fewer and the unbeaten start becomes the thing people remember rather than the thing that mattered. The genuine unknown is condition: most of this squad plays international football for three weeks and reassembles in the week of the hardest home fixture of the season.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "BBC Sport", "Squawka"],
};
