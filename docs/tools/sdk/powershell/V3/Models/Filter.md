---
id: model-filter
title: ModelFilter
pagination_label: ModelFilter
sidebar_label: ModelFilter
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ModelFilter'] 
slug: /tools/sdk/powershell/v3/models/model-filter
tags: ['SDK', 'Software Development Kit', 'ModelFilter']
---


# ModelFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**FilterType**](filter-type) |  | [optional] 
**Range** |  Pointer to [**Range**](range) |  | [optional] 
**Terms** |  Pointer to **[]String** | The terms to be filtered. | [optional] 
**Exclude** |  Pointer to **Boolean** | Indicates if the filter excludes results. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ModelFilter = Initialize-PSSailpointModelFilter  -Type null `
 -Range null `
 -Terms null `
 -Exclude false
```

- Convert the resource to JSON
```powershell
$ModelFilter | ConvertTo-JSON
```


[[Back to top]](#) 

