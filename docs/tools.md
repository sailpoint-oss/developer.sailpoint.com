---
id: tools
title: Tools
pagination_label: Tools
sidebar_label: Tools
sidebar_position: 1
sidebar_class_name: tools
keywords: ['tools']
description: ISC developer tools.
slug: /tools
tags: ['tools']
---

## Overview

SailPoint developer tools help you install, configure, test, and extend Identity Security Cloud (ISC) solutions. Start here if you need an SDK, command-line workflow, local development kit, or browser-based utility.

## Install and setup paths

- [SDKs](/docs/tools/sdk): Use generated SDK references when you want to build integrations in Go, Python, PowerShell, TypeScript, or another supported language.
- [CLI](/docs/tools/cli): Install the `sail` command and configure an ISC tenant for API, connector, transform, workflow, and search tasks.
- [Rule Development Kit](/docs/tools/rule-development-kit): Clone the RDK, install Java and Maven dependencies, and test rules locally before review.
- [UI Development Kit](/docs/tools/ui-development-kit): Clone the UI Development Kit and run a local Angular/Electron app for custom ISC user interfaces.

## Interactive utilities

These tools are hosted directly on the developer site and do not require local installation:

- [Java/.NET string escaper](/tools/escaping-tool-formatter): Format and escape values for use in configuration and templates.
- [JSON path evaluator](/tools/json-path-evaluator): Test JSONPath expressions against sample data.
- [Velocity playground](/tools/velocity-playground): Experiment with Velocity templates before using them in SailPoint configurations.

```mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
```

## Discuss

The developer forum is a valuable resource for ISC developers, where users and experts come together to ask questions and provide solutions.

To learn more about ISC tools and discuss them with other SailPoint developers, go to the [SailPoint Developer Forum](https://developer.sailpoint.com/discuss/c/isc/6).
