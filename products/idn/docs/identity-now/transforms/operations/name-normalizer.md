---
id: name-normalizer
title: Name Normalizer
pagination_label: Name Normalizer
sidebar_label: Name Normalizer
sidebar_class_name: nameNormalizer
keywords: ["transforms", "operations", "name normalizer"]
description: Clean or standardize the spelling of strings coming in from source systems.
slug: /docs/transforms/operations/name-normalizer
tags: ["Transforms", "Operations", "Name"]
---

## Overview

Use the name normalizer transform to clean or standardize the spelling of strings coming in from source systems. The most common use for this transform is for names and other proper nouns, but the transform is not necessarily limited to those data elements.

The normalization logic within the transform handles a wide range of use cases:

- Proper casing/capitalization of names
  - Any string containing either a space, a hyphen or an apostrophe - the transform splits these by that character and capitalizes the first character of each resulting substring.
- Special replacements of patterns that include "MC" and "MAC" (or case-based variations of those two strings)
  - The transform automatically converts "MC" to "Mc" and "MAC" to "Mac" when they are part of a patronymic last name.
- Consistent capitalization of strings that are part of a toponymic surname or a generational suffix:
  - Convert "VON" to "von"
  - Convert "DEL" to "del"
  - Convert "OF" to "of"
  - Convert "DE" to "de"
  - Convert "LA" to "la"
  - Convert "Y" to "y"
  - Convert Roman numeral suffixes to all capitalized letters (e.g., "iii" becomes "III")

## Transform Structure

The name normalizer transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "normalizeNames",
  "name": "Name Normalizer Transform"
}
```

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `normalizeNames`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

This transform takes a static value and normalizes it to a consistent format.

```bash
Input: "jOHN VON SmITh"
Output: "John von Smith"
```

```json
{
  "attributes": {
    "input": {
      "attributes": {
        "value": "jOHN VON SmITh"
      },
      "type": "static"
    }
  },
  "type": "normalizeNames",
  "name": "Name Normalizer Transform"
}
```

---

<p>&nbsp;</p>

This transform takes the user's "LastName" attribute from the "HR Source" and normalizes the name to a consistent format.

```bash
Input: "Dr. JOHN D. O'BRIEN"
Output: "Dr. John D. O'Brien"
```

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
  "type": "normalizeNames",
  "name": "Name Normalizer Transform"
}
```
