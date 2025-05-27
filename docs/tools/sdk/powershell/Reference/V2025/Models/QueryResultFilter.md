---
id: v2025-query-result-filter
title: QueryResultFilter
pagination_label: QueryResultFilter
sidebar_label: QueryResultFilter
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'QueryResultFilter', 'V2025QueryResultFilter'] 
slug: /tools/sdk/powershell/v2025/models/query-result-filter
tags: ['SDK', 'Software Development Kit', 'QueryResultFilter', 'V2025QueryResultFilter']
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
$QueryResultFilter = Initialize-V2025QueryResultFilter  -Includes [name, displayName] `
 -Excludes [stacktrace]
```

- Convert the resource to JSON
```powershell
$QueryResultFilter | ConvertTo-JSON
```


[[Back to top]](#) 

