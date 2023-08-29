---
id: certification-signed-off
title: Certification Signed Off
pagination_label: Certification Signed Off
sidebar_label: Certification Signed Off
sidebar_class_name: certificationSignedOff
keywords: ['event', 'trigger', 'certification', 'available']
description: Triggered when a certification is signed off by its reviewer.
slug: /docs/event-triggers/triggers/certification-signed-off
tags: ['Event Triggers', 'Available Event Triggers', 'Fire and Forget']
---

## Event Context

This event is triggered when a certification is signed-off and moves to End status.
This is not to be confused with Campaign End/Expiration. 

This is an example input from this trigger:

```json
{
  "certification": {
    "id": "2c91808576f886190176f88caf0d0067",
    "name": "Manager Access Review for Alice Baker",
    "created": "2020-02-16T03:04:45.815Z",
    "modified": null,
    "campaignRef": {
      "campaignType": "MANAGER",
      "description": "Audit access for all employees.",
      "type": "CAMPAIGN",
      "id": "2c91808576f886190176f88cac5a0010",
      "name": "Manager Access Campaign"
    },
    "completed": true,
    "hasErrors": false,
    "errorMessage": null,
    "decisionsMade": 50,
    "decisionsTotal": 50,
    "due": "2020-03-16T03:04:45.815Z",
    "signed": "2020-03-04T03:04:45.815Z",
    "reviewer": {
      "name": "Reviewers group",
      "id": "6a80311c-8d11-40bc-a3c8-29e2360b85e8",
      "type": "GOVERNANCE_GROUP",
      "email": null
    },
    "campaignOwner": {
      "id": "37f080867702c1910177031320c40n27",
      "displayName": "William Wilson",
      "email": "william.wilson@example.com"
    },
    "reassignment": {
      "comment": "Changing reviewer.",
      "from": {
        "id": "8a89c6de77ef762f0177ef7f52f10004",
        "name": "Manger Access Review for Charlie Davis",
        "type": "CERTIFICATION",
        "reviewer": {
          "id": "2c9180867702c1910177031320c4010c",
          "name": "Charlie Davis",
          "type": "IDENTITY",
          "email": "charlie.davis@example.com"
        }
      }
    },
    "phase": "SIGNED",
    "entitiesCompleted": 12,
    "entitiesTotal": 12
  }
}
```

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
