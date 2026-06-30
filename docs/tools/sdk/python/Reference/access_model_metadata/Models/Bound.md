---
id: bound
title: Bound
pagination_label: Bound
sidebar_label: Bound
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Bound', 'Bound'] 
slug: /tools/sdk/python/access-model-metadata/models/bound
tags: ['SDK', 'Software Development Kit', 'Bound', 'Bound']
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
from sailpoint.access_model_metadata.models.bound import Bound

bound = Bound(
value='1',
inclusive=False
)

```
[[Back to top]](#) 

