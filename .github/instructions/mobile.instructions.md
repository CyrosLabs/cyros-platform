---

## applyTo: "apps/**/mobile/**,apps/haru-haru/**,platform/**/mobile/**"

# Mobile Instructions

## Scope

These instructions apply to mobile applications and mobile-specific code.

Haru Haru currently uses Expo, React Native, and TypeScript and is the primary mobile product in the repository.

---

## Product Architecture

Mobile applications are product applications.

They own:

* Product experience
* Product-specific flows
* Product-specific business rules
* Mobile presentation and interaction

They should consume Platform capabilities rather than duplicating shared functionality.

Do not introduce direct dependencies between products.

---

## Expo and React Native

Follow the existing Expo project configuration and React Native conventions.

Do not introduce a different mobile framework or build system unless explicitly required.

Prefer cross-platform React Native or Expo APIs when they satisfy the requirement.

Use native platform-specific code only when the requirement actually differs between platforms.

---

## Platform Differences

When behavior differs between Android and iOS:

* Keep platform-specific logic isolated.
* Avoid spreading platform checks throughout unrelated components.
* Prefer a small adapter or platform-specific module when appropriate.
* Verify both platforms when the affected behavior is platform-sensitive.

Do not assume that behavior tested on one platform is automatically correct on another.

---

## UI

Prefer small, focused components.

Keep presentation separate from product logic.

Use existing theme primitives, design tokens, and shared components.

Do not introduce ad-hoc colors, typography, spacing, or component patterns when an established theme provides the same capability.

Pay attention to:

* Touch targets
* Safe areas
* Keyboard behavior
* Dynamic content
* Loading and error states
* Accessibility

---

## State and Data

Use the smallest state mechanism appropriate to the feature.

Do not introduce global state for local interaction problems.

Keep network and Platform interaction outside presentation components where practical.

Do not store secrets or privileged credentials in the application bundle.

Assume anything shipped to a client application can potentially be inspected.

---

## Performance

Mobile performance should be considered from the beginning.

Avoid:

* Unnecessary re-renders
* Large synchronous operations on the UI thread
* Unbounded lists
* Excessive network requests
* Loading large resources when they are not needed

Prefer lazy loading and efficient list rendering when the feature requires it.

Do not prematurely optimize simple screens.

---

## Offline and Failure Behavior

Mobile applications operate under unreliable network conditions.

For network-dependent features, consider:

* Loading states
* Errors
* Retry behavior
* Temporary connectivity loss
* Partial data where appropriate

Do not assume a network request always completes successfully.

---

## Testing

Test user-observable behavior rather than implementation details.

For Haru Haru, the primary validation commands are:

```bash id="08stwb"
npm run lint
npx tsc --noEmit
npm test -- --runInBand
```

When a feature involves platform-specific behavior, test the affected platform(s) rather than relying solely on static validation.

---

## App Configuration

Treat app configuration as part of the application boundary.

Be careful when changing:

* `app.json`
* Build configuration
* Package identifiers
* Permissions
* Native configuration
* Environment configuration

Do not request new device permissions without a product requirement.

Do not expose credentials through Expo configuration that is delivered to the client.

---

## Changes

When implementing mobile changes:

* Preserve cross-platform behavior where intended.
* Keep platform-specific behavior isolated.
* Reuse existing components and theme primitives.
* Keep product-specific logic inside the product.
* Avoid unnecessary native dependencies.
* Validate the relevant platforms.
* Update product documentation when setup or behavior changes.
