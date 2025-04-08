---
id: beta-approval-reference
title: ApprovalReference
pagination_label: ApprovalReference
sidebar_label: ApprovalReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalReference', 'BetaApprovalReference'] 
slug: /tools/sdk/python/beta/models/approval-reference
tags: ['SDK', 'Software Development Kit', 'ApprovalReference', 'BetaApprovalReference']
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
from sailpoint.beta.models.approval_reference import ApprovalReference

approval_reference = ApprovalReference(
id='64012350-8fd9-4f6c-a170-1fe123683899',
type='AccessRequestId'
)

```
[[Back to top]](#) 

