---
id: v2025-public-identity-attributes-inner
title: PublicIdentityAttributesInner
pagination_label: PublicIdentityAttributesInner
sidebar_label: PublicIdentityAttributesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PublicIdentityAttributesInner', 'V2025PublicIdentityAttributesInner'] 
slug: /tools/sdk/python/v2025/models/public-identity-attributes-inner
tags: ['SDK', 'Software Development Kit', 'PublicIdentityAttributesInner', 'V2025PublicIdentityAttributesInner']
---

# PublicIdentityAttributesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The attribute key | [optional] 
**name** | **str** | Human-readable display name of the attribute | [optional] 
**value** | **str** | The attribute value | [optional] 
}

## Example

```python
from sailpoint.v2025.models.public_identity_attributes_inner import PublicIdentityAttributesInner

public_identity_attributes_inner = PublicIdentityAttributesInner(
key='country',
name='Country',
value='US'
)

```
[[Back to top]](#) 

