---
id: schedule2-days
title: Schedule2Days
pagination_label: Schedule2Days
sidebar_label: Schedule2Days
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Schedule2Days', 'Schedule2Days'] 
slug: /tools/sdk/python/certification-campaigns/models/schedule2-days
tags: ['SDK', 'Software Development Kit', 'Schedule2Days', 'Schedule2Days']
---

# Schedule2Days

Specifies which day(s) a schedule is active for. This is required for all schedule types. The \"values\" field holds different data depending on the type of schedule: * WEEKLY: days of the week (1-7) * MONTHLY: days of the month (1-31, L, L-1...) * ANNUALLY: if the \"months\" field is also set: days of the month (1-31, L, L-1...); otherwise: ISO-8601 dates without year (\"--12-31\") * CALENDAR: ISO-8601 dates (\"2020-12-31\")  Note that CALENDAR only supports the LIST type, and ANNUALLY does not support the RANGE type when provided with ISO-8601 dates without year.  Examples:  On Sundays: * type LIST * values \"1\"  The second to last day of the month: * type LIST * values \"L-1\"  From the 20th to the last day of the month: * type RANGE * values \"20\", \"L\"  Every March 2nd: * type LIST * values \"--03-02\"  On March 2nd, 2021: * type: LIST * values \"2021-03-02\" 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'LIST',    'RANGE' ] | Enum type to specify days value | [required]
**values** | **[]str** | Values of the days based on the enum type mentioned above | [required]
**interval** | **int** | Interval between the cert generations | [optional] 
}

## Example

```python
from sailpoint.certification_campaigns.models.schedule2_days import Schedule2Days

schedule2_days = Schedule2Days(
type='LIST',
values=["1"],
interval=2
)

```
[[Back to top]](#) 

