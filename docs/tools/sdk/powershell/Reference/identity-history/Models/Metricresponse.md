---
id: metricresponse
title: Metricresponse
pagination_label: Metricresponse
sidebar_label: Metricresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Metricresponse', 'Metricresponse'] 
slug: /tools/sdk/powershell/identityhistory/models/metricresponse
tags: ['SDK', 'Software Development Kit', 'Metricresponse', 'Metricresponse']
---


# Metricresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the name of metric | [optional] 
**Value** | **Decimal** | the value associated to the metric | [optional] 

## Examples

- Prepare the resource
```powershell
$Metricresponse = Initialize-Metricresponse  -Name null `
 -Value null
```

- Convert the resource to JSON
```powershell
$Metricresponse | ConvertTo-JSON
```


[[Back to top]](#) 

