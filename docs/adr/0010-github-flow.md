# ADR-0010 — GitHub Flow

Status: Accepted

## Context

Cyros currently has a small engineering team focused on continuous delivery.

## Decision

Adopt GitHub Flow.

Feature branches merge into a deployable main branch through Pull Requests.

## Consequences

Positive

- Simple workflow.
- Fast iteration.
- Minimal overhead.

Negative

- Less suited for long-lived release branches.

## Alternatives Considered

- Git Flow.
- Trunk-Based Development.