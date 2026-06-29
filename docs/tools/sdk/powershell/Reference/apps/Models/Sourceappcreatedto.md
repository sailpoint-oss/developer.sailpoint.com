---
id: sourceappcreatedto
title: Sourceappcreatedto
pagination_label: Sourceappcreatedto
sidebar_label: Sourceappcreatedto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceappcreatedto', 'Sourceappcreatedto'] 
slug: /tools/sdk/powershell/apps/models/sourceappcreatedto
tags: ['SDK', 'Software Development Kit', 'Sourceappcreatedto', 'Sourceappcreatedto']
---


# Sourceappcreatedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The source app name | [required]
**Description** | **String** | The description of the source app | [required]
**MatchAllAccounts** | **Boolean** | True if the source app match all accounts | [optional] [default to $false]
**AccountSource** | [**SourceappcreatedtoAccountSource**](sourceappcreatedto-account-source) |  | [required]

## Examples

- Prepare the resource
```powershell
$Sourceappcreatedto = Initialize-Sourceappcreatedto  -Name my app `
 -Description the source app for engineers `
 -MatchAllAccounts true `
 -AccountSource null
```

- Convert the resource to JSON
```powershell
$Sourceappcreatedto | ConvertTo-JSON
```


[[Back to top]](#) 

