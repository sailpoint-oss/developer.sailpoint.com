---
id: beta-identity-attributes-changed-identity
title: IdentityAttributesChangedIdentity
pagination_label: IdentityAttributesChangedIdentity
sidebar_label: IdentityAttributesChangedIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributesChangedIdentity', 'BetaIdentityAttributesChangedIdentity'] 
slug: /tools/sdk/python/beta/models/identity-attributes-changed-identity
tags: ['SDK', 'Software Development Kit', 'IdentityAttributesChangedIdentity', 'BetaIdentityAttributesChangedIdentity']
---

# IdentityAttributesChangedIdentity

Identity whose attributes changed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity whose attributes changed. | [required]
**id** | **str** | ID of identity whose attributes changed. | [required]
**name** | **str** | Name of identity whose attributes changed. | [required]
}

## Example

```python
from sailpoint.beta.models.identity_attributes_changed_identity import IdentityAttributesChangedIdentity

identity_attributes_changed_identity = IdentityAttributesChangedIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

