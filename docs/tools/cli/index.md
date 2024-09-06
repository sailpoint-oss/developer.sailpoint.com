---
id: cli
title: Command Line Interface
pagination_label: Command Line Interface
sidebar_label: CLI
sidebar_position: 1
sidebar_class_name: cli
keywords: ['cli']
description: Terminal-based tool for interaction with ISC.
slug: /tools/cli
tags: ['CLI']
---

## Start using the CLI

The SailPoint CLI is a terminal-based tool you can use to to interact with your Identity Security Cloud (ISC) tenant. The CLI provides a text-based environment you can use to run operations known as "commands" to interact with your tenant however you want.

You can use the CLI to perform many functions you would have otherwise used Postman or custom scripts to perform before. For example, you can use the CLI to call the SailPoint APIs to do whatever you want in your ISC tenant, and you can do all this directly on the command line, with minimal setup.

<div class="text--center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/JInlFmABuO8?si=CE8fw3RB1w7qFESv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Learn how to use the SailPoint command line interface (CLI) in this guide.

![Sail](https://github.com/sailpoint-oss/sailpoint-cli/blob/main/assets/img/vhs/Sail.gif?raw=true)

## Contents

- [Start using the CLI](#start-using-the-cli)
- [Contents](#contents)
- [Get the CLI](#get-the-cli)
  - [Windows](#windows)
  - [MacOS](#macos)
  - [Linux](#linux)
    - [Deb Package](#deb-package)
    - [RPM Package](#rpm-package)
- [Configuration](#configuration)
  - [OAuth Authentication](#oauth-authentication)
  - [PAT Authentication](#pat-authentication)
- [Environment variable configuration](#environment-variable-configuration)
- [Usage](#usage)
- [GitHub](#github)
- [Contribution](#contribution)
- [Questions](#questions)


## Get the CLI

To install the SailPoint CLI: use a package manager for the OS of your choice. Prebuilt binaries for OS X, Windows, and Linux are provided in each [release](https://github.com/sailpoint-oss/sailpoint-cli/releases).

### Windows

:::info

Note this installer is only compatible with 64 bit Windows.

:::

Download the latest release from the [releases page](https://github.com/sailpoint-oss/sailpoint-cli/releases). The release should include an MSI file named `sail_x.x.x_windows_amd64.msi` that can be installed on Windows, with `x.x.x` being the version of the most recent release.

To install the MSI file, double click on it and follow the prompts in the installer.

### MacOS

MacOS users can use [Homebrew](https://brew.sh/) to install the CLI. Run these commands in your terminal:

```bash
brew tap sailpoint-oss/tap && brew install sailpoint-cli
```

Then make sure you can run the `sail` command.

### Linux

Each release on the [releases page](https://github.com/sailpoint-oss/sailpoint-cli/releases) includes a tarball that can be extracted and run on Linux. Or you can install using the available .deb or .rpm packages.

#### Deb Package

Download the specific .deb package from the release you wish to install

Then install it using one of the following commands, with the `x.x.x` being the version of the most recent release.

```bash
sudo apt install ./sail_x.x.x_linux_amd64.deb
```

```bash
sudo apt install /path/to/deb/package/sail_x.x.x_linux_amd64.deb
```

#### RPM Package

Download the specific .rpm package from the release you wish to install

Then install it using one of the following commands, with the `x.x.x` being the version of the most recent release.

```bash
sudo yum localinstall ./sail_x.x.x_linux_amd64.rpm
```

```bash
sudo yum localinstall /path/to/rpm/package/sail_x.x.x_linux_amd64.rpm
```

## Configuration

To configure the CLI to connect and authenticate to your ISC tenant, you must do the following:

- Find your tenant name. To learn how to find it, refer to [Getting Started](/api/getting-started#find-your-tenant-name). The CLI will use this tenant name to connect to your ISC instance.
- OAuth
- PAT | Create a personal access token (PAT). Make sure to note the "Client ID" and "Client Secret." The CLI needs this information to authenticate successfully. To learn how to create a PAT, refer to [Personal Access Tokens](/api/authentication#personal-access-tokens).

To configure your first environment for OAuth run the following command:

```bash
sail env {environment}
```

with `{environment}` being the name of the environment you wish to configure.

You will be prompted for the following information:

- The Tenant URL - The web URL used to access your Identity Security Cloud tenant (ex. https://tenant.identitynow.com), this is used during the OAuth process.
- The API URL - The API URL used to access your Identity Security Cloud tenant (ex. https://tenant.api.identitynow.com), this is used for the api calls made by certain commands.

### OAuth Authentication

With the default environment values populated you can immediately begin using the CLI with OAuth authentication. Just make sure OAuth is your selected authentication method, this can be done by running `sail set auth oauth`.

### PAT Authentication

After you have configured your environment, if you want to use PAT authentication, run the `sail set pat` command. You can then provide your PAT client ID and client secret.

![Configure PAT](https://github.com/sailpoint-oss/sailpoint-cli/blob/main/assets/img/vhs/configure/configure-pat.gif?raw=true)

Once you have provided your client ID and client secret, you can swap your auth method to PAT using `sail set auth pat`.

## Environment variable configuration

You can also store your configuration in environment variables. This can be useful when you are using the CLI in an automated environment like a continuous integration and continuous deployment (CI/CD) pipeline. In these types of scenarios, consuming the configuration from environment variables would be easier than creating the configuration file.

To export the environment variables on **Linux/Mac**, open your terminal app and run these commands:

```shell
export SAIL_BASE_URL=https://{tenant}.api.identitynow.com
export SAIL_CLIENT_ID={clientID}
export SAIL_CLIENT_SECRET={clientSecret}
```

To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like `~/.bash_profile`.

To store your configuration in environment variables on **Windows**, run Powershell as an administrator and run these commands:

```powershell
$env:SAIL_BASE_URL=https://{tenant}.api.identitynow.com
$env:SAIL_CLIENT_ID={clientID}
$env:SAIL_CLIENT_SECRET={clientSecret}
```

To get your environment variables to persist across PowerShell sessions, run this command instead:

```powershell
[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://{tenant}.api.identitynow.com')
[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','{clientID}')
[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','clientSecret}')
```

## Usage

Run the `sail` command for an overview of available commands and flags. You can use the `-h` flag with any command to see additional options for each command:

These commands are available:

- `connectors`: This command is a CLI interface for the SaaS Connectivity platform. The CLI is the best way to create and manage SaaS connectors within your tenant. For more information about the `connectors` command, refer to the CLI [Connectors guide](/tools/cli/connectors).
- `search`: Run this command to access ISC search functionality within the CLI. For more information about the `search` command, refer to the CLI [Search guide](/tools/cli/search).
- `set`: Run this command to configure your CLI settings. For more information about the `set` command, refer to the CLI [Set guide](/tools/cli/set).
- `spconfig`: Run this command to access ISC SP Config functionality. For more information about the `spconfig` command, refer to the CLI [SPConfig guide](/tools/cli/spconfig).
- `transform`: This command is a CLI interface that makes it easy to create, manage, and test transforms. For more information about the `transform` command, refer to the CLI [Transforms guide](/tools/cli/transforms).
- `va`: Run this command to access VAs connected to your tenant. For more information about the `va` command, refer to the CLI [VA guide](/tools/cli/va).
- `cluster`: Run this command to access VA clusters connected to your tenant. For more information about the `cluster` command, refer to the CLI [Clusters guide](/tools/cli/cluster).
- `workflow`: Run this command to create and manage workflows within the CLI. For more information about the `workflow` command, refer to the CLI [Workflows guide](/tools/cli/workflow).

## GitHub

You will find the SailPoint GitHub CLI repo here: https://github.com/sailpoint-oss/sailpoint-cli

Please use GitHub [issues](https://github.com/sailpoint-oss/sailpoint-cli/issues) to [submit bugs](https://github.com/sailpoint-oss/sailpoint-cli/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here) or make [feature requests](https://github.com/sailpoint-oss/sailpoint-cli/issues/new?assignees=&labels=&template=feature-request.md&title=%5BFeature%5D+Your+Feature+Request+Here).

## Contribution

Do you have an idea to help improve the CLI? You can contribute directly!

Before you contribute, you must sign our [CLA](https://cla-assistant.io/sailpoint-oss/sailpoint-cli) and read the [Contribution Guidelines](https://github.com/sailpoint-oss/developer.sailpoint.com/blob/main/CONTRIBUTING.md).

## Questions

If you have questions about the CLI, don't hesitate to reach out on the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss!
