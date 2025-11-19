---
id: v2025-model-filter
title: ModelFilter
pagination_label: ModelFilter
sidebar_label: ModelFilter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ModelFilter', 'V2025ModelFilter'] 
slug: /tools/sdk/powershell/v2025/models/model-filter
tags: ['SDK', 'Software Development Kit', 'ModelFilter', 'V2025ModelFilter']
---


# ModelFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**FilterType**](filter-type) |  | [optional] 
**Range** | [**Range**](range) |  | [optional] 
**Terms** | **[]String** | The terms to be filtered. | [optional] 
**Exclude** | **Boolean** | Indicates if the filter excludes results. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ModelFilter = Initialize-V2025ModelFilter  -Type null `
 -Range null `
 -Terms null `
 -Exclude false
```

- Convert the resource to JSON
```powershell
$ModelFilter | ConvertTo-JSON
```


[[Back to top]](#) 

