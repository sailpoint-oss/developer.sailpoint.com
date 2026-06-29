---
id: identityattributeconfig
title: Identityattributeconfig
pagination_label: Identityattributeconfig
sidebar_label: Identityattributeconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identityattributeconfig', 'Identityattributeconfig'] 
slug: /tools/sdk/python/identity-profiles/models/identityattributeconfig
tags: ['SDK', 'Software Development Kit', 'Identityattributeconfig', 'Identityattributeconfig']
---

# Identityattributeconfig

Defines all the identity attribute mapping configurations. This defines how to generate or collect data for each identity attributes in identity refresh process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Backend will only promote values if the profile/mapping is enabled. | [optional] [default to False]
**attribute_transforms** | [**[]Identityattributetransform**](identityattributetransform) |  | [optional] 
}

## Example

```python
from sailpoint.identity_profiles.models.identityattributeconfig import Identityattributeconfig

identityattributeconfig = Identityattributeconfig(
enabled=True,
attribute_transforms=[
                    sailpoint.identity_profiles.models.identity_attribute_transform.Identity Attribute Transform(
                        identity_attribute_name = 'email', 
                        transform_definition = sailpoint.identity_profiles.models.transform_definition.Transform Definition(
                            type = 'accountAttribute', 
                            attributes = {"attributeName":"e-mail","sourceName":"MySource","sourceId":"2c9180877a826e68017a8c0b03da1a53"}, ), )
                    ]
)

```
[[Back to top]](#) 

