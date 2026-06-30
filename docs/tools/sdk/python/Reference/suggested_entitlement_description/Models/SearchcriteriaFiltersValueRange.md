---
id: searchcriteria-filters-value-range
title: SearchcriteriaFiltersValueRange
pagination_label: SearchcriteriaFiltersValueRange
sidebar_label: SearchcriteriaFiltersValueRange
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchcriteriaFiltersValueRange', 'SearchcriteriaFiltersValueRange'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/searchcriteria-filters-value-range
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaFiltersValueRange', 'SearchcriteriaFiltersValueRange']
---

# SearchcriteriaFiltersValueRange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower** | [**SearchcriteriaFiltersValueRangeLower**](searchcriteria-filters-value-range-lower) |  | [optional] 
**upper** | [**SearchcriteriaFiltersValueRangeUpper**](searchcriteria-filters-value-range-upper) |  | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.searchcriteria_filters_value_range import SearchcriteriaFiltersValueRange

searchcriteria_filters_value_range = SearchcriteriaFiltersValueRange(
lower=sailpoint.suggested_entitlement_description.models.searchcriteria_filters_value_range_lower.searchcriteria_filters_value_range_lower(
                    value = '10', 
                    inclusive = True, ),
upper=sailpoint.suggested_entitlement_description.models.searchcriteria_filters_value_range_upper.searchcriteria_filters_value_range_upper(
                    value = '20', 
                    inclusive = False, )
)

```
[[Back to top]](#) 

