---
id: prerequisites
title: Prerequisites
pagination_label: Prerequisites
sidebar_label: Prerequisites
sidebar_position: 1
sidebar_class_name: prerequisites
keywords: ['connectivity', 'connectors', 'prerequisites']
description: These are some prerequisites you must have before you start building SaaS Connectors.
slug: /docs/saas-connectivity/prerequisites
tags: ['Connectivity']
---

## Required Software

### Node

To develop a connector, Node >= 18.0.0 is required. Download node from the [nodejs.org downloads page](https://nodejs.org/en/download).

### SailPoint CLI

SailPoint provides a CLI tool to manage the connectors' lifecycles. To install and set up the CLI, [follow the instructions here](../../../idn/tools/cli) or you can directly download and install from the [GitHub releases page](https://github.com/sailpoint-oss/sailpoint-cli/releases)

## Recommended Software

### IDE

Although you can develop connectors in a text editor, use an Integrated Development Environment (IDE) for a better experience. There are many IDEs that support Javascript/Typescript, including [Visual Sudio Code](https://code.visualstudio.com/Download), a free IDE with native support for Javascript/Typescript. VS Code provides syntax highlight, debugging, hints, code completion, and other helpful options.

### Postman

A convenient way to test your connector before deploying to IDN is to use Postman. You can get it from the [postman.com downloads page](https://www.postman.com/downloads/)

## Creating your first project

To create an empty connector project, run the following command:

```bash
sail conn init my-first-project
```

The CLI init command creates a new folder with your project name in the location where you run the command.

Change the directory to the project folder and Run ```npm install to install`` the dependencies.

### Source Files

The earlier command creates the initial project source directory below:

```
my-first-project
├── .gitignore
├── connector-spec.json
├── package.json
├── src/
|   ├── index.ts
|   ├── my-client.txt
|   └── connector-spec.ts
├── tsconfig.json
```

This directory contains three main files:

- **index.ts:** Use this file to register all the available commands the connector supports, provide the necessary configuration options to the client code implementing the API for the source, and pass data the client code obtains to IdentityNow. This file can either use a vendor supplied client Software Development Kit (SDK) to interact with the web service or reference custom client code within the project.

- **my-client.ts:** Use this template to create custom client code to interact with a web service’s APIs. If the web service does not provide an SDK, you can modify this file to implement the necessary API calls to interact with the source web service.

- **connector-spec.ts** This file describes how the connector works to IDN. More information about the connector spec is available in the next section. At a high level, it has the information for the following:
  - What commands the connector supports
  - What config values the user must provide when creating the connector
  - Defining the account schema
  - Defining the entitlment schema
  - Defining the account create template that maps fields from IDN to the connector

These files are templates that provide guidance to begin implementing the connector on the target web service. Although you can implement a connector's entire functionality within these three files (or even just one if the web service provides an SDK), you can implement your own code architecture, like breaking out common utility functions into a separate file or creating separate files for each operation.
