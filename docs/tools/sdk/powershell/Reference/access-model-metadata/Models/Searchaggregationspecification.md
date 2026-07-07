---
id: searchaggregationspecification
title: Searchaggregationspecification
pagination_label: Searchaggregationspecification
sidebar_label: Searchaggregationspecification
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Searchaggregationspecification', 'Searchaggregationspecification'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/searchaggregationspecification
tags: ['SDK', 'Software Development Kit', 'Searchaggregationspecification', 'Searchaggregationspecification']
---


# Searchaggregationspecification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | [**Nestedaggregation**](nestedaggregation) |  | [optional] 
**Metric** | [**Metricaggregation**](metricaggregation) |  | [optional] 
**VarFilter** | [**Filteraggregation**](filteraggregation) |  | [optional] 
**Bucket** | [**Bucketaggregation**](bucketaggregation) |  | [optional] 
**SubAggregation** | [**Subsearchaggregationspecification**](subsearchaggregationspecification) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Searchaggregationspecification = Initialize-Searchaggregationspecification  -Nested null `
 -Metric null `
 -VarFilter null `
 -Bucket null `
 -SubAggregation null
```

- Convert the resource to JSON
```powershell
$Searchaggregationspecification | ConvertTo-JSON
```


[[Back to top]](#) 

