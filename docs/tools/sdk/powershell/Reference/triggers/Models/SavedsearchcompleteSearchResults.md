---
id: savedsearchcomplete-search-results
title: SavedsearchcompleteSearchResults
pagination_label: SavedsearchcompleteSearchResults
sidebar_label: SavedsearchcompleteSearchResults
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedsearchcompleteSearchResults', 'SavedsearchcompleteSearchResults'] 
slug: /tools/sdk/powershell/triggers/models/savedsearchcomplete-search-results
tags: ['SDK', 'Software Development Kit', 'SavedsearchcompleteSearchResults', 'SavedsearchcompleteSearchResults']
---


# SavedsearchcompleteSearchResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | [**SavedsearchcompleteSearchResultsAccount**](savedsearchcomplete-search-results-account) |  | [optional] 
**Entitlement** | [**SavedsearchcompleteSearchResultsEntitlement**](savedsearchcomplete-search-results-entitlement) |  | [optional] 
**Identity** | [**SavedsearchcompleteSearchResultsIdentity**](savedsearchcomplete-search-results-identity) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SavedsearchcompleteSearchResults = Initialize-SavedsearchcompleteSearchResults  -Account null `
 -Entitlement null `
 -Identity null
```

- Convert the resource to JSON
```powershell
$SavedsearchcompleteSearchResults | ConvertTo-JSON
```


[[Back to top]](#) 

