---
id: v2025-saved-search-name
title: SavedSearchName
pagination_label: SavedSearchName
sidebar_label: SavedSearchName
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SavedSearchName', 'V2025SavedSearchName'] 
slug: /tools/sdk/powershell/v2025/models/saved-search-name
tags: ['SDK', 'Software Development Kit', 'SavedSearchName', 'V2025SavedSearchName']
---


# SavedSearchName

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the saved search.  | [optional] 
**Description** | **String** | The description of the saved search.  | [optional] 

## Examples

- Prepare the resource
```powershell
$SavedSearchName = Initialize-PSSailpoint.V2025SavedSearchName  -Name Disabled accounts `
 -Description Disabled accounts
```

- Convert the resource to JSON
```powershell
$SavedSearchName | ConvertTo-JSON
```


[[Back to top]](#) 

