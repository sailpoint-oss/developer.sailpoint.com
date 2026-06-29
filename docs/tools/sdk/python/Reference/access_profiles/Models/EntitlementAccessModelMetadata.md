---
id: entitlement-access-model-metadata
title: EntitlementAccessModelMetadata
pagination_label: EntitlementAccessModelMetadata
sidebar_label: EntitlementAccessModelMetadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EntitlementAccessModelMetadata', 'EntitlementAccessModelMetadata'] 
slug: /tools/sdk/python/access-profiles/models/entitlement-access-model-metadata
tags: ['SDK', 'Software Development Kit', 'EntitlementAccessModelMetadata', 'EntitlementAccessModelMetadata']
---

# EntitlementAccessModelMetadata

Additional data to classify the entitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]Accessmodelmetadata**](accessmodelmetadata) |  | [optional] 
}

## Example

```python
from sailpoint.access_profiles.models.entitlement_access_model_metadata import EntitlementAccessModelMetadata

entitlement_access_model_metadata = EntitlementAccessModelMetadata(
attributes=[
                    sailpoint.access_profiles.models.access_model_metadata.Access Model Metadata(
                        key = 'iscCsp', 
                        name = 'CSP', 
                        multiselect = True, 
                        status = 'active', 
                        type = 'governance', 
                        object_types = ["general"], 
                        description = 'Indicates the type of deployment environment of an access item.', 
                        values = [
                            sailpoint.access_profiles.models.accessmodelmetadata_values_inner.accessmodelmetadata_values_inner(
                                value = 'development', 
                                name = 'Development', 
                                status = 'active', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

