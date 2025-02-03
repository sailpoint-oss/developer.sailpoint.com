---
id: beta-source-app-create-dto
title: SourceAppCreateDto
pagination_label: SourceAppCreateDto
sidebar_label: SourceAppCreateDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAppCreateDto', 'BetaSourceAppCreateDto'] 
slug: /tools/sdk/powershell/beta/models/source-app-create-dto
tags: ['SDK', 'Software Development Kit', 'SourceAppCreateDto', 'BetaSourceAppCreateDto']
---


# SourceAppCreateDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | The source app name | [required]
**Description** |  **String** | The description of the source app | [required]
**MatchAllAccounts** |  Pointer to **Boolean** | True if the source app match all accounts | [optional] [default to $false]
**AccountSource** |  [**SourceAppCreateDtoAccountSource**](source-app-create-dto-account-source) |  | [required]

## Examples

- Prepare the resource
```powershell
$SourceAppCreateDto = Initialize-PSSailpoint.BetaSourceAppCreateDto  -Name my app `
 -Description the source app for engineers `
 -MatchAllAccounts true `
 -AccountSource null
```

- Convert the resource to JSON
```powershell
$SourceAppCreateDto | ConvertTo-JSON
```


[[Back to top]](#) 

