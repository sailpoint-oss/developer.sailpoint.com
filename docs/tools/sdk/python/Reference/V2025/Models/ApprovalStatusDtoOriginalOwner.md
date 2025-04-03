---
id: v2025-approval-status-dto-original-owner
title: ApprovalStatusDtoOriginalOwner
pagination_label: ApprovalStatusDtoOriginalOwner
sidebar_label: ApprovalStatusDtoOriginalOwner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalStatusDtoOriginalOwner', 'V2025ApprovalStatusDtoOriginalOwner'] 
slug: /tools/sdk/python/v2025/models/approval-status-dto-original-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDtoOriginalOwner', 'V2025ApprovalStatusDtoOriginalOwner']
---

# ApprovalStatusDtoOriginalOwner

Identity of orginal approval owner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'GOVERNANCE_GROUP',    'IDENTITY' ] | DTO type of original approval owner's identity. | [optional] 
**id** | **str** | ID of original approval owner's identity. | [optional] 
**name** | **str** | Display name of original approval owner. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_status_dto_original_owner import ApprovalStatusDtoOriginalOwner

approval_status_dto_original_owner = ApprovalStatusDtoOriginalOwner(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

