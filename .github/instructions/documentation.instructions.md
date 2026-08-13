---
applyTo: "**/*.md"
---

# Cyros Labs Documentation Instructions

## Purpose

Documentation is part of the Cyros Labs engineering system.

Documentation should describe the intended architecture, product behavior, development practices, domain concepts, and engineering decisions clearly enough that another developer or AI agent can work in the repository without relying on undocumented assumptions.

These instructions apply when creating, modifying, reviewing, or reorganizing Markdown documentation.

---

## Documentation Sources of Truth

Before modifying documentation, identify the scope of the information being documented.

Use the appropriate source of truth.

### Architecture

Use:

docs/architecture/

Architecture documentation defines:

Repository boundaries
Platform responsibilities
Product boundaries
Dependency direction
System-level architectural decisions

Do not redefine architecture in product documentation or AI context files.

Products

Use:

docs/products/<product>/

Product documentation defines:

Product vision
Product requirements
Product behavior
Product roadmap
Product domain concepts
Product UX
Product-specific learning or business logic

For Haru Haru:

docs/products/haru-haru/
Development

Use:

docs/development/

for:

Local setup
Development workflows
Build processes
Repository development practices
Engineering

Use:

docs/engineering/

for:

Engineering processes
Review practices
General engineering standards
Development policies
AI Guidance

Use:

.ai/

for:

AI context
AI-specific rules
AI workflows
AI agents
Repository navigation guidance

.ai/ should not become a duplicate copy of architecture or product documentation.

Copilot Configuration

Use:

.github/

for:

Copilot instructions
Path-specific Copilot instructions
Reusable Copilot prompts
GitHub-specific automation guidance

Do not move product or architecture documentation into .github/.

Documentation Hierarchy

Prefer this relationship:

Architecture
    ↓
Product
    ↓
Feature
    ↓
Implementation

AI guidance should help navigate these sources rather than replace them:

Canonical Documentation
        ↓
.ai / .github
        ↓
AI-assisted implementation
Source of Truth When Documents Conflict

When information exists in multiple places, use this priority:

Current implementation for behavior that already exists.
Product requirements for intended product behavior.
Product documentation for product concepts and UX.
Architecture documentation for repository and system boundaries.
.ai/context/ for AI navigation and terminology.
Task-specific instructions.

If sources conflict, determine whether the conflict represents:

Stale documentation
Incomplete implementation
A prototype
A changed requirement
An architectural inconsistency

Do not silently create a third interpretation.

Before Editing Documentation

Before modifying a document:

Read the document itself.
Inspect related documentation.
Inspect the current implementation when documenting implemented behavior.
Check whether another document already owns the concept.
Determine what actually changed.
Identify the smallest documentation change that makes the repository accurate.

Do not rewrite an entire document merely to change a small section.

Feature and Behavior Changes

When implementing a new feature or modifying existing behavior:

Identify the documentation that owns the affected concept.
Determine whether existing documentation is still accurate.
Create or update documentation when the change establishes or modifies:
Product behavior
Product requirements
Architecture
Domain concepts
Navigation
Content structure
UI behavior
Development practices
Check closely related documentation for contradictions.
Update .ai/context/ only when the change affects:
Repository navigation
Product ownership
Platform ownership
Canonical terminology
Important AI-specific guidance

A feature or behavior change should trigger a documentation assessment.

Applicable documentation is part of the feature change; documentation is not merely optional cleanup.

Current vs Intended vs Future Behavior

Distinguish between:

Implemented behavior

What the application currently does.

Intended behavior

What the product requirements define.

Future behavior

What the roadmap or future design describes but is not yet implemented.

Use explicit language when these differ.

For example:

The current implementation displays...
The product requirement defines...
Future versions may...

Do not document planned functionality as if it were already implemented.

Do not change product requirements merely because the current implementation differs.

Haru Haru Documentation

For Haru Haru, keep these responsibilities separate:

vision.md
    Product purpose and direction

requirements.md
    Required product behavior

roadmap.md
    Planned development sequence

learning-engine.md
    Learning behavior and progression model

content-structure.md
    Structure and ownership of learning content

ui/
    Product UI, navigation, interaction, and visual principles

Do not duplicate the same requirement across multiple files unless the duplication is necessary for context.

When a concept has a clear owning document, update that document rather than creating another source.

Content Documentation

For Haru Haru:

content/haru-haru/

contains learning content.

Documentation describing the content model belongs in:

docs/products/haru-haru/content-structure.md

Content documentation should describe:

Content structure
Content ownership
Content relationships
Content requirements
Content lifecycle when relevant

Do not place React Native implementation details inside content documentation.

Avoid coupling the learning model to:

Screen names
React components
Navigation routes
Styling
Application-specific state
UI Documentation

UI documentation should describe:

User goals
Screen hierarchy
Navigation
Interaction patterns
Important states
Product-level visual principles

UI documentation should not reproduce implementation line by line.

Prefer:

Home provides a Continue Learning action that returns the learner
to the current learning path.

over:

HomeScreen.tsx renders ContinueLearningCard.tsx with marginTop: 16.

Implementation details belong in code unless they are architecturally significant.

Architecture Documentation

When documenting architecture:

Describe ownership.
Describe boundaries.
Describe dependency direction.
Explain why a boundary exists when necessary.
Avoid unnecessary implementation details.

Do not introduce architecture through documentation without verifying that it reflects the repository's actual architecture or an explicitly requested architectural change.

AI Context Documentation

.ai/context/ files should remain concise.

They should help an AI agent answer questions such as:

Where does this belong?
Which documentation should I read?
Which terminology should I use?
Which product owns this behavior?
Which platform capability should be reused?

They should not contain complete copies of:

Requirements
Architecture documents
Product specifications
Large implementation descriptions

When canonical documentation changes, update AI context only when the change affects AI navigation or interpretation.

Terminology

Use canonical terminology.

For Haru Haru, consult:

.ai/context/terminology.md

before introducing new product terminology.

Do not create synonyms for established concepts without a clear reason.

If a genuinely new domain concept is introduced, determine whether the terminology document should be updated.

Links and References

Prefer repository-relative links for repository documentation.

Use links when they improve navigation.

Do not create unnecessary cross-links between every related document.

After changing a referenced file or directory, verify that important documentation links remain valid.

Markdown Style

Prefer:

Clear headings
Short paragraphs
Lists for related items
Tables when comparing structured information
Code blocks for directory structures and examples
Consistent terminology

Avoid:

Excessive prose
Repeating the same information
Decorative formatting
Large generated sections with little information density
Documentation that simply restates source code

Documentation should be easy to scan.

Avoid Documentation Drift

After changing documentation:

Search for closely related references.
Check for contradictory statements.
Check whether implementation references are still valid.
Check whether terminology remains consistent.

For significant Haru Haru changes, consider related documents such as:

vision.md
requirements.md
roadmap.md
learning-engine.md
content-structure.md
ui/navigation.md
ui/design-principles.md
ui/wireframes.md

Only modify a related document if it is actually affected.

Documentation Quality Standard

Good documentation should answer:

What is this?
Why does it exist?
Who owns it?
How does it relate to other parts of the repository?
What is currently implemented?
What is intended?
What is planned, if relevant?
Where should a developer look for implementation details?

Do not document information simply because it exists.

Document information because it helps maintain the system.

Final Documentation Check

Before completing documentation work, verify:

 The document has a clear scope.
 The information belongs in this document.
 Terminology is consistent.
 Current behavior is not confused with future behavior.
 Architecture boundaries are respected.
 Existing documentation was reused where appropriate.
 No unnecessary duplicate documentation was introduced.
 Repository-relative links are valid.
 The document reflects the current repository state.
 Related documentation does not contradict the change.