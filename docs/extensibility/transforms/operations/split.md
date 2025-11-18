---
id: split
title: Split
pagination_label: Split
sidebar_label: Split
sidebar_class_name: split
keywords: ['transforms', 'operations', 'split']
description: Return the Nth element of a split array.
slug: /extensibility/transforms/operations/split
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the split transform to use a specific character or regex string as a delimiter and convert a single incoming string into an array of values. This transform then returns the Nth element of that array. This transform is often useful when you want to split combined names into their constituent parts or when you want to simplify an ordered list of values into a single attribute.

## Transform structure

In addition to the standard `type` and `name` attributes, the split transform requires the `delimiter` and `index` attributes. These parameters, respectively, tell the transform what to use as the pattern to split the string with and which entry in the resulting array of values you want it to return.

```json
{
  "attributes": {
    "delimiter": ",",
    "index": 5
  },
  "type": "split",
  "name": "Split Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `split`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The split transform uses the following structure:

```json
{
  "type": "split",
  "name": "Transform Name",
  "attributes": {
    "delimiter": ",",
    "index": 0
  }
}
```

---

### `attributes` (required)

The `attributes` object contains the split configuration.

#### Required

- **delimiter** `string` _(required)_  
  Either a single character or a regex expression used to identify the break point between substrings in the incoming data.

- **index** `integer` _(required)_  
  The index of the desired array element after the incoming data has been split (0-based indexing).

#### Optional

- **throws** `boolean` _(optional)_  
  Whether an exception is thrown when the index is out of bounds.
  - `true` - Returns "IndexOutOfBoundsException"
  - `false` - Returns null
  
  Default is `true`.

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

This transform takes the incoming attribute configured in the Identity Profile attribute UI, splits it based on the colon `:` character, and returns the second array element (array index 1).

```bash
Input: "abc:123"
Output: "123"
```

**Transform request body**:

```json
{
  "attributes": {
    "delimiter": ":",
    "index": 1
  },
  "type": "split",
  "name": "Split Transform"
}
```

---

<p>&nbsp;</p>

This transform takes the explicit string provided, splits it based on the space (" ") character, and returns the fourth word (array index 3).

```bash
Input: "The quick brown fox jumped over 10 lazy dogs"
Output: "fox"
```

**Transform request body**:

```json
{
  "attributes": {
    "input": "The quick brown fox jumped over 10 lazy dogs",
    "delimiter": " ",
    "index": 3,
    "throws": true
  },
  "type": "split",
  "name": "Split Transform"
}
```
