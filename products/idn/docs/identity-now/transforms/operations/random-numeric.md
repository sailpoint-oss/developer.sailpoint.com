---
id: random-numeric
title: Random Numeric
pagination_label: Random Numeric
sidebar_label: Random Numeric
sidebar_class_name: randomNumeric
keywords: ['transforms', 'operations', 'random numeric']
description: Generate a random number of any length.
slug: /docs/transforms/operations/random-numeric
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the random numeric transform to generate a random number of any length.

## Transform Structure

The random numeric transform only requires the standard `type` and `name` attributes:

```json
{
  "type": "randomNumeric",
  "name": "Random Numeric Transform"
}
```

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `randomNumeric`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **length** - This is the integer value specifying the required size/number of digits the random number must contain.
    - This value must be a positive number and cannot be blank.
    - If no length is provided, the transform defaults to a value of 10.
    - Due to identity attribute data constraints, the maximum allowable value is 450 characters.

## Examples

No explicit length is provided, so this transform generates a 10-digit random integer, such as "2334776774".

**Transform Request Body**:

```json
{
  "type": "randomNumeric",
  "name": "Random Numeric Transform"
}
```

---

<p>&nbsp;</p>

This transform generates a 6-digit random integer, such as "759931".

**Transform Request Body**:

```json
{
  "attributes": {
    "length": "6"
  },
  "type": "randomNumeric",
  "name": "Random Numeric Transform"
}
```
