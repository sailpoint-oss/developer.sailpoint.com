---
id: trigger-types
title: Trigger Types
pagination_label: Trigger Types
sidebar_label: Trigger Types
sidebar_position: 1
sidebar_class_name: triggerTypes
keywords: ['event', 'trigger', 'types']
description: These are the different trigger types you can use. 
slug: /extensibility/event-triggers/trigger-types
tags: ['Event Triggers']
---

## Fire and Forget

A fire and forget trigger only supports one-way communication with subscribers. Its only job is to forward each event it receives to each subscribing service. This trigger type doesn't wait for a response from subscribers. It has no way of knowing whether subscribers actually receive the event, and it doesn't have any mechanism for resending events. Think of this trigger type as live television. You can only see what is happening in real-time. You cannot rewind the live feed or interact with the broadcast in any way. This trigger type is the simplest and most common trigger type among SailPoint's event triggers.

:::caution

Fire and forget triggers can have a maximum of 50 subscribers per event.

:::

## Response Required

A response required trigger allows two-way communication between the trigger service and the subscriber. This trigger type expects a response from the subscriber with directions about how to proceed with the event. For example, the access request dynamic approval event trigger will send the subscriber details about the access request, and the subscriber may respond to the trigger with the identity ID to include in the approval process for an access request. This trigger type allows subscribers to not only receive events in real-time, but to act on them as well.

:::caution

Response required triggers can only have one subscriber per event.

:::
