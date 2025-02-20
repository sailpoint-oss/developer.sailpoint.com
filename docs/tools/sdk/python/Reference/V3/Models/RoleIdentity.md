---
id: role-identity
title: RoleIdentity
pagination_label: RoleIdentity
sidebar_label: RoleIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'RoleIdentity', 'RoleIdentity'] 
slug: /tools/sdk/python/v3/models/role-identity
tags: ['SDK', 'Software Development Kit', 'RoleIdentity', 'RoleIdentity']
---

# RoleIdentity

A subset of the fields of an Identity which is a member of a Role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the Identity | [optional] 
**alias_name** | **str** | The alias / username of the Identity | [optional] 
**name** | **str** | The human-readable display name of the Identity | [optional] 
**email** | **str** | Email address of the Identity | [optional] 
**role_assignment_source** | [**RoleAssignmentSourceType**](role-assignment-source-type) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.role_identity import RoleIdentity

role_identity = RoleIdentity(
id='2c9180a46faadee4016fb4e018c20639',
alias_name='t.edison',
name='Thomas Edison',
email='t.edison@identitynow.com',
role_assignment_source='ACCESS_REQUEST'
)

```
[[Back to top]](#) 

