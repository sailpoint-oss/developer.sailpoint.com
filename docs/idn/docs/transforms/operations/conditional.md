---
id: conditional
slug: /idn/transforms/operations/conditional
---
# Conditional

## Overview

Use the conditional transform to output different values depending on simple conditional logic. This is a convenience transform - the same capability can be implemented with a "static" transform, but this transform has greater simplicity and null-safe error checking.

### Other Considerations

> - The two operands within the transform cannot be null; if they are, an IllegalArgumentException is thrown.
> - The `expression` attribute must be "eq," or the transform will throw an IllegalArgumentException.
> - All attribute string values are case-sensitive, so differently cased strings (e.g., "engineering" and "Engineering") will not return as matched.

## Transform Structure

In addition to the `type` and `name` attributes, the conditional transform requires an `expression,` a `positiveCondition,` and a `negativeCondition.` If the expression evaluates to false, the transform returns the negative condition; otherwise it returns the positive condition.

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

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `conditional.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **expression** - This comparison statement follows the structure of `ValueA eq ValueB` where `ValueA` and `ValueB` are static strings or outputs of other transforms; the `eq` operator is the only valid comparison.
  - **positiveCondition** - This is the output of the transform if the expression evaluates to true.
  - **negativeCondition** - This is the output of the transform if the expression evaluates to false.
- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.

## Examples

This transform takes the user's HR-defined department attribute and compares it to the value of "Science." If this is the user's department, the transform returns "true;" otherwise it returns "false."

**Transform Request Body**:

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

**Transform Request Body**:

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
