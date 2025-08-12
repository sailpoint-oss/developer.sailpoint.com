---
id: model-filter
title: ModelFilter
pagination_label: ModelFilter
sidebar_label: ModelFilter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ModelFilter', 'ModelFilter'] 
slug: /tools/sdk/powershell/v3/models/model-filter
tags: ['SDK', 'Software Development Kit', 'ModelFilter', 'ModelFilter']
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
$ModelFilter = Initialize-ModelFilter  -Type null `
 -Range null `
 -Terms null `
 -Exclude false
```

- Convert the resource to JSON
```powershell
$ModelFilter | ConvertTo-JSON
```


[[Back to top]](#) 

