---
id: v2024-entitlement1-access-model-metadata
title: Entitlement1AccessModelMetadata
pagination_label: Entitlement1AccessModelMetadata
sidebar_label: Entitlement1AccessModelMetadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlement1AccessModelMetadata', 'V2024Entitlement1AccessModelMetadata'] 
slug: /tools/sdk/python/v2024/models/entitlement1-access-model-metadata
tags: ['SDK', 'Software Development Kit', 'Entitlement1AccessModelMetadata', 'V2024Entitlement1AccessModelMetadata']
---

# Entitlement1AccessModelMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]AttributeDTO**](attribute-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.entitlement1_access_model_metadata import Entitlement1AccessModelMetadata

entitlement1_access_model_metadata = Entitlement1AccessModelMetadata(
attributes=[{key=iscPrivacy, name=Privacy, multiselect=false, status=active, type=governance, objectTypes=[all], description=Specifies the level of privacy associated with an access item., values=[{value=public, name=Public, status=active}]}]
)

```
[[Back to top]](#) 

