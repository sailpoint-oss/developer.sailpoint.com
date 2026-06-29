---
id: approvalidentity
title: Approvalidentity
pagination_label: Approvalidentity
sidebar_label: Approvalidentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvalidentity', 'Approvalidentity'] 
slug: /tools/sdk/python/approvals/models/approvalidentity
tags: ['SDK', 'Software Development Kit', 'Approvalidentity', 'Approvalidentity']
---

# Approvalidentity

Approval Identity Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Email address. | [optional] 
**identity_id** | **str** | Identity ID of the type of identity defined in the 'type' field. | [optional] 
**members** | [**[]ApprovalidentityMembersInner**](approvalidentity-members-inner) | List of members of a governance group. Will be omitted if the identity is not a governance group. | [optional] 
**name** | **str** | Name of the identity. | [optional] 
**owner_of** | [**[]ApprovalidentityOwnerOfInner**](approvalidentity-owner-of-inner) | List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything. | [optional] 
**serial_order** | **int** | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
**type** |  **Enum** [  'IDENTITY',    'GOVERNANCE_GROUP',    'MANAGER_OF',    'ACCOUNT_OWNER',    'MACHINE_ACCOUNT_OWNER',    'MACHINE_IDENTITY_OWNER',    'MANAGER_OF_REQUESTED_TARGET_OWNER',    'MANAGER_OF_MACHINE_IDENTITY_OWNER',    'MANAGER_OF_ACCOUNT_OWNER',    'MANAGER_OF_MACHINE_ACCOUNT_OWNER',    'MANAGER_OF_REQUESTER',    'MANAGER_OF_REQUESTER_OWNER',    'MANAGER_OF_OWNER',    'ACCESS_PROFILE_OWNER',    'APPLICATION_OWNER',    'ENTITLEMENT_OWNER',    'ROLE_OWNER',    'SOURCE_OWNER',    'REQUESTED_TARGET_OWNER',    'ACCESS_PROFILE_PRIMARY_OWNER',    'APPLICATION_PRIMARY_OWNER',    'ENTITLEMENT_PRIMARY_OWNER',    'ROLE_PRIMARY_OWNER',    'SOURCE_PRIMARY_OWNER',    'REQUESTED_TARGET_PRIMARY_OWNER',    'ACCESS_PROFILE_SECONDARY_OWNER_GROUP',    'APPLICATION_SECONDARY_OWNER_GROUP',    'ENTITLEMENT_SECONDARY_OWNER_GROUP',    'ROLE_SECONDARY_OWNER_GROUP',    'SOURCE_SECONDARY_OWNER_GROUP',    'REQUESTED_TARGET_SECONDARY_OWNER_GROUP',    'ACCESS_PROFILE_ALL_OWNER_GROUP',    'APPLICATION_ALL_OWNER_GROUP',    'ENTITLEMENT_ALL_OWNER_GROUP',    'ROLE_ALL_OWNER_GROUP',    'SOURCE_ALL_OWNER_GROUP',    'REQUESTED_TARGET_ALL_OWNER_GROUP' ] | Type of identityID. | [optional] 
}

## Example

```python
from sailpoint.approvals.models.approvalidentity import Approvalidentity

approvalidentity = Approvalidentity(
email='mail@mail.com',
identity_id='17e633e7d57e481569df76323169deb6a',
members=[
                    sailpoint.approvals.models.approvalidentity_members_inner.approvalidentity_members_inner(
                        email = 'mail@mail.com', 
                        id = '17e633e7d57e481569df76323169deb6a', 
                        name = 'Bob Neil', 
                        type = 'IDENTITY', )
                    ],
name='Jim Bob',
owner_of=[
                    sailpoint.approvals.models.approvalidentity_owner_of_inner.approvalidentity_ownerOf_inner(
                        id = 'string', 
                        name = 'Access Request App', 
                        type = 'APPLICATION', )
                    ],
serial_order=0,
type='IDENTITY'
)

```
[[Back to top]](#) 

