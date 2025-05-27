---
id: beta-search-criteria-text-query
title: SearchCriteriaTextQuery
pagination_label: SearchCriteriaTextQuery
sidebar_label: SearchCriteriaTextQuery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaTextQuery', 'BetaSearchCriteriaTextQuery'] 
slug: /tools/sdk/powershell/beta/models/search-criteria-text-query
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaTextQuery', 'BetaSearchCriteriaTextQuery']
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
$SearchCriteriaTextQuery = Initialize-BetaSearchCriteriaTextQuery  -Terms [admin, user] `
 -Fields [role, name] `
 -MatchAny true
```

- Convert the resource to JSON
```powershell
$SearchCriteriaTextQuery | ConvertTo-JSON
```


[[Back to top]](#) 

