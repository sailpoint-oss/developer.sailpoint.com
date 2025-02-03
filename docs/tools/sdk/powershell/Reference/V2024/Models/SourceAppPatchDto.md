---
id: v2024-source-app-patch-dto
title: SourceAppPatchDto
pagination_label: SourceAppPatchDto
sidebar_label: SourceAppPatchDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceAppPatchDto', 'V2024SourceAppPatchDto'] 
slug: /tools/sdk/powershell/v2024/models/source-app-patch-dto
tags: ['SDK', 'Software Development Kit', 'SourceAppPatchDto', 'V2024SourceAppPatchDto']
---


# SourceAppPatchDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The source app id | [optional] 
**CloudAppId** | **String** | The deprecated source app id | [optional] 
**Name** | **String** | The source app name | [optional] 
**Created** | **System.DateTime** | Time when the source app was created | [optional] 
**Modified** | **System.DateTime** | Time when the source app was last modified | [optional] 
**Enabled** | **Boolean** | True if the source app is enabled | [optional] [default to $false]
**ProvisionRequestEnabled** | **Boolean** | True if the source app is provision request enabled | [optional] [default to $false]
**Description** | **String** | The description of the source app | [optional] 
**MatchAllAccounts** | **Boolean** | True if the source app match all accounts | [optional] [default to $false]
**AppCenterEnabled** | **Boolean** | True if the source app is shown in the app center | [optional] [default to $true]
**AccessProfiles** | **[]String** | List of IDs of access profiles | [optional] 
**AccountSource** | [**SourceAppAccountSource**](source-app-account-source) |  | [optional] 
**Owner** | [**BaseReferenceDto**](base-reference-dto) | The owner of source app | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAppPatchDto = Initialize-PSSailpoint.V2024SourceAppPatchDto  -Id 2c91808874ff91550175097daaec161c `
 -CloudAppId 9854520 `
 -Name my app `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Enabled true `
 -ProvisionRequestEnabled true `
 -Description the source app for engineers `
 -MatchAllAccounts true `
 -AppCenterEnabled true `
 -AccessProfiles [2c9180857725c14301772a93bb77242d, c9dc28e148a24d65b3ccb5fb8ca5ddd9] `
 -AccountSource null `
 -Owner null
```

- Convert the resource to JSON
```powershell
$SourceAppPatchDto | ConvertTo-JSON
```


[[Back to top]](#) 

