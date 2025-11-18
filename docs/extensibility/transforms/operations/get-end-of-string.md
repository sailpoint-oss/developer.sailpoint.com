---
id: get-end-of-string
title: Get End of String
pagination_label: Get End of String
sidebar_label: Get End of String
sidebar_class_name: getEndOfString
keywords: ['transforms', 'operations', 'get', 'end', 'string']
description: Get the rightmost N characters of a string.
slug: /extensibility/transforms/operations/get-end-of-string
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the get end of string transform as an out-of-the-box rule transform provided through SailPoint's Cloud Services Deployment Utility rule. The transform allows you to get the rightmost N characters of a string.

## Transform structure

The structure of a get end of string transform requires the `name` of the referenced rule to be the `Cloud Services Deployment Utility` rule built by SailPoint. You must also set `operation` to `getEndOfString,` and provide a `numChars` value. Last, you must include the `type` and `name` attributes required for all transforms:

```json
{
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "getEndOfString",
    "numChars": "4"
  },
  "type": "rule",
  "name": "Get End Of String Transform"
}
```

## Attributes

The get end of string transform uses the following structure:

```json
{
  "type": "rule",
  "name": "Transform Name",
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "getEndOfString",
    "numChars": "4"
  }
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `rule`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

---

### `attributes` (required)

The `attributes` object contains the rule configuration.

#### Required

- **name** `string` _(required)_  
  Must be set to `Cloud Services Deployment Utility`.

- **operation** `string` _(required)_  
  Must be set to `getEndOfString`.

- **numChars** `string` _(required)_  
  Specifies how many of the rightmost characters within the incoming string the transform returns. If the value is greater than the string length, the transform returns null.

#### Optional

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

This transform returns the last four characters of the input string "abcd1234".

```bash
Input: "abcd1234"
Output: "1234"
```

**Transform request body**:

```json
{
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "getEndOfString",
    "numChars": "4"
  },
  "type": "rule",
  "name": "Get End Of String Transform"
}
```

---

<p>&nbsp;</p>

This transform returns a null value because the incoming string length is only 15 characters long, but the transform requests the rightmost 16 characters.

**Transform request body**:

```json
{
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "getEndOfString",
    "numChars": "16",
    "input": "This is a test."
  },
  "type": "rule",
  "name": "Get End Of String Transform"
}
```
