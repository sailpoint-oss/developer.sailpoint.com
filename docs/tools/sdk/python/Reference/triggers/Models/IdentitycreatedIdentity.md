---
id: identitycreated-identity
title: IdentitycreatedIdentity
pagination_label: IdentitycreatedIdentity
sidebar_label: IdentitycreatedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentitycreatedIdentity', 'IdentitycreatedIdentity'] 
slug: /tools/sdk/python/triggers/models/identitycreated-identity
tags: ['SDK', 'Software Development Kit', 'IdentitycreatedIdentity', 'IdentitycreatedIdentity']
---

# IdentitycreatedIdentity

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
from sailpoint.triggers.models.identitycreated_identity import IdentitycreatedIdentity

identitycreated_identity = IdentitycreatedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

