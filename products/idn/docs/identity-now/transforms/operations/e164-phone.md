---
id: e164-phone
slug: /docs/transforms/operations/e164-phone
description: Convert a phone number string into an E.164-compatible number.
---
# E.164 Phone

## Overview

Use the E.164 phone transform to convert an incoming phone number string into an E.164-compatible number.

:::note Other Considerations

- If the input string to the transform does not represent a valid phone number, the transform returns null.

:::

## Transform Structure

The E.164 phone transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "e164phone",
  "name": "Test E.164Phone Transform"
}
```

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `E.164phone.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.
  - **defaultRegion** - This is an optional attribute used to define the phone number region to format into. If no defaultRegion is provided, the transform takes US as the default country. The format of the country code must be in [ISO 3166-1 alpha-2 format](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).

## Examples

This transform transforms a phone number seperated by `-` into the E.164 Phone format.

```bash
Input: "512-777-2222"
Output: "+1512459222"
```

**Transform Request Body**:

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

**Transform Request Body**:

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

**Transform Request Body**:

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
