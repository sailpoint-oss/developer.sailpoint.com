---
id: v2025-identity-attribute-names
title: IdentityAttributeNames
pagination_label: IdentityAttributeNames
sidebar_label: IdentityAttributeNames
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityAttributeNames', 'V2025IdentityAttributeNames'] 
slug: /tools/sdk/python/v2025/models/identity-attribute-names
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeNames', 'V2025IdentityAttributeNames']
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
from sailpoint.v2025.models.identity_attribute_names import IdentityAttributeNames

identity_attribute_names = IdentityAttributeNames(
ids=[name, displayName]
)

```
[[Back to top]](#) 

