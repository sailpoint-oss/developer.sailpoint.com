---
id: scheduledsearch-all-of-owner
title: ScheduledsearchAllOfOwner
pagination_label: ScheduledsearchAllOfOwner
sidebar_label: ScheduledsearchAllOfOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledsearchAllOfOwner', 'ScheduledsearchAllOfOwner'] 
slug: /tools/sdk/python/scheduled-search/models/scheduledsearch-all-of-owner
tags: ['SDK', 'Software Development Kit', 'ScheduledsearchAllOfOwner', 'ScheduledsearchAllOfOwner']
---

# ScheduledsearchAllOfOwner

The owner of the scheduled search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | The type of object being referenced | [required]
**id** | **str** | The ID of the referenced object | [required]
}

## Example

```python
from sailpoint.scheduled_search.models.scheduledsearch_all_of_owner import ScheduledsearchAllOfOwner

scheduledsearch_all_of_owner = ScheduledsearchAllOfOwner(
type='IDENTITY',
id='2c9180867624cbd7017642d8c8c81f67'
)

```
[[Back to top]](#) 

