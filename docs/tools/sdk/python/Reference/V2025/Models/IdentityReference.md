---
id: v2025-identity-reference
title: IdentityReference
pagination_label: IdentityReference
sidebar_label: IdentityReference
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityReference', 'V2025IdentityReference'] 
slug: /tools/sdk/python/v2025/models/identity-reference
tags: ['SDK', 'Software Development Kit', 'IdentityReference', 'V2025IdentityReference']
---

# IdentityReference

The manager for the identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**DtoType**](dto-type) |  | [optional] 
**id** | **str** | Identity id | [optional] 
**name** | **str** | Human-readable display name of identity. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.identity_reference import IdentityReference

identity_reference = IdentityReference(
type='IDENTITY',
id='2c9180a46faadee4016fb4e018c20639',
name='Thomas Edison'
)

```
[[Back to top]](#) 

