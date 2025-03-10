---
id: beta-access-item-reviewed-by
title: AccessItemReviewedBy
pagination_label: AccessItemReviewedBy
sidebar_label: AccessItemReviewedBy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemReviewedBy', 'BetaAccessItemReviewedBy'] 
slug: /tools/sdk/python/beta/models/access-item-reviewed-by
tags: ['SDK', 'Software Development Kit', 'AccessItemReviewedBy', 'BetaAccessItemReviewedBy']
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
from sailpoint.beta.models.access_item_reviewed_by import AccessItemReviewedBy

access_item_reviewed_by = AccessItemReviewedBy(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

