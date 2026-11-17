# Mission: Mastering AI agent skills for GitHub Copilot

## Why

Daniel has four skill providers installed (addyosmani/agent-skills, pstack
(michael-denyer/pstack-claude fork of poteto's pstack), humanlayer/skills,
mattpocock/skills) but only understands one of them. The goal: deliberately
curate a personal skill set and configuration for GitHub Copilot — one he
fully understands, can maintain, and can combine across providers — instead
of a cargo-culted setup whose hooks and files are a mystery.

## Success looks like

- Can explain how Copilot discovers, lists, and invokes skills on all four
  surfaces: VSCode, IntelliJ, Copilot Desktop App, Copilot CLI.
- Can explain the pstack setup end-to-end (poteto-mode mandate, SessionStart
  hook, `pstack-models.md` sheet) and make a deliberate keep/remove/configure
  decision about it.
- Has run at least one real experiment with the flagship flow of each
  provider (e.g. humanlayer `rpi`, pstack `poteto-mode`/`architect`/`arena`,
  addyosmani `planning-and-task-breakdown`/`tdd`).
- Knows how skills from different providers combine, collide, and layer
  (e.g. three TDD skills installed at once), and can route between them.
- Ends with a documented, curated final setup in this repo.

## Constraints

- GitHub Copilot only — not Claude Code, Codex, or Cursor (providers ship
  for those too; we only study the Copilot path).
- Prefer visuals and hands-on experiments over theory.
- Everything (lessons, notes, experiments, tooling, exercises, projects) lives in this repo.

## Out of scope

- Deep-diving mattpocock/skills — already mostly understood (see
  learning-records/0001).
- Authoring new skills from scratch (revisit after the curation decision).
- Non-Copilot harness mechanics (Claude Code hooks, Cursor rules, etc.),
  except where needed to understand what a provider translated for Copilot.

---

[Course index](index.html)
