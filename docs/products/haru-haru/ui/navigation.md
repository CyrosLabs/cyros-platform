# Haru Haru Navigation

## Purpose

This document defines the product-level navigation model for Haru Haru.

Navigation should support the primary learner journey while keeping secondary actions accessible without distracting from learning.

The current implementation establishes Home as the primary product surface.

---

## Navigation Principles

Haru Haru navigation should:

- Keep learning immediately accessible.
- Make current progress visible.
- Provide a clear path back to the course.
- Keep review and favorites easy to reach.
- Keep profile and settings separate from the learning journey.
- Avoid unnecessary navigation depth.
- Preserve a consistent navigation model as additional features are introduced.

Navigation is a product concern.

Platform navigation infrastructure may be shared, but product routes and navigation behavior belong to Haru Haru.

---

## Primary Navigation

The current Home screen exposes the following product destinations:

Home
Course
Review
Favorites
Profile

The current Home screen also supports secondary actions:

Notifications
Settings

The exact navigation implementation may evolve, but these destinations represent the current product-level model.

Primary Destinations
Home

The Home screen is the learner's primary dashboard.

It provides:

Current learning context.
Streak information.
Hearts.
Companion.
Continue Learning.
Daily Challenge.
Daily Goal.
Course Map.
Progress Summary.

Home should help the learner answer:

What should I do next?

without requiring them to navigate through multiple screens.

Course

The Course area represents the learner's structured progression through Korean learning content.

It provides access to:

Course levels.
Lessons.
Lesson progression.
Locked and unlocked lessons.
Learning activities.

The current Home implementation navigates to the Course area from:

Continue Learning.
Course Map.
Review

Review is intended for revisiting previously learned material.

It should eventually support review driven by:

Previous performance.
Learning history.
Vocabulary mastery.
Future spaced repetition.

Review should reinforce learning rather than duplicate the normal lesson flow.

Favorites

Favorites provides access to vocabulary the learner has explicitly saved.

The initial requirements define a favorite action for vocabulary flashcards.

Favorites should remain focused on learner-selected content.

Profile

Profile contains user-specific information and account-related product experiences.

Examples may include:

User information.
Learning statistics.
Account state.
Personal preferences.

Profile should not become a general-purpose settings screen.

Secondary Navigation
Notifications

Notifications are accessed from the Home header.

Notifications may eventually contain:

Learning reminders.
Progress events.
Product messages.
Relevant account notifications.

Notifications should not interrupt active learning unnecessarily.

Settings

Settings are accessed from the Home header.

Settings may contain:

App preferences.
Notification preferences.
Account options.
Accessibility options.
Future language or learning preferences.

Settings should remain separate from the core learning navigation.

Current Navigation Shape

Conceptually, the current product navigation is:

                    ┌──────────────┐
                    │     Home     │
                    └──────┬───────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
       Course            Review         Favorites
          │
       Lessons

                           │
                        Profile

Secondary actions:

Home
 ├── Notifications
 └── Settings
Home as the Entry Point

Home is currently the primary entry point for the application experience.

The Home screen should not own the business logic of every feature it displays.

Instead, Home composes information from product capabilities and presents it as a unified learner experience.

For example:

Home
 ├── Course progress
 ├── Daily activity
 ├── Gamification state
 ├── Companion
 └── Learner progress

Those concepts may eventually have their own product features or domain services.

Home should remain an orchestration and presentation surface rather than becoming the owner of unrelated business logic.

Navigation and Feature Boundaries

As the application grows, navigation destinations should normally correspond to product features.

A possible future structure is:

features/
├── home/
├── lessons/
├── practice/
├── progress/
├── review/
├── favorites/
└── profile/

This is a conceptual direction rather than a requirement to create all features immediately.

New features should be introduced when required by product behavior rather than by the desire to create folders prematurely.

Navigation State

Navigation state should remain separate from learning content.

For example:

Navigation:
  current route
  selected lesson
  previous route

is application state.

Whereas:

Lesson:
  title
  vocabulary
  grammar
  exercises

is learning content.

Learner progress is a separate concern again.

Future Navigation

The navigation model may expand as Haru Haru gains:

More practice modes.
More detailed progress views.
AI learning experiences.
Pronunciation practice.
Conversation practice.
Subscription/account experiences.

New destinations should be added only when they represent a meaningful product capability.

The navigation should remain simple even as the underlying product becomes more capable.