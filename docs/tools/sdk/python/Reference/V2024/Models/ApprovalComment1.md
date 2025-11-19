---
id: v2024-approval-comment1
title: ApprovalComment1
pagination_label: ApprovalComment1
sidebar_label: ApprovalComment1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalComment1', 'V2024ApprovalComment1'] 
slug: /tools/sdk/python/v2024/models/approval-comment1
tags: ['SDK', 'Software Development Kit', 'ApprovalComment1', 'V2024ApprovalComment1']
---

# ApprovalComment1

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
from sailpoint.v2024.models.approval_comment1 import ApprovalComment1

approval_comment1 = ApprovalComment1(
author=sailpoint.v2024.models.approval_identity.Approval Identity(
                    id = '85d173e7d57e496569df763231d6deb6a', 
                    type = 'IDENTITY', 
                    name = 'John Doe', ),
comment='Looks good',
created_date='2023-04-12T23:20:50.52Z'
)

```
[[Back to top]](#) 

