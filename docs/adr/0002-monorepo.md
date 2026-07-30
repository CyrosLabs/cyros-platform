# ADR-0002 — Adopt a Monorepo Strategy

Status: Accepted

## Context

Cyros Labs is expected to develop multiple products that share platform services, libraries, and engineering practices.

Managing these projects independently from the beginning would introduce unnecessary operational overhead.

## Decision

Adopt a monorepository as the primary development strategy.

The repository will contain:

- Applications
- Platform services
- Shared packages
- Documentation
- Infrastructure
- Content

As products mature, they may be extracted into independent repositories.

## Consequences

Positive

- Simplified development.
- Easier code sharing.
- Consistent tooling.
- Unified documentation.

Negative

- Larger repository size.
- More complex CI/CD over time.

## Alternatives Considered

- Multiple repositories from day one.
- Git submodules.
- Separate repositories with shared packages.