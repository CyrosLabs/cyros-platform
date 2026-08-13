# Haru Haru UI Design Principles

## Purpose

This document defines the product-level principles that guide Haru Haru's visual and interaction design.

These principles complement the shared Cyros Labs design system and should guide product-specific decisions.

The goal is to make Haru Haru feel like a thoughtful learning companion rather than a collection of educational screens.

---

## 1. Progress Over Perfection

The interface should make progress visible and meaningful.

Users should be able to understand:

- Where they are.
- What they have completed.
- What comes next.
- How far they have progressed.

Progress should feel achievable rather than overwhelming.

---

## 2. Learning Should Feel Rewarding

Haru Haru should feel closer to a motivating game than a textbook.

Visual feedback should reinforce meaningful actions such as:

- Completing a lesson.
- Practicing vocabulary.
- Maintaining a streak.
- Reaching a daily goal.
- Advancing through the course.

Gamification should support learning rather than distract from it.

---

## 3. Confidence Matters

Every learning interaction should avoid making the learner feel unnecessarily judged.

Feedback should be:

- Clear.
- Encouraging.
- Immediate.
- Actionable.

When a learner makes a mistake, the interface should help answer:

> What did I get wrong, and how can I improve?

rather than simply indicating failure.

---

## 4. One Clear Next Action

Important screens should have a clear primary action.

For example, Home should help the learner identify the most useful next step through:

- Continue Learning.
- Daily Goal.
- Daily Challenge.
- Course progression.

The interface should avoid presenting too many competing primary actions.

---

## 5. Reduce Cognitive Load

Learning already requires significant mental effort.

The UI should therefore minimize unnecessary complexity.

Prefer:

- Clear hierarchy.
- Short labels.
- Familiar interaction patterns.
- Consistent placement.
- Progressive disclosure.

Avoid:

- Dense screens.
- Unnecessary configuration.
- Excessive simultaneous choices.
- Decorative elements that interfere with comprehension.

---

## 6. Make Progression Visible

Haru Haru's course should feel like a journey.

The interface should communicate:

Current position
      ↓
Current lesson
      ↓
Next lesson
      ↓
Future progress

The Course Map is an important part of this experience.

Locked content should communicate progression rather than simply feeling inaccessible.

7. Companion Presence Should Feel Purposeful

The Haru Haru companion is part of the product identity.

The companion should:

Support motivation.
Reinforce progress.
Create emotional continuity.
Feel consistent with the product personality.

The companion should not become visual noise.

Its presence should have a reason.

8. Use Gamification as Feedback

Concepts such as:

Streaks.
Hearts.
XP.
Daily Goals.
Daily Challenges.

should communicate meaningful learner state.

They should not be presented only as decorative counters.

Every gamification element should answer a useful question.

For example:

Streak: Am I building consistency?
Daily Goal: Have I reached today's target?
Hearts: How much room do I have for mistakes?
XP: How much progress have I made?
Challenge: What optional activity can I complete today?
9. Consistency Over Novelty

Haru Haru should use consistent:

Spacing.
Typography.
Buttons.
Cards.
Icons.
Feedback patterns.
Navigation patterns.

Product-specific styling should extend the shared Cyros Labs design system rather than replace it.

10. Content Comes First

Visual design should support the learning material.

For vocabulary, grammar, and exercises:

The educational content must remain readable.
Important Korean text must have sufficient visual prominence.
Supporting translations should remain clearly distinguishable.
Media should reinforce meaning rather than compete with it.

The UI should never make educational content harder to understand merely for visual effect.

11. Mobile First

The current MVP targets Android.

The interface should therefore prioritize:

Touch interaction.
Comfortable tap targets.
Vertical scrolling.
One-handed usability where practical.
Clear mobile hierarchy.
Safe-area awareness.

The architecture should still allow future iOS and Web experiences.

12. Accessibility Is Part of the Experience

Accessibility should be considered from the beginning.

The UI should support:

Readable text.
Sufficient contrast.
Clear interactive states.
Meaningful accessibility labels.
Touch targets appropriate for mobile use.
Non-color-only feedback.
Reduced dependence on animation.

Accessibility improvements should not require a separate product architecture.

13. Avoid Unnecessary Complexity

The product is still being built.

Design decisions should favor the simplest experience that satisfies the current requirement.

Do not introduce:

Complex navigation for future screens.
Components for hypothetical features.
Design systems inside individual features.
Animation systems without a product purpose.

Build what the current learner needs.

14. Home Is a Learning Dashboard, Not a Feature Dump

The Home screen can combine information from multiple product capabilities.

It should feel like one coherent experience.

The current Home structure includes:

Header
Streak + Hearts
Companion
Continue Learning
Daily Challenge + Daily Goal
Course Map
Progress Summary

These sections should feel connected by the learner's journey.

Home should not become a collection of unrelated cards simply because additional product features exist.

15. Emotional Tone

The visual and interaction language should feel:

Warm.
Encouraging.
Playful.
Calm.
Trustworthy.
Modern.
Thoughtful.

Haru Haru should feel friendly without becoming childish.

The product should be approachable for beginners while still feeling like a serious learning tool.

16. Design Source of Truth

Product-specific design principles belong in this document.

Shared visual primitives belong to the Cyros Labs design system.

Implementation-specific styling belongs in the application.

The intended relationship is:

Cyros Labs Design System
          ↓
Haru Haru Design Principles
          ↓
Haru Haru Feature Design
          ↓
React Native Implementation

The implementation should not become the only source of truth for product design decisions.