---
id: metric-response
title: MetricResponse
pagination_label: MetricResponse
sidebar_label: MetricResponse
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'MetricResponse'] 
slug: /tools/sdk/powershell/beta/models/metric-response
tags: ['SDK', 'Software Development Kit', 'MetricResponse']
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
$MetricResponse = Initialize-PSSailpointBetaMetricResponse  -Name null `
 -Value null
```

- Convert the resource to JSON
```powershell
$MetricResponse | ConvertTo-JSON
```


[[Back to top]](#) 

