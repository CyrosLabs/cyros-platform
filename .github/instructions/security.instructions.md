---

## applyTo: "**/*"

# Security Instructions

## Scope

These instructions apply to all repository changes.

Security is a cross-cutting engineering responsibility and must be considered regardless of whether a change affects an application, Platform capability, package, infrastructure, documentation, or CI configuration.

---

## Core Principles

Prefer:

* Secure defaults
* Least privilege
* Explicit authorization
* Minimal access
* Defense in depth
* Safe failure behavior
* Data minimization
* Auditable behavior

Do not trade security for convenience without explicitly understanding the consequences.

---

## Secrets

Never commit or hardcode:

* Passwords
* API keys
* Access tokens
* Private keys
* Cloud credentials
* Database credentials
* Signing credentials

Do not include secrets in:

* Source code
* Tests
* Fixtures
* Logs
* Screenshots
* Documentation
* CI output

Use environment variables or an appropriate secret-management mechanism.

Remember that client-side application code is not a secure location for secrets.

---

## Authentication and Authorization

Authentication answers:

> Who is the caller?

Authorization answers:

> What is the caller allowed to do?

Do not treat authentication alone as sufficient protection.

Every protected operation should enforce authorization appropriate to the resource and action.

Never rely solely on the frontend to enforce authorization.

---

## Input Validation

Treat all external input as untrusted.

Validate:

* API requests
* URL parameters
* Form input
* External service responses
* File uploads
* Configuration values
* Persisted data when trust assumptions may no longer hold

Prefer allowlists and explicit validation over permissive parsing where practical.

---

## Sensitive Data

Minimize collection, storage, transmission, and logging of sensitive data.

Do not log sensitive values simply because they are convenient for debugging.

When sensitive data is required, document why it is required and follow the relevant architecture and security guidance.

---

## APIs and External Services

For externally accessible APIs:

* Authenticate where required.
* Authorize every protected operation.
* Validate input.
* Apply appropriate rate limiting.
* Return safe errors.
* Avoid leaking internal implementation details.

For third-party services:

* Protect credentials.
* Validate responses.
* Handle failures safely.
* Respect service limits.
* Avoid sending unnecessary user data.

---

## Frontend and Mobile Security

Assume client-side code and configuration can be inspected by users.

Never place privileged credentials in:

* React code
* React Native code
* Expo configuration delivered to clients
* Web bundles
* Mobile application bundles

Security-sensitive operations should be enforced server-side or through appropriate Platform services.

---

## Dependencies

Before adding or upgrading a dependency, consider:

* Known vulnerabilities
* Maintenance status
* Scope and permissions
* Supply-chain risk
* Transitive dependencies

Prefer established dependencies already used by the repository when they adequately solve the requirement.

Do not disable dependency or security tooling because it reports a problem.

---

## CI/CD Security

GitHub Actions workflows should use the minimum permissions necessary.

Do not expose secrets to jobs that do not require them.

Be careful with:

* Pull requests from forks
* Untrusted workflow input
* Shell interpolation
* Artifact handling
* Third-party Actions

Do not execute untrusted pull-request content with privileged credentials.

Do not bypass required security checks.

---

## Infrastructure Security

Infrastructure changes must consider:

* IAM permissions
* Network exposure
* Encryption
* Secrets
* Resource isolation
* Logging
* Monitoring
* Backup and recovery

Prefer least-privilege permissions.

Do not expose services publicly unless there is a clear requirement.

---

## Logging and Errors

Logs should help diagnose failures without exposing sensitive information.

Do not include secrets, authentication tokens, passwords, or unnecessary personal data in logs.

User-facing errors should not expose internal stack traces, credentials, infrastructure details, or sensitive implementation information.

---

## Security Changes

When implementing a security-sensitive change:

1. Identify the asset being protected.
2. Identify the trust boundary.
3. Identify the attacker-controlled inputs.
4. Determine the required authentication and authorization.
5. Minimize privileges and exposed data.
6. Add appropriate tests.
7. Review relevant architecture and security documentation.
8. Ensure CI security checks continue to operate.

Do not assume a change is secure merely because it passes functional tests.

---

## Incident and Vulnerability Handling

If a change reveals a potential secret exposure, authentication bypass, authorization flaw, or other serious vulnerability:

* Do not commit additional sensitive information.
* Avoid reproducing secrets unnecessarily.
* Follow the repository's security reporting process.
* Do not weaken security controls to conceal the issue.

Security findings should be treated as engineering issues, not merely CI failures.
