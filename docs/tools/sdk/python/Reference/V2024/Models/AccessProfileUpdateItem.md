---
id: v2024-access-profile-update-item
title: AccessProfileUpdateItem
pagination_label: AccessProfileUpdateItem
sidebar_label: AccessProfileUpdateItem
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessProfileUpdateItem', 'V2024AccessProfileUpdateItem'] 
slug: /tools/sdk/python/v2024/models/access-profile-update-item
tags: ['SDK', 'Software Development Kit', 'AccessProfileUpdateItem', 'V2024AccessProfileUpdateItem']
---

# AccessProfileUpdateItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifier of Access Profile in bulk update request. | [required]
**requestable** | **bool** | Access Profile requestable or not. | [required]
**status** | **str** |  The HTTP response status code returned for an individual Access Profile that is requested for update during a bulk update operation.  > 201   - Access profile is updated successfully.  > 404   - Access profile not found.  | [required]
**description** | **str** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_profile_update_item import AccessProfileUpdateItem

access_profile_update_item = AccessProfileUpdateItem(
id='2c7180a46faadee4016fb4e018c20642',
requestable=False,
status='201',
description='
> Access profile is updated successfully.

> Referenced Access profile with Id "2c7180a46faadee4016fb4e018c20642" was not found.
'
)

```
[[Back to top]](#) 

