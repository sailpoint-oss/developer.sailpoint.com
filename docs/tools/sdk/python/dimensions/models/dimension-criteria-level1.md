# DimensionCriteriaLevel1

# DimensionCriteriaLevel1

Defines STANDARD type Dimension membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **DimensionCriteriaOperation** |  | [optional] 
**key** | [**DimensionCriteriaKey**](dimension-criteria-key) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is  EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
**children** | [**[]DimensionCriteriaLevel2**](dimension-criteria-level2) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 
\}

## Example

```python
from sailpoint.dimensions.models.dimension_criteria_level1 import DimensionCriteriaLevel1

dimension_criteria_level1 = DimensionCriteriaLevel1(
operation='EQUALS',
key=sailpoint.dimensions.models.dimension_criteria_key.DimensionCriteriaKey(
                    type = 'IDENTITY', 
                    property = 'attribute.email', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com',
children=[
                    sailpoint.dimensions.models.dimension_criteria_level2.DimensionCriteriaLevel2(
                        operation = 'EQUALS', 
                        key = sailpoint.dimensions.models.dimension_criteria_key.DimensionCriteriaKey(
                            type = 'IDENTITY', 
                            property = 'attribute.email', ), 
                        string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                        children = [
                            sailpoint.dimensions.models.dimension_criteria_level3.DimensionCriteriaLevel3(
                                string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                            ], )
                    ]
)

```
[[Back to top]](#) 

