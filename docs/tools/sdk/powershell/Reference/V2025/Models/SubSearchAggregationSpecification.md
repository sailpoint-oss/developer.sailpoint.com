---
id: v2025-sub-search-aggregation-specification
title: SubSearchAggregationSpecification
pagination_label: SubSearchAggregationSpecification
sidebar_label: SubSearchAggregationSpecification
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SubSearchAggregationSpecification', 'V2025SubSearchAggregationSpecification'] 
slug: /tools/sdk/powershell/v2025/models/sub-search-aggregation-specification
tags: ['SDK', 'Software Development Kit', 'SubSearchAggregationSpecification', 'V2025SubSearchAggregationSpecification']
---


# SubSearchAggregationSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | [**NestedAggregation**](nested-aggregation) |  | [optional] 
**Metric** | [**MetricAggregation**](metric-aggregation) |  | [optional] 
**VarFilter** | [**FilterAggregation**](filter-aggregation) |  | [optional] 
**Bucket** | [**BucketAggregation**](bucket-aggregation) |  | [optional] 
**SubAggregation** | [**Aggregations**](aggregations) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SubSearchAggregationSpecification = Initialize-V2025SubSearchAggregationSpecification  -Nested null `
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

