---
id: search-schedule-recipients-inner
title: SearchScheduleRecipientsInner
pagination_label: SearchScheduleRecipientsInner
sidebar_label: SearchScheduleRecipientsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchScheduleRecipientsInner', 'SearchScheduleRecipientsInner'] 
slug: /tools/sdk/python/v3/models/search-schedule-recipients-inner
tags: ['SDK', 'Software Development Kit', 'SearchScheduleRecipientsInner', 'SearchScheduleRecipientsInner']
---

# SearchScheduleRecipientsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | The type of object being referenced | [required]
**id** | **str** | The ID of the referenced object | [required]
}

## Example

```python
from sailpoint.v3.models.search_schedule_recipients_inner import SearchScheduleRecipientsInner

search_schedule_recipients_inner = SearchScheduleRecipientsInner(
type='IDENTITY',
id='2c9180867624cbd7017642d8c8c81f67'
)

```
[[Back to top]](#) 

