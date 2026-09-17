---
id: ui-plugins-prerequisites
title: Prerequisites
pagination_label: Prerequisites
sidebar_label: Prerequisites
sidebar_position: 1
sidebar_class_name: uiPluginsPrerequisites
keywords: ['ui', 'plugins', 'ui-plugins', 'prerequisites']
description: What you need before building your first UI plugin.
slug: /ui-plugins/prerequisites
tags: ['ui-plugins']
---

Before you scaffold and deploy your first UI plugin, make sure you have the following in place.

## Required software

### Node.js and npm

The SailPoint starter template is an [Angular](https://angular.dev/) application, so you need a current LTS release of [Node.js](https://nodejs.org/en/download) (which includes npm). Node 20 or later is recommended.

### SailPoint CLI

UI plugin workflows are driven entirely by the [SailPoint CLI](/docs/tools/cli). Install it and confirm it is on your `PATH`:

```bash
sail --version
```

If you have not used the CLI before, follow the [CLI documentation](/docs/tools/cli) to install it and configure an environment.

## Authentication

The CLI must be authenticated against the tenant you want to build in. UI plugin commands that reach the backend (`create`, `link`, `upload`, `list`, `delete`) resolve the target tenant from your active CLI environment, and `init` validates your chosen alias against that tenant before scaffolding.

Configure an environment and a personal access token (PAT) with the CLI, then confirm the active environment:

```bash
sail env
```

## Tenant enablement and rights

UI Plugins are an experimental, gated capability. To work with them, your tenant must have the feature enabled, and your user must hold the appropriate rights. The backend enforces a distinct right per operation:

| Operation | Required right |
| --- | --- |
| Create a plugin instance | `idn:plugins-ui:create` |
| Read / list plugin instances | `idn:plugins-ui:read` |
| Link, unlink, or upload assets | `idn:plugins-ui:update` |
| Delete a plugin instance | `idn:plugins-ui:delete` |

If the feature is not enabled for your tenant, backend calls return a "not enabled for this tenant" error. If you are missing a right, the CLI reports which right the operation requires.

## Enable the experimental command group

While UI Plugins are experimental, the `sail ui-plugins` command group is hidden from the CLI's default command discovery. Enable it for your shell session by setting an environment variable:

```bash
export SAIL_EXPERIMENTAL_UI_PLUGINS=1
```

Without it, any `sail ui-plugins` command fails with:

```text
Error: the `sail ui-plugins` command group is experimental and currently disabled. Enable it with `SAIL_EXPERIMENTAL_UI_PLUGINS=1`
```

:::tip

Add the `export` to your shell profile (for example, `~/.zshrc` or `~/.bashrc`) so you do not have to set it in every new terminal.

:::

## Recommended knowledge

The starter template is an Angular project, so familiarity with Angular, TypeScript, HTML, and CSS is helpful. You can also attach the SailPoint UI plugin SDK to an existing web application — see `sail ui-plugins init --path` in the [CLI command reference](/docs/ui-plugins/cli-command-reference).
