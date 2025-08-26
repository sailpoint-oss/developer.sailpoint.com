---
id: udk
title: UI Development Kit
pagination_label: UDK
sidebar_label: UI Development Kit
sidebar_position: 4
sidebar_class_name: rudk
keywords: ['UI', 'development', 'kit']
description: Develop custom user interfaces.
slug: /tools/ui-development-kit
tags: ['UI']
---

## Overview

The SailPoint UI Development Kit is a project you can use to quickly develop custom user interfaces that interact with Identity Security Cloud (ISC).

The UI Development Kit provides you with a framework you can use to build your own applications or processes on the ISC platform.

Read this guide to learn how to use the SailPoint UI Development Kit.

<!-- <div className="text--center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/bloIVw1-NzU?si=m7SRpu62WSciyiOr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div> -->

## Requirements

These are the requirements to use the UI Development Kit:

- **Node**: To learn how to download Node and set it up, go [here](https://nodejs.org/en/download).

- **Angular**: To learn how to install Angular and set it up, go [here](https://angular.dev/installation).

- **TypeScript**. You can use `npm` to install TypeScript globally. This means that you can use the `tsc` command anywhere in your terminal. To do so, run this command:

```bash
npm install -g typescript
```

- **Your ISC tenant name**. To learn how to find it, refer to [Getting Started](/docs/api/getting-started#find-your-tenant-name). The UI Development Kit will use this tenant name to connect to your ISC instance.

## Clone the project

The first step to setting up the UI Development Kit is to clone the project from its GitHub repository. You can find the UI Development Kit and its examples in the Github repository [here](https://github.com/sailpoint-oss/ui-development-kit).

To clone the project, you can run this command:

```bash
git clone https://github.com/sailpoint-oss/ui-development-kit.git
```

## Project structure

This project is built on [Angular](https://angular.dev/) and ultimately builds an [Electron](https://www.electronjs.org/) application.

Setting up the project is simple. The environment and application building process are configured so you can start creating custom UIs immediately. However, it is still helpful to understand the project structure.

Most of your activity will involve the `projects/sailpoint-components` folder, such as adding new components and css styles. You can learn more about these processes in [Getting Started](./getting-started.mdx).

This is the basic project structure:

```bash
.
├── projects/
│   └── sailpoint-components/
│       └── src/
│           ├── package.json
│           └── All shared custom components will live here
├── src/
│   └── app/
│       ├── app.component.html
│       ├── app.component.scss
│       ├── app.component.spec.ts
│       ├── app.component.ts
│       ├── app.module.ts
│       └── app.routes.ts
├── package.json
├── angular.json
└── electron-builder.json
```

## Run the application for local development

To run and develop the project locally, follow these steps:

1. In the root of the project run this command to install dependencies:

```bash
npm install
```

2. To start the application, run this command:

```bash
npm run start
```

## Get started

To start learning how to use the UI Development Kit and explore its possibilities, refer to [Getting Started](./getting-started.mdx).

## Getting support

To get support for the UI Development Kit, please see our GitHub page, https://github.com/sailpoint-oss/ui-development-kit.

To submit a bug report, please [click here](https://github.com/sailpoint-oss/ui-development-kit/issues/new?assignees=&labels=bug&template=bug-report.md).

To submit a feature request, please [click here](https://github.com/sailpoint-oss/ui-development-kit/issues/new?assignees=&labels=enhancement&template=feature-request.md)

## Contribute

Do you have an idea to help improve the UI Development Kit? You can contribute directly!

Before you contribute, you must sign our [CLA](https://cla-assistant.io/sailpoint-oss/ui-development-kit) and read the [Contribution Guidelines](https://github.com/sailpoint-oss/developer.sailpoint.com/blob/main/CONTRIBUTING.md).

## Discuss

The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions.

To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the [SailPoint Developer Community Forum](https://developer.sailpoint.com/discuss/c/identity-security-cloud/6).
