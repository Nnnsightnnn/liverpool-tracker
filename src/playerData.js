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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Sun Sep 6, evening — the partner he is teaching is being made to suffer on purpose. Iraola said on Saturday that 'for any centre-back to play alongside Virgil is a lesson and a masterclass', and that he let Jacquet ride out a second-half doubt at Ipswich rather than replace him; Van Dijk's own night began the second goal, his pass to Gakpo in the ninth minute, then eighty-one minutes protecting a lead his side had never held this season, FotMob's 7.7, SI writing that he looked more comfortable than in weeks. A first clean sheet since April, with Araujo at right-back rather than in reserve. His deal still runs only to 2027, the AC Milan interest was knocked back without a bid, and at 35 he remains the fixed point, with three home games in seven days to organise", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "injured", outSince: "2026-07-25", injuryNote: "Mon Sep 7 — two days from the opener and the nearest of the five to a return, though not in time for this one. Gomez rejoins team training this week per Iraola's timetable and remains likely to miss Wednesday's Champions League opener against Atletico, with Fulham on the 12th the first realistic matchday and the manager hoping to have him before the September break; DaveOCKOP's Sunday count of six absentees lists him as 'a significant doubt' for Wednesday rather than out. The Carvajal talk that surfaced on Sunday, a pundit's aside on TNT, is about the position he would deepen: with Araujo having started at right-back on Friday, his return gives a fourth senior centre-back and a third right-back in one body. The muscle recovery from the 26 July Sunderland friendly has gone to plan.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Sun Sep 6, evening — the week in a sentence, from the man who supplied it. 'Now games come every three days and it's onto the next,' Kerkez told the club website on Sunday, adding that the Portman Road press can be held 'for the first 30 to 35 minutes' before the game turns on staying compact, that the defending of crosses and set pieces pleased the back four, and that his understanding with Gakpo is 'a lot better' this year. On Friday he won possession around halfway in the sixth minute, fed Gakpo, and Isak scored moments later; SI marked him 6.7, the lowest of a back four that kept a first clean sheet. Three starts in thirteen days, first choice by a distance with Robertson gone to Tottenham and Tsimikas unused. Grimaldo, overlapping or at wing-back depending on Simeone's shape, is Wednesday's assignment", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Mon Sep 7 — no date, and the shirt he has not worn since January now settled on another man's back. Bradley continues rehabilitation on the knee injured against Arsenal, 'probably Conor will go later' being Iraola's Thursday placing of him behind Gomez, Leoni and Chiesa, with DaveOCKOP's Sunday round-up putting him beyond the September/October international break; the Dani Carvajal line on TNT Sports, unadvanced by any journalist, exists because of gaps like his. On Friday the shirt went to Ronald Araujo for a first start, nine duels won from ten, Frimpong unused, and the pair kept a clean sheet at Ipswich. Still registered in the Champions League squad because only three changes are allowed after the league phase", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Sun Sep 6 — the shirt has changed hands, and the reporting reads it as settled rather than rotated. Frimpong sat out all ninety at Portman Road as Araujo took a first start at right-back; across the two opening draws he had won six of sixteen duels or tackles, and FourFourTwo and Liverpool.com now frame Friday as Iraola choosing Araujo for the Champions League nights, a message to the summer signing rather than a demotion. Nothing is reported as wrong physically; this is selection. His recovery pace is still the specific answer to an inside-out winger, which is why Atletico's Lookman, quick and cutting in from the left, is the case for restoring him on Wednesday.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Mon Sep 7 — a fortnight from a training date, and three home games in seven days he will watch from the treatment room. Leoni, nearly a year on from the ACL tear on his September 2025 debut, is planned to rejoin group training during the international window later this month, per Iraola's Thursday round-up and DaveOCKOP's Sunday count, the second of the returns after Gomez, with no matchday pencilled. Jacquet, the centre-back playing in his place, completed a first full ninety on Friday after Iraola chose to let him 'suffer' through a second-half wobble rather than replace him; the cover behind Van Dijk and Jacquet while Araujo plays right-back is Endo in the league and nobody senior in Europe. Named in the Champions League squad regardless, alongside Bradley and Ekitike", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sun Sep 6, evening — the manager had a doubt about him on Friday and has said so. 'There was a moment in the second half when I had a doubt, but I think he has to suffer and go through those periods,' Iraola told Liverpool.com of Jacquet's first full ninety of the season, after 69 and 76 minutes in the August draws: booked on 52 for a high foot on Emersonn, fortunate not to see a second yellow soon after, FotMob's 7.4, SI 'not thoroughly convincing'. He finished the game and the sheet stayed clean, which was the point. Still building fitness after the shoulder surgery that ended his Rennes season. With Araujo needed at right-back the cover behind him is Endo in the league and no one senior in Europe until Gomez, aimed at Fulham, is back", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
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
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Sun Sep 6, evening — the league-only emergency centre-half, on a week when Europe comes first. Endo was an unused substitute at Ipswich with Frimpong, Tsimikas, Ngumoha and Mamardashvili, and was left off the 25-man Champions League squad on Thursday with McConnell preferred, so Wednesday's opener against Atletico is not available to him whatever happens; DaveOCKOP's Sunday count lists him with Chiesa as the two ineligible names. In the Premier League he remains the fallback behind Van Dijk and Jacquet while Araujo plays right-back, and if Simeone's back three arrives it changes nothing for him. Found no mover in the summer window and stays as depth, with the Carabao Cup tie against Tottenham on the 15th his likeliest start", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Mon Sep 7 — still last in the order of returns, on the eve of the week that asks most of the striker in front of him. Ekitike continues rehabilitation from the Achilles ruptured against PSG in April with no timeframe from Iraola, December the earliest anyone has mentioned, named after Gomez, Leoni, Chiesa and Bradley in the manager's order of returns and beyond the break per DaveOCKOP's Sunday count. Isak has three league goals in three, all supplied by Gakpo, who has himself been the false-nine fallback when Isak comes off. Atletico on Wednesday, Fulham on Saturday and Tottenham in the cup the Tuesday after is the stretch the rotation was built for and cannot yet include him. Registered in the Champions League squad regardless, Liverpool Offside noting only three changes are permitted after the league phase", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Mon Sep 7 — off the European list, so ineligible for Wednesday whatever his fitness, and pointed at the international break. Chiesa's return to group training is set for 'around those dates' of the September international break, per Iraola's Thursday round-up, which rules him out of Atletico on Wednesday, Fulham, the Tottenham cup tie and Bournemouth; DaveOCKOP's Sunday count notes he and Endo were left off the 25-man Champions League squad, so the European bench is two names shorter than the league's. The muscle problem dates from the Como friendly. Barcola has since debuted on the right and Munoz started there, and Kerkez said on Sunday that the left side's understanding with Gakpo is 'a lot better' this year, so the flank queue he would join has lengthened at both ends. His father closed off the Serie A talk on deadline night, so he stays, and waits", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
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
    id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Sun Sep 6, evening — his shirt, and a free agent's name was floated for it anyway. Araujo's first Liverpool start came at right-back at Portman Road, FotMob's 7.7, nine duels won from ten and the most aerials on the pitch, and the right side of Araujo and Jacquet kept a first clean sheet of the season; FourFourTwo reads it as Iraola settling his Champions League right-back. On Sunday Dani Carvajal's name surfaced for the same position, a pundit's aside on TNT rather than a negotiation, which says more about the depth behind him than about his place in it. Arrived from Barcelona on loan with a £47m option that Hughes, now gone, negotiated. If Simeone goes to a back three, Lookman's threat recedes and so does the one argument for Frimpong. He wears 33.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg",
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
  focus: "Two days from Anfield's first European night: Simeone owns Atletico's 3-0 at Bilbao and leaves Alvarez a question, while Iraola prepares a first Champions League night as Liverpool manager",
  credit: "Plate · Daily edition",
  generatedAt: "2026-09-07T09:00:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Morning pass (Mon 7 September): quiet cycle, no match since Friday, no new injury, table static in a
  // Champions League week. Lead rotated onto the Atletico build-up: Simeone taking the blame for the 3-0
  // at Bilbao ('we lost it in five minutes') and leaving Alvarez unanswered, with Iraola's first European
  // night as Liverpool manager framing it. None of it is a photographable moment under STEP 7.5, so no new
  // Track 2 request was queued and the Hughes plate carries over; generatedAt re-stamped (COVER-00001).
  // Evening pass (Sun 6 September): quiet cycle, no match since Friday. Lead is the Atletico
  // week (Simeone weighing a back three, per El Desmarque) with the Carvajal free-agent line
  // and Sunday's table beneath it; none of it is a photographable moment, so the Hughes plate
  // carries over and no new Track 2 request was queued. generatedAt re-stamped (COVER-00001).
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
// Last refresh: 2026-09-07 (Monday morning) — re-fetched from ESPN's endpoint and byte-identical to
// Sunday evening's table: no Premier League game has been played since (this is a Champions League week),
// so the round-3 table stands. Manchester City and Arsenal both perfect on nine; Chelsea fourth on six
// after Arsenal's 2-1 win at the Emirates; Brentford, Liverpool, Newcastle, Everton and Leeds all on five,
// Liverpool sixth on plus two. Fulham (Anfield, the 12th) still pointless with Coventry and Tottenham in
// the relegation stripe; Bournemouth (away, the 20th) fifteenth on two. Regenerated from ESPN on Monday.
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
  generatedAt: "2026-09-07T09:00:00Z",
  overview:
    "The weekend's table carries into a Champions League week untouched, and it is the middle that reads as the story. Manchester City and Arsenal are both perfect on nine, the champions and the side that came from behind to beat Chelsea 2-1, and already four clear of a chasing pack that has knotted: Brentford, Liverpool, Newcastle, Everton and Leeds all on five, split by goal difference and, for Newcastle, by goals scored alone, Liverpool sixth on plus two. Chelsea sit fourth on six after a first defeat under Xabi Alonso, still a point above the Reds, and Hull, third on seven, remain the surprise of the opening month. At the foot, Fulham, at Anfield on the 12th, are still pointless alongside Coventry and Tottenham in the relegation stripe, and Bournemouth, the trip on the 20th, sit fifteenth on two. Every side has played three; the European line runs straight through the five-point knot and will not move again until the league resumes.",
  teams: {
    "Liverpool": "Sixth on five, unbeaten, one of five sides on the same total and separated from the rest by goal difference. Atletico at Anfield on Wednesday in the Champions League, then Fulham, nineteenth and pointless, on the 12th.",
    "Manchester City": "Top on nine and goal difference, level with Arsenal, the two perfect records left after three rounds. At Anfield on 11 October.",
    "Arsenal": "Second on nine after a 2-1 over Chelsea at the Emirates, Havertz and Odegaard, three from three and four clear of Liverpool. At Anfield on 1 November.",
    "Hull": "Third on seven, unbeaten on their return to the top flight and still the surprise of the early table, above Chelsea after Sunday.",
    "Chelsea": "Fourth on six after a first defeat under Xabi Alonso, 2-1 at Arsenal having led inside two minutes. Still a point above Liverpool.",
    "Brentford": "Fifth on five, above Liverpool by a single goal of difference, plus three to plus two. Host Liverpool on 17 October.",
    "Newcastle": "Seventh on five, level with Liverpool on points and goal difference, behind on goals scored: the tightest pairing in the table.",
    "Everton": "Eighth on five after a 2-2 with Manchester United, Maitland-Niles scoring a 96th-minute equaliser on his debut. Level with Liverpool, one goal worse off.",
    "Manchester United": "Eleventh on four after letting a 2-1 lead go at the Hill Dickinson Stadium in stoppage time, Mbeumo and Sesko the scorers, Sesko's late second from the bench.",
    "Ipswich": "Fourteenth on three after Friday's 0-2 to Liverpool, seven conceded in two games, level with Palace and behind on goals scored.",
    "Bournemouth": "Fifteenth on two, winless, Liverpool's opponents on Sunday 20 September in the rearranged 2pm fixture.",
    "Tottenham": "Eighteenth on one, in the relegation stripe on goals scored. At Anfield on 15 September in the Carabao Cup, the third of three home games in a week.",
    "Fulham": "Nineteenth and pointless after three defeats. At Anfield on Saturday the 12th, the league game between Atletico and the cup tie.",
    "Coventry": "Bottom, pointless, minus five, three defeats on their return to the division.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Manager Who Blamed Himself.",
    byline: "Liverpool.com / Marca",
    dateline: "Bilbao · 6 September",
    category: "Manager",
    body:
      "Diego Simeone did not reach for a grievance this time. Atletico had been the better side for forty-five minutes at San Mames, hit the woodwork twice, and then conceded to Nico Williams and Robert Navarro inside three minutes of the restart and to Oihan Sancet at the death; a 3-0 that Simeone called deserved and, more unusually, his own. 'We lost the match in five minutes,' he said, and did not soften it. Two days from Anfield the tone matters as much as the scoreline: a side that has spent almost a billion euros across two summers arrives at its Champions League opener having been undone by a lapse it cannot explain, from a manager in his fifteenth year who is, for once, taking the weight rather than passing it to a referee."
  },
  {
    n: "02",
    headline: "A First European Night, And A Shape To Read.",
    byline: "Liverpool FC / The Redmen TV",
    dateline: "Anfield · 7 September",
    category: "Tactics",
    body:
      "Andoni Iraola called it special when the draw was made, an honour for him and his staff to lead Liverpool out in the Champions League, and on Wednesday the words meet the night. His homework is a moving target. El Desmarque still reports Simeone weighing a back three, Romero for Grimaldo, which would trade a wide runner for a spare centre-back and turn the game inside, toward Baena dropping off the front to pull Van Dijk or Jacquet out of the line. Iraola's own side barely needs choosing after Ipswich, the one live question whether Gravenberch returns to a pivot Mac Allister has held. The press that lasted half an hour at Portman Road will be asked to last against better players. Anfield, on a European night, has always helped it."
  },
  {
    n: "03",
    headline: "A Treatment Room The Closed Window Cannot Empty.",
    byline: "DaveOCKOP / This Is Anfield",
    dateline: "AXA Training Centre · 7 September",
    category: "Injuries",
    body:
      "The list did not move over the weekend, which is its own kind of news when nothing can be bought until January. Joe Gomez is back in team training this week, the nearest of the absent, but is expected to watch Atletico from the stand with Fulham the first realistic return. Behind him the queue is unchanged: Ekitike and his ruptured Achilles with no date, Bradley's knee likewise, Leoni and Chiesa pencilled to rejoin the group during the international break. Chiesa and Endo were left off the 25-man European squad, so Wednesday's bench is two names shorter than Saturday's will be. Isak leads a forward line two men deep. The rotation Iraola built for three games in seven days must run through the bodies he has, because there are no others coming."
  },
  {
    n: "04",
    headline: "The Search, And The Owners Who Ordered It.",
    byline: "The Athletic / Bloomberg",
    dateline: "Anfield · 6 September",
    category: "Football News",
    body:
      "Richard Hughes stepped down on Saturday, Al-Hilal his expected destination, and the vacancy sits above a club whose ownership shifted three weeks earlier. In August Fenway Sports Group sold a minority stake of roughly thirty per cent to a consortium fronted by K5 Sports with Jeff Bezos as lead investor, the Mittal trusts and EE Capital alongside; FSG kept control, but the money changed the room. Whoever Mike Gordon appoints, the internal names are Julian Ward, David Woodfine and Pedro Marques, will be the fourth sporting director in four years, and the first to work under the new investors. Hughes leaves almost £700m spent and the two positions the Kop wanted, specialist right-back and a defensive midfielder, still open. Continuity is the stated aim. It has not, lately, been the record."
  },
  {
    n: "05",
    headline: "Two Perfect Records, And A Knot Of Five.",
    byline: "ESPN / NBC Sports",
    dateline: "Merseyside · 6 September",
    category: "Race for Europe",
    body:
      "Nothing beneath Liverpool moved on Monday because nothing beneath them was played; the table is the one the weekend left, and it is instructive. Manchester City and Arsenal are both perfect on nine, the champions and the side that beat Chelsea already four clear of the chasing pack after three rounds. Below them a single knot: Brentford, Liverpool, Newcastle, Everton and Leeds, all on five, separated by goal difference and, in Newcastle's case, by goals scored alone. Liverpool are sixth of the five, unbeaten, a point back of the Champions League places and a goal off fifth. It is early enough that the arithmetic is almost meaningless and late enough that a fan can already see the shape of the fight: not for the title, most likely, but for the European line the middle of this division is going to spend the winter contesting."
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-07T09:00:00Z",
  summary:
    "Monday morning, two days from Anfield's first European night of the season, and the visitors travel under a cloud of their own making: Diego Simeone has taken the blame for Atletico's 3-0 defeat at Athletic Bilbao, a result he called deserved and said was lost 'in five minutes' after the break, and the question of Julian Alvarez, whistled again by his own supporters on his return from illness, is one he has carried unanswered into the week. Andoni Iraola prepares for a first Champions League night as Liverpool manager, a fixture he has called special, with a settled side after Friday's 2-0 at Ipswich and only the opposition's shape in doubt: El Desmarque still reports Simeone weighing a back three, Cristian Romero in, Alex Grimaldo dropped or pushed wide. The Premier League table sat still over an idle weekend for the Reds, who stay sixth and unbeaten, one of five sides on five points and four behind the two perfect records of Manchester City and Arsenal. The injury room has not moved either: Joe Gomez rejoins team training this week but remains a doubt for Wednesday, Fulham on Saturday the more realistic return, while Ekitike, Bradley, Leoni and Chiesa stay out and Chiesa and Endo sit outside the 25-man European squad. Three home games in seven days begin with Atletico, and the side to face them cannot be added to until January.",
  keyTopics: [
    {
      title: "Simeone Takes The Blame For Bilbao And Leaves Alvarez A Question: 'We Lost It In Five Minutes' Before Anfield (Liverpool.com / DaveOCKOP, today)",
      detail:
        "Carried into Monday's build-up: Diego Simeone called Atletico's 3-0 defeat at Athletic Bilbao a deserved one and put it on himself, the game 'lost in five minutes' when Nico Williams and Robert Navarro struck within three of the restart, per Liverpool.com. Two days from the Champions League opener he has still not settled the Julian Alvarez question, the forward whistled again by his own supporters on his return from illness at San Mames; DaveOCKOP's Monday update has Simeone addressing the striker's standing rather than confirming him. Alexander Sorloth's muscle contracture and Arnau Ortiz's suspension are the firmer absences. The visitors arrive at Anfield the more unsettled of the two teams.",
      category: "matches",
    },
    {
      title: "A First European Night As Liverpool Manager: Iraola Calls The Champions League Opener 'Special' (Liverpool FC / Liverpool.com, today)",
      detail:
        "Framed on Monday ahead of Tuesday's pre-match press conference: Andoni Iraola, who described leading Liverpool out in the Champions League as 'special' and 'an honour for me and my staff' when the draw was made, reaches his first European night at Anfield on Wednesday off the back of a first win, Friday's 2-0 at Ipswich. The side that started at Portman Road is fit and, by Iraola's own reckoning, settling into his pressing style; the only open selection question is whether Gravenberch returns to the pivot for a game with a different rhythm. Atletico, beaten in Bilbao, are the first of three home fixtures in seven days.",
      category: "general",
    },
    {
      title: "El Desmarque Holds The Line On A Back Three: Romero In, Grimaldo Wide Or Out, To Meet Anfield's Width (El Desmarque / El Gol Digital, today)",
      detail:
        "Still standing on Monday: El Desmarque's report that Saturday's collapse has put a three-man defence back on Simeone's table for Wednesday, Cristian Romero, a debutant off the bench in Bilbao, alongside Marc Pubill and David Hancko, Marcos Llorente right, Alex Grimaldo pushed to left wing-back or left out, his defensive coverings the most-picked-over part of the defeat. Simeone has alternated 4-4-2, 5-3-2 and 3-5-2 for years. The variant trades a wide runner for a spare centre-back and asks Liverpool's full-backs to defend the overlap; either way the pattern that threatens is Baena dropping to pull a centre-back out. He has not won at Anfield since March 2020.",
      category: "tactics",
    },
    {
      title: "Araujo, Not A Free Agent, Is Iraola's Answer At Right-Back For Europe After A 7.7 At Ipswich (FourFourTwo / Liverpool.com, today)",
      detail:
        "The reading that firmed over the weekend and holds into Monday: Ronald Araujo's first Liverpool start, at right-back rather than centre-half, brought a FotMob 7.7 and nine duels won from ten, and FourFourTwo frames Friday as Iraola settling his Champions League right-back rather than rotating one. Frimpong, fit and unused, keeps the case for his pace against Atletico's Lookman if Simeone stays with a four. The Dani Carvajal free-agent line that surfaced on TNT stays a pundit's aside, unadvanced by any transfer reporter, and belongs to January if it belongs anywhere; the position's real depth question is whether Gomez, back in training this week, gives a third senior body by Fulham.",
      category: "tactics",
    },
    {
      title: "The Table Holds Over An Idle Weekend: Two Perfect Sides On Nine, Five On Five, Liverpool Sixth (ESPN / NBC Sports, today)",
      detail:
        "Unchanged into Monday of a Champions League week: with no Premier League game for Liverpool since Friday, the table the Reds sit in is the one Sunday left, Manchester City and Arsenal both perfect on nine after Arsenal's 2-1 over Chelsea, and Brentford, Liverpool, Newcastle, Everton and Leeds all on five, separated by goal difference alone, Liverpool sixth on plus two. Everton's 96th-minute equaliser against Manchester United on debutant Ainsley Maitland-Niles drew the fifth side level. The next league test is Fulham, nineteenth and pointless, at Anfield on the 12th; the European line runs straight through the five-point knot.",
      category: "matches",
    },
    {
      title: "The Injury Room Stands Still Two Days Out: Gomez Trains But Doubts Wednesday, Four Others Out, Two Ineligible (DaveOCKOP / Liverpool FC, today)",
      detail:
        "Confirmed unchanged on Monday: Joe Gomez rejoins team training this week but is expected to miss the Atletico opener, Fulham on the 12th his first realistic matchday, per Iraola's timetable and DaveOCKOP's count. Ekitike (Achilles) and Bradley (knee) have no return date, Leoni (ACL) and Chiesa (muscle) are set to rejoin group training during the September international break, and Chiesa and Endo were left off the 25-man Champions League squad, so the European bench is two names shorter than the league's. No new injury emerged from the weekend. For the visitors, Ortiz is suspended and Sorloth a doubt with a contracture.",
      category: "injuries",
    },
    {
      title: "Isak Arrives At His First Anfield European Night Three-For-Three, Ekitike Still Without A Date Behind Him (Sky Sports / Opta via Sports Mole, today)",
      detail:
        "The number the week leans on: Alexander Isak has scored in each of his three league games, his double at Ipswich taking him level with his entire 2025-26 return, and Cody Gakpo has supplied all three, four goal involvements that per Opta only Salah has bettered through a Liverpool opening three this century. Isak's own line after Portman Road, that 'it's still early, we still have a lot to learn', frames a forward line that is two men deep with Ekitike given no timeframe. Wednesday is his first Champions League night at Anfield, the first of three games in seven days that will ask whether one striker can start them all.",
      category: "matches",
    },
    {
      title: "The Sporting Director's Chair Stays Open: Ward, Woodfine And Marques The Internal Names, No Appointment Yet (The Athletic / Empire of the Kop, yesterday)",
      detail:
        "Reported over the weekend and unmoved on Monday: The Athletic's three internal candidates to succeed Richard Hughes, who stepped down on Saturday and is expected at Al-Hilal, are Julian Ward, David Woodfine and Pedro Marques, with Mike Gordon leading a search the club would like to keep in-house though it has not ruled out a new appointment. Whoever is chosen becomes Liverpool's fourth sporting director in four years. Hughes leaves almost £700m spent across two windows and the two positions the crowd wanted, specialist right-back and defensive midfield, unfilled. No successor has been named.",
      category: "general",
    },
    {
      title: "The Window Is Shut But The Ownership Story Is Not: FSG's Minority Sale To A Bezos-Backed Consortium Sits In The Background (Liverpool FC / Bloomberg, background)",
      detail:
        "Not new this week but the largest fact underneath the season: Fenway Sports Group's strategic minority sale, announced on 14 August, brought a consortium including K5 Sports with Jeff Bezos as lead investor, the Mittal family trusts and EE Capital into a roughly 30 per cent stake, with FSG keeping majority ownership and operational control. The money is framed around long-term growth on and off the pitch rather than the transfer market, which stayed Hughes's brief until Saturday. It is the context in which a fourth sporting director will be appointed, and the reason the search is being watched beyond Anfield.",
      category: "general",
    },
  ],
  sources: [
    "Liverpool.com",
    "DaveOCKOP",
    "Liverpool FC",
    "El Desmarque",
    "El Gol Digital",
    "FourFourTwo",
    "ESPN",
    "NBC Sports",
    "Sky Sports",
    "Sports Mole",
    "The Athletic",
    "Empire of the Kop",
    "Bloomberg",
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
  generatedAt: "2026-09-07T09:00:00Z",
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
    "They arrive with their manager taking the blame, which is not his habit. Simeone called Saturday's 3-0 at Athletic Bilbao a deserved defeat and put it on himself, 'we lost the match in just five minutes' after the break, and two days out from Anfield the mood is the story as much as the shape. The defeat was a game of two literal halves: Atletico the better side before the interval, Lee Kang-in hitting the post in the third minute and Pablo Barrios the woodwork, then Nico Williams in the 46th and Robert Navarro in the 48th before Oihan Sancet finished it in the 90th. El Desmarque still reports Simeone weighing a back three for Wednesday, Cristian Romero, a debutant off the bench at San Mames, alongside Marc Pubill and David Hancko, Marcos Llorente right and Alex Grimaldo pushed to left wing-back or left out, his defensive coverings the part of Bilbao most picked over. Julian Alvarez, whistled by his own travelling support on his return from illness, remains a question the manager has carried unanswered into the week; Paulo Futre told him publicly that forgiveness comes with goals, not words. Alexander Sorloth carries a muscle contracture, Arnau Ortiz is suspended, and Jonathan David, the late loan from Juventus, missed Bilbao with a cervical contracture. They are fourth in La Liga on seven from four, with seven scored and six conceded, and Simeone has not won at Anfield since March 2020; last September's meeting here finished 3-2 to Liverpool, Llorente scoring twice and Van Dijk heading the winner in the 92nd minute.",
  shape:
    "On paper a 4-4-2 that becomes a 4-2-4 without the ball and pinches narrow with it: Barrios and Hjulmand the pivot, Giuliano Simeone and Lookman wide, Lee Kang-in and Baena a front two in name only, Baena dropping between the lines and into a false nine. The Sunday reporting adds a second sheet: a 5-3-2 or 3-5-2 with Romero, Pubill and Hancko across the back, Llorente and Grimaldo as the wing-backs, which trades one of the wide runners for a spare centre-back and asks Liverpool's full-backs to defend the overlap rather than the winger. Either way the pattern that hurts is the same, Baena pulling a centre-back out and a runner going through the gap he leaves.",
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
      threat: "One goal in Atletico's first three league games, the second in the 3-1 at Sevilla on 29 August, per Football Espana, and starts wide left of the four, running at a right-back. If Simeone goes to a back three he is the wide man most at risk of the bench; if he does not, Araujo or Frimpong is his Wednesday.",
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
      threat: "The subject of a 150m-euro Real Madrid bid Atletico rejected in June, per AFP, and of a summer attempt to join Barcelona that the closed window ended. Whistled by his own supporters again at Bilbao on Saturday after coming on from illness, one shot, saved by Simon, per AFP, absent from the warm-down; Fútbol Mundial notes he has yet to score this season. Whether he starts at Anfield is a decision El Gol Digital says Simeone takes this week.",
      source: "Get Spanish Football News / AFP / El Gol Digital / Fútbol Mundial",
    },
  ],
  predictedXI: [
    "Oblak", "Llorente", "Pubill", "Hancko", "Grimaldo",
    "G. Simeone", "Barrios", "Hjulmand", "Lookman", "Lee", "Baena",
  ],
  absentees: [
    { name: "Arnau Ortiz", issue: "Suspended, second yellow card (per DaveOCKOP)", status: "Out" },
    { name: "Alexander Sørloth", issue: "Muscle contracture (per El Gol Digital / DaveOCKOP)", status: "Doubt" },
    { name: "Jonathan David", issue: "Cervical contracture, missed Bilbao (per COPE)", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-05", opponent: "Athletic Bilbao", home: false, score: "0-3", result: "L", note: "Better side before the break, Lee and Barrios hitting the woodwork, then Nico Williams (46) and Navarro (48) in three minutes and Sancet (90). Romero's debut from the bench; Alvarez on after illness, whistled by his own fans. A first defeat of the season." },
    { date: "2026-08-29", opponent: "Sevilla", home: false, score: "3-1", result: "W", note: "Baena twice and Lookman in a first half that settled it; Sierra pulled one back. Alvarez left out of the XI." },
    { date: "2026-08-23", opponent: "Villarreal", home: true, score: "2-2", result: "D", note: "Pubill and Giuliano Simeone scored; Moreno and Mikautadze penalties levelled it. Le Normand sent off, Alvarez jeered by the home crowd." },
    { date: "2026-08-19", opponent: "Málaga", home: true, score: "2-0", result: "W", note: "Lee Kang-in on debut and Baena, both in the second half, in the season opener." },
  ],
  liverpoolAngle:
    "A wounded, self-critical Atletico is not the same as a beaten one, and Liverpool must plan for two versions of it. If Simeone keeps the four, Wednesday is the game the right-back pick was made for: Lookman running at Araujo's strength or Frimpong's pace, Grimaldo overlapping Kerkez on the other side, and Baena dropping to pull Van Dijk or Jacquet out of the line. If he goes to three, the wide runners thin out, the wing-backs become the width, and the danger moves inside, where Liverpool's own record is worst: nine fast-break goals conceded since last August, the most in the Premier League per Opta, and both Newcastle goals from counters. Bilbao's lesson still applies in either shape. Atletico controlled the first half and lost the match in five minutes of the second, which is the ninety-minute version of what Liverpool have done to themselves all season, starting slowly in August and then, at Ipswich, starting fast and holding. FotMob had Ipswich ahead on pre-shot expected goals, 0.73 to 0.66, and Sofascore's post-shot model reversed it, 1.70 to 0.47; the finishing is what has separated Liverpool from a worse table, and Alisson, past Elisha Scott on Friday, is the other reason. Kerkez's own reading, that the press lasts thirty-five minutes before the game becomes about compactness, is the honest frame for a side that has led for eighty-four minutes all season. Sorloth's contracture and Alvarez's standing leave Atletico's front line the more unsettled of the two; Liverpool's is Isak and Gakpo and, per Gakpo, a debt of assists. The predicted XI stays the Sevilla side pending a named team-news preview; the back-three variant is reported, not confirmed. Ortiz is suspended; David and Sorloth are doubts.",
  modelLine: null,
  sources: ["El Desmarque", "El Gol Digital", "AFP", "Get Spanish Football News", "Fútbol Mundial", "COPE", "Football Espana", "MARCA", "ESPN", "DaveOCKOP", "Liverpool FC", "TNT Sports", "FotMob", "Sofascore", "Opta Analyst"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-07T09:00:00Z",
  competition: "PL",
  played: 3,
  headline:
    "Two models still cannot agree on the win. FotMob's pre-shot expected goals had Ipswich ahead at Portman Road, 0.73 to 0.66 on 14 shots to 10, while Sofascore's post-shot model gave Liverpool 1.70 to 0.47, the whole gap almost exactly where Isak put his two shots. Across three league games the mixed-source total reads 5.00 expected goals for and 4.46 against, six scored and four conceded, one game dominated and drawn, one out-created and drawn, one out-created and won. Liverpool have led for eighty-four minutes all season and every one of them came on Friday, which is the shape of a side that can seize a game early and has not yet controlled one late. Atletico, who were the better team for a half in Bilbao and then lost the match in five minutes of the second, are the mirror image walking into Anfield. Opta's match tools are now on the club site but publish no single expected-goals figure to quote, so FotMob's and Sofascore's stand.",
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
      verdict: "Won on two Isak shots in the sixth and ninth minutes, both from Gakpo through-balls, then held. Out-created across the ninety on FotMob's pre-shot figures, 0.73 to 0.66, 14 shots to 10, though Liverpool had seven on target to five; Sofascore's post-shot model reverses it, 1.70 expected goals on target to 0.47, with 59 per cent possession, Isak at 0.21 xG and 0.33 xGOT for his two goals and Gakpo at 0.40 expected assists. A first lead and a first clean sheet of the season. Opta's match tools are now published on the club site but give no single expected-goals figure to quote, so the FotMob and Sofascore numbers stand; first-half splits are not available.",
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
    "Gakpo has now supplied all three of Isak's league goals, four goal involvements through three games that per Opta via Sports Mole only Salah, with six, has bettered by a Liverpool player at that stage this century.",
    "Isak has scored in each of his three league games, and his double at Ipswich took him level with his entire 2025-26 return; two shots on Friday, both scored, from 0.21 of expected goals per Sofascore.",
    "Liverpool have led for 84 minutes of the 270-plus played in the league this season, all of them at Portman Road from Isak's sixth minute to the whistle; in both August games the first goal was the opponent's.",
    "Alisson's clean sheet at Ipswich was his 138th for the club in 336 appearances, per Liverpool FC, one past Elisha Scott and fourth all-time behind Reina (177), Grobbelaar (267) and Clemence (323).",
  ],
  sources: ["FotMob", "Sofascore", "SI", "Sporting News", "Opta Analyst", "Liverpool FC", "ESPN", "Sports Mole", "Sky Sports"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-07T09:00:00Z",
  headline:
    "The squad that opens Europe on Wednesday is the squad that has to close it too: five absentees, none of them back for Atletico, and no market to reach for until January. Joe Gomez is the nearest, in team training this week but expected to wait for Fulham on Saturday; Ekitike and Bradley have no date, Leoni and Chiesa are pointed at the international break. The one position the closed window leaves genuinely thin is right-back, where Araujo's move across from centre-half on Friday gave Iraola a second body and Frimpong the other, with Gomez a notional third once he returns; the Carvajal free-agent line is a pundit's aside, not a plan, and the sporting director who might act on it has not been appointed. Endo and Chiesa are outside the 25-man Champions League squad, so the European bench Iraola rotates through three games in seven days is two names shorter than the league's.",
  minutesNote:
    "Premier League minutes are not published here yet. Three league games have been played and no reliable per-player league minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "No timeframe; December at the earliest", note: "'Especially Hugo will go later,' Iraola said on Thursday, and nothing on Friday changed it. Registered in the Champions League squad regardless, because only three changes are allowed after the league phase. Isak's three in three make the wait easier to bear; Gakpo finished Friday's game at centre-forward, which is the fallback.", source: "Liverpool FC / Liverpool Offside" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training during the September international break", note: "Iraola's Thursday plan has him back with the squad during the break after nearly a year out; no matchday date. Named in the Champions League squad.", source: "Liverpool FC" },
    { name: "Conor Bradley", issue: "Knee", expected: "No timeframe", note: "'Probably Conor will go later,' Iraola said on Thursday. His absence is why Araujo at right-back on Friday was news: it is the first time since August the department has had a second fit body.", source: "Liverpool FC" },
    { name: "Federico Chiesa", issue: "Muscle (Como friendly, August)", expected: "Rejoins group training during the September international break", note: "Out until the break per Iraola and left off the Champions League list, so Wednesday against Atletico is not in reach either way. Stays at the club after his father closed off the Serie A talk on deadline night.", source: "Liverpool FC / Liverpool Offside" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 26 July)", expected: "Team training this week; likely to miss Atletico on Wednesday, hoped for before the break", note: "'The closest one is Joe,' Iraola said on Thursday. Friday's reporting has him still likely to miss the Champions League opener; Fulham on the 12th is the first realistic matchday. His return gives a fourth senior centre-back and, now Araujo has played there, a third right-back option.", source: "Liverpool FC / Sports Mole" },
  ],
  returning: [],
  startersLastMatch: {
    match: "Ipswich Town 0-2 Liverpool, 4 September",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Szoboszlai", "Mac Allister", "Munoz", "Wirtz", "Gakpo", "Isak"],
    changes: "One change from the Forest side: Araujo in for Frimpong at right-back, a first Liverpool start. Mac Allister kept the pivot with Szoboszlai despite most previews restoring Gravenberch, who came on for Isak at 64 alongside Barcola (for Munoz) on his debut; Nyoni (84, for Mac Allister) and Koumas (90+1, for Wirtz) followed. Unused: Mamardashvili, Frimpong, Tsimikas, Endo, Ngumoha.",
    source: "SI / FotMob / Liverpool FC",
  },
  depthRisk: [
    { position: "Right-back", level: "high", detail: "Two available bodies, Araujo (started Friday, 7.7, nine duels from ten) and Frimpong (fit, dropped), and no specialist behind them: Bradley no date, Gomez back in training this week, Szoboszlai the in-game option, Mabaya the registered academy name. The free-agent market is the only one open, which is why Dani Carvajal's name surfaced on Sunday; it is a pundit's line, not a talk, and Caught Offside notes the loan attempt for Malo Gusto failed before the deadline. Still one injury from Endo or Szoboszlai filling in, and Endo is not in the European squad." },
    { position: "Centre-back", level: "high", detail: "Van Dijk and Jacquet, with Araujo now needed at right-back as well, which thins the cover here even as it thickens it there. Jacquet completed his first full ninety on Friday and Iraola admitted a second-half doubt he chose to ride out. Gomez trains this week; Leoni not with the group until the break. One injury and Endo plays centre-half in the league, and nobody senior does in Europe." },
    { position: "Centre-forward", level: "high", detail: "Isak alone, three goals in three, with Ekitike given no timeframe. Gakpo is the false-nine fallback and finished Friday's game there; three games in seven days is the first stretch that will test whether Isak can start all of them." },
    { position: "Central midfield", level: "medium", detail: "Mac Allister, Gravenberch, Szoboszlai and Endo, with Nyoni pushing and given twenty minutes on Friday. Endo is not in the Champions League squad, so the European depth is one body shorter than the league's." },
  ],
  sources: ["Liverpool FC", "SI", "FotMob", "Sports Mole", "Liverpool Offside", "Sporting News", "The Athletic", "Caught Offside", "DaveOCKOP"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-07T09:00:00Z",
  played: 3,
  points: 5,
  pointsPerGame: 1.67,
  projectedPoints: 63,
  projectedFinish: "Europa League places on current pace",
  headline:
    "Five points from three, 1.67 a game and a projected 63, and a fortnight ahead that will bend the number one way or the other. The company is set: two perfect sides on nine, five on five, Liverpool sixth of them on goal difference. Three games is a sample small enough that the same arithmetic read as a survival pace a fortnight ago, so the honest frame is the fixtures rather than the forecast. Fulham at home and Bournemouth away, either side of the Champions League opener and a cup tie, are two league games against the bottom six; six points from them is eleven from fifteen and a top-five rhythm into Manchester City on 11 October.",
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
    { date: "2026-09-20", opponent: "Bournemouth", home: false, competition: "PL", oppPosition: 15, difficulty: "medium" },
    { date: "2026-10-11", opponent: "Manchester City", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 5, difficulty: "hard" },
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 10, difficulty: "medium" },
    { date: "2026-11-01", opponent: "Arsenal", home: true, competition: "PL", oppPosition: 2, difficulty: "hard" },
  ],
  runInVerdict:
    "Fulham on the 12th, nineteenth and pointless, and Bournemouth on the 20th, fifteenth on two, are the two fixtures that decide whether September's pace is a top-five one or a mid-table one before City arrive on 11 October, now one of two perfect sides; take six and the projection climbs toward 70, take two and it falls back into the fifties. Both come inside a run of three home games in seven days with a cup tie between them, so the question is as much who starts as who wins. Arsenal, the last of the six, moved to nine points on Sunday and are the other perfect record.",
  sources: ["ESPN", "FotMob", "Liverpool FC", "Sky Sports", "This Is Anfield", "NBC Sports"],
};
