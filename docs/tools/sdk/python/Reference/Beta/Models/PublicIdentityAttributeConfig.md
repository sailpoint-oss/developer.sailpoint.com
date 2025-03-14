---
id: beta-public-identity-attribute-config
title: PublicIdentityAttributeConfig
pagination_label: PublicIdentityAttributeConfig
sidebar_label: PublicIdentityAttributeConfig
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PublicIdentityAttributeConfig', 'BetaPublicIdentityAttributeConfig'] 
slug: /tools/sdk/python/beta/models/public-identity-attribute-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentityAttributeConfig', 'BetaPublicIdentityAttributeConfig']
---

# PublicIdentityAttributeConfig

Used to map an attribute key for an Identity to its display name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | the key of the attribute | [optional] 
**name** | **str** | the display name of the attribute | [optional] 
}

## Example

```python
from sailpoint.beta.models.public_identity_attribute_config import PublicIdentityAttributeConfig

public_identity_attribute_config = PublicIdentityAttributeConfig(
key='country',
name='Country'
)

```
[[Back to top]](#) 

