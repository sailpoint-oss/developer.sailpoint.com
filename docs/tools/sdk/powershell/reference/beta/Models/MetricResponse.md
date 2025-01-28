---
id: beta-metric-response
title: MetricResponse
pagination_label: MetricResponse
sidebar_label: MetricResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MetricResponse', 'BetaMetricResponse'] 
slug: /tools/sdk/powershell/beta/models/metric-response
tags: ['SDK', 'Software Development Kit', 'MetricResponse', 'BetaMetricResponse']
---


# MetricResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | the name of metric | [optional] 
**Value** |  Pointer to **Decimal** | the value associated to the metric | [optional] 

## Examples

- Prepare the resource
```powershell
$MetricResponse = Initialize-PSSailpoint.BetaMetricResponse  -Name null `
 -Value null
```

- Convert the resource to JSON
```powershell
$MetricResponse | ConvertTo-JSON
```


[[Back to top]](#) 

