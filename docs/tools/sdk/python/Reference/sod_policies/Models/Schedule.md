---
id: schedule
title: Schedule
pagination_label: Schedule
sidebar_label: Schedule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule', 'Schedule'] 
slug: /tools/sdk/python/sod-policies/models/schedule
tags: ['SDK', 'Software Development Kit', 'Schedule', 'Schedule']
---

# Schedule

The schedule information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Scheduletype**](scheduletype) |  | [required]
**months** | [**ScheduleMonths**](schedule-months) |  | [optional] 
**days** | [**ScheduleDays**](schedule-days) |  | [optional] 
**hours** | [**ScheduleHours**](schedule-hours) |  | [required]
**expiration** | **datetime** | A date-time in ISO-8601 format | [optional] 
**time_zone_id** | **str** | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org's default timezone is used. | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.schedule import Schedule

schedule = Schedule(
type='WEEKLY',
months=,
days=,
hours=,
expiration='2018-06-25T20:22:28.104Z',
time_zone_id='America/Chicago'
)

```
[[Back to top]](#) 

