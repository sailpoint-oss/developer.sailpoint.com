---
id: cli
title: CLI
pagination_label: CLI
sidebar_label: CLI
sidebar_position: 1
sidebar_class_name: cli
keywords: ['cli']
description: The SailPoint CLI is a terminal-based tool you can use to interact with your IDN tenant.
slug: /tools/cli
tags: ['CLI']
---

## Start using the CLI

The SailPoint CLI is a terminal-based tool you can use to to interact with your IdentityNow (IDN) tenant. The CLI provides a text-based environment you can use to run operations known as "commands" to interact with your tenant however you want.

You can use the CLI to perform many functions you would have otherwise used Postman or custom scripts to perform before. For example, you can use the CLI to call the SailPoint APIs to do whatever you want in your IDN tenant, and you can do all this directly on the command line, with minimal setup.

Learn how to use the SailPoint command line interface (CLI) in this guide.

![Sail](./assets/img/vhs/Sail.gif)

## Contents

- [Start using the CLI](#start-using-the-cli)
- [Contents](#contents)
- [Requirements](#requirements)
- [Get the CLI](#get-the-cli)
  - [Homebrew](#homebrew)
- [Configuration](#configuration)
  - [Assisted configuration](#assisted-configuration)
  - [Manual configuration](#manual-configuration)
    - [Environment variable configuration](#environment-variable-configuration)
- [Usage](#usage)
- [GitHub](#github)
- [Contribution](#contribution)
- [Questions](#questions)

## Requirements

- Golang version 1.18 or above. You can download it [here](https://go.dev/dl/). You can run `go version` to check your version.

## Get the CLI

To install the SailPoint CLI: use a package manager for the OS of your choice. Prebuilt binaries for OS X, Windows, and Linux are provided in [Releases](https://github.com/sailpoint-oss/sailpoint-cli/releases).

### Homebrew

MacOS users can use [Homebrew](https://brew.sh/) to install the CLI. Run these commands in your terminal:

```sh
brew tap sailpoint-oss/tap && brew install sailpoint-cli
```

Then make sure you can run the `sail` command.

## Configuration

To configure the CLI to connect and authenticate to your IDN tenant, you must do the following:

- Find your tenant name. To learn how to find it, refer to [Getting Started](/idn/api/getting-started#find-your-tenant-name). The CLI will use this tenant name to connect to your IDN instance.
- Create a personal access token (PAT). Make sure to note the "client ID" and "client secret." The CLI needs this information to authenticate successfully. To learn how to create a PAT, refer to [Personal Access Tokens](/idn/api/authentication#personal-access-tokens).

### Assisted configuration

Once you have created the PAT, you can use the `configure` command to configure the CLI for your tenant.

This command creates a configuration file in your home directory to store your tenant's connection details.

To configure the CLI with your PAT, first run the `sail environment {name}` like this example:

```shell
sail environment example
```

You can then provide your tenant URL and base URL.

Then run the `sail configure` command. You can then provide your PAT client ID and client secret.

![Configure PAT](./assets/img/vhs/configure-pat.gif)

Once you have provided your client ID and client secret, your CLI is configured.

### Manual configuration

Alternatively, you can manually create a configuration file in your home directory.

On **Linux and MacOS**, open your terminal app and run these commands:

```shell
mkdir ~/.sailpoint
touch ~/.sailpoint/config.yaml
```

On **Windows**, run Powershell as an administrator and run these commands:

```powershell
New-Item -ItemType Directory -Path 'C:\Users\<username>\.sailpoint'
New-Item -ItemType File -Path 'C:\Users\<username>\.sailpoint\config.yaml'
```

These commands will create a `config.yaml` file you can use to set your environment variables:

The `config.yaml` file must contain the following information:

```yaml
activeenvironment: example # The key identifying the current active environment.
authtype: pat # Currently only "pat" is supported. If the ENV VARs for SAIL_BASE_URL are configured, they will override the values in the environment.
exporttemplatespath: '' # The path to the user's custom export templates file, if it's provided
searchtemplatespath: '' # The path to the user's custom search templates file, if it's provided
debug: false # The CLI's debug setting
environments: # The CLI's configured environments
  example:
    baseurl: https://example.api.identitynow.com # If the ENV VAR SAIL_BASE_URL is configured, it will override this value in the environment.
    pat:
      accesstoken: example-access-token
      clientid: example-client-id # If the ENV VAR SAIL_CLIENT_ID is configured, it will override this value in the environment.
      clientsecret: example-client-secret # If the ENV VAR SAIL_CLIENT_SECRET is configured, it will override this value in the environment.
      expiry: example-access-token-expiry
    tenanturl: https://example.identitynow.com
```

You can copy the example into your `config.yaml` file. You must specify your baseurl, tokenurl, clientsecret, and clientid and any other necessary information for your chosen authentication method.

You can have both authentication methods configured at once, but only one can be active at a time.

#### Environment variable configuration

You can also store your configuration in environment variables. This can be useful when you are using the CLI in an automated environment like a continuous integration and continuous deployment (CI/CD) pipeline. In these types of scenarios, consuming the cconfiguration from environment variables would be easier than creating the configuration file.

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

- `connectors`: This command is a CLI interface for the SaaS Connectivity platform. The CLI is the best way to create and manage SaaS connectors within your tenant. For more information about the `connectors` command, refer to the CLI [Connectors guide](/idn/tools/cli/connectors). 
- `search`: Run this command to access IDN search functionality within the CLI. For more information about the `search` command, refer to the CLI [Search guide](/idn/tools/cli/search). 
- `set`: Run this command to configure your CLI settings. For more information about the `set` command, refer to the CLI [Set guide](/idn/tools/cli/set).
- `spconfig`: Run this command to access IDN SP Config functionality. For more information about the `spconfig` command, refer to the CLI [SPConfig guide](/idn/tools/cli/spconfig). 
- `transform`: This command is a CLI interface that makes it easy to create, manage, and test transforms. For more information about the `transform` command, refer to the CLI [Transforms guide](/idn/tools/cli/transforms). 
- `va`: Run this command to access VAs connected to your tenant. For more information about the `va` command, refer to the CLI [VA guide](/idn/tools/cli/va).

## GitHub

You will find the SailPoint GitHub CLI repo here: https://github.com/sailpoint-oss/sailpoint-cli

Please use GitHub [issues](https://github.com/sailpoint-oss/sailpoint-cli/issues) to [submit bugs](https://github.com/sailpoint-oss/sailpoint-cli/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here) or make [feature requests](https://github.com/sailpoint-oss/sailpoint-cli/issues/new?assignees=&labels=&template=feature-request.md&title=%5BFeature%5D+Your+Feature+Request+Here).

## Contribution

Do you have an idea to help improve the CLI? You can contribute directly!

Before you contribute, you must sign our [CLA](https://cla-assistant.io/sailpoint-oss/sailpoint-cli) and read the [Contribution Guidelines](https://github.com/sailpoint-oss/developer.sailpoint.com/blob/main/CONTRIBUTING.md).

## Questions

If you have questions about the CLI, don't hesitate to reach out on the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss!
