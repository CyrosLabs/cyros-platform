# Cyros Labs Copilot Instructions

## Repository Context

Cyros Labs is a platform-first software repository.

The repository contains:

* Product applications in `apps/`
* Shared platform capabilities in `platform/`
* Shared technical libraries in `packages/`
* Product content in `content/`
* Infrastructure and deployment in `infrastructure/`
* Development tooling in `docker/`, `scripts/`, and `tools/`
* Documentation in `docs/`
* AI-assisted engineering guidance in `.ai/`

Before making architectural changes, consult the relevant documentation in `docs/architecture/`.

Primary architecture references:

* `docs/architecture/overview.md`
* `docs/architecture/platform.md`
* `docs/architecture/platform-boundaries.md`
* `docs/architecture/repository-structure.md`
* `docs/architecture/system-design.md`
* `docs/architecture/decision-principles.md`

These documents are the source of truth for repository architecture. Do not invent a competing architecture when an existing documented pattern applies.

---

## Architectural Boundaries

### Products

`apps/` contains product applications.

Products own:

* User experiences
* Product-specific business rules
* Product-specific business flows
* Product orchestration

Products should consume shared capabilities rather than reimplementing them.

Products must not depend directly on other products.

### Platform

`platform/` contains shared capabilities used across products.

The Platform owns capabilities that are intentionally reusable across products, such as identity, AI, messaging, notifications, payments, search, storage, analytics, and similar cross-product functionality.

Platform code must remain independent from individual products.

Do not move product-specific business logic into the Platform simply because it may be reusable in the future.

### Shared Packages

`packages/` contains generic technical libraries shared across the repository.

Examples include:

* Types
* UI
* Networking
* Configuration
* Utilities
* Design tokens

Packages must remain generic and must not contain product-specific business logic.

### Content

`content/` contains product or domain content maintained independently from application logic.

Content should not depend unnecessarily on application implementation details.

### Infrastructure

`infrastructure/`, `docker/`, and related operational tooling provide deployment and operational capabilities.

Infrastructure concerns should remain separate from product business logic.

---

## Dependency Direction

Prefer this dependency model:

```text
Products
   ↓
Platform
   ↓
Shared Packages
```

Infrastructure supports the system and should not become a business-logic dependency.

Products must not directly depend on other products.

When a capability is needed by multiple products, determine whether it belongs in the Platform or in a generic Shared Package rather than creating product-to-product coupling.

---

## General Development Rules

Before changing code:

1. Understand the existing implementation.
2. Identify the repository boundary being changed.
3. Check the relevant architecture and development documentation.
4. Follow established repository patterns.
5. Prefer the smallest coherent change.
6. Reuse existing functionality before introducing new abstractions.
7. Avoid unrelated refactoring.
8. Preserve existing public interfaces unless the task requires changing them.

Do not introduce new architecture, abstractions, or dependencies without a concrete requirement.

When a change crosses an architectural boundary, document the reason and update the relevant architecture documentation.

---

## Code Quality

Prefer:

* Clear and maintainable code
* Strong typing
* Small, focused components and functions
* Existing repository conventions
* Explicit boundaries
* Simple solutions over unnecessary abstraction
* Reuse where reuse is justified

Avoid:

* `any` without a clear reason
* Duplicate implementations
* Premature abstractions
* Large monolithic components
* Product-specific logic in shared code
* Architectural changes driven only by hypothetical future requirements

Do not optimize for theoretical scale at the expense of present simplicity.

---

## Testing and Validation

Every behavior change should be validated at the narrowest appropriate scope.

Tests should be added or updated when behavior changes.

Do not remove or weaken tests merely to make CI pass.

Use the project's existing scripts and validation commands rather than bypassing them.

When changing shared Platform or Package code, consider the impact on all consumers.

GitHub Actions are part of the repository's engineering controls. Do not modify workflows or configuration simply to bypass a failing check.

---

## Security

Treat security as a repository-wide concern.

Never:

* Commit secrets, tokens, credentials, or private keys.
* Hardcode sensitive configuration.
* Disable security checks to make a change pass.
* Introduce unsafe dependency or configuration changes without justification.

When working on authentication, authorization, payments, external integrations, user data, or other security-sensitive functionality, consult the relevant security documentation first.

---

## Dependencies

Before adding a dependency:

1. Check whether existing repository functionality already solves the problem.
2. Prefer well-maintained dependencies with appropriate scope.
3. Consider security, maintenance cost, bundle size, and compatibility.
4. Follow the repository's existing dependency strategy.

Do not add a dependency for functionality that can be implemented simply with existing framework or repository capabilities.

---

## Documentation

Documentation is part of the engineering system.

When behavior, architecture, or development practices change, update the relevant documentation rather than leaving contradictory information behind.

Keep documentation responsibilities separated:

* Root `README.md` — Cyros Labs and repository overview
* Product README files — product-specific context and development
* `docs/architecture/` — architecture and boundaries
* `docs/development/` — development setup and practices
* `docs/engineering/` — engineering processes
* `.ai/` — AI-specific agents, workflows, rules, and context

Do not duplicate entire architecture documents inside Copilot instructions.

---

## AI-Assisted Development

The `.ai/` directory contains Cyros Labs' AI engineering system.

When task-specific agents, workflows, rules, or context exist there, follow them.

Repository-wide Copilot instructions provide baseline guidance. More specific path-based instructions may add constraints for a particular area.

AI-generated changes must follow the same architectural, security, testing, and review requirements as human-authored changes.

Do not bypass repository rules because a task is being performed by AI.

---

## Change Discipline

For each requested change:

* Identify the affected area.
* Respect its architectural ownership.
* Follow existing patterns.
* Make the smallest coherent change.
* Validate the result.
* Update documentation when required.
* Avoid unrelated modifications.

If a request conflicts with documented architecture, do not silently work around the conflict. Identify the conflict and follow the documented architecture unless the task explicitly changes that architecture.

When requirements are ambiguous, choose the most conservative interpretation consistent with existing repository conventions.

---

## Long-Term Quality

Keep the repository understandable as it grows.

Prioritize:

* Clear boundaries
* Consistent naming
* Simple designs
* Appropriate reuse
* Testable code
* Secure defaults
* Maintainable documentation
* Minimal duplication

Do not make every change maximally abstract.

The goal is to build a system that remains understandable as Cyros Labs grows.
