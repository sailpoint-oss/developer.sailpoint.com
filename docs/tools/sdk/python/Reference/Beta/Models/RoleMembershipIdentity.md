---
id: beta-role-membership-identity
title: RoleMembershipIdentity
pagination_label: RoleMembershipIdentity
sidebar_label: RoleMembershipIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleMembershipIdentity', 'BetaRoleMembershipIdentity'] 
slug: /tools/sdk/python/beta/models/role-membership-identity
tags: ['SDK', 'Software Development Kit', 'RoleMembershipIdentity', 'BetaRoleMembershipIdentity']
---

# RoleMembershipIdentity

A reference to an Identity in an IDENTITY_LIST role membership criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DtoType**](dto-type) |  | [optional] 
**id** | **str** | Identity id | [optional] 
**name** | **str** | Human-readable display name of the Identity. | [optional] 
**alias_name** | **str** | User name of the Identity | [optional] 
}

## Example

```python
from sailpoint.beta.models.role_membership_identity import RoleMembershipIdentity

role_membership_identity = RoleMembershipIdentity(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Thomas Edison',
alias_name='t.edison'
)

```
[[Back to top]](#) 

