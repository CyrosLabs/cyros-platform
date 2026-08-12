---

## applyTo: "apps/**/web/**,apps/**/frontend/**,platform/**/web/**,platform/**/frontend/**"

# Frontend Instructions

## Scope

These instructions apply to web frontend applications and web-specific user interfaces.

Frontend code belongs to the product experience unless it is a genuinely reusable Platform or Package capability.

---

## Architecture

Keep the following responsibilities separate:

```text
UI
 ↓
Product Feature
 ↓
Platform / Shared Capability
```

Do not put product business rules into generic UI components.

Do not make reusable components aware of a specific product unless the component is explicitly product-owned.

---

## Components

Prefer small, focused components.

Components should primarily handle:

* Presentation
* User interaction
* Local UI state
* Composition

Move substantial business logic into testable feature or domain modules rather than embedding it deeply inside rendering code.

Prefer composition over large configurable components with many unrelated props.

---

## State

Choose the smallest state mechanism that satisfies the requirement.

Prefer:

1. Local component state for local UI state.
2. Feature-level state for feature-specific state.
3. Platform capabilities for genuinely shared state or services.

Do not introduce global state merely because several components currently need to communicate.

Do not duplicate server or platform state unnecessarily in frontend state.

---

## Data Access

Keep API and external-service access behind clear boundaries.

Do not scatter raw network calls throughout presentation components.

Prefer existing repository abstractions for:

* Authentication
* Networking
* API clients
* Error handling
* Configuration

Frontend code should not contain server credentials or secrets.

---

## Accessibility

Accessibility is part of product quality.

Prefer semantic elements, meaningful labels, keyboard support, visible focus behavior, and appropriate contrast.

Do not treat accessibility as an optional enhancement for core interactions.

---

## UI Consistency

Use existing design tokens, themes, and shared components where available.

Before creating new:

* Colors
* Typography
* Spacing
* Buttons
* Form controls
* Layout primitives

check the existing design system.

Avoid visually similar but independently implemented components.

---

## Performance

Avoid premature optimization.

Pay particular attention to:

* Unnecessary renders
* Expensive work during rendering
* Large client-side payloads
* Unnecessary network requests
* Unbounded lists

Optimize only when the behavior requires it or measurements identify a meaningful issue.

---

## Error and Loading States

User-facing asynchronous operations should account for:

* Loading
* Success
* Empty states
* Errors
* Retry or recovery where appropriate

Do not leave users with silent failures.

---

## Testing

Prefer tests that verify user-observable behavior.

Test:

* Important user flows
* State transitions
* Validation
* Error handling
* Accessibility-critical behavior

Avoid tests that tightly couple to implementation details when equivalent behavior-level assertions are available.

---

## TypeScript

Prefer strong types.

Avoid `any` unless there is a documented reason.

Reuse established domain and API types where appropriate.

Do not duplicate API models manually when a shared type or generated type already exists.

---

## Changes

When implementing frontend changes:

* Follow existing component and styling conventions.
* Reuse existing design-system primitives.
* Keep product logic out of generic components.
* Avoid adding state-management infrastructure for small problems.
* Preserve accessibility.
* Add or update tests for meaningful behavior changes.
