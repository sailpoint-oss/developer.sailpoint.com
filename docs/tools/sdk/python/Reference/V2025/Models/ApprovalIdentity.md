---
id: v2025-approval-identity
title: ApprovalIdentity
pagination_label: ApprovalIdentity
sidebar_label: ApprovalIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ApprovalIdentity', 'V2025ApprovalIdentity'] 
slug: /tools/sdk/python/v2025/models/approval-identity
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentity', 'V2025ApprovalIdentity']
---

# ApprovalIdentity

Approval Identity Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. | [optional] 
**identity_id** | **str** | Identity ID. | [optional] 
**members** | [**[]ApprovalIdentityMembersInner**](approval-identity-members-inner) | List of members of a governance group. Will be omitted if the identity is not a governance group. | [optional] 
**name** | **str** | Name of the identity. | [optional] 
**owner_of** | [**[]ApprovalIdentityOwnerOfInner**](approval-identity-owner-of-inner) | List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything. | [optional] 
**serial_order** | **int** | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
**type** |  **Enum** [  'IDENTITY',    'MANAGER_OF',    'GOVERNANCE_GROUP',    'SOURCE_OWNER',    'ROLE_OWNER',    'ACCESS_PROFILE_OWNER',    'ENTITLEMENT_OWNER',    'APPLICATION_OWNER' ] | Type of identity. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.approval_identity import ApprovalIdentity

approval_identity = ApprovalIdentity(
email='mail@mail.com',
identity_id='17e633e7d57e481569df76323169deb6a',
members=[
                    sailpoint.v2025.models.approval_identity_members_inner.ApprovalIdentity_members_inner(
                        email = 'mail@mail.com', 
                        id = '17e633e7d57e481569df76323169deb6a', 
                        name = 'Bob Neil', 
                        type = 'IDENTITY', )
                    ],
name='Jim Bob',
owner_of=[
                    sailpoint.v2025.models.approval_identity_owner_of_inner.ApprovalIdentity_ownerOf_inner(
                        id = 'string', 
                        name = 'Access Request App', 
                        type = 'APPLICATION', )
                    ],
serial_order=0,
type='IDENTITY'
)

```
[[Back to top]](#) 

