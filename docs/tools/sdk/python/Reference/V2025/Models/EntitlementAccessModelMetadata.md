---
id: v2025-entitlement-access-model-metadata
title: EntitlementAccessModelMetadata
pagination_label: EntitlementAccessModelMetadata
sidebar_label: EntitlementAccessModelMetadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementAccessModelMetadata', 'V2025EntitlementAccessModelMetadata'] 
slug: /tools/sdk/python/v2025/models/entitlement-access-model-metadata
tags: ['SDK', 'Software Development Kit', 'EntitlementAccessModelMetadata', 'V2025EntitlementAccessModelMetadata']
---

# EntitlementAccessModelMetadata

Additional data to classify the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]AccessModelMetadata**](access-model-metadata) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.entitlement_access_model_metadata import EntitlementAccessModelMetadata

entitlement_access_model_metadata = EntitlementAccessModelMetadata(
attributes=[
                    sailpoint.v2025.models.access_model_metadata.AccessModelMetadata(
                        key = 'iscCsp', 
                        name = 'CSP', 
                        multiselect = True, 
                        status = 'active', 
                        type = 'governance', 
                        object_types = [
                            'general'
                            ], 
                        description = 'Indicates the type of deployment environment of an access item.', 
                        values = [
                            sailpoint.v2025.models.access_model_metadata_values_inner.AccessModelMetadata_values_inner(
                                value = 'development', 
                                name = 'Development', 
                                status = 'active', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

