---
id: v2024-sub-search-aggregation-specification
title: SubSearchAggregationSpecification
pagination_label: SubSearchAggregationSpecification
sidebar_label: SubSearchAggregationSpecification
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SubSearchAggregationSpecification', 'V2024SubSearchAggregationSpecification'] 
slug: /tools/sdk/powershell/v2024/models/sub-search-aggregation-specification
tags: ['SDK', 'Software Development Kit', 'SubSearchAggregationSpecification', 'V2024SubSearchAggregationSpecification']
---


# SubSearchAggregationSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** |  Pointer to [**NestedAggregation**](nested-aggregation) |  | [optional] 
**Metric** |  Pointer to [**MetricAggregation**](metric-aggregation) |  | [optional] 
**VarFilter** |  Pointer to [**FilterAggregation**](filter-aggregation) |  | [optional] 
**Bucket** |  Pointer to [**BucketAggregation**](bucket-aggregation) |  | [optional] 
**SubAggregation** |  Pointer to [**Aggregations**](aggregations) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SubSearchAggregationSpecification = Initialize-PSSailpoint.V2024SubSearchAggregationSpecification  -Nested null `
 -Metric null `
 -VarFilter null `
 -Bucket null `
 -SubAggregation null
```

- Convert the resource to JSON
```powershell
$SubSearchAggregationSpecification | ConvertTo-JSON
```


[[Back to top]](#) 

