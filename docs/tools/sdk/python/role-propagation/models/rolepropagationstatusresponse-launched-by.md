# RolepropagationstatusresponseLaunchedBy

# RolepropagationstatusresponseLaunchedBy

Identity who launched the Role Propagation process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the identity who launched the Role Propagation process. | [optional] 
**id** | **str** | ID of the identity who launched the Role Propagation process. | [optional] 
**name** | **str** | Name of the identity who launched the Role Propagation process. | [optional] 
\}

## Example

```python
from sailpoint.role_propagation.models.rolepropagationstatusresponse_launched_by import RolepropagationstatusresponseLaunchedBy

rolepropagationstatusresponse_launched_by = RolepropagationstatusresponseLaunchedBy(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 

