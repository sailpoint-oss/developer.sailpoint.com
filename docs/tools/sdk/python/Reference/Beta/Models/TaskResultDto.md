---
id: beta-task-result-dto
title: TaskResultDto
pagination_label: TaskResultDto
sidebar_label: TaskResultDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaskResultDto', 'BetaTaskResultDto'] 
slug: /tools/sdk/python/beta/models/task-result-dto
tags: ['SDK', 'Software Development Kit', 'TaskResultDto', 'BetaTaskResultDto']
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
from sailpoint.beta.models.task_result_dto import TaskResultDto

task_result_dto = TaskResultDto(
type='TASK_RESULT',
id='464ae7bf791e49fdb74606a2e4a89635',
name=''
)

```
[[Back to top]](#) 

