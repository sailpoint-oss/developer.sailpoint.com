---
id: replace
title: Replace
pagination_label: Replace
sidebar_label: Replace
sidebar_class_name: replace
keywords: ['transforms', 'operations', 'replace']
description: Find and replace all instances of a single string.
slug: /extensibility/transforms/operations/replace
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the replace transform to find a given pattern of characters within incoming data and replace all instances of that pattern with alternate values. The transform recognizes standard regex syntax. See the [References](#references) section for more information about regex.

## Transform structure

The replace transform takes a `regex` attribute as an argument to identify which pattern to replace and a `replacement` attribute for the characters to replace the pattern with. The transform also requires the standard `type` and `name` attributes:

```json
{
  "attributes": {
    "regex": "IIQ",
    "replacement": "Identity Security Cloud"
  },
  "type": "replace",
  "name": "Replace Transform"
}
```

## Attributes

The replace transform uses the following structure:

```json
{
  "type": "replace",
  "name": "Transform Name",
  "attributes": {
    "regex": "pattern",
    "replacement": "newValue"
  }
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `replace`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

---

### `attributes` (required)

The `attributes` object contains the replacement configuration.

#### Required

- **regex** `string` _(required)_  
  The pattern to search for and replace. Supports standard regex syntax.

- **replacement** `string` _(required)_  
  The replacement string that replaces the pattern wherever it occurs.

#### Optional

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

This transform makes a simple word replacement, exchanging "IIQ" for "Identity Security Cloud".

```bash
Input: "Working with IIQ is fun"
Output: "Working with Identity Security Cloud is fun"
```

**Transform request body**:

```json
{
  "attributes": {
    "regex": "IIQ",
    "replacement": "Identity Security Cloud"
  },
  "type": "replace",
  "name": "Replace Transform"
}
```

---

<p>&nbsp;</p>

This example uses a more complex regex pattern to remove any non-alphabet characters from the input string.

```bash
Input: "The quick brown fox jumped over 10 lazy dogs"
Output: "Thequickbrownfoxjumpedoverlazydogs"
```

**Transform request body**:

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
- [https://extendsclass.com/regex-tester.html](https://extendsclass.com/regex-tester.html)
