---
id: v2024-filter
title: Filter
pagination_label: Filter
sidebar_label: Filter
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Filter', 'V2024Filter'] 
slug: /tools/sdk/python/v2024/models/filter
tags: ['SDK', 'Software Development Kit', 'Filter', 'V2024Filter']
---

# Filter


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
from sailpoint.v2024.models.filter import Filter

filter = Filter(
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

