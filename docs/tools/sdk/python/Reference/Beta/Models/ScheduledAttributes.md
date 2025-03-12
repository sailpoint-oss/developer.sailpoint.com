---
id: beta-scheduled-attributes
title: ScheduledAttributes
pagination_label: ScheduledAttributes
sidebar_label: ScheduledAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledAttributes', 'BetaScheduledAttributes'] 
slug: /tools/sdk/python/beta/models/scheduled-attributes
tags: ['SDK', 'Software Development Kit', 'ScheduledAttributes', 'BetaScheduledAttributes']
---

# ScheduledAttributes

Attributes related to a scheduled trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** |  **Enum** [  'daily',    'weekly',    'monthly',    'yearly',    'cronSchedule' ] | Frequency of execution | [required]
**time_zone** | **str** | Time zone identifier | [optional] 
**cron_string** | **str** |  | [optional] 
**weekly_days** | **[]str** | Scheduled days of the week for execution | [optional] 
**weekly_times** | **[]str** | Scheduled execution times | [optional] 
}

## Example

```python
from sailpoint.beta.models.scheduled_attributes import ScheduledAttributes

scheduled_attributes = ScheduledAttributes(
frequency='daily',
time_zone='America/Chicago',
cron_string='0 9 * * 1',
weekly_days=Monday,
weekly_times=Monday
)

```
[[Back to top]](#) 

