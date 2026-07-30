# Development Guide

This document provides the day-to-day guidance for contributing to Cyros Labs.

It complements the product roadmap, architecture documentation, and engineering standards already defined in this repository.

---

## Scope

Cyros Labs is organized as a monorepo with:

- End-user applications in apps/
- Shared platform capabilities in platform/
- Reusable libraries in packages/
- Product content in content/
- Infrastructure and deployment assets in docker/, infraestructure/, and scripts/

The repository is intentionally structured so that products can evolve independently while sharing platform capabilities.

---

## Prerequisites

Before contributing, ensure you have:

- Git
- Node.js LTS
- Docker and Docker Compose
- A supported editor such as Visual Studio Code

Some applications may introduce additional local requirements over time.

---

## Recommended Workflow

1. Review the relevant product requirements and architecture documents.
2. Create a feature or bugfix branch from the active development branch.
3. Keep changes focused and aligned with the repository boundaries.
4. Update documentation when behavior, APIs, deployment, or architecture changes.
5. Open a pull request with clear testing and rollout notes.

---

## Local Setup

Start the shared local services:

```bash
docker compose up -d database redis
```

Then follow the application-specific setup instructions in the relevant product or platform documentation.

For a first pass, the most relevant documents are:

- [docs/development/getting-started.md](docs/development/getting-started.md)
- [docs/development/local-environment.md](docs/development/local-environment.md)
- [docs/development/architecture-walkthrough.md](docs/development/architecture-walkthrough.md)

---

## Coding Expectations

Contributors should follow the standards described in:

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [docs/engineering/coding-standards.md](docs/engineering/coding-standards.md)
- [docs/architecture/decision-principles.md](docs/architecture/decision-principles.md)

The main themes are:

- Prefer readability over cleverness.
- Keep changes small and focused.
- Avoid introducing unnecessary complexity.
- Document public APIs and non-obvious business rules.
- Treat security and privacy as foundational requirements.

---

## Testing

Every meaningful change should include appropriate validation. The repository guidance for testing is documented in [docs/engineering/testing.md](docs/engineering/testing.md).

In practice, this means:

- Add or update tests for new behavior.
- Add regression tests for bug fixes.
- Validate critical user flows manually when automation is not yet available.
- Keep test scope aligned with the change.

---

## Documentation

Documentation should be updated whenever:

- A feature changes user-facing behavior
- An API changes
- Architecture or deployment assumptions change
- Environment variables or local setup changes
- Release or rollback steps change

---

## Troubleshooting

When local development is blocked, start with:

- [docs/development/debugging.md](docs/development/debugging.md)
- [docs/development/troubleshooting.md](docs/development/troubleshooting.md)
- [docs/development/faq.md](docs/development/faq.md)

---

## Release and Review

Release and review guidance lives in:

- [docs/engineering/release-process.md](docs/engineering/release-process.md)
- [docs/engineering/code-review.md](docs/engineering/code-review.md)
- [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md)
