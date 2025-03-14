---
id: beta-access-item-role-response
title: AccessItemRoleResponse
pagination_label: AccessItemRoleResponse
sidebar_label: AccessItemRoleResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemRoleResponse', 'BetaAccessItemRoleResponse'] 
slug: /tools/sdk/python/beta/models/access-item-role-response
tags: ['SDK', 'Software Development Kit', 'AccessItemRoleResponse', 'BetaAccessItemRoleResponse']
---

# AccessItemRoleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** | the access item type. role in this case | [optional] 
**id** | **str** | the access item id | [optional] 
**display_name** | **str** | the role display name | [optional] 
**description** | **str** | the description for the role | [optional] 
**source_name** | **str** | the associated source name if it exists | [optional] 
**remove_date** | **str** | the date the role is no longer assigned to the specified identity | [optional] 
**revocable** | **bool** | indicates whether the role is revocable | [required]
}

## Example

```python
from sailpoint.beta.models.access_item_role_response import AccessItemRoleResponse

access_item_role_response = AccessItemRoleResponse(
access_type='role',
id='2c918087763e69d901763e72e97f006f',
display_name='sample',
description='Role - Workday/Citizenship access',
source_name='Source Name',
remove_date='2024-07-01T06:00:00.00Z',
revocable=True
)

```
[[Back to top]](#) 

