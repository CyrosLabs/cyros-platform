---

## applyTo: "infrastructure/**,docker/**,scripts/**,.github/workflows/**,.github/ruleset.yml"

# Infrastructure Instructions

## Scope

These instructions apply to infrastructure, deployment, automation, containerization, and repository operational configuration.

Infrastructure exists to support the applications and Platform. It should not become a place for product business logic.

---

## Principles

Prefer:

* Reproducibility
* Explicit configuration
* Secure defaults
* Least privilege
* Automation
* Observability
* Simple operational designs

Infrastructure should be understandable and maintainable by engineers who did not create it.

---

## Environments

Keep environment-specific configuration explicit.

Do not hardcode production values into source code or infrastructure definitions.

Separate:

* Local development
* CI
* Staging
* Production

when those environments exist.

Do not assume local development behavior is identical to production.

---

## Secrets

Never commit:

* API keys
* Passwords
* Tokens
* Private keys
* Cloud credentials
* Production secrets

Use the appropriate secret-management mechanism for the environment.

Do not print secrets into CI logs.

Do not expose secrets through build artifacts, application bundles, or client-side configuration.

---

## GitHub Actions

GitHub Actions should be:

* Deterministic
* Minimal
* Reproducible
* Explicit about permissions
* Focused on one responsibility per workflow or job

Prefer repository-defined scripts over duplicating command logic inside workflows.

Pin action versions intentionally.

Do not weaken CI, security, or branch protections to make a workflow pass.

When changing an existing workflow, understand what repository control it provides before modifying it.

---

## Containers

When modifying Docker configuration:

* Keep images minimal.
* Avoid unnecessary packages.
* Prefer deterministic dependency installation.
* Do not run processes with unnecessary privileges.
* Do not copy secrets into images.
* Keep development and production concerns separate where appropriate.

---

## Deployment

Infrastructure changes should consider:

* Rollback
* Failure modes
* Health checks
* Logging
* Monitoring
* Configuration
* Dependency availability

Do not introduce deployment complexity that the current product maturity does not justify.

Follow the repository's deployment architecture documentation for the intended production model.

---

## Infrastructure as Code

Infrastructure definitions should be declarative and reproducible where possible.

Avoid manual configuration that cannot be reproduced from the repository.

When changing infrastructure resources, consider:

* Existing resources
* Dependencies
* State
* Destructive operations
* Migration paths
* Cost implications

Never perform destructive changes implicitly.

---

## Automation

Scripts should be:

* Idempotent where practical
* Safe to rerun
* Explicit about failures
* Appropriate for their environment

Avoid scripts that silently ignore errors.

Prefer failing fast when continuing would leave the system in an invalid state.

---

## Observability

Operational changes should preserve or improve visibility into:

* Application health
* Deployment status
* Failures
* Resource usage
* Security events

Do not disable monitoring merely to suppress noisy failures without understanding their cause.

---

## Changes

Before infrastructure changes:

1. Read the relevant deployment or infrastructure documentation.
2. Identify affected environments.
3. Identify secrets and permissions involved.
4. Consider rollback and failure behavior.
5. Make the smallest safe change.
6. Validate configuration before deployment.

Infrastructure changes should receive the appropriate review defined by repository ownership and branch protection.
