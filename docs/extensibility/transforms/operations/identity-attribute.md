---
id: identity-attribute
title: Identity Attribute
pagination_label: Identity Attribute
sidebar_label: Identity Attribute
sidebar_class_name: identityAttribute
keywords: ['transforms', 'operations', 'identity', 'attribute']
description: Get a user's identity attribute's value.
slug: /extensibility/transforms/operations/identity-attribute
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the identity attribute transform to get the value of a user's identity attribute. This transform is often useful within a source's account create or disable profile.

:::note Other Considerations

- This transform is **not** intended for use within an another identity profile attribute's calculation. Identity attribute calculations are multi-threaded processes, and there is no guarantee that a specific attribute has current data, or even exists, at the time of calculation within any given transform. _Referencing identity attributes within another identity attribute's calculation can lead to identity exceptions._

:::

## Transform structure

The transform for identity attributes requires the desired identity attribute's system `name,` along with the `type` and `name` attributes:

```json
{
  "attributes": {
    "name": "email"
  },
  "type": "identityAttribute",
  "name": "Identity Attribute Transform"
}
```

## Attributes

The identity attribute transform uses the following structure:

```json
{
  "type": "identityAttribute",
  "name": "Transform Name",
  "attributes": {
    "name": "attributeName"
  }
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `identityAttribute`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

---

### `attributes` (required)

The `attributes` object contains the configuration for looking up identity attributes.

#### Required

- **name** `string` _(required)_  
  The system (camel-cased) name of the identity attribute to bring in.

#### Optional

- **input** `object` _(optional)_  
  Explicitly defines the input data passed into the transform. If not provided, the transform uses input from the source and attribute combination configured in the UI.

## Examples

This transform returns a user's SailPoint User Name attribute.

**Transform request body**:

```json
{
  "attributes": {
    "name": "uid"
  },
  "type": "identityAttribute",
  "name": "Identity Attribute Transform"
}
```

---

<p>&nbsp;</p>

This transform returns a user's Employee Number attribute.

**Transform request body**:

```json
{
  "attributes": {
    "name": "identificationNumber"
  },
  "type": "identityAttribute",
  "name": "Identity Attribute Transform"
}
```
