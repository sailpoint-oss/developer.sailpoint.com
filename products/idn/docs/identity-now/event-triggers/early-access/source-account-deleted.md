---
id: source-account-deleted
title: Source Account Deleted
pagination_label: Source Account Deleted
sidebar_label: Source Account Deleted
sidebar_class_name: sourceAccountDeleted
keywords: ["event", "trigger", "source", "account", "deleted"]
description: Fires after a source account is deleted.
slug: /docs/event-triggers/triggers/source-account-deleted
tags: ["Event Triggers", "Source Account Deleted"]
---

:::info
This is an early access event trigger.  Please contact support to have it enabled in your tenant.
:::

## Event Context

Source Account Deleted events occur whenever an account is deleted from its source during an account aggregation operation. The account may have been manually removed or deleted as the result of a provisioning event. The trigger cannot determine whether the account deletion happened on a source or in IdentityNow. It omits events related to IdentityNow accounts, such as the IdentityNow Admin.

Use this event trigger to watch for deletions of authoritative accounts, such as an account deleted on Workday.

This is an example input from this trigger:

```json
{
  "uuid": "b7264868-7201-415f-9118-b581d431c688",
  "id": "ee769173319b41d19ccec35ba52f237b",
  "nativeIdentifier": "E009",
  "sourceId": "2c918082814e693601816e09471b29b6",
  "sourceName": "Active Directory",
  "identityId": "ee769173319b41d19ccec6c235423237b",
  "identityName": "john.doe",
  "attributes": {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@gmail.com",
    "department": "Sales",
    "displayName": "John Doe",
    "created": "2020-04-27T16:48:33.597Z",
    "employeeNumber": "E009",
    "uid": "E009",
    "inactive": "true",
    "phone": null,
    "identificationNumber": "E009"
  }
}
```

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
 <!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Account-Deleted-Event-Trigger-Input) -->
