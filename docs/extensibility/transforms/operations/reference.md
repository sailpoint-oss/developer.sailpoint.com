---
id: reference
title: Reference
pagination_label: Reference
sidebar_label: Reference
sidebar_class_name: reference
sidebar_key: transforms-reference
keywords: ['transforms', 'operations', 'reference']
description: Reuse a transform that has already been written.
slug: /extensibility/transforms/operations/reference
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the reference transform to reuse a transform that has already been written within another transform. This transform is often useful when you want to repeat the same logic multiple times within other transforms. This transform allows you to maintain only one transform and have it propagate through to other implementations of that logic.

## Transform structure

In addition to the standard `type` and `name` attributes, the structure of a reference transform requires the name of the transform you want to reference specified in the `attributes.id` key:

```json
{
  "attributes": {
    "id": "Build Display Name"
  },
  "type": "reference",
  "name": "Reference Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `reference`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The reference transform uses the following structure:

```json
{
  "type": "reference",
  "name": "Transform Name",
  "attributes": {
    "id": "Name of Transform to Reference"
  }
}
```

---

### `attributes` (required)

The `attributes` object contains the reference configuration.

#### Required

- **id** `string` _(required)_  
  The name of the pre-existing transform you want to reference within your current transform.

#### Optional

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

If you had a "Get Worker Type" transform that evaluated multiple pieces of data to determine whether a user is an employee or a contractor, this transform would output the result of that transform just as if the logic were contained directly within this transform.

**Transform request body**:

```json
{
  "attributes": {
    "id": "Get Worker Type"
  },
  "type": "reference",
  "name": "Reference Transform"
}
```

---

<p>&nbsp;</p>

This transform builds the user's display name, adds a hyphen to the end, and then adds the evaluated worker type from the earlier transform to build a string that would look something like "John Smith - Employee".

**Transform request body**:

```json
{
  "attributes": {
    "values": [
      {
        "attributes": {
          "id": "Get Display Name"
        },
        "type": "reference"
      },
      " - ",
      {
        "attributes": {
          "id": "Get Worker Type"
        },
        "type": "reference"
      }
    ]
  },
  "type": "concat",
  "name": "Reference Transform"
}
```
