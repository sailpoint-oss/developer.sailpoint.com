---
id: v2024-identity-attribute-config
title: IdentityAttributeConfig
pagination_label: IdentityAttributeConfig
sidebar_label: IdentityAttributeConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributeConfig', 'V2024IdentityAttributeConfig'] 
slug: /tools/sdk/python/v2024/models/identity-attribute-config
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeConfig', 'V2024IdentityAttributeConfig']
---

# IdentityAttributeConfig

Defines all the identity attribute mapping configurations. This defines how to generate or collect data for each identity attributes in identity refresh process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Backend will only promote values if the profile/mapping is enabled. | [optional] [default to False]
**attribute_transforms** | [**[]IdentityAttributeTransform**](identity-attribute-transform) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.identity_attribute_config import IdentityAttributeConfig

identity_attribute_config = IdentityAttributeConfig(
enabled=True,
attribute_transforms=[
                    sailpoint.v2024.models.identity_attribute_transform.IdentityAttributeTransform(
                        identity_attribute_name = 'email', 
                        transform_definition = sailpoint.v2024.models.transform_definition.TransformDefinition(
                            type = 'accountAttribute', 
                            attributes = {attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}, ), )
                    ]
)

```
[[Back to top]](#) 

