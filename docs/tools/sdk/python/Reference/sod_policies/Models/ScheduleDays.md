---
id: schedule-days
title: ScheduleDays
pagination_label: ScheduleDays
sidebar_label: ScheduleDays
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduleDays', 'ScheduleDays'] 
slug: /tools/sdk/python/sod-policies/models/schedule-days
tags: ['SDK', 'Software Development Kit', 'ScheduleDays', 'ScheduleDays']
---

# ScheduleDays


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Selectortype**](selectortype) |  | [required]
**values** | **[]str** | The selected values.  | [required]
**interval** | **int** | The selected interval for RANGE selectors.  | [optional] 
}

## Example

```python
from sailpoint.sod_policies.models.schedule_days import ScheduleDays

schedule_days = ScheduleDays(
type='LIST',
values=[MON, WED],
interval=3
)

```
[[Back to top]](#) 

