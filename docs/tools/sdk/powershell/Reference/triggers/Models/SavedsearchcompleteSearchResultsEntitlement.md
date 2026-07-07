---
id: savedsearchcomplete-search-results-entitlement
title: SavedsearchcompleteSearchResultsEntitlement
pagination_label: SavedsearchcompleteSearchResultsEntitlement
sidebar_label: SavedsearchcompleteSearchResultsEntitlement
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedsearchcompleteSearchResultsEntitlement', 'SavedsearchcompleteSearchResultsEntitlement'] 
slug: /tools/sdk/powershell/triggers/models/savedsearchcomplete-search-results-entitlement
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResultsEntitlement', 'SavedsearchcompleteSearchResultsEntitlement']
---


# SavedsearchcompleteSearchResultsEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **String** | The number of rows in the table. | [required]
**Noun** | **String** | The type of object represented in the table. | [required]
**Preview** | **[]String[]** | A sample of the data in the table. | [required]

## Examples

- Prepare the resource
```powershell
$SavedsearchcompleteSearchResultsEntitlement = Initialize-SavedsearchcompleteSearchResultsEntitlement  -Count 2 `
 -Noun entitlements `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedsearchcompleteSearchResultsEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

