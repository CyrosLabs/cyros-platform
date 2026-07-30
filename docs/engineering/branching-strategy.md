# Branching Strategy

## Overview

Cyros Labs follows a lightweight branching strategy based on **GitHub Flow**.

The goal is to keep development simple, predictable, and suitable for continuous delivery.

The `main` branch is always deployable.

---

# Workflow

main

↓

Create feature branch

↓

Develop

↓

Open Pull Request

↓

Code Review

↓

Merge

↓

Delete branch

---

# Branch Types

## Feature

Used for new functionality.

Example:

feature/login

feature/topik-1-lessons

feature/streak-system

---

## Fix

Used for bug fixes.

Example:

fix/audio-player

fix/login-validation

---

## Refactor

Used for code improvements without changing behavior.

Example:

refactor/navigation

refactor/api-client

---

## Docs

Documentation updates.

Example:

docs/architecture

docs/readme

---

## Test

Testing improvements.

Example:

test/api

test/e2e-login

---

## Chore

Maintenance tasks.

Example:

chore/update-dependencies

chore/docker

---

# Rules

- Never commit directly to `main`.
- Every change requires a Pull Request.
- Keep branches focused on a single objective.
- Keep branches short-lived.
- Delete branches after merging.