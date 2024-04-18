---
id: connectivity-customizers-getting-started
title: Getting Started
pagination_label: Getting Started
sidebar_label: Getting Started
sidebar_position: 4
sidebar_class_name: saasConnectivity
keywords: ['connectivity', 'connectors', customizers]
description: Get started with connectivity customizers.
slug: /connectivity/saas-connectivity/customizers/getting-started
tags: ['Connectivity']
---

# Get Started

import Video from '@site/src/components/Video';

## Video Tutorial

<Video source="//play.vidyard.com/YtrUm1a5B29VbADR2ryhWa.html?" container="vidyard" ></Video>

## Required software

You need to have the same software installed to create a customizer that you need to create a SaaS Connector. You can find the lists of Prerequisites [here](../prerequisites).

## Create your first project

To create an empty connector customizer project, run this command:

```bash
sail conn customizers init my-customizer-project
```

The CLI init command creates a new folder with your project name in the location where you run the command.

Change the directory to the project folder and run ``npm install` to install the dependencies.

### Source files

The earlier command creates this initial project source directory:

```bash
my-customizer-project
├── .gitignore
├── package.json
├── src/
|   ├── index.ts
|   └── index-spec.ts
├── tsconfig.json
```

This directory contains one source code file. Though you can expand the customizer to include more than one file, the "index.ts" file contains all the logic for the customizer.

- **index.ts:** Use this file to register all the available customizer commands the connector supports.
