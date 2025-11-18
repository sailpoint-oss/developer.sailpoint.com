---
id: get-reference-identity-attribute
title: Get Reference Identity Attribute
pagination_label: Get Reference Identity Attribute
sidebar_label: Get Reference Identity Attribute
sidebar_class_name: getReferenceIdentityAttribute
keywords:
  ['transforms', 'operations', 'get', 'reference', 'identity', 'attribute']
description: Get another user's identity attribute.
slug: /extensibility/transforms/operations/get-reference-identity-attribute
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the get reference identity attribute transform as an out-of-the-box rule provided through SailPoint's Cloud Services Deployment Utility rule. The transform allows you to get the identity attribute of another user from within a given identity's calculation. For your convenience, the transform allows you to use "manager" as a referential lookup to the target identity.

## Transform structure

The structure of a get reference identity transform requires the `name` of the referenced rule to be the `Cloud Services Deployment Utility` rule built by SailPoint. Additionally, you must set the `operation` to `getReferenceIdentityAttribute` and specify a `uid` attribute that correlates to the identity whose attribute is desired. Last, you must include the `type` and `name` attributes required for all transforms:

```json
{
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "getReferenceIdentityAttribute",
    "uid": "manager",
    "attributeName": "email"
  },
  "type": "rule",
  "name": "Get Reference Identity Attribute Transform"
}
```

## Attributes

The get reference identity attribute transform uses the following structure:

```json
{
  "type": "rule",
  "name": "Transform Name",
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "getReferenceIdentityAttribute",
    "uid": "manager",
    "attributeName": "email"
  }
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `rule`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

---

### `attributes` (required)

The `attributes` object contains the rule configuration.

#### Required

- **name** `string` _(required)_  
  Must be set to `Cloud Services Deployment Utility`.

- **operation** `string` _(required)_  
  Must be set to `getReferenceIdentityAttribute`.

- **uid** `string` _(required)_  
  The SailPoint User Name (uid) value of the identity whose attribute is desired. You can use the `"manager"` keyword to look up the user's manager and get that manager's identity attribute.

- **attributeName** `string` _(required)_  
  The name of the identity attribute to retrieve from the referenced identity.

## Examples

This transform gets the user's manager's email address.

**Transform request body**:

```json
{
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "getReferenceIdentityAttribute",
    "uid": "manager",
    "attributeName": "email"
  },
  "type": "rule",
  "name": "Get Reference Identity Attribute Transform"
}
```

---

<p>&nbsp;</p>

This transform gets the alternate phone number for the user identified as "corporate.admin".

**Transform request body**:

```json
{
  "attributes": {
    "name": "Cloud Services Deployment Utility",
    "operation": "getReferenceIdentityAttribute",
    "uid": "corporate.admin",
    "attributeName": "phone"
  },
  "type": "rule",
  "name": "Get Reference Identity Attribute Transform"
}
```
