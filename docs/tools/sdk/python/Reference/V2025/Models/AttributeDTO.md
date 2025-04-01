---
id: v2025-attribute-dto
title: AttributeDTO
pagination_label: AttributeDTO
sidebar_label: AttributeDTO
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeDTO', 'V2025AttributeDTO'] 
slug: /tools/sdk/python/v2025/models/attribute-dto
tags: ['SDK', 'Software Development Kit', 'AttributeDTO', 'V2025AttributeDTO']
---

# AttributeDTO


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
**values** | [**[]AttributeValueDTO**](attribute-value-dto) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.attribute_dto import AttributeDTO

attribute_dto = AttributeDTO(
key='iscPrivacy',
name='Privacy',
multiselect=False,
status='active',
type='governance',
object_types=[entitlement],
description='Specifies the level of privacy associated with an access item.',
values=[
                    sailpoint.v2025.models.attribute_value_dto.AttributeValueDTO(
                        value = 'public', 
                        name = 'Public', 
                        status = 'active', )
                    ]
)

```
[[Back to top]](#) 

