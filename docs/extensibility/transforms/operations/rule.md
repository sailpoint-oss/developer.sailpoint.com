---
id: rule
title: Rule
pagination_label: Rule
sidebar_label: Rule
sidebar_class_name: rule
keywords: ['transforms', 'operations', 'rule']
description: Reuse rule logic that has already been written for a previous use case.
slug: /extensibility/transforms/operations/rule
tags: ['Transforms', 'Transform Operations']
---

## Overview

Like the reference transform, the rule transform allows you to reuse logic that has already been written for a previous use case. However, you can use the rule transform to reuse code contained within a Transform rule that either is not possible through only transforms or is too complex to maintain with Seaspray.

## Transform structure

In addition to the standard `type` and `name` attributes, the structure of a rule transform requires the `name` of the rule you want to reference:

```json
{
  "attributes": {
    "name": "Transform Calculation Rule"
  },
  "type": "rule",
  "name": "Rule Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `rule`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The rule transform uses the following structure:

```json
{
  "type": "rule",
  "name": "Transform Name",
  "attributes": {
    "name": "Transform Calculation Rule"
  }
}
```

---

### `attributes` (required)

The `attributes` object contains the rule configuration.

#### Required

- **name** `string` _(required)_  
  The name of the Transform rule the transform must invoke.

#### Optional (dynamic variables)

The rule transform can implement variables within the `attributes` object. These variables can be defined as static string values or as the results of other transforms. Any variables defined here are passed to the Transform rule and are available for calculation within that code.

## Examples

If you had a "Generate Random Number" rule that produced a random integer value, this transform would invoke that rule and return the output of the code contained within it.

**Transform request body**:

```json
{
  "attributes": {
    "name": "Generate Random Number"
  },
  "type": "rule",
  "name": "Rule Transform"
}
```

---

<p>&nbsp;</p>

This transform shows a more complex use case in which you have a Transform rule written to perform various string manipulation tasks. If the manner the rule code uses to determine which task to run is passed to it by the `operation` variable and the operation is intended to get the last n characters of a string, n can be provided to the rule via the `numChars` variable. This transform invokes rule code to get the last three characters of the string passed to it with the UI configuration.

**Transform request body**:

```json
{
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "getEndOfString",
    "input": {
      "type": "trim"
    },
    "numChars": "3"
  },
  "type": "rule",
  "name": "Rule Transform"
}
```
