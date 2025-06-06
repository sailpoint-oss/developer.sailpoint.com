---
id: v2024-search-criteria-text-query
title: SearchCriteriaTextQuery
pagination_label: SearchCriteriaTextQuery
sidebar_label: SearchCriteriaTextQuery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaTextQuery', 'V2024SearchCriteriaTextQuery'] 
slug: /tools/sdk/powershell/v2024/models/search-criteria-text-query
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaTextQuery', 'V2024SearchCriteriaTextQuery']
---


# SearchCriteriaTextQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Terms** | **[]String** | Terms to search for. | [optional] 
**Fields** | **[]String** | Fields to search within. | [optional] 
**MatchAny** | **Boolean** | Whether to match any of the terms. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SearchCriteriaTextQuery = Initialize-V2024SearchCriteriaTextQuery  -Terms [admin, user] `
 -Fields [role, name] `
 -MatchAny true
```

- Convert the resource to JSON
```powershell
$SearchCriteriaTextQuery | ConvertTo-JSON
```


[[Back to top]](#) 

