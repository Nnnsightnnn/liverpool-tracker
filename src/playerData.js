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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Wed Sep 9, matchday — the captain leads the side out for a European night against the opponent he beat at the death a year ago. Van Dijk's 92nd-minute header settled last September's 3-2 with Atletico, and Opta notes his own goal has yet to arrive this season; he trained as normal on Tuesday while Gakpo, since restored to the XI, had sat out. His deal runs only to 2027, the AC Milan interest knocked back without a bid. Eighty-one minutes protecting a first lead of the season at Ipswich, FotMob's 7.7, a first clean sheet since April, and the striker he would have marshalled, Alvarez, starts on the bench by Simeone's word.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Wed Sep 9, matchday — back in full training, but the bench is the most he can hope for tonight. Gomez trained with the full squad on Tuesday for the first time in more than a month, six weeks on from the muscle injury in the Sunderland friendly, the club's note putting him 'nearing the end of his recovery', short of available. Rush The Kop still pencils Fulham on Saturday as his first realistic matchday, so the Van Dijk and Jacquet pairing holds for Atletico; with Gakpo restored to the attack, none of the day's doubts touch the back line. A fourth senior centre-back, and with Araujo a right-back by evidence, a third body there too.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Wed Sep 9, matchday — first choice at left-back for the European night, and SI's reading hands him Giuliano Simeone down the flank rather than Grimaldo. Kerkez won the ball around halfway in the sixth minute for the move that became Isak's opener at Ipswich, SI's 6.7 in a back four that kept a first clean sheet since April. With Robertson gone and Tsimikas unused he is first choice by a distance. The understanding in front of him is Gakpo, restored to the right by the previews, with Barcola on the left.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Tue Sep 8, evening — Rush The Kop's Tuesday list gives him no date and a hint. Bradley, still rehabilitating the left knee ligament damage from the Arsenal game in January, remains in the Champions League squad, which the site reads as optimism that he returns during the league phase rather than after it; Iraola's own placing of him, behind Gomez, Leoni and Chiesa, has not changed, and Sports Mole's guess is the Manchester United game on 21 November. The right-back shirt in his absence is Araujo's by evidence, nine duels from ten at Ipswich, though Opta Analyst's predicted eleven for Wednesday restores Frimpong. Gomez, who trained fully on Tuesday for the first time in a month, is the department's next body back before he is.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
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
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Tue Sep 8, evening — the day the other returns moved, his did not. Gomez trained with the group on Tuesday for the first time in a month; Leoni, nearly a year on from the ACL tear on his September 2025 debut, stays on the plan Iraola set out last Thursday, group training during the international window later this month with no matchday attached, Rush The Kop guessing at Manchester City on 11 October. Jacquet, the centre-back in his place, is about to make a Champions League debut beside Van Dijk with Araujo at right-back, so the senior cover behind them in Europe is nobody until Gomez is passed fit. Named in the Champions League squad regardless.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Wed Sep 9, matchday — a Champions League debut beside Van Dijk, and the striker he was to face starts on the bench. Simeone said at Anfield that Alvarez will not start, which leaves Jacquet, per the previews, meeting Jonathan David or Lee rather than the man who scored ten in the competition last season, though SI's matchday XI recalls Alvarez beside Baena. He completed a first full ninety at Ipswich after 69 and 76 minutes in August, booked on 52, FotMob's 7.4. Gomez trained fully on Tuesday, so the European cover behind him is no longer nobody, only not yet passed fit.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Tue Sep 8, evening — 'very, very sad', and he said it at Anfield, beside the manager, the day before the European night. Mac Allister used the pre-Atletico press conference to confirm that the club is 'not in a position' to offer him a new contract, that the message came through his agent and not in a conversation with him, that 'there were options to leave this summer', and that he has not discussed his future with Iraola; two years remain on the 2023 deal, and Szoboszlai and Gravenberch have both been renewed this year. 'Hopefully they change their minds,' he said, and promised a hundred per cent regardless. Iraola called him important and said there is 'still a lot of time'. On the pitch the pivot is his: 84 minutes at Ipswich, FotMob's 7.5, and SI's Tuesday eleven keeps him for Wednesday with Gravenberch pencilled for Fulham.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Tue Sep 8, evening — the renewal that stung the man beside him. Mac Allister named Gravenberch and Szoboszlai on Tuesday as the two midfielders handed new long-term deals this year while his own was withheld, 'happy because they deserve it, but at the same time a little bit sad'. Gravenberch himself is a selection question, not a fitness one: SI's Tuesday eleven keeps Mac Allister for Atletico and pencils Gravenberch for Fulham on Saturday, the morning previews had it the other way round, and Iraola told the room his players do not yet know the line-up. Two league games without a start under the new manager, 26 minutes off the bench at Ipswich to hold the 2-0.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Tue Sep 8, evening — named by the man beside him as one of the two renewals that stung. Mac Allister told Tuesday's press conference that watching Szoboszlai and Gravenberch sign long-term deals this year made him 'happy because they deserve it, but at the same time a little bit sad' that his own was withheld; Szoboszlai's runs to 2031. His own contribution to the build-up was Monday's TNT sit-down with Gerrard, and on the grass a 150th appearance at Ipswich, FotMob's 7.6, three shots on target and a penalty VAR took back for an offside. Every preview starts him in the pivot on Wednesday; Barrios and Hjulmand are the opposite numbers, and Baena dropping between the lines is the ball he screens", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Wed Sep 9, matchday — his first Champions League game under Iraola, and the contribution column still reads nought. Wirtz has no goal and no assist in three league matches, the Forest display between forgettable ones at Newcastle and Ipswich, where his cross was turned in by Isak and flagged. He trained on Tuesday; with Gakpo restored to the right, Wirtz keeps the ten against a low block Mac Allister called hard to break down. Every preview keeps him there.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Tue Sep 8, evening — the deal still pending on the day the man he replaced said his own was withheld. Nyoni's new contract remains unsigned per the weekend reporting, while Mac Allister, whom he came on for at 84 at Portman Road, told Tuesday's press conference the club is not in a position to renew him. Twenty minutes and a win on Friday; Forest's £30m rejected before the window shut; with Endo left off the Champions League list he is a body closer to a European bench on Wednesday than he was a fortnight ago. Koumas, Chambers and McConnell trained with the group on Tuesday too.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "doubtful", injuryNote: "Wed Sep 9, matchday — the tightness has eased, and the matchday previews put him back in the XI on the right. Gakpo missed Tuesday's session with muscle tightness, a precaution per Paul Joyce and the Echo, and by Wednesday morning SI and Opta Analyst had both restored him to the right flank to make room for Barcola on the left. The case for him is the season so far: a goal and three assists in three league games per Opta, both of Isak's Ipswich goals from his passes, VAVEL's 0.45 expected assists per 90. If he is not risked, Munoz keeps the right and Barcola's start becomes near-certain. Contracted to 2030, the City move dead since deadline day.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Wed Sep 9, matchday — three in three, one in thirteen in this competition, and leading a Liverpool European line without Salah for the first time since 2014-15. Isak scored a near-post drive and a left-footed finish inside nine minutes at Ipswich, both from Gakpo, a third flagged; VAVEL has him at 0.89 expected goals per 90 this season against 0.41 last. Every preview starts him because there is no other senior nine with Ekitike out. Across the halfway line Simeone says Alvarez will not start, so Isak's opposite number is David or Lee; Hancko, per The Hard Tackle, is the defender likeliest to step out and meet him", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Wed Sep 9, matchday — a European night he cannot be part of. Ekitike continues rehabilitation from the April Achilles rupture with no timeframe, 'Hugo will go later', December the earliest anyone has named; Rush The Kop reads his place in the Champions League squad as optimism for a return before late January. Isak, three league goals in three, leads the line in his absence, with Gakpo restored to the right to supply him; three home games in seven days, none within Ekitike's reach.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Wed Sep 9, matchday — still no preview that names him, even with a European bench two senior names lighter. Gakpo's Tuesday tightness briefly opened a flank, but the previews restore him to the right with Barcola on the left, so Ngumoha stays where he was at Ipswich, an unused substitute, Koumas the stoppage-time forward change instead. As an under-21 he needed no registering for either squad list, which keeps him eligible for everything. The Carabao Cup tie against Tottenham on the 15th, the third home game in seven days, is the realistic start.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Wed Sep 9, matchday — left off the Champions League list, he watches the European night from outside. Chiesa, a back problem now rather than a muscle one, misses Atletico whatever the diagnosis, and his return to group training is set for the September international break per Iraola, which closes Fulham, the Tottenham cup tie and Bournemouth too; Rush The Kop guesses Manchester City on 11 October for a first matchday. The flank he would rejoin is reshuffled without him, Barcola tipped to start on the left and Gakpo restored to the right. His father closed off the Serie A talk on deadline night.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Wed Sep 9, matchday — back to the bench as the previews restore Gakpo to the right. Munoz, two league starts on this flank and a debut goal against Forest, keeps the shirt only if Gakpo's tightness resurfaces; SI and Opta Analyst both start Gakpo wide right with Barcola on the left, and Rush The Kop still expects Barcola on the bench. FotMob's 6.8 at Portman Road, SI noting a third different right-sided starter in three games. In since June on a six-year deal to 2032, a World Cup winner with Spain at twenty-two.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
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
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Wed Sep 9, matchday — tipped for a first Liverpool start, on the left, on a Champions League night at Anfield. SI and Opta Analyst both begin Barcola on the left flank for the opener against Atletico, a competition he has won twice with PSG; the £106m rising to £123m signing had only a debut off the bench at Ipswich, and Iraola has said the sole caveat is the pre-season minutes he never had after a World Cup summer. Rush The Kop still expects the bench for lack of match fitness. Second on the club's list behind Isak, No. 29, and a first Anfield appearance either way.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  focus: "Matchday at Anfield: Iraola takes charge of his first Champions League night as Liverpool host Atletico Madrid, Barcola in line for a first start and the Reds unbeaten but sixth in the league",
  credit: "Plate · Daily edition",
  generatedAt: "2026-09-09T09:00:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Morning pass (Wed 9 September): matchday. Atletico at Anfield tonight, 8pm, Iraola's first Champions League
  // match. No game and no Liverpool ruling-out since Friday, table byte-identical from ESPN. Lead rotated off
  // the evening's Mac Allister-contract anchor onto the matchday itself: the Opta and SI previews landing the
  // team news (Barcola tipped for a first start, Gakpo in form and shifted right), and the two live splits,
  // right-back (Opta prefers Frimpong, SI keeps Araujo) and Atletico's nine (Simeone says Alvarez will not
  // start; SI's matchday XI recalls him, Opta keeps Lee). Beneath it: Iraola 'under serious pressure' with
  // Hughes gone, Salah's managerless Trabzonspor chasing Richarlison, and the Mac Allister contract carried
  // down. A matchday preview is not a photographable moment under STEP 7.5, so no Track 2 request; plate
  // carried and generatedAt re-stamped (COVER-00001).
  // Evening pass (Tue 8 September): no match, no Liverpool ruling-out, table byte-identical from ESPN. The lead
  // moved at the 1pm press conference: Mac Allister said the club is 'not in a position' to renew him, that he is
  // 'very, very sad', that 'there were options to leave this summer' and that he has not spoken to Iraola about it;
  // Iraola said there is 'still a lot of time'. Beneath it, Gakpo missed the afternoon session with muscle
  // tightness (a precaution, per Joyce) while Gomez trained fully for the first time in a month; Iraola said
  // Barcola is 'ready to play more minutes'; Simeone said Alvarez will not start; Opta's model gives Liverpool 53%;
  // the club announced a £300m Turkish Airlines shirt deal from 2027-28. A press-conference admission is not a
  // photographable moment under STEP 7.5, so no Track 2 request; the Hughes plate carries over, generatedAt re-stamped.
  // Morning pass (Tue 8 September): quiet cycle, no match since Friday, no new injury, table static on the
  // eve of the Atletico opener. Lead rotated off Monday's Sorloth/Ortiz team-news anchor onto the matchday-eve:
  // Iraola's 1pm press conference and first European night, Szoboszlai's TNT sit-down with Gerrard ('it has to
  // change'), the settled Tuesday previews (Barcola £123m full debut, Gravenberch pivot) and Iraola 'under
  // serious pressure' three games in with Hughes gone. Alvarez scored in Tuesday training and stays available
  // (the fotmob/Goal 'ruled out' items are the Sep 2025 archive, not used). Nothing photographable under
  // STEP 7.5, so no Track 2 request; the Hughes plate carries over and generatedAt is re-stamped (COVER-00001).
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
      "Anfield hosts its first European night under Andoni Iraola on Wednesday, Atletico Madrid the visitors for the Champions League opener at 8pm, and the Spaniard takes charge of his first match in the competition as a manager. The Opta supercomputer makes Liverpool 53 per cent favourites, though Iraola is winless in four against Diego Simeone's Atletico, and Liverpool have never lost a home European Cup or Champions League opener, the last three all 3-2. The matchday previews land the team news around a first Liverpool start for Bradley Barcola on the left, with Cody Gakpo, back in form after a goal and three assists in three league games, shifted to the right; the two live questions are right-back, where Opta prefers Frimpong and SI keeps Araujo, and Atletico's centre-forward, with Simeone saying Julian Alvarez will not start and SI's matchday XI recalling him beside Alex Baena. It is Liverpool's first Champions League campaign without Mohamed Salah since 2014-15. Atletico arrive off a 3-0 collapse at Bilbao, without the injured Sorloth and the suspended Ortiz; Liverpool are sixth and unbeaten in the league, with Fulham to come on Saturday.",
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
// Last refresh: 2026-09-09 (Wednesday morning) — re-fetched from ESPN's endpoint and byte-identical
// to the previous table: no Premier League game has been played since Sunday (this is a Champions League
// week), so the round-3 table stands. Manchester City and Arsenal both perfect on nine; Chelsea fourth on six
// after Arsenal's 2-1 win at the Emirates; Brentford, Liverpool, Newcastle, Everton and Leeds all on five,
// Liverpool sixth on plus two. Fulham (Anfield, the 12th) still pointless with Coventry and Tottenham in
// the relegation stripe; Bournemouth (away, the 20th) fifteenth on two. Regenerated from ESPN on Tuesday evening, no PL game since Friday.
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
  generatedAt: "2026-09-09T09:00:00Z",
  overview:
    "The Premier League pauses for the Champions League, so nothing in the table has moved since Sunday and nothing can until Saturday, with the football this week played in Europe. Manchester City and Arsenal stay perfect on nine, level on goal difference at plus five with City ahead on goals scored, four clear of a chasing pack knotted tight: Brentford, Liverpool, Newcastle, Everton and Leeds all on five, and where Liverpool, Newcastle and Everton share plus two it is goals scored that splits them. Chelsea sit fourth on six after a first defeat under Xabi Alonso, a point above the Reds, and Hull, third on seven and unbeaten on their return to the division, remain the surprise of the opening month. At the foot, Fulham, the visitors to Anfield on Saturday, are still pointless alongside Coventry and Tottenham in the relegation stripe, and Bournemouth, the trip on the 20th, sit fifteenth on two. Every side has played three; the European line cuts straight through the five-point knot and will not move again until the weekend.",
  teams: {
    "Liverpool": "Sixth on five and unbeaten, one of five level, separated from Brentford above by a goal of difference and from Newcastle below by goals scored. The next league points are Fulham on Saturday, three days after Atletico.",
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
    "Fulham": "Nineteenth and pointless after three defeats, and the fixture Iraola said would be harder to prepare for than Wednesday, with the Spurs cup tie two days after it. At Anfield on Saturday the 12th.",
    "Coventry": "Bottom, pointless, minus five, three defeats on their return to the division.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The First Anthem.",
    byline: "Opta Analyst / Liverpool FC",
    dateline: "Anfield · 9 September",
    category: "Football News",
    body:
      "There is a version of Andoni Iraola that exists only in the imagination of the man himself, seven or eight years into a coaching life that began at Antequera in the Spanish third tier, standing in the home dugout at Anfield as the anthem plays before a Champions League night. Tonight he gets to meet him. Atletico Madrid are the visitors at eight, the same opponent Liverpool opened against a year ago, and the Spaniard takes charge of his first match in the competition as a manager, having reached only its qualifying rounds before. The omen is with him, no home European opener ever lost in twelve, the last three all 3-2. The history is not, no win in four against the man in the other dugout. Between the two sits a floodlit evening the whole building has been waiting for."
  },
  {
    n: "02",
    headline: "The Dream And The Deadline.",
    byline: "Anfield Watch / Yahoo Sports",
    dateline: "Anfield · 8 September",
    category: "Manager",
    body:
      "It is a strange thing to reach the summit of your profession and be told, in the same week, that your position is precarious. Iraola arrives at his first European night three games into a reign already described as being under serious pressure, not for what has happened on the grass but for what happened above it: Richard Hughes, the sporting director who chose him, has gone to Al-Hilal, and the man who replaces Hughes will owe the appointment nothing. So the coach who asked his players to run for fifty-five minutes and be 'dead' rather than spare themselves is auditioning twice at once, for a European result and for a boss not yet hired. Friday's win at Ipswich, the first of his tenure, bought a little quiet. A good Anfield night would buy more."
  },
  {
    n: "03",
    headline: "One Back, One Holding His Breath.",
    byline: "Liverpool Echo / This Is Anfield",
    dateline: "AXA Training Centre · 8 September",
    category: "Injuries",
    body:
      "The training ground gave and it took. Joe Gomez, gone since a muscle injury in the Sunderland friendly in July, trained fully with the group for the first time in more than a month, a fourth senior centre-back walking back into a department that had been running on two; the club still files him as nearing the end of his recovery, which is a careful way of saying not yet. Cody Gakpo, meanwhile, felt tightness before the same session and watched from the side, a precaution in the reporting of Paul Joyce and the Echo, though the man behind both Isak goals at Ipswich is not one a manager gambles with lightly. By morning the previews had restored him to the right. The European bench, minus the ineligible Endo and Chiesa, is two names lighter than Saturday's regardless."
  },
  {
    n: "04",
    headline: "Trabzon, Where The Legend Landed.",
    byline: "Liverpool.com / The National",
    dateline: "Trabzon · 8 September",
    category: "Farewells",
    body:
      "Some 2,500 miles from Anfield, in a city on the Black Sea coast, Mohamed Salah is discovering that a new club can be as chaotic as it is adoring. Trabzonspor, who greeted him this summer as the biggest signing in their history, are already without a head coach after parting with Fatih Tekke, and they spent this week chasing Tottenham's Richarlison before Friday's Turkish transfer deadline, the one that ran on after England's shut. Salah has answered the only way he knows, scoring in each of his first three league games. Tonight Liverpool begin a Champions League campaign without him for the first time since 2014-15, his name still atop their competition records for appearances, goals and assists, an absence the club will feel most on exactly these evenings."
  },
  {
    n: "05",
    headline: "The Wound They Bring.",
    byline: "SI / Opta Analyst",
    dateline: "Anfield · 9 September",
    category: "Tactics",
    body:
      "Atletico Madrid come to Anfield in their fourteenth consecutive Champions League season and off one of the worst forty-five minutes of Simeone's long tenure, three goals shipped at Bilbao on Saturday, two of them inside the first three minutes of the second half, the first time in a single La Liga match they have done that. The team sheet carries its own argument: Simeone said Julian Alvarez will not start, and SI's preview recalled him anyway, so Liverpool must plan for both a Lee-led line and the Argentine who scored ten in this competition last year. The mechanism to fear is Baena's, dropping off the front to draw a centre-back and free a runner behind him, the exact break Liverpool have leaked more than anyone since last August. And Marcos Llorente, four goals in two Anfield visits, will fancy the trip whatever shape it takes."
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-09T09:00:00Z",
  summary:
    "Wednesday, and Anfield gets its first European night under Andoni Iraola: Atletico Madrid arrive for the Champions League opener at eight, and the Spaniard, a Champions League debutant in the dugout, meets the manager he has never beaten in four attempts. The Opta supercomputer makes Liverpool 53 per cent favourites and leans on a record that has never once broken, no home European opener lost in twelve, the last three all 3-2, while Iraola leans against his own, winless against Simeone with only Imanol Alguacil a worse matchup. The team news has firmed overnight rather than settled: SI and Opta Analyst both tip Bradley Barcola for a first Liverpool start, with Cody Gakpo, a goal and three assists already this season, moved to the right, and the two open questions are the right-back, where Opta prefers Frimpong and SI keeps Araujo, and Atletico's centre-forward, where Simeone insists Julian Alvarez will not start and SI's matchday eleven recalls him anyway. It is Liverpool's first Champions League campaign without Mohamed Salah since 2014-15. Beneath the tie sit the season's slower currents: Iraola reported to be under scrutiny with Richard Hughes gone to Al-Hilal and a new sporting director still to convince, Salah settling at a managerless Trabzonspor, and Alexis Mac Allister playing on for a contract Liverpool have not offered; the league table, sixth and unbeaten on five, waits until Fulham on Saturday.",
  keyTopics: [
    {
      title: "Anfield's First European Night Under Iraola: Atletico At Eight, And A Manager He Has Never Beaten (Opta Analyst / Liverpool FC, today)",
      detail:
        "Wednesday's opener, kicking off at 8pm on TNT Sports 1, is Andoni Iraola's first match as a manager in the Champions League, a competition he played three times for Athletic Club in 2014-15 and reached only the Europa League qualifiers in as a coach. He arrives having called it a 'special night' and having told his players he would rather they ran for fifty-five minutes and were 'dead' than saved their legs. The record behind him is spotless, no home European Cup or Champions League opener ever lost, ten wins and two draws, the last three all finishing 3-2; the record in front of him is not, winless in four against Diego Simeone's Atletico, three defeats and a draw.",
      category: "matches",
    },
    {
      title: "Barcola In Line For A First Start, Isak Leading A European Line Without Salah For The First Time Since 2014-15 (SI / Opta Analyst, today)",
      detail:
        "The matchday previews, written overnight, converge on a first Liverpool start for Bradley Barcola on the left, the £106m rising to £123m summer signing given his moment in a competition he has won twice with PSG, with Cody Gakpo shifted to the right after a goal and three assists in three league games. Alexander Isak, three goals in three, leads the line, and Opta notes he does so in Liverpool's first Champions League campaign without Mohamed Salah since 2014-15, the Egyptian still the club's competition record-holder for games (83), goals (47) and assists (19). Wirtz, without a goal contribution in three league games, keeps the ten.",
      category: "matches",
    },
    {
      title: "Two Team-News Splits Into Kickoff: Frimpong Or Araujo At Right-Back, And Alvarez On Simeone's Bench Or SI's Sheet (Yahoo / SI, today)",
      detail:
        "Two selections divide the previews. At right-back, Opta Analyst restores Jeremie Frimpong, whose recovery pace is the specific answer to Ademola Lookman cutting in from the left, while SI keeps Ronald Araujo, whose first Liverpool start at Ipswich brought nine duels won from ten. At centre-forward for Atletico, Diego Simeone said plainly on the Anfield pitch on Tuesday that Julian Alvarez, denied a summer move to Barcelona and whistled by his own fans at Bilbao, would not start, only 'help at some point', yet SI's matchday eleven recalls him beside Alex Baena with Cristian Romero in for Hancko; Opta keeps Lee Kang-in up top instead.",
      category: "tactics",
    },
    {
      title: "Iraola 'Under Serious Pressure' Three Games In, With Hughes Gone And A New Sporting Director To Convince (Anfield Watch / Yahoo, today)",
      detail:
        "The backdrop to the European night, revived on Tuesday: with Richard Hughes, the sporting director who hired him, confirmed at Al-Hilal, Iraola is reported to be under scrutiny only three games into his reign, because whoever succeeds Hughes will not have staked a reputation on the appointment and may not see the Spaniard as his own man. Friday's first win at Ipswich eased it a little; Liverpool opened with back-to-back draws against Newcastle and Forest before it. The club said on 5 September that the search for a successor was under way, and nobody has yet been named.",
      category: "general",
    },
    {
      title: "Atletico Arrive Off A Bilbao Collapse: 14th Straight Champions League, But Three Goals Shipped In A Second-Half Blur (Opta Analyst / Al Jazeera, today)",
      detail:
        "The visitors are Champions League regulars, this their 14th consecutive campaign and one of only six sides ever-present since 2013-14, semi-finalists last season before an Arsenal defeat. But they come to Anfield in trouble: a 3-0 loss at Athletic Club on Saturday, the first time in a single La Liga match they have conceded twice inside the first three minutes of a second half, per Opta. Marcos Llorente, though, has a particular Anfield habit, four goals in two visits, more than at any ground bar the Metropolitano, and Baena, three in his first three league games, drops between the lines onto the fast-break weakness Liverpool have not solved.",
      category: "tactics",
    },
    {
      title: "Salah's New Life: Trabzonspor Without A Manager And Chasing Richarlison Before Friday's Turkish Deadline (Liverpool.com / The National, today)",
      detail:
        "Mohamed Salah's first weeks in Turkey have been eventful off the pitch as much as on it: Trabzonspor are without a head coach after parting with Fatih Tekke following a heavy European exit to Ferencvaros, and the club are pushing to sign Tottenham's Richarlison before the Turkish window closes on Friday, the deadline that ran past England's. Salah, 34 and on a reported wage north of £14m a year, has already scored in each of his first three league appearances. His absence is the frame for Liverpool's own European night; theirs is the first Champions League squad list without him in over a decade.",
      category: "general",
    },
    {
      title: "Gomez Back In Full Training, But Liverpool Take A Two-Names-Lighter Bench Into Europe (This Is Anfield / Liverpool Echo, today)",
      detail:
        "Joe Gomez trained fully with the group on Tuesday for the first time in over a month, six weeks on from the muscle injury in the Sunderland friendly, though the club's own note has him 'nearing the end of his recovery' rather than available, and Fulham on Saturday is the likelier first matchday. The European squad is thinner than the league one regardless: Wataru Endo and Federico Chiesa were both left off the 25-man Champions League list, so Wednesday's bench is two senior names shorter than the weekend's, with Hugo Ekitike, Conor Bradley and Giovanni Leoni still out and no date between them.",
      category: "injuries",
    },
    {
      title: "Gakpo Trending Back Toward The XI After Tuesday's Tightness, The Wing Question Resolved For Now (Liverpool Echo / SI, today)",
      detail:
        "The muscle tightness that kept Cody Gakpo out of Tuesday's session was reported by Paul Joyce and the Echo's Ian Doyle as a precaution, and the overnight previews read it that way, restoring him to the eleven on the right to make room for Barcola on the left. His case is the season so far: both Isak goals at Ipswich came from his passes, and VAVEL has him at 0.45 expected assists per 90. Should he not be risked, Victor Munoz, two league starts and a debut goal, keeps the right and Barcola's start becomes near-certain.",
      category: "injuries",
    },
    {
      title: "Mac Allister Plays On For A Contract Liverpool Have Not Offered (Sky Sports / Liverpool FC, yesterday)",
      detail:
        "The story that led Tuesday evening carries into matchday as a background hum: Alexis Mac Allister, told through his agent that Liverpool are not ready to extend his 2023 deal while Szoboszlai and Gravenberch were renewed, keeps the pivot beside Szoboszlai in SI's Wednesday eleven, two years still to run and no talks held with Iraola. The manager called him important and said there is plenty of time yet. The football has not wavered, 84 minutes and a 7.5 at Ipswich, and the previews start him for the opener.",
      category: "general",
    },
    {
      title: "The Table Holds: Sixth And Unbeaten On Five, Fulham The Only League Business This Week (ESPN, yesterday)",
      detail:
        "Nothing in the Premier League table has moved since Sunday and nothing can until Saturday: Liverpool sit sixth and unbeaten on five points, one of five sides level, four behind the perfect nines of Manchester City and Arsenal, a point behind Chelsea in fourth, with Hull the early surprise in third. Fulham, nineteenth and pointless, visit on Saturday in a fixture Iraola has said is harder to prepare for than Wednesday because the Tottenham cup tie follows two days later; Bournemouth, fifteenth, is the trip on 20 September.",
      category: "matches",
    },
  ],
  sources: [
    "Opta Analyst",
    "SI",
    "Liverpool FC",
    "Anfield Watch",
    "Al Jazeera",
    "Liverpool Echo",
    "This Is Anfield",
    "Liverpool.com",
    "The National",
    "Sky Sports",
    "ESPN",
    "VAVEL",
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
  generatedAt: "2026-09-09T09:00:00Z",
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
    "By kickoff the only real doubt about Atletico is at the top of their own team sheet. Simeone said flatly on the Anfield pitch on Tuesday that Julian Alvarez, denied a summer move to Barcelona and whistled by his own supporters at Bilbao, would not start, only 'help at some point'; yet the matchday previews have not all obeyed him, SI recalling the Argentine beside Alex Baena while Opta Analyst keeps Lee Kang-in up top in a 4-2-3-1. Everything else is settled. Alexander Sorloth, out with a thigh problem, and the suspended Arnau Ortiz, serving a one-match ban carried two years from a red card as a Slask Wroclaw substitute in a 2024 Conference League qualifier, are both left behind; the 24-man list carries Alvarez, Jonathan David, Baena, Cardoso and Le Normand. They arrive wounded, beaten 3-0 at Athletic Club on Saturday, the first time in a single La Liga match they have conceded twice inside the first three minutes of a second half, and they sit sixth in La Liga on seven points from four. The history reads against them too: Atletico have lost each of the last three to Liverpool in this competition and have never lost four running to one opponent in it, while last September's meeting here went 3-2 to the Reds on a 92nd-minute Van Dijk header. But this is their 14th consecutive Champions League campaign, semi-finalists last season, and Marcos Llorente, four goals in two Anfield visits, has always fancied the trip.",
  shape:
    "The uncertainty is personnel, not pattern. Opta Analyst draws a 4-2-3-1, Barrios and Hjulmand screening in front of the back four, Giuliano Simeone, Lookman and Baena across a band of three and Lee alone up top; SI's variant is closer to a 4-4-2, Alvarez recalled beside Baena and Cristian Romero in for Hancko at centre-back. Whichever it is, the mechanism is the same, and it is Baena's: he drops off the front, pulls a centre-back into midfield with him and springs a runner through the seam he vacates, the false-nine move that undoes back fours on the break. Out of possession Atletico tuck the flanks in and screen the first pass into a compact block, inviting Liverpool to play around a low line that Mac Allister called hard to break down. Grimaldo overlaps hard from left-back; Llorente pushes on from the right whenever the game stretches, which at Anfield it will.",
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
      role: "Centre-forward (bench, per Simeone)",
      threat: "49 goals in 107 Atletico games since his £81m move from Manchester City in 2024, per DaveOCKOP, and none yet this season. The subject of a 150m-euro Real Madrid bid Atletico rejected in June, per AFP, and of a summer push to join Barcelona that the closed window ended; whistled by his own supporters at Bilbao on Saturday, one shot, saved by Simon. He travels in the 24, and on Tuesday evening Simeone said he 'is getting better' but will not start, only 'help at some point in the game'; Opta Analyst notes his team-high ten Champions League goals last season, the number that makes a second-half cameo the tie's live threat.",
      source: "DaveOCKOP / AFP / Atlético de Madrid / Opta Analyst",
    },
  ],
  predictedXI: [
    "Oblak", "Llorente", "Pubill", "Hancko", "Grimaldo",
    "Barrios", "Hjulmand", "G. Simeone", "Baena", "Lookman", "Lee",
  ],
  absentees: [
    { name: "Arnau Ortiz", issue: "Suspended: one-match UEFA ban carried from a red card for Slask Wroclaw in an August 2024 Conference League qualifier (per Mundo Deportivo / This Is Anfield)", status: "Out" },
    { name: "Alexander Sørloth", issue: "Thigh injury, left out of the 24-man travelling squad (per SI / Atlético de Madrid)", status: "Out" },
    { name: "Julián Álvarez", issue: "Travels, and Simeone said on Tuesday he will not start; SI's matchday XI recalls him beside Baena, Opta keeps Lee (per SI / Opta Analyst)", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-05", opponent: "Athletic Bilbao", home: false, score: "0-3", result: "L", note: "Better side before the break, Lee and Barrios hitting the woodwork, then Nico Williams (46) and Navarro (48) in three minutes and Sancet (90). Romero's debut from the bench; Alvarez on after illness, whistled by his own fans. A first defeat of the season." },
    { date: "2026-08-29", opponent: "Sevilla", home: false, score: "3-1", result: "W", note: "Baena twice and Lookman in a first half that settled it; Sierra pulled one back. Alvarez left out of the XI." },
    { date: "2026-08-23", opponent: "Villarreal", home: true, score: "2-2", result: "D", note: "Pubill and Giuliano Simeone scored; Moreno and Mikautadze penalties levelled it. Le Normand sent off, Alvarez jeered by the home crowd." },
    { date: "2026-08-19", opponent: "Málaga", home: true, score: "2-0", result: "W", note: "Lee Kang-in on debut and Baena, both in the second half, in the season opener." },
  ],
  liverpoolAngle:
    "The tie turns on the two seams both defences leave. Atletico's threat runs through Baena dropping into a false nine, and that lands on Liverpool's own worst number, which has not moved: nine fast-break goals conceded since last August, the most in the Premier League per Opta, off a back four that has kept one clean sheet in three. So the private contest is Lookman cutting in from the left against whichever right-back Iraola picks, Frimpong's recovery pace the specific answer Opta's eleven prefers, Araujo's duel-winning the one SI keeps; Gomez, back in full training on Tuesday but not passed fit, is only the third body in sight. The Hard Tackle moves the fight to the middle, Isak against Hancko for the pin, Wirtz against Hjulmand for the space behind the screen. The forward question the dossier has to hedge is Atletico's, not Liverpool's: Simeone said Alvarez will not start, yet SI recalls him, so Liverpool must prepare for both a Lee-led line they can press high and an Alvarez cameo that is the tie's live danger, ten Champions League goals last season the reason. Liverpool have their own doubt at the top, Gakpo's tightness having briefly put the supplier of every Isak goal this season at risk before the previews restored him to the right; behind Isak there is no senior nine at all with Ekitike out, so an early Atletico goal would test a European bench two names shorter than the league one. Bilbao is the model to fear and to hope for: Atletico controlled a half there and lost the game in five minutes, and a side that has led for only parts of this season should want the first goal at Anfield more than most. The predicted XI here is Opta Analyst's, a 4-2-3-1 with Alvarez on the bench by his manager's own account; SI's variant recalls him and Romero. Ortiz and Sorloth are out.",
  modelLine: { source: "Opta Analyst supercomputer, 8 September", liverpool: 53, draw: 23.4, opponent: 23.5, note: "Pre-match simulation published on Tuesday morning. Liverpool have never lost a home European Cup or Champions League opener (W10 D2); Iraola is winless in four against Simeone's Atletico (D1 L3). A model, not a market." },
  sources: ["Opta Analyst", "SI", "Atlético de Madrid", "Yahoo Sports", "Al Jazeera", "DaveOCKOP", "Liverpool FC", "The Hard Tackle", "Mundo Deportivo", "EFE", "Football Espana", "MARCA", "AFP", "ESPN"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-09T09:00:00Z",
  competition: "PL",
  played: 3,
  headline:
    "Liverpool take a first clean sheet and a striker in form into their European opener, and the underlying numbers still describe two different sides. The striker is one: VAVEL has Isak at 0.89 expected goals per 90 in the league this season against 0.41 under Slot, three goals in three, both of the Ipswich finishes from Gakpo, who has a goal and three assists in three games. The team is the other: across three league games the mixed-source total is 5.00 expected goals for and 4.46 against, six scored and four conceded, and Liverpool were out-created in two of the three, FotMob's pre-shot model at Portman Road giving Ipswich 0.73 to 0.66 before Sofascore's post-shot model reversed it to 1.70 to 0.47, the gap sitting almost exactly on Isak's two finishes. The pattern the analysis keeps returning to is the break: nine fast-break goals conceded since last August, the most in the league, and Baena dropping into a false nine is the shape built to exploit it tonight. Liverpool have led for eighty-four minutes all season, every one of them on Friday, and Wednesday asks whether that first clean sheet was a turn or a night. Opta's match tools are on the club site but publish no single expected-goals figure, so FotMob's and Sofascore's stand.",
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
    "This is Andoni Iraola's first match as a manager in the Champions League proper, per Opta Analyst; he played three games in the competition for Athletic Club in 2014-15 and, as a coach, had reached only its qualifying rounds, with AEK Larnaca in 2018-19.",
    "Atletico arrive for their 14th consecutive Champions League campaign, one of only six clubs ever-present since 2013-14 alongside Real Madrid, Barcelona, PSG, Bayern Munich and Manchester City, per Opta Analyst; they have lost each of the last three meetings with Liverpool and have never lost four running to a single opponent in the competition.",
    "Iraola is winless in four against Simeone's Atletico, three defeats and a draw, and of managers he has faced four or more times only Imanol Alguacil (83%) has a higher win rate over him, per Opta Analyst; Marcos Llorente has four goals in two Anfield visits, more than at any ground bar the Metropolitano.",
    "Cody Gakpo has been directly involved in four Premier League goals already this season, one goal and three assists, per Opta Analyst, both of Isak's Ipswich finishes among them; it is Liverpool's first Champions League campaign without Mohamed Salah, their competition record-holder for games, goals and assists, since 2014-15.",
  ],
  sources: ["FotMob", "Sofascore", "SI", "Sporting News", "Opta Analyst", "Liverpool FC", "ESPN", "Sports Mole", "VAVEL", "Liverpool Echo"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-09T09:00:00Z",
  headline:
    "Liverpool enter Europe with a closed squad and a bench two names shorter than the league allows, Endo and Chiesa both left off the 25-man Champions League list. The week's one movement ran in their favour: Gomez trained fully on Tuesday for the first time since July, a fourth senior centre-back back in sight, while Gakpo's midweek tightness eased enough for the matchday previews to restore him to the right. Isak is still the only senior nine, Ekitike given no date, and the pivot that holds the shape is played by a man the club has told, through his agent, that no new deal is coming. Right-back stays a two-body choice between Araujo and Frimpong, with Gomez the third once he is passed fit. Fulham on Saturday and Tottenham in the cup two days later, Iraola has said, will test the depth harder than tonight does.",
  minutesNote:
    "Premier League minutes are not published here yet. Three league games have been played and no reliable per-player league minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "No timeframe; December at the earliest", note: "'Especially Hugo will go later,' Iraola said on Thursday, and nothing on Friday changed it. Registered in the Champions League squad regardless, because only three changes are allowed after the league phase. Isak's three in three make the wait easier to bear; Gakpo finished Friday's game at centre-forward, which is the fallback.", source: "Liverpool FC / Liverpool Offside" },
    { name: "Giovanni Leoni", issue: "ACL (September 2025)", expected: "Rejoins group training during the September international break", note: "Iraola's Thursday plan has him back with the squad during the break after nearly a year out; no matchday date. Named in the Champions League squad.", source: "Liverpool FC" },
    { name: "Conor Bradley", issue: "Knee", expected: "No timeframe", note: "'Probably Conor will go later,' Iraola said on Thursday. His absence is why Araujo at right-back on Friday was news: it is the first time since August the department has had a second fit body.", source: "Liverpool FC" },
    { name: "Federico Chiesa", issue: "Muscle (Como friendly, August)", expected: "Rejoins group training during the September international break", note: "Out until the break per Iraola and left off the Champions League list, so Wednesday against Atletico is not in reach either way. Stays at the club after his father closed off the Serie A talk on deadline night.", source: "Liverpool FC / Liverpool Offside" },
  ],
  returning: [
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 25 July)", status: "Trained fully with the group on Tuesday for the first time in over a month; a doubt for Wednesday, Fulham on Saturday the first realistic matchday", note: "Joyce and the Echo both confirm the full session; the club's team-news note has him 'nearing the end of his recovery', which stops short of available. The Van Dijk and Jacquet pairing holds for Atletico. His return gives a fourth senior centre-back and, now Araujo has played there, a third right-back option.", source: "Liverpool Echo / The Times / Liverpool FC" },
    { name: "Cody Gakpo", issue: "Muscle tightness, felt before Tuesday's session", status: "Precaution only; the matchday previews restore him to the right", note: "A goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes. SI and Opta Analyst both put him back in the XI on the right, with Barcola on the left; if he is not risked, Munoz keeps the flank and Barcola's start becomes near-certain.", source: "Liverpool Echo / SI / Opta Analyst" },
  ],
  startersLastMatch: {
    match: "Ipswich Town 0-2 Liverpool, 4 September",
    xi: ["Alisson", "Araujo", "Jacquet", "Van Dijk", "Kerkez", "Szoboszlai", "Mac Allister", "Munoz", "Wirtz", "Gakpo", "Isak"],
    changes: "One change from the Forest side: Araujo in for Frimpong at right-back, a first Liverpool start. Mac Allister kept the pivot with Szoboszlai despite most previews restoring Gravenberch, who came on for Isak at 64 alongside Barcola (for Munoz) on his debut; Nyoni (84, for Mac Allister) and Koumas (90+1, for Wirtz) followed. Unused: Mamardashvili, Frimpong, Tsimikas, Endo, Ngumoha.",
    source: "SI / FotMob / Liverpool FC",
  },
  depthRisk: [
    { position: "Right-back", level: "high", detail: "Two available bodies, Araujo (started Friday, 7.7, nine duels from ten) and Frimpong (fit, dropped; Opta Analyst's eleven restores him), and no specialist behind them: Bradley no date, Gomez back in full training as of Tuesday, Szoboszlai the in-game option, Mabaya the registered academy name. The free-agent market is the only one open, which is why Dani Carvajal's name surfaced on Sunday; it is a pundit's line, not a talk, and Caught Offside notes the loan attempt for Malo Gusto failed before the deadline. Still one injury from Endo or Szoboszlai filling in, and Endo is not in the European squad." },
    { position: "Centre-back", level: "high", detail: "Van Dijk and Jacquet, with Araujo now needed at right-back as well, which thins the cover here even as it thickens it there. Jacquet completed his first full ninety on Friday and Iraola admitted a second-half doubt he chose to ride out. Gomez trained fully on Tuesday for the first time in a month and is a doubt rather than an absentee; Leoni not with the group until the break. Until Gomez is passed fit, one injury and Endo plays centre-half in the league, and nobody senior does in Europe." },
    { position: "Centre-forward", level: "high", detail: "Isak alone, three goals in three, with Ekitike given no timeframe. The fallback was Gakpo, who finished Friday's game there, and Gakpo missed Tuesday's session with muscle tightness, so for one night the department may have no fallback at all; three games in seven days is the first stretch that will test whether Isak can start all of them. Atletico's own nine, Alvarez, will start on the bench per Simeone." },
    { position: "Central midfield", level: "medium", detail: "Mac Allister, Gravenberch, Szoboszlai and Endo, with Nyoni pushing and given twenty minutes on Friday. Endo is not in the Champions League squad, so the European depth is one body shorter than the league's. The depth is not the question here; the contract is, after Mac Allister said on Tuesday that the club will not renew him, with two years left." },
  ],
  sources: ["Liverpool FC", "Liverpool Echo", "The Times", "SI", "FotMob", "Sports Mole", "Liverpool Offside", "Sporting News", "Rush The Kop", "Opta Analyst", "DaveOCKOP", "Sky Sports"],
};


export const SEASON_PROJECTION = {
  generatedAt: "2026-09-09T09:00:00Z",
  played: 3,
  points: 5,
  pointsPerGame: 1.67,
  projectedPoints: 63,
  projectedFinish: "Europa League places on current pace",
  headline:
    "Five points from three, 1.67 a game, a projected 63 and a Europa League par: the arithmetic is unmoved and, on a European week, largely beside its own point. Wednesday's Champions League tie sits outside this league projection but frames the load behind it, falling between Fulham on Saturday and a Tottenham cup tie the Tuesday after, so the two league games that could lift the pace toward a top-five rhythm before Manchester City on 11 October are the ones most exposed to rotation. Three games remain a sample small enough that the same numbers read as a survival pace a fortnight ago; the honest frame is the fixtures, and the next two league opponents are nineteenth and fifteenth.",
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
