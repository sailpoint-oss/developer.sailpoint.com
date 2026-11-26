# SearchCriteriaFiltersValueRange

# SearchCriteriaFiltersValueRange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower** | [**SearchCriteriaFiltersValueRangeLower**](search-criteria-filters-value-range-lower) |  | [optional] 
**upper** | [**SearchCriteriaFiltersValueRangeUpper**](search-criteria-filters-value-range-upper) |  | [optional] 
\}

## Example

```python
from sailpoint.suggested_entitlement_description.models.search_criteria_filters_value_range import SearchCriteriaFiltersValueRange

search_criteria_filters_value_range = SearchCriteriaFiltersValueRange(
lower=sailpoint.suggested_entitlement_description.models.search_criteria_filters_value_range_lower.SearchCriteria_filters_value_range_lower(
                    value = '10', 
                    inclusive = True, ),
upper=sailpoint.suggested_entitlement_description.models.search_criteria_filters_value_range_upper.SearchCriteria_filters_value_range_upper(
                    value = '20', 
                    inclusive = False, )
)

```
[[Back to top]](#) 

