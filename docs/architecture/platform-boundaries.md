# Platform Boundaries

A clear separation of responsibilities prevents architectural erosion over time.

## Company

Defines purpose, culture, and direction.

Owns:

- Vision
- Mission
- Principles

---

## Products

Own user experiences.

Examples:

- Haru Haru
- Companion
- Goals

Products should never own authentication, payments, analytics, or AI infrastructure.

---

## Platform

Owns reusable capabilities.

Examples:

- Identity
- AI
- Payments
- Notifications

Platform services should never contain product-specific business rules.

---

## Packages

Contain reusable code only.

Examples:

- UI Components
- Types
- Utilities

Packages must not contain business logic.

---

## Content

Owns educational or domain-specific content.

Content should never depend on application code.