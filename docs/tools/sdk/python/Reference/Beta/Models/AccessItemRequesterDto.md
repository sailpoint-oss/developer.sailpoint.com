---
id: beta-access-item-requester-dto
title: AccessItemRequesterDto
pagination_label: AccessItemRequesterDto
sidebar_label: AccessItemRequesterDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemRequesterDto', 'BetaAccessItemRequesterDto'] 
slug: /tools/sdk/python/beta/models/access-item-requester-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemRequesterDto', 'BetaAccessItemRequesterDto']
---

# AccessItemRequesterDto

Access item requester's identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Access item requester's DTO type. | [optional] 
**id** | **str** | Access item requester's identity ID. | [optional] 
**name** | **str** | Access item owner's human-readable display name. | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_item_requester_dto import AccessItemRequesterDto

access_item_requester_dto = AccessItemRequesterDto(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20648',
name='William Wilson'
)

```
[[Back to top]](#) 

