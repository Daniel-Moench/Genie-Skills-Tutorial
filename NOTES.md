# Teaching notes

## User preferences

- Already knows what a skill is and mostly understands mattpocock/skills —
  skip beginner "what is a SKILL.md" material; mechanics and flows are the
  interesting part.
- Wants hands-on experiments, short lessons.
- Target surfaces: VSCode, IntelliJ, Copilot Desktop App, Copilot CLI.
- End goal is a decision: which skills to keep and how to configure them.
- Wants show-me-style visuals in lessons (file trees, call trees, Mermaid
  flow diagrams) — requested via `/show-me`, 2026-11-16. Reusable loader:
  `assets/mermaid.js`.

## Standing decisions

- **pstack setup stays as-is for now** (sheet `~\.copilot\pstack-models.md`,
  all roles `inherit-parent`, `session hook: on`). Lesson 0002 delivered the
  demystification; the keep/remove/reconfigure decision is deferred until
  after the hands-on poteto-mode experiment (backlog item 5).
- Lessons in English.

## Environment facts (verified 2026-11-13)

- Plugins live in `~\.copilot\installed-plugins\<marketplace>\<plugin>\`:
  `addy-agent-skills` (25 skills), `mattpocock` (40), `pstack-claude` (~70),
  `skills` = humanlayer (7), `_direct` (1: ai-prompt-engineering-safety-review).
- pstack hooks ship **inside the plugin** (`...\pstack\hooks\`); setup-pstack
  generated only `~\.copilot\pstack-models.md`.
- Registration: `~\.copilot\config.json` (marketplaces) and
  `~\.copilot\settings.json` (`"pstack@pstack-claude": true`).

## Planned repo structure

- `lessons/` `reference/` `learning-records/` `assets/` — teach-skill layout.
- `index.html` — GitHub Pages entry point; update its lesson/reference tables
  whenever a new lesson or cheat sheet lands.
- `experiments/` — created lazily when the first hands-on experiment with a
  skill produces artifacts worth keeping.
- `docs/agents/` — pre-existing agent conventions (issue tracker, triage).

## Lesson backlog (rough ZPD order)

1. ✔ Skill discovery & loading mechanics (0001)
2. ✔ pstack demystified: poteto-mode, hooks, model sheet (0002) — decision
   itself deferred to after item 5
   - ✔ Follow-up (0003): inside the hook engine — multi-runtime folder map,
     awk rationale, PreToolUse gate, Windows `exit 0`, `session hook: off`
     correction. Triggered by Daniel's pushback on lesson 0002.
3. Provider philosophies compared: addyosmani vs pstack vs humanlayer vs
   mattpocock (routing map: which provider for which job)
4. Experiment: humanlayer `rpi` end-to-end on a toy task
5. Experiment: pstack `poteto-mode` routing (+ `architect` or `arena`)
6. Combining providers: collisions (3× TDD), layering, custom routing
7. Per-surface behavior: CLI vs VSCode vs IntelliJ vs Desktop App
8. Final curation: choose the set, write the config, document it
