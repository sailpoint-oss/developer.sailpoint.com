---
id: query-result-filter
title: QueryResultFilter
pagination_label: QueryResultFilter
sidebar_label: QueryResultFilter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'QueryResultFilter', 'QueryResultFilter'] 
slug: /tools/sdk/powershell/v3/models/query-result-filter
tags: ['SDK', 'Software Development Kit', 'QueryResultFilter', 'QueryResultFilter']
---


# QueryResultFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Includes** |  Pointer to **[]String** | The list of field names to include in the result documents. | [optional] 
**Excludes** |  Pointer to **[]String** | The list of field names to exclude from the result documents. | [optional] 

## Examples

- Prepare the resource
```powershell
$QueryResultFilter = Initialize-PSSailpoint.V3QueryResultFilter  -Includes [name, displayName] `
 -Excludes [stacktrace]
```

- Convert the resource to JSON
```powershell
$QueryResultFilter | ConvertTo-JSON
```


[[Back to top]](#) 

