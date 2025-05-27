---
id: v2025-search-aggregation-specification
title: SearchAggregationSpecification
pagination_label: SearchAggregationSpecification
sidebar_label: SearchAggregationSpecification
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchAggregationSpecification', 'V2025SearchAggregationSpecification'] 
slug: /tools/sdk/powershell/v2025/models/search-aggregation-specification
tags: ['SDK', 'Software Development Kit', 'SearchAggregationSpecification', 'V2025SearchAggregationSpecification']
---


# SearchAggregationSpecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | [**NestedAggregation**](nested-aggregation) |  | [optional] 
**Metric** | [**MetricAggregation**](metric-aggregation) |  | [optional] 
**VarFilter** | [**FilterAggregation**](filter-aggregation) |  | [optional] 
**Bucket** | [**BucketAggregation**](bucket-aggregation) |  | [optional] 
**SubAggregation** | [**SubSearchAggregationSpecification**](sub-search-aggregation-specification) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchAggregationSpecification = Initialize-V2025SearchAggregationSpecification  -Nested null `
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

