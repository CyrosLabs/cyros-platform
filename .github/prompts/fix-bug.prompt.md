# Fix Bug

Investigate and fix the reported bug in the Cyros Labs repository.

Do not immediately modify code.

## Investigation

1. Read the repository-wide and relevant path-specific instructions.
2. Reproduce the problem when practical.
3. Identify the expected behavior.
4. Identify the actual behavior.
5. Trace the behavior to its root cause.
6. Inspect related code and tests before deciding on the fix.

Do not treat a symptom as the root cause.

## Fix Strategy

Prefer the smallest safe fix that addresses the root cause.

Do not:

* Rewrite unrelated code.
* Introduce new architecture without need.
* Disable validation.
* Weaken tests.
* Add a dependency when existing functionality is sufficient.

Preserve existing architectural boundaries.

If the root cause indicates an architectural problem, explain that separately rather than silently expanding the scope of the fix.

## Regression Protection

Add or update a test that would fail before the fix and pass afterward whenever practical.

The test should validate the behavior rather than merely reproduce the implementation.

Consider:

* Happy path
* Relevant edge cases
* Error behavior
* Invalid input
* Platform-specific behavior where applicable

## Validation

Run the narrowest relevant tests first.

Then run the broader validation appropriate to the affected area.

For Haru Haru:

```bash id="bi5yo3"
npm run lint
npx tsc --noEmit
npm test -- --runInBand
```

## Completion Criteria

Confirm:

* Root cause identified
* Bug fixed
* Regression test added or updated
* Existing tests still pass
* No unrelated behavior changed
* Documentation updated if required

At the end, summarize:

* Root cause
* Fix
* Regression test
* Validation performed
* Any remaining risks
