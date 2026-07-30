# ADR-0003 — Platform First Architecture

Status: Accepted

## Context

Multiple Cyros products require common capabilities such as authentication, AI, analytics, notifications, and payments.

Duplicating these capabilities would increase maintenance costs.

## Decision

Shared capabilities will belong to the Platform.

Products own user experiences.

The Platform owns reusable services.

## Consequences

Positive

- Less duplicated code.
- Easier maintenance.
- Consistent behavior.
- Faster product development.

Negative

- Requires clear service boundaries.

## Alternatives Considered

- Product-specific implementations.
- Shared libraries only.