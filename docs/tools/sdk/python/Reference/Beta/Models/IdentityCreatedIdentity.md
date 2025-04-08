---
id: beta-identity-created-identity
title: IdentityCreatedIdentity
pagination_label: IdentityCreatedIdentity
sidebar_label: IdentityCreatedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityCreatedIdentity', 'BetaIdentityCreatedIdentity'] 
slug: /tools/sdk/python/beta/models/identity-created-identity
tags: ['SDK', 'Software Development Kit', 'IdentityCreatedIdentity', 'BetaIdentityCreatedIdentity']
---

# IdentityCreatedIdentity

Created identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Identity's DTO type. | [required]
**id** | **str** | Identity's unique ID. | [required]
**name** | **str** | Identity's name. | [required]
}

## Example

```python
from sailpoint.beta.models.identity_created_identity import IdentityCreatedIdentity

identity_created_identity = IdentityCreatedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

