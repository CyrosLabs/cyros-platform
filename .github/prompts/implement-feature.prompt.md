# Implement Feature

Implement the requested feature in the Cyros Labs repository.

## Before Coding

1. Read the repository-wide Copilot instructions.
2. Read the relevant path-specific instructions.
3. Read the relevant architecture documentation.
4. Inspect the existing implementation before creating new files.
5. Identify existing components, services, utilities, Platform capabilities, and packages that can be reused.
6. Confirm the correct ownership boundary for the feature.

Do not redesign unrelated parts of the repository.

## Implementation Rules

Follow existing repository patterns.

Prefer:

* Small, focused changes
* Existing abstractions
* Strong TypeScript types
* Clear ownership
* Testable business logic
* Reuse where justified
* Simple solutions

Avoid:

* Unnecessary dependencies
* Premature abstractions
* Product-to-product coupling
* Large unrelated refactors
* Duplicating existing Platform or Package functionality

Keep product-specific behavior in the product.

Keep shared capabilities in the Platform.

Keep generic technical functionality in Shared Packages.

## Implementation Process

1. Inspect the current code.
2. Identify the smallest coherent implementation.
3. Implement the feature.
4. Add or update tests.
5. Update relevant documentation.
6. Run the appropriate validation commands.
7. Review the final diff for unrelated changes.

## Validation

Run the project's canonical validation commands for the affected area.

For Haru Haru, use:

```bash id="7e6i3m"
npm run lint
npx tsc --noEmit
npm test -- --runInBand
```

Do not modify CI or tests simply to make validation pass.

## Completion Criteria

Before considering the task complete, verify:

* The requested behavior is implemented.
* Existing behavior is preserved unless intentionally changed.
* Tests cover meaningful behavior.
* TypeScript validation passes where applicable.
* Lint passes where applicable.
* Documentation is updated where necessary.
* No secrets or sensitive data were introduced.
* No unrelated files were changed.

At the end, summarize:

* What changed
* Why it was implemented this way
* Tests and validation performed
* Any remaining limitations or follow-up work
