
# Cyros Labs

> We build technology that helps people thrive.

Cyros Labs is a software studio focused on creating thoughtful technology that genuinely improves people's lives.

We believe technology should do more than automate tasks.

It should reduce stress, encourage growth, create opportunities, and help people become who they aspire to be.

Every product begins with a single question:

> "Will this genuinely improve someone's life?"

If the answer is no, we don't build it.

---

## Philosophy

We don't build apps.

We build companions for life.

---

## Vision

To create thoughtful technology that helps people learn, grow, connect, and thrive.

---

## Our Pillars

### 🧠 Mind

- Haru Haru
- Companion
- Challenges

### ❤️ Well-being

- Diet Buddy
- Workout
- Diet Planner

### 🏡 Home

- Smart Pantry
- Price Tracker

### 💼 Work

- Restaurant Platform
- Invoices
- Consulting Platform
- Reports

### 💻 Creation

- Public API Platform
- Debugger

### ⏳ Time

- Goals
- Time Tracker

### 🎮 Joy

- Race Game

---

## Architecture

Cyros Labs follows a **platform-first architecture**.

Products focus on user experiences and product-specific business flows.

The Platform provides reusable capabilities shared across products.

Shared Packages provide reusable technical functionality.

Content is maintained independently from application logic.

Infrastructure provides the deployment and operational foundation.

This separation allows products to evolve independently while sharing a common technological foundation.

```mermaid
flowchart TD
    A[Company / Product Vision] --> B[Platform]
    B --> C[Product Apps]
    B --> D[Shared Packages]
    C --> E[Content]
    B --> F[Infrastructure]
````

See the [Architecture Documentation](docs/architecture/overview.md) for the complete architectural model.

---

## Repository Structure

```text
apps/             Product applications
platform/         Shared platform capabilities
packages/         Shared libraries
content/          Product content
docs/             Project documentation
.ai/              AI agents, workflows, rules, and context
docker/           Local development environment
infrastructure/   Infrastructure and deployment
scripts/           Automation scripts
tools/             Development and engineering tools
```

For more detail, see the [Repository Structure](docs/architecture/repository-structure.md).

---

## Engineering Principles

* Human First
* Platform First
* AI Native
* Modular by Design
* Reuse Before Rebuild
* Simplicity Over Complexity
* Build for the Long Term

---

## Current Focus

We are currently building **Haru Haru**, a Korean learning platform designed to make language learning engaging, meaningful, and confidence-building.

The application lives in `apps/haru-haru` and uses Expo with TypeScript.

---

## Development

### Prerequisites

* Node.js 24.x

### Run Haru Haru Locally

```bash
cd apps/haru-haru
npm install
npm start
```

Run on a specific platform:

```bash
npm run android
npm run ios
npm run web
```

### Validation

```bash
npm test -- --runInBand
npx eslint . --ext .ts,.tsx
npx tsc --noEmit
```

For complete development documentation, see:

* [Getting Started](docs/development/getting-started.md)
* [Local Environment](docs/development/local-environment.md)
* [Tooling](docs/development/tooling.md)
* [Debugging](docs/development/debugging.md)
* [Troubleshooting](docs/development/troubleshooting.md)
* [FAQ](docs/development/faq.md)

---

## Documentation

### Architecture

* [Architecture Overview](docs/architecture/overview.md)
* [Platform Architecture](docs/architecture/platform.md)
* [Platform Boundaries](docs/architecture/platform-boundaries.md)
* [Repository Structure](docs/architecture/repository-structure.md)
* [Monorepo Strategy](docs/architecture/monorepo.md)
* [System Design](docs/architecture/system-design.md)
* [Technology Stack](docs/architecture/tech-stack.md)
* [API Guidelines](docs/architecture/api-guidelines.md)
* [Deployment](docs/architecture/deployment.md)
* [Security](docs/architecture/security.md)
* [Scalability](docs/architecture/scalability.md)
* [Decision Principles](docs/architecture/decision-principles.md)

### Development

* [Getting Started](docs/development/getting-started.md)
* [Local Environment](docs/development/local-environment.md)
* [Docker](docs/development/docker.md)
* [Tooling](docs/development/tooling.md)
* [Architecture Walkthrough](docs/development/architecture-walkthrough.md)
* [Debugging](docs/development/debugging.md)
* [Troubleshooting](docs/development/troubleshooting.md)
* [Environment Variables](docs/development/environment-variables.md)
* [FAQ](docs/development/faq.md)

### Engineering

* [Testing](docs/engineering/testing.md)
* [Release Process](docs/engineering/release-process.md)

### Project

* [Contributing](CONTRIBUTING.md)
* [Glossary](docs/GLOSSARY.md)

---

## AI-Assisted Development

Cyros is designed to support AI-assisted software development.

The `.ai/` directory contains the project's AI engineering system:

```text
.ai/
├── agents/       Specialized engineering agents
├── workflows/    Standard development workflows
├── rules/        Engineering and architectural rules
└── context/      Project context and reference information
```

AI agents should follow the repository's architectural, coding, security, and workflow rules when modifying the project.

The AI system is designed to work alongside the project's documentation rather than duplicate it.

---

## Git Workflow

The `main` branch is protected by repository rules that prevent force pushes and branch deletion, require linear commit history, and enforce passing status checks before merging.

The repository ruleset is defined in `.github/ruleset.yml`.

Changes should be developed on dedicated branches and merged through pull requests.

See [Contributing](CONTRIBUTING.md) for development and contribution guidelines.

---

## Long-Term Vision

Our goal is to build an ecosystem of connected products that improve the different pillars of everyday life.

Products should work independently.

Together, they should work even better.

---

## License

This repository is licensed under the Apache License 2.0.