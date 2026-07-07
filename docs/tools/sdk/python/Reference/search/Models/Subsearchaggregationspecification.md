---
id: subsearchaggregationspecification
title: Subsearchaggregationspecification
pagination_label: Subsearchaggregationspecification
sidebar_label: Subsearchaggregationspecification
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Subsearchaggregationspecification', 'Subsearchaggregationspecification'] 
slug: /tools/sdk/python/search/models/subsearchaggregationspecification
tags: ['SDK', 'Software Development Kit', 'Subsearchaggregationspecification', 'Subsearchaggregationspecification']
---

# Subsearchaggregationspecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nested** | [**Nestedaggregation**](nestedaggregation) |  | [optional] 
**metric** | [**Metricaggregation**](metricaggregation) |  | [optional] 
**filter** | [**Filteraggregation**](filteraggregation) |  | [optional] 
**bucket** | [**Bucketaggregation**](bucketaggregation) |  | [optional] 
**sub_aggregation** | [**Aggregations**](aggregations) |  | [optional] 
}

## Example

```python
from sailpoint.search.models.subsearchaggregationspecification import Subsearchaggregationspecification

subsearchaggregationspecification = Subsearchaggregationspecification(
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
                    min_doc_count = 2, ),
sub_aggregation=sailpoint.search.models.aggregations.aggregations(
                    nested = sailpoint.search.models.nestedaggregation.nestedaggregation(
                        name = 'id', 
                        type = 'access', ), 
                    metric = sailpoint.search.models.metricaggregation.metricaggregation(
                        name = 'Access Name Count', 
                        type = 'UNIQUE_COUNT', 
                        field = '@access.name', ), 
                    filter = sailpoint.search.models.filteraggregation.filteraggregation(
                        name = 'Entitlements', 
                        field = 'access.type', 
                        value = 'ENTITLEMENT', ), 
                    bucket = sailpoint.search.models.bucketaggregation.bucketaggregation(
                        name = 'Identity Locations', 
                        field = 'attributes.city', 
                        size = 100, 
                        min_doc_count = 2, ), )
)

```
[[Back to top]](#) 

