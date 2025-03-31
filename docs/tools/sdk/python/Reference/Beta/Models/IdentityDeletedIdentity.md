---
id: beta-identity-deleted-identity
title: IdentityDeletedIdentity
pagination_label: IdentityDeletedIdentity
sidebar_label: IdentityDeletedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityDeletedIdentity', 'BetaIdentityDeletedIdentity'] 
slug: /tools/sdk/python/beta/models/identity-deleted-identity
tags: ['SDK', 'Software Development Kit', 'IdentityDeletedIdentity', 'BetaIdentityDeletedIdentity']
---

# IdentityDeletedIdentity

Deleted identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Deleted identity's DTO type. | [required]
**id** | **str** | Deleted identity ID. | [required]
**name** | **str** | Deleted identity's name. | [required]
}

## Example

```python
from sailpoint.beta.models.identity_deleted_identity import IdentityDeletedIdentity

identity_deleted_identity = IdentityDeletedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

