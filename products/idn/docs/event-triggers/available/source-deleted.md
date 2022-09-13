---
id: source-deleted
title: Source Deleted
description: Source Deleted events occur when a source is successfully deleted via the API or the Admin UI.
---

## Event Context

Source Deleted events occur when a source is successfully deleted via the API or the Admin UI. Some uses cases for this trigger include the following:

- Provide evidence to show auditors that connector logic and sources are not manipulated outside of proper change control processes.
- Alert admins when a source was deleted incorrectly.

This is an example input from this trigger:

```json
{
  "id": "2c9180866166b5b0016167c32ef31a66",
  "name": "Test source",
  "type": "DIRECT_CONNECT",
  "deleted": "2021-03-29T22:01:50.474Z",
  "connector": "active-directory",
  "actor": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  }
}
```

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
 <!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Deleted-Event-Trigger-Input) -->
