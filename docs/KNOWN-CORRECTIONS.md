# Known Corrections — the regression ledger

Facts a staleness auditor has already corrected at least once. The daily refresh
kept re-introducing some of them, because each run rewrites the prose from
scratch and has no memory of what the last auditor fixed.

`scripts/preflight-audit.mjs` (CHECK 12) reads this file and hard-fails the run
if any `forbid:` pattern reappears in `src/App.jsx`, `src/playerData.js`,
`src/lineupData.js` or `liverpool-tracker.jsx`.

## Format

Machine-checked entries must match this shape exactly, one per line:

```
- forbid: `regex` — why it is wrong
```

The regex is matched case-insensitively against all four files concatenated.
Keep patterns **narrow**: they should catch the specific wrong claim, not the
topic. A pattern that matches correct prose will block every future run.

Everything outside a `forbid:` line is prose for humans and is ignored.

---

## Active rules

- forbid: `bottom on goal difference` — when several sides are level on goal difference (Palace, Villa and Tottenham have all sat on -5), the separator is goals scored, not goal difference. Corrected in `0dbc482`, re-introduced 31 Aug evening. Retire this rule if a side is ever genuinely alone at the foot on GD.
- forbid: `full week on the training ground` — used for a Monday-to-Friday gap, which is four days. Any "week" claim must be checked against the real span first.
- forbid: `Gomez (muscle, ~a month)|Gomez out ~a month|Gomez remains out\s*//?\s*around a month` — Gomez returned to full training on 30 Aug; the "out ~a month" framing survived in six places in `lineupData.js` after his status changed.
- forbid: `record he holds was joined at the top` — Barcola's fee is a guaranteed £106m rising to £123m, so it sits **second** on the club's list behind Isak's £125m, it does not join it at the top.
- forbid: `Arthur Melo` — there is no 2026 Arthur Melo transfer. Every "Liverpool sign Arthur Melo on loan from Juventus, €4.5m loan fee, option to buy €37.5m" article is the **September 2022** story (its own text names Klopp, Jordan Henderson's injury, Thiago and Naby Keita), and it ranks highly for deadline-day queries. In 2026-27 Arthur is on loan at Grêmio. The 1 Sep 2026 morning run led every front-page surface on it; the post-deadline ledgers (Rousing The Kop, ESPN, Sky) list Lucca Brughmans as Liverpool's ONLY deadline-day arrival and no midfielder at all. Corrected in the 1 Sep evening pass. **General lesson, not just this name: a search result with no date visible in the snippet is undated, not current. Before writing any signing as fact, confirm the report names the current manager (Iraola) and current squad-mates; if it names a previous era's staff or players, it is an archive article.**

## Retired rules

Move an entry here (and delete its `forbid:` line) once the underlying
situation has genuinely changed, so the rule stops being true. Note the date
and the reason, do not delete the history.

_None yet._

---

## How to add an entry

When a staleness auditor flags something as INCORRECT and the same class of
error could plausibly be written again next run, add a `forbid:` line here in
the **same commit as the fix**. Two tests before adding:

1. **Would the wrong version be a natural thing to write again?** One-off typos
   do not belong here. Recurring reasoning errors do: arithmetic on dates,
   stale injury framing, tie-break wording in the table, fee superlatives.
2. **Is the regex narrow enough to be wrong only when the claim is wrong?**
   Prefer anchoring on the specific false assertion
   (`bottom on goal difference`) over the subject (`Tottenham`).
