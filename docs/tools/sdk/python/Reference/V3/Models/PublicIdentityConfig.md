---
id: public-identity-config
title: PublicIdentityConfig
pagination_label: PublicIdentityConfig
sidebar_label: PublicIdentityConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PublicIdentityConfig', 'PublicIdentityConfig'] 
slug: /tools/sdk/python/v3/models/public-identity-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentityConfig', 'PublicIdentityConfig']
---

# PublicIdentityConfig

Details of up to 5 Identity attributes that will be publicly accessible for all Identities to anyone in the org.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) | Up to 5 identity attributes that will be available to everyone in the org for all users in the org. | [optional] 
**modified** | **datetime** | When this configuration was last modified. | [optional] 
**modified_by** | [**IdentityReference**](identity-reference) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.public_identity_config import PublicIdentityConfig

public_identity_config = PublicIdentityConfig(
attributes=[
                    sailpoint.v3.models.public_identity_attribute_config.PublicIdentityAttributeConfig(
                        key = 'country', 
                        name = 'Country', )
                    ],
modified='2018-06-25T20:22:28.104Z',
modified_by=sailpoint.v3.models.identity_reference.IdentityReference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Thomas Edison', )
)

```
[[Back to top]](#) 

