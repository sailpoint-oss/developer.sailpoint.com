---
id: account-updated
title: Account Updated
pagination_label: Account Updated
sidebar_label: Account Updated
sidebar_class_name: accountUpdated
keywords: ['event', 'trigger', 'account', 'updated', 'available']
description: Fires after an account is updated.
slug: /extensibility/event-triggers/triggers/account-updated
tags: ['Event Triggers', 'Available Event Triggers', 'Fire and Forget']
---

## Event Context

Account Updated events occur whenever one or more account attributes change on a single account during an account aggregation operation. The trigger cannot determine whether the account update happened on a source or in Identity Security Cloud. It omits events related to Identity Security Cloud accounts, such as the Identity Security Cloud Admin. The following actions are considered updates:

- Update account attributes
- Enable or disable an account
- Lock or unlock source accounts
- Change source account password

Use this event trigger to watch for updates to accounts that add highly privileged access, such as an account that is granted privileged access on a sensitive source.

This is an example input from this trigger:

```json
{
  "event": {
    "type": "ACCOUNT_UPDATED_V2",
    "cause": "AGGREGATION"
  },
  "source": {
    "id": "source-001",
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
    "id": "acc-789",
    "name": "john.doe",
    "nativeIdentity": "CN=John Doe,OU=Users,DC=acme,DC=com",
    "uuid": "b7264868-7201-415f-9118-b581d431c688",
    "correlated": true,
    "isMachine": false,
    "origin": "Active Directory",
    "attributes": {
      "created": "2020-04-27T16:48:33.597Z",
      "updated": "2024-06-10T12:00:00Z",
      "department": "Sales",
      "displayName": "John Doe",
      "email": "john.doe@gmail.com",
      "employeeNumber": "E009",
      "firstname": "John",
      "identificationNumber": "ID12345",
      "inactive": "false",
      "lastname": "Doe",
      "manager": "jane.doe",
      "phone": "512-555-1234",
      "uid": "john.doe",
      "passwordLastSet": 1748199531418,
      "telephoneNumber": "512-555-1234",
      "pager": "555-0000",
      "mail": "john.doe@gmail.com",
      "sAMAccountName": "john.doe",
      "msNPAllowDialin": "true",
      "givenName": "John",
      "objectClass": [
        "user",
        "person"
      ],
      "distinguishedName": "CN=John Doe,OU=Users,DC=acme,DC=com",
      "cn": "John Doe",
      "objectType": "User",
      "accountFlags": [
        "512"
      ],
      "NetBIOSName": "ACME",
      "objectguid": "b7264868-7201-415f-9118-b581d431c688",
      "primaryGroupID": "513",
      "objectSid": "S-1-5-21-1234567890-123456789-1234567890-1001",
      "memberOf": [
        "CN=Sales,OU=Groups,DC=acme,DC=com"
      ],
      "sn": "Doe",
      "msDS-PrincipalName": "john.doe@acme.com",
      "idNowDescription": "AD User",
      "pwdLastSet": "2024-06-10T12:00:00Z"
    }
  },
  "identity": {
    "id": "id-321",
    "name": "john.doe",
    "alias": "jdoe",
    "email": "john.doe@gmail.com"
  },
  "accountChangeTypes": [
    "ATTRIBUTES_CHANGED",
    "ENTITLEMENTS_ADDED"
  ],
  "singleValueAttributeChanges": [
    {
      "name": "sn",
      "oldValue": null,
      "newValue": "Doe"
    },
    {
      "name": "email",
      "oldValue": "john.old@acme.com",
      "newValue": "john.doe@gmail.com"
    }
  ],
  "multiValueAttributeChanges": [
    {
      "name": "memberOf",
      "addedValues": [
        "CN=Sales,OU=Groups,DC=acme,DC=com"
      ],
      "removedValues": [
        "CN=Marketing,OU=Groups,DC=acme,DC=com"
      ]
    }
  ],
  "entitlementChanges": [
    {
      "attributeName": "groups",
      "added": [
        {
          "id": "ent-001",
          "value": "User",
          "name": "User group",
          "owner": {
            "id": "id-321",
            "name": "John Doe",
            "type": "IDENTITY"
          }
        }
      ],
      "removed": [
        {
          "id": "ent-002",
          "value": "Admin",
          "name": "Admin group",
          "owner": {
            "id": "id-322",
            "name": "Jane Doe",
            "type": "IDENTITY"
          }
        }
      ]
    }
  ]
}
```

## Additional Information and links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
<!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Account-Updated-Event-Trigger-Input) -->
