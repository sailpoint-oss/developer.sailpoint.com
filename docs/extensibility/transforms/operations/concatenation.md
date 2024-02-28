---
id: concatenation
title: Concatenation
pagination_label: Concatenation
sidebar_label: Concatenation
sidebar_class_name: concatenation
keywords: ['transforms', 'operations', 'concatenation']
description: Join two or more string values into a combined output.
slug: /extensibility/transforms/operations/concatenation
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the concatenation transform to join two or more string values into a combined output. The concatenation transform often joins elements such as first and last name into a full display name, but it has many other uses.

## Transform Structure

The concatenation transform requires an array list of `values` that need to be joined. These values can be static strings or the return values of other nested transforms.

```json
{
  "attributes": {
    "values": ["John", " ", "Smith"]
  },
  "type": "concat",
  "name": "Concatenation transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `concat`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **values** - This is the array of items to join.
- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.

## Examples

This transform joins the user's first name from the "HR Source" with his/her last name, adds a space between them, and then adds a parenthetical note that the user is a contractor at the end.

**Transform Request Body**:

```json
{
  "attributes": {
    "values": [
      {
        "attributes": {
          "sourceName": "HR Source",
          "attributeName": "FirstName"
        },
        "type": "accountAttribute"
      },
      " ",
      {
        "attributes": {
          "sourceName": "HR Source",
          "attributeName": "LastName"
        },
        "type": "accountAttribute"
      },
      " (Contractor)"
    ]
  },
  "type": "concat",
  "name": "Test Concat Transform"
}
```

---

<p>&nbsp;</p>

This transform joins the user's job title with his/her job code value and adds a hyphen between those two pieces of data.

**Transform Request Body**:

```json
{
  "attributes": {
    "values": [
      {
        "attributes": {
          "sourceName": "HR Source",
          "attributeName": "JobTitle"
        },
        "type": "accountAttribute"
      },
      "-",
      {
        "attributes": {
          "sourceName": "HR Source",
          "attributeName": "JobCode"
        },
        "type": "accountAttribute"
      }
    ]
  },
  "type": "concat",
  "name": "Test Concat Transform"
}
```
