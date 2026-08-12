# Security Rules

## Purpose

Security rules apply to every AI-generated or AI-assisted change in the Cyros Platform repository.

The canonical security documentation includes:

- `SECURITY.md`
- `docs/architecture/security.md`

When security-sensitive behavior is involved, consult those documents before modifying code.

Security requirements must not be weakened for convenience.

---

## 1. Secrets

Never:

- Commit secrets.
- Hardcode API keys.
- Hardcode passwords.
- Hardcode access tokens.
- Hardcode private credentials.
- Add credentials to source code.
- Print secrets in logs.
- Include secrets in tests or fixtures.

Use the repository's established environment/configuration mechanism.

If a secret is accidentally discovered:

1. Do not reproduce it unnecessarily.
2. Do not commit it.
3. Report the exposure.
4. Recommend rotation when appropriate.

---

## 2. Sensitive Data

Treat the following as sensitive unless explicitly documented otherwise:

- Authentication credentials
- Access tokens
- Personal information
- Private user data
- Payment information
- Private messages
- Behavioral or analytics data
- Internal infrastructure details

Do not expose sensitive information through:

- Logs
- Error messages
- Client-side bundles
- URLs
- Analytics events
- Debug output

---

## 3. Authentication and Authorization

Authentication and authorization are different concerns.

Authentication answers:

> Who is the user?

Authorization answers:

> What is this user allowed to do?

Do not assume authentication automatically provides authorization.

Every protected operation must enforce appropriate authorization at the correct boundary.

Do not rely exclusively on client-side checks for security.

---

## 4. Input Validation

Treat external input as untrusted.

Validate and normalize input at appropriate boundaries.

This includes:

- API requests
- User input
- Query parameters
- Form data
- Uploaded files
- External service responses
- Configuration received from outside the application

Do not assume that client-side validation is sufficient.

---

## 5. Output and Injection Safety

Do not construct executable queries, commands, HTML, or other interpretable content by unsafe string concatenation.

Use established safe APIs and parameterization.

Pay particular attention to:

- SQL injection
- Command injection
- XSS
- Path traversal
- Template injection
- Unsafe deserialization

Do not disable escaping or validation merely to make functionality work.

---

## 6. Client Applications

Never place privileged secrets in client applications.

Anything shipped to a client should be considered potentially observable by the user.

Do not place:

- Server credentials
- Private API keys
- Administrative tokens
- Database credentials
- Internal service credentials

inside frontend or mobile application code.

Client-side authorization checks must never be considered the sole security boundary.

---

## 7. Dependencies

Before adding a dependency:

- Prefer maintained packages.
- Check whether an existing dependency already provides the capability.
- Avoid unnecessary dependencies.
- Consider known security risks.
- Avoid packages with unclear provenance.

Do not introduce a dependency solely because it makes implementation slightly easier.

---

## 8. Logging and Errors

Logs must be useful without exposing sensitive information.

Do not log:

- Passwords
- Authentication tokens
- API keys
- Payment information
- Sensitive personal information
- Full authorization headers
- Secrets from environment variables

User-facing errors should not reveal internal implementation details unnecessarily.

---

## 9. AI and External Services

When implementing AI functionality:

- Do not send sensitive user data to external AI services without explicit architectural justification.
- Minimize data sent to external providers.
- Avoid including secrets in prompts.
- Treat model output as untrusted input.
- Validate model-generated structured data before using it.
- Do not grant model output implicit authority to execute privileged operations.

AI-generated output must not bypass existing authorization or security controls.

---

## 10. Files and Uploads

Treat uploaded files as untrusted.

Validate:

- File type
- File size
- File name
- Storage location
- Access permissions

Do not assume file extensions are trustworthy.

Avoid allowing user-controlled paths to determine filesystem locations without validation.

---

## 11. Security-Sensitive Changes

The following changes require additional scrutiny:

- Authentication
- Authorization
- Identity
- Payments
- User data
- AI data handling
- File uploads
- External integrations
- Secrets/configuration
- Infrastructure
- Database permissions
- Public APIs

For these changes, AI agents should explicitly identify security considerations before implementation.

---

## 12. Least Privilege

Grant the minimum permissions required.

Prefer:

- Narrow API scopes
- Narrow database permissions
- Narrow service permissions
- Explicit authorization
- Short-lived credentials where appropriate

Do not grant broad access simply because it is easier to implement.

---

## 13. Security Changes Must Not Be Hidden

Never silently weaken:

- Authentication
- Authorization
- Validation
- Encryption
- Access controls
- Security checks
- Dependency protections

If a requirement appears to conflict with a security control, explain the conflict and ask for a deliberate decision.

---

## 14. AI-Specific Requirement

AI agents must assume that security-sensitive code requires extra verification.

Never say:

> "This is secure"

merely because the implementation appears reasonable.

Instead, identify what was checked, what was not checked, and what remains uncertain.

Security is a correctness requirement, not an optional improvement.