---
id: beta-identity-attribute-names
title: IdentityAttributeNames
pagination_label: IdentityAttributeNames
sidebar_label: IdentityAttributeNames
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributeNames', 'BetaIdentityAttributeNames'] 
slug: /tools/sdk/python/beta/models/identity-attribute-names
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeNames', 'BetaIdentityAttributeNames']
---

# IdentityAttributeNames

Identity attribute IDs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **[]str** | List of identity attributes' technical names. | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_attribute_names import IdentityAttributeNames

identity_attribute_names = IdentityAttributeNames(
ids=[name, displayName]
)

```
[[Back to top]](#) 

