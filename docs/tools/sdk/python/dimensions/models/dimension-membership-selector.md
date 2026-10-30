# DimensionMembershipSelector

# DimensionMembershipSelector

When present, specifies that the Dimension is to be granted to Identities which either satisfy specific criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **DimensionMembershipSelectorType** |  | [optional] 
**criteria** | [**DimensionCriteriaLevel1**](dimension-criteria-level1) |  | [optional] 
\}

## Example

```python
from sailpoint.dimensions.models.dimension_membership_selector import DimensionMembershipSelector

dimension_membership_selector = DimensionMembershipSelector(
type='STANDARD',
criteria=sailpoint.dimensions.models.dimension_criteria_level1.DimensionCriteriaLevel1(
                    operation = 'EQUALS', 
                    key = sailpoint.dimensions.models.dimension_criteria_key.DimensionCriteriaKey(
                        type = 'IDENTITY', 
                        property = 'attribute.email', ), 
                    string_value = 'carlee.cert1c9f9b6fd@mailinator.com', 
                    children = [
                        sailpoint.dimensions.models.dimension_criteria_level2.DimensionCriteriaLevel2(
                            string_value = 'carlee.cert1c9f9b6fd@mailinator.com', )
                        ], )
)

```
[[Back to top]](#) 

