---
id: loadaccountstask-task-attributes
title: LoadaccountstaskTaskAttributes
pagination_label: LoadaccountstaskTaskAttributes
sidebar_label: LoadaccountstaskTaskAttributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoadaccountstaskTaskAttributes', 'LoadaccountstaskTaskAttributes'] 
slug: /tools/sdk/python/sources/models/loadaccountstask-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadaccountstaskTaskAttributes', 'LoadaccountstaskTaskAttributes']
---

# LoadaccountstaskTaskAttributes

Extra attributes map(dictionary) for the task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The id of the source | [optional] 
**optimized_aggregation** | **str** | The indicator if the aggregation process was enabled/disabled for the aggregation job | [optional] 
}

## Example

```python
from sailpoint.sources.models.loadaccountstask_task_attributes import LoadaccountstaskTaskAttributes

loadaccountstask_task_attributes = LoadaccountstaskTaskAttributes(
app_id='c31386cb18bb403cbb6df4c86294ff82',
optimized_aggregation='enabled'
)

```
[[Back to top]](#) 

