---

## applyTo: "platform/**,apps/**/backend/**,apps/**/api/**"

# Backend Instructions

## Scope

These instructions apply to backend services, APIs, and server-side capabilities.

Cyros uses a platform-first architecture. Backend code must respect the distinction between:

* Product-specific backend behavior
* Shared Platform capabilities
* Generic Shared Packages

Before creating a backend service or capability, determine which architectural boundary owns it.

---

## Architecture

Backend code should follow this dependency direction:

```text
Product Backend
      ↓
Platform Capability
      ↓
Shared Packages
```

Products must not depend directly on other products.

Platform capabilities must not depend on a specific product.

Do not create a new shared backend service simply because two features currently happen to use similar logic. Promote functionality to the Platform only when there is a clear cross-product capability.

---

## APIs

Design APIs around stable product or platform capabilities.

Prefer:

* Clear resource and capability boundaries
* Explicit request and response types
* Consistent error handling
* Predictable HTTP semantics
* Validation at API boundaries
* Backward-compatible changes where practical

Do not expose internal implementation details as part of a public API.

Do not couple APIs directly to a particular frontend implementation.

---

## Validation

Validate untrusted input at the system boundary.

Do not assume that frontend validation is sufficient.

Validate:

* Request parameters
* Request bodies
* Authentication context
* Authorization requirements
* External service responses
* Persistent data before using it where appropriate

Prefer existing validation libraries and repository patterns before introducing new ones.

---

## Business Logic

Keep business logic independent from transport concerns.

Avoid putting substantial business rules directly in:

* HTTP handlers
* Controllers
* Route definitions
* Middleware
* Database adapters

Keep the responsibilities separated so business behavior can be tested without requiring the transport layer.

---

## Persistence

Keep persistence concerns behind clear boundaries.

Do not allow database-specific implementation details to leak unnecessarily into product or domain logic.

When modifying schemas or persistence models:

* Consider backward compatibility.
* Consider existing data.
* Consider migrations and rollback implications.
* Update related documentation when the data model changes.

Never modify production data as part of a development workaround.

---

## External Services

Treat external service integrations as unreliable boundaries.

Handle:

* Timeouts
* Errors
* Invalid responses
* Retries where appropriate
* Rate limits
* Authentication failures

Do not assume external systems are always available or return valid data.

Keep integration-specific behavior isolated from unrelated business logic.

---

## Observability

Backend services should provide appropriate observability.

Prefer structured logging and meaningful error information.

Do not log:

* Passwords
* Tokens
* API keys
* Secrets
* Sensitive personal data

Use the repository's existing monitoring and logging capabilities when available.

---

## Performance

Prefer simple and measurable solutions.

Before optimizing:

1. Identify the actual bottleneck.
2. Confirm it with measurements where practical.
3. Change only the relevant part.
4. Validate that the optimization improves the desired behavior.

Avoid premature caching, unnecessary asynchronous processing, or complex infrastructure without a demonstrated requirement.

---

## Testing

Backend behavior should be testable independently of the transport layer where practical.

Add tests for:

* Business rules
* Validation
* Error cases
* Authorization behavior
* Important integration boundaries

Do not rely exclusively on end-to-end tests for logic that can be tested at a lower level.

---

## Security

Backend code is security-sensitive by default.

Follow the repository's security instructions in:

```text
.github/instructions/security.instructions.md
```

Authentication and authorization are separate concerns.

Do not assume that authenticating a request means the caller is authorized to perform the requested action.

---

## Changes

When implementing a backend change:

* Reuse existing Platform capabilities.
* Avoid product-to-product coupling.
* Keep transport, business logic, and persistence responsibilities distinct.
* Add tests for changed behavior.
* Update API or architecture documentation when public behavior changes.
* Avoid unrelated refactoring.
