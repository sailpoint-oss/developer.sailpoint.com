---
id: identityreference
title: Identityreference
pagination_label: Identityreference
sidebar_label: Identityreference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityreference', 'Identityreference'] 
slug: /tools/sdk/python/public-identities-config/models/identityreference
tags: ['SDK', 'Software Development Kit', 'Identityreference', 'Identityreference']
---

# Identityreference

The manager for the identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Dtotype**](dtotype) |  | [optional] 
**id** | **str** | Identity id | [optional] 
**name** | **str** | Human-readable display name of identity. | [optional] 
}

## Example

```python
from sailpoint.public_identities_config.models.identityreference import Identityreference

identityreference = Identityreference(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Thomas Edison'
)

```
[[Back to top]](#) 

