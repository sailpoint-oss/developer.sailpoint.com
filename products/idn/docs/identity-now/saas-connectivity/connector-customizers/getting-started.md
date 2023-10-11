---
id: connectivity-customizers-getting-started
title: Getting Started
pagination_label: Getting Started
sidebar_label: Getting Started
sidebar_position: 4
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: Getting started with Connectivity Customizers
slug: /docs/saas-connectivity/customizers/getting-started
tags: ['Connectivity']
---

# Getting Started

## Required Software

You need to have the same software installed to create a customizer as you need to create a SaaS Connector. You can find the lists of Prerequisites [here](../prerequisites) 

## Creating your first project

To create an empty connector customizer project, run the following command:

```
sail conn customizers init my-first-customizer-project
```


The CLI init command creates a new folder with your project name in the location where you run the command.

Change the directory to the project folder and Run ```npm install to install`` the dependencies.

### Source Files

The earlier command creates the initial project source directory below:

```
my-first-project
├── .gitignore
├── package.json
├── src/
|   ├── index.ts
|   └── index-spec.ts
├── tsconfig.json
```

This directory contains one source code file, while you can expand the customizer to include more than one file, the index.ts contains all the logic for the customizer

- **index.ts:** Use this file to register all the available customizer commands the connector supports.