---
id: v2024-dimension-criteria-level2
title: DimensionCriteriaLevel2
pagination_label: DimensionCriteriaLevel2
sidebar_label: DimensionCriteriaLevel2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DimensionCriteriaLevel2', 'V2024DimensionCriteriaLevel2'] 
slug: /tools/sdk/python/v2024/models/dimension-criteria-level2
tags: ['SDK', 'Software Development Kit', 'DimensionCriteriaLevel2', 'V2024DimensionCriteriaLevel2']
---

# DimensionCriteriaLevel2

Defines STANDARD type Role membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | [**DimensionCriteriaOperation**](dimension-criteria-operation) |  | [optional] 
**key** | [**DimensionCriteriaKey**](dimension-criteria-key) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
**children** | [**[]DimensionCriteriaLevel3**](dimension-criteria-level3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.dimension_criteria_level2 import DimensionCriteriaLevel2

dimension_criteria_level2 = DimensionCriteriaLevel2(
operation='EQUALS',
key=sailpoint.v2024.models.dimension_criteria_key.DimensionCriteriaKey(
                    type = 'IDENTITY', 
                    property = 'attribute.email', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com',
children=[
                    sailpoint.v2024.models.dimension_criteria_level3.DimensionCriteriaLevel3(
                        operation = 'EQUALS', 
                        key = sailpoint.v2024.models.dimension_criteria_key.DimensionCriteriaKey(
                            type = 'IDENTITY', 
                            property = 'attribute.email', ), 
                        string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                    ]
)

```
[[Back to top]](#) 

