---
id: v2024-access-item-requested-for-dto
title: AccessItemRequestedForDto
pagination_label: AccessItemRequestedForDto
sidebar_label: AccessItemRequestedForDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemRequestedForDto', 'V2024AccessItemRequestedForDto'] 
slug: /tools/sdk/python/v2024/models/access-item-requested-for-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemRequestedForDto', 'V2024AccessItemRequestedForDto']
---

# AccessItemRequestedForDto

Identity the access item is requested for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity the access item is requested for. | [optional] 
**id** | **str** | ID of identity the access item is requested for. | [optional] 
**name** | **str** | Human-readable display name of identity the access item is requested for. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_item_requested_for_dto import AccessItemRequestedForDto

access_item_requested_for_dto = AccessItemRequestedForDto(
type='IDENTITY',
id='2c4180a46faadee4016fb4e018c20626',
name='Robert Robinson'
)

```
[[Back to top]](#) 

