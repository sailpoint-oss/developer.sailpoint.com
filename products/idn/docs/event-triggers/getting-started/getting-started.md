---
id: getting-started
slug: /docs/event-triggers/getting-started
---

# Getting Started

## What are triggers

The result of any action performed in a service is called an **event**.  Services, like IdentityNow, are constantly generating events, like an update to a setting or the completion of an account aggregation, to name a few.  Most of the events that a service generates are of little value to clients, so services will create event triggers, also known as web hooks, that allow clients to subscribe to specific events that they are interested in.  Similar to news letters or RSS feeds, each subscription tells the service what event a client is interested in and where to send them the notification.

## How are triggers different from APIs

The biggest difference between event triggers and APIs is how data is accessed.  Requesting data via an API is an active process, while receiving data from an event trigger is a passive process.  Clients that want to get the latest data via an API must initiate the request.  Clients that subscribe to an event trigger don't need to initiate a request; they are notified as soon as the event occurs.  This is similar to keeping up with the latest world news on the internet.  You can initiate the request for data by opening a news website in your browser, or you can subscribe to a mail list to receive the latest news as it happens.

## When to use triggers

Event triggers are best used when you need to react to an event in real-time.  Although you can set up a polling mechanism using APIs, polling uses more bandwidth and resources, and if you poll too quickly you can reach the rate limits of an API. Event triggers use less bandwidth, don't affect your API rate limit, and are as close as you can get to real-time.  However, there are downsides to event triggers that should be taken into consideration.  They must be reachable from the public internet so the trigger service knows where to send the notification, and they can be harder to configure and operate than APIs.  