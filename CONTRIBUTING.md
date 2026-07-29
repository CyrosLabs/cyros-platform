# Contributing to Cyros Labs

Thank you for your interest in contributing to Cyros Labs.

This document describes the guidelines and workflow for contributing code, documentation, and improvements to our projects.

## Code of Conduct

We are committed to creating a respectful, inclusive, and collaborative environment.

All contributors are expected to:

* Communicate respectfully.
* Provide constructive feedback.
* Focus on solving problems rather than criticizing people.
* Maintain professional standards.

## Getting Started

### Prerequisites

Before contributing, ensure you have installed:

* Git
* Node.js (LTS version)
* Docker and Docker Compose
* Your preferred IDE/editor

Some projects may have additional requirements documented in their specific README files.

## Development Workflow

We follow a feature-branch workflow.

Branch naming:

```
main
 └── Production-ready code

develop
 └── Integration branch

feature/*
 └── New functionality

bugfix/*
 └── Bug fixes

hotfix/*
 └── Emergency production fixes
```

Example:

```
feature/user-authentication
bugfix/payment-validation
```

## Setting Up a Project

Clone the repository:

```bash
git clone <repository-url>
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start development services:

```bash
docker compose up
```

Run the application using the instructions provided in the project README.

## Coding Standards

All contributions should follow these principles:

* Write clean, maintainable code.
* Prefer readability over clever solutions.
* Keep functions and components focused.
* Avoid unnecessary complexity.
* Add comments only when the intent is not obvious.

### Formatting

Projects should use:

* ESLint for code quality.
* Prettier for formatting.
* EditorConfig for consistency.

Before submitting changes, ensure:

```bash
npm run lint
npm run format
```

## Commit Guidelines

We use Conventional Commits.

Format:

```
type(scope): description
```

Examples:

```
feat(auth): add OAuth login
fix(api): resolve timeout issue
docs(readme): update installation steps
refactor(database): improve query performance
test(users): add user service tests
```

Commit messages should:

* Be written in present tense.
* Clearly describe the change.
* Avoid unnecessary details.

## Pull Requests

Before creating a pull request:

* Ensure the application builds successfully.
* Run all tests.
* Update documentation if necessary.
* Keep commits organized.

Pull requests should include:

* Clear description of the change.
* Reason for the change.
* Testing performed.
* Screenshots for UI changes when applicable.

## Testing

Every feature should include appropriate tests.

Examples:

```bash
npm test
npm run test:coverage
```

Bug fixes should include a test preventing regression.

## Documentation

Documentation should be updated when:

* Adding new features.
* Changing APIs.
* Modifying architecture.
* Adding environment variables.
* Changing deployment processes.

## Security

Never commit:

* API keys.
* Passwords.
* Private certificates.
* Environment files containing secrets.

Use:

```
.env.example
```

as a template for required environment variables.

Security vulnerabilities should be reported privately instead of through public issues.

## Review Process

Pull requests are reviewed based on:

* Correctness.
* Maintainability.
* Security.
* Performance.
* Alignment with project architecture.

Feedback should be treated as an opportunity to improve the project.

## Questions

If you have questions, review the project documentation first.

For additional help, contact the project maintainers.
