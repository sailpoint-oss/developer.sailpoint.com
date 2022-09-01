---
id: identity-deleted
slug: /docs/event-triggers/early-access/va-cluster-status-change
---

# Identity Deleted

## Event context

![Flow](./img/identity-deleted-path.png)

Identity deleted events occur when the associated account with an identity is deleted from the identity's authoritative source. After accounts are aggregated and the identity refresh process finds an identity that is not correlated to an account, the associated identity is deleted from IdentityNow. For more information, see [Configuring Correlation](https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045). The Identity deleted event will contain any attributes of the identity as configured in the identity profile. For more information, see [Mapping Identity Profiles](https://community.sailpoint.com/t5/Admin-Help/Mapping-Identity-Profiles/ta-p/77877).

This event trigger provides a flexible way to extend Joiner-Mover-Leaver processes. This provides more proactive governance and ensure users can quickly obtain needed access when enter your organization. Some examples of how this trigger can be used include:

- Notify an administrator or system to take the appropriate provisioning actions as part of the Leaver workflow.
- Notify a system to trigger another action (e.g. deactivate an employee’s badge upon termination).

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../event-triggers-trigger-types.md#fire-and-forget)
- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Identity-Deleted-Event-Trigger-Input)
