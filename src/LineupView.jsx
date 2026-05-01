import { useState, useMemo, useEffect } from "react";
import {
  FORMATIONS, PLAYER_EVIDENCE, DEFAULT_FORMATION,
  PREDICTION_NOTE, SLOT_CONFIDENCE, SLOT_RATIONALE, ALTERNATIVES,
} from "./lineupData.js";
import { T } from "./App.jsx";

// ─── Confidence indicator ──────────────────────────────────────────────────
// Hollow circle (Low) / half-tinted (Medium) / filled (High) — all in ivory.
function ConfidenceMark({ level, size = 8 }) {
  const fill = level === "High" ? T.ivory : level === "Medium" ? T.gold : "transparent";
  return (
    <span style={{
      display: "inline-block", width: size, height: size, borderRadius: "50%",
      border: `1px solid ${T.ivory}`, background: fill, flexShrink: 0,
    }} />
  );
}

// ─── Pitch markings — single hairline weight, cream/ivory on dark surface ──
function PitchLines() {
  const stroke = T.ivoryFaint;
  const sw = 0.35;
  return (
    <svg
      viewBox="0 0 100 150"
      preserveAspectRatio="none"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    >
      <g fill="none" stroke={stroke} strokeWidth={sw}>
        <rect x="1" y="1" width="98" height="148" />
        <line x1="1" y1="75" x2="99" y2="75" />
        <circle cx="50" cy="75" r="9.5" />
        <circle cx="50" cy="75" r="0.4" fill={stroke} />
        {/* Top penalty area */}
        <rect x="22" y="1" width="56" height="20" />
        <rect x="37" y="1" width="26" height="8" />
        <circle cx="50" cy="13" r="0.4" fill={stroke} />
        <path d="M 41 21 A 9.5 9.5 0 0 0 59 21" />
        {/* Bottom penalty area */}
        <rect x="22" y="129" width="56" height="20" />
        <rect x="37" y="141" width="26" height="8" />
        <circle cx="50" cy="137" r="0.4" fill={stroke} />
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

// ─── Player token — small numbered serif circle ────────────────────────────
function PitchPlayerToken({
  slotKey, slot, player, onClick, isSwapMode, isCandidateMatch,
  isHovered, onHover, playersById,
}) {
  const lastName = player.name.split(" ").slice(-1)[0];
  const slotConf = SLOT_CONFIDENCE[slotKey] || "Medium";
  const rationale = SLOT_RATIONALE[slotKey];
  const alts = ALTERNATIVES[slotKey] || [];

  const ringColor = isCandidateMatch
    ? T.gold
    : isHovered ? T.red : T.ivory;

  return (
    <div
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={{
        position: "absolute",
        left: `${slot.x}%`,
        top: `${slot.y}%`,
        transform: `translate(-50%, -50%)`,
        cursor: "pointer",
        zIndex: isHovered ? 30 : 10,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        transition: `left .55s ${T.ease}, top .55s ${T.ease}`,
      }}
    >
      {/* Numbered serif circle */}
      <div style={{
        width: 44, height: 44, borderRadius: "50%",
        border: `1px solid ${ringColor}`,
        background: T.ink,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: T.serif, fontWeight: 500, fontSize: 18, color: T.ivory,
        letterSpacing: "-0.02em",
        fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
        transition: `border-color .35s ${T.ease}, transform .25s ${T.ease}`,
        transform: isHovered ? "scale(1.04)" : "scale(1)",
        outline: isSwapMode ? `1px dashed ${T.gold}` : "none",
        outlineOffset: 4,
      }}>
        {player.number}
      </div>

      {/* Name caption */}
      <div style={{
        fontFamily: T.serif, fontWeight: 500, fontSize: 13,
        color: T.ivory, letterSpacing: "-0.01em",
        whiteSpace: "nowrap", textAlign: "center",
        textShadow: `0 1px 0 ${T.ink}, 0 0 8px ${T.ink}`,
      }}>
        {lastName}
      </div>

      {/* Confidence dot */}
      <ConfidenceMark level={slotConf} />

      {/* Hover rationale callout — hairline-ruled */}
      <div style={{
        position: "absolute", top: "calc(100% + 8px)",
        left: "50%", transform: "translateX(-50%)",
        background: T.surface,
        border: `1px solid ${T.rule}`,
        padding: "10px 14px",
        opacity: isHovered ? 1 : 0,
        pointerEvents: "none",
        width: 240, maxWidth: "60vw",
        transition: `opacity .25s ${T.ease}`,
        zIndex: 40,
      }}>
        <div style={{
          fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
          color: T.ivoryFaint, marginBottom: 6,
          fontFamily: T.sans, fontWeight: 500,
        }}>
          {slotKey} · Confidence {slotConf}
        </div>
        <div style={{
          fontFamily: T.serif, fontStyle: "italic", fontSize: 13,
          color: T.ivoryDim, lineHeight: 1.5,
        }}>
          {rationale || PLAYER_EVIDENCE[player.id] || "Recent starter"}
        </div>
        {alts.length > 0 && (
          <div style={{
            marginTop: 8, paddingTop: 8,
            borderTop: `1px solid ${T.rule}`,
            fontSize: 11, color: T.ivoryFaint,
            fontFamily: T.serif, fontStyle: "italic",
          }}>
            Also considered · {alts.map(a => {
              const ap = playersById?.[a.playerId];
              return ap ? ap.name.split(" ").slice(-1)[0] : `#${a.playerId}`;
            }).join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Pitch container — printed tactics-board diagram ───────────────────────
function PitchDiagram({ formation, lineup, playersById, onSlotClick, isSwapMode, candidateId }) {
  const [hoveredSlot, setHoveredSlot] = useState(null);
  return (
    <div style={{
      position: "relative", width: "100%", aspectRatio: "2 / 3",
      background: T.surface,
      border: `1px solid ${T.rule}`,
    }}>
      <PitchLines />
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
            playersById={playersById}
          />
        );
      })}
    </div>
  );
}

// ─── Formation chips — text buttons in chapter-title font ──────────────────
function FormationChips({ value, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline" }}>
      {Object.keys(FORMATIONS).map((k, i, arr) => (
        <span key={k} style={{ display: "inline-flex", alignItems: "baseline" }}>
          <button
            onClick={() => onChange(k)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "4px 8px",
              color: value === k ? T.ivory : T.ivoryDim,
              fontFamily: T.serif,
              fontStyle: value === k ? "italic" : "normal",
              fontWeight: value === k ? 500 : 400,
              fontSize: 22,
              letterSpacing: "-0.01em",
              borderBottom: value === k ? `1px solid ${T.red}` : "1px solid transparent",
              transition: `all .35s ${T.ease}`,
            }}
          >
            {FORMATIONS[k].label}
          </button>
          {i < arr.length - 1 && (
            <span style={{ color: T.ivoryFaint, padding: "0 4px", fontFamily: T.serif, fontSize: 18 }}>·</span>
          )}
        </span>
      ))}
    </div>
  );
}

// ─── Squad rail — editorial roster strip ───────────────────────────────────
function RailRow({ player, onPitch, isCandidate, onClick }) {
  const statusColor = player.status === "injured" ? T.red
    : player.status === "recovering" ? T.gold
    : null;
  return (
    <div
      onClick={onPitch ? undefined : onClick}
      style={{
        display: "grid", gridTemplateColumns: "32px 1fr auto",
        gap: 10, alignItems: "center",
        padding: "10px 0",
        borderBottom: `1px solid ${T.rule}`,
        cursor: onPitch ? "default" : "pointer",
        opacity: onPitch ? 0.4 : 1,
        background: isCandidate ? "#F4EBD008" : "transparent",
        transition: `background .35s ${T.ease}`,
      }}
    >
      <div style={{
        fontFamily: T.serif, fontStyle: "italic", color: T.red,
        fontSize: 14, fontWeight: 400,
        fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
      }}>
        №{player.number}
      </div>
      <div style={{
        fontFamily: T.serif, fontWeight: 500, fontSize: 15,
        color: T.ivory, letterSpacing: "-0.01em",
        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
      }}>
        {player.name}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {player.form > 0 && (
          <span style={{
            fontFamily: T.serif, fontWeight: 500, fontSize: 14, color: T.ivory,
            fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
          }}>
            {player.form.toFixed(1)}
          </span>
        )}
        {statusColor && (
          <span style={{
            fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
            color: statusColor, fontFamily: T.sans, fontWeight: 500,
            borderBottom: `1px solid ${statusColor}`, paddingBottom: 1,
          }}>
            {player.status === "injured" ? "Out" : "Rec."}
          </span>
        )}
        {onPitch && (
          <span style={{
            fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.gold, fontFamily: T.sans, fontWeight: 500,
          }}>
            On pitch
          </span>
        )}
      </div>
    </div>
  );
}

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
    <div>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        paddingBottom: 12, borderBottom: `1px solid ${T.ruleStrong}`,
      }}>
        <h3 style={{
          fontFamily: T.serif, fontStyle: "italic", fontWeight: 500,
          fontSize: 22, color: T.ivory, lineHeight: 1.1,
        }}>The bench<span style={{ color: T.red }}>.</span></h3>
        {candidateId != null && (
          <span style={{
            fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
            color: T.red, fontFamily: T.sans, fontWeight: 500,
          }}>
            Pick a pitch player →
          </span>
        )}
      </div>
      {Object.keys(groups).map(pos => (
        <div key={pos} style={{ marginTop: 18 }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "baseline",
            marginBottom: 4,
          }}>
            <span style={{
              fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
              color: T.ivoryDim, fontFamily: T.sans, fontWeight: 600,
            }}>
              {labels[pos]}
            </span>
            <span style={{
              fontFamily: T.serif, fontStyle: "italic", color: T.ivoryFaint, fontSize: 13,
              fontVariantNumeric: "tabular-nums", fontFeatureSettings: "\"tnum\"",
            }}>
              {String(groups[pos].length).padStart(2, "0")}
            </span>
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

// ─── Main view ─────────────────────────────────────────────────────────────
export default function LineupView({ players, nextMatch }) {
  const [formationKey, setFormationKey] = useState(DEFAULT_FORMATION);
  const [lineup, setLineup] = useState(() => ({ ...FORMATIONS[DEFAULT_FORMATION].defaultXI }));
  const [candidateId, setCandidateId] = useState(null);

  const formation = FORMATIONS[formationKey];
  const playersById = useMemo(() => Object.fromEntries(players.map(p => [p.id, p])), [players]);
  const sortedPlayers = useMemo(() => [...players].sort((a, b) => a.number - b.number), [players]);

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

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setCandidateId(null); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const matchLabel = nextMatch
    ? `${nextMatch.home ? "vs" : "@"} ${nextMatch.shortName || nextMatch.opponent}`
    : "Next match";

  const generatedAt = PREDICTION_NOTE.generated_at
    ? new Date(PREDICTION_NOTE.generated_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })
    : null;

  return (
    <div onClick={() => setCandidateId(null)}>
      {/* Editorial header — prediction note as deck paragraph */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ marginBottom: 32 }}
      >
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          gap: 32, flexWrap: "wrap",
          paddingBottom: 24, borderBottom: `1px solid ${T.ruleStrong}`, marginBottom: 24,
        }}>
          <div style={{ flex: "1 1 360px", minWidth: 0 }}>
            <div style={{
              fontFamily: T.serif, fontStyle: "italic", fontWeight: 500,
              fontSize: 14, color: T.red, letterSpacing: "0.02em", marginBottom: 6,
            }}>
              — Predicted XI {matchLabel}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", marginBottom: 12 }}>
              <span style={{
                fontFamily: T.serif, fontStyle: "italic", fontSize: 28, color: T.ivory,
              }}>
                Confidence{" "}
                <span style={{ color: T.red }}>{PREDICTION_NOTE.level}</span>
              </span>
              {PREDICTION_NOTE.agreement_rate != null && (
                <span style={{
                  fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
                  color: T.ivoryDim, fontFamily: T.sans, fontWeight: 500,
                }}>
                  · {Math.round(PREDICTION_NOTE.agreement_rate * 100)}% pundit agreement
                </span>
              )}
            </div>
          </div>

          <div style={{ flex: "0 0 auto" }}>
            <div style={{
              fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
              color: T.ivoryFaint, marginBottom: 8, fontFamily: T.sans, fontWeight: 500,
              textAlign: "right",
            }}>
              Formation
            </div>
            <FormationChips value={formationKey} onChange={handleFormationChange} />
          </div>
        </div>

        <p style={{
          fontFamily: T.serif, fontWeight: 400, fontSize: 17,
          lineHeight: 1.6, color: T.ivoryDim, maxWidth: "72ch",
        }}>
          {PREDICTION_NOTE.reason}
        </p>

        {PREDICTION_NOTE.pundit_sources?.length > 0 && (
          <div style={{
            marginTop: 14, fontSize: 11, color: T.ivoryFaint,
            fontFamily: T.serif, fontStyle: "italic",
          }}>
            Sources · {PREDICTION_NOTE.pundit_sources.join(" · ")}
            {generatedAt && <> · {generatedAt}</>}
          </div>
        )}
      </div>

      {/* Pitch + bench, side-by-side w/ visible column rule */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ display: "grid", gridTemplateColumns: "1.4fr 1px 1fr", gap: "0 40px" }}
        className="lineup-grid"
      >
        <div>
          <PitchDiagram
            formation={formation}
            lineup={lineup}
            playersById={playersById}
            onSlotClick={handleSlotClick}
            isSwapMode={candidateId != null}
            candidateId={candidateId}
          />
          <div style={{
            marginTop: 14, paddingTop: 12,
            borderTop: `1px solid ${T.rule}`,
            fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase",
            color: T.ivoryFaint, fontFamily: T.sans, fontWeight: 500,
            display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12,
          }}>
            <span>Hover a player for rationale</span>
            <span>Pick a bench player · click a pitch slot to swap</span>
            <span>Esc cancels</span>
          </div>
        </div>
        <div style={{ background: T.rule }} />
        <div>
          <SquadRail
            players={sortedPlayers}
            lineup={lineup}
            candidateId={candidateId}
            onPlayerClick={handleRailClick}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .lineup-grid { grid-template-columns: 1fr !important; }
          .lineup-grid > div:nth-child(2) { display: none !important; }
        }
      `}</style>
    </div>
  );
}
