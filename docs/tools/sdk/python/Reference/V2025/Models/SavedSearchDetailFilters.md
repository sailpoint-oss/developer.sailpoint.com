---
id: v2025-saved-search-detail-filters
title: SavedSearchDetailFilters
pagination_label: SavedSearchDetailFilters
sidebar_label: SavedSearchDetailFilters
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedSearchDetailFilters', 'V2025SavedSearchDetailFilters'] 
slug: /tools/sdk/python/v2025/models/saved-search-detail-filters
tags: ['SDK', 'Software Development Kit', 'SavedSearchDetailFilters', 'V2025SavedSearchDetailFilters']
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
from sailpoint.v2025.models.saved_search_detail_filters import SavedSearchDetailFilters

saved_search_detail_filters = SavedSearchDetailFilters(
type='RANGE',
range=sailpoint.v2025.models.range.Range(
                    lower = sailpoint.v2025.models.bound.Bound(
                        value = '1', 
                        inclusive = False, ), 
                    upper = sailpoint.v2025.models.bound.Bound(
                        value = '1', 
                        inclusive = False, ), ),
terms=[
                    'account_count'
                    ],
exclude=False
)

```
[[Back to top]](#) 

