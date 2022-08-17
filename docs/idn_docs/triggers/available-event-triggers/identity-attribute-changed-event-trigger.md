---
id: identity-attribute-changed-event-trigger
title: Identity Attribute Changed Event Trigger
sidebar_label: Identity Attribute Changed Event Trigger
sidebar-position: 6
---

# Identity Attribute Changed Event Trigger

## Event context

![Flow](./img/trigger-path.png)

Identity Attribute Changed events occur when any attributes that are aggegrated from an authoritative source differ from the current attributes for an identity during an identity refresh. See [Configuring Correlation](https://community.sailpoint.com/t5/Connectors/Configuring-Correlation/ta-p/74045) for more information about attributes that are updated for an Identity Profile.

This event trigger provides a flexible way to extend Joiner-Mover-Leaver processes. This provides more proactive governance and ensures users can quickly obtain needed access when enter your organization.  Some examples of how this trigger can be used include:

- Notify an administrator or system to take the appropriate provisioning actions as part of the Mover workflow.
- Notify a system to trigger another action (e.g. trigger a certification campaign when an identity's manager had changed ).

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../event-triggers-trigger-types.md#fire-and-forget)
- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Identity-Attributes-Changed-Event-Trigger-Input)