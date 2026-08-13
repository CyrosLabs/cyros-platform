# Repository Map

## Purpose

This file gives AI agents a concise map of the Cyros Labs repository.

It is a navigation aid, not a replacement for the architecture documentation.

For architectural decisions, consult:

- `docs/architecture/overview.md`
- `docs/architecture/platform.md`
- `docs/architecture/platform-boundaries.md`
- `docs/architecture/repository-structure.md`

---

## Repository Shape

cyros-platform/
├── apps/
├── platform/
├── packages/
├── content/
├── docs/
├── .ai/
├── docker/
├── infrastructure/
├── scripts/
└── tools/
Ownership
apps/

Product applications.

Each application owns its product-specific:

User experience.
Business flows.
Product rules.
Product orchestration.

Current primary product:

apps/haru-haru/
platform/

Shared Cyros Labs platform capabilities.

Platform capabilities may be consumed by multiple products.

Product-specific business rules must not be moved into Platform merely because they may be useful later.

packages/

Generic reusable technical libraries.

Packages should remain product-agnostic whenever practical.

Examples may include shared:

UI primitives.
Configuration.
Utilities.
Types.
Technical integrations.
content/

Product content maintained independently from application implementation.

Current Haru Haru content location:

content/haru-haru/

Learning content should not be embedded directly inside React components.

docs/

Repository documentation.

Use documentation according to its scope:

docs/architecture/
    Repository and system architecture

docs/products/
    Product-specific documentation

docs/development/
    Development workflows and setup

docs/engineering/
    Engineering practices

docs/security/
    Security practices

docs/testing/
    Testing guidance
.ai/

AI-assisted development system.

.ai/
├── agents/
├── context/
├── rules/
└── workflows/

AI context files should remain concise and point agents toward canonical documentation rather than duplicating it.

infrastructure/

Deployment and operational infrastructure.

Product business logic should not depend directly on infrastructure implementation details.

docker/

Local development environment and container-related configuration.

scripts/

Repository automation and maintenance scripts.

tools/

Engineering and development tools.

Source of Truth

When sources disagree, prefer:

Current implementation for implemented behavior.
Product requirements for intended product behavior.
Architecture documentation for repository boundaries.
AI context files for navigation only.

AI context files must not override canonical architecture or product documentation.

Haru Haru

Haru Haru is the current primary product under active development.

Its application is:

apps/haru-haru/

Its product documentation is:

docs/products/haru-haru/

Its content is:

content/haru-haru/

The three concerns should remain distinct:

Product Documentation
        │
        ├── defines intent
        │
Application
        │
        ├── implements behavior
        │
Content
        │
        └── defines learning material
Important Rule

Do not infer that a capability belongs in Platform simply because it appears in multiple product screens.

First determine whether it is:

Product-specific business logic.
Shared platform capability.
Generic technical functionality.
Content.
Infrastructure.

Use the architecture documentation for the final ownership decision.