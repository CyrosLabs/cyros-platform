# ADR-0006 — Docker for Local Development

Status: Accepted

## Context

Development environments should be reproducible across machines.

## Decision

All local infrastructure dependencies will run through Docker Compose.

## Consequences

Positive

- Consistent environments.
- Easier onboarding.
- Reduced configuration issues.

Negative

- Docker learning curve.
- Higher resource usage.

## Alternatives Considered

- Manual installations.
- Virtual machines.