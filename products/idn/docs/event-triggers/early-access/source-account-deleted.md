---
id: source-account-deleted
slug: /docs/event-triggers/early-access/source-account-deleted
---

# Source Account Deleted

## Event context

This trigger executes whenever an account is deleted from its source during an account aggregation operation. The account may have been manually removed or deleted as the result of a provisioning event. The trigger cannot determine whether the account deletion happened on a source or in IdentityNow. It omits events related to IdentityNow accounts such as the IdentityNow Admin.

Use this event trigger to watch for deletions of authoritative accounts, such as an account deleted on Workday.

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Account-Deleted-Event-Trigger-Input)
