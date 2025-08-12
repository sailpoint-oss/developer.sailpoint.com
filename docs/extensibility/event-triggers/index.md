---
id: event-triggers
title: Event triggers
pagination_label: Event Triggers
sidebar_label: Event Triggers
sidebar_position: 3
sidebar_class_name: eventTriggers
keywords: ['event', 'triggers', 'webhooks']
description: Actions triggered by specific events.
slug: /extensibility/event-triggers
tags: ['Event Triggers']
---

## What Are triggers

The result of any action performed in a service is called an **event**. Services like Identity Security Cloud constantly generate events like an update to a setting or the completion of an account aggregation. Most events a service generates are of little value to clients, so services create event triggers, also known as web hooks, that allow clients to subscribe to specific events they are interested in. Similar to news letters or RSS feeds, each subscription tells the service what event a client is interested in and where to send the client the notification.

## How are triggers different from APIs

The biggest difference between event triggers and APIs is how data is accessed. Requesting data with an API is an active process, but receiving data from an event trigger is a passive process. Clients who want to get the latest data with an API must initiate the request. Clients who subscribe to an event trigger do not need to initiate a request. They are notified when the event occurs. This is similar to keeping up with the latest world news on the internet. You can initiate the request for data by opening a news website in your browser, or you can subscribe to a mail list to receive the latest news as it happens.

## When to use triggers

It is best to use event triggers when you need to react to an event in real-time. Although you can set up a polling mechanism using APIs, polling uses more bandwidth and resources, and if you poll too quickly, you can reach an API's rate limits. Event triggers use less bandwidth, they do not affect your API rate limit, and they are as close as you can get to real-time. However, event triggers have downsides to consider. They must be accessible from the public internet so the trigger service knows where to send the notification, and they can be harder to configure and operate than APIs are.

## How to get started with event triggers

Event triggers require different setup and testing steps than APIs do, so you should follow each document to better understand event triggers and the necessary steps to configure one. If this is your first time using event triggers, then you should use the [webhook testing service](./preparing-a-subscriber-service.md#webhook-testing-service) as you follow along.

<div className="text--center">
<iframe width="560" height="315" src="https://www.youtube.com/embed/brhOnLNEN8o?si=_4IfDOFRQIaHHqMG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>