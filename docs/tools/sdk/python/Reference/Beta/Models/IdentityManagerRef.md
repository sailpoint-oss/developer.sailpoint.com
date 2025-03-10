---
id: beta-identity-manager-ref
title: IdentityManagerRef
pagination_label: IdentityManagerRef
sidebar_label: IdentityManagerRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityManagerRef', 'BetaIdentityManagerRef'] 
slug: /tools/sdk/python/beta/models/identity-manager-ref
tags: ['SDK', 'Software Development Kit', 'IdentityManagerRef', 'BetaIdentityManagerRef']
---

# IdentityManagerRef

Identity's manager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity's manager | [optional] 
**id** | **str** | ID of identity's manager | [optional] 
**name** | **str** | Human-readable display name of identity's manager | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_manager_ref import IdentityManagerRef

identity_manager_ref = IdentityManagerRef(
type='IDENTITY',
id='2c4180a46faadee4016fb4e018c20626',
name='Robert Robinson'
)

```
[[Back to top]](#) 

