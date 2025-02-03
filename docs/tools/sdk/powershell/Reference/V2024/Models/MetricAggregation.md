---
id: v2024-metric-aggregation
title: MetricAggregation
pagination_label: MetricAggregation
sidebar_label: MetricAggregation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MetricAggregation', 'V2024MetricAggregation'] 
slug: /tools/sdk/powershell/v2024/models/metric-aggregation
tags: ['SDK', 'Software Development Kit', 'MetricAggregation', 'V2024MetricAggregation']
---


# MetricAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the metric aggregate to be included in the result. If the metric aggregation is omitted, the resulting aggregation will be a count of the documents in the search results. | [required]
**Type** | [**MetricType**](metric-type) |  | [optional] 
**Field** | **String** | The field the calculation is performed on.  Prefix the field name with '@' to reference a nested object.  | [required]

## Examples

- Prepare the resource
```powershell
$MetricAggregation = Initialize-PSSailpoint.V2024MetricAggregation  -Name Access Name Count `
 -Type null `
 -Field @access.name
```

- Convert the resource to JSON
```powershell
$MetricAggregation | ConvertTo-JSON
```


[[Back to top]](#) 

