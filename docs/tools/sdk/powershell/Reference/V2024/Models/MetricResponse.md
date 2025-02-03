---
id: v2024-metric-response
title: MetricResponse
pagination_label: MetricResponse
sidebar_label: MetricResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MetricResponse', 'V2024MetricResponse'] 
slug: /tools/sdk/powershell/v2024/models/metric-response
tags: ['SDK', 'Software Development Kit', 'MetricResponse', 'V2024MetricResponse']
---


# MetricResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the name of metric | [optional] 
**Value** | **Decimal** | the value associated to the metric | [optional] 

## Examples

- Prepare the resource
```powershell
$MetricResponse = Initialize-PSSailpoint.V2024MetricResponse  -Name null `
 -Value null
```

- Convert the resource to JSON
```powershell
$MetricResponse | ConvertTo-JSON
```


[[Back to top]](#) 

