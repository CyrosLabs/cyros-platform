# Design Feature Workflow

When designing a new feature for this repository, follow the project conventions and keep the work aligned with Cyros Labs product principles.

## Purpose

- Define the user problem clearly.
- Capture the expected outcome and success criteria.
- Keep the design simple, incremental, and consistent with existing platform patterns.

## Steps

1. Validate the problem.
   - Review the relevant product vision or requirements documents in `docs/products`.
   - Confirm the feature supports the repository's current focus: thoughtful companions and platform experiences.

2. Write a concise design summary.
   - Document the feature intent, user flow, and desired behavior.
   - Include a clear success criterion and any acceptance criteria.
   - Reference related docs such as `README.md`, `CONTRIBUTING.md`, or product requirements.

3. Choose the right branch.
   - Create a branch using `feature/<short-description>`.
   - Base it on `develop` unless the work is an urgent production fix.

4. Keep iteration small.
   - Break larger designs into smaller, testable increments.
   - Prefer a narrow, usable slice over a broad, unfinished scope.

5. Share with collaborators.
   - Use PR descriptions, comments, or draft PRs to gather feedback before implementation.
   - Update the design as feedback evolves.

6. Track the design.
   - If the feature impacts architecture or platform-level behavior, add an ADR in `docs/adr`.
   - If the feature is product-facing, update relevant product documentation and requirements.

## Review

- The design should be easy to understand for engineers and stakeholders.
- It should align with the repository's documented workflow and deployment expectations.
- Acceptance criteria should be testable and observable.
