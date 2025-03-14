---
id: sub-search-aggregation-specification
title: SubSearchAggregationSpecification
pagination_label: SubSearchAggregationSpecification
sidebar_label: SubSearchAggregationSpecification
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SubSearchAggregationSpecification', 'SubSearchAggregationSpecification'] 
slug: /tools/sdk/python/v3/models/sub-search-aggregation-specification
tags: ['SDK', 'Software Development Kit', 'SubSearchAggregationSpecification', 'SubSearchAggregationSpecification']
---

# SubSearchAggregationSpecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nested** | [**NestedAggregation**](nested-aggregation) |  | [optional] 
**metric** | [**MetricAggregation**](metric-aggregation) |  | [optional] 
**filter** | [**FilterAggregation**](filter-aggregation) |  | [optional] 
**bucket** | [**BucketAggregation**](bucket-aggregation) |  | [optional] 
**sub_aggregation** | [**Aggregations**](aggregations) |  | [optional] 
}

## Example

```python
from sailpoint.v3.models.sub_search_aggregation_specification import SubSearchAggregationSpecification

sub_search_aggregation_specification = SubSearchAggregationSpecification(
nested=sailpoint.v3.models.nested_aggregation.NestedAggregation(
                    name = 'id', 
                    type = 'access', ),
metric=sailpoint.v3.models.metric_aggregation.MetricAggregation(
                    name = 'Access Name Count', 
                    type = 'UNIQUE_COUNT', 
                    field = '@access.name', ),
filter=sailpoint.v3.models.filter_aggregation.FilterAggregation(
                    name = 'Entitlements', 
                    type = 'TERM', 
                    field = 'access.type', 
                    value = 'ENTITLEMENT', ),
bucket=sailpoint.v3.models.bucket_aggregation.BucketAggregation(
                    name = 'Identity Locations', 
                    type = 'TERMS', 
                    field = 'attributes.city', 
                    size = 100, 
                    min_doc_count = 2, ),
sub_aggregation=sailpoint.v3.models.aggregations.Aggregations(
                    nested = sailpoint.v3.models.nested_aggregation.NestedAggregation(
                        name = 'id', 
                        type = 'access', ), 
                    metric = sailpoint.v3.models.metric_aggregation.MetricAggregation(
                        name = 'Access Name Count', 
                        type = 'UNIQUE_COUNT', 
                        field = '@access.name', ), 
                    filter = sailpoint.v3.models.filter_aggregation.FilterAggregation(
                        name = 'Entitlements', 
                        field = 'access.type', 
                        value = 'ENTITLEMENT', ), 
                    bucket = sailpoint.v3.models.bucket_aggregation.BucketAggregation(
                        name = 'Identity Locations', 
                        field = 'attributes.city', 
                        size = 100, 
                        min_doc_count = 2, ), )
)

```
[[Back to top]](#) 

