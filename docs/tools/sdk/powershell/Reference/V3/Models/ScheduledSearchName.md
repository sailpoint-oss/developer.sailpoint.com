---
id: scheduled-search-name
title: ScheduledSearchName
pagination_label: ScheduledSearchName
sidebar_label: ScheduledSearchName
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ScheduledSearchName', 'ScheduledSearchName'] 
slug: /tools/sdk/powershell/v3/models/scheduled-search-name
tags: ['SDK', 'Software Development Kit', 'ScheduledSearchName', 'ScheduledSearchName']
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
$ScheduledSearchName = Initialize-PSSailpoint.V3ScheduledSearchName  -Name Daily disabled accounts `
 -Description Daily disabled accounts
```

- Convert the resource to JSON
```powershell
$ScheduledSearchName | ConvertTo-JSON
```


[[Back to top]](#) 

