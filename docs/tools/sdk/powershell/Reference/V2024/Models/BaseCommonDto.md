---
id: v2024-base-common-dto
title: BaseCommonDto
pagination_label: BaseCommonDto
sidebar_label: BaseCommonDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseCommonDto', 'V2024BaseCommonDto'] 
slug: /tools/sdk/powershell/v2024/models/base-common-dto
tags: ['SDK', 'Software Development Kit', 'BaseCommonDto', 'V2024BaseCommonDto']
---


# BaseCommonDto

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
$BaseCommonDto = Initialize-V2024BaseCommonDto  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z
```

- Convert the resource to JSON
```powershell
$BaseCommonDto | ConvertTo-JSON
```


[[Back to top]](#) 

