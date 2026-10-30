# IdentityAttributeTransform

# IdentityAttributeTransform

Transform definition for an identity attribute.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_attribute_name** | **str** | Identity attribute's name. | [optional] 
**transform_definition** | [**TransformDefinition**](transform-definition) |  | [optional] 
\}

## Example

```python
from sailpoint.identity_profiles.models.identity_attribute_transform import IdentityAttributeTransform

identity_attribute_transform = IdentityAttributeTransform(
identity_attribute_name='email',
transform_definition=sailpoint.identity_profiles.models.transform_definition.Transform Definition(
                    type = 'accountAttribute', 
                    attributes = {"attributeName":"e-mail","sourceName":"MySource","sourceId":"2c9180877a826e68017a8c0b03da1a53"}, )
)

```
[[Back to top]](#) 

