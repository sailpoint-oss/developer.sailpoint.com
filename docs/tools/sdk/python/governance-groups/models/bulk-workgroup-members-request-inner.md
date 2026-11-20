# BulkWorkgroupMembersRequestInner

# BulkWorkgroupMembersRequestInner

Identity's basic details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Identity's DTO type. | [optional] 
**id** | **str** | Identity ID. | [optional] 
**name** | **str** | Identity's display name. | [optional] 
\}

## Example

```python
from sailpoint.governance_groups.models.bulk_workgroup_members_request_inner import BulkWorkgroupMembersRequestInner

bulk_workgroup_members_request_inner = BulkWorkgroupMembersRequestInner(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

