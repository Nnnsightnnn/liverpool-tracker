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
    id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Wed Aug 12 — back from his break and settled as the No. 1 for the season start. Alisson returned from his post-World Cup rest during the American tour and is Iraola's first-choice keeper who kept goal in both 2-2 draws to open the season. The Brazil captain remains the undisputed starter, and Mamardashvili, shopped for a loan all summer without a taker on terms, stays as his deputy after the deadline passed. Nothing here is in question", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png",
    physical: { height: 191, weight: 91, pace: 48, acceleration: 45, sprintSpeed: 50 },
    career: [
      { years: "2008-2013", club: "Internacional", fee: null, type: "youth" },
      { years: "2013-2016", club: "Internacional", fee: null, type: "senior" },
      { years: "2016-2018", club: "Roma", fee: "€7.5M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€62.5M", type: "senior" },
    ],
  },
  {
    id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Wed Aug 12 — back in the No. 2 role with the season upon us. The tour spell as senior keeper while Alisson rested is over, and with the Brazilian settled back in, the Georgian is back as deputy with the season underway. Liverpool still prefer to protect the asset with a loan rather than sell, and the longer-horizon thinking has not moved off him as a genuine number one somewhere", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png",
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
    id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Tue Sep 1 — the window closed on a captain whose own future is still the open question. Van Dijk spent Saturday lobbying publicly to keep Cody Gakpo, and by deadline night Gakpo had sat down with the ownership, cleared the air and stayed; the captain got the outcome he asked for, though the collapse of City's bid did the work rather than the speech. His own deal still runs only to 2027 and he repeats that there is no deadline on it, his focus the pitch. At 35 he remains the fixed point Iraola builds around, and with no defender bought before the market shut he is also, more than ever, the one the back four cannot do without", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png",
    physical: { height: 193, weight: 92, pace: 72, acceleration: 68, sprintSpeed: 75 },
    career: [
      { years: "2011-2013", club: "Groningen", fee: null, type: "youth" },
      { years: "2013-2015", club: "Celtic", fee: "€2.6M", type: "senior" },
      { years: "2015-2018", club: "Southampton", fee: "€13M", type: "senior" },
      { years: "2018-", club: "Liverpool", fee: "€84.5M", type: "senior" },
    ],
  },
  {
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Wed Sep 2 — training fully, and talked down by his own manager. Gomez is back with the group and reported to have a chance of Portman Road on Friday, his first league minutes of the season and a fourth senior centre-back for Iraola, but the manager cooled it this week, repeating he puts a muscle problem of this kind at about a month and that Gomez is still some weeks short. With Upamecano staying at Bayern and no defender bought, the cover behind Van Dijk, Jacquet and the loanee Araujo is him and little else, Leoni on ACL rehab and Ndukwe gone to Levante. A body always meant to be kept, now the one a thin summer leans on", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
    physical: { height: 188, weight: 80, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2012-2015", club: "Charlton Athletic", fee: null, type: "youth" },
      { years: "2015-", club: "Liverpool", fee: "€4.7M", type: "senior" },
    ],
  },
  {
    id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Tue Jul 21 — a first pre-season to reset. A difficult debut year after the £45m move drew criticism, but with Robertson gone to Tottenham the left-back job is unambiguously his, and a clean summer under a new coach is the reset he needs. He landed in Chicago with the group", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Sun Jul 26 — a spectator at the win he could not share in. Bradley watched the Sunderland opener from the sidelines in Nashville, in America only to rehabilitate the knee he suffered against Arsenal in January, still months from a return with a lot of time out yet and taking no part in any of the three friendlies. The club commit to no date. Frimpong remains the only fit senior right-back travelling", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Wed Sep 2 — carrying the flank, with the reinforcement still weeks off. Frimpong remains the only fit senior right-back through the opening two draws, Bradley short of a knee return and eyed for November, the deadline-day Malo Gusto loan refused. Joe Gomez, back in full training, has a chance of Ipswich and can cover right-back, though Iraola cooled the timeline this week. Araujo, in on loan and bowed against Como, is the other in-game option. Fit if managed, still short of competition, and the man the position cannot do without until January", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Fri Jul 24 — the one bright line in a bleak briefing. As Iraola called Ekitike and Bradley way off, Leoni was the exception, back running on the outdoor pitches at the AXA Centre and understood to be the nearest of the three to a return, a first genuine step in a ten-month ACL recovery from the tear on his September debut. He travelled to rehabilitate rather than play and features in none of the friendlies. The medical staff stay deliberately cautious with him, and the wait for full training is longer still", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Wed Sep 2 — the fit senior partner, in a department the window left bare. Jacquet started beside Van Dijk against Forest, back from the shoulder problem managed with caution since January surgery, having scored on his return in the pre-season win over Como. That absence had once left Van Dijk as the only fit specialist senior centre-back, which is why Araujo's loan mattered. Behind the pair the cover stays thin: no defender bought, Upamecano staying at Bayern, Ndukwe at Levante, and Gomez back in full training but cooled by Iraola as still some weeks short. A crunch eased rather than solved", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat Aug 29 — recalled, and in the pivot rather than on the bench the previews had him on. Mac Allister started against Forest alongside Szoboszlai, one of Iraola's two changes, with Gravenberch dropping out. Iraola has held brief talks with Mac Allister about his role in the 2026-27 side, resisting the summer's Madrid whispers and a fleeting City shortlist rather than banking him as sell-to-buy fuel. It caps a strange arc: a runner-up who played the length of the World Cup final at MetLife and lost it in extra time, Argentina down to ten after Enzo Fernandez's 93rd-minute red and beaten by Ferran Torres on 106, five weeks that rewrote a club season in which he was among the most criticised at Anfield. Back in training after missing the American tour, he anchors the midfield Iraola is building around through the Newcastle draw", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Sat Aug 29 — the fixed point, unfixed for an afternoon. Gravenberch was left out of the starting XI against Forest, Mac Allister taking his place beside Szoboszlai in one of two changes, and a side that has never held a lead this season conceded twice on the break without him. Gravenberch featured in the first-half spell that put Liverpool two up on Leeds before the reserves let the game slip to 2-4. Liverpool's most consistent player across a turbulent 2025-26 is the certainty at the base of whatever Iraola builds; everything around him is a question, he is not one of them", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
    physical: { height: 190, weight: 80, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2010-2018", club: "Ajax Academy", fee: null, type: "youth" },
      { years: "2018-2022", club: "Ajax", fee: null, type: "senior" },
      { years: "2022-2023", club: "Bayern Munich", fee: "€18.5M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Mon Aug 24 — the nerve that saved the opener. Szoboszlai buried a penalty in the ninth minute of stoppage time at Newcastle to rescue a 2-2 and hand Iraola a debut point, stepping up over Isak with Salah gone and the club's penalty order unsettled. A vice-captain under the new coach after his extension to 2031 and last season's supporters' player of the year, he is the composure the young side keeps leaning on. Fit, central, and now perhaps the man the manager simply names as his taker before the debate returns", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png",
    physical: { height: 186, weight: 79, pace: 76, acceleration: 78, sprintSpeed: 74 },
    career: [
      { years: "2015-2018", club: "Liefering", fee: null, type: "youth" },
      { years: "2018-2020", club: "Red Bull Salzburg", fee: null, type: "senior" },
      { years: "2020-2023", club: "RB Leipzig", fee: "€20M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€70M", type: "senior" },
    ],
  },
  {
    id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Tue Sep 1 — the window shut and he is still here, which changes what he is for. Wolves, Fulham and West Ham all looked at the 33-year-old and none of them moved, so a player FSG were willing to sanction out stays as a senior midfield body in a squad that added none. That matters more than it did this morning: with Jones sold to Inter and nobody bought behind him, Endo is now the depth rather than the surplus, and the non-homegrown slot he occupies was cited all day as the reason no further arrival could be squeezed in. The February foot trouble is long behind him. Fit, available, and no longer for sale until January", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png",
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
    id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Mon Aug 10 — the best player on the pitch, again. Wirtz scored Liverpool's second in Sunday's 2-3 defeat to Monaco and ran most of the side's attacks through him, the clearest evidence yet of why Iraola sees the £115m playmaker behind the striker as a No. 10. He shared barely 117 minutes with Isak and Ekitike across an injury-disrupted first year; a clean block of work, in his best position, is the reset, and its first month has been its brightest", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png",
    physical: { height: 176, weight: 70, pace: 78, acceleration: 82, sprintSpeed: 75 },
    career: [
      { years: "2015-2020", club: "1. FC Köln Academy", fee: null, type: "youth" },
      { years: "2020-2025", club: "Bayer Leverkusen", fee: "€200K", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€115M", type: "senior" },
    ],
  },
  {
    id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Tue Sep 1 — valued at thirty million pounds, and not for sale at any price. Nottingham Forest, hunting a midfielder since Elliot Anderson joined Manchester City, tabled £25m plus £5m in add-ons late on deadline day and were turned down flat. Paul Joyce reported Liverpool telling them the teenager is going nowhere at this stage of the window, the reasoning being that Curtis Jones's sale to Inter opened real minutes in front of him and Iraola trusted him repeatedly through pre-season. Talks over improved terms are now expected. Fit and available at Portman Road", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A",
    physical: { height: 178, weight: 68, pace: 74, acceleration: 76, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Leicester City Academy", fee: null, type: "youth" },
      { years: "2023-", club: "Liverpool", fee: "€300K", type: "youth" },
    ],
  },

  // ── Forwards ──────────────────────────────────────────────────────────────
  {
    id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 41, goals: 10, assists: 7, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Tue Sep 1 — a meeting room, not a medical, and the saga is over. With City's approach dead and Tottenham long gone, Gakpo held clear-the-air talks with the ownership on deadline day and stays, contracted to 2030, the summer's most public tug-of-war settled by conversation. Supporters largely backed him through a window the reporting has been calling farcical for a fortnight. An assist and an equaliser-maker across his two league games, he is among the fittest attacking options Iraola takes to Portman Road, and one of the very few players at the club whose future nobody is still asking about", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png",
    physical: { height: 189, weight: 82, pace: 80, acceleration: 82, sprintSpeed: 78 },
    career: [
      { years: "2007-2018", club: "PSV Academy", fee: null, type: "youth" },
      { years: "2018-2023", club: "PSV Eindhoven", fee: null, type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€42M", type: "senior" },
    ],
  },
  {
    id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 19, goals: 10, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Tue Sep 1 — the record survived the window, and then was matched. Isak's £125m still stands as Liverpool's largest fee, with Barcola's guaranteed £106m rising to £123m second on the club's list, but Manchester City agreed £125m with Chelsea for Enzo Fernandez before the deadline and drew level at the top of the English market. On the pitch he is off the mark: his first of the season on the hour against Forest, standing where a centre-forward stands when Gakpo spins his marker and clips one to the back post. Good to take something from the game, he said, but they need to be better. With Ekitike out until December and nobody bought behind him, the goals have nowhere else to come from", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png",
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
    id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Mon Aug 24 — 'still way off,' in the manager's own words. Iraola's first in-season bulletin offered no comfort on the striker Liverpool most miss: the Achilles ruptured against PSG in April keeps Ekitike sidelined, the coach 'talking about months and still a lot of time out' and conceding he may not feature again this calendar year. He continues his rehabilitation away from the group, took no part in pre-season, and is at best a hopeful festive-period return. The front line carries on without its most productive option from last term's 18 goals", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png",
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
    id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03", "2026-05-09", "2026-05-15"], injuryNote: "Sat Aug 29 — eighteen, and on the bench after all. The previews had Ngumoha starting on his birthday; Iraola gave the right flank to Victor Munoz instead, and the substitute watched the Spaniard hit the equaliser that saved the afternoon. The new five-year deal with a significant rise is still there to sign, delayed only by the rule capping under-18s at three-year terms, a formality that clears now he has turned eighteen. Nothing about a competitive selection call at a club with a £123m winger arriving says the path has closed. It says the queue is long, which it always was", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png",
    physical: { height: 175, weight: 68, pace: 85, acceleration: 88, sprintSpeed: 83 },
    career: [
      { years: "2019-2024", club: "Chelsea Academy", fee: null, type: "youth" },
      { years: "2024-", club: "Liverpool", fee: "Compensation", type: "youth" },
    ],
  },
  {
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Tue Sep 1 — the exit died before the injury did. His father Enrico said publicly on deadline night that Federico is not thinking about leaving, closing a day of Italian speculation and ending a summer in which the winger had already rebuffed Atletico, Roma, Napoli, Como and Fiorentina. He stays out with the small muscle injury felt at the back of his leg in the Como friendly, one of four absentees with no return date offered, which made him close to unsellable in that condition anyway. He finishes the window a Liverpool player with the man in front of him now costing £123m", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
    physical: { height: 175, weight: 70, pace: 84, acceleration: 86, sprintSpeed: 82 },
    career: [
      { years: "2016-2020", club: "Fiorentina", fee: null, type: "senior" },
      { years: "2020-2024", club: "Juventus", fee: "€40M", type: "senior" },
      { years: "2024-", club: "Liverpool", fee: "€12M", type: "senior" },
    ],
  },

  // ── Late additions ────────────────────────────────────────────────────────
  {
    id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", recentPlayedDates: ["2026-04-25", "2026-05-03"], injuryNote: "Tue Jul 21 — third-choice, and dependable with it. Two Premier League starts across 2025-26 and a steady squad option, he is part of the goalkeeping group in America while Alisson takes his post-World Cup break. No drama, which at his position is the point", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png",
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
    id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 2, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Sat Aug 29 — a first Premier League start, and a goal that will be replayed for years. Preferred to the eighteen-year-old Ngumoha on the right against Forest, Munoz took one touch eight minutes from time, spun through a hundred and eighty degrees and hit a rising drive off the underside of the crossbar past Matz Sels to make it 2-2. It was the second decisive contribution of his fortnight after he won the stoppage-time penalty at Newcastle as a substitute. In since June on a six-year deal to 2032, the £34.7m release clause met at Osasuna, a World Cup winner with Spain at twenty-two, and now the answer to a right flank that has spent the summer being solved by other means", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg",
    physical: { height: 178, weight: 71, pace: 86, acceleration: 88, sprintSpeed: 84 },
    career: [
      { years: "2018-2023", club: "Osasuna Academy", fee: null, type: "youth" },
      { years: "2023-2024", club: "Osasuna B", fee: null, type: "senior" },
      { years: "2024-2026", club: "CA Osasuna", fee: null, type: "senior" },
      { years: "2026-", club: "Liverpool", fee: "£34.7m", type: "senior" },
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
  src: null,
  alt: "Pure-type edition cover.",
  focus: null,
  credit: null,
  generatedAt: "2026-09-02T08:15:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Morning pass (Wed 2 September): the window is shut and the football takes over. Lead is
  // the schedule, five Liverpool matches in seventeen September days beginning at Ipswich on
  // Friday, with Iraola calling the run kind on paper and refusing his side the excuse of a
  // quiet deadline day. The one fresh team-news beat is Joe Gomez, back in full training but
  // publicly cooled by his manager, who puts the muscle injury at about a month.
  // Under STEP 7.5 none of this morning's beats is photographable: no match has been played
  // since Saturday, so there is no hero moment, only a preview and a fitness caution. NO cover
  // image is requested and the render stays on the pure-type fallback (src null). generatedAt
  // is re-stamped as the cache-buster (COVER-00001).
  brief: {
    leadStory:
      "With the transfer window shut since Tuesday night, Liverpool's season proper begins in a rush: five matches in seventeen September days, opening at Ipswich away on Friday 4 September before Fulham, Bournemouth on the 20th and the first Champions League night crowd in. Andoni Iraola has called the fixtures kind on paper and said his side cannot use a quiet deadline day as an excuse, having opened with two 2-2 draws, four goals conceded and not a minute spent in front. Joe Gomez is back in full training with a chance of Ipswich, but Iraola has cooled it, repeating he puts the muscle injury at about a month. Bradley Barcola, the GBP123m club-record winger, is registered and in line for a debut at Portman Road. Liverpool sit thirteenth on two points, a place below Friday's hosts, with no reinforcement possible until January.",
    subject: null,
    prompt: null,
    aspectRatio: "portrait",
    slug: null,
  },
};


// ─── Next Fixture ──────────────────────────────────────────────────────────
export const NEXT_MATCH = {
  opponent: "Ipswich Town",
  shortName: "IPS",
  home: false,
  date: "2026-09-04T20:00:00",
  competition: "PL",
  venue: "Portman Road",
  broadcast: "Sky Sports",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
export const RESULTS = [
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
// Last refresh: 2026-09-02 — live 2026-27 table, matchweek 2. Matches ESPN's current feed.
// Liverpool 13th on 2 points from two draws. Table still unchanged: nobody has played since
// Saturday and the market shut on Tuesday, so the next movement is Ipswich away on Friday 4
// September. Regenerated from ESPN's endpoint this morning and byte-identical to yesterday.
export const STANDINGS = [
  { pos: 1, team: "Manchester City", p: 2, w: 2, d: 0, l: 0, gd: 4, pts: 6, qualification: "UCL" },
  { pos: 2, team: "Arsenal", p: 2, w: 2, d: 0, l: 0, gd: 4, pts: 6, qualification: "UCL" },
  { pos: 3, team: "Hull", p: 2, w: 2, d: 0, l: 0, gd: 3, pts: 6, qualification: "UCL" },
  { pos: 4, team: "Chelsea", p: 2, w: 2, d: 0, l: 0, gd: 2, pts: 6, qualification: "UCL" },
  { pos: 5, team: "Brentford", p: 2, w: 1, d: 1, l: 0, gd: 3, pts: 4, qualification: "UEL" },
  { pos: 6, team: "Newcastle", p: 2, w: 1, d: 1, l: 0, gd: 2, pts: 4 },
  { pos: 7, team: "Everton", p: 2, w: 1, d: 1, l: 0, gd: 2, pts: 4 },
  { pos: 8, team: "Leeds", p: 2, w: 1, d: 1, l: 0, gd: 1, pts: 4 },
  { pos: 9, team: "Brighton", p: 2, w: 1, d: 0, l: 1, gd: 3, pts: 3 },
  { pos: 10, team: "Manchester United", p: 2, w: 1, d: 0, l: 1, gd: 1, pts: 3 },
  { pos: 11, team: "Sunderland", p: 2, w: 1, d: 0, l: 1, gd: 0, pts: 3 },
  { pos: 12, team: "Ipswich", p: 2, w: 1, d: 0, l: 1, gd: -2, pts: 3 },
  { pos: 13, team: "Liverpool", p: 2, w: 0, d: 2, l: 0, gd: 0, pts: 2, highlight: true },
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
  generatedAt: "2026-09-02T08:15:00Z",
  overview:
    "Two rounds in, this is the table the football now has to move, because nobody has played since Saturday and the market shut on Tuesday. Manchester City lead on six from Arsenal, promoted Hull and Chelsea, all on the maximum, Brentford heading the chasing pack on four. Liverpool sit thirteenth on two points from two 2-2 draws, a goal difference of nothing and not a minute spent in front all season, a place and a point below Friday's hosts Ipswich Town. At the foot Fulham, Coventry, Crystal Palace, Aston Villa and Tottenham have taken nothing from two apiece, the last three inside the relegation places on goal difference. Andoni Iraola begins a September of five matches in seventeen days needing to turn draws into wins from a squad the window left him, and thirteenth is a position to climb rather than a verdict to accept.",
  teams: {
    "Liverpool": "Thirteenth on two points from two 2-2 draws, unbeaten and yet to lead a minute. The squad is closed until January after one deadline-day arrival; the £123m Barcola is registered and available at Ipswich, Gakpo stays, and Joe Gomez is the one fitness question before Friday.",
    "Manchester City": "Top on six with a maximum and a plus-four difference, level with Arsenal at the summit. Matched Liverpool's club-record fee to agree £125m with Chelsea for Enzo Fernandez on deadline day.",
    "Arsenal": "Second on six, level with Manchester City on points and goal difference, two wins from two, and among the early pace-setters at the top of the table.",
    "Hull": "Third on six, two wins from two on their return to the top flight, comfortably the story of the opening fortnight.",
    "Chelsea": "Fourth on six and unbeaten, and the club that closed Liverpool's window: they refused a deadline-day loan for Malo Gusto, insisting on a permanent sale or nothing.",
    "Brentford": "Fifth on four and unbeaten, a plus-three difference bettered only by the sides above them.",
    "Ipswich": "Twelfth on three, a place and a point above Liverpool and hosting them on Friday. Gary O'Neil, a former Liverpool academy coach, was beaten 5-2 at Manchester United and is without Matusiwa, Taylor and Philogene.",
    "Bournemouth": "Fourteenth on one, and Liverpool's visitors-in-reverse on 20 September. Kept everything this summer, Alex Scott included, the midfielder Liverpool named a priority and never seriously bid for.",
    "Nott'm Forest": "Fifteenth on one after drawing 2-2 at Anfield on Saturday. Had £25m plus £5m for Liverpool's Trey Nyoni rejected out of hand on deadline day.",
    "Crystal Palace": "Eighteenth and pointless after two defeats, and immovable on Ismaila Sarr all window despite the winger pushing to join Liverpool.",
    "Brighton": "Ninth on three. Held at £70m for Yankuba Minteh to the very end, which is why Liverpool never had the winger that would have released Gakpo, who stays regardless.",
    "Tottenham": "Bottom on goals scored with two defeats from two, ending the window with nothing to show for a summer spent first chasing Gakpo and then watching him stay.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Window Shut, And The Calendar Opened Its Mouth.",
    byline: "This Is Anfield",
    dateline: "Anfield \u00b7 2 September",
    category: "Manager",
    body:
      "Andoni Iraola spent the summer asking for players and now asks something harder of the ones he has. Five matches in seventeen days begin at Portman Road on Friday, a September This Is Anfield calls kind on paper and unforgiving in practice, Fulham and Bournemouth and the first Champions League night folded in behind it. The manager has said he is relieved to know exactly whom he can pick until January, and that his side cannot use a quiet deadline day as an excuse. Two draws have made a gentle-looking month the one where the season is corrected or quietly starts to slip.",
  },
  {
    n: "02",
    headline: "Gomez Trains, And His Manager Talks Him Down.",
    byline: "Liverpool.com / Sports Mole",
    dateline: "Kirkby \u00b7 2 September",
    category: "Injuries",
    body:
      "There are promising signs and there is a manager refusing to lean on them. Joe Gomez, out of both league games with the muscle injury he took in the Sunderland friendly on 26 July, is back in full training and reported to have a chance of Friday, and Iraola has spent the week cooling exactly that, repeating that he normally puts a problem like this at about a month and that Gomez is still some weeks short of himself. With Bradley on knee rehab into 2027 and no defender bought, one hamstring is the whole of Liverpool's flexibility.",
  },
  {
    n: "03",
    headline: "A Homecoming In The Home Dugout, And A Warning In The Numbers.",
    byline: "Goal.com",
    dateline: "Portman Road \u00b7 2 September",
    category: "Football News",
    body:
      "Gary O'Neil came up through Liverpool's academy before he was a manager, and on Friday he sends a promoted side at the club that raised him. Goal's preview led not on Liverpool's forwards but on their defence: four conceded in two games, no clean sheet, into an Ipswich team whose two matches have already produced ten goals. Abdul Fatawu has made three chances and taken an assist from the right, aimed straight at Liverpool's thinnest flank. Kind on paper, the fixture reads; awkward in fact, the same fixture reads underneath.",
  },
  {
    n: "04",
    headline: "The Ledger Is Closed, And It Reads Eleven To Five.",
    byline: "Rousing The Kop",
    dateline: "Anfield \u00b7 1 September",
    category: "Transfers",
    body:
      "A summer's business fits in two columns now, and one is much longer than the other. In came Jacquet at \u00a360m, Munoz at \u00a334m, Araujo on loan, the club-record Barcola, and an eighteen-year-old goalkeeper loaned straight back to Belgium until 2027. Out went eleven senior men, Salah to Trabzonspor, Konate to Madrid, Robertson to Tottenham, Jones to Inter among them, with no midfielder to replace the last and no right-back after Chelsea refused a loan for Malo Gusto. Barcola registered in time for Friday is the one line the club will point to. The rest it must simply live with.",
  },
  {
    n: "05",
    headline: "Twenty Games Unbeaten, And Not A Minute In Front.",
    byline: "Opta Analyst / Squawka",
    dateline: "Anfield \u00b7 2 September",
    category: "Tactics",
    body:
      "Two statistics sit awkwardly together at the top of Iraola's Liverpool. He has not lost a Premier League game in twenty, across two clubs, and his side has not held a lead for a single minute of this season. Both are true because both describe the same team: one that out-shoots opponents, falls behind early, and hauls itself level late, Szoboszlai's ninth-added-minute penalty at Newcastle the most vivid instance. It is a manager's imprint arriving before his results, thrilling once and unsustainable as a plan. September, kind and crowded, is where the draws are meant to become wins.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-02T08:15:00Z",
  summary:
    "With the market shut since Tuesday night, the football takes over, and it arrives in a rush: five Liverpool matches in seventeen September days, beginning at Ipswich on Friday. Andoni Iraola has called the fixtures kind on paper and said plainly that his side cannot carry excuses after opening with two 2-2 draws and four goals conceded, and he must now find wins from a squad the window would not let him add to. Joe Gomez is the one fresh fitness question, back in full training but publicly cooled by a manager who still puts the muscle injury at around a month. Bradley Barcola, the £123m club-record winger, is registered and in line for a debut at Portman Road, the summer's single argument for itself. Thirteenth on two points, a place below Friday's hosts, and nothing to buy until January.",
  keyTopics: [
    {
      title: "Five Games In Seventeen Days: Iraola's September Test Begins At Portman Road (This Is Anfield, today)",
      detail:
        "The window is shut and the schedule takes its place. Liverpool play five times in seventeen days this month, a run This Is Anfield framed on Wednesday as favourable on paper but relentless in practice, and it opens with Ipswich away on Friday before Fulham, Bournemouth and a Carabao Cup tie crowd in. Iraola has welcomed knowing exactly who he can call on until January, and said his side cannot lean on the quiet deadline day as an excuse. Two draws to start have made a kind-looking September the month the season is either corrected or complicated.",
      category: "matches",
    },
    {
      title: "Iraola Cools The Gomez Talk Even As The Defender Trains: 'Around A Month' (Liverpool.com / Sports Mole, today)",
      detail:
        "The one team-news thread moving before Friday tightened rather than cleared. Joe Gomez, out of both league games with the muscle injury taken in the Sunderland friendly on 26 July, is back in full training and reported to have a chance of featuring at Ipswich, but Iraola publicly cooled it this week, repeating that a muscle problem of this kind he normally puts at about a month and that the defender is still some weeks short of himself. With Bradley on knee rehab and eyed for November and no defender bought, his fitness is the whole of Liverpool's deadline-day flexibility.",
      category: "injuries",
    },
    {
      title: "'Reds Continue To Leak Goals': The Ipswich Preview Reads As A Warning (Goal.com, today)",
      detail:
        "Goal.com's Wednesday preview led not on Liverpool's attack but on their defence, four conceded in two games and not a clean sheet in sight, against a promoted side whose two matches have already produced ten goals. Gary O'Neil, a former Liverpool academy coach who took Ipswich after Kieran McKenna stepped down, has a spirited team that beat Sunderland and then shipped five at Old Trafford. The read is a Friday night that is kind on paper and awkward in fact: Ipswich will give chances and take their own.",
      category: "matches",
    },
    {
      title: "The Draw Habit: Iraola Twenty Unbeaten, And Twelve Of Them Level (Opta Analyst, today)",
      detail:
        "The record that flatters and the record that warns are the same record. Iraola is unbeaten in twenty Premier League matches across Bournemouth and Liverpool, Opta note, but eight wins to twelve draws is the shape of it, and both Liverpool games have followed the pattern: out-shot opponents, gone behind, drawn level late. It is a manager's imprint arriving faster than his results, a side that does not lose and does not yet win, and September is where the draws have to start turning into three points.",
      category: "tactics",
    },
    {
      title: "Not A Minute In Front: Two Games, Two Comebacks, And A Slow-Start Problem (Opta Analyst / Squawka, today)",
      detail:
        "Liverpool have not led for a single minute of the league season. They trailed inside the half-hour at Newcastle and again at Anfield, where Forest generated 1.29 first-half xG to Liverpool's 0.25 before Isak and Munoz retrieved it. Both points came from stoppage-time or late equalisers, Szoboszlai's ninth-minute-of-added-time penalty on Tyneside the most extreme. Chasing games is thrilling once and unsustainable as a plan, and the slow start is the first thing Iraola's favourable September has to fix.",
      category: "tactics",
    },
    {
      title: "Barcola Registered And In Line For A Debut, The Summer's One Argument For Itself (Sky Sports / Liverpool FC, 1d ago)",
      detail:
        "The piece of the window that worked is cleared to play. Bradley Barcola, the guaranteed £106m rising to £123m signed on a five-year deal, was registered before Tuesday's deadline and is in line to feature at Ipswich on Friday, giving Iraola his marquee winger from the bench if not the start. It stays the largest fee Liverpool have paid for a winger and the second-largest in their history behind Isak's £125m, which City matched for Enzo Fernandez on deadline day. Everything else this summer is read against it: one club-record arrival, and little behind him.",
      category: "transfers",
    },
    {
      title: "The Squad Is Closed Until January: Eleven Out, Five In, One Not Due For Two Years (Rousing The Kop, 1d ago)",
      detail:
        "The ledger is fixed now and it reads thin for a side sitting thirteenth. In: Jacquet at £60m, Munoz at £34m, Araujo on loan, the club-record Barcola, and the eighteen-year-old goalkeeper Lucca Brughmans, announced on deadline day for up to £30m and loaned straight back to Genk until 2027. Out: eleven senior bodies, Salah, Konate, Robertson and Jones among them. No midfielder replaced Jones, no right-back came after the Malo Gusto loan was refused, and Iraola takes what he has into the winter.",
      category: "transfers",
    },
    {
      title: "Gakpo Stays, And The Left Flank Is The One Question Nobody Is Still Asking (This Is Anfield, 1d ago)",
      detail:
        "The summer's longest saga ended in a meeting room rather than a medical. With City's approach dead and Tottenham long gone, Cody Gakpo settled his future with the ownership on deadline day and remains a Liverpool player to 2030. He started the left against Forest and made Isak's equaliser, and Barcola's arrival threatens the right flank rather than his. In a window the same reporting spent a fortnight calling farcical, he is one of the few whose future is no longer a live question on the team sheet.",
      category: "general",
    },
    {
      title: "Ekitike Still Months Away, And Isak Carries The Line Alone (Sports Mole / Liverpool.com, 1d ago)",
      detail:
        "The forward department is one fit senior striker deep. Hugo Ekitike remains months from the Achilles rupture suffered in April and is not expected before December, and with no forward signed this summer there is no alternative nine behind Alexander Isak, who scored his first of the season against Forest. Gakpo is the false-nine fallback if one is needed. It is the clearest reason the window's inactivity matters on the pitch rather than the balance sheet: a single injury up top would leave Iraola improvising.",
      category: "injuries",
    },
    {
      title: "Thirteenth, And The Table Now Has To Be Moved On Grass (ESPN, 1d ago)",
      detail:
        "Nobody has played since Saturday, so the table is the one the window left: two points from two 2-2 draws, a goal difference of nothing, thirteenth. Manchester City, Arsenal, promoted Hull and Chelsea all sit on the maximum six; Fulham, Coventry, Palace, Villa and Tottenham are yet to take a point between them. Ipswich, twelfth on three, are a place and a point above Liverpool and host them first. From here the only thing that changes the standings is a result, and Liverpool have not had one yet.",
      category: "matches",
    },
    {
      title: "Bournemouth On The Twentieth, And A Month That Folds Cups In Around The League (Liverpool FC / Sky Sports, 1d ago)",
      detail:
        "The September map is set. After Ipswich away on Friday comes Fulham at home, then Bournemouth away on Sunday 20 September at 2pm, confirmed for Sky, the visit to the club that kept Alex Scott and never sold. A Carabao Cup tie and the start of the Champions League phase fold in around them before the international break, which is where the five-in-seventeen count comes from. Iraola's return to the Vitality, the ground he made his name at, is the sentimental line in an otherwise unforgiving fortnight.",
      category: "matches",
    },
  ],
  sources: [
    "This Is Anfield",
    "Liverpool.com",
    "Sports Mole",
    "Goal",
    "Opta Analyst",
    "Squawka",
    "Sky Sports",
    "Liverpool FC",
    "Rousing The Kop",
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
  generatedAt: "2026-09-02T08:15:00Z",
  opponent: "Ipswich Town",
  shortName: "IPS",
  fixture: {
    date: "2026-09-04T20:00:00",
    venue: "Portman Road",
    home: false,
    competition: "PL",
    broadcast: "Sky Sports",
  },
  manager: "Gary O'Neil",
  formation: "4-2-3-1",
  leaguePosition: 12,
  summary:
    "The kind of promoted side that reads as a gift and plays as a trap, and a former Anfield academy coach in the home dugout. Gary O'Neil, who came up through Liverpool's youth set-up before taking Ipswich when Kieran McKenna stepped down, has kept the 4-2-3-1 he built at Bournemouth and Wolves and spent real money on it: Abdul Fatawu from Leicester for a reported £20m, Daizen Maeda from Celtic on the back of twenty league goal involvements, Issa Diop from Fulham, Sasa Lukic to anchor it. Their two matches have already produced ten goals, a 2-1 win over Sunderland and a 5-2 loss at Old Trafford. Goal.com's preview led on the same fact Liverpool would rather ignore: the Reds keep leaking goals, four in two and no clean sheet, into a side that will give chances and take its own.",
  shape:
    "4-2-3-1 with Lukic and Núñez as the double pivot, Fatawu and Maeda wide of Enciso and Emersonn alone up top. The full-backs push high, Davis on the left especially, and the six-foot-nine Scherpen goes long early. It is precisely the pattern that undid Liverpool at Anfield on Saturday: a goalkeeper's long ball down the middle, a first touch conceded, and Forest ahead inside twenty-four minutes before the game was retrieved.",
  keyPlayers: [
    {
      name: "Emersonn",
      role: "Centre-forward",
      threat: "Scored the opener against Sunderland with 3 shots and 2 chances created in 66 minutes. Leads the line alone and plays off the shoulder.",
      source: "Squawka / Opta",
    },
    {
      name: "Abdul Fatawu",
      role: "Right winger",
      threat: "Ipswich's most dangerous creator: 3 chances created and an assist in two games. Signed from Leicester for a reported £20m on a five-year deal after 9 goals in 44 appearances in 2025/26. Runs at full-backs, which is Liverpool's thinnest position.",
      source: "Squawka / Fantasy Football Hub",
    },
    {
      name: "Daizen Maeda",
      role: "Left winger",
      threat: "Arrived from Celtic with 20 league goal involvements last season. Pressing forward who plays on the last shoulder and attacks the back post.",
      source: "Squawka",
    },
    {
      name: "Kjell Scherpen",
      role: "Goalkeeper",
      threat: "Six foot nine, the tallest player in Premier League history. Dominates his box on set pieces and launches the long ball that starts Ipswich's most direct attacks.",
      source: "Fantasy Football Hub",
    },
  ],
  predictedXI: [
    "Scherpen", "O'Shea", "Diop", "Greaves", "Davis",
    "Lukic", "Núñez", "Fatawu", "Enciso", "Maeda", "Emersonn",
  ],
  absentees: [
    { name: "Jaden Philogene", issue: "Ankle / foot", status: "Out" },
    { name: "Jack Taylor", issue: "Knee", status: "Out" },
    { name: "Azor Matusiwa", issue: "Thigh", status: "Doubt" },
    { name: "Florentino Luis", issue: "Calf / shin / heel", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-08-30", opponent: "Manchester United", home: false, score: "2-5", result: "L", note: "Bruno Fernandes hat-trick; Carrick's first win of the season." },
    { date: "2026-08-22", opponent: "Sunderland", home: true, score: "2-1", result: "W", note: "Emersonn and Jack Clarke scored on the opening weekend." },
  ],
  liverpoolAngle:
    "The fixture turns on two documented Liverpool weaknesses. Fatawu runs at right-backs, and Liverpool's right-back department is one fit senior man: Frimpong alone, with Bradley on knee rehab and eyed for November, the Gusto loan refused, and Gomez still weeks short by Iraola's own account. And Liverpool have not led a minute of the season, generating just 0.25 first-half xG at Anfield on Saturday before rescuing a draw. A promoted side with Maeda on the last shoulder and Scherpen launching it long will not be as forgiving of another slow start as Forest were, which is why the favourable-on-paper reading and the leaking-goals reading are the same match.",
  modelLine: {
    source: "Squawka Signal",
    liverpool: 59,
    draw: 20,
    opponent: 21,
    note: "Signal makes Liverpool the pick at 59%, against a market price of 61-63%, which it reads as fair to marginally overpriced.",
  },
  sources: ["Squawka", "Opta Analyst", "Goal.com", "Fantasy Football Hub", "Sports Mole"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-02T08:15:00Z",
  competition: "PL",
  played: 2,
  headline:
    "Into a favourable September, the underlying numbers say Liverpool have been rescued rather than robbed. Two 2-2 draws, four goals conceded, and not a minute spent in front: they out-shot both opponents and were still beaten on expected goals at Anfield by Forest, whose 1.29 first-half xG dwarfed Liverpool's 0.25. Iraola's twenty-match unbeaten run reads well and hides the shape underneath it, eight wins to twelve draws, a manager's imprint arriving before his results. The volume of chances is real and the quality is not, which is the number a kind fixture list has to start correcting on Friday.",
  diagnosis: [
    {
      label: "Slow starts",
      detail: "Liverpool generated 0.25 xG in the first half against Forest to Forest's 1.29, and went behind inside 24 minutes to a goalkeeper's long ball. Both league games have been chased rather than led.",
      severity: "high",
      source: "Opta Analyst",
    },
    {
      label: "Chance quality, not chance volume",
      detail: "27 shots at Newcastle for 2.73 xG is roughly a tenth of a goal per attempt. The volume is there and the shot selection is not, which is the recognisable early-season symptom of a new manager's pressing shape without the fitness to sustain it.",
      severity: "medium",
      source: "Opta Analyst / Squawka",
    },
    {
      label: "Set-piece and transition concession",
      detail: "Four conceded in two, including a penalty given away by Alisson and a goal from a direct long ball. With no defender signed all summer and Gomez only now back in full training, this is the department the window did not address.",
      severity: "high",
      source: "Opta Analyst",
    },
    {
      label: "Munoz is the one clear positive",
      detail: "The £34m arrival from Osasuna scored his first Liverpool goal against Forest and led the team in shots (4), attempted dribbles (6) and duels contested (17), having also made the decisive contribution at Newcastle.",
      severity: "positive",
      source: "Opta Analyst",
    },
  ],
  matches: [
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
      xgAgainst: null,
      xgFirstHalfFor: null,
      xgFirstHalfAgainst: null,
      shotsFor: 27,
      pending: true,
      verdict: "27 shots and 2.73 xG at St James' Park, rescued by a Szoboszlai penalty nine minutes into stoppage time after Gakpo had scored. Reported xG against varies between sources, so it is left blank rather than guessed.",
      source: "Opta Analyst / Squawka",
    },
  ],
  totals: {
    xgFor: 4.34,
    xgAgainst: null,
    goalsFor: 4,
    goalsAgainst: 4,
    points: 2,
    note: "xG against is a partial total: only the Forest figure (2.30) is confirmed, so no season aggregate is published. Goals for and against are complete.",
  },
  optaFacts: [
    "Liverpool have not held a lead for a single minute of the Premier League season, trailing inside the opening half-hour in both matches before drawing level.",
    "Iraola is unbeaten in 20 consecutive Premier League matches (W8 D12), the first manager to reach 20 across spells at two different clubs: 18 with Bournemouth, 2 with Liverpool.",
    "Liverpool have failed to win either of their opening two league games for only the second time in 14 seasons; the other was 2022-23.",
    "Both Liverpool points have come from the 60th minute or later: Isak and Munoz retrieved the Forest draw, and Szoboszlai's penalty at Newcastle landed in the ninth minute of stoppage time.",
  ],
  sources: ["Opta Analyst", "Squawka", "NBC Sports", "ESPN"],
};

export const SQUAD_LOAD = {
  generatedAt: "2026-09-02T08:15:00Z",
  headline:
    "Closed until January, the squad turns every absence into arithmetic rather than a transfer, and it faces a September of five games in seventeen days. Eleven senior players left this summer and five arrived, one of them a goalkeeper who stays in Belgium until 2027. Iraola goes into a relentless month with four first-teamers out and a back line waiting on Joe Gomez, whom he has trained fully but publicly kept at arm's length, and no reinforcement possible whatever the pile-up costs.",
  minutesNote:
    "Premier League minutes are not published here yet. Only two league games have been played and no reliable per-player league minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "December at the earliest", note: "May miss the majority of 2026/27. With no forward signed, there is no alternative centre-forward behind Isak.", source: "Sports Mole / Liverpool.com" },
    { name: "Giovanni Leoni", issue: "ACL", expected: "Long-term", note: "Out since last season; one of the reasons the centre-back department is down to three senior bodies.", source: "Sports Mole" },
    { name: "Conor Bradley", issue: "Knee", expected: "November", note: "His absence is what made the refused Malo Gusto loan matter: Frimpong is now the only fit senior right-back.", source: "Sports Mole" },
    { name: "Federico Chiesa", issue: "Muscle injury (Como friendly)", expected: "No return date given", note: "Stays at the club after his father publicly closed off the Serie A talk on deadline night.", source: "This Is Anfield / Squawka" },
  ],
  returning: [
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 26 July)", status: "Full training", note: "Back in full training with a chance of featuring at Ipswich, but Iraola cooled it this week, repeating he puts a muscle problem of this kind at about a month and that Gomez is still some weeks short. His return would give Iraola a fourth senior centre-back and cover at right-back.", source: "Liverpool.com / Sports Mole" },
  ],
  startersLastMatch: {
    match: "Liverpool 2-2 Nott'm Forest, 29 August",
    xi: ["Alisson", "Frimpong", "Jacquet", "Van Dijk", "Kerkez", "Mac Allister", "Szoboszlai", "Munoz", "Wirtz", "Gakpo", "Isak"],
    changes: "Mac Allister recalled to the pivot; Gravenberch left out of a Premier League XI for the first time under Iraola.",
    source: "Opta Analyst",
  },
  depthRisk: [
    { position: "Right-back", level: "critical", detail: "Frimpong alone. Bradley out to November, Gusto loan refused on deadline day, Araujo can cover but is a centre-back by trade." },
    { position: "Centre-back", level: "high", detail: "Van Dijk, Jacquet and the loanee Araujo. Konate left for Real Madrid on a free, Leoni is on ACL rehab, Upamecano signed fresh Bayern terms, and no defender was bought. Gomez's return is the whole plan." },
    { position: "Centre-forward", level: "high", detail: "Isak alone until Ekitike returns. Gakpo is the false-nine fallback." },
    { position: "Central midfield", level: "medium", detail: "Jones sold to Inter for £30m and not replaced. Mac Allister, Gravenberch, Szoboszlai and Endo, with Nyoni pushing after Forest's £30m was rejected." },
  ],
  sources: ["Opta Analyst", "Sports Mole", "The Athletic", "This Is Anfield", "Rousing The Kop"],
};

export const SEASON_PROJECTION = {
  generatedAt: "2026-09-02T08:15:00Z",
  played: 2,
  points: 2,
  pointsPerGame: 1.0,
  projectedPoints: 38,
  projectedFinish: "Lower mid-table on current pace",
  headline:
    "A point a game projects to 38, a survival number rather than a European one, and September is where a two-game pace stops being an excuse and starts being a trend. The sample is tiny and worth saying so, but it is cheap to fix now and expensive to fix in November: five matches in seventeen days, three of them against sides currently between twelfth and sixteenth, are the chance to convert draws into the wins the projection is missing.",
  thresholds: [
    { label: "Champions League (top 5)", points: 68, gap: 30, note: "Historical par for fifth place in recent seasons. Requires roughly 1.83 points per game from here." },
    { label: "Europa League", points: 60, gap: 22, note: "Roughly sixth place par. Requires about 1.61 points per game from here." },
    { label: "Conference League", points: 55, gap: 17, note: "Seventh place par, often decided by cup outcomes as much as league finish." },
    { label: "Safety", points: 38, gap: 0, note: "The conventional survival line, and precisely where the current pace projects. This is the number that should not be within touching distance of a projection in September." },
  ],
  thresholdNote:
    "Threshold points are historical norms for those finishing places, not predictions. They are shown to convert a points-per-game pace into something legible, and they move as the season's own table develops.",
  runIn: [
    { date: "2026-09-04", opponent: "Ipswich Town", home: false, competition: "PL", oppPosition: 12, difficulty: "medium" },
    { date: "2026-09-12", opponent: "Fulham", home: true, competition: "PL", oppPosition: 16, difficulty: "easy" },
    { date: "2026-09-20", opponent: "Bournemouth", home: false, competition: "PL", oppPosition: 14, difficulty: "medium" },
    { date: "2026-10-11", opponent: "Manchester City", home: true, competition: "PL", oppPosition: 1, difficulty: "hard" },
    { date: "2026-10-17", opponent: "Brentford", home: false, competition: "PL", oppPosition: 5, difficulty: "hard" },
    { date: "2026-10-24", opponent: "Brighton", home: true, competition: "PL", oppPosition: 9, difficulty: "medium" },
  ],
  runInVerdict:
    "Three winnable league games open the month and define it: Ipswich away, Fulham at home, Bournemouth away, all currently between twelfth and sixteenth. Nine points is the corrected start a favourable draw demands; four or fewer and the Manchester City visit on 11 October arrives with the table already looking wrong. The Champions League phase against Atletico Madrid and Villarreal, plus a Carabao Cup tie with Tottenham, are folded in around them, which is where five games in seventeen days comes from.",
  sources: ["ESPN", "Sky Sports", "NBC Sports", "Opta Analyst"],
};
