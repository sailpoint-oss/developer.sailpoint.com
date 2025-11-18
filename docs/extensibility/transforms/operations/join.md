---
id: join
title: Join
pagination_label: Join
sidebar_label: Join
sidebar_class_name: join
keywords: ['transforms', 'operations', 'join']
description: Join two or more string values into a combined output with a defined separator.
slug: /extensibility/transforms/operations/join
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the join transform to join two or more string values with a specified separator into a combined output. The join transform often joins elements such as first and last name into a full display name, but it has many other uses.

## Transform structure

The join transform requires an array list of `values` that need to be joined. These values can be static strings or the return values of other nested transforms.

```json
{
  "attributes": {
    "values": ["John", "Smith"],
    "separator": "|"
  },
  "type": "join",
  "name": "Join transform"
}
```

## Attributes

The join transform uses the following structure:

```json
{
  "type": "join",
  "name": "Transform Name",
  "attributes": {
    "values": ["string1", "string2", ...],
    "separator": "|"
  }
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `join`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

---

### `attributes` (required)

The `attributes` object contains the values to join.

#### Required

- **values** `array` _(required)_  
  An array of items to join. Items can be static strings or the return values of other nested transforms.

#### Optional

- **separator** `string` _(optional)_  
  The separator to use between each value in the array. Default is `","` (comma).

## Examples

This transform joins the user's first name and last name from the "HR Source" with a space separator.

**Transform request body**:

```json
{
  "attributes": {
    "values": [
      {
        "attributes": {
          "sourceName": "HR Source",
          "attributeName": "FirstName"
        },
        "type": "accountAttribute"
      },
      {
        "attributes": {
          "sourceName": "HR Source",
          "attributeName": "LastName"
        },
        "type": "accountAttribute"
      }
    ],
    "separator": " "
  },
  "type": "join",
  "name": "Join Transform"
}
```

---

<p>&nbsp;</p>

This transform joins the user's job title with his/her job code value using a hyphen as the separator.

**Transform request body**:

```json
{
  "attributes": {
    "values": [
      {
        "attributes": {
          "sourceName": "HR Source",
          "attributeName": "JobTitle"
        },
        "type": "accountAttribute"
      },
      {
        "attributes": {
          "sourceName": "HR Source",
          "attributeName": "JobCode"
        },
        "type": "accountAttribute"
      }
    ],
    "separator": "-"
  },
  "type": "join",
  "name": "Join Transform"
}
```
