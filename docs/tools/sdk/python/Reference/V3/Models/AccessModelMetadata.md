---
id: access-model-metadata
title: AccessModelMetadata
pagination_label: AccessModelMetadata
sidebar_label: AccessModelMetadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessModelMetadata', 'AccessModelMetadata'] 
slug: /tools/sdk/python/v3/models/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadata', 'AccessModelMetadata']
---

# AccessModelMetadata

Metadata that describes an access item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Unique identifier for the metadata type | [optional] 
**name** | **str** | Human readable name of the metadata type | [optional] 
**multiselect** | **bool** | Allows selecting multiple values | [optional] [default to False]
**status** | **str** | The state of the metadata item | [optional] 
**type** | **str** | The type of the metadata item | [optional] 
**object_types** | **[]str** | The types of objects | [optional] 
**description** | **str** | Describes the metadata item | [optional] 
**values** | [**[]AccessModelMetadataValuesInner**](access-model-metadata-values-inner) | The value to assign to the metadata item | [optional] 
}

## Example

```python
from sailpoint.v3.models.access_model_metadata import AccessModelMetadata

access_model_metadata = AccessModelMetadata(
key='iscCsp',
name='CSP',
multiselect=True,
status='active',
type='governance',
object_types=[
                    'general'
                    ],
description='Indicates the type of deployment environment of an access item.',
values=[
                    sailpoint.v3.models.access_model_metadata_values_inner.AccessModelMetadata_values_inner(
                        value = 'development', 
                        name = 'Development', 
                        status = 'active', )
                    ]
)

```
[[Back to top]](#) 

