#!/usr/bin/env node
/**
 * scripts/preflight-audit.mjs
 * ───────────────────────────────────────────────────────────────────────────
 * Mechanical pre-publish gate for the daily/evening tracker refresh.
 *
 * WHY THIS EXISTS
 * The skill's STEP 10 staleness auditor is a *subagent that runs after the
 * push*. On 31 Aug 2026 (evening) it returned FAIL: Van Dijk's injuryNote
 * still carried the morning framing, calling the Manchester City move one
 * "the player is tempted by", while the same page's lead announced that the
 * sale had collapsed. A wrong front page went live and needed a second
 * commit to correct.
 *
 * The root cause was not carelessness, it was method: the contradiction sweep
 * grepped for a hand-written list of PHRASES ("ready to lodge", "tempted by
 * the Etihad"). A phrase allowlist can only find contradictions you already
 * thought of, and it missed this one because the stale sentence lived in a
 * DIFFERENT player's note than the player whose story had moved.
 *
 * This script replaces that guesswork with checks that cannot be talked out
 * of. The centrepiece is --changed-names (see CHECK 10): if a story moved
 * this run, every block of prose that mentions it must have been rewritten
 * this run. That rule catches the exact failure above, by construction.
 *
 * USAGE
 *   node scripts/preflight-audit.mjs --changed-names Gakpo,Barcola,Sarr
 *   node scripts/preflight-audit.mjs --changed-names Gakpo --base HEAD~1
 *   node scripts/preflight-audit.mjs --changed-names Gakpo --json
 *
 * Exit 0 = clean (warnings allowed). Exit 1 = at least one FAIL. Run this
 * BEFORE scripts/git-publish.sh, every run, and do not publish on exit 1.
 */

import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// ─── args ──────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const argOf = (flag, dflt = null) => {
  const i = argv.indexOf(flag);
  return i !== -1 && argv[i + 1] ? argv[i + 1] : dflt;
};
const BASE = argOf("--base", "HEAD");
const JSON_OUT = argv.includes("--json");
// --structural: this commit changes CODE or INFRASTRUCTURE, not the edition's prose.
// CHECK 9 (rotation) compares editorial copy against the previous commit and will
// fail every such commit by design, because the copy is deliberately unchanged.
// Passing this flag skips ONLY the rotation checks and prints a loud banner; every
// factual, consistency, timestamp and regression check still runs. Do NOT use it to
// ship an edition whose prose you simply did not rotate — that is the exact failure
// the rotation checks exist to catch.
const STRUCTURAL = process.argv.includes("--structural");
const CHANGED_NAMES = (argOf("--changed-names", "") || "")
  .split(",").map((s) => s.trim()).filter(Boolean);

// ─── reporting ─────────────────────────────────────────────────────────────
const fails = [];
const warns = [];
const notes = [];
const fail = (check, msg) => fails.push({ check, msg });
const warn = (check, msg) => warns.push({ check, msg });
const note = (check, msg) => notes.push({ check, msg });

// ─── helpers ───────────────────────────────────────────────────────────────
const git = (args) =>
  execFileSync("git", args, { cwd: REPO, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });

const showAt = (ref, path) => {
  try { return git(["show", `${ref}:${path}`]); } catch { return null; }
};

/** Import an ES module from an arbitrary source string (used for the base rev). */
const scratch = mkdtempSync(join(tmpdir(), "lfc-preflight-"));
let scratchN = 0;
const importSource = async (src) => {
  const f = join(scratch, `m${scratchN++}.mjs`);
  writeFileSync(f, src);
  return import(pathToFileURL(f).href);
};

const todayISO = () => {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

const norm = (s) => String(s ?? "").replace(/\s+/g, " ").trim();
const firstSentence = (s) => norm(s).split(/(?<=[.!?])\s/)[0] || "";
const firstWords = (s, n) => norm(s).split(" ").slice(0, n).join(" ").toLowerCase();

/** Pull the inner text of a className={"..."} JSX block from App.jsx. */
const jsxBlock = (src, className) => {
  if (!src) return null;
  const i = src.indexOf(className);
  if (i === -1) return null;
  const open = src.indexOf(">", src.indexOf("}}", i));
  if (open === -1) return null;
  const close = src.indexOf("</", open);
  return norm(src.slice(open + 1, close === -1 ? open + 1200 : close))
    .replace(/\{"\s*"\}/g, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, "");
};

// ─── load current + base ───────────────────────────────────────────────────
const PD = "src/playerData.js";
const LD = "src/lineupData.js";
const APP = "src/App.jsx";
const ROOT_JSX = "liverpool-tracker.jsx";

const cur = {
  pd: await import(pathToFileURL(join(REPO, PD)).href),
  ld: await import(pathToFileURL(join(REPO, LD)).href),
  app: readFileSync(join(REPO, APP), "utf8"),
  root: readFileSync(join(REPO, ROOT_JSX), "utf8"),
};

// ─── window state ──────────────────────────────────────────────────────────
// The transfer ledger moved to src/transferArchive.js when the summer window
// shut on 1 Sep 2026. While `WINDOW.open` is false the transfer checks below are
// skipped and the in-season analysis checks replace them. Flipping WINDOW.open
// back to true in January re-arms every transfer check automatically, so this
// script does not need editing twice a year.
let ARCHIVE = null;
try {
  ARCHIVE = await import(pathToFileURL(join(REPO, "src/transferArchive.js")).href);
} catch { /* archive absent — treat as window-open legacy layout */ }
const WINDOW_OPEN = ARCHIVE ? (ARCHIVE.WINDOW?.open !== false) : true;
const TT_SOURCE = ARCHIVE?.TRANSFER_TARGETS ?? cur.pd.TRANSFER_TARGETS;

let base = null;
try {
  const pdSrc = showAt(BASE, PD);
  const ldSrc = showAt(BASE, LD);
  base = {
    pd: pdSrc ? await importSource(pdSrc) : null,
    ld: ldSrc ? await importSource(ldSrc) : null,
    app: showAt(BASE, APP),
    root: showAt(BASE, ROOT_JSX),
  };
} catch (e) {
  warn("base", `could not load base revision ${BASE}: ${e.message}`);
}

const TODAY = todayISO();

// ─── CHECK 1 — every generatedAt is today ──────────────────────────────────
{
  const stamps = [
    ["NEWS_DIGEST.generatedAt", cur.pd.NEWS_DIGEST?.generatedAt],
    ["STANDINGS_COMMENTARY.generatedAt", cur.pd.STANDINGS_COMMENTARY?.generatedAt],
    ["COVER_IMAGE.generatedAt", cur.pd.COVER_IMAGE?.generatedAt],
    ["PREDICTION_NOTE.generated_at", cur.ld.PREDICTION_NOTE?.generated_at],
    // In-season analysis surfaces. These carry the same daily obligation the
    // transfer ledger used to: if they are not re-stamped, they are not refreshed.
    ["OPPOSITION.generatedAt", cur.pd.OPPOSITION?.generatedAt],
    ["FORM_TRENDS.generatedAt", cur.pd.FORM_TRENDS?.generatedAt],
    ["SQUAD_LOAD.generatedAt", cur.pd.SQUAD_LOAD?.generatedAt],
    ["SEASON_PROJECTION.generatedAt", cur.pd.SEASON_PROJECTION?.generatedAt],
  ];
  if (WINDOW_OPEN) stamps.push(["TRANSFER_TARGETS.generatedAt", TT_SOURCE?.generatedAt]);
  for (const [label, v] of stamps) {
    if (!v) fail("timestamps", `${label} is missing or null`);
    else if (!String(v).startsWith(TODAY)) fail("timestamps", `${label} = ${v}, expected ${TODAY}`);
  }
}

// ─── CHECK 2 — keyTopics in strict recency order ───────────────────────────
{
  const rank = (t) => {
    const s = String(t);
    if (/,\s*today\)/.test(s)) return 0;
    const m = s.match(/(\d+)d ago\)/);
    if (m) return Number(m[1]);
    if (/(\d+)w ago\)/.test(s)) return 7 * Number(s.match(/(\d+)w ago\)/)[1]);
    return 99;
  };
  const topics = cur.pd.NEWS_DIGEST?.keyTopics ?? [];
  for (let i = 1; i < topics.length; i++) {
    if (rank(topics[i].title) < rank(topics[i - 1].title)) {
      fail("recency", `keyTopics[${i}] ("${norm(topics[i].title).slice(0, 45)}…") is fresher than keyTopics[${i - 1}]`);
    }
  }
  const cats = new Set(["transfers", "matches", "injuries", "tactics", "general"]);
  topics.forEach((t, i) => {
    if (!cats.has(t.category)) fail("schema", `keyTopics[${i}].category "${t.category}" not in ${[...cats].join("/")}`);
  });
}

// ─── CHECK 3 — no injured player in any starting XI ────────────────────────
{
  const byId = Object.fromEntries((cur.pd.PLAYERS ?? []).map((p) => [p.id, p]));
  for (const [f, cfg] of Object.entries(cur.ld.FORMATIONS ?? {})) {
    for (const [slot, id] of Object.entries(cfg.defaultXI ?? {})) {
      const p = byId[id];
      if (!p) fail("lineup", `${f}/${slot} references unknown player id ${id}`);
      else if (p.status === "injured") fail("lineup", `${f}/${slot} starts ${p.name}, whose PLAYERS status is "injured"`);
    }
  }
  const ids = new Set((cur.pd.PLAYERS ?? []).map((p) => p.id));
  for (const k of Object.keys(cur.ld.PLAYER_EVIDENCE ?? {})) {
    if (!ids.has(Number(k))) fail("lineup", `PLAYER_EVIDENCE has id ${k} with no PLAYERS entry`);
  }
}

// ─── CHECK 4 — standings sanity ────────────────────────────────────────────
{
  const S = cur.pd.STANDINGS ?? [];
  if (S.length !== 20) fail("standings", `${S.length} rows, expected 20`);
  const hl = S.filter((r) => r.highlight);
  if (hl.length !== 1 || hl[0]?.team !== "Liverpool") {
    fail("standings", `expected exactly one highlighted row (Liverpool), got ${hl.map((r) => r.team).join(",") || "none"}`);
  }
  const quals = new Set(["UCL", "UEL", "UECL", "REL"]);
  for (const r of S) {
    if (r.qualification && !quals.has(r.qualification)) fail("standings", `${r.team} qualification "${r.qualification}" invalid`);
    if (!Number.isInteger(r.gd)) fail("standings", `${r.team} gd is not an integer (${r.gd})`);
  }
  const teams = new Set(S.map((r) => r.team));
  for (const k of Object.keys(cur.pd.STANDINGS_COMMENTARY?.teams ?? {})) {
    if (!teams.has(k)) fail("standings", `STANDINGS_COMMENTARY.teams["${k}"] matches no STANDINGS row`);
  }
  const mw = cur.pd.STANDINGS_COMMENTARY?.matchweek;
  if (S[0] && mw !== S[0].p) warn("standings", `commentary matchweek ${mw} != STANDINGS[0].p ${S[0].p}`);
  for (const t of teams) {
    if (!(cur.pd.TEAM_LOGOS ?? {})[t]) fail("crests", `no TEAM_LOGOS crest for standings team "${t}"`);
  }
}

// ─── CHECK 5 — transfer ledger schema + crests ─────────────────────────────
// Schema is validated whenever a ledger exists (a malformed archive would break
// January), but only the OPEN window makes it a daily obligation.
{
  const TT = TT_SOURCE ?? {};
  const tiers = new Set(["hot", "warm", "cool", "done", "dead"]);
  const stiers = new Set(["S", "A", "B", "C"]);
  for (const e of [...(TT.incoming ?? []), ...(TT.outgoing ?? [])]) {
    if (!tiers.has(e.heatTier)) fail("targets", `${e.name}: heatTier "${e.heatTier}" invalid`);
    if (typeof e.probability !== "number" || e.probability < 0 || e.probability > 100) {
      fail("targets", `${e.name}: probability ${e.probability} out of range`);
    }
    for (const s of e.sources ?? []) {
      if (!stiers.has(s.tier)) fail("targets", `${e.name}: source "${s.name}" tier "${s.tier}" invalid`);
    }
  }
  if (WINDOW_OPEN) {
    for (const e of TT.incoming ?? []) {
      if (e.currentClub && !(cur.pd.TEAM_LOGOS ?? {})[e.currentClub]) {
        fail("crests", `no TEAM_LOGOS crest for target club "${e.currentClub}" (${e.name})`);
      }
    }
  }
}

// ─── CHECK 5b — in-season analysis coherence ───────────────────────────────
// These replace the transfer checks while the window is shut. They are cheap and
// they catch the two failure modes the analysis surfaces actually have: a
// dossier left pointing at last week's opponent, and a projection that disagrees
// with the live table it claims to be derived from.
if (!WINDOW_OPEN) {
  const OPP = cur.pd.OPPOSITION;
  const NM = cur.pd.NEXT_MATCH;
  if (!OPP) fail("analysis", "OPPOSITION export is missing while the window is shut");
  else {
    if (NM?.opponent && OPP.opponent !== NM.opponent) {
      fail("analysis", `OPPOSITION.opponent "${OPP.opponent}" != NEXT_MATCH.opponent "${NM.opponent}"`);
    }
    if (NM?.date && OPP.fixture?.date && OPP.fixture.date !== NM.date) {
      fail("analysis", `OPPOSITION.fixture.date ${OPP.fixture.date} != NEXT_MATCH.date ${NM.date}`);
    }
    if (!(OPP.keyPlayers ?? []).length) fail("analysis", "OPPOSITION.keyPlayers is empty");
    if (!(OPP.predictedXI ?? []).length) warn("analysis", "OPPOSITION.predictedXI is empty");
    else if (OPP.predictedXI.length !== 11) {
      fail("analysis", `OPPOSITION.predictedXI has ${OPP.predictedXI.length} names, expected 11`);
    }
  }

  const lfcRow = (cur.pd.STANDINGS ?? []).find((r) => r.highlight);
  const SP = cur.pd.SEASON_PROJECTION;
  if (!SP) fail("analysis", "SEASON_PROJECTION export is missing while the window is shut");
  else if (lfcRow) {
    if (SP.played !== lfcRow.p) fail("analysis", `SEASON_PROJECTION.played ${SP.played} != STANDINGS ${lfcRow.p}`);
    if (SP.points !== lfcRow.pts) fail("analysis", `SEASON_PROJECTION.points ${SP.points} != STANDINGS ${lfcRow.pts}`);
    const ppg = lfcRow.p ? lfcRow.pts / lfcRow.p : 0;
    if (Math.abs((SP.pointsPerGame ?? 0) - ppg) > 0.01) {
      fail("analysis", `SEASON_PROJECTION.pointsPerGame ${SP.pointsPerGame} != ${ppg.toFixed(2)} from STANDINGS`);
    }
    const proj = Math.round(ppg * 38);
    if (Math.abs((SP.projectedPoints ?? 0) - proj) > 1) {
      fail("analysis", `SEASON_PROJECTION.projectedPoints ${SP.projectedPoints} != ${proj} (ppg x 38)`);
    }
  }

  const FT = cur.pd.FORM_TRENDS;
  if (!FT) fail("analysis", "FORM_TRENDS export is missing while the window is shut");
  else {
    if (lfcRow && FT.played !== lfcRow.p) {
      fail("analysis", `FORM_TRENDS.played ${FT.played} != STANDINGS ${lfcRow.p}`);
    }
    for (const m of FT.matches ?? []) {
      for (const k of ["xgFor", "xgAgainst"]) {
        const v = m[k];
        if (v !== null && (typeof v !== "number" || v < 0 || v > 10)) {
          fail("analysis", `FORM_TRENDS ${m.opponent}: ${k} = ${v} is not a plausible xG or null`);
        }
      }
      if (!m.source) fail("analysis", `FORM_TRENDS ${m.opponent}: no source named for the numbers`);
    }
  }

  if (!cur.pd.SQUAD_LOAD) fail("analysis", "SQUAD_LOAD export is missing while the window is shut");
}

// ─── CHECK 6 — the two data files agree ────────────────────────────────────
{
  const rootNote = (name) => {
    const i = cur.root.indexOf(`name: "${name}"`);
    if (i === -1) return null;
    const seg = cur.root.slice(i, cur.root.indexOf("image:", i));
    const m = seg.match(/injuryNote: "((?:[^"\\]|\\.)*)"/);
    const st = seg.match(/status: "(\w+)"/);
    return { note: m ? m[1] : null, status: st ? st[1] : null };
  };
  for (const p of cur.pd.PLAYERS ?? []) {
    const r = rootNote(p.name);
    if (!r) { warn("sync", `${p.name} not found in ${ROOT_JSX}`); continue; }
    if (norm(r.note) !== norm(p.injuryNote)) fail("sync", `${p.name}: injuryNote differs between ${PD} and ${ROOT_JSX}`);
    if (r.status !== p.status) fail("sync", `${p.name}: status differs (${p.status} vs ${r.status})`);
  }
  const rootBlock = (decl) => {
    const i = cur.root.indexOf(decl);
    if (i === -1) return null;
    return norm(cur.root.slice(i, cur.root.indexOf("\n];", i) !== -1 ? cur.root.indexOf("\n];", i) : cur.root.indexOf("\n};", i)));
  };
  const nm = cur.pd.NEXT_MATCH;
  const rootNM = rootBlock("const NEXT_MATCH");
  if (rootNM && nm) {
    for (const k of ["opponent", "date", "venue", "competition"]) {
      if (!rootNM.includes(String(nm[k]))) fail("sync", `NEXT_MATCH.${k} ("${nm[k]}") missing from ${ROOT_JSX}`);
    }
  }
  const rootRes = rootBlock("const RESULTS");
  const top = (cur.pd.RESULTS ?? [])[0];
  if (rootRes && top && !rootRes.includes(top.date)) {
    fail("sync", `most recent RESULTS entry (${top.date} vs ${top.opponent}) missing from ${ROOT_JSX}`);
  }
}

// ─── CHECK 7 — dispatch datelines are recent ───────────────────────────────
{
  const MON = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const now = new Date();
  (cur.pd.DISPATCHES ?? []).forEach((d, i) => {
    const m = norm(d.dateline).match(/(\d{1,2})\s+([A-Z][a-z]+)/);
    if (!m) { warn("dispatches", `card ${d.n}: unparseable dateline "${d.dateline}"`); return; }
    const mi = MON.indexOf(m[2]);
    if (mi === -1) { warn("dispatches", `card ${d.n}: unknown month in "${d.dateline}"`); return; }
    let dt = new Date(now.getFullYear(), mi, Number(m[1]));
    if (dt - now > 86400e3 * 30) dt = new Date(now.getFullYear() - 1, mi, Number(m[1]));
    const age = Math.floor((now - dt) / 86400e3);
    if (age > 7) fail("dispatches", `card ${d.n} ("${norm(d.headline).slice(0, 40)}…") dateline ${d.dateline} is ${age} days old`);
  });
  if ((cur.pd.DISPATCHES ?? []).length !== 5) fail("dispatches", `${cur.pd.DISPATCHES?.length} cards, expected 5`);
}

// ─── CHECK 8 — sources actually cited ──────────────────────────────────────
{
  const ND = cur.pd.NEWS_DIGEST ?? {};
  const hay = (norm(ND.summary) + " " + (ND.keyTopics ?? []).map((t) => norm(t.title) + " " + norm(t.detail)).join(" ")).toLowerCase();
  for (const s of ND.sources ?? []) {
    if (!hay.includes(s.toLowerCase())) warn("sources", `NEWS_DIGEST.sources lists "${s}" but it is not cited in any topic or the summary`);
  }
}

// ─── CHECK 9 — rotation / echo vs the base revision ────────────────────────
if (STRUCTURAL) {
  note("rotation", "SKIPPED — --structural passed; this is a code/infrastructure commit, not an edition. Every other check still ran.");
}
if (!STRUCTURAL && base?.pd) {
  const a = cur.pd, b = base.pd;

  if (firstSentence(a.NEWS_DIGEST?.summary) === firstSentence(b.NEWS_DIGEST?.summary)) {
    fail("rotation", "NEWS_DIGEST.summary lead sentence is unchanged from the previous edition");
  }
  if (WINDOW_OPEN) {
    if (norm(a.TRANSFER_TARGETS?.summary) === norm(b.TRANSFER_TARGETS?.summary)) {
      fail("rotation", "TRANSFER_TARGETS.summary is unchanged from the previous edition");
    }
    if (a.TRANSFER_TARGETS?.generatedAt === b.TRANSFER_TARGETS?.generatedAt) {
      fail("rotation", "TRANSFER_TARGETS.generatedAt was not re-stamped");
    }
  } else {
    // The opposition dossier is the in-season equivalent: it must move whenever
    // the fixture does. Rotating its prose between two runs on the SAME opponent
    // is not required, so this only fires when the opponent itself has changed.
    if (a.OPPOSITION?.opponent !== b.OPPOSITION?.opponent &&
        norm(a.OPPOSITION?.summary) === norm(b.OPPOSITION?.summary)) {
      fail("rotation", "OPPOSITION.opponent changed but OPPOSITION.summary did not");
    }
  }

  const prevTitles = new Set((b.NEWS_DIGEST?.keyTopics ?? []).map((t) => firstWords(t.title, 6)));
  const curTopics = a.NEWS_DIGEST?.keyTopics ?? [];
  const repeats = curTopics.filter((t) => prevTitles.has(firstWords(t.title, 6)));
  const pct = curTopics.length ? Math.round((repeats.length / curTopics.length) * 100) : 0;
  note("rotation", `keyTopics carry-over ${pct}% (${repeats.length}/${curTopics.length}); threshold 40%`);
  if (pct > 40) fail("rotation", `keyTopics ${pct}% recycled, over the 40% threshold`);
  for (const t of repeats) warn("rotation", `keyTopic title echoes the previous edition: "${norm(t.title).slice(0, 60)}…"`);

  const prevHeads = new Set((b.DISPATCHES ?? []).map((d) => firstWords(d.headline, 5)));
  for (const d of a.DISPATCHES ?? []) {
    if (prevHeads.has(firstWords(d.headline, 5))) fail("rotation", `DISPATCH ${d.n} headline repeats the previous edition`);
  }
  const prevBodies = new Set((b.DISPATCHES ?? []).map((d) => firstWords(d.body, 15)));
  for (const d of a.DISPATCHES ?? []) {
    if (prevBodies.has(firstWords(d.body, 15))) fail("rotation", `DISPATCH ${d.n} body opener repeats the previous edition`);
  }

  if (base.app) {
    for (const cls of ["footer-quote", "cover-deck", "cover-letter-lead"]) {
      const nowT = jsxBlock(cur.app, cls), prevT = jsxBlock(base.app, cls);
      if (nowT && prevT && norm(nowT) === norm(prevT)) fail("rotation", `App.jsx ${cls} is verbatim the previous edition`);
    }
  }
  if (base.root) {
    const titles = (src) => [...src.matchAll(/title: "((?:[^"\\]|\\.)*)"/g)].slice(0, 3).map((m) => firstWords(m[1], 6));
    const nowT = titles(cur.root), prevT = titles(base.root);
    const same = nowT.filter((t) => prevT.includes(t));
    if (same.length === 3) fail("rotation", "top 3 LATEST_NEWS headlines are unchanged from the previous edition");
    else if (same.length) warn("rotation", `${same.length} of the top 3 LATEST_NEWS headlines repeat the previous edition`);
  }
}

// ─── CHECK 10 — THE STALE-BLOCK RULE (the one that caught the 31 Aug FAIL) ─
// If a story moved this run, every block of prose that mentions it must have
// been rewritten this run. A block that names a changed player but is
// byte-identical to the previous edition is, by definition, stale copy about
// a story that has moved on. This is what a phrase-based grep cannot do.
if (base?.pd && CHANGED_NAMES.length) {
  // Two scopes, because they carry different obligations:
  //  · "current"    — rewritten every run by design. If it names a story that
  //                   moved and was NOT touched, it is stale. Hard FAIL.
  //  · "persistent" — the transfer ledger, which deliberately carries entries
  //                   across runs. A dormant target whose note mentions the
  //                   marquee signing in passing is fine. But the entry FOR the
  //                   player who moved must be updated. So persistent blocks are
  //                   only checked when the block's own subject is the changed
  //                   name. Without this split the check drowns in false
  //                   positives and stops being read, which is worse than no check.
  const blocks = (pd, ld, appSrc) => {
    const out = [];
    const cur_ = (id, text) => out.push({ id, text, scope: "current" });
    for (const p of pd.PLAYERS ?? []) cur_(`PLAYERS[${p.name}].injuryNote`, p.injuryNote);
    (pd.NEWS_DIGEST?.keyTopics ?? []).forEach((t, i) => cur_(`keyTopics[${i}].detail`, t.detail));
    (pd.DISPATCHES ?? []).forEach((d) => cur_(`DISPATCHES[${d.n}].body`, d.body));
    for (const [k, v] of Object.entries(pd.STANDINGS_COMMENTARY?.teams ?? {})) cur_(`commentary.teams[${k}]`, v);
    cur_("STANDINGS_COMMENTARY.overview", pd.STANDINGS_COMMENTARY?.overview);
    cur_("NEWS_DIGEST.summary", pd.NEWS_DIGEST?.summary);
    cur_("TRANSFER_TARGETS.summary", pd.TRANSFER_TARGETS?.summary);
    for (const [k, v] of Object.entries(ld?.SLOT_RATIONALE ?? {})) cur_(`SLOT_RATIONALE.${k}`, v);
    for (const [k, v] of Object.entries(ld?.PLAYER_EVIDENCE ?? {})) cur_(`PLAYER_EVIDENCE.${k}`, v);
    cur_("PREDICTION_NOTE.reason", ld?.PREDICTION_NOTE?.reason);
    for (const cls of ["cover-deck", "cover-letter-lead", "cover-letter-body", "footer-quote"]) {
      cur_(`App.jsx ${cls}`, jsxBlock(appSrc, cls));
    }
    for (const e of pd.TRANSFER_TARGETS?.incoming ?? []) {
      out.push({ id: `incoming[${e.name}].rumorNote`, text: e.rumorNote, scope: "persistent", subject: e.name });
    }
    for (const e of pd.TRANSFER_TARGETS?.outgoing ?? []) {
      out.push({ id: `outgoing[${e.name}].note`, text: e.note, scope: "persistent", subject: e.name });
    }
    return out;
  };

  const nowB = blocks(cur.pd, cur.ld, cur.app);
  const prevB = new Map(blocks(base.pd, base.ld, base.app ?? "").map((b) => [b.id, norm(b.text)]));

  for (const name of CHANGED_NAMES) {
    const re = new RegExp(`\\b${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
    const relevant = nowB.filter((b) => {
      if (!b.text || !re.test(b.text)) return false;
      return b.scope === "current" || re.test(b.subject ?? "");
    });
    let stale = 0;
    for (const b of relevant) {
      const prev = prevB.get(b.id);
      if (prev !== undefined && prev === norm(b.text)) {
        fail("stale-block", `${b.id} mentions "${name}" (whose story moved this run) but is unchanged from ${BASE}`);
        stale++;
      }
    }
    note("stale-block", `"${name}": ${relevant.length} in-scope block(s) mention it, ${stale} stale`);
    if (!relevant.length) warn("stale-block", `"${name}" was listed as changed but appears in no in-scope prose block`);
  }
} else if (!CHANGED_NAMES.length) {
  warn("stale-block", "no --changed-names supplied, so the stale-block check did not run (pass every name whose story moved)");
}

// ─── CHECK 11 — temporal phrases, surfaced for eyeball verification ────────
// Not auto-failable (natural language), but every hit is printed with the real
// date arithmetic beside it, so "a full week" for a Mon→Fri gap cannot slip by.
{
  const nm = cur.pd.NEXT_MATCH;
  if (nm?.date) {
    const md = new Date(nm.date);
    const days = Math.round((new Date(md.toDateString()) - new Date(new Date().toDateString())) / 86400e3);
    const dow = md.toLocaleDateString("en-GB", { weekday: "long" });
    note("dates", `today ${TODAY} (${new Date().toLocaleDateString("en-GB", { weekday: "long" })}); NEXT_MATCH ${nm.opponent} ${dow} ${nm.date} = ${days} day(s) away`);

    const PHRASE = /(a full week|a week|fortnight|\b\d+ (?:days?|hours?|weeks?)\b|\b(?:one|two|three|four|five|six|seven|eight|nine|ten|thirty-two) (?:days?|hours?|weeks?)\b|tonight|this afternoon|this morning|tomorrow|yesterday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/gi;
    const surfaces = [
      ["cover-deck", jsxBlock(cur.app, "cover-deck")],
      ["cover-letter-lead", jsxBlock(cur.app, "cover-letter-lead")],
      ["cover-letter-body", jsxBlock(cur.app, "cover-letter-body")],
      ["NEWS_DIGEST.summary", cur.pd.NEWS_DIGEST?.summary],
      ["TRANSFER_TARGETS.summary", cur.pd.TRANSFER_TARGETS?.summary],
      ["STANDINGS_COMMENTARY.overview", cur.pd.STANDINGS_COMMENTARY?.overview],
    ];
    for (const [label, text] of surfaces) {
      if (!text) continue;
      const hits = [...new Set((norm(text).match(PHRASE) ?? []).map((h) => h.toLowerCase()))];
      if (hits.length) note("dates", `${label}: ${hits.join(", ")}`);
    }
  }
}

// ─── CHECK 12 — known corrections must not regress ─────────────────────────
// docs/KNOWN-CORRECTIONS.md is the ledger of things a previous auditor already
// fixed. Each entry may declare `forbid:` a regex that must NOT reappear.
{
  let led = null;
  try { led = readFileSync(join(REPO, "docs/KNOWN-CORRECTIONS.md"), "utf8"); } catch {}
  if (!led) {
    warn("regressions", "docs/KNOWN-CORRECTIONS.md not found, regression guard skipped");
  } else {
    const hay = [cur.app, cur.root, readFileSync(join(REPO, PD), "utf8"), readFileSync(join(REPO, LD), "utf8")].join("\n");
    // Strip fenced code blocks first, so the format EXAMPLE in the ledger's own
    // documentation is not parsed as a live rule.
    const ledBody = led.replace(/```[\s\S]*?```/g, "");
    const entries = [...ledBody.matchAll(/^-\s*forbid:\s*`([^`]+)`\s*(?:—|--)\s*(.+)$/gim)];
    for (const [, pattern, why] of entries) {
      let re;
      try { re = new RegExp(pattern, "i"); } catch { warn("regressions", `bad regex in ledger: ${pattern}`); continue; }
      if (re.test(hay)) fail("regressions", `re-introduced a previously corrected error (/${pattern}/): ${why}`);
    }
    note("regressions", `${entries.length} forbid-rule(s) checked from docs/KNOWN-CORRECTIONS.md`);
  }
}

// ─── output ────────────────────────────────────────────────────────────────
rmSync(scratch, { recursive: true, force: true });

if (JSON_OUT) {
  console.log(JSON.stringify({ today: TODAY, base: BASE, changedNames: CHANGED_NAMES, fails, warns, notes }, null, 2));
} else {
  const line = (s) => console.log(s);
  line("");
  line(`preflight-audit — ${TODAY}, base=${BASE}, changed-names=[${CHANGED_NAMES.join(", ") || "none"}]`);
  line("─".repeat(74));
  for (const n of notes) line(`  note  [${n.check}] ${n.msg}`);
  if (notes.length && (warns.length || fails.length)) line("");
  for (const w of warns) line(`  WARN  [${w.check}] ${w.msg}`);
  if (warns.length && fails.length) line("");
  for (const f of fails) line(`  FAIL  [${f.check}] ${f.msg}`);
  line("─".repeat(74));
  line(fails.length ? `${fails.length} FAIL, ${warns.length} warn — DO NOT PUBLISH` : `clean (${warns.length} warn)`);
  line("");
}

process.exit(fails.length ? 1 : 0);
