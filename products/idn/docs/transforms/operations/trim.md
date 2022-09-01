---
id: trim
slug: /docs/transforms/operations/trim
---
# Trim

## Overview

Use the trim transform to trim whitespaces from both the beginning and ending of input strings.

## Transform Structure

The trim transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "trim",
  "name": "Trim Transform"
}
```

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `trim.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

This transform removes the whitespace before the " Vice President" input.

```bash
Input: " Vice President"
Output: "Vice President"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": " Vice President"
      },
      "type": "static"
    }
  },
  "type": "trim",
  "name": "Trim Transform"
}
```

---

<p>&nbsp;</p>

This transform removes the whitespace after the "Austin, Texas " input.

```bash
Input: "Austin, Texas "
Output: "Austin, Texas"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "Austin, Texas "
      },
      "type": "static"
    }
  },
  "type": "trim",
  "name": "Trim Transform"
}
```
