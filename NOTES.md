# Teaching notes

## User preferences

- Already knows what a skill is and mostly understands mattpocock/skills —
  skip beginner "what is a SKILL.md" material; mechanics and flows are the
  interesting part.
- Wants hands-on experiments.
- Target surfaces: VSCode, IntelliJ, Copilot Desktop App, Copilot CLI.
- End goal is a decision: which skills to keep and how to configure them.
- Wants visuals in lessons — requested via `/show-me` skill (not model-invocable,
  use `~\.copilot\installed-plugins\skills\show-me\skills\show-me\SKILL.md`).

## Standing decisions

- **pstack setup stays as-is for now** (sheet `~\.copilot\pstack-models.md`,
  all roles `inherit-parent`, `session hook: on`). Lesson 0002 delivered the
  demystification; the keep/remove/reconfigure decision is deferred until
  after the hands-on poteto-mode experiment (backlog item 5).
- Lessons in English.

## Environment facts (verified 2026-11-13)

- Plugins live in `~\.copilot\installed-plugins\<marketplace>\<plugin>\`:
  `addy-agent-skills` (25 skills), `mattpocock` (39: 20 eng, 7 productivity,
  8 in-progress, 4 misc), `pstack-claude` (67 in `skills\` + 1 grok slice),
  `skills` = humanlayer (7), `_direct` (1: ai-prompt-engineering-safety-review).
  Counts verified via SKILL.md file count 2026-11-17.
- pstack hooks ship **inside the plugin** (`...\pstack\hooks\`); setup-pstack
  generated only `~\.copilot\pstack-models.md`.
- Registration: `~\.copilot\config.json` (marketplaces) and
  `~\.copilot\settings.json` (`"pstack@pstack-claude": true`).

## Planned repo structure

- `lessons/` `reference/` `learning-records/` `assets/` — teach-skill layout;
  doc conventions (index tables, index links, shared stylesheet, browser
  verification) live in `AGENTS.md` → "Workspace docs".
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
3. ✔ Provider philosophies compared (0004): control axis, four portraits,
   collision domains, routing map. humanlayer "TDD" = Technical Design
   Document, not test-driven development.
4. Experiment: humanlayer `rpi` end-to-end on a toy task
5. Experiment: pstack `poteto-mode` routing (+ `architect` or `arena`)
6. Combining providers: collisions (3× TDD), layering, custom routing
7. Per-surface behavior: CLI vs VSCode vs IntelliJ vs Desktop App
8. Final curation: choose the set, write the config, document it

---

[Course index](index.html)
