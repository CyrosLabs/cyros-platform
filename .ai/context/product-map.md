# Product Map

## Purpose

This file provides AI agents with a concise map of products in the repository.

It is intentionally brief.

Detailed product requirements, vision, roadmap, and architecture belong in `docs/products/`.

---

# Current Primary Product

## Haru Haru

Location:

apps/haru-haru/

Documentation:

docs/products/haru-haru/

Content:

content/haru-haru/

Haru Haru is a Korean learning companion designed to help learners build confidence and consistency while learning Korean.

The product combines:

Progressive Korean learning.
Vocabulary.
Grammar.
Practice.
Quizzes.
Progression.
Gamification.
Future adaptive and AI-assisted learning.

See:

docs/products/haru-haru/vision.md
docs/products/haru-haru/requirements.md
docs/products/haru-haru/roadmap.md
docs/products/haru-haru/learning-engine.md
docs/products/haru-haru/content-structure.md
Haru Haru Product Boundary

Haru Haru owns:

Learning experience.
Product-specific business rules.
Lesson experience.
Progression behavior.
Learning workflows.
Product navigation.
Product-specific gamification behavior.
Product presentation.

Haru Haru should consume shared platform capabilities rather than implement duplicate infrastructure.

Current Application Structure
apps/haru-haru/
└── src/
    ├── features/
    │   └── home/
    │       ├── components/
    │       ├── data/
    │       ├── screens/
    │       └── types/
    │
    └── theme/

The application currently has an implemented Home feature.

Future features should be added according to actual product requirements.

Do not create feature folders simply because they are listed as possible future features.

Current Home Experience

The Home screen is the primary learner dashboard and the main product entry point for the current MVP.

It contains:

Header.
Streak and life indicators.
Premium status.
Companion guidance.
A game-like learning roadmap.
A Start action.
Primary navigation.

The current Home MVP focuses on a required progression path:

Lesson
Grammar
Test

Optional activities are visible alongside the main path but are not treated as progression requirements:

Hangeul
Video
Song
Story

The Home implementation currently consumes application-owned data while deeper learning and learner-state systems are being developed.

Do not treat Home mock data as the long-term source of truth for learning content or learner state.

Product Navigation

The current conceptual navigation destinations are:

Home
Course
Review
Favorites
Profile

Secondary actions:

Notifications
Settings

The navigation model may evolve as the product grows.

Learning Model

The current product requirements define:

TOPIK Level
    ↓
Lessons
    ↓
Vocabulary / Grammar
    ↓
Practice
    ↓
Quiz
    ↓
Progression

The Learning Engine describes the broader learning cycle:

Learn
 ↓
Practice
 ↓
Test
 ↓
Review
 ↓
Master
 ↓
Progress

Consult learning-engine.md before introducing learning progression logic.

Product State vs Content

Static learning content belongs under:

content/haru-haru/

Learner-specific state belongs to the application/domain systems.

Examples of learner state:

Lesson completion.
Quiz results.
Vocabulary mastery.
Favorites.
Streak.
Progress.
Review history.

Do not encode learner-specific state into static content.

Product Documentation

When implementing a feature, consult the relevant product documentation first.

Recommended order:

vision.md
requirements.md
roadmap.md
Feature-specific documentation
learning-engine.md when learning behavior is involved
content-structure.md when content is involved
UI documentation when presentation/navigation is involved

Then inspect the current implementation.

Other Products

The repository may contain other Cyros Labs product concepts and applications at different stages.

Do not assume that every product listed in the root README has an implemented application.

When working on a product, inspect its actual directory and documentation before making assumptions.