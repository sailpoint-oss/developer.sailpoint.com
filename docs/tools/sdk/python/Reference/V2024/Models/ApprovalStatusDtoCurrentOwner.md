---
id: v2024-approval-status-dto-current-owner
title: ApprovalStatusDtoCurrentOwner
pagination_label: ApprovalStatusDtoCurrentOwner
sidebar_label: ApprovalStatusDtoCurrentOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalStatusDtoCurrentOwner', 'V2024ApprovalStatusDtoCurrentOwner'] 
slug: /tools/sdk/python/v2024/models/approval-status-dto-current-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDtoCurrentOwner', 'V2024ApprovalStatusDtoCurrentOwner']
---

# ApprovalStatusDtoCurrentOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity who reviewed the access item request. | [optional] 
**id** | **str** | ID of identity who reviewed the access item request. | [optional] 
**name** | **str** | Human-readable display name of identity who reviewed the access item request. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.approval_status_dto_current_owner import ApprovalStatusDtoCurrentOwner

approval_status_dto_current_owner = ApprovalStatusDtoCurrentOwner(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

