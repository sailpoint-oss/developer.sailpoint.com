---
id: get-prompt-insights-metrics-v1429-response
title: GetPromptInsightsMetricsV1429Response
pagination_label: GetPromptInsightsMetricsV1429Response
sidebar_label: GetPromptInsightsMetricsV1429Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'GetPromptInsightsMetricsV1429Response', 'GetPromptInsightsMetricsV1429Response'] 
slug: /tools/sdk/powershell/promptinsights/models/get-prompt-insights-metrics-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPromptInsightsMetricsV1429Response', 'GetPromptInsightsMetricsV1429Response']
---


# GetPromptInsightsMetricsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPromptInsightsMetricsV1429Response = Initialize-GetPromptInsightsMetricsV1429Response  -Message  Rate Limit Exceeded 
```

- Convert the resource to JSON
```powershell
$GetPromptInsightsMetricsV1429Response | ConvertTo-JSON
```


[[Back to top]](#) 

