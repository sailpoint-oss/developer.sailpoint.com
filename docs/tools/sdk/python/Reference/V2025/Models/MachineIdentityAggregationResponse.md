---
id: v2025-machine-identity-aggregation-response
title: MachineIdentityAggregationResponse
pagination_label: MachineIdentityAggregationResponse
sidebar_label: MachineIdentityAggregationResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MachineIdentityAggregationResponse', 'V2025MachineIdentityAggregationResponse'] 
slug: /tools/sdk/python/v2025/models/machine-identity-aggregation-response
tags: ['SDK', 'Software Development Kit', 'MachineIdentityAggregationResponse', 'V2025MachineIdentityAggregationResponse']
---

# MachineIdentityAggregationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] 
**type** |  **Enum** [  'QUARTZ',    'QPOC',    'QUEUED_TASK' ] | Type of task for aggregation | [optional] 
**unique_name** | **str** | Name of the task for aggregation | [optional] 
**description** | **str** | Description of the aggregation | [optional] 
**parent_name** | **str** | Name of the parent of the task for aggregation | [optional] 
**launcher** | **str** | Service to execute the aggregation | [optional] 
**target** | [**MachineIdentityAggregationResponseTarget**](machine-identity-aggregation-response-target) |  | [optional] 
**created** | **datetime** | Creation date of the aggregation | [optional] 
**modified** | **datetime** | Last modification date of the aggregation | [optional] 
**launched** | **datetime** | Launch date of the aggregation | [optional] 
**completed** | **datetime** | Completion date of the aggregation | [optional] 
**task_definition_summary** | [**TaskDefinitionSummary**](task-definition-summary) |  | [optional] 
**completion_status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMPERROR' ] | Completion status of the aggregation | [optional] 
**messages** | [**[]TaskStatusMessage**](task-status-message) | Messages associated with the aggregation | [optional] 
**returns** | [**[]TaskReturnDetails**](task-return-details) | Return values associated with the aggregation | [optional] 
**attributes** | **map[string]object** | Attributes of the aggregation | [optional] 
**progress** | **str** | Current progress of aggregation | [optional] 
**percent_complete** | **int** | Current percentage completion of aggregation | [optional] 
}

## Example

```python
from sailpoint.v2025.models.machine_identity_aggregation_response import MachineIdentityAggregationResponse

machine_identity_aggregation_response = MachineIdentityAggregationResponse(
id='8886e5e3-63d0-462f-a195-d98da885b8dc',
type='QUARTZ',
unique_name='AI Agent Aggregation - ID123',
description='AI Agent Aggregation - From given dataset IDs',
parent_name='Parent Task',
launcher='System',
target=,
created='2020-07-11T21:23:15Z',
modified='2020-07-11T21:23:15Z',
launched='2020-07-11T21:23:15Z',
completed='2020-07-11T21:23:15Z',
task_definition_summary=sailpoint.v2025.models.task_definition_summary.Task Definition Summary(
                    id = '2c91808475b4334b0175e1dff64b63c5', 
                    unique_name = 'Cloud Account Aggregation', 
                    description = 'Aggregates from the specified application.', 
                    parent_name = 'Cloud Account Aggregation', 
                    executor = 'sailpoint.task.ServiceTaskExecutor', 
                    arguments = {mantisExecutor=com.sailpoint.mantis.sources.task.AccountAggregationTask, eventClassesCsv=sailpoint.thunderbolt.events.AggregationEvents, serviceClass=sailpoint.thunderbolt.service.AggregationService, serviceMethod=accountAggregationTask}, ),
completion_status='SUCCESS',
messages=[
                    sailpoint.v2025.models.task_status_message.Task Status Message(
                        type = 'INFO', 
                        localized_text = sailpoint.v2025.models.localized_message.Localized Message(
                            locale = 'An error has occurred!', 
                            message = 'Error has occurred!', ), 
                        key = 'akey', 
                        parameters = [{name=value}], )
                    ],
returns=[
                    sailpoint.v2025.models.task_return_details.Task Return Details(
                        name = 'label', 
                        attribute_name = 'identityCount', )
                    ],
attributes={creatorRequestId=ed5a371bbaba411fb8f1f6970b842334},
progress='Started',
percent_complete=100
)

```
[[Back to top]](#) 

