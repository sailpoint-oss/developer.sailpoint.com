---
id: attribute-request
title: AttributeRequest
pagination_label: AttributeRequest
sidebar_label: AttributeRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AttributeRequest', 'AttributeRequest'] 
slug: /tools/sdk/python/v3/models/attribute-request
tags: ['SDK', 'Software Development Kit', 'AttributeRequest', 'AttributeRequest']
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
from sailpoint.v3.models.attribute_request import AttributeRequest

attribute_request = AttributeRequest(
name='groups',
op='Add',
value=
)

```
[[Back to top]](#) 

