---
id: applicationdiscoveryresponse
title: Applicationdiscoveryresponse
pagination_label: Applicationdiscoveryresponse
sidebar_label: Applicationdiscoveryresponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Applicationdiscoveryresponse', 'Applicationdiscoveryresponse'] 
slug: /tools/sdk/python/application-discovery/models/applicationdiscoveryresponse
tags: ['SDK', 'Software Development Kit', 'Applicationdiscoveryresponse', 'Applicationdiscoveryresponse']
---

# Applicationdiscoveryresponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the Object | [optional] 
**type** |  **Enum** [  'QUARTZ',    'QPOC',    'QUEUED_TASK' ] | Type of task for app discovery | [optional] 
**unique_name** | **str** | Name of the task for app discovery | [optional] 
**description** | **str** | Description of the app discovery aggregation | [optional] 
**parent_name** | **str** | Name of the parent of the task for app discovery | [optional] 
**launcher** | **str** | Service to execute app discovery | [optional] 
**target** | [**ApplicationdiscoveryresponseTarget**](applicationdiscoveryresponse-target) |  | [optional] 
**created** | **datetime** | Creation date of app discovery task | [optional] 
**modified** | **datetime** | Last modification date of app discovery task | [optional] 
**launched** | **datetime** | Launch date of app discovery task | [optional] 
**completed** | **datetime** | Completion date of app discovery task | [optional] 
**task_definition_summary** | [**Taskdefinitionsummary**](taskdefinitionsummary) |  | [optional] 
**completion_status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMPERROR' ] | Completion status of app discovery task | [optional] 
**messages** | [**[]Taskstatusmessage**](taskstatusmessage) | Messages associated with the app discovery task | [optional] 
**returns** | [**[]Taskreturndetails**](taskreturndetails) | Return values associated with the app discovery task | [optional] 
**attributes** | **map[string]object** | Attributes of the app discovery task | [optional] 
**progress** | **str** | Current progress of aggregation | [optional] 
**percent_complete** | **int** | Current percentage completion of app discovery task | [optional] 
}

## Example

```python
from sailpoint.application_discovery.models.applicationdiscoveryresponse import Applicationdiscoveryresponse

applicationdiscoveryresponse = Applicationdiscoveryresponse(
id='8886e5e3-63d0-462f-a195-d98da885b8dc',
type='QUARTZ',
unique_name='Application Discovery - ID123',
description='Application Discovery - From given dataset IDs',
parent_name='Parent Task',
launcher='System',
target=,
created='2020-07-11T21:23:15Z',
modified='2020-07-11T21:23:15Z',
launched='2020-07-11T21:23:15Z',
completed='2020-07-11T21:23:15Z',
task_definition_summary=sailpoint.application_discovery.models.task_definition_summary.Task Definition Summary(
                    id = '2c91808475b4334b0175e1dff64b63c5', 
                    unique_name = 'Cloud Account Aggregation', 
                    description = 'Aggregates from the specified application.', 
                    parent_name = 'Cloud Account Aggregation', 
                    executor = 'sailpoint.task.ServiceTaskExecutor', 
                    arguments = {"mantisExecutor":"com.sailpoint.mantis.sources.task.AccountAggregationTask","eventClassesCsv":"sailpoint.thunderbolt.events.AggregationEvents","serviceClass":"sailpoint.thunderbolt.service.AggregationService","serviceMethod":"accountAggregationTask"}, ),
completion_status='SUCCESS',
messages=[
                    sailpoint.application_discovery.models.task_status_message.Task Status Message(
                        type = 'INFO', 
                        localized_text = sailpoint.application_discovery.models.localized_message.Localized Message(
                            locale = 'An error has occurred!', 
                            message = 'Error has occurred!', ), 
                        key = 'akey', 
                        parameters = [{"name":"value"}], )
                    ],
returns=[
                    sailpoint.application_discovery.models.task_return_details.Task Return Details(
                        name = 'label', 
                        attribute_name = 'identityCount', )
                    ],
attributes={"creatorRequestId":"ed5a371bbaba411fb8f1f6970b842334"},
progress='Started',
percent_complete=100
)

```
[[Back to top]](#) 

