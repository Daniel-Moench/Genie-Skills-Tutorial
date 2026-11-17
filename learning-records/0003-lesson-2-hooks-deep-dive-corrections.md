# Lesson 2 verified: hooks deep dive, two corrections absorbed

Daniel read lesson 0002 and immediately stress-tested it against the real
hooks folder — exactly the evidence-first behavior the mission wants. His
pushback surfaced one oversimplification and one outright gap, both now fixed
in lesson 0003.

## Evidence

Self-reported 2026-11-17: "I read the lesson. 2 things: 1. To be honest, the
hook folder is not as straightforward as you claim" — attaching all 21 hook
files, including the awk engine.

## Misconceptions corrected

- **"The hooks folder is complex" → it is multi-runtime, not complex for
  Copilot.** One plugin multiplexes hooks for ~10 runtimes; the Copilot/
  Windows slice is five files. The awk files are the Unix engine, written in
  awk because POSIX guarantees only sh and awk.
- **Lesson 0002's switch table was incomplete.** `session hook: off` in
  `pstack-models.md` is a native mandate-off switch that keeps all skills
  invocable — lesson 0002 claimed the user-instruction override was the only
  skills-preserving option. Lesson 0002 and reference 0002 patched.

## Implications

- Daniel engages with lesson content critically and checks primary sources;
  future lessons can safely assign "read the file yourself" homework.
- New working knowledge available to build on: PreToolUse semantics (a
  failing hook can deny), the Windows `exit 0` rationale and its two costs
  (more prompts, advisory-only sheet enforcement).
- Lesson 0002's quiz outcome not yet reported; the keep/remove/reconfigure
  decision still waits for the poteto-mode experiment (backlog item 5).
