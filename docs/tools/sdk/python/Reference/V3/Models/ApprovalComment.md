---
id: approval-comment
title: ApprovalComment
pagination_label: ApprovalComment
sidebar_label: ApprovalComment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalComment', 'ApprovalComment'] 
slug: /tools/sdk/python/v3/models/approval-comment
tags: ['SDK', 'Software Development Kit', 'ApprovalComment', 'ApprovalComment']
---

# ApprovalComment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The comment text | [optional] 
**commenter** | **str** | The name of the commenter | [optional] 
**var_date** | **datetime** | A date-time in ISO-8601 format | [optional] 
}

## Example

```python
from sailpoint.v3.models.approval_comment import ApprovalComment

approval_comment = ApprovalComment(
comment='This request was autoapproved by our automated ETS subscriber.',
commenter='Automated AR Approval',
var_date='2018-06-25T20:22:28.104Z'
)

```
[[Back to top]](#) 

