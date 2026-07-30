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

while establishing a scalable technical foundation for future AI-powered learning experiences.