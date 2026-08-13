## applyTo: "apps/haru-haru/**"

# Haru Haru Copilot Instructions

## Product Context

Haru Haru is the current primary Cyros Labs product.

It is a Korean learning platform designed to make language learning engaging, meaningful, and confidence-building.

The application is located at:

apps/haru-haru/

Haru Haru owns its own product experience, product-specific business rules, and learning flows.

Do not introduce direct dependencies on other Cyros Labs products.

---

## Technology

Haru Haru uses:

* Expo
* React Native
* TypeScript
* Jest
* ESLint

Follow the versions and configuration already defined by the project.

Do not introduce a different framework, build system, state-management solution, or architectural pattern unless the task explicitly requires it.

---

## Application Structure

Prefer the existing feature-oriented structure.

Current application code lives primarily under:

src/
├── features/
└── theme/

Organize new product behavior by feature rather than creating broad technical layers without a concrete need.

Prefer:

src/features/<feature>/

for feature-specific code.

Keep shared presentation concerns such as theming in their existing shared areas.

Do not create new top-level architectural directories merely to accommodate a small feature.

---

## Components and UI

Prefer small, focused React components.

Keep UI components responsible for presentation and interaction.

Do not place substantial business logic directly inside presentation components when it can be kept in a testable feature-level function or module.

Follow existing styling, theme, spacing, typography, and component conventions before introducing new ones.

Prefer existing components and theme primitives over creating duplicate UI implementations.

---

## Product Logic

Product-specific logic belongs in Haru Haru.

Examples include:

* Learning flows
* Lesson behavior
* Practice behavior
* Progress behavior
* Korean-learning rules
* Product-specific user interactions

Do not move product logic into `platform/` merely because it might become reusable later.

Promotion into the Platform should require a concrete cross-product capability.

---

## Content

Learning content is separate from application logic.

Content may include:

* Lessons
* Vocabulary
* Exercises
* Examples
* Korean-learning material
* Other educational resources

Do not hardcode substantial learning content into UI components.

When content belongs in the repository's independent content area, use the appropriate `content/haru-haru` location rather than embedding it in application code.

Application code should consume content rather than define large bodies of editorial content inline.

---

## Shared Platform and Packages

Before implementing shared functionality, check whether it already exists in:

platform/
packages/

Use an existing shared capability when appropriate.

Do not copy a Platform or Package implementation into Haru Haru.

Conversely, do not move a small product-specific helper into shared code solely to avoid a small amount of duplication.

Optimize for clear ownership first.

---

## TypeScript

Use TypeScript throughout the application.

Prefer precise types over `any`.

Use existing domain types and shared types when they already represent the required concept.

Avoid unnecessary type assertions.

Keep types close to the feature that owns them unless they are genuinely shared.

---

## Testing

Behavioral changes should include appropriate tests.

Prefer tests that verify observable behavior rather than implementation details.

When changing a feature:

```bash
npm test -- --runInBand
```

When changing TypeScript:

```bash
npx tsc --noEmit
```

When changing lint-sensitive code:

```bash
npm run lint
```

Do not remove tests merely because implementation details changed.

---

## Validation

Before considering a Haru Haru change complete, use:

```bash
npm run lint
npx tsc --noEmit
npm test -- --runInBand
```

Run commands from:

apps/haru-haru/

The GitHub Actions CI workflow should be considered the final automated validation of the same project expectations.

---

## Expo and React Native

Respect the existing Expo project configuration.

Do not modify native configuration, app configuration, or build configuration unless the task requires it.

When working with platform-specific behavior, consider Android, iOS, and web where the feature is expected to support them.

Avoid platform-specific implementation when an existing cross-platform React Native or Expo approach is sufficient.

---

## Dependencies

Before adding an npm dependency:

* Check whether the project or Cyros Platform already provides the capability.
* Check whether Expo or React Native already provides the required functionality.
* Prefer the smallest dependency that solves the actual requirement.
* Avoid dependencies that introduce substantial architectural complexity for a small feature.

Update the project's lockfile when dependencies change.

---

## AI Development Behavior

Understand the existing feature before modifying it.

Prefer extending the current implementation over replacing it.

Do not redesign Haru Haru's architecture because a cleaner architecture could exist in theory.

For a one-screen or small feature change, keep the implementation proportional to the requirement.

When a request would cross the Haru Haru product boundary into Platform or Shared Packages, stop and evaluate the ownership before implementing the change.

---

## Documentation

Update Haru Haru documentation when development instructions, architecture, setup, or product behavior changes.

The product README is:

apps/haru-haru/README.md

Repository-wide architectural rules belong in:

docs/architecture/

Do not duplicate repository-wide architectural documentation in this file.
