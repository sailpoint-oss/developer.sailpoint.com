---
id: approvalcomment3
title: Approvalcomment3
pagination_label: Approvalcomment3
sidebar_label: Approvalcomment3
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalcomment3', 'Approvalcomment3'] 
slug: /tools/sdk/python/approvals/models/approvalcomment3
tags: ['SDK', 'Software Development Kit', 'Approvalcomment3', 'Approvalcomment3']
---

# Approvalcomment3

Comments Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**Approvalidentity**](approvalidentity) |  | [optional] 
**comment** | **str** | Comment to be left on an approval | [optional] 
**created_date** | **str** | Date the comment was created | [optional] 
**comment_id** | **str** | ID of the comment | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalcomment3 import Approvalcomment3

approvalcomment3 = Approvalcomment3(
author=sailpoint.approvals.models.approval_identity.Approval Identity(
                    email = 'mail@mail.com', 
                    identity_id = '17e633e7d57e481569df76323169deb6a', 
                    members = [
                        sailpoint.approvals.models.approvalidentity_members_inner.approvalidentity_members_inner(
                            email = 'mail@mail.com', 
                            id = '17e633e7d57e481569df76323169deb6a', 
                            name = 'Bob Neil', 
                            type = 'IDENTITY', )
                        ], 
                    name = 'Jim Bob', 
                    owner_of = [
                        sailpoint.approvals.models.approvalidentity_owner_of_inner.approvalidentity_ownerOf_inner(
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

