---
id: v2025-filter-aggregation
title: FilterAggregation
pagination_label: FilterAggregation
sidebar_label: FilterAggregation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FilterAggregation', 'V2025FilterAggregation'] 
slug: /tools/sdk/python/v2025/models/filter-aggregation
tags: ['SDK', 'Software Development Kit', 'FilterAggregation', 'V2025FilterAggregation']
---

# FilterAggregation

An additional filter to constrain the results of the search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the filter aggregate to be included in the result. | [required]
**type** | [**SearchFilterType**](search-filter-type) |  | [optional] [default to SearchFilterType.TERM]
**var_field** | **str** | The search field to apply the filter to.  Prefix the field name with '@' to reference a nested object.  | [required]
**value** | **str** | The value to filter on. | [required]
}

## Example

```python
from sailpoint.v2025.models.filter_aggregation import FilterAggregation

filter_aggregation = FilterAggregation(
name='Entitlements',
type='TERM',
var_field='access.type',
value='ENTITLEMENT'
)

```
[[Back to top]](#) 

