---
id: decompose-diacritical-marks
slug: /transforms/operations/decompose-diacritical-marks
---
# Decompose Diacritial Marks

## Overview

Use the decompose diacritical marks transform to clean or standardize symbols used within language to inform the reader how to say or pronounce a letter. These symbols are often incompatible with downstream applications and must be standardized to another character set such as ASCII.

The following are examples of diacritical marks:

> - Ā
> - Ĉ
> - Ň
> - Ŵ

## Transform Structure

The transform for decompose diacritical marks requires only the transform's `type` and `name` attributes:

```json
{
  "type": "decomposeDiacriticalMarks",
  "name": "Decompose Diacritical Marks Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `decomposeDiacriticalMarks.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.

- **Optional Attributes**

  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

```bash
Input: "Āric"
Output: "Aric"
```

**Transform Request Body**:

```json
{
  "type": "decomposeDiacriticalMarks",
  "name": "Test Decompose Diacritical Marks Transform"
}
```

---

<p>&nbsp;</p>

This transform takes the user's "LastName" attribute from the "HR Source" and replaces any diacritical marks with ASCII-compatible values.

```bash
Input: "Dubçek"
Output: "Dubcek"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "LastName"
      },
      "type": "accountAttribute"
    }
  },
  "type": "decomposeDiacriticalMarks",
  "name": "Decompose Diacritical Marks Transform"
}
```
