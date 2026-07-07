---
id: searchcriteria-filters-value
title: SearchcriteriaFiltersValue
pagination_label: SearchcriteriaFiltersValue
sidebar_label: SearchcriteriaFiltersValue
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SearchcriteriaFiltersValue', 'SearchcriteriaFiltersValue'] 
slug: /tools/sdk/python/suggested-entitlement-description/models/searchcriteria-filters-value
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaFiltersValue', 'SearchcriteriaFiltersValue']
---

# SearchcriteriaFiltersValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of filter, e.g., \"TERMS\" or \"RANGE\". | [optional] 
**terms** | **[]str** | Terms to filter by (for \"TERMS\" type). | [optional] 
**range** | [**SearchcriteriaFiltersValueRange**](searchcriteria-filters-value-range) |  | [optional] 
}

## Example

```python
from sailpoint.suggested_entitlement_description.models.searchcriteria_filters_value import SearchcriteriaFiltersValue

searchcriteria_filters_value = SearchcriteriaFiltersValue(
type='TERMS',
terms=["active","inactive"],
range=sailpoint.suggested_entitlement_description.models.searchcriteria_filters_value_range.searchcriteria_filters_value_range(
                    lower = sailpoint.suggested_entitlement_description.models.searchcriteria_filters_value_range_lower.searchcriteria_filters_value_range_lower(
                        value = '10', 
                        inclusive = True, ), 
                    upper = sailpoint.suggested_entitlement_description.models.searchcriteria_filters_value_range_upper.searchcriteria_filters_value_range_upper(
                        value = '20', 
                        inclusive = False, ), )
)

```
[[Back to top]](#) 

