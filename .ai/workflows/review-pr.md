# Review PR Workflow

Pull request reviews for this repository should focus on correctness, maintainability, and alignment with project conventions.

## Purpose

- Provide actionable feedback.
- Ensure the contribution meets repository quality standards.
- Validate tests, docs, and workflows.

## Steps

1. Review the scope.
   - Confirm the PR is limited to a single feature or fix.
   - If it is too large, ask the author to split it into smaller changes.

2. Check tests.
   - Verify new or changed code is covered by tests.
   - Confirm any existing tests still pass with the changes.

3. Validate documentation.
   - Ensure README, CONTRIBUTING, or relevant docs are updated when needed.
   - Confirm the PR description includes clear verification steps.

4. Review workflow expectations.
   - Confirm CI will run the project workflows already defined in `.github/workflows`.
   - Raise issues if the PR introduces new files or technologies that are not supported by the current workflow.

5. Provide clear feedback.
   - Use line comments for specific code issues.
   - Use summary comments for larger design or scope concerns.
   - If the PR is ready, approve it; otherwise request changes with concrete guidance.

## Review checklist

- [ ] Code is readable and maintainable.
- [ ] The implementation does not introduce unnecessary complexity.
- [ ] Tests exist and are meaningful.
- [ ] Documentation is updated as required.
- [ ] The PR aligns with the project workflow and branch strategy.
