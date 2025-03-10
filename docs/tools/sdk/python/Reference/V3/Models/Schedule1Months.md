---
id: schedule1-months
title: Schedule1Months
pagination_label: Schedule1Months
sidebar_label: Schedule1Months
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule1Months', 'Schedule1Months'] 
slug: /tools/sdk/python/v3/models/schedule1-months
tags: ['SDK', 'Software Development Kit', 'Schedule1Months', 'Schedule1Months']
---

# Schedule1Months


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**SelectorType**](selector-type) |  | [required]
**values** | **[]str** | The selected values.  | [required]
**interval** | **int** | The selected interval for RANGE selectors.  | [optional] 
}

## Example

```python
from sailpoint.v3.models.schedule1_months import Schedule1Months

schedule1_months = Schedule1Months(
type='LIST',
values=[MON, WED],
interval=3
)

```
[[Back to top]](#) 

