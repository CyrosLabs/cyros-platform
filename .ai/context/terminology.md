# Haru Haru Terminology

## Purpose

This document defines canonical terminology for Haru Haru and Cyros Labs product development.

Use these terms consistently in:

- Code.
- Documentation.
- UI copy.
- Tests.
- Product requirements.
- AI-generated changes.

If a product concept is not defined here, consult the product documentation before inventing terminology.

---

# Haru Haru

**Haru Haru** is the product name.

Use:

Haru Haru

Avoid:

HaruHaru
Haru-Haru
Haru

unless the shorter form is intentionally used as an informal reference.

Learner

Use learner for a person using Haru Haru to learn Korean.

Prefer:

learner progress
learner state
learner journey

Avoid using student as the canonical product term unless required by external terminology.

Companion

The Companion is the product's persistent supportive character experience.

The MVP companion is represented by a cute chibi-style Pomeranian.

Companion should not be confused with the broader Cyros Labs concept of companion-oriented products.

When referring specifically to the Haru Haru character, use:

Haru Haru companion

or:

companion

when context is unambiguous.

Level

A Level represents a Korean proficiency level in the curriculum.

Current levels:

TOPIK I
TOPIK II
TOPIK III
TOPIK IV
TOPIK V
TOPIK VI

Do not use "course" and "level" interchangeably.

Course

A Course represents the structured learning journey presented to the learner.

The current Home experience includes:

TOPIK I Course Map

A course contains lessons and progression information.

Lesson

A Lesson is a unit of learning within a course.

Current lesson types include:

Lesson 0 / Hangul introduction.
Vocabulary lessons.
Grammar lessons.

A lesson may contain learning, practice, and assessment activities.

Lesson 0

Lesson 0 is the introductory Hangul lesson.

It introduces:

Korean alphabet.
Character recognition.
Flashcards.
Pronunciation audio.

Do not refer to Lesson 0 as simply "the first vocabulary lesson."

Vocabulary

Vocabulary refers to Korean words and expressions being learned.

A vocabulary item may contain:

Korean text.
English translation.
Pronunciation.
Image.
Audio.
Examples.
Grammar

Grammar refers to rules, patterns, explanations, and sentence-building practice used to understand Korean structure.

Grammar lessons should reinforce application rather than rely only on memorization.

Exercise

An Exercise is an interactive learning activity used during learning or practice.

Examples:

Image recognition.
Korean recognition.
English recognition.
Sentence building.
Quiz

A Quiz is an assessment experience that evaluates the learner's understanding.

Quiz results belong to learner state, not static content.

Practice

Practice is the act of actively working with previously introduced learning material.

Practice may occur:

During a lesson.
After a lesson.
Through Review.
Through future adaptive systems.
Review

Review is a product experience focused on revisiting previously learned material.

Review may eventually use spaced repetition and learner performance.

Progress

Progress describes how far the learner has advanced through the learning journey.

Examples:

Lesson completion.
Course progression.
Vocabulary mastery.
Daily progress.
Mastery

Mastery describes the learner's knowledge state for a learning item.

The Learning Engine currently describes a conceptual progression:

New
 ↓
Learning
 ↓
Practicing
 ↓
Known
 ↓
Mastered

Mastery is learner state, not content metadata.

Streak

A Streak represents consecutive learning activity over time.

Use:

streak
daily streak

Avoid inventing alternative terms such as "learning chain."

Daily Goal

A Daily Goal is the learner's target for the current day.

It represents a consistency target rather than a lesson itself.

Daily Challenge

A Daily Challenge is an optional daily activity intended to encourage engagement and practice.

It is distinct from the learner's Daily Goal.

Hearts

Hearts represent the product's limited-attempt or mistake-allowance mechanic.

They are a gamification/product concept.

They should not be confused with:

Favorite vocabulary.
Likes.
Emotional reactions.
XP

XP means experience points.

XP is a gamification concept.

The product requirements currently describe XP as a future gamification capability, so implementations must not assume that XP is already part of the MVP learning model unless the current product specification explicitly enables it.

If XP appears in the current UI prototype, treat it as presentation/prototyping state until its product behavior is formally defined.

Favorite

A Favorite is a learner-selected vocabulary item.

Use:

favorite vocabulary
favorites

A favorite is learner state, not content.

Home

Home is the primary learner dashboard.

The current Home experience includes:

Header
Streak
Hearts
Companion
Continue Learning
Daily Challenge
Daily Goal
Course Map
Progress Summary
Primary Navigation

Home should be treated as a presentation/orchestration surface.

It does not own every domain represented on the screen.

Continue Learning

Continue Learning is the Home action that returns the learner to their current learning path.

It should lead into the Course/Learning experience rather than represent a separate learning domain.

Course Map

Course Map is the visual representation of structured lesson progression.

It communicates:

Completed lessons.
Current lesson.
Available lessons.
Locked lessons.
Learning Engine

The Learning Engine manages progression and learning behavior.

Conceptually:

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

The Learning Engine is distinct from:

Content.
UI.
Navigation.
Content

Content is the educational material itself.

Examples:

Vocabulary.
Grammar.
Lessons.
Exercises.
Quiz questions.
Examples.
Media references.

Content is independent from application implementation.

Learner State

Learner State is information about a specific learner's interaction with content.

Examples:

Progress.
Completion.
Mastery.
Quiz results.
Favorites.
Streak.
Review history.

Do not put learner state into static content definitions.

Platform

Platform refers to shared Cyros Labs capabilities that can be consumed by multiple products.

Platform is not a synonym for "backend."

Shared Package

A Shared Package is generic reusable technical functionality.

Packages should remain product-agnostic whenever practical.

Product

A Product owns its product-specific experience, business rules, and orchestration.

Haru Haru is currently the primary product under active development.

Canonical Rule

When terminology conflicts:

Use this document for vocabulary.
Use product documentation for product meaning.
Use architecture documentation for technical ownership.
Use the current implementation for already-implemented behavior.

Do not introduce a new term when an existing canonical term already describes the concept.