---
id: v2025-nested-aggregation
title: NestedAggregation
pagination_label: NestedAggregation
sidebar_label: NestedAggregation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'NestedAggregation', 'V2025NestedAggregation'] 
slug: /tools/sdk/python/v2025/models/nested-aggregation
tags: ['SDK', 'Software Development Kit', 'NestedAggregation', 'V2025NestedAggregation']
---

# NestedAggregation

The nested aggregation object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the nested aggregate to be included in the result. | [required]
**type** | **str** | The type of the nested object. | [required]
}

## Example

```python
from sailpoint.v2025.models.nested_aggregation import NestedAggregation

nested_aggregation = NestedAggregation(
name='id',
type='access'
)

```
[[Back to top]](#) 

