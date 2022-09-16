---
id: source-updated
title: Source Updated
pagination_label: Source Updated
sidebar_label: Source Updated
sidebar_class_name: sourceUpdated
keywords: ["event", "trigger", "source", "updated", "available"]
description: Fires after a source is updated.
slug: /docs/event-triggers/triggers/source-updated
tags: ["Event Triggers", "Available Event Triggers", "Fire and Forget"]
---

## Event Context

Source Updated events occur when configuration changes are made to a source.
Some uses cases for this trigger include the following:

- Provide evidence to show auditors connector logic and sources are not
  manipulated outside of proper change control processes.
- Trigger review of an updated source.

This is an example input from this trigger:

```json
{
  "id": "2c9180866166b5b0016167c32ef31a66",
  "name": "Test source",
  "type": "DIRECT_CONNECT",
  "modified": "2021-03-29T22:01:50.474Z",
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
<!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Updated-Event-Trigger-Input) -->
