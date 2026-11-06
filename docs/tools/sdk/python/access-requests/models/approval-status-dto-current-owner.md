# ApprovalStatusDtoCurrentOwner

# ApprovalStatusDtoCurrentOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who reviewed the access item request. | [optional] 
**id** | **str** | ID of identity who reviewed the access item request. | [optional] 
**name** | **str** | Human-readable display name of identity who reviewed the access item request. | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.approval_status_dto_current_owner import ApprovalStatusDtoCurrentOwner

approval_status_dto_current_owner = ApprovalStatusDtoCurrentOwner(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

