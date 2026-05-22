# Liverpool FC Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg)](https://vitejs.dev)

A personal dashboard for tracking Liverpool FC's 2025-26 season — squad fitness, match results, and news — all in one dark-themed interface.

---

## What It Does

Three views, zero backend:

- **Squad** — Full 26-player roster with form ratings, injury/fitness status, and key stats. Click any card to expand advanced metrics (xG, pass %, tackles/90, progressive carries). Filter by position and fitness; sort by form, goals, assists, xG, or appearances.
- **Results** — Next match countdown banner, 5-game form guide, season summary (W/D/L, goals for/against), and a scrollable results log covering Premier League, Champions League, and FA Cup fixtures.
- **News Feed** — Curated headlines from seven sources (Liverpool FC Official, BBC Sport, Sky Sports, This Is Anfield, Empire of the Kop, The Anfield Wrap, ESPN FC). RSS feed URLs included for subscribing in your own reader.

---

## Features

- Player cards with Premier League CDN headshots (initials + jersey number fallback)
- Color-coded form ratings: Excellent / Good / Decent / Fair / Poor
- Injury status badges: Fit / Doubtful / Recovering / Injured — with a short note on each affected player
- Squad summary stats: total goals, assists, clean sheets, avg form, top scorer, injury count
- Next match countdown (live, updates from current time)
- Season stats strip: played, won, drawn, lost, goals for, goals against
- News filterable by: All / Official / Major Outlets / Fan Sites
- Fully responsive bento-grid layout; no external stylesheets

---

## Tech Stack

| Layer | Library / Tool |
|-------|---------------|
| UI framework | React 18.3 |
| Build tool | Vite 6.0 |
| Utilities | Lodash 4.x |
| Styling | Inline CSS (no stylesheet dependencies) |
| Data | Hardcoded in `src/playerData.js` — no API or database |

---

## Installation

**Requirements:** Node.js 18+

```bash
git clone <your-repo-url>
cd liverpool-tracker
npm install
```

---

## Usage

### Development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

---

## Configuration

No API keys or environment variables required — all squad data, results, and news headlines are stored locally in `src/playerData.js`.

To update the dashboard for a new matchweek:

| Data | File | Export |
|------|------|--------|
| Squad / injury status | `src/playerData.js` | `PLAYERS` |
| Match results | `src/playerData.js` | `RESULTS` |
| Next fixture | `src/playerData.js` | `NEXT_MATCH` |
| News headlines | `src/playerData.js` | `NEWS_DIGEST` |
| RSS sources | `src/playerData.js` | `RSS_FEEDS` |

---

## License

MIT — see [LICENSE](LICENSE) for details.


---

<p align="center">
  <a href="https://github.com/nnnsightnnn">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset=".brand/built-by-dark.svg">
      <img src=".brand/built-by.svg" alt="built by nnnsightnnn" height="26">
    </picture>
  </a>
</p>
