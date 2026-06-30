---
id: metricaggregation
title: Metricaggregation
pagination_label: Metricaggregation
sidebar_label: Metricaggregation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Metricaggregation', 'Metricaggregation'] 
slug: /tools/sdk/python/search/models/metricaggregation
tags: ['SDK', 'Software Development Kit', 'Metricaggregation', 'Metricaggregation']
---

# Metricaggregation

The calculation done on the results of the query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | [required]
**type** | [**Metrictype**](metrictype) |  | [optional] [default to Metrictype.UNIQUE_COUNT]
**var_field** | **str** | The field the calculation is performed on.  Prefix the field name with '@' to reference a nested object.  | [required]
}

## Example

```python
from sailpoint.search.models.metricaggregation import Metricaggregation

metricaggregation = Metricaggregation(
name='Access Name Count',
type='UNIQUE_COUNT',
var_field='@access.name'
)

```
[[Back to top]](#) 

