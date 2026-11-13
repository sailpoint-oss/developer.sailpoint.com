# SourceAgentDeletionTaskStatus

# SourceAgentDeletionTaskStatus

Details and current status of the task that deletes AI agents from a source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the deletion task. | [optional] 
**type** |  **Enum** [  'QUARTZ',    'QPOC',    'QUEUED_TASK' ] | Type of the deletion task. | [optional] 
**unique_name** | **str** | Name of the deletion task. | [optional] 
**description** | **str** | Description of the deletion task. | [optional] 
**parent_name** | **str** | Name of the parent of the deletion task. | [optional] 
**launcher** | **str** | Service or user that launched the deletion task. | [optional] 
**target** | [**SourceAgentDeletionTaskStatusTarget**](source-agent-deletion-task-status-target) |  | [optional] 
**created** | **datetime** | Creation date of the deletion task. | [optional] 
**modified** | **datetime** | Last modification date of the deletion task. | [optional] 
**launched** | **datetime** | Launch date of the deletion task. | [optional] 
**completed** | **datetime** | Completion date of the deletion task. `null` until the task finishes. | [optional] 
**task_definition_summary** | [**TaskDefinitionSummary**](task-definition-summary) |  | [optional] 
**completion_status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMPERROR' ] | Completion status of the deletion task. `null` until the task finishes. | [optional] 
**messages** | [**[]TaskStatusMessage**](task-status-message) | Messages associated with the deletion task. | [optional] 
**returns** | [**[]TaskReturnDetails**](task-return-details) | Return values from the deletion task. | [optional] 
**attributes** | **map[string]object** | Attributes of the deletion task. | [optional] 
**progress** | **str** | Current progress of the deletion task. | [optional] 
**percent_complete** | **int** | Current percentage completion of the deletion task. | [optional] 
\}

## Example

```python
from sailpoint.sources.models.source_agent_deletion_task_status import SourceAgentDeletionTaskStatus

source_agent_deletion_task_status = SourceAgentDeletionTaskStatus(
id='8886e5e3-63d0-462f-a195-d98da885b8dc',
type='QUEUED_TASK',
unique_name='Machine Identity Deletion',
description='Machine Identity Deletion',
parent_name='Parent Task',
launcher='System',
target=,
created='2026-10-22T14:03:11Z',
modified='2026-10-22T14:03:11Z',
launched='2026-10-22T14:03:11Z',
completed='2026-10-22T14:09:47Z',
task_definition_summary=sailpoint.sources.models.task_definition_summary.Task Definition Summary(
                    id = '2c91808475b4334b0175e1dff64b63c5', 
                    unique_name = 'Cloud Account Aggregation', 
                    description = 'Aggregates from the specified application.', 
                    parent_name = 'Cloud Account Aggregation', 
                    executor = 'sailpoint.task.ServiceTaskExecutor', 
                    arguments = {"mantisExecutor":"com.sailpoint.mantis.sources.task.AccountAggregationTask","eventClassesCsv":"sailpoint.thunderbolt.events.AggregationEvents","serviceClass":"sailpoint.thunderbolt.service.AggregationService","serviceMethod":"accountAggregationTask"}, ),
completion_status='SUCCESS',
messages=[
                    sailpoint.sources.models.task_status_message.Task Status Message(
                        type = 'INFO', 
                        localized_text = sailpoint.sources.models.localized_message.Localized Message(
                            locale = 'An error has occurred!', 
                            message = 'Error has occurred!', ), 
                        key = 'akey', 
                        parameters = [{"name":"value"}], )
                    ],
returns=[
                    sailpoint.sources.models.task_return_details.Task Return Details(
                        name = 'label', 
                        attribute_name = 'identityCount', )
                    ],
attributes={},
progress='Started',
percent_complete=0
)

```
[[Back to top]](#) 

