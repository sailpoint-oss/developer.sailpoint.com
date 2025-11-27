---
id: account-created
title: Account Created
pagination_label: Account Created
sidebar_label: Account Created
sidebar_class_name: accountCreated
keywords: ['event', 'trigger', 'account', 'created', 'available']
description: Fires after an account is created.
slug: /extensibility/event-triggers/triggers/account-created
tags: ['Event Triggers', 'Available Event Triggers', 'Fire and Forget']
---

## Event Context

This event trigger fires when a new account is created in Identity Security Cloud.

Accounts can be created via aggregations or provisioning, including when entitlements are added or removed.
    
You could use this event trigger to fire a Workflow that notifies a source owner when an account is created.
    
See [Aggregating Accounts](https://documentation.sailpoint.com/saas/help/accounts/index.html#aggregating-accounts) and [Configuring Source Account Provisioning](https://documentation.sailpoint.com/saas/help/provisioning/create_profile.html) for more information about the scenarios that lead to account creation.

This is an example input from this trigger:

```json
{
  "event": {
    "type": "ACCOUNT_CREATED_V2",
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
<!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Account-Created-Event-Trigger-Input) -->
