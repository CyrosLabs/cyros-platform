---
name: implement-feature
description: Implement a Cyros Labs feature or behavior change following repository architecture, product requirements, testing, documentation, and validation practices.
agent: agent
---

# Implement Feature

Implement the requested feature or behavior change in the Cyros Labs repository.

A feature is not considered complete when the code compiles or the UI works.

A feature is complete when:

1. The implementation satisfies the requirements.
2. Relevant tests are created or updated.
3. Relevant documentation is created or updated.
4. Appropriate validation has been performed.
5. The resulting repository remains architecturally and conceptually consistent.

Do not modify unrelated functionality.

---

# Task

Implement:

[DESCRIBE THE FEATURE OR BEHAVIOR CHANGE HERE]

If the request is ambiguous, inspect the repository and existing documentation before making assumptions.

Prefer the smallest coherent implementation that satisfies the request.

---

# Phase 1 — Understand the Repository

Before changing code, inspect the repository.

Read:

.github/copilot-instructions.md

Then inspect the relevant `.ai/context/` files.

At minimum, when applicable:

.ai/context/repository-map.md
.ai/context/product-map.md
.ai/context/platform-map.md
.ai/context/terminology.md

Do not assume these files are the complete source of truth.

Use them to understand repository navigation, ownership, and terminology.

---

# Phase 2 — Identify the Architectural Boundary

Determine where the feature belongs.

Consider:

apps/
platform/
packages/
content/
infrastructure/

Use the documented dependency direction:

Products
   ↓
Platform
   ↓
Shared Packages

Products must not depend directly on other products.

Do not move product-specific logic into Platform simply because it could theoretically be reused later.

Do not create a shared package merely to avoid a small amount of duplication.

Before introducing a new Platform capability, verify that:

1. Multiple products genuinely need it.
2. Its boundary is stable enough to be shared.
3. Existing Platform functionality cannot already solve the problem.

---

# Phase 3 — Read the Relevant Documentation

Before implementation, identify the documentation that governs the feature.

## Architecture

When relevant, inspect:

docs/architecture/overview.md
docs/architecture/platform.md
docs/architecture/platform-boundaries.md
docs/architecture/repository-structure.md
docs/architecture/system-design.md
docs/architecture/decision-principles.md

Do not read every architecture document unnecessarily.

Read enough to understand the boundary affected by the feature.

---

## Product Documentation

For a product feature, inspect:

docs/products/<product>/

For Haru Haru, inspect the relevant documents under:

docs/products/haru-haru/

Depending on the feature, this may include:

docs/products/haru-haru/vision.md
docs/products/haru-haru/requirements.md
docs/products/haru-haru/roadmap.md
docs/products/haru-haru/learning-engine.md
docs/products/haru-haru/content-structure.md

For UI changes, inspect the relevant files under:

docs/products/haru-haru/ui/

Do not treat future roadmap items as currently implemented behavior.

---

# Phase 4 — Inspect the Existing Implementation

Do not design the feature from documentation alone.

Inspect the current implementation before making changes.

Identify:

* Existing screens
* Existing components
* Existing hooks
* Existing services
* Existing types
* Existing state management
* Existing navigation
* Existing data models
* Existing content structures
* Existing utilities
* Existing tests
* Existing styling and design primitives

Search the repository for related concepts before creating new ones.

Prefer extending existing functionality over introducing duplicate implementations.

---

# Phase 5 — Determine the Current State

Before implementation, explicitly determine:

### Already implemented

What already exists and should be reused?

### Partially implemented

What exists but needs to be extended?

### Not implemented

What actually needs to be created?

### Planned only

What is described in documentation but should not be implemented as part of this task?

Do not implement future functionality merely because it appears in a roadmap or design document.

---

# Phase 6 — Understand the Requirement

Translate the request into observable behavior.

Identify:

* User goal
* Entry point
* Expected behavior
* Important states
* Data required
* Navigation behavior
* Error behavior
* Empty states
* Loading states
* Persistence requirements
* Architectural ownership
* Testing requirements
* Documentation impact

For UI features, describe behavior from the user's perspective before thinking about component structure.

---

# Phase 7 — Plan the Change

Before editing files, create a concise implementation plan.

The plan should identify:

Affected implementation
Affected tests
Affected documentation
Potential architectural impact
Validation required

Example:

Implementation
- apps/haru-haru/...

Tests
- apps/haru-haru/...test.tsx

Documentation
- docs/products/haru-haru/...

Do not create files simply because they appear in an example.

Only include files that actually need to change.

---

# Phase 8 — Implement

Implement the smallest coherent change.

Follow existing repository patterns.

Prefer:

* Existing components
* Existing hooks
* Existing services
* Existing types
* Existing navigation
* Existing design tokens
* Existing test utilities
* Existing data structures

Avoid:

* Unnecessary abstractions
* New dependencies without justification
* Duplicate utilities
* Product logic in shared code
* Large unrelated refactors
* Premature generalization

Do not refactor unrelated code while implementing the feature.

---

# Phase 9 — Handle Product Data and Content Correctly

For product features, distinguish between:

Content

and:

Application behavior

For Haru Haru:

content/haru-haru/

should contain learning content.

The application should contain behavior that operates on that content.

Do not hardcode large amounts of learning content inside UI components when the content belongs in the content layer.

Do not move learner-specific state into static content.

For example:

Content
- Korean word
- Definition
- Example sentence
- Grammar explanation

Learner state
- Completion
- Mastery
- Review status
- Favorites
- Progress

Keep these concerns separate.

---

# Phase 10 — Create or Update Tests

Tests are a required part of feature development.

Before considering the implementation complete:

1. Find existing tests covering the affected behavior.
2. Add tests for new behavior.
3. Update tests when existing behavior intentionally changes.
4. Preserve tests that still represent valid behavior.
5. Remove tests only when the behavior they protect has intentionally been removed.

Tests should verify meaningful behavior.

Prefer tests that describe what the user or system can observe.

For UI, prioritize:

* Rendering
* User interaction
* Navigation
* Important state changes
* Loading states
* Error states
* Empty states
* Accessibility behavior when relevant

Do not write tests solely to increase coverage.

---

# Phase 11 — Diagnose Test Failures Correctly

If tests fail:

Do not immediately modify either the implementation or the test.

Determine whether the failure is caused by:

Implementation bug
Test expectation
Test query
Mock/data
Navigation
Async behavior
Environment/setup
Dependency behavior

Inspect the failure and relevant implementation.

If the test is incorrect, fix the test.

If the implementation is incorrect, fix the implementation.

If the intended product behavior has changed, update the relevant documentation as part of the same change.

Never weaken a test simply to make it pass.

Never remove a test without understanding why it exists.

---

# Phase 12 — Documentation Assessment

After implementation and tests, explicitly assess documentation.

Ask:

> Did this feature change an established product behavior, requirement, architecture, domain concept, navigation flow, content structure, UI behavior, or development practice?

If yes, update the appropriate documentation.

If no, do not modify documentation unnecessarily.

Documentation is part of the feature lifecycle, but documentation changes should be meaningful.

---

# Phase 13 — Determine Documentation Ownership

Use:

Architecture
→ docs/architecture/

Product behavior
→ docs/products/<product>/

Product UI
→ docs/products/<product>/ui/

Learning/content model
→ docs/products/<product>/content-structure.md

Development workflow
→ docs/development/

Engineering process
→ docs/engineering/

AI context
→ .ai/

Copilot behavior
→ .github/

Do not create a new document when an existing document already owns the concept.

---

# Phase 14 — Update Product Documentation

For Haru Haru, consider whether the change affects:

docs/products/haru-haru/vision.md
docs/products/haru-haru/requirements.md
docs/products/haru-haru/roadmap.md
docs/products/haru-haru/learning-engine.md
docs/products/haru-haru/content-structure.md

For UI changes, consider:

docs/products/haru-haru/ui/

Only update documents that are actually affected.

Do not rewrite unrelated documentation.

---

# Phase 15 — Update Architecture Documentation

If the feature changes:

* Architectural boundaries
* Platform responsibilities
* Dependency direction
* Shared capabilities
* Repository structure
* System design
* Important architectural decisions

update the appropriate architecture documentation.

Do not document an architectural change that was not actually made.

If the implementation reveals that the existing architecture documentation is incorrect, identify the discrepancy and resolve it intentionally rather than silently creating contradictory documentation.

---

# Phase 16 — Update AI Context When Necessary

Update `.ai/context/` only when the feature changes information that AI agents need to navigate or interpret the repository correctly.

Examples:

* New product
* New major repository area
* Changed ownership
* New canonical terminology
* Important architectural boundary
* Significant repository structure change

Do not copy product requirements or architecture documents into `.ai/context/`.

Keep AI context concise.

---

# Phase 17 — Documentation Consistency Check

After updating documentation, inspect closely related documents for contradictions.

For Haru Haru, consider:

vision.md
requirements.md
roadmap.md
learning-engine.md
content-structure.md
ui/navigation.md
ui/design-principles.md
ui/wireframes.md

Only modify related documents when they are actually affected.

Check that:

* Current behavior is accurately described.
* Planned behavior is not described as implemented.
* Terminology is consistent.
* Links remain valid.
* Ownership remains clear.
* The same concept does not have conflicting definitions.

---

# Phase 18 — Validate

Validation is required before considering the feature complete.

Run the narrowest relevant validation first.

Typical progression:

Affected tests
    ↓
Affected feature tests
    ↓
Type checking
    ↓
Linting
    ↓
Application-level validation
    ↓
Repository-wide validation when appropriate

The exact commands must come from the repository's existing tooling.

Do not invent validation commands if the repository already defines them.

Do not bypass failing checks.

---

# Phase 19 — Review the Complete Change

Before finishing, inspect the complete diff.

Verify:

### Architecture

* [ ] The feature is in the correct architectural boundary.
* [ ] No product-to-product dependency was introduced.
* [ ] Shared code remains appropriately generic.
* [ ] No unnecessary abstraction was introduced.

### Implementation

* [ ] Existing functionality was reused where appropriate.
* [ ] No unrelated refactoring was introduced.
* [ ] Types are correct.
* [ ] Error and edge states are handled where relevant.
* [ ] Existing patterns are followed.

### Tests

* [ ] New behavior has appropriate tests.
* [ ] Changed behavior has updated tests.
* [ ] Existing valid tests remain intact.
* [ ] Tests verify behavior rather than implementation details.
* [ ] Affected tests were executed.

### Documentation

* [ ] Documentation impact was assessed.
* [ ] Applicable documentation was updated.
* [ ] No unnecessary documentation was changed.
* [ ] Related documentation is consistent.
* [ ] Current vs future behavior is clear.
* [ ] Relevant AI context was updated when necessary.

### Validation

* [ ] Relevant tests pass.
* [ ] Type checking passes when applicable.
* [ ] Linting passes when applicable.
* [ ] Other repository validation was run when appropriate.

---

# Phase 20 — Final Response

After completing the work, provide a concise summary.

Use this structure:

## Implemented

Describe what was changed.

## Files Changed

List the important files grouped by:

Implementation
Tests
Documentation
Configuration / Other

## Tests

List the tests that were added or updated.

## Validation

List the commands or validation performed and whether they passed.

Do not claim validation was performed if it was not.

## Documentation

State:

* Which documentation was updated.
* Why it was updated.

If no documentation changed, explicitly state:

No documentation update was required because the change does not alter
documented product behavior, architecture, domain concepts, or development
practices.

## Decisions

Mention important implementation or architectural decisions.

## Remaining Work

Mention any known limitations, follow-up work, or intentionally unimplemented behavior.

---

# Completion Criteria

Do not consider the feature complete until all applicable criteria are satisfied:

* [ ] Requirements understood.
* [ ] Existing implementation inspected.
* [ ] Architectural ownership identified.
* [ ] Existing patterns reused where appropriate.
* [ ] Implementation completed.
* [ ] Relevant tests created or updated.
* [ ] Relevant tests executed.
* [ ] Documentation impact assessed.
* [ ] Applicable documentation updated.
* [ ] Related documentation checked for contradictions.
* [ ] AI context updated when necessary.
* [ ] Relevant validation completed.
* [ ] Final diff reviewed.
* [ ] Remaining limitations clearly reported.

The objective is not merely to make the requested code work.

The objective is to leave the repository in a consistent state across:

Implementation
     +
Tests
     +
Documentation
     +
Architecture
     +
AI Context

Do not optimize for maximum change.

Optimize for a small, correct, coherent, maintainable change.