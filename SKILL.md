---
name: liverpool-tracker-update
description: Fetches the latest Liverpool FC 2025-26 player stats, form ratings, and news headlines, then regenerates the tracker app.
---

You are updating the Liverpool FC Player Tracker React app. Your goal is to fetch the latest 2025-26 season data and regenerate the app file with accurate, current information.

The tracker app is in a git repo. Request access to ~/liverpool-tracker using the request_cowork_directory tool.

## Steps

1. **Search for current Liverpool FC stats:**
   - Web search for "Liverpool FC 2025-26 player stats goals assists appearances" to get the latest season numbers.
   - Web search for "Liverpool FC injury news latest" to get current fitness/injury status for players.
   - Web search for "Liverpool FC latest news headlines" to gather recent news items for the feed.

2. **Gather data for all first-team players:**
   For each player collect: appearances, goals, assists, clean sheets (GK/DEF), and any advanced stats available (xG, pass completion, tackles per 90, progressive carries per 90). Also note current form rating (estimate from recent match ratings on WhoScored, FotMob, or similar).

3. **Check for squad changes:**
   Look for any new signings, loans out, or departures since the last update. Add or remove players accordingly.

4. **Gather latest REAL news headlines:**
   Collect 12-15 recent Liverpool-related headlines from a mix of: Liverpool FC official site, BBC Sport, Sky Sports, This Is Anfield, Empire of the Kop, and The Anfield Wrap. Include the source name, headline text, and approximate time ago. These must be REAL headlines from actual articles found via web search — not made up or mock data.

5. **Read the existing tracker app files:**
   Read BOTH data files to understand the current structure and format:
   - `liverpool-tracker/liverpool-tracker.jsx` (root-level standalone file with PLAYERS, LATEST_NEWS, RESULTS, NEXT_MATCH arrays)
   - `liverpool-tracker/src/playerData.js` (**THIS IS THE CRITICAL FILE** — it's what the Vite dev server uses for live updates at localhost:3000)

   The `src/playerData.js` file has an expanded player format with `physical` and `career` fields — preserve those when editing. It also uses different image URLs in some cases (thesportsdb.com instead of premierleague.com CDN) — preserve the existing image URLs.

6. **Update BOTH files:**
   Edit the PLAYERS, RESULTS, and NEXT_MATCH arrays in **BOTH** `liverpool-tracker.jsx` AND `src/playerData.js` with the freshly gathered data.

   Also update LATEST_NEWS in `liverpool-tracker.jsx` only (the src/ version fetches news live via RSS feeds, so it has no LATEST_NEWS array).

   Preserve the exact same component structure, styling, and functionality — only update the data arrays.

   **For src/playerData.js:** Each player object has additional fields (`physical`, `career`) — DO NOT remove these. Only update the stats fields (appearances, goals, assists, cleanSheets, xG, tacklesPer90, passCompletion, progressiveCarries, form, status, injuryNote).

   For the root file, player format:
   ```
   { id, name, number, position, nationality, age, appearances, goals, assists, cleanSheets, xG, tacklesPer90, passCompletion, progressiveCarries, form, status, injuryNote, image }
   ```
   For news items (root file only) keep the format:
   ```
   { source, title, time, category }
   ```
   Categories are: "official", "major", or "fan".

7. **Commit the changes** to the git repo with a descriptive commit message summarizing what changed. Note: if git lock files exist (index.lock, HEAD.lock), try removing them first. If removal fails due to permissions, the file edits on disk are still valid for the dev server — note the commit failure in your output but don't treat it as a blocker.

## Important Notes
- Player images use Premier League CDN: https://resources.premierleague.com/premierleague/photos/players/110x140/p{PLAYER_ID}.png (root file) or thesportsdb.com URLs (src/ file) — preserve whichever URL is already in each file.
- Keep the RSS_FEEDS array unchanged unless a feed URL has moved.
- Status should be one of: "fit", "injured", "doubtful", "recovering", "suspended".
- Form ratings are on a scale of 1-10 (one decimal place).
- If you cannot find updated stats for a player, keep their existing values rather than guessing.
- Update the date comment at the top of the PLAYERS array to today's date.
- The news array is called LATEST_NEWS (not MOCK_NEWS). All headlines must be real, sourced from actual web searches.
- The TEAM_LOGOS object in src/playerData.js should be updated if a new opponent appears in RESULTS or NEXT_MATCH that doesn't already have a logo entry.

If you fail to get access to the app, create a document in the outputs folder that I can use to source the modifications.
