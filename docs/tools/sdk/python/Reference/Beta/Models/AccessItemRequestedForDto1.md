---
id: beta-access-item-requested-for-dto1
title: AccessItemRequestedForDto1
pagination_label: AccessItemRequestedForDto1
sidebar_label: AccessItemRequestedForDto1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemRequestedForDto1', 'BetaAccessItemRequestedForDto1'] 
slug: /tools/sdk/python/beta/models/access-item-requested-for-dto1
tags: ['SDK', 'Software Development Kit', 'AccessItemRequestedForDto1', 'BetaAccessItemRequestedForDto1']
---

# AccessItemRequestedForDto1

Identity whom the access item is requested for.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of the identity whom the access item is requested for. | [optional] 
**id** | **str** | ID of the identity whom the access item is requested for. | [optional] 
**name** | **str** | Name of the identity whom the access item is requested for. | [optional] 
}

## Example

```python
from sailpoint.beta.models.access_item_requested_for_dto1 import AccessItemRequestedForDto1

access_item_requested_for_dto1 = AccessItemRequestedForDto1(
type='IDENTITY',
id='2c4180a46faadee4016fb4e018c20626',
name='Robert Robinson'
)

```
[[Back to top]](#) 

