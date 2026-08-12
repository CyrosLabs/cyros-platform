# Coding Standards

## Purpose

These rules define how AI agents should write and modify code in the Cyros Platform repository.

Repository-specific configuration always takes precedence over generic coding conventions.

Before changing code, inspect the relevant:

- `package.json`
- TypeScript configuration
- ESLint configuration
- Test configuration
- Framework configuration
- Existing neighboring code

Do not invent conventions when the repository already establishes one.

---

## 1. General Principles

Write code that is:

- Clear
- Explicit
- Maintainable
- Testable
- Small in scope
- Consistent with existing code
- Appropriate to its architectural layer

Prefer readability over cleverness.

Prefer simple solutions over unnecessary abstractions.

Do not optimize code without evidence that optimization is required.

---

## 2. Existing Patterns First

Before creating a new implementation:

1. Search the repository for similar functionality.
2. Inspect how the existing functionality is structured.
3. Reuse established patterns when appropriate.
4. Extend an existing abstraction when it genuinely owns the new behavior.

Do not introduce a new pattern when an established pattern already solves the problem.

Do not refactor unrelated code merely because it could be improved.

---

## 3. Type Safety

For TypeScript code:

- Prefer explicit and meaningful types.
- Avoid `any` unless there is a documented reason.
- Do not silence TypeScript errors merely to make validation pass.
- Prefer narrowing and proper type modeling over unsafe casts.
- Keep public interfaces intentional.
- Avoid unnecessary type duplication.

Do not use `as any`, `@ts-ignore`, or equivalent mechanisms as shortcuts.

If a type error reveals a real design problem, fix the underlying problem instead of suppressing it.

---

## 4. Functions and Components

Prefer focused functions and components.

A function or component should have a clear responsibility.

Avoid:

- Large functions with unrelated responsibilities.
- Components that mix unrelated concerns.
- Hidden side effects.
- Deeply nested conditional logic when clearer alternatives exist.
- Premature generic abstractions.

Extract functionality when doing so improves ownership, testing, or readability.

Do not extract code solely to reduce line count.

---

## 5. Error Handling

Errors must be handled intentionally.

Do not:

- Silently swallow errors.
- Catch errors without understanding them.
- Return fake success values.
- Hide failures from users or calling services.
- Log sensitive information.

Errors should preserve enough context for diagnosis without exposing secrets or private data.

---

## 6. Dependencies

Before adding a dependency:

1. Check whether the repository already provides equivalent functionality.
2. Determine whether the dependency is appropriate for the architectural layer.
3. Consider bundle size and runtime impact where relevant.
4. Consider maintenance and security implications.
5. Avoid adding a dependency for trivial functionality.

Do not add libraries merely because they are popular.

---

## 7. Comments

Comments should explain:

- Why something exists.
- Why an unusual approach was necessary.
- Important constraints.
- Non-obvious architectural decisions.

Do not write comments that merely restate the code.

Do not use comments to justify code that should instead be simplified.

---

## 8. Configuration

Configuration must remain separate from business logic where appropriate.

Do not hardcode:

- Secrets
- Environment-specific credentials
- Production URLs
- API keys
- Tokens
- Private identifiers

Use the repository's established configuration mechanism.

---

## 9. Scope Control

When implementing a task:

- Modify only what is necessary.
- Avoid unrelated refactoring.
- Avoid changing public APIs without justification.
- Avoid renaming unrelated files.
- Avoid formatting unrelated files.

A small, focused change is preferred over a broad cleanup.

---

## 10. Validation

After changing code, run the most relevant available validation.

For Haru Haru, the current repository provides:

- Jest tests
- ESLint
- TypeScript validation

Use the project's actual scripts/configuration rather than inventing commands.

A change is not considered complete merely because the code looks correct.

---

## 11. AI-Specific Requirement

AI agents must distinguish between:

- Existing project convention
- Generic best practice
- Personal preference
- New architectural proposal

Do not represent generic best practices as Cyros project requirements.

When uncertain, inspect the repository before deciding.