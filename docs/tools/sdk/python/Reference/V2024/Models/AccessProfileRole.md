---
id: v2024-access-profile-role
title: AccessProfileRole
pagination_label: AccessProfileRole
sidebar_label: AccessProfileRole
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileRole', 'V2024AccessProfileRole'] 
slug: /tools/sdk/python/v2024/models/access-profile-role
tags: ['SDK', 'Software Development Kit', 'AccessProfileRole', 'V2024AccessProfileRole']
---

# AccessProfileRole

Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the referenced object. | [optional] 
**name** | **str** | The human readable name of the referenced object. | [optional] 
**display_name** | **str** |  | [optional] 
**type** | [**DtoType**](dto-type) |  | [optional] 
**description** | **str** |  | [optional] 
**owner** | [**DisplayReference**](display-reference) |  | [optional] 
**disabled** | **bool** |  | [optional] 
**revocable** | **bool** |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_profile_role import AccessProfileRole

access_profile_role = AccessProfileRole(
id='2c91808568c529c60168cca6f90c1313',
name='John Doe',
display_name='John Q. Doe',
type='IDENTITY',
description='',
owner=,
disabled=True,
revocable=True
)

```
[[Back to top]](#) 

