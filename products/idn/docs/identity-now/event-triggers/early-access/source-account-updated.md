---
id: source-account-updated
title: Source Account Updated
pagination_label: Source Account Updated
sidebar_label: Source Account Updated
sidebar_class_name: sourceAccountUpdated
keywords: ["event", "trigger", "source", "account", "updated", "early access"]
description: Fires after a source account is updated.
pagination_next: docs/identity-now/event-triggers/event-triggers
slug: /docs/event-triggers/triggers/source-account-updated
tags: ["Event Triggers", "Early Access Event Triggers", "Fire and Forget"]
---

:::info
This is an early access event trigger.  Please contact support to have it enabled in your tenant.
:::

## Event Context

Source Account Updated events occur whenever one or more account attributes change on a single account during an account aggregation operation. The trigger cannot determine whether the account update happened on a source or in IdentityNow. It omits events related to IdentityNow accounts, such as the IdentityNow Admin. The following actions are considered updates:

- Update account attributes
- Enable or disable an account
- Lock or unlock source accounts
- Change source account password

Use this event trigger to watch for updates to accounts that add highly privileged access, such as an account that is granted privileged access on a sensitive source.

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

## Additional Information and links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
<!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Account-Updated-Event-Trigger-Input) -->
