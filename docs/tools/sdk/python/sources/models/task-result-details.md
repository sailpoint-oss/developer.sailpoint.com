# TaskResultDetails

# TaskResultDetails

Details of an asynchronous task started by a source dataset operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the task. | [optional] 
**type** | **str** | Type of task this result represents. | [optional] 
**name** | **str** | The name of the task. | [optional] 
**description** | **str** | The description of the task. | [optional] 
**launcher** | **str** | The user who initiated the task. | [optional] 
**created** | **datetime** | The task creation date. | [optional] 
**launched** | **datetime** | The task start date. | [optional] 
**completed** | **datetime** | The task completion date. | [optional] 
**completion_status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMP_ERROR' ] | Task completion status. | [optional] 
**parent_name** | **str** | Name of the parent task if one exists. | [optional] 
**progress** | **str** | Current task state. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.task_result_details import TaskResultDetails

task_result_details = TaskResultDetails(
id='ef38f94347e94562b5bb8424a56397d8',
type='QUARTZ',
name='Dataset Aggregation',
description='Aggregate from the specified dataset',
launcher='John Doe',
created='2020-09-07T12:14:00.364Z',
launched='2020-09-07T12:14:00.521Z',
completed='2020-09-07T12:14:01.137Z',
completion_status='SUCCESS',
parent_name='Audit Report',
progress='Initializing...'
)

```
[[Back to top]](#) 

