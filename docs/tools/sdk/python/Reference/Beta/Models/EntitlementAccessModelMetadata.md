---
id: beta-entitlement-access-model-metadata
title: EntitlementAccessModelMetadata
pagination_label: EntitlementAccessModelMetadata
sidebar_label: EntitlementAccessModelMetadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementAccessModelMetadata', 'BetaEntitlementAccessModelMetadata'] 
slug: /tools/sdk/python/beta/models/entitlement-access-model-metadata
tags: ['SDK', 'Software Development Kit', 'EntitlementAccessModelMetadata', 'BetaEntitlementAccessModelMetadata']
---

# EntitlementAccessModelMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]AttributeDTO**](attribute-dto) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.entitlement_access_model_metadata import EntitlementAccessModelMetadata

entitlement_access_model_metadata = EntitlementAccessModelMetadata(
attributes=[{key=iscPrivacy, name=Privacy, multiselect=false, status=active, type=governance, objectTypes=[all], description=Specifies the level of privacy associated with an access item., values=[{value=public, name=Public, status=active}]}]
)

```
[[Back to top]](#) 

