# Write Architecture Decision Record

Create an Architecture Decision Record for a significant architectural decision in the Cyros Labs repository.

Before writing the ADR, inspect the relevant architecture documentation and existing ADRs.

## When an ADR Is Appropriate

Use an ADR for decisions that materially affect:

* Architectural boundaries
* Platform capabilities
* Technology choices
* Major dependencies
* Data architecture
* API contracts
* Infrastructure architecture
* Security architecture
* Repository structure
* Cross-product integration
* Long-term engineering direction

Do not create an ADR for routine implementation details.

## Process

1. Identify the decision that needs to be documented.
2. Describe the problem and context.
3. Identify relevant constraints.
4. Inspect existing architecture and decisions.
5. Identify viable alternatives.
6. Compare the alternatives.
7. Select the recommended decision.
8. Explain the consequences.
9. Identify follow-up work where applicable.

Do not write an ADR merely to justify a decision that has already been made without evaluating alternatives.

## Architectural Principles

Use the existing Cyros architecture as the baseline.

Consider:

* Product ownership
* Platform boundaries
* Shared Packages
* Content boundaries
* Infrastructure
* Security
* Simplicity
* Reuse
* Long-term maintainability

An ADR must not silently contradict existing architecture documentation.

If the decision changes an existing architectural principle or boundary, explicitly identify that change.

## ADR Structure

Use the repository's established ADR location and naming convention.

Unless an existing ADR format says otherwise, include:

# ADR: <Decision Title>

## Status

Proposed

## Context

<Problem and relevant context>

## Decision

<Decision made>

## Alternatives Considered

### Alternative 1

<Description and trade-offs>

### Alternative 2

<Description and trade-offs>

## Consequences

### Positive

- <Consequence>

### Negative

- <Consequence>

## Related Decisions

<Related ADRs or architecture documents>

## Follow-up

<Required future work, if any>

Use factual, decision-oriented language.

Avoid turning the ADR into implementation documentation.

## Output Requirements

The ADR should answer:

* What problem are we solving?
* Why does this require an architectural decision?
* What alternatives were considered?
* Why was this option selected?
* What consequences does the decision create?
* What future constraints does this introduce?

Do not implement the decision unless explicitly requested.
