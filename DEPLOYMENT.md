# Deployment Guide

Cyros Labs follows a cloud-first deployment strategy with local development and production-ready environments.

The architectural source of truth is [docs/architecture/deployment.md](docs/architecture/deployment.md).

---

## Deployment Principles

Deployment should prioritize:

- Reliability
- Scalability
- Simplicity
- Observability
- Cost efficiency

The repository expects services to be deployable independently while remaining functional in local development.

---

## Environments

### Local

Used for development and testing.

The current repository provides local infrastructure via [docker-compose.yml](docker-compose.yml), including PostgreSQL and Redis.

### Development

Used for shared validation and internal testing.

### Staging

Used for production-like validation before release.

### Production

Used for customer-facing traffic and should include secure secrets management, monitoring, and backup planning.

---

## Container and Infrastructure Expectations

- Backend services should be containerized where practical.
- Infrastructure should be managed as code where possible.
- Deployments should support health checks and rollback planning.
- Production deployments should use secure secret handling rather than embedded secrets.

---

## CI/CD Expectations

Pull requests should trigger automated validation for:

- Linting
- Tests
- Build validation

The repository guidance also calls for release verification and monitoring after deployment.

---

## Rollback and Release Safety

Every release should define:

- How to verify success
- How to roll back safely
- Which monitoring signals matter most

The release process is described in [docs/engineering/release-process.md](docs/engineering/release-process.md).

---

## Related Documents

- [docs/architecture/deployment.md](docs/architecture/deployment.md)
- [docs/engineering/release-process.md](docs/engineering/release-process.md)
- [docker-compose.yml](docker-compose.yml)
