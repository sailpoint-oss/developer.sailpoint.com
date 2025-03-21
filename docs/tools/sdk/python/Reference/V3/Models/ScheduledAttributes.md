---
id: scheduled-attributes
title: ScheduledAttributes
pagination_label: ScheduledAttributes
sidebar_label: ScheduledAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledAttributes', 'ScheduledAttributes'] 
slug: /tools/sdk/python/v3/models/scheduled-attributes
tags: ['SDK', 'Software Development Kit', 'ScheduledAttributes', 'ScheduledAttributes']
---

# ScheduledAttributes

Attributes related to a scheduled trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron_string** | **str** | A valid CRON expression | [optional] 
**frequency** |  **Enum** [  'daily',    'weekly',    'monthly',    'yearly',    'cronSchedule' ] | Frequency of execution | [required]
**time_zone** | **str** | Time zone identifier | [optional] 
**weekly_days** | **[]str** | Scheduled days of the week for execution | [optional] 
**weekly_times** | **[]str** | Scheduled execution times | [optional] 
**yearly_times** | **[]str** | Scheduled execution times | [optional] 
}

## Example

```python
from sailpoint.v3.models.scheduled_attributes import ScheduledAttributes

scheduled_attributes = ScheduledAttributes(
cron_string='0 9 * * 1',
frequency='daily',
time_zone='America/Chicago',
weekly_days=Monday,
weekly_times=Monday,
yearly_times=1969-12-31T09:00:00.000Z
)

```
[[Back to top]](#) 

