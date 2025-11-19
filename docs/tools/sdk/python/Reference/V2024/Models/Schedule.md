---
id: v2024-schedule
title: Schedule
pagination_label: Schedule
sidebar_label: Schedule
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule', 'V2024Schedule'] 
slug: /tools/sdk/python/v2024/models/schedule
tags: ['SDK', 'Software Development Kit', 'Schedule', 'V2024Schedule']
---

# Schedule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'WEEKLY',    'MONTHLY',    'ANNUALLY',    'CALENDAR' ] | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have 'hours' set, but not 'days'; a WEEKLY schedule can have both 'hours' and 'days' set. | [required]
**months** | [**ScheduleMonths**](schedule-months) |  | [optional] 
**days** | [**ScheduleDays**](schedule-days) |  | [optional] 
**hours** | [**ScheduleHours**](schedule-hours) |  | [required]
**expiration** | **datetime** | Specifies the time after which this schedule will no longer occur. | [optional] 
**time_zone_id** | **str** | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to \"CST\", the schedule will run at 1AM CST. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.schedule import Schedule

schedule = Schedule(
type='WEEKLY',
months=sailpoint.v2024.models.schedule_months.Schedule_months(
                    type = 'LIST', 
                    values = [1], 
                    interval = 2, ),
days=sailpoint.v2024.models.schedule_days.Schedule_days(
                    type = 'LIST', 
                    values = [1], 
                    interval = 2, ),
hours=sailpoint.v2024.models.schedule_hours.Schedule_hours(
                    type = 'LIST', 
                    values = [1], 
                    interval = 2, ),
expiration=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
time_zone_id='CST'
)

```
[[Back to top]](#) 

