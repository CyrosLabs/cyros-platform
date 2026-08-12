# Architecture Rules

## Purpose

These rules define how AI agents must reason about architecture in the Cyros Platform monorepo.

The canonical architecture documentation is:

- `ARCHITECTURE.md`
- `docs/architecture/overview.md`
- `docs/architecture/platform.md`
- `docs/architecture/monorepo.md`
- `docs/architecture/repository-structure.md`

When these rules conflict with implementation details in the repository, inspect the existing code and relevant architecture documentation before making a decision.

---

## 1. Core Architectural Principles

Cyros follows these principles:

1. Human First
2. Platform First
3. AI Native
4. Modular by Design
5. Reuse Before Rebuild
6. Simplicity Over Complexity
7. Build for the Long Term

AI agents must preserve these principles when designing or modifying software.

The simplest solution that correctly satisfies the requirement is preferred over unnecessary abstraction.

---

## 2. Platform-First Architecture

Cyros is a product ecosystem, not a collection of isolated applications.

Products should consume shared platform capabilities rather than independently implementing capabilities that belong to the platform.

Current platform domains include:

- Identity
- AI
- Notifications
- Analytics
- Payments
- Storage
- Search
- Recommendation
- Messaging
- Gamification
- Media
- Monitoring
- Configuration
- API Gateway

Before implementing functionality that appears reusable across products, determine whether it belongs in `platform/` or `packages/`.

Do not create product-specific implementations of existing platform capabilities.

---

## 3. Layer Responsibilities

### `apps/`

Contains product applications.

Applications own:

- User experience
- Product-specific business flows
- Product-specific presentation
- Product-specific orchestration

Applications should consume platform capabilities rather than reimplement shared infrastructure.

### `platform/`

Contains reusable platform capabilities shared across products.

Platform services own:

- Shared business capabilities
- Shared service interfaces
- Shared infrastructure-facing functionality
- Cross-product capabilities

Do not place product-specific business rules in the platform.

### `packages/`

Contains reusable libraries.

A package should be created when code is genuinely reusable across multiple products or platform services.

Do not move code into `packages/` merely to make a file smaller.

### `content/`

Contains product content independent from application logic.

Do not embed large or maintainable content datasets directly into application logic when the content belongs in `content/`.

### `infrastructure/`

Contains infrastructure and deployment concerns.

Infrastructure concerns must not leak into product application code unnecessarily.

---

## 4. Dependency Direction

Prefer dependencies that flow toward shared capabilities:

`apps → platform → infrastructure`

and:

`apps → packages`

Avoid dependencies that create circular ownership.

The platform must not depend on a specific product.

A shared package must not depend on product-specific business logic.

A product may depend on shared platform capabilities, but the platform must remain product-agnostic.

---

## 5. Before Creating New Code

Before implementing a new capability:

1. Search for an existing implementation.
2. Search `platform/`.
3. Search `packages/`.
4. Search other applications for an established pattern.
5. Read relevant architecture documentation.
6. Determine the correct ownership boundary.
7. Reuse existing functionality when appropriate.

Do not create a new abstraction merely because the existing implementation is not immediately familiar.

---

## 6. Architectural Changes

An architectural change includes:

- Moving functionality between layers.
- Creating a new platform domain.
- Changing dependency direction.
- Introducing a new shared package.
- Introducing a new infrastructure dependency.
- Changing public interfaces.
- Introducing a new application-wide pattern.
- Creating cross-product coupling.

For architectural changes:

1. Explain the problem.
2. Identify affected boundaries.
3. Consider at least one alternative.
4. Evaluate long-term consequences.
5. Determine whether an ADR is required.
6. Do not silently make the architectural change as part of an unrelated feature.

---

## 7. Avoid Premature Abstraction

Do not generalize code solely because two pieces of code currently look similar.

Extract shared functionality when:

- The behavior is genuinely shared.
- Ownership is clear.
- The abstraction improves maintainability.
- The abstraction does not introduce unnecessary coupling.

Prefer a small amount of duplication over an incorrect abstraction.

---

## 8. AI-Specific Requirement

AI agents must not invent architecture.

If the repository does not provide enough evidence to determine where functionality belongs:

- Inspect more of the repository.
- Consult the relevant documentation.
- Ask for clarification when the decision materially affects architecture.

Do not present an architectural assumption as an established project rule.