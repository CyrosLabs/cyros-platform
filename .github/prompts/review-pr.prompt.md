# Review Pull Request

Review the current pull request as a senior Cyros Labs engineer.

Do not modify code unless explicitly asked.

## Review Priorities

Review in this order:

1. Correctness
2. Security
3. Architectural consistency
4. Maintainability
5. Testing
6. Performance
7. Documentation

Focus on meaningful problems rather than stylistic preferences.

## Repository Context

Use the repository-wide and path-specific instructions as the baseline.

Check the relevant architecture documentation when the PR affects:

* Platform boundaries
* Shared Packages
* Product boundaries
* Infrastructure
* APIs
* Security
* Repository automation

## Architectural Review

Check for:

* Product-to-product dependencies
* Product-specific logic leaking into Platform
* Shared technical code being placed in product code
* Unnecessary abstractions
* Duplicate existing capabilities
* Unclear ownership
* Infrastructure concerns leaking into business logic

Flag architectural boundary violations even when the implementation works.

## Code Review

Look for:

* Incorrect behavior
* Missing edge cases
* Error handling problems
* Race conditions
* Unsafe assumptions
* Type safety issues
* Resource leaks
* Unnecessary complexity
* Dead code
* Maintainability problems

Do not report purely subjective style preferences unless they conflict with established repository conventions.

## Security Review

Check for:

* Secrets or credentials
* Authentication flaws
* Authorization flaws
* Trust-boundary violations
* Unsafe input handling
* Sensitive data exposure
* Insecure dependencies
* Unsafe CI/CD changes
* Excessive permissions

Treat client-side code as untrusted and inspect server-side enforcement where relevant.

## Testing Review

Determine whether tests adequately cover the changed behavior.

Flag:

* Missing regression tests
* Tests that only exercise implementation details
* Important untested error paths
* Tests weakened or removed without justification

## Output Format

Organize findings by severity:

### Critical

Issues that can cause severe security, data, or production impact.

### High

Issues that should be fixed before merge.

### Medium

Meaningful correctness, maintainability, or testing concerns.

### Low

Minor issues worth addressing when practical.

For every finding, include:

* File and line
* Problem
* Why it matters
* Recommended fix

Do not report issues that are not supported by the actual diff or repository context.

End with:

### Overall Assessment

State whether the PR is:

* Approve
* Approve with minor changes
* Changes requested
* Cannot assess safely

Explain the primary reason.
