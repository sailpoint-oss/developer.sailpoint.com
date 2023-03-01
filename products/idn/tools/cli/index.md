---
id: cli
title: CLI
pagination_label: CLI
sidebar_label: CLI
sidebar_position: 1
sidebar_class_name: cli
keywords: ['cli']
description: Learn how to use the SailPoint CLI in this guide. 
slug: /tools/cli
tags: ['CLI']
---

## Start using the CLI

Learn how to use the SailPoint command line interface (CLI) in this guide. You can use the CLI to interact with IDN and the rest of SailPoint's SaaS platform in a programmatic way. You can use the CLI to perform many functions you would have otherwise used Postman or custom scripts to perform before, and you can perform them directly on the command line with minimal setup. 

![Sail](./assets/img/vhs/Sail.gif)

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
  - [Homebrew](#homebrew)
  - [Manual Installation](#manual-installation)
- [Configuration](#configuration)
  - [Assisted configuration](#assisted-configuration)
  - [Manual configuration](#manual-configuration)
    - [Environment variable configuration](#environment-variable-configuration)
  - [Usage](#usage)
  - [GitHub](#github)
  - [Contribution](#contribution)

## Requirements

- Golang version 1.18 or above. You can download it [here](https://go.dev/dl/). You can run `go version` to check your version. 

## Installation

There are two ways to install the SailPoint CLI: you can use a package manager for the OS of your choice, or you can manually install it.

Prebuilt binaries for OS X, Windows, and Linux are provided in [Releases](https://github.com/sailpoint-oss/sailpoint-cli/releases).

### Homebrew

MacOS users can use [Homebrew](https://brew.sh/) to install the CLI. Run these commands in your terminal:

```sh
brew tap sailpoint-oss/tap && brew install sailpoint-cli
```

Then make sure you can run the `sail` command.

### Manual Installation

To manually install the CLI on **Linux and MacOS**, open your terminal app, navigate to the project directory, and run the `make install` command.

![Linux Make Gif](./assets/img/vhs/MacOSAndLinux.gif)

Then make sure you can run the `sail` command.

To manually install the CLI on **Windows**, open PowerShell as an administrator, navigate to the project directory, and run
this command:

```bash
go build -o "C:\Program Files\sailpoint\sail.exe"
```

Then add this directory to the system PATH parameter: 

```
C:\Program Files\sailpoint
```

You can find instructions on how to do so [here](https://medium.com/@kevinmarkvi/how-to-add-executables-to-your-path-in-windows-5ffa4ce61a53).
You only need to do this the first time you install the CLI.

After setting your environment variable, close all instances of your PowerShell
or Command Prompt, open a new instance, and make sure you can run the `sail`
command.

```shell
sail
```

## Configuration

To configure the CLI to connect and authenticate to your IDN tenant, you must do the following:

- Find your tenant name. To learn how to find it, refer to [Getting Started](https://developer.sailpoint.com/idn/api/getting-started#find-your-tenant-name). The CLI will use this tenant name to connect to your IDN instance. 
- Create a personal access token (PAT). Make sure to note the "client ID" and "client secret." The CLI needs this information to authenticate successfully. To learn how to create a PAT, refer to [Personal Access Tokens](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens). 

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

Alternatively, you can manually create a configuration file in your home
directory.

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
authtype: pat # Currently only "pat" and "pipeline" are supported. If the ENV VAR SAIL_AUTH_TYPE is configured to "pipeline", it will override this value.
customexporttemplatespath: "" # The path to the user's custom export templates file, if it's provided
customsearchtemplatespath: "" # The path to the user's custom search templates file, if it's provided
debug: false # The CLI's debug setting
environments: # The CLI's configured environments
  example:
    baseurl: https://example.api.identitynow.com
    pat:
      accesstoken: example-access-token
      clientid: example-client-id
      clientsecret: example-client-secret
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

Run the `sail` command for an overview of the available commands and flags. You can use the `-h` flag with any available command to see additional available options for each command: 

The following commands are available.: 
- `connectors`: This command is a CLI interface for the SaaS Connectivity platform. The CLI is the best way to create and manage SaaS connectors within your tenant. For more information about the `connectors` command, refer to the CLI [Connectors guide](https://developer.sailpoint.com/idn/tools/cli/connectors). For more information about the SaaS Connectivity platform, refer to [SaaS Connectivity](https://developer.sailpoint.com/idn/docs/saas-connectivity). 
- `transforms`: This command is a CLI interface that makes it easy to create, manage, and test transforms. For more information about the `transforms` command, refer to the CLI [Transforms guide](https://developer.sailpoint.com/idn/tools/cli/transforms). For more information about transforms, refer to [Transforms](https://developer.sailpoint.com/idn/docs/transforms). 

## GitHub

You will find the SailPoint GitHub CLI repo here: https://github.com/sailpoint-oss/sailpoint-cli

Please use GitHub [issues](https://github.com/sailpoint-oss/sailpoint-cli/issues) to [submit bugs](https://github.com/sailpoint-oss/sailpoint-cli/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here) or make [feature requests](https://github.com/sailpoint-oss/sailpoint-cli/issues/new?assignees=&labels=&template=feature-request.md&title=%5BFeature%5D+Your+Feature+Request+Here). 

## Contribution

Do you have an idea to help improve the CLI? You can contribute directly! 

Before you contribute, you must sign our [CLA](https://cla-assistant.io/sailpoint-oss/sailpoint-cli) and read the [Contribution Guidelines](https://github.com/sailpoint-oss/developer.sailpoint.com/blob/main/CONTRIBUTING.md).

## Questions

If you have questions about the CLI, don't hesitate to reach out on the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss! 