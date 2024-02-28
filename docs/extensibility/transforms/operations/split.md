---
id: split
title: Split
pagination_label: Split
sidebar_label: Split
sidebar_class_name: split
keywords: ['transforms', 'operations', 'split']
description: Return the Nth element of a split array.
slug: /transforms/operations/split
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the split transform to use a specific character or regex string as a delimiter and convert a single incoming string into an array of values. This transform then returns the Nth element of that array. This transform is often useful when you want to split combined names into their constituent parts or when you want to simplify an ordered list of values into a single attribute.

## Transform Structure

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

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `split`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **delimiter** - This can be either a single character or a regex expression. Transforms use it identify the break point between two substrings in the incoming data.
  - **index** - This is the integer value for the desired array element after the incoming data has been split into a list. The array is a 0-based object, so the first array element would be index 0, the second element would be index 1, etc.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **throws** - This boolean (true/false) value indicates whether an exception is thrown and returned as an output when an index is out of bounds with the resulting array (i.e., the provided `index` value is larger than the size of the array).
    - true - The transform returns "IndexOutOfBoundsException".
    - false - The transform returns null.
    - If no throws value is provided, the transform defaults to true and returns an "IndexOutOfBoundsException".

## Examples

This transform takes the incoming attribute configured in the Identity Profile attribute UI, splits it based on the colon `:` character, and returns the second array element (array index 1).

```bash
Input: "abc:123"
Output: "123"
```

**Transform Request Body**:

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

**Transform Request Body**:

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
