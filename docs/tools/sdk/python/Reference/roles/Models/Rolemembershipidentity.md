---
id: rolemembershipidentity
title: Rolemembershipidentity
pagination_label: Rolemembershipidentity
sidebar_label: Rolemembershipidentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Rolemembershipidentity', 'Rolemembershipidentity'] 
slug: /tools/sdk/python/roles/models/rolemembershipidentity
tags: ['SDK', 'Software Development Kit', 'Rolemembershipidentity', 'Rolemembershipidentity']
---

# Rolemembershipidentity

A reference to an Identity in an IDENTITY_LIST role membership criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | Identity id | [optional] 
**name** | **str** | Human-readable display name of the Identity. | [optional] 
**alias_name** | **str** | User name of the Identity | [optional] 
}

## Example

```python
from sailpoint.roles.models.rolemembershipidentity import Rolemembershipidentity

rolemembershipidentity = Rolemembershipidentity(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Thomas Edison',
alias_name='t.edison'
)

```
[[Back to top]](#) 

