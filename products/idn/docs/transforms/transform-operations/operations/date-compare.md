---
id: date-compare
slug: idn/docs/transforms/operations/date-compare
---
# IdentityNow Transforms - Date Compare

## Overview

Use the date compare transform to compare two dates and, depending on the comparison result, return one value if one date is after the other or return a different value if it is before the other. A common use case is to calculate lifecycle states (e.g., the user is "active" if the current date is greater than or equal to the user's hire date, etc.).

### Other Considerations

> - In addition to explicit date values, the transform recognizes the "now" keyword that always evaluates to the exact date and time when the transform is evaluating.
> - All dates **must** be in [ISO8601 format](https://en.wikipedia.org/wiki/ISO_8601) in order for the date compare transform to evaluate properly.

## Transform Structure

The date compare transform takes as an input the two dates to compare, denoted as `firstDate` and `secondDate`. The transform also requires an `operator` designation so it knows which condition to evaluate for. Lastly, the transform requires both a `positiveCondition` and a `negativeCondition` -- the former returns if the comparison evaluates to true; the latter returns if the comparison evaluates to false.

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

- **Required Attributes**
  - **type** - This must always be set to `dateCompare.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **firstDate** - This is the first date to consider (i.e., the date that would be on the left hand side of the comparison operation).
  - **secondDate** - This is the second date to consider (i.e., the date that would be on the right hand side of the comparison operation).
  - **operator** - This is the comparison to perform. The following values are valid:
    - **LT**: Strictly less than: firstDate < secondDate
    - **LTE**: Less than or equal to: firstDate <= secondDate
    - **GT**: Strictly greater than: firstDate > secondDate
    - **GTE**: Greater than or equal to: firstDate >= secondDate
  - **positiveCondition** - This is the value to return if the comparison is true.
  - **negativeCondition** - This is the value to return if the comparison is false.
- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.

## Examples

This transform accomplishes a basic lifecycle state calculation. It compares the user's termination date with his/her HR record. If the current datetime (denoted by `now`) is less than that date, the transform returns "active." If the current datetime is greater than that date, the transform returns "terminated."

**Transform Request Body**:

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

This transform compares the user's hire date to a fixed date in the past. If the user was hired prior to January 1, 1996, the transform returns "legacy." If the user was hired later than January 1, 1996, it returns "regular."

**Transform Request Body**:

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
