---
id: source-account-created
title: Source Account Created
pagination_label: Source Account Created
sidebar_label: Source Account Created
sidebar_class_name: sourceAccountCreated
keywords: ['event', 'trigger', 'source', 'account', 'created', 'early access']
description: Fires after a source account is created.
slug: /extensibility/event-triggers/triggers/source-account-created
tags: ['Event Triggers', 'Early Access Event Triggers', 'Fire and Forget']
---

:::info

This is an early access event trigger. Please contact support to have it enabled in your tenant.

:::

## Event Context

Source Account Created events occur after a new account is detected during an account aggregration and refresh from a source. This trigger cannot determine whether account creation happened on a source or in Identity Security Cloud. It omits events related to Identity Security Cloud accounts, such as the Identity Security Cloud Admin.

Use this event trigger to watch for new accounts with highly privileged access, such as an account created in Active Directory Domain Admins.

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
<!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Account-Created-Event-Trigger-Input) -->
