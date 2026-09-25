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

- forbid: `at Goodison` — Everton left Goodison Park in 2025; home games are at the Hill Dickinson Stadium. Written three times in the 6 Sep evening edition (Everton 2-2 Man United), caught by the staleness auditor.

- forbid: `name: "Trey Nyoni".*age: (1[0-8]|[0-9])\b` — Nyoni was born 30 June 2007 and is **19** in the 2026-27 season. His PLAYERS `age` field sat at 17 in both data files for weeks while five separate prose surfaces (App.jsx cover letter, DISPATCHES, keyTopics, FORM_TRENDS, his own injuryNote) correctly described him as nineteen, so the object contradicted itself. Caught by the staleness auditor, 17 Sep evening. **General lesson: an academy player's `age` integer is set once and then never revisited, while the prose around him is rewritten daily. When a run writes a player's age in words, check it against the field in the same object.**

- forbid: `Champions League \(top 5\)` — the live ESPN table this tracker rebuilds each run draws the Champions League stripe at **fourth**, with Europa at fifth. `SEASON_PROJECTION.thresholds` carried a "top 5" label for that band, so the projection was pacing toward a qualification line the table on the next tab did not show, and the Conference band was labelled for a seventh place the table did not stripe at all. Caught by the staleness auditor, 17 Sep evening. Threshold labels must follow the qualification stripes in the current STANDINGS array, which come from ESPN's `note.description` and are never hand-assigned. Retire this rule if ESPN begins striping five Champions League places.

- forbid: `first point and first goals` — a 1-0 win is **three points and one goal**, so "first point and first goals" is wrong in both halves at once. Written on 19 Sep evening about Coventry's 1-0 at Nottingham Forest, which ended a start of four defeats with no points and no goals, and it propagated from the edition-log comment into the App.jsx cover-letter-lead in the same pass. Caught by the staleness auditor. **General lesson: when a result ends a "none yet" run, read the scoreline before writing the count. Points and goals are separate tallies and a single scoreline fixes both numbers exactly, so check the STANDINGS delta (pts and gd) rather than reaching for a symmetrical phrase.**

- forbid: `Transfer Hub's passing networks place` — a passing-network graphic shows who touched the ball, not who kicked off, so it cannot establish a starting XI and it silently mixes in substitutes. The 15 Sep cup XI was reconstructed this way for three days and was wrong in two places: it listed Bradley Barcola as a starter when he did not start at all, and it had Ronald Araujo at right-back when Jeremie Frimpong played there and Araujo partnered Gomez in the middle for the full ninety. Liverpool's own team-news page published the eleven on 18 Sep and settled it. Caught in the 18 Sep evening pass. **General lesson: a starting XI is a published fact. Wait for the club, the league or a match report to print it rather than inferring it from a visualisation, and mark the record as partial until they do.**

- forbid: `a first win since Ipswich` — Liverpool beat Atletico Madrid 2-1 in the Champions League on 9 September, between Ipswich (4 Sep) and the Tottenham cup tie (15 Sep), so the cup win was the first **domestic** win since Ipswich. Caught by the staleness auditor, 22 Sep evening, on a FORM_TRENDS verdict that had survived a week. **General lesson: "first win since X" must be checked against RESULTS across every competition, not just the one the sentence is about.**

- forbid: `(Leeds|Sunderland)[^.]{0,80}a promoted side|a promoted side[^.]{0,40}(Leeds|Sunderland)|at home to a promoted side last weekend` — Leeds and Sunderland came up in 2025 and are in their second Premier League season; the 2026 promoted sides are Coventry, Ipswich and Hull. Caught by the staleness auditor, 22 Sep evening, in STANDINGS_COMMENTARY and the OPPOSITION Donnarumma entry.

- forbid: `three days after hosting City` — City at Anfield is Sunday 11 October and Brentford away is Saturday 17 October, six days apart. Caught 22 Sep evening. Day gaps must be computed from the fixture dates, never estimated.

- forbid: `(announce|confirm)\w*[^.]{0,40}new (long-term )?contract for (Alisson|the goalkeeper Alisson)` — on 22 Sep syndicated headlines ('Deal confirmed: Liverpool officially announce new contract for Reds goalkeeper') were summarised by search tools as an Alisson renewal. The contract was **Matty Wright's**, an 18-year-old U18 keeper; Alisson remains on the option triggered in March, running to 2027. Caught before publication by reading the article body. **General lesson: a search-tool summary of a headline with an unnamed subject is not a fact; read the article before naming the player.**
- forbid: `Mabaya.{0,120}not in the first-team squad|did not happen to a first-teamer` — Isaac Mabaya is registered in Liverpool's 25-man Premier League squad (liverpoolfc.com, This Is Anfield) even though he plays for the Under-21s. The 25 Sep evening edition called him 'not in the first-team squad'; caught by the staleness auditor.

- forbid: `with Brazil through the break|Alisson is with Brazil|Brazil have the first choice|He is in Brazil` — Carlo Ancelotti left Alisson OUT of Brazil's September 2026 squad (This Is Anfield, Liverpool.com); he spends the break at Kirkby. The tracker carried him as 'with Brazil' and Mamardashvili as 'the senior goalkeeper at the AXA' for several editions, when Mamardashvili is the one away, with Georgia. Caught in the 25 Sep evening pass. **General lesson: an international-duty claim must be checked against a named call-up list, not inferred from nationality.**

- forbid: `beaten at Anfield twice this month` — Liverpool met Tottenham once in September 2026, the Carabao Cup third round on 15 September (3-1); there was no league meeting. The phrase sat in STANDINGS_COMMENTARY and the overview for several editions before the staleness auditor caught it, 23 Sep evening. **General lesson: a count of meetings must be read off RESULTS, not recalled.**

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

## 2026-09-20 (evening) — a goal tally has a competition attached to it

**forbid:** stating that Alexander Isak's 2026-27 goal count has "surpassed"/"beaten"/"passed" *last season* without naming the competition.

The Opta fact is narrower than the sentence it usually becomes: in five games (four goals) Isak has surpassed his **Premier League** tally for the entirety of last season (three goals in fourteen apps). Across **all competitions** he scored four last term, so today's fourth *equals* rather than beats it, which is exactly how Last Word on Football phrased it. The evening edition dropped the qualifier in nine places at once, including a DISPATCH headline, because the shortened version reads better.

**General lesson:** a "more than all of last season" claim is only true inside the competition the source measured. Carry the competition through to every surface, or do not make the comparison.

## 2026-09-20 (evening) — player ages drift, and the prose notices before the data does

**forbid:** a `PLAYERS[].age` value that contradicts the age written in this repo's own prose for the same player.

Jeremy Jacquet was born 13 July 2005. He was twenty at signing, which is the age Sky Sports used in the transfer reports the field was populated from, and he turned twenty-one in July 2026. The DISPATCHES card, the App.jsx editor's letter, FORM_TRENDS and SLOT_RATIONALE all correctly said twenty-one this edition while `PLAYERS[].age` still said 20 in both data files.

**General lesson:** this is the Nyoni rule again (see above). An age is a fact with a birthday in it, and a birthday that has passed since a transfer window invalidates the number copied out of the announcement. When the prose and the field disagree, the field is usually the stale one. Check both data files.
