# IdentityPreviewResponse

# IdentityPreviewResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentityPreviewResponseIdentity**](identity-preview-response-identity) |  | [optional] 
**preview_attributes** | [**[]IdentityAttributePreview**](identity-attribute-preview) |  | [optional] 
\}

## Example

```python
from sailpoint.identity_profiles.models.identity_preview_response import IdentityPreviewResponse

identity_preview_response = IdentityPreviewResponse(
identity=sailpoint.identity_profiles.models.identity_preview_response_identity.IdentityPreviewResponse_identity(
                    type = 'IDENTITY', 
                    id = '2c7180a46faadee4016fb4e018c20642', 
                    name = 'Michael Michaels', ),
preview_attributes=[
                    sailpoint.identity_profiles.models.identity_attribute_preview.Identity Attribute Preview(
                        name = 'email', 
                        value = 'email@mail.com', 
                        previous_value = 'oldEmail@mail.com', 
                        error_messages = {"locale":"en-US","localeOrigin":"DEFAULT","text":"Error Message"}, )
                    ]
)

```
[[Back to top]](#) 

