---
id: v2025-event-document
title: EventDocument
pagination_label: EventDocument
sidebar_label: EventDocument
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EventDocument', 'V2025EventDocument'] 
slug: /tools/sdk/python/v2025/models/event-document
tags: ['SDK', 'Software Development Kit', 'EventDocument', 'V2025EventDocument']
---

# EventDocument

Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the entitlement. | [optional] 
**name** | **str** | Name of the entitlement. | [optional] 
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**synced** | **str** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**action** | **str** | Name of the event as it's displayed in audit reports. | [optional] 
**type** | **str** | Event type. Refer to [Event Types](https://documentation.sailpoint.com/saas/help/search/index.html#event-types) for a list of event types and their meanings. | [optional] 
**actor** | [**EventActor**](event-actor) |  | [optional] 
**target** | [**EventTarget**](event-target) |  | [optional] 
**stack** | **str** | The event's stack. | [optional] 
**tracking_number** | **str** | ID of the group of events. | [optional] 
**ip_address** | **str** | Target system's IP address. | [optional] 
**details** | **str** | ID of event's details. | [optional] 
**attributes** | **map[string]object** | Attributes involved in the event. | [optional] 
**objects** | **[]str** | Objects the event is happening to. | [optional] 
**operation** | **str** | Operation, or action, performed during the event. | [optional] 
**status** | **str** | Event status. Refer to [Event Statuses](https://documentation.sailpoint.com/saas/help/search/index.html#event-statuses) for a list of event statuses and their meanings. | [optional] 
**technical_name** | **str** | Event's normalized name. This normalized name always follows the pattern of 'objects_operation_status'. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.event_document import EventDocument

event_document = EventDocument(
id='2c91808375d8e80a0175e1f88a575222',
name='Add Entitlement Passed',
created='2018-06-25T20:22:28.104Z',
synced='2018-06-25T20:22:28.104Z',
action='AddEntitlement',
type='ACCESS_ITEM',
actor=sailpoint.v2025.models.event_actor.Event_actor(
                    name = 'System', ),
target=sailpoint.v2025.models.event_target.Event_target(
                    name = 'Carol.Adams', ),
stack='tpe',
tracking_number='63f891e0735f4cc8bf1968144a1e7440',
ip_address='52.52.97.85',
details='73b65dfbed1842548c207432a18c84b0',
attributes={pod=stg03-useast1, org=acme, sourceName=SailPoint},
objects=[
                    'AUTHENTICATION'
                    ],
operation='ADD',
status='PASSED',
technical_name='ENTITLEMENT_ADD_PASSED'
)

```
[[Back to top]](#) 

