---
id: beta-schedule1
title: Schedule1
pagination_label: Schedule1
sidebar_label: Schedule1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule1', 'BetaSchedule1'] 
slug: /tools/sdk/python/beta/models/schedule1
tags: ['SDK', 'Software Development Kit', 'Schedule1', 'BetaSchedule1']
---

# Schedule1

The schedule information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ScheduleType**](schedule-type) |  | [required]
**months** | [**Schedule1Months**](schedule1-months) |  | [optional] 
**days** | [**Schedule1Days**](schedule1-days) |  | [optional] 
**hours** | [**Schedule1Hours**](schedule1-hours) |  | [required]
**expiration** | **datetime** | A date-time in ISO-8601 format | [optional] 
**time_zone_id** | **str** | The canonical TZ identifier the schedule will run in (ex. America/New_York).  If no timezone is specified, the org's default timezone is used. | [optional] 
}

## Example

```python
from sailpoint.beta.models.schedule1 import Schedule1

schedule1 = Schedule1(
type='WEEKLY',
months=,
days=,
hours=,
expiration='2018-06-25T20:22:28.104Z',
time_zone_id='America/Chicago'
)

```
[[Back to top]](#) 

