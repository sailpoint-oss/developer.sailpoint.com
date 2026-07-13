---
id: api-versioning-migration
title: Migration guide for ISC APIs to new versioning model.
pagination_label: API Versioning Migration
sidebar_label: API Versioning Migration
sidebar_position: 8
sidebar_class_name: apiVersioning
keywords: ['api', 'versioning', 'announcement']
description: Migration guide for ISC APIs to new versioning model.
slug: /api/api-versioning-migration
tags: ['API Versioning Strategy']
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We have made a significant update to how SailPoint's Identity Security Cloud APIs are versioned. This document outlines what changed, why we made these changes, how to migrate to the new API versioning system, and what they mean for you as an API consumer or integration developer.

## What Has Changed

SailPoint is moved away from a **shared annual release model** (e.g., `v2024`, `v2025`, `v2026`) toward **true semantic versioning (semver) at the individual service level**.

Under the new strategy, each API service are versioned independently. A new major version of a service will only be introduced when that service's usage contract actually changes — not because a new calendar year has arrived. The URL structure will follow a pattern like:

```
/accounts/v1
/identities/v2
/roles/v1
```

This gives customers a stable, predictable target. As long as a service's contract is unchanged, your integration continues to work — indefinitely. When a breaking change is genuinely required, a new version (e.g., `v2`) will be developed and released **in parallel** with the existing version, and the older version will enter a clearly defined deprecation schedule on its own timeline.

## Why We Made This Change

The previous annual versioning model had introduced a number of pain points for both customers and internal teams. The key issues that drove this change are:

### Customers Are Forced to Update Integrations Even When Nothing Changed

Under the current model, all APIs are rolled into a new version each year — regardless of whether any breaking changes were made to a particular service. This means a customer targeting `v2024` may be required to update their integration paths or SDK method calls to `v2026` even if the underlying service they use has not changed at all. There is no clear signal that a new yearly version contains meaningful differences for their specific use case.

With per-service versioning, a customer using `/accounts/v1` will not need to change anything until SailPoint actually introduces a breaking change to the Accounts service and releases `/accounts/v2`.

### New APIs Are Constrained to an Annual Window

If a service is not ready to ship by the cutoff for a given year's release, it must wait for the next annual cycle. This delays meaningful improvements and limits teams' ability to ship when they are ready.

With per-service versioning, any service can introduce a new version as soon as it is ready — independent of every other service.

### The `/latest` Endpoint Is Unstable for Production Use

The current `/latest` alias was introduced to help reduce churn from yearly version changes, but it is inherently unsafe for production integrations. If a breaking change is introduced to any service, a customer using `/latest` can have their integration break without warning. The existence of `/latest` as a workaround signals that the annual versioning model is not meeting customer needs on its own.

### Maintaining Multiple Year-Based Versions Is Expensive and Error-Prone

Each annual release requires duplicating the entire API collection. This process takes significant engineering time and frequently results in inconsistencies — mismatched descriptions, outdated examples, experimental headers that linger past their intended lifespan, and other documentation drift. Customers occasionally encounter an experimental API in `v2025` and have no clear way to know whether the same API is stable in `v2024` without manually navigating to the prior year's documentation.

With independent service versioning, each service is documented once and updated in place. There is no duplication, and the experimental/stable boundary is clearer within a single service's version history.

### You Cannot Use Old and New Versions of the Same Service Simultaneously

The current model ties all services to a single year-based namespace. If you are migrating from `v2024/accounts` to `v2025/accounts`, you cannot run both versions of the Accounts service concurrently in your application. With per-service versioning, `/accounts/v1` and `/accounts/v2` can coexist and you can migrate on your own schedule.

## What Is Stayed the Same

- The distinction between **public** (production-ready) and **experimental** APIs remains. Experimental APIs may still introduce breaking changes and require an opt-in header.
- The definition of **breaking vs. non-breaking changes** does not change.
- Deprecated APIs will continue to remain operational for a defined transition window before being turned off, and deprecations will still be communicated through announcements, API specification notices, and response headers.
- The **V3 and Beta APIs** are unaffected by this change and will remain operational under the previously communicated timeline.

## What This Means for You

| Scenario | Under Current Strategy | Under New Strategy |
|---|---|---|
| A service you use has no changes this year | You still need to update your integration path to the new year's version when the old one is deprecated | Your integration path stays the same until a breaking change is actually introduced |
| A breaking change is introduced to one service | All services receive a new year-based version | Only the affected service receives a new major version |
| You want to run v1 and v2 of the same service concurrently | Not supported within the same year namespace | Supported — both versions are accessible simultaneously |
| An experimental API you rely on graduates to public | You need to find the stable version in the appropriate year's docs | The same service URL path moves to public status; the prior year lookup is not needed |

### SDK Migration Scripts

If you use one of the SailPoint SDKs, you do not have to rewrite your integration by hand. Each SDK has a migration script that automates the bulk of the changes — updating the package/module version, collapsing the old version namespaces (`beta`, `v3`, year-based) into the new per-service layout, and adding the per-method/per-cmdlet version suffix (typically `V1`).

Every script:

- Walks a target directory recursively (defaults to the current working directory).
- Rewrites your SDK usage **in place**.
- Prints a **"Manual review required"** summary listing the handful of cases that need a human eye (for example, the small number of operations that map to `V2` instead of `V1`).

:::caution

These scripts modify files in place. Commit or back up your code and run against a clean working tree first so you can review the diff before keeping the changes.

:::

Each script lives in its SDK's template repository. Select your language below for what the script changes and how to run it.

<Tabs>
<TabItem value="typescript" label="TypeScript" default>

**Script:** [`migrationScript.js`](https://github.com/sailpoint-oss/typescript-sdk-template/blob/main/migrationScript.js) (`sailpoint-api-client` 1.x → 2.0)

**What it does:**

- Bumps `sailpoint-api-client` to `^2.0.0` in your `package.json`.
- Collapses versioned class names to their un-versioned 2.0 equivalents — for example, `TransformsBetaApi` → `TransformsApi`, `AccountsV2024Api` → `AccountsApi`, `EntitlementsV2025Api` → `EntitlementsApi`.
- Adds the version suffix to methods called on an API instance — for example, `api.listAccounts(...)` → `api.listAccountsV1(...)`.

**How to run:**

```bash
# From your project root (or pass a target directory)
node migrationScript.js [target-directory]

# Pull in the new SDK version
npm install

# Type-check to catch anything flagged for manual review
npx tsc --noEmit
```

**Manual review highlights:** A few operations use a `V2` partition (for example, provisioning policies, workflow execution history, and access-request config) — change `V1` → `V2` where appropriate. API clients passed between files, along with any renamed or removed model types, should also be verified against the compiler output.

</TabItem>
<TabItem value="go" label="Go">

**Script:** [`migrationScript.js`](https://github.com/sailpoint-oss/golang-sdk-template/blob/main/migrationScript.js) (`golang-sdk` v2 → v3)

:::note

This script is run with Node.js even though it migrates a Go project.

:::

**What it does:**

- Updates the module require path in `go.mod` from `golang-sdk/v2` to `golang-sdk/v3`.
- Updates all `.go` import paths from `/v2` to `/v3`.
- Removes the `.V3.` and `.Beta.` intermediate namespace qualifiers — for example, `apiClient.V3.AccountsAPI` → `apiClient.AccountsAPI`.
- Adds the `V1` suffix to API service method calls — for example, `AccountsAPI.ListAccounts(...)` → `AccountsAPI.ListAccountsV1(...)`.

**How to run:**

```bash
# From your project root (or pass a target directory)
node migrationScript.js [target-directory]

# Regenerate go.sum
go mod tidy
```

**Manual review highlights:** Update generic pagination type arguments to the per-partition packages (for example, `api_accounts.Account` instead of `v3.Account`), replace any leftover `api_v3` / `api_beta` import aliases with per-partition imports, and note that the `PaginateSearchApi` signature changed in v3.

</TabItem>
<TabItem value="python" label="Python">

**Script:** [`migrate_sdk.py`](https://github.com/sailpoint-oss/python-sdk-template/blob/main/migrate_sdk.py) (`sailpoint` python-sdk 1.x → 2.x)

:::caution

This script **introspects the installed `sailpoint` package** to build accurate name → partition and method → version mappings, so you must have the **2.x SDK installed** in your active environment before running it. This is what lets it correctly resolve the roughly 200 methods that kept their original name and the handful that became `_v2` rather than blindly appending `_v1`.

:::

**What it does:**

- Updates `requirements.txt` / `setup.py` / `pyproject.toml` to `sailpoint >= 2.0.0`.
- Rewrites imports from the old version namespaces (`sailpoint.v3`, `.beta`, `.v2024`, `.v2025`) to the new flat, per-resource partitions — for example, `sailpoint.transforms.api.TransformsApi`.
- Versions API method calls — for example, `api.list_transforms()` → `api.list_transforms_v1()`.
- Leaves anything ambiguous in place with a `# TODO(sdk-migration): ...` comment.
- Supports `.py` files **and** Jupyter/Databricks notebooks (`.ipynb`).

**How to run:**

```bash
# Install / activate the 2.x SDK first so the script can introspect it
pip install -r requirements.txt        # (with sailpoint >= 2.0.0)

# Preview changes without writing (recommended first pass)
python migrate_sdk.py [target] --dry-run

# See a full unified diff
python migrate_sdk.py [target] --diff

# Apply the changes in place
python migrate_sdk.py [target]
```

**Manual review highlights:** Resolve any `# TODO(sdk-migration)` comments the script leaves behind (ambiguous models, methods with both `_v1` and `_v2`, or removed symbols). Remember that API classes now import from `sailpoint.<partition>.api`, while `ApiClient` / `Configuration` / `Paginator` stay top-level, and `configuration.experimental = True` is still required for experimental APIs.

</TabItem>
<TabItem value="powershell" label="PowerShell">

**Script:** [`migrationScript.js`](https://github.com/sailpoint-oss/powershell-sdk-template/blob/main/migrationScript.js) (`PSSailpoint` 1.x → 2.0)

:::note

This script is run with Node.js even though it migrates PowerShell (`.ps1` / `.psm1` / `.psd1`) files.

:::

**What it does:**

- Renames Beta cmdlets — for example, `Get-BetaAccounts` → `Get-AccountsV1`, `Update-BetaEntitlement` → `Update-EntitlementV1`.
- Renames V3/plain cmdlets that appear alongside SailPoint SDK parameters (`-WithHttpInfo`, `-Limit`, `-Offset`, `-Count`, `-Filters`, `-Id`) — for example, `Get-Accounts` → `Get-AccountsV1`.
- Updates cmdlet-name string references — for example, `Invoke-Paginate -Function "Get-Accounts"` → `Invoke-Paginate "Get-AccountsV1"`.
- Adds `Import-Module PSSailpoint` to any `.ps1` that uses SDK cmdlets but does not already import the module (in 2.0 the nested resource cmdlets are no longer auto-loaded).

**How to run:**

```bash
# From your scripts folder (or pass a target directory)
node migrationScript.js [target-directory]
```

Then update your module install to 2.0 or later:

```powershell
Install-Module -Name PSSailpoint -MinimumVersion 2.0.0
```

**Manual review highlights:** Plain `Verb-Noun` cmdlets that are *not* on a line with recognizable SDK parameters may not be auto-renamed — search for unversioned SailPoint cmdlets and add the `V1` suffix. `ConvertFrom-JsonTo*` helpers and NERM cmdlets are intentionally left unchanged. Also review `-Filters` strings: some endpoints reject filter operators that were previously tolerated (for example, the Accounts API returns HTTP 400 for `name co "Andrew"`).

</TabItem>
</Tabs>

### Path Mapping Reference

The table below maps each service path from its current year-based versions (the **Legacy Versions** column) to the new per-service version (the **New Version** column). Use this to determine where each of your existing integration paths will land under the new versioning strategy.

<details>
<summary>View the full path mapping table</summary>

| Service | Legacy Versions | New Version |
|---|---|---|
| `/access-model-metadata/attributes` | beta,v2024,v2025,v2026 | v1 |
| `/access-model-metadata/bulk-update` | v2025 | v1 |
| `/access-profiles` | beta,v3,v2024,v2025,v2026 | v1 |
| `/access-profiles/bulk-delete` | beta,v3,v2024,v2025,v2026 | v1 |
| `/access-request-administration` | beta,v3,v2024,v2025,v2026 | v1 |
| `/access-request-agent` | v2025,v2026 | v1 |
| `/access-request-approvals` | beta,v3,v2024,v2025,v2026 | v1 |
| `/access-request-config` | v2024,v2025 | v1 |
| `/access-request-config` | beta,v3,v2026 | v2 |
| `/access-request-identity-metrics` | beta,v2024,v2025,v2026 | v1 |
| `/access-request-recommendations` | beta,v2024,v2025,v2026 | v1 |
| `/access-request-status` | beta,v3,v2024,v2025,v2026 | v1 |
| `/access-requests` | beta,v3,v2024,v2025,v2026 | v1 |
| `/access-requests/accounts-selection` | beta,v2024,v2025,v2026 | v1 |
| `/access-requests/close` | beta,v2024,v2025,v2026 | v1 |
| `/access-requests/mcp` | v2025,v2026 | v1 |
| `/account-activities` | beta,v3,v2024,v2025,v2026 | v1 |
| `/account-aggregations` | beta,v2024,v2025,v2026 | v1 |
| `/account-requests` | v2026 | v1 |
| `/account-requests/machine-account-create` | v2026 | v1 |
| `/account-requests/machine-account-create/{id}` | v2026 | v1 |
| `/account-usages` | beta,v3,v2024,v2025,v2026 | v1 |
| `/accounts` | beta,v3,v2024,v2025,v2026 | v1 |
| `/accounts/bulk-classify` | v2024,v2025,v2026 | v1 |
| `/accounts/{id}/classify` | v2024,v2025,v2026 | v1 |
| `/accounts/{id}/entitlements` | beta,v3,v2024,v2025,v2026 | v1 |
| `/accounts/{id}/recommendation` | v2024,v2025,v2026 | v1 |
| `/accounts/{id}/remove` | beta,v2024,v2025,v2026 | v1 |
| `/agent-audit` | v2026 | v1 |
| `/ai-access-request-recommendations` | beta,v2024,v2025,v2026 | v1 |
| `/ai-source-config` | v2025,v2026 | v1 |
| `/api-usage` | v2025,v2026 | v1 |
| `/approvals` | beta,v2024,v2025,v2026 | v1 |
| `/auth-org/lockout-config` | v3,v2024,v2025,v2026 | v1 |
| `/auth-org/network-config` | v3,v2024,v2025,v2026 | v1 |
| `/auth-org/service-provider-config` | v3,v2024,v2025,v2026 | v1 |
| `/auth-org/session-config` | v3,v2024,v2025,v2026 | v1 |
| `/auth-profiles` | beta,v2024,v2025,v2026 | v1 |
| `/auth-users` | v3,v2024,v2025,v2026 | v1 |
| `/authorization-capabilities` | v2024,v2025,v2026 | v1 |
| `/authorization-scopes` | v2024,v2025,v2026 | v1 |
| `/authorization/authorization-assignable-right-sets` | v2025,v2026 | v1 |
| `/authorization/custom-user-levels` | v2025,v2026 | v1 |
| `/authorization/user-levels` | v2025,v2026 | v1 |
| `/brandings` | v3,v2024,v2025,v2026 | v1 |
| `/bulk-outlier-detection` | beta,v2024,v2025,v2026 | v1 |
| `/campaign-filters` | v3,v2024,v2025,v2026 | v1 |
| `/campaign-templates` | beta,v3,v2024,v2025,v2026 | v1 |
| `/campaigns` | beta,v3,v2024,v2025,v2026 | v1 |
| `/can-change-password` | beta,v3,v2024,v2025,v2026 | v1 |
| `/capabilities` | v2026,v2027,v2028,v2029 | v1 |
| `/certification-campaigns` | v2026 | v1 |
| `/certification-tasks` | v3,v2024,v2025,v2026 | v1 |
| `/certifications` | beta,v3,v2024,v2025,v2026 | v1 |
| `/common-access` | beta,v2024,v2025,v2026 | v1 |
| `/configuration-hub/backups` | v2024,v2025,v2026 | v1 |
| `/configuration-hub/backups/uploads` | v3,v2024,v2025,v2026 | v1 |
| `/configuration-hub/deploys` | v2024,v2025,v2026 | v1 |
| `/configuration-hub/drafts` | v2024,v2025,v2026 | v1 |
| `/configuration-hub/object-mappings` | v3,v2024,v2025,v2026 | v1 |
| `/configuration-hub/scheduled-actions` | v2024,v2025,v2026 | v1 |
| `/connector-customizers` | beta,v2024,v2025,v2026 | v1 |
| `/connector-instances` | beta,v2024,v2025,v2026 | v1 |
| `/connector-rules` | beta,v2024,v2025,v2026 | v1 |
| `/connectors` | beta,v3,v2024,v2025,v2026 | v1 |
| `/controls` | v2026 | v1 |
| `/criteria` | v2025,v2026 | v1 |
| `/criteria-config` | v2025,v2026 | v1 |
| `/custom-password-instructions` | beta,v2024,v2025,v2026 | v1 |
| `/das/applications` | v2024,v2025,v2026 | v1 |
| `/das/identity-collectors` | v2024,v2025,v2026 | v1 |
| `/das/owners` | v2025,v2026 | v1 |
| `/das/owners` | N/A | v1 |
| `/das/tasks` | v2025,v2026 | v1 |
| `/data-segments` | beta,v2024,v2025,v2026 | v1 |
| `/data-source-connections` | beta,v2024,v2025,v2026 | v1 |
| `/discovered-applications` | beta,v3,v2024,v2025,v2026 | v1 |
| `/discovery-source-category` | v2025,v2026 | v1 |
| `/discovery-sources-metadata` | v2025,v2026 | v1 |
| `/docs-agent` | v2026 | v1 |
| `/email-requests` | v2024,v2025,v2026 | v1 |
| `/entitlement-connections` | v2026 | v1 |
| `/entitlement-recommendations` | v2026 | v1 |
| `/entitlements` | beta,v2024,v2025 | v1 |
| `/entitlements` | v2026 | v2 |
| `/entitlements/aggregate/sources` | beta,v2024,v2025,v2026 | v1 |
| `/entitlements/identities/{id}/entitlements` | beta,v2024,v2025,v2026 | v1 |
| `/entitlements/reset/sources` | beta,v2024,v2025,v2026 | v1 |
| `/evidence` | v2025,v2026 | v1 |
| `/execute-step` | beta,v3,v2024,v2025,v2026 | v1 |
| `/forgot-username` | v3,v2024,v2025,v2026 | v1 |
| `/form-definitions` | beta,v2024,v2025,v2026 | v1 |
| `/form-instances` | beta,v2024,v2025,v2026 | v1 |
| `/genai-gateway/llm-batch-completions` | v2024,v2025,v2026 | v1 |
| `/genai-gateway/prompts` | v2024,v2025,v2026 | v1 |
| `/genai-settings/sed` | v2024,v2025,v2026 | v1 |
| `/generate-password-reset-token` | beta,v2024,v2025,v2026 | v1 |
| `/generic-approvals` | beta,v2024,v2025,v2026 | v1 |
| `/harbor-pilot/feedback` | v2025,v2026 | v1 |
| `/harbor-pilot/settings` | v2025,v2026 | v1 |
| `/harbor-pilot/telemetry` | v2025,v2026 | v1 |
| `/historical-identities` | beta,v2024,v2025,v2026 | v1 |
| `/iai-attributes` | beta,v2024,v2025,v2026 | v1 |
| `/iai-configurations` | beta,v2024,v2025,v2026 | v1 |
| `/iai-raw-objects` | beta,v2024,v2025,v2026 | v1 |
| `/iai-roles` | beta,v2024,v2025,v2026 | v1 |
| `/icons` | beta,v2024,v2025,v2026 | v1 |
| `/identities` | beta,v2024,v2025,v2026 | v1 |
| `/identities-accounts` | beta,v2024,v2025,v2026 | v1 |
| `/identities/invite` | beta,v2024,v2025,v2026 | v1 |
| `/identities/process` | beta,v2024,v2025,v2026 | v1 |
| `/identities/{id}/role-assignments` | beta,v2024,v2025,v2026 | v1 |
| `/identities/{id}/set-lifecycle-state` | beta,v3,v2024,v2025,v2026 | v1 |
| `/identities/{id}/synchronize-attributes` | beta,v2024,v2025,v2026 | v1 |
| `/identities/{id}/system-account` | v3,v2024,v2025,v2026 | v1 |
| `/identities/{id}/verification/account/send` | beta,v2024,v2025,v2026 | v1 |
| `/identity-attributes` | beta,v2024,v2025,v2026 | v1 |
| `/identity-groups` | beta,v2024,v2025,v2026 | v1 |
| `/identity-profiles` | beta,v3,v2024,v2025,v2026 | v1 |
| `/identity-profiles/identity-preview` | beta,v3,v2024,v2025,v2026 | v1 |
| `/identity-profiles/{id}/lifecycle-states` | beta,v3,v2024,v2025,v2026 | v1 |
| `/identity-requests` | beta,v2024,v2025,v2026 | v1 |
| `/intelligence/identities` | v2026 | v1 |
| `/jit-activation-config` | v2026 | v1 |
| `/jit-activations` | v2026 | v1 |
| `/launchers` | beta,v2024,v2025,v2026 | v1 |
| `/machine-accounts` | v2024,v2025,v2026 | v1 |
| `/machine-accounts/bulk-disable` | v2026 | v1 |
| `/machine-accounts/bulk-enable` | v2026 | v1 |
| `/machine-accounts/bulk-reload` | v2026 | v1 |
| `/machine-accounts/bulk-update` | v2026 | v1 |
| `/machine-identities` | v2026 | v1 |
| `/machine-identities` | v2027 | v2 |
| `/machine-identities/lifecycle-actions` | v2026 | v1 |
| `/machine-identities/{id}/lifecycle-actions` | v2026 | v1 |
| `/machine-identity-metadata` | v2025,v2026 | v1 |
| `/machine-identity-user-entitlements` | v2025,v2026 | v1 |
| `/machine-mapping-metadata` | v2024,v2025,v2026 | v1 |
| `/mail-from-attributes` | beta,v2024,v2025,v2026 | v1 |
| `/managed-clients` | beta,v3,v2024,v2025,v2026 | v1 |
| `/managed-clients/{id}/pipeline-messages` | v2026 | v1 |
| `/managed-cluster-processes` | v2024,v2025,v2026 | v1 |
| `/managed-cluster-types` | beta,v3,v2024,v2025,v2026 | v1 |
| `/managed-clusters` | beta,v3,v2024,v2025,v2026 | v1 |
| `/manual-discover-applications` | beta,v3,v2024,v2025,v2026 | v1 |
| `/manual-discover-applications-template` | beta,v3,v2024,v2025,v2026 | v1 |
| `/mfa/kba/config` | beta,v3,v2024,v2025,v2026 | v1 |
| `/mfa/{id}/config` | beta,v3,v2024,v2025,v2026 | v1 |
| `/mfa/{id}/test` | beta,v3,v2024,v2025,v2026 | v1 |
| `/monitored-charts/refresh` | v2025,v2026 | v1 |
| `/multihosts` | beta,v2024,v2025,v2026 | v1 |
| `/my-sailpoint` | v2024,v2025,v2026 | v1 |
| `/my-sailpoint/dashboard-data-stream` | v2024,v2025,v2026 | v1 |
| `/my-sailpoint/dashboard-template-data-stream` | v2025,v2026 | v1 |
| `/my-sailpoint/favorite-dashboard-data-stream` | v2024,v2025,v2026 | v1 |
| `/my-sailpoint/widget-data-stream` | v2025,v2026 | v1 |
| `/my-violations` | v2026 | v1 |
| `/ne/core` | v2025,v2026 | v1 |
| `/ne/custom-attributes` | v2025,v2026 | v1 |
| `/ne/org-auth/user-roles` | v2025,v2026 | v1 |
| `/ne/organization-hierarchy` | v2025,v2026 | v1 |
| `/ne/organization-user-roles` | v2025,v2026 | v1 |
| `/ne/organizations` | v2025,v2026 | v1 |
| `/ne/policy` | v2025,v2026 | v1 |
| `/ne/skeleton` | v2025,v2026 | v1 |
| `/non-employee-approvals` | beta,v3,v2024,v2025,v2026 | v1 |
| `/non-employee-records` | beta,v3,v2024,v2025,v2026 | v1 |
| `/non-employee-requests` | beta,v3,v2024,v2025,v2026 | v1 |
| `/non-employee-sources` | beta,v3,v2024,v2025,v2026 | v1 |
| `/non-employee-sources/{id}/schema-attributes` | beta,v3,v2024,v2025,v2026 | v1 |
| `/notification-preferences` | beta,v2026 | v1 |
| `/notification-template-context` | beta,v2024,v2025,v2026 | v1 |
| `/notification-template-defaults` | beta,v2024,v2025,v2026 | v1 |
| `/notification-template-variables` | v2026 | v1 |
| `/notification-templates` | beta,v2024,v2025,v2026 | v1 |
| `/notifications` | beta,v2024,v2025,v2026 | v1 |
| `/oauth-clients` | beta,v3,v2024,v2025,v2026 | v1 |
| `/oauth2-broker/admin` | v2025,v2026 | v1 |
| `/oauth2-broker/auth` | v2025,v2026 | v1 |
| `/org-config` | beta,v2024,v2025,v2026 | v1 |
| `/outlier-feature-summaries` | beta,v2024,v2025,v2026 | v1 |
| `/outlier-summaries` | beta,v2024,v2025,v2026 | v1 |
| `/outliers` | beta,v2024,v2025,v2026 | v1 |
| `/parameter-storage` | v2025,v2026 | v1 |
| `/password-change-status` | beta,v3,v2024,v2025,v2026 | v1 |
| `/password-dictionary` | beta,v3,v2024,v2025,v2026 | v1 |
| `/password-org-config` | beta,v3,v2024,v2025,v2026 | v1 |
| `/password-policies` | beta,v3,v2024,v2025,v2026 | v1 |
| `/password-sync-groups` | beta,v3,v2024,v2025,v2026 | v1 |
| `/password-sync-groups/available-sources` | beta,v2024,v2025,v2026 | v1 |
| `/peer-group-strategies` | beta,v2024,v2025,v2026 | v1 |
| `/personal-access-tokens` | beta,v3,v2024,v2025,v2026 | v1 |
| `/platform-connectors` | beta,v2024,v2025,v2026 | v1 |
| `/platform-logs` | beta,v2024,v2025,v2026 | v1 |
| `/policies` | v2026 | v1 |
| `/privileged-recommendations` | v2026 | v1 |
| `/prompt-decisions` | v2026 | v1 |
| `/prompt-decisions/rules` | v2026 | v1 |
| `/prompt-insights` | v2026 | v1 |
| `/public-identities` | beta,v3,v2024,v2025,v2026 | v1 |
| `/public-identities-config` | beta,v3,v2024,v2025,v2026 | v1 |
| `/public-machine-identities` | v2026 | v1 |
| `/public/custom-password-instructions` | beta,v2024,v2025,v2026 | v1 |
| `/query-password-info` | beta,v3,v2024,v2025,v2026 | v1 |
| `/reassignment-configurations` | beta,v2024,v2025,v2026 | v1 |
| `/recommendations` | beta,v2024,v2025,v2026 | v1 |
| `/reports` | v3,v2024,v2025,v2026 | v1 |
| `/requestable-objects` | beta,v3,v2024,v2025,v2026 | v1 |
| `/revocable-objects` | v2024,v2025,v2026 | v1 |
| `/role-insights` | beta,v2024,v2025,v2026 | v1 |
| `/role-mining-potential-roles` | beta,v2024,v2025,v2026 | v1 |
| `/role-mining-sessions` | beta,v2024,v2025,v2026 | v1 |
| `/role-propagation` | v2025,v2026 | v1 |
| `/role-propagation-config` | v2025,v2026 | v1 |
| `/roles` | beta,v2024,v2025,v2026 | v1 |
| `/roles/count-assigned-identities` | beta,v2024,v2025,v2026 | v1 |
| `/roles/identity/{id}/roles` | beta,v2024,v2025,v2026 | v1 |
| `/roles/{id}/access-profiles` | beta,v2024,v2025,v2026 | v1 |
| `/roles/{id}/assigned-identities` | beta,v3,v2024,v2025,v2026 | v1 |
| `/saas-management/applications` | beta,v2024,v2025,v2026 | v1 |
| `/saved-objects` | beta,v2024,v2025,v2026 | v1 |
| `/saved-searches` | beta,v3,v2024,v2025,v2026 | v1 |
| `/scheduled-searches` | beta,v3,v2024,v2025,v2026 | v1 |
| `/search` | beta,v3,v2024,v2025,v2026 | v1 |
| `/search-aggregations` | beta,v2024,v2025,v2026 | v1 |
| `/search-count` | beta,v2024,v2025,v2026 | v1 |
| `/search-lite` | v3,v2024,v2025,v2026 | v1 |
| `/segments` | beta,v3,v2024,v2025,v2026 | v1 |
| `/segments/{id}/change-assignments` | beta,v2024,v2025,v2026 | v1 |
| `/send-test-notification` | beta,v2024,v2025,v2026 | v1 |
| `/service-desk-integrations` | beta,v3,v2024,v2025,v2026 | v1 |
| `/set-password` | beta,v3,v2024,v2025,v2026 | v1 |
| `/sim-integrations` | beta,v2024,v2025,v2026 | v1 |
| `/sod-policies` | beta,v3,v2024,v2025 | v1 |
| `/sod-violation-report` | beta,v3,v2024,v2025,v2026 | v1 |
| `/sod-violations` | beta,v3,v2024,v2025,v2026 | v1 |
| `/source-apps` | beta,v2024,v2025,v2026 | v1 |
| `/source-subtypes` | v2026 | v1 |
| `/source-subtypes/machine-account-create-access` | v2026 | v1 |
| `/source-usages` | beta,v3,v2024,v2025,v2026 | v1 |
| `/sources` | beta,v3,v2024,v2025,v2026 | v1 |
| `/sources/stages` | v2024,v2025,v2026 | v1 |
| `/sources/subtypes` | v2025,v2026 | v1 |
| `/sources/{id}/accountAggregationSchedules` | beta | v1 |
| `/sources/{id}/agents-delete` | v2025,v2026 | v1 |
| `/sources/{id}/aggregate-agents` | v2025,v2026 | v1 |
| `/sources/{id}/approval-config` | v2026 | v1 |
| `/sources/{id}/attribute-sync-config` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{id}/classify` | v2024,v2025,v2026 | v1 |
| `/sources/{id}/config-stages` | v2024,v2025,v2026 | v1 |
| `/sources/{id}/connector` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{id}/connectors` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{id}/declassify` | v2025,v2026 | v1 |
| `/sources/{id}/discover-applications` | v2025,v2026 | v1 |
| `/sources/{id}/entitlement-aggregation-schedules` | v2026 | v1 |
| `/sources/{id}/groupAggregationSchedules` | beta | v1 |
| `/sources/{id}/load-accounts` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{id}/load-entitlements` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{id}/load-uncorrelated-accounts` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{id}/machine-account-mappings` | v2024,v2025,v2026 | v1 |
| `/sources/{id}/machine-classification-config` | v2024,v2025,v2026 | v1 |
| `/sources/{id}/native-change-detection-config` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{id}/password-policies` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{id}/provisioning-policies` | v3,v2024,v2025,v2026 | v1 |
| `/sources/{id}/provisioning-policies` | v2027 | v2 |
| `/sources/{id}/remove-accounts` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{id}/schedules` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{id}/source-migration` | v2025,v2026 | v1 |
| `/sources/{id}/subtypes` | v2025,v2026 | v1 |
| `/sources/{id}/synchronize-attributes` | beta,v2024,v2025,v2026 | v1 |
| `/sources/{sourceId}/resources/{resourceId}/correlation-configs` | N/A (future — versionStart: 2027 > current year 2026) | v1 |
| `/sources/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | N/A (future — versionStart: 2027 > current year 2026) | v1 |
| `/sp-config` | beta,v2024,v2025,v2026 | v1 |
| `/ssf` | v2025,v2026 | v1 |
| `/ssf-event` | v2025,v2026 | v1 |
| `/suggested-entitlement-description-approvals` | beta,v2024,v2025,v2026 | v1 |
| `/suggested-entitlement-description-assignments` | beta,v2024,v2025,v2026 | v1 |
| `/suggested-entitlement-description-batches` | beta,v2024,v2025,v2026 | v1 |
| `/suggested-entitlement-descriptions` | beta,v2024,v2025,v2026 | v1 |
| `/suggested-entitlement-descriptions/auto-write-settings` | v2026 | v1 |
| `/summarize-authorization` | beta,v2024,v2025,v2026 | v1 |
| `/summarize-token-rights` | v2026 | v1 |
| `/sync-password` | beta,v2024,v2025,v2026 | v1 |
| `/system-notification-config` | beta,v2024,v2025,v2026 | v1 |
| `/tag-associations` | beta,v2024,v2025,v2026 | v1 |
| `/tag-categories` | beta,v2024,v2025,v2026 | v1 |
| `/tagged-objects` | beta,v3,v2024,v2025,v2026 | v1 |
| `/tagged-objects/{id}/bulk-add` | beta,v3,v2024,v2025,v2026 | v1 |
| `/tags` | beta,v2024,v2025,v2026 | v1 |
| `/task-definitions` | beta,v2024,v2025,v2026 | v1 |
| `/task-execution` | beta,v2024,v2025,v2026 | v1 |
| `/task-status` | beta,v2024,v2025 | v1 |
| `/task-status/pending-tasks` | beta,v2024,v2025 | v1 |
| `/tenant` | beta,v2024,v2025,v2026 | v1 |
| `/tenant-context` | v2024,v2025,v2026 | v1 |
| `/test/api-usage-route` | v2025,v2026 | v1 |
| `/transforms` | beta,v3,v2024,v2025,v2026 | v1 |
| `/translation-catalogs/access-request-recommender` | beta,v2024,v2025,v2026 | v1 |
| `/translation-catalogs/identity-outliers` | beta,v2024,v2025,v2026 | v1 |
| `/translation-catalogs/recommender` | beta,v2024,v2025,v2026 | v1 |
| `/trigger-invocations/status` | beta,v2024,v2025,v2026 | v1 |
| `/trigger-invocations/test` | beta,v2024,v2025,v2026 | v1 |
| `/trigger-invocations/{id}/complete` | beta,v2024,v2025,v2026 | v1 |
| `/trigger-subscriptions` | beta,v2024,v2025,v2026 | v1 |
| `/triggers` | beta,v2024,v2025,v2026 | v1 |
| `/ui-metadata` | beta,v2024,v2025,v2026 | v1 |
| `/user-apps` | beta,v2024,v2025,v2026 | v1 |
| `/users/{id}/invite` | v2024,v2025,v2026 | v1 |
| `/vendors` | beta,v3,v2024,v2025,v2026 | v1 |
| `/verified-credentials` | v2025,v2026 | v1 |
| `/verified-domains` | beta,v2024,v2025,v2026 | v1 |
| `/verified-from-addresses` | beta,v2024,v2025,v2026 | v1 |
| `/violations` | v2026 | v1 |
| `/work-items` | beta,v3,v2024,v2025,v2026 | v1 |
| `/workflow-executions` | beta,v3,v2024,v2025,v2026 | v1 |
| `/workflow-library` | beta,v3,v2024,v2025,v2026 | v1 |
| `/workflow-metrics` | beta,v3,v2024,v2025,v2026 | v1 |
| `/workflow-queue-failures` | v2024,v2025,v2026 | v1 |
| `/workflows` | beta,v3,v2024,v2025,v2026 | v1 |
| `/workflows-agent` | v2026 | v1 |
| `/workflows/{id}/executions` | beta,v3,v2024,v2025,v2026 | v1 |
| `/workgroups` | beta,v2024,v2025,v2026 | v1 |

</details>

---

:::info

SailPoint's API versioning process is subject to change at any time. SailPoint will use reasonable efforts, when possible, to communicate changes that affect users of the API in the appropriate channels in advance of such changes.

:::
