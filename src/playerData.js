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
    id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "injured", outSince: "2026-07-25", injuryNote: "Thu Sep 3 — still the one absence with a settled answer, and the answer is no. The muscle injury from the Sunderland friendly on 26 July is past the month Iraola always put on it, and Wednesday's previews from Sports Mole, the Evening Standard and the Racing Post all listed him out of Portman Road, with nothing on Thursday moving him back in. He has trained fully this week without being risked, and Fulham at Anfield on 12 September is the next realistic target. Until then the cover behind Van Dijk, Jacquet and the loanee Araujo is nobody, and the one body who could have covered Frimpong on the right stays in Kirkby", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png",
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
    id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Wed Sep 2 — still months off, and the department behind him got thinner on Wednesday. Bradley is rehabilitating the knee he suffered against Arsenal in January, took no part in pre-season, and the club commit to no date; the reporting has eyed November, and Sports Mole now pencils the turn of the year. It matters more tonight because Joe Gomez, the one body who could have covered right-back in his absence, was ruled out of Ipswich by the previews, so Frimpong goes to Portman Road as the only fit senior right-back with Araujo, a centre-back, as the in-game alternative. A player the window could not replace, and the treatment room has not yet returned", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png",
    physical: { height: 180, weight: 72, pace: 83, acceleration: 85, sprintSpeed: 82 },
    career: [
      { years: "2019-2022", club: "Liverpool Academy", fee: null, type: "youth" },
      { years: "2023", club: "Bolton Wanderers (loan)", fee: null, type: "senior" },
      { years: "2022-", club: "Liverpool", fee: null, type: "senior" },
    ],
  },
  {
    id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Thu Sep 3 — a one-man department, and Thursday's previews confirm the help is not coming. Gomez, the one internal cover at right-back, was ruled out of Ipswich, Bradley remains months off, and the deadline-day Malo Gusto loan was refused, so Frimpong starts his third league game of the season as the only fit senior right-back with Araujo, a centre-back by trade, the in-game alternative. Ipswich's Abdul Fatawu, who beat Luke Shaw to make Leif Davis's goal at Old Trafford, is the first winger to test the arrangement. Fit if managed, still short of competition, and the position cannot do without him until January", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png",
    physical: { height: 171, weight: 66, pace: 91, acceleration: 93, sprintSpeed: 89 },
    career: [
      { years: "2017-2019", club: "Manchester City Academy", fee: null, type: "youth" },
      { years: "2019-2021", club: "Celtic", fee: "€350K", type: "senior" },
      { years: "2021-2025", club: "Bayer Leverkusen", fee: "€11M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Wed Sep 2 — the nearest of the long-term three, and still nowhere near a matchday. Leoni remains on ACL rehabilitation from the tear on his September 2025 debut, running on the outdoor pitches at the AXA Centre and understood since late July to be closer to a return than Bradley or Ekitike, both of whom Iraola calls way off. He is not in contention for Ipswich and Sports Mole puts his return no earlier than much later in the season. With Gomez ruled out of Friday, the senior centre-back cover is Van Dijk, Jacquet and the loanee Araujo, which is why an eighteen-year-old on a ten-month recovery is still being counted. The medical staff stay deliberately cautious with him", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png",
    physical: { height: 190, weight: 82, pace: 70, acceleration: 68, sprintSpeed: 72 },
    career: [
      { years: "2020-2023", club: "Padova", fee: null, type: "youth" },
      { years: "2023-2024", club: "Sampdoria", fee: "€1.5M", type: "senior" },
      { years: "2024-2025", club: "Genoa", fee: "€4M", type: "senior" },
      { years: "2025-", club: "Liverpool", fee: "€15M", type: "senior" },
    ],
  },
  {
    id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Wed Sep 2 — the partner for Friday, in a pairing with no reserve. Jacquet is set to start beside Van Dijk at Portman Road for a third league game, the Evening Standard noting he has been substituted twice in two matches for Ronald Araujo as he builds fitness after the shoulder problem managed since January surgery. With Gomez ruled out of Ipswich in Wednesday's team news and no defender bought, the loanee is the whole of the cover behind the pair, and Endo the emergency centre-half after that. A £60m twenty-year-old carrying the department the window left bare", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png",
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
    id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Thu Sep 3 — recalled against Forest, and dropped again by Thursday's previews. Mac Allister started the 2-2 with Forest beside Szoboszlai, one of Iraola's two changes, but the predicted teams for Ipswich from Yahoo, Sports Mole and The 4th Official send him back to the bench and restore Gravenberch. Iraola has held brief talks with Mac Allister about his role in the 2026-27 side, resisting the summer's Madrid whispers and a fleeting City shortlist rather than banking him as sell-to-buy fuel. It caps a strange arc: a runner-up who played the length of the World Cup final at MetLife and lost it in extra time, Argentina down to ten after Enzo Fernandez's 93rd-minute red and beaten by Ferran Torres on 106, five weeks that rewrote a club season in which he was among the most criticised at Anfield. The pivot is the one Liverpool selection still genuinely open, and this week it has turned against him", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png",
    physical: { height: 174, weight: 72, pace: 68, acceleration: 70, sprintSpeed: 66 },
    career: [
      { years: "2013-2019", club: "Argentinos Juniors", fee: null, type: "youth" },
      { years: "2019-2023", club: "Brighton & Hove Albion", fee: "€8M", type: "senior" },
      { years: "2023-", club: "Liverpool", fee: "€40M", type: "senior" },
    ],
  },
  {
    id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Thu Sep 3 — left out for an afternoon, and restored by the previews for the next. Gravenberch was dropped for the Forest game, Mac Allister taking his place beside Szoboszlai in one of two changes, and a side that has never held a lead this season conceded twice on the break without him; Thursday's predicted XIs for Ipswich put him straight back in the pivot. He featured in the first-half spell that put Liverpool two up on Leeds in pre-season before the reserves let the game slip to 2-4. Liverpool's most consistent player across a turbulent 2025-26 is the certainty at the base of whatever Iraola builds; everything around him is a question, he is not one of them", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png",
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
    id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Thu Sep 3 — the doubt is softening, not hardening. Thursday's previews move Chiesa toward contention, in line to feature at Ipswich and nearing full fitness after the back problem felt against Como, though Sports Mole still lists him among the doubts rather than the certainties. He has yet to appear this season, having played as a central striker in pre-season under Iraola. The exit talk died on deadline night when his father said publicly that Federico is not thinking about leaving, so he stays, the closest thing to a natural right-sided forward in the squad, and now close to being able to prove it", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png",
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
  generatedAt: "2026-09-03T08:30:00Z",
  // Machine-readable handoff written by the daily run, consumed by Antigravity.
  // Morning pass (Thu 3 September): no match played since Saturday's Forest draw. Lead is Iraola's
  // matchday-eve press conference before Ipswich, a first win sought, with Barcola in the running
  // to make his debut, Chiesa edged from major doubt into contention, and Gomez the one settled
  // absence. Around it: Gakpo's clear-the-air FSG talks after the collapsed GBP80m City move, the
  // net-spend post-mortem, and the Atletico Champions League opener the Wednesday after.
  // Under STEP 7.5 none of this is photographable: a press conference is not a moment, Barcola has
  // yet to play, and the next kick-off is tomorrow. NO cover image is requested and the render
  // stays on the pure-type fallback (src null). generatedAt is re-stamped as the cache-buster (COVER-00001).
  brief: {
    leadStory:
      "Andoni Iraola faces the cameras on Thursday, the eve of Liverpool's trip to Ipswich, with a first win of the season the only line that matters and a GBP123m debut to weigh: Bradley Barcola, still to play a minute, is in the running to start at Portman Road rather than wait on the bench. Federico Chiesa has edged from major doubt into contention, in line to feature though Sports Mole keeps him a doubt, while Joe Gomez is the one settled absence, out with the muscle that has held since July. Cody Gakpo, whose GBP80m move to Manchester City collapsed on deadline day, has held clear-the-air talks with Fenway Sports Group and turned back to the football. The pivot is the one open selection call, and Thursday's previews lean to Gravenberch over Mac Allister. Thirteenth on two points, the table frozen until Friday night, and Atletico Madrid waiting in the Champions League the Wednesday after.",
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
// Last refresh: 2026-09-03 (morning) — live 2026-27 table, matchweek 2. Matches ESPN's feed.
// Liverpool 13th on 2 points from two draws. Nobody has played since the weekend, so the table is
// frozen through the international break: the next movement is Friday night at Portman Road, where a
// win takes Liverpool to five and above their hosts. Regenerated from ESPN's endpoint this morning
// and byte-identical to yesterday's pull.
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
  generatedAt: "2026-09-03T08:30:00Z",
  overview:
    "Four clubs still share a perfect start, and the international break has left them there: Manchester City and Arsenal on plus-four, promoted Hull and Chelsea alongside on six, Brentford the best of the rest on four. The interest lower down is Liverpool, thirteenth on two points from two 2-2 draws and one place below Friday's hosts, Ipswich. A win at Portman Road lifts them to five and above the Tractor Boys; a third draw, or worse, and they carry a winless league record into the Champions League opener against Atletico Madrid the following Wednesday. At the foot, Fulham, Coventry, Crystal Palace, Aston Villa and Tottenham are still without a point, the last three in the drop zone on goal difference. Nothing moves now until Friday night.",
  teams: {
    "Liverpool": "Thirteenth on two points, unbeaten, winless, and yet to lead for a minute. Gomez is the one settled absence for Friday, Chiesa has edged back into contention, and the £123m Barcola is in the running to make his debut; the market prices a first win at Portman Road at 11-20.",
    "Manchester City": "Top on six and plus-four, level with Arsenal, and the league's biggest gross spenders at £440.3m, with Enzo Fernandez's £125m the summer's last marquee deal.",
    "Arsenal": "Second on six, tied with City on points and goal difference after two wins from two, and fourth in the net-spend table on £136.6m.",
    "Hull": "Third on six, two from two on their return to the top flight, still the opening fortnight's outlier.",
    "Chelsea": "Fourth on six and perfect under Xabi Alonso, a 4-3 over Brighton the latest, though deadline night ended with Monaco pulling Lamine Camara out of a £47m deal and Fernandez gone to City.",
    "Brentford": "Fifth on four and unbeaten, the best of the sides yet to drop a point through anything but a draw.",
    "Ipswich": "Twelfth on three, a place and a point above Liverpool and hosting them on Friday. Gary O'Neil may be without striker Emersonn (knee) as well as Philogene and Taylor; deadline signing Zian Flemming could start. Second in net spend at £190.7m.",
    "Bournemouth": "Fourteenth on one. Liverpool's opponents on 20 September, and the club where Iraola went nine league games without a win at the start of his own reign in 2023.",
    "Nott'm Forest": "Fifteenth on one after the 2-2 at Anfield, where Opta had them out-creating Liverpool 2.30 to 1.61 on expected goals.",
    "Crystal Palace": "Eighteenth and pointless after two defeats. Held Ismaila Sarr at £50m-plus all window, and on Wednesday his agent published an angry statement about it.",
    "Brighton": "Ninth on three. Their Conference League trip to Jablonec has moved the Anfield fixture to Sunday 25 October, 2pm.",
    "Tottenham": "Bottom on goals scored with two defeats from two, and third in net spend at £176m for the privilege.",
  },
};
// ─── Dispatches (hand-curated long reads — separate from the wire feed) ────
export const DISPATCHES = [
  {
    n: "01",
    headline: "The Manager Faces The Cameras, And The Squad Faces Suffolk.",
    byline: "Liverpool FC / Liverpool.com",
    dateline: "Kirkby \u00b7 3 September",
    category: "Manager",
    body:
      "Andoni Iraola takes his seat at the AXA Centre on Thursday morning with the first real questions of his Liverpool tenure lined up in front of him. Two 2-2 draws, thirteenth in the table, a net spend the league has crowned the largest, and now a \u00a3123m debutant in the building. The line the previews want him to confirm is whether Bradley Barcola starts at Portman Road or waits, and the truthful answer is that neither headline goes away without a win. Iraola has been here before, at Bournemouth, and knows the value of not saying much before a game he badly needs. The words are Thursday's. The result that changes the mood is Friday's.",
  },
  {
    n: "02",
    headline: "The Forward Who Nearly Left Is The Forward Who Has To Start.",
    byline: "This Is Anfield / Football365",
    dateline: "Anfield \u00b7 2 September",
    category: "Transfers",
    body:
      "Cody Gakpo spent the last day of the window agreeing personal terms with Manchester City on an \u00a380m move, and the day after it discovering he was staying. Liverpool, unable to land Sarr from Palace or Minteh from Brighton, declined to sanction an exit that would have left the attack a body short. On Monday Gakpo met Fenway Sports Group, partly, This Is Anfield reports, to clear the air. Football365's framing is blunter: a player who now has to get over the disappointment quickly. He made Isak's equaliser against Forest and starts the left again on Friday, a City player in all but paperwork for a weekend, a Liverpool one until at least January.",
  },
  {
    n: "03",
    headline: "One Doubt Softens, And One Absence Hardens Into A Date.",
    byline: "Sports Mole / Evening Standard",
    dateline: "Kirkby \u00b7 3 September",
    category: "Injuries",
    body:
      "The injury news moved in both directions this week. Federico Chiesa, a major doubt on Wednesday with a back problem, is written by Thursday's previews as in line to feature, nearing full fitness though Sports Mole keeps him among the doubts rather than the sure things. Joe Gomez went the other way: ruled out of Ipswich, the muscle from the Sunderland friendly now past the month Iraola put on it, Fulham on the twelfth his next target. It is a familiar arithmetic. A fit Chiesa is the nearest thing to a natural right-sided forward in the squad; an absent Gomez leaves Frimpong alone on the right and the back four one injury from Endo.",
  },
  {
    n: "04",
    headline: "A Promoted Side That Spent Like A Settled One, And May Be Without Its Striker.",
    byline: "Racing Post / Squawka",
    dateline: "Portman Road \u00b7 3 September",
    category: "Football News",
    body:
      "Ipswich come into Friday twelfth, one place and one point above Liverpool, beaten 5-2 at Old Trafford but not embarrassed by the manner of it. Gary O'Neil made fourteen signings and spent the second-largest net sum in the division, and his week has mirrored Liverpool's at the sharp end: Emersonn, the opening-day scorer, off at half-time at United with a knee problem and doubtful, with the deadline-day arrival Zian Flemming the Racing Post's pick to replace him. The threat that survives regardless is Abdul Fatawu on the right, who took Luke Shaw out of the Davis goal at United and now finds Liverpool's thinnest flank waiting for him.",
  },
  {
    n: "05",
    headline: "Two Draws, And Then Diego Simeone.",
    byline: "This Is Anfield / Opta Analyst",
    dateline: "Anfield \u00b7 3 September",
    category: "Race for Europe",
    body:
      "The wait for a first win does not get room to breathe. Beat Ipswich or draw a third time, the Champions League opens five days later, at home to Atletico Madrid on the ninth, the first of a September that packs five games into seventeen days. The numbers make the case for optimism and the case for worry at once: 2.73 expected goals at Newcastle, 27 shots, and yet one clean sheet in thirteen league matches and four of four goals conceded from transition or a set moment. A squad shut until January cannot buy the fix. It has to coach it, and it has to start on Friday, because the calendar behind Portman Road only climbs.",
  },
];

export const NEWS_DIGEST = {
  generatedAt: "2026-09-03T08:30:00Z",
  summary:
    "Andoni Iraola faces the cameras on Thursday morning, the eve of Liverpool's trip to Ipswich, with a first win of the season the only line that matters and a debut to weigh. Bradley Barcola, the £123m arrival still to kick a ball for the club, is in the running to start at Portman Road on Friday rather than watch from the bench, and Federico Chiesa has edged back from major doubt into contention, several previews now listing the Italian in line to feature even as Sports Mole keeps him among the doubts. The one absence that is settled is Joe Gomez, ruled out with the muscle that has held since July, so Frimpong again stands alone on the right. Cody Gakpo, whose £80m move to Manchester City collapsed on deadline day, has held clear-the-air talks with Fenway Sports Group and turned his focus to Suffolk. Behind it all the previews split only on the pivot, where Thursday's team-news pieces now lean to Gravenberch in for Mac Allister. Thirteenth on two points, the table frozen until Friday night, and the Champions League opener against Atletico Madrid waiting the Wednesday after.",
  keyTopics: [
    {
      title: "Iraola Fronts Up Before Portman Road: A First Win Sought, And A £123m Debut To Weigh (Liverpool FC / Liverpool.com, today)",
      detail:
        "Iraola takes his pre-match press conference on Thursday morning, streamed by the club at 10am, the eve of a trip to Ipswich with no win from two and a squad closed until January. The line the previews keep circling is Bradley Barcola: the £123m signing, yet to play a minute, is now reported in the running to make his debut in the XI rather than off the bench, four days after his announcement. Iraola is expected to be asked about the winless start, the net-spend headlines and the pivot; the honest answer to all of it is that only three points at Portman Road quietens any of it.",
      category: "matches",
    },
    {
      title: "Gakpo Clears The Air With FSG After The £80m City Move Collapses, And Turns To Suffolk (This Is Anfield / Football365, today)",
      detail:
        "The forward who nearly left is the forward who has to start. Cody Gakpo agreed personal terms on an £80m move to Manchester City that fell through on deadline day when Liverpool, unable to land a replacement after Palace refused Sarr and Brighton held firm on Minteh, declined to sanction the exit. He met Fenway Sports Group officials on Monday, partly to clear the air, and This Is Anfield reports him refocused on Friday; Football365 frames it as a player who now has to quickly get over the disappointment. He made Isak's equaliser against Forest and starts the left again with the sale off until at least January.",
      category: "transfers",
    },
    {
      title: "Chiesa Edges From Major Doubt Into Contention, In Line To Feature At Ipswich (Sports Mole / Liverpool.com, today)",
      detail:
        "The one piece of team news that softened rather than hardened. Federico Chiesa, listed a major doubt with a back issue on Wednesday, is described by Thursday's previews as in line to feature at Portman Road, the Italian nearing full fitness after the muscle problem felt against Como, though Sports Mole still carries him among the doubts rather than the certainties. He has yet to appear this season. In a squad Iraola himself concedes is light on natural width on the right, a fit Chiesa is the closest thing to an out-and-out option there, which is why every preview is watching his status.",
      category: "injuries",
    },
    {
      title: "The Only Argument Left Is The Pivot, And Thursday's Previews Lean To Gravenberch (Yahoo Sports / Sports Mole, today)",
      detail:
        "With the back line settled by elimination and the front three unchanged, the single live selection call is in central midfield. Thursday's predicted XIs from Yahoo Sports, Sports Mole and The 4th Official all restore Ryan Gravenberch beside Szoboszlai and drop Alexis Mac Allister to the bench, a reversal of the Forest night when Mac Allister was recalled and Gravenberch left out of a Premier League XI for the first time under Iraola. Everything around them, Alisson behind Frimpong, Jacquet, Van Dijk and Kerkez, with Munoz, Wirtz and Gakpo in the three, is the side that drew twice.",
      category: "tactics",
    },
    {
      title: "Ipswich Await With Their Own Striker Doubt, And Fatawu Aimed At Liverpool's Thin Flank (Racing Post / Squawka, today)",
      detail:
        "Gary O'Neil's promoted side sit twelfth, a place and a point above Liverpool, beaten 5-2 at Old Trafford last time out but dangerous on the counter. Emersonn, their opening-day scorer, limped off at half-time at United with a knee problem and is doubtful, the Racing Post tipping deadline-day arrival Zian Flemming to lead the line, with Philogene and Taylor already out. The name the previews keep returning to is Abdul Fatawu, who left Luke Shaw behind to make Leif Davis's goal at United and now runs at Frimpong, the only fit senior right-back Liverpool own.",
      category: "matches",
    },
    {
      title: "Atletico Madrid Wait In The Champions League The Wednesday After Ipswich (UEFA / This Is Anfield, today)",
      detail:
        "The winless start does not get long to breathe. Liverpool open the Champions League league phase at home to Atletico Madrid on Wednesday 9 September, five days after Portman Road, the first of the European nights a thin squad has to fold into a five-in-seventeen-days September. The framing that has taken hold this week is that Ipswich away is the fixture Iraola cannot afford to draw a third time, because the calendar behind it only steepens: Diego Simeone's side, then the domestic run, then the Carabao Cup tie with Tottenham pulled forward to 15 September.",
      category: "matches",
    },
    {
      title: "One Clean Sheet In Thirteen, And Munoz The Bright Spot In The Numbers (Opta Analyst / Squawka, today)",
      detail:
        "The underlying story of the two draws is not a lack of chances but a soft defence and a clinical one. Opta gave Liverpool 2.73 expected goals to Newcastle's 1.43 from 27 shots on Tyneside, then had them out-created 2.30 to 1.61 by Forest at Anfield, four goals scored and four conceded across the two. The figure that travels is one clean sheet in the last thirteen league games. The counter to it is Victor Munoz, the £34m arrival who scored on his full debut and led the side for shots, dribbles and duels against Forest, the summer signing making the earliest case for himself.",
      category: "tactics",
    },
    {
      title: "Thirteenth, Frozen, And One Win From Climbing Above Their Hosts (ESPN, today)",
      detail:
        "The table has not moved since the weekend and will not until Friday night. Manchester City, Arsenal, promoted Hull and Chelsea share the maximum on six, Brentford head the chasing pack on four, and Liverpool sit thirteenth on two points from two 2-2 draws, one place and one point below Ipswich. Fulham, Coventry, Palace, Villa and Tottenham have yet to register. A win at Portman Road takes Liverpool to five and above their hosts; a third draw, or worse, and the season is still without a win as Atletico arrive.",
      category: "matches",
    },
    {
      title: "Gomez The One Settled Absence, Fulham The Next Target (Sports Mole / Evening Standard, 1d ago)",
      detail:
        "Amid the movement, Joe Gomez remains the fixed point: ruled out of Ipswich by Wednesday's previews, the muscle injury from the 26 July Sunderland friendly now past the month Iraola put on it, with Fulham at Anfield on 12 September the next realistic return. His absence is the one that costs twice, taking away both a fourth senior centre-back and the only internal cover for Frimpong at right-back. Until he is back the defence is Van Dijk, Jacquet and the loanee Araujo, and the right flank is a one-man department.",
      category: "injuries",
    },
    {
      title: "Fourteenth Of Twenty For The Window: The Telegraph And BBC Keep The Post-Mortem Going (Telegraph / BBC Sport, 1d ago)",
      detail:
        "The reckoning over the summer's business has not quietened. The Telegraph's Mike McGrath ranks Liverpool fourteenth of twenty clubs for their transfer window, questioning the right-back cover and noting Curtis Jones left for Inter with no midfielder arriving in his place; BBC Sport's Aadam Patel flags the absence of an out-and-out defensive midfielder and thin cover at the back. It sits beside Sky Sports' figures making Liverpool the league's biggest net spender at £218.4m, a gross £250.1m outlay softened only by Jones's fee, with Salah, Robertson and Konate all leaving for nothing.",
      category: "transfers",
    },
    {
      title: "Hughes Still Expected For Al-Hilal, And Iraola's Boss May Change Before The Autumn (This Is Anfield / Liverpool.com, 1d ago)",
      detail:
        "The sporting director who assembled this squad is not expected to stay to defend it. Richard Hughes has been linked with Al-Hilal since July, the reporting now placing his exit in September once his Liverpool obligations end, though neither club has announced anything, so it stays expected rather than done. If it happens, Iraola, appointed by Hughes on a two-year deal in the summer, will answer to a new sporting director within weeks of the season starting, overseeing a squad he did not fully pick. Liverpool.com notes a section of supporters have turned on Hughes after the window.",
      category: "general",
    },
    {
      title: "Five Games In Seventeen Days: September Is Iraola's First Real Test (This Is Anfield, 1d ago)",
      detail:
        "The fixture list is the story as much as any of them. This Is Anfield counts five games in seventeen days once the season resumes, Ipswich the first, and as many as nine in twenty-nine after the international break if the Carabao Cup tie with Tottenham is won. Brighton's visit has moved to Sunday 25 October to give a day back after the Villarreal Champions League night; the Spurs cup tie has been pulled forward to Tuesday 15 September. It is a lot of football for a squad that added four bodies and lost the depth of Salah, Robertson, Konate and Jones.",
      category: "general",
    },
  ],
  sources: [
    "Liverpool FC",
    "Liverpool.com",
    "This Is Anfield",
    "Football365",
    "Sports Mole",
    "Yahoo Sports",
    "The 4th Official",
    "Evening Standard",
    "Racing Post",
    "Squawka",
    "Telegraph",
    "BBC Sport",
    "Opta Analyst",
    "Sky Sports",
    "UEFA",
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
  generatedAt: "2026-09-03T08:30:00Z",
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
    "Twelfth, a place and a point above Friday's visitors, and hosting them at a ground where both sides tend to score. Gary O'Neil, the former Liverpool academy coach who replaced Kieran McKenna in the summer, made fourteen signings, Zian Flemming from Burnley the last of them on deadline day, and Sky's figures put Ipswich second in the whole league for net spend at £190.7m, behind only Liverpool. Two matches have produced ten goals: a 2-1 win over Sunderland settled by Jack Clarke's late goal, then a 5-2 defeat at Old Trafford in which they led late in the first half before Bruno Fernandes's hat-trick. Emersonn, who scored the opener against Sunderland, went off at half-time at Old Trafford with a knee problem and is a doubt, so the Racing Post has Flemming leading the line on Friday. The Racing Post's key stats are the ones to hold: Ipswich have opened the scoring in each of their last five matches, and both teams have scored in six of their last seven at Portman Road.",
  shape:
    "4-2-3-1 with Lukic and Núñez as the double pivot, Fatawu and Maeda wide of Enciso, and Flemming or Emersonn alone up top. The full-backs push high, Davis on the left especially, and it was Fatawu's run past Luke Shaw that made Davis's goal at Old Trafford. The six-foot-nine Scherpen goes long early, which is precisely the pattern that undid Liverpool at Anfield on Saturday: a goalkeeper's long ball, a first touch conceded, and Forest ahead inside twenty-four minutes.",
  keyPlayers: [
    {
      name: "Abdul Fatawu",
      role: "Right winger",
      threat: "Ipswich's most dangerous creator: 3 chances created and an assist in two games, the assist coming when he beat Luke Shaw to set up Leif Davis at Old Trafford. 20 assists in two Championship seasons at Leicester before a reported £20m move. Runs at full-backs, which is Liverpool's thinnest position.",
      source: "Squawka / Racing Post",
    },
    {
      name: "Emersonn",
      role: "Centre-forward (doubt)",
      threat: "Scored the opener against Sunderland with 3 shots and 2 chances created in 66 minutes, but came off at half-time at Old Trafford with a knee problem and is a doubt for Friday.",
      source: "Squawka / Racing Post",
    },
    {
      name: "Zian Flemming",
      role: "Centre-forward (likely starter)",
      threat: "Ipswich's 14th signing of the window, from Burnley on deadline day, and the Racing Post's pick to start if Emersonn misses out. No Ipswich minutes yet, so no Ipswich numbers.",
      source: "Racing Post",
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
    "Lukic", "Núñez", "Fatawu", "Enciso", "Maeda", "Flemming",
  ],
  absentees: [
    { name: "Jaden Philogene", issue: "Ankle / foot", status: "Out" },
    { name: "Jack Taylor", issue: "Knee", status: "Out" },
    { name: "Emersonn", issue: "Knee (off at half-time at Old Trafford)", status: "Doubt" },
    { name: "Azor Matusiwa", issue: "Thigh", status: "Doubt" },
    { name: "Florentino Luis", issue: "Calf / shin / heel", status: "Doubt" },
  ],
  recentForm: [
    { date: "2026-08-30", opponent: "Manchester United", home: false, score: "2-5", result: "L", note: "Led late in the first half through Leif Davis, set up by Fatawu; Bruno Fernandes hat-trick turned it. Emersonn off at half-time with a knee problem." },
    { date: "2026-08-22", opponent: "Sunderland", home: true, score: "2-1", result: "W", note: "Emersonn and Jack Clarke scored on the opening weekend." },
  ],
  liverpoolAngle:
    "The mismatch this dossier keeps returning to is on Liverpool's right, and nothing this week has softened it. Gomez, the one body who could have covered Frimpong, is ruled out, so Fatawu, who left Luke Shaw behind to make Ipswich's goal at Old Trafford, runs at the only fit senior right-back Liverpool have, with Araujo the improvised alternative. Ipswich have opened the scoring in each of their last five matches and Liverpool have not led a minute of the season, so the early pattern is easy to write: Scherpen goes long, Liverpool concede a first touch, and the game is being chased again. Opta's fast-break count, nine goals conceded that way since last August, more than any Premier League side, is the number that connects the two league draws to this fixture. The counterweight is real: 2.73 expected goals at Newcastle and 27 shots say Liverpool will create enough to win if they do not start a goal behind. Whether Flemming or a half-fit Emersonn leads Ipswich's line matters less than who is defending Liverpool's right.",
  modelLine: {
    source: "Squawka Signal",
    liverpool: 59,
    draw: 20,
    opponent: 21,
    note: "Signal makes Liverpool the pick at 59%, against a market price of 61-63%, which it reads as fair to marginally overpriced. The Racing Post quotes bet365 at 11-20 Liverpool, 4-1 Ipswich, 7-2 the draw on Wednesday; a market price, not a prediction.",
  },
  sources: ["Squawka", "Opta Analyst", "Racing Post", "Sports Mole", "Fantasy Football Hub", "Evening Standard"],
};

export const FORM_TRENDS = {
  generatedAt: "2026-09-03T08:30:00Z",
  competition: "PL",
  played: 2,
  headline:
    "Two league games in, and the underlying numbers argue that Liverpool are closer to a win than two points suggest, and further from a clean sheet than any manager would like. On Tyneside they were the better side by a distance, 2.73 expected goals to 1.43 from 27 shots, and were undone by two fast breaks; at Anfield they were the worse side, out-created 2.30 to 1.61 by Forest and rescued late. Across the two games the season's xG is 4.34 for and 3.73 against, a modest edge that has produced four goals each way and not a minute in front. The pattern Opta names is transition defending, nine fast-break goals conceded since last August, more than any Premier League club, and a squad closed until January has to coach that out rather than buy it out.",
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
      label: "Fast-break concession",
      detail: "Both Newcastle goals came from fast breaks, and Opta count nine goals conceded from such situations since the start of last season, more than any Premier League team. Add a penalty given away by Alisson and a goal from a direct long ball against Forest, and four of four conceded have come from moments of transition or disorder rather than sustained pressure. No defender was signed and Gomez is ruled out of Friday.",
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
    xgFor: 4.34,
    xgAgainst: 3.73,
    goalsFor: 4,
    goalsAgainst: 4,
    points: 2,
    note: "Both totals are now complete: xG for is 2.73 (Newcastle) plus 1.61 (Forest); xG against is 1.43 (Newcastle) plus 2.30 (Forest), all Opta Analyst. First-half splits exist only for the Forest match and are not aggregated.",
  },
  optaFacts: [
    "Szoboszlai's penalty at 98:06 is Liverpool's latest in a Premier League game since Dirk Kuyt against Arsenal in April 2011 (101:48).",
    "Liverpool have conceded nine goals from fast breaks in all competitions since the start of last season, more than any other Premier League team; Newcastle was the first time they had conceded two in one league game since MD1 last season, against Iraola's own Bournemouth.",
    "Arne Slot in 2024-25 is the only one of Liverpool's last seven managers to win his first Premier League game in charge (D4 L2); Iraola's draw at Newcastle kept the pattern.",
    "Iraola went nine Premier League games without a win after taking over at Bournemouth in 2023; on Friday he meets Gary O'Neil, the man he replaced, two draws into his Liverpool tenure.",
  ],
  sources: ["Opta Analyst", "Squawka", "Racing Post", "ESPN"],
};

export const SQUAD_LOAD = {
  generatedAt: "2026-09-03T08:30:00Z",
  headline:
    "The squad Iraola carries to Portman Road on Friday is the one he has had all season, minus five, plus a debutant pushing to start. Barcola, the £123m arrival, is in the running to begin rather than wait; Chiesa has edged from major doubt into contention, in line to feature though not yet certain; Gomez is the one settled absence, out with the muscle that has held since July. That leaves Ekitike, Bradley and Leoni long-term, the back four one injury from Endo, and the only live selection call the pivot, where Thursday's previews lean to Gravenberch. Five games in seventeen days start here, as many as nine in twenty-nine if the Tottenham cup tie is won; the board below is what that will be played with.",
  minutesNote:
    "Premier League minutes are not published here yet. Only two league games have been played and no reliable per-player league minutes have been sourced, so this board tracks availability, starts and return timelines instead, and will fill with minutes as the season accumulates them. Nothing in this object is estimated.",
  unavailable: [
    { name: "Hugo Ekitike", issue: "Achilles rupture (April, surgery)", expected: "December at the earliest", note: "May miss the majority of 2026/27. With no forward signed, there is no alternative centre-forward behind Isak.", source: "Sports Mole / Liverpool.com" },
    { name: "Giovanni Leoni", issue: "ACL", expected: "Long-term", note: "Out since last season; one of the reasons the centre-back department is down to three senior bodies.", source: "Sports Mole" },
    { name: "Conor Bradley", issue: "Knee", expected: "November", note: "His absence is what made the refused Malo Gusto loan matter: Frimpong is now the only fit senior right-back.", source: "Sports Mole" },
    { name: "Federico Chiesa", issue: "Back muscle injury (Como friendly)", expected: "In contention for Ipswich; no confirmed return", note: "Thursday's previews have him edging back, in line to feature at Portman Road and nearing full fitness, though Sports Mole still lists him among the doubts rather than the certainties. Stays at the club after his father publicly closed off the Serie A talk on deadline night.", source: "Sports Mole / Liverpool.com" },
    { name: "Joe Gomez", issue: "Muscle (Sunderland, 26 July)", expected: "Ruled out of Ipswich; Fulham on 12 September the next target", note: "Trained fully this week, but Wednesday's previews from Sports Mole, the Evening Standard and the Racing Post all list him out for Portman Road, the injury now past the month Iraola put on it. His return would give a fourth senior centre-back and cover at right-back in one body.", source: "Sports Mole / Evening Standard / Racing Post" },
  ],
  returning: [],
  startersLastMatch: {
    match: "Liverpool 2-2 Nott'm Forest, 29 August",
    xi: ["Alisson", "Frimpong", "Jacquet", "Van Dijk", "Kerkez", "Mac Allister", "Szoboszlai", "Munoz", "Wirtz", "Gakpo", "Isak"],
    changes: "Mac Allister recalled to the pivot; Gravenberch left out of a Premier League XI for the first time under Iraola.",
    source: "Opta Analyst",
  },
  depthRisk: [
    { position: "Right-back", level: "critical", detail: "Frimpong alone, and Gomez, the one internal cover, ruled out of Friday. Bradley out to November at the earliest, Gusto loan refused on deadline day, Araujo can cover but is a centre-back by trade. Fatawu is the first winger to test it." },
    { position: "Centre-back", level: "high", detail: "Van Dijk, Jacquet and the loanee Araujo, with Gomez out for Ipswich. Konate left for Real Madrid on a free, Leoni is on ACL rehab, Upamecano signed fresh Bayern terms, and no defender was bought. One injury here and Endo plays centre-half." },
    { position: "Centre-forward", level: "high", detail: "Isak alone until Ekitike returns. Gakpo is the false-nine fallback." },
    { position: "Central midfield", level: "medium", detail: "Jones sold to Inter for £30m and not replaced. Mac Allister, Gravenberch, Szoboszlai and Endo, with Nyoni pushing after Forest's £30m was rejected." },
  ],
  sources: ["Opta Analyst", "Sports Mole", "Evening Standard", "Racing Post", "Empire of the Kop"],
};

export const SEASON_PROJECTION = {
  generatedAt: "2026-09-03T08:30:00Z",
  played: 2,
  points: 2,
  pointsPerGame: 1.0,
  projectedPoints: 38,
  projectedFinish: "Lower mid-table on current pace",
  headline:
    "A point a game projects to 38, a survival number rather than a European one, and two games is far too small a sample to trust it as anything more than a warning. What gives it weight is the squad, not the pace: the club that spent the league's largest net sum, £218.4m by Sky's count, goes to Ipswich without Gomez and cannot sign until January, so the only lever left is results. Friday opens a run of three league games against sides currently between twelfth and sixteenth, and it is as gentle as the schedule gets before Manchester City in October.",
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
    { date: "2026-10-25", opponent: "Brighton", home: true, competition: "PL", oppPosition: 9, difficulty: "medium" },
  ],
  runInVerdict:
    "Ipswich away on Friday, Fulham at home on the 12th, Bournemouth away on the 20th: three league games against sides currently twelfth, sixteenth and fourteenth, and the difference between nine points and four is the difference between a season on course and a Manchester City visit on 11 October with the table already asking questions. Atletico Madrid arrive at Anfield next Wednesday for the Champions League opener and Tottenham on Tuesday 15 September in the Carabao Cup, and Brighton's visit has now moved to Sunday 25 October because of their Conference League schedule. Win the cup tie and Empire of the Kop counts nine games in twenty-nine days after the break, played by the squad on this page and no other.",
  sources: ["ESPN", "Sky Sports", "Empire of the Kop", "Opta Analyst", "Liverpool FC"],
};
