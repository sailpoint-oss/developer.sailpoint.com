---
id: v2024-approval-comment2
title: ApprovalComment2
pagination_label: ApprovalComment2
sidebar_label: ApprovalComment2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalComment2', 'V2024ApprovalComment2'] 
slug: /tools/sdk/python/v2024/models/approval-comment2
tags: ['SDK', 'Software Development Kit', 'ApprovalComment2', 'V2024ApprovalComment2']
---

# ApprovalComment2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The comment text | [optional] 
**commenter** | **str** | The name of the commenter | [optional] 
**var_date** | **datetime** | A date-time in ISO-8601 format | [optional] 
}

## Example

```python
from sailpoint.v2024.models.approval_comment2 import ApprovalComment2

approval_comment2 = ApprovalComment2(
comment='This request was autoapproved by our automated ETS subscriber.',
commenter='Automated AR Approval',
var_date='2018-06-25T20:22:28.104Z'
)

```
[[Back to top]](#) 

