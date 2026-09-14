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
  { id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "fit", injuryNote: "Mon Sep 14, morning - the day before a cup tie he is unlikely to play. This Is Anfield's read on Iraola's rotation has Alisson among those rested, Mamardashvili stepping into the competition he owns, and no wonder: the No. 1 has played every minute of a season now four league games and a European night old. Saturday was a clean sheet built on one error recovered and two saves, a 5 from Rousing The Kop against a 7.9 on FotMob. The Bournemouth trip next Sunday is his again.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8amq961757087569.png" },
  { id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Mon Sep 14, morning - his night, if the previews are right. Every Tottenham and Liverpool preview has Mamardashvili starting Tuesday's third round, the deputy's competition and a first appearance since the summer tour with Alisson rested. Andy Madley referees, VAR in use, and the visitors arrive without a league goal all season. A clean sheet against a side that cannot score would be the quiet kind of statement a backup keeper waits for.", image: "https://r2.thesportsdb.com/images/media/player/cutout/3yoja81757088527.png" },

  // ── Defenders ─────────────────────────────────────────────────────────────
  { id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 35, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Mon Sep 14, morning - the rest, at last, and the contract still parked. This Is Anfield expect Iraola to leave the captain out of the cup tie, the first ninety he will have missed all season, made possible by Joe Gomez returning to training as a fourth senior centre-back. The longer question stands behind it: Liverpool will not open contract talks before 2027, no decision before April, the deal expiring that summer with a free transfer on the table and suitors in Saudi Arabia, Milan, Turkey and MLS. He has played every minute of all five games at 35 because nobody else could.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png" },
  { id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "doubtful", outSince: "2026-07-25", injuryNote: "Mon Sep 14, morning - the name that moved. Sports Mole's dawn injury bulletin has Gomez back in full training and hopeful of a first appearance of the season against Tottenham, a major doubt rather than a certainty but the first time in seven weeks he has been framed as available after July's Sunderland muscle injury. He is a fourth senior centre-back and a third right-back in one body, exactly the reinforcement that lets Iraola rest Van Dijk for the cup. Whether he starts or is eased onto the bench is the selection detail of the day.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png" },
  { id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Mon Sep 14, morning - the unresolved position going into the cup. Saturday exposed the depth: Tsimikas, a first start of the season, misplaced 11 of 31 passes and was hooked at half-time, and Kerkez came on to 'yet more dreadful crossing' by SI, whose verdict is that neither left-back is currently up to Iraola's standard. Still the only senior option there, so the Tuesday call is a further look rather than a fix. A 5 from Rousing The Kop on Saturday.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png" },
  { id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", outSince: "2026-01-09", injuryNote: "Mon Sep 14, morning - out until late November, and quietly replaced. Sports Mole's Monday round-up holds the knee injury from January at no club date, pencilling Manchester United on 21 November as the earliest, while Araujo has taken the right-back slot for three straight games and the reporting now tips the switch to be made permanent. Frimpong is the cup alternative; Gomez, if he features Tuesday, is a third body who has played there.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png" },
  { id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "fit", injuryNote: "Mon Sep 14, morning - the likeliest cup starter at right-back. With Iraola set to rotate and Araujo having played three games in seven days, the Dutchman is in line for a start on Tuesday. Saturday: the better of the late changes, on for Araujo at 72, 'solid enough defensively' by Rousing The Kop, a 6 and a 6.9 on FotMob. The reporting tipping Araujo's move inside to be made permanent only clears his route.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ehf7fi1757088020.png" },
  { id: 10, name: "Giovanni Leoni", number: 15, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", outSince: "2025-09-15", injuryNote: "Mon Sep 14, morning - a date, finally. Sports Mole pencils 14 October as an availability target for the teenager a year on from the ACL he suffered on debut, with Iraola's own line more cautious, 'the plan is also to start training during the break, with the group'. Named in the Champions League squad, unused, and not part of Tuesday's calculation. His return is the one that would end the two-man centre-back rota for good.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8aws9t1766829004.png" }, /* Leoni - TheSportsDB cutout */
  { id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 7, goals: 1, assists: 0, cleanSheets: 3, xG: 0.2, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Mon Sep 14, morning - the ever-present who might, for once, sit. Five starts in five beside Van Dijk, and Saturday the goal-line clearance from Garcia that kept the point, an 8 and man of the match from Rousing The Kop, 8.1 to top the FotMob card. If Gomez is fit to start, the cup is a rare chance to rest Jacquet too; if not, he plays again, because the alternatives are a teenager and an converted midfielder. Opta had him at 18 of 25 league duels before Saturday.", image: "https://r2.thesportsdb.com/images/media/player/cutout/d6qx171766136993.png" },
  { id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: "Mon Sep 14, morning - out on loan, as the club always meant. Ndukwe joined Levante on a season-long loan on deadline day, the Spanish club covering his wage. Six foot six and nineteen, Liverpool's standout defender against Monaco in pre-season, but born in Austria and short of the points a post-Brexit permit demands, so a competitive fixture here this season was never possible. A year in La Liga is the plan.", image: "https://r2.thesportsdb.com/images/media/player/cutout/iagott1769030864.png" },

  // ── Midfielders ───────────────────────────────────────────────────────────
  { id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Mon Sep 14, morning - the one nobody rotates out. Sports Mole's preview expects Mac Allister to anchor a changed cup midfield alongside seventeen-year-old Trey Nyoni, which is itself the point: the Argentine who says the club will not renew him is the player Iraola cannot leave out even in a rotation. On for Gravenberch at 60 on Saturday and the game settled, a 7 and 'undroppable' by Rousing The Kop. The recruitment staff scout Atletico's Pablo Barrios for a 2027 midfield he may not be in.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png" },
  { id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Mon Sep 14, morning - named in Monday's post-mortem, not the team sheet. Sports Mole's 'why the problem midfield was not addressed' piece puts the Fulham pivot at the centre of it: Gravenberch and Szoboszlai won two of ten first-half ground duels between them, both rated 3, and control returned only when Mac Allister came on. The start he waited three games for lasted an hour. Tuesday's cup place is a harder case to make than it was on Friday.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png" },
  { id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 49, goals: 13, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.6, status: "fit", injuryNote: "Mon Sep 14, morning - the first bad game of a full season, and a thesis built on it. Monday's midfield inquest keeps returning to the hour he and Gravenberch spent as a pair against Fulham: none of six first-half ground duels won, a swipe at King that nearly gave a penalty, set-pieces that did not land until the corner Munoz headed onto the bar. A 3 from Rousing The Kop, SI's 6.8 kinder. Signed to 2031 and an ever-present; the rotation may reach even him for the cup.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png" },
  { id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "fit", injuryNote: "Mon Sep 14, morning - the promise about to be kept. Sports Mole's preview expects Endo to make a first appearance of the season on Tuesday, probably as a makeshift centre-half if Gomez is not risked from the start, which is the exact scenario Iraola meant by 'for sure he will have his moments' and Carragher doubted. Nought minutes so far, fourth in the midfield queue and left off the European squad, so the Carabao Cup is the only realistic stage he has.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png" },
  { id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Mon Sep 14, morning - defended on Monday, rested on Tuesday. Jermaine Pennant used a Sports Mole column to push back on the growing criticism of the German, who This Is Anfield expect Iraola to leave out of the cup tie after a fortnight's patience spent on one goalless afternoon. Fulham: two shots the wrong side of the post and a 4 from Rousing The Kop, a 7.4 on FotMob noting fatigue and 'uncharacteristic technical errors'. Five competitive games without a goal or assist; the reporting says the missing deep passer is not his fault alone.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8t6bzo1757088899.png" },
  { id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: "Mon Sep 14, morning - tipped to start. Sports Mole's preview has the seventeen-year-old coming into midfield for the cup, likely alongside Mac Allister, in the competition where Liverpool have always found their next players. Unused on Saturday's bench for the first time this season, and with Iraola describing the midfield as a queue, Tuesday is his clearest run at minutes. The new contract remains unsigned per the weekend reporting.", image: "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/2025-08/trey-nyoni-2025-26-bodyshot_c04372ac9100f85a5647a0cd12e323c0.webp?itok=nTrwzG0A" },

  // ── Forwards ──────────────────────────────────────────────────────────────
  { id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 42, goals: 10, assists: 9, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 7.0, status: "fit", injuryNote: "Mon Sep 14, morning - a candidate to lead the line. With Isak set to be rested, Sports Mole's preview floats Gakpo as the false-nine against Tottenham, the role Iraola has used him in before and one that suits a night the only senior striker sits out. Fit now after last week's adductor doubt, thirty minutes off the bench against Fulham, and a goal and three assists in three league games per Opta back in the pool. The question is whether he starts the cup or is held for Bournemouth.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png" },
  { id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 20, goals: 12, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "fit", injuryNote: "Mon Sep 14, morning - the rest that finally becomes possible. This Is Anfield expect Iraola to leave Isak out of the cup tie, the first time resting the only fit senior nine has been thinkable, with Gakpo the false-nine cover. Sixteen touches against Fulham, the second fewest for a Liverpool outfielder on record per the BBC; three league goals in four while starting every game. The counter-argument is that a striker short of touches needs games, not rest.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png" },
  { id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", outSince: "2026-04-15", injuryNote: "Mon Sep 14, morning - still the shape of the absence, no shorter. Sports Mole's Monday round-up carries no timeline beyond the club's, Iraola confirming 'Hugo will go later' than the international break and framing January as the hope, 'a reasonable chance he could help us', the last two Champions League league-phase games the target per This Is Anfield. His absence is why resting Isak means playing Gakpo up top; the Achilles rupture from April will cost most of the campaign.", image: "https://r2.thesportsdb.com/images/media/player/cutout/8za47v1757087851.png" },
  { id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 18, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", injuryNote: "Mon Sep 14, morning - in the cup rotation, and needing a better night. Rested to the bench against Fulham and on for Barcola at 72, a cameo Rousing The Kop called poor, a 4: an overhit cross, a counter conceded, a shot fired wide. Sports Mole's preview has him among the wide options for Tuesday as Iraola changes the front line, which is a chance to answer Saturday rather than repeat it.", image: "https://r2.thesportsdb.com/images/media/player/cutout/ay5j761773955893.png" },
  { id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "injured", outSince: "2026-08-16", injuryNote: "Mon Sep 14, morning - a date in view. Sports Mole pencils 11 October as an availability target for the lower-back injury, with Iraola expecting him back in training around the international break. Left off the Champions League squad, so the autumn's European nights were never in reach; a mid-October return would give a stretched front line a fifth forward it has badly missed since a pre-season friendly at Como.", image: "https://r2.thesportsdb.com/images/media/player/cutout/idecla1757087689.png" },

  // ── Late additions ────────────────────────────────────────────────────────
  { id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", injuryNote: "Mon Sep 14, morning - third keeper, and not in the picture. Woodman was not on Saturday's bench, which carried Mamardashvili alone, and with the deputy set to start the cup his next involvement is a bench place there at most. A settled, quiet role behind two senior goalkeepers.", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png" },
  { id: 28, name: "Victor Munoz", number: 21, position: "FWD", nationality: "🇪🇸 Spain", age: 22, appearances: 3, goals: 1, assists: 0, cleanSheets: null, xG: 0.3, tacklesPer90: 0.7, passCompletion: 79, progressiveCarries: 2.6, form: 7.6, status: "fit", injuryNote: "Mon Sep 14, morning - a likelier cup start than a league one. Sports Mole's preview names Munoz among the changed front line for Tuesday, a chance to build on Saturday's near-miss: started on the right, headed a corner against the bar on 22 with Leno getting a hand to it, then withdrawn on the hour, a 4 from Rousing The Kop but SI's 6.7 calling him the most natural of Iraola's right-wing options. One of four wingers for a role the club spent the weekend being told it has not filled.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg/330px-Victor_Munoz_Argentina_v_Spain_19_July_2026-020.jpg" },
  { id: 29, name: "Ronald Araujo", number: 33, position: "DEF", nationality: "🇺🇾 Uruguay", age: 27, appearances: 3, goals: 0, assists: 0, cleanSheets: 1, xG: 0.1, tacklesPer90: 1.8, passCompletion: 87, progressiveCarries: 1.1, form: 7.7, status: "fit", injuryNote: "Mon Sep 14, morning - the loan turning into a plan. CaughtOffside reported over the weekend that Liverpool are encouraged in keeping the Uruguayan, with Barcelona unable to guarantee him a role, and Football365 tipped Iraola to make the right-back switch permanent, a third straight start there against Fulham, a 6 and a 6.9, isolated at times by Robinson's overloads. Three games in seven days makes him the one most likely rested for the cup, with Frimpong and a returning Gomez the cover.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg/330px-FC_Red_Bull_Salzburg_gegen_CF_Barcelona_%28Testspiel_4._August_2021%29_45_%28cropped%29.jpg" },
  { id: 30, name: "Bradley Barcola", number: 29, position: "FWD", nationality: "🇫🇷 France", age: 24, appearances: 1, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 6.0, status: "fit", injuryNote: "Mon Sep 14, morning - managed, not rested. Iraola said the club is 'building his physical condition' with games and that the four wingers will play both sides all season, so a cup involvement is likelier than a night off despite no pre-season. Saturday was a first Premier League start, on the left, fading after setting up Isak's first-minute chance, a 4 from Rousing The Kop and 6.6 on FotMob.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg/330px-Bradley_Barcola_France_v_Spain_7.24.26-112_%28cropped%29.jpg" },
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
  { source: "This Is Anfield", title: "Iraola set to ring the changes for the cup: Van Dijk, Isak and Wirtz among those to be rested, Koumas in line to start", time: "today", category: "major" },
  { source: "Sports Mole", title: "Gomez back in full training and hopeful of a first appearance of the season against Tottenham", time: "today", category: "major" },
  { source: "Spurs Web", title: "De Zerbi confirms he will 'play with all other players' at Anfield as Spurs' goalless run reaches four league games", time: "today", category: "fan" },
  { source: "Sports Mole", title: "Record deal touted: Liverpool 'admire' Bournemouth's Rayan, £130m release clause active in 2027", time: "today", category: "major" },
  { source: "Sports Mole", title: "Spurs injury list: Porro and Udogie doubtful, Van de Ven out, Maddison back for the Carabao Cup tie", time: "today", category: "fan" },
  { source: "Sports Mole", title: "Why the 'problem' midfield was never addressed as Szoboszlai and Gravenberch were left exposed", time: "today", category: "fan" },
  { source: "Sports Mole", title: "Chiesa and Leoni handed October return targets as Liverpool's injury list slowly clears", time: "today", category: "fan" },
  { source: "Sports Mole", title: "Preview: Iraola tipped to hand starts to Nyoni, Koumas and Endo with Gakpo leading the line", time: "today", category: "major" },
  { source: "Football Insider", title: "Van Dijk contract talks still parked until 2027, no decision before April as the captain plays on at 35", time: "1d ago", category: "major" },
  { source: "Sports Mole", title: "'We say Liverpool 3-1': Reds big favourites despite wholesale changes against a Spurs side that cannot score", time: "1d ago", category: "fan" },
  { source: "This Is Anfield", title: "Andy Robertson returns to Anfield in white for the first time after nine years and 350-plus games", time: "1d ago", category: "fan" },
  { source: "Sports Mole", title: "Pressure? De Zerbi responds to Spurs sack 'fears' after a club-record goalless start", time: "1d ago", category: "fan" },
  { source: "Sky Sports", title: "Man Utd 0-1 Man City: Foden red on 23, Haaland's winner given on review, and Liverpool slip to seventh", time: "1d ago", category: "major" },
  { source: "Squawka", title: "Premier League xG table: Tottenham nil from 2.94 expected goals, the division's worst finishing, before Anfield", time: "2d ago", category: "major" },
];


// ─── Next Fixture ──────────────────────────────────────────────────────────
const NEXT_MATCH = {
  opponent: "Tottenham",
  shortName: "TOT",
  home: true,
  date: "2026-09-15T20:00:00",
  competition: "EFL",
  venue: "Anfield",
  broadcast: "ITV and Sky Sports (8pm)",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
const RESULTS = [
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
  const compColors = { PL: "#3d195b", UCL: "#091442", FA: "#6c0d31", EFL: "#0b6b3a" };
  const compLabels = { PL: "Premier League", UCL: "Champions League", FA: "FA Cup", EFL: "Carabao Cup" };

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
  const compColors = { PL: "#3d195b", UCL: "#091442", FA: "#6c0d31", EFL: "#0b6b3a" };
  const compLabels = { PL: "Premier League", UCL: "Champions League", FA: "FA Cup", EFL: "Carabao Cup" };
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
