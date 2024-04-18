---
id: outlier-detected
title: Outlier Detected
pagination_label: Outlier Detected
sidebar_label: Outlier Detected
sidebar_class_name: outlierDetected
keywords: ['event', 'trigger', 'outlier', 'detected']
description: Fires after an identity was detected as an outlier.
slug: /extensibility/event-triggers/triggers/outlier-detected
tags: ['Event Triggers', 'Available Event Triggers', 'Fire and Forget']
---

## Event Context

The 'Outlier Detected' event trigger notifies subscribed applications of any identities that have unusual access when compared to their peers. Outliers are calculated daily, and any identities that are flagged as outliers will be sent to subscribers of the trigger.

This is an example input from this trigger:

```json
{
  "identity": {
    "id": "ee769173319b41d19ccec6cea52f237b",
    "displayName": "John Doe",
    "type": "IDENTITY"
  },
  "outlierType": "LOW_SIMILARITY",
  "score": 0.82
}
```

- `outlierType` - Only `LOW_SIMILARITY` is supported at this time.
- `score` - The range is `0.0` to `1.0`. The higher the score, the more likely the identity is an outlier.

## Prerequisites

Before consuming this event trigger, the following prerequesites must be met:

- Your organization must have Access Insights to access Identity Outliers.
- Your organization must have configured a source and loaded account data.
- Your organization’s account data must be onboarded into AI-Driven Identity Security.

:::caution Important

If you don't meet the prerequisites and you subscribe to this event trigger, you will not receive any events. The prerequisites must be met in order to receive events.

:::

## Additional Information and Links

- [Identity outliers documentation](https://documentation.sailpoint.com/saas/help/ai/access_insights/outliers.html)
- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
