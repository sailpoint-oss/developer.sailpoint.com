---
id: lower
title: Lower
pagination_label: Lower
sidebar_label: Lower
sidebar_class_name: lower
keywords: ['transforms', 'operations', 'lower']
description: Convert an input string into all lowercase letters.
slug: /extensibility/transforms/operations/lower
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the lower transform to convert an input string into all lowercase letters.

## Transform structure

The lower transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "lower",
  "name": "Lower Transform"
}
```

## Attributes

The lower transform only requires top-level properties:

```json
{
  "type": "lower",
  "name": "Transform Name"
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `lower`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

![Lowercase Transform Input Screenshot](./img/lower_transform_input.png)

## Examples

This transform takes in the input "ACTIVE" and produces "active" as the output.

```bash
Input:"ACTIVE"
Output:"active"
```

**Transform request body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "ACTIVE"
      },
      "type": "static"
    }
  },
  "type": "lower",
  "name": "Lower Transform"
}
```

---

<p>&nbsp;</p>

This transform takes in the input "All-Access" and produces "all-access" as the output.

```bash
Input:"All-Access"
Output:"all-access"
```

**Transform request body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "All-Access"
      },
      "type": "static"
    }
  },
  "type": "lower",
  "name": "Lower Transform"
}
```
