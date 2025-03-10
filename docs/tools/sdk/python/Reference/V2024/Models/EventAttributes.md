---
id: v2024-event-attributes
title: EventAttributes
pagination_label: EventAttributes
sidebar_label: EventAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EventAttributes', 'V2024EventAttributes'] 
slug: /tools/sdk/python/v2024/models/event-attributes
tags: ['SDK', 'Software Development Kit', 'EventAttributes', 'V2024EventAttributes']
---

# EventAttributes

Attributes related to an IdentityNow ETS event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the trigger | [required]
**filter_** | **str** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**description** | **str** | Description of the event trigger | [optional] 
**attribute_to_filter** | **str** | The attribute to filter on | [optional] 
}

## Example

```python
from sailpoint.v2024.models.event_attributes import EventAttributes

event_attributes = EventAttributes(
id='idn:identity-attributes-changed',
filter_='$.changes[?(@.attribute == 'manager')]',
description='Triggered when an identity's manager attribute changes',
attribute_to_filter='LifecycleState'
)

```
[[Back to top]](#) 

