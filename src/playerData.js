// ─── Liverpool FC Player Data (2026-27 Season · Updated 2 September 2026) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Fri Sep 4 — a first clean sheet of the season, and it needed him. Alisson made five saves at Portman Road, FotMob's 8.2 and its highest mark of a Liverpool defender or keeper, recovering after spilling an Enciso shot in the second half and watching Clarke's late deflected effort go wide. Ipswich were ahead on expected goals on the night, 0.73 to 0.66, so the shutout was earned rather than gifted, the first in the league since April. Mamardashvili, shopped for a loan all summer without a taker, sat unused again. Atletico on Wednesday is the next, and harder, test of it", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Fri Sep 4 — an unused substitute again, on the night the man ahead of him kept a first clean sheet. Mamardashvili sat on the bench at Portman Road with Frimpong, Tsimikas, Endo and Ngumoha while Alisson made five saves in the 2-0 over Ipswich, the Brazilian's first league shutout since April. The tour spell as senior keeper while Alisson rested is a memory; the Georgian is the deputy, shopped for a loan all summer without a taker on terms, and the club still prefers to protect the asset rather than sell. The Carabao Cup tie against Tottenham on the 15th is his likeliest start before the break", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Fri Sep 4 — the second assist of the night began at his feet. Van Dijk's pass found Gakpo on the left in the ninth minute and two touches later Isak had his second; the captain then spent eighty-one minutes protecting a lead his side had never held this season, FotMob scoring him 7.7 and SI writing that he looked more comfortable than in weeks. A first clean sheet since April, beside Jacquet, with Araujo at right-back rather than in reserve. His deal still runs only to 2027, the AC Milan interest was knocked back without a bid, and at 35 he remains the fixed point, now with a win to organise around instead of a rescue", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "injured", outSince: "2026-07-25", injuryNote: "Fri Sep 4 — the nearest return, and still not near enough for Wednesday. Gomez rejoins team training next week, per Iraola's Thursday timetable, and Friday's reporting has him likely to miss the Champions League opener against Atletico, with Fulham on the 12th the first realistic matchday and the manager hoping to have him before the September break. His absence looked different after Portman Road: Araujo started at right-back, so the department he would restore now has two fit names rather than one. When he is back he gives a fourth senior centre-back and a third right-back option in one body, and the muscle recovery from the 26 July Sunderland friendly 'has gone normally'", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Fri Sep 4 — the tackle that started the season's first lead. Kerkez won possession around halfway in the sixth minute at Portman Road, fed Gakpo, and Isak scored six seconds of play later; SI called it aggressive defending that led directly to the goal and marked him 6.7, the lowest of the back four, on a night the left side otherwise held firm. Three starts in thirteen days at left-back, first choice by a distance with Robertson gone to Tottenham and Tsimikas unused on the bench. Grimaldo, Atletico's new left-back, and Giuliano Simeone on the right of their four are Wednesday's assignment", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Fri Sep 4 — no date, and a department that got by without him in a way it had not before. Bradley continues rehabilitation on the knee injured against Arsenal in January, 'probably Conor will go later' being Iraola's Thursday placing of him behind Gomez, Leoni and Chiesa in the order of returns, with no timeframe attached. On Friday the right-back he would normally contest went to Ronald Araujo for a first start, Frimpong unused, and the pair kept a clean sheet at Ipswich; the position the manager had called thin now has two fit names in it while it waits for a third. Still registered in the Champions League squad because only three changes are allowed after the league phase", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Fri Sep 4 — fit, on the bench, and unused, which is the surprise of the night. Every preview had Frimpong starting by elimination as the only fit senior right-back; the team sheet had Ronald Araujo there instead, a first Liverpool start, and Frimpong sat with Tsimikas, Endo, Ngumoha and Mamardashvili for the full ninety. Araujo was rated 7.7 and SI wrote that Frimpong 'ought to be worried' and that right-back 'could become his regular position'. Nothing is reported as wrong physically; this was selection, against a physical winger in Fatawu. Lookman on Wednesday is a quicker, inside-out problem, which may be his way back in", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Fri Sep 4 — a training date during the break, and a defence that won without needing him. Leoni, nearly a year on from the ACL tear on his September 2025 debut, is planned to rejoin group training during the international window later this month, per Iraola's Thursday round-up, the second of the returns after Gomez, with no matchday pencilled. Friday's back four at Ipswich was Araujo, Jacquet, Van Dijk and Kerkez, a first clean sheet of the season, which means the centre-back cover behind Van Dijk and Jacquet is now Endo in the league while Araujo plays right-back. Named in the Champions League squad regardless, alongside Bradley and Ekitike", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Fri Sep 4 — a third league start beside Van Dijk, a first clean sheet, and a booking he was fortunate to keep to one. Jacquet blocked Emersonn's effort from Fatawu's pass midway through the first half, was carded for a reckless challenge early in the second, and Ipswich felt he should have gone for a second foul on Emersonn soon after; FotMob's 7.4, SI calling him 'not thoroughly convincing' compared with earlier outings. The right side of Araujo and Jacquet kept the sheet regardless. With Araujo now needed at right-back, the twenty-year-old's own cover is thinner than ever: Gomez trains next week, Leoni is not with the group until the break", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
    physical: { height: 184, weight: 76, pace: 74, acceleration: 72, sprintSpeed: 75 },
    career: [
      { years: "2019-2024", club: "Rennes Academy", fee: null, type: "youth" },
      { years: "2024-2026", club: "Rennes", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "€63M", type: "senior" },
    ],
  },
  {
    id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Tue Sep 1 — out on loan, as the club always meant him to be. Ndukwe joined Levante on a season-long loan agreed on deadline day, the Spanish club covering his wage. Six foot six and nineteen, he was Liverpool's standout defender beside Van Dijk against Monaco in pre-season, but born in Austria and short of the points a post-Brexit work permit demands, he could not play a competitive fixture for Liverpool until at least January. A season abroad is the development the situation always called for: he goes to play now, rather than to wait", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png",
    physical: { height: 186, weight: 78, pace: 72, acceleration: 70, sprintSpeed: 73 },
    career: [
      { years: "2021-2025", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2025-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },

  // ── Midfielders ───────────────────────────────────────────────────────────
  {
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Fri Sep 4 — kept the pivot when most previews had sent him to the bench, and played 84 minutes of it. Mac Allister started beside Szoboszlai at Portman Road, Yahoo, The 4th Official and Opta having all restored Gravenberch, and Iraola kept the Forest midfield intact; FotMob's 7.5, tackled well, 85 per cent passing that SI called untidy by his standards, and a free header from Szoboszlai's corner early in the second half that he could only bounce into Scherpen's hands. Off for Nyoni at 84. Gravenberch's 26 minutes in relief keep the question open for Wednesday", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Fri Sep 4 — restored by the previews, left out by the manager, and on for the last 26 minutes. Gravenberch came on for Isak at 64, Liverpool moving to a three-man midfield to hold 2-0, and was tidy in it, FotMob's 6.3. It is a second successive Premier League game he has not started under Iraola, the manager keeping the Forest pivot of Mac Allister and Szoboszlai despite Opta, Yahoo and The 4th Official all naming him. The Champions League opener against Atletico on Wednesday, with a different rhythm and Baena dropping into midfield, is the obvious place for a recall", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Fri Sep 4 — a 150th Liverpool appearance, three shots all on target, two chances created, and a penalty taken away. Szoboszlai roamed freely from the pivot at Portman Road, FotMob's 7.6, twice testing Scherpen from distance in the first half; midway through the second he was upended by Leif Davis in the box and VAR, reviewing the foul, found him offside before the contact. SI's caveat is fair: Ipswich lacked open-play threat and he will not get that luxury every week. He was not needed at right-back this time, Araujo having started there. Wednesday brings Barrios and Hjulmand", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Fri Sep 4 — an unused substitute at Ipswich, and a league-only squad player until January at the earliest. Endo sat out the 2-0 at Portman Road with Frimpong, Tsimikas, Ngumoha and Mamardashvili as Iraola used Gravenberch, Barcola, Nyoni and Koumas from the bench. Left out of the 25-man Champions League squad on Thursday, McConnell preferred, so Wednesday's opener against Atletico is not available to him; in the Premier League he remains the emergency centre-half behind Van Dijk and Jacquet now Araujo is being used at right-back. Found no mover in the summer window and stays as depth, with the Carabao Cup tie against Tottenham on the 15th his likeliest start", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Fri Sep 4 — the pass for a hat-trick that was not allowed, and more ground covered than anyone on the pitch. Wirtz crossed for Isak in the 33rd minute and the flag went up; it was his closest thing to a first goal involvement of the season, and it did not count. FotMob's 7.2 came for the running, which SI singled out, rather than the creation, Gakpo having taken the two assists on the left. Off for Koumas in stoppage time. Three league games, no goal, no assist, and a team that has now found other ways to score while it waits for him", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Fri Sep 4 — twenty minutes and a win to finish. Nyoni came on for Mac Allister at 84 at Portman Road, the fourth of Iraola's changes, and helped see out a 2-0 the manager described as 'managing to win the game, not to suffer'. Forest's £30m was rejected before the window shut, the new deal is still pending, and with Endo left out of the Champions League squad he is a body closer to European minutes than he was a week ago", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Fri Sep 4 — two assists, the best rating on the pitch, and a flank he has made his own four days after nearly leaving it. Gakpo threaded Isak through in the sixth minute and found him again with the outside of his right boot in the ninth, FotMob's 8.9, and has now set up all three of the striker's league goals this season. He finished the game at centre-forward once Isak went off, Barcola, bought for the left, arriving on the right. The Manchester City move died on deadline day; Iraola said on Thursday he was 'very happy to keep Cody'; the Sporting News called the summer's flirtation with selling him 'all the more puzzling'. Contracted to 2030", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Fri Sep 4 — six minutes, nine minutes, and the away end singing his name. Isak scored twice at Portman Road, a near-post drive from Gakpo's threaded pass and a left-footed finish after stepping inside Greaves, had a third flagged offside from Wirtz's cross in the 33rd, and came off at 64 to a serenade, the job done and nothing reported wrong. Three league goals in three games, level with his total for the whole of 2025-26, two shots on the night and both scored. 'When he's fit, he's going to make the numbers,' Iraola said, 'but most of my demands with him are not about the goals.' Four goals in two games at this ground for Newcastle became six in three. Atletico on Wednesday, Ekitike still without a date behind him", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Fri Sep 4 — still the last name in the order of returns, and the front line he would lead just scored twice in nine minutes without him. Ekitike continues rehabilitation from the Achilles ruptured against PSG in April with no timeframe from Iraola, December the earliest anyone has mentioned, named after Gomez, Leoni, Chiesa and Bradley in Thursday's queue. Isak's brace at Ipswich takes the pressure off the wait without changing it: the nine is one man, and Gakpo finished Friday's game as the false-nine fallback when he came off. Registered in the Champions League squad regardless, Liverpool Offside noting only three changes are permitted after the league phase", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Fri Sep 4 — an unused substitute, and a queue that lengthened on the night. Ngumoha sat out the full ninety at Portman Road with Frimpong, Tsimikas, Endo and Mamardashvili, Munoz starting on the right and Barcola taking the flank when Munoz came off at 64; Koumas, not Ngumoha, was the stoppage-time forward change. Iraola's Thursday defence of him on the right stands, the five-year contract is still unannounced, and he did not need registering for either squad list as an under-21. Rotation across five games in seventeen days is his route in, starting with the Carabao Cup tie against Tottenham on the 15th", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Fri Sep 4 — out until the break, off the European list, and now watching a first win from the treatment room. Chiesa's return to group training is set for 'around those dates' of the September international break, per Iraola's Thursday round-up, which rules him out of Atletico on Wednesday, Fulham, the Tottenham cup tie and Bournemouth as it ruled him out of Ipswich; the 25-man Champions League squad was submitted without him and Endo. The muscle problem dates from the Como friendly. On the night Barcola made his debut on the right and Munoz started there, the queue on the flanks he would compete for has lengthened. His father closed off the Serie A talk on deadline night, so he stays, and waits", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Fri Sep 4 — third-choice, not in the matchday squad at Ipswich, and dependable with it. Woodman watched Alisson keep a first clean sheet of the season from outside the eighteen, Mamardashvili the keeper on the bench. Two Premier League starts across 2025-26 and a steady squad option on a new deal. No drama, which at his position is the point", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Fri Sep 4 — a second successive start on the right, 64 minutes of it, and the shirt handed to Barcola for the last 26. Munoz kept his place from the Forest side and showed the pace without adding the creativity, FotMob's 6.8 and SI noting he is the third different starter on the right in three league games as Iraola sorts his attack. The debut goal against Forest and the penalty won at Newcastle still stand as the fortnight's two decisive contributions; Friday was a quieter shift on a night the goals came early and from the other flank. In since June on a six-year deal to 2032, a World Cup winner with Spain at twenty-two", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
    ],
  },
  {
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Fri Sep 4 — a first Liverpool start, at right-back, and the team sheet's one surprise. Every preview had Frimpong by elimination in the position Iraola had called thin on Thursday; the manager picked Araujo there instead, the centre-back on loan from Barcelona with a £47m option to buy, and left Frimpong unused. FotMob's 7.7, strong in the duels and in the air, two first-half interventions the Sporting News picked out when Fatawu and Enciso were finding room, and the right side of Araujo and Jacquet kept the first clean sheet of the season. SI wrote that this 'could become his regular position'. He wears 33, the number nobody had worn for ten years. Lookman on Wednesday is a quicker test", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Fri Sep 4 — twelve touches, twenty-six minutes, and a Liverpool career begun in a game already won. Barcola came on for Munoz at 64 at Portman Road, his first competitive football since France's third-place game on 18 July, in the same double change that took Isak off for Gravenberch; the Sporting News reckoned it the most collectively expensive substitution English football has seen. FotMob's 6.0, a couple of lovely touches, and a manager counselling patience: 'He hasn't even played in a friendly. He has been training well but you always have to be careful. He's at a good level. We want to find him in behind.' Announced on Monday on a five-year deal, a guaranteed £106m rising to £123m, second on the club's list behind Isak's £125m. No. 29", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  src: "/assets/cover/2026-09-04-isak-brace.svg",
  alt: "Editorial plate: a floodlit away end under Suffolk night, a goal at the near post seen from the touchline, two balls in flight arcing low inside the same upright.",
  focus: "Ipswich 0-2 Liverpool: Isak twice inside nine minutes, Iraola's first win",
  credit: "Plate · Daily edition",
  generatedAt: "2026-09-04T22:20:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Evening pass (Fri 4 September): a match was played. Ipswich 0-2 Liverpool at Portman Road,
  // Alexander Isak in the sixth and ninth minutes, both from Cody Gakpo through-balls, a first win,
  // a first lead and a first clean sheet of the season, Andoni Iraola off the mark at the third
  // attempt. Araujo made a first start at right-back, Barcola debuted from the bench. Under STEP 7.5
  // this IS photographable: a striker wheeling away to the away end after the second. Track 1 plate
  // generated (text-free SVG, above); Track 2 brief below for Antigravity to replace it with a
  // cinematic still. generatedAt re-stamped as the cache-buster (COVER-00001).
  brief: {
    leadStory:
      "Alexander Isak scored twice inside the first nine minutes at Portman Road on Friday night and Liverpool beat Ipswich Town 2-0, Andoni Iraola's first win at the third attempt, the first time his side has led a game this season and its first clean sheet since April. Both goals came from Cody Gakpo through-balls, the first driven in at the near post in the sixth minute, the second slid in left-footed in the ninth; a third was disallowed for offside in the 33rd. Ronald Araujo made a first start, at right-back ahead of Frimpong; Bradley Barcola made his debut from the bench on 64 minutes. FotMob had Ipswich ahead on expected goals, 0.73 to 0.66. Liverpool rise to fifth on five points. Atletico Madrid at Anfield on Wednesday next.",
    subject: "Alexander Isak, arms out, wheeling away from the near post toward a red-lit away end at Portman Road, the goalkeeper on the ground behind him, floodlit Suffolk night",
    prompt: "Cinematic wide still, 16:9, 1600x900, no text, no logos, no legible lettering. A tall striker in an all-red kit, arms spread, turning away from the near post of a goal toward a block of red-clad travelling supporters lit by floodlights, the goalkeeper in green sprawled behind him, low September night sky, wet grass catching the light, shallow depth of field, photojournalistic, Getty-style sports photography, motion in the crowd, restrained colour grade with deep navy shadows and Liverpool red highlights.",
    aspectRatio: "landscape",
    slug: "isak-brace",
  },
};


// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Atlético Madrid",
  shortName: "ATM",
  home: true,
  date: "2026-09-09T20:00:00",
  competition: "UCL",
  venue: "Anfield",
  broadcast: "TNT Sports 1",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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
// Last refresh: 2026-09-04 (evening) — live 2026-27 table, Liverpool three played, the rest two.
// ESPN had already banked Friday night's Ipswich 0-2 Liverpool by the evening pull: Liverpool
// jump from thirteenth to fifth on five points, a game ahead of everyone above them, Ipswich drop
// to thirteenth. The four perfect sides (City, Arsenal, Hull, Chelsea) play on Saturday and Sunday.
// Regenerated from ESPN's endpoint on Friday evening.
export const STANDINGS = [
  { pos: 1, team: "Manchester City", p: 2, w: 2, d: 0, l: 0, gd: 4, pts: 6, qualification: "UCL" },
  { pos: 2, team: "Arsenal", p: 2, w: 2, d: 0, l: 0, gd: 4, pts: 6, qualification: "UCL" },
  { pos: 3, team: "Hull", p: 2, w: 2, d: 0, l: 0, gd: 3, pts: 6, qualification: "UCL" },
  { pos: 4, team: "Chelsea", p: 2, w: 2, d: 0, l: 0, gd: 2, pts: 6, qualification: "UCL" },
  { pos: 5, team: "Liverpool", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5, qualification: "UEL", highlight: true },
  { pos: 6, team: "Brentford", p: 2, w: 1, d: 1, l: 0, gd: 3, pts: 4 },
  { pos: 7, team: "Newcastle", p: 2, w: 1, d: 1, l: 0, gd: 2, pts: 4 },
  { pos: 8, team: "Everton", p: 2, w: 1, d: 1, l: 0, gd: 2, pts: 4 },
  { pos: 9, team: "Leeds", p: 2, w: 1, d: 1, l: 0, gd: 1, pts: 4 },
  { pos: 10, team: "Brighton", p: 2, w: 1, d: 0, l: 1, gd: 3, pts: 3 },
  { pos: 11, team: "Manchester United", p: 2, w: 1, d: 0, l: 1, gd: 1, pts: 3 },
  { pos: 12, team: "Sunderland", p: 2, w: 1, d: 0, l: 1, gd: 0, pts: 3 },
  { pos: 13, team: "Ipswich", p: 3, w: 1, d: 0, l: 2, gd: -4, pts: 3 },
  { pos: 14, team: "Bournemouth", p: 2, w: 0, d: 1, l: 1, gd: -1, pts: 1 },
  { pos: 15, team: "Nott'm Forest", p: 2, w: 0, d: 1, l: 1, gd: -1, pts: 1 },
  { pos: 16, team: "Fulham", p: 2, w: 0, d: 0, l: 2, gd: -2, pts: 0 },
  { pos: 17, team: "Coventry", p: 2, w: 0, d: 0, l: 2, gd: -4, pts: 0 },
  { pos: 18, team: "Crystal Palace", p: 2, w: 0, d: 0, l: 2, gd: -5, pts: 0, qualification: "REL" },
  { pos: 19, team: "Aston Villa", p: 2, w: 0, d: 0, l: 2, gd: -5, pts: 0, qualification: "REL" },
  { pos: 20, team: "Tottenham", p: 2, w: 0, d: 0, l: 2, gd: -5, pts: 0, qualification: "REL" },
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
  matchweek: 2,
  generatedAt: "2026-09-04T22:20:00Z",
  overview:
    "Liverpool moved the table on their own on Friday night, and moved eight places up it: the 2-0 at Portman Road, Isak twice inside nine minutes, lifts them from thirteenth to fifth on five points, with a game in hand on nobody and a game more played than everyone around them. The four sides on the maximum, Manchester City, Arsenal, promoted Hull and Chelsea, all play over the weekend and any win by any of them puts Liverpool back to sixth by Sunday night, so the number to hold is the points, not the place. Ipswich fall to thirteenth on three, their eighteen-game unbeaten home run in the league ended by the one visitor it had never been tested against. At the foot nothing has changed because nothing else has been played: Fulham, Coventry, Crystal Palace, Aston Villa and Tottenham remain pointless, the last three in the drop zone on goals scored.",
  teams: {
    "Liverpool": "Fifth on five points, unbeaten, and finally with a win, a lead and a clean sheet to their name after Friday's 2-0 at Ipswich. Isak has three league goals, all set up by Gakpo. Atletico Madrid at Anfield on Wednesday next, then Fulham at home on the 12th.",
    "Manchester City": "Top on six and plus-four, level with Arsenal, and the league's biggest gross spenders at £440.3m. Play Saturday; a win restores the four-point cushion over Liverpool.",
    "Arsenal": "Second on six, tied with City on points and goal difference after two wins from two. Play this weekend with the chance to go back above Liverpool by a point.",
    "Hull": "Third on six, two from two on their return to the top flight, and now the only promoted side in the top half, Ipswich having dropped to thirteenth.",
    "Chelsea": "Fourth on six and perfect under Xabi Alonso, though the Liverpool win means a draw this weekend would drop them below the Reds on goal difference.",
    "Brentford": "Sixth on four, pushed down a place by Liverpool's win. Host the Reds on 17 October.",
    "Ipswich": "Thirteenth on three after the 0-2 to Liverpool ended an eighteen-match unbeaten home league run. Gary O'Neil called his side excellent after the two early errors; FotMob had them ahead on expected goals, 0.73 to 0.66, and they have now conceded seven in two games.",
    "Bournemouth": "Fourteenth on one. Liverpool's opponents on 20 September, the last promoted side to beat Liverpool, under O'Neil, in March 2023.",
    "Nott'm Forest": "Fifteenth on one after the 2-2 at Anfield, where Opta had them out-creating Liverpool 2.30 to 1.61 on expected goals.",
    "Fulham": "Sixteenth and pointless after two defeats. At Anfield a week on Saturday, the second of Liverpool's five games in seventeen days.",
    "Crystal Palace": "Eighteenth and pointless after two defeats, in the drop zone on goals scored with Villa and Tottenham, all three on minus five.",
    "Brighton": "Tenth on three. Their Conference League trip to Jablonec has moved the Anfield fixture to Sunday 25 October, 2pm.",
    "Tottenham": "Bottom on goals scored with two defeats from two, and third in net spend at £176m for the privilege. At Anfield on 15 September in the Carabao Cup.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "Six Minutes, Nine Minutes, And The Season Turns Over.",
    byline: "Sky Sports / Liverpool FC",
    dateline: "Portman Road · 4 September",
    category: "Match Report",
    body:
      "It took nine minutes to end a fortnight of talk about starting slowly. Kerkez won the ball around halfway, Gakpo turned inside and threaded it, and Isak drove past Scherpen at the near post in the sixth minute; three minutes later Van Dijk found Gakpo again, the outside of the right boot did the rest, and Isak stepped inside Greaves to finish left-footed. Ipswich 0, Liverpool 2, and it stayed that way for eighty-one minutes of management. A third was flagged offside on the half-hour, a penalty overturned for the same offence after the break, and Andoni Iraola had his first win, his side's first lead and its first clean sheet since April in one Friday night in Suffolk."
  },
  {
    n: "02",
    headline: "'We Needed This One': The Manager Who Wanted The Start More Than The Goals.",
    byline: "NBC Sports / Sporting News",
    dateline: "Portman Road · 4 September",
    category: "Manager",
    body:
      "Iraola did not talk about the finishing afterwards. He talked about the first quarter of an hour, the thing he had been asking for since Newcastle. 'We started really strong today and I think that was the key,' he said, and then, of the two goals: 'The goals are a consequence of those situations.' Opta counted seven possessions won in the attacking third before half-time and forty-eight more forward passes than the hosts; 'we were recovering very high,' the manager said, which is how a striker gets found that early. On Isak, a warning dressed as praise: the demands will not be about goals. On the substitutions: 'It was about managing to win the game, not to suffer.' A first win, taken the way he had described wanting it."
  },
  {
    n: "03",
    headline: "The Uruguayan At Right-Back, And The Department That Was A Man Short.",
    byline: "Sporting News / SI",
    dateline: "Portman Road · 4 September",
    category: "Tactics",
    body:
      "Every preview had Frimpong by elimination. The team sheet had Ronald Araujo, a centre-back on loan from Barcelona making his first Liverpool start in the position the manager had called thin twenty-four hours earlier, with Frimpong unused on the bench. It worked: FotMob scored him 7.7, strong in the air, sound in the duels, two important interventions in the first half when Fatawu and Enciso were finding room, and the right side of Araujo and Jacquet kept the first clean sheet of the season. Frimpong 'ought to be worried', SI wrote. Whether it is a one-off for a physical winger or the new shape of the back four is Wednesday's first question."
  },
  {
    n: "04",
    headline: "Twelve Touches, Twenty-Six Minutes, And The Most Expensive Substitution In English Football.",
    byline: "SI / Sporting News",
    dateline: "Portman Road · 4 September",
    category: "Football News",
    body:
      "Bradley Barcola's Liverpool career began in the sixty-fourth minute, for Munoz, at the same moment Isak came off for Gravenberch, which the Sporting News reckoned the most collectively expensive double change the English game has seen. He had twelve touches, a couple of them lovely, and looked, in Iraola's word, 'sprightly' rather than sharp: no pre-season, no minutes since France's third-place game on 18 July. 'You always have to be careful,' the manager said. 'We want to find him in behind.' Gakpo, whose two assists had won the match from the flank Barcola was bought for, finished it at centre-forward. The pecking order on the left is not the question it was on Monday."
  },
  {
    n: "05",
    headline: "Five Points, Fifth Place, And Atletico On Wednesday.",
    byline: "ESPN / This Is Anfield",
    dateline: "Anfield · 4 September",
    category: "Race for Europe",
    body:
      "The table moved eight places in one night, and will move back over the weekend: Liverpool are fifth on five points with a game more played than anyone above them, and any win for City, Arsenal, Hull or Chelsea returns them to sixth. The points are the thing. What the win buys is a different tone for the busiest stretch of Iraola's tenure: Atletico Madrid at Anfield on Wednesday in the Champions League opener, Simeone's side fourth in Spain and unbeaten, Alvarez staying after the Barcelona saga but left out of the XI at Sevilla; then Fulham on the 12th, Tottenham in the cup on the 15th, Bournemouth on the 20th. A closed squad, five out, and now a striker on three and a keeper on a clean sheet. September looks different from fifth than it did from thirteenth."
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-04T22:20:00Z",
  summary:
    "Ipswich 0, Liverpool 2, and Andoni Iraola has his first win: Alexander Isak scored in the sixth and ninth minutes at Portman Road on Friday night, both from Cody Gakpo through-balls, and a side that had not led for a minute all season led for eighty-one of them and kept its first clean sheet since April. The team sheet carried the evening's other story before a ball was kicked, Ronald Araujo starting at right-back ahead of Frimpong in the position the manager had called thin the day before, and Bradley Barcola's debut arrived from the bench on 64 minutes. FotMob had the hosts ahead on expected goals, 0.73 to 0.66, which is the caveat the manager himself supplied: 'it was about managing to win the game, not to suffer.' Liverpool go from thirteenth to fifth on five points, a position the weekend will take back but a total nobody can. Earlier on Friday the club confirmed a €5m deal for the 18-year-old Saint-Etienne forward Djylian N'Guessan, joining in January after a loan at Brest. Atletico Madrid come to Anfield on Wednesday for the Champions League opener.",
  keyTopics: [
    {
      title: "Ipswich 0-2 Liverpool: Isak Twice Inside Nine Minutes, Iraola's First Win, A First Lead And A First Clean Sheet (Sky Sports / Liverpool FC, today)",
      detail:
        "It ended on Friday night, the wait for all three. Kerkez won it near halfway, Gakpo threaded it, Isak drove in at the near post in the sixth minute; Van Dijk to Gakpo, the outside of the boot, Isak inside Greaves and a left-footed finish in the ninth. A hat-trick was flagged offside in the 33rd from Wirtz's cross, a second-half penalty for a Davis foul on Szoboszlai was overturned by VAR for an earlier offside, and Ipswich, unbeaten at home in eighteen league games, went down 2-0 to a side that had drawn its first two 2-2. Liverpool climb to fifth on five points; the games in hand above them are played this weekend.",
      category: "matches",
    },
    {
      title: "Araujo Starts At Right-Back, Frimpong Sits, And The Thin Department Finds A New Shape (SI / Sporting News, today)",
      detail:
        "The one selection nobody previewed. Twenty-four hours after saying the right side 'looks thin', Iraola put Ronald Araujo there for a first Liverpool start and left Frimpong among the unused substitutes with Tsimikas, Endo, Ngumoha and Mamardashvili. FotMob rated the Uruguayan 7.7, strong in his duels and in the air, with two first-half interventions the Sporting News picked out when Fatawu and Enciso were finding space; SI wrote that Frimpong 'ought to be worried' and that this 'could become his regular position'. Jacquet, 7.4, was booked for a reckless challenge early in the second half and was fortunate, in Ipswich's view, not to see a second.",
      category: "tactics",
    },
    {
      title: "'We Started Really Strong Today And I Think That Was The Key': Iraola On The Win He Had Been Describing For A Fortnight (NBC Sports, today)",
      detail:
        "'Feels good. We needed this one,' the manager said on Friday night. 'We were close on the other two and couldn't do it.' The praise went to the start, not the finishes: 'All the forwards can have the offensive numbers, goals, assists, but I'm most pleased that we started strong. The goals are a consequence of those situations.' On Isak: 'When he's fit, he's going to make the numbers, but most of my demands with him are not about the goals.' On the raft of changes: 'It was about managing to win the game, not to suffer, not to concede chances.' Opta counted 48 more forward passes than Ipswich and seven possessions won in the attacking third before half-time.",
      category: "general",
    },
    {
      title: "Gakpo's Two Assists, And The Sale That Nearly Happened On Monday (Sporting News / SI, today)",
      detail:
        "Four days after the Manchester City move died on deadline day, Cody Gakpo produced the two passes of the night, the first threaded from inside, the second with the outside of his right boot, and now has the assist for all three of Isak's league goals this season. FotMob's 8.9 made him the highest-rated player on the pitch. All three successful through-balls in the match were Liverpool's, per Opta, and most of them his. He finished the game at centre-forward once Isak went off, with Barcola, bought for his flank, on the other wing. The Sporting News called the summer's flirtation with selling him 'all the more puzzling'.",
      category: "general",
    },
    {
      title: "Barcola's Debut: Twelve Touches From The 64th Minute, 'We Want To Find Him In Behind' (SI / NBC Sports, today)",
      detail:
        "The £123m signing came on for Munoz on 64 minutes, his first competitive football since France's third-place game on 18 July, in the same double change that took Isak off for Gravenberch. Twelve touches, a rating of 6.0 from FotMob, a couple of touches the Sporting News called lovely, and a manager counselling patience: 'He hasn't even played in a friendly. He has been training well but you always have to be careful. He's at a good level. We want to find him in behind.' Nyoni (84) and Lewis Koumas (90+1) followed him on.",
      category: "matches",
    },
    {
      title: "The Underlying Numbers Say Ipswich Edged It: 0.73 To 0.66 On xG, 14 Shots To 10 (FotMob via SI, today)",
      detail:
        "The scoreline flatters the visitors and the caveat is worth carrying into Wednesday. FotMob's match figures give Ipswich 0.73 expected goals to Liverpool's 0.66, 14 shots to 10, though Liverpool put seven on target to five, and both sides managed just 0.43 combined after the interval. Isak took two shots and scored both. Gary O'Neil said his side were 'probably the better side for large parts' after the two early errors and 'cut through Liverpool many times' in the second half. Liverpool's first clean sheet of the season owed something to Alisson's five saves, FotMob's 8.2, and a Clarke shot late on that deflected off Diop and wide.",
      category: "tactics",
    },
    {
      title: "Isak's Three In Three, And A Number Already Level With Last Season (SI, today)",
      detail:
        "Two goals in nine minutes on the ground where he scored a hat-trick for Newcastle, a third chalked off, and off after 64 minutes to a serenade from the away end, his first in Liverpool colours. Isak has three Premier League goals in three games, matching his total for the whole of an injured, unhappy 2025-26. FotMob gave him 8.8, other outlets 10. SI's reading is that the Salah replacement debate has been asking the wrong question: the production may come through the nine, not the wings. Liverpool have not had a thirty-goal striker since Suarez.",
      category: "matches",
    },
    {
      title: "Fifth On Five Points, For A Weekend At Least (ESPN, today)",
      detail:
        "ESPN's live table has Liverpool fifth on five points from three, up from thirteenth, with a game more played than any side above them. Manchester City, Arsenal, Hull and Chelsea, all on six from two, play Saturday and Sunday, and a win for any of them returns Liverpool to sixth; a Chelsea draw would leave the Reds above them on goal difference. Ipswich fall to thirteenth on three. The relegation zone is unchanged because nobody in it has played.",
      category: "matches",
    },
    {
      title: "Liverpool Confirm €5m Deal For Djylian N'Guessan, 18, To Join In January After A Loan At Brest (ESPN / Liverpool.com, today)",
      detail:
        "Announced on Friday, three days after the window shut: the 18-year-old Saint-Etienne forward will become a Liverpool player in January on a pre-contract arrangement worth a guaranteed €5m, with Saint-Etienne keeping a sell-on clause. He spends the first half of the season on loan at Brest in Ligue 1. Thirteen senior appearances and one goal for Saint-Etienne since a January 2025 debut, seven games for France at the 2025 Under-20 World Cup. It is the one transfer-shaped item of the day, and it changes nothing before the New Year.",
      category: "transfers",
    },
    {
      title: "Atletico Madrid Next: Fourth In Spain, Unbeaten, Romero, Grimaldo And Hjulmand Signed, Alvarez Staying (Liverpool FC / Football Espana, today)",
      detail:
        "The Champions League opens at Anfield on Wednesday, 8pm on TNT Sports 1, against a Simeone side that beat Sevilla 3-1 away on 29 August, Baena twice and Lookman, and sits fourth in La Liga on seven points from three, unbeaten. The summer brought Cristian Romero, Alejandro Grimaldo and Morten Hjulmand; Julian Alvarez told the club he was staying after Barcelona and Arsenal interest and a rejected €150m Real Madrid bid, and was left out of the starting XI at Sevilla, Simeone speaking of 'his own personal process'. Atletico play Athletic Bilbao on Sunday before travelling. Liverpool won last season's meeting 3-2 at Anfield.",
      category: "matches",
    },
    {
      title: "The Absentee List Did Not Change On A Night Everything Else Did (Liverpool FC, today)",
      detail:
        "No fresh injury was reported from Portman Road. Isak came off at 64 with the job done, not hurt; Munoz, Mac Allister and Wirtz were tactical changes. The five remain the five: Ekitike and Bradley with no timeframe, Leoni and Chiesa back with the group during the September break, Joe Gomez due in team training next week and, per Friday's reporting, still likely to miss Atletico on Wednesday. Frimpong, fit and unused, is the new sub-plot rather than a casualty.",
      category: "injuries",
    },
  ],
  sources: [
    "Sky Sports",
    "Liverpool FC",
    "SI",
    "Sporting News",
    "NBC Sports",
    "ESPN",
    "FotMob",
    "Liverpool.com",
    "Football Espana",
    "Opta",
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
  generatedAt: "2026-09-04T22:20:00Z",
  opponent: "Atlético Madrid",
  shortName: "ATM",
  fixture: {
    date: "2026-09-09T20:00:00",
    venue: "Anfield",
    home: true,
    competition: "UCL",
    broadcast: "TNT Sports 1",
  },
  manager: "Diego Simeone",
  formation: "4-4-2",
  leaguePosition: 4,
  summary:
    "Wednesday brings Atletico Madrid to Anfield for the second September running, the Champions League league phase opening against Diego Simeone's fifteenth-season side, fourth in La Liga on seven points from three and unbeaten. The summer was busy in both directions: Cristian Romero, Alejandro Grimaldo and Morten Hjulmand arrived, Ademola Lookman is scoring, and Julian Alvarez, chased by Barcelona and Arsenal with a €150m Real Madrid bid rejected outright, told the club he was staying and has since been jeered by his own crowd and left out of the XI at Sevilla, Simeone speaking of 'his own personal process'. The results say a side finding its rhythm without him: 2-0 over Malaga on the opening night, a 2-2 with Villarreal in which Robin Le Normand was sent off, then 3-1 at Sevilla on 29 August, Alex Baena scoring twice in a first half that settled it and the World Cup winner now the team's reference point. They play Athletic Bilbao on Sunday before travelling. Liverpool won last season's opener between the sides 3-2 at Anfield.",
  shape:
    "A 4-4-2 that becomes a 4-2-4 without the ball and something narrower with it: Barrios and Hjulmand the pivot, Giuliano Simeone and Lookman wide, Lee Kang-in and Baena a front two in name only, Baena dropping between the lines and at times into a false nine. Grimaldo, from Leverkusen, gives the left the overlap and the set-piece delivery Atletico have lacked; Llorente does the same on the right by running rather than crossing. They score early and then defend the lead, which at Sevilla meant 3-0 at half-time and a second half spent absorbing pressure, Simeone conceding they 'lost energy'.",
  keyPlayers: [
    {
      name: "Álex Baena",
      role: "Second striker / No. 10",
      threat: "Scored twice in the 3-1 at Sevilla, one from distance, and once against Malaga: three goals in three league games, per Football Espana and MARCA. Operates between the lines and drops into a false nine, the pattern that pulls centre-backs out and that Liverpool have conceded to on the break all season.",
      source: "Football Espana / MARCA",
    },
    {
      name: "Ademola Lookman",
      role: "Left winger",
      threat: "Scored Atletico's second at Sevilla and starts wide left of the four, running at a right-back. Liverpool's right side on Friday was Araujo, a centre-back, with Frimpong benched; which of them faces Lookman is Wednesday's first selection question.",
      source: "Football Espana",
    },
    {
      name: "Julián Álvarez",
      role: "Centre-forward (contested)",
      threat: "The €150m Real Madrid bid was rejected and he stayed, but he was jeered at home against Villarreal and left out of the starting XI at Sevilla. Four years left on his contract; Simeone says the club is supporting him through 'his own personal process'. Whether he starts at Anfield is unknown.",
      source: "Football Espana / ESPN / Goal",
    },
    {
      name: "Alejandro Grimaldo",
      role: "Left-back",
      threat: "Signed from Bayer Leverkusen this summer and straight into the XI at Sevilla. The overlapping full-back and set-piece taker; the flank he attacks is Kerkez's.",
      source: "Liverpool FC / Sky Sports",
    },
  ],
  predictedXI: [
    "Oblak", "Llorente", "Pubill", "Hancko", "Grimaldo",
    "G. Simeone", "Barrios", "Hjulmand", "Lookman", "Lee", "Baena",
  ],
  absentees: [],
  recentForm: [
    { date: "2026-08-29", opponent: "Sevilla", home: false, score: "3-1", result: "W", note: "Baena twice and Lookman in a first half that settled it; Sierra pulled one back. Alvarez left out of the XI." },
    { date: "2026-08-23", opponent: "Villarreal", home: true, score: "2-2", result: "D", note: "Pubill and Giuliano Simeone scored; Moreno and Mikautadze penalties levelled it. Le Normand sent off, Alvarez jeered by the home crowd." },
    { date: "2026-08-19", opponent: "Málaga", home: true, score: "2-0", result: "W", note: "Lee Kang-in on debut and Baena, both in the second half, in the season opener." },
  ],
  liverpoolAngle:
    "The match Liverpool just won is the one that frames this: they beat Ipswich by scoring first, then managed the game, and the underlying numbers (0.66 xG for to 0.73 against, per FotMob) say the management was the harder part. Atletico are built for the opposite script. They scored inside the first half in all three league games, defend a lead as well as anyone in Europe, and if Baena's drop into the false nine draws Van Dijk and Jacquet out, the runners behind him hit the transition seam that has cost Liverpool nine fast-break goals since last August, more than any Premier League side, per Opta. The second angle is the right flank: Friday's answer was Araujo, a centre-back, against a physical winger; Lookman is a different problem, quick and inside-out, and Frimpong's pace or Araujo's strength is the manager's call. The counterweight is real: a striker with three in three, a first clean sheet, a crowd, and a 3-2 over the same opponent at the same ground twelve months ago. The predicted XI is Atletico's Sevilla side, not a preview; no named team-news preview exists five days out with a La Liga fixture in between, and absentees will be filled after Sunday.",
  modelLine: null,
  sources: ["Football Espana", "MARCA", "ESPN", "Sky Sports", "Liverpool FC", "Goal", "TNT Sports", "FotMob"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-04T22:20:00Z",
  competition: "PL",
  played: 3,
  headline:
    "The first win came with the season's worst expected-goals line, and both halves of that sentence matter. At Portman Road Liverpool scored twice from two Isak shots inside nine minutes and were then out-created, 0.73 to 0.66 on FotMob's numbers, 14 shots to 10, which is the reverse of the opening fortnight, when they out-created Newcastle 2.73 to 1.43 and drew, and trailed Forest on xG and drew. Three games in, the season reads 5.00 expected goals for and 4.46 against on a mixed-source total, six scored and four conceded, and the pattern underneath it has flipped: the slow starts are gone for a night, replaced by a fast start and a long, deliberate hold. The manager wanted the start above everything and said so. What he has not yet had is a game his side dominated from first minute to last, and Atletico on Wednesday are the wrong opponent to expect one against.",
  diagnosis: [
    {
      label: "The start, solved for a night",
      detail: "Two goals inside nine minutes at Ipswich after conceding inside 24 against Forest and chasing both August games. Iraola's post-match line was that the start, not the goals, was the key, and Opta's forward-pass count (48 more than Ipswich) and seven attacking-third regains before half-time say the press was the mechanism. One game does not retire a pattern; it is the first evidence against it.",
      severity: "positive",
      source: "Sporting News / Opta / NBC Sports",
    },
    {
      label: "Efficiency, not volume, won it",
      detail: "Isak's two shots, two goals, against a total team xG of 0.66, per FotMob. At Newcastle 27 shots produced 2.73 xG and two goals. The chance-quality problem the first fortnight showed has not been fixed so much as bypassed by a striker in form, and the disallowed third was the only other clear look.",
      severity: "medium",
      source: "FotMob via SI",
    },
    {
      label: "Fast-break concession",
      detail: "Both Newcastle goals came from fast breaks, and Opta count nine conceded from such situations since the start of last season, more than any Premier League team. Ipswich did not score but did, per O'Neil, 'cut through Liverpool many times' in the second half, and FotMob had them ahead on xG. The clean sheet was a clean sheet, not a cure; Atletico's Baena-as-false-nine is the same trap Enciso was set to spring.",
      severity: "high",
      source: "Opta Analyst / FotMob / Yahoo Sports",
    },
    {
      label: "The right side has a second option",
      detail: "Araujo's first start, at right-back rather than centre-half, rated 7.7 by FotMob with two first-half interventions the Sporting News singled out. It is the first game the department has had a choice in, and it changes what a Frimpong injury would mean.",
      severity: "positive",
      source: "FotMob via SI / Sporting News",
    },
  ],
  matches: [
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
      verdict: "Won on two Isak shots in the sixth and ninth minutes, both from Gakpo through-balls, then held. Out-created across the ninety on FotMob's figures, 0.73 to 0.66, 14 shots to 10, though Liverpool had seven on target to five; both sides managed 0.43 xG combined after the interval. A first lead and a first clean sheet of the season. Opta Analyst's match figures are not yet published and will replace FotMob's when they are; first-half splits are not available.",
      source: "FotMob via SI",
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
      verdict: "Out-created at Anfield. Forest led twice, through Ndoye and a Gibbs-White penalty, and Liverpool needed Isak on the hour and Munoz at 82 to rescue it. Wirtz had a goal ruled out for an offside against Frimpong in the build-up.",
      source: "Opta Analyst",
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
    note: "Mixed-source totals: xG for is 2.73 (Newcastle, Opta) plus 1.61 (Forest, Opta) plus 0.66 (Ipswich, FotMob); xG against is 1.43 plus 2.30 (Opta) plus 0.73 (FotMob). The Ipswich figures will be swapped for Opta Analyst's when published. First-half splits exist only for the Forest match and are not aggregated.",
  },
  optaFacts: [
    "Liverpool led for the first time this season in the sixth minute at Portman Road and never trailed. Across the opening two games they had not been in front for a single minute; across Friday's ninety they were behind for none.",
    "Cody Gakpo has assisted all three of Alexander Isak's Premier League goals this season, and all three successful through-balls in the match were Liverpool's, per Opta via the Sporting News.",
    "Isak's three league goals in three games match his total for the whole of 2025-26. SI notes Liverpool have not had a thirty-goal striker in a season since Luis Suarez.",
    "Ipswich had not lost a home league game in eighteen, seventeen of them in the Championship; Liverpool remain unbeaten in all seven of their league visits to Portman Road.",
  ],
  sources: ["FotMob", "SI", "Sporting News", "Opta Analyst", "Liverpool FC", "ESPN"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-04T22:20:00Z",
  headline:
    "Nobody was hurt at Portman Road, and one thing changed anyway: the right-back department has two names in it. Araujo started there, Frimpong sat, and the position Iraola called thin on Thursday looked, for one night, like a choice rather than a default. The five absentees are the same five, none nearer than Gomez, who trains with the group next week and is still likely to miss Atletico on Wednesday. Isak came off on 64 minutes with the job done, not injured; Barcola's twelve touches were his first competitive minutes since 18 July. Five games in seventeen days have started with a win and no new casualties, which is the best the closed squad could have asked of the first of them.",
  minutesNote:
    "Premier League minutes are not published here yet. Three league games have been played and no reliable per-player league minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "No timeframe; December at the earliest", note: "'Especially Hugo will go later,' Iraola said on Thursday, and nothing on Friday changed it. Registered in the Champions League squad regardless, because only three changes are allowed after the league phase. Isak's three in three make the wait easier to bear; Gakpo finished Friday's game at centre-forward, which is the fallback.", source: "Liverpool FC / Liverpool Offside" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training during the September international break", note: "Iraola's Thursday plan has him back with the squad during the break after nearly a year out; no matchday date. Named in the Champions League squad.", source: "Liverpool FC" },
    { name: "Conor Bradley", issue: "Knee", expected: "No timeframe", note: "'Probably Conor will go later,' Iraola said on Thursday. His absence is why Araujo at right-back on Friday was news: it is the first time since August the department has had a second fit body.", source: "Liverpool FC" },
    { name: "Federico Chiesa", issue: "Muscle (Como friendly, August)", expected: "Rejoins group training during the September international break", note: "Out until the break per Iraola and left off the Champions League list, so Wednesday against Atletico is not in reach either way. Stays at the club after his father closed off the Serie A talk on deadline night.", source: "Liverpool FC / Liverpool Offside" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 26 July)", expected: "Team training next week; likely to miss Atletico on Wednesday, hoped for before the break", note: "'The closest one is Joe,' Iraola said on Thursday. Friday's reporting has him still likely to miss the Champions League opener; Fulham on the 12th is the first realistic matchday. His return gives a fourth senior centre-back and, now Araujo has played there, a third right-back option.", source: "Liverpool FC / Sports Mole" },
  ],
  returning: [],
  startersLastMatch: {
    match: "Ipswich Town 0-2 Liverpool, 4 September",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Szoboszlai", "Mac Allister", "Munoz", "Wirtz", "Gakpo", "Isak"],
    changes: "One change from the Forest side: Araujo in for Frimpong at right-back, a first Liverpool start. Mac Allister kept the pivot with Szoboszlai despite most previews restoring Gravenberch, who came on for Isak at 64 alongside Barcola (for Munoz) on his debut; Nyoni (84, for Mac Allister) and Koumas (90+1, for Wirtz) followed. Unused: Mamardashvili, Frimpong, Tsimikas, Endo, Ngumoha.",
    source: "SI / FotMob / Liverpool FC",
  },
  depthRisk: [
    { position: "Right-back", level: "high", detail: "Downgraded from critical after Friday: Araujo started there and Frimpong was fit and unused, so the department has two available bodies for the first time this season. Still no specialist cover behind them (Bradley no date, Gomez next week in training), Szoboszlai remains the in-game option, Mabaya the registered academy name. Lookman on Wednesday is the next test." },
    { position: "Centre-back", level: "high", detail: "Van Dijk and Jacquet, with Araujo now needed at right-back as well, which thins the cover here even as it thickens it there. Gomez trains next week; Leoni not with the group until the break. One injury and Endo plays centre-half." },
    { position: "Centre-forward", level: "high", detail: "Isak alone, three goals in three, with Ekitike given no timeframe. Gakpo is the false-nine fallback and finished Friday's game there." },
    { position: "Central midfield", level: "medium", detail: "Mac Allister, Gravenberch, Szoboszlai and Endo, with Nyoni pushing and given twenty minutes on Friday. Endo is not in the Champions League squad, so the European depth is one body shorter than the league's." },
  ],
  sources: ["Liverpool FC", "SI", "FotMob", "Sports Mole", "Liverpool Offside", "Sporting News"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-04T22:20:00Z",
  played: 3,
  points: 5,
  pointsPerGame: 1.67,
  projectedPoints: 63,
  projectedFinish: "Europa League places on current pace",
  headline:
    "One win moves the projection from 38 to 63, which says less about Liverpool than about how little three games can tell you. Five points from nine is a 1.67-a-game pace, roughly a sixth-place return over a full season, and the same arithmetic that had them on the survival line on Friday morning has them in Europe by Friday night. Treat it as a direction, not a destination. The next two league games are Fulham at home and Bournemouth away, sixteenth and fourteenth, either side of a Champions League opener and a cup tie; win both and the pace is a top-five one before the September break.",
  thresholds: [
    { label: "Champions League (top 5)", points: 68, gap: 5, note: "Historical par for fifth place in recent seasons. Requires roughly 1.80 points per game from here." },
    { label: "Europa League", points: 60, gap: 0, note: "Roughly sixth place par, and where the current pace lands. Requires about 1.57 points per game from here." },
    { label: "Conference League", points: 55, gap: 0, note: "Seventh place par, often decided by cup outcomes as much as league finish." },
    { label: "Safety", points: 38, gap: 0, note: "The conventional survival line, and where the pace sat before Friday's win. Twenty-five points of projection moved on one result, which is the size of the sample talking." },
  ],
  thresholdNote:
    "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  runIn: [
    { date: "2026-09-12", opponent: "Fulham", home: true, competition: "PL", oppPosition: 16, difficulty: "easy" },
    { date: "2026-09-20", opponent: "Bournemouth", home: false, competition: "PL", oppPosition: 14, difficulty: "medium" },
    { date: "2026-10-11", opponent: "Manchester City", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 6, difficulty: "hard" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 10, difficulty: "medium" },
    { date: "2026-11-01", opponent: "Arsenal", home: true, competition: "PL", oppPosition: 2, difficulty: "hard" },
  ],
  runInVerdict:
    "Fulham at home on the 12th and Bournemouth away on the 20th are the two league games before the break, against sides currently sixteenth and fourteenth, with Atletico on Wednesday and Tottenham in the Carabao Cup on the 15th in between. Six points from them is eleven from fifteen and a genuine top-five pace into the Manchester City visit on 11 October; two from them puts the projection back in the fifties and the fast start at Ipswich down as a good night rather than a turn. Gomez is expected back in team training next week and possibly on the pitch before the break; Chiesa is not in reach for any of it.",
  sources: ["ESPN", "FotMob", "Liverpool FC", "Sky Sports", "This Is Anfield"],
};
