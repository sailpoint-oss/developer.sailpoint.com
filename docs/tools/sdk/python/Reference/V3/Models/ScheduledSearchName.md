---
id: scheduled-search-name
title: ScheduledSearchName
pagination_label: ScheduledSearchName
sidebar_label: ScheduledSearchName
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ScheduledSearchName', 'ScheduledSearchName'] 
slug: /tools/sdk/python/v3/models/scheduled-search-name
tags: ['SDK', 'Software Development Kit', 'ScheduledSearchName', 'ScheduledSearchName']
---

# ScheduledSearchName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the scheduled search.  | [optional] 
**description** | **str** | The description of the scheduled search.  | [optional] 
}

## Example

```python
from sailpoint.v3.models.scheduled_search_name import ScheduledSearchName

scheduled_search_name = ScheduledSearchName(
name='Daily disabled accounts',
description='Daily disabled accounts'
)

```
[[Back to top]](#) 

