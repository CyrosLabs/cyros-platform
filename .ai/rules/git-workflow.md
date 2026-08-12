# Git Workflow

## Purpose

These rules define how AI agents should interact with Git and GitHub in the Cyros Platform repository.

The repository's GitHub ruleset is authoritative for server-side branch protection and merge requirements.

---

## 1. Main Branch

`main` is the protected integration branch.

AI agents must never:

- Force push to `main`.
- Delete `main`.
- Rewrite `main` history.
- Bypass repository protections.
- Disable required checks to merge a change.

Changes should be developed on a separate branch and merged through the repository's approved process.

---

## 2. Branches

Use a dedicated branch for a meaningful change.

Branch names should clearly communicate the purpose.

Prefer patterns such as:

- `feature/<short-description>`
- `fix/<short-description>`
- `refactor/<short-description>`
- `docs/<short-description>`
- `chore/<short-description>`

Do not create unnecessarily long or ambiguous branch names.

---

## 3. Commits

Commits should be:

- Focused
- Understandable
- Related to one logical change
- Free of unrelated modifications

Do not create commits containing generated noise or unrelated formatting changes.

AI agents should not create a large number of meaningless commits solely to demonstrate progress.

---

## 4. History

Preserve a clean and understandable project history.

Do not rewrite shared history.

Before rebasing or resetting, determine whether the branch is already shared with others.

Never use destructive Git commands when the impact is unclear.

Examples of potentially destructive operations include:

- `git reset --hard`
- `git push --force`
- `git clean -fd`
- History rewriting

When a destructive operation is necessary, explicitly verify its intended scope before performing it.

---

## 5. Pull Requests

A pull request should explain:

- What changed.
- Why it changed.
- Which areas are affected.
- How the change was validated.
- Any known risks.
- Any architectural decisions.

Keep PRs focused.

Do not mix unrelated features, refactors, and fixes unless there is a clear reason.

---

## 6. Validation Before Commit/PR

Before considering a change ready:

1. Inspect the diff.
2. Check for unintended files.
3. Run relevant tests.
4. Run linting where applicable.
5. Run type checking where applicable.
6. Verify documentation requirements.
7. Verify no secrets or sensitive data were introduced.

Do not claim validation succeeded without actually running it or having reliable evidence that it succeeded.

---

## 7. AI-Generated Changes

AI agents must not automatically commit or push changes unless explicitly authorized by the user or workflow.

Before committing AI-generated work:

- Review the diff.
- Confirm scope.
- Confirm tests.
- Confirm no accidental changes.
- Confirm the commit message accurately represents the change.

---

## 8. Pull Request Scope

A PR should not contain:

- Unrelated refactoring
- Temporary debugging code
- Unused imports
- Generated artifacts that do not belong in Git
- Secrets
- Local environment files
- Unexplained dependency changes

---

## 9. Merge Safety

Do not bypass failing checks.

If a check fails:

1. Determine the cause.
2. Fix the underlying problem where appropriate.
3. If the failure is unrelated, document it clearly.
4. Do not suppress or bypass the check merely to merge.

---

## 10. AI-Specific Requirement

Git operations are consequential actions.

When an AI agent is unsure whether an operation is destructive, shared, or irreversible, it must stop and ask rather than guessing.