---
id: searchaggregationspecification
title: Searchaggregationspecification
pagination_label: Searchaggregationspecification
sidebar_label: Searchaggregationspecification
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Searchaggregationspecification', 'Searchaggregationspecification'] 
slug: /tools/sdk/python/search/models/searchaggregationspecification
tags: ['SDK', 'Software Development Kit', 'Searchaggregationspecification', 'Searchaggregationspecification']
---

# Searchaggregationspecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nested** | [**Nestedaggregation**](nestedaggregation) |  | [optional] 
**metric** | [**Metricaggregation**](metricaggregation) |  | [optional] 
**filter** | [**Filteraggregation**](filteraggregation) |  | [optional] 
**bucket** | [**Bucketaggregation**](bucketaggregation) |  | [optional] 
**sub_aggregation** | [**Subsearchaggregationspecification**](subsearchaggregationspecification) |  | [optional] 
}

## Example

```python
from sailpoint.search.models.searchaggregationspecification import Searchaggregationspecification

searchaggregationspecification = Searchaggregationspecification(
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
sub_aggregation=
)

```
[[Back to top]](#) 

