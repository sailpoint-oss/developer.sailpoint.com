---
id: linting
title: Linting
pagination_label: Linting
sidebar_label: Linting
sidebar_position: 4
sidebar_class_name: linting
keywords: ['connectivity', 'connectors', 'linting']
description: Automatically check your connector source code for programmatic and stylistic errors.
slug: /docs/saas-connectivity/in-depth/linting
tags: ['Connectivity']
---

To add linting to your project, simply install the linter using NPM:

``npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`

Then add the `.eslintrc.yml` file on the project root:

```yaml
env:
  browser: true
  es2021: true
extends:
  - eslint:recommended
  - plugin:@typescript-eslint/recommended
parser: '@typescript-eslint/parser'
parserOptions:
  ecmaVersion: latest
  sourceType: module
plugins:
  - '@typescript-eslint'
rules: {}
```
