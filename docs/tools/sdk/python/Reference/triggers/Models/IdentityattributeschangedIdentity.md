---
id: identityattributeschanged-identity
title: IdentityattributeschangedIdentity
pagination_label: IdentityattributeschangedIdentity
sidebar_label: IdentityattributeschangedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityattributeschangedIdentity', 'IdentityattributeschangedIdentity'] 
slug: /tools/sdk/python/triggers/models/identityattributeschanged-identity
tags: ['SDK', 'Software Development Kit', 'IdentityattributeschangedIdentity', 'IdentityattributeschangedIdentity']
---

# IdentityattributeschangedIdentity

Identity whose attributes changed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity whose attributes changed. | [required]
**id** | **str** | ID of identity whose attributes changed. | [required]
**name** | **str** | Display name of identity whose attributes changed. | [required]
}

## Example

```python
from sailpoint.triggers.models.identityattributeschanged_identity import IdentityattributeschangedIdentity

identityattributeschanged_identity = IdentityattributeschangedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

