---
id: savedsearchdetail-filters
title: SavedsearchdetailFilters
pagination_label: SavedsearchdetailFilters
sidebar_label: SavedsearchdetailFilters
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedsearchdetailFilters', 'SavedsearchdetailFilters'] 
slug: /tools/sdk/powershell/savedsearch/models/savedsearchdetail-filters
tags: ['SDK', 'Software Development Kit', 'SavedsearchdetailFilters', 'SavedsearchdetailFilters']
---


# SavedsearchdetailFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**Filtertype**](filtertype) |  | [optional] 
**Range** | [**Range**](range) |  | [optional] 
**Terms** | **[]String** | The terms to be filtered. | [optional] 
**Exclude** | **Boolean** | Indicates if the filter excludes results. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SavedsearchdetailFilters = Initialize-SavedsearchdetailFilters  -Type null `
 -Range null `
 -Terms null `
 -Exclude false
```

- Convert the resource to JSON
```powershell
$SavedsearchdetailFilters | ConvertTo-JSON
```


[[Back to top]](#) 

