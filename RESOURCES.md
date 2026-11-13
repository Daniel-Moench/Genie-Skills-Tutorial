# AI Agent Skills Resources

## Knowledge

- [GitHub Docs: Agent skills (concept)](https://docs.github.com/en/copilot/concepts/customizations/agent-skills)
  Official definition, discovery locations (`.github/skills`, `.agents/skills`,
  `.claude/skills`; personal: `~/.copilot/skills` etc.), SKILL.md anatomy.
  Use for: any claim about how Copilot itself treats skills.
- [GitHub Docs: Adding agent skills](https://docs.github.com/en/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/add-skills)
  How-to for installing skills, incl. the cloud coding agent. Use for:
  per-surface setup differences.
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) (117k★)
  25 production-engineering-practice skills (TDD, debugging, context
  engineering…). Browsable index at [skills.addy.ie](https://skills.addy.ie).
  Use for: the "engineering playbook" provider; each SKILL.md is readable
  standalone.
- [michael-denyer/pstack-claude](https://github.com/michael-denyer/pstack-claude) (4.3k★)
  Multi-harness (incl. Copilot) translation of poteto's pstack. ~70 skills:
  workflow drivers (`poteto-mode`, `architect`, `arena`, `swarm`…) + 24
  `principle-*` skills + hooks + model-sheet setup. Use for: everything
  pstack; its `docs/` and `poteto-help` skill are the primary explainers.
- [poteto's upstream pstack (cursor/plugins)](https://github.com/cursor/plugins/tree/main/pstack)
  The original Cursor-primitive version. Use for: understanding what the
  fork translated and why design decisions exist.
- [humanlayer/skills](https://github.com/humanlayer/skills) (5.8k★)
  Small set (7 installed) centred on `rpi` (research → plan → implement with
  fresh sessions per phase) and agentic-loop builders. Use for: multi-phase,
  artifact-driven workflows.
- [mattpocock/skills](https://github.com/mattpocock/skills)
  Already mostly understood. Use for: comparison baseline and the `teach`
  workspace format driving this repo.
- Local primary source: `~\.copilot\installed-plugins\`
  The installed SKILL.md files themselves — always the ground truth for what
  a skill actually instructs. Use for: every lesson; read before trusting
  any summary (including README claims).
- Local: `~\.copilot\installed-plugins\pstack-claude\pstack\hooks\` and
  `~\.copilot\pstack-models.md`
  The real artifacts of the pstack setup on this machine. Use for: the
  pstack-demystification lesson.

## Wisdom (Communities)

- [github/awesome-copilot](https://github.com/github/awesome-copilot)
  GitHub-curated community catalogue of Copilot customizations; issues/PRs
  are an active practitioner surface. Use for: seeing which skills people
  actually adopt.
- [GitHub Community: Copilot discussions](https://github.com/orgs/community/discussions/categories/copilot)
  Official discussion forum. Use for: surface-specific questions (IntelliJ,
  Desktop App quirks) once self-experiments stall.
- Provider issue trackers (addyosmani/agent-skills, michael-denyer/pstack-claude,
  humanlayer/skills). Use for: asking usage questions directly to authors;
  high answer quality observed in all three.

## Gaps

- No official doc found yet on **plugin/marketplace mechanics** of Copilot
  CLI (`~/.copilot/installed-plugins`, `config.json` marketplaces) — current
  understanding comes from inspecting the local machine. Needs verification
  against CLI docs/changelog.
- Per-surface differences (IntelliJ vs Desktop App vs VSCode) are thinly
  documented → drive these via experiments, record results in lessons.
