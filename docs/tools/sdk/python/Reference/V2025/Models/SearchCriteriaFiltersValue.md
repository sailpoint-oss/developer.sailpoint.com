---
id: v2025-search-criteria-filters-value
title: SearchCriteriaFiltersValue
pagination_label: SearchCriteriaFiltersValue
sidebar_label: SearchCriteriaFiltersValue
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchCriteriaFiltersValue', 'V2025SearchCriteriaFiltersValue'] 
slug: /tools/sdk/python/v2025/models/search-criteria-filters-value
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValue', 'V2025SearchCriteriaFiltersValue']
---

# SearchCriteriaFiltersValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of filter, e.g., \"TERMS\" or \"RANGE\". | [optional] 
**terms** | **[]str** | Terms to filter by (for \"TERMS\" type). | [optional] 
**range** | [**SearchCriteriaFiltersValueRange**](search-criteria-filters-value-range) |  | [optional] 
}

## Example

```python
from sailpoint.v2025.models.search_criteria_filters_value import SearchCriteriaFiltersValue

search_criteria_filters_value = SearchCriteriaFiltersValue(
type='TERMS',
terms=[active, inactive],
range=sailpoint.v2025.models.search_criteria_filters_value_range.SearchCriteria_filters_value_range(
                    lower = sailpoint.v2025.models.search_criteria_filters_value_range_lower.SearchCriteria_filters_value_range_lower(
                        value = '10', 
                        inclusive = True, ), 
                    upper = sailpoint.v2025.models.search_criteria_filters_value_range_upper.SearchCriteria_filters_value_range_upper(
                        value = '20', 
                        inclusive = False, ), )
)

```
[[Back to top]](#) 

