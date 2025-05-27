---
id: beta-search-criteria-filters-value-range-upper
title: SearchCriteriaFiltersValueRangeUpper
pagination_label: SearchCriteriaFiltersValueRangeUpper
sidebar_label: SearchCriteriaFiltersValueRangeUpper
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchCriteriaFiltersValueRangeUpper', 'BetaSearchCriteriaFiltersValueRangeUpper'] 
slug: /tools/sdk/python/beta/models/search-criteria-filters-value-range-upper
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRangeUpper', 'BetaSearchCriteriaFiltersValueRangeUpper']
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
from sailpoint.beta.models.search_criteria_filters_value_range_upper import SearchCriteriaFiltersValueRangeUpper

search_criteria_filters_value_range_upper = SearchCriteriaFiltersValueRangeUpper(
value='20',
inclusive=False
)

```
[[Back to top]](#) 

