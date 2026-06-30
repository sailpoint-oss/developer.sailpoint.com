---
id: nestedaggregation
title: Nestedaggregation
pagination_label: Nestedaggregation
sidebar_label: Nestedaggregation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nestedaggregation', 'Nestedaggregation'] 
slug: /tools/sdk/powershell/search/models/nestedaggregation
tags: ['SDK', 'Software Development Kit', 'Nestedaggregation', 'Nestedaggregation']
---


# Nestedaggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the nested aggregate to be included in the result. | [required]
**Type** | **String** | The type of the nested object. | [required]

## Examples

- Prepare the resource
```powershell
$Nestedaggregation = Initialize-Nestedaggregation  -Name id `
 -Type access
```

- Convert the resource to JSON
```powershell
$Nestedaggregation | ConvertTo-JSON
```


[[Back to top]](#) 

