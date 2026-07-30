# Troubleshooting Guide

This guide collects the most common startup and development issues that may arise while working in the Cyros Labs repository.

---

## Common Issues

### Docker services are not starting

Check that Docker is running and that the required resources are available.

Typical steps:

```bash
docker compose ps
docker compose logs
```

### Local database connection fails

Verify that the PostgreSQL container is running and that the expected environment variables are available.

### Dependency installation fails

Confirm that the local Node.js version is compatible with the repository tooling and that the package manager is installed correctly.

### CI or lint checks fail locally

Review the relevant engineering guidance and ensure that your branch is consistent with the repository conventions.

---

## Where to Look

- [docs/development/debugging.md](debugging.md)
- [docs/development/faq.md](faq.md)
- [docs/development/local-environment.md](local-environment.md)
- [docs/architecture/deployment.md](../architecture/deployment.md)

---

## Escalation

If the issue is not resolved locally, capture the relevant logs and raise the problem through the standard repository workflow described in [CONTRIBUTING.md](../../CONTRIBUTING.md).
