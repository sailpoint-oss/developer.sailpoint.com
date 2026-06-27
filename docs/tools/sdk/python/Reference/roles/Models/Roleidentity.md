---
id: roleidentity
title: Roleidentity
pagination_label: Roleidentity
sidebar_label: Roleidentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Roleidentity', 'Roleidentity'] 
slug: /tools/sdk/python/roles/models/roleidentity
tags: ['SDK', 'Software Development Kit', 'Roleidentity', 'Roleidentity']
---

# Roleidentity

A subset of the fields of an Identity which is a member of a Role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the Identity | [optional] 
**alias_name** | **str** | The alias / username of the Identity | [optional] 
**name** | **str** | The human-readable display name of the Identity | [optional] 
**email** | **str** | Email address of the Identity | [optional] 
**role_assignment_source** | [**Roleassignmentsourcetype**](roleassignmentsourcetype) |  | [optional] 
}

## Example

```python
from sailpoint.roles.models.roleidentity import Roleidentity

roleidentity = Roleidentity(
id='2c9180a46faadee4016fb4e018c20639',
alias_name='t.edison',
name='Thomas Edison',
email='t.edison@identitynow.com',
role_assignment_source='ACCESS_REQUEST'
)

```
[[Back to top]](#) 

