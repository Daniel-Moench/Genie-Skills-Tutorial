# Issue tracker: GitHub

Issues and specs for this repository live in GitHub Issues. Use the `gh` CLI. Infer the repository from `git remote -v`; before creating an issue, check `gh repo view --json nameWithOwner` and confirm the target if it is not the user's repository.
<!-- RUML experiment: ../../experiments/ruml-agent-mandates/issue-create-gate.ruml node=1 (draft; companion only, not enforced) -->
Never file issues in `mattpocock/skills` unless the user owns it.

## Conventions

- Create: `gh issue create --title "..." --body "..."`.
- Read: `gh issue view <number> --json number,title,body,labels,comments`.
- List: `gh issue list --state open --json number,title,body,labels,comments`, with appropriate label and state filters.
- Sub-issues: `gh issue create --parent <parent> ...` or `gh issue edit <parent> --add-sub-issue <child>` with gh 2.94+. On older versions, use `gh api --method POST repos/<owner>/<repo>/issues/<parent>/sub_issues -F sub_issue_id=<child-db-id>`. If sub-issues are unavailable, put `Part of #<parent>` at the top of the child body.
- Blocking: use GitHub's native issue dependencies. With gh 2.94+, use `gh issue create --blocked-by <n>,<n> ...` or `gh issue edit <child> --add-blocked-by <blocker>`. On older versions, use `gh api --method POST repos/<owner>/<repo>/issues/<child>/dependencies/blocked_by -F issue_id=<blocker-db-id>`. Fetch the blocker's numeric database ID with `gh api repos/<owner>/<repo>/issues/<n> --jq .id`; it is not the issue number or node ID. If dependencies are unavailable, put `Blocked by: #<n>, #<n>` at the top of the child body. A ticket is unblocked when every blocker is closed.
- Count open blockers: `gh api repos/<owner>/<repo>/issues/<n> --jq .issue_dependencies_summary.blocked_by`. If using `gh issue view <n> --json blockedBy`, filter out closed blockers.
- Comment: `gh issue comment <number> --body "..."`.
- Apply or remove a label: `gh issue edit <number> --add-label "..."` or `--remove-label "..."`.
- Close: post the explanation with `gh issue comment <number> --body "..."`, then `gh issue close <number>`. `gh issue close --comment` drops the comment on an already-closed issue.
- Resolve: apply `resolved` and close the issue.

## Pull requests as a triage surface

**PRs as a request surface: no.** Change this to `yes` if external pull requests should enter the triage queue. When enabled, use `gh pr view <number>`, `gh pr view <number> --comments`, and `gh pr diff <number>` to read a PR. List external PRs with `gh api --paginate 'repos/{owner}/{repo}/pulls?state=open'`, filtering out OWNER, MEMBER, and COLLABORATOR author associations. Use `gh pr comment`, `gh pr edit --add-label` or `--remove-label`, and `gh pr close` to act on them. Issues and PRs share a number space; check `gh pr view <number>` before falling back to `gh issue view <number>`.

## Skill operations

When a skill says to publish to the issue tracker, create a GitHub issue. When it asks to fetch a ticket, read the issue as above.

For `/wayfinder`, use one issue labelled `wayfinder:map` as the map, with child tickets linked as sub-issues. If sub-issues are unavailable, add children to a task list and put `Part of #<map>` in each child body. Label children with `wayfinder:<type>` (`research`, `prototype`, `grilling`, or `task`). List open children in map order, skip those with open blockers or an assignee, and claim the first remaining ticket with `gh issue edit <n> --add-assignee @me`. Resolve a ticket by commenting with the answer and closing it, then append a context pointer to the map's Decisions-so-far.
