---
id: get-end-of-string
slug: /idn/transforms/operations/get-end-of-string
---
# Get End of String

## Overview

Use the get end of string transform as an out-of-the-box rule transform provided through SailPoint's Cloud Services Deployment Utility rule. The transform allows you to get the rightmost N characters of a string.

## Transform Structure

The structure of a get end of string transform requires the `name` of the referenced rule to be the "Cloud Services Deployment Utility" rule built by SailPoint. You must also set `operation` to `getEndOfString,` and provide a `numChars` value. Last, you must include the `type` and `name` attributes required for all transforms:

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

- **Required Attributes**
  - **type** - This must always be set to `rule.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **attributes.name** - This must always be set to "Cloud Services Deployment Utility."
  - **operation** - This must always be set to "getEndOfString."
  - **numChars** - This specifies how many of the rightmost characters within the incoming string the transform returns. If the value of numChars is greater than the string length, the transform returns null.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

This transform returns the last four characters of the input string "abcd1234."

```bash
Input: "abcd1234"
Output: "1234"
```

**Transform Request Body**:

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

**Transform Request Body**:

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
