---
id: upper
title: Upper
pagination_label: Upper
sidebar_label: Upper
sidebar_class_name: upper
keywords: ['transforms', 'operations', 'upper']
description: Convert an input string into all uppercase letters.
slug: /extensibility/transforms/operations/upper
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the upper transform to convert an input string into all uppercase letters.

## Transform structure

The upper transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "upper",
  "name": "Upper Transform"
}
```

## Attributes

The upper transform only requires top-level properties:

```json
{
  "type": "upper",
  "name": "Transform Name"
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `upper`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

This transform takes the input "inactive" and produces the output "INACTIVE".

```bash
Input: "inactive"
Output: "INACTIVE"
```

**Transform request body**:

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

**Transform request body**:

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
