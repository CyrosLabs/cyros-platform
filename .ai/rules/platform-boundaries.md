# Platform Boundaries

## Purpose

These rules define ownership and dependency boundaries between products, platform capabilities, shared packages, content, and infrastructure.

These boundaries are critical to Cyros's platform-first architecture.

---

## 1. Repository Layers

Cyros uses the following primary boundaries:

### `apps/`

Product applications.

Own:

- Product user experiences
- Product-specific workflows
- Product-specific business logic
- Product-specific presentation

### `platform/`

Shared platform capabilities.

Own:

- Cross-product capabilities
- Shared service interfaces
- Shared infrastructure-facing functionality
- Reusable platform domains

### `packages/`

Reusable libraries.

Own:

- Generic utilities
- Shared libraries
- Reusable technical components

Packages must not contain product-specific business rules.

### `content/`

Product content.

Own:

- Language-learning content
- Product content
- Structured content independent from application logic

Content should remain separable from code wherever practical.

### `infrastructure/`

Infrastructure and deployment concerns.

Own:

- Deployment configuration
- Infrastructure provisioning
- Environment configuration
- Operational resources

Infrastructure concerns should not be embedded directly into product business logic.

---

## 2. Products Must Not Reimplement Platform Capabilities

Before implementing a cross-product capability inside an application, inspect the platform.

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

If an appropriate platform capability exists, consume it.

Do not create a product-specific replacement.

---

## 3. Platform Must Remain Product-Agnostic

The platform must not contain assumptions about a specific product.

Avoid platform code such as:

- `haruHaruUser`
- `dietBuddySettings`
- `workoutLesson`
- Product-specific UI behavior
- Product-specific content structures

unless the functionality is intentionally part of a documented shared abstraction.

If a platform capability requires product-specific behavior, use an explicit extension point or interface rather than coupling the platform directly to the product.

---

## 4. Packages Must Remain Generic

A package belongs in `packages/` when its functionality is reusable.

Do not place product business logic in a shared package merely to make it accessible.

A package should not silently become a dumping ground for unrelated utilities.

---

## 5. Avoid Reverse Dependencies

Do not introduce dependencies such as:

`platform → apps`

or:

`packages → product-specific app logic`

or:

`platform → product`

These create architectural coupling.

Preferred direction:

`apps → platform`

`apps → packages`

`platform → packages`

---

## 6. Choosing Between `platform/` and `packages/`

Use `platform/` when the capability represents a Cyros product/platform service or domain.

Use `packages/` when the capability is primarily a reusable technical library.

Ask:

> Is this capability part of the Cyros platform's business/service capabilities?

If yes, consider `platform/`.

Ask:

> Is this primarily reusable technical code with no product-specific business ownership?

If yes, consider `packages/`.

When uncertain, consult the architecture documentation before deciding.

---

## 7. Content Boundary

Do not tightly couple product content to application implementation.

Prefer structures that allow content to evolve independently.

Do not duplicate the same content across products when it should be shared.

---

## 8. Infrastructure Boundary

Application code should consume infrastructure through appropriate interfaces/configuration.

Do not:

- Hardcode infrastructure details into business logic.
- Embed deployment assumptions into UI code.
- Couple product logic directly to cloud-provider implementation details without justification.

---

## 9. New Platform Capabilities

A new platform domain should not be created simply because multiple files happen to share similar code.

Before creating one:

1. Identify the shared capability.
2. Identify current consumers.
3. Identify expected future consumers.
4. Define ownership.
5. Define public interfaces.
6. Define dependencies.
7. Determine whether the capability belongs in the platform.
8. Document significant architectural decisions.

---

## 10. Boundary Violations

AI agents must flag a boundary violation when they encounter one.

Examples:

- Product importing internal platform implementation details.
- Platform importing product code.
- Shared package containing product-specific logic.
- Content hardcoded into application logic unnecessarily.
- Infrastructure configuration embedded in business logic.

Do not silently normalize an existing violation simply because it already exists.

If fixing it is outside the requested scope, report it as a follow-up concern.

---

## 11. AI-Specific Requirement

When implementing a feature that crosses multiple boundaries, do not immediately start coding.

First identify:

- Owning layer
- Consumers
- Public interface
- Dependencies
- Data flow
- Security implications
- Testing responsibility

Then implement according to the established boundaries.