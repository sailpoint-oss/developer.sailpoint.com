# AccessItemRoleResponse

# AccessItemRoleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the access item id | [optional] 
**access_type** | **str** | the access item type. role in this case | [optional] 
**display_name** | **str** | the role display name | [optional] 
**source_name** | **str** | the associated source name if it exists | [optional] 
**description** | **str** | the description for the role | [optional] 
**start_date** | **str** | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [optional] 
**remove_date** | **str** | the date the role is no longer assigned to the specified identity | [optional] 
**revocable** | **bool** | indicates whether the role is revocable | [required]
\}

## Example

```python
from sailpoint.identity_history.models.access_item_role_response import AccessItemRoleResponse

access_item_role_response = AccessItemRoleResponse(
id='2c918087763e69d901763e72e97f006f',
access_type='role',
display_name='sample',
source_name='Source Name',
description='Role - Workday/Citizenship access',
start_date='2024-07-01T05:00:00.00Z',
remove_date='2024-07-01T06:00:00.00Z',
revocable=True
)

```
[[Back to top]](#) 

