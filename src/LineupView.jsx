import { useState, useMemo, useEffect } from "react";
import { FORMATIONS, PLAYER_EVIDENCE, DEFAULT_FORMATION, PREDICTION_NOTE } from "./lineupData.js";

const LFC_RED = "#C8102E";
const LFC_DARK = "#1a1a2e";
const LFC_GOLD = "#F6EB61";
const POS_COLORS = { GK: "#f1c40f", DEF: "#3498db", MID: "#2ecc71", FWD: "#e74c3c" };

// ─── Tiny self-contained avatar (avoids circular import with App.jsx) ────────
function Avatar({ player, size, ring = LFC_RED, showStatus = false }) {
  const [imgFailed, setImgFailed] = useState(false);
  const initials = player.name.split(" ").map(w => w[0]).join("").slice(0, 2);
  const accent = POS_COLORS[player.position] || "#888";
  const statusColor = player.status === "injured" ? "#dc3545"
    : player.status === "recovering" ? "#fd7e14"
    : player.status === "doubtful" ? "#ffc107"
    : null;
  const statusIcon = player.status === "injured" ? "+"
    : player.status === "recovering" ? "~"
    : player.status === "doubtful" ? "?" : null;
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <div style={{
        width: size, height: size, borderRadius: "50%", overflow: "hidden",
        border: `${Math.max(2, size * 0.05)}px solid ${ring}`,
        background: "#2a2a4a", display: "flex", alignItems: "center", justifyContent: "center",
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
            <span style={{ color: "#ffffffaa", fontWeight: 700, fontSize: size * 0.16 }}>#{player.number}</span>
          </div>
        )}
      </div>
      {showStatus && statusIcon && (
        <div style={{
          position: "absolute", bottom: -1, right: -1,
          width: size * 0.36, height: size * 0.36, borderRadius: "50%",
          background: statusColor, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: size * 0.22, fontWeight: 900, color: "#fff",
          border: "2px solid #1e1e3a", lineHeight: 1,
        }}>
          {statusIcon}
        </div>
      )}
    </div>
  );
}

// ─── Pitch markings (SVG) ───────────────────────────────────────────────────
// viewBox 100x150, attack up. Lines at low opacity, soft white.
function PitchLines() {
  const stroke = "rgba(255,255,255,0.22)";
  const sw = 0.35;
  return (
    <svg
      viewBox="0 0 100 150"
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <g fill="none" stroke={stroke} strokeWidth={sw}>
        {/* Outer touchlines */}
        <rect x="1" y="1" width="98" height="148" />
        {/* Halfway line */}
        <line x1="1" y1="75" x2="99" y2="75" />
        {/* Center circle + spot */}
        <circle cx="50" cy="75" r="9.5" />
        <circle cx="50" cy="75" r="0.7" fill={stroke} />
        {/* Top penalty area (attacking goal) */}
        <rect x="22" y="1" width="56" height="20" />
        <rect x="37" y="1" width="26" height="8" />
        <circle cx="50" cy="13" r="0.7" fill={stroke} />
        {/* Top penalty arc (D) */}
        <path d="M 41 21 A 9.5 9.5 0 0 0 59 21" />
        {/* Bottom penalty area */}
        <rect x="22" y="129" width="56" height="20" />
        <rect x="37" y="141" width="26" height="8" />
        <circle cx="50" cy="137" r="0.7" fill={stroke} />
        <path d="M 41 129 A 9.5 9.5 0 0 1 59 129" />
        {/* Corner arcs */}
        <path d="M 1 3 A 2 2 0 0 0 3 1" />
        <path d="M 97 1 A 2 2 0 0 0 99 3" />
        <path d="M 1 147 A 2 2 0 0 1 3 149" />
        <path d="M 97 149 A 2 2 0 0 1 99 147" />
      </g>
    </svg>
  );
}

// ─── Player token on the pitch ──────────────────────────────────────────────
function PitchPlayerToken({ slotKey, slot, player, onClick, isSwapMode, isCandidateMatch, isHovered, onHover }) {
  const lastName = player.name.split(" ").slice(-1)[0];
  const halo = isHovered
    ? `0 0 0 3px ${LFC_RED}, 0 0 36px 8px ${LFC_RED}cc, 0 0 80px 16px ${LFC_RED}66, 0 18px 48px ${LFC_RED}44`
    : `0 0 0 2px ${LFC_RED}cc, 0 0 22px 4px ${LFC_RED}88, 0 0 50px 8px ${LFC_RED}33, 0 12px 32px #0008`;
  const swapPulse = isSwapMode
    ? { animation: "lineupPulse 1.4s ease-in-out infinite", outline: `2px dashed ${LFC_GOLD}`, outlineOffset: 4 }
    : {};
  return (
    <div
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={{
        position: "absolute",
        left: `${slot.x}%`,
        top: `${slot.y}%`,
        transform: `translate(-50%, -50%) ${isHovered ? "scale(1.06)" : "scale(1)"}`,
        transition: "left 0.45s cubic-bezier(0.4, 0, 0.2, 1), top 0.45s cubic-bezier(0.4, 0, 0.2, 1), transform 0.18s ease",
        cursor: "pointer",
        zIndex: isHovered ? 30 : 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      {/* Halo + avatar wrapped together so the glow tracks the avatar */}
      <div style={{ borderRadius: "50%", boxShadow: halo, transition: "box-shadow 0.25s ease", ...swapPulse }}>
        <Avatar player={player} size={54} ring="#fff" />
      </div>

      {/* Name pill */}
      <div style={{
        background: "rgba(10, 10, 30, 0.88)",
        border: `1px solid ${LFC_RED}55`,
        borderRadius: 8,
        padding: "3px 8px",
        fontSize: 11,
        fontWeight: 700,
        color: "#fff",
        whiteSpace: "nowrap",
        display: "flex",
        alignItems: "center",
        gap: 5,
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        boxShadow: "0 4px 14px #0009",
      }}>
        <span style={{ color: LFC_GOLD }}>#{player.number}</span>
        <span>{lastName}</span>
      </div>

      {/* Evidence chip — appears on hover */}
      <div style={{
        background: "linear-gradient(135deg, #1e1e3a, #2a1525)",
        border: `1px solid ${LFC_GOLD}55`,
        borderRadius: 8,
        padding: "5px 10px",
        fontSize: 10,
        fontWeight: 600,
        color: LFC_GOLD,
        whiteSpace: "nowrap",
        opacity: isHovered ? 1 : 0,
        transform: isHovered ? "translateY(0)" : "translateY(-4px)",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        pointerEvents: "none",
        boxShadow: "0 6px 16px #000a",
        marginTop: 2,
      }}>
        {PLAYER_EVIDENCE[player.id] || "Recent starter"}
      </div>
    </div>
  );
}

// ─── Pitch container ────────────────────────────────────────────────────────
function PitchDiagram({ formation, lineup, playersById, onSlotClick, isSwapMode, candidateId }) {
  const [hoveredSlot, setHoveredSlot] = useState(null);
  return (
    <div style={{
      position: "relative",
      width: "100%",
      aspectRatio: "2 / 3",
      borderRadius: 18,
      overflow: "hidden",
      // Layered turf: vertical depth gradient + horizontal mowed stripes
      background: `
        repeating-linear-gradient(
          0deg,
          rgba(255,255,255,0.03) 0px,
          rgba(255,255,255,0.03) 6%,
          rgba(0,0,0,0.06) 6%,
          rgba(0,0,0,0.06) 12%
        ),
        linear-gradient(180deg, #1f4720 0%, #143015 50%, #0a1f0c 100%)
      `,
      border: `1px solid ${LFC_RED}33`,
      boxShadow: `0 16px 48px #000a, inset 0 0 80px #0008, inset 0 0 120px ${LFC_RED}11`,
    }}>
      {/* Anfield glow at attacking goal */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `radial-gradient(ellipse 60% 14% at 50% 0%, ${LFC_RED}33, transparent 70%),
                     radial-gradient(ellipse 60% 14% at 50% 100%, ${LFC_RED}1a, transparent 70%)`,
      }} />

      <PitchLines />

      {/* Player tokens */}
      {Object.entries(formation.slots).map(([slotKey, slot]) => {
        const playerId = lineup[slotKey];
        const player = playersById[playerId];
        if (!player) return null;
        return (
          <PitchPlayerToken
            key={slotKey}
            slotKey={slotKey}
            slot={slot}
            player={player}
            onClick={() => onSlotClick(slotKey)}
            isSwapMode={isSwapMode && candidateId !== player.id}
            isCandidateMatch={candidateId === player.id}
            isHovered={hoveredSlot === slotKey}
            onHover={(h) => setHoveredSlot(h ? slotKey : null)}
          />
        );
      })}
    </div>
  );
}

// ─── Squad rail row ─────────────────────────────────────────────────────────
function RailRow({ player, onPitch, isCandidate, onClick }) {
  const [hover, setHover] = useState(false);
  const formColor = player.form >= 8.0 ? "#28a745"
    : player.form >= 7.5 ? "#5cb85c"
    : player.form >= 7.0 ? "#ffc107"
    : player.form >= 6.5 ? "#fd7e14"
    : player.form > 0 ? "#dc3545"
    : "#555";
  const disabled = onPitch;
  return (
    <div
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "8px 10px", borderRadius: 10,
        background: isCandidate ? `${LFC_RED}22` : (hover && !disabled) ? "#252548" : "transparent",
        border: isCandidate ? `1.5px solid ${LFC_RED}` : "1.5px solid transparent",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.45 : 1,
        transition: "all 0.18s ease",
      }}
    >
      <Avatar player={player} size={32} ring={onPitch ? "#555" : LFC_RED} showStatus={true} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ color: LFC_RED, fontWeight: 800, fontSize: 10 }}>#{player.number}</span>
          <span style={{
            color: "#fff", fontWeight: 700, fontSize: 12,
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>{player.name}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 2 }}>
          {player.form > 0 && (
            <span style={{
              fontSize: 9, fontWeight: 800, color: formColor,
              background: `${formColor}22`, padding: "1px 5px", borderRadius: 4,
            }}>
              {player.form.toFixed(1)}
            </span>
          )}
          {player.status !== "fit" && (
            <span style={{
              fontSize: 8, fontWeight: 700, letterSpacing: 0.8,
              color: player.status === "injured" ? "#ff6b6b"
                : player.status === "recovering" ? "#ffa94d"
                : "#ffe066",
              textTransform: "uppercase",
            }}>
              {player.status}
            </span>
          )}
        </div>
      </div>
      {onPitch && (
        <span style={{
          fontSize: 8, fontWeight: 800, color: LFC_GOLD, letterSpacing: 1,
          background: `${LFC_GOLD}15`, border: `1px solid ${LFC_GOLD}40`,
          padding: "3px 6px", borderRadius: 5,
        }}>
          ON PITCH
        </span>
      )}
    </div>
  );
}

// ─── Squad rail ─────────────────────────────────────────────────────────────
function SquadRail({ players, lineup, candidateId, onPlayerClick }) {
  const onPitchIds = useMemo(() => new Set(Object.values(lineup)), [lineup]);
  const groups = useMemo(() => ({
    GK:  players.filter(p => p.position === "GK"),
    DEF: players.filter(p => p.position === "DEF"),
    MID: players.filter(p => p.position === "MID"),
    FWD: players.filter(p => p.position === "FWD"),
  }), [players]);
  const labels = { GK: "Goalkeepers", DEF: "Defenders", MID: "Midfielders", FWD: "Forwards" };

  return (
    <div style={{
      background: "linear-gradient(180deg, #1e1e3a, #1a1530)",
      borderRadius: 14,
      padding: 12,
      border: `1px solid ${LFC_RED}22`,
      boxShadow: "0 8px 24px #0006",
      maxHeight: "calc(100vh - 220px)",
      overflowY: "auto",
    }}>
      <div style={{
        fontSize: 11, color: LFC_GOLD, fontWeight: 800, textTransform: "uppercase",
        letterSpacing: 1.5, padding: "4px 8px 10px", display: "flex", alignItems: "center", gap: 8,
      }}>
        Squad
        {candidateId != null && (
          <span style={{
            marginLeft: "auto", fontSize: 9, color: LFC_RED, fontWeight: 700,
            background: `${LFC_RED}22`, padding: "3px 8px", borderRadius: 5, letterSpacing: 0.5,
          }}>
            PICK A PITCH PLAYER →
          </span>
        )}
      </div>
      {Object.keys(groups).map((pos) => (
        <div key={pos} style={{ marginBottom: 10 }}>
          <div style={{
            fontSize: 9, color: POS_COLORS[pos], fontWeight: 800, textTransform: "uppercase",
            letterSpacing: 1.2, padding: "4px 10px",
          }}>
            {labels[pos]} · {groups[pos].length}
          </div>
          {groups[pos].map((p) => (
            <RailRow
              key={p.id}
              player={p}
              onPitch={onPitchIds.has(p.id)}
              isCandidate={candidateId === p.id}
              onClick={() => onPlayerClick(p.id)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

// ─── Formation chips ────────────────────────────────────────────────────────
function FormationChips({ value, onChange }) {
  return (
    <div style={{ display: "flex", gap: 4, background: "#ffffff10", borderRadius: 10, padding: 3, width: "fit-content" }}>
      {Object.keys(FORMATIONS).map((k) => (
        <button
          key={k}
          onClick={() => onChange(k)}
          style={{
            padding: "7px 14px", borderRadius: 8, border: "none", cursor: "pointer",
            fontWeight: 800, fontSize: 12, letterSpacing: 0.5,
            background: value === k ? LFC_RED : "transparent",
            color: value === k ? "#fff" : "#bbb",
            transition: "all 0.18s ease",
          }}
        >
          {FORMATIONS[k].label}
        </button>
      ))}
    </div>
  );
}

// ─── Main view ──────────────────────────────────────────────────────────────
export default function LineupView({ players, nextMatch }) {
  const [formationKey, setFormationKey] = useState(DEFAULT_FORMATION);
  const [lineup, setLineup] = useState(() => ({ ...FORMATIONS[DEFAULT_FORMATION].defaultXI }));
  const [candidateId, setCandidateId] = useState(null);

  const formation = FORMATIONS[formationKey];
  const playersById = useMemo(() => Object.fromEntries(players.map(p => [p.id, p])), [players]);

  // Sort squad by jersey number within each position group
  const sortedPlayers = useMemo(
    () => [...players].sort((a, b) => a.number - b.number),
    [players]
  );

  function handleFormationChange(k) {
    if (k === formationKey) return;
    setFormationKey(k);
    setLineup({ ...FORMATIONS[k].defaultXI });
    setCandidateId(null);
  }

  function handleSlotClick(slotKey) {
    if (candidateId == null) return;
    const displaced = lineup[slotKey];
    if (displaced === candidateId) {
      setCandidateId(null);
      return;
    }
    setLineup({ ...lineup, [slotKey]: candidateId });
    setCandidateId(null);
  }

  function handleRailClick(playerId) {
    const onPitch = Object.values(lineup).includes(playerId);
    if (onPitch) return;
    setCandidateId(candidateId === playerId ? null : playerId);
  }

  // Escape cancels swap
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setCandidateId(null); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const matchLabel = nextMatch
    ? `${nextMatch.home ? "vs" : "@"} ${nextMatch.shortName || nextMatch.opponent}`
    : "Next match";

  return (
    <div onClick={() => setCandidateId(null)}>
      {/* Inline keyframes for the swap-mode pulse */}
      <style>{`
        @keyframes lineupPulse {
          0%, 100% { outline-color: ${LFC_GOLD}; outline-width: 2px; }
          50%      { outline-color: ${LFC_RED};  outline-width: 3px; }
        }
      `}</style>

      {/* Top bar: title, prediction note, formation chips */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap",
          background: "linear-gradient(135deg, #1e1e3a, #1a1530)",
          borderRadius: 14, padding: "14px 18px", marginBottom: 16,
          border: `1px solid ${LFC_RED}33`,
        }}
      >
        <div>
          <div style={{
            fontSize: 11, color: LFC_GOLD, fontWeight: 800,
            textTransform: "uppercase", letterSpacing: 1.5,
          }}>
            Predicted Starting XI · {matchLabel}
          </div>
          <div style={{
            fontSize: 12, color: "#aaa", marginTop: 4, lineHeight: 1.4,
          }}>
            <span style={{
              color: "#fff", fontWeight: 700, background: "#28a74522",
              border: "1px solid #28a74555", padding: "2px 8px",
              borderRadius: 5, marginRight: 8, fontSize: 11,
            }}>
              Confidence: {PREDICTION_NOTE.level}
            </span>
            {PREDICTION_NOTE.reason}
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontSize: 10, color: "#777", textTransform: "uppercase", letterSpacing: 1 }}>Formation</span>
          <FormationChips value={formationKey} onChange={handleFormationChange} />
        </div>
      </div>

      {/* Pitch + Squad rail */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}
      >
        <div style={{ flex: "1 1 420px", minWidth: 0 }}>
          <PitchDiagram
            formation={formation}
            lineup={lineup}
            playersById={playersById}
            onSlotClick={handleSlotClick}
            isSwapMode={candidateId != null}
            candidateId={candidateId}
          />
          <div style={{
            marginTop: 10, fontSize: 11, color: "#888",
            textAlign: "center", lineHeight: 1.5,
          }}>
            Hover a player to see why they're in the XI · Click a bench player then a pitch player to swap · Esc to cancel
          </div>
        </div>
        <div style={{ flex: "0 1 340px", minWidth: 280, width: "100%" }}>
          <SquadRail
            players={sortedPlayers}
            lineup={lineup}
            candidateId={candidateId}
            onPlayerClick={handleRailClick}
          />
        </div>
      </div>
    </div>
  );
}
