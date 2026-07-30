# Coding Standards

## Philosophy

Code is read far more often than it is written.

Write software for humans first.

---

# General Principles

- Prefer readability over cleverness.
- Keep functions small.
- Keep classes focused.
- Prefer composition over inheritance.
- Avoid premature optimization.

---

# SOLID

Follow SOLID principles whenever appropriate.

---

# KISS

Keep solutions as simple as possible.

---

# DRY

Avoid unnecessary duplication.

---

# YAGNI

Do not build functionality before it is needed.

---

# Naming

Choose names that describe intent.

Good

calculateLessonProgress()

Bad

calc()

---

# Functions

Functions should:

- Have one responsibility.
- Be short.
- Have descriptive names.
- Avoid side effects.

---

# Error Handling

Never silently ignore errors.

Handle them explicitly.

---

# Comments

Prefer self-documenting code.

Write comments only when explaining **why**, not **what**.

---

# Configuration

Configuration belongs outside the codebase whenever possible.

Never hardcode secrets.

---

# Logging

Logs should be:

- Useful
- Structured
- Actionable

Never log sensitive information.

---

# Documentation

Public APIs should always be documented.

Complex business logic should include documentation explaining the reasoning.