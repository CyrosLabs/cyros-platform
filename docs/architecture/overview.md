# Architecture Guide

This document summarizes the architectural approach used across Cyros Labs.

It is intentionally aligned with the repository-wide architecture documents in `docs/architecture/overview.md` and `docs/architecture/platform.md`.

---

## Architectural Principles

Cyros Labs follows a platform-first model:

- Products focus on user experience and product-specific business flows.
- The platform provides reusable capabilities shared across products.
- Shared packages reduce duplication and provide reusable technical functionality.
- Content is treated as independent from application logic.
- Products should remain loosely coupled from shared infrastructure.
- Products should be able to evolve independently while sharing a common technological foundation.

---

## System Shape

```mermaid
flowchart TD
    A[Company / Product Vision] --> B[Platform]
    B --> C[Product Apps]
    B --> D[Shared Packages]
    C --> E[Content]
    B --> F[Infrastructure]
````

At a high level, the repository is organized around these responsibilities:

* **Company / Product Vision** — Defines the mission, roadmap, and product direction.
* **Platform** — Provides shared capabilities used across products.
* **Product Apps** — Own product-specific experiences and business flows.
* **Shared Packages** — Provide reusable technical functionality.
* **Content** — Contains product content maintained independently from application logic.
* **Infrastructure** — Provides deployment and operational foundations.

---

## Layered Responsibilities

### Company

The company layer defines the mission, roadmap, and product direction. These concerns are captured in the documentation under `docs/company`.

### Platform

The platform layer owns capabilities that should not be reimplemented by every product.

Examples include:

* Identity
* Messaging
* Analytics
* Payments
* Search
* Storage
* Gamification
* Monitoring

The platform should remain product-agnostic and provide reusable capabilities through well-defined interfaces.

### Products

Product applications live in `apps`.

Each product should focus on:

* User experience
* Product-specific business flows
* Product-specific rules
* Product-specific orchestration

Products should consume shared platform capabilities rather than independently implementing capabilities that belong to the platform.

### Shared Packages

Reusable libraries live in `packages`.

Packages should contain functionality that can be consumed by more than one product or platform service.

Packages should remain generic and should not contain product-specific business logic.

### Content

Content is maintained separately from application logic.

Product content should not be tightly coupled to application implementation when it can be represented independently.

### Infrastructure

Infrastructure provides the deployment and operational foundation for the platform and products.

Infrastructure concerns are described in `docker`, `infrastructure`, and `docs/architecture/deployment.md`.

Infrastructure implementation details should not leak unnecessarily into product business logic.

---

## Boundaries

The repository guidance expects clear boundaries between layers:

* Products consume platform capabilities rather than implementing their own shared infrastructure.
* The platform must remain independent from individual products.
* Shared packages should remain generic and reusable.
* Content should remain independent from application logic.
* Product-specific rules should not leak into the platform layer.
* Infrastructure concerns should not become embedded in product business logic.
* Dependencies should flow toward shared capabilities rather than creating circular ownership.

---

## Design and Delivery Guidance

The architecture is intended to support:

* Independent product delivery
* Shared platform evolution
* Reuse across products
* Consistent deployment and operational practices
* Clear ownership of capabilities
* Long-term scalability without unnecessary coupling

Before introducing a new capability, determine whether it belongs to:

* A product
* The platform
* A shared package
* Content
* Infrastructure

Prefer reusing an existing capability over creating a parallel implementation.

These goals are reflected in the monorepo strategy documented in `docs/architecture/monorepo.md`.

---

## Related Documents

* `docs/architecture/overview.md`
* `docs/architecture/platform.md`
* `docs/architecture/platform-boundaries.md`
* `docs/architecture/repository-structure.md`
* `docs/architecture/deployment.md`
* `docs/architecture/security.md`
* `docs/architecture/monorepo.md`

```