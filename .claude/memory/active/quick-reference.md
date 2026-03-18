# Quick Reference

Top patterns for Liverpool FC Tracker. Check this FIRST before any task.

---

## Project Overview

**App**: Liverpool FC squad tracker SPA (2025-26 season)
**Stack**: React 18.3 + Vite 6.0 + Lodash 4.17 (ES modules)
**Architecture**: Monolithic single-file React component (~630 lines in `src/App.jsx`)
**Data**: All hardcoded — no API, no database

---

## Entry Points

- `src/main.jsx` → renders `src/App.jsx` (default export: `LiverpoolTracker`)
- Vite config: `vite.config.js`

## Data Constants (all in `src/App.jsx`)

- `PLAYERS` — 25 players with position, stats, form, status
- `RSS_FEEDS` — 7 RSS feed sources
- `MOCK_NEWS` — 15 mock news items

## Components (all in `src/App.jsx`)

| Component | Purpose |
|-----------|---------|
| `PlayerAvatar` | Player image/initials display |
| `FormBadge` | Recent form indicator |
| `StatBar` | Visual stat bar |
| `PositionTag` | Position label |
| `StatusBadge` | Availability status |
| `PlayerCard` | Full player card |
| `NewsFeed` | News items display |
| `RSSSourcesPanel` | RSS feed sources panel |
| `LiverpoolTracker` | Root component (default export) |

## State Management

- 7 `useState` hooks (filters, search, view state)
- 2 `useMemo` hooks (filtered/sorted player lists)
- No external state management

## Color Constants

- `LFC_RED = #C8102E`
- `LFC_DARK = #1a1a2e`
- `LFC_GOLD = #F6EB61`

## Scripts

- `npm run dev` — Vite dev server (port 3000)
- `npm run build` — Production build to `/dist/`
- `npm run preview` — Preview production build

## Known Issues

- **Unused file**: `liverpool-tracker.jsx` at project root is a duplicate of `src/App.jsx` — candidate for deletion
- **No tests** configured
- **No linting** configured
- **All styling** is inline (no CSS files or framework)

---

**Last Updated**: 2026-03-18
**Pattern Count**: 12
**Next Review**: 2026-03-25
