import { useState, useMemo } from "react";
import _ from "lodash";

// ─── Liverpool FC Player Tracker ────────────────────────────────────────────
// Current 2025-26 squad data, form ratings, stats, and RSS news feeds

const LFC_RED = "#C8102E";
const LFC_DARK = "#1a1a2e";
const LFC_GOLD = "#F6EB61";

// ─── Player Avatar ──────────────────────────────────────────────────────────
// Loads real PL CDN headshots in a normal browser; falls back to styled
// initials + jersey number when running inside a sandboxed preview.
function PlayerAvatar({ player, size = 64 }) {
  const [imgFailed, setImgFailed] = useState(false);
  const posColors = { GK: "#f1c40f", DEF: "#3498db", MID: "#2ecc71", FWD: "#e74c3c" };
  const accent = posColors[player.position] || "#888";
  const initials = player.name.split(" ").map(w => w[0]).join("").slice(0, 2);

  const borderColor = player.status === "injured" ? "#dc3545"
    : player.status === "recovering" ? "#fd7e14"
    : player.status === "doubtful" ? "#ffc107"
    : LFC_RED;

  const statusIcon = player.status === "injured" ? "+"
    : player.status === "recovering" ? "~"
    : player.status === "doubtful" ? "?"
    : null;
  const statusBg = player.status === "injured" ? "#dc3545"
    : player.status === "recovering" ? "#fd7e14"
    : player.status === "doubtful" ? "#ffc107"
    : null;

  return (
    <div style={{ position: "relative", flexShrink: 0, width: size, height: size }}>
      <div style={{
        width: size, height: size, borderRadius: "50%", overflow: "hidden",
        border: `3px solid ${borderColor}`, background: "#2a2a4a",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {!imgFailed ? (
          <img
            src={player.image}
            alt={player.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: `linear-gradient(135deg, ${accent}55, ${LFC_RED}88)`,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 1,
          }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: size * 0.3, lineHeight: 1 }}>{initials}</span>
            <span style={{ color: "#ffffffaa", fontWeight: 700, fontSize: size * 0.17 }}>#{player.number}</span>
          </div>
        )}
      </div>
      {statusIcon && (
        <div style={{
          position: "absolute", bottom: -1, right: -1,
          width: size * 0.32, height: size * 0.32, borderRadius: "50%",
          background: statusBg, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: size * 0.2, fontWeight: 900, color: "#fff",
          border: "2px solid #1e1e3a", lineHeight: 1,
        }}>
          {statusIcon}
        </div>
      )}
    </div>
  );
}

// ─── Player Data (2025-26 Season · Updated June 11, 2026) ─────────────────
// Statuses: "fit" | "injured" | "doubtful" | "recovering"
// injuryNote: short description shown on card when not fit
const PLAYERS = [
  // ── Goalkeepers ───────────────────────────────────────────────────────────
  { id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Sat Sep 5 — the 138th, and past Elisha Scott into fourth on the club's all-time list. The club counted it on Saturday: Friday's shutout at Portman Road was Alisson's 138th for Liverpool in 336 appearances, 104 of them in the Premier League, and only Reina (177), Grobbelaar (267) and Clemence (323) stand above him now. It needed five saves, FotMob's 8.2, a recovery after spilling an Enciso shot and a late deflected Clarke effort that went wide; Ipswich were ahead on pre-shot expected goals, 0.73 to 0.66, though Sofascore's post-shot model had Liverpool 1.70 to 0.47. The first league clean sheet since April. Atletico on Wednesday, beaten 3-0 in Bilbao on Saturday, are the harder test of it", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png" },
  { id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Fri Sep 4 — an unused substitute again, on the night the man ahead of him kept a first clean sheet. Mamardashvili sat on the bench at Portman Road with Frimpong, Tsimikas, Endo and Ngumoha while Alisson made five saves in the 2-0 over Ipswich, the Brazilian's first league shutout since April. The tour spell as senior keeper while Alisson rested is a memory; the Georgian is the deputy, shopped for a loan all summer without a taker on terms, and the club still prefers to protect the asset rather than sell. The Carabao Cup tie against Tottenham on the 15th is his likeliest start before the break", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png" },

  // ── Defenders ─────────────────────────────────────────────────────────────
  { id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Tue Sep 8, evening — the captain's evening is somebody else's contract and somebody else's hamstring. Van Dijk trained as normal on Tuesday while Gakpo sat out with tightness and Gomez rejoined the group, and he goes into Wednesday as the man Opta remembers: the 92nd-minute header that beat Atletico here a year ago, and, per Opta Analyst, still no goal this season for a defender whose bullet header is treated as inevitable. His deal runs only to 2027, which on the day Mac Allister went public about his own is worth noting; the AC Milan interest was knocked back without a bid. Eighty-one minutes protecting a first lead of the season on Friday, FotMob's 7.7, a first clean sheet since April, and Alvarez, per Simeone, will not start against him.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png" },
  { id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Tue Sep 8, evening — back in the group, and this time the cameras saw it. Gomez trained with the full squad on Tuesday afternoon for the first time in more than a month, Joyce confirming it, part of a twenty-man outfield group that was missing Gakpo instead; six weeks on from the muscle injury in the Sunderland friendly on 25 July. The club's own team-news note has him 'nearing the end of his recovery', which is short of available, and Rush The Kop still pencils Fulham on Saturday as the first matchday, so the Van Dijk and Jacquet pairing holds for Atletico and the bench is where he might first reappear. A fourth senior centre-back, and with Araujo now a right-back by evidence, a third body there too. Iraola has not named him for Wednesday and nobody else has either.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png" },
  { id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Tue Sep 8, evening — the manager's endorsement, unprompted, on the eve of the tie. 'He's a player that I trust, definitely,' Iraola said of Kerkez at the Anfield press conference, 'I know him very well, I know what he can achieve,' a Bournemouth relationship carried into a European night; he played 'really well' on Friday, the manager added, and needs to improve 'like all the others, like I have to'. On the grass his sixth-minute recovery around halfway fed the Gakpo pass for Isak's opener, SI marked him 6.7 in a back four that kept a first clean sheet, and Giuliano Simeone, in SI's reading, is Wednesday's assignment rather than Grimaldo. First choice by a distance with Robertson gone and Tsimikas unused; if Gakpo's tightness keeps him out, the understanding in front of Kerkez changes to Barcola.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png" },
  { id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Tue Sep 8, evening — Rush The Kop's Tuesday list gives him no date and a hint. Bradley, still rehabilitating the left knee ligament damage from the Arsenal game in January, remains in the Champions League squad, which the site reads as optimism that he returns during the league phase rather than after it; Iraola's own placing of him, behind Gomez, Leoni and Chiesa, has not changed, and Sports Mole's guess is the Manchester United game on 21 November. The right-back shirt in his absence is Araujo's by evidence, nine duels from ten at Ipswich, though Opta Analyst's predicted eleven for Wednesday restores Frimpong. Gomez, who trained fully on Tuesday for the first time in a month, is the department's next body back before he is.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png" },
  { id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Sun Sep 6 — the shirt has changed hands, and the reporting reads it as settled rather than rotated. Frimpong sat out all ninety at Portman Road as Araujo took a first start at right-back; across the two opening draws he had won six of sixteen duels or tackles, and FourFourTwo and Liverpool.com now frame Friday as Iraola choosing Araujo for the Champions League nights, a message to the summer signing rather than a demotion. Nothing is reported as wrong physically; this is selection. His recovery pace is still the specific answer to an inside-out winger, which is why Atletico's Lookman, quick and cutting in from the left, is the case for restoring him on Wednesday.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png" },
  { id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Tue Sep 8, evening — the day the other returns moved, his did not. Gomez trained with the group on Tuesday for the first time in a month; Leoni, nearly a year on from the ACL tear on his September 2025 debut, stays on the plan Iraola set out last Thursday, group training during the international window later this month with no matchday attached, Rush The Kop guessing at Manchester City on 11 October. Jacquet, the centre-back in his place, is about to make a Champions League debut beside Van Dijk with Araujo at right-back, so the senior cover behind them in Europe is nobody until Gomez is passed fit. Named in the Champions League squad regardless.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png" }, /* Leoni - TheSportsDB cutout */
  { id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Tue Sep 8, evening — a Champions League debut on Wednesday, and the striker he was to face will start on the bench. Simeone said at Anfield on Tuesday that Alvarez 'is getting better' but that he does not see him starting, which leaves Jacquet, per SI's preview, meeting Jonathan David or Lee rather than the man who scored ten in the competition last season. He completed a first full ninety at Ipswich after 69 and 76 minutes in August, booked on 52, FotMob's 7.4, Iraola admitting a second-half doubt he chose to ride out. Gomez trained fully on Tuesday, the first time since July, so the cover behind Jacquet in Europe is no longer nobody, only not yet.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png" },
  { id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Tue Sep 1 — out on loan, as the club always meant him to be. Ndukwe joined Levante on a season-long loan agreed on deadline day, the Spanish club covering his wage. Six foot six and nineteen, he was Liverpool's standout defender beside Van Dijk against Monaco in pre-season, but born in Austria and short of the points a post-Brexit work permit demands, he could not play a competitive fixture for Liverpool until at least January. A season abroad is the development the situation always called for: he goes to play now, rather than to wait", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png" },

  // ── Midfielders ───────────────────────────────────────────────────────────
  { id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Tue Sep 8, evening — 'very, very sad', and he said it at Anfield, beside the manager, the day before the European night. Mac Allister used the pre-Atletico press conference to confirm that the club is 'not in a position' to offer him a new contract, that the message came through his agent and not in a conversation with him, that 'there were options to leave this summer', and that he has not discussed his future with Iraola; two years remain on the 2023 deal, and Szoboszlai and Gravenberch have both been renewed this year. 'Hopefully they change their minds,' he said, and promised a hundred per cent regardless. Iraola called him important and said there is 'still a lot of time'. On the pitch the pivot is his: 84 minutes at Ipswich, FotMob's 7.5, and SI's Tuesday eleven keeps him for Wednesday with Gravenberch pencilled for Fulham.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png" },
  { id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Tue Sep 8, evening — the renewal that stung the man beside him. Mac Allister named Gravenberch and Szoboszlai on Tuesday as the two midfielders handed new long-term deals this year while his own was withheld, 'happy because they deserve it, but at the same time a little bit sad'. Gravenberch himself is a selection question, not a fitness one: SI's Tuesday eleven keeps Mac Allister for Atletico and pencils Gravenberch for Fulham on Saturday, the morning previews had it the other way round, and Iraola told the room his players do not yet know the line-up. Two league games without a start under the new manager, 26 minutes off the bench at Ipswich to hold the 2-0.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png" },
  { id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Tue Sep 8, evening — named by the man beside him as one of the two renewals that stung. Mac Allister told Tuesday's press conference that watching Szoboszlai and Gravenberch sign long-term deals this year made him 'happy because they deserve it, but at the same time a little bit sad' that his own was withheld; Szoboszlai's runs to 2031. His own contribution to the build-up was Monday's TNT sit-down with Gerrard, and on the grass a 150th appearance at Ipswich, FotMob's 7.6, three shots on target and a penalty VAR took back for an offside. Every preview starts him in the pivot on Wednesday; Barrios and Hjulmand are the opposite numbers, and Baena dropping between the lines is the ball he screens", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png" },
  { id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Sun Sep 6, evening — the league-only emergency centre-half, on a week when Europe comes first. Endo was an unused substitute at Ipswich with Frimpong, Tsimikas, Ngumoha and Mamardashvili, and was left off the 25-man Champions League squad on Thursday with McConnell preferred, so Wednesday's opener against Atletico is not available to him whatever happens; DaveOCKOP's Sunday count lists him with Chiesa as the two ineligible names. In the Premier League he remains the fallback behind Van Dijk and Jacquet while Araujo plays right-back, and if Simeone's back three arrives it changes nothing for him. Found no mover in the summer window and stays as depth, with the Carabao Cup tie against Tottenham on the 15th his likeliest start", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png" },
  { id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Tue Sep 8, evening — SI's eve-of-tie word for him is consistency, and the number is still nought. Wirtz goes into his first Champions League game under Iraola with no goal and no assist in three league matches, the Forest performance sandwiched, in SI's phrase, between forgettable games at Newcastle and Ipswich, where his 33rd-minute cross was turned in by Isak and flagged. He trained on Tuesday; Gakpo, who took both assists at Portman Road, did not, which if it holds makes Wirtz the senior creator on the pitch against a block Mac Allister called 'pretty low' and 'hard to break down'. Every preview keeps him at the ten.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png" },
  { id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Tue Sep 8, evening — the deal still pending on the day the man he replaced said his own was withheld. Nyoni's new contract remains unsigned per the weekend reporting, while Mac Allister, whom he came on for at 84 at Portman Road, told Tuesday's press conference the club is not in a position to renew him. Twenty minutes and a win on Friday; Forest's £30m rejected before the window shut; with Endo left off the Champions League list he is a body closer to a European bench on Wednesday than he was a fortnight ago. Koumas, Chambers and McConnell trained with the group on Tuesday too.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A" },

  // ── Forwards ──────────────────────────────────────────────────────────────
  { id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "doubtful", injuryNote: "Tue Sep 8, evening — tightness in a muscle, and the one forward nobody was dropping is suddenly the one nobody can name. Gakpo felt the problem before Tuesday afternoon's session at the AXA Training Centre and sat it out, Paul Joyce and the Echo both reporting the absence as a precaution rather than a ruling-out, on the day Iraola told the press conference Barcola is 'ready to play more minutes'. The case for his presence was never stronger: a goal and three assists in three league games, per Opta, both of Isak's Portman Road goals from his passes, VAVEL's 0.45 expected assists per 90. If he is fit he starts, on whichever flank Barcola does not; if he is not, Munoz keeps the right. Contracted to 2030, the City move dead since deadline day.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png" },
  { id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Tue Sep 8, evening — the supplier of all three of his league goals missed training, and the striker he was measured against will start on the bench. Gakpo sat out Tuesday's session with muscle tightness, a precaution per Joyce, which leaves Isak, one goal in thirteen career Champions League games per Sports Mole, to face Atletico without the passer behind both Ipswich finishes unless the evening improves. Simeone, meanwhile, said Alvarez 'is getting better' but will not start, so the opposite nine is David, untested for them, or Lee. VAVEL has Isak at 0.89 expected goals per 90 this season against 0.41 last; every preview starts him because Ekitike has no date and the false-nine fallback is now the doubt. Hancko, per The Hard Tackle, is the defender likeliest to step out and meet him", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png" },
  { id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Tue Sep 8, evening — the striker's week begins with the man who feeds his replacement in doubt. Ekitike continues rehabilitation from the April Achilles rupture with no timeframe, 'Hugo will go later', December the earliest anyone has named; Rush The Kop reads his place in the Champions League squad as optimism for a return before late January. Isak, with three league goals in three, faces Atletico on Wednesday with Gakpo, who supplied all of them, missing Tuesday's training with tightness, and Gomez, back in the group the same afternoon, the only return of the day. Three home games in seven days, none of them within his reach.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png" },
  { id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", injuryNote: "Tue Sep 8, evening — a doubt above him in the queue for the first time this season, and still no preview that names him. Gakpo missed Tuesday's session with muscle tightness, which if it holds opens a flank; the reporting hands it to Munoz, with Barcola, 'ready to play more minutes' per Iraola, taking the other, and Ngumoha stays where he was at Ipswich, an unused substitute alongside Frimpong, Tsimikas, Endo and Mamardashvili, Koumas the stoppage-time forward change instead. Iraola's defence of him on the right still stands, the five-year contract is still unannounced, and as an under-21 he needed no registering for either squad list, which keeps him eligible for everything. The Carabao Cup tie against Tottenham on the 15th, the third home game in seven days, is the realistic start", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png" },
  { id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Tue Sep 8, evening — the Echo's Tuesday training report names him as the one still sidelined, a back problem now rather than a muscle one. Chiesa, off the Champions League list with Endo, misses Atletico whatever the diagnosis, and his return to group training is set for the September international break per Iraola, which closes Fulham, Tottenham in the cup and Bournemouth too; Rush The Kop guesses Manchester City on 11 October for a first matchday. On the day Gomez rejoined the group and Gakpo left it, the flank he would rejoin is being reshuffled without him: Barcola 'ready to play more minutes' per the manager, Munoz in reserve. His father closed off the Serie A talk on deadline night.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png" },

  // ── Late additions ────────────────────────────────────────────────────────
  { id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", injuryNote: "Fri Sep 4 — third-choice, not in the matchday squad at Ipswich, and dependable with it. Woodman watched Alisson keep a first clean sheet of the season from outside the eighteen, Mamardashvili the keeper on the bench. Two Premier League starts across 2025-26 and a steady squad option on a new deal. No drama, which at his position is the point", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png" },
  { id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Tue Sep 8, evening — dropped by the previews at noon and back in the argument by four. Gakpo's muscle tightness, and his absence from Tuesday's session, reopens the right flank Munoz has started twice in the league, because every eleven that moved Gakpo to the right to make room for Barcola on the left now has a gap there; Rush The Kop, for its part, still expects Barcola on the bench. FotMob's 6.8 at Portman Road, SI noting a third different right-sided starter in three games, the debut goal against Forest and the penalty won at Newcastle. In since June on a six-year deal to 2032, a World Cup winner with Spain at twenty-two.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg" },
  { id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Sun Sep 6, evening — his shirt, and a free agent's name was floated for it anyway. Araujo's first Liverpool start came at right-back at Portman Road, FotMob's 7.7, nine duels won from ten and the most aerials on the pitch, and the right side of Araujo and Jacquet kept a first clean sheet of the season; FourFourTwo reads it as Iraola settling his Champions League right-back. On Sunday Dani Carvajal's name surfaced for the same position, a pundit's aside on TNT rather than a negotiation, which says more about the depth behind him than about his place in it. Arrived from Barcelona on loan with a £47m option that Hughes, now gone, negotiated. If Simeone goes to a back three, Lookman's threat recedes and so does the one argument for Frimpong. He wears 33.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg" },
  { id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Tue Sep 8, evening — 'ready to play more minutes', in the manager's words, and the day's training report made the sentence louder. Iraola told Tuesday's press conference that Barcola 'has been training quite normally', that the only caveat is the pre-season minutes he never had, and that he does not see him 'like limited'; a few hours later Gakpo missed the session with muscle tightness, the Echo noting it raises the chance of a first Barcola start. SI and Opta Analyst both start him on the left on Wednesday, in a competition he has won twice with PSG; Rush The Kop still expects the bench. A guaranteed £106m rising to £123m, second on the club's list behind Isak. No. 29, and a first Anfield appearance either way.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg" },
];

// ─── RSS Feed Sources ───────────────────────────────────────────────────────
const RSS_FEEDS = [
  { name: "Liverpool FC Official", url: "https://www.liverpoolfc.com/news/feed", category: "official", color: "#C8102E" },
  { name: "BBC Sport - Liverpool", url: "http://feeds.bbci.co.uk/sport/football/teams/liverpool/rss.xml", category: "major", color: "#BB1919" },
  { name: "Sky Sports - Liverpool", url: "https://www.skysports.com/rss/12040", category: "major", color: "#E10600" },
  { name: "This Is Anfield", url: "https://www.thisisanfield.com/feed/", category: "fan", color: "#D4213D" },
  { name: "Empire of the Kop", url: "https://www.empireofthekop.com/feed/", category: "fan", color: "#8B0000" },
  { name: "The Anfield Wrap", url: "https://www.theanfieldwrap.com/feed/", category: "fan", color: "#B22222" },
  { name: "ESPN FC - Liverpool", url: "https://www.espn.com/espn/rss/soccer/news", category: "major", color: "#CC0000" },
];

// ─── Latest News (sourced from LFC, BBC, Sky, TIA, EOTK, TAW) ─────────────
const LATEST_NEWS = [
  { source: "Sky Sports", title: "Mac Allister 'very, very sad' Liverpool will not offer a new contract, admits 'there were options to leave this summer'", time: "today", category: "major" },
  { source: "Liverpool Echo", title: "Gakpo misses training with muscle tightness on the eve of Atletico, a precaution per Joyce, as Gomez rejoins the group", time: "today", category: "major" },
  { source: "Liverpool FC", title: "Iraola: Barcola 'ready to play more minutes'; 'I will not tell you the starting line-up', the players don't know it either", time: "today", category: "official" },
  { source: "DaveOCKOP", title: "Simeone at Anfield: Alvarez 'getting better' but will not start, David 'only just arrived', Bilbao was 'switching off'", time: "today", category: "major" },
  { source: "Opta Analyst", title: "Supercomputer gives Liverpool 53%: Iraola winless in four against Simeone, Reds never beaten in a home European opener", time: "today", category: "fan" },
  { source: "Goal", title: "Liverpool announce £300m Turkish Airlines shirt deal from 2027-28, Standard Chartered era ends after 17 years", time: "today", category: "major" },
  { source: "Liverpool FC", title: "Iraola press conference: Simeone reunion, a 'special night' and the dugout he dreamed of when he started coaching", time: "today", category: "official" },
  { source: "Atlético de Madrid", title: "The 24-man list for Liverpool: Alvarez, David, Baena and Cardoso travel; Sorloth injured, Ortiz suspended", time: "today", category: "official" },
  { source: "SI", title: "Predicted Liverpool XI vs Atletico: Barcola unleashed on the left, Gakpo right, Mac Allister keeps the pivot", time: "today", category: "fan" },
  { source: "Rush The Kop", title: "One suspended, two ineligible, six injured: the full Liverpool v Atletico absentee list", time: "today", category: "fan" },
  { source: "Caught Offside", title: "Romano confirms Manchester United deal for Liverpool academy midfielder Isaac Konde, 16, around £1m plus add-ons", time: "today", category: "fan" },
  { source: "Anfield Watch", title: "Liverpool beat Borussia Dortmund to Colombian U17 star Samuel Martinez, who joins on his 18th birthday", time: "today", category: "fan" },
  { source: "Liverpool.com", title: "Salah becomes the first foreign Trabzonspor player in 25 years of Opta records to score four in his first three starts", time: "1d ago", category: "fan" },
  { source: "Al Hilal FC", title: "Richard Hughes appointed sporting director of Al-Hilal, two days after leaving Liverpool", time: "2d ago", category: "official" },
];

// ─── Next Fixture ──────────────────────────────────────────────────────────
const NEXT_MATCH = {
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
const RESULTS = [
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

// ─── Helper Components ──────────────────────────────────────────────────────

function FormBadge({ form }) {
  let color = "#6c757d";
  let label = "Average";
  if (form >= 8.0) { color = "#28a745"; label = "Excellent"; }
  else if (form >= 7.5) { color = "#5cb85c"; label = "Good"; }
  else if (form >= 7.0) { color = "#ffc107"; label = "Decent"; }
  else if (form >= 6.5) { color = "#fd7e14"; label = "Fair"; }
  else { color = "#dc3545"; label = "Poor"; }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{
        width: 48, height: 48, borderRadius: "50%", background: color,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "#fff", fontWeight: 700, fontSize: 16, boxShadow: `0 0 12px ${color}55`
      }}>
        {form.toFixed(1)}
      </div>
      <span style={{ fontSize: 11, color: "#aaa", textTransform: "uppercase", letterSpacing: 1 }}>{label}</span>
    </div>
  );
}

function StatBar({ label, value, max, unit = "" }) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div style={{ marginBottom: 6 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#bbb", marginBottom: 2 }}>
        <span>{label}</span>
        <span style={{ color: "#fff", fontWeight: 600 }}>{value}{unit}</span>
      </div>
      <div style={{ height: 4, borderRadius: 2, background: "#333", overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", borderRadius: 2, background: `linear-gradient(90deg, ${LFC_RED}, ${LFC_GOLD})`, transition: "width 0.6s ease" }} />
      </div>
    </div>
  );
}

function PositionTag({ position }) {
  const colors = { GK: "#f1c40f", DEF: "#3498db", MID: "#2ecc71", FWD: "#e74c3c" };
  return (
    <span style={{
      background: colors[position] || "#888", color: "#fff", fontSize: 10,
      padding: "2px 8px", borderRadius: 10, fontWeight: 700, letterSpacing: 1
    }}>
      {position}
    </span>
  );
}

function StatusBadge({ status }) {
  if (status === "fit") return null;
  const cfg = {
    injured:    { bg: "#dc354522", border: "#dc3545", color: "#ff6b6b", label: "INJURED" },
    recovering: { bg: "#fd7e1422", border: "#fd7e14", color: "#ffa94d", label: "RECOVERING" },
    doubtful:   { bg: "#ffc10722", border: "#ffc107", color: "#ffe066", label: "DOUBTFUL" },
    suspended:  { bg: "#6c757d22", border: "#6c757d", color: "#adb5bd", label: "SUSPENDED" },
  };
  const c = cfg[status] || cfg.injured;
  return (
    <span style={{
      background: c.bg, border: `1px solid ${c.border}`, color: c.color,
      fontSize: 9, padding: "2px 8px", borderRadius: 10, fontWeight: 700, letterSpacing: 1.2,
    }}>
      {c.label}
    </span>
  );
}

// ─── Player Card ────────────────────────────────────────────────────────────

function PlayerCard({ player, expanded, onToggle }) {
  const formColor = player.form >= 8.0 ? "#28a745"
    : player.form >= 7.5 ? "#5cb85c"
    : player.form >= 7.0 ? "#ffc107"
    : player.form >= 6.5 ? "#fd7e14"
    : "#dc3545";

  return (
    <div
      onClick={onToggle}
      style={{
        background: expanded ? "linear-gradient(135deg, #1e1e3a, #2a1525)" : "#1e1e3a",
        borderRadius: 14, padding: 0, cursor: "pointer",
        border: expanded ? `2px solid ${LFC_RED}` : "2px solid transparent",
        transition: "all 0.3s ease", overflow: "hidden",
        boxShadow: expanded ? `0 8px 32px ${LFC_RED}22` : "0 2px 12px #0005",
        display: "flex", flexDirection: "column",
      }}
    >
      {/* Header — compact */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px 8px" }}>
        <PlayerAvatar player={player} size={44} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "nowrap", overflow: "hidden" }}>
            <span style={{ color: LFC_RED, fontWeight: 800, fontSize: 11 }}>#{player.number}</span>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{player.name}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3, flexWrap: "wrap" }}>
            <PositionTag position={player.position} />
            <StatusBadge status={player.status} />
          </div>
        </div>
        {/* Compact form circle */}
        {(player.status === "fit" || player.status === "doubtful") && player.form > 0 ? (
          <div style={{
            width: 36, height: 36, borderRadius: "50%", background: formColor,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 700, fontSize: 13, flexShrink: 0,
            boxShadow: `0 0 8px ${formColor}55`,
          }}>
            {player.form.toFixed(1)}
          </div>
        ) : player.status !== "fit" ? (
          <div style={{
            fontSize: 9, color: "#ff6b6b", fontWeight: 700, textAlign: "center",
            background: "#dc354515", padding: "4px 8px", borderRadius: 6,
            border: "1px solid #dc354533", lineHeight: 1.2, flexShrink: 0,
          }}>
            OUT
          </div>
        ) : null}
      </div>

      {/* Injury Note — condensed */}
      {player.injuryNote && (
        <div style={{
          margin: "0 14px 6px", padding: "5px 8px", borderRadius: 6,
          background: player.status === "recovering" ? "#fd7e1412" : player.status === "doubtful" ? "#ffc10712" : "#dc354512",
          border: `1px solid ${player.status === "recovering" ? "#fd7e1433" : player.status === "doubtful" ? "#ffc10733" : "#dc354533"}`,
          fontSize: 10, color: player.status === "recovering" ? "#ffa94d" : player.status === "doubtful" ? "#ffe066" : "#ff6b6b",
          lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {player.injuryNote}
        </div>
      )}

      {/* Quick Stats — compact 2x2 or row */}
      <div style={{
        display: "grid",
        gridTemplateColumns: player.cleanSheets !== null ? "repeat(4, 1fr)" : "repeat(3, 1fr)",
        gap: 0, padding: "6px 14px 10px",
        borderTop: "1px solid #ffffff0a", marginTop: "auto",
      }}>
        {[
          { label: "Apps", value: player.appearances },
          { label: "Goals", value: player.goals },
          { label: "Assists", value: player.assists },
          ...(player.cleanSheets !== null ? [{ label: "CS", value: player.cleanSheets }] : []),
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{s.value}</div>
            <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 0.8 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Expanded Stats */}
      {expanded && (
        <div style={{ padding: "4px 14px 14px", borderTop: "1px solid #ffffff08" }}>
          <div style={{ fontSize: 10, color: LFC_GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
            Advanced Stats
          </div>
          <StatBar label="xG" value={player.xG} max={12} />
          <StatBar label="Pass %" value={player.passCompletion} max={100} unit="%" />
          <StatBar label="Tackles/90" value={player.tacklesPer90} max={4} />
          <StatBar label="Prog. Carries/90" value={player.progressiveCarries} max={8} />
        </div>
      )}
    </div>
  );
}

// ─── News Feed ──────────────────────────────────────────────────────────────

function NewsFeed({ filter }) {
  const filtered = filter === "all" ? LATEST_NEWS : LATEST_NEWS.filter((n) => n.category === filter);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {filtered.map((item, i) => (
        <div key={i} style={{
          padding: "12px 16px", borderRadius: 10, background: "#1e1e3a",
          borderLeft: `3px solid ${item.category === "official" ? LFC_RED : item.category === "major" ? "#e67e22" : "#8e44ad"}`,
          transition: "background 0.2s", cursor: "pointer",
        }}
          onMouseEnter={(e) => e.currentTarget.style.background = "#252548"}
          onMouseLeave={(e) => e.currentTarget.style.background = "#1e1e3a"}
        >
          <div style={{ color: "#fff", fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{item.title}</div>
          <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
            <span style={{ fontSize: 10, color: LFC_RED, fontWeight: 600 }}>{item.source}</span>
            <span style={{ fontSize: 10, color: "#666" }}>{item.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Form Guide ─────────────────────────────────────────────────────────────

function FormGuide({ results, count = 5 }) {
  const recent = results.slice(0, count);
  const wins = recent.filter(r => r.result === "W").length;
  const draws = recent.filter(r => r.result === "D").length;
  const losses = recent.filter(r => r.result === "L").length;
  const colors = { W: "#28a745", D: "#ffc107", L: "#dc3545" };

  return (
    <div style={{
      background: "#1e1e3a", borderRadius: 12, padding: 10, marginBottom: 16,
      maxWidth: "calc(8.33% * 2)", minWidth: 120,
    }}>
      <div style={{ fontSize: 9, color: LFC_GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 6 }}>
        Form
      </div>
      <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
        {recent.map((r, i) => (
          <div key={i} style={{
            width: 22, height: 22, borderRadius: 5,
            background: colors[r.result], display: "flex",
            alignItems: "center", justifyContent: "center",
            color: r.result === "D" ? "#000" : "#fff",
            fontWeight: 800, fontSize: 10,
          }}>
            {r.result}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, fontSize: 9, color: "#aaa" }}>
        <span><span style={{ color: "#28a745", fontWeight: 700 }}>{wins}</span>W</span>
        <span><span style={{ color: "#ffc107", fontWeight: 700 }}>{draws}</span>D</span>
        <span><span style={{ color: "#dc3545", fontWeight: 700 }}>{losses}</span>L</span>
      </div>
    </div>
  );
}

// ─── Recent Results ─────────────────────────────────────────────────────────

function RecentResults({ results }) {
  const compColors = { PL: "#3d195b", UCL: "#091442", FA: "#6c0d31" };
  const compLabels = { PL: "Premier League", UCL: "Champions League", FA: "FA Cup" };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {results.map((r, i) => {
        const resultColor = r.result === "W" ? "#28a745" : r.result === "D" ? "#ffc107" : "#dc3545";
        return (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 16px", borderRadius: 10, background: "#1e1e3a",
            borderLeft: `3px solid ${resultColor}`,
          }}>
            {/* Result badge */}
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: resultColor, display: "flex",
              alignItems: "center", justifyContent: "center",
              color: r.result === "D" ? "#000" : "#fff",
              fontWeight: 800, fontSize: 14, flexShrink: 0,
            }}>
              {r.result}
            </div>

            {/* Match info */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>
                  {r.home ? "Liverpool" : r.opponent}
                  <span style={{ color: resultColor, fontWeight: 800, margin: "0 6px" }}>{r.score}</span>
                  {r.home ? r.opponent : "Liverpool"}
                </span>
              </div>
              {r.scorers && (
                <div style={{ fontSize: 11, color: "#888", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {r.scorers}
                </div>
              )}
            </div>

            {/* Meta */}
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{
                fontSize: 9, fontWeight: 700, textTransform: "uppercase",
                color: "#fff", background: (compColors[r.competition] || "#333") + "cc",
                padding: "2px 8px", borderRadius: 6, letterSpacing: 0.5, marginBottom: 2,
              }}>
                {r.competition}
              </div>
              <div style={{ fontSize: 10, color: "#666" }}>
                {formatDate(r.date)}
              </div>
              <div style={{ fontSize: 9, color: "#555" }}>
                {r.home ? "Home" : "Away"}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Next Match Banner ──────────────────────────────────────────────────────

function NextMatchBanner({ match }) {
  const compColors = { PL: "#3d195b", UCL: "#091442", FA: "#6c0d31" };
  const compLabels = { PL: "Premier League", UCL: "Champions League", FA: "FA Cup" };
  const d = new Date(match.date);
  const day = d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
  const time = d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

  // Countdown
  const now = new Date();
  const diff = d - now;
  let countdown = "";
  if (diff > 0) {
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    countdown = days > 0 ? `${days}d ${hours}h` : `${hours}h`;
  } else {
    countdown = "NOW";
  }

  return (
    <div style={{
      background: `linear-gradient(135deg, ${LFC_RED}dd, #8B0000ee)`,
      borderRadius: 16, padding: 20, marginBottom: 16,
      border: "1px solid #ffffff15",
      boxShadow: `0 4px 24px ${LFC_RED}33`,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ fontSize: 11, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>
          Next Match
        </div>
        <div style={{
          fontSize: 10, fontWeight: 700, textTransform: "uppercase",
          color: "#fff", background: (compColors[match.competition] || "#333"),
          padding: "3px 10px", borderRadius: 6, letterSpacing: 0.5,
        }}>
          {compLabels[match.competition] || match.competition}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 14 }}>
        {/* Liverpool */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%", background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, fontWeight: 900, color: LFC_RED, margin: "0 auto 6px",
            boxShadow: "0 2px 12px #0003",
          }}>LFC</div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Liverpool</div>
          {match.home && <div style={{ fontSize: 9, color: "#ffffffaa" }}>HOME</div>}
        </div>

        {/* VS + countdown */}
        <div style={{ textAlign: "center" }}>
          <div style={{ color: LFC_GOLD, fontWeight: 800, fontSize: 22, lineHeight: 1 }}>VS</div>
          <div style={{
            marginTop: 6, background: "#00000044", borderRadius: 8, padding: "4px 12px",
            color: LFC_GOLD, fontWeight: 700, fontSize: 13,
          }}>
            {countdown}
          </div>
        </div>

        {/* Opponent */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <div style={{
            width: 56, height: 56, borderRadius: "50%", background: "#ffffff22",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 700, color: "#fff", margin: "0 auto 6px",
            border: "2px solid #ffffff33",
          }}>
            {match.shortName.slice(0, 3).toUpperCase()}
          </div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{match.shortName}</div>
          {!match.home && <div style={{ fontSize: 9, color: "#ffffffaa" }}>AWAY</div>}
        </div>
      </div>

      {/* Details row */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap",
        fontSize: 11, color: "#ffffffbb",
      }}>
        <span>{day}</span>
        <span style={{ color: LFC_GOLD, fontWeight: 700 }}>{time}</span>
        <span>{match.venue}</span>
        {match.broadcast && <span style={{ color: "#ffffffaa" }}>{match.broadcast}</span>}
      </div>
    </div>
  );
}

// ─── RSS Feed Sources Panel ─────────────────────────────────────────────────

function RSSSourcesPanel() {
  return (
    <div style={{ background: "#1e1e3a", borderRadius: 12, padding: 16, marginBottom: 16 }}>
      <div style={{ fontSize: 12, color: LFC_GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>
        RSS Feed Sources
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {RSS_FEEDS.map((feed) => (
          <a
            key={feed.name}
            href={feed.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 11, color: "#fff", background: feed.color + "33",
              border: `1px solid ${feed.color}66`, borderRadius: 8,
              padding: "6px 12px", textDecoration: "none", fontWeight: 600,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = feed.color + "55"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = feed.color + "33"; }}
          >
            {feed.name}
            <span style={{ color: "#888", marginLeft: 6, fontSize: 9, textTransform: "uppercase" }}>{feed.category}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

// ─── Main App ───────────────────────────────────────────────────────────────

export default function LiverpoolTracker() {
  const [posFilter, setPosFilter] = useState("ALL");
  const [sortBy, setSortBy] = useState("form");
  const [expandedId, setExpandedId] = useState(null);
  const [newsFilter, setNewsFilter] = useState("all");
  const [view, setView] = useState("squad"); // "squad" | "news"
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // "all" | "fit" | "injured"

  const filtered = useMemo(() => {
    let list = [...PLAYERS];
    if (posFilter !== "ALL") list = list.filter((p) => p.position === posFilter);
    if (statusFilter === "fit") list = list.filter((p) => p.status === "fit");
    if (statusFilter === "injured") list = list.filter((p) => p.status !== "fit");
    if (search) list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    const sortMap = {
      form: (a, b) => b.form - a.form,
      goals: (a, b) => b.goals - a.goals,
      assists: (a, b) => b.assists - a.assists,
      appearances: (a, b) => b.appearances - a.appearances,
      xG: (a, b) => b.xG - a.xG,
      number: (a, b) => a.number - b.number,
    };
    return list.sort(sortMap[sortBy] || sortMap.form);
  }, [posFilter, sortBy, search, statusFilter]);

  const positionCounts = useMemo(() => {
    const counts = { ALL: PLAYERS.length };
    PLAYERS.forEach((p) => { counts[p.position] = (counts[p.position] || 0) + 1; });
    return counts;
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: LFC_DARK, color: "#fff", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Header */}
      <div style={{
        background: `linear-gradient(135deg, ${LFC_RED} 0%, #8B0000 100%)`,
        padding: "24px 24px 20px", boxShadow: "0 4px 24px #0008"
      }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <div style={{
              width: 48, height: 48, borderRadius: "50%", background: "#fff",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22, fontWeight: 900, color: LFC_RED, boxShadow: "0 2px 12px #0003"
            }}>
              LFC
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: -0.5 }}>Liverpool FC Tracker</h1>
              <p style={{ margin: 0, fontSize: 12, opacity: 0.8 }}>2025-26 Season — Squad, Stats & News</p>
            </div>
          </div>

          {/* View Toggle */}
          <div style={{ display: "flex", gap: 4, background: "#ffffff15", borderRadius: 10, padding: 3, width: "fit-content" }}>
            {["squad", "results", "news"].map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                style={{
                  padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer",
                  fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1,
                  background: view === v ? "#fff" : "transparent",
                  color: view === v ? LFC_RED : "#fffc",
                  transition: "all 0.2s",
                }}
              >
                {v === "squad" ? "Squad" : v === "results" ? "Results" : "News Feed"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "20px 16px 40px" }}>

        {/* ─── SQUAD VIEW ─── */}
        {view === "squad" && (
          <>
            {/* Search */}
            <div style={{ marginBottom: 16 }}>
              <input
                type="text"
                placeholder="Search players..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "100%", padding: "12px 16px", borderRadius: 12,
                  background: "#1e1e3a", border: "1px solid #333", color: "#fff",
                  fontSize: 14, outline: "none", boxSizing: "border-box",
                }}
              />
            </div>

            {/* Filters Row */}
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Position:</span>
              {["ALL", "GK", "DEF", "MID", "FWD"].map((pos) => (
                <button
                  key={pos}
                  onClick={() => setPosFilter(pos)}
                  style={{
                    padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: 11,
                    background: posFilter === pos ? LFC_RED : "#1e1e3a",
                    color: posFilter === pos ? "#fff" : "#999",
                    transition: "all 0.2s",
                  }}
                >
                  {pos} <span style={{ opacity: 0.5, marginLeft: 2 }}>({positionCounts[pos] || 0})</span>
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Fitness:</span>
              {[
                { key: "all", label: "All Players", count: PLAYERS.length },
                { key: "fit", label: "Available", count: PLAYERS.filter(p => p.status === "fit").length },
                { key: "injured", label: "Unavailable", count: PLAYERS.filter(p => p.status !== "fit").length },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setStatusFilter(f.key)}
                  style={{
                    padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: 11,
                    background: statusFilter === f.key ? (f.key === "injured" ? "#dc3545" : f.key === "fit" ? "#28a745" : LFC_RED) : "#1e1e3a",
                    color: statusFilter === f.key ? "#fff" : "#999",
                    transition: "all 0.2s",
                  }}
                >
                  {f.label} <span style={{ opacity: 0.5, marginLeft: 2 }}>({f.count})</span>
                </button>
              ))}
            </div>

            {/* Sort Row */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Sort by:</span>
              {[
                { key: "form", label: "Form" },
                { key: "goals", label: "Goals" },
                { key: "assists", label: "Assists" },
                { key: "xG", label: "xG" },
                { key: "appearances", label: "Apps" },
                { key: "number", label: "#" },
              ].map((s) => (
                <button
                  key={s.key}
                  onClick={() => setSortBy(s.key)}
                  style={{
                    padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: 11,
                    background: sortBy === s.key ? LFC_GOLD : "#1e1e3a",
                    color: sortBy === s.key ? "#000" : "#999",
                    transition: "all 0.2s",
                  }}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Squad Stats Summary */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: 10, marginBottom: 20
            }}>
              {[
                { label: "Total Goals", value: _.sumBy(PLAYERS, "goals") },
                { label: "Total Assists", value: _.sumBy(PLAYERS, "assists") },
                { label: "Avg Form", value: _.meanBy(PLAYERS, "form").toFixed(1) },
                { label: "Clean Sheets", value: _.sumBy(PLAYERS.filter(p => p.cleanSheets !== null), "cleanSheets") },
                { label: "Top Scorer", value: _.maxBy(PLAYERS, "goals")?.name.split(" ").pop() },
                { label: "Injured", value: PLAYERS.filter(p => p.status !== "fit").length },
              ].map((s) => (
                <div key={s.label} style={{ background: "#1e1e3a", borderRadius: 12, padding: "14px 16px", textAlign: "center" }}>
                  <div style={{ color: LFC_GOLD, fontWeight: 800, fontSize: 20 }}>{s.value}</div>
                  <div style={{ color: "#777", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Player Cards — Bento Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10 }}>
              {filtered.map((player) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  expanded={expandedId === player.id}
                  onToggle={() => setExpandedId(expandedId === player.id ? null : player.id)}
                />
              ))}
              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: 40, color: "#666" }}>
                  No players found matching your criteria.
                </div>
              )}
            </div>
          </>
        )}

        {/* ─── RESULTS VIEW ─── */}
        {view === "results" && (
          <>
            <NextMatchBanner match={NEXT_MATCH} />
            <FormGuide results={RESULTS} count={5} />

            {/* Season summary strip */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: 10, marginBottom: 16,
            }}>
              {[
                { label: "Played", value: RESULTS.length, color: "#fff" },
                { label: "Won", value: RESULTS.filter(r => r.result === "W").length, color: "#28a745" },
                { label: "Drawn", value: RESULTS.filter(r => r.result === "D").length, color: "#ffc107" },
                { label: "Lost", value: RESULTS.filter(r => r.result === "L").length, color: "#dc3545" },
                { label: "Goals For", value: RESULTS.reduce((s, r) => { const [h, a] = r.score.split("-").map(Number); return s + (r.home ? h : a); }, 0), color: LFC_GOLD },
                { label: "Goals Against", value: RESULTS.reduce((s, r) => { const [h, a] = r.score.split("-").map(Number); return s + (r.home ? a : h); }, 0), color: "#ff6b6b" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#1e1e3a", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
                  <div style={{ color: s.color, fontWeight: 800, fontSize: 20 }}>{s.value}</div>
                  <div style={{ color: "#777", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ fontSize: 12, color: LFC_GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>
              All Results
            </div>
            <RecentResults results={RESULTS} />
          </>
        )}

        {/* ─── NEWS VIEW ─── */}
        {view === "news" && (
          <>
            <RSSSourcesPanel />

            {/* News Filter */}
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Filter:</span>
              {[
                { key: "all", label: "All News" },
                { key: "official", label: "Official" },
                { key: "major", label: "Major Outlets" },
                { key: "fan", label: "Fan Sites" },
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setNewsFilter(f.key)}
                  style={{
                    padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: 11,
                    background: newsFilter === f.key ? LFC_RED : "#1e1e3a",
                    color: newsFilter === f.key ? "#fff" : "#999",
                    transition: "all 0.2s",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <NewsFeed filter={newsFilter} />

            {/* RSS How-To */}
            <div style={{
              marginTop: 20, background: "#1e1e3a", borderRadius: 12, padding: 20,
              border: `1px solid ${LFC_RED}22`
            }}>
              <div style={{ fontSize: 12, color: LFC_GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
                Subscribe to Live RSS Feeds
              </div>
              <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6, margin: 0 }}>
                Click any source above to access its RSS feed URL. Add these to your favorite RSS reader
                (Feedly, Inoreader, NetNewsWire, etc.) for real-time Liverpool news updates.
                The feeds include official club news, match reports from major outlets, and fan analysis.
              </p>
            </div>
          </>
        )}

        {/* Footer */}
        <div style={{
          marginTop: 32, textAlign: "center", padding: "16px 0",
          borderTop: "1px solid #ffffff08", color: "#444", fontSize: 11
        }}>
          Liverpool FC Player Tracker — 2025-26 Season — Data via Premier League, FBref & FootyStats
          <br />
          <span style={{ color: "#333" }}>You'll Never Walk Alone</span>
        </div>
      </div>
    </div>
  );
}
