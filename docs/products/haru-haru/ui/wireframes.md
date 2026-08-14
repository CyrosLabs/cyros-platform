# Haru Haru Wireframes

## Purpose

This document describes the current conceptual wireframes for Haru Haru.

These are product-level structural references, not pixel-perfect implementation specifications.

The actual React Native implementation may evolve while preserving the product hierarchy and interaction intent described here.

---

# Home

The Home screen is the primary learner dashboard.

Its primary purpose is to answer:

> What should I do next?

and:

> How am I progressing?

---

## Home Structure

The current Home MVP is organized around a game-like learning roadmap instead of a set of dashboard cards.

┌─────────────────────────────────┐
│ Header                          │
│ User / Level / Streak / Hearts │
│ Notifications / Settings         │
├─────────────────────────────────┤
│ Companion / CTA                 │
│                                 │
│ Start button                    │
├─────────────────────────────────┤
│                                 │
│ TOPIK I Path                    │
│ Start ─ Lesson ─ Grammar ─ Test │
│       ├─ Hangeul / Video        │
│       ├─ Song / Story           │
│                                 │
├─────────────────────────────────┤
│ Bottom navigation               │
│ Home | Course | Favorites | User│
└─────────────────────────────────┘

The current implementation uses the following conceptual sections:

Header.
Streak and life indicators.
Companion guidance.
Primary learning path.
Optional side quests.
Start action.
Bottom navigation.

This matches the new Home MVP rather than the earlier card-heavy dashboard.

Home Header

The header provides:

User context.
Notifications.
Settings.

The header should remain lightweight and should not compete with the learner's next action.

Streak and Hearts

These are compact status indicators.

Streak

Communicates learning consistency.

Hearts

Communicates the learner's current available learning attempts or mistake allowance.

These indicators should remain visually secondary to the primary learning action.

Companion

The companion provides emotional continuity and reinforces the product identity.

The companion should occupy a meaningful but controlled portion of the Home experience.

It should not prevent the learner from reaching the learning content quickly.

Continue Learning

Continue Learning is one of the highest-priority Home sections.

Conceptually:

┌─────────────────────────────────┐
│ Continue Learning               │
│                                 │
│ Current lesson                 │
│ Lesson progress                │
│                                 │
│                      [Continue] │
└─────────────────────────────────┘

The action should return the learner to the most relevant point in their current learning journey.

Daily Challenge

The Daily Challenge is an optional engagement activity.

It should feel useful rather than mandatory.

Conceptually:

┌─────────────────────────────────┐
│ Daily Challenge                 │
│                                 │
│ Today's activity                │
│                                 │
│                         [Start] │
└─────────────────────────────────┘

The challenge may eventually be generated from learner state and available content.

Daily Goal

The Daily Goal communicates the learner's target for the current day.

Conceptually:

┌─────────────────────────────────┐
│ Daily Goal                      │
│                                 │
│ ███████████░░░                  │
│                                 │
│ Progress toward today's goal    │
└─────────────────────────────────┘

The goal should reinforce consistency without creating pressure.

Course Map

The Course Map represents structured progression through Korean learning.

The current Home experience presents a TOPIK I Course Map.

Conceptually:

TOPIK I

      ●
      │
      ●──●
         │
         ●
         │
         ○
         │
         ○

The exact visual representation may evolve.

The conceptual states are:

Current.
Completed.
Available.
Locked.

The Course Map should communicate:

Where am I?
     ↓
What did I complete?
     ↓
What can I do now?
     ↓
What comes next?
Progress Summary

Progress Summary provides a compact overview of learner progress.

It should summarize meaningful learning information without becoming a full analytics screen.

The full progress experience may eventually exist as a separate feature.

Primary Navigation

The current navigation model supports:

Home
Course
Review
Favorites
Profile

Home is the primary dashboard.

The other destinations should represent meaningful product capabilities rather than individual UI screens.

Course

The Course experience expands the progression represented by the Home Course Map.

Conceptually:

TOPIK I
   │
   ├── Lesson 0
   ├── Lesson 1
   ├── Lesson 2
   ├── Lesson 3
   └── ...

Locked lessons should communicate future progression clearly.

Lesson

A future lesson experience should follow the learning model:

Introduction
     ↓
Learn
     ↓
Practice
     ↓
Test
     ↓
Result
     ↓
Progress

The exact number and order of screens may vary by lesson type.

Review

Review should focus on previously learned material.

The future experience may include:

Review
  ↓
Learning Items
  ↓
Practice
  ↓
Feedback
  ↓
Updated Mastery
Favorites

Favorites should provide a focused view of saved vocabulary.

Conceptually:

Favorites

사과     apple
학교     school
친구     friend
...

The experience should prioritize quick review and reuse of saved content.

Profile

Profile should provide:

User information.
Learning summary.
Account information.
Relevant personal preferences.

It should not become the location for unrelated product configuration.

Notifications

Notifications are accessed from the Home header.

They are secondary to the learning journey.

Possible future content:

Learning reminders.
Lesson completion.
Progress milestones.
Product notifications.
Settings

Settings are accessed from the Home header.

Possible categories include:

Account.
Notifications.
Accessibility.
App preferences.
Learning preferences.
Wireframe Principles

Wireframes should communicate hierarchy rather than prescribe implementation.

When implementation changes, preserve:

Clear primary action.
Visible progress.
Predictable navigation.
Learning-first hierarchy.
Consistent interaction patterns.

Do not treat these wireframes as pixel-perfect specifications.