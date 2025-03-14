---
id: v2024-attribute-request
title: AttributeRequest
pagination_label: AttributeRequest
sidebar_label: AttributeRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeRequest', 'V2024AttributeRequest'] 
slug: /tools/sdk/python/v2024/models/attribute-request
tags: ['SDK', 'Software Development Kit', 'AttributeRequest', 'V2024AttributeRequest']
---

# AttributeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Attribute name. | [optional] 
**op** | **str** | Operation to perform on attribute. | [optional] 
**value** | [**AttributeRequestValue**](attribute-request-value) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.attribute_request import AttributeRequest

attribute_request = AttributeRequest(
name='groups',
op='Add',
value=
)

```
[[Back to top]](#) 

