---
id: source-app
title: SourceApp
pagination_label: SourceApp
sidebar_label: SourceApp
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceApp'] 
slug: /tools/sdk/powershell/v2024/models/source-app
tags: ['SDK', 'Software Development Kit', 'SourceApp']
---


# SourceApp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The source app id | [optional] 
**CloudAppId** |  Pointer to **String** | The deprecated source app id | [optional] 
**Name** |  Pointer to **String** | The source app name | [optional] 
**Created** |  Pointer to **System.DateTime** | Time when the source app was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | Time when the source app was last modified | [optional] 
**Enabled** |  Pointer to **Boolean** | True if the source app is enabled | [optional] [default to $false]
**ProvisionRequestEnabled** |  Pointer to **Boolean** | True if the source app is provision request enabled | [optional] [default to $false]
**Description** |  Pointer to **String** | The description of the source app | [optional] 
**MatchAllAccounts** |  Pointer to **Boolean** | True if the source app match all accounts | [optional] [default to $false]
**AppCenterEnabled** |  Pointer to **Boolean** | True if the source app is shown in the app center | [optional] [default to $true]
**AccountSource** |  Pointer to [**SourceAppAccountSource**](source-app-account-source) |  | [optional] 
**Owner** |  Pointer to [**BaseReferenceDto**](base-reference-dto) | The owner of source app | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceApp = Initialize-PSSailpoint.V2024SourceApp  -Id 2c91808874ff91550175097daaec161c `
 -CloudAppId 9854520 `
 -Name my app `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -Enabled true `
 -ProvisionRequestEnabled true `
 -Description the source app for engineers `
 -MatchAllAccounts true `
 -AppCenterEnabled true `
 -AccountSource null `
 -Owner null
```

- Convert the resource to JSON
```powershell
$SourceApp | ConvertTo-JSON
```


[[Back to top]](#) 

