---
id: schedule1-hours
title: Schedule1Hours
pagination_label: Schedule1Hours
sidebar_label: Schedule1Hours
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule1Hours', 'Schedule1Hours'] 
slug: /tools/sdk/python/v3/models/schedule1-hours
tags: ['SDK', 'Software Development Kit', 'Schedule1Hours', 'Schedule1Hours']
---

# Schedule1Hours


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**SelectorType**](selector-type) |  | [required]
**values** | **[]str** | The selected values.  | [required]
**interval** | **int** | The selected interval for RANGE selectors.  | [optional] 
}

## Example

```python
from sailpoint.v3.models.schedule1_hours import Schedule1Hours

schedule1_hours = Schedule1Hours(
type='LIST',
values=[MON, WED],
interval=3
)

```
[[Back to top]](#) 

