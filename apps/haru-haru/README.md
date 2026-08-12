# Haru Haru

> A thoughtful approach to learning Korean.

Haru Haru is a Korean learning platform designed to make language learning engaging, meaningful, and confidence-building.

It is the current primary product being developed by Cyros Labs.

Haru Haru is intentionally built as a product within the Cyros Labs platform architecture: the application owns its learning experience and product-specific behavior while reusable capabilities are provided by the shared platform and libraries.

---

## Product

Haru Haru focuses on helping people learn Korean through an experience that is:

* Engaging
* Meaningful
* Encouraging
* Confidence-building
* Designed for consistent progress

The product experience and learning behavior belong to Haru Haru.

Shared technical capabilities should be provided by the Cyros Labs Platform rather than implemented independently inside the application.

---

## Architecture

Haru Haru is a product application located at:

```text
apps/haru-haru/
```

Its responsibility is to own the Korean-learning experience and product-specific business flows.

At the repository level, Haru Haru fits into the architecture like this:

```text
Cyros Labs
    │
    ├── Platform
    │      Shared capabilities
    │
    ├── Packages
    │      Generic technical libraries
    │
    ├── Content
    │      Product learning content
    │
    └── Haru Haru
           Product experience
           Product rules
           Product orchestration
```

Haru Haru should remain independent from other products.

It should consume shared capabilities rather than directly depending on another Cyros Labs product.

See the repository [Architecture Overview](../../docs/architecture/overview.md) and [Platform Boundaries](../../docs/architecture/platform-boundaries.md).

---

## Technology

Haru Haru currently uses:

* **Expo**
* **React Native**
* **TypeScript**
* **Jest**
* **ESLint**

The current application package is `@cyros/haru-haru`.

---

## Application Structure

The application currently follows a feature-oriented structure:

```text
apps/haru-haru/
├── src/
│   ├── features/
│   │   └── home/
│   └── theme/
├── __tests__/
├── App.tsx
├── app.json
├── babel.config.js
├── package.json
└── tsconfig.json
```

The `src/features` area contains product features, while shared presentation concerns such as theming live separately. The current repository contains the `home` feature and a dedicated `theme` area.

As the product grows, new functionality should normally be organized around product features rather than around technical layers alone.

For example:

```text
src/
├── features/
│   ├── home/
│   ├── lessons/
│   ├── practice/
│   └── progress/
└── theme/
```

The exact structure should follow the architecture and boundaries established by the repository documentation.

---

## Content

Learning content is treated separately from application logic.

Content may include things such as:

* Korean learning material
* Lessons
* Exercises
* Vocabulary
* Examples
* Other product learning resources

Content should remain independently maintainable whenever practical and should not become tightly coupled to UI implementation.

The repository's shared `content/haru-haru` area is the appropriate location for product content that is maintained independently from application code.

---

## Development

### Prerequisites

* Node.js 24.x

### Install

From the Haru Haru directory:

```bash
cd apps/haru-haru
npm install
```

### Start Development

```bash
npm start
```

### Run on a Platform

```bash
npm run android
npm run ios
npm run web
```

The application currently uses Expo's development tooling and provides scripts for Android, iOS, and web.

---

## Validation

Run the test suite:

```bash
npm test -- --runInBand
```

Run linting:

```bash
npm run lint
```

Run TypeScript validation:

```bash
npx tsc --noEmit
```

The application package currently defines Jest and ESLint scripts and uses TypeScript for the application code.

---

## Engineering Guidelines

Haru Haru follows the engineering principles of the Cyros Labs repository.

### Product First

Keep product-specific behavior inside Haru Haru.

### Reuse Before Rebuild

Before implementing a shared capability, check whether it already belongs to the Platform or a Shared Package.

### Keep Boundaries Clear

Do not move product-specific business logic into shared platform services simply because more than one feature may eventually need it.

### Keep Content Independent

Learning content should not depend unnecessarily on application implementation details.

### Prefer Simplicity

Use the simplest design that satisfies the current product requirements.

### AI Native

AI-assisted development is part of the engineering workflow. Repository-level AI rules and workflows in `.ai/` apply to Haru Haru.

---

## Related Documentation

### Cyros Labs

* [Repository README](../../README.md)
* [Architecture Overview](../../docs/architecture/overview.md)
* [Platform Architecture](../../docs/architecture/platform.md)
* [Platform Boundaries](../../docs/architecture/platform-boundaries.md)
* [Repository Structure](../../docs/architecture/repository-structure.md)
* [Monorepo Strategy](../../docs/architecture/monorepo.md)

### Development

* [Getting Started](../../docs/development/getting-started.md)
* [Local Environment](../../docs/development/local-environment.md)
* [Tooling](../../docs/development/tooling.md)
* [Debugging](../../docs/development/debugging.md)
* [Troubleshooting](../../docs/development/troubleshooting.md)

### Engineering

* [Testing](../../docs/engineering/testing.md)
* [Release Process](../../docs/engineering/release-process.md)

---

## License

Haru Haru is part of the Cyros Labs repository and is licensed under the Apache License 2.0.
