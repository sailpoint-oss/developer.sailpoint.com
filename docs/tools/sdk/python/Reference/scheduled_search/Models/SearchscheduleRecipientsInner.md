---
id: searchschedule-recipients-inner
title: SearchscheduleRecipientsInner
pagination_label: SearchscheduleRecipientsInner
sidebar_label: SearchscheduleRecipientsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchscheduleRecipientsInner', 'SearchscheduleRecipientsInner'] 
slug: /tools/sdk/python/scheduled-search/models/searchschedule-recipients-inner
tags: ['SDK', 'Software Development Kit', 'SearchscheduleRecipientsInner', 'SearchscheduleRecipientsInner']
---

# SearchscheduleRecipientsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | The type of object being referenced | [required]
**id** | **str** | The ID of the referenced object | [required]
}

## Example

```python
from sailpoint.scheduled_search.models.searchschedule_recipients_inner import SearchscheduleRecipientsInner

searchschedule_recipients_inner = SearchscheduleRecipientsInner(
type='IDENTITY',
id='2c9180867624cbd7017642d8c8c81f67'
)

```
[[Back to top]](#) 

