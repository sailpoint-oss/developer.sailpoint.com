# IdentityNow Transforms - Lower

## Overview

Use the lower transform to convert an input string into all lowercase letters.

## Transform Structure

The lower transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "lower",
  "name": "Lower Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `lower.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

![Lowercase Transform Input Screenshot](../../../img/transforms/lower/lower_transform_input.png)

## Examples

This transform takes in the input "ACTIVE" and produces "active" as the output.

```bash
Input:"ACTIVE"
Output:"active"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "ACTIVE"
      },
      "type": "static"
    }
  },
  "type": "lower",
  "name": "Lower Transform"
}
```

---

<p>&nbsp;</p>

This transform takes in the input "All-Access" and produces "all-access" as the output.

```bash
Input:"All-Access"
Output:"all-access"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "All-Access"
      },
      "type": "static"
    }
  },
  "type": "lower",
  "name": "Lower Transform"
}
```
