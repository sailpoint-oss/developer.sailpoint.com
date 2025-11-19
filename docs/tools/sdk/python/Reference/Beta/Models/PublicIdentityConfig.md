---
id: beta-public-identity-config
title: PublicIdentityConfig
pagination_label: PublicIdentityConfig
sidebar_label: PublicIdentityConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PublicIdentityConfig', 'BetaPublicIdentityConfig'] 
slug: /tools/sdk/python/beta/models/public-identity-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentityConfig', 'BetaPublicIdentityConfig']
---

# PublicIdentityConfig

Details of up to 5 Identity attributes that will be publicly accessible for all Identities to anyone in the org

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) |  | [optional] 
**modified_by** | [**IdentityReference**](identity-reference) |  | [optional] 
**modified** | **datetime** | the date/time of the modification | [optional] 
}

## Example

```python
from sailpoint.beta.models.public_identity_config import PublicIdentityConfig

public_identity_config = PublicIdentityConfig(
attributes=[
                    sailpoint.beta.models.public_identity_attribute_config.Public Identity Attribute Config(
                        key = 'country', 
                        name = 'Country', )
                    ],
modified_by=sailpoint.beta.models.identity_reference.Identity Reference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Thomas Edison', ),
modified='2018-06-25T20:22:28.104Z'
)

```
[[Back to top]](#) 

