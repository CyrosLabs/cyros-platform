# Haru Haru

> A thoughtful approach to learning Korean.

Haru Haru is a Korean learning platform designed to make language learning engaging, meaningful, and confidence-building.

It is the current primary product being developed by Cyros Labs.

Haru Haru is built as a product within the Cyros Labs platform architecture. The application owns its learning experience and product-specific behavior, while reusable capabilities are provided by the shared Platform and Packages.

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

The `src/features` area contains product features, while shared presentation concerns such as theming live separately.

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

Content may include:

* Korean learning material
* Lessons
* Exercises
* Vocabulary
* Examples
* Other product learning resources

Content should remain independently maintainable whenever practical and should not become tightly coupled to UI implementation.

Product learning content that is maintained independently from application code belongs in the repository's `content/haru-haru` area.

---

## Development

### Prerequisites

* Node.js 24.x

### Install Dependencies

From the Haru Haru directory:

```bash
cd apps/haru-haru
npm install
```

### Start the Development Server

```bash
npm start
```

### Run on a Specific Platform

```bash
npm run android
npm run ios
npm run web
```

---

## Validation

Run linting:

```bash
npm run lint
```

Run TypeScript validation:

```bash
npx tsc --noEmit
```

Run tests:

```bash
npm test -- --runInBand
```

For the complete development workflow, see the repository documentation for [Getting Started](../../docs/development/getting-started.md), [Local Environment](../../docs/development/local-environment.md), and [Testing](../../docs/engineering/testing.md).

---

## Engineering Guidelines

Haru Haru follows the engineering principles of Cyros Labs.

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

AI-assisted development is part of the engineering workflow. Repository-level AI instructions, rules, workflows, and agents apply to Haru Haru.

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
* [Docker](../../docs/development/docker.md)
* [Tooling](../../docs/development/tooling.md)
* [Debugging](../../docs/development/debugging.md)
* [Troubleshooting](../../docs/development/troubleshooting.md)

### Engineering

* [Testing](../../docs/engineering/testing.md)
* [Release Process](../../docs/engineering/release-process.md)

---

## License

Haru Haru is part of the Cyros Labs repository and is licensed under the Apache License 2.0.
