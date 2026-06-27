---
id: schedule-months
title: ScheduleMonths
pagination_label: ScheduleMonths
sidebar_label: ScheduleMonths
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduleMonths', 'ScheduleMonths'] 
slug: /tools/sdk/python/sod-policies/models/schedule-months
tags: ['SDK', 'Software Development Kit', 'ScheduleMonths', 'ScheduleMonths']
---

# ScheduleMonths


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Selectortype**](selectortype) |  | [required]
**values** | **[]str** | The selected values.  | [required]
**interval** | **int** | The selected interval for RANGE selectors.  | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.schedule_months import ScheduleMonths

schedule_months = ScheduleMonths(
type='LIST',
values=[MON, WED],
interval=3
)

```
[[Back to top]](#) 

