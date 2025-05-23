---
id: v2025-scheduled-search-all-of-owner
title: ScheduledSearchAllOfOwner
pagination_label: ScheduledSearchAllOfOwner
sidebar_label: ScheduledSearchAllOfOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledSearchAllOfOwner', 'V2025ScheduledSearchAllOfOwner'] 
slug: /tools/sdk/python/v2025/models/scheduled-search-all-of-owner
tags: ['SDK', 'Software Development Kit', 'ScheduledSearchAllOfOwner', 'V2025ScheduledSearchAllOfOwner']
---

# ScheduledSearchAllOfOwner

The owner of the scheduled search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | The type of object being referenced | [required]
**id** | **str** | The ID of the referenced object | [required]
}

## Example

```python
from sailpoint.v2025.models.scheduled_search_all_of_owner import ScheduledSearchAllOfOwner

scheduled_search_all_of_owner = ScheduledSearchAllOfOwner(
type='IDENTITY',
id='2c9180867624cbd7017642d8c8c81f67'
)

```
[[Back to top]](#) 

