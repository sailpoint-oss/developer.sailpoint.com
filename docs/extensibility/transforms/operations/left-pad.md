---
id: left-pad
title: Left Pad
pagination_label: Left Pad
sidebar_label: Left Pad
sidebar_class_name: leftPad
keywords: ['transforms', 'operations', 'left', 'pad']
description: Left pad of the input string.
slug: /extensibility/transforms/operations/left-pad
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the left pad transform to pad an incoming string with a user-supplied character out to a specific number of characters. This transform is often useful for data normalization situations in which data such as employee IDs are not uniform in length but need to be for downstream systems.

:::note Other Considerations

- If the input to the left pad transform is null, the transform returns a null value.

:::

## Transform structure

In addition to the standard `type` and `name` attributes, the left pad transform requires the `length` attribute, which tells the transform how many characters to pad the incoming string to.

```json
{
  "attributes": {
    "padding": "0",
    "length": "5"
  },
  "type": "leftPad",
  "name": "Left Pad Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `leftPad`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The left pad transform uses the following structure:

```json
{
  "type": "leftPad",
  "name": "Transform Name",
  "attributes": {
    "length": "8",
    "padding": "0"
  }
}
```

---

### `attributes` (required)

The `attributes` object contains the padding configuration.

#### Required

- **length** `string` _(required)_  
  An integer value for the final output string's desired length.

#### Optional

- **padding** `string` _(optional)_  
  The character to use for padding the incoming data to reach the desired length. Default is a single space `" "`.

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

This transform takes the incoming attribute configured in the identity profile attribute UI and ensures it is padded out to 8 characters in length by adding "0"s to the left.

```bash
Input: "1234"
Output: "00001234"
```

**Transform request body**:

```json
{
  "attributes": {
    "padding": "0",
    "length": "8"
  },
  "type": "leftPad",
  "name": "Left Pad Transform"
}
```

---

<p>&nbsp;</p>

This transform takes the user's `employeeID` attribute from the HR source and ensures it is padded out to 7 characters in length by adding "x"s to the left.

```bash
Input: "1234"
Output: "xxx1234"
```

**Transform request body**:

```json
{
  "attributes": {
    "padding": "x",
    "length": "7",
    "input": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "employeeID"
      },
      "type": "accountAttribute"
    }
  },
  "type": "leftPad",
  "name": "Left Pad Transform"
}
```
