---
id: beta-access-item-approver-dto
title: AccessItemApproverDto
pagination_label: AccessItemApproverDto
sidebar_label: AccessItemApproverDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessItemApproverDto', 'BetaAccessItemApproverDto'] 
slug: /tools/sdk/python/beta/models/access-item-approver-dto
tags: ['SDK', 'Software Development Kit', 'AccessItemApproverDto', 'BetaAccessItemApproverDto']
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
from sailpoint.beta.models.access_item_approver_dto import AccessItemApproverDto

access_item_approver_dto = AccessItemApproverDto(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

