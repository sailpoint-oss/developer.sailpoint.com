---
id: schedule1-days
title: Schedule1Days
pagination_label: Schedule1Days
sidebar_label: Schedule1Days
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule1Days', 'Schedule1Days'] 
slug: /tools/sdk/python/v3/models/schedule1-days
tags: ['SDK', 'Software Development Kit', 'Schedule1Days', 'Schedule1Days']
---

# Schedule1Days


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**SelectorType**](selector-type) |  | [required]
**values** | **[]str** | The selected values.  | [required]
**interval** | **int** | The selected interval for RANGE selectors.  | [optional] 
}

## Example

```python
from sailpoint.v3.models.schedule1_days import Schedule1Days

schedule1_days = Schedule1Days(
type='LIST',
values=[MON, WED],
interval=3
)

```
[[Back to top]](#) 

