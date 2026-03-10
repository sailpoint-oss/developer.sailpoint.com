---
id: right-pad
title: Right Pad
pagination_label: Right Pad
sidebar_label: Right Pad
sidebar_class_name: rightPad
keywords: ['transforms', 'operations', 'right pad']
description: Add padding to the right of an incoming string.
slug: /extensibility/transforms/operations/right-pad
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the right pad transform to pad an incoming string with a user-supplied character out to a specific number of characters. This transform is often useful for data normalization situations in which data such as employee IDs are not uniform in length but need to be for downstream systems.

:::note Other Considerations

- If the input to the right pad transform is null, the transform returns a null value.

:::

## Transform structure

In addition to the standard `type` and `name` attributes, the right pad transform requires the `length` attribute, which tells the transform how many characters to pad the incoming string to.

```json
{
  "attributes": {
    "padding": "0",
    "length": "5"
  },
  "type": "rightPad",
  "name": "Right Pad Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `rightPad`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The right pad transform uses the following structure:

```json
{
  "type": "rightPad",
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

## Examples

This transform takes the incoming attribute configured in the Identity Profile attribute UI and ensures it is padded out to 8 characters in length by adding "0"s to the right.

```bash
Input: "1234"
Output: "12340000"
```

**Transform request body**:

```json
{
  "attributes": {
    "padding": "0",
    "length": "8"
  },
  "type": "rightPad",
  "name": "Right Pad Transform"
}
```

---

<p>&nbsp;</p>

This example takes the user's employeeID attribute from the HR source and ensures it is padded out to 7 characters in length by adding "x"s to the right.

```bash
Input: "1234"
Output: "1234xxx"
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
  "type": "rightPad",
  "name": "Right Pad Transform"
}
```
