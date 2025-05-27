---
id: v2024-source-app
title: SourceApp
pagination_label: SourceApp
sidebar_label: SourceApp
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceApp', 'V2024SourceApp'] 
slug: /tools/sdk/powershell/v2024/models/source-app
tags: ['SDK', 'Software Development Kit', 'SourceApp', 'V2024SourceApp']
---


# SourceApp

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
**AccountSource** | [**SourceAppAccountSource**](source-app-account-source) |  | [optional] 
**Owner** | [**BaseReferenceDto**](base-reference-dto) | The owner of source app | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceApp = Initialize-V2024SourceApp  -Id 2c91808874ff91550175097daaec161c `
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

