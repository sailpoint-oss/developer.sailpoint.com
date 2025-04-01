---
id: v2025-schedule-months
title: ScheduleMonths
pagination_label: ScheduleMonths
sidebar_label: ScheduleMonths
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduleMonths', 'V2025ScheduleMonths'] 
slug: /tools/sdk/python/v2025/models/schedule-months
tags: ['SDK', 'Software Development Kit', 'ScheduleMonths', 'V2025ScheduleMonths']
---

# ScheduleMonths

Specifies which months of a schedule are active. Only valid for ANNUALLY schedule types. Examples:  On February and March: * type LIST * values \"2\", \"3\"  Every 3 months, starting in January (quarterly): * type LIST * values \"1\" * interval 3  Every two months between July and December: * type RANGE * values \"7\", \"12\" * interval 2 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'LIST',    'RANGE' ] | Enum type to specify months value | [required]
**values** | **[]str** | Values of the months based on the enum type mentioned above | [required]
**interval** | **int** | Interval between the cert generations | [optional] 
}

## Example

```python
from sailpoint.v2025.models.schedule_months import ScheduleMonths

schedule_months = ScheduleMonths(
type='LIST',
values=[1],
interval=2
)

```
[[Back to top]](#) 

