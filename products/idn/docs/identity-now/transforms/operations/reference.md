---
id: reference
title: Reference
pagination_label: Reference
sidebar_label: Reference
sidebar_class_name: reference
keywords: ["transforms", "operations", "reference"]
description: Reuse a transform that has already been written.
slug: /docs/transforms/operations/reference
tags: ["Transforms", "Transform Operations"]
---

## Overview

Use the reference transform to reuse a transform that has already been written
within another transform. This transform is often useful when you want to repeat
the same logic multiple times within other transforms. This transform allows you
to maintain only one transform and have it propagate through to other
implementations of that logic.

## Transform Structure

In addition to the standard `type` and `name` attributes, the structure of a
reference transform requires the `id` of the transform you want to reference:

```json
{
  "attributes": {
    "id": "Build Display Name"
  },
  "type": "reference",
  "name": "Reference Transform"
}
```

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `reference`.
  - **name** - This is a required attribute for all transforms. It represents
    the name of the transform as it will appear in the UI's dropdown menus.
  - **id** - This ID specifies the name of the pre-existing transform you want
    to use within your current transform.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether
    the transform logic should be reevaluated every evening as part of the
    identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the
    input data passed into the transform logic. If no input is provided, the
    transform takes its input from the source and attribute combination
    configured with the UI.

## Examples

If you had a "Get Worker Type" transform that evaluated multiple pieces of data
to determine whether a user is an employee or a contractor, this transform would
output the result of that transform just as if the logic were contained directly
within this transform.

**Transform Request Body**:

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

This transform builds the user's display name, adds a hyphen to the end, and
then adds the evaluated worker type from the earlier transform to build a string
that would look something like "John Smith - Employee".

**Transform Request Body**:

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
