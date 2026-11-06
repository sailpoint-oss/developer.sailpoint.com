# ViolationOwnerAssignmentConfigOwnerRef

# ViolationOwnerAssignmentConfigOwnerRef

The owner of the violation assignment config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP',    'MANAGER' ] | Owner type. | [optional] 
**id** | **str** | Owner's ID. | [optional] 
**name** | **str** | Owner's name. | [optional] 
\}

## Example

```python
from sailpoint.sod_policies.models.violation_owner_assignment_config_owner_ref import ViolationOwnerAssignmentConfigOwnerRef

violation_owner_assignment_config_owner_ref = ViolationOwnerAssignmentConfigOwnerRef(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 

