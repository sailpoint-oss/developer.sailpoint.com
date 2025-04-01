---
id: v2025-user-app
title: UserApp
pagination_label: UserApp
sidebar_label: UserApp
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UserApp', 'V2025UserApp'] 
slug: /tools/sdk/powershell/v2025/models/user-app
tags: ['SDK', 'Software Development Kit', 'UserApp', 'V2025UserApp']
---


# UserApp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The user app id | [optional] 
**Created** | **System.DateTime** | Time when the user app was created | [optional] 
**Modified** | **System.DateTime** | Time when the user app was last modified | [optional] 
**HasMultipleAccounts** | **Boolean** | True if the owner has multiple accounts for the source | [optional] [default to $false]
**UseForPasswordManagement** | **Boolean** | True if the source has password feature | [optional] [default to $false]
**ProvisionRequestEnabled** | **Boolean** | True if the source app related to the user app is provision request enabled | [optional] [default to $false]
**AppCenterEnabled** | **Boolean** | True if the source app related to the user app is shown in the app center | [optional] [default to $true]
**SourceApp** | [**UserAppSourceApp**](user-app-source-app) |  | [optional] 
**Source** | [**UserAppSource**](user-app-source) |  | [optional] 
**Account** | [**UserAppAccount**](user-app-account) |  | [optional] 
**Owner** | [**UserAppOwner**](user-app-owner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$UserApp = Initialize-PSSailpoint.V2025UserApp  -Id 2c91808874ff91550175097daaec161c `
 -Created 2020-10-08T18:33:52.029Z `
 -Modified 2020-10-08T18:33:52.029Z `
 -HasMultipleAccounts false `
 -UseForPasswordManagement true `
 -ProvisionRequestEnabled true `
 -AppCenterEnabled true `
 -SourceApp null `
 -Source null `
 -Account null `
 -Owner null
```

- Convert the resource to JSON
```powershell
$UserApp | ConvertTo-JSON
```


[[Back to top]](#) 

