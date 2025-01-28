---
id: v2024-search-aggregation-specification
title: SearchAggregationSpecification
pagination_label: SearchAggregationSpecification
sidebar_label: SearchAggregationSpecification
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchAggregationSpecification', 'V2024SearchAggregationSpecification'] 
slug: /tools/sdk/powershell/v2024/models/search-aggregation-specification
tags: ['SDK', 'Software Development Kit', 'SearchAggregationSpecification', 'V2024SearchAggregationSpecification']
---


# SearchAggregationSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** |  Pointer to [**NestedAggregation**](nested-aggregation) |  | [optional] 
**Metric** |  Pointer to [**MetricAggregation**](metric-aggregation) |  | [optional] 
**VarFilter** |  Pointer to [**FilterAggregation**](filter-aggregation) |  | [optional] 
**Bucket** |  Pointer to [**BucketAggregation**](bucket-aggregation) |  | [optional] 
**SubAggregation** |  Pointer to [**SubSearchAggregationSpecification**](sub-search-aggregation-specification) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchAggregationSpecification = Initialize-PSSailpoint.V2024SearchAggregationSpecification  -Nested null `
 -Metric null `
 -VarFilter null `
 -Bucket null `
 -SubAggregation null
```

- Convert the resource to JSON
```powershell
$SearchAggregationSpecification | ConvertTo-JSON
```


[[Back to top]](#) 

