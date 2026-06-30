---
id: publicidentity-attributes-inner
title: PublicidentityAttributesInner
pagination_label: PublicidentityAttributesInner
sidebar_label: PublicidentityAttributesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PublicidentityAttributesInner', 'PublicidentityAttributesInner'] 
slug: /tools/sdk/python/public-identities/models/publicidentity-attributes-inner
tags: ['SDK', 'Software Development Kit', 'PublicidentityAttributesInner', 'PublicidentityAttributesInner']
---

# PublicidentityAttributesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The attribute key | [optional] 
**name** | **str** | Human-readable display name of the attribute | [optional] 
**value** | **str** | The attribute value | [optional] 
}

## Example

```python
from sailpoint.public_identities.models.publicidentity_attributes_inner import PublicidentityAttributesInner

publicidentity_attributes_inner = PublicidentityAttributesInner(
key='country',
name='Country',
value='US'
)

```
[[Back to top]](#) 

