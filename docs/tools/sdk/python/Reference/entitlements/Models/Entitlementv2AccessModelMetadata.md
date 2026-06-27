---
id: entitlementv2-access-model-metadata
title: Entitlementv2AccessModelMetadata
pagination_label: Entitlementv2AccessModelMetadata
sidebar_label: Entitlementv2AccessModelMetadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Entitlementv2AccessModelMetadata', 'Entitlementv2AccessModelMetadata'] 
slug: /tools/sdk/python/entitlements/models/entitlementv2-access-model-metadata
tags: ['SDK', 'Software Development Kit', 'Entitlementv2AccessModelMetadata', 'Entitlementv2AccessModelMetadata']
---

# Entitlementv2AccessModelMetadata

Additional data to classify the entitlementv1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**[]Accessmodelmetadata**](accessmodelmetadata) |  | [optional] 
}

## Example

```python
from sailpoint.entitlements.models.entitlementv2_access_model_metadata import Entitlementv2AccessModelMetadata

entitlementv2_access_model_metadata = Entitlementv2AccessModelMetadata(
attributes=[
                    sailpoint.entitlements.models.access_model_metadata.Access Model Metadata(
                        key = 'iscCsp', 
                        name = 'CSP', 
                        multiselect = True, 
                        status = 'active', 
                        type = 'governance', 
                        object_types = ["general"], 
                        description = 'Indicates the type of deployment environment of an access item.', 
                        values = [
                            sailpoint.entitlements.models.accessmodelmetadata_values_inner.accessmodelmetadata_values_inner(
                                value = 'development', 
                                name = 'Development', 
                                status = 'active', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

