---
id: beta-identity-preview-response
title: IdentityPreviewResponse
pagination_label: IdentityPreviewResponse
sidebar_label: IdentityPreviewResponse
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityPreviewResponse', 'BetaIdentityPreviewResponse'] 
slug: /tools/sdk/python/beta/models/identity-preview-response
tags: ['SDK', 'Software Development Kit', 'IdentityPreviewResponse', 'BetaIdentityPreviewResponse']
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
from sailpoint.beta.models.identity_preview_response import IdentityPreviewResponse

identity_preview_response = IdentityPreviewResponse(
identity=sailpoint.beta.models.identity_preview_response_identity.IdentityPreviewResponse_identity(
                    type = 'IDENTITY', 
                    id = '2c4180a46faadee4016fb4e018c20626', 
                    name = 'Robert Robinson', ),
preview_attributes=[
                    sailpoint.beta.models.identity_attribute_preview.Identity Attribute Preview(
                        name = 'email', 
                        value = 'email@mail.com', 
                        previous_value = 'oldEmail@mail.com', 
                        error_messages = [
                            sailpoint.beta.models.error_message_dto.Error Message Dto(
                                locale = 'en-US', 
                                locale_origin = 'DEFAULT', 
                                text = 'The request was syntactically correct but its content is semantically invalid.', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

