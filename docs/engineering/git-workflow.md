# Git Workflow

## Daily Workflow

1. Pull the latest changes from `main`.

```bash
git checkout main
git pull origin main
```

2. Create a feature branch.

```bash
git checkout -b feature/my-feature
```

3. Develop the feature.

4. Commit frequently using Conventional Commits.

Example:

```text
feat(auth): implement Google login
```

5. Push your branch.

```bash
git push origin feature/my-feature
```

6. Open a Pull Request.

7. Address review comments.

8. Merge after approval.

9. Delete the branch.

---

# Commit Convention

Cyros follows Conventional Commits.

Examples:

feat(ui): add lesson card

fix(audio): fix pronunciation playback

docs(architecture): update platform diagram

refactor(api): simplify client initialization

test(auth): add login tests

---

# Commit Guidelines

A commit should:

- Represent one logical change.
- Build successfully.
- Leave the repository in a working state.
- Be understandable months later.