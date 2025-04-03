---
id: v2025-sub-search-aggregation-specification
title: SubSearchAggregationSpecification
pagination_label: SubSearchAggregationSpecification
sidebar_label: SubSearchAggregationSpecification
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SubSearchAggregationSpecification', 'V2025SubSearchAggregationSpecification'] 
slug: /tools/sdk/python/v2025/models/sub-search-aggregation-specification
tags: ['SDK', 'Software Development Kit', 'SubSearchAggregationSpecification', 'V2025SubSearchAggregationSpecification']
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
from sailpoint.v2025.models.sub_search_aggregation_specification import SubSearchAggregationSpecification

sub_search_aggregation_specification = SubSearchAggregationSpecification(
nested=sailpoint.v2025.models.nested_aggregation.NestedAggregation(
                    name = 'id', 
                    type = 'access', ),
metric=sailpoint.v2025.models.metric_aggregation.MetricAggregation(
                    name = 'Access Name Count', 
                    type = 'UNIQUE_COUNT', 
                    field = '@access.name', ),
filter=sailpoint.v2025.models.filter_aggregation.FilterAggregation(
                    name = 'Entitlements', 
                    type = 'TERM', 
                    field = 'access.type', 
                    value = 'ENTITLEMENT', ),
bucket=sailpoint.v2025.models.bucket_aggregation.BucketAggregation(
                    name = 'Identity Locations', 
                    type = 'TERMS', 
                    field = 'attributes.city', 
                    size = 100, 
                    min_doc_count = 2, ),
sub_aggregation=sailpoint.v2025.models.aggregations.Aggregations(
                    nested = sailpoint.v2025.models.nested_aggregation.NestedAggregation(
                        name = 'id', 
                        type = 'access', ), 
                    metric = sailpoint.v2025.models.metric_aggregation.MetricAggregation(
                        name = 'Access Name Count', 
                        type = 'UNIQUE_COUNT', 
                        field = '@access.name', ), 
                    filter = sailpoint.v2025.models.filter_aggregation.FilterAggregation(
                        name = 'Entitlements', 
                        field = 'access.type', 
                        value = 'ENTITLEMENT', ), 
                    bucket = sailpoint.v2025.models.bucket_aggregation.BucketAggregation(
                        name = 'Identity Locations', 
                        field = 'attributes.city', 
                        size = 100, 
                        min_doc_count = 2, ), )
)

```
[[Back to top]](#) 

