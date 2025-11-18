---
id: index-of
title: Index Of
pagination_label: Index Of
sidebar_label: Index Of
sidebar_class_name: indexOf
keywords: ['transforms', 'operations', 'index', 'of']
description: Get the location of a specific substring within a value.
slug: /extensibility/transforms/operations/index-of
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the index of transform to get the location of a specific substring within an incoming value. This transform is often useful in conjunction with the substring transform for getting parts of strings that can be dynamic in length or composition. If the substring you are searching for does not occur within the data, the transform returns -1.

:::note Other Considerations

- If the substring you are searching for occurs multiple times within the incoming data, the transform returns the location of the first occurrence. If you want the last occurrence of a substring, use the [Last Index Of](./last-index-of.md) transform. If you want an occurrence that is neither first nor last, use the [Substring](./substring.md) transform.

:::

## Transform structure

The indexOf transform requires only the substring which you want to search for, along with the `type` and `name` attributes:

```json
{
  "attributes": {
    "substring": "admin_"
  },
  "type": "indexOf",
  "name": "Index Of Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `indexOf`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The indexOf transform uses the following structure:

```json
{
  "type": "indexOf",
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
  The string whose beginning location within the incoming data you want to find. Returns `-1` if not found.

#### Optional

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

The "admin\_" substring occurs at the very beginning of the input string, so this transform returns 0.

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
  "type": "indexOf",
  "name": "Index Of Transform"
}
```

---

<p>&nbsp;</p>

Though the letter "b" occurs multiple times throughout the input string, the first time it occurs is within the index location 1, so the transform returns that value.

```bash
Input: "abcabcabc"
Output: "1"
```

**Transform request body**:

```json
{
  "attributes": {
    "substring": "b"
  },
  "type": "indexOf",
  "name": "Index Of Transform"
}
```
