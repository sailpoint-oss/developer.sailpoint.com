---
id: dimensionbulkdeleterequest
title: Dimensionbulkdeleterequest
pagination_label: Dimensionbulkdeleterequest
sidebar_label: Dimensionbulkdeleterequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimensionbulkdeleterequest', 'Dimensionbulkdeleterequest'] 
slug: /tools/sdk/python/dimensions/models/dimensionbulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Dimensionbulkdeleterequest', 'Dimensionbulkdeleterequest']
---

# Dimensionbulkdeleterequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_ids** | **[]str** | List of IDs of Dimensions to be deleted. | [required]
}

## Example

```python
from sailpoint.dimensions.models.dimensionbulkdeleterequest import Dimensionbulkdeleterequest

dimensionbulkdeleterequest = Dimensionbulkdeleterequest(
dimension_ids=["2c9180847812e0b1017817051919ecca","2c9180887812e0b201781e129f151816"]
)

```
[[Back to top]](#) 

