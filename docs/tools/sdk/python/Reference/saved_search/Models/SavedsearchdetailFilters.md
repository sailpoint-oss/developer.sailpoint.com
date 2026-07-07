---
id: savedsearchdetail-filters
title: SavedsearchdetailFilters
pagination_label: SavedsearchdetailFilters
sidebar_label: SavedsearchdetailFilters
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SavedsearchdetailFilters', 'SavedsearchdetailFilters'] 
slug: /tools/sdk/python/saved-search/models/savedsearchdetail-filters
tags: ['SDK', 'Software Development Kit', 'SavedsearchdetailFilters', 'SavedsearchdetailFilters']
---

# SavedsearchdetailFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**Filtertype**](filtertype) |  | [optional] 
**range** | [**Range**](range) |  | [optional] 
**terms** | **[]str** | The terms to be filtered. | [optional] 
**exclude** | **bool** | Indicates if the filter excludes results. | [optional] [default to False]
}

## Example

```python
from sailpoint.saved_search.models.savedsearchdetail_filters import SavedsearchdetailFilters

savedsearchdetail_filters = SavedsearchdetailFilters(
type='RANGE',
range=sailpoint.saved_search.models.range.range(
                    lower = sailpoint.saved_search.models.bound.bound(
                        value = '1', 
                        inclusive = False, ), 
                    upper = sailpoint.saved_search.models.bound.bound(
                        value = '1', 
                        inclusive = False, ), ),
terms=[
                    'account_count'
                    ],
exclude=False
)

```
[[Back to top]](#) 

