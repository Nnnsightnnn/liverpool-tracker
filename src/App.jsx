import { useState, useMemo, useEffect } from "react";
import _ from "lodash";
import { PLAYERS, RSS_FEEDS, RESULTS, NEXT_MATCH, TEAM_LOGOS, NEWS_DIGEST } from "./playerData.js";

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
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
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

// ─── Physical Profile ────────────────────────────────────────────────────────

function PhysicalProfile({ physical }) {
  const totalInches = Math.round(physical.height / 2.54);
  const ft = Math.floor(totalInches / 12);
  const inches = totalInches % 12;
  const lbs = Math.round(physical.weight * 2.205);
  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 14 }}>
        <div style={{
          flex: 1, background: "#252548", borderRadius: 10, padding: "12px 16px", textAlign: "center",
        }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 22 }}>{ft}<span style={{ fontSize: 12, color: "#888", fontWeight: 400 }}>'</span>{inches}<span style={{ fontSize: 12, color: "#888", fontWeight: 400 }}>"</span></div>
          <div style={{ color: "#777", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>Height</div>
        </div>
        <div style={{
          flex: 1, background: "#252548", borderRadius: 10, padding: "12px 16px", textAlign: "center",
        }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 22 }}>{lbs}<span style={{ fontSize: 12, color: "#888", fontWeight: 400 }}> lbs</span></div>
          <div style={{ color: "#777", fontSize: 10, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>Weight</div>
        </div>
      </div>
      <StatBar label="Pace" value={physical.pace} max={99} />
      <StatBar label="Acceleration" value={physical.acceleration} max={99} />
      <StatBar label="Sprint Speed" value={physical.sprintSpeed} max={99} />
    </div>
  );
}

// ─── Career Timeline ─────────────────────────────────────────────────────────

function CareerTimeline({ career }) {
  const reversed = [...career].reverse();
  return (
    <div style={{ position: "relative", paddingLeft: 20 }}>
      <div style={{ position: "absolute", left: 7, top: 4, bottom: 4, width: 2, background: "#333" }} />
      {reversed.map((entry, i) => {
        const isCurrent = entry.years.endsWith("-");
        const isYouth = entry.type === "youth";
        return (
          <div key={i} style={{ position: "relative", marginBottom: i < reversed.length - 1 ? 16 : 0 }}>
            <div style={{
              position: "absolute", left: -17, top: 4,
              width: 12, height: 12, borderRadius: "50%",
              background: isCurrent ? LFC_RED : isYouth ? "transparent" : "#555",
              border: isYouth ? "2px solid #555" : isCurrent ? `2px solid ${LFC_RED}` : "2px solid #555",
              boxShadow: isCurrent ? `0 0 8px ${LFC_RED}66` : "none",
            }} />
            <div style={{ opacity: isYouth ? 0.6 : 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{
                  color: isCurrent ? LFC_RED : "#fff", fontWeight: 700, fontSize: 13,
                }}>{entry.club}</span>
                {entry.fee ? (
                  <span style={{
                    fontSize: 10, padding: "2px 8px", borderRadius: 8, fontWeight: 600,
                    background: "#ffffff12", color: "#aaa", border: "1px solid #ffffff15",
                  }}>{entry.fee}</span>
                ) : (
                  <span style={{
                    fontSize: 10, padding: "2px 8px", borderRadius: 8, fontWeight: 600,
                    background: isYouth ? "#ffc10712" : "#ffffff08",
                    color: isYouth ? "#ffc107" : "#666",
                    border: isYouth ? "1px solid #ffc10722" : "1px solid #ffffff08",
                  }}>{isYouth ? "Youth" : "Academy"}</span>
                )}
              </div>
              <div style={{ fontSize: 11, color: "#666", marginTop: 2 }}>{entry.years}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Player Card ────────────────────────────────────────────────────────────

function PlayerCard({ player, expanded, onToggle }) {
  const [activeTab, setActiveTab] = useState("stats");
  useEffect(() => { if (!expanded) setActiveTab("stats"); }, [expanded]);

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

      {/* Quick Stats — compact grid */}
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

      {/* Expanded Tabs */}
      {expanded && (
        <div style={{ padding: "4px 18px 18px", borderTop: "1px solid #ffffff08" }}>
          {/* Tab Bar */}
          <div style={{ display: "flex", gap: 4, marginBottom: 14, background: "#ffffff08", borderRadius: 8, padding: 3 }}>
            {[
              { key: "stats", label: "Stats" },
              { key: "physical", label: "Physical" },
              { key: "career", label: "Career" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={(e) => { e.stopPropagation(); setActiveTab(t.key); }}
                style={{
                  flex: 1, padding: "7px 0", borderRadius: 6, border: "none", cursor: "pointer",
                  fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: 1,
                  background: activeTab === t.key ? LFC_RED : "transparent",
                  color: activeTab === t.key ? "#fff" : "#888",
                  transition: "all 0.2s",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Stats Tab */}
          {activeTab === "stats" && (
            <div>
              <div style={{ fontSize: 11, color: LFC_GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>
                Advanced Stats
              </div>
              <StatBar label="Expected Goals (xG)" value={player.xG} max={12} />
              <StatBar label="Pass Completion" value={player.passCompletion} max={100} unit="%" />
              <StatBar label="Tackles per 90" value={player.tacklesPer90} max={4} />
              <StatBar label="Progressive Carries per 90" value={player.progressiveCarries} max={8} />
            </div>
          )}

          {/* Physical Tab */}
          {activeTab === "physical" && player.physical && (
            <PhysicalProfile physical={player.physical} />
          )}

          {/* Career Tab */}
          {activeTab === "career" && player.career && (
            <CareerTimeline career={player.career} />
          )}
        </div>
      )}
    </div>
  );
}

// ─── AI News Digest ──────────────────────────────────────────────────────────

const CATEGORY_COLORS = {
  transfers: LFC_RED,
  injuries: "#fd7e14",
  matches: "#3498db",
  tactics: "#2ecc71",
  general: "#888",
};

function NewsDigestSection() {
  if (!NEWS_DIGEST) return null;

  const timeAgoStr = (() => {
    const diff = Date.now() - new Date(NEWS_DIGEST.generatedAt).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.floor(hrs / 24);
    return `${days}d ago`;
  })();

  return (
    <div style={{
      background: "linear-gradient(135deg, #1e1e3a, #1a1530)",
      borderRadius: 14,
      padding: 20,
      marginBottom: 16,
      border: `1px solid ${LFC_RED}33`,
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <span style={{
          fontSize: 12, color: LFC_GOLD, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: 1.5,
        }}>
          AI News Digest
        </span>
        <span style={{
          fontSize: 9, color: "#777", background: "#252548",
          padding: "3px 8px", borderRadius: 6, fontWeight: 600,
        }}>
          Powered by Perplexity
        </span>
        <span style={{ fontSize: 10, color: "#555", marginLeft: "auto" }}>
          Updated {timeAgoStr}
        </span>
      </div>

      {/* Summary */}
      <p style={{
        fontSize: 14, color: "#ccc", lineHeight: 1.7,
        margin: "0 0 16px 0",
      }}>
        {NEWS_DIGEST.summary}
      </p>

      {/* Key Topics Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: 10,
      }}>
        {NEWS_DIGEST.keyTopics.map((topic, i) => (
          <div
            key={i}
            style={{
              background: "#252548",
              borderRadius: 10,
              padding: 14,
              borderLeft: `3px solid ${CATEGORY_COLORS[topic.category] || "#888"}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 13, flex: 1 }}>
                {topic.title}
              </span>
              <span style={{
                fontSize: 9, fontWeight: 700, textTransform: "uppercase",
                color: CATEGORY_COLORS[topic.category] || "#888",
                background: `${CATEGORY_COLORS[topic.category] || "#888"}22`,
                padding: "2px 7px", borderRadius: 4, letterSpacing: 0.5,
              }}>
                {topic.category}
              </span>
            </div>
            <div style={{ color: "#aaa", fontSize: 12, lineHeight: 1.5 }}>
              {topic.detail}
            </div>
          </div>
        ))}
      </div>

      {/* Sources footer */}
      <div style={{ marginTop: 12, fontSize: 10, color: "#555" }}>
        Sources: {NEWS_DIGEST.sources.join(" · ")}
      </div>
    </div>
  );
}

// ─── Live RSS News Feed ──────────────────────────────────────────────────────

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

function LiveNewsFeed({ filter }) {
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
      if (all.length === 0) {
        setError("Could not load any feeds. CORS proxy may be unavailable.");
      }
      setArticles(all);
      setLoading(false);
    });

    return () => { cancelled = true; };
  }, []);

  const filtered = filter === "all" ? articles : articles.filter((a) => a.source === filter);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: 40, color: "#888" }}>
        Loading live news feeds...
      </div>
    );
  }

  if (error && articles.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: 40, color: "#ff6b6b" }}>
        {error}
      </div>
    );
  }

  const isWide = (i, title) => i === 0 || title.length > 70 || i % 5 === 0;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 10,
    }}>
      {filtered.slice(0, 30).map((item, i) => {
        const wide = isWide(i, item.title);
        return (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              gridColumn: wide ? "span 2" : "span 1",
              padding: wide ? "16px 20px" : "14px 16px",
              borderRadius: 12,
              background: "#1e1e3a",
              borderTop: `3px solid ${item.color || LFC_RED}`,
              transition: "all 0.2s",
              cursor: "pointer",
              textDecoration: "none",
              boxShadow: "0 2px 8px #0003",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#252548";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px #0005";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1e1e3a";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px #0003";
            }}
          >
            <div style={{
              color: "#fff",
              fontSize: wide ? 15 : 13,
              fontWeight: 600,
              lineHeight: 1.4,
            }}>
              {item.title}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 8, alignItems: "center" }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: item.color || LFC_RED, flexShrink: 0,
              }} />
              <span style={{ fontSize: 10, color: item.color || LFC_RED, fontWeight: 600 }}>{item.source}</span>
              <span style={{ fontSize: 10, color: "#555" }}>{timeAgo(item.pubDate)}</span>
            </div>
          </a>
        );
      })}
      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: 40, color: "#666", gridColumn: "1 / -1" }}>
          No articles found for this filter.
        </div>
      )}
    </div>
  );
}

// ─── Result Card (bento grid) ───────────────────────────────────────────────

function ResultCard({ result }) {
  const compColors = { PL: "#3d195b", UCL: "#091442", FA: "#6c0d31" };
  const resultColor = result.result === "W" ? "#28a745" : result.result === "D" ? "#ffc107" : "#dc3545";
  const formatDate = (dateStr) => {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };

  return (
    <div style={{
      background: "#1e1e3a", borderRadius: 14, padding: "14px 16px",
      borderLeft: `4px solid ${resultColor}`, minWidth: 260,
      display: "flex", flexDirection: "column", gap: 8,
      boxShadow: "0 2px 12px #0005",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{
          width: 30, height: 30, borderRadius: 7, background: resultColor,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: result.result === "D" ? "#000" : "#fff", fontWeight: 800, fontSize: 13, flexShrink: 0,
        }}>{result.result}</div>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <span style={{
            fontSize: 9, fontWeight: 700, textTransform: "uppercase", color: "#fff",
            background: (compColors[result.competition] || "#333") + "cc",
            padding: "2px 8px", borderRadius: 6, letterSpacing: 0.5,
          }}>{result.competition}</span>
          <span style={{ fontSize: 10, color: "#666" }}>{formatDate(result.date)}</span>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" }}>
        {TEAM_LOGOS[result.home ? "Liverpool" : result.opponent] && <img src={TEAM_LOGOS[result.home ? "Liverpool" : result.opponent]} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />}
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{result.home ? "Liverpool" : result.opponent}</span>
        <span style={{ color: resultColor, fontWeight: 800, fontSize: 16 }}>{result.score}</span>
        {TEAM_LOGOS[result.home ? result.opponent : "Liverpool"] && <img src={TEAM_LOGOS[result.home ? result.opponent : "Liverpool"]} alt="" style={{ width: 22, height: 22, objectFit: "contain" }} />}
        <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{result.home ? result.opponent : "Liverpool"}</span>
      </div>
      {result.scorers && (
        <div style={{ fontSize: 10, color: "#888", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{result.scorers}</div>
      )}
    </div>
  );
}

// ─── Next Match Banner ──────────────────────────────────────────────────────

function NextMatchBanner({ match, results }) {
  const compColors = { PL: "#3d195b", UCL: "#091442", FA: "#6c0d31" };
  const compLabels = { PL: "Premier League", UCL: "Champions League", FA: "FA Cup" };
  const d = new Date(match.date);
  const day = d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
  const time = d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  const now = new Date();
  const diff = d - now;
  let countdown = "";
  if (diff > 0) {
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    countdown = days > 0 ? `${days}d ${hours}h` : `${hours}h`;
  } else { countdown = "NOW"; }

  return (
    <div style={{
      background: `linear-gradient(135deg, ${LFC_RED}dd, #8B0000ee)`,
      borderRadius: 16, padding: 20, marginBottom: 16,
      border: "1px solid #ffffff15", boxShadow: `0 4px 24px ${LFC_RED}33`,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ fontSize: 11, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}>Next Match</div>
        <div style={{
          fontSize: 10, fontWeight: 700, textTransform: "uppercase",
          color: "#fff", background: (compColors[match.competition] || "#333"),
          padding: "3px 10px", borderRadius: 6, letterSpacing: 0.5,
        }}>{compLabels[match.competition] || match.competition}</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginBottom: 14 }}>
        <div style={{ textAlign: "center", flex: 1 }}>
          <div style={{
            width: 60, height: 60, borderRadius: "50%", background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 6px", boxShadow: "0 2px 12px #0003", overflow: "hidden",
          }}>
            <img src={TEAM_LOGOS["Liverpool"]} alt="Liverpool" style={{ width: 44, height: 44, objectFit: "contain" }} />
          </div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>Liverpool</div>
          {match.home && <div style={{ fontSize: 9, color: "#ffffffaa" }}>HOME</div>}
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: LFC_GOLD, fontWeight: 800, fontSize: 22, lineHeight: 1 }}>VS</div>
          <div style={{ marginTop: 6, background: "#00000044", borderRadius: 8, padding: "4px 12px", color: LFC_GOLD, fontWeight: 700, fontSize: 13 }}>{countdown}</div>
        </div>
        <div style={{ textAlign: "center", flex: 1 }}>
          <div style={{
            width: 60, height: 60, borderRadius: "50%", background: "#ffffff15",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 6px", border: "2px solid #ffffff33", overflow: "hidden",
          }}>
            <img src={TEAM_LOGOS[match.shortName] || TEAM_LOGOS[match.opponent]} alt={match.shortName} style={{ width: 44, height: 44, objectFit: "contain" }} onError={(e) => { e.target.style.display = "none"; e.target.parentElement.textContent = match.shortName.slice(0, 3).toUpperCase(); }} />
          </div>
          <div style={{ color: "#fff", fontWeight: 700, fontSize: 14 }}>{match.shortName}</div>
          {!match.home && <div style={{ fontSize: 9, color: "#ffffffaa" }}>AWAY</div>}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", fontSize: 11, color: "#ffffffbb" }}>
        <span>{day}</span>
        <span style={{ color: LFC_GOLD, fontWeight: 700 }}>{time}</span>
        <span>{match.venue}</span>
        {match.broadcast && <span style={{ color: "#ffffffaa" }}>{match.broadcast}</span>}
      </div>
      {results && results.length > 0 && (() => {
        const recent = results.slice(0, 5);
        const formColors = { W: "#28a745", D: "#ffc107", L: "#dc3545" };
        const wins = recent.filter(r => r.result === "W").length;
        const draws = recent.filter(r => r.result === "D").length;
        const losses = recent.filter(r => r.result === "L").length;
        return (
          <div style={{ borderTop: "1px solid #ffffff22", marginTop: 14, paddingTop: 12, display: "flex", alignItems: "center", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <span style={{ fontSize: 10, color: "#ffffffaa", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>Form</span>
            <div style={{ display: "flex", gap: 4 }}>
              {recent.map((r, i) => (
                <div key={i} style={{
                  width: 26, height: 26, borderRadius: 6,
                  background: formColors[r.result], display: "flex",
                  alignItems: "center", justifyContent: "center",
                  color: r.result === "D" ? "#000" : "#fff",
                  fontWeight: 800, fontSize: 11,
                }}>
                  {r.result}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, fontSize: 11, color: "#ffffffbb" }}>
              <span><span style={{ color: "#28a745", fontWeight: 700 }}>{wins}</span>W</span>
              <span><span style={{ color: "#ffc107", fontWeight: 700 }}>{draws}</span>D</span>
              <span><span style={{ color: "#dc3545", fontWeight: 700 }}>{losses}</span>L</span>
            </div>
          </div>
        );
      })()}
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
  const [view, setView] = useState("dashboard"); // "dashboard" | "news"
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all"); // "all" | "fit" | "injured"
  const [compFilter, setCompFilter] = useState("All"); // "All" | "PL" | "UCL" | "FA"

  const filteredResults = useMemo(() => {
    if (compFilter === "All") return RESULTS;
    return RESULTS.filter(r => r.competition === compFilter);
  }, [compFilter]);

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
            {[
              { key: "dashboard", label: "Dashboard" },
              { key: "news", label: "News Feed" },
            ].map((v) => (
              <button
                key={v.key}
                onClick={() => setView(v.key)}
                style={{
                  padding: "8px 20px", borderRadius: 8, border: "none", cursor: "pointer",
                  fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: 1,
                  background: view === v.key ? "#fff" : "transparent",
                  color: view === v.key ? LFC_RED : "#fffc",
                  transition: "all 0.2s",
                }}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "20px 16px 40px" }}>

        {/* ─── DASHBOARD VIEW ─── */}
        {view === "dashboard" && (
          <>
            {/* Score Card — Next Match */}
            <NextMatchBanner match={NEXT_MATCH} results={RESULTS} />

            {/* Merged Stats Row — 10 tiles */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
              gap: 10, marginBottom: 20,
            }}>
              {[
                { label: "Played", value: filteredResults.length, color: "#fff" },
                { label: "Won", value: filteredResults.filter(r => r.result === "W").length, color: "#28a745" },
                { label: "Drawn", value: filteredResults.filter(r => r.result === "D").length, color: "#ffc107" },
                { label: "Lost", value: filteredResults.filter(r => r.result === "L").length, color: "#dc3545" },
                { label: "Goals For", value: filteredResults.reduce((s, r) => { const [h, a] = r.score.split("-").map(Number); return s + (r.home ? h : a); }, 0), color: LFC_GOLD },
                { label: "Goals Against", value: filteredResults.reduce((s, r) => { const [h, a] = r.score.split("-").map(Number); return s + (r.home ? a : h); }, 0), color: "#ff6b6b" },
                { label: "Goals", value: _.sumBy(PLAYERS, "goals"), color: LFC_GOLD },
                { label: "Assists", value: _.sumBy(PLAYERS, "assists"), color: "#3498db" },
                { label: "Avg Form", value: _.meanBy(PLAYERS, "form").toFixed(1), color: "#2ecc71" },
                { label: "Injured", value: PLAYERS.filter(p => p.status !== "fit").length, color: "#dc3545" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#1e1e3a", borderRadius: 12, padding: "12px 10px", textAlign: "center" }}>
                  <div style={{ color: s.color, fontWeight: 800, fontSize: 18 }}>{s.value}</div>
                  <div style={{ color: "#777", fontSize: 9, textTransform: "uppercase", letterSpacing: 1, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Results Strip — horizontal scroll */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: LFC_GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
                {compFilter === "All" ? "Recent Results" : `${compFilter} Results`}
              </div>
              <div style={{
                display: "flex", gap: 10, overflowX: "auto", paddingBottom: 8,
                scrollbarWidth: "thin", scrollbarColor: "#333 transparent",
              }}>
                {filteredResults.map((r, i) => (
                  <div key={i} style={{ flex: "0 0 auto" }}>
                    <ResultCard result={r} />
                  </div>
                ))}
                {filteredResults.length === 0 && (
                  <div style={{ padding: "20px 40px", color: "#666", fontSize: 12 }}>No results for this filter.</div>
                )}
              </div>
            </div>

            {/* Unified Filter Bar */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: 12, background: "#1e1e3a",
              borderRadius: 14, padding: "12px 16px", marginBottom: 16, alignItems: "center",
            }}>
              <input
                type="text"
                placeholder="Search players..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: 200, padding: "8px 12px", borderRadius: 8,
                  background: "#252548", border: "1px solid #333", color: "#fff",
                  fontSize: 12, outline: "none", boxSizing: "border-box",
                }}
              />
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                {["ALL", "GK", "DEF", "MID", "FWD"].map((pos) => (
                  <button
                    key={pos}
                    onClick={() => setPosFilter(pos)}
                    style={{
                      padding: "5px 10px", borderRadius: 6, border: "none", cursor: "pointer",
                      fontWeight: 700, fontSize: 10,
                      background: posFilter === pos ? LFC_RED : "#252548",
                      color: posFilter === pos ? "#fff" : "#999",
                      transition: "all 0.2s",
                    }}
                  >
                    {pos}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                {[
                  { key: "All", label: "All", bg: "#ffffff22" },
                  { key: "PL", label: "PL", bg: "#3d195b" },
                  { key: "UCL", label: "UCL", bg: "#091442" },
                  { key: "FA", label: "FA", bg: "#6c0d31" },
                ].map((tab) => (
                  <button key={tab.key} onClick={() => setCompFilter(tab.key)} style={{
                    padding: "5px 12px", borderRadius: 14, border: "none", cursor: "pointer",
                    fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5,
                    color: compFilter === tab.key ? "#fff" : "#888",
                    background: compFilter === tab.key ? tab.bg : "#252548",
                    transition: "all 0.2s",
                  }}>
                    {tab.label}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
                {[
                  { key: "all", label: "All" },
                  { key: "fit", label: "Fit" },
                  { key: "injured", label: "Out" },
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setStatusFilter(f.key)}
                    style={{
                      padding: "5px 10px", borderRadius: 6, border: "none", cursor: "pointer",
                      fontWeight: 700, fontSize: 10,
                      background: statusFilter === f.key ? (f.key === "injured" ? "#dc3545" : f.key === "fit" ? "#28a745" : "#252548") : "#252548",
                      color: statusFilter === f.key ? "#fff" : "#999",
                      transition: "all 0.2s",
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4, alignItems: "center", marginLeft: "auto" }}>
                <span style={{ fontSize: 9, color: "#666", textTransform: "uppercase", letterSpacing: 1 }}>Sort:</span>
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
                      padding: "5px 10px", borderRadius: 6, border: "none", cursor: "pointer",
                      fontWeight: 700, fontSize: 10,
                      background: sortBy === s.key ? LFC_GOLD : "#252548",
                      color: sortBy === s.key ? "#000" : "#999",
                      transition: "all 0.2s",
                    }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Squad Section Header */}
            <div style={{ fontSize: 11, color: LFC_GOLD, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
              Squad
            </div>

            {/* Player Cards — Bento Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10 }}>
              {filtered.map((player) => (
                <div key={player.id} style={{ gridColumn: expandedId === player.id ? "span 2" : "span 1" }}>
                  <PlayerCard
                    player={player}
                    expanded={expandedId === player.id}
                    onToggle={() => setExpandedId(expandedId === player.id ? null : player.id)}
                  />
                </div>
              ))}
              {filtered.length === 0 && (
                <div style={{ textAlign: "center", padding: 40, color: "#666", gridColumn: "1 / -1" }}>
                  No players found matching your criteria.
                </div>
              )}
            </div>
          </>
        )}

        {/* ─── NEWS VIEW ─── */}
        {view === "news" && (
          <>
            <RSSSourcesPanel />
            <NewsDigestSection />

            {/* News Filter */}
            <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap", alignItems: "center" }}>
              <span style={{ fontSize: 11, color: "#888", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1 }}>Filter:</span>
              {[
                { key: "all", label: "All News", color: LFC_RED },
                ...RSS_FEEDS.map((f) => ({ key: f.name, label: f.name, color: f.color })),
              ].map((f) => (
                <button
                  key={f.key}
                  onClick={() => setNewsFilter(f.key)}
                  style={{
                    padding: "6px 14px", borderRadius: 8, border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: 11,
                    background: newsFilter === f.key ? f.color : "#1e1e3a",
                    color: newsFilter === f.key ? "#fff" : "#999",
                    transition: "all 0.2s",
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <LiveNewsFeed filter={newsFilter} />

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
