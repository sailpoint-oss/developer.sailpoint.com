---
id: v2024-approval-reference
title: ApprovalReference
pagination_label: ApprovalReference
sidebar_label: ApprovalReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalReference', 'V2024ApprovalReference'] 
slug: /tools/sdk/python/v2024/models/approval-reference
tags: ['SDK', 'Software Development Kit', 'ApprovalReference', 'V2024ApprovalReference']
---

# ApprovalReference

Reference objects related to the approval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the reference object | [optional] 
**type** | **str** | What reference object does this ID correspond to | [optional] 
}

## Example

```python
from sailpoint.v2024.models.approval_reference import ApprovalReference

approval_reference = ApprovalReference(
id='64012350-8fd9-4f6c-a170-1fe123683899',
type='AccessRequestId'
)

```
[[Back to top]](#) 

