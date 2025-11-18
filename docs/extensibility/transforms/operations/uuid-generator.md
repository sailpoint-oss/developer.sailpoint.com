---
id: uuid-generator
title: UUID Generator
pagination_label: UUID Generator
sidebar_label: UUID Generator
sidebar_class_name: uuidGenerator
keywords: ['transforms', 'operations', 'uuid', 'generator']
description: Create a universal unique ID (UUID).
slug: /extensibility/transforms/operations/uuid-generator
tags: ['Transforms', 'Transform Operations']
---

## Overview

Use the UUID generator transform to create a universal unique ID (UUID) in the form of a 36-character string.

:::note Other Considerations

There is no uniqueness checking in this transform - the underlying code is written to provide a 1 in 68,719,476,736 chance of creating a string that actually collides with another string within the tenant, so the generated UUID's uniqueness is very likely, but it is not guaranteed.

:::

## Transform structure

The UUID generator transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "uuid",
  "name": "UUID Generator Transform"
}
```

## Attributes

The UUID generator transform only requires top-level properties:

```json
{
  "type": "uuid",
  "name": "Transform Name"
}
```

### Top-level properties (required)

- **type** `string` _(required)_  
  Must be set to `uuid`.

- **name** `string` _(required)_  
  The name of the transform as it will appear in the UI's dropdown menus.

- **requiresPeriodicRefresh** `boolean` _(optional)_  
  Whether the transform logic should be reevaluated every evening as part of the identity refresh process. Default is `false`.

## Examples

This transform produces a UUID such as "f7493c55-f3fc-491a-b352-4664d71f885b".

**Transform request body**:

```json
{
  "type": "uuid",
  "name": "UUID Generator Transform"
}
```
