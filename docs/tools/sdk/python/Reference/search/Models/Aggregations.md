---
id: aggregations
title: Aggregations
pagination_label: Aggregations
sidebar_label: Aggregations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Aggregations', 'Aggregations'] 
slug: /tools/sdk/python/search/models/aggregations
tags: ['SDK', 'Software Development Kit', 'Aggregations', 'Aggregations']
---

# Aggregations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nested** | [**Nestedaggregation**](nestedaggregation) |  | [optional] 
**metric** | [**Metricaggregation**](metricaggregation) |  | [optional] 
**filter** | [**Filteraggregation**](filteraggregation) |  | [optional] 
**bucket** | [**Bucketaggregation**](bucketaggregation) |  | [optional] 
}

## Example

```python
from sailpoint.search.models.aggregations import Aggregations

aggregations = Aggregations(
nested=sailpoint.search.models.nestedaggregation.nestedaggregation(
                    name = 'id', 
                    type = 'access', ),
metric=sailpoint.search.models.metricaggregation.metricaggregation(
                    name = 'Access Name Count', 
                    type = 'UNIQUE_COUNT', 
                    field = '@access.name', ),
filter=sailpoint.search.models.filteraggregation.filteraggregation(
                    name = 'Entitlements', 
                    type = 'TERM', 
                    field = 'access.type', 
                    value = 'ENTITLEMENT', ),
bucket=sailpoint.search.models.bucketaggregation.bucketaggregation(
                    name = 'Identity Locations', 
                    type = 'TERMS', 
                    field = 'attributes.city', 
                    size = 100, 
                    min_doc_count = 2, )
)

```
[[Back to top]](#) 

