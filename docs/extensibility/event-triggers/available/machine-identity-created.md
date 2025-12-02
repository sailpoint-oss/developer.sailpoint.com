---
id: machine-identity-created
title: Machine Identity Created
pagination_label: Machine Identity Created
sidebar_label: Machine Identity Created
sidebar_class_name: machineIdentityCreated
keywords: ['event', 'trigger', 'machine', 'identity', 'created', 'available']
description: Fires after a machine identity is created.
slug: /extensibility/event-triggers/triggers/machine-identity-created
tags: ['Event Triggers', 'Available Event Triggers', 'Fire and Forget']
---

## Event Context

![Flow](./img/machine-identity-created-path.png)

This event trigger fires when a new machine identity is created in Identity Security Cloud.

Machine identities can be created via the UI, endpoint, or aggregated. Machine identities can also be created via machine account to machine account mappings.

You could use this event trigger to fire a Workflow that discovers machine identity owners when a machine identity is created.

For more information about the scenarios that lead to machine identity creation, refer
- [Managing Application Identities](https://developer.sailpoint.com/docs/identity-security-cloud/machine-identities/machine-identity-lifecycle).
- [Managing AI Agents](https://documentation.sailpoint.com/saas/help/agent/agent_mgmt.html#updating-ai-agents).
- [Aggregating AI Agents](https://documentation.sailpoint.com/saas/help/agent/agent_aggregations.html).
- [Mapping Machine Account Attributes](https://documentation.sailpoint.com/saas/help/machine/account_configuration.html#mapping-machine-account-attributes).

Customers that have licensed Machine Identity Security or Agent Identity Security will receive this event trigger.

This is an example input from this trigger:

```json
{
  "eventType": "MACHINE_IDENTITY_CREATED",
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
