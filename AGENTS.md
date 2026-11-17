# Agent instructions

## Issue tracker

Issues are tracked in GitHub Issues. See `docs/agents/issue-tracker.md`.

## Triage labels

Use the default triage roles and the additional `needs-grilling` and `resolved` labels. See `docs/agents/triage-labels.md`.

## Domain docs

This repository uses a single-context layout. See `docs/agents/domain.md`.

## Workspace work

- See `MISSION.md` for the workspace purpose.
  - For this purpose, use skill `/mattpocock-skills:teach` (resolve explicitly via `~/.copilot/installed-plugins/mattpocock/mattpocock-skills/skills/productivity/teach/SKILL.md` + references), always deepened by skill `/pstack:teach` and `/show-me` (resolve explicitly via `~/.copilot/installed-plugins/skills/show-me/skills/show-me/SKILL.md`). If any not available, abort and report.
- Continuously improve and extend workspace structure and tooling as it evolves. Don't refrain from restructurings when necessary to maintain clarity and efficiency.
  - Use proper sub-directories for project exercises or other hands-on activities.
- For HTML/assets:
  - Webpages are served via "Github Pages" @ https://daniel-moench.github.io/Genie-Skills-Tutorial/ against the "main" branch.
  - Continuously update `index.html`. Documents should include navigation back to it.
  - Use wide-screen layouts, optimize for 2560x1440.
  - Review gate before publishing HTML/asset changes:
    1. **Critique:** On a sub-agent with the strongest model on clean context, apply the skills above to concept progression; then run a review via `/impeccable critique <path>` in Read mode.
    2. **Audit:** On a sub-agent with the strongest model on clean context, run a review via `/impeccable audit <path>`. Inspect rendered screenshots via browser tools or Playwright MCP at `2560x1440` and `390x844` (canvas and window).
    3. **Close:** Fix findings and confirm affected views. It is OK to adapt shared assets so general improvements are reflected over the whole workspace. Record evidence and any explicitly deferred findings in the PR; delete `.playwright-mcp/` after successful verification.

## Git

- Do all work on feature branches and push those branches. You can use worktrees, but only when necessary for parallel work or isolated testing.
- `main` moves only through pull requests that you create (fast-forward mode). Use `/visual-pr` to generate and manage pull requests (omit generating `description.md`/`pr-description.md`). Provide clickable links for the PRs in your user-facing output and open them in the system browser.
- Conventional Commits, at least one commit per ticket (e.g. `feat: scaffold Gradle project`, `fix: the wrong behavior XYZ`). Keep it concise. Add rationale about _why_ a change was made in the commit message. Use markdown syntax. Wrap comment lines at 80 chars - for soft-wraps, use trailing `  `-syntax, not `/`. Quote artifact names & references with `backticks`. Use bullet-list(s) for structure. For inline references to related tickets, use "#123"-style. Finish with fully-qualified Github reference(s) of the processed ticket number(s) and title(s). Example:

  ```txt
  fix: wrong behavior XYZ

  * Feature foobar ran into issue ABC when input "DEF" is given, especially in `doIt()`.
    * Already partially fixed on #111. Similar thing reported in comments of #99.
  * Integrate validation into `MyHandler` to get correct result.

  Daniel-Moench/Genie-Skills-Tutorial#123: Bug Ticket Title
  Daniel-Moench/Genie-Skills-Tutorial#321: Another involved ticket title
  ```

- Keep each commit's content focused and self-contained. Include everything needed for one coherent change, incl. it's document work.
- Clean history approach: When committing, evaluate against recent commit messages and their contents. i.e.:
  - To maintain a clean, consistent and logical commit history, you are allowed to amend or fixup recent commits on your feature branches. Feature branches can be rebased and reshaped as a whole. Always explicitly report any rebases or amends to the user.
