---
id: testing-triggers
title: Testing Triggers
pagination_label: Testing Triggers
sidebar_label: Testing Triggers
sidebar_position: 5
sidebar_class_name: testingTriggers
keywords: ["event", "trigger", "testing"]
description:
  It is important to test your trigger subscription configuration with your
  actual subscribing service before enabling your subscription for production
  use.
slug: /docs/event-triggers/testing-triggers
tags: ["Event Triggers"]
---

It is important to test your trigger subscription configuration with your actual
subscribing service (not a test site like [webhook.site](https://webhook.site))
before enabling your subscription for production use. Testing subscriptions
ensures that your subscribing service can successfully receive events and that
you are receiving the correct events based on the filter you have provided.

## Sending Test Invocations

The easiest way to send a test event to your subscribing service is to use the
**Test Subscription** command. Go to your subscription in the Event Trigger UI,
select **Options** to the right of the subscription, and select **Test
Subscription**.

![test subscription](./img/test-subscription.png)

Doing so sends a test event to your subscribing service, using the default
example payload for the specific trigger you are subscribing to. This is an easy
way to validate that your service can receive events, but it lacks the ability
to modify the event payload to test your filter against different payloads.
However, there is an API endpoint you can use to modify the test payload.

If you want to control the test input to validate your filter against a more
robust set of data, you can use the
[test invocation](/idn/api/beta/start-test-invocation) API endpoint. You can use
this API to send an input payload with any values that you want. This is an
example of an invocation of this API:

```text
POST `https://{tenant}.api.identitynow.com/beta/trigger-invocations/test`
```

```json
{
  "triggerId": "idn:access-request-pre-approval",
  "input": {
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
  },
  "contentJson": {}
}
```

## Troubleshooting

### Trigger Service Issues

If your subscribing service is not receiving your test invocations, you have a
couple of options to debug the issue. Start by viewing the activity log for the
subscription in the UI to ensure your test events are actually being sent.

![activity log](./img/activity-log.png)

Check the **Created** date with the time you sent the test events. If they are
being sent, check the event details. Look for any errors being reported, and
ensure your subscribing service's subscription ID is in the `subcriptionId` the
event was sent to.

![debug connection](./img/debug-connection.png)

You can also view the activity log by using the
[list latest invocation statuses](/idn/api/beta/list-invocation-status)
endpoint.

### Filter Issues

If you do not see your events in the activity log, it may be a filtering issue.
If the filter you configured on the subscription is not matching the test event
data, no event will be sent. Double check your filter expression with the test
payload in a JSONpath editor to ensure the filter is valid and matches your
data. See [Filtering Events](./filtering-events.md) for more information.

### Misconfigured Subscription

Double check that your subscription configuration is correct.

- Ensure the URL you provided is accessible from the public internet. If your
  subscribing service is hosted internally in your company's intranet, you may
  be able to access it from your computer, but the trigger service may not be
  able to.
- Verify that the authentication details are correct. Verify that the
  username/password or bearer token is valid.
