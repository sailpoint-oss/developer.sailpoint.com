---
id: metricaggregation
title: Metricaggregation
pagination_label: Metricaggregation
sidebar_label: Metricaggregation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Metricaggregation', 'Metricaggregation'] 
slug: /tools/sdk/powershell/accessmodelmetadata/models/metricaggregation
tags: ['SDK', 'Software Development Kit', 'Metricaggregation', 'Metricaggregation']
---


# Metricaggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | [required]
**Type** | [**Metrictype**](metrictype) |  | [optional] 
**Field** | **String** | The field the calculation is performed on.  Prefix the field name with '@' to reference a nested object.  | [required]

## Examples

- Prepare the resource
```powershell
$Metricaggregation = Initialize-Metricaggregation  -Name Access Name Count `
 -Type null `
 -Field @access.name
```

- Convert the resource to JSON
```powershell
$Metricaggregation | ConvertTo-JSON
```


[[Back to top]](#) 

