---
id: beta-search-criteria-query
title: SearchCriteriaQuery
pagination_label: SearchCriteriaQuery
sidebar_label: SearchCriteriaQuery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaQuery', 'BetaSearchCriteriaQuery'] 
slug: /tools/sdk/powershell/beta/models/search-criteria-query
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaQuery', 'BetaSearchCriteriaQuery']
---


# SearchCriteriaQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **String** | A structured query for advanced search. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchCriteriaQuery = Initialize-BetaSearchCriteriaQuery  -Query status:active
```

- Convert the resource to JSON
```powershell
$SearchCriteriaQuery | ConvertTo-JSON
```


[[Back to top]](#) 

