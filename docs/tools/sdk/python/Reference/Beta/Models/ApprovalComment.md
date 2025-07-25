---
id: beta-approval-comment
title: ApprovalComment
pagination_label: ApprovalComment
sidebar_label: ApprovalComment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalComment', 'BetaApprovalComment'] 
slug: /tools/sdk/python/beta/models/approval-comment
tags: ['SDK', 'Software Development Kit', 'ApprovalComment', 'BetaApprovalComment']
---

# ApprovalComment

Comments Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**ApprovalIdentity**](approval-identity) |  | [optional] 
**comment** | **str** | Comment to be left on an approval | [optional] 
**created_date** | **str** | Date the comment was created | [optional] 
}

## Example

```python
from sailpoint.beta.models.approval_comment import ApprovalComment

approval_comment = ApprovalComment(
author=sailpoint.beta.models.approval_identity.Approval Identity(
                    id = '85d173e7d57e496569df763231d6deb6a', 
                    type = 'IDENTITY', 
                    name = 'John Doe', ),
comment='Looks good',
created_date='2023-04-12T23:20:50.52Z'
)

```
[[Back to top]](#) 

