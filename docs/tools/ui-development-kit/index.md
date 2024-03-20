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

The UI Development Kit provides you with a framework to build your own applications or processes on the ISC platform.

Learn how to use the SailPoint UI Development Kit in this guide.

## Requirements

You need the following to use the UI Development Kit:

- **Node**. To learn how to download it and set it up, go [here](https://nodejs.org/en/download).

- Your tenant name in ISC. To learn how to find it, refer to [Getting Started](/docs/api/getting-started#find-your-tenant-name). The SDK will use this tenant name to connect to your ISC instance.

## Clone the project

You can find the UI Development Kit and its examples in the Github repo [here](https://github.com/sailpoint-oss/ui-development-kit).

To clone the project, you can run this command:

```bash
git clone git@github.com:sailpoint-oss/ui-development-kit.git
```

## Project structure

This project is built on [Svelte-Kit](https://kit.svelte.dev/) and ultimately builds an [electron](https://www.electronjs.org/) app.

We have configured the environment and building of the application so that all you are left to do is create your custom user interface without having to worry about those details.

You will spend most of your time in the `src` folder, adding new pages, routes and sidebar items. This will be explained later in [adding a new component](./adding-a-new-component). For now, you can run and develop the project locally by following [these steps](#run-the-application-for-local-development).

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

In the root of the project run this command to install dependencies:

```bash
npm install
```

To start the application run:

```bash
npm run dev
```

Continue to [Exploring the UI Development Kit](./getting-started.md)