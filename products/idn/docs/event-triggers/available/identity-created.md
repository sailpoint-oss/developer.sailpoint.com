---
id: identity-created
slug: /docs/event-triggers/identity-created
---

# Identity Created

## Event context

![Flow](./img/identity-created-path.png)

Identity Created events occur when a new identity is detected during an aggregration and refresh from an authoritative source.  New identities are detected when an account from the authoritative source is not correlated to an existing identity. For more information, see [Configuring Correlation](https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045). The Identity Created event will contain all attributes of the identity as configured in the identity profile. For more information, see [Mapping Identity Profiles](https://community.sailpoint.com/t5/Admin-Help/Mapping-Identity-Profiles/ta-p/77877).

This event trigger provides a flexible way to extend Joiner-Mover-Leaver processes. This provides more proactive governance and ensure users can quickly obtain needed access when they enter your organization. Some examples of how this trigger can be used include:

- Notify an administrator or system to take the appropriate birthright provisioning actions as part of the Joiner workflow.
- Notify a third party system to trigger another action (e.g. create an onboarding experience for a new hire).

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../event-triggers-trigger-types.md#fire-and-forget)
- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Identity-Created-Event-Trigger-Input)
