---
id: search-aggregation-specification
title: SearchAggregationSpecification
pagination_label: SearchAggregationSpecification
sidebar_label: SearchAggregationSpecification
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchAggregationSpecification', 'SearchAggregationSpecification'] 
slug: /tools/sdk/powershell/v3/models/search-aggregation-specification
tags: ['SDK', 'Software Development Kit', 'SearchAggregationSpecification', 'SearchAggregationSpecification']
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
$SearchAggregationSpecification = Initialize-PSSailpoint.V3SearchAggregationSpecification  -Nested null `
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

