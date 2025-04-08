---
id: attribute-value-dto
title: AttributeValueDTO
pagination_label: AttributeValueDTO
sidebar_label: AttributeValueDTO
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeValueDTO', 'AttributeValueDTO'] 
slug: /tools/sdk/python/v3/models/attribute-value-dto
tags: ['SDK', 'Software Development Kit', 'AttributeValueDTO', 'AttributeValueDTO']
---

# AttributeValueDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Technical name of the Attribute value. This is unique and cannot be changed after creation. | [optional] 
**name** | **str** | The display name of the Attribute value. | [optional] 
**status** | **str** | The status of the Attribute value. | [optional] 
}

## Example

```python
from sailpoint.v3.models.attribute_value_dto import AttributeValueDTO

attribute_value_dto = AttributeValueDTO(
value='public',
name='Public',
status='active'
)

```
[[Back to top]](#) 

