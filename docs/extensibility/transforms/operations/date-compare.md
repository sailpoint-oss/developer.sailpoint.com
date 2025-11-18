---
id: date-compare
title: Date Compare
pagination_label: Date Compare
sidebar_label: Date Compare
sidebar_class_name: dateCompare
keywords: ['transforms', 'operations', 'date', 'compare']
description: Compare two dates and return a calculated value.
slug: /extensibility/transforms/operations/date-compare
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the date compare transform to compare two dates and, depending on the comparison result, return one value if one date is after the other or return a different value if it is before the other. A common use case is to calculate lifecycle states (e.g., the user is "active" if the current date is greater than or equal to the user's hire date, etc.).

:::note Other Considerations

- In addition to explicit date values, the transform recognizes the "now" keyword that always evaluates to the exact date and time when the transform is evaluating.
- All dates **must** be in [ISO8601 format](https://en.wikipedia.org/wiki/ISO_8601) in order for the date compare transform to evaluate properly.

:::

## Transform structure

The date compare transform takes as an input the two dates to compare, denoted as `firstDate` and `secondDate`. The transform also requires an `operator` designation so it knows which condition to evaluate for. Lastly, the transform requires both a `positiveCondition` and a `negativeCondition` -- the former returns if the comparison evaluates to `true`; the latter returns if the comparison evaluates to `false`.

```json
{
  "attributes": {
    "firstDate": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "termination_date"
      },
      "type": "accountAttribute"
    },
    "secondDate": "now",
    "operator": "gt",
    "positiveCondition": "active",
    "negativeCondition": "terminated"
  },
  "type": "dateCompare",
  "name": "Date Compare Transform"
}
```

## Attributes

The date compare transform uses the following structure:

```json
{
  "type": "dateCompare",
  "name": "Transform Name",
  "attributes": {
    "firstDate": "2024-01-01T00:00:00Z",
    "secondDate": "now",
    "operator": "gt",
    "positiveCondition": "true",
    "negativeCondition": "false"
  }
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `dateCompare`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

---

### `attributes` (required)

The `attributes` object contains the date comparison configuration.

#### Required

- **firstDate** `string` | `object` _(required)_  
  The first date to compare (left-hand side of the comparison). Must be in ISO8601 format or the keyword `"now"`.

- **secondDate** `string` | `object` _(required)_  
  The second date to compare (right-hand side of the comparison). Must be in ISO8601 format or the keyword `"now"`.

- **operator** `string` _(required)_  
  The comparison operator to perform:
  - `LT` - Strictly less than: firstDate `<` secondDate
  - `LTE` - Less than or equal to: firstDate `<=` secondDate
  - `GT` - Strictly greater than: firstDate `>` secondDate
  - `GTE` - Greater than or equal to: firstDate `>=` secondDate

- **positiveCondition** `string` _(required)_  
  The value to return if the comparison evaluates to true.

- **negativeCondition** `string` _(required)_  
  The value to return if the comparison evaluates to false.

## Examples

This transform accomplishes a basic lifecycle state calculation. It compares the user's termination date with his/her HR record. If the current datetime (denoted by `now`) is less than that date, the transform returns "active". If the current datetime is greater than that date, the transform returns "terminated".

**Transform request body**:

```json
{
  "attributes": {
    "firstDate": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "termination_date"
      },
      "type": "accountAttribute"
    },
    "secondDate": "now",
    "operator": "gt",
    "positiveCondition": "active",
    "negativeCondition": "terminated"
  },
  "type": "dateCompare",
  "name": "Date Compare Transform"
}
```

---

<p>&nbsp;</p>

This transform compares the user's hire date to a fixed date in the past. If the user was hired prior to January 1, 1996, the transform returns "legacy". If the user was hired later than January 1, 1996, it returns "regular".

**Transform request body**:

```json
{
  "attributes": {
    "firstDate": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "hire_date"
      },
      "type": "accountAttribute"
    },
    "secondDate": {
      "attributes": {
        "input": "12/31/1995",
        "inputFormat": "M/d/yyyy",
        "outputFormat": "ISO8601"
      },
      "type": "dateFormat"
    },
    "operator": "lte",
    "positiveCondition": "legacy",
    "negativeCondition": "regular"
  },
  "type": "dateCompare",
  "name": "Date Compare Transform"
}
```
