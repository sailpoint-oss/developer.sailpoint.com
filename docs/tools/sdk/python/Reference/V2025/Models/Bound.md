---
id: v2025-bound
title: Bound
pagination_label: Bound
sidebar_label: Bound
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bound', 'V2025Bound'] 
slug: /tools/sdk/python/v2025/models/bound
tags: ['SDK', 'Software Development Kit', 'Bound', 'V2025Bound']
---

# Bound


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The value of the range's endpoint. | [required]
**inclusive** | **bool** | Indicates if the endpoint is included in the range. | [optional] [default to False]
}

## Example

```python
from sailpoint.v2025.models.bound import Bound

bound = Bound(
value='1',
inclusive=False
)

```
[[Back to top]](#) 

