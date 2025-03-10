---
id: beta-access-item-owner-dto
title: AccessItemOwnerDto
pagination_label: AccessItemOwnerDto
sidebar_label: AccessItemOwnerDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemOwnerDto', 'BetaAccessItemOwnerDto'] 
slug: /tools/sdk/python/beta/models/access-item-owner-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemOwnerDto', 'BetaAccessItemOwnerDto']
---

# AccessItemOwnerDto

Access item owner's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Access item owner's DTO type. | [optional] 
**id** | **str** | Access item owner's identity ID. | [optional] 
**name** | **str** | Access item owner's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_item_owner_dto import AccessItemOwnerDto

access_item_owner_dto = AccessItemOwnerDto(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Support'
)

```
[[Back to top]](#) 

