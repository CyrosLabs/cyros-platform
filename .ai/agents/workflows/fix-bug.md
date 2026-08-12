# Fix Bug Workflow

Bug fixes in this project should be reproducible, isolated, and verified by tests.

## Purpose

- Confirm the bug before changing code.
- Fix it with minimal impact.
- Add regression coverage so the issue does not return.

## Steps

1. Reproduce the bug locally.
   - Follow the reported steps exactly.
   - Use local tooling such as Docker Compose and the repository's documented environment.
   - Ensure the issue is not caused by missing configuration or stale data.

2. Record the failure.
   - Note the exact behavior, error messages, and where it occurs.
   - If possible, capture logs or screenshots for frontend issues.

3. Add or update tests.
   - Prefer adding a regression test before patching the code.
   - Use the same test framework and conventions already present in the repository.

4. Apply the fix.
   - Keep the change small and focused on the root cause.
   - Avoid broad refactors unless they are required to fix the bug safely.

5. Validate the fix.
   - Run the new regression test and any existing tests that cover the same area.
   - Ensure the repository's CI patterns are respected.

6. Document if necessary.
   - If the bug exposed a gap in the documentation, update `README.md`, `CONTRIBUTING.md`, or relevant product/docs markdown.

7. Branch and commit.
   - Use `bugfix/<short-description>` or `hotfix/<short-description>` for urgent fixes.
   - Write a conventional commit message such as `fix(api): correct validation logic for user profile`.

## Review

- The fix should be easy to verify from the test coverage.
- The intent and scope should be clear from the branch name, commit message, and PR summary.
