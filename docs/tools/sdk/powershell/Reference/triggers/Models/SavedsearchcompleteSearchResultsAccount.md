---
id: savedsearchcomplete-search-results-account
title: SavedsearchcompleteSearchResultsAccount
pagination_label: SavedsearchcompleteSearchResultsAccount
sidebar_label: SavedsearchcompleteSearchResultsAccount
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedsearchcompleteSearchResultsAccount', 'SavedsearchcompleteSearchResultsAccount'] 
slug: /tools/sdk/powershell/triggers/models/savedsearchcomplete-search-results-account
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResultsAccount', 'SavedsearchcompleteSearchResultsAccount']
---


# SavedsearchcompleteSearchResultsAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **String** | The number of rows in the table. | [required]
**Noun** | **String** | The type of object represented in the table. | [required]
**Preview** | **[]String[]** | A sample of the data in the table. | [required]

## Examples

- Prepare the resource
```powershell
$SavedsearchcompleteSearchResultsAccount = Initialize-SavedsearchcompleteSearchResultsAccount  -Count 3 `
 -Noun accounts `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedsearchcompleteSearchResultsAccount | ConvertTo-JSON
```


[[Back to top]](#) 

