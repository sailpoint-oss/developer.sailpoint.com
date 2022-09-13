---
id: access-request-preapproval
title: Access Request Preapproval
slug: /idn/docs/event-triggers/triggers/access-request-preapproval
description: Fires after an access request is submitted.
---

## Event Context

The platform now includes event triggers within the Access Request approval workflow. The Access Request Submitted event trigger provides more proactive governance, ensures users can quickly obtain needed access, and helps with more preventative measures towards unintended access.

![Flow](./img/access-request-preapproval-path.png)

When an access request is submitted, some uses cases for this trigger include the following:

- Provide the approver with additional context about the access request, like any Separation of Duties (SOD) policy violations, for example.
- Notify the approver through a different medium, such as Slack or Outlook Actionable Messages.
- Send a Terms of Agreement form of the requested Application to be signed by the access requester.
- On average, you can expect about 1 access request for every 4 identities within your org per day. On average you can expect about 1 to 2 access requests within a 10 second period.

Additional use cases include the following:

- Send a Slack Notification to the approver or an approval channel and approve the request within Slack.
- Create an Outlook Actionable Message.
- Create a Google Doc for the requester to fill out and submit.

## Configuration

This is a `REQUEST_RESPONSE` trigger type.  For more information about how to respond to a `REQUEST_RESPONSE` type trigger, see [responding to a request response type trigger](../responding-to-a-request-response-trigger.md).  This trigger intercepts newly submitted access requests and allows the subscribing service to perform a preliminary approval/denial before the access request moves to the next approver in the chain.

The subscribing service will receive the following input from the trigger service.  
<!-- The input schema can be found in the [API specification](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Pre-Approval-Event-Trigger-Input): -->

```json
{
  "accessRequestId": "2c91808b6ef1d43e016efba0ce470904",
  "requestedFor": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1313",
    "name": "William Wilson"
  },
  "requestedItems": [
    {
      "id": "2c91808b6ef1d43e016efba0ce470904",
      "name": "Engineering Access",
      "description": "Access to engineering database",
      "type": "ACCESS_PROFILE",
      "operation": "Add",
      "comment": "William needs this access to do his job."
    }
  ],
  "requestedBy": {
    "type": "IDENTITY",
    "id": "2c91808568c529c60168cca6f90c1314",
    "name": "Rob Robertson"
  }
}
```

The subscribing service can use this information to make a decision about whether to approve or deny the request.  
<!-- The output schema can be found in the [API specification](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Pre-Approval-Event-Trigger-Output).   -->
To approve an access request, the subscribing service responds to the event trigger with the following payload:

```json
{
  "approved": true,
  "comment": "This access has passed preliminary approval.",
  "approver": "AcmeCorpExternalIntegration"
}
```

To deny an access request, the subscribing service responds to the event trigger with the following payload:

```json
{
  "approved": false,
  "comment": "This access should be denied, because this will cause an SOD violation.",
  "approver": "AcmeCorpExternalIntegration"
}
```

This event trigger interrupts the normal workflow for access requests.  Access requests can only proceed if the subscribing service responds within the alotted time by approving the request. If the subscribing service is non-responsive or it is responding with an incorrect payload, access requests will fail after the **Separation of Duties** check.  If you see numerous access requests failing at this stage, verify that your subscribing service itself is operating correctly.

![AR failed](./img/access-request-preapproval-failure.png)

## Additional Information and Links

- **Trigger Type**: [REQUEST_RESPONSE](../trigger-types.md#request-response)
 <!-- [Input Schema](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Pre-Approval-Event-Trigger-Input)
 [Output Schema](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Pre-Approval-Event-Trigger-Output) -->
- [How to respond to a REQUEST_RESPONSE trigger](../responding-to-a-request-response-trigger.md)
