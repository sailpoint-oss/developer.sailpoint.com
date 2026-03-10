---
id: first-valid
title: First Valid
pagination_label: First Valid
sidebar_label: First Valid
sidebar_class_name: firstValid
keywords: ['transforms', 'operations', 'first', 'valid']
description: Return the first piece of data that is not null.
slug: /extensibility/transforms/operations/first-valid
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the first valid transform to perform if/then/else operations on multiple different data points to return the first piece of data that is not null. This is often useful for the SailPoint username (uid) attribute in which case each identity requires a value, but the desired information is not available yet (e.g., Active Directory username). In these cases, you can use a first valid transform to populate the uid attribute with the user's linked Active Directory (AD) account information if the uid attribute is not null. If the attribute is null, use a different attribute from a source that the user does have, like his/her employee number.

## Transform structure

The first valid transform requires an array list of `values` that you must consider. These can be static strings or other nested transforms' return values. Remember that the transform returns the first entry in the array that evaluates to a non-null value, so you are recommended to provide the entries in the array in descending order of preference.

```json
{
  "attributes": {
    "values": [
      {
        "attributes": {
          "sourceName": "Active Directory",
          "attributeName": "sAMAccountName"
        },
        "type": "accountAttribute"
      },
      {
        "attributes": {
          "sourceName": "Okta",
          "attributeName": "login"
        },
        "type": "accountAttribute"
      },
      {
        "attributes": {
          "sourceName": "HR Source",
          "attributeName": "employeeID"
        },
        "type": "accountAttribute"
      }
    ]
  },
  "type": "firstValid",
  "name": "Test First Valid Transform"
}
```

## Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `firstValid`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Attributes

The first valid transform uses the following structure:

```json
{
  "type": "firstValid",
  "name": "Transform Name",
  "attributes": {
    "values": [
      // array of values or transforms to evaluate
    ]
  }
}
```

---

### `attributes` (required)

The `attributes` object contains the values to evaluate.

#### Required

- **values** `array` _(required)_  
  An array of attributes to evaluate for existence. The transform returns the first entry that evaluates to a non-null value, so provide entries in descending order of preference.

#### Optional

- **ignoreErrors** `boolean` _(optional)_  
  Whether to proceed to the next option if an error (like an NPE) occurs. Default is `false`.

## Examples

This transform first attempts to return the user's `sAMAccountName` from his/her AD account. In the event that the user does not have an AD account, the transform then attempts to return the user's Okta login. If the Okta login is also blank, the transform returns the user's employee ID from his/her HR record.

**Transform request body**:

```json
{
  "attributes": {
    "values": [
      {
        "attributes": {
          "sourceName": "Active Directory",
          "attributeName": "sAMAccountName"
        },
        "type": "accountAttribute"
      },
      {
        "attributes": {
          "sourceName": "Okta",
          "attributeName": "login"
        },
        "type": "accountAttribute"
      },
      {
        "attributes": {
          "sourceName": "HR Source",
          "attributeName": "employeeID"
        },
        "type": "accountAttribute"
      }
    ]
  },
  "type": "firstValid",
  "name": "First Valid Transform"
}
```

---

<p>&nbsp;</p>

This transform is often useful for populating the work email identity attribute. Since the work email attribute is a required field for a valid identity, it cannot be blank. However, often new hires do not have an AD account and/or email provisioned until after the user has been provisioned. A common practice in this situation is to return a static string of "none" to ensure that this required attribute does not remain empty.

**Transform request body**:

```json
{
  "attributes": {
    "values": [
      {
        "attributes": {
          "sourceName": "Active Directory",
          "attributeName": "mail"
        },
        "type": "accountAttribute"
      },
      {
        "attributes": {
          "value": "none"
        },
        "type": "static"
      }
    ]
  },
  "type": "firstValid",
  "name": "First Valid Transform"
}
```

---

<p>&nbsp;</p>

This transform is often useful for populating an attribute called "Manager DN". It pulls the manager of the identity and then gets the identity attribute "Network DN" for the manager. "Network DN" pulls directly from `distinguishedName` in AD. With this transform, you can set a user's manager's DN as an identity attribute to allow for attribute sync down to AD. Without `ignoreErrors` set to `true`, this transform throws a null pointer exception (NPE) for any user without a manager. With `ignoreErrors` set to true, the first value in the `firstValid` throws an error for users without managers, but the error is ignored, and the transform selects the empty string to set the "Manager DN" identity attribute to.

**Transform request body**:

```json
{
  "attributes": {
    "ignoreErrors": "true",
    "values": [
      {
        "attributes": {
          "value": "$identity.manager.attributes.networkDn"
        },
        "type": "static"
      },
      ""
    ]
  },
  "name": "Example_Transform_ManagerDN",
  "type": "firstValid"
}
```
