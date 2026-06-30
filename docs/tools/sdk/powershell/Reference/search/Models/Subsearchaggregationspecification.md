---
id: subsearchaggregationspecification
title: Subsearchaggregationspecification
pagination_label: Subsearchaggregationspecification
sidebar_label: Subsearchaggregationspecification
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Subsearchaggregationspecification', 'Subsearchaggregationspecification'] 
slug: /tools/sdk/powershell/search/models/subsearchaggregationspecification
tags: ['SDK', 'Software Development Kit', 'Subsearchaggregationspecification', 'Subsearchaggregationspecification']
---


# Subsearchaggregationspecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | [**Nestedaggregation**](nestedaggregation) |  | [optional] 
**Metric** | [**Metricaggregation**](metricaggregation) |  | [optional] 
**VarFilter** | [**Filteraggregation**](filteraggregation) |  | [optional] 
**Bucket** | [**Bucketaggregation**](bucketaggregation) |  | [optional] 
**SubAggregation** | [**Aggregations**](aggregations) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Subsearchaggregationspecification = Initialize-Subsearchaggregationspecification  -Nested null `
 -Metric null `
 -VarFilter null `
 -Bucket null `
 -SubAggregation null
```

- Convert the resource to JSON
```powershell
$Subsearchaggregationspecification | ConvertTo-JSON
```


[[Back to top]](#) 

