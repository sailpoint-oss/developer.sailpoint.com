---
id: searchcriteria-text-query
title: SearchcriteriaTextQuery
pagination_label: SearchcriteriaTextQuery
sidebar_label: SearchcriteriaTextQuery
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchcriteriaTextQuery', 'SearchcriteriaTextQuery'] 
slug: /tools/sdk/powershell/suggestedentitlementdescription/models/searchcriteria-text-query
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaTextQuery', 'SearchcriteriaTextQuery']
---


# SearchcriteriaTextQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Terms** | **[]String** | Terms to search for. | [optional] 
**Fields** | **[]String** | Fields to search within. | [optional] 
**MatchAny** | **Boolean** | Whether to match any of the terms. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SearchcriteriaTextQuery = Initialize-SearchcriteriaTextQuery  -Terms ["admin","user"] `
 -Fields ["role","name"] `
 -MatchAny true
```

- Convert the resource to JSON
```powershell
$SearchcriteriaTextQuery | ConvertTo-JSON
```


[[Back to top]](#) 

