---
id: last-index-of
title: Last Index Of
pagination_label: Last Index Of
sidebar_label: Last Index Of
sidebar_class_name: lastIndexOf
keywords: ['transforms', 'operations', 'last', 'index', 'of']
description: Returns last location of specific substring.
slug: /extensibility/transforms/operations/last-index-of
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the last index of transform to get the last location of a specific substring within an incoming value. This transform is often useful in conjunction with the substring transform for getting parts of strings that can be dynamic in length or composition. If the substring you are searching for does not occur within the data, the transform returns -1.

:::note Other Considerations

If the substring you are searching for occurs multiple times within the incoming data, the transform returns the location of the last occurrence. If you want the first occurrence of a substring, use the [Index Of](./index-of.md) transform. If you want an occurrence that is neither first nor last, use the [Substring](./substring.md) transform.

:::

## Transform structure

The lastIndexOf transform requires only the substring you want to search for, along with the transform's `type` and `name` attributes:

```json
{
  "attributes": {
    "substring": "admin_"
  },
  "type": "lastIndexOf",
  "name": "Last Index Of Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `lastIndexOf`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The lastIndexOf transform uses the following structure:

```json
{
  "type": "lastIndexOf",
  "name": "Transform Name",
  "attributes": {
    "substring": "searchString"
  }
}
```

---

### `attributes` (required)

The `attributes` object contains the search configuration.

#### Required

- **substring** `string` _(required)_  
  The string whose last occurrence location within the incoming data you want to find. Returns `-1` if not found.

#### Optional

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

The "admin\_" substring only occurs once at the very beginning of the input string, so this transform returns 0.

```bash
Input: "admin_jsmith"
Output: "0"
```

**Transform request body**:

```json
{
  "attributes": {
    "substring": "admin_"
  },
  "type": "lastIndexOf",
  "name": "Last Index Of Transform"
}
```

---

<p>&nbsp;</p>

While the letter "b" occurs multiple times throughout the input string, the last time it occurs is within index location 7, so this transform returns that value.

**Transform request body**:

```bash
Input: "abcabcabc"
Output: "7"
```

```json
{
  "attributes": {
    "substring": "b"
  },
  "type": "lastIndexOf",
  "name": "Last Index Of Transform"
}
```
