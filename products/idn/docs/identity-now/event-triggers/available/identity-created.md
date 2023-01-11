---
id: identity-created
title: Identity Created
pagination_label: Identity Created
sidebar_label: Identity Created
sidebar_class_name: identityCreated
keywords: ['event', 'trigger', 'identity', 'created', 'available']
description: Fires after an identity is created.
slug: /docs/event-triggers/triggers/identity-created
tags: ['Event Triggers', 'Available Event Triggers', 'Fire and Forget']
---

## Event Context

![Flow](./img/identity-created-path.png)

Identity Created events occur when a new identity is detected during an aggregration and refresh from an authoritative source. New identities are detected when an account from the authoritative source is not correlated to an existing identity. For more information, see [Configuring Correlation](https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045). The Identity Created event contains all of the identity attributes as they are configured in the identity profile. For more information, see [Mapping Identity Profiles](https://community.sailpoint.com/t5/Admin-Help/Mapping-Identity-Profiles/ta-p/77877).

This event trigger provides a flexible way to extend Joiner-Mover-Leaver processes. This provides more proactive governance and ensures users can quickly get necessary access when they enter your organization.

Some uses cases for this trigger include the following:

- Notify an administrator or system to take the appropriate birthright provisioning actions as part of the Joiner workflow.
- Notify a third party system to trigger another action (e.g. create an onboarding experience for a new hire).

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
<!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Identity-Created-Event-Trigger-Input) -->
