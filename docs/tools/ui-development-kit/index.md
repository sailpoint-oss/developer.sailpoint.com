---
id: udk
title: UI Development Kit
pagination_label: UDK
sidebar_label: UI Development Kit
sidebar_position: 4
sidebar_class_name: rudk
keywords: ['UI', 'development','kit']
description: Develop custom user interfaces.
slug: /tools/ui-development-kit
tags: ['UI']
---

## Overview

The SailPoint UI Development Kit is a project you can use to quickly develop custom user interfaces that interact with Identity Security Cloud (ISC).

The UI Development Kit provides you with a framework you can use to build your own applications or processes on the ISC platform.

Read this guide to learn how to use the SailPoint UI Development Kit.

## Requirements

These are the requirements to use the UI Development Kit:

- **Node**: To learn how to download Node and set it up, go [here](https://nodejs.org/en/download).

- **Your ISC tenant name**. To learn how to find it, refer to [Getting Started](/docs/api/getting-started#find-your-tenant-name). The SDK will use this tenant name to connect to your ISC instance.

## Clone the project

The first step to setting up the UI Development Kit is to clone the project from its GitHub repository. You can find the UI Development Kit and its examples in the Github repository [here](https://github.com/sailpoint-oss/ui-development-kit).

To clone the project, you can run this command:

```bash
git clone git@github.com:sailpoint-oss/ui-development-kit.git
```

## Project structure

This project is built on [Svelte-Kit](https://kit.svelte.dev/) and ultimately builds an [Electron](https://www.electronjs.org/) application.

Setting up the project is simple. The environment and application building process are configured so you can start creating custom UIs immediately. However, it is still helpful to understand the project structure. 

Most of your activity will involve the `src` folder, such as adding new pages, routes, and sidebar items. You will learn more about these processes later in [Add a New Component](./adding-a-new-component). 

This is the project structure: 

```bash
.
├── electron-builder.yaml
├── electron.vite.config.ts
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── src
│   ├── app.d.ts
│   ├── app.html
│   ├── app.postcss
│   ├── error.html
│   ├── hooks.server.ts
│   ├── lib
│   ├── main
│   ├── preload
│   └── routes
├── svelte.config.js
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.js
└── yarn.lock
```

## Run the application for local development

To run and develop the project locally, follow these steps: 

1. In the root of the project run this command to install dependencies:

```bash
npm install
```

2. To start the application, run this command:

```bash
npm run dev
```

## Get started

To start learning how to use the UI Development Kit and explore its possibilities, refer to [Getting Started](./getting-started.md). 

## Discuss 

The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions. 

To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the [SailPoint Developer Community Forum](https://developer.sailpoint.com/discuss/c/identity-security-cloud/6). 