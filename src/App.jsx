// built by nnnsightnnn — signal from noise
import { useState, useMemo, useEffect, useRef, Fragment } from "react";
import _ from "lodash";
import BrandCredit from "./components/BrandCredit.jsx";
import {
  PLAYERS, RSS_FEEDS, RESULTS, NEXT_MATCH,
  NEWS_DIGEST, STANDINGS, STANDINGS_COMMENTARY, DISPATCHES, TEAM_LOGOS,
} from "./playerData.js";
import LineupView from "./LineupView.jsx";

// ─── Editorial design tokens ────────────────────────────────────────────────
// "The Anfield Edition" — crimson ink on dark oxblood paper.
export const T = {
  ink: "#0E0709",
  surface: "#1A1012",
  red: "#C8102E",
  gold: "#F6EB61",
  ivory: "#F4EBD0",
  ivoryDim: "#F4EBD0BB",
  ivoryFaint: "#F4EBD066",
  rule: "#F4EBD022",
  ruleStrong: "#F4EBD040",
  green: "#1E7A47",
  ease: "cubic-bezier(0.22, 0.61, 0.36, 1)",
  serif: "'Playfair Display', Georgia, serif",
  sans: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
};

const initials = (name) => name.split(" ").map(w => w[0]).slice(0, 2).join("");
const fmtDateShort = (s) => {
  const d = new Date(s + "T12:00:00");
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }).replace(/\s/g, " ");
};
const fmtDateLong = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
};
const fmtClock = (iso) => new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  const weeks = Math.floor(days / 7);
  return `${weeks}w ago`;
}

// ─── Per-player form rating for the most recent match ───────────────────────
// Returns { rating, match, played } where rating is the player's individual
// rating in their most recent match (number 5.0-9.5), or null if they
// didn't feature. `match` is the RESULTS row, `played` is the boolean.
//
// "Did they play?" signals (in priority order):
//   a. Scored in match           → played
//   b. match.date ≥ outSince     → missed
//   c. ≤6 senior apps & no recentPlayedDates match → missed
//   d. otherwise                 → played (regular squad member)
//
// Rating priority:
//   1. Explicit override:    player.last5Forms[0] (hand-curated when known)
//   2. Derived from signals: baseline form ± result modifier ± scorer bonus
function buildPlayerLastMatchForm(player, results) {
  const match = results[0]; // newest-first
  if (!match) return { rating: null, match: null, played: false };

  const surname = player.name.split(" ").slice(-1)[0];
  const scoredHere = !!(match.scorers && surname && match.scorers.includes(surname));

  let played;
  if (scoredHere) {
    played = true;
  } else if (player.outSince && match.date >= player.outSince) {
    played = false;
  } else if ((player.appearances ?? 0) <= 6) {
    played = !!(player.recentPlayedDates && player.recentPlayedDates.includes(match.date));
  } else {
    played = true;
  }

  if (!played) return { rating: null, match, played: false };

  // Hand-curated override
  if (Array.isArray(player.last5Forms) && typeof player.last5Forms[0] === "number") {
    return {
      rating: Math.max(5.0, Math.min(9.5, Math.round(player.last5Forms[0] * 10) / 10)),
      match, played: true,
    };
  }

  // Derive rating from baseline form + match modifiers
  const baseline = player.form > 0 ? player.form : 6.5;
  let rating = baseline;
  if (match.result === "W") rating += 0.2;
  else if (match.result === "L") rating -= 0.4;
  if (scoredHere) rating += 0.7;

  return {
    rating: Math.max(5.0, Math.min(9.5, Math.round(rating * 10) / 10)),
    match, played: true,
  };
}

// ─── Atoms ──────────────────────────────────────────────────────────────────

// TeamCrest — small crest stamp. Liverpool's crest stays untreated (its red
// already harmonises with the palette); other clubs are softly desaturated so
// they read as ink rather than fighting the editorial colour scheme.
function TeamCrest({ team, size = 22, style = {} }) {
  const url = TEAM_LOGOS[team];
  if (!url) return null;
  const isLfc = team === "Liverpool";
  return (
    <img
      src={url}
      alt={team + " crest"}
      style={{
        width: size, height: size, objectFit: "contain",
        flexShrink: 0, verticalAlign: "middle",
        filter: isLfc ? "none" : "grayscale(0.65) brightness(1.05) contrast(1.05)",
        opacity: isLfc ? 1 : 0.9,
        ...style,
      }}
      onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
    />
  );
}

function SmallCaps({ children, color = T.ivoryDim, style = {} }) {
  return (
    <span style={{
      fontFamily: T.sans, fontWeight: 600, textTransform: "uppercase",
      letterSpacing: "0.18em", fontSize: 11, color, ...style,
    }}>{children}</span>
  );
}

function Chapter({ children, style = {} }) {
  return (
    <h2 className="chapter-h2" style={{
      fontFamily: T.serif, fontStyle: "italic", fontWeight: 500,
      fontSize: 54, letterSpacing: "-0.02em", color: T.ivory, lineHeight: 1, ...style,
    }}>
      {children}<span style={{ color: T.red }}>.</span>
    </h2>
  );
}

function GoldRule({ width = 64, style = {} }) {
  return <div style={{ height: 1, background: T.gold, width, ...style }} />;
}

function SectionHead({ title, meta }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-end", justifyContent: "space-between",
      marginBottom: 48, gap: 32, flexWrap: "wrap",
    }}>
      <Chapter>{title}</Chapter>
      {meta && (
        <div style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: T.ivoryDim, textAlign: "right", lineHeight: 1.6,
          fontFamily: T.sans, fontWeight: 500,
        }}>
          {meta}
        </div>
      )}
    </div>
  );
}

// ─── Stat strip — used on Cover and Matchday ────────────────────────────────

function StatStrip({ stats }) {
  const cols = stats.length;
  return (
    <div className="stat-strip-grid" style={{
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      borderTop: `1px solid ${T.ruleStrong}`,
      borderBottom: `1px solid ${T.ruleStrong}`,
      padding: "18px 0",
    }}>
      {stats.map((s, i) => (
        <div key={s.label} style={{
          padding: i === 0 ? "0 14px 0 0" : "0 14px",
          borderRight: i === cols - 1 ? "none" : `1px solid ${T.rule}`,
        }}>
          <div style={{
            fontFamily: T.serif, fontWeight: 500, fontSize: 32, lineHeight: 1,
            color: T.ivory, marginBottom: 6,
            fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
          }}>
            {s.value}
          </div>
          <div style={{
            fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.ivoryDim, fontFamily: T.sans, fontWeight: 500,
          }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Masthead nav ──────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { key: "cover",      label: "Cover" },
  { key: "matchday",   label: "Matchday" },
  { key: "squad",      label: "Squad" },
  { key: "lineup",     label: "Lineup" },
  { key: "standings",  label: "Standings" },
  { key: "dispatches", label: "Dispatches" },
  { key: "news",       label: "News" },
];

function Masthead({ view, onChange }) {
  const issueDate = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  return (
    <header style={{
      borderBottom: `1px solid ${T.rule}`, padding: "18px 0 14px",
      background: T.ink,
    }}>
      <div className="masthead-bar anfield-page" style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 56px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
      }}>
        {/* Brand mark — LFC crest as the publication's printer's mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <TeamCrest team="Liverpool" size={36} />
          <div>
            <div style={{ fontFamily: T.serif, fontWeight: 600, fontSize: 17, letterSpacing: "0.02em", color: T.ivory }}>
              The Anfield Edition
            </div>
            <div style={{
              fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
              color: T.ivoryDim, marginTop: 2, fontFamily: T.sans, fontWeight: 500,
            }}>
              Vol. XXXIV · Matchday Programme
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", gap: 2, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          {NAV_ITEMS.map((n) => {
            const active = view === n.key;
            return (
              <button
                key={n.key}
                onClick={() => onChange(n.key)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: active ? T.ivory : T.ivoryDim,
                  fontFamily: T.sans, fontSize: 12, fontWeight: 500,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  padding: "10px 14px",
                  transition: `color .5s ${T.ease}`,
                  position: "relative",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = T.ivory; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = active ? T.ivory : T.ivoryDim; }}
              >
                {n.label}
                {active && (
                  <span style={{
                    position: "absolute", left: 14, right: 14, bottom: 4,
                    height: 1, background: T.red,
                  }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Issue date */}
        <div className="masthead-date" style={{
          fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
          color: T.ivoryFaint, textAlign: "right", lineHeight: 1.5,
          fontFamily: T.sans, fontWeight: 500, minWidth: 140,
        }}>
          {issueDate.split(" ").slice(0, 1).join(" ")}<br />
          {issueDate.split(" ").slice(1).join(" ")}
        </div>
      </div>
    </header>
  );
}

// ─── Page (max-width container) ─────────────────────────────────────────────

function Page({ children, style = {} }) {
  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px", ...style }}>
      {children}
    </div>
  );
}

// ─── COVER VIEW ────────────────────────────────────────────────────────────

function CoverView({ onJump }) {
  const stats = useMemo(() => {
    const won = RESULTS.filter(r => r.result === "W").length;
    const drawn = RESULTS.filter(r => r.result === "D").length;
    const lost = RESULTS.filter(r => r.result === "L").length;
    const gf = RESULTS.reduce((s, r) => { const [h, a] = r.score.split("-").map(Number); return s + (r.home ? h : a); }, 0);
    const ga = RESULTS.reduce((s, r) => { const [h, a] = r.score.split("-").map(Number); return s + (r.home ? a : h); }, 0);
    const lfc = STANDINGS.find(t => t.highlight);
    return [
      { label: "Played",          value: String(lfc?.p ?? RESULTS.length).padStart(2, "0") },
      { label: "Won",             value: String(lfc?.w ?? won).padStart(2, "0") },
      { label: "Drawn",           value: String(lfc?.d ?? drawn).padStart(2, "0") },
      { label: "Lost",            value: String(lfc?.l ?? lost).padStart(2, "0") },
      { label: "Goals For",       value: String(gf).padStart(2, "0") },
      { label: "Goals Against",   value: String(ga).padStart(2, "0") },
      { label: "Position",        value: lfc ? `${lfc.pos}${["st","nd","rd"][lfc.pos-1] || "th"}` : "—" },
      { label: "Champions League", value: "Secured" },
    ];
  }, []);

  return (
    <section style={{ animation: `pageTurn .55s ${T.ease} both` }}>
      <div className="cover-section-pad" style={{ padding: "72px 0 56px", borderBottom: `1px solid ${T.rule}` }}>
        <div style={{
          fontFamily: T.serif, fontStyle: "italic", fontWeight: 500,
          fontSize: 14, color: T.red, marginBottom: 28, letterSpacing: "0.02em",
        }}>
          — A Matchday Programme, in print and pixels.
        </div>
        <h1 className="cover-hero" style={{
          fontFamily: T.serif, fontWeight: 500, fontSize: 148,
          lineHeight: 0.92, letterSpacing: "-0.04em", marginBottom: 32, color: T.ivory,
        }}>
          Anfield.<br /><em style={{ fontStyle: "italic", color: T.red }}>May 2026.</em>
        </h1>
        <GoldRule style={{ marginBottom: 12 }} />
        <p className="cover-deck" style={{
          fontFamily: T.serif, fontWeight: 400, fontSize: 24, lineHeight: 1.4,
          color: T.ivoryDim, maxWidth: "62ch", marginBottom: 48,
        }}>
          Thursday morning, and the manager has spoken. Arne Slot tells the media room
          he has every reason to believe he is the Liverpool manager next season.
          Inter put twenty million on Curtis Jones and are told thirty. Liverpool will
          let the Quansah clause drop to next summer. Eight weeks until Nashville, and
          the rebuild is being priced in public.
        </p>

        <StatStrip stats={stats} />
      </div>

      {/* Editor's letter + featured */}
      <div style={{ padding: "72px 0" }}>
        <SectionHead title="In this issue" meta={<>Editor's letter<br />{new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</>} />
        <div className="cover-issue-grid" style={{ display: "grid", gridTemplateColumns: "1.4fr 1px 1fr", gap: "0 56px" }}>
          <div>
            <p className="cover-letter-lead" style={{
              fontFamily: T.serif, fontSize: 22, lineHeight: 1.5, color: T.ivory,
              fontWeight: 400, marginBottom: 24, textWrap: "pretty",
            }}>
              <span style={{ fontStyle: "italic", color: T.red }}>Thursday</span>{" "}
              the manager spoke, and the speculation that had lived on the back pages
              for a fortnight closed in a single sentence. Slot, at his end-of-season
              media briefing, said he does not decide alone but has every reason to
              believe he is in the Anfield dugout when pre-season opens. Sky Sports led
              with the line; Liverpool.com framed it as the position FSG endorsed by
              silence. Sky Sport Italia, meanwhile, put the first number on the Curtis
              Jones file — twenty million from Inter, thirty the answer from Anfield —
              while Liverpool.com's column warned of ten more outgoings to fund the
              second phase of the Wirtz-and-Isak rebuild. The Quansah buy-back will
              wait twelve months for the cheaper window.
            </p>
            <p className="cover-letter-body" style={{
              fontFamily: T.serif, fontSize: 18, lineHeight: 1.6, color: T.ivoryDim,
              fontWeight: 400, textWrap: "pretty",
            }}>
              Inside, the squad as a roster, the standings as they finished, and five
              dispatches from the small army of writers chasing this team through the
              week. There is a manager who has said he is staying; an Italian price
              tag on a midfielder who is willing to go; a centre-back deferred to
              next summer; a father, in Argentina, holding the line for his son.
              Read slowly. The ink is still drying.
            </p>
          </div>
          <div style={{ background: T.rule }} />
          <div>
            <SmallCaps style={{ marginBottom: 18, display: "inline-block" }}>Featured</SmallCaps>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 18, marginTop: 8 }}>
              {DISPATCHES.slice(0, 4).map((d) => (
                <li key={d.n}>
                  <button
                    onClick={() => onJump("dispatches")}
                    style={{
                      background: "none", border: "none", padding: 0, cursor: "pointer",
                      textAlign: "left", color: T.ivory,
                    }}
                  >
                    <span style={{ fontFamily: T.serif, fontStyle: "italic", color: T.red, fontSize: 13 }}>{d.n}</span>
                    <div style={{ fontFamily: T.serif, fontSize: 18, lineHeight: 1.3, marginTop: 4, color: T.ivory }}>
                      {d.headline}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── MATCHDAY VIEW ─────────────────────────────────────────────────────────

function Countdown({ targetIso }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(id);
  }, []);
  let diff = Math.max(0, new Date(targetIso).getTime() - now);
  const days = Math.floor(diff / 86400000); diff -= days * 86400000;
  const hrs  = Math.floor(diff / 3600000);  diff -= hrs * 3600000;
  const mins = Math.floor(diff / 60000);
  const cell = (n, label) => (
    <div style={{ flex: 1 }}>
      <div style={{
        fontFamily: T.serif, fontWeight: 500, fontSize: 54, lineHeight: 1, color: T.ivory,
        fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
      }}>
        {String(n).padStart(2, "0")}
      </div>
      <div style={{
        fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: T.ivoryDim,
        marginTop: 6, fontFamily: T.sans, fontWeight: 500,
      }}>{label}</div>
    </div>
  );
  return (
    <div className="countdown-grid" style={{
      display: "flex", gap: 18, marginTop: 32, alignItems: "flex-end",
      borderTop: `1px solid ${T.rule}`, paddingTop: 20,
    }}>
      {cell(days, "Days")}{cell(hrs, "Hours")}{cell(mins, "Minutes")}
    </div>
  );
}

function FormBlock({ results }) {
  const last5 = results.slice(0, 5).map(r => r.result).reverse();
  const colorFor = (r) => r === "W" ? T.ivory : r === "D" ? T.gold : T.red;
  return (
    <div className="form-block" style={{
      background: T.surface, padding: 32, border: `1px solid ${T.rule}`,
    }}>
      <div style={{
        fontFamily: T.serif, fontStyle: "italic", fontWeight: 500,
        fontSize: 28, marginBottom: 6, color: T.ivory,
      }}>
        Form, last five.
      </div>
      <div style={{
        fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
        color: T.ivoryFaint, marginBottom: 24, fontFamily: T.sans, fontWeight: 500,
      }}>
        — Most recent on the right
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
        {last5.map((r, i) => (
          <div key={i} style={{
            width: 40, height: 40, border: `1px solid ${colorFor(r)}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: T.serif, fontWeight: 600, fontSize: 16, color: colorFor(r),
          }}>{r}</div>
        ))}
      </div>
      <p style={{
        fontFamily: T.serif, fontStyle: "italic", fontSize: 14,
        color: T.ivoryDim, lineHeight: 1.6,
        borderTop: `1px solid ${T.rule}`, paddingTop: 14,
      }}>
        Two wins on the bounce after a difficult European fortnight. The Palace performance
        was the cleanest the side has looked since February — a side, finally, that
        resembles its sum.
      </p>
    </div>
  );
}

function ResultsLedger({ results, compFilter, onCompChange }) {
  const tabs = [
    { key: "All", label: "All" },
    { key: "PL",  label: "PL" },
    { key: "UCL", label: "UCL" },
    { key: "FA",  label: "FA Cup" },
  ];
  const filtered = compFilter === "All" ? results : results.filter(r => r.competition === compFilter);
  return (
    <div style={{ marginTop: 56 }}>
      <div style={{
        display: "flex", alignItems: "flex-end", justifyContent: "space-between",
        marginBottom: 24, gap: 32, flexWrap: "wrap",
      }}>
        <h3 style={{
          fontFamily: T.serif, fontSize: 32, fontStyle: "italic", fontWeight: 500,
          color: T.ivory, lineHeight: 1.1,
        }}>
          Results, in chronological order<span style={{ color: T.red }}>.</span>
        </h3>
        <div style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: T.ivoryDim, textAlign: "right", lineHeight: 1.6,
          fontFamily: T.sans, fontWeight: 500,
        }}>
          Last ten<br />across all competitions
        </div>
      </div>

      {/* Competition filter — text links with gold hairline under active */}
      <div style={{
        display: "flex", gap: 0, marginBottom: 24,
        borderBottom: `1px solid ${T.rule}`,
      }}>
        {tabs.map((t, i) => {
          const active = compFilter === t.key;
          return (
            <button
              key={t.key}
              onClick={() => onCompChange(t.key)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "12px 20px",
                color: active ? T.ivory : T.ivoryDim,
                fontFamily: T.sans, fontSize: 11, fontWeight: 500,
                letterSpacing: "0.22em", textTransform: "uppercase",
                position: "relative", transition: `color .5s ${T.ease}`,
                borderRight: i === tabs.length - 1 ? "none" : `1px solid ${T.rule}`,
              }}
            >
              {t.label}
              {active && (
                <span style={{
                  position: "absolute", left: 20, right: 20, bottom: -1,
                  height: 1, background: T.gold,
                }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Ledger grid */}
      <div className="ledger-wrap">
      <div className="ledger-grid" style={{
        display: "grid",
        gridTemplateColumns: "80px 32px 1.4fr 80px 70px 1.6fr",
        columnGap: 18,
      }}>
        {["Date", "R", "Fixture", "Score", "Comp.", "Scorers"].map((h, i) => (
          <div key={h} style={{
            fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.ivoryFaint, padding: "10px 0",
            borderBottom: `1px solid ${T.ruleStrong}`,
            textAlign: i === 1 ? "right" : "left",
            fontFamily: T.sans, fontWeight: 500,
          }}>
            {h}
          </div>
        ))}
        {filtered.map((r, i) => {
          const resColor = r.result === "W" ? T.ivory : r.result === "D" ? T.gold : T.red;
          const cellStyle = {
            padding: "14px 0", borderBottom: `1px solid ${T.rule}`,
            fontSize: 13, color: T.ivory, fontFamily: T.sans,
          };
          return (
            <div key={i} style={{ display: "contents" }}>
              <div style={{
                ...cellStyle, color: T.ivoryDim,
                fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
              }}>{fmtDateShort(r.date)}</div>
              <div style={{ ...cellStyle, color: resColor, fontWeight: 600, textAlign: "right" }}>{r.result}</div>
              <div style={{ ...cellStyle, display: "flex", alignItems: "center", gap: 10 }}>
                <TeamCrest team="Liverpool" size={18} />
                <span style={{ color: T.ivoryFaint }}>·</span>
                <span style={{
                  fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
                  color: T.ivoryFaint, fontWeight: 500,
                }}>{r.home ? "v" : "@"}</span>
                <span style={{ color: T.ivoryFaint }}>·</span>
                <TeamCrest team={r.opponent} size={18} />
                <span style={{ marginLeft: 4 }}>{r.opponent}</span>
                {!r.home && (
                  <span style={{
                    color: T.ivoryFaint, fontSize: 10, letterSpacing: "0.2em",
                    textTransform: "uppercase", marginLeft: 8,
                  }}>· away</span>
                )}
              </div>
              <div style={{
                ...cellStyle, fontFamily: T.serif, fontWeight: 500, fontSize: 18,
                color: resColor, letterSpacing: "0.02em",
                fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
              }}>{r.score.replace("-", "–")}</div>
              <div style={{
                ...cellStyle, fontSize: 10, letterSpacing: "0.18em",
                textTransform: "uppercase", color: T.ivoryFaint,
              }}>{r.competition}</div>
              <div style={{
                ...cellStyle, color: T.ivoryDim, fontSize: 12,
                fontStyle: "italic", fontFamily: T.serif,
              }}>{r.scorers || "—"}</div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div style={{
            gridColumn: "1 / -1", padding: 40, textAlign: "center",
            color: T.ivoryFaint, fontFamily: T.serif, fontStyle: "italic",
          }}>
            No fixtures recorded under this competition.
          </div>
        )}
      </div>
      </div>
    </div>
  );
}

function MatchdayView() {
  const [compFilter, setCompFilter] = useState("All");
  const filteredResults = useMemo(() => (
    compFilter === "All" ? RESULTS : RESULTS.filter(r => r.competition === compFilter)
  ), [compFilter]);

  // 10-tile dashboard stats — rendered as a hairline stat strip
  const matchdayStats = useMemo(() => {
    const gf = filteredResults.reduce((s, r) => { const [h, a] = r.score.split("-").map(Number); return s + (r.home ? h : a); }, 0);
    const ga = filteredResults.reduce((s, r) => { const [h, a] = r.score.split("-").map(Number); return s + (r.home ? a : h); }, 0);
    return [
      { label: "Played",        value: String(filteredResults.length).padStart(2, "0") },
      { label: "Won",           value: String(filteredResults.filter(r => r.result === "W").length).padStart(2, "0") },
      { label: "Drawn",         value: String(filteredResults.filter(r => r.result === "D").length).padStart(2, "0") },
      { label: "Lost",          value: String(filteredResults.filter(r => r.result === "L").length).padStart(2, "0") },
      { label: "Goals For",     value: String(gf).padStart(2, "0") },
      { label: "Goals Against", value: String(ga).padStart(2, "0") },
      { label: "Squad Goals",   value: String(_.sumBy(PLAYERS, "goals")).padStart(2, "0") },
      { label: "Assists",       value: String(_.sumBy(PLAYERS, "assists")).padStart(2, "0") },
      { label: "Avg Form",      value: _.meanBy(PLAYERS, "form").toFixed(1) },
      { label: "Injured",       value: String(PLAYERS.filter(p => p.status !== "fit").length).padStart(2, "0") },
    ];
  }, [filteredResults]);

  return (
    <section style={{ animation: `pageTurn .55s ${T.ease} both`, padding: "72px 0", borderBottom: `1px solid ${T.rule}` }}>
      <SectionHead title="Matchday" meta={<>{fmtDateLong(NEXT_MATCH.date)}<br />{NEXT_MATCH.venue} · {fmtClock(NEXT_MATCH.date)} BST</>} />

      <div style={{
        display: "grid", gridTemplateColumns: "1.3fr 1fr",
        gap: 48, alignItems: "start",
      }} className="matchday-grid">
        {/* Fixture block */}
        <div style={{ borderTop: `2px solid ${T.ivory}`, paddingTop: 24 }}>
          <div style={{
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.gold, marginBottom: 18, fontFamily: T.sans, fontWeight: 500,
          }}>
            — {NEXT_MATCH.competition === "PL" ? "Premier League" : NEXT_MATCH.competition === "UCL" ? "Champions League" : NEXT_MATCH.competition === "FA" ? "FA Cup" : "Pre-Season Friendly · USA Tour"}
          </div>
          <div className="matchday-fixture" style={{
            fontFamily: T.serif, fontWeight: 500, fontSize: 64, lineHeight: 1,
            letterSpacing: "-0.02em", marginBottom: 24, color: T.ivory,
            display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
          }}>
            <TeamCrest team={NEXT_MATCH.opponent} size={48} />
            <span>{NEXT_MATCH.opponent}</span>
            <em style={{
              fontStyle: "italic", color: T.ivoryDim, fontSize: 32,
              padding: "0 4px",
            }}>vs</em>
            <span>Liverpool</span>
            <TeamCrest team="Liverpool" size={48} />
          </div>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24,
            borderTop: `1px solid ${T.rule}`, paddingTop: 20,
          }}>
            {[
              { label: "Venue", val: NEXT_MATCH.venue },
              { label: "Kick-off", val: fmtClock(NEXT_MATCH.date) + " BST" },
              { label: "Broadcast", val: NEXT_MATCH.broadcast },
              { label: "Referee", val: "TBC" },
            ].map((m) => (
              <div key={m.label}>
                <div style={{
                  fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: T.ivoryFaint, marginBottom: 6, fontFamily: T.sans, fontWeight: 500,
                }}>{m.label}</div>
                <div style={{ fontFamily: T.serif, fontSize: 18, color: T.ivory }}>
                  {m.val}
                </div>
              </div>
            ))}
          </div>
          <Countdown targetIso={NEXT_MATCH.date} />
        </div>

        <FormBlock results={RESULTS} />
      </div>

      {/* Second stat strip (10 tiles) */}
      <div style={{ marginTop: 56 }}>
        <div style={{
          fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
          color: T.ivoryDim, marginBottom: 14, fontFamily: T.sans, fontWeight: 500,
        }}>
          — Season ledger
        </div>
        <StatStrip stats={matchdayStats} />
      </div>

      <ResultsLedger results={RESULTS} compFilter={compFilter} onCompChange={setCompFilter} />
    </section>
  );
}

// ─── PLAYER CARD ───────────────────────────────────────────────────────────

function Portrait({ player }) {
  const [imgFailed, setImgFailed] = useState(false);
  const status = player.status === "injured" ? "injured"
    : player.status === "recovering" ? "recovering"
    : player.status === "doubtful" ? "doubtful" : "fit";
  const hasImage = player.image && !imgFailed;
  return (
    <div className="player-portrait" style={{
      width: 88, height: 108,
      // Striped placeholder lives behind the photo — visible if image fails or whilst loading
      background: `repeating-linear-gradient(45deg, #F4EBD008 0, #F4EBD008 4px, transparent 4px, transparent 8px), ${T.surface}`,
      border: `1px solid ${T.ruleStrong}`,
      position: "relative",
      display: "flex", alignItems: "flex-end", justifyContent: "center",
      overflow: "hidden", flexShrink: 0,
    }}>
      {/* Real photo — duotone-tinted to sit in the editorial palette */}
      {hasImage && (
        <>
          <img
            src={player.image}
            alt={player.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "top center",
              filter: "grayscale(100%) contrast(1.05) brightness(0.78) sepia(0.18)",
            }}
          />
          {/* Warm oxblood multiply layer + bottom-up ink fade for caption legibility */}
          <div style={{
            position: "absolute", inset: 0,
            background: T.red, mixBlendMode: "multiply",
            opacity: 0.18, pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(180deg, transparent 30%, ${T.ink}d8 100%)`,
            pointerEvents: "none",
          }} />
        </>
      )}

      {/* Status hairline at top — stays above the photo */}
      {status !== "fit" && (
        <div style={{
          position: "absolute", left: 0, right: 0, top: 0, height: 3,
          background: status === "recovering" ? T.gold : T.red,
          zIndex: 2,
        }} />
      )}

      {/* Initials caption — only shown when the photo isn't there */}
      {!hasImage && (
        <div style={{
          fontFamily: T.serif, fontStyle: "italic", fontSize: 13,
          color: T.ivoryDim, paddingBottom: 8, letterSpacing: "0.04em",
        }}>
          — {initials(player.name)}
        </div>
      )}
    </div>
  );
}

// Most-recent-match player form — single labelled pill showing the player's
// rating in the latest match alongside the opponent (so it's obvious which
// match the rating refers to). Dashed "·" tile + "Did not play" caption
// when the player was absent.
function PlayerLastMatchForm({ rating, match, played }) {
  const colorFor = (r) => {
    if (r == null) return T.ivoryFaint;
    if (r >= 8.0) return "#28a745"; // excellent
    if (r >= 7.5) return "#5cb85c"; // good
    if (r >= 7.0) return T.gold;    // decent
    if (r >= 6.5) return "#fd7e14"; // fair
    return T.red;                   // poor
  };
  const color = colorFor(rating);
  const opponent = match ? match.opponent : "—";
  const venue = match ? (match.home ? "vs" : "@") : "";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 8 }}>
      <div style={{
        minWidth: 36, height: 24, padding: "0 6px",
        border: `1px solid ${rating == null ? T.ruleStrong : color}`,
        borderStyle: rating == null ? "dashed" : "solid",
        fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: T.serif, fontWeight: 600, color,
        fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
      }}>
        {rating == null ? "·" : rating.toFixed(1)}
      </div>
      <div style={{
        fontFamily: T.sans, fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase",
        color: T.ivoryFaint, fontWeight: 500,
      }}>
        {played ? `Last match · ${venue} ${opponent}` : (match ? `Did not play · ${venue} ${opponent}` : "No matches yet")}
      </div>
    </div>
  );
}

// Editorial-styled tab content for the player drilldown.

function StatsTable({ player }) {
  const rows = [
    { label: "Expected goals (xG)",        value: (player.xG ?? 0).toFixed(1) },
    { label: "Pass completion",            value: `${player.passCompletion}%` },
    { label: "Tackles per 90",             value: (player.tacklesPer90 ?? 0).toFixed(1) },
    { label: "Progressive carries per 90", value: (player.progressiveCarries ?? 0).toFixed(1) },
  ];
  return (
    <div style={{
      borderTop: `1px solid ${T.ruleStrong}`,
      borderBottom: `1px solid ${T.ruleStrong}`,
    }}>
      {rows.map((r, i) => (
        <div key={r.label} style={{
          display: "flex", justifyContent: "space-between", alignItems: "baseline",
          padding: "12px 0",
          borderBottom: i === rows.length - 1 ? "none" : `1px solid ${T.rule}`,
        }}>
          <span style={{ fontFamily: T.sans, fontSize: 13, color: T.ivoryDim }}>{r.label}</span>
          <span style={{
            fontFamily: T.serif, fontWeight: 500, fontSize: 20, color: T.ivory,
            fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
          }}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function PhysicalInsert({ physical }) {
  if (!physical) {
    return <p style={{ fontFamily: T.serif, fontStyle: "italic", color: T.ivoryFaint }}>No physical profile recorded.</p>;
  }
  const totalInches = Math.round(physical.height / 2.54);
  const ft = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  const lbs = Math.round(physical.weight * 2.205);
  const Bar = ({ label, value, max = 99 }) => (
    <div style={{
      display: "flex", alignItems: "center", gap: 16, padding: "10px 0",
      borderBottom: `1px solid ${T.rule}`,
    }}>
      <span style={{ fontFamily: T.sans, fontSize: 12, color: T.ivoryDim, flex: "0 0 140px" }}>{label}</span>
      <span style={{
        fontFamily: T.serif, fontWeight: 500, fontSize: 18, color: T.ivory, flex: "0 0 40px",
        fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
      }}>{value}</span>
      <div style={{ flex: 1, height: 1, background: T.rule, position: "relative" }}>
        <div style={{
          position: "absolute", left: 0, top: -1, height: 3,
          width: `${(value / max) * 100}%`, background: T.red,
        }} />
      </div>
    </div>
  );
  return (
    <div>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        borderTop: `1px solid ${T.ruleStrong}`,
        borderBottom: `1px solid ${T.ruleStrong}`,
        padding: "16px 0", marginBottom: 6,
      }}>
        <div style={{ paddingRight: 14, borderRight: `1px solid ${T.rule}` }}>
          <div style={{
            fontFamily: T.serif, fontWeight: 500, fontSize: 32, color: T.ivory,
            fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
          }}>
            {ft}<span style={{ color: T.ivoryFaint, fontSize: 16 }}>′</span>
            {inches}<span style={{ color: T.ivoryFaint, fontSize: 16 }}>″</span>
          </div>
          <SmallCaps style={{ marginTop: 4 }}>Height · {physical.height} cm</SmallCaps>
        </div>
        <div style={{ paddingLeft: 14 }}>
          <div style={{
            fontFamily: T.serif, fontWeight: 500, fontSize: 32, color: T.ivory,
            fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
          }}>
            {lbs}<span style={{ color: T.ivoryFaint, fontSize: 16 }}> lb</span>
          </div>
          <SmallCaps style={{ marginTop: 4 }}>Weight · {physical.weight} kg</SmallCaps>
        </div>
      </div>
      <Bar label="Pace" value={physical.pace} />
      <Bar label="Acceleration" value={physical.acceleration} />
      <Bar label="Sprint speed" value={physical.sprintSpeed} />
    </div>
  );
}

function CareerInsert({ career }) {
  if (!career || career.length === 0) {
    return <p style={{ fontFamily: T.serif, fontStyle: "italic", color: T.ivoryFaint }}>No career timeline recorded.</p>;
  }
  // Reverse chronological — most recent first
  const ordered = [...career].reverse();
  return (
    <div style={{ position: "relative", paddingLeft: 24 }}>
      <div style={{
        position: "absolute", left: 6, top: 6, bottom: 6,
        width: 1, background: T.rule,
      }} />
      {ordered.map((entry, i) => {
        const isCurrent = entry.years.endsWith("-");
        const isYouth = entry.type === "youth";
        return (
          <div key={i} style={{ position: "relative", marginBottom: i < ordered.length - 1 ? 18 : 0 }}>
            {/* Dot */}
            <div style={{
              position: "absolute", left: -22, top: 6,
              width: 9, height: 9, borderRadius: "50%",
              background: isYouth ? "transparent" : isCurrent ? T.red : T.ivory,
              border: `1px solid ${isYouth ? T.ivoryFaint : isCurrent ? T.red : T.ivory}`,
            }} />
            <div style={{ opacity: isYouth ? 0.65 : 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: T.serif, fontWeight: 500, fontSize: 17,
                  color: isCurrent ? T.red : T.ivory, letterSpacing: "-0.01em",
                }}>{entry.club}</span>
                <span style={{
                  fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase",
                  color: T.ivoryFaint, fontFamily: T.sans, fontWeight: 500,
                }}>
                  {entry.fee || (isYouth ? "Youth" : "Academy")}
                </span>
              </div>
              <div style={{
                fontFamily: T.serif, fontStyle: "italic", fontSize: 13,
                color: T.ivoryDim, marginTop: 3,
                fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
              }}>
                {entry.years}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PlayerCard({ player, expanded, onToggle, lastMatch }) {
  const [tab, setTab] = useState("stats");
  useEffect(() => { if (!expanded) setTab("stats"); }, [expanded]);

  const posLabel = { GK: "Goalkeeper", DEF: "Defender", MID: "Midfielder", FWD: "Forward" }[player.position];
  const statusLabel = player.status === "injured" ? "Out"
    : player.status === "recovering" ? "Recovering"
    : player.status === "doubtful" ? "Doubtful" : null;
  const statusColor = player.status === "recovering" ? T.gold : T.red;

  // Strip flag emojis from nationality string (existing format: "🇧🇷 Brazil")
  const nat = player.nationality ? player.nationality.replace(/^[^\p{L}]+/u, "") : "—";

  return (
    <article
      onClick={onToggle}
      className="player-card"
      style={{
        display: "grid", gridTemplateColumns: "88px 1fr",
        gap: 20, padding: "24px 0",
        borderBottom: `1px solid ${T.rule}`,
        cursor: "pointer",
        transition: `background .5s ${T.ease}`,
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#F4EBD006"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
    >
      <Portrait player={player} />

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div className="player-name" style={{
          fontFamily: T.serif, fontWeight: 500, fontSize: 22,
          lineHeight: 1.1, letterSpacing: "-0.01em", color: T.ivory,
        }}>
          <span style={{
            color: T.red, fontStyle: "italic", fontWeight: 400, marginRight: 8,
            fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
          }}>№{player.number}</span>
          {player.name}
        </div>
        <div style={{
          fontFamily: T.serif, fontStyle: "italic", fontWeight: 400,
          fontSize: 13, color: T.ivoryDim, lineHeight: 1.5,
        }}>
          {posLabel} · <span style={{ color: T.ivory }}>{nat}</span> · {player.age}
        </div>
        {statusLabel && (
          <div style={{
            display: "inline-block", alignSelf: "flex-start",
            fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "2px 0", color: statusColor,
            borderBottom: `1px solid ${statusColor}`,
            fontFamily: T.sans, fontWeight: 500,
          }}>
            {statusLabel}
          </div>
        )}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12,
          borderTop: `1px solid ${T.rule}`, paddingTop: 10, marginTop: 6,
          fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
        }}>
          {[
            { l: "Apps",    v: player.appearances },
            { l: "Goals",   v: player.goals },
            { l: "Assists", v: player.assists },
            { l: "Form",    v: player.form > 0 ? player.form.toFixed(1) : "—" },
          ].map((s) => (
            <div key={s.l}>
              <div style={{ fontFamily: T.serif, fontWeight: 500, fontSize: 18, color: T.ivory }}>{s.v}</div>
              <div style={{
                fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
                color: T.ivoryFaint, marginTop: 2, fontFamily: T.sans, fontWeight: 500,
              }}>{s.l}</div>
            </div>
          ))}
        </div>
        <PlayerLastMatchForm rating={lastMatch.rating} match={lastMatch.match} played={lastMatch.played} />
      </div>

      {/* Expanded editorial drilldown */}
      <div style={{
        gridColumn: "1 / -1",
        maxHeight: expanded ? 800 : 0,
        opacity: expanded ? 1 : 0,
        overflow: "hidden",
        transition: `max-height .55s ${T.ease}, opacity .35s ${T.ease}, margin-top .35s ${T.ease}`,
        marginTop: expanded ? 14 : 0,
      }}>
        {/* Italic editorial note with red left rule */}
        {player.injuryNote && (
          <p style={{
            fontFamily: T.serif, fontStyle: "italic", fontSize: 13,
            color: T.ivoryDim, lineHeight: 1.6,
            borderLeft: `1px solid ${T.red}`,
            padding: "6px 0 6px 16px", marginBottom: 24,
          }}>
            {player.injuryNote}
          </p>
        )}

        {/* Tab bar — text links separated by middle dots, red underline on active */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex", gap: 0, marginBottom: 18,
            borderBottom: `1px solid ${T.rule}`, alignItems: "center",
          }}
        >
          {[
            { key: "stats",    label: "Stats" },
            { key: "physical", label: "Physical" },
            { key: "career",   label: "Career" },
          ].map((t, i) => (
            <button
              key={t.key}
              onClick={(e) => { e.stopPropagation(); setTab(t.key); }}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "10px 18px",
                color: tab === t.key ? T.ivory : T.ivoryDim,
                fontFamily: T.sans, fontSize: 11, fontWeight: 500,
                letterSpacing: "0.22em", textTransform: "uppercase",
                position: "relative", transition: `color .5s ${T.ease}`,
                borderRight: i < 2 ? `1px solid ${T.rule}` : "none",
              }}
            >
              {t.label}
              {tab === t.key && (
                <span style={{
                  position: "absolute", left: 18, right: 18, bottom: -1,
                  height: 1, background: T.red,
                }} />
              )}
            </button>
          ))}
        </div>

        <div onClick={(e) => e.stopPropagation()}>
          {tab === "stats" && <StatsTable player={player} />}
          {tab === "physical" && <PhysicalInsert physical={player.physical} />}
          {tab === "career" && <CareerInsert career={player.career} />}
        </div>
      </div>
    </article>
  );
}

// ─── SQUAD VIEW ────────────────────────────────────────────────────────────

function SquadView() {
  const [posFilter, setPosFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("form");
  const [expandedId, setExpandedId] = useState(null);

  const counts = useMemo(() => {
    const c = { ALL: PLAYERS.length, GK: 0, DEF: 0, MID: 0, FWD: 0 };
    PLAYERS.forEach(p => { c[p.position] = (c[p.position] || 0) + 1; });
    return c;
  }, []);

  const filtered = useMemo(() => {
    let list = [...PLAYERS];
    if (posFilter !== "ALL") list = list.filter(p => p.position === posFilter);
    if (statusFilter === "fit") list = list.filter(p => p.status === "fit");
    if (statusFilter === "injured") list = list.filter(p => p.status !== "fit");
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    const sortMap = {
      form:        (a, b) => b.form - a.form,
      goals:       (a, b) => b.goals - a.goals,
      assists:     (a, b) => b.assists - a.assists,
      xG:          (a, b) => (b.xG ?? 0) - (a.xG ?? 0),
      appearances: (a, b) => b.appearances - a.appearances,
      number:      (a, b) => a.number - b.number,
    };
    return list.sort(sortMap[sortBy] || sortMap.form);
  }, [posFilter, statusFilter, search, sortBy]);

  const positions = [
    { key: "ALL", label: "Whole roster" },
    { key: "GK",  label: "Goalkeepers" },
    { key: "DEF", label: "Defenders" },
    { key: "MID", label: "Midfielders" },
    { key: "FWD", label: "Forwards" },
  ];

  const half = Math.ceil(filtered.length / 2);
  const left = filtered.slice(0, half);
  const right = filtered.slice(half);

  return (
    <section style={{ animation: `pageTurn .55s ${T.ease} both`, padding: "72px 0", borderBottom: `1px solid ${T.rule}` }}>
      <SectionHead title="Squad" meta={<>{PLAYERS.length} players<br />2025–26 first team</>} />

      {/* Position bar */}
      <div className="squad-pos-bar" style={{
        display: "flex", borderTop: `1px solid ${T.ruleStrong}`,
        borderBottom: `1px solid ${T.ruleStrong}`, marginBottom: 28,
      }}>
        {positions.map((p, i) => {
          const active = posFilter === p.key;
          return (
            <button
              key={p.key}
              onClick={() => { setPosFilter(p.key); setExpandedId(null); }}
              style={{
                flex: 1, background: "none", border: "none", cursor: "pointer",
                borderRight: i < positions.length - 1 ? `1px solid ${T.rule}` : "none",
                color: active ? T.ivory : T.ivoryDim,
                padding: 16,
                fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
                fontFamily: T.sans, fontWeight: 500,
                transition: `color .5s ${T.ease}`,
              }}
            >
              <span style={{
                display: "block", fontFamily: T.serif, fontStyle: "italic",
                fontWeight: 400, fontSize: 18, letterSpacing: "0.02em",
                textTransform: "none", color: T.ivory, marginBottom: 4,
                fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
              }}>
                {String(counts[p.key] ?? 0).padStart(2, "0")}
              </span>
              {p.label}
              {active && (
                <span style={{
                  display: "block", height: 1, background: T.red,
                  width: 24, margin: "8px auto -1px",
                }} />
              )}
            </button>
          );
        })}
      </div>

      {/* Editorial filter row — search + status + sort */}
      <div className="squad-filter-row" style={{
        display: "flex", gap: 32, marginBottom: 40, flexWrap: "wrap",
        alignItems: "flex-end", justifyContent: "space-between",
      }}>
        {/* Search — bottom border only, italic placeholder */}
        <div style={{ flex: "0 0 280px", maxWidth: "100%" }}>
          <SmallCaps style={{ display: "block", marginBottom: 8 }}>Search</SmallCaps>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search the roster…"
            style={{
              width: "100%", background: "transparent", border: "none",
              borderBottom: `1px solid ${T.ruleStrong}`,
              padding: "8px 0", color: T.ivory,
              fontFamily: T.serif, fontSize: 18, outline: "none",
              fontStyle: search ? "normal" : "italic",
            }}
            onFocus={(e) => { e.currentTarget.style.borderBottomColor = T.red; }}
            onBlur={(e) => { e.currentTarget.style.borderBottomColor = T.ruleStrong; }}
          />
        </div>

        {/* Status filter — three text links with thin red underline on active */}
        <div>
          <SmallCaps style={{ display: "block", marginBottom: 8 }}>Status</SmallCaps>
          <div style={{ display: "flex", gap: 0 }}>
            {[
              { key: "all", label: "All" },
              { key: "fit", label: "Fit" },
              { key: "injured", label: "Out" },
            ].map((s, i, arr) => {
              const active = statusFilter === s.key;
              return (
                <button
                  key={s.key}
                  onClick={() => setStatusFilter(s.key)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    padding: "6px 14px",
                    color: active ? T.ivory : T.ivoryDim,
                    fontFamily: T.sans, fontSize: 12, fontWeight: 500,
                    letterSpacing: "0.18em", textTransform: "uppercase",
                    position: "relative",
                    borderRight: i < arr.length - 1 ? `1px solid ${T.rule}` : "none",
                  }}
                >
                  {s.label}
                  {active && (
                    <span style={{
                      position: "absolute", left: 14, right: 14, bottom: 2,
                      height: 1, background: T.red,
                    }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sort selector — text links separated by middle dots */}
        <div style={{ marginLeft: "auto" }}>
          <SmallCaps style={{ display: "block", marginBottom: 8, textAlign: "right" }}>Sort by</SmallCaps>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", justifyContent: "flex-end" }}>
            {[
              { key: "form",        label: "Form" },
              { key: "goals",       label: "Goals" },
              { key: "assists",     label: "Assists" },
              { key: "xG",          label: "xG" },
              { key: "appearances", label: "Apps" },
              { key: "number",      label: "№" },
            ].map((s, i, arr) => (
              <span key={s.key} style={{ display: "inline-flex", alignItems: "center" }}>
                <button
                  onClick={() => setSortBy(s.key)}
                  style={{
                    background: "none", border: "none", cursor: "pointer",
                    padding: "4px 6px",
                    color: sortBy === s.key ? T.ivory : T.ivoryDim,
                    fontFamily: T.serif,
                    fontStyle: sortBy === s.key ? "italic" : "normal",
                    fontWeight: sortBy === s.key ? 500 : 400,
                    fontSize: 15,
                    borderBottom: sortBy === s.key ? `1px solid ${T.red}` : "1px solid transparent",
                  }}
                >
                  {s.label}
                </button>
                {i < arr.length - 1 && (
                  <span style={{ color: T.ivoryFaint, padding: "0 4px" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Two-column roster */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "0 40px" }} className="roster-grid">
        <div style={{ display: "flex", flexDirection: "column" }}>
          {left.map((p) => (
            <PlayerCard
              key={p.id}
              player={p}
              expanded={expandedId === p.id}
              onToggle={() => setExpandedId(expandedId === p.id ? null : p.id)}
              lastMatch={buildPlayerLastMatchForm(p, RESULTS)}
            />
          ))}
        </div>
        <div style={{ background: T.rule }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {right.map((p) => (
            <PlayerCard
              key={p.id}
              player={p}
              expanded={expandedId === p.id}
              onToggle={() => setExpandedId(expandedId === p.id ? null : p.id)}
              lastMatch={buildPlayerLastMatchForm(p, RESULTS)}
            />
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{
            gridColumn: "1 / -1", padding: 40, textAlign: "center",
            color: T.ivoryFaint, fontFamily: T.serif, fontStyle: "italic",
          }}>
            No players match these criteria.
          </div>
        )}
      </div>
    </section>
  );
}

// ─── STANDINGS VIEW ────────────────────────────────────────────────────────

// Color stripe for the left edge based on UCL/UEL/UECL/REL qualification.
const QUAL_COLORS = {
  UCL:  "#81D6AC", // green — Champions League
  UEL:  "#FFB343", // amber — Europa
  UECL: "#7FB6FF", // pale blue — Conference
  REL:  "#E94B5C", // red — relegation
};
const QUAL_LABELS = {
  UCL: "Champions League",
  UEL: "Europa League",
  UECL: "Conference League",
  REL: "Relegation",
};

function StandingsView() {
  const c = STANDINGS_COMMENTARY || {};
  const teamNotes = c.teams || {};
  const refreshedLabel = c.generatedAt
    ? new Date(c.generatedAt).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })
    : null;

  return (
    <section style={{ animation: `pageTurn .55s ${T.ease} both`, padding: "72px 0", borderBottom: `1px solid ${T.rule}` }}>
      <SectionHead
        title="Standings"
        meta={<>Premier League<br />after Round {c.matchweek ?? 37}{refreshedLabel ? <><br /><span style={{ color: T.ivoryFaint, fontSize: 11 }}>Refreshed {refreshedLabel}</span></> : null}</>}
      />

      {/* Overall commentary block */}
      {c.overview && (
        <div style={{
          marginBottom: 36, padding: "24px 0",
          borderTop: `1px solid ${T.rule}`, borderBottom: `1px solid ${T.rule}`,
          display: "grid", gridTemplateColumns: "140px 1fr", gap: 32,
        }} className="standings-commentary">
          <div style={{
            fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.ivoryFaint, fontFamily: T.sans, fontWeight: 600, paddingTop: 4,
          }}>
            The Table,<br />in Brief
          </div>
          <div style={{
            fontFamily: T.serif, fontStyle: "italic", fontSize: 17, lineHeight: 1.55,
            color: T.ivoryDim, textWrap: "pretty",
          }}>
            {c.overview}
            {c.source && (
              <div style={{
                marginTop: 14, fontSize: 11, color: T.ivoryFaint,
                fontFamily: T.sans, fontStyle: "normal",
                letterSpacing: "0.15em", textTransform: "uppercase",
              }}>
                Source · {c.source}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="standings-wrap">
      <table style={{
        width: "100%", borderCollapse: "collapse",
        fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
      }}>
        <thead>
          <tr>
            {["Pos", "Club", "P", "W", "D", "L", "GD", "Pts"].map((h, i) => (
              <th key={h} style={{
                textAlign: i >= 2 ? "right" : "left",
                fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase",
                color: T.ivoryFaint, fontWeight: 500, padding: "14px 12px",
                borderBottom: `1px solid ${T.ruleStrong}`,
                fontFamily: T.sans,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {STANDINGS.map((t, i) => {
            const lfc = t.highlight;
            const qualColor = QUAL_COLORS[t.qualification];
            const note = teamNotes[t.team];
            const stripeColor = lfc ? T.red : qualColor;
            return (
              <Fragment key={t.team}>
              <tr style={{ background: i % 2 === 1 ? "#F4EBD005" : "transparent" }}>
                <td style={{
                  position: "relative", padding: "16px 12px",
                  borderBottom: note ? "none" : `1px solid ${T.rule}`,
                  fontFamily: T.serif, fontStyle: "italic",
                  color: T.ivoryDim, width: 56, fontSize: 14,
                }}>
                  {stripeColor && (
                    <span style={{
                      position: "absolute", left: -12, top: 0, bottom: 0,
                      width: 3, background: stripeColor,
                    }} />
                  )}
                  {String(t.pos).padStart(2, "0")}
                </td>
                <td style={{
                  padding: "16px 12px",
                  borderBottom: note ? "none" : `1px solid ${T.rule}`,
                  fontFamily: T.serif, fontWeight: lfc ? 600 : 500, fontSize: 17,
                  color: T.ivory,
                }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                    <TeamCrest team={t.team} size={22} />
                    <span>{t.team}</span>
                  </span>
                </td>
                {[t.p, t.w, t.d, t.l, (t.gd > 0 ? "+" + t.gd : t.gd)].map((v, j) => (
                  <td key={j} style={{
                    padding: "16px 12px",
                    borderBottom: note ? "none" : `1px solid ${T.rule}`,
                    textAlign: "right", fontSize: 14, color: T.ivory,
                    fontFamily: T.sans,
                  }}>{v}</td>
                ))}
                <td style={{
                  padding: "16px 12px",
                  borderBottom: note ? "none" : `1px solid ${T.rule}`,
                  textAlign: "right",
                  fontFamily: T.serif, fontWeight: 600, fontSize: 18, color: T.ivory,
                }}>{t.pts}</td>
              </tr>
              {note && (
                <tr style={{ background: i % 2 === 1 ? "#F4EBD005" : "transparent" }}>
                  <td style={{
                    padding: "0 12px 14px",
                    borderBottom: `1px solid ${T.rule}`,
                    position: "relative",
                  }}>
                    {stripeColor && (
                      <span style={{
                        position: "absolute", left: -12, top: -16, bottom: 0,
                        width: 3, background: stripeColor,
                      }} />
                    )}
                  </td>
                  <td colSpan={7} style={{
                    padding: "0 12px 14px",
                    borderBottom: `1px solid ${T.rule}`,
                    fontFamily: T.serif, fontStyle: "italic",
                    fontSize: 13, color: lfc ? T.ivory : T.ivoryDim,
                    lineHeight: 1.5,
                    maxWidth: 800,
                  }}>
                    — {note}
                  </td>
                </tr>
              )}
              </Fragment>
            );
          })}
        </tbody>
      </table>
      </div>

      {/* Legend */}
      <div style={{
        display: "flex", flexWrap: "wrap", gap: 18, marginTop: 24,
        fontSize: 12, color: T.ivoryDim,
        fontFamily: T.sans, fontWeight: 500,
      }}>
        {Object.entries(QUAL_LABELS).map(([k, lbl]) => (
          <span key={k} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 3, height: 12, background: QUAL_COLORS[k] }} />
            {lbl}
          </span>
        ))}
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 3, height: 12, background: T.red }} />
          Liverpool
        </span>
      </div>
    </section>
  );
}

// ─── DISPATCHES VIEW ───────────────────────────────────────────────────────

function DispatchesView() {
  return (
    <section style={{ animation: `pageTurn .55s ${T.ease} both`, padding: "72px 0", borderBottom: `1px solid ${T.rule}` }}>
      <SectionHead title="Dispatches" meta={<>{DISPATCHES.length} op-eds<br />collected this week</>} />
      <div style={{ columnCount: 2, columnGap: 56, columnRule: `1px solid ${T.rule}` }} className="dispatches-cols">
        {DISPATCHES.map((d) => (
          <article key={d.n} style={{
            breakInside: "avoid", marginBottom: 48,
            display: "inline-block", width: "100%",
          }}>
            <div style={{
              fontFamily: T.serif, fontStyle: "italic", fontWeight: 500,
              fontSize: 14, color: T.red, marginBottom: 8, letterSpacing: "0.02em",
            }}>
              № {d.n} — {d.category}
            </div>
            <h3 style={{
              fontFamily: T.serif, fontWeight: 500, fontSize: 30,
              lineHeight: 1.1, letterSpacing: "-0.01em",
              marginBottom: 14, color: T.ivory,
            }}>{d.headline}</h3>
            <div style={{
              fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
              color: T.ivoryFaint, marginBottom: 16, lineHeight: 1.6,
              fontFamily: T.sans, fontWeight: 500,
            }}>
              By <span style={{ color: T.ivory }}>{d.byline}</span> · {d.dateline}
            </div>
            <p
              style={{
                fontSize: 15, lineHeight: 1.7, color: T.ivoryDim, fontWeight: 400,
                fontFamily: T.sans,
              }}
              className="dispatch-body"
            >
              {d.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

// ─── NEWS VIEW (re-skinned wire-service column) ────────────────────────────

function parseRSSItems(xmlText, feedMeta) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xmlText, "text/xml");
  const items = doc.querySelectorAll("item");
  return Array.from(items).map((item) => ({
    title: item.querySelector("title")?.textContent || "",
    link: item.querySelector("link")?.textContent || "",
    pubDate: item.querySelector("pubDate")?.textContent || "",
    source: feedMeta.name,
    category: feedMeta.category,
    color: feedMeta.color,
  }));
}

const CATEGORY_LABEL = {
  transfers: "Transfers",
  injuries: "Injuries",
  matches: "Matches",
  tactics: "Tactics",
  general: "General",
};

function NewsDigestLede() {
  if (!NEWS_DIGEST) return null;
  const ago = (() => {
    const diff = Date.now() - new Date(NEWS_DIGEST.generatedAt).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    return `${Math.floor(hrs / 24)}d ago`;
  })();
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        gap: 16, paddingBottom: 12, marginBottom: 18,
        borderBottom: `1px solid ${T.ruleStrong}`,
      }}>
        <h3 style={{
          fontFamily: T.serif, fontStyle: "italic", fontWeight: 500,
          fontSize: 28, color: T.ivory, lineHeight: 1.1,
        }}>The lede<span style={{ color: T.red }}>.</span></h3>
        <SmallCaps>Generated {ago} · Perplexity</SmallCaps>
      </div>

      {/* Italic deck paragraph in Playfair */}
      <p className="digest-deck" style={{
        fontFamily: T.serif, fontStyle: "italic", fontWeight: 400,
        fontSize: 22, lineHeight: 1.5, color: T.ivory,
        maxWidth: "62ch", marginBottom: 32,
      }}>
        {NEWS_DIGEST.summary}
      </p>

      {/* Categorised topics — each w/ red small-caps category kicker */}
      <div className="digest-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 0 }}>
        {NEWS_DIGEST.keyTopics.map((topic, i) => (
          <div key={i} style={{
            padding: "18px 20px 18px 0",
            borderTop: `1px solid ${T.rule}`,
          }}>
            <div style={{
              fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
              color: T.red, marginBottom: 8, fontFamily: T.sans, fontWeight: 600,
            }}>
              {CATEGORY_LABEL[topic.category] || topic.category}
            </div>
            <div style={{
              fontFamily: T.serif, fontWeight: 500, fontSize: 17,
              lineHeight: 1.25, color: T.ivory, marginBottom: 8,
              letterSpacing: "-0.01em",
            }}>
              {topic.title}
            </div>
            <div style={{
              fontFamily: T.sans, fontSize: 13, lineHeight: 1.6, color: T.ivoryDim,
            }}>
              {topic.detail}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 18, paddingTop: 12,
        borderTop: `1px solid ${T.rule}`,
        fontSize: 11, color: T.ivoryFaint,
        fontFamily: T.serif, fontStyle: "italic",
      }}>
        Sources · {NEWS_DIGEST.sources.join(" · ")}
      </div>
    </div>
  );
}

function LiveNewsColumn({ filter }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    const isDev = window.location.hostname === "localhost";
    Promise.allSettled(
      RSS_FEEDS.map((feed) => {
        if (isDev) {
          return fetch("/api/rss?url=" + encodeURIComponent(feed.url))
            .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
            .then((xml) => parseRSSItems(xml, feed));
        }
        return fetch("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(feed.url))
          .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
          .then((data) => (data.items || []).map((item) => ({
            title: item.title || "",
            link: item.link || "",
            pubDate: item.pubDate || "",
            source: feed.name,
            category: feed.category,
            color: feed.color,
          })));
      })
    ).then((results) => {
      if (cancelled) return;
      const all = results
        .filter((r) => r.status === "fulfilled")
        .flatMap((r) => r.value)
        .filter((a) => a.title && a.pubDate)
        .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
      if (all.length === 0) setError("Could not load any feeds.");
      setArticles(all);
      setLoading(false);
    });
    return () => { cancelled = true; };
  }, []);

  const filtered = filter === "all" ? articles : articles.filter(a => a.source === filter);

  if (loading) {
    return (
      <div style={{
        padding: "40px 0", textAlign: "center",
        color: T.ivoryFaint, fontFamily: T.serif, fontStyle: "italic",
      }}>
        — loading the wire feed
      </div>
    );
  }
  if (error && articles.length === 0) {
    return (
      <div style={{
        padding: "40px 0", textAlign: "center",
        color: T.red, fontFamily: T.serif, fontStyle: "italic",
      }}>
        {error}
      </div>
    );
  }

  return (
    <div style={{
      borderTop: `1px solid ${T.ruleStrong}`,
    }}>
      {filtered.slice(0, 30).map((item, i) => (
        <a
          key={i}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="wire-row"
          style={{
            display: "grid",
            gridTemplateColumns: "140px 1fr 80px",
            gap: 24, padding: "20px 0",
            borderBottom: `1px solid ${T.rule}`,
            textDecoration: "none", color: T.ivory,
            transition: `background .35s ${T.ease}`,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#F4EBD006"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
        >
          <div>
            <SmallCaps color={T.ivory}>{item.source}</SmallCaps>
            <div style={{
              fontFamily: T.serif, fontStyle: "italic",
              fontSize: 12, color: T.ivoryFaint, marginTop: 4,
            }}>
              {timeAgo(item.pubDate)}
            </div>
          </div>
          <div style={{
            fontFamily: T.serif, fontWeight: 500, fontSize: 19,
            lineHeight: 1.3, color: T.ivory, letterSpacing: "-0.005em",
          }}>
            {item.title}
          </div>
          <div style={{
            fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.ivoryFaint, fontFamily: T.sans, fontWeight: 500,
            textAlign: "right", paddingTop: 4,
          }}>
            {item.category}
          </div>
        </a>
      ))}
      {filtered.length === 0 && (
        <div style={{
          padding: 40, textAlign: "center",
          color: T.ivoryFaint, fontFamily: T.serif, fontStyle: "italic",
        }}>
          No items on the wire under that filter.
        </div>
      )}
    </div>
  );
}

function NewsView() {
  const [tab, setTab] = useState("wire"); // "wire" | "oped"
  const [feedFilter, setFeedFilter] = useState("all");

  return (
    <section style={{ animation: `pageTurn .55s ${T.ease} both`, padding: "72px 0", borderBottom: `1px solid ${T.rule}` }}>
      <SectionHead title="News" meta={<>Live wire & op-eds<br />updated continuously</>} />

      {/* Tab bar — Wire / Op-eds */}
      <div style={{
        display: "flex", borderBottom: `1px solid ${T.rule}`, marginBottom: 32,
      }}>
        {[
          { key: "wire", label: "Wire feed" },
          { key: "oped", label: "Op-eds" },
        ].map((t, i, arr) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "12px 20px",
                color: active ? T.ivory : T.ivoryDim,
                fontFamily: T.sans, fontSize: 11, fontWeight: 500,
                letterSpacing: "0.22em", textTransform: "uppercase",
                position: "relative", transition: `color .5s ${T.ease}`,
                borderRight: i < arr.length - 1 ? `1px solid ${T.rule}` : "none",
              }}
            >
              {t.label}
              {active && (
                <span style={{
                  position: "absolute", left: 20, right: 20, bottom: -1,
                  height: 1, background: T.red,
                }} />
              )}
            </button>
          );
        })}
      </div>

      {tab === "wire" && (
        <>
          <NewsDigestLede />

          {/* Source filter — text links */}
          <div style={{ marginBottom: 24 }}>
            <SmallCaps style={{ display: "block", marginBottom: 10 }}>Filter by source</SmallCaps>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
              {[{ name: "all", color: T.red }, ...RSS_FEEDS].map((f, i, arr) => {
                const key = f.name === "all" ? "all" : f.name;
                const label = f.name === "all" ? "All wires" : f.name;
                const active = feedFilter === key;
                return (
                  <span key={key} style={{ display: "inline-flex", alignItems: "center" }}>
                    <button
                      onClick={() => setFeedFilter(key)}
                      style={{
                        background: "none", border: "none", cursor: "pointer",
                        padding: "4px 6px",
                        color: active ? T.ivory : T.ivoryDim,
                        fontFamily: T.serif,
                        fontStyle: active ? "italic" : "normal",
                        fontWeight: active ? 500 : 400,
                        fontSize: 15,
                        borderBottom: active ? `1px solid ${T.red}` : "1px solid transparent",
                      }}
                    >
                      {label}
                    </button>
                    {i < arr.length - 1 && (
                      <span style={{ color: T.ivoryFaint, padding: "0 6px" }}>·</span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          <LiveNewsColumn filter={feedFilter} />
        </>
      )}

      {tab === "oped" && <DispatchesView />}
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="footer-bar" style={{
      borderTop: `1px solid ${T.ruleStrong}`, padding: "48px 0", marginTop: 32,
      display: "flex", justifyContent: "space-between", alignItems: "flex-end",
      gap: 24, flexWrap: "wrap",
    }}>
      <div className="footer-quote" style={{
        fontFamily: T.serif, fontStyle: "italic", fontWeight: 400,
        fontSize: 32, lineHeight: 1.2, color: T.ivory, maxWidth: "30ch",
        letterSpacing: "-0.01em",
      }}>
        "Every reason to believe."
      </div>
      <div style={{
        fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
        color: T.ivoryFaint, textAlign: "right", lineHeight: 1.8,
        fontFamily: T.sans, fontWeight: 500,
        display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12,
      }}>
        <TeamCrest team="Liverpool" size={36} style={{ opacity: 0.85 }} />
        <div>
          The Anfield Edition · Vol. XXXIV<br />
          Matchday Programme · {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}<br />
          Set in Playfair Display &amp; Inter
        </div>
      </div>
    </footer>
  );
}

// ─── Main App ──────────────────────────────────────────────────────────────

export default function LiverpoolTracker() {
  const [view, setView] = useState("cover");
  const wrapRef = useRef(null);

  function handleNav(next) {
    if (next === view) return;
    setView(next);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  return (
    <div ref={wrapRef} style={{
      minHeight: "100vh", background: T.ink, color: T.ivory,
      fontFamily: T.sans, fontWeight: 400,
    }}>
      {/* Inline responsive shims — collapse two-col on narrow screens */}
      <style>{`
        @media (max-width: 1024px) {
          .matchday-grid { grid-template-columns: 1fr !important; }
          .roster-grid { grid-template-columns: 1fr !important; }
          .roster-grid > div:nth-child(2) { display: none !important; }
          .dispatches-cols { column-count: 1 !important; }
        }
        @media (max-width: 720px) {
          .anfield-page { padding: 0 18px !important; }

          /* Masthead — stack brand / nav / date, hide subtitle date on smallest screens */
          .masthead-bar { flex-wrap: wrap !important; gap: 12px 14px !important; justify-content: flex-start !important; }
          .masthead-bar > nav { order: 3; width: 100%; justify-content: flex-start !important; gap: 0 !important; flex-wrap: wrap !important; }
          .masthead-bar > nav button { padding: 6px 10px !important; font-size: 10px !important; letter-spacing: 0.16em !important; }
          .masthead-date { display: none !important; }

          /* Section padding — pull 72px down to 40px */
          .anfield-page section { padding: 40px 0 !important; }

          /* Chapter / SectionHead title */
          .chapter-h2 { font-size: 36px !important; }

          /* Cover hero */
          .cover-hero { font-size: 64px !important; line-height: 0.95 !important; margin-bottom: 20px !important; letter-spacing: -0.03em !important; }
          .cover-deck { font-size: 18px !important; margin-bottom: 32px !important; }
          .cover-section-pad { padding: 48px 0 36px !important; }

          /* Cover "in this issue" 2-col → stack */
          .cover-issue-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .cover-issue-grid > div:nth-child(2) { display: none !important; }
          .cover-letter-lead { font-size: 18px !important; }
          .cover-letter-body { font-size: 16px !important; }

          /* Stat strip — wrap to 2 cols on mobile */
          .stat-strip-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-strip-grid > div { border-right: none !important; border-bottom: 1px solid ${T.rule}; padding: 12px 0 !important; }
          .stat-strip-grid > div:nth-child(odd) { border-right: 1px solid ${T.rule} !important; padding-right: 14px !important; }
          .stat-strip-grid > div:nth-last-child(-n+2) { border-bottom: none !important; }
          .stat-strip-grid > div > div:first-child { font-size: 24px !important; }

          /* Matchday fixture title */
          .matchday-fixture { font-size: 32px !important; gap: 10px !important; }
          .matchday-fixture > em { font-size: 20px !important; }
          .matchday-fixture img { width: 28px !important; height: 28px !important; }

          /* Countdown */
          .countdown-grid { gap: 8px !important; }
          .countdown-grid > div > div:first-child { font-size: 36px !important; }

          /* Form block */
          .form-block { padding: 22px !important; }
          .form-block > div:first-child { font-size: 22px !important; }

          /* Results ledger — horizontal scroll */
          .ledger-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 0 -18px; padding: 0 18px; }
          .ledger-grid { min-width: 640px; }

          /* Standings table — horizontal scroll */
          .standings-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 0 -18px; padding: 0 18px; }
          .standings-wrap table { min-width: 580px; }
          .standings-wrap th, .standings-wrap td { padding: 12px 8px !important; }

          /* Squad position bar — tighter, allow wrap */
          .squad-pos-bar button { padding: 10px 6px !important; font-size: 9px !important; letter-spacing: 0.16em !important; }
          .squad-pos-bar button > span:first-child { font-size: 15px !important; margin-bottom: 2px !important; }

          /* Squad filter row */
          .squad-filter-row { gap: 18px !important; }

          /* Player card — keep portrait but tighter */
          .player-card { grid-template-columns: 72px 1fr !important; gap: 14px !important; padding: 18px 0 !important; }
          .player-card .player-portrait { width: 72px !important; height: 92px !important; }
          .player-card .player-name { font-size: 18px !important; }

          /* News wire row — stack into vertical card */
          .wire-row { grid-template-columns: 1fr !important; gap: 8px !important; padding: 16px 0 !important; }
          .wire-row > div:nth-child(3) { text-align: left !important; padding-top: 0 !important; }
          .wire-row > div:nth-child(2) { font-size: 17px !important; }

          /* News digest topics */
          .digest-grid { grid-template-columns: 1fr !important; }
          .digest-deck { font-size: 18px !important; }

          /* Dispatches headlines */
          .dispatches-cols h3 { font-size: 24px !important; }

          /* Footer */
          .footer-bar { padding: 32px 0 !important; }
          .footer-quote { font-size: 22px !important; }
        }

        @media (max-width: 480px) {
          .anfield-page { padding: 0 14px !important; }
          .cover-hero { font-size: 52px !important; }
          .chapter-h2 { font-size: 30px !important; }
          .matchday-fixture { font-size: 26px !important; }
          .matchday-fixture > em { font-size: 16px !important; }
          .stat-strip-grid > div > div:first-child { font-size: 20px !important; }
          .countdown-grid > div > div:first-child { font-size: 30px !important; }
        }

        .dispatch-body::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 600; font-size: 64px; line-height: 0.85; float: left;
          padding: 8px 10px 0 0; color: ${T.red};
        }
      `}</style>

      <Masthead view={view} onChange={handleNav} />

      <main className="anfield-page" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}>
        {view === "cover"      && <CoverView onJump={handleNav} />}
        {view === "matchday"   && <MatchdayView />}
        {view === "squad"      && <SquadView />}
        {view === "lineup"     && (
          <section style={{ animation: `pageTurn .55s ${T.ease} both`, padding: "72px 0", borderBottom: `1px solid ${T.rule}` }}>
            <SectionHead
              title="Lineup"
              meta={<>Predicted XI<br />Manchester United · 3 May</>}
            />
            <LineupView players={PLAYERS} nextMatch={NEXT_MATCH} />
          </section>
        )}
        {view === "standings"  && <StandingsView />}
        {view === "dispatches" && <DispatchesView />}
        {view === "news"       && <NewsView />}

        <Footer />
        <BrandCredit />
      </main>
    </div>
  );
}
