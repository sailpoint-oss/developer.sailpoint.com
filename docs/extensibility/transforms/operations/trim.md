---
id: trim
title: Trim
pagination_label: Trim
sidebar_label: Trim
sidebar_class_name: trim
keywords: ['transforms', 'operations', 'trim']
description: Trim whitespaces from both the beginning and ending of input strings.
slug: /extensibility/transforms/operations/trim
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the trim transform to trim whitespaces from both the beginning and ending of input strings.

## Transform structure

The trim transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "trim",
  "name": "Trim Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `trim`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The trim transform only requires top-level properties:

```json
{
  "type": "trim",
  "name": "Transform Name"
}
```

### `attributes` (required)

The `attributes` object contains the trim configuration.

#### Optional

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

This transform removes the whitespace before the " Vice President" input.

```bash
Input: " Vice President"
Output: "Vice President"
```

**Transform request body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": " Vice President"
      },
      "type": "static"
    }
  },
  "type": "trim",
  "name": "Trim Transform"
}
```

---

<p>&nbsp;</p>

This transform removes the whitespace after the "Austin, Texas" input.

```bash
Input: "Austin, Texas "
Output: "Austin, Texas"
```

**Transform request body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "Austin, Texas "
      },
      "type": "static"
    }
  },
  "type": "trim",
  "name": "Trim Transform"
}
```
