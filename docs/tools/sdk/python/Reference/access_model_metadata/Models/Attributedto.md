---
id: attributedto
title: Attributedto
pagination_label: Attributedto
sidebar_label: Attributedto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Attributedto', 'Attributedto'] 
slug: /tools/sdk/python/access-model-metadata/models/attributedto
tags: ['SDK', 'Software Development Kit', 'Attributedto', 'Attributedto']
---

# Attributedto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Technical name of the Attribute. This is unique and cannot be changed after creation. | [optional] 
**name** | **str** | The display name of the key. | [optional] 
**multiselect** | **bool** | Indicates whether the attribute can have multiple values. | [optional] [default to False]
**status** | **str** | The status of the Attribute. | [optional] 
**type** | **str** | The type of the Attribute. This can be either \"custom\" or \"governance\". | [optional] 
**object_types** | **[]str** | An array of object types this attributes values can be applied to. Possible values are \"all\" or \"entitlement\". Value \"all\" means this attribute can be used with all object types that are supported. | [optional] 
**description** | **str** | The description of the Attribute. | [optional] 
**values** | [**[]Attributevaluedto**](attributevaluedto) |  | [optional] 
}

## Example

```python
from sailpoint.access_model_metadata.models.attributedto import Attributedto

attributedto = Attributedto(
key='iscPrivacy',
name='Privacy',
multiselect=False,
status='active',
type='governance',
object_types=["entitlement"],
description='Specifies the level of privacy associated with an access item.',
values=[
                    sailpoint.access_model_metadata.models.attributevaluedto.attributevaluedto(
                        value = 'public', 
                        name = 'Public', 
                        status = 'active', )
                    ]
)

```
[[Back to top]](#) 

