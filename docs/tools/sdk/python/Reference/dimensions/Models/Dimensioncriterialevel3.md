---
id: dimensioncriterialevel3
title: Dimensioncriterialevel3
pagination_label: Dimensioncriterialevel3
sidebar_label: Dimensioncriterialevel3
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimensioncriterialevel3', 'Dimensioncriterialevel3'] 
slug: /tools/sdk/python/dimensions/models/dimensioncriterialevel3
tags: ['SDK', 'Software Development Kit', 'Dimensioncriterialevel3', 'Dimensioncriterialevel3']
---

# Dimensioncriterialevel3

Defines STANDARD type Dimension membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**Dimensioncriteriaoperation**](dimensioncriteriaoperation) |  | [optional] 
**key** | [**Dimensioncriteriakey**](dimensioncriteriakey) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
}

## Example

```python
from sailpoint.dimensions.models.dimensioncriterialevel3 import Dimensioncriterialevel3

dimensioncriterialevel3 = Dimensioncriterialevel3(
operation='EQUALS',
key=sailpoint.dimensions.models.dimensioncriteriakey.dimensioncriteriakey(
                    type = 'IDENTITY', 
                    property = 'attribute.email', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com'
)

```
[[Back to top]](#) 

