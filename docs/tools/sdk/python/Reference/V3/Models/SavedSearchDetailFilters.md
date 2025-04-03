---
id: saved-search-detail-filters
title: SavedSearchDetailFilters
pagination_label: SavedSearchDetailFilters
sidebar_label: SavedSearchDetailFilters
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchDetailFilters', 'SavedSearchDetailFilters'] 
slug: /tools/sdk/python/v3/models/saved-search-detail-filters
tags: ['SDK', 'Software Development Kit', 'SavedSearchDetailFilters', 'SavedSearchDetailFilters']
---

# SavedSearchDetailFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**FilterType**](filter-type) |  | [optional] 
**range** | [**Range**](range) |  | [optional] 
**terms** | **[]str** | The terms to be filtered. | [optional] 
**exclude** | **bool** | Indicates if the filter excludes results. | [optional] [default to False]
}

## Example

```python
from sailpoint.v3.models.saved_search_detail_filters import SavedSearchDetailFilters

saved_search_detail_filters = SavedSearchDetailFilters(
type='RANGE',
range=sailpoint.v3.models.range.Range(
                    lower = sailpoint.v3.models.bound.Bound(
                        value = '1', 
                        inclusive = False, ), 
                    upper = sailpoint.v3.models.bound.Bound(
                        value = '1', 
                        inclusive = False, ), ),
terms=[
                    'account_count'
                    ],
exclude=False
)

```
[[Back to top]](#) 

