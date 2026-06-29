---
id: role-propagation-ongoing-response
title: RolePropagationOngoingResponse
pagination_label: RolePropagationOngoingResponse
sidebar_label: RolePropagationOngoingResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RolePropagationOngoingResponse', 'RolePropagationOngoingResponse'] 
slug: /tools/sdk/python/role-propagation/models/role-propagation-ongoing-response
tags: ['SDK', 'Software Development Kit', 'RolePropagationOngoingResponse', 'RolePropagationOngoingResponse']
---

# RolePropagationOngoingResponse

Running Role Propagation Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_running** | **bool** | Indicates if the role propagation process is currently running on the tenant | [optional] [default to False]
**role_propagation_details** | [**RolePropagationOngoingResponseRolePropagationDetails**](role-propagation-ongoing-response-role-propagation-details) |  | [optional] 
}

## Example

```python
from sailpoint.role_propagation.models.role_propagation_ongoing_response import RolePropagationOngoingResponse

role_propagation_ongoing_response = RolePropagationOngoingResponse(
is_running=True,
role_propagation_details=sailpoint.role_propagation.models.role_propagation_ongoing_response_role_propagation_details.role_propagation_ongoing_response_rolePropagationDetails(
                    id = '47b9fb02-e12e-42ba-8bfe-1860d78c88eb', 
                    status = 'RUNNING', 
                    execution_stage = 'PENDING', 
                    launched = '2023-10-01T12:00Z', 
                    launched_by = sailpoint.role_propagation.models.role_propagation_status_response_launched_by.role_propagation_status_response_launchedBy(
                        type = 'IDENTITY', 
                        id = '2c7180a46faadee4016fb4e018c20648', 
                        name = 'William Wilson', ), 
                    terminated_by = sailpoint.role_propagation.models.role_propagation_status_response_terminated_by.role_propagation_status_response_terminatedBy(
                        type = 'IDENTITY', 
                        id = '2c7180a46faadee4016fb4e018c20648', 
                        name = 'William Wilson', ), 
                    completed = '2023-10-01T12:30Z', 
                    failure_reason = 'Network error', 
                    skip_role_refresh = False, )
)

```
[[Back to top]](#) 

