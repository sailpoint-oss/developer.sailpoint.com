---
id: v2024-event
title: Event
pagination_label: Event
sidebar_label: Event
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Event', 'V2024Event'] 
slug: /tools/sdk/python/v2024/models/event
tags: ['SDK', 'Software Development Kit', 'Event', 'V2024Event']
---

# Event

Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [required]
**name** | **str** |  | [required]
**type** | [**DocumentType**](document-type) |  | [required]
**created** | **datetime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**synced** | **str** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**action** | **str** | Name of the event as it's displayed in audit reports. | [optional] 
**type** | **str** | Event type. Refer to [Event Types](https://documentation.sailpoint.com/saas/help/search/index.html#event-types) for a list of event types and their meanings. | [optional] 
**actor** | **str** | Name of the actor that generated the event. | [optional] 
**target** | **str** | Name of the target, or recipient, of the event. | [optional] 
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
from sailpoint.v2024.models.event import Event

event = Event(
id='2c91808375d8e80a0175e1f88a575222',
name='john.doe',
type='identity',
created='2018-06-25T20:22:28.104Z',
synced='',
action='update',
type='SYSTEM_CONFIG',
actor='System',
target='Carol.Adams',
stack='tpe',
tracking_number='63f891e0735f4cc8bf1968144a1e7440',
ip_address='52.52.97.85',
details='73b65dfbed1842548c207432a18c84b0',
attributes={pod=stg03-useast1, org=acme, sourceName=SailPoint},
objects=[
                    'AUTHENTICATION'
                    ],
operation='REQUEST',
status='PASSED',
technical_name='AUTHENTICATION_REQUEST_PASSED'
)

```
[[Back to top]](#) 

