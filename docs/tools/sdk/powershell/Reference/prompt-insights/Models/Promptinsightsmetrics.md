---
id: promptinsightsmetrics
title: Promptinsightsmetrics
pagination_label: Promptinsightsmetrics
sidebar_label: Promptinsightsmetrics
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Promptinsightsmetrics', 'Promptinsightsmetrics'] 
slug: /tools/sdk/powershell/promptinsights/models/promptinsightsmetrics
tags: ['SDK', 'Software Development Kit', 'Promptinsightsmetrics', 'Promptinsightsmetrics']
---


# Promptinsightsmetrics

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PromptsScanned** | **Int64** | Count of prompts scanned in the interval. | [optional] 
**PromptsRedacted** | **Int64** | Count of prompts redacted in the interval. | [optional] 

## Examples

- Prepare the resource
```powershell
$Promptinsightsmetrics = Initialize-Promptinsightsmetrics  -PromptsScanned 125000 `
 -PromptsRedacted 89
```

- Convert the resource to JSON
```powershell
$Promptinsightsmetrics | ConvertTo-JSON
```


[[Back to top]](#) 

