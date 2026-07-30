# Security Guide

Security is treated as a foundational requirement, not a feature. The repository-wide expectations are defined in [docs/architecture/security.md](docs/architecture/security.md).

---

## Core Principles

The following principles guide engineering work:

- Least privilege
- Defense in depth
- Secure by default
- Privacy by design
- Zero trust
- Fail securely

---

## Authentication and Authorization

Identity is expected to be managed by the platform rather than repeated inside each product.

Authorization should always be validated on the server side, never assumed from the client.

---

## Secrets and Configuration

Secrets must never be committed to the repository.

Use:

- Environment variables
- Secret managers
- CI/CD secret stores

Configuration should stay out of source code wherever practical.

---

## API and Data Protection

Public APIs should include:

- Input validation
- Authentication and authorization
- Rate limiting where appropriate
- Logging and audit trails

Sensitive information should be protected in transit and at rest when relevant.

---

## Dependency and Supply Chain Safety

Dependencies should be:

- Reviewed regularly
- Scanned automatically
- Removed when obsolete

---

## Vulnerability Reporting

Security vulnerabilities should be reported privately rather than through public issues.

---

## Related Documents

- [docs/architecture/security.md](docs/architecture/security.md)
- [API.md](API.md)
- [DEPLOYMENT.md](DEPLOYMENT.md)
