---
id: beta-schedule-hours
title: ScheduleHours
pagination_label: ScheduleHours
sidebar_label: ScheduleHours
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduleHours', 'BetaScheduleHours'] 
slug: /tools/sdk/python/beta/models/schedule-hours
tags: ['SDK', 'Software Development Kit', 'ScheduleHours', 'BetaScheduleHours']
---

# ScheduleHours

Specifies which hour(s) a schedule is active for. Examples:  Every three hours starting from 8AM, inclusive: * type LIST * values \"8\" * interval 3  During business hours: * type RANGE * values \"9\", \"5\"  At 5AM, noon, and 5PM: * type LIST * values \"5\", \"12\", \"17\" 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'LIST',    'RANGE' ] | Enum type to specify hours value | [required]
**values** | **[]str** | Values of the days based on the enum type mentioned above | [required]
**interval** | **int** | Interval between the cert generations | [optional] 
}

## Example

```python
from sailpoint.beta.models.schedule_hours import ScheduleHours

schedule_hours = ScheduleHours(
type='LIST',
values=[1],
interval=2
)

```
[[Back to top]](#) 

