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

// ─── Player Data (2025-26 Season · Updated May 22, 2026) ──────────────────
// Statuses: "fit" | "injured" | "doubtful" | "recovering"
// injuryNote: short description shown on card when not fit
const PLAYERS = [
  // ── Goalkeepers ───────────────────────────────────────────────────────────
  { id: 1, name: "Alisson Becker", number: 1, position: "GK", nationality: "🇧🇷 Brazil", age: 33, appearances: 32, goals: 0, assists: 0, cleanSheets: 10, xG: 0, tacklesPer90: 0, passCompletion: 82, progressiveCarries: 0.2, form: 6.5, status: "doubtful", injuryNote: "Fri May 22 — named in Brazil's 26-man World Cup squad, with Ancelotti expecting him as first-choice keeper; back in full training at Kirkby and in line for an Anfield send-off against Brentford on Sun May 24 after roughly three months out. Slot: 'let's see where he is.' Schira's line that the Brazilian has agreed a €15m move to Juventus on €5m-a-year terms still holds — Sunday could be his Liverpool farewell", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p116535.png" },
  { id: 2, name: "Giorgi Mamardashvili", number: 25, position: "GK", nationality: "🇬🇪 Georgia", age: 25, appearances: 19, goals: 0, assists: 0, cleanSheets: 5, xG: 0, tacklesPer90: 0, passCompletion: 76, progressiveCarries: 0.1, form: 6.2, status: "fit", injuryNote: "Sat May 16 — beaten FOUR times at Villa Park last night (Rogers 43', Watkins 57' & 73', McGinn 90+). Three of the four came from set pieces in a 4-2 capitulation that left Liverpool needing to beat Brentford May 24 for a top-five finish (Liverpool.com / Sky Sports). Player ratings averaged 5/10 across This Is Anfield, Liverpool.com and Goal.com despite limited blame on the goals. Stays No. 1 with Alisson still out and the Juventus deal firming", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p449027.png" },

  // ── Defenders ─────────────────────────────────────────────────────────────
  { id: 3, name: "Virgil van Dijk", number: 4, position: "DEF", nationality: "🇳🇱 Netherlands", age: 34, appearances: 43, goals: 6, assists: 1, cleanSheets: 11, xG: 3.2, tacklesPer90: 1.2, passCompletion: 92, progressiveCarries: 0.8, form: 7.4, status: "fit", injuryNote: "Sat May 16 — Liverpool's lone bright spot in last night's 4-2 Villa Park defeat: a BRACE of headers, 52' to level (from a deep free-kick that beat Martínez) and a 90+ consolation. 7.5-8/10 ratings across Sky Sports, Goal.com and ESPN. Couldn't stop the set-piece avalanche (three of four Villa goals from dead balls). Liverpool.com Thursday: Galatasaray exit RULED OUT, captain expected to see out current deal to 2026-27", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p97032.png" },
  { id: 4, name: "Ibrahima Konaté", number: 5, position: "DEF", nationality: "🇫🇷 France", age: 27, appearances: 40, goals: 2, assists: 0, cleanSheets: 10, xG: 1.5, tacklesPer90: 1.8, passCompletion: 88, progressiveCarries: 0.5, form: 6.4, status: "fit", injuryNote: "Mon May 18 — added to Caught Offside's expanded 17-player list of past/present Reds who have liked Salah's anti-Slot Instagram post — a reversal of the weekend's first take that the Frenchman had abstained. Off-pitch, Liverpool.com's 'STALEMATE' contract lead unchanged (signing-on package + agent commissions the sticking points, Real Madrid still in the background). On Friday, was exposed at Villa Park as 3 of 4 Villa goals came from set pieces (5/10 ratings)", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p204716.png" },
  { id: 5, name: "Joe Gomez", number: 2, position: "DEF", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 28, appearances: 19, goals: 0, assists: 1, cleanSheets: 5, xG: 0.2, tacklesPer90: 1.3, passCompletion: 88, progressiveCarries: 1.5, form: 5.9, status: "fit", injuryNote: "Sat May 16 — started at RB in last night's 4-2 Villa Park defeat (covering for Frimpong's late minor injury) but was overrun by Digne/Rogers on Villa's left side. 5/10 ratings across Goal.com and SI; Watkins's 57' opener stemmed from a Szoboszlai turnover but Gomez's positioning queried. Turns 29 next weekend; Brentford finale May 24 may be his last in red after Wed's 'anything can happen' exit-interview cycle", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p171287.png" },
  { id: 6, name: "Andy Robertson", number: 26, position: "DEF", nationality: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland", age: 32, appearances: 29, goals: 1, assists: 3, cleanSheets: 8, xG: 0.6, tacklesPer90: 2.3, passCompletion: 83, progressiveCarries: 4.4, form: 6.7, status: "fit", injuryNote: "Fri May 22 — set to START his Anfield farewell against Brentford on Sun May 24, with predicted XIs (Yahoo Sports, The 4th Official) tipping the Scot to begin a send-off the club will mark with a mosaic in the lower Sir Kenny Dalglish Stand. Tottenham agreement still summer-conditional on their PL fate (Sky Sports); Liverpool linked with Dortmund's Daniel Svensson as long-term LB heir", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p122798.png" },
  { id: 7, name: "Milos Kerkez", number: 6, position: "DEF", nationality: "🇭🇺 Hungary", age: 22, appearances: 38, goals: 2, assists: 2, cleanSheets: 7, xG: 0.4, tacklesPer90: 2.0, passCompletion: 80, progressiveCarries: 4.8, form: 6.8, status: "fit", injuryNote: "Fri May 22 — first-pick LB for most of the run-in but expected to drop to the bench for the Brentford finale as Slot lines up an Anfield farewell start for Andy Robertson. Started the 4-2 Villa Park defeat (6/10 ratings) as Liverpool's left side was repeatedly overloaded; remains the club's long-term left-back", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p544877.png" },
  { id: 8, name: "Conor Bradley", number: 12, position: "DEF", nationality: "🇬🇧 N. Ireland", age: 22, appearances: 16, goals: 0, assists: 2, cleanSheets: 4, xG: 0.8, tacklesPer90: 2.6, passCompletion: 84, progressiveCarries: 5.1, form: 7.3, status: "injured", injuryNote: "Knee surgery (Jan) — out for season, aiming for pre-season return", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p492777.png" },
  { id: 9, name: "Jeremie Frimpong", number: 30, position: "DEF", nationality: "🇳🇱 Netherlands", age: 24, appearances: 35, goals: 1, assists: 4, cleanSheets: 7, xG: 0.9, tacklesPer90: 2.2, passCompletion: 83, progressiveCarries: 3.8, form: 6.4, status: "doubtful", injuryNote: "Fri May 22 — back in training after the 'minor injury' that kept him out at Villa Park and in contention to return for the Sun May 24 Brentford finale; Slot's pre-match presser will firm up his availability. Gomez is the cover at right-back if he isn't cleared", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p216094.png" },
  { id: 10, name: "Giovanni Leoni", number: 33, position: "DEF", nationality: "🇮🇹 Italy", age: 18, appearances: 1, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", injuryNote: "Torn ACL (Sep) — out for season, targeting 2026-27 return", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p647681.png" }, /* Leoni - no PL profile yet, fallback will show */
  { id: 11, name: "Jérémy Jacquet", number: 23, position: "DEF", nationality: "🇫🇷 France", age: 20, appearances: 6, goals: 0, assists: 0, cleanSheets: 2, xG: 0.1, tacklesPer90: 1.6, passCompletion: 86, progressiveCarries: 1.4, form: 6.6, status: "fit", injuryNote: null, image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p578140.png" },
  { id: 12, name: "Ifeanyi Ndukwe", number: 53, position: "DEF", nationality: "🇳🇬 Nigeria", age: 19, appearances: 2, goals: 0, assists: 0, cleanSheets: 1, xG: 0, tacklesPer90: 1.2, passCompletion: 82, progressiveCarries: 0.8, form: 6.3, status: "fit", injuryNote: null, image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p578142.png" },

  // ── Midfielders ───────────────────────────────────────────────────────────
  { id: 13, name: "Alexis Mac Allister", number: 10, position: "MID", nationality: "🇦🇷 Argentina", age: 27, appearances: 41, goals: 2, assists: 4, cleanSheets: null, xG: 1.9, tacklesPer90: 1.9, passCompletion: 90, progressiveCarries: 1.4, form: 6.7, status: "fit", injuryNote: "Sat May 16 — full 90 in last night's 4-2 Villa Park defeat in the double-pivot alongside Gravenberch; couldn't stem the midfield haemorrhage as Villa cut through too easily after the break. 6/10 ratings across SI and Goal.com. Father/agent Carlos's 'no talks until the season is over' line still alive in the background; Real Madrid credited with interest", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243016.png" },
  { id: 14, name: "Ryan Gravenberch", number: 38, position: "MID", nationality: "🇳🇱 Netherlands", age: 23, appearances: 41, goals: 6, assists: 5, cleanSheets: null, xG: 3.1, tacklesPer90: 2.8, passCompletion: 91, progressiveCarries: 3.2, form: 7.2, status: "fit", injuryNote: "Sat May 16 — anchored a creaking midfield in last night's 4-2 Villa Park defeat; 6.5/10 ratings (Sky Sports, SI) as Mac Allister's partner in the double-pivot was overrun by Tielemans-McGinn. Couldn't generate the chance volume seen in last Sat's 1-1 Chelsea draw where he opened the scoring. Still Liverpool's most reliable midfield outlet", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p441266.png" },
  { id: 15, name: "Dominik Szoboszlai", number: 8, position: "MID", nationality: "🇭🇺 Hungary", age: 25, appearances: 48, goals: 12, assists: 9, cleanSheets: null, xG: 6.2, tacklesPer90: 2.1, passCompletion: 86, progressiveCarries: 2.8, form: 7.3, status: "fit", injuryNote: "Mon May 18 — among the original SportBible nine who liked Salah's Saturday anti-Slot Instagram post; tally has since grown to 17 past/present Reds per Caught Offside Monday. The Hungarian remains the most senior outfield endorser of the bombshell statement. On Friday: 90 mins at Villa Park, ASSISTED Van Dijk's 52' equaliser from a deep free-kick, but his midfield turnover led directly to Watkins's 57' restorer. 6/10 ratings; contract extension still expected 'in the near future' per Liverpool.com", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p424876.png" },
  { id: 16, name: "Curtis Jones", number: 17, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 25, appearances: 27, goals: 1, assists: 4, cleanSheets: null, xG: 1.8, tacklesPer90: 1.5, passCompletion: 86, progressiveCarries: 3.9, form: 6.9, status: "fit", injuryNote: "Fri May 22 — 'very likely' to leave this summer per Sky Sports, with Inter Milan keen since January and talks over a new deal stalled for months. Started the attacking three at Villa Park (5.5/10) and features in some predicted XIs as a makeshift right-back for the Brentford finale; Sunday could be his final Liverpool appearance", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p206915.png" },
  { id: 17, name: "Wataru Endo", number: 3, position: "MID", nationality: "🇯🇵 Japan", age: 33, appearances: 14, goals: 0, assists: 1, cleanSheets: null, xG: 0.3, tacklesPer90: 3.1, passCompletion: 87, progressiveCarries: 1.2, form: 6.2, status: "injured", injuryNote: "Ankle surgery (Feb 11 vs Sunderland) — out for season, targeting World Cup", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p158983.png" },
  { id: 18, name: "Florian Wirtz", number: 7, position: "MID", nationality: "🇩🇪 Germany", age: 23, appearances: 33, goals: 6, assists: 6, cleanSheets: null, xG: 4.9, tacklesPer90: 1.0, passCompletion: 87, progressiveCarries: 4.1, form: 7.1, status: "fit", injuryNote: "Mon May 18 — added to Caught Offside's expanded 17-player list of Reds who have liked Salah's anti-Slot Instagram post. Came off the bench in Friday's 4-2 Villa Park defeat once the game was effectively gone, recovering from antibiotics after the stomach infection. Expected to start at home against Brentford May 24 as Liverpool need a win for Champions League", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p494595.png" },
  { id: 19, name: "Stefan Bajcetic", number: 43, position: "MID", nationality: "🇪🇸 Spain", age: 21, appearances: 0, goals: 0, assists: 0, cleanSheets: null, xG: 0, tacklesPer90: 0, passCompletion: 0, progressiveCarries: 0, form: 0, status: "injured", injuryNote: "Recurring hamstring issues — yet to play this season", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p535928.png" },
  { id: 20, name: "Trey Nyoni", number: 42, position: "MID", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 5, goals: 0, assists: 0, cleanSheets: null, xG: 0.2, tacklesPer90: 1.0, passCompletion: 84, progressiveCarries: 2.8, form: 6.0, status: "fit", injuryNote: null, image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p591386.png" },

  // ── Forwards ──────────────────────────────────────────────────────────────
  { id: 21, name: "Mohamed Salah", number: 11, position: "FWD", nationality: "🇪🇬 Egypt", age: 33, appearances: 38, goals: 10, assists: 9, cleanSheets: null, xG: 7.0, tacklesPer90: 0.6, passCompletion: 82, progressiveCarries: 3.5, form: 7.0, status: "fit", injuryNote: "Fri May 22 — fit and set to start his Anfield farewell against Brentford on Sun May 24. The club's 'Salah: Farewell to the King' tribute film lands at 5pm BST today, with a Kop mosaic to follow on matchday. His weekend statement keeps fuelling the Slot saga — FSG reportedly weighing the manager's future against Andoni Iraola — while Salah, who has vowed to 'give everything' for Champions League qualification, is reported open to a free-agent move to Fenerbahce", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p118748.png" },
  { id: 22, name: "Cody Gakpo", number: 18, position: "FWD", nationality: "🇳🇱 Netherlands", age: 25, appearances: 39, goals: 9, assists: 6, cleanSheets: null, xG: 7.1, tacklesPer90: 0.8, passCompletion: 81, progressiveCarries: 2.5, form: 6.8, status: "fit", injuryNote: "Mon May 18 — added to Caught Offside's expanded 17-player list of past/present Reds who have liked Salah's anti-Slot Instagram post — the Dutchman is among the new names joining the original SportBible nine. On Friday, 90 mins on the left at Villa Park; quiet output (5.5/10 SI / Goal.com). FSG's 'green-lit' a potential summer sale (Liverpool.com) still hangs over his Brentford finale appearance", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p243298.png" },
  { id: 23, name: "Alexander Isak", number: 9, position: "FWD", nationality: "🇸🇪 Sweden", age: 26, appearances: 18, goals: 9, assists: 2, cleanSheets: null, xG: 9.6, tacklesPer90: 0.4, passCompletion: 76, progressiveCarries: 3.2, form: 7.5, status: "doubtful", injuryNote: "Fri May 22 — back in training after the 'minor injury' that ruled him out at Villa Park; Slot says the Swede 'definitely has a chance' to feature against Brentford on Sun May 24 but offers no guarantees with him being managed carefully after a disrupted season. If not cleared at the pre-match presser, 17-year-old Rio Ngumoha — who led the line at Villa — starts again", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p219168.png" },
  { id: 24, name: "Hugo Ekitike", number: 22, position: "FWD", nationality: "🇫🇷 France", age: 23, appearances: 41, goals: 18, assists: 5, cleanSheets: null, xG: 14.2, tacklesPer90: 0.4, passCompletion: 78, progressiveCarries: 2.1, form: 7.3, status: "injured", injuryNote: "Ruptured Achilles tendon (April 14 vs PSG) — scan confirmed 9-12 month absence; misses remainder of 2025-26 season and 2026 World Cup with France per Deschamps", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p510663.png" },
  { id: 25, name: "Rio Ngumoha", number: 48, position: "FWD", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 17, appearances: 13, goals: 2, assists: 2, cleanSheets: null, xG: 1.4, tacklesPer90: 0.3, passCompletion: 78, progressiveCarries: 3.5, form: 7.3, status: "fit", injuryNote: "Sat May 16 — led the line in last night's 4-2 Villa Park defeat at 17 after Isak's late withdrawal; one of the few bright spots in a wretched team display per Goal.com's player ratings ('despite the best efforts of teenager Rio Ngumoha'). Couldn't conjure a goal but ran channels and drew fouls. The teen remains Slot's bright young find — start expected at Brentford May 24 with Isak's fitness uncertain", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p611922.png" },
  { id: 26, name: "Federico Chiesa", number: 14, position: "FWD", nationality: "🇮🇹 Italy", age: 28, appearances: 12, goals: 1, assists: 1, cleanSheets: null, xG: 1.5, tacklesPer90: 0.6, passCompletion: 80, progressiveCarries: 2.2, form: 6.0, status: "fit", injuryNote: "Sat May 16 — unused sub in last night's 4-2 Villa Park defeat; Slot turned to Wirtz and Salah from the bench instead. Rotation winger option only — Anfield Watch's 8-man summer clear-out list still has the Italian likely to exit; one last Anfield outing possible against Brentford May 24", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p230621.png" },

  // ── Late additions ────────────────────────────────────────────────────────
  { id: 27, name: "Freddie Woodman", number: 28, position: "GK", nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England", age: 29, appearances: 2, goals: 0, assists: 0, cleanSheets: 0, xG: 0, tacklesPer90: 0, passCompletion: 78, progressiveCarries: 0.1, form: 7.4, status: "fit", injuryNote: "Sat May 16 — third-choice back-up to Mamardashvili at Villa Park last night (4-2 defeat); Alisson left out of the squad for an 11th straight game. Two PL starts this season (Crystal Palace and Old Trafford); serviceable cover for the Brentford finale May 24 if Alisson still isn't ready", image: "https://resources.premierleague.com/premierleague/photos/players/110x140/p155503.png" },
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
  { source: "Football365 / TeamTalk", title: "Slot sack saga explodes: reports claim FSG have 'decided' to move on from Arne Slot after Sunday's finale, with Andoni Iraola 'demanding' the Anfield job through his agent and the Dutchman due to learn his fate 'within 24 hours' — no tier-one outlet has confirmed a sacking", time: "today", category: "major" },
  { source: "The Athletic / Anfield Index", title: "James Pearce pours cold water on the sack claims — 'Liverpool's position on Arne Slot remains unchanged, despite a day of social-media rumours' — leaving a genuine split between the speculation and the most reliable Reds reporter", time: "today", category: "major" },
  { source: "Yahoo Sports / Liverpool.com", title: "Andoni Iraola overtakes Arne Slot as the bookmakers' favourite to be Liverpool's manager for the 2026-27 opener, displacing Luis Enrique, Hoeness and Conte as the single most-linked candidate", time: "today", category: "major" },
  { source: "Liverpool FC", title: "'Salah: Farewell to the King' — the LFC Original tribute film celebrating the Egyptian's nine years in the No. 11 shirt is released at 5pm BST today, with a companion film 'Robbo: My Liverpool' to follow on May 28", time: "today", category: "official" },
  { source: "Goal.com / DaveOCKOP", title: "Alisson Becker named in Brazil's 26-man World Cup squad — Ancelotti expects the Liverpool keeper as his first-choice No. 1 and gives an injury update after the call-up", time: "today", category: "major" },
  { source: "Liverpool.com", title: "England name their 26-man World Cup squad — ex-Liverpool captain Jordan Henderson widely expected to make the cut, with former Red Jarell Quansah in contention after his November debut", time: "today", category: "fan" },
  { source: "Tribuna / Fabrizio Romano", title: "Romano: Liverpool will decide Arne Slot's future at an end-of-season review after Sunday's Brentford finale, with Andoni Iraola a leading candidate should the club opt for a change", time: "1d ago", category: "major" },
  { source: "Liverpool FC / Liverpool.com", title: "Fitness latest: Alisson and Jeremie Frimpong both back in training; Slot says Alexander Isak 'definitely has a chance' for Sunday's finale but can give no guarantees", time: "1d ago", category: "official" },
  { source: "This Is Anfield / Sky Sports", title: "Transfer: AS Monaco prepared to accept bids of around £40m for midfielder Lamine Camara, with Liverpool and Newcastle both credited with interest as Hughes prioritises the engine room", time: "1d ago", category: "major" },
  { source: "Sky Sports / Caught Offside", title: "Transfer: Curtis Jones 'very likely' to leave Liverpool this summer — Inter Milan keen since January and new-contract talks stalled for months; Sunday could be the academy graduate's final Reds game", time: "1d ago", category: "fan" },
  { source: "Liverpool.com", title: "Transfer: Eduardo Camavinga commits his future to Real Madrid, cooling a long-running Liverpool midfield link and pushing recruitment focus toward alternatives such as Lamine Camara", time: "2d ago", category: "major" },
  { source: "Anfield Watch / Caught Offside", title: "Transfer: Liverpool join Manchester United in tracking Juventus centre-back Gleison Bremer, a Brazil international, as a possible summer defensive addition", time: "2d ago", category: "fan" },
  { source: "Liverpool FC / This Is Anfield", title: "adidas 2026-27 home kit unveiled — an explicit homage to the 1989-90 title-winning strip, geometric pattern restored, deep-red shorts and socks, paired with a green 'heritage' goalkeeper kit", time: "3d ago", category: "official" },
  { source: "Liverpool FC / Empire of the Kop", title: "Club confirms Anfield mosaic tributes for Salah and Robertson before Sunday's finale — the Kop will lift the mosaic for the Egyptian, the lower Sir Kenny Dalglish Stand for the Scotland captain", time: "4d ago", category: "official" },
  { source: "Sky Sports / NBC Sports / ESPN", title: "Aston Villa 4-2 Liverpool: Watkins brace plus Rogers and McGinn punish a set-piece collapse — Van Dijk's two headers (52', 90+) the lone reply on a night that dropped the Reds to 5th", time: "1w ago", category: "major" },
];

// ─── Next Fixture ──────────────────────────────────────────────────────────
const NEXT_MATCH = {
  opponent: "Brentford",
  shortName: "BRE",
  home: true,
  date: "2026-05-24T15:00:00",
  competition: "PL",
  venue: "Anfield",
  broadcast: "Sky Sports",
};

// ─── Match Results (sourced from ESPN, BBC, PL) ────────────────────────────
// result: "W" | "D" | "L"
const RESULTS = [
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
