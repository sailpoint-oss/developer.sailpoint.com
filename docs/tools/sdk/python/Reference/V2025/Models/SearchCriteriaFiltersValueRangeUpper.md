---
id: v2025-search-criteria-filters-value-range-upper
title: SearchCriteriaFiltersValueRangeUpper
pagination_label: SearchCriteriaFiltersValueRangeUpper
sidebar_label: SearchCriteriaFiltersValueRangeUpper
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchCriteriaFiltersValueRangeUpper', 'V2025SearchCriteriaFiltersValueRangeUpper'] 
slug: /tools/sdk/python/v2025/models/search-criteria-filters-value-range-upper
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRangeUpper', 'V2025SearchCriteriaFiltersValueRangeUpper']
---

# SearchCriteriaFiltersValueRangeUpper


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The upper bound value. | [optional] 
**inclusive** | **bool** | Whether the upper bound is inclusive. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.search_criteria_filters_value_range_upper import SearchCriteriaFiltersValueRangeUpper

search_criteria_filters_value_range_upper = SearchCriteriaFiltersValueRangeUpper(
value='20',
inclusive=False
)

```
[[Back to top]](#) 

