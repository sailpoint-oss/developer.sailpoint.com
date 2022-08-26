---
id: access-request-postapproval
slug: /idn/event-triggers/access-request-postapproval
---

# Access Request Postapproval

## Event context

The SailPoint IdentityNow platform now includes event triggers within the Access Request Approval workflow. The Access Request Postapproval event trigger provides more proactive governance and ensure users can quickly obtain needed access.

![Flow](./img/access-request-postapproval-path.png)

 When an access request is approved, this event trigger can:

- Notify the requester that the access request has been approve or denied.
- Notify the administrator or system to take the appropriate provisioning actions for the requested access.
- Notify a third party system to trigger another action (e.g. customer feedback survey, initiate another business process), or simply for auditing once an access request decision has been made.

The Access Request event trigger is a flexible way to extend the Access Request workflow after access is approved for the requester.

## Additional information and links

- **Trigger Type**: [FIRE_AND_FORGET](../event-triggers-trigger-types.md#fire-and-forget)
- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Post-Approval-Event-Trigger-Input)