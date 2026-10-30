# DimensionCriteriaLevel3

# DimensionCriteriaLevel3

Defines STANDARD type Dimension membership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation** | **DimensionCriteriaOperation** |  | [optional] 
**key** | [**DimensionCriteriaKey**](dimension-criteria-key) |  | [optional] 
**string_value** | **str** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
\}

## Example

```python
from sailpoint.dimensions.models.dimension_criteria_level3 import DimensionCriteriaLevel3

dimension_criteria_level3 = DimensionCriteriaLevel3(
operation='EQUALS',
key=sailpoint.dimensions.models.dimension_criteria_key.DimensionCriteriaKey(
                    type = 'IDENTITY', 
                    property = 'attribute.email', ),
string_value='carlee.cert1c9f9b6fd@mailinator.com'
)

```
[[Back to top]](#) 

