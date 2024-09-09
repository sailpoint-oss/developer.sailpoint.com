---
id: display-name
title: Display Name
pagination_label: Display Name
sidebar_label: Display Name
sidebar_class_name: displayName
keywords: ['transforms', 'operations', 'display', 'name']
description: Use Preferred Name over Given Name to create an identity’s Display Name.
slug: /extensibility/transforms/operations/display-name
tags: ['Transforms', 'Transform Operations']
---

## Overview

The `Use Preferred Name in Display Name` transform forms an identity’s `Display Name` value using the `Preferred Name` value when it exists over the `Given Name` value. The `Family Name` value is then appended to form the complete `Display Name`, e.g., ("Preferred Name" or "Given Name") + "Family Name"

## Transform Structure

The displayName generator transform is intended for using Preferred Name over Given Name to create an identity’s Display Name.

```json
{
  "type": "displayName",
  "name": "Display Name Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `displayName`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.

## Examples

This transform takes the user's Preferred Name or Given Name, and appends the user's Family Name. For example:

If the user's Preferred Name is  `John`, Given Name is `Jonathan`, and Family Name is `Doe`, the Display Name would be `John Doe`.

If the user's Preferred Name is not set, Given Name is `Jonathan`, and Family Name is `Doe`, the Display Name would be `Jonathan Doe`.

**Transform Request Body**:

```json
{
  "type": "displayName",
  "name": "Display Name Transform"
}
```
