---
id: task-result-dto
title: TaskResultDto
pagination_label: TaskResultDto
sidebar_label: TaskResultDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaskResultDto', 'TaskResultDto'] 
slug: /tools/sdk/python/v3/models/task-result-dto
tags: ['SDK', 'Software Development Kit', 'TaskResultDto', 'TaskResultDto']
---

# TaskResultDto

Task result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'TASK_RESULT' ] | Task result DTO type. | [optional] 
**id** | **str** | Task result ID. | [optional] 
**name** | **str** | Task result display name. | [optional] 
}

## Example

```python
from sailpoint.v3.models.task_result_dto import TaskResultDto

task_result_dto = TaskResultDto(
type='TASK_RESULT',
id='464ae7bf791e49fdb74606a2e4a89635',
name=''
)

```
[[Back to top]](#) 

