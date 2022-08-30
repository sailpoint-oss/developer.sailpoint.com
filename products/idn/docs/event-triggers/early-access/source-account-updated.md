---
id: source-account-updated
slug: /event-triggers/early-access/source-account-updated
---

# Source Account Updated

## Event context

This trigger executes whenever one or more account attributes change on a single account during an account aggregation operation. The trigger cannot determine whether the account update happened on a source or in IdentityNow. It omits events related to IdentityNow accounts such as the IdentityNow Admin. The following actions are considered updates:

- Update account attributes
- Enable or disable an account
- Lock or unlock source accounts
- Change source account password

Use this event trigger to watch for updates to accounts that add highly privileged access, such as an account that is granted privileged access on a sensitive source.

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../event-triggers-trigger-types.md#fire-and-forget)
- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Account-Updated-Event-Trigger-Input)
