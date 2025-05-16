---
id: beta-preferences-dto
title: PreferencesDto
pagination_label: PreferencesDto
sidebar_label: PreferencesDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PreferencesDto', 'BetaPreferencesDto'] 
slug: /tools/sdk/powershell/beta/models/preferences-dto
tags: ['SDK', 'Software Development Kit', 'PreferencesDto', 'BetaPreferencesDto']
---


# PreferencesDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The template notification key. | [optional] 
**Mediums** | [**[]Medium**](medium) | List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. More mediums may be added in the future. | [optional] 
**Modified** | **System.DateTime** | Modified date of preference | [optional] 

## Examples

- Prepare the resource
```powershell
$PreferencesDto = Initialize-BetaPreferencesDto  -Key cloud_manual_work_item_summary `
 -Mediums [EMAIL] `
 -Modified 2020-05-15T14:37:06.909Z
```

- Convert the resource to JSON
```powershell
$PreferencesDto | ConvertTo-JSON
```


[[Back to top]](#) 

