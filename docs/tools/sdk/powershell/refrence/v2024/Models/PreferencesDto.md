---
id: preferences-dto
title: PreferencesDto
pagination_label: PreferencesDto
sidebar_label: PreferencesDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PreferencesDto'] 
slug: /tools/sdk/powershell/v2024/models/preferences-dto
tags: ['SDK', 'Software Development Kit', 'PreferencesDto']
---


# PreferencesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **String** | The template notification key. | [optional] 
**Mediums** |  Pointer to [**[]Medium**](medium) | List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. More mediums may be added in the future. | [optional] 
**Modified** |  Pointer to **System.DateTime** | Modified date of preference | [optional] 

## Examples

- Prepare the resource
```powershell
$PreferencesDto = Initialize-PSSailpoint.V2024PreferencesDto  -Key cloud_manual_work_item_summary `
 -Mediums [EMAIL] `
 -Modified 2020-05-15T14:37:06.909Z
```

- Convert the resource to JSON
```powershell
$PreferencesDto | ConvertTo-JSON
```


[[Back to top]](#) 

