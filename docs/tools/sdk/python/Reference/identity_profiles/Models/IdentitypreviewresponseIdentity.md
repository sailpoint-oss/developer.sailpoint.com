---
id: identitypreviewresponse-identity
title: IdentitypreviewresponseIdentity
pagination_label: IdentitypreviewresponseIdentity
sidebar_label: IdentitypreviewresponseIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentitypreviewresponseIdentity', 'IdentitypreviewresponseIdentity'] 
slug: /tools/sdk/python/identity-profiles/models/identitypreviewresponse-identity
tags: ['SDK', 'Software Development Kit', 'IdentitypreviewresponseIdentity', 'IdentitypreviewresponseIdentity']
---

# IdentitypreviewresponseIdentity

Identity's basic details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | Identity's DTO type. | [optional] 
**id** | **str** | Identity ID. | [optional] 
**name** | **str** | Identity's display name. | [optional] 
}

## Example

```python
from sailpoint.identity_profiles.models.identitypreviewresponse_identity import IdentitypreviewresponseIdentity

identitypreviewresponse_identity = IdentitypreviewresponseIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

