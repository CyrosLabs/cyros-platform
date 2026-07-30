# ADR-0007 — PostgreSQL as Primary Database

Status: Accepted

## Context

Cyros products require a reliable relational database capable of supporting transactional workloads and future scalability.

## Decision

Use PostgreSQL as the primary database.

## Consequences

Positive

- Mature ecosystem.
- Excellent reliability.
- Strong SQL compliance.
- Extensible architecture.

Negative

- Slightly more operational complexity than embedded databases.

## Alternatives Considered

- MySQL
- SQLite
- MongoDB