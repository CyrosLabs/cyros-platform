# Haru Haru Content Structure

## Purpose

This document defines how Haru Haru learning content is organized and how content relates to the application.

Learning content is a product asset and should remain independent from application presentation and implementation details.

The canonical content location is:

content/haru-haru/

The application consumes content; it should not define the learning curriculum inside React components.

Content Principles

Haru Haru content should be:

Structured and predictable.
Independently maintainable.
Reusable across learning experiences.
Independent from UI implementation.
Suitable for future backend and API consumption.
Versionable independently from application releases.
Designed around the learner's progression.

Content should describe what the learner is learning.

Application code should describe how that learning experience is presented and executed.

Learning Hierarchy

The initial Haru Haru learning model is:

TOPIK Level
    │
    └── Lesson
          │
          ├── Learning Content
          │     ├── Vocabulary
          │     ├── Grammar
          │     ├── Examples
          │     └── Audio / Media
          │
          └── Practice Content
                ├── Exercises
                └── Quiz

The hierarchy may evolve as the learning engine becomes more sophisticated, but content should preserve clear relationships between curriculum structure and individual learning items.

TOPIK Levels

Haru Haru currently defines six proficiency levels:

TOPIK I
TOPIK II
TOPIK III
TOPIK IV
TOPIK V
TOPIK VI

The MVP focuses on TOPIK I.

TOPIK I is intended to contain the initial learning journey, including Hangul and beginner Korean vocabulary and grammar.

Lessons

A lesson is a self-contained unit of learning within a proficiency level.

The current product requirements define:

Lesson 0 for Hangul introduction.
Vocabulary lessons.
Grammar lessons.

A lesson may contain multiple learning and practice activities.

Lesson 0

Lesson 0 introduces Hangul and may include:

Korean alphabet.
Character recognition.
Flashcards.
Pronunciation audio.
Vocabulary Lessons

Vocabulary lessons introduce Korean words progressively.

Vocabulary content may include:

Korean word.
English translation.
Example usage.
Representative image.
Pronunciation audio.
Favorite metadata when used by the application.

The current requirements target approximately 60 vocabulary words per lesson, subject to future balancing.

Grammar Lessons

Grammar lessons reinforce previously introduced vocabulary through:

Grammar explanations.
Usage rules.
Example sentences.
Sentence-building exercises.
Practice using previously learned vocabulary.

Grammar is intended to be learned through application rather than memorization alone.

Learning Items

Learning items represent individual pieces of educational content.

Examples include:

Vocabulary
Grammar
Example Sentence
Exercise
Quiz Question
Audio
Image

A learning item should contain educational information and metadata rather than UI-specific information.

For example, content should not contain React component names, navigation routes, screen layout information, or styling decisions.

Vocabulary

A vocabulary item represents a Korean word or expression.

At minimum, a vocabulary item may contain:

id
korean
english
pronunciation
image
audio
examples

Additional metadata may be introduced as the learning engine evolves.

Vocabulary mastery and user-specific state do not belong in static content.

For example:

favorite
accuracy
review history
mastery state
last reviewed
next review

are learner state rather than content.

Exercises

Exercises provide opportunities for active recall and application.

The initial product requirements include:

Image recognition.
Korean recognition.
English recognition.
Sentence-building exercises for grammar.

Exercise definitions should reference learning content rather than duplicate it unnecessarily.

Quizzes

A quiz evaluates learning after a lesson or practice session.

A quiz may contain:

questions
answer options
correct answer
feedback
learning item references

Quiz results are learner state and should not be stored as static content.

Media

Learning content may reference media such as:

Audio pronunciation.
Images.
Future video or interactive media.

Media should be referenced independently from application components.

The content model should allow media storage or delivery to change without requiring changes to learning content definitions.

Content vs Application State

The following distinction is important:

Content	Application / Learner State
Korean word	Mastery
English translation	Accuracy
Grammar explanation	Quiz result
Example sentence	Lesson completion
Exercise definition	Progress
Quiz question	Streak
Audio reference	Favorites
Image reference	Review history

Content describes the learning material.

Learner state describes what happened to a specific user while interacting with that material.

Content vs UI

Content should not contain:

React components.
Screen names.
Navigation routes.
Styling values.
Layout information.
Platform-specific UI logic.
Device-specific behavior.

For example, this is appropriate:

Vocabulary:
  korean: 사과
  english: apple

This is not:

component: VocabularyCard
route: /lesson/1
backgroundColor: ...

The application decides how content is presented.

Relationship to the Learning Engine

The content model defines the learning material.

The Learning Engine defines how users progress through that material.

Conceptually:

Content
   │
   ▼
Learning Engine
   │
   ├── Progression
   ├── Practice
   ├── Assessment
   ├── Mastery
   └── Review
   │
   ▼
Learner State

The Home experience consumes the resulting learner state to present progress and recommended actions.

Current Scope

The current implementation is still establishing the product foundation.

The Home experience currently uses application-owned mock data while the underlying learning and user-state systems are being developed.

Mock data may be used for UI development, but it must not become the long-term source of truth for learning content or learner state.

Future Evolution

The content model should eventually support:

More detailed curriculum structures.
Richer grammar relationships.
Audio and pronunciation metadata.
Multiple exercise types.
Adaptive review.
Spaced repetition.
AI-generated practice.
Personalized recommendations.
Additional languages if the platform eventually requires them.

These capabilities should extend the content model without coupling content to a specific frontend implementation.