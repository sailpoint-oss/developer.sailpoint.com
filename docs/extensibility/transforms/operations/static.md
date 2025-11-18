---
id: static
title: Static
pagination_label: Static
sidebar_label: Static
sidebar_class_name: static
keywords: ['transforms', 'operations', 'static']
description: Return a fixed string value.
slug: /extensibility/transforms/operations/static
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the static transform to return a fixed string value, or more commonly, to evaluate [Velocity Template Language](https://velocity.apache.org/engine/1.7/user-guide.html). The latter implementation is often useful when you are using if/then/else logic or iterating through a for loop. The static transform can also take other dynamically provided variables as inputs into the `value` attribute.

:::note Other Considerations

- When you are using static transforms within the create profile for a source, you can enter the value directly in the input field if the user selects Static as the attribute type.
- Because Identity Security Cloud supports the ability to order attributes in a create profile, you can use the Velocity template of an attribute higher in the list to generate a static value for an attribute that is lower in the list. For example, if you wanted to generate an email address based on a display name, you would need to do the follwing:
  - Move the "displayName" attribute higher in the list so that it is created before the email address.
  - In the "mail" attribute, select Static for the attribute type. In the Static Value field, enter `$displayName@yourdomain.com`.

:::

## Transform structure

In addition to the standard `type` and `name` attributes, the static transform requires a value attribute to be specified:

```json
{
  "attributes": {
    "value": "Employee"
  },
  "type": "static",
  "name": "Static Transform"
}
```

## Attributes

The static transform uses the following structure:

```json
{
  "type": "static",
  "name": "Transform Name",
  "attributes": {
    "value": "string or Velocity template"
  }
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `static`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

---

### `attributes` (required)

The `attributes` object contains the configuration for the static value or template.

#### Required

- **value** `string` _(required)_  
  A JSON string value, either a fixed string or conditional logic using Velocity Template Language.

#### Optional (dynamic variables)

The static transform can implement variables within the `value` expression. These variables can be defined as additional properties within the `attributes` object and can themselves be the results of other transforms.

**Example:**

```json
{
  "attributes": {
    "value": "$myVariable",
    "myVariable": {
      "type": "accountAttribute",
      "attributes": { ... }
    }
  }
}
```

## Examples

This transform uses a dynamic variable called `workerType`, which is set to the value of the user's HR record's empType value. The static transform then returns that value through the use of Velocity variable notation (i.e., `$<variableName>`).

**Transform request body**:

```json
{
  "attributes": {
    "workerType": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "empType"
      },
      "type": "accountAttribute"
    },
    "value": "$workerType"
  },
  "type": "static",
  "name": "Static Transform"
}
```

---

<p>&nbsp;</p>

This transform extends the previous one to show how you can use if/else logic to return data based on contingent logic.

**Transform request body**:

```json
{
  "attributes": {
    "workerType": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "empType"
      },
      "type": "accountAttribute"
    },
    "value": "#if($workerType=='Employee')Full-Time#{else}Contingent#end"
  },
  "type": "static",
  "name": "Static Transform"
}
```

## References

- [https://velocity.apache.org/engine/1.7/user-guide.html](https://velocity.apache.org/engine/1.7/user-guide.html)
- [https://velocity.apache.org/engine/2.0/vtl-reference.html](https://velocity.apache.org/engine/2.0/vtl-reference.html)
