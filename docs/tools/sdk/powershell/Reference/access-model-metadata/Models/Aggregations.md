---
id: aggregations
title: Aggregations
pagination_label: Aggregations
sidebar_label: Aggregations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Aggregations', 'Aggregations'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/aggregations
tags: ['SDK', 'Software Development Kit', 'Aggregations', 'Aggregations']
---


# Aggregations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Nested** | [**Nestedaggregation**](nestedaggregation) |  | [optional] 
**Metric** | [**Metricaggregation**](metricaggregation) |  | [optional] 
**VarFilter** | [**Filteraggregation**](filteraggregation) |  | [optional] 
**Bucket** | [**Bucketaggregation**](bucketaggregation) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Aggregations = Initialize-Aggregations  -Nested null `
 -Metric null `
 -VarFilter null `
 -Bucket null
```

- Convert the resource to JSON
```powershell
$Aggregations | ConvertTo-JSON
```


[[Back to top]](#) 

