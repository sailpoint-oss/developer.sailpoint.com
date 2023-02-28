---
id: cli
title: CLI
pagination_label: CLI
sidebar_label: CLI
sidebar_position: 1
sidebar_class_name: cli
keywords: ['cli']
description: Learn how to use the SailPoint CLI in this guide. 
slug: /products/tools/cli
tags: ['CLI']
---

## Start using the CLI

Learn how to use the SailPoint command line interface (CLI) in this guide. You can use the CLI to interact with IDN and the rest of SailPoint's SaaS platform in a programmatic way. You can use the CLI to perform many functions you would have otherwise used Postman or custom scripts to perform before, and you can perform them directly on the command line with minimal setup. 

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

- Golang version 1.18 or above. You can download it [here](https://go.dev/dl/). You can use `go version` to check your version. 

## Installation

There are two ways to install the SailPoint CLI: you can use a package manager for the OS of your choice, or you can manually install it.

Prebuilt binaries for OS X, Windows, and Linux are provided in the [releases](https://github.com/sailpoint-oss/sailpoint-cli/releases) section.

### Homebrew

MacOS users can use [Homebrew](https://brew.sh/) to install the CLI. Run this command in your terminal:

```sh
brew install sailpoint-oss/homebrew-sailpoint-oss/sailpoint-cli
```

### Manual Installation

To manually install the CLI on **Linux and MacOS**, open your terminal app, navigate to the project directory, and run this command:

```shell
make install
```

Then make sure you can run the `sail` command.

```shell
sail
```

 <img src="./assets/img/vhs/MacOSAndLinux.gif" alt="linux make gif">

To manually install the CLI on **Windows**, open PowerShell as an administrator, navigate to the project directory, and run
this command:

```bash
go build -o "C:\Program Files\sailpoint\sail.exe"
```

Then add this directory to the system PATH parameter: 

```
C:\Program Files\sailpoint
```

You can find instructions on how to do this [here](https://medium.com/@kevinmarkvi/how-to-add-executables-to-your-path-in-windows-5ffa4ce61a53).
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
- Choose an authentication method:
  - PAT: Create a personal access token (PAT). Make sure to note the "client ID" and "client secret." The CLI needs this information to authenticate successfully. To learn how to create a PAT, refer to [Personal Access Tokens](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens). 
  - OAuth: Create an OAuth client. Make sure to to note the "client ID" and "client secret," as well as the "redirect port" and "redirect path." The CLI needs all this information to authenticate successfully. To learn how to create an OAuth client, refer to [Authentication Details](https://developer.sailpoint.com/idn/api/authentication/#authentication-details). 

### Assisted configuration

Once you have created the authentication method, you can use the `configure` command for your chosen method to configure the CLI for your tenant. 

This command creates a configuration file in your home directory to store your tenant's connection details.

If you are using a **PAT**, run this command: 

```shell
sail configure pat
```

<img src="./assets/img/vhs/configure/configure-pat.gif" alt="configure PAT">

If you are using an **OAuth client**, run this command: 

```shell
sail configure oauth
```

<img src="./assets/img/vhs/configure/configure-oauth.gif" alt="configure OAuth">

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
authtype: pat # Can be either pat or oauth, both methods can be configured, with only one being active at a time.
debug: false # Setting debug to true, will result in more verbose output
oauth: # All OAuth specific configuration information
  authurl: https://example.identitynow.com/oauth/authorize
  baseurl: https://example.api.identitynow.com
  clientid: example-client-id
  clientsecret: ""
  redirect:
    path: /callback
    port: 3000
  tenant: example
  token:
    accesstoken: example-access-token
    expiry: example-token-expiry-date
  tokenurl: https://example.api.identitynow.com/oauth/token
pat: # All Personal Access Token specific configuration information
  tenant: example
  baseurl: https://example.api.identitynow.com
  tokenurl: https://example.api.identitynow.com/oauth/token
  clientsecret: example-client-secret
  clientid: example-client-id
  token:
    accesstoken: example-access-token
    expiry: example-token-expiry-date
```
You can copy the example into your `config.yaml` file. You must specify your baseurl, tokenurl, clientsecret, and clientid and any other necessary information for your chosen authentication method. 

You can have both authentication methods configured at once, but only one can be active at a time. 

#### Environment variable configuration 

You can also store your configuration in environment variables. 
On **Linux/Mac**, open your terminal app and run these commands to export the following environment variables:

```shell
export SAIL_BASEURL=https://{tenant}.api.identitynow.com
export SAIL_TOKENURL=https://{tenant}.api.identitynow.com/oauth/token
export SAIL_CLIENTID={clientID}
export SAIL_CLIENTSECRET={clientSecret}
```

To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like `~/.bash_profile`.

On **Windows**, run Powershell as an administrator and run the following commands: 

```powershell
$env:SAIL_BASEURL = 'https://{tenant}.api.identitynow.com'
$env:SAIL_TOKENURL = 'https://{tenant}.api.identitynow.com/oauth/token'
$env:SAIL_CLIENTID = '{clientID}'
$env:SAIL_CLIENTSECRET = '{clientSecret}'
```

To get your environment variables to persist across PowerShell sessions, run this command instead: 

```powershell
[System.Environment]::SetEnvironmentVariable('SAIL_BASEURL','https://{tenant}.api.identitynow.com')
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