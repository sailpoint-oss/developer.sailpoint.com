---
id: upper
title: Upper
pagination_label: Upper
sidebar_label: Upper
sidebar_class_name: upper
keywords: ['transforms', 'operations', 'upper']
description: Convert an input string into all uppercase letters.
slug: /transforms/operations/upper
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the upper transform to convert an input string into all uppercase letters.

## Transform Structure

The upper transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "upper",
  "name": "Upper Transform"
}
```

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `upper`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

This transform takes the input "inactive" and produces the output "INACTIVE".

```bash
Input: "inactive"
Output: "INACTIVE"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "inactive"
      },
      "type": "static"
    }
  },
  "type": "upper",
  "name": "Upper Transform"
}
```

---

<p>&nbsp;</p>

This transform takes the input "Everyone" and produces the output "EVERYONE".

```bash
Input: "Everyone"
Output: "EVERYONE"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "Everyone"
      },
      "type": "static"
    }
  },
  "type": "upper",
  "name": "Upper Transform"
}
```
