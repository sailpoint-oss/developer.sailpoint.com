---
id: replace-all
title: Replace All
pagination_label: Replace All
sidebar_label: Replace All
sidebar_class_name: replaceAll
keywords: ['transforms', 'operations', 'replace all']
description: Find and replace all instances of all patterns.
slug: /extensibility/transforms/operations/replace-all
tags: ['Transforms', 'Transform Operations']
---

## Overview

The replace all transform works like the replace transform, except that it can perform multiple replace operations on the incoming data instead of just one pattern. Use the replace all transform to find multiple patterns of characters within incoming data and replace all instances of those patterns with alternate values. The transform recognizes standard regex syntax. See the [References](#references) section for more information about regex.

## Transform Structure

The replace transform takes a `table` attribute of key-value pairs as an argument. Each pair identifies the pattern to search for as its key and the replacement string as its value. The transform also requires the standard `type` and `name` attributes:

```json
{
  "attributes": {
    "table": {
      "-": " ",
      "\"": "'",
      "ñ": "n"
    }
  },
  "type": "replaceAll",
  "name": "Replace All Transform"
}
```

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `replaceAll`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **regex** - This is the pattern you want to replace.
  - **replacement** - This is the replacement string that replaces the pattern wherever it occurs.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

This transform makes a simple set of special character replacements, exchanging a space for a hyphen and removing the Spanish tilde from the "n."

```bash
Input: "Enrique Jose-Piñon"
Output: "Enrique Jose Pinon"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "table": {
      ".": "-",
      "\"": "'",
      "ñ": "n"
    }
  },
  "type": "replaceAll",
  "name": "Replace All Transform"
}
```

---

<p>&nbsp;</p>

This example uses more complex regex patterns to remove any alphabet characters from the input string and replace periods with hyphens.

```bash
Input: "ad512.777.1234"
Output: "512-777-1234"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "input": "",
    "table": {
      "[.]": "-",
      "[a-zA-z]": ""
    }
  },
  "type": "replaceAll",
  "name": "Replace All Transform"
}
```

## References

- [https://www.regular-expressions.info/replacetutorial.html](https://www.regular-expressions.info/replacetutorial.html)
- [https://regex101.com/](https://regex101.com/)
