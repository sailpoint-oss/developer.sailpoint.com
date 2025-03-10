---
id: v2024-saved-search-detail-filters
title: SavedSearchDetailFilters
pagination_label: SavedSearchDetailFilters
sidebar_label: SavedSearchDetailFilters
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchDetailFilters', 'V2024SavedSearchDetailFilters'] 
slug: /tools/sdk/python/v2024/models/saved-search-detail-filters
tags: ['SDK', 'Software Development Kit', 'SavedSearchDetailFilters', 'V2024SavedSearchDetailFilters']
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
from sailpoint.v2024.models.saved_search_detail_filters import SavedSearchDetailFilters

saved_search_detail_filters = SavedSearchDetailFilters(
type='RANGE',
range=sailpoint.v2024.models.range.Range(
                    lower = sailpoint.v2024.models.bound.Bound(
                        value = '1', 
                        inclusive = False, ), 
                    upper = sailpoint.v2024.models.bound.Bound(
                        value = '1', 
                        inclusive = False, ), ),
terms=[
                    'account_count'
                    ],
exclude=False
)

```
[[Back to top]](#) 

