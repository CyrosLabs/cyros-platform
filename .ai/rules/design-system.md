# Design System Rules

## Purpose

These rules govern UI and UX implementation across Cyros products.

The goal is to create consistent, accessible, human-centered experiences while allowing individual products to maintain their own visual identity.

Cyros products should feel related without being forced into a single visual style.

---

## 1. Human First

UI decisions must prioritize:

- Clarity
- Accessibility
- Low cognitive load
- Predictability
- Emotional appropriateness
- Ease of use

Do not add UI complexity merely because a feature is technically possible.

Every significant UI element should have a clear user purpose.

---

## 2. Product Identity vs Shared Design

Cyros is an ecosystem of products.

Do not assume every product must have identical:

- Colors
- Typography
- Illustrations
- Branding
- Navigation
- Interaction patterns

Shared design principles should be consistent.

Product-specific visual identity may differ where appropriate.

---

## 3. Existing Design System First

Before creating a UI element:

1. Search for an existing component.
2. Search the relevant application for established patterns.
3. Search shared packages for reusable UI primitives.
4. Reuse existing tokens and components when they exist.

Do not create a new component for functionality that an existing component already provides.

---

## 4. Do Not Invent Design Tokens

If an established design token, component library, typography scale, spacing system, or color system exists, use it.

If one does not exist:

- Do not pretend that one exists.
- Do not invent a repository-wide design system silently.
- Prefer the existing product's established visual patterns.
- Propose new shared tokens when they are genuinely needed.

A new cross-product design standard should be treated as an architectural/design decision rather than an incidental implementation detail.

---

## 5. Components

Components should have clear responsibilities.

Prefer:

- Small composable components
- Explicit props
- Consistent states
- Reusable primitives
- Predictable behavior

Account for appropriate states such as:

- Loading
- Empty
- Error
- Disabled
- Active
- Success
- Offline, when relevant

Do not design only the ideal success state.

---

## 6. Accessibility

Accessibility is required, not optional.

Consider:

- Screen readers
- Keyboard navigation where applicable
- Touch target size
- Contrast
- Focus states
- Semantic elements
- Text scaling
- Reduced motion
- Error communication

Do not rely solely on color to communicate meaning.

Interactive elements must have understandable labels and states.

---

## 7. Mobile

For mobile applications:

- Respect platform interaction conventions.
- Consider different screen sizes.
- Avoid unnecessarily dense interfaces.
- Account for safe areas.
- Consider keyboard behavior.
- Consider loading and network states.
- Avoid interactions that require precision beyond typical touch input.

Do not assume web and mobile interaction patterns are interchangeable.

---

## 8. UX States

Every new user flow should consider:

1. Initial state
2. Loading state
3. Success state
4. Empty state
5. Error state
6. Retry/recovery state where appropriate

For destructive actions, provide appropriate confirmation or recovery mechanisms.

---

## 9. Content and Language

User-facing copy should be:

- Clear
- Concise
- Human
- Action-oriented
- Consistent with the product's voice

Do not expose implementation terminology to users unless it is meaningful to them.

Avoid technical error messages as user-facing messages.

---

## 10. AI-Specific Requirement

AI agents must not create a "beautiful" interface by inventing arbitrary design decisions without checking the existing product.

Before implementing UI, inspect:

- Existing screens
- Existing components
- Existing styles/tokens
- Product documentation
- Relevant design assets

Consistency with the existing product is more important than generic UI trends.