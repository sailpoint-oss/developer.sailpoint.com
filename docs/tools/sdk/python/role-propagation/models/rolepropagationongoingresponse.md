# Rolepropagationongoingresponse

# Rolepropagationongoingresponse

Running Role Propagation Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_running** | **bool** | Indicates if the role propagation process is currently running on the tenant | [optional] [default to False]
**role_propagation_details** | [**RolepropagationongoingresponseRolePropagationDetails**](rolepropagationongoingresponse-role-propagation-details) |  | [optional] 
\}

## Example

```python
from sailpoint.role_propagation.models.rolepropagationongoingresponse import Rolepropagationongoingresponse

rolepropagationongoingresponse = Rolepropagationongoingresponse(
is_running=True,
role_propagation_details=sailpoint.role_propagation.models.rolepropagationongoingresponse_role_propagation_details.Rolepropagationongoingresponse_rolePropagationDetails(
                    id = '47b9fb02-e12e-42ba-8bfe-1860d78c88eb', 
                    status = 'RUNNING', 
                    execution_stage = 'PENDING', 
                    launched = '2023-10-01T12:00Z', 
                    launched_by = sailpoint.role_propagation.models.rolepropagationstatusresponse_launched_by.Rolepropagationstatusresponse_launchedBy(
                        type = 'IDENTITY', 
                        id = '2c7180a46faadee4016fb4e018c20648', 
                        name = 'William Wilson', ), 
                    terminated_by = sailpoint.role_propagation.models.rolepropagationstatusresponse_terminated_by.Rolepropagationstatusresponse_terminatedBy(
                        type = 'IDENTITY', 
                        id = '2c7180a46faadee4016fb4e018c20648', 
                        name = 'William Wilson', ), 
                    completed = '2023-10-01T12:30Z', 
                    failure_reason = 'Network error', 
                    skip_role_refresh = False, )
)

```
[[Back to top]](#) 

