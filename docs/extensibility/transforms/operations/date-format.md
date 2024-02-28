---
id: date-format
title: Date Format
pagination_label: Date Format
sidebar_label: Date Format
sidebar_class_name: dateFormat
keywords: ['transforms', 'operations', 'date', 'format']
description: Convert datetime strings from one format to another.
slug: /transforms/operations/date-format
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the date format transform to convert datetime strings from one format to another. This is often useful when you are syncing data from one system to another, where each application uses a different format for date and time data.

This transform leverages the Java SimpleDateFormat syntax; see the [References](#references) section for more information on this standard.

:::note Other Considerations

- In addition to explicit SimpleDateFormat syntax, the date format transform also recognizes several built-in "named" constructs:
  - **ISO8601:** This is the date format corresponding to the ISO8601 standard. The exact format is expressed as "yyyy-MM-dd'T'HH:mm:ss.SSSZ".
  - **LDAP:** This is the date format corresponding to the LDAP date format standard, also expressed as "yyyyMMddHHmmss.Z".
  - **PEOPLE_SOFT:** This is the date format format used by People Soft, also expressed as "MM/dd/yyyy".
  - **EPOCH_TIME_JAVA:** This represents the incoming date value as the elapsed time in milliseconds from midnight, January 1st, 1970.
  - **EPOCH_TIME_WIN32:** This represents the incoming date value as the elapsed time in 100-nanosecond intervals from midnight, January 1st, 1601.

:::

## Transform Structure

The date format transform takes whatever value provided as the input, parses the datetime based on the `inputFormat` provided, and then reformats it into the desired `outputFormat`. 

```json
{
  "attributes": {
    "inputFormat": "EPOCH_TIME_JAVA",
    "outputFormat": "ISO8601"
  },
  "type": "dateFormat",
  "name": "Date Format Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `dateFormat`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.
- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.
  - **inputFormat** - This string value indicates either the explicit SimpleDateFormat or the built-in named format of the incoming data.
    - If no inputFormat is provided, the transform assumes that it is in [ISO8601 format](https://en.wikipedia.org/wiki/ISO_8601).
  - **outputFormat** - This string value indicates either the explicit SimpleDateFormat or the built-in named format that the data is formatted into.
    - If no outputFormat is provided, the transform assumes that it is in [ISO8601 format](https://en.wikipedia.org/wiki/ISO_8601).
  - **input** - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI. 

:::note Important
This transform does not currently support the "now" keyword as an input value. 
:::

## Examples

This transform takes the incoming Java epoch-based timestamp and formats it as an ISO8601 compatible string.

```bash
Input: 144642632190
Output: 1974-08-02T02:30:32.190-00
```

**Transform Request Body**:

```json
{
  "attributes": {
    "inputFormat": "EPOCH_TIME_JAVA",
    "outputFormat": "ISO8601"
  },
  "type": "dateFormat",
  "name": "Date Format Transform"
}
```

---

<p>&nbsp;</p>

This transform takes the incoming date, formatted as a common US date string, and formats it to match the date structure of most database systems.

```bash
Input: 4/1/1975
Output: 1975-04-01
```

**Transform Request Body**:

```json
{
  "attributes": {
    "inputFormat": "M/d/yyyy",
    "outputFormat": "yyyy-MM-dd"
  },
  "type": "dateFormat",
  "name": "Date Format Transform"
}
```

## References

- [http://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html](http://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html)
