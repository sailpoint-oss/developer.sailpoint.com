---
id: uuid-generator
slug: /docs/transforms/operations/uuid-generator
description: Create a universal unique ID (UUID).
---
# UUID Generator

## Overview

Use the UUID generator transform to create a universal unique ID (UUID) in the form of a 36-character string.

:::note Other Considerations

There is no uniqueness checking in this transform - the underlying code is written to provide a 1 in 68,719,476,736 chance of creating a string that actually collides with another string within the tenant, so the generated UUID's uniqueness is very likely, but it is not guaranteed.

:::

## Transform Structure

The UUID generator transform only requires the transform's `type` and `name` attributes:

```json
{
  "type": "uuid",
  "name": "UUID Generator Transform"
}
```

## Attributes

- **Required Attributes**
  - **type** - This must always be set to `uuid`.
  - **name** - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus.

- **Optional Attributes**
  - **requiresPeriodicRefresh** - This `true` or `false` value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process.

## Examples

This transform produces a UUID such as "f7493c55-f3fc-491a-b352-4664d71f885b".

**Transform Request Body**:

```json
{
  "type": "uuid",
  "name": "UUID Generator Transform"
}
```
