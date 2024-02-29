---
id: access-request-dynamic-approval
title: Access Request Dynamic Approval
pagination_label: Access Request Dynamic Approval
sidebar_label: Access Request Dynamic Approval
sidebar_class_name: accessRequestDynamicApproval
keywords:
  ['event', 'trigger', 'access', 'request', 'dynamic', 'approval', 'available']
description: Fires after an access request is submitted.
slug: /extensibility/event-triggers/triggers/access-request-dynamic-approval
tags: ['Event Triggers', 'Available Event Triggers', 'Request Response']
---

## Event Context

The Access Request Dynamic Approval event trigger provides a way to route a request to an additional approval step by an identity or a governance group.

When an access request is submitted, the Access Request Dynamic Approval trigger does the following:

- Sends data about the access request and expects a response including the ID of an existing identity or workgroup (i.e. governance group) to add to the approval workflow.
- Based on the ID received, an approval task is assigned to the identity or governance group in Identity Security Cloud for a decision as an additional step after other configured approval requirements are met.
- If the new approver is also the target identity for this request, the manager is assigned instead. If the identity has no manager, a random org admin is assigned.
- If the ID of the additional approver is wrong, then a random org admin is assigned.
- You can choose to **NOT** add an additional approver by providing an empty object as the response to the triggered REST request.

You can use this trigger to develop logic outside of Identity Security Cloud’s out-of-the-box offerings to route an approval step to users such as the following:

- The recipient’s department head
- The recipient’s cost center
- A security officer
- A high-risk governance group for highly sensitive roles

## Configuration

This is a `REQUEST_RESPONSE` trigger type. For more information about how to respond to a `REQUEST_RESPONSE` type trigger, see [responding to a request response type trigger](../responding-to-a-request-response-trigger.mdx) . This trigger intercepts newly submitted access requests and allows the subscribing service to add one additional identity or governance group as the last step in the approver list for the access request.

The subscribing service will receive the following input from the trigger service.

<!-- The input schema can be found in the [API specification](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Dynamic-Approver-Event-Trigger-Input): -->

```json
{
  "accessRequestId": "4b4d982dddff4267ab12f0f1e72b5a6d",
  "requestedFor": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  },
  "requestedItems": [
    {
      "id": "2c91808b6ef1d43e016efba0ce470904",
      "name": "Engineering Access",
      "description": "Engineering Access",
      "type": "ACCESS_PROFILE",
      "operation": "Add",
      "comment": "William needs this access for his day to day job activities."
    }
  ],
  "requestedBy": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1314",
    "name": "Billy Bob"
  }
}
```

The subscribing service can use this information to make a decision about whether to add additional approvers to the access request.

<!-- The output schema can be found in the [API specification](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Dynamic-Approver-Event-Trigger-Output). -->

To add an identity to the approver list, the subscribing service responds to the event trigger with the following payload:

```json
{
  "id": "2c91808b6ef1d43e016efba0ce470906",
  "name": "Adam Adams",
  "type": "IDENTITY"
}
```

To add a governance group to the approver list, the subscribing service responds to the event trigger with the following payload:

```json
{
  "id": "2c91808b6ef1d43e016efba0ce470907",
  "name": "Audit Committee",
  "type": "GOVERNANCE_GROUP"
}
```

If no identity or group should be added to a particular access request, then the subscribing service responds with the following object:

```json
{
  "id": "",
  "name": "",
  "type": ""
}
```

## Additional Information and Links

- **Trigger Type**: [REQUEST_RESPONSE](../trigger-types.md#request-response)
<!--  [Input Schema](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Dynamic-Approver-Event-Trigger-Input)
 [Output Schema](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Dynamic-Approver-Event-Trigger-Output) -->
- [How to respond to a REQUEST_RESPONSE trigger](../responding-to-a-request-response-trigger.mdx)
