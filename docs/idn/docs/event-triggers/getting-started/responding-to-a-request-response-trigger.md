---
id: responding-to-request-response
slug: idn/docs/event-triggers/getting-started/responding-to-request-response
---

# Responding to a Request Response Trigger

## Invocation response modes for REQUEST_RESPONSE type triggers

You can specify how your application interacts with a `REQUEST_RESPONSE` type trigger service by selecting an invocation response mode in the **Response Type** dropdown when editing or creating a `REQUEST_RESPONSE` subscription. There are three response modes to choose from: `SYNC`, `ASYNC`, and `DYNAMIC`.  These response modes are only available when the subscription type is set to `HTTP`.

- `SYNC`: This type of response creates a *synchronous* flow between the trigger service and the custom application. Once a trigger has been invoked, the custom application is expected to respond within 10 seconds. If the application takes longer than 10 seconds to respond, the trigger invocation will terminate without making any decisions.
- `ASYNC`: This type of response creates an *asynchronous* flow between the trigger service and the custom application. When a trigger is invoked, the custom application does not need to respond immediately. The trigger service will provide a URL and a secret that the custom application can use to complete the invocation at a later time.  The application must complete the invocation before the configured deadline on the subscription.
- `DYNAMIC`: This type of response gives the custom application the ability to choose whether it handles the invocation request synchronously or asynchronously on a per-event basis. In some cases, the application may choose `SYNC` mode because it is able to respond quickly to the invocation. In other cases, it may choose `ASYNC` because it needs to run a long running task before responding to the invocation.

## Responding to a REQUEST_RESPONSE trigger invocation

### SYNC response

The custom application responds to the trigger invocation with an appropriate payload.  For example, the application may receive a request from the [Access Request Dynamic Approver](https://developer.sailpoint.com/apis/beta/#tag/Event-Trigger-Models) trigger.  The application will have **10 seconds** to analyze the event details and respond with a 200 (OK) status code and a [response payload](https://developer.sailpoint.com/apis/beta/#section/Access-Request-Dynamic-Approver-Event-Trigger-Input) that contains the identity to add to the approval chain.

200 (OK)

```json
{
    "id": "2c91808b6ef1d43e016efba0ce470906",
    "name": "Adam Adams",
    "type": "IDENTITY"
}
```

### ASYNC response

The custom application only needs to acknowledge that it has received the trigger invocation request by returning an HTTP status of 200 (OK) with an empty JSON object (ex. `{}`) in the response body within **10 seconds** of receiving the event.  It then has until the configured deadline on the subscription to provide a full response to the invocation.  For example, the application may receive a request from the [Access Request Dynamic Approver](https://developer.sailpoint.com/apis/beta/#tag/Event-Trigger-Models) trigger.  An example of the request payload that the application might receive is as follows:

```json
{
  "_metadata": {
    "callbackURL": "https://{tenant}.api.identitynow.com/beta/trigger-invocations/e9103ca9-02c4-bb0f-9441-94b3af012345/complete",
    "responseMode": "async",
    "secret": "c1c60493-3347-4550-9c00-123cdde",
    "triggerId": "idn:access-request-dynamic-approver",
    "triggerType": "requestResponse"
  },
  "accessRequestId": "4b4d982dddff4267ab12f0f1e72b5a6d",
  "requestedBy": {
    "id": "2c91808b6ef1d43e016efba0ce470906",
    "name": "Adam Admin",
    "type": "IDENTITY"
  },
  "requestedFor": {
    "id": "2c91808b6ef1d43e016efba0ce470909",
    "name": "Ed Engineer",
    "type": "IDENTITY"
  },
  "requestedItems": [
    {
      "comment": "Ed needs this access for his day to day job activities",
      "description": "Engineering Access",
      "id": "2c91808b6ef1d43e016efba0ce470904",
      "name": "Engineering Access",
      "operation": "Add",
      "type": "ACCESS_PROFILE"
    }
  ]
}
```

The application will immediately respond to the invocation with a 200 (OK) status code and an empty JSON object.  

200 (OK)

```json
{}
```

Once the application has made a decision on how to respond, it will use the `callbackURL` and `secret` provided in the `_metadata` object from the original request to complete the invocation.  An example response might look like the following:

POST `https://{tenant}.api.identitynow.com/beta/trigger-invocations/e9103ca9-02c4-bb0f-9441-94b3af012345/complete`

```json
{
  "secret": "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "output": {
    "id": "2c91808b6ef1d43e016efba0ce470906",
    "name": "Adam Adams",
    "type": "IDENTITY"
  }
}
```

### DYNAMIC response

The custom application determines arbitrarily whether to respond to the trigger invocation as `SYNC` or `ASYNC`. If the application wishes to respond as `SYNC`, it should follow the directions for a `SYNC` response type, responding within **10 seconds** of the invocation.  In the case of `ASYNC`, the custom application only needs to acknowledge that it has received the trigger invocation request with a 202 (Accepted) within **10 seconds** of receiving the event and complete the invocation at a later time using the `callbackURL` and `secret` provided in the `_metadata` object.

An example of the request payload that the application might receive is as follows:

```json
{
  "_metadata": {
    "callbackURL": "https://{tenant}.api.identitynow.com/beta/trigger-invocations/e9103ca9-02c4-bb0f-9441-94b3af012345/complete",
    "responseMode": "async",
    "secret": "c1c60493-3347-4550-9c00-123cdde",
    "triggerId": "idn:access-request-dynamic-approver",
    "triggerType": "requestResponse"
  },
  "accessRequestId": "4b4d982dddff4267ab12f0f1e72b5a6d",
  "requestedBy": {
    "id": "2c91808b6ef1d43e016efba0ce470906",
    "name": "Adam Admin",
    "type": "IDENTITY"
  },
  "requestedFor": {
    "id": "2c91808b6ef1d43e016efba0ce470909",
    "name": "Ed Engineer",
    "type": "IDENTITY"
  },
  "requestedItems": [
    {
      "comment": "Ed needs this access for his day to day job activities",
      "description": "Engineering Access",
      "id": "2c91808b6ef1d43e016efba0ce470904",
      "name": "Engineering Access",
      "operation": "Add",
      "type": "ACCESS_PROFILE"
    }
  ]
}
```

To respond as `SYNC`, simply respond to the invocation within 10 seconds.

200 (OK)

```json
{
    "id": "2c91808b6ef1d43e016efba0ce470906",
    "name": "Adam Adams",
    "type": "IDENTITY"
}
```

To respond as `ASYNC`, start by responding to the invocation with a 202 (Accepted).

202 (Accepted)

```json
{}
```

Then, use the `callbackURL` and `secret` to send a POST request to the invocation with the decision.

POST `https://{tenant}.api.identitynow.com/beta/trigger-invocations/e9103ca9-02c4-bb0f-9441-94b3af012345/complete`

```json
{
  "secret": "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "output": {
    "id": "2c91808b6ef1d43e016efba0ce470906",
    "name": "Adam Adams",
    "type": "IDENTITY"
  }
}
```

---

## Trigger invocation status

To check the status of a particular trigger invocation, you can use the [list invocation statuses](https://developer.sailpoint.com/apis/beta/#operation/listInvocationStatus) endpoint.  The status endpoint works for both `REQUEST_RESPONSE` and `FIRE_AND_FORGET` triggers. However, the status of `FIRE_AND_FORGET` trigger invocations will contain null values in their `completeInvocationInput` since `FIRE_AND_FORGET` triggers don't need a response to complete.