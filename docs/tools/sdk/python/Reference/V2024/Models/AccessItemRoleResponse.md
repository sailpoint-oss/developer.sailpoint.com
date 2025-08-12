---
id: v2024-access-item-role-response
title: AccessItemRoleResponse
pagination_label: AccessItemRoleResponse
sidebar_label: AccessItemRoleResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemRoleResponse', 'V2024AccessItemRoleResponse'] 
slug: /tools/sdk/python/v2024/models/access-item-role-response
tags: ['SDK', 'Software Development Kit', 'AccessItemRoleResponse', 'V2024AccessItemRoleResponse']
---

# AccessItemRoleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | the access item id | [optional] 
**access_type** | **str** | the access item type. role in this case | [optional] 
**display_name** | **str** | the role display name | [optional] 
**source_name** | **str** | the associated source name if it exists | [optional] 
**description** | **str** | the description for the role | [optional] 
**remove_date** | **str** | the date the role is no longer assigned to the specified identity | [optional] 
**revocable** | **bool** | indicates whether the role is revocable | [required]
}

## Example

```python
from sailpoint.v2024.models.access_item_role_response import AccessItemRoleResponse

access_item_role_response = AccessItemRoleResponse(
id='2c918087763e69d901763e72e97f006f',
access_type='role',
display_name='sample',
source_name='Source Name',
description='Role - Workday/Citizenship access',
remove_date='2024-07-01T06:00:00.00Z',
revocable=True
)

```
[[Back to top]](#) 

