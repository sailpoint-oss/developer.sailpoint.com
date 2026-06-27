---
id: dimensioncriterialevel2
title: Dimensioncriterialevel2
pagination_label: Dimensioncriterialevel2
sidebar_label: Dimensioncriterialevel2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimensioncriterialevel2', 'Dimensioncriterialevel2'] 
slug: /tools/sdk/python/dimensions/models/dimensioncriterialevel2
tags: ['SDK', 'Software Development Kit', 'Dimensioncriterialevel2', 'Dimensioncriterialevel2']
---

# Dimensioncriterialevel2

Defines STANDARD type Role membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Dimensioncriteriaoperation**](dimensioncriteriaoperation) |  | [optional] 
**key** | [**Dimensioncriteriakey**](dimensioncriteriakey) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
**children** | [**[]Dimensioncriterialevel3**](dimensioncriterialevel3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 
}

## Example

```python
from sailpoint.dimensions.models.dimensioncriterialevel2 import Dimensioncriterialevel2

dimensioncriterialevel2 = Dimensioncriterialevel2(
operation='EQUALS',
key=sailpoint.dimensions.models.dimensioncriteriakey.dimensioncriteriakey(
                    type = 'IDENTITY', 
                    property = 'attribute.email', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com',
children=[
                    sailpoint.dimensions.models.dimensioncriterialevel3.dimensioncriterialevel3(
                        operation = 'EQUALS', 
                        key = sailpoint.dimensions.models.dimensioncriteriakey.dimensioncriteriakey(
                            type = 'IDENTITY', 
                            property = 'attribute.email', ), 
                        string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                    ]
)

```
[[Back to top]](#) 

