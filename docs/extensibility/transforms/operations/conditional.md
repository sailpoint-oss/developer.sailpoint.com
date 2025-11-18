---
id: conditional
title: Conditional
pagination_label: Conditional
sidebar_label: Conditional
sidebar_class_name: conditional
keywords: ['transforms', 'operations', 'conditional']
description: Output different values depending on simple conditional logic.
slug: /extensibility/transforms/operations/conditional
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the conditional transform to output different values depending on simple conditional logic. This is a convenient transform - the same capability can be implemented with a "static" transform, but this transform has greater simplicity and null-safe error checking.

:::note Other Considerations

- The two operands within the transform cannot be null; if they are, an IllegalArgumentException is thrown.
- The `expression` attribute must be "eq," or the transform will throw an IllegalArgumentException.
- All attribute string values are case-sensitive, so differently cased strings (e.g., "engineering" and "Engineering") will not return as matched.

:::

## Transform structure

In addition to the `type` and `name` attributes, the conditional transform requires an `expression`, a `positiveCondition`, and a `negativeCondition`. If the expression evaluates to false, the transform returns the negative condition; otherwise it returns the positive condition.

```json
{
  "attributes": {
    "expression": "foo eq foo",
    "positiveCondition": "true",
    "negativeCondition": "false"
  },
  "type": "conditional",
  "name": "Conditional Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `conditional`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The conditional transform uses the following structure:

```json
{
  "type": "conditional",
  "name": "Transform Name",
  "attributes": {
    "expression": "valueA eq valueB",
    "positiveCondition": "trueResult",
    "negativeCondition": "falseResult"
  }
}
```

---

### `attributes` (required)

The `attributes` object contains the conditional logic configuration.

#### Required

- **expression** `string` _(required)_  
  The comparison statement following the structure `ValueA eq ValueB` where `ValueA` and `ValueB` are static strings or outputs of other transforms. The `eq` operator is the only valid comparison.

- **positiveCondition** `string` _(required)_  
  The output of the transform if the expression evaluates to true.

- **negativeCondition** `string` _(required)_  
  The output of the transform if the expression evaluates to false.

#### Optional (dynamic variables)

Additional properties can be defined within the `attributes` object to serve as variables in the expression or conditions. These can be the results of other transforms referenced using `$variableName` syntax.

## Examples

This transform takes the user's HR-defined department attribute and compares it to the value of "Science". If this is the user's department, the transform returns `true`. Otherwise, it returns `false`.

**Transform request body**:

```json
{
  "attributes": {
    "expression": "$department eq Science",
    "positiveCondition": "true",
    "negativeCondition": "false",
    "department": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "department"
      },
      "type": "accountAttribute"
    }
  },
  "type": "conditional",
  "name": "Test Conditional Transform"
}
```

---

<p>&nbsp;</p>

This transform extends the previous one by returning the output of another Seaspray transform depending on the result of the expression. You can assign Seaspray transforms' outputs to variables and then reference them within the `positiveCondition` and `negativeCondition` attributes.

**Transform request body**:

```json
{
  "attributes": {
    "expression": "$department eq Science",
    "positiveCondition": "$scienceBuilding",
    "negativeCondition": "$adminBuilding",
    "department": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "department"
      },
      "type": "accountAttribute"
    },
    "scienceBuilding": {
      "attributes": {
        "value": "Building S"
      },
      "type": "static"
    },
    "adminBuilding": {
      "attributes": {
        "value": "Building A"
      },
      "type": "static"
    }
  },
  "type": "conditional",
  "name": "Test Conditional Transform"
}
```
