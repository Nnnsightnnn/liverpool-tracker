---
name: liverpool-tracker-update
description: Refreshes the Liverpool FC tracker for the IN-SEASON phase: results, team news, injuries and tactics via fresh web search, an opposition dossier for the next fixture, form and xG, squad availability and points pace, then a mechanical preflight audit and publish to the live site. The transfer ledger is dormant until January.
---

**PHASE: IN-SEASON.** The English summer window shut at 23:00 BST on 1 September 2026. The transfer ledger has been archived to `~/liverpool-tracker/src/transferArchive.js` behind a `WINDOW.open === false` flag and is NO LONGER refreshed daily. The tracker is now a season-analysis product: results, form and xG, opposition scouting, squad availability, and points pace. STEP 3.5 (transfer ledger) is SKIPPED while the window is shut; STEPS 3.6 and 6.6 replace it.

**Reopening in January:** flip `WINDOW.open` to `true` in `src/transferArchive.js`, restore the `targets` nav entry and route in `src/App.jsx` (the whole component family from `HeatPill` to `TargetsView` is still there, unrouted and tree-shaken out of the bundle), and STEP 3.5 re-arms. `scripts/preflight-audit.mjs` reads the same flag, so it needs no edit either.

You are updating the Liverpool FC 2026-27 season tracker app. The project lives at ~/liverpool-tracker and has FIVE key files whose hand-written copy goes stale fast:
1. ~/liverpool-tracker/liverpool-tracker.jsx (standalone root copy — contains LATEST_NEWS, NEXT_MATCH, RESULTS)
2. ~/liverpool-tracker/src/playerData.js (Vite app source of truth — contains PLAYERS, RSS_FEEDS, TEAM_LOGOS, NEXT_MATCH, RESULTS, NEWS_DIGEST, DISPATCHES, STANDINGS, STANDINGS_COMMENTARY, plus the four in-season analysis exports OPPOSITION, FORM_TRENDS, SQUAD_LOAD and SEASON_PROJECTION)
3. ~/liverpool-tracker/src/lineupData.js (predicted-lineup feature — contains FORMATIONS with defaultXI, PLAYER_EVIDENCE, DEFAULT_FORMATION, PREDICTION_NOTE)
4. ~/liverpool-tracker/src/transferArchive.js (DORMANT — the closing state of the summer ledger plus the `WINDOW` flag. Do not refresh while `WINDOW.open === false`, and do not delete it.)
5. ~/liverpool-tracker/src/App.jsx (the FRONT PAGE itself — contains THREE pieces of hand-written copy: the cover deck (the literary standfirst paragraph directly under the "Anfield. May 2026." hero headline, class `cover-deck`), the editor's letter lead paragraph (the New-Yorker-style hero copy under "In this issue", class `cover-letter-lead`), AND the footer quote (the italic pull-quote above the matchday programme footer, class `footer-quote`). All three are HARDCODED in App.jsx and are the FIRST thing a returning fan sees. They go stale the fastest because they're tied to a specific moment.

The root jsx and src/playerData.js must stay in sync for the fields they share (NEXT_MATCH, RESULTS, player statuses). Changes to one must be mirrored in the other. src/lineupData.js is src-only.

## STEP 0: READ THE PREVIOUS VERSION (CRITICAL — DO THIS BEFORE ANYTHING ELSE)

The biggest failure mode of this skill is recycling the SAME quotes, the SAME headlines, and the SAME topic carousel across multiple consecutive runs — so the front page looks unchanged to a returning fan even though the run "completed." Prevent this by establishing what is ALREADY there before you write anything new.

Before any edit, do all of the following:

1. **Read the current `NEWS_DIGEST.summary` lead sentence** in `~/liverpool-tracker/src/playerData.js`. Write down its anchor (the story it leads with). The new summary MUST lead with a DIFFERENT anchor story unless that anchor only emerged in the last 24 hours and is still the single biggest story.
2. **Read every `keyTopics[].title` and the first ~30 words of each `keyTopics[].detail`.** Note any direct quotes (anything in single or double quotes) and any topic anchors. These form the **carry-over blacklist** for this run.
3. **Read the top 6 `LATEST_NEWS[].title` strings** in `~/liverpool-tracker/liverpool-tracker.jsx`. These are likely overlapping with the keyTopics. Add their anchors to the blacklist.
4. **Skim every `injuryNote` in PLAYERS for the predicted XI** (in both files). Note any direct quotes lifted from press conferences — these get rotated too.
5. **Read the current `OPPOSITION.opponent` and `.summary` lead**, and the `FORM_TRENDS.headline`, `SQUAD_LOAD.headline` and `SEASON_PROJECTION.headline` in `~/liverpool-tracker/src/playerData.js`. If `OPPOSITION.opponent` no longer matches `NEXT_MATCH.opponent`, the dossier is pointing at a played fixture and must be rebuilt from scratch this run, not edited. The three analysis headlines rotate their lead clause every run.
6. **(WINDOW OPEN ONLY) Read the current `TRANSFER_TARGETS.summary` lead sentence** in `~/liverpool-tracker/src/playerData.js`. Note its anchor (the in/out move it leads with) and any quoted speech — the new summary must lead with a DIFFERENT anchor. Also skim the current `heatTier` / `probability` on each `incoming[]` and `outgoing[]` entry so you know what state the ledger is in before you move it.
7. **Run `git log --oneline -5` in ~/liverpool-tracker** to confirm the timing of the previous run. If the previous run committed within the last 24 hours, the rotation pressure is HIGHEST. If it's been 3+ days, you can be more permissive.

Carry this blacklist forward — every subsequent step (FRESH WEB SEARCHES, LATEST_NEWS, NEWS_DIGEST, TRANSFER_TARGETS, DISPATCHES, injury notes) must consult it.

## ROTATION RULES (apply to every step below)

These rules override the "recency bias" framing in later steps when there's a conflict. The goal is that a fan returning 48 hours later sees a meaningfully different front page, NOT the same six storylines reskinned with a new date stamp.

- **No quote may appear in two consecutive runs.** If "He tried everything to be in it" or "Mo is close to returning" or "I'm 100% convinced" was in yesterday's keyTopics or summary, it cannot appear in today's. Use a different quote from the same press conference, OR drop the quoted-speech framing entirely and paraphrase.
- **At least 60% of `keyTopics` entries must be NEW.** "New" means a topic anchor not present in the previous run's `keyTopics[].title`. You may keep 30-40% as carry-over for genuinely ongoing storylines (e.g., Salah farewell, league position) — but rotate the detail framing each time (different stat, different quote, different angle).
- **The LEAD of `NEWS_DIGEST.summary` (first sentence) must anchor on a DIFFERENT story than the previous run's lead.** If yesterday led with "Joe Gomez breaks dressing-room silence," today cannot. Lead with whatever has emerged in the last 12-24 hours — press conferences, transfer pickups, training reports.
- **The top 3 `LATEST_NEWS` entries must be different headlines from the previous top 3.** Same news cycle is fine; same exact headlines is not.
- **The LEAD of `TRANSFER_TARGETS.summary` must anchor on a DIFFERENT story than the previous run's lead**, and its day-of-week anchor must match today. `generatedAt` must be re-stamped to today every run. Individual entry `rumorNote`s carry over (the ledger persists), but any note you touch this cycle must rotate its lead clause.
- **InjuryNote lead clauses rotate.** After the date stamp ("Tue May 12 — ..."), the FIRST clause must offer a different framing than the previous run's first clause. The factual body underneath can carry over, but the lead beat changes.
- **DISPATCHES rewrite from scratch every run** (already required — Step 4). The rotation rule reinforces this: no headline, byline, dateline, or body opener may match the previous run.

If you find yourself wanting to recycle a quote or topic, that's the signal to widen the search — look for fresh angles like: post-match reactions from yesterday's press round, today's transfer-LIVE blog leaders, pundit columns, fan-petition / culture-of-the-club stories, opposition team news, weather/atmosphere previews, academy/loanee news, youth-team callups, women's team crossover, sponsorship/kit news, statue/anniversary/memorial pieces, podcast lead segments, X/social-media discourse trends. Liverpool has 80+ daily content outlets; the cycle changes every 12 hours.

## STEP 1: FRESH WEB SEARCHES

Run AT LEAST 5 separate web searches to gather the MOST RECENT Liverpool news. **In-season the mix is MATCH-SHAPED, not market-shaped.** Use varied queries like:
- "Liverpool FC news today"
- "Liverpool [last opponent] player ratings" / "Liverpool [last opponent] match report" (if a game has just been played)
- "Liverpool FC injury update latest" / "Liverpool injury return dates"
- "Liverpool vs [NEXT_MATCH opponent] preview team news"
- "Andoni Iraola press conference [today's date]"
- "Liverpool FC predicted lineup next match" or "Liverpool team news [next opponent]"
- "Liverpool tactics analysis [formation / phase of play]"

**Underlying-numbers searches (REQUIRED in-season, at least 2).** The Analysis view is only as good as its sources, and xG is the one number this skill must never estimate:
- "Liverpool [opponent] xG expected goals" — Opta Analyst (theanalyst.com) is the highest-quality source and usually publishes a stats page per match
- "Liverpool [opponent] stats Opta" / "Liverpool player ratings [opponent]"
- "Premier League xG table [month]" for season-level context

Also search for any BREAKING or TRENDING Liverpool stories you find referenced. Follow up on leads — if search results mention a developing story (e.g., "Gerrard interested in returning to Liverpool"), do an additional targeted search to get the full details.

The goal is to capture what a Liverpool fan checking the news RIGHT NOW would be reading about.

**Rotation-driven supplementary searches:** Once you have the blacklist from STEP 0, run AT LEAST 2 MORE searches specifically aimed at finding stories NOT in the previous run's keyTopics. Examples of fresh-angle queries:
- "Liverpool [date today] press conference quotes" — to mine the LATEST presser for an unused line
- "[NEXT_MATCH opponent] vs Liverpool predicted lineup" — opposition team news
- "Liverpool [date today] training session report" — eye-witness training reports
- "Liverpool academy [date today]" or "Liverpool U21 [date today]" — youth/loanee news
- "Liverpool [former player name] return" — sentimental returns (Klopp, Henderson, Carragher pieces)
- "Liverpool [petition / fans / culture] [date today]" — fan-culture / stadium-atmosphere pieces
- "Liverpool sporting director Hughes [date today]"
- "Salah farewell [latest angle]" — humanizing rather than tactical farewell pieces

You cannot use a topic in keyTopics if you didn't actually find a fresh article anchoring it.

**IN-SEASON SWEEP (MANDATORY EVERY RUN — this is the search that catches the story you do not yet know about).**

Every search above is *storyline-shaped*: it hunts for updates on things the page is ALREADY tracking. That is precisely how a club-defining event gets missed. During the window this step chased confirmed transfers; in-season the same trap has different shapes. Run AT LEAST 3 **name-agnostic** searches whose only job is to find events, regardless of whether the page is tracking them:

- "Liverpool breaking news [today's date]" — catches anything
- "Liverpool injury blow" / "Liverpool ruled out weeks" — a season-ending injury is the in-season equivalent of a marquee signing
- "Andoni Iraola sacked OR under pressure OR contract" — a managerial change is still the highest-consequence event available, and it moves fastest
- "Liverpool FC statement" — the club's own channel for the things nobody predicted (bans, illness, bereavement, ownership, stadium)

Then run a **need-shaped** search for every position the CURRENT page calls a crisis in `SQUAD_LOAD.depthRisk`. The squad is closed until January, so a fresh injury in a `critical` department is the single most consequential thing that can happen to this team, and it will not surface from a storyline query.

**Chase-any-unfamiliar-name rule:** if ANY search result title or snippet pairs a Liverpool player with *injured / ruled out / stretchered / surgery / banned / suspended / doubt / withdrew*, you MUST run a dedicated follow-up search on that name before writing anything, even if the name is unfamiliar. Unfamiliarity is a reason to chase it, NOT to skip it.

**Transfer news is now EXCEPTION traffic, not routine traffic.** The window is shut. Do not spend searches on rumour and fee speculation; nothing can be bought until January. DO still chase, and DO still write up, the four transfer-shaped things that remain live in-season: (1) a contract signed, extended, or run down (Van Dijk's deal runs only to 2027); (2) a loan recall, a buy-back triggered, or a loanee's form; (3) a January link credible enough to be a standing storyline; (4) a window that is still open elsewhere (the Turkish window ran past England's, and Kostas Tsimikas's Besiktas move was live after the English deadline). These belong in `NEWS_DIGEST` and `DISPATCHES`, NOT in the archived ledger, which stays frozen.

**Binary-fact confirmation (MANDATORY — this is how the front page goes wrong).** For any HIGH-IMPACT BINARY claim — a manager hired or SACKED, a transfer confirmed or collapsed, a player fit or ruled-out, a contract signed or walked away from, a takeover done — do NOT infer the answer from a single search-summary sentence, a digest blurb, or a clickbait headline. These routinely carry stale or contradictory framing (e.g. a "club satisfied to keep the manager" summary published the same morning he is sacked). Run a DEDICATED confirming search — `"[name] sacked / appointed / signed [club] [today's date]"` — and require at least one credible outlet's explicit confirmation before you state it as settled fact on the public page. If the reporting genuinely conflicts, present it as contested ("reports claim…", "yet to be confirmed"), never as settled. When two searches disagree on a binary, the more recent and more specific one wins — and you run a third to break the tie.

## STEP 1.6: PICK TODAY'S LEAD STORY (REQUIRED — this drives the whole front page)

Before writing ANYTHING, decide the single biggest Liverpool story of the last 24-48 hours. The #1 recurring failure of this skill is burying a club-defining event (a manager sacking, a marquee signing) beneath rotation filler or a softer human-interest lead, so a returning fan does not see the most important news first. Prevent it by ranking candidates by CONSEQUENCE, not by how fresh or how literary they are:

**IN-SEASON TIERS** (the window is shut, so a transfer rumour can no longer outrank a football result):

- **Tier 1 — club-defining:** manager hired or SACKED; ownership/takeover change; a death; a major trophy won or lost; relegation/qualification decided.
- **Tier 2 — season-defining:** a Premier League or European match just PLAYED (the result always leads the edition it falls in); a season-ending or long-term injury to a key player; a captain/legend departure; a red card or ban that reshapes selection.
- **Tier 3 — developing:** team news and selection for the next fixture; a notable press-conference line; a returning player back in full training; a tactical shift the reporting has actually identified; a contract situation moving.
- **Tier 4 — colour:** culture/sentiment pieces, memorials, anniversaries, academy/loanee news, fixture announcements, January speculation.

**The result rule.** If a match has been played since the previous edition, that result is AT LEAST Tier 2 and leads every surface, full stop. A page that opens on a press-conference quote the morning after a defeat is the in-season version of burying the lead. If no match has been played since the last edition, lead on the freshest Tier-3 item and use the fixture ahead as the frame.

The highest-tier story available is **THE LEAD**. It MUST appear, in lead position, on EVERY front-page surface in the SAME run:
- `NEWS_DIGEST.summary` — the FIRST sentence
- `NEWS_DIGEST.keyTopics[0]` — the first card
- `LATEST_NEWS[0]` in `liverpool-tracker.jsx` — the top of the wire tape
- `DISPATCHES` card `"01"`
- `App.jsx` cover deck (its opening) AND the editor's-letter lead paragraph (its opening)
- where relevant, the `footer-quote` and `STANDINGS_COMMENTARY.overview` lead

If a Tier-1 event happened in the window, NOTHING lower may lead any surface — the rotation rules still apply to everything BELOW the lead, but they never demote the lead itself. (Rotation prevents the same story leading two days running ONLY when no bigger story has emerged; a genuine Tier-1/Tier-2 break overrides the "lead must differ from yesterday" rule.)

**CONTRADICTION SWEEP (do this the moment the lead is set, and again before commit).** Grep the whole repo for any copy that states the OPPOSITE of the lead, and rewrite or delete every hit the same run. Examples:
- lead = "Slot sacked" → search `grep -rni "slot stays\|slot remains\|insists slot\|satisfied to keep" src/ liverpool-tracker.jsx`
- lead = "Player X signed" → search for "X linked / X a target / chasing X"
- lead = "Player Y ruled out" → search for "Y available / Y starts / Y in contention"

A front page that simultaneously announces a sacking AND says the manager is staying is the single worst failure this skill can ship — worse than a stale date. The contradiction sweep is non-negotiable.

## STEP 2: UPDATE LATEST_NEWS (in liverpool-tracker.jsx)

Replace the LATEST_NEWS array with 12-15 real headlines sourced from your web searches. Rules:
- Every headline must come from an actual article you found in your searches
- Use the real source name (e.g., "This Is Anfield", "BBC Sport", "Sky Sports", "ESPN", "Liverpool.com", "Empire of the Kop", etc.)
- Set the `time` field relative to today (e.g., "today", "1d ago", "2d ago", "1w ago")
- ORDER BY RECENCY: newest stories first, oldest last
- Category should be "fan", "major", or "official" based on source type
- Include a good mix of topics: transfers, injuries, match previews/results, club news, tactical analysis

## STEP 3: UPDATE NEWS_DIGEST (in src/playerData.js)

This is where RECENCY BIAS matters most. The NEWS_DIGEST must feel CURRENT — like a briefing a fan would read this morning.

### summary field:
- Lead with whatever is the BIGGEST story from the last 24-48 hours
- The first sentence should be about TODAY'S or YESTERDAY'S most important development
- Work backwards chronologically — mention older ongoing storylines after the fresh news
- Always include the current date context (e.g., "As of April 3..." or "Heading into the weekend...")
- Keep it 3-5 sentences

### keyTopics array:
- ORDER BY RECENCY: the freshest/most-breaking stories go FIRST in the array
- Stories from the last 1-2 days should be the first 3-4 items
- Each topic's `detail` field MUST mention WHEN the story broke or was reported (e.g., "reported on Tuesday", "emerged overnight", "confirmed yesterday")
- Include 8-12 key topics total
- Older ongoing storylines (Salah departure, league position, UCL campaign) can still appear but should be AFTER the fresh news
- If a story is developing or has new information, update the existing topic — don't keep stale versions
- Categories: "transfers", "matches", "injuries", "tactics", "general"
- **Rotation enforcement (re-stated from ROTATION RULES):** At least 60% of `keyTopics` entries must be NEW topic anchors not present in the previous run. Quotes used in the previous run's keyTopics cannot be reused. Carry-over topics must rotate their `detail` framing (different angle, different stat, different source quote).

### generatedAt field:
- Set to the current ISO timestamp

### sources array:
- List only sources you actually used from your web searches

## STEP 3.5: REFRESH TRANSFER_TARGETS — **SKIPPED WHILE THE WINDOW IS SHUT**

> **IN-SEASON: DO NOT RUN THIS STEP.** `src/transferArchive.js` has `WINDOW.open === false`, the ledger is frozen at its 1 September closing state, the Targets view is unrouted, and `scripts/preflight-audit.mjs` skips every transfer check. Re-stamping `TRANSFER_TARGETS.generatedAt` in-season is actively wrong: it claims a refresh that did not happen. Go straight to STEP 3.6. Anything transfer-shaped that IS live in-season (contracts, loans, recalls, January links) goes in NEWS_DIGEST and DISPATCHES instead. The rest of this step applies only once `WINDOW.open` is flipped back to `true` in January.

The Transfer Targets view (`view === "targets"`) is the tracker's transfer-window ledger — `TRANSFER_TARGETS`, now in `src/transferArchive.js` — and it goes stale exactly like NEWS_DIGEST: rumour heat, fees, and probabilities move every day a window is open, and the `summary` lead carries a day-of-week anchor that dates instantly. **Refresh it every run.** Unlike DISPATCHES you do NOT rewrite the whole ledger from scratch — the entries persist across runs — but you MUST, on every run, re-stamp the timestamp, re-lead the summary, and re-validate every live entry against today's searches.

This step shares the searches from STEP 1. If a window is genuinely dormant (deep off-season, no incoming/outgoing reporting in your searches), still re-stamp `generatedAt` and refresh the `summary` lead to say so, and leave entries unchanged — note that in your output.

### Top-level fields (always refresh):
- `generatedAt`: set to the current ISO timestamp — NEVER leave yesterday's.
- `summary`: 3-6 sentences. **The lead sentence must anchor on the freshest transfer development of the last 24-48 hours and must NOT reuse the previous run's lead anchor** (same rotation rule as `NEWS_DIGEST.summary` — see ROTATION RULES). Open on the biggest in/out movement, then work backward to the standing storylines. Cross-check the day-of-week against today's date — a "Thursday morning…" lead on a Friday run is the most visible failure here.
- `sources`: the global array — list only publications you actually used this run.

### `incoming[]` — for each target, re-validate against today's searches:
- Identity (rarely changes): `name`, `age`, `position`, `role`, `nationality`, `foot`, `image`.
- Club: `currentClub`, `currentLeague` (update on a confirmed move).
- Fee: `feeMin` / `feeMax` / `feeCurrency`, `marketValue`, `wageBand` ("A"–"D").
- Contract: `contractExpiry`, `releaseClause`, `contractNote`.
- Heat: `probability` (0-100) and `heatTier` (`"hot"` | `"warm"` | `"cool"` | `"done"` | `"dead"`) — move these when reporting moves. A target whose deal is confirmed flips to `"done"`; a target who joins a rival or signs elsewhere flips to `"dead"` (keep it one run as a tombstone, then drop next run).
- `sources[]`: `{ name, tier }` with credibility tier S/A/B/C — refresh to the outlets actually carrying the story now.
- `rumorNote`: dateline-prefixed (e.g. *"Anfield · 29 May —"*), italic-serif editorial voice. **Rewrite this whenever the target's situation moved this cycle** (new fee, new heat, new suitor); rotate the lead clause if you touch it.
- `positionFit`: `replaces` / `competesWith` / `depthAfter`. `stats`: per-position key numbers. `lastUpdated`: the date you last touched the entry — bump it when you change anything.
- **Add** a new entry when a fresh, credibly-sourced incoming target appears in your searches; **drop** dead/done tombstones from the previous run.

### `outgoing[]` — for each departure:
- `name`, `position`, `destination`, `feeAsk` (`min`/`max`/`currency`), `probability`, `heatTier`, `sources`, `note`.
- Keep it in sync with reality: when a sale confirms, flip `heatTier` to `"done"`; when a player who was leaving signs a new deal, flip to `"dead"` then drop. Keep this consistent with the PLAYERS sell-to-buy framing and any departure named in NEWS_DIGEST / DISPATCHES.

### Cross-file consistency (REQUIRED):
- Add new club crests to `TEAM_LOGOS` whenever a target's `currentClub` is not already present (typically `https://resources.premierleague.com/premierleague/badges/50/t<id>.png`, or the club's own CDN for non-PL sides).
- A player named as a confirmed departure here must not contradict their PLAYERS `status` / `injuryNote`, the NEXT_MATCH lineup, or the DISPATCHES — if a transfer flips a player's availability, mirror it in STEP 5 (PLAYERS) and STEP 7 (lineup) the same run.

## STEP 3.6: REFRESH THE OPPOSITION DOSSIER (`OPPOSITION` in src/playerData.js) — REQUIRED EVERY RUN

This is the in-season replacement for the transfer ledger, and it powers the **Opposition** view. It scouts the side in `NEXT_MATCH`. It goes stale the instant a fixture is played, and a dossier still pointing at last week's opponent is the most visible in-season failure this skill can ship. `scripts/preflight-audit.mjs` hard-fails if `OPPOSITION.opponent` does not equal `NEXT_MATCH.opponent`, or if `predictedXI` is not exactly 11 names.

### Always refresh
- `generatedAt` — current ISO timestamp, every run without exception.
- `opponent`, `shortName`, `fixture` (`date`, `venue`, `home`, `competition`, `broadcast`) — must mirror `NEXT_MATCH` exactly.
- `manager`, `formation`, `leaguePosition` — cross-check `leaguePosition` against the live `STANDINGS` array you just rebuilt in STEP 6.5, not against the reporting, which lags.

### The written fields
- `summary` (4-6 sentences): who they are this season, what they have spent, what their two or three most recent results say. Same editorial register as the rest of the app. Rotate the lead clause every run.
- `shape` (2-3 sentences): the formation in motion, not the formation as a number. Where the full-backs go, who drops in, what their goalkeeper does with the ball. Name the pattern that actually threatens Liverpool.
- `liverpoolAngle` (3-5 sentences): the only genuinely analytical field on the page. Join their strength to a documented Liverpool weakness, using `SQUAD_LOAD.depthRisk` and `FORM_TRENDS.diagnosis` as your evidence. If they attack the right and Liverpool's right-back department is one fit senior player, say so in those terms.

### The structured fields
- `keyPlayers[]`: 3-5 entries of `{ name, role, threat, source }`. `threat` must carry at least one real number (goals, assists, chances created, shots) attributed to a named source. No number, no entry.
- `predictedXI[]`: exactly 11 surnames in formation order, from a named preview (Squawka, ESPN, Sports Mole, Fantasy Football Hub).
- `absentees[]`: `{ name, issue, status }` with `status` one of "Out" or "Doubt".
- `recentForm[]`: their last 2-4 matches, `{ date, opponent, home, score, result, note }`, newest first.
- `modelLine`: `{ source, liverpool, draw, opponent, note }` when a model or market probability is available. Report it, do not invent it, and do not present a betting market as a prediction. Set to `null` when nothing credible is found.
- `sources[]`: only publications actually used this run.

### Opposition off-field sweep (added 3 Oct 2026)
Every run, also run a NAME-AGNOSTIC search on the opponent itself (`"[opponent] news today"`, `"[opponent] statement"`), not just its team news. On 29 Sep 2026 Manchester City, the next opponent, were found guilty in the Premier League financial-breaches case and appealed on 1-2 Oct, and three consecutive editions never mentioned it because every search was Liverpool-shaped. Off-field news about the next opponent (rulings, sanctions, sackings, takeovers) belongs in `OPPOSITION.summary` and, when it outranks the Liverpool news of the day, in the lead.

### When the fixture has just been played
Re-point the whole dossier at the NEW `NEXT_MATCH` opponent the same run. Do not leave a played fixture on the board.

## STEP 4: REFRESH DISPATCHES (in src/playerData.js) — REQUIRED EVERY RUN

The DISPATCHES export is the long-form "front page" of the tracker — 5 hand-curated cards in a New-Yorker-style voice that surface beneath the wire feed. They go stale faster than anything else on the site because they're literary, dated, and unmistakably *of a moment*. **Replace the entire DISPATCHES array on every run.** Do not pick and choose — if a card was written before today's news cycle, it's stale.

### What to write:
- Exactly 5 dispatches, numbered "01" through "05"
- Each card has: `n`, `headline`, `byline` (real source from your searches), `dateline` (e.g., "Anfield · 9 May" — venue + date the event happened), `category`, `body`
- `body`: 60-120 words, narrative voice (no bullets), past-tense for events, present-tense for ongoing situations. Channel a feature writer, not a wire reporter — the wire feed already covers the headlines.
- Each card should map to a distinct beat: a match report, a manager moment, an injury/squad story, a transfer dispatch, and a wider-context piece (race for Europe, farewells, controversies, etc.).
- Datelines must be from the last 7 days at the OUTSIDE — ideally all from the last 48 hours.

### Categories (use sentence case, no all-caps):
- "Match Report" · "Manager" · "Injuries" · "Transfers" · "Race for Europe" · "Farewells" · "Tactics" · "Football News"

### Recency rule:
- If the most recent RESULTS entry is older than 5 days AND the next match has not yet been played, lean the dispatches toward transfer/squad/manager-of-the-week stories rather than match recaps.
- A dispatch with a dateline more than 7 days old MUST be replaced — no exceptions.

## STEP 4.5: REWRITE THE COVER COPY IN App.jsx — REQUIRED EVERY RUN

This step exists because hand-written copy in `~/liverpool-tracker/src/App.jsx` was being missed by previous runs of this skill. These strings are the FIRST thing the user sees on the page. They MUST rotate and they MUST reference today's actual situation — a stale day-of-week or a stale countdown ("eight days until Anfield" / "ninety minutes from now") on the cover is the single most visible failure this skill can ship.

### The three strings to rewrite:

1. **Cover deck** (search for `cover-deck` in App.jsx, around line 345-353). This is the literary standfirst paragraph that sits directly under the giant "Anfield. May 2026." hero headline — the VERY FIRST prose on the site. ~3-4 lines, ~45-60 words. It opens on a day/moment anchor, frames the league position and the run-in (recent result behind, rivals alongside, next match ahead), and closes on the stakes of the next fixture. Rewrite the ENTIRE paragraph each run. CRITICAL: the day-of-week and any "time until kickoff" framing must match TODAY — cross-check against the NEXT_MATCH date/time and today's date before you write it. If the next match is being played today, it cannot say "eight days until Anfield"; if it is days away, it cannot say "ninety minutes from now"; and the deck must never contain two contradictory time framings at once.

2. **Editor's letter lead paragraph** (search for `cover-letter-lead` in App.jsx, around line 360-385). This is the New-Yorker-style hero paragraph under the "In this issue" SectionHead. It's about 4-7 lines of prose, the first word styled in red italic. The opener typically names a day-of-week ("Friday" / "Sunday") and an event, sets the stakes for the run-in, names a player situation, and closes on a literary punch line. Rewrite the ENTIRE paragraph each run — opener word, named day, story anchor, closing line. There is also a second `cover-letter-body` paragraph below it; that one is more evergreen ("Inside, the squad as a roster..."), don't touch UNLESS it is actively wrong (e.g. it names the wrong day, or carries a stale "N days from now" / "Saturday afternoon" countdown — fix those).

3. **Footer quote** (search for `footer-quote` in App.jsx, around line 1900-1910). A single italic pull-quote in serif, ~30 chars max, sitting above the matchday-programme footer. It should be evocative, voice-y, and tie to the current moment (a goodbye, a return, a stake, a moment). Rotate every run — never repeat across consecutive runs.

### Rules for all three:
- **Must OPEN on today's lead story (from STEP 1.6) whenever a Tier-1 or Tier-2 event exists.** The cover deck and the editor's-letter lead are the most prominent prose on the site; if a manager has been sacked, a marquee deal confirmed, or a big match just played, that is the first thing both paragraphs address — not a softer colour piece. A colour/sentiment lead (a memorial, an anniversary, a World Cup squad omission) is only appropriate when nothing higher-tier broke this cycle.
- **Must rotate every run.** No phrase that appeared in the previous commit may appear in this one. Run `git show HEAD:src/App.jsx | grep -A 6 'cover-deck'`, `git show HEAD:src/App.jsx | grep -A 8 cover-letter-lead` and `git show HEAD:src/App.jsx | grep -B 1 -A 1 footer-quote` to see what was there before.
- **Must reference TODAY's actual situation.** Cross-check the day-of-week and every countdown phrase ("eight days", "ninety minutes from now", "this afternoon", "a week Sunday", "Saturday afternoon") against the real current date and the NEXT_MATCH date/time. If today IS matchday, say so; if the match has already been played, the copy must move on to the result and the next fixture. If Salah is out, the lead should acknowledge it. If a big sentiment thread just emerged (Klopp return, a farewell, a derby, a coaching change), it belongs in the copy.
- **Voice register: New Yorker / Granta.** Restrained, present tense for ongoing situations, comma-rich, no exclamation points, no all-caps, no emojis. Italic words used sparingly for emphasis.
- **Length:** cover deck 2-4 sentences; editor's letter lead paragraph 5-8 sentences; footer quote ≤ 8 words.
- **The first WORD of the editor's letter lead paragraph should be the day-of-week or moment anchor** (e.g., `Friday`, `Tuesday`, `Saturday`, `Tonight`), styled inside the existing `<span>` that gives it the red italic treatment. Do not remove or restyle the span — only swap the word inside it.
- **Same-day evening pass: change that anchor word too** (added 5 Oct 2026). The preflight's `cover-letter-lead` rotation check reads only up to the first closing tag, i.e. the word inside the span, so a Monday-evening letter opening on `Monday` after a Monday-morning letter that also opened on `Monday` FAILS as "verbatim", however different the rest is. Use a moment anchor (`Tonight`, `Evening`) for the evening pass.

### How to write a fresh editor's letter when you're stuck:
- Lead with the next match (day, venue, what's on the line)
- Pivot to the biggest player story of the moment (an injury, a farewell, a quote)
- Use the third or fourth sentence to introduce a tension or contradiction
- End on a literary punch — a phrase that compresses the moment into a clause

### How to write a fresh footer quote when you're stuck:
- Pull a line from a press conference, dispatch, or fan voice that landed in the last 48 hours
- OR coin one that compresses the week's narrative (e.g., "Every farewell makes room for a return.")
- OR borrow a closing clause from one of the 5 DISPATCHES you just wrote

## STEP 5: UPDATE PLAYER DATA (if needed)

Only update PLAYERS array entries if your searches reveal:
- New injury news (update status and injuryNote)
- A player returning from injury (change status back to "fit" or "doubtful")
- Match results that affect appearances/goals/assists (update stats)

Do NOT change stats speculatively — only with confirmed match data.

Remember to mirror any player status/injuryNote changes in BOTH liverpool-tracker.jsx AND src/playerData.js.

## STEP 6: UPDATE MATCH DATA (if needed)

- If a new match has been played, add it to RESULTS in both files
- Update NEXT_MATCH if the upcoming fixture has changed
- Keep both files in sync

## STEP 6.5: REFRESH LIVE STANDINGS + COMMENTARY (REQUIRED — every run)

The standings table is LIVE — sourced from ESPN's public Premier League standings endpoint and rewritten on every skill run. Two exports in `src/playerData.js` need to be refreshed each time: `STANDINGS` (the 20-row table data) and `STANDINGS_COMMENTARY` (your writing).

### 6.5a — Fetch ESPN standings

The endpoint:
```
http://site.api.espn.com/apis/v2/sports/soccer/eng.1/standings
```

Use Python in bash to fetch + transform into the app's row shape. The script below prints a copy-pasteable `STANDINGS` array:

```bash
curl -s -m 15 'http://site.api.espn.com/apis/v2/sports/soccer/eng.1/standings' | python3 -c "
import json, sys
d = json.load(sys.stdin)
entries = d['children'][0]['standings']['entries']
def stat(stats, name):
    for s in stats:
        if s['name'] == name: return s['displayValue']
    return ''
NAME_MAP = {
    'Arsenal':'Arsenal','Man City':'Manchester City','Man United':'Manchester United',
    'Aston Villa':'Aston Villa','Liverpool':'Liverpool','Bournemouth':'Bournemouth',
    'Brighton':'Brighton','Chelsea':'Chelsea','Brentford':'Brentford',
    'Sunderland':'Sunderland','Newcastle':'Newcastle','Everton':'Everton',
    'Fulham':'Fulham','Leeds':'Leeds','C Palace':'Crystal Palace',
    'Nottm Forest':\"Nott'm Forest\",'Spurs':'Tottenham','West Ham':'West Ham',
    'Burnley':'Burnley','Wolves':'Wolves',
}
print('export const STANDINGS = [')
for i, e in enumerate(entries, 1):
    t = e['team']; s = e['stats']
    short = t['shortDisplayName']; full = NAME_MAP.get(short, short)
    gd_str = stat(s,'pointDifferential')
    gd_int = int(gd_str.replace('+','')) if gd_str else 0
    desc = e.get('note', {}).get('description', '')
    qual = 'UCL' if 'Champions League' in desc else 'UEL' if 'Europa League' in desc else 'UECL' if 'Conference' in desc else 'REL' if 'Relegation' in desc else ''
    hl = ', highlight: true' if short == 'Liverpool' else ''
    q = f', qualification: \"{qual}\"' if qual else ''
    print(f'  {{ pos: {i}, team: \"{full}\", p: {stat(s,\"gamesPlayed\")}, w: {stat(s,\"wins\")}, d: {stat(s,\"ties\")}, l: {stat(s,\"losses\")}, gd: {gd_int}, pts: {stat(s,\"points\")}{q}{hl} }},')
print('];')
"
```

Replace the entire `STANDINGS = [...]` block in `src/playerData.js` with the script's output, keeping the comment header above it intact. The qualification stripes (`UCL`/`UEL`/`UECL`/`REL`) come from ESPN's `note.description` field — don't hand-assign them.

If ESPN's endpoint is unreachable (rare), keep the existing STANDINGS array, note the failure in your output, and proceed — the rest of the run is not blocked.

**Sanity checks** after the rewrite:
- Liverpool's row has `highlight: true`
- 20 rows total
- Goal-differences are integers (not strings; the script handles the `+` prefix)
- TEAM_LOGOS in `src/playerData.js` has crests for every team name in the new STANDINGS array — if ESPN includes a team that isn't in TEAM_LOGOS (e.g., a newly promoted side), add a crest entry for them (typically `https://resources.premierleague.com/premierleague/badges/50/t<id>.png` — find the ID via the Premier League site)

### 6.5b — Rewrite STANDINGS_COMMENTARY

After the table refreshes, rewrite the `STANDINGS_COMMENTARY` export beside it. The shape:

```js
export const STANDINGS_COMMENTARY = {
  source: "ESPN",
  sourceUrl: "https://www.espn.com/soccer/table/_/league/eng.1",
  matchweek: <STANDINGS[0].p>,
  generatedAt: "<ISO timestamp from today>",
  overview: "<3-5 sentence paragraph>",
  teams: {
    "<team name>": "<one-line note>",
    // ... only newsworthy rows; empty teams render nothing
  },
};
```

**`overview` rules** (3-5 sentences, paragraph prose):
- Lead with whatever the table itself is telling you THIS WEEK — the title race, the top-five fight, the relegation zone, a dramatic mover
- Mention Liverpool's position and what it means in the broader competition picture (UCL/UEL/UECL line, points off the team above/below)
- Tie one sentence to a recent match result if it materially shifted positions (e.g., "Tuesday's Bournemouth-City draw confirmed Arsenal champions")
- Mention where the European-football line is drawn if it's a live storyline
- Same voice as the rest of the app: editorial, paragraph prose, no bullet points. Avoid em dashes wherever possible (prefer commas, colons, periods, or parentheses); match the DISPATCHES register

**`teams` rules** (one-line note per newsworthy row, ~120 chars each, 1-2 sentences max):
- ALWAYS include Liverpool — what their position means right now (UCL secured? must-win to qualify? mid-table dead-rubber?)
- Include the top 4-5 teams (title race + UCL chase)
- Include any team in a notable storyline: the team Liverpool just played, the team Liverpool plays next, a coaching change (e.g., "Xabi Alonso arrives July 1" for Chelsea), the relegation race, a promoted side overachieving/underachieving
- Skip rows that aren't newsworthy — empty entries render nothing
- The UI renders these in italic serif below the row, with a colored qualification stripe

**`matchweek` rule:** set to `STANDINGS[0].p` (every team's games-played number once we're past Christmas; ESPN harmonises this).

**`generatedAt` rule:** current ISO timestamp.

**Rotation guidance** (consistent with the rest of the skill's rotation rules): on consecutive same-day runs, the `overview` lead beat should rotate alongside the NEWS_DIGEST.summary lead — don't recycle the same opening sentence two days in a row unless the table truly hasn't moved.

### 6.5c — App.jsx changes

You typically don't need to touch `App.jsx` for a standings refresh. `StandingsView` in `src/App.jsx` already imports `STANDINGS_COMMENTARY` from `./playerData.js` and renders the overview + per-team notes automatically. Only edit `App.jsx` if:
- A new qualification tier appears (update `QUAL_COLORS` / `QUAL_LABELS`)
- The commentary schema needs a new field — wire it through `StandingsView`

## STEP 6.6: REFRESH THE ANALYSIS EXPORTS — REQUIRED EVERY RUN

Three exports in `src/playerData.js` power the **Analysis** view. All three carry a `generatedAt` the preflight audit checks against today, and all three are cross-checked against the live `STANDINGS` you rebuilt in STEP 6.5.

### THE HOUSE RULE, WHICH OVERRIDES EVERYTHING ELSE IN THIS STEP

**Never invent a number.** xG, shots, minutes and percentages come from a NAMED source or they are `null`. A `null` renders as "awaiting data" and is honest; a plausible-looking fabrication survives into the next edition, gets rewritten as established fact, and is invisible to the auditor because nothing contradicts it. If you cannot source it, leave it null and say so in the adjacent prose. This is the most important instruction in this step.

Opta Analyst (theanalyst.com) publishes a per-match stats page and is the preferred xG source. Squawka, FotMob and Understat are acceptable. A betting preview's "expected goals" figure is not.

### 6.6a — `FORM_TRENDS`
- `generatedAt`, `played` (must equal the Liverpool row's `p` in STANDINGS), `competition`.
- `headline` (3-5 sentences): what the underlying numbers say that the results table does not. Rotate the lead every run.
- `matches[]`: newest first, one per league match played. `{ date, opponent, home, score, result, xgFor, xgAgainst, xgFirstHalfFor, xgFirstHalfAgainst, shotsFor, pending, verdict, source }`. Any figure you could not source is `null`; set `pending: true` when you expect it to become available. `verdict` is 1-2 sentences of plain reading. `source` is mandatory and the preflight fails without it.
- `totals`: aggregate only over matches where the figure exists, and say so in `note` when a total is partial. Do not silently sum a partial column.
- `diagnosis[]`: 3-5 entries of `{ label, detail, severity, source }`, severity one of `high` / `medium` / `low` / `positive`. This is the analytical heart of the view: each entry names a pattern, not a result.
- `optaFacts[]`: 2-4 genuinely interesting sourced facts. These rotate every run and are where the personality lives.

### 6.6b — `SQUAD_LOAD`
- `generatedAt`, `headline` (3-4 sentences on what the closed squad means right now).
- `minutesNote`: the standing caveat about what minutes data is and is not published. Update it as real minutes become sourceable; do not delete it while any figure is unsourced.
- `unavailable[]`: `{ name, issue, expected, note, source }`. Must agree with the PLAYERS `status` and `injuryNote` in BOTH data files and with `src/lineupData.js`. A player here cannot appear in any `defaultXI`.
- `returning[]`: `{ name, issue, status, note, source }` for anyone back in training or building minutes.
- `startersLastMatch`: `{ match, xi, changes, source }` — the confirmed XI from the most recent result, not a prediction.
- `depthRisk[]`: `{ position, level, detail }`, level one of `critical` / `high` / `medium` / `low`. **This array drives the need-shaped searches in STEP 1**, so keep it honest; an understated risk here makes the next run blind to the injury that matters most.

### 6.6c — `SEASON_PROJECTION`
- `played`, `points`, `pointsPerGame` and `projectedPoints` are **arithmetic, not judgement**, and the preflight recomputes all four from the Liverpool STANDINGS row. `pointsPerGame = pts / p`; `projectedPoints = round(ppg * 38)`. Do not round by feel or the audit fails.
- `headline` (2-4 sentences). Early in a season, say plainly that the sample is small; do not dress a two-game pace as a forecast.
- `thresholds[]`: `{ label, points, gap, note }` where `points` is the historical par for that finishing place and `gap` is `points - projectedPoints`, floored at 0. `thresholdNote` must keep saying these are historical norms, not predictions.
- `runIn[]`: the next six league fixtures, `{ date, opponent, home, competition, oppPosition, difficulty }`. `oppPosition` comes from the live STANDINGS; `difficulty` is `hard` for a current top-six side, `medium` for seventh to fifteenth, `easy` below that. Refresh after every played fixture so the list always looks forward.
- `runInVerdict` (2-4 sentences): what a good and a bad return from the next three would actually mean.

## STEP 7: UPDATE PREDICTED LINEUP (src/lineupData.js)

The tracker now has a predicted-lineup feature. After you've finished the news/injury/match updates above, refresh the lineup data so the predicted XI reflects the CURRENT situation for the NEXT_MATCH.

The file src/lineupData.js exports:
- `FORMATIONS` — object keyed by formation name ("4-3-3", "4-2-3-1", "3-4-3"). Each entry has `slots` (positions, DO NOT EDIT these coordinates) and `defaultXI` (player IDs by slot key — THIS is what you update).
- `PLAYER_EVIDENCE` — one-line evidence string per player ID (1-26), surfaced under the token on hover. Keep to ~25-40 chars.
- `DEFAULT_FORMATION` — which formation to show by default ("4-3-3", "4-2-3-1", or "3-4-3").
- `PREDICTION_NOTE` — `{ level: "High"|"Medium"|"Low", reason: "..." }` shown above the pitch.

### What to update:

1. **defaultXI for each formation** — Rebuild the starting XI for each of the three formations based on:
   - Current injuries (an injured player CANNOT be in the XI — replace with next-in-line from PLAYERS)
   - Recent team news (press conference quotes, "expected to start", "managed minutes", rotation patterns)
   - The most recent RESULTS entry (who actually started in the last match is a strong signal)
   - Upcoming fixture context (e.g., PL vs cup rotation, derby-specific selections)
   - Player IDs come from PLAYERS array in src/playerData.js (ids 1-26)

2. **DEFAULT_FORMATION** — If reporting suggests Slot has shifted formation (e.g., "Slot expected to revert to 4-2-3-1"), update this. Otherwise leave as-is (default is "4-3-3").

3. **PLAYER_EVIDENCE** — For every one of the 26 player IDs, refresh the evidence string to reflect the latest status:
   - Injured players: short injury + return timeline (e.g., "Ruptured Achilles · out 9-12 months")
   - Returning players: "Back from [injury] · building minutes"
   - Starters: "Started vs [last opponent] · Form [X.X]"
   - Rotation/bench: "Rotation option · Form [X.X]" or "Backup to [starter]"
   - Academy/fringe: "Academy depth · N senior apps"
   - Keep to ~25-40 chars so it fits the hover tooltip
   - If a player scored or had a notable recent performance, you can mention it (e.g., "Scored vs Fulham · final LFC weeks")

4. **PREDICTION_NOTE** — Update the confidence chip:
   - `level`: "High" when 9+ of the 11 started the most recent match and team news is clear; "Medium" when 6-8 are confirmed / rotation suspected; "Low" when heavy rotation expected or team news is murky
   - `reason`: one sentence referencing the most recent match and any forced changes (e.g., "10 of 11 started vs Everton (Apr 19) · Isak in for Ekitike")

### Rules:
- Every player ID used in defaultXI must exist in PLAYERS and be fit/available (not "injured" or out-for-season)
- Respect the slot's role — don't put a DEF into an LW slot, etc.
- If uncertain about a specific slot, fall back to the previous starter for that slot unless news contradicts it
- If a formation's XI truly has no sensible fit for a slot due to injuries (e.g., all natural RBs injured), pick the closest cover and note it in PLAYER_EVIDENCE
- **`SLOT_CONFIDENCE` and `SLOT_RATIONALE` share the same keys (`LB:`, `ST:` ...) and `SLOT_CONFIDENCE` comes FIRST in the file.** A scripted find-and-replace on `\n  LB: "..."` hits the confidence levels, not the rationale (seen 30 Sep evening and again 1 Oct evening). Rewrite the rationale by slicing between `export const SLOT_RATIONALE = {` and its closing `};`, then confirm `SLOT_CONFIDENCE` still holds only `High` / `Medium` / `Low`.

## STEP 7.5: QUEUE A COVER IMAGE REQUEST (if today's lead is genuinely visual)

After all data passes are done but BEFORE the commit, decide whether today's lead story warrants a custom cover image. If yes, invoke the **`limn-editor-enhance`** skill (`~/.claude/skills/limn-editor-enhance/SKILL.md`) — it does the Limn-style prompt enhancement and appends a fully-spec'd entry to `~/Vault/Notes/image-requests.md`. A separate Antigravity-side skill will generate the image, save it, and push it to `~/liverpool-tracker/public/assets/cover/` later. You do NOT generate or commit the image here.

### Queue ONLY for genuinely visual moments

- A just-played match with a clear hero or villain moment (Salah finish at Anfield, Alisson penalty save, Slot on the touchline after a late winner).
- A goal celebration / trophy lift / pre-match anthem / Anfield-night atmosphere shot tied to a specific story today.
- A transfer announcement WITH a real unveiling photo opportunity — new signing in the kit, contract-signing moment, training-ground arrival.
- A milestone (player's 100th goal, manager's first/last match, a captain's farewell).

### Do NOT queue for

- Transfer rumors / agent chatter / fee speculation.
- Fixture announcements, table-position takes, league-form recaps.
- Routine injury status flips with no return-to-training moment.
- Anything you couldn't picture as a single still photograph.

### How to invoke

Call the skill with this minimum payload:

| Field | Value |
|---|---|
| `roughPrompt` | One-sentence rough idea — concrete subject + setting. |
| `tracker` | `liverpool` |
| `leadStory` | The single-sentence lead pulled from `NEWS_DIGEST.summary` or the lead `keyTopics` item. |
| `subject` | Player + venue (e.g., "Mohamed Salah wheeling away after a late winner at Anfield, Kop in the background"). |
| `aspectRatio` | `portrait` (default 1200×1600). Use `landscape` for stadium / crowd / squad shots. |
| `slug` | Optional 2-3-word kebab — `salah-celebration`, `slot-touchline`. |

### Cover plate and caption rules (added 1 Oct 2026 after Kenny called the cover "shit")

- **Never draw people.** The hand-drawn SVG plates (a stick-figure keeper, a stick-figure striker) looked amateur on the most prominent surface of the site and are retired. A Track 1 SVG plate may show architecture, light, pitch markings, texture or abstract shapes, never a human figure, a face or a ball in flight. If a moment can only be shown with a person in it, that is a Track 2 (Antigravity) request, not an SVG.
- **The standing plate is evergreen.** `2026-10-01-anfield-after-dark.svg` (an empty floodlit pitch in perspective) is the default. Cloud runs, which cannot queue images, leave `COVER_IMAGE.src` alone and only re-stamp `generatedAt`.
- **`COVER_IMAGE.focus` is a caption, not a note.** Two to eight words naming what the picture shows (e.g. "Anfield, after dark"). Never write meta-commentary such as "Carried plate, not this edition's lead, which is..." into it: it renders on the cover in capitals. Edition reasoning belongs in the code comment above `COVER_IMAGE`.
- **Do not close an open Track 2 request.** If `public/assets/cover/cover-brief.json` has `"status": "OPEN"` and `"action": "generate"`, leave its `prompt`, `slug` and `output` alone until Antigravity delivers; you may refresh `leadStory` only.

**Cap at ONE queued request per run.** If two moments compete, queue the bigger one and drop the other.

### Report

Mention in your final summary:

- `Image request: queued ({slug}.jpg) — {one-line reason}` **or** `Image request: skipped — {one-line reason}`.

## STEP 8: COMMIT + PUSH VIA scripts/git-publish.sh (REQUIRED — DO NOT USE PLAIN git push)

Do NOT run plain `git add` / `git commit` / `git push` in this repo. Those touch
`.git/index`, and on the Cowork sandbox mount deletes are blocked (EPERM) — git
cannot remove its own `.git/index.lock` or prune temp objects, so a plain commit
leaves a stale lock behind and corrupts the local repo state on every run. That is
the root cause of the daily "local out of sync / index.lock exists" breakage.

Instead, publish with the repo's helper, which stages into a throwaway index in
`/tmp`, builds the commit with `git commit-tree`, and pushes the new commit to the
remote by SHA — it never deletes or moves a local file, so it never needs the lock:

  cd ~/liverpool-tracker && bash scripts/git-publish.sh \
    --branch main \
    --message "Daily refresh: news digest, transfers, dispatches, standings, lineup, cover copy"

(The helper takes --message [required], --branch, --remote and --dry-run, plus optional
positional FILE paths; it operates on the current working directory, so cd into the repo
first. There is no --repo flag. **With no FILE arguments it stages only MODIFIED TRACKED
files (`git diff --name-only HEAD`), so a NEW file, such as a fresh cover plate in
`public/assets/cover/`, is silently left out.** Seen 4 Sep evening: `COVER_IMAGE.src`
pointed at an SVG the commit did not contain. When the run creates any new file, pass
every changed path explicitly, e.g.
`bash scripts/git-publish.sh --message "..." src/playerData.js src/lineupData.js src/App.jsx liverpool-tracker.jsx public/assets/cover/cover-brief.json public/assets/cover/<date>-<slug>.svg`,
and confirm the post-publish "working tree" block is empty.)

This is REQUIRED — the GitHub Pages deploy is triggered by the push. Notes:
- The helper REFUSES to push if the remote has moved ahead of local HEAD and never
  force-pushes, so it cannot clobber Kenny's work. If it reports non-fast-forward,
  note it in your output and stop — do not improvise another push path.
- `warning: unable to unlink ... tmp_obj_xxxx` lines are EXPECTED and harmless on
  this mount — the object is written; only git's temp-file cleanup is blocked.
- A 401/403 means the GitHub PAT in the remote URL is expired — report it and stop.
- By design the helper pushes by SHA, so the LOCAL branch ref stays put. Kenny
  reconciles his local clone separately (his `sync-tracker` script does a safe
  fetch + rebase --autostash). Do NOT attempt to move the local ref here.

**Gating the publish on the audit (two traps seen 3 Sep evening).** (1) Never pipe the preflight through `tail`/`grep` before an `&&`: the pipeline's exit status is the filter's, not the audit's, so `node scripts/preflight-audit.mjs ... | tail -2 && bash scripts/git-publish.sh` publishes even on FAIL. Run the audit on its own line, read the verdict, then publish. (2) A follow-up commit in the same pass (auditor fixes) must be audited with `--base <previous edition's SHA>` (usually `HEAD~1`); against the pass's own fresh commit every rotation and stale-block check reports 100% recycled, which is an artefact, not a finding.

If `scripts/git-publish.sh` is somehow missing, note it in your output and fall
back to a plain `cd ~/liverpool-tracker && git push origin main` — but flag that the
helper is gone so it can be restored.

## STEP 10: STALENESS REVIEW VIA SUBAGENT (REQUIRED — DO NOT SKIP)

After pushing, spawn a SEPARATE subagent (use the Task / Agent tool with `subagent_type: "general-purpose"`) to independently audit the front page of the tracker for staleness or incorrectness. This is a fresh-eyes pass — the subagent has none of your context, so it can catch things you missed or rationalized away.

Spawn the subagent with a self-contained prompt that includes:

1. **Files to review** (in this order):
   - `~/liverpool-tracker/src/App.jsx` (focus on the `cover-deck` standfirst around lines 345-353 — the literary paragraph directly under the "Anfield. May 2026." hero headline, the very FIRST prose on the site — the `cover-letter-lead` paragraph around lines 360-385 — the New-Yorker hero copy — and the `footer-quote` around lines 1900-1910. All three must reference today's situation, not last week's: cross-check every day-of-week and countdown phrase against today's date and the NEXT_MATCH date/time.)
   - `~/liverpool-tracker/liverpool-tracker.jsx` (focus on LATEST_NEWS array — the headline tape — plus NEXT_MATCH and RESULTS)
   - `~/liverpool-tracker/src/playerData.js` (focus on NEWS_DIGEST.summary, NEWS_DIGEST.keyTopics, NEWS_DIGEST.generatedAt, **TRANSFER_TARGETS.generatedAt + .summary lead + incoming[]/outgoing[] heatTier/probability**, **DISPATCHES array (datelines, headlines, body recency)**, **STANDINGS array (20 rows, Liverpool highlighted, qualification stripes match ESPN), STANDINGS_COMMENTARY.overview + per-team notes (recency, consistency with STANDINGS row)**, PLAYERS array statuses/injuryNotes, NEXT_MATCH, RESULTS)
   - `~/liverpool-tracker/src/lineupData.js` (focus on PLAYER_EVIDENCE, defaultXI for each formation, PREDICTION_NOTE.reason, PREDICTION_NOTE.generated_at)

2. **What to flag as STALE** (anything contradicted by the actual current date or by other files):
   - News-digest `generatedAt` or PREDICTION_NOTE `generated_at` timestamps that are not from today
   - Headlines or topic details written as "today" / "yesterday" but referencing dates more than 2 days old
   - PREDICTION_NOTE.reason or SLOT_RATIONALE referencing a "next match" that has already been played (cross-check against the most recent RESULTS entry and the NEXT_MATCH date)
   - PLAYER_EVIDENCE strings that are stale relative to the latest injuryNote (e.g., evidence says "Started vs Everton · Form 7.2" but the player has since been ruled out and the injuryNote reflects the new injury)
   - LATEST_NEWS items dated as "today" that actually reference older events
   - **DISPATCHES with `dateline` more than 7 days before today's date — flag EVERY such card by index and headline. Also flag dispatches whose body references a "next match" that has already been played, or refers to results/standings that are no longer current.**
   - **App.jsx cover-letter-lead opening day-of-week mismatching today's actual NEXT_MATCH day (e.g., paragraph opens on "Sunday" when next match is Friday Villa Park).**
   - **App.jsx cover-deck carrying a day-of-week or countdown phrase ("Saturday morning", "eight days until Anfield", "ninety minutes from now") that contradicts today's date or the NEXT_MATCH date/time — INCLUDING internal contradictions (a deck that says both "eight days" and "ninety minutes from now" in the same paragraph).**
   - **App.jsx footer-quote that is verbatim or near-verbatim to the previous commit's quote (run `git show HEAD~1:src/App.jsx | grep -B 1 -A 1 footer-quote` to compare).**
   - **App.jsx cover-letter-lead paragraph referencing a player situation that is no longer current (e.g., naming a "second leg" when no UCL match is pending, or mentioning a player as out who has since returned).**
   - **STANDINGS_COMMENTARY.generatedAt timestamp not from today, or `overview` referencing a "tonight" / "yesterday" match result that's actually 3+ days old.**
   - **STANDINGS_COMMENTARY.teams notes that contradict the current STANDINGS row (e.g., a `teams["Liverpool"]` note saying "fifth on 65 pts" while STANDINGS shows Liverpool at 59).**
   - **TRANSFER_TARGETS.generatedAt timestamp not from today, or `summary` opening on a day-of-week / "this morning" framing that contradicts today's actual date.**
   - **`OPPOSITION.opponent` or `OPPOSITION.fixture.date` not matching `NEXT_MATCH` — the dossier is scouting a fixture already played. This is the in-season equivalent of a missed lead and is an automatic FAILURE.**
   - **`OPPOSITION.leaguePosition` contradicting that opponent's row in `STANDINGS`, or `recentForm[]` missing a match they have since played.**
   - **`SEASON_PROJECTION.played` / `.points` / `.pointsPerGame` / `.projectedPoints` disagreeing with the Liverpool row in `STANDINGS`. These are pure arithmetic: `ppg = pts / p`, `projectedPoints = round(ppg * 38)`.**
   - **`FORM_TRENDS.played` not equal to the Liverpool STANDINGS `p`, or a played league match missing from `FORM_TRENDS.matches[]`.**
   - **`SQUAD_LOAD.unavailable[]` disagreeing with PLAYERS `status` in either data file, or naming a player who appears in a `defaultXI` in `src/lineupData.js`.**
   - **ANY number in `FORM_TRENDS` or `SQUAD_LOAD` with no named `source`. Numbers without provenance are the one thing this view must never ship: flag a missing or vague source as INCORRECT, not as a nitpick, and say so explicitly if a figure looks suspiciously round or suspiciously convenient.**
   - **(WINDOW OPEN ONLY) TRANSFER_TARGETS entries contradicted by the rest of the file — a target marked `heatTier: "done"` who is also named as a still-pending rumour in NEWS_DIGEST, or an `outgoing[]` departure flagged "done" whose PLAYERS `status` still has them as an active first-team starter in the lineup.**

3. **What to flag as INCORRECT** (logical inconsistencies between files):
   - A player listed in `defaultXI` whose `status` in PLAYERS is "injured" or who has an `outSince` injury that's still active
   - injuryNote in liverpool-tracker.jsx that doesn't match the injuryNote in src/playerData.js for the same player
   - NEXT_MATCH opponent / date / venue / competition mismatched between liverpool-tracker.jsx and src/playerData.js
   - RESULTS array entries diverging between the two files (different scores, scorers, dates)
   - NEWS_DIGEST.keyTopics ordered out of recency (a "Wed May 6" topic appearing AFTER a "Sat May 2" topic in the array)
   - PLAYER_EVIDENCE referencing players by an ID number that doesn't exist in the PLAYERS array
   - Sources array in NEWS_DIGEST listing publications that aren't actually cited in any keyTopic.detail or summary text
   - **DISPATCHES bylines that aren't real publications, or DISPATCHES referencing scorelines/managers/transfers contradicted by the rest of the file**
   - **STANDINGS row count != 20, or the highlighted Liverpool row missing, or qualification stripe values outside the allowed set (UCL/UEL/UECL/REL).**
   - **STANDINGS_COMMENTARY.teams keys that don't match any STANDINGS[].team string (team-name mismatch — e.g., "Spurs" in commentary vs "Tottenham" in STANDINGS).**
   - **TRANSFER_TARGETS `heatTier` values outside the allowed set (hot/warm/cool/done/dead), source `tier` values outside S/A/B/C, or an entry whose `currentClub` has no crest in TEAM_LOGOS.**

3.4. **MISSED LEAD — search independently before reading the page (HIGHEST PRIORITY, do this FIRST of all).**
   Everything else in this audit only checks what IS on the page; this check is the only one that can catch a story the page never mentions, which is the most damaging failure mode this skill has. Before reading any file, the auditor runs its OWN web searches. **In-season those are, at minimum: "Liverpool FC news today", "Liverpool [most recent opponent] result", "Liverpool injury news [today's date]" and "Andoni Iraola latest".** From those it independently determines the single biggest CONFIRMED Liverpool story of the last 24-48 hours. **If a match has been played since the previous edition and the page does not lead on that result, that is a BURIED LEAD and an automatic FAILURE.** Then grep the repo for that story's key name/term.
   - If the story appears NOWHERE in the working tree, flag **MISSED LEAD (CRITICAL)** with the name, the confirming outlets, and the surfaces that should carry it. This is an automatic FAILURE regardless of how clean the rest of the page is.
   - If it appears but does NOT lead, flag it as a BURIED LEAD per 3.5 below.
   - A confirmed arrival/departure (signed, loan agreed, medical passed, unveiled) OUTRANKS any unconfirmed fee negotiation, however large the number. A £100m rumour must never lead over a completed loan.

3.5. **What to flag as a BURIED LEAD or CONTRADICTION (HIGHEST PRIORITY — check this first):**
   - First, the auditor independently decides what the single biggest Liverpool story of the last 24-48 hours is, using the consequence tiers in STEP 1.6 (Tier 1 club-defining: manager sacked/hired, takeover, death, trophy/relegation decided; Tier 2 squad-defining: confirmed marquee signing/sale, season-ending injury, legend departure, match just played). Then verify that THIS story leads EVERY front-page surface in the working tree: `NEWS_DIGEST.summary` first sentence, `NEWS_DIGEST.keyTopics[0]`, `LATEST_NEWS[0]`, `DISPATCHES` card `01`, the App.jsx cover deck opening AND editor's-letter lead opening.
   - **Flag a BURIED LEAD** wherever any of those surfaces leads with a LOWER-tier story while a higher-tier story exists elsewhere in the same run (e.g. the cover deck opens on a memorial or a World Cup squad omission while a manager sacking sits further down the digest). Name the surface and the tier mismatch.
   - **Flag a CONTRADICTION** wherever any line states the OPPOSITE of the run's lead — run, at minimum: if the lead is a manager change, `git grep -ni "stays\|remains\|insists\|satisfied to keep"`; if the lead is a confirmed transfer in/out, grep for the player's name being described as "linked / a target / chasing / monitoring" (incoming) or "could stay / new deal" (outgoing). A page that says a manager was sacked AND is staying, or a player signed AND is still merely a target, is an automatic FAILURE the auditor must call out explicitly.

4. **What to flag as RECYCLED (NEW REQUIREMENT)** — give the subagent the previous commit's data via:
   ```
   cd ~/liverpool-tracker && git show HEAD~1:src/playerData.js | head -600
   ```
   Then have it compare to the working tree and flag:
   - Any direct quote (anything inside single or double quotes) that appears in BOTH this run's `NEWS_DIGEST.keyTopics` / `summary` AND the previous run's
   - Any `keyTopics[].title` whose anchor story matches the previous run's title (allowing slight wording variation)
   - The `NEWS_DIGEST.summary` lead sentence anchoring on the SAME story as the previous run's lead
   - Top 3 `LATEST_NEWS[].title` matching the previous run's top 3 (allowing different wording for the same story)
   - Any DISPATCH headline, byline, or first-15-words of body that matches the previous run
   - Any injuryNote whose lead clause (the sentence after the date stamp) is verbatim or near-verbatim to the previous run
   - The `TRANSFER_TARGETS.summary` lead sentence anchoring on the SAME in/out story as the previous run's lead, or `TRANSFER_TARGETS.generatedAt` left unchanged from the previous commit
   The threshold: more than 40% recycled content (by count across these checks) is a FAILURE — the auditor must flag it and recommend a re-rotation pass.

5. **Output format**: a punch-list of issues, each with file path + line number (where possible) + a one-sentence description + a suggested fix. If everything looks clean, report "No staleness or incorrectness found." Cap the report at ~500 words.

After the subagent returns, INCLUDE its full report verbatim in your final output. If the subagent flagged any fixable issues, you may also fix them in a follow-up commit + push (same flow as Step 8 — re-run scripts/git-publish.sh) — but only fix things the subagent surfaced; don't go hunting for new edits.

## IMPORTANT REMINDERS:
- **STYLE — AVOID EM DASHES:** In all prose you write or rewrite this run (NEWS_DIGEST summary/keyTopics, TRANSFER_TARGETS notes, DISPATCHES, App.jsx cover deck / editor's-letter / footer-quote, STANDINGS_COMMENTARY, injuryNotes, LATEST_NEWS headlines, commit messages), avoid em dashes (—) wherever possible. Prefer commas, colons, periods, or parentheses, or restructure the sentence. Only keep an em dash where no clean alternative reads naturally. Do not use en dashes (–) as a substitute except in genuine ranges/scores.
- The #1 priority is FRESH, RECENT news in the digests. A fan should open this app and see what's happening TODAY, not last week.
- Never fabricate headlines or news — everything must come from actual search results
- **The single biggest story of the day (see STEP 1.6's consequence tiers) must LEAD every front-page surface in the same run — `NEWS_DIGEST.summary` first sentence, `keyTopics[0]`, `LATEST_NEWS[0]`, `DISPATCHES` card 01, and the App.jsx cover deck + editor's-letter openings.** A Tier-1 event (manager sacked/hired, takeover, trophy/relegation decided) overrides the no-repeat rotation rule and outranks any softer human-interest or colour piece. Never bury a club-defining story beneath rotation filler.
- **The transfer ledger is DORMANT. Do not refresh `TRANSFER_TARGETS`, do not re-stamp its `generatedAt`, and do not un-archive `src/transferArchive.js` until `WINDOW.open` is `true`. Transfer-shaped news that IS live in-season (contracts, loans, recalls, January links, windows still open abroad) belongs in NEWS_DIGEST and DISPATCHES.**
- **The OPPOSITION dossier must point at `NEXT_MATCH`, always. A dossier left on a played fixture is the most visible in-season failure available, and the preflight hard-fails on it.**
- **NEVER invent a number in FORM_TRENDS, SQUAD_LOAD or SEASON_PROJECTION.** Source it or null it. A `null` renders as "awaiting data" and costs nothing; a fabricated xG becomes established fact by the next edition and no auditor will catch it, because nothing on the page contradicts it.
- **A played match always leads the edition it falls in.** Team news, quotes and analysis frame the result; they never replace it.
- **Run the STEP 1 IN-SEASON SWEEP every single run.** Storyline-shaped searches cannot find an event you don't already know about. At least three name-agnostic searches ("Liverpool breaking news", "Liverpool injury blow", "Iraola sacked OR under pressure", "Liverpool FC statement") plus a need-shaped search on every position `SQUAD_LOAD.depthRisk` calls `critical` or `high` are MANDATORY, and any unfamiliar name paired with an injury or suspension verb must be chased before you write. With the squad closed until January, a fresh injury in a thin department is the most consequential thing that can happen to this team.
- **Confirm high-impact binary facts (manager sacked/hired, transfer done/dead, player out/back) with a dedicated targeted search before stating them as fact — never infer from a single digest blurb or clickbait headline — and run the STEP 1.6 contradiction sweep so no surface says the opposite of the lead.**
- **DISPATCHES is the section most likely to look stale to a returning fan — every run must rewrite all 5 cards from scratch, drawing from the same fresh searches that fed STEPS 1-3.**
- **TRANSFER_TARGETS (Step 3.5) must be re-stamped and re-led every run during an open window — the `generatedAt` timestamp and `summary` lead are the parts that date fastest; entry heat/fees/probabilities move with the reporting, and a confirmed deal flips `heatTier` to "done"/"dead".**
- The app runs via Vite dev server — file saves trigger hot reload automatically
- When lineup changes are driven by injuries, make sure the PLAYERS status change (Step 5) and the lineup data change (Step 7) are both reflected — an injured player must come OUT of defaultXI the same day their status flips to "injured"