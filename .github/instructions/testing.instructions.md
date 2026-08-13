---
applyTo: "**/*.{test,spec}.{ts,tsx,js,jsx}"
---

# Cyros Labs Testing Instructions

## Purpose

Tests are part of the repository's engineering controls.

Tests should verify meaningful behavior and provide confidence that changes do not break existing functionality.

These instructions apply when creating, modifying, reviewing, or debugging tests.

---

## Testing Principles

Tests should:

* Verify behavior rather than implementation details.
* Be readable.
* Be deterministic.
* Be focused.
* Follow existing repository testing patterns.
* Provide useful failure messages.
* Protect important product behavior.

Avoid writing tests solely to increase coverage numbers.

---

## Features and Behavior Changes

Every new feature or behavior change must trigger a test assessment.

When implementing a new feature or modifying existing behavior:

1. Identify existing tests covering the affected behavior.
2. Determine whether new tests are required.
3. Add tests for new behavior.
4. Update tests when intended behavior changes.
5. Preserve tests that still represent valid behavior.
6. Remove tests only when the behavior they protect has intentionally been removed.
7. Run the affected tests.
8. Run broader validation when appropriate.

A feature or behavior change should not be considered complete while its relevant tests are knowingly missing or stale.

---

## Before Writing or Changing Tests

Before modifying a test:

1. Read the implementation being tested.
2. Read the existing test file.
3. Inspect relevant types and data.
4. Inspect relevant mocks and test utilities.
5. Run the affected test.
6. Understand the actual failure or missing behavior.

Do not modify a test based only on its error message.

---

## Test the Behavior

Prefer tests that describe what the user or system can observe.

For UI, prefer tests such as:

renders the current learning section
allows the learner to continue learning
shows the current progress
navigates to the expected destination

Avoid tests that assert implementation details such as:

component X exists
internal state Y has value Z
function implementation detail X was called

unless that implementation detail is itself an important contract.

React Native Testing

For React Native components, prioritize:

Visible content
User interactions
Navigation behavior
Important state changes
Accessibility behavior
Conditional rendering
Loading states
Error states
Empty states when relevant

Avoid unnecessary dependence on:

Exact component nesting
Internal implementation details
Styling implementation
Private state variables
Duplicate UI Text

A screen may intentionally render the same text in multiple places.

For example:

Home
 ├── Section heading
 └── Card content

may contain repeated text.

When a test reports multiple matching elements:

Inspect the rendered UI.
Determine whether the duplicate content is intentional.
If intentional, make the test query more specific.
If unintentional, fix the UI.
Do not weaken the test blindly.

Prefer queries that express the intended user-visible behavior.

Test Failure Diagnosis

When a test fails, classify the failure before changing anything.

Possible causes include:

Implementation bug
Test expectation is incorrect
Test query is too broad
Mock/data mismatch
Navigation configuration
Async timing
Environment/setup problem
Dependency behavior

Do not assume that production code is wrong merely because a test fails.

Do not assume that the test is wrong merely because the implementation currently appears correct.

Tests and Product Requirements

Tests verify behavior but do not automatically define product requirements.

When a test conflicts with documented product requirements:

Inspect the implementation.
Check the product documentation.
Determine whether the test or implementation is stale.
Make the smallest correct change.
Update documentation if the intended behavior has changed.

Do not modify product behavior solely to satisfy an outdated test.

Test Data

Prefer realistic but minimal test data.

Test data should:

Represent the relevant domain state.
Avoid unnecessary fields.
Be easy to understand.
Avoid coupling tests to unrelated fixtures.

For Haru Haru, distinguish between:

Static learning content

and:

Learner state

Do not mix them unnecessarily.

Mocks

Use mocks only when they provide meaningful isolation.

Avoid mocking:

Internal implementation details unnecessarily.
Simple utilities that can be tested directly.
Large portions of the application without a reason.

When mocking external services, keep mock behavior explicit and predictable.

Do not create mocks that hide the behavior the test is supposed to verify.

Async Behavior

Tests involving asynchronous behavior should explicitly wait for the expected result.

Avoid arbitrary delays or timeouts when a deterministic testing utility is available.

Do not increase timeout values merely to hide a race condition.

Navigation Tests

When testing navigation, verify the intended destination or observable navigation behavior.

Do not over-test internal navigation implementation.

If the product requirement says:

Continue Learning → current lesson

the test should verify that behavior rather than the exact internal navigation call structure unless that structure is itself part of the contract.

Snapshot Tests

Use snapshots only when they provide meaningful protection.

Do not use snapshots as a substitute for behavioral assertions.

If a snapshot changes:

Inspect the change.
Determine whether it represents intentional behavior.
Update the snapshot only when the new output is correct.

Never update snapshots blindly to make tests pass.

Test Scope

Run the narrowest relevant test first.

Typical progression:

Affected test
    ↓
Affected feature tests
    ↓
Application test suite
    ↓
Repository-wide validation when appropriate

Changes to shared Platform or Package code may require broader validation.

Coverage

Coverage is useful but is not the primary objective.

Prioritize coverage of:

Important user flows
Business rules
State transitions
Error handling
Shared utilities
Critical integration boundaries

Do not add meaningless assertions simply to increase coverage.

Haru Haru Testing

For Haru Haru, prioritize behavior around:

Home rendering
Continue Learning
Course progression
Lesson behavior
Vocabulary interactions
Grammar practice
Review
Favorites
Daily Goal
Daily Challenge
Learner progress
Navigation

When a feature is not yet fully backed by the Learning Engine or persistent learner state, test the currently implemented behavior without pretending that future behavior already exists.

Test Naming

Test names should describe observable behavior.

Prefer:

renders the current learning section
continues the learner's current lesson
shows the daily goal progress
navigates to the course map

Avoid:

calls handleContinue
sets state correctly
renders component X

unless the latter genuinely describes the contract being tested.

Test Modification Rules

Do not:

Delete a failing test without understanding it.
Weaken assertions simply to pass.
Replace meaningful assertions with snapshots.
Mock away the code under test.
Change expected behavior without checking requirements.
Modify unrelated tests during a feature change.

If a test is genuinely incorrect, fix the test and preserve the intended behavior.

Validation

After modifying tests or implementation:

Run the affected test.
Run related tests when appropriate.
Run type checking or linting when relevant.
Run the broader suite when the change warrants it.

Report validation honestly.

Never claim a test passed if it was not run.

Final Test Review

Before completing testing work, verify:

 New behavior has appropriate test coverage.
 Changed behavior has updated tests.
 Tests verify meaningful behavior.
 Tests do not unnecessarily depend on implementation details.
 Test data is minimal and relevant.
 Mocks are justified.
 Async behavior is deterministic.
 Duplicate UI content is handled intentionally.
 Existing tests were not weakened unnecessarily.
 Affected tests were actually executed.
 Broader validation was considered where appropriate.