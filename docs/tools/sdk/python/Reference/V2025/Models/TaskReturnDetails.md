---
id: v2025-task-return-details
title: TaskReturnDetails
pagination_label: TaskReturnDetails
sidebar_label: TaskReturnDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaskReturnDetails', 'V2025TaskReturnDetails'] 
slug: /tools/sdk/python/v2025/models/task-return-details
tags: ['SDK', 'Software Development Kit', 'TaskReturnDetails', 'V2025TaskReturnDetails']
---

# TaskReturnDetails

Task return details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Display name of the TaskReturnDetails | [required]
**attribute_name** | **str** | Attribute the TaskReturnDetails is for | [required]
}

## Example

```python
from sailpoint.v2025.models.task_return_details import TaskReturnDetails

task_return_details = TaskReturnDetails(
name='label',
attribute_name='identityCount'
)

```
[[Back to top]](#) 

