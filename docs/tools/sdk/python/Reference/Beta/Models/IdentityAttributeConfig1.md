---
id: beta-identity-attribute-config1
title: IdentityAttributeConfig1
pagination_label: IdentityAttributeConfig1
sidebar_label: IdentityAttributeConfig1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributeConfig1', 'BetaIdentityAttributeConfig1'] 
slug: /tools/sdk/python/beta/models/identity-attribute-config1
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeConfig1', 'BetaIdentityAttributeConfig1']
---

# IdentityAttributeConfig1

Defines all the identity attribute mapping configurations. This defines how to generate or collect data for each identity attributes in identity refresh process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Backend will only promote values if the profile/mapping is enabled. | [optional] [default to False]
**attribute_transforms** | [**[]IdentityAttributeTransform1**](identity-attribute-transform1) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_attribute_config1 import IdentityAttributeConfig1

identity_attribute_config1 = IdentityAttributeConfig1(
enabled=True,
attribute_transforms=[
                    sailpoint.beta.models.identity_attribute_transform.Identity Attribute Transform(
                        identity_attribute_name = 'email', 
                        transform_definition = sailpoint.beta.models.transform_definition.Transform Definition(
                            type = 'accountAttribute', 
                            attributes = {attributeName=e-mail, sourceName=MySource, sourceId=2c9180877a826e68017a8c0b03da1a53}, ), )
                    ]
)

```
[[Back to top]](#) 

