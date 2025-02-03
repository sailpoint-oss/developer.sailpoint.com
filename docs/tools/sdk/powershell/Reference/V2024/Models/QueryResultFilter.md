---
id: v2024-query-result-filter
title: QueryResultFilter
pagination_label: QueryResultFilter
sidebar_label: QueryResultFilter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'QueryResultFilter', 'V2024QueryResultFilter'] 
slug: /tools/sdk/powershell/v2024/models/query-result-filter
tags: ['SDK', 'Software Development Kit', 'QueryResultFilter', 'V2024QueryResultFilter']
---


# QueryResultFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Includes** | **[]String** | The list of field names to include in the result documents. | [optional] 
**Excludes** | **[]String** | The list of field names to exclude from the result documents. | [optional] 

## Examples

- Prepare the resource
```powershell
$QueryResultFilter = Initialize-PSSailpoint.V2024QueryResultFilter  -Includes [name, displayName] `
 -Excludes [stacktrace]
```

- Convert the resource to JSON
```powershell
$QueryResultFilter | ConvertTo-JSON
```


[[Back to top]](#) 

