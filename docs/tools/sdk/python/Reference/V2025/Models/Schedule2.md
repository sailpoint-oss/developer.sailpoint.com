---
id: v2025-schedule2
title: Schedule2
pagination_label: Schedule2
sidebar_label: Schedule2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule2', 'V2025Schedule2'] 
slug: /tools/sdk/python/v2025/models/schedule2
tags: ['SDK', 'Software Development Kit', 'Schedule2', 'V2025Schedule2']
---

# Schedule2

The schedule information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ScheduleType**](schedule-type) |  | [required]
**months** | [**Schedule2Months**](schedule2-months) |  | [optional] 
**days** | [**Schedule2Days**](schedule2-days) |  | [optional] 
**hours** | [**Schedule2Hours**](schedule2-hours) |  | [required]
**expiration** | **datetime** | A date-time in ISO-8601 format | [optional] 
**time_zone_id** | **str** | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org's default timezone is used. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.schedule2 import Schedule2

schedule2 = Schedule2(
type='WEEKLY',
months=,
days=,
hours=,
expiration='2018-06-25T20:22:28.104Z',
time_zone_id='America/Chicago'
)

```
[[Back to top]](#) 

