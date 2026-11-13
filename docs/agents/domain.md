# Domain docs

## Before exploring

Read `GLOSSARY.md` at the repository root and any ADRs in `docs/adr/` that touch the area. If either is absent, proceed silently. Do not suggest creating them upfront. `/domain-modeling`, reached through `/grill-with-docs` and `/improve-codebase-architecture`, creates them when terms or decisions are resolved.

## File structure

This is a single-context repository. Its glossary is `GLOSSARY.md` at the root and its architectural decision records live in `docs/adr/`.

## Use the glossary's vocabulary

Use the glossary's defined terms when naming domain concepts in issues, refactor proposals, hypotheses, and tests. Avoid synonyms the glossary explicitly rejects. If a concept is missing, reconsider whether the project uses it or note the gap for `/domain-modeling`.

## Flag ADR conflicts

If output contradicts an existing ADR, name the ADR and explain the conflict rather than silently overriding it.
