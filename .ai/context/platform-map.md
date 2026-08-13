# Platform Map

## Purpose

This file gives AI agents a concise understanding of the Cyros Labs Platform.

It is a navigation aid.

For authoritative architectural rules, use:

docs/architecture/overview.md
docs/architecture/platform.md
docs/architecture/platform-boundaries.md
Platform Responsibility

The Cyros Labs Platform provides reusable capabilities shared across products.

Conceptually:

                 Cyros Labs
                     │
          ┌──────────┴──────────┐
          │                     │
       Platform              Products
          │                     │
          └──── shared ─────────┘

Products own their product experiences.

The Platform owns reusable capabilities.

Platform Boundary

Platform code should:

Be reusable across products.
Avoid product-specific business rules.
Provide shared technical or domain capabilities.
Remain independent from individual product implementations.

Products should consume Platform capabilities rather than reimplement shared infrastructure.

Product vs Platform

Use this distinction:

Product

Answers:

What should this product do for its users?

Examples:

Haru Haru lesson progression.
Haru Haru course rules.
Haru Haru vocabulary experience.
Haru Haru Home experience.
Platform

Answers:

What capability can multiple products use?

Examples may include:

Identity.
Storage.
Analytics.
Notifications.
AI infrastructure.
Shared configuration.
Messaging.
Other cross-product capabilities.

The exact Platform domains are defined in the architecture documentation.

Shared Packages

Generic technical functionality belongs in:

packages/

A package should remain reusable and should not become a disguised product feature.

Use a Shared Package when the functionality is primarily technical and generic.

Use Platform when the capability represents a reusable product/platform service.

Use an application feature when the behavior is product-specific.

Content

Content is not Platform infrastructure.

Product learning content belongs under the product content area:

content/haru-haru/

For Haru Haru, Korean vocabulary, grammar, lessons, exercises, and other learning material should remain independent from application UI code.

Haru Haru Example

The following should remain product-specific:

Haru Haru
├── Course progression
├── Lesson behavior
├── Korean learning flows
├── Home experience
├── Product navigation
└── Product-specific gamification rules

The following may be provided by shared infrastructure when appropriate:

Platform
├── Authentication
├── Storage
├── Analytics
├── Notifications
├── AI capabilities
└── Other shared services

Do not move a Haru Haru rule into Platform merely because a similar concept may eventually appear in another product.

Dependency Direction

Prefer:

Product App
    ↓
Platform / Shared Packages

Avoid:

Platform
    ↓
Specific Product

Products should not directly depend on other products.

Shared behavior should be extracted only when it is genuinely shared and the abstraction is justified.

When to Create Shared Platform Code

Before creating new Platform code, ask:

Is this capability genuinely shared?
Is the behavior independent of one product?
Does it have a stable reusable contract?
Would sharing reduce duplication without creating unnecessary abstraction?

If the answer is unclear, keep the behavior in the product until the shared requirement becomes real.

AI Guidance

AI agents should not:

Move product logic into Platform speculatively.
Create abstractions for hypothetical future products.
Duplicate existing Platform capabilities.
Make Platform depend on Haru Haru.
Treat every reusable component as a Platform service.

When uncertain, consult:

docs/architecture/platform-boundaries.md

and prefer the smallest change that preserves the current architecture.