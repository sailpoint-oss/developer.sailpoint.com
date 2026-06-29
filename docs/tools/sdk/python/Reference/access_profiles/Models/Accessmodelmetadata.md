---
id: accessmodelmetadata
title: Accessmodelmetadata
pagination_label: Accessmodelmetadata
sidebar_label: Accessmodelmetadata
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessmodelmetadata', 'Accessmodelmetadata'] 
slug: /tools/sdk/python/access-profiles/models/accessmodelmetadata
tags: ['SDK', 'Software Development Kit', 'Accessmodelmetadata', 'Accessmodelmetadata']
---

# Accessmodelmetadata

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
**values** | [**[]AccessmodelmetadataValuesInner**](accessmodelmetadata-values-inner) | The value to assign to the metadata item | [optional] 
}

## Example

```python
from sailpoint.access_profiles.models.accessmodelmetadata import Accessmodelmetadata

accessmodelmetadata = Accessmodelmetadata(
key='iscCsp',
name='CSP',
multiselect=True,
status='active',
type='governance',
object_types=["general"],
description='Indicates the type of deployment environment of an access item.',
values=[
                    sailpoint.access_profiles.models.accessmodelmetadata_values_inner.accessmodelmetadata_values_inner(
                        value = 'development', 
                        name = 'Development', 
                        status = 'active', )
                    ]
)

```
[[Back to top]](#) 

