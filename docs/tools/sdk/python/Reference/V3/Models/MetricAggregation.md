---
id: metric-aggregation
title: MetricAggregation
pagination_label: MetricAggregation
sidebar_label: MetricAggregation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MetricAggregation', 'MetricAggregation'] 
slug: /tools/sdk/python/v3/models/metric-aggregation
tags: ['SDK', 'Software Development Kit', 'MetricAggregation', 'MetricAggregation']
---

# MetricAggregation

The calculation done on the results of the query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | [required]
**type** | [**MetricType**](metric-type) |  | [optional] [default to MetricType.UNIQUE_COUNT]
**var_field** | **str** | The field the calculation is performed on.  Prefix the field name with '@' to reference a nested object.  | [required]
}

## Example

```python
from sailpoint.v3.models.metric_aggregation import MetricAggregation

metric_aggregation = MetricAggregation(
name='Access Name Count',
type='UNIQUE_COUNT',
var_field='@access.name'
)

```
[[Back to top]](#) 

