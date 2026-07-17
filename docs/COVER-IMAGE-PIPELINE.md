# Cover Image Pipeline

The cover masthead renders a full-bleed **edition hero image** behind the
"Anfield. <month year>." headline, tied to the single most important focus of the
latest edition. It is a two-track system so the cover always has a visual, and
gets a premium photographic one when the lead story is genuinely picture-worthy.

## The contract: `COVER_IMAGE` in `src/playerData.js`

```js
export const COVER_IMAGE = {
  src:        "/assets/cover/<slug>.svg|jpg",  // rendered behind the masthead; null → text-only cover
  alt:        "…",                              // accessibility + fallback caption
  focus:      "The World Cup final — a Red in each XI",  // the edition's headline focus (shown as caption)
  credit:     "Editorial plate · auto-generated" | "Illustration · Antigravity",
  generatedAt:"2026-07-17T09:00:00Z",           // ISO; also the cache-buster (?v=)
  brief: {                                       // written by the daily run, consumed by Antigravity
    leadStory:    "…one sentence, from NEWS_DIGEST.summary / keyTopics[0]…",
    subject:      "…concrete subject + setting for the image…",
    prompt:       "…full generation prompt; wide, cinematic, NO on-image text, room on the left for the masthead…",
    aspectRatio:  "landscape",                   // cover is wide (1600×900 target)
    slug:         "world-cup-final",
  },
};
```

The render (`CoverView` in `src/App.jsx`) loads `src` (base-path aware, cache-busted
by `generatedAt`) full-bleed with a left-weighted dark scrim so the ivory headline
stays legible, and **falls back to the pure-type cover** if `src` is null or the
file fails to load. A subtle caption shows `focus · credit`.

## Track 1 — deterministic SVG plate (always, in the Cowork daily run)

`STEP 7.5` of the `liverpool-tracker-update` skill:

1. Picks the edition **focus** from the lead story (STEP 1.6).
2. Regenerates a wide SVG "editorial plate" at
   `public/assets/cover/<date>-<slug>.svg` — atmospheric, club/theme palette
   (`ink #0E0709`, `red #C8102E`, `gold #F6EB61`, `ivory #F4EBD0`), **no text**
   (the app overlays the type).
3. Sets `COVER_IMAGE.src` to that file, refreshes `focus`, `alt`, `credit`
   (`"Editorial plate · auto-generated"`), `generatedAt`, and the `brief`.
4. Writes the same brief to `public/assets/cover/cover-brief.json` for Antigravity.

This guarantees the cover always has a visual, even in the deep off-season.

## Track 2 — premium photographic image (Antigravity / "agy")

When the lead is genuinely visual (a just-played match hero moment, a trophy lift,
an unveiling), Antigravity produces a real image:

1. Read `public/assets/cover/cover-brief.json` (or `COVER_IMAGE.brief`).
2. Generate a wide (≈1600×900), cinematic, **text-free** image per `brief.prompt`,
   leaving room on the left for the masthead headline.
3. Save it as `public/assets/cover/<date>-<slug>.jpg`.
4. Repoint `COVER_IMAGE.src` at the JPG and set `credit: "Illustration · Antigravity"`
   and a fresh `generatedAt`.
5. Commit + push via `scripts/git-publish.sh` (see STEP 8) — never plain `git push`.

If the lead is **not** picture-worthy (transfer rumours, table takes, routine
injury flips), Antigravity leaves the SVG plate in place. Cap: **one** image per
edition — the lead only.

## Housekeeping

- Old cover files can accumulate in `public/assets/cover/`; keep the last ~5 and
  prune older ones when convenient. Only the file referenced by `COVER_IMAGE.src`
  is served.
- `COVER_IMAGE.generatedAt` MUST change every edition (cache-buster + audit).
- Antigravity loads `AGENTS.md` → `CLAUDE.md`; the authoritative rules live there.
