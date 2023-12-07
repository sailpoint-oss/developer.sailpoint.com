---
id: left-pad
title: Left Pad
pagination_label: Left Pad
sidebar_label: Left Pad
sidebar_class_name: leftPad
keywords: ['transforms', 'operations', 'left', 'pad']
description: Left pad of the input string.
slug: /docs/transforms/operations/left-pad
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the left pad transform to pad an incoming string with a user-supplied character out to a specific number of characters. This transform is often useful for data normalization situations in which data such as employee IDs are not uniform in length but need to be for downstream systems.

:::note Other Considerations

- If the input to the left pad transform is null, the transform returns a null value.

:::

## Transform Structure

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

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `leftPad`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **length** - This is an integer value for the final output string's desired length.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **padding** - This string value represents the character the transform will pad the incoming data to to get to the desired length.
    - If no padding value is provided, the transform defaults to a single space (" ") character for padding.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

This transform takes the incoming attribute configured in the identity profile attribute UI and ensures it is padded out to 8 characters in length by adding "0"s to the left.

```bash
Input: "1234"
Output: "00001234"
```

**Transform Request Body**:

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

**Transform Request Body**:

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
