---
id: v2024-identity-preview-response-identity
title: IdentityPreviewResponseIdentity
pagination_label: IdentityPreviewResponseIdentity
sidebar_label: IdentityPreviewResponseIdentity
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityPreviewResponseIdentity', 'V2024IdentityPreviewResponseIdentity'] 
slug: /tools/sdk/python/v2024/models/identity-preview-response-identity
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponseIdentity', 'V2024IdentityPreviewResponseIdentity']
---

# IdentityPreviewResponseIdentity

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
from sailpoint.v2024.models.identity_preview_response_identity import IdentityPreviewResponseIdentity

identity_preview_response_identity = IdentityPreviewResponseIdentity(
type='IDENTITY',
id='2c7180a46faadee4016fb4e018c20642',
name='Michael Michaels'
)

```
[[Back to top]](#) 

