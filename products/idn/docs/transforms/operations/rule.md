---
id: rule
slug: /transforms/operations/rule
---
# Rule

## Overview

Like the reference transform, the rule transform allows you to reuse logic that has already been written for a previous use case. However, you can use the rule transform to reuse code contained within a Generic rule that either is not possible through only transforms or is too complex to maintain with Seaspray.

## Transform Structure

In addition to the standard `type` and `name` attributes, the structure of a rule transform requires the `name` of the rule you want to reference:

```json
{
  "attributes": {
    "name": "Generic Calculation Rule"
  },
  "type": "rule",
  "name": "Rule Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `rule.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **attributes.name** - This is the name of the Generic rule the transform must invoke.

- **Optional Attributes**
  - The rule transform can implement variables within the attributes list. These variables can be defined as static string values or even as the results of other transforms. Any variables defined here are passed to the Generic rule and are available for calculation within that code.
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.

## Examples

If you had a "Generate Random Number" rule that produced a random integer value, this transform would invoke that rule and return the output of the code contained within it.

**Transform Request Body**:

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

This transform shows a more complex use case in which you have a Generic rule written to perform various string manipulation tasks. If the manner the rule code uses to determine which task to run is passed to it by the `operation` variable and the operation is intended to get the last n characters of a string, n can be provided to the rule via the `numChars` variable. This transform invokes rule code to get the last three characters of the string passed to it via the UI configuration.

**Transform Request Body**:

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
