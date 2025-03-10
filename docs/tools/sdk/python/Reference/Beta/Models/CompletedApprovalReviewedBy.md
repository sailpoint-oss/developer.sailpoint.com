---
id: beta-completed-approval-reviewed-by
title: CompletedApprovalReviewedBy
pagination_label: CompletedApprovalReviewedBy
sidebar_label: CompletedApprovalReviewedBy
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CompletedApprovalReviewedBy', 'BetaCompletedApprovalReviewedBy'] 
slug: /tools/sdk/python/beta/models/completed-approval-reviewed-by
tags: ['SDK', 'Software Development Kit', 'CompletedApprovalReviewedBy', 'BetaCompletedApprovalReviewedBy']
---

# CompletedApprovalReviewedBy

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
from sailpoint.beta.models.completed_approval_reviewed_by import CompletedApprovalReviewedBy

completed_approval_reviewed_by = CompletedApprovalReviewedBy(
type='IDENTITY',
id='2c3780a46faadee4016fb4e018c20652',
name='Allen Albertson'
)

```
[[Back to top]](#) 

