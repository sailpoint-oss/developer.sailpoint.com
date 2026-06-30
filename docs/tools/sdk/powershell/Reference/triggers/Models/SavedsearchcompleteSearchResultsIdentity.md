---
id: savedsearchcomplete-search-results-identity
title: SavedsearchcompleteSearchResultsIdentity
pagination_label: SavedsearchcompleteSearchResultsIdentity
sidebar_label: SavedsearchcompleteSearchResultsIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedsearchcompleteSearchResultsIdentity', 'SavedsearchcompleteSearchResultsIdentity'] 
slug: /tools/sdk/powershell/triggers/models/savedsearchcomplete-search-results-identity
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResultsIdentity', 'SavedsearchcompleteSearchResultsIdentity']
---


# SavedsearchcompleteSearchResultsIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **String** | The number of rows in the table. | [required]
**Noun** | **String** | The type of object represented in the table. | [required]
**Preview** | **[]String[]** | A sample of the data in the table. | [required]

## Examples

- Prepare the resource
```powershell
$SavedsearchcompleteSearchResultsIdentity = Initialize-SavedsearchcompleteSearchResultsIdentity  -Count 2 `
 -Noun identities `
 -Preview null
```

- Convert the resource to JSON
```powershell
$SavedsearchcompleteSearchResultsIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

