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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Tue Sep 8, evening — the captain's evening is somebody else's contract and somebody else's hamstring. Van Dijk trained as normal on Tuesday while Gakpo sat out with tightness and Gomez rejoined the group, and he goes into Wednesday as the man Opta remembers: the 92nd-minute header that beat Atletico here a year ago, and, per Opta Analyst, still no goal this season for a defender whose bullet header is treated as inevitable. His deal runs only to 2027, which on the day Mac Allister went public about his own is worth noting; the AC Milan interest was knocked back without a bid. Eighty-one minutes protecting a first lead of the season on Friday, FotMob's 7.7, a first clean sheet since April, and Alvarez, per Simeone, will not start against him.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Tue Sep 8, evening — back in the group, and this time the cameras saw it. Gomez trained with the full squad on Tuesday afternoon for the first time in more than a month, Joyce confirming it, part of a twenty-man outfield group that was missing Gakpo instead; six weeks on from the muscle injury in the Sunderland friendly on 25 July. The club's own team-news note has him 'nearing the end of his recovery', which is short of available, and Rush The Kop still pencils Fulham on Saturday as the first matchday, so the Van Dijk and Jacquet pairing holds for Atletico and the bench is where he might first reappear. A fourth senior centre-back, and with Araujo now a right-back by evidence, a third body there too. Iraola has not named him for Wednesday and nobody else has either.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Tue Sep 8, evening — the manager's endorsement, unprompted, on the eve of the tie. 'He's a player that I trust, definitely,' Iraola said of Kerkez at the Anfield press conference, 'I know him very well, I know what he can achieve,' a Bournemouth relationship carried into a European night; he played 'really well' on Friday, the manager added, and needs to improve 'like all the others, like I have to'. On the grass his sixth-minute recovery around halfway fed the Gakpo pass for Isak's opener, SI marked him 6.7 in a back four that kept a first clean sheet, and Giuliano Simeone, in SI's reading, is Wednesday's assignment rather than Grimaldo. First choice by a distance with Robertson gone and Tsimikas unused; if Gakpo's tightness keeps him out, the understanding in front of Kerkez changes to Barcola.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Tue Sep 8, evening — a Champions League debut on Wednesday, and the striker he was to face will start on the bench. Simeone said at Anfield on Tuesday that Alvarez 'is getting better' but that he does not see him starting, which leaves Jacquet, per SI's preview, meeting Jonathan David or Lee rather than the man who scored ten in the competition last season. He completed a first full ninety at Ipswich after 69 and 76 minutes in August, booked on 52, FotMob's 7.4, Iraola admitting a second-half doubt he chose to ride out. Gomez trained fully on Tuesday, the first time since July, so the cover behind Jacquet in Europe is no longer nobody, only not yet.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Tue Sep 8, evening — SI's eve-of-tie word for him is consistency, and the number is still nought. Wirtz goes into his first Champions League game under Iraola with no goal and no assist in three league matches, the Forest performance sandwiched, in SI's phrase, between forgettable games at Newcastle and Ipswich, where his 33rd-minute cross was turned in by Isak and flagged. He trained on Tuesday; Gakpo, who took both assists at Portman Road, did not, which if it holds makes Wirtz the senior creator on the pitch against a block Mac Allister called 'pretty low' and 'hard to break down'. Every preview keeps him at the ten.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
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
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "doubtful", injuryNote: "Tue Sep 8, evening — tightness in a muscle, and the one forward nobody was dropping is suddenly the one nobody can name. Gakpo felt the problem before Tuesday afternoon's session at the AXA Training Centre and sat it out, Paul Joyce and the Echo both reporting the absence as a precaution rather than a ruling-out, on the day Iraola told the press conference Barcola is 'ready to play more minutes'. The case for his presence was never stronger: a goal and three assists in three league games, per Opta, both of Isak's Portman Road goals from his passes, VAVEL's 0.45 expected assists per 90. If he is fit he starts, on whichever flank Barcola does not; if he is not, Munoz keeps the right. Contracted to 2030, the City move dead since deadline day.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Tue Sep 8, evening — the supplier of all three of his league goals missed training, and the striker he was measured against will start on the bench. Gakpo sat out Tuesday's session with muscle tightness, a precaution per Joyce, which leaves Isak, one goal in thirteen career Champions League games per Sports Mole, to face Atletico without the passer behind both Ipswich finishes unless the evening improves. Simeone, meanwhile, said Alvarez 'is getting better' but will not start, so the opposite nine is David, untested for them, or Lee. VAVEL has Isak at 0.89 expected goals per 90 this season against 0.41 last; every preview starts him because Ekitike has no date and the false-nine fallback is now the doubt. Hancko, per The Hard Tackle, is the defender likeliest to step out and meet him", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Tue Sep 8, evening — the striker's week begins with the man who feeds his replacement in doubt. Ekitike continues rehabilitation from the April Achilles rupture with no timeframe, 'Hugo will go later', December the earliest anyone has named; Rush The Kop reads his place in the Champions League squad as optimism for a return before late January. Isak, with three league goals in three, faces Atletico on Wednesday with Gakpo, who supplied all of them, missing Tuesday's training with tightness, and Gomez, back in the group the same afternoon, the only return of the day. Three home games in seven days, none of them within his reach.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Tue Sep 8, evening — a doubt above him in the queue for the first time this season, and still no preview that names him. Gakpo missed Tuesday's session with muscle tightness, which if it holds opens a flank; the reporting hands it to Munoz, with Barcola, 'ready to play more minutes' per Iraola, taking the other, and Ngumoha stays where he was at Ipswich, an unused substitute alongside Frimpong, Tsimikas, Endo and Mamardashvili, Koumas the stoppage-time forward change instead. Iraola's defence of him on the right still stands, the five-year contract is still unannounced, and as an under-21 he needed no registering for either squad list, which keeps him eligible for everything. The Carabao Cup tie against Tottenham on the 15th, the third home game in seven days, is the realistic start", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Tue Sep 8, evening — the Echo's Tuesday training report names him as the one still sidelined, a back problem now rather than a muscle one. Chiesa, off the Champions League list with Endo, misses Atletico whatever the diagnosis, and his return to group training is set for the September international break per Iraola, which closes Fulham, Tottenham in the cup and Bournemouth too; Rush The Kop guesses Manchester City on 11 October for a first matchday. On the day Gomez rejoined the group and Gakpo left it, the flank he would rejoin is being reshuffled without him: Barcola 'ready to play more minutes' per the manager, Munoz in reserve. His father closed off the Serie A talk on deadline night.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Tue Sep 8, evening — dropped by the previews at noon and back in the argument by four. Gakpo's muscle tightness, and his absence from Tuesday's session, reopens the right flank Munoz has started twice in the league, because every eleven that moved Gakpo to the right to make room for Barcola on the left now has a gap there; Rush The Kop, for its part, still expects Barcola on the bench. FotMob's 6.8 at Portman Road, SI noting a third different right-sided starter in three games, the debut goal against Forest and the penalty won at Newcastle. In since June on a six-year deal to 2032, a World Cup winner with Spain at twenty-two.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
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
    id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Tue Sep 8, evening — 'ready to play more minutes', in the manager's words, and the day's training report made the sentence louder. Iraola told Tuesday's press conference that Barcola 'has been training quite normally', that the only caveat is the pre-season minutes he never had, and that he does not see him 'like limited'; a few hours later Gakpo missed the session with muscle tightness, the Echo noting it raises the chance of a first Barcola start. SI and Opta Analyst both start him on the left on Wednesday, in a competition he has won twice with PSG; Rush The Kop still expects the bench. A guaranteed £106m rising to £123m, second on the club's list behind Isak. No. 29, and a first Anfield appearance either way.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg",
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
  focus: "Mac Allister tells the pre-Atletico press conference he is 'very, very sad' Liverpool will not offer a new deal and had 'options to leave' in the summer; Gakpo misses training with muscle tightness as Gomez returns to the group",
  credit: "Plate · Daily edition",
  generatedAt: "2026-09-08T22:30:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
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
      "Alexander Isak scored twice inside the first nine minutes at Portman Road on Friday night and Liverpool beat Ipswich Town 2-0, Andoni Iraola's first win at the third attempt, the first time his side has led a game this season and its first clean sheet since April. Both goals came from Cody Gakpo through-balls, the first driven in at the near post in the sixth minute, the second slid in left-footed in the ninth; a third was disallowed for offside in the 33rd. Ronald Araujo made a first start, at right-back ahead of Frimpong; Bradley Barcola made his debut from the bench on 64 minutes. FotMob had Ipswich ahead on expected goals, 0.73 to 0.66. Liverpool are sixth on five points after the weekend's games. Atletico Madrid at Anfield on Wednesday next, arriving without Sorloth and the suspended Ortiz, with Simeone saying Alvarez will not start; on the eve, Mac Allister said the club is not in a position to renew him, and Gakpo missed training with muscle tightness while Gomez rejoined the group.",
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
// Last refresh: 2026-09-08 (Tuesday evening) — re-fetched from ESPN's endpoint and byte-identical
// to the morning's table: no Premier League game has been played since Sunday (this is a Champions League
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
  generatedAt: "2026-09-08T22:30:00Z",
  overview:
    "Nothing in the Premier League table has moved since Sunday, and nothing can until Saturday; what moved on Tuesday was the mood around the sixth-placed side in it, Mac Allister telling a press conference the club will not renew him and Gakpo missing training on the eve of the European opener. Manchester City and Arsenal are both perfect on nine, level on goal difference at plus five with City ahead on goals scored, already four clear of a chasing pack that has knotted tight: Brentford, Liverpool, Newcastle, Everton and Leeds all on five, and where Liverpool, Newcastle and Everton share plus two it is goals scored that splits them. Chelsea sit fourth on six after a first defeat under Xabi Alonso, a point above the Reds, and Hull, third on seven and unbeaten on their return to the division, remain the surprise of the opening month. At the foot, Fulham, the visitors to Anfield on Saturday, are still pointless alongside Coventry and Tottenham in the relegation stripe, and Bournemouth, the trip on the 20th, sit fifteenth on two. Every side has played three; the European line cuts straight through the five-point knot and will not move again until the weekend.",
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
    headline: "Very, Very Sad.",
    byline: "Sky Sports / Liverpool FC",
    dateline: "Anfield · 8 September",
    category: "Football News",
    body:
      "He said it in the room where the club stages its European build-up, in the chair beside the manager, the afternoon before the Champions League opener. Alexis Mac Allister, asked about a contract, gave the answer the club had presumably hoped would stay between agents: that Liverpool are 'not in a position' to renew him, that nobody told him so directly, that 'there were options to leave this summer', and that watching Szoboszlai and Gravenberch sign new deals this year made him 'very, very sad'. Two years remain. He promised a hundred per cent anyway and added, almost gently, 'hopefully they change their minds'. Iraola, beside him, called him important and said there was still a lot of time. Sky, that evening, ran the Opta numbers on his decline. The night before a European tie, Anfield had its own subplot."
  },
  {
    n: "02",
    headline: "Tightness, And A Twenty-Man Group.",
    byline: "Liverpool Echo / The Times",
    dateline: "AXA Training Centre · 8 September",
    category: "Injuries",
    body:
      "The afternoon session told two stories, one in each direction. Cody Gakpo, a goal and three assists in three league games and the source of both of Isak's finishes at Portman Road, felt tightness in a muscle before training and did not take part; Paul Joyce and the Echo both filed it as a precaution, which is the word a club uses when it does not yet know. Joe Gomez, absent since the Sunderland friendly in July, trained fully with the group for the first time in more than a month, one of twenty outfield players on the grass. Koumas, Chambers and McConnell were there; Endo trained though he cannot play in Europe; Chiesa, with a back problem, did not. If Gakpo's evening does not improve, the £123m man starts on the left, and the right flank is Munoz's again."
  },
  {
    n: "03",
    headline: "One Of The Dreams, Probably.",
    byline: "Liverpool FC / VAVEL",
    dateline: "Anfield · 8 September",
    category: "Manager",
    body:
      "Andoni Iraola does not do reverie, but he came near it. Asked whether he had ever imagined a Champions League night at Anfield from the home dugout, he said it was 'one of the dreams, probably, when you start', that seven or eight years ago he could not have placed himself here, and that he feels 'privileged to be there in that dugout tomorrow'. Then the coach reasserted himself. He would not tell the room the line-up because his own players do not know it; rotation was a consideration but not, after a Friday game, the hardest scenario he will face; Fulham and then Tottenham two days later would be harder. Barcola, he said, is 'ready to play more minutes'. Kerkez is 'a player that I trust'. Of Simeone, whom he has faced as a player and a coach and never beaten: 'I hope tomorrow we can give him a good game.'"
  },
  {
    n: "04",
    headline: "He Is Getting Better. He Will Not Start.",
    byline: "DaveOCKOP / Atlético de Madrid",
    dateline: "Anfield · 8 September",
    category: "Tactics",
    body:
      "Atletico flew from Madrid on Tuesday morning with twenty-four names and one open question, and Diego Simeone closed it on the Anfield pitch that evening. Julian Alvarez is on the list, alongside Jonathan David, Baena, Cardoso and Le Normand, with Sorloth injured and Ortiz suspended; but 'Jonathan has only just arrived, Julian is getting better,' the manager said. 'I don't see he could start tomorrow, but I am sure he could help at some point in the game.' He did not blame motivation for Saturday's 3-0 at Bilbao, only 'a lack of awareness, switching off', and he called his side 'in a construction phase', new players, the Alvarez issue, David's late arrival, all of it taking time. The final is in the Metropolitano this season, and he said, unprompted, how much that matters to the club. Then the players trained under the lights, an hour before the ground emptied."
  },
  {
    n: "05",
    headline: "Fifty-Three Per Cent, And A Shirt Worth Three Hundred Million.",
    byline: "Opta Analyst / Goal",
    dateline: "Anfield · 8 September",
    category: "Race for Europe",
    body:
      "The numbers arrived before the noise. Opta's supercomputer gives Liverpool 53 per cent on Wednesday, Atletico 23.5 and the draw 23.4, and beneath the headline sit two facts that pull against each other: Liverpool have never lost a home opener in the European Cup or Champions League, ten wins and two draws, the last three all 3-2; and Iraola has never beaten a Simeone side in four attempts, three defeats and a draw. Marcos Llorente has scored four times in two visits to Anfield. It is Liverpool's first Champions League campaign without Salah since 2014-15, the Egyptian still the club's leader in the competition for games, goals and assists. And on the same Tuesday the club announced a shirt deal with Turkish Airlines from 2027-28, five years and more than £300m, the most valuable in Premier League history by the club's own reckoning, ending seventeen years of Standard Chartered on the front. The badge, at least, is settled."
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-08T22:30:00Z",
  summary:
    "Tuesday evening, and the eve of the Champions League opener belongs to a contract rather than a team sheet: Alexis Mac Allister told the pre-Atletico press conference at Anfield that Liverpool are 'not in a position' to offer him a new deal, that the message came through his agent, that 'there were options to leave this summer', and that seeing Szoboszlai and Gravenberch renewed this year left him 'very, very sad', though he will give a hundred per cent and 'hopefully they change their minds'; Iraola, beside him, said there is 'still a lot of time'. Beneath it the day's training report cut both ways, Cody Gakpo missing the afternoon session with muscle tightness, a precaution per Paul Joyce and the Echo rather than a ruling-out, while Joe Gomez trained fully with the group for the first time in more than a month. Iraola himself called Wednesday 'one of the dreams' and declined to give a line-up his own players do not yet know, but said Barcola is 'ready to play more minutes', and SI and Opta Analyst both start the Frenchman on the left. Atletico named a 24-man travelling list with Alvarez on it, then Simeone said on the Anfield pitch that the Argentine 'is getting better' but will not start; Opta's model gives Liverpool 53 per cent, Iraola winless in four against Simeone. The club also confirmed a five-year Turkish Airlines shirt deal worth more than £300m from 2027-28, ending seventeen years of Standard Chartered, and the league table, sixth and unbeaten on five, waits for Fulham on Saturday.",
  keyTopics: [
    {
      title: "Mac Allister Goes Public At The Anfield Press Conference: 'Very, Very Sad' The Club Will Not Renew Him, And 'There Were Options To Leave This Summer' (Sky Sports / Liverpool FC, today)",
      detail:
        "Tuesday afternoon, in the pre-Atletico press conference beside Iraola: Mac Allister confirmed that Liverpool are 'not in a position' to offer him a new contract, that he learned it from his agent rather than in a direct conversation, and that seeing Szoboszlai and Gravenberch handed long-term deals this year made him 'happy because they deserve it, but at the same time a little bit sad'. Two years remain on the 2023 contract; he said there had been options to leave in the summer, that he has not spoken to Iraola about his future, and that whether talks resume 'is going to depend on how I perform'. Iraola called him 'important', said 'the important thing is he wants to be here', and that there is 'still a lot of time'. Sky's Gradient and Opta data, run the same evening, show his ratings and defensive output falling season on season since 2023.",
      category: "general",
    },
    {
      title: "Gakpo Misses Training With Muscle Tightness As Gomez Rejoins The Group For The First Time In A Month (Liverpool Echo / The Times, today)",
      detail:
        "From the AXA Training Centre on Tuesday afternoon: Cody Gakpo, a goal and three assists in three league games and the supplier of both Isak goals at Ipswich, felt tightness in a muscle before the session and sat it out, an absence Paul Joyce and the Echo's Ian Doyle both report as a precaution rather than a decision on Wednesday. Joe Gomez trained with the full squad for the first time in over a month, six weeks after the muscle injury in the Sunderland friendly, part of a twenty-man outfield group that also included Koumas, Chambers, McConnell and the ineligible Endo; Chiesa, with a back problem, was the one still missing. The club's team-news note has Gomez 'nearing the end of his recovery'. If Gakpo does not make it, the Echo notes, Barcola's first start becomes likelier and Munoz keeps the right.",
      category: "injuries",
    },
    {
      title: "Iraola On The Eve: 'One Of The Dreams', No Line-Up Because The Players Don't Know It Yet, And Barcola 'Ready To Play More Minutes' (Liverpool FC, today)",
      detail:
        "The manager's own press conference on Tuesday, his first before a Champions League game: Iraola said a night in the home dugout at Anfield was 'one of the dreams, probably, when you start', that he feels 'privileged', and that Wednesday 'will show us a little bit where we are'. He refused to discuss rotation, 'I will not tell you the starting line-up, my players don't know', but said Friday's game leaves it 'not the most difficult scenario', with Fulham and then Tottenham two days later the harder stretch. On Barcola: 'he's ready to play more minutes', training 'quite normally', not 'limited', only short of pre-season. On Kerkez: 'a player that I trust, definitely'. On Simeone, whom he has played against and coached against: 'he has much more experience than me in these kinds of games'.",
      category: "matches",
    },
    {
      title: "Simeone On The Anfield Pitch: Alvarez 'Getting Better' But Will Not Start, David 'Only Just Arrived', Bilbao Was 'Switching Off' (DaveOCKOP / Atlético de Madrid, today)",
      detail:
        "Atletico published a 24-man travelling list on Tuesday morning that includes Alvarez, Jonathan David, Baena, Cardoso and Le Normand, with Sorloth injured and Ortiz suspended, and teenager Miguel Cubo left for the Under-19s' game against Liverpool earlier on Wednesday. Then Simeone, at his Anfield press conference before an open session on the pitch, settled the striker question: 'Jonathan has only just arrived, Julian is getting better. I don't see he could start tomorrow, but I am sure he could help at some point in the game.' He described the 3-0 at Bilbao as 'a lack of awareness, switching off' rather than motivation, called his side 'in a construction phase', and said having the final at the Metropolitano is 'very important for the club'.",
      category: "tactics",
    },
    {
      title: "Opta's Model Gives Liverpool 53 Per Cent, With Two Records Pulling Against Each Other: Never Beaten In A Home European Opener, Iraola Never A Winner Against Simeone (Opta Analyst, today)",
      detail:
        "Published on Tuesday morning: the Opta supercomputer has Liverpool winning 53 per cent of its simulations, Atletico 23.5, the draw 23.4. Liverpool have never lost a home opener in the European Cup or Champions League, ten wins and two draws, the last three all 3-2 wins; Iraola, though, is winless in four games against Simeone's Atletico, three defeats and a draw, and only against Imanol Alguacil does he have a worse record among managers he has faced four or more times. Marcos Llorente has four goals in two visits to Anfield. It is Liverpool's first Champions League campaign without Salah since 2014-15; he leads the club's history in the competition for games (83), goals (47) and assists (19). Opta's predicted eleven starts Frimpong, Barcola and Gakpo; SI's starts Araujo.",
      category: "matches",
    },
    {
      title: "Turkish Airlines From 2027-28: Liverpool Announce A Five-Year Shirt Deal Worth More Than £300m As Standard Chartered's 17 Years End (Goal / Liverpool Echo, today)",
      detail:
        "Confirmed by the club on Tuesday: Turkish Airlines becomes main partner from the 2027-28 season on a five-year agreement the club believes is the most valuable front-of-shirt deal in Premier League history, estimated at more than £60m a year and £300m in total. Standard Chartered, on the front since 2010, transitions to a global partner rather than leaving entirely. The airline has sponsored Barcelona and Dortmund before, but this is its first lead shirt deal. It lands in the same week the club lost its sporting director and on the day one of its World Cup winners said his contract had been withheld, which is the kind of contrast a front page notices.",
      category: "general",
    },
    {
      title: "Barcola Left, Gakpo Right, Mac Allister Kept: The Post-Presser Elevens From SI And Opta Analyst (SI / Opta Analyst, today)",
      detail:
        "Tuesday's later previews, written after the 1pm press conference: SI starts Barcola on the left for a first Liverpool start, moves Gakpo to the right, keeps Mac Allister beside Szoboszlai with Gravenberch pencilled for Fulham, and Araujo at right-back; Opta Analyst's eleven agrees on Barcola and Gakpo but restores Frimpong. Both predate the training report that Gakpo had missed the session, so the honest reading is that the right flank is open again between Gakpo and Munoz, and Rush The Kop, for its part, still expects Barcola on the bench for lack of match fitness. Nine of Friday's eleven appear in every list.",
      category: "matches",
    },
    {
      title: "Academy Traffic In Both Directions: Konde To Manchester United For Around £1m, Colombia's Samuel Martinez Chosen Over Dortmund (Caught Offside / Anfield Watch, today)",
      detail:
        "Two youth stories on Tuesday, the only transfer-shaped news a shut window allows: Fabrizio Romano confirms Manchester United have completed a deal for Isaac Konde, a 16-year-old Liverpool academy midfielder who played for the Under-18s last season, for a compensation fee of around £1m plus add-ons; and Anfield Watch reports Liverpool have beaten Borussia Dortmund to Samuel Martinez, a 17-year-old Colombian attacking midfielder who helped win the U17 Copa America this year and will join when he turns 18, after the U17 World Cup later in the year.",
      category: "transfers",
    },
    {
      title: "The Table Waits For Saturday: Sixth On Five, Level With Four Others, And The Only League Business This Week Is Fulham (ESPN, today)",
      detail:
        "ESPN's table re-fetched on Tuesday evening and unchanged since Sunday: Liverpool sixth and unbeaten on five, one of five sides level, four behind Manchester City and Arsenal's perfect nines, Chelsea a point above in fourth, Hull the surprise in third. Fulham, nineteenth and pointless, visit on Saturday, the fixture Iraola said would be harder to plan for than Wednesday because the Tottenham cup tie follows two days later; Bournemouth on the 20th sit fifteenth on two. Nothing moves until the weekend.",
      category: "matches",
    },
    {
      title: "Salah, 34, Sets A 25-Year Trabzonspor First: Four Goals In His First Three Super Lig Starts (Liverpool.com / Goal, yesterday)",
      detail:
        "Reported on Monday: Mohamed Salah became the first foreign Trabzonspor player since Opta's Super Lig records began in 2000-01 to score four times in his first three league starts, a goal and an assist in a 5-0 win over Genclerbirligi following three in his first three appearances. He signed a two-year deal in Turkey after Egypt's last-16 run at the World Cup. It is, Opta noted on Tuesday, the first Liverpool Champions League campaign without him since 2014-15.",
      category: "general",
    },
    {
      title: "Hughes Officially At Al-Hilal Two Days After Leaving, With Two Liverpool Staff Following; The Anfield Search Continues (Al Hilal FC / Liverpool.com, Sunday)",
      detail:
        "Confirmed by Al-Hilal on Sunday and still framing the week: Richard Hughes was appointed sporting director of the Saudi club two days after stepping down at Liverpool, the board finalising his contract on his arrival, and Liverpool.com reports two members of the club's staff following him. Liverpool's own statement of 5 September said the process of appointing a successor was under way; nobody has been named, which is the backdrop to both Iraola's scrutiny and Mac Allister's remark on Tuesday that the decision on his contract 'was with my agent', not with him.",
      category: "general",
    },
  ],
  sources: [
    "Sky Sports",
    "Liverpool FC",
    "Liverpool Echo",
    "The Times",
    "DaveOCKOP",
    "Atlético de Madrid",
    "Opta Analyst",
    "SI",
    "Goal",
    "Rush The Kop",
    "Caught Offside",
    "Anfield Watch",
    "Al Hilal FC",
    "Liverpool.com",
    "ESPN",
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
  generatedAt: "2026-09-08T22:30:00Z",
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
  leaguePosition: 6,
  summary:
    "They are in Liverpool, they have trained on the pitch, and their manager has answered the only question that mattered: Alvarez travels but will not start. 'Jonathan has only just arrived, Julian is getting better,' Simeone said at Anfield on Tuesday evening; 'I don't see he could start tomorrow, but I am sure he could help at some point.' The 24-man list published that morning carries Alvarez, David, Baena, Cardoso and Le Normand, leaves Sorloth and the suspended Ortiz behind, and sends teenager Miguel Cubo to the Under-19s instead. Tuesday's previews lean toward a 4-4-2, Lee Kang-in and Lookman the front two, with the centre-forward question, Alvarez or the returning Jonathan David, the one Simeone has kept open longest. The absences are settled: Alexander Sorloth, out of group work since a muscle problem before the season, misses Anfield, per Mundo Deportivo and EFE, and Arnau Ortiz serves a one-match ban carried two years from a red card he took as a Slask Wroclaw substitute in an August 2024 Conference League qualifier, his last UEFA appearance until this one he cannot make. Saturday's 3-0 at San Mames still frames the week, a first half Atletico controlled and then three goals conceded from the 46th minute; Sports Mole counts six second-half goals shipped in their last three. The Sunday round left them sixth in La Liga on seven from four, level with Sevilla and Osasuna. Simeone has not won at Anfield since March 2020, Atletico have never beaten an English side in a group or league phase in ten attempts, and last September's meeting here went 3-2 to Liverpool, Llorente twice and Van Dijk's 92nd-minute header. Simeone called Bilbao 'a lack of awareness, switching off', his side 'in a construction phase', and the Metropolitano final 'very important for the club'.",
  shape:
    "With Alvarez benched by his manager's own word, the shape is the one Bilbao saw. Tuesday's previews draw a 4-4-2, Barrios and Hjulmand screening in front of the back four, Giuliano Simeone and Baena the wide men, Lee Kang-in and Lookman the front two, with Alvarez the nine the alternative reading restores; the Monday reading kept a 4-2-3-1 with Baena at the point of a three, so the tie is met without certainty about the visitors' shape. In possession it pinches narrow, Baena dropping between the lines and toward a false nine, the wide men running beyond him; out of possession the front pair screen the first pass and the flanks tuck in to make a compact block. The back-three variant El Desmarque floated over the weekend, Romero, Pubill and Hancko with Llorente and Grimaldo as wing-backs, has not gone away, and the defence itself is unsettled enough that the pairing changes preview to preview. Either way the pattern that hurts is Baena pulling a centre-back out and a runner going through the gap he leaves.",
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
    "G. Simeone", "Barrios", "Hjulmand", "Baena", "Lee", "Lookman",
  ],
  absentees: [
    { name: "Arnau Ortiz", issue: "Suspended: one-match UEFA ban carried from a red card for Slask Wroclaw in an August 2024 Conference League qualifier (per Mundo Deportivo / This Is Anfield)", status: "Out" },
    { name: "Alexander Sørloth", issue: "Muscle contracture, left out of the 24-man travelling squad (per Atlético de Madrid / Liverpool FC)", status: "Out" },
    { name: "Julián Álvarez", issue: "Travels, but Simeone says he will not start: 'getting better', could 'help at some point in the game' (per DaveOCKOP)", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-09-05", opponent: "Athletic Bilbao", home: false, score: "0-3", result: "L", note: "Better side before the break, Lee and Barrios hitting the woodwork, then Nico Williams (46) and Navarro (48) in three minutes and Sancet (90). Romero's debut from the bench; Alvarez on after illness, whistled by his own fans. A first defeat of the season." },
    { date: "2026-08-29", opponent: "Sevilla", home: false, score: "3-1", result: "W", note: "Baena twice and Lookman in a first half that settled it; Sierra pulled one back. Alvarez left out of the XI." },
    { date: "2026-08-23", opponent: "Villarreal", home: true, score: "2-2", result: "D", note: "Pubill and Giuliano Simeone scored; Moreno and Mikautadze penalties levelled it. Le Normand sent off, Alvarez jeered by the home crowd." },
    { date: "2026-08-19", opponent: "Málaga", home: true, score: "2-0", result: "W", note: "Lee Kang-in on debut and Baena, both in the second half, in the season opener." },
  ],
  liverpoolAngle:
    "The evening rewrote both ends of the tie. Simeone's word that Alvarez will not start removes the one Atletico forward with a Champions League record of consequence, ten goals last season per Opta, and hands the nine to Jonathan David, who has not yet played for them, or to Lee; on Liverpool's side Gakpo's muscle tightness, a precaution for now, puts the supplier of every Isak goal this season in doubt on the night the striker faces the deepest block he has met. The individual duel the dossier is built around still sits on Liverpool's thinnest department. The right-back berth is two available bodies, Araujo and Frimpong, with Gomez back in full training since Tuesday but not yet passed fit, and Atletico's most direct threats, Lookman cutting in from the left and Giuliano Simeone running the touchline, both travel; Sorloth and Ortiz, the two they lose, are the physical alternative and a squad winger rather than the men who hurt a back four. So Lookman against Araujo's strength or Frimpong's recovery pace remains the tie's private contest, while The Hard Tackle's reading moves it to the middle, Isak against Hancko for the pin and Wirtz against Hjulmand for the space behind the screen. Liverpool's own worst number has not moved: nine fast-break goals conceded since last August, the most in the Premier League per Opta, and neither defence has convinced this season, which is the honest frame for a fixture the previews still make Liverpool's to lose. The centre-forward picture has been resolved by the visitors' manager: Alvarez starts on the bench, David or Lee starts, and Alvarez is the substitution Liverpool must plan for; Liverpool have one nine, in form, and a fallback who is himself a doubt, so an early Atletico goal would test a bench that is two names shorter in Europe than in the league. Bilbao remains the model: Atletico controlled a half and lost the match in five minutes, and the side that has led for only eighty-four minutes all season should want the first goal more than usual. The predicted XI is a Tuesday 4-4-2 that Opta Analyst's preview matches name for name; Alvarez is on the bench by his manager's own account. Ortiz and Sorloth are out; David is available and untested.",
  modelLine: { source: "Opta Analyst supercomputer, 8 September", liverpool: 53, draw: 23.4, opponent: 23.5, note: "Pre-match simulation published on Tuesday morning. Liverpool have never lost a home European Cup or Champions League opener (W10 D2); Iraola is winless in four against Simeone's Atletico (D1 L3). A model, not a market." },
  sources: ["Atlético de Madrid", "DaveOCKOP", "Opta Analyst", "Liverpool FC", "SI", "RotoWire", "Sports Mole", "The Hard Tackle", "Mundo Deportivo", "EFE", "El Desmarque", "AFP", "Football Espana", "MARCA", "ESPN"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-08T22:30:00Z",
  competition: "PL",
  played: 3,
  headline:
    "Every underlying number Liverpool own this season runs through a player who missed training on Tuesday. Gakpo has a goal and three assists in three league games, per Opta, and both Isak goals at Ipswich came from his passes, so the muscle tightness reported as a precaution is also a question about the whole attacking model. The numbers themselves still describe two selves. The striker is one: VAVEL has Isak at 0.89 expected goals per 90 in the league this season against 0.41 under Slot, Gakpo at 0.45 expected assists against 0.22, the underlying version of three goals in three and three assists to match. The team is the other: across three league games the mixed-source total is 5.00 expected goals for and 4.46 against, six scored and four conceded, and Liverpool were out-created in two of the three, FotMob's pre-shot model at Portman Road giving Ipswich 0.73 to 0.66 before Sofascore's post-shot model reversed it to 1.70 to 0.47, the gap sitting almost exactly on Isak's two finishes. The pattern the analysis keeps returning to is the break: nine fast-break goals conceded since last August, the most in the league, and Baena dropping into a false nine is the shape built to exploit it. Liverpool have led for eighty-four minutes all season, every one of them on Friday, and Wednesday asks whether a first clean sheet was a turn or a night. Opta's match tools are on the club site but publish no single expected-goals figure, so FotMob's and Sofascore's stand.",
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
    "Liverpool have never lost their opening home game of a European Cup or Champions League campaign, ten wins and two draws, per Opta Analyst, and the last three such openers were all 3-2 wins, the most recent against Atletico a year ago; Atletico have never lost four in a row to one opponent in the competition, and Liverpool have won the last three.",
    "Iraola is winless in four games against Simeone's Atletico, three defeats and a draw, per Opta Analyst; among managers he has faced four or more times only Imanol Alguacil has beaten him more often. Marcos Llorente has four goals in two appearances at Anfield, more than at any ground except the Metropolitano.",
    "This is Liverpool's first Champions League campaign without Mohamed Salah since 2014-15, per Opta Analyst; he remains the club's all-time leader in the competition for appearances (83), goals (47) and assists (19). Isak, the man now expected to carry it, has one goal in thirteen career Champions League games, per Sports Mole.",
    "Saturday at San Mames was the first time Atletico had conceded twice in the first three minutes of a second half in a single La Liga match, per Opta Analyst; Liverpool have led for 84 minutes all season, every one of them at Portman Road.",
  ],
  sources: ["FotMob", "Sofascore", "SI", "Sporting News", "Opta Analyst", "Liverpool FC", "ESPN", "Sports Mole", "VAVEL", "Liverpool Echo"],
};


export const SQUAD_LOAD = {
  generatedAt: "2026-09-08T22:30:00Z",
  headline:
    "Tuesday's session moved one name in each direction, and the one that moved out matters more. Gakpo, whose passes account for every Isak goal this season, missed the afternoon with muscle tightness, a precaution per Joyce and the Echo, and Gomez trained fully for the first time since July, so the doubt has migrated from a fourth centre-back to the first-choice creator on the eve of the tie. The manager gave nothing away, would not name a line-up his players do not know, and said only that Barcola is ready for more minutes and that Fulham and Tottenham, two days apart, will be the harder week. Ekitike and Bradley have no date, Leoni and Chiesa are aimed at the break, Chiesa and Endo are outside the Champions League 25, so Wednesday's bench is two names shorter than Saturday's will be. Right-back is Araujo or Frimpong with Gomez now a third body in sight; centre-forward is Isak alone, against an Atletico whose own nine, per Simeone, will start on the bench. And the pivot that keeps the shape is played by a man who told the room at one o'clock that the club will not renew him.",
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
    { name: "Cody Gakpo", issue: "Muscle tightness, felt before Tuesday's session", status: "Missed training as a precaution; not ruled out of Wednesday", note: "A goal and three assists in three league games per Opta, both Isak goals at Ipswich from his passes. If he is not risked, Barcola starts on the left and Munoz keeps the right; Iraola said Barcola is 'ready to play more minutes'.", source: "Liverpool Echo / The Times" },
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
  generatedAt: "2026-09-08T22:30:00Z",
  played: 3,
  points: 5,
  pointsPerGame: 1.67,
  projectedPoints: 63,
  projectedFinish: "Europa League places on current pace",
  headline:
    "The arithmetic did not move on Tuesday and the assumptions under it did: five from three, 1.67 a game, a projected 63 and a Europa League par, built on an attack whose every goal has run through Gakpo, who missed training, and a midfield anchored by Mac Allister, who said the club will not renew him. What the European night touches is the load behind the number. It sits between Fulham on Saturday and a cup tie the Tuesday after, so the two league games that could lift the pace toward a top-five rhythm before Manchester City on 11 October are the ones most exposed to rotation, and the previews are already splitting over who starts against Atletico. Three games remain a sample small enough that the same arithmetic read as a survival pace a fortnight ago; the honest frame is the fixtures, and the fixtures say the next two league opponents are nineteenth and fifteenth.",
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
