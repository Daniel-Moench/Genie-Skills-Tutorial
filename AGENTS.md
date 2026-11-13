# Agent instructions

## Issue tracker

Issues are tracked in GitHub Issues. See `docs/agents/issue-tracker.md`.

## Triage labels

Use the default triage roles and the additional `needs-grilling` and `resolved` labels. See `docs/agents/triage-labels.md`.

## Domain docs

This repository uses a single-context layout. See `docs/agents/domain.md`.

## Committing

- Conventional Commits, at least one commit per ticket (e.g. `feat: scaffold Gradle project`, `fix: the wrong behavior XYZ`). Keep it concise. Add rationale about _why_ a change was made in the commit message. Use markdown syntax. Wrap comment lines at 80 chars - for soft-wraps, use trailing `  `-syntax, not `/`. Quote artifact names & references with `backticks`. Use bullet-list(s) for structure. For inline references to related tickets, use "#123"-style. Finish with fully-qualified Github reference(s) of the processed ticket number(s) and title(s). Example:
  - ```txt
    fix: wrong behavior XYZ

    * Feature foobar ran into issue ABC when input "DEF" is given, especially in `doIt()`.
      * Already partially fixed on #111. Similar thing reported in comments of #99.
    * Integrate validation into `MyHandler` to get correct result.

    Daniel-Moench/Genie-Skills-Tutorial#123: Bug Ticket Title
    Daniel-Moench/Genie-Skills-Tutorial#321: Another involved ticket title
    ```

- Keep each commit's content focused and self-contained. Include everything needed for one coherent change, incl. it's document work.
- When committing, evaluate against recent commit messages and their contents. i.e.:
  - To maintain a clean, consistent and logical commit history, you are allowed to amend or fixup recent commits on your feature branch. Feature branches can be rebased and reshaped as a whole. Always explicitly report any rebases or amends to the user.
