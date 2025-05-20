---
id: v2024-search-criteria-query
title: SearchCriteriaQuery
pagination_label: SearchCriteriaQuery
sidebar_label: SearchCriteriaQuery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaQuery', 'V2024SearchCriteriaQuery'] 
slug: /tools/sdk/powershell/v2024/models/search-criteria-query
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaQuery', 'V2024SearchCriteriaQuery']
---


# SearchCriteriaQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **String** | A structured query for advanced search. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchCriteriaQuery = Initialize-V2024SearchCriteriaQuery  -Query status:active
```

- Convert the resource to JSON
```powershell
$SearchCriteriaQuery | ConvertTo-JSON
```


[[Back to top]](#) 

