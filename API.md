# API Guide

This repository defines a platform-first architecture in which public APIs should be consistent, documented, typed, and secure.

The source-of-truth guidance for API design lives in [docs/architecture/api-guidelines.md](docs/architecture/api-guidelines.md).

---

## API Principles

All public APIs should:

- Be consistent and predictable
- Be versioned
- Be documented
- Be typed
- Be secured by default

The expected API style is resource-oriented and stateless where practical.

---

## Expected API Characteristics

Every endpoint should include:

- Input validation
- Structured error handling
- Authentication when required
- Authorization checks
- OpenAPI or equivalent documentation

Sensitive requests should follow the security expectations in [SECURITY.md](SECURITY.md).

---

## Service Ownership

API responsibilities should remain with the owning service:

- Product applications expose product-specific flows.
- Platform services own cross-cutting capabilities such as identity, payments, messaging, analytics, and storage.
- Shared packages should not become a dumping ground for service-specific API logic.

---

## Documentation Expectations

Public APIs should be documented before they are consumed by other services or products.

The documentation should include:

- Endpoint purpose
- Request and response shape
- Authentication and authorization requirements
- Error cases
- Versioning expectations

---

## Future Direction

The repository anticipates a growing set of platform-facing services. As these mature, the API layer should become more formalized through:

- OpenAPI specifications
- Versioned contracts
- Shared SDK usage where appropriate
- Contract validation in CI

---

## Related Documents

- [docs/architecture/api-guidelines.md](docs/architecture/api-guidelines.md)
- [ARCHITECTURE.md](ARCHITECTURE.md)
- [SECURITY.md](SECURITY.md)
