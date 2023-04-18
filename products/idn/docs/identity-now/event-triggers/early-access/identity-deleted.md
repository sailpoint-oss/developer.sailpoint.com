---
id: identity-deleted
title: Identity Deleted
pagination_label: Identity Deleted
sidebar_label: Identity Deleted
sidebar_class_name: identityDeleted
keywords: ['event', 'trigger', 'identity', 'deleted', 'early access']
description: Fires after an identity is deleted.
slug: /docs/event-triggers/triggers/identity-deleted
tags: ['Event Triggers', 'Early Access Event Triggers', 'Fire and Forget']
---

:::info

This is an early access event trigger. Please contact support to have it enabled in your tenant.

:::

## Event Context

![Flow](./img/identity-deleted-path.png)

Identity deleted event will occur when an identity meets all of the following requirements:

- No correlated accounts
- Not an owner of a role, access profile, application, source, or taskResult
- Not an owner or requester of a workItem
- Not a protected account or manager
- No assigned capabilities

After accounts are aggregated and the identity refresh process finds an identity that meets the above criteria, the associated identity is deleted from IdentityNow. For more information, see [Configuring Correlation](https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045). The Identity deleted event contains any identity attributes as they are configured in the identity profile. For more information, see [Mapping Identity Profiles](https://community.sailpoint.com/t5/Admin-Help/Mapping-Identity-Profiles/ta-p/77877).

:::info

IdentityNow will **hide** an identity from the identity list in the UI when the authoritative account is removed.  This does not necessarily mean that the identity has been deleted.  The identity will only be deleted when the above criteria are met.  The deletion task run each night, so there will be a delay from when the criteria are met to when the identity will actually be deleted.

:::

This event trigger provides a flexible way to extend joiner-mover-leaver processes. This provides more proactive governance and ensures users can quickly get necessary access when they enter your organization.

Some uses cases for this trigger include the following:

- Notify an administrator or system to take the appropriate provisioning actions as part of the leaver workflow.
- Notify a system to trigger another action (e.g. deactivate an employee’s badge upon termination).

This is an example input from this trigger:

```json
{
  "identity": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  },
  "attributes": {
    "firstname": "John"
  }
}
```

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
<!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Identity-Deleted-Event-Trigger-Input) -->
