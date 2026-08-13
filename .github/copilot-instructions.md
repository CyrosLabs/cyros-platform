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

These documents are the source of truth for repository architecture.

Do not invent a competing architecture when an existing documented pattern applies.

---

## Source of Truth

When information exists in multiple places, use the following priority:

1. Current implementation for behavior that already exists.
2. Product requirements for intended product behavior.
3. Product-specific documentation for product concepts and UX.
4. Architecture documentation for repository and system boundaries.
5. `.ai/context/` for repository navigation, terminology, and AI-oriented context.
6. The current task or prompt for task-specific constraints.

Do not treat `.ai/context/` files as replacements for canonical product or architecture documentation.

If documentation and implementation disagree:

* Determine whether the implementation is intentional, incomplete, or outdated.
* Do not silently rewrite working behavior to match stale documentation.
* Do not silently redefine product requirements based only on the current implementation.
* If the discrepancy affects the requested change, identify it and use the most appropriate source of truth.

When ambiguity remains, choose the smallest conservative interpretation consistent with the repository.

---

## Architectural Boundaries

### Products

`apps/` contains product applications.

Products own:

* User experiences
* Product-specific business rules
* Product-specific business flows
* Product orchestration
* Product-specific navigation
* Product-specific presentation

Products should consume shared capabilities rather than reimplementing them.

Products must not depend directly on other products.

---

### Platform

`platform/` contains shared capabilities used across products.

The Platform owns capabilities that are intentionally reusable across products, such as identity, AI, messaging, notifications, payments, search, storage, analytics, and similar cross-product functionality.

Platform code must remain independent from individual products.

Do not move product-specific business logic into the Platform simply because it may be reusable in the future.

Before creating or modifying Platform code, determine whether the capability is genuinely cross-product and has a stable reusable boundary.

---

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

Do not create a shared package solely to avoid a small amount of duplication.

---

### Content

`content/` contains product or domain content maintained independently from application logic.

Content should describe domain or learning material rather than application presentation.

Content should not depend unnecessarily on:

* React components
* Screen names
* Navigation routes
* Styling
* Application-specific state
* Platform-specific UI implementation

For Haru Haru, learning content belongs under:

content/haru-haru/

Learner-specific state such as progress, mastery, favorites, streaks, and review history is not static content.

Infrastructure

infrastructure/, docker/, and related operational tooling provide deployment and operational capabilities.

Infrastructure concerns should remain separate from product business logic.

Dependency Direction

Prefer this dependency model:

Products
   ↓
Platform
   ↓
Shared Packages

Infrastructure supports the system and should not become a business-logic dependency.

Products must not directly depend on other products.

When a capability is needed by multiple products, determine whether it belongs in the Platform or in a generic Shared Package rather than creating product-to-product coupling.

Do not introduce upward or circular dependencies to solve a local implementation problem.

Haru Haru

Haru Haru is the primary product currently under active development.

Relevant locations:

apps/haru-haru/
docs/products/haru-haru/
content/haru-haru/

Before making changes to Haru Haru, consult the relevant product documentation.

Important references include:

docs/products/haru-haru/vision.md
docs/products/haru-haru/requirements.md
docs/products/haru-haru/roadmap.md
docs/products/haru-haru/learning-engine.md
docs/products/haru-haru/content-structure.md

For UI, navigation, and interaction work, also consult the relevant documentation under:

docs/products/haru-haru/ui/

When working on Haru Haru:

Keep product-specific learning behavior inside the Haru Haru application.
Keep learning content independent from React Native implementation.
Do not move Haru Haru business rules into Platform speculatively.
Reuse existing Haru Haru patterns before creating new abstractions.
Inspect the current implementation before changing feature structure.
Do not assume that documented future functionality is already implemented.
Do not assume that prototype or mock data represents the final domain model.
Haru Haru Learning Model

Haru Haru currently models learning around:

TOPIK Level
    ↓
Lessons
    ↓
Vocabulary / Grammar
    ↓
Practice
    ↓
Quiz
    ↓
Progression

The Learning Engine describes the broader learning cycle:

Learn
 ↓
Practice
 ↓
Test
 ↓
Review
 ↓
Master
 ↓
Progress

Do not introduce a different learning hierarchy without first checking the product documentation and existing implementation.

Learning content, learning behavior, UI presentation, and learner state are separate concerns.

General Development Rules

Before changing code:

Understand the existing implementation.
Identify the repository boundary being changed.
Read the relevant .ai/context/ files.
Check the relevant architecture documentation.
Check the relevant product documentation.
Inspect existing components, types, utilities, and tests.
Identify whether reusable functionality already exists.
Determine the smallest coherent implementation.
Only then modify the code.

Do not introduce new architecture, abstractions, or dependencies without a concrete requirement.

When a change crosses an architectural boundary, document the reason and update the relevant architecture documentation.

Existing Implementation First

Do not design against assumptions.

Before implementing a feature or changing an existing feature:

Inspect the current source files.
Inspect related types and data.
Inspect existing components.
Inspect existing navigation.
Inspect relevant tests.
Inspect existing styles and theme usage.
Check whether a similar implementation already exists elsewhere in the repository.

Prefer extending the existing implementation over replacing it.

Do not create duplicate components, utilities, types, or services when an appropriate existing implementation can be reused.

Code Quality

Prefer:

Clear and maintainable code
Strong typing
Small, focused components and functions
Existing repository conventions
Explicit boundaries
Simple solutions over unnecessary abstraction
Reuse where reuse is justified
Testable behavior
Predictable state management

Avoid:

any without a clear reason
Duplicate implementations
Premature abstractions
Large monolithic components
Product-specific logic in shared code
Hardcoded domain data inside UI components when it belongs in content or data structures
Architectural changes driven only by hypothetical future requirements
Refactoring unrelated code during a feature change

Do not optimize for theoretical scale at the expense of present simplicity.

React Native and UI Work

When working on React Native applications:

Follow the existing feature structure.
Reuse existing UI components and theme primitives.
Follow established spacing, typography, and interaction patterns.
Keep screen components focused on composition and orchestration.
Move reusable behavior into appropriate components, hooks, or domain modules when justified.
Avoid introducing a new design pattern when an existing one already solves the problem.
Preserve mobile usability and accessibility.
Do not hardcode visual values when an existing theme or design token should be used.

For Haru Haru specifically, consult:

docs/products/haru-haru/ui/design-principles.md
docs/products/haru-haru/ui/navigation.md
docs/products/haru-haru/ui/wireframes.md

when the change affects UI behavior or structure.

Testing and Validation

Every behavior change should be validated at the narrowest appropriate scope.

Before modifying tests:

Run the relevant failing or affected test.
Understand why it fails.
Determine whether the problem is in the implementation, test, data, mock, or test environment.
Fix the underlying problem.

Tests should be added or updated when behavior changes.

Do not:

Remove tests merely to make CI pass.
Weaken assertions without justification.
Change expected behavior solely to match an incorrect implementation.
Add brittle tests that depend unnecessarily on implementation details.

Use the project's existing scripts and validation commands rather than bypassing them.

After implementation:

Run the affected tests.
Run broader tests when practical.
Validate TypeScript and linting when relevant.
Report any validation that could not be completed.

When changing shared Platform or Package code, consider the impact on all consumers.

GitHub Actions are part of the repository's engineering controls. Do not modify workflows or configuration simply to bypass a failing check.

Security

Treat security as a repository-wide concern.

Never:

Commit secrets, tokens, credentials, or private keys.
Hardcode sensitive configuration.
Disable security checks to make a change pass.
Introduce unsafe dependency or configuration changes without justification.
Expose sensitive user or system information in logs.

When working on authentication, authorization, payments, external integrations, user data, or other security-sensitive functionality, consult the relevant security documentation first.

Dependencies

Before adding a dependency:

Check whether existing repository functionality already solves the problem.
Check whether an existing dependency can provide the required capability.
Prefer well-maintained dependencies with appropriate scope.
Consider security, maintenance cost, bundle size, compatibility, and platform support.
Follow the repository's existing dependency strategy.

Do not add a dependency for functionality that can be implemented simply with existing framework or repository capabilities.

Do not upgrade unrelated dependencies as part of a feature unless required.

Documentation

Documentation is part of the engineering system.

When behavior, architecture, requirements, or development practices change, update the relevant documentation rather than leaving contradictory information behind.

Keep documentation responsibilities separated:

Root README.md — Cyros Labs and repository overview
Product README files — product-specific context and development
docs/architecture/ — architecture and system boundaries
docs/products/ — product vision, requirements, roadmap, domain, and UX
docs/development/ — development setup and practices
docs/engineering/ — engineering processes
.ai/ — AI-specific context, rules, workflows, and guidance
.github/ — GitHub and Copilot-specific configuration

Do not duplicate entire architecture or product documents inside Copilot instructions.

When changing an established product behavior:

Identify which documentation describes that behavior.
Determine whether the documentation is now stale.
Update only the relevant documentation.
Do not create duplicate documentation for an existing concept.

Documentation should describe the intended system clearly enough that another developer can understand the decision without reading the entire implementation.

AI-Assisted Development

The .ai/ directory contains Cyros Labs' AI engineering system.

When task-specific agents, workflows, rules, or context exist there, follow them.

Relevant .ai/context/ files may include:

.ai/context/repository-map.md
.ai/context/product-map.md
.ai/context/platform-map.md
.ai/context/terminology.md

These files help AI agents navigate the repository and use consistent terminology.

They do not replace canonical architecture or product documentation.

Repository-wide Copilot instructions provide baseline guidance.

More specific path-based instructions may add constraints for a particular area.

AI-generated changes must follow the same architectural, security, testing, and review requirements as human-authored changes.

Do not bypass repository rules because a task is being performed by AI.

Task Execution

For a requested implementation, follow this general process:

1. Understand

Read:

Repository instructions.
Relevant .ai/context/ files.
Relevant architecture documentation.
Relevant product documentation.
Existing implementation.
Relevant tests.
2. Plan

Identify:

The affected feature.
The architectural owner.
Existing components or services that can be reused.
Required data and types.
Required tests.
Documentation that may need updating.

Keep the plan proportional to the task.

3. Implement

Make the smallest coherent change that satisfies the requirement.

Avoid unrelated refactoring.

4. Validate

Run the narrowest appropriate validation first.

Then run broader validation when practical.

5. Document

Update documentation only when the implementation changes an established behavior, architecture, requirement, or development practice.

6. Report

The final response should summarize:

What changed.
Which files changed.
Tests and validation performed.
Documentation updated.
Important assumptions or decisions.
Any remaining issues.

Do not claim tests or validation were performed if they were not.

Change Discipline

For each requested change:

Identify the affected area.
Respect its architectural ownership.
Follow existing patterns.
Make the smallest coherent change.
Reuse existing functionality where appropriate.
Validate the result.
Update documentation when required.
Avoid unrelated modifications.

If a request conflicts with documented architecture, do not silently work around the conflict.

Identify the conflict and follow the documented architecture unless the task explicitly changes that architecture.

When requirements are ambiguous:

Prefer existing product behavior.
Check the relevant product documentation.
Check architecture boundaries.
Choose the smallest conservative interpretation.
Do not invent additional requirements.
Long-Term Quality

Keep the repository understandable as it grows.

Prioritize:

Clear boundaries
Consistent naming
Simple designs
Appropriate reuse
Testable code
Secure defaults
Maintainable documentation
Minimal duplication
Clear ownership
Predictable development workflows

Do not make every change maximally abstract.

Do not create infrastructure for hypothetical future requirements.

The goal is to build a system that remains understandable as Cyros Labs grows.