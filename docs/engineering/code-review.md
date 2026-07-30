# Code Review

## Purpose

Code reviews exist to improve software quality and share knowledge.

They are not personal criticism.

---

# Goals

Every review should verify:

- Correctness
- Readability
- Maintainability
- Performance
- Security
- Simplicity

---

# Reviewer Checklist

## Architecture

- Does this fit the existing architecture?
- Is the solution appropriately modular?

---

## Readability

- Is the code easy to understand?
- Are names descriptive?

---

## Maintainability

- Is unnecessary complexity avoided?
- Can this be extended easily?

---

## Testing

- Are tests included?
- Do they cover important scenarios?

---

## Security

- Input validation
- Authentication
- Authorization
- Secrets handling

---

## Performance

- Avoid unnecessary work.
- Avoid duplicated queries.
- Consider scalability.

---

# Feedback

Feedback should be:

- Respectful
- Actionable
- Specific

Prefer asking questions over making assumptions.

Example:

"Would extracting this into a reusable component improve readability?"

instead of

"This is wrong."

---

# Approval

Approve only when:

- Requirements are satisfied.
- Tests pass.
- Documentation is updated when necessary.