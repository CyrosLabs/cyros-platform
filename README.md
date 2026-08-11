# Cyros Labs

> We build technology that helps people thrive.

Cyros Labs is a software studio focused on creating thoughtful technology that genuinely improves people's lives.

We believe technology should do more than automate tasks.

It should reduce stress, encourage growth, create opportunities, and help people become who they aspire to be.

Every product begins with a single question:

> **"Will this genuinely improve someone's life?"**

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

## Repository Structure

```text
apps/            Product applications
platform/        Shared platform capabilities
packages/        Shared libraries
content/         Product content
docs/            Documentation
.ai/             AI agents and engineering rules
docker/          Local development environment
scripts/         Automation scripts
```

---

## Engineering Principles

- Human First
- Platform First
- AI Native
- Modular by Design
- Reuse Before Rebuild
- Simplicity Over Complexity
- Build for the Long Term

---

## Current Focus

We are currently building **Haru Haru**, a Korean learning platform designed to make language learning engaging, meaningful, and confidence-building.

---

## Long-Term Vision
 
Our goal is to build an ecosystem of connected products that improve the different pillars of everyday life.
 
Products should work independently.
 
Together, they should work even better.
 
---
 
## Running Haru Haru Locally
 
The Haru Haru app lives in `apps/haru-haru` and uses Expo with TypeScript.
 
1. Install Node.js 24.x (recommended).
2. Change into the app directory:
   ```bash
   cd apps/haru-haru
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm start
   ```
5. Run the app on a simulator or device:
   ```bash
   npm run android
   npm run ios
   npm run web
   ```
6. Run validation checks:
   ```bash
   npm test -- --runInBand
   npx eslint . --ext .ts,.tsx
   npx tsc --noEmit
   ```
 
---
 
## Documentation

The repository now includes a more complete documentation set for contributors and maintainers.

### Core Guides

- [DEVELOPMENT.md](DEVELOPMENT.md)
- [ARCHITECTURE.md](ARCHITECTURE.md)
- [API.md](API.md)
- [DATABASE.md](DATABASE.md)
- [DEPLOYMENT.md](DEPLOYMENT.md)
- [TESTING.md](TESTING.md)
- [SECURITY.md](SECURITY.md)

### Reference Documentation

- [CONTRIBUTING.md](CONTRIBUTING.md)
- [docs/development/getting-started.md](docs/development/getting-started.md)
- [docs/development/local-environment.md](docs/development/local-environment.md)
- [docs/development/architecture-walkthrough.md](docs/development/architecture-walkthrough.md)
- [docs/development/debugging.md](docs/development/debugging.md)
- [docs/development/troubleshooting.md](docs/development/troubleshooting.md)
- [docs/development/faq.md](docs/development/faq.md)
- [docs/architecture/PROJECT_STRUCTURE.md](docs/architecture/PROJECT_STRUCTURE.md)
- [docs/GLOSSARY.md](docs/GLOSSARY.md)

---

## License

This repository is licensed under the Apache License 2.0.