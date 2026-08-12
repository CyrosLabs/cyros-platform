# Release

Prepare a release for the requested Cyros Labs product, package, platform capability, or repository change.

Do not create a release until the repository state and release requirements have been verified.

## Before Release

1. Identify exactly what is being released.
2. Inspect the relevant package or application metadata.
3. Review the changes since the previous release.
4. Check for breaking changes.
5. Check dependency changes.
6. Check database, API, configuration, infrastructure, and migration implications.
7. Review the applicable release documentation.
8. Verify that required CI and security checks pass.

## Release Scope

Clearly identify:

* Product or package
* Current version
* Target version
* Release type
* Included changes
* Breaking changes
* Required migrations
* Required configuration
* Deployment requirements

Do not change versions arbitrarily.

Follow the repository's existing versioning strategy.

## Validation

Run the appropriate validation for the released area.

For Haru Haru, at minimum:

```bash id="h4h4x3"
npm run lint
npx tsc --noEmit
npm test -- --runInBand
```

For infrastructure or backend changes, also run the relevant service and configuration validation.

Do not release with known failing required checks.

## Security

Before release, verify:

* No secrets are included.
* Required security checks pass.
* Dependency changes have been reviewed.
* Sensitive configuration is not being bundled incorrectly.
* Authentication and authorization changes have appropriate validation.

## Documentation

Update:

* Changelog or release notes when applicable
* Product documentation when behavior changes
* Migration documentation when required
* Architecture documentation when the release changes architecture

Do not create duplicate release documentation when an established location already exists.

## Release Notes

Release notes should focus on user- and operator-relevant changes.

Include:

* New features
* Improvements
* Bug fixes
* Breaking changes
* Required actions
* Known limitations

Do not include internal implementation noise unless it is operationally relevant.

## Completion

Before finalizing the release:

* Confirm the version.
* Confirm the release scope.
* Confirm validation.
* Confirm required documentation.
* Confirm repository state.
* Identify rollback considerations when relevant.

If any release requirement cannot be verified, state it explicitly rather than assuming it is satisfied.
