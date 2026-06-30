---
id: outliervaluetype
title: Outliervaluetype
pagination_label: Outliervaluetype
sidebar_label: Outliervaluetype
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Outliervaluetype', 'Outliervaluetype'] 
slug: /tools/sdk/powershell/iaioutliers/models/outliervaluetype
tags: ['SDK', 'Software Development Kit', 'Outliervaluetype', 'Outliervaluetype']
---


# Outliervaluetype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **Enum** [  "INTEGER",    "FLOAT" ] | The data type of the value field | [optional] 
**Ordinal** | **Int32** | The position of the value type | [optional] 

## Examples

- Prepare the resource
```powershell
$Outliervaluetype = Initialize-Outliervaluetype  -Name INTEGER `
 -Ordinal 0
```

- Convert the resource to JSON
```powershell
$Outliervaluetype | ConvertTo-JSON
```


[[Back to top]](#) 

