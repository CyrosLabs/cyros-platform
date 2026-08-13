Investigate and fix the failing tests.

First:

1. Read repository instructions.
2. Read the relevant feature documentation.
3. Read the implementation.
4. Read the failing tests.
5. Run the failing test(s) without modifying anything.

Determine whether the failure is caused by:

- Incorrect implementation.
- Incorrect test expectation.
- Ambiguous UI behavior.
- Duplicate rendered content.
- Test setup.
- Mock/data mismatch.

Fix the underlying problem.

Do not weaken or delete assertions simply to make the test pass.

After the fix:

- Run the affected tests.
- Run the full test suite if practical.
- Report exactly what changed and why.