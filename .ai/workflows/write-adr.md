# Write ADR Workflow

Architectural Decision Records in this repository should be concise, contextual, and follow the existing ADR structure.

## Purpose

- Capture important architectural decisions.
- Document the alternatives considered and why a decision was made.
- Keep the repository's architecture visible and discoverable.

## Steps

1. Choose a consistent ADR title.
   - Place the ADR file in `docs/adr` and name it with a numeric prefix, e.g. `0012-new-ci-workflow.md`.
   - Use a brief, descriptive title.

2. Follow the repository's ADR format.
   - Include at least these sections: Context, Decision, Consequences.
   - Summarize the problem, the chosen solution, and the expected trade-offs.

3. Link to related work.
   - Reference relevant docs such as `CONTRIBUTING.md`, `DEPLOYMENT.md`, or `docs/architecture/deployment.md`.
   - Note any required follow-up actions.

4. Keep the ADR focused.
   - Record decisions that affect architecture, platform behavior, or long-term maintainability.
   - Avoid using ADRs for small implementation details.

5. Review and publish.
   - Confirm the ADR is readable by non-technical stakeholders.
   - Include it in the PR that introduces the related change.

## Review

- The ADR should explain why the decision matters.
- It should be easy to understand and useful for future maintainers.
- It should be stored with the rest of the repository's architectural records.
