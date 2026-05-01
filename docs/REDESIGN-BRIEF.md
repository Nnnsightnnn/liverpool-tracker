# Liverpool Tracker — Visual + Layout Overhaul Brief

## Mood
"Anfield in print." A Premier League matchday program crossed with a Guardian sport longform feature. European football's deep history rendered as editorial design — crimson ink on cream paper, big serif headlines, narrow column rules, anthemic pacing. The user should feel like they're holding a beautifully printed thing, not staring at a dashboard.

## Palette
- Background: `#0E0709` (deep oxblood-black for primary surfaces)
- Liverpool red primary: `#C8102E`
- Gold accent: `#F6EB61` — used like a thin metallic line, never a fill
- Ivory text: `#F4EBD0`
- Cream alt surface: `#1A1012` (subtle warm shift on dark)
- Pitch green for live indicator only: `#1E7A47`
- Banned: any neon, any cyan, any "scoreboard glow."

## Typography
- Display headlines: a strong editorial serif — Tiempos Headline, Reckless, or Playfair Display. Sentence case, not caps. Big, narrow, confident.
- Body: Söhne or Inter. Generous line height (1.6+). Narrow measure (~60ch).
- Section dividers: italic display serif used like chapter titles ("Matchday." "Squad." "Form.").
- Stat numerals: same body font, weight-contrasted, tabular figures.
- No condensed sans for headlines. No mono.

## Layout
- Editorial cover hero: large serif headline ("Anfield. May 2026."), kicker line beneath in small caps, stat strip in a hairline-ruled row below. Generous top margin — let the headline breathe.
- Squad as a magazine roster: portrait with caption-style metadata, two-column with pull-stats. Visible vertical column rules.
- Form guide: horizontal stripe of last-five W/D/L pills, ledger-style, beneath each player.
- News digest: numbered op-eds with byline + dateline. Drop cap on the first paragraph of each. Paragraph rags only — no centered text.
- Standings table: hairline rules, alternating row tints, leader row marked with a thin red marginal stripe.

## Motion
- Anthem-slow fades. Long, even easing (cubic-bezier(0.22, 0.61, 0.36, 1) at 400–600ms).
- Page-turn-style transitions on view change — never bouncy, never elastic.
- Paper-grain noise overlay at ≤3% opacity on dark surfaces to avoid the flat-LCD look.

## Don'ts
- No neon, no glow, no broadcast scoreboard styling.
- No sans-serif headlines. No condensed display type.
- No full-saturation red as a background fill — use it as ink and accent only.
- No drop shadows on cards. Hairline borders or column rules instead.
- Don't fight the dark surface with high-contrast white — use ivory.
