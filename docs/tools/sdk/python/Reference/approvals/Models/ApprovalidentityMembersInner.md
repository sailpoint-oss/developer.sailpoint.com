---
id: approvalidentity-members-inner
title: ApprovalidentityMembersInner
pagination_label: ApprovalidentityMembersInner
sidebar_label: ApprovalidentityMembersInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalidentityMembersInner', 'ApprovalidentityMembersInner'] 
slug: /tools/sdk/python/approvals/models/approvalidentity-members-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalidentityMembersInner', 'ApprovalidentityMembersInner']
---

# ApprovalidentityMembersInner


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
from sailpoint.approvals.models.approvalidentity_members_inner import ApprovalidentityMembersInner

approvalidentity_members_inner = ApprovalidentityMembersInner(
email='mail@mail.com',
id='17e633e7d57e481569df76323169deb6a',
name='Bob Neil',
type='IDENTITY'
)

```
[[Back to top]](#) 

