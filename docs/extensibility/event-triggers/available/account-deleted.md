---
id: account-deleted
title: Account Deleted
pagination_label: Account Deleted
sidebar_label: Account Deleted
sidebar_class_name: accountDeleted
keywords: ['event', 'trigger', 'account', 'deleted', 'available']
description: Fires after an account is deleted.
slug: /extensibility/event-triggers/triggers/account-deleted
tags: ['Event Triggers', 'Available Event Triggers', 'Fire and Forget']
---

## Event Context

Account Deleted events occur whenever an account is deleted from its source during an account aggregation operation. The account may have been manually removed or deleted as the result of a provisioning event. The trigger cannot determine whether the account deletion happened on a source or in Identity Security Cloud. It omits events related to Identity Security Cloud accounts, such as the Identity Security Cloud Admin.

Use this event trigger to watch for deletions of authoritative accounts, such as an account deleted on Workday.

This is an example input from this trigger:

```json
{
  "event": {
    "type": "ACCOUNT_DELETED_V2",
    "cause": "AGGREGATION"
  },
  "source": {
    "id": "jlasdferquwoep452343214v",
    "name": "Active Directory",
    "alias": "AD",
    "owner": {
      "id": "owner-123",
      "name": "Source Owner"
    },
    "governanceGroup": {
      "id": "group-456",
      "name": "Governance Group"
    }
  },
  "account": {
    "id": "ee769173319b41d19ccec35ba52f237b",
    "name": "john.doe",
    "nativeIdentity": "john.doe",
    "uuid": "b7264868-7201-415f-9118-b581d431c688",
    "correlated": true,
    "isMachine": false,
    "origin": "Active Directory",
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
      "phone": "512-555-1234",
      "manager": "jane.doe",
      "identificationNumber": "E009"
    }
  },
  "identity": {
    "id": "132rfvwfr14353yas56213l",
    "name": "john.doe",
    "alias": "jdoe",
    "email": "john.doe@gmail.com"
  }
}
```

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
<!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Account-Deleted-Event-Trigger-Input) -->
