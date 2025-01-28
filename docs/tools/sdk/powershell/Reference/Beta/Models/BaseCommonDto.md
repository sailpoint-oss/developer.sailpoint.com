---
id: beta-base-common-dto
title: BaseCommonDto
pagination_label: BaseCommonDto
sidebar_label: BaseCommonDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseCommonDto', 'BetaBaseCommonDto'] 
slug: /tools/sdk/powershell/beta/models/base-common-dto
tags: ['SDK', 'Software Development Kit', 'BaseCommonDto', 'BetaBaseCommonDto']
---


# BaseCommonDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **String** | Name of the Object | [required]
**Created** |  Pointer to **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Last modification date of the Object | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$BaseCommonDto = Initialize-PSSailpoint.BetaBaseCommonDto  -Id id12345 `
 -Name aName `
 -Created 2023-01-03T21:16:22.432Z `
 -Modified 2023-01-03T21:16:22.432Z
```

- Convert the resource to JSON
```powershell
$BaseCommonDto | ConvertTo-JSON
```


[[Back to top]](#) 

