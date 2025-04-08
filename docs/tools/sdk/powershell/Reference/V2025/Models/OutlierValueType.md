---
id: v2025-outlier-value-type
title: OutlierValueType
pagination_label: OutlierValueType
sidebar_label: OutlierValueType
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'OutlierValueType', 'V2025OutlierValueType'] 
slug: /tools/sdk/powershell/v2025/models/outlier-value-type
tags: ['SDK', 'Software Development Kit', 'OutlierValueType', 'V2025OutlierValueType']
---


# OutlierValueType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **Enum** [  "INTEGER",    "FLOAT" ] | The data type of the value field | [optional] 
**Ordinal** | **Int32** | The position of the value type | [optional] 

## Examples

- Prepare the resource
```powershell
$OutlierValueType = Initialize-PSSailpoint.V2025OutlierValueType  -Name INTEGER `
 -Ordinal 0
```

- Convert the resource to JSON
```powershell
$OutlierValueType | ConvertTo-JSON
```


[[Back to top]](#) 

