---
id: role-propagation-ongoing-response-role-propagation-details
title: RolePropagationOngoingResponseRolePropagationDetails
pagination_label: RolePropagationOngoingResponseRolePropagationDetails
sidebar_label: RolePropagationOngoingResponseRolePropagationDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RolePropagationOngoingResponseRolePropagationDetails', 'RolePropagationOngoingResponseRolePropagationDetails'] 
slug: /tools/sdk/python/role-propagation/models/role-propagation-ongoing-response-role-propagation-details
tags: ['SDK', 'Software Development Kit', 'RolePropagationOngoingResponseRolePropagationDetails', 'RolePropagationOngoingResponseRolePropagationDetails']
---

# RolePropagationOngoingResponseRolePropagationDetails

Details of the ongoing role propagation process

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the Role Propagation process triggered. | [optional] 
**status** |  **Enum** [  'RUNNING',    'COMPLETED' ] | Status of the Role Propagation process. | [optional] 
**execution_stage** |  **Enum** [  'PENDING',    'DATA_AGGREGATION_RUNNING',    'LAUNCH_PROVISIONING',    'SUCCEEDED',    'FAILED',    'TERMINATED' ] | Current execution stage of the Role Propagation process. | [optional] 
**launched** | **datetime** | Time when the Role Propagation process was launched. | [optional] 
**launched_by** | [**RolePropagationStatusResponseLaunchedBy**](role-propagation-status-response-launched-by) |  | [optional] 
**terminated_by** | [**RolePropagationStatusResponseTerminatedBy**](role-propagation-status-response-terminated-by) |  | [optional] 
**completed** | **datetime** | Time when the Role Propagation process was completed. | [optional] 
**failure_reason** | **str** | Reason for failure if the Role Propagation process failed. | [optional] 
**skip_role_refresh** | **bool** | Indicates if the role refresh was skipped during the Role Propagation process. | [optional] [default to False]
}

## Example

```python
from sailpoint.role_propagation.models.role_propagation_ongoing_response_role_propagation_details import RolePropagationOngoingResponseRolePropagationDetails

role_propagation_ongoing_response_role_propagation_details = RolePropagationOngoingResponseRolePropagationDetails(
id='47b9fb02-e12e-42ba-8bfe-1860d78c88eb',
status='RUNNING',
execution_stage='PENDING',
launched='2023-10-01T12:00Z',
launched_by=sailpoint.role_propagation.models.role_propagation_status_response_launched_by.role_propagation_status_response_launchedBy(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', ),
terminated_by=sailpoint.role_propagation.models.role_propagation_status_response_terminated_by.role_propagation_status_response_terminatedBy(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20648', 
                    name = 'William Wilson', ),
completed='2023-10-01T12:30Z',
failure_reason='Network error',
skip_role_refresh=False
)

```
[[Back to top]](#) 

