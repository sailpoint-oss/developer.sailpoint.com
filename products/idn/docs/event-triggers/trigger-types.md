---
id: trigger-types
sidebar_position: 1
---

# Trigger Types

## Fire and forget

A fire and forget trigger only supports one-way communication with subscribers.  Its only job is to forward each event it receives to each subscribing service.  This type of trigger doesn't wait for a response from subscribers, it has no means of knowing if subscribers actually receive the event, and it doesn't have any mechanism for resending events.  This type of trigger can best be thought of as live television, where you can only see what is happening in real time.  There is no ability to rewind the live feed or interact with the broadcast in any way.  This type of trigger is the simplest and most common trigger type among SailPoint's event triggers.  

> Fire and forget triggers can have a maximum of 50 subscribers per event.

## Request response

A request response trigger allows two-way communication between the trigger service and the subscriber.  The main difference with this trigger type is that it expects a response from the subscriber with directions on how to proceed with the event.  For example, the access request dynamic approval event trigger will send the subscriber details about the access request, and the subscriber may respond to the trigger with the identity ID to include in the approval process for an access request.  This type of trigger allows subscribers to not just receive events in real-time, but act on them as well.

> Request response triggers can only have one subscriber per event.
