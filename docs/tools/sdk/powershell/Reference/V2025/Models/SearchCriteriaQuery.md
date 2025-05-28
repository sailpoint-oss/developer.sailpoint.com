---
id: v2025-search-criteria-query
title: SearchCriteriaQuery
pagination_label: SearchCriteriaQuery
sidebar_label: SearchCriteriaQuery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchCriteriaQuery', 'V2025SearchCriteriaQuery'] 
slug: /tools/sdk/powershell/v2025/models/search-criteria-query
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaQuery', 'V2025SearchCriteriaQuery']
---


# SearchCriteriaQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **String** | A structured query for advanced search. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchCriteriaQuery = Initialize-V2025SearchCriteriaQuery  -Query status:active
```

- Convert the resource to JSON
```powershell
$SearchCriteriaQuery | ConvertTo-JSON
```


[[Back to top]](#) 

