# AI Agent Skills Glossary

Canonical terminology for learning how agent skills work in GitHub Copilot.
Terms are added only once understood (see teach-skill rules).

## Terms

**Skill**:
A folder with a `SKILL.md` (YAML frontmatter: `name`, `description`; body:
instructions) that an agent loads on demand to follow a defined workflow.
_Avoid_: prompt, command, recipe

**Provider**:
A maintained collection of skills from one author/org (addyosmani, pstack,
humanlayer, mattpocock), installed as a unit.
_Avoid_: library, pack

**Progressive disclosure**:
Copilot's context strategy for skills: sessions carry only a name+description
index; a skill's body enters context only when the skill is invoked.
_Avoid_: lazy loading, preloading

**Trigger surface**:
A skill's `description` field, which the model matches against the task to
decide automatic invocation — the cause of provider collisions.
_Avoid_: summary, docstring

---

[Course index](index.html)
