# Release Workflow

Release work in this repository should be disciplined, documented, and validated through CI.

## Purpose

- Ensure the repository is deployable from the main branch.
- Keep release steps clear and repeatable.
- Coordinate release notes, versioning, and documentation updates.

## Steps

1. Confirm branch status.
   - Only merge release changes into `main` or `develop` after passing CI.
   - The repository documents that `main` is production-ready.

2. Verify validation.
   - Confirm GitHub Actions pass for the pull request.
   - Ensure documentation and security workflows are green.

3. Update release-related documentation.
   - Add release notes or change summaries to the PR and any project changelog if present.
   - Document any new environment or deployment requirements.

4. Tag or merge cleanly.
   - When the release is ready, merge the PR to `main` and create a version tag if the repository uses semantic versioning.
   - For platform releases, follow any existing release process in `DEPLOYMENT.md` or `docs/architecture/deployment.md`.

5. Communicate the release.
   - Summarize the release in the PR description.
   - Note any important migrations, database changes, or operational impacts.

## Review

- The release should have clear scope and no unresolved checklist items.
- Deployment expectations and rollback considerations should be documented.
