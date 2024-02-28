---
id: campaign-activated
title: Campaign Activated
pagination_label: Campaign Activated
sidebar_label: Campaign Activated
sidebar_class_name: campaignActivated
keywords: ['event', 'trigger', 'campaign', 'activated', 'available']
description: Triggered when a campaign is activated.
slug: /event-triggers/triggers/campaign-activated
tags: ['Event Triggers', 'Available Event Triggers', 'Fire and Forget']
---

## Event Context

The Campaign Activated events occur after a campaign is activated.

Some uses cases for this trigger include the following:

- Notify reviewers of the new campaign
- Monitor campaigns to make sure they are starting on time

This is an example input from this trigger:

```json
{
  "campaign": {
    "id": "2c91808576f886190176f88cac5a0010",
    "name": "Manager Access Campaign",
    "description": "Audit access for all employees.",
    "created": "2021-02-16T03:04:45.815Z",
    "modified": null,
    "deadline": "2021-03-16T03:04:45.815Z",
    "type": "MANAGER",
    "campaignOwner": {
      "id": "37f080867702c1910177031320c40n27",
      "displayName": "William Wilson",
      "email": "william.wilson@example.com"
    },
    "status": "ACTIVE"
  }
}
```

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
