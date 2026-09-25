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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Fri Sep 25, evening - at Kirkby, not with Brazil, and the correction is overdue. Carlo Ancelotti left him out of a squad built to look at younger goalkeepers for friendlies against Australia and India, saying the best goalkeeper in Brazil will play when the competitions come, and Liverpool.com lists him among the twelve first-team players working through the break at the AXA. He remains on the terms triggered in March that run to the end of this season, the other senior contract in its last year beside the captain's, with Empire of the Kop framing Mamardashvili and Lucca Brughmans, due from Genk in 2027, as the succession. Fifth in the division for save percentage at 77.8, per Opta, and rested for City.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Fri Sep 25, evening - the goalkeeper who is actually away. Mamardashvili kept goal for Georgia on Friday night and was beaten by a Northern Ireland winner in the ninety-ninth minute of a 1-0 defeat, per the club's round-up, with Liverpool's Kieran Morrison unused on the other bench. At Liverpool the queue has not moved: Alisson, left out by Brazil, is working at Kirkby, and Empire of the Kop's succession picture has Mamardashvili and Lucca Brughmans, joining from Genk in 2027, contesting the shirt should Alisson leave next summer. One appearance this season, and the Chelsea cup tie on 28 October the realistic next start.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Fri Sep 25, evening - the row has cooled into a result, and the Netherlands move on to Serbia. Van Dijk led the protest at a German goal scored while Brobbey lay hurt, calling it a 'disgrace', before Gakpo's stoppage-time volley rescued a 1-1 draw; his own twelfth-minute header had been ruled out by VAR, and Klopp answered that he had no guilty conscience. The Netherlands commitment holds, running to Euro 2028 and two years past a Liverpool deal that ends in 2027 and that a returning Julian Ward inherits. Haaland is the first name he faces when the league resumes.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Fri Sep 25, evening - fit, fresh, and now training alongside the first-choice goalkeeper Brazil chose not to take. Gomez is among the small senior group working through the break, fully fit after the hamstring problem, and remains a fourth centre-back and the only specialist right-back at the club held in one body. The reporting this week has Liverpool weighing two young right-backs abroad, Benfica's Banjaqui and Feyenoord's Read, a comment on the department rather than on him. His next appearance in any competition is his three hundredth.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Fri Sep 25, evening - ninety minutes in Friday's 1-0 defeat to Ukraine, and nothing in them settles the argument at home. The BBC's read of his afternoon at the club that sold him was effort over quality, targeted repeatedly with the ball over the top, a six. Tsimikas stayed on the bench. Two senior left-backs, neither judged to be at the manager's standard, no market until January, and Semenyo attacking that flank when the season resumes.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Fri Sep 25, evening - the week's right-back injury landed one layer below him, on the academy's Isaac Mabaya, which says more about the department than any scouting list. Sports Mole has Liverpool watching Feyenoord's Read after five assists in eight games, with Arsenal and City also monitoring, while AnfieldWatch puts Benfica's Banjaqui top of the list. Neither is a verdict on Bradley so much as on the calendar: his knee is listed for early January 2027 and Iraola's last word was that he is not close to training with the team.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Fri Sep 25, evening - with a Dutch squad bound for Serbia after the Germany draw, where the minutes his club role does not offer might come. Frimpong played right-back only in the cup and was unused at the Vitality, behind Araujo's improvised run there, and Liverpool's two January names, Banjaqui and Read, are both attacking full-backs of his profile. A vote of confidence from Xavi is not a vote from Iraola, but three weeks of football is three weeks of evidence.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 19, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-23", injuryNote: "Fri Sep 25, evening - the break's promised arrival, still on course for group work, with no setback reported. Iraola's plan is for Leoni to rejoin group work across this break, the clearest marker yet in the recovery from the September 2025 ACL rupture, with Sports Mole still pencilling mid-October for availability. He will be nowhere near the City squad, and that is not the point. If the knee holds through group sessions, the two-man centre-back rota finally gets a third body.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 21, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Fri Sep 25, evening - shortlisted for September's Premier League Player of the Month, and unused on the bench as France won 1-0 in Turkiye on Friday. Ever-present in a league back line that did not concede in September, per Liverpool FC, he shares the list with Isak and with City's Semenyo. Van Dijk's Netherlands pledge runs to Euro 2028 while his Liverpool deal ends in 2027, and Jacquet, twenty-one, is the obvious long-term successor at the heart of that back line. Six recoveries and three of four duels won at Bournemouth, per Opta.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Fri Sep 25, evening - on loan in Spain, far from an international week that has not touched him. Levante continues; the senior back line has kept three clean sheets without needing a fifth or sixth body; no first-team squad sheet has carried his name this season. The arguments consuming Anfield through the break are about contracts and selection at the top of the squad, which is a long way from a nineteen-year-old in Spain.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 32, name: "Kostas Tsimikas", number: 21, position: "DEF", nationality: "🇬🇷 Greece", age: 30, appearances: 6, goals: 0, assists: 1, cleanSheets: 1, xG: 0.2, tacklesPer90: 1.7, passCompletion: 79, progressiveCarries: 3.1, form: 5.8, status: "fit", injuryNote: "Fri Sep 25, evening - a week in which the man ahead of him played ninety minutes in a Hungarian defeat, which is not the same as losing the place. Tsimikas has not started a league game since Fulham, where he misplaced eleven of thirty-one passes and came off at half-time, and Kerkez took the whole ninety at the Vitality despite a mixed afternoon. Two senior options, neither rated highly by the reporting, and a market that does not open until January.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p214285.png",
    physical: { height: 178, weight: 76, pace: 79, acceleration: 80, sprintSpeed: 78 },
    career: [
      { years: "2017-2020", club: "Olympiacos", fee: null, type: "senior" },
      { years: "2020-", club: "Liverpool", fee: "€13M", type: "senior" },
      { years: "2025-26", club: "Roma", fee: null, type: "loan" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Fri Sep 25, evening - in South America with Argentina, and the renewal nobody has offered still waits on a returning sporting director's desk. Mac Allister has said he was disappointed not to be given what Szoboszlai and Gravenberch signed, and that two more years would suit him. Sports Mole and Goal have the club still tracking Inter's Stankovic, while Nyoni volunteered himself for the six this week. Seven possession wins at Bournemouth, and undroppable on current evidence.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Fri Sep 25, evening - bound for Serbia with the Netherlands after Thursday's draw, a new contract signed and a place in the order still to reclaim. Sports Mole and Goal report Liverpool still regard Inter's Aleksandar Stankovic as a target before 2027, having tried to sign him in the summer talks that sent Curtis Jones to Milan. Nine minutes at Bournemouth remains the clearest read on where he sits. Two more Netherlands games follow before the club reassembles.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Fri Sep 25, evening - started and completed Hungary's 1-0 defeat to Ukraine on Friday, per the club's round-up, alongside Kerkez. The settled half of a pivot whose other half has no offer on the table; his own deal is done and his place in the pivot is not in question. At the Vitality it was two free-kicks narrowly wide, a booking and a withdrawal on eighty-one, and Carragher argued a struggling number ten drags him too deep.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Fri Sep 25, evening - one of the twelve at Kirkby, per Liverpool.com, now training beside Alisson rather than covering for him. Endo is one of the senior group Iraola keeps through the break, useful in training, with the reporting still holding that FSG will sanction a winter exit, the last window a fee is recoverable on a 2027 deal. The dated consequence for this page has not changed: from February the emergency fifth centre-back has no occupant unless Leoni's knee has held.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Fri Sep 25, evening - still waiting on his Germany minutes, which Klopp has pushed back to Serbia on 1 October and Greece on 4 October. Andy Robertson's defence on Stick to Football joined Iraola's television backing, against Carragher's call to drop him for City. A German insider maintains Bayern will not move for him in January. One assist in six competitive games remains the number the criticism is built on.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 19, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Fri Sep 25, evening - not at the AXA after all but with England's Under-20s, and he played all ninety of Friday's 3-1 win over Italy, per the club's round-up. The same day Empire of the Kop carried his own reading of his role, that Iraola probably sees him primarily as a six after he partnered Mac Allister in the double pivot in the cup win over Tottenham, though he is willing to learn the eight. Sports Mole and Goal report Liverpool still want Inter's Aleksandar Stankovic. Eighteen minutes at Bournemouth last time out.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Fri Sep 25, evening - the goal that denied Klopp is a day old, and the Dutch go to Serbia next. An acrobatic stoppage-time volley from Ruben van Bommel's cross rescued a 1-1 draw for the Netherlands and denied Klopp's Germany a winning debut. Three chances created at the Vitality per Opta and the delivery for Isak's winner had already made him the closest thing Iraola has to a guaranteed source of chances. Julian Ward, expected back as sporting director, signed him from PSV in 2022-23. Two more Dutch games follow before the club sees him for City.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Fri Sep 25, evening - scored again, this time for Sweden, a twentieth-minute opener in Friday's 2-1 Nations League win over Romania, per the club's round-up. He is on the Premier League's September Player of the Month shortlist for three goals in three league games, and four goals in five this season is already past the three he managed in fourteen Premier League appearances across all of last season; only Haaland has scored more in the division. Four of Liverpool's seven league goals are his, an attack routed through one man while Ekitike's Achilles keeps Koumas as the whole of the cover.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Fri Sep 25, evening - a Friday on which the striker carrying his workload scored for Sweden, and his own calendar did not move. Liverpool won the last game before the break with the only senior nine at the club and Koumas as the nine-minute cover, and that arrangement holds until the new year. Iraola's framing is unchanged: a realistic chance of January, with a big part of the rehabilitation still to meet, and the Inter and Lens fixtures the first plausible dates. FotMob lists early January 2027.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Fri Sep 25, evening - with England through the fortnight, crediting Iraola with an extra tool, in his word, by using him on both flanks. He has started three games in all competitions under the new manager and was an unused substitute at Bournemouth once Gakpo passed his warm-up. This Is Anfield reports a new deal beyond 2028 is yet to be agreed and Arsenal interest has been played down, while TEAMtalk has the London club watching for 2027; David Ornstein reported the club wants the renewal signed inside the month.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 31, name: "Lewis Koumas", number: 67, position: "FWD", nationality: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.3, passCompletion: 77, progressiveCarries: 1.8, form: 6.3, status: "fit", injuryNote: "Fri Sep 25, evening - away with Wales, and the only cover behind a Sweden striker who is still, happily, scoring. BBC Sport profiled him this week as contagious and confident, with Iraola's own word for his energy the one the piece is built around, and more than 900 days separated his first and second Liverpool appearances, spent on loan at Stoke, Birmingham and Hull before Iraola stopped a fourth loan a week into the American tour. Wales opened their Nations League campaign against Portugal in Lisbon this week. Until Ekitike's Achilles allows otherwise, and January is the earliest anyone sensible expects it to, he is the whole of the cover behind Isak.", image: "",
    physical: { height: 180, weight: 73, pace: 80, acceleration: 81, sprintSpeed: 79 },
    career: [
      { years: "2013-", club: "Liverpool", fee: null, type: "youth" },
      { years: "2024-25", club: "Stoke City", fee: null, type: "loan" },
      { years: "2025", club: "Birmingham City", fee: null, type: "loan" },
      { years: "2025-26", club: "Hull City", fee: null, type: "loan" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Fri Sep 25, evening - the end-of-month target for group training is now five days off, with nothing reported to move it. Chiesa aims to resume group training by the end of the month, per Lewis Steele, having not played since the Como friendly in mid-August, with Sports Mole pencilling 11 October for availability. Left off the Champions League squad, so Europe was never in reach this autumn. TEAMtalk and Sport Witness reported on Wednesday that he will be made available in January, at around 15m euros, unless he forces his way into the side, which turns the return to training into an audition.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Fri Sep 25, evening - one of the twelve at Kirkby, now with Alisson rather than Mamardashvili ahead of him in the building. Liverpool gave eighteen-year-old Matty Wright a first professional contract, and Empire of the Kop's survey of the position lists Woodman as the capable reserve beneath Mamardashvili and the incoming Lucca Brughmans. Not in the Bournemouth squad; the Carabao Cup tie against Chelsea on 28 October remains the only realistic opening.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Fri Sep 25, evening - not among the twelve first-team players Liverpool.com lists at Kirkby this fortnight, so the showcase this page promised him belongs to somebody else. Munoz played the last eighteen minutes at Bournemouth, on for Barcola as Liverpool closed out the lead, and his last meaningful moment remains the header against the Fulham bar. Iraola calls four wide forwards a luxury and plays most of them most weeks, which is consistent and unhelpful to anyone waiting for a start.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", recentPlayedDates: ["2026-09-15"], injuryNote: "Fri Sep 25, evening - with Uruguay, while the department he has occupied lost an academy understudy to a groin injury. AnfieldWatch reports that Liverpool are weighing whether to make his loan from Barcelona permanent while Benfica's eighteen-year-old Banjaqui, priced at 50m euros, sits at the top of the list, and the Liverpool Echo says Iraola has a selection call to make on him for City. Five consecutive league starts out of position, three clean sheets, twenty-four possessions lost at the Vitality. He is with Uruguay.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 3, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Fri Sep 25, evening - fifteen minutes off the bench as France won 1-0 in Turkiye on Friday, per the club's round-up, with Jacquet unused. Barcola took the left at Bournemouth against every preview, forced one save from Petrovic, and was otherwise contained by a thirty-five-year-old on his 431st appearance for the club. Six competitive games in, the goals still arrive through the striker; the questions the front line poses are the ones the break cannot answer.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  focus: "Carried plate, not this edition's lead, which is Alexander Isak's opener for Sweden against Romania on Friday night, an international goal abroad rather than a Liverpool still: Liverpool 3-1 Tottenham, Carabao Cup third round",
  credit: "Plate · carried from 15 September",
  generatedAt: "2026-09-25T22:30:00Z",
  // Evening pass (Fri 25 September, ~6pm ET): NO MATCH, international break. The lead rotates off the morning's
  // Amsterdam fallout onto Friday night's internationals: Isak's 20th-minute opener in Sweden 2-1 Romania, in the week he and
  // Jacquet were shortlisted for September's Player of the Month (with City's Semenyo). CORRECTION: Alisson was left out by
  // Brazil and is at Kirkby; Mamardashvili is the goalkeeper away (Georgia, beaten by a 99th-minute NI winner). New: Konde to
  // Man Utd, Mabaya groin (Zimbabwe withdrawal), Nyoni on the six. NO new image queued (an away international goal is not a
  // Liverpool still). Szoboszlai plate carried, all 8 generatedAt 22:30Z.
  // Morning pass (Fri 25 September, ~4am ET): NO MATCH, international break. The lead rotates off Thursday's internationals
  // preview onto the fallout: Gakpo's stoppage-time volley (90+2) rescued Netherlands 1-1 Germany and denied Klopp a
  // winning debut, Van Dijk called Germany's goal-while-Brobbey-down a 'disgrace', Klopp answered 'no guilty conscience',
  // Kimmich backed Klopp. New: Iraola nominated Sept Manager of the Month (with Maresca, Hurzeler); Klopp held Wirtz out
  // of Germany's opening games (Serbia 1 Oct, Greece 4 Oct); Iraola working a skeleton group at the AXA. NO new image
  // queued (an away international goal is not a Liverpool still). Szoboszlai plate carried, all 8 generatedAt 08:30Z.
  // ---- prior ----
  // Morning pass (Thu 24 September, ~4am ET): NO MATCH, international break. The lead rotates off the evening's Ward
  // frame onto tonight's internationals opening: Van Dijk's Netherlands v Klopp's Germany in Amsterdam (7.45pm), four
  // Reds in the Dutch squad (Van Dijk, Gravenberch, Gakpo, recalled Frimpong), Van Dijk committed to play on until
  // 'at least' 37 after Xavi's Merseyside visit. Ward reappointment firms with Paul Joyce (The Times) now alongside
  // Ornstein; Bayern won't move for Wirtz in January; Turkish Airlines main partner from June 2027; City still 5.8
  // above Opta's model; Leoni a year and a day on. NO new image queued (tonight's fixture unplayed, no still). Szoboszlai
  // plate carried. Table byte-identical from ESPN, Liverpool sixth. All eight generatedAt stamps 08:30Z.
  // Evening pass (Wed 23 September, 6pm ET): NO MATCH, international break. The lead rotates off the morning's Leoni
  // training-pitch frame onto the sporting-director story firming: James Pearce (The Athletic) calling Julian Ward's expected
  // appointment 'a lot of sense', with Sky's Lyall Thomas naming Brentford's Lee Dykes as a possible partner. Reported,
  // not announced. Behind it: Opta's expected-points model rating City 5.8 points above their chances, Leoni's first ACL
  // anniversary, the BBC's Koumas profile, Robertson on Stick to Football, the November TV moves. NO new image queued under
  // STEP 7.5: a boardroom appointment is not a still. Szoboszlai plate carried, generatedAt re-stamped, cover-brief.json
  // re-mirrored. All eight generatedAt stamps 22:30Z.
  // Evening pass (Tue 22 September, 6pm ET): NO MATCH, international break. The lead rotates to The Athletic's
  // report that Julian Ward is set to return as sporting director (reported, not announced), with Mac Allister's
  // fuller 'very sad'/'that's perfect' interview, Van Dijk's Netherlands commitment to Euro 2028, Foden's ban
  // running out at Anfield and the U21s' 7-6 shootout win at Rochdale behind it. NO new image queued under
  // STEP 7.5: an executive appointment and a set of interviews are not stills. The U21 Will Wright solo goal is
  // photographable but is a youth-team moment and not the edition's lead. Szoboszlai plate carried, generatedAt
  // re-stamped, cover-brief.json re-mirrored. All eight generatedAt stamps 22:30Z.
  // Morning pass (Tue 22 September, ~4am ET): NO MATCH, international break. The lead is the Florian Wirtz row:
  // Andoni Iraola defending him to Sky Sports ('much happier with his second half than his first') and calling
  // Klopp's split-squad decision 'very smart', with Wirtz answering the criticism on Instagram ('Into the
  // international break with a win'). Second surface is the right-back file gaining two fresh January-shaped names,
  // Benfica's Banjaqui (50m euros) and Feyenoord's Read. NO new image queued under STEP 7.5: a social-media reply
  // and a manager's defence are not single stills, and the skill caps queueing at one genuinely visual moment per
  // edition. The standing candidate for a future plate remains Jeremy Jacquet. Szoboszlai plate carried, generatedAt
  // re-stamped, cover-brief.json re-mirrored to this morning's lead. All eight generatedAt stamps 08:30Z.
  // Evening pass (Mon 21 September, 6pm ET): NO MATCH, international break. The lead is Alexis Mac Allister
  // telling ESPN there is "no firm decision" on a Liverpool contract the club has declined to open talks about,
  // with Jamie Carragher's call to drop Florian Wirtz for Manchester City the evening's second surface. Both are
  // interviews. NO new image queued under STEP 7.5: neither a contract stand-off nor a podcast verdict resolves
  // into a single still, and the skill caps queueing at one genuinely visual moment per edition. The standing
  // candidate for a future plate remains Jeremy Jacquet. Szoboszlai plate carried, generatedAt re-stamped only.
  // Previous evening pass (Sun 20 September, 6pm ET / 11pm BST): MATCH PLAYED. Bournemouth 0-1 Liverpool at the Vitality,
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
      "Julian Ward is expected to be appointed Liverpool sporting director for a second time, per The Athletic, and on Wednesday 23 September James Pearce wrote that the appointment 'makes a lot of sense'; Sky Sports reports FSG are also weighing a second hire alongside him, Brentford technical director Lee Dykes among the names. There has been no club announcement.",
    subject: "No new plate requested this edition. The lead is a reported boardroom appointment with no single photographable moment, and the skill caps queueing at one genuinely visual moment per edition.",
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
// Last refresh: 2026-09-23 (Wednesday evening, ~6pm ET). Re-fetched from ESPN and byte-identical to the previous pull:
// the international break is open and no league match has been played since Sunday 20 September, so the matchday-five
// table stands. It reads: Manchester City first on fifteen, five wins from five; Arsenal second on twelve; Brighton third
// on ten; then a bloc of four on nine, Brentford (fourth), Leeds (fifth), LIVERPOOL (sixth, highlighted) and Everton
// (seventh), separated by goal difference alone, with Liverpool outside the Europa stripe only on goal difference.
// The relegation stripe reads Coventry (18th), Fulham (19th) and Tottenham (20th). Prior state, 2026-09-20 evening,
// AFTER Bournemouth 0-1 Liverpool: Isak's winner and a third clean sheet lifted Liverpool from tenth to sixth as the
// round completed, City beating Sunderland 5-3 the same afternoon to go three clear. History condensed; the array below is current.
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
  generatedAt: "2026-09-25T22:30:00Z",
  overview:
    "The table has not moved since matchday five, so this week the Premier League's own award shortlists have done its talking, and they read like a map of the top half: of the eight players up for September, two are Liverpool's in Isak and Jacquet, two are Brighton's, and one each belongs to Manchester City, Brentford, Leeds and Hull, every one of those clubs eighth or higher. City lead on fifteen, perfect and three clear of Arsenal, with Opta's expected-points model still reading them as the luckiest side in the division. The seam that matters to Liverpool is unchanged: Brentford, Leeds, Liverpool and Everton level on nine, fourth to seventh, inside three goals of goal difference, and Liverpool the only one of the four without a qualification stripe. Nothing moves until 11 October, when City open a run of four straight league fixtures for Liverpool against the sides above them. At the bottom Tottenham remain last on two, still without a league win.",
  teams: {
    "Liverpool": "Sixth on nine and unbeaten, one goal of goal difference outside the Europa stripe, with no league goal conceded in September and two players, Isak and Jacquet, on the month's shortlist. City first, on 11 October.",
    "Manchester City": "Top on fifteen and perfect, yet second on Opta's expected-points model, 5.8 points ahead of their chances. Semenyo is on September's Player of the Month shortlist. At Anfield on 11 October, without Foden.",
    "Arsenal": "Second on twelve, three behind City, idle like everyone else through the break, having led the division a week ago. They visit Anfield on 1 November, after Liverpool have played City, Brentford and Brighton.",
    "Brighton": "Third on ten with the division's best goal difference and its most goals, sixteen, and two players, Pascal Gross and Charalampos Kostoulas, on September's shortlist. At Anfield on 25 October.",
    "Brentford": "Fourth on nine, unbeaten in five, the last club inside the Champions League stripe, with Kevin Schade on September's Player of the Month shortlist. Liverpool visit on 17 October.",
    "Leeds": "Fifth on nine and drawing the Europa stripe, five games unbeaten, with Jayden Bogle shortlisted for September. They hold the place ahead of Liverpool on a goal difference of plus four to plus three.",
    "Hull": "Eighth on eight, a promoted side in the top half, with Mohamed Belloumi on September's Player of the Month shortlist.",
    "Everton": "Seventh on nine, also unbeaten, also level with Liverpool, and separated from them by nothing except the order the table puts them in.",
    "Chelsea": "Tenth on seven. They are at Anfield on 28 October in the fourth round of the Carabao Cup, an eight o'clock kick-off on Sky and ITV.",
    "Sunderland": "Fourteenth on four after scoring three at the Etihad and losing anyway, Brian Brobbey taking a hat-trick out of a defeat.",
    "Bournemouth": "Seventeenth on three, and beaten at home by Liverpool without scoring. It is the ninth time in the club's history they have failed to win any of their opening five league games, and only under Iraola in 2023-24 have they endured a longer winless start in the Premier League.",
    "Fulham": "Nineteenth on two after a draw with Manchester United, still inside the relegation stripe, and still carrying the point taken at Anfield on 12 September as a third of their season's return.",
    "Tottenham": "Bottom on two after five league games without a win, and beaten at Anfield in the Carabao Cup on 15 September.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Nine Liverpool Cannot Lose Scores For Somebody Else.",
    byline: "Liverpool FC",
    dateline: "Solna · 25 September",
    category: "Match Report",
    body:
      "There is a particular anxiety to watching the only senior centre-forward at your club play for his country, and on Friday night Alexander Isak turned it into something closer to pleasure. Twenty minutes into Sweden's Nations League meeting with Romania he opened the scoring, and Sweden held on to win 2-1. It came in the week the Premier League shortlisted him for September on three goals in three league games, and six days after the winner at Bournemouth. The only thing Anfield wanted more than the goal was to hear nothing else about him, and by the end of the night the club's round-up reported nothing else.",
  },
  {
    n: "02",
    headline: "A Shortlist That Reads Like A Fixture List.",
    byline: "Premier League / Liverpool FC",
    dateline: "Anfield · 25 September",
    category: "Race for Europe",
    body:
      "Eight names for September's Player of the Month, and most of them are October's problem. Isak and Jacquet are Liverpool's. Antoine Semenyo is Manchester City's, and he will be at Anfield on the eleventh; Kevin Schade is Brentford's, six days later; Pascal Gross and Charalampos Kostoulas are Brighton's, eight days after that. Jayden Bogle of Leeds and Hull's Mohamed Belloumi complete it, and Iraola is already on the managers' list with Maresca and Hurzeler. Voting closes at noon on Monday. The awards will be settled long before the grass says anything about any of it.",
  },
  {
    n: "03",
    headline: "One Layer Below, The Right Side Gives Again.",
    byline: "Nehanda Radio / This Is Anfield",
    dateline: "Kirkby · 23 September",
    category: "Injuries",
    body:
      "The injury this break produced did not happen on international duty and did not happen to a first-teamer, and it still landed in the wrong place. Isaac Mabaya, a twenty-one-year-old right-back, set up the Under-21s' opener against Brighton inside ninety seconds and came off moments later with a groin problem that has now cost him a first Zimbabwe call-up, for the qualifiers against Sierra Leone and DR Congo. Above him the department is a centre-half on loan, a Dutch wing-back out of favour and a knee listed for January. Leoni and Chiesa, due into group work, are the week's gains. Mabaya is its small loss.",
  },
  {
    n: "04",
    headline: "Across The Border, At Sixteen.",
    byline: "CaughtOffside / Goal / TEAMtalk",
    dateline: "Kirkby · 24 September",
    category: "Transfers",
    body:
      "The window is shut for first teams and open for everybody else. Isaac Konde joined Liverpool's academy in 2018, made six appearances for the Under-18s last season, and is now, at sixteen, a Manchester United player, on a one-year scholarship at Old Trafford before a professional contract, with compensation TEAMtalk says could eventually reach seven figures. A coach who knows him has compared him to Nani and Zaha, an unkind thing to read in Kirkby. It is the kind of move nobody at Anfield will remember in a month, unless, in five years, it turns out to be the kind everybody does.",
  },
  {
    n: "05",
    headline: "The Goalkeepers Swap Places For A Fortnight.",
    byline: "This Is Anfield / Liverpool FC",
    dateline: "Kirkby · 25 September",
    category: "Football News",
    body:
      "For most of this week this page had it the wrong way round, and the correction is the better story. Alisson is not with Brazil: Carlo Ancelotti left him out to look at younger goalkeepers, promising the best in the country will play when the competitions come, so the first choice is at Kirkby with Gomez, Endo and the small group Iraola kept back. It is Giorgi Mamardashvili who is away, in goal for Georgia on Friday until a Northern Ireland winner arrived in the ninety-ninth minute. One gets the rest he did not ask for, the other the minutes his club cannot give him.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-25T22:30:00Z",
  summary:
    "Friday night, and the striker Liverpool cannot do without spent it doing the one thing they need from him. In Solna Alexander Isak put Sweden ahead on twenty minutes and they beat Romania 2-1 in the Nations League, in the same week he and Jeremy Jacquet were named on the Premier League's eight-man shortlist for September's Player of the Month, beside City's Antoine Semenyo, the forward who attacks Liverpool's flank on the eleventh. The rest of the evening was minutes: Dominik Szoboszlai and Milos Kerkez played all of Hungary's 1-0 defeat to Ukraine, Bradley Barcola had the last quarter of an hour of France's 1-0 win in Turkiye with Jacquet unused, and Giorgi Mamardashvili, in goal for Georgia, was beaten by a ninety-ninth-minute Northern Ireland winner. Alisson, left out by Brazil's Carlo Ancelotti, is working at Kirkby with the group Iraola kept back, while the academy lost sixteen-year-old Isaac Konde to Manchester United and right-back Isaac Mabaya to a groin problem that ended his first Zimbabwe call-up. The table has not moved, sixth and unbeaten, and City come to Anfield in sixteen days.",
  keyTopics: [
    {
      title:
        "Isak Scores Again, This Time For Sweden: 2-1 Against Romania (Liverpool FC, today)",
      detail:
        "It happened on Friday night in Solna, and it is the best news the break has produced for a squad with one senior centre-forward. Alexander Isak put Sweden ahead with a twentieth-minute opener in a 2-1 Nations League win over Romania, per the club's round-up, six days after the winner at Bournemouth that made it four league goals in five. Liverpool will take the goal and, even more gladly, the absence of any injury news from the night: Ekitike's Achilles keeps Lewis Koumas as the whole of the cover until January.",
      category: "matches",
    },
    {
      title:
        "Hungary Lose, France Win, Georgia Undone In The 99th Minute: The Rest Of Friday's Reds (Liverpool FC, today)",
      detail:
        "The club's round-up, published late on Friday, is otherwise a ledger of minutes. Szoboszlai and Kerkez started and completed Hungary's 1-0 defeat to Ukraine; Barcola came on for the final fifteen minutes of France's 1-0 win in Turkiye while Jacquet stayed on the bench; Mamardashvili kept goal for Georgia until a ninety-ninth-minute Northern Ireland winner, with Liverpool's Kieran Morrison an unused substitute for Northern Ireland. Earlier in the day Trey Nyoni played all ninety of England Under-20s' 3-1 win over Italy.",
      category: "matches",
    },
    {
      title:
        "Nyoni Makes His Case For The Six (Empire of the Kop, today)",
      detail:
        "Published on Friday, the same day he played ninety minutes for England's Under-20s, Trey Nyoni's own reading of his role: at the minute he has been playing as a six, so he assumes that is where Iraola probably sees him most, though he is willing to learn the eight. He partnered Mac Allister in the double pivot in the 3-1 cup win over Tottenham. With Mac Allister's renewal unoffered and Endo listed for January, a nineteen-year-old volunteering for the least glamorous job in the midfield is making a sensible bid for minutes.",
      category: "tactics",
    },
    {
      title:
        "Isak And Jacquet On September's Player Of The Month Shortlist, Semenyo Too (Liverpool FC / Premier League, 1d ago)",
      detail:
        "Announced this week, with fan voting open until midday on Monday 28 September, the Premier League's eight-man shortlist for September carries two Liverpool names: Isak, for three goals in three league games during the month, and Jacquet, ever-present in a back line that did not concede a league goal across it. Beside them sit Hull's Mohamed Belloumi, Leeds' Jayden Bogle, Brentford's Kevin Schade, Brighton's Pascal Gross and Charalampos Kostoulas, and Manchester City's Antoine Semenyo. With Iraola already on the managers' list, the month Liverpool spent sixth has been recognised three times over.",
      category: "general",
    },
    {
      title:
        "Alisson Spends The Break At Kirkby, Not With Brazil (This Is Anfield / Liverpool.com, 1d ago)",
      detail:
        "A correction worth making as Brazil's window opens against Australia on Friday: Alisson is not on international duty. Carlo Ancelotti left him out of the squad for two friendlies against Australia and one against India, preferring to assess younger goalkeepers after the World Cup and promising that the best goalkeeper in Brazil will play when the competitions come. Liverpool.com lists him among the twelve first-team players at Kirkby this fortnight with Gomez, Endo, Woodman, Chambers, McConnell and Danns, alongside the five injured. The Liverpool goalkeeper who is away is Mamardashvili.",
      category: "general",
    },
    {
      title:
        "Manchester United Complete A Raid On The Academy: Isaac Konde (CaughtOffside / Goal, 1d ago)",
      detail:
        "Reported on Thursday and presented by Goal as a completed deal, Manchester United have signed Isaac Konde, a sixteen-year-old midfielder who joined Liverpool's academy in 2018 and made six Under-18 appearances last season. He takes a one-year scholarship at Old Trafford before a professional contract, and TEAMtalk reports compensation that could eventually reach seven figures. A small transfer, across the least forgiving border in English football.",
      category: "transfers",
    },
    {
      title:
        "Ngumoha Credits Iraola With 'Another Tool' As Contract Talks Continue (Liverpool.com / This Is Anfield, 1d ago)",
      detail:
        "Speaking on England duty this week, Rio Ngumoha explained that Iraola's habit of using him on the right as well as the left has made him harder to read. The contract backdrop has not been settled: This Is Anfield reports a new deal beyond 2028 is yet to be agreed and Arsenal interest has been played down, while TEAMtalk and FootballTransfers keep the London club circling for 2027.",
      category: "transfers",
    },
    {
      title:
        "Klopp Row Cools, And The Dutch Move On To Serbia (ESPN / Sky Sports, 1d ago)",
      detail:
        "Thursday's 1-1 in Amsterdam has settled into a result rather than a row. Gakpo's volley from Van Bommel's pass two minutes into stoppage time cancelled out Felix Nmecha's goal, Xavi is still without a first win in charge of the Netherlands, and ESPN's report has Brobbey going down with a muscle injury in the passage that produced the German opener. The Netherlands travel to Serbia next with Van Dijk, Gravenberch, Gakpo and Frimpong in the party.",
      category: "matches",
    },
    {
      title:
        "City Scatter Too: Haaland Opens Norway's Campaign, Portugal Next (Read Man City, 1d ago)",
      detail:
        "Read Man City reported on Thursday that Haaland, Ruben Dias and Abdukodir Khusanov were the first City players into action this break, Norway opening against Denmark in Oslo and hosting Portugal on Sunday, which could put Haaland against his own centre-back. Semenyo's place on the Player of the Month shortlist follows his brace against Sunderland, and Phil Foden still serves the last game of his domestic ban at Anfield. Both clubs reassemble in the same week, in the same scattered state.",
      category: "matches",
    },
    {
      title:
        "Mabaya's First Zimbabwe Call-Up Ends Before It Starts (Nehanda Radio / This Is Anfield, 2d ago)",
      detail:
        "Confirmed on Wednesday, Isaac Mabaya, the academy right-back, twenty-one, has withdrawn from Zimbabwe's squad for the AFCON 2027 qualifiers against Sierra Leone and DR Congo with a groin problem, picked up while delivering the assist for the opener in the Under-21s' 5-1 win over Brighton on 19 September and forcing him off inside six minutes. He is not in the first-team squad, but he plays in the department this page calls its highest structural risk, where the injuries keep arriving one layer below the senior group.",
      category: "injuries",
    },
  ],
  sources: [
    "Liverpool FC",
    "Premier League",
    "Empire of the Kop",
    "This Is Anfield",
    "Liverpool.com",
    "CaughtOffside",
    "Goal",
    "TEAMtalk",
    "FootballTransfers",
    "ESPN",
    "Sky Sports",
    "Read Man City",
    "Nehanda Radio",
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
  generatedAt: "2026-09-25T22:30:00Z",
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
    "The leaders' week ended with one of their wide forwards on September's Player of the Month shortlist and their centre-forward opening Norway's Nations League campaign, and with the same argument waiting at home: a number their record refuses to admit. Opta's expected-points model, reported by Read Man City, has Manchester City second rather than first after five games, their fifteen points 5.8 more than the chances created and conceded would usually earn; Sunderland's 3.57 expected goals at the Etihad was the third-highest recorded by a losing side since 2013-14, and the four clean sheets before it still allowed 2.82. The mitigation is genuine: City have spent a league-high 52.5 per cent of their minutes in front. Phil Foden serves the last game of a three-match domestic ban at Anfield, and Haaland, Dias and Khusanov are among Maresca's players away on international duty from Thursday. Manchester City are otherwise whole, first on fifteen points, five wins from five, three clear of Arsenal, in their first season since 2015-16 without Pep Guardiola, who resigned in the summer and was replaced on 29 June by Enzo Maresca. The record flatters a team that is not yet under control. Last weekend they beat Sunderland 5-3 at the Etihad, having been pegged back twice inside the opening half-hour, and Maresca's own verdict was that there were too many goals and that he would much prefer to win 1-0. Before that came a 1-0 at home to Coventry, a 4-1 at Crystal Palace, a 2-1 over Bournemouth, and a 1-0 at Old Trafford in the derby in which Foden was dismissed. Per Read Man City the leaders will reassemble in the same week, and in the same scattered state, as Liverpool.",
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
      threat: "Named this week on the Premier League's September Player of the Month shortlist, alongside Liverpool's Isak and Jacquet. Struck either side of half-time against Sunderland for his first two goals of the season, per Sky Sports, and he arrives at this fixture with the additional detail that he spent his formative Premier League years at Bournemouth under Iraola. The brace changed his job description within a day: with Omar Marmoush gone to Tottenham, Maresca has identified him as the alternative to Haaland through the middle, which Semenyo said this week came as news to him ('I've heard about his backup striker thing. I don't know where it's come from! If I need to, then I'll do it'). He has played both flanks for City, and whichever he takes at Anfield is a flank Liverpool cover with a makeshift right-back or a left-back the reporting has doubts about.",
      source: "Sky Sports / Express & Star / beIN Sports",
    },
    {
      name: "Enzo Fernandez",
      role: "Central midfielder",
      threat: "Scored his first Manchester City goal against Sunderland last weekend, per Sky Sports, from the deeper of the two midfield positions. He is half of the pivot that decides whether City's high line is protected or abandoned, and the eight-goal afternoon suggests the balance is not yet settled just over two weeks before Anfield.",
      source: "Sky Sports",
    },
    {
      name: "Gianluigi Donnarumma",
      role: "Goalkeeper",
      threat: "Conceded three at home to Sunderland last weekend, which is the only blemish on a five-win start and the reason City's goal difference is plus eight rather than something more intimidating. Liverpool's problem this season has been converting what they create rather than creating it: six goals from 6.00 expected across the first four league games of the season. A goalkeeper behind a defence that has just shipped three is the most exploitable name on the sheet.",
      source: "ESPN / Opta Analyst",
    },
  ],
  predictedXI: [
    "Donnarumma", "Nunes", "Dias", "Guehi", "Gvardiol",
    "Fernandez", "Anderson", "Ndiaye", "Cherki", "Semenyo", "Haaland",
  ],
  absentees: [
    { name: "Phil Foden", issue: "Suspended: third game of a three-match domestic ban for violent conduct (red card, Manchester derby, 13 September)", status: "Out" },
  ],
  recentForm: [
    { date: "2026-09-20", opponent: "Sunderland", home: true, score: "5-3", result: "W", note: "Eight goals at the Etihad and a manager who refused to enjoy it. Enzo Fernandez opened with his first City goal and Rayan Cherki twice put them in front inside the opening half-hour, with Brian Brobbey equalising almost immediately on both occasions. Antoine Semenyo struck either side of the interval before Brobbey completed a hat-trick, and Haaland turned in a Gvardiol cross on eighty-one after a VAR check. Maresca afterwards: too many goals, too many goals, he would prefer to win 1-0." },
    { date: "2026-09-13", opponent: "Manchester United", home: false, score: "0-1", result: "W", note: "The Manchester derby at Old Trafford, settled by a single goal that was originally ruled out and awarded after a VAR review, per Opta's account of the sequence. A fourth straight win and the result that established City as the division's pacesetter." },
    { date: "2026-09-05", opponent: "Coventry City", home: true, score: "1-0", result: "W", note: "A narrow home win over the promoted side, and the only occasion this season on which Maresca's team has both kept a clean sheet and scored once. It is the scoreline he said last weekend he would prefer." },
    { date: "2026-08-28", opponent: "Crystal Palace", home: false, score: "4-1", result: "W", note: "Four scored away from home at Selhurst Park, the clearest evidence of the attacking ceiling of this side, and the game that established the pattern of the season: plenty at one end, not always enough attention at the other." },
    { date: "2026-08-23", opponent: "Bournemouth", home: true, score: "2-1", result: "W", note: "Maresca's first league game in charge and the start of the perfect run, against the club Liverpool beat last weekend. Bournemouth led, which was the first instalment of the record they carried into September." },
  ],
  liverpoolAngle:
    "Opta's expected-points model supplies the evening's argument: a City defence that allowed 2.82 expected goals across four clean sheets and 3.57 in a single afternoon is a defence that concedes chances, and Liverpool's problem this season has been finishing rather than creating them. The suspension does Liverpool a quiet favour: without Foden, City lose one of the attackers most comfortable receiving between the lines, which leaves Rayan Cherki as the seam-runner the fixture turns on, with Jeremy Doku, only just back from a calf problem, the wide threat still building sharpness. Liverpool arrive unbeaten, three clean sheets in a row, and with an expected-goals-against of 6.12 that only Arsenal and Nottingham Forest have bettered, per Opta; City arrive having scored five at home and conceded three to a promoted side on the same afternoon. The meeting point is the weakness each has failed to fix. Liverpool have conceded nine fast-break goals since the start of last season, the most in the league per Opta, and the department that gives them up is still the right, where Ronald Araujo, a centre-half by trade, has now started five consecutive league games out of position and where the only specialist alternatives are a knee whose listing has drifted to early 2027 and a cup selection. Semenyo attacks that side, and has just been told he is Haaland's understudy through the middle as well. City, for their part, leave an enormous gap between a high line and Donnarumma whenever the ball turns over, and Sunderland ran into it three times last weekend. Liverpool's recurring failure is finishing rather than creating, which is the thing Isak's four goals in five games have begun to answer and the thing Carragher has spent the week arguing Wirtz cannot. The honest reading is that the side with the better underlying defensive numbers is the one that has drawn three of five, and the side with the perfect record is the one its own manager says concedes too much. Neither will see most of its players again until the week of the game.",
  modelLine: null,
  sources: ["Opta Analyst", "Sky Sports", "ESPN", "BBC Sport", "Liverpool FC", "Premier League", "beIN Sports", "Express & Star", "Read Man City", "Liverpool.com"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-25T22:30:00Z",
  competition: "PL",
  played: 5,
  headline:
    "The only Liverpool goal of the week was scored in a Sweden shirt, which leaves this column exactly where Bournemouth left it and puts the weight back on the man carrying it: Isak has four of Liverpool's seven league goals and a place on September's Player of the Month shortlist for three in three. The opponent's reading has not moved either: Opta's expected-points model rates Manchester City's fifteen points 5.8 above their chances, which makes the question for 11 October less about stopping a machine than about punishing a leaky one. Liverpool's own reading has not moved: this defence is better than sixth place makes it look, one of the three best in England by Opta's measure. Opta's season figure for Liverpool's expected goals against is 6.12, bettered only by Arsenal (4.04) and Nottingham Forest (4.8), and only Leeds and Everton (three apiece) have conceded fewer actual goals than Liverpool's four. Alisson sits fifth in the division for save percentage at 77.8, having prevented 0.8 goals on the expected-goals-on-target model. At the other end the picture is unchanged and unflattering: 7.57 expected goals made, seven scored, and an attack whose most expensive component has spent the first days of the break being defended by his manager and told by a pundit he should be dropped. Note the provenance gap, because it matters: the per-match column below sums to 5.92 against, slightly under Opta's published season total of 6.12, and the difference is between two ways of counting rather than a correction to either.",
  diagnosis: [
    {
      label: "Closing out a lead",
      detail: "Promoted from a warning to a piece of evidence, in Liverpool's favour for once. This entry has spent the season noting that Liverpool draw games they lead, and at the Vitality they took a lead on fifty-seven minutes at a ground where the hosts had scored first in every league game they had played, and then kept it for thirty-three minutes plus stoppage time against late pressure. Iraola's own description of the second half was that his side controlled the game much better and had chances to finish it. It is one instance against three drawn games, but it is the first instance.",
      severity: "positive",
      source: "Opta Analyst / Goal",
    },
    {
      label: "Fast-break concession, still unanswered",
      detail: "The warning stays at high because the fixture that was supposed to test it did not. Bournemouth made 0.76 expected goals and two shots on target, and the one genuine chance they created, Evanilson's backheel flick on eighteen, came from a cross rather than a counter. Opta still count nine fast-break goals conceded by Liverpool since the start of last season, the most in the league, and the next side to attack that space is Manchester City, whose own high line and turnover behaviour let Sunderland score three at the Etihad last time out. Two teams with the same fault, one fixture, sixteen days away.",
      severity: "high",
      source: "Opta Analyst / Squawka",
    },
    {
      label: "The attack works, but only through one man",
      detail: "Seven goals from 7.57 expected is a side scoring roughly what it makes, and four of those seven belong to Alexander Isak, against three in fourteen Premier League appearances across the whole of last season. The concentration is the pattern, not the total. The number-ten position behind him has produced no league goal and no league assist in six competitive games, and Opta's Bournemouth card is the clearest illustration: Florian Wirtz created a joint-game-high three chances and simultaneously returned a team-low 70.3 per cent passing accuracy from twenty-six of thirty-seven passes, fifty-three touches, two shots off target, and sixteen possessions lost, more than anyone bar Araujo. Carragher's reading of that spread was that the chances flatter an otherwise absent performance. The counter-reading is that a player creating three chances a game will eventually be on the right end of one.",
      severity: "high",
      source: "Opta Analyst / beIN Sports",
    },
    {
      label: "The home draw, still the unresolved record",
      detail: "The Bournemouth win came away, which does not touch it. Liverpool have drawn four consecutive Premier League games at Anfield, the first such run since November 2011 per Opta, and the first time in the club's history they have drawn both opening home league games of a season. The next three home league fixtures are Manchester City, Brighton and Arsenal, in that order, which is an unhelpful sequence in which to still be looking for a first home league win.",
      severity: "high",
      source: "Opta Analyst / Liverpool FC",
    },
    {
      label: "A defence assembled from the wrong parts, working anyway",
      detail: "Three clean sheets in a row, the longest run since 2024, kept by a back four in which the right-back is a centre-half on loan and one centre-back is twenty-one and three months into English football. Jeremy Jacquet took the BBC's highest rating on the field at the Vitality, eight, after an early foul on Evanilson that his own manager described as the sort of thing the player then answered. The caveat is the opposition: Ipswich, Fulham and a winless Bournemouth. City on 11 October is the first real examination of it.",
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
      verdict: "Carabao Cup third round, not counted in the league totals, and now carried at published figures rather than nulls. Ten changes, Gomez captain, and a first domestic win since Ipswich. Mac Allister struck the opener into the top corner on 21 after moving beyond the midfield line; Gakpo lashed in the second shortly after the interval; Gallagher headed Spurs back into it from a corner before the 70th; Mamardashvili, in his first appearance of the season, made a significant late save; Szoboszlai, off the bench, volleyed the third from around thirty yards in stoppage time. Bergvall had tested Mamardashvili early and Koumas was denied by Dubravka. The data, published since: 1.53 expected goals to Tottenham's 2.30, twelve shots to seventeen, five on target to six, two big chances to three, 44 per cent of the ball, with Liverpool's first-half figure 0.70. The Transfer Hub's shot map values Szoboszlai's volley at 0.03 and Gallagher's header at 0.9. The second-half split is not published and stays null.",
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
    note: "Premier League only, five games, Opta throughout. xG for is 2.73 (Newcastle) plus 1.61 (Forest) plus 0.53 (Ipswich) plus 1.13 (Fulham) plus 1.57 (Bournemouth); xG against is 1.43 plus 2.30 plus 0.72 plus 0.71 plus 0.76. Provenance caveat added 21 September: Opta's own published season figure for expected goals against, quoted by beIN Sports on 21 September, is 6.12 rather than the 5.92 these five per-match cards sum to. Both are Opta numbers and the tracker reports both rather than reconciling them, because the gap is a matter of which match-centre revision each was drawn from. The Champions League figures against Atletico (1.68 for, 0.81 against) and the Carabao Cup figures against Tottenham (1.53 for, 2.30 against) are shown on their own cards and are not aggregated here. First-half splits exist only for the Forest and Tottenham matches and are not aggregated."
  },
  optaFacts: [
    "The side Liverpool meet next has, on Opta's expected-points model, been the luckiest in the division: Manchester City's fifteen points are 5.8 more than their chances would normally earn, which puts them second rather than first on the underlying table. Sunderland's 3.57 expected goals in defeat at the Etihad on Sunday was the third-highest by a losing team since Opta's records began in 2013-14 (via Read Man City).",
    "Only two Premier League sides have conceded fewer expected goals this season than Liverpool's 6.12: Arsenal on 4.04 and Nottingham Forest on 4.8, per Opta via beIN Sports. On actual goals conceded, Liverpool's four is bettered only by Leeds and Everton, on three apiece. The team sitting sixth has, by both measures, one of the three best defences in the division.",
    "Liverpool did not concede a Premier League goal in September: Ipswich, Fulham and Bournemouth, three games and three clean sheets, with Jeremy Jacquet ever-present, per Liverpool FC. Opta's expected-goals-on-target model credits Alisson, who spends the break at Kirkby after Brazil left him out, with 0.8 goals prevented across the season.",
    "Isak scored three Premier League goals in three September appearances, the basis of his Player of the Month nomination, which already matches the three he managed in fourteen Premier League appearances across the whole of last season; with four in five this term, only Haaland has more in the division (Premier League / Opta Analyst).",
  ],
  sources: ["Opta Analyst", "beIN Sports", "Squawka", "Goal", "This Is Anfield", "FotMob", "The Transfer Hub", "EPL Index", "Liverpool FC", "BBC Sport", "Sofascore", "Premier League", "Sky Sports", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-25T22:30:00Z",
  headline:
    "Friday's internationals passed without an injury in the club's round-up, and the one player Liverpool most needed to come through, Isak, scored instead: a twentieth-minute opener in Sweden's 2-1 win over Romania. The losses were a layer down, the academy right-back Isaac Mabaya withdrawn from Zimbabwe's squad with a groin problem picked up for the Under-21s, and sixteen-year-old Isaac Konde gone to Manchester United. Correcting an error this page carried all week, Alisson is not with Brazil: Ancelotti left him out, so the first choice is training at Kirkby, and the goalkeeper away is Mamardashvili, with Georgia. Leoni and Chiesa remain the break's arrivals, and the standing structural risk is unchanged: Araujo has five consecutive league starts at right-back as a centre-half.",
  minutesNote:
    "Premier League minutes are not published here yet. Five league games, one Champions League game and one Carabao Cup tie have been played and no reliable per-player minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "January at the earliest: 'a reasonable chance' of the last two Champions League league-phase games (Inter 19 Jan, Lens 27 Jan per This Is Anfield); Iraola confirms 'Hugo will go later' than the international break", note: "The absence the break does nothing to shorten, because for an Achilles time is the whole treatment. Liverpool won the last game before the pause with the only senior nine at the club and Koumas as the nine-minute cover, the arrangement that holds until the new year. The January framing from Iraola's recent press conference stands: 'a hope and a realistic chance that he could help us in January', with 'a big part of the rehab still to meet'. Isak remains the only fit senior nine until then, Koumas the false-nine cover the cup used.", source: "Liverpool FC / This Is Anfield / Sports Mole" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training in the September/October international break; Sports Mole pencils mid-October as an availability target", note: "The board's headline return. Iraola confirmed the plan this week: 'The next one probably should be Giovanni Leoni. I think the plan is also to start training during the break, with the group.' It lands almost exactly a year after the ACL rupture on his debut, a step Lewis Steele had reported was approaching. Sports Mole pencils mid-October for actual availability; the manager calls the group work a plan rather than a promise. His return is the one that would end the two-man centre-back rota for good.", source: "Daily Mail / Liverpool FC / Sports Mole" },
    { name: "Conor Bradley", issue: "Knee", expected: "No club date. FotMob's injury listing now carries early January 2027, later than the 21 November Sports Mole previously pencilled", note: "The break arrives and the timeline does not shorten with it. A fifth consecutive league game has gone by without him and Araujo has made right-back his own, so Bradley returns to no obvious vacancy. Lewis Steele reported individual training and ball work resuming, eight months on from the January knee injury against Arsenal, which is the first genuine forward step in months. Against that, FotMob has drifted his listing to early January 2027 and the club has said nothing beyond Iraola's 'probably Conor will go later'.", source: "Daily Mail / Liverpool FC / FotMob / Sports Mole" },
    { name: "Federico Chiesa", issue: "Lower back (originally muscle, Como friendly, August)", expected: "Back in training over the international break; Sports Mole pencils 11 October as an availability target", note: "The one with an actual date, now inside the fortnight. Lewis Steele reported Chiesa is aiming to resume training with the group by the end of September, having not played since a muscle problem in the Como friendly in mid-August, and Iraola named him alongside Leoni for the break: 'even Fede should be around those dates.' Empire of the Kop note he would almost certainly have played in the cup had he been fit. Left off the Champions League squad, so Europe was never in reach this autumn, but a fifth forward by mid-October would ease a front line covering two flanks with four players.", source: "Daily Mail / Empire of the Kop / Sports Mole / This Is Anfield" },
  ],
  returning: [
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "Fully fit, not on international duty, and central to the break's plans", note: "Three weeks of internal football is exactly what a player eleven seasons and too many injuries into a career needs. Gomez is back in full training after the hamstring problem that cost him a month, a fourth senior centre-back and the only specialist right-back in the building in one body, and his next appearance in any competition will be his three hundredth for the club. Unused at Bournemouth, where the first-choice pair kept a third clean sheet without him; the fortnight of internal football is where a squad this thin at the back keeps him sharp.", source: "ESPN / BBC Sport / Liverpool FC" },
    { name: "Giorgi Mamardashvili", issue: "No injury; behind Alisson all season", status: "With Georgia; kept goal until a 99th-minute Northern Ireland winner on Friday", note: "The goalkeeper this page had at the AXA all week is in fact the one away. Mamardashvili is with Georgia, and on Friday night he was beaten by a Northern Ireland winner in the ninety-ninth minute of a 1-0 defeat, per the club's round-up, with Liverpool's Kieran Morrison an unused substitute on the other bench. It is competitive football his club cannot currently give him: one appearance this season, the cup tie against Tottenham and the late save that protected it, with the Chelsea tie at Anfield on 28 October the realistic next start. Alisson, left out by Brazil, is the senior goalkeeper at Kirkby.", source: "Liverpool FC / This Is Anfield / Liverpool.com" },
    { name: "Cody Gakpo", issue: "Soreness in both adductors, resolved by a matchday warm-up", status: "Passed fit, made the winner, now away with the Netherlands", note: "He is now the club's most reliable creator, and for three weeks he belongs to somebody else. Gakpo, who missed a session with adductor soreness and whom Iraola would not promise, came through a warm-up test, was moved to the right, and produced the ball that Wirtz missed and Isak turned in, finishing with a joint-team-high three chances created per Opta. He now joins the Netherlands, which is the part a club with one senior centre-forward and a forward who covers three positions would rather not dwell on for three weeks.", source: "Opta Analyst / BBC Sport / Squawka" },
    { name: "Wataru Endo", issue: "No injury; available and on the transfer list from January", status: "Not on international duty; working at the AXA; a January exit expected", note: "A thirty-three-year-old working normally at a training ground that has already decided to sell him. Endo is among the senior group Iraola keeps through the break, and Liverpool closed out the Bournemouth lead without ever calling on an extra holding midfielder. The reporting stands: FSG will sanction a January exit, the last window in which a fee is recoverable on a 2027 contract, with Ben Jacobs's line that 'Iraola clearly doesn't fancy him'. The consequence for this page is dated rather than dramatic: from February the emergency fifth centre-back has no occupant unless Leoni's knee has held.", source: "CaughtOffside / Football365 / ESPN" },
    { name: "Milos Kerkez", issue: "No injury; competing with Tsimikas at left-back", status: "Away with Hungary; the settled starter at left-back for now", note: "The weekend ended with him as the punchline of a pundit's review, which is not the same as a demotion. The BBC's reading of Kerkez at the Vitality was that he struggled initially and was regularly targeted with the crossfield ball over his head, and that the credit was for effort rather than quality: a six. Tsimikas was an unused substitute, which settles the week's selection without settling the department. Two senior options, a consensus that neither is at the manager's standard, and no market until January.", source: "BBC Sport / ESPN / Rousing The Kop" },
  ],
  startersLastMatch: {
    match: "Bournemouth 0-1 Liverpool, 20 September (Premier League matchday five) · the confirmed XI, per ESPN and BBC Sport",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Mac Allister", "Szoboszlai", "Gakpo", "Wirtz", "Barcola", "Isak"],
    changes: "Three changes from the goalless draw at Fulham on 12 September, per the BBC, and a full reversal of the ten changes made for the cup tie against Tottenham. The 4-2-3-1 that every Sunday preview named was the shape used, with one deviation nobody predicted: Gakpo started on the right rather than the left, with Barcola on the left, where Adam Smith largely nullified him. Szoboszlai was booked shortly after half-time. Munoz replaced Barcola and Nyoni replaced Wirtz on seventy-two; Gravenberch replaced Szoboszlai and Koumas replaced Isak on eighty-one. Unused: Mamardashvili, Gomez, Tsimikas, Frimpong and Ngumoha.",
    source: "ESPN / BBC Sport / Opta Analyst",
  },
  depthRisk: [
    { position: "Right-back", level: "high", detail: "Still the department with no answer inside the building, and this week it acquired two names outside one. Ronald Araujo, a centre-half by trade, has started five consecutive league games at right-back and the BBC's verdict at Bournemouth was that he defends the position comfortably but offers little going forward, the accurate summary of a working compromise. The department does not get deeper for three months: Conor Bradley's knee has no club date and FotMob's listing pushes him to early January 2027, Frimpong is the cup alternative, Gomez is the only specialist and stays at the AXA through the break. Manchester City attack that flank with Antoine Semenyo. The movement this week was reportorial and doubled: Liverpool are linked with Benfica's eighteen-year-old Daniel Banjaqui at a reported 50m euros (Anfield Watch via CaughtOffside) and Feyenoord's Givairo Read (TeamTalk), both January-shaped projects rather than September solutions. The injury this week came one layer down: Isaac Mabaya, an academy right-back of twenty-one, withdrew from Zimbabwe's squad with a groin problem sustained in the Under-21s' win over Brighton on 19 September (This Is Anfield / Nehanda Radio)." },
    { position: "Centre-forward", level: "high", detail: "Four of Liverpool's seven league goals belong to one man, which is a strength and a single point of failure at once. Isak scored his fourth in five league games and Liverpool's other routes to a goal at the Vitality were a deflected Barcola shot and two Szoboszlai free-kicks. Koumas is the false-nine cover the cup used. Ekitike's Achilles keeps January as the earliest realistic return, so a single hamstring still separates this squad from a genuine crisis, and the international break is three weeks of that hamstring being used by Sweden, who got a twentieth-minute goal out of it against Romania on Friday. Chiesa resuming training in the fortnight is the one bit of relief in view." },
    { position: "Centre-back", level: "medium", detail: "The least pressing question on this board today, with a longer-dated one attached: Van Dijk has committed to the Netherlands through Euro 2028 while his Liverpool contract ends in 2027 (ESPN / This Is Anfield). Van Dijk and Jacquet kept a third consecutive clean sheet together and Jacquet took the highest rating on the field, which makes the first-choice pair the least pressing question on this board. Behind them Gomez is fit and stays at the AXA over the break, Araujo covers at a pinch, and Leoni is due to rejoin group training during the international window with Sports Mole pencilling mid-October. The dated caveat is unchanged: Endo, the emergency fifth centre-half, is listed for sale in January." },
    { position: "Left-back", level: "high", detail: "Unchanged, and the last game supplied evidence rather than relief. Milos Kerkez started against the club that sold him and the BBC's report is that he struggled initially and was regularly targeted with the crossfield ball over his head, with effort rather than quality the thing worth praising. Tsimikas was an unused substitute. Two senior options, neither of whom the reporting believes is at the manager's standard, no market until January, and Semenyo attacking that side on 11 October." },
    { position: "Wide forward", level: "medium", detail: "The department that won the last game, and the one whose most expensive occupant is being told in public to sit out the next. Gakpo, a fitness doubt until the warm-up, played the right rather than the left and created three chances, joint-most on the field per Opta; Barcola played the left and was largely contained. Munoz is the fourth option and away for none of the acclaim. Ngumoha is with England. Chiesa is due to resume training by the end of the month, which would make five wide forwards for two flanks by mid-October, though TEAMtalk and Sport Witness report he will be put on the January market at around 15m euros unless he breaks into the side." },
    { position: "Central midfield", level: "medium", detail: "Held at medium on availability. The contract stand-off moved in tone on Tuesday, Mac Allister telling reporters he was very sad not to be offered terms but that two more years would be perfect, and Sports Mole and Goal reported the club still wants Inter's Aleksandar Stankovic after a summer refusal. Mac Allister and Szoboszlai started together and the BBC's reading was that Mac Allister found space to open the game up after a slow start while Szoboszlai played with purpose, was booked after half-time, and put two free-kicks narrowly wide. Gravenberch came on for the last nine minutes, the clearest signal yet of the order. Endo, available all season as the emergency fifth centre-back, is listed for a January exit, and Mac Allister is running down a deal the club has not offered to extend." },
  ],
  sources: ["Sports Mole", "Liverpool FC", "This Is Anfield", "Liverpool.com", "Nehanda Radio", "EPL Index", "Goal", "SI", "Rousing The Kop", "Squawka", "Opta Analyst", "Daily Mail"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-25T22:30:00Z",
  played: 5,
  points: 9,
  pointsPerGame: 1.80,
  projectedPoints: 68,
  projectedFinish: "Champions League places on current pace",
  headline:
    "Sixty-eight across a season, 1.80 a game, nine from five: the same arithmetic until 11 October, and still a description of five games rather than a forecast of thirty-eight. The risk the table cannot show came through the busiest night of the break intact, Isak scoring for Sweden and the club's round-up reporting no injuries, though most of the squad still reassembles only in the week of the hardest home game of the season. The margin is the useful number: sixth, unbeaten, level on points with fourth, fifth and seventh, and outside the Europa place on a single goal of goal difference. The block after the break tests it hard: Manchester City, Brentford, Brighton and Arsenal inside five weeks, all four of whom sit above Liverpool tonight.",
  thresholds: [
    { label: "Champions League (top 4)", points: 68, gap: 0, note: "Historical par for the last Champions League place in recent seasons, and exactly where five games of pace now lands. The live ESPN table this tracker rebuilds each run draws that stripe at fourth, so the label follows the table rather than the coefficient arithmetic. Holding it requires maintaining 1.80 points per game against a run of fixtures markedly harder than the one that produced it." },
    { label: "Europa League (5th)", points: 60, gap: 0, note: "Fifth-place par, and where the live table currently draws the Europa stripe, at Leeds, who are level with Liverpool on points and one goal better off. The present pace clears this line by eight points, which is a cushion built on five games and no more than that." },
    { label: "Conference League (6th-7th)", points: 55, gap: 0, note: "Sixth to seventh place par, often decided by cup outcomes as much as by league finish. It is the place Liverpool currently occupy in the table and thirteen points below the pace they are setting, which is the whole distance between where a season is and where it is heading. The live table carries no Conference stripe this early, because the berth is usually settled by a domestic cup, and Liverpool are in the Carabao Cup fourth round." },
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
    { date: "2026-11-22", opponent: "Manchester United", home: true, competition: "PL", oppPosition: 12, difficulty: "medium" },
  ],
  runInVerdict:
    "The soft fixture has been played and banked, and what waits on the far side of the break is four of the top four inside five weeks. Manchester City come to Anfield on 11 October with a perfect record and a three-point lead; Brentford away, Brighton at home and Arsenal at home follow, and between them sit LASK in Linz on 14 October and Chelsea in the Carabao Cup on 28 October. Six points from those four league games would be a good return and would hold the pace near 1.67 (fifteen from nine), a Europa-band season. Nine or more and the sixty-eight-point projection stops looking like an artefact of one afternoon at the Vitality. Three or fewer and the unbeaten start becomes the thing people remember rather than the thing that mattered. The genuine unknown is condition: most of this squad plays international football for three weeks and reassembles in the week of the hardest home fixture of the season.",
  sources: ["ESPN", "Opta Analyst", "Liverpool FC", "Sky Sports", "BBC Sport", "Squawka"],
};
