---
id: beta-task-status
title: TaskStatus
pagination_label: TaskStatus
sidebar_label: TaskStatus
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TaskStatus', 'BetaTaskStatus'] 
slug: /tools/sdk/python/beta/models/task-status
tags: ['SDK', 'Software Development Kit', 'TaskStatus', 'BetaTaskStatus']
---

# TaskStatus

Details and current status of a specific task

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the task this TaskStatus represents | [required]
**type** |  **Enum** [  'QUARTZ',    'QPOC',    'QUEUED_TASK' ] | Type of task this TaskStatus represents | [required]
**unique_name** | **str** | Name of the task this TaskStatus represents | [required]
**description** | **str** | Description of the task this TaskStatus represents | [required]
**parent_name** | **str** | Name of the parent of the task this TaskStatus represents | [required]
**launcher** | **str** | Service to execute the task this TaskStatus represents | [required]
**target** | [**Target**](target) |  | [optional] 
**created** | **datetime** | Creation date of the task this TaskStatus represents | [required]
**modified** | **datetime** | Last modification date of the task this TaskStatus represents | [required]
**launched** | **datetime** | Launch date of the task this TaskStatus represents | [required]
**completed** | **datetime** | Completion date of the task this TaskStatus represents | [required]
**completion_status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMPERROR' ] | Completion status of the task this TaskStatus represents | [required]
**messages** | [**[]TaskStatusMessage**](task-status-message) | Messages associated with the task this TaskStatus represents | [required]
**returns** | [**[]TaskReturnDetails**](task-return-details) | Return values from the task this TaskStatus represents | [required]
**attributes** | **map[string]object** | Attributes of the task this TaskStatus represents | [required]
**progress** | **str** | Current progress of the task this TaskStatus represents | [required]
**percent_complete** | **int** | Current percentage completion of the task this TaskStatus represents | [required]
**task_definition_summary** | [**TaskDefinitionSummary**](task-definition-summary) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.task_status import TaskStatus

task_status = TaskStatus(
id='id12345',
type='QUARTZ',
unique_name='Big Task',
description='A Really Big Task',
parent_name='Parent Task',
launcher='sweep',
target=sailpoint.beta.models.target.Target(
                    id = 'c6dc37bf508149b28ce5b7d90ca4bbf9', 
                    type = 'APPLICATION', 
                    name = 'Active Directory [source]', ),
created='2020-07-11T21:23:15Z',
modified='2020-07-11T21:23:15Z',
launched='2020-07-11T21:23:15Z',
completed='2020-07-11T21:23:15Z',
completion_status='SUCCESS',
messages=[
                    sailpoint.beta.models.task_status_message.Task Status Message(
                        type = 'INFO', 
                        localized_text = sailpoint.beta.models.localized_message.Localized Message(
                            locale = 'An error has occurred!', 
                            message = 'Error has occurred!', ), 
                        key = 'akey', 
                        parameters = [{name=value}], )
                    ],
returns=[
                    sailpoint.beta.models.task_return_details.Task Return Details(
                        name = 'label', 
                        attribute_name = 'identityCount', )
                    ],
attributes={identityCount=0},
progress='Started',
percent_complete=100,
task_definition_summary=sailpoint.beta.models.task_definition_summary.Task Definition Summary(
                    id = '2c91808475b4334b0175e1dff64b63c5', 
                    unique_name = 'Cloud Account Aggregation', 
                    description = 'Aggregates from the specified application.', 
                    parent_name = 'Cloud Account Aggregation', 
                    executor = 'sailpoint.task.ServiceTaskExecutor', 
                    arguments = {mantisExecutor=com.sailpoint.mantis.sources.task.AccountAggregationTask, eventClassesCsv=sailpoint.thunderbolt.events.AggregationEvents, serviceClass=sailpoint.thunderbolt.service.AggregationService, serviceMethod=accountAggregationTask}, )
)

```
[[Back to top]](#) 

