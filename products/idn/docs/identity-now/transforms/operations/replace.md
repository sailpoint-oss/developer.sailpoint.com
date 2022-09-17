---
id: replace
title: Replace
pagination_label: Replace
sidebar_label: Replace
sidebar_class_name: replace
keywords: ["transforms", "operations", "replace"]
description: Find and replace all instances of a single string.
slug: /docs/transforms/operations/replace
tags: ["Transforms", "Transform Operations"]
---

## Overview

Use the replace transform to find a given pattern of characters within incoming
data and replace all instances of that pattern with alternate values. The
transform recognizes standard regex syntax. See the [References](#references)
section for more information about regex.

## Transform Structure

The replace transform takes a `regex` attribute as an argument to identify which
pattern to replace and a `replacement` attribute for the characters to replace
the pattern with. The transform also requires the standard `type` and `name`
attributes:

```json
{
  "attributes": {
    "regex": "IIQ",
    "replacement": "IdentityNow"
  },
  "type": "replace",
  "name": "Replace Transform"
}
```

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `replace`.
  - **name** - This is a required attribute for all transforms. It represents
    the name of the transform as it will appear in the UI's dropdown menus.
  - **regex** - This is the pattern you want to replace.
  - **replacement** - This is the replacement string that replaces the pattern
    wherever it occurs.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether
    the transform logic should be reevaluated every evening as part of the
    identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the
    input data passed into the transform logic. If no input is provided, the
    transform takes its input from the source and attribute combination
    configured with the UI.

## Examples

This transform makes a simple word replacement, exchanging "IIQ" for
"IdentityNow".

```bash
Input: "Working with IIQ is fun"
Output: "Working with IdentityNow is fun"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "regex": "IIQ",
    "replacement": "IdentityNow"
  },
  "type": "replace",
  "name": "Replace Transform"
}
```

---

<p>&nbsp;</p>

This example uses a more complex regex pattern to remove any non-alphabet
characters from the input string.

```bash
Input: "The quick brown fox jumped over 10 lazy dogs"
Output: "Thequickbrownfoxjumpedoverlazydogs"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "input": "The quick brown fox jumped over 10 lazy dogs",
    "regex": "[^a-zA-Z]",
    "replacement": ""
  },
  "type": "replace",
  "name": "Replace Transform"
}
```

## References

- [https://www.regular-expressions.info/replacetutorial.html](https://www.regular-expressions.info/replacetutorial.html)
- [https://regex101.com/](https://regex101.com/)
