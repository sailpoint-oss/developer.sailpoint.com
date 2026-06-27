---
id: taskresultresponse
title: Taskresultresponse
pagination_label: Taskresultresponse
sidebar_label: Taskresultresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Taskresultresponse', 'Taskresultresponse'] 
slug: /tools/sdk/python/identities/models/taskresultresponse
tags: ['SDK', 'Software Development Kit', 'Taskresultresponse', 'Taskresultresponse']
---

# Taskresultresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | the type of response reference | [optional] 
**id** | **str** | the task ID | [optional] 
**name** | **str** | the task name (not used in this endpoint, always null) | [optional] 
}

## Example

```python
from sailpoint.identities.models.taskresultresponse import Taskresultresponse

taskresultresponse = Taskresultresponse(
type='TASK_RESULT',
id='78733556-9ea3-4f59-bf69-e5cd92b011b4',
name='null'
)

```
[[Back to top]](#) 

