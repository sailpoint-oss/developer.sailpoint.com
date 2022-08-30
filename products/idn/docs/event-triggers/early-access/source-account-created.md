---
id: source-account-created
slug: /event-triggers/early-access/source-account-created
---

# Source Account Created

## Event context

Source Account Created events occur after a new account is detected during an account aggregration and refresh from a source. This trigger cannot determine whether account creation happened on a source or in IdentityNow. It omits events related to IdentityNow accounts, such as the IdentityNow Admin.

Use this event trigger to watch for new accounts with highly privileged access, such as an account created in Active Directory Domain Admins.

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../event-triggers-trigger-types.md#fire-and-forget)
- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Source-Account-Created-Event-Trigger-Input)
