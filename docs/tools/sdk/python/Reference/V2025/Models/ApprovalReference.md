---
id: v2025-approval-reference
title: ApprovalReference
pagination_label: ApprovalReference
sidebar_label: ApprovalReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalReference', 'V2025ApprovalReference'] 
slug: /tools/sdk/python/v2025/models/approval-reference
tags: ['SDK', 'Software Development Kit', 'ApprovalReference', 'V2025ApprovalReference']
---

# ApprovalReference

Reference objects related to the approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the reference object | [optional] 
**type** | **str** | What reference object does this ID correspond to | [optional] 
**name** | **str** | Name of the reference object | [optional] 
**email** | **str** | Email associated with the reference object | [optional] 
**serial_order** | **int** | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_reference import ApprovalReference

approval_reference = ApprovalReference(
id='64012350-8fd9-4f6c-a170-1fe123683899',
type='AccessRequestId',
name='Access Request',
email='user@example.com',
serial_order=0
)

```
[[Back to top]](#) 

