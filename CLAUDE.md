# Claude Context Specification

Essential project context. Full details in `.claude/specs/`.

## Tech Stack
React 18.3 • Vite 6.0 • Lodash • Inline CSS • No backend/DB

## Project Structure
`/src/` - Source code • `/tests/` - Tests • `/docs/` - Documentation • `/.claude/` - Context

---

## Critical Guard Rails

### 🧠 Memory Check (REQUIRED)
**ALWAYS check first:** `.claude/memory/active/quick-reference.md`
> TRIGGER: Before starting any task

### 📁 File Organization [FILE]
**[FILE-00001]** Keep root clean • Organize by type
> TRIGGER: When creating new files

### ✅ Verification [VERIFY]
**[VERIFY-00001]** Read code before recommending changes
> TRIGGER: Before proposing ANY changes

### ⚡ Execution [EXEC]
**[EXEC-00001]** Parallelize independent operations
> TRIGGER: Before making tool calls

---

## 📋 Task Management [TASK]
**[TASK-00001]** Use task tracking for multi-step work
**[TASK-00002]** Commit format: `"Fix: [Description] (Task: <id>)"`
> TRIGGER: When starting complex tasks

---

## 🧠 Context Management [CTX]
**[CTX-00001]** Memory: `.claude/memory/active/`
**[CTX-00002]** Search: quick-reference → structured → docs
> TRIGGER: When looking for patterns

---

## 🔥 Pain Points [PAIN]
**[PAIN-00001]** Track friction: `.claude/pain-points/active-pain-points.md`
> TRIGGER: When encountering blockers

---

## 📚 Quick Reference
**Memory**: `.claude/memory/active/quick-reference.md`
**Pain Points**: `.claude/pain-points/active-pain-points.md`
**Commands**: `/focus`, `/investigate`, `/brainstorm-design`, `/plan-as-group`

---

## 📰 AI News Digest [DIGEST]
**[DIGEST-00001]** The News Feed view has an AI News Digest section powered by Perplexity
- Data lives in `src/playerData.js` as the `NEWS_DIGEST` export
- To refresh: use `mcp__perplexity__search` to pull latest Liverpool FC news, then update the `NEWS_DIGEST` object with ~12 key topics
- Each topic has: `title`, `detail` (1-2 sentences), `category` ("transfers" | "injuries" | "matches" | "tactics" | "general")
- Update `generatedAt` timestamp and `sources` array when refreshing
> TRIGGER: When user asks to update/refresh the news digest

---

## ⚠️ Important Reminders
Do what is asked; nothing more, nothing less.
Verify assumptions before acting.
Parallelize independent work.
