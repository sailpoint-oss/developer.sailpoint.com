---
id: v2024-access-item-reviewed-by
title: AccessItemReviewedBy
pagination_label: AccessItemReviewedBy
sidebar_label: AccessItemReviewedBy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemReviewedBy', 'V2024AccessItemReviewedBy'] 
slug: /tools/sdk/python/v2024/models/access-item-reviewed-by
tags: ['SDK', 'Software Development Kit', 'AccessItemReviewedBy', 'V2024AccessItemReviewedBy']
---

# AccessItemReviewedBy

Identity who reviewed the access item request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who reviewed the access item request. | [optional] 
**id** | **str** | ID of identity who reviewed the access item request. | [optional] 
**name** | **str** | Human-readable display name of identity who reviewed the access item request. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.access_item_reviewed_by import AccessItemReviewedBy

access_item_reviewed_by = AccessItemReviewedBy(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

