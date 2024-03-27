---
id: aggregations
title: Aggregations
pagination_label: Aggregations
sidebar_label: Aggregations
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Aggregations'] 
slug: /tools/sdk/powershell/v3/models/aggregations
tags: ['SDK', 'Software Development Kit', 'Aggregations']
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
$Aggregations = Initialize-PSSailpointAggregations  -Nested null `
 -Metric null `
 -VarFilter null `
 -Bucket null
```

- Convert the resource to JSON
```powershell
$Aggregations | ConvertTo-JSON
```


[[Back to top]](#) 

