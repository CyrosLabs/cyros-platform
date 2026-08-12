# Design Feature

You are designing a feature for the Cyros Labs repository.

Before proposing an implementation, understand the existing code and architecture.

## Process

1. Identify the product, platform capability, package, content area, or infrastructure area affected.
2. Read the relevant repository instructions and architecture documentation.
3. Inspect the existing implementation and identify reusable capabilities.
4. Determine the correct architectural ownership of the feature.
5. Identify affected components, modules, APIs, data, content, tests, and documentation.
6. Identify important edge cases, failure states, security concerns, and platform considerations.
7. Prefer the smallest design that satisfies the requirement.
8. Avoid introducing abstractions or infrastructure that are not currently justified.

## Architectural Checks

Explicitly determine:

* What owns this feature?
* Is it product-specific or shared?
* Should it use an existing Platform capability?
* Should anything become a Shared Package?
* Does the feature create a new dependency between products?
* Does it change an existing architectural boundary?
* Does it require an ADR?

Products must not directly depend on other products.

Do not promote product-specific behavior into the Platform merely because it may be reusable later.

## Output

Provide:

### Problem

Describe the problem being solved.

### Proposed Design

Describe the recommended design and why it fits the existing architecture.

### Architecture

Identify:

* Owning area
* Dependencies
* Data flow
* Important boundaries

### Files and Components

List the files or areas that would likely be created or modified.

Do not invent exact file paths until the existing repository structure has been inspected.

### Data and API Changes

Describe required data models, APIs, persistence, or external integrations.

State explicitly when none are required.

### UI / UX

Describe the relevant user experience, states, validation, loading, empty, and error behavior.

### Security

Identify authentication, authorization, data protection, secret handling, and other relevant security concerns.

### Testing

Describe the tests needed to validate the feature.

### Documentation

Identify documentation that should be updated.

### Risks and Trade-offs

Identify meaningful risks, alternatives considered, and why the proposed approach is preferable.

Do not implement the feature unless explicitly asked to do so.
