---
id: subscribing-to-a-trigger
slug: /docs/event-triggers/getting-started/subscribing-to-a-trigger
---

# Subscribing to a Trigger

## View the available triggers

New event triggers are continually being developed by SailPoint to satisfy a variety of use cases.  Some of these triggers are considered **early access** and are only available in an IDN tenant upon request.  To see a list of available event triggers in your tenant, navigate to the **Event Triggers** tab in the **Admin** section of IdentityNow.  The first page you will see is a list of available event triggers in your tenant.  You can click on each trigger to learn more about what type it is, what causes it to fire, and what the payload will look like.

![Available triggers](./img/available-triggers.png)

## Subscribe to a trigger from the UI

Most of the time, you will subscribe to event triggers using the user interface in IDN.
Please see [subscribing to event triggers](https://documentation.sailpoint.com/saas/help/common/event_triggers.html#subscribing-to-event-triggers) to learn how to subscribe to an event trigger through the IDN UI.

## Subscribe to a trigger from the API

Sometimes, you might have to use the API to subscribe to event triggers.  This can occur when you want to programatically subscribe/unsubscribe from event triggers in a custom application or no code solution that doesn't have a native integration with SailPoint.

If this is your first time calling a SailPoint API, please follow the [getting started guide](../getting_started.md) to learn how to generate a token and call the APIs.

Start by reviewing the list of [available event triggers](https://developer.sailpoint.com/apis/beta/#section/Available-Event-Triggers), and take note of the **ID** of the trigger that you want to subscribe to (ex `idn:access-request-dynamic-approver`).  Use the [create subscription](https://developer.sailpoint.com/apis/beta/#operation/createSubscription) endpoint to subscribe to an event trigger of your choosing.  See the API docs for the latest details on how to craft a subscription request.
