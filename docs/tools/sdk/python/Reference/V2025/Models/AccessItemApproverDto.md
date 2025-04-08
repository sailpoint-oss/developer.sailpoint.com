---
id: v2025-access-item-approver-dto
title: AccessItemApproverDto
pagination_label: AccessItemApproverDto
sidebar_label: AccessItemApproverDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemApproverDto', 'V2025AccessItemApproverDto'] 
slug: /tools/sdk/python/v2025/models/access-item-approver-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemApproverDto', 'V2025AccessItemApproverDto']
---

# AccessItemApproverDto

Identity who approved the access item request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who approved the access item request. | [optional] 
**id** | **str** | ID of identity who approved the access item request. | [optional] 
**name** | **str** | Human-readable display name of identity who approved the access item request. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.access_item_approver_dto import AccessItemApproverDto

access_item_approver_dto = AccessItemApproverDto(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

