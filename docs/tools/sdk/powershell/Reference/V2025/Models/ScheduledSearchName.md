---
id: v2025-scheduled-search-name
title: ScheduledSearchName
pagination_label: ScheduledSearchName
sidebar_label: ScheduledSearchName
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledSearchName', 'V2025ScheduledSearchName'] 
slug: /tools/sdk/powershell/v2025/models/scheduled-search-name
tags: ['SDK', 'Software Development Kit', 'ScheduledSearchName', 'V2025ScheduledSearchName']
---


# ScheduledSearchName

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the scheduled search.  | [optional] 
**Description** | **String** | The description of the scheduled search.  | [optional] 

## Examples

- Prepare the resource
```powershell
$ScheduledSearchName = Initialize-PSSailpoint.V2025ScheduledSearchName  -Name Daily disabled accounts `
 -Description Daily disabled accounts
```

- Convert the resource to JSON
```powershell
$ScheduledSearchName | ConvertTo-JSON
```


[[Back to top]](#) 

