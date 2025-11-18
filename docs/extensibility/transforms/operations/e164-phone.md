---
id: e164-phone
title: E.164 Phone
pagination_label: E.164 Phone
sidebar_label: E.164 Phone
sidebar_class_name: e164Phone
keywords: ['transforms', 'operations', 'e164', 'phone']
description: Convert a phone number string into an E.164-compatible number.
slug: /extensibility/transforms/operations/e164-phone
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the E.164 phone transform to convert an incoming phone number string into an E.164-compatible number.

:::note Other Considerations

- If the input string to the transform does not represent a valid phone number, the transform returns null.

:::

## Transform structure

The E.164 phone transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "e164phone",
  "name": "Test E.164Phone Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `e164phone`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The E.164 phone transform only requires top-level properties:

```json
{
  "type": "e164phone",
  "name": "Transform Name"
}
```

### `attributes` (required)

The `attributes` object contains the E.164 phone configuration.

#### Optional

- **defaultRegion** `string` _(optional)_  
  The phone number region to format into. Must be in [ISO 3166-1 alpha-2 format](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Default is `US`.

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

This transform transforms a phone number seperated by `-` into the E.164 Phone format.

```bash
Input: "512-777-2222"
Output: "+1512459222"
```

**Transform request body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "512-777-2222"
      },
      "type": "static"
    }
  },
  "type": "e164phone",
  "name": "E.164Phone Transform"
}
```

---

<p>&nbsp;</p>

This transform transforms a phone number seperated by `.` into the E.164 Phone format.

```bash
Input: "779.284.2727"
Output: "+17792842727"
```

**Transform request body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "779.284.2727"
      },
      "type": "static"
    }
  },
  "type": "e164phone",
  "name": "E.164Phone Transform"
}
```

---

<p>&nbsp;</p>

This transform transforms a phone number and country region code into the E.164 Phone format.

```bash
Input: "0412345678"
defaultRegion: "AU"

Output: "+61412345678"
```

**Transform request body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "0412345678"
      },
      "type": "static"
    },
    "defaultRegion": "AU"
  },
  "type": "e164phone",
  "name": "E.164Phone Transform"
}
```

## References

- [https://en.wikipedia.org/wiki/E.164](https://en.wikipedia.org/wiki/E.164)
- [https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
