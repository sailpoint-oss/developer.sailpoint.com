---
id: random-numeric
title: Random Numeric
pagination_label: Random Numeric
sidebar_label: Random Numeric
sidebar_class_name: randomNumeric
keywords: ['transforms', 'operations', 'random numeric']
description: Generate a random number of any length.
slug: /extensibility/transforms/operations/random-numeric
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the random numeric transform to generate a random number of any length.

## Transform structure

The random numeric transform only requires the standard `type` and `name` attributes:

```json
{
  "type": "randomNumeric",
  "name": "Random Numeric Transform"
}
```

## Attributes

The random numeric transform uses the following structure:

```json
{
  "type": "randomNumeric",
  "name": "Transform Name",
  "attributes": {
    "length": "10"
  }
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `randomNumeric`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

---

### `attributes` (optional)

The `attributes` object contains the length configuration.

#### Optional

- **length** `string` _(optional)_  
  An integer value specifying the required size/number of digits for the random number.
  - Must be a positive number
  - Default is `10`
  - Maximum allowable value is `450` characters

## Examples

No explicit length is provided, so this transform generates a 10-digit random integer, such as "2334776774".

**Transform request body**:

```json
{
  "type": "randomNumeric",
  "name": "Random Numeric Transform"
}
```

---

<p>&nbsp;</p>

This transform generates a 6-digit random integer, such as "759931".

**Transform request body**:

```json
{
  "attributes": {
    "length": "6"
  },
  "type": "randomNumeric",
  "name": "Random Numeric Transform"
}
```
