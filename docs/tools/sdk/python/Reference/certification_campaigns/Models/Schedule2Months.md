---
id: schedule2-months
title: Schedule2Months
pagination_label: Schedule2Months
sidebar_label: Schedule2Months
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule2Months', 'Schedule2Months'] 
slug: /tools/sdk/python/certification-campaigns/models/schedule2-months
tags: ['SDK', 'Software Development Kit', 'Schedule2Months', 'Schedule2Months']
---

# Schedule2Months

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
from sailpoint.certification_campaigns.models.schedule2_months import Schedule2Months

schedule2_months = Schedule2Months(
type='LIST',
values=["1"],
interval=2
)

```
[[Back to top]](#) 

