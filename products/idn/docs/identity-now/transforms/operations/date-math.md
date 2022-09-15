---
id: date-math
title: Date Math
pagination_label: Date Math
sidebar_label: Date Math
sidebar_class_name: dateMath
keywords: ["transforms", "operations", "date", "math"]
description: Add, subtract, and round components of a timestamp's incoming value.
slug: /docs/transforms/operations/date-math
tags: ["Transforms", "Operations", "Date", "Math"]
---

## Overview

Use the date math transform to add, subtract, and round components of a timestamp's incoming value. It also allows you to work with a referential value of "now" to run operations against the current date and time instead of a fixed value.

The output format for the DateMath transform is "yyyy-MM-dd'T'HH:mm." When you use this transform inside another transform (e.g., [dateCompare](./date-compare.md)), make sure to convert to [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) first.

:::note Other Considerations

- The input datetime value must always be in [ISO8601 format](https://en.wikipedia.org/wiki/ISO_8601), in UTC time zone:

- yyyy-MM-ddThh:mm:ss:nnnZ
- 2020-10-28T12:00:00.000Z, as an example
- The dateFormat transform can help get data into this format.

- The industry standard for rounding is actually date/time truncation. When rounding down, the fractional value is truncated from the incoming data. When rounding up, the fractional value is truncated and the next unit of time is added. Refer to the Transform Structure section below for examples.
  - When you are rounding, the "week" unit of time is not supported as a metric, and attempting to round up or down a week will result in an error.
  - If you are using the "now" keyword and an input date is also applied as the implicitly or explicitly definted input parameter, the transform prefers using "now" and ignores the data in the `input` attribute.

:::

## Transform Structure

The date math transform takes the input value and executes addition, subtraction and/or rounding operations to that value based on an `expression` configuration value. As indicated earlier, the input datetime must be in [ISO8601 format](https://en.wikipedia.org/wiki/ISO_8601). The `expression` value leverages the following abbreviations to indicate which date or time component to evaluate:

> - "y" - year
> - "M" - month
> - "w" - week
> - "d" - day
> - "h" - hour
> - "m" - minute
> - "s" - second
> - "now" - the current instant in time

Also, the operational logic is defined by usage of one of the following symbols:

> - "+" - add; This must be followed by a valid time unit.
> - "-" - subtract; This must be followed by a valid time unit.
> - "/" - round; This must be followed by a valid time unit.

Some examples of expressions are:

> - `"expression": "now"` returns the current date and time.
> - `"expression": "now/h"` returns the current date and time, rounded to the hour.
> - `"expression": "now+1w"` returns one week from the current date and time.
> - `"expression": "now+1y+1M+2d-4h+1m-3s/s"` returns the current date and time plus one year, one month, two days, minus four hours, plus one minute and minus three seconds, rounded to the second.
> - `"expression": "+3M"` returns the date and time that would be three months more than the value provided as an input to the transform.

```json
{
  "attributes": {
    "expression": "+3M/h",
    "roundUp": true,
    "input": {
      "attributes": {
        "sourceName": "HR Source",
        "attributeName": "startDate"
      },
      "type": "accountAttribute"
    }
  },
  "type": "dateMath",
  "name": "Test Date Math Transform"
}
```

## Attributes

- **Required Attributes**

  - **type** - This must always be set to `dateMath.`
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
  - **expression** - A string value of the date and time components to operate on, along with the math operations to execute. Multiple operations on multiple components are supported.

- **Optional Attributes**

  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **roundUp** - This `true` or `false` value indicates whether the transform rounds up or down when the `expression` defines a rounding ("/") operation. If this value is not provided, the transform defaults to `false`.

    - `true` indicates the transform rounds up (i.e., truncate the fractional date/time component indicated and then add one unit of that component).
    - `false` indicates the transform rounds down (i.e., truncate the fractional date/time component indicated).
    - `input` - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.

## Examples

This transform takes the current date, subtracts five days from it, and rounds down to the lowest day.

**Transform Request Body**:

```json
{
  "attributes": {
    "expression": "now-5d/d",
    "roundUp": false
  },
  "type": "dateMath",
  "name": "Date Math Transform"
}
```

---

<p>&nbsp;</p>

This transform takes the `startDate` attribute from a user's record in the "HR Source," converts it from its native format to an [ISO8601-formatted](https://en.wikipedia.org/wiki/ISO_8601) string, and then adds twelve hours to it. The final value is then rounded up to the next second.

**Transform Request Body**:

```json
{
  "attributes": {
    "expression": "+12h/s",
    "roundUp": true,
    "input": {
      "attributes": {
        "input": {
          "attributes": {
            "sourceName": "HR Source",
            "attributeName": "startDate"
          },
          "type": "accountAttribute"
        },
        "inputFormat": "MMM dd yyyy, HH:mm:ss.SSS",
        "outputFormat": "ISO8601"
      },
      "type": "dateFormat"
    }
  },
  "type": "dateMath",
  "name": "Date Math Transform"
}
```

---

<p>&nbsp;</p>

This transform take the `HIREDATE` from Workday and converts it to [ISO8601](https://en.wikipedia.org/wiki/ISO_8601) to be used in the Date Math transform. The Date Math transform then creates a new Date of `HIREDATE + 1`. Since that is then outputted in the format "yyyy-MM-dd'T'HH:mm," you can then use it in a [dateFormat](/idn/docs/transforms/operations/date-format) transform to give a WIN32 formatted date.

**Transform Request Body**:

```json
{
  "type": "dateFormat",
  "name": "WD - HireDate",
  "attributes": {
    "input": {
      "attributes": {
        "expression": "+1d",
        "input": {
          "attributes": {
            "input": {
              "attributes": {
                "attributeName": "HIREDATE",
                "sourceName": "Workday"
              },
              "type": "accountAttribute"
            },
            "inputFormat": "MM/dd/yyyy",
            "outputFormat": "ISO8601"
          },
          "type": "dateFormat"
        },
        "roundUp": true
      },
      "type": "dateMath"
    },
    "inputFormat": "yyyy-MM-dd'T'HH:mm",
    "outputFormat": "EPOCH_TIME_WIN32"
  }
}
```
