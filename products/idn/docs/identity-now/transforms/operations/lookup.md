---
id: lookup
title: Lookup
pagination_label: Lookup
sidebar_label: Lookup
sidebar_class_name: lookup
keywords: ["transforms", "operations", "lookup"]
description: Look up and return a key's matching value.
slug: /docs/transforms/operations/lookup
tags: ["Transforms", "Transform Operations"]
---

## Overview

Use the lookup transform to take in an incoming string value and compare it to a
list of key-value pairs to determine which output to return. If the incoming
data matches a key, the transform returns the corresponding value. If the
incoming key does not match a key, the transform returns the table's optional
default value.

:::note Other Considerations

- If the input does not match any key value within the table and no default
  value is provided, the transform will return an error.

:::

## Transform Structure

In addition to the `type` and `name` attributes, the structure of a lookup
transform involves a `table` entry of key-value pairs:

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

  - **type** - This must always be set to `lookup`.
  - **name** - This is a required attribute for all transforms. It represents
    the name of the transform as it will appear in the UI's dropdown menus.
  - **table** - This is a JSON object of key-value pairs. The key is the string
    the transform tries to match to the input, and the value is the output
    string the transform returns if it matches the key.

    :::tip
    A default key must be specified. Otherwise, an error will be returned
    if there are no matching values in your table.
    :::

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether
    the transform logic should be reevaluated every evening as part of the
    identity refresh process.
  - **input** - This is an optional attribute that can explicitly define the
    input data passed into the transform logic. If no input is provided, the
    transform takes its input from the source and attribute combination
    configured with the UI.

## Examples
This transform tries to map a telephone area code to a city in Texas. If there is no area code in the four provided values, the transform will return the default value of "Unknown Area."

**Transform Request Body**:

```json
{
  "attributes": {
    "table": {
      "512": "Austin",
      "281": "Houston",
      "214": "Dallas",
      "210": "San Antonio",
      "default": "Unknown Area"
    }
  },
  "type": "lookup",
  "name": "Lookup Transform"
}
```

---

<p>&nbsp;</p>

This transform extends the previous one to show how multiple key values can be
mapped to the same output value. However, duplicate key values are not allowed,
so this will throw an error.

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
