---
id: searchcriteria-query
title: SearchcriteriaQuery
pagination_label: SearchcriteriaQuery
sidebar_label: SearchcriteriaQuery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchcriteriaQuery', 'SearchcriteriaQuery'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/searchcriteria-query
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaQuery', 'SearchcriteriaQuery']
---


# SearchcriteriaQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **String** | A structured query for advanced search. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchcriteriaQuery = Initialize-SearchcriteriaQuery  -Query status:active
```

- Convert the resource to JSON
```powershell
$SearchcriteriaQuery | ConvertTo-JSON
```


[[Back to top]](#) 

