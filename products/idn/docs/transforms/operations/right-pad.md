---
id: right-pad
slug: /transforms/operations/right-pad
---
# Right Pad

## Overview

Use the right pad transform to pad an incoming string with a user-supplied character out to a specific number of characters. This transform is often useful for data normalization situations in which data such as employee IDs are not uniform in length but need to be for downstream systems. 

### Other Considerations

> - If the input to the right pad transform is null, the transform returns a null value.

## Transform Structure

In addition to the standard `type` and `name` attributes, the right pad transform requires the `length` attribute, which tells the transform how many characters to pad the incoming string to.

```json
{
  "attributes": {
    "padding": "0",
    "length": "5"
  },
  "type": "rightPad",
  "name": "Right Pad Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `rightPad.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **length** - This is an integer value for the final output string's desired length.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **padding** - This string value represents the character the transform will pad the incoming data to to get to the desired length.
    - If no padding value is provided, the transform defaults to a single space (" ") character for padding.

## Examples

This transform takes the incoming attribute configured in the Identity Profile attribute UI and ensures it is padded out to 8 characters in length by adding "0"s to the right.

```bash
Input: "1234"
Output: "12340000"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "padding": "0",
    "length": "8"
  },
  "type": "rightPad",
  "name": "Right Pad Transform"
}
```

---

<p>&nbsp;</p>

This example takes the user's employeeID attribute from the HR source and ensures it is padded out to 7 characters in length by adding "x"s to the right.

```bash
Input: "1234"
Output: "1234xxx"
```

**Transform Request Body**:

```json
{
  "attributes": {
    "padding": "x",
    "length": "7",
    "input": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "employeeID"
      },
      "type": "accountAttribute"
    }
  },
  "type": "rightPad",
  "name": "Right Pad Transform"
}
```
