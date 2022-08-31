---
id: cli
slug: /docs/saas-connectivity/getting-started/cli
sidebar_position: 1
---
# Getting Started with the CLI

> 📘 **Currently in Beta**
>
>  Connector development using this SDK and CLI is currently in beta. To participate, please sign up for the beta [here](https://app.smartsheet.com/b/form/1e4a7f063de4496b9c6d33f191996950). Once your tenant is activated, you can access and create new connectors.

## Prerequisites

To build the CLI, the following packages are required:
- Golang >= 1.17
- Make >= 3.81

To develop a connector, the following packages are required:
- Node >= 14.17.3

## IDE

Although you can develop connectors in a text editor, use an Integrated Development Environment (IDE) for a better experience. There are many IDEs that support Javascript/Typescript, including [Visual Sudio Code](https://code.visualstudio.com/Download), a free IDE with native support for Javascript/Typescript. VS Code provides syntax highlight, debugging, hints, code completion, and other helpful options.

## Install CLI

SailPoint provides a CLI tool to manage the connectors' lifecycles. To install and set up the CLI, follow the instructions in this repository's README file (TBD. This repository is not public yet):

[SailPoint CLI on GitHub](https://github.com/sailpoint-oss/sp-connector-cli)

## Create new project

To create an empty connector project, run ```sp conn init "my-project"``` in your terminal. The CLI init command creates a new folder with your project name in the location where you run the command.

Run npm install to change the directory to the project folder and install the dependencies. You may need to provide your GitHub credentials because the CLI tool depends on a SailPoint internal GitHub repository.

### Source Files
The initial project source directory contains three main files:

- **index.ts:** Use this file to register all the available commands the connector supports, provide the necessary configuration options to the client code implementing the API for the source, and pass data the client code obtains to IdentityNow. This file can either use a vendor supplied client Software Development Kit (SDK) to interact with the web service or reference custom client code within the project.

- **my-client.ts:** Use this template to create custom client code to interact with a web service’s APIs. If the web service does not provide an SDK, you can modify this file to implement the necessary API calls to interact with the source web service.

- **connector-spec.ts** This file describes how the connector works to IDN. More information about the connector spec is available in the next section. At a high level, it has the information for the following:
    - What commands the connector supports  
    - What config values the user must provide when creating the connector
    - Defining the account schema
    - Defining the entitlment schema
    - Defining the account create template that maps fields from IDN to the connector

These files are templates that provide guidance to begin implementing the connector on the target web service. Although you can implement a connector's entire functionality within these three files (or even just one if the web service provides an SDK), you can implement your own code architecture, like breaking out common utility functions into a separate file or creating separate files for each operation.