---
id: v2024-access-item-requested-for
title: AccessItemRequestedFor
pagination_label: AccessItemRequestedFor
sidebar_label: AccessItemRequestedFor
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemRequestedFor', 'V2024AccessItemRequestedFor'] 
slug: /tools/sdk/python/v2024/models/access-item-requested-for
tags: ['SDK', 'Software Development Kit', 'AccessItemRequestedFor', 'V2024AccessItemRequestedFor']
---

# AccessItemRequestedFor

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
from sailpoint.v2024.models.access_item_requested_for import AccessItemRequestedFor

access_item_requested_for = AccessItemRequestedFor(
type='IDENTITY',
id='2c4180a46faadee4016fb4e018c20626',
name='Robert Robinson'
)

```
[[Back to top]](#) 

