---
id: access-request-postapproval
title: Access Request Postapproval
pagination_label: Access Request Postapproval
sidebar_label: Access Request Postapproval
sidebar_class_name: accessRequestPostapproval
keywords: ["event", "trigger", "access", "request", "postapproval", "post", "approval", "available"]
description: Fires after an access request is approved.
slug: /docs/event-triggers/triggers/access-request-postapproval
tags: ["Event Triggers", "Available Event Triggers", "Fire and Forget"]
---

## Event Context

The SailPoint IdentityNow platform now includes event triggers within the Access Request Approval workflow. The Access Request Postapproval event trigger provides more proactive governance and ensures users can quickly obtain needed access.

![Flow](./img/access-request-postapproval-path.png)

 When an access request is approved, some uses cases for this trigger include the following:

- Notify the requester that the access request has been approved or denied.
- Notify the administrator or system to take the appropriate provisioning actions for the requested access.
- Notify a third party system to trigger another action (e.g. customer feedback survey, initiate another business process), or it can be used for auditing once an access request decision has been made.

The Access Request event trigger is a flexible way to extend the Access Request workflow after access is approved for the requester.

This is an example input from this trigger:

```json
{
  "accessRequestId": "2c91808b6ef1d43e016efba0ce470904",
  "requestedFor": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  },
  "requestedItemsStatus": [
    {
      "id": "2c91808b6ef1d43e016efba0ce470904",
      "name": "Engineering Access",
      "description": "Access to engineering database",
      "type": "ACCESS_PROFILE",
      "operation": "Add",
      "comment": "William needs this access to do his job.",
      "clientMetadata": {
        "applicationName": "My application"
      },
      "approvalInfo": [
        {
          "approvalComment": "This access looks good.  Approved.",
          "approvalDecision": "APPROVED",
          "approverName": "Stephen.Austin",
          "approver": {
            "type": "IDENTITY",
            "id": "2c91808568c529c60168cca6f90c1313",
            "name": "William Wilson"
          }
        }
      ]
    }
  ],
  "requestedBy": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  }
}
```

## Additional Information and Links

- **Trigger Type**: [FIRE_AND_FORGET](../trigger-types.md#fire-and-forget)
 <!-- [Input schema](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Post-Approval-Event-Trigger-Input) -->