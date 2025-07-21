---
id: v2025-search-criteria-filters-value-range
title: SearchCriteriaFiltersValueRange
pagination_label: SearchCriteriaFiltersValueRange
sidebar_label: SearchCriteriaFiltersValueRange
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchCriteriaFiltersValueRange', 'V2025SearchCriteriaFiltersValueRange'] 
slug: /tools/sdk/python/v2025/models/search-criteria-filters-value-range
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRange', 'V2025SearchCriteriaFiltersValueRange']
---

# SearchCriteriaFiltersValueRange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower** | [**SearchCriteriaFiltersValueRangeLower**](search-criteria-filters-value-range-lower) |  | [optional] 
**upper** | [**SearchCriteriaFiltersValueRangeUpper**](search-criteria-filters-value-range-upper) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.search_criteria_filters_value_range import SearchCriteriaFiltersValueRange

search_criteria_filters_value_range = SearchCriteriaFiltersValueRange(
lower=sailpoint.v2025.models.search_criteria_filters_value_range_lower.SearchCriteria_filters_value_range_lower(
                    value = '10', 
                    inclusive = True, ),
upper=sailpoint.v2025.models.search_criteria_filters_value_range_upper.SearchCriteria_filters_value_range_upper(
                    value = '20', 
                    inclusive = False, )
)

```
[[Back to top]](#) 

