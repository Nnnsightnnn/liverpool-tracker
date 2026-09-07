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
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "injured", outSince: "2026-07-25", injuryNote: "Mon Sep 7, evening — Monday's previews all file him under doubt, none under available, and the Tuesday press conference at 1pm is where that changes or does not. Gomez rejoins team training this week per Iraola's timetable, and Sports Mole's Monday team-news round-up still lists him as a muscle doubt for Wednesday's Champions League opener, so the Van Dijk and Jacquet pairing stays intact by default; Fulham on Saturday remains the first realistic matchday, with the manager hoping to have him before the September break. His return is the one that changes the arithmetic most: a fourth senior centre-back, and now that Araujo has started at right-back, a third body for that position too. The muscle recovery from the 26 July Sunderland friendly has gone to plan; the calendar simply arrived first.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
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
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Mon Sep 7, evening — named in the pivot by Monday's previews, for the second fixture running, having been left out by the manager for the last one. Sports Mole and Yahoo both put Gravenberch alongside Szoboszlai for Wednesday, Mac Allister the man displaced, on the logic that a Champions League night with Baena dropping between the lines wants his reach; the same outlets said the same before Ipswich and Iraola kept the Forest pivot, bringing Gravenberch on for Isak at 64 to hold 2-0, FotMob's 6.3 for a tidy cameo. Two league games without a start under the new manager. Nothing physical is reported; this is a selection call, and Tuesday's press conference is the last word before the team sheet", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Mon Sep 7, evening — the one attacker no Monday preview moves, whichever flank they hand Barcola. Sports Mole's predicted XI starts the Frenchman on the right and keeps Gakpo on the left; The Hard Tackle flips them, Gakpo right and Barcola left; Rousing The Kop wants all four of Barcola, Wirtz, Isak and Gakpo together for the first time. VAVEL's Monday numbers say why he is untouchable: 0.45 expected assists per 90 in the league this season against 0.22 last, Iraola having given him more creative licence and fewer shots, and all three of Isak's league goals set up by him. Two assists at Portman Road, a goal at Newcastle, an assist against Forest. The Manchester City move died on deadline day; contracted to 2030; the left, or the right, is his on Wednesday", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Mon Sep 7, evening — one goal in thirteen Champions League appearances, a career number Sports Mole put beside his name on Monday, and the competition he has never yet scored in for Liverpool arrives on Wednesday. Isak's league form says the opposite: three in three, two shots and two goals at Portman Road, and VAVEL's Monday analysis has him at 0.89 expected goals per 90 this season against 0.41 under Slot last year, the movement sharper, the running in behind restored. Every Monday preview names him to lead the line, the only striker fit to do it with Ekitike given no date. Atletico arrive with Sorloth ruled out and Alvarez trialled as a starter in Monday's session in Majadahonda, so the centre-forward contest is a fit man against a contested one. Hancko, per The Hard Tackle, is the defender likeliest to step out and meet him", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Mon Sep 7, evening — not named in a single Monday preview, on either flank, for Wednesday. Ngumoha's queue lengthened again as Sports Mole, Yahoo and The Hard Tackle all picked Barcola for a first start and none picked him; at Portman Road he was an unused substitute with Frimpong, Tsimikas, Endo and Mamardashvili, Koumas rather than Ngumoha the stoppage-time forward change. Iraola's defence of him on the right still stands, the five-year contract is still unannounced, and as an under-21 he needed no registering for either squad list, which keeps him eligible for everything. The Carabao Cup tie against Tottenham on the 15th, the third home game in seven days, is the realistic start", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Mon Sep 7, evening — Monday's team-news lists carry him twice, once as injured and once as omitted, and the second is the one that matters this week. Chiesa was left off the 25-man Champions League squad with Endo, Sports Mole's Monday round-up restating it, so Wednesday against Atletico is closed to him whatever the muscle does; the return to group training is set for the September international break per Iraola, which also rules out Fulham, the Tottenham cup tie and Bournemouth. The muscle problem dates from the Como friendly. The flank he would rejoin has moved on without him: Barcola is tipped by three Monday previews for a first start, Munoz has two league starts, and Gakpo is the one forward nobody drops. His father closed off the Serie A talk on deadline night, so he stays, and waits for October", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Mon Sep 7, evening — the starter every Monday preview drops, and the only one of Friday's eleven they agree on dropping. Sports Mole's predicted XI has Barcola taking Munoz's right flank for a first start; The Hard Tackle and Yahoo reach the same bench by different routes. Two successive league starts, 64 minutes of the second, FotMob's 6.8 at Portman Road, SI noting he was the third different starter on the right in three league games; the debut goal against Forest and the penalty won at Newcastle remain the fortnight's decisive contributions. Iraola said Barcola is not yet fully fit, which is the one argument for keeping Munoz in on Wednesday, and Fulham on Saturday is the likelier of the two starts either way. In since June on a six-year deal to 2032, a World Cup winner with Spain at twenty-two", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
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
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Mon Sep 7, evening — three previews, three first starts, and a manager who has said he is not yet fully fit. Barcola is named in Sports Mole's Monday XI on the right, in The Hard Tackle's on the left and in Yahoo's 4-2-3-1, a two-time Champions League winner with PSG being pointed at the competition he knows best for his full debut; Rousing The Kop's argument is that Wednesday, not Fulham on Saturday, is the place to ease him in. Against that, Iraola's own caution after twelve touches and twenty-six minutes at Portman Road, and the form of Gakpo, whom nobody drops. Announced a week ago on a five-year deal, a guaranteed £106m rising to £123m, second on the club's list behind Isak; the sporting director who signed him left on Saturday. No. 29. If he starts, it is a first Anfield night in red", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  focus: "The eve of the eve: Atletico lose Sorloth and Ortiz for Anfield, put Alvarez back in a starting XI in training, and three previews name Barcola for a first Liverpool start",
  credit: "Plate · Daily edition",
  generatedAt: "2026-09-07T22:30:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Evening pass (Mon 7 September): quiet cycle, no match since Friday, no new Liverpool injury. Lead rotated
  // onto Monday's team-news day: Mundo Deportivo/EFE confirm Sorloth out and Ortiz suspended (a one-match ban
  // carried from a 2024 Conference League qualifier for Slask Wroclaw), El Desmarque report Alvarez trialled as
  // a starter with Jonathan David back in the group, and Sports Mole, Yahoo and The Hard Tackle all pick
  // Barcola for a first start. Nothing photographable under STEP 7.5, so no Track 2 request; the Hughes plate
  // carries over and generatedAt is re-stamped (COVER-00001).
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
      "Alexander Isak scored twice inside the first nine minutes at Portman Road on Friday night and Liverpool beat Ipswich Town 2-0, Andoni Iraola's first win at the third attempt, the first time his side has led a game this season and its first clean sheet since April. Both goals came from Cody Gakpo through-balls, the first driven in at the near post in the sixth minute, the second slid in left-footed in the ninth; a third was disallowed for offside in the 33rd. Ronald Araujo made a first start, at right-back ahead of Frimpong; Bradley Barcola made his debut from the bench on 64 minutes. FotMob had Ipswich ahead on expected goals, 0.73 to 0.66. Liverpool are sixth on five points after the weekend's games. Atletico Madrid at Anfield on Wednesday next, arriving without Sorloth and the suspended Ortiz, with Alvarez trialled as a starter in Monday's training and Barcola tipped for a first Liverpool start.",
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
// Last refresh: 2026-09-07 (Monday evening) — re-fetched from ESPN's endpoint at 22:10 UTC and byte-identical
// to the morning's table: no Premier League game has been played since Sunday (this is a Champions League
// week), so the round-3 table stands. Manchester City and Arsenal both perfect on nine; Chelsea fourth on six
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
  generatedAt: "2026-09-07T22:30:00Z",
  overview:
    "A table nobody could touch on Monday, because nobody in it played: the round-three standings stand until Saturday, and Liverpool spend the week's European night sixth in them. Manchester City and Arsenal are both perfect on nine, the champions and the side that came from behind to beat Chelsea 2-1, and already four clear of a chasing pack that has knotted: Brentford, Liverpool, Newcastle, Everton and Leeds all on five, split by goal difference and, for Newcastle and Everton, by goals scored alone, Liverpool sixth on plus two. Chelsea sit fourth on six after a first defeat under Xabi Alonso, still a point above the Reds, and Hull, third on seven, remain the surprise of the opening month. At the foot, Fulham, at Anfield on the 12th, are still pointless alongside Coventry and Tottenham in the relegation stripe, and Bournemouth, the trip on the 20th, sit fifteenth on two. Every side has played three; the European line runs straight through the five-point knot and will not move again until the league resumes.",
  teams: {
    "Liverpool": "Sixth on five and unbeaten, one of five sides level, held there by a goal of difference until Fulham on Saturday. Wednesday's Atletico game moves the Champions League table, not this one.",
    "Manchester City": "Top on nine, level with Arsenal on points and goal difference and ahead on goals scored, the two perfect records left after three rounds. At Anfield on 11 October.",
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
    "Fulham": "Nineteenth and pointless after three defeats, the first side to test whether Liverpool rotate after a European night. At Anfield on Saturday the 12th.",
    "Coventry": "Bottom, pointless, minus five, three defeats on their return to the division.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "A Ban Two Years In The Post.",
    byline: "Mundo Deportivo / This Is Anfield",
    dateline: "Majadahonda · 7 September",
    category: "Football News",
    body:
      "The Spanish press called it a surprising absence, and the surprise was in the paperwork. Arnau Ortiz will not play at Anfield on Wednesday because of a red card he collected in August 2024, as a substitute for Slask Wroclaw in a Conference League qualifier: two yellows inside a few minutes, the first for a dive, the second for arguing about it. That qualifier was his last UEFA appearance, so the one-match ban sat unserved until the night Atletico needed him least to be missing. Alexander Sorloth, whose muscle contracture has kept him out of group training since before the season, goes with him. Simeone lands on Merseyside two attackers light, and Liverpool's defence, which has looked vulnerable in every game but Friday's, will take whatever arithmetic it is given."
  },
  {
    n: "02",
    headline: "The Striker Who Stayed Behind To Run.",
    byline: "El Desmarque / COPE",
    dateline: "Majadahonda · 7 September",
    category: "Tactics",
    body:
      "The picture out of Atletico's training ground on Monday was of a man doing extra. Julian Alvarez, whistled by his own support in Bilbao on Saturday and named by his manager as a question rather than a starter, was placed in the first eleven for Simeone's shape trial and then stayed on after the group session for running work with the fitness staff, El Desmarque reports. Cristian Romero, his Argentina team-mate, was trialled beside him at centre-back; Jonathan David, the late loan from Juventus, was back with the group after the cervical contracture that kept him out of San Mames. COPE's line is that Alvarez is 'a punto', on the point of starting. Atletico train at Anfield on Tuesday. The player who tried all summer to leave may be the one Simeone leans on to make the visit count."
  },
  {
    n: "03",
    headline: "Three Previews, One Name, And A Manager's Caveat.",
    byline: "Sports Mole / Rousing The Kop",
    dateline: "Anfield · 7 September",
    category: "Manager",
    body:
      "Monday belonged to the predicted elevens, and for once they agreed on something. Sports Mole starts Bradley Barcola on the right with Gravenberch restored to the pivot; The Hard Tackle puts Barcola on the left and Gakpo on the right; Yahoo's 4-2-3-1 has both Barcola and Gravenberch in. Rousing The Kop makes the case plainly: a two-time Champions League winner should be eased in on the stage he knows, not held back for Fulham. The caveat is Iraola's own, that the £123m man is not yet fully fit after twelve touches at Portman Road, and the counter-argument is Victor Munoz, two league starts and the only one of Friday's eleven every preview drops. The head coach speaks at 1pm on Tuesday. Until then the graphic keeps the side that won."
  },
  {
    n: "04",
    headline: "One In Thirteen.",
    byline: "Sports Mole / VAVEL",
    dateline: "Anfield · 7 September",
    category: "Match Report",
    body:
      "Alexander Isak has scored one goal in thirteen Champions League appearances, a number Sports Mole set beside his name on Monday and one the last three Premier League weeks make hard to believe. He has scored in every league game this season, matched his whole 2025-26 tally already, and per VAVEL's Monday analysis is generating 0.89 expected goals per 90, more than double the 0.41 of last year, with Cody Gakpo's expected assists likewise doubled to 0.45. The pair rotate between the left and the centre, which is what makes them difficult to plan for. Wednesday puts that form against a defence that conceded six second-half goals in its last three matches and against Hancko, the defender The Hard Tackle expects to step out and meet him. The European number is the one still to move."
  },
  {
    n: "05",
    headline: "Like A Boss, In Belgium.",
    byline: "Sports Mole / Nieuwsblad",
    dateline: "Brussels · 6 September",
    category: "Football News",
    body:
      "While Alisson kept his first clean sheet of the season on Friday, the goalkeeper bought to succeed him kept one of his own on Sunday, and the Belgian press ran out of superlatives. Lucca Brughmans, eighteen, six foot seven, signed on deadline day for £30m with add-ons and loaned straight back to Genk, made four saves and nine recoveries in a 0-0 at Anderlecht and was named player of the match; De Standaard called him worth his weight in gold, Nieuwsblad found his calm 'crazy', Footnews said he had answered his transfer 'like a boss'. He told Nieuwsblad the Liverpool week was hectic, that he saw only the training complex before his medical, and that he was back with Genk's group by Monday. The only deadline-day arrival is doing what the club wanted: playing, somewhere else, well."
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-07T22:30:00Z",
  summary:
    "Monday evening, and the eve of the eve has produced team news from both ends of the tie: Atletico Madrid will arrive at Anfield on Wednesday without Alexander Sorloth, still short of group training with a muscle contracture, and without Arnau Ortiz, who is serving a one-match ban for a red card collected two years ago in a Conference League qualifier for Slask Wroclaw, per Mundo Deportivo and This Is Anfield; at the same time El Desmarque reports Julian Alvarez placed in Simeone's starting eleven for Monday's shape trial and staying behind for extra running, with Jonathan David back in the group after his cervical problem. On the Liverpool side the day was the previews', and three of them, Sports Mole, Yahoo and The Hard Tackle, name Bradley Barcola for a first start, Sports Mole restoring Gravenberch to the pivot too; the caveat is Iraola's, that Barcola is not yet fully fit, and the head coach speaks at 1pm on Tuesday. Sports Mole also set a number beside Alexander Isak, one goal in thirteen Champions League games, against VAVEL's reading of a striker at 0.89 expected goals per 90. The Premier League table did not move on Monday because nobody played, Liverpool sixth and unbeaten among five sides on five; the injury room did not move either, Gomez a doubt, four out, Chiesa and Endo ineligible. In Belgium the goalkeeper bought to follow Alisson kept a clean sheet of his own.",
  keyTopics: [
    {
      title: "Sorloth Out And Ortiz Banned For A 2024 Red Card: Atletico Lose Two Attackers For Anfield (Mundo Deportivo / This Is Anfield, today)",
      detail:
        "Reported in Spain on Monday and picked up across the Liverpool press: Alexander Sorloth, who has not returned to group training since a muscle contracture before the season, will miss Wednesday, per Mundo Deportivo and EFE, and Arnau Ortiz is suspended for a red card he received in August 2024 as a Slask Wroclaw substitute in a Conference League qualifier, two yellows within minutes, the first for a dive, the second for protesting it. That qualifier was his last UEFA appearance, so the one-match ban carried unserved to Anfield, per This Is Anfield and Liverpool.com. Simeone's attacking options shorten by two before the trip.",
      category: "injuries",
    },
    {
      title: "Alvarez Trialled As A Starter And Stays To Run; Jonathan David Back In The Group (El Desmarque / COPE, today)",
      detail:
        "From Monday's session in Majadahonda: El Desmarque reports Julian Alvarez placed in the first eleven of Simeone's shape trial and remaining on the pitch afterwards for extra running with the fitness staff, two days after being whistled by his own fans in Bilbao; Cristian Romero, his Argentina team-mate, was trialled beside him at centre-back and COPE describes Alvarez as 'a punto' for a start. Jonathan David, the late Juventus loan who missed San Mames with a cervical contracture, was back with the group. Sorloth is the only absentee from the block. Atletico train at Anfield on Tuesday before the 8pm kick-off on Wednesday.",
      category: "tactics",
    },
    {
      title: "Three Previews Name Barcola For A First Start, Gravenberch For The Pivot; Iraola's Caveat Is Fitness (Sports Mole / Rousing The Kop, today)",
      detail:
        "Monday's predicted elevens converged: Sports Mole starts Bradley Barcola on the right with Ryan Gravenberch replacing Mac Allister beside Szoboszlai, Yahoo's 4-2-3-1 has the same two changes, and The Hard Tackle puts Barcola on the left, Gakpo right and Frimpong at right-back. Rousing The Kop argues the two-time Champions League winner should be eased in on Wednesday rather than saved for Fulham. Against all of it stands Iraola's own line that Barcola is not yet fully fit after twelve touches at Portman Road, and the form of Victor Munoz, the only Friday starter every preview drops. The pre-match press conference is at 1pm on Tuesday.",
      category: "tactics",
    },
    {
      title: "Isak Has One Goal In Thirteen Champions League Games, And 0.89 Expected Goals Per 90 This Season (Sports Mole / VAVEL, today)",
      detail:
        "Two numbers set beside the striker on Monday: Sports Mole notes Alexander Isak has scored once in thirteen career Champions League appearances, while VAVEL's analysis has him at 0.89 expected goals per 90 in the Premier League this season against 0.41 under Slot last year, with Cody Gakpo's expected assists doubled from 0.22 to 0.45 per 90. Three league goals in three, level with his whole 2025-26 already. The Hard Tackle frames Wednesday around Isak against Hancko, the defender likeliest to step out and meet him, and around whether pinning the back line frees Wirtz between Atletico's lines.",
      category: "matches",
    },
    {
      title: "Brughmans Named Player Of The Match For Genk In His First Game Since The £30m Move (Sports Mole / Nieuwsblad, today)",
      detail:
        "Reported on Monday from Sunday's Belgian Pro League game: Lucca Brughmans, the 18-year-old goalkeeper Liverpool signed on deadline day for £30m including add-ons and loaned straight back to Genk, made four saves and nine recoveries in a 0-0 at Anderlecht and took the player-of-the-match award. De Standaard called him 'worth his weight in gold', Nieuwsblad found his calm 'crazy', Footnews said he had answered 'like a boss'. Brughmans told Nieuwsblad the Liverpool week was hectic, that he saw only the training complex before his medical, and that he was back with Genk's group by Monday. The only deadline-day arrival is playing every week.",
      category: "general",
    },
    {
      title: "Sports Mole Tips 2-1 And Notes Koke Could Reach 150 UEFA Appearances; Atletico Have Never Beaten An English Side In A Group Or League Phase (Sports Mole, today)",
      detail:
        "The preview numbers of Monday: Sports Mole's verdict is Liverpool 2-1, on the reasoning that both defences have been porous and Barcola should lift the home attack. Its context is that Atletico have drawn four and lost six of ten group-stage or league-phase meetings with English clubs and never won one, that Liverpool have won their last six league-phase games against Spanish opposition with four clean sheets in five, and that Koke, if he features, becomes the 28th player to reach 150 UEFA club appearances. Simeone is the longest-serving coach in this season's competition. No probability model was found for the fixture, so the tracker's model line stays empty.",
      category: "matches",
    },
    {
      title: "Camara Told He Is 'High In Liverpool's Thinking' For 2027 As Chelsea And Monaco Fall Out (Sports Mole / Football365, today)",
      detail:
        "The one January-shaped line of a shut-window Monday: per Ben Jacobs via Sports Mole and Football365, Liverpool made a series of calls to Lamine Camara before the deadline to tell the Monaco midfielder he was high in their thinking for 2027 if he did not join Chelsea; Chelsea's £47m deadline-day move collapsed and the relationship between the two clubs is described as broken, so a January exit from Monaco is not discounted. It is a standing storyline, not a deal, and belongs to a sporting director who has not yet been appointed. Nothing can be signed until January.",
      category: "transfers",
    },
    {
      title: "Gomez Still A Doubt In Every Monday List, Four Out, Two Ineligible: Liverpool's Side Picks Itself Bar Two Slots (Sports Mole / Liverpool FC, today)",
      detail:
        "Restated on Monday: Sports Mole's team-news round-up carries Joe Gomez as a muscle doubt for Wednesday, so the Van Dijk and Jacquet pairing stays by default; Ekitike (Achilles), Bradley and Leoni (knee) remain out, and Chiesa and Endo are omitted from the 25-man Champions League squad. Gomez rejoins team training this week per Iraola, Fulham on Saturday the realistic return. The two genuinely open slots are the right flank, Munoz or Barcola, and the second pivot, Mac Allister or Gravenberch; the press conference at 1pm on Tuesday is the last public word before the team sheet.",
      category: "injuries",
    },
    {
      title: "Atletico Slip To Sixth In La Liga As The Sunday Games Pass Them; Liverpool's Table Untouched (ESPN, today)",
      detail:
        "A Monday check of both tables: the Sunday round in Spain moved Atletico from fourth to sixth on seven points from four, behind Barcelona, Alaves, Real Madrid, Betis and Deportivo, level with Sevilla and Osasuna, per ESPN's standings. Liverpool's own table did not move because no Premier League game was played, the Reds sixth and unbeaten on five, one of five sides level, four behind the perfect records of Manchester City and Arsenal. Fulham, nineteenth and pointless, are the next league game on Saturday.",
      category: "matches",
    },
    {
      title: "Grace Fisk Scores Twice As Liverpool Women Open The WSL With A 4-0 At Charlton; Sam Kerr Starts (Liverpool FC / This Is Anfield, yesterday)",
      detail:
        "From Sunday, filed as the club's other opening night: Grace Fisk scored in the eighth and 53rd minutes, Vivien Endemann marked her debut with a goal ten minutes later and Cornelia Kapocs converted a stoppage-time penalty as Gareth Taylor's side beat promoted Charlton 4-0, per the club and This Is Anfield. Endemann and goalkeeper Khiara Keating were handed first starts and Sam Kerr returned from long-term injury to start. Fisk was player of the match. Tottenham visit on Sunday.",
      category: "general",
    },
  ],
  sources: [
    "Mundo Deportivo",
    "This Is Anfield",
    "Liverpool.com",
    "EFE",
    "El Desmarque",
    "COPE",
    "Sports Mole",
    "Rousing The Kop",
    "Yahoo",
    "The Hard Tackle",
    "VAVEL",
    "Nieuwsblad",
    "Football365",
    "ESPN",
    "Liverpool FC",
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
  generatedAt: "2026-09-07T22:30:00Z",
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
  formation: "4-2-3-1",
  leaguePosition: 6,
  summary:
    "They travel two attackers short and with the striker they could not sell back in the first eleven, at least in training. Monday's Spanish reporting settled the absentees: Alexander Sorloth, who has not rejoined group work since a muscle contracture before the season, misses Anfield, per Mundo Deportivo and EFE, and Arnau Ortiz is suspended for a red card he received as a Slask Wroclaw substitute in an August 2024 Conference League qualifier, his last UEFA appearance, so the one-match ban has waited two years to be served. In the same session El Desmarque saw Julian Alvarez, whistled by his own fans in Bilbao on Saturday, placed in Simeone's trial eleven and staying on for extra running afterwards, with Cristian Romero trialled at centre-back beside him and Jonathan David back with the group after his cervical problem; COPE has Alvarez 'a punto'. Saturday's 3-0 at San Mames, a first half Atletico controlled and then three goals conceded from the 46th minute, still frames the week: Simeone called it deserved and his own, and Sports Mole counts six second-half goals conceded in their last three matches. The Sunday round dropped them to sixth in La Liga on seven from four, level with Sevilla and Osasuna. Simeone has not won at Anfield since March 2020, Atletico have never beaten an English side in a group or league phase in ten attempts, and last September's meeting here went 3-2 to Liverpool, Llorente twice and Van Dijk's 92nd-minute header. They train at Anfield on Tuesday.",
  shape:
    "Sports Mole's Monday eleven draws a 4-2-3-1, Koke and Hjulmand the pivot, Giuliano Simeone and Lookman wide of Baena, Jonathan David the nine, Romero making a first start at centre-back beside Pubill; the alternative, from El Desmarque's training-ground reading, keeps Alvarez as the striker. In possession it pinches narrow, Baena dropping between the lines and into a false nine, the two wide men running beyond him; without it the wingers drop to make a flat four and the front two screen the first pass. The back-three variant El Desmarque floated over the weekend, Romero, Pubill and Hancko with Llorente and Grimaldo as wing-backs, has not gone away, and Sports Mole's Romero-for-Hancko pairing is a reminder the defence itself is unsettled. Either way the pattern that hurts is Baena pulling a centre-back out and a runner going through the gap he leaves.",
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
      threat: "49 goals in 107 Atletico games since his £81m move from Manchester City in 2024, per DaveOCKOP, and none yet this season. The subject of a 150m-euro Real Madrid bid Atletico rejected in June, per AFP, and of a summer push to join Barcelona that the closed window ended; whistled by his own supporters at Bilbao on Saturday, one shot, saved by Simon. On Monday El Desmarque saw him placed in Simeone's trial eleven and staying on for extra running, and COPE has him 'a punto' for a start.",
      source: "DaveOCKOP / AFP / El Desmarque / COPE",
    },
  ],
  predictedXI: [
    "Oblak", "Llorente", "Pubill", "Romero", "Grimaldo",
    "Koke", "Hjulmand", "G. Simeone", "Baena", "Lookman", "David",
  ],
  absentees: [
    { name: "Arnau Ortiz", issue: "Suspended: one-match UEFA ban carried from a red card for Slask Wroclaw in an August 2024 Conference League qualifier (per Mundo Deportivo / This Is Anfield)", status: "Out" },
    { name: "Alexander Sørloth", issue: "Muscle contracture, not yet back in group training (per Mundo Deportivo / EFE)", status: "Out" },
  ],
  recentForm: [
    { date: "2026-09-05", opponent: "Athletic Bilbao", home: false, score: "0-3", result: "L", note: "Better side before the break, Lee and Barrios hitting the woodwork, then Nico Williams (46) and Navarro (48) in three minutes and Sancet (90). Romero's debut from the bench; Alvarez on after illness, whistled by his own fans. A first defeat of the season." },
    { date: "2026-08-29", opponent: "Sevilla", home: false, score: "3-1", result: "W", note: "Baena twice and Lookman in a first half that settled it; Sierra pulled one back. Alvarez left out of the XI." },
    { date: "2026-08-23", opponent: "Villarreal", home: true, score: "2-2", result: "D", note: "Pubill and Giuliano Simeone scored; Moreno and Mikautadze penalties levelled it. Le Normand sent off, Alvarez jeered by the home crowd." },
    { date: "2026-08-19", opponent: "Málaga", home: true, score: "2-0", result: "W", note: "Lee Kang-in on debut and Baena, both in the second half, in the season opener." },
  ],
  liverpoolAngle:
    "Two attackers fewer for the visitors changes less than it seems, because the two they lose are not the two Liverpool fear. Sorloth is the physical alternative up front and Ortiz a squad winger; the players who attack the documented weaknesses, Lookman and Giuliano Simeone running at full-backs, Baena dropping to pull a centre-back out, all travel. The right-back department is still two available bodies, Araujo and Frimpong, with Gomez a doubt in every Monday list, so Lookman against Araujo's strength or Frimpong's recovery pace remains the individual duel the dossier is built around; The Hard Tackle's counter is that the game is decided in the middle, Isak against Hancko for the pin and Wirtz against Hjulmand for the space behind the pivot. Liverpool's own worst number has not moved: nine fast-break goals conceded since last August, the most in the Premier League per Opta, and Sports Mole's observation that neither defence has convinced this season is the honest frame for a fixture the same outlet expects to finish 2-1. What Monday did change is the centre-forward picture. Alvarez trialled as a starter and David back in the group give Simeone two nines to choose from again; Liverpool have one, in form, and no other, so an early Atletico goal would test the depth of a bench that is two names shorter in Europe than in the league. Bilbao remains the model: Atletico controlled a half and lost the match in five minutes, and the side that has led for only eighty-four minutes all season should want the first goal more than usual. The predicted XI is Sports Mole's Monday eleven; El Desmarque's Alvarez-led alternative is reported, not confirmed. Ortiz and Sorloth are out; David is available.",
  modelLine: null,
  sources: ["Mundo Deportivo", "EFE", "El Desmarque", "COPE", "Sports Mole", "The Hard Tackle", "This Is Anfield", "AFP", "Football Espana", "MARCA", "ESPN", "DaveOCKOP", "Liverpool FC", "TNT Sports", "Opta Analyst"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-07T22:30:00Z",
  competition: "PL",
  played: 3,
  headline:
    "The per-90 numbers arrived on Monday and they say the striker, not the system, has changed. VAVEL puts Isak at 0.89 expected goals per 90 in the league this season against 0.41 under Slot, and Gakpo at 0.45 expected assists per 90 against 0.22, which is the underlying version of three goals in three and three assists to match. The team total is less flattering: across three league games the mixed-source figure is 5.00 expected goals for and 4.46 against, six scored and four conceded, and at Portman Road FotMob's pre-shot model had Ipswich ahead, 0.73 to 0.66, while Sofascore's post-shot model gave Liverpool 1.70 to 0.47, the gap sitting almost exactly on Isak's two finishes. Liverpool have led for eighty-four minutes all season, all of them on Friday. Sports Mole adds the European footnote before Wednesday, one Champions League goal in thirteen appearances for Isak; the league form and the continental record cannot both be true of the same player for long. Opta's match tools are on the club site but publish no single expected-goals figure, so FotMob's and Sofascore's stand.",
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
    "Isak has scored one goal in thirteen career Champions League appearances, per Sports Mole, against three in three Premier League games this season; VAVEL has his league expected goals per 90 at 0.89, up from 0.41 last season.",
    "Gakpo's expected assists per 90 in the league have doubled under Iraola, 0.45 this season against 0.22 last, per VAVEL, with fewer shots of his own; all three of Isak's league goals have come from his passes.",
    "Liverpool have won their last six Champions League league-phase games against Spanish opposition, keeping four clean sheets in the last five, per Sports Mole; Atletico have drawn four and lost six of ten group-stage or league-phase meetings with English clubs and never won one.",
    "Atletico have conceded six second-half goals across their last three matches, per Sports Mole, three of them in the 46th, 48th and 90th minutes at Bilbao on Saturday; Liverpool have led for 84 minutes all season, every one of them at Portman Road.",
  ],
  sources: ["FotMob", "Sofascore", "SI", "Sporting News", "Opta Analyst", "Liverpool FC", "ESPN", "Sports Mole", "VAVEL"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-07T22:30:00Z",
  headline:
    "Monday's previews could only argue about two slots, which is what a closed squad with five absentees looks like from the outside. Sports Mole, Yahoo and The Hard Tackle all pick Barcola for a first start and two of them restore Gravenberch to the pivot; nine of Friday's eleven are untouched by any of them, because there is nobody else to touch. Gomez stays a doubt in every list, in team training this week and pointed at Fulham on Saturday; Ekitike and Bradley have no date, Leoni and Chiesa are aimed at the international break, and Chiesa and Endo are outside the 25-man Champions League squad, so Wednesday's bench is two names shorter than Saturday's will be. Right-back is still Araujo or Frimpong and nothing behind them, and centre-forward is still Isak alone, against an Atletico that on Monday put two nines back in contention. Three home games in seven days start on Wednesday with the bodies Iraola has.",
  minutesNote:
    "Premier League minutes are not published here yet. Three league games have been played and no reliable per-player league minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "No timeframe; December at the earliest", note: "'Especially Hugo will go later,' Iraola said on Thursday, and nothing on Friday changed it. Registered in the Champions League squad regardless, because only three changes are allowed after the league phase. Isak's three in three make the wait easier to bear; Gakpo finished Friday's game at centre-forward, which is the fallback.", source: "Liverpool FC / Liverpool Offside" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training during the September international break", note: "Iraola's Thursday plan has him back with the squad during the break after nearly a year out; no matchday date. Named in the Champions League squad.", source: "Liverpool FC" },
    { name: "Conor Bradley", issue: "Knee", expected: "No timeframe", note: "'Probably Conor will go later,' Iraola said on Thursday. His absence is why Araujo at right-back on Friday was news: it is the first time since August the department has had a second fit body.", source: "Liverpool FC" },
    { name: "Federico Chiesa", issue: "Muscle (Como friendly, August)", expected: "Rejoins group training during the September international break", note: "Out until the break per Iraola and left off the Champions League list, so Wednesday against Atletico is not in reach either way. Stays at the club after his father closed off the Serie A talk on deadline night.", source: "Liverpool FC / Liverpool Offside" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 26 July)", expected: "Team training this week; a doubt for Atletico on Wednesday, hoped for before the break", note: "Listed as a muscle doubt in Sports Mole's Monday team-news round-up, so the Van Dijk and Jacquet pairing stays by default; 'the closest one is Joe,' Iraola said on Thursday, and Fulham on the 12th remains the first realistic matchday. His return gives a fourth senior centre-back and, now Araujo has played there, a third right-back option.", source: "Liverpool FC / Sports Mole" },
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
    { position: "Centre-forward", level: "high", detail: "Isak alone, three goals in three, with Ekitike given no timeframe, and on Wednesday facing an Atletico that put Alvarez back in a trial eleven and David back in the group on Monday. Gakpo is the false-nine fallback and finished Friday's game there; three games in seven days is the first stretch that will test whether Isak can start all of them." },
    { position: "Central midfield", level: "medium", detail: "Mac Allister, Gravenberch, Szoboszlai and Endo, with Nyoni pushing and given twenty minutes on Friday. Endo is not in the Champions League squad, so the European depth is one body shorter than the league's." },
  ],
  sources: ["Liverpool FC", "SI", "FotMob", "Sports Mole", "Liverpool Offside", "Sporting News", "The Athletic", "Caught Offside", "DaveOCKOP", "Yahoo", "The Hard Tackle", "El Desmarque"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-07T22:30:00Z",
  played: 3,
  points: 5,
  pointsPerGame: 1.67,
  projectedPoints: 63,
  projectedFinish: "Europa League places on current pace",
  headline:
    "Nothing in this projection moved on Monday, because a Champions League week does not touch it: still five from three, 1.67 a game, a projected 63 and a Europa League par. What the week does touch is the load behind the number. Wednesday's European night sits between Fulham on Saturday and a cup tie the Tuesday after, so the two league games that could push the pace toward a top-five rhythm before Manchester City on 11 October are the ones most exposed to rotation, and the previews are already arguing about who starts Wednesday. Three games remain a sample small enough that the same arithmetic read as a survival pace a fortnight ago; the honest frame is the fixtures, and the fixtures say the next two league opponents are nineteenth and fifteenth.",
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
