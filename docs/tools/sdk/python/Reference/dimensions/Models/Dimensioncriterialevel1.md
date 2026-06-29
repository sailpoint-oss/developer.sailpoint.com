---
id: dimensioncriterialevel1
title: Dimensioncriterialevel1
pagination_label: Dimensioncriterialevel1
sidebar_label: Dimensioncriterialevel1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimensioncriterialevel1', 'Dimensioncriterialevel1'] 
slug: /tools/sdk/python/dimensions/models/dimensioncriterialevel1
tags: ['SDK', 'Software Development Kit', 'Dimensioncriterialevel1', 'Dimensioncriterialevel1']
---

# Dimensioncriterialevel1

Defines STANDARD type Dimension membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Dimensioncriteriaoperation**](dimensioncriteriaoperation) |  | [optional] 
**key** | [**Dimensioncriteriakey**](dimensioncriteriakey) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is  EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
**children** | [**[]Dimensioncriterialevel2**](dimensioncriterialevel2) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 
}

## Example

```python
from sailpoint.dimensions.models.dimensioncriterialevel1 import Dimensioncriterialevel1

dimensioncriterialevel1 = Dimensioncriterialevel1(
operation='EQUALS',
key=sailpoint.dimensions.models.dimensioncriteriakey.dimensioncriteriakey(
                    type = 'IDENTITY', 
                    property = 'attribute.email', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com',
children=[
                    sailpoint.dimensions.models.dimensioncriterialevel2.dimensioncriterialevel2(
                        operation = 'EQUALS', 
                        key = sailpoint.dimensions.models.dimensioncriteriakey.dimensioncriteriakey(
                            type = 'IDENTITY', 
                            property = 'attribute.email', ), 
                        string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                        children = [
                            sailpoint.dimensions.models.dimensioncriterialevel3.dimensioncriterialevel3(
                                string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

