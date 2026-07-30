# ADR-0008 — Content as Data

Status: Accepted

## Context

Educational content evolves independently from application logic.

## Decision

Store product content separately from application code.

Applications consume content rather than embedding it.

## Consequences

Positive

- Easier updates.
- Better versioning.
- Enables content tooling.
- Supports localization.

Negative

- Requires content validation.

## Alternatives Considered

- Hardcoded content.
- Database-only content.