---
id: v2025-approval-comment
title: ApprovalComment
pagination_label: ApprovalComment
sidebar_label: ApprovalComment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalComment', 'V2025ApprovalComment'] 
slug: /tools/sdk/python/v2025/models/approval-comment
tags: ['SDK', 'Software Development Kit', 'ApprovalComment', 'V2025ApprovalComment']
---

# ApprovalComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Comment provided either by the approval requester or the approver. | [required]
**timestamp** | **datetime** | The time when this comment was provided. | [required]
**user** | **str** | Name of the user that provided this comment. | [required]
**id** | **str** | Id of the user that provided this comment. | [required]
**changed_to_status** |  **Enum** [  'PENDING_APPROVAL',    'APPROVED',    'REJECTED' ] | Status transition of the draft. | [required]
}

## Example

```python
from sailpoint.v2025.models.approval_comment import ApprovalComment

approval_comment = ApprovalComment(
comment='Approval comment',
timestamp='2021-05-11T22:23:16Z',
user='user.name',
id='549bf881-1ac4-4a64-9acf-6014e8a3a887',
changed_to_status='PENDING_APPROVAL'
)

```
[[Back to top]](#) 

