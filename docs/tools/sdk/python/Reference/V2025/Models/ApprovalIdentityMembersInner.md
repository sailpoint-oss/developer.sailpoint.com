---
id: v2025-approval-identity-members-inner
title: ApprovalIdentityMembersInner
pagination_label: ApprovalIdentityMembersInner
sidebar_label: ApprovalIdentityMembersInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalIdentityMembersInner', 'V2025ApprovalIdentityMembersInner'] 
slug: /tools/sdk/python/v2025/models/approval-identity-members-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentityMembersInner', 'V2025ApprovalIdentityMembersInner']
---

# ApprovalIdentityMembersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email of the member. | [optional] 
**id** | **str** | ID of the member. | [optional] 
**name** | **str** | Name of the member. | [optional] 
**type** | **str** | Type of the member. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_identity_members_inner import ApprovalIdentityMembersInner

approval_identity_members_inner = ApprovalIdentityMembersInner(
email='mail@mail.com',
id='17e633e7d57e481569df76323169deb6a',
name='Bob Neil',
type='IDENTITY'
)

```
[[Back to top]](#) 

