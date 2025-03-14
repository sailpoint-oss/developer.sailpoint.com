---
id: v2024-range
title: Range
pagination_label: Range
sidebar_label: Range
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Range', 'V2024Range'] 
slug: /tools/sdk/python/v2024/models/range
tags: ['SDK', 'Software Development Kit', 'Range', 'V2024Range']
---

# Range

The range of values to be filtered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower** | [**Bound**](bound) |  | [optional] 
**upper** | [**Bound**](bound) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.range import Range

range = Range(
lower=sailpoint.v2024.models.bound.Bound(
                    value = '1', 
                    inclusive = False, ),
upper=sailpoint.v2024.models.bound.Bound(
                    value = '1', 
                    inclusive = False, )
)

```
[[Back to top]](#) 

