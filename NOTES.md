# Teaching notes

## User preferences

- Already knows what a skill is and mostly understands mattpocock/skills —
  skip beginner "what is a SKILL.md" material; mechanics and flows are the
  interesting part.
- Wants hands-on experiments, short lessons.
- Target surfaces: VSCode, IntelliJ, Copilot Desktop App, Copilot CLI.
- End goal is a decision: which skills to keep and how to configure them.

## Standing decisions

- **pstack setup stays as-is for now** (sheet `~\.copilot\pstack-models.md`,
  all roles `inherit-parent`, `session hook: on`). A dedicated lesson will
  demystify it; Daniel decides keep/remove/reconfigure afterwards.
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
- `experiments/` — created lazily when the first hands-on experiment with a
  skill produces artifacts worth keeping.
- `docs/agents/` — pre-existing agent conventions (issue tracker, triage).

## Lesson backlog (rough ZPD order)

1. ✔ Skill discovery & loading mechanics (0001)
2. pstack demystified: poteto-mode, hooks, model sheet → removal decision
3. Provider philosophies compared: addyosmani vs pstack vs humanlayer vs
   mattpocock (routing map: which provider for which job)
4. Experiment: humanlayer `rpi` end-to-end on a toy task
5. Experiment: pstack `poteto-mode` routing (+ `architect` or `arena`)
6. Combining providers: collisions (3× TDD), layering, custom routing
7. Per-surface behavior: CLI vs VSCode vs IntelliJ vs Desktop App
8. Final curation: choose the set, write the config, document it
