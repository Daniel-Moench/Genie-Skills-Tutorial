# RUML agent-mandate experiment

This experiment formalizes one deterministic gate from
[`docs/agents/issue-tracker.md`](../../docs/agents/issue-tracker.md): before
creating an issue, identify and verify the target repository; if it is not the
user's repository, obtain confirmation.

[`issue-create-gate.ruml`](issue-create-gate.ruml) models two prerequisites:

1. The repository identity has been verified from the remote and
   `gh repo view --json nameWithOwner`.
2. The target is the user's repository, or the user has confirmed the target.

The root node is `true` only when both prerequisites are true. A missing input
produces `undefined`; an integration must fail closed and allow issue creation
only for a `true` result. The input facts should come from trusted tools or a
host, not from an unchecked model assertion.

## What this buys

- The gate is explicit, schema-validatable, and can be evaluated consistently.
- The result distinguishes a failed prerequisite from missing information.
- A source-document annotation can link the prose mandate to its formal
  counterpart.

## What this does not buy

RUML describes a decision; it does not make Copilot load this file, verify the
inputs, or block `gh issue create`. The HTML comment in the source document is
an experimental, repository-specific pointer, not a RUML-defined pragma. Real
enforcement needs an agent/runtime integration that supplies trusted inputs
and gates the tool call on the evaluation result.

Most of `AGENTS.md` is procedural guidance, context, or references rather than
a deterministic decision. Converting all of it to rulemaps would add
maintenance and interpretation costs without making those instructions more
enforceable. The promising pattern is to keep prose for how-to guidance and
nuance, and use RUML sidecars for a small number of deterministic gates.

## Expected outcomes

| Verified | User owns target | User confirmed target | Gate |
| --- | --- | --- | --- |
| true | true | false | true |
| true | false | true | true |
| true | false | false | false |
| missing | true | false | undefined |

These are a behavioral contract for an eventual adapter; this repository
experiment does not include that adapter.
