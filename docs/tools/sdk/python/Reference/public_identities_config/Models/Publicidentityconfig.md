---
id: publicidentityconfig
title: Publicidentityconfig
pagination_label: Publicidentityconfig
sidebar_label: Publicidentityconfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Publicidentityconfig', 'Publicidentityconfig'] 
slug: /tools/sdk/python/public-identities-config/models/publicidentityconfig
tags: ['SDK', 'Software Development Kit', 'Publicidentityconfig', 'Publicidentityconfig']
---

# Publicidentityconfig

Details of up to 5 Identity attributes that will be publicly accessible for all Identities to anyone in the org.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]Publicidentityattributeconfig**](publicidentityattributeconfig) | Up to 5 identity attributes that will be available to everyone in the org for all users in the org. | [optional] 
**modified** | **datetime** | When this configuration was last modified. | [optional] 
**modified_by** | [**Identityreference**](identityreference) |  | [optional] 
}

## Example

```python
from sailpoint.public_identities_config.models.publicidentityconfig import Publicidentityconfig

publicidentityconfig = Publicidentityconfig(
attributes=[
                    sailpoint.public_identities_config.models.public_identity_attribute_config.Public Identity Attribute Config(
                        key = 'country', 
                        name = 'Country', )
                    ],
modified='2018-06-25T20:22:28.104Z',
modified_by=sailpoint.public_identities_config.models.identity_reference.Identity Reference(
                    type = 'IDENTITY', 
                    id = '2c9180a46faadee4016fb4e018c20639', 
                    name = 'Thomas Edison', )
)

```
[[Back to top]](#) 

