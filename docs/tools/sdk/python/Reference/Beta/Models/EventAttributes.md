---
id: beta-event-attributes
title: EventAttributes
pagination_label: EventAttributes
sidebar_label: EventAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EventAttributes', 'BetaEventAttributes'] 
slug: /tools/sdk/python/beta/models/event-attributes
tags: ['SDK', 'Software Development Kit', 'EventAttributes', 'BetaEventAttributes']
---

# EventAttributes

Attributes related to an IdentityNow ETS event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the trigger | [required]
**filter_** | **str** | JSON path expression that will limit which events the trigger will fire on | [optional] 
**description** | **str** | Description of the event trigger | [optional] 
}

## Example

```python
from sailpoint.beta.models.event_attributes import EventAttributes

event_attributes = EventAttributes(
id='idn:identity-attributes-changed',
filter_='$.changes[?(@.attribute == 'manager')]',
description=''
)

```
[[Back to top]](#) 

