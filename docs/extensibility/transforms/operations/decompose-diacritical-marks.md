---
id: decompose-diacritical-marks
title: Decompose Diacritical Marks
pagination_label: Decompose Diacritical Marks
sidebar_label: Decompose Diacritical Marks
sidebar_class_name: decomposeDiacriticalMarks
keywords: ['transforms', 'operations', 'decompose', 'diacritical', 'marks']
description: Clean or standardize symbols used within language.
slug: /extensibility/transforms/operations/decompose-diacritical-marks
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the decompose diacritical marks transform to clean or standardize symbols used within language to inform the reader how to say or pronounce a letter. These symbols are often incompatible with downstream applications and must be standardized to another character set such as ASCII.

The following are examples of diacritical marks:

> - Ā
> - Ĉ
> - Ň
> - Ŵ

The decomposeDiacriticalMarks transform uses the [Normalizer library](https://docs.oracle.com/javase/7/docs/api/java/text/Normalizer.html) to decompose the diacritical marks. It specifically uses the Normalization Form KD (NFKD), as described in Sections 3.6, 3.10, and 3.11 of the Unicode Standard, also summarized under [Annex 4: Decomposition](https://www.unicode.org/reports/tr15/tr15-23.html#Decomposition).

After decomposition, the transform uses a [Regex Replace](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html) to replace all diacritical marks by using the `InCombiningDiacriticalMarks` property of Unicode (ex. `replaceAll("[\\p{InCombiningDiacriticalMarks}]", "")`).

## Transform structure

The transform for decompose diacritical marks requires only the transform's `type` and `name` attributes:

```json
{
  "type": "decomposeDiacriticalMarks",
  "name": "Decompose Diacritical Marks Transform"
}
```

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `decomposeDiacriticalMarks`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.

- **Optional Attributes**

  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

```bash
Input: "Āric"
Output: "Aric"
```

**Transform request body**:

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

**Transform request body**:

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

## Testing

To run some tests in code, use this java code to compare the results of what the transform does to what your code does:

```java
import java.text.Normalizer;
import java.util.regex.Pattern;

// Decomposes characters from their diacritical marks
input = Normalizer.normalize(input, Normalizer.Form.NFKD);

// Removes the marks
input = input.replaceAll("[\\p{InCombiningDiacriticalMarks}]", "");
```
