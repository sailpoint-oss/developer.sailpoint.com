---
id: taskinfo
title: Taskinfo
pagination_label: Taskinfo
sidebar_label: Taskinfo
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Taskinfo', 'Taskinfo'] 
slug: /tools/sdk/python/data-access-security/models/taskinfo
tags: ['SDK', 'Software Development Kit', 'Taskinfo', 'Taskinfo']
---

# Taskinfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**task_id** | **int** | The unique identifier for the task. | [optional] 
**task_type_name** | **str** | The type or category of the task. | [optional] 
**start_time** | **int** | The start time of the task, represented as epoch seconds. | [optional] 
**end_time** | **int** | The end time of the task, represented as epoch seconds. | [optional] 
**task_name** | **str** | The display name of the task. | [optional] 
**created_by_display_name** | **str** | The display name of the user who created the task. | [optional] 
**progress** | **int** | The progress of the task, typically represented as a percentage (0-100). | [optional] 
**status** | **str** | The current status of the task (e.g., \"Running\", \"Completed\", \"Failed\"). | [optional] 
**details** | **str** | Additional details or information about the task. | [optional] 
**schedule_task_id** | **int** | The unique identifier of the associated scheduled task, if applicable. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.taskinfo import Taskinfo

taskinfo = Taskinfo(
task_id=1001,
task_type_name='DataSync',
start_time=1762237200,
end_time=1762240800,
task_name='Daily Data Sync',
created_by_display_name='Jane Doe',
progress=75,
status='Running',
details='Task is processing files in the Finance folder.',
schedule_task_id=2001
)

```
[[Back to top]](#) 

