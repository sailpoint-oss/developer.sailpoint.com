---
id: random-alphanumeric
title: Random Alphanumeric
pagination_label: Random Alphanumeric
sidebar_label: Random Alphanumeric
sidebar_class_name: randomAlphanumeric
keywords: ['transforms', 'operations', 'random alphanumeric']
description: Generate a random string of any length.
slug: /extensibility/transforms/operations/random-alphanumeric
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the random alphanumeric transform to generate a random string of any length, comprising both numbers and letters (both lowercase and uppercase).

## Transform structure

The random alphanumeric transform only requires the standard `type` and `name` attributes:

```json
{
  "type": "randomAlphaNumeric",
  "name": "Random Alphanumeric Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `randomAlphaNumeric`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The random alphanumeric transform uses the following structure:

```json
{
  "type": "randomAlphaNumeric",
  "name": "Transform Name",
  "attributes": {
    "length": "32"
  }
}
```

---

### `attributes` (optional)

The `attributes` object contains the length configuration.

#### Optional

- **length** `string` _(optional)_  
  An integer value specifying the required size/number of characters for the random string.
  - Must be a positive number
  - Default is `32`
  - Maximum allowable value is `450` characters

## Examples

Since no explicit length is provided, this transform generates a 32-character random string, such as "VtPeE9WL56lMTlvfjr02KXqS3KtgDSuk".

**Transform request body**:

```json
{
  "type": "randomAlphaNumeric",
  "name": "Random Alphanumeric Transform"
}
```

---

<p>&nbsp;</p>

This transform generates a 10-character random string, such as "5GH2qsjU27".

**Transform request body**:

```json
{
  "attributes": {
    "length": "10"
  },
  "type": "randomAlphaNumeric",
  "name": "Random Alphanumeric Transform"
}
```
