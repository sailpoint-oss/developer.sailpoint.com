# IdentityPreviewRequest

# IdentityPreviewRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_id** | **str** | The Identity id | [optional] 
**identity_attribute_config** | [**IdentityAttributeConfig**](identity-attribute-config) |  | [optional] 
\}

## Example

```python
from sailpoint.identity_profiles.models.identity_preview_request import IdentityPreviewRequest

identity_preview_request = IdentityPreviewRequest(
identity_id='',
identity_attribute_config=sailpoint.identity_profiles.models.identity_attribute_config.Identity Attribute Config(
                    enabled = True, 
                    attribute_transforms = [
                        sailpoint.identity_profiles.models.identity_attribute_transform.Identity Attribute Transform(
                            identity_attribute_name = 'email', 
                            transform_definition = sailpoint.identity_profiles.models.transform_definition.Transform Definition(
                                type = 'accountAttribute', 
                                attributes = {"attributeName":"e-mail","sourceName":"MySource","sourceId":"2c9180877a826e68017a8c0b03da1a53"}, ), )
                        ], )
)

```
[[Back to top]](#) 

