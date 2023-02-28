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

# About The Project

The SailPoint command line interface (CLI) makes it easy to interact with
SailPoint's SaaS platform in a programmatic way.  You can now perform many functions you would have used Postman or custom scripts for before.  Many functions that use to be
accomplished through tools like Postman or from custom scripts can now be done
directly on the command line with minimal setup.

Please use GitHub
[issues](https://github.com/sailpoint-oss/sailpoint-cli/issues) to
[submit bugs](https://github.com/sailpoint-oss/sailpoint-cli/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here)
or make
[feature requests](https://github.com/sailpoint-oss/sailpoint-cli/issues/new?assignees=&labels=&template=feature-request.md&title=%5BFeature%5D+Your+Feature+Request+Here).

If you'd like to contribute directly (which we encourage!) please read the
contribution guidelines below, first!

# Contents

- [About The Project](#about-the-project)
- [Contents](#contents)
  - [Installation](#installation)
    - [Homebrew](#homebrew)
    - [Manual Installation](#manual-installation)
      - [Prerequisites](#prerequisites)
    - [Manual Installation](#manual-installation-1)
      - [Prerequisites](#prerequisites-1)
      - [MacOS and Linux](#macos-and-linux)
      - [MacOS and Linux](#macos-and-linux-1)
      - [Windows](#windows)
  - [Configuration](#configuration)
    - [Assisted configuration](#assisted-configuration)
      - [Personal Access Token](#personal-access-token)
      - [OAuth](#oauth)
    - [Manual configuration](#manual-configuration)
    - [Environment variable configuration](#environment-variable-configuration)
  - [Usage](#usage)
  - [Discuss](#discuss)
  - [License](#license)
  - [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)

<!-- GETTING STARTED -->

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

To manually install the CLI, follow these steps: 

#### MacOS and Linux

Open your terminal app, navigate to the project directory, and run this command:

```shell
make install
```

After that, make sure you can run the `sail` command.

```shell
sail
```

 <img src="./assets/img/vhs/MacOSAndLinux.gif" alt="linux make gif">

#### Windows

Open PowerShell **as administrator**, navigate to the project directory, and run
this command.

```bash
go build -o "C:\Program Files\sailpoint\sail.exe"
```

After that, add the following directory to the system PATH parameter. You can
find instructions on how to do this from
[this article](https://medium.com/@kevinmarkvi/how-to-add-executables-to-your-path-in-windows-5ffa4ce61a53).
You only need to do this the first time you install the CLI.

```
C:\Program Files\sailpoint
```

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
  - PAT: Create a personal access token (PAT). Make sure to note the **client ID** and **client secret**. The CLI needs this information to authenticate successfully. To learn how to create a PAT, refer to [Personal Access Tokens](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens). 
  - OAuth: Create an OAuth client. Make sure to to note the **client ID** and **client secret**, as well as the **redirect port** and **redirect path**. The CLI needs all this information to authenticate successfully. To learn how to create an OAuth client, refer to [Authentication Details](https://developer.sailpoint.com/idn/api/authentication/#authentication-details). 

### Assisted configuration

Once you have created the authentication method, you can run the `configure` command for your chosen method to configure the CLI for your tenant. 

This command creates a configuration file in your home directory to store your tenant's connection details.

#### PAT

```shell
sail configure pat
```

<img src="./assets/img/vhs/configure/configure-pat.gif" alt="configure PAT">

#### OAuth

```shell
sail configure oauth
```

<img src="./assets/img/vhs/configure/configure-oauth.gif" alt="configure OAuth">

### Manual configuration

Alternatively, you can manually create a configuration file in your home
directory.

On **Linux/Mac**, run:

```shell
mkdir ~/.sailpoint
touch ~/.sailpoint/config.yaml
```

On **Windows PowerShell**, run:

```powershell
New-Item -ItemType Directory -Path 'C:\Users\<username>\.sailpoint'
New-Item -ItemType File -Path 'C:\Users\<username>\.sailpoint\config.yaml'
```

The `config.yaml` file should contain the following information.

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

### Environment variable configuration

You may also specify environment variables for your configuration. This can
useful when using the CLI in an automated environment, like a CI/CD pipeline,
where consuming the configuration from environment variables would be easier
than creating the config file. Environment variables take precedent over values
defined in a config file.

On **Linux/Mac**, export the following environment variables:

```shell
export SAIL_BASEURL=https://{org}.api.identitynow.com
export SAIL_TOKENURL=https://{org}.api.identitynow.com/oauth/token
export SAIL_CLIENTID={clientID}
export SAIL_CLIENTSECRET={clientSecret}
export SAIL_DEBUG=false
```

If you want your environment variables to persist across terminal sessions, you
will need to add these exports to your shell profile, like `~/.bash_profile`.

On **Windows PowerShell** run:

```powershell
$env:SAIL_BASEURL = 'https://{org}.api.identitynow.com'
$env:SAIL_TOKENURL = 'https://{org}.api.identitynow.com/oauth/token'
$env:SAIL_CLIENTID = '{clientID}'
$env:SAIL_CLIENTSECRET = '{clientSecret}'
$env:SAIL_DEBUG = 'false'
```

If you want your environment variables to persist across PowerShell sessions,
then use the following command instead:

```powershell
[System.Environment]::SetEnvironmentVariable('SAIL_BASEURL','https://{org}.api.identitynow.com')
```

## Usage

Run the `sail` command for an overview of the available commands and flags. You
can use the `-h` flag with any available command to see additional options
available for each command. You can find more information about each command
below.

- [connectors](./cmd/connector/README.md)
- [transforms](./cmd/transform/README.md)

## Discuss

[Click Here](https://developer.sailpoint.com/discuss) to discuss this tool with
other users.

<!-- LICENSE -->

## License

Distributed under the MIT License. See [the license](./LICENSE) for more
information.

<!-- CONTRIBUTING -->

## Contributing

Before you contribute you
[must sign our CLA](https://cla-assistant.io/sailpoint-oss/sailpoint-cli).
Please also read our [contribution guidelines](./CONTRIBUTING.md) for all the
details on contributing.

<!-- CODE OF CONDUCT -->

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community. Read our
[code of conduct](./CODE_OF_CONDUCT.md) to learn more. 