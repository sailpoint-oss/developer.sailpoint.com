---
id: use-preferred-name
title: Use preferred name
pagination_label: Use Preferred Name
sidebar_label: Use Preferred Name
sidebar_class_name: usePreferredName
keywords: ['transforms', 'ootb']
description: Use Preferred Name over Given Name to create an identity’s Display Name.
slug: /extensibility/transforms/ootb/use-preferred-name
tags: ['Transforms', 'OOTB']
---

## Overview

The `Use Preferred Name` transform uses the [displayName](../operations/display-name.md) operation and forms an identity’s `Display Name` value using the `Preferred Name` value when it exists over the `Given Name` (first name) value. The `Family Name` (last name) value is then appended to form the complete `Display Name`, e.g., ("Preferred Name" or "Given Name") + "Family Name"

## Transform structure

```json
{
  "id": "69e6f907-3034-4c5b-b442-b979166384ee",
  "internal": true,
  "name": "Use Preferred Name",
  "type": "displayName"
}
```
