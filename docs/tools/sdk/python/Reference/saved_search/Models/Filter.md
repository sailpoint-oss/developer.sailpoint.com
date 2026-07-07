---
id: filter
title: Filter
pagination_label: Filter
sidebar_label: Filter
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Filter', 'Filter'] 
slug: /tools/sdk/python/saved-search/models/filter
tags: ['SDK', 'Software Development Kit', 'Filter', 'Filter']
---

# Filter


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
from sailpoint.saved_search.models.filter import Filter

filter = Filter(
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

