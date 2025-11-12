---
id: machine-identity-deleted
title: Machine Identity Deleted
pagination_label: Machine Identity Deleted
sidebar_label: Machine Identity Deleted
sidebar_class_name: machineIdentityDeleted
keywords: ['event', 'trigger', 'machine identity', 'deleted', 'available']
description: Fires after a machine identity is deleted.
slug: /extensibility/event-triggers/triggers/machine-identity-deleted
tags: ['Event Triggers', 'Available Event Triggers','Fire and Forget']
---

## Event Context

![Flow](img/machine-identity-deleted-path.png)

Machine Identity Deleted event will occur when a machine identity meets all the following requirements:

- No correlated machine accounts
- Not an owner of a role, access profile, application, source, or taskResult
- Not an owner or requester of a workItem
- Not a protected machine account
- No assigned capabilities (ex. not an assigned cert reviewer)
- Not involved in any active certification as a target (its access is not being certified)

After machine accounts are aggregated and the machine identity refresh process finds a machine identity that meets the above criteria, the associated machine identity is deleted from Identity Security Cloud. For more information, see [Configuring Correlation](https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045). The Machine Identity Deleted event contains any identity attributes as they are configured in the identity profile. For more information, see [Mapping Identity Profiles](https://community.sailpoint.com/t5/Admin-Help/Mapping-Identity-Profiles/ta-p/77877).

:::info

Identity Security Cloud will **hide** a machine identity from the identity list in the UI when the authoritative account is removed. This does not necessarily mean that the machine identity has been deleted. The machine identity will only be deleted when the above criteria are met. The deletion task run each night, so there will be a delay from when the criteria are met to when the machine identity will actually be deleted.

:::

This event trigger provides a flexible way to extend joiner-mover-leaver processes. This provides more proactive governance and ensures identities can quickly get necessary access when they enter your organization.

Some uses cases for this trigger include the following:

- Notify an administrator or system to take the appropriate provisioning actions as part of the leaver workflow.
- Notify a system to trigger another action (e.g. removing the application from the available application section).

This is an example input from this trigger:

```json
{
  "eventType": "MACHINE_IDENTITY_DELETED",
  "machineIdentity": {
    "id": "8cd6c945-0057-4a6e-ad65-9cbf3b3c71b6",
    "name": "TestName",
    "created": "2025-08-08T12:42:21.491666Z",
    "modified": "2025-09-01T06:36:54.401476Z",
    "businessApplication": "MyBusinessApplication2",
    "description": "test description event",
    "attributes": {
      "status": "Inactive",
      "botUserId": "005KV00000BLoMCYA1",
      "createdAt": "2025-09-01T10:23:23.000+0000",
      "createdById": "0053k00000Am6MQAAZ",
      "systemModstamp": "2025-09-18T09:34:40.000+0000",
      "apiFriendlyName": "Agentforce_Service_Agent_90"
    },
    "subtype": "AI Agent",
    "owners": [
      {
        "type": "IDENTITY",
        "id": "84d8c1b819144608b8b8bc3b84ddbb7b",
        "name": "Jerrie admin3cf084",
        "isPrimary": true
      },
      {
        "type": "IDENTITY",
        "id": "b6c1506f7eaa48dbbe6bffab65aacb9e",
        "name": "Lorilee srcadm9d33",
        "isPrimary": false
      }
    ],
    "sourceId": "c0201251a6ce4d268aba536cdd60a7f2",
    "uuid": "f5dd23fe-3414-42b7-bb1c-869400ad7a10",
    "nativeIdentity": "abc:123:dddd1",
    "manuallyEdited": true,
    "manuallyCreated": true,
    "datasetId": "agentforce:agents",
    "source": {
      "type": "SOURCE",
      "id": "c0201251a6ce4d268aba536cdd60a7f2",
      "name": "IdentityNow"
    },
    "userEntitlements": [
      {
        "sourceId": "7443d0ffb1304bbcbdf4c07b5c09d4f2",
        "entitlementId": "2509f650c20a3ab5956be70f6f136fbc",
        "displayName": "CN=Engineering-test-org3,OU=megapod-useast1-test-org3,OU=org-data-service,DC=TestAutomationAD,DC=local",
        "source": {
          "type": "SOURCE",
          "id": "7443d0ffb1304bbcbdf4c07b5c09d4f2",
          "name": "ODS-AD-Source"
        }
      }
    ],
    "existsOnSource": "NOT_APPLICABLE"
  }
}
```

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
<!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Identity-Deleted-Event-Trigger-Input) -->
