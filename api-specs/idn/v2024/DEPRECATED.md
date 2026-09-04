# Deprecated: Year-Versioned Spec (v2026)

This directory and its associated root spec (`sailpoint-api.v2026.yaml`) are **frozen** as of the per-resource versioning migration.

## What replaced it

The API spec system has migrated from year-based base-path versioning to per-resource path versioning:

| Before | After |
|--------|-------|
| `https://{tenant}.api.identitynow.com/v2026/entitlements/{id}` | `https://{tenant}.api.identitynow.com/entitlements/v1/{id}` |
| Single year-versioned root spec | 109 independently versioned resource specs in `apis/` |
| All resources share one version bump | Each resource bumps its version independently |

## New source of truth

- **`apis/`** — one `openapi.yaml` per resource domain (hand-edited source)
- **`apis/shared/`** — common schemas, parameters, and responses shared across resources
- **`sailpoint-api.yaml`** — generated root bundle (do not edit directly)
- **`sailpoint-api.root.yaml`** — thin assembler; re-bundle with:
  ```
  redocly bundle sailpoint-api.root.yaml -o sailpoint-api.yaml
  ```

## Do not modify this directory

Changes to files in `v2026/` will not be reflected in the new versioned spec. Make changes in `apis/` instead.
