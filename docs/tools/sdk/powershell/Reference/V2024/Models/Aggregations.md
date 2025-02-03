---
id: v2024-aggregations
title: Aggregations
pagination_label: Aggregations
sidebar_label: Aggregations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Aggregations', 'V2024Aggregations'] 
slug: /tools/sdk/powershell/v2024/models/aggregations
tags: ['SDK', 'Software Development Kit', 'Aggregations', 'V2024Aggregations']
---


# Aggregations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** |  Pointer to [**NestedAggregation**](nested-aggregation) |  | [optional] 
**Metric** |  Pointer to [**MetricAggregation**](metric-aggregation) |  | [optional] 
**VarFilter** |  Pointer to [**FilterAggregation**](filter-aggregation) |  | [optional] 
**Bucket** |  Pointer to [**BucketAggregation**](bucket-aggregation) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Aggregations = Initialize-PSSailpoint.V2024Aggregations  -Nested null `
 -Metric null `
 -VarFilter null `
 -Bucket null
```

- Convert the resource to JSON
```powershell
$Aggregations | ConvertTo-JSON
```


[[Back to top]](#) 

