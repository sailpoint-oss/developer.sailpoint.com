# RolepropagationstatusresponseTerminatedBy

# RolepropagationstatusresponseTerminatedBy

Identity who terminated the Role Propagation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the Identity who terminated the Role Propagation process. | [optional] 
**id** | **str** | ID of the Identity who terminated the Role Propagation process. | [optional] 
**name** | **str** | Name of the Identity who terminated the Role Propagation process. | [optional] 
\}

## Example

```python
from sailpoint.role_propagation.models.rolepropagationstatusresponse_terminated_by import RolepropagationstatusresponseTerminatedBy

rolepropagationstatusresponse_terminated_by = RolepropagationstatusresponseTerminatedBy(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 

