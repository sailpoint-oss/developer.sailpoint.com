---
id: ui-plugins-cli-command-reference
title: CLI Command Reference
pagination_label: CLI Command Reference
sidebar_label: CLI Command Reference
sidebar_position: 3
sidebar_class_name: uiPluginsCliReference
keywords: ['ui', 'plugins', 'ui-plugins', 'cli', 'commands', 'reference']
description: Reference for every sail ui-plugins command and the sp-ui-plugin.json manifest.
slug: /ui-plugins/cli-command-reference
tags: ['ui-plugins']
---

All UI plugin workflows run through the `sail ui-plugins` command group in the [SailPoint CLI](/docs/tools/cli). This page documents each command and the `sp-ui-plugin.json` manifest.

:::info Experimental

The command group is hidden by default. Enable it for your shell session with `export SAIL_EXPERIMENTAL_UI_PLUGINS=1`. Backend commands also require the [UI Plugins feature to be enabled for your tenant](/docs/ui-plugins/prerequisites) and the appropriate `idn:plugins-ui:*` rights.

:::

## Command summary

| Command | Purpose | Calls the backend? |
| --- | --- | --- |
| [`init`](#init) | Scaffold a new workspace or attach the SDK to an existing project | Read-only (alias validation) |
| [`create`](#create) | Register a plugin instance in the current tenant | Yes |
| [`link`](#link) | Load your local dev server inside ISC | Yes |
| [`unlink`](#unlink) | Remove your local dev override | Yes |
| [`upload`](#upload) | Deploy compiled assets as a new asset bundle | Yes |
| [`list`](#list) | List plugin instances in the current tenant | Yes |
| [`delete`](#delete) | Delete a plugin instance | Yes |
| [`validate-manifest`](#validate-manifest) | Validate `sp-ui-plugin.json` structure offline | No |

## init

Get a UI plugin project to a clean starting point. `init` has two flows on one command:

- **New workspace** (default): scaffolds a new Angular plugin workspace from the SailPoint UI plugin templates into a new directory named after the plugin alias.
- **Existing workspace** (`--path <dir>`): makes an existing project SDK-ready by generating a valid `sp-ui-plugin.json` and dropping the plugin guide, without touching unrelated files.

`init` prompts for the minimum inputs, each of which has an equivalent flag so the command can run headless in CI/CD. Providing `--name` (or the positional plugin name) skips the interactive prompts. The alias is validated against your tenant immediately.

`init` does **not** install dependencies, build, or register the plugin. After it finishes, run `npm install` and `sail ui-plugins create` yourself.

| Flag | Description |
| --- | --- |
| `--name` | Plugin display name (or pass it as the positional argument) |
| `--alias` | Tenant-unique plugin alias (defaults to a slug of the name) |
| `--path` | Attach the SDK to the existing project at this directory instead of scaffolding a new workspace |
| `--out-dir` | Build output directory (required when attaching with `--path`) |
| `--port` | Local dev server port when attaching with `--path` (default `4200`) |
| `--force` | Overwrite the plugin files `init` manages if they already exist |

```bash
# Scaffold a new Angular workspace (interactive prompts for name/alias)
sail ui-plugins init

# Scaffold headlessly (no prompts)
sail ui-plugins init "My Plugin" --alias my-plugin

# Attach the SDK to an existing project
sail ui-plugins init "My Plugin" --path ./existing-app --out-dir ./dist/app --port 4200
```

## create

Registers a UI plugin instance in the current tenant from the workspace manifest at `./sp-ui-plugin.json`. The manifest is validated locally first; only the `manifest` section is sent to the backend — the local `build` section is never transmitted. The workspace alias becomes the instance identifier, and an alias already in use in the tenant is reported as a conflict.

| Flag | Description |
| --- | --- |
| `--dry-run` | Validate the manifest and print the payload that would be sent, without creating the instance (also runs a read-only alias availability check) |
| `--private` | Restrict the plugin to your own identity on every slot |
| `--restrict-to-users` | Restrict the plugin to the given user identity GUIDs on every slot (comma-separated) |
| `--json` | Print the raw backend response on success |

When both `--private` and `--restrict-to-users` are supplied, each slot's `restrictToUsers` is the de-duplicated union of your identity and the supplied GUIDs. Both overrides replace any `restrictToUsers` declared in the manifest.

```bash
# Create from ./sp-ui-plugin.json
sail ui-plugins create

# Preview the payload (and check alias availability) without creating
sail ui-plugins create --dry-run

# Restrict the plugin to yourself on every slot
sail ui-plugins create --private
```

## link

Registers your local development server with a plugin instance so ISC loads your local code in the live tenant. Run it from within an initialized workspace; the alias is read from `./sp-ui-plugin.json` and the tenant is resolved from your CLI authentication.

Linking binds your dev server port to your own identity (a per-developer override). It does not affect other developers or the plugin's deployed assets. The port is resolved from `--port`, then `build.port` in the manifest, then the default `4200`.

On success the command prints a single fully qualified developer URL of the form `https://<tenant>/ui/plugin/<plugin-instance-id>?spPluginDev=<alias>` to stdout (informational messages go to stderr, so the URL can be piped cleanly). Open it in a browser to load your local code live, with a local-dev badge.

| Flag | Description |
| --- | --- |
| `--port` | Custom port to use instead of the manifest's `build.port` value |

```bash
# Link using the port from build.port (or the 4200 default)
sail ui-plugins link

# Link an explicit port, overriding build.port
sail ui-plugins link --port 4300
```

:::caution

`link` does not start your dev server. Start it yourself (for example, `npm run start`) on the port you link before opening the developer URL.

:::

## unlink

Removes your local development override so ISC stops loading your local code and returns to serving the deployed plugin. It affects only your own override — never the deployed plugin or other developers'. Unlinking is idempotent: it is safe to run whether or not a link currently exists.

```bash
sail ui-plugins unlink
```

## upload

Uploads the compiled UI plugin assets from a workspace to its plugin instance. **Uploading is a deploy step, not a build step** — it uploads the assets already present in the build output directory and never runs your framework's build for you. Compile the project first (for example, `npm run build`), then upload.

The output directory is resolved from `--out-dir`, then `build.outDir` in the manifest. If the resolved directory is missing or empty, the command fails fast. On success the assets become the plugin instance's active asset bundle, hosted immutably behind the CDN.

| Flag | Description |
| --- | --- |
| `--out-dir` | Custom output directory to use instead of the manifest's `build.outDir` value |

```bash
# Upload the compiled assets from build.outDir
sail ui-plugins upload

# Upload from an explicit directory, overriding build.outDir
sail ui-plugins upload --out-dir ./dist/my-app
```

## list

Lists the plugin instances registered in the current tenant. All instances are returned — the command pages through the backend internally. Results are shown as a table sorted by alias, with the columns Alias, Id, Name, and Created.

| Flag | Description |
| --- | --- |
| `--json` | Print the raw, untruncated plugin instance list as a JSON array |

```bash
sail ui-plugins list
sail ui-plugins list --json
```

## delete

Deletes a plugin instance from the current tenant, identified by either its alias or its plugin ID. The identifier type is detected by its shape: a value in UUID form is treated as a plugin ID, and anything else is treated as an alias and resolved to its plugin ID first. Before deleting, the command prints a summary and prompts for confirmation (the prompt defaults to No); if the instance has an active asset bundle, it warns you first.

| Flag | Description |
| --- | --- |
| `-F`, `--force` | Bypass the confirmation prompt (does not bypass safety checks) |
| `--json` | Print the deleted plugin instance as JSON |

If an alias resolves to more than one instance, the command lists the conflicting plugin IDs and stops, even with `--force`; re-run with a specific plugin ID.

```bash
# Delete by alias (prompts for confirmation)
sail ui-plugins delete access-request-plugin

# Delete by plugin ID
sail ui-plugins delete 2c918085-7a1e-1b2c-817a-1e1b2c000000

# Skip the confirmation prompt
sail ui-plugins delete access-request-plugin --force
```

## validate-manifest

Performs an offline structural validation of `./sp-ui-plugin.json`. Its alias is `validate`. It checks the JSON shape, required fields and types, rejects unknown fields, verifies the supported config schema version, and confirms the required policy objects are present (an empty object `{}` is accepted).

It does **not** contact the backend, so it does not check alias availability, slot registry membership, security policy directive values, or other tenant-specific rules. Use `create` for full backend validation.

```bash
sail ui-plugins validate-manifest
sail ui-plugins validate
```

## The `sp-ui-plugin.json` manifest

Every workspace contains an `sp-ui-plugin.json` file describing the plugin. It has two top-level sections: `manifest` (sent to the backend) and `build` (local CLI configuration only).

```json
{
    "version": 1,
    "manifest": {
        "alias": "my-plugin",
        "name": { "en": "My Plugin" },
        "description": { "en": "My Plugin" },
        "apiScopes": ["sp:scopes:all"],
        "contentSecurityPolicies": {},
        "permissionPolicy": {},
        "iframeAllow": {},
        "slots": [{ "slotId": "full-page" }]
    },
    "build": {
        "outDir": "./dist/my-plugin/browser",
        "port": 4200
    }
}
```

| Field | Required | Description |
| --- | --- | --- |
| `version` | Yes | Config schema version. Currently only `1` is supported. |
| `manifest.alias` | Yes | Tenant-unique key for the plugin; also the deploy lookup key. |
| `manifest.name` | Yes | Localized display name (locale → string). At least one locale entry is required. |
| `manifest.description` | Yes | Localized description (locale → string). At least one locale entry is required. |
| `manifest.apiScopes` | No | API scopes the plugin requires. |
| `manifest.contentSecurityPolicies` | Yes | CSP directives (directive → values). Use `{}` if the plugin declares none. |
| `manifest.permissionPolicy` | Yes | Permission-policy directives. Use `{}` if the plugin declares none. |
| `manifest.iframeAllow` | Yes | iframe `allow` directives. Use `{}` if the plugin declares none. |
| `manifest.slots` | Yes | The UI slots the plugin occupies; at least one is required. Each slot needs a `slotId` and may declare `requiredCapabilities` and `restrictToUsers`. |
| `build.outDir` | No | Local build output directory that `upload` deploys from. Never sent to the backend. |
| `build.port` | No | Default local dev server port used by `link`. Never sent to the backend. |

:::note

The `build` section is stripped from everything sent to the backend. It exists purely so the CLI knows where your compiled assets are (`outDir`) and which port your dev server uses (`port`).

:::
