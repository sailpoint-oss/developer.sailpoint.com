---
id: v2025-identity-created-identity
title: IdentityCreatedIdentity
pagination_label: IdentityCreatedIdentity
sidebar_label: IdentityCreatedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityCreatedIdentity', 'V2025IdentityCreatedIdentity'] 
slug: /tools/sdk/python/v2025/models/identity-created-identity
tags: ['SDK', 'Software Development Kit', 'IdentityCreatedIdentity', 'V2025IdentityCreatedIdentity']
---

# IdentityCreatedIdentity

Created identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Created identity's DTO type. | [required]
**id** | **str** | Created identity ID. | [required]
**name** | **str** | Created identity's display name. | [required]
}

## Example

```python
from sailpoint.v2025.models.identity_created_identity import IdentityCreatedIdentity

identity_created_identity = IdentityCreatedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

