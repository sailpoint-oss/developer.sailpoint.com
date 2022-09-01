---
id: random-alphanumeric
slug: /docs/transforms/operations/random-alphanumeric
---
# Random Alphanumeric

## Overview

Use the random alphanumeric transform to generate a random string of any length, comprising both numbers and letters (both lowercase and uppercase).

## Transform Structure

The random alphanumeric transform only requires the standard `type` and `name` attributes:

```json
{
  "type": "randomAlphaNumeric",
  "name": "Random Alphanumeric Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `randomAlphaNumeric.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **length** - This is the integer value specifying the required size/number of characters the random string must contain. 
    - This value must be a positive number and cannot be blank.
    - If no length is provided, the transform defaults to a value of 32.
    - Due to identity attribute data constraints, the maximum allowable value is 450 characters.

## Examples

Since no explicit length is provided, this transform generates a 32-character random string, such as "VtPeE9WL56lMTlvfjr02KXqS3KtgDSuk."

**Transform Request Body**:

```json
{
  "type": "randomAlphaNumeric",
  "name": "Random Alphanumeric Transform"
}
```

---

<p>&nbsp;</p>

This transform generates a 10-character random string, such as "5GH2qsjU27."

**Transform Request Body**:

```json
{
  "attributes": {
      "length": "10"
  },
  "type": "randomAlphaNumeric",
  "name": "Random Alphanumeric Transform"
}
```
