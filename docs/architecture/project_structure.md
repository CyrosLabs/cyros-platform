# Project Structure Guide

This document explains the repository layout used across Cyros Labs.

## Top-Level Layout

- apps/ contains end-user product applications.
- platform/ contains shared backend capabilities.
- packages/ contains reusable libraries and shared UI or utility code.
- content/ contains product content that is independent from code.
- docs/ contains repository documentation.
- docker/ and infraestructure/ contain local and cloud deployment assets.
- scripts/ contains repository automation.
- tools/ contains supporting developer tools.

## Product Applications

Each application in apps/ should focus on a single product experience. The current repository includes products such as Haru Haru, Companion, Goals, Diet Buddy, and others.

## Shared Platform

The platform/ directory is reserved for reusable capabilities such as identity, payments, analytics, notifications, search, storage, and messaging.

## Shared Packages

The packages/ directory should contain reusable code that is not specific to a single product. Examples include design tokens, UI primitives, networking helpers, and shared types.

## Content

The content/ directory stores product content separately from application logic. This is especially important for learning experiences such as Haru Haru.

## Documentation

The docs/ directory contains company, product, architecture, engineering, and development documentation.

## Conventions

- Keep product-specific code inside the appropriate app directory.
- Keep shared capabilities in platform/.
- Avoid duplicating implementation logic across products.
- Use packages/ for reusable abstractions that multiple areas may depend on.
