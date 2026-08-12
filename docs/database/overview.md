# Database and Data Storage Guide

This repository expects a layered data strategy built around PostgreSQL for primary application data, Redis for cache and transient state, and object storage for media and file-like content.

The current infrastructure definitions are reflected in [docker-compose.yml](docker-compose.yml) and the architecture documents in [docs/architecture/tech-stack.md](docs/architecture/tech-stack.md).

---

## Current Data Stores

### PostgreSQL

PostgreSQL is the primary relational database for application data.

Use it for:

- User and account data
- Product state and progress
- Structured business records
- Data that benefits from relational integrity

### Redis

Redis is used for caching and fast transient data.

It is appropriate for:

- Session or temporary state
- Cache layers
- Rate limiting or short-lived coordination data

### Object Storage

Object storage is expected for media and file-like content.

This is particularly relevant for:

- Audio and image assets
- User-uploaded files
- Media-heavy product features

---

## Data Ownership

Data ownership should stay close to the service that understands the domain.

- Product applications own product-specific relational data.
- Platform services own shared capabilities and their associated records.
- Shared packages should not define cross-cutting database schemas without platform review.

---

## Operational Expectations

The repository guidance expects database-related work to include:

- Clear migration or initialization steps
- Backup and restore planning for production environments
- Secure configuration of credentials and connection details
- Logging and observability for slow queries and failures

---

## Related Documents

- [docker-compose.yml](docker-compose.yml)
- [docs/architecture/tech-stack.md](docs/architecture/tech-stack.md)
- [docs/architecture/deployment.md](docs/architecture/deployment.md)
- [SECURITY.md](SECURITY.md)
