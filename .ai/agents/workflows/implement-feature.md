# Implement Feature Workflow

Implementing features in this repository should follow the established project workflow, with a focus on incremental delivery, documentation, and validation.

## Purpose

- Build useful functionality with maintainability in mind.
- Keep contributions aligned to the repository structure and tooling.
- Ensure feature work is testable and documented.

## Steps

1. Start from the right branch.
   - Use `feature/<short-description>` based off `develop`.
   - Keep feature branches focused on one coherent goal.

2. Define success criteria.
   - Write acceptance criteria or expected behavior in the PR description.
   - Confirm how users or other services should experience the feature.

3. Develop iteratively.
   - Prefer small commits that are easy to review.
   - Add implementation and tests together.
   - If a feature touches multiple apps or packages, isolate the first working increment.

4. Keep documentation aligned.
   - Update `README.md`, `CONTRIBUTING.md`, `docs/`, or product docs when behavior changes or new setup is required.
   - If implementation changes architecture or platform behavior, record an ADR in `docs/adr`.

5. Validate locally.
   - Use Docker Compose if the feature depends on `database` or `redis`.
   - Run the repository's local validation steps, such as linting and tests if applicable.

6. Use feature flags or configuration for incomplete work.
   - If a feature is not ready for public release, keep it gated behind a configuration guard or incomplete UI state.

7. Prepare the PR.
   - Document what changed, why it changed, and how to verify it.
   - Mention relevant issues, design notes, or test coverage.

## Review

- The implementation should be correct, clear, and consistent with the repository's patterns.
- It should not introduce hidden side effects or unnecessary complexity.
