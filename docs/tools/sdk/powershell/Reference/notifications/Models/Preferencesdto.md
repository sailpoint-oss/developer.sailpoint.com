---
id: preferencesdto
title: Preferencesdto
pagination_label: Preferencesdto
sidebar_label: Preferencesdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Preferencesdto', 'Preferencesdto'] 
slug: /tools/sdk/powershell/notifications/models/preferencesdto
tags: ['SDK', 'Software Development Kit', 'Preferencesdto', 'Preferencesdto']
---


# Preferencesdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The template notification key. | [optional] 
**Mediums** | [**[]Medium**](medium) | List of preferred notification mediums, i.e., the mediums (or method) for which notifications are enabled. More mediums may be added in the future. | [optional] 
**Modified** | **System.DateTime** | Modified date of preference | [optional] 

## Examples

- Prepare the resource
```powershell
$Preferencesdto = Initialize-Preferencesdto  -Key cloud_manual_work_item_summary `
 -Mediums ["EMAIL"] `
 -Modified 2020-05-15T14:37:06.909Z
```

- Convert the resource to JSON
```powershell
$Preferencesdto | ConvertTo-JSON
```


[[Back to top]](#) 

