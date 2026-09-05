// ─── Liverpool FC Player Data (2026-27 Season · Updated 5 September 2026 (evening)) ──────
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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Sat Sep 5 — the 138th, and past Elisha Scott into fourth on the club's all-time list. The club counted it on Saturday: Friday's shutout at Portman Road was Alisson's 138th for Liverpool in 336 appearances, 104 of them in the Premier League, and only Reina (177), Grobbelaar (267) and Clemence (323) stand above him now. It needed five saves, FotMob's 8.2, a recovery after spilling an Enciso shot and a late deflected Clarke effort that went wide; Ipswich were ahead on pre-shot expected goals, 0.73 to 0.66, though Sofascore's post-shot model had Liverpool 1.70 to 0.47. The first league clean sheet since April. Atletico on Wednesday, beaten 3-0 in Bilbao on Saturday, are the harder test of it", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
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
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Sat Sep 5 — day two of the argument, and a third voice in it that is talk rather than a player. Frimpong sat out all ninety at Portman Road as Araujo took a first start at right-back and a 7.7; SI wrote he 'ought to be worried', and on Saturday Joleon Lescott hinted on air that 'there's talk of Liverpool' for free agent Dani Carvajal, which is chatter, not a report, and would not solve Wednesday. Nothing is reported as wrong physically; this was selection, against a physical winger in Fatawu. Atletico's 3-0 defeat in Bilbao did not settle whether Lookman starts at Anfield, and Lookman, quick and inside-out, is the case for his recovery pace over a converted centre-back's strength", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Sat Sep 5 — four goal involvements in three games, and per Opta only Salah has managed more through a Liverpool opening three this century. Gakpo's two assists at Portman Road, the first threaded from inside and the second with the outside of the right boot, followed a goal at Newcastle and an assist against Forest; Sky's hits-and-misses made him the weekend's story, Sam Blitz writing that the best piece of business may be the winger Liverpool kept rather than the one they bought, and Carragher posting at half-time that 'Barcola is going to struggle to get a game with this version of Gakpo'. Sofascore had him at three key passes and 0.40 expected assists. The Manchester City move died on deadline day; contracted to 2030; the left is his on Wednesday", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Sat Sep 5 — Player of the Match for the first time in a Liverpool shirt, and no targets set. Isak told Sky the fast start was the plan: 'we were talking about starting the game good, which we haven't done recently, that was perfect for us to get two quick goals', and on the supply, 'Cody found me twice pretty good'. Two shots at Portman Road, both scored, from 0.21 of expected goals and 0.33 on target per Sofascore; a third flagged offside in the 33rd; off at 64 to the away end singing. Three league goals in three, level with his whole 2025-26. 'It's still early. I think we still have a lot to learn and it's game by game at this point.' Atletico on Wednesday, arriving from a 3-0 in Bilbao, Ekitike still without a date behind him", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Sat Sep 5 — a day on, the argument has a third party in it and the office that would settle it is empty. Araujo's first Liverpool start came at right-back at Portman Road, FotMob's 7.7, strong in the duels and in the air, two first-half interventions the Sporting News picked out, and the right side of Araujo and Jacquet kept a first clean sheet; SI wrote the position 'could become his regular position'. On Saturday Lescott talked up free agent Carvajal as a Liverpool possibility, talk not a report, and Richard Hughes, who loaned him from Barcelona with a £47m option, stepped down as sporting director. Atletico lost 3-0 in Bilbao; whether Lookman starts at Anfield is still the question that decides his Wednesday. He wears 33", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
    physical: { height: 188, weight: 79, pace: 78, acceleration: 74, sprintSpeed: 80 },
    career: [
      { years: "2016-2018", club: "Rentistas", fee: null, type: "youth" },
      { years: "2018-2020", club: "Boston River / Barcelona B", fee: null, type: "senior" },
      { years: "2020-2026", club: "Barcelona", fee: "€1.7M", type: "senior" },
      { years: "2026-", club: "Liverpool (loan)", fee: "Loan, £47m option", type: "senior" },
    ],
  },
  {
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Sat Sep 5 — the thunder went elsewhere, and Sky said so. Barcola's debut, twenty-six minutes and twelve touches for Munoz at 64 at Portman Road, was overshadowed by the man on the other flank: 'Barcola is going to struggle to get a game with this version of Gakpo,' Carragher posted at half-time, and Sky's Sam Blitz wrote that the best business may be the winger kept, not the £123m one bought. Iraola counsels patience, 'he hasn't even played in a friendly, you always have to be careful, we want to find him in behind', and the man who signed him, Richard Hughes, stepped down on Saturday. Announced on Monday on a five-year deal, a guaranteed £106m rising to £123m, second on the club's list behind Isak. No. 29. Wednesday is the first Anfield night", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  src: "/assets/cover/2026-09-05-hughes-exit.svg",
  alt: "Editorial plate: a training-ground office block at dusk, one upper window still lit with a single desk lamp behind the glass, and the red tail lights of a car leaving the gate along a wet drive.",
  focus: "Richard Hughes steps down as sporting director, Al-Hilal expected; Atletico beaten 3-0 in Bilbao four days before Anfield",
  credit: "Plate · Daily edition",
  generatedAt: "2026-09-05T22:30:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Evening pass (Sat 5 September): the lead changed. Liverpool confirmed on Saturday afternoon that
  // Richard Hughes has stepped down as sporting director, Al-Hilal his expected destination, with the
  // search for a successor led by Mike Gordon and, per The Athletic, internal first. A departure from
  // an office is not a photographable moment under STEP 7.5, so no new Track 2 request was queued: the
  // Track 1 plate above is a deterministic, text-free scene (one lit window on the training-ground block
  // at dusk, tail lights leaving the gate) and the standing Track 2 brief below, the Isak celebration
  // from Portman Road, remains the open request for Antigravity. generatedAt re-stamped (COVER-00001).
  // Morning pass (Sat 5 September): no match since Friday's win, plate carried over, generatedAt re-stamped.
  // Evening pass (Fri 4 September): Ipswich 0-2 Liverpool, Isak 6' and 9', Track 1 plate 2026-09-04-isak-brace.svg.
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
// Last refresh: 2026-09-05 (evening) — live 2026-27 table after Saturday's six games; Arsenal v Chelsea
// (Sunday 11:30) and Everton v Manchester United still to play. Liverpool did not play and dropped a place:
// City beat Coventry 1-0 to go to nine, Hull drew 0-0 with Villa for seven, and Brentford's 1-1 at
// Sunderland took them to five with a better goal difference (+3 to +2), so Liverpool are sixth on five.
// Crystal Palace won 3-2 at Fulham for a first win; Forest 0-0 Spurs; Newcastle 2-2 Bournemouth;
// Brighton 1-1 Leeds. Regenerated from ESPN's endpoint on Saturday evening.
export const STANDINGS = [
  { pos: 1, team: "Manchester City", p: 3, w: 3, d: 0, l: 0, gd: 5, pts: 9, qualification: "UCL" },
  { pos: 2, team: "Hull", p: 3, w: 2, d: 1, l: 0, gd: 3, pts: 7, qualification: "UCL" },
  { pos: 3, team: "Arsenal", p: 2, w: 2, d: 0, l: 0, gd: 4, pts: 6, qualification: "UCL" },
  { pos: 4, team: "Chelsea", p: 2, w: 2, d: 0, l: 0, gd: 2, pts: 6, qualification: "UCL" },
  { pos: 5, team: "Brentford", p: 3, w: 1, d: 2, l: 0, gd: 3, pts: 5, qualification: "UEL" },
  { pos: 6, team: "Liverpool", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5, highlight: true },
  { pos: 7, team: "Newcastle", p: 3, w: 1, d: 2, l: 0, gd: 2, pts: 5 },
  { pos: 8, team: "Leeds", p: 3, w: 1, d: 2, l: 0, gd: 1, pts: 5 },
  { pos: 9, team: "Brighton", p: 3, w: 1, d: 1, l: 1, gd: 3, pts: 4 },
  { pos: 10, team: "Everton", p: 2, w: 1, d: 1, l: 0, gd: 2, pts: 4 },
  { pos: 11, team: "Sunderland", p: 3, w: 1, d: 1, l: 1, gd: 0, pts: 4 },
  { pos: 12, team: "Manchester United", p: 2, w: 1, d: 0, l: 1, gd: 1, pts: 3 },
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
  generatedAt: "2026-09-05T22:30:00Z",
  overview:
    "The place went on Saturday afternoon, as it was always going to, and the points did not: Liverpool are sixth on five after a day in which they did not play, dropped below Brentford on goal difference when the Bees drew 1-1 at Sunderland, and watched Manchester City go to nine with a 1-0 over Coventry and Hull to seven with a goalless draw against a Villa side that has still not scored. Arsenal and Chelsea meet at the Emirates on Sunday morning, both on six from two, so the top of the table is not finished with the weekend yet; a draw there leaves both a point above Liverpool with a game in hand, a win sends one of them to nine. The middle is a knot: Brentford, Liverpool, Newcastle and Leeds all on five, separated by goal difference. Crystal Palace won for the first time under Sage, 3-2 at Fulham, which drops Fulham, Liverpool's next league opponents on the 12th, into the bottom two with Coventry, both pointless after three. Tottenham's 0-0 at Forest is their first point and still leaves them in the relegation stripe on goals scored.",
  teams: {
    "Liverpool": "Sixth on five, unbeaten, and a game behind nobody now: Brentford's draw took them above on goal difference, plus-three to plus-two. Atletico at Anfield on Wednesday in the Champions League, then Fulham, who are nineteenth and pointless, on the 12th.",
    "Manchester City": "Top on nine after a 1-0 over Coventry, the only perfect record left before Sunday's game at the Emirates. At Anfield on 11 October.",
    "Hull": "Second on seven after a 0-0 with Villa, unbeaten on their return to the top flight; Jakirovic said he would have signed for seven points immediately.",
    "Arsenal": "Third on six from two, at home to Chelsea on Sunday at 11:30; a win takes them to nine, level with City, and four clear of Liverpool with a game in hand.",
    "Chelsea": "Fourth on six from two, perfect under Xabi Alonso, and at the Emirates on Sunday morning; even a draw keeps them above Liverpool.",
    "Brentford": "Fifth on five, above Liverpool on goal difference after a 1-1 at Sunderland, Le Bris's side rescuing a point late. Host Liverpool on 17 October.",
    "Newcastle": "Seventh on five after a 2-2 with Bournemouth, level with Liverpool and a point worse on goal difference.",
    "Ipswich": "Fourteenth on three after the 0-2 to Liverpool, overtaken by Palace on goals scored. Seven conceded in two games.",
    "Crystal Palace": "Thirteenth on three after a first win, 3-2 at Fulham, Sage saying the confidence from it can carry. Out of the drop zone.",
    "Bournemouth": "Fifteenth on two after the 2-2 at Newcastle. Liverpool's opponents on 20 September.",
    "Nott'm Forest": "Sixteenth on two after a 0-0 with Spurs in which Glasner fumed at VAR over a disallowed goal.",
    "Aston Villa": "Seventeenth on one, goalless after three games, Emery insisting the goals will come after the 0-0 at Hull.",
    "Tottenham": "Eighteenth on one, a first point at Forest, still in the relegation stripe on goals scored. At Anfield on 15 September in the Carabao Cup.",
    "Fulham": "Nineteenth and pointless after three defeats, the latest 3-2 at home to Palace. At Anfield a week on Saturday, the 12th.",
    "Coventry": "Bottom, pointless and minus five after a 1-0 at the Etihad, the third defeat of a return to the top flight.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Architect Leaves The Building He Locked.",
    byline: "Liverpool FC / Sports Mole / The Athletic",
    dateline: "Anfield · 5 September",
    category: "Football News",
    body:
      "Four days after the window shut on the squad he built, Richard Hughes walked out of the office above it. Liverpool confirmed on Saturday afternoon that the sporting director has stepped down, 'having informed the club's ownership of his desire to seek a fresh challenge', which everyone from ESPN to Sports Mole reads as Al-Hilal. Mike Gordon's tribute was measured: Hughes led recruitment 'at the start of a period of change', the results 'testament to this contribution', and the club respects 'Richard's life choices'. The ledger he leaves is the strangest in the club's modern history: Isak, Wirtz and Barcola bought at record prices, a title won in his first season, a title surrendered in his second, and a right-back never signed. The squad is closed until January. The man who closed it has gone."
  },
  {
    n: "02",
    headline: "San Mames, Three Minutes, And A Side That Arrives Wounded.",
    byline: "AFP / Get Spanish Football News",
    dateline: "Bilbao · 5 September",
    category: "Football News",
    body:
      "Atletico Madrid were the better side for forty-five minutes on Saturday and lost 3-0, which is the Atletico Liverpool should prepare for. Lee Kang-in hit the post in the third minute, Barrios the woodwork before the break, and then, in the 46th and 48th, Nico Williams headed in his brother's deflected shot and Robert Navarro steered in Inaki's pass; Sancet added a third at the death. 'We lacked in the second half everything that we had in the first,' Simeone said. Julian Alvarez came off the bench after illness, was whistled by his own travelling support, produced one shot, and was not seen warming down with the group; asked why, his manager replied, 'Are you really asking this question? I have nothing to say.' Jonathan David, the late loan from Juventus, woke with a cervical contracture and did not travel. A first defeat of their season, and four days to Anfield."
  },
  {
    n: "03",
    headline: "Sixth Without Kicking A Ball, And A Sunday That Decides The Top.",
    byline: "ESPN / FotMob",
    dateline: "Anfield · 5 September",
    category: "Race for Europe",
    body:
      "The table did what Saturday morning said it would, only sooner. Brentford's 1-1 at Sunderland put them level with Liverpool on five and ahead on goal difference; City's 1-0 over Coventry took the leaders to nine; Hull's goalless draw with a Villa side yet to score made it seven. Liverpool, idle, are sixth, and the knot beneath the top four, Brentford, Liverpool, Newcastle, Leeds, is separated by goals rather than points. Arsenal and Chelsea, both on six from two, meet at the Emirates on Sunday at half past eleven, and the loser, if there is one, comes back to the pack. Further down, Fulham lost 3-2 at home to a Palace side winning for the first time, and go to Anfield on the 12th nineteenth and pointless. The points are the same as they were on Friday night; the company has changed."
  },
  {
    n: "04",
    headline: "The Winger They Kept, Counted By Opta, Judged By Carragher.",
    byline: "Sky Sports / Sports Mole",
    dateline: "Portman Road · 4 September",
    category: "Tactics",
    body:
      "Cody Gakpo has four goal involvements in Liverpool's first three league games, one goal and three assists, and Opta says that only Mohamed Salah, with six, has managed more through an opening three for the club this century. Sky's hits and misses column put it more bluntly: many went to Portman Road to see Bradley Barcola, and the player at the other end of the summer's selling debate stole the show, twice threading Isak through from the left after a fine outing off the right against Forest. 'Barcola is going to struggle to get a game with this version of Gakpo,' Jamie Carragher wrote at half-time. Sofascore's post-shot model credits the finishing, 1.70 expected goals on target to Ipswich's 0.47, and Gakpo's 0.40 expected assists with the supply. The best piece of business, Sky's Sam Blitz concluded, may be the winger Liverpool did not sell."
  },
  {
    n: "05",
    headline: "Five Absent, None Nearer, And A Vacancy Above Them All.",
    byline: "Liverpool FC / Sports Mole",
    dateline: "AXA Training Centre · 5 September",
    category: "Injuries",
    body:
      "Nothing moved in the treatment room on Saturday and something moved above it. Gomez still trains with the group next week and is still likely to miss Wednesday; Leoni and Chiesa are still pencilled for the international break; Bradley and Ekitike still have no date. What changed is who answers for the department. Sports Mole's account of Hughes's exit names the summer's two unfilled positions, a right-back and a central midfielder, as the thing the record-breaking window did not do, and with the squad closed the first job of whoever follows him, Julian Ward, David Woodfine or Pedro Marques from inside, Jason Ayto or Paul Mitchell from outside, is a January plan for a back line that currently rests on Araujo at right-back and Endo as the emergency centre-half. Alisson, meanwhile, keeps counting: 138 clean sheets, fourth on the club's list, past Elisha Scott."
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-05T22:30:00Z",
  summary:
    "Saturday evening, and the man who built the squad Andoni Iraola cannot change until January has left it: Liverpool confirmed this afternoon that Richard Hughes has stepped down as sporting director, Al-Hilal his expected destination, with Mike Gordon leading the search for a successor and The Athletic reporting the first names are internal, Julian Ward, David Woodfine and Pedro Marques. The statement landed a day after the first win of his last window's making, and a few hours before the side he was supposed to be scouting for Wednesday was undone: Atletico Madrid lost 3-0 at Athletic Bilbao, two goals in three minutes after half-time, Julian Alvarez whistled by his own fans on his return from illness and Simeone refusing to discuss him. The table then turned over without Liverpool kicking a ball, Brentford's draw at Sunderland and City's 1-0 over Coventry dropping them to sixth on five. Opta counted Cody Gakpo's four goal involvements as the most in a Liverpool opening three this century behind only Salah, and Alisson's 138th clean sheet moved him past Elisha Scott into fourth on the club's all-time list. Atletico, chastened and with a striker they will not talk about, are at Anfield on Wednesday.",
  keyTopics: [
    {
      title: "Richard Hughes Steps Down As Sporting Director, Al-Hilal Expected, Search Led By Mike Gordon (Liverpool FC / ESPN, today)",
      detail:
        "Confirmed by the club on Saturday afternoon: Hughes, 47, in the post since March 2024, has stepped down 'having informed the club's ownership of his desire to seek a fresh challenge', which ESPN's sources say is the same role at Al-Hilal. Mike Gordon thanked him for leading 'our football operations department and overseeing recruitment' through 'a period of change', adding that the club respects 'Richard's life choices'. Hughes called serving the club 'a source of great pride' and wished it 'nothing but success for this season and beyond'. The process to replace him is under way. He leaves four days after the window he ran shut, with Isak, Wirtz and Barcola bought and a right-back not.",
      category: "general",
    },
    {
      title: "Ward, Woodfine And Marques The Internal Shortlist; Ayto And Mitchell Available Outside (The Athletic via Sports Mole, today)",
      detail:
        "Reported Saturday lunchtime: The Athletic says Liverpool are looking at internal candidates before external ones. Julian Ward, who held the job for a season in 2022-23 and is now FSG's technical director, is under consideration; David Woodfine, Hughes's assistant sporting director and former head of scouting, and Pedro Marques, FSG's director of football development, are also shortlisted. Sports Mole adds that Jason Ayto, formerly of Arsenal and Brighton, and Paul Mitchell, formerly of Newcastle, are free should the club look further afield. In the meantime Ward, Marques and Woodfine run the department between them. Iraola was Hughes's appointment; he now has to convince whoever comes next.",
      category: "general",
    },
    {
      title: "Atletico Beaten 3-0 At Athletic Bilbao: A First Defeat, Two Goals In Three Minutes, Four Days Before Anfield (AFP, today)",
      detail:
        "Played Saturday afternoon: Diego Simeone's side were the better team in the first half at San Mames, Lee Kang-in hitting the post in the third minute and Barrios the woodwork later, then conceded to Nico Williams in the 46th, heading in Inaki's deflected shot, and Robert Navarro in the 48th; Oihan Sancet made it three in the 90th. 'Two minutes of inattention and poor decision-making,' Simeone said, and 'we lacked in the second half everything that we had in the first.' Athletic, under Edin Terzic, have back-to-back wins after losing their first two. Atletico stay on seven points from four and arrive at Anfield on Wednesday from their first loss of the season.",
      category: "matches",
    },
    {
      title: "'Are You Really Asking This Question?': Simeone Shuts Down Alvarez Talk As Atletico Fans Whistle Him Again (Get Spanish Football News, today)",
      detail:
        "Saturday evening in Bilbao: Julian Alvarez returned from illness as a second-half substitute, was booed and whistled by Atletico's own travelling support as he came on, managed one shot, comfortably saved by Unai Simon, and was not seen warming down with his teammates afterwards. Asked about it, Simeone replied: 'Are you really asking this question? I have nothing to say.' The World Cup winner tried to join Barcelona in the summer after the club rejected a 150m-euro Real Madrid bid, and stayed only because the window closed. Separately, Jonathan David, the late loan signing from Juventus, missed the match after waking with what COPE called a severe cervical contracture; he is a doubt for Wednesday.",
      category: "matches",
    },
    {
      title: "Sixth Without Playing: Brentford's Draw And City's Win Reshuffle The Table Ahead Of Arsenal v Chelsea (ESPN, today)",
      detail:
        "Updated Saturday evening: ESPN's table has Liverpool sixth on five points, overtaken on goal difference by Brentford, who drew 1-1 at Sunderland, and now level with Newcastle and Leeds as well. Manchester City lead on nine after beating Coventry 1-0; Hull are second on seven after a 0-0 with a Villa side still without a goal; Arsenal and Chelsea, both on six from two, meet at the Emirates on Sunday at 11:30. Crystal Palace won for the first time, 3-2 at Fulham, which leaves Liverpool's next league opponents nineteenth and pointless. The five points are unchanged; the company around them is not.",
      category: "matches",
    },
    {
      title: "Only Salah Has More: Opta Counts Gakpo's Four Goal Involvements, And Carragher Says Barcola 'Is Going To Struggle To Get A Game' (Sports Mole / Sky Sports, today)",
      detail:
        "Published Saturday morning: per Opta, no Liverpool player this century other than Mohamed Salah, with six, has recorded more goal involvements through the club's opening three league matches than Gakpo's four, one goal and three assists. Sky's hits-and-misses column made him the weekend's story, Sam Blitz writing that the player at the other end of the summer's selling debate stole the show from Barcola's debut and that the best piece of business may be 'the winger they actually kept'. Jamie Carragher, at half-time on Friday: 'Barcola is going to struggle to get a game with this version of Gakpo.' Sofascore credited him with three key passes and 0.40 expected assists.",
      category: "general",
    },
    {
      title: "Alisson Passes Elisha Scott: 138 Clean Sheets, Fourth Outright On Liverpool's All-Time List (Liverpool FC, today)",
      detail:
        "Noted by the club on Saturday afternoon: Friday's shutout at Portman Road was Alisson's 138th for Liverpool, on his 336th appearance, taking him clear of Elisha Scott's 137 amassed between 1913 and 1934. One hundred and four have come in the Premier League, 28 in Europe, four in the FA Cup, one in the Carabao Cup and one at the Club World Cup. Only Pepe Reina (177), Bruce Grobbelaar (267) and Ray Clemence (323) have more. Five saves were needed for this one, FotMob's 8.2, and Atletico on Wednesday is the next test of a defence that had not kept a league clean sheet since April.",
      category: "general",
    },
    {
      title: "'It's Still Early': Isak On The Plan That Worked, The Gakpo Connection And Setting No Targets (Liverpool FC / Sky Sports, today)",
      detail:
        "Published Saturday: Isak told Sky that the fast start was the plan. 'We were talking about starting the game good, which we haven't done recently. That was perfect for us to get two quick goals.' On the supply: 'When we win the ball, to get forward as quickly as possible, because that's when things are quite open. Cody found me twice pretty good.' On targets after three in three: 'It's still early. I think we still have a lot to learn and it's game by game at this point.' He was voted Carlsberg Player of the Match for the first time as a Liverpool player, joining Gakpo and Munoz as this season's winners.",
      category: "matches",
    },
    {
      title: "The Treatment Room Is Unchanged Into A Champions League Week, And Now Answers To Nobody In Particular (Liverpool FC / Sports Mole, today)",
      detail:
        "As of Saturday evening nothing has moved on Iraola's Thursday timetable: Gomez rejoins team training next week and is likely to miss Atletico, with Fulham on the 12th the first realistic matchday; Leoni and Chiesa are planned for group training during the September break; Bradley and Ekitike have no timeframe. What has changed is the office above the department. Sports Mole's account of Hughes's departure names the unsigned right-back and central midfielder as the summer's gap, and with the squad shut until January the first job of his successor is a plan for a defence that currently rests on Araujo out of position and Endo as the emergency centre-half.",
      category: "injuries",
    },
    {
      title: "Right-Back, Day Two: Lookman's Pace Versus Araujo's Strength, And A Free Agent With Six Champions League Medals Being Talked Up (live4liverpool / FourFourTwo, today)",
      detail:
        "Rumbling on through Saturday: the Araujo-or-Frimpong question for Wednesday now has a third voice, Joleon Lescott hinting on air that 'there's talk of Liverpool' among clubs interested in Dani Carvajal, the six-time Champions League winner who is a free agent and could be registered outside the window. It is talk, not a report, and it would not solve Wednesday. Atletico's defeat in Bilbao did not clarify whether Lookman starts at Anfield, so the selection argument stands as it did this morning: a converted centre-back who kept a clean sheet against a physical winger, or the specialist whose recovery pace answers an inside-out one. Iraola's Tuesday press conference is where it resolves.",
      category: "tactics",
    },
  ],
  sources: [
    "Liverpool FC",
    "ESPN",
    "Sports Mole",
    "The Athletic",
    "AFP",
    "Get Spanish Football News",
    "COPE",
    "Sky Sports",
    "Sofascore",
    "live4liverpool",
    "FourFourTwo",
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
  generatedAt: "2026-09-05T22:30:00Z",
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
    "The dossier changed shape on Saturday afternoon: Atletico Madrid lost 3-0 at Athletic Bilbao, a first defeat of the season, and arrive at Anfield on Wednesday from it. They were the better side for forty-five minutes, Lee Kang-in hitting the post in the third minute and Pablo Barrios the woodwork before the break, then conceded twice in three minutes after the restart, Nico Williams heading in Inaki's deflected shot in the 46th and Robert Navarro steering in the 48th, before Oihan Sancet finished a loose ball in the 90th; Simeone said his side 'lacked in the second half everything that we had in the first'. Julian Alvarez, chased by Barcelona and Arsenal with a 150m-euro Real Madrid bid rejected in June, returned from illness as a substitute, was whistled by Atletico's own travelling support, produced one saved shot and was not seen warming down with the group, and drew from his manager only 'Are you really asking this question? I have nothing to say.' Jonathan David, the late loan from Juventus, missed the trip with a cervical contracture. They came into the weekend fourth in La Liga on seven points from three, after 2-0 over Malaga, 2-2 with Villarreal and 3-1 at Sevilla, and stay on seven from four. Liverpool won last season's opener between the sides 3-2 at Anfield.",
  shape:
    "Read it as a 4-4-2 on the sheet that splits into a 4-2-4 out of possession and pinches narrow in it: Barrios and Hjulmand the pivot, Giuliano Simeone and Lookman wide, Lee Kang-in and Baena a front two in name only, Baena dropping between the lines and at times into a false nine. Grimaldo, from Leverkusen, gives the left the overlap and the set-piece delivery Atletico have lacked; Llorente does the same on the right by running rather than crossing. The Bilbao half that mattered was the one they lost: a side built to score first and hold could not respond once it was behind, and Simeone's own word for the second half was 'lacked'.",
  keyPlayers: [
    {
      name: "Álex Baena",
      role: "Second striker / No. 10",
      threat: "Three goals in the first three league games, two of them in the 3-1 at Sevilla, per Football Espana and MARCA; at Bilbao his best effort was saved by Unai Simon. Operates between the lines and drops into a false nine, the pattern that pulls centre-backs out and that Liverpool have conceded to on the break all season.",
      source: "Football Espana / MARCA / AFP",
    },
    {
      name: "Ademola Lookman",
      role: "Left winger",
      threat: "Scored Atletico's second at Sevilla and starts wide left of the four, running at a right-back. Liverpool's right side on Friday was Araujo, a centre-back, with Frimpong benched; which of them faces Lookman is Wednesday's first selection question.",
      source: "Football Espana",
    },
    {
      name: "Lee Kang-in",
      role: "Forward / wide creator",
      threat: "Scored on his debut against Malaga and hit the post in the third minute at Bilbao, the clearest chance of a first half Atletico controlled, per AFP. The summer signing is the runner beside Baena when the shape becomes a 4-2-4.",
      source: "AFP / Football Espana",
    },
    {
      name: "Julián Álvarez",
      role: "Centre-forward (contested)",
      threat: "Seven goals in ten Champions League games last season. Whistled by his own supporters again at Bilbao on Saturday after coming on from illness, one shot saved, absent from the warm-down; Simeone will not discuss him. Whether he starts at Anfield, or is wanted to, is unknown.",
      source: "Get Spanish Football News / AFP / ESPN",
    },
  ],
  predictedXI: [
    "Oblak", "Llorente", "Pubill", "Hancko", "Grimaldo",
    "G. Simeone", "Barrios", "Hjulmand", "Lookman", "Lee", "Baena",
  ],
  absentees: [
    { name: "Jonathan David", issue: "Cervical contracture, missed Bilbao (per COPE)", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-05", opponent: "Athletic Bilbao", home: false, score: "0-3", result: "L", note: "Better side before the break, Lee and Barrios hitting the woodwork, then Nico Williams (46) and Navarro (48) in three minutes and Sancet (90). Alvarez on from the bench after illness, whistled by his own fans. A first defeat of the season." },
    { date: "2026-08-29", opponent: "Sevilla", home: false, score: "3-1", result: "W", note: "Baena twice and Lookman in a first half that settled it; Sierra pulled one back. Alvarez left out of the XI." },
    { date: "2026-08-23", opponent: "Villarreal", home: true, score: "2-2", result: "D", note: "Pubill and Giuliano Simeone scored; Moreno and Mikautadze penalties levelled it. Le Normand sent off, Alvarez jeered by the home crowd." },
    { date: "2026-08-19", opponent: "Málaga", home: true, score: "2-0", result: "W", note: "Lee Kang-in on debut and Baena, both in the second half, in the season opener." },
  ],
  liverpoolAngle:
    "A wounded Simeone side is the version to fear, and Saturday made this one. Atletico controlled the first half at San Mames, hit the post twice, and were undone by two goals in three minutes and a second half they could not lift; the lesson for Anfield is that they will start fast and that Liverpool's own new habit, scoring first and then managing, is exactly what they are built to deny. The numbers underneath Friday say the managing was the harder half: 0.66 expected goals for to 0.73 against on FotMob's pre-shot model, even as Sofascore's post-shot figure, 1.70 to 0.47, credits the finishing. Baena's drop into the false nine draws Van Dijk and Jacquet out, and the runners behind him hit the transition seam that has cost Liverpool nine fast-break goals since last August, more than any Premier League side, per Opta. The right flank is still the selection question, Araujo's strength or Frimpong's pace against Lookman, and Bilbao did not answer whether Lookman starts. The counterweights are real: a striker with three in three, a keeper who has just passed Elisha Scott, and an opponent whose own striker is whistled by his own fans. The predicted XI remains Atletico's Sevilla side; the Bilbao XI has not been sourced in full and no named team-news preview yet exists. Jonathan David is a doubt with a cervical contracture.",
  modelLine: null,
  sources: ["AFP", "Get Spanish Football News", "COPE", "Football Espana", "MARCA", "ESPN", "Liverpool FC", "TNT Sports", "FotMob", "Sofascore", "Opta Analyst"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-05T22:30:00Z",
  competition: "PL",
  played: 3,
  headline:
    "A second model arrived on Saturday and it tells a different story from the first, which is the story. FotMob's pre-shot expected goals had Ipswich ahead at Portman Road, 0.73 to 0.66 on 14 shots to 10; Sofascore's post-shot model, which scores where the ball went rather than where it was struck from, has Liverpool 1.70 to 0.47. The gap between the two numbers is finishing, and it has a name: Isak's two goals came from 0.21 of expected goals and 0.33 on target. Three games in the season reads 5.00 expected goals for and 4.46 against on a mixed-source total, six scored and four conceded, with one game out-creating the opponent and drawing, one trailing on xG and drawing, and one trailing on xG and winning. The manager wanted the fast start above everything and got it. What he has not had is a game his side dominated for ninety minutes, and Atletico, who dominated forty-five in Bilbao and lost, are the wrong opponent to expect one against.",
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
      verdict: "Won on two Isak shots in the sixth and ninth minutes, both from Gakpo through-balls, then held. Out-created across the ninety on FotMob's pre-shot figures, 0.73 to 0.66, 14 shots to 10, though Liverpool had seven on target to five; Sofascore's post-shot model reverses it, 1.70 expected goals on target to 0.47, with 59 per cent possession, Isak at 0.21 xG and 0.33 xGOT for his two goals and Gakpo at 0.40 expected assists. A first lead and a first clean sheet of the season. Opta Analyst's match figures are still not published and will replace FotMob's when they are; first-half splits are not available.",
      source: "FotMob via SI / Sofascore",
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
    "Cody Gakpo's four goal involvements, one goal and three assists, are the most by a Liverpool player through the club's opening three league games this century bar Mohamed Salah's six, per Opta via Sports Mole.",
    "Alisson's shutout at Portman Road was his 138th for Liverpool in 336 appearances, per the club, moving him past Elisha Scott (137) into fourth all-time behind Reina (177), Grobbelaar (267) and Clemence (323); 104 of them have come in the Premier League.",
    "Sofascore's post-shot model had Liverpool 1.70 expected goals on target to Ipswich's 0.47, against FotMob's pre-shot 0.66 to 0.73: two models, two different winners of the same match, and the difference is where Isak put the ball.",
    "Isak's three league goals in three games have come from a combined two shots at Portman Road and a tap-in against Forest; Gakpo has the assist for all three, and per Sofascore his three key passes on Friday were worth 0.40 expected assists.",
  ],
  sources: ["FotMob", "Sofascore", "SI", "Sporting News", "Opta Analyst", "Liverpool FC", "ESPN", "Sports Mole"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-05T22:30:00Z",
  headline:
    "The squad is closed, and as of Saturday afternoon so is the office that closed it: Richard Hughes has stepped down as sporting director, so the twenty-five names on this board are now the inheritance of a successor who has not been chosen, with Julian Ward, David Woodfine and Pedro Marques the internal names and January the first window anyone can act in. Nothing on the pitch moved in the meantime. The five absentees are the same five, none nearer than Gomez, who trains with the group next week and is still likely to miss Atletico on Wednesday; right-back still has two fit bodies and one argument; Isak, Barcola and the Ipswich XI all came through Friday fit. The one number that changed is Alisson's, 138 clean sheets and fourth on the club's list, which is depth of a kind the board does not track.",
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
    { position: "Right-back", level: "high", detail: "Two available bodies since Friday, Araujo (started, 7.7) and Frimpong (fit, unused), and still no specialist cover behind them: Bradley has no date, Gomez trains next week, Szoboszlai is the in-game option, Mabaya the registered academy name. Saturday added a rumour, not a player: Joleon Lescott's on-air hint that 'there's talk of Liverpool' for free agent Dani Carvajal, who could be registered outside the window; it is talk, and the office that would act on it has just been vacated. Lookman on Wednesday is the next test." },
    { position: "Centre-back", level: "high", detail: "Van Dijk and Jacquet, with Araujo now needed at right-back as well, which thins the cover here even as it thickens it there. Gomez trains next week; Leoni not with the group until the break. One injury and Endo plays centre-half." },
    { position: "Centre-forward", level: "high", detail: "Isak alone, three goals in three, with Ekitike given no timeframe. Gakpo is the false-nine fallback and finished Friday's game there." },
    { position: "Central midfield", level: "medium", detail: "Mac Allister, Gravenberch, Szoboszlai and Endo, with Nyoni pushing and given twenty minutes on Friday. Endo is not in the Champions League squad, so the European depth is one body shorter than the league's." },
  ],
  sources: ["Liverpool FC", "SI", "FotMob", "Sports Mole", "Liverpool Offside", "Sporting News", "The Athletic", "live4liverpool"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-05T22:30:00Z",
  played: 3,
  points: 5,
  pointsPerGame: 1.67,
  projectedPoints: 63,
  projectedFinish: "Europa League places on current pace",
  headline:
    "Sixth by Saturday evening on the same five points that were fifth on Saturday morning, and the arithmetic has not moved a decimal: 1.67 a game, a projected 63, a Europa League pace on historical par. Three games is a sample, not a season, and the same sums put Liverpool on the survival line on Friday morning before a single result moved them twenty-five projected points. The company matters more than the placing: Brentford, Newcastle and Leeds share the five, and Arsenal or Chelsea will pull further clear on Sunday. The next two league games are Fulham at home and Bournemouth away, nineteenth and fifteenth after Saturday, either side of the Atletico opener and a cup tie; win both and the pace is a top-five one before the September break.",
  thresholds: [
    { label: "Champions League (top 5)", points: 68, gap: 5, note: "Historical par for fifth place in recent seasons. Requires roughly 1.80 points per game from here." },
    { label: "Europa League", points: 60, gap: 0, note: "Roughly sixth place par, and where the current pace lands. Requires about 1.57 points per game from here." },
    { label: "Conference League", points: 55, gap: 0, note: "Seventh place par, often decided by cup outcomes as much as league finish." },
    { label: "Safety", points: 38, gap: 0, note: "The conventional survival line, and where the pace sat before Friday's win. Twenty-five points of projection moved on one result, which is the size of the sample talking." },
  ],
  thresholdNote:
    "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  runIn: [
    { date: "2026-09-12", opponent: "Fulham", home: true, competition: "PL", oppPosition: 19, difficulty: "easy" },
    { date: "2026-09-20", opponent: "Bournemouth", home: false, competition: "PL", oppPosition: 15, difficulty: "easy" },
    { date: "2026-10-11", opponent: "Manchester City", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 5, difficulty: "hard" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 9, difficulty: "medium" },
    { date: "2026-11-01", opponent: "Arsenal", home: true, competition: "PL", oppPosition: 3, difficulty: "hard" },
  ],
  runInVerdict:
    "Saturday made the next two look kinder and the ones after them harder. Fulham, at Anfield on the 12th, lost 3-2 at home to Palace and are nineteenth and pointless; Bournemouth, away on the 20th, drew at Newcastle and sit fifteenth on two. Six points from those is eleven from fifteen and a genuine top-five pace into Manchester City on 11 October, who are now the only perfect side left; two from them puts the projection back in the fifties. Brentford, away on the 17th, went above Liverpool on Saturday, so that trip has become a six-pointer of sorts. Gomez is expected in team training next week and possibly on the pitch before the break; whoever replaces Hughes will be watching the same run.",
  sources: ["ESPN", "FotMob", "Liverpool FC", "Sky Sports", "This Is Anfield"],
};
