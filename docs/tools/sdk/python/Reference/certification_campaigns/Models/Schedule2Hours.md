---
id: schedule2-hours
title: Schedule2Hours
pagination_label: Schedule2Hours
sidebar_label: Schedule2Hours
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule2Hours', 'Schedule2Hours'] 
slug: /tools/sdk/python/certification-campaigns/models/schedule2-hours
tags: ['SDK', 'Software Development Kit', 'Schedule2Hours', 'Schedule2Hours']
---

# Schedule2Hours

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
from sailpoint.certification_campaigns.models.schedule2_hours import Schedule2Hours

schedule2_hours = Schedule2Hours(
type='LIST',
values=["1"],
interval=2
)

```
[[Back to top]](#) 

