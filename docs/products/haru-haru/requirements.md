# Haru Haru Product Requirements

## Product Vision

Haru Haru is a Korean learning application designed to make language learning engaging, confidence-building, and enjoyable.

The application teaches Korean progressively through vocabulary, grammar, quizzes, and gamification while preparing learners for the TOPIK proficiency exams.

The primary language of the application is **English**.

The initial release targets **Android**, but the architecture must support **iOS** and **Web** in the future.

---

# MVP Goal

Deliver a polished learning experience that demonstrates:

- Progressive Korean learning
- Interactive vocabulary lessons
- Grammar reinforcement
- Gamification
- User progression
- Authentication
- Subscription-ready architecture

---

# Learning Structure

## TOPIK Levels

The application contains six proficiency levels:

- TOPIK I
- TOPIK II
- TOPIK III
- TOPIK IV
- TOPIK V
- TOPIK VI

Each level contains approximately:

- 12 lessons

---

## Lesson Types

### Lesson 0

Introduction to Hangul.

Features:

- Korean alphabet
- Character recognition
- Flashcards
- Pronunciation audio

---

### Vocabulary Lessons

Vocabulary lessons are the foundation of the learning experience.

Each lesson contains approximately:

- 60 vocabulary words (subject to future balancing)

Vocabulary difficulty increases progressively.

Early lessons include:

- Short words
- Everyday vocabulary
- Simple pronunciation

Later lessons include:

- Longer words
- More complex pronunciation
- Abstract vocabulary
- Advanced expressions

---

### Grammar Lessons

Every three vocabulary lessons, a grammar lesson is introduced.

Grammar lessons include:

- Grammar explanation
- Usage rules
- Example sentences
- Sentence-building exercises
- Exercises using previously learned vocabulary

The objective is to reinforce grammar through application rather than memorization.

---

# Flashcard System

Each vocabulary flashcard contains:

- Korean word
- English translation
- Representative image
- Audio pronunciation
- Favorite button (heart)

Flashcards should:

- Appear in random order
- Be easy to browse repeatedly
- Allow users to save favorite words

---

# Vocabulary Practice

After studying a lesson, users may start a quiz by selecting **"Test My Knowledge."**

The MVP supports multiple quiz types.

## Image Recognition

Display an image.

The learner selects the correct Korean word.

Example:

🍎

Options:

- 사과
- 학교
- 책
- 물

---

## Korean Recognition

Display a Korean word.

The learner selects the correct English translation.

---

## English Recognition

Display an English word.

The learner selects the correct Korean translation.

---

## Quiz Feedback

Each answer provides immediate feedback.

At the end of the quiz, users see:

- Final score
- Correct answers
- Incorrect answers
- Words requiring review

The application should encourage additional practice instead of simply displaying a score.

---

# Lesson Progression

Learning should feel like progressing through a game.

Requirements:

- Lessons unlock sequentially
- Completing the lesson exam unlocks the next lesson
- Users cannot skip locked lessons
- Interactive lesson/world map
- Visible progress throughout the level

---

# Gamification

The MVP includes:

- Daily streaks
- Lesson completion rewards
- Progress indicators
- Motivational feedback

Future versions may include:

- Experience points (XP)
- Achievements
- Leaderboards
- Daily challenges
- Seasonal events

---

# User Account

Authentication is required.

Features include:

- Registration
- Login
- User profile
- Progress synchronization
- Favorite vocabulary
- Daily streak tracking
- Lesson completion history

---

## Avatar

The MVP includes a default mascot/avatar.

Initial avatar:

- Cute chibi-style Pomeranian

Future versions will support:

- Avatar customization
- Clothing
- Accessories
- Unlockable cosmetics

---

# Monetization

Free Content

- Entire TOPIK I

Premium Content

- TOPIK II
- TOPIK III
- TOPIK IV
- TOPIK V
- TOPIK VI

Purchase options:

- Monthly subscription
- Lifetime purchase

Authentication is required to synchronize purchases across devices.

---

# Future AI Features

These features are intentionally outside the MVP but should influence the architecture.

## Pronunciation Evaluation

Analyze the learner's pronunciation and provide feedback.

---

## Speech Recognition

Allow users to practice speaking Korean naturally.

---

## Handwriting Recognition

Evaluate handwritten Hangul.

---

## AI Tutor

Provide personalized explanations.

Suggest additional practice.

Recommend lessons.

Adapt learning paths.

---

## AI Conversation Partner

Practice real conversations.

Adjust difficulty dynamically.

Correct grammar naturally.

---

## Writing Assistant

Review written Korean.

Suggest improvements.

Explain grammar mistakes.

---

## Smart Review System

Implement adaptive spaced repetition based on:

- Accuracy
- Confidence
- Review history
- Forgotten vocabulary

---

# Technical Requirements

## Frontend

- React Native
- Expo
- TypeScript

Target platforms:

- Android (MVP)
- iOS (Future)
- Web (Future)

---

## Backend

- Python
- FastAPI

---

## Database

Primary Database

- PostgreSQL

Caching

- Redis

---

## Development

- Docker
- Docker Compose
- Monorepo architecture

---

## Architecture

The platform should follow the Cyros Platform First Architecture.

Requirements:

- Content separated from application code
- Shared platform services
- AI-ready architecture
- Modular design
- Scalable backend
- Cross-platform support

---

## Scalability

The system must be designed to handle growth in learners, lesson content, AI-driven features, and concurrent usage without degrading the user experience.

Requirements:

- Stateless backend services wherever possible to enable horizontal scaling
- Support for multiple application instances behind load balancing
- Database design that scales for growth in users, progress history, vocabulary, and quiz data
- Redis-based caching for frequently used lesson data, sessions, and expensive reads
- Async processing for non-urgent workloads such as analytics, AI feature preparation, and background jobs
- Content delivery that supports media growth without bottlenecks
- Architecture that can scale from MVP usage to larger learner cohorts and future AI services

---

## Monitoring and Observability

The platform must provide full visibility into product health, performance, and reliability.

Requirements:

- Application metrics for API latency, request volume, error rate, and throughput
- User-facing metrics such as lesson completion, quiz success rate, and retention indicators
- Structured logs for authentication, lesson activity, payments, subscriptions, and backend failures
- Error tracking with actionable context, including request IDs, user identifiers when appropriate, and failure classification
- Health checks for infrastructure, services, and critical workflows
- Distributed tracing for end-to-end request flow across frontend, backend, and supporting services
- Alerting for degraded performance, outages, payment failures, and critical data issues
- Dashboards for engineering, product, and operations teams to monitor platform health and user behavior

---

## Agent Code Quality Standards

All AI agents, automation workflows, and development contributors must produce code that is easy to understand, diagnose, and maintain.

Requirements:

- Clear and readable code with consistent structure and naming
- Clear error handling that surfaces what failed, why it failed, and where it happened
- Clear error logs with actionable context rather than vague or generic failure messages
- Comments only where they add clarity to intent, business rules, edge cases, or non-obvious logic
- No silent failures; every important failure path must be visible in logs or returned to the caller
- Maintainable code that supports debugging during feature development and production incidents
- Code generated by agents must meet the same standards for clarity, observability, and reviewability as human-written code

---

# Success Criteria

The MVP is considered successful when a learner can:

- Create an account
- Learn Hangul
- Complete vocabulary lessons
- Complete grammar lessons
- Pass quizzes
- Unlock new lessons
- Maintain a daily streak
- Save favorite vocabulary
- Track progress
- Experience a polished, game-like learning journey

while establishing a scalable, observable, and maintainable technical foundation for future AI-powered learning experiences.
