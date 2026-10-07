# ManualWorkItemDetailsCurrentOwner

# ManualWorkItemDetailsCurrentOwner

Identity of current work item owner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'GOVERNANCE_GROUP',    'IDENTITY' ] | DTO type of current work item owner's identity. | [optional] 
**id** | **str** | ID of current work item owner's identity. | [optional] 
**name** | **str** | Display name of current work item owner. | [optional] 
\}

## Example

```python
from sailpoint.access_requests.models.manual_work_item_details_current_owner import ManualWorkItemDetailsCurrentOwner

manual_work_item_details_current_owner = ManualWorkItemDetailsCurrentOwner(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

