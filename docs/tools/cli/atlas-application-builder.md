---
id: cli-atlas-application-builder
title: Atlas Application Builder
pagination_label: Atlas Application Builder
sidebar_label: Atlas Application Builder
sidebar_position: 11
sidebar_class_name: atlas-application-builder
keywords: ['cli', 'atlas application builder', 'marketplace', 'package', 'publish', 'install']
description: Learn how to use the CLI to package, publish, and install SailPoint Identity Security configuration with Atlas Application Builder.
slug: /tools/cli/atlas-application-builder
tags: ['CLI']
---

Learn how to use the SailPoint CLI to package SailPoint Identity Security configuration, publish it with Atlas Application Builder, and install it into another tenant.

Use Atlas Application Builder to package Identity Security configuration objects, such as transforms, forms, workflows, widgets, and UI plugins. You can publish that package as a versioned, shareable unit, and you can install it into another tenant in a single, previewed, repeatable step. Instead of rebuilding the same objects by hand in every tenant, you author them once and distribute them with integrity guarantees and a clear upgrade path. Each artifact carries a SHA-256 digest, and each version follows semantic versioning.

You work with Atlas Application Builder through the `sail marketplace` command group in the SailPoint CLI. These commands make it easy to author, publish, compare, and install packages. You can also use the aliases `sail mp` and `sail mkt`.

- **Publishers** scaffold a package, add objects to it, build a signed artifact, and publish a version.
- **Consumers** install a published version into their tenant, preview exactly what it will create or update, and confirm.

- [Before you begin](#before-you-begin)
- [Key concepts](#key-concepts)
- [Package lifecycle](#package-lifecycle)
- [Author and publish a package](#author-and-publish-a-package)
  - [Scaffold the package](#scaffold-the-package)
  - [Add objects](#add-objects)
  - [Build the artifact](#build-the-artifact)
  - [Push privately for testing](#push-privately-for-testing)
  - [Publish for review](#publish-for-review)
- [Compare package versions](#compare-package-versions)
  - [Read the diff output](#read-the-diff-output)
- [Install a package](#install-a-package)
  - [Find a package to install](#find-a-package-to-install)
  - [Start the installation](#start-the-installation)
  - [Review the preview and confirm in Identity Security](#review-the-preview-and-confirm-in-identity-security)
  - [Follow the installation](#follow-the-installation)
- [Verify your changes](#verify-your-changes)
- [Troubleshooting](#troubleshooting)
  - [Diagnose an installation](#diagnose-an-installation)
  - [Common symptoms](#common-symptoms)
  - [Get help](#get-help)
- [Command reference](#command-reference)

## Before you begin

You need these to use Atlas Application Builder:

- **The SailPoint CLI**, installed and authenticated against your tenant. To learn how to install and configure the CLI, refer to the [Command Line Interface](/docs/tools/cli). Use the `sail environment` commands to select the tenant you want to work with.
- **A tenant with Atlas Application Builder enabled.** If a `sail marketplace` command returns a `404` error indicating the feature isn't available, contact SailPoint to have it turned on.
- **Administrative rights in the tenant.** A `403` error from a command means your account is missing the right the operation needs.
- **For publishing UI plugins:** a plugin that you have already built with its own toolchain. Atlas Application Builder packages the compiled output, but it never builds the plugin for you. To learn more about UI plugins, refer to [UI Plugins](/docs/ui-plugins).

:::tip

You can play both roles while you test. Publish from one tenant, and install into another. Run `sail environment use <name>` to point the CLI at the right tenant before each phase.

:::

Every command and its flags are documented in the CLI itself. Run `sail marketplace --help` to list all the `marketplace` commands, or add `--help` to any command to see its full flag set and examples.

## Key concepts

| Term | Meaning |
| --- | --- |
| Package | A named, versioned bundle of Identity Security objects. On disk, a package is a directory the CLI creates and manages, with your objects under an `assets/` folder. |
| Package ID | The system-generated GUID that identifies a package listing. The backend assigns it on the first push, and the CLI writes it into your package's `metadata.json` file. |
| Version | A semantic version (for example, `1.2.0`) that identifies a published release of a package. The catalog service handles versioning, and each version is published and installed independently. |
| Object (asset) | One Identity Security object inside the package, such as a workflow, transform, widget, or UI plugin. Each object is stored under `assets/<type>/` and pinned in the manifest by path and SHA-256 digest. |
| Package files | The files in a package directory: `metadata.json`, the asset inventory, a README, and a changelog. The CLI and the catalog service manage these files, so you rarely need to edit them by hand. |
| Visibility | **Private** (hidden) packages are for the publishing tenant's own testing. **Public** packages are visible to other tenants and require SailPoint review. |
| Installation | A record of installing one version into a tenant. Each installation has an `installationId` and moves through preview and apply stages to a terminal status. |
| Preview and findings | Before an installation applies changes, it previews the planned action for each object (`CREATE` or `UPDATE`) and reports findings, which are warnings or blockers. |

## Package lifecycle

A package moves from an empty directory to installed objects in a tenant through a short, ordered set of commands. You run the authoring commands inside a package directory, and you run the installation commands against the target tenant.

You can run `diff` at any point to compare what you have locally against a published version, or to compare two published versions against each other.

## Author and publish a package

Run every command in this section from the publishing tenant's environment.

### Scaffold the package

The `init` command creates a new package directory named after the package and sets up its files. It only prepares files locally, so it doesn't contact the tenant:

```shell
sail marketplace init employee-lifecycle
cd employee-lifecycle
```

That is all you need to start. The CLI and the catalog service handle package details, such as versioning, for you.

### Add objects

The `add` command pulls objects into the package. Each object type has its own repeatable flag. These are the values you can pass to a flag:

- A bare ID or name, which the CLI fetches from the tenant
- An SRN
- A local file path
- A UI plugin workspace directory (`--ui-plugin` only)
- `"*"` for every object of that type. Quote the `*` so your shell doesn't expand it.

The CLI writes each object under `assets/<type>/` and tracks it automatically.

```shell
# Add every workflow in the tenant
sail marketplace add --workflow "*"

# Add specific objects by ID, name, or SRN (flags are repeatable)
sail marketplace add \
  --transform "DateFormatLDAPtoISO" \
  --form "srn:acme-solar:isc:forms:ec09267e895a41ec82435ed11ef1f534"

# Add every widget (the flag also accepts --widgets and --widget-spec)
sail marketplace add --widget "*"

# Add from a local file, overwriting without a prompt
sail marketplace add --workflow ./onboarding.json --force

# Add a locally built UI plugin workspace (a directory with sp-ui-plugin.json)
sail marketplace add --ui-plugin ../demo-plugin-one
```

These are the supported type flags: `--transform`, `--form`, `--workflow`, `--widget`, and `--ui-plugin`. Singular and plural spellings are equivalent (for example, `--workflow` and `--workflows`).

If a file already exists with identical content, the CLI leaves it untouched. If the content differs, the CLI prompts you before it overwrites the file. To overwrite without a prompt, use the `--force` flag.

### Build the artifact

The `build` command packages `assets/` into a single, deterministic zip file named `<name>.zip` and stamps it with a SHA-256 integrity digest. The same contents always produce the same verifiable artifact:

```shell
sail marketplace build
```

The CLI reports the artifact it built:

```text
Built employee-lifecycle.zip (12345 bytes, SHA-256 5b36b0…)
```

To write the artifact to a different directory, use the `--output-dir` flag.

### Push privately for testing

The `push` command creates the package listing and uploads the artifact as a private `DRAFT` version, hidden from other tenants:

```shell
sail marketplace push
```

On the first push, the CLI writes the assigned `packageId` back into `metadata.json`. On subsequent pushes, the CLI updates the same `DRAFT`. If the digest hasn't changed, the CLI doesn't upload the artifact again.

:::info

`push` always marks the package as hidden, so you can iterate and install it into your own tenant before anyone else can see it. The package becomes visible to others only when you run `publish --public`.

:::

### Publish for review

The `publish` command submits the current `DRAFT` version for SailPoint review. Without a flag, the package stays hidden. With the `--public` flag, the command requests a publicly discoverable listing:

```shell
# Submit for review and remain private
sail marketplace publish

# Submit for review and request a public listing
sail marketplace publish --public
```

If `push` already uploaded the current digest, the review starts without uploading the artifact again.

To publish an updated package later, run `build`, `push`, and `publish` again. The catalog service handles versioning, and you can install each published version independently.

## Compare package versions

The `diff` command compares the contents of two package versions. It shows what was added (`+`), removed (`-`), or changed (`*`), grouped by object type and asset. It’s the fastest way to confirm that what you built is exactly what got published and to review changes between versions.

```shell
# Inside a package folder, with no arguments:
# compare the latest published version against your current workspace
sail marketplace diff

# Compare your workspace against a specific published version
sail marketplace diff 1.0.0

# Compare two published versions against each other
sail marketplace diff 1.0.0 1.1.0 --package-id <package-id>

# Compare two local package directories, without a tenant
sail marketplace diff ./pkg-v2 ./pkg-v1 --local

# Get machine-readable output for scripts
sail marketplace diff 1.0.0 1.1.0 --output json
```

With `--output json`, the command returns one JSON document with no progress lines. A failed diff returns a non-zero exit code, so your scripts can branch on success.

### Read the diff output

The header names exactly what was compared, in the form `<from> -> <to>`. Under each object type group, a marker precedes each asset:

```text
1.0.0 -> 1.1.0
ui-plugins
  + demo-plugin-one
transforms
  - lowerCase.json
  * DateFormat.json
```

The markers are relative to the target, which is the second reference:

| Marker | Meaning | In the example |
| --- | --- | --- |
| `+` | The target has it, and the base doesn't. | `demo-plugin-one` was added in `1.1.0`. |
| `-` | The base has it, and the target doesn't. | `lowerCase.json` was removed in `1.1.0`. |
| `*` | Both have it, but the content differs. | `DateFormat.json` changed between the two versions. |

For a changed UI plugin, the output can break the plugin down to the individual files that differ.

:::info

If a published version reports no contents, everything on the other side appears as `+`, and the CLI prints a note. This usually means that version's contents haven't been recorded yet, not that you changed everything. Publish a new version to populate the contents.

:::

## Install a package

Run every command in this section against the consuming tenant. An installation previews the change and waits for the outcome, so nothing is applied until you know the plan and, when required, confirm it in Identity Security.

### Find a package to install

The `list packages` command shows every package your tenant can see. This includes your tenant's own packages in any status, plus published, visible packages from other tenants. For each package, the command shows its ID, name, latest version, publisher, and status:

```shell
sail marketplace list packages
```

Use the package ID as the `--package-id` value when you install. To page through results, use the `--limit` and `--offset` flags. To get output for scripting, use the `--json` flag:

```shell
sail marketplace list packages --json --limit 25
```

### Start the installation

The `install` command starts the installation and follows it until it reaches a terminal status. If you omit the `--version` flag, the command installs the latest published version.

```shell
# Install the latest version by package ID
sail marketplace install --package-id 7f3a2c1e-9b44-4c0a-8f21-2d5e6a71c3d0

# Install a specific version
sail marketplace install --package-id 7f3a2c1e-9b44-4c0a-8f21-2d5e6a71c3d0 --version 1.0.0
```

If you run `install` inside a package directory, the CLI gets the package ID from `metadata.json`, so you don't need to pass it:

```shell
sail marketplace install
```

To reinstall unchanged contents, use the `--force` flag. To limit how long the CLI waits, use the `--timeout` flag:

```shell
sail marketplace install --package-id 7f3a2c1e-9b44-4c0a-8f21-2d5e6a71c3d0 --force
sail marketplace install --package-id 7f3a2c1e-9b44-4c0a-8f21-2d5e6a71c3d0 --timeout 30m
```

The command prints an `installationId`. Keep it, because you need it to follow the installation, inspect it again, or reference it in a support ticket.

### Review the preview and confirm in Identity Security

For each packaged object, the preview reports its planned action (`CREATE` or `UPDATE`) and any findings.

When the installation reaches `PREVIEW_READY`, you decide whether to apply it in Identity Security. The tenant doesn't change until you confirm there. Failed or discarded installations list their findings under one heading.

### Follow the installation

The `status` command inspects an installation:

```shell
sail marketplace status --installation-id <id>
```

By default, `status` checks once. These flags change its behavior:

| Flag        | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| `--wait`    | Follow the installation until it reaches a terminal status. |
| `--timeout` | Limit how long `--wait` follows the installation.           |
| `--preview` | Include findings and per-object detail.                     |
| `--json`    | Return one machine-readable JSON document.                  |

```shell
sail marketplace status --installation-id <id> --preview
sail marketplace status --installation-id <id> --wait --timeout 30m
sail marketplace status --installation-id <id> --preview --json
```

A failed installation returns a non-zero exit code, so your scripts can branch on success.

## Verify your changes

Every Atlas Application Builder action produces an observable change. You can confirm each change in three ways: with the CLI, with a raw API call (`sail api get <path>`), or in the Identity Security user interface.

| After you... | You should see... | How to verify |
| --- | --- | --- |
| `push` (private) | A package listing with a `packageId`, hidden from other tenants, holding a `DRAFT` version. | **CLI:** `sail marketplace list packages` shows the package, and the printed `packageId` is written to `metadata.json`.<br/>**API:** `sail api get /marketplace/v1/packages/<id>` |
| `publish` | The version is submitted for review. With `--public`, it becomes discoverable to other tenants once approved. | **CLI:** `sail marketplace list packages` (check the latest version's status and visibility).<br/>**API:** `sail api get /marketplace/v1/packages/<id>` |
| `publish` (contents recorded) | The version's asset inventory is queryable and matches what you packaged. | **API:** `sail api get /marketplace/v1/packages/<id>/contents?version=1.0.0`<br/>**CLI:** `sail marketplace diff 1.0.0`, run from the workspace, reports no differences. |
| `install` (preview) | A planned action (`CREATE` or `UPDATE`) for each object, plus any findings, before the tenant changes. | **CLI:** `sail marketplace status --installation-id <id> --preview`<br/>**UI:** Confirm or cancel the preview in Identity Security. |
| `install` (complete) | The packaged objects exist in the tenant, created or updated as previewed. | **CLI:** `sail marketplace status --installation-id <id>` reports `COMPLETE`.<br/>**API:** Query the object type, for example `sail api get /v2024/transforms` or `sail api get /beta/workflows`.<br/>**UI:** Open the matching Identity Security admin page (Transforms, Workflows, Forms, Widgets, UI plugins) and find the object. |

The `/contents` endpoint returns one version's exact inventory. It's the same data `diff` compares against.

## Troubleshooting

You can diagnose and fix most Atlas Application Builder issues from the CLI:

- **Read the error.** Atlas Application Builder errors state the failed step, the HTTP status, a tracking ID, and a suggested next step. The next step is usually the fix. Here is an example:

  ```text
  Starting the install failed: 401 Unauthorized
  Tracking ID: 9b3f2c… (include this in a SailPoint support ticket)
  Authentication failed. Check your SailPoint environment and credentials and re-authenticate.
  ```

- **Run a health check.** `sail marketplace list packages` returns listings only when authentication, your environment, and Atlas Application Builder access are all working, so it quickly isolates setup problems.
- **Inspect instead of guessing.** Use `status --preview` for installations, `diff` for content questions, and `sail api get` to read the catalog or your tenant directly.

### Diagnose an installation

Most questions come up during installation, and you can inspect every installation yourself.

1. See the plan and any findings:

   ```shell
   sail marketplace status --installation-id <id> --preview
   ```

   Each object shows `CREATE` or `UPDATE`, and findings explain any warnings or blockers.

2. To get the complete detail, including per-module findings and error codes, get every field as JSON:

   ```shell
   sail marketplace status --installation-id <id> --preview --json
   ```

3. Act on the status:

   - `PREVIEW_READY`: The CLI is waiting on your decision in Identity Security. Confirm or cancel there, and then resume with `sail marketplace status --installation-id <id> --wait`.
   - `PREVIEW_FAILED` or `FAILED`: Read the findings. They name the object and the reason, such as a dependency missing in the tenant. Fix the cause, and then reinstall.
   - `COMPLETE`: The installation is done. Any warning findings appear when you use the `--preview` flag.

### Common symptoms

| Symptom | Diagnose and fix |
| --- | --- |
| `401 Unauthorized` on any command | Your session isn't authenticated for the active environment. Re-authenticate and confirm the selected environment with `sail environment`. For more information, refer to [Command Line Interface](/docs/tools/cli). |
| `403 Forbidden` | Your account lacks the right the operation needs. Ask a tenant administrator to grant it, and then retry. |
| `404` for a `sail marketplace` command | Atlas Application Builder isn't enabled on this tenant. Confirm with `sail marketplace list packages`. If that command also returns a `404`, contact SailPoint to enable Atlas Application Builder. |
| `add` can't find an object | The ID, name, or SRN matches nothing in the tenant. Verify it (for example, `sail api get /v2024/transforms`), or pass a local file path instead. |
| `build` or `push`: "package no longer matches `assets/`" | Files under `assets/` changed outside the CLI. Run `add` again for anything you meant to include, delete anything you didn't, and then run `build` again. |
| `push` or `publish`: `409 Conflict` | This version is already in review, or it has no new changes to publish. Make your changes, and then run `build`, `push`, and `publish` again. |
| `publish` can't find a `packageId` | Run `push` first, because it creates the listing and records the ID. You can also run `publish` from the package directory so the CLI picks up the ID automatically. |
| `diff` shows everything as `+` | The compared version has no recorded contents yet, and the CLI prints a note. Publish a version to populate the contents, or compare two local directories with `--local`. |
| `diff` used an unexpected version | The header shows the version it resolved to and flags an unpublished one (for example, `1.2.0 (DRAFT)`). Pass an explicit version to compare against a specific one. |
| Installation ends with `PREVIEW_FAILED` or `FAILED` | Read the findings, as described in [Diagnose an installation](#diagnose-an-installation). Fix the named cause in the tenant, and then reinstall. |
| The CLI stopped waiting (timeout) | The installation keeps running on the server. Resume following it with `sail marketplace status --installation-id <id> --wait`. |
| Installation blocked by an alias already in use | Another plugin in the tenant uses this package's alias. Remove or disable that plugin, or change this package's alias, and then reinstall. |

### Get help

If these steps don't resolve your issue, or if you've found a bug, contact SailPoint. Include these details so SailPoint can trace the issue quickly:

- The exact command you ran and its full output.
- The tracking ID from the error message. For installation or status issues, include the `installationId` as well.
- The tenant or environment, and the package ID and version involved. Run `sail api get /marketplace/v1/packages/<id>` to get the package ID and version.

## Command reference

All of these commands are under `sail marketplace`. To see every flag and example for a command, run it with `--help`.

| Command | Purpose | Key flags |
| --- | --- | --- |
| `init <name>` | Scaffold a new package directory. | None |
| `add` | Add objects to the current package. | `--transform`, `--form`, `--workflow`, `--widget`, `--ui-plugin` (plural spellings too), `--force` |
| `list packages` | List the packages your tenant can see (its own and public packages). | `--limit`, `--offset`, `--json` |
| `build [dir]` | Build the signed zip artifact. | `--output-dir` |
| `push [dir]` | Upload a private `DRAFT` for the publisher's own testing. | None |
| `publish [dir]` | Submit the `DRAFT` for SailPoint review. | `--public` |
| `diff [from] [to]` | Compare version contents, local or published. | `--package-id`, `--local`, `--output text\|json` |
| `install` | Install a published version into the tenant. | `--package-id`, `--version`, `--force`, `--timeout` |
| `status` | Inspect or follow an installation. | `--installation-id`, `--preview`, `--wait`, `--timeout`, `--json` |
