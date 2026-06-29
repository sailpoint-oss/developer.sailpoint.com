---
id: identitydeleted-identity
title: IdentitydeletedIdentity
pagination_label: IdentitydeletedIdentity
sidebar_label: IdentitydeletedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentitydeletedIdentity', 'IdentitydeletedIdentity'] 
slug: /tools/sdk/python/triggers/models/identitydeleted-identity
tags: ['SDK', 'Software Development Kit', 'IdentitydeletedIdentity', 'IdentitydeletedIdentity']
---

# IdentitydeletedIdentity

Deleted identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Deleted identity's DTO type. | [required]
**id** | **str** | Deleted identity ID. | [required]
**name** | **str** | Deleted identity's display name. | [required]
}

## Example

```python
from sailpoint.triggers.models.identitydeleted_identity import IdentitydeletedIdentity

identitydeleted_identity = IdentitydeletedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

