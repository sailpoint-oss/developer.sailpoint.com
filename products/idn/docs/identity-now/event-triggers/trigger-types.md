---
id: trigger-types
title: Trigger Types
pagination_label: Trigger Types
sidebar_label: Trigger Types
sidebar_position: 1
sidebar_class_name: triggerTypes
keywords: ["event", "trigger", "types"]
description: Different types of triggerst exist, and those types of triggers do different things depending on their type.
slug: /docs/event-triggers/trigger-types
tags: ["Event Triggers"]
---

## Fire and Forget

A fire and forget trigger only supports one-way communication with subscribers.  Its only job is to forward each event it receives to each subscribing service.  This trigger type does not wait for a response from subscribers. It has no way of knowing whether subscribers actually receive the event, and it does not have any mechanism for resending events.  Think of this trigger type as live television. You can only see what is happening in real-time. You cannot rewind the live feed or interact with the broadcast in any way.  This trigger type is the simplest and most common trigger type among SailPoint's event triggers.  

:::caution
Fire and forget triggers can have a maximum of 50 subscribers per event.
:::

## Request Response

A request response trigger allows two-way communication between the trigger service and the subscriber.  The main difference with this trigger type is that it expects a response from the subscriber with directions about how to proceed with the event.  For example, the access request dynamic approval event trigger will send the subscriber details about the access request, and the subscriber may respond to the trigger with the identity ID to include in the approval process for an access request.  This trigger type allows subscribers to not only receive events in real-time, but to act on them as well.

:::caution
Request response triggers can only have one subscriber per event.
:::
