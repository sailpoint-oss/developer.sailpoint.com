---
id: v2025-approval-comment1
title: ApprovalComment1
pagination_label: ApprovalComment1
sidebar_label: ApprovalComment1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalComment1', 'V2025ApprovalComment1'] 
slug: /tools/sdk/python/v2025/models/approval-comment1
tags: ['SDK', 'Software Development Kit', 'ApprovalComment1', 'V2025ApprovalComment1']
---

# ApprovalComment1

Comments Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**ApprovalIdentity**](approval-identity) |  | [optional] 
**comment** | **str** | Comment to be left on an approval | [optional] 
**created_date** | **str** | Date the comment was created | [optional] 
**comment_id** | **str** | ID of the comment | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_comment1 import ApprovalComment1

approval_comment1 = ApprovalComment1(
author=sailpoint.v2025.models.approval_identity.Approval Identity(
                    email = 'mail@mail.com', 
                    identity_id = '17e633e7d57e481569df76323169deb6a', 
                    members = [
                        sailpoint.v2025.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                            email = 'mail@mail.com', 
                            id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Bob Neil', 
                            type = 'IDENTITY', )
                        ], 
                    name = 'Jim Bob', 
                    owner_of = [
                        sailpoint.v2025.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                            id = 'string', 
                            name = 'Access Request App', 
                            type = 'APPLICATION', )
                        ], 
                    serial_order = 0, 
                    type = 'IDENTITY', ),
comment='Looks good',
created_date='2023-04-12T23:20:50.52Z',
comment_id='38453251-6be2-5f8f-df93-5ce19e295837'
)

```
[[Back to top]](#) 

