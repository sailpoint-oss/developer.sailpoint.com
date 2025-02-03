---
id: v2024-base-common-dto1
title: BaseCommonDto1
pagination_label: BaseCommonDto1
sidebar_label: BaseCommonDto1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseCommonDto1', 'V2024BaseCommonDto1'] 
slug: /tools/sdk/powershell/v2024/models/base-common-dto1
tags: ['SDK', 'Software Development Kit', 'BaseCommonDto1', 'V2024BaseCommonDto1']
---


# BaseCommonDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$BaseCommonDto1 = Initialize-PSSailpoint.V2024BaseCommonDto1  -Id id12345 `
 -Name aName `
 -Created 2023-01-03T21:16:22.432Z `
 -Modified 2023-01-03T21:16:22.432Z
```

- Convert the resource to JSON
```powershell
$BaseCommonDto1 | ConvertTo-JSON
```


[[Back to top]](#) 

