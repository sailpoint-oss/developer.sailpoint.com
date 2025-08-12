---
id: v2024-identity-preview-response
title: IdentityPreviewResponse
pagination_label: IdentityPreviewResponse
sidebar_label: IdentityPreviewResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityPreviewResponse', 'V2024IdentityPreviewResponse'] 
slug: /tools/sdk/python/v2024/models/identity-preview-response
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponse', 'V2024IdentityPreviewResponse']
---

# IdentityPreviewResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentityPreviewResponseIdentity**](identity-preview-response-identity) |  | [optional] 
**preview_attributes** | [**[]IdentityAttributePreview**](identity-attribute-preview) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_preview_response import IdentityPreviewResponse

identity_preview_response = IdentityPreviewResponse(
identity=sailpoint.v2024.models.identity_preview_response_identity.IdentityPreviewResponse_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
preview_attributes=[
                    sailpoint.v2024.models.identity_attribute_preview.Identity Attribute Preview(
                        name = 'email', 
                        value = 'email@mail.com', 
                        previous_value = 'oldEmail@mail.com', 
                        error_messages = {locale=en-US, localeOrigin=DEFAULT, text=Error Message}, )
                    ]
)

```
[[Back to top]](#) 

