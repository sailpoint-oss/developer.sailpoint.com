---
id: schedule2
title: Schedule2
pagination_label: Schedule2
sidebar_label: Schedule2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule2', 'Schedule2'] 
slug: /tools/sdk/python/certification-campaigns/models/schedule2
tags: ['SDK', 'Software Development Kit', 'Schedule2', 'Schedule2']
---

# Schedule2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'WEEKLY',    'MONTHLY',    'ANNUALLY',    'CALENDAR' ] | Determines the overall schedule cadence. In general, all time period fields smaller than the chosen type can be configured. For example, a DAILY schedule can have 'hours' set, but not 'days'; a WEEKLY schedule can have both 'hours' and 'days' set. | [required]
**months** | [**Schedule2Months**](schedule2-months) |  | [optional] 
**days** | [**Schedule2Days**](schedule2-days) |  | [optional] 
**hours** | [**Schedule2Hours**](schedule2-hours) |  | [required]
**expiration** | **datetime** | Specifies the time after which this schedule will no longer occur. | [optional] 
**time_zone_id** | **str** | The time zone to use when running the schedule. For instance, if the schedule is scheduled to run at 1AM, and this field is set to \"CST\", the schedule will run at 1AM CST. | [optional] 
}

## Example

```python
from sailpoint.certification_campaigns.models.schedule2 import Schedule2

schedule2 = Schedule2(
type='WEEKLY',
months=sailpoint.certification_campaigns.models.schedule_2_months.schedule_2_months(
                    type = 'LIST', 
                    values = ["1"], 
                    interval = 2, ),
days=sailpoint.certification_campaigns.models.schedule_2_days.schedule_2_days(
                    type = 'LIST', 
                    values = ["1"], 
                    interval = 2, ),
hours=sailpoint.certification_campaigns.models.schedule_2_hours.schedule_2_hours(
                    type = 'LIST', 
                    values = ["1"], 
                    interval = 2, ),
expiration=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
time_zone_id='CST'
)

```
[[Back to top]](#) 

