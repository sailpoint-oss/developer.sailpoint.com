---
id: lookup
slug: idn/docs/transforms/operations/lookup
---
# IdentityNow Transforms - Lookup

## Overview

Use the lookup transform to take in an incoming string value and compare it to a list of key-value pairs to determine which output to return. If the incoming data matches a key, the transform returns the corresponding value. If the incoming key does not match a key, the transform returns the table's optional default value.

### Other Considerations

> - If the input does not match any key value within the table and no default value is provided, the transform returns null.

## Transform Structure

In addition to the `type` and `name` attributes, the structure of a lookup transform involves a `table` entry of key-value pairs:

```json
{
  "attributes": {
    "table": {
        "USA": "Americas",
        "FRA": "EMEA",
        "AUS": "APAC",
        "default": "Unknown Region"
    }
  },
  "type": "lookup",
  "name": "Lookup Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `lookup.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **table** - This is a JSON object of key-value pairs. The key is the string the transform tries to match to the input, and the value is the output string the transform returns if it matches the key.
  > **Note** This is a use for the optional default key value here: if none of the three countries in the earlier example matches the input string, the transform returns "Unknown Region" for the attribute mapped to this transform.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

This transform tries to map a telephone area code to a city in Texas. There is no `default` entry in the table map, so the transform returns null if there is no provided area code that is not one of the provided four values.

**Transform Request Body**:

```json
{
  "attributes": {
    "table": {
        "512": "Austin",
        "281": "Houston",
        "214": "Dallas",
        "210": "San Antonio"
    }
  },
  "type": "lookup",
  "name": "Lookup Transform"
}
```

---

<p>&nbsp;</p>

This transform extends the previous one to show how multiple key values can be mapped to the same output value. However, duplicate key values are not allowed, so this will throw an error.

**Transform Request Body**:

```json
{
  "attributes": {
    "table": {
        "512": "Austin",
        "281": "Houston",
        "713": "Houston",
        "832": "Houston",
        "214": "Dallas",
        "210": "San Antonio"
    }
  },
  "type": "lookup",
  "name": "Test Lookup Transform"
}
```
