---
id: beta-identity-preview-response-identity
title: IdentityPreviewResponseIdentity
pagination_label: IdentityPreviewResponseIdentity
sidebar_label: IdentityPreviewResponseIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityPreviewResponseIdentity', 'BetaIdentityPreviewResponseIdentity'] 
slug: /tools/sdk/python/beta/models/identity-preview-response-identity
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponseIdentity', 'BetaIdentityPreviewResponseIdentity']
---

# IdentityPreviewResponseIdentity

Identity's manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** |  **Enum** [  'IDENTITY' ] | DTO type of identity's manager. | [optional] 
**id** | **str** | ID of identity's manager. | [optional] 
**name** | **str** | Human-readable display name of identity's manager. | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_preview_response_identity import IdentityPreviewResponseIdentity

identity_preview_response_identity = IdentityPreviewResponseIdentity(
type='IDENTITY',
id='2c4180a46faadee4016fb4e018c20626',
name='Robert Robinson'
)

```
[[Back to top]](#) 

